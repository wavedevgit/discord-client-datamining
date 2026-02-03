// utils/ColorUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var13 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var14;
    var10 = function arg0() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = arg0;
        var3 = var3.bind(var4)(var2);
        var2 = var3.rgb;
        var3 = var2.bind(var3)();
        var2 = _closure1_slot3;
        var0 = 3;
        var2 = var2.bind(var4)(var3, var0);
        var0 = {};
        var3 = 0;
        var3 = var2[var3];
        var0.r = var3;
        var1 = var2[var1];
        var0.g = var1;
        var1 = 2;
        var1 = var2[var1];
        var0.b = var1;
        return var0;
    };
    var _closure1_slot7 = var10;
    var9 = function arg0() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = arg0;
        var3 = var3.bind(var4)(var2);
        var2 = var3.rgba;
        var3 = var2.bind(var3)();
        var2 = _closure1_slot3;
        var0 = 4;
        var2 = var2.bind(var4)(var3, var0);
        var0 = {};
        var3 = 0;
        var3 = var2[var3];
        var0.r = var3;
        var1 = var2[var1];
        var0.g = var1;
        var1 = 2;
        var1 = var2[var1];
        var0.b = var1;
        var1 = 3;
        var1 = var2[var1];
        var0.a = var1;
        return var0;
    };
    var _closure1_slot8 = var9;
    var7 = function arg0, arg1, arg2() {
        _fun28113: for (var _fun28113_ip = 0;;) switch (_fun28113_ip) {
            case 0:
                var0 = arg0;
                var1 = 255;
                var10 = var0 / var1;
                var0 = arg1;
                var8 = var0 / var1;
                var0 = arg2;
                var7 = var0 / var1;
                var5 = global;
                var1 = var5.Math;
                var0 = var1.min;
                var1 = var0.bind(var1)(var10, var8, var7);
                var2 = var5.Math;
                var0 = var2.max;
                var0 = var0.bind(var2)(var10, var8, var7);
                var4 = var0 - var1;
                var3 = 0;
                var6 = var3 === var4;
                var9 = 0;
                if (var6) {
                    _fun28113_ip = 137;
                    continue _fun28113
                }
            case 77:
                if (!(var0 !== var10)) {
                    _fun28113_ip = 119;
                    continue _fun28113
                }
            case 81:
                if (!(var0 !== var8)) {
                    _fun28113_ip = 102;
                    continue _fun28113
                }
            case 85:
                var2 = var10 - var8;
                var11 = var2 / var4;
                var2 = 4;
                var2 = var11 + var2;
                _fun28113_ip = 117;
                continue _fun28113;
            case 102:
                var10 = var7 - var10;
                var11 = var10 / var4;
                var10 = 2;
                var2 = var11 + var10;
            case 117:
                _fun28113_ip = 134;
                continue _fun28113;
            case 119:
                var7 = var8 - var7;
                var8 = var7 / var4;
                var7 = 6;
                var2 = var8 % var7;
            case 134:
                var9 = var2;
            case 137:
                var8 = var5.Math;
                var7 = var8.round;
                var2 = 60;
                var2 = var2 * var9;
                var8 = var7.bind(var8)(var2);
                var7 = var8;
                if (!(var7 < var3)) {
                    _fun28113_ip = 177;
                    continue _fun28113
                }
            case 167:
                var2 = 360;
                var7 = var8 + var2;
            case 177:
                var0 = var0 + var1;
                var1 = 2;
                var2 = var0 / var1;
                var0 = {};
                var0.h = var7;
                var3 = 0;
                if (var6) {
                    _fun28113_ip = 235;
                    continue _fun28113
                }
            case 199:
                var7 = var5.Math;
                var6 = var7.abs;
                var1 = var1 * var2;
                var5 = 1;
                var1 = var1 - var5;
                var1 = var6.bind(var7)(var1);
                var1 = var5 - var1;
                var3 = var4 / var1;
            case 235:
                var1 = 100;
                var5 = var1 * var3;
                var4 = var5.toFixed;
                var3 = 1;
                var4 = var4.bind(var5)(var3);
                var4 = var4 - 0;
                var0.s = var4;
                var2 = var1 * var2;
                var1 = var2.toFixed;
                var1 = var1.bind(var2)(var3);
                var1 = var1 - 0;
                var0.l = var1;
                return var0;
        }
    };
    var _closure1_slot9 = var7;
    var6 = function arg0, arg1, arg2() {
        var0 = global;
        var0 = var0.HermesInternal;
        var7 = var0.concat;
        var14 = 'hsl(';
        var13 = arg0;
        var12 = ', ';
        var11 = arg1;
        var10 = '%, ';
        var9 = arg2;
        var8 = '%)';
        var0 = var14[var7](var13, var12, var11, var10, var9, var8, var7);
        return var0;
    };
    var _closure1_slot10 = var6;
    var5 = function arg0, arg1, arg2() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg2;
        var3 = 100;
        var6 = var0 / var3;
        var _closure2_slot1 = var6;
        var0 = global;
        var5 = var0.Math;
        var4 = var5.min;
        var2 = 1;
        var2 = var2 - var6;
        var4 = var4.bind(var5)(var6, var2);
        var2 = arg1;
        var2 = var2 * var4;
        var2 = var2 / var3;
        var _closure2_slot2 = var2;
        var5 = function arg0() {
            var2 = _closure2_slot0;
            var1 = 30;
            var2 = var2 / var1;
            var1 = arg0;
            var2 = var1 + var2;
            var1 = 12;
            var4 = var2 % var1;
            var2 = _closure2_slot1;
            var3 = _closure2_slot2;
            var0 = global;
            var6 = var0.Math;
            var5 = var6.max;
            var9 = var0.Math;
            var8 = var9.min;
            var1 = 3;
            var7 = var4 - var1;
            var1 = 9;
            var4 = var1 - var4;
            var1 = 1;
            var4 = var8.bind(var9)(var7, var4, var1);
            var1 = -1;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var3 * var1;
            var3 = var2 - var1;
            var2 = var0.Math;
            var1 = var2.round;
            var0 = 255;
            var0 = var0 * var3;
            var2 = var1.bind(var2)(var0);
            var1 = var2.toString;
            var0 = 16;
            var3 = var1.bind(var2)(var0);
            var2 = var3.padStart;
            var1 = 2;
            var0 = '0';
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var2 = undefined;
        var1 = 0;
        var4 = var5.bind(var2)(var1);
        var1 = 8;
        var3 = var5.bind(var2)(var1);
        var1 = 4;
        var2 = var5.bind(var2)(var1);
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = '#';
        var0 = var1.bind(var0)(var4, var3, var2);
        return var0;
    };
    var _closure1_slot11 = var5;
    var4 = function arg0() {
        _fun28117: for (var _fun28117_ip = 0;;) switch (_fun28117_ip) {
            case 0:
                var2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                var1 = var2.exec;
                var0 = arg0;
                var10 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 != var10)) {
                    _fun28117_ip = 356;
                    continue _fun28117
                }
            case 39:
                var2 = global;
                var5 = var2.parseInt;
                var8 = 1;
                var1 = var10[var8];
                var4 = undefined;
                var9 = 16;
                var1 = var5.bind(var4)(var1, var9);
                var5 = 255;
                var15 = var1 / var5;
                var6 = var2.parseInt;
                var1 = 2;
                var1 = var10[var1];
                var1 = var6.bind(var4)(var1, var9);
                var7 = var1 / var5;
                var6 = var2.parseInt;
                var1 = 3;
                var1 = var10[var1];
                var1 = var6.bind(var4)(var1, var9);
                var13 = var1 / var5;
                var5 = var2.Math;
                var1 = var5.max;
                var5 = var1.bind(var5)(var15, var7, var13);
                var _closure2_slot0 = var5;
                var6 = var2.Math;
                var1 = var6.min;
                var1 = var1.bind(var6)(var15, var7, var13);
                var1 = var5 - var1;
                var _closure2_slot1 = var1;
                var11 = function arg0() {
                    var2 = _closure2_slot0;
                    var1 = arg0;
                    var2 = var2 - var1;
                    var1 = _closure2_slot1;
                    var0 = 6;
                    var0 = var2 / var0;
                    var1 = var0 / var1;
                    var0 = 0.5;
                    var0 = var1 + var0;
                    return var0;
                };
                var3 = function arg0() {
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
                var10 = 0;
                var9 = 0;
                var6 = 0;
                if (!(var6 !== var1)) {
                    _fun28117_ip = 293;
                    continue _fun28117
                }
            case 186:
                var1 = var1 / var5;
                var14 = var11.bind(var4)(var15);
                var12 = var11.bind(var4)(var7);
                var11 = var11.bind(var4)(var13);
                if (!(var15 !== var5)) {
                    _fun28117_ip = 259;
                    continue _fun28117
                }
            case 209:
                if (!(var7 !== var5)) {
                    _fun28117_ip = 239;
                    continue _fun28117
                }
            case 213:
                var7 = 0;
                if (!(var13 === var5)) {
                    _fun28117_ip = 237;
                    continue _fun28117
                }
            case 219:
                var13 = 0.6666666666666666;
                var13 = var13 + var12;
                var7 = var13 - var14;
            case 237:
                _fun28117_ip = 257;
                continue _fun28117;
            case 239:
                var13 = 0.3333333333333333;
                var13 = var13 + var14;
                var7 = var13 - var11;
            case 257:
                _fun28117_ip = 263;
                continue _fun28117;
            case 259:
                var7 = var11 - var12;
            case 263:
                if (!(!(var7 < var10))) {
                    _fun28117_ip = 286;
                    continue _fun28117
                }
            case 267:
                var6 = var1;
                var9 = var7;
                if (!(var9 > var8)) {
                    _fun28117_ip = 293;
                    continue _fun28117
                }
            case 277:
                var9 = var7 - var8;
                var6 = var1;
                _fun28117_ip = 293;
                continue _fun28117;
            case 286:
                var9 = var7 + var8;
                var6 = var1;
            case 293:
                var1 = {};
                var8 = var2.Math;
                var7 = var8.round;
                var2 = 360;
                var2 = var2 * var9;
                var2 = var7.bind(var8)(var2);
                var1.h = var2;
                var2 = 100;
                var6 = var2 * var6;
                var6 = var3.bind(var4)(var6);
                var1.s = var6;
                var2 = var2 * var5;
                var2 = var3.bind(var4)(var2);
                var1.v = var2;
                return var1;
            case 356:
                return var0;
        }
    };
    var _closure1_slot12 = var4;
    var0 = function arg0, arg1, arg2() {
        var2 = _closure1_slot7;
        var5 = _closure1_slot11;
        var1 = undefined;
        var4 = arg0;
        var3 = arg1;
        var0 = arg2;
        var0 = var5.bind(var1)(var4, var3, var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var3 = function arg0, arg1, arg2() {
        _fun28121: for (var _fun28121_ip = 0;;) switch (_fun28121_ip) {
            case 0:
                var0 = arg0;
                var1 = 255;
                var3 = var0 / var1;
                var0 = arg1;
                var9 = var0 / var1;
                var0 = arg2;
                var8 = var0 / var1;
                var0 = global;
                var2 = var0.Math;
                var1 = var2.max;
                var11 = var1.bind(var2)(var3, var9, var8);
                var1 = var0.Math;
                var0 = var1.min;
                var12 = var0.bind(var1)(var3, var9, var8);
                var0 = var11 + var12;
                var10 = 2;
                var1 = var0 / var10;
                var4 = 0;
                var2 = 0;
                if (!(var11 !== var12)) {
                    _fun28121_ip = 211;
                    continue _fun28121
                }
            case 84:
                var7 = var11 - var12;
                var0 = 0.5;
                if (!(!(var1 > var0))) {
                    _fun28121_ip = 112;
                    continue _fun28121
                }
            case 102:
                var0 = var11 + var12;
                var0 = var7 / var0;
                _fun28121_ip = 124;
                continue _fun28121;
            case 112:
                var5 = var10 - var11;
                var5 = var5 - var12;
                var0 = var7 / var5;
            case 124:
                if (!(var3 !== var11)) {
                    _fun28121_ip = 169;
                    continue _fun28121
                }
            case 128:
                if (!(var9 !== var11)) {
                    _fun28121_ip = 155;
                    continue _fun28121
                }
            case 132:
                var5 = undefined;
                if (!(var8 === var11)) {
                    _fun28121_ip = 190;
                    continue _fun28121
                }
            case 138:
                var11 = var3 - var9;
                var12 = var11 / var7;
                var11 = 4;
                var5 = var12 + var11;
                _fun28121_ip = 190;
                continue _fun28121;
            case 155:
                var3 = var8 - var3;
                var3 = var3 / var7;
                var5 = var3 + var10;
                _fun28121_ip = 190;
                continue _fun28121;
            case 169:
                var3 = var9 - var8;
                var7 = var3 / var7;
                var3 = 0;
                if (!(var9 < var8)) {
                    _fun28121_ip = 186;
                    continue _fun28121
                }
            case 183:
                var3 = 6;
            case 186:
                var5 = var7 + var3;
            case 190:
                var3 = null;
                var4 = 0;
                var2 = var0;
                if (!(var3 != var5)) {
                    _fun28121_ip = 211;
                    continue _fun28121
                }
            case 201:
                var3 = 6;
                var4 = var5 / var3;
                var2 = var0;
            case 211:
                var0 = {};
                var3 = 360;
                var3 = var3 * var4;
                var0.hue = var3;
                var0.saturation = var2;
                var0.lightness = var1;
                var1 = 1;
                var0.alpha = var1;
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var0 = function arg0, arg1, arg2() {
        _fun28122: for (var _fun28122_ip = 0;;) switch (_fun28122_ip) {
            case 0:
                var4 = arg1;
                var1 = arg2;
                var2 = arg0;
                var0 = 360;
                var10 = var2 / var0;
                var0 = 0;
                var3 = var1;
                var2 = var3;
                var6 = var2;
                if (!(var0 !== var4)) {
                    _fun28122_ip = 132;
                    continue _fun28122
                }
            case 34:
                var9 = function arg0, arg1, arg2() {
                    _fun28123: for (var _fun28123_ip = 0;;) switch (_fun28123_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = arg1;
                            var3 = arg2;
                            var0 = 0;
                            var4 = var3;
                            if (!(var4 < var0)) {
                                _fun28123_ip = 25;
                                continue _fun28123
                            }
                        case 18:
                            var0 = 1;
                            var4 = var3 + var0;
                        case 25:
                            var0 = 1;
                            var3 = var4;
                            if (!(var3 > var0)) {
                                _fun28123_ip = 39;
                                continue _fun28123
                            }
                        case 35:
                            var3 = var4 - var0;
                        case 39:
                            var0 = 0.16666666666666666;
                            if (!(!(var3 < var0))) {
                                _fun28123_ip = 115;
                                continue _fun28123
                            }
                        case 53:
                            var4 = 0.5;
                            var0 = var1;
                            if (!(!(var3 < var4))) {
                                _fun28123_ip = 113;
                                continue _fun28123
                            }
                        case 70:
                            var5 = 0.6666666666666666;
                            var4 = var2;
                            if (!(var3 < var5)) {
                                _fun28123_ip = 110;
                                continue _fun28123
                            }
                        case 87:
                            var6 = var1 - var2;
                            var5 = var5 - var3;
                            var6 = var6 * var5;
                            var5 = 6;
                            var5 = var6 * var5;
                            var4 = var2 + var5;
                        case 110:
                            var0 = var4;
                        case 113:
                            _fun28123_ip = 134;
                            continue _fun28123;
                        case 115:
                            var4 = var1 - var2;
                            var1 = 6;
                            var1 = var1 * var4;
                            var1 = var1 * var3;
                            var0 = var2 + var1;
                        case 134:
                            return var0;
                    }
                };
                var0 = 0.5;
                if (!(!(var1 < var0))) {
                    _fun28122_ip = 69;
                    continue _fun28122
                }
            case 55:
                var5 = var1 + var4;
                var0 = var1 * var4;
                var8 = var5 - var0;
                _fun28122_ip = 80;
                continue _fun28122;
            case 69:
                var0 = 1;
                var0 = var0 + var4;
                var8 = var1 * var0;
            case 80:
                var0 = 2;
                var0 = var0 * var1;
                var7 = var0 - var8;
                var5 = undefined;
                var0 = 0.3333333333333333;
                var1 = var10 + var0;
                var3 = var9.bind(var5)(var7, var8, var1);
                var2 = var9.bind(var5)(var7, var8, var10);
                var0 = var10 - var0;
                var6 = var9.bind(var5)(var7, var8, var0);
            case 132:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var1);
                var1 = global;
                var7 = var1.Math;
                var4 = var7.round;
                var0 = 255;
                var3 = var0 * var3;
                var4 = var4.bind(var7)(var3);
                var7 = var1.Math;
                var3 = var7.round;
                var2 = var0 * var2;
                var13 = var3.bind(var7)(var2);
                var2 = var1.Math;
                var1 = var2.round;
                var0 = var0 * var6;
                var12 = var1.bind(var2)(var0);
                var0 = var5.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = 1;
                var15 = var1;
                var14 = var4;
                var0 = new var15[var5](var14, var13, var12, var11, var10);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        var0 = arg0;
        var0 = var0.hsv;
        var1 = arg1;
        var1 = var1.hsv;
        var2 = var1.s;
        var1 = var1.v;
        var1 = var2 + var1;
        var2 = var0.s;
        var0 = var0.v;
        var0 = var2 + var0;
        var0 = var1 - var0;
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var15 = var0.Object;
    var12 = var15.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var15)(var2, var0, var8);
    var0 = 0;
    var8 = var14[var0];
    var0 = undefined;
    var8 = var11.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = {};
    var11 = "function hexWithOpacity_ColorUtilsTsx1(color,value){if(color.length===7){const alpha=value*255|0;return color+alpha.toString(16).padStart(2,'0').toUpperCase();}const hex=color.charAt(0)==='#'?color.slice(1):color;let r;let g;let b;let a;switch(hex.length){case 3:r=hex.charAt(0);g=hex.charAt(1);b=hex.charAt(2);r+=r;g+=g;b+=b;a=(value*255|0).toString(16).padStart(2,'0').toUpperCase();return'#'+r+g+b+a;case 4:r=hex.charAt(0);g=hex.charAt(1);b=hex.charAt(2);a=hex.charAt(3);r+=r;g+=g;b+=b;a+=a;const alpha4=parseInt(a,16)/255*value;const alpha4Hex=(alpha4*255|0).toString(16).padStart(2,'0').toUpperCase();return'#'+r+g+b+alpha4Hex;case 6:const alpha6=(value*255|0).toString(16).padStart(2,'0').toUpperCase();return'#'+hex+alpha6;case 8:const baseColor='#'+hex.slice(0,6);const existingAlpha=parseInt(hex.slice(6),16)/255;const alpha8=(existingAlpha*value*255|0).toString(16).padStart(2,'0').toUpperCase();return baseColor+alpha8;default:throw new Error('Invalid hex color format');}}";
    var8.code = var11;
    var _closure1_slot4 = var8;
    var8 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            _fun28126: for (var _fun28126_ip = 0;;) switch (_fun28126_ip) {
                case 0:
                    var1 = arg0;
                    var2 = arg1;
                    var3 = var1.length;
                    var0 = 7;
                    if (!(var0 !== var3)) {
                        _fun28126_ip = 588;
                        continue _fun28126
                    }
                case 21:
                    var0 = var1.charAt;
                    var3 = 0;
                    var0 = var0.bind(var1)(var3);
                    var6 = '#';
                    var5 = var1;
                    if (!(var6 === var0)) {
                        _fun28126_ip = 58;
                        continue _fun28126
                    }
                case 45:
                    var4 = var1.slice;
                    var0 = 1;
                    var5 = var4.bind(var1)(var0);
                case 58:
                    var4 = var5.length;
                    var9 = 3;
                    if (!(var9 !== var4)) {
                        _fun28126_ip = 468;
                        continue _fun28126
                    }
                case 73:
                    var0 = 4;
                    if (!(var0 !== var4)) {
                        _fun28126_ip = 309;
                        continue _fun28126
                    }
                case 83:
                    var7 = 6;
                    if (!(var7 !== var4)) {
                        _fun28126_ip = 245;
                        continue _fun28126
                    }
                case 93:
                    var0 = 8;
                    if (!(var0 !== var4)) {
                        _fun28126_ip = 136;
                        continue _fun28126
                    }
                case 100:
                    var0 = global;
                    var8 = var0.Error;
                    var0 = var8.prototype;
                    var4 = Object.create(var0, {
                        constructor: {
                            value: var8
                        }
                    });
                    var14 = 'Invalid hex color format';
                    var15 = var4;
                    var0 = new var15[var8](var14, var13);
                    var0 = var0 instanceof Object ? var0 : var4;
                    throw var0;
                case 136:
                    var0 = var5.slice;
                    var0 = var0.bind(var5)(var3, var7);
                    var4 = var6 + var0;
                    var0 = global;
                    var10 = var0.parseInt;
                    var0 = var5.slice;
                    var7 = var0.bind(var5)(var7);
                    var0 = undefined;
                    var8 = 16;
                    var0 = var10.bind(var0)(var7, var8);
                    var7 = 255;
                    var0 = var0 / var7;
                    var0 = var0 * var2;
                    var0 = var0 * var7;
                    var7 = var0 | 0;
                    var0 = var7.toString;
                    var10 = var0.bind(var7)(var8);
                    var8 = var10.padStart;
                    var7 = 2;
                    var0 = '0';
                    var7 = var8.bind(var10)(var7, var0);
                    var0 = var7.toUpperCase;
                    var0 = var0.bind(var7)();
                    var0 = var4 + var0;
                    return var0;
                case 245:
                    var4 = var6 + var5;
                    var0 = 255;
                    var0 = var0 * var2;
                    var8 = var0 | 0;
                    var7 = var8.toString;
                    var0 = 16;
                    var10 = var7.bind(var8)(var0);
                    var8 = var10.padStart;
                    var7 = 2;
                    var0 = '0';
                    var7 = var8.bind(var10)(var7, var0);
                    var0 = var7.toUpperCase;
                    var0 = var0.bind(var7)();
                    var0 = var4 + var0;
                    return var0;
                case 309:
                    var0 = var5.charAt;
                    var0 = var0.bind(var5)(var3);
                    var7 = var5.charAt;
                    var4 = 1;
                    var7 = var7.bind(var5)(var4);
                    var4 = var5.charAt;
                    var11 = 2;
                    var4 = var4.bind(var5)(var11);
                    var8 = var5.charAt;
                    var8 = var8.bind(var5)(var9);
                    var12 = var8 + var8;
                    var0 = var0 + var0;
                    var8 = var7 + var7;
                    var7 = var4 + var4;
                    var4 = global;
                    var9 = var4.parseInt;
                    var4 = undefined;
                    var10 = 16;
                    var4 = var9.bind(var4)(var12, var10);
                    var9 = 255;
                    var4 = var4 / var9;
                    var4 = var4 * var2;
                    var4 = var9 * var4;
                    var9 = var4 | 0;
                    var4 = var9.toString;
                    var10 = var4.bind(var9)(var10);
                    var9 = var10.padStart;
                    var4 = '0';
                    var9 = var9.bind(var10)(var11, var4);
                    var4 = var9.toUpperCase;
                    var4 = var4.bind(var9)();
                    var0 = var6 + var0;
                    var0 = var0 + var8;
                    var0 = var0 + var7;
                    var0 = var0 + var4;
                    return var0;
                case 468:
                    var0 = var5.charAt;
                    var0 = var0.bind(var5)(var3);
                    var4 = var5.charAt;
                    var3 = 1;
                    var4 = var4.bind(var5)(var3);
                    var3 = var5.charAt;
                    var9 = 2;
                    var3 = var3.bind(var5)(var9);
                    var0 = var0 + var0;
                    var5 = var4 + var4;
                    var4 = var3 + var3;
                    var3 = 255;
                    var3 = var3 * var2;
                    var8 = var3 | 0;
                    var7 = var8.toString;
                    var3 = 16;
                    var8 = var7.bind(var8)(var3);
                    var7 = var8.padStart;
                    var3 = '0';
                    var7 = var7.bind(var8)(var9, var3);
                    var3 = var7.toUpperCase;
                    var3 = var3.bind(var7)();
                    var0 = var6 + var0;
                    var0 = var0 + var5;
                    var0 = var0 + var4;
                    var0 = var0 + var3;
                    return var0;
                case 588:
                    var0 = 255;
                    var0 = var0 * var2;
                    var3 = var0 | 0;
                    var2 = var3.toString;
                    var0 = 16;
                    var4 = var2.bind(var3)(var0);
                    var3 = var4.padStart;
                    var2 = 2;
                    var0 = '0';
                    var2 = var3.bind(var4)(var2, var0);
                    var0 = var2.toUpperCase;
                    var0 = var0.bind(var2)();
                    var0 = var1 + var0;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 1677228068105.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var11 = var8.bind(var0)();
    var8 = {};
    var12 = 'function hexToRgbaString_ColorUtilsTsx2(hex,opacity){const{hexToRgba}=this.__closure;const{r:r,g:g,b:b,a:a}=hexToRgba(hex);return"rgba("+r+", "+g+", "+b+", "+(opacity!==null&&opacity!==void 0?opacity:a)+")";}';
    var8.code = var12;
    var _closure1_slot5 = var8;
    var8 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            _fun28128: for (var _fun28128_ip = 0;;) switch (_fun28128_ip) {
                case 0:
                    var0 = arg1;
                    var3 = _closure1_slot8;
                    var2 = undefined;
                    var1 = arg0;
                    var1 = var3.bind(var2)(var1);
                    var7 = var1.r;
                    var6 = var1.g;
                    var5 = var1.b;
                    var4 = var1.a;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun28128_ip = 50;
                        continue _fun28128
                    }
                case 47:
                    var4 = var0;
                case 50:
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var16 = 'rgba(';
                    var1 = ', ';
                    var8 = ')';
                    var15 = var7;
                    var14 = var1;
                    var13 = var6;
                    var12 = var1;
                    var11 = var5;
                    var10 = var1;
                    var9 = var4;
                    var0 = var16[var3](var15, var14, var13, var12, var11, var10, var9, var8, var7);
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot8;
        var2.hexToRgba = var3;
        var0.__closure = var2;
        var2 = 8956046161224.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot5;
        var0.__initData = var1;
        return var0;
    };
    var8 = var8.bind(var0)();
    var12 = {};
    var15 = {};
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.fBawRj;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#1abc9c'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.hvv3QR;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#2ecc71'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.JwX6Jd;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#3498db'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.H3xljj;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#9b59b6'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.X9izyR;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#e91e63'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.Kw7K2z;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#11806a'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.z5AZKW;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#1f8b4c'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.JqBqKz;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#206694'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.edPgnK;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#71368a'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.ti7gsS;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#ad1457'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["H9jz+S"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#f1c40f'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.UmsfHL;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#e67e22'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.GoDlAC;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#e74c3c'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["9GpDYK"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#95a5a6'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.lwrNQG;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#607d8b'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.Lf10GG;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#c27c0e'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["H+AjY7"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#arg84300'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.XTkdex;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#992d22'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.Ve0Lip;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#979c9f'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.BwbOAO;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#546e7a'] = var16;
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["/po5rJ"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15['#99aab5'] = var16;
    var19 = var12;
    var18 = var15;
    var15 = copyDataProperties(var19, var18);
    var16 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["Cn/LJ4"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var15 = '#5865f2';
    var12[var15] = var16;
    var _closure1_slot6 = var12;
    var12 = 5;
    var12 = var14[var12];
    var14 = var13.bind(var0)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'utils/ColorUtils.tsx';
    var12 = var13.bind(var14)(var12);
    var2.hexWithOpacity = var11;
    var2.hexToRgb = var10;
    var10 = function arg0() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var0 = arg0;
        var1 = var2.bind(var1)(var0);
        var2 = var1.r;
        var0 = new Array(3);
        var0[0] = var2;
        var2 = var1.g;
        var0[1] = var2;
        var1 = var1.b;
        var0[2] = var1;
        return var0;
    };
    var2.hexToRgbArray = var10;
    var2.hexToRgba = var9;
    var2.hexToRgbaString = var8;
    var8 = function arg0, arg1() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        var15 = var0.r;
        var13 = var0.g;
        var11 = var0.b;
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var16 = 'rgba(';
        var2 = ', ';
        var9 = arg1;
        var8 = ')';
        var14 = var2;
        var12 = var2;
        var10 = var2;
        var0 = var16[var4](var15, var14, var13, var12, var11, var10, var9, var8, var7);
        return var0;
    };
    var2.hexOpacityToRgba = var8;
    var2.rgbToHslObject = var7;
    var2.hslToString = var6;
    var6 = function arg0, arg1, arg2() {
        var5 = _closure1_slot9;
        var4 = undefined;
        var3 = arg0;
        var2 = arg1;
        var0 = arg2;
        var0 = var5.bind(var4)(var3, var2, var0);
        var3 = _closure1_slot10;
        var2 = var0.h;
        var1 = var0.s;
        var0 = var0.l;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.rgbToHsl = var6;
    var6 = function arg0, arg1, arg2() {
        var0 = arg0;
        var2 = 16;
        var3 = var0 << var2;
        var1 = arg1;
        var0 = 8;
        var1 = var1 << var0;
        var0 = 16777216;
        var0 = var0 + var3;
        var1 = var0 + var1;
        var0 = arg2;
        var1 = var1 + var0;
        var0 = var1.toString;
        var2 = var0.bind(var1)(var2);
        var1 = var2.slice;
        var0 = 1;
        var1 = var1.bind(var2)(var0);
        var0 = '#';
        var0 = var0 + var1;
        return var0;
    };
    var2.rgbToHex = var6;
    var6 = function arg0, arg1, arg2, arg3() {
        var2 = 256;
        var0 = arg0;
        var1 = var2 + var0;
        var0 = var1.toString;
        var4 = 16;
        var1 = var0.bind(var1)(var4);
        var0 = var1.slice;
        var3 = 1;
        var1 = var0.bind(var1)(var3);
        var0 = '#';
        var1 = var0 + var1;
        var0 = arg1;
        var5 = var2 + var0;
        var0 = var5.toString;
        var5 = var0.bind(var5)(var4);
        var0 = var5.slice;
        var0 = var0.bind(var5)(var3);
        var1 = var1 + var0;
        var0 = arg2;
        var5 = var2 + var0;
        var0 = var5.toString;
        var5 = var0.bind(var5)(var4);
        var0 = var5.slice;
        var0 = var0.bind(var5)(var3);
        var1 = var1 + var0;
        var0 = arg3;
        var2 = var2 + var0;
        var0 = var2.toString;
        var2 = var0.bind(var2)(var4);
        var0 = var2.slice;
        var0 = var0.bind(var2)(var3);
        var0 = var1 + var0;
        return var0;
    };
    var2.rgbaToHex = var6;
    var2.hslToHex = var5;
    var5 = function arg0, arg1() {
        _fun28156: for (var _fun28156_ip = 0;;) switch (_fun28156_ip) {
            case 0:
                var6 = arg0;
                var0 = _closure1_slot6;
                var1 = var0[var6];
                var0 = null;
                if (!(var0 != var1)) {
                    _fun28156_ip = 31;
                    continue _fun28156
                }
            case 20:
                var0 = undefined;
                var0 = var1.bind(var0)();
                _fun28156_ip = 201;
                continue _fun28156;
            case 31:
                var1 = arg1;
                if (var1) {
                    _fun28156_ip = 132;
                    continue _fun28156
                }
            case 37:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var1 = var4.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var10 = 'ColorUtils';
                var11 = var3;
                var1 = new var11[var4](var10, var9);
                var4 = var1 instanceof Object ? var1 : var3;
                var3 = var4.warn;
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var5 = 'Role color ';
                var1 = ' has not been localized!';
                var1 = var7.bind(var5)(var6, var1);
                var1 = var3.bind(var4)(var1);
                var1 = 'undefined';
                _fun28156_ip = 198;
                continue _fun28156;
            case 132:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 2;
                var4 = var8[var2];
                var3 = undefined;
                var4 = var7.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2["7BFCRR"];
                var2 = {};
                var2.color = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 198:
                var0 = var1;
            case 201:
                return var0;
        }
    };
    var2.hexToColorName = var5;
    var5 = function arg0, arg1() {
        var0 = arg0;
        var2 = arg1;
        var7 = var0.alpha;
        var6 = 1;
        var3 = var6 - var7;
        var1 = var2.red;
        var3 = var3 * var1;
        var1 = var0.red;
        var1 = var7 * var1;
        var5 = var3 + var1;
        var3 = var6 - var7;
        var1 = var2.green;
        var3 = var3 * var1;
        var1 = var0.green;
        var1 = var7 * var1;
        var10 = var3 + var1;
        var3 = var6 - var7;
        var1 = var2.blue;
        var3 = var3 * var1;
        var1 = var0.blue;
        var1 = var7 * var1;
        var9 = var3 + var1;
        var1 = var0.alpha;
        var2 = var2.alpha;
        var0 = var0.alpha;
        var0 = var6 - var0;
        var0 = var2 * var0;
        var8 = var1 + var0;
        var6 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var6.bind(var0)(var1);
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var12 = var1;
        var11 = var5;
        var0 = new var12[var0](var11, var10, var9, var8, var7);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.mixColors = var5;
    var2.hex2rgb2hsv = var4;
    var4 = function arg0() {
        _fun28158: for (var _fun28158_ip = 0;;) switch (_fun28158_ip) {
            case 0:
                var5 = arg0;
                var10 = arguments[1];
                var9 = undefined;
                if (!(var10 === var9)) {
                    _fun28158_ip = 15;
                    continue _fun28158
                }
            case 12:
                var10 = 3;
            case 15:
                var0 = new Array(0);
                var4 = _closure1_slot9;
                var7 = 0;
                var3 = var5[var7];
                var6 = 1;
                var2 = var5[var6];
                var1 = 2;
                var1 = var5[var1];
                var1 = var4.bind(var9)(var3, var2, var1);
                var5 = var1.h;
                var2 = var1.s;
                var3 = var1.l;
                var1 = 30;
                var4 = var2;
                if (!(var4 < var1)) {
                    _fun28158_ip = 82;
                    continue _fun28158
                }
            case 78:
                var4 = var2 + var1;
            case 82:
                var1 = 80;
                var2 = var3;
                if (!(var2 > var1)) {
                    _fun28158_ip = 99;
                    continue _fun28158
                }
            case 92:
                var1 = 40;
                var2 = var3 - var1;
            case 99:
                var1 = 20;
                var3 = var2;
                if (!(var3 < var1)) {
                    _fun28158_ip = 116;
                    continue _fun28158
                }
            case 109:
                var1 = 15;
                var3 = var2 + var1;
            case 116:
                var1 = var0.length;
                var2 = 360;
                if (!(var1 < var10)) {
                    _fun28158_ip = 219;
                    continue _fun28158
                }
            case 131:
                var1 = var10 + var6;
                var1 = var2 / var1;
                var1 = var5 - var1;
                var11 = var1;
                if (!(var11 < var7)) {
                    _fun28158_ip = 154;
                    continue _fun28158
                }
            case 150:
                var11 = var1 + var2;
            case 154:
                var1 = _closure1_slot13;
                var1 = var1.bind(var9)(var11, var4, var3);
                var15 = var1.r;
                var14 = var1.g;
                var13 = var1.b;
                var12 = var0.push;
                var1 = new Array(3);
                var1[0] = var15;
                var1[1] = var14;
                var1[2] = var13;
                var1 = var12.bind(var0)(var1);
                var1 = var0.length;
                var5 = var11;
                if (var1 < var10) {
                    _fun28158_ip = 131;
                    continue _fun28158
                }
            case 219:
                return var0;
        }
    };
    var2.getComplimentaryPaletteForColor = var4;
    var2.rawRgbToHsl = var3;
    var3 = function arg0, arg1() {
        _fun28159: for (var _fun28159_ip = 0;;) switch (_fun28159_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var2 = arguments[2];
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun28159_ip = 17;
                    continue _fun28159
                }
            case 15:
                var2 = false;
            case 17:
                var7 = _closure1_slot14;
                var5 = var0.red;
                var3 = var0.green;
                var0 = var0.blue;
                var0 = var7.bind(var4)(var5, var3, var0);
                var3 = var0.lightness;
                if (var2) {
                    _fun28159_ip = 90;
                    continue _fun28159
                }
            case 58:
                var7 = var3 - var6;
                var2 = 0.1;
                var5 = 0;
                if (!(!(var7 < var5))) {
                    _fun28159_ip = 88;
                    continue _fun28159
                }
            case 78:
                var5 = var0.lightness;
                var2 = var5 - var6;
            case 88:
                _fun28159_ip = 124;
                continue _fun28159;
            case 90:
                var7 = var3 + var6;
                var3 = 0.9;
                var5 = 1;
                if (!(!(var7 > var5))) {
                    _fun28159_ip = 121;
                    continue _fun28159
                }
            case 111:
                var5 = var0.lightness;
                var3 = var5 + var6;
            case 121:
                var2 = var3;
            case 124:
                var0.lightness = var2;
                var3 = _closure1_slot15;
                var2 = var0.hue;
                var1 = var0.saturation;
                var0 = var0.lightness;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var2.getColorLightnessAdjusted = var3;
    var3 = function arg0() {
        _fun28160: for (var _fun28160_ip = 0;;) switch (_fun28160_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.foreground;
                var7 = var0.background;
                var13 = var0.ratio;
                var12 = undefined;
                if (!(var13 === var12)) {
                    _fun28160_ip = 30;
                    continue _fun28160
                }
            case 27:
                var13 = 5;
            case 30:
                var8 = var0.saturationFactor;
                if (!(var8 === var12)) {
                    _fun28160_ip = 43;
                    continue _fun28160
                }
            case 40:
                var8 = 1;
            case 43:
                var2 = 1;
                var1 = var5;
                var3 = var7;
                if (!(var8 < var2)) {
                    _fun28160_ip = 112;
                    continue _fun28160
                }
            case 56:
                var4 = var5.set;
                var0 = var5.get;
                var6 = 'hsl.s';
                var0 = var0.bind(var5)(var6);
                var0 = var0 * var8;
                var1 = var4.bind(var5)(var6, var0);
                var5 = var7.set;
                var0 = var7.get;
                var0 = var0.bind(var7)(var6);
                var0 = var0 * var8;
                var3 = var5.bind(var7)(var6, var0);
            case 112:
                var0 = var3.luminance;
                var4 = var0.bind(var3)();
                var0 = 0.5;
                var11 = var4 <= var0;
                var4 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var4 = var4.bind(var12)(var0);
                var0 = var4.contrast;
                var0 = var0.bind(var4)(var1, var3);
                var0 = var0 < var13;
                var8 = 10;
                var7 = 0.05;
                var6 = 'hsl.l';
                var5 = 0.95;
                var4 = var3;
                var3 = var1;
                var9 = 0;
                var1 = var3;
                if (!var0) {
                    _fun28160_ip = 326;
                    continue _fun28160
                }
            case 215:
                var0 = var3.get;
                var0 = var0.bind(var3)(var6);
                var16 = var3;
                if (var11) {
                    _fun28160_ip = 255;
                    continue _fun28160
                }
            case 231:
                var1 = var16;
                if (!(var0 > var7)) {
                    _fun28160_ip = 326;
                    continue _fun28160
                }
            case 238:
                var15 = var16.set;
                var14 = var0 - var7;
                var14 = var15.bind(var16)(var6, var14);
                _fun28160_ip = 277;
                continue _fun28160;
            case 255:
                var1 = var16;
                if (!(var0 < var5)) {
                    _fun28160_ip = 326;
                    continue _fun28160
                }
            case 262:
                var15 = var16.set;
                var0 = var0 + var7;
                var14 = var15.bind(var16)(var6, var0);
            case 277:
                var15 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var15 = var15.bind(var12)(var0);
                var0 = var15.contrast;
                var0 = var0.bind(var15)(var14, var4);
                var9 = var9 + 1;
                var1 = var14;
                if (!(var9 < var8)) {
                    _fun28160_ip = 326;
                    continue _fun28160
                }
            case 316:
                var3 = var14;
                var1 = var3;
                if (var0 < var13) {
                    _fun28160_ip = 215;
                    continue _fun28160
                }
            case 326:
                var0 = var1.alpha;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.getAccessibleForegroundColor = var3;
    var3 = function arg0() {
        var3 = arg0;
        var2 = var3.slice;
        var1 = 0;
        var0 = 3;
        var3 = var2.bind(var3)(var1, var0);
        var2 = var3.map;
        var0 = function(arg0) { // Environment: var0
            _fun28162: for (var _fun28162_ip = 0;;) switch (_fun28162_ip) {
                case 0:
                    var3 = arg0;
                    var0 = {};
                    var0.hex = var3;
                    var2 = _closure1_slot12;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    var2 = null;
                    if (!(var2 == var1)) {
                        _fun28162_ip = 44;
                        continue _fun28162
                    }
                case 30:
                    var1 = {
                        'h': 0,
                        's': 0,
                        'v': 0
                    };
                case 44:
                    var0.hsv = var1;
                    return var0;
            }
        };
        var3 = var2.bind(var3)(var0);
        var2 = var3.sort;
        var0 = _closure1_slot16;
        var0 = var2.bind(var3)(var0);
        var0 = var0[var1];
        var0 = var0.hex;
        return var0;
    };
    var2.findColorByHsv = var3;
    var3 = function arg0() {
        _fun28163: for (var _fun28163_ip = 0;;) switch (_fun28163_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.colorRGB;
                var7 = var1.saturationFactor;
                var2 = undefined;
                if (!(var7 === var2)) {
                    _fun28163_ip = 24;
                    continue _fun28163
                }
            case 21:
                var7 = 1;
            case 24:
                var3 = null;
                if (!(var3 != var0)) {
                    _fun28163_ip = 177;
                    continue _fun28163
                }
            case 33:
                var8 = _closure1_slot14;
                var5 = var0.get;
                var1 = 'rgb.r';
                var6 = var5.bind(var0)(var1);
                var5 = var0.get;
                var1 = 'rgb.g';
                var5 = var5.bind(var0)(var1);
                var9 = var0.get;
                var1 = 'rgb.b';
                var1 = var9.bind(var0)(var1);
                var1 = var8.bind(var2)(var6, var5, var1);
                if (!(var3 != var1)) {
                    _fun28163_ip = 153;
                    continue _fun28163
                }
            case 99:
                var6 = _closure1_slot15;
                var5 = var1.hue;
                var4 = var1.saturation;
                var4 = var4 * var7;
                var1 = var1.lightness;
                var5 = var6.bind(var2)(var5, var4, var1);
                var4 = var3 == var5;
                var1 = undefined;
                if (var4) {
                    _fun28163_ip = 151;
                    continue _fun28163
                }
            case 141:
                var4 = var5.toHexString;
                var1 = var4.bind(var5)();
            case 151:
                _fun28163_ip = 175;
                continue _fun28163;
            case 153:
                var3 = var3 == var0;
                var2 = undefined;
                if (var3) {
                    _fun28163_ip = 172;
                    continue _fun28163
                }
            case 162:
                var3 = var0.hex;
                var2 = var3.bind(var0)();
            case 172:
                var1 = var2;
            case 175:
                return var1;
            case 177:
                return var0;
        }
    };
    var2.getSaturatedColorHex = var3;
    var1 = function arg0, arg1, arg2() {
        var9 = arg0;
        var13 = arg1;
        var10 = arg2;
        var0 = global;
        var2 = var0.parseInt;
        var1 = var9.substring;
        var3 = 1;
        var4 = 3;
        var1 = var1.bind(var9)(var3, var4);
        var5 = undefined;
        var7 = 16;
        var6 = var2.bind(var5)(var1, var7);
        var2 = var0.parseInt;
        var1 = var9.substring;
        var12 = 5;
        var1 = var1.bind(var9)(var4, var12);
        var11 = var2.bind(var5)(var1, var7);
        var2 = var0.parseInt;
        var1 = var9.substring;
        var8 = 7;
        var1 = var1.bind(var9)(var12, var8);
        var9 = var2.bind(var5)(var1, var7);
        var2 = var0.parseInt;
        var1 = var13.substring;
        var1 = var1.bind(var13)(var3, var4);
        var3 = var2.bind(var5)(var1, var7);
        var2 = var0.parseInt;
        var1 = var13.substring;
        var1 = var1.bind(var13)(var4, var12);
        var2 = var2.bind(var5)(var1, var7);
        var4 = var0.parseInt;
        var1 = var13.substring;
        var1 = var1.bind(var13)(var12, var8);
        var1 = var4.bind(var5)(var1, var7);
        var5 = var0.Math;
        var4 = var5.round;
        var3 = var3 - var6;
        var3 = var3 * var10;
        var3 = var6 + var3;
        var4 = var4.bind(var5)(var3);
        var3 = var4.toString;
        var4 = var3.bind(var4)(var7);
        var3 = var4.padStart;
        var6 = 2;
        var5 = '0';
        var4 = var3.bind(var4)(var6, var5);
        var8 = var0.Math;
        var3 = var8.round;
        var2 = var2 - var11;
        var2 = var2 * var10;
        var2 = var11 + var2;
        var3 = var3.bind(var8)(var2);
        var2 = var3.toString;
        var3 = var2.bind(var3)(var7);
        var2 = var3.padStart;
        var3 = var2.bind(var3)(var6, var5);
        var8 = var0.Math;
        var2 = var8.round;
        var1 = var1 - var9;
        var1 = var1 * var10;
        var1 = var9 + var1;
        var2 = var2.bind(var8)(var1);
        var1 = var2.toString;
        var2 = var1.bind(var2)(var7);
        var1 = var2.padStart;
        var2 = var1.bind(var2)(var6, var5);
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = '#';
        var0 = var1.bind(var0)(var4, var3, var2);
        return var0;
    };
    var2.interpolateColor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 669, 1234, 3, 3241, 2]);