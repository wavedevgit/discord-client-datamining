// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun66820: for (var _fun66820_ip = 0;;) switch (_fun66820_ip) {
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
            case 72: // try_end0
                _fun66820_ip = 76;
                continue _fun66820;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var3 = true;
    var6.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var6);
    var2.Chi = var0;
    var2.Maj = var0;
    var2.HashMD = var0;
    var3 = function arg0, arg1, arg2() {
        var0 = arg0;
        var1 = arg1;
        var1 = var0 & var1;
        var2 = ~var0;
        var0 = arg2;
        var0 = var2 & var0;
        var0 = var1 ^ var0;
        return var0;
    };
    var2.Chi = var3;
    var3 = function arg0, arg1, arg2() {
        var1 = arg0;
        var2 = arg1;
        var0 = arg2;
        var3 = var1 & var2;
        var1 = var1 & var0;
        var1 = var3 ^ var1;
        var0 = var2 & var0;
        var0 = var1 ^ var0;
        return var0;
    };
    var2.Maj = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Hash;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0, arg1, arg2, arg3() {
            _fun66826: for (var _fun66826_ip = 0;;) switch (_fun66826_ip) {
                case 0:
                    var5 = arg0;
                    var4 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot6;
                    var10 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun66826_ip = 65;
                        continue _fun66826
                    }
                case 52:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var4, var3);
                    _fun66826_ip = 103;
                    continue _fun66826;
                case 65:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var3)(var4);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var0.blockLen = var5;
                    var2 = arg1;
                    var0.outputLen = var2;
                    var2 = arg2;
                    var0.padOffset = var2;
                    var2 = arg3;
                    var0.isLE = var2;
                    var2 = false;
                    var0.finished = var2;
                    var4 = 0;
                    var0.length = var4;
                    var0.pos = var4;
                    var0.destroyed = var2;
                    var2 = global;
                    var2 = var2.Uint8Array;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var14 = var4;
                    var13 = var5;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var0.buffer = var2;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 6;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.createView;
                    var1 = var0.buffer;
                    var1 = var2.bind(var3)(var1);
                    var0.view = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'update';
        var4.key = var0;
        var0 = function arg0() {
            _fun66827: for (var _fun66827_ip = 0;;) switch (_fun66827_ip) {
                case 0:
                    var0 = this;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var3 = 7;
                    var3 = var1[var3];
                    var11 = undefined;
                    var3 = var2.bind(var11)(var3);
                    var3 = var3.exists;
                    var3 = var3.bind(var11)(var0);
                    var10 = var0.view;
                    var9 = var0.buffer;
                    var8 = var0.blockLen;
                    var7 = 6;
                    var1 = var1[var7];
                    var1 = var2.bind(var11)(var1);
                    var2 = var1.toBytes;
                    var1 = arg0;
                    var1 = var2.bind(var11)(var1);
                    var6 = var1.length;
                    var5 = 0;
                    var13 = var5 < var6;
                    var4 = global;
                    var3 = 0;
                    var2 = undefined;
                    if (!var13) {
                        _fun66827_ip = 326;
                        continue _fun66827
                    }
                case 106:
                    var16 = var4.Math;
                    var15 = var16.min;
                    var13 = var0.pos;
                    var14 = var8 - var13;
                    var13 = var6 - var3;
                    var15 = var15.bind(var16)(var14, var13);
                    if (!(var15 === var8)) {
                        _fun66827_ip = 223;
                        continue _fun66827
                    }
                case 140:
                    var14 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var13 = var13[var7];
                    var13 = var14.bind(var11)(var13);
                    var13 = var13.createView;
                    var18 = var13.bind(var11)(var1);
                    var16 = var6 - var3;
                    var17 = var3;
                    var13 = var17;
                    var14 = var18;
                    if (!(var8 <= var16)) {
                        _fun66827_ip = 313;
                        continue _fun66827
                    }
                case 188:
                    var16 = var0.process;
                    var16 = var16.bind(var0)(var18, var17);
                    var19 = var17 + var8;
                    var16 = var6 - var19;
                    var17 = var19;
                    var13 = var17;
                    var14 = var18;
                    if (var8 <= var16) {
                        _fun66827_ip = 188;
                        continue _fun66827
                    }
                case 221:
                    _fun66827_ip = 313;
                    continue _fun66827;
                case 223:
                    var18 = var9.set;
                    var17 = var1.subarray;
                    var16 = var3 + var15;
                    var17 = var17.bind(var1)(var3, var16);
                    var16 = var0.pos;
                    var16 = var18.bind(var9)(var17, var16);
                    var16 = var0.pos;
                    var16 = var16 + var15;
                    var0.pos = var16;
                    var15 = var3 + var15;
                    var16 = var0.pos;
                    var13 = var15;
                    var14 = var2;
                    if (!(var16 === var8)) {
                        _fun66827_ip = 313;
                        continue _fun66827
                    }
                case 289:
                    var16 = var0.process;
                    var16 = var16.bind(var0)(var10, var5);
                    var0.pos = var5;
                    var13 = var15;
                    var14 = var2;
                case 313:
                    var3 = var13;
                    var2 = var14;
                    if (var3 < var6) {
                        _fun66827_ip = 106;
                        continue _fun66827
                    }
                case 326:
                    var2 = var0.length;
                    var1 = var1.length;
                    var1 = var2 + var1;
                    var0.length = var1;
                    var1 = var0.roundClean;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'digestInto';
        var4.key = var6;
        var6 = function arg0() {
            _fun66828: for (var _fun66828_ip = 0;;) switch (_fun66828_ip) {
                case 0:
                    var4 = arg0;
                    var8 = this;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 7;
                    var6 = var5[var0];
                    var1 = undefined;
                    var6 = var2.bind(var1)(var6);
                    var6 = var6.exists;
                    var6 = var6.bind(var1)(var8);
                    var0 = var5[var0];
                    var0 = var2.bind(var1)(var0);
                    var0 = var0.output;
                    var0 = var0.bind(var1)(var4, var8);
                    var0 = true;
                    var8.finished = var0;
                    var9 = var8.buffer;
                    var6 = var8.view;
                    var0 = var8.blockLen;
                    var7 = var8.isLE;
                    var2 = var8.pos;
                    var10 = parseFloat(var2);
                    var5 = var10 + 1;
                    var2 = 128;
                    var9[var10] = var2;
                    var10 = var8.buffer;
                    var2 = var10.subarray;
                    var11 = var2.bind(var10)(var5);
                    var10 = var11.fill;
                    var2 = 0;
                    var10 = var10.bind(var11)(var2);
                    var11 = var8.padOffset;
                    var10 = var0 - var5;
                    if (!(var11 > var10)) {
                        _fun66828_ip = 171;
                        continue _fun66828
                    }
                case 157:
                    var10 = var8.process;
                    var10 = var10.bind(var8)(var6, var2);
                    var5 = 0;
                case 171:
                    if (!(var5 < var0)) {
                        _fun66828_ip = 186;
                        continue _fun66828
                    }
                case 175:
                    var9[var5] = var2;
                    var5 = var5 + 1;
                    if (var5 < var0) {
                        _fun66828_ip = 175;
                        continue _fun66828
                    }
                case 186:
                    var10 = 8;
                    var11 = var0 - var10;
                    var0 = global;
                    var9 = var0.BigInt;
                    var5 = var8.length;
                    var5 = var10 * var5;
                    var10 = var9.bind(var1)(var5);
                    var5 = var6.setBigUint64;
                    var9 = 'function';
                    var5 = typeof var5;
                    if (!(var9 !== var5)) {
                        _fun66828_ip = 358;
                        continue _fun66828
                    }
                case 235:
                    var9 = var0.BigInt;
                    var5 = 32;
                    var9 = var9.bind(var1)(var5);
                    var12 = var0.BigInt;
                    var5 = 4294967295.0;
                    var5 = var12.bind(var1)(var5);
                    var12 = var0.Number;
                    var9 = var10 >> var9;
                    var9 = var9 & var5;
                    var14 = var12.bind(var1)(var9);
                    var9 = var0.Number;
                    var5 = var10 & var5;
                    var12 = var9.bind(var1)(var5);
                    var9 = 0;
                    if (!var7) {
                        _fun66828_ip = 312;
                        continue _fun66828
                    }
                case 309:
                    var9 = 4;
                case 312:
                    var5 = 4;
                    if (!var7) {
                        _fun66828_ip = 320;
                        continue _fun66828
                    }
                case 318:
                    var5 = 0;
                case 320:
                    var13 = var6.setUint32;
                    var9 = var11 + var9;
                    var9 = var13.bind(var6)(var9, var14, var7);
                    var9 = var6.setUint32;
                    var5 = var11 + var5;
                    var5 = var9.bind(var6)(var5, var12, var7);
                    var5 = undefined;
                    _fun66828_ip = 371;
                    continue _fun66828;
                case 358:
                    var9 = var6.setBigUint64;
                    var5 = var9.bind(var6)(var11, var10, var7);
                case 371:
                    var5 = !var5;
                    var5 = var8.process;
                    var5 = var5.bind(var8)(var6, var2);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 6;
                    var3 = var6[var3];
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.createView;
                    var6 = var3.bind(var1)(var4);
                    var3 = var8.outputLen;
                    var5 = 4;
                    var4 = var3 % var5;
                    if (var4) {
                        _fun66828_ip = 525;
                        continue _fun66828
                    }
                case 433:
                    var4 = var3 / var5;
                    var3 = var8.get;
                    var3 = var3.bind(var8)();
                    var8 = var3.length;
                    if (!(!(var4 > var8))) {
                        _fun66828_ip = 491;
                        continue _fun66828
                    }
                case 455:
                    var2 = 0;
                    if (!(var2 < var4)) {
                        _fun66828_ip = 489;
                        continue _fun66828
                    }
                case 461:
                    var10 = var6.setUint32;
                    var9 = var5 * var2;
                    var8 = var3[var2];
                    var8 = var10.bind(var6)(var9, var8, var7);
                    var2 = var2 + 1;
                    if (var2 < var4) {
                        _fun66828_ip = 461;
                        continue _fun66828
                    }
                case 489:
                    return var1;
                case 491:
                    var3 = var0.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var17 = '_sha2: outputLen bigger than state';
                    var18 = var2;
                    var1 = new var18[var3](var17, var16);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 525:
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var17 = '_sha2: outputLen should be aligned to 32bit';
                    var18 = var1;
                    var0 = new var18[var2](var17, var16);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'digest';
        var4.key = var6;
        var6 = function() {
            var2 = this;
            var4 = var2.buffer;
            var3 = var2.outputLen;
            var0 = var2.digestInto;
            var0 = var0.bind(var2)(var4);
            var1 = var4.slice;
            var0 = 0;
            var0 = var1.bind(var4)(var0, var3);
            var1 = var2.destroy;
            var1 = var1.bind(var2)();
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = '_cloneInto';
        var4.key = var6;
        var5 = function arg0() {
            _fun66830: for (var _fun66830_ip = 0;;) switch (_fun66830_ip) {
                case 0:
                    var0 = arg0;
                    var6 = this;
                    if (var0) {
                        _fun66830_ip = 34;
                        continue _fun66830
                    }
                case 9:
                    var1 = var6.constructor;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var10 = var2;
                    var1 = new var10[var1](var9);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 34:
                    var3 = var0.set;
                    var2 = var3.apply;
                    var5 = _closure1_slot2;
                    var1 = var6.get;
                    var4 = var1.bind(var6)();
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var2.bind(var3)(var0, var1);
                    var2 = var6.blockLen;
                    var3 = var6.buffer;
                    var1 = var6.length;
                    var5 = var6.finished;
                    var4 = var6.destroyed;
                    var6 = var6.pos;
                    var0.length = var1;
                    var0.pos = var6;
                    var0.finished = var5;
                    var0.destroyed = var4;
                    var1 = var1 % var2;
                    if (!var1) {
                        _fun66830_ip = 154;
                        continue _fun66830
                    }
                case 138:
                    var2 = var0.buffer;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
                case 154:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.HashMD = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 6, 7, 15, 17, 18, 8253, 8254]);