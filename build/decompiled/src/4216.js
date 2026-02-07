// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun38523: for (var _fun38523_ip = 0;;) switch (_fun38523_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var2 = arg2;
                var4 = arg3;
                if (!var4) {
                    _fun38523_ip = 33;
                    continue _fun38523
                }
            case 15:
                var0 = var3[var1];
                if (!var0) {
                    _fun38523_ip = 33;
                    continue _fun38523
                }
            case 22:
                var0 = var3[var1];
                var0 = var0[var2];
                if (var0) {
                    _fun38523_ip = 58;
                    continue _fun38523
                }
            case 33:
                var0 = undefined;
                if (var4) {
                    _fun38523_ip = 56;
                    continue _fun38523
                }
            case 38:
                var4 = var3[var2];
                var0 = undefined;
                if (!var4) {
                    _fun38523_ip = 56;
                    continue _fun38523
                }
            case 47:
                var4 = var3[var2];
                var0 = var4.value;
            case 56:
                _fun38523_ip = 71;
                continue _fun38523;
            case 58:
                var1 = var3[var1];
                var1 = var1[var2];
                var0 = var1.value;
            case 71:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var2);
    var0 = {
        'INCHES': 2,
        'CENTIMETERS': 3,
        'MILLIMETERS': 4
    };
    var _closure1_slot2 = var0;
    var2 = {};
    var3 = function arg0, arg1() {
        _fun38524: for (var _fun38524_ip = 0;;) switch (_fun38524_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var0 = {};
                var6 = _closure1_slot3;
                var1 = undefined;
                var4 = 'exif';
                var20 = 'FocalLength';
                var23 = undefined;
                var22 = var9;
                var21 = var4;
                var19 = var8;
                var7 = var23[var6](var22, var21, var20, var19, var18);
                var20 = 'FocalPlaneXResolution';
                var22 = var9;
                var19 = var8;
                var13 = var23[var6](var22, var21, var20, var19, var18);
                var20 = 'FocalPlaneYResolution';
                var22 = var9;
                var19 = var8;
                var17 = var23[var6](var22, var21, var20, var19, var18);
                var20 = 'FocalPlaneResolutionUnit';
                var22 = var9;
                var19 = var8;
                var16 = var23[var6](var22, var21, var20, var19, var18);
                var3 = 'file';
                var20 = 'Image Width';
                var22 = var9;
                var21 = var3;
                var19 = var8;
                var15 = var23[var6](var22, var21, var20, var19, var18);
                var20 = 'Image Height';
                var22 = var9;
                var19 = var8;
                var2 = var23[var6](var22, var21, var20, var19, var18);
                var20 = 'FocalLengthIn35mmFilm';
                var22 = var9;
                var21 = var4;
                var19 = var8;
                var4 = var23[var6](var22, var21, var20, var19, var18);
                if (var4) {
                    _fun38524_ip = 429;
                    continue _fun38524
                }
            case 144:
                var9 = var13;
                var11 = var17;
                var10 = var16;
                var12 = var15;
                var8 = var2;
                var6 = var7;
                var14 = undefined;
                var3 = 43.27;
                var2 = undefined;
                if (!var13) {
                    _fun38524_ip = 426;
                    continue _fun38524
                }
            case 182:
                var13 = var11;
                var2 = undefined;
                if (!var13) {
                    _fun38524_ip = 426;
                    continue _fun38524
                }
            case 193:
                var13 = var10;
                var2 = undefined;
                if (!var13) {
                    _fun38524_ip = 426;
                    continue _fun38524
                }
            case 204:
                var13 = var12;
                var2 = undefined;
                if (!var13) {
                    _fun38524_ip = 426;
                    continue _fun38524
                }
            case 215:
                var13 = var8;
                var2 = undefined;
                if (!var13) {
                    _fun38524_ip = 426;
                    continue _fun38524
                }
            case 226:
                var13 = var6;
                var2 = undefined;
                if (!var13) {
                    _fun38524_ip = 426;
                    continue _fun38524
                }
            case 237: // try_start_0
                var13 = var10;
                var10 = _closure1_slot2;
                var10 = var10.INCHES;
                if (!(var10 !== var13)) {
                    _fun38524_ip = 299;
                    continue _fun38524
                }
            case 254:
                var10 = _closure1_slot2;
                var10 = var10.CENTIMETERS;
                if (!(var10 !== var13)) {
                    _fun38524_ip = 294;
                    continue _fun38524
                }
            case 268:
                var10 = _closure1_slot2;
                var10 = var10.MILLIMETERS;
                if (!(var10 !== var13)) {
                    _fun38524_ip = 289;
                    continue _fun38524
                }
            case 282: // try_end0
                var2 = undefined;
                _fun38524_ip = 426;
                continue _fun38524;
            case 289: // try_start_1
                var14 = 1;
                _fun38524_ip = 309;
                continue _fun38524;
            case 294:
                var14 = 10;
                _fun38524_ip = 309;
                continue _fun38524;
            case 299:
                var14 = 25.4;
            case 309:
                var13 = var9;
                var9 = 0;
                var15 = var13[var9];
                var10 = 1;
                var13 = var13[var10];
                var13 = var15 / var13;
                var13 = var13 * var14;
                var15 = var11[var9];
                var11 = var11[var10];
                var11 = var15 / var11;
                var11 = var11 * var14;
                var22 = var12 / var13;
                var14 = var8 / var11;
                var8 = global;
                var12 = var8.Math;
                var11 = var12.sqrt;
                var8 = 2;
                var21 = var8;
                var13 = exponentiationOperator(var22, var21);
                var22 = var14;
                var8 = exponentiationOperator(var22, var21);
                var8 = var13 + var8;
                var8 = var11.bind(var12)(var8);
                var9 = var6[var9];
                var6 = var6[var10];
                var6 = var9 / var6;
                var3 = var3 / var8;
                var3 = var6 * var3;
            case 417: // try_end1
                var2 = var3;
                _fun38524_ip = 426;
                continue _fun38524;
            case 422: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 3);
                var2 = undefined;
            case 426:
                var4 = var2;
            case 429:
                var2 = false;
                if (!var4) {
                    _fun38524_ip = 484;
                    continue _fun38524
                }
            case 434:
                var3 = {};
                var3.value = var4;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 0;
                var5 = var8[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.FocalLengthIn35mmFilm;
                var5 = var5.bind(var6)(var4);
                var3.description = var5;
                var0.FocalLength35efl = var3;
                var2 = true;
            case 484:
                var5 = var7;
                var6 = var4;
                var3 = undefined;
                if (!var7) {
                    _fun38524_ip = 554;
                    continue _fun38524
                }
            case 495:
                var7 = var6;
                var3 = undefined;
                if (!var7) {
                    _fun38524_ip = 554;
                    continue _fun38524
                }
            case 503: // try_start_2
                var7 = 0;
                var7 = var5[var7];
                var8 = 1;
                var5 = var5[var8];
                var5 = var7 / var5;
                var7 = var6 / var5;
                var5 = {};
                var5.value = var7;
                var6 = var7.toFixed;
                var6 = var6.bind(var7)(var8);
                var5.description = var6;
            case 545: // try_end2
                var3 = var5;
                _fun38524_ip = 554;
                continue _fun38524;
            case 550: // catch_target2
                CatchBlockStart(arg_register = 5);
                var3 = undefined;
            case 554:
                if (!var3) {
                    _fun38524_ip = 567;
                    continue _fun38524
                }
            case 557:
                var0.ScaleFactorTo35mmEquivalent = var3;
                var2 = true;
            case 567:
                var5 = var4;
                var6 = 36;
                var3 = undefined;
                if (!var4) {
                    _fun38524_ip = 683;
                    continue _fun38524
                }
            case 578: // try_start_3
                var4 = global;
                var8 = var4.Math;
                var7 = var8.atan;
                var9 = var6;
                var6 = 2;
                var5 = var6 * var5;
                var5 = var9 / var5;
                var5 = var7.bind(var8)(var5);
                var5 = var6 * var5;
                var4 = var4.Math;
                var6 = var4.PI;
                var4 = 180;
                var4 = var4 / var6;
                var7 = var5 * var4;
                var4 = {};
                var4.value = var7;
                var6 = var7.toFixed;
                var5 = 1;
                var6 = var6.bind(var7)(var5);
                var5 = ' deg';
                var5 = var6 + var5;
                var4.description = var5;
            case 674: // try_end3
                var3 = var4;
                _fun38524_ip = 683;
                continue _fun38524;
            case 679: // catch_target3
                CatchBlockStart(arg_register = 4);
                var3 = undefined;
            case 683:
                if (!var3) {
                    _fun38524_ip = 696;
                    continue _fun38524
                }
            case 686:
                var0.FieldOfView = var3;
                var2 = true;
            case 696:
                if (var2) {
                    _fun38524_ip = 701;
                    continue _fun38524
                }
            case 699:
                return var1;
            case 701:
                return var0;
        }
    };
    var2.get = var3;
    var1.default = var2;
    var1.FOCAL_PLANE_RESOLUTION_UNIT = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4188]);