// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = function arg0() {
        _fun84368: for (var _fun84368_ip = 0;;) switch (_fun84368_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var0 = global;
                var1 = var0.Math;
                var51 = var1.PI;
                var1 = var0.Math;
                var50 = var1.min;
                var1 = var0.Math;
                var49 = var1.max;
                var1 = var0.Math;
                var48 = var1.cos;
                var1 = var0.Math;
                var2 = var1.round;
                var47 = 0;
                var5 = var3[var47];
                var46 = 1;
                var1 = var3[var46];
                var6 = 8;
                var1 = var1 << var6;
                var5 = var5 | var1;
                var45 = 2;
                var7 = var3[var45];
                var1 = 16;
                var1 = var7 << var1;
                var7 = var5 | var1;
                var44 = 3;
                var5 = var3[var44];
                var43 = 4;
                var1 = var3[var43];
                var1 = var1 << var6;
                var9 = var5 | var1;
                var8 = 63;
                var1 = var8 & var7;
                var42 = var1 / var8;
                var10 = 6;
                var1 = var7 >> var10;
                var1 = var1 & var8;
                var5 = 31.5;
                var1 = var1 / var5;
                var41 = var1 - var46;
                var1 = 12;
                var1 = var7 >> var1;
                var1 = var1 & var8;
                var1 = var1 / var5;
                var40 = var1 - var46;
                var1 = 23;
                var39 = var7 >> var1;
                var5 = 15;
                var1 = var9 >> var5;
                var6 = 7;
                if (var1) {
                    _fun84368_ip = 217;
                    continue _fun84368
                }
            case 211:
                var11 = var6 & var9;
                _fun84368_ip = 229;
                continue _fun84368;
            case 217:
                var12 = var6;
                if (!var39) {
                    _fun84368_ip = 226;
                    continue _fun84368
                }
            case 223:
                var12 = 5;
            case 226:
                var11 = var12;
            case 229:
                var38 = undefined;
                var37 = var49.bind(var38)(var44, var11);
                if (var1) {
                    _fun84368_ip = 251;
                    continue _fun84368
                }
            case 240:
                var1 = var6;
                if (!var39) {
                    _fun84368_ip = 249;
                    continue _fun84368
                }
            case 246:
                var1 = 5;
            case 249:
                _fun84368_ip = 255;
                continue _fun84368;
            case 251:
                var1 = var6 & var9;
            case 255:
                var36 = var49.bind(var38)(var44, var1);
                var35 = var46;
                if (!var39) {
                    _fun84368_ip = 282;
                    continue _fun84368
                }
            case 267:
                var1 = 5;
                var1 = var3[var1];
                var1 = var5 & var1;
                var35 = var1 / var5;
            case 282:
                var34 = 5;
                var1 = var3[var34];
                var1 = var1 >> var43;
                var6 = var34;
                if (!var39) {
                    _fun84368_ip = 302;
                    continue _fun84368
                }
            case 299:
                var6 = var10;
            case 302:
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var47;
                var4 = function arg0, arg1, arg2() {
                    _fun84369: for (var _fun84369_ip = 0;;) switch (_fun84369_ip) {
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
                                _fun84369_ip = 175;
                                continue _fun84369
                            }
                        case 49:
                            var13 = var5;
                            if (!var1) {
                                _fun84369_ip = 57;
                                continue _fun84369
                            }
                        case 55:
                            var13 = 0;
                        case 57:
                            var12 = var13 * var9;
                            var11 = var9 - var1;
                            var11 = var10 * var11;
                            if (!(var12 < var11)) {
                                _fun84369_ip = 168;
                                continue _fun84369
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
                                _fun84369_ip = 73;
                                continue _fun84369
                            }
                        case 168:
                            var1 = var1 + 1;
                            if (var1 < var9) {
                                _fun84369_ip = 49;
                                continue _fun84369
                            }
                        case 175:
                            return var0;
                    }
                };
                var6 = 18;
                var6 = var7 >> var6;
                var7 = 31;
                var6 = var6 & var7;
                var6 = var6 / var7;
                var33 = var4.bind(var38)(var37, var36, var6);
                var7 = 1.25;
                var6 = var9 >> var44;
                var6 = var6 & var8;
                var6 = var6 / var8;
                var6 = var7 * var6;
                var32 = var4.bind(var38)(var44, var44, var6);
                var6 = 9;
                var6 = var9 >> var6;
                var6 = var6 & var8;
                var6 = var6 / var8;
                var6 = var7 * var6;
                var31 = var4.bind(var38)(var44, var44, var6);
                var30 = var39;
                if (!var30) {
                    _fun84368_ip = 418;
                    continue _fun84368
                }
            case 407:
                var1 = var1 / var5;
                var30 = var4.bind(var38)(var34, var34, var1);
            case 418:
                var1 = _closure1_slot2;
                var5 = var1.bind(var38)(var3);
                var6 = var5 > var46;
                var4 = 32;
                var1 = var4;
                if (var6) {
                    _fun84368_ip = 447;
                    continue _fun84368
                }
            case 443:
                var1 = var4 * var5;
            case 447:
                var3 = var2.bind(var38)(var1);
                var1 = var4;
                if (!var6) {
                    _fun84368_ip = 462;
                    continue _fun84368
                }
            case 458:
                var1 = var4 / var5;
            case 462:
                var2 = var2.bind(var38)(var1);
                var4 = var0.Uint8Array;
                var0 = var3 * var2;
                var92 = var0 * var43;
                var1 = var4.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var93 = var1;
                var0 = new var93[var4](var92, var91);
                var1 = var0 instanceof Object ? var0 : var1;
                var29 = new Array(0);
                var28 = new Array(0);
                var52 = var47 < var2;
                var27 = 0.6666666666666666;
                var26 = 255;
                var25 = 0.5;
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
                if (!var52) {
                    _fun84368_ip = 1398;
                    continue _fun84368
                }
            case 586:
                var60 = var47 < var3;
                var59 = var23;
                var57 = var12;
                var56 = var11;
                var55 = var6;
                var54 = var5;
                var53 = var4;
                var52 = var0;
                var58 = 0;
                var23 = var59;
                var12 = var57;
                var11 = var56;
                var6 = var55;
                var5 = var54;
                var4 = var53;
                var0 = var52;
                if (!var60) {
                    _fun84368_ip = 1388;
                    continue _fun84368
                }
            case 640:
                var60 = var44;
                if (!var39) {
                    _fun84368_ip = 649;
                    continue _fun84368
                }
            case 646:
                var60 = var34;
            case 649:
                var74 = var49.bind(var38)(var37, var60);
                var61 = var47 < var74;
                var60 = 0;
                var75 = 0;
                if (!var61) {
                    _fun84368_ip = 701;
                    continue _fun84368
                }
            case 666:
                var62 = var51 / var3;
                var61 = var58 + var25;
                var61 = var62 * var61;
                var61 = var61 * var60;
                var61 = var48.bind(var38)(var61);
                var29[var60] = var61;
                var60 = var60 + 1;
                var75 = var60;
                if (var75 < var74) {
                    _fun84368_ip = 666;
                    continue _fun84368
                }
            case 701:
                var60 = var44;
                if (!var39) {
                    _fun84368_ip = 710;
                    continue _fun84368
                }
            case 707:
                var60 = var34;
            case 710:
                var72 = var49.bind(var38)(var36, var60);
                var61 = var47 < var72;
                var60 = 0;
                var73 = 0;
                if (!var61) {
                    _fun84368_ip = 762;
                    continue _fun84368
                }
            case 727:
                var62 = var51 / var2;
                var61 = var24 + var25;
                var61 = var62 * var61;
                var61 = var61 * var60;
                var61 = var48.bind(var38)(var61);
                var28[var60] = var61;
                var60 = var60 + 1;
                var73 = var60;
                if (var73 < var72) {
                    _fun84368_ip = 727;
                    continue _fun84368
                }
            case 762:
                var63 = var47 < var36;
                var62 = var42;
                var61 = 0;
                var60 = 0;
                var79 = var62;
                var71 = 0;
                var70 = 0;
                if (!var63) {
                    _fun84368_ip = 918;
                    continue _fun84368
                }
            case 786:
                var65 = var46;
                if (!var61) {
                    _fun84368_ip = 794;
                    continue _fun84368
                }
            case 792:
                var65 = 0;
            case 794:
                var63 = var28[var61];
                var64 = var45 * var63;
                var68 = var65 * var36;
                var63 = var36 - var61;
                var63 = var37 * var63;
                var69 = var65;
                var77 = var62;
                var76 = var60;
                var67 = var77;
                var66 = var76;
                var65 = var69;
                if (!(var68 < var63)) {
                    _fun84368_ip = 890;
                    continue _fun84368
                }
            case 836:
                var68 = var33[var76];
                var63 = var29[var69];
                var63 = var68 * var63;
                var63 = var63 * var64;
                var77 = var77 + var63;
                var78 = var69 + 1;
                var76 = var76 + 1;
                var68 = var78 * var36;
                var63 = var36 - var61;
                var63 = var37 * var63;
                var69 = var78;
                var67 = var77;
                var66 = var76;
                var65 = var69;
                if (var68 < var63) {
                    _fun84368_ip = 836;
                    continue _fun84368
                }
            case 890:
                var61 = var61 + 1;
                var62 = var67;
                var60 = var66;
                var57 = var65;
                var79 = var62;
                var70 = var60;
                var56 = var64;
                var71 = var61;
                if (var71 < var36) {
                    _fun84368_ip = 786;
                    continue _fun84368
                }
            case 918:
                var69 = var57;
                var68 = var56;
                var63 = var41;
                var62 = var40;
                var61 = 0;
                var60 = 0;
            case 934:
                var65 = var46;
                if (!var61) {
                    _fun84368_ip = 942;
                    continue _fun84368
                }
            case 940:
                var65 = 0;
            case 942:
                var64 = var28[var61];
                var64 = var45 * var64;
                var67 = var44 - var61;
                var76 = var65;
                var82 = var63;
                var81 = var62;
                var80 = var60;
                var78 = var82;
                var77 = var81;
                var66 = var80;
                var65 = var76;
                if (!(var65 < var67)) {
                    _fun84368_ip = 1040;
                    continue _fun84368
                }
            case 982:
                var67 = var29[var76];
                var83 = var67 * var64;
                var67 = var32[var80];
                var67 = var67 * var83;
                var82 = var82 + var67;
                var67 = var31[var80];
                var67 = var67 * var83;
                var81 = var81 + var67;
                var76 = var76 + 1;
                var80 = var80 + 1;
                var67 = var44 - var61;
                var78 = var82;
                var77 = var81;
                var66 = var80;
                var65 = var76;
                if (var65 < var67) {
                    _fun84368_ip = 982;
                    continue _fun84368
                }
            case 1040:
                var67 = var61 + 1;
                var63 = var78;
                var62 = var77;
                var61 = var67;
                var60 = var66;
                if (var67 < var44) {
                    _fun84368_ip = 934;
                    continue _fun84368
                }
            case 1059:
                var63 = var35;
                var62 = 0;
                var61 = 0;
                var60 = var63;
                if (!var39) {
                    _fun84368_ip = 1185;
                    continue _fun84368
                }
            case 1072:
                var81 = var46;
                if (!var62) {
                    _fun84368_ip = 1080;
                    continue _fun84368
                }
            case 1078:
                var81 = 0;
            case 1080:
                var76 = var28[var62];
                var80 = var45 * var76;
                var76 = var34 - var62;
                var84 = var81;
                var86 = var63;
                var85 = var61;
                var83 = var86;
                var82 = var85;
                var81 = var84;
                if (!(var81 < var76)) {
                    _fun84368_ip = 1157;
                    continue _fun84368
                }
            case 1114:
                var87 = var30[var85];
                var76 = var29[var84];
                var76 = var87 * var76;
                var76 = var76 * var80;
                var86 = var86 + var76;
                var84 = var84 + 1;
                var85 = var85 + 1;
                var76 = var34 - var62;
                var83 = var86;
                var82 = var85;
                var81 = var84;
                if (var81 < var76) {
                    _fun84368_ip = 1114;
                    continue _fun84368
                }
            case 1157:
                var62 = var62 + 1;
                var63 = var83;
                var61 = var82;
                var53 = var81;
                var60 = var63;
                var54 = var61;
                var52 = var80;
                var55 = var62;
                if (var55 < var34) {
                    _fun84368_ip = 1072;
                    continue _fun84368
                }
            case 1185:
                var61 = var27 * var78;
                var61 = var79 - var61;
                var62 = var44 * var79;
                var62 = var62 - var61;
                var62 = var62 + var77;
                var62 = var62 / var45;
                var63 = var50.bind(var38)(var46, var62);
                var63 = var26 * var63;
                var63 = var49.bind(var38)(var47, var63);
                var1[var59] = var63;
                var62 = var62 - var77;
                var62 = var50.bind(var38)(var46, var62);
                var62 = var26 * var62;
                var63 = var49.bind(var38)(var47, var62);
                var62 = var59 + var46;
                var1[var62] = var63;
                var61 = var50.bind(var38)(var46, var61);
                var61 = var26 * var61;
                var62 = var49.bind(var38)(var47, var61);
                var61 = var59 + var45;
                var1[var61] = var62;
                var61 = var50.bind(var38)(var46, var60);
                var61 = var26 * var61;
                var62 = var49.bind(var38)(var47, var61);
                var61 = var59 + var44;
                var1[var61] = var62;
                var58 = var58 + 1;
                var59 = var59 + var43;
                var19 = var60;
                var57 = var69;
                var56 = var68;
                var23 = var59;
                var22 = var79;
                var21 = var78;
                var20 = var77;
                var18 = var75;
                var17 = var74;
                var16 = var73;
                var15 = var72;
                var14 = var71;
                var13 = var70;
                var12 = var57;
                var11 = var56;
                var10 = var67;
                var9 = var66;
                var8 = var65;
                var7 = var64;
                var6 = var55;
                var5 = var54;
                var4 = var53;
                var0 = var52;
                if (var58 < var3) {
                    _fun84368_ip = 640;
                    continue _fun84368
                }
            case 1388:
                var24 = var24 + 1;
                if (var24 < var2) {
                    _fun84368_ip = 586;
                    continue _fun84368
                }
            case 1398:
                var0 = {};
                var0.w = var3;
                var0.h = var2;
                var0.rgba = var1;
                return var0;
        }
    };
    var _closure1_slot1 = var5;
    var4 = function arg0() {
        _fun84370: for (var _fun84370_ip = 0;;) switch (_fun84370_ip) {
            case 0:
                var2 = arg0;
                var0 = 3;
                var3 = var2[var0];
                var0 = 2;
                var0 = var2[var0];
                var1 = 128;
                var4 = var1 & var0;
                var0 = 4;
                var0 = var2[var0];
                var0 = var1 & var0;
                var2 = 7;
                if (var0) {
                    _fun84370_ip = 47;
                    continue _fun84370
                }
            case 41:
                var1 = var2 & var3;
                _fun84370_ip = 59;
                continue _fun84370;
            case 47:
                var5 = var2;
                if (!var4) {
                    _fun84370_ip = 56;
                    continue _fun84370
                }
            case 53:
                var5 = 5;
            case 56:
                var1 = var5;
            case 59:
                if (var0) {
                    _fun84370_ip = 73;
                    continue _fun84370
                }
            case 62:
                var0 = var2;
                if (!var4) {
                    _fun84370_ip = 71;
                    continue _fun84370
                }
            case 68:
                var0 = 5;
            case 71:
                _fun84370_ip = 77;
                continue _fun84370;
            case 73:
                var0 = var2 & var3;
            case 77:
                var0 = var1 / var0;
                return var0;
        }
    };
    var _closure1_slot2 = var4;
    var3 = function arg0, arg1, arg2() {
        _fun84371: for (var _fun84371_ip = 0;;) switch (_fun84371_ip) {
            case 0:
                var6 = arg0;
                var30 = arg1;
                var29 = arg2;
                var2 = undefined;
                var0 = undefined;
                var15 = undefined;
                var16 = undefined;
                var17 = undefined;
                var18 = undefined;
                var14 = 4;
                var1 = var14 * var6;
                var13 = 1;
                var1 = var1 + var13;
                var3 = 5;
                var3 = var3 + var1;
                var3 = var30 * var3;
                var4 = 6;
                var5 = var4 + var3;
                var12 = 8;
                var7 = var6 >> var12;
                var3 = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0];
                var3[18] = var7;
                var11 = 255;
                var6 = var11 & var6;
                var3[19] = var6;
                var10 = 0;
                var3[20] = var10;
                var3[21] = var10;
                var6 = var30 >> var12;
                var3[22] = var6;
                var6 = var11 & var30;
                var3[23] = var6;
                var3[24] = var12;
                var3[25] = var4;
                var3[26] = var10;
                var3[27] = var10;
                var3[28] = var10;
                var3[29] = var10;
                var3[30] = var10;
                var3[31] = var10;
                var3[32] = var10;
                var9 = 24;
                var4 = var5 >>> var9;
                var3[33] = var4;
                var8 = 16;
                var4 = var5 >> var8;
                var4 = var4 & var11;
                var3[34] = var4;
                var4 = var5 >> var12;
                var4 = var4 & var11;
                var3[35] = var4;
                var4 = var11 & var5;
                var3[36] = var4;
                var27 = 73;
                var3[37] = var27;
                var26 = 68;
                var3[38] = var26;
                var4 = 65;
                var3[39] = var4;
                var4 = 84;
                var3[40] = var4;
                var4 = 120;
                var3[41] = var4;
                var3[42] = var13;
                var0 = var3;
                var3 = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948];
                var4 = -306674912;
                var3[8] = var4;
                var4 = -267414716;
                var3[9] = var4;
                var4 = -690576408;
                var3[10] = var4;
                var4 = -882789492;
                var3[11] = var4;
                var4 = -1687895376;
                var3[12] = var4;
                var4 = -2032938284;
                var3[13] = var4;
                var4 = -1609899400;
                var3[14] = var4;
                var4 = -1111625188;
                var3[15] = var4;
                var15 = var3;
                var28 = var1 - var13;
                var31 = var10 < var30;
                var25 = var1 >> var12;
                var24 = var11 & var1;
                var1 = ~var1;
                var23 = var11 & var1;
                var22 = var25 ^ var11;
                var21 = 65521;
                var20 = var13;
                var19 = 0;
                var7 = 0;
                var6 = 0;
                var4 = var28;
                var1 = var20;
                var3 = 0;
                if (!var31) {
                    _fun84371_ip = 541;
                    continue _fun84371
                }
            case 384:
                var33 = var0;
                var32 = var33.push;
                var31 = var7 + var13;
                var34 = var31 < var30;
                var31 = var13;
                if (!var34) {
                    _fun84371_ip = 408;
                    continue _fun84371
                }
            case 406:
                var31 = 0;
            case 408:
                var59 = var33;
                var58 = var31;
                var57 = var24;
                var56 = var25;
                var55 = var23;
                var54 = var22;
                var53 = 0;
                var31 = var59[var32](var58, var57, var56, var55, var54, var53, var52);
                var31 = var19 + var20;
                var34 = var31 % var21;
                var35 = var20;
                var33 = var6;
                var32 = var35;
                var31 = var34;
                var6 = var33;
                if (!(var6 < var4)) {
                    _fun84371_ip = 515;
                    continue _fun84371
                }
            case 459:
                var36 = var29[var33];
                var36 = var11 & var36;
                var38 = var0;
                var37 = var38.push;
                var37 = var37.bind(var38)(var36);
                var36 = var35 + var36;
                var38 = var36 % var21;
                var36 = var34 + var38;
                var34 = var36 % var21;
                var33 = var33 + 1;
                var35 = var38;
                var32 = var35;
                var31 = var34;
                var6 = var33;
                if (var6 < var4) {
                    _fun84371_ip = 459;
                    continue _fun84371
                }
            case 515:
                var7 = var7 + 1;
                var4 = var4 + var28;
                var20 = var32;
                var19 = var31;
                var1 = var20;
                var3 = var19;
                if (var7 < var30) {
                    _fun84371_ip = 384;
                    continue _fun84371
                }
            case 541:
                var25 = var0;
                var24 = var25.push;
                var58 = var3 >> var12;
                var57 = var11 & var3;
                var56 = var1 >> var12;
                var55 = var11 & var1;
                var45 = 69;
                var44 = 78;
                var42 = 174;
                var41 = 66;
                var40 = 96;
                var39 = 130;
                var59 = var25;
                var54 = 0;
                var53 = 0;
                var52 = 0;
                var51 = 0;
                var50 = 0;
                var49 = 0;
                var48 = 0;
                var47 = 0;
                var46 = var27;
                var43 = var26;
                var1 = var59[var24](var58, var57, var56, var55, var54, var53, var52, var51, var50, var49, var48, var47, var46, var45, var44, var43, var42, var41, var40, var39, var38);
                var1 = new Array(2);
                var3 = [12, 29];
                var1[0] = var3;
                var3 = [37];
                var4 = 41;
                var4 = var4 + var5;
                var3[1] = var4;
                var1[1] = var3;
                var7 = var1;
                var3 = var7[Symbol.iterator];
                var7 = var3().next;
                var5 = 2;
                var4 = -1;
                var1 = 15;
            case 674:
                var20 = var7().value;
                var19 = var3;
                if (!(var19 !== var2)) {
                    _fun84371_ip = 890;
                    continue _fun84371
                }
            case 688: // try_start_0
                var19 = _closure1_slot0;
                var19 = var19.bind(var2)(var20, var5);
                var20 = var19[var10];
                var19 = var19[var13];
                var16 = var19;
                var17 = var4;
                var18 = var20;
                if (!(var20 < var19)) {
                    _fun84371_ip = 790;
                    continue _fun84371
                }
            case 719:
                var21 = var17;
                var20 = var0;
                var19 = var18;
                var20 = var20[var19];
                var20 = var21 ^ var20;
                var17 = var20;
                var21 = var20 >>> var14;
                var22 = var15;
                var20 = var1 & var20;
                var20 = var22[var20];
                var20 = var21 ^ var20;
                var17 = var20;
                var21 = var1 & var20;
                var21 = var22[var21];
                var20 = var20 >>> var14;
                var17 = var20 ^ var21;
                var20 = var19 + 1;
                var18 = var20;
                var19 = var16;
                if (var20 < var19) {
                    _fun84371_ip = 719;
                    continue _fun84371
                }
            case 790:
                var19 = var17;
                var19 = ~var19;
                var17 = var19;
                var21 = var0;
                var20 = var16;
                var23 = parseFloat(var20);
                var20 = var23 + 1;
                var16 = var20;
                var22 = var19 >>> var9;
                var21[var23] = var22;
                var23 = parseFloat(var20);
                var20 = var23 + 1;
                var16 = var20;
                var22 = var19 >> var8;
                var22 = var22 & var11;
                var21[var23] = var22;
                var23 = parseFloat(var20);
                var20 = var23 + 1;
                var16 = var20;
                var22 = var19 >> var12;
                var22 = var22 & var11;
                var21[var23] = var22;
                var20 = parseFloat(var20);
                var16 = var20 + 1;
                var19 = var11 & var19;
                var21[var20] = var19;
            case 878: // try_end0
                _fun84371_ip = 674;
                continue _fun84371;
            case 883: // catch_target0
                CatchBlockStart(arg_register = 1);
                var3.return();
                throw var1;
            case 890:
                var3 = global;
                var1 = var3.btoa;
                var4 = var3.String;
                var5 = var4.fromCharCode;
                var4 = var5.apply;
                var3 = var3.String;
                var0 = var4.bind(var5)(var3, var0);
                var1 = var1.bind(var2)(var0);
                var0 = 'data:image/png;base64,';
                var0 = var0 + var1;
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var6 = arg6;
    var0 = 0;
    var7 = var6[var0];
    var6 = arg2;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot0 = var6;
    var6 = function arg0, arg1, arg2() {
        _fun84372: for (var _fun84372_ip = 0;;) switch (_fun84372_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var29 = arg2;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var5;
                var9 = undefined;
                var10 = undefined;
                var0 = undefined;
                var11 = undefined;
                var12 = undefined;
                var1 = 100;
                if (!(!(var6 > var1))) {
                    _fun84372_ip = 1134;
                    continue _fun84372
                }
            case 39:
                if (!(!(var5 > var1))) {
                    _fun84372_ip = 1134;
                    continue _fun84372
                }
            case 46:
                var1 = global;
                var2 = var1.Math;
                var2 = var2.PI;
                var _closure2_slot2 = var2;
                var2 = var1.Math;
                var10 = var2.round;
                var2 = var1.Math;
                var3 = var2.max;
                var _closure2_slot3 = var3;
                var2 = var1.Math;
                var2 = var2.cos;
                var _closure2_slot4 = var2;
                var2 = var1.Math;
                var2 = var2.abs;
                var _closure2_slot5 = var2;
                var16 = var6 * var5;
                var17 = 0;
                var28 = 3;
                var24 = 255;
                var8 = 1;
                var7 = 2;
                var20 = 4;
                var25 = 0;
                var23 = 0;
                var22 = 0;
                var21 = 0;
                var19 = 0;
                var18 = 0;
                var15 = 0;
                var13 = 0;
                var2 = 0;
                var4 = 0;
                if (!(var17 < var16)) {
                    _fun84372_ip = 258;
                    continue _fun84372
                }
            case 167:
                var16 = var18 + var28;
                var16 = var29[var16];
                var16 = var16 / var24;
                var27 = var16 / var24;
                var26 = var29[var18];
                var26 = var27 * var26;
                var25 = var25 + var26;
                var26 = var18 + var8;
                var26 = var29[var26];
                var26 = var27 * var26;
                var23 = var23 + var26;
                var26 = var18 + var7;
                var26 = var29[var26];
                var26 = var27 * var26;
                var22 = var22 + var26;
                var21 = var21 + var16;
                var19 = var19 + 1;
                var18 = var18 + var20;
                var16 = var6 * var5;
                var15 = var25;
                var13 = var23;
                var2 = var22;
                var4 = var21;
                if (var19 < var16) {
                    _fun84372_ip = 167;
                    continue _fun84372
                }
            case 258:
                var26 = var15;
                var25 = var13;
                var22 = var2;
                if (!var4) {
                    _fun84372_ip = 282;
                    continue _fun84372
                }
            case 270:
                var26 = var15 / var4;
                var25 = var13 / var4;
                var22 = var2 / var4;
            case 282:
                var2 = var6 * var5;
                var2 = var4 < var2;
                var4 = 7;
                if (!var2) {
                    _fun84372_ip = 299;
                    continue _fun84372
                }
            case 296:
                var4 = 5;
            case 299:
                var13 = var10;
                var16 = var4 * var6;
                var15 = var3.bind(var9)(var6, var5);
                var15 = var16 / var15;
                var15 = var13.bind(var9)(var15);
                var27 = var3.bind(var9)(var8, var15);
                var15 = var4 * var5;
                var4 = var3.bind(var9)(var6, var5);
                var4 = var15 / var4;
                var4 = var13.bind(var9)(var4);
                var23 = var3.bind(var9)(var8, var4);
                var15 = new Array(0);
                var13 = new Array(0);
                var4 = new Array(0);
                var19 = new Array(0);
                var16 = var6 * var5;
                var21 = 0;
                var18 = 0;
                if (!(var18 < var16)) {
                    _fun84372_ip = 514;
                    continue _fun84372
                }
            case 383:
                var16 = var18 + var28;
                var16 = var29[var16];
                var16 = var16 / var24;
                var32 = var8 - var16;
                var34 = var16 / var24;
                var30 = var29[var18];
                var31 = var34 * var30;
                var30 = var26 * var32;
                var31 = var30 + var31;
                var30 = var18 + var8;
                var30 = var29[var30];
                var33 = var34 * var30;
                var30 = var25 * var32;
                var30 = var30 + var33;
                var33 = var18 + var7;
                var33 = var29[var33];
                var33 = var34 * var33;
                var32 = var22 * var32;
                var33 = var32 + var33;
                var32 = var31 + var30;
                var34 = var32 + var33;
                var34 = var34 / var28;
                var15[var21] = var34;
                var32 = var32 / var7;
                var32 = var32 - var33;
                var13[var21] = var32;
                var30 = var31 - var30;
                var4[var21] = var30;
                var19[var21] = var16;
                var21 = var21 + 1;
                var18 = var18 + var20;
                var16 = var6 * var5;
                if (var21 < var16) {
                    _fun84372_ip = 383;
                    continue _fun84372
                }
            case 514:
                var18 = function arg0, arg1, arg2() {
                    _fun84373: for (var _fun84373_ip = 0;;) switch (_fun84373_ip) {
                        case 0:
                            var18 = arg0;
                            var17 = arg1;
                            var16 = arg2;
                            var2 = new Array(0);
                            var15 = new Array(0);
                            var5 = 0;
                            var19 = var5 < var16;
                            var14 = undefined;
                            var4 = 0.5;
                            var12 = 0;
                            var11 = 0;
                            var10 = 0;
                            var9 = undefined;
                            var8 = undefined;
                            var7 = undefined;
                            var6 = undefined;
                            var0 = undefined;
                            var3 = 0;
                            var1 = 0;
                            if (!var19) {
                                _fun84373_ip = 461;
                                continue _fun84373
                            }
                        case 64:
                            var22 = var5 * var16;
                            var19 = var16 - var10;
                            var21 = var17 * var19;
                            var27 = var12;
                            var26 = var11;
                            var24 = var6;
                            var23 = var0;
                            var25 = 0;
                            var20 = var27;
                            var19 = var26;
                            var6 = var24;
                            var0 = var23;
                            if (!(var22 < var21)) {
                                _fun84373_ip = 439;
                                continue _fun84373
                            }
                        case 109:
                            var21 = _closure2_slot0;
                            var21 = var5 < var21;
                            var22 = 0;
                            var31 = 0;
                            if (!var21) {
                                _fun84373_ip = 171;
                                continue _fun84373
                            }
                        case 124:
                            var29 = _closure2_slot4;
                            var28 = _closure2_slot2;
                            var21 = _closure2_slot0;
                            var28 = var28 / var21;
                            var30 = var28 * var25;
                            var28 = var22 + var4;
                            var28 = var30 * var28;
                            var28 = var29.bind(var14)(var28);
                            var15[var22] = var28;
                            var22 = var22 + 1;
                            var31 = var22;
                            if (var31 < var21) {
                                _fun84373_ip = 124;
                                continue _fun84373
                            }
                        case 171:
                            var21 = _closure2_slot1;
                            var21 = var5 < var21;
                            var29 = 0;
                            var28 = 0;
                            var22 = 0;
                            var30 = 0;
                            if (!var21) {
                                _fun84373_ip = 318;
                                continue _fun84373
                            }
                        case 193:
                            var32 = _closure2_slot4;
                            var33 = _closure2_slot2;
                            var21 = _closure2_slot1;
                            var21 = var33 / var21;
                            var33 = var21 * var10;
                            var21 = var28 + var4;
                            var21 = var33 * var21;
                            var33 = var32.bind(var14)(var21);
                            var21 = _closure2_slot0;
                            var21 = var5 < var21;
                            var36 = var29;
                            var32 = 0;
                            var35 = var36;
                            var34 = 0;
                            if (!var21) {
                                _fun84373_ip = 292;
                                continue _fun84373
                            }
                        case 247:
                            var21 = _closure2_slot0;
                            var37 = var28 * var21;
                            var37 = var32 + var37;
                            var38 = var18[var37];
                            var37 = var15[var32];
                            var37 = var38 * var37;
                            var37 = var37 * var33;
                            var36 = var36 + var37;
                            var32 = var32 + 1;
                            var35 = var36;
                            var34 = var32;
                            if (var34 < var21) {
                                _fun84373_ip = 247;
                                continue _fun84373
                            }
                        case 292:
                            var28 = var28 + 1;
                            var21 = _closure2_slot1;
                            var29 = var35;
                            var24 = var34;
                            var22 = var29;
                            var23 = var33;
                            var30 = var28;
                            if (var30 < var21) {
                                _fun84373_ip = 193;
                                continue _fun84373
                            }
                        case 318:
                            var28 = _closure2_slot0;
                            var21 = _closure2_slot1;
                            var21 = var28 * var21;
                            var32 = var22 / var21;
                            var29 = var24;
                            var28 = var23;
                            if (var25) {
                                _fun84373_ip = 352;
                                continue _fun84373
                            }
                        case 343:
                            var34 = var32;
                            var33 = var26;
                            if (!var10) {
                                _fun84373_ip = 384;
                                continue _fun84373
                            }
                        case 352:
                            var21 = var2.push;
                            var21 = var21.bind(var2)(var32);
                            var22 = _closure2_slot3;
                            var21 = _closure2_slot5;
                            var21 = var21.bind(var14)(var32);
                            var33 = var22.bind(var14)(var26, var21);
                            var34 = var27;
                        case 384:
                            var25 = var25 + 1;
                            var22 = var25 * var16;
                            var21 = var16 - var10;
                            var21 = var17 * var21;
                            var27 = var34;
                            var26 = var33;
                            var24 = var29;
                            var23 = var28;
                            var20 = var27;
                            var19 = var26;
                            var9 = var32;
                            var8 = var31;
                            var7 = var30;
                            var6 = var24;
                            var0 = var23;
                            if (var22 < var21) {
                                _fun84373_ip = 109;
                                continue _fun84373
                            }
                        case 439:
                            var10 = var10 + 1;
                            var12 = var20;
                            var11 = var19;
                            var3 = var12;
                            var1 = var11;
                            if (var10 < var16) {
                                _fun84373_ip = 64;
                                continue _fun84373
                            }
                        case 461:
                            if (!var1) {
                                _fun84373_ip = 510;
                                continue _fun84373
                            }
                        case 464:
                            var0 = var2.length;
                            var0 = var5 < var0;
                            var5 = 0;
                            if (!var0) {
                                _fun84373_ip = 510;
                                continue _fun84373
                            }
                        case 478:
                            var6 = var4 / var1;
                            var0 = var2[var5];
                            var0 = var6 * var0;
                            var0 = var4 + var0;
                            var2[var5] = var0;
                            var5 = var5 + 1;
                            var0 = var2.length;
                            if (var5 < var0) {
                                _fun84373_ip = 478;
                                continue _fun84373
                            }
                        case 510:
                            var0 = new Array(3);
                            var0[0] = var3;
                            var0[1] = var2;
                            var0[2] = var1;
                            return var0;
                    }
                };
                var14 = var3.bind(var9)(var28, var27);
                var3 = var3.bind(var9)(var28, var23);
                var15 = var18.bind(var9)(var15, var14, var3);
                var14 = _closure1_slot0;
                var14 = var14.bind(var9)(var15, var28);
                var29 = var14[var17];
                var16 = var14[var8];
                var32 = var14[var7];
                var14 = var18.bind(var9)(var13, var28, var28);
                var13 = _closure1_slot0;
                var13 = var13.bind(var9)(var14, var28);
                var21 = var13[var17];
                var15 = var13[var8];
                var22 = var13[var7];
                var13 = var18.bind(var9)(var4, var28, var28);
                var4 = _closure1_slot0;
                var4 = var4.bind(var9)(var13, var28);
                var26 = var4[var17];
                var14 = var4[var8];
                var25 = var4[var7];
                if (var2) {
                    _fun84372_ip = 632;
                    continue _fun84372
                }
            case 626:
                var4 = new Array(0);
                _fun84372_ip = 642;
                continue _fun84372;
            case 632:
                var13 = 5;
                var4 = var18.bind(var9)(var19, var13, var13);
            case 642:
                var3 = _closure1_slot0;
                var4 = var3.bind(var9)(var4, var28);
                var19 = var4[var17];
                var3 = var4[var8];
                var13 = var4[var7];
                var18 = var6 > var5;
                var31 = var10;
                var4 = 63;
                var29 = var4 * var29;
                var33 = var31.bind(var9)(var29);
                var29 = 31.5;
                var21 = var29 * var21;
                var21 = var29 + var21;
                var30 = var31.bind(var9)(var21);
                var21 = 6;
                var30 = var30 << var21;
                var30 = var33 | var30;
                var26 = var29 * var26;
                var26 = var29 + var26;
                var29 = var31.bind(var9)(var26);
                var26 = 12;
                var26 = var29 << var26;
                var29 = 31;
                var29 = var29 * var32;
                var31 = var31.bind(var9)(var29);
                var29 = 18;
                var29 = var31 << var29;
                var26 = var30 | var26;
                var29 = var26 | var29;
                var26 = 23;
                var26 = var2 << var26;
                var26 = var29 | var26;
                if (!var18) {
                    _fun84372_ip = 781;
                    continue _fun84372
                }
            case 778:
                var27 = var23;
            case 781:
                var23 = var10;
                var22 = var4 * var22;
                var22 = var23.bind(var9)(var22);
                var22 = var22 << var28;
                var22 = var27 | var22;
                var4 = var4 * var25;
                var23 = var23.bind(var9)(var4);
                var4 = 9;
                var4 = var23 << var4;
                var22 = var22 | var4;
                var4 = 15;
                var18 = var18 << var4;
                var23 = var22 | var18;
                var18 = new Array(5);
                var22 = var24 & var26;
                var18[0] = var22;
                var22 = 8;
                var25 = var26 >> var22;
                var25 = var25 & var24;
                var18[1] = var25;
                var25 = 16;
                var25 = var26 >> var25;
                var18[2] = var25;
                var24 = var24 & var23;
                var18[3] = var24;
                var22 = var23 >> var22;
                var18[4] = var22;
                var0 = var18;
                var18 = 5;
                if (!var2) {
                    _fun84372_ip = 898;
                    continue _fun84372
                }
            case 895:
                var18 = var21;
            case 898:
                var11 = var18;
                var12 = 0;
                if (!var2) {
                    _fun84372_ip = 948;
                    continue _fun84372
                }
            case 906:
                var18 = var0;
                var17 = var18.push;
                var21 = var10;
                var19 = var4 * var19;
                var19 = var21.bind(var9)(var19);
                var13 = var4 * var13;
                var13 = var21.bind(var9)(var13);
                var13 = var13 << var20;
                var13 = var19 | var13;
                var13 = var17.bind(var18)(var13);
            case 948:
                if (var2) {
                    _fun84372_ip = 969;
                    continue _fun84372
                }
            case 951:
                var13 = new Array(3);
                var13[0] = var16;
                var13[1] = var15;
                var13[2] = var14;
                _fun84372_ip = 992;
                continue _fun84372;
            case 969:
                var2 = new Array(4);
                var2[0] = var16;
                var2[1] = var15;
                var2[2] = var14;
                var2[3] = var3;
                var13 = var2;
            case 992:
                var2 = var13;
                var3 = var2[Symbol.iterator];
                var2 = var3().next;
            case 998:
                var15 = var2().value;
                var13 = var3;
                if (!(var13 !== var9)) {
                    _fun84372_ip = 1103;
                    continue _fun84372
                }
            case 1009: // try_start_1
                var13 = var15;
                var14 = var13[Symbol.iterator];
                var13 = var14().next;
            case 1015:
                var19 = var13().value;
                var15 = var14;
                if (!(var15 !== var9)) {
                    _fun84372_ip = 1094;
                    continue _fun84372
                }
            case 1026: // try_start_0
                var17 = var0;
                var18 = var11;
                var15 = var12;
                var16 = var15 >> var8;
                var16 = var18 + var16;
                var18 = var17[var16];
                var20 = var10;
                var19 = var4 * var19;
                var19 = var20.bind(var9)(var19);
                var15 = parseFloat(var15);
                var12 = var15 + 1;
                var15 = var8 & var15;
                var15 = var15 << var7;
                var15 = var19 << var15;
                var15 = var18 | var15;
                var17[var16] = var15;
            case 1085: // try_end0
                _fun84372_ip = 1015;
                continue _fun84372;
            case 1087: // catch_target0
                CatchBlockStart(arg_register = 13);
                var14.return();
                throw var13;
            case 1094: // try_end1
                _fun84372_ip = 998;
                continue _fun84372;
            case 1096: // catch_target1
                CatchBlockStart(arg_register = 2);
                var3.return();
                throw var2;
            case 1103:
                var2 = var1.Uint8Array;
                var38 = var0;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var39 = var1;
                var0 = new var39[var2](var38, var37);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            case 1134:
                var0 = global;
                var2 = var0.Error;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var39 = '';
                var37 = 'x';
                var35 = " doesn't fit in 100x100";
                var38 = var6;
                var36 = var5;
                var38 = var39[var4](var38, var37, var36, var35, var34);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var39 = var1;
                var0 = new var39[var2](var38, var37);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.rgbaToThumbHash = var6;
    var2.thumbHashToRGBA = var5;
    var5 = function arg0() {
        _fun84374: for (var _fun84374_ip = 0;;) switch (_fun84374_ip) {
            case 0:
                var2 = arg0;
                var0 = global;
                var1 = var0.Math;
                var7 = var1.min;
                var0 = var0.Math;
                var5 = var0.max;
                var4 = 0;
                var1 = var2[var4];
                var6 = 1;
                var3 = var2[var6];
                var0 = 8;
                var0 = var3 << var0;
                var1 = var1 | var0;
                var3 = 2;
                var8 = var2[var3];
                var0 = 16;
                var0 = var8 << var0;
                var12 = var1 | var0;
                var11 = 63;
                var0 = var11 & var12;
                var8 = var0 / var11;
                var0 = 12;
                var0 = var12 >> var0;
                var0 = var0 & var11;
                var10 = 31.5;
                var0 = var0 / var10;
                var9 = var0 - var6;
                var0 = 23;
                var0 = var12 >> var0;
                var1 = var6;
                if (!var0) {
                    _fun84374_ip = 140;
                    continue _fun84374
                }
            case 122:
                var0 = 5;
                var0 = var2[var0];
                var2 = 15;
                var0 = var2 & var0;
                var1 = var0 / var2;
            case 140:
                var2 = 0.6666666666666666;
                var0 = 6;
                var0 = var12 >> var0;
                var0 = var0 & var11;
                var0 = var0 / var10;
                var0 = var0 - var6;
                var0 = var2 * var0;
                var2 = var8 - var0;
                var0 = 3;
                var0 = var0 * var8;
                var0 = var0 - var2;
                var0 = var0 + var9;
                var8 = var0 / var3;
                var0 = {};
                var3 = undefined;
                var10 = var7.bind(var3)(var6, var8);
                var10 = var5.bind(var3)(var4, var10);
                var0.r = var10;
                var8 = var8 - var9;
                var8 = var7.bind(var3)(var6, var8);
                var8 = var5.bind(var3)(var4, var8);
                var0.g = var8;
                var2 = var7.bind(var3)(var6, var2);
                var2 = var5.bind(var3)(var4, var2);
                var0.b = var2;
                var0.a = var1;
                return var0;
        }
    };
    var2.thumbHashToAverageRGBA = var5;
    var2.thumbHashToApproximateAspectRatio = var4;
    var2.rgbaToDataURL = var3;
    var1 = function arg0() {
        var2 = _closure1_slot1;
        var4 = undefined;
        var0 = arg0;
        var0 = var2.bind(var4)(var0);
        var3 = _closure1_slot3;
        var2 = var0.w;
        var1 = var0.h;
        var0 = var0.rgba;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.thumbHashToDataURL = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57]);