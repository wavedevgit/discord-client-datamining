// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun5223: for (var _fun5223_ip = 0;;) switch (_fun5223_ip) {
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
                _fun5223_ip = 74;
                continue _fun5223;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun5226: for (var _fun5226_ip = 0;;) switch (_fun5226_ip) {
            case 0:
                var4 = arg0;
                var6 = arg2;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot6;
                var3 = _closure1_slot5;
                var0 = 1;
                var2 = 3;
                var7 = var0 & var2;
                var0 = var4;
                if (!var7) {
                    _fun5226_ip = 44;
                    continue _fun5226
                }
            case 39:
                var0 = var4.prototype;
            case 44:
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = arg1;
                var4 = var5.bind(var4)(var3, var0, var6);
                var _closure2_slot1 = var4;
                var0 = 2;
                var2 = var0 & var2;
                var0 = var4;
                if (!var2) {
                    _fun5226_ip = 97;
                    continue _fun5226
                }
            case 78:
                var3 = 'function';
                var2 = typeof var4;
                var0 = var4;
                if (!(var3 === var2)) {
                    _fun5226_ip = 97;
                    continue _fun5226
                }
            case 92:
                var0 = function(arg0) { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3.apply;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
            case 97:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun5228: for (var _fun5228_ip = 0;;) switch (_fun5228_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.outputRange;
                var _closure2_slot0 = var2;
                var2 = var1.inputRange;
                var _closure2_slot1 = var2;
                var2 = var1.easing;
                if (var2) {
                    _fun5228_ip = 65;
                    continue _fun5228
                }
            case 34:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2 = var3.linear;
            case 65:
                var _closure2_slot2 = var2;
                var2 = 'extend';
                var _closure2_slot3 = var2;
                var4 = var1.extrapolateLeft;
                var3 = undefined;
                if (!(var3 === var4)) {
                    _fun5228_ip = 111;
                    continue _fun5228
                }
            case 89:
                var4 = var1.extrapolate;
                if (!(var3 !== var4)) {
                    _fun5228_ip = 121;
                    continue _fun5228
                }
            case 99:
                var4 = var1.extrapolate;
                _closure2_slot3 = var4;
                _fun5228_ip = 121;
                continue _fun5228;
            case 111:
                var4 = var1.extrapolateLeft;
                _closure2_slot3 = var4;
            case 121:
                var _closure2_slot4 = var2;
                var2 = var1.extrapolateRight;
                if (!(var3 === var2)) {
                    _fun5228_ip = 157;
                    continue _fun5228
                }
            case 135:
                var2 = var1.extrapolate;
                if (!(var3 !== var2)) {
                    _fun5228_ip = 167;
                    continue _fun5228
                }
            case 145:
                var2 = var1.extrapolate;
                _closure2_slot4 = var2;
                _fun5228_ip = 167;
                continue _fun5228;
            case 157:
                var1 = var1.extrapolateRight;
                _closure2_slot4 = var1;
            case 167:
                var0 = function(arg0) { // Environment: var0
                    _fun5229: for (var _fun5229_ip = 0;;) switch (_fun5229_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 7;
                            var0 = var2[var0];
                            var8 = undefined;
                            var2 = var1.bind(var8)(var0);
                            var1 = 'number';
                            var0 = typeof var4;
                            var1 = var1 === var0;
                            var0 = 'Cannot interpolation an input which is not a number';
                            var0 = var2.bind(var8)(var1, var0);
                            var1 = _closure2_slot1;
                            var2 = var1.length;
                            var5 = 1;
                            var3 = var2 - var5;
                            var2 = var5;
                            if (!(var5 < var3)) {
                                _fun5229_ip = 127;
                                continue _fun5229
                            }
                        case 77:
                            var3 = var1[var5];
                            var3 = var3 >= var4;
                            var6 = var5;
                            var2 = var6;
                            if (var3) {
                                _fun5229_ip = 127;
                                continue _fun5229
                            }
                        case 94:
                            var7 = var6 + 1;
                            var3 = var1.length;
                            var3 = var3 - var5;
                            var2 = var7;
                            if (!(var7 < var3)) {
                                _fun5229_ip = 127;
                                continue _fun5229
                            }
                        case 113:
                            var3 = var1[var7];
                            var6 = var7;
                            var2 = var6;
                            if (!(var3 >= var4)) {
                                _fun5229_ip = 94;
                                continue _fun5229
                            }
                        case 127:
                            var2 = var2 - var5;
                            var3 = var1[var2];
                            var5 = var2 + var5;
                            var6 = var1[var5];
                            var1 = _closure2_slot0;
                            var2 = var1[var2];
                            var1 = var1[var5];
                            var7 = _closure2_slot2;
                            var9 = _closure2_slot3;
                            var10 = _closure2_slot4;
                            var11 = var4;
                            if (!(var4 < var3)) {
                                _fun5229_ip = 202;
                                continue _fun5229
                            }
                        case 174:
                            var5 = 'identity';
                            var0 = var4;
                            if (!(var5 !== var9)) {
                                _fun5229_ip = 360;
                                continue _fun5229
                            }
                        case 188:
                            var5 = 'clamp';
                            var11 = var4;
                            if (!(var5 === var9)) {
                                _fun5229_ip = 202;
                                continue _fun5229
                            }
                        case 199:
                            var11 = var3;
                        case 202:
                            var9 = var11;
                            if (!(var11 > var6)) {
                                _fun5229_ip = 237;
                                continue _fun5229
                            }
                        case 209:
                            var5 = 'identity';
                            var0 = var11;
                            if (!(var5 !== var10)) {
                                _fun5229_ip = 360;
                                continue _fun5229
                            }
                        case 223:
                            var5 = 'clamp';
                            var9 = var11;
                            if (!(var5 === var10)) {
                                _fun5229_ip = 237;
                                continue _fun5229
                            }
                        case 234:
                            var9 = var6;
                        case 237:
                            var0 = var2;
                            if (!(var0 !== var1)) {
                                _fun5229_ip = 360;
                                continue _fun5229
                            }
                        case 244:
                            if (!(var3 !== var6)) {
                                _fun5229_ip = 350;
                                continue _fun5229
                            }
                        case 248:
                            var5 = -inf;
                            if (!(var3 !== var5)) {
                                _fun5229_ip = 296;
                                continue _fun5229
                            }
                        case 262:
                            var10 = inf;
                            if (!(var6 !== var10)) {
                                _fun5229_ip = 290;
                                continue _fun5229
                            }
                        case 276:
                            var10 = var9 - var3;
                            var6 = var6 - var3;
                            var6 = var10 / var6;
                            _fun5229_ip = 299;
                            continue _fun5229;
                        case 290:
                            var6 = var9 - var3;
                            _fun5229_ip = 299;
                            continue _fun5229;
                        case 296:
                            var6 = -var9;
                        case 299:
                            var6 = var7.bind(var8)(var6);
                            if (!(var2 !== var5)) {
                                _fun5229_ip = 342;
                                continue _fun5229
                            }
                        case 308:
                            var5 = inf;
                            if (!(var1 !== var5)) {
                                _fun5229_ip = 336;
                                continue _fun5229
                            }
                        case 322:
                            var5 = var1 - var2;
                            var5 = var6 * var5;
                            var5 = var5 + var2;
                            _fun5229_ip = 345;
                            continue _fun5229;
                        case 336:
                            var5 = var6 + var2;
                            _fun5229_ip = 345;
                            continue _fun5229;
                        case 342:
                            var5 = -var6;
                        case 345:
                            var0 = var5;
                            _fun5229_ip = 360;
                            continue _fun5229;
                        case 350:
                            if (!(var4 <= var3)) {
                                _fun5229_ip = 357;
                                continue _fun5229
                            }
                        case 354:
                            var1 = var2;
                        case 357:
                            var0 = var1;
                        case 360:
                            return var0;
                    }
                };
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun5230: for (var _fun5230_ip = 0;;) switch (_fun5230_ip) {
            case 0:
                var7 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = 8;
                var1 = var2[var4];
                var8 = undefined;
                var1 = var3.bind(var8)(var1);
                var1 = var1.bind(var8)(var7);
                var9 = 7;
                var2 = var2[var9];
                var5 = var3.bind(var8)(var2);
                var12 = null;
                var3 = var12 == var1;
                if (var3) {
                    _fun5230_ip = 65;
                    continue _fun5230
                }
            case 54:
                var6 = 'object';
                var2 = typeof var1;
                var3 = var6 !== var2;
            case 65:
                var2 = 'PlatformColors are not supported';
                var2 = var5.bind(var8)(var3, var2);
                var3 = 'number';
                var2 = typeof var1;
                if (!(var3 !== var2)) {
                    _fun5230_ip = 319;
                    continue _fun5230
                }
            case 91:
                var2 = new Array(0);
                var5 = _closure1_slot8;
                var3 = var5.exec;
                var5 = var3.bind(var5)(var7);
                var13 = var12 != var5;
                var3 = 0;
                var11 = global;
                var10 = var5;
                var5 = 0;
                var6 = 0;
                if (!var13) {
                    _fun5230_ip = 229;
                    continue _fun5230
                }
            case 128:
                var13 = var10.index;
                if (!(var13 > var5)) {
                    _fun5230_ip = 164;
                    continue _fun5230
                }
            case 137:
                var14 = var2.push;
                var15 = var7.substring;
                var13 = var10.index;
                var13 = var15.bind(var7)(var5, var13);
                var13 = var14.bind(var2)(var13);
            case 164:
                var14 = var2.push;
                var15 = var11.parseFloat;
                var13 = var10[var3];
                var13 = var15.bind(var8)(var13);
                var13 = var14.bind(var2)(var13);
                var14 = var10.index;
                var13 = var10[var3];
                var13 = var13.length;
                var5 = var14 + var13;
                var15 = _closure1_slot8;
                var13 = var15.exec;
                var10 = var13.bind(var15)(var7);
                var6 = var5;
                if (var12 != var10) {
                    _fun5230_ip = 128;
                    continue _fun5230
                }
            case 229:
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var9];
                var5 = var5.bind(var8)(var0);
                var0 = var2.length;
                var3 = var0 > var3;
                var0 = 'outputRange must contain color or value with numeric component';
                var0 = var5.bind(var8)(var3, var0);
                var0 = var7.length;
                if (!(var6 < var0)) {
                    _fun5230_ip = 303;
                    continue _fun5230
                }
            case 276:
                var3 = var2.push;
                var5 = var7.substring;
                var0 = var7.length;
                var0 = var5.bind(var7)(var6, var0);
                var0 = var3.bind(var2)(var0);
            case 303:
                var0 = {};
                var3 = false;
                var0.isColor = var3;
                var0.components = var2;
                return var0;
            case 319:
                var0 = {};
                var2 = true;
                var0.isColor = var2;
                var2 = var1;
                if (var2) {
                    _fun5230_ip = 336;
                    continue _fun5230
                }
            case 334:
                var2 = 0;
            case 336:
                var1 = 4278190080.0;
                var5 = var1 & var2;
                var1 = new Array(4);
                var3 = 24;
                var3 = var5 >>> var3;
                var1[0] = var3;
                var3 = 16711680;
                var5 = var3 & var2;
                var3 = 16;
                var3 = var5 >>> var3;
                var1[1] = var3;
                var3 = 65280;
                var3 = var3 & var2;
                var3 = var3 >>> var4;
                var1[2] = var3;
                var3 = 255;
                var2 = var3 & var2;
                var2 = var2 / var3;
                var1[3] = var2;
                var0.components = var1;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
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
    var3 = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;
    var _closure1_slot8 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0, arg1() {
            _fun5232: for (var _fun5232_ip = 0;;) switch (_fun5232_ip) {
                case 0:
                    var1 = arg1;
                    var4 = this;
                    var0 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var9 = new Array(1);
                    var9[0] = var1;
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun5232_ip = 73;
                        continue _fun5232
                    }
                case 60:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun5232_ip = 107;
                    continue _fun5232;
                case 73:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 107:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = arg0;
                    var0._parent = var2;
                    var0._config = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = '_getInterpolation';
        var4.key = var0;
        var0 = function() {
            _fun5233: for (var _fun5233_ip = 0;;) switch (_fun5233_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._interpolation;
                    if (var1) {
                        _fun5233_ip = 92;
                        continue _fun5233
                    }
                case 12:
                    var3 = var0._config;
                    var1 = var3.outputRange;
                    if (!var1) {
                        _fun5233_ip = 50;
                        continue _fun5233
                    }
                case 27:
                    var2 = var3.outputRange;
                    var1 = 0;
                    var1 = var2[var1];
                    var2 = 'string';
                    var1 = typeof var1;
                    if (!(var2 !== var1)) {
                        _fun5233_ip = 72;
                        continue _fun5233
                    }
                case 50:
                    var2 = _closure1_slot11;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    var0._interpolation = var1;
                    _fun5233_ip = 92;
                    continue _fun5233;
                case 72:
                    var2 = function arg0() {
                        _fun5234: for (var _fun5234_ip = 0;;) switch (_fun5234_ip) {
                            case 0:
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var3 = 7;
                                var3 = var5[var3];
                                var6 = undefined;
                                var5 = var4.bind(var6)(var3);
                                var3 = var2.outputRange;
                                var4 = var3.length;
                                var3 = 2;
                                var4 = var4 >= var3;
                                var3 = 'Bad output range';
                                var3 = var5.bind(var6)(var4, var3);
                                var3 = var2.outputRange;
                                var2 = var3.map;
                                var0 = _closure1_slot12;
                                var5 = var2.bind(var3)(var0);
                                var _closure4_slot1 = var5;
                                var3 = 0;
                                var0 = var5[var3];
                                var0 = var0.isColor;
                                var _closure4_slot2 = var0;
                                var4 = var5.map;
                                var2 = function(arg0) { // Environment: var1
                                    _fun5235: for (var _fun5235_ip = 0;;) switch (_fun5235_ip) {
                                        case 0:
                                            var0 = _closure4_slot2;
                                            var1 = arg0;
                                            var1 = var1.components;
                                            if (var0) {
                                                _fun5235_ip = 38;
                                                continue _fun5235
                                            }
                                        case 19:
                                            var2 = var1.filter;
                                            var0 = function(arg0) { // Environment: var0
                                                var1 = 'number';
                                                var0 = arg0;
                                                var0 = typeof var0;
                                                var0 = var1 === var0;
                                                return var0;
                                            };
                                            var0 = var2.bind(var1)(var0);
                                            _fun5235_ip = 41;
                                            continue _fun5235;
                                        case 38:
                                            var0 = var1;
                                        case 41:
                                            return var0;
                                    }
                                };
                                var2 = var4.bind(var5)(var2);
                                var _closure4_slot3 = var2;
                                var4 = var2[var3];
                                var3 = var4.map;
                                var2 = function(arg0, arg1) { // Environment: var1
                                    var1 = arg1;
                                    var _closure5_slot0 = var1;
                                    var2 = _closure1_slot11;
                                    var1 = global;
                                    var5 = var1.Object;
                                    var4 = var5.assign;
                                    var3 = _closure4_slot0;
                                    var1 = {};
                                    var7 = _closure4_slot3;
                                    var6 = var7.map;
                                    var0 = function(arg0) { // Environment: var0
                                        var1 = _closure5_slot0;
                                        var0 = arg0;
                                        var0 = var0[var1];
                                        return var0;
                                    };
                                    var0 = var6.bind(var7)(var0);
                                    var1.outputRange = var0;
                                    var0 = {};
                                    var1 = var4.bind(var5)(var0, var3, var1);
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var2 = var3.bind(var4)(var2);
                                var _closure4_slot4 = var2;
                                if (var0) {
                                    _fun5234_ip = 156;
                                    continue _fun5234
                                }
                            case 149:
                                var0 = function(arg0) { // Environment: var1
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var4 = _closure4_slot4;
                                    var3 = var4.map;
                                    var2 = function(arg0) { // Environment: var0
                                        var2 = _closure5_slot0;
                                        var1 = arg0;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var2);
                                        return var0;
                                    };
                                    var2 = var3.bind(var4)(var2);
                                    var _closure5_slot1 = var2;
                                    var2 = 0;
                                    var _closure5_slot2 = var2;
                                    var1 = _closure4_slot1;
                                    var1 = var1[var2];
                                    var2 = var1.components;
                                    var1 = var2.map;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun5243: for (var _fun5243_ip = 0;;) switch (_fun5243_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var2 = 'number';
                                                var1 = typeof var0;
                                                if (!(var2 === var1)) {
                                                    _fun5243_ip = 39;
                                                    continue _fun5243
                                                }
                                            case 14:
                                                var2 = _closure5_slot1;
                                                var1 = _closure5_slot2;
                                                var1 = parseFloat(var1);
                                                var3 = var1 + 1;
                                                _closure5_slot2 = var3;
                                                var0 = var2[var1];
                                            case 39:
                                                return var0;
                                        }
                                    };
                                    var2 = var1.bind(var2)(var0);
                                    var1 = var2.join;
                                    var0 = '';
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                _fun5234_ip = 161;
                                continue _fun5234;
                            case 156:
                                var0 = function(arg0) { // Environment: var1
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var2 = _closure4_slot4;
                                    var1 = var2.map;
                                    var0 = function(arg0, arg1) { // Environment: var0
                                        _fun5240: for (var _fun5240_ip = 0;;) switch (_fun5240_ip) {
                                            case 0:
                                                var2 = _closure5_slot0;
                                                var1 = arg0;
                                                var0 = undefined;
                                                var3 = var1.bind(var0)(var2);
                                                var1 = arg1;
                                                var0 = 3;
                                                if (!(!(var1 < var0))) {
                                                    _fun5240_ip = 61;
                                                    continue _fun5240
                                                }
                                            case 27:
                                                var0 = global;
                                                var4 = var0.Math;
                                                var2 = var4.round;
                                                var1 = 1000;
                                                var0 = var1 * var3;
                                                var0 = var2.bind(var4)(var0);
                                                var0 = var0 / var1;
                                                _fun5240_ip = 79;
                                                continue _fun5240;
                                            case 61:
                                                var1 = global;
                                                var2 = var1.Math;
                                                var1 = var2.round;
                                                var0 = var1.bind(var2)(var3);
                                            case 79:
                                                return var0;
                                        }
                                    };
                                    var1 = var1.bind(var2)(var0);
                                    var0 = 0;
                                    var15 = var1[var0];
                                    var0 = 1;
                                    var13 = var1[var0];
                                    var0 = 2;
                                    var11 = var1[var0];
                                    var0 = 3;
                                    var9 = var1[var0];
                                    var0 = global;
                                    var0 = var0.HermesInternal;
                                    var3 = var0.concat;
                                    var16 = 'rgba(';
                                    var1 = ', ';
                                    var8 = ')';
                                    var14 = var1;
                                    var12 = var1;
                                    var10 = var1;
                                    var0 = var16[var3](var15, var14, var13, var12, var11, var10, var9, var8, var7);
                                    return var0;
                                };
                            case 161:
                                return var0;
                        }
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    var0._interpolation = var1;
                case 92:
                    var0 = var0._interpolation;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = '__makeNative';
        var4.key = var6;
        var6 = function arg0() {
            var3 = arg0;
            var6 = this;
            var1 = var6._parent;
            var0 = var1.__makeNative;
            var0 = var0.bind(var1)(var3);
            var5 = _closure1_slot10;
            var10 = _closure2_slot0;
            var0 = undefined;
            var9 = '__makeNative';
            var7 = 3;
            var11 = undefined;
            var8 = var6;
            var2 = var11[var5](var10, var9, var8, var7, var6);
            var1 = new Array(1);
            var1[0] = var3;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = '__getValue';
        var4.key = var6;
        var6 = function() {
            var3 = this;
            var1 = var3._parent;
            var0 = var1.__getValue;
            var2 = var0.bind(var1)();
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 7;
            var0 = var1[var0];
            var1 = undefined;
            var5 = var4.bind(var1)(var0);
            var4 = 'number';
            var0 = typeof var2;
            var4 = var4 === var0;
            var0 = 'Cannot interpolate an input which is not a number.';
            var0 = var5.bind(var1)(var4, var0);
            var0 = var3._getInterpolation;
            var0 = var0.bind(var3)();
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'interpolate';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure2_slot0;
            var0 = var3.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var3
                }
            });
            var5 = this;
            var4 = arg0;
            var6 = var1;
            var0 = new var6[var3](var5, var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = '__attach';
        var4.key = var6;
        var6 = function() {
            var5 = this;
            var1 = var5._parent;
            var0 = var1.__addChild;
            var0 = var0.bind(var1)(var5);
            var4 = _closure1_slot10;
            var9 = _closure2_slot0;
            var0 = undefined;
            var8 = '__attach';
            var6 = 3;
            var10 = undefined;
            var7 = var5;
            var2 = var10[var4](var9, var8, var7, var6, var5);
            var1 = new Array(0);
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = '__detach';
        var4.key = var6;
        var6 = function() {
            var5 = this;
            var1 = var5._parent;
            var0 = var1.__removeChild;
            var0 = var0.bind(var1)(var5);
            var4 = _closure1_slot10;
            var9 = _closure2_slot0;
            var0 = undefined;
            var8 = '__detach';
            var6 = 3;
            var10 = undefined;
            var7 = var5;
            var2 = var10[var4](var9, var8, var7, var6, var5);
            var1 = new Array(0);
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = '__getNativeConfig';
        var4.key = var6;
        var5 = function() {
            _fun5249: for (var _fun5249_ip = 0;;) switch (_fun5249_ip) {
                case 0:
                    var2 = this;
                    var0 = var2._config;
                    var5 = var0.outputRange;
                    var0 = null;
                    var _closure3_slot0 = var0;
                    var0 = 0;
                    var0 = var5[var0];
                    var4 = 'string';
                    var0 = typeof var0;
                    var3 = var5;
                    if (!(var4 === var0)) {
                        _fun5249_ip = 58;
                        continue _fun5249
                    }
                case 43:
                    var4 = var5.map;
                    var0 = function(arg0) { // Environment: var1
                        _fun5250: for (var _fun5250_ip = 0;;) switch (_fun5250_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var1 = 9;
                                var1 = var4[var1];
                                var4 = undefined;
                                var1 = var2.bind(var4)(var1);
                                var1 = var1.bind(var4)(var3);
                                var5 = 'number';
                                var2 = typeof var1;
                                if (!(var5 !== var2)) {
                                    _fun5250_ip = 77;
                                    continue _fun5250
                                }
                            case 44:
                                var2 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var0 = 10;
                                var0 = var5[var0];
                                var2 = var2.bind(var4)(var0);
                                var0 = var2.transformDataType;
                                var0 = var0.bind(var2)(var3);
                                _fun5250_ip = 91;
                                continue _fun5250;
                            case 77:
                                var2 = 'color';
                                _closure3_slot0 = var2;
                                var0 = var1;
                            case 91:
                                return var0;
                        }
                    };
                    var3 = var4.bind(var5)(var0);
                case 58:
                    var0 = {};
                    var4 = var2._config;
                    var4 = var4.inputRange;
                    var0.inputRange = var4;
                    var0.outputRange = var3;
                    var1 = _closure3_slot0;
                    var0.outputType = var1;
                    var1 = var2._config;
                    var1 = var1.extrapolateLeft;
                    if (var1) {
                        _fun5249_ip = 118;
                        continue _fun5249
                    }
                case 106:
                    var3 = var2._config;
                    var1 = var3.extrapolate;
                case 118:
                    if (var1) {
                        _fun5249_ip = 125;
                        continue _fun5249
                    }
                case 121:
                    var1 = 'extend';
                case 125:
                    var0.extrapolateLeft = var1;
                    var1 = var2._config;
                    var1 = var1.extrapolateRight;
                    if (var1) {
                        _fun5249_ip = 157;
                        continue _fun5249
                    }
                case 145:
                    var3 = var2._config;
                    var1 = var3.extrapolate;
                case 157:
                    if (var1) {
                        _fun5249_ip = 164;
                        continue _fun5249
                    }
                case 160:
                    var1 = 'extend';
                case 164:
                    var0.extrapolateRight = var1;
                    var1 = 'interpolation';
                    var0.type = var1;
                    var1 = var2.__getDebugID;
                    var1 = var1.bind(var2)();
                    var0.debugID = var1;
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 356, 44, 39, 38, 349, 358]);