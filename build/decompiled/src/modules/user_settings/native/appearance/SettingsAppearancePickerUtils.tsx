// modules/user_settings/native/appearance/SettingsAppearancePickerUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun85060: for (var _fun85060_ip = 0;;) switch (_fun85060_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun85060_ip = 46;
                    continue _fun85060
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun85060_ip = 55;
                    continue _fun85060
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun85060_ip = 345;
                    continue _fun85060
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun85060_ip = 323;
                    continue _fun85060
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun85060_ip = 283;
                    continue _fun85060
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun85060_ip = 270;
                    continue _fun85060
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun85060_ip = 163;
                    continue _fun85060
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun85060_ip = 179;
                    continue _fun85060
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun85060_ip = 249;
                    continue _fun85060
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun85060_ip = 249;
                    continue _fun85060
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun85060_ip = 234;
                    continue _fun85060
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun85060_ip = 247;
                    continue _fun85060
                }
            case 234:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun85060_ip = 265;
                continue _fun85060;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun85060_ip = 283;
                continue _fun85060;
            case 270:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun85060_ip = 323;
                    continue _fun85060
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun85060_ip = 330;
                    continue _fun85060
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun85061: for (var _fun85061_ip = 0;;) switch (_fun85061_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun85061_ip = 56;
                                continue _fun85061
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun85061_ip = 67;
                            continue _fun85061;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun85062: for (var _fun85062_ip = 0;;) switch (_fun85062_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun85062_ip = 23;
                    continue _fun85062
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun85062_ip = 33;
                    continue _fun85062
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun85062_ip = 70;
                    continue _fun85062
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun85062_ip = 55;
                    continue _fun85062
                }
            case 70:
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
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot4 = var3;
    var3 = function() {
        _fun85063: for (var _fun85063_ip = 0;;) switch (_fun85063_ip) {
            case 0:
                var1 = _closure1_slot11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var8 = undefined;
                var2 = var2.bind(var8)(var0);
                var0 = var2.getAllMobileThemes;
                var0 = var0.bind(var2)();
                var7 = var1.bind(var8)(var0);
                var2 = var7.bind(var8)();
                var1 = var2.done;
                var6 = global;
                var5 = 1;
                var4 = 3;
                var3 = var2;
                var2 = 0;
                var0 = 0;
                if (var1) {
                    _fun85063_ip = 304;
                    continue _fun85063
                }
            case 74:
                var1 = var3.value;
                var11 = var1.type;
                var12 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var4];
                var10 = var12.bind(var8)(var10);
                var10 = var10.ClientThemeType;
                var10 = var10.STANDARD_BACKGROUND_THEME;
                if (!(var11 !== var10)) {
                    _fun85063_ip = 263;
                    continue _fun85063
                }
            case 120:
                var11 = var1.type;
                var12 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var4];
                var10 = var12.bind(var8)(var10);
                var10 = var10.ClientThemeType;
                var10 = var10.BACKGROUND_GRADIENT_PRESET;
                if (!(var11 !== var10)) {
                    _fun85063_ip = 234;
                    continue _fun85063
                }
            case 158:
                var12 = var1.type;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var4];
                var10 = var11.bind(var8)(var10);
                var10 = var10.ClientThemeType;
                var11 = var10.CUSTOM_BACKGROUND_GRADIENT;
                var10 = var2;
                if (!(var12 === var11)) {
                    _fun85063_ip = 280;
                    continue _fun85063
                }
            case 199:
                var13 = var6.Math;
                var12 = var13.max;
                var11 = var1.customThemeSettings;
                var11 = var11.colors;
                var11 = var11.length;
                var10 = var12.bind(var13)(var11, var2);
                _fun85063_ip = 280;
                continue _fun85063;
            case 234:
                var12 = var6.Math;
                var11 = var12.max;
                var1 = var1.colors;
                var1 = var1.length;
                var10 = var11.bind(var12)(var1, var2);
                _fun85063_ip = 280;
                continue _fun85063;
            case 263:
                var11 = var6.Math;
                var1 = var11.max;
                var10 = var1.bind(var11)(var5, var2);
            case 280:
                var11 = var7.bind(var8)();
                var1 = var11.done;
                var2 = var10;
                var3 = var11;
                var0 = var2;
                if (!var1) {
                    _fun85063_ip = 74;
                    continue _fun85063
                }
            case 304:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun85064: for (var _fun85064_ip = 0;;) switch (_fun85064_ip) {
            case 0:
                var1 = 'light';
                var0 = arg0;
                var0 = var1 !== var0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var10 = 4;
                var1 = var1[var10];
                var9 = undefined;
                var6 = var2.bind(var9)(var1);
                var1 = var6.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                if (var0) {
                    _fun85064_ip = 76;
                    continue _fun85064
                }
            case 48:
                var3 = 255;
                var11 = arg3;
                var15 = var2;
                var14 = var3;
                var13 = var3;
                var12 = var3;
                var1 = new var15[var6](var14, var13, var12, var11, var10);
                var3 = var1 instanceof Object ? var1 : var2;
                _fun85064_ip = 96;
                continue _fun85064;
            case 76:
                var11 = arg2;
                var15 = var2;
                var14 = 0;
                var13 = 0;
                var12 = 0;
                var1 = new var15[var6](var14, var13, var12, var11, var10);
                var3 = var1 instanceof Object ? var1 : var2;
            case 96:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var6 = var5.bind(var9)(var2);
                var5 = var6.hexToRgb;
                var2 = arg1;
                var2 = var5.bind(var6)(var2);
                var8 = var2.r;
                var7 = var2.g;
                var6 = var2.b;
                var5 = 0.2;
                if (!var0) {
                    _fun85064_ip = 169;
                    continue _fun85064
                }
            case 159:
                var5 = 0.3;
            case 169:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = var0[var1];
                var2 = var2.bind(var9)(var1);
                var1 = var2.mixColors;
                var4 = _closure1_slot1;
                var0 = var0[var10];
                var0 = var4.bind(var9)(var0);
                var4 = var0.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var0
                    }
                });
                var15 = var4;
                var14 = var8;
                var13 = var7;
                var12 = var6;
                var11 = var5;
                var0 = new var15[var0](var14, var13, var12, var11, var10);
                var0 = var0 instanceof Object ? var0 : var4;
                var1 = var1.bind(var2)(var3, var0);
                var0 = var1.toHexString;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = function arg0() {
        _fun85065: for (var _fun85065_ip = 0;;) switch (_fun85065_ip) {
            case 0:
                var5 = arg0;
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun85065_ip = 15;
                    continue _fun85065
                }
            case 12:
                var4 = 5;
            case 15:
                var0 = new Array(0);
                var3 = 0;
                var6 = var3 < var4;
                var2 = 1;
                var1 = 100;
                if (!var6) {
                    _fun85065_ip = 107;
                    continue _fun85065
                }
            case 34:
                var6 = var5.length;
                if (!(!(var3 < var6))) {
                    _fun85065_ip = 86;
                    continue _fun85065
                }
            case 43:
                var6 = var5.length;
                var6 = var6 - var2;
                var8 = var5[var6];
                var7 = var0.push;
                var6 = {};
                var8 = var8.hex;
                var6.hex = var8;
                var6.stop = var1;
                var6 = var7.bind(var0)(var6);
                _fun85065_ip = 100;
                continue _fun85065;
            case 86:
                var7 = var0.push;
                var6 = var5[var3];
                var6 = var7.bind(var0)(var6);
            case 100:
                var3 = var3 + 1;
                if (var3 < var4) {
                    _fun85065_ip = 34;
                    continue _fun85065
                }
            case 107:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = function arg0, arg1, arg2() {
        _fun85066: for (var _fun85066_ip = 0;;) switch (_fun85066_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var0 = arg2;
                var _closure2_slot2 = var0;
                var0 = {};
                var1 = var3.theme;
                var0.theme = var1;
                var1 = var3.getName;
                var1 = var1.bind(var3)();
                var0.name = var1;
                var5 = var3.midpointPercentage;
                var1 = null;
                var6 = var1 != var5;
                var4 = 50;
                if (!var6) {
                    _fun85066_ip = 71;
                    continue _fun85066
                }
            case 68:
                var4 = var5;
            case 71:
                var0.midpointPercentage = var4;
                var4 = var3.angle;
                var5 = var1 != var4;
                var1 = 0;
                if (!var5) {
                    _fun85066_ip = 94;
                    continue _fun85066
                }
            case 91:
                var1 = var4;
            case 94:
                var0.angle = var1;
                var4 = _closure1_slot7;
                var5 = var3.colors;
                var3 = var5.map;
                var2 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var0 = {};
                    var7 = _closure1_slot6;
                    var4 = _closure2_slot0;
                    var6 = var4.theme;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.unsafe_rawColors;
                    var3 = var1.token;
                    var10 = var4[var3];
                    var9 = _closure2_slot1;
                    var8 = _closure2_slot2;
                    var12 = undefined;
                    var11 = var6;
                    var2 = var12[var7](var11, var10, var9, var8, var7);
                    var0.hex = var2;
                    var1 = var1.stop;
                    var0.stop = var1;
                    return var0;
                };
                var3 = var3.bind(var5)(var2);
                var1 = _closure1_slot5;
                var2 = undefined;
                var1 = var1.bind(var2)();
                var1 = var4.bind(var2)(var3, var1);
                var0.colors = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = function arg0() {
        _fun85068: for (var _fun85068_ip = 0;;) switch (_fun85068_ip) {
            case 0:
                var3 = arg0;
                var4 = var3.theme;
                var0 = _closure1_slot4;
                var2 = var0.LIGHT;
                var0 = 'light';
                var6 = var0;
                if (!(var2 !== var4)) {
                    _fun85068_ip = 92;
                    continue _fun85068
                }
            case 33:
                var2 = _closure1_slot4;
                var2 = var2.DARK;
                var5 = 'darker';
                var6 = var5;
                if (!(var2 !== var4)) {
                    _fun85068_ip = 92;
                    continue _fun85068
                }
            case 54:
                var2 = _closure1_slot4;
                var2 = var2.DARKER;
                var6 = var5;
                if (!(var2 !== var4)) {
                    _fun85068_ip = 92;
                    continue _fun85068
                }
            case 71:
                var2 = _closure1_slot4;
                var2 = var2.MIDNIGHT;
                var6 = 'midnight';
                if (!(var2 !== var4)) {
                    _fun85068_ip = 92;
                    continue _fun85068
                }
            case 89:
                var6 = var0;
            case 92:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 6;
                var2 = var8[var0];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var5 = var2.internal;
                var2 = var5.resolveSemanticColor;
                var0 = var8[var0];
                var0 = var7.bind(var4)(var0);
                var0 = var0.colors;
                var0 = var0.BACKGROUND_BASE_LOW;
                var6 = var2.bind(var5)(var6, var0);
                var0 = {};
                var2 = var3.theme;
                var0.theme = var2;
                var2 = var3.getName;
                var2 = var2.bind(var3)();
                var0.name = var2;
                var2 = 50;
                var0.midpointPercentage = var2;
                var2 = 0;
                var0.angle = var2;
                var3 = _closure1_slot7;
                var5 = {};
                var5.hex = var6;
                var2 = 20;
                var5.stop = var2;
                var2 = new Array(5);
                var2[0] = var5;
                var5 = {};
                var5.hex = var6;
                var7 = 40;
                var5.stop = var7;
                var2[1] = var5;
                var5 = {};
                var5.hex = var6;
                var7 = 60;
                var5.stop = var7;
                var2[2] = var5;
                var5 = {};
                var5.hex = var6;
                var7 = 80;
                var5.stop = var7;
                var2[3] = var5;
                var5 = {};
                var5.hex = var6;
                var6 = 100;
                var5.stop = var6;
                var2[4] = var5;
                var1 = _closure1_slot5;
                var1 = var1.bind(var4)();
                var1 = var3.bind(var4)(var2, var1);
                var0.colors = var1;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = function arg0, arg1, arg2() {
        _fun85069: for (var _fun85069_ip = 0;;) switch (_fun85069_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var0 = arg2;
                var _closure2_slot2 = var0;
                var0 = {};
                var1 = var3.theme;
                var0.theme = var1;
                var1 = var3.getName;
                var1 = var1.bind(var3)();
                var0.name = var1;
                var1 = 50;
                var0.midpointPercentage = var1;
                var1 = var3.customThemeSettings;
                var4 = var1.gradientAngle;
                var1 = null;
                var5 = var1 != var4;
                var1 = 0;
                if (!var5) {
                    _fun85069_ip = 84;
                    continue _fun85069
                }
            case 81:
                var1 = var4;
            case 84:
                var0.angle = var1;
                var4 = _closure1_slot7;
                var3 = var3.customThemeSettings;
                var5 = var3.colors;
                var3 = var5.map;
                var2 = function(arg0, arg1) { // Environment: var2
                    _fun85070: for (var _fun85070_ip = 0;;) switch (_fun85070_ip) {
                        case 0:
                            var0 = {};
                            var8 = _closure1_slot6;
                            var1 = _closure2_slot0;
                            var12 = var1.theme;
                            var10 = _closure2_slot1;
                            var9 = _closure2_slot2;
                            var13 = undefined;
                            var11 = arg0;
                            var3 = var13[var8](var12, var11, var10, var9, var8);
                            var0.hex = var3;
                            var1 = var1.customThemeSettings;
                            var1 = var1.colors;
                            var1 = var1.length;
                            var3 = 1;
                            var4 = var1 > var3;
                            var1 = 0;
                            if (!var4) {
                                _fun85070_ip = 110;
                                continue _fun85070
                            }
                        case 72:
                            var2 = _closure2_slot0;
                            var2 = var2.customThemeSettings;
                            var2 = var2.colors;
                            var2 = var2.length;
                            var4 = var2 - var3;
                            var3 = arg1;
                            var2 = 100;
                            var2 = var2 / var4;
                            var1 = var3 * var2;
                        case 110:
                            var0.stop = var1;
                            return var0;
                    }
                };
                var3 = var3.bind(var5)(var2);
                var1 = _closure1_slot5;
                var2 = undefined;
                var1 = var1.bind(var2)();
                var1 = var4.bind(var2)(var3, var1);
                var0.colors = var1;
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/appearance/SettingsAppearancePickerUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun85071: for (var _fun85071_ip = 0;;) switch (_fun85071_ip) {
            case 0:
                var8 = arguments[1];
                var7 = arguments[2];
                var6 = undefined;
                if (!(var8 === var6)) {
                    _fun85071_ip = 22;
                    continue _fun85071
                }
            case 12:
                var8 = 0.7;
            case 22:
                if (!(var7 === var6)) {
                    _fun85071_ip = 36;
                    continue _fun85071
                }
            case 26:
                var7 = 0.8;
            case 36:
                var0 = new Array(0);
                var2 = _closure1_slot11;
                var1 = arg0;
                var4 = var2.bind(var6)(var1);
                var2 = var4.bind(var6)();
                var1 = var2.done;
                var3 = 3;
                if (var1) {
                    _fun85071_ip = 278;
                    continue _fun85071
                }
            case 73:
                var10 = var2.value;
                var9 = var10.type;
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var1 = var11.bind(var6)(var1);
                var1 = var1.ClientThemeType;
                var1 = var1.STANDARD_BACKGROUND_THEME;
                if (!(var9 !== var1)) {
                    _fun85071_ip = 241;
                    continue _fun85071
                }
            case 119:
                var9 = var10.type;
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var1 = var11.bind(var6)(var1);
                var1 = var1.ClientThemeType;
                var1 = var1.BACKGROUND_GRADIENT_PRESET;
                if (!(var9 !== var1)) {
                    _fun85071_ip = 218;
                    continue _fun85071
                }
            case 157:
                var9 = var10.type;
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var1 = var11.bind(var6)(var1);
                var1 = var1.ClientThemeType;
                var1 = var1.CUSTOM_BACKGROUND_GRADIENT;
                if (!(var9 === var1)) {
                    _fun85071_ip = 260;
                    continue _fun85071
                }
            case 195:
                var9 = var0.push;
                var1 = _closure1_slot10;
                var1 = var1.bind(var6)(var10, var8, var7);
                var1 = var9.bind(var0)(var1);
                _fun85071_ip = 260;
                continue _fun85071;
            case 218:
                var9 = var0.push;
                var1 = _closure1_slot8;
                var1 = var1.bind(var6)(var10, var8, var7);
                var1 = var9.bind(var0)(var1);
                _fun85071_ip = 260;
                continue _fun85071;
            case 241:
                var9 = var0.push;
                var1 = _closure1_slot9;
                var1 = var1.bind(var6)(var10);
                var1 = var9.bind(var0)(var1);
            case 260:
                var9 = var4.bind(var6)();
                var1 = var9.done;
                var2 = var9;
                if (!var1) {
                    _fun85071_ip = 73;
                    continue _fun85071
                }
            case 278:
                return var0;
        }
    };
    var2.convertThemesToAnimatedThemes = var3;
    var1 = function() { // Environment: var1
        _fun85072: for (var _fun85072_ip = 0;;) switch (_fun85072_ip) {
            case 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var7 = undefined;
                var2 = var3.bind(var7)(var2);
                var3 = var2.bind(var7)();
                var2 = _closure1_slot4;
                var2 = var2.LIGHT;
                if (!(var3 !== var2)) {
                    _fun85072_ip = 57;
                    continue _fun85072
                }
            case 45:
                var2 = _closure1_slot4;
                var5 = var2.DARKER;
                _fun85072_ip = 67;
                continue _fun85072;
            case 57:
                var2 = _closure1_slot4;
                var5 = var2.LIGHT;
            case 67:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 8;
                var2 = var8[var2];
                var4 = var3.bind(var7)(var2);
                var3 = var4.useToken;
                var6 = _closure1_slot1;
                var2 = 6;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BASE_LOW;
                var4 = var3.bind(var4)(var2, var5);
                var _closure2_slot0 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var0 = {
                        'theme': 'system',
                        'name': null,
                        'midpointPercentage': 50,
                        'angle': 0
                    };
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 9;
                    var3 = var7[var2];
                    var4 = undefined;
                    var3 = var6.bind(var4)(var3);
                    var5 = var3.intl;
                    var3 = var5.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var4)(var2);
                    var2 = var2.t;
                    var2 = var2.zlvNOj;
                    var2 = var3.bind(var5)(var2);
                    var0.name = var2;
                    var3 = _closure1_slot7;
                    var5 = {};
                    var2 = _closure2_slot0;
                    var5.hex = var2;
                    var2 = 20;
                    var5.stop = var2;
                    var2 = new Array(5);
                    var2[0] = var5;
                    var5 = {};
                    var7 = _closure2_slot0;
                    var5.hex = var7;
                    var7 = 40;
                    var5.stop = var7;
                    var2[1] = var5;
                    var5 = {};
                    var7 = _closure2_slot0;
                    var5.hex = var7;
                    var7 = 60;
                    var5.stop = var7;
                    var2[2] = var5;
                    var5 = {};
                    var7 = _closure2_slot0;
                    var5.hex = var7;
                    var7 = 80;
                    var5.stop = var7;
                    var2[3] = var5;
                    var5 = {};
                    var6 = _closure2_slot0;
                    var5.hex = var6;
                    var6 = 100;
                    var5.stop = var6;
                    var2[4] = var5;
                    var1 = _closure1_slot5;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var4)(var2, var1);
                    var0.colors = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useLaunchWelcomeSystemTheme = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 483, 3245, 3213, 3243, 3242, 671, 3201, 3153, 1234, 2]);