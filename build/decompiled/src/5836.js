// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun51384: for (var _fun51384_ip = 0;;) switch (_fun51384_ip) {
        case 0:
            var17 = require;
            var8 = dependencyMap;
            var6 = var17;
            var _closure1_slot0 = var17;
            var1 = var8;
            var _closure1_slot1 = var8;
            var0 = undefined;
            var15 = undefined;
            var16 = undefined;
            var4 = undefined;
            var2 = function arg0, arg1() {
                _fun51385: for (var _fun51385_ip = 0;;) switch (_fun51385_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = arg1;
                        var2 = this;
                        var1 = _closure1_slot7;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun51385_ip = 54;
                            continue _fun51385
                        }
                    case 22:
                        var1 = _closure1_slot7;
                        var5 = var1.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var1
                            }
                        });
                        var16 = var5;
                        var15 = var0;
                        var14 = var3;
                        var1 = new var16[var1](var15, var14, var13);
                        var1 = var1 instanceof Object ? var1 : var5;
                        return var1;
                    case 54:
                        var1 = var3;
                        if (!var3) {
                            _fun51385_ip = 68;
                            continue _fun51385
                        }
                    case 60:
                        var5 = _closure1_slot4;
                        var1 = var3 in var5;
                    case 68:
                        if (!var1) {
                            _fun51385_ip = 73;
                            continue _fun51385
                        }
                    case 71:
                        var3 = null;
                    case 73:
                        if (!var3) {
                            _fun51385_ip = 145;
                            continue _fun51385
                        }
                    case 76:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 2;
                        var5 = var5[var1];
                        var1 = undefined;
                        var1 = var6.bind(var1)(var5);
                        var1 = var3 in var1;
                        if (var1) {
                            _fun51385_ip = 145;
                            continue _fun51385
                        }
                    case 105:
                        var1 = global;
                        var6 = var1.Error;
                        var1 = 'Unknown model: ';
                        var15 = var1 + var3;
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var6
                            }
                        });
                        var16 = var5;
                        var1 = new var16[var6](var15, var14);
                        var1 = var1 instanceof Object ? var1 : var5;
                        throw var1;
                    case 145:
                        var1 = null;
                        if (!(var1 != var0)) {
                            _fun51385_ip = 946;
                            continue _fun51385
                        }
                    case 154:
                        var5 = _closure1_slot7;
                        var5 = var0 instanceof var5;
                        if (var5) {
                            _fun51385_ip = 898;
                            continue _fun51385
                        }
                    case 168:
                        var5 = typeof var0;
                        var6 = 'string';
                        if (!(var6 !== var5)) {
                            _fun51385_ip = 710;
                            continue _fun51385
                        }
                    case 182:
                        var6 = var0.length;
                        var8 = 0;
                        if (!(!(var6 > var8))) {
                            _fun51385_ip = 580;
                            continue _fun51385
                        }
                    case 196:
                        var10 = 'number';
                        if (!(var10 !== var5)) {
                            _fun51385_ip = 505;
                            continue _fun51385
                        }
                    case 207:
                        var11 = 1;
                        var2.valpha = var11;
                        var5 = global;
                        var7 = var5.Object;
                        var6 = var7.keys;
                        var7 = var6.bind(var7)(var0);
                        var12 = 'alpha';
                        var6 = var12 in var0;
                        if (!var6) {
                            _fun51385_ip = 295;
                            continue _fun51385
                        }
                    case 245:
                        var9 = var7.splice;
                        var6 = var7.indexOf;
                        var6 = var6.bind(var7)(var12);
                        var6 = var9.bind(var7)(var6, var11);
                        var6 = var0.alpha;
                        var9 = typeof var6;
                        var6 = 0;
                        if (!(var10 === var9)) {
                            _fun51385_ip = 289;
                            continue _fun51385
                        }
                    case 283:
                        var6 = var0.alpha;
                    case 289:
                        var2.valpha = var6;
                    case 295:
                        var6 = var7.sort;
                        var9 = var6.bind(var7)();
                        var7 = var9.join;
                        var6 = '';
                        var6 = var7.bind(var9)(var6);
                        var7 = _closure1_slot5;
                        var7 = var6 in var7;
                        if (var7) {
                            _fun51385_ip = 385;
                            continue _fun51385
                        }
                    case 330:
                        var9 = var5.Error;
                        var7 = var5.JSON;
                        var5 = var7.stringify;
                        var7 = var5.bind(var7)(var0);
                        var5 = 'Unable to parse color from object: ';
                        var15 = var5 + var7;
                        var7 = var9.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var9
                            }
                        });
                        var16 = var7;
                        var5 = new var16[var9](var15, var14);
                        var5 = var5 instanceof Object ? var5 : var7;
                        throw var5;
                    case 385:
                        var5 = _closure1_slot5;
                        var5 = var5[var6];
                        var2.model = var5;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var5 = 2;
                        var5 = var7[var5];
                        var7 = undefined;
                        var6 = var6.bind(var7)(var5);
                        var5 = var2.model;
                        var5 = var6[var5];
                        var10 = var5.labels;
                        var5 = new Array(0);
                        var6 = var10.length;
                        var6 = var8 < var6;
                        var9 = 0;
                        if (!var6) {
                            _fun51385_ip = 485;
                            continue _fun51385
                        }
                    case 455:
                        var11 = var5.push;
                        var6 = var10[var9];
                        var6 = var0[var6];
                        var6 = var11.bind(var5)(var6);
                        var9 = var9 + 1;
                        var6 = var10.length;
                        if (var9 < var6) {
                            _fun51385_ip = 455;
                            continue _fun51385
                        }
                    case 485:
                        var6 = _closure1_slot8;
                        var6 = var6.bind(var7)(var5);
                        var2.color = var5;
                        _fun51385_ip = 979;
                        continue _fun51385;
                    case 505:
                        var5 = 'rgb';
                        var2.model = var5;
                        var5 = 16;
                        var7 = var0 >> var5;
                        var5 = new Array(3);
                        var6 = 255;
                        var7 = var7 & var6;
                        var5[0] = var7;
                        var7 = 8;
                        var7 = var0 >> var7;
                        var7 = var7 & var6;
                        var5[1] = var7;
                        var6 = var6 & var0;
                        var5[2] = var6;
                        var2.color = var5;
                        var5 = 1;
                        var2.valpha = var5;
                        _fun51385_ip = 979;
                        continue _fun51385;
                    case 580:
                        if (var3) {
                            _fun51385_ip = 587;
                            continue _fun51385
                        }
                    case 583:
                        var3 = 'rgb';
                    case 587:
                        var2.model = var3;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 2;
                        var3 = var6[var3];
                        var7 = undefined;
                        var5 = var5.bind(var7)(var3);
                        var3 = var2.model;
                        var3 = var5[var3];
                        var5 = var3.channels;
                        var3 = global;
                        var3 = var3.Array;
                        var3 = var3.prototype;
                        var6 = var3.slice;
                        var3 = var6.call;
                        var3 = var3.bind(var6)(var0, var8, var5);
                        var6 = _closure1_slot8;
                        var6 = var6.bind(var7)(var3, var5);
                        var2.color = var3;
                        var6 = var0[var5];
                        var3 = 1;
                        var7 = 'number';
                        var6 = typeof var6;
                        if (!(var7 === var6)) {
                            _fun51385_ip = 699;
                            continue _fun51385
                        }
                    case 695:
                        var3 = var0[var5];
                    case 699:
                        var2.valpha = var3;
                        _fun51385_ip = 979;
                        continue _fun51385;
                    case 710:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 3;
                        var3 = var6[var3];
                        var6 = undefined;
                        var5 = var5.bind(var6)(var3);
                        var3 = var5.get;
                        var3 = var3.bind(var5)(var0);
                        if (!(var1 !== var3)) {
                            _fun51385_ip = 858;
                            continue _fun51385
                        }
                    case 746:
                        var1 = var3.model;
                        var2.model = var1;
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var1 = 2;
                        var1 = var7[var1];
                        var5 = var5.bind(var6)(var1);
                        var1 = var2.model;
                        var1 = var5[var1];
                        var5 = var1.channels;
                        var7 = var3.value;
                        var6 = var7.slice;
                        var1 = 0;
                        var1 = var6.bind(var7)(var1, var5);
                        var2.color = var1;
                        var1 = var3.value;
                        var6 = var1[var5];
                        var1 = 1;
                        var7 = 'number';
                        var6 = typeof var6;
                        if (!(var7 === var6)) {
                            _fun51385_ip = 850;
                            continue _fun51385
                        }
                    case 841:
                        var3 = var3.value;
                        var1 = var3[var5];
                    case 850:
                        var2.valpha = var1;
                        _fun51385_ip = 979;
                        continue _fun51385;
                    case 858:
                        var1 = global;
                        var5 = var1.Error;
                        var1 = 'Unable to parse color from string: ';
                        var15 = var1 + var0;
                        var3 = var5.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var16 = var3;
                        var1 = new var16[var5](var15, var14);
                        var1 = var1 instanceof Object ? var1 : var3;
                        throw var1;
                    case 898:
                        var1 = var0.model;
                        var2.model = var1;
                        var5 = _closure1_slot3;
                        var3 = var0.color;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var3);
                        var2.color = var1;
                        var0 = var0.valpha;
                        var2.valpha = var0;
                        _fun51385_ip = 979;
                        continue _fun51385;
                    case 946:
                        var0 = 'rgb';
                        var2.model = var0;
                        var0 = [0, 0, 0];
                        var2.color = var0;
                        var0 = 1;
                        var2.valpha = var0;
                    case 979:
                        var1 = _closure1_slot6;
                        var0 = var2.model;
                        var0 = var1[var0];
                        if (!var0) {
                            _fun51385_ip = 1094;
                            continue _fun51385
                        }
                    case 996:
                        var1 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 2;
                        var0 = var3[var0];
                        var3 = undefined;
                        var1 = var1.bind(var3)(var0);
                        var0 = var2.model;
                        var0 = var1[var0];
                        var1 = var0.channels;
                        var0 = 0;
                        var5 = var0 < var1;
                        if (!var5) {
                            _fun51385_ip = 1094;
                            continue _fun51385
                        }
                    case 1043:
                        var6 = _closure1_slot6;
                        var5 = var2.model;
                        var5 = var6[var5];
                        var7 = var5[var0];
                        if (!var7) {
                            _fun51385_ip = 1087;
                            continue _fun51385
                        }
                    case 1064:
                        var6 = var2.color;
                        var5 = var2.color;
                        var5 = var5[var0];
                        var5 = var7.bind(var3)(var5);
                        var6[var0] = var5;
                    case 1087:
                        var0 = var0 + 1;
                        if (var0 < var1) {
                            _fun51385_ip = 1043;
                            continue _fun51385
                        }
                    case 1094:
                        var0 = global;
                        var5 = var0.Math;
                        var4 = var5.max;
                        var7 = var0.Math;
                        var6 = var7.min;
                        var3 = var2.valpha;
                        var1 = 1;
                        var3 = var6.bind(var7)(var1, var3);
                        var1 = 0;
                        var1 = var4.bind(var5)(var1, var3);
                        var2.valpha = var1;
                        var1 = var0.Object;
                        var1 = var1.freeze;
                        if (!var1) {
                            _fun51385_ip = 1179;
                            continue _fun51385
                        }
                    case 1162:
                        var1 = var0.Object;
                        var0 = var1.freeze;
                        var0 = var0.bind(var1)(var2);
                    case 1179:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot7 = var2;
            var10 = function arg0, arg1, arg2() {
                _fun51386: for (var _fun51386_ip = 0;;) switch (_fun51386_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = arg1;
                        var1 = arg2;
                        var _closure2_slot0 = var3;
                        var6 = var2;
                        var _closure2_slot1 = var2;
                        var7 = var1;
                        var _closure2_slot2 = var1;
                        var5 = undefined;
                        var8 = undefined;
                        var1 = global;
                        var2 = var1.Array;
                        var1 = var2.isArray;
                        var1 = var1.bind(var2)(var3);
                        var2 = var3;
                        if (var1) {
                            _fun51386_ip = 68;
                            continue _fun51386
                        }
                    case 57:
                        var1 = new Array(1);
                        var1[0] = var3;
                        var2 = var1;
                    case 68:
                        _closure2_slot0 = var2;
                        var4 = var2;
                        var3 = var4[Symbol.iterator];
                        var4 = var3().next;
                    case 81:
                        var11 = var4().value;
                        var9 = var3;
                        if (!(var9 !== var5)) {
                            _fun51386_ip = 149;
                            continue _fun51386
                        }
                    case 92: // try_start_0
                        var8 = var11;
                        var10 = _closure1_slot6;
                        var10 = var10[var11];
                        var9 = var10;
                        if (var10) {
                            _fun51386_ip = 127;
                            continue _fun51386
                        }
                    case 109:
                        var12 = _closure1_slot6;
                        var11 = var8;
                        var10 = new Array(0);
                        var12[var11] = var10;
                        var9 = var10;
                    case 127:
                        var11 = var9;
                        var10 = var6;
                        var9 = var7;
                        var11[var10] = var9;
                    case 140: // try_end0
                        _fun51386_ip = 81;
                        continue _fun51386;
                    case 142: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3.return();
                        throw var1;
                    case 149:
                        var1 = 0;
                        var1 = var2[var1];
                        _closure2_slot0 = var1;
                        var0 = function(arg0) { // Environment: var0
                            _fun51387: for (var _fun51387_ip = 0;;) switch (_fun51387_ip) {
                                case 0:
                                    var6 = arg0;
                                    var3 = this;
                                    var5 = undefined;
                                    if (!(var5 === var6)) {
                                        _fun51387_ip = 60;
                                        continue _fun51387
                                    }
                                case 11:
                                    var0 = _closure2_slot0;
                                    var0 = var3[var0];
                                    var0 = var0.bind(var3)();
                                    var2 = var0.color;
                                    var0 = _closure2_slot1;
                                    var2 = var2[var0];
                                    var4 = _closure2_slot2;
                                    var0 = var2;
                                    if (!var4) {
                                        _fun51387_ip = 58;
                                        continue _fun51387
                                    }
                                case 49:
                                    var1 = _closure2_slot2;
                                    var0 = var1.bind(var5)(var2);
                                case 58:
                                    _fun51387_ip = 110;
                                    continue _fun51387;
                                case 60:
                                    var1 = _closure2_slot2;
                                    var4 = var6;
                                    if (!var1) {
                                        _fun51387_ip = 82;
                                        continue _fun51387
                                    }
                                case 73:
                                    var1 = _closure2_slot2;
                                    var4 = var1.bind(var5)(var6);
                                case 82:
                                    var1 = _closure2_slot0;
                                    var1 = var3[var1];
                                    var1 = var1.bind(var3)();
                                    var3 = var1.color;
                                    var2 = _closure2_slot1;
                                    var3[var2] = var4;
                                    var0 = var1;
                                case 110:
                                    return var0;
                            }
                        };
                        return var0;
                }
            };
            var12 = function arg0() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var0 = function(arg0) { // Environment: var0
                    var0 = global;
                    var3 = var0.Math;
                    var2 = var3.max;
                    var5 = var0.Math;
                    var4 = var5.min;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var1 = var4.bind(var5)(var1, var0);
                    var0 = 0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                return var0;
            };
            var3 = function arg0, arg1() {
                _fun51390: for (var _fun51390_ip = 0;;) switch (_fun51390_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = arg1;
                        var3 = 0;
                        var5 = var3 < var4;
                        var2 = 'number';
                        var1 = 0;
                        if (!var5) {
                            _fun51390_ip = 43;
                            continue _fun51390
                        }
                    case 21:
                        var5 = var0[var1];
                        var5 = typeof var5;
                        if (!(var2 !== var5)) {
                            _fun51390_ip = 36;
                            continue _fun51390
                        }
                    case 32:
                        var0[var1] = var3;
                    case 36:
                        var1 = var1 + 1;
                        if (var1 < var4) {
                            _fun51390_ip = 21;
                            continue _fun51390
                        }
                    case 43:
                        return var0;
                }
            };
            var _closure1_slot8 = var3;
            var13 = 0;
            var3 = var8[var13];
            var3 = var17.bind(var0)(var3);
            var _closure1_slot2 = var3;
            var11 = 1;
            var3 = var8[var11];
            var3 = var17.bind(var0)(var3);
            var15 = var3;
            var _closure1_slot3 = var3;
            var3 = ['keyword', 'gray', 'hex'];
            var _closure1_slot4 = var3;
            var3 = {};
            var16 = var3;
            var _closure1_slot5 = var3;
            var3 = global;
            var14 = var3.Object;
            var9 = var14.keys;
            var7 = 2;
            var8 = var8[var7];
            var8 = var17.bind(var0)(var8);
            var8 = var9.bind(var14)(var8);
            var14 = var8;
            var9 = var14[Symbol.iterator];
            var14 = var9().next;
            var8 = '';
        case 155:
            var19 = var14().value;
            var17 = var9;
            if (!(var17 !== var0)) {
                _fun51384_ip = 235;
                continue _fun51384
            }
        case 166: // try_start_0
            var18 = var16;
            var20 = var15;
            var21 = var6;
            var17 = var1;
            var17 = var17[var7];
            var17 = var21.bind(var0)(var17);
            var17 = var17[var19];
            var17 = var17.labels;
            var20 = var20.bind(var0)(var17);
            var17 = var20.sort;
            var20 = var17.bind(var20)();
            var17 = var20.join;
            var17 = var17.bind(var20)(var8);
            var18[var17] = var19;
        case 226: // try_end0
            _fun51384_ip = 155;
            continue _fun51384;
        case 228: // catch_target0
            CatchBlockStart(arg_register = 8);
            var9.return();
            throw var8;
        case 235:
            var8 = {};
            var _closure1_slot6 = var8;
            var8 = {};
            var9 = function() {
                var1 = this;
                var0 = var1.string;
                var0 = var0.bind(var1)();
                return var0;
            };
            var8.toString = var9;
            var9 = function() {
                var1 = this;
                var0 = var1.model;
                var0 = var1[var0];
                var0 = var0.bind(var1)();
                return var0;
            };
            var8.toJSON = var9;
            var9 = function arg0() {
                _fun51393: for (var _fun51393_ip = 0;;) switch (_fun51393_ip) {
                    case 0:
                        var8 = arg0;
                        var2 = this;
                        var3 = var2.model;
                        var6 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var5 = 3;
                        var0 = var0[var5];
                        var4 = undefined;
                        var0 = var6.bind(var4)(var0);
                        var0 = var0.to;
                        var0 = var3 in var0;
                        var7 = var2;
                        if (var0) {
                            _fun51393_ip = 61;
                            continue _fun51393
                        }
                    case 51:
                        var0 = var2.rgb;
                        var7 = var0.bind(var2)();
                    case 61:
                        var3 = var7.round;
                        var6 = 1;
                        var10 = 'number';
                        var9 = typeof var8;
                        var0 = var6;
                        if (!(var10 === var9)) {
                            _fun51393_ip = 86;
                            continue _fun51393
                        }
                    case 83:
                        var0 = var8;
                    case 86:
                        var0 = var3.bind(var7)(var0);
                        var3 = var0.valpha;
                        if (!(var6 !== var3)) {
                            _fun51393_ip = 146;
                            continue _fun51393
                        }
                    case 101:
                        var7 = new Array(0);
                        var6 = var7.concat;
                        var8 = _closure1_slot3;
                        var3 = var0.color;
                        var3 = var8.bind(var4)(var3);
                        var8 = var2.valpha;
                        var2 = new Array(1);
                        var2[0] = var8;
                        var2 = var6.bind(var7)(var3, var2);
                        _fun51393_ip = 151;
                        continue _fun51393;
                    case 146:
                        var2 = var0.color;
                    case 151:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var5];
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.to;
                        var0 = var0.model;
                        var0 = var1[var0];
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var8.string = var9;
            var9 = function arg0() {
                _fun51394: for (var _fun51394_ip = 0;;) switch (_fun51394_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = this;
                        var0 = var1.rgb;
                        var4 = var0.bind(var1)();
                        var2 = var4.round;
                        var3 = 1;
                        var7 = 'number';
                        var6 = typeof var5;
                        var0 = var3;
                        if (!(var7 === var6)) {
                            _fun51394_ip = 40;
                            continue _fun51394
                        }
                    case 37:
                        var0 = var5;
                    case 40:
                        var0 = var2.bind(var4)(var0);
                        var2 = var0.valpha;
                        if (!(var3 !== var2)) {
                            _fun51394_ip = 105;
                            continue _fun51394
                        }
                    case 55:
                        var4 = new Array(0);
                        var3 = var4.concat;
                        var6 = _closure1_slot3;
                        var5 = var0.color;
                        var2 = undefined;
                        var2 = var6.bind(var2)(var5);
                        var5 = var1.valpha;
                        var1 = new Array(1);
                        var1[0] = var5;
                        var2 = var3.bind(var4)(var2, var1);
                        _fun51394_ip = 110;
                        continue _fun51394;
                    case 105:
                        var2 = var0.color;
                    case 110:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 3;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var3.bind(var0)(var1);
                        var0 = var0.to;
                        var1 = var0.rgb;
                        var0 = var1.percent;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var8.percentString = var9;
            var9 = function() {
                _fun51395: for (var _fun51395_ip = 0;;) switch (_fun51395_ip) {
                    case 0:
                        var1 = this;
                        var2 = var1.valpha;
                        var0 = 1;
                        if (!(var0 !== var2)) {
                            _fun51395_ip = 65;
                            continue _fun51395
                        }
                    case 15:
                        var4 = new Array(0);
                        var3 = var4.concat;
                        var5 = _closure1_slot3;
                        var2 = var1.color;
                        var0 = undefined;
                        var2 = var5.bind(var0)(var2);
                        var5 = var1.valpha;
                        var0 = new Array(1);
                        var0[0] = var5;
                        var0 = var3.bind(var4)(var2, var0);
                        _fun51395_ip = 84;
                        continue _fun51395;
                    case 65:
                        var3 = _closure1_slot3;
                        var2 = var1.color;
                        var1 = undefined;
                        var0 = var3.bind(var1)(var2);
                    case 84:
                        return var0;
                }
            };
            var8.array = var9;
            var9 = function() {
                _fun51396: for (var _fun51396_ip = 0;;) switch (_fun51396_ip) {
                    case 0:
                        var1 = this;
                        var0 = {};
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 2;
                        var4 = var6[var2];
                        var3 = undefined;
                        var7 = var5.bind(var3)(var4);
                        var4 = var1.model;
                        var4 = var7[var4];
                        var4 = var4.channels;
                        var2 = var6[var2];
                        var3 = var5.bind(var3)(var2);
                        var2 = var1.model;
                        var2 = var3[var2];
                        var3 = var2.labels;
                        var2 = 0;
                        var5 = var2 < var4;
                        if (!var5) {
                            _fun51396_ip = 103;
                            continue _fun51396
                        }
                    case 79:
                        var6 = var3[var2];
                        var5 = var1.color;
                        var5 = var5[var2];
                        var0[var6] = var5;
                        var2 = var2 + 1;
                        if (var2 < var4) {
                            _fun51396_ip = 79;
                            continue _fun51396
                        }
                    case 103:
                        var3 = var1.valpha;
                        var2 = 1;
                        if (!(var2 !== var3)) {
                            _fun51396_ip = 128;
                            continue _fun51396
                        }
                    case 116:
                        var1 = var1.valpha;
                        var0.alpha = var1;
                    case 128:
                        return var0;
                }
            };
            var8.object = var9;
            var9 = function() {
                _fun51397: for (var _fun51397_ip = 0;;) switch (_fun51397_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.rgb;
                        var0 = var0.bind(var1)();
                        var0 = var0.color;
                        var3 = 0;
                        var2 = var0[var3];
                        var5 = 255;
                        var2 = var2 / var5;
                        var0[var3] = var2;
                        var3 = 1;
                        var2 = var0[var3];
                        var2 = var2 / var5;
                        var0[var3] = var2;
                        var4 = 2;
                        var2 = var0[var4];
                        var2 = var2 / var5;
                        var0[var4] = var2;
                        var2 = var1.valpha;
                        if (!(var3 !== var2)) {
                            _fun51397_ip = 90;
                            continue _fun51397
                        }
                    case 74:
                        var2 = var0.push;
                        var1 = var1.valpha;
                        var1 = var2.bind(var0)(var1);
                    case 90:
                        return var0;
                }
            };
            var8.unitArray = var9;
            var9 = function() {
                _fun51398: for (var _fun51398_ip = 0;;) switch (_fun51398_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.rgb;
                        var2 = var0.bind(var1)();
                        var0 = var2.object;
                        var0 = var0.bind(var2)();
                        var2 = var0.r;
                        var3 = 255;
                        var2 = var2 / var3;
                        var0.r = var2;
                        var2 = var0.g;
                        var2 = var2 / var3;
                        var0.g = var2;
                        var2 = var0.b;
                        var2 = var2 / var3;
                        var0.b = var2;
                        var3 = var1.valpha;
                        var2 = 1;
                        if (!(var2 !== var3)) {
                            _fun51398_ip = 96;
                            continue _fun51398
                        }
                    case 84:
                        var1 = var1.valpha;
                        var0.alpha = var1;
                    case 96:
                        return var0;
                }
            };
            var8.unitObject = var9;
            var9 = function arg0() {
                _fun51399: for (var _fun51399_ip = 0;;) switch (_fun51399_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = this;
                        var1 = global;
                        var3 = var1.Math;
                        var2 = var3.max;
                        if (var4) {
                            _fun51399_ip = 23;
                            continue _fun51399
                        }
                    case 21:
                        var4 = 0;
                    case 23:
                        var1 = 0;
                        var9 = var2.bind(var3)(var4, var1);
                        var3 = _closure1_slot7;
                        var5 = new Array(0);
                        var4 = var5.concat;
                        var6 = _closure1_slot3;
                        var8 = var0.color;
                        var7 = var8.map;
                        var1 = function arg0() {
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var0 = function(arg0) { // Environment: var0
                                var3 = arg0;
                                var1 = _closure3_slot0;
                                var0 = global;
                                var2 = var0.Number;
                                var0 = var3.toFixed;
                                var1 = var0.bind(var3)(var1);
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                        };
                        var2 = undefined;
                        var1 = var1.bind(var2)(var9);
                        var1 = var7.bind(var8)(var1);
                        var2 = var6.bind(var2)(var1);
                        var6 = var0.valpha;
                        var1 = new Array(1);
                        var1[0] = var6;
                        var11 = var4.bind(var5)(var2, var1);
                        var10 = var0.model;
                        var1 = var3.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var12 = var1;
                        var0 = new var12[var3](var11, var10, var9);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
            var8.round = var9;
            var9 = function arg0() {
                _fun51402: for (var _fun51402_ip = 0;;) switch (_fun51402_ip) {
                    case 0:
                        var11 = arg0;
                        var1 = this;
                        var7 = undefined;
                        if (!(var7 === var11)) {
                            _fun51402_ip = 19;
                            continue _fun51402
                        }
                    case 11:
                        var0 = var1.valpha;
                        _fun51402_ip = 130;
                        continue _fun51402;
                    case 19:
                        var4 = _closure1_slot7;
                        var6 = new Array(0);
                        var5 = var6.concat;
                        var3 = _closure1_slot3;
                        var2 = var1.color;
                        var3 = var3.bind(var7)(var2);
                        var2 = global;
                        var9 = var2.Math;
                        var8 = var9.max;
                        var10 = var2.Math;
                        var7 = var10.min;
                        var2 = 1;
                        var7 = var7.bind(var10)(var2, var11);
                        var2 = 0;
                        var7 = var8.bind(var9)(var2, var7);
                        var2 = new Array(1);
                        var2[0] = var7;
                        var13 = var5.bind(var6)(var3, var2);
                        var12 = var1.model;
                        var2 = var4.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var14 = var2;
                        var1 = new var14[var4](var13, var12, var11);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 130:
                        return var0;
                }
            };
            var8.alpha = var9;
            var9 = 255;
            var15 = var12.bind(var0)(var9);
            var14 = 'rgb';
            var15 = var10.bind(var0)(var14, var13, var15);
            var8.red = var15;
            var15 = var12.bind(var0)(var9);
            var15 = var10.bind(var0)(var14, var11, var15);
            var8.green = var15;
            var9 = var12.bind(var0)(var9);
            var9 = var10.bind(var0)(var14, var7, var9);
            var8.blue = var9;
            var14 = ['hsl', 'hsv', 'hsl', 'hwb', 'hcg'];
            var9 = function(arg0) { // Environment: var5
                var0 = arg0;
                var1 = 360;
                var0 = var0 % var1;
                var0 = var0 + var1;
                var0 = var0 % var1;
                return var0;
            };
            var9 = var10.bind(var0)(var14, var13, var9);
            var8.hue = var9;
            var9 = 100;
            var14 = var12.bind(var0)(var9);
            var15 = 'hsl';
            var14 = var10.bind(var0)(var15, var11, var14);
            var8.saturationl = var14;
            var14 = var12.bind(var0)(var9);
            var14 = var10.bind(var0)(var15, var7, var14);
            var8.lightness = var14;
            var14 = var12.bind(var0)(var9);
            var15 = 'hsv';
            var14 = var10.bind(var0)(var15, var11, var14);
            var8.saturationv = var14;
            var14 = var12.bind(var0)(var9);
            var14 = var10.bind(var0)(var15, var7, var14);
            var8.value = var14;
            var14 = var12.bind(var0)(var9);
            var15 = 'hcg';
            var14 = var10.bind(var0)(var15, var11, var14);
            var8.chroma = var14;
            var14 = var12.bind(var0)(var9);
            var14 = var10.bind(var0)(var15, var7, var14);
            var8.gray = var14;
            var14 = var12.bind(var0)(var9);
            var15 = 'hwb';
            var14 = var10.bind(var0)(var15, var11, var14);
            var8.white = var14;
            var14 = var12.bind(var0)(var9);
            var14 = var10.bind(var0)(var15, var7, var14);
            var8.wblack = var14;
            var14 = var12.bind(var0)(var9);
            var16 = 'cmyk';
            var14 = var10.bind(var0)(var16, var13, var14);
            var8.cyan = var14;
            var14 = var12.bind(var0)(var9);
            var14 = var10.bind(var0)(var16, var11, var14);
            var8.magenta = var14;
            var14 = var12.bind(var0)(var9);
            var14 = var10.bind(var0)(var16, var7, var14);
            var8.yellow = var14;
            var15 = var12.bind(var0)(var9);
            var14 = 3;
            var14 = var10.bind(var0)(var16, var14, var15);
            var8.black = var14;
            var14 = 95.047;
            var14 = var12.bind(var0)(var14);
            var15 = 'xyz';
            var14 = var10.bind(var0)(var15, var13, var14);
            var8.x = var14;
            var14 = var12.bind(var0)(var9);
            var14 = var10.bind(var0)(var15, var11, var14);
            var8.y = var14;
            var14 = 108.833;
            var14 = var12.bind(var0)(var14);
            var14 = var10.bind(var0)(var15, var7, var14);
            var8.z = var14;
            var12 = var12.bind(var0)(var9);
            var9 = 'lab';
            var12 = var10.bind(var0)(var9, var13, var12);
            var8.l = var12;
            var11 = var10.bind(var0)(var9, var11);
            var8.a = var11;
            var9 = var10.bind(var0)(var9, var7);
            var8.b = var9;
            var9 = function arg0() {
                _fun51404: for (var _fun51404_ip = 0;;) switch (_fun51404_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = this;
                        var4 = undefined;
                        if (!(var4 === var3)) {
                            _fun51404_ip = 62;
                            continue _fun51404
                        }
                    case 11:
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 2;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var0.model;
                        var2 = var2[var1];
                        var1 = var2.keyword;
                        var0 = var0.color;
                        var0 = var1.bind(var2)(var0);
                        _fun51404_ip = 92;
                        continue _fun51404;
                    case 62:
                        var1 = _closure1_slot7;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var7 = var2;
                        var6 = var3;
                        var1 = new var7[var1](var6, var5);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 92:
                        return var0;
                }
            };
            var8.keyword = var9;
            var9 = function arg0() {
                _fun51405: for (var _fun51405_ip = 0;;) switch (_fun51405_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = this;
                        var2 = undefined;
                        if (!(var2 === var3)) {
                            _fun51405_ip = 76;
                            continue _fun51405
                        }
                    case 11:
                        var1 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var0 = 3;
                        var0 = var5[var0];
                        var0 = var1.bind(var2)(var0);
                        var2 = var0.to;
                        var1 = var2.hex;
                        var0 = var4.rgb;
                        var4 = var0.bind(var4)();
                        var0 = var4.round;
                        var0 = var0.bind(var4)();
                        var0 = var0.color;
                        var0 = var1.bind(var2)(var0);
                        _fun51405_ip = 106;
                        continue _fun51405;
                    case 76:
                        var1 = _closure1_slot7;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var7 = var2;
                        var6 = var3;
                        var1 = new var7[var1](var6, var5);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 106:
                        return var0;
                }
            };
            var8.hex = var9;
            var9 = function arg0() {
                _fun51406: for (var _fun51406_ip = 0;;) switch (_fun51406_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = this;
                        var5 = undefined;
                        if (!(var5 === var2)) {
                            _fun51406_ip = 162;
                            continue _fun51406
                        }
                    case 14:
                        var1 = var0.rgb;
                        var3 = var1.bind(var0)();
                        var1 = var3.round;
                        var1 = var1.bind(var3)();
                        var4 = var1.color;
                        var1 = global;
                        var3 = var1.Math;
                        var1 = var3.round;
                        var6 = var0.valpha;
                        var0 = 255;
                        var0 = var0 * var6;
                        var3 = var1.bind(var3)(var0);
                        var1 = var3.toString;
                        var0 = 16;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.toUpperCase;
                        var3 = var0.bind(var1)();
                        var6 = var3.length;
                        var0 = 1;
                        var1 = var3;
                        if (!(var0 === var6)) {
                            _fun51406_ip = 117;
                            continue _fun51406
                        }
                    case 107:
                        var0 = '0';
                        var1 = var0 + var3;
                    case 117:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var0 = 3;
                        var0 = var6[var0];
                        var0 = var3.bind(var5)(var0);
                        var3 = var0.to;
                        var0 = var3.hex;
                        var0 = var0.bind(var3)(var4);
                        var0 = var0 + var1;
                        return var0;
                    case 162:
                        var0 = _closure1_slot7;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var8 = var1;
                        var7 = var2;
                        var0 = new var8[var0](var7, var6);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
            var8.hexa = var9;
            var9 = function() {
                var1 = this;
                var0 = var1.rgb;
                var0 = var0.bind(var1)();
                var4 = var0.color;
                var0 = 0;
                var0 = var4[var0];
                var1 = 255;
                var2 = var1 & var0;
                var0 = 1;
                var0 = var4[var0];
                var3 = var1 & var0;
                var0 = 2;
                var0 = var4[var0];
                var1 = var1 & var0;
                var0 = 16;
                var2 = var2 << var0;
                var0 = 8;
                var0 = var3 << var0;
                var0 = var2 | var0;
                var0 = var0 | var1;
                return var0;
            };
            var8.rgbNumber = var9;
            var9 = function() {
                _fun51408: for (var _fun51408_ip = 0;;) switch (_fun51408_ip) {
                    case 0:
                        var2 = this;
                        var13 = undefined;
                        var1 = undefined;
                        var14 = undefined;
                        var0 = var2.rgb;
                        var0 = var0.bind(var2)();
                        var2 = var0.color;
                        var1 = new Array(0);
                        var0 = var2.entries;
                        var0 = var0.bind(var2)();
                        var12 = var0;
                        var5 = var12[Symbol.iterator];
                        var12 = var5().next;
                        var11 = 12.92;
                        var10 = 0.055;
                        var9 = 1.055;
                        var8 = 2.4;
                        var3 = 2;
                        var2 = 0;
                        var0 = 1;
                        var6 = 255;
                        var4 = 0.04045;
                    case 107:
                        var16 = var12().value;
                        var15 = var5;
                        if (!(var15 !== var13)) {
                            _fun51408_ip = 190;
                            continue _fun51408
                        }
                    case 118: // try_start_0
                        var15 = _closure1_slot2;
                        var15 = var15.bind(var13)(var16, var3);
                        var17 = var15[var2];
                        var15 = var15[var0];
                        var15 = var15 / var6;
                        var14 = var15;
                        var16 = var1;
                        if (!(!(var15 <= var4))) {
                            _fun51408_ip = 170;
                            continue _fun51408
                        }
                    case 150:
                        var15 = var14;
                        var15 = var15 + var10;
                        var20 = var15 / var9;
                        var19 = var8;
                        var15 = exponentiationOperator(var20, var19);
                        _fun51408_ip = 177;
                        continue _fun51408;
                    case 170:
                        var18 = var14;
                        var15 = var18 / var11;
                    case 177:
                        var16[var17] = var15;
                    case 181: // try_end0
                        _fun51408_ip = 107;
                        continue _fun51408;
                    case 183: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var5.return();
                        throw var4;
                    case 190:
                        var4 = var1[var2];
                        var2 = 0.2126;
                        var2 = var2 * var4;
                        var4 = var1[var0];
                        var0 = 0.7152;
                        var0 = var0 * var4;
                        var3 = var1[var3];
                        var1 = 0.0722;
                        var1 = var1 * var3;
                        var0 = var2 + var0;
                        var0 = var0 + var1;
                        return var0;
                }
            };
            var8.luminosity = var9;
            var9 = function arg0() {
                _fun51409: for (var _fun51409_ip = 0;;) switch (_fun51409_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = this;
                        var0 = var2.luminosity;
                        var2 = var0.bind(var2)();
                        var0 = var1.luminosity;
                        var3 = var0.bind(var1)();
                        if (!(!(var2 > var3))) {
                            _fun51409_ip = 53;
                            continue _fun51409
                        }
                    case 29:
                        var0 = 0.05;
                        var1 = var3 + var0;
                        var0 = var2 + var0;
                        var0 = var1 / var0;
                        _fun51409_ip = 75;
                        continue _fun51409;
                    case 53:
                        var1 = 0.05;
                        var2 = var2 + var1;
                        var1 = var3 + var1;
                        var0 = var2 / var1;
                    case 75:
                        return var0;
                }
            };
            var8.contrast = var9;
            var9 = function arg0() {
                _fun51410: for (var _fun51410_ip = 0;;) switch (_fun51410_ip) {
                    case 0:
                        var2 = this;
                        var1 = var2.contrast;
                        var0 = arg0;
                        var2 = var1.bind(var2)(var0);
                        var0 = 7;
                        var1 = var2 >= var0;
                        var0 = 'AAA';
                        if (var1) {
                            _fun51410_ip = 62;
                            continue _fun51410
                        }
                    case 32:
                        var1 = 4.5;
                        var2 = var2 >= var1;
                        var1 = '';
                        if (!var2) {
                            _fun51410_ip = 59;
                            continue _fun51410
                        }
                    case 53:
                        var1 = 'AA';
                    case 59:
                        var0 = var1;
                    case 62:
                        return var0;
                }
            };
            var8.level = var9;
            var9 = function() {
                var1 = this;
                var0 = var1.rgb;
                var0 = var0.bind(var1)();
                var3 = var0.color;
                var0 = 0;
                var1 = var3[var0];
                var0 = 2126;
                var2 = var0 * var1;
                var0 = 1;
                var1 = var3[var0];
                var0 = 7152;
                var0 = var0 * var1;
                var1 = 2;
                var3 = var3[var1];
                var1 = 722;
                var1 = var1 * var3;
                var0 = var2 + var0;
                var1 = var0 + var1;
                var0 = 10000;
                var1 = var1 / var0;
                var0 = 128;
                var0 = var1 < var0;
                return var0;
            };
            var8.isDark = var9;
            var9 = function() {
                var1 = this;
                var0 = var1.isDark;
                var0 = var0.bind(var1)();
                var0 = !var0;
                return var0;
            };
            var8.isLight = var9;
            var9 = function() {
                _fun51413: for (var _fun51413_ip = 0;;) switch (_fun51413_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.rgb;
                        var0 = var0.bind(var1)();
                        var2 = 255;
                        var1 = 3;
                        var3 = 0;
                    case 20:
                        var5 = var0.color;
                        var4 = var0.color;
                        var4 = var4[var3];
                        var4 = var2 - var4;
                        var5[var3] = var4;
                        var3 = var3 + 1;
                        if (var3 < var1) {
                            _fun51413_ip = 20;
                            continue _fun51413
                        }
                    case 49:
                        return var0;
                }
            };
            var8.negate = var9;
            var9 = function arg0() {
                var1 = this;
                var0 = var1.hsl;
                var0 = var0.bind(var1)();
                var3 = var0.color;
                var2 = 2;
                var4 = var3[var2];
                var1 = var0.color;
                var5 = var1[var2];
                var1 = arg0;
                var1 = var5 * var1;
                var1 = var4 + var1;
                var3[var2] = var1;
                return var0;
            };
            var8.lighten = var9;
            var9 = function arg0() {
                var1 = this;
                var0 = var1.hsl;
                var0 = var0.bind(var1)();
                var3 = var0.color;
                var2 = 2;
                var4 = var3[var2];
                var1 = var0.color;
                var5 = var1[var2];
                var1 = arg0;
                var1 = var5 * var1;
                var1 = var4 - var1;
                var3[var2] = var1;
                return var0;
            };
            var8.darken = var9;
            var9 = function arg0() {
                var1 = this;
                var0 = var1.hsl;
                var0 = var0.bind(var1)();
                var3 = var0.color;
                var2 = 1;
                var4 = var3[var2];
                var1 = var0.color;
                var5 = var1[var2];
                var1 = arg0;
                var1 = var5 * var1;
                var1 = var4 + var1;
                var3[var2] = var1;
                return var0;
            };
            var8.saturate = var9;
            var9 = function arg0() {
                var1 = this;
                var0 = var1.hsl;
                var0 = var0.bind(var1)();
                var3 = var0.color;
                var2 = 1;
                var4 = var3[var2];
                var1 = var0.color;
                var5 = var1[var2];
                var1 = arg0;
                var1 = var5 * var1;
                var1 = var4 - var1;
                var3[var2] = var1;
                return var0;
            };
            var8.desaturate = var9;
            var9 = function arg0() {
                var1 = this;
                var0 = var1.hwb;
                var0 = var0.bind(var1)();
                var3 = var0.color;
                var2 = 1;
                var4 = var3[var2];
                var1 = var0.color;
                var5 = var1[var2];
                var1 = arg0;
                var1 = var5 * var1;
                var1 = var4 + var1;
                var3[var2] = var1;
                return var0;
            };
            var8.whiten = var9;
            var9 = function arg0() {
                var1 = this;
                var0 = var1.hwb;
                var0 = var0.bind(var1)();
                var3 = var0.color;
                var2 = 2;
                var4 = var3[var2];
                var1 = var0.color;
                var5 = var1[var2];
                var1 = arg0;
                var1 = var5 * var1;
                var1 = var4 + var1;
                var3[var2] = var1;
                return var0;
            };
            var8.blacken = var9;
            var9 = function() {
                var1 = this;
                var0 = var1.rgb;
                var0 = var0.bind(var1)();
                var3 = var0.color;
                var0 = 0;
                var1 = var3[var0];
                var0 = 0.3;
                var2 = var0 * var1;
                var0 = 1;
                var1 = var3[var0];
                var0 = 0.59;
                var0 = var0 * var1;
                var1 = 2;
                var3 = var3[var1];
                var1 = 0.11;
                var1 = var1 * var3;
                var0 = var2 + var0;
                var2 = var0 + var1;
                var1 = _closure1_slot7;
                var0 = var1.rgb;
                var0 = var0.bind(var1)(var2, var2, var2);
                return var0;
            };
            var8.grayscale = var9;
            var9 = function arg0() {
                var2 = this;
                var1 = var2.alpha;
                var3 = var2.valpha;
                var4 = var2.valpha;
                var0 = arg0;
                var0 = var4 * var0;
                var0 = var3 - var0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8.fade = var9;
            var9 = function arg0() {
                var2 = this;
                var1 = var2.alpha;
                var3 = var2.valpha;
                var4 = var2.valpha;
                var0 = arg0;
                var0 = var4 * var0;
                var0 = var3 + var0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8.opaquer = var9;
            var9 = function arg0() {
                _fun51423: for (var _fun51423_ip = 0;;) switch (_fun51423_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.hsl;
                        var0 = var0.bind(var1)();
                        var1 = var0.color;
                        var3 = 0;
                        var2 = var1[var3];
                        var1 = arg0;
                        var1 = var2 + var1;
                        var4 = 360;
                        var1 = var1 % var4;
                        var2 = var1;
                        if (!(var2 < var3)) {
                            _fun51423_ip = 51;
                            continue _fun51423
                        }
                    case 47:
                        var2 = var4 + var1;
                    case 51:
                        var1 = var0.color;
                        var1[var3] = var2;
                        return var0;
                }
            };
            var8.rotate = var9;
            var9 = function arg0, arg1() {
                _fun51424: for (var _fun51424_ip = 0;;) switch (_fun51424_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = arg1;
                        var2 = this;
                        if (!var3) {
                            _fun51424_ip = 20;
                            continue _fun51424
                        }
                    case 11:
                        var1 = var3.rgb;
                        if (var1) {
                            _fun51424_ip = 63;
                            continue _fun51424
                        }
                    case 20:
                        var1 = global;
                        var5 = var1.Error;
                        var1 = var5.prototype;
                        var4 = Object.create(var1, {
                            constructor: {
                                value: var5
                            }
                        });
                        var6 = 'Argument to "mix" was not a Color instance, but rather an instance of ';
                        var1 = typeof var3;
                        var16 = var6 + var1;
                        var17 = var4;
                        var1 = new var17[var5](var16, var15);
                        var1 = var1 instanceof Object ? var1 : var4;
                        throw var1;
                    case 63:
                        var1 = var3.rgb;
                        var10 = var1.bind(var3)();
                        var1 = var2.rgb;
                        var12 = var1.bind(var2)();
                        var11 = 0.5;
                        var1 = undefined;
                        if (!(var1 !== var0)) {
                            _fun51424_ip = 102;
                            continue _fun51424
                        }
                    case 99:
                        var11 = var0;
                    case 102:
                        var1 = 2;
                        var0 = var1 * var11;
                        var3 = 1;
                        var5 = var0 - var3;
                        var0 = var10.alpha;
                        var2 = var0.bind(var10)();
                        var0 = var12.alpha;
                        var0 = var0.bind(var12)();
                        var2 = var2 - var0;
                        var6 = var5 * var2;
                        var4 = -1;
                        var0 = var5;
                        if (!(var6 !== var4)) {
                            _fun51424_ip = 173;
                            continue _fun51424
                        }
                    case 157:
                        var4 = var5 + var2;
                        var2 = var5 * var2;
                        var2 = var3 + var2;
                        var0 = var4 / var2;
                    case 173:
                        var0 = var0 + var3;
                        var6 = var0 / var1;
                        var9 = var3 - var6;
                        var5 = _closure1_slot7;
                        var4 = var5.rgb;
                        var0 = var10.red;
                        var0 = var0.bind(var10)();
                        var8 = var6 * var0;
                        var0 = var12.red;
                        var0 = var0.bind(var12)();
                        var2 = var9 * var0;
                        var0 = var10.green;
                        var0 = var0.bind(var10)();
                        var7 = var6 * var0;
                        var0 = var12.green;
                        var0 = var0.bind(var12)();
                        var1 = var9 * var0;
                        var0 = var10.blue;
                        var0 = var0.bind(var10)();
                        var6 = var6 * var0;
                        var0 = var12.blue;
                        var0 = var0.bind(var12)();
                        var0 = var9 * var0;
                        var9 = var10.alpha;
                        var9 = var9.bind(var10)();
                        var9 = var9 * var11;
                        var10 = var12.alpha;
                        var10 = var10.bind(var12)();
                        var3 = var3 - var11;
                        var3 = var10 * var3;
                        var13 = var9 + var3;
                        var16 = var8 + var2;
                        var15 = var7 + var1;
                        var14 = var6 + var0;
                        var17 = var5;
                        var0 = var17[var4](var16, var15, var14, var13, var12);
                        return var0;
                }
            };
            var8.mix = var9;
            var2.prototype = var8;
            var4 = function arg0() {
                _fun51425: for (var _fun51425_ip = 0;;) switch (_fun51425_ip) {
                    case 0:
                        var3 = arg0;
                        var _closure2_slot0 = var3;
                        var4 = _closure1_slot4;
                        var0 = var4.includes;
                        var0 = var0.bind(var4)(var3);
                        if (var0) {
                            _fun51425_ip = 94;
                            continue _fun51425
                        }
                    case 29:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 2;
                        var4 = var4[var0];
                        var0 = undefined;
                        var4 = var5.bind(var0)(var4);
                        var4 = var4[var3];
                        var4 = var4.channels;
                        var _closure2_slot1 = var4;
                        var2 = _closure1_slot7;
                        var5 = var2.prototype;
                        var4 = function() { // Environment: var1
                            _fun51426: for (var _fun51426_ip = 0;;) switch (_fun51426_ip) {
                                case 0:
                                    var2 = this;
                                    var9 = undefined;
                                    var7 = undefined;
                                    var3 = var2.model;
                                    var0 = _closure2_slot0;
                                    if (!(var3 !== var0)) {
                                        _fun51426_ip = 290;
                                        continue _fun51426
                                    }
                                case 26:
                                    var6 = arguments.length;
                                    var0 = global;
                                    var3 = var0.Array;
                                    var4 = var3.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var15 = var4;
                                    var14 = var6;
                                    var3 = new var15[var3](var14, var13);
                                    var5 = var3 instanceof Object ? var3 : var4;
                                    var4 = 0;
                                    var8 = var4 < var6;
                                    var3 = 0;
                                    if (!var8) {
                                        _fun51426_ip = 86;
                                        continue _fun51426
                                    }
                                case 71:
                                    var8 = arguments[var3];
                                    var5[var3] = var8;
                                    var3 = var3 + 1;
                                    if (var3 < var6) {
                                        _fun51426_ip = 71;
                                        continue _fun51426
                                    }
                                case 86:
                                    var3 = var5.length;
                                    if (!(!(var3 > var4))) {
                                        _fun51426_ip = 254;
                                        continue _fun51426
                                    }
                                case 98:
                                    var6 = _closure1_slot7;
                                    var8 = new Array(0);
                                    var7 = var8.concat;
                                    var3 = _closure1_slot3;
                                    var10 = _closure1_slot0;
                                    var11 = _closure1_slot1;
                                    var4 = 2;
                                    var4 = var11[var4];
                                    var10 = var10.bind(var9)(var4);
                                    var4 = var2.model;
                                    var10 = var10[var4];
                                    var4 = _closure2_slot0;
                                    var12 = var10[var4];
                                    var11 = var12.raw;
                                    var10 = var2.color;
                                    var11 = var11.bind(var12)(var10);
                                    var10 = var0.Array;
                                    var0 = var10.isArray;
                                    var10 = var0.bind(var10)(var11);
                                    var0 = var11;
                                    if (var10) {
                                        _fun51426_ip = 204;
                                        continue _fun51426
                                    }
                                case 193:
                                    var10 = new Array(1);
                                    var10[0] = var11;
                                    var0 = var10;
                                case 204:
                                    var3 = var3.bind(var9)(var0);
                                    var9 = var2.valpha;
                                    var0 = new Array(1);
                                    var0[0] = var9;
                                    var14 = var7.bind(var8)(var3, var0);
                                    var3 = var6.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var15 = var3;
                                    var13 = var4;
                                    var0 = new var15[var6](var14, var13, var12);
                                    var0 = var0 instanceof Object ? var0 : var3;
                                    _fun51426_ip = 288;
                                    continue _fun51426;
                                case 254:
                                    var4 = _closure1_slot7;
                                    var13 = _closure2_slot0;
                                    var3 = var4.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var15 = var3;
                                    var14 = var5;
                                    var1 = new var15[var4](var14, var13, var12);
                                    var0 = var1 instanceof Object ? var1 : var3;
                                case 288:
                                    return var0;
                                case 290:
                                    var0 = _closure1_slot7;
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var15 = var1;
                                    var14 = var2;
                                    var0 = new var15[var0](var14, var13);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var5[var3] = var4;
                        var1 = function() { // Environment: var1
                            _fun51427: for (var _fun51427_ip = 0;;) switch (_fun51427_ip) {
                                case 0:
                                    var4 = undefined;
                                    var5 = undefined;
                                    var3 = arguments.length;
                                    var0 = global;
                                    var0 = var0.Array;
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var1;
                                    var8 = var3;
                                    var0 = new var9[var0](var8, var7);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    var1 = 0;
                                    var6 = var1 < var3;
                                    var2 = 0;
                                    if (!var6) {
                                        _fun51427_ip = 64;
                                        continue _fun51427
                                    }
                                case 49:
                                    var6 = arguments[var2];
                                    var0[var2] = var6;
                                    var2 = var2 + 1;
                                    if (var2 < var3) {
                                        _fun51427_ip = 49;
                                        continue _fun51427
                                    }
                                case 64:
                                    var3 = var0[var1];
                                    var2 = 'number';
                                    var1 = typeof var3;
                                    if (!(var2 === var1)) {
                                        _fun51427_ip = 102;
                                        continue _fun51427
                                    }
                                case 79:
                                    var2 = _closure1_slot8;
                                    var1 = _closure2_slot1;
                                    var1 = var2.bind(var4)(var0, var1);
                                    var3 = var0;
                                case 102:
                                    var2 = _closure1_slot7;
                                    var7 = _closure2_slot0;
                                    var1 = var2.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var9 = var1;
                                    var8 = var3;
                                    var0 = new var9[var2](var8, var7, var6);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var2[var3] = var1;
                        return var0;
                    case 94:
                        var0 = 1;
                        return var0;
                }
            };
            var5 = var3.Object;
            var3 = var5.keys;
            var1 = var1[var7];
            var1 = var6.bind(var0)(var1);
            var5 = var3.bind(var5)(var1);
            var1 = var5;
            var3 = var1[Symbol.iterator];
            var1 = var3().next;
        case 1042:
            var6 = var1().value;
            var5 = var3;
            if (!(var5 !== var0)) {
                _fun51384_ip = 1070;
                continue _fun51384
            }
        case 1053: // try_start_1
            var5 = var4;
            var5 = var5.bind(var0)(var6);
        case 1061: // try_end1
            _fun51384_ip = 1042;
            continue _fun51384;
        case 1063: // catch_target1
            CatchBlockStart(arg_register = 1);
            var3.return();
            throw var1;
        case 1070:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 65, 5837, 5841]);