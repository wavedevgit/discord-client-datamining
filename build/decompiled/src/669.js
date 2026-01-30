// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun7986: for (var _fun7986_ip = 0;;) switch (_fun7986_ip) {
        case 0:
            var1 = module;
            var5 = this;
            var2 = function() { // Original name: t, environment: var0
                _fun7987: for (var _fun7987_ip = 0;;) switch (_fun7987_ip) {
                    case 0:
                        var0 = function(arg0) { // Original name: rgb2lrgb, environment: var4
                            _fun7988: for (var _fun7988_ip = 0;;) switch (_fun7988_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = global;
                                    var1 = var0.Math;
                                    var0 = var1.abs;
                                    var3 = var0.bind(var1)(var2);
                                    var0 = 0.04045;
                                    if (!(!(var3 < var0))) {
                                        _fun7988_ip = 110;
                                        continue _fun7988
                                    }
                                case 36:
                                    var1 = _closure2_slot143;
                                    var5 = undefined;
                                    var1 = var1.bind(var5)(var2);
                                    if (var1) {
                                        _fun7988_ip = 56;
                                        continue _fun7988
                                    }
                                case 53:
                                    var1 = 1;
                                case 56:
                                    var4 = _closure2_slot142;
                                    var0 = 0.055;
                                    var3 = var3 + var0;
                                    var0 = 1.055;
                                    var3 = var3 / var0;
                                    var0 = 2.4;
                                    var0 = var4.bind(var5)(var3, var0);
                                    var0 = var1 * var0;
                                    _fun7988_ip = 124;
                                    continue _fun7988;
                                case 110:
                                    var1 = 12.92;
                                    var0 = var2 / var1;
                                case 124:
                                    return var0;
                            }
                        };
                        var _closure2_slot242 = var0;
                        var0 = function(arg0) { // Original name: lrgb2rgb, environment: var4
                            _fun7989: for (var _fun7989_ip = 0;;) switch (_fun7989_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = global;
                                    var1 = var0.Math;
                                    var0 = var1.abs;
                                    var5 = var0.bind(var1)(var3);
                                    var0 = 0.0031308;
                                    if (!(!(var5 > var0))) {
                                        _fun7989_ip = 52;
                                        continue _fun7989
                                    }
                                case 36:
                                    var0 = 12.92;
                                    var0 = var0 * var3;
                                    _fun7989_ip = 124;
                                    continue _fun7989;
                                case 52:
                                    var2 = _closure2_slot146;
                                    var4 = undefined;
                                    var2 = var2.bind(var4)(var3);
                                    if (var2) {
                                        _fun7989_ip = 72;
                                        continue _fun7989
                                    }
                                case 69:
                                    var2 = 1;
                                case 72:
                                    var3 = _closure2_slot145;
                                    var1 = 0.4166666666666667;
                                    var3 = var3.bind(var4)(var5, var1);
                                    var1 = 1.055;
                                    var3 = var1 * var3;
                                    var1 = 0.055;
                                    var1 = var3 - var1;
                                    var0 = var2 * var1;
                                case 124:
                                    return var0;
                            }
                        };
                        var _closure2_slot243 = var0;
                        var0 = function(arg0, arg1, arg2) { // Original name: limit$2, environment: var4
                            _fun7990: for (var _fun7990_ip = 0;;) switch (_fun7990_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = arg1;
                                    var2 = arg2;
                                    var3 = undefined;
                                    if (!(var3 === var0)) {
                                        _fun7990_ip = 17;
                                        continue _fun7990
                                    }
                                case 15:
                                    var0 = 0;
                                case 17:
                                    if (!(var3 === var2)) {
                                        _fun7990_ip = 24;
                                        continue _fun7990
                                    }
                                case 21:
                                    var2 = 1;
                                case 24:
                                    if (!(!(var1 < var0))) {
                                        _fun7990_ip = 38;
                                        continue _fun7990
                                    }
                                case 28:
                                    if (!(var1 > var2)) {
                                        _fun7990_ip = 35;
                                        continue _fun7990
                                    }
                                case 32:
                                    var1 = var2;
                                case 35:
                                    var0 = var1;
                                case 38:
                                    return var0;
                            }
                        };
                        var _closure2_slot0 = var0;
                        var7 = {};
                        var _closure2_slot1 = var7;
                        var6 = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null'];
                        var1 = var6.length;
                        var12 = 0;
                        var1 = var12 < var1;
                        var5 = '[object ';
                        var3 = ']';
                        var11 = 1;
                        var2 = 0;
                        if (!var1) {
                            _fun7987_ip = 113;
                            continue _fun7987
                        }
                    case 74:
                        var9 = var6[var2];
                        var1 = var5 + var9;
                        var8 = var9.toLowerCase;
                        var8 = var8.bind(var9)();
                        var1 = var1 + var3;
                        var7[var1] = var8;
                        var2 = var2 + var11;
                        var1 = var6.length;
                        if (var2 < var1) {
                            _fun7987_ip = 74;
                            continue _fun7987
                        }
                    case 113:
                        var3 = function(arg0) { // Original name: type$p, environment: var4
                            _fun7991: for (var _fun7991_ip = 0;;) switch (_fun7991_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = global;
                                    var0 = var0.Object;
                                    var0 = var0.prototype;
                                    var3 = var0.toString;
                                    var2 = var3.call;
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var0);
                                    var0 = var1[var0];
                                    if (var0) {
                                        _fun7991_ip = 49;
                                        continue _fun7991
                                    }
                                case 45:
                                    var0 = 'object';
                                case 49:
                                    return var0;
                            }
                        };
                        var _closure2_slot2 = var3;
                        var _closure2_slot3 = var3;
                        var9 = global;
                        var1 = var9.Math;
                        var1 = var1.PI;
                        var5 = {};
                        var2 = function(arg0) { // Original name: clip_rgb$3, environment: var4
                            _fun7992: for (var _fun7992_ip = 0;;) switch (_fun7992_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = false;
                                    var0._clipped = var1;
                                    var1 = var0.slice;
                                    var8 = 0;
                                    var1 = var1.bind(var0)(var8);
                                    var0._unclipped = var1;
                                    var7 = 3;
                                    var5 = undefined;
                                    var4 = 255;
                                    var3 = true;
                                    var2 = 1;
                                    var1 = 0;
                                case 47:
                                    if (!(!(var1 < var7))) {
                                        _fun7992_ip = 76;
                                        continue _fun7992
                                    }
                                case 51:
                                    if (!(var7 === var1)) {
                                        _fun7992_ip = 123;
                                        continue _fun7992
                                    }
                                case 55:
                                    var10 = _closure2_slot0;
                                    var9 = var0[var1];
                                    var9 = var10.bind(var5)(var9, var8, var2);
                                    var0[var1] = var9;
                                    _fun7992_ip = 123;
                                    continue _fun7992;
                                case 76:
                                    var9 = var0[var1];
                                    var9 = var9 < var8;
                                    if (var9) {
                                        _fun7992_ip = 95;
                                        continue _fun7992
                                    }
                                case 87:
                                    var10 = var0[var1];
                                    var9 = var10 > var4;
                                case 95:
                                    if (!var9) {
                                        _fun7992_ip = 104;
                                        continue _fun7992
                                    }
                                case 98:
                                    var0._clipped = var3;
                                case 104:
                                    var10 = _closure2_slot0;
                                    var9 = var0[var1];
                                    var9 = var10.bind(var5)(var9, var8, var4);
                                    var0[var1] = var9;
                                case 123:
                                    var1 = var1 + 1;
                                    if (var1 <= var7) {
                                        _fun7992_ip = 47;
                                        continue _fun7992
                                    }
                                case 130:
                                    return var0;
                            }
                        };
                        var5.clip_rgb = var2;
                        var5.limit = var0;
                        var5.type = var3;
                        var0 = function(arg0, arg1) { // Original name: unpack$B, environment: var4
                            _fun7993: for (var _fun7993_ip = 0;;) switch (_fun7993_ip) {
                                case 0:
                                    var3 = arg0;
                                    var5 = arg1;
                                    var _closure3_slot0 = var3;
                                    var6 = undefined;
                                    if (!(var6 === var5)) {
                                        _fun7993_ip = 20;
                                        continue _fun7993
                                    }
                                case 18:
                                    var5 = null;
                                case 20:
                                    var2 = var3.length;
                                    var0 = 3;
                                    if (!(!(var2 >= var0))) {
                                        _fun7993_ip = 113;
                                        continue _fun7993
                                    }
                                case 32:
                                    var4 = _closure2_slot2;
                                    var0 = 0;
                                    var2 = var3[var0];
                                    var4 = var4.bind(var6)(var2);
                                    var2 = 'object';
                                    if (!(var2 == var4)) {
                                        _fun7993_ip = 61;
                                        continue _fun7993
                                    }
                                case 58:
                                    if (var5) {
                                        _fun7993_ip = 67;
                                        continue _fun7993
                                    }
                                case 61:
                                    var0 = var3[var0];
                                    _fun7993_ip = 111;
                                    continue _fun7993;
                                case 67:
                                    var4 = var5.split;
                                    var2 = '';
                                    var5 = var4.bind(var5)(var2);
                                    var4 = var5.filter;
                                    var2 = function(arg0) { // Environment: var1
                                        var1 = _closure3_slot0;
                                        var0 = 0;
                                        var1 = var1[var0];
                                        var0 = arg0;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var0 = var0 !== var1;
                                        return var0;
                                    };
                                    var4 = var4.bind(var5)(var2);
                                    var2 = var4.map;
                                    var1 = function(arg0) { // Environment: var1
                                        var1 = _closure3_slot0;
                                        var0 = 0;
                                        var1 = var1[var0];
                                        var0 = arg0;
                                        var0 = var1[var0];
                                        return var0;
                                    };
                                    var0 = var2.bind(var4)(var1);
                                case 111:
                                    _fun7993_ip = 141;
                                    continue _fun7993;
                                case 113:
                                    var1 = global;
                                    var1 = var1.Array;
                                    var1 = var1.prototype;
                                    var2 = var1.slice;
                                    var1 = var2.call;
                                    var0 = var1.bind(var2)(var3);
                                case 141:
                                    return var0;
                            }
                        };
                        var5.unpack = var0;
                        var0 = function(arg0) { // Original name: last$4, environment: var4
                            _fun7996: for (var _fun7996_ip = 0;;) switch (_fun7996_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = var2.length;
                                    var0 = 2;
                                    if (!(!(var1 < var0))) {
                                        _fun7996_ip = 74;
                                        continue _fun7996
                                    }
                                case 15:
                                    var1 = var2.length;
                                    var0 = 1;
                                    var1 = var1 - var0;
                                    var4 = _closure2_slot3;
                                    var3 = var2[var1];
                                    var0 = undefined;
                                    var3 = var4.bind(var0)(var3);
                                    var0 = 'string';
                                    var3 = var0 == var3;
                                    var0 = null;
                                    if (!var3) {
                                        _fun7996_ip = 72;
                                        continue _fun7996
                                    }
                                case 58:
                                    var2 = var2[var1];
                                    var1 = var2.toLowerCase;
                                    var0 = var1.bind(var2)();
                                case 72:
                                    return var0;
                                case 74:
                                    var0 = null;
                                    return var0;
                            }
                        };
                        var5.last = var0;
                        var5.PI = var1;
                        var19 = 2;
                        var0 = var19 * var1;
                        var5.TWOPI = var0;
                        var13 = 3;
                        var0 = var1 / var13;
                        var5.PITHIRD = var0;
                        var0 = 180;
                        var2 = var1 / var0;
                        var5.DEG2RAD = var2;
                        var0 = var0 / var1;
                        var5.RAD2DEG = var0;
                        var7 = {};
                        var0 = {};
                        var7.format = var0;
                        var0 = new Array(0);
                        var7.autodetect = var0;
                        var0 = var5.last;
                        var _closure2_slot4 = var0;
                        var0 = var5.clip_rgb;
                        var _closure2_slot5 = var0;
                        var0 = var5.type;
                        var _closure2_slot6 = var0;
                        var _closure2_slot7 = var7;
                        var1 = function() { // Original name: Color, environment: var4
                            _fun7997: for (var _fun7997_ip = 0;;) switch (_fun7997_ip) {
                                case 0:
                                    var3 = this;
                                    var2 = undefined;
                                    var5 = undefined;
                                    var1 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var4 = var0 - 1;
                                    if (!var0) {
                                        _fun7997_ip = 40;
                                        continue _fun7997
                                    }
                                case 23:
                                    var0 = arguments[var4];
                                    var1[var4] = var0;
                                    var0 = parseFloat(var4);
                                    var4 = var0 - 1;
                                    if (var0) {
                                        _fun7997_ip = 23;
                                        continue _fun7997
                                    }
                                case 40:
                                    var6 = _closure2_slot6;
                                    var0 = 0;
                                    var5 = var1[var0];
                                    var6 = var6.bind(var2)(var5);
                                    var5 = 'object';
                                    if (!(var5 === var6)) {
                                        _fun7997_ip = 99;
                                        continue _fun7997
                                    }
                                case 66:
                                    var5 = var1[var0];
                                    var5 = var5.constructor;
                                    if (!var5) {
                                        _fun7997_ip = 99;
                                        continue _fun7997
                                    }
                                case 78:
                                    var5 = var1[var0];
                                    var6 = var5.constructor;
                                    var5 = var3.constructor;
                                    if (!(var6 !== var5)) {
                                        _fun7997_ip = 414;
                                        continue _fun7997
                                    }
                                case 99:
                                    var5 = _closure2_slot4;
                                    var12 = var5.bind(var2)(var1);
                                    var5 = false;
                                    var7 = var12;
                                    if (var7) {
                                        _fun7997_ip = 259;
                                        continue _fun7997
                                    }
                                case 119:
                                    var6 = _closure2_slot7;
                                    var6 = var6.sorted;
                                    if (var6) {
                                        _fun7997_ip = 178;
                                        continue _fun7997
                                    }
                                case 132:
                                    var8 = _closure2_slot7;
                                    var10 = var8.autodetect;
                                    var9 = var10.sort;
                                    var6 = function(arg0, arg1) { // Environment: var6
                                        var0 = arg1;
                                        var1 = var0.p;
                                        var0 = arg0;
                                        var0 = var0.p;
                                        var0 = var1 - var0;
                                        return var0;
                                    };
                                    var6 = var9.bind(var10)(var6);
                                    var8.autodetect = var6;
                                    var8 = _closure2_slot7;
                                    var6 = true;
                                    var8.sorted = var6;
                                case 178:
                                    var6 = _closure2_slot7;
                                    var11 = var6.autodetect;
                                    var6 = var11.length;
                                    var6 = var0 < var6;
                                    var9 = 1;
                                    var8 = 0;
                                    var7 = var12;
                                    var5 = true;
                                    if (!var6) {
                                        _fun7997_ip = 259;
                                        continue _fun7997
                                    }
                                case 210:
                                    var13 = var11[var8];
                                    var12 = var13.test;
                                    var6 = var12.apply;
                                    var12 = var6.bind(var12)(var13, var1);
                                    var7 = var12;
                                    var5 = true;
                                    if (var12) {
                                        _fun7997_ip = 259;
                                        continue _fun7997
                                    }
                                case 238:
                                    var8 = var8 + var9;
                                    var6 = var11.length;
                                    var6 = var8 < var6;
                                    var7 = var12;
                                    var5 = true;
                                    if (var6) {
                                        _fun7997_ip = 210;
                                        continue _fun7997
                                    }
                                case 259:
                                    var6 = _closure2_slot7;
                                    var6 = var6.format;
                                    var6 = var6[var7];
                                    if (var6) {
                                        _fun7997_ip = 311;
                                        continue _fun7997
                                    }
                                case 275:
                                    var6 = global;
                                    var9 = var6.Error;
                                    var6 = var9.prototype;
                                    var8 = Object.create(var6, {
                                        constructor: {
                                            value: var9
                                        }
                                    });
                                    var15 = 'unknown format: ';
                                    var16 = var8;
                                    var6 = new var16[var9](var15, var14);
                                    var6 = var6 instanceof Object ? var6 : var8;
                                    throw var6;
                                case 311:
                                    var6 = _closure2_slot7;
                                    var6 = var6.format;
                                    var8 = var6[var7];
                                    var7 = var8.apply;
                                    var6 = var1;
                                    if (var5) {
                                        _fun7997_ip = 352;
                                        continue _fun7997
                                    }
                                case 335:
                                    var9 = var1.slice;
                                    var5 = -1;
                                    var6 = var9.bind(var1)(var0, var5);
                                case 352:
                                    var5 = null;
                                    var5 = var7.bind(var8)(var5, var6);
                                    var4 = _closure2_slot5;
                                    var4 = var4.bind(var2)(var5);
                                    var3._rgb = var4;
                                    var4 = var3._rgb;
                                    var5 = var4.length;
                                    var4 = 3;
                                    if (!(var4 === var5)) {
                                        _fun7997_ip = 412;
                                        continue _fun7997
                                    }
                                case 393:
                                    var5 = var3._rgb;
                                    var4 = var5.push;
                                    var3 = 1;
                                    var3 = var4.bind(var5)(var3);
                                case 412:
                                    return var2;
                                case 414:
                                    var0 = var1[var0];
                                    return var0;
                            }
                        };
                        var2 = var1.prototype;
                        var0 = function() { // Original name: toString, environment: var4
                            _fun7999: for (var _fun7999_ip = 0;;) switch (_fun7999_ip) {
                                case 0:
                                    var2 = this;
                                    var3 = _closure2_slot6;
                                    var1 = var2.hex;
                                    var0 = undefined;
                                    var1 = var3.bind(var0)(var1);
                                    var0 = 'function';
                                    if (!(var0 != var1)) {
                                        _fun7999_ip = 69;
                                        continue _fun7999
                                    }
                                case 31:
                                    var3 = var2._rgb;
                                    var1 = var3.join;
                                    var0 = ',';
                                    var1 = var1.bind(var3)(var0);
                                    var0 = '[';
                                    var1 = var0 + var1;
                                    var0 = ']';
                                    var0 = var1 + var0;
                                    _fun7999_ip = 79;
                                    continue _fun7999;
                                case 69:
                                    var1 = var2.hex;
                                    var0 = var1.bind(var2)();
                                case 79:
                                    return var0;
                            }
                        };
                        var2.toString = var0;
                        var0 = function() { // Original name: chroma$k, environment: var4
                            _fun8000: for (var _fun8000_ip = 0;;) switch (_fun8000_ip) {
                                case 0:
                                    var2 = undefined;
                                    var5 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8000_ip = 35;
                                        continue _fun8000
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var5[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8000_ip = 18;
                                        continue _fun8000
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var0 = _closure2_slot8;
                                    var1 = var0.Color;
                                    var4 = [null];
                                    var0 = var4.concat;
                                    var0 = var0.bind(var4)(var5);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var8 = var1;
                                    var0 = new var8[var0](var7);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot8 = var0;
                        var0.Color = var1;
                        var2 = '2.4.2';
                        var0.version = var2;
                        var2 = var5.unpack;
                        var _closure2_slot9 = var2;
                        var2 = var9.Math;
                        var2 = var2.max;
                        var _closure2_slot10 = var2;
                        var2 = var5.unpack;
                        var _closure2_slot11 = var2;
                        var _closure2_slot12 = var1;
                        var2 = var5.unpack;
                        var _closure2_slot13 = var2;
                        var2 = var5.type;
                        var _closure2_slot14 = var2;
                        var2 = function() { // Original name: rgb2cmyk$1, environment: var4
                            _fun8001: for (var _fun8001_ip = 0;;) switch (_fun8001_ip) {
                                case 0:
                                    var7 = undefined;
                                    var2 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8001_ip = 37;
                                        continue _fun8001
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var3[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8001_ip = 20;
                                        continue _fun8001
                                    }
                                case 37:
                                    var2 = _closure2_slot9;
                                    var1 = 'rgb';
                                    var2 = var2.bind(var7)(var3, var1);
                                    var3 = 0;
                                    var6 = var2[var3];
                                    var4 = 1;
                                    var5 = var2[var4];
                                    var1 = 2;
                                    var8 = var2[var1];
                                    var1 = _closure2_slot10;
                                    var2 = 255;
                                    var6 = var6 / var2;
                                    var0 = _closure2_slot10;
                                    var5 = var5 / var2;
                                    var2 = var8 / var2;
                                    var0 = var0.bind(var7)(var5, var2);
                                    var0 = var1.bind(var7)(var6, var0);
                                    var1 = var4 - var0;
                                    if (!(var1 < var4)) {
                                        _fun8001_ip = 125;
                                        continue _fun8001
                                    }
                                case 117:
                                    var0 = var4 - var1;
                                    var3 = var4 / var0;
                                case 125:
                                    var0 = new Array(4);
                                    var6 = var4 - var6;
                                    var6 = var6 - var1;
                                    var6 = var6 * var3;
                                    var0[0] = var6;
                                    var5 = var4 - var5;
                                    var5 = var5 - var1;
                                    var5 = var5 * var3;
                                    var0[1] = var5;
                                    var2 = var4 - var2;
                                    var2 = var2 - var1;
                                    var2 = var2 * var3;
                                    var0[2] = var2;
                                    var0[3] = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot15 = var2;
                        var6 = var1.prototype;
                        var2 = function() { // Environment: var4
                            var2 = _closure2_slot15;
                            var0 = this;
                            var1 = var0._rgb;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var6.cmyk = var2;
                        var2 = function() { // Environment: var4
                            _fun8004: for (var _fun8004_ip = 0;;) switch (_fun8004_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8004_ip = 35;
                                        continue _fun8004
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8004_ip = 18;
                                        continue _fun8004
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot12;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['cmyk'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.cmyk = var2;
                        var6 = var7.format;
                        var2 = function() { // Original name: cmyk2rgb, environment: var4
                            _fun8002: for (var _fun8002_ip = 0;;) switch (_fun8002_ip) {
                                case 0:
                                    var3 = undefined;
                                    var4 = undefined;
                                    var2 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8002_ip = 37;
                                        continue _fun8002
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var2[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8002_ip = 20;
                                        continue _fun8002
                                    }
                                case 37:
                                    var1 = _closure2_slot11;
                                    var0 = 'cmyk';
                                    var8 = var1.bind(var3)(var2, var0);
                                    var1 = 0;
                                    var0 = var8[var1];
                                    var4 = 1;
                                    var7 = var8[var4];
                                    var2 = 2;
                                    var5 = var8[var2];
                                    var2 = 3;
                                    var3 = var8[var2];
                                    var2 = var8.length;
                                    var6 = 4;
                                    var9 = var2 > var6;
                                    var2 = var4;
                                    if (!var9) {
                                        _fun8002_ip = 103;
                                        continue _fun8002
                                    }
                                case 99:
                                    var2 = var8[var6];
                                case 103:
                                    if (!(var4 !== var3)) {
                                        _fun8002_ip = 213;
                                        continue _fun8002
                                    }
                                case 107:
                                    var8 = var0 >= var4;
                                    var6 = 0;
                                    if (var8) {
                                        _fun8002_ip = 135;
                                        continue _fun8002
                                    }
                                case 116:
                                    var9 = var4 - var0;
                                    var8 = var4 - var3;
                                    var0 = 255;
                                    var0 = var0 * var9;
                                    var6 = var0 * var8;
                                case 135:
                                    var0 = new Array(4);
                                    var0[0] = var6;
                                    var8 = var7 >= var4;
                                    var6 = 0;
                                    if (var8) {
                                        _fun8002_ip = 171;
                                        continue _fun8002
                                    }
                                case 152:
                                    var9 = var4 - var7;
                                    var8 = var4 - var3;
                                    var7 = 255;
                                    var7 = var7 * var9;
                                    var6 = var7 * var8;
                                case 171:
                                    var0[1] = var6;
                                    var6 = var5 >= var4;
                                    var1 = 0;
                                    if (var6) {
                                        _fun8002_ip = 203;
                                        continue _fun8002
                                    }
                                case 184:
                                    var5 = var4 - var5;
                                    var4 = var4 - var3;
                                    var3 = 255;
                                    var3 = var3 * var5;
                                    var1 = var3 * var4;
                                case 203:
                                    var0[2] = var1;
                                    var0[3] = var2;
                                    _fun8002_ip = 228;
                                    continue _fun8002;
                                case 213:
                                    var1 = [0, 0, 0];
                                    var1[3] = var2;
                                    var0 = var1;
                                case 228:
                                    return var0;
                            }
                        };
                        var6.cmyk = var2;
                        var8 = var7.autodetect;
                        var6 = var8.push;
                        var2 = {};
                        var2.p = var19;
                        var10 = function() { // Original name: test, environment: var4
                            _fun8005: for (var _fun8005_ip = 0;;) switch (_fun8005_ip) {
                                case 0:
                                    var1 = undefined;
                                    var3 = undefined;
                                    var4 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var2 = var0 - 1;
                                    if (!var0) {
                                        _fun8005_ip = 37;
                                        continue _fun8005
                                    }
                                case 20:
                                    var0 = arguments[var2];
                                    var4[var2] = var0;
                                    var0 = parseFloat(var2);
                                    var2 = var0 - 1;
                                    if (var0) {
                                        _fun8005_ip = 20;
                                        continue _fun8005
                                    }
                                case 37:
                                    var2 = _closure2_slot13;
                                    var0 = 'cmyk';
                                    var2 = var2.bind(var1)(var4, var0);
                                    var3 = _closure2_slot14;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = 'array';
                                    if (!(var3 === var4)) {
                                        _fun8005_ip = 83;
                                        continue _fun8005
                                    }
                                case 71:
                                    var3 = var2.length;
                                    var2 = 4;
                                    if (!(var2 !== var3)) {
                                        _fun8005_ip = 85;
                                        continue _fun8005
                                    }
                                case 83:
                                    return var1;
                                case 85:
                                    return var0;
                            }
                        };
                        var2.test = var10;
                        var2 = var6.bind(var8)(var2);
                        var2 = var5.unpack;
                        var _closure2_slot16 = var2;
                        var2 = var5.last;
                        var _closure2_slot17 = var2;
                        var2 = function(arg0) { // Original name: rnd, environment: var4
                            var0 = global;
                            var3 = var0.Math;
                            var2 = var3.round;
                            var1 = 100;
                            var0 = arg0;
                            var0 = var1 * var0;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0 / var1;
                            return var0;
                        };
                        var _closure2_slot18 = var2;
                        var2 = var5.unpack;
                        var _closure2_slot19 = var2;
                        var2 = function() { // Original name: rgb2hsl$3, environment: var4
                            _fun8008: for (var _fun8008_ip = 0;;) switch (_fun8008_ip) {
                                case 0:
                                    var1 = undefined;
                                    var4 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var2 = var0 - 1;
                                    if (!var0) {
                                        _fun8008_ip = 37;
                                        continue _fun8008
                                    }
                                case 20:
                                    var0 = arguments[var2];
                                    var3[var2] = var0;
                                    var0 = parseFloat(var2);
                                    var2 = var0 - 1;
                                    if (var0) {
                                        _fun8008_ip = 20;
                                        continue _fun8008
                                    }
                                case 37:
                                    var2 = _closure2_slot19;
                                    var0 = 'rgba';
                                    var3 = var2.bind(var1)(var3, var0);
                                    var0 = 0;
                                    var6 = var3[var0];
                                    var2 = 1;
                                    var5 = var3[var2];
                                    var11 = 2;
                                    var4 = var3[var11];
                                    var2 = 255;
                                    var10 = var6 / var2;
                                    var8 = var5 / var2;
                                    var2 = var4 / var2;
                                    var12 = global;
                                    var5 = var12.Math;
                                    var4 = var5.min;
                                    var9 = var4.bind(var5)(var10, var8, var2);
                                    var5 = var12.Math;
                                    var4 = var5.max;
                                    var7 = var4.bind(var5)(var10, var8, var2);
                                    var4 = var7 + var9;
                                    var4 = var4 / var11;
                                    if (!(var7 !== var9)) {
                                        _fun8008_ip = 187;
                                        continue _fun8008
                                    }
                                case 139:
                                    var5 = 0.5;
                                    if (!(!(var4 < var5))) {
                                        _fun8008_ip = 171;
                                        continue _fun8008
                                    }
                                case 153:
                                    var6 = var7 - var9;
                                    var5 = var11 - var7;
                                    var5 = var5 - var9;
                                    var5 = var6 / var5;
                                    _fun8008_ip = 183;
                                    continue _fun8008;
                                case 171:
                                    var13 = var7 - var9;
                                    var6 = var7 + var9;
                                    var5 = var13 / var6;
                                case 183:
                                    var6 = undefined;
                                    _fun8008_ip = 201;
                                    continue _fun8008;
                                case 187:
                                    var12 = var12.Number;
                                    var6 = var12.NaN;
                                    var5 = 0;
                                case 201:
                                    if (!(var10 != var7)) {
                                        _fun8008_ip = 252;
                                        continue _fun8008
                                    }
                                case 205:
                                    if (!(var8 != var7)) {
                                        _fun8008_ip = 234;
                                        continue _fun8008
                                    }
                                case 209:
                                    if (!(var2 == var7)) {
                                        _fun8008_ip = 264;
                                        continue _fun8008
                                    }
                                case 213:
                                    var13 = var7 - var9;
                                    var12 = var10 - var8;
                                    var13 = var12 / var13;
                                    var12 = 4;
                                    var6 = var12 + var13;
                                    _fun8008_ip = 264;
                                    continue _fun8008;
                                case 234:
                                    var12 = var7 - var9;
                                    var10 = var2 - var10;
                                    var10 = var10 / var12;
                                    var6 = var11 + var10;
                                    _fun8008_ip = 264;
                                    continue _fun8008;
                                case 252:
                                    var7 = var7 - var9;
                                    var2 = var8 - var2;
                                    var6 = var2 / var7;
                                case 264:
                                    var2 = 60;
                                    var2 = var6 * var2;
                                    var6 = var2;
                                    if (!(var6 < var0)) {
                                        _fun8008_ip = 288;
                                        continue _fun8008
                                    }
                                case 278:
                                    var0 = 360;
                                    var6 = var2 + var0;
                                case 288:
                                    var0 = var3.length;
                                    var2 = 3;
                                    if (!(var0 > var2)) {
                                        _fun8008_ip = 308;
                                        continue _fun8008
                                    }
                                case 300:
                                    var0 = var3[var2];
                                    if (!(var1 === var0)) {
                                        _fun8008_ip = 326;
                                        continue _fun8008
                                    }
                                case 308:
                                    var0 = new Array(3);
                                    var0[0] = var6;
                                    var0[1] = var5;
                                    var0[2] = var4;
                                    _fun8008_ip = 353;
                                    continue _fun8008;
                                case 326:
                                    var1 = new Array(4);
                                    var1[0] = var6;
                                    var1[1] = var5;
                                    var1[2] = var4;
                                    var2 = var3[var2];
                                    var1[3] = var2;
                                    var0 = var1;
                                case 353:
                                    return var0;
                            }
                        };
                        var6 = var5.unpack;
                        var _closure2_slot20 = var6;
                        var6 = var5.last;
                        var _closure2_slot21 = var6;
                        var6 = function() { // Original name: hsl2css$1, environment: var4
                            _fun8007: for (var _fun8007_ip = 0;;) switch (_fun8007_ip) {
                                case 0:
                                    var8 = undefined;
                                    var2 = undefined;
                                    var4 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8007_ip = 37;
                                        continue _fun8007
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var4[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8007_ip = 20;
                                        continue _fun8007
                                    }
                                case 37:
                                    var1 = _closure2_slot16;
                                    var0 = 'hsla';
                                    var3 = var1.bind(var8)(var4, var0);
                                    var1 = _closure2_slot17;
                                    var1 = var1.bind(var8)(var4);
                                    if (var1) {
                                        _fun8007_ip = 72;
                                        continue _fun8007
                                    }
                                case 66:
                                    var1 = 'lsa';
                                case 72:
                                    var6 = _closure2_slot18;
                                    var5 = 0;
                                    var4 = var3[var5];
                                    if (var4) {
                                        _fun8007_ip = 87;
                                        continue _fun8007
                                    }
                                case 85:
                                    var4 = 0;
                                case 87:
                                    var4 = var6.bind(var8)(var4);
                                    var3[var5] = var4;
                                    var6 = _closure2_slot18;
                                    var4 = 1;
                                    var5 = var3[var4];
                                    var9 = 100;
                                    var5 = var9 * var5;
                                    var5 = var6.bind(var8)(var5);
                                    var6 = '%';
                                    var5 = var5 + var6;
                                    var3[var4] = var5;
                                    var7 = _closure2_slot18;
                                    var5 = 2;
                                    var2 = var3[var5];
                                    var2 = var9 * var2;
                                    var2 = var7.bind(var8)(var2);
                                    var2 = var2 + var6;
                                    var3[var5] = var2;
                                    if (!(var0 !== var1)) {
                                        _fun8007_ip = 191;
                                        continue _fun8007
                                    }
                                case 163:
                                    var5 = var3.length;
                                    var2 = 3;
                                    if (!(var5 > var2)) {
                                        _fun8007_ip = 183;
                                        continue _fun8007
                                    }
                                case 175:
                                    var5 = var3[var2];
                                    if (!(!(var5 < var4))) {
                                        _fun8007_ip = 191;
                                        continue _fun8007
                                    }
                                case 183:
                                    var3.length = var2;
                                    _fun8007_ip = 217;
                                    continue _fun8007;
                                case 191:
                                    var5 = var3.length;
                                    var2 = 3;
                                    var5 = var5 > var2;
                                    if (!var5) {
                                        _fun8007_ip = 210;
                                        continue _fun8007
                                    }
                                case 206:
                                    var4 = var3[var2];
                                case 210:
                                    var3[var2] = var4;
                                    var1 = var0;
                                case 217:
                                    var0 = '(';
                                    var1 = var1 + var0;
                                    var2 = var3.join;
                                    var0 = ',';
                                    var0 = var2.bind(var3)(var0);
                                    var1 = var1 + var0;
                                    var0 = ')';
                                    var0 = var1 + var0;
                                    return var0;
                            }
                        };
                        var _closure2_slot22 = var6;
                        var _closure2_slot23 = var2;
                        var6 = var9.Math;
                        var6 = var6.round;
                        var _closure2_slot24 = var6;
                        var6 = var5.unpack;
                        var _closure2_slot25 = var6;
                        var6 = var9.Math;
                        var6 = var6.round;
                        var _closure2_slot26 = var6;
                        var6 = function() { // Original name: hsl2rgb$1, environment: var4
                            _fun8010: for (var _fun8010_ip = 0;;) switch (_fun8010_ip) {
                                case 0:
                                    var8 = undefined;
                                    var3 = undefined;
                                    var2 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8010_ip = 37;
                                        continue _fun8010
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var2[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8010_ip = 20;
                                        continue _fun8010
                                    }
                                case 37:
                                    var1 = _closure2_slot25;
                                    var0 = 'hsl';
                                    var3 = var1.bind(var8)(var2, var0);
                                    var5 = 0;
                                    var9 = var3[var5];
                                    var1 = 1;
                                    var0 = var3[var1];
                                    var4 = 2;
                                    var2 = var3[var4];
                                    if (!(var5 !== var0)) {
                                        _fun8010_ip = 435;
                                        continue _fun8010
                                    }
                                case 81:
                                    var14 = [0, 0, 0];
                                    var6 = [0, 0, 0];
                                    var10 = 0.5;
                                    if (!(!(var2 < var10))) {
                                        _fun8010_ip = 125;
                                        continue _fun8010
                                    }
                                case 111:
                                    var11 = var2 + var0;
                                    var10 = var2 * var0;
                                    var13 = var11 - var10;
                                    _fun8010_ip = 133;
                                    continue _fun8010;
                                case 125:
                                    var0 = var1 + var0;
                                    var13 = var2 * var0;
                                case 133:
                                    var0 = var4 * var2;
                                    var12 = var0 - var13;
                                    var0 = 360;
                                    var9 = var9 / var0;
                                    var0 = 0.3333333333333333;
                                    var10 = var9 + var0;
                                    var14[var5] = var10;
                                    var14[var1] = var9;
                                    var0 = var9 - var0;
                                    var14[var4] = var0;
                                    var11 = 3;
                                    var10 = 6;
                                    var9 = 0.6666666666666666;
                                    var0 = 0;
                                case 199:
                                    var15 = var14[var0];
                                    if (!(var15 < var5)) {
                                        _fun8010_ip = 219;
                                        continue _fun8010
                                    }
                                case 207:
                                    var15 = var14[var0];
                                    var15 = var15 + var1;
                                    var14[var0] = var15;
                                case 219:
                                    var15 = var14[var0];
                                    if (!(var15 > var1)) {
                                        _fun8010_ip = 239;
                                        continue _fun8010
                                    }
                                case 227:
                                    var15 = var14[var0];
                                    var15 = var15 - var1;
                                    var14[var0] = var15;
                                case 239:
                                    var15 = var14[var0];
                                    var15 = var10 * var15;
                                    if (!(!(var15 < var1))) {
                                        _fun8010_ip = 317;
                                        continue _fun8010
                                    }
                                case 251:
                                    var15 = var14[var0];
                                    var15 = var4 * var15;
                                    if (!(!(var15 < var1))) {
                                        _fun8010_ip = 311;
                                        continue _fun8010
                                    }
                                case 263:
                                    var15 = var14[var0];
                                    var15 = var11 * var15;
                                    if (!(!(var15 < var4))) {
                                        _fun8010_ip = 281;
                                        continue _fun8010
                                    }
                                case 275:
                                    var6[var0] = var12;
                                    _fun8010_ip = 341;
                                    continue _fun8010;
                                case 281:
                                    var16 = var13 - var12;
                                    var15 = var14[var0];
                                    var15 = var9 - var15;
                                    var15 = var16 * var15;
                                    var15 = var15 * var10;
                                    var15 = var12 + var15;
                                    var6[var0] = var15;
                                    _fun8010_ip = 341;
                                    continue _fun8010;
                                case 311:
                                    var6[var0] = var13;
                                    _fun8010_ip = 341;
                                    continue _fun8010;
                                case 317:
                                    var15 = var13 - var12;
                                    var16 = var14[var0];
                                    var15 = var10 * var15;
                                    var15 = var15 * var16;
                                    var15 = var12 + var15;
                                    var6[var0] = var15;
                                case 341:
                                    var0 = var0 + 1;
                                    if (var0 < var11) {
                                        _fun8010_ip = 199;
                                        continue _fun8010
                                    }
                                case 351:
                                    var10 = _closure2_slot26;
                                    var0 = var6[var5];
                                    var9 = 255;
                                    var0 = var9 * var0;
                                    var10 = var10.bind(var8)(var0);
                                    var0 = new Array(3);
                                    var0[0] = var10;
                                    var11 = _closure2_slot26;
                                    var10 = var6[var1];
                                    var10 = var9 * var10;
                                    var10 = var11.bind(var8)(var10);
                                    var0[1] = var10;
                                    var7 = _closure2_slot26;
                                    var6 = var6[var4];
                                    var6 = var9 * var6;
                                    var6 = var7.bind(var8)(var6);
                                    var0[2] = var6;
                                    var6 = var0[var5];
                                    var5 = var0[var1];
                                    var4 = var0[var4];
                                    _fun8010_ip = 448;
                                    continue _fun8010;
                                case 435:
                                    var0 = 255;
                                    var6 = var0 * var2;
                                    var5 = var6;
                                    var4 = var5;
                                case 448:
                                    var0 = var3.length;
                                    var2 = 3;
                                    if (!(!(var0 > var2))) {
                                        _fun8010_ip = 482;
                                        continue _fun8010
                                    }
                                case 460:
                                    var0 = new Array(4);
                                    var0[0] = var6;
                                    var0[1] = var5;
                                    var0[2] = var4;
                                    var0[3] = var1;
                                    _fun8010_ip = 509;
                                    continue _fun8010;
                                case 482:
                                    var1 = new Array(4);
                                    var1[0] = var6;
                                    var1[1] = var5;
                                    var1[2] = var4;
                                    var2 = var3[var2];
                                    var1[3] = var2;
                                    var0 = var1;
                                case 509:
                                    return var0;
                            }
                        };
                        var _closure2_slot27 = var6;
                        var _closure2_slot28 = var7;
                        var8 = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
                        var _closure2_slot29 = var8;
                        var8 = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
                        var _closure2_slot30 = var8;
                        var8 = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
                        var _closure2_slot31 = var8;
                        var8 = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
                        var _closure2_slot32 = var8;
                        var8 = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
                        var _closure2_slot33 = var8;
                        var8 = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
                        var _closure2_slot34 = var8;
                        var8 = var9.Math;
                        var8 = var8.round;
                        var _closure2_slot35 = var8;
                        var10 = function(arg0) { // Original name: css2rgb$1, environment: var4
                            _fun8011: for (var _fun8011_ip = 0;;) switch (_fun8011_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = var2;
                                    var1 = var2.toLowerCase;
                                    var2 = var1.bind(var2)();
                                    var1 = var2.trim;
                                    var0 = var1.bind(var2)();
                                    var1 = _closure2_slot28;
                                    var1 = var1.format;
                                    var1 = var1.named;
                                    if (!var1) {
                                        _fun8011_ip = 74;
                                        continue _fun8011
                                    }
                                case 47: // try_start_0
                                    var1 = _closure2_slot28;
                                    var3 = var1.format;
                                    var2 = var3.named;
                                    var1 = var0;
                                    var1 = var2.bind(var3)(var1);
                                case 70: // try_end0
                                    return var1;
                                case 72: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                case 74:
                                    var3 = var0;
                                    var2 = var3.match;
                                    var1 = _closure2_slot29;
                                    var3 = var2.bind(var3)(var1);
                                    if (var3) {
                                        _fun8011_ip = 556;
                                        continue _fun8011
                                    }
                                case 98:
                                    var4 = var0;
                                    var2 = var4.match;
                                    var1 = _closure2_slot30;
                                    var4 = var2.bind(var4)(var1);
                                    if (var4) {
                                        _fun8011_ip = 514;
                                        continue _fun8011
                                    }
                                case 122:
                                    var5 = var0;
                                    var2 = var5.match;
                                    var1 = _closure2_slot31;
                                    var5 = var2.bind(var5)(var1);
                                    if (var5) {
                                        _fun8011_ip = 446;
                                        continue _fun8011
                                    }
                                case 146:
                                    var6 = var0;
                                    var2 = var6.match;
                                    var1 = _closure2_slot32;
                                    var6 = var2.bind(var6)(var1);
                                    if (var6) {
                                        _fun8011_ip = 371;
                                        continue _fun8011
                                    }
                                case 170:
                                    var7 = var0;
                                    var2 = var7.match;
                                    var1 = _closure2_slot33;
                                    var7 = var2.bind(var7)(var1);
                                    if (var7) {
                                        _fun8011_ip = 297;
                                        continue _fun8011
                                    }
                                case 191:
                                    var2 = var0;
                                    var1 = var2.match;
                                    var0 = _closure2_slot34;
                                    var2 = var1.bind(var2)(var0);
                                    if (var2) {
                                        _fun8011_ip = 216;
                                        continue _fun8011
                                    }
                                case 212:
                                    var0 = undefined;
                                    return var0;
                                case 216:
                                    var0 = var2.slice;
                                    var9 = 1;
                                    var1 = 4;
                                    var10 = var0.bind(var2)(var9, var1);
                                    var0 = var10[var9];
                                    var11 = 0.01;
                                    var0 = var0 * var11;
                                    var10[var9] = var0;
                                    var9 = 2;
                                    var0 = var10[var9];
                                    var0 = var0 * var11;
                                    var10[var9] = var0;
                                    var9 = _closure2_slot27;
                                    var0 = undefined;
                                    var0 = var9.bind(var0)(var10);
                                    var1 = var2[var1];
                                    var2 = var1 - 0;
                                    var1 = 3;
                                    var0[var1] = var2;
                                    return var0;
                                case 297:
                                    var1 = var7.slice;
                                    var2 = 1;
                                    var0 = 4;
                                    var7 = var1.bind(var7)(var2, var0);
                                    var0 = var7[var2];
                                    var9 = 0.01;
                                    var0 = var0 * var9;
                                    var7[var2] = var0;
                                    var1 = 2;
                                    var0 = var7[var1];
                                    var0 = var0 * var9;
                                    var7[var1] = var0;
                                    var1 = _closure2_slot27;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var7);
                                    var1 = 3;
                                    var0[var1] = var2;
                                    return var0;
                                case 371:
                                    var2 = var6.slice;
                                    var1 = 1;
                                    var0 = 5;
                                    var0 = var2.bind(var6)(var1, var0);
                                    var6 = 2.55;
                                    var1 = undefined;
                                    var2 = 3;
                                    var7 = 0;
                                case 405:
                                    var10 = _closure2_slot35;
                                    var9 = var0[var7];
                                    var9 = var6 * var9;
                                    var9 = var10.bind(var1)(var9);
                                    var0[var7] = var9;
                                    var7 = var7 + 1;
                                    if (var7 < var2) {
                                        _fun8011_ip = 405;
                                        continue _fun8011
                                    }
                                case 433:
                                    var1 = var0[var2];
                                    var1 = var1 - 0;
                                    var0[var2] = var1;
                                    return var0;
                                case 446:
                                    var1 = var5.slice;
                                    var2 = 1;
                                    var0 = 4;
                                    var0 = var1.bind(var5)(var2, var0);
                                    var6 = 2.55;
                                    var5 = undefined;
                                    var1 = 3;
                                    var7 = 0;
                                case 480:
                                    var10 = _closure2_slot35;
                                    var9 = var0[var7];
                                    var9 = var6 * var9;
                                    var9 = var10.bind(var5)(var9);
                                    var0[var7] = var9;
                                    var7 = var7 + 1;
                                    if (var7 < var1) {
                                        _fun8011_ip = 480;
                                        continue _fun8011
                                    }
                                case 508:
                                    var0[var1] = var2;
                                    return var0;
                                case 514:
                                    var2 = var4.slice;
                                    var1 = 1;
                                    var0 = 5;
                                    var0 = var2.bind(var4)(var1, var0);
                                    var1 = 4;
                                    var2 = 0;
                                case 536:
                                    var4 = var0[var2];
                                    var4 = var4 - 0;
                                    var0[var2] = var4;
                                    var2 = var2 + 1;
                                    if (var2 < var1) {
                                        _fun8011_ip = 536;
                                        continue _fun8011
                                    }
                                case 554:
                                    return var0;
                                case 556:
                                    var1 = var3.slice;
                                    var2 = 1;
                                    var0 = 4;
                                    var0 = var1.bind(var3)(var2, var0);
                                    var1 = 3;
                                    var3 = 0;
                                case 578:
                                    var4 = var0[var3];
                                    var4 = var4 - 0;
                                    var0[var3] = var4;
                                    var3 = var3 + 1;
                                    if (var3 < var1) {
                                        _fun8011_ip = 578;
                                        continue _fun8011
                                    }
                                case 596:
                                    var0[var1] = var2;
                                    return var0;
                            }
                        };
                        var8 = function(arg0) { // Environment: var4
                            _fun8012: for (var _fun8012_ip = 0;;) switch (_fun8012_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = _closure2_slot29;
                                    var0 = var2.test;
                                    var0 = var0.bind(var2)(var3);
                                    if (var0) {
                                        _fun8012_ip = 37;
                                        continue _fun8012
                                    }
                                case 23:
                                    var4 = _closure2_slot30;
                                    var2 = var4.test;
                                    var0 = var2.bind(var4)(var3);
                                case 37:
                                    if (var0) {
                                        _fun8012_ip = 54;
                                        continue _fun8012
                                    }
                                case 40:
                                    var4 = _closure2_slot31;
                                    var2 = var4.test;
                                    var0 = var2.bind(var4)(var3);
                                case 54:
                                    if (var0) {
                                        _fun8012_ip = 71;
                                        continue _fun8012
                                    }
                                case 57:
                                    var4 = _closure2_slot32;
                                    var2 = var4.test;
                                    var0 = var2.bind(var4)(var3);
                                case 71:
                                    if (var0) {
                                        _fun8012_ip = 88;
                                        continue _fun8012
                                    }
                                case 74:
                                    var4 = _closure2_slot33;
                                    var2 = var4.test;
                                    var0 = var2.bind(var4)(var3);
                                case 88:
                                    if (var0) {
                                        _fun8012_ip = 105;
                                        continue _fun8012
                                    }
                                case 91:
                                    var2 = _closure2_slot34;
                                    var1 = var2.test;
                                    var0 = var1.bind(var2)(var3);
                                case 105:
                                    return var0;
                            }
                        };
                        var10.test = var8;
                        var _closure2_slot36 = var1;
                        var8 = var5.type;
                        var _closure2_slot37 = var8;
                        var8 = function() { // Original name: rgb2css$1, environment: var4
                            _fun8009: for (var _fun8009_ip = 0;;) switch (_fun8009_ip) {
                                case 0:
                                    var4 = undefined;
                                    var2 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8009_ip = 37;
                                        continue _fun8009
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var3[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8009_ip = 20;
                                        continue _fun8009
                                    }
                                case 37:
                                    var2 = _closure2_slot20;
                                    var0 = 'rgba';
                                    var5 = var2.bind(var4)(var3, var0);
                                    var2 = _closure2_slot21;
                                    var3 = var2.bind(var4)(var3);
                                    if (var3) {
                                        _fun8009_ip = 70;
                                        continue _fun8009
                                    }
                                case 66:
                                    var3 = 'rgb';
                                case 70:
                                    var2 = var3.substr;
                                    var7 = 0;
                                    var8 = 3;
                                    var6 = var2.bind(var3)(var7, var8);
                                    var2 = 'hsl';
                                    if (!(var2 != var6)) {
                                        _fun8009_ip = 275;
                                        continue _fun8009
                                    }
                                case 98:
                                    var6 = _closure2_slot24;
                                    var2 = var5[var7];
                                    var2 = var6.bind(var4)(var2);
                                    var5[var7] = var2;
                                    var9 = _closure2_slot24;
                                    var2 = 1;
                                    var6 = var5[var2];
                                    var6 = var9.bind(var4)(var6);
                                    var5[var2] = var6;
                                    var10 = _closure2_slot24;
                                    var9 = 2;
                                    var6 = var5[var9];
                                    var6 = var10.bind(var4)(var6);
                                    var5[var9] = var6;
                                    var6 = var0 === var3;
                                    if (var6) {
                                        _fun8009_ip = 185;
                                        continue _fun8009
                                    }
                                case 162:
                                    var9 = var5.length;
                                    var9 = var9 > var8;
                                    if (!var9) {
                                        _fun8009_ip = 182;
                                        continue _fun8009
                                    }
                                case 174:
                                    var10 = var5[var8];
                                    var9 = var10 < var2;
                                case 182:
                                    var6 = var9;
                                case 185:
                                    var10 = var3;
                                    if (!var6) {
                                        _fun8009_ip = 214;
                                        continue _fun8009
                                    }
                                case 191:
                                    var6 = var5.length;
                                    var6 = var6 > var8;
                                    if (!var6) {
                                        _fun8009_ip = 207;
                                        continue _fun8009
                                    }
                                case 203:
                                    var2 = var5[var8];
                                case 207:
                                    var5[var8] = var2;
                                    var10 = var0;
                                case 214:
                                    var0 = '(';
                                    var2 = var10 + var0;
                                    var6 = var5.slice;
                                    var0 = 4;
                                    var9 = 'rgb';
                                    if (!(var9 === var10)) {
                                        _fun8009_ip = 241;
                                        continue _fun8009
                                    }
                                case 238:
                                    var0 = var8;
                                case 241:
                                    var7 = var6.bind(var5)(var7, var0);
                                    var6 = var7.join;
                                    var0 = ',';
                                    var0 = var6.bind(var7)(var0);
                                    var2 = var2 + var0;
                                    var0 = ')';
                                    var0 = var2 + var0;
                                    _fun8009_ip = 294;
                                    continue _fun8009;
                                case 275:
                                    var2 = _closure2_slot22;
                                    var1 = _closure2_slot23;
                                    var1 = var1.bind(var4)(var5);
                                    var0 = var2.bind(var4)(var1, var3);
                                case 294:
                                    return var0;
                            }
                        };
                        var _closure2_slot38 = var8;
                        var _closure2_slot39 = var10;
                        var14 = var1.prototype;
                        var8 = function(arg0) { // Environment: var4
                            var3 = _closure2_slot38;
                            var0 = this;
                            var2 = var0._rgb;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var1)(var2, var0);
                            return var0;
                        };
                        var14.css = var8;
                        var8 = function() { // Environment: var4
                            _fun8014: for (var _fun8014_ip = 0;;) switch (_fun8014_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8014_ip = 35;
                                        continue _fun8014
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8014_ip = 18;
                                        continue _fun8014
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot36;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['css'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.css = var8;
                        var8 = var7.format;
                        var8.css = var10;
                        var14 = var7.autodetect;
                        var10 = var14.push;
                        var8 = {};
                        var17 = 5;
                        var8.p = var17;
                        var15 = function(arg0) { // Original name: test, environment: var4
                            _fun8015: for (var _fun8015_ip = 0;;) switch (_fun8015_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = undefined;
                                    var7 = undefined;
                                    var1 = new Array(0);
                                    var2 = arguments.length;
                                    var6 = 1;
                                    var2 = var2 - var6;
                                    var5 = var2 - 1;
                                    var4 = 0;
                                    if (!(var2 > var4)) {
                                        _fun8015_ip = 52;
                                        continue _fun8015
                                    }
                                case 30:
                                    var2 = var5 + var6;
                                    var2 = arguments[var2];
                                    var1[var5] = var2;
                                    var2 = parseFloat(var5);
                                    var5 = var2 - 1;
                                    if (var2 > var4) {
                                        _fun8015_ip = 30;
                                        continue _fun8015
                                    }
                                case 52:
                                    var1 = var1.length;
                                    if (var1) {
                                        _fun8015_ip = 103;
                                        continue _fun8015
                                    }
                                case 60:
                                    var2 = _closure2_slot37;
                                    var4 = var2.bind(var0)(var3);
                                    var2 = 'string';
                                    if (!(var2 === var4)) {
                                        _fun8015_ip = 103;
                                        continue _fun8015
                                    }
                                case 80:
                                    var2 = _closure2_slot39;
                                    var1 = var2.test;
                                    var1 = var1.bind(var2)(var3);
                                    if (!var1) {
                                        _fun8015_ip = 103;
                                        continue _fun8015
                                    }
                                case 97:
                                    var1 = 'css';
                                    return var1;
                                case 103:
                                    return var0;
                            }
                        };
                        var8.test = var15;
                        var8 = var10.bind(var14)(var8);
                        var _closure2_slot40 = var1;
                        var8 = var5.unpack;
                        var _closure2_slot41 = var8;
                        var10 = var7.format;
                        var8 = function() { // Environment: var4
                            _fun8016: for (var _fun8016_ip = 0;;) switch (_fun8016_ip) {
                                case 0:
                                    var3 = undefined;
                                    var4 = undefined;
                                    var2 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8016_ip = 37;
                                        continue _fun8016
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var2[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8016_ip = 20;
                                        continue _fun8016
                                    }
                                case 37:
                                    var1 = _closure2_slot41;
                                    var0 = 'rgba';
                                    var0 = var1.bind(var3)(var2, var0);
                                    var2 = 0;
                                    var1 = var0[var2];
                                    var3 = 255;
                                    var1 = var1 * var3;
                                    var0[var2] = var1;
                                    var2 = 1;
                                    var1 = var0[var2];
                                    var1 = var1 * var3;
                                    var0[var2] = var1;
                                    var2 = 2;
                                    var1 = var0[var2];
                                    var1 = var1 * var3;
                                    var0[var2] = var1;
                                    return var0;
                            }
                        };
                        var10.gl = var8;
                        var8 = function() { // Environment: var4
                            _fun8017: for (var _fun8017_ip = 0;;) switch (_fun8017_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8017_ip = 35;
                                        continue _fun8017
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8017_ip = 18;
                                        continue _fun8017
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot40;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['gl'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.gl = var8;
                        var10 = var1.prototype;
                        var8 = function() { // Environment: var4
                            var0 = this;
                            var2 = var0._rgb;
                            var0 = 0;
                            var0 = var2[var0];
                            var3 = 255;
                            var1 = var0 / var3;
                            var0 = new Array(4);
                            var0[0] = var1;
                            var1 = 1;
                            var1 = var2[var1];
                            var1 = var1 / var3;
                            var0[1] = var1;
                            var1 = 2;
                            var1 = var2[var1];
                            var1 = var1 / var3;
                            var0[2] = var1;
                            var1 = 3;
                            var1 = var2[var1];
                            var0[3] = var1;
                            return var0;
                        };
                        var10.gl = var8;
                        var8 = var5.unpack;
                        var _closure2_slot42 = var8;
                        var8 = var5.unpack;
                        var _closure2_slot43 = var8;
                        var8 = var9.Math;
                        var8 = var8.floor;
                        var _closure2_slot44 = var8;
                        var8 = var5.unpack;
                        var _closure2_slot45 = var8;
                        var8 = var5.type;
                        var _closure2_slot46 = var8;
                        var _closure2_slot47 = var1;
                        var8 = function() { // Original name: rgb2hcg$1, environment: var4
                            _fun8019: for (var _fun8019_ip = 0;;) switch (_fun8019_ip) {
                                case 0:
                                    var7 = undefined;
                                    var3 = undefined;
                                    var2 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8019_ip = 37;
                                        continue _fun8019
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var2[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8019_ip = 20;
                                        continue _fun8019
                                    }
                                case 37:
                                    var1 = _closure2_slot42;
                                    var0 = 'rgb';
                                    var0 = var1.bind(var7)(var2, var0);
                                    var6 = 0;
                                    var9 = var0[var6];
                                    var1 = 1;
                                    var5 = var0[var1];
                                    var13 = 2;
                                    var11 = var0[var13];
                                    var0 = global;
                                    var2 = var0.Math;
                                    var1 = var2.min;
                                    var12 = var1.bind(var2)(var9, var5, var11);
                                    var2 = var0.Math;
                                    var1 = var2.max;
                                    var10 = var1.bind(var2)(var9, var5, var11);
                                    var8 = var10 - var12;
                                    var2 = 100;
                                    var4 = var2 * var8;
                                    var3 = 255;
                                    var1 = var3 - var8;
                                    var1 = var12 / var1;
                                    if (!(var6 !== var8)) {
                                        _fun8019_ip = 213;
                                        continue _fun8019
                                    }
                                case 138:
                                    var7 = undefined;
                                    if (!(var9 === var10)) {
                                        _fun8019_ip = 152;
                                        continue _fun8019
                                    }
                                case 144:
                                    var12 = var5 - var11;
                                    var7 = var12 / var8;
                                case 152:
                                    if (!(var5 === var10)) {
                                        _fun8019_ip = 168;
                                        continue _fun8019
                                    }
                                case 156:
                                    var12 = var11 - var9;
                                    var12 = var12 / var8;
                                    var7 = var13 + var12;
                                case 168:
                                    if (!(var11 === var10)) {
                                        _fun8019_ip = 187;
                                        continue _fun8019
                                    }
                                case 172:
                                    var5 = var9 - var5;
                                    var8 = var5 / var8;
                                    var5 = 4;
                                    var7 = var5 + var8;
                                case 187:
                                    var5 = 60;
                                    var7 = var7 * var5;
                                    var5 = var7;
                                    if (!(var5 < var6)) {
                                        _fun8019_ip = 225;
                                        continue _fun8019
                                    }
                                case 201:
                                    var6 = 360;
                                    var5 = var7 + var6;
                                    _fun8019_ip = 225;
                                    continue _fun8019;
                                case 213:
                                    var0 = var0.Number;
                                    var5 = var0.NaN;
                                case 225:
                                    var0 = new Array(3);
                                    var0[0] = var5;
                                    var3 = var4 / var3;
                                    var0[1] = var3;
                                    var1 = var1 * var2;
                                    var0[2] = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot48 = var8;
                        var10 = var1.prototype;
                        var8 = function() { // Environment: var4
                            var2 = _closure2_slot48;
                            var0 = this;
                            var1 = var0._rgb;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var10.hcg = var8;
                        var8 = function() { // Environment: var4
                            _fun8022: for (var _fun8022_ip = 0;;) switch (_fun8022_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8022_ip = 35;
                                        continue _fun8022
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8022_ip = 18;
                                        continue _fun8022
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot47;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['hcg'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.hcg = var8;
                        var10 = var7.format;
                        var8 = function() { // Original name: hcg2rgb, environment: var4
                            _fun8020: for (var _fun8020_ip = 0;;) switch (_fun8020_ip) {
                                case 0:
                                    var13 = undefined;
                                    var3 = undefined;
                                    var2 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8020_ip = 37;
                                        continue _fun8020
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var2[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8020_ip = 20;
                                        continue _fun8020
                                    }
                                case 37:
                                    var1 = _closure2_slot43;
                                    var0 = 'hcg';
                                    var3 = var1.bind(var13)(var2, var0);
                                    var6 = 0;
                                    var12 = var3[var6];
                                    var1 = 1;
                                    var7 = var3[var1];
                                    var8 = 2;
                                    var2 = var3[var8];
                                    var0 = 255;
                                    var10 = var2 * var0;
                                    var0 = var0 * var7;
                                    var5 = var10;
                                    var4 = var5;
                                    var2 = var4;
                                    if (!(var6 !== var7)) {
                                        _fun8020_ip = 419;
                                        continue _fun8020
                                    }
                                case 101:
                                    var14 = 360;
                                    if (!(var14 === var12)) {
                                        _fun8020_ip = 113;
                                        continue _fun8020
                                    }
                                case 111:
                                    var12 = 0;
                                case 113:
                                    var11 = var12;
                                    if (!(var11 > var14)) {
                                        _fun8020_ip = 124;
                                        continue _fun8020
                                    }
                                case 120:
                                    var11 = var12 - var14;
                                case 124:
                                    var12 = var11;
                                    if (!(var12 < var6)) {
                                        _fun8020_ip = 135;
                                        continue _fun8020
                                    }
                                case 131:
                                    var12 = var11 + var14;
                                case 135:
                                    var11 = _closure2_slot44;
                                    var9 = 60;
                                    var9 = var12 / var9;
                                    var12 = var11.bind(var13)(var9);
                                    var9 = var9 - var12;
                                    var7 = var1 - var7;
                                    var7 = var10 * var7;
                                    var10 = var1 - var9;
                                    var10 = var0 * var10;
                                    var11 = var7 + var10;
                                    var9 = var0 * var9;
                                    var9 = var7 + var9;
                                    var10 = var7 + var0;
                                    if (!(var6 !== var12)) {
                                        _fun8020_ip = 391;
                                        continue _fun8020
                                    }
                                case 194:
                                    if (!(var1 !== var12)) {
                                        _fun8020_ip = 361;
                                        continue _fun8020
                                    }
                                case 201:
                                    if (!(var8 !== var12)) {
                                        _fun8020_ip = 331;
                                        continue _fun8020
                                    }
                                case 208:
                                    var0 = 3;
                                    if (!(var0 !== var12)) {
                                        _fun8020_ip = 301;
                                        continue _fun8020
                                    }
                                case 215:
                                    var0 = 4;
                                    if (!(var0 !== var12)) {
                                        _fun8020_ip = 271;
                                        continue _fun8020
                                    }
                                case 222:
                                    var0 = 5;
                                    var5 = undefined;
                                    var4 = undefined;
                                    var2 = undefined;
                                    if (!(var0 === var12)) {
                                        _fun8020_ip = 419;
                                        continue _fun8020
                                    }
                                case 238:
                                    var0 = new Array(3);
                                    var0[0] = var10;
                                    var0[1] = var7;
                                    var0[2] = var11;
                                    var5 = var0[var6];
                                    var4 = var0[var1];
                                    var2 = var0[var8];
                                    _fun8020_ip = 419;
                                    continue _fun8020;
                                case 271:
                                    var0 = new Array(3);
                                    var0[0] = var9;
                                    var0[1] = var7;
                                    var0[2] = var10;
                                    var5 = var0[var6];
                                    var4 = var0[var1];
                                    var2 = var0[var8];
                                    _fun8020_ip = 419;
                                    continue _fun8020;
                                case 301:
                                    var0 = new Array(3);
                                    var0[0] = var7;
                                    var0[1] = var11;
                                    var0[2] = var10;
                                    var5 = var0[var6];
                                    var4 = var0[var1];
                                    var2 = var0[var8];
                                    _fun8020_ip = 419;
                                    continue _fun8020;
                                case 331:
                                    var0 = new Array(3);
                                    var0[0] = var7;
                                    var0[1] = var10;
                                    var0[2] = var9;
                                    var5 = var0[var6];
                                    var4 = var0[var1];
                                    var2 = var0[var8];
                                    _fun8020_ip = 419;
                                    continue _fun8020;
                                case 361:
                                    var0 = new Array(3);
                                    var0[0] = var11;
                                    var0[1] = var10;
                                    var0[2] = var7;
                                    var5 = var0[var6];
                                    var4 = var0[var1];
                                    var2 = var0[var8];
                                    _fun8020_ip = 419;
                                    continue _fun8020;
                                case 391:
                                    var0 = new Array(3);
                                    var0[0] = var10;
                                    var0[1] = var9;
                                    var0[2] = var7;
                                    var5 = var0[var6];
                                    var4 = var0[var1];
                                    var2 = var0[var8];
                                case 419:
                                    var0 = new Array(4);
                                    var0[0] = var5;
                                    var0[1] = var4;
                                    var0[2] = var2;
                                    var4 = var3.length;
                                    var2 = 3;
                                    var4 = var4 > var2;
                                    if (!var4) {
                                        _fun8020_ip = 454;
                                        continue _fun8020
                                    }
                                case 450:
                                    var1 = var3[var2];
                                case 454:
                                    var0[3] = var1;
                                    return var0;
                            }
                        };
                        var10.hcg = var8;
                        var14 = var7.autodetect;
                        var10 = var14.push;
                        var8 = {};
                        var8.p = var11;
                        var15 = function() { // Original name: test, environment: var4
                            _fun8023: for (var _fun8023_ip = 0;;) switch (_fun8023_ip) {
                                case 0:
                                    var1 = undefined;
                                    var3 = undefined;
                                    var4 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var2 = var0 - 1;
                                    if (!var0) {
                                        _fun8023_ip = 37;
                                        continue _fun8023
                                    }
                                case 20:
                                    var0 = arguments[var2];
                                    var4[var2] = var0;
                                    var0 = parseFloat(var2);
                                    var2 = var0 - 1;
                                    if (var0) {
                                        _fun8023_ip = 20;
                                        continue _fun8023
                                    }
                                case 37:
                                    var2 = _closure2_slot45;
                                    var0 = 'hcg';
                                    var2 = var2.bind(var1)(var4, var0);
                                    var3 = _closure2_slot46;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = 'array';
                                    if (!(var3 === var4)) {
                                        _fun8023_ip = 83;
                                        continue _fun8023
                                    }
                                case 71:
                                    var3 = var2.length;
                                    var2 = 3;
                                    if (!(var2 !== var3)) {
                                        _fun8023_ip = 85;
                                        continue _fun8023
                                    }
                                case 83:
                                    return var1;
                                case 85:
                                    return var0;
                            }
                        };
                        var8.test = var15;
                        var8 = var10.bind(var14)(var8);
                        var8 = var5.unpack;
                        var _closure2_slot49 = var8;
                        var8 = var5.last;
                        var _closure2_slot50 = var8;
                        var8 = var9.Math;
                        var8 = var8.round;
                        var _closure2_slot51 = var8;
                        var8 = function() { // Original name: rgb2hex$2, environment: var4
                            _fun8024: for (var _fun8024_ip = 0;;) switch (_fun8024_ip) {
                                case 0:
                                    var7 = undefined;
                                    var2 = undefined;
                                    var9 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8024_ip = 37;
                                        continue _fun8024
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var9[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8024_ip = 20;
                                        continue _fun8024
                                    }
                                case 37:
                                    var2 = _closure2_slot49;
                                    var0 = 'rgba';
                                    var8 = var2.bind(var7)(var9, var0);
                                    var2 = 0;
                                    var5 = var8[var2];
                                    var2 = 1;
                                    var3 = var8[var2];
                                    var6 = 2;
                                    var10 = var8[var6];
                                    var4 = 3;
                                    var8 = var8[var4];
                                    var4 = _closure2_slot50;
                                    var4 = var4.bind(var7)(var9);
                                    if (var4) {
                                        _fun8024_ip = 97;
                                        continue _fun8024
                                    }
                                case 93:
                                    var4 = 'auto';
                                case 97:
                                    if (!(var7 === var8)) {
                                        _fun8024_ip = 104;
                                        continue _fun8024
                                    }
                                case 101:
                                    var8 = var2;
                                case 104:
                                    var9 = 'auto';
                                    if (!(var9 === var4)) {
                                        _fun8024_ip = 129;
                                        continue _fun8024
                                    }
                                case 112:
                                    var9 = var8 < var2;
                                    var2 = 'rgb';
                                    if (!var9) {
                                        _fun8024_ip = 126;
                                        continue _fun8024
                                    }
                                case 123:
                                    var2 = var0;
                                case 126:
                                    var4 = var2;
                                case 129:
                                    var2 = _closure2_slot51;
                                    var2 = var2.bind(var7)(var5);
                                    var5 = 16;
                                    var9 = var2 << var5;
                                    var2 = _closure2_slot51;
                                    var3 = var2.bind(var7)(var3);
                                    var2 = 8;
                                    var2 = var3 << var2;
                                    var3 = _closure2_slot51;
                                    var3 = var3.bind(var7)(var10);
                                    var2 = var9 | var2;
                                    var3 = var2 | var3;
                                    var2 = var3.toString;
                                    var3 = var2.bind(var3)(var5);
                                    var2 = '000000';
                                    var9 = var2 + var3;
                                    var3 = var9.substr;
                                    var10 = var9.length;
                                    var2 = 6;
                                    var2 = var10 - var2;
                                    var2 = var3.bind(var9)(var2);
                                    var3 = _closure2_slot51;
                                    var1 = 255;
                                    var1 = var1 * var8;
                                    var3 = var3.bind(var7)(var1);
                                    var1 = var3.toString;
                                    var3 = var1.bind(var3)(var5);
                                    var1 = '0';
                                    var5 = var1 + var3;
                                    var3 = var5.substr;
                                    var1 = var5.length;
                                    var1 = var1 - var6;
                                    var1 = var3.bind(var5)(var1);
                                    var3 = var4.toLowerCase;
                                    var3 = var3.bind(var4)();
                                    if (!(var0 !== var3)) {
                                        _fun8024_ip = 325;
                                        continue _fun8024
                                    }
                                case 291:
                                    var0 = 'argb';
                                    if (!(var0 !== var3)) {
                                        _fun8024_ip = 311;
                                        continue _fun8024
                                    }
                                case 301:
                                    var0 = '#';
                                    var0 = var0 + var2;
                                    return var0;
                                case 311:
                                    var0 = '#';
                                    var0 = var0 + var1;
                                    var0 = var0 + var2;
                                    return var0;
                                case 325:
                                    var0 = '#';
                                    var0 = var0 + var2;
                                    var0 = var0 + var1;
                                    return var0;
                            }
                        };
                        var10 = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                        var _closure2_slot52 = var10;
                        var10 = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
                        var _closure2_slot53 = var10;
                        var15 = function(arg0) { // Original name: hex2rgb$1, environment: var4
                            _fun8025: for (var _fun8025_ip = 0;;) switch (_fun8025_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = var3.match;
                                    var1 = _closure2_slot52;
                                    var1 = var2.bind(var3)(var1);
                                    if (var1) {
                                        _fun8025_ip = 341;
                                        continue _fun8025
                                    }
                                case 27:
                                    var1 = var3.match;
                                    var0 = _closure2_slot53;
                                    var0 = var1.bind(var3)(var0);
                                    if (var0) {
                                        _fun8025_ip = 85;
                                        continue _fun8025
                                    }
                                case 45:
                                    var0 = global;
                                    var2 = var0.Error;
                                    var0 = 'unknown hex color: ';
                                    var8 = var0 + var3;
                                    var1 = var2.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var2](var8, var7);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                                case 85:
                                    var1 = var3.length;
                                    var0 = 5;
                                    var0 = var0 !== var1;
                                    if (!var0) {
                                        _fun8025_ip = 112;
                                        continue _fun8025
                                    }
                                case 100:
                                    var2 = var3.length;
                                    var1 = 9;
                                    var0 = var1 !== var2;
                                case 112:
                                    var4 = var3;
                                    if (var0) {
                                        _fun8025_ip = 132;
                                        continue _fun8025
                                    }
                                case 118:
                                    var1 = var3.substr;
                                    var0 = 1;
                                    var4 = var1.bind(var3)(var0);
                                case 132:
                                    var1 = var4.length;
                                    var0 = 4;
                                    var2 = var4;
                                    if (!(var0 === var1)) {
                                        _fun8025_ip = 232;
                                        continue _fun8025
                                    }
                                case 147:
                                    var1 = var4.split;
                                    var0 = '';
                                    var4 = var1.bind(var4)(var0);
                                    var0 = 0;
                                    var1 = var4[var0];
                                    var0 = var4[var0];
                                    var5 = var1 + var0;
                                    var0 = 1;
                                    var1 = var4[var0];
                                    var1 = var5 + var1;
                                    var0 = var4[var0];
                                    var5 = var1 + var0;
                                    var0 = 2;
                                    var1 = var4[var0];
                                    var1 = var5 + var1;
                                    var0 = var4[var0];
                                    var5 = var1 + var0;
                                    var0 = 3;
                                    var1 = var4[var0];
                                    var1 = var5 + var1;
                                    var0 = var4[var0];
                                    var2 = var1 + var0;
                                case 232:
                                    var4 = global;
                                    var1 = var4.parseInt;
                                    var0 = undefined;
                                    var5 = 16;
                                    var1 = var1.bind(var0)(var2, var5);
                                    var0 = 24;
                                    var6 = var1 >> var0;
                                    var0 = new Array(4);
                                    var2 = 255;
                                    var6 = var6 & var2;
                                    var0[0] = var6;
                                    var5 = var1 >> var5;
                                    var5 = var5 & var2;
                                    var0[1] = var5;
                                    var5 = 8;
                                    var5 = var1 >> var5;
                                    var5 = var5 & var2;
                                    var0[2] = var5;
                                    var5 = var4.Math;
                                    var4 = var5.round;
                                    var1 = var2 & var1;
                                    var1 = var1 / var2;
                                    var2 = 100;
                                    var1 = var1 * var2;
                                    var1 = var4.bind(var5)(var1);
                                    var1 = var1 / var2;
                                    var0[3] = var1;
                                    return var0;
                                case 341:
                                    var1 = var3.length;
                                    var0 = 4;
                                    var0 = var0 !== var1;
                                    if (!var0) {
                                        _fun8025_ip = 368;
                                        continue _fun8025
                                    }
                                case 356:
                                    var2 = var3.length;
                                    var1 = 7;
                                    var0 = var1 !== var2;
                                case 368:
                                    var2 = var3;
                                    if (var0) {
                                        _fun8025_ip = 388;
                                        continue _fun8025
                                    }
                                case 374:
                                    var1 = var3.substr;
                                    var0 = 1;
                                    var2 = var1.bind(var3)(var0);
                                case 388:
                                    var1 = var2.length;
                                    var0 = 3;
                                    var3 = var2;
                                    if (!(var0 === var1)) {
                                        _fun8025_ip = 469;
                                        continue _fun8025
                                    }
                                case 403:
                                    var1 = var2.split;
                                    var0 = '';
                                    var2 = var1.bind(var2)(var0);
                                    var0 = 0;
                                    var1 = var2[var0];
                                    var0 = var2[var0];
                                    var4 = var1 + var0;
                                    var0 = 1;
                                    var1 = var2[var0];
                                    var1 = var4 + var1;
                                    var0 = var2[var0];
                                    var4 = var1 + var0;
                                    var0 = 2;
                                    var1 = var2[var0];
                                    var1 = var4 + var1;
                                    var0 = var2[var0];
                                    var3 = var1 + var0;
                                case 469:
                                    var0 = global;
                                    var2 = var0.parseInt;
                                    var1 = undefined;
                                    var0 = 16;
                                    var2 = var2.bind(var1)(var3, var0);
                                    var1 = var2 >> var0;
                                    var0 = new Array(4);
                                    var0[0] = var1;
                                    var1 = 8;
                                    var3 = var2 >> var1;
                                    var1 = 255;
                                    var3 = var3 & var1;
                                    var0[1] = var3;
                                    var1 = var1 & var2;
                                    var0[2] = var1;
                                    var1 = 1;
                                    var0[3] = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot54 = var1;
                        var10 = var5.type;
                        var _closure2_slot55 = var10;
                        var _closure2_slot56 = var8;
                        var14 = var1.prototype;
                        var10 = function(arg0) { // Environment: var4
                            var3 = _closure2_slot56;
                            var0 = this;
                            var2 = var0._rgb;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var1)(var2, var0);
                            return var0;
                        };
                        var14.hex = var10;
                        var10 = function() { // Environment: var4
                            _fun8027: for (var _fun8027_ip = 0;;) switch (_fun8027_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8027_ip = 35;
                                        continue _fun8027
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8027_ip = 18;
                                        continue _fun8027
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot54;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['hex'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.hex = var10;
                        var10 = var7.format;
                        var10.hex = var15;
                        var16 = var7.autodetect;
                        var14 = var16.push;
                        var10 = {};
                        var18 = 4;
                        var10.p = var18;
                        var18 = function(arg0) { // Original name: test, environment: var4
                            _fun8028: for (var _fun8028_ip = 0;;) switch (_fun8028_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = undefined;
                                    var7 = undefined;
                                    var3 = new Array(0);
                                    var2 = arguments.length;
                                    var6 = 1;
                                    var4 = var2 - var6;
                                    var5 = var4 - 1;
                                    var2 = 0;
                                    if (!(var4 > var2)) {
                                        _fun8028_ip = 52;
                                        continue _fun8028
                                    }
                                case 30:
                                    var4 = var5 + var6;
                                    var4 = arguments[var4];
                                    var3[var5] = var4;
                                    var4 = parseFloat(var5);
                                    var5 = var4 - 1;
                                    if (var4 > var2) {
                                        _fun8028_ip = 30;
                                        continue _fun8028
                                    }
                                case 52:
                                    var3 = var3.length;
                                    if (var3) {
                                        _fun8028_ip = 116;
                                        continue _fun8028
                                    }
                                case 60:
                                    var3 = _closure2_slot55;
                                    var4 = var3.bind(var0)(var1);
                                    var3 = 'string';
                                    if (!(var3 === var4)) {
                                        _fun8028_ip = 116;
                                        continue _fun8028
                                    }
                                case 80:
                                    var4 = [3, 4, 5, 6, 7, 8, 9];
                                    var3 = var4.indexOf;
                                    var1 = var1.length;
                                    var1 = var3.bind(var4)(var1);
                                    if (!(var1 >= var2)) {
                                        _fun8028_ip = 116;
                                        continue _fun8028
                                    }
                                case 110:
                                    var1 = 'hex';
                                    return var1;
                                case 116:
                                    return var0;
                            }
                        };
                        var10.test = var18;
                        var10 = var14.bind(var16)(var10);
                        var10 = var5.unpack;
                        var _closure2_slot57 = var10;
                        var10 = var5.TWOPI;
                        var _closure2_slot58 = var10;
                        var10 = var9.Math;
                        var10 = var10.min;
                        var _closure2_slot59 = var10;
                        var10 = var9.Math;
                        var10 = var10.sqrt;
                        var _closure2_slot60 = var10;
                        var10 = var9.Math;
                        var10 = var10.acos;
                        var _closure2_slot61 = var10;
                        var10 = var5.unpack;
                        var _closure2_slot62 = var10;
                        var10 = var5.limit;
                        var _closure2_slot63 = var10;
                        var10 = var5.TWOPI;
                        var _closure2_slot64 = var10;
                        var10 = var5.PITHIRD;
                        var _closure2_slot65 = var10;
                        var10 = var9.Math;
                        var10 = var10.cos;
                        var _closure2_slot66 = var10;
                        var10 = var5.unpack;
                        var _closure2_slot67 = var10;
                        var10 = var5.type;
                        var _closure2_slot68 = var10;
                        var _closure2_slot69 = var1;
                        var10 = function() { // Original name: rgb2hsi$1, environment: var4
                            _fun8029: for (var _fun8029_ip = 0;;) switch (_fun8029_ip) {
                                case 0:
                                    var7 = undefined;
                                    var2 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8029_ip = 37;
                                        continue _fun8029
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var3[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8029_ip = 20;
                                        continue _fun8029
                                    }
                                case 37:
                                    var2 = _closure2_slot57;
                                    var1 = 'rgb';
                                    var1 = var2.bind(var7)(var3, var1);
                                    var5 = 0;
                                    var3 = var1[var5];
                                    var10 = 1;
                                    var6 = var1[var10];
                                    var8 = 2;
                                    var4 = var1[var8];
                                    var1 = _closure2_slot59;
                                    var2 = 255;
                                    var3 = var3 / var2;
                                    var6 = var6 / var2;
                                    var4 = var4 / var2;
                                    var9 = var1.bind(var7)(var3, var6, var4);
                                    var1 = var3 + var6;
                                    var2 = var1 + var4;
                                    var1 = 3;
                                    var1 = var2 / var1;
                                    var2 = 0;
                                    if (!(var1 > var2)) {
                                        _fun8029_ip = 129;
                                        continue _fun8029
                                    }
                                case 121:
                                    var9 = var9 / var1;
                                    var2 = var10 - var9;
                                case 129:
                                    if (!(var5 !== var2)) {
                                        _fun8029_ip = 212;
                                        continue _fun8029
                                    }
                                case 133:
                                    var9 = var3 - var6;
                                    var3 = var3 - var4;
                                    var10 = _closure2_slot60;
                                    var11 = var9 * var9;
                                    var5 = var6 - var4;
                                    var5 = var3 * var5;
                                    var5 = var11 + var5;
                                    var5 = var10.bind(var7)(var5);
                                    var3 = var9 + var3;
                                    var3 = var3 / var8;
                                    var5 = var3 / var5;
                                    var3 = _closure2_slot61;
                                    var5 = var3.bind(var7)(var5);
                                    var3 = var5;
                                    if (!(var4 > var6)) {
                                        _fun8029_ip = 202;
                                        continue _fun8029
                                    }
                                case 194:
                                    var4 = _closure2_slot58;
                                    var3 = var4 - var5;
                                case 202:
                                    var0 = _closure2_slot58;
                                    var3 = var3 / var0;
                                    _fun8029_ip = 220;
                                    continue _fun8029;
                                case 212:
                                    var0 = global;
                                    var3 = var0.NaN;
                                case 220:
                                    var0 = 360;
                                    var3 = var0 * var3;
                                    var0 = new Array(3);
                                    var0[0] = var3;
                                    var0[1] = var2;
                                    var0[2] = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot70 = var10;
                        var14 = var1.prototype;
                        var10 = function() { // Environment: var4
                            var2 = _closure2_slot70;
                            var0 = this;
                            var1 = var0._rgb;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var14.hsi = var10;
                        var10 = function() { // Environment: var4
                            _fun8032: for (var _fun8032_ip = 0;;) switch (_fun8032_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8032_ip = 35;
                                        continue _fun8032
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8032_ip = 18;
                                        continue _fun8032
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot69;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['hsi'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.hsi = var10;
                        var14 = var7.format;
                        var10 = function() { // Original name: hsi2rgb, environment: var4
                            _fun8030: for (var _fun8030_ip = 0;;) switch (_fun8030_ip) {
                                case 0:
                                    var7 = undefined;
                                    var3 = undefined;
                                    var2 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8030_ip = 37;
                                        continue _fun8030
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var2[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8030_ip = 20;
                                        continue _fun8030
                                    }
                                case 37:
                                    var1 = _closure2_slot62;
                                    var0 = 'hsi';
                                    var3 = var1.bind(var7)(var2, var0);
                                    var5 = 0;
                                    var0 = var3[var5];
                                    var1 = 1;
                                    var4 = var3[var1];
                                    var2 = 2;
                                    var8 = var3[var2];
                                    var2 = global;
                                    var9 = var2.isNaN;
                                    var9 = var9.bind(var7)(var0);
                                    if (!var9) {
                                        _fun8030_ip = 92;
                                        continue _fun8030
                                    }
                                case 90:
                                    var0 = 0;
                                case 92:
                                    var2 = var2.isNaN;
                                    var2 = var2.bind(var7)(var4);
                                    var11 = var4;
                                    if (!var2) {
                                        _fun8030_ip = 111;
                                        continue _fun8030
                                    }
                                case 109:
                                    var11 = 0;
                                case 111:
                                    var2 = 360;
                                    var4 = var0;
                                    if (!(var4 > var2)) {
                                        _fun8030_ip = 128;
                                        continue _fun8030
                                    }
                                case 124:
                                    var4 = var0 - var2;
                                case 128:
                                    var0 = var4;
                                    if (!(var0 < var5)) {
                                        _fun8030_ip = 139;
                                        continue _fun8030
                                    }
                                case 135:
                                    var0 = var4 + var2;
                                case 139:
                                    var14 = var0 / var2;
                                    var13 = 0.3333333333333333;
                                    if (!(!(var14 < var13))) {
                                        _fun8030_ip = 349;
                                        continue _fun8030
                                    }
                                case 160:
                                    var5 = 0.6666666666666666;
                                    if (!(!(var14 < var5))) {
                                        _fun8030_ip = 260;
                                        continue _fun8030
                                    }
                                case 174:
                                    var0 = var1 - var11;
                                    var2 = 3;
                                    var9 = var0 / var2;
                                    var4 = _closure2_slot66;
                                    var0 = _closure2_slot64;
                                    var12 = var14 - var5;
                                    var0 = var0 * var12;
                                    var0 = var4.bind(var7)(var0);
                                    var4 = var11 * var0;
                                    var5 = _closure2_slot66;
                                    var10 = _closure2_slot65;
                                    var0 = _closure2_slot64;
                                    var0 = var0 * var12;
                                    var0 = var10 - var0;
                                    var0 = var5.bind(var7)(var0);
                                    var0 = var4 / var0;
                                    var0 = var1 + var0;
                                    var4 = var0 / var2;
                                    var0 = var9 + var4;
                                    var0 = var1 - var0;
                                    _fun8030_ip = 432;
                                    continue _fun8030;
                                case 260:
                                    var2 = var1 - var11;
                                    var5 = 3;
                                    var10 = var2 / var5;
                                    var12 = _closure2_slot66;
                                    var2 = _closure2_slot64;
                                    var16 = var14 - var13;
                                    var2 = var2 * var16;
                                    var2 = var12.bind(var7)(var2);
                                    var12 = var11 * var2;
                                    var13 = _closure2_slot66;
                                    var15 = _closure2_slot65;
                                    var2 = _closure2_slot64;
                                    var2 = var2 * var16;
                                    var2 = var15 - var2;
                                    var2 = var13.bind(var7)(var2);
                                    var2 = var12 / var2;
                                    var2 = var1 + var2;
                                    var5 = var2 / var5;
                                    var2 = var10 + var5;
                                    var4 = var1 - var2;
                                    var0 = var10;
                                    var9 = var5;
                                    _fun8030_ip = 432;
                                    continue _fun8030;
                                case 349:
                                    var2 = var1 - var11;
                                    var10 = 3;
                                    var2 = var2 / var10;
                                    var12 = _closure2_slot66;
                                    var5 = _closure2_slot64;
                                    var5 = var5 * var14;
                                    var5 = var12.bind(var7)(var5);
                                    var11 = var11 * var5;
                                    var12 = _closure2_slot66;
                                    var13 = _closure2_slot65;
                                    var5 = _closure2_slot64;
                                    var5 = var5 * var14;
                                    var5 = var13 - var5;
                                    var5 = var12.bind(var7)(var5);
                                    var5 = var11 / var5;
                                    var5 = var1 + var5;
                                    var10 = var5 / var10;
                                    var5 = var2 + var10;
                                    var9 = var1 - var5;
                                    var0 = var10;
                                    var4 = var2;
                                case 432:
                                    var5 = _closure2_slot63;
                                    var0 = var8 * var0;
                                    var2 = 3;
                                    var0 = var0 * var2;
                                    var0 = var5.bind(var7)(var0);
                                    var5 = 255;
                                    var10 = var5 * var0;
                                    var0 = new Array(4);
                                    var0[0] = var10;
                                    var10 = _closure2_slot63;
                                    var9 = var8 * var9;
                                    var9 = var9 * var2;
                                    var9 = var10.bind(var7)(var9);
                                    var9 = var5 * var9;
                                    var0[1] = var9;
                                    var6 = _closure2_slot63;
                                    var4 = var8 * var4;
                                    var4 = var4 * var2;
                                    var4 = var6.bind(var7)(var4);
                                    var4 = var5 * var4;
                                    var0[2] = var4;
                                    var4 = var3.length;
                                    var4 = var4 > var2;
                                    if (!var4) {
                                        _fun8030_ip = 533;
                                        continue _fun8030
                                    }
                                case 529:
                                    var1 = var3[var2];
                                case 533:
                                    var0[3] = var1;
                                    return var0;
                            }
                        };
                        var14.hsi = var10;
                        var16 = var7.autodetect;
                        var14 = var16.push;
                        var10 = {};
                        var10.p = var19;
                        var18 = function() { // Original name: test, environment: var4
                            _fun8033: for (var _fun8033_ip = 0;;) switch (_fun8033_ip) {
                                case 0:
                                    var1 = undefined;
                                    var3 = undefined;
                                    var4 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var2 = var0 - 1;
                                    if (!var0) {
                                        _fun8033_ip = 37;
                                        continue _fun8033
                                    }
                                case 20:
                                    var0 = arguments[var2];
                                    var4[var2] = var0;
                                    var0 = parseFloat(var2);
                                    var2 = var0 - 1;
                                    if (var0) {
                                        _fun8033_ip = 20;
                                        continue _fun8033
                                    }
                                case 37:
                                    var2 = _closure2_slot67;
                                    var0 = 'hsi';
                                    var2 = var2.bind(var1)(var4, var0);
                                    var3 = _closure2_slot68;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = 'array';
                                    if (!(var3 === var4)) {
                                        _fun8033_ip = 83;
                                        continue _fun8033
                                    }
                                case 71:
                                    var3 = var2.length;
                                    var2 = 3;
                                    if (!(var2 !== var3)) {
                                        _fun8033_ip = 85;
                                        continue _fun8033
                                    }
                                case 83:
                                    return var1;
                                case 85:
                                    return var0;
                            }
                        };
                        var10.test = var18;
                        var10 = var14.bind(var16)(var10);
                        var10 = var5.unpack;
                        var _closure2_slot71 = var10;
                        var10 = var5.type;
                        var _closure2_slot72 = var10;
                        var _closure2_slot73 = var1;
                        var _closure2_slot74 = var2;
                        var10 = var1.prototype;
                        var2 = function() { // Environment: var4
                            var2 = _closure2_slot74;
                            var0 = this;
                            var1 = var0._rgb;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var10.hsl = var2;
                        var2 = function() { // Environment: var4
                            _fun8035: for (var _fun8035_ip = 0;;) switch (_fun8035_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8035_ip = 35;
                                        continue _fun8035
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8035_ip = 18;
                                        continue _fun8035
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot73;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['hsl'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.hsl = var2;
                        var2 = var7.format;
                        var2.hsl = var6;
                        var10 = var7.autodetect;
                        var6 = var10.push;
                        var2 = {};
                        var2.p = var19;
                        var14 = function() { // Original name: test, environment: var4
                            _fun8036: for (var _fun8036_ip = 0;;) switch (_fun8036_ip) {
                                case 0:
                                    var1 = undefined;
                                    var3 = undefined;
                                    var4 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var2 = var0 - 1;
                                    if (!var0) {
                                        _fun8036_ip = 37;
                                        continue _fun8036
                                    }
                                case 20:
                                    var0 = arguments[var2];
                                    var4[var2] = var0;
                                    var0 = parseFloat(var2);
                                    var2 = var0 - 1;
                                    if (var0) {
                                        _fun8036_ip = 20;
                                        continue _fun8036
                                    }
                                case 37:
                                    var2 = _closure2_slot71;
                                    var0 = 'hsl';
                                    var2 = var2.bind(var1)(var4, var0);
                                    var3 = _closure2_slot72;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = 'array';
                                    if (!(var3 === var4)) {
                                        _fun8036_ip = 83;
                                        continue _fun8036
                                    }
                                case 71:
                                    var3 = var2.length;
                                    var2 = 3;
                                    if (!(var2 !== var3)) {
                                        _fun8036_ip = 85;
                                        continue _fun8036
                                    }
                                case 83:
                                    return var1;
                                case 85:
                                    return var0;
                            }
                        };
                        var2.test = var14;
                        var2 = var6.bind(var10)(var2);
                        var2 = var5.unpack;
                        var _closure2_slot75 = var2;
                        var2 = var9.Math;
                        var2 = var2.min;
                        var _closure2_slot76 = var2;
                        var2 = var9.Math;
                        var2 = var2.max;
                        var _closure2_slot77 = var2;
                        var2 = var5.unpack;
                        var _closure2_slot78 = var2;
                        var2 = var9.Math;
                        var2 = var2.floor;
                        var _closure2_slot79 = var2;
                        var2 = var5.unpack;
                        var _closure2_slot80 = var2;
                        var2 = var5.type;
                        var _closure2_slot81 = var2;
                        var _closure2_slot82 = var1;
                        var2 = function() { // Original name: rgb2hsl, environment: var4
                            _fun8037: for (var _fun8037_ip = 0;;) switch (_fun8037_ip) {
                                case 0:
                                    var3 = undefined;
                                    var4 = undefined;
                                    var2 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8037_ip = 37;
                                        continue _fun8037
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var2[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8037_ip = 20;
                                        continue _fun8037
                                    }
                                case 37:
                                    var1 = _closure2_slot75;
                                    var0 = 'rgb';
                                    var1 = var1.bind(var3)(var2, var0);
                                    var0 = 0;
                                    var6 = var1[var0];
                                    var2 = 1;
                                    var2 = var1[var2];
                                    var10 = 2;
                                    var8 = var1[var10];
                                    var1 = _closure2_slot76;
                                    var1 = var1.bind(var3)(var6, var2, var8);
                                    var4 = _closure2_slot77;
                                    var7 = var4.bind(var3)(var6, var2, var8);
                                    var5 = var7 - var1;
                                    var1 = 255;
                                    var1 = var7 / var1;
                                    if (!(var0 !== var7)) {
                                        _fun8037_ip = 196;
                                        continue _fun8037
                                    }
                                case 111:
                                    var4 = var5 / var7;
                                    var3 = undefined;
                                    if (!(var6 === var7)) {
                                        _fun8037_ip = 129;
                                        continue _fun8037
                                    }
                                case 121:
                                    var9 = var2 - var8;
                                    var3 = var9 / var5;
                                case 129:
                                    if (!(var2 === var7)) {
                                        _fun8037_ip = 145;
                                        continue _fun8037
                                    }
                                case 133:
                                    var9 = var8 - var6;
                                    var9 = var9 / var5;
                                    var3 = var10 + var9;
                                case 145:
                                    if (!(var8 === var7)) {
                                        _fun8037_ip = 164;
                                        continue _fun8037
                                    }
                                case 149:
                                    var2 = var6 - var2;
                                    var5 = var2 / var5;
                                    var2 = 4;
                                    var3 = var2 + var5;
                                case 164:
                                    var2 = 60;
                                    var6 = var3 * var2;
                                    var2 = var4;
                                    var3 = var6;
                                    if (!(var3 < var0)) {
                                        _fun8037_ip = 212;
                                        continue _fun8037
                                    }
                                case 181:
                                    var5 = 360;
                                    var3 = var6 + var5;
                                    var2 = var4;
                                    _fun8037_ip = 212;
                                    continue _fun8037;
                                case 196:
                                    var4 = global;
                                    var4 = var4.Number;
                                    var3 = var4.NaN;
                                    var2 = 0;
                                case 212:
                                    var0 = new Array(3);
                                    var0[0] = var3;
                                    var0[1] = var2;
                                    var0[2] = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot83 = var2;
                        var6 = var1.prototype;
                        var2 = function() { // Environment: var4
                            var2 = _closure2_slot83;
                            var0 = this;
                            var1 = var0._rgb;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var6.hsv = var2;
                        var2 = function() { // Environment: var4
                            _fun8040: for (var _fun8040_ip = 0;;) switch (_fun8040_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8040_ip = 35;
                                        continue _fun8040
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8040_ip = 18;
                                        continue _fun8040
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot82;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['hsv'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.hsv = var2;
                        var6 = var7.format;
                        var2 = function() { // Original name: hsv2rgb, environment: var4
                            _fun8038: for (var _fun8038_ip = 0;;) switch (_fun8038_ip) {
                                case 0:
                                    var13 = undefined;
                                    var2 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8038_ip = 37;
                                        continue _fun8038
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var3[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8038_ip = 20;
                                        continue _fun8038
                                    }
                                case 37:
                                    var2 = _closure2_slot78;
                                    var1 = 'hsv';
                                    var3 = var2.bind(var13)(var3, var1);
                                    var6 = 0;
                                    var11 = var3[var6];
                                    var1 = 1;
                                    var9 = var3[var1];
                                    var8 = 2;
                                    var4 = var3[var8];
                                    var2 = 255;
                                    var10 = var4 * var2;
                                    var5 = var10;
                                    var4 = var5;
                                    var2 = var4;
                                    if (!(var6 !== var9)) {
                                        _fun8038_ip = 419;
                                        continue _fun8038
                                    }
                                case 97:
                                    var12 = 360;
                                    if (!(var12 === var11)) {
                                        _fun8038_ip = 109;
                                        continue _fun8038
                                    }
                                case 107:
                                    var11 = 0;
                                case 109:
                                    var7 = var11;
                                    if (!(var7 > var12)) {
                                        _fun8038_ip = 120;
                                        continue _fun8038
                                    }
                                case 116:
                                    var7 = var11 - var12;
                                case 120:
                                    var11 = var7;
                                    if (!(var11 < var6)) {
                                        _fun8038_ip = 131;
                                        continue _fun8038
                                    }
                                case 127:
                                    var11 = var7 + var12;
                                case 131:
                                    var7 = _closure2_slot79;
                                    var0 = 60;
                                    var0 = var11 / var0;
                                    var12 = var7.bind(var13)(var0);
                                    var0 = var0 - var12;
                                    var7 = var1 - var9;
                                    var7 = var10 * var7;
                                    var11 = var9 * var0;
                                    var11 = var1 - var11;
                                    var11 = var10 * var11;
                                    var0 = var1 - var0;
                                    var0 = var9 * var0;
                                    var0 = var1 - var0;
                                    var9 = var10 * var0;
                                    if (!(var6 !== var12)) {
                                        _fun8038_ip = 391;
                                        continue _fun8038
                                    }
                                case 194:
                                    if (!(var1 !== var12)) {
                                        _fun8038_ip = 361;
                                        continue _fun8038
                                    }
                                case 201:
                                    if (!(var8 !== var12)) {
                                        _fun8038_ip = 331;
                                        continue _fun8038
                                    }
                                case 208:
                                    var0 = 3;
                                    if (!(var0 !== var12)) {
                                        _fun8038_ip = 301;
                                        continue _fun8038
                                    }
                                case 215:
                                    var0 = 4;
                                    if (!(var0 !== var12)) {
                                        _fun8038_ip = 271;
                                        continue _fun8038
                                    }
                                case 222:
                                    var0 = 5;
                                    var5 = undefined;
                                    var4 = undefined;
                                    var2 = undefined;
                                    if (!(var0 === var12)) {
                                        _fun8038_ip = 419;
                                        continue _fun8038
                                    }
                                case 238:
                                    var0 = new Array(3);
                                    var0[0] = var10;
                                    var0[1] = var7;
                                    var0[2] = var11;
                                    var5 = var0[var6];
                                    var4 = var0[var1];
                                    var2 = var0[var8];
                                    _fun8038_ip = 419;
                                    continue _fun8038;
                                case 271:
                                    var0 = new Array(3);
                                    var0[0] = var9;
                                    var0[1] = var7;
                                    var0[2] = var10;
                                    var5 = var0[var6];
                                    var4 = var0[var1];
                                    var2 = var0[var8];
                                    _fun8038_ip = 419;
                                    continue _fun8038;
                                case 301:
                                    var0 = new Array(3);
                                    var0[0] = var7;
                                    var0[1] = var11;
                                    var0[2] = var10;
                                    var5 = var0[var6];
                                    var4 = var0[var1];
                                    var2 = var0[var8];
                                    _fun8038_ip = 419;
                                    continue _fun8038;
                                case 331:
                                    var0 = new Array(3);
                                    var0[0] = var7;
                                    var0[1] = var10;
                                    var0[2] = var9;
                                    var5 = var0[var6];
                                    var4 = var0[var1];
                                    var2 = var0[var8];
                                    _fun8038_ip = 419;
                                    continue _fun8038;
                                case 361:
                                    var0 = new Array(3);
                                    var0[0] = var11;
                                    var0[1] = var10;
                                    var0[2] = var7;
                                    var5 = var0[var6];
                                    var4 = var0[var1];
                                    var2 = var0[var8];
                                    _fun8038_ip = 419;
                                    continue _fun8038;
                                case 391:
                                    var0 = new Array(3);
                                    var0[0] = var10;
                                    var0[1] = var9;
                                    var0[2] = var7;
                                    var5 = var0[var6];
                                    var4 = var0[var1];
                                    var2 = var0[var8];
                                case 419:
                                    var0 = new Array(4);
                                    var0[0] = var5;
                                    var0[1] = var4;
                                    var0[2] = var2;
                                    var4 = var3.length;
                                    var2 = 3;
                                    var4 = var4 > var2;
                                    if (!var4) {
                                        _fun8038_ip = 454;
                                        continue _fun8038
                                    }
                                case 450:
                                    var1 = var3[var2];
                                case 454:
                                    var0[3] = var1;
                                    return var0;
                            }
                        };
                        var6.hsv = var2;
                        var10 = var7.autodetect;
                        var6 = var10.push;
                        var2 = {};
                        var2.p = var19;
                        var14 = function() { // Original name: test, environment: var4
                            _fun8041: for (var _fun8041_ip = 0;;) switch (_fun8041_ip) {
                                case 0:
                                    var1 = undefined;
                                    var3 = undefined;
                                    var4 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var2 = var0 - 1;
                                    if (!var0) {
                                        _fun8041_ip = 37;
                                        continue _fun8041
                                    }
                                case 20:
                                    var0 = arguments[var2];
                                    var4[var2] = var0;
                                    var0 = parseFloat(var2);
                                    var2 = var0 - 1;
                                    if (var0) {
                                        _fun8041_ip = 20;
                                        continue _fun8041
                                    }
                                case 37:
                                    var2 = _closure2_slot80;
                                    var0 = 'hsv';
                                    var2 = var2.bind(var1)(var4, var0);
                                    var3 = _closure2_slot81;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = 'array';
                                    if (!(var3 === var4)) {
                                        _fun8041_ip = 83;
                                        continue _fun8041
                                    }
                                case 71:
                                    var3 = var2.length;
                                    var2 = 3;
                                    if (!(var2 !== var3)) {
                                        _fun8041_ip = 85;
                                        continue _fun8041
                                    }
                                case 83:
                                    return var1;
                                case 85:
                                    return var0;
                            }
                        };
                        var2.test = var14;
                        var2 = var6.bind(var10)(var2);
                        var6 = {
                            'Kn': 18,
                            'Xn': 0.95047,
                            'Yn': 1,
                            'Zn': 1.08883,
                            't0': 0.137931034,
                            't1': 0.206896552,
                            't2': 0.12841855,
                            't3': 0.008856452
                        };
                        var _closure2_slot84 = var6;
                        var2 = var5.unpack;
                        var _closure2_slot85 = var2;
                        var2 = var9.Math;
                        var2 = var2.pow;
                        var _closure2_slot86 = var2;
                        var2 = function(arg0) { // Original name: rgb_xyz, environment: var4
                            _fun8042: for (var _fun8042_ip = 0;;) switch (_fun8042_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = 255;
                                    var2 = var1 / var0;
                                    var0 = 0.04045;
                                    if (!(!(var2 <= var0))) {
                                        _fun8042_ip = 79;
                                        continue _fun8042
                                    }
                                case 24:
                                    var4 = _closure2_slot86;
                                    var3 = undefined;
                                    var0 = 0.055;
                                    var1 = var2 + var0;
                                    var0 = 1.055;
                                    var1 = var1 / var0;
                                    var0 = 2.4;
                                    var0 = var4.bind(var3)(var1, var0);
                                    _fun8042_ip = 93;
                                    continue _fun8042;
                                case 79:
                                    var1 = 12.92;
                                    var0 = var2 / var1;
                                case 93:
                                    return var0;
                            }
                        };
                        var _closure2_slot87 = var2;
                        var2 = function(arg0) { // Original name: xyz_lab, environment: var4
                            _fun8043: for (var _fun8043_ip = 0;;) switch (_fun8043_ip) {
                                case 0:
                                    var4 = arg0;
                                    var0 = _closure2_slot84;
                                    var0 = var0.t3;
                                    if (!(!(var4 > var0))) {
                                        _fun8043_ip = 50;
                                        continue _fun8043
                                    }
                                case 20:
                                    var0 = _closure2_slot84;
                                    var0 = var0.t2;
                                    var2 = var4 / var0;
                                    var0 = _closure2_slot84;
                                    var0 = var0.t0;
                                    var0 = var2 + var0;
                                    _fun8043_ip = 72;
                                    continue _fun8043;
                                case 50:
                                    var3 = _closure2_slot86;
                                    var2 = undefined;
                                    var1 = 0.3333333333333333;
                                    var0 = var3.bind(var2)(var4, var1);
                                case 72:
                                    return var0;
                            }
                        };
                        var _closure2_slot88 = var2;
                        var2 = function(arg0, arg1, arg2) { // Original name: rgb2xyz, environment: var4
                            var1 = _closure2_slot87;
                            var3 = undefined;
                            var0 = arg0;
                            var6 = var1.bind(var3)(var0);
                            var1 = _closure2_slot87;
                            var0 = arg1;
                            var5 = var1.bind(var3)(var0);
                            var1 = _closure2_slot87;
                            var0 = arg2;
                            var7 = var1.bind(var3)(var0);
                            var1 = _closure2_slot88;
                            var0 = 0.4124564;
                            var9 = var0 * var6;
                            var0 = 0.3575761;
                            var0 = var0 * var5;
                            var2 = 0.1804375;
                            var8 = var2 * var7;
                            var2 = _closure2_slot84;
                            var2 = var2.Xn;
                            var0 = var9 + var0;
                            var0 = var0 + var8;
                            var0 = var0 / var2;
                            var1 = var1.bind(var3)(var0);
                            var0 = new Array(3);
                            var0[0] = var1;
                            var2 = _closure2_slot88;
                            var1 = 0.2126729;
                            var10 = var1 * var6;
                            var1 = 0.7151522;
                            var1 = var1 * var5;
                            var8 = 0.072175;
                            var9 = var8 * var7;
                            var8 = _closure2_slot84;
                            var8 = var8.Yn;
                            var1 = var10 + var1;
                            var1 = var1 + var9;
                            var1 = var1 / var8;
                            var1 = var2.bind(var3)(var1);
                            var0[1] = var1;
                            var2 = _closure2_slot88;
                            var1 = 0.0193339;
                            var6 = var1 * var6;
                            var1 = 0.119192;
                            var1 = var1 * var5;
                            var5 = 0.9503041;
                            var5 = var5 * var7;
                            var4 = _closure2_slot84;
                            var4 = var4.Zn;
                            var1 = var6 + var1;
                            var1 = var1 + var5;
                            var1 = var1 / var4;
                            var1 = var2.bind(var3)(var1);
                            var0[2] = var1;
                            return var0;
                        };
                        var _closure2_slot89 = var2;
                        var10 = function() { // Original name: rgb2lab$2, environment: var4
                            _fun8045: for (var _fun8045_ip = 0;;) switch (_fun8045_ip) {
                                case 0:
                                    var7 = undefined;
                                    var2 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8045_ip = 37;
                                        continue _fun8045
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var3[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8045_ip = 20;
                                        continue _fun8045
                                    }
                                case 37:
                                    var2 = _closure2_slot85;
                                    var0 = 'rgb';
                                    var2 = var2.bind(var7)(var3, var0);
                                    var5 = 0;
                                    var6 = var2[var5];
                                    var0 = 1;
                                    var4 = var2[var0];
                                    var3 = 2;
                                    var2 = var2[var3];
                                    var1 = _closure2_slot89;
                                    var1 = var1.bind(var7)(var6, var4, var2);
                                    var4 = var1[var5];
                                    var2 = var1[var0];
                                    var0 = 116;
                                    var6 = var0 * var2;
                                    var0 = 16;
                                    var0 = var6 - var0;
                                    if (!(!(var0 < var5))) {
                                        _fun8045_ip = 114;
                                        continue _fun8045
                                    }
                                case 111:
                                    var5 = var0;
                                case 114:
                                    var0 = new Array(3);
                                    var0[0] = var5;
                                    var5 = var4 - var2;
                                    var4 = 500;
                                    var4 = var4 * var5;
                                    var0[1] = var4;
                                    var1 = var1[var3];
                                    var2 = var2 - var1;
                                    var1 = 200;
                                    var1 = var1 * var2;
                                    var0[2] = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot90 = var6;
                        var2 = var5.unpack;
                        var _closure2_slot91 = var2;
                        var2 = var9.Math;
                        var2 = var2.pow;
                        var _closure2_slot92 = var2;
                        var2 = function(arg0) { // Original name: xyz_rgb, environment: var4
                            _fun8046: for (var _fun8046_ip = 0;;) switch (_fun8046_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = 0.00304;
                                    if (!(!(var2 <= var0))) {
                                        _fun8046_ip = 72;
                                        continue _fun8046
                                    }
                                case 17:
                                    var3 = _closure2_slot92;
                                    var1 = undefined;
                                    var0 = 0.4166666666666667;
                                    var1 = var3.bind(var1)(var2, var0);
                                    var0 = 1.055;
                                    var1 = var0 * var1;
                                    var0 = 0.055;
                                    var1 = var1 - var0;
                                    _fun8046_ip = 86;
                                    continue _fun8046;
                                case 72:
                                    var0 = 12.92;
                                    var1 = var0 * var2;
                                case 86:
                                    var0 = 255;
                                    var0 = var0 * var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot93 = var2;
                        var2 = function(arg0) { // Original name: lab_xyz, environment: var4
                            _fun8047: for (var _fun8047_ip = 0;;) switch (_fun8047_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = _closure2_slot90;
                                    var1 = var1.t1;
                                    if (!(!(var2 > var1))) {
                                        _fun8047_ip = 50;
                                        continue _fun8047
                                    }
                                case 20:
                                    var1 = _closure2_slot90;
                                    var1 = var1.t2;
                                    var0 = _closure2_slot90;
                                    var0 = var0.t0;
                                    var0 = var2 - var0;
                                    var0 = var1 * var0;
                                    _fun8047_ip = 58;
                                    continue _fun8047;
                                case 50:
                                    var1 = var2 * var2;
                                    var0 = var1 * var2;
                                case 58:
                                    return var0;
                            }
                        };
                        var _closure2_slot94 = var2;
                        var2 = function() { // Original name: lab2rgb$1, environment: var4
                            _fun8048: for (var _fun8048_ip = 0;;) switch (_fun8048_ip) {
                                case 0:
                                    var5 = undefined;
                                    var2 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8048_ip = 37;
                                        continue _fun8048
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var3[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8048_ip = 20;
                                        continue _fun8048
                                    }
                                case 37:
                                    var1 = _closure2_slot91;
                                    var0 = 'lab';
                                    var3 = var1.bind(var5)(var3, var0);
                                    var0 = 0;
                                    var6 = var3[var0];
                                    var1 = 1;
                                    var9 = var3[var1];
                                    var0 = 2;
                                    var4 = var3[var0];
                                    var0 = 16;
                                    var6 = var6 + var0;
                                    var0 = 116;
                                    var6 = var6 / var0;
                                    var0 = global;
                                    var7 = var0.isNaN;
                                    var8 = var7.bind(var5)(var9);
                                    var7 = var6;
                                    if (var8) {
                                        _fun8048_ip = 121;
                                        continue _fun8048
                                    }
                                case 107:
                                    var8 = 500;
                                    var8 = var9 / var8;
                                    var7 = var6 + var8;
                                case 121:
                                    var0 = var0.isNaN;
                                    var0 = var0.bind(var5)(var4);
                                    var8 = var6;
                                    if (var0) {
                                        _fun8048_ip = 149;
                                        continue _fun8048
                                    }
                                case 138:
                                    var0 = 200;
                                    var0 = var4 / var0;
                                    var8 = var6 - var0;
                                case 149:
                                    var0 = _closure2_slot90;
                                    var4 = var0.Yn;
                                    var0 = _closure2_slot94;
                                    var0 = var0.bind(var5)(var6);
                                    var6 = var4 * var0;
                                    var0 = _closure2_slot90;
                                    var4 = var0.Xn;
                                    var0 = _closure2_slot94;
                                    var0 = var0.bind(var5)(var7);
                                    var7 = var4 * var0;
                                    var0 = _closure2_slot90;
                                    var4 = var0.Zn;
                                    var0 = _closure2_slot94;
                                    var0 = var0.bind(var5)(var8);
                                    var8 = var4 * var0;
                                    var4 = _closure2_slot93;
                                    var0 = 3.2404542;
                                    var10 = var0 * var7;
                                    var0 = 1.5371385;
                                    var0 = var0 * var6;
                                    var9 = 0.4985314;
                                    var9 = var9 * var8;
                                    var0 = var10 - var0;
                                    var0 = var0 - var9;
                                    var4 = var4.bind(var5)(var0);
                                    var0 = new Array(4);
                                    var0[0] = var4;
                                    var9 = _closure2_slot93;
                                    var4 = -0.969266;
                                    var11 = var4 * var7;
                                    var4 = 1.8760108;
                                    var4 = var4 * var6;
                                    var10 = 0.041556;
                                    var10 = var10 * var8;
                                    var4 = var11 + var4;
                                    var4 = var4 + var10;
                                    var4 = var9.bind(var5)(var4);
                                    var0[1] = var4;
                                    var4 = _closure2_slot93;
                                    var2 = 0.0556434;
                                    var7 = var2 * var7;
                                    var2 = 0.2040259;
                                    var2 = var2 * var6;
                                    var6 = 1.0572252;
                                    var6 = var6 * var8;
                                    var2 = var7 - var2;
                                    var2 = var2 + var6;
                                    var2 = var4.bind(var5)(var2);
                                    var0[2] = var2;
                                    var4 = var3.length;
                                    var2 = 3;
                                    var4 = var4 > var2;
                                    if (!var4) {
                                        _fun8048_ip = 430;
                                        continue _fun8048
                                    }
                                case 426:
                                    var1 = var3[var2];
                                case 430:
                                    var0[3] = var1;
                                    return var0;
                            }
                        };
                        var14 = var5.unpack;
                        var _closure2_slot95 = var14;
                        var14 = var5.type;
                        var _closure2_slot96 = var14;
                        var _closure2_slot97 = var1;
                        var _closure2_slot98 = var10;
                        var16 = var1.prototype;
                        var14 = function() { // Environment: var4
                            var2 = _closure2_slot98;
                            var0 = this;
                            var1 = var0._rgb;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var16.lab = var14;
                        var14 = function() { // Environment: var4
                            _fun8050: for (var _fun8050_ip = 0;;) switch (_fun8050_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8050_ip = 35;
                                        continue _fun8050
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8050_ip = 18;
                                        continue _fun8050
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot97;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['lab'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.lab = var14;
                        var14 = var7.format;
                        var14.lab = var2;
                        var18 = var7.autodetect;
                        var16 = var18.push;
                        var14 = {};
                        var14.p = var19;
                        var19 = function() { // Original name: test, environment: var4
                            _fun8051: for (var _fun8051_ip = 0;;) switch (_fun8051_ip) {
                                case 0:
                                    var1 = undefined;
                                    var3 = undefined;
                                    var4 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var2 = var0 - 1;
                                    if (!var0) {
                                        _fun8051_ip = 37;
                                        continue _fun8051
                                    }
                                case 20:
                                    var0 = arguments[var2];
                                    var4[var2] = var0;
                                    var0 = parseFloat(var2);
                                    var2 = var0 - 1;
                                    if (var0) {
                                        _fun8051_ip = 20;
                                        continue _fun8051
                                    }
                                case 37:
                                    var2 = _closure2_slot95;
                                    var0 = 'lab';
                                    var2 = var2.bind(var1)(var4, var0);
                                    var3 = _closure2_slot96;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = 'array';
                                    if (!(var3 === var4)) {
                                        _fun8051_ip = 83;
                                        continue _fun8051
                                    }
                                case 71:
                                    var3 = var2.length;
                                    var2 = 3;
                                    if (!(var2 !== var3)) {
                                        _fun8051_ip = 85;
                                        continue _fun8051
                                    }
                                case 83:
                                    return var1;
                                case 85:
                                    return var0;
                            }
                        };
                        var14.test = var19;
                        var14 = var16.bind(var18)(var14);
                        var14 = var5.unpack;
                        var _closure2_slot99 = var14;
                        var14 = var5.RAD2DEG;
                        var _closure2_slot100 = var14;
                        var14 = var9.Math;
                        var14 = var14.sqrt;
                        var _closure2_slot101 = var14;
                        var14 = var9.Math;
                        var14 = var14.atan2;
                        var _closure2_slot102 = var14;
                        var14 = var9.Math;
                        var14 = var14.round;
                        var _closure2_slot103 = var14;
                        var14 = function() { // Original name: lab2lch$2, environment: var4
                            _fun8052: for (var _fun8052_ip = 0;;) switch (_fun8052_ip) {
                                case 0:
                                    var6 = undefined;
                                    var2 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8052_ip = 37;
                                        continue _fun8052
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var3[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8052_ip = 20;
                                        continue _fun8052
                                    }
                                case 37:
                                    var2 = _closure2_slot99;
                                    var1 = 'lab';
                                    var2 = var2.bind(var6)(var3, var1);
                                    var4 = 0;
                                    var3 = var2[var4];
                                    var1 = 1;
                                    var7 = var2[var1];
                                    var1 = 2;
                                    var5 = var2[var1];
                                    var2 = _closure2_slot101;
                                    var8 = var7 * var7;
                                    var1 = var5 * var5;
                                    var1 = var8 + var1;
                                    var2 = var2.bind(var6)(var1);
                                    var1 = _closure2_slot102;
                                    var5 = var1.bind(var6)(var5, var7);
                                    var1 = _closure2_slot100;
                                    var1 = var5 * var1;
                                    var5 = 360;
                                    var1 = var1 + var5;
                                    var1 = var1 % var5;
                                    var5 = _closure2_slot103;
                                    var0 = 10000;
                                    var0 = var0 * var2;
                                    var0 = var5.bind(var6)(var0);
                                    if (!(var4 === var0)) {
                                        _fun8052_ip = 164;
                                        continue _fun8052
                                    }
                                case 150:
                                    var0 = global;
                                    var0 = var0.Number;
                                    var1 = var0.NaN;
                                case 164:
                                    var0 = new Array(3);
                                    var0[0] = var3;
                                    var0[1] = var2;
                                    var0[2] = var1;
                                    return var0;
                            }
                        };
                        var16 = var5.unpack;
                        var _closure2_slot104 = var16;
                        var _closure2_slot105 = var10;
                        var _closure2_slot106 = var14;
                        var10 = var5.unpack;
                        var _closure2_slot107 = var10;
                        var10 = var5.DEG2RAD;
                        var _closure2_slot108 = var10;
                        var10 = var9.Math;
                        var10 = var10.sin;
                        var _closure2_slot109 = var10;
                        var10 = var9.Math;
                        var10 = var10.cos;
                        var _closure2_slot110 = var10;
                        var10 = function() { // Original name: lch2lab$2, environment: var4
                            _fun8054: for (var _fun8054_ip = 0;;) switch (_fun8054_ip) {
                                case 0:
                                    var4 = undefined;
                                    var2 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8054_ip = 37;
                                        continue _fun8054
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var3[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8054_ip = 20;
                                        continue _fun8054
                                    }
                                case 37:
                                    var2 = _closure2_slot107;
                                    var0 = 'lch';
                                    var6 = var2.bind(var4)(var3, var0);
                                    var0 = 0;
                                    var3 = var6[var0];
                                    var2 = 1;
                                    var2 = var6[var2];
                                    var5 = 2;
                                    var6 = var6[var5];
                                    var5 = global;
                                    var5 = var5.isNaN;
                                    var5 = var5.bind(var4)(var6);
                                    if (!var5) {
                                        _fun8054_ip = 92;
                                        continue _fun8054
                                    }
                                case 90:
                                    var6 = 0;
                                case 92:
                                    var0 = new Array(3);
                                    var0[0] = var3;
                                    var5 = _closure2_slot110;
                                    var3 = _closure2_slot108;
                                    var3 = var6 * var3;
                                    var5 = var5.bind(var4)(var3);
                                    var5 = var5 * var2;
                                    var0[1] = var5;
                                    var1 = _closure2_slot109;
                                    var1 = var1.bind(var4)(var3);
                                    var1 = var1 * var2;
                                    var0[2] = var1;
                                    return var0;
                            }
                        };
                        var16 = var5.unpack;
                        var _closure2_slot111 = var16;
                        var _closure2_slot112 = var10;
                        var _closure2_slot113 = var2;
                        var16 = function() { // Original name: lch2rgb$1, environment: var4
                            _fun8055: for (var _fun8055_ip = 0;;) switch (_fun8055_ip) {
                                case 0:
                                    var8 = undefined;
                                    var2 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8055_ip = 37;
                                        continue _fun8055
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var3[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8055_ip = 20;
                                        continue _fun8055
                                    }
                                case 37:
                                    var1 = _closure2_slot111;
                                    var0 = 'lch';
                                    var3 = var1.bind(var8)(var3, var0);
                                    var0 = 0;
                                    var9 = var3[var0];
                                    var1 = 1;
                                    var7 = var3[var1];
                                    var4 = 2;
                                    var6 = var3[var4];
                                    var5 = _closure2_slot112;
                                    var5 = var5.bind(var8)(var9, var7, var6);
                                    var7 = var5[var0];
                                    var6 = var5[var1];
                                    var5 = var5[var4];
                                    var2 = _closure2_slot113;
                                    var2 = var2.bind(var8)(var7, var6, var5);
                                    var5 = var2[var0];
                                    var0 = new Array(4);
                                    var0[0] = var5;
                                    var5 = var2[var1];
                                    var0[1] = var5;
                                    var2 = var2[var4];
                                    var0[2] = var2;
                                    var4 = var3.length;
                                    var2 = 3;
                                    var4 = var4 > var2;
                                    if (!var4) {
                                        _fun8055_ip = 155;
                                        continue _fun8055
                                    }
                                case 151:
                                    var1 = var3[var2];
                                case 155:
                                    var0[3] = var1;
                                    return var0;
                            }
                        };
                        var2 = var5.unpack;
                        var _closure2_slot114 = var2;
                        var _closure2_slot115 = var16;
                        var2 = var5.unpack;
                        var _closure2_slot116 = var2;
                        var2 = var5.type;
                        var _closure2_slot117 = var2;
                        var _closure2_slot118 = var1;
                        var _closure2_slot119 = var7;
                        var2 = function() { // Original name: rgb2lch$1, environment: var4
                            _fun8053: for (var _fun8053_ip = 0;;) switch (_fun8053_ip) {
                                case 0:
                                    var4 = undefined;
                                    var2 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8053_ip = 37;
                                        continue _fun8053
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var3[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8053_ip = 20;
                                        continue _fun8053
                                    }
                                case 37:
                                    var2 = _closure2_slot104;
                                    var1 = 'rgb';
                                    var1 = var2.bind(var4)(var3, var1);
                                    var3 = 0;
                                    var8 = var1[var3];
                                    var2 = 1;
                                    var7 = var1[var2];
                                    var5 = 2;
                                    var6 = var1[var5];
                                    var1 = _closure2_slot105;
                                    var1 = var1.bind(var4)(var8, var7, var6);
                                    var3 = var1[var3];
                                    var2 = var1[var2];
                                    var1 = var1[var5];
                                    var0 = _closure2_slot106;
                                    var0 = var0.bind(var4)(var3, var2, var1);
                                    return var0;
                            }
                        };
                        var _closure2_slot120 = var2;
                        var18 = var1.prototype;
                        var2 = function() { // Environment: var4
                            var2 = _closure2_slot120;
                            var0 = this;
                            var1 = var0._rgb;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var18.lch = var2;
                        var18 = var1.prototype;
                        var2 = function() { // Environment: var4
                            var2 = _closure2_slot120;
                            var0 = this;
                            var1 = var0._rgb;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.reverse;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var18.hcl = var2;
                        var2 = function() { // Environment: var4
                            _fun8059: for (var _fun8059_ip = 0;;) switch (_fun8059_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8059_ip = 35;
                                        continue _fun8059
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8059_ip = 18;
                                        continue _fun8059
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot118;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['lch'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.lch = var2;
                        var2 = function() { // Environment: var4
                            _fun8060: for (var _fun8060_ip = 0;;) switch (_fun8060_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8060_ip = 35;
                                        continue _fun8060
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8060_ip = 18;
                                        continue _fun8060
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot118;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['hcl'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.hcl = var2;
                        var2 = var7.format;
                        var2.lch = var16;
                        var16 = var7.format;
                        var2 = function() { // Original name: hcl2rgb, environment: var4
                            _fun8056: for (var _fun8056_ip = 0;;) switch (_fun8056_ip) {
                                case 0:
                                    var3 = undefined;
                                    var2 = undefined;
                                    var4 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8056_ip = 37;
                                        continue _fun8056
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var4[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8056_ip = 20;
                                        continue _fun8056
                                    }
                                case 37:
                                    var2 = _closure2_slot114;
                                    var1 = 'hcl';
                                    var2 = var2.bind(var3)(var4, var1);
                                    var1 = var2.reverse;
                                    var2 = var1.bind(var2)();
                                    var1 = _closure2_slot115;
                                    var0 = var1.apply;
                                    var0 = var0.bind(var1)(var3, var2);
                                    return var0;
                            }
                        };
                        var16.hcl = var2;
                        var18 = ['lch', 'hcl'];
                        var16 = var18.forEach;
                        var2 = function(arg0) { // Environment: var4
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var0 = _closure2_slot119;
                            var2 = var0.autodetect;
                            var1 = var2.push;
                            var0 = {};
                            var4 = 2;
                            var0.p = var4;
                            var3 = function() { // Original name: test, environment: var3
                                _fun8062: for (var _fun8062_ip = 0;;) switch (_fun8062_ip) {
                                    case 0:
                                        var1 = undefined;
                                        var3 = undefined;
                                        var5 = new Array(0);
                                        var0 = arguments.length;
                                        var0 = parseFloat(var0);
                                        var2 = var0 - 1;
                                        if (!var0) {
                                            _fun8062_ip = 37;
                                            continue _fun8062
                                        }
                                    case 20:
                                        var0 = arguments[var2];
                                        var5[var2] = var0;
                                        var0 = parseFloat(var2);
                                        var2 = var0 - 1;
                                        if (var0) {
                                            _fun8062_ip = 20;
                                            continue _fun8062
                                        }
                                    case 37:
                                        var4 = _closure2_slot116;
                                        var2 = _closure3_slot0;
                                        var2 = var4.bind(var1)(var5, var2);
                                        var3 = _closure2_slot117;
                                        var4 = var3.bind(var1)(var2);
                                        var3 = 'array';
                                        if (!(var3 === var4)) {
                                            _fun8062_ip = 86;
                                            continue _fun8062
                                        }
                                    case 74:
                                        var3 = var2.length;
                                        var2 = 3;
                                        if (!(var2 !== var3)) {
                                            _fun8062_ip = 88;
                                            continue _fun8062
                                        }
                                    case 86:
                                        return var1;
                                    case 88:
                                        var0 = _closure3_slot0;
                                        return var0;
                                }
                            };
                            var0.test = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2 = var16.bind(var18)(var2);
                        var2 = {
                            'aliceblue': '#f0f8ff',
                            'antiquewhite': '#faebd7',
                            'aqua': '#00ffff',
                            'aquamarine': '#7fffd4',
                            'azure': '#f0ffff',
                            'beige': '#f5f5dc',
                            'bisque': '#ffe4c4',
                            'black': '#000000',
                            'blanchedalmond': '#ffebcd',
                            'blue': '#0000ff',
                            'blueviolet': '#8a2be2',
                            'brown': '#a52a2a',
                            'burlywood': '#deb887',
                            'cadetblue': '#5f9ea0',
                            'chartreuse': '#7fff00',
                            'chocolate': '#d2691e',
                            'coral': '#ff7f50',
                            'cornflower': '#6495ed',
                            'cornflowerblue': '#6495ed',
                            'cornsilk': '#fff8dc',
                            'crimson': '#dc143c',
                            'cyan': '#00ffff',
                            'darkblue': '#00008b',
                            'darkcyan': '#008b8b',
                            'darkgoldenrod': '#b8860b',
                            'darkgray': '#a9a9a9',
                            'darkgreen': '#006400',
                            'darkgrey': '#a9a9a9',
                            'darkkhaki': '#bdb76b',
                            'darkmagenta': '#8b008b',
                            'darkolivegreen': '#556b2f',
                            'darkorange': '#ff8c00',
                            'darkorchid': '#9932cc',
                            'darkred': '#8b0000',
                            'darksalmon': '#e9967a',
                            'darkseagreen': '#8fbc8f',
                            'darkslateblue': '#483d8b',
                            'darkslategray': '#2f4f4f',
                            'darkslategrey': '#2f4f4f',
                            'darkturquoise': '#00ced1',
                            'darkviolet': '#9400d3',
                            'deeppink': '#ff1493',
                            'deepskyblue': '#00bfff',
                            'dimgray': '#696969',
                            'dimgrey': '#696969',
                            'dodgerblue': '#1e90ff',
                            'firebrick': '#b22222',
                            'floralwhite': '#fffaf0',
                            'forestgreen': '#228b22',
                            'fuchsia': '#ff00ff',
                            'gainsboro': '#dcdcdc',
                            'ghostwhite': '#f8f8ff',
                            'gold': '#ffd700',
                            'goldenrod': '#daa520',
                            'gray': '#808080',
                            'green': '#008000',
                            'greenyellow': '#adff2f',
                            'grey': '#808080',
                            'honeydew': '#f0fff0',
                            'hotpink': '#ff69b4',
                            'indianred': '#cd5c5c',
                            'indigo': '#4b0082',
                            'ivory': '#fffff0',
                            'khaki': '#f0e68c',
                            'laserlemon': '#ffff54',
                            'lavender': '#e6e6fa',
                            'lavenderblush': '#fff0f5',
                            'lawngreen': '#7cfc00',
                            'lemonchiffon': '#fffacd',
                            'lightblue': '#add8e6',
                            'lightcoral': '#f08080',
                            'lightcyan': '#e0ffff',
                            'lightgoldenrod': '#fafad2',
                            'lightgoldenrodyellow': '#fafad2',
                            'lightgray': '#d3d3d3',
                            'lightgreen': '#90ee90',
                            'lightgrey': '#d3d3d3',
                            'lightpink': '#ffb6c1',
                            'lightsalmon': '#ffa07a',
                            'lightseagreen': '#20b2aa',
                            'lightskyblue': '#87cefa',
                            'lightslategray': '#778899',
                            'lightslategrey': '#778899',
                            'lightsteelblue': '#b0c4de',
                            'lightyellow': '#ffffe0',
                            'lime': '#00ff00',
                            'limegreen': '#32cd32',
                            'linen': '#faf0e6',
                            'magenta': '#ff00ff',
                            'maroon': '#800000',
                            'maroon2': '#7f0000',
                            'maroon3': '#b03060',
                            'mediumaquamarine': '#66cdaa',
                            'mediumblue': '#0000cd',
                            'mediumorchid': '#ba55d3',
                            'mediumpurple': '#9370db',
                            'mediumseagreen': '#3cb371',
                            'mediumslateblue': '#7b68ee',
                            'mediumspringgreen': '#00fa9a',
                            'mediumturquoise': '#48d1cc',
                            'mediumvioletred': '#c71585',
                            'midnightblue': '#191970',
                            'mintcream': '#f5fffa',
                            'mistyrose': '#ffe4e1',
                            'moccasin': '#ffe4b5',
                            'navajowhite': '#ffdead',
                            'navy': '#000080',
                            'oldlace': '#fdf5e6',
                            'olive': '#808000',
                            'olivedrab': '#6b8e23',
                            'orange': '#ffa500',
                            'orangered': '#ff4500',
                            'orchid': '#da70d6',
                            'palegoldenrod': '#eee8aa',
                            'palegreen': '#98fb98',
                            'paleturquoise': '#afeeee',
                            'palevioletred': '#db7093',
                            'papayawhip': '#ffefd5',
                            'peachpuff': '#ffdab9',
                            'peru': '#cd853f',
                            'pink': '#ffc0cb',
                            'plum': '#dda0dd',
                            'powderblue': '#b0e0e6',
                            'purple': '#800080',
                            'purple2': '#7f007f',
                            'purple3': '#a020f0',
                            'rebeccapurple': '#663399',
                            'red': '#ff0000',
                            'rosybrown': '#bc8f8f',
                            'royalblue': '#4169e1',
                            'saddlebrown': '#8b4513',
                            'salmon': '#fa8072',
                            'sandybrown': '#f4a460',
                            'seagreen': '#2e8b57',
                            'seashell': '#fff5ee',
                            'sienna': '#a0522d',
                            'silver': '#c0c0c0',
                            'skyblue': '#87ceeb',
                            'slateblue': '#6a5acd',
                            'slategray': '#708090',
                            'slategrey': '#708090',
                            'snow': '#fffafa',
                            'springgreen': '#00ff7f',
                            'steelblue': '#4682b4',
                            'tan': '#d2b48c',
                            'teal': '#008080',
                            'thistle': '#d8bfd8',
                            'tomato': '#ff6347',
                            'turquoise': '#40e0d0',
                            'violet': '#ee82ee',
                            'wheat': '#f5deb3',
                            'white': '#ffffff',
                            'whitesmoke': '#f5f5f5',
                            'yellow': '#ffff00',
                            'yellowgreen': '#9acd32'
                        };
                        var16 = var5.type;
                        var _closure2_slot121 = var16;
                        var _closure2_slot122 = var2;
                        var _closure2_slot123 = var15;
                        var _closure2_slot124 = var8;
                        var15 = var1.prototype;
                        var8 = function() { // Environment: var4
                            _fun8063: for (var _fun8063_ip = 0;;) switch (_fun8063_ip) {
                                case 0:
                                    var3 = _closure2_slot124;
                                    var0 = this;
                                    var2 = var0._rgb;
                                    var1 = undefined;
                                    var0 = 'rgb';
                                    var0 = var3.bind(var1)(var2, var0);
                                    var1 = global;
                                    var3 = var1.Object;
                                    var2 = var3.keys;
                                    var1 = _closure2_slot122;
                                    var5 = var2.bind(var3)(var1);
                                    var1 = var5.length;
                                    var4 = 0;
                                    var1 = var4 < var1;
                                    var3 = 1;
                                    if (!var1) {
                                        _fun8063_ip = 96;
                                        continue _fun8063
                                    }
                                case 67:
                                    var1 = var5[var4];
                                    var2 = _closure2_slot122;
                                    var2 = var2[var1];
                                    if (!(var2 !== var0)) {
                                        _fun8063_ip = 98;
                                        continue _fun8063
                                    }
                                case 83:
                                    var4 = var4 + var3;
                                    var2 = var5.length;
                                    if (var4 < var2) {
                                        _fun8063_ip = 67;
                                        continue _fun8063
                                    }
                                case 96:
                                    return var0;
                                case 98:
                                    var0 = var1.toLowerCase;
                                    var0 = var0.bind(var1)();
                                    return var0;
                            }
                        };
                        var15.name = var8;
                        var15 = var7.format;
                        var8 = function(arg0) { // Environment: var4
                            _fun8064: for (var _fun8064_ip = 0;;) switch (_fun8064_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = var1.toLowerCase;
                                    var1 = var0.bind(var1)();
                                    var2 = _closure2_slot122;
                                    var2 = var2[var1];
                                    if (var2) {
                                        _fun8064_ip = 67;
                                        continue _fun8064
                                    }
                                case 27:
                                    var2 = global;
                                    var4 = var2.Error;
                                    var2 = 'unknown color name: ';
                                    var5 = var2 + var1;
                                    var3 = var4.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var6 = var3;
                                    var2 = new var6[var4](var5, var4);
                                    var2 = var2 instanceof Object ? var2 : var3;
                                    throw var2;
                                case 67:
                                    var2 = _closure2_slot123;
                                    var0 = _closure2_slot122;
                                    var1 = var0[var1];
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var15.named = var8;
                        var16 = var7.autodetect;
                        var15 = var16.push;
                        var8 = {};
                        var8.p = var17;
                        var18 = function(arg0) { // Original name: test, environment: var4
                            _fun8065: for (var _fun8065_ip = 0;;) switch (_fun8065_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = undefined;
                                    var7 = undefined;
                                    var1 = new Array(0);
                                    var2 = arguments.length;
                                    var6 = 1;
                                    var2 = var2 - var6;
                                    var5 = var2 - 1;
                                    var4 = 0;
                                    if (!(var2 > var4)) {
                                        _fun8065_ip = 52;
                                        continue _fun8065
                                    }
                                case 30:
                                    var2 = var5 + var6;
                                    var2 = arguments[var2];
                                    var1[var5] = var2;
                                    var2 = parseFloat(var5);
                                    var5 = var2 - 1;
                                    if (var2 > var4) {
                                        _fun8065_ip = 30;
                                        continue _fun8065
                                    }
                                case 52:
                                    var1 = var1.length;
                                    if (var1) {
                                        _fun8065_ip = 107;
                                        continue _fun8065
                                    }
                                case 60:
                                    var2 = _closure2_slot121;
                                    var4 = var2.bind(var0)(var3);
                                    var2 = 'string';
                                    if (!(var2 === var4)) {
                                        _fun8065_ip = 107;
                                        continue _fun8065
                                    }
                                case 80:
                                    var2 = _closure2_slot122;
                                    var1 = var3.toLowerCase;
                                    var1 = var1.bind(var3)();
                                    var1 = var2[var1];
                                    if (!var1) {
                                        _fun8065_ip = 107;
                                        continue _fun8065
                                    }
                                case 101:
                                    var1 = 'named';
                                    return var1;
                                case 107:
                                    return var0;
                            }
                        };
                        var8.test = var18;
                        var8 = var15.bind(var16)(var8);
                        var8 = var5.unpack;
                        var _closure2_slot125 = var8;
                        var8 = var5.type;
                        var _closure2_slot126 = var8;
                        var _closure2_slot127 = var1;
                        var8 = var5.type;
                        var _closure2_slot128 = var8;
                        var8 = function() { // Original name: rgb2num$1, environment: var4
                            _fun8066: for (var _fun8066_ip = 0;;) switch (_fun8066_ip) {
                                case 0:
                                    var3 = undefined;
                                    var4 = undefined;
                                    var2 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8066_ip = 37;
                                        continue _fun8066
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var2[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8066_ip = 20;
                                        continue _fun8066
                                    }
                                case 37:
                                    var1 = _closure2_slot125;
                                    var0 = 'rgb';
                                    var3 = var1.bind(var3)(var2, var0);
                                    var0 = 0;
                                    var1 = var3[var0];
                                    var0 = 16;
                                    var2 = var1 << var0;
                                    var0 = 1;
                                    var1 = var3[var0];
                                    var0 = 8;
                                    var0 = var1 << var0;
                                    var1 = 2;
                                    var1 = var3[var1];
                                    var0 = var2 + var0;
                                    var0 = var0 + var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot129 = var8;
                        var15 = var1.prototype;
                        var8 = function() { // Environment: var4
                            var2 = _closure2_slot129;
                            var0 = this;
                            var1 = var0._rgb;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var15.num = var8;
                        var8 = function() { // Environment: var4
                            _fun8069: for (var _fun8069_ip = 0;;) switch (_fun8069_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8069_ip = 35;
                                        continue _fun8069
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8069_ip = 18;
                                        continue _fun8069
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot127;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['num'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.num = var8;
                        var15 = var7.format;
                        var8 = function(arg0) { // Original name: num2rgb, environment: var4
                            _fun8067: for (var _fun8067_ip = 0;;) switch (_fun8067_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = _closure2_slot126;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)(var2);
                                    var0 = 'number';
                                    if (!(var0 == var1)) {
                                        _fun8067_ip = 41;
                                        continue _fun8067
                                    }
                                case 25:
                                    var0 = 0;
                                    if (!(var2 >= var0)) {
                                        _fun8067_ip = 41;
                                        continue _fun8067
                                    }
                                case 31:
                                    var0 = 16777215;
                                    if (!(!(var2 <= var0))) {
                                        _fun8067_ip = 81;
                                        continue _fun8067
                                    }
                                case 41:
                                    var0 = global;
                                    var3 = var0.Error;
                                    var0 = 'unknown num color: ';
                                    var4 = var0 + var2;
                                    var1 = var3.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var5 = var1;
                                    var0 = new var5[var3](var4, var3);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                                case 81:
                                    var0 = 16;
                                    var1 = var2 >> var0;
                                    var0 = new Array(4);
                                    var0[0] = var1;
                                    var1 = 8;
                                    var3 = var2 >> var1;
                                    var1 = 255;
                                    var3 = var3 & var1;
                                    var0[1] = var3;
                                    var1 = var1 & var2;
                                    var0[2] = var1;
                                    var1 = 1;
                                    var0[3] = var1;
                                    return var0;
                            }
                        };
                        var15.num = var8;
                        var16 = var7.autodetect;
                        var15 = var16.push;
                        var8 = {};
                        var8.p = var17;
                        var17 = function() { // Original name: test, environment: var4
                            _fun8070: for (var _fun8070_ip = 0;;) switch (_fun8070_ip) {
                                case 0:
                                    var0 = undefined;
                                    var4 = undefined;
                                    var2 = new Array(0);
                                    var1 = arguments.length;
                                    var1 = parseFloat(var1);
                                    var3 = var1 - 1;
                                    if (!var1) {
                                        _fun8070_ip = 37;
                                        continue _fun8070
                                    }
                                case 20:
                                    var1 = arguments[var3];
                                    var2[var3] = var1;
                                    var1 = parseFloat(var3);
                                    var3 = var1 - 1;
                                    if (var1) {
                                        _fun8070_ip = 20;
                                        continue _fun8070
                                    }
                                case 37:
                                    var3 = var2.length;
                                    var1 = 1;
                                    if (!(var1 === var3)) {
                                        _fun8070_ip = 97;
                                        continue _fun8070
                                    }
                                case 49:
                                    var4 = _closure2_slot128;
                                    var1 = 0;
                                    var3 = var2[var1];
                                    var4 = var4.bind(var0)(var3);
                                    var3 = 'number';
                                    if (!(var3 === var4)) {
                                        _fun8070_ip = 97;
                                        continue _fun8070
                                    }
                                case 75:
                                    var3 = var2[var1];
                                    if (!(var3 >= var1)) {
                                        _fun8070_ip = 97;
                                        continue _fun8070
                                    }
                                case 83:
                                    var2 = var2[var1];
                                    var1 = 16777215;
                                    if (!(!(var2 <= var1))) {
                                        _fun8070_ip = 99;
                                        continue _fun8070
                                    }
                                case 97:
                                    return var0;
                                case 99:
                                    var0 = 'num';
                                    return var0;
                            }
                        };
                        var8.test = var17;
                        var8 = var15.bind(var16)(var8);
                        var _closure2_slot130 = var1;
                        var8 = var5.unpack;
                        var _closure2_slot131 = var8;
                        var8 = var5.type;
                        var _closure2_slot132 = var8;
                        var8 = var9.Math;
                        var8 = var8.round;
                        var _closure2_slot133 = var8;
                        var15 = var1.prototype;
                        var8 = function(arg0) { // Environment: var4
                            _fun8071: for (var _fun8071_ip = 0;;) switch (_fun8071_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = this;
                                    var0 = undefined;
                                    if (!(var0 === var2)) {
                                        _fun8071_ip = 14;
                                        continue _fun8071
                                    }
                                case 12:
                                    var2 = true;
                                case 14:
                                    var0 = false;
                                    if (!(var0 !== var2)) {
                                        _fun8071_ip = 61;
                                        continue _fun8071
                                    }
                                case 20:
                                    var4 = var1._rgb;
                                    var3 = var4.slice;
                                    var2 = 0;
                                    var0 = 3;
                                    var3 = var3.bind(var4)(var2, var0);
                                    var2 = var3.map;
                                    var0 = _closure2_slot133;
                                    var0 = var2.bind(var3)(var0);
                                    _fun8071_ip = 83;
                                    continue _fun8071;
                                case 61:
                                    var4 = var1._rgb;
                                    var3 = var4.slice;
                                    var2 = 0;
                                    var1 = 3;
                                    var0 = var3.bind(var4)(var2, var1);
                                case 83:
                                    return var0;
                            }
                        };
                        var15.rgb = var8;
                        var15 = var1.prototype;
                        var8 = function(arg0) { // Environment: var4
                            _fun8072: for (var _fun8072_ip = 0;;) switch (_fun8072_ip) {
                                case 0:
                                    var2 = arg0;
                                    var _closure3_slot0 = var2;
                                    var1 = undefined;
                                    if (!(var1 === var2)) {
                                        _fun8072_ip = 21;
                                        continue _fun8072
                                    }
                                case 15:
                                    var1 = true;
                                    _closure3_slot0 = var1;
                                case 21:
                                    var1 = this;
                                    var4 = var1._rgb;
                                    var3 = var4.slice;
                                    var2 = 0;
                                    var1 = 4;
                                    var2 = var3.bind(var4)(var2, var1);
                                    var1 = var2.map;
                                    var0 = function(arg0, arg1) { // Environment: var0
                                        _fun8073: for (var _fun8073_ip = 0;;) switch (_fun8073_ip) {
                                            case 0:
                                                var4 = arg0;
                                                var2 = arg1;
                                                var1 = 3;
                                                var0 = var4;
                                                if (!(var2 < var1)) {
                                                    _fun8073_ip = 49;
                                                    continue _fun8073
                                                }
                                            case 16:
                                                var3 = _closure3_slot0;
                                                var2 = false;
                                                var1 = var4;
                                                if (!(var2 !== var3)) {
                                                    _fun8073_ip = 46;
                                                    continue _fun8073
                                                }
                                            case 32:
                                                var3 = _closure2_slot133;
                                                var2 = undefined;
                                                var1 = var3.bind(var2)(var4);
                                            case 46:
                                                var0 = var1;
                                            case 49:
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var15.rgba = var8;
                        var8 = function() { // Environment: var4
                            _fun8074: for (var _fun8074_ip = 0;;) switch (_fun8074_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8074_ip = 35;
                                        continue _fun8074
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8074_ip = 18;
                                        continue _fun8074
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot130;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['rgb'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.rgb = var8;
                        var15 = var7.format;
                        var8 = function() { // Environment: var4
                            _fun8075: for (var _fun8075_ip = 0;;) switch (_fun8075_ip) {
                                case 0:
                                    var3 = undefined;
                                    var4 = undefined;
                                    var2 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8075_ip = 37;
                                        continue _fun8075
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var2[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8075_ip = 20;
                                        continue _fun8075
                                    }
                                case 37:
                                    var1 = _closure2_slot131;
                                    var0 = 'rgba';
                                    var0 = var1.bind(var3)(var2, var0);
                                    var2 = 3;
                                    var1 = var0[var2];
                                    if (!(var3 === var1)) {
                                        _fun8075_ip = 72;
                                        continue _fun8075
                                    }
                                case 65:
                                    var1 = 1;
                                    var0[var2] = var1;
                                case 72:
                                    return var0;
                            }
                        };
                        var15.rgb = var8;
                        var16 = var7.autodetect;
                        var15 = var16.push;
                        var8 = {};
                        var8.p = var13;
                        var17 = function() { // Original name: test, environment: var4
                            _fun8076: for (var _fun8076_ip = 0;;) switch (_fun8076_ip) {
                                case 0:
                                    var0 = undefined;
                                    var3 = undefined;
                                    var4 = new Array(0);
                                    var1 = arguments.length;
                                    var1 = parseFloat(var1);
                                    var2 = var1 - 1;
                                    if (!var1) {
                                        _fun8076_ip = 37;
                                        continue _fun8076
                                    }
                                case 20:
                                    var1 = arguments[var2];
                                    var4[var2] = var1;
                                    var1 = parseFloat(var2);
                                    var2 = var1 - 1;
                                    if (var1) {
                                        _fun8076_ip = 20;
                                        continue _fun8076
                                    }
                                case 37:
                                    var2 = _closure2_slot131;
                                    var1 = 'rgba';
                                    var2 = var2.bind(var0)(var4, var1);
                                    var1 = _closure2_slot132;
                                    var4 = var1.bind(var0)(var2);
                                    var1 = 'array';
                                    if (!(var1 === var4)) {
                                        _fun8076_ip = 137;
                                        continue _fun8076
                                    }
                                case 71:
                                    var4 = var2.length;
                                    var1 = 3;
                                    if (!(var1 !== var4)) {
                                        _fun8076_ip = 139;
                                        continue _fun8076
                                    }
                                case 83:
                                    var5 = var2.length;
                                    var4 = 4;
                                    if (!(var4 === var5)) {
                                        _fun8076_ip = 137;
                                        continue _fun8076
                                    }
                                case 95:
                                    var4 = _closure2_slot132;
                                    var3 = var2[var1];
                                    var4 = var4.bind(var0)(var3);
                                    var3 = 'number';
                                    if (!(var3 == var4)) {
                                        _fun8076_ip = 137;
                                        continue _fun8076
                                    }
                                case 116:
                                    var4 = var2[var1];
                                    var3 = 0;
                                    if (!(var4 >= var3)) {
                                        _fun8076_ip = 137;
                                        continue _fun8076
                                    }
                                case 126:
                                    var2 = var2[var1];
                                    var1 = 1;
                                    if (!(!(var2 <= var1))) {
                                        _fun8076_ip = 139;
                                        continue _fun8076
                                    }
                                case 137:
                                    return var0;
                                case 139:
                                    var0 = 'rgb';
                                    return var0;
                            }
                        };
                        var8.test = var17;
                        var8 = var15.bind(var16)(var8);
                        var8 = var9.Math;
                        var8 = var8.log;
                        var _closure2_slot134 = var8;
                        var15 = function(arg0) { // Original name: temperature2rgb$1, environment: var4
                            _fun8077: for (var _fun8077_ip = 0;;) switch (_fun8077_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = 100;
                                    var6 = var1 / var0;
                                    var0 = 66;
                                    if (!(!(var6 < var0))) {
                                        _fun8077_ip = 157;
                                        continue _fun8077
                                    }
                                case 20:
                                    var0 = 55;
                                    var5 = var6 - var0;
                                    var2 = _closure2_slot134;
                                    var1 = undefined;
                                    var3 = var2.bind(var1)(var5);
                                    var2 = 40.25366309332127;
                                    var3 = var2 * var3;
                                    var4 = 351.97690566805693;
                                    var2 = 0.114206453784165;
                                    var2 = var2 * var5;
                                    var2 = var4 + var2;
                                    var3 = var2 - var3;
                                    var2 = 50;
                                    var4 = var6 - var2;
                                    var0 = _closure2_slot134;
                                    var1 = var0.bind(var1)(var4);
                                    var0 = 28.0852963507957;
                                    var1 = var0 * var1;
                                    var2 = 325.4494125711974;
                                    var0 = 0.07943456536662342;
                                    var0 = var0 * var4;
                                    var0 = var2 + var0;
                                    var2 = var0 - var1;
                                    var1 = 255;
                                    _fun8077_ip = 318;
                                    continue _fun8077;
                                case 157:
                                    var5 = 6;
                                    var4 = 0;
                                    if (!(!(var6 < var5))) {
                                        _fun8077_ip = 233;
                                        continue _fun8077
                                    }
                                case 166:
                                    var5 = 2;
                                    var9 = var6 - var5;
                                    var7 = _closure2_slot134;
                                    var5 = undefined;
                                    var7 = var7.bind(var5)(var9);
                                    var5 = 104.49216199393888;
                                    var7 = var5 * var7;
                                    var8 = -155.25485562709179;
                                    var5 = 0.44596950469579133;
                                    var5 = var5 * var9;
                                    var5 = var8 - var5;
                                    var4 = var5 + var7;
                                case 233:
                                    var5 = 20;
                                    var0 = 0;
                                    if (!(!(var6 < var5))) {
                                        _fun8077_ip = 309;
                                        continue _fun8077
                                    }
                                case 242:
                                    var5 = 10;
                                    var7 = var6 - var5;
                                    var6 = _closure2_slot134;
                                    var5 = undefined;
                                    var6 = var6.bind(var5)(var7);
                                    var5 = 115.67994401066147;
                                    var6 = var5 * var6;
                                    var5 = 0.8274096064007395;
                                    var7 = var5 * var7;
                                    var5 = 254.76935184120902;
                                    var5 = var7 - var5;
                                    var0 = var5 + var6;
                                case 309:
                                    var3 = 255;
                                    var1 = var0;
                                    var2 = var4;
                                case 318:
                                    var0 = new Array(4);
                                    var0[0] = var3;
                                    var0[1] = var2;
                                    var0[2] = var1;
                                    var1 = 1;
                                    var0[3] = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot135 = var15;
                        var8 = var5.unpack;
                        var _closure2_slot136 = var8;
                        var8 = var9.Math;
                        var8 = var8.round;
                        var _closure2_slot137 = var8;
                        var _closure2_slot138 = var1;
                        var8 = function() { // Original name: rgb2temperature$1, environment: var4
                            _fun8078: for (var _fun8078_ip = 0;;) switch (_fun8078_ip) {
                                case 0:
                                    var2 = undefined;
                                    var3 = undefined;
                                    var4 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8078_ip = 37;
                                        continue _fun8078
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var4[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8078_ip = 20;
                                        continue _fun8078
                                    }
                                case 37:
                                    var3 = _closure2_slot136;
                                    var1 = 'rgb';
                                    var1 = var3.bind(var2)(var4, var1);
                                    var11 = 0;
                                    var10 = var1[var11];
                                    var9 = 2;
                                    var8 = var1[var9];
                                    var7 = 1000;
                                    var6 = 40000;
                                    var5 = 0.4;
                                    var4 = 0.5;
                                case 99:
                                    var3 = _closure2_slot135;
                                    var1 = var6 + var7;
                                    var1 = var4 * var1;
                                    var3 = var3.bind(var2)(var1);
                                    var12 = var3[var9];
                                    var3 = var3[var11];
                                    var13 = var12 / var3;
                                    var3 = var8 / var10;
                                    var12 = var1;
                                    if (!(var13 >= var3)) {
                                        _fun8078_ip = 145;
                                        continue _fun8078
                                    }
                                case 139:
                                    var12 = var7;
                                    var6 = var1;
                                case 145:
                                    var3 = var6 - var12;
                                    var7 = var12;
                                    if (var3 > var5) {
                                        _fun8078_ip = 99;
                                        continue _fun8078
                                    }
                                case 156:
                                    var0 = _closure2_slot137;
                                    var0 = var0.bind(var2)(var1);
                                    return var0;
                            }
                        };
                        var _closure2_slot139 = var8;
                        var16 = var1.prototype;
                        var17 = var1.prototype;
                        var18 = var1.prototype;
                        var8 = function() { // Environment: var4
                            var2 = _closure2_slot139;
                            var0 = this;
                            var1 = var0._rgb;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var18.temperature = var8;
                        var17.kelvin = var8;
                        var16.temp = var8;
                        var8 = function() { // Environment: var4
                            _fun8080: for (var _fun8080_ip = 0;;) switch (_fun8080_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8080_ip = 35;
                                        continue _fun8080
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8080_ip = 18;
                                        continue _fun8080
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot138;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['temp'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.temperature = var8;
                        var0.kelvin = var8;
                        var0.temp = var8;
                        var8 = var7.format;
                        var16 = var7.format;
                        var17 = var7.format;
                        var17.temperature = var15;
                        var16.kelvin = var15;
                        var8.temp = var15;
                        var8 = var5.unpack;
                        var _closure2_slot140 = var8;
                        var8 = var9.Math;
                        var8 = var8.cbrt;
                        var _closure2_slot141 = var8;
                        var8 = var9.Math;
                        var8 = var8.pow;
                        var _closure2_slot142 = var8;
                        var8 = var9.Math;
                        var8 = var8.sign;
                        var _closure2_slot143 = var8;
                        var15 = function() { // Original name: rgb2oklab$2, environment: var4
                            _fun8081: for (var _fun8081_ip = 0;;) switch (_fun8081_ip) {
                                case 0:
                                    var4 = undefined;
                                    var2 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8081_ip = 37;
                                        continue _fun8081
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var3[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8081_ip = 20;
                                        continue _fun8081
                                    }
                                case 37:
                                    var2 = _closure2_slot140;
                                    var1 = 'rgb';
                                    var6 = var2.bind(var4)(var3, var1);
                                    var5 = 0;
                                    var1 = var6[var5];
                                    var3 = 1;
                                    var9 = var6[var3];
                                    var2 = 2;
                                    var8 = var6[var2];
                                    var7 = _closure2_slot242;
                                    var6 = 255;
                                    var1 = var1 / var6;
                                    var10 = var7.bind(var4)(var1);
                                    var1 = new Array(3);
                                    var1[0] = var10;
                                    var9 = var9 / var6;
                                    var9 = var7.bind(var4)(var9);
                                    var1[1] = var9;
                                    var6 = var8 / var6;
                                    var6 = var7.bind(var4)(var6);
                                    var1[2] = var6;
                                    var6 = var1[var5];
                                    var5 = var1[var3];
                                    var7 = var1[var2];
                                    var2 = _closure2_slot141;
                                    var1 = 0.4122214708;
                                    var8 = var1 * var6;
                                    var1 = 0.5363325363;
                                    var1 = var1 * var5;
                                    var3 = 0.0514459929;
                                    var3 = var3 * var7;
                                    var1 = var8 + var1;
                                    var1 = var1 + var3;
                                    var3 = var2.bind(var4)(var1);
                                    var2 = _closure2_slot141;
                                    var1 = 0.2119034982;
                                    var9 = var1 * var6;
                                    var1 = 0.6806995451;
                                    var1 = var1 * var5;
                                    var8 = 0.1073969566;
                                    var8 = var8 * var7;
                                    var1 = var9 + var1;
                                    var1 = var1 + var8;
                                    var2 = var2.bind(var4)(var1);
                                    var1 = _closure2_slot141;
                                    var0 = 0.0883024619;
                                    var6 = var0 * var6;
                                    var0 = 0.2817188376;
                                    var0 = var0 * var5;
                                    var5 = 0.6299787005;
                                    var5 = var5 * var7;
                                    var0 = var6 + var0;
                                    var0 = var0 + var5;
                                    var4 = var1.bind(var4)(var0);
                                    var0 = 0.2104542553;
                                    var6 = var0 * var3;
                                    var0 = 0.793617785;
                                    var1 = var0 * var2;
                                    var0 = 0.0040720468;
                                    var5 = var0 * var4;
                                    var0 = new Array(3);
                                    var1 = var6 + var1;
                                    var1 = var1 - var5;
                                    var0[0] = var1;
                                    var1 = 1.9779984951;
                                    var6 = var1 * var3;
                                    var1 = 2.428592205;
                                    var1 = var1 * var2;
                                    var5 = 0.4505937099;
                                    var5 = var5 * var4;
                                    var1 = var6 - var1;
                                    var1 = var1 + var5;
                                    var0[1] = var1;
                                    var1 = 0.0259040371;
                                    var3 = var1 * var3;
                                    var1 = 0.7827717662;
                                    var1 = var1 * var2;
                                    var2 = 0.808675766;
                                    var2 = var2 * var4;
                                    var1 = var3 + var1;
                                    var1 = var1 - var2;
                                    var0[2] = var1;
                                    return var0;
                            }
                        };
                        var8 = var5.unpack;
                        var _closure2_slot144 = var8;
                        var8 = var9.Math;
                        var8 = var8.pow;
                        var _closure2_slot145 = var8;
                        var8 = var9.Math;
                        var8 = var8.sign;
                        var _closure2_slot146 = var8;
                        var8 = function() { // Original name: oklab2rgb$1, environment: var4
                            _fun8082: for (var _fun8082_ip = 0;;) switch (_fun8082_ip) {
                                case 0:
                                    var7 = undefined;
                                    var2 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8082_ip = 37;
                                        continue _fun8082
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var3[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8082_ip = 20;
                                        continue _fun8082
                                    }
                                case 37:
                                    var2 = _closure2_slot144;
                                    var1 = 'lab';
                                    var3 = var2.bind(var7)(var3, var1);
                                    var1 = 0;
                                    var6 = var3[var1];
                                    var1 = 1;
                                    var11 = var3[var1];
                                    var2 = 2;
                                    var10 = var3[var2];
                                    var5 = _closure2_slot145;
                                    var2 = 0.3963377774;
                                    var2 = var2 * var11;
                                    var4 = var6 + var2;
                                    var2 = 0.2158037573;
                                    var2 = var2 * var10;
                                    var4 = var4 + var2;
                                    var2 = 3;
                                    var9 = var5.bind(var7)(var4, var2);
                                    var5 = _closure2_slot145;
                                    var4 = 0.1055613458;
                                    var4 = var4 * var11;
                                    var8 = var6 - var4;
                                    var4 = 0.0638541728;
                                    var4 = var4 * var10;
                                    var4 = var8 - var4;
                                    var8 = var5.bind(var7)(var4, var2);
                                    var5 = _closure2_slot145;
                                    var4 = 0.0894841775;
                                    var4 = var4 * var11;
                                    var6 = var6 - var4;
                                    var4 = 1.291485548;
                                    var4 = var4 * var10;
                                    var4 = var6 - var4;
                                    var10 = var5.bind(var7)(var4, var2);
                                    var6 = _closure2_slot243;
                                    var0 = 4.0767416621;
                                    var5 = var0 * var9;
                                    var0 = 3.3077115913;
                                    var0 = var0 * var8;
                                    var4 = 0.2309699292;
                                    var4 = var4 * var10;
                                    var0 = var5 - var0;
                                    var0 = var0 + var4;
                                    var0 = var6.bind(var7)(var0);
                                    var5 = 255;
                                    var4 = var5 * var0;
                                    var0 = new Array(4);
                                    var0[0] = var4;
                                    var4 = -1.2684380046;
                                    var12 = var4 * var9;
                                    var4 = 2.6097574011;
                                    var4 = var4 * var8;
                                    var11 = 0.3413193965;
                                    var11 = var11 * var10;
                                    var4 = var12 + var4;
                                    var4 = var4 - var11;
                                    var4 = var6.bind(var7)(var4);
                                    var4 = var5 * var4;
                                    var0[1] = var4;
                                    var4 = -0.0041960863;
                                    var9 = var4 * var9;
                                    var4 = 0.7034186147;
                                    var4 = var4 * var8;
                                    var8 = 1.707614701;
                                    var8 = var8 * var10;
                                    var4 = var9 - var4;
                                    var4 = var4 + var8;
                                    var4 = var6.bind(var7)(var4);
                                    var4 = var5 * var4;
                                    var0[2] = var4;
                                    var4 = var3.length;
                                    var4 = var4 > var2;
                                    if (!var4) {
                                        _fun8082_ip = 431;
                                        continue _fun8082
                                    }
                                case 427:
                                    var1 = var3[var2];
                                case 431:
                                    var0[3] = var1;
                                    return var0;
                            }
                        };
                        var16 = var5.unpack;
                        var _closure2_slot147 = var16;
                        var16 = var5.type;
                        var _closure2_slot148 = var16;
                        var _closure2_slot149 = var1;
                        var _closure2_slot150 = var15;
                        var17 = var1.prototype;
                        var16 = function() { // Environment: var4
                            var2 = _closure2_slot150;
                            var0 = this;
                            var1 = var0._rgb;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var17.oklab = var16;
                        var16 = function() { // Environment: var4
                            _fun8084: for (var _fun8084_ip = 0;;) switch (_fun8084_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8084_ip = 35;
                                        continue _fun8084
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8084_ip = 18;
                                        continue _fun8084
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot149;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['oklab'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.oklab = var16;
                        var16 = var7.format;
                        var16.oklab = var8;
                        var18 = var7.autodetect;
                        var17 = var18.push;
                        var16 = {};
                        var16.p = var13;
                        var19 = function() { // Original name: test, environment: var4
                            _fun8085: for (var _fun8085_ip = 0;;) switch (_fun8085_ip) {
                                case 0:
                                    var1 = undefined;
                                    var3 = undefined;
                                    var4 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var2 = var0 - 1;
                                    if (!var0) {
                                        _fun8085_ip = 37;
                                        continue _fun8085
                                    }
                                case 20:
                                    var0 = arguments[var2];
                                    var4[var2] = var0;
                                    var0 = parseFloat(var2);
                                    var2 = var0 - 1;
                                    if (var0) {
                                        _fun8085_ip = 20;
                                        continue _fun8085
                                    }
                                case 37:
                                    var2 = _closure2_slot147;
                                    var0 = 'oklab';
                                    var2 = var2.bind(var1)(var4, var0);
                                    var3 = _closure2_slot148;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = 'array';
                                    if (!(var3 === var4)) {
                                        _fun8085_ip = 83;
                                        continue _fun8085
                                    }
                                case 71:
                                    var3 = var2.length;
                                    var2 = 3;
                                    if (!(var2 !== var3)) {
                                        _fun8085_ip = 85;
                                        continue _fun8085
                                    }
                                case 83:
                                    return var1;
                                case 85:
                                    return var0;
                            }
                        };
                        var16.test = var19;
                        var16 = var17.bind(var18)(var16);
                        var16 = var5.unpack;
                        var _closure2_slot151 = var16;
                        var _closure2_slot152 = var15;
                        var _closure2_slot153 = var14;
                        var14 = var5.unpack;
                        var _closure2_slot154 = var14;
                        var _closure2_slot155 = var10;
                        var _closure2_slot156 = var8;
                        var8 = var5.unpack;
                        var _closure2_slot157 = var8;
                        var8 = var5.type;
                        var _closure2_slot158 = var8;
                        var _closure2_slot159 = var1;
                        var8 = function() { // Original name: rgb2oklch$1, environment: var4
                            _fun8086: for (var _fun8086_ip = 0;;) switch (_fun8086_ip) {
                                case 0:
                                    var4 = undefined;
                                    var2 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8086_ip = 37;
                                        continue _fun8086
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var3[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8086_ip = 20;
                                        continue _fun8086
                                    }
                                case 37:
                                    var2 = _closure2_slot151;
                                    var1 = 'rgb';
                                    var1 = var2.bind(var4)(var3, var1);
                                    var3 = 0;
                                    var8 = var1[var3];
                                    var2 = 1;
                                    var7 = var1[var2];
                                    var5 = 2;
                                    var6 = var1[var5];
                                    var1 = _closure2_slot152;
                                    var1 = var1.bind(var4)(var8, var7, var6);
                                    var3 = var1[var3];
                                    var2 = var1[var2];
                                    var1 = var1[var5];
                                    var0 = _closure2_slot153;
                                    var0 = var0.bind(var4)(var3, var2, var1);
                                    return var0;
                            }
                        };
                        var _closure2_slot160 = var8;
                        var10 = var1.prototype;
                        var8 = function() { // Environment: var4
                            var2 = _closure2_slot160;
                            var0 = this;
                            var1 = var0._rgb;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var10.oklch = var8;
                        var8 = function() { // Environment: var4
                            _fun8089: for (var _fun8089_ip = 0;;) switch (_fun8089_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8089_ip = 35;
                                        continue _fun8089
                                    }
                                case 18:
                                    var0 = arguments[var1];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8089_ip = 18;
                                        continue _fun8089
                                    }
                                case 35:
                                    var0 = global;
                                    var0 = var0.Function;
                                    var0 = var0.prototype;
                                    var3 = var0.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot159;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = ['oklch'];
                                    var0 = var4.bind(var5)(var6, var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var0 = new var9[var0](var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.oklch = var8;
                        var10 = var7.format;
                        var8 = function() { // Original name: oklch2rgb, environment: var4
                            _fun8087: for (var _fun8087_ip = 0;;) switch (_fun8087_ip) {
                                case 0:
                                    var8 = undefined;
                                    var2 = undefined;
                                    var3 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var1 = var0 - 1;
                                    if (!var0) {
                                        _fun8087_ip = 37;
                                        continue _fun8087
                                    }
                                case 20:
                                    var0 = arguments[var1];
                                    var3[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0) {
                                        _fun8087_ip = 20;
                                        continue _fun8087
                                    }
                                case 37:
                                    var1 = _closure2_slot154;
                                    var0 = 'lch';
                                    var3 = var1.bind(var8)(var3, var0);
                                    var0 = 0;
                                    var9 = var3[var0];
                                    var1 = 1;
                                    var7 = var3[var1];
                                    var4 = 2;
                                    var6 = var3[var4];
                                    var5 = _closure2_slot155;
                                    var5 = var5.bind(var8)(var9, var7, var6);
                                    var7 = var5[var0];
                                    var6 = var5[var1];
                                    var5 = var5[var4];
                                    var2 = _closure2_slot156;
                                    var2 = var2.bind(var8)(var7, var6, var5);
                                    var5 = var2[var0];
                                    var0 = new Array(4);
                                    var0[0] = var5;
                                    var5 = var2[var1];
                                    var0[1] = var5;
                                    var2 = var2[var4];
                                    var0[2] = var2;
                                    var4 = var3.length;
                                    var2 = 3;
                                    var4 = var4 > var2;
                                    if (!var4) {
                                        _fun8087_ip = 155;
                                        continue _fun8087
                                    }
                                case 151:
                                    var1 = var3[var2];
                                case 155:
                                    var0[3] = var1;
                                    return var0;
                            }
                        };
                        var10.oklch = var8;
                        var10 = var7.autodetect;
                        var8 = var10.push;
                        var7 = {};
                        var7.p = var13;
                        var13 = function() { // Original name: test, environment: var4
                            _fun8090: for (var _fun8090_ip = 0;;) switch (_fun8090_ip) {
                                case 0:
                                    var1 = undefined;
                                    var3 = undefined;
                                    var4 = new Array(0);
                                    var0 = arguments.length;
                                    var0 = parseFloat(var0);
                                    var2 = var0 - 1;
                                    if (!var0) {
                                        _fun8090_ip = 37;
                                        continue _fun8090
                                    }
                                case 20:
                                    var0 = arguments[var2];
                                    var4[var2] = var0;
                                    var0 = parseFloat(var2);
                                    var2 = var0 - 1;
                                    if (var0) {
                                        _fun8090_ip = 20;
                                        continue _fun8090
                                    }
                                case 37:
                                    var2 = _closure2_slot157;
                                    var0 = 'oklch';
                                    var2 = var2.bind(var1)(var4, var0);
                                    var3 = _closure2_slot158;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = 'array';
                                    if (!(var3 === var4)) {
                                        _fun8090_ip = 83;
                                        continue _fun8090
                                    }
                                case 71:
                                    var3 = var2.length;
                                    var2 = 3;
                                    if (!(var2 !== var3)) {
                                        _fun8090_ip = 85;
                                        continue _fun8090
                                    }
                                case 83:
                                    return var1;
                                case 85:
                                    return var0;
                            }
                        };
                        var7.test = var13;
                        var7 = var8.bind(var10)(var7);
                        var _closure2_slot161 = var1;
                        var7 = var5.type;
                        var _closure2_slot162 = var7;
                        var8 = var1.prototype;
                        var7 = function(arg0, arg1) { // Environment: var4
                            _fun8091: for (var _fun8091_ip = 0;;) switch (_fun8091_ip) {
                                case 0:
                                    var5 = arg0;
                                    var3 = arg1;
                                    var2 = this;
                                    var4 = undefined;
                                    if (!(var4 === var3)) {
                                        _fun8091_ip = 17;
                                        continue _fun8091
                                    }
                                case 15:
                                    var3 = false;
                                case 17:
                                    if (!(var4 !== var5)) {
                                        _fun8091_ip = 41;
                                        continue _fun8091
                                    }
                                case 21:
                                    var0 = _closure2_slot162;
                                    var4 = var0.bind(var4)(var5);
                                    var0 = 'number';
                                    if (!(var0 !== var4)) {
                                        _fun8091_ip = 56;
                                        continue _fun8091
                                    }
                                case 41:
                                    var4 = var2._rgb;
                                    var0 = 3;
                                    var0 = var4[var0];
                                    _fun8091_ip = 169;
                                    continue _fun8091;
                                case 56:
                                    if (var3) {
                                        _fun8091_ip = 150;
                                        continue _fun8091
                                    }
                                case 59:
                                    var6 = _closure2_slot161;
                                    var3 = var2._rgb;
                                    var1 = 0;
                                    var1 = var3[var1];
                                    var4 = new Array(4);
                                    var4[0] = var1;
                                    var3 = var2._rgb;
                                    var1 = 1;
                                    var1 = var3[var1];
                                    var4[1] = var1;
                                    var3 = var2._rgb;
                                    var1 = 2;
                                    var1 = var3[var1];
                                    var4[2] = var1;
                                    var4[3] = var5;
                                    var1 = var6.prototype;
                                    var3 = Object.create(var1, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var7 = 'rgb';
                                    var9 = var3;
                                    var8 = var4;
                                    var1 = new var9[var6](var8, var7, var6);
                                    var1 = var1 instanceof Object ? var1 : var3;
                                    _fun8091_ip = 166;
                                    continue _fun8091;
                                case 150:
                                    var4 = var2._rgb;
                                    var3 = 3;
                                    var4[var3] = var5;
                                    var1 = var2;
                                case 166:
                                    var0 = var1;
                                case 169:
                                    return var0;
                            }
                        };
                        var8.alpha = var7;
                        var8 = var1.prototype;
                        var7 = function() { // Environment: var4
                            _fun8092: for (var _fun8092_ip = 0;;) switch (_fun8092_ip) {
                                case 0:
                                    var0 = this;
                                    var0 = var0._rgb;
                                    var0 = var0._clipped;
                                    if (var0) {
                                        _fun8092_ip = 20;
                                        continue _fun8092
                                    }
                                case 18:
                                    var0 = false;
                                case 20:
                                    return var0;
                            }
                        };
                        var8.clipped = var7;
                        var _closure2_slot163 = var1;
                        var _closure2_slot164 = var6;
                        var8 = var1.prototype;
                        var7 = function(arg0) { // Environment: var4
                            _fun8093: for (var _fun8093_ip = 0;;) switch (_fun8093_ip) {
                                case 0:
                                    var6 = arg0;
                                    var1 = this;
                                    var0 = undefined;
                                    if (!(var0 === var6)) {
                                        _fun8093_ip = 15;
                                        continue _fun8093
                                    }
                                case 12:
                                    var6 = 1;
                                case 15:
                                    var0 = var1.lab;
                                    var4 = var0.bind(var1)();
                                    var3 = 0;
                                    var5 = var4[var3];
                                    var2 = _closure2_slot164;
                                    var2 = var2.Kn;
                                    var2 = var2 * var6;
                                    var2 = var5 - var2;
                                    var4[var3] = var2;
                                    var3 = _closure2_slot163;
                                    var0 = var3.prototype;
                                    var2 = Object.create(var0, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var7 = 'lab';
                                    var9 = var2;
                                    var8 = var4;
                                    var0 = new var9[var3](var8, var7, var6);
                                    var3 = var0 instanceof Object ? var0 : var2;
                                    var2 = var3.alpha;
                                    var0 = var1.alpha;
                                    var1 = var0.bind(var1)();
                                    var0 = true;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                            }
                        };
                        var8.darken = var7;
                        var8 = var1.prototype;
                        var7 = function(arg0) { // Environment: var4
                            _fun8094: for (var _fun8094_ip = 0;;) switch (_fun8094_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = this;
                                    var1 = undefined;
                                    if (!(var1 === var0)) {
                                        _fun8094_ip = 15;
                                        continue _fun8094
                                    }
                                case 12:
                                    var0 = 1;
                                case 15:
                                    var1 = var2.darken;
                                    var0 = -var0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var8.brighten = var7;
                        var8 = var1.prototype;
                        var7 = var1.prototype;
                        var7 = var7.darken;
                        var8.darker = var7;
                        var8 = var1.prototype;
                        var7 = var1.prototype;
                        var7 = var7.brighten;
                        var8.brighter = var7;
                        var8 = var1.prototype;
                        var7 = function(arg0) { // Environment: var4
                            _fun8095: for (var _fun8095_ip = 0;;) switch (_fun8095_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = this;
                                    var1 = var3.split;
                                    var0 = '.';
                                    var4 = var1.bind(var3)(var0);
                                    var0 = 0;
                                    var3 = var4[var0];
                                    var1 = 1;
                                    var5 = var4[var1];
                                    var1 = var2[var3];
                                    var1 = var1.bind(var2)();
                                    if (var5) {
                                        _fun8095_ip = 46;
                                        continue _fun8095
                                    }
                                case 44:
                                    return var1;
                                case 46:
                                    var2 = var3.indexOf;
                                    var2 = var2.bind(var3)(var5);
                                    var6 = var3.substr;
                                    var4 = 2;
                                    var7 = var6.bind(var3)(var0, var4);
                                    var6 = 'ok';
                                    var0 = 0;
                                    if (!(var6 === var7)) {
                                        _fun8095_ip = 85;
                                        continue _fun8095
                                    }
                                case 82:
                                    var0 = var4;
                                case 85:
                                    var0 = var2 - var0;
                                    var2 = -1;
                                    if (!(!(var0 > var2))) {
                                        _fun8095_ip = 153;
                                        continue _fun8095
                                    }
                                case 99:
                                    var2 = global;
                                    var4 = var2.Error;
                                    var2 = 'unknown channel ';
                                    var5 = var2 + var5;
                                    var2 = ' in mode ';
                                    var2 = var5 + var2;
                                    var9 = var2 + var3;
                                    var3 = var4.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var10 = var3;
                                    var2 = new var10[var4](var9, var8);
                                    var2 = var2 instanceof Object ? var2 : var3;
                                    throw var2;
                                case 153:
                                    var0 = var1[var0];
                                    return var0;
                            }
                        };
                        var8.get = var7;
                        var _closure2_slot165 = var1;
                        var7 = var5.type;
                        var _closure2_slot166 = var7;
                        var7 = var9.Math;
                        var7 = var7.pow;
                        var _closure2_slot167 = var7;
                        var8 = var1.prototype;
                        var7 = function(arg0) { // Environment: var4
                            _fun8096: for (var _fun8096_ip = 0;;) switch (_fun8096_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = this;
                                    var _closure3_slot0 = var3;
                                    var5 = undefined;
                                    if (!(var5 !== var3)) {
                                        _fun8096_ip = 38;
                                        continue _fun8096
                                    }
                                case 18:
                                    var2 = _closure2_slot166;
                                    var4 = var2.bind(var5)(var3);
                                    var2 = 'number';
                                    if (!(var2 !== var4)) {
                                        _fun8096_ip = 80;
                                        continue _fun8096
                                    }
                                case 38:
                                    var7 = _closure2_slot168;
                                    var4 = var7.apply;
                                    var10 = var0._rgb;
                                    var9 = var10.slice;
                                    var8 = 0;
                                    var2 = 3;
                                    var2 = var9.bind(var10)(var8, var2);
                                    var2 = var4.bind(var7)(var5, var2);
                                    return var2;
                                case 80:
                                    var2 = 0;
                                    if (!(var2 !== var3)) {
                                        _fun8096_ip = 336;
                                        continue _fun8096
                                    }
                                case 89:
                                    var2 = 1;
                                    if (!(var2 !== var3)) {
                                        _fun8096_ip = 276;
                                        continue _fun8096
                                    }
                                case 99:
                                    var2 = var0.luminance;
                                    var2 = var2.bind(var0)();
                                    var4 = 20;
                                    var _closure3_slot1 = var4;
                                    var4 = function(arg0, arg1) { // Original name: test, environment: var6
                                        _fun8097: for (var _fun8097_ip = 0;;) switch (_fun8097_ip) {
                                            case 0:
                                                var5 = arg0;
                                                var6 = arg1;
                                                var2 = var5.interpolate;
                                                var1 = 0.5;
                                                var0 = 'rgb';
                                                var4 = var2.bind(var5)(var6, var1, var0);
                                                var0 = var4.luminance;
                                                var3 = var0.bind(var4)();
                                                var0 = global;
                                                var7 = var0.Math;
                                                var1 = var7.abs;
                                                var0 = _closure3_slot0;
                                                var0 = var0 - var3;
                                                var7 = var1.bind(var7)(var0);
                                                var1 = 1e-07;
                                                var0 = var4;
                                                if (!(!(var7 < var1))) {
                                                    _fun8097_ip = 147;
                                                    continue _fun8097
                                                }
                                            case 90:
                                                var1 = _closure3_slot1;
                                                var1 = parseFloat(var1);
                                                var7 = var1 - 1;
                                                _closure3_slot1 = var7;
                                                var0 = var4;
                                                if (!var1) {
                                                    _fun8097_ip = 147;
                                                    continue _fun8097
                                                }
                                            case 110:
                                                var1 = _closure3_slot0;
                                                if (!(!(var3 > var1))) {
                                                    _fun8097_ip = 132;
                                                    continue _fun8097
                                                }
                                            case 118:
                                                var3 = _closure3_slot2;
                                                var1 = undefined;
                                                var1 = var3.bind(var1)(var4, var6);
                                                _fun8097_ip = 144;
                                                continue _fun8097;
                                            case 132:
                                                var3 = _closure3_slot2;
                                                var2 = undefined;
                                                var1 = var3.bind(var2)(var5, var4);
                                            case 144:
                                                var0 = var1;
                                            case 147:
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot2 = var4;
                                    if (!(!(var2 > var3))) {
                                        _fun8096_ip = 171;
                                        continue _fun8096
                                    }
                                case 129:
                                    var6 = _closure2_slot165;
                                    var2 = var6.prototype;
                                    var3 = Object.create(var2, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var12 = [255, 255, 255];
                                    var13 = var3;
                                    var2 = new var13[var6](var12, var11);
                                    var2 = var2 instanceof Object ? var2 : var3;
                                    var3 = var4.bind(var5)(var0, var2);
                                    _fun8096_ip = 209;
                                    continue _fun8096;
                                case 171:
                                    var7 = _closure2_slot165;
                                    var2 = var7.prototype;
                                    var6 = Object.create(var2, {
                                        constructor: {
                                            value: var7
                                        }
                                    });
                                    var12 = [0, 0, 0];
                                    var13 = var6;
                                    var2 = new var13[var7](var12, var11);
                                    var2 = var2 instanceof Object ? var2 : var6;
                                    var3 = var4.bind(var5)(var2, var0);
                                case 209:
                                    var2 = var3.rgb;
                                    var5 = var2.bind(var3)();
                                    var4 = _closure2_slot165;
                                    var3 = var5.concat;
                                    var6 = var0._rgb;
                                    var2 = 3;
                                    var6 = var6[var2];
                                    var2 = new Array(1);
                                    var2[0] = var6;
                                    var12 = var3.bind(var5)(var2);
                                    var3 = var4.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var13 = var3;
                                    var2 = new var13[var4](var12, var11);
                                    var2 = var2 instanceof Object ? var2 : var3;
                                    return var2;
                                case 276:
                                    var5 = _closure2_slot165;
                                    var3 = var0._rgb;
                                    var2 = 3;
                                    var2 = var3[var2];
                                    var4 = [255, 255, 255];
                                    var4[3] = var2;
                                    var2 = var5.prototype;
                                    var3 = Object.create(var2, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var11 = 'rgb';
                                    var13 = var3;
                                    var12 = var4;
                                    var2 = new var13[var5](var12, var11, var10);
                                    var2 = var2 instanceof Object ? var2 : var3;
                                    return var2;
                                case 336:
                                    var3 = _closure2_slot165;
                                    var1 = var0._rgb;
                                    var0 = 3;
                                    var0 = var1[var0];
                                    var2 = [0, 0, 0];
                                    var2[3] = var0;
                                    var0 = var3.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var11 = 'rgb';
                                    var13 = var1;
                                    var12 = var2;
                                    var0 = new var13[var3](var12, var11, var10);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var8.luminance = var7;
                        var7 = function(arg0, arg1, arg2) { // Original name: rgb2luminance, environment: var4
                            var2 = _closure2_slot169;
                            var4 = undefined;
                            var0 = arg0;
                            var2 = var2.bind(var4)(var0);
                            var0 = 0.2126;
                            var2 = var0 * var2;
                            var3 = _closure2_slot169;
                            var0 = arg1;
                            var3 = var3.bind(var4)(var0);
                            var0 = 0.7152;
                            var0 = var0 * var3;
                            var3 = _closure2_slot169;
                            var1 = arg2;
                            var3 = var3.bind(var4)(var1);
                            var1 = 0.0722;
                            var1 = var1 * var3;
                            var0 = var2 + var0;
                            var0 = var0 + var1;
                            return var0;
                        };
                        var _closure2_slot168 = var7;
                        var7 = function(arg0) { // Original name: luminance_x, environment: var4
                            _fun8099: for (var _fun8099_ip = 0;;) switch (_fun8099_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = 255;
                                    var2 = var1 / var0;
                                    var0 = 0.03928;
                                    if (!(!(var2 <= var0))) {
                                        _fun8099_ip = 79;
                                        continue _fun8099
                                    }
                                case 24:
                                    var4 = _closure2_slot167;
                                    var3 = undefined;
                                    var0 = 0.055;
                                    var1 = var2 + var0;
                                    var0 = 1.055;
                                    var1 = var1 / var0;
                                    var0 = 2.4;
                                    var0 = var4.bind(var3)(var1, var0);
                                    _fun8099_ip = 93;
                                    continue _fun8099;
                                case 79:
                                    var1 = 12.92;
                                    var0 = var2 / var1;
                                case 93:
                                    return var0;
                            }
                        };
                        var _closure2_slot169 = var7;
                        var8 = {};
                        var _closure2_slot170 = var1;
                        var7 = var5.type;
                        var _closure2_slot171 = var7;
                        var _closure2_slot172 = var8;
                        var7 = function(arg0, arg1, arg2) { // Original name: mix$1, environment: var4
                            _fun8100: for (var _fun8100_ip = 0;;) switch (_fun8100_ip) {
                                case 0:
                                    var9 = arg0;
                                    var7 = arg1;
                                    var4 = arg2;
                                    var5 = undefined;
                                    var8 = undefined;
                                    if (!(var5 === var4)) {
                                        _fun8100_ip = 27;
                                        continue _fun8100
                                    }
                                case 17:
                                    var4 = 0.5;
                                case 27:
                                    var6 = new Array(0);
                                    var0 = arguments.length;
                                    var2 = 3;
                                    var0 = var0 - var2;
                                    var1 = var0 - 1;
                                    var3 = 0;
                                    if (!(var0 > var3)) {
                                        _fun8100_ip = 72;
                                        continue _fun8100
                                    }
                                case 50:
                                    var0 = var1 + var2;
                                    var0 = arguments[var0];
                                    var6[var1] = var0;
                                    var0 = parseFloat(var1);
                                    var1 = var0 - 1;
                                    if (var0 > var3) {
                                        _fun8100_ip = 50;
                                        continue _fun8100
                                    }
                                case 72:
                                    var0 = var6[var3];
                                    if (var0) {
                                        _fun8100_ip = 83;
                                        continue _fun8100
                                    }
                                case 79:
                                    var0 = 'lrgb';
                                case 83:
                                    var2 = _closure2_slot172;
                                    var2 = var2[var0];
                                    if (var2) {
                                        _fun8100_ip = 102;
                                        continue _fun8100
                                    }
                                case 97:
                                    var2 = var6.length;
                                case 102:
                                    if (var2) {
                                        _fun8100_ip = 131;
                                        continue _fun8100
                                    }
                                case 105:
                                    var2 = global;
                                    var8 = var2.Object;
                                    var6 = var8.keys;
                                    var2 = _closure2_slot172;
                                    var2 = var6.bind(var8)(var2);
                                    var0 = var2[var3];
                                case 131:
                                    var2 = _closure2_slot172;
                                    var2 = var2[var0];
                                    if (var2) {
                                        _fun8100_ip = 192;
                                        continue _fun8100
                                    }
                                case 142:
                                    var2 = global;
                                    var6 = var2.Error;
                                    var2 = 'interpolation mode ';
                                    var8 = var2 + var0;
                                    var2 = var6.prototype;
                                    var3 = Object.create(var2, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var2 = ' is not defined';
                                    var12 = var8 + var2;
                                    var13 = var3;
                                    var2 = new var13[var6](var12, var11);
                                    var2 = var2 instanceof Object ? var2 : var3;
                                    throw var2;
                                case 192:
                                    var2 = _closure2_slot171;
                                    var2 = var2.bind(var5)(var9);
                                    var3 = 'object';
                                    var6 = var9;
                                    if (!(var3 !== var2)) {
                                        _fun8100_ip = 239;
                                        continue _fun8100
                                    }
                                case 212:
                                    var2 = _closure2_slot170;
                                    var8 = var2.prototype;
                                    var8 = Object.create(var8, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var13 = var8;
                                    var12 = var9;
                                    var2 = new var13[var2](var12, var11);
                                    var6 = var2 instanceof Object ? var2 : var8;
                                case 239:
                                    var2 = _closure2_slot171;
                                    var2 = var2.bind(var5)(var7);
                                    var5 = var7;
                                    if (!(var3 !== var2)) {
                                        _fun8100_ip = 282;
                                        continue _fun8100
                                    }
                                case 255:
                                    var2 = _closure2_slot170;
                                    var3 = var2.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var13 = var3;
                                    var12 = var7;
                                    var2 = new var13[var2](var12, var11);
                                    var5 = var2 instanceof Object ? var2 : var3;
                                case 282:
                                    var1 = _closure2_slot172;
                                    var0 = var1[var0];
                                    var2 = var0.bind(var1)(var6, var5, var4);
                                    var1 = var2.alpha;
                                    var0 = var6.alpha;
                                    var3 = var0.bind(var6)();
                                    var0 = var5.alpha;
                                    var5 = var0.bind(var5)();
                                    var0 = var6.alpha;
                                    var0 = var0.bind(var6)();
                                    var0 = var5 - var0;
                                    var0 = var4 * var0;
                                    var0 = var3 + var0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var _closure2_slot173 = var7;
                        var13 = var1.prototype;
                        var14 = var1.prototype;
                        var10 = function(arg0, arg1) { // Environment: var4
                            _fun8101: for (var _fun8101_ip = 0;;) switch (_fun8101_ip) {
                                case 0:
                                    var0 = arg1;
                                    var3 = undefined;
                                    var7 = undefined;
                                    if (!(var3 === var0)) {
                                        _fun8101_ip = 21;
                                        continue _fun8101
                                    }
                                case 11:
                                    var0 = 0.5;
                                case 21:
                                    var5 = new Array(0);
                                    var1 = arguments.length;
                                    var6 = 2;
                                    var1 = var1 - var6;
                                    var4 = var1 - 1;
                                    var2 = 0;
                                    if (!(var1 > var2)) {
                                        _fun8101_ip = 66;
                                        continue _fun8101
                                    }
                                case 44:
                                    var1 = var4 + var6;
                                    var1 = arguments[var1];
                                    var5[var4] = var1;
                                    var1 = parseFloat(var4);
                                    var4 = var1 - 1;
                                    if (var1 > var2) {
                                        _fun8101_ip = 44;
                                        continue _fun8101
                                    }
                                case 66:
                                    var2 = _closure2_slot173;
                                    var1 = var2.apply;
                                    var4 = new Array(3);
                                    var6 = this;
                                    var4[0] = var6;
                                    var6 = arg0;
                                    var4[1] = var6;
                                    var4[2] = var0;
                                    var0 = var4.concat;
                                    var0 = var0.bind(var4)(var5);
                                    var0 = var1.bind(var2)(var3, var0);
                                    return var0;
                            }
                        };
                        var14.interpolate = var10;
                        var13.mix = var10;
                        var _closure2_slot174 = var1;
                        var13 = var1.prototype;
                        var10 = function(arg0) { // Environment: var4
                            _fun8102: for (var _fun8102_ip = 0;;) switch (_fun8102_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = this;
                                    var2 = undefined;
                                    if (!(var2 === var0)) {
                                        _fun8102_ip = 14;
                                        continue _fun8102
                                    }
                                case 12:
                                    var0 = false;
                                case 14:
                                    var5 = var1._rgb;
                                    var2 = 3;
                                    var3 = var5[var2];
                                    var2 = 0;
                                    if (var0) {
                                        _fun8102_ip = 118;
                                        continue _fun8102
                                    }
                                case 32:
                                    var7 = _closure2_slot174;
                                    var0 = var5[var2];
                                    var0 = var0 * var3;
                                    var6 = new Array(4);
                                    var6[0] = var0;
                                    var0 = 1;
                                    var0 = var5[var0];
                                    var0 = var0 * var3;
                                    var6[1] = var0;
                                    var0 = 2;
                                    var0 = var5[var0];
                                    var0 = var0 * var3;
                                    var6[2] = var0;
                                    var6[3] = var3;
                                    var0 = var7.prototype;
                                    var4 = Object.create(var0, {
                                        constructor: {
                                            value: var7
                                        }
                                    });
                                    var8 = 'rgb';
                                    var10 = var4;
                                    var9 = var6;
                                    var0 = new var10[var7](var9, var8, var7);
                                    var0 = var0 instanceof Object ? var0 : var4;
                                    _fun8102_ip = 177;
                                    continue _fun8102;
                                case 118:
                                    var2 = var5[var2];
                                    var4 = var2 * var3;
                                    var2 = new Array(4);
                                    var2[0] = var4;
                                    var4 = 1;
                                    var4 = var5[var4];
                                    var4 = var4 * var3;
                                    var2[1] = var4;
                                    var4 = 2;
                                    var4 = var5[var4];
                                    var4 = var4 * var3;
                                    var2[2] = var4;
                                    var2[3] = var3;
                                    var1._rgb = var2;
                                    var0 = var1;
                                case 177:
                                    return var0;
                            }
                        };
                        var13.premultiply = var10;
                        var _closure2_slot175 = var1;
                        var _closure2_slot176 = var6;
                        var10 = var1.prototype;
                        var6 = function(arg0) { // Environment: var4
                            _fun8103: for (var _fun8103_ip = 0;;) switch (_fun8103_ip) {
                                case 0:
                                    var6 = arg0;
                                    var1 = this;
                                    var0 = undefined;
                                    if (!(var0 === var6)) {
                                        _fun8103_ip = 15;
                                        continue _fun8103
                                    }
                                case 12:
                                    var6 = 1;
                                case 15:
                                    var0 = var1.lch;
                                    var4 = var0.bind(var1)();
                                    var3 = 1;
                                    var5 = var4[var3];
                                    var2 = _closure2_slot176;
                                    var2 = var2.Kn;
                                    var2 = var2 * var6;
                                    var2 = var5 + var2;
                                    var4[var3] = var2;
                                    var5 = var4[var3];
                                    var2 = 0;
                                    if (!(var5 < var2)) {
                                        _fun8103_ip = 71;
                                        continue _fun8103
                                    }
                                case 67:
                                    var4[var3] = var2;
                                case 71:
                                    var3 = _closure2_slot175;
                                    var0 = var3.prototype;
                                    var2 = Object.create(var0, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var7 = 'lch';
                                    var9 = var2;
                                    var8 = var4;
                                    var0 = new var9[var3](var8, var7, var6);
                                    var3 = var0 instanceof Object ? var0 : var2;
                                    var2 = var3.alpha;
                                    var0 = var1.alpha;
                                    var1 = var0.bind(var1)();
                                    var0 = true;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                            }
                        };
                        var10.saturate = var6;
                        var10 = var1.prototype;
                        var6 = function(arg0) { // Environment: var4
                            _fun8104: for (var _fun8104_ip = 0;;) switch (_fun8104_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = this;
                                    var1 = undefined;
                                    if (!(var1 === var0)) {
                                        _fun8104_ip = 15;
                                        continue _fun8104
                                    }
                                case 12:
                                    var0 = 1;
                                case 15:
                                    var1 = var2.saturate;
                                    var0 = -var0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var10.desaturate = var6;
                        var _closure2_slot177 = var1;
                        var6 = var5.type;
                        var _closure2_slot178 = var6;
                        var10 = var1.prototype;
                        var6 = function(arg0, arg1, arg2) { // Environment: var4
                            _fun8105: for (var _fun8105_ip = 0;;) switch (_fun8105_ip) {
                                case 0:
                                    var5 = arg0;
                                    var2 = arg1;
                                    var3 = arg2;
                                    var1 = this;
                                    var10 = undefined;
                                    if (!(var10 === var3)) {
                                        _fun8105_ip = 20;
                                        continue _fun8105
                                    }
                                case 18:
                                    var3 = false;
                                case 20:
                                    var4 = var5.split;
                                    var0 = '.';
                                    var0 = var4.bind(var5)(var0);
                                    var8 = 0;
                                    var5 = var0[var8];
                                    var9 = 1;
                                    var7 = var0[var9];
                                    var0 = var1[var5];
                                    var4 = var0.bind(var1)();
                                    if (var7) {
                                        _fun8105_ip = 60;
                                        continue _fun8105
                                    }
                                case 58:
                                    return var4;
                                case 60:
                                    var0 = var5.indexOf;
                                    var6 = var0.bind(var5)(var7);
                                    var0 = var5.substr;
                                    var11 = 2;
                                    var13 = var0.bind(var5)(var8, var11);
                                    var12 = 'ok';
                                    var0 = 0;
                                    if (!(var12 === var13)) {
                                        _fun8105_ip = 99;
                                        continue _fun8105
                                    }
                                case 96:
                                    var0 = var11;
                                case 99:
                                    var6 = var6 - var0;
                                    var0 = -1;
                                    if (!(!(var6 > var0))) {
                                        _fun8105_ip = 167;
                                        continue _fun8105
                                    }
                                case 113:
                                    var0 = global;
                                    var11 = var0.Error;
                                    var0 = 'unknown channel ';
                                    var7 = var0 + var7;
                                    var0 = ' in mode ';
                                    var0 = var7 + var0;
                                    var15 = var0 + var5;
                                    var7 = var11.prototype;
                                    var7 = Object.create(var7, {
                                        constructor: {
                                            value: var11
                                        }
                                    });
                                    var16 = var7;
                                    var0 = new var16[var11](var15, var14);
                                    var0 = var0 instanceof Object ? var0 : var7;
                                    throw var0;
                                case 167:
                                    var7 = _closure2_slot178;
                                    var11 = var7.bind(var10)(var2);
                                    var7 = 'string';
                                    if (!(var7 != var11)) {
                                        _fun8105_ip = 249;
                                        continue _fun8105
                                    }
                                case 187:
                                    var7 = _closure2_slot178;
                                    var10 = var7.bind(var10)(var2);
                                    var7 = 'number';
                                    if (!(var7 === var10)) {
                                        _fun8105_ip = 213;
                                        continue _fun8105
                                    }
                                case 204:
                                    var4[var6] = var2;
                                    _fun8105_ip = 372;
                                    continue _fun8105;
                                case 213:
                                    var7 = global;
                                    var11 = var7.Error;
                                    var7 = var11.prototype;
                                    var10 = Object.create(var7, {
                                        constructor: {
                                            value: var11
                                        }
                                    });
                                    var15 = 'unsupported value for Color.set';
                                    var16 = var10;
                                    var7 = new var16[var11](var15, var14);
                                    var7 = var7 instanceof Object ? var7 : var10;
                                    throw var7;
                                case 249:
                                    var7 = var2.charAt;
                                    var8 = var7.bind(var2)(var8);
                                    var7 = '+';
                                    if (!(var7 !== var8)) {
                                        _fun8105_ip = 357;
                                        continue _fun8105
                                    }
                                case 268:
                                    var7 = '-';
                                    if (!(var7 !== var8)) {
                                        _fun8105_ip = 357;
                                        continue _fun8105
                                    }
                                case 276:
                                    var7 = '*';
                                    if (!(var7 !== var8)) {
                                        _fun8105_ip = 329;
                                        continue _fun8105
                                    }
                                case 284:
                                    var7 = '/';
                                    if (!(var7 !== var8)) {
                                        _fun8105_ip = 301;
                                        continue _fun8105
                                    }
                                case 292:
                                    var7 = var2 - 0;
                                    var4[var6] = var7;
                                    _fun8105_ip = 372;
                                    continue _fun8105;
                                case 301:
                                    var8 = var4[var6];
                                    var7 = var2.substr;
                                    var7 = var7.bind(var2)(var9);
                                    var7 = var7 - 0;
                                    var7 = var8 / var7;
                                    var4[var6] = var7;
                                    _fun8105_ip = 372;
                                    continue _fun8105;
                                case 329:
                                    var8 = var4[var6];
                                    var7 = var2.substr;
                                    var7 = var7.bind(var2)(var9);
                                    var7 = var7 - 0;
                                    var7 = var8 * var7;
                                    var4[var6] = var7;
                                    _fun8105_ip = 372;
                                    continue _fun8105;
                                case 357:
                                    var7 = var4[var6];
                                    var2 = var2 - 0;
                                    var2 = var7 + var2;
                                    var4[var6] = var2;
                                case 372:
                                    var0 = _closure2_slot177;
                                    var2 = var0.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var16 = var2;
                                    var15 = var4;
                                    var14 = var5;
                                    var0 = new var16[var0](var15, var14, var13);
                                    var2 = var0 instanceof Object ? var0 : var2;
                                    var0 = var2;
                                    if (!var3) {
                                        _fun8105_ip = 423;
                                        continue _fun8105
                                    }
                                case 408:
                                    var2 = var2._rgb;
                                    var1._rgb = var2;
                                    var0 = var1;
                                case 423:
                                    return var0;
                            }
                        };
                        var10.set = var6;
                        var _closure2_slot179 = var1;
                        var6 = function(arg0, arg1, arg2) { // Original name: rgb, environment: var4
                            var2 = arg2;
                            var0 = arg0;
                            var7 = var0._rgb;
                            var0 = arg1;
                            var6 = var0._rgb;
                            var5 = _closure2_slot179;
                            var0 = 0;
                            var1 = var7[var0];
                            var3 = var6[var0];
                            var0 = var7[var0];
                            var0 = var3 - var0;
                            var0 = var2 * var0;
                            var11 = var1 + var0;
                            var0 = 1;
                            var1 = var7[var0];
                            var3 = var6[var0];
                            var0 = var7[var0];
                            var0 = var3 - var0;
                            var0 = var2 * var0;
                            var10 = var1 + var0;
                            var0 = 2;
                            var1 = var7[var0];
                            var6 = var6[var0];
                            var0 = var7[var0];
                            var0 = var6 - var0;
                            var0 = var2 * var0;
                            var9 = var1 + var0;
                            var0 = var5.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var8 = 'rgb';
                            var12 = var1;
                            var0 = new var12[var5](var11, var10, var9, var8, var7);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var8.rgb = var6;
                        var _closure2_slot180 = var1;
                        var6 = var9.Math;
                        var6 = var6.sqrt;
                        var _closure2_slot181 = var6;
                        var6 = var9.Math;
                        var6 = var6.pow;
                        var _closure2_slot182 = var6;
                        var6 = function(arg0, arg1, arg2) { // Original name: lrgb, environment: var4
                            var7 = arg2;
                            var0 = arg0;
                            var0 = var0._rgb;
                            var1 = 0;
                            var4 = var0[var1];
                            var6 = 1;
                            var10 = var0[var6];
                            var9 = 2;
                            var11 = var0[var9];
                            var0 = arg1;
                            var0 = var0._rgb;
                            var13 = var0[var1];
                            var12 = var0[var6];
                            var8 = var0[var9];
                            var5 = _closure2_slot180;
                            var3 = _closure2_slot181;
                            var1 = _closure2_slot182;
                            var2 = undefined;
                            var4 = var1.bind(var2)(var4, var9);
                            var1 = var6 - var7;
                            var4 = var4 * var1;
                            var1 = _closure2_slot182;
                            var1 = var1.bind(var2)(var13, var9);
                            var1 = var1 * var7;
                            var1 = var4 + var1;
                            var4 = var3.bind(var2)(var1);
                            var3 = _closure2_slot181;
                            var1 = _closure2_slot182;
                            var10 = var1.bind(var2)(var10, var9);
                            var1 = var6 - var7;
                            var10 = var10 * var1;
                            var1 = _closure2_slot182;
                            var1 = var1.bind(var2)(var12, var9);
                            var1 = var1 * var7;
                            var1 = var10 + var1;
                            var3 = var3.bind(var2)(var1);
                            var1 = _closure2_slot181;
                            var10 = _closure2_slot182;
                            var10 = var10.bind(var2)(var11, var9);
                            var6 = var6 - var7;
                            var6 = var10 * var6;
                            var0 = _closure2_slot182;
                            var0 = var0.bind(var2)(var8, var9);
                            var0 = var0 * var7;
                            var0 = var6 + var0;
                            var15 = var1.bind(var2)(var0);
                            var0 = var5.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var14 = 'rgb';
                            var18 = var1;
                            var17 = var4;
                            var16 = var3;
                            var0 = new var18[var5](var17, var16, var15, var14, var13);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var8.lrgb = var6;
                        var _closure2_slot183 = var1;
                        var6 = function(arg0, arg1, arg2) { // Original name: lab, environment: var4
                            var3 = arg0;
                            var1 = arg1;
                            var2 = arg2;
                            var0 = var3.lab;
                            var7 = var0.bind(var3)();
                            var0 = var1.lab;
                            var6 = var0.bind(var1)();
                            var5 = _closure2_slot183;
                            var0 = 0;
                            var1 = var7[var0];
                            var3 = var6[var0];
                            var0 = var7[var0];
                            var0 = var3 - var0;
                            var0 = var2 * var0;
                            var11 = var1 + var0;
                            var0 = 1;
                            var1 = var7[var0];
                            var3 = var6[var0];
                            var0 = var7[var0];
                            var0 = var3 - var0;
                            var0 = var2 * var0;
                            var10 = var1 + var0;
                            var0 = 2;
                            var1 = var7[var0];
                            var6 = var6[var0];
                            var0 = var7[var0];
                            var0 = var6 - var0;
                            var0 = var2 * var0;
                            var9 = var1 + var0;
                            var0 = var5.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var8 = 'lab';
                            var12 = var1;
                            var0 = new var12[var5](var11, var10, var9, var8, var7);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var8.lab = var6;
                        var _closure2_slot184 = var1;
                        var6 = function(arg0, arg1, arg2, arg3) { // Original name: _hsx, environment: var4
                            _fun8109: for (var _fun8109_ip = 0;;) switch (_fun8109_ip) {
                                case 0:
                                    var3 = arg0;
                                    var5 = arg1;
                                    var2 = arg2;
                                    var4 = arg3;
                                    var0 = 'hsl';
                                    if (!(var0 !== var4)) {
                                        _fun8109_ip = 236;
                                        continue _fun8109
                                    }
                                case 23:
                                    var0 = 'hsv';
                                    if (!(var0 !== var4)) {
                                        _fun8109_ip = 211;
                                        continue _fun8109
                                    }
                                case 34:
                                    var0 = 'hcg';
                                    if (!(var0 !== var4)) {
                                        _fun8109_ip = 186;
                                        continue _fun8109
                                    }
                                case 45:
                                    var0 = 'hsi';
                                    if (!(var0 !== var4)) {
                                        _fun8109_ip = 161;
                                        continue _fun8109
                                    }
                                case 53:
                                    var0 = 'lch';
                                    if (!(var0 !== var4)) {
                                        _fun8109_ip = 135;
                                        continue _fun8109
                                    }
                                case 61:
                                    var0 = 'hcl';
                                    if (!(var0 !== var4)) {
                                        _fun8109_ip = 135;
                                        continue _fun8109
                                    }
                                case 69:
                                    var9 = undefined;
                                    var1 = 'oklch';
                                    var0 = var4;
                                    var17 = undefined;
                                    if (!(var1 === var4)) {
                                        _fun8109_ip = 259;
                                        continue _fun8109
                                    }
                                case 87:
                                    var1 = var3.oklch;
                                    var6 = var1.bind(var3)();
                                    var1 = var6.reverse;
                                    var9 = var1.bind(var6)();
                                    var1 = var5.oklch;
                                    var7 = var1.bind(var5)();
                                    var1 = var7.reverse;
                                    var17 = var1.bind(var7)();
                                    var0 = var4;
                                    _fun8109_ip = 259;
                                    continue _fun8109;
                                case 135:
                                    var1 = var3.hcl;
                                    var9 = var1.bind(var3)();
                                    var1 = var5.hcl;
                                    var17 = var1.bind(var5)();
                                    var0 = 'hcl';
                                    _fun8109_ip = 259;
                                    continue _fun8109;
                                case 161:
                                    var1 = var3.hsi;
                                    var9 = var1.bind(var3)();
                                    var1 = var5.hsi;
                                    var17 = var1.bind(var5)();
                                    var0 = var4;
                                    _fun8109_ip = 259;
                                    continue _fun8109;
                                case 186:
                                    var1 = var3.hcg;
                                    var9 = var1.bind(var3)();
                                    var1 = var5.hcg;
                                    var17 = var1.bind(var5)();
                                    var0 = var4;
                                    _fun8109_ip = 259;
                                    continue _fun8109;
                                case 211:
                                    var1 = var3.hsv;
                                    var9 = var1.bind(var3)();
                                    var1 = var5.hsv;
                                    var17 = var1.bind(var5)();
                                    var0 = var4;
                                    _fun8109_ip = 259;
                                    continue _fun8109;
                                case 236:
                                    var1 = var3.hsl;
                                    var9 = var1.bind(var3)();
                                    var1 = var5.hsl;
                                    var17 = var1.bind(var5)();
                                    var0 = var4;
                                case 259:
                                    var1 = var0.substr;
                                    var12 = 0;
                                    var11 = 1;
                                    var3 = var1.bind(var0)(var12, var11);
                                    var1 = 'h';
                                    var4 = var1 !== var3;
                                    var3 = var0;
                                    if (!var4) {
                                        _fun8109_ip = 298;
                                        continue _fun8109
                                    }
                                case 290:
                                    var0 = 'oklch';
                                    var4 = var0 !== var3;
                                case 298:
                                    var8 = undefined;
                                    var5 = undefined;
                                    var10 = undefined;
                                    var7 = undefined;
                                    var6 = undefined;
                                    var1 = undefined;
                                    var0 = undefined;
                                    if (var4) {
                                        _fun8109_ip = 342;
                                        continue _fun8109
                                    }
                                case 315:
                                    var5 = var9[var12];
                                    var7 = var9[var11];
                                    var4 = 2;
                                    var1 = var9[var4];
                                    var10 = var17[var12];
                                    var6 = var17[var11];
                                    var0 = var17[var4];
                                case 342:
                                    var9 = global;
                                    var4 = var9.isNaN;
                                    var4 = var4.bind(var8)(var5);
                                    var13 = var5;
                                    if (var4) {
                                        _fun8109_ip = 453;
                                        continue _fun8109
                                    }
                                case 361:
                                    var4 = var9.isNaN;
                                    var4 = var4.bind(var8)(var10);
                                    if (var4) {
                                        _fun8109_ip = 453;
                                        continue _fun8109
                                    }
                                case 375:
                                    if (!(var10 > var13)) {
                                        _fun8109_ip = 390;
                                        continue _fun8109
                                    }
                                case 379:
                                    var5 = var10 - var13;
                                    var4 = 180;
                                    if (!(!(var5 > var4))) {
                                        _fun8109_ip = 427;
                                        continue _fun8109
                                    }
                                case 390:
                                    if (!(var10 < var13)) {
                                        _fun8109_ip = 405;
                                        continue _fun8109
                                    }
                                case 394:
                                    var5 = var13 - var10;
                                    var4 = 180;
                                    if (!(!(var5 > var4))) {
                                        _fun8109_ip = 411;
                                        continue _fun8109
                                    }
                                case 405:
                                    var4 = var10 - var13;
                                    _fun8109_ip = 425;
                                    continue _fun8109;
                                case 411:
                                    var5 = 360;
                                    var5 = var10 + var5;
                                    var4 = var5 - var13;
                                case 425:
                                    _fun8109_ip = 441;
                                    continue _fun8109;
                                case 427:
                                    var5 = 360;
                                    var5 = var13 + var5;
                                    var4 = var10 - var5;
                                case 441:
                                    var4 = var2 * var4;
                                    var4 = var13 + var4;
                                    var5 = undefined;
                                    _fun8109_ip = 571;
                                    continue _fun8109;
                                case 453:
                                    var14 = var9.isNaN;
                                    var14 = var14.bind(var8)(var13);
                                    if (var14) {
                                        _fun8109_ip = 505;
                                        continue _fun8109
                                    }
                                case 467:
                                    var14 = var11 != var0;
                                    if (!var14) {
                                        _fun8109_ip = 478;
                                        continue _fun8109
                                    }
                                case 474:
                                    var14 = var12 != var0;
                                case 478:
                                    if (var14) {
                                        _fun8109_ip = 489;
                                        continue _fun8109
                                    }
                                case 481:
                                    var15 = 'hsv';
                                    var14 = var15 == var3;
                                case 489:
                                    var5 = undefined;
                                    var4 = var13;
                                    if (var14) {
                                        _fun8109_ip = 571;
                                        continue _fun8109
                                    }
                                case 497:
                                    var5 = var7;
                                    var4 = var13;
                                    _fun8109_ip = 571;
                                    continue _fun8109;
                                case 505:
                                    var13 = var9.isNaN;
                                    var13 = var13.bind(var8)(var10);
                                    if (var13) {
                                        _fun8109_ip = 557;
                                        continue _fun8109
                                    }
                                case 519:
                                    var11 = var11 != var1;
                                    if (!var11) {
                                        _fun8109_ip = 530;
                                        continue _fun8109
                                    }
                                case 526:
                                    var11 = var12 != var1;
                                case 530:
                                    if (var11) {
                                        _fun8109_ip = 541;
                                        continue _fun8109
                                    }
                                case 533:
                                    var12 = 'hsv';
                                    var11 = var12 == var3;
                                case 541:
                                    var5 = undefined;
                                    var4 = var10;
                                    if (var11) {
                                        _fun8109_ip = 571;
                                        continue _fun8109
                                    }
                                case 549:
                                    var5 = var6;
                                    var4 = var10;
                                    _fun8109_ip = 571;
                                    continue _fun8109;
                                case 557:
                                    var9 = var9.Number;
                                    var4 = var9.NaN;
                                    var5 = undefined;
                                case 571:
                                    if (!(var8 === var5)) {
                                        _fun8109_ip = 587;
                                        continue _fun8109
                                    }
                                case 575:
                                    var6 = var6 - var7;
                                    var6 = var2 * var6;
                                    var5 = var7 + var6;
                                case 587:
                                    var0 = var0 - var1;
                                    var0 = var2 * var0;
                                    var6 = var1 + var0;
                                    var2 = _closure2_slot184;
                                    var0 = 'oklch';
                                    if (!(var0 !== var3)) {
                                        _fun8109_ip = 632;
                                        continue _fun8109
                                    }
                                case 614:
                                    var0 = new Array(3);
                                    var0[0] = var4;
                                    var0[1] = var5;
                                    var0[2] = var6;
                                    _fun8109_ip = 651;
                                    continue _fun8109;
                                case 632:
                                    var1 = new Array(3);
                                    var1[0] = var6;
                                    var1[1] = var5;
                                    var1[2] = var4;
                                    var0 = var1;
                                case 651:
                                    var1 = var2.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var20 = var1;
                                    var19 = var0;
                                    var18 = var3;
                                    var0 = new var20[var2](var19, var18, var17);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot185 = var6;
                        var10 = function(arg0, arg1, arg2) { // Original name: lch, environment: var4
                            var5 = _closure2_slot185;
                            var10 = undefined;
                            var9 = arg0;
                            var8 = arg1;
                            var7 = arg2;
                            var6 = 'lch';
                            var0 = var10[var5](var9, var8, var7, var6, var5);
                            return var0;
                        };
                        var8.lch = var10;
                        var8.hcl = var10;
                        var _closure2_slot186 = var1;
                        var10 = function(arg0, arg1, arg2) { // Original name: num, environment: var4
                            var1 = arg0;
                            var2 = arg1;
                            var0 = var1.num;
                            var1 = var0.bind(var1)();
                            var0 = var2.num;
                            var0 = var0.bind(var2)();
                            var3 = _closure2_slot186;
                            var2 = var0 - var1;
                            var0 = arg2;
                            var0 = var0 * var2;
                            var5 = var1 + var0;
                            var0 = var3.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var4 = 'num';
                            var6 = var1;
                            var0 = new var6[var3](var5, var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var8.num = var10;
                        var _closure2_slot187 = var6;
                        var10 = function(arg0, arg1, arg2) { // Original name: hcg, environment: var4
                            var5 = _closure2_slot187;
                            var10 = undefined;
                            var9 = arg0;
                            var8 = arg1;
                            var7 = arg2;
                            var6 = 'hcg';
                            var0 = var10[var5](var9, var8, var7, var6, var5);
                            return var0;
                        };
                        var8.hcg = var10;
                        var _closure2_slot188 = var6;
                        var10 = function(arg0, arg1, arg2) { // Original name: hsi, environment: var4
                            var5 = _closure2_slot188;
                            var10 = undefined;
                            var9 = arg0;
                            var8 = arg1;
                            var7 = arg2;
                            var6 = 'hsi';
                            var0 = var10[var5](var9, var8, var7, var6, var5);
                            return var0;
                        };
                        var8.hsi = var10;
                        var _closure2_slot189 = var6;
                        var10 = function(arg0, arg1, arg2) { // Original name: hsl, environment: var4
                            var5 = _closure2_slot189;
                            var10 = undefined;
                            var9 = arg0;
                            var8 = arg1;
                            var7 = arg2;
                            var6 = 'hsl';
                            var0 = var10[var5](var9, var8, var7, var6, var5);
                            return var0;
                        };
                        var8.hsl = var10;
                        var _closure2_slot190 = var6;
                        var10 = function(arg0, arg1, arg2) { // Original name: hsv, environment: var4
                            var5 = _closure2_slot190;
                            var10 = undefined;
                            var9 = arg0;
                            var8 = arg1;
                            var7 = arg2;
                            var6 = 'hsv';
                            var0 = var10[var5](var9, var8, var7, var6, var5);
                            return var0;
                        };
                        var8.hsv = var10;
                        var _closure2_slot191 = var1;
                        var10 = function(arg0, arg1, arg2) { // Original name: oklab, environment: var4
                            var3 = arg0;
                            var1 = arg1;
                            var2 = arg2;
                            var0 = var3.oklab;
                            var7 = var0.bind(var3)();
                            var0 = var1.oklab;
                            var6 = var0.bind(var1)();
                            var5 = _closure2_slot191;
                            var0 = 0;
                            var1 = var7[var0];
                            var3 = var6[var0];
                            var0 = var7[var0];
                            var0 = var3 - var0;
                            var0 = var2 * var0;
                            var11 = var1 + var0;
                            var0 = 1;
                            var1 = var7[var0];
                            var3 = var6[var0];
                            var0 = var7[var0];
                            var0 = var3 - var0;
                            var0 = var2 * var0;
                            var10 = var1 + var0;
                            var0 = 2;
                            var1 = var7[var0];
                            var6 = var6[var0];
                            var0 = var7[var0];
                            var0 = var6 - var0;
                            var0 = var2 * var0;
                            var9 = var1 + var0;
                            var0 = var5.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var8 = 'oklab';
                            var12 = var1;
                            var0 = new var12[var5](var11, var10, var9, var8, var7);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var8.oklab = var10;
                        var _closure2_slot192 = var6;
                        var6 = function(arg0, arg1, arg2) { // Original name: oklch, environment: var4
                            var5 = _closure2_slot192;
                            var10 = undefined;
                            var9 = arg0;
                            var8 = arg1;
                            var7 = arg2;
                            var6 = 'oklch';
                            var0 = var10[var5](var9, var8, var7, var6, var5);
                            return var0;
                        };
                        var8.oklch = var6;
                        var _closure2_slot193 = var1;
                        var6 = var5.clip_rgb;
                        var _closure2_slot194 = var6;
                        var6 = var9.Math;
                        var6 = var6.pow;
                        var _closure2_slot195 = var6;
                        var6 = var9.Math;
                        var6 = var6.sqrt;
                        var _closure2_slot196 = var6;
                        var6 = var9.Math;
                        var6 = var6.PI;
                        var _closure2_slot197 = var6;
                        var6 = var9.Math;
                        var6 = var6.cos;
                        var _closure2_slot198 = var6;
                        var6 = var9.Math;
                        var6 = var6.sin;
                        var _closure2_slot199 = var6;
                        var6 = var9.Math;
                        var6 = var6.atan2;
                        var _closure2_slot200 = var6;
                        var6 = function(arg0, arg1) { // Original name: _average_lrgb, environment: var4
                            _fun8118: for (var _fun8118_ip = 0;;) switch (_fun8118_ip) {
                                case 0:
                                    var11 = arg0;
                                    var10 = arg1;
                                    var9 = var11.length;
                                    var3 = [0, 0, 0, 0];
                                    var0 = var11.length;
                                    var7 = 0;
                                    var5 = var7 < var0;
                                    var1 = undefined;
                                    var6 = 2;
                                    var4 = 1;
                                    var2 = 3;
                                    var8 = 0;
                                    if (!var5) {
                                        _fun8118_ip = 197;
                                        continue _fun8118
                                    }
                                case 54:
                                    var5 = var11[var8];
                                    var12 = var10[var8];
                                    var13 = var12 / var9;
                                    var5 = var5._rgb;
                                    var14 = var3[var7];
                                    var15 = _closure2_slot195;
                                    var12 = var5[var7];
                                    var12 = var15.bind(var1)(var12, var6);
                                    var12 = var12 * var13;
                                    var12 = var14 + var12;
                                    var3[var7] = var12;
                                    var14 = var3[var4];
                                    var15 = _closure2_slot195;
                                    var12 = var5[var4];
                                    var12 = var15.bind(var1)(var12, var6);
                                    var12 = var12 * var13;
                                    var12 = var14 + var12;
                                    var3[var4] = var12;
                                    var14 = var3[var6];
                                    var15 = _closure2_slot195;
                                    var12 = var5[var6];
                                    var12 = var15.bind(var1)(var12, var6);
                                    var12 = var12 * var13;
                                    var12 = var14 + var12;
                                    var3[var6] = var12;
                                    var12 = var3[var2];
                                    var5 = var5[var2];
                                    var5 = var5 * var13;
                                    var5 = var12 + var5;
                                    var3[var2] = var5;
                                    var8 = var8 + 1;
                                    var5 = var11.length;
                                    if (var8 < var5) {
                                        _fun8118_ip = 54;
                                        continue _fun8118
                                    }
                                case 197:
                                    var8 = _closure2_slot196;
                                    var5 = var3[var7];
                                    var5 = var8.bind(var1)(var5);
                                    var3[var7] = var5;
                                    var7 = _closure2_slot196;
                                    var5 = var3[var4];
                                    var5 = var7.bind(var1)(var5);
                                    var3[var4] = var5;
                                    var7 = _closure2_slot196;
                                    var5 = var3[var6];
                                    var5 = var7.bind(var1)(var5);
                                    var3[var6] = var5;
                                    var6 = var3[var2];
                                    var5 = 0.9999999;
                                    if (!(var6 > var5)) {
                                        _fun8118_ip = 270;
                                        continue _fun8118
                                    }
                                case 266:
                                    var3[var2] = var4;
                                case 270:
                                    var2 = _closure2_slot193;
                                    var0 = _closure2_slot194;
                                    var17 = var0.bind(var1)(var3);
                                    var1 = var2.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var18 = var1;
                                    var0 = new var18[var2](var17, var16);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot201 = var6;
                        var _closure2_slot202 = var0;
                        var6 = var5.type;
                        var _closure2_slot203 = var6;
                        var6 = var9.Math;
                        var6 = var6.pow;
                        var _closure2_slot204 = var6;
                        var6 = function(arg0) { // Original name: scale$2, environment: var4
                            var0 = 'rgb';
                            var _closure3_slot0 = var0;
                            var2 = _closure2_slot202;
                            var3 = undefined;
                            var0 = '#ccc';
                            var0 = var2.bind(var3)(var0);
                            var _closure3_slot1 = var0;
                            var0 = 0;
                            var _closure3_slot2 = var0;
                            var2 = [0, 1];
                            var _closure3_slot3 = var2;
                            var2 = new Array(0);
                            var _closure3_slot4 = var2;
                            var2 = [0, 0];
                            var _closure3_slot5 = var2;
                            var2 = false;
                            var _closure3_slot6 = var2;
                            var4 = new Array(0);
                            var _closure3_slot7 = var4;
                            var _closure3_slot8 = var2;
                            var _closure3_slot9 = var0;
                            var0 = 1;
                            var _closure3_slot10 = var0;
                            var _closure3_slot11 = var2;
                            var2 = {};
                            var _closure3_slot12 = var2;
                            var2 = true;
                            var _closure3_slot13 = var2;
                            var _closure3_slot14 = var0;
                            var2 = function(arg0) { // Original name: setColors, environment: var1
                                _fun8120: for (var _fun8120_ip = 0;;) switch (_fun8120_ip) {
                                    case 0:
                                        var3 = arg0;
                                        if (var3) {
                                            _fun8120_ip = 16;
                                            continue _fun8120
                                        }
                                    case 6:
                                        var3 = ['#fff', '#000'];
                                    case 16:
                                        var1 = var3;
                                        if (!var3) {
                                            _fun8120_ip = 44;
                                            continue _fun8120
                                        }
                                    case 22:
                                        var2 = _closure2_slot203;
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var3);
                                        var0 = 'string';
                                        var1 = var0 === var2;
                                    case 44:
                                        if (!var1) {
                                            _fun8120_ip = 60;
                                            continue _fun8120
                                        }
                                    case 47:
                                        var0 = _closure2_slot202;
                                        var1 = var0.brewer;
                                    case 60:
                                        if (!var1) {
                                            _fun8120_ip = 90;
                                            continue _fun8120
                                        }
                                    case 63:
                                        var0 = _closure2_slot202;
                                        var2 = var0.brewer;
                                        var0 = var3.toLowerCase;
                                        var0 = var0.bind(var3)();
                                        var1 = var2[var0];
                                    case 90:
                                        var0 = var3;
                                        if (!var1) {
                                            _fun8120_ip = 123;
                                            continue _fun8120
                                        }
                                    case 96:
                                        var1 = _closure2_slot202;
                                        var2 = var1.brewer;
                                        var1 = var3.toLowerCase;
                                        var1 = var1.bind(var3)();
                                        var0 = var2[var1];
                                    case 123:
                                        var1 = _closure2_slot203;
                                        var3 = undefined;
                                        var2 = var1.bind(var3)(var0);
                                        var1 = 'array';
                                        var5 = var0;
                                        var0 = var5;
                                        if (!(var1 === var2)) {
                                            _fun8120_ip = 321;
                                            continue _fun8120
                                        }
                                    case 154:
                                        var1 = var5.length;
                                        var6 = 1;
                                        var4 = var5;
                                        if (!(var6 === var1)) {
                                            _fun8120_ip = 194;
                                            continue _fun8120
                                        }
                                    case 169:
                                        var2 = 0;
                                        var8 = var5[var2];
                                        var1 = new Array(2);
                                        var1[0] = var8;
                                        var2 = var5[var2];
                                        var1[1] = var2;
                                        var4 = var1;
                                    case 194:
                                        var1 = var4.slice;
                                        var2 = 0;
                                        var5 = var1.bind(var4)(var2);
                                        var1 = var5.length;
                                        var1 = var2 < var1;
                                        var4 = 0;
                                        if (!var1) {
                                            _fun8120_ip = 249;
                                            continue _fun8120
                                        }
                                    case 220:
                                        var8 = _closure2_slot202;
                                        var1 = var5[var4];
                                        var1 = var8.bind(var3)(var1);
                                        var5[var4] = var1;
                                        var4 = var4 + 1;
                                        var1 = var5.length;
                                        if (var4 < var1) {
                                            _fun8120_ip = 220;
                                            continue _fun8120
                                        }
                                    case 249:
                                        var1 = _closure3_slot4;
                                        var1.length = var2;
                                        var1 = var5.length;
                                        var1 = var2 < var1;
                                        var2 = 0;
                                        var0 = var5;
                                        if (!var1) {
                                            _fun8120_ip = 321;
                                            continue _fun8120
                                        }
                                    case 279:
                                        var8 = _closure3_slot4;
                                        var7 = var8.push;
                                        var1 = var5.length;
                                        var1 = var1 - var6;
                                        var1 = var2 / var1;
                                        var1 = var7.bind(var8)(var1);
                                        var2 = var2 + 1;
                                        var1 = var5.length;
                                        var0 = var5;
                                        if (var2 < var1) {
                                            _fun8120_ip = 279;
                                            continue _fun8120
                                        }
                                    case 321:
                                        var2 = _closure3_slot19;
                                        var2 = var2.bind(var3)();
                                        _closure3_slot7 = var0;
                                        return var0;
                                }
                            };
                            var _closure3_slot15 = var2;
                            var0 = function(arg0) { // Original name: tMapLightness, environment: var1
                                var0 = arg0;
                                return var0;
                            };
                            var _closure3_slot16 = var0;
                            var0 = function(arg0) { // Original name: tMapDomain, environment: var1
                                var0 = arg0;
                                return var0;
                            };
                            var _closure3_slot17 = var0;
                            var0 = function(arg0, arg1) { // Original name: getColor, environment: var1
                                _fun8123: for (var _fun8123_ip = 0;;) switch (_fun8123_ip) {
                                    case 0:
                                        var12 = arg0;
                                        var0 = arg1;
                                        var6 = null;
                                        if (!(var6 == var0)) {
                                            _fun8123_ip = 14;
                                            continue _fun8123
                                        }
                                    case 12:
                                        var0 = false;
                                    case 14:
                                        var2 = global;
                                        var1 = var2.isNaN;
                                        var10 = undefined;
                                        var1 = var1.bind(var10)(var12);
                                        if (var1) {
                                            _fun8123_ip = 695;
                                            continue _fun8123
                                        }
                                    case 35:
                                        if (!(var6 !== var12)) {
                                            _fun8123_ip = 695;
                                            continue _fun8123
                                        }
                                    case 42:
                                        var4 = var12;
                                        if (var0) {
                                            _fun8123_ip = 226;
                                            continue _fun8123
                                        }
                                    case 51:
                                        var3 = _closure3_slot6;
                                        if (!var3) {
                                            _fun8123_ip = 77;
                                            continue _fun8123
                                        }
                                    case 61:
                                        var3 = _closure3_slot6;
                                        var3 = var3.length;
                                        var5 = 2;
                                        if (!(!(var3 > var5))) {
                                            _fun8123_ip = 121;
                                            continue _fun8123
                                        }
                                    case 77:
                                        var8 = _closure3_slot10;
                                        var7 = _closure3_slot9;
                                        var3 = 1;
                                        if (!(var8 !== var7)) {
                                            _fun8123_ip = 116;
                                            continue _fun8123
                                        }
                                    case 92:
                                        var7 = _closure3_slot9;
                                        var8 = var12 - var7;
                                        var9 = _closure3_slot10;
                                        var7 = _closure3_slot9;
                                        var7 = var9 - var7;
                                        var3 = var8 / var7;
                                    case 116:
                                        var4 = var3;
                                        _fun8123_ip = 226;
                                        continue _fun8123;
                                    case 121:
                                        var3 = _closure3_slot6;
                                        var6 = var6 != var3;
                                        var13 = 0;
                                        var3 = 0;
                                        if (!var6) {
                                            _fun8123_ip = 209;
                                            continue _fun8123
                                        }
                                    case 136:
                                        var6 = _closure3_slot6;
                                        var6 = var6.length;
                                        var7 = 1;
                                        var11 = var6 - var7;
                                        var6 = 0;
                                        if (!(var13 < var11)) {
                                            _fun8123_ip = 205;
                                            continue _fun8123
                                        }
                                    case 158:
                                        var8 = _closure3_slot6;
                                        var8 = var8[var13];
                                        var8 = var12 >= var8;
                                        var9 = 0;
                                        var6 = 0;
                                        if (!var8) {
                                            _fun8123_ip = 205;
                                            continue _fun8123
                                        }
                                    case 177:
                                        var13 = var9 + 1;
                                        var6 = var13;
                                        if (!(var13 < var11)) {
                                            _fun8123_ip = 205;
                                            continue _fun8123
                                        }
                                    case 187:
                                        var8 = _closure3_slot6;
                                        var8 = var8[var13];
                                        var9 = var13;
                                        var6 = var9;
                                        if (var12 >= var8) {
                                            _fun8123_ip = 177;
                                            continue _fun8123
                                        }
                                    case 205:
                                        var3 = var6 - var7;
                                    case 209:
                                        var1 = _closure3_slot6;
                                        var1 = var1.length;
                                        var1 = var1 - var5;
                                        var4 = var3 / var1;
                                    case 226:
                                        var3 = _closure3_slot17;
                                        var3 = var3.bind(var10)(var4);
                                        var6 = var3;
                                        if (var0) {
                                            _fun8123_ip = 253;
                                            continue _fun8123
                                        }
                                    case 244:
                                        var0 = _closure3_slot16;
                                        var6 = var0.bind(var10)(var3);
                                    case 253:
                                        var3 = _closure3_slot14;
                                        var0 = 1;
                                        var5 = var6;
                                        if (!(var0 !== var3)) {
                                            _fun8123_ip = 284;
                                            continue _fun8123
                                        }
                                    case 267:
                                        var4 = _closure2_slot204;
                                        var3 = _closure3_slot14;
                                        var5 = var4.bind(var10)(var6, var3);
                                    case 284:
                                        var3 = _closure3_slot5;
                                        var7 = 0;
                                        var4 = var3[var7];
                                        var3 = _closure3_slot5;
                                        var3 = var3[var7];
                                        var6 = var0 - var3;
                                        var3 = _closure3_slot5;
                                        var3 = var3[var0];
                                        var3 = var6 - var3;
                                        var3 = var5 * var3;
                                        var8 = var4 + var3;
                                        var5 = var2.Math;
                                        var4 = var5.min;
                                        var6 = var2.Math;
                                        var3 = var6.max;
                                        var3 = var3.bind(var6)(var7, var8);
                                        var6 = var4.bind(var5)(var0, var3);
                                        var4 = var2.Math;
                                        var3 = var4.floor;
                                        var2 = 10000;
                                        var2 = var2 * var6;
                                        var2 = var3.bind(var4)(var2);
                                        var3 = _closure3_slot13;
                                        if (!var3) {
                                            _fun8123_ip = 408;
                                            continue _fun8123
                                        }
                                    case 394:
                                        var3 = _closure3_slot12;
                                        var3 = var3[var2];
                                        if (var3) {
                                            _fun8123_ip = 685;
                                            continue _fun8123
                                        }
                                    case 408:
                                        var4 = _closure2_slot203;
                                        var3 = _closure3_slot7;
                                        var4 = var4.bind(var10)(var3);
                                        var3 = 'array';
                                        if (!(var3 !== var4)) {
                                            _fun8123_ip = 472;
                                            continue _fun8123
                                        }
                                    case 432:
                                        var4 = _closure2_slot203;
                                        var3 = _closure3_slot7;
                                        var8 = var4.bind(var10)(var3);
                                        var4 = 'function';
                                        var3 = undefined;
                                        if (!(var4 === var8)) {
                                            _fun8123_ip = 662;
                                            continue _fun8123
                                        }
                                    case 458:
                                        var4 = _closure3_slot7;
                                        var3 = var4.bind(var10)(var6);
                                        _fun8123_ip = 662;
                                        continue _fun8123;
                                    case 472:
                                        var4 = _closure3_slot4;
                                        var4 = var4.length;
                                        var4 = var7 < var4;
                                        var9 = 0;
                                        var3 = undefined;
                                        if (!var4) {
                                            _fun8123_ip = 662;
                                            continue _fun8123
                                        }
                                    case 495:
                                        var4 = _closure3_slot4;
                                        var8 = var4[var9];
                                        var4 = var9;
                                        if (!(!(var6 <= var8))) {
                                            _fun8123_ip = 654;
                                            continue _fun8123
                                        }
                                    case 513:
                                        if (!(var6 >= var8)) {
                                            _fun8123_ip = 534;
                                            continue _fun8123
                                        }
                                    case 517:
                                        var7 = _closure3_slot4;
                                        var7 = var7.length;
                                        var7 = var7 - var0;
                                        if (!(var4 !== var7)) {
                                            _fun8123_ip = 644;
                                            continue _fun8123
                                        }
                                    case 534:
                                        if (!(var6 > var8)) {
                                            _fun8123_ip = 554;
                                            continue _fun8123
                                        }
                                    case 538:
                                        var11 = _closure3_slot4;
                                        var7 = var4 + var0;
                                        var7 = var11[var7];
                                        if (!(!(var6 < var7))) {
                                            _fun8123_ip = 577;
                                            continue _fun8123
                                        }
                                    case 554:
                                        var9 = var4 + 1;
                                        var7 = _closure3_slot4;
                                        var7 = var7.length;
                                        var7 = var9 < var7;
                                        var3 = undefined;
                                        if (var7) {
                                            _fun8123_ip = 495;
                                            continue _fun8123
                                        }
                                    case 575:
                                        _fun8123_ip = 662;
                                        continue _fun8123;
                                    case 577:
                                        var7 = var6 - var8;
                                        var9 = _closure3_slot4;
                                        var6 = var4 + var0;
                                        var6 = var9[var6];
                                        var6 = var6 - var8;
                                        var15 = var7 / var6;
                                        var8 = _closure2_slot202;
                                        var7 = var8.interpolate;
                                        var5 = _closure3_slot7;
                                        var17 = var5[var4];
                                        var5 = _closure3_slot7;
                                        var0 = var4 + var0;
                                        var16 = var5[var0];
                                        var14 = _closure3_slot0;
                                        var18 = var8;
                                        var3 = var18[var7](var17, var16, var15, var14, var13);
                                        _fun8123_ip = 662;
                                        continue _fun8123;
                                    case 644:
                                        var0 = _closure3_slot7;
                                        var3 = var0[var4];
                                        _fun8123_ip = 662;
                                        continue _fun8123;
                                    case 654:
                                        var0 = _closure3_slot7;
                                        var3 = var0[var4];
                                    case 662:
                                        var4 = _closure3_slot13;
                                        var0 = var3;
                                        if (!var4) {
                                            _fun8123_ip = 693;
                                            continue _fun8123
                                        }
                                    case 672:
                                        var4 = _closure3_slot12;
                                        var4[var2] = var3;
                                        var0 = var3;
                                        _fun8123_ip = 693;
                                        continue _fun8123;
                                    case 685:
                                        var1 = _closure3_slot12;
                                        var0 = var1[var2];
                                    case 693:
                                        return var0;
                                    case 695:
                                        var0 = _closure3_slot1;
                                        return var0;
                                }
                            };
                            var _closure3_slot18 = var0;
                            var0 = function() { // Original name: resetCache, environment: var1
                                var0 = {};
                                _closure3_slot12 = var0;
                                return var0;
                            };
                            var _closure3_slot19 = var0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0);
                            var0 = function(arg0) { // Original name: f, environment: var1
                                _fun8125: for (var _fun8125_ip = 0;;) switch (_fun8125_ip) {
                                    case 0:
                                        var3 = _closure2_slot202;
                                        var4 = _closure3_slot18;
                                        var2 = undefined;
                                        var0 = arg0;
                                        var0 = var4.bind(var2)(var0);
                                        var2 = var3.bind(var2)(var0);
                                        var3 = _closure3_slot8;
                                        var0 = var2;
                                        if (!var3) {
                                            _fun8125_ip = 65;
                                            continue _fun8125
                                        }
                                    case 39:
                                        var3 = _closure3_slot8;
                                        var3 = var2[var3];
                                        var0 = var2;
                                        if (!var3) {
                                            _fun8125_ip = 65;
                                            continue _fun8125
                                        }
                                    case 53:
                                        var1 = _closure3_slot8;
                                        var1 = var2[var1];
                                        var0 = var1.bind(var2)();
                                    case 65:
                                        return var0;
                                }
                            };
                            var _closure3_slot20 = var0;
                            var2 = function(arg0) { // Environment: var1
                                _fun8126: for (var _fun8126_ip = 0;;) switch (_fun8126_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = null;
                                        if (!(var0 == var3)) {
                                            _fun8126_ip = 18;
                                            continue _fun8126
                                        }
                                    case 9:
                                        var0 = _closure3_slot6;
                                        return var0;
                                    case 18:
                                        var2 = _closure2_slot203;
                                        var1 = undefined;
                                        var2 = var2.bind(var1)(var3);
                                        var1 = 'array';
                                        if (!(var1 !== var2)) {
                                            _fun8126_ip = 122;
                                            continue _fun8126
                                        }
                                    case 40:
                                        var5 = _closure2_slot202;
                                        var4 = var5.analyze;
                                        var2 = _closure3_slot3;
                                        var4 = var4.bind(var5)(var2);
                                        var2 = 0;
                                        if (!(var2 !== var3)) {
                                            _fun8126_ip = 91;
                                            continue _fun8126
                                        }
                                    case 68:
                                        var5 = _closure2_slot202;
                                        var2 = var5.limits;
                                        var0 = 'e';
                                        var0 = var2.bind(var5)(var4, var0, var3);
                                        _fun8126_ip = 116;
                                        continue _fun8126;
                                    case 91:
                                        var5 = var4.min;
                                        var2 = new Array(2);
                                        var2[0] = var5;
                                        var4 = var4.max;
                                        var2[1] = var4;
                                        var0 = var2;
                                    case 116:
                                        _closure3_slot6 = var0;
                                        _fun8126_ip = 167;
                                        continue _fun8126;
                                    case 122:
                                        _closure3_slot6 = var3;
                                        var0 = 0;
                                        var2 = var3[var0];
                                        var0 = new Array(2);
                                        var0[0] = var2;
                                        var4 = var3.length;
                                        var2 = 1;
                                        var2 = var4 - var2;
                                        var2 = var3[var2];
                                        var0[1] = var2;
                                        _closure3_slot3 = var0;
                                    case 167:
                                        var0 = _closure3_slot20;
                                        return var0;
                                }
                            };
                            var0.classes = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun8127: for (var _fun8127_ip = 0;;) switch (_fun8127_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var0 = undefined;
                                        var _closure4_slot0 = var5;
                                        var2 = arguments.length;
                                        if (var2) {
                                            _fun8127_ip = 26;
                                            continue _fun8127
                                        }
                                    case 20:
                                        var2 = _closure3_slot3;
                                        return var2;
                                    case 26:
                                        var4 = 0;
                                        var2 = var5[var4];
                                        _closure3_slot9 = var2;
                                        var2 = var5.length;
                                        var3 = 1;
                                        var2 = var2 - var3;
                                        var2 = var5[var2];
                                        _closure3_slot10 = var2;
                                        var2 = new Array(0);
                                        _closure3_slot4 = var2;
                                        var2 = _closure3_slot7;
                                        var6 = var2.length;
                                        var2 = var5.length;
                                        if (!(var2 === var6)) {
                                            _fun8127_ip = 97;
                                            continue _fun8127
                                        }
                                    case 82:
                                        var7 = _closure3_slot9;
                                        var2 = _closure3_slot10;
                                        if (!(var7 === var2)) {
                                            _fun8127_ip = 218;
                                            continue _fun8127
                                        }
                                    case 97:
                                        var7 = var4 < var6;
                                        var2 = 0;
                                        if (!var7) {
                                            _fun8127_ip = 135;
                                            continue _fun8127
                                        }
                                    case 106:
                                        var9 = _closure3_slot4;
                                        var8 = var9.push;
                                        var7 = var6 - var3;
                                        var7 = var2 / var7;
                                        var7 = var8.bind(var9)(var7);
                                        var2 = var2 + 1;
                                        if (var2 < var6) {
                                            _fun8127_ip = 106;
                                            continue _fun8127
                                        }
                                    case 135:
                                        var6 = var5.length;
                                        var2 = 2;
                                        if (!(var6 > var2)) {
                                            _fun8127_ip = 305;
                                            continue _fun8127
                                        }
                                    case 150:
                                        var6 = var5.map;
                                        var2 = function(arg0, arg1) { // Environment: var1
                                            var0 = _closure4_slot0;
                                            var1 = var0.length;
                                            var0 = 1;
                                            var1 = var1 - var0;
                                            var0 = arg1;
                                            var0 = var0 / var1;
                                            return var0;
                                        };
                                        var2 = var6.bind(var5)(var2);
                                        var _closure4_slot1 = var2;
                                        var6 = var5.map;
                                        var2 = function(arg0) { // Environment: var1
                                            var2 = _closure3_slot9;
                                            var1 = arg0;
                                            var1 = var1 - var2;
                                            var2 = _closure3_slot10;
                                            var0 = _closure3_slot9;
                                            var0 = var2 - var0;
                                            var0 = var1 / var0;
                                            return var0;
                                        };
                                        var7 = var6.bind(var5)(var2);
                                        var _closure4_slot2 = var7;
                                        var6 = var7.every;
                                        var2 = function(arg0, arg1) { // Environment: var1
                                            var1 = _closure4_slot1;
                                            var0 = arg1;
                                            var1 = var1[var0];
                                            var0 = arg0;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var2 = var6.bind(var7)(var2);
                                        if (var2) {
                                            _fun8127_ip = 305;
                                            continue _fun8127
                                        }
                                    case 207:
                                        var1 = function(arg0) { // Original name: tMapDomain, environment: var1
                                            _fun8131: for (var _fun8131_ip = 0;;) switch (_fun8131_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var5 = 0;
                                                    if (!(!(var0 <= var5))) {
                                                        _fun8131_ip = 151;
                                                        continue _fun8131
                                                    }
                                                case 12:
                                                    var4 = 1;
                                                    if (!(!(var0 >= var4))) {
                                                        _fun8131_ip = 151;
                                                        continue _fun8131
                                                    }
                                                case 22:
                                                    var2 = _closure4_slot2;
                                                    var2 = var2[var4];
                                                    var2 = var0 >= var2;
                                                    var3 = 0;
                                                    var5 = 0;
                                                    if (!var2) {
                                                        _fun8131_ip = 69;
                                                        continue _fun8131
                                                    }
                                                case 44:
                                                    var6 = var3 + 1;
                                                    var7 = _closure4_slot2;
                                                    var2 = var6 + var4;
                                                    var2 = var7[var2];
                                                    var3 = var6;
                                                    var5 = var3;
                                                    if (var0 >= var2) {
                                                        _fun8131_ip = 44;
                                                        continue _fun8131
                                                    }
                                                case 69:
                                                    var2 = _closure4_slot2;
                                                    var2 = var2[var5];
                                                    var3 = var0 - var2;
                                                    var6 = _closure4_slot2;
                                                    var2 = var5 + var4;
                                                    var6 = var6[var2];
                                                    var2 = _closure4_slot2;
                                                    var2 = var2[var5];
                                                    var2 = var6 - var2;
                                                    var3 = var3 / var2;
                                                    var2 = _closure4_slot1;
                                                    var2 = var2[var5];
                                                    var6 = _closure4_slot1;
                                                    var4 = var5 + var4;
                                                    var4 = var6[var4];
                                                    var1 = _closure4_slot1;
                                                    var1 = var1[var5];
                                                    var1 = var4 - var1;
                                                    var1 = var3 * var1;
                                                    var1 = var2 + var1;
                                                    return var1;
                                                case 151:
                                                    return var0;
                                            }
                                        };
                                        _closure3_slot17 = var1;
                                        _fun8127_ip = 305;
                                        continue _fun8127;
                                    case 218:
                                        var1 = global;
                                        var2 = var1.Array;
                                        var1 = var2.from;
                                        var2 = var1.bind(var2)(var5);
                                        var1 = var2.length;
                                        var1 = var4 < var1;
                                        var4 = 0;
                                        if (!var1) {
                                            _fun8127_ip = 305;
                                            continue _fun8127
                                        }
                                    case 250:
                                        var7 = var2[var4];
                                        var6 = _closure3_slot4;
                                        var5 = var6.push;
                                        var1 = _closure3_slot9;
                                        var7 = var7 - var1;
                                        var8 = _closure3_slot10;
                                        var1 = _closure3_slot9;
                                        var1 = var8 - var1;
                                        var1 = var7 / var1;
                                        var1 = var5.bind(var6)(var1);
                                        var4 = var4 + var3;
                                        var1 = var2.length;
                                        if (var4 < var1) {
                                            _fun8127_ip = 250;
                                            continue _fun8127
                                        }
                                    case 305:
                                        var2 = _closure3_slot9;
                                        var1 = new Array(2);
                                        var1[0] = var2;
                                        var2 = _closure3_slot10;
                                        var1[1] = var2;
                                        _closure3_slot3 = var1;
                                        var0 = _closure3_slot20;
                                        return var0;
                                }
                            };
                            var0.domain = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun8132: for (var _fun8132_ip = 0;;) switch (_fun8132_ip) {
                                    case 0:
                                        var3 = undefined;
                                        var0 = undefined;
                                        var0 = arguments.length;
                                        if (var0) {
                                            _fun8132_ip = 19;
                                            continue _fun8132
                                        }
                                    case 13:
                                        var0 = _closure3_slot0;
                                        _fun8132_ip = 38;
                                        continue _fun8132;
                                    case 19:
                                        var2 = arg0;
                                        _closure3_slot0 = var2;
                                        var2 = _closure3_slot19;
                                        var2 = var2.bind(var3)();
                                        var0 = _closure3_slot20;
                                    case 38:
                                        return var0;
                                }
                            };
                            var0.mode = var2;
                            var2 = function(arg0, arg1) { // Environment: var1
                                var3 = _closure3_slot15;
                                var2 = undefined;
                                var1 = arg0;
                                var1 = var3.bind(var2)(var1);
                                var0 = _closure3_slot20;
                                return var0;
                            };
                            var0.range = var2;
                            var2 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                _closure3_slot8 = var1;
                                var0 = _closure3_slot20;
                                return var0;
                            };
                            var0.out = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun8135: for (var _fun8135_ip = 0;;) switch (_fun8135_ip) {
                                    case 0:
                                        var0 = undefined;
                                        var0 = arguments.length;
                                        if (var0) {
                                            _fun8135_ip = 17;
                                            continue _fun8135
                                        }
                                    case 11:
                                        var0 = _closure3_slot2;
                                        _fun8135_ip = 28;
                                        continue _fun8135;
                                    case 17:
                                        var2 = arg0;
                                        _closure3_slot2 = var2;
                                        var0 = _closure3_slot20;
                                    case 28:
                                        return var0;
                                }
                            };
                            var0.spread = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun8136: for (var _fun8136_ip = 0;;) switch (_fun8136_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = null;
                                        if (!(var0 == var1)) {
                                            _fun8136_ip = 13;
                                            continue _fun8136
                                        }
                                    case 11:
                                        var1 = true;
                                    case 13:
                                        _closure3_slot11 = var1;
                                        var3 = _closure3_slot19;
                                        var1 = undefined;
                                        var1 = var3.bind(var1)();
                                        var1 = _closure3_slot11;
                                        if (var1) {
                                            _fun8136_ip = 44;
                                            continue _fun8136
                                        }
                                    case 37:
                                        var1 = function(arg0) { // Original name: tMapLightness, environment: var2
                                            var0 = arg0;
                                            return var0;
                                        };
                                        _fun8136_ip = 49;
                                        continue _fun8136;
                                    case 44:
                                        var1 = function(arg0) { // Original name: tMapLightness, environment: var2
                                            _fun8137: for (var _fun8137_ip = 0;;) switch (_fun8137_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var1 = _closure3_slot18;
                                                    var15 = undefined;
                                                    var14 = 0;
                                                    var13 = true;
                                                    var3 = var1.bind(var15)(var14, var13);
                                                    var2 = var3.lab;
                                                    var2 = var2.bind(var3)();
                                                    var4 = var2[var14];
                                                    var2 = 1;
                                                    var5 = var1.bind(var15)(var2, var13);
                                                    var3 = var5.lab;
                                                    var3 = var3.bind(var5)();
                                                    var3 = var3[var14];
                                                    var12 = var4 > var3;
                                                    var5 = var1.bind(var15)(var0, var13);
                                                    var1 = var5.lab;
                                                    var1 = var1.bind(var5)();
                                                    var1 = var1[var14];
                                                    var3 = var3 - var4;
                                                    var3 = var3 * var0;
                                                    var11 = var4 + var3;
                                                    var3 = var1 - var11;
                                                    var10 = global;
                                                    var4 = var10.Math;
                                                    var1 = var4.abs;
                                                    var1 = var1.bind(var4)(var3);
                                                    var9 = 0.01;
                                                    var1 = var1 > var9;
                                                    var8 = 19;
                                                    var7 = 0.5;
                                                    var6 = -1;
                                                    var5 = var0;
                                                    var4 = var3;
                                                    var3 = 0;
                                                    var0 = var5;
                                                    if (!var1) {
                                                        _fun8137_ip = 291;
                                                        continue _fun8137
                                                    }
                                                case 168:
                                                    var1 = var4;
                                                    if (!var12) {
                                                        _fun8137_ip = 178;
                                                        continue _fun8137
                                                    }
                                                case 174:
                                                    var1 = var4 * var6;
                                                case 178:
                                                    if (!(!(var1 < var14))) {
                                                        _fun8137_ip = 199;
                                                        continue _fun8137
                                                    }
                                                case 182:
                                                    var1 = var3 - var5;
                                                    var1 = var7 * var1;
                                                    var17 = var5 + var1;
                                                    var18 = var5;
                                                    _fun8137_ip = 217;
                                                    continue _fun8137;
                                                case 199:
                                                    var1 = var2 - var5;
                                                    var1 = var7 * var1;
                                                    var17 = var5 + var1;
                                                    var3 = var5;
                                                    var18 = var2;
                                                case 217:
                                                    var1 = _closure3_slot18;
                                                    var19 = var1.bind(var15)(var17, var13);
                                                    var1 = var19.lab;
                                                    var1 = var1.bind(var19)();
                                                    var1 = var1[var14];
                                                    var19 = var1 - var11;
                                                    var20 = var10.Math;
                                                    var1 = var20.abs;
                                                    var1 = var1.bind(var20)(var19);
                                                    var0 = var17;
                                                    if (!(var1 > var9)) {
                                                        _fun8137_ip = 291;
                                                        continue _fun8137
                                                    }
                                                case 269:
                                                    var1 = parseFloat(var8);
                                                    var8 = var1 - 1;
                                                    var5 = var17;
                                                    var4 = var19;
                                                    var2 = var18;
                                                    var0 = var5;
                                                    if (var1 > var14) {
                                                        _fun8137_ip = 168;
                                                        continue _fun8137
                                                    }
                                                case 291:
                                                    return var0;
                                            }
                                        };
                                    case 49:
                                        _closure3_slot16 = var1;
                                        var0 = _closure3_slot20;
                                        return var0;
                                }
                            };
                            var0.correctLightness = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun8139: for (var _fun8139_ip = 0;;) switch (_fun8139_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = null;
                                        if (!(var0 == var3)) {
                                            _fun8139_ip = 18;
                                            continue _fun8139
                                        }
                                    case 9:
                                        var0 = _closure3_slot5;
                                        _fun8139_ip = 69;
                                        continue _fun8139;
                                    case 18:
                                        var2 = _closure2_slot203;
                                        var1 = undefined;
                                        var4 = var2.bind(var1)(var3);
                                        var1 = 'number';
                                        var2 = var3;
                                        if (!(var1 === var4)) {
                                            _fun8139_ip = 58;
                                            continue _fun8139
                                        }
                                    case 43:
                                        var1 = new Array(2);
                                        var1[0] = var3;
                                        var1[1] = var3;
                                        var2 = var1;
                                    case 58:
                                        _closure3_slot5 = var2;
                                        var0 = _closure3_slot20;
                                    case 69:
                                        return var0;
                                }
                            };
                            var0.padding = var2;
                            var2 = function(arg0, arg1) { // Environment: var1
                                _fun8140: for (var _fun8140_ip = 0;;) switch (_fun8140_ip) {
                                    case 0:
                                        var9 = arg0;
                                        var2 = arg1;
                                        var6 = undefined;
                                        var0 = undefined;
                                        var _closure4_slot0 = var9;
                                        var _closure4_slot1 = var2;
                                        var4 = arguments.length;
                                        var3 = 2;
                                        if (!(var4 < var3)) {
                                            _fun8140_ip = 41;
                                            continue _fun8140
                                        }
                                    case 30:
                                        var4 = 'hex';
                                        _closure4_slot1 = var4;
                                        var2 = var4;
                                    case 41:
                                        var0 = arguments.length;
                                        var5 = 0;
                                        if (!(var5 !== var0)) {
                                            _fun8140_ip = 388;
                                            continue _fun8140
                                        }
                                    case 53:
                                        var7 = 1;
                                        if (!(var7 !== var9)) {
                                            _fun8140_ip = 353;
                                            continue _fun8140
                                        }
                                    case 63:
                                        if (!(!(var9 > var7))) {
                                            _fun8140_ip = 239;
                                            continue _fun8140
                                        }
                                    case 70:
                                        var13 = new Array(0);
                                        var0 = _closure3_slot6;
                                        if (!var0) {
                                            _fun8140_ip = 97;
                                            continue _fun8140
                                        }
                                    case 84:
                                        var0 = _closure3_slot6;
                                        var0 = var0.length;
                                        if (!(!(var0 > var3))) {
                                            _fun8140_ip = 103;
                                            continue _fun8140
                                        }
                                    case 97:
                                        var4 = _closure3_slot3;
                                        _fun8140_ip = 219;
                                        continue _fun8140;
                                    case 103:
                                        var0 = _closure3_slot6;
                                        var11 = var0.length;
                                        var10 = var7 <= var11;
                                        if (var10) {
                                            _fun8140_ip = 125;
                                            continue _fun8140
                                        }
                                    case 119:
                                        var0 = var7 > var11;
                                        _fun8140_ip = 129;
                                        continue _fun8140;
                                    case 125:
                                        var0 = var7 < var11;
                                    case 129:
                                        var8 = 0.5;
                                        var3 = var7;
                                        var4 = var13;
                                        if (!var0) {
                                            _fun8140_ip = 219;
                                            continue _fun8140
                                        }
                                    case 148:
                                        var14 = var13.push;
                                        var15 = _closure3_slot6;
                                        var0 = var3 - var7;
                                        var15 = var15[var0];
                                        var0 = _closure3_slot6;
                                        var0 = var0[var3];
                                        var0 = var15 + var0;
                                        var0 = var8 * var0;
                                        var0 = var14.bind(var13)(var0);
                                        if (var10) {
                                            _fun8140_ip = 194;
                                            continue _fun8140
                                        }
                                    case 189:
                                        var14 = var3 - 1;
                                        _fun8140_ip = 197;
                                        continue _fun8140;
                                    case 194:
                                        var14 = var3 + 1;
                                    case 197:
                                        if (var10) {
                                            _fun8140_ip = 206;
                                            continue _fun8140
                                        }
                                    case 200:
                                        var0 = var14 > var11;
                                        _fun8140_ip = 210;
                                        continue _fun8140;
                                    case 206:
                                        var0 = var14 < var11;
                                    case 210:
                                        var3 = var14;
                                        var4 = var13;
                                        if (var0) {
                                            _fun8140_ip = 148;
                                            continue _fun8140
                                        }
                                    case 219:
                                        var3 = var4.map;
                                        var0 = function(arg0) { // Environment: var1
                                            var2 = _closure3_slot20;
                                            var1 = undefined;
                                            var0 = arg0;
                                            var0 = var2.bind(var1)(var0);
                                            return var0;
                                        };
                                        var3 = var3.bind(var4)(var0);
                                        _fun8140_ip = 405;
                                        continue _fun8140;
                                    case 239:
                                        var4 = _closure3_slot3;
                                        var4 = var4[var5];
                                        var _closure4_slot2 = var4;
                                        var0 = _closure3_slot3;
                                        var0 = var0[var7];
                                        var0 = var0 - var4;
                                        var _closure4_slot3 = var0;
                                        var7 = new Array(0);
                                        var8 = var5 < var9;
                                        if (var8) {
                                            _fun8140_ip = 287;
                                            continue _fun8140
                                        }
                                    case 281:
                                        var0 = var5 > var9;
                                        _fun8140_ip = 291;
                                        continue _fun8140;
                                    case 287:
                                        var0 = var5 < var9;
                                    case 291:
                                        var4 = 0;
                                        if (!var0) {
                                            _fun8140_ip = 336;
                                            continue _fun8140
                                        }
                                    case 296:
                                        var0 = var7.push;
                                        var0 = var0.bind(var7)(var4);
                                        var0 = var4;
                                        if (var8) {
                                            _fun8140_ip = 317;
                                            continue _fun8140
                                        }
                                    case 312:
                                        var4 = var0 - 1;
                                        _fun8140_ip = 320;
                                        continue _fun8140;
                                    case 317:
                                        var4 = var0 + 1;
                                    case 320:
                                        if (var8) {
                                            _fun8140_ip = 329;
                                            continue _fun8140
                                        }
                                    case 323:
                                        var0 = var4 > var9;
                                        _fun8140_ip = 333;
                                        continue _fun8140;
                                    case 329:
                                        var0 = var4 < var9;
                                    case 333:
                                        if (var0) {
                                            _fun8140_ip = 296;
                                            continue _fun8140
                                        }
                                    case 336:
                                        var4 = var7.map;
                                        var0 = function(arg0) { // Environment: var1
                                            var2 = _closure3_slot20;
                                            var1 = _closure4_slot2;
                                            var4 = _closure4_slot0;
                                            var3 = 1;
                                            var4 = var4 - var3;
                                            var3 = arg0;
                                            var3 = var3 / var4;
                                            var0 = _closure4_slot3;
                                            var0 = var3 * var0;
                                            var1 = var1 + var0;
                                            var0 = undefined;
                                            var0 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var3 = var4.bind(var7)(var0);
                                        _fun8140_ip = 405;
                                        continue _fun8140;
                                    case 353:
                                        var4 = _closure3_slot20;
                                        var0 = 0.5;
                                        var4 = var4.bind(var6)(var0);
                                        var0 = new Array(1);
                                        var0[0] = var4;
                                        var3 = var0;
                                        _fun8140_ip = 405;
                                        continue _fun8140;
                                    case 388:
                                        var4 = _closure3_slot7;
                                        var0 = var4.slice;
                                        var3 = var0.bind(var4)(var5);
                                    case 405:
                                        var0 = _closure2_slot202;
                                        var2 = var0[var2];
                                        var0 = var3;
                                        if (!var2) {
                                            _fun8140_ip = 437;
                                            continue _fun8140
                                        }
                                    case 422:
                                        var2 = var3.map;
                                        var1 = function(arg0) { // Environment: var1
                                            var1 = arg0;
                                            var0 = _closure4_slot1;
                                            var0 = var1[var0];
                                            var0 = var0.bind(var1)();
                                            return var0;
                                        };
                                        var0 = var2.bind(var3)(var1);
                                    case 437:
                                        return var0;
                                }
                            };
                            var0.colors = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun8144: for (var _fun8144_ip = 0;;) switch (_fun8144_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = null;
                                        if (!(var0 == var2)) {
                                            _fun8144_ip = 18;
                                            continue _fun8144
                                        }
                                    case 9:
                                        var0 = _closure3_slot13;
                                        _fun8144_ip = 29;
                                        continue _fun8144;
                                    case 18:
                                        _closure3_slot13 = var2;
                                        var0 = _closure3_slot20;
                                    case 29:
                                        return var0;
                                }
                            };
                            var0.cache = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun8145: for (var _fun8145_ip = 0;;) switch (_fun8145_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = null;
                                        if (!(var0 == var2)) {
                                            _fun8145_ip = 18;
                                            continue _fun8145
                                        }
                                    case 9:
                                        var0 = _closure3_slot14;
                                        _fun8145_ip = 29;
                                        continue _fun8145;
                                    case 18:
                                        _closure3_slot14 = var2;
                                        var0 = _closure3_slot20;
                                    case 29:
                                        return var0;
                                }
                            };
                            var0.gamma = var2;
                            var1 = function(arg0) { // Environment: var1
                                _fun8146: for (var _fun8146_ip = 0;;) switch (_fun8146_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = null;
                                        if (!(var0 == var3)) {
                                            _fun8146_ip = 18;
                                            continue _fun8146
                                        }
                                    case 9:
                                        var0 = _closure3_slot1;
                                        _fun8146_ip = 43;
                                        continue _fun8146;
                                    case 18:
                                        var2 = _closure2_slot202;
                                        var1 = undefined;
                                        var2 = var2.bind(var1)(var3);
                                        _closure3_slot1 = var2;
                                        var0 = _closure3_slot20;
                                    case 43:
                                        return var0;
                                }
                            };
                            var0.nodata = var1;
                            return var0;
                        };
                        var _closure2_slot205 = var1;
                        var _closure2_slot206 = var6;
                        var _closure2_slot207 = var0;
                        var8 = function(arg0, arg1, arg2) { // Original name: blend, environment: var4
                            _fun8147: for (var _fun8147_ip = 0;;) switch (_fun8147_ip) {
                                case 0:
                                    var0 = arg2;
                                    var2 = _closure2_slot208;
                                    var2 = var2[var0];
                                    if (var2) {
                                        _fun8147_ip = 57;
                                        continue _fun8147
                                    }
                                case 17:
                                    var2 = global;
                                    var4 = var2.Error;
                                    var2 = 'unknown blend mode ';
                                    var6 = var2 + var0;
                                    var3 = var4.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var7 = var3;
                                    var2 = new var7[var4](var6, var5);
                                    var2 = var2 instanceof Object ? var2 : var3;
                                    throw var2;
                                case 57:
                                    var3 = _closure2_slot208;
                                    var2 = var3[var0];
                                    var1 = arg0;
                                    var0 = arg1;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                            }
                        };
                        var _closure2_slot208 = var8;
                        var14 = function(arg0) { // Original name: blend_f, environment: var4
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var2 = _closure2_slot207;
                                var5 = undefined;
                                var1 = arg1;
                                var2 = var2.bind(var5)(var1);
                                var1 = var2.rgb;
                                var4 = var1.bind(var2)();
                                var2 = _closure2_slot207;
                                var1 = arg0;
                                var2 = var2.bind(var5)(var1);
                                var1 = var2.rgb;
                                var3 = var1.bind(var2)();
                                var2 = _closure2_slot207;
                                var1 = var2.rgb;
                                var0 = _closure3_slot0;
                                var0 = var0.bind(var5)(var4, var3);
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            return var0;
                        };
                        var15 = function(arg0) { // Original name: each, environment: var4
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var3 = arg0;
                                var1 = arg1;
                                var0 = new Array(0);
                                var5 = _closure3_slot0;
                                var6 = 0;
                                var7 = var3[var6];
                                var2 = var1[var6];
                                var4 = undefined;
                                var2 = var5.bind(var4)(var7, var2);
                                var0[var6] = var2;
                                var6 = 1;
                                var7 = var3[var6];
                                var2 = var1[var6];
                                var2 = var5.bind(var4)(var7, var2);
                                var0[var6] = var2;
                                var2 = 2;
                                var3 = var3[var2];
                                var1 = var1[var2];
                                var1 = var5.bind(var4)(var3, var1);
                                var0[var2] = var1;
                                return var0;
                            };
                            return var0;
                        };
                        var13 = undefined;
                        var10 = function(arg0) { // Original name: normal, environment: var4
                            var0 = arg0;
                            return var0;
                        };
                        var10 = var15.bind(var13)(var10);
                        var10 = var14.bind(var13)(var10);
                        var8.normal = var10;
                        var10 = function(arg0, arg1) { // Original name: multiply, environment: var4
                            var1 = arg0;
                            var0 = arg1;
                            var1 = var1 * var0;
                            var0 = 255;
                            var0 = var1 / var0;
                            return var0;
                        };
                        var10 = var15.bind(var13)(var10);
                        var10 = var14.bind(var13)(var10);
                        var8.multiply = var10;
                        var10 = function(arg0, arg1) { // Original name: screen, environment: var4
                            var0 = arg0;
                            var1 = 255;
                            var3 = var0 / var1;
                            var0 = arg1;
                            var0 = var0 / var1;
                            var2 = 1;
                            var3 = var2 - var3;
                            var0 = var2 - var0;
                            var0 = var3 * var0;
                            var0 = var2 - var0;
                            var0 = var1 * var0;
                            return var0;
                        };
                        var10 = var15.bind(var13)(var10);
                        var10 = var14.bind(var13)(var10);
                        var8.screen = var10;
                        var10 = function(arg0, arg1) { // Original name: overlay, environment: var4
                            _fun8155: for (var _fun8155_ip = 0;;) switch (_fun8155_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = arg1;
                                    var0 = 128;
                                    if (!(!(var2 < var0))) {
                                        _fun8155_ip = 56;
                                        continue _fun8155
                                    }
                                case 13:
                                    var1 = 255;
                                    var5 = var3 / var1;
                                    var0 = var2 / var1;
                                    var4 = 1;
                                    var6 = 2;
                                    var5 = var4 - var5;
                                    var5 = var6 * var5;
                                    var0 = var4 - var0;
                                    var0 = var5 * var0;
                                    var0 = var4 - var0;
                                    var0 = var1 * var0;
                                    _fun8155_ip = 74;
                                    continue _fun8155;
                                case 56:
                                    var1 = 2;
                                    var1 = var1 * var3;
                                    var2 = var1 * var2;
                                    var1 = 255;
                                    var0 = var2 / var1;
                                case 74:
                                    return var0;
                            }
                        };
                        var10 = var15.bind(var13)(var10);
                        var10 = var14.bind(var13)(var10);
                        var8.overlay = var10;
                        var10 = function(arg0, arg1) { // Original name: darken, environment: var4
                            _fun8156: for (var _fun8156_ip = 0;;) switch (_fun8156_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = arg1;
                                    if (!(var0 > var1)) {
                                        _fun8156_ip = 13;
                                        continue _fun8156
                                    }
                                case 10:
                                    var0 = var1;
                                case 13:
                                    return var0;
                            }
                        };
                        var10 = var15.bind(var13)(var10);
                        var10 = var14.bind(var13)(var10);
                        var8.darken = var10;
                        var10 = function(arg0, arg1) { // Original name: lighten, environment: var4
                            _fun8157: for (var _fun8157_ip = 0;;) switch (_fun8157_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = arg1;
                                    if (!(var1 > var0)) {
                                        _fun8157_ip = 13;
                                        continue _fun8157
                                    }
                                case 10:
                                    var0 = var1;
                                case 13:
                                    return var0;
                            }
                        };
                        var10 = var15.bind(var13)(var10);
                        var10 = var14.bind(var13)(var10);
                        var8.lighten = var10;
                        var10 = function(arg0, arg1) { // Original name: dodge, environment: var4
                            _fun8158: for (var _fun8158_ip = 0;;) switch (_fun8158_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = 255;
                                    var0 = var2;
                                    if (!(var2 !== var3)) {
                                        _fun8158_ip = 49;
                                        continue _fun8158
                                    }
                                case 13:
                                    var1 = arg1;
                                    var1 = var1 / var2;
                                    var4 = var3 / var2;
                                    var3 = var1 * var2;
                                    var1 = 1;
                                    var1 = var1 - var4;
                                    var1 = var3 / var1;
                                    var0 = var2;
                                    if (!(!(var1 > var0))) {
                                        _fun8158_ip = 49;
                                        continue _fun8158
                                    }
                                case 46:
                                    var0 = var1;
                                case 49:
                                    return var0;
                            }
                        };
                        var10 = var15.bind(var13)(var10);
                        var10 = var14.bind(var13)(var10);
                        var8.dodge = var10;
                        var10 = function(arg0, arg1) { // Original name: burn, environment: var4
                            var0 = arg1;
                            var1 = 255;
                            var0 = var0 / var1;
                            var2 = arg0;
                            var3 = var2 / var1;
                            var2 = 1;
                            var0 = var2 - var0;
                            var0 = var0 / var3;
                            var0 = var2 - var0;
                            var0 = var1 * var0;
                            return var0;
                        };
                        var10 = var15.bind(var13)(var10);
                        var10 = var14.bind(var13)(var10);
                        var8.burn = var10;
                        var10 = var5.type;
                        var _closure2_slot209 = var10;
                        var10 = var5.clip_rgb;
                        var _closure2_slot210 = var10;
                        var5 = var5.TWOPI;
                        var _closure2_slot211 = var5;
                        var5 = var9.Math;
                        var5 = var5.pow;
                        var _closure2_slot212 = var5;
                        var5 = var9.Math;
                        var5 = var5.sin;
                        var _closure2_slot213 = var5;
                        var5 = var9.Math;
                        var5 = var5.cos;
                        var _closure2_slot214 = var5;
                        var _closure2_slot215 = var0;
                        var _closure2_slot216 = var1;
                        var5 = var9.Math;
                        var5 = var5.floor;
                        var _closure2_slot217 = var5;
                        var5 = var9.Math;
                        var5 = var5.random;
                        var _closure2_slot218 = var5;
                        var _closure2_slot219 = var3;
                        var3 = var9.Math;
                        var3 = var3.log;
                        var _closure2_slot220 = var3;
                        var3 = var9.Math;
                        var3 = var3.pow;
                        var _closure2_slot221 = var3;
                        var3 = var9.Math;
                        var3 = var3.floor;
                        var _closure2_slot222 = var3;
                        var3 = var9.Math;
                        var3 = var3.abs;
                        var _closure2_slot223 = var3;
                        var10 = function(arg0, arg1) { // Original name: analyze, environment: var4
                            _fun8160: for (var _fun8160_ip = 0;;) switch (_fun8160_ip) {
                                case 0:
                                    var5 = arg0;
                                    var0 = arg1;
                                    var _closure3_slot0 = var0;
                                    var4 = undefined;
                                    if (!(var4 === var0)) {
                                        _fun8160_ip = 24;
                                        continue _fun8160
                                    }
                                case 18:
                                    var0 = null;
                                    _closure3_slot0 = var0;
                                case 24:
                                    var0 = {};
                                    var2 = global;
                                    var3 = var2.Number;
                                    var3 = var3.MAX_VALUE;
                                    var0.min = var3;
                                    var3 = var2.Number;
                                    var6 = var3.MAX_VALUE;
                                    var3 = -1;
                                    var3 = var3 * var6;
                                    var0.max = var3;
                                    var3 = 0;
                                    var0.sum = var3;
                                    var6 = new Array(0);
                                    var0.values = var6;
                                    var0.count = var3;
                                    var _closure3_slot1 = var0;
                                    var3 = _closure2_slot219;
                                    var6 = var3.bind(var4)(var5);
                                    var3 = 'object';
                                    var4 = var5;
                                    if (!(var3 === var6)) {
                                        _fun8160_ip = 133;
                                        continue _fun8160
                                    }
                                case 117:
                                    var3 = var2.Object;
                                    var2 = var3.values;
                                    var4 = var2.bind(var3)(var5);
                                case 133:
                                    var3 = var4.forEach;
                                    var2 = function(arg0) { // Environment: var1
                                        _fun8161: for (var _fun8161_ip = 0;;) switch (_fun8161_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var1 = _closure3_slot0;
                                                if (!var1) {
                                                    _fun8161_ip = 35;
                                                    continue _fun8161
                                                }
                                            case 13:
                                                var4 = _closure2_slot219;
                                                var2 = undefined;
                                                var4 = var4.bind(var2)(var3);
                                                var2 = 'object';
                                                var1 = var2 === var4;
                                            case 35:
                                                var2 = var3;
                                                if (!var1) {
                                                    _fun8161_ip = 49;
                                                    continue _fun8161
                                                }
                                            case 41:
                                                var1 = _closure3_slot0;
                                                var2 = var3[var1];
                                            case 49:
                                                var1 = null;
                                                var1 = var1 == var2;
                                                if (var1) {
                                                    _fun8161_ip = 73;
                                                    continue _fun8161
                                                }
                                            case 58:
                                                var3 = global;
                                                var4 = var3.isNaN;
                                                var3 = undefined;
                                                var1 = var4.bind(var3)(var2);
                                            case 73:
                                                if (var1) {
                                                    _fun8161_ip = 184;
                                                    continue _fun8161
                                                }
                                            case 76:
                                                var1 = _closure3_slot1;
                                                var3 = var1.values;
                                                var1 = var3.push;
                                                var1 = var1.bind(var3)(var2);
                                                var3 = _closure3_slot1;
                                                var1 = var3.sum;
                                                var1 = var1 + var2;
                                                var3.sum = var1;
                                                var1 = _closure3_slot1;
                                                var1 = var1.min;
                                                if (!(var2 < var1)) {
                                                    _fun8161_ip = 138;
                                                    continue _fun8161
                                                }
                                            case 128:
                                                var1 = _closure3_slot1;
                                                var1.min = var2;
                                            case 138:
                                                var1 = _closure3_slot1;
                                                var1 = var1.max;
                                                if (!(var2 > var1)) {
                                                    _fun8161_ip = 161;
                                                    continue _fun8161
                                                }
                                            case 151:
                                                var1 = _closure3_slot1;
                                                var1.max = var2;
                                            case 161:
                                                var1 = _closure3_slot1;
                                                var2 = var1.count;
                                                var0 = 1;
                                                var0 = var2 + var0;
                                                var1.count = var0;
                                            case 184:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var2 = var3.bind(var4)(var2);
                                    var3 = var0.min;
                                    var2 = new Array(2);
                                    var2[0] = var3;
                                    var3 = var0.max;
                                    var2[1] = var3;
                                    var0.domain = var2;
                                    var1 = function(arg0, arg1) { // Environment: var1
                                        var4 = _closure2_slot225;
                                        var3 = _closure3_slot1;
                                        var2 = undefined;
                                        var1 = arg0;
                                        var0 = arg1;
                                        var0 = var4.bind(var2)(var3, var1, var0);
                                        return var0;
                                    };
                                    var0.limits = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot224 = var10;
                        var3 = function(arg0, arg1, arg2) { // Original name: limits, environment: var4
                            _fun8163: for (var _fun8163_ip = 0;;) switch (_fun8163_ip) {
                                case 0:
                                    var2 = arg0;
                                    var11 = arg1;
                                    var4 = arg2;
                                    var10 = undefined;
                                    if (!(var10 === var11)) {
                                        _fun8163_ip = 21;
                                        continue _fun8163
                                    }
                                case 17:
                                    var11 = 'equal';
                                case 21:
                                    if (!(var10 === var4)) {
                                        _fun8163_ip = 28;
                                        continue _fun8163
                                    }
                                case 25:
                                    var4 = 7;
                                case 28:
                                    var0 = _closure2_slot219;
                                    var3 = var0.bind(var10)(var2);
                                    var1 = 'array';
                                    var0 = var2;
                                    if (!(var1 == var3)) {
                                        _fun8163_ip = 60;
                                        continue _fun8163
                                    }
                                case 51:
                                    var1 = _closure2_slot224;
                                    var0 = var1.bind(var10)(var2);
                                case 60:
                                    var2 = var0.min;
                                    var1 = var0.max;
                                    var5 = var0.values;
                                    var3 = var5.sort;
                                    var0 = function(arg0, arg1) { // Environment: var6
                                        var1 = arg0;
                                        var0 = arg1;
                                        var0 = var1 - var0;
                                        return var0;
                                    };
                                    var7 = var3.bind(var5)(var0);
                                    var3 = 1;
                                    if (!(var3 !== var4)) {
                                        _fun8163_ip = 1361;
                                        continue _fun8163
                                    }
                                case 101:
                                    var0 = new Array(0);
                                    var8 = var11.substr;
                                    var5 = 0;
                                    var12 = var8.bind(var11)(var5, var3);
                                    var8 = 'c';
                                    if (!(var8 === var12)) {
                                        _fun8163_ip = 147;
                                        continue _fun8163
                                    }
                                case 127:
                                    var8 = var0.push;
                                    var8 = var8.bind(var0)(var2);
                                    var8 = var0.push;
                                    var8 = var8.bind(var0)(var1);
                                case 147:
                                    var8 = var11.substr;
                                    var12 = var8.bind(var11)(var5, var3);
                                    var8 = 'e';
                                    if (!(var8 !== var12)) {
                                        _fun8163_ip = 1299;
                                        continue _fun8163
                                    }
                                case 170:
                                    var8 = var11.substr;
                                    var12 = var8.bind(var11)(var5, var3);
                                    var8 = 'l';
                                    if (!(var8 !== var12)) {
                                        _fun8163_ip = 1126;
                                        continue _fun8163
                                    }
                                case 193:
                                    var8 = var11.substr;
                                    var12 = var8.bind(var11)(var5, var3);
                                    var8 = 'q';
                                    if (!(var8 !== var12)) {
                                        _fun8163_ip = 996;
                                        continue _fun8163
                                    }
                                case 216:
                                    var8 = var11.substr;
                                    var11 = var8.bind(var11)(var5, var3);
                                    var8 = 'k';
                                    if (!(var8 === var11)) {
                                        _fun8163_ip = 1359;
                                        continue _fun8163
                                    }
                                case 239:
                                    var13 = var7.length;
                                    var14 = global;
                                    var8 = var14.Array;
                                    var11 = var8.prototype;
                                    var11 = Object.create(var11, {
                                        constructor: {
                                            value: var8
                                        }
                                    });
                                    var41 = var11;
                                    var40 = var13;
                                    var8 = new var41[var8](var40, var39);
                                    var11 = var8 instanceof Object ? var8 : var11;
                                    var8 = var14.Array;
                                    var12 = var8.prototype;
                                    var12 = Object.create(var12, {
                                        constructor: {
                                            value: var8
                                        }
                                    });
                                    var41 = var12;
                                    var40 = var4;
                                    var8 = new var41[var8](var40, var39);
                                    var26 = var8 instanceof Object ? var8 : var12;
                                    var8 = new Array(0);
                                    var12 = var8.push;
                                    var12 = var12.bind(var8)(var2);
                                    var15 = var3 < var4;
                                    var12 = var3;
                                    if (!var15) {
                                        _fun8163_ip = 361;
                                        continue _fun8163
                                    }
                                case 328:
                                    var16 = var8.push;
                                    var17 = var12 / var4;
                                    var15 = var1 - var2;
                                    var15 = var17 * var15;
                                    var15 = var2 + var15;
                                    var15 = var16.bind(var8)(var15);
                                    var12 = var12 + 1;
                                    if (var12 < var4) {
                                        _fun8163_ip = 328;
                                        continue _fun8163
                                    }
                                case 361:
                                    var12 = var8.push;
                                    var12 = var12.bind(var8)(var1);
                                    var24 = 200;
                                    var22 = null;
                                    var21 = undefined;
                                    var20 = 0;
                                    var19 = var8;
                                    var18 = undefined;
                                    var17 = undefined;
                                    var16 = undefined;
                                    var15 = undefined;
                                    var12 = undefined;
                                case 393:
                                    var27 = var5 < var4;
                                    var8 = 0;
                                    if (!var27) {
                                        _fun8163_ip = 413;
                                        continue _fun8163
                                    }
                                case 402:
                                    var26[var8] = var5;
                                    var8 = var8 + 1;
                                    if (var8 < var4) {
                                        _fun8163_ip = 402;
                                        continue _fun8163
                                    }
                                case 413:
                                    var28 = var5 < var13;
                                    var27 = 0;
                                    var8 = var12;
                                    var12 = var8;
                                    if (!var28) {
                                        _fun8163_ip = 545;
                                        continue _fun8163
                                    }
                                case 428:
                                    var32 = var7[var27];
                                    var28 = var14.Number;
                                    var34 = var28.MAX_VALUE;
                                    var35 = var5 < var4;
                                    var33 = undefined;
                                    var28 = 0;
                                    var31 = var34;
                                    var30 = undefined;
                                    var29 = 0;
                                    if (!var35) {
                                        _fun8163_ip = 523;
                                        continue _fun8163
                                    }
                                case 462:
                                    var36 = _closure2_slot223;
                                    var35 = var19[var28];
                                    var35 = var35 - var32;
                                    var36 = var36.bind(var10)(var35);
                                    if (!(var36 < var34)) {
                                        _fun8163_ip = 489;
                                        continue _fun8163
                                    }
                                case 483:
                                    var34 = var36;
                                    var33 = var28;
                                case 489:
                                    var35 = var26[var33];
                                    var35 = var35 + 1;
                                    var26[var33] = var35;
                                    var11[var27] = var33;
                                    var28 = var28 + 1;
                                    var31 = var34;
                                    var30 = var33;
                                    var8 = var36;
                                    var29 = var28;
                                    if (var29 < var4) {
                                        _fun8163_ip = 462;
                                        continue _fun8163
                                    }
                                case 523:
                                    var27 = var27 + 1;
                                    var17 = var31;
                                    var16 = var30;
                                    var15 = var29;
                                    var18 = var32;
                                    var12 = var8;
                                    if (var27 < var13) {
                                        _fun8163_ip = 428;
                                        continue _fun8163
                                    }
                                case 545:
                                    var8 = var14.Array;
                                    var27 = var8.prototype;
                                    var27 = Object.create(var27, {
                                        constructor: {
                                            value: var8
                                        }
                                    });
                                    var41 = var27;
                                    var40 = var4;
                                    var8 = new var41[var8](var40, var39);
                                    var27 = var8 instanceof Object ? var8 : var27;
                                    var28 = var5 < var4;
                                    var8 = 0;
                                    if (!var28) {
                                        _fun8163_ip = 594;
                                        continue _fun8163
                                    }
                                case 583:
                                    var27[var8] = var22;
                                    var8 = var8 + 1;
                                    if (var8 < var4) {
                                        _fun8163_ip = 583;
                                        continue _fun8163
                                    }
                                case 594:
                                    var28 = var5 < var13;
                                    var8 = 0;
                                    if (!var28) {
                                        _fun8163_ip = 651;
                                        continue _fun8163
                                    }
                                case 603:
                                    var28 = var11[var8];
                                    var29 = var27[var28];
                                    if (!(var22 !== var29)) {
                                        _fun8163_ip = 633;
                                        continue _fun8163
                                    }
                                case 615:
                                    var30 = var27[var28];
                                    var29 = var7[var8];
                                    var29 = var30 + var29;
                                    var27[var28] = var29;
                                    _fun8163_ip = 641;
                                    continue _fun8163;
                                case 633:
                                    var29 = var7[var8];
                                    var27[var28] = var29;
                                case 641:
                                    var8 = var8 + 1;
                                    var21 = var28;
                                    if (var8 < var13) {
                                        _fun8163_ip = 603;
                                        continue _fun8163
                                    }
                                case 651:
                                    var28 = var5 < var4;
                                    var8 = 0;
                                    if (!var28) {
                                        _fun8163_ip = 687;
                                        continue _fun8163
                                    }
                                case 660:
                                    var29 = var27[var8];
                                    var28 = var26[var8];
                                    var28 = var3 / var28;
                                    var28 = var29 * var28;
                                    var27[var8] = var28;
                                    var8 = var8 + 1;
                                    if (var8 < var4) {
                                        _fun8163_ip = 660;
                                        continue _fun8163
                                    }
                                case 687:
                                    var28 = var5 < var4;
                                    var29 = 0;
                                    var8 = false;
                                    if (!var28) {
                                        _fun8163_ip = 724;
                                        continue _fun8163
                                    }
                                case 698:
                                    var30 = var27[var29];
                                    var28 = var19[var29];
                                    var8 = true;
                                    if (!(var30 === var28)) {
                                        _fun8163_ip = 724;
                                        continue _fun8163
                                    }
                                case 712:
                                    var29 = var29 + 1;
                                    var28 = var29 < var4;
                                    var8 = false;
                                    if (var28) {
                                        _fun8163_ip = 698;
                                        continue _fun8163
                                    }
                                case 724:
                                    var20 = var20 + 1;
                                    if (!(var20 > var24)) {
                                        _fun8163_ip = 733;
                                        continue _fun8163
                                    }
                                case 731:
                                    var8 = false;
                                case 733:
                                    var19 = var27;
                                    if (var8) {
                                        _fun8163_ip = 393;
                                        continue _fun8163
                                    }
                                case 742:
                                    var12 = {};
                                    var15 = var5 < var4;
                                    var8 = 0;
                                    if (!var15) {
                                        _fun8163_ip = 768;
                                        continue _fun8163
                                    }
                                case 753:
                                    var15 = new Array(0);
                                    var12[var8] = var15;
                                    var8 = var8 + 1;
                                    if (var8 < var4) {
                                        _fun8163_ip = 753;
                                        continue _fun8163
                                    }
                                case 768:
                                    var15 = var5 < var13;
                                    var8 = 0;
                                    if (!var15) {
                                        _fun8163_ip = 806;
                                        continue _fun8163
                                    }
                                case 777:
                                    var15 = var11[var8];
                                    var17 = var12[var15];
                                    var16 = var17.push;
                                    var15 = var7[var8];
                                    var15 = var16.bind(var17)(var15);
                                    var8 = var8 + 1;
                                    if (var8 < var13) {
                                        _fun8163_ip = 777;
                                        continue _fun8163
                                    }
                                case 806:
                                    var11 = new Array(0);
                                    var13 = var5 < var4;
                                    var8 = 0;
                                    if (!var13) {
                                        _fun8163_ip = 875;
                                        continue _fun8163
                                    }
                                case 819:
                                    var15 = var11.push;
                                    var13 = var12[var8];
                                    var13 = var13[var5];
                                    var13 = var15.bind(var11)(var13);
                                    var15 = var11.push;
                                    var16 = var12[var8];
                                    var13 = var12[var8];
                                    var13 = var13.length;
                                    var13 = var13 - var3;
                                    var13 = var16[var13];
                                    var13 = var15.bind(var11)(var13);
                                    var8 = var8 + 1;
                                    if (var8 < var4) {
                                        _fun8163_ip = 819;
                                        continue _fun8163
                                    }
                                case 875:
                                    var8 = var11.sort;
                                    var6 = function(arg0, arg1) { // Environment: var6
                                        var1 = arg0;
                                        var0 = arg1;
                                        var0 = var1 - var0;
                                        return var0;
                                    };
                                    var13 = var8.bind(var11)(var6);
                                    var8 = var0.push;
                                    var6 = var13[var5];
                                    var6 = var8.bind(var0)(var6);
                                    var6 = var13.length;
                                    var6 = var3 < var6;
                                    var12 = 2;
                                    var11 = -1;
                                    var8 = var3;
                                    if (!var6) {
                                        _fun8163_ip = 1359;
                                        continue _fun8163
                                    }
                                case 932:
                                    var15 = var13[var8];
                                    var6 = var14.isNaN;
                                    var6 = var6.bind(var10)(var15);
                                    if (var6) {
                                        _fun8163_ip = 965;
                                        continue _fun8163
                                    }
                                case 950:
                                    var16 = var0.indexOf;
                                    var16 = var16.bind(var0)(var15);
                                    var6 = var11 !== var16;
                                case 965:
                                    if (var6) {
                                        _fun8163_ip = 978;
                                        continue _fun8163
                                    }
                                case 968:
                                    var6 = var0.push;
                                    var6 = var6.bind(var0)(var15);
                                case 978:
                                    var8 = var8 + var12;
                                    var6 = var13.length;
                                    if (var8 < var6) {
                                        _fun8163_ip = 932;
                                        continue _fun8163
                                    }
                                case 991:
                                    _fun8163_ip = 1359;
                                    continue _fun8163;
                                case 996:
                                    var6 = var0.push;
                                    var6 = var6.bind(var0)(var2);
                                    var8 = var3 < var4;
                                    var6 = var3;
                                    if (!var8) {
                                        _fun8163_ip = 1111;
                                        continue _fun8163
                                    }
                                case 1016:
                                    var8 = var7.length;
                                    var8 = var8 - var3;
                                    var8 = var8 * var6;
                                    var11 = var8 / var4;
                                    var8 = _closure2_slot222;
                                    var8 = var8.bind(var10)(var11);
                                    if (!(var8 !== var11)) {
                                        _fun8163_ip = 1090;
                                        continue _fun8163
                                    }
                                case 1046:
                                    var14 = var11 - var8;
                                    var12 = var0.push;
                                    var13 = var7[var8];
                                    var11 = var3 - var14;
                                    var13 = var13 * var11;
                                    var11 = var8 + var3;
                                    var11 = var7[var11];
                                    var11 = var11 * var14;
                                    var11 = var13 + var11;
                                    var11 = var12.bind(var0)(var11);
                                    _fun8163_ip = 1104;
                                    continue _fun8163;
                                case 1090:
                                    var11 = var0.push;
                                    var8 = var7[var8];
                                    var8 = var11.bind(var0)(var8);
                                case 1104:
                                    var6 = var6 + 1;
                                    if (var6 < var4) {
                                        _fun8163_ip = 1016;
                                        continue _fun8163
                                    }
                                case 1111:
                                    var6 = var0.push;
                                    var6 = var6.bind(var0)(var1);
                                    _fun8163_ip = 1359;
                                    continue _fun8163;
                                case 1126:
                                    if (!(!(var2 <= var5))) {
                                        _fun8163_ip = 1263;
                                        continue _fun8163
                                    }
                                case 1133:
                                    var5 = global;
                                    var6 = var5.Math;
                                    var7 = var6.LOG10E;
                                    var6 = _closure2_slot220;
                                    var6 = var6.bind(var10)(var2);
                                    var8 = var7 * var6;
                                    var5 = var5.Math;
                                    var6 = var5.LOG10E;
                                    var5 = _closure2_slot220;
                                    var5 = var5.bind(var10)(var1);
                                    var7 = var6 * var5;
                                    var5 = var0.push;
                                    var5 = var5.bind(var0)(var2);
                                    var11 = var3 < var4;
                                    var6 = 10;
                                    var5 = var3;
                                    if (!var11) {
                                        _fun8163_ip = 1251;
                                        continue _fun8163
                                    }
                                case 1208:
                                    var12 = var0.push;
                                    var13 = _closure2_slot221;
                                    var14 = var5 / var4;
                                    var11 = var7 - var8;
                                    var11 = var14 * var11;
                                    var11 = var8 + var11;
                                    var11 = var13.bind(var10)(var6, var11);
                                    var11 = var12.bind(var0)(var11);
                                    var5 = var5 + 1;
                                    if (var5 < var4) {
                                        _fun8163_ip = 1208;
                                        continue _fun8163
                                    }
                                case 1251:
                                    var5 = var0.push;
                                    var5 = var5.bind(var0)(var1);
                                    _fun8163_ip = 1359;
                                    continue _fun8163;
                                case 1263:
                                    var5 = global;
                                    var7 = var5.Error;
                                    var5 = var7.prototype;
                                    var6 = Object.create(var5, {
                                        constructor: {
                                            value: var7
                                        }
                                    });
                                    var40 = 'Logarithmic scales are only possible for values > 0';
                                    var41 = var6;
                                    var5 = new var41[var7](var40, var39);
                                    var5 = var5 instanceof Object ? var5 : var6;
                                    throw var5;
                                case 1299:
                                    var5 = var0.push;
                                    var5 = var5.bind(var0)(var2);
                                    var5 = var3 < var4;
                                    if (!var5) {
                                        _fun8163_ip = 1349;
                                        continue _fun8163
                                    }
                                case 1316:
                                    var6 = var0.push;
                                    var7 = var3 / var4;
                                    var5 = var1 - var2;
                                    var5 = var7 * var5;
                                    var5 = var2 + var5;
                                    var5 = var6.bind(var0)(var5);
                                    var3 = var3 + 1;
                                    if (var3 < var4) {
                                        _fun8163_ip = 1316;
                                        continue _fun8163
                                    }
                                case 1349:
                                    var3 = var0.push;
                                    var3 = var3.bind(var0)(var1);
                                case 1359:
                                    return var0;
                                case 1361:
                                    var0 = new Array(2);
                                    var0[0] = var2;
                                    var0[1] = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot225 = var3;
                        var5 = {};
                        var5.analyze = var10;
                        var5.limits = var3;
                        var _closure2_slot226 = var1;
                        var _closure2_slot227 = var1;
                        var3 = var9.Math;
                        var3 = var3.sqrt;
                        var _closure2_slot228 = var3;
                        var3 = var9.Math;
                        var3 = var3.pow;
                        var _closure2_slot229 = var3;
                        var3 = var9.Math;
                        var3 = var3.min;
                        var _closure2_slot230 = var3;
                        var3 = var9.Math;
                        var3 = var3.max;
                        var _closure2_slot231 = var3;
                        var3 = var9.Math;
                        var3 = var3.atan2;
                        var _closure2_slot232 = var3;
                        var3 = var9.Math;
                        var3 = var3.abs;
                        var _closure2_slot233 = var3;
                        var3 = var9.Math;
                        var3 = var3.cos;
                        var _closure2_slot234 = var3;
                        var3 = var9.Math;
                        var3 = var3.sin;
                        var _closure2_slot235 = var3;
                        var3 = var9.Math;
                        var3 = var3.exp;
                        var _closure2_slot236 = var3;
                        var3 = var9.Math;
                        var3 = var3.PI;
                        var _closure2_slot237 = var3;
                        var _closure2_slot238 = var1;
                        var _closure2_slot239 = var1;
                        var _closure2_slot240 = var0;
                        var _closure2_slot241 = var6;
                        var3 = {};
                        var1 = function() { // Original name: cool, environment: var4
                            var2 = _closure2_slot241;
                            var6 = _closure2_slot240;
                            var5 = var6.hsl;
                            var4 = 180;
                            var3 = 1;
                            var1 = 0.9;
                            var3 = var5.bind(var6)(var4, var3, var1);
                            var1 = new Array(2);
                            var1[0] = var3;
                            var6 = _closure2_slot240;
                            var5 = var6.hsl;
                            var4 = 250;
                            var3 = 0.7;
                            var0 = 0.4;
                            var0 = var5.bind(var6)(var4, var3, var0);
                            var1[1] = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var3.cool = var1;
                        var1 = function() { // Original name: hot, environment: var4
                            var2 = _closure2_slot241;
                            var1 = undefined;
                            var0 = ['#000', '#f00', '#ff0', '#fff'];
                            var2 = var2.bind(var1)(var0);
                            var1 = var2.mode;
                            var0 = 'rgb';
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var3.hot = var1;
                        var1 = {};
                        var10 = ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'];
                        var1.OrRd = var10;
                        var10 = ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'];
                        var1.PuBu = var10;
                        var10 = ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'];
                        var1.BuPu = var10;
                        var10 = ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#arg63603', '#7f2704'];
                        var1.Oranges = var10;
                        var10 = ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'];
                        var1.BuGn = var10;
                        var10 = ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'];
                        var1.YlOrBr = var10;
                        var10 = ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'];
                        var1.YlGn = var10;
                        var10 = ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'];
                        var1.Reds = var10;
                        var10 = ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'];
                        var1.RdPu = var10;
                        var10 = ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'];
                        var1.Greens = var10;
                        var10 = ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'];
                        var1.YlGnBu = var10;
                        var10 = ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'];
                        var1.Purples = var10;
                        var10 = ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'];
                        var1.GnBu = var10;
                        var10 = ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'];
                        var1.Greys = var10;
                        var10 = ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'];
                        var1.YlOrRd = var10;
                        var10 = ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'];
                        var1.PuRd = var10;
                        var10 = ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'];
                        var1.Blues = var10;
                        var10 = ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'];
                        var1.PuBuGn = var10;
                        var10 = ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'];
                        var1.Viridis = var10;
                        var10 = ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'];
                        var1.Spectral = var10;
                        var10 = ['#arg50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'];
                        var1.RdYlGn = var10;
                        var10 = ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'];
                        var1.RdBu = var10;
                        var10 = ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'];
                        var1.PiYG = var10;
                        var10 = ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'];
                        var1.PRGn = var10;
                        var10 = ['#arg50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'];
                        var1.RdYlBu = var10;
                        var10 = ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'];
                        var1.BrBG = var10;
                        var10 = ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'];
                        var1.RdGy = var10;
                        var10 = ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'];
                        var1.PuOr = var10;
                        var10 = ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'];
                        var1.Set2 = var10;
                        var10 = ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'];
                        var1.Accent = var10;
                        var10 = ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#arg65628', '#f781bf', '#999999'];
                        var1.Set1 = var10;
                        var10 = ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'];
                        var1.Set3 = var10;
                        var10 = ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'];
                        var1.Dark2 = var10;
                        var10 = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'];
                        var1.Paired = var10;
                        var10 = ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'];
                        var1.Pastel2 = var10;
                        var10 = ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2'];
                        var1.Pastel1 = var10;
                        var10 = var9.Object;
                        var9 = var10.keys;
                        var10 = var9.bind(var10)(var1);
                        var9 = var10.length;
                        var9 = var12 < var9;
                        var12 = 0;
                        if (!var9) {
                            _fun7987_ip = 5032;
                            continue _fun7987
                        }
                    case 4997:
                        var9 = var10[var12];
                        var13 = var9.toLowerCase;
                        var13 = var13.bind(var9)();
                        var9 = var1[var9];
                        var1[var13] = var9;
                        var12 = var12 + var11;
                        var9 = var10.length;
                        if (var12 < var9) {
                            _fun7987_ip = 4997;
                            continue _fun7987
                        }
                    case 5032:
                        var9 = function(arg0, arg1, arg2) { // Original name: average, environment: var4
                            _fun8168: for (var _fun8168_ip = 0;;) switch (_fun8168_ip) {
                                case 0:
                                    var5 = arg0;
                                    var7 = arg1;
                                    var1 = arg2;
                                    var _closure3_slot0 = var7;
                                    var _closure3_slot1 = var1;
                                    var3 = undefined;
                                    if (!(var3 === var7)) {
                                        _fun8168_ip = 36;
                                        continue _fun8168
                                    }
                                case 25:
                                    var2 = 'lrgb';
                                    _closure3_slot0 = var2;
                                    var7 = var2;
                                case 36:
                                    if (!(var3 === var1)) {
                                        _fun8168_ip = 48;
                                        continue _fun8168
                                    }
                                case 40:
                                    var2 = null;
                                    _closure3_slot1 = var2;
                                    var1 = null;
                                case 48:
                                    var8 = var5.length;
                                    if (var1) {
                                        _fun8168_ip = 125;
                                        continue _fun8168
                                    }
                                case 56:
                                    var2 = global;
                                    var6 = var2.Array;
                                    var4 = var6.from;
                                    var2 = var2.Array;
                                    var9 = var2.prototype;
                                    var9 = Object.create(var9, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var22 = var9;
                                    var21 = var8;
                                    var2 = new var22[var2](var21, var20);
                                    var2 = var2 instanceof Object ? var2 : var9;
                                    var6 = var4.bind(var6)(var2);
                                    var4 = var6.map;
                                    var2 = function() { // Environment: var0
                                        var0 = 1;
                                        return var0;
                                    };
                                    var2 = var4.bind(var6)(var2);
                                    _closure3_slot1 = var2;
                                    var1 = var2;
                                case 125:
                                    var4 = var1.reduce;
                                    var2 = function(arg0, arg1) { // Environment: var0
                                        var1 = arg0;
                                        var0 = arg1;
                                        var0 = var1 + var0;
                                        return var0;
                                    };
                                    var2 = var4.bind(var1)(var2);
                                    var2 = var8 / var2;
                                    var _closure3_slot2 = var2;
                                    var4 = var1.forEach;
                                    var2 = function(arg0, arg1) { // Environment: var0
                                        var2 = arg1;
                                        var1 = _closure3_slot1;
                                        var3 = var1[var2];
                                        var0 = _closure3_slot2;
                                        var0 = var3 * var0;
                                        var1[var2] = var0;
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var2 = var4.bind(var1)(var2);
                                    var4 = var5.map;
                                    var2 = function(arg0) { // Environment: var0
                                        var2 = _closure2_slot193;
                                        var0 = var2.prototype;
                                        var1 = Object.create(var0, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var3 = arg0;
                                        var4 = var1;
                                        var0 = new var4[var2](var3, var2);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        return var0;
                                    };
                                    var2 = var4.bind(var5)(var2);
                                    var4 = 'lrgb';
                                    if (!(var4 !== var7)) {
                                        _fun8168_ip = 729;
                                        continue _fun8168
                                    }
                                case 190:
                                    var4 = var2.shift;
                                    var9 = var4.bind(var2)();
                                    var4 = var9.get;
                                    var6 = var4.bind(var9)(var7);
                                    var _closure3_slot3 = var6;
                                    var15 = new Array(0);
                                    var _closure3_slot4 = var15;
                                    var14 = 0;
                                    var _closure3_slot5 = var14;
                                    var _closure3_slot6 = var14;
                                    var4 = var6.length;
                                    var5 = var14 < var4;
                                    var13 = 180;
                                    var11 = global;
                                    var12 = 'h';
                                    var10 = 0;
                                    if (!var5) {
                                        _fun8168_ip = 438;
                                        continue _fun8168
                                    }
                                case 261:
                                    var16 = var6[var10];
                                    if (var16) {
                                        _fun8168_ip = 270;
                                        continue _fun8168
                                    }
                                case 268:
                                    var16 = 0;
                                case 270:
                                    var5 = var1[var14];
                                    var5 = var16 * var5;
                                    var6[var10] = var5;
                                    var16 = var15.push;
                                    var17 = var11.isNaN;
                                    var5 = var6[var10];
                                    var17 = var17.bind(var3)(var5);
                                    var5 = 0;
                                    if (var17) {
                                        _fun8168_ip = 311;
                                        continue _fun8168
                                    }
                                case 307:
                                    var5 = var1[var14];
                                case 311:
                                    var5 = var16.bind(var15)(var5);
                                    var5 = var7.charAt;
                                    var5 = var5.bind(var7)(var10);
                                    if (!(var12 === var5)) {
                                        _fun8168_ip = 423;
                                        continue _fun8168
                                    }
                                case 331:
                                    var16 = var11.isNaN;
                                    var5 = var6[var10];
                                    var5 = var16.bind(var3)(var5);
                                    if (var5) {
                                        _fun8168_ip = 423;
                                        continue _fun8168
                                    }
                                case 349:
                                    var5 = var6[var10];
                                    var16 = var5 / var13;
                                    var5 = _closure2_slot197;
                                    var17 = var16 * var5;
                                    var16 = _closure3_slot5;
                                    var5 = _closure2_slot198;
                                    var18 = var5.bind(var3)(var17);
                                    var5 = var1[var14];
                                    var5 = var18 * var5;
                                    var5 = var16 + var5;
                                    _closure3_slot5 = var5;
                                    var16 = _closure3_slot6;
                                    var5 = _closure2_slot199;
                                    var17 = var5.bind(var3)(var17);
                                    var5 = var1[var14];
                                    var5 = var17 * var5;
                                    var5 = var16 + var5;
                                    _closure3_slot6 = var5;
                                case 423:
                                    var10 = var10 + 1;
                                    var5 = var6.length;
                                    if (var10 < var5) {
                                        _fun8168_ip = 261;
                                        continue _fun8168
                                    }
                                case 438:
                                    var5 = var9.alpha;
                                    var9 = var5.bind(var9)();
                                    var5 = var1[var14];
                                    var5 = var9 * var5;
                                    var _closure3_slot7 = var5;
                                    var9 = var2.forEach;
                                    var5 = function(arg0, arg1) { // Environment: var0
                                        _fun8173: for (var _fun8173_ip = 0;;) switch (_fun8173_ip) {
                                            case 0:
                                                var2 = arg0;
                                                var10 = arg1;
                                                var1 = var2.get;
                                                var0 = _closure3_slot0;
                                                var8 = var1.bind(var2)(var0);
                                                var1 = _closure3_slot7;
                                                var0 = var2.alpha;
                                                var2 = var0.bind(var2)();
                                                var3 = _closure3_slot1;
                                                var7 = 1;
                                                var0 = var10 + var7;
                                                var0 = var3[var0];
                                                var0 = var2 * var0;
                                                var0 = var1 + var0;
                                                _closure3_slot7 = var0;
                                                var0 = _closure3_slot3;
                                                var0 = var0.length;
                                                var6 = 0;
                                                var1 = var6 < var0;
                                                var5 = 180;
                                                var0 = undefined;
                                                var3 = 'h';
                                                var2 = global;
                                                if (!var1) {
                                                    _fun8173_ip = 314;
                                                    continue _fun8173
                                                }
                                            case 99:
                                                var11 = var2.isNaN;
                                                var1 = var8[var6];
                                                var1 = var11.bind(var0)(var1);
                                                if (var1) {
                                                    _fun8173_ip = 295;
                                                    continue _fun8173
                                                }
                                            case 120:
                                                var11 = _closure3_slot4;
                                                var12 = var11[var6];
                                                var13 = _closure3_slot1;
                                                var1 = var10 + var7;
                                                var1 = var13[var1];
                                                var1 = var12 + var1;
                                                var11[var6] = var1;
                                                var11 = _closure3_slot0;
                                                var1 = var11.charAt;
                                                var1 = var1.bind(var11)(var6);
                                                if (!(var3 !== var1)) {
                                                    _fun8173_ip = 205;
                                                    continue _fun8173
                                                }
                                            case 167:
                                                var11 = _closure3_slot3;
                                                var12 = var11[var6];
                                                var13 = var8[var6];
                                                var14 = _closure3_slot1;
                                                var1 = var10 + var7;
                                                var1 = var14[var1];
                                                var1 = var13 * var1;
                                                var1 = var12 + var1;
                                                var11[var6] = var1;
                                                _fun8173_ip = 295;
                                                continue _fun8173;
                                            case 205:
                                                var1 = var8[var6];
                                                var11 = var1 / var5;
                                                var1 = _closure2_slot197;
                                                var12 = var11 * var1;
                                                var11 = _closure3_slot5;
                                                var1 = _closure2_slot198;
                                                var13 = var1.bind(var0)(var12);
                                                var14 = _closure3_slot1;
                                                var1 = var10 + var7;
                                                var1 = var14[var1];
                                                var1 = var13 * var1;
                                                var1 = var11 + var1;
                                                _closure3_slot5 = var1;
                                                var11 = _closure3_slot6;
                                                var1 = _closure2_slot199;
                                                var12 = var1.bind(var0)(var12);
                                                var13 = _closure3_slot1;
                                                var1 = var10 + var7;
                                                var1 = var13[var1];
                                                var1 = var12 * var1;
                                                var1 = var11 + var1;
                                                _closure3_slot6 = var1;
                                            case 295:
                                                var6 = var6 + 1;
                                                var1 = _closure3_slot3;
                                                var1 = var1.length;
                                                if (var6 < var1) {
                                                    _fun8173_ip = 99;
                                                    continue _fun8173
                                                }
                                            case 314:
                                                return var0;
                                        }
                                    };
                                    var5 = var9.bind(var2)(var5);
                                    var5 = var6.length;
                                    var5 = var14 < var5;
                                    var11 = 360;
                                    var10 = 0;
                                    var9 = undefined;
                                    if (!var5) {
                                        _fun8168_ip = 643;
                                        continue _fun8168
                                    }
                                case 500:
                                    var5 = var7.charAt;
                                    var16 = var5.bind(var7)(var10);
                                    var5 = var10;
                                    if (!(var12 !== var16)) {
                                        _fun8168_ip = 536;
                                        continue _fun8168
                                    }
                                case 518:
                                    var17 = var6[var5];
                                    var16 = var15[var5];
                                    var16 = var17 / var16;
                                    var6[var5] = var16;
                                    _fun8168_ip = 628;
                                    continue _fun8168;
                                case 536:
                                    var18 = _closure2_slot200;
                                    var17 = _closure3_slot6;
                                    var16 = var15[var5];
                                    var17 = var17 / var16;
                                    var19 = _closure3_slot5;
                                    var16 = var15[var5];
                                    var16 = var19 / var16;
                                    var17 = var18.bind(var3)(var17, var16);
                                    var16 = _closure2_slot197;
                                    var16 = var17 / var16;
                                    var17 = var16 * var13;
                                    var16 = var17;
                                    if (!(var16 < var14)) {
                                        _fun8168_ip = 600;
                                        continue _fun8168
                                    }
                                case 589:
                                    var17 = var17 + var11;
                                    var16 = var17;
                                    if (var16 < var14) {
                                        _fun8168_ip = 589;
                                        continue _fun8168
                                    }
                                case 600:
                                    var17 = var16;
                                    var16 = var17;
                                    if (!(var16 >= var11)) {
                                        _fun8168_ip = 621;
                                        continue _fun8168
                                    }
                                case 610:
                                    var17 = var17 - var11;
                                    var16 = var17;
                                    if (var16 >= var11) {
                                        _fun8168_ip = 610;
                                        continue _fun8168
                                    }
                                case 621:
                                    var6[var5] = var16;
                                    var9 = var16;
                                case 628:
                                    var10 = var5 + 1;
                                    var5 = var6.length;
                                    if (var10 < var5) {
                                        _fun8168_ip = 500;
                                        continue _fun8168
                                    }
                                case 643:
                                    var5 = _closure3_slot7;
                                    var5 = var5 / var8;
                                    _closure3_slot7 = var5;
                                    var4 = _closure2_slot193;
                                    var5 = var4.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var22 = var5;
                                    var21 = var6;
                                    var20 = var7;
                                    var4 = new var22[var4](var21, var20, var19);
                                    var6 = var4 instanceof Object ? var4 : var5;
                                    var5 = var6.alpha;
                                    var7 = _closure3_slot7;
                                    var4 = 0.99999;
                                    var7 = var7 > var4;
                                    var4 = 1;
                                    if (var7) {
                                        _fun8168_ip = 719;
                                        continue _fun8168
                                    }
                                case 715:
                                    var4 = _closure3_slot7;
                                case 719:
                                    var0 = true;
                                    var0 = var5.bind(var6)(var4, var0);
                                    return var0;
                                case 729:
                                    var0 = _closure2_slot201;
                                    var0 = var0.bind(var3)(var2, var1);
                                    return var0;
                            }
                        };
                        var0.average = var9;
                        var9 = function(arg0) { // Original name: bezier_1, environment: var4
                            var3 = function(arg0) { // Original name: bezier, environment: var1
                                _fun8175: for (var _fun8175_ip = 0;;) switch (_fun8175_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = var3.map;
                                        var0 = function(arg0) { // Environment: var1
                                            var2 = _closure2_slot205;
                                            var0 = var2.prototype;
                                            var1 = Object.create(var0, {
                                                constructor: {
                                                    value: var2
                                                }
                                            });
                                            var3 = arg0;
                                            var4 = var1;
                                            var0 = new var4[var2](var3, var2);
                                            var0 = var0 instanceof Object ? var0 : var1;
                                            return var0;
                                        };
                                        var4 = var2.bind(var3)(var0);
                                        var0 = var4.length;
                                        var3 = 2;
                                        if (!(var3 !== var0)) {
                                            _fun8175_ip = 367;
                                            continue _fun8175
                                        }
                                    case 35:
                                        var0 = var4.length;
                                        var5 = 3;
                                        if (!(var5 !== var0)) {
                                            _fun8175_ip = 316;
                                            continue _fun8175
                                        }
                                    case 50:
                                        var2 = var4.length;
                                        var0 = 4;
                                        if (!(var0 !== var2)) {
                                            _fun8175_ip = 257;
                                            continue _fun8175
                                        }
                                    case 65:
                                        var2 = var4.length;
                                        var0 = 5;
                                        if (!(!(var2 >= var0))) {
                                            _fun8175_ip = 113;
                                            continue _fun8175
                                        }
                                    case 77:
                                        var0 = global;
                                        var6 = var0.RangeError;
                                        var0 = var6.prototype;
                                        var2 = Object.create(var0, {
                                            constructor: {
                                                value: var6
                                            }
                                        });
                                        var14 = 'No point in running bezier with only one color.';
                                        var15 = var2;
                                        var0 = new var15[var6](var14, var13);
                                        var0 = var0 instanceof Object ? var0 : var2;
                                        throw var0;
                                    case 113:
                                        var2 = var4.map;
                                        var0 = function(arg0) { // Environment: var1
                                            var1 = arg0;
                                            var0 = var1.lab;
                                            var0 = var0.bind(var1)();
                                            return var0;
                                        };
                                        var0 = var2.bind(var4)(var0);
                                        var _closure4_slot4 = var0;
                                        var0 = var4.length;
                                        var9 = 1;
                                        var8 = var0 - var9;
                                        var _closure4_slot6 = var8;
                                        var6 = [1, 1];
                                        var2 = var9;
                                        var0 = var6;
                                        if (!(var9 < var8)) {
                                            _fun8175_ip = 243;
                                            continue _fun8175
                                        }
                                    case 168:
                                        var10 = [1];
                                        var11 = var6.length;
                                        var11 = var9 <= var11;
                                        var12 = var9;
                                        if (!var11) {
                                            _fun8175_ip = 230;
                                            continue _fun8175
                                        }
                                    case 193:
                                        var13 = var6[var12];
                                        if (var13) {
                                            _fun8175_ip = 202;
                                            continue _fun8175
                                        }
                                    case 200:
                                        var13 = 0;
                                    case 202:
                                        var11 = var12 - var9;
                                        var11 = var6[var11];
                                        var11 = var13 + var11;
                                        var10[var12] = var11;
                                        var12 = var12 + 1;
                                        var11 = var6.length;
                                        if (var12 <= var11) {
                                            _fun8175_ip = 193;
                                            continue _fun8175
                                        }
                                    case 230:
                                        var2 = var2 + 1;
                                        var6 = var10;
                                        var0 = var6;
                                        if (var2 < var8) {
                                            _fun8175_ip = 168;
                                            continue _fun8175
                                        }
                                    case 243:
                                        var _closure4_slot5 = var0;
                                        var0 = function(arg0) { // Original name: I, environment: var1
                                            var2 = arg0;
                                            var _closure5_slot0 = var2;
                                            var1 = 1;
                                            var1 = var1 - var2;
                                            var _closure5_slot1 = var1;
                                            var2 = [0, 1, 2];
                                            var1 = var2.map;
                                            var0 = function(arg0) { // Environment: var0
                                                var1 = arg0;
                                                var _closure6_slot0 = var1;
                                                var3 = _closure4_slot4;
                                                var2 = var3.reduce;
                                                var1 = function(arg0, arg1, arg2) { // Environment: var0
                                                    var4 = arg2;
                                                    var0 = _closure4_slot5;
                                                    var3 = var0[var4];
                                                    var2 = global;
                                                    var7 = var2.Math;
                                                    var6 = var7.pow;
                                                    var5 = _closure5_slot1;
                                                    var1 = _closure4_slot6;
                                                    var1 = var1 - var4;
                                                    var1 = var6.bind(var7)(var5, var1);
                                                    var1 = var3 * var1;
                                                    var3 = var2.Math;
                                                    var2 = var3.pow;
                                                    var0 = _closure5_slot0;
                                                    var0 = var2.bind(var3)(var0, var4);
                                                    var1 = var1 * var0;
                                                    var2 = _closure6_slot0;
                                                    var0 = arg1;
                                                    var0 = var0[var2];
                                                    var1 = var1 * var0;
                                                    var0 = arg0;
                                                    var0 = var0 + var1;
                                                    return var0;
                                                };
                                                var0 = 0;
                                                var0 = var2.bind(var3)(var1, var0);
                                                return var0;
                                            };
                                            var5 = var1.bind(var2)(var0);
                                            var2 = _closure2_slot205;
                                            var0 = var2.prototype;
                                            var1 = Object.create(var0, {
                                                constructor: {
                                                    value: var2
                                                }
                                            });
                                            var4 = 'lab';
                                            var6 = var1;
                                            var0 = new var6[var2](var5, var4, var3);
                                            var0 = var0 instanceof Object ? var0 : var1;
                                            return var0;
                                        };
                                        _fun8175_ip = 408;
                                        continue _fun8175;
                                    case 257:
                                        var6 = var4.map;
                                        var2 = function(arg0) { // Environment: var1
                                            var1 = arg0;
                                            var0 = var1.lab;
                                            var0 = var0.bind(var1)();
                                            return var0;
                                        };
                                        var2 = var6.bind(var4)(var2);
                                        var6 = 0;
                                        var6 = var2[var6];
                                        var _closure4_slot0 = var6;
                                        var6 = 1;
                                        var6 = var2[var6];
                                        var _closure4_slot1 = var6;
                                        var6 = var2[var3];
                                        var _closure4_slot2 = var6;
                                        var2 = var2[var5];
                                        var _closure4_slot3 = var2;
                                        var0 = function(arg0) { // Original name: I, environment: var1
                                            var1 = arg0;
                                            var _closure5_slot0 = var1;
                                            var2 = [0, 1, 2];
                                            var1 = var2.map;
                                            var0 = function(arg0) { // Environment: var0
                                                var5 = arg0;
                                                var6 = _closure5_slot0;
                                                var2 = 1;
                                                var7 = var2 - var6;
                                                var0 = var2 - var6;
                                                var4 = var2 - var6;
                                                var3 = _closure4_slot0;
                                                var3 = var3[var5];
                                                var0 = var7 * var0;
                                                var0 = var0 * var4;
                                                var3 = var0 * var3;
                                                var0 = var2 - var6;
                                                var7 = var2 - var6;
                                                var4 = 3;
                                                var0 = var4 * var0;
                                                var0 = var0 * var7;
                                                var7 = var0 * var6;
                                                var0 = _closure4_slot1;
                                                var0 = var0[var5];
                                                var0 = var7 * var0;
                                                var2 = var2 - var6;
                                                var2 = var4 * var2;
                                                var2 = var2 * var6;
                                                var4 = var2 * var6;
                                                var2 = _closure4_slot2;
                                                var2 = var2[var5];
                                                var2 = var4 * var2;
                                                var4 = var6 * var6;
                                                var4 = var4 * var6;
                                                var1 = _closure4_slot3;
                                                var1 = var1[var5];
                                                var1 = var4 * var1;
                                                var0 = var3 + var0;
                                                var0 = var0 + var2;
                                                var0 = var0 + var1;
                                                return var0;
                                            };
                                            var5 = var1.bind(var2)(var0);
                                            var2 = _closure2_slot205;
                                            var0 = var2.prototype;
                                            var1 = Object.create(var0, {
                                                constructor: {
                                                    value: var2
                                                }
                                            });
                                            var4 = 'lab';
                                            var6 = var1;
                                            var0 = new var6[var2](var5, var4, var3);
                                            var0 = var0 instanceof Object ? var0 : var1;
                                            return var0;
                                        };
                                        _fun8175_ip = 408;
                                        continue _fun8175;
                                    case 316:
                                        var5 = var4.map;
                                        var2 = function(arg0) { // Environment: var1
                                            var1 = arg0;
                                            var0 = var1.lab;
                                            var0 = var0.bind(var1)();
                                            return var0;
                                        };
                                        var2 = var5.bind(var4)(var2);
                                        var5 = 0;
                                        var5 = var2[var5];
                                        _closure4_slot0 = var5;
                                        var5 = 1;
                                        var5 = var2[var5];
                                        _closure4_slot1 = var5;
                                        var2 = var2[var3];
                                        _closure4_slot2 = var2;
                                        var0 = function(arg0) { // Original name: I, environment: var1
                                            var1 = arg0;
                                            var _closure5_slot0 = var1;
                                            var2 = [0, 1, 2];
                                            var1 = var2.map;
                                            var0 = function(arg0) { // Environment: var0
                                                var4 = arg0;
                                                var3 = _closure5_slot0;
                                                var0 = 1;
                                                var6 = var0 - var3;
                                                var2 = var0 - var3;
                                                var5 = _closure4_slot0;
                                                var5 = var5[var4];
                                                var2 = var6 * var2;
                                                var2 = var2 * var5;
                                                var5 = var0 - var3;
                                                var0 = 2;
                                                var0 = var0 * var5;
                                                var5 = var0 * var3;
                                                var0 = _closure4_slot1;
                                                var0 = var0[var4];
                                                var0 = var5 * var0;
                                                var3 = var3 * var3;
                                                var1 = _closure4_slot2;
                                                var1 = var1[var4];
                                                var1 = var3 * var1;
                                                var0 = var2 + var0;
                                                var0 = var0 + var1;
                                                return var0;
                                            };
                                            var5 = var1.bind(var2)(var0);
                                            var2 = _closure2_slot205;
                                            var0 = var2.prototype;
                                            var1 = Object.create(var0, {
                                                constructor: {
                                                    value: var2
                                                }
                                            });
                                            var4 = 'lab';
                                            var6 = var1;
                                            var0 = new var6[var2](var5, var4, var3);
                                            var0 = var0 instanceof Object ? var0 : var1;
                                            return var0;
                                        };
                                        _fun8175_ip = 408;
                                        continue _fun8175;
                                    case 367:
                                        var3 = var4.map;
                                        var2 = function(arg0) { // Environment: var1
                                            var1 = arg0;
                                            var0 = var1.lab;
                                            var0 = var0.bind(var1)();
                                            return var0;
                                        };
                                        var3 = var3.bind(var4)(var2);
                                        var2 = 0;
                                        var2 = var3[var2];
                                        _closure4_slot0 = var2;
                                        var2 = 1;
                                        var2 = var3[var2];
                                        _closure4_slot1 = var2;
                                        var0 = function(arg0) { // Original name: I, environment: var1
                                            var1 = arg0;
                                            var _closure5_slot0 = var1;
                                            var2 = [0, 1, 2];
                                            var1 = var2.map;
                                            var0 = function(arg0) { // Environment: var0
                                                var4 = arg0;
                                                var1 = _closure4_slot0;
                                                var1 = var1[var4];
                                                var2 = _closure5_slot0;
                                                var3 = _closure4_slot1;
                                                var3 = var3[var4];
                                                var0 = _closure4_slot0;
                                                var0 = var0[var4];
                                                var0 = var3 - var0;
                                                var0 = var2 * var0;
                                                var0 = var1 + var0;
                                                return var0;
                                            };
                                            var5 = var1.bind(var2)(var0);
                                            var2 = _closure2_slot205;
                                            var0 = var2.prototype;
                                            var1 = Object.create(var0, {
                                                constructor: {
                                                    value: var2
                                                }
                                            });
                                            var4 = 'lab';
                                            var6 = var1;
                                            var0 = new var6[var2](var5, var4, var3);
                                            var0 = var0 instanceof Object ? var0 : var1;
                                            return var0;
                                        };
                                    case 408:
                                        return var0;
                                }
                            };
                            var2 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var2)(var0);
                            var _closure3_slot0 = var0;
                            var1 = function() { // Environment: var1
                                var2 = _closure2_slot206;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0.scale = var1;
                            return var0;
                        };
                        var0.bezier = var9;
                        var0.blend = var8;
                        var8 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: cubehelix, environment: var4
                            _fun8191: for (var _fun8191_ip = 0;;) switch (_fun8191_ip) {
                                case 0:
                                    var0 = arg0;
                                    var _closure3_slot0 = var0;
                                    var2 = arg1;
                                    var _closure3_slot1 = var2;
                                    var2 = arg2;
                                    var _closure3_slot2 = var2;
                                    var2 = arg3;
                                    var _closure3_slot3 = var2;
                                    var2 = arg4;
                                    var _closure3_slot4 = var2;
                                    var4 = undefined;
                                    if (!(var4 === var0)) {
                                        _fun8191_ip = 53;
                                        continue _fun8191
                                    }
                                case 43:
                                    var0 = 300;
                                    _closure3_slot0 = var0;
                                case 53:
                                    var0 = _closure3_slot1;
                                    if (!(var4 === var0)) {
                                        _fun8191_ip = 75;
                                        continue _fun8191
                                    }
                                case 61:
                                    var0 = -1.5;
                                    _closure3_slot1 = var0;
                                case 75:
                                    var0 = _closure3_slot2;
                                    if (!(var4 === var0)) {
                                        _fun8191_ip = 90;
                                        continue _fun8191
                                    }
                                case 83:
                                    var0 = 1;
                                    _closure3_slot2 = var0;
                                case 90:
                                    var0 = _closure3_slot3;
                                    if (!(var4 === var0)) {
                                        _fun8191_ip = 105;
                                        continue _fun8191
                                    }
                                case 98:
                                    var0 = 1;
                                    _closure3_slot3 = var0;
                                case 105:
                                    var0 = _closure3_slot4;
                                    if (!(var4 === var0)) {
                                        _fun8191_ip = 127;
                                        continue _fun8191
                                    }
                                case 113:
                                    var0 = [0, 1];
                                    _closure3_slot4 = var0;
                                case 127:
                                    var3 = 0;
                                    var _closure3_slot6 = var3;
                                    var2 = _closure2_slot209;
                                    var0 = _closure3_slot4;
                                    var2 = var2.bind(var4)(var0);
                                    var0 = 'array';
                                    if (!(var0 !== var2)) {
                                        _fun8191_ip = 187;
                                        continue _fun8191
                                    }
                                case 157:
                                    var _closure3_slot5 = var3;
                                    var2 = _closure3_slot4;
                                    var0 = new Array(2);
                                    var0[0] = var2;
                                    var2 = _closure3_slot4;
                                    var0[1] = var2;
                                    _closure3_slot4 = var0;
                                    _fun8191_ip = 214;
                                    continue _fun8191;
                                case 187:
                                    var2 = _closure3_slot4;
                                    var0 = 1;
                                    var2 = var2[var0];
                                    var0 = _closure3_slot4;
                                    var0 = var0[var3];
                                    var0 = var2 - var0;
                                    _closure3_slot5 = var0;
                                case 214:
                                    var0 = function(arg0) { // Original name: f, environment: var1
                                        _fun8192: for (var _fun8192_ip = 0;;) switch (_fun8192_ip) {
                                            case 0:
                                                var6 = arg0;
                                                var2 = _closure2_slot211;
                                                var3 = _closure3_slot0;
                                                var1 = 120;
                                                var5 = var3 + var1;
                                                var1 = _closure3_slot1;
                                                var3 = var1 * var6;
                                                var1 = 360;
                                                var1 = var5 / var1;
                                                var1 = var1 + var3;
                                                var3 = var2 * var1;
                                                var7 = _closure2_slot212;
                                                var1 = _closure3_slot4;
                                                var8 = 0;
                                                var2 = var1[var8];
                                                var1 = _closure3_slot5;
                                                var1 = var1 * var6;
                                                var5 = var2 + var1;
                                                var1 = _closure3_slot3;
                                                var2 = undefined;
                                                var7 = var7.bind(var2)(var5, var1);
                                                var1 = _closure3_slot6;
                                                if (!(var8 === var1)) {
                                                    _fun8192_ip = 102;
                                                    continue _fun8192
                                                }
                                            case 96:
                                                var1 = _closure3_slot2;
                                                _fun8192_ip = 122;
                                                continue _fun8192;
                                            case 102:
                                                var5 = _closure3_slot2;
                                                var5 = var5[var8];
                                                var4 = _closure3_slot6;
                                                var4 = var6 * var4;
                                                var1 = var5 + var4;
                                            case 122:
                                                var5 = var1 * var7;
                                                var4 = 1;
                                                var1 = var4 - var7;
                                                var5 = var5 * var1;
                                                var1 = 2;
                                                var8 = var5 / var1;
                                                var1 = _closure2_slot214;
                                                var9 = var1.bind(var2)(var3);
                                                var1 = _closure2_slot213;
                                                var11 = var1.bind(var2)(var3);
                                                var1 = _closure2_slot215;
                                                var3 = _closure2_slot210;
                                                var0 = -0.14861;
                                                var5 = var0 * var9;
                                                var0 = 1.78277;
                                                var0 = var0 * var11;
                                                var0 = var5 + var0;
                                                var0 = var8 * var0;
                                                var5 = var7 + var0;
                                                var0 = new Array(4);
                                                var6 = 255;
                                                var5 = var6 * var5;
                                                var0[0] = var5;
                                                var5 = -0.29227;
                                                var10 = var5 * var9;
                                                var5 = 0.90649;
                                                var5 = var5 * var11;
                                                var5 = var10 - var5;
                                                var5 = var8 * var5;
                                                var5 = var7 + var5;
                                                var5 = var6 * var5;
                                                var0[1] = var5;
                                                var5 = 1.97294;
                                                var5 = var5 * var9;
                                                var5 = var8 * var5;
                                                var5 = var7 + var5;
                                                var5 = var6 * var5;
                                                var0[2] = var5;
                                                var0[3] = var4;
                                                var0 = var3.bind(var2)(var0);
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot7 = var0;
                                    var2 = function(arg0) { // Environment: var1
                                        _fun8193: for (var _fun8193_ip = 0;;) switch (_fun8193_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = null;
                                                if (!(var0 != var1)) {
                                                    _fun8193_ip = 22;
                                                    continue _fun8193
                                                }
                                            case 9:
                                                _closure3_slot0 = var1;
                                                var0 = _closure3_slot7;
                                                _fun8193_ip = 29;
                                                continue _fun8193;
                                            case 22:
                                                var0 = _closure3_slot0;
                                            case 29:
                                                return var0;
                                        }
                                    };
                                    var0.start = var2;
                                    var2 = function(arg0) { // Environment: var1
                                        _fun8194: for (var _fun8194_ip = 0;;) switch (_fun8194_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = null;
                                                if (!(var0 != var1)) {
                                                    _fun8194_ip = 22;
                                                    continue _fun8194
                                                }
                                            case 9:
                                                _closure3_slot1 = var1;
                                                var0 = _closure3_slot7;
                                                _fun8194_ip = 29;
                                                continue _fun8194;
                                            case 22:
                                                var0 = _closure3_slot1;
                                            case 29:
                                                return var0;
                                        }
                                    };
                                    var0.rotations = var2;
                                    var2 = function(arg0) { // Environment: var1
                                        _fun8195: for (var _fun8195_ip = 0;;) switch (_fun8195_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = null;
                                                if (!(var0 != var1)) {
                                                    _fun8195_ip = 22;
                                                    continue _fun8195
                                                }
                                            case 9:
                                                _closure3_slot3 = var1;
                                                var0 = _closure3_slot7;
                                                _fun8195_ip = 29;
                                                continue _fun8195;
                                            case 22:
                                                var0 = _closure3_slot3;
                                            case 29:
                                                return var0;
                                        }
                                    };
                                    var0.gamma = var2;
                                    var2 = function(arg0) { // Environment: var1
                                        _fun8196: for (var _fun8196_ip = 0;;) switch (_fun8196_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var0 = null;
                                                if (!(var0 != var3)) {
                                                    _fun8196_ip = 97;
                                                    continue _fun8196
                                                }
                                            case 9:
                                                var2 = _closure2_slot209;
                                                _closure3_slot2 = var3;
                                                var1 = undefined;
                                                var2 = var2.bind(var1)(var3);
                                                var1 = 'array';
                                                if (!(var1 !== var2)) {
                                                    _fun8196_ip = 46;
                                                    continue _fun8196
                                                }
                                            case 38:
                                                var1 = 0;
                                                _closure3_slot6 = var1;
                                                _fun8196_ip = 91;
                                                continue _fun8196;
                                            case 46:
                                                var1 = _closure3_slot2;
                                                var2 = 1;
                                                var4 = var1[var2];
                                                var1 = _closure3_slot2;
                                                var3 = 0;
                                                var1 = var1[var3];
                                                var1 = var4 - var1;
                                                _closure3_slot6 = var1;
                                                if (!(var3 == var1)) {
                                                    _fun8196_ip = 91;
                                                    continue _fun8196
                                                }
                                            case 79:
                                                var1 = _closure3_slot2;
                                                var1 = var1[var2];
                                                _closure3_slot2 = var1;
                                            case 91:
                                                var0 = _closure3_slot7;
                                                _fun8196_ip = 104;
                                                continue _fun8196;
                                            case 97:
                                                var0 = _closure3_slot2;
                                            case 104:
                                                return var0;
                                        }
                                    };
                                    var0.hue = var2;
                                    var2 = function(arg0) { // Environment: var1
                                        _fun8197: for (var _fun8197_ip = 0;;) switch (_fun8197_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var0 = null;
                                                if (!(var0 != var3)) {
                                                    _fun8197_ip = 95;
                                                    continue _fun8197
                                                }
                                            case 9:
                                                var1 = _closure2_slot209;
                                                var0 = undefined;
                                                var1 = var1.bind(var0)(var3);
                                                var0 = 'array';
                                                if (!(var0 !== var1)) {
                                                    _fun8197_ip = 58;
                                                    continue _fun8197
                                                }
                                            case 31:
                                                var0 = new Array(2);
                                                var0[0] = var3;
                                                var0[1] = var3;
                                                _closure3_slot4 = var0;
                                                var0 = 0;
                                                _closure3_slot5 = var0;
                                                _fun8197_ip = 86;
                                                continue _fun8197;
                                            case 58:
                                                _closure3_slot4 = var3;
                                                var0 = 1;
                                                var2 = var3[var0];
                                                var0 = 0;
                                                var0 = var3[var0];
                                                var0 = var2 - var0;
                                                _closure3_slot5 = var0;
                                            case 86:
                                                var0 = _closure3_slot7;
                                                _fun8197_ip = 102;
                                                continue _fun8197;
                                            case 95:
                                                var0 = _closure3_slot4;
                                            case 102:
                                                return var0;
                                        }
                                    };
                                    var0.lightness = var2;
                                    var2 = function() { // Environment: var1
                                        var2 = _closure2_slot215;
                                        var1 = var2.scale;
                                        var0 = _closure3_slot7;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var0.scale = var2;
                                    var2 = var0.hue;
                                    var1 = _closure3_slot2;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var0.cubehelix = var8;
                        var0.interpolate = var7;
                        var0.mix = var7;
                        var7 = function() { // Original name: random_1, environment: var4
                            _fun8199: for (var _fun8199_ip = 0;;) switch (_fun8199_ip) {
                                case 0:
                                    var7 = '#';
                                    var5 = '0123456789abcdef';
                                    var4 = undefined;
                                    var2 = 16;
                                    var1 = 6;
                                    var6 = 0;
                                case 23:
                                    var8 = var5.charAt;
                                    var9 = _closure2_slot217;
                                    var3 = _closure2_slot218;
                                    var3 = var3.bind(var4)();
                                    var3 = var2 * var3;
                                    var3 = var9.bind(var4)(var3);
                                    var3 = var8.bind(var5)(var3);
                                    var3 = var7 + var3;
                                    var6 = var6 + 1;
                                    var7 = var3;
                                    if (var6 < var1) {
                                        _fun8199_ip = 23;
                                        continue _fun8199
                                    }
                                case 69:
                                    var2 = _closure2_slot216;
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var10 = 'hex';
                                    var12 = var1;
                                    var11 = var3;
                                    var0 = new var12[var2](var11, var10, var9);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var0.random = var7;
                        var0.scale = var6;
                        var6 = var5.analyze;
                        var0.analyze = var6;
                        var6 = function(arg0, arg1) { // Original name: contrast, environment: var4
                            _fun8200: for (var _fun8200_ip = 0;;) switch (_fun8200_ip) {
                                case 0:
                                    var3 = _closure2_slot226;
                                    var1 = var3.prototype;
                                    var2 = Object.create(var1, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var4 = arg0;
                                    var5 = var2;
                                    var1 = new var5[var3](var4, var3);
                                    var2 = var1 instanceof Object ? var1 : var2;
                                    var3 = _closure2_slot226;
                                    var0 = var3.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var4 = arg1;
                                    var5 = var1;
                                    var0 = new var5[var3](var4, var3);
                                    var1 = var0 instanceof Object ? var0 : var1;
                                    var0 = var2.luminance;
                                    var2 = var0.bind(var2)();
                                    var0 = var1.luminance;
                                    var3 = var0.bind(var1)();
                                    if (!(!(var2 > var3))) {
                                        _fun8200_ip = 105;
                                        continue _fun8200
                                    }
                                case 81:
                                    var0 = 0.05;
                                    var1 = var3 + var0;
                                    var0 = var2 + var0;
                                    var0 = var1 / var0;
                                    _fun8200_ip = 127;
                                    continue _fun8200;
                                case 105:
                                    var1 = 0.05;
                                    var2 = var2 + var1;
                                    var1 = var3 + var1;
                                    var0 = var2 / var1;
                                case 127:
                                    return var0;
                            }
                        };
                        var0.contrast = var6;
                        var6 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: deltaE, environment: var4
                            _fun8201: for (var _fun8201_ip = 0;;) switch (_fun8201_ip) {
                                case 0:
                                    var15 = arg2;
                                    var11 = arg3;
                                    var9 = arg4;
                                    var3 = undefined;
                                    if (!(var3 === var15)) {
                                        _fun8201_ip = 20;
                                        continue _fun8201
                                    }
                                case 17:
                                    var15 = 1;
                                case 20:
                                    if (!(var3 === var11)) {
                                        _fun8201_ip = 27;
                                        continue _fun8201
                                    }
                                case 24:
                                    var11 = 1;
                                case 27:
                                    if (!(var3 === var9)) {
                                        _fun8201_ip = 34;
                                        continue _fun8201
                                    }
                                case 31:
                                    var9 = 1;
                                case 34:
                                    var7 = function(arg0) { // Original name: rad2deg, environment: var0
                                        var1 = 360;
                                        var0 = arg0;
                                        var1 = var1 * var0;
                                        var2 = _closure2_slot237;
                                        var0 = 2;
                                        var0 = var0 * var2;
                                        var0 = var1 / var0;
                                        return var0;
                                    };
                                    var17 = function(arg0) { // Original name: deg2rad, environment: var0
                                        var1 = _closure2_slot237;
                                        var0 = 2;
                                        var1 = var0 * var1;
                                        var0 = arg0;
                                        var1 = var1 * var0;
                                        var0 = 360;
                                        var0 = var1 / var0;
                                        return var0;
                                    };
                                    var4 = _closure2_slot227;
                                    var1 = var4.prototype;
                                    var2 = Object.create(var1, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var30 = arg0;
                                    var31 = var2;
                                    var1 = new var31[var4](var30, var29);
                                    var6 = var1 instanceof Object ? var1 : var2;
                                    var4 = _closure2_slot227;
                                    var1 = var4.prototype;
                                    var2 = Object.create(var1, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var30 = arg1;
                                    var31 = var2;
                                    var1 = new var31[var4](var30, var29);
                                    var8 = var1 instanceof Object ? var1 : var2;
                                    var1 = global;
                                    var5 = var1.Array;
                                    var4 = var5.from;
                                    var2 = var6.lab;
                                    var2 = var2.bind(var6)();
                                    var4 = var4.bind(var5)(var2);
                                    var2 = 0;
                                    var13 = var4[var2];
                                    var16 = 1;
                                    var5 = var4[var16];
                                    var14 = 2;
                                    var22 = var4[var14];
                                    var6 = var1.Array;
                                    var4 = var6.from;
                                    var1 = var8.lab;
                                    var1 = var1.bind(var8)();
                                    var1 = var4.bind(var6)(var1);
                                    var10 = var1[var2];
                                    var4 = var1[var16];
                                    var18 = var1[var14];
                                    var1 = var13 + var10;
                                    var6 = var1 / var14;
                                    var8 = _closure2_slot228;
                                    var1 = _closure2_slot229;
                                    var12 = var1.bind(var3)(var5, var14);
                                    var1 = _closure2_slot229;
                                    var1 = var1.bind(var3)(var22, var14);
                                    var1 = var12 + var1;
                                    var8 = var8.bind(var3)(var1);
                                    var12 = _closure2_slot228;
                                    var1 = _closure2_slot229;
                                    var19 = var1.bind(var3)(var4, var14);
                                    var1 = _closure2_slot229;
                                    var1 = var1.bind(var3)(var18, var14);
                                    var1 = var19 + var1;
                                    var1 = var12.bind(var3)(var1);
                                    var1 = var8 + var1;
                                    var19 = var1 / var14;
                                    var8 = _closure2_slot228;
                                    var1 = _closure2_slot229;
                                    var21 = 7;
                                    var12 = var1.bind(var3)(var19, var21);
                                    var1 = _closure2_slot229;
                                    var19 = var1.bind(var3)(var19, var21);
                                    var1 = _closure2_slot229;
                                    var20 = 25;
                                    var1 = var1.bind(var3)(var20, var21);
                                    var1 = var19 + var1;
                                    var1 = var12 / var1;
                                    var1 = var8.bind(var3)(var1);
                                    var8 = var16 - var1;
                                    var1 = 0.5;
                                    var1 = var1 * var8;
                                    var1 = var16 + var1;
                                    var8 = var5 * var1;
                                    var12 = var4 * var1;
                                    var4 = _closure2_slot228;
                                    var1 = _closure2_slot229;
                                    var5 = var1.bind(var3)(var8, var14);
                                    var1 = _closure2_slot229;
                                    var1 = var1.bind(var3)(var22, var14);
                                    var1 = var5 + var1;
                                    var5 = var4.bind(var3)(var1);
                                    var4 = _closure2_slot228;
                                    var1 = _closure2_slot229;
                                    var19 = var1.bind(var3)(var12, var14);
                                    var1 = _closure2_slot229;
                                    var1 = var1.bind(var3)(var18, var14);
                                    var1 = var19 + var1;
                                    var4 = var4.bind(var3)(var1);
                                    var1 = var5 + var4;
                                    var19 = var1 / var14;
                                    var1 = _closure2_slot232;
                                    var1 = var1.bind(var3)(var22, var8);
                                    var8 = var7.bind(var3)(var1);
                                    var1 = _closure2_slot232;
                                    var1 = var1.bind(var3)(var18, var12);
                                    var7 = var7.bind(var3)(var1);
                                    var25 = var8;
                                    if (!(!(var25 >= var2))) {
                                        _fun8201_ip = 473;
                                        continue _fun8201
                                    }
                                case 463:
                                    var1 = 360;
                                    var25 = var8 + var1;
                                case 473:
                                    var24 = var7;
                                    if (!(!(var24 >= var2))) {
                                        _fun8201_ip = 490;
                                        continue _fun8201
                                    }
                                case 480:
                                    var1 = 360;
                                    var24 = var7 + var1;
                                case 490:
                                    var7 = _closure2_slot233;
                                    var1 = var25 - var24;
                                    var1 = var7.bind(var3)(var1);
                                    var28 = 180;
                                    if (!(!(var1 > var28))) {
                                        _fun8201_ip = 520;
                                        continue _fun8201
                                    }
                                case 510:
                                    var1 = var25 + var24;
                                    var22 = var1 / var14;
                                    _fun8201_ip = 538;
                                    continue _fun8201;
                                case 520:
                                    var7 = var25 + var24;
                                    var1 = 360;
                                    var1 = var7 + var1;
                                    var22 = var1 / var14;
                                case 538:
                                    var7 = _closure2_slot234;
                                    var8 = 30;
                                    var1 = var22 - var8;
                                    var1 = var17.bind(var3)(var1);
                                    var7 = var7.bind(var3)(var1);
                                    var1 = 0.17;
                                    var1 = var1 * var7;
                                    var12 = _closure2_slot234;
                                    var7 = var14 * var22;
                                    var7 = var17.bind(var3)(var7);
                                    var12 = var12.bind(var3)(var7);
                                    var7 = 0.24;
                                    var23 = var7 * var12;
                                    var12 = _closure2_slot234;
                                    var7 = 3;
                                    var18 = var7 * var22;
                                    var7 = 6;
                                    var7 = var18 + var7;
                                    var7 = var17.bind(var3)(var7);
                                    var12 = var12.bind(var3)(var7);
                                    var7 = 0.32;
                                    var18 = var7 * var12;
                                    var12 = _closure2_slot234;
                                    var7 = 4;
                                    var26 = var7 * var22;
                                    var7 = 63;
                                    var7 = var26 - var7;
                                    var7 = var17.bind(var3)(var7);
                                    var12 = var12.bind(var3)(var7);
                                    var7 = 0.2;
                                    var12 = var7 * var12;
                                    var26 = var24 - var25;
                                    var7 = _closure2_slot233;
                                    var27 = var7.bind(var3)(var26);
                                    var7 = var26;
                                    if (!(!(var27 <= var28))) {
                                        _fun8201_ip = 738;
                                        continue _fun8201
                                    }
                                case 709:
                                    if (!(!(var24 <= var25))) {
                                        _fun8201_ip = 725;
                                        continue _fun8201
                                    }
                                case 713:
                                    var24 = 360;
                                    var24 = var26 - var24;
                                    _fun8201_ip = 735;
                                    continue _fun8201;
                                case 725:
                                    var25 = 360;
                                    var24 = var26 + var25;
                                case 735:
                                    var7 = var24;
                                case 738:
                                    var25 = _closure2_slot228;
                                    var24 = var5 * var4;
                                    var24 = var25.bind(var3)(var24);
                                    var24 = var14 * var24;
                                    var25 = _closure2_slot235;
                                    var7 = var17.bind(var3)(var7);
                                    var7 = var7 / var14;
                                    var7 = var25.bind(var3)(var7);
                                    var7 = var24 * var7;
                                    var13 = var10 - var13;
                                    var10 = var4 - var5;
                                    var4 = _closure2_slot229;
                                    var5 = 50;
                                    var25 = var6 - var5;
                                    var5 = var4.bind(var3)(var25, var14);
                                    var4 = 0.015;
                                    var6 = var4 * var5;
                                    var24 = _closure2_slot228;
                                    var5 = _closure2_slot229;
                                    var25 = var5.bind(var3)(var25, var14);
                                    var5 = 20;
                                    var5 = var5 + var25;
                                    var5 = var24.bind(var3)(var5);
                                    var5 = var6 / var5;
                                    var6 = 0.045;
                                    var6 = var6 * var19;
                                    var6 = var16 + var6;
                                    var4 = var4 * var19;
                                    var1 = var16 - var1;
                                    var1 = var1 + var23;
                                    var1 = var1 + var18;
                                    var1 = var1 - var12;
                                    var1 = var4 * var1;
                                    var1 = var16 + var1;
                                    var12 = _closure2_slot236;
                                    var18 = _closure2_slot229;
                                    var4 = 275;
                                    var4 = var22 - var4;
                                    var4 = var4 / var20;
                                    var4 = var18.bind(var3)(var4, var14);
                                    var4 = -var4;
                                    var4 = var12.bind(var3)(var4);
                                    var4 = var8 * var4;
                                    var12 = _closure2_slot228;
                                    var8 = _closure2_slot229;
                                    var18 = var8.bind(var3)(var19, var21);
                                    var8 = _closure2_slot229;
                                    var19 = var8.bind(var3)(var19, var21);
                                    var8 = _closure2_slot229;
                                    var8 = var8.bind(var3)(var20, var21);
                                    var8 = var19 + var8;
                                    var8 = var18 / var8;
                                    var12 = var12.bind(var3)(var8);
                                    var8 = -2;
                                    var8 = var8 * var12;
                                    var12 = _closure2_slot235;
                                    var4 = var17.bind(var3)(var4);
                                    var4 = var14 * var4;
                                    var4 = var12.bind(var3)(var4);
                                    var8 = var8 * var4;
                                    var4 = _closure2_slot228;
                                    var12 = _closure2_slot229;
                                    var5 = var16 + var5;
                                    var5 = var15 * var5;
                                    var5 = var13 / var5;
                                    var12 = var12.bind(var3)(var5, var14);
                                    var13 = _closure2_slot229;
                                    var5 = var11 * var6;
                                    var5 = var10 / var5;
                                    var5 = var13.bind(var3)(var5, var14);
                                    var12 = var12 + var5;
                                    var13 = _closure2_slot229;
                                    var5 = var9 * var1;
                                    var5 = var7 / var5;
                                    var5 = var13.bind(var3)(var5, var14);
                                    var5 = var12 + var5;
                                    var6 = var11 * var6;
                                    var6 = var10 / var6;
                                    var1 = var9 * var1;
                                    var6 = var8 * var6;
                                    var1 = var7 / var1;
                                    var1 = var6 * var1;
                                    var1 = var5 + var1;
                                    var5 = var4.bind(var3)(var1);
                                    var1 = _closure2_slot231;
                                    var4 = _closure2_slot230;
                                    var0 = 100;
                                    var0 = var4.bind(var3)(var0, var5);
                                    var0 = var1.bind(var3)(var2, var0);
                                    return var0;
                            }
                        };
                        var0.deltaE = var6;
                        var6 = function(arg0, arg1, arg2) { // Original name: distance, environment: var4
                            _fun8204: for (var _fun8204_ip = 0;;) switch (_fun8204_ip) {
                                case 0:
                                    var2 = arg2;
                                    var0 = undefined;
                                    if (!(var0 === var2)) {
                                        _fun8204_ip = 13;
                                        continue _fun8204
                                    }
                                case 9:
                                    var2 = 'lab';
                                case 13:
                                    var4 = _closure2_slot238;
                                    var1 = var4.prototype;
                                    var3 = Object.create(var1, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var13 = arg0;
                                    var14 = var3;
                                    var1 = new var14[var4](var13, var12);
                                    var3 = var1 instanceof Object ? var1 : var3;
                                    var4 = _closure2_slot238;
                                    var0 = var4.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var13 = arg1;
                                    var14 = var1;
                                    var0 = new var14[var4](var13, var12);
                                    var1 = var0 instanceof Object ? var0 : var1;
                                    var0 = var3.get;
                                    var9 = var0.bind(var3)(var2);
                                    var0 = var1.get;
                                    var8 = var0.bind(var1)(var2);
                                    var6 = var9;
                                    var0 = 0;
                                    var2 = 0;
                                    for (var3 in var6)
                                        case 105: {
                                            var2 = var0;
                                            case 117: var10 = var3;
                                            var11 = var9[var10];
                                            if (var11) {
                                                _fun8204_ip = 129;
                                                continue _fun8204
                                            }
                                            case 127: var11 = 0;
                                            case 129: var10 = var8[var10];
                                            if (var10) {
                                                _fun8204_ip = 138;
                                                continue _fun8204
                                            }
                                            case 136: var10 = 0;
                                            case 138: var10 = var11 - var10;
                                            var10 = var10 * var10;
                                            var0 = var0 + var10;
                                            _fun8204_ip = 105;
                                            continue _fun8204;
                                        }
                                case 152:
                                    var0 = global;
                                    var1 = var0.Math;
                                    var0 = var1.sqrt;
                                    var0 = var0.bind(var1)(var2);
                                    return var0;
                            }
                        };
                        var0.distance = var6;
                        var5 = var5.limits;
                        var0.limits = var5;
                        var4 = function() { // Original name: valid, environment: var4
                            _fun8205: for (var _fun8205_ip = 0;;) switch (_fun8205_ip) {
                                case 0:
                                    var3 = undefined;
                                    var0 = new Array(0);
                                    var1 = arguments.length;
                                    var1 = parseFloat(var1);
                                    var2 = var1 - 1;
                                    if (!var1) {
                                        _fun8205_ip = 38;
                                        continue _fun8205
                                    }
                                case 18:
                                    var4 = var0;
                                    var1 = arguments[var2];
                                    var4[var2] = var1;
                                    var1 = parseFloat(var2);
                                    var2 = var1 - 1;
                                    if (var1) {
                                        _fun8205_ip = 18;
                                        continue _fun8205
                                    }
                                case 38: // try_start_0
                                    var1 = global;
                                    var1 = var1.Function;
                                    var1 = var1.prototype;
                                    var3 = var1.bind;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot239;
                                    var5 = [null];
                                    var4 = var5.concat;
                                    var0 = var4.bind(var5)(var0);
                                    var1 = var2.bind(var3)(var1, var0);
                                    var0 = var1.prototype;
                                    var8 = Object.create(var0, {
                                        constructor: {
                                            value: var1
                                        }
                                    });
                                    var0 = new var8[var1](var7);
                                case 105: // try_end0
                                    var0 = true;
                                    return var0;
                                case 109: // catch_target0
                                    CatchBlockStart(arg_register = 0);
                                    var0 = false;
                                    return var0;
                            }
                        };
                        var0.valid = var4;
                        var0.scales = var3;
                        var0.colors = var2;
                        var0.brewer = var1;
                        return var0;
                }
            };
            var3 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var3 === var0)) {
                _fun7986_ip = 32;
                continue _fun7986
            }
        case 26:
            var0 = undefined;
            if (!(var0 === var1)) {
                _fun7986_ip = 129;
                continue _fun7986
            }
        case 32:
            var3 = global;
            var4 = var3.define;
            var6 = 'function';
            var4 = typeof var4;
            if (!(var6 === var4)) {
                _fun7986_ip = 66;
                continue _fun7986
            }
        case 51:
            var4 = var3.define;
            var4 = var4.amd;
            if (var4) {
                _fun7986_ip = 114;
                continue _fun7986
            }
        case 66:
            var4 = var3.globalThis;
            var6 = 'undefined';
            var4 = typeof var4;
            if (!(var6 === var4)) {
                _fun7986_ip = 94;
                continue _fun7986
            }
        case 83:
            if (var5) {
                _fun7986_ip = 92;
                continue _fun7986
            }
        case 86:
            var5 = var3.self;
        case 92:
            _fun7986_ip = 100;
            continue _fun7986;
        case 94:
            var5 = var3.globalThis;
        case 100:
            var4 = undefined;
            var4 = var2.bind(var4)();
            var5.chroma = var4;
            _fun7986_ip = 139;
            continue _fun7986;
        case 114:
            var4 = var3.define;
            var3 = undefined;
            var3 = var4.bind(var3)(var2);
            _fun7986_ip = 139;
            continue _fun7986;
        case 129:
            var0 = var2.bind(var0)();
            var1.exports = var0;
        case 139:
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);