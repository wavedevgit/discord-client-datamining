// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var3 = function(arg0) { // Original name: ApertureValue, environment: var2
        var6 = arg0;
        var0 = global;
        var4 = var0.Math;
        var3 = var4.pow;
        var1 = var0.Math;
        var0 = var1.sqrt;
        var2 = 2;
        var1 = var0.bind(var1)(var2);
        var0 = 0;
        var5 = var6[var0];
        var0 = 1;
        var0 = var6[var0];
        var0 = var5 / var0;
        var1 = var3.bind(var4)(var1, var0);
        var0 = var1.toFixed;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var0.ApertureValue = var3;
    var3 = function(arg0) { // Original name: ColorSpace, environment: var2
        _fun38045: for (var _fun38045_ip = 0;;) switch (_fun38045_ip) {
            case 0:
                var3 = arg0;
                var0 = 'sRGB';
                var1 = 1;
                if (!(var1 !== var3)) {
                    _fun38045_ip = 37;
                    continue _fun38045
                }
            case 14:
                var1 = 'Unknown';
                var2 = 65535;
                if (!(var2 === var3)) {
                    _fun38045_ip = 34;
                    continue _fun38045
                }
            case 28:
                var1 = 'Uncalibrated';
            case 34:
                var0 = var1;
            case 37:
                return var0;
        }
    };
    var0.ColorSpace = var3;
    var3 = function(arg0) { // Original name: ComponentsConfiguration, environment: var2
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun38047: for (var _fun38047_ip = 0;;) switch (_fun38047_ip) {
                case 0:
                    var7 = arg0;
                    var0 = 'Y';
                    var1 = 49;
                    if (!(var1 !== var7)) {
                        _fun38047_ip = 90;
                        continue _fun38047
                    }
                case 14:
                    var1 = 'Cb';
                    var2 = 50;
                    if (!(var2 !== var7)) {
                        _fun38047_ip = 87;
                        continue _fun38047
                    }
                case 27:
                    var2 = 'Cr';
                    var3 = 51;
                    if (!(var3 !== var7)) {
                        _fun38047_ip = 84;
                        continue _fun38047
                    }
                case 40:
                    var3 = 'R';
                    var4 = 52;
                    if (!(var4 !== var7)) {
                        _fun38047_ip = 81;
                        continue _fun38047
                    }
                case 51:
                    var4 = 'G';
                    var5 = 53;
                    if (!(var5 !== var7)) {
                        _fun38047_ip = 78;
                        continue _fun38047
                    }
                case 62:
                    var6 = 54;
                    var5 = undefined;
                    if (!(var6 === var7)) {
                        _fun38047_ip = 75;
                        continue _fun38047
                    }
                case 71:
                    var5 = 'B';
                case 75:
                    var4 = var5;
                case 78:
                    var3 = var4;
                case 81:
                    var2 = var3;
                case 84:
                    var1 = var2;
                case 87:
                    var0 = var1;
                case 90:
                    return var0;
            }
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = '';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0.ComponentsConfiguration = var3;
    var3 = function(arg0) { // Original name: Contrast, environment: var2
        _fun38048: for (var _fun38048_ip = 0;;) switch (_fun38048_ip) {
            case 0:
                var4 = arg0;
                var0 = 'Normal';
                var1 = 0;
                if (!(var1 !== var4)) {
                    _fun38048_ip = 51;
                    continue _fun38048
                }
            case 15:
                var1 = 'Soft';
                var2 = 1;
                if (!(var2 !== var4)) {
                    _fun38048_ip = 48;
                    continue _fun38048
                }
            case 28:
                var2 = 'Unknown';
                var3 = 2;
                if (!(var3 === var4)) {
                    _fun38048_ip = 45;
                    continue _fun38048
                }
            case 39:
                var2 = 'Hard';
            case 45:
                var1 = var2;
            case 48:
                var0 = var1;
            case 51:
                return var0;
        }
    };
    var0.Contrast = var3;
    var3 = function(arg0) { // Original name: CustomRendered, environment: var2
        _fun38049: for (var _fun38049_ip = 0;;) switch (_fun38049_ip) {
            case 0:
                var3 = arg0;
                var0 = 'Normal process';
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun38049_ip = 35;
                    continue _fun38049
                }
            case 15:
                var1 = 'Unknown';
                var2 = 1;
                if (!(var2 === var3)) {
                    _fun38049_ip = 32;
                    continue _fun38049
                }
            case 26:
                var1 = 'Custom process';
            case 32:
                var0 = var1;
            case 35:
                return var0;
        }
    };
    var0.CustomRendered = var3;
    var3 = function(arg0) { // Original name: ExposureMode, environment: var2
        _fun38050: for (var _fun38050_ip = 0;;) switch (_fun38050_ip) {
            case 0:
                var4 = arg0;
                var0 = 'Auto exposure';
                var1 = 0;
                if (!(var1 !== var4)) {
                    _fun38050_ip = 51;
                    continue _fun38050
                }
            case 15:
                var1 = 'Manual exposure';
                var2 = 1;
                if (!(var2 !== var4)) {
                    _fun38050_ip = 48;
                    continue _fun38050
                }
            case 28:
                var2 = 'Unknown';
                var3 = 2;
                if (!(var3 === var4)) {
                    _fun38050_ip = 45;
                    continue _fun38050
                }
            case 39:
                var2 = 'Auto bracket';
            case 45:
                var1 = var2;
            case 48:
                var0 = var1;
            case 51:
                return var0;
        }
    };
    var0.ExposureMode = var3;
    var3 = function(arg0) { // Original name: ExposureProgram, environment: var2
        _fun38051: for (var _fun38051_ip = 0;;) switch (_fun38051_ip) {
            case 0:
                var11 = arg0;
                var0 = 'Undefined';
                var1 = 0;
                if (!(var1 !== var11)) {
                    _fun38051_ip = 167;
                    continue _fun38051
                }
            case 18:
                var1 = 'Manual';
                var2 = 1;
                if (!(var2 !== var11)) {
                    _fun38051_ip = 164;
                    continue _fun38051
                }
            case 32:
                var2 = 'Normal program';
                var3 = 2;
                if (!(var3 !== var11)) {
                    _fun38051_ip = 161;
                    continue _fun38051
                }
            case 45:
                var3 = 'Aperture priority';
                var4 = 3;
                if (!(var4 !== var11)) {
                    _fun38051_ip = 158;
                    continue _fun38051
                }
            case 58:
                var4 = 'Shutter priority';
                var5 = 4;
                if (!(var5 !== var11)) {
                    _fun38051_ip = 155;
                    continue _fun38051
                }
            case 71:
                var5 = 'Creative program';
                var6 = 5;
                if (!(var6 !== var11)) {
                    _fun38051_ip = 152;
                    continue _fun38051
                }
            case 84:
                var6 = 'Action program';
                var7 = 6;
                if (!(var7 !== var11)) {
                    _fun38051_ip = 149;
                    continue _fun38051
                }
            case 97:
                var7 = 'Portrait mode';
                var8 = 7;
                if (!(var8 !== var11)) {
                    _fun38051_ip = 146;
                    continue _fun38051
                }
            case 110:
                var8 = 'Landscape mode';
                var9 = 8;
                if (!(var9 !== var11)) {
                    _fun38051_ip = 143;
                    continue _fun38051
                }
            case 123:
                var9 = 'Unknown';
                var10 = 9;
                if (!(var10 === var11)) {
                    _fun38051_ip = 140;
                    continue _fun38051
                }
            case 134:
                var9 = 'Bulb';
            case 140:
                var8 = var9;
            case 143:
                var7 = var8;
            case 146:
                var6 = var7;
            case 149:
                var5 = var6;
            case 152:
                var4 = var5;
            case 155:
                var3 = var4;
            case 158:
                var2 = var3;
            case 161:
                var1 = var2;
            case 164:
                var0 = var1;
            case 167:
                return var0;
        }
    };
    var0.ExposureProgram = var3;
    var3 = function(arg0) { // Original name: ExposureTime, environment: var2
        _fun38052: for (var _fun38052_ip = 0;;) switch (_fun38052_ip) {
            case 0:
                var0 = arg0;
                var1 = 0;
                var4 = var0[var1];
                var2 = 1;
                var3 = var0[var2];
                var4 = var4 / var3;
                var3 = 0.25;
                if (!(!(var4 > var3))) {
                    _fun38052_ip = 126;
                    continue _fun38052
                }
            case 34:
                var3 = var0[var1];
                if (!(var1 === var3)) {
                    _fun38052_ip = 72;
                    continue _fun38052
                }
            case 42:
                var5 = var0[var2];
                var3 = global;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = '0/';
                var3 = var4.bind(var3)(var5);
                _fun38052_ip = 124;
                continue _fun38052;
            case 72:
                var4 = global;
                var7 = var4.Math;
                var6 = var7.round;
                var8 = var0[var2];
                var5 = var0[var1];
                var5 = var8 / var5;
                var6 = var6.bind(var7)(var5);
                var4 = var4.HermesInternal;
                var5 = var4.concat;
                var4 = '1/';
                var3 = var5.bind(var4)(var6);
            case 124:
                return var3;
            case 126:
                var1 = var0[var1];
                var0 = var0[var2];
                var1 = var1 / var0;
                var0 = global;
                var3 = var0.Number;
                var0 = var3.isInteger;
                var0 = var0.bind(var3)(var1);
                if (var0) {
                    _fun38052_ip = 173;
                    continue _fun38052
                }
            case 160:
                var0 = var1.toFixed;
                var0 = var0.bind(var1)(var2);
                _fun38052_ip = 176;
                continue _fun38052;
            case 173:
                var0 = '' + var1;
            case 176:
                return var0;
        }
    };
    var0.ExposureTime = var3;
    var3 = function(arg0) { // Original name: FNumber, environment: var2
        var1 = arg0;
        var0 = global;
        var4 = var0.Number;
        var2 = 0;
        var2 = var1[var2];
        var3 = 1;
        var1 = var1[var3];
        var2 = var2 / var1;
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var1 = var2.toFixed;
        var2 = var1.bind(var2)(var3);
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'f/';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var0.FNumber = var3;
    var3 = function(arg0) { // Original name: FocalLength, environment: var2
        var2 = arg0;
        var0 = 0;
        var1 = var2[var0];
        var0 = 1;
        var0 = var2[var0];
        var1 = var1 / var0;
        var0 = ' mm';
        var0 = var1 + var0;
        return var0;
    };
    var0.FocalLength = var3;
    var3 = function(arg0) { // Original name: FocalPlaneResolutionUnit, environment: var2
        _fun38055: for (var _fun38055_ip = 0;;) switch (_fun38055_ip) {
            case 0:
                var4 = arg0;
                var0 = 'inches';
                var1 = 2;
                if (!(var1 !== var4)) {
                    _fun38055_ip = 52;
                    continue _fun38055
                }
            case 16:
                var1 = 'centimeters';
                var2 = 3;
                if (!(var2 !== var4)) {
                    _fun38055_ip = 49;
                    continue _fun38055
                }
            case 29:
                var2 = 'Unknown';
                var3 = 4;
                if (!(var3 === var4)) {
                    _fun38055_ip = 46;
                    continue _fun38055
                }
            case 40:
                var2 = 'millimeters';
            case 46:
                var1 = var2;
            case 49:
                var0 = var1;
            case 52:
                return var0;
        }
    };
    var0.FocalPlaneResolutionUnit = var3;
    var3 = function(arg0) { // Original name: LightSource, environment: var2
        _fun38056: for (var _fun38056_ip = 0;;) switch (_fun38056_ip) {
            case 0:
                var21 = arg0;
                var0 = 'Daylight';
                var1 = 1;
                if (!(var1 !== var21)) {
                    _fun38056_ip = 360;
                    continue _fun38056
                }
            case 19:
                var1 = 'Fluorescent';
                var2 = 2;
                if (!(var2 !== var21)) {
                    _fun38056_ip = 357;
                    continue _fun38056
                }
            case 35:
                var2 = 'Tungsten (incandescent light)';
                var3 = 3;
                if (!(var3 !== var21)) {
                    _fun38056_ip = 354;
                    continue _fun38056
                }
            case 51:
                var3 = 'Flash';
                var4 = 4;
                if (!(var4 !== var21)) {
                    _fun38056_ip = 351;
                    continue _fun38056
                }
            case 67:
                var4 = 'Fine weather';
                var5 = 9;
                if (!(var5 !== var21)) {
                    _fun38056_ip = 348;
                    continue _fun38056
                }
            case 83:
                var5 = 'Cloudy weather';
                var6 = 10;
                if (!(var6 !== var21)) {
                    _fun38056_ip = 345;
                    continue _fun38056
                }
            case 99:
                var6 = 'Shade';
                var7 = 11;
                if (!(var7 !== var21)) {
                    _fun38056_ip = 342;
                    continue _fun38056
                }
            case 115:
                var7 = 'Daylight fluorescent (D 5700 – 7100K)';
                var8 = 12;
                if (!(var8 !== var21)) {
                    _fun38056_ip = 339;
                    continue _fun38056
                }
            case 131:
                var8 = 'Day white fluorescent (N 4600 – 5400K)';
                var9 = 13;
                if (!(var9 !== var21)) {
                    _fun38056_ip = 336;
                    continue _fun38056
                }
            case 147:
                var9 = 'Cool white fluorescent (W 3900 – 4500K)';
                var10 = 14;
                if (!(var10 !== var21)) {
                    _fun38056_ip = 333;
                    continue _fun38056
                }
            case 163:
                var10 = 'White fluorescent (WW 3200 – 3700K)';
                var11 = 15;
                if (!(var11 !== var21)) {
                    _fun38056_ip = 330;
                    continue _fun38056
                }
            case 179:
                var11 = 'Standard light A';
                var12 = 17;
                if (!(var12 !== var21)) {
                    _fun38056_ip = 327;
                    continue _fun38056
                }
            case 195:
                var12 = 'Standard light B';
                var13 = 18;
                if (!(var13 !== var21)) {
                    _fun38056_ip = 324;
                    continue _fun38056
                }
            case 208:
                var13 = 'Standard light C';
                var14 = 19;
                if (!(var14 !== var21)) {
                    _fun38056_ip = 321;
                    continue _fun38056
                }
            case 221:
                var14 = 'D55';
                var15 = 20;
                if (!(var15 !== var21)) {
                    _fun38056_ip = 318;
                    continue _fun38056
                }
            case 234:
                var15 = 'D65';
                var16 = 21;
                if (!(var16 !== var21)) {
                    _fun38056_ip = 315;
                    continue _fun38056
                }
            case 247:
                var16 = 'D75';
                var17 = 22;
                if (!(var17 !== var21)) {
                    _fun38056_ip = 312;
                    continue _fun38056
                }
            case 260:
                var17 = 'D50';
                var18 = 23;
                if (!(var18 !== var21)) {
                    _fun38056_ip = 309;
                    continue _fun38056
                }
            case 273:
                var18 = 'ISO studio tungsten';
                var19 = 24;
                if (!(var19 !== var21)) {
                    _fun38056_ip = 306;
                    continue _fun38056
                }
            case 286:
                var19 = 'Unknown';
                var20 = 255;
                if (!(var20 === var21)) {
                    _fun38056_ip = 303;
                    continue _fun38056
                }
            case 297:
                var19 = 'Other light source';
            case 303:
                var18 = var19;
            case 306:
                var17 = var18;
            case 309:
                var16 = var17;
            case 312:
                var15 = var16;
            case 315:
                var14 = var15;
            case 318:
                var13 = var14;
            case 321:
                var12 = var13;
            case 324:
                var11 = var12;
            case 327:
                var10 = var11;
            case 330:
                var9 = var10;
            case 333:
                var8 = var9;
            case 336:
                var7 = var8;
            case 339:
                var6 = var7;
            case 342:
                var5 = var6;
            case 345:
                var4 = var5;
            case 348:
                var3 = var4;
            case 351:
                var2 = var3;
            case 354:
                var1 = var2;
            case 357:
                var0 = var1;
            case 360:
                return var0;
        }
    };
    var0.LightSource = var3;
    var3 = function(arg0) { // Original name: MeteringMode, environment: var2
        _fun38057: for (var _fun38057_ip = 0;;) switch (_fun38057_ip) {
            case 0:
                var8 = arg0;
                var0 = 'Average';
                var1 = 1;
                if (!(var1 !== var8)) {
                    _fun38057_ip = 114;
                    continue _fun38057
                }
            case 16:
                var1 = 'CenterWeightedAverage';
                var2 = 2;
                if (!(var2 !== var8)) {
                    _fun38057_ip = 111;
                    continue _fun38057
                }
            case 29:
                var2 = 'Spot';
                var3 = 3;
                if (!(var3 !== var8)) {
                    _fun38057_ip = 108;
                    continue _fun38057
                }
            case 42:
                var3 = 'MultiSpot';
                var4 = 4;
                if (!(var4 !== var8)) {
                    _fun38057_ip = 105;
                    continue _fun38057
                }
            case 55:
                var4 = 'Pattern';
                var5 = 5;
                if (!(var5 !== var8)) {
                    _fun38057_ip = 102;
                    continue _fun38057
                }
            case 66:
                var5 = 'Partial';
                var6 = 6;
                if (!(var6 !== var8)) {
                    _fun38057_ip = 99;
                    continue _fun38057
                }
            case 79:
                var6 = 'Unknown';
                var7 = 255;
                if (!(var7 === var8)) {
                    _fun38057_ip = 96;
                    continue _fun38057
                }
            case 90:
                var6 = 'Other';
            case 96:
                var5 = var6;
            case 99:
                var4 = var5;
            case 102:
                var3 = var4;
            case 105:
                var2 = var3;
            case 108:
                var1 = var2;
            case 111:
                var0 = var1;
            case 114:
                return var0;
        }
    };
    var0.MeteringMode = var3;
    var3 = function(arg0) { // Original name: ResolutionUnit, environment: var2
        _fun38058: for (var _fun38058_ip = 0;;) switch (_fun38058_ip) {
            case 0:
                var3 = arg0;
                var0 = 'inches';
                var1 = 2;
                if (!(var1 !== var3)) {
                    _fun38058_ip = 36;
                    continue _fun38058
                }
            case 16:
                var1 = 'Unknown';
                var2 = 3;
                if (!(var2 === var3)) {
                    _fun38058_ip = 33;
                    continue _fun38058
                }
            case 27:
                var1 = 'centimeters';
            case 33:
                var0 = var1;
            case 36:
                return var0;
        }
    };
    var0.ResolutionUnit = var3;
    var3 = function(arg0) { // Original name: Saturation, environment: var2
        _fun38059: for (var _fun38059_ip = 0;;) switch (_fun38059_ip) {
            case 0:
                var4 = arg0;
                var0 = 'Normal';
                var1 = 0;
                if (!(var1 !== var4)) {
                    _fun38059_ip = 51;
                    continue _fun38059
                }
            case 15:
                var1 = 'Low saturation';
                var2 = 1;
                if (!(var2 !== var4)) {
                    _fun38059_ip = 48;
                    continue _fun38059
                }
            case 28:
                var2 = 'Unknown';
                var3 = 2;
                if (!(var3 === var4)) {
                    _fun38059_ip = 45;
                    continue _fun38059
                }
            case 39:
                var2 = 'High saturation';
            case 45:
                var1 = var2;
            case 48:
                var0 = var1;
            case 51:
                return var0;
        }
    };
    var0.Saturation = var3;
    var3 = function(arg0) { // Original name: FocalLengthIn35mmFilm, environment: var2
        _fun38060: for (var _fun38060_ip = 0;;) switch (_fun38060_ip) {
            case 0:
                var2 = arg0;
                var0 = 'Unknown';
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun38060_ip = 23;
                    continue _fun38060
                }
            case 13:
                var1 = ' mm';
                var0 = var2 + var1;
            case 23:
                return var0;
        }
    };
    var0.FocalLengthIn35mmFilm = var3;
    var3 = function(arg0) { // Original name: SceneCaptureType, environment: var2
        _fun38061: for (var _fun38061_ip = 0;;) switch (_fun38061_ip) {
            case 0:
                var5 = arg0;
                var0 = 'Standard';
                var1 = 0;
                if (!(var1 !== var5)) {
                    _fun38061_ip = 67;
                    continue _fun38061
                }
            case 15:
                var1 = 'Landscape';
                var2 = 1;
                if (!(var2 !== var5)) {
                    _fun38061_ip = 64;
                    continue _fun38061
                }
            case 28:
                var2 = 'Portrait';
                var3 = 2;
                if (!(var3 !== var5)) {
                    _fun38061_ip = 61;
                    continue _fun38061
                }
            case 41:
                var3 = 'Unknown';
                var4 = 3;
                if (!(var4 === var5)) {
                    _fun38061_ip = 58;
                    continue _fun38061
                }
            case 52:
                var3 = 'Night scene';
            case 58:
                var2 = var3;
            case 61:
                var1 = var2;
            case 64:
                var0 = var1;
            case 67:
                return var0;
        }
    };
    var0.SceneCaptureType = var3;
    var3 = function(arg0) { // Original name: Sharpness, environment: var2
        _fun38062: for (var _fun38062_ip = 0;;) switch (_fun38062_ip) {
            case 0:
                var4 = arg0;
                var0 = 'Normal';
                var1 = 0;
                if (!(var1 !== var4)) {
                    _fun38062_ip = 51;
                    continue _fun38062
                }
            case 15:
                var1 = 'Soft';
                var2 = 1;
                if (!(var2 !== var4)) {
                    _fun38062_ip = 48;
                    continue _fun38062
                }
            case 28:
                var2 = 'Unknown';
                var3 = 2;
                if (!(var3 === var4)) {
                    _fun38062_ip = 45;
                    continue _fun38062
                }
            case 39:
                var2 = 'Hard';
            case 45:
                var1 = var2;
            case 48:
                var0 = var1;
            case 51:
                return var0;
        }
    };
    var0.Sharpness = var3;
    var3 = function(arg0) { // Original name: ShutterSpeedValue, environment: var2
        _fun38063: for (var _fun38063_ip = 0;;) switch (_fun38063_ip) {
            case 0:
                var0 = arg0;
                var1 = global;
                var4 = var1.Math;
                var3 = var4.pow;
                var2 = 0;
                var2 = var0[var2];
                var5 = 1;
                var0 = var0[var5];
                var2 = var2 / var0;
                var0 = 2;
                var2 = var3.bind(var4)(var0, var2);
                if (!(!(var2 <= var5))) {
                    _fun38063_ip = 87;
                    continue _fun38063
                }
            case 47:
                var3 = var1.Math;
                var0 = var3.round;
                var4 = var0.bind(var3)(var2);
                var0 = var1.HermesInternal;
                var3 = var0.concat;
                var0 = '1/';
                var0 = var3.bind(var0)(var4);
                _fun38063_ip = 127;
                continue _fun38063;
            case 87:
                var4 = var1.Math;
                var3 = var4.round;
                var2 = var5 / var2;
                var3 = var3.bind(var4)(var2);
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '';
                var0 = var2.bind(var1)(var3);
            case 127:
                return var0;
        }
    };
    var0.ShutterSpeedValue = var3;
    var3 = function(arg0) { // Original name: WhiteBalance, environment: var2
        _fun38064: for (var _fun38064_ip = 0;;) switch (_fun38064_ip) {
            case 0:
                var3 = arg0;
                var0 = 'Auto white balance';
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun38064_ip = 35;
                    continue _fun38064
                }
            case 15:
                var1 = 'Unknown';
                var2 = 1;
                if (!(var2 === var3)) {
                    _fun38064_ip = 32;
                    continue _fun38064
                }
            case 26:
                var1 = 'Manual white balance';
            case 32:
                var0 = var1;
            case 35:
                return var0;
        }
    };
    var0.WhiteBalance = var3;
    var3 = function(arg0) { // Original name: XResolution, environment: var2
        var4 = arg0;
        var0 = global;
        var2 = var0.Math;
        var1 = var2.round;
        var0 = 0;
        var3 = var4[var0];
        var0 = 1;
        var0 = var4[var0];
        var0 = var3 / var0;
        var0 = var1.bind(var2)(var0);
        var0 = '' + var0;
        return var0;
    };
    var0.XResolution = var3;
    var2 = function(arg0) { // Original name: YResolution, environment: var2
        var4 = arg0;
        var0 = global;
        var2 = var0.Math;
        var1 = var2.round;
        var0 = 0;
        var3 = var4[var0];
        var0 = 1;
        var0 = var4[var0];
        var0 = var3 / var0;
        var0 = var1.bind(var2)(var0);
        var0 = '' + var0;
        return var0;
    };
    var0.YResolution = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);