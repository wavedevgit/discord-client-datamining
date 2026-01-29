// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
            var1 = module;
            var _closure1_slot0 = var1;
            var2 = function(arg0) { // Environment: var0
                    _fun42040: for (var _fun42040_ip = 0;;) switch (_fun42040_ip) {
                                case 0:
                                    var5 = arg0;
                                    var0 = function(arg0, arg1) { // Original name: add, environment: var1
                                        _fun42041: for (var _fun42041_ip = 0;;) switch (_fun42041_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = arg1;
                                                var4 = var1.constructor;
                                                var3 = var4.precision;
                                                var2 = var1.s;
                                                if (!var2) {
                                                    _fun42041_ip = 33;
                                                    continue _fun42041
                                                }
                                            case 25:
                                                var2 = var0.s;
                                                if (var2) {
                                                    _fun42041_ip = 91;
                                                    continue _fun42041
                                                }
                                            case 33:
                                                var5 = var0.s;
                                                var2 = var0;
                                                if (var5) {
                                                    _fun42041_ip = 67;
                                                    continue _fun42041
                                                }
                                            case 44:
                                                var5 = var4.prototype;
                                                var5 = Object.create(var5, {
                                                    constructor: {
                                                        value: var4
                                                    }
                                                });
                                                var15 = var5;
                                                var14 = var1;
                                                var4 = new var15[var4](var14, var13);
                                                var2 = var4 instanceof Object ? var4 : var5;
                                            case 67:
                                                var5 = _closure2_slot2;
                                                if (!var5) {
                                                    _fun42041_ip = 89;
                                                    continue _fun42041
                                                }
                                            case 77:
                                                var5 = _closure2_slot22;
                                                var4 = undefined;
                                                var4 = var5.bind(var4)(var2, var3);
                                            case 89:
                                                return var2;
                                            case 91:
                                                var5 = var1.d;
                                                var2 = var0.d;
                                                var4 = var1.e;
                                                var12 = var0.e;
                                                var1 = var5.slice;
                                                var1 = var1.bind(var5)();
                                                var8 = var4 - var12;
                                                var5 = var12;
                                                if (!var8) {
                                                    _fun42041_ip = 279;
                                                    continue _fun42041
                                                }
                                            case 133:
                                                var9 = 0;
                                                if (!(!(var8 < var9))) {
                                                    _fun42041_ip = 152;
                                                    continue _fun42041
                                                }
                                            case 139:
                                                var10 = var1.length;
                                                var7 = var2;
                                                var6 = var8;
                                                _fun42041_ip = 166;
                                                continue _fun42041;
                                            case 152:
                                                var6 = -var8;
                                                var10 = var2.length;
                                                var7 = var1;
                                                var4 = var12;
                                            case 166:
                                                var8 = global;
                                                var12 = var8.Math;
                                                var11 = var12.ceil;
                                                var8 = 7;
                                                var8 = var3 / var8;
                                                var11 = var11.bind(var12)(var8);
                                                if (!(!(var11 > var10))) {
                                                    _fun42041_ip = 205;
                                                    continue _fun42041
                                                }
                                            case 196:
                                                var8 = 1;
                                                var8 = var10 + var8;
                                                _fun42041_ip = 212;
                                                continue _fun42041;
                                            case 205:
                                                var10 = 1;
                                                var8 = var11 + var10;
                                            case 212:
                                                if (!(var6 > var8)) {
                                                    _fun42041_ip = 228;
                                                    continue _fun42041
                                                }
                                            case 216:
                                                var10 = 1;
                                                var7.length = var10;
                                                var6 = var8;
                                            case 228:
                                                var8 = var7.reverse;
                                                var8 = var8.bind(var7)();
                                                var6 = parseFloat(var6);
                                                var8 = var6 - 1;
                                                if (!var6) {
                                                    _fun42041_ip = 266;
                                                    continue _fun42041
                                                }
                                            case 247:
                                                var6 = var7.push;
                                                var6 = var6.bind(var7)(var9);
                                                var6 = parseFloat(var8);
                                                var8 = var6 - 1;
                                                if (var6) {
                                                    _fun42041_ip = 247;
                                                    continue _fun42041
                                                }
                                            case 266:
                                                var6 = var7.reverse;
                                                var6 = var6.bind(var7)();
                                                var5 = var4;
                                            case 279:
                                                var8 = var1.length;
                                                var9 = var2.length;
                                                var10 = var8 - var9;
                                                var7 = 0;
                                                var4 = var1;
                                                var6 = var2;
                                                if (!(var10 < var7)) {
                                                    _fun42041_ip = 314;
                                                    continue _fun42041
                                                }
                                            case 305:
                                                var9 = var8;
                                                var4 = var2;
                                                var6 = var1;
                                            case 314:
                                                var2 = 0;
                                                var8 = 0;
                                                if (!var9) {
                                                    _fun42041_ip = 380;
                                                    continue _fun42041
                                                }
                                            case 324:
                                                var9 = var9 - 1;
                                                var11 = var4[var9];
                                                var10 = var6[var9];
                                                var10 = var11 + var10;
                                                var11 = var10 + var2;
                                                var4[var9] = var11;
                                                var10 = _closure2_slot9;
                                                var10 = var11 / var10;
                                                var2 = var10 | 0;
                                                var12 = var4[var9];
                                                var11 = _closure2_slot9;
                                                var11 = var12 % var11;
                                                var4[var9] = var11;
                                                var8 = var2;
                                                if (var9) {
                                                    _fun42041_ip = 324;
                                                    continue _fun42041
                                                }
                                            case 380:
                                                var2 = var5;
                                                if (!var8) {
                                                    _fun42041_ip = 400;
                                                    continue _fun42041
                                                }
                                            case 386:
                                                var6 = var4.unshift;
                                                var6 = var6.bind(var4)(var8);
                                                var2 = var5 + 1;
                                            case 400:
                                                var5 = var4.length;
                                                var6 = var5 - 1;
                                                var5 = var4[var6];
                                                if (!(var7 == var5)) {
                                                    _fun42041_ip = 437;
                                                    continue _fun42041
                                                }
                                            case 416:
                                                var5 = var4.pop;
                                                var5 = var5.bind(var4)();
                                                var6 = var6 - 1;
                                                var5 = var4[var6];
                                                if (var7 == var5) {
                                                    _fun42041_ip = 416;
                                                    continue _fun42041
                                                }
                                            case 437:
                                                var0.d = var4;
                                                var0.e = var2;
                                                var2 = _closure2_slot2;
                                                if (!var2) {
                                                    _fun42041_ip = 468;
                                                    continue _fun42041
                                                }
                                            case 456:
                                                var2 = _closure2_slot22;
                                                var1 = undefined;
                                                var1 = var2.bind(var1)(var0, var3);
                                            case 468:
                                                return var0;
                                        }
                                    };
                                    var _closure2_slot13 = var0;
                                    var0 = function(arg0, arg1, arg2) { // Original name: checkInt32, environment: var1
                                        _fun42042: for (var _fun42042_ip = 0;;) switch (_fun42042_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = ~var1;
                                                var0 = ~var0;
                                                if (!(var1 === var0)) {
                                                    _fun42042_ip = 31;
                                                    continue _fun42042
                                                }
                                            case 13:
                                                var0 = arg1;
                                                if (!(!(var1 < var0))) {
                                                    _fun42042_ip = 31;
                                                    continue _fun42042
                                                }
                                            case 20:
                                                var0 = arg2;
                                                if (!(!(var1 > var0))) {
                                                    _fun42042_ip = 31;
                                                    continue _fun42042
                                                }
                                            case 27:
                                                var0 = undefined;
                                                return var0;
                                            case 31:
                                                var0 = global;
                                                var2 = var0.Error;
                                                var0 = _closure2_slot4;
                                                var1 = var0 + var1;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                                throw var0;
                                        }
                                    };
                                    var _closure2_slot14 = var0;
                                    var0 = function(arg0) { // Original name: digitsToString, environment: var1
                                        _fun42043: for (var _fun42043_ip = 0;;) switch (_fun42043_ip) {
                                            case 0:
                                                var6 = arg0;
                                                var0 = var6.length;
                                                var2 = 1;
                                                var11 = var0 - var2;
                                                var5 = 0;
                                                var3 = var6[var5];
                                                if (!(!(var11 > var5))) {
                                                    _fun42043_ip = 47;
                                                    continue _fun42043
                                                }
                                            case 25:
                                                var1 = '';
                                                var0 = var3;
                                                if (!(var5 === var0)) {
                                                    _fun42043_ip = 164;
                                                    continue _fun42043
                                                }
                                            case 39:
                                                var4 = '0';
                                                return var4;
                                            case 47:
                                                var9 = '' + var3;
                                                var7 = undefined;
                                                var8 = 7;
                                                var10 = var2;
                                                var4 = var9;
                                                var2 = var10;
                                                if (!(var2 < var11)) {
                                                    _fun42043_ip = 123;
                                                    continue _fun42043
                                                }
                                            case 71:
                                                var12 = var6[var10];
                                                var13 = '' + var12;
                                                var12 = var13.length;
                                                var15 = var8 - var12;
                                                var12 = var9;
                                                if (!var15) {
                                                    _fun42043_ip = 106;
                                                    continue _fun42043
                                                }
                                            case 93:
                                                var14 = _closure2_slot19;
                                                var14 = var14.bind(var7)(var15);
                                                var12 = var9 + var14;
                                            case 106:
                                                var9 = var12 + var13;
                                                var10 = var10 + 1;
                                                var4 = var9;
                                                var2 = var10;
                                                if (var2 < var11) {
                                                    _fun42043_ip = 71;
                                                    continue _fun42043
                                                }
                                            case 123:
                                                var2 = var6[var2];
                                                var6 = '' + var2;
                                                var6 = var6.length;
                                                var6 = var8 - var6;
                                                var1 = var4;
                                                var0 = var2;
                                                if (!var6) {
                                                    _fun42043_ip = 164;
                                                    continue _fun42043
                                                }
                                            case 148:
                                                var3 = _closure2_slot19;
                                                var3 = var3.bind(var7)(var6);
                                                var1 = var4 + var3;
                                                var0 = var2;
                                            case 164:
                                                var4 = 10;
                                                var2 = var0 % var4;
                                                var3 = var0;
                                                var0 = var3;
                                                if (!(var2 === var5)) {
                                                    _fun42043_ip = 199;
                                                    continue _fun42043
                                                }
                                            case 181:
                                                var6 = var3 / var4;
                                                var2 = var6 % var4;
                                                var3 = var6;
                                                var0 = var3;
                                                if (var2 === var5) {
                                                    _fun42043_ip = 181;
                                                    continue _fun42043
                                                }
                                            case 199:
                                                var0 = var1 + var0;
                                                return var0;
                                        }
                                    };
                                    var _closure2_slot15 = var0;
                                    var0 = function(arg0, arg1) { // Original name: exp, environment: var1
                                        _fun42044: for (var _fun42044_ip = 0;;) switch (_fun42044_ip) {
                                            case 0:
                                                var4 = arg0;
                                                var6 = var4.constructor;
                                                var5 = var6.precision;
                                                var1 = _closure2_slot17;
                                                var2 = undefined;
                                                var3 = var1.bind(var2)(var4);
                                                var1 = 16;
                                                if (!(!(var3 > var1))) {
                                                    _fun42044_ip = 517;
                                                    continue _fun42044
                                                }
                                            case 38:
                                                var1 = var4.s;
                                                if (var1) {
                                                    _fun42044_ip = 72;
                                                    continue _fun42044
                                                }
                                            case 46:
                                                var23 = _closure2_slot0;
                                                var3 = var6.prototype;
                                                var3 = Object.create(var3, {
                                                    constructor: {
                                                        value: var6
                                                    }
                                                });
                                                var24 = var3;
                                                var1 = new var24[var6](var23, var22);
                                                var1 = var1 instanceof Object ? var1 : var3;
                                                return var1;
                                            case 72:
                                                var3 = null;
                                                var8 = undefined;
                                                if (!(var3 == var8)) {
                                                    _fun42044_ip = 89;
                                                    continue _fun42044
                                                }
                                            case 80:
                                                var1 = false;
                                                _closure2_slot2 = var1;
                                                var8 = var5;
                                            case 89:
                                                var1 = var6.prototype;
                                                var7 = Object.create(var1, {
                                                    constructor: {
                                                        value: var6
                                                    }
                                                });
                                                var23 = 0.03125;
                                                var24 = var7;
                                                var1 = new var24[var6](var23, var22);
                                                var13 = var1 instanceof Object ? var1 : var7;
                                                var1 = var4.abs;
                                                var7 = var1.bind(var4)();
                                                var1 = var7.gte;
                                                var12 = 0.1;
                                                var1 = var1.bind(var7)(var12);
                                                var16 = 0;
                                                var9 = 5;
                                                var11 = var4;
                                                var10 = 0;
                                                var15 = var11;
                                                var7 = 0;
                                                if (!var1) {
                                                    _fun42044_ip = 216;
                                                    continue _fun42044
                                                }
                                            case 168:
                                                var1 = var11.times;
                                                var17 = var1.bind(var11)(var13);
                                                var10 = var10 + var9;
                                                var1 = var17.abs;
                                                var18 = var1.bind(var17)();
                                                var1 = var18.gte;
                                                var1 = var1.bind(var18)(var12);
                                                var11 = var17;
                                                var15 = var11;
                                                var7 = var10;
                                                if (var1) {
                                                    _fun42044_ip = 168;
                                                    continue _fun42044
                                                }
                                            case 216:
                                                var1 = global;
                                                var13 = var1.Math;
                                                var12 = var13.log;
                                                var11 = _closure2_slot7;
                                                var10 = 2;
                                                var11 = var11.bind(var2)(var10, var7);
                                                var11 = var12.bind(var13)(var11);
                                                var1 = var1.Math;
                                                var1 = var1.LN10;
                                                var1 = var11 / var1;
                                                var1 = var1 * var10;
                                                var1 = var1 + var9;
                                                var1 = var1 | 0;
                                                var10 = var8 + var1;
                                                var23 = _closure2_slot0;
                                                var8 = var6.prototype;
                                                var8 = Object.create(var8, {
                                                    constructor: {
                                                        value: var6
                                                    }
                                                });
                                                var24 = var8;
                                                var1 = new var24[var6](var23, var22);
                                                var14 = var1 instanceof Object ? var1 : var8;
                                                var6.precision = var10;
                                                var13 = var14;
                                                var12 = var13;
                                                var11 = 0;
                                            case 316:
                                                var1 = _closure2_slot22;
                                                var8 = var13.times;
                                                var19 = var8.bind(var13)(var15);
                                                var1 = var1.bind(var2)(var19, var10);
                                                var1 = var14.times;
                                                var17 = var11 + 1;
                                                var20 = var1.bind(var14)(var17);
                                                var8 = _closure2_slot15;
                                                var9 = var12.plus;
                                                var1 = _closure2_slot12;
                                                var1 = var1.bind(var2)(var19, var20, var10);
                                                var18 = var9.bind(var12)(var1);
                                                var1 = var18.d;
                                                var9 = var8.bind(var2)(var1);
                                                var1 = var9.slice;
                                                var9 = var1.bind(var9)(var16, var10);
                                                var1 = var12.d;
                                                var8 = var8.bind(var2)(var1);
                                                var1 = var8.slice;
                                                var8 = var1.bind(var8)(var16, var10);
                                                var1 = var12;
                                                var14 = var20;
                                                var13 = var19;
                                                var12 = var18;
                                                var11 = var17;
                                                if (var9 !== var8) {
                                                    _fun42044_ip = 316;
                                                    continue _fun42044
                                                }
                                            case 438:
                                                var7 = parseFloat(var7);
                                                var9 = var7 - 1;
                                                var8 = var1;
                                                var1 = var8;
                                                if (!var7) {
                                                    _fun42044_ip = 489;
                                                    continue _fun42044
                                                }
                                            case 453:
                                                var7 = _closure2_slot22;
                                                var11 = var8.times;
                                                var11 = var11.bind(var8)(var8);
                                                var7 = var7.bind(var2)(var11, var10);
                                                var7 = parseFloat(var9);
                                                var9 = var7 - 1;
                                                var8 = var11;
                                                var1 = var8;
                                                if (var7) {
                                                    _fun42044_ip = 453;
                                                    continue _fun42044
                                                }
                                            case 489:
                                                var6.precision = var5;
                                                if (!(var3 == var2)) {
                                                    _fun42044_ip = 515;
                                                    continue _fun42044
                                                }
                                            case 499:
                                                var3 = true;
                                                _closure2_slot2 = var3;
                                                var3 = _closure2_slot22;
                                                var3 = var3.bind(var2)(var1, var5);
                                            case 515:
                                                return var1;
                                            case 517:
                                                var1 = global;
                                                var1 = var1.Error;
                                                var3 = _closure2_slot5;
                                                var0 = _closure2_slot17;
                                                var0 = var0.bind(var2)(var4);
                                                var0 = var3 + var0;
                                                var0 = var1.bind(var2)(var0);
                                                throw var0;
                                        }
                                    };
                                    var _closure2_slot16 = var0;
                                    var0 = function(arg0) { // Original name: getBase10Exponent, environment: var1
                                        _fun42045: for (var _fun42045_ip = 0;;) switch (_fun42045_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var2 = var1.e;
                                                var0 = 7;
                                                var0 = var0 * var2;
                                                var2 = var1.d;
                                                var1 = 0;
                                                var3 = var2[var1];
                                                var2 = 10;
                                                var1 = var0;
                                                var0 = var1;
                                                if (!(var3 >= var2)) {
                                                    _fun42045_ip = 53;
                                                    continue _fun42045
                                                }
                                            case 39:
                                                var1 = var1 + 1;
                                                var3 = var3 / var2;
                                                var0 = var1;
                                                if (var3 >= var2) {
                                                    _fun42045_ip = 39;
                                                    continue _fun42045
                                                }
                                            case 53:
                                                return var0;
                                        }
                                    };
                                    var _closure2_slot17 = var0;
                                    var0 = function(arg0, arg1, arg2) { // Original name: getLn10, environment: var1
                                        _fun42046: for (var _fun42046_ip = 0;;) switch (_fun42046_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var5 = arg1;
                                                var0 = arg2;
                                                var3 = var1.LN10;
                                                var2 = var3.sd;
                                                var2 = var2.bind(var3)();
                                                if (!(!(var5 > var2))) {
                                                    _fun42046_ip = 72;
                                                    continue _fun42046
                                                }
                                            case 29:
                                                var4 = _closure2_slot22;
                                                var7 = var1.LN10;
                                                var3 = var1.prototype;
                                                var3 = Object.create(var3, {
                                                    constructor: {
                                                        value: var1
                                                    }
                                                });
                                                var8 = var3;
                                                var2 = new var8[var1](var7, var6);
                                                var2 = var2 instanceof Object ? var2 : var3;
                                                var3 = undefined;
                                                var3 = var4.bind(var3)(var2, var5);
                                                return var2;
                                            case 72:
                                                var2 = true;
                                                _closure2_slot2 = var2;
                                                if (!var0) {
                                                    _fun42046_ip = 90;
                                                    continue _fun42046
                                                }
                                            case 84:
                                                var1.precision = var0;
                                            case 90:
                                                var0 = global;
                                                var2 = var0.Error;
                                                var1 = undefined;
                                                var0 = '[DecimalError] LN10 precision limit exceeded';
                                                var0 = var2.bind(var1)(var0);
                                                throw var0;
                                        }
                                    };
                                    var _closure2_slot18 = var0;
                                    var0 = function(arg0) { // Original name: getZeroString, environment: var1
                                        _fun42047: for (var _fun42047_ip = 0;;) switch (_fun42047_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = parseFloat(var0);
                                                var4 = var1 - 1;
                                                var2 = '';
                                                var3 = '0';
                                                var0 = var2;
                                                if (!var1) {
                                                    _fun42047_ip = 41;
                                                    continue _fun42047
                                                }
                                            case 25:
                                                var2 = var2 + var3;
                                                var1 = parseFloat(var4);
                                                var4 = var1 - 1;
                                                var0 = var2;
                                                if (var1) {
                                                    _fun42047_ip = 25;
                                                    continue _fun42047
                                                }
                                            case 41:
                                                return var0;
                                        }
                                    };
                                    var _closure2_slot19 = var0;
                                    var0 = function(arg0, arg1) { // Original name: ln, environment: var1
                                        _fun42048: for (var _fun42048_ip = 0;;) switch (_fun42048_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var5 = arg1;
                                                var10 = var0.d;
                                                var3 = var0.constructor;
                                                var9 = var3.precision;
                                                var1 = var0.s;
                                                var14 = 1;
                                                if (!(!(var1 < var14))) {
                                                    _fun42048_ip = 963;
                                                    continue _fun42048
                                                }
                                            case 37:
                                                var4 = var0.eq;
                                                var2 = _closure2_slot0;
                                                var2 = var4.bind(var0)(var2);
                                                if (var2) {
                                                    _fun42048_ip = 939;
                                                    continue _fun42048
                                                }
                                            case 61:
                                                var2 = null;
                                                var4 = var5;
                                                if (!(var2 == var4)) {
                                                    _fun42048_ip = 79;
                                                    continue _fun42048
                                                }
                                            case 70:
                                                var6 = false;
                                                _closure2_slot2 = var6;
                                                var4 = var9;
                                            case 79:
                                                var7 = var0.eq;
                                                var6 = 10;
                                                var7 = var7.bind(var0)(var6);
                                                if (var7) {
                                                    _fun42048_ip = 915;
                                                    continue _fun42048
                                                }
                                            case 99:
                                                var11 = var4 + var6;
                                                var3.precision = var11;
                                                var7 = _closure2_slot15;
                                                var8 = undefined;
                                                var20 = var7.bind(var8)(var10);
                                                var7 = var20.charAt;
                                                var12 = 0;
                                                var16 = var7.bind(var20)(var12);
                                                var7 = _closure2_slot17;
                                                var7 = var7.bind(var8)(var0);
                                                var10 = global;
                                                var13 = var10.Math;
                                                var10 = var13.abs;
                                                var13 = var10.bind(var13)(var7);
                                                var10 = 1500000000000000.0;
                                                if (!(!(var13 < var10))) {
                                                    _fun42048_ip = 305;
                                                    continue _fun42048
                                                }
                                            case 178:
                                                var13 = _closure2_slot18;
                                                var10 = 2;
                                                var10 = var11 + var10;
                                                var13 = var13.bind(var8)(var3, var10, var9);
                                                var10 = var13.times;
                                                var7 = '' + var7;
                                                var10 = var10.bind(var13)(var7);
                                                var13 = _closure2_slot20;
                                                var7 = '.';
                                                var15 = var16 + var7;
                                                var7 = var20.slice;
                                                var7 = var7.bind(var20)(var14);
                                                var26 = var15 + var7;
                                                var15 = var3.prototype;
                                                var15 = Object.create(var15, {
                                                    constructor: {
                                                        value: var3
                                                    }
                                                });
                                                var27 = var15;
                                                var7 = new var27[var3](var26, var25);
                                                var7 = var7 instanceof Object ? var7 : var15;
                                                var6 = var11 - var6;
                                                var7 = var13.bind(var8)(var7, var6);
                                                var6 = var7.plus;
                                                var6 = var6.bind(var7)(var10);
                                                var3.precision = var9;
                                                if (!(var2 == var5)) {
                                                    _fun42048_ip = 303;
                                                    continue _fun42048
                                                }
                                            case 287:
                                                var7 = true;
                                                _closure2_slot2 = var7;
                                                var7 = _closure2_slot22;
                                                var7 = var7.bind(var8)(var6, var9);
                                            case 303:
                                                return var6;
                                            case 305:
                                                var19 = 7;
                                                if (!(var16 < var19)) {
                                                    _fun42048_ip = 325;
                                                    continue _fun42048
                                                }
                                            case 312:
                                                var6 = var14 != var16;
                                                var18 = var14;
                                                var17 = var0;
                                                if (var6) {
                                                    _fun42048_ip = 386;
                                                    continue _fun42048
                                                }
                                            case 325:
                                                var7 = var14 == var16;
                                                var15 = var20;
                                                var10 = var16;
                                                var6 = var14;
                                                var13 = var0;
                                                if (!var7) {
                                                    _fun42048_ip = 491;
                                                    continue _fun42048
                                                }
                                            case 347:
                                                var7 = var20.charAt;
                                                var21 = var7.bind(var20)(var14);
                                                var7 = 3;
                                                var7 = var21 > var7;
                                                var18 = var14;
                                                var17 = var0;
                                                var15 = var20;
                                                var10 = var16;
                                                var6 = var18;
                                                var13 = var17;
                                                if (!var7) {
                                                    _fun42048_ip = 491;
                                                    continue _fun42048
                                                }
                                            case 386:
                                                var16 = _closure2_slot15;
                                                var7 = var17.times;
                                                var20 = var7.bind(var17)(var0);
                                                var7 = var20.d;
                                                var23 = var16.bind(var8)(var7);
                                                var7 = var23.charAt;
                                                var22 = var7.bind(var23)(var12);
                                                var21 = var18 + 1;
                                                if (!(var22 < var19)) {
                                                    _fun42048_ip = 439;
                                                    continue _fun42048
                                                }
                                            case 429:
                                                var18 = var21;
                                                var17 = var20;
                                                if (var14 != var22) {
                                                    _fun42048_ip = 386;
                                                    continue _fun42048
                                                }
                                            case 439:
                                                var15 = var23;
                                                var10 = var22;
                                                var6 = var21;
                                                var13 = var20;
                                                if (!(var14 == var22)) {
                                                    _fun42048_ip = 491;
                                                    continue _fun42048
                                                }
                                            case 455:
                                                var7 = var23.charAt;
                                                var16 = var7.bind(var23)(var14);
                                                var7 = 3;
                                                var18 = var21;
                                                var17 = var20;
                                                var15 = var23;
                                                var10 = var22;
                                                var6 = var18;
                                                var13 = var17;
                                                if (var16 > var7) {
                                                    _fun42048_ip = 386;
                                                    continue _fun42048
                                                }
                                            case 491:
                                                var7 = _closure2_slot17;
                                                var13 = var7.bind(var8)(var13);
                                                if (!(!(var10 > var14))) {
                                                    _fun42048_ip = 551;
                                                    continue _fun42048
                                                }
                                            case 504:
                                                var7 = '.';
                                                var10 = var10 + var7;
                                                var7 = var15.slice;
                                                var7 = var7.bind(var15)(var14);
                                                var26 = var10 + var7;
                                                var10 = var3.prototype;
                                                var10 = Object.create(var10, {
                                                    constructor: {
                                                        value: var3
                                                    }
                                                });
                                                var27 = var10;
                                                var7 = new var27[var3](var26, var25);
                                                var16 = var7 instanceof Object ? var7 : var10;
                                                var7 = var13;
                                                _fun42048_ip = 584;
                                                continue _fun42048;
                                            case 551:
                                                var10 = var3.prototype;
                                                var14 = Object.create(var10, {
                                                    constructor: {
                                                        value: var3
                                                    }
                                                });
                                                var10 = '0.';
                                                var26 = var10 + var15;
                                                var27 = var14;
                                                var10 = new var27[var3](var26, var25);
                                                var16 = var10 instanceof Object ? var10 : var14;
                                                var7 = var13 + 1;
                                            case 584:
                                                var14 = _closure2_slot12;
                                                var13 = var16.minus;
                                                var10 = _closure2_slot0;
                                                var13 = var13.bind(var16)(var10);
                                                var15 = var16.plus;
                                                var10 = _closure2_slot0;
                                                var10 = var15.bind(var16)(var10);
                                                var10 = var14.bind(var8)(var13, var10, var11);
                                                var13 = _closure2_slot22;
                                                var14 = var10.times;
                                                var17 = var14.bind(var10)(var10);
                                                var13 = var13.bind(var8)(var17, var11);
                                                var16 = 3;
                                                var14 = 2;
                                                var15 = var10;
                                                var10 = var15;
                                            case 658:
                                                var13 = _closure2_slot22;
                                                var18 = var15.times;
                                                var19 = var18.bind(var15)(var17);
                                                var13 = var13.bind(var8)(var19, var11);
                                                var20 = _closure2_slot15;
                                                var18 = var10.plus;
                                                var21 = _closure2_slot12;
                                                var13 = var3.prototype;
                                                var22 = Object.create(var13, {
                                                    constructor: {
                                                        value: var3
                                                    }
                                                });
                                                var27 = var22;
                                                var26 = var16;
                                                var13 = new var27[var3](var26, var25);
                                                var13 = var13 instanceof Object ? var13 : var22;
                                                var13 = var21.bind(var8)(var19, var13, var11);
                                                var18 = var18.bind(var10)(var13);
                                                var13 = var18.d;
                                                var21 = var20.bind(var8)(var13);
                                                var13 = var21.slice;
                                                var22 = var13.bind(var21)(var12, var11);
                                                var13 = var10.d;
                                                var20 = var20.bind(var8)(var13);
                                                var13 = var20.slice;
                                                var21 = var13.bind(var20)(var12, var11);
                                                var20 = var16;
                                                var13 = var10;
                                                if (!(var22 !== var21)) {
                                                    _fun42048_ip = 795;
                                                    continue _fun42048
                                                }
                                            case 780:
                                                var16 = var20 + var14;
                                                var15 = var19;
                                                var10 = var18;
                                                _fun42048_ip = 658;
                                                continue _fun42048;
                                            case 795:
                                                var10 = var13.times;
                                                var13 = var10.bind(var13)(var14);
                                                var10 = var13;
                                                if (!(var12 !== var7)) {
                                                    _fun42048_ip = 853;
                                                    continue _fun42048
                                                }
                                            case 813:
                                                var12 = var13.plus;
                                                var15 = _closure2_slot18;
                                                var14 = var11 + var14;
                                                var15 = var15.bind(var8)(var3, var14, var9);
                                                var14 = var15.times;
                                                var7 = '' + var7;
                                                var7 = var14.bind(var15)(var7);
                                                var10 = var12.bind(var13)(var7);
                                            case 853:
                                                var7 = _closure2_slot12;
                                                var12 = var3.prototype;
                                                var12 = Object.create(var12, {
                                                    constructor: {
                                                        value: var3
                                                    }
                                                });
                                                var27 = var12;
                                                var26 = var6;
                                                var6 = new var27[var3](var26, var25);
                                                var6 = var6 instanceof Object ? var6 : var12;
                                                var6 = var7.bind(var8)(var10, var6, var11);
                                                var3.precision = var9;
                                                if (!(var2 == var5)) {
                                                    _fun42048_ip = 913;
                                                    continue _fun42048
                                                }
                                            case 897:
                                                var7 = true;
                                                _closure2_slot2 = var7;
                                                var7 = _closure2_slot22;
                                                var7 = var7.bind(var8)(var6, var9);
                                            case 913:
                                                return var6;
                                            case 915:
                                                if (!(var2 == var5)) {
                                                    _fun42048_ip = 925;
                                                    continue _fun42048
                                                }
                                            case 919:
                                                var2 = true;
                                                _closure2_slot2 = var2;
                                            case 925:
                                                var2 = _closure2_slot18;
                                                var1 = undefined;
                                                var1 = var2.bind(var1)(var3, var4);
                                                return var1;
                                            case 939:
                                                var1 = var3.prototype;
                                                var2 = Object.create(var1, {
                                                    constructor: {
                                                        value: var3
                                                    }
                                                });
                                                var26 = 0;
                                                var27 = var2;
                                                var1 = new var27[var3](var26, var25);
                                                var1 = var1 instanceof Object ? var1 : var2;
                                                return var1;
                                            case 963:
                                                var1 = global;
                                                var2 = var1.Error;
                                                var1 = _closure2_slot3;
                                                var3 = var0.s;
                                                var0 = '-Infinity';
                                                if (!var3) {
                                                    _fun42048_ip = 996;
                                                    continue _fun42048
                                                }
                                            case 992:
                                                var0 = 'NaN';
                                            case 996:
                                                var1 = var1 + var0;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                                throw var0;
                                        }
                                    };
                                    var _closure2_slot20 = var0;
                                    var0 = function(arg0, arg1) { // Original name: parseDecimal, environment: var1
                                        _fun42049: for (var _fun42049_ip = 0;;) switch (_fun42049_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var6 = arg1;
                                                var0 = var6.indexOf;
                                                var5 = '.';
                                                var3 = var0.bind(var6)(var5);
                                                var2 = -1;
                                                var0 = var6;
                                                if (!(var3 > var2)) {
                                                    _fun42049_ip = 49;
                                                    continue _fun42049
                                                }
                                            case 34:
                                                var4 = var6.replace;
                                                var2 = '';
                                                var0 = var4.bind(var6)(var5, var2);
                                            case 49:
                                                var4 = var0.search;
                                                var2 = /e/i;
                                                var6 = var4.bind(var0)(var2);
                                                var13 = 0;
                                                var5 = var0;
                                                if (!(!(var6 > var13))) {
                                                    _fun42049_ip = 103;
                                                    continue _fun42049
                                                }
                                            case 83:
                                                var0 = var5;
                                                var2 = var3;
                                                if (!(var2 < var13)) {
                                                    _fun42049_ip = 149;
                                                    continue _fun42049
                                                }
                                            case 93:
                                                var2 = var5.length;
                                                var0 = var5;
                                                _fun42049_ip = 149;
                                                continue _fun42049;
                                            case 103:
                                                var4 = var3;
                                                if (!(var3 < var13)) {
                                                    _fun42049_ip = 113;
                                                    continue _fun42049
                                                }
                                            case 110:
                                                var4 = var6;
                                            case 113:
                                                var7 = var5.slice;
                                                var3 = 1;
                                                var3 = var6 + var3;
                                                var3 = var7.bind(var5)(var3);
                                                var3 = var3 - 0;
                                                var2 = var4 + var3;
                                                var4 = var5.substring;
                                                var0 = var4.bind(var5)(var13, var6);
                                            case 149:
                                                var3 = var0.charCodeAt;
                                                var3 = var3.bind(var0)(var13);
                                                var8 = 48;
                                                var6 = var0;
                                                var4 = 0;
                                                var0 = 0;
                                                if (!(var8 === var3)) {
                                                    _fun42049_ip = 198;
                                                    continue _fun42049
                                                }
                                            case 174:
                                                var5 = var4 + 1;
                                                var3 = var6.charCodeAt;
                                                var3 = var3.bind(var6)(var5);
                                                var4 = var5;
                                                var0 = var4;
                                                if (var8 === var3) {
                                                    _fun42049_ip = 174;
                                                    continue _fun42049
                                                }
                                            case 198:
                                                var3 = var6.length;
                                                var7 = var6.charCodeAt;
                                                var4 = 1;
                                                var5 = var3 - var4;
                                                var5 = var7.bind(var6)(var5);
                                                var7 = var3;
                                                var3 = var7;
                                                if (!(var8 === var5)) {
                                                    _fun42049_ip = 259;
                                                    continue _fun42049
                                                }
                                            case 231:
                                                var9 = var7 - 1;
                                                var10 = var6.charCodeAt;
                                                var5 = var9 - var4;
                                                var5 = var10.bind(var6)(var5);
                                                var7 = var9;
                                                var3 = var7;
                                                if (var8 === var5) {
                                                    _fun42049_ip = 231;
                                                    continue _fun42049
                                                }
                                            case 259:
                                                var5 = var6.slice;
                                                var9 = var5.bind(var6)(var0, var3);
                                                if (var9) {
                                                    _fun42049_ip = 306;
                                                    continue _fun42049
                                                }
                                            case 273:
                                                var1.s = var13;
                                                var1.e = var13;
                                                var5 = [0];
                                                var1.d = var5;
                                                _fun42049_ip = 586;
                                                continue _fun42049;
                                            case 306:
                                                var6 = var3 - var0;
                                                var0 = var2 - var0;
                                                var3 = var0 - var4;
                                                var7 = _closure2_slot6;
                                                var2 = undefined;
                                                var8 = 7;
                                                var5 = var3 / var8;
                                                var5 = var7.bind(var2)(var5);
                                                var1.e = var5;
                                                var5 = new Array(0);
                                                var1.d = var5;
                                                var4 = var3 + var4;
                                                var4 = var4 % var8;
                                                var7 = var4;
                                                if (!(var3 < var13)) {
                                                    _fun42049_ip = 374;
                                                    continue _fun42049
                                                }
                                            case 370:
                                                var7 = var4 + var8;
                                            case 374:
                                                if (!(!(var7 < var6))) {
                                                    _fun42049_ip = 387;
                                                    continue _fun42049
                                                }
                                            case 378:
                                                var5 = var7 - var6;
                                                var4 = var9;
                                                _fun42049_ip = 498;
                                                continue _fun42049;
                                            case 387:
                                                if (!var7) {
                                                    _fun42049_ip = 419;
                                                    continue _fun42049
                                                }
                                            case 390:
                                                var12 = var1.d;
                                                var11 = var12.push;
                                                var10 = var9.slice;
                                                var10 = var10.bind(var9)(var13, var7);
                                                var10 = var10 - 0;
                                                var10 = var11.bind(var12)(var10);
                                            case 419:
                                                var10 = var6 - var8;
                                                var6 = var7;
                                                var7 = var6;
                                                if (!(var7 < var10)) {
                                                    _fun42049_ip = 476;
                                                    continue _fun42049
                                                }
                                            case 433:
                                                var14 = var1.d;
                                                var13 = var14.push;
                                                var12 = var9.slice;
                                                var11 = var6 + var8;
                                                var12 = var12.bind(var9)(var6, var11);
                                                var12 = var12 - 0;
                                                var12 = var13.bind(var14)(var12);
                                                var6 = var11;
                                                var7 = var6;
                                                if (var7 < var10) {
                                                    _fun42049_ip = 433;
                                                    continue _fun42049
                                                }
                                            case 476:
                                                var6 = var9.slice;
                                                var7 = var6.bind(var9)(var7);
                                                var6 = var7.length;
                                                var5 = var8 - var6;
                                                var4 = var7;
                                            case 498:
                                                var8 = var5 - 1;
                                                var7 = '0';
                                                var6 = var4;
                                                var4 = var6;
                                                if (!var5) {
                                                    _fun42049_ip = 532;
                                                    continue _fun42049
                                                }
                                            case 516:
                                                var6 = var6 + var7;
                                                var5 = parseFloat(var8);
                                                var8 = var5 - 1;
                                                var4 = var6;
                                                if (var5) {
                                                    _fun42049_ip = 516;
                                                    continue _fun42049
                                                }
                                            case 532:
                                                var6 = var1.d;
                                                var5 = var6.push;
                                                var4 = var4 - 0;
                                                var4 = var5.bind(var6)(var4);
                                                var4 = _closure2_slot2;
                                                if (!var4) {
                                                    _fun42049_ip = 586;
                                                    continue _fun42049
                                                }
                                            case 557:
                                                var5 = var1.e;
                                                var4 = _closure2_slot10;
                                                if (!(!(var5 > var4))) {
                                                    _fun42049_ip = 588;
                                                    continue _fun42049
                                                }
                                            case 570:
                                                var5 = var1.e;
                                                var4 = _closure2_slot10;
                                                var4 = -var4;
                                                if (!(!(var5 < var4))) {
                                                    _fun42049_ip = 588;
                                                    continue _fun42049
                                                }
                                            case 586:
                                                return var1;
                                            case 588:
                                                var1 = global;
                                                var1 = var1.Error;
                                                var0 = _closure2_slot5;
                                                var0 = var0 + var3;
                                                var0 = var1.bind(var2)(var0);
                                                throw var0;
                                        }
                                    };
                                    var _closure2_slot21 = var0;
                                    var0 = function(arg0, arg1, arg2) { // Original name: round, environment: var1
                                        _fun42050: for (var _fun42050_ip = 0;;) switch (_fun42050_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var6 = arg1;
                                                var17 = arg2;
                                                var7 = var0.d;
                                                var2 = 0;
                                                var3 = var7[var2];
                                                var9 = 10;
                                                var8 = var3 >= var9;
                                                var5 = 1;
                                                var1 = var5;
                                                var4 = var1;
                                                if (!var8) {
                                                    _fun42050_ip = 53;
                                                    continue _fun42050
                                                }
                                            case 39:
                                                var1 = var1 + 1;
                                                var3 = var3 / var9;
                                                var4 = var1;
                                                if (var3 >= var9) {
                                                    _fun42050_ip = 39;
                                                    continue _fun42050
                                                }
                                            case 53:
                                                var8 = var6 - var4;
                                                if (!(!(var8 < var2))) {
                                                    _fun42050_ip = 153;
                                                    continue _fun42050
                                                }
                                            case 61:
                                                var1 = global;
                                                var11 = var1.Math;
                                                var10 = var11.ceil;
                                                var1 = var8 + var5;
                                                var3 = 7;
                                                var1 = var1 / var3;
                                                var1 = var10.bind(var11)(var1);
                                                var10 = var7.length;
                                                if (!(!(var1 >= var10))) {
                                                    _fun42050_ip = 151;
                                                    continue _fun42050
                                                }
                                            case 100:
                                                var14 = var7[var1];
                                                var13 = var14 >= var9;
                                                var11 = var14;
                                                var10 = var5;
                                                var12 = var10;
                                                if (!var13) {
                                                    _fun42050_ip = 134;
                                                    continue _fun42050
                                                }
                                            case 120:
                                                var10 = var10 + 1;
                                                var11 = var11 / var9;
                                                var12 = var10;
                                                if (var11 >= var9) {
                                                    _fun42050_ip = 120;
                                                    continue _fun42050
                                                }
                                            case 134:
                                                var15 = var8 % var3;
                                                var3 = var15 - var3;
                                                var13 = var3 + var12;
                                                var3 = var1;
                                                _fun42050_ip = 172;
                                                continue _fun42050;
                                            case 151:
                                                return var0;
                                            case 153:
                                                var1 = 7;
                                                var15 = var8 + var1;
                                                var14 = var7[var2];
                                                var13 = var6;
                                                var12 = var4;
                                                var3 = 0;
                                            case 172:
                                                var4 = undefined;
                                                var1 = undefined;
                                                if (!(var1 !== var17)) {
                                                    _fun42050_ip = 426;
                                                    continue _fun42050
                                                }
                                            case 183:
                                                var10 = _closure2_slot7;
                                                var8 = var12 - var13;
                                                var8 = var8 - var5;
                                                var8 = var10.bind(var4)(var9, var8);
                                                var10 = var14 / var8;
                                                var10 = var10 % var9;
                                                var10 = var10 | 0;
                                                var11 = var6 < var2;
                                                if (var11) {
                                                    _fun42050_ip = 234;
                                                    continue _fun42050
                                                }
                                            case 222:
                                                var16 = var3 + var5;
                                                var16 = var7[var16];
                                                var11 = var4 !== var16;
                                            case 234:
                                                if (var11) {
                                                    _fun42050_ip = 241;
                                                    continue _fun42050
                                                }
                                            case 237:
                                                var11 = var14 % var8;
                                            case 241:
                                                var18 = 4;
                                                if (!(!(var17 < var18))) {
                                                    _fun42050_ip = 379;
                                                    continue _fun42050
                                                }
                                            case 251:
                                                var16 = 5;
                                                var8 = var10 > var16;
                                                if (var8) {
                                                    _fun42050_ip = 377;
                                                    continue _fun42050
                                                }
                                            case 261:
                                                var16 = var16 === var10;
                                                if (!var16) {
                                                    _fun42050_ip = 374;
                                                    continue _fun42050
                                                }
                                            case 268:
                                                var18 = var18 == var17;
                                                if (var18) {
                                                    _fun42050_ip = 278;
                                                    continue _fun42050
                                                }
                                            case 275:
                                                var18 = var11;
                                            case 278:
                                                if (var18) {
                                                    _fun42050_ip = 346;
                                                    continue _fun42050
                                                }
                                            case 281:
                                                var19 = 6;
                                                var19 = var19 == var17;
                                                if (!var19) {
                                                    _fun42050_ip = 343;
                                                    continue _fun42050
                                                }
                                            case 291:
                                                if (!(!(var15 > var2))) {
                                                    _fun42050_ip = 305;
                                                    continue _fun42050
                                                }
                                            case 295:
                                                var20 = var3 - var5;
                                                var20 = var7[var20];
                                                _fun42050_ip = 335;
                                                continue _fun42050;
                                            case 305:
                                                var23 = var13 > var2;
                                                var21 = 0;
                                                if (!var23) {
                                                    _fun42050_ip = 332;
                                                    continue _fun42050
                                                }
                                            case 314:
                                                var23 = _closure2_slot7;
                                                var22 = var12 - var13;
                                                var22 = var23.bind(var4)(var9, var22);
                                                var21 = var14 / var22;
                                            case 332:
                                                var20 = var21;
                                            case 335:
                                                var20 = var20 % var9;
                                                var19 = var20 & var5;
                                            case 343:
                                                var18 = var19;
                                            case 346:
                                                if (var18) {
                                                    _fun42050_ip = 371;
                                                    continue _fun42050
                                                }
                                            case 349:
                                                var19 = var0.s;
                                                var20 = var19 < var2;
                                                var19 = 7;
                                                if (!var20) {
                                                    _fun42050_ip = 367;
                                                    continue _fun42050
                                                }
                                            case 364:
                                                var19 = 8;
                                            case 367:
                                                var18 = var17 == var19;
                                            case 371:
                                                var16 = var18;
                                            case 374:
                                                var8 = var16;
                                            case 377:
                                                _fun42050_ip = 423;
                                                continue _fun42050;
                                            case 379:
                                                if (var10) {
                                                    _fun42050_ip = 385;
                                                    continue _fun42050
                                                }
                                            case 382:
                                                var10 = var11;
                                            case 385:
                                                if (!var10) {
                                                    _fun42050_ip = 420;
                                                    continue _fun42050
                                                }
                                            case 388:
                                                var11 = var2 == var17;
                                                if (var11) {
                                                    _fun42050_ip = 417;
                                                    continue _fun42050
                                                }
                                            case 395:
                                                var16 = var0.s;
                                                var18 = var16 < var2;
                                                var16 = 2;
                                                if (!var18) {
                                                    _fun42050_ip = 413;
                                                    continue _fun42050
                                                }
                                            case 410:
                                                var16 = 3;
                                            case 413:
                                                var11 = var17 == var16;
                                            case 417:
                                                var10 = var11;
                                            case 420:
                                                var8 = var10;
                                            case 423:
                                                var1 = var8;
                                            case 426:
                                                if (!(!(var6 < var5))) {
                                                    _fun42050_ip = 746;
                                                    continue _fun42050
                                                }
                                            case 433:
                                                var8 = var7[var2];
                                                if (!var8) {
                                                    _fun42050_ip = 746;
                                                    continue _fun42050
                                                }
                                            case 443:
                                                if (!(var2 !== var15)) {
                                                    _fun42050_ip = 537;
                                                    continue _fun42050
                                                }
                                            case 447:
                                                var8 = var3 + var5;
                                                var7.length = var8;
                                                var10 = _closure2_slot7;
                                                var8 = 7;
                                                var8 = var8 - var15;
                                                var8 = var10.bind(var4)(var9, var8);
                                                var15 = var13 > var2;
                                                var10 = 0;
                                                if (!var15) {
                                                    _fun42050_ip = 525;
                                                    continue _fun42050
                                                }
                                            case 486:
                                                var15 = _closure2_slot7;
                                                var12 = var12 - var13;
                                                var12 = var15.bind(var4)(var9, var12);
                                                var12 = var14 / var12;
                                                var11 = _closure2_slot7;
                                                var11 = var11.bind(var4)(var9, var13);
                                                var11 = var12 % var11;
                                                var11 = var11 | 0;
                                                var10 = var11 * var8;
                                            case 525:
                                                var7[var3] = var10;
                                                var11 = var8;
                                                var8 = var3;
                                                _fun42050_ip = 549;
                                                continue _fun42050;
                                            case 537:
                                                var7.length = var3;
                                                var8 = var3 - 1;
                                                var11 = var5;
                                            case 549:
                                                if (!var1) {
                                                    _fun42050_ip = 639;
                                                    continue _fun42050
                                                }
                                            case 555:
                                                var10 = var11;
                                                if (!(var2 != var8)) {
                                                    _fun42050_ip = 601;
                                                    continue _fun42050
                                                }
                                            case 562:
                                                var12 = var7[var8];
                                                var12 = var12 + var10;
                                                var7[var8] = var12;
                                                var13 = var7[var8];
                                                var12 = _closure2_slot9;
                                                if (!(var13 == var12)) {
                                                    _fun42050_ip = 639;
                                                    continue _fun42050
                                                }
                                            case 586:
                                                var12 = parseFloat(var8);
                                                var8 = var12 - 1;
                                                var7[var12] = var2;
                                                var11 = var5;
                                                _fun42050_ip = 555;
                                                continue _fun42050;
                                            case 601:
                                                var8 = var7[var2];
                                                var10 = var8 + var10;
                                                var7[var2] = var10;
                                                var8 = _closure2_slot9;
                                                if (!(var10 == var8)) {
                                                    _fun42050_ip = 639;
                                                    continue _fun42050
                                                }
                                            case 621:
                                                var7[var2] = var5;
                                                var8 = var0.e;
                                                var8 = var8 + 1;
                                                var0.e = var8;
                                            case 639:
                                                var8 = var7.length;
                                                var10 = var8 - 1;
                                                var8 = var7[var10];
                                                if (!(var2 === var8)) {
                                                    _fun42050_ip = 676;
                                                    continue _fun42050
                                                }
                                            case 655:
                                                var8 = var7.pop;
                                                var8 = var8.bind(var7)();
                                                var10 = var10 - 1;
                                                var8 = var7[var10];
                                                if (var2 === var8) {
                                                    _fun42050_ip = 655;
                                                    continue _fun42050
                                                }
                                            case 676:
                                                var8 = _closure2_slot2;
                                                if (!var8) {
                                                    _fun42050_ip = 712;
                                                    continue _fun42050
                                                }
                                            case 683:
                                                var10 = var0.e;
                                                var8 = _closure2_slot10;
                                                if (!(!(var10 > var8))) {
                                                    _fun42050_ip = 714;
                                                    continue _fun42050
                                                }
                                            case 696:
                                                var10 = var0.e;
                                                var8 = _closure2_slot10;
                                                var8 = -var8;
                                                if (!(!(var10 < var8))) {
                                                    _fun42050_ip = 714;
                                                    continue _fun42050
                                                }
                                            case 712:
                                                return var0;
                                            case 714:
                                                var8 = global;
                                                var8 = var8.Error;
                                                var10 = _closure2_slot5;
                                                var3 = _closure2_slot17;
                                                var3 = var3.bind(var4)(var0);
                                                var3 = var10 + var3;
                                                var3 = var8.bind(var4)(var3);
                                                throw var3;
                                            case 746:
                                                if (var1) {
                                                    _fun42050_ip = 773;
                                                    continue _fun42050
                                                }
                                            case 749:
                                                var7.length = var5;
                                                var0.s = var2;
                                                var0.e = var2;
                                                var7[var2] = var2;
                                                _fun42050_ip = 855;
                                                continue _fun42050;
                                            case 773:
                                                var1 = _closure2_slot17;
                                                var1 = var1.bind(var4)(var0);
                                                var7.length = var5;
                                                var1 = var6 - var1;
                                                var1 = var1 - var5;
                                                var8 = _closure2_slot7;
                                                var5 = 7;
                                                var6 = var1 % var5;
                                                var6 = var5 - var6;
                                                var6 = var6 % var5;
                                                var6 = var8.bind(var4)(var9, var6);
                                                var7[var2] = var6;
                                                var3 = _closure2_slot6;
                                                var1 = -var1;
                                                var1 = var1 / var5;
                                                var1 = var3.bind(var4)(var1);
                                                if (var1) {
                                                    _fun42050_ip = 849;
                                                    continue _fun42050
                                                }
                                            case 847:
                                                var1 = 0;
                                            case 849:
                                                var0.e = var1;
                                            case 855:
                                                return var0;
                                        }
                                    };
                                    var _closure2_slot22 = var0;
                                    var0 = function(arg0, arg1) { // Original name: subtract, environment: var1
                                        _fun42051: for (var _fun42051_ip = 0;;) switch (_fun42051_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = arg1;
                                                var8 = var0.constructor;
                                                var4 = var8.precision;
                                                var2 = var0.s;
                                                if (!var2) {
                                                    _fun42051_ip = 33;
                                                    continue _fun42051
                                                }
                                            case 25:
                                                var2 = var1.s;
                                                if (var2) {
                                                    _fun42051_ip = 107;
                                                    continue _fun42051
                                                }
                                            case 33:
                                                var2 = var1.s;
                                                if (var2) {
                                                    _fun42051_ip = 66;
                                                    continue _fun42051
                                                }
                                            case 41:
                                                var2 = var8.prototype;
                                                var3 = Object.create(var2, {
                                                    constructor: {
                                                        value: var8
                                                    }
                                                });
                                                var21 = var3;
                                                var20 = var0;
                                                var2 = new var21[var8](var20, var19);
                                                var2 = var2 instanceof Object ? var2 : var3;
                                                _fun42051_ip = 83;
                                                continue _fun42051;
                                            case 66:
                                                var3 = var1.s;
                                                var3 = -var3;
                                                var1.s = var3;
                                                var2 = var1;
                                            case 83:
                                                var5 = _closure2_slot2;
                                                if (!var5) {
                                                    _fun42051_ip = 105;
                                                    continue _fun42051
                                                }
                                            case 93:
                                                var5 = _closure2_slot22;
                                                var3 = undefined;
                                                var3 = var5.bind(var3)(var2, var4);
                                            case 105:
                                                return var2;
                                            case 107:
                                                var3 = var0.d;
                                                var2 = var1.d;
                                                var15 = var1.e;
                                                var9 = var0.e;
                                                var0 = var3.slice;
                                                var0 = var0.bind(var3)();
                                                var10 = var9 - var15;
                                                if (var10) {
                                                    _fun42051_ip = 226;
                                                    continue _fun42051
                                                }
                                            case 143:
                                                var3 = var0.length;
                                                var11 = var2.length;
                                                var7 = var3 < var11;
                                                if (!var7) {
                                                    _fun42051_ip = 163;
                                                    continue _fun42051
                                                }
                                            case 160:
                                                var11 = var3;
                                            case 163:
                                                var14 = 0;
                                                var5 = var14 < var11;
                                                var6 = 0;
                                                var3 = var7;
                                                if (!var5) {
                                                    _fun42051_ip = 216;
                                                    continue _fun42051
                                                }
                                            case 177:
                                                var13 = var0[var6];
                                                var12 = var2[var6];
                                                var5 = var6;
                                                if (!(var13 == var12)) {
                                                    _fun42051_ip = 204;
                                                    continue _fun42051
                                                }
                                            case 192:
                                                var6 = var5 + 1;
                                                var3 = var7;
                                                if (var6 < var11) {
                                                    _fun42051_ip = 177;
                                                    continue _fun42051
                                                }
                                            case 202:
                                                _fun42051_ip = 216;
                                                continue _fun42051;
                                            case 204:
                                                var6 = var0[var5];
                                                var5 = var2[var5];
                                                var3 = var6 < var5;
                                            case 216:
                                                var5 = var15;
                                                var14 = 0;
                                                _fun42051_ip = 385;
                                                continue _fun42051;
                                            case 226:
                                                var13 = 0;
                                                var6 = var10 < var13;
                                                if (var6) {
                                                    _fun42051_ip = 248;
                                                    continue _fun42051
                                                }
                                            case 235:
                                                var16 = var0.length;
                                                var11 = var2;
                                                var7 = var10;
                                                _fun42051_ip = 262;
                                                continue _fun42051;
                                            case 248:
                                                var7 = -var10;
                                                var16 = var2.length;
                                                var11 = var0;
                                                var9 = var15;
                                            case 262:
                                                var10 = global;
                                                var15 = var10.Math;
                                                var12 = var15.max;
                                                var18 = var10.Math;
                                                var17 = var18.ceil;
                                                var10 = 7;
                                                var10 = var4 / var10;
                                                var10 = var17.bind(var18)(var10);
                                                var12 = var12.bind(var15)(var10, var16);
                                                var10 = 2;
                                                var10 = var12 + var10;
                                                if (!(var7 > var10)) {
                                                    _fun42051_ip = 328;
                                                    continue _fun42051
                                                }
                                            case 316:
                                                var12 = 1;
                                                var11.length = var12;
                                                var7 = var10;
                                            case 328:
                                                var10 = var11.reverse;
                                                var10 = var10.bind(var11)();
                                                var10 = parseFloat(var7);
                                                var12 = var10 - 1;
                                                if (!var10) {
                                                    _fun42051_ip = 366;
                                                    continue _fun42051
                                                }
                                            case 347:
                                                var10 = var11.push;
                                                var10 = var10.bind(var11)(var13);
                                                var10 = parseFloat(var12);
                                                var12 = var10 - 1;
                                                if (var10) {
                                                    _fun42051_ip = 347;
                                                    continue _fun42051
                                                }
                                            case 366:
                                                var10 = var11.reverse;
                                                var10 = var10.bind(var11)();
                                                var5 = var9;
                                                var14 = var7;
                                                var3 = var6;
                                            case 385:
                                                var6 = var0;
                                                var13 = var2;
                                                if (!var3) {
                                                    _fun42051_ip = 414;
                                                    continue _fun42051
                                                }
                                            case 394:
                                                var3 = var1.s;
                                                var3 = -var3;
                                                var1.s = var3;
                                                var6 = var2;
                                                var13 = var0;
                                            case 414:
                                                var7 = var6.length;
                                                var0 = var13.length;
                                                var3 = var0 - var7;
                                                var0 = 0;
                                                var2 = var7;
                                                var7 = var2;
                                                if (!(var3 > var0)) {
                                                    _fun42051_ip = 460;
                                                    continue _fun42051
                                                }
                                            case 440:
                                                var10 = parseFloat(var2);
                                                var2 = var10 + 1;
                                                var6[var10] = var0;
                                                var3 = var3 - 1;
                                                var7 = var2;
                                                if (var3 > var0) {
                                                    _fun42051_ip = 440;
                                                    continue _fun42051
                                                }
                                            case 460:
                                                var12 = var13.length;
                                                var9 = var12 > var14;
                                                var3 = undefined;
                                                var11 = 9999999;
                                                var10 = undefined;
                                                if (!var9) {
                                                    _fun42051_ip = 603;
                                                    continue _fun42051
                                                }
                                            case 485:
                                                var9 = var12 - 1;
                                                var16 = var6[var9];
                                                var15 = var13[var9];
                                                if (!(var16 < var15)) {
                                                    _fun42051_ip = 580;
                                                    continue _fun42051
                                                }
                                            case 500:
                                                var15 = var9;
                                                if (!var15) {
                                                    _fun42051_ip = 550;
                                                    continue _fun42051
                                                }
                                            case 506:
                                                var18 = var9 - 1;
                                                var16 = var6[var18];
                                                var17 = var18;
                                                var15 = var17;
                                                if (!(var0 === var16)) {
                                                    _fun42051_ip = 550;
                                                    continue _fun42051
                                                }
                                            case 523:
                                                var6[var17] = var11;
                                                var15 = var17;
                                                if (!var15) {
                                                    _fun42051_ip = 550;
                                                    continue _fun42051
                                                }
                                            case 533:
                                                var18 = var17 - 1;
                                                var16 = var6[var18];
                                                var17 = var18;
                                                var15 = var17;
                                                if (var0 === var16) {
                                                    _fun42051_ip = 523;
                                                    continue _fun42051
                                                }
                                            case 550:
                                                var16 = var6[var15];
                                                var16 = var16 - 1;
                                                var6[var15] = var16;
                                                var17 = var6[var9];
                                                var16 = _closure2_slot9;
                                                var16 = var17 + var16;
                                                var6[var9] = var16;
                                                var10 = var15;
                                            case 580:
                                                var16 = var6[var9];
                                                var15 = var13[var9];
                                                var15 = var16 - var15;
                                                var6[var9] = var15;
                                                var12 = var9;
                                                if (var9 > var14) {
                                                    _fun42051_ip = 485;
                                                    continue _fun42051
                                                }
                                            case 603:
                                                var9 = var7 - 1;
                                                var7 = var6[var9];
                                                if (!(var0 === var7)) {
                                                    _fun42051_ip = 635;
                                                    continue _fun42051
                                                }
                                            case 614:
                                                var7 = var6.pop;
                                                var7 = var7.bind(var6)();
                                                var9 = var9 - 1;
                                                var7 = var6[var9];
                                                if (var0 === var7) {
                                                    _fun42051_ip = 614;
                                                    continue _fun42051
                                                }
                                            case 635:
                                                var7 = var6[var0];
                                                var9 = var5;
                                                var5 = var9;
                                                if (!(var0 === var7)) {
                                                    _fun42051_ip = 673;
                                                    continue _fun42051
                                                }
                                            case 649:
                                                var9 = var9 - 1;
                                                var7 = var6.shift;
                                                var7 = var7.bind(var6)();
                                                var7 = var6[var0];
                                                var5 = var9;
                                                if (var0 === var7) {
                                                    _fun42051_ip = 649;
                                                    continue _fun42051
                                                }
                                            case 673:
                                                var7 = var6[var0];
                                                if (var7) {
                                                    _fun42051_ip = 704;
                                                    continue _fun42051
                                                }
                                            case 680:
                                                var7 = var8.prototype;
                                                var7 = Object.create(var7, {
                                                    constructor: {
                                                        value: var8
                                                    }
                                                });
                                                var21 = var7;
                                                var20 = 0;
                                                var0 = new var21[var8](var20, var19);
                                                var0 = var0 instanceof Object ? var0 : var7;
                                                _fun42051_ip = 739;
                                                continue _fun42051;
                                            case 704:
                                                var1.d = var6;
                                                var1.e = var5;
                                                var5 = _closure2_slot2;
                                                var0 = var1;
                                                if (!var5) {
                                                    _fun42051_ip = 739;
                                                    continue _fun42051
                                                }
                                            case 726:
                                                var2 = _closure2_slot22;
                                                var2 = var2.bind(var3)(var1, var4);
                                                var0 = var1;
                                            case 739:
                                                return var0;
                                        }
                                    };
                                    var _closure2_slot23 = var0;
                                    var0 = function(arg0, arg1, arg2) { // Original name: toString, environment: var1
                                        _fun42052: for (var _fun42052_ip = 0;;) switch (_fun42052_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var4 = arg2;
                                                var2 = _closure2_slot17;
                                                var7 = undefined;
                                                var3 = var2.bind(var7)(var0);
                                                var5 = _closure2_slot15;
                                                var2 = var0.d;
                                                var10 = var5.bind(var7)(var2);
                                                var5 = var10.length;
                                                var2 = arg1;
                                                if (var2) {
                                                    _fun42052_ip = 335;
                                                    continue _fun42052
                                                }
                                            case 48:
                                                var12 = 0;
                                                if (!(!(var3 < var12))) {
                                                    _fun42052_ip = 256;
                                                    continue _fun42052
                                                }
                                            case 57:
                                                if (!(!(var3 >= var5))) {
                                                    _fun42052_ip = 174;
                                                    continue _fun42052
                                                }
                                            case 61:
                                                var6 = 1;
                                                var2 = var3 + var6;
                                                var11 = var10;
                                                if (!(var2 < var5)) {
                                                    _fun42052_ip = 108;
                                                    continue _fun42052
                                                }
                                            case 75:
                                                var8 = var10.slice;
                                                var9 = var8.bind(var10)(var12, var2);
                                                var8 = '.';
                                                var9 = var9 + var8;
                                                var8 = var10.slice;
                                                var8 = var8.bind(var10)(var2);
                                                var11 = var9 + var8;
                                            case 108:
                                                var8 = var4;
                                                var9 = var2;
                                                if (!var4) {
                                                    _fun42052_ip = 128;
                                                    continue _fun42052
                                                }
                                            case 117:
                                                var2 = var4 - var5;
                                                var8 = var2 > var12;
                                                var9 = var2;
                                            case 128:
                                                var2 = var11;
                                                if (!var8) {
                                                    _fun42052_ip = 468;
                                                    continue _fun42052
                                                }
                                            case 137:
                                                var6 = var3 + var6;
                                                var8 = var11;
                                                if (!(var6 === var5)) {
                                                    _fun42052_ip = 156;
                                                    continue _fun42052
                                                }
                                            case 148:
                                                var6 = '.';
                                                var8 = var11 + var6;
                                            case 156:
                                                var6 = _closure2_slot19;
                                                var6 = var6.bind(var7)(var9);
                                                var2 = var8 + var6;
                                                _fun42052_ip = 468;
                                                continue _fun42052;
                                            case 174:
                                                var8 = _closure2_slot19;
                                                var13 = 1;
                                                var6 = var3 + var13;
                                                var6 = var6 - var5;
                                                var6 = var8.bind(var7)(var6);
                                                var9 = var10 + var6;
                                                var6 = var4;
                                                var8 = undefined;
                                                if (!var4) {
                                                    _fun42052_ip = 221;
                                                    continue _fun42052
                                                }
                                            case 206:
                                                var11 = var4 - var3;
                                                var11 = var11 - var13;
                                                var6 = var11 > var12;
                                                var8 = var11;
                                            case 221:
                                                var2 = var9;
                                                if (!var6) {
                                                    _fun42052_ip = 468;
                                                    continue _fun42052
                                                }
                                            case 230:
                                                var6 = _closure2_slot19;
                                                var8 = var6.bind(var7)(var8);
                                                var6 = '.';
                                                var6 = var9 + var6;
                                                var2 = var6 + var8;
                                                _fun42052_ip = 468;
                                                continue _fun42052;
                                            case 256:
                                                var8 = _closure2_slot19;
                                                var9 = -var3;
                                                var6 = 1;
                                                var6 = var9 - var6;
                                                var8 = var8.bind(var7)(var6);
                                                var6 = '0.';
                                                var6 = var6 + var8;
                                                var8 = var6 + var10;
                                                var9 = undefined;
                                                var6 = var4;
                                                if (!var6) {
                                                    _fun42052_ip = 308;
                                                    continue _fun42052
                                                }
                                            case 297:
                                                var11 = var4 - var5;
                                                var6 = var11 > var12;
                                                var9 = var11;
                                            case 308:
                                                var2 = var8;
                                                if (!var6) {
                                                    _fun42052_ip = 468;
                                                    continue _fun42052
                                                }
                                            case 317:
                                                var6 = _closure2_slot19;
                                                var6 = var6.bind(var7)(var9);
                                                var2 = var8 + var6;
                                                _fun42052_ip = 468;
                                                continue _fun42052;
                                            case 335:
                                                if (!var4) {
                                                    _fun42052_ip = 348;
                                                    continue _fun42052
                                                }
                                            case 338:
                                                var6 = var4 - var5;
                                                var8 = 0;
                                                if (!(!(var6 > var8))) {
                                                    _fun42052_ip = 395;
                                                    continue _fun42052
                                                }
                                            case 348:
                                                var11 = 1;
                                                var4 = var10;
                                                if (!(var5 > var11)) {
                                                    _fun42052_ip = 444;
                                                    continue _fun42052
                                                }
                                            case 358:
                                                var9 = var10.charAt;
                                                var5 = 0;
                                                var9 = var9.bind(var10)(var5);
                                                var5 = '.';
                                                var9 = var9 + var5;
                                                var5 = var10.slice;
                                                var5 = var5.bind(var10)(var11);
                                                var4 = var9 + var5;
                                                _fun42052_ip = 444;
                                                continue _fun42052;
                                            case 395:
                                                var5 = var10.charAt;
                                                var8 = var5.bind(var10)(var8);
                                                var5 = '.';
                                                var8 = var8 + var5;
                                                var9 = var10.slice;
                                                var5 = 1;
                                                var5 = var9.bind(var10)(var5);
                                                var5 = var8 + var5;
                                                var1 = _closure2_slot19;
                                                var1 = var1.bind(var7)(var6);
                                                var4 = var5 + var1;
                                            case 444:
                                                var1 = 'e+';
                                                var5 = 0;
                                                if (!(var3 < var5)) {
                                                    _fun42052_ip = 460;
                                                    continue _fun42052
                                                }
                                            case 456:
                                                var1 = 'e';
                                            case 460:
                                                var1 = var4 + var1;
                                                var2 = var1 + var3;
                                            case 468:
                                                var3 = var0.s;
                                                var1 = 0;
                                                var0 = var2;
                                                if (!(var3 < var1)) {
                                                    _fun42052_ip = 490;
                                                    continue _fun42052
                                                }
                                            case 482:
                                                var1 = '-';
                                                var0 = var1 + var2;
                                            case 490:
                                                return var0;
                                        }
                                    };
                                    var _closure2_slot24 = var0;
                                    var0 = function(arg0, arg1) { // Original name: truncate, environment: var1
                                        _fun42053: for (var _fun42053_ip = 0;;) switch (_fun42053_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = arg1;
                                                var2 = var1.length;
                                                if (!(!(var2 > var0))) {
                                                    _fun42053_ip = 19;
                                                    continue _fun42053
                                                }
                                            case 15:
                                                var2 = undefined;
                                                return var2;
                                            case 19:
                                                var1.length = var0;
                                                var0 = true;
                                                return var0;
                                        }
                                    };
                                    var _closure2_slot25 = var0;
                                    var0 = function(arg0) { // Original name: config, environment: var1
                                        _fun42054: for (var _fun42054_ip = 0;;) switch (_fun42054_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var4 = this;
                                                if (!var1) {
                                                    _fun42054_ip = 346;
                                                    continue _fun42054
                                                }
                                            case 12:
                                                var2 = 'object';
                                                var0 = typeof var1;
                                                if (!(var2 === var0)) {
                                                    _fun42054_ip = 346;
                                                    continue _fun42054
                                                }
                                            case 26:
                                                var9 = ['precision', 1];
                                                var0 = 1000000000;
                                                var9[2] = var0;
                                                var0 = 'rounding';
                                                var9[3] = var0;
                                                var8 = 0;
                                                var9[4] = var8;
                                                var0 = 8;
                                                var9[5] = var0;
                                                var0 = 'toExpNeg';
                                                var9[6] = var0;
                                                var0 = -inf;
                                                var9[7] = var0;
                                                var9[8] = var8;
                                                var0 = 'toExpPos';
                                                var9[9] = var0;
                                                var9[10] = var8;
                                                var0 = inf;
                                                var9[11] = var0;
                                                var0 = var9.length;
                                                var3 = var8 < var0;
                                                var7 = 3;
                                                var6 = 2;
                                                var5 = 1;
                                                var2 = undefined;
                                                if (!var3) {
                                                    _fun42054_ip = 248;
                                                    continue _fun42054
                                                }
                                            case 145:
                                                var10 = var9[var8];
                                                var3 = var1[var10];
                                                if (!(var2 !== var3)) {
                                                    _fun42054_ip = 235;
                                                    continue _fun42054
                                                }
                                            case 157:
                                                var11 = _closure2_slot6;
                                                var11 = var11.bind(var2)(var3);
                                                if (!(var11 === var3)) {
                                                    _fun42054_ip = 194;
                                                    continue _fun42054
                                                }
                                            case 170:
                                                var11 = var8 + var5;
                                                var11 = var9[var11];
                                                if (!(var3 >= var11)) {
                                                    _fun42054_ip = 194;
                                                    continue _fun42054
                                                }
                                            case 182:
                                                var11 = var8 + var6;
                                                var11 = var9[var11];
                                                if (!(!(var3 <= var11))) {
                                                    _fun42054_ip = 231;
                                                    continue _fun42054
                                                }
                                            case 194:
                                                var11 = global;
                                                var12 = var11.Error;
                                                var11 = _closure2_slot4;
                                                var13 = var11 + var10;
                                                var11 = ': ';
                                                var11 = var13 + var11;
                                                var11 = var11 + var3;
                                                var11 = var12.bind(var2)(var11);
                                                throw var11;
                                            case 231:
                                                var4[var10] = var3;
                                            case 235:
                                                var8 = var8 + var7;
                                                var3 = var9.length;
                                                if (var8 < var3) {
                                                    _fun42054_ip = 145;
                                                    continue _fun42054
                                                }
                                            case 248:
                                                var3 = var1.LN10;
                                                if (!(var2 !== var3)) {
                                                    _fun42054_ip = 305;
                                                    continue _fun42054
                                                }
                                            case 258:
                                                var1 = global;
                                                var5 = var1.Math;
                                                var5 = var5.LN10;
                                                if (!(var3 == var5)) {
                                                    _fun42054_ip = 307;
                                                    continue _fun42054
                                                }
                                            case 276:
                                                var5 = var4.prototype;
                                                var6 = Object.create(var5, {
                                                    constructor: {
                                                        value: var4
                                                    }
                                                });
                                                var15 = var6;
                                                var14 = var3;
                                                var5 = new var15[var4](var14, var13);
                                                var5 = var5 instanceof Object ? var5 : var6;
                                                var4.LN10 = var5;
                                            case 305:
                                                return var4;
                                            case 307:
                                                var1 = var1.Error;
                                                var4 = _closure2_slot4;
                                                var0 = 'LN10';
                                                var4 = var4 + var0;
                                                var0 = ': ';
                                                var0 = var4 + var0;
                                                var0 = var0 + var3;
                                                var0 = var1.bind(var2)(var0);
                                                throw var0;
                                            case 346:
                                                var0 = global;
                                                var2 = var0.Error;
                                                var1 = undefined;
                                                var0 = '[DecimalError] Object expected';
                                                var0 = var2.bind(var1)(var0);
                                                throw var0;
                                        }
                                    };
                                    var _closure2_slot26 = var0;
                                    var0 = true;
                                    var _closure2_slot2 = var0;
                                    var0 = '[DecimalError] ';
                                    var _closure2_slot3 = var0;
                                    var0 = '[DecimalError] Invalid argument: ';
                                    var _closure2_slot4 = var0;
                                    var0 = '[DecimalError] Exponent out of range: ';
                                    var _closure2_slot5 = var0;
                                    var2 = global;
                                    var0 = var2.Math;
                                    var4 = var0.floor;
                                    var _closure2_slot6 = var4;
                                    var0 = var2.Math;
                                    var0 = var0.pow;
                                    var _closure2_slot7 = var0;
                                    var0 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
                                    var _closure2_slot8 = var0;
                                    var0 = 10000000;
                                    var _closure2_slot9 = var0;
                                    var0 = undefined;
                                    var3 = 1286742750677284.5;
                                    var3 = var4.bind(var0)(var3);
                                    var _closure2_slot10 = var3;
                                    var4 = {};
                                    var _closure2_slot11 = var4;
                                    var3 = function() { // Environment: var1
                                        _fun42055: for (var _fun42055_ip = 0;;) switch (_fun42055_ip) {
                                            case 0:
                                                var2 = this;
                                                var0 = var2.constructor;
                                                var1 = var0.prototype;
                                                var1 = Object.create(var1, {
                                                    constructor: {
                                                        value: var0
                                                    }
                                                });
                                                var4 = var1;
                                                var3 = var2;
                                                var0 = new var4[var0](var3, var2);
                                                var0 = var0 instanceof Object ? var0 : var1;
                                                var1 = var0.s;
                                                if (!var1) {
                                                    _fun42055_ip = 48;
                                                    continue _fun42055
                                                }
                                            case 39:
                                                var1 = 1;
                                                var0.s = var1;
                                            case 48:
                                                return var0;
                                        }
                                    };
                                    var4.abs = var3;
                                    var4.absoluteValue = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        _fun42056: for (var _fun42056_ip = 0;;) switch (_fun42056_ip) {
                                            case 0:
                                                var0 = this;
                                                var3 = var0.constructor;
                                                var1 = var3.prototype;
                                                var2 = Object.create(var1, {
                                                    constructor: {
                                                        value: var3
                                                    }
                                                });
                                                var10 = arg0;
                                                var11 = var2;
                                                var1 = new var11[var3](var10, var9);
                                                var1 = var1 instanceof Object ? var1 : var2;
                                                var3 = var0.s;
                                                var2 = var1.s;
                                                if (!(var3 === var2)) {
                                                    _fun42056_ip = 270;
                                                    continue _fun42056
                                                }
                                            case 48:
                                                var3 = var0.e;
                                                var2 = var1.e;
                                                if (!(var3 === var2)) {
                                                    _fun42056_ip = 227;
                                                    continue _fun42056
                                                }
                                            case 65:
                                                var2 = var0.d;
                                                var6 = var2.length;
                                                var2 = var1.d;
                                                var4 = var2.length;
                                                var7 = var4;
                                                if (!(var6 < var7)) {
                                                    _fun42056_ip = 95;
                                                    continue _fun42056
                                                }
                                            case 92:
                                                var7 = var6;
                                            case 95:
                                                var3 = 0;
                                                var5 = var3 < var7;
                                                var2 = 0;
                                                if (!var5) {
                                                    _fun42056_ip = 138;
                                                    continue _fun42056
                                                }
                                            case 106:
                                                var5 = var0.d;
                                                var9 = var5[var2];
                                                var5 = var1.d;
                                                var8 = var5[var2];
                                                var5 = var2;
                                                if (!(var9 === var8)) {
                                                    _fun42056_ip = 178;
                                                    continue _fun42056
                                                }
                                            case 131:
                                                var2 = var5 + 1;
                                                if (var2 < var7) {
                                                    _fun42056_ip = 106;
                                                    continue _fun42056
                                                }
                                            case 138:
                                                var2 = 0;
                                                if (!(var6 !== var4)) {
                                                    _fun42056_ip = 176;
                                                    continue _fun42056
                                                }
                                            case 144:
                                                var7 = var6 > var4;
                                                var4 = var0.s;
                                                var6 = var4 < var3;
                                                var4 = -1;
                                                var6 = var7 ^ var6;
                                                if (!var6) {
                                                    _fun42056_ip = 173;
                                                    continue _fun42056
                                                }
                                            case 170:
                                                var4 = 1;
                                            case 173:
                                                var2 = var4;
                                            case 176:
                                                return var2;
                                            case 178:
                                                var2 = var0.d;
                                                var4 = var2[var5];
                                                var2 = var1.d;
                                                var2 = var2[var5];
                                                var4 = var4 > var2;
                                                var2 = var0.s;
                                                var3 = var2 < var3;
                                                var2 = -1;
                                                var3 = var4 ^ var3;
                                                if (!var3) {
                                                    _fun42056_ip = 225;
                                                    continue _fun42056
                                                }
                                            case 222:
                                                var2 = 1;
                                            case 225:
                                                return var2;
                                            case 227:
                                                var3 = var0.e;
                                                var2 = var1.e;
                                                var4 = var3 > var2;
                                                var3 = var0.s;
                                                var2 = 0;
                                                var3 = var3 < var2;
                                                var2 = -1;
                                                var3 = var4 ^ var3;
                                                if (!var3) {
                                                    _fun42056_ip = 268;
                                                    continue _fun42056
                                                }
                                            case 265:
                                                var2 = 1;
                                            case 268:
                                                return var2;
                                            case 270:
                                                var0 = var0.s;
                                                if (var0) {
                                                    _fun42056_ip = 286;
                                                    continue _fun42056
                                                }
                                            case 278:
                                                var1 = var1.s;
                                                var0 = -var1;
                                            case 286:
                                                return var0;
                                        }
                                    };
                                    var4.cmp = var3;
                                    var4.comparedTo = var3;
                                    var3 = function() { // Environment: var1
                                        _fun42057: for (var _fun42057_ip = 0;;) switch (_fun42057_ip) {
                                            case 0:
                                                var0 = this;
                                                var1 = var0.d;
                                                var2 = var1.length;
                                                var1 = 1;
                                                var1 = var2 - var1;
                                                var2 = var0.e;
                                                var3 = var1 - var2;
                                                var2 = 7;
                                                var6 = var2 * var3;
                                                var0 = var0.d;
                                                var5 = var0[var1];
                                                var1 = var6;
                                                if (!var5) {
                                                    _fun42057_ip = 88;
                                                    continue _fun42057
                                                }
                                            case 51:
                                                var4 = 10;
                                                var0 = var5 % var4;
                                                var3 = 0;
                                                var2 = var6;
                                                var1 = var2;
                                                if (!(var0 === var3)) {
                                                    _fun42057_ip = 88;
                                                    continue _fun42057
                                                }
                                            case 70:
                                                var2 = var2 - 1;
                                                var5 = var5 / var4;
                                                var0 = var5 % var4;
                                                var1 = var2;
                                                if (var0 === var3) {
                                                    _fun42057_ip = 70;
                                                    continue _fun42057
                                                }
                                            case 88:
                                                var0 = 0;
                                                if (!(!(var1 < var0))) {
                                                    _fun42057_ip = 97;
                                                    continue _fun42057
                                                }
                                            case 94:
                                                var0 = var1;
                                            case 97:
                                                return var0;
                                        }
                                    };
                                    var4.dp = var3;
                                    var4.decimalPlaces = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        var3 = this;
                                        var2 = _closure2_slot12;
                                        var4 = var3.constructor;
                                        var0 = var4.prototype;
                                        var1 = Object.create(var0, {
                                            constructor: {
                                                value: var4
                                            }
                                        });
                                        var6 = arg0;
                                        var7 = var1;
                                        var0 = new var7[var4](var6, var5);
                                        var1 = var0 instanceof Object ? var0 : var1;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var3, var1);
                                        return var0;
                                    };
                                    var4.div = var3;
                                    var4.dividedBy = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        var7 = this;
                                        var1 = var7.constructor;
                                        var3 = _closure2_slot22;
                                        var6 = _closure2_slot12;
                                        var0 = var1.prototype;
                                        var2 = Object.create(var0, {
                                            constructor: {
                                                value: var1
                                            }
                                        });
                                        var11 = arg0;
                                        var12 = var2;
                                        var0 = new var12[var1](var11, var10);
                                        var10 = var0 instanceof Object ? var0 : var2;
                                        var2 = undefined;
                                        var9 = 0;
                                        var8 = 1;
                                        var12 = undefined;
                                        var11 = var7;
                                        var0 = var12[var6](var11, var10, var9, var8, var7);
                                        var1 = var1.precision;
                                        var1 = var3.bind(var2)(var0, var1);
                                        return var0;
                                    };
                                    var4.idiv = var3;
                                    var4.dividedToIntegerBy = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        var2 = this;
                                        var1 = var2.cmp;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = !var0;
                                        return var0;
                                    };
                                    var4.eq = var3;
                                    var4.equals = var3;
                                    var3 = function() { // Environment: var1
                                        var2 = _closure2_slot17;
                                        var1 = undefined;
                                        var0 = this;
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var4.exponent = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        var2 = this;
                                        var1 = var2.cmp;
                                        var0 = arg0;
                                        var1 = var1.bind(var2)(var0);
                                        var0 = 0;
                                        var0 = var1 > var0;
                                        return var0;
                                    };
                                    var4.gt = var3;
                                    var4.greaterThan = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        var2 = this;
                                        var1 = var2.cmp;
                                        var0 = arg0;
                                        var1 = var1.bind(var2)(var0);
                                        var0 = 0;
                                        var0 = var1 >= var0;
                                        return var0;
                                    };
                                    var4.gte = var3;
                                    var4.greaterThanOrEqualTo = var3;
                                    var3 = function() { // Environment: var1
                                        var0 = this;
                                        var1 = var0.e;
                                        var0 = var0.d;
                                        var2 = var0.length;
                                        var0 = 2;
                                        var0 = var2 - var0;
                                        var0 = var1 > var0;
                                        return var0;
                                    };
                                    var4.isint = var3;
                                    var4.isInteger = var3;
                                    var3 = function() { // Environment: var1
                                        var0 = this;
                                        var1 = var0.s;
                                        var0 = 0;
                                        var0 = var1 < var0;
                                        return var0;
                                    };
                                    var4.isneg = var3;
                                    var4.isNegative = var3;
                                    var3 = function() { // Environment: var1
                                        var0 = this;
                                        var1 = var0.s;
                                        var0 = 0;
                                        var0 = var1 > var0;
                                        return var0;
                                    };
                                    var4.ispos = var3;
                                    var4.isPositive = var3;
                                    var3 = function() { // Environment: var1
                                        var0 = this;
                                        var1 = var0.s;
                                        var0 = 0;
                                        var0 = var0 === var1;
                                        return var0;
                                    };
                                    var4.isZero = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        var2 = this;
                                        var1 = var2.cmp;
                                        var0 = arg0;
                                        var1 = var1.bind(var2)(var0);
                                        var0 = 0;
                                        var0 = var1 < var0;
                                        return var0;
                                    };
                                    var4.lt = var3;
                                    var4.lessThan = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        var2 = this;
                                        var1 = var2.cmp;
                                        var0 = arg0;
                                        var1 = var1.bind(var2)(var0);
                                        var0 = 1;
                                        var0 = var1 < var0;
                                        return var0;
                                    };
                                    var4.lte = var3;
                                    var4.lessThanOrEqualTo = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        _fun42070: for (var _fun42070_ip = 0;;) switch (_fun42070_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = this;
                                                var5 = var0.constructor;
                                                var4 = var5.precision;
                                                var2 = 5;
                                                var8 = var4 + var2;
                                                var2 = undefined;
                                                if (!(var2 !== var1)) {
                                                    _fun42070_ip = 110;
                                                    continue _fun42070
                                                }
                                            case 30:
                                                var3 = var5.prototype;
                                                var3 = Object.create(var3, {
                                                    constructor: {
                                                        value: var5
                                                    }
                                                });
                                                var13 = var3;
                                                var12 = var1;
                                                var1 = new var13[var5](var12, var11);
                                                var3 = var1 instanceof Object ? var1 : var3;
                                                var6 = var3.s;
                                                var1 = 1;
                                                if (!(!(var6 < var1))) {
                                                    _fun42070_ip = 89;
                                                    continue _fun42070
                                                }
                                            case 65:
                                                var6 = var3.eq;
                                                var1 = _closure2_slot0;
                                                var1 = var6.bind(var3)(var1);
                                                var9 = var3;
                                                if (!var1) {
                                                    _fun42070_ip = 133;
                                                    continue _fun42070
                                                }
                                            case 89:
                                                var1 = global;
                                                var3 = var1.Error;
                                                var1 = '[DecimalError] NaN';
                                                var1 = var3.bind(var2)(var1);
                                                throw var1;
                                            case 110:
                                                var1 = var5.prototype;
                                                var3 = Object.create(var1, {
                                                    constructor: {
                                                        value: var5
                                                    }
                                                });
                                                var12 = 10;
                                                var13 = var3;
                                                var1 = new var13[var5](var12, var11);
                                                var9 = var1 instanceof Object ? var1 : var3;
                                            case 133:
                                                var3 = var0.s;
                                                var1 = 1;
                                                if (!(!(var3 < var1))) {
                                                    _fun42070_ip = 241;
                                                    continue _fun42070
                                                }
                                            case 145:
                                                var6 = var0.eq;
                                                var1 = _closure2_slot0;
                                                var1 = var6.bind(var0)(var1);
                                                if (var1) {
                                                    _fun42070_ip = 217;
                                                    continue _fun42070
                                                }
                                            case 166:
                                                var1 = false;
                                                _closure2_slot2 = var1;
                                                var7 = _closure2_slot12;
                                                var1 = _closure2_slot20;
                                                var6 = var1.bind(var2)(var0, var8);
                                                var1 = var1.bind(var2)(var9, var8);
                                                var1 = var7.bind(var2)(var6, var1, var8);
                                                var6 = true;
                                                _closure2_slot2 = var6;
                                                var3 = _closure2_slot22;
                                                var3 = var3.bind(var2)(var1, var4);
                                                _fun42070_ip = 239;
                                                continue _fun42070;
                                            case 217:
                                                var3 = var5.prototype;
                                                var4 = Object.create(var3, {
                                                    constructor: {
                                                        value: var5
                                                    }
                                                });
                                                var12 = 0;
                                                var13 = var4;
                                                var3 = new var13[var5](var12, var11);
                                                var1 = var3 instanceof Object ? var3 : var4;
                                            case 239:
                                                return var1;
                                            case 241:
                                                var1 = global;
                                                var1 = var1.Error;
                                                var3 = _closure2_slot3;
                                                var4 = var0.s;
                                                var0 = '-Infinity';
                                                if (!var4) {
                                                    _fun42070_ip = 274;
                                                    continue _fun42070
                                                }
                                            case 270:
                                                var0 = 'NaN';
                                            case 274:
                                                var0 = var3 + var0;
                                                var0 = var1.bind(var2)(var0);
                                                throw var0;
                                        }
                                    };
                                    var4.log = var3;
                                    var4.logarithm = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        _fun42071: for (var _fun42071_ip = 0;;) switch (_fun42071_ip) {
                                            case 0:
                                                var4 = this;
                                                var2 = var4.constructor;
                                                var0 = var2.prototype;
                                                var1 = Object.create(var0, {
                                                    constructor: {
                                                        value: var2
                                                    }
                                                });
                                                var6 = arg0;
                                                var7 = var1;
                                                var0 = new var7[var2](var6, var5);
                                                var3 = var0 instanceof Object ? var0 : var1;
                                                var1 = var4.s;
                                                var0 = var3.s;
                                                if (!(var1 != var0)) {
                                                    _fun42071_ip = 76;
                                                    continue _fun42071
                                                }
                                            case 45:
                                                var1 = _closure2_slot13;
                                                var0 = var3.s;
                                                var0 = -var0;
                                                var3.s = var0;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var4, var3);
                                                _fun42071_ip = 91;
                                                continue _fun42071;
                                            case 76:
                                                var2 = _closure2_slot23;
                                                var1 = undefined;
                                                var0 = var2.bind(var1)(var4, var3);
                                            case 91:
                                                return var0;
                                        }
                                    };
                                    var4.sub = var3;
                                    var4.minus = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        _fun42072: for (var _fun42072_ip = 0;;) switch (_fun42072_ip) {
                                            case 0:
                                                var3 = this;
                                                var0 = var3.constructor;
                                                var6 = var0.precision;
                                                var1 = var0.prototype;
                                                var2 = Object.create(var1, {
                                                    constructor: {
                                                        value: var0
                                                    }
                                                });
                                                var11 = arg0;
                                                var12 = var2;
                                                var1 = new var12[var0](var11, var10);
                                                var5 = var1 instanceof Object ? var1 : var2;
                                                var1 = var5.s;
                                                if (var1) {
                                                    _fun42072_ip = 68;
                                                    continue _fun42072
                                                }
                                            case 45:
                                                var1 = global;
                                                var4 = var1.Error;
                                                var2 = undefined;
                                                var1 = '[DecimalError] NaN';
                                                var1 = var4.bind(var2)(var1);
                                                throw var1;
                                            case 68:
                                                var1 = var3.s;
                                                if (var1) {
                                                    _fun42072_ip = 116;
                                                    continue _fun42072
                                                }
                                            case 79:
                                                var2 = _closure2_slot22;
                                                var1 = var0.prototype;
                                                var1 = Object.create(var1, {
                                                    constructor: {
                                                        value: var0
                                                    }
                                                });
                                                var12 = var1;
                                                var11 = var3;
                                                var0 = new var12[var0](var11, var10);
                                                var0 = var0 instanceof Object ? var0 : var1;
                                                var1 = undefined;
                                                var1 = var2.bind(var1)(var0, var6);
                                                _fun42072_ip = 171;
                                                continue _fun42072;
                                            case 116:
                                                var1 = false;
                                                _closure2_slot2 = var1;
                                                var7 = _closure2_slot12;
                                                var12 = undefined;
                                                var9 = 0;
                                                var8 = 1;
                                                var11 = var3;
                                                var10 = var5;
                                                var2 = var12[var7](var11, var10, var9, var8, var7);
                                                var1 = var2.times;
                                                var2 = var1.bind(var2)(var5);
                                                var1 = true;
                                                _closure2_slot2 = var1;
                                                var1 = var3.minus;
                                                var0 = var1.bind(var3)(var2);
                                            case 171:
                                                return var0;
                                        }
                                    };
                                    var4.mod = var3;
                                    var4.modulo = var3;
                                    var3 = function() { // Environment: var1
                                        var2 = _closure2_slot16;
                                        var1 = undefined;
                                        var0 = this;
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var4.exp = var3;
                                    var4.naturalExponential = var3;
                                    var3 = function() { // Environment: var1
                                        var2 = _closure2_slot20;
                                        var1 = undefined;
                                        var0 = this;
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var4.ln = var3;
                                    var4.naturalLogarithm = var3;
                                    var3 = function() { // Environment: var1
                                        _fun42075: for (var _fun42075_ip = 0;;) switch (_fun42075_ip) {
                                            case 0:
                                                var2 = this;
                                                var0 = var2.constructor;
                                                var1 = var0.prototype;
                                                var1 = Object.create(var1, {
                                                    constructor: {
                                                        value: var0
                                                    }
                                                });
                                                var4 = var1;
                                                var3 = var2;
                                                var0 = new var4[var0](var3, var2);
                                                var0 = var0 instanceof Object ? var0 : var1;
                                                var1 = var0.s;
                                                var1 = -var1;
                                                if (var1) {
                                                    _fun42075_ip = 44;
                                                    continue _fun42075
                                                }
                                            case 42:
                                                var1 = 0;
                                            case 44:
                                                var0.s = var1;
                                                return var0;
                                        }
                                    };
                                    var4.neg = var3;
                                    var4.negated = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        _fun42076: for (var _fun42076_ip = 0;;) switch (_fun42076_ip) {
                                            case 0:
                                                var4 = this;
                                                var2 = var4.constructor;
                                                var0 = var2.prototype;
                                                var1 = Object.create(var0, {
                                                    constructor: {
                                                        value: var2
                                                    }
                                                });
                                                var6 = arg0;
                                                var7 = var1;
                                                var0 = new var7[var2](var6, var5);
                                                var3 = var0 instanceof Object ? var0 : var1;
                                                var1 = var4.s;
                                                var0 = var3.s;
                                                if (!(var1 != var0)) {
                                                    _fun42076_ip = 76;
                                                    continue _fun42076
                                                }
                                            case 45:
                                                var1 = _closure2_slot23;
                                                var0 = var3.s;
                                                var0 = -var0;
                                                var3.s = var0;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var4, var3);
                                                _fun42076_ip = 91;
                                                continue _fun42076;
                                            case 76:
                                                var2 = _closure2_slot13;
                                                var1 = undefined;
                                                var0 = var2.bind(var1)(var4, var3);
                                            case 91:
                                                return var0;
                                        }
                                    };
                                    var4.add = var3;
                                    var4.plus = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        _fun42077: for (var _fun42077_ip = 0;;) switch (_fun42077_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var0 = this;
                                                var2 = undefined;
                                                if (!(var2 !== var3)) {
                                                    _fun42077_ip = 38;
                                                    continue _fun42077
                                                }
                                            case 12:
                                                var1 = !var3;
                                                var1 = !var1;
                                                if (!(var3 !== var1)) {
                                                    _fun42077_ip = 38;
                                                    continue _fun42077
                                                }
                                            case 22:
                                                var1 = 1;
                                                if (!(var1 !== var3)) {
                                                    _fun42077_ip = 38;
                                                    continue _fun42077
                                                }
                                            case 29:
                                                var1 = 0;
                                                if (!(var1 === var3)) {
                                                    _fun42077_ip = 185;
                                                    continue _fun42077
                                                }
                                            case 38:
                                                var1 = _closure2_slot17;
                                                var1 = var1.bind(var2)(var0);
                                                var6 = 1;
                                                var1 = var1 + var6;
                                                var4 = var0.d;
                                                var4 = var4.length;
                                                var5 = var4 - var6;
                                                var4 = 7;
                                                var4 = var4 * var5;
                                                var7 = var4 + var6;
                                                var4 = var0.d;
                                                var10 = var4[var5];
                                                var4 = var7;
                                                if (!var10) {
                                                    _fun42077_ip = 167;
                                                    continue _fun42077
                                                }
                                            case 97:
                                                var6 = 10;
                                                var8 = var10 % var6;
                                                var5 = 0;
                                                var9 = var7;
                                                var7 = var9;
                                                if (!(var8 === var5)) {
                                                    _fun42077_ip = 134;
                                                    continue _fun42077
                                                }
                                            case 116:
                                                var9 = var9 - 1;
                                                var10 = var10 / var6;
                                                var8 = var10 % var6;
                                                var7 = var9;
                                                if (var8 === var5) {
                                                    _fun42077_ip = 116;
                                                    continue _fun42077
                                                }
                                            case 134:
                                                var0 = var0.d;
                                                var5 = var0[var5];
                                                var0 = var7;
                                                var4 = var0;
                                                if (!(var5 >= var6)) {
                                                    _fun42077_ip = 167;
                                                    continue _fun42077
                                                }
                                            case 153:
                                                var0 = var0 + 1;
                                                var5 = var5 / var6;
                                                var4 = var0;
                                                if (var5 >= var6) {
                                                    _fun42077_ip = 153;
                                                    continue _fun42077
                                                }
                                            case 167:
                                                var0 = var4;
                                                if (!var3) {
                                                    _fun42077_ip = 183;
                                                    continue _fun42077
                                                }
                                            case 173:
                                                var0 = var4;
                                                if (!(var1 > var0)) {
                                                    _fun42077_ip = 183;
                                                    continue _fun42077
                                                }
                                            case 180:
                                                var0 = var1;
                                            case 183:
                                                return var0;
                                            case 185:
                                                var0 = global;
                                                var1 = var0.Error;
                                                var0 = _closure2_slot4;
                                                var0 = var0 + var3;
                                                var0 = var1.bind(var2)(var0);
                                                throw var0;
                                        }
                                    };
                                    var4.sd = var3;
                                    var4.precision = var3;
                                    var3 = function() { // Environment: var1
                                        _fun42078: for (var _fun42078_ip = 0;;) switch (_fun42078_ip) {
                                            case 0:
                                                var0 = this;
                                                var2 = var0.constructor;
                                                var1 = var0.s;
                                                var16 = 1;
                                                if (!(!(var1 < var16))) {
                                                    _fun42078_ip = 560;
                                                    continue _fun42078
                                                }
                                            case 23:
                                                var1 = _closure2_slot17;
                                                var5 = undefined;
                                                var8 = var1.bind(var5)(var0);
                                                var1 = false;
                                                _closure2_slot2 = var1;
                                                var1 = global;
                                                var7 = var1.Math;
                                                var6 = var7.sqrt;
                                                var4 = var0 - 0;
                                                var6 = var6.bind(var7)(var4);
                                                var15 = 0;
                                                if (!(var15 != var6)) {
                                                    _fun42078_ip = 119;
                                                    continue _fun42078
                                                }
                                            case 71:
                                                var4 = inf;
                                                if (!(var6 != var4)) {
                                                    _fun42078_ip = 119;
                                                    continue _fun42078
                                                }
                                            case 85:
                                                var4 = var6.toString;
                                                var25 = var4.bind(var6)();
                                                var6 = var2.prototype;
                                                var6 = Object.create(var6, {
                                                    constructor: {
                                                        value: var2
                                                    }
                                                });
                                                var26 = var6;
                                                var4 = new var26[var2](var25, var24);
                                                var14 = var4 instanceof Object ? var4 : var6;
                                                _fun42078_ip = 308;
                                                continue _fun42078;
                                            case 119:
                                                var6 = _closure2_slot15;
                                                var4 = var0.d;
                                                var9 = var6.bind(var5)(var4);
                                                var4 = var9.length;
                                                var4 = var4 + var8;
                                                var7 = 2;
                                                var4 = var4 % var7;
                                                var6 = var9;
                                                if (!(var4 === var15)) {
                                                    _fun42078_ip = 166;
                                                    continue _fun42078
                                                }
                                            case 156:
                                                var4 = '0';
                                                var6 = var9 + var4;
                                            case 166:
                                                var4 = var1.Math;
                                                var1 = var4.sqrt;
                                                var4 = var1.bind(var4)(var6);
                                                var6 = _closure2_slot6;
                                                var1 = var8 + var16;
                                                var1 = var1 / var7;
                                                var6 = var6.bind(var5)(var1);
                                                var1 = var8 < var15;
                                                if (var1) {
                                                    _fun42078_ip = 211;
                                                    continue _fun42078
                                                }
                                            case 207:
                                                var1 = var8 % var7;
                                            case 211:
                                                var6 = var6 - var1;
                                                var1 = inf;
                                                if (!(var4 != var1)) {
                                                    _fun42078_ip = 275;
                                                    continue _fun42078
                                                }
                                            case 229:
                                                var1 = var4.toExponential;
                                                var7 = var1.bind(var4)();
                                                var4 = var7.slice;
                                                var8 = var7.indexOf;
                                                var1 = 'e';
                                                var1 = var8.bind(var7)(var1);
                                                var1 = var1 + var16;
                                                var1 = var4.bind(var7)(var15, var1);
                                                var1 = var1 + var6;
                                                _fun42078_ip = 285;
                                                continue _fun42078;
                                            case 275:
                                                var4 = '1e';
                                                var1 = var4 + var6;
                                            case 285:
                                                var4 = var2.prototype;
                                                var4 = Object.create(var4, {
                                                    constructor: {
                                                        value: var2
                                                    }
                                                });
                                                var26 = var4;
                                                var25 = var1;
                                                var1 = new var26[var2](var25, var24);
                                                var14 = var1 instanceof Object ? var1 : var4;
                                            case 308:
                                                var4 = var2.precision;
                                                var13 = 3;
                                                var12 = var4 + var13;
                                                var11 = 4;
                                                var10 = '9999';
                                                var9 = '4999';
                                                var8 = 2;
                                                var7 = 0.5;
                                                var6 = var12;
                                            case 352:
                                                var17 = var14.plus;
                                                var18 = _closure2_slot12;
                                                var1 = var6 + var8;
                                                var1 = var18.bind(var5)(var0, var14, var1);
                                                var17 = var17.bind(var14)(var1);
                                                var1 = var17.times;
                                                var17 = var1.bind(var17)(var7);
                                                var18 = _closure2_slot15;
                                                var1 = var14.d;
                                                var19 = var18.bind(var5)(var1);
                                                var1 = var19.slice;
                                                var19 = var1.bind(var19)(var15, var6);
                                                var1 = var17.d;
                                                var22 = var18.bind(var5)(var1);
                                                var1 = var22.slice;
                                                var1 = var1.bind(var22)(var15, var6);
                                                var20 = var14;
                                                var18 = var6;
                                                var14 = var17;
                                                var6 = var18;
                                                if (var19 !== var1) {
                                                    _fun42078_ip = 352;
                                                    continue _fun42078
                                                }
                                            case 451:
                                                var21 = var22.slice;
                                                var19 = var18 - var13;
                                                var1 = var18 + var16;
                                                var19 = var21.bind(var22)(var19, var1);
                                                if (!(var12 == var18)) {
                                                    _fun42078_ip = 478;
                                                    continue _fun42078
                                                }
                                            case 474:
                                                if (!(var9 != var19)) {
                                                    _fun42078_ip = 487;
                                                    continue _fun42078
                                                }
                                            case 478:
                                                var1 = var17;
                                                if (!(var10 == var19)) {
                                                    _fun42078_ip = 542;
                                                    continue _fun42078
                                                }
                                            case 485:
                                                _fun42078_ip = 530;
                                                continue _fun42078;
                                            case 487:
                                                var21 = _closure2_slot22;
                                                var19 = var4 + var16;
                                                var19 = var21.bind(var5)(var20, var19, var15);
                                                var19 = var20.times;
                                                var21 = var19.bind(var20)(var20);
                                                var19 = var21.eq;
                                                var19 = var19.bind(var21)(var0);
                                                var1 = var20;
                                                if (var19) {
                                                    _fun42078_ip = 542;
                                                    continue _fun42078
                                                }
                                            case 530:
                                                var6 = var18 + var11;
                                                var14 = var17;
                                                _fun42078_ip = 352;
                                                continue _fun42078;
                                            case 542:
                                                var6 = true;
                                                _closure2_slot2 = var6;
                                                var3 = _closure2_slot22;
                                                var3 = var3.bind(var5)(var1, var4);
                                                return var1;
                                            case 560:
                                                var0 = var0.s;
                                                if (var0) {
                                                    _fun42078_ip = 592;
                                                    continue _fun42078
                                                }
                                            case 568:
                                                var0 = var2.prototype;
                                                var1 = Object.create(var0, {
                                                    constructor: {
                                                        value: var2
                                                    }
                                                });
                                                var25 = 0;
                                                var26 = var1;
                                                var0 = new var26[var2](var25, var24);
                                                var0 = var0 instanceof Object ? var0 : var1;
                                                return var0;
                                            case 592:
                                                var0 = global;
                                                var2 = var0.Error;
                                                var1 = undefined;
                                                var0 = '[DecimalError] NaN';
                                                var0 = var2.bind(var1)(var0);
                                                throw var0;
                                        }
                                    };
                                    var4.sqrt = var3;
                                    var4.squareRoot = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        _fun42079: for (var _fun42079_ip = 0;;) switch (_fun42079_ip) {
                                            case 0:
                                                var2 = this;
                                                var1 = var2.constructor;
                                                var3 = var2.d;
                                                var0 = var1.prototype;
                                                var4 = Object.create(var0, {
                                                    constructor: {
                                                        value: var1
                                                    }
                                                });
                                                var23 = arg0;
                                                var24 = var4;
                                                var0 = new var24[var1](var23, var22);
                                                var0 = var0 instanceof Object ? var0 : var4;
                                                var4 = var0.d;
                                                var5 = var2.s;
                                                if (!var5) {
                                                    _fun42079_ip = 57;
                                                    continue _fun42079
                                                }
                                            case 49:
                                                var5 = var0.s;
                                                if (var5) {
                                                    _fun42079_ip = 81;
                                                    continue _fun42079
                                                }
                                            case 57:
                                                var5 = var1.prototype;
                                                var6 = Object.create(var5, {
                                                    constructor: {
                                                        value: var1
                                                    }
                                                });
                                                var23 = 0;
                                                var24 = var6;
                                                var5 = new var24[var1](var23, var22);
                                                var5 = var5 instanceof Object ? var5 : var6;
                                                return var5;
                                            case 81:
                                                var6 = var0.s;
                                                var5 = var2.s;
                                                var5 = var6 * var5;
                                                var0.s = var5;
                                                var5 = var2.e;
                                                var2 = var0.e;
                                                var6 = var5 + var2;
                                                var5 = var3.length;
                                                var7 = var4.length;
                                                var13 = var5;
                                                var12 = var3;
                                                var11 = var4;
                                                var2 = var7;
                                                if (!(var5 < var2)) {
                                                    _fun42079_ip = 153;
                                                    continue _fun42079
                                                }
                                            case 141:
                                                var13 = var7;
                                                var2 = var5;
                                                var12 = var4;
                                                var11 = var3;
                                            case 153:
                                                var5 = new Array(0);
                                                var7 = var13 + var2;
                                                var3 = parseFloat(var7);
                                                var4 = var3 - 1;
                                                var10 = 0;
                                                if (!var3) {
                                                    _fun42079_ip = 191;
                                                    continue _fun42079
                                                }
                                            case 172:
                                                var3 = var5.push;
                                                var3 = var3.bind(var5)(var10);
                                                var3 = parseFloat(var4);
                                                var4 = var3 - 1;
                                                if (var3) {
                                                    _fun42079_ip = 172;
                                                    continue _fun42079
                                                }
                                            case 191:
                                                var9 = var2 - 1;
                                                var3 = undefined;
                                                var8 = 1;
                                                var4 = undefined;
                                                if (!(var9 >= var10)) {
                                                    _fun42079_ip = 333;
                                                    continue _fun42079
                                                }
                                            case 211:
                                                var15 = var13 + var9;
                                                var17 = 0;
                                                var14 = 0;
                                                var16 = var15;
                                                if (!(var16 > var9)) {
                                                    _fun42079_ip = 300;
                                                    continue _fun42079
                                                }
                                            case 226:
                                                var19 = var5[var15];
                                                var20 = var11[var9];
                                                var18 = var15 - var9;
                                                var18 = var18 - var8;
                                                var18 = var12[var18];
                                                var18 = var20 * var18;
                                                var18 = var19 + var18;
                                                var20 = var18 + var17;
                                                var21 = parseFloat(var15);
                                                var15 = var21 - 1;
                                                var19 = _closure2_slot9;
                                                var19 = var20 % var19;
                                                var19 = var19 | 0;
                                                var5[var21] = var19;
                                                var19 = _closure2_slot9;
                                                var19 = var20 / var19;
                                                var17 = var19 | 0;
                                                var14 = var17;
                                                var16 = var15;
                                                if (var16 > var9) {
                                                    _fun42079_ip = 226;
                                                    continue _fun42079
                                                }
                                            case 300:
                                                var15 = var5[var16];
                                                var17 = var15 + var14;
                                                var15 = _closure2_slot9;
                                                var15 = var17 % var15;
                                                var15 = var15 | 0;
                                                var5[var16] = var15;
                                                var9 = var9 - 1;
                                                var4 = var14;
                                                if (var9 >= var10) {
                                                    _fun42079_ip = 211;
                                                    continue _fun42079
                                                }
                                            case 333:
                                                var8 = var7 - 1;
                                                var7 = var5[var8];
                                                if (var7) {
                                                    _fun42079_ip = 363;
                                                    continue _fun42079
                                                }
                                            case 343:
                                                var7 = var5.pop;
                                                var7 = var7.bind(var5)();
                                                var8 = var8 - 1;
                                                var7 = var5[var8];
                                                if (!var7) {
                                                    _fun42079_ip = 343;
                                                    continue _fun42079
                                                }
                                            case 363:
                                                if (var4) {
                                                    _fun42079_ip = 381;
                                                    continue _fun42079
                                                }
                                            case 366:
                                                var4 = var5.shift;
                                                var4 = var4.bind(var5)();
                                                var4 = var6;
                                                _fun42079_ip = 384;
                                                continue _fun42079;
                                            case 381:
                                                var4 = var6 + 1;
                                            case 384:
                                                var0.d = var5;
                                                var0.e = var4;
                                                var4 = _closure2_slot2;
                                                if (!var4) {
                                                    _fun42079_ip = 419;
                                                    continue _fun42079
                                                }
                                            case 403:
                                                var2 = _closure2_slot22;
                                                var1 = var1.precision;
                                                var1 = var2.bind(var3)(var0, var1);
                                            case 419:
                                                return var0;
                                        }
                                    };
                                    var4.mul = var3;
                                    var4.times = var3;
                                    var3 = function(arg0, arg1) { // Environment: var1
                                        _fun42080: for (var _fun42080_ip = 0;;) switch (_fun42080_ip) {
                                            case 0:
                                                var5 = arg0;
                                                var3 = arg1;
                                                var0 = this;
                                                var2 = var0.constructor;
                                                var1 = var2.prototype;
                                                var1 = Object.create(var1, {
                                                    constructor: {
                                                        value: var2
                                                    }
                                                });
                                                var12 = var1;
                                                var11 = var0;
                                                var0 = new var12[var2](var11, var10);
                                                var0 = var0 instanceof Object ? var0 : var1;
                                                var4 = undefined;
                                                if (!(var4 !== var5)) {
                                                    _fun42080_ip = 122;
                                                    continue _fun42080
                                                }
                                            case 43:
                                                var7 = _closure2_slot14;
                                                var8 = 0;
                                                var6 = 1000000000;
                                                var6 = var7.bind(var4)(var5, var8, var6);
                                                if (!(var4 !== var3)) {
                                                    _fun42080_ip = 85;
                                                    continue _fun42080
                                                }
                                            case 69:
                                                var7 = _closure2_slot14;
                                                var6 = 8;
                                                var6 = var7.bind(var4)(var3, var8, var6);
                                                _fun42080_ip = 91;
                                                continue _fun42080;
                                            case 85:
                                                var3 = var2.rounding;
                                            case 91:
                                                var2 = _closure2_slot22;
                                                var1 = _closure2_slot17;
                                                var1 = var1.bind(var4)(var0);
                                                var5 = var5 + var1;
                                                var1 = 1;
                                                var1 = var5 + var1;
                                                var1 = var2.bind(var4)(var0, var1, var3);
                                            case 122:
                                                return var0;
                                        }
                                    };
                                    var4.todp = var3;
                                    var4.toDecimalPlaces = var3;
                                    var3 = function(arg0, arg1) { // Environment: var1
                                        _fun42081: for (var _fun42081_ip = 0;;) switch (_fun42081_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var5 = arg1;
                                                var4 = this;
                                                var0 = var4.constructor;
                                                var3 = undefined;
                                                if (!(var3 !== var1)) {
                                                    _fun42081_ip = 131;
                                                    continue _fun42081
                                                }
                                            case 20:
                                                var7 = _closure2_slot14;
                                                var8 = 0;
                                                var6 = 1000000000;
                                                var6 = var7.bind(var3)(var1, var8, var6);
                                                if (!(var3 !== var5)) {
                                                    _fun42081_ip = 65;
                                                    continue _fun42081
                                                }
                                            case 46:
                                                var7 = _closure2_slot14;
                                                var6 = 8;
                                                var6 = var7.bind(var3)(var5, var8, var6);
                                                var8 = var5;
                                                _fun42081_ip = 71;
                                                continue _fun42081;
                                            case 65:
                                                var8 = var0.rounding;
                                            case 71:
                                                var5 = _closure2_slot24;
                                                var7 = _closure2_slot22;
                                                var2 = var0.prototype;
                                                var2 = Object.create(var2, {
                                                    constructor: {
                                                        value: var0
                                                    }
                                                });
                                                var12 = var2;
                                                var11 = var4;
                                                var0 = new var12[var0](var11, var10);
                                                var2 = var0 instanceof Object ? var0 : var2;
                                                var0 = 1;
                                                var6 = var1 + var0;
                                                var6 = var7.bind(var3)(var2, var6, var8);
                                                var1 = var1 + var0;
                                                var0 = true;
                                                var0 = var5.bind(var3)(var2, var0, var1);
                                                _fun42081_ip = 146;
                                                continue _fun42081;
                                            case 131:
                                                var2 = _closure2_slot24;
                                                var1 = true;
                                                var0 = var2.bind(var3)(var4, var1);
                                            case 146:
                                                return var0;
                                        }
                                    };
                                    var4.toExponential = var3;
                                    var3 = function(arg0, arg1) { // Environment: var1
                                        _fun42082: for (var _fun42082_ip = 0;;) switch (_fun42082_ip) {
                                            case 0:
                                                var6 = arg0;
                                                var4 = arg1;
                                                var3 = this;
                                                var1 = var3.constructor;
                                                var2 = undefined;
                                                if (!(var2 !== var6)) {
                                                    _fun42082_ip = 206;
                                                    continue _fun42082
                                                }
                                            case 23:
                                                var7 = _closure2_slot14;
                                                var8 = 0;
                                                var5 = 1000000000;
                                                var5 = var7.bind(var2)(var6, var8, var5);
                                                if (!(var2 !== var4)) {
                                                    _fun42082_ip = 68;
                                                    continue _fun42082
                                                }
                                            case 49:
                                                var7 = _closure2_slot14;
                                                var5 = 8;
                                                var5 = var7.bind(var2)(var4, var8, var5);
                                                var9 = var4;
                                                _fun42082_ip = 74;
                                                continue _fun42082;
                                            case 68:
                                                var9 = var1.rounding;
                                            case 74:
                                                var5 = _closure2_slot24;
                                                var8 = _closure2_slot22;
                                                var4 = var1.prototype;
                                                var4 = Object.create(var4, {
                                                    constructor: {
                                                        value: var1
                                                    }
                                                });
                                                var13 = var4;
                                                var12 = var3;
                                                var1 = new var13[var1](var12, var11);
                                                var7 = var1 instanceof Object ? var1 : var4;
                                                var0 = _closure2_slot17;
                                                var1 = var0.bind(var2)(var3);
                                                var4 = var6 + var1;
                                                var1 = 1;
                                                var4 = var4 + var1;
                                                var4 = var8.bind(var2)(var7, var4, var9);
                                                var4 = var7.abs;
                                                var4 = var4.bind(var7)();
                                                var0 = var0.bind(var2)(var7);
                                                var0 = var6 + var0;
                                                var1 = var0 + var1;
                                                var0 = false;
                                                var4 = var5.bind(var2)(var4, var0, var1);
                                                var0 = var3.isneg;
                                                var1 = var0.bind(var3)();
                                                var0 = var4;
                                                if (!var1) {
                                                    _fun42082_ip = 204;
                                                    continue _fun42082
                                                }
                                            case 180:
                                                var1 = var3.isZero;
                                                var1 = var1.bind(var3)();
                                                var0 = var4;
                                                if (var1) {
                                                    _fun42082_ip = 204;
                                                    continue _fun42082
                                                }
                                            case 196:
                                                var1 = '-';
                                                var0 = var1 + var4;
                                            case 204:
                                                _fun42082_ip = 218;
                                                continue _fun42082;
                                            case 206:
                                                var1 = _closure2_slot24;
                                                var0 = var1.bind(var2)(var3);
                                            case 218:
                                                return var0;
                                        }
                                    };
                                    var4.toFixed = var3;
                                    var3 = function() { // Environment: var1
                                        var5 = this;
                                        var1 = var5.constructor;
                                        var4 = _closure2_slot22;
                                        var0 = var1.prototype;
                                        var3 = Object.create(var0, {
                                            constructor: {
                                                value: var1
                                            }
                                        });
                                        var9 = var3;
                                        var8 = var5;
                                        var0 = new var9[var1](var8, var7);
                                        var0 = var0 instanceof Object ? var0 : var3;
                                        var2 = _closure2_slot17;
                                        var3 = undefined;
                                        var5 = var2.bind(var3)(var5);
                                        var2 = 1;
                                        var2 = var5 + var2;
                                        var1 = var1.rounding;
                                        var1 = var4.bind(var3)(var0, var2, var1);
                                        return var0;
                                    };
                                    var4.toint = var3;
                                    var4.toInteger = var3;
                                    var3 = function() { // Environment: var1
                                        var0 = this;
                                        var0 = var0 - 0;
                                        return var0;
                                    };
                                    var4.toNumber = var3;
                                    var3 = function(arg0) { // Environment: var1
                                        _fun42085: for (var _fun42085_ip = 0;;) switch (_fun42085_ip) {
                                            case 0:
                                                var0 = this;
                                                var7 = var0.constructor;
                                                var1 = var7.prototype;
                                                var2 = Object.create(var1, {
                                                    constructor: {
                                                        value: var7
                                                    }
                                                });
                                                var19 = arg0;
                                                var20 = var2;
                                                var1 = new var20[var7](var19, var18);
                                                var2 = var1 instanceof Object ? var1 : var2;
                                                var9 = var2 - 0;
                                                var1 = var2.s;
                                                if (var1) {
                                                    _fun42085_ip = 71;
                                                    continue _fun42085
                                                }
                                            case 42:
                                                var19 = _closure2_slot0;
                                                var3 = var7.prototype;
                                                var3 = Object.create(var3, {
                                                    constructor: {
                                                        value: var7
                                                    }
                                                });
                                                var20 = var3;
                                                var1 = new var20[var7](var19, var18);
                                                var1 = var1 instanceof Object ? var1 : var3;
                                                return var1;
                                            case 71:
                                                var1 = var7.prototype;
                                                var1 = Object.create(var1, {
                                                    constructor: {
                                                        value: var7
                                                    }
                                                });
                                                var20 = var1;
                                                var19 = var0;
                                                var0 = new var20[var7](var19, var18);
                                                var0 = var0 instanceof Object ? var0 : var1;
                                                var1 = var0.s;
                                                if (var1) {
                                                    _fun42085_ip = 139;
                                                    continue _fun42085
                                                }
                                            case 102:
                                                var3 = var2.s;
                                                var1 = 1;
                                                if (!(!(var3 < var1))) {
                                                    _fun42085_ip = 116;
                                                    continue _fun42085
                                                }
                                            case 114:
                                                return var0;
                                            case 116:
                                                var1 = global;
                                                var4 = var1.Error;
                                                var3 = undefined;
                                                var1 = '[DecimalError] Infinity';
                                                var1 = var4.bind(var3)(var1);
                                                throw var1;
                                            case 139:
                                                var4 = var0.eq;
                                                var3 = _closure2_slot0;
                                                var3 = var4.bind(var0)(var3);
                                                if (var3) {
                                                    _fun42085_ip = 706;
                                                    continue _fun42085
                                                }
                                            case 163:
                                                var3 = var7.precision;
                                                var5 = var2.eq;
                                                var4 = _closure2_slot0;
                                                var4 = var5.bind(var2)(var4);
                                                if (var4) {
                                                    _fun42085_ip = 692;
                                                    continue _fun42085
                                                }
                                            case 190:
                                                var13 = var2.e;
                                                var4 = var2.d;
                                                var5 = var4.length;
                                                var4 = 1;
                                                var12 = var5 - var4;
                                                var8 = var13 >= var12;
                                                var6 = var0.s;
                                                var5 = 0;
                                                if (var8) {
                                                    _fun42085_ip = 253;
                                                    continue _fun42085
                                                }
                                            case 226:
                                                if (!(var6 < var5)) {
                                                    _fun42085_ip = 280;
                                                    continue _fun42085
                                                }
                                            case 230:
                                                var8 = global;
                                                var11 = var8.Error;
                                                var10 = undefined;
                                                var8 = '[DecimalError] NaN';
                                                var8 = var11.bind(var10)(var8);
                                                throw var8;
                                            case 253:
                                                var8 = var9;
                                                if (!(var8 < var5)) {
                                                    _fun42085_ip = 263;
                                                    continue _fun42085
                                                }
                                            case 260:
                                                var8 = -var9;
                                            case 263:
                                                var9 = 9007199254740991.0;
                                                var12 = var8;
                                                if (!(!(var12 <= var9))) {
                                                    _fun42085_ip = 399;
                                                    continue _fun42085
                                                }
                                            case 280:
                                                var9 = var6 < var5;
                                                var6 = var4;
                                                if (!var9) {
                                                    _fun42085_ip = 334;
                                                    continue _fun42085
                                                }
                                            case 290:
                                                var10 = var2.d;
                                                var9 = global;
                                                var11 = var9.Math;
                                                var9 = var11.max;
                                                var9 = var9.bind(var11)(var13, var12);
                                                var9 = var10[var9];
                                                var9 = var4 & var9;
                                                var6 = var4;
                                                if (!var9) {
                                                    _fun42085_ip = 334;
                                                    continue _fun42085
                                                }
                                            case 328:
                                                var6 = -1;
                                            case 334:
                                                var0.s = var4;
                                                var4 = false;
                                                _closure2_slot2 = var4;
                                                var9 = var2.times;
                                                var11 = _closure2_slot20;
                                                var4 = 12;
                                                var4 = var3 + var4;
                                                var10 = undefined;
                                                var4 = var11.bind(var10)(var0, var4);
                                                var9 = var9.bind(var2)(var4);
                                                var4 = true;
                                                _closure2_slot2 = var4;
                                                var4 = _closure2_slot16;
                                                var4 = var4.bind(var10)(var9);
                                                var4.s = var6;
                                                return var4;
                                            case 399:
                                                var19 = _closure2_slot0;
                                                var6 = var7.prototype;
                                                var6 = Object.create(var6, {
                                                    constructor: {
                                                        value: var7
                                                    }
                                                });
                                                var20 = var6;
                                                var4 = new var20[var7](var19, var18);
                                                var9 = var4 instanceof Object ? var4 : var6;
                                                var4 = global;
                                                var10 = var4.Math;
                                                var6 = var10.ceil;
                                                var4 = 7;
                                                var11 = var3 / var4;
                                                var4 = 4;
                                                var4 = var11 + var4;
                                                var12 = var6.bind(var10)(var4);
                                                var4 = false;
                                                _closure2_slot2 = var4;
                                                var11 = 2;
                                                var4 = var8 % var11;
                                                var6 = var9;
                                                if (!var4) {
                                                    _fun42085_ip = 506;
                                                    continue _fun42085
                                                }
                                            case 475:
                                                var13 = _closure2_slot25;
                                                var4 = var9.times;
                                                var4 = var4.bind(var9)(var0);
                                                var10 = var4.d;
                                                var9 = undefined;
                                                var9 = var13.bind(var9)(var10, var12);
                                                var6 = var4;
                                            case 506:
                                                var9 = _closure2_slot6;
                                                var4 = undefined;
                                                var8 = var8 / var11;
                                                var8 = var9.bind(var4)(var8);
                                                var10 = var6;
                                                var9 = var0;
                                                var6 = var10;
                                                if (!(var5 !== var8)) {
                                                    _fun42085_ip = 625;
                                                    continue _fun42085
                                                }
                                            case 534:
                                                var14 = _closure2_slot25;
                                                var13 = var9.times;
                                                var15 = var13.bind(var9)(var9);
                                                var13 = var15.d;
                                                var13 = var14.bind(var4)(var13, var12);
                                                var13 = var8 % var11;
                                                var14 = var10;
                                                if (!var13) {
                                                    _fun42085_ip = 599;
                                                    continue _fun42085
                                                }
                                            case 570:
                                                var17 = _closure2_slot25;
                                                var13 = var10.times;
                                                var13 = var13.bind(var10)(var15);
                                                var16 = var13.d;
                                                var16 = var17.bind(var4)(var16, var12);
                                                var14 = var13;
                                            case 599:
                                                var16 = _closure2_slot6;
                                                var13 = var8 / var11;
                                                var8 = var16.bind(var4)(var13);
                                                var10 = var14;
                                                var9 = var15;
                                                var6 = var10;
                                                if (var5 !== var8) {
                                                    _fun42085_ip = 534;
                                                    continue _fun42085
                                                }
                                            case 625:
                                                var8 = true;
                                                _closure2_slot2 = var8;
                                                var2 = var2.s;
                                                if (!(!(var2 < var5))) {
                                                    _fun42085_ip = 655;
                                                    continue _fun42085
                                                }
                                            case 640:
                                                var2 = _closure2_slot22;
                                                var2 = var2.bind(var4)(var6, var3);
                                                var2 = var6;
                                                _fun42085_ip = 690;
                                                continue _fun42085;
                                            case 655:
                                                var19 = _closure2_slot0;
                                                var5 = var7.prototype;
                                                var5 = Object.create(var5, {
                                                    constructor: {
                                                        value: var7
                                                    }
                                                });
                                                var20 = var5;
                                                var4 = new var20[var7](var19, var18);
                                                var5 = var4 instanceof Object ? var4 : var5;
                                                var4 = var5.div;
                                                var2 = var4.bind(var5)(var6);
                                            case 690:
                                                return var2;
                                            case 692:
                                                var2 = _closure2_slot22;
                                                var1 = undefined;
                                                var1 = var2.bind(var1)(var0, var3);
                                                return var0;
                                            case 706:
                                                return var0;
                                        }
                                    };
                                    var4.pow = var3;
                                    var4.toPower = var3;
                                    var3 = function(arg0, arg1) { // Environment: var1
                                        _fun42086: for (var _fun42086_ip = 0;;) switch (_fun42086_ip) {
                                            case 0:
                                                var6 = arg0;
                                                var1 = arg1;
                                                var4 = this;
                                                var5 = var4.constructor;
                                                var3 = undefined;
                                                if (!(var3 !== var6)) {
                                                    _fun42086_ip = 150;
                                                    continue _fun42086
                                                }
                                            case 23:
                                                var8 = _closure2_slot14;
                                                var7 = 1;
                                                var2 = 1000000000;
                                                var2 = var8.bind(var3)(var6, var7, var2);
                                                if (!(var3 !== var1)) {
                                                    _fun42086_ip = 71;
                                                    continue _fun42086
                                                }
                                            case 50:
                                                var8 = _closure2_slot14;
                                                var7 = 0;
                                                var2 = 8;
                                                var2 = var8.bind(var3)(var1, var7, var2);
                                                var8 = var1;
                                                _fun42086_ip = 77;
                                                continue _fun42086;
                                            case 71:
                                                var8 = var5.rounding;
                                            case 77:
                                                var2 = _closure2_slot24;
                                                var7 = _closure2_slot22;
                                                var1 = var5.prototype;
                                                var9 = Object.create(var1, {
                                                    constructor: {
                                                        value: var5
                                                    }
                                                });
                                                var13 = var9;
                                                var12 = var4;
                                                var1 = new var13[var5](var12, var11);
                                                var1 = var1 instanceof Object ? var1 : var9;
                                                var7 = var7.bind(var3)(var1, var6, var8);
                                                var0 = _closure2_slot17;
                                                var8 = var0.bind(var3)(var1);
                                                var0 = var6 <= var8;
                                                if (var0) {
                                                    _fun42086_ip = 141;
                                                    continue _fun42086
                                                }
                                            case 131:
                                                var7 = var5.toExpNeg;
                                                var0 = var8 <= var7;
                                            case 141:
                                                var0 = var2.bind(var3)(var1, var0, var6);
                                                _fun42086_ip = 195;
                                                continue _fun42086;
                                            case 150:
                                                var2 = _closure2_slot24;
                                                var1 = _closure2_slot17;
                                                var6 = var1.bind(var3)(var4);
                                                var1 = var5.toExpNeg;
                                                var1 = var6 <= var1;
                                                if (var1) {
                                                    _fun42086_ip = 189;
                                                    continue _fun42086
                                                }
                                            case 179:
                                                var5 = var5.toExpPos;
                                                var1 = var6 >= var5;
                                            case 189:
                                                var0 = var2.bind(var3)(var4, var1);
                                            case 195:
                                                return var0;
                                        }
                                    };
                                    var4.toPrecision = var3;
                                    var3 = function(arg0, arg1) { // Environment: var1
                                        _fun42087: for (var _fun42087_ip = 0;;) switch (_fun42087_ip) {
                                            case 0:
                                                var5 = arg0;
                                                var1 = arg1;
                                                var6 = this;
                                                var0 = var6.constructor;
                                                var4 = undefined;
                                                if (!(var4 !== var5)) {
                                                    _fun42087_ip = 82;
                                                    continue _fun42087
                                                }
                                            case 20:
                                        })(undefined, undefined, undefined, undefined, undefined, undefined, 1000000000);