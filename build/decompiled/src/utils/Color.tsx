// utils/Color.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var1 = function(arg0) { // Original name: hslToRgb, environment: var3
        _fun27985: for (var _fun27985_ip = 0;;) switch (_fun27985_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.hue;
                var4 = var1.saturation;
                var3 = var1.lightness;
                var1 = var1.alpha;
                var2 = 255;
                var7 = var4 / var2;
                var9 = var3 / var2;
                var2 = global;
                var10 = var2.Math;
                var8 = var10.abs;
                var3 = 2;
                var6 = var3 * var9;
                var4 = 1;
                var6 = var6 - var4;
                var6 = var8.bind(var10)(var6);
                var6 = var4 - var6;
                var7 = var6 * var7;
                var10 = var2.Math;
                var8 = var10.abs;
                var2 = 60;
                var6 = var5 / var2;
                var6 = var6 % var3;
                var6 = var6 - var4;
                var6 = var8.bind(var10)(var6);
                var6 = var4 - var6;
                var6 = var7 * var6;
                var8 = var7 / var3;
                var8 = var9 - var8;
                var _closure2_slot0 = var8;
                if (!(!(var5 < var2))) {
                    _fun27985_ip = 283;
                    continue _fun27985
                }
            case 140:
                var2 = 120;
                if (!(!(var5 < var2))) {
                    _fun27985_ip = 260;
                    continue _fun27985
                }
            case 147:
                var2 = 180;
                if (!(!(var5 < var2))) {
                    _fun27985_ip = 237;
                    continue _fun27985
                }
            case 154:
                var2 = 240;
                if (!(!(var5 < var2))) {
                    _fun27985_ip = 214;
                    continue _fun27985
                }
            case 161:
                var2 = 300;
                if (!(!(var5 < var2))) {
                    _fun27985_ip = 191;
                    continue _fun27985
                }
            case 171:
                var5 = new Array(3);
                var5[0] = var7;
                var2 = 0;
                var5[1] = var2;
                var5[2] = var6;
                _fun27985_ip = 212;
                continue _fun27985;
            case 191:
                var2 = new Array(3);
                var2[0] = var6;
                var8 = 0;
                var2[1] = var8;
                var2[2] = var7;
                var5 = var2;
            case 212:
                _fun27985_ip = 235;
                continue _fun27985;
            case 214:
                var2 = [0];
                var2[1] = var6;
                var2[2] = var7;
                var5 = var2;
            case 235:
                _fun27985_ip = 258;
                continue _fun27985;
            case 237:
                var2 = [0];
                var2[1] = var7;
                var2[2] = var6;
                var5 = var2;
            case 258:
                _fun27985_ip = 281;
                continue _fun27985;
            case 260:
                var2 = new Array(3);
                var2[0] = var6;
                var2[1] = var7;
                var8 = 0;
                var2[2] = var8;
                var5 = var2;
            case 281:
                _fun27985_ip = 304;
                continue _fun27985;
            case 283:
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var6 = 0;
                var2[2] = var6;
                var5 = var2;
            case 304:
                var2 = var5.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = global;
                    var2 = var0.Math;
                    var1 = var2.round;
                    var3 = _closure2_slot0;
                    var0 = arg0;
                    var3 = var0 + var3;
                    var0 = 255;
                    var0 = var0 * var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var2.bind(var5)(var0);
                var0 = {};
                var5 = 0;
                var5 = var2[var5];
                var0.red = var5;
                var4 = var2[var4];
                var0.green = var4;
                var2 = var2[var3];
                var0.blue = var2;
                var0.alpha = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var5[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = /^#[0-9a-f]{3,8}$/i;
    var _closure1_slot3 = var4;
    var4 = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
    var _closure1_slot4 = var4;
    var3 = function() { // Environment: var3
        var4 = function(arg0, arg1, arg2, arg3) { // Original name: Color, environment: var5
            var2 = this;
            var3 = _closure1_slot1;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.red = var1;
            var1 = arg1;
            var2.green = var1;
            var1 = arg2;
            var2.blue = var1;
            var1 = arg3;
            var2.alpha = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot2;
        var0 = {};
        var1 = 'toHexString';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var5
            _fun27989: for (var _fun27989_ip = 0;;) switch (_fun27989_ip) {
                case 0:
                    var0 = this;
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.round;
                    var2 = var0.red;
                    var4 = var3.bind(var4)(var2);
                    var2 = var4.toString;
                    var3 = 16;
                    var5 = var2.bind(var4)(var3);
                    var6 = var1.Math;
                    var4 = var6.round;
                    var2 = var0.green;
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.toString;
                    var6 = var2.bind(var4)(var3);
                    var4 = var1.Math;
                    var2 = var4.round;
                    var1 = var0.blue;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.toString;
                    var3 = var1.bind(var2)(var3);
                    var1 = var0.red;
                    var4 = 15.5;
                    var2 = var5;
                    if (!(!(var1 > var4))) {
                        _fun27989_ip = 137;
                        continue _fun27989
                    }
                case 127:
                    var1 = '0';
                    var2 = var1 + var5;
                case 137:
                    var1 = '#';
                    var2 = var1 + var2;
                    var5 = var0.green;
                    var1 = var6;
                    if (!(!(var5 > var4))) {
                        _fun27989_ip = 168;
                        continue _fun27989
                    }
                case 158:
                    var5 = '0';
                    var1 = var5 + var6;
                case 168:
                    var1 = var2 + var1;
                    var2 = var0.blue;
                    var0 = var3;
                    if (!(!(var2 > var4))) {
                        _fun27989_ip = 195;
                        continue _fun27989
                    }
                case 185:
                    var2 = '0';
                    var0 = var2 + var3;
                case 195:
                    var0 = var1 + var0;
                    return var0;
            }
        };
        var0.value = var1;
        var2 = new Array(3);
        var2[0] = var0;
        var0 = {};
        var1 = 'toHSL';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var5
            _fun27990: for (var _fun27990_ip = 0;;) switch (_fun27990_ip) {
                case 0:
                    var1 = this;
                    var0 = {};
                    var2 = var1.red;
                    var0.red = var2;
                    var2 = var1.green;
                    var0.green = var2;
                    var2 = var1.blue;
                    var0.blue = var2;
                    var1 = var1.alpha;
                    var0.alpha = var1;
                    var4 = var0.red;
                    var3 = var0.green;
                    var1 = var0.blue;
                    var2 = var0.alpha;
                    var0 = 255;
                    var8 = var4 / var0;
                    var7 = var3 / var0;
                    var0 = var1 / var0;
                    var6 = global;
                    var3 = var6.Math;
                    var1 = var3.max;
                    var10 = var1.bind(var3)(var8, var7, var0);
                    var3 = var6.Math;
                    var1 = var3.min;
                    var3 = var1.bind(var3)(var8, var7, var0);
                    var1 = var10 - var3;
                    var3 = var10 + var3;
                    var9 = 2;
                    var3 = var3 / var9;
                    var5 = 0;
                    var4 = 0;
                    if (!(var1 > var5)) {
                        _fun27990_ip = 185;
                        continue _fun27990
                    }
                case 149:
                    var13 = var6.Math;
                    var12 = var13.abs;
                    var6 = var9 * var3;
                    var11 = 1;
                    var6 = var6 - var11;
                    var6 = var12.bind(var13)(var6);
                    var6 = var11 - var6;
                    var4 = var1 / var6;
                case 185:
                    if (!(var5 !== var1)) {
                        _fun27990_ip = 280;
                        continue _fun27990
                    }
                case 189:
                    if (!(var8 !== var10)) {
                        _fun27990_ip = 234;
                        continue _fun27990
                    }
                case 193:
                    if (!(var7 !== var10)) {
                        _fun27990_ip = 220;
                        continue _fun27990
                    }
                case 197:
                    var6 = 0;
                    if (!(var0 === var10)) {
                        _fun27990_ip = 249;
                        continue _fun27990
                    }
                case 203:
                    var10 = var7 - var0;
                    var11 = var10 / var1;
                    var10 = 4;
                    var6 = var11 + var10;
                    _fun27990_ip = 249;
                    continue _fun27990;
                case 220:
                    var8 = var0 - var8;
                    var8 = var8 / var1;
                    var6 = var8 + var9;
                    _fun27990_ip = 249;
                    continue _fun27990;
                case 234:
                    var0 = var7 - var0;
                    var1 = var0 / var1;
                    var0 = 6;
                    var6 = var1 % var0;
                case 249:
                    var0 = {};
                    var1 = 60;
                    var1 = var1 * var6;
                    var0.hue = var1;
                    var0.saturation = var4;
                    var0.lightness = var3;
                    var0.alpha = var2;
                    _fun27990_ip = 305;
                    continue _fun27990;
                case 280:
                    var1 = {};
                    var1.hue = var5;
                    var1.saturation = var4;
                    var1.lightness = var3;
                    var1.alpha = var2;
                    var0 = var1;
                case 305:
                    return var0;
            }
        };
        var0.value = var1;
        var2[1] = var0;
        var0 = {};
        var1 = 'getRelativeLuminance';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var5
            _fun27991: for (var _fun27991_ip = 0;;) switch (_fun27991_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.red;
                    var1 = 255;
                    var3 = var2 / var1;
                    var2 = var0.green;
                    var5 = var2 / var1;
                    var0 = var0.blue;
                    var4 = var0 / var1;
                    var1 = 0.03928;
                    if (!(!(var3 <= var1))) {
                        _fun27991_ip = 110;
                        continue _fun27991
                    }
                case 50:
                    var0 = global;
                    var7 = var0.Math;
                    var6 = var7.pow;
                    var0 = 0.055;
                    var2 = var3 + var0;
                    var0 = 1.055;
                    var2 = var2 / var0;
                    var0 = 2.4;
                    var2 = var6.bind(var7)(var2, var0);
                    _fun27991_ip = 124;
                    continue _fun27991;
                case 110:
                    var0 = 12.92;
                    var2 = var3 / var0;
                case 124:
                    var0 = 0.2126;
                    var2 = var0 * var2;
                    if (!(!(var5 <= var1))) {
                        _fun27991_ip = 202;
                        continue _fun27991
                    }
                case 142:
                    var0 = global;
                    var7 = var0.Math;
                    var6 = var7.pow;
                    var0 = 0.055;
                    var3 = var5 + var0;
                    var0 = 1.055;
                    var3 = var3 / var0;
                    var0 = 2.4;
                    var3 = var6.bind(var7)(var3, var0);
                    _fun27991_ip = 216;
                    continue _fun27991;
                case 202:
                    var0 = 12.92;
                    var3 = var5 / var0;
                case 216:
                    var0 = 0.7152;
                    var0 = var0 * var3;
                    if (!(!(var4 <= var1))) {
                        _fun27991_ip = 294;
                        continue _fun27991
                    }
                case 234:
                    var1 = global;
                    var6 = var1.Math;
                    var5 = var6.pow;
                    var1 = 0.055;
                    var3 = var4 + var1;
                    var1 = 1.055;
                    var3 = var3 / var1;
                    var1 = 2.4;
                    var3 = var5.bind(var6)(var3, var1);
                    _fun27991_ip = 308;
                    continue _fun27991;
                case 294:
                    var1 = 12.92;
                    var3 = var4 / var1;
                case 308:
                    var1 = 0.0722;
                    var1 = var1 * var3;
                    var0 = var2 + var0;
                    var0 = var0 + var1;
                    return var0;
            }
        };
        var0.value = var1;
        var2[2] = var0;
        var0 = {};
        var1 = 'parseString';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var5
            _fun27992: for (var _fun27992_ip = 0;;) switch (_fun27992_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var4 = var3.match;
                    var1 = _closure1_slot4;
                    var4 = var4.bind(var3)(var1);
                    var1 = null;
                    if (!(var1 == var4)) {
                        _fun27992_ip = 69;
                        continue _fun27992
                    }
                case 30:
                    var4 = var3.match;
                    var0 = _closure1_slot3;
                    var0 = var4.bind(var3)(var0);
                    var1 = var1 != var0;
                    var0 = undefined;
                    if (!var1) {
                        _fun27992_ip = 67;
                        continue _fun27992
                    }
                case 54:
                    var1 = var2.parseHexString;
                    var0 = var1.bind(var2)(var3);
                case 67:
                    _fun27992_ip = 80;
                    continue _fun27992;
                case 69:
                    var1 = var2.parseColorFnString;
                    var0 = var1.bind(var2)(var3);
                case 80:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var6 = 'parseRgbString';
        var0.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun27993: for (var _fun27993_ip = 0;;) switch (_fun27993_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = 'transparent';
                    if (!(var0 !== var2)) {
                        _fun27993_ip = 27;
                        continue _fun27993
                    }
                case 14:
                    var0 = var1.parseColorFnString;
                    var0 = var0.bind(var1)(var2);
                    _fun27993_ip = 62;
                    continue _fun27993;
                case 27:
                    var3 = _closure2_slot0;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var8 = var2;
                    var7 = 0;
                    var6 = 0;
                    var5 = 0;
                    var4 = 0;
                    var1 = new var8[var3](var7, var6, var5, var4, var3);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 62:
                    return var0;
            }
        };
        var0.value = var6;
        var1[1] = var0;
        var0 = {};
        var6 = 'parseHexString';
        var0.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun27994: for (var _fun27994_ip = 0;;) switch (_fun27994_ip) {
                case 0:
                    var4 = arg0;
                    var2 = var4.match;
                    var1 = _closure1_slot3;
                    var1 = var2.bind(var4)(var1);
                    var11 = null;
                    if (!(var11 != var1)) {
                        _fun27994_ip = 345;
                        continue _fun27994
                    }
                case 30:
                    var3 = [6, 8];
                    var2 = var3.includes;
                    var1 = var4.length;
                    var1 = var2.bind(var3)(var1);
                    if (var1) {
                        _fun27994_ip = 345;
                        continue _fun27994
                    }
                case 61:
                    var3 = var4.replace;
                    var2 = '#';
                    var1 = '';
                    var4 = var3.bind(var4)(var2, var1);
                    var3 = var4.length;
                    var1 = 6;
                    var2 = var4;
                    if (!(var3 < var1)) {
                        _fun27994_ip = 172;
                        continue _fun27994
                    }
                case 95:
                    var3 = _closure1_slot0;
                    var1 = undefined;
                    var0 = 4;
                    var5 = var3.bind(var1)(var4, var0);
                    var0 = 0;
                    var1 = var5[var0];
                    var0 = 1;
                    var4 = var5[var0];
                    var0 = 2;
                    var3 = var5[var0];
                    var0 = 3;
                    var0 = var5[var0];
                    var1 = var1 + var1;
                    var1 = var1 + var4;
                    var1 = var1 + var4;
                    var1 = var1 + var3;
                    var1 = var1 + var3;
                    var2 = var1;
                    if (!(var11 != var0)) {
                        _fun27994_ip = 172;
                        continue _fun27994
                    }
                case 164:
                    var0 = var0 + var0;
                    var2 = var1 + var0;
                case 172:
                    var1 = var2.match;
                    var0 = /.{1,2}/g;
                    var9 = var1.bind(var2)(var0);
                    if (!(var11 != var9)) {
                        _fun27994_ip = 345;
                        continue _fun27994
                    }
                case 204:
                    var5 = _closure2_slot0;
                    var6 = global;
                    var1 = var6.parseInt;
                    var0 = 0;
                    var0 = var9[var0];
                    var8 = undefined;
                    var7 = 16;
                    var4 = var1.bind(var8)(var0, var7);
                    var1 = var6.parseInt;
                    var3 = 1;
                    var0 = var9[var3];
                    var2 = var1.bind(var8)(var0, var7);
                    var1 = var6.parseInt;
                    var0 = 2;
                    var0 = var9[var0];
                    var0 = var1.bind(var8)(var0, var7);
                    var1 = 3;
                    var10 = var9[var1];
                    var10 = var11 != var10;
                    if (!var10) {
                        _fun27994_ip = 311;
                        continue _fun27994
                    }
                case 288:
                    var6 = var6.parseInt;
                    var1 = var9[var1];
                    var6 = var6.bind(var8)(var1, var7);
                    var1 = 255;
                    var3 = var6 / var1;
                case 311:
                    var1 = var5.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var5
                        }
                    });
                    var16 = var1;
                    var15 = var4;
                    var14 = var2;
                    var13 = var0;
                    var12 = var3;
                    var0 = new var16[var5](var15, var14, var13, var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                case 345:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var6;
        var1[2] = var0;
        var0 = {};
        var6 = 'parseColorFnString';
        var0.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun27995: for (var _fun27995_ip = 0;;) switch (_fun27995_ip) {
                case 0:
                    var4 = arg0;
                    var3 = var4.match;
                    var2 = _closure1_slot4;
                    var6 = var3.bind(var4)(var2);
                    var3 = null;
                    if (!(var3 == var6)) {
                        _fun27995_ip = 33;
                        continue _fun27995
                    }
                case 29:
                    var6 = new Array(0);
                case 33:
                    var5 = _closure1_slot0;
                    var2 = undefined;
                    var4 = 3;
                    var7 = var5.bind(var2)(var6, var4);
                    var6 = 1;
                    var8 = var7[var6];
                    var _closure3_slot0 = var8;
                    var5 = 2;
                    var9 = var7[var5];
                    if (!(var3 != var8)) {
                        _fun27995_ip = 74;
                        continue _fun27995
                    }
                case 70:
                    if (!(var3 == var9)) {
                        _fun27995_ip = 76;
                        continue _fun27995
                    }
                case 74:
                    return var2;
                case 76:
                    var7 = var9.split;
                    var3 = /\s*[,\/\s]\s*/;
                    var9 = var7.bind(var9)(var3);
                    var7 = var9.map;
                    var3 = function(arg0) { // Environment: var1
                        var3 = arg0;
                        var2 = var3.replace;
                        var1 = ',';
                        var0 = '';
                        var1 = var2.bind(var3)(var1, var0);
                        var0 = var1.trim;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var9 = var7.bind(var9)(var3);
                    var7 = var9.filter;
                    var3 = function(arg0) { // Environment: var1
                        var1 = '';
                        var0 = arg0;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var7 = var7.bind(var9)(var3);
                    var3 = var7.map;
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun27998: for (var _fun27998_ip = 0;;) switch (_fun27998_ip) {
                            case 0:
                                var4 = arg0;
                                var2 = arg1;
                                var0 = _closure3_slot0;
                                var3 = /%$/;
                                var1 = var3.test;
                                var1 = var1.bind(var3)(var4);
                                if (var1) {
                                    _fun27998_ip = 184;
                                    continue _fun27998
                                }
                            case 43:
                                var1 = var0[var2];
                                var0 = 'h';
                                if (!(var0 === var1)) {
                                    _fun27998_ip = 109;
                                    continue _fun27998
                                }
                            case 55:
                                var1 = /turn$/;
                                var0 = var1.test;
                                var0 = var0.bind(var1)(var4);
                                if (var0) {
                                    _fun27998_ip = 157;
                                    continue _fun27998
                                }
                            case 82:
                                var1 = /rad$/;
                                var0 = var1.test;
                                var0 = var0.bind(var1)(var4);
                                if (var0) {
                                    _fun27998_ip = 126;
                                    continue _fun27998
                                }
                            case 109:
                                var0 = global;
                                var1 = var0.parseFloat;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var4);
                                _fun27998_ip = 247;
                                continue _fun27998;
                            case 126:
                                var1 = global;
                                var3 = var1.parseFloat;
                                var1 = undefined;
                                var3 = var3.bind(var1)(var4);
                                var1 = 57.3;
                                var0 = var1 * var3;
                                _fun27998_ip = 247;
                                continue _fun27998;
                            case 157:
                                var1 = global;
                                var3 = var1.parseFloat;
                                var1 = undefined;
                                var3 = var3.bind(var1)(var4);
                                var1 = 360;
                                var0 = var1 * var3;
                                _fun27998_ip = 247;
                                continue _fun27998;
                            case 184:
                                var1 = 3;
                                if (!(var1 !== var2)) {
                                    _fun27998_ip = 222;
                                    continue _fun27998
                                }
                            case 191:
                                var1 = global;
                                var2 = var1.parseFloat;
                                var1 = undefined;
                                var2 = var2.bind(var1)(var4);
                                var1 = 255;
                                var2 = var1 * var2;
                                var1 = 100;
                                var1 = var2 / var1;
                                _fun27998_ip = 244;
                                continue _fun27998;
                            case 222:
                                var2 = global;
                                var3 = var2.parseFloat;
                                var2 = undefined;
                                var3 = var3.bind(var2)(var4);
                                var2 = 100;
                                var1 = var3 / var2;
                            case 244:
                                var0 = var1;
                            case 247:
                                return var0;
                        }
                    };
                    var3 = var3.bind(var7)(var1);
                    var1 = var8.substr;
                    var7 = 0;
                    var8 = var1.bind(var8)(var7, var4);
                    var1 = 'hsl';
                    if (!(var1 !== var8)) {
                        _fun27995_ip = 242;
                        continue _fun27995
                    }
                case 167:
                    var12 = _closure2_slot0;
                    var11 = var3[var7];
                    var10 = var3[var6];
                    var9 = var3[var5];
                    var1 = var3[var4];
                    var13 = 'number';
                    var8 = typeof var1;
                    var1 = var6;
                    if (!(var13 === var8)) {
                        _fun27995_ip = 208;
                        continue _fun27995
                    }
                case 204:
                    var1 = var3[var4];
                case 208:
                    var8 = var12.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var12
                        }
                    });
                    var18 = var8;
                    var17 = var11;
                    var16 = var10;
                    var15 = var9;
                    var14 = var1;
                    var1 = new var18[var12](var17, var16, var15, var14, var13);
                    var1 = var1 instanceof Object ? var1 : var8;
                    return var1;
                case 242:
                    var1 = _closure1_slot5;
                    var0 = {};
                    var7 = var3[var7];
                    var0.hue = var7;
                    var6 = var3[var6];
                    var0.saturation = var6;
                    var5 = var3[var5];
                    var0.lightness = var5;
                    var3 = var3[var4];
                    var0.alpha = var3;
                    var0 = var1.bind(var2)(var0);
                    var5 = _closure2_slot0;
                    var17 = var0.red;
                    var16 = var0.green;
                    var15 = var0.blue;
                    var14 = var0.alpha;
                    var1 = var5.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var5
                        }
                    });
                    var18 = var1;
                    var0 = new var18[var5](var17, var16, var15, var14, var13);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var4 = 3;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/Color.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.hslToRgb = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 2]);