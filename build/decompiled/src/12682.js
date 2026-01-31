// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0() {
        _fun97270: for (var _fun97270_ip = 0;;) switch (_fun97270_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun97270_ip = 43;
                    continue _fun97270
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun97270_ip = 52;
                    continue _fun97270
                }
            case 43:
                var2 = function(arg0) { // Environment: var0
                    _fun97272: for (var _fun97272_ip = 0;;) switch (_fun97272_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun97272_ip = 58;
                                continue _fun97272
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun97272_ip = 58;
                                continue _fun97272
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun97272_ip = 58;
                                continue _fun97272
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun97272_ip = 61;
                                continue _fun97272
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun97270_ip = 59;
                continue _fun97270;
            case 52:
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = typeof var0;
                    return var0;
                };
            case 59:
                _closure1_slot1 = var2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1() {
        _fun97273: for (var _fun97273_ip = 0;;) switch (_fun97273_ip) {
            case 0:
                var12 = arg0;
                var11 = arg1;
                var0 = var11.length;
                var10 = 0;
                var1 = var10 < var0;
                var9 = global;
                var0 = undefined;
                var8 = 'symbol';
                var7 = 'string';
                var6 = 'object';
                var5 = null;
                var4 = true;
                var3 = 'value';
                if (!var1) {
                    _fun97273_ip = 250;
                    continue _fun97273
                }
            case 47:
                var15 = var11[var10];
                var1 = var15.enumerable;
                if (var1) {
                    _fun97273_ip = 61;
                    continue _fun97273
                }
            case 59:
                var1 = false;
            case 61:
                var15.enumerable = var1;
                var15.configurable = var4;
                var1 = var3 in var15;
                if (!var1) {
                    _fun97273_ip = 86;
                    continue _fun97273
                }
            case 80:
                var15.writable = var4;
            case 86:
                var14 = var9.Object;
                var13 = var14.defineProperty;
                var18 = var15.key;
                var1 = typeof var18;
                var17 = var18;
                if (!(var6 === var1)) {
                    _fun97273_ip = 207;
                    continue _fun97273
                }
            case 112:
                var17 = var18;
                if (!(var5 !== var17)) {
                    _fun97273_ip = 207;
                    continue _fun97273
                }
            case 119:
                var1 = var9.Symbol;
                var1 = var1.toPrimitive;
                var16 = var18[var1];
                if (!(var0 === var16)) {
                    _fun97273_ip = 152;
                    continue _fun97273
                }
            case 139:
                var1 = var9.String;
                var17 = var1.bind(var0)(var18);
                _fun97273_ip = 207;
                continue _fun97273;
            case 152:
                var1 = var16.call;
                var16 = var1.bind(var16)(var18, var7);
                var1 = typeof var16;
                var17 = var16;
                if (!(var6 === var1)) {
                    _fun97273_ip = 207;
                    continue _fun97273
                }
            case 173:
                var18 = var9.TypeError;
                var1 = var18.prototype;
                var16 = Object.create(var1, {
                    constructor: {
                        value: var18
                    }
                });
                var21 = '@@toPrimitive must return a primitive value.';
                var22 = var16;
                var1 = new var22[var18](var21, var20);
                var1 = var1 instanceof Object ? var1 : var16;
                throw var1;
            case 207:
                var16 = typeof var17;
                var1 = var17;
                if (!(var8 !== var16)) {
                    _fun97273_ip = 228;
                    continue _fun97273
                }
            case 217:
                var16 = var9.String;
                var1 = var16.bind(var0)(var17);
            case 228:
                var1 = var13.bind(var14)(var12, var1, var15);
                var10 = var10 + 1;
                var1 = var11.length;
                if (var10 < var1) {
                    _fun97273_ip = 47;
                    continue _fun97273
                }
            case 250:
                return var0;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function arg0, arg1() {
        _fun97274: for (var _fun97274_ip = 0;;) switch (_fun97274_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot5;
                var2 = undefined;
                var1 = arg1;
                var0 = 'get';
                var1 = var4.bind(var2)(var3, var1, var0);
                var0 = var1.get;
                if (var0) {
                    _fun97274_ip = 41;
                    continue _fun97274
                }
            case 34:
                var0 = var1.value;
                _fun97274_ip = 56;
                continue _fun97274;
            case 41:
                var2 = var1.get;
                var1 = var2.call;
                var0 = var1.bind(var2)(var3);
            case 56:
                return var0;
        }
    };
    var _closure1_slot3 = var1;
    var1 = function arg0, arg1, arg2() {
        _fun97275: for (var _fun97275_ip = 0;;) switch (_fun97275_ip) {
            case 0:
                var3 = arg0;
                var0 = arg2;
                var5 = _closure1_slot5;
                var4 = undefined;
                var2 = arg1;
                var1 = 'set';
                var1 = var5.bind(var4)(var3, var2, var1);
                var2 = var1.set;
                if (var2) {
                    _fun97275_ip = 90;
                    continue _fun97275
                }
            case 37:
                var2 = var1.writable;
                if (var2) {
                    _fun97275_ip = 82;
                    continue _fun97275
                }
            case 46:
                var2 = global;
                var5 = var2.TypeError;
                var2 = var5.prototype;
                var4 = Object.create(var2, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = 'attempted to set read only private field';
                var9 = var4;
                var2 = new var9[var5](var8, var7);
                var2 = var2 instanceof Object ? var2 : var4;
                throw var2;
            case 82:
                var1.value = var0;
                _fun97275_ip = 106;
                continue _fun97275;
            case 90:
                var2 = var1.set;
                var1 = var2.call;
                var1 = var1.bind(var2)(var3, var0);
            case 106:
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var1 = function arg0, arg1, arg2() {
        _fun97276: for (var _fun97276_ip = 0;;) switch (_fun97276_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = var1.has;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun97276_ip = 72;
                    continue _fun97276
                }
            case 19:
                var0 = global;
                var4 = var0.TypeError;
                var3 = 'attempted to ';
                var0 = arg2;
                var5 = var3 + var0;
                var0 = var4.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var0 = ' private field on non-instance';
                var6 = var5 + var0;
                var7 = var3;
                var0 = new var7[var4](var6, var5);
                var0 = var0 instanceof Object ? var0 : var3;
                throw var0;
            case 72:
                var0 = var1.get;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function arg0, arg1, arg2() {
        _fun97277: for (var _fun97277_ip = 0;;) switch (_fun97277_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = var2.has;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun97277_ip = 37;
                    continue _fun97277
                }
            case 19:
                var1 = var2.set;
                var0 = arg2;
                var0 = var1.bind(var2)(var3, var0);
                var0 = undefined;
                return var0;
            case 37:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = 'Cannot initialize the same private elements twice on an object';
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function arg0() {
        _fun97278: for (var _fun97278_ip = 0;;) switch (_fun97278_ip) {
            case 0:
                var0 = arg0;
                var1 = _closure1_slot1;
                var2 = undefined;
                var3 = var1.bind(var2)(var0);
                var1 = 'number';
                if (!(var1 !== var3)) {
                    _fun97278_ip = 84;
                    continue _fun97278
                }
            case 25:
                var1 = 'bigint';
                if (!(var1 !== var3)) {
                    _fun97278_ip = 48;
                    continue _fun97278
                }
            case 33:
                var1 = global;
                var1 = var1.Number;
                var1 = var1.bind(var2)(var0);
                return var1;
            case 48:
                var1 = global;
                var3 = var1.TypeError;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 'Cannot convert a BigInt value to a number';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 84:
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function arg0() {
        _fun97279: for (var _fun97279_ip = 0;;) switch (_fun97279_ip) {
            case 0:
                var2 = arg0;
                if (var2) {
                    _fun97279_ip = 14;
                    continue _fun97279
                }
            case 8:
                var0 = new Array(0);
                return var0;
            case 14:
                var0 = global;
                var3 = var0.Array;
                var1 = var3.isArray;
                var1 = var1.bind(var3)(var2);
                var13 = var2;
                if (var1) {
                    _fun97279_ip = 49;
                    continue _fun97279
                }
            case 38:
                var1 = new Array(1);
                var1[0] = var2;
                var13 = var1;
            case 49:
                var3 = {};
                var1 = var13.length;
                var12 = 0;
                var1 = var12 < var1;
                var11 = '-';
                var10 = true;
                var9 = undefined;
                var8 = null;
                var7 = 'string';
                var4 = 'object';
                var2 = 0;
                if (!var1) {
                    _fun97279_ip = 322;
                    continue _fun97279
                }
            case 91:
                var15 = var13[var2];
                var1 = var15;
                if (!var15) {
                    _fun97279_ip = 114;
                    continue _fun97279
                }
            case 101:
                var5 = _closure1_slot1;
                var5 = var5.bind(var9)(var15);
                var1 = var4 === var5;
            case 114:
                var5 = var15;
                if (!var1) {
                    _fun97279_ip = 131;
                    continue _fun97279
                }
            case 120:
                var1 = var0.String;
                var5 = var1.bind(var9)(var15);
            case 131:
                var1 = typeof var5;
                if (!(var7 === var1)) {
                    _fun97279_ip = 340;
                    continue _fun97279
                }
            case 141:
                var1 = var5.split;
                var15 = var1.bind(var5)(var11);
                var16 = var15.every;
                var1 = function(arg0) { // Environment: var14
                    var2 = /[a-z0-9]+/i;
                    var1 = var2.test;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var16.bind(var15)(var1);
                if (var1) {
                    _fun97279_ip = 240;
                    continue _fun97279
                }
            case 172:
                var16 = var0.JSON;
                var1 = var16.stringify;
                var18 = var1.bind(var16)(var5);
                var17 = 'The locale ';
                var16 = var17.concat;
                var1 = ' is not a structurally valid BCP 47 language tag.';
                var20 = var16.bind(var17)(var18, var1);
                var1 = var0.RangeError;
                var16 = var1.prototype;
                var16 = Object.create(var16, {
                    constructor: {
                        value: var1
                    }
                });
                var21 = var16;
                var1 = new var21[var1](var20, var19);
                var1 = var1 instanceof Object ? var1 : var16;
                throw var1;
            case 240:
                var16 = var15[var12];
                var1 = var16.toLowerCase;
                var17 = var1.bind(var16)();
                var1 = {
                    'in': 'id',
                    'iw': 'he',
                    'ji': 'yi'
                };
                var16 = var1[var17];
                var1 = var17;
                if (!(var8 !== var16)) {
                    _fun97279_ip = 289;
                    continue _fun97279
                }
            case 279:
                var1 = var17;
                if (!(var9 !== var16)) {
                    _fun97279_ip = 289;
                    continue _fun97279
                }
            case 286:
                var1 = var16;
            case 289:
                var15[var12] = var1;
                var1 = var15.join;
                var1 = var1.bind(var15)(var11);
                var3[var1] = var10;
                var2 = var2 + 1;
                var1 = var13.length;
                if (var2 < var1) {
                    _fun97279_ip = 91;
                    continue _fun97279
                }
            case 322:
                var2 = var0.Object;
                var1 = var2.keys;
                var1 = var1.bind(var2)(var3);
                return var1;
            case 340:
                var4 = 'Locales should be strings, ';
                var3 = var4.concat;
                var2 = var0.JSON;
                var1 = var2.stringify;
                var2 = var1.bind(var2)(var5);
                var1 = " isn't.";
                var20 = var3.bind(var4)(var2, var1);
                var0 = var0.TypeError;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var21 = var1;
                var0 = new var21[var0](var20, var19);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot0 = var1;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun97281: for (var _fun97281_ip = 0;;) switch (_fun97281_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var1 = arg3;
                var _closure2_slot3 = var1;
                var1 = function arg0() {
                    _fun97282: for (var _fun97282_ip = 0;;) switch (_fun97282_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = '';
                            var1 = undefined;
                        case 12:
                            var0 = _closure2_slot1;
                            var5 = var0.bind(var1)(var4);
                            var0 = var4;
                            if (var5) {
                                _fun97282_ip = 59;
                                continue _fun97282
                            }
                        case 27:
                            var6 = var0.replace;
                            var5 = /-?[^-]*$/;
                            var4 = var6.bind(var0)(var5, var3);
                            if (var4) {
                                _fun97282_ip = 12;
                                continue _fun97282
                            }
                        case 55:
                            var1 = null;
                            return var1;
                        case 59:
                            return var0;
                    }
                };
                var _closure2_slot4 = var1;
                var1 = global;
                var2 = var1.WeakMap;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var3;
                var2 = new var10[var2](var9);
                var2 = var2 instanceof Object ? var2 : var3;
                var _closure2_slot5 = var2;
                var2 = var1.WeakMap;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var3;
                var2 = new var10[var2](var9);
                var2 = var2 instanceof Object ? var2 : var3;
                var _closure2_slot6 = var2;
                var2 = var1.WeakMap;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var3;
                var2 = new var10[var2](var9);
                var2 = var2 instanceof Object ? var2 : var3;
                var _closure2_slot7 = var2;
                var2 = var1.WeakMap;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var3;
                var2 = new var10[var2](var9);
                var2 = var2 instanceof Object ? var2 : var3;
                var _closure2_slot8 = var2;
                var2 = var1.WeakMap;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var3;
                var2 = new var10[var2](var9);
                var2 = var2 instanceof Object ? var2 : var3;
                var _closure2_slot9 = var2;
                var2 = function() { // Environment: var0
                    var0 = function() {
                        _fun97284: for (var _fun97284_ip = 0;;) switch (_fun97284_ip) {
                            case 0:
                                var4 = this;
                                var0 = undefined;
                                var2 = undefined;
                                var1 = arguments.length;
                                var14 = 0;
                                if (!(var1 > var14)) {
                                    _fun97284_ip = 24;
                                    continue _fun97284
                                }
                            case 16:
                                var1 = arguments[var14];
                                if (!(var0 === var1)) {
                                    _fun97284_ip = 30;
                                    continue _fun97284
                                }
                            case 24:
                                var12 = new Array(0);
                                _fun97284_ip = 34;
                                continue _fun97284;
                            case 30:
                                var12 = arguments[var14];
                            case 34:
                                var3 = arguments.length;
                                var1 = 1;
                                if (!(var3 > var1)) {
                                    _fun97284_ip = 52;
                                    continue _fun97284
                                }
                            case 44:
                                var3 = arguments[var1];
                                if (!(var0 === var3)) {
                                    _fun97284_ip = 56;
                                    continue _fun97284
                                }
                            case 52:
                                var7 = {};
                                _fun97284_ip = 60;
                                continue _fun97284;
                            case 56:
                                var7 = arguments[var1];
                            case 60:
                                var1 = _closure3_slot0;
                                var1 = var4 instanceof var1;
                                if (var1) {
                                    _fun97284_ip = 110;
                                    continue _fun97284
                                }
                            case 74:
                                var1 = global;
                                var3 = var1.TypeError;
                                var1 = var3.prototype;
                                var2 = Object.create(var1, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var17 = 'Cannot call a class as a function';
                                var18 = var2;
                                var1 = new var18[var3](var17, var16);
                                var1 = var1 instanceof Object ? var1 : var2;
                                throw var1;
                            case 110:
                                var9 = _closure1_slot6;
                                var10 = _closure2_slot5;
                                var2 = {};
                                var13 = true;
                                var2.writable = var13;
                                var2.value = var0;
                                var2 = var9.bind(var0)(var4, var10, var2);
                                var8 = _closure2_slot6;
                                var2 = {};
                                var2.writable = var13;
                                var2.value = var0;
                                var2 = var9.bind(var0)(var4, var8, var2);
                                var11 = _closure2_slot7;
                                var2 = {};
                                var2.writable = var13;
                                var2.value = var0;
                                var2 = var9.bind(var0)(var4, var11, var2);
                                var6 = _closure2_slot8;
                                var2 = {};
                                var2.writable = var13;
                                var2.value = var0;
                                var2 = var9.bind(var0)(var4, var6, var2);
                                var3 = _closure2_slot9;
                                var2 = {};
                                var2.writable = var13;
                                var2.value = var0;
                                var2 = var9.bind(var0)(var4, var3, var2);
                                var2 = _closure1_slot4;
                                var9 = _closure1_slot0;
                                var13 = var9.bind(var0)(var12);
                                var9 = var13.length;
                                var9 = var14 < var9;
                                var14 = 0;
                                if (!var9) {
                                    _fun97284_ip = 287;
                                    continue _fun97284
                                }
                            case 259:
                                var12 = _closure2_slot4;
                                var9 = var13[var14];
                                var9 = var12.bind(var0)(var9);
                                if (var9) {
                                    _fun97284_ip = 336;
                                    continue _fun97284
                                }
                            case 275:
                                var14 = var14 + 1;
                                var12 = var13.length;
                                if (var14 < var12) {
                                    _fun97284_ip = 259;
                                    continue _fun97284
                                }
                            case 287:
                                var12 = _closure2_slot0;
                                var13 = var12.prototype;
                                var13 = Object.create(var13, {
                                    constructor: {
                                        value: var12
                                    }
                                });
                                var18 = var13;
                                var12 = new var18[var12](var17);
                                var13 = var12 instanceof Object ? var12 : var13;
                                var12 = var13.resolvedOptions;
                                var12 = var12.bind(var13)();
                                var13 = var12.locale;
                                var12 = _closure2_slot4;
                                var9 = var12.bind(var0)(var13);
                            case 336:
                                var9 = var2.bind(var0)(var4, var10, var9);
                                var12 = _closure2_slot1;
                                var5 = _closure1_slot3;
                                var9 = var5.bind(var0)(var4, var10);
                                var9 = var12.bind(var0)(var9);
                                var9 = var2.bind(var0)(var4, var11, var9);
                                var9 = _closure2_slot3;
                                var5 = var5.bind(var0)(var4, var10);
                                var5 = var9.bind(var0)(var5);
                                var5 = var2.bind(var0)(var4, var8, var5);
                                var8 = global;
                                var5 = var8.Object;
                                var5 = var5.prototype;
                                var10 = var5.hasOwnProperty;
                                var9 = var10.call;
                                var5 = 'type';
                                var11 = var9.bind(var10)(var7, var5);
                                if (!var11) {
                                    _fun97284_ip = 433;
                                    continue _fun97284
                                }
                            case 428:
                                var11 = var7.type;
                            case 433:
                                var9 = 'cardinal';
                                var5 = var9;
                                if (!var11) {
                                    _fun97284_ip = 516;
                                    continue _fun97284
                                }
                            case 443:
                                var5 = var11;
                                if (!(var9 !== var11)) {
                                    _fun97284_ip = 516;
                                    continue _fun97284
                                }
                            case 450:
                                var9 = 'ordinal';
                                var5 = var11;
                                if (!(var9 !== var5)) {
                                    _fun97284_ip = 516;
                                    continue _fun97284
                                }
                            case 461:
                                var10 = var8.RangeError;
                                var9 = var8.JSON;
                                var8 = var9.stringify;
                                var9 = var8.bind(var9)(var11);
                                var8 = 'Not a valid plural type: ';
                                var17 = var8 + var9;
                                var9 = var10.prototype;
                                var9 = Object.create(var9, {
                                    constructor: {
                                        value: var10
                                    }
                                });
                                var18 = var9;
                                var8 = new var18[var10](var17, var16);
                                var8 = var8 instanceof Object ? var8 : var9;
                                throw var8;
                            case 516:
                                var5 = var2.bind(var0)(var4, var6, var5);
                                var6 = _closure2_slot0;
                                var1 = var6.prototype;
                                var5 = Object.create(var1, {
                                    constructor: {
                                        value: var6
                                    }
                                });
                                var17 = 'en';
                                var18 = var5;
                                var16 = var7;
                                var1 = new var18[var6](var17, var16, var15);
                                var1 = var1 instanceof Object ? var1 : var5;
                                var1 = var2.bind(var0)(var4, var3, var1);
                                return var0;
                        }
                    };
                    var _closure3_slot0 = var0;
                    var1 = {};
                    var3 = 'resolvedOptions';
                    var1.key = var3;
                    var3 = function() {
                        _fun97285: for (var _fun97285_ip = 0;;) switch (_fun97285_ip) {
                            case 0:
                                var7 = this;
                                var12 = _closure1_slot3;
                                var0 = _closure2_slot9;
                                var5 = undefined;
                                var1 = var12.bind(var5)(var7, var0);
                                var0 = var1.resolvedOptions;
                                var0 = var0.bind(var1)();
                                var10 = var0.minimumIntegerDigits;
                                var9 = var0.minimumFractionDigits;
                                var8 = var0.maximumFractionDigits;
                                var6 = var0.minimumSignificantDigits;
                                var4 = var0.maximumSignificantDigits;
                                var1 = var0.roundingPriority;
                                var0 = {};
                                var11 = _closure2_slot5;
                                var11 = var12.bind(var5)(var7, var11);
                                var0.locale = var11;
                                var11 = _closure2_slot8;
                                var11 = var12.bind(var5)(var7, var11);
                                var0.type = var11;
                                var0.minimumIntegerDigits = var10;
                                var0.minimumFractionDigits = var9;
                                var0.maximumFractionDigits = var8;
                                var9 = 'number';
                                var8 = typeof var6;
                                if (!(var9 === var8)) {
                                    _fun97285_ip = 140;
                                    continue _fun97285
                                }
                            case 128:
                                var0.minimumSignificantDigits = var6;
                                var0.maximumSignificantDigits = var4;
                            case 140:
                                var4 = _closure2_slot2;
                                var6 = _closure1_slot3;
                                var3 = _closure2_slot5;
                                var3 = var6.bind(var5)(var7, var3);
                                var2 = _closure2_slot8;
                                var6 = var6.bind(var5)(var7, var2);
                                var2 = 'ordinal';
                                var2 = var2 === var6;
                                var4 = var4.bind(var5)(var3, var2);
                                var3 = var4.slice;
                                var2 = 0;
                                var2 = var3.bind(var4)(var2);
                                var0.pluralCategories = var2;
                                if (var1) {
                                    _fun97285_ip = 209;
                                    continue _fun97285
                                }
                            case 205:
                                var1 = 'auto';
                            case 209:
                                var0.roundingPriority = var1;
                                return var0;
                        }
                    };
                    var1.value = var3;
                    var5 = new Array(3);
                    var5[0] = var1;
                    var1 = {};
                    var3 = 'select';
                    var1.key = var3;
                    var3 = function arg0() {
                        _fun97286: for (var _fun97286_ip = 0;;) switch (_fun97286_ip) {
                            case 0:
                                var3 = arg0;
                                var4 = this;
                                var0 = _closure3_slot0;
                                var0 = var4 instanceof var0;
                                if (var0) {
                                    _fun97286_ip = 66;
                                    continue _fun97286
                                }
                            case 20:
                                var0 = global;
                                var2 = var0.TypeError;
                                var1 = 'select() called on incompatible ';
                                var0 = var1.concat;
                                var11 = var0.bind(var1)(var4);
                                var1 = var2.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var12 = var1;
                                var0 = new var12[var2](var11, var10);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                            case 66:
                                var1 = 'number';
                                var0 = typeof var3;
                                var2 = var3;
                                if (!(var1 !== var0)) {
                                    _fun97286_ip = 95;
                                    continue _fun97286
                                }
                            case 80:
                                var0 = global;
                                var1 = var0.Number;
                                var0 = undefined;
                                var2 = var1.bind(var0)(var3);
                            case 95:
                                var1 = global;
                                var0 = var1.isFinite;
                                var6 = undefined;
                                var0 = var0.bind(var6)(var2);
                                var8 = var2;
                                if (var0) {
                                    _fun97286_ip = 122;
                                    continue _fun97286
                                }
                            case 116:
                                var0 = 'other';
                                return var0;
                            case 122:
                                var5 = _closure1_slot3;
                                var2 = _closure2_slot9;
                                var3 = var5.bind(var6)(var4, var2);
                                var2 = var3.format;
                                var7 = var1.Math;
                                var1 = var7.abs;
                                var1 = var1.bind(var7)(var8);
                                var3 = var2.bind(var3)(var1);
                                var1 = _closure2_slot7;
                                var2 = var5.bind(var6)(var4, var1);
                                var1 = var2.call;
                                var0 = _closure2_slot8;
                                var5 = var5.bind(var6)(var4, var0);
                                var0 = 'ordinal';
                                var0 = var0 === var5;
                                var0 = var1.bind(var2)(var4, var3, var0);
                                return var0;
                        }
                    };
                    var1.value = var3;
                    var5[1] = var1;
                    var1 = {};
                    var3 = 'selectRange';
                    var1.key = var3;
                    var3 = function arg0, arg1() {
                        _fun97287: for (var _fun97287_ip = 0;;) switch (_fun97287_ip) {
                            case 0:
                                var1 = arg0;
                                var5 = arg1;
                                var4 = this;
                                var0 = _closure3_slot0;
                                var0 = var4 instanceof var0;
                                if (var0) {
                                    _fun97287_ip = 69;
                                    continue _fun97287
                                }
                            case 23:
                                var0 = global;
                                var3 = var0.TypeError;
                                var2 = 'selectRange() called on incompatible ';
                                var0 = var2.concat;
                                var11 = var0.bind(var2)(var4);
                                var2 = var3.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var12 = var2;
                                var0 = new var12[var3](var11, var10);
                                var0 = var0 instanceof Object ? var0 : var2;
                                throw var0;
                            case 69:
                                var3 = undefined;
                                if (!(var3 !== var1)) {
                                    _fun97287_ip = 289;
                                    continue _fun97287
                                }
                            case 78:
                                if (!(var3 !== var5)) {
                                    _fun97287_ip = 253;
                                    continue _fun97287
                                }
                            case 85:
                                var2 = _closure1_slot7;
                                var1 = var2.bind(var3)(var1);
                                var5 = var2.bind(var3)(var5);
                                var2 = global;
                                var6 = var2.isFinite;
                                var6 = var6.bind(var3)(var1);
                                if (var6) {
                                    _fun97287_ip = 152;
                                    continue _fun97287
                                }
                            case 118:
                                var8 = var2.RangeError;
                                var6 = var8.prototype;
                                var7 = Object.create(var6, {
                                    constructor: {
                                        value: var8
                                    }
                                });
                                var11 = 'start must be finite';
                                var12 = var7;
                                var6 = new var12[var8](var11, var10);
                                var6 = var6 instanceof Object ? var6 : var7;
                                throw var6;
                            case 152:
                                var6 = var2.isFinite;
                                var6 = var6.bind(var3)(var5);
                                if (var6) {
                                    _fun97287_ip = 200;
                                    continue _fun97287
                                }
                            case 166:
                                var7 = var2.RangeError;
                                var2 = var7.prototype;
                                var6 = Object.create(var2, {
                                    constructor: {
                                        value: var7
                                    }
                                });
                                var11 = 'end must be finite';
                                var12 = var6;
                                var2 = new var12[var7](var11, var10);
                                var2 = var2 instanceof Object ? var2 : var6;
                                throw var2;
                            case 200:
                                var2 = _closure1_slot3;
                                var0 = _closure2_slot6;
                                var3 = var2.bind(var3)(var4, var0);
                                var2 = var3.call;
                                var0 = var4.select;
                                var1 = var0.bind(var4)(var1);
                                var0 = var4.select;
                                var0 = var0.bind(var4)(var5);
                                var0 = var2.bind(var3)(var4, var1, var0);
                                return var0;
                            case 253:
                                var0 = global;
                                var2 = var0.TypeError;
                                var0 = var2.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var11 = 'end is undefined';
                                var12 = var1;
                                var0 = new var12[var2](var11, var10);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                            case 289:
                                var0 = global;
                                var2 = var0.TypeError;
                                var0 = var2.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var11 = 'start is undefined';
                                var12 = var1;
                                var0 = new var12[var2](var11, var10);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                        }
                    };
                    var1.value = var3;
                    var5[2] = var1;
                    var1 = {};
                    var3 = 'supportedLocalesOf';
                    var1.key = var3;
                    var2 = function arg0() {
                        var2 = _closure1_slot0;
                        var1 = undefined;
                        var0 = arg0;
                        var2 = var2.bind(var1)(var0);
                        var1 = var2.filter;
                        var0 = _closure2_slot4;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.value = var2;
                    var3 = new Array(1);
                    var3[0] = var1;
                    var2 = _closure1_slot2;
                    var4 = var0.prototype;
                    var1 = undefined;
                    var4 = var2.bind(var1)(var4, var5);
                    var1 = var2.bind(var1)(var0, var3);
                    var1 = global;
                    var4 = var1.Object;
                    var3 = var4.defineProperty;
                    var2 = {};
                    var1 = false;
                    var2.writable = var1;
                    var1 = 'prototype';
                    var1 = var3.bind(var4)(var0, var1, var2);
                    return var0;
                };
                var0 = undefined;
                var0 = var2.bind(var0)();
                var2 = var1.Symbol;
                var3 = 'undefined';
                var2 = typeof var2;
                var2 = var3 !== var2;
                if (!var2) {
                    _fun97281_ip = 237;
                    continue _fun97281
                }
            case 225:
                var3 = var1.Symbol;
                var2 = var3.toStringTag;
            case 237:
                if (!var2) {
                    _fun97281_ip = 289;
                    continue _fun97281
                }
            case 240:
                var6 = var1.Object;
                var5 = var6.defineProperty;
                var4 = var0.prototype;
                var2 = var1.Symbol;
                var3 = var2.toStringTag;
                var2 = {
                    'value': 'Intl.PluralRules',
                    'writable': false,
                    'configurable': true
                };
                var2 = var5.bind(var6)(var4, var3, var2);
            case 289:
                var4 = var1.Object;
                var3 = var4.defineProperty;
                var2 = {};
                var1 = false;
                var2.writable = var1;
                var1 = 'prototype';
                var1 = var3.bind(var4)(var0, var1, var2);
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);