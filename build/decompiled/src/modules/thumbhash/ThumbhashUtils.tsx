// modules/thumbhash/ThumbhashUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function arg0() {
        _fun104156: for (var _fun104156_ip = 0;;) switch (_fun104156_ip) {
            case 0:
                var4 = arg0;
                var0 = arguments[1];
                var _closure2_slot0 = var4;
                var52 = undefined;
                if (!(var0 === var52)) {
                    _fun104156_ip = 20;
                    continue _fun104156
                }
            case 18:
                var0 = {};
            case 20:
                var51 = var0.detail;
                if (!(var51 === var52)) {
                    _fun104156_ip = 33;
                    continue _fun104156
                }
            case 30:
                var51 = 1;
            case 33:
                var9 = var0.pop;
                if (!(var9 === var52)) {
                    _fun104156_ip = 46;
                    continue _fun104156
                }
            case 43:
                var9 = 1;
            case 46:
                var _closure2_slot1 = var52;
                var _closure2_slot2 = var52;
                var0 = global;
                var1 = var0.Math;
                var50 = var1.PI;
                var1 = var0.Math;
                var49 = var1.min;
                var1 = var0.Math;
                var48 = var1.max;
                var1 = var0.Math;
                var47 = var1.cos;
                var1 = var0.Math;
                var2 = var1.round;
                var46 = 0;
                var5 = var4[var46];
                var45 = 1;
                var1 = var4[var45];
                var7 = 8;
                var1 = var1 << var7;
                var5 = var5 | var1;
                var44 = 2;
                var6 = var4[var44];
                var1 = 16;
                var1 = var6 << var1;
                var6 = var5 | var1;
                var43 = 3;
                var5 = var4[var43];
                var42 = 4;
                var1 = var4[var42];
                var1 = var1 << var7;
                var10 = var5 | var1;
                var1 = 23;
                var41 = var6 >> var1;
                var7 = 15;
                var1 = var10 >> var7;
                var5 = 7;
                if (var1) {
                    _fun104156_ip = 203;
                    continue _fun104156
                }
            case 197:
                var8 = var5 & var10;
                _fun104156_ip = 215;
                continue _fun104156;
            case 203:
                var11 = var5;
                if (!var41) {
                    _fun104156_ip = 212;
                    continue _fun104156
                }
            case 209:
                var11 = 5;
            case 212:
                var8 = var11;
            case 215:
                var40 = var48.bind(var52)(var43, var8);
                if (var1) {
                    _fun104156_ip = 235;
                    continue _fun104156
                }
            case 224:
                var1 = var5;
                if (!var41) {
                    _fun104156_ip = 233;
                    continue _fun104156
                }
            case 230:
                var1 = 5;
            case 233:
                _fun104156_ip = 239;
                continue _fun104156;
            case 235:
                var1 = var5 & var10;
            case 239:
                var39 = var48.bind(var52)(var43, var1);
                var38 = var45;
                if (!var41) {
                    _fun104156_ip = 266;
                    continue _fun104156
                }
            case 251:
                var1 = 5;
                var1 = var4[var1];
                var1 = var7 & var1;
                var38 = var1 / var7;
            case 266:
                var37 = 5;
                var1 = var4[var37];
                var1 = var1 >> var42;
                var5 = var37;
                if (!var41) {
                    _fun104156_ip = 286;
                    continue _fun104156
                }
            case 283:
                var5 = 6;
            case 286:
                _closure2_slot1 = var5;
                _closure2_slot2 = var46;
                var3 = function arg0, arg1, arg2() {
                    _fun104157: for (var _fun104157_ip = 0;;) switch (_fun104157_ip) {
                        case 0:
                            var10 = arg0;
                            var9 = arg1;
                            var8 = arg2;
                            var0 = new Array(0);
                            var7 = 0;
                            var11 = var7 < var9;
                            var5 = 1;
                            var4 = 2;
                            var3 = 15;
                            var2 = 7.5;
                            var1 = 0;
                            if (!var11) {
                                _fun104157_ip = 175;
                                continue _fun104157
                            }
                        case 49:
                            var13 = var5;
                            if (!var1) {
                                _fun104157_ip = 57;
                                continue _fun104157
                            }
                        case 55:
                            var13 = 0;
                        case 57:
                            var12 = var13 * var9;
                            var11 = var9 - var1;
                            var11 = var10 * var11;
                            if (!(var12 < var11)) {
                                _fun104157_ip = 168;
                                continue _fun104157
                            }
                        case 73:
                            var12 = var0.push;
                            var14 = _closure2_slot0;
                            var15 = _closure2_slot1;
                            var11 = _closure2_slot2;
                            var11 = var11 >> var5;
                            var11 = var15 + var11;
                            var14 = var14[var11];
                            var11 = _closure2_slot2;
                            var11 = parseFloat(var11);
                            var15 = var11 + 1;
                            _closure2_slot2 = var15;
                            var11 = var5 & var11;
                            var11 = var11 << var4;
                            var11 = var14 >> var11;
                            var11 = var11 & var3;
                            var11 = var11 / var2;
                            var11 = var11 - var5;
                            var11 = var11 * var8;
                            var11 = var12.bind(var0)(var11);
                            var13 = var13 + 1;
                            var12 = var13 * var9;
                            var11 = var9 - var1;
                            var11 = var10 * var11;
                            if (var12 < var11) {
                                _fun104157_ip = 73;
                                continue _fun104157
                            }
                        case 168:
                            var1 = var1 + 1;
                            if (var1 < var9) {
                                _fun104157_ip = 49;
                                continue _fun104157
                            }
                        case 175:
                            return var0;
                    }
                };
                var5 = 18;
                var5 = var6 >> var5;
                var8 = 31;
                var5 = var5 & var8;
                var5 = var5 / var8;
                var5 = var5 / var44;
                var36 = var3.bind(var52)(var40, var39, var5);
                var8 = var10 >> var43;
                var5 = 63;
                var8 = var8 & var5;
                var8 = var8 / var5;
                var8 = var8 * var9;
                var35 = var3.bind(var52)(var43, var43, var8);
                var8 = 9;
                var8 = var10 >> var8;
                var8 = var8 & var5;
                var8 = var8 / var5;
                var8 = var8 * var9;
                var34 = var3.bind(var52)(var43, var43, var8);
                if (var41) {
                    _fun104156_ip = 391;
                    continue _fun104156
                }
            case 385:
                var33 = new Array(0);
                _fun104156_ip = 402;
                continue _fun104156;
            case 391:
                var1 = var1 / var7;
                var33 = var3.bind(var52)(var37, var37, var1);
            case 402:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var46];
                var3 = var3.bind(var52)(var1);
                var1 = var3.thumbHashToApproximateAspectRatio;
                var7 = var1.bind(var3)(var4);
                var3 = var7 > var45;
                var4 = 32;
                var1 = var4;
                if (var3) {
                    _fun104156_ip = 450;
                    continue _fun104156
                }
            case 446:
                var1 = var4 * var7;
            case 450:
                var3 = var2.bind(var52)(var1);
                var8 = var7 > var45;
                var1 = var4;
                if (!var8) {
                    _fun104156_ip = 469;
                    continue _fun104156
                }
            case 465:
                var1 = var4 / var7;
            case 469:
                var2 = var2.bind(var52)(var1);
                var4 = var0.Uint8Array;
                var0 = var3 * var2;
                var93 = var0 * var42;
                var1 = var4.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var94 = var1;
                var0 = new var94[var4](var93, var92);
                var1 = var0 instanceof Object ? var0 : var1;
                var32 = new Array(0);
                var31 = new Array(0);
                var53 = var46 < var2;
                var30 = 0.6666666666666666;
                var29 = 255;
                var28 = 0.5;
                var0 = var5 & var6;
                var27 = var0 / var5;
                var0 = 6;
                var0 = var6 >> var0;
                var0 = var0 & var5;
                var4 = 31.5;
                var0 = var0 / var4;
                var26 = var0 - var45;
                var0 = 12;
                var0 = var6 >> var0;
                var0 = var0 & var5;
                var0 = var0 / var4;
                var25 = var0 - var45;
                var24 = 0;
                var23 = 0;
                var22 = undefined;
                var21 = undefined;
                var20 = undefined;
                var19 = undefined;
                var18 = undefined;
                var17 = undefined;
                var16 = undefined;
                var15 = undefined;
                var14 = undefined;
                var13 = undefined;
                var12 = undefined;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var0 = undefined;
                if (!var53) {
                    _fun104156_ip = 1484;
                    continue _fun104156
                }
            case 649:
                var61 = var46 < var3;
                var60 = var23;
                var58 = var12;
                var57 = var11;
                var56 = var6;
                var55 = var5;
                var54 = var4;
                var53 = var0;
                var59 = 0;
                var23 = var60;
                var12 = var58;
                var11 = var57;
                var6 = var56;
                var5 = var55;
                var4 = var54;
                var0 = var53;
                if (!var61) {
                    _fun104156_ip = 1474;
                    continue _fun104156
                }
            case 703:
                var61 = var43;
                if (!var41) {
                    _fun104156_ip = 712;
                    continue _fun104156
                }
            case 709:
                var61 = var37;
            case 712:
                var75 = var48.bind(var52)(var40, var61);
                var62 = var46 < var75;
                var61 = 0;
                var76 = 0;
                if (!var62) {
                    _fun104156_ip = 764;
                    continue _fun104156
                }
            case 729:
                var63 = var50 / var3;
                var62 = var59 + var28;
                var62 = var63 * var62;
                var62 = var62 * var61;
                var62 = var47.bind(var52)(var62);
                var32[var61] = var62;
                var61 = var61 + 1;
                var76 = var61;
                if (var76 < var75) {
                    _fun104156_ip = 729;
                    continue _fun104156
                }
            case 764:
                var61 = var43;
                if (!var41) {
                    _fun104156_ip = 773;
                    continue _fun104156
                }
            case 770:
                var61 = var37;
            case 773:
                var73 = var48.bind(var52)(var39, var61);
                var62 = var46 < var73;
                var61 = 0;
                var74 = 0;
                if (!var62) {
                    _fun104156_ip = 825;
                    continue _fun104156
                }
            case 790:
                var63 = var50 / var2;
                var62 = var24 + var28;
                var62 = var63 * var62;
                var62 = var62 * var61;
                var62 = var47.bind(var52)(var62);
                var31[var61] = var62;
                var61 = var61 + 1;
                var74 = var61;
                if (var74 < var73) {
                    _fun104156_ip = 790;
                    continue _fun104156
                }
            case 825:
                var64 = var46 < var39;
                var63 = var27;
                var62 = 0;
                var61 = 0;
                var80 = var63;
                var72 = 0;
                var71 = 0;
                if (!var64) {
                    _fun104156_ip = 1004;
                    continue _fun104156
                }
            case 849:
                var66 = var45;
                if (!var62) {
                    _fun104156_ip = 857;
                    continue _fun104156
                }
            case 855:
                var66 = 0;
            case 857:
                var64 = var31[var62];
                var65 = var44 * var64;
                var69 = var66 * var39;
                var64 = var39 - var62;
                var64 = var40 * var64;
                var70 = var66;
                var78 = var63;
                var77 = var61;
                var68 = var78;
                var67 = var77;
                var66 = var70;
                if (!(var69 < var64)) {
                    _fun104156_ip = 973;
                    continue _fun104156
                }
            case 899:
                var64 = var70 > var51;
                if (var64) {
                    _fun104156_ip = 910;
                    continue _fun104156
                }
            case 906:
                var64 = var62 > var51;
            case 910:
                var82 = var78;
                if (var64) {
                    _fun104156_ip = 936;
                    continue _fun104156
                }
            case 916:
                var69 = var36[var77];
                var64 = var32[var70];
                var64 = var69 * var64;
                var64 = var64 * var65;
                var82 = var78 + var64;
            case 936:
                var79 = var70 + 1;
                var77 = var77 + 1;
                var69 = var79 * var39;
                var64 = var39 - var62;
                var64 = var40 * var64;
                var78 = var82;
                var70 = var79;
                var68 = var78;
                var67 = var77;
                var66 = var70;
                if (var69 < var64) {
                    _fun104156_ip = 899;
                    continue _fun104156
                }
            case 973:
                var62 = var62 + 1;
                var63 = var68;
                var61 = var67;
                var58 = var66;
                var80 = var63;
                var71 = var61;
                var57 = var65;
                var72 = var62;
                if (var72 < var39) {
                    _fun104156_ip = 849;
                    continue _fun104156
                }
            case 1004:
                var70 = var58;
                var69 = var57;
                var64 = var26;
                var63 = var25;
                var62 = 0;
                var61 = 0;
            case 1020:
                var66 = var45;
                if (!var62) {
                    _fun104156_ip = 1028;
                    continue _fun104156
                }
            case 1026:
                var66 = 0;
            case 1028:
                var65 = var31[var62];
                var65 = var44 * var65;
                var68 = var43 - var62;
                var77 = var66;
                var83 = var64;
                var82 = var63;
                var81 = var61;
                var79 = var83;
                var78 = var82;
                var67 = var81;
                var66 = var77;
                if (!(var66 < var68)) {
                    _fun104156_ip = 1126;
                    continue _fun104156
                }
            case 1068:
                var68 = var32[var77];
                var84 = var68 * var65;
                var68 = var35[var81];
                var68 = var68 * var84;
                var83 = var83 + var68;
                var68 = var34[var81];
                var68 = var68 * var84;
                var82 = var82 + var68;
                var77 = var77 + 1;
                var81 = var81 + 1;
                var68 = var43 - var62;
                var79 = var83;
                var78 = var82;
                var67 = var81;
                var66 = var77;
                if (var66 < var68) {
                    _fun104156_ip = 1068;
                    continue _fun104156
                }
            case 1126:
                var68 = var62 + 1;
                var64 = var79;
                var63 = var78;
                var62 = var68;
                var61 = var67;
                if (var68 < var43) {
                    _fun104156_ip = 1020;
                    continue _fun104156
                }
            case 1145:
                var64 = var38;
                var63 = 0;
                var62 = 0;
                var61 = var64;
                if (!var41) {
                    _fun104156_ip = 1271;
                    continue _fun104156
                }
            case 1158:
                var82 = var45;
                if (!var63) {
                    _fun104156_ip = 1166;
                    continue _fun104156
                }
            case 1164:
                var82 = 0;
            case 1166:
                var77 = var31[var63];
                var81 = var44 * var77;
                var77 = var37 - var63;
                var85 = var82;
                var87 = var64;
                var86 = var62;
                var84 = var87;
                var83 = var86;
                var82 = var85;
                if (!(var82 < var77)) {
                    _fun104156_ip = 1243;
                    continue _fun104156
                }
            case 1200:
                var88 = var33[var86];
                var77 = var32[var85];
                var77 = var88 * var77;
                var77 = var77 * var81;
                var87 = var87 + var77;
                var85 = var85 + 1;
                var86 = var86 + 1;
                var77 = var37 - var63;
                var84 = var87;
                var83 = var86;
                var82 = var85;
                if (var82 < var77) {
                    _fun104156_ip = 1200;
                    continue _fun104156
                }
            case 1243:
                var63 = var63 + 1;
                var64 = var84;
                var62 = var83;
                var54 = var82;
                var61 = var64;
                var55 = var62;
                var53 = var81;
                var56 = var63;
                if (var56 < var37) {
                    _fun104156_ip = 1158;
                    continue _fun104156
                }
            case 1271:
                var62 = var30 * var79;
                var62 = var80 - var62;
                var63 = var43 * var80;
                var63 = var63 - var62;
                var63 = var63 + var78;
                var63 = var63 / var44;
                var64 = var49.bind(var52)(var45, var63);
                var64 = var29 * var64;
                var64 = var48.bind(var52)(var46, var64);
                var1[var60] = var64;
                var63 = var63 - var78;
                var63 = var49.bind(var52)(var45, var63);
                var63 = var29 * var63;
                var64 = var48.bind(var52)(var46, var63);
                var63 = var60 + var45;
                var1[var63] = var64;
                var62 = var49.bind(var52)(var45, var62);
                var62 = var29 * var62;
                var63 = var48.bind(var52)(var46, var62);
                var62 = var60 + var44;
                var1[var62] = var63;
                var62 = var49.bind(var52)(var45, var61);
                var62 = var29 * var62;
                var63 = var48.bind(var52)(var46, var62);
                var62 = var60 + var43;
                var1[var62] = var63;
                var59 = var59 + 1;
                var60 = var60 + var42;
                var19 = var61;
                var58 = var70;
                var57 = var69;
                var23 = var60;
                var22 = var80;
                var21 = var79;
                var20 = var78;
                var18 = var76;
                var17 = var75;
                var16 = var74;
                var15 = var73;
                var14 = var72;
                var13 = var71;
                var12 = var58;
                var11 = var57;
                var10 = var68;
                var9 = var67;
                var8 = var66;
                var7 = var65;
                var6 = var56;
                var5 = var55;
                var4 = var54;
                var0 = var53;
                if (var59 < var3) {
                    _fun104156_ip = 703;
                    continue _fun104156
                }
            case 1474:
                var24 = var24 + 1;
                if (var24 < var2) {
                    _fun104156_ip = 649;
                    continue _fun104156
                }
            case 1484:
                var0 = {};
                var0.w = var3;
                var0.h = var2;
                var0.rgba = var1;
                return var0;
        }
    };
    var _closure1_slot2 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 1;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/thumbhash/ThumbhashUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var4 = _closure1_slot2;
        var0 = global;
        var6 = var0.Uint8Array;
        var5 = var6.from;
        var2 = var0.atob;
        var3 = undefined;
        var0 = arg0;
        var2 = var2.bind(var3)(var0);
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.charCodeAt;
            var0 = 0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var5.bind(var6)(var2, var0);
        var0 = {
            'detail': 1,
            'pop': 1.1
        };
        var0 = var4.bind(var3)(var2, var0);
        var2 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 0;
        var1 = var4[var1];
        var4 = var2.bind(var3)(var1);
        var3 = var4.rgbaToDataURL;
        var2 = var0.w;
        var1 = var0.h;
        var0 = var0.rgba;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.createThumbhashImageFromPlaceholder = var3;
    var2.thumbHashToRGBA = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [10810, 2]);