// ../discord_common/js/shared/utils/ColorUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var6 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var0 = function arg0() {
        _fun7972: for (var _fun7972_ip = 0;;) switch (_fun7972_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.length;
                var1 = 1;
                var0 = var3;
                if (!(var1 === var2)) {
                    _fun7972_ip = 42;
                    continue _fun7972
                }
            case 18:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '0';
                var0 = var2.bind(var1)(var3);
            case 42:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var5 = function arg0() {
        _fun7973: for (var _fun7973_ip = 0;;) switch (_fun7973_ip) {
            case 0:
                var0 = arg0;
                var1 = 16;
                var3 = var0 >> var1;
                var1 = 8;
                var2 = var0 >> var1;
                var1 = 255;
                var0 = var1 & var0;
                var3 = var3 & var1;
                var10 = var3 / var1;
                var2 = var2 & var1;
                var8 = var2 / var1;
                var7 = var0 / var1;
                var5 = global;
                var1 = var5.Math;
                var0 = var1.min;
                var1 = var0.bind(var1)(var10, var8, var7);
                var2 = var5.Math;
                var0 = var2.max;
                var0 = var0.bind(var2)(var10, var8, var7);
                var2 = var0 - var1;
                var4 = 0;
                var6 = var4 === var2;
                var9 = 0;
                if (var6) {
                    _fun7973_ip = 157;
                    continue _fun7973
                }
            case 97:
                if (!(var0 !== var10)) {
                    _fun7973_ip = 139;
                    continue _fun7973
                }
            case 101:
                if (!(var0 !== var8)) {
                    _fun7973_ip = 122;
                    continue _fun7973
                }
            case 105:
                var3 = var10 - var8;
                var11 = var3 / var2;
                var3 = 4;
                var3 = var11 + var3;
                _fun7973_ip = 137;
                continue _fun7973;
            case 122:
                var10 = var7 - var10;
                var11 = var10 / var2;
                var10 = 2;
                var3 = var11 + var10;
            case 137:
                _fun7973_ip = 154;
                continue _fun7973;
            case 139:
                var7 = var8 - var7;
                var8 = var7 / var2;
                var7 = 6;
                var3 = var8 % var7;
            case 154:
                var9 = var3;
            case 157:
                var8 = var5.Math;
                var7 = var8.round;
                var3 = 60;
                var3 = var3 * var9;
                var8 = var7.bind(var8)(var3);
                var7 = var8;
                if (!(var7 < var4)) {
                    _fun7973_ip = 197;
                    continue _fun7973
                }
            case 187:
                var3 = 360;
                var7 = var8 + var3;
            case 197:
                var0 = var0 + var1;
                var1 = 2;
                var3 = var0 / var1;
                var0 = {};
                var0.h = var7;
                var4 = 0;
                if (var6) {
                    _fun7973_ip = 255;
                    continue _fun7973
                }
            case 219:
                var7 = var5.Math;
                var6 = var7.abs;
                var1 = var1 * var3;
                var5 = 1;
                var1 = var1 - var5;
                var1 = var6.bind(var7)(var1);
                var1 = var5 - var1;
                var4 = var2 / var1;
            case 255:
                var1 = var4.toFixed;
                var2 = 3;
                var1 = var1.bind(var4)(var2);
                var1 = var1 - 0;
                var0.s = var1;
                var1 = var3.toFixed;
                var1 = var1.bind(var3)(var2);
                var1 = var1 - 0;
                var0.l = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var5;
    var4 = function arg0() {
        var2 = arg0;
        var0 = 16;
        var3 = var2 >> var0;
        var0 = new Array(3);
        var1 = 255;
        var3 = var3 & var1;
        var0[0] = var3;
        var3 = 8;
        var3 = var2 >> var3;
        var3 = var3 & var1;
        var0[1] = var3;
        var1 = var1 & var2;
        var0[2] = var1;
        return var0;
    };
    var _closure1_slot5 = var4;
    var3 = function arg0, arg1, arg2() {
        var2 = new Array(3);
        var0 = arg0;
        var2[0] = var0;
        var0 = arg1;
        var2[1] = var0;
        var0 = arg2;
        var2[2] = var0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun7976: for (var _fun7976_ip = 0;;) switch (_fun7976_ip) {
                case 0:
                    var1 = arg0;
                    var0 = 255;
                    var2 = var1 / var0;
                    var0 = 0.03928;
                    if (!(!(var2 <= var0))) {
                        _fun7976_ip = 84;
                        continue _fun7976
                    }
                case 24:
                    var0 = global;
                    var4 = var0.Math;
                    var3 = var4.pow;
                    var0 = 0.055;
                    var1 = var2 + var0;
                    var0 = 1.055;
                    var1 = var1 / var0;
                    var0 = 2.4;
                    var0 = var3.bind(var4)(var1, var0);
                    _fun7976_ip = 98;
                    continue _fun7976;
                case 84:
                    var1 = 12.92;
                    var0 = var2 / var1;
                case 98:
                    return var0;
            }
        };
        var3 = var1.bind(var2)(var0);
        var0 = 0;
        var1 = var3[var0];
        var0 = 0.2126;
        var2 = var0 * var1;
        var0 = 1;
        var1 = var3[var0];
        var0 = 0.7152;
        var0 = var0 * var1;
        var1 = 2;
        var3 = var3[var1];
        var1 = 0.0722;
        var1 = var1 * var3;
        var0 = var2 + var0;
        var0 = var0 + var1;
        return var0;
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/;
    var _closure1_slot2 = var0;
    var0 = 1;
    var7 = var6[var0];
    var6 = arg1;
    var0 = undefined;
    var8 = var6.bind(var0)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/shared/utils/ColorUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 0;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = arg0;
        var1 = var1.bind(var2)(var0);
        var0 = var1.num;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.hex2int = var6;
    var6 = function arg0() {
        _fun7978: for (var _fun7978_ip = 0;;) switch (_fun7978_ip) {
            case 0:
                var6 = arg0;
                var0 = 16777215;
                if (!(!(var6 <= var0))) {
                    _fun7978_ip = 129;
                    continue _fun7978
                }
            case 13:
                var2 = _closure1_slot3;
                var0 = 24;
                var0 = var6 >> var0;
                var5 = 255;
                var1 = var0 & var5;
                var0 = var1.toString;
                var7 = 16;
                var0 = var0.bind(var1)(var7);
                var1 = undefined;
                var4 = var2.bind(var1)(var0);
                var0 = var6 >> var7;
                var3 = var0 & var5;
                var0 = var3.toString;
                var0 = var0.bind(var3)(var7);
                var3 = var2.bind(var1)(var0);
                var0 = 8;
                var0 = var6 >> var0;
                var5 = var0 & var5;
                var0 = var5.toString;
                var0 = var0.bind(var5)(var7);
                var2 = var2.bind(var1)(var0);
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '#';
                var0 = var1.bind(var0)(var4, var3, var2);
                _fun7978_ip = 236;
                continue _fun7978;
            case 129:
                var3 = _closure1_slot3;
                var7 = 16;
                var2 = var6 >> var7;
                var1 = 255;
                var4 = var2 & var1;
                var2 = var4.toString;
                var4 = var2.bind(var4)(var7);
                var2 = undefined;
                var5 = var3.bind(var2)(var4);
                var4 = 8;
                var4 = var6 >> var4;
                var8 = var4 & var1;
                var4 = var8.toString;
                var4 = var4.bind(var8)(var7);
                var4 = var3.bind(var2)(var4);
                var6 = var1 & var6;
                var1 = var6.toString;
                var1 = var1.bind(var6)(var7);
                var3 = var3.bind(var2)(var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '#';
                var0 = var2.bind(var1)(var5, var4, var3);
            case 236:
                return var0;
        }
    };
    var2.int2hex = var6;
    var2.int2hslRaw = var5;
    var5 = function arg0() {
        _fun7979: for (var _fun7979_ip = 0;;) switch (_fun7979_ip) {
            case 0:
                var0 = arguments[1];
                var1 = arguments[2];
                var10 = arguments[3];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun7979_ip = 17;
                    continue _fun7979
                }
            case 15:
                var0 = false;
            case 17:
                if (!(var1 === var4)) {
                    _fun7979_ip = 23;
                    continue _fun7979
                }
            case 21:
                var1 = null;
            case 23:
                if (!(var10 === var4)) {
                    _fun7979_ip = 30;
                    continue _fun7979
                }
            case 27:
                var10 = 1;
            case 30:
                var3 = _closure1_slot4;
                var2 = arg0;
                var2 = var3.bind(var4)(var2);
                var9 = var2.h;
                var4 = var2.s;
                var3 = var2.l;
                var2 = 100;
                var6 = var2 * var4;
                var5 = var6.toFixed;
                var4 = 1;
                var5 = var5.bind(var6)(var4);
                var8 = var5 - 0;
                var3 = var2 * var3;
                var2 = var3.toFixed;
                var2 = var2.bind(var3)(var4);
                var7 = var2 - 0;
                if (var0) {
                    _fun7979_ip = 233;
                    continue _fun7979
                }
            case 108:
                var0 = null;
                if (!(var0 == var1)) {
                    _fun7979_ip = 173;
                    continue _fun7979
                }
            case 114:
                var0 = global;
                var0 = var0.HermesInternal;
                var5 = var0.concat;
                var19 = 'hsla(';
                var17 = ', ';
                var2 = '%, ';
                var11 = ')';
                var18 = var9;
                var16 = var8;
                var15 = var2;
                var14 = var7;
                var13 = var2;
                var12 = var10;
                var0 = var19[var5](var18, var17, var16, var15, var14, var13, var12, var11, var10);
                _fun7979_ip = 231;
                continue _fun7979;
            case 173:
                var16 = var1 * var8;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var19 = 'hsla(';
                var17 = ', ';
                var2 = '%, ';
                var11 = ')';
                var18 = var9;
                var15 = var2;
                var14 = var7;
                var13 = var2;
                var12 = var10;
                var0 = var19[var5](var18, var17, var16, var15, var14, var13, var12, var11, var10);
            case 231:
                _fun7979_ip = 290;
                continue _fun7979;
            case 233:
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var19 = 'hsla(';
                var17 = ', calc(var(--saturation-factor, 1) * ';
                var15 = '%), ';
                var13 = '%, ';
                var11 = ')';
                var18 = var9;
                var16 = var8;
                var14 = var7;
                var12 = var10;
                var0 = var19[var6](var18, var17, var16, var15, var14, var13, var12, var11, var10);
            case 290:
                return var0;
        }
    };
    var2.int2hsl = var5;
    var5 = function arg0() {
        _fun7980: for (var _fun7980_ip = 0;;) switch (_fun7980_ip) {
            case 0:
                var3 = arg0;
                var2 = arguments[1];
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun7980_ip = 14;
                    continue _fun7980
                }
            case 12:
                var2 = null;
            case 14:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var5 = 0;
                var4 = var4[var5];
                var6 = var6.bind(var1)(var4);
                var4 = var6.valid;
                var4 = var4.bind(var6)(var3);
                if (var4) {
                    _fun7980_ip = 54;
                    continue _fun7980
                }
            case 50:
                var4 = null;
                return var4;
            case 54:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var0 = var4.bind(var1)(var0);
                var1 = var0.bind(var1)(var3);
                var0 = var1.alpha;
                var3 = null;
                if (!(var3 == var2)) {
                    _fun7980_ip = 98;
                    continue _fun7980
                }
            case 88:
                var3 = var1.alpha;
                var2 = var3.bind(var1)();
            case 98:
                var1 = var0.bind(var1)(var2);
                var0 = var1.css;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.hex2rgb = var5;
    var5 = function arg0, arg1() {
        _fun7981: for (var _fun7981_ip = 0;;) switch (_fun7981_ip) {
            case 0:
                var3 = arg0;
                var7 = arg1;
                var0 = null;
                if (!(var0 == var7)) {
                    _fun7981_ip = 30;
                    continue _fun7981
                }
            case 12:
                var0 = 24;
                var0 = var3 >> var0;
                var1 = 255;
                var0 = var0 & var1;
                var7 = var0 / var1;
            case 30:
                var0 = 16;
                var2 = var3 >> var0;
                var0 = 8;
                var1 = var3 >> var0;
                var0 = 255;
                var11 = var0 & var3;
                var3 = global;
                var3 = var3.HermesInternal;
                var5 = var3.concat;
                var16 = 'rgba(';
                var15 = var2 & var0;
                var2 = ', ';
                var13 = var1 & var0;
                var8 = ')';
                var14 = var2;
                var12 = var2;
                var10 = var2;
                var9 = var7;
                var0 = var16[var5](var15, var14, var13, var12, var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var2.int2rgba = var5;
    var5 = function arg0() {
        _fun7982: for (var _fun7982_ip = 0;;) switch (_fun7982_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.match;
                var0 = _closure1_slot2;
                var5 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 == var5)) {
                    _fun7982_ip = 39;
                    continue _fun7982
                }
            case 27:
                var1 = {
                    'red': 0,
                    'green': 0,
                    'blue': 0
                };
                _fun7982_ip = 117;
                continue _fun7982;
            case 39:
                var0 = {};
                var2 = global;
                var6 = var2.parseInt;
                var3 = 1;
                var3 = var5[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var0.red = var3;
                var6 = var2.parseInt;
                var3 = 2;
                var3 = var5[var3];
                var3 = var6.bind(var4)(var3);
                var0.green = var3;
                var3 = var2.parseInt;
                var2 = 3;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var0.blue = var2;
                var1 = var0;
            case 117:
                var2 = var1.red;
                var0 = 16;
                var2 = var2 << var0;
                var3 = var1.green;
                var0 = 8;
                var0 = var3 << var0;
                var1 = var1.blue;
                var0 = var2 + var0;
                var0 = var0 + var1;
                return var0;
        }
    };
    var2.rgb2int = var5;
    var5 = function arg0() {
        _fun7983: for (var _fun7983_ip = 0;;) switch (_fun7983_ip) {
            case 0:
                var1 = arg0;
                var0 = 16;
                var0 = var1 >> var0;
                var2 = 255;
                var0 = var0 & var2;
                var0 = var0 / var2;
                var3 = 8;
                var3 = var1 >> var3;
                var3 = var3 & var2;
                var7 = var3 / var2;
                var1 = var2 & var1;
                var6 = var1 / var2;
                var2 = global;
                var3 = var2.Math;
                var1 = var3.max;
                var1 = var1.bind(var3)(var0, var7, var6);
                var3 = var2.Math;
                var2 = var3.min;
                var4 = var2.bind(var3)(var0, var7, var6);
                var8 = var1 - var4;
                var5 = 0;
                var2 = 0;
                if (!(var5 !== var1)) {
                    _fun7983_ip = 98;
                    continue _fun7983
                }
            case 94:
                var2 = var8 / var1;
            case 98:
                var3 = 0;
                if (!(var1 !== var4)) {
                    _fun7983_ip = 181;
                    continue _fun7983
                }
            case 104:
                if (!(var0 !== var1)) {
                    _fun7983_ip = 153;
                    continue _fun7983
                }
            case 108:
                if (!(var7 !== var1)) {
                    _fun7983_ip = 136;
                    continue _fun7983
                }
            case 112:
                var4 = var1;
                if (!(var6 === var4)) {
                    _fun7983_ip = 174;
                    continue _fun7983
                }
            case 119:
                var9 = var0 - var7;
                var10 = var9 / var8;
                var9 = 4;
                var4 = var10 + var9;
                _fun7983_ip = 174;
                continue _fun7983;
            case 136:
                var0 = var6 - var0;
                var9 = var0 / var8;
                var0 = 2;
                var4 = var9 + var0;
                _fun7983_ip = 174;
                continue _fun7983;
            case 153:
                var0 = var7 - var6;
                var0 = var0 / var8;
                var5 = 0;
                if (!(var7 < var6)) {
                    _fun7983_ip = 170;
                    continue _fun7983
                }
            case 167:
                var5 = 6;
            case 170:
                var4 = var0 + var5;
            case 174:
                var0 = 60;
                var3 = var4 * var0;
            case 181:
                var0 = {};
                var0.h = var3;
                var0.s = var2;
                var0.v = var1;
                return var0;
        }
    };
    var2.int2hsv = var5;
    var5 = function arg0() {
        var1 = arg0;
        var0 = 16;
        var3 = var1 >> var0;
        var0 = 8;
        var0 = var1 >> var0;
        var2 = 255;
        var4 = var2 & var1;
        var1 = 1;
        var5 = 0.299;
        var3 = var3 & var2;
        var3 = var5 * var3;
        var5 = 0.587;
        var0 = var0 & var2;
        var0 = var5 * var0;
        var3 = var3 + var0;
        var0 = 0.114;
        var0 = var0 * var4;
        var0 = var3 + var0;
        var0 = var0 / var2;
        var0 = var1 - var0;
        return var0;
    };
    var2.getDarkness = var5;
    var5 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.valid;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isValidHex = var5;
    var2.int2rgbArray = var4;
    var2.getLuminance = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot5;
        var4 = undefined;
        var1 = arg0;
        var5 = var2.bind(var4)(var1);
        var1 = arg1;
        var6 = var2.bind(var4)(var1);
        var3 = _closure1_slot6;
        var2 = 0;
        var8 = var5[var2];
        var1 = 1;
        var7 = var5[var1];
        var0 = 2;
        var5 = var5[var0];
        var5 = var3.bind(var4)(var8, var7, var5);
        var2 = var6[var2];
        var1 = var6[var1];
        var0 = var6[var0];
        var4 = var3.bind(var4)(var2, var1, var0);
        var0 = global;
        var2 = var0.Math;
        var1 = var2.max;
        var1 = var1.bind(var2)(var5, var4);
        var2 = 0.05;
        var1 = var1 + var2;
        var3 = var0.Math;
        var0 = var3.min;
        var0 = var0.bind(var3)(var5, var4);
        var0 = var0 + var2;
        var0 = var1 / var0;
        return var0;
    };
    var2.getContrast = var3;
    var1 = function arg0, arg1, arg2() {
        _fun7987: for (var _fun7987_ip = 0;;) switch (_fun7987_ip) {
            case 0:
                var8 = arg1;
                var6 = arg2;
                var1 = arg0;
                var0 = 360;
                var0 = var1 / var0;
                var3 = global;
                var2 = var3.Math;
                var1 = var2.floor;
                var5 = 6;
                var0 = var5 * var0;
                var2 = var1.bind(var2)(var0);
                var4 = var0 - var2;
                var0 = 1;
                var1 = var0 - var8;
                var1 = var6 * var1;
                var7 = var4 * var8;
                var7 = var0 - var7;
                var7 = var6 * var7;
                var4 = var0 - var4;
                var4 = var4 * var8;
                var4 = var0 - var4;
                var4 = var6 * var4;
                var9 = var2 % var5;
                var5 = 0;
                if (!(var5 !== var9)) {
                    _fun7987_ip = 191;
                    continue _fun7987
                }
            case 98:
                if (!(var0 !== var9)) {
                    _fun7987_ip = 180;
                    continue _fun7987
                }
            case 102:
                var0 = 2;
                if (!(var0 !== var9)) {
                    _fun7987_ip = 169;
                    continue _fun7987
                }
            case 109:
                var0 = 3;
                if (!(var0 !== var9)) {
                    _fun7987_ip = 158;
                    continue _fun7987
                }
            case 116:
                var0 = 4;
                if (!(var0 !== var9)) {
                    _fun7987_ip = 147;
                    continue _fun7987
                }
            case 123:
                var8 = 5;
                var2 = 0;
                var0 = 0;
                var5 = 0;
                if (!(var8 === var9)) {
                    _fun7987_ip = 200;
                    continue _fun7987
                }
            case 136:
                var2 = var6;
                var0 = var1;
                var5 = var7;
                _fun7987_ip = 200;
                continue _fun7987;
            case 147:
                var2 = var4;
                var0 = var1;
                var5 = var6;
                _fun7987_ip = 200;
                continue _fun7987;
            case 158:
                var2 = var1;
                var0 = var7;
                var5 = var6;
                _fun7987_ip = 200;
                continue _fun7987;
            case 169:
                var2 = var1;
                var0 = var6;
                var5 = var4;
                _fun7987_ip = 200;
                continue _fun7987;
            case 180:
                var2 = var7;
                var0 = var6;
                var5 = var1;
                _fun7987_ip = 200;
                continue _fun7987;
            case 191:
                var2 = var6;
                var0 = var4;
                var5 = var1;
            case 200:
                var6 = var3.Math;
                var4 = var6.round;
                var1 = 255;
                var2 = var1 * var2;
                var4 = var4.bind(var6)(var2);
                var2 = 16;
                var2 = var4 << var2;
                var6 = var3.Math;
                var4 = var6.round;
                var0 = var1 * var0;
                var4 = var4.bind(var6)(var0);
                var0 = 8;
                var0 = var4 << var0;
                var4 = var3.Math;
                var3 = var4.round;
                var1 = var1 * var5;
                var1 = var3.bind(var4)(var1);
                var0 = var2 + var0;
                var0 = var0 + var1;
                return var0;
        }
    };
    var2.hsv2int = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [669, 2]);