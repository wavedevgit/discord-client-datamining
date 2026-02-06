// modules/client_themes/native/ClientThemesUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var12 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var13;
    var0 = function arg0, arg1, arg2() {
        var3 = arg0;
        var0 = arg1;
        var6 = arg2;
        var2 = _closure1_slot12;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 7;
        var4 = var9[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.mixColors;
        var8 = _closure1_slot1;
        var7 = 8;
        var10 = var9[var7];
        var13 = var8.bind(var1)(var10);
        var17 = var3.r;
        var16 = var3.g;
        var15 = var3.b;
        var10 = var13.prototype;
        var10 = Object.create(var10, {
            constructor: {
                value: var13
            }
        });
        var18 = var10;
        var14 = var6;
        var3 = new var18[var13](var17, var16, var15, var14, var13);
        var3 = var3 instanceof Object ? var3 : var10;
        var7 = var9[var7];
        var10 = var8.bind(var1)(var7);
        var17 = var0.r;
        var16 = var0.g;
        var15 = var0.b;
        var0 = 1;
        var14 = var0 - var6;
        var6 = var10.prototype;
        var6 = Object.create(var6, {
            constructor: {
                value: var10
            }
        });
        var18 = var6;
        var0 = new var18[var10](var17, var16, var15, var14, var13);
        var0 = var0 instanceof Object ? var0 : var6;
        var0 = var4.bind(var5)(var3, var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var5 = function arg0, arg1() {
        var1 = arg0;
        var2 = _closure1_slot15;
        var3 = undefined;
        var5 = var2.bind(var3)(var1);
        var4 = var1.colors;
        var2 = var4.map;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.stop;
            return var0;
        };
        var4 = var2.bind(var4)(var1);
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 6;
        var1 = var6[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.scale;
        var2 = var1.bind(var2)(var5);
        var1 = var2.domain;
        var2 = var1.bind(var2)(var4);
        var1 = arg1;
        var2 = var2.bind(var3)(var1);
        var1 = var2.rgb;
        var2 = var1.bind(var2)();
        var1 = _closure1_slot3;
        var0 = 3;
        var2 = var1.bind(var3)(var2, var0);
        var0 = {};
        var1 = 0;
        var1 = var2[var1];
        var0.r = var1;
        var1 = 1;
        var1 = var2[var1];
        var0.g = var1;
        var1 = 2;
        var1 = var2[var1];
        var0.b = var1;
        return var0;
    };
    var _closure1_slot14 = var5;
    var4 = function arg0() {
        var0 = arg0;
        var2 = var0.colors;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var1 = var0.unsafe_rawColors;
            var0 = arg0;
            var0 = var0.token;
            var0 = var1[var0];
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot15 = var4;
    var0 = function arg0() {
        _fun27641: for (var _fun27641_ip = 0;;) switch (_fun27641_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 9;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.ClientThemeType;
                var0 = var0.BACKGROUND_GRADIENT_PRESET;
                if (!(var2 !== var0)) {
                    _fun27641_ip = 63;
                    continue _fun27641
                }
            case 49:
                var0 = var1.customThemeSettings;
                var0 = var0.gradientAngle;
                _fun27641_ip = 69;
                continue _fun27641;
            case 63:
                var0 = var1.angle;
            case 69:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun27642: for (var _fun27642_ip = 0;;) switch (_fun27642_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var6 = var3.type;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 9;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var5 = var5.ClientThemeType;
                var5 = var5.BACKGROUND_GRADIENT_PRESET;
                if (!(var6 !== var5)) {
                    _fun27642_ip = 242;
                    continue _fun27642
                }
            case 57:
                var5 = var3.customThemeSettings;
                var7 = var5.colors;
                var _closure2_slot0 = var7;
                var6 = var7.length;
                var5 = 1;
                if (!(var5 !== var6)) {
                    _fun27642_ip = 203;
                    continue _fun27642
                }
            case 84:
                var6 = var7.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    var0 = _closure2_slot0;
                    var1 = var0.length;
                    var0 = 1;
                    var1 = var1 - var0;
                    var0 = arg1;
                    var1 = var0 / var1;
                    var0 = 100;
                    var0 = var1 * var0;
                    return var0;
                };
                var8 = var6.bind(var7)(var4);
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 6;
                var4 = var9[var4];
                var6 = var6.bind(var1)(var4);
                var4 = var6.scale;
                var6 = var4.bind(var6)(var7);
                var4 = var6.domain;
                var4 = var4.bind(var6)(var8);
                var6 = var4.bind(var1)(var2);
                var4 = var6.rgb;
                var8 = var4.bind(var6)();
                var6 = _closure1_slot3;
                var4 = 3;
                var6 = var6.bind(var1)(var8, var4);
                var4 = {};
                var8 = 0;
                var8 = var6[var8];
                var4.r = var8;
                var5 = var6[var5];
                var4.g = var5;
                var5 = 2;
                var5 = var6[var5];
                var4.b = var5;
                return var4;
            case 203:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 7;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.hexToRgb;
                var4 = 0;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                return var4;
            case 242:
                var0 = _closure1_slot14;
                var0 = var0.bind(var1)(var3, var2);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun27644: for (var _fun27644_ip = 0;;) switch (_fun27644_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot13;
                var1 = _closure1_slot17;
                var0 = _closure1_slot16;
                var3 = undefined;
                var6 = var0.bind(var3)(var2);
                var0 = _closure1_slot8;
                if (!(!(var6 > var0))) {
                    _fun27644_ip = 45;
                    continue _fun27644
                }
            case 33:
                var0 = _closure1_slot11;
                var0 = var0.START;
                _fun27644_ip = 55;
                continue _fun27644;
            case 45:
                var5 = _closure1_slot11;
                var0 = var5.END;
            case 55:
                var2 = var1.bind(var3)(var2, var0);
                var1 = arg1;
                var0 = arg2;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun27645: for (var _fun27645_ip = 0;;) switch (_fun27645_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot13;
                var1 = _closure1_slot17;
                var0 = _closure1_slot16;
                var3 = undefined;
                var6 = var0.bind(var3)(var2);
                var0 = _closure1_slot8;
                if (!(!(var6 > var0))) {
                    _fun27645_ip = 45;
                    continue _fun27645
                }
            case 33:
                var0 = _closure1_slot11;
                var0 = var0.END;
                _fun27645_ip = 55;
                continue _fun27645;
            case 45:
                var5 = _closure1_slot11;
                var0 = var5.START;
            case 55:
                var2 = var1.bind(var3)(var2, var0);
                var1 = arg1;
                var0 = arg2;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun27646: for (var _fun27646_ip = 0;;) switch (_fun27646_ip) {
            case 0:
                var6 = arg0;
                var3 = arg1;
                var10 = arg2;
                var0 = arg3;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var11 = 10;
                var1 = var1[var11];
                var5 = undefined;
                var4 = var4.bind(var5)(var1);
                var1 = var4.isThemeDark;
                var4 = var1.bind(var4)(var10);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 7;
                var1 = var8[var1];
                var8 = var7.bind(var5)(var1);
                var7 = var8.hexToRgb;
                var1 = _closure1_slot10;
                if (var4) {
                    _fun27646_ip = 94;
                    continue _fun27646
                }
            case 81:
                var4 = var1.LIGHT;
                var4 = var7.bind(var8)(var4);
                _fun27646_ip = 105;
                continue _fun27646;
            case 94:
                var1 = var1.DARK;
                var4 = var7.bind(var8)(var1);
            case 105:
                var7 = var6.type;
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var12 = 9;
                var1 = var1[var12];
                var1 = var8.bind(var5)(var1);
                var1 = var1.ClientThemeType;
                var1 = var1.BACKGROUND_GRADIENT_PRESET;
                if (!(var7 === var1)) {
                    _fun27646_ip = 158;
                    continue _fun27646
                }
            case 146:
                var8 = var6.midpointPercentage;
                var1 = null;
                if (!(var1 == var8)) {
                    _fun27646_ip = 168;
                    continue _fun27646
                }
            case 158:
                var1 = _closure1_slot11;
                var8 = var1.MID;
            case 168:
                var1 = null;
                if (!(var1 != var3)) {
                    _fun27646_ip = 177;
                    continue _fun27646
                }
            case 174:
                var8 = var3;
            case 177:
                var7 = var6.type;
                var9 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var12];
                var3 = var9.bind(var5)(var3);
                var3 = var3.ClientThemeType;
                var3 = var3.CUSTOM_BACKGROUND_GRADIENT;
                if (!(var7 !== var3)) {
                    _fun27646_ip = 276;
                    continue _fun27646
                }
            case 215:
                var3 = var0;
                if (!(var1 == var0)) {
                    _fun27646_ip = 274;
                    continue _fun27646
                }
            case 222:
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var11];
                var9 = var9.bind(var5)(var7);
                var7 = var9.isThemeDark;
                var7 = var7.bind(var9)(var10);
                var9 = _closure1_slot9;
                if (var7) {
                    _fun27646_ip = 265;
                    continue _fun27646
                }
            case 257:
                var7 = var9.LEVEL_4;
                _fun27646_ip = 271;
                continue _fun27646;
            case 265:
                var7 = var9.LEVEL_2;
            case 271:
                var3 = var7;
            case 274:
                _fun27646_ip = 380;
                continue _fun27646;
            case 276:
                var7 = var6.customThemeSettings;
                var9 = var7.baseMix;
                var7 = 100;
                var9 = var9 / var7;
                if (!(var1 == var0)) {
                    _fun27646_ip = 377;
                    continue _fun27646
                }
            case 299:
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var11];
                var7 = var7.bind(var5)(var1);
                var1 = var7.isThemeDark;
                var1 = var1.bind(var7)(var10);
                var7 = 0.2;
                var9 = var7 * var9;
                if (var1) {
                    _fun27646_ip = 360;
                    continue _fun27646
                }
            case 344:
                var1 = 0.3;
                var1 = var1 + var9;
                _fun27646_ip = 374;
                continue _fun27646;
            case 360:
                var7 = 0.12;
                var1 = var7 + var9;
            case 374:
                var0 = var1;
            case 377:
                var3 = var0;
            case 380:
                var0 = _closure1_slot16;
                var7 = var0.bind(var5)(var6);
                var0 = _closure1_slot11;
                var0 = var0.START;
                if (!(var8 !== var0)) {
                    _fun27646_ip = 477;
                    continue _fun27646
                }
            case 403:
                var0 = _closure1_slot11;
                var0 = var0.END;
                if (!(var8 !== var0)) {
                    _fun27646_ip = 440;
                    continue _fun27646
                }
            case 417:
                var1 = _closure1_slot13;
                var0 = _closure1_slot17;
                var0 = var0.bind(var5)(var6, var8);
                var0 = var1.bind(var5)(var0, var4, var3);
                _fun27646_ip = 475;
                continue _fun27646;
            case 440:
                var1 = _closure1_slot8;
                if (!(!(var7 > var1))) {
                    _fun27646_ip = 461;
                    continue _fun27646
                }
            case 448:
                var1 = _closure1_slot19;
                var1 = var1.bind(var5)(var6, var4, var3);
                _fun27646_ip = 472;
                continue _fun27646;
            case 461:
                var8 = _closure1_slot18;
                var1 = var8.bind(var5)(var6, var4, var3);
            case 472:
                var0 = var1;
            case 475:
                _fun27646_ip = 512;
                continue _fun27646;
            case 477:
                var1 = _closure1_slot8;
                if (!(!(var7 < var1))) {
                    _fun27646_ip = 498;
                    continue _fun27646
                }
            case 485:
                var1 = _closure1_slot19;
                var1 = var1.bind(var5)(var6, var4, var3);
                _fun27646_ip = 509;
                continue _fun27646;
            case 498:
                var2 = _closure1_slot18;
                var1 = var2.bind(var5)(var6, var4, var3);
            case 509:
                var0 = var1;
            case 512:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var3 = function arg0, arg1() {
        var4 = arg0;
        var3 = _closure1_slot20;
        var2 = var4.theme;
        var1 = undefined;
        var0 = arg1;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var _closure1_slot21 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var11 = 0;
    var6 = var13[var11];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var8 = var13[var6];
    var6 = arg3;
    var6 = var6.bind(var0)(var8);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var13[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var13[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var13[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var10 = 128;
    var _closure1_slot8 = var10;
    var9 = {};
    var8 = 0.9;
    var9.LEVEL_9 = var8;
    var6 = 'LEVEL_9';
    var9[var8] = var6;
    var8 = 0.85;
    var9.LEVEL_85 = var8;
    var6 = 'LEVEL_85';
    var9[var8] = var6;
    var8 = 0.8;
    var9.LEVEL_8 = var8;
    var6 = 'LEVEL_8';
    var9[var8] = var6;
    var8 = 0.75;
    var9.LEVEL_75 = var8;
    var6 = 'LEVEL_75';
    var9[var8] = var6;
    var8 = 0.7;
    var9.LEVEL_7 = var8;
    var6 = 'LEVEL_7';
    var9[var8] = var6;
    var8 = 0.6;
    var9.LEVEL_6 = var8;
    var6 = 'LEVEL_6';
    var9[var8] = var6;
    var8 = 0.5;
    var9.LEVEL_5 = var8;
    var6 = 'LEVEL_5';
    var9[var8] = var6;
    var8 = 0.4;
    var9.LEVEL_4 = var8;
    var6 = 'LEVEL_4';
    var9[var8] = var6;
    var8 = 0.35;
    var9.LEVEL_35 = var8;
    var6 = 'LEVEL_35';
    var9[var8] = var6;
    var8 = 0.3;
    var9.LEVEL_3 = var8;
    var6 = 'LEVEL_3';
    var9[var8] = var6;
    var8 = 0.25;
    var9.LEVEL_25 = var8;
    var6 = 'LEVEL_25';
    var9[var8] = var6;
    var8 = 0.2;
    var9.LEVEL_2 = var8;
    var6 = 'LEVEL_2';
    var9[var8] = var6;
    var8 = 0.15;
    var9.LEVEL_15 = var8;
    var6 = 'LEVEL_15';
    var9[var8] = var6;
    var8 = 0.1;
    var9.LEVEL_1 = var8;
    var6 = 'LEVEL_1';
    var9[var8] = var6;
    var _closure1_slot9 = var9;
    var8 = {};
    var6 = 5;
    var14 = var13[var6];
    var14 = var7.bind(var0)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.BLACK;
    var8.DARK = var14;
    var6 = var13[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.unsafe_rawColors;
    var6 = var6.WHITE;
    var8.LIGHT = var6;
    var _closure1_slot10 = var8;
    var7 = {};
    var7.START = var11;
    var6 = 'START';
    var7[var11] = var6;
    var11 = 50;
    var7.MID = var11;
    var6 = 'MID';
    var7[var11] = var6;
    var11 = 100;
    var7.END = var11;
    var6 = 'END';
    var7[var11] = var6;
    var _closure1_slot11 = var7;
    var6 = function arg0() {
        var0 = arg0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.rgb;
        var2 = var0.red;
        var1 = var0.green;
        var0 = var0.blue;
        var2 = var3.bind(var4)(var2, var1, var0);
        var1 = var2.hex;
        var0 = 'rgb';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot12 = var6;
    var11 = 13;
    var11 = var13[var11];
    var13 = var12.bind(var0)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/client_themes/native/ClientThemesUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var2.GRADIENT_ANGLE_BREAKPOINT = var10;
    var2.OverlayOpacity = var9;
    var2.OverlayColors = var8;
    var2.GradientPercentage = var7;
    var2.colorToHex = var6;
    var2.getClientThemesGradientColorByPercentage = var5;
    var2.getClientThemesGradientHexColors = var4;
    var4 = function arg0, arg1() {
        _fun27649: for (var _fun27649_ip = 0;;) switch (_fun27649_ip) {
            case 0:
                var2 = arg0;
                var8 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun27649_ip = 559;
                    continue _fun27649
                }
            case 15:
                if (!(var0 != var8)) {
                    _fun27649_ip = 559;
                    continue _fun27649
                }
            case 22:
                var4 = _closure1_slot21;
                var3 = _closure1_slot11;
                var3 = var3.START;
                var13 = undefined;
                var7 = var4.bind(var13)(var8, var3);
                var3 = _closure1_slot11;
                var3 = var3.MID;
                var6 = var4.bind(var13)(var8, var3);
                var3 = _closure1_slot11;
                var3 = var3.END;
                var5 = var4.bind(var13)(var8, var3);
                var4 = var8.type;
                var9 = _closure1_slot0;
                var3 = _closure1_slot2;
                var12 = 9;
                var3 = var3[var12];
                var3 = var9.bind(var13)(var3);
                var3 = var3.ClientThemeType;
                var3 = var3.BACKGROUND_GRADIENT_PRESET;
                if (!(var4 !== var3)) {
                    _fun27649_ip = 133;
                    continue _fun27649
                }
            case 120:
                var3 = var8.customThemeSettings;
                var9 = var3.colors;
                _fun27649_ip = 142;
                continue _fun27649;
            case 133:
                var3 = _closure1_slot15;
                var9 = var3.bind(var13)(var8);
            case 142:
                var19 = 0;
                var4 = var9[var19];
                var10 = var9.length;
                var3 = 1;
                var3 = var10 - var3;
                var3 = var9[var3];
                var10 = var8.type;
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var12];
                var9 = var11.bind(var13)(var9);
                var9 = var9.ClientThemeType;
                var9 = var9.CUSTOM_BACKGROUND_GRADIENT;
                if (!(var10 === var9)) {
                    _fun27649_ip = 519;
                    continue _fun27649
                }
            case 205:
                var8 = var8.customThemeSettings;
                var14 = var8.colors;
                var9 = var14.map;
                var8 = function(arg0) { // Environment: var8
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.luminance;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var16 = var9.bind(var14)(var8);
                var15 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 6;
                var1 = var17[var9];
                var10 = var15.bind(var13)(var1);
                var11 = var16.indexOf;
                var8 = global;
                var18 = var8.Math;
                var12 = var18.min;
                var1 = new Array(0);
                var23 = var1;
                var22 = var16;
                var21 = 0;
                var20 = arraySpread(var23, var22, var21);
                var23 = var12;
                var22 = var1;
                var21 = var18;
                var1 = apply(var23, var22, var21);
                var1 = var11.bind(var16)(var1);
                var1 = var14[var1];
                var11 = var10.bind(var13)(var1);
                var1 = var11.set;
                var12 = 'hsl.s';
                var10 = 0.2;
                var20 = var1.bind(var11)(var12, var10);
                var18 = var20.set;
                var11 = 'hsl.l';
                var1 = 0.7;
                var18 = var18.bind(var20)(var11, var1);
                var1 = var18.hex;
                var1 = var1.bind(var18)();
                var9 = var17[var9];
                var9 = var15.bind(var13)(var9);
                var15 = var16.indexOf;
                var18 = var8.Math;
                var17 = var18.max;
                var8 = new Array(0);
                var23 = var8;
                var22 = var16;
                var21 = 0;
                var19 = arraySpread(var23, var22, var21);
                var23 = var17;
                var22 = var8;
                var21 = var18;
                var8 = apply(var23, var22, var21);
                var8 = var15.bind(var16)(var8);
                var8 = var14[var8];
                var9 = var9.bind(var13)(var8);
                var8 = var9.set;
                var10 = var8.bind(var9)(var12, var10);
                var9 = var10.set;
                var8 = 0.9;
                var9 = var9.bind(var10)(var11, var8);
                var8 = var9.hex;
                var9 = var8.bind(var9)();
                var8 = 'dark';
                var10 = var8 === var2;
                var8 = var9;
                if (!var10) {
                    _fun27649_ip = 507;
                    continue _fun27649
                }
            case 504:
                var8 = var1;
            case 507:
                if (!var10) {
                    _fun27649_ip = 513;
                    continue _fun27649
                }
            case 510:
                var1 = var9;
            case 513:
                var3 = var1;
                var4 = var8;
            case 519:
                var1 = {};
                var1.theme = var2;
                var2 = {};
                var2['gradient.start'] = var7;
                var2['gradient.mid'] = var6;
                var2['gradient.end'] = var5;
                var2['gradient.primary'] = var4;
                var2['gradient.secondary'] = var3;
                var1.colors = var2;
                return var1;
            case 559:
                return var0;
        }
    };
    var2.getGradientThemeMetadata = var4;
    var2.getGradientValue = var3;
    var3 = function arg0, arg1() {
        _fun27651: for (var _fun27651_ip = 0;;) switch (_fun27651_ip) {
            case 0:
                var5 = arg0;
                var7 = arg1;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var7;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var6 = undefined;
                var2 = var3.bind(var6)(var2);
                var8 = var2.bind(var6)();
                var _closure2_slot2 = var8;
                var2 = 12;
                var2 = var4[var2];
                var2 = var3.bind(var6)(var2);
                var4 = var2.bind(var6)();
                var _closure2_slot3 = var4;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = new Array(5);
                var1[0] = var8;
                var8 = null;
                var10 = var8 == var7;
                var9 = undefined;
                if (var10) {
                    _fun27651_ip = 103;
                    continue _fun27651
                }
            case 97:
                var9 = var7.dark;
            case 103:
                var1[1] = var9;
                var8 = var8 == var7;
                var6 = undefined;
                if (var8) {
                    _fun27651_ip = 122;
                    continue _fun27651
                }
            case 116:
                var6 = var7.light;
            case 122:
                var1[2] = var6;
                var1[3] = var5;
                var1[4] = var4;
                var0 = function() { // Environment: var0
                    _fun27652: for (var _fun27652_ip = 0;;) switch (_fun27652_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun27652_ip = 280;
                                continue _fun27652
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var3 = var0 == var2;
                            var6 = undefined;
                            var2 = undefined;
                            if (var3) {
                                _fun27652_ip = 41;
                                continue _fun27652
                            }
                        case 31:
                            var3 = _closure2_slot1;
                            var2 = var3.dark;
                        case 41:
                            if (!(var0 == var2)) {
                                _fun27652_ip = 100;
                                continue _fun27652
                            }
                        case 45:
                            var2 = _closure2_slot1;
                            var3 = var0 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun27652_ip = 68;
                                continue _fun27652
                            }
                        case 58:
                            var3 = _closure2_slot1;
                            var2 = var3.light;
                        case 68:
                            if (!(var0 == var2)) {
                                _fun27652_ip = 100;
                                continue _fun27652
                            }
                        case 72:
                            var5 = _closure1_slot20;
                            var4 = _closure2_slot2;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot3;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var2;
                        case 100:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var7 = 10;
                            var3 = var3[var7];
                            var5 = var4.bind(var6)(var3);
                            var4 = var5.isThemeDark;
                            var3 = _closure2_slot3;
                            var4 = var4.bind(var5)(var3);
                            var3 = _closure1_slot9;
                            if (var4) {
                                _fun27652_ip = 153;
                                continue _fun27652
                            }
                        case 145:
                            var5 = var3.LEVEL_4;
                            _fun27652_ip = 159;
                            continue _fun27652;
                        case 153:
                            var5 = var3.LEVEL_2;
                        case 159:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var7 = var4.bind(var6)(var3);
                            var4 = var7.isThemeDark;
                            var3 = _closure2_slot3;
                            var3 = var4.bind(var7)(var3);
                            var4 = _closure2_slot1;
                            var4 = var0 == var4;
                            if (var3) {
                                _fun27652_ip = 219;
                                continue _fun27652
                            }
                        case 202:
                            var7 = undefined;
                            if (var4) {
                                _fun27652_ip = 217;
                                continue _fun27652
                            }
                        case 207:
                            var3 = _closure2_slot1;
                            var7 = var3.light;
                        case 217:
                            _fun27652_ip = 237;
                            continue _fun27652;
                        case 219:
                            var3 = undefined;
                            if (var4) {
                                _fun27652_ip = 234;
                                continue _fun27652
                            }
                        case 224:
                            var4 = _closure2_slot1;
                            var3 = var4.dark;
                        case 234:
                            var7 = var3;
                        case 237:
                            var4 = _closure1_slot20;
                            var3 = _closure2_slot2;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot3;
                            if (!(var0 != var7)) {
                                _fun27652_ip = 260;
                                continue _fun27652
                            }
                        case 257:
                            var5 = var7;
                        case 260:
                            var13 = undefined;
                            var12 = var3;
                            var11 = var2;
                            var10 = var1;
                            var9 = var5;
                            var1 = var13[var4](var12, var11, var10, var9, var8);
                            return var1;
                        case 280:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useGradientValue = var3;
    var1 = function() {
        _fun27653: for (var _fun27653_ip = 0;;) switch (_fun27653_ip) {
            case 0:
                var2 = _closure1_slot7;
                var1 = var2.hasCustomTheme;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot6;
                var3 = var1.gradientPreset;
                var1 = null;
                if (!(var1 == var3)) {
                    _fun27653_ip = 38;
                    continue _fun27653
                }
            case 33:
                if (var2) {
                    _fun27653_ip = 38;
                    continue _fun27653
                }
            case 36:
                return var1;
            case 38:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.isThemeDark;
                var1 = _closure1_slot5;
                var1 = var1.theme;
                var2 = var2.bind(var3)(var1);
                var1 = _closure1_slot10;
                if (var2) {
                    _fun27653_ip = 96;
                    continue _fun27653
                }
            case 88:
                var3 = var1.LIGHT;
                _fun27653_ip = 102;
                continue _fun27653;
            case 96:
                var3 = var1.DARK;
            case 102:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.hexWithOpacity;
                var0 = _closure1_slot9;
                var0 = var0.LEVEL_1;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.getEmbedBackground = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3198, 3211, 3204, 671, 669, 3242, 3243, 3213, 3208, 3244, 3248, 2]);