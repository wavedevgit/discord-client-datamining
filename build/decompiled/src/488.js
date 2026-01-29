// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6300: for (var _fun6300_ip = 0;;) switch (_fun6300_ip) {
        case 0:
            var5 = exports;
            var0 = require;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var5;
            var0 = dependencyMap;
            var _closure1_slot2 = var0;
            var0 = function(arg0) { // Original name: createBuffer, environment: var2
                _fun6301: for (var _fun6301_ip = 0;;) switch (_fun6301_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = _closure1_slot3;
                        if (!(!(var1 > var0))) {
                            _fun6301_ip = 74;
                            continue _fun6301
                        }
                    case 14:
                        var3 = global;
                        var0 = var3.Uint8Array;
                        var4 = var0.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var0
                            }
                        });
                        var7 = var4;
                        var6 = var1;
                        var0 = new var7[var0](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var4;
                        var4 = var3.Object;
                        var3 = var4.setPrototypeOf;
                        var2 = _closure1_slot8;
                        var2 = var2.prototype;
                        var2 = var3.bind(var4)(var0, var2);
                        return var0;
                    case 74:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = 'The value "';
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = '" is invalid for option "size"';
                        var6 = var3 + var0;
                        var7 = var1;
                        var0 = new var7[var2](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot7 = var0;
            var3 = function(arg0, arg1, arg2) { // Original name: Buffer, environment: var2
                _fun6302: for (var _fun6302_ip = 0;;) switch (_fun6302_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = arg1;
                        var3 = 'number';
                        var1 = typeof var2;
                        if (!(var3 !== var1)) {
                            _fun6302_ip = 38;
                            continue _fun6302
                        }
                    case 17:
                        var4 = _closure1_slot9;
                        var3 = undefined;
                        var1 = arg2;
                        var1 = var4.bind(var3)(var2, var0, var1);
                        return var1;
                    case 38:
                        var1 = 'string';
                        var0 = typeof var0;
                        if (!(var1 !== var0)) {
                            _fun6302_ip = 65;
                            continue _fun6302
                        }
                    case 49:
                        var1 = _closure1_slot11;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                        return var0;
                    case 65:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var7 = 'The "string" argument must be of type string. Received type number';
                        var8 = var1;
                        var0 = new var8[var2](var7, var6);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot8 = var3;
            var0 = function(arg0, arg1, arg2) { // Original name: from, environment: var2
                _fun6303: for (var _fun6303_ip = 0;;) switch (_fun6303_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = arg1;
                        var7 = arg2;
                        var6 = typeof var3;
                        var2 = 'string';
                        if (!(var2 !== var6)) {
                            _fun6303_ip = 711;
                            continue _fun6303
                        }
                    case 23:
                        var0 = global;
                        var5 = var0.ArrayBuffer;
                        var4 = var5.isView;
                        var4 = var4.bind(var5)(var3);
                        if (var4) {
                            _fun6303_ip = 695;
                            continue _fun6303
                        }
                    case 48:
                        var11 = null;
                        if (!(var11 != var3)) {
                            _fun6303_ip = 657;
                            continue _fun6303
                        }
                    case 57:
                        var9 = _closure1_slot40;
                        var8 = var0.ArrayBuffer;
                        var5 = undefined;
                        var8 = var9.bind(var5)(var3, var8);
                        if (var8) {
                            _fun6303_ip = 644;
                            continue _fun6303
                        }
                    case 84:
                        if (!var3) {
                            _fun6303_ip = 115;
                            continue _fun6303
                        }
                    case 87:
                        var10 = _closure1_slot40;
                        var9 = var3.buffer;
                        var8 = var0.ArrayBuffer;
                        var8 = var10.bind(var5)(var9, var8);
                        if (var8) {
                            _fun6303_ip = 644;
                            continue _fun6303
                        }
                    case 115:
                        var8 = var0.SharedArrayBuffer;
                        var12 = 'undefined';
                        var8 = typeof var8;
                        if (!(var12 !== var8)) {
                            _fun6303_ip = 185;
                            continue _fun6303
                        }
                    case 132:
                        var9 = _closure1_slot40;
                        var8 = var0.SharedArrayBuffer;
                        var8 = var9.bind(var5)(var3, var8);
                        if (var8) {
                            _fun6303_ip = 631;
                            continue _fun6303
                        }
                    case 154:
                        if (!var3) {
                            _fun6303_ip = 185;
                            continue _fun6303
                        }
                    case 157:
                        var10 = _closure1_slot40;
                        var9 = var3.buffer;
                        var8 = var0.SharedArrayBuffer;
                        var8 = var10.bind(var5)(var9, var8);
                        if (var8) {
                            _fun6303_ip = 631;
                            continue _fun6303
                        }
                    case 185:
                        var13 = 'number';
                        if (!(var13 !== var6)) {
                            _fun6303_ip = 597;
                            continue _fun6303
                        }
                    case 196:
                        var10 = var3.valueOf;
                        if (!var10) {
                            _fun6303_ip = 213;
                            continue _fun6303
                        }
                    case 204:
                        var8 = var3.valueOf;
                        var10 = var8.bind(var3)();
                    case 213:
                        if (!(var11 != var10)) {
                            _fun6303_ip = 224;
                            continue _fun6303
                        }
                    case 217:
                        if (!(var10 === var3)) {
                            _fun6303_ip = 579;
                            continue _fun6303
                        }
                    case 224:
                        var9 = _closure1_slot8;
                        var8 = var9.isBuffer;
                        var8 = var8.bind(var9)(var3);
                        if (var8) {
                            _fun6303_ip = 373;
                            continue _fun6303
                        }
                    case 245:
                        var8 = var3.length;
                        if (!(var5 === var8)) {
                            _fun6303_ip = 317;
                            continue _fun6303
                        }
                    case 254:
                        var14 = var3.type;
                        var9 = 'Buffer';
                        var8 = undefined;
                        if (!(var9 === var14)) {
                            _fun6303_ip = 439;
                            continue _fun6303
                        }
                    case 272:
                        var15 = var0.Array;
                        var14 = var15.isArray;
                        var9 = var3.data;
                        var9 = var14.bind(var15)(var9);
                        var8 = undefined;
                        if (!var9) {
                            _fun6303_ip = 439;
                            continue _fun6303
                        }
                    case 301:
                        var14 = _closure1_slot12;
                        var9 = var3.data;
                        var8 = var14.bind(var5)(var9);
                        _fun6303_ip = 439;
                        continue _fun6303;
                    case 317:
                        var9 = var3.length;
                        var9 = typeof var9;
                        if (!(var13 === var9)) {
                            _fun6303_ip = 357;
                            continue _fun6303
                        }
                    case 329:
                        var13 = _closure1_slot41;
                        var9 = var3.length;
                        var9 = var13.bind(var5)(var9);
                        if (var9) {
                            _fun6303_ip = 357;
                            continue _fun6303
                        }
                    case 346:
                        var9 = _closure1_slot12;
                        var9 = var9.bind(var5)(var3);
                        _fun6303_ip = 368;
                        continue _fun6303;
                    case 357:
                        var14 = _closure1_slot7;
                        var13 = 0;
                        var9 = var14.bind(var5)(var13);
                    case 368:
                        var8 = var9;
                        _fun6303_ip = 439;
                        continue _fun6303;
                    case 373:
                        var13 = _closure1_slot14;
                        var9 = var3.length;
                        var9 = var13.bind(var5)(var9);
                        var15 = var9 | 0;
                        var9 = _closure1_slot7;
                        var9 = var9.bind(var5)(var15);
                        var13 = var9.length;
                        var14 = 0;
                        var8 = var9;
                        if (!(var14 !== var13)) {
                            _fun6303_ip = 439;
                            continue _fun6303
                        }
                    case 413:
                        var13 = var3.copy;
                        var20 = var3;
                        var19 = var9;
                        var18 = 0;
                        var17 = 0;
                        var16 = var15;
                        var13 = var20[var13](var19, var18, var17, var16, var15);
                        var8 = var9;
                    case 439:
                        if (var8) {
                            _fun6303_ip = 577;
                            continue _fun6303
                        }
                    case 445:
                        var9 = var0.Symbol;
                        var9 = typeof var9;
                        if (!(var12 !== var9)) {
                            _fun6303_ip = 500;
                            continue _fun6303
                        }
                    case 457:
                        var9 = var0.Symbol;
                        var9 = var9.toPrimitive;
                        if (!(var11 != var9)) {
                            _fun6303_ip = 500;
                            continue _fun6303
                        }
                    case 473:
                        var9 = var0.Symbol;
                        var9 = var9.toPrimitive;
                        var9 = var3[var9];
                        var11 = 'function';
                        var9 = typeof var9;
                        if (!(var11 !== var9)) {
                            _fun6303_ip = 538;
                            continue _fun6303
                        }
                    case 500:
                        var12 = var0.TypeError;
                        var9 = var12.prototype;
                        var11 = Object.create(var9, {
                            constructor: {
                                value: var12
                            }
                        });
                        var9 = 'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ';
                        var19 = var9 + var6;
                        var20 = var11;
                        var9 = new var20[var12](var19, var18);
                        var9 = var9 instanceof Object ? var9 : var11;
                        throw var9;
                    case 538:
                        var12 = _closure1_slot8;
                        var11 = var12.from;
                        var9 = var0.Symbol;
                        var9 = var9.toPrimitive;
                        var9 = var3[var9];
                        var9 = var9.bind(var3)(var2);
                        var9 = var11.bind(var12)(var9, var1, var7);
                        return var9;
                    case 577:
                        return var8;
                    case 579:
                        var9 = _closure1_slot8;
                        var8 = var9.from;
                        var8 = var8.bind(var9)(var10, var1, var7);
                        return var8;
                    case 597:
                        var10 = var0.TypeError;
                        var8 = var10.prototype;
                        var9 = Object.create(var8, {
                            constructor: {
                                value: var10
                            }
                        });
                        var19 = 'The "value" argument must not be of type number. Received type number';
                        var20 = var9;
                        var8 = new var20[var10](var19, var18);
                        var8 = var8 instanceof Object ? var8 : var9;
                        throw var8;
                    case 631:
                        var8 = _closure1_slot13;
                        var8 = var8.bind(var5)(var3, var1, var7);
                        return var8;
                    case 644:
                        var4 = _closure1_slot13;
                        var4 = var4.bind(var5)(var3, var1, var7);
                        return var4;
                    case 657:
                        var5 = var0.TypeError;
                        var0 = var5.prototype;
                        var4 = Object.create(var0, {
                            constructor: {
                                value: var5
                            }
                        });
                        var0 = 'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ';
                        var19 = var0 + var6;
                        var20 = var4;
                        var0 = new var20[var5](var19, var18);
                        var0 = var0 instanceof Object ? var0 : var4;
                        throw var0;
                    case 695:
                        var4 = _closure1_slot12;
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        return var0;
                    case 711:
                        var0 = typeof var1;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun6303_ip = 729;
                            continue _fun6303
                        }
                    case 721:
                        var2 = '';
                        var0 = var2 !== var1;
                    case 729:
                        var2 = var1;
                        if (var0) {
                            _fun6303_ip = 741;
                            continue _fun6303
                        }
                    case 735:
                        var2 = 'utf8';
                    case 741:
                        var4 = _closure1_slot8;
                        var1 = var4.isEncoding;
                        var1 = var1.bind(var4)(var2);
                        if (var1) {
                            _fun6303_ip = 802;
                            continue _fun6303
                        }
                    case 762:
                        var1 = global;
                        var5 = var1.TypeError;
                        var1 = 'Unknown encoding: ';
                        var19 = var1 + var2;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var5
                            }
                        });
                        var20 = var4;
                        var1 = new var20[var5](var19, var18);
                        var1 = var1 instanceof Object ? var1 : var4;
                        throw var1;
                    case 802:
                        var1 = _closure1_slot15;
                        var4 = undefined;
                        var1 = var1.bind(var4)(var3, var2);
                        var1 = var1 | 0;
                        var0 = _closure1_slot7;
                        var4 = var0.bind(var4)(var1);
                        var0 = var4.write;
                        var3 = var0.bind(var4)(var3, var2);
                        var0 = var4;
                        if (!(var3 !== var1)) {
                            _fun6303_ip = 858;
                            continue _fun6303
                        }
                    case 845:
                        var2 = var4.slice;
                        var1 = 0;
                        var0 = var2.bind(var4)(var1, var3);
                    case 858:
                        return var0;
                }
            };
            var _closure1_slot9 = var0;
            var0 = function(arg0) { // Original name: assertSize, environment: var2
                _fun6304: for (var _fun6304_ip = 0;;) switch (_fun6304_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = 'number';
                        var0 = typeof var1;
                        if (!(var2 === var0)) {
                            _fun6304_ip = 74;
                            continue _fun6304
                        }
                    case 14:
                        var0 = 0;
                        if (!(!(var1 < var0))) {
                            _fun6304_ip = 24;
                            continue _fun6304
                        }
                    case 20:
                        var0 = undefined;
                        return var0;
                    case 24:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = 'The value "';
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = '" is invalid for option "size"';
                        var4 = var3 + var0;
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 74:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = '"size" argument must be of type number';
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot10 = var0;
            var0 = function(arg0) { // Original name: allocUnsafe, environment: var2
                _fun6305: for (var _fun6305_ip = 0;;) switch (_fun6305_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = _closure1_slot10;
                        var2 = undefined;
                        var0 = var0.bind(var2)(var4);
                        var1 = _closure1_slot7;
                        var0 = 0;
                        var5 = var4 < var0;
                        if (var5) {
                            _fun6305_ip = 42;
                            continue _fun6305
                        }
                    case 30:
                        var3 = _closure1_slot14;
                        var3 = var3.bind(var2)(var4);
                        var0 = var3 | 0;
                    case 42:
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var _closure1_slot11 = var0;
            var0 = function(arg0) { // Original name: fromArrayLike, environment: var2
                _fun6306: for (var _fun6306_ip = 0;;) switch (_fun6306_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = var5.length;
                        var4 = 0;
                        var0 = var0 < var4;
                        var1 = 0;
                        if (var0) {
                            _fun6306_ip = 41;
                            continue _fun6306
                        }
                    case 19:
                        var3 = _closure1_slot14;
                        var2 = var5.length;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        var1 = var0 | 0;
                    case 41:
                        var2 = _closure1_slot7;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var3 = 255;
                        var2 = 1;
                        var4 = 0;
                        if (!(var4 < var1)) {
                            _fun6306_ip = 87;
                            continue _fun6306
                        }
                    case 67:
                        var6 = var5[var4];
                        var6 = var3 & var6;
                        var0[var4] = var6;
                        var4 = var4 + var2;
                        if (var4 < var1) {
                            _fun6306_ip = 67;
                            continue _fun6306
                        }
                    case 87:
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var0 = function(arg0, arg1, arg2) { // Original name: fromArrayBuffer, environment: var2
                _fun6307: for (var _fun6307_ip = 0;;) switch (_fun6307_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = arg1;
                        var2 = arg2;
                        var5 = 0;
                        if (!(!(var4 < var5))) {
                            _fun6307_ip = 246;
                            continue _fun6307
                        }
                    case 18:
                        var0 = var3.byteLength;
                        if (!(!(var0 < var4))) {
                            _fun6307_ip = 246;
                            continue _fun6307
                        }
                    case 31:
                        var1 = var3.byteLength;
                        var0 = var2;
                        if (var0) {
                            _fun6307_ip = 45;
                            continue _fun6307
                        }
                    case 43:
                        var0 = 0;
                    case 45:
                        var0 = var4 + var0;
                        if (!(!(var1 < var0))) {
                            _fun6307_ip = 210;
                            continue _fun6307
                        }
                    case 56:
                        var0 = undefined;
                        if (!(var0 === var4)) {
                            _fun6307_ip = 66;
                            continue _fun6307
                        }
                    case 62:
                        if (!(var0 !== var2)) {
                            _fun6307_ip = 145;
                            continue _fun6307
                        }
                    case 66:
                        if (!(var0 !== var2)) {
                            _fun6307_ip = 109;
                            continue _fun6307
                        }
                    case 70:
                        var0 = global;
                        var0 = var0.Uint8Array;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var10 = var1;
                        var9 = var3;
                        var8 = var4;
                        var7 = var2;
                        var0 = new var10[var0](var9, var8, var7, var6);
                        var0 = var0 instanceof Object ? var0 : var1;
                        _fun6307_ip = 143;
                        continue _fun6307;
                    case 109:
                        var1 = global;
                        var1 = var1.Uint8Array;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var10 = var2;
                        var9 = var3;
                        var8 = var4;
                        var1 = new var10[var1](var9, var8, var7);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 143:
                        _fun6307_ip = 176;
                        continue _fun6307;
                    case 145:
                        var1 = global;
                        var1 = var1.Uint8Array;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var10 = var2;
                        var9 = var3;
                        var1 = new var10[var1](var9, var8);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 176:
                        var1 = global;
                        var3 = var1.Object;
                        var2 = var3.setPrototypeOf;
                        var1 = _closure1_slot8;
                        var1 = var1.prototype;
                        var1 = var2.bind(var3)(var0, var1);
                        return var0;
                    case 210:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var9 = '"length" is outside of buffer bounds';
                        var10 = var1;
                        var0 = new var10[var2](var9, var8);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 246:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var9 = '"offset" is outside of buffer bounds';
                        var10 = var1;
                        var0 = new var10[var2](var9, var8);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot13 = var0;
            var0 = function(arg0) { // Original name: checked, environment: var2
                _fun6308: for (var _fun6308_ip = 0;;) switch (_fun6308_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = _closure1_slot3;
                        if (!(!(var1 >= var2))) {
                            _fun6308_ip = 19;
                            continue _fun6308
                        }
                    case 14:
                        var1 = var1 | 0;
                        return var1;
                    case 19:
                        var1 = global;
                        var2 = var1.RangeError;
                        var3 = _closure1_slot3;
                        var1 = var3.toString;
                        var0 = 16;
                        var1 = var1.bind(var3)(var0);
                        var0 = 'Attempt to allocate Buffer larger than maximum size: 0x';
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = ' bytes';
                        var4 = var3 + var0;
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot14 = var0;
            var4 = function(arg0, arg1) { // Original name: byteLength, environment: var2
                _fun6309: for (var _fun6309_ip = 0;;) switch (_fun6309_ip) {
                    case 0:
                        var0 = arg0;
                        var12 = arg1;
                        var5 = undefined;
                        var7 = undefined;
                        var2 = _closure1_slot8;
                        var1 = var2.isBuffer;
                        var1 = var1.bind(var2)(var0);
                        if (var1) {
                            _fun6309_ip = 404;
                            continue _fun6309
                        }
                    case 34:
                        var1 = global;
                        var4 = var1.ArrayBuffer;
                        var2 = var4.isView;
                        var2 = var2.bind(var4)(var0);
                        if (var2) {
                            _fun6309_ip = 396;
                            continue _fun6309
                        }
                    case 59:
                        var4 = _closure1_slot40;
                        var2 = var1.ArrayBuffer;
                        var2 = var4.bind(var5)(var0, var2);
                        if (var2) {
                            _fun6309_ip = 396;
                            continue _fun6309
                        }
                    case 81:
                        var4 = typeof var0;
                        var2 = 'string';
                        if (!(var2 === var4)) {
                            _fun6309_ip = 358;
                            continue _fun6309
                        }
                    case 95:
                        var2 = var0.length;
                        var8 = arguments.length;
                        var6 = 2;
                        var8 = var8 > var6;
                        if (!var8) {
                            _fun6309_ip = 123;
                            continue _fun6309
                        }
                    case 113:
                        var9 = arguments[var6];
                        var7 = true;
                        var8 = var7 === var9;
                    case 123:
                        var9 = var12;
                        var7 = false;
                        if (var8) {
                            _fun6309_ip = 144;
                            continue _fun6309
                        }
                    case 131:
                        var10 = 0;
                        var9 = var12;
                        var7 = false;
                        if (!(var10 === var2)) {
                            _fun6309_ip = 144;
                            continue _fun6309
                        }
                    case 142:
                        return var10;
                    case 144:
                        var10 = 'ascii';
                        if (!(var10 !== var9)) {
                            _fun6309_ip = 356;
                            continue _fun6309
                        }
                    case 157:
                        var10 = 'latin1';
                        if (!(var10 !== var9)) {
                            _fun6309_ip = 356;
                            continue _fun6309
                        }
                    case 170:
                        var10 = 'binary';
                        if (!(var10 !== var9)) {
                            _fun6309_ip = 356;
                            continue _fun6309
                        }
                    case 181:
                        var10 = 'utf8';
                        if (!(var10 !== var9)) {
                            _fun6309_ip = 340;
                            continue _fun6309
                        }
                    case 194:
                        var10 = 'utf-8';
                        if (!(var10 !== var9)) {
                            _fun6309_ip = 340;
                            continue _fun6309
                        }
                    case 207:
                        var10 = 'ucs2';
                        if (!(var10 !== var9)) {
                            _fun6309_ip = 334;
                            continue _fun6309
                        }
                    case 215:
                        var10 = 'ucs-2';
                        if (!(var10 !== var9)) {
                            _fun6309_ip = 334;
                            continue _fun6309
                        }
                    case 225:
                        var10 = 'utf16le';
                        if (!(var10 !== var9)) {
                            _fun6309_ip = 334;
                            continue _fun6309
                        }
                    case 235:
                        var10 = 'utf-16le';
                        if (!(var10 !== var9)) {
                            _fun6309_ip = 334;
                            continue _fun6309
                        }
                    case 245:
                        var10 = 'hex';
                        if (!(var10 !== var9)) {
                            _fun6309_ip = 325;
                            continue _fun6309
                        }
                    case 253:
                        var10 = 'base64';
                        if (!(var10 !== var9)) {
                            _fun6309_ip = 309;
                            continue _fun6309
                        }
                    case 261:
                        if (var7) {
                            _fun6309_ip = 284;
                            continue _fun6309
                        }
                    case 264:
                        var11 = '' + var9;
                        var10 = var11.toLowerCase;
                        var9 = var10.bind(var11)();
                        var7 = true;
                        _fun6309_ip = 144;
                        continue _fun6309;
                    case 284:
                        var7 = -1;
                        if (var8) {
                            _fun6309_ip = 307;
                            continue _fun6309
                        }
                    case 293:
                        var8 = _closure1_slot37;
                        var8 = var8.bind(var5)(var0);
                        var7 = var8.length;
                    case 307:
                        return var7;
                    case 309:
                        var7 = _closure1_slot38;
                        var7 = var7.bind(var5)(var0);
                        var7 = var7.length;
                        return var7;
                    case 325:
                        var7 = 1;
                        var7 = var2 >>> var7;
                        return var7;
                    case 334:
                        var6 = var6 * var2;
                        return var6;
                    case 340:
                        var3 = _closure1_slot37;
                        var3 = var3.bind(var5)(var0);
                        var3 = var3.length;
                        return var3;
                    case 356:
                        return var2;
                    case 358:
                        var3 = var1.TypeError;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var1 = 'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ';
                        var14 = var1 + var4;
                        var15 = var2;
                        var1 = new var15[var3](var14, var13);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 396:
                        var1 = var0.byteLength;
                        return var1;
                    case 404:
                        var0 = var0.length;
                        return var0;
                }
            };
            var _closure1_slot15 = var4;
            var0 = function(arg0, arg1, arg2) { // Original name: slowToString, environment: var2
                _fun6310: for (var _fun6310_ip = 0;;) switch (_fun6310_ip) {
                    case 0:
                        var6 = arg0;
                        var1 = arg1;
                        var2 = arg2;
                        var4 = this;
                        var3 = undefined;
                        var0 = var3 === var1;
                        if (var0) {
                            _fun6310_ip = 27;
                            continue _fun6310
                        }
                    case 21:
                        var5 = 0;
                        var0 = var1 < var5;
                    case 27:
                        if (!var0) {
                            _fun6310_ip = 32;
                            continue _fun6310
                        }
                    case 30:
                        var1 = 0;
                    case 32:
                        var0 = var4.length;
                        if (!(!(var1 > var0))) {
                            _fun6310_ip = 399;
                            continue _fun6310
                        }
                    case 44:
                        var0 = var3 === var2;
                        if (var0) {
                            _fun6310_ip = 60;
                            continue _fun6310
                        }
                    case 51:
                        var5 = var4.length;
                        var0 = var2 > var5;
                    case 60:
                        if (!var0) {
                            _fun6310_ip = 68;
                            continue _fun6310
                        }
                    case 63:
                        var2 = var4.length;
                    case 68:
                        var0 = 0;
                        if (!(!(var2 <= var0))) {
                            _fun6310_ip = 393;
                            continue _fun6310
                        }
                    case 77:
                        var2 = var2 >>> var0;
                        var1 = var1 >>> var0;
                        if (!(!(var2 <= var1))) {
                            _fun6310_ip = 387;
                            continue _fun6310
                        }
                    case 92:
                        var0 = false;
                        if (var6) {
                            _fun6310_ip = 105;
                            continue _fun6310
                        }
                    case 97:
                        var6 = 'utf8';
                        var0 = false;
                    case 105:
                        var5 = var6;
                        var7 = 'hex';
                        if (!(var7 !== var5)) {
                            _fun6310_ip = 371;
                            continue _fun6310
                        }
                    case 119:
                        var7 = 'utf8';
                        if (!(var7 !== var5)) {
                            _fun6310_ip = 355;
                            continue _fun6310
                        }
                    case 132:
                        var7 = 'utf-8';
                        if (!(var7 !== var5)) {
                            _fun6310_ip = 355;
                            continue _fun6310
                        }
                    case 145:
                        var7 = 'ascii';
                        if (!(var7 !== var5)) {
                            _fun6310_ip = 339;
                            continue _fun6310
                        }
                    case 158:
                        var7 = 'latin1';
                        if (!(var7 !== var5)) {
                            _fun6310_ip = 323;
                            continue _fun6310
                        }
                    case 171:
                        var7 = 'binary';
                        if (!(var7 !== var5)) {
                            _fun6310_ip = 323;
                            continue _fun6310
                        }
                    case 182:
                        var7 = 'base64';
                        if (!(var7 !== var5)) {
                            _fun6310_ip = 307;
                            continue _fun6310
                        }
                    case 190:
                        var7 = 'ucs2';
                        if (!(var7 !== var5)) {
                            _fun6310_ip = 291;
                            continue _fun6310
                        }
                    case 198:
                        var7 = 'ucs-2';
                        if (!(var7 !== var5)) {
                            _fun6310_ip = 291;
                            continue _fun6310
                        }
                    case 208:
                        var7 = 'utf16le';
                        if (!(var7 !== var5)) {
                            _fun6310_ip = 291;
                            continue _fun6310
                        }
                    case 218:
                        var7 = 'utf-16le';
                        if (!(var7 !== var5)) {
                            _fun6310_ip = 291;
                            continue _fun6310
                        }
                    case 228:
                        if (var0) {
                            _fun6310_ip = 251;
                            continue _fun6310
                        }
                    case 231:
                        var8 = '' + var5;
                        var7 = var8.toLowerCase;
                        var6 = var7.bind(var8)();
                        var0 = true;
                        _fun6310_ip = 105;
                        continue _fun6310;
                    case 251:
                        var0 = global;
                        var6 = var0.TypeError;
                        var0 = 'Unknown encoding: ';
                        var11 = var0 + var5;
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var6
                            }
                        });
                        var12 = var5;
                        var0 = new var12[var6](var11, var10);
                        var0 = var0 instanceof Object ? var0 : var5;
                        throw var0;
                    case 291:
                        var0 = _closure1_slot31;
                        var0 = var0.bind(var3)(var4, var1, var2);
                        return var0;
                    case 307:
                        var0 = _closure1_slot26;
                        var0 = var0.bind(var3)(var4, var1, var2);
                        return var0;
                    case 323:
                        var0 = _closure1_slot29;
                        var0 = var0.bind(var3)(var4, var1, var2);
                        return var0;
                    case 339:
                        var0 = _closure1_slot28;
                        var0 = var0.bind(var3)(var4, var1, var2);
                        return var0;
                    case 355:
                        var0 = _closure1_slot27;
                        var0 = var0.bind(var3)(var4, var1, var2);
                        return var0;
                    case 371:
                        var0 = _closure1_slot30;
                        var0 = var0.bind(var3)(var4, var1, var2);
                        return var0;
                    case 387:
                        var0 = '';
                        return var0;
                    case 393:
                        var0 = '';
                        return var0;
                    case 399:
                        var0 = '';
                        return var0;
                }
            };
            var _closure1_slot16 = var0;
            var0 = function(arg0, arg1, arg2) { // Original name: swap, environment: var2
                var2 = arg0;
                var4 = arg1;
                var1 = arg2;
                var0 = var2[var4];
                var3 = var2[var1];
                var2[var4] = var3;
                var2[var1] = var0;
                var0 = undefined;
                return var0;
            };
            var _closure1_slot17 = var0;
            var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: bidirectionalIndexOf, environment: var2
                _fun6312: for (var _fun6312_ip = 0;;) switch (_fun6312_ip) {
                    case 0:
                        var7 = arg0;
                        var10 = arg1;
                        var3 = arg2;
                        var0 = arg3;
                        var6 = arg4;
                        var1 = var7.length;
                        var9 = 0;
                        if (!(var9 !== var1)) {
                            _fun6312_ip = 458;
                            continue _fun6312
                        }
                    case 29:
                        var8 = 'string';
                        var1 = typeof var3;
                        var2 = 0;
                        var5 = var3;
                        if (!(var8 !== var1)) {
                            _fun6312_ip = 86;
                            continue _fun6312
                        }
                    case 45:
                        var4 = 2147483647;
                        var1 = var3 > var4;
                        var2 = var4;
                        var5 = var0;
                        if (var1) {
                            _fun6312_ip = 86;
                            continue _fun6312
                        }
                    case 64:
                        var1 = -2147483648;
                        var2 = var3;
                        var5 = var0;
                        if (!(var3 < var1)) {
                            _fun6312_ip = 86;
                            continue _fun6312
                        }
                    case 80:
                        var2 = var1;
                        var5 = var0;
                    case 86:
                        var0 = _closure1_slot41;
                        var2 = var2 - 0;
                        var4 = undefined;
                        var0 = var0.bind(var4)(var2);
                        if (!var0) {
                            _fun6312_ip = 126;
                            continue _fun6312
                        }
                    case 106:
                        var0 = 0;
                        if (var6) {
                            _fun6312_ip = 123;
                            continue _fun6312
                        }
                    case 111:
                        var11 = var7.length;
                        var3 = 1;
                        var0 = var11 - var3;
                    case 123:
                        var2 = var0;
                    case 126:
                        var3 = var2;
                        if (!(var3 < var9)) {
                            _fun6312_ip = 142;
                            continue _fun6312
                        }
                    case 133:
                        var0 = var7.length;
                        var3 = var0 + var2;
                    case 142:
                        var0 = var7.length;
                        if (!(!(var3 >= var0))) {
                            _fun6312_ip = 168;
                            continue _fun6312
                        }
                    case 151:
                        if (!(var3 < var9)) {
                            _fun6312_ip = 186;
                            continue _fun6312
                        }
                    case 155:
                        var3 = 0;
                        if (var6) {
                            _fun6312_ip = 186;
                            continue _fun6312
                        }
                    case 160:
                        var0 = -1;
                        return var0;
                    case 168:
                        if (var6) {
                            _fun6312_ip = 450;
                            continue _fun6312
                        }
                    case 174:
                        var2 = var7.length;
                        var0 = 1;
                        var3 = var2 - var0;
                    case 186:
                        var0 = typeof var10;
                        var2 = var10;
                        if (!(var8 === var0)) {
                            _fun6312_ip = 211;
                            continue _fun6312
                        }
                    case 196:
                        var8 = _closure1_slot8;
                        var0 = var8.from;
                        var2 = var0.bind(var8)(var10, var5);
                    case 211:
                        var8 = _closure1_slot8;
                        var0 = var8.isBuffer;
                        var0 = var0.bind(var8)(var2);
                        if (var0) {
                            _fun6312_ip = 408;
                            continue _fun6312
                        }
                    case 232:
                        var8 = 'number';
                        var0 = typeof var2;
                        if (!(var8 !== var0)) {
                            _fun6312_ip = 279;
                            continue _fun6312
                        }
                    case 243:
                        var0 = global;
                        var10 = var0.TypeError;
                        var0 = var10.prototype;
                        var8 = Object.create(var0, {
                            constructor: {
                                value: var10
                            }
                        });
                        var17 = 'val must be string, number or Buffer';
                        var18 = var8;
                        var0 = new var18[var10](var17, var16);
                        var0 = var0 instanceof Object ? var0 : var8;
                        throw var0;
                    case 279:
                        var0 = 255;
                        var12 = var2 & var0;
                        var8 = global;
                        var0 = var8.Uint8Array;
                        var0 = var0.prototype;
                        var0 = var0.indexOf;
                        var10 = 'function';
                        var0 = typeof var0;
                        if (!(var10 !== var0)) {
                            _fun6312_ip = 351;
                            continue _fun6312
                        }
                    case 316:
                        var10 = _closure1_slot19;
                        var0 = new Array(1);
                        var0[0] = var12;
                        var18 = undefined;
                        var17 = var7;
                        var16 = var0;
                        var15 = var3;
                        var14 = var5;
                        var13 = var6;
                        var0 = var18[var10](var17, var16, var15, var14, var13, var12);
                        _fun6312_ip = 406;
                        continue _fun6312;
                    case 351:
                        var8 = var8.Uint8Array;
                        var10 = var8.prototype;
                        if (var6) {
                            _fun6312_ip = 385;
                            continue _fun6312
                        }
                    case 365:
                        var11 = var10.lastIndexOf;
                        var8 = var11.call;
                        var8 = var8.bind(var11)(var7, var12, var3);
                        _fun6312_ip = 403;
                        continue _fun6312;
                    case 385:
                        var11 = var10.indexOf;
                        var10 = var11.call;
                        var8 = var10.bind(var11)(var7, var12, var3);
                    case 403:
                        var0 = var8;
                    case 406:
                        return var0;
                    case 408:
                        var8 = var2.length;
                        var0 = -1;
                        if (!(var9 !== var8)) {
                            _fun6312_ip = 448;
                            continue _fun6312
                        }
                    case 423:
                        var1 = _closure1_slot19;
                        var18 = undefined;
                        var17 = var7;
                        var16 = var2;
                        var15 = var3;
                        var14 = var5;
                        var13 = var6;
                        var0 = var18[var1](var17, var16, var15, var14, var13, var12);
                    case 448:
                        return var0;
                    case 450:
                        var0 = -1;
                        return var0;
                    case 458:
                        var0 = -1;
                        return var0;
                }
            };
            var _closure1_slot18 = var0;
            var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: arrayIndexOf, environment: var2
                _fun6313: for (var _fun6313_ip = 0;;) switch (_fun6313_ip) {
                    case 0:
                        var12 = arg0;
                        var11 = arg1;
                        var4 = arg2;
                        var14 = arg3;
                        var10 = function(arg0, arg1) { // Original name: read, environment: var13
                            _fun6314: for (var _fun6314_ip = 0;;) switch (_fun6314_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = arg1;
                                    var4 = _closure2_slot0;
                                    var3 = 1;
                                    if (!(var3 !== var4)) {
                                        _fun6314_ip = 41;
                                        continue _fun6314
                                    }
                                case 20:
                                    var3 = var2.readUInt16BE;
                                    var0 = _closure2_slot0;
                                    var0 = var1 * var0;
                                    var0 = var3.bind(var2)(var0);
                                    _fun6314_ip = 45;
                                    continue _fun6314;
                                case 41:
                                    var0 = var2[var1];
                                case 45:
                                    return var0;
                            }
                        };
                        var9 = 1;
                        var _closure2_slot0 = var9;
                        var2 = var12.length;
                        var0 = var11.length;
                        var8 = undefined;
                        var7 = var4;
                        var1 = var9;
                        var6 = var2;
                        var5 = var0;
                        if (!(var8 !== var14)) {
                            _fun6313_ip = 173;
                            continue _fun6313
                        }
                    case 54:
                        var3 = global;
                        var3 = var3.String;
                        var14 = var3.bind(var8)(var14);
                        var3 = var14.toLowerCase;
                        var14 = var3.bind(var14)();
                        var3 = 'ucs2';
                        if (!(var3 !== var14)) {
                            _fun6313_ip = 127;
                            continue _fun6313
                        }
                    case 85:
                        var3 = 'ucs-2';
                        if (!(var3 !== var14)) {
                            _fun6313_ip = 127;
                            continue _fun6313
                        }
                    case 95:
                        var3 = 'utf16le';
                        if (!(var3 !== var14)) {
                            _fun6313_ip = 127;
                            continue _fun6313
                        }
                    case 105:
                        var3 = 'utf-16le';
                        var7 = var4;
                        var1 = var9;
                        var6 = var2;
                        var5 = var0;
                        if (!(var3 === var14)) {
                            _fun6313_ip = 173;
                            continue _fun6313
                        }
                    case 127:
                        var14 = var12.length;
                        var3 = 2;
                        if (!(!(var14 < var3))) {
                            _fun6313_ip = 387;
                            continue _fun6313
                        }
                    case 142:
                        var14 = var11.length;
                        if (!(!(var14 < var3))) {
                            _fun6313_ip = 387;
                            continue _fun6313
                        }
                    case 154:
                        _closure2_slot0 = var3;
                        var6 = var2 / var3;
                        var5 = var0 / var3;
                        var7 = var4 / var3;
                        var1 = var3;
                    case 173:
                        var0 = arg4;
                        if (var0) {
                            _fun6313_ip = 268;
                            continue _fun6313
                        }
                    case 179:
                        var0 = var7 + var5;
                        var13 = var7;
                        if (!(var0 > var6)) {
                            _fun6313_ip = 194;
                            continue _fun6313
                        }
                    case 190:
                        var13 = var6 - var5;
                    case 194:
                        var4 = 0;
                        if (!(var13 >= var4)) {
                            _fun6313_ip = 373;
                            continue _fun6313
                        }
                    case 203:
                        var15 = var4 < var5;
                        var0 = var13;
                        var16 = 0;
                        var14 = true;
                        if (!var15) {
                            _fun6313_ip = 254;
                            continue _fun6313
                        }
                    case 217:
                        var15 = var0 + var16;
                        var18 = var10.bind(var8)(var12, var15);
                        var17 = var10.bind(var8)(var11, var16);
                        var15 = var16;
                        var14 = false;
                        if (!(var18 === var17)) {
                            _fun6313_ip = 254;
                            continue _fun6313
                        }
                    case 242:
                        var16 = var15 + 1;
                        var15 = var16 < var5;
                        var14 = true;
                        if (var15) {
                            _fun6313_ip = 217;
                            continue _fun6313
                        }
                    case 254:
                        if (var14) {
                            _fun6313_ip = 266;
                            continue _fun6313
                        }
                    case 257:
                        var13 = var0 - 1;
                        if (var13 >= var4) {
                            _fun6313_ip = 203;
                            continue _fun6313
                        }
                    case 264:
                        _fun6313_ip = 373;
                        continue _fun6313;
                    case 266:
                        return var0;
                    case 268:
                        var0 = var7 < var6;
                        var4 = -1;
                        var2 = var4;
                        if (!var0) {
                            _fun6313_ip = 373;
                            continue _fun6313
                        }
                    case 284:
                        var14 = var10.bind(var8)(var12, var7);
                        var0 = var4 === var2;
                        var16 = var7;
                        var13 = 0;
                        if (var0) {
                            _fun6313_ip = 306;
                            continue _fun6313
                        }
                    case 302:
                        var13 = var16 - var2;
                    case 306:
                        var13 = var10.bind(var8)(var11, var13);
                        if (!(var14 !== var13)) {
                            _fun6313_ip = 336;
                            continue _fun6313
                        }
                    case 316:
                        var14 = var16;
                        if (!(var4 !== var2)) {
                            _fun6313_ip = 331;
                            continue _fun6313
                        }
                    case 323:
                        var13 = var16 - var2;
                        var14 = var16 - var13;
                    case 331:
                        var13 = var4;
                        _fun6313_ip = 363;
                        continue _fun6313;
                    case 336:
                        if (!var0) {
                            _fun6313_ip = 342;
                            continue _fun6313
                        }
                    case 339:
                        var2 = var16;
                    case 342:
                        var0 = var16 - var2;
                        var15 = var0 + var9;
                        var0 = var2;
                        var14 = var16;
                        var13 = var0;
                        if (!(var15 !== var5)) {
                            _fun6313_ip = 381;
                            continue _fun6313
                        }
                    case 363:
                        var7 = var14 + 1;
                        var2 = var13;
                        if (var7 < var6) {
                            _fun6313_ip = 284;
                            continue _fun6313
                        }
                    case 373:
                        var2 = -1;
                        return var2;
                    case 381:
                        var0 = var0 * var1;
                        return var0;
                    case 387:
                        var0 = -1;
                        return var0;
                }
            };
            var _closure1_slot19 = var0;
            var0 = function(arg0, arg1, arg2, arg3) { // Original name: hexWrite, environment: var2
                _fun6315: for (var _fun6315_ip = 0;;) switch (_fun6315_ip) {
                    case 0:
                        var11 = arg0;
                        var10 = arg1;
                        var2 = arg3;
                        var9 = global;
                        var1 = var9.Number;
                        var8 = undefined;
                        var0 = arg2;
                        var7 = var1.bind(var8)(var0);
                        if (var7) {
                            _fun6315_ip = 32;
                            continue _fun6315
                        }
                    case 30:
                        var7 = 0;
                    case 32:
                        var0 = var11.length;
                        var0 = var0 - var7;
                        var6 = var0;
                        if (!var2) {
                            _fun6315_ip = 65;
                            continue _fun6315
                        }
                    case 47:
                        var1 = var9.Number;
                        var6 = var1.bind(var8)(var2);
                        if (!(var6 > var0)) {
                            _fun6315_ip = 65;
                            continue _fun6315
                        }
                    case 62:
                        var6 = var0;
                    case 65:
                        var0 = var10.length;
                        var5 = 2;
                        var1 = var0 / var5;
                        if (!(var6 > var1)) {
                            _fun6315_ip = 85;
                            continue _fun6315
                        }
                    case 81:
                        var6 = var0 / var5;
                    case 85:
                        var1 = 0;
                        var0 = var1 < var6;
                        var4 = 16;
                        var2 = 0;
                        if (!var0) {
                            _fun6315_ip = 163;
                            continue _fun6315
                        }
                    case 102:
                        var12 = var9.parseInt;
                        var13 = var10.substr;
                        var0 = var5 * var2;
                        var0 = var13.bind(var10)(var0, var5);
                        var13 = var12.bind(var8)(var0, var4);
                        var0 = _closure1_slot41;
                        var12 = var0.bind(var8)(var13);
                        var0 = var2;
                        if (var12) {
                            _fun6315_ip = 165;
                            continue _fun6315
                        }
                    case 145:
                        var12 = var7 + var0;
                        var11[var12] = var13;
                        var2 = var0 + 1;
                        var1 = var2;
                        if (var1 < var6) {
                            _fun6315_ip = 102;
                            continue _fun6315
                        }
                    case 163:
                        return var1;
                    case 165:
                        return var0;
                }
            };
            var _closure1_slot20 = var0;
            var0 = function(arg0, arg1, arg2, arg3) { // Original name: utf8Write, environment: var2
                var5 = arg0;
                var4 = arg2;
                var3 = _closure1_slot39;
                var6 = _closure1_slot37;
                var0 = var5.length;
                var1 = var0 - var4;
                var2 = undefined;
                var0 = arg1;
                var10 = var6.bind(var2)(var0, var1);
                var7 = arg3;
                var11 = undefined;
                var9 = var5;
                var8 = var4;
                var0 = var11[var3](var10, var9, var8, var7, var6);
                return var0;
            };
            var _closure1_slot21 = var0;
            var0 = function(arg0, arg1, arg2, arg3) { // Original name: asciiWrite, environment: var2
                _fun6317: for (var _fun6317_ip = 0;;) switch (_fun6317_ip) {
                    case 0:
                        var3 = arg1;
                        var5 = _closure1_slot39;
                        var4 = new Array(0);
                        var0 = var3.length;
                        var2 = 0;
                        var0 = var2 < var0;
                        var1 = 255;
                        if (!var0) {
                            _fun6317_ip = 68;
                            continue _fun6317
                        }
                    case 31:
                        var6 = var4.push;
                        var0 = var3.charCodeAt;
                        var0 = var0.bind(var3)(var2);
                        var0 = var1 & var0;
                        var0 = var6.bind(var4)(var0);
                        var2 = var2 + 1;
                        var0 = var3.length;
                        if (var2 < var0) {
                            _fun6317_ip = 31;
                            continue _fun6317
                        }
                    case 68:
                        var11 = undefined;
                        var9 = arg0;
                        var8 = arg2;
                        var7 = arg3;
                        var10 = var4;
                        var0 = var11[var5](var10, var9, var8, var7, var6);
                        return var0;
                }
            };
            var _closure1_slot22 = var0;
            var0 = function(arg0, arg1, arg2, arg3) { // Original name: latin1Write, environment: var2
                var5 = _closure1_slot22;
                var10 = undefined;
                var9 = arg0;
                var8 = arg1;
                var7 = arg2;
                var6 = arg3;
                var0 = var10[var5](var9, var8, var7, var6, var5);
                return var0;
            };
            var _closure1_slot23 = var0;
            var0 = function(arg0, arg1, arg2, arg3) { // Original name: base64Write, environment: var2
                var5 = _closure1_slot39;
                var1 = _closure1_slot38;
                var4 = undefined;
                var0 = arg1;
                var9 = var1.bind(var4)(var0);
                var8 = arg0;
                var7 = arg2;
                var6 = arg3;
                var10 = undefined;
                var0 = var10[var5](var9, var8, var7, var6, var5);
                return var0;
            };
            var _closure1_slot24 = var0;
            var0 = function(arg0, arg1, arg2, arg3) { // Original name: ucs2Write, environment: var2
                _fun6320: for (var _fun6320_ip = 0;;) switch (_fun6320_ip) {
                    case 0:
                        var5 = arg0;
                        var10 = arg1;
                        var4 = arg2;
                        var3 = _closure1_slot39;
                        var0 = var5.length;
                        var0 = var0 - var4;
                        var2 = new Array(0);
                        var1 = var10.length;
                        var9 = 0;
                        if (!(var9 < var1)) {
                            _fun6320_ip = 121;
                            continue _fun6320
                        }
                    case 40:
                        var8 = 2;
                        var7 = var0 - var8;
                        var6 = 8;
                        var1 = 256;
                        var0 = 0;
                        if (!(!(var7 < var0))) {
                            _fun6320_ip = 121;
                            continue _fun6320
                        }
                    case 62:
                        var11 = var10.charCodeAt;
                        var11 = var11.bind(var10)(var0);
                        var12 = var11 >> var6;
                        var13 = var11 % var1;
                        var11 = var2.push;
                        var11 = var11.bind(var2)(var13);
                        var11 = var2.push;
                        var11 = var11.bind(var2)(var12);
                        var0 = var0 + 1;
                        var11 = var10.length;
                        if (!(var0 < var11)) {
                            _fun6320_ip = 121;
                            continue _fun6320
                        }
                    case 113:
                        var7 = var7 - var8;
                        if (!(var7 < var9)) {
                            _fun6320_ip = 62;
                            continue _fun6320
                        }
                    case 121:
                        var18 = undefined;
                        var14 = arg3;
                        var17 = var2;
                        var16 = var5;
                        var15 = var4;
                        var0 = var18[var3](var17, var16, var15, var14, var13);
                        return var0;
                }
            };
            var _closure1_slot25 = var0;
            var0 = function(arg0, arg1, arg2) { // Original name: base64Slice, environment: var2
                _fun6321: for (var _fun6321_ip = 0;;) switch (_fun6321_ip) {
                    case 0:
                        var3 = arg0;
                        var6 = arg1;
                        var5 = arg2;
                        var2 = 0;
                        if (!(var2 === var6)) {
                            _fun6321_ip = 24;
                            continue _fun6321
                        }
                    case 15:
                        var0 = var3.length;
                        if (!(var5 !== var0)) {
                            _fun6321_ip = 70;
                            continue _fun6321
                        }
                    case 24:
                        var4 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var1 = var0[var2];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var1);
                        var1 = var4.fromByteArray;
                        var0 = var3.slice;
                        var0 = var0.bind(var3)(var6, var5);
                        var0 = var1.bind(var4)(var0);
                        _fun6321_ip = 103;
                        continue _fun6321;
                    case 70:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = var1[var2];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var1 = var2.fromByteArray;
                        var0 = var1.bind(var2)(var3);
                    case 103:
                        return var0;
                }
            };
            var _closure1_slot26 = var0;
            var0 = function(arg0, arg1, arg2) { // Original name: utf8Slice, environment: var2
                _fun6322: for (var _fun6322_ip = 0;;) switch (_fun6322_ip) {
                    case 0:
                        var35 = arg0;
                        var34 = arg1;
                        var1 = global;
                        var4 = var1.Math;
                        var3 = var4.min;
                        var2 = var35.length;
                        var0 = arg2;
                        var33 = var3.bind(var4)(var2, var0);
                        var4 = new Array(0);
                        var36 = var34 < var33;
                        var5 = undefined;
                        var32 = 65536;
                        var31 = 10;
                        var30 = 1023;
                        var29 = 55296;
                        var28 = 56320;
                        var27 = 65535;
                        var26 = 65533;
                        var25 = 1;
                        var24 = null;
                        var23 = 128;
                        var22 = 31;
                        var21 = 63;
                        var20 = 6;
                        var19 = 127;
                        var18 = 192;
                        var17 = 57343;
                        var16 = 15;
                        var15 = 12;
                        var14 = 2047;
                        var13 = 2;
                        var12 = 1114112;
                        var11 = 18;
                        var10 = 3;
                        var9 = 4;
                        var8 = 191;
                        var7 = 223;
                        var6 = 239;
                        var3 = undefined;
                        var2 = undefined;
                        var0 = undefined;
                        if (!var36) {
                            _fun6322_ip = 764;
                            continue _fun6322
                        }
                    case 162:
                        var40 = var35[var34];
                        var36 = var40 > var6;
                        var41 = var9;
                        if (var36) {
                            _fun6322_ip = 205;
                            continue _fun6322
                        }
                    case 176:
                        var37 = var40 > var7;
                        var36 = var10;
                        if (var37) {
                            _fun6322_ip = 202;
                            continue _fun6322
                        }
                    case 186:
                        var38 = var40 > var8;
                        var37 = var25;
                        if (!var38) {
                            _fun6322_ip = 199;
                            continue _fun6322
                        }
                    case 196:
                        var37 = var13;
                    case 199:
                        var36 = var37;
                    case 202:
                        var41 = var36;
                    case 205:
                        var36 = var34 + var41;
                        var42 = var36 <= var33;
                        var39 = var5;
                        var38 = var3;
                        var37 = var2;
                        var36 = var0;
                        var43 = null;
                        if (!var42) {
                            _fun6322_ip = 674;
                            continue _fun6322
                        }
                    case 233:
                        if (!(var25 !== var41)) {
                            _fun6322_ip = 638;
                            continue _fun6322
                        }
                    case 240:
                        if (!(var13 !== var41)) {
                            _fun6322_ip = 559;
                            continue _fun6322
                        }
                    case 247:
                        if (!(var10 !== var41)) {
                            _fun6322_ip = 429;
                            continue _fun6322
                        }
                    case 254:
                        var39 = var5;
                        var38 = var3;
                        var37 = var2;
                        var36 = var0;
                        var43 = null;
                        if (!(var9 === var41)) {
                            _fun6322_ip = 674;
                            continue _fun6322
                        }
                    case 275:
                        var42 = var34 + var25;
                        var46 = var35[var42];
                        var42 = var34 + var13;
                        var45 = var35[var42];
                        var42 = var34 + var10;
                        var44 = var35[var42];
                        var42 = var18 & var46;
                        var47 = var23 === var42;
                        if (!var47) {
                            _fun6322_ip = 318;
                            continue _fun6322
                        }
                    case 310:
                        var42 = var18 & var45;
                        var47 = var23 === var42;
                    case 318:
                        if (!var47) {
                            _fun6322_ip = 329;
                            continue _fun6322
                        }
                    case 321:
                        var42 = var18 & var44;
                        var47 = var23 === var42;
                    case 329:
                        var42 = var0;
                        if (!var47) {
                            _fun6322_ip = 382;
                            continue _fun6322
                        }
                    case 335:
                        var51 = var16 & var40;
                        var50 = var21 & var46;
                        var48 = var21 & var45;
                        var49 = var21 & var44;
                        var51 = var51 << var11;
                        var50 = var50 << var15;
                        var50 = var51 | var50;
                        var48 = var48 << var20;
                        var48 = var50 | var48;
                        var48 = var48 | var49;
                        var47 = var48 > var27;
                        var42 = var48;
                    case 382:
                        if (!var47) {
                            _fun6322_ip = 389;
                            continue _fun6322
                        }
                    case 385:
                        var47 = var42 < var12;
                    case 389:
                        var39 = var46;
                        var38 = var45;
                        var37 = var44;
                        var36 = var42;
                        var43 = null;
                        if (!var47) {
                            _fun6322_ip = 674;
                            continue _fun6322
                        }
                    case 409:
                        var39 = var46;
                        var38 = var45;
                        var37 = var44;
                        var36 = var42;
                        var43 = var36;
                        _fun6322_ip = 674;
                        continue _fun6322;
                    case 429:
                        var42 = var34 + var25;
                        var45 = var35[var42];
                        var42 = var34 + var13;
                        var44 = var35[var42];
                        var42 = var18 & var45;
                        var46 = var23 === var42;
                        if (!var46) {
                            _fun6322_ip = 464;
                            continue _fun6322
                        }
                    case 456:
                        var42 = var18 & var44;
                        var46 = var23 === var42;
                    case 464:
                        var42 = var0;
                        if (!var46) {
                            _fun6322_ip = 505;
                            continue _fun6322
                        }
                    case 470:
                        var49 = var16 & var40;
                        var47 = var21 & var45;
                        var48 = var21 & var44;
                        var49 = var49 << var15;
                        var47 = var47 << var20;
                        var47 = var49 | var47;
                        var47 = var47 | var48;
                        var46 = var47 > var14;
                        var42 = var47;
                    case 505:
                        if (!var46) {
                            _fun6322_ip = 522;
                            continue _fun6322
                        }
                    case 508:
                        var47 = var42 < var29;
                        if (var47) {
                            _fun6322_ip = 519;
                            continue _fun6322
                        }
                    case 515:
                        var47 = var42 > var17;
                    case 519:
                        var46 = var47;
                    case 522:
                        var39 = var45;
                        var38 = var44;
                        var37 = var2;
                        var36 = var42;
                        var43 = null;
                        if (!var46) {
                            _fun6322_ip = 674;
                            continue _fun6322
                        }
                    case 542:
                        var39 = var45;
                        var38 = var44;
                        var37 = var2;
                        var36 = var42;
                        var43 = var36;
                        _fun6322_ip = 674;
                        continue _fun6322;
                    case 559:
                        var42 = var34 + var25;
                        var44 = var35[var42];
                        var42 = var18 & var44;
                        var45 = var23 === var42;
                        var42 = var0;
                        if (!var45) {
                            _fun6322_ip = 604;
                            continue _fun6322
                        }
                    case 581:
                        var46 = var22 & var40;
                        var47 = var21 & var44;
                        var46 = var46 << var20;
                        var46 = var46 | var47;
                        var45 = var46 > var19;
                        var42 = var46;
                    case 604:
                        var39 = var44;
                        var38 = var3;
                        var37 = var2;
                        var36 = var42;
                        var43 = null;
                        if (!var45) {
                            _fun6322_ip = 674;
                            continue _fun6322
                        }
                    case 621:
                        var39 = var44;
                        var38 = var3;
                        var37 = var2;
                        var36 = var42;
                        var43 = var36;
                        _fun6322_ip = 674;
                        continue _fun6322;
                    case 638:
                        var42 = var40 < var23;
                        var39 = var5;
                        var38 = var3;
                        var37 = var2;
                        var36 = var0;
                        var43 = null;
                        if (!var42) {
                            _fun6322_ip = 674;
                            continue _fun6322
                        }
                    case 659:
                        var39 = var5;
                        var38 = var3;
                        var37 = var2;
                        var36 = var0;
                        var43 = var40;
                    case 674:
                        var42 = var26;
                        var40 = var25;
                        if (!(var24 !== var43)) {
                            _fun6322_ip = 731;
                            continue _fun6322
                        }
                    case 684:
                        var40 = var41;
                        var42 = var43;
                        if (!(var42 > var27)) {
                            _fun6322_ip = 731;
                            continue _fun6322
                        }
                    case 694:
                        var43 = var43 - var32;
                        var45 = var4.push;
                        var44 = var43 >>> var31;
                        var44 = var44 & var30;
                        var44 = var44 | var29;
                        var44 = var45.bind(var4)(var44);
                        var43 = var30 & var43;
                        var42 = var28 | var43;
                        var40 = var41;
                    case 731:
                        var41 = var4.push;
                        var41 = var41.bind(var4)(var42);
                        var34 = var34 + var40;
                        var5 = var39;
                        var3 = var38;
                        var2 = var37;
                        var0 = var36;
                        if (var34 < var33) {
                            _fun6322_ip = 162;
                            continue _fun6322
                        }
                    case 764:
                        var6 = var4.length;
                        var0 = _closure1_slot4;
                        if (!(!(var6 <= var0))) {
                            _fun6322_ip = 860;
                            continue _fun6322
                        }
                    case 780:
                        var3 = 0;
                        var7 = var3 < var6;
                        var2 = '';
                        var0 = var2;
                        if (!var7) {
                            _fun6322_ip = 858;
                            continue _fun6322
                        }
                    case 796:
                        var7 = var1.String;
                        var11 = var7.fromCharCode;
                        var10 = var11.apply;
                        var9 = var1.String;
                        var8 = var4.slice;
                        var7 = _closure1_slot4;
                        var7 = var3 + var7;
                        var8 = var8.bind(var4)(var3, var7);
                        var8 = var10.bind(var11)(var9, var8);
                        var2 = var2 + var8;
                        var0 = var2;
                        var3 = var7;
                        if (var3 < var6) {
                            _fun6322_ip = 796;
                            continue _fun6322
                        }
                    case 858:
                        _fun6322_ip = 889;
                        continue _fun6322;
                    case 860:
                        var2 = var1.String;
                        var3 = var2.fromCharCode;
                        var2 = var3.apply;
                        var1 = var1.String;
                        var0 = var2.bind(var3)(var1, var4);
                    case 889:
                        return var0;
                }
            };
            var _closure1_slot27 = var0;
            var0 = function(arg0, arg1, arg2) { // Original name: asciiSlice, environment: var2
                _fun6323: for (var _fun6323_ip = 0;;) switch (_fun6323_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var4 = global;
                        var3 = var4.Math;
                        var2 = var3.min;
                        var1 = var6.length;
                        var0 = arg2;
                        var3 = var2.bind(var3)(var1, var0);
                        var7 = var5 < var3;
                        var1 = '';
                        var2 = 127;
                        var0 = var1;
                        if (!var7) {
                            _fun6323_ip = 89;
                            continue _fun6323
                        }
                    case 50:
                        var9 = var4.String;
                        var8 = var9.fromCharCode;
                        var7 = var6[var5];
                        var7 = var2 & var7;
                        var7 = var8.bind(var9)(var7);
                        var1 = var1 + var7;
                        var5 = var5 + 1;
                        var0 = var1;
                        if (var5 < var3) {
                            _fun6323_ip = 50;
                            continue _fun6323
                        }
                    case 89:
                        return var0;
                }
            };
            var _closure1_slot28 = var0;
            var0 = function(arg0, arg1, arg2) { // Original name: latin1Slice, environment: var2
                _fun6324: for (var _fun6324_ip = 0;;) switch (_fun6324_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = arg1;
                        var3 = global;
                        var6 = var3.Math;
                        var2 = var6.min;
                        var1 = var5.length;
                        var0 = arg2;
                        var2 = var2.bind(var6)(var1, var0);
                        var6 = var4 < var2;
                        var1 = '';
                        var0 = var1;
                        if (!var6) {
                            _fun6324_ip = 82;
                            continue _fun6324
                        }
                    case 47:
                        var8 = var3.String;
                        var7 = var8.fromCharCode;
                        var6 = var5[var4];
                        var6 = var7.bind(var8)(var6);
                        var1 = var1 + var6;
                        var4 = var4 + 1;
                        var0 = var1;
                        if (var4 < var2) {
                            _fun6324_ip = 47;
                            continue _fun6324
                        }
                    case 82:
                        return var0;
                }
            };
            var _closure1_slot29 = var0;
            var0 = function(arg0, arg1, arg2) { // Original name: hexSlice, environment: var2
                _fun6325: for (var _fun6325_ip = 0;;) switch (_fun6325_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = arg1;
                        var3 = arg2;
                        var0 = var5.length;
                        var1 = !var4;
                        if (var1) {
                            _fun6325_ip = 26;
                            continue _fun6325
                        }
                    case 20:
                        var2 = 0;
                        var1 = var4 < var2;
                    case 26:
                        if (!var1) {
                            _fun6325_ip = 31;
                            continue _fun6325
                        }
                    case 29:
                        var4 = 0;
                    case 31:
                        var1 = !var3;
                        if (var1) {
                            _fun6325_ip = 43;
                            continue _fun6325
                        }
                    case 37:
                        var2 = 0;
                        var1 = var3 < var2;
                    case 43:
                        if (var1) {
                            _fun6325_ip = 50;
                            continue _fun6325
                        }
                    case 46:
                        var1 = var3 > var0;
                    case 50:
                        if (!var1) {
                            _fun6325_ip = 56;
                            continue _fun6325
                        }
                    case 53:
                        var3 = var0;
                    case 56:
                        var6 = var4 < var3;
                        var1 = '';
                        var0 = var1;
                        if (!var6) {
                            _fun6325_ip = 99;
                            continue _fun6325
                        }
                    case 73:
                        var7 = _closure1_slot6;
                        var6 = var5[var4];
                        var6 = var7[var6];
                        var1 = var1 + var6;
                        var4 = var4 + 1;
                        var0 = var1;
                        if (var4 < var3) {
                            _fun6325_ip = 73;
                            continue _fun6325
                        }
                    case 99:
                        return var0;
                }
            };
            var _closure1_slot30 = var0;
            var0 = function(arg0, arg1, arg2) { // Original name: utf16leSlice, environment: var2
                _fun6326: for (var _fun6326_ip = 0;;) switch (_fun6326_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = var3.slice;
                        var1 = arg1;
                        var0 = arg2;
                        var8 = var2.bind(var3)(var1, var0);
                        var0 = var8.length;
                        var7 = 0;
                        var1 = var7 < var0;
                        var2 = '';
                        var6 = global;
                        var5 = 1;
                        var4 = 256;
                        var3 = 2;
                        var0 = var2;
                        if (!var1) {
                            _fun6326_ip = 112;
                            continue _fun6326
                        }
                    case 55:
                        var10 = var6.String;
                        var9 = var10.fromCharCode;
                        var11 = var8[var7];
                        var1 = var7 + var5;
                        var1 = var8[var1];
                        var1 = var4 * var1;
                        var1 = var11 + var1;
                        var1 = var9.bind(var10)(var1);
                        var2 = var2 + var1;
                        var7 = var7 + var3;
                        var1 = var8.length;
                        var0 = var2;
                        if (var7 < var1) {
                            _fun6326_ip = 55;
                            continue _fun6326
                        }
                    case 112:
                        return var0;
                }
            };
            var _closure1_slot31 = var0;
            var0 = function(arg0, arg1, arg2) { // Original name: checkOffset, environment: var2
                _fun6327: for (var _fun6327_ip = 0;;) switch (_fun6327_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = 1;
                        var2 = var1 % var0;
                        var0 = 0;
                        if (!(var2 === var0)) {
                            _fun6327_ip = 74;
                            continue _fun6327
                        }
                    case 16:
                        if (!(!(var1 < var0))) {
                            _fun6327_ip = 74;
                            continue _fun6327
                        }
                    case 20:
                        var0 = arg1;
                        var1 = var1 + var0;
                        var0 = arg2;
                        if (!(!(var1 > var0))) {
                            _fun6327_ip = 38;
                            continue _fun6327
                        }
                    case 34:
                        var0 = undefined;
                        return var0;
                    case 38:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var3 = 'Trying to access beyond buffer length';
                        var4 = var1;
                        var0 = new var4[var2](var3, var2);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 74:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var3 = 'offset is not uint';
                        var4 = var1;
                        var0 = new var4[var2](var3, var2);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot32 = var0;
            var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: checkInt, environment: var2
                _fun6328: for (var _fun6328_ip = 0;;) switch (_fun6328_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = arg1;
                        var3 = _closure1_slot8;
                        var1 = var3.isBuffer;
                        var1 = var1.bind(var3)(var0);
                        if (var1) {
                            _fun6328_ip = 63;
                            continue _fun6328
                        }
                    case 27:
                        var1 = global;
                        var4 = var1.TypeError;
                        var1 = var4.prototype;
                        var3 = Object.create(var1, {
                            constructor: {
                                value: var4
                            }
                        });
                        var5 = '"buffer" argument must be a Buffer instance';
                        var6 = var3;
                        var1 = new var6[var4](var5, var4);
                        var1 = var1 instanceof Object ? var1 : var3;
                        throw var1;
                    case 63:
                        var1 = arg4;
                        if (!(!(var2 > var1))) {
                            _fun6328_ip = 136;
                            continue _fun6328
                        }
                    case 70:
                        var1 = arg5;
                        if (!(!(var2 < var1))) {
                            _fun6328_ip = 136;
                            continue _fun6328
                        }
                    case 77:
                        var2 = arg2;
                        var1 = arg3;
                        var1 = var2 + var1;
                        var0 = var0.length;
                        if (!(!(var1 > var0))) {
                            _fun6328_ip = 100;
                            continue _fun6328
                        }
                    case 96:
                        var0 = undefined;
                        return var0;
                    case 100:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = 'Index out of range';
                        var6 = var1;
                        var0 = new var6[var2](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 136:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = '"value" argument is out of bounds';
                        var6 = var1;
                        var0 = new var6[var2](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot33 = var0;
            var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: checkIEEE754, environment: var2
                _fun6329: for (var _fun6329_ip = 0;;) switch (_fun6329_ip) {
                    case 0:
                        var1 = arg2;
                        var0 = arg3;
                        var2 = var1 + var0;
                        var0 = arg0;
                        var0 = var0.length;
                        if (!(!(var2 > var0))) {
                            _fun6329_ip = 68;
                            continue _fun6329
                        }
                    case 22:
                        var0 = 0;
                        if (!(!(var1 < var0))) {
                            _fun6329_ip = 32;
                            continue _fun6329
                        }
                    case 28:
                        var0 = undefined;
                        return var0;
                    case 32:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var3 = 'Index out of range';
                        var4 = var1;
                        var0 = new var4[var2](var3, var2);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 68:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var3 = 'Index out of range';
                        var4 = var1;
                        var0 = new var4[var2](var3, var2);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot34 = var0;
            var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: writeFloat, environment: var2
                _fun6330: for (var _fun6330_ip = 0;;) switch (_fun6330_ip) {
                    case 0:
                        var7 = arg0;
                        var0 = arg1;
                        var6 = var0 - 0;
                        var1 = arg2;
                        var0 = 0;
                        var1 = var1 >>> var0;
                        var0 = arg4;
                        if (var0) {
                            _fun6330_ip = 48;
                            continue _fun6330
                        }
                    case 24:
                        var3 = _closure1_slot34;
                        var10 = 4;
                        var14 = undefined;
                        var13 = var7;
                        var12 = undefined;
                        var11 = var1;
                        var0 = var14[var3](var13, var12, var11, var10, var9);
                    case 48:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var5 = var3.bind(var0)(var2);
                        var4 = var5.write;
                        var10 = arg3;
                        var9 = 23;
                        var0 = 4;
                        var14 = var5;
                        var13 = var7;
                        var12 = var6;
                        var11 = var1;
                        var8 = var0;
                        var2 = var14[var4](var13, var12, var11, var10, var9, var8, var7);
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var _closure1_slot35 = var0;
            var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: writeDouble, environment: var2
                _fun6331: for (var _fun6331_ip = 0;;) switch (_fun6331_ip) {
                    case 0:
                        var7 = arg0;
                        var0 = arg1;
                        var6 = var0 - 0;
                        var1 = arg2;
                        var0 = 0;
                        var1 = var1 >>> var0;
                        var0 = arg4;
                        if (var0) {
                            _fun6331_ip = 48;
                            continue _fun6331
                        }
                    case 24:
                        var3 = _closure1_slot34;
                        var10 = 8;
                        var14 = undefined;
                        var13 = var7;
                        var12 = undefined;
                        var11 = var1;
                        var0 = var14[var3](var13, var12, var11, var10, var9);
                    case 48:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var5 = var3.bind(var0)(var2);
                        var4 = var5.write;
                        var10 = arg3;
                        var9 = 52;
                        var0 = 8;
                        var14 = var5;
                        var13 = var7;
                        var12 = var6;
                        var11 = var1;
                        var8 = var0;
                        var2 = var14[var4](var13, var12, var11, var10, var9, var8, var7);
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var _closure1_slot36 = var0;
            var0 = function(arg0, arg1) { // Original name: utf8ToBytes, environment: var2
                _fun6332: for (var _fun6332_ip = 0;;) switch (_fun6332_ip) {
                    case 0:
                        var32 = arg0;
                        var31 = arg1;
                        if (var31) {
                            _fun6332_ip = 19;
                            continue _fun6332
                        }
                    case 9:
                        var31 = inf;
                    case 19:
                        var30 = var32.length;
                        var0 = new Array(0);
                        var29 = 0;
                        var33 = var29 < var30;
                        var27 = 239;
                        var26 = 191;
                        var25 = 189;
                        var24 = 3;
                        var23 = -1;
                        var22 = 1;
                        var21 = 6;
                        var20 = 63;
                        var19 = 192;
                        var18 = 128;
                        var17 = 2;
                        var16 = 12;
                        var15 = 224;
                        var14 = 18;
                        var13 = 240;
                        var12 = 4;
                        var11 = 1114112;
                        var10 = 65536;
                        var9 = 2048;
                        var8 = 55296;
                        var7 = 56320;
                        var6 = 10;
                        var5 = 56319;
                        var4 = 57344;
                        var3 = 55295;
                        var2 = null;
                        var1 = 0;
                        if (!var33) {
                            _fun6332_ip = 661;
                            continue _fun6332
                        }
                    case 146:
                        var33 = var32.charCodeAt;
                        var36 = var33.bind(var32)(var1);
                        var35 = var1;
                        if (!(var36 > var3)) {
                            _fun6332_ip = 168;
                            continue _fun6332
                        }
                    case 164:
                        if (!(!(var36 < var4))) {
                            _fun6332_ip = 223;
                            continue _fun6332
                        }
                    case 168:
                        var34 = var2;
                        var33 = var31;
                        if (!var2) {
                            _fun6332_ip = 188;
                            continue _fun6332
                        }
                    case 177:
                        var37 = var31 - var24;
                        var34 = var37 > var23;
                        var33 = var37;
                    case 188:
                        var37 = var33;
                        var39 = var36;
                        if (!var34) {
                            _fun6332_ip = 357;
                            continue _fun6332
                        }
                    case 200:
                        var34 = var0.push;
                        var34 = var34.bind(var0)(var27, var26, var25);
                        var37 = var33;
                        var39 = var36;
                        _fun6332_ip = 357;
                        continue _fun6332;
                    case 223:
                        if (var2) {
                            _fun6332_ip = 327;
                            continue _fun6332
                        }
                    case 226:
                        if (!(!(var36 > var5))) {
                            _fun6332_ip = 287;
                            continue _fun6332
                        }
                    case 230:
                        var38 = var35 + var22;
                        var34 = var31;
                        var33 = var36;
                        if (!(var38 === var30)) {
                            _fun6332_ip = 645;
                            continue _fun6332
                        }
                    case 247:
                        var38 = var31 - var24;
                        var33 = var2;
                        var34 = var38;
                        if (!(var34 > var23)) {
                            _fun6332_ip = 645;
                            continue _fun6332
                        }
                    case 264:
                        var40 = var0.push;
                        var40 = var40.bind(var0)(var27, var26, var25);
                        var34 = var38;
                        var33 = var2;
                        _fun6332_ip = 645;
                        continue _fun6332;
                    case 287:
                        var38 = var31 - var24;
                        var33 = var2;
                        var34 = var38;
                        if (!(var34 > var23)) {
                            _fun6332_ip = 645;
                            continue _fun6332
                        }
                    case 304:
                        var40 = var0.push;
                        var40 = var40.bind(var0)(var27, var26, var25);
                        var34 = var38;
                        var33 = var2;
                        _fun6332_ip = 645;
                        continue _fun6332;
                    case 327:
                        if (!(!(var36 < var7))) {
                            _fun6332_ip = 613;
                            continue _fun6332
                        }
                    case 334:
                        var38 = var2 - var8;
                        var40 = var36 - var7;
                        var38 = var38 << var6;
                        var38 = var38 | var40;
                        var39 = var10 + var38;
                        var37 = var31;
                    case 357:
                        if (!(!(var39 < var18))) {
                            _fun6332_ip = 588;
                            continue _fun6332
                        }
                    case 364:
                        if (!(!(var39 < var9))) {
                            _fun6332_ip = 546;
                            continue _fun6332
                        }
                    case 371:
                        if (!(!(var39 < var10))) {
                            _fun6332_ip = 488;
                            continue _fun6332
                        }
                    case 375:
                        if (!(!(var39 < var11))) {
                            _fun6332_ip = 415;
                            continue _fun6332
                        }
                    case 379:
                        var38 = global;
                        var41 = var38.Error;
                        var38 = var41.prototype;
                        var40 = Object.create(var38, {
                            constructor: {
                                value: var41
                            }
                        });
                        var48 = 'Invalid code point';
                        var49 = var40;
                        var38 = new var49[var41](var48, var47);
                        var38 = var38 instanceof Object ? var38 : var40;
                        throw var38;
                    case 415:
                        var38 = var37 - var12;
                        if (!(!(var38 < var29))) {
                            _fun6332_ip = 661;
                            continue _fun6332
                        }
                    case 426:
                        var44 = var0.push;
                        var43 = var39 >> var14;
                        var42 = var39 >> var16;
                        var41 = var39 >> var21;
                        var40 = var20 & var39;
                        var48 = var43 | var13;
                        var42 = var42 & var20;
                        var47 = var42 | var18;
                        var41 = var41 & var20;
                        var46 = var41 | var18;
                        var45 = var40 | var18;
                        var49 = var0;
                        var40 = var49[var44](var48, var47, var46, var45, var44);
                        var34 = var38;
                        var33 = null;
                        _fun6332_ip = 645;
                        continue _fun6332;
                    case 488:
                        var38 = var37 - var24;
                        if (!(!(var38 < var29))) {
                            _fun6332_ip = 661;
                            continue _fun6332
                        }
                    case 499:
                        var43 = var0.push;
                        var42 = var39 >> var16;
                        var41 = var39 >> var21;
                        var40 = var20 & var39;
                        var42 = var42 | var15;
                        var41 = var41 & var20;
                        var41 = var41 | var18;
                        var40 = var40 | var18;
                        var40 = var43.bind(var0)(var42, var41, var40);
                        var34 = var38;
                        var33 = null;
                        _fun6332_ip = 645;
                        continue _fun6332;
                    case 546:
                        var38 = var37 - var17;
                        if (!(!(var38 < var29))) {
                            _fun6332_ip = 661;
                            continue _fun6332
                        }
                    case 554:
                        var42 = var0.push;
                        var41 = var39 >> var21;
                        var40 = var20 & var39;
                        var41 = var41 | var19;
                        var40 = var40 | var18;
                        var40 = var42.bind(var0)(var41, var40);
                        var34 = var38;
                        var33 = null;
                        _fun6332_ip = 645;
                        continue _fun6332;
                    case 588:
                        var37 = var37 - var22;
                        if (!(!(var37 < var29))) {
                            _fun6332_ip = 661;
                            continue _fun6332
                        }
                    case 596:
                        var38 = var0.push;
                        var38 = var38.bind(var0)(var39);
                        var34 = var37;
                        var33 = null;
                        _fun6332_ip = 645;
                        continue _fun6332;
                    case 613:
                        var37 = var31 - var24;
                        var34 = var37;
                        var33 = var36;
                        if (!(var37 > var23)) {
                            _fun6332_ip = 645;
                            continue _fun6332
                        }
                    case 627:
                        var38 = var0.push;
                        var38 = var38.bind(var0)(var27, var26, var25);
                        var34 = var37;
                        var33 = var36;
                    case 645:
                        var1 = var35 + 1;
                        var31 = var34;
                        var2 = var33;
                        if (var1 < var30) {
                            _fun6332_ip = 146;
                            continue _fun6332
                        }
                    case 661:
                        return var0;
                }
            };
            var _closure1_slot37 = var0;
            var0 = function(arg0) { // Original name: base64ToBytes, environment: var2
                _fun6333: for (var _fun6333_ip = 0;;) switch (_fun6333_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var8 = 0;
                        var2 = var1[var8];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.toByteArray;
                        var3 = var4.split;
                        var7 = '=';
                        var3 = var3.bind(var4)(var7);
                        var4 = var3[var8];
                        var3 = var4.trim;
                        var5 = var3.bind(var4)();
                        var4 = var5.replace;
                        var3 = _closure1_slot5;
                        var0 = '';
                        var3 = var4.bind(var5)(var3, var0);
                        var5 = var3.length;
                        var4 = 2;
                        var4 = var5 < var4;
                        if (var4) {
                            _fun6333_ip = 143;
                            continue _fun6333
                        }
                    case 95:
                        var4 = var3.length;
                        var6 = 4;
                        var4 = var4 % var6;
                        var5 = var3;
                        var3 = var5;
                        if (!(var4 !== var8)) {
                            _fun6333_ip = 140;
                            continue _fun6333
                        }
                    case 117:
                        var9 = var5 + var7;
                        var4 = var9.length;
                        var4 = var4 % var6;
                        var5 = var9;
                        var3 = var5;
                        if (var4 !== var8) {
                            _fun6333_ip = 117;
                            continue _fun6333
                        }
                    case 140:
                        var0 = var3;
                    case 143:
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var _closure1_slot38 = var0;
            var0 = function(arg0, arg1, arg2, arg3) { // Original name: blitBuffer, environment: var2
                _fun6334: for (var _fun6334_ip = 0;;) switch (_fun6334_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var4 = arg2;
                        var3 = arg3;
                        var7 = 0;
                        var1 = var7 < var3;
                        var0 = 0;
                        if (!var1) {
                            _fun6334_ip = 110;
                            continue _fun6334
                        }
                    case 23:
                        var2 = var7 + var4;
                        var1 = var5.length;
                        var1 = var2 >= var1;
                        var0 = 0;
                        if (var1) {
                            _fun6334_ip = 110;
                            continue _fun6334
                        }
                    case 41:
                        var1 = var6.length;
                        var1 = var7 >= var1;
                        var2 = 0;
                        var0 = 0;
                        if (var1) {
                            _fun6334_ip = 110;
                            continue _fun6334
                        }
                    case 57:
                        var7 = var2 + var4;
                        var1 = var6[var2];
                        var5[var7] = var1;
                        var7 = var2 + 1;
                        var0 = var7;
                        if (!(var7 < var3)) {
                            _fun6334_ip = 110;
                            continue _fun6334
                        }
                    case 79:
                        var8 = var7 + var4;
                        var1 = var5.length;
                        var0 = var7;
                        if (!(!(var8 >= var1))) {
                            _fun6334_ip = 110;
                            continue _fun6334
                        }
                    case 95:
                        var1 = var6.length;
                        var2 = var7;
                        var0 = var2;
                        if (!(var0 >= var1)) {
                            _fun6334_ip = 57;
                            continue _fun6334
                        }
                    case 110:
                        return var0;
                }
            };
            var _closure1_slot39 = var0;
            var0 = function(arg0, arg1) { // Original name: isInstance, environment: var2
                _fun6335: for (var _fun6335_ip = 0;;) switch (_fun6335_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = arg1;
                        var0 = var3 instanceof var2;
                        if (var0) {
                            _fun6335_ip = 73;
                            continue _fun6335
                        }
                    case 13:
                        var5 = null;
                        var1 = var5 != var3;
                        if (!var1) {
                            _fun6335_ip = 31;
                            continue _fun6335
                        }
                    case 22:
                        var4 = var3.constructor;
                        var1 = var5 != var4;
                    case 31:
                        if (!var1) {
                            _fun6335_ip = 48;
                            continue _fun6335
                        }
                    case 34:
                        var4 = var3.constructor;
                        var4 = var4.name;
                        var1 = var5 != var4;
                    case 48:
                        if (!var1) {
                            _fun6335_ip = 70;
                            continue _fun6335
                        }
                    case 51:
                        var3 = var3.constructor;
                        var3 = var3.name;
                        var2 = var2.name;
                        var1 = var3 === var2;
                    case 70:
                        var0 = var1;
                    case 73:
                        return var0;
                }
            };
            var _closure1_slot40 = var0;
            var0 = function(arg0) { // Original name: numberIsNaN, environment: var2
                var0 = arg0;
                var0 = var0 != var0;
                return var0;
            };
            var _closure1_slot41 = var0;
            var1 = global;
            var0 = var1.Symbol;
            var8 = 'function';
            var0 = typeof var0;
            var6 = null;
            if (!(var8 === var0)) {
                _fun6300_ip = 402;
                continue _fun6300
            }
        case 358:
            var0 = var1.Symbol;
            var0 = var0.for;
            var0 = typeof var0;
            var6 = null;
            if (!(var8 === var0)) {
                _fun6300_ip = 402;
                continue _fun6300
            }
        case 379:
            var9 = var1.Symbol;
            var7 = var9.for;
            var0 = 'nodejs.util.inspect.custom';
            var6 = var7.bind(var9)(var0);
        case 402:
            var5.Buffer = var3;
            var0 = function(arg0) { // Original name: SlowBuffer, environment: var2
                _fun6337: for (var _fun6337_ip = 0;;) switch (_fun6337_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0 - 0;
                        if (!(var1 != var0)) {
                            _fun6337_ip = 12;
                            continue _fun6337
                        }
                    case 10:
                        var0 = 0;
                    case 12:
                        var2 = _closure1_slot8;
                        var1 = var2.alloc;
                        var0 = var0 - 0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var5.SlowBuffer = var0;
            var0 = 50;
            var5.INSPECT_MAX_BYTES = var0;
            var0 = 2147483647;
            var _closure1_slot3 = var0;
            var5.kMaxLength = var0;
            var5 = function() { // Original name: typedArraySupport, environment: var2
                _fun6338: for (var _fun6338_ip = 0;;) switch (_fun6338_ip) {
                    case 0: // try_start_0
                        var0 = global;
                        var3 = var0.Uint8Array;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var7 = 1;
                        var8 = var2;
                        var1 = new var8[var3](var7, var6);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var3 = {};
                        var2 = function() { // Original name: foo, environment: var2
                            var0 = 42;
                            return var0;
                        };
                        var3.foo = var2;
                        var5 = var0.Object;
                        var4 = var5.setPrototypeOf;
                        var2 = var0.Uint8Array;
                        var2 = var2.prototype;
                        var2 = var4.bind(var5)(var3, var2);
                        var2 = var0.Object;
                        var0 = var2.setPrototypeOf;
                        var0 = var0.bind(var2)(var1, var3);
                        var0 = var1.foo;
                        var1 = var0.bind(var1)();
                    case 102: // try_end0
                        var0 = 42;
                        var0 = var0 === var1;
                        return var0;
                    case 111: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = false;
                        return var0;
                }
            };
            var0 = undefined;
            var5 = var5.bind(var0)();
            var3.TYPED_ARRAY_SUPPORT = var5;
            var5 = var3.TYPED_ARRAY_SUPPORT;
            if (var5) {
                _fun6300_ip = 487;
                continue _fun6300
            }
        case 470:
            var7 = var1.console;
            var9 = 'undefined';
            var7 = typeof var7;
            var5 = var9 === var7;
        case 487:
            if (var5) {
                _fun6300_ip = 508;
                continue _fun6300
            }
        case 490:
            var7 = var1.console;
            var7 = var7.error;
            var7 = typeof var7;
            var5 = var8 !== var7;
        case 508:
            if (var5) {
                _fun6300_ip = 533;
                continue _fun6300
            }
        case 511:
            var8 = var1.console;
            var7 = var8.error;
            var5 = 'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.';
            var5 = var7.bind(var8)(var5);
        case 533:
            var11 = var1.Object;
            var10 = var11.defineProperty;
            var9 = var3.prototype;
            var8 = {};
            var5 = true;
            var8.enumerable = var5;
            var7 = function() { // Original name: get, environment: var2
                _fun6340: for (var _fun6340_ip = 0;;) switch (_fun6340_ip) {
                    case 0:
                        var0 = this;
                        var2 = _closure1_slot8;
                        var1 = var2.isBuffer;
                        var1 = var1.bind(var2)(var0);
                        if (var1) {
                            _fun6340_ip = 28;
                            continue _fun6340
                        }
                    case 24:
                        var1 = undefined;
                        return var1;
                    case 28:
                        var0 = var0.buffer;
                        return var0;
                }
            };
            var8.get = var7;
            var7 = 'parent';
            var7 = var10.bind(var11)(var9, var7, var8);
            var11 = var1.Object;
            var10 = var11.defineProperty;
            var9 = var3.prototype;
            var8 = {};
            var8.enumerable = var5;
            var7 = function() { // Original name: get, environment: var2
                _fun6341: for (var _fun6341_ip = 0;;) switch (_fun6341_ip) {
                    case 0:
                        var0 = this;
                        var2 = _closure1_slot8;
                        var1 = var2.isBuffer;
                        var1 = var1.bind(var2)(var0);
                        if (var1) {
                            _fun6341_ip = 28;
                            continue _fun6341
                        }
                    case 24:
                        var1 = undefined;
                        return var1;
                    case 28:
                        var0 = var0.byteOffset;
                        return var0;
                }
            };
            var8.get = var7;
            var7 = 'offset';
            var7 = var10.bind(var11)(var9, var7, var8);
            var7 = 8192;
            var3.poolSize = var7;
            var7 = function(arg0, arg1, arg2) { // Environment: var2
                var4 = _closure1_slot9;
                var3 = undefined;
                var2 = arg0;
                var1 = arg1;
                var0 = arg2;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var3.from = var7;
            var10 = var1.Object;
            var9 = var10.setPrototypeOf;
            var8 = var3.prototype;
            var7 = var1.Uint8Array;
            var7 = var7.prototype;
            var7 = var9.bind(var10)(var8, var7);
            var9 = var1.Object;
            var8 = var9.setPrototypeOf;
            var7 = var1.Uint8Array;
            var7 = var8.bind(var9)(var3, var7);
            var7 = function(arg0, arg1, arg2) { // Environment: var2
                _fun6343: for (var _fun6343_ip = 0;;) switch (_fun6343_ip) {
                    case 0:
                        var3 = arg0;
                        var8 = arg1;
                        var7 = arg2;
                        var0 = _closure1_slot10;
                        var2 = undefined;
                        var0 = var0.bind(var2)(var3);
                        var0 = 0;
                        if (!(!(var3 <= var0))) {
                            _fun6343_ip = 103;
                            continue _fun6343
                        }
                    case 29:
                        if (!(var2 === var8)) {
                            _fun6343_ip = 44;
                            continue _fun6343
                        }
                    case 33:
                        var0 = _closure1_slot7;
                        var0 = var0.bind(var2)(var3);
                        _fun6343_ip = 101;
                        continue _fun6343;
                    case 44:
                        var5 = 'string';
                        var4 = typeof var7;
                        if (!(var5 !== var4)) {
                            _fun6343_ip = 77;
                            continue _fun6343
                        }
                    case 55:
                        var4 = _closure1_slot7;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.fill;
                        var4 = var4.bind(var5)(var8);
                        _fun6343_ip = 98;
                        continue _fun6343;
                    case 77:
                        var5 = _closure1_slot7;
                        var6 = var5.bind(var2)(var3);
                        var5 = var6.fill;
                        var4 = var5.bind(var6)(var8, var7);
                    case 98:
                        var0 = var4;
                    case 101:
                        _fun6343_ip = 112;
                        continue _fun6343;
                    case 103:
                        var1 = _closure1_slot7;
                        var0 = var1.bind(var2)(var3);
                    case 112:
                        return var0;
                }
            };
            var3.alloc = var7;
            var7 = function(arg0) { // Environment: var2
                var2 = _closure1_slot11;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var3.allocUnsafe = var7;
            var7 = function(arg0) { // Environment: var2
                var2 = _closure1_slot11;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var3.allocUnsafeSlow = var7;
            var7 = function(arg0) { // Original name: isBuffer, environment: var2
                _fun6346: for (var _fun6346_ip = 0;;) switch (_fun6346_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = null;
                        var0 = var0 != var2;
                        if (!var0) {
                            _fun6346_ip = 24;
                            continue _fun6346
                        }
                    case 12:
                        var3 = var2._isBuffer;
                        var1 = true;
                        var0 = var1 === var3;
                    case 24:
                        if (!var0) {
                            _fun6346_ip = 43;
                            continue _fun6346
                        }
                    case 27:
                        var1 = _closure1_slot8;
                        var1 = var1.prototype;
                        var0 = var2 !== var1;
                    case 43:
                        return var0;
                }
            };
            var3.isBuffer = var7;
            var7 = function(arg0, arg1) { // Original name: compare, environment: var2
                _fun6347: for (var _fun6347_ip = 0;;) switch (_fun6347_ip) {
                    case 0:
                        var9 = arg0;
                        var8 = arg1;
                        var3 = _closure1_slot40;
                        var0 = global;
                        var2 = var0.Uint8Array;
                        var5 = undefined;
                        var2 = var3.bind(var5)(var9, var2);
                        var4 = var9;
                        if (!var2) {
                            _fun6347_ip = 63;
                            continue _fun6347
                        }
                    case 35:
                        var7 = _closure1_slot8;
                        var6 = var7.from;
                        var3 = var9.offset;
                        var2 = var9.byteLength;
                        var4 = var6.bind(var7)(var9, var3, var2);
                    case 63:
                        var3 = _closure1_slot40;
                        var2 = var0.Uint8Array;
                        var2 = var3.bind(var5)(var8, var2);
                        var5 = var8;
                        if (!var2) {
                            _fun6347_ip = 113;
                            continue _fun6347
                        }
                    case 85:
                        var7 = _closure1_slot8;
                        var6 = var7.from;
                        var3 = var8.offset;
                        var2 = var8.byteLength;
                        var5 = var6.bind(var7)(var8, var3, var2);
                    case 113:
                        var3 = _closure1_slot8;
                        var2 = var3.isBuffer;
                        var2 = var2.bind(var3)(var4);
                        if (!var2) {
                            _fun6347_ip = 149;
                            continue _fun6347
                        }
                    case 131:
                        var2 = _closure1_slot8;
                        var1 = var2.isBuffer;
                        var1 = var1.bind(var2)(var5);
                        if (var1) {
                            _fun6347_ip = 183;
                            continue _fun6347
                        }
                    case 149:
                        var3 = var0.TypeError;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var14 = 'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array';
                        var15 = var2;
                        var1 = new var15[var3](var14, var13);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 183:
                        if (!(var4 !== var5)) {
                            _fun6347_ip = 299;
                            continue _fun6347
                        }
                    case 187:
                        var9 = var4.length;
                        var8 = var5.length;
                        var1 = var0.Math;
                        var0 = var1.min;
                        var7 = var0.bind(var1)(var9, var8);
                        var1 = 0;
                        var0 = var1 < var7;
                        var6 = 0;
                        var3 = var9;
                        var2 = var8;
                        if (!var0) {
                            _fun6347_ip = 269;
                            continue _fun6347
                        }
                    case 231:
                        var11 = var4[var6];
                        var10 = var5[var6];
                        var0 = var6;
                        if (!(var11 === var10)) {
                            _fun6347_ip = 261;
                            continue _fun6347
                        }
                    case 246:
                        var6 = var0 + 1;
                        var3 = var9;
                        var2 = var8;
                        if (var6 < var7) {
                            _fun6347_ip = 231;
                            continue _fun6347
                        }
                    case 259:
                        _fun6347_ip = 269;
                        continue _fun6347;
                    case 261:
                        var3 = var4[var0];
                        var2 = var5[var0];
                    case 269:
                        var4 = var3 < var2;
                        var0 = -1;
                        if (var4) {
                            _fun6347_ip = 297;
                            continue _fun6347
                        }
                    case 282:
                        var2 = var2 < var3;
                        var1 = 0;
                        if (!var2) {
                            _fun6347_ip = 294;
                            continue _fun6347
                        }
                    case 291:
                        var1 = 1;
                    case 294:
                        var0 = var1;
                    case 297:
                        return var0;
                    case 299:
                        var0 = 0;
                        return var0;
                }
            };
            var3.compare = var7;
            var7 = function(arg0) { // Original name: isEncoding, environment: var2
                _fun6348: for (var _fun6348_ip = 0;;) switch (_fun6348_ip) {
                    case 0:
                        var0 = global;
                        var2 = var0.String;
                        var1 = undefined;
                        var0 = arg0;
                        var1 = var2.bind(var1)(var0);
                        var0 = var1.toLowerCase;
                        var1 = var0.bind(var1)();
                        var0 = 'hex';
                        if (!(var0 !== var1)) {
                            _fun6348_ip = 134;
                            continue _fun6348
                        }
                    case 36:
                        var0 = 'utf8';
                        if (!(var0 !== var1)) {
                            _fun6348_ip = 134;
                            continue _fun6348
                        }
                    case 46:
                        var0 = 'utf-8';
                        if (!(var0 !== var1)) {
                            _fun6348_ip = 134;
                            continue _fun6348
                        }
                    case 56:
                        var0 = 'ascii';
                        if (!(var0 !== var1)) {
                            _fun6348_ip = 134;
                            continue _fun6348
                        }
                    case 66:
                        var0 = 'latin1';
                        if (!(var0 !== var1)) {
                            _fun6348_ip = 134;
                            continue _fun6348
                        }
                    case 76:
                        var0 = 'binary';
                        if (!(var0 !== var1)) {
                            _fun6348_ip = 134;
                            continue _fun6348
                        }
                    case 84:
                        var0 = 'base64';
                        if (!(var0 !== var1)) {
                            _fun6348_ip = 134;
                            continue _fun6348
                        }
                    case 92:
                        var0 = 'ucs2';
                        if (!(var0 !== var1)) {
                            _fun6348_ip = 134;
                            continue _fun6348
                        }
                    case 100:
                        var0 = 'ucs-2';
                        if (!(var0 !== var1)) {
                            _fun6348_ip = 134;
                            continue _fun6348
                        }
                    case 110:
                        var0 = 'utf16le';
                        if (!(var0 !== var1)) {
                            _fun6348_ip = 134;
                            continue _fun6348
                        }
                    case 120:
                        var0 = 'utf-16le';
                        if (!(var0 !== var1)) {
                            _fun6348_ip = 134;
                            continue _fun6348
                        }
                    case 130:
                        var0 = false;
                        return var0;
                    case 134:
                        var0 = true;
                        return var0;
                }
            };
            var3.isEncoding = var7;
            var7 = function(arg0, arg1) { // Original name: concat, environment: var2
                _fun6349: for (var _fun6349_ip = 0;;) switch (_fun6349_ip) {
                    case 0:
                        var8 = arg0;
                        var3 = arg1;
                        var7 = global;
                        var1 = var7.Array;
                        var0 = var1.isArray;
                        var0 = var0.bind(var1)(var8);
                        if (var0) {
                            _fun6349_ip = 61;
                            continue _fun6349
                        }
                    case 27:
                        var2 = var7.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var13 = '"list" argument must be an Array of Buffers';
                        var14 = var1;
                        var0 = new var14[var2](var13, var12);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 61:
                        var0 = var8.length;
                        var2 = 0;
                        if (!(var2 !== var0)) {
                            _fun6349_ip = 291;
                            continue _fun6349
                        }
                    case 75:
                        var6 = undefined;
                        if (!(var6 === var3)) {
                            _fun6349_ip = 127;
                            continue _fun6349
                        }
                    case 81:
                        var0 = var8.length;
                        var0 = var2 < var0;
                        var4 = 0;
                        var1 = 0;
                        var3 = 0;
                        if (!var0) {
                            _fun6349_ip = 127;
                            continue _fun6349
                        }
                    case 99:
                        var0 = var8[var1];
                        var0 = var0.length;
                        var4 = var4 + var0;
                        var1 = var1 + 1;
                        var0 = var8.length;
                        var3 = var4;
                        if (var1 < var0) {
                            _fun6349_ip = 99;
                            continue _fun6349
                        }
                    case 127:
                        var1 = _closure1_slot8;
                        var0 = var1.allocUnsafe;
                        var0 = var0.bind(var1)(var3);
                        var1 = var8.length;
                        var1 = var2 < var1;
                        var4 = 0;
                        var3 = 0;
                        if (!var1) {
                            _fun6349_ip = 289;
                            continue _fun6349
                        }
                    case 164:
                        var11 = var8[var4];
                        var9 = _closure1_slot40;
                        var1 = var7.Uint8Array;
                        var9 = var9.bind(var6)(var11, var1);
                        var1 = var11;
                        if (!var9) {
                            _fun6349_ip = 204;
                            continue _fun6349
                        }
                    case 190:
                        var10 = _closure1_slot8;
                        var9 = var10.from;
                        var1 = var9.bind(var10)(var11);
                    case 204:
                        var10 = _closure1_slot8;
                        var9 = var10.isBuffer;
                        var9 = var9.bind(var10)(var1);
                        if (var9) {
                            _fun6349_ip = 256;
                            continue _fun6349
                        }
                    case 222:
                        var11 = var7.TypeError;
                        var9 = var11.prototype;
                        var10 = Object.create(var9, {
                            constructor: {
                                value: var11
                            }
                        });
                        var13 = '"list" argument must be an Array of Buffers';
                        var14 = var10;
                        var9 = new var14[var11](var13, var12);
                        var9 = var9 instanceof Object ? var9 : var10;
                        throw var9;
                    case 256:
                        var9 = var1.copy;
                        var9 = var9.bind(var1)(var0, var3);
                        var1 = var1.length;
                        var3 = var3 + var1;
                        var4 = var4 + 1;
                        var1 = var8.length;
                        if (var4 < var1) {
                            _fun6349_ip = 164;
                            continue _fun6349
                        }
                    case 289:
                        return var0;
                    case 291:
                        var1 = _closure1_slot8;
                        var0 = var1.alloc;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var3.concat = var7;
            var3.byteLength = var4;
            var4 = var3.prototype;
            var4._isBuffer = var5;
            var5 = var3.prototype;
            var4 = function() { // Original name: swap16, environment: var2
                _fun6350: for (var _fun6350_ip = 0;;) switch (_fun6350_ip) {
                    case 0:
                        var0 = this;
                        var6 = var0.length;
                        var5 = 2;
                        var1 = var6 % var5;
                        var4 = 0;
                        if (!(var1 === var4)) {
                            _fun6350_ip = 63;
                            continue _fun6350
                        }
                    case 21:
                        var7 = var4 < var6;
                        var2 = undefined;
                        var1 = 1;
                        var4 = 0;
                        if (!var7) {
                            _fun6350_ip = 61;
                            continue _fun6350
                        }
                    case 38:
                        var8 = _closure1_slot17;
                        var7 = var4 + var1;
                        var7 = var8.bind(var2)(var0, var4, var7);
                        var4 = var4 + var5;
                        if (var4 < var6) {
                            _fun6350_ip = 38;
                            continue _fun6350
                        }
                    case 61:
                        return var0;
                    case 63:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var11 = 'Buffer size must be a multiple of 16-bits';
                        var12 = var1;
                        var0 = new var12[var2](var11, var10);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var5.swap16 = var4;
            var5 = var3.prototype;
            var4 = function() { // Original name: swap32, environment: var2
                _fun6351: for (var _fun6351_ip = 0;;) switch (_fun6351_ip) {
                    case 0:
                        var0 = this;
                        var8 = var0.length;
                        var7 = 4;
                        var1 = var8 % var7;
                        var6 = 0;
                        if (!(var1 === var6)) {
                            _fun6351_ip = 84;
                            continue _fun6351
                        }
                    case 21:
                        var9 = var6 < var8;
                        var4 = undefined;
                        var3 = 3;
                        var2 = 1;
                        var1 = 2;
                        var6 = 0;
                        if (!var9) {
                            _fun6351_ip = 82;
                            continue _fun6351
                        }
                    case 44:
                        var11 = _closure1_slot17;
                        var9 = var6 + var3;
                        var9 = var11.bind(var4)(var0, var6, var9);
                        var10 = var6 + var2;
                        var9 = var6 + var1;
                        var9 = var11.bind(var4)(var0, var10, var9);
                        var6 = var6 + var7;
                        if (var6 < var8) {
                            _fun6351_ip = 44;
                            continue _fun6351
                        }
                    case 82:
                        return var0;
                    case 84:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var14 = 'Buffer size must be a multiple of 32-bits';
                        var15 = var1;
                        var0 = new var15[var2](var14, var13);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var5.swap32 = var4;
            var5 = var3.prototype;
            var4 = function() { // Original name: swap64, environment: var2
                _fun6352: for (var _fun6352_ip = 0;;) switch (_fun6352_ip) {
                    case 0:
                        var0 = this;
                        var12 = var0.length;
                        var11 = 8;
                        var1 = var12 % var11;
                        var10 = 0;
                        if (!(var1 === var10)) {
                            _fun6352_ip = 126;
                            continue _fun6352
                        }
                    case 21:
                        var13 = var10 < var12;
                        var8 = undefined;
                        var7 = 7;
                        var6 = 1;
                        var5 = 6;
                        var4 = 2;
                        var3 = 5;
                        var2 = 3;
                        var1 = 4;
                        var10 = 0;
                        if (!var13) {
                            _fun6352_ip = 124;
                            continue _fun6352
                        }
                    case 56:
                        var15 = _closure1_slot17;
                        var13 = var10 + var7;
                        var13 = var15.bind(var8)(var0, var10, var13);
                        var14 = var10 + var6;
                        var13 = var10 + var5;
                        var13 = var15.bind(var8)(var0, var14, var13);
                        var14 = var10 + var4;
                        var13 = var10 + var3;
                        var13 = var15.bind(var8)(var0, var14, var13);
                        var14 = var10 + var2;
                        var13 = var10 + var1;
                        var13 = var15.bind(var8)(var0, var14, var13);
                        var10 = var10 + var11;
                        if (var10 < var12) {
                            _fun6352_ip = 56;
                            continue _fun6352
                        }
                    case 124:
                        return var0;
                    case 126:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var18 = 'Buffer size must be a multiple of 64-bits';
                        var19 = var1;
                        var0 = new var19[var2](var18, var17);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var5.swap64 = var4;
            var5 = var3.prototype;
            var4 = function() { // Original name: toString, environment: var2
                _fun6353: for (var _fun6353_ip = 0;;) switch (_fun6353_ip) {
                    case 0:
                        var6 = this;
                        var5 = undefined;
                        var1 = undefined;
                        var4 = var6.length;
                        var0 = '';
                        var3 = 0;
                        if (!(var3 !== var4)) {
                            _fun6353_ip = 68;
                            continue _fun6353
                        }
                    case 22:
                        var2 = arguments.length;
                        if (!(var3 !== var2)) {
                            _fun6353_ip = 51;
                            continue _fun6353
                        }
                    case 29:
                        var7 = _closure1_slot16;
                        var2 = var7.apply;
                        var1 = arguments;
                        var1 = var2.bind(var7)(var6, var1);
                        _fun6353_ip = 65;
                        continue _fun6353;
                    case 51:
                        var2 = _closure1_slot27;
                        var1 = var2.bind(var5)(var6, var3, var4);
                    case 65:
                        var0 = var1;
                    case 68:
                        return var0;
                }
            };
            var5.toString = var4;
            var5 = var3.prototype;
            var4 = var3.prototype;
            var4 = var4.toString;
            var5.toLocaleString = var4;
            var5 = var3.prototype;
            var4 = function(arg0) { // Original name: equals, environment: var2
                _fun6354: for (var _fun6354_ip = 0;;) switch (_fun6354_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = this;
                        var2 = _closure1_slot8;
                        var0 = var2.isBuffer;
                        var0 = var0.bind(var2)(var4);
                        if (var0) {
                            _fun6354_ip = 63;
                            continue _fun6354
                        }
                    case 27:
                        var0 = global;
                        var5 = var0.TypeError;
                        var0 = var5.prototype;
                        var2 = Object.create(var0, {
                            constructor: {
                                value: var5
                            }
                        });
                        var7 = 'Argument must be a Buffer';
                        var8 = var2;
                        var0 = new var8[var5](var7, var6);
                        var0 = var0 instanceof Object ? var0 : var2;
                        throw var0;
                    case 63:
                        var0 = var3 === var4;
                        if (var0) {
                            _fun6354_ip = 92;
                            continue _fun6354
                        }
                    case 70:
                        var2 = _closure1_slot8;
                        var1 = var2.compare;
                        var2 = var1.bind(var2)(var3, var4);
                        var1 = 0;
                        var0 = var1 === var2;
                    case 92:
                        return var0;
                }
            };
            var5.equals = var4;
            var5 = var3.prototype;
            var4 = function() { // Original name: inspect, environment: var2
                _fun6355: for (var _fun6355_ip = 0;;) switch (_fun6355_ip) {
                    case 0:
                        var0 = this;
                        var1 = _closure1_slot1;
                        var3 = var1.INSPECT_MAX_BYTES;
                        var4 = var0.toString;
                        var2 = 'hex';
                        var1 = 0;
                        var5 = var4.bind(var0)(var2, var1, var3);
                        var4 = var5.replace;
                        var2 = /(.{2})/g;
                        var1 = '$1 ';
                        var2 = var4.bind(var5)(var2, var1);
                        var1 = var2.trim;
                        var2 = var1.bind(var2)();
                        var0 = var0.length;
                        var1 = var2;
                        if (!(var0 > var3)) {
                            _fun6355_ip = 97;
                            continue _fun6355
                        }
                    case 87:
                        var0 = ' ... ';
                        var1 = var2 + var0;
                    case 97:
                        var0 = '<Buffer ';
                        var1 = var0 + var1;
                        var0 = '>';
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var5.inspect = var4;
            if (!var6) {
                _fun6300_ip = 934;
                continue _fun6300
            }
        case 914:
            var5 = var3.prototype;
            var4 = var3.prototype;
            var4 = var4.inspect;
            var5[var6] = var4;
        case 934:
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: compare, environment: var2
                _fun6356: for (var _fun6356_ip = 0;;) switch (_fun6356_ip) {
                    case 0:
                        var13 = arg0;
                        var2 = arg1;
                        var3 = arg2;
                        var4 = arg3;
                        var5 = arg4;
                        var11 = this;
                        var8 = _closure1_slot40;
                        var0 = global;
                        var6 = var0.Uint8Array;
                        var1 = undefined;
                        var8 = var8.bind(var1)(var13, var6);
                        var6 = var13;
                        if (!var8) {
                            _fun6356_ip = 75;
                            continue _fun6356
                        }
                    case 47:
                        var12 = _closure1_slot8;
                        var10 = var12.from;
                        var9 = var13.offset;
                        var8 = var13.byteLength;
                        var6 = var10.bind(var12)(var13, var9, var8);
                    case 75:
                        var8 = _closure1_slot8;
                        var7 = var8.isBuffer;
                        var7 = var7.bind(var8)(var6);
                        if (var7) {
                            _fun6356_ip = 134;
                            continue _fun6356
                        }
                    case 93:
                        var9 = var0.TypeError;
                        var7 = var9.prototype;
                        var8 = Object.create(var7, {
                            constructor: {
                                value: var9
                            }
                        });
                        var10 = 'The "target" argument must be one of type Buffer or Uint8Array. Received type ';
                        var7 = typeof var6;
                        var16 = var10 + var7;
                        var17 = var8;
                        var7 = new var17[var9](var16, var15);
                        var7 = var7 instanceof Object ? var7 : var8;
                        throw var7;
                    case 134:
                        if (!(var1 === var2)) {
                            _fun6356_ip = 140;
                            continue _fun6356
                        }
                    case 138:
                        var2 = 0;
                    case 140:
                        if (!(var1 === var3)) {
                            _fun6356_ip = 157;
                            continue _fun6356
                        }
                    case 144:
                        var7 = 0;
                        if (!var6) {
                            _fun6356_ip = 154;
                            continue _fun6356
                        }
                    case 149:
                        var7 = var6.length;
                    case 154:
                        var3 = var7;
                    case 157:
                        if (!(var1 === var4)) {
                            _fun6356_ip = 163;
                            continue _fun6356
                        }
                    case 161:
                        var4 = 0;
                    case 163:
                        if (!(var1 === var5)) {
                            _fun6356_ip = 172;
                            continue _fun6356
                        }
                    case 167:
                        var5 = var11.length;
                    case 172:
                        var1 = 0;
                        if (!(!(var2 < var1))) {
                            _fun6356_ip = 407;
                            continue _fun6356
                        }
                    case 181:
                        var7 = var6.length;
                        if (!(!(var3 > var7))) {
                            _fun6356_ip = 407;
                            continue _fun6356
                        }
                    case 193:
                        if (!(!(var4 < var1))) {
                            _fun6356_ip = 407;
                            continue _fun6356
                        }
                    case 200:
                        var7 = var11.length;
                        if (!(!(var5 > var7))) {
                            _fun6356_ip = 407;
                            continue _fun6356
                        }
                    case 212:
                        if (!(var4 >= var5)) {
                            _fun6356_ip = 223;
                            continue _fun6356
                        }
                    case 216:
                        if (!(!(var2 >= var3))) {
                            _fun6356_ip = 405;
                            continue _fun6356
                        }
                    case 223:
                        if (!(!(var4 >= var5))) {
                            _fun6356_ip = 397;
                            continue _fun6356
                        }
                    case 230:
                        if (!(!(var2 >= var3))) {
                            _fun6356_ip = 392;
                            continue _fun6356
                        }
                    case 237:
                        if (!(var11 !== var6)) {
                            _fun6356_ip = 390;
                            continue _fun6356
                        }
                    case 244:
                        var7 = var5 >>> var1;
                        var5 = var4 >>> var1;
                        var10 = var7 - var5;
                        var4 = var3 >>> var1;
                        var3 = var2 >>> var1;
                        var9 = var4 - var3;
                        var8 = var0.Math;
                        var2 = var8.min;
                        var8 = var2.bind(var8)(var10, var9);
                        var2 = var11.slice;
                        var5 = var2.bind(var11)(var5, var7);
                        var2 = var6.slice;
                        var6 = var2.bind(var6)(var3, var4);
                        var2 = var1 < var8;
                        var7 = 0;
                        var4 = var10;
                        var3 = var9;
                        if (!var2) {
                            _fun6356_ip = 360;
                            continue _fun6356
                        }
                    case 322:
                        var12 = var5[var7];
                        var11 = var6[var7];
                        var2 = var7;
                        if (!(var12 === var11)) {
                            _fun6356_ip = 352;
                            continue _fun6356
                        }
                    case 337:
                        var7 = var2 + 1;
                        var4 = var10;
                        var3 = var9;
                        if (var7 < var8) {
                            _fun6356_ip = 322;
                            continue _fun6356
                        }
                    case 350:
                        _fun6356_ip = 360;
                        continue _fun6356;
                    case 352:
                        var4 = var5[var2];
                        var3 = var6[var2];
                    case 360:
                        var5 = var4 < var3;
                        var2 = -1;
                        if (var5) {
                            _fun6356_ip = 388;
                            continue _fun6356
                        }
                    case 373:
                        var4 = var3 < var4;
                        var3 = 0;
                        if (!var4) {
                            _fun6356_ip = 385;
                            continue _fun6356
                        }
                    case 382:
                        var3 = 1;
                    case 385:
                        var2 = var3;
                    case 388:
                        return var2;
                    case 390:
                        return var1;
                    case 392:
                        var2 = 1;
                        return var2;
                    case 397:
                        var2 = -1;
                        return var2;
                    case 405:
                        return var1;
                    case 407:
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var16 = 'out of range index';
                        var17 = var1;
                        var0 = new var17[var2](var16, var15);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var5.compare = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: includes, environment: var2
                var4 = this;
                var3 = var4.indexOf;
                var2 = arg0;
                var1 = arg1;
                var0 = arg2;
                var1 = var3.bind(var4)(var2, var1, var0);
                var0 = -1;
                var0 = var0 !== var1;
                return var0;
            };
            var5.includes = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: indexOf, environment: var2
                var6 = _closure1_slot18;
                var12 = undefined;
                var11 = this;
                var10 = arg0;
                var9 = arg1;
                var8 = arg2;
                var7 = true;
                var0 = var12[var6](var11, var10, var9, var8, var7, var6);
                return var0;
            };
            var5.indexOf = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: lastIndexOf, environment: var2
                var6 = _closure1_slot18;
                var12 = undefined;
                var11 = this;
                var10 = arg0;
                var9 = arg1;
                var8 = arg2;
                var7 = false;
                var0 = var12[var6](var11, var10, var9, var8, var7, var6);
                return var0;
            };
            var5.lastIndexOf = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2, arg3) { // Original name: write, environment: var2
                _fun6360: for (var _fun6360_ip = 0;;) switch (_fun6360_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = arg1;
                        var9 = arg2;
                        var6 = arg3;
                        var4 = this;
                        var3 = undefined;
                        if (!(var3 !== var0)) {
                            _fun6360_ip = 160;
                            continue _fun6360
                        }
                    case 24:
                        if (!(var3 === var9)) {
                            _fun6360_ip = 39;
                            continue _fun6360
                        }
                    case 28:
                        var2 = 'string';
                        var1 = typeof var0;
                        if (!(var2 !== var1)) {
                            _fun6360_ip = 148;
                            continue _fun6360
                        }
                    case 39:
                        var1 = global;
                        var2 = var1.isFinite;
                        var2 = var2.bind(var3)(var0);
                        if (var2) {
                            _fun6360_ip = 89;
                            continue _fun6360
                        }
                    case 55:
                        var8 = var1.Error;
                        var2 = var8.prototype;
                        var7 = Object.create(var2, {
                            constructor: {
                                value: var8
                            }
                        });
                        var25 = 'Buffer.write(string, encoding, offset[, length]) is no longer supported';
                        var26 = var7;
                        var2 = new var26[var8](var25, var24);
                        var2 = var2 instanceof Object ? var2 : var7;
                        throw var2;
                    case 89:
                        var7 = 0;
                        var8 = var0 >>> var7;
                        var1 = var1.isFinite;
                        var10 = var1.bind(var3)(var9);
                        var2 = var8;
                        var1 = undefined;
                        var19 = var9;
                        if (!var10) {
                            _fun6360_ip = 173;
                            continue _fun6360
                        }
                    case 117:
                        var7 = var9 >>> var7;
                        var2 = var8;
                        var1 = var7;
                        var19 = var6;
                        if (!(var3 === var19)) {
                            _fun6360_ip = 173;
                            continue _fun6360
                        }
                    case 134:
                        var19 = 'utf8';
                        var2 = var8;
                        var1 = var7;
                        _fun6360_ip = 173;
                        continue _fun6360;
                    case 148:
                        var1 = var4.length;
                        var2 = 0;
                        var19 = var0;
                        _fun6360_ip = 173;
                        continue _fun6360;
                    case 160:
                        var1 = var4.length;
                        var2 = 0;
                        var19 = 'utf8';
                    case 173:
                        var0 = var4.length;
                        var0 = var0 - var2;
                        var6 = var3 === var1;
                        if (var6) {
                            _fun6360_ip = 193;
                            continue _fun6360
                        }
                    case 189:
                        var6 = var1 > var0;
                    case 193:
                        if (!var6) {
                            _fun6360_ip = 199;
                            continue _fun6360
                        }
                    case 196:
                        var1 = var0;
                    case 199:
                        var6 = var5.length;
                        var0 = 0;
                        if (!(var6 > var0)) {
                            _fun6360_ip = 224;
                            continue _fun6360
                        }
                    case 210:
                        if (!(!(var1 < var0))) {
                            _fun6360_ip = 592;
                            continue _fun6360
                        }
                    case 217:
                        if (!(!(var2 < var0))) {
                            _fun6360_ip = 592;
                            continue _fun6360
                        }
                    case 224:
                        var0 = var4.length;
                        if (!(!(var2 > var0))) {
                            _fun6360_ip = 592;
                            continue _fun6360
                        }
                    case 236:
                        if (var19) {
                            _fun6360_ip = 245;
                            continue _fun6360
                        }
                    case 239:
                        var19 = 'utf8';
                    case 245:
                        var16 = 'utf-16le';
                        var15 = 'utf16le';
                        var14 = 'ucs-2';
                        var13 = 'ucs2';
                        var12 = 'base64';
                        var11 = 'binary';
                        var10 = 'latin1';
                        var9 = 'ascii';
                        var8 = 'utf-8';
                        var7 = 'utf8';
                        var0 = 'hex';
                        var18 = false;
                    case 305:
                        var6 = var19;
                        if (!(var0 !== var6)) {
                            _fun6360_ip = 565;
                            continue _fun6360
                        }
                    case 315:
                        if (!(var7 !== var6)) {
                            _fun6360_ip = 538;
                            continue _fun6360
                        }
                    case 322:
                        if (!(var8 !== var6)) {
                            _fun6360_ip = 538;
                            continue _fun6360
                        }
                    case 329:
                        if (!(var9 !== var6)) {
                            _fun6360_ip = 511;
                            continue _fun6360
                        }
                    case 336:
                        if (!(var10 !== var6)) {
                            _fun6360_ip = 484;
                            continue _fun6360
                        }
                    case 343:
                        if (!(var11 !== var6)) {
                            _fun6360_ip = 484;
                            continue _fun6360
                        }
                    case 350:
                        if (!(var12 !== var6)) {
                            _fun6360_ip = 457;
                            continue _fun6360
                        }
                    case 354:
                        if (!(var13 !== var6)) {
                            _fun6360_ip = 430;
                            continue _fun6360
                        }
                    case 358:
                        if (!(var14 !== var6)) {
                            _fun6360_ip = 430;
                            continue _fun6360
                        }
                    case 362:
                        if (!(var15 !== var6)) {
                            _fun6360_ip = 430;
                            continue _fun6360
                        }
                    case 366:
                        if (!(var16 !== var6)) {
                            _fun6360_ip = 430;
                            continue _fun6360
                        }
                    case 370:
                        if (var18) {
                            _fun6360_ip = 390;
                            continue _fun6360
                        }
                    case 373:
                        var21 = '' + var6;
                        var20 = var21.toLowerCase;
                        var19 = var20.bind(var21)();
                        var18 = true;
                        _fun6360_ip = 305;
                        continue _fun6360;
                    case 390:
                        var0 = global;
                        var7 = var0.TypeError;
                        var0 = 'Unknown encoding: ';
                        var25 = var0 + var6;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var26 = var6;
                        var0 = new var26[var7](var25, var24);
                        var0 = var0 instanceof Object ? var0 : var6;
                        throw var0;
                    case 430:
                        var0 = _closure1_slot25;
                        var26 = undefined;
                        var25 = var4;
                        var24 = var5;
                        var23 = var2;
                        var22 = var1;
                        var0 = var26[var0](var25, var24, var23, var22, var21);
                        return var0;
                    case 457:
                        var0 = _closure1_slot24;
                        var26 = undefined;
                        var25 = var4;
                        var24 = var5;
                        var23 = var2;
                        var22 = var1;
                        var0 = var26[var0](var25, var24, var23, var22, var21);
                        return var0;
                    case 484:
                        var0 = _closure1_slot23;
                        var26 = undefined;
                        var25 = var4;
                        var24 = var5;
                        var23 = var2;
                        var22 = var1;
                        var0 = var26[var0](var25, var24, var23, var22, var21);
                        return var0;
                    case 511:
                        var0 = _closure1_slot22;
                        var26 = undefined;
                        var25 = var4;
                        var24 = var5;
                        var23 = var2;
                        var22 = var1;
                        var0 = var26[var0](var25, var24, var23, var22, var21);
                        return var0;
                    case 538:
                        var0 = _closure1_slot21;
                        var26 = undefined;
                        var25 = var4;
                        var24 = var5;
                        var23 = var2;
                        var22 = var1;
                        var0 = var26[var0](var25, var24, var23, var22, var21);
                        return var0;
                    case 565:
                        var0 = _closure1_slot20;
                        var26 = undefined;
                        var25 = var4;
                        var24 = var5;
                        var23 = var2;
                        var22 = var1;
                        var0 = var26[var0](var25, var24, var23, var22, var21);
                        return var0;
                    case 592:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var25 = 'Attempt to write outside buffer bounds';
                        var26 = var1;
                        var0 = new var26[var2](var25, var24);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var5.write = var4;
            var5 = var3.prototype;
            var4 = function() { // Original name: toJSON, environment: var2
                _fun6361: for (var _fun6361_ip = 0;;) switch (_fun6361_ip) {
                    case 0:
                        var1 = this;
                        var0 = {};
                        var2 = 'Buffer';
                        var0.type = var2;
                        var2 = global;
                        var2 = var2.Array;
                        var2 = var2.prototype;
                        var4 = var2.slice;
                        var3 = var4.call;
                        var2 = var1._arr;
                        if (var2) {
                            _fun6361_ip = 48;
                            continue _fun6361
                        }
                    case 45:
                        var2 = var1;
                    case 48:
                        var1 = 0;
                        var1 = var3.bind(var4)(var2, var1);
                        var0.data = var1;
                        return var0;
                }
            };
            var5.toJSON = var4;
            var4 = 4096;
            var _closure1_slot4 = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: slice, environment: var2
                _fun6362: for (var _fun6362_ip = 0;;) switch (_fun6362_ip) {
                    case 0:
                        var1 = arg1;
                        var3 = this;
                        var5 = var3.length;
                        var0 = arg0;
                        var0 = ~var0;
                        var4 = ~var0;
                        var0 = 0;
                        if (!(!(var4 < var0))) {
                            _fun6362_ip = 38;
                            continue _fun6362
                        }
                    case 26:
                        var2 = var4;
                        if (!(var2 > var5)) {
                            _fun6362_ip = 48;
                            continue _fun6362
                        }
                    case 33:
                        var2 = var5;
                        _fun6362_ip = 48;
                        continue _fun6362;
                    case 38:
                        var2 = var4 + var5;
                        if (!(var2 < var0)) {
                            _fun6362_ip = 48;
                            continue _fun6362
                        }
                    case 46:
                        var2 = 0;
                    case 48:
                        var6 = undefined;
                        var4 = var5;
                        if (!(var6 !== var1)) {
                            _fun6362_ip = 63;
                            continue _fun6362
                        }
                    case 57:
                        var1 = ~var1;
                        var4 = ~var1;
                    case 63:
                        if (!(!(var4 < var0))) {
                            _fun6362_ip = 79;
                            continue _fun6362
                        }
                    case 67:
                        var1 = var4;
                        if (!(var1 > var5)) {
                            _fun6362_ip = 89;
                            continue _fun6362
                        }
                    case 74:
                        var1 = var5;
                        _fun6362_ip = 89;
                        continue _fun6362;
                    case 79:
                        var1 = var4 + var5;
                        if (!(var1 < var0)) {
                            _fun6362_ip = 89;
                            continue _fun6362
                        }
                    case 87:
                        var1 = 0;
                    case 89:
                        if (!(var1 < var2)) {
                            _fun6362_ip = 96;
                            continue _fun6362
                        }
                    case 93:
                        var1 = var2;
                    case 96:
                        var0 = var3.subarray;
                        var0 = var0.bind(var3)(var2, var1);
                        var1 = global;
                        var3 = var1.Object;
                        var2 = var3.setPrototypeOf;
                        var1 = _closure1_slot8;
                        var1 = var1.prototype;
                        var1 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
            var5.slice = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: readUIntLE, environment: var2
                _fun6363: for (var _fun6363_ip = 0;;) switch (_fun6363_ip) {
                    case 0:
                        var7 = this;
                        var0 = arg0;
                        var1 = 0;
                        var6 = var0 >>> var1;
                        var0 = arg1;
                        var5 = var0 >>> var1;
                        var0 = arg2;
                        if (var0) {
                            _fun6363_ip = 46;
                            continue _fun6363
                        }
                    case 25:
                        var2 = _closure1_slot32;
                        var1 = var7.length;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var6, var5, var1);
                    case 46:
                        var2 = var7[var6];
                        var4 = 256;
                        var3 = 1;
                        var1 = var4;
                        var0 = var2;
                        if (!(var3 < var5)) {
                            _fun6363_ip = 108;
                            continue _fun6363
                        }
                    case 69:
                        var8 = var6 + var3;
                        var8 = var7[var8];
                        var8 = var8 * var1;
                        var8 = var2 + var8;
                        var3 = var3 + 1;
                        var0 = var8;
                        if (!(var3 < var5)) {
                            _fun6363_ip = 108;
                            continue _fun6363
                        }
                    case 95:
                        var1 = var1 * var4;
                        var2 = var8;
                        var0 = var2;
                        if (var1) {
                            _fun6363_ip = 69;
                            continue _fun6363
                        }
                    case 108:
                        return var0;
                }
            };
            var5.readUIntLE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: readUIntBE, environment: var2
                _fun6364: for (var _fun6364_ip = 0;;) switch (_fun6364_ip) {
                    case 0:
                        var7 = this;
                        var0 = arg0;
                        var6 = 0;
                        var5 = var0 >>> var6;
                        var0 = arg1;
                        var0 = var0 >>> var6;
                        var1 = arg2;
                        if (var1) {
                            _fun6364_ip = 46;
                            continue _fun6364
                        }
                    case 25:
                        var3 = _closure1_slot32;
                        var2 = var7.length;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var5, var0, var2);
                    case 46:
                        var4 = var0 - 1;
                        var0 = var5 + var4;
                        var2 = var7[var0];
                        var3 = 256;
                        var1 = var3;
                        var0 = var2;
                        if (!(var4 > var6)) {
                            _fun6364_ip = 112;
                            continue _fun6364
                        }
                    case 73:
                        var4 = var4 - 1;
                        var8 = var5 + var4;
                        var8 = var7[var8];
                        var8 = var8 * var1;
                        var8 = var2 + var8;
                        var0 = var8;
                        if (!(var4 > var6)) {
                            _fun6364_ip = 112;
                            continue _fun6364
                        }
                    case 99:
                        var1 = var1 * var3;
                        var2 = var8;
                        var0 = var2;
                        if (var1) {
                            _fun6364_ip = 73;
                            continue _fun6364
                        }
                    case 112:
                        return var0;
                }
            };
            var5.readUIntBE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: readUInt8, environment: var2
                _fun6365: for (var _fun6365_ip = 0;;) switch (_fun6365_ip) {
                    case 0:
                        var1 = this;
                        var2 = arg0;
                        var0 = 0;
                        var0 = var2 >>> var0;
                        var2 = arg1;
                        if (var2) {
                            _fun6365_ip = 42;
                            continue _fun6365
                        }
                    case 18:
                        var5 = _closure1_slot32;
                        var4 = var1.length;
                        var3 = undefined;
                        var2 = 1;
                        var2 = var5.bind(var3)(var0, var2, var4);
                    case 42:
                        var0 = var1[var0];
                        return var0;
                }
            };
            var5.readUInt8 = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: readUInt16LE, environment: var2
                _fun6366: for (var _fun6366_ip = 0;;) switch (_fun6366_ip) {
                    case 0:
                        var2 = this;
                        var1 = arg0;
                        var0 = 0;
                        var3 = var1 >>> var0;
                        var0 = arg1;
                        if (var0) {
                            _fun6366_ip = 42;
                            continue _fun6366
                        }
                    case 18:
                        var5 = _closure1_slot32;
                        var4 = var2.length;
                        var1 = undefined;
                        var0 = 2;
                        var0 = var5.bind(var1)(var3, var0, var4);
                    case 42:
                        var1 = var2[var3];
                        var0 = 1;
                        var0 = var3 + var0;
                        var2 = var2[var0];
                        var0 = 8;
                        var0 = var2 << var0;
                        var0 = var1 | var0;
                        return var0;
                }
            };
            var5.readUInt16LE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: readUInt16BE, environment: var2
                _fun6367: for (var _fun6367_ip = 0;;) switch (_fun6367_ip) {
                    case 0:
                        var2 = this;
                        var1 = arg0;
                        var0 = 0;
                        var3 = var1 >>> var0;
                        var0 = arg1;
                        if (var0) {
                            _fun6367_ip = 42;
                            continue _fun6367
                        }
                    case 18:
                        var5 = _closure1_slot32;
                        var4 = var2.length;
                        var1 = undefined;
                        var0 = 2;
                        var0 = var5.bind(var1)(var3, var0, var4);
                    case 42:
                        var1 = var2[var3];
                        var0 = 8;
                        var1 = var1 << var0;
                        var0 = 1;
                        var0 = var3 + var0;
                        var0 = var2[var0];
                        var0 = var1 | var0;
                        return var0;
                }
            };
            var5.readUInt16BE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: readUInt32LE, environment: var2
                _fun6368: for (var _fun6368_ip = 0;;) switch (_fun6368_ip) {
                    case 0:
                        var3 = this;
                        var1 = arg0;
                        var0 = 0;
                        var4 = var1 >>> var0;
                        var0 = arg1;
                        if (var0) {
                            _fun6368_ip = 42;
                            continue _fun6368
                        }
                    case 18:
                        var5 = _closure1_slot32;
                        var2 = var3.length;
                        var1 = undefined;
                        var0 = 4;
                        var0 = var5.bind(var1)(var4, var0, var2);
                    case 42:
                        var1 = var3[var4];
                        var0 = 1;
                        var0 = var4 + var0;
                        var2 = var3[var0];
                        var0 = 8;
                        var0 = var2 << var0;
                        var2 = var1 | var0;
                        var0 = 2;
                        var0 = var4 + var0;
                        var1 = var3[var0];
                        var0 = 16;
                        var0 = var1 << var0;
                        var1 = 3;
                        var1 = var4 + var1;
                        var3 = var3[var1];
                        var1 = 16777216;
                        var1 = var1 * var3;
                        var0 = var2 | var0;
                        var0 = var0 + var1;
                        return var0;
                }
            };
            var5.readUInt32LE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: readUInt32BE, environment: var2
                _fun6369: for (var _fun6369_ip = 0;;) switch (_fun6369_ip) {
                    case 0:
                        var4 = this;
                        var1 = arg0;
                        var0 = 0;
                        var5 = var1 >>> var0;
                        var0 = arg1;
                        if (var0) {
                            _fun6369_ip = 42;
                            continue _fun6369
                        }
                    case 18:
                        var3 = _closure1_slot32;
                        var2 = var4.length;
                        var1 = undefined;
                        var0 = 4;
                        var0 = var3.bind(var1)(var5, var0, var2);
                    case 42:
                        var1 = var4[var5];
                        var0 = 16777216;
                        var1 = var0 * var1;
                        var0 = 1;
                        var0 = var5 + var0;
                        var2 = var4[var0];
                        var0 = 16;
                        var3 = var2 << var0;
                        var0 = 2;
                        var0 = var5 + var0;
                        var2 = var4[var0];
                        var0 = 8;
                        var0 = var2 << var0;
                        var2 = 3;
                        var2 = var5 + var2;
                        var2 = var4[var2];
                        var0 = var3 | var0;
                        var0 = var0 | var2;
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var5.readUInt32BE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: readIntLE, environment: var2
                _fun6370: for (var _fun6370_ip = 0;;) switch (_fun6370_ip) {
                    case 0:
                        var8 = this;
                        var0 = arg0;
                        var1 = 0;
                        var7 = var0 >>> var1;
                        var0 = arg1;
                        var6 = var0 >>> var1;
                        var0 = arg2;
                        if (var0) {
                            _fun6370_ip = 46;
                            continue _fun6370
                        }
                    case 25:
                        var2 = _closure1_slot32;
                        var1 = var8.length;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var7, var6, var1);
                    case 46:
                        var4 = var8[var7];
                        var5 = 256;
                        var0 = 1;
                        var3 = var5;
                        var2 = var4;
                        var1 = var0;
                        if (!(var1 < var6)) {
                            _fun6370_ip = 117;
                            continue _fun6370
                        }
                    case 72:
                        var9 = var7 + var0;
                        var9 = var8[var9];
                        var9 = var9 * var3;
                        var10 = var4 + var9;
                        var0 = var0 + 1;
                        var2 = var10;
                        var1 = var3;
                        if (!(var0 < var6)) {
                            _fun6370_ip = 117;
                            continue _fun6370
                        }
                    case 101:
                        var3 = var3 * var5;
                        var4 = var10;
                        var2 = var4;
                        var1 = var3;
                        if (var1) {
                            _fun6370_ip = 72;
                            continue _fun6370
                        }
                    case 117:
                        var0 = 128;
                        var1 = var1 * var0;
                        var0 = var2;
                        if (!(var0 >= var1)) {
                            _fun6370_ip = 165;
                            continue _fun6370
                        }
                    case 131:
                        var1 = global;
                        var5 = var1.Math;
                        var4 = var5.pow;
                        var3 = 2;
                        var1 = 8;
                        var1 = var1 * var6;
                        var1 = var4.bind(var5)(var3, var1);
                        var0 = var2 - var1;
                    case 165:
                        return var0;
                }
            };
            var5.readIntLE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: readIntBE, environment: var2
                _fun6371: for (var _fun6371_ip = 0;;) switch (_fun6371_ip) {
                    case 0:
                        var9 = this;
                        var0 = arg0;
                        var8 = 0;
                        var7 = var0 >>> var8;
                        var0 = arg1;
                        var6 = var0 >>> var8;
                        var0 = arg2;
                        if (var0) {
                            _fun6371_ip = 46;
                            continue _fun6371
                        }
                    case 25:
                        var2 = _closure1_slot32;
                        var1 = var9.length;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var7, var6, var1);
                    case 46:
                        var5 = var6 - 1;
                        var0 = var7 + var5;
                        var0 = var9[var0];
                        var4 = 256;
                        var1 = 1;
                        var3 = var4;
                        var2 = var0;
                        if (!(var5 > var8)) {
                            _fun6371_ip = 121;
                            continue _fun6371
                        }
                    case 76:
                        var5 = var5 - 1;
                        var10 = var7 + var5;
                        var10 = var9[var10];
                        var10 = var10 * var3;
                        var11 = var0 + var10;
                        var1 = var3;
                        var2 = var11;
                        if (!(var5 > var8)) {
                            _fun6371_ip = 121;
                            continue _fun6371
                        }
                    case 105:
                        var3 = var3 * var4;
                        var0 = var11;
                        var2 = var0;
                        var1 = var3;
                        if (var1) {
                            _fun6371_ip = 76;
                            continue _fun6371
                        }
                    case 121:
                        var0 = 128;
                        var1 = var1 * var0;
                        var0 = var2;
                        if (!(var0 >= var1)) {
                            _fun6371_ip = 169;
                            continue _fun6371
                        }
                    case 135:
                        var1 = global;
                        var5 = var1.Math;
                        var4 = var5.pow;
                        var3 = 2;
                        var1 = 8;
                        var1 = var1 * var6;
                        var1 = var4.bind(var5)(var3, var1);
                        var0 = var2 - var1;
                    case 169:
                        return var0;
                }
            };
            var5.readIntBE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: readInt8, environment: var2
                _fun6372: for (var _fun6372_ip = 0;;) switch (_fun6372_ip) {
                    case 0:
                        var2 = this;
                        var1 = arg0;
                        var0 = 0;
                        var1 = var1 >>> var0;
                        var0 = arg1;
                        if (var0) {
                            _fun6372_ip = 42;
                            continue _fun6372
                        }
                    case 18:
                        var5 = _closure1_slot32;
                        var4 = var2.length;
                        var3 = undefined;
                        var0 = 1;
                        var0 = var5.bind(var3)(var1, var0, var4);
                    case 42:
                        var3 = var2[var1];
                        var0 = 128;
                        var0 = var0 & var3;
                        var2 = var2[var1];
                        if (var0) {
                            _fun6372_ip = 65;
                            continue _fun6372
                        }
                    case 60:
                        var0 = var2;
                        _fun6372_ip = 89;
                        continue _fun6372;
                    case 65:
                        var1 = 255;
                        var3 = var1 - var2;
                        var2 = -1;
                        var1 = 1;
                        var1 = var3 + var1;
                        var0 = var2 * var1;
                    case 89:
                        return var0;
                }
            };
            var5.readInt8 = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: readInt16LE, environment: var2
                _fun6373: for (var _fun6373_ip = 0;;) switch (_fun6373_ip) {
                    case 0:
                        var2 = this;
                        var1 = arg0;
                        var0 = 0;
                        var3 = var1 >>> var0;
                        var0 = arg1;
                        if (var0) {
                            _fun6373_ip = 42;
                            continue _fun6373
                        }
                    case 18:
                        var5 = _closure1_slot32;
                        var4 = var2.length;
                        var1 = undefined;
                        var0 = 2;
                        var0 = var5.bind(var1)(var3, var0, var4);
                    case 42:
                        var1 = var2[var3];
                        var0 = 1;
                        var0 = var3 + var0;
                        var2 = var2[var0];
                        var0 = 8;
                        var0 = var2 << var0;
                        var2 = var1 | var0;
                        var0 = 32768;
                        var1 = var0 & var2;
                        var0 = var2;
                        if (!var1) {
                            _fun6373_ip = 98;
                            continue _fun6373
                        }
                    case 84:
                        var1 = 4294901760.0;
                        var0 = var1 | var2;
                    case 98:
                        return var0;
                }
            };
            var5.readInt16LE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: readInt16BE, environment: var2
                _fun6374: for (var _fun6374_ip = 0;;) switch (_fun6374_ip) {
                    case 0:
                        var2 = this;
                        var1 = arg0;
                        var0 = 0;
                        var0 = var1 >>> var0;
                        var1 = arg1;
                        if (var1) {
                            _fun6374_ip = 42;
                            continue _fun6374
                        }
                    case 18:
                        var5 = _closure1_slot32;
                        var4 = var2.length;
                        var3 = undefined;
                        var1 = 2;
                        var1 = var5.bind(var3)(var0, var1, var4);
                    case 42:
                        var1 = 1;
                        var1 = var0 + var1;
                        var1 = var2[var1];
                        var2 = var2[var0];
                        var0 = 8;
                        var0 = var2 << var0;
                        var2 = var1 | var0;
                        var0 = 32768;
                        var1 = var0 & var2;
                        var0 = var2;
                        if (!var1) {
                            _fun6374_ip = 98;
                            continue _fun6374
                        }
                    case 84:
                        var1 = 4294901760.0;
                        var0 = var1 | var2;
                    case 98:
                        return var0;
                }
            };
            var5.readInt16BE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: readInt32LE, environment: var2
                _fun6375: for (var _fun6375_ip = 0;;) switch (_fun6375_ip) {
                    case 0:
                        var3 = this;
                        var1 = arg0;
                        var0 = 0;
                        var4 = var1 >>> var0;
                        var0 = arg1;
                        if (var0) {
                            _fun6375_ip = 42;
                            continue _fun6375
                        }
                    case 18:
                        var5 = _closure1_slot32;
                        var2 = var3.length;
                        var1 = undefined;
                        var0 = 4;
                        var0 = var5.bind(var1)(var4, var0, var2);
                    case 42:
                        var1 = var3[var4];
                        var0 = 1;
                        var0 = var4 + var0;
                        var2 = var3[var0];
                        var0 = 8;
                        var0 = var2 << var0;
                        var2 = var1 | var0;
                        var0 = 2;
                        var0 = var4 + var0;
                        var1 = var3[var0];
                        var0 = 16;
                        var0 = var1 << var0;
                        var1 = 3;
                        var1 = var4 + var1;
                        var3 = var3[var1];
                        var1 = 24;
                        var1 = var3 << var1;
                        var0 = var2 | var0;
                        var0 = var0 | var1;
                        return var0;
                }
            };
            var5.readInt32LE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: readInt32BE, environment: var2
                _fun6376: for (var _fun6376_ip = 0;;) switch (_fun6376_ip) {
                    case 0:
                        var4 = this;
                        var1 = arg0;
                        var0 = 0;
                        var5 = var1 >>> var0;
                        var0 = arg1;
                        if (var0) {
                            _fun6376_ip = 42;
                            continue _fun6376
                        }
                    case 18:
                        var3 = _closure1_slot32;
                        var2 = var4.length;
                        var1 = undefined;
                        var0 = 4;
                        var0 = var3.bind(var1)(var5, var0, var2);
                    case 42:
                        var1 = var4[var5];
                        var0 = 24;
                        var3 = var1 << var0;
                        var0 = 1;
                        var0 = var5 + var0;
                        var1 = var4[var0];
                        var0 = 16;
                        var0 = var1 << var0;
                        var1 = 2;
                        var1 = var5 + var1;
                        var2 = var4[var1];
                        var1 = 8;
                        var2 = var2 << var1;
                        var1 = 3;
                        var1 = var5 + var1;
                        var1 = var4[var1];
                        var0 = var3 | var0;
                        var0 = var0 | var2;
                        var0 = var0 | var1;
                        return var0;
                }
            };
            var5.readInt32BE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: readFloatLE, environment: var2
                _fun6377: for (var _fun6377_ip = 0;;) switch (_fun6377_ip) {
                    case 0:
                        var6 = this;
                        var1 = arg0;
                        var0 = 0;
                        var5 = var1 >>> var0;
                        var0 = arg1;
                        if (var0) {
                            _fun6377_ip = 42;
                            continue _fun6377
                        }
                    case 18:
                        var3 = _closure1_slot32;
                        var2 = var6.length;
                        var1 = undefined;
                        var0 = 4;
                        var0 = var3.bind(var1)(var5, var0, var2);
                    case 42:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.read;
                        var9 = true;
                        var8 = 23;
                        var7 = 4;
                        var12 = var4;
                        var11 = var6;
                        var10 = var5;
                        var0 = var12[var3](var11, var10, var9, var8, var7, var6);
                        return var0;
                }
            };
            var5.readFloatLE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: readFloatBE, environment: var2
                _fun6378: for (var _fun6378_ip = 0;;) switch (_fun6378_ip) {
                    case 0:
                        var6 = this;
                        var1 = arg0;
                        var0 = 0;
                        var5 = var1 >>> var0;
                        var0 = arg1;
                        if (var0) {
                            _fun6378_ip = 42;
                            continue _fun6378
                        }
                    case 18:
                        var3 = _closure1_slot32;
                        var2 = var6.length;
                        var1 = undefined;
                        var0 = 4;
                        var0 = var3.bind(var1)(var5, var0, var2);
                    case 42:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.read;
                        var9 = false;
                        var8 = 23;
                        var7 = 4;
                        var12 = var4;
                        var11 = var6;
                        var10 = var5;
                        var0 = var12[var3](var11, var10, var9, var8, var7, var6);
                        return var0;
                }
            };
            var5.readFloatBE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: readDoubleLE, environment: var2
                _fun6379: for (var _fun6379_ip = 0;;) switch (_fun6379_ip) {
                    case 0:
                        var6 = this;
                        var1 = arg0;
                        var0 = 0;
                        var5 = var1 >>> var0;
                        var0 = arg1;
                        if (var0) {
                            _fun6379_ip = 42;
                            continue _fun6379
                        }
                    case 18:
                        var3 = _closure1_slot32;
                        var2 = var6.length;
                        var1 = undefined;
                        var0 = 8;
                        var0 = var3.bind(var1)(var5, var0, var2);
                    case 42:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.read;
                        var9 = true;
                        var8 = 52;
                        var7 = 8;
                        var12 = var4;
                        var11 = var6;
                        var10 = var5;
                        var0 = var12[var3](var11, var10, var9, var8, var7, var6);
                        return var0;
                }
            };
            var5.readDoubleLE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1) { // Original name: readDoubleBE, environment: var2
                _fun6380: for (var _fun6380_ip = 0;;) switch (_fun6380_ip) {
                    case 0:
                        var6 = this;
                        var1 = arg0;
                        var0 = 0;
                        var5 = var1 >>> var0;
                        var0 = arg1;
                        if (var0) {
                            _fun6380_ip = 42;
                            continue _fun6380
                        }
                    case 18:
                        var3 = _closure1_slot32;
                        var2 = var6.length;
                        var1 = undefined;
                        var0 = 8;
                        var0 = var3.bind(var1)(var5, var0, var2);
                    case 42:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.read;
                        var9 = false;
                        var8 = 52;
                        var7 = 8;
                        var12 = var4;
                        var11 = var6;
                        var10 = var5;
                        var0 = var12[var3](var11, var10, var9, var8, var7, var6);
                        return var0;
                }
            };
            var5.readDoubleBE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2, arg3) { // Original name: writeUIntLE, environment: var2
                _fun6381: for (var _fun6381_ip = 0;;) switch (_fun6381_ip) {
                    case 0:
                        var7 = this;
                        var0 = arg0;
                        var6 = var0 - 0;
                        var0 = arg1;
                        var5 = 0;
                        var1 = var0 >>> var5;
                        var0 = arg2;
                        var0 = var0 >>> var5;
                        var2 = arg3;
                        if (var2) {
                            _fun6381_ip = 95;
                            continue _fun6381
                        }
                    case 31:
                        var4 = _closure1_slot33;
                        var2 = global;
                        var9 = var2.Math;
                        var8 = var9.pow;
                        var3 = 2;
                        var2 = 8;
                        var2 = var2 * var0;
                        var3 = var8.bind(var9)(var3, var2);
                        var2 = 1;
                        var11 = var3 - var2;
                        var16 = undefined;
                        var15 = var7;
                        var14 = var6;
                        var13 = var1;
                        var12 = var0;
                        var10 = 0;
                        var2 = var16[var4](var15, var14, var13, var12, var11, var10, var9);
                    case 95:
                        var5 = 255;
                        var2 = var5 & var6;
                        var7[var1] = var2;
                        var4 = 256;
                        var3 = 1;
                        var2 = var4;
                        if (!(var3 < var0)) {
                            _fun6381_ip = 152;
                            continue _fun6381
                        }
                    case 122:
                        var9 = var1 + var3;
                        var8 = var6 / var2;
                        var8 = var8 & var5;
                        var7[var9] = var8;
                        var3 = var3 + 1;
                        if (!(var3 < var0)) {
                            _fun6381_ip = 152;
                            continue _fun6381
                        }
                    case 145:
                        var2 = var2 * var4;
                        if (var2) {
                            _fun6381_ip = 122;
                            continue _fun6381
                        }
                    case 152:
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var5.writeUIntLE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2, arg3) { // Original name: writeUIntBE, environment: var2
                _fun6382: for (var _fun6382_ip = 0;;) switch (_fun6382_ip) {
                    case 0:
                        var8 = this;
                        var0 = arg0;
                        var7 = var0 - 0;
                        var0 = arg1;
                        var6 = 0;
                        var1 = var0 >>> var6;
                        var0 = arg2;
                        var0 = var0 >>> var6;
                        var2 = arg3;
                        if (var2) {
                            _fun6382_ip = 95;
                            continue _fun6382
                        }
                    case 31:
                        var4 = _closure1_slot33;
                        var2 = global;
                        var9 = var2.Math;
                        var5 = var9.pow;
                        var3 = 2;
                        var2 = 8;
                        var2 = var2 * var0;
                        var3 = var5.bind(var9)(var3, var2);
                        var2 = 1;
                        var12 = var3 - var2;
                        var17 = undefined;
                        var16 = var8;
                        var15 = var7;
                        var14 = var1;
                        var13 = var0;
                        var11 = 0;
                        var2 = var17[var4](var16, var15, var14, var13, var12, var11, var10);
                    case 95:
                        var2 = 1;
                        var2 = var0 - var2;
                        var5 = 255;
                        var4 = var5 & var7;
                        var3 = var1 + var2;
                        var8[var3] = var4;
                        var4 = var2 - 1;
                        var3 = 256;
                        var2 = var3;
                        if (!(var4 >= var6)) {
                            _fun6382_ip = 163;
                            continue _fun6382
                        }
                    case 133:
                        var10 = var1 + var4;
                        var9 = var7 / var2;
                        var9 = var9 & var5;
                        var8[var10] = var9;
                        var4 = var4 - 1;
                        if (!(var4 >= var6)) {
                            _fun6382_ip = 163;
                            continue _fun6382
                        }
                    case 156:
                        var2 = var2 * var3;
                        if (var2) {
                            _fun6382_ip = 133;
                            continue _fun6382
                        }
                    case 163:
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var5.writeUIntBE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: writeUInt8, environment: var2
                _fun6383: for (var _fun6383_ip = 0;;) switch (_fun6383_ip) {
                    case 0:
                        var2 = this;
                        var0 = arg0;
                        var3 = var0 - 0;
                        var0 = arg1;
                        var7 = 0;
                        var1 = var0 >>> var7;
                        var0 = arg2;
                        if (var0) {
                            _fun6383_ip = 54;
                            continue _fun6383
                        }
                    case 24:
                        var6 = _closure1_slot33;
                        var14 = undefined;
                        var10 = 1;
                        var9 = 255;
                        var13 = var2;
                        var12 = var3;
                        var11 = var1;
                        var8 = 0;
                        var0 = var14[var6](var13, var12, var11, var10, var9, var8, var7);
                    case 54:
                        var0 = 255;
                        var0 = var0 & var3;
                        var2[var1] = var0;
                        var0 = 1;
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var5.writeUInt8 = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: writeUInt16LE, environment: var2
                _fun6384: for (var _fun6384_ip = 0;;) switch (_fun6384_ip) {
                    case 0:
                        var3 = this;
                        var0 = arg0;
                        var2 = var0 - 0;
                        var0 = arg1;
                        var7 = 0;
                        var1 = var0 >>> var7;
                        var0 = arg2;
                        if (var0) {
                            _fun6384_ip = 57;
                            continue _fun6384
                        }
                    case 24:
                        var6 = _closure1_slot33;
                        var14 = undefined;
                        var10 = 2;
                        var9 = 65535;
                        var13 = var3;
                        var12 = var2;
                        var11 = var1;
                        var8 = 0;
                        var0 = var14[var6](var13, var12, var11, var10, var9, var8, var7);
                    case 57:
                        var0 = 255;
                        var0 = var0 & var2;
                        var3[var1] = var0;
                        var0 = 8;
                        var2 = var2 >>> var0;
                        var0 = 1;
                        var0 = var1 + var0;
                        var3[var0] = var2;
                        var0 = 2;
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var5.writeUInt16LE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: writeUInt16BE, environment: var2
                _fun6385: for (var _fun6385_ip = 0;;) switch (_fun6385_ip) {
                    case 0:
                        var3 = this;
                        var0 = arg0;
                        var2 = var0 - 0;
                        var0 = arg1;
                        var7 = 0;
                        var1 = var0 >>> var7;
                        var0 = arg2;
                        if (var0) {
                            _fun6385_ip = 57;
                            continue _fun6385
                        }
                    case 24:
                        var6 = _closure1_slot33;
                        var14 = undefined;
                        var10 = 2;
                        var9 = 65535;
                        var13 = var3;
                        var12 = var2;
                        var11 = var1;
                        var8 = 0;
                        var0 = var14[var6](var13, var12, var11, var10, var9, var8, var7);
                    case 57:
                        var0 = 8;
                        var0 = var2 >>> var0;
                        var3[var1] = var0;
                        var0 = 255;
                        var2 = var0 & var2;
                        var0 = 1;
                        var0 = var1 + var0;
                        var3[var0] = var2;
                        var0 = 2;
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var5.writeUInt16BE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: writeUInt32LE, environment: var2
                _fun6386: for (var _fun6386_ip = 0;;) switch (_fun6386_ip) {
                    case 0:
                        var2 = this;
                        var0 = arg0;
                        var3 = var0 - 0;
                        var0 = arg1;
                        var7 = 0;
                        var1 = var0 >>> var7;
                        var0 = arg2;
                        if (var0) {
                            _fun6386_ip = 61;
                            continue _fun6386
                        }
                    case 24:
                        var6 = _closure1_slot33;
                        var14 = undefined;
                        var10 = 4;
                        var9 = 4294967295.0;
                        var13 = var2;
                        var12 = var3;
                        var11 = var1;
                        var8 = 0;
                        var0 = var14[var6](var13, var12, var11, var10, var9, var8, var7);
                    case 61:
                        var0 = 24;
                        var4 = var3 >>> var0;
                        var0 = 3;
                        var0 = var1 + var0;
                        var2[var0] = var4;
                        var0 = 16;
                        var4 = var3 >>> var0;
                        var0 = 2;
                        var0 = var1 + var0;
                        var2[var0] = var4;
                        var0 = 8;
                        var4 = var3 >>> var0;
                        var0 = 1;
                        var0 = var1 + var0;
                        var2[var0] = var4;
                        var0 = 255;
                        var0 = var0 & var3;
                        var2[var1] = var0;
                        var0 = 4;
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var5.writeUInt32LE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: writeUInt32BE, environment: var2
                _fun6387: for (var _fun6387_ip = 0;;) switch (_fun6387_ip) {
                    case 0:
                        var3 = this;
                        var0 = arg0;
                        var2 = var0 - 0;
                        var0 = arg1;
                        var7 = 0;
                        var1 = var0 >>> var7;
                        var0 = arg2;
                        if (var0) {
                            _fun6387_ip = 61;
                            continue _fun6387
                        }
                    case 24:
                        var6 = _closure1_slot33;
                        var14 = undefined;
                        var10 = 4;
                        var9 = 4294967295.0;
                        var13 = var3;
                        var12 = var2;
                        var11 = var1;
                        var8 = 0;
                        var0 = var14[var6](var13, var12, var11, var10, var9, var8, var7);
                    case 61:
                        var0 = 24;
                        var0 = var2 >>> var0;
                        var3[var1] = var0;
                        var0 = 16;
                        var4 = var2 >>> var0;
                        var0 = 1;
                        var0 = var1 + var0;
                        var3[var0] = var4;
                        var0 = 8;
                        var4 = var2 >>> var0;
                        var0 = 2;
                        var0 = var1 + var0;
                        var3[var0] = var4;
                        var0 = 255;
                        var2 = var0 & var2;
                        var0 = 3;
                        var0 = var1 + var0;
                        var3[var0] = var2;
                        var0 = 4;
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var5.writeUInt32BE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2, arg3) { // Original name: writeIntLE, environment: var2
                _fun6388: for (var _fun6388_ip = 0;;) switch (_fun6388_ip) {
                    case 0:
                        var1 = arg2;
                        var11 = this;
                        var0 = arg0;
                        var10 = var0 - 0;
                        var0 = arg1;
                        var9 = 0;
                        var0 = var0 >>> var9;
                        var2 = arg3;
                        if (var2) {
                            _fun6388_ip = 96;
                            continue _fun6388
                        }
                    case 27:
                        var2 = global;
                        var6 = var2.Math;
                        var5 = var6.pow;
                        var2 = 8;
                        var2 = var2 * var1;
                        var4 = 2;
                        var3 = 1;
                        var2 = var2 - var3;
                        var2 = var5.bind(var6)(var4, var2);
                        var5 = _closure1_slot33;
                        var15 = var2 - var3;
                        var14 = -var2;
                        var20 = undefined;
                        var19 = var11;
                        var18 = var10;
                        var17 = var0;
                        var16 = var1;
                        var2 = var20[var5](var19, var18, var17, var16, var15, var14, var13);
                    case 96:
                        var8 = 255;
                        var2 = var8 & var10;
                        var11[var0] = var2;
                        var7 = 1;
                        var12 = var7 < var1;
                        var6 = 256;
                        var5 = var10 < var9;
                        var4 = var7;
                        var3 = var6;
                        var2 = 0;
                        if (!var12) {
                            _fun6388_ip = 207;
                            continue _fun6388
                        }
                    case 135:
                        var12 = var5;
                        if (!var12) {
                            _fun6388_ip = 145;
                            continue _fun6388
                        }
                    case 141:
                        var12 = var9 === var2;
                    case 145:
                        if (!var12) {
                            _fun6388_ip = 164;
                            continue _fun6388
                        }
                    case 148:
                        var13 = var0 + var4;
                        var13 = var13 - var7;
                        var13 = var11[var13];
                        var12 = var9 !== var13;
                    case 164:
                        if (!var12) {
                            _fun6388_ip = 170;
                            continue _fun6388
                        }
                    case 167:
                        var2 = var7;
                    case 170:
                        var13 = var0 + var4;
                        var12 = var10 / var3;
                        var12 = var12 | 0;
                        var12 = var12 - var2;
                        var12 = var12 & var8;
                        var11[var13] = var12;
                        var4 = var4 + 1;
                        if (!(var4 < var1)) {
                            _fun6388_ip = 207;
                            continue _fun6388
                        }
                    case 200:
                        var3 = var3 * var6;
                        if (var3) {
                            _fun6388_ip = 135;
                            continue _fun6388
                        }
                    case 207:
                        var0 = var0 + var1;
                        return var0;
                }
            };
            var5.writeIntLE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2, arg3) { // Original name: writeIntBE, environment: var2
                _fun6389: for (var _fun6389_ip = 0;;) switch (_fun6389_ip) {
                    case 0:
                        var1 = arg2;
                        var11 = this;
                        var0 = arg0;
                        var10 = var0 - 0;
                        var0 = arg1;
                        var9 = 0;
                        var0 = var0 >>> var9;
                        var2 = arg3;
                        if (var2) {
                            _fun6389_ip = 96;
                            continue _fun6389
                        }
                    case 27:
                        var2 = global;
                        var6 = var2.Math;
                        var5 = var6.pow;
                        var2 = 8;
                        var2 = var2 * var1;
                        var4 = 2;
                        var3 = 1;
                        var2 = var2 - var3;
                        var2 = var5.bind(var6)(var4, var2);
                        var5 = _closure1_slot33;
                        var15 = var2 - var3;
                        var14 = -var2;
                        var20 = undefined;
                        var19 = var11;
                        var18 = var10;
                        var17 = var0;
                        var16 = var1;
                        var2 = var20[var5](var19, var18, var17, var16, var15, var14, var13);
                    case 96:
                        var8 = 1;
                        var2 = var1 - var8;
                        var7 = 255;
                        var4 = var7 & var10;
                        var3 = var0 + var2;
                        var11[var3] = var4;
                        var6 = var2 - 1;
                        var5 = 256;
                        var4 = var10 < var9;
                        var3 = var5;
                        var2 = 0;
                        if (!(var6 >= var2)) {
                            _fun6389_ip = 212;
                            continue _fun6389
                        }
                    case 140:
                        var12 = var4;
                        if (!var12) {
                            _fun6389_ip = 150;
                            continue _fun6389
                        }
                    case 146:
                        var12 = var9 === var2;
                    case 150:
                        if (!var12) {
                            _fun6389_ip = 169;
                            continue _fun6389
                        }
                    case 153:
                        var13 = var0 + var6;
                        var13 = var13 + var8;
                        var13 = var11[var13];
                        var12 = var9 !== var13;
                    case 169:
                        if (!var12) {
                            _fun6389_ip = 175;
                            continue _fun6389
                        }
                    case 172:
                        var2 = var8;
                    case 175:
                        var13 = var0 + var6;
                        var12 = var10 / var3;
                        var12 = var12 | 0;
                        var12 = var12 - var2;
                        var12 = var12 & var7;
                        var11[var13] = var12;
                        var6 = var6 - 1;
                        if (!(var6 >= var9)) {
                            _fun6389_ip = 212;
                            continue _fun6389
                        }
                    case 205:
                        var3 = var3 * var5;
                        if (var3) {
                            _fun6389_ip = 140;
                            continue _fun6389
                        }
                    case 212:
                        var0 = var0 + var1;
                        return var0;
                }
            };
            var5.writeIntBE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: writeInt8, environment: var2
                _fun6390: for (var _fun6390_ip = 0;;) switch (_fun6390_ip) {
                    case 0:
                        var2 = this;
                        var0 = arg0;
                        var4 = var0 - 0;
                        var1 = arg1;
                        var0 = 0;
                        var1 = var1 >>> var0;
                        var3 = arg2;
                        if (var3) {
                            _fun6390_ip = 58;
                            continue _fun6390
                        }
                    case 24:
                        var8 = _closure1_slot33;
                        var15 = undefined;
                        var11 = 1;
                        var10 = 127;
                        var9 = -128;
                        var14 = var2;
                        var13 = var4;
                        var12 = var1;
                        var3 = var15[var8](var14, var13, var12, var11, var10, var9, var8);
                    case 58:
                        var3 = var4;
                        if (!(var3 < var0)) {
                            _fun6390_ip = 79;
                            continue _fun6390
                        }
                    case 65:
                        var0 = 255;
                        var4 = var0 + var4;
                        var0 = 1;
                        var3 = var4 + var0;
                    case 79:
                        var0 = 255;
                        var0 = var0 & var3;
                        var2[var1] = var0;
                        var0 = 1;
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var5.writeInt8 = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: writeInt16LE, environment: var2
                _fun6391: for (var _fun6391_ip = 0;;) switch (_fun6391_ip) {
                    case 0:
                        var3 = this;
                        var0 = arg0;
                        var2 = var0 - 0;
                        var1 = arg1;
                        var0 = 0;
                        var1 = var1 >>> var0;
                        var0 = arg2;
                        if (var0) {
                            _fun6391_ip = 61;
                            continue _fun6391
                        }
                    case 24:
                        var7 = _closure1_slot33;
                        var14 = undefined;
                        var10 = 2;
                        var9 = 32767;
                        var8 = -32768;
                        var13 = var3;
                        var12 = var2;
                        var11 = var1;
                        var0 = var14[var7](var13, var12, var11, var10, var9, var8, var7);
                    case 61:
                        var0 = 255;
                        var0 = var0 & var2;
                        var3[var1] = var0;
                        var0 = 8;
                        var2 = var2 >>> var0;
                        var0 = 1;
                        var0 = var1 + var0;
                        var3[var0] = var2;
                        var0 = 2;
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var5.writeInt16LE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: writeInt16BE, environment: var2
                _fun6392: for (var _fun6392_ip = 0;;) switch (_fun6392_ip) {
                    case 0:
                        var3 = this;
                        var0 = arg0;
                        var2 = var0 - 0;
                        var1 = arg1;
                        var0 = 0;
                        var1 = var1 >>> var0;
                        var0 = arg2;
                        if (var0) {
                            _fun6392_ip = 61;
                            continue _fun6392
                        }
                    case 24:
                        var7 = _closure1_slot33;
                        var14 = undefined;
                        var10 = 2;
                        var9 = 32767;
                        var8 = -32768;
                        var13 = var3;
                        var12 = var2;
                        var11 = var1;
                        var0 = var14[var7](var13, var12, var11, var10, var9, var8, var7);
                    case 61:
                        var0 = 8;
                        var0 = var2 >>> var0;
                        var3[var1] = var0;
                        var0 = 255;
                        var2 = var0 & var2;
                        var0 = 1;
                        var0 = var1 + var0;
                        var3[var0] = var2;
                        var0 = 2;
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var5.writeInt16BE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: writeInt32LE, environment: var2
                _fun6393: for (var _fun6393_ip = 0;;) switch (_fun6393_ip) {
                    case 0:
                        var3 = this;
                        var0 = arg0;
                        var2 = var0 - 0;
                        var1 = arg1;
                        var0 = 0;
                        var1 = var1 >>> var0;
                        var0 = arg2;
                        if (var0) {
                            _fun6393_ip = 61;
                            continue _fun6393
                        }
                    case 24:
                        var7 = _closure1_slot33;
                        var14 = undefined;
                        var10 = 4;
                        var9 = 2147483647;
                        var8 = -2147483648;
                        var13 = var3;
                        var12 = var2;
                        var11 = var1;
                        var0 = var14[var7](var13, var12, var11, var10, var9, var8, var7);
                    case 61:
                        var0 = 255;
                        var0 = var0 & var2;
                        var3[var1] = var0;
                        var0 = 8;
                        var4 = var2 >>> var0;
                        var0 = 1;
                        var0 = var1 + var0;
                        var3[var0] = var4;
                        var0 = 16;
                        var4 = var2 >>> var0;
                        var0 = 2;
                        var0 = var1 + var0;
                        var3[var0] = var4;
                        var0 = 24;
                        var2 = var2 >>> var0;
                        var0 = 3;
                        var0 = var1 + var0;
                        var3[var0] = var2;
                        var0 = 4;
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var5.writeInt32LE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: writeInt32BE, environment: var2
                _fun6394: for (var _fun6394_ip = 0;;) switch (_fun6394_ip) {
                    case 0:
                        var3 = this;
                        var0 = arg0;
                        var4 = var0 - 0;
                        var1 = arg1;
                        var0 = 0;
                        var1 = var1 >>> var0;
                        var2 = arg2;
                        if (var2) {
                            _fun6394_ip = 61;
                            continue _fun6394
                        }
                    case 24:
                        var8 = _closure1_slot33;
                        var15 = undefined;
                        var11 = 4;
                        var10 = 2147483647;
                        var9 = -2147483648;
                        var14 = var3;
                        var13 = var4;
                        var12 = var1;
                        var2 = var15[var8](var14, var13, var12, var11, var10, var9, var8);
                    case 61:
                        var2 = var4;
                        if (!(var2 < var0)) {
                            _fun6394_ip = 89;
                            continue _fun6394
                        }
                    case 68:
                        var0 = 4294967295.0;
                        var4 = var0 + var4;
                        var0 = 1;
                        var2 = var4 + var0;
                    case 89:
                        var0 = 24;
                        var0 = var2 >>> var0;
                        var3[var1] = var0;
                        var0 = 16;
                        var4 = var2 >>> var0;
                        var0 = 1;
                        var0 = var1 + var0;
                        var3[var0] = var4;
                        var0 = 8;
                        var4 = var2 >>> var0;
                        var0 = 2;
                        var0 = var1 + var0;
                        var3[var0] = var4;
                        var0 = 255;
                        var2 = var0 & var2;
                        var0 = 3;
                        var0 = var1 + var0;
                        var3[var0] = var2;
                        var0 = 4;
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var5.writeInt32BE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: writeFloatLE, environment: var2
                var6 = _closure1_slot35;
                var12 = undefined;
                var11 = this;
                var10 = arg0;
                var9 = arg1;
                var8 = true;
                var7 = arg2;
                var0 = var12[var6](var11, var10, var9, var8, var7, var6);
                return var0;
            };
            var5.writeFloatLE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: writeFloatBE, environment: var2
                var6 = _closure1_slot35;
                var12 = undefined;
                var11 = this;
                var10 = arg0;
                var9 = arg1;
                var8 = false;
                var7 = arg2;
                var0 = var12[var6](var11, var10, var9, var8, var7, var6);
                return var0;
            };
            var5.writeFloatBE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: writeDoubleLE, environment: var2
                var6 = _closure1_slot36;
                var12 = undefined;
                var11 = this;
                var10 = arg0;
                var9 = arg1;
                var8 = true;
                var7 = arg2;
                var0 = var12[var6](var11, var10, var9, var8, var7, var6);
                return var0;
            };
            var5.writeDoubleLE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2) { // Original name: writeDoubleBE, environment: var2
                var6 = _closure1_slot36;
                var12 = undefined;
                var11 = this;
                var10 = arg0;
                var9 = arg1;
                var8 = false;
                var7 = arg2;
                var0 = var12[var6](var11, var10, var9, var8, var7, var6);
                return var0;
            };
            var5.writeDoubleBE = var4;
            var5 = var3.prototype;
            var4 = function(arg0, arg1, arg2, arg3) { // Original name: copy, environment: var2
                _fun6399: for (var _fun6399_ip = 0;;) switch (_fun6399_ip) {
                    case 0:
                        var7 = arg0;
                        var6 = arg1;
                        var5 = arg2;
                        var4 = arg3;
                        var3 = this;
                        var1 = _closure1_slot8;
                        var0 = var1.isBuffer;
                        var0 = var0.bind(var1)(var7);
                        if (var0) {
                            _fun6399_ip = 72;
                            continue _fun6399
                        }
                    case 36:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var12 = 'argument should be a Buffer';
                        var13 = var1;
                        var0 = new var13[var2](var12, var11);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 72:
                        if (var5) {
                            _fun6399_ip = 77;
                            continue _fun6399
                        }
                    case 75:
                        var5 = 0;
                    case 77:
                        var0 = var4;
                        if (var4) {
                            _fun6399_ip = 89;
                            continue _fun6399
                        }
                    case 83:
                        var1 = 0;
                        var0 = var1 === var4;
                    case 89:
                        if (var0) {
                            _fun6399_ip = 97;
                            continue _fun6399
                        }
                    case 92:
                        var4 = var3.length;
                    case 97:
                        var0 = var7.length;
                        if (!(var6 >= var0)) {
                            _fun6399_ip = 111;
                            continue _fun6399
                        }
                    case 106:
                        var6 = var7.length;
                    case 111:
                        if (var6) {
                            _fun6399_ip = 116;
                            continue _fun6399
                        }
                    case 114:
                        var6 = 0;
                    case 116:
                        var0 = 0;
                        var1 = var4 > var0;
                        if (!var1) {
                            _fun6399_ip = 129;
                            continue _fun6399
                        }
                    case 125:
                        var1 = var4 < var5;
                    case 129:
                        if (!var1) {
                            _fun6399_ip = 135;
                            continue _fun6399
                        }
                    case 132:
                        var4 = var5;
                    case 135:
                        if (!(var4 !== var5)) {
                            _fun6399_ip = 500;
                            continue _fun6399
                        }
                    case 142:
                        var1 = var7.length;
                        if (!(var0 !== var1)) {
                            _fun6399_ip = 498;
                            continue _fun6399
                        }
                    case 154:
                        var1 = var3.length;
                        if (!(var0 !== var1)) {
                            _fun6399_ip = 498;
                            continue _fun6399
                        }
                    case 166:
                        if (!(!(var6 < var0))) {
                            _fun6399_ip = 462;
                            continue _fun6399
                        }
                    case 173:
                        if (!(!(var5 < var0))) {
                            _fun6399_ip = 426;
                            continue _fun6399
                        }
                    case 180:
                        var1 = var3.length;
                        if (!(!(var5 >= var1))) {
                            _fun6399_ip = 426;
                            continue _fun6399
                        }
                    case 192:
                        if (!(!(var4 < var0))) {
                            _fun6399_ip = 390;
                            continue _fun6399
                        }
                    case 199:
                        var1 = var3.length;
                        if (!(var4 > var1)) {
                            _fun6399_ip = 213;
                            continue _fun6399
                        }
                    case 208:
                        var4 = var3.length;
                    case 213:
                        var1 = var7.length;
                        var2 = var1 - var6;
                        var1 = var4 - var5;
                        if (!(var2 < var1)) {
                            _fun6399_ip = 243;
                            continue _fun6399
                        }
                    case 230:
                        var1 = var7.length;
                        var1 = var1 - var6;
                        var4 = var1 + var5;
                    case 243:
                        var1 = var4 - var5;
                        var2 = var3 === var7;
                        if (!var2) {
                            _fun6399_ip = 284;
                            continue _fun6399
                        }
                    case 254:
                        var8 = global;
                        var8 = var8.Uint8Array;
                        var8 = var8.prototype;
                        var8 = var8.copyWithin;
                        var9 = 'function';
                        var8 = typeof var8;
                        if (!(var9 !== var8)) {
                            _fun6399_ip = 375;
                            continue _fun6399
                        }
                    case 284:
                        if (!var2) {
                            _fun6399_ip = 295;
                            continue _fun6399
                        }
                    case 287:
                        if (!(var5 < var6)) {
                            _fun6399_ip = 295;
                            continue _fun6399
                        }
                    case 291:
                        if (!(!(var6 < var4))) {
                            _fun6399_ip = 339;
                            continue _fun6399
                        }
                    case 295:
                        var2 = global;
                        var2 = var2.Uint8Array;
                        var2 = var2.prototype;
                        var9 = var2.set;
                        var8 = var9.call;
                        var2 = var3.subarray;
                        var2 = var2.bind(var3)(var5, var4);
                        var2 = var8.bind(var9)(var7, var2, var6);
                        _fun6399_ip = 388;
                        continue _fun6399;
                    case 339:
                        var2 = 1;
                        var2 = var1 - var2;
                        if (!(var2 >= var0)) {
                            _fun6399_ip = 388;
                            continue _fun6399
                        }
                    case 350:
                        var9 = var2 + var6;
                        var8 = var2 + var5;
                        var8 = var3[var8];
                        var7[var9] = var8;
                        var2 = var2 - 1;
                        if (var2 >= var0) {
                            _fun6399_ip = 350;
                            continue _fun6399
                        }
                    case 373:
                        _fun6399_ip = 388;
                        continue _fun6399;
                    case 375:
                        var2 = var3.copyWithin;
                        var2 = var2.bind(var3)(var6, var5, var4);
                    case 388:
                        return var1;
                    case 390:
                        var1 = global;
                        var3 = var1.RangeError;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var12 = 'sourceEnd out of bounds';
                        var13 = var2;
                        var1 = new var13[var3](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 426:
                        var1 = global;
                        var3 = var1.RangeError;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var12 = 'Index out of range';
                        var13 = var2;
                        var1 = new var13[var3](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 462:
                        var1 = global;
                        var3 = var1.RangeError;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var12 = 'targetStart out of bounds';
                        var13 = var2;
                        var1 = new var13[var3](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 498:
                        return var0;
                    case 500:
                        return var0;
                }
            };
            var5.copy = var4;
            var4 = var3.prototype;
            var3 = function(arg0, arg1, arg2, arg3) { // Original name: fill, environment: var2
                _fun6400: for (var _fun6400_ip = 0;;) switch (_fun6400_ip) {
                    case 0:
                        var10 = arg0;
                        var7 = arg1;
                        var11 = arg2;
                        var4 = arg3;
                        var0 = this;
                        var6 = typeof var10;
                        var9 = 'string';
                        if (!(var9 !== var6)) {
                            _fun6400_ip = 107;
                            continue _fun6400
                        }
                    case 26:
                        var1 = 'number';
                        if (!(var1 !== var6)) {
                            _fun6400_ip = 86;
                            continue _fun6400
                        }
                    case 34:
                        var5 = 'boolean';
                        var3 = var10;
                        var2 = var7;
                        var1 = var11;
                        var8 = var4;
                        if (!(var5 === var6)) {
                            _fun6400_ip = 331;
                            continue _fun6400
                        }
                    case 57:
                        var5 = global;
                        var6 = var5.Number;
                        var5 = undefined;
                        var3 = var6.bind(var5)(var10);
                        var2 = var7;
                        var1 = var11;
                        var8 = var4;
                        _fun6400_ip = 331;
                        continue _fun6400;
                    case 86:
                        var5 = 255;
                        var3 = var10 & var5;
                        var2 = var7;
                        var1 = var11;
                        var8 = var4;
                        _fun6400_ip = 331;
                        continue _fun6400;
                    case 107:
                        var5 = typeof var7;
                        if (!(var9 !== var5)) {
                            _fun6400_ip = 140;
                            continue _fun6400
                        }
                    case 114:
                        var12 = typeof var11;
                        var6 = var7;
                        var5 = var11;
                        if (!(var9 === var12)) {
                            _fun6400_ip = 150;
                            continue _fun6400
                        }
                    case 127:
                        var5 = var0.length;
                        var6 = var7;
                        var4 = var11;
                        _fun6400_ip = 150;
                        continue _fun6400;
                    case 140:
                        var5 = var0.length;
                        var6 = 0;
                        var4 = var7;
                    case 150:
                        var7 = undefined;
                        if (!(var7 !== var4)) {
                            _fun6400_ip = 166;
                            continue _fun6400
                        }
                    case 156:
                        var7 = typeof var4;
                        if (!(var9 === var7)) {
                            _fun6400_ip = 603;
                            continue _fun6400
                        }
                    case 166:
                        var7 = typeof var4;
                        if (!(var9 === var7)) {
                            _fun6400_ip = 234;
                            continue _fun6400
                        }
                    case 173:
                        var9 = _closure1_slot8;
                        var7 = var9.isEncoding;
                        var7 = var7.bind(var9)(var4);
                        if (var7) {
                            _fun6400_ip = 234;
                            continue _fun6400
                        }
                    case 194:
                        var7 = global;
                        var11 = var7.TypeError;
                        var7 = 'Unknown encoding: ';
                        var14 = var7 + var4;
                        var9 = var11.prototype;
                        var9 = Object.create(var9, {
                            constructor: {
                                value: var11
                            }
                        });
                        var15 = var9;
                        var7 = new var15[var11](var14, var13);
                        var7 = var7 instanceof Object ? var7 : var9;
                        throw var7;
                    case 234:
                        var9 = var10.length;
                        var7 = 1;
                        var3 = var10;
                        var2 = var6;
                        var1 = var5;
                        var8 = var4;
                        if (!(var7 === var9)) {
                            _fun6400_ip = 331;
                            continue _fun6400
                        }
                    case 258:
                        var9 = var10.charCodeAt;
                        var7 = 0;
                        var7 = var9.bind(var10)(var7);
                        var9 = 'utf8';
                        var9 = var9 === var4;
                        if (!var9) {
                            _fun6400_ip = 291;
                            continue _fun6400
                        }
                    case 284:
                        var11 = 128;
                        var9 = var7 < var11;
                    case 291:
                        if (var9) {
                            _fun6400_ip = 304;
                            continue _fun6400
                        }
                    case 294:
                        var11 = 'latin1';
                        var9 = var11 === var4;
                    case 304:
                        var3 = var10;
                        var2 = var6;
                        var1 = var5;
                        var8 = var4;
                        if (!var9) {
                            _fun6400_ip = 331;
                            continue _fun6400
                        }
                    case 319:
                        var3 = var7;
                        var2 = var6;
                        var1 = var5;
                        var8 = var4;
                    case 331:
                        var7 = 0;
                        if (!(!(var2 < var7))) {
                            _fun6400_ip = 567;
                            continue _fun6400
                        }
                    case 340:
                        var4 = var0.length;
                        if (!(!(var4 < var2))) {
                            _fun6400_ip = 567;
                            continue _fun6400
                        }
                    case 352:
                        var4 = var0.length;
                        if (!(!(var4 < var1))) {
                            _fun6400_ip = 567;
                            continue _fun6400
                        }
                    case 364:
                        if (!(!(var1 <= var2))) {
                            _fun6400_ip = 565;
                            continue _fun6400
                        }
                    case 371:
                        var2 = var2 >>> var7;
                        var4 = undefined;
                        if (!(var4 !== var1)) {
                            _fun6400_ip = 387;
                            continue _fun6400
                        }
                    case 381:
                        var1 = var1 >>> var7;
                        _fun6400_ip = 392;
                        continue _fun6400;
                    case 387:
                        var1 = var0.length;
                    case 392:
                        if (var3) {
                            _fun6400_ip = 397;
                            continue _fun6400
                        }
                    case 395:
                        var3 = 0;
                    case 397:
                        var5 = 'number';
                        var4 = typeof var3;
                        if (!(var5 !== var4)) {
                            _fun6400_ip = 548;
                            continue _fun6400
                        }
                    case 411:
                        var6 = _closure1_slot8;
                        var5 = var6.isBuffer;
                        var5 = var5.bind(var6)(var3);
                        var6 = var3;
                        if (var5) {
                            _fun6400_ip = 450;
                            continue _fun6400
                        }
                    case 435:
                        var5 = _closure1_slot8;
                        var4 = var5.from;
                        var6 = var4.bind(var5)(var3, var8);
                    case 450:
                        var5 = var6.length;
                        if (!(var7 !== var5)) {
                            _fun6400_ip = 498;
                            continue _fun6400
                        }
                    case 459:
                        var4 = var1 - var2;
                        var7 = 0;
                        if (!(var7 < var4)) {
                            _fun6400_ip = 563;
                            continue _fun6400
                        }
                    case 469:
                        var8 = var7 + var2;
                        var4 = var7 % var5;
                        var4 = var6[var4];
                        var0[var8] = var4;
                        var7 = var7 + 1;
                        var4 = var1 - var2;
                        if (var7 < var4) {
                            _fun6400_ip = 469;
                            continue _fun6400
                        }
                    case 496:
                        _fun6400_ip = 563;
                        continue _fun6400;
                    case 498:
                        var4 = global;
                        var6 = var4.TypeError;
                        var4 = 'The value "';
                        var7 = var4 + var3;
                        var4 = var6.prototype;
                        var5 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var4 = '" is invalid for argument "value"';
                        var14 = var7 + var4;
                        var15 = var5;
                        var4 = new var15[var6](var14, var13);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
                    case 548:
                        if (!(var2 < var1)) {
                            _fun6400_ip = 563;
                            continue _fun6400
                        }
                    case 552:
                        var0[var2] = var3;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun6400_ip = 552;
                            continue _fun6400
                        }
                    case 563:
                        return var0;
                    case 565:
                        return var0;
                    case 567:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var14 = 'Out of range index';
                        var15 = var1;
                        var0 = new var15[var2](var14, var13);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 603:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var14 = 'encoding must be a string';
                        var15 = var1;
                        var0 = new var15[var2](var14, var13);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var4.fill = var3;
            var3 = /[^+\/0-9A-Za-z-_]/g;
            var _closure1_slot5 = var3;
            var4 = var1.Array;
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var14 = 256;
            var15 = var3;
            var1 = new var15[var4](var14, var13);
            var1 = var1 instanceof Object ? var1 : var3;
            var5 = 16;
            var4 = '0123456789abcdef';
            var3 = 0;
        case 1725:
            var8 = var5 * var3;
            var7 = 0;
        case 1731:
            var10 = var8 + var7;
            var11 = var4[var3];
            var9 = var4[var7];
            var9 = var11 + var9;
            var1[var10] = var9;
            var7 = var7 + 1;
            if (var7 < var5) {
                _fun6300_ip = 1731;
                continue _fun6300
            }
        case 1758:
            var3 = var3 + 1;
            if (var3 < var5) {
                _fun6300_ip = 1725;
                continue _fun6300
            }
        case 1765:
            var _closure1_slot6 = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [206, 489]);