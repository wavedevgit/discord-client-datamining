// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = function() { // Environment: var1
        var0 = function(arg0, arg1, arg2, arg3) { // Original name: decodeImage, environment: var4
            _fun18312: for (var _fun18312_ip = 0;;) switch (_fun18312_ip) {
                case 0:
                    var4 = arg0;
                    var25 = arg1;
                    var24 = arg2;
                    var5 = arg3;
                    var3 = var25 * var24;
                    var0 = _closure2_slot5;
                    var18 = undefined;
                    var0 = var0.bind(var18)(var5);
                    var7 = global;
                    var6 = var7.Math;
                    var2 = var6.ceil;
                    var0 = var25 * var0;
                    var1 = 8;
                    var0 = var0 / var1;
                    var23 = var2.bind(var6)(var0);
                    var6 = var7.Uint8Array;
                    var8 = 4;
                    var39 = var8 * var3;
                    var2 = var6.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var6
                        }
                    });
                    var40 = var2;
                    var0 = new var40[var6](var39, var38);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var10 = var7.Uint32Array;
                    var39 = var0.buffer;
                    var6 = var10.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var10
                        }
                    });
                    var40 = var6;
                    var2 = new var40[var10](var39, var38);
                    var11 = var2 instanceof Object ? var2 : var6;
                    var6 = var5.ctype;
                    var2 = var5.depth;
                    var9 = _closure2_slot0;
                    var17 = var9.readUshort;
                    var9 = var7.Date;
                    var7 = var9.now;
                    var7 = var7.bind(var9)();
                    var10 = 6;
                    if (!(var10 != var6)) {
                        _fun18312_ip = 2173;
                        continue _fun18312
                    }
                case 172:
                    var9 = 2;
                    if (!(var9 != var6)) {
                        _fun18312_ip = 1712;
                        continue _fun18312
                    }
                case 182:
                    var16 = 3;
                    if (!(var16 != var6)) {
                        _fun18312_ip = 1017;
                        continue _fun18312
                    }
                case 192:
                    if (!(var8 != var6)) {
                        _fun18312_ip = 867;
                        continue _fun18312
                    }
                case 199:
                    var28 = 0;
                    if (!(var28 == var6)) {
                        _fun18312_ip = 2283;
                        continue _fun18312
                    }
                case 208:
                    var6 = var5.tabs;
                    var6 = var6.tRNS;
                    var27 = -1;
                    if (!var6) {
                        _fun18312_ip = 241;
                        continue _fun18312
                    }
                case 229:
                    var6 = var5.tabs;
                    var27 = var6.tRNS;
                case 241:
                    var29 = var28 < var24;
                    var26 = 24;
                    var22 = 16;
                    var21 = 7;
                    var20 = 255;
                    var19 = 1;
                    var15 = 85;
                    var14 = 17;
                    var13 = 15;
                    var12 = 0;
                    var7 = undefined;
                    var6 = undefined;
                    if (!var29) {
                        _fun18312_ip = 2283;
                        continue _fun18312
                    }
                case 281:
                    var32 = var12 * var23;
                    var31 = var12 * var25;
                    if (!(var19 != var2)) {
                        _fun18312_ip = 745;
                        continue _fun18312
                    }
                case 296:
                    if (!(var9 != var2)) {
                        _fun18312_ip = 632;
                        continue _fun18312
                    }
                case 303:
                    if (!(var8 != var2)) {
                        _fun18312_ip = 516;
                        continue _fun18312
                    }
                case 310:
                    if (!(var1 != var2)) {
                        _fun18312_ip = 429;
                        continue _fun18312
                    }
                case 314:
                    var29 = var7;
                    if (!(var22 == var2)) {
                        _fun18312_ip = 849;
                        continue _fun18312
                    }
                case 324:
                    var33 = var28 < var25;
                    var30 = 0;
                    var29 = var7;
                    var6 = 0;
                    if (!var33) {
                        _fun18312_ip = 849;
                        continue _fun18312
                    }
                case 341:
                    var33 = var30 << var19;
                    var33 = var32 + var33;
                    var34 = var4[var33];
                    var33 = var30 << var19;
                    var33 = var32 + var33;
                    var33 = var17.bind(var18)(var4, var33);
                    var35 = var33 == var27;
                    var33 = var20;
                    if (!var35) {
                        _fun18312_ip = 379;
                        continue _fun18312
                    }
                case 377:
                    var33 = 0;
                case 379:
                    var35 = var31 + var30;
                    var37 = var34 << var22;
                    var36 = var34 << var1;
                    var33 = var33 << var26;
                    var33 = var33 | var37;
                    var33 = var33 | var36;
                    var33 = var33 | var34;
                    var11[var35] = var33;
                    var30 = var30 + 1;
                    var29 = var34;
                    var6 = var30;
                    if (var6 < var25) {
                        _fun18312_ip = 341;
                        continue _fun18312
                    }
                case 424:
                    _fun18312_ip = 849;
                    continue _fun18312;
                case 429:
                    var33 = var28 < var25;
                    var30 = 0;
                    var29 = var7;
                    var6 = 0;
                    if (!var33) {
                        _fun18312_ip = 849;
                        continue _fun18312
                    }
                case 446:
                    var33 = var32 + var30;
                    var34 = var4[var33];
                    var35 = var34 == var27;
                    var33 = var20;
                    if (!var35) {
                        _fun18312_ip = 466;
                        continue _fun18312
                    }
                case 464:
                    var33 = 0;
                case 466:
                    var35 = var31 + var30;
                    var37 = var34 << var22;
                    var36 = var34 << var1;
                    var33 = var33 << var26;
                    var33 = var33 | var37;
                    var33 = var33 | var36;
                    var33 = var33 | var34;
                    var11[var35] = var33;
                    var30 = var30 + 1;
                    var29 = var34;
                    var6 = var30;
                    if (var6 < var25) {
                        _fun18312_ip = 446;
                        continue _fun18312
                    }
                case 511:
                    _fun18312_ip = 849;
                    continue _fun18312;
                case 516:
                    var33 = var28 < var25;
                    var30 = 0;
                    var29 = var7;
                    var6 = 0;
                    if (!var33) {
                        _fun18312_ip = 849;
                        continue _fun18312
                    }
                case 533:
                    var33 = var30 >>> var19;
                    var33 = var32 + var33;
                    var34 = var4[var33];
                    var33 = var19 & var30;
                    var33 = var33 << var9;
                    var33 = var8 - var33;
                    var33 = var34 >>> var33;
                    var33 = var33 & var13;
                    var34 = var14 * var33;
                    var35 = var14 * var27;
                    var33 = var20;
                    if (!(var34 === var35)) {
                        _fun18312_ip = 582;
                        continue _fun18312
                    }
                case 580:
                    var33 = 0;
                case 582:
                    var35 = var31 + var30;
                    var36 = var33 << var26;
                    var33 = var34 << var22;
                    var36 = var36 | var33;
                    var33 = var34 << var1;
                    var33 = var36 | var33;
                    var33 = var33 | var34;
                    var11[var35] = var33;
                    var30 = var30 + 1;
                    var29 = var34;
                    var6 = var30;
                    if (var6 < var25) {
                        _fun18312_ip = 533;
                        continue _fun18312
                    }
                case 627:
                    _fun18312_ip = 849;
                    continue _fun18312;
                case 632:
                    var33 = var28 < var25;
                    var30 = 0;
                    var29 = var7;
                    var6 = 0;
                    if (!var33) {
                        _fun18312_ip = 849;
                        continue _fun18312
                    }
                case 649:
                    var33 = var30 >>> var9;
                    var33 = var32 + var33;
                    var34 = var4[var33];
                    var33 = var16 & var30;
                    var33 = var33 << var19;
                    var33 = var10 - var33;
                    var33 = var34 >>> var33;
                    var33 = var33 & var16;
                    var34 = var15 * var33;
                    var35 = var15 * var27;
                    var33 = var20;
                    if (!(var34 === var35)) {
                        _fun18312_ip = 698;
                        continue _fun18312
                    }
                case 696:
                    var33 = 0;
                case 698:
                    var35 = var31 + var30;
                    var36 = var33 << var26;
                    var33 = var34 << var22;
                    var36 = var36 | var33;
                    var33 = var34 << var1;
                    var33 = var36 | var33;
                    var33 = var33 | var34;
                    var11[var35] = var33;
                    var30 = var30 + 1;
                    var29 = var34;
                    var6 = var30;
                    if (var6 < var25) {
                        _fun18312_ip = 649;
                        continue _fun18312
                    }
                case 743:
                    _fun18312_ip = 849;
                    continue _fun18312;
                case 745:
                    var33 = var28 < var25;
                    var30 = 0;
                    var29 = var7;
                    var6 = 0;
                    if (!var33) {
                        _fun18312_ip = 849;
                        continue _fun18312
                    }
                case 759:
                    var33 = var30 >>> var16;
                    var33 = var32 + var33;
                    var34 = var4[var33];
                    var33 = var21 & var30;
                    var33 = var21 - var33;
                    var33 = var34 >>> var33;
                    var33 = var33 & var19;
                    var34 = var20 * var33;
                    var35 = var20 * var27;
                    var33 = var20;
                    if (!(var34 === var35)) {
                        _fun18312_ip = 804;
                        continue _fun18312
                    }
                case 802:
                    var33 = 0;
                case 804:
                    var35 = var31 + var30;
                    var36 = var33 << var26;
                    var33 = var34 << var22;
                    var36 = var36 | var33;
                    var33 = var34 << var1;
                    var33 = var36 | var33;
                    var33 = var33 | var34;
                    var11[var35] = var33;
                    var30 = var30 + 1;
                    var29 = var34;
                    var6 = var30;
                    if (var6 < var25) {
                        _fun18312_ip = 759;
                        continue _fun18312
                    }
                case 849:
                    var12 = var12 + 1;
                    var7 = var29;
                    if (var12 < var24) {
                        _fun18312_ip = 281;
                        continue _fun18312
                    }
                case 862:
                    _fun18312_ip = 2283;
                    continue _fun18312;
                case 867:
                    if (!(var1 == var2)) {
                        _fun18312_ip = 935;
                        continue _fun18312
                    }
                case 871:
                    var6 = 1;
                    var7 = 0;
                    if (!(var7 < var3)) {
                        _fun18312_ip = 935;
                        continue _fun18312
                    }
                case 880:
                    var12 = var7 << var9;
                    var13 = var7 << var6;
                    var15 = var4[var13];
                    var0[var12] = var15;
                    var14 = var12 + var6;
                    var0[var14] = var15;
                    var14 = var12 + var9;
                    var0[var14] = var15;
                    var13 = var13 + var6;
                    var13 = var4[var13];
                    var12 = var12 + var16;
                    var0[var12] = var13;
                    var7 = var7 + 1;
                    if (var7 < var3) {
                        _fun18312_ip = 880;
                        continue _fun18312
                    }
                case 935:
                    var6 = 16;
                    if (!(var6 == var2)) {
                        _fun18312_ip = 2283;
                        continue _fun18312
                    }
                case 945:
                    var6 = 1;
                    var7 = 0;
                    if (!(var7 < var3)) {
                        _fun18312_ip = 2283;
                        continue _fun18312
                    }
                case 957:
                    var12 = var7 << var9;
                    var13 = var7 << var9;
                    var15 = var4[var13];
                    var0[var12] = var15;
                    var14 = var12 + var6;
                    var0[var14] = var15;
                    var14 = var12 + var9;
                    var0[var14] = var15;
                    var13 = var13 + var9;
                    var13 = var4[var13];
                    var12 = var12 + var16;
                    var0[var12] = var13;
                    var7 = var7 + 1;
                    if (var7 < var3) {
                        _fun18312_ip = 957;
                        continue _fun18312
                    }
                case 1012:
                    _fun18312_ip = 2283;
                    continue _fun18312;
                case 1017:
                    var6 = var5.tabs;
                    var15 = var6.PLTE;
                    var6 = var5.tabs;
                    var14 = var6.tRNS;
                    var13 = 0;
                    var12 = 0;
                    if (!var14) {
                        _fun18312_ip = 1053;
                        continue _fun18312
                    }
                case 1048:
                    var12 = var14.length;
                case 1053:
                    var7 = 1;
                    var6 = var7 == var2;
                    var29 = undefined;
                    var28 = undefined;
                    if (!var6) {
                        _fun18312_ip = 1244;
                        continue _fun18312
                    }
                case 1070:
                    var26 = var13 < var24;
                    var22 = 7;
                    var21 = 255;
                    var20 = undefined;
                    var19 = 0;
                    var6 = undefined;
                    var29 = undefined;
                    var28 = undefined;
                    if (!var26) {
                        _fun18312_ip = 1244;
                        continue _fun18312
                    }
                case 1096:
                    var30 = var19 * var23;
                    var27 = var19 * var25;
                    var31 = var13 < var25;
                    var26 = 0;
                    if (!var31) {
                        _fun18312_ip = 1228;
                        continue _fun18312
                    }
                case 1113:
                    var31 = var27 + var26;
                    var32 = var31 << var9;
                    var31 = var26 >> var16;
                    var31 = var30 + var31;
                    var33 = var4[var31];
                    var31 = var22 & var26;
                    var31 = var22 - var31;
                    var31 = var33 >> var31;
                    var31 = var31 & var7;
                    var33 = var16 * var31;
                    var34 = var15[var33];
                    var0[var32] = var34;
                    var34 = var33 + var7;
                    var35 = var15[var34];
                    var34 = var32 + var7;
                    var0[var34] = var35;
                    var33 = var33 + var9;
                    var34 = var15[var33];
                    var33 = var32 + var9;
                    var0[var33] = var34;
                    var33 = var31 < var12;
                    var34 = var21;
                    if (!var33) {
                        _fun18312_ip = 1207;
                        continue _fun18312
                    }
                case 1203:
                    var34 = var14[var31];
                case 1207:
                    var33 = var32 + var16;
                    var0[var33] = var34;
                    var26 = var26 + 1;
                    var20 = var32;
                    var6 = var31;
                    if (var26 < var25) {
                        _fun18312_ip = 1113;
                        continue _fun18312
                    }
                case 1228:
                    var19 = var19 + 1;
                    var29 = var20;
                    var28 = var6;
                    if (var19 < var24) {
                        _fun18312_ip = 1096;
                        continue _fun18312
                    }
                case 1244:
                    var22 = var29;
                    var21 = var28;
                    if (!(var9 == var2)) {
                        _fun18312_ip = 1436;
                        continue _fun18312
                    }
                case 1257:
                    var27 = var13 < var24;
                    var26 = 255;
                    var20 = var29;
                    var19 = 0;
                    var6 = var28;
                    var22 = var20;
                    var21 = var6;
                    if (!var27) {
                        _fun18312_ip = 1436;
                        continue _fun18312
                    }
                case 1284:
                    var29 = var19 * var23;
                    var28 = var19 * var25;
                    var30 = var13 < var25;
                    var27 = 0;
                    if (!var30) {
                        _fun18312_ip = 1420;
                        continue _fun18312
                    }
                case 1301:
                    var30 = var28 + var27;
                    var31 = var30 << var9;
                    var30 = var27 >> var9;
                    var30 = var29 + var30;
                    var32 = var4[var30];
                    var30 = var16 & var27;
                    var30 = var30 << var7;
                    var30 = var10 - var30;
                    var30 = var32 >> var30;
                    var30 = var30 & var16;
                    var32 = var16 * var30;
                    var33 = var15[var32];
                    var0[var31] = var33;
                    var33 = var32 + var7;
                    var34 = var15[var33];
                    var33 = var31 + var7;
                    var0[var33] = var34;
                    var32 = var32 + var9;
                    var33 = var15[var32];
                    var32 = var31 + var9;
                    var0[var32] = var33;
                    var32 = var30 < var12;
                    var33 = var26;
                    if (!var32) {
                        _fun18312_ip = 1399;
                        continue _fun18312
                    }
                case 1395:
                    var33 = var14[var30];
                case 1399:
                    var32 = var31 + var16;
                    var0[var32] = var33;
                    var27 = var27 + 1;
                    var20 = var31;
                    var6 = var30;
                    if (var27 < var25) {
                        _fun18312_ip = 1301;
                        continue _fun18312
                    }
                case 1420:
                    var19 = var19 + 1;
                    var22 = var20;
                    var21 = var6;
                    if (var19 < var24) {
                        _fun18312_ip = 1284;
                        continue _fun18312
                    }
                case 1436:
                    if (!(var8 == var2)) {
                        _fun18312_ip = 1607;
                        continue _fun18312
                    }
                case 1443:
                    var26 = var13 < var24;
                    var20 = 15;
                    var19 = 255;
                    var6 = 0;
                    if (!var26) {
                        _fun18312_ip = 1607;
                        continue _fun18312
                    }
                case 1461:
                    var28 = var6 * var23;
                    var27 = var6 * var25;
                    var29 = var13 < var25;
                    var26 = 0;
                    if (!var29) {
                        _fun18312_ip = 1597;
                        continue _fun18312
                    }
                case 1478:
                    var29 = var27 + var26;
                    var30 = var29 << var9;
                    var29 = var26 >> var7;
                    var29 = var28 + var29;
                    var31 = var4[var29];
                    var29 = var7 & var26;
                    var29 = var29 << var9;
                    var29 = var8 - var29;
                    var29 = var31 >> var29;
                    var29 = var29 & var20;
                    var31 = var16 * var29;
                    var32 = var15[var31];
                    var0[var30] = var32;
                    var32 = var31 + var7;
                    var33 = var15[var32];
                    var32 = var30 + var7;
                    var0[var32] = var33;
                    var31 = var31 + var9;
                    var32 = var15[var31];
                    var31 = var30 + var9;
                    var0[var31] = var32;
                    var31 = var29 < var12;
                    var32 = var19;
                    if (!var31) {
                        _fun18312_ip = 1576;
                        continue _fun18312
                    }
                case 1572:
                    var32 = var14[var29];
                case 1576:
                    var31 = var30 + var16;
                    var0[var31] = var32;
                    var26 = var26 + 1;
                    var22 = var30;
                    var21 = var29;
                    if (var26 < var25) {
                        _fun18312_ip = 1478;
                        continue _fun18312
                    }
                case 1597:
                    var6 = var6 + 1;
                    if (var6 < var24) {
                        _fun18312_ip = 1461;
                        continue _fun18312
                    }
                case 1607:
                    if (!(var1 == var2)) {
                        _fun18312_ip = 2283;
                        continue _fun18312
                    }
                case 1614:
                    var6 = 255;
                    var13 = 0;
                    if (!(var13 < var3)) {
                        _fun18312_ip = 2283;
                        continue _fun18312
                    }
                case 1626:
                    var19 = var13 << var9;
                    var21 = var4[var13];
                    var20 = var16 * var21;
                    var22 = var15[var20];
                    var0[var19] = var22;
                    var22 = var20 + var7;
                    var23 = var15[var22];
                    var22 = var19 + var7;
                    var0[var22] = var23;
                    var20 = var20 + var9;
                    var22 = var15[var20];
                    var20 = var19 + var9;
                    var0[var20] = var22;
                    var22 = var21 < var12;
                    var20 = var6;
                    if (!var22) {
                        _fun18312_ip = 1692;
                        continue _fun18312
                    }
                case 1688:
                    var20 = var14[var21];
                case 1692:
                    var19 = var19 + var16;
                    var0[var19] = var20;
                    var13 = var13 + 1;
                    if (var13 < var3) {
                        _fun18312_ip = 1626;
                        continue _fun18312
                    }
                case 1707:
                    _fun18312_ip = 2283;
                    continue _fun18312;
                case 1712:
                    var5 = var5.tabs;
                    var5 = var5.tRNS;
                    var6 = null;
                    if (!(var6 != var5)) {
                        _fun18312_ip = 2011;
                        continue _fun18312
                    }
                case 1733:
                    var16 = 0;
                    var15 = var5[var16];
                    var19 = 1;
                    var14 = var5[var19];
                    var13 = var5[var9];
                    if (!(var1 == var2)) {
                        _fun18312_ip = 1872;
                        continue _fun18312
                    }
                case 1754:
                    var12 = 3;
                    var7 = 16;
                    var6 = -16777216;
                    var5 = 0;
                    if (!(var16 < var3)) {
                        _fun18312_ip = 1872;
                        continue _fun18312
                    }
                case 1772:
                    var20 = var5 << var9;
                    var21 = var12 * var5;
                    var22 = var21 + var9;
                    var23 = var4[var22];
                    var24 = var23 << var7;
                    var23 = var21 + var19;
                    var25 = var4[var23];
                    var26 = var25 << var1;
                    var25 = var4[var21];
                    var24 = var6 | var24;
                    var24 = var24 | var26;
                    var24 = var24 | var25;
                    var11[var5] = var24;
                    var21 = var4[var21];
                    var21 = var21 == var15;
                    if (!var21) {
                        _fun18312_ip = 1843;
                        continue _fun18312
                    }
                case 1835:
                    var23 = var4[var23];
                    var21 = var23 == var14;
                case 1843:
                    if (!var21) {
                        _fun18312_ip = 1854;
                        continue _fun18312
                    }
                case 1846:
                    var22 = var4[var22];
                    var21 = var22 == var13;
                case 1854:
                    if (!var21) {
                        _fun18312_ip = 1865;
                        continue _fun18312
                    }
                case 1857:
                    var20 = var20 + var12;
                    var0[var20] = var16;
                case 1865:
                    var5 = var5 + 1;
                    if (var5 < var3) {
                        _fun18312_ip = 1772;
                        continue _fun18312
                    }
                case 1872:
                    var12 = 16;
                    if (!(var12 == var2)) {
                        _fun18312_ip = 2283;
                        continue _fun18312
                    }
                case 1882:
                    var7 = 3;
                    var6 = -16777216;
                    var5 = 0;
                    if (!(var5 < var3)) {
                        _fun18312_ip = 2283;
                        continue _fun18312
                    }
                case 1900:
                    var19 = var5 << var9;
                    var20 = var10 * var5;
                    var21 = var20 + var8;
                    var22 = var4[var21];
                    var23 = var22 << var12;
                    var22 = var20 + var9;
                    var24 = var4[var22];
                    var25 = var24 << var1;
                    var24 = var4[var20];
                    var23 = var6 | var23;
                    var23 = var23 | var25;
                    var23 = var23 | var24;
                    var11[var5] = var23;
                    var20 = var17.bind(var18)(var4, var20);
                    var20 = var20 == var15;
                    if (!var20) {
                        _fun18312_ip = 1975;
                        continue _fun18312
                    }
                case 1965:
                    var22 = var17.bind(var18)(var4, var22);
                    var20 = var22 == var14;
                case 1975:
                    if (!var20) {
                        _fun18312_ip = 1988;
                        continue _fun18312
                    }
                case 1978:
                    var21 = var17.bind(var18)(var4, var21);
                    var20 = var21 == var13;
                case 1988:
                    if (!var20) {
                        _fun18312_ip = 1999;
                        continue _fun18312
                    }
                case 1991:
                    var19 = var19 + var7;
                    var0[var19] = var16;
                case 1999:
                    var5 = var5 + 1;
                    if (var5 < var3) {
                        _fun18312_ip = 1900;
                        continue _fun18312
                    }
                case 2006:
                    _fun18312_ip = 2283;
                    continue _fun18312;
                case 2011:
                    if (!(var1 == var2)) {
                        _fun18312_ip = 2091;
                        continue _fun18312
                    }
                case 2015:
                    var12 = 3;
                    var7 = 16;
                    var6 = 1;
                    var5 = -16777216;
                    var13 = 0;
                    if (!(var13 < var3)) {
                        _fun18312_ip = 2091;
                        continue _fun18312
                    }
                case 2036:
                    var15 = var12 * var13;
                    var14 = var15 + var9;
                    var14 = var4[var14];
                    var14 = var14 << var7;
                    var16 = var15 + var6;
                    var16 = var4[var16];
                    var16 = var16 << var1;
                    var15 = var4[var15];
                    var14 = var5 | var14;
                    var14 = var14 | var16;
                    var14 = var14 | var15;
                    var11[var13] = var14;
                    var13 = var13 + 1;
                    if (var13 < var3) {
                        _fun18312_ip = 2036;
                        continue _fun18312
                    }
                case 2091:
                    var7 = 16;
                    if (!(var7 == var2)) {
                        _fun18312_ip = 2283;
                        continue _fun18312
                    }
                case 2101:
                    var5 = -16777216;
                    var6 = 0;
                    if (!(var6 < var3)) {
                        _fun18312_ip = 2283;
                        continue _fun18312
                    }
                case 2116:
                    var13 = var10 * var6;
                    var12 = var13 + var8;
                    var12 = var4[var12];
                    var12 = var12 << var7;
                    var14 = var13 + var9;
                    var14 = var4[var14];
                    var14 = var14 << var1;
                    var13 = var4[var13];
                    var12 = var5 | var12;
                    var12 = var12 | var14;
                    var12 = var12 | var13;
                    var11[var6] = var12;
                    var6 = var6 + 1;
                    if (var6 < var3) {
                        _fun18312_ip = 2116;
                        continue _fun18312
                    }
                case 2171:
                    _fun18312_ip = 2283;
                    continue _fun18312;
                case 2173:
                    var7 = 2;
                    var3 = var3 << var7;
                    if (!(var1 == var2)) {
                        _fun18312_ip = 2248;
                        continue _fun18312
                    }
                case 2184:
                    var5 = 1;
                    var1 = 3;
                    var6 = 0;
                    if (!(var6 < var3)) {
                        _fun18312_ip = 2248;
                        continue _fun18312
                    }
                case 2196:
                    var9 = var4[var6];
                    var0[var6] = var9;
                    var10 = var6 + var5;
                    var9 = var4[var10];
                    var0[var10] = var9;
                    var10 = var6 + var7;
                    var9 = var4[var10];
                    var0[var10] = var9;
                    var10 = var6 + var1;
                    var9 = var4[var10];
                    var0[var10] = var9;
                    var6 = var6 + var8;
                    if (var6 < var3) {
                        _fun18312_ip = 2196;
                        continue _fun18312
                    }
                case 2248:
                    var1 = 16;
                    if (!(var1 == var2)) {
                        _fun18312_ip = 2283;
                        continue _fun18312
                    }
                case 2255:
                    var1 = 1;
                    var2 = 0;
                    if (!(var2 < var3)) {
                        _fun18312_ip = 2283;
                        continue _fun18312
                    }
                case 2264:
                    var5 = var2 << var1;
                    var5 = var4[var5];
                    var0[var2] = var5;
                    var2 = var2 + 1;
                    if (var2 < var3) {
                        _fun18312_ip = 2264;
                        continue _fun18312
                    }
                case 2283:
                    return var0;
            }
        };
        var _closure2_slot2 = var0;
        var0 = function(arg0, arg1, arg2, arg3) { // Original name: _decompress, environment: var4
            _fun18313: for (var _fun18313_ip = 0;;) switch (_fun18313_ip) {
                case 0:
                    var7 = arg0;
                    var8 = arg1;
                    var6 = arg2;
                    var5 = arg3;
                    var32 = global;
                    var1 = var32.Date;
                    var0 = var1.now;
                    var0 = var0.bind(var1)();
                    var0 = _closure2_slot5;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var7);
                    var3 = var32.Math;
                    var1 = var3.ceil;
                    var0 = var6 * var0;
                    var31 = 8;
                    var0 = var0 / var31;
                    var0 = var1.bind(var3)(var0);
                    var3 = var32.Uint8Array;
                    var30 = 1;
                    var1 = var0 + var30;
                    var0 = var7.interlace;
                    var0 = var1 + var0;
                    var58 = var0 * var5;
                    var1 = var3.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var59 = var1;
                    var0 = new var59[var3](var58, var57);
                    var3 = var0 instanceof Object ? var0 : var1;
                    var0 = var7.tabs;
                    var0 = var0.CgBI;
                    if (var0) {
                        _fun18313_ip = 147;
                        continue _fun18313
                    }
                case 135:
                    var0 = _closure2_slot4;
                    var1 = var0.bind(var4)(var8, var3);
                    _fun18313_ip = 157;
                    continue _fun18313;
                case 147:
                    var0 = _closure2_slot1;
                    var1 = var0.bind(var4)(var8, var3);
                case 157:
                    var3 = var32.Date;
                    var0 = var3.now;
                    var0 = var0.bind(var3)();
                    var0 = var7.interlace;
                    var3 = 0;
                    if (!(var3 != var0)) {
                        _fun18313_ip = 897;
                        continue _fun18313
                    }
                case 187:
                    var8 = var7.interlace;
                    var0 = var1;
                    if (!(var30 == var8)) {
                        _fun18313_ip = 924;
                        continue _fun18313
                    }
                case 203:
                    var29 = var7.width;
                    var28 = var7.height;
                    var8 = _closure2_slot5;
                    var27 = var8.bind(var4)(var7);
                    var26 = 3;
                    var25 = var27 >> var26;
                    var10 = var32.Math;
                    var9 = var10.ceil;
                    var8 = var29 * var27;
                    var8 = var8 / var31;
                    var24 = var9.bind(var10)(var8);
                    var10 = var32.Uint8Array;
                    var58 = var28 * var24;
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var10
                        }
                    });
                    var59 = var9;
                    var8 = new var59[var10](var58, var57);
                    var23 = var8 instanceof Object ? var8 : var9;
                    var22 = [0, 0, 4, 0, 2, 0, 1];
                    var21 = [0, 4, 0, 2, 0, 1, 0];
                    var20 = [8, 8, 8, 4, 4, 2, 2];
                    var19 = [8, 8, 4, 4, 2, 2, 1];
                    var18 = 7;
                    var17 = 4;
                    var16 = 15;
                    var15 = 2;
                    var14 = 6;
                    var13 = 0;
                    var12 = 0;
                    var11 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                case 351:
                    var41 = var20[var12];
                    var40 = var19[var12];
                    var34 = var22[var12];
                    var36 = var34 < var28;
                    var33 = 0;
                    var35 = 0;
                    if (!var36) {
                        _fun18313_ip = 388;
                        continue _fun18313
                    }
                case 374:
                    var34 = var34 + var41;
                    var33 = var33 + 1;
                    var35 = var33;
                    if (var34 < var28) {
                        _fun18313_ip = 374;
                        continue _fun18313
                    }
                case 388:
                    var36 = var21[var12];
                    var37 = var36 < var29;
                    var34 = 0;
                    var33 = 0;
                    if (!var37) {
                        _fun18313_ip = 417;
                        continue _fun18313
                    }
                case 403:
                    var36 = var36 + var40;
                    var34 = var34 + 1;
                    var33 = var34;
                    if (var36 < var29) {
                        _fun18313_ip = 403;
                        continue _fun18313
                    }
                case 417:
                    var37 = var32.Math;
                    var36 = var37.ceil;
                    var34 = var33 * var27;
                    var34 = var34 / var31;
                    var34 = var36.bind(var37)(var34);
                    var36 = _closure2_slot6;
                    var59 = undefined;
                    var58 = var1;
                    var57 = var7;
                    var56 = var13;
                    var55 = var33;
                    var54 = var35;
                    var36 = var59[var36](var58, var57, var56, var55, var54, var53);
                    var39 = var22[var12];
                    var42 = var39 < var28;
                    var38 = 0;
                    var37 = var9;
                    var36 = var8;
                    var9 = var37;
                    var8 = var36;
                    if (!var42) {
                        _fun18313_ip = 855;
                        continue _fun18313
                    }
                case 495:
                    var49 = var21[var12];
                    var42 = var38 * var34;
                    var42 = var13 + var42;
                    var48 = var42 << var26;
                    var47 = var37;
                    var46 = var36;
                    var44 = var48;
                    var43 = var47;
                    var42 = var46;
                    var45 = var49;
                    if (!(var45 < var29)) {
                        _fun18313_ip = 823;
                        continue _fun18313
                    }
                case 536:
                    if (!(var30 == var27)) {
                        _fun18313_ip = 600;
                        continue _fun18313
                    }
                case 540:
                    var50 = var48 >> var26;
                    var51 = var1[var50];
                    var50 = var18 & var48;
                    var50 = var18 - var50;
                    var53 = var51 >> var50;
                    var51 = var39 * var24;
                    var50 = var49 >> var26;
                    var51 = var51 + var50;
                    var52 = var23[var51];
                    var50 = var18 & var49;
                    var53 = var53 & var30;
                    var50 = var18 - var50;
                    var50 = var53 << var50;
                    var50 = var52 | var50;
                    var23[var51] = var50;
                case 600:
                    if (!(var15 == var27)) {
                        _fun18313_ip = 668;
                        continue _fun18313
                    }
                case 604:
                    var50 = var48 >> var26;
                    var51 = var1[var50];
                    var50 = var18 & var48;
                    var50 = var14 - var50;
                    var53 = var51 >> var50;
                    var51 = var39 * var24;
                    var50 = var49 >> var15;
                    var51 = var51 + var50;
                    var52 = var23[var51];
                    var50 = var26 & var49;
                    var53 = var53 & var26;
                    var50 = var50 << var30;
                    var50 = var14 - var50;
                    var50 = var53 << var50;
                    var50 = var52 | var50;
                    var23[var51] = var50;
                case 668:
                    if (!(var17 == var27)) {
                        _fun18313_ip = 736;
                        continue _fun18313
                    }
                case 672:
                    var50 = var48 >> var26;
                    var51 = var1[var50];
                    var50 = var18 & var48;
                    var50 = var17 - var50;
                    var53 = var51 >> var50;
                    var51 = var39 * var24;
                    var50 = var49 >> var30;
                    var51 = var51 + var50;
                    var52 = var23[var51];
                    var50 = var30 & var49;
                    var53 = var53 & var16;
                    var50 = var50 << var15;
                    var50 = var17 - var50;
                    var50 = var53 << var50;
                    var50 = var52 | var50;
                    var23[var51] = var50;
                case 736:
                    if (!(var27 >= var31)) {
                        _fun18313_ip = 796;
                        continue _fun18313
                    }
                case 740:
                    var51 = var39 * var24;
                    var50 = var49 * var25;
                    var51 = var51 + var50;
                    var50 = 0;
                    var47 = var51;
                    var46 = 0;
                    if (!(var46 < var25)) {
                        _fun18313_ip = 796;
                        continue _fun18313
                    }
                case 763:
                    var53 = var51 + var50;
                    var52 = var48 >> var26;
                    var52 = var52 + var50;
                    var52 = var1[var52];
                    var23[var53] = var52;
                    var50 = var50 + 1;
                    var47 = var51;
                    var46 = var50;
                    if (var46 < var25) {
                        _fun18313_ip = 763;
                        continue _fun18313
                    }
                case 796:
                    var48 = var48 + var27;
                    var49 = var49 + var40;
                    var44 = var48;
                    var43 = var47;
                    var42 = var46;
                    var45 = var49;
                    if (var45 < var29) {
                        _fun18313_ip = 536;
                        continue _fun18313
                    }
                case 823:
                    var38 = var38 + 1;
                    var39 = var39 + var41;
                    var11 = var45;
                    var10 = var44;
                    var37 = var43;
                    var36 = var42;
                    var9 = var37;
                    var8 = var36;
                    if (var39 < var28) {
                        _fun18313_ip = 495;
                        continue _fun18313
                    }
                case 855:
                    var36 = var33 * var35;
                    var33 = var13;
                    if (!(var36 != var3)) {
                        _fun18313_ip = 878;
                        continue _fun18313
                    }
                case 866:
                    var34 = var30 + var34;
                    var34 = var35 * var34;
                    var33 = var13 + var34;
                case 878:
                    var12 = var12 + var30;
                    var13 = var33;
                    var0 = var23;
                    if (var12 < var18) {
                        _fun18313_ip = 351;
                        continue _fun18313
                    }
                case 895:
                    _fun18313_ip = 924;
                    continue _fun18313;
                case 897:
                    var2 = _closure2_slot6;
                    var59 = undefined;
                    var58 = var1;
                    var57 = var7;
                    var56 = 0;
                    var55 = var6;
                    var54 = var5;
                    var2 = var59[var2](var58, var57, var56, var55, var54, var53);
                    var0 = var1;
                case 924:
                    return var0;
            }
        };
        var _closure2_slot3 = var0;
        var0 = function(arg0, arg1) { // Original name: _inflate, environment: var4
            var0 = arg0;
            var3 = _closure2_slot1;
            var1 = global;
            var5 = var1.Uint8Array;
            var8 = var0.buffer;
            var1 = var0.length;
            var0 = 6;
            var6 = var1 - var0;
            var0 = var5.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var5
                }
            });
            var7 = 2;
            var9 = var1;
            var0 = new var9[var5](var8, var7, var6, var5);
            var2 = var0 instanceof Object ? var0 : var1;
            var1 = undefined;
            var0 = arg1;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var _closure2_slot4 = var0;
        var0 = function(arg0) { // Original name: _getBPP, environment: var4
            var0 = arg0;
            var2 = var0.ctype;
            var1 = [1, null, 3, 1, 2, null, 4];
            var1 = var1[var2];
            var0 = var0.depth;
            var0 = var1 * var0;
            return var0;
        };
        var _closure2_slot5 = var0;
        var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: _filterZero, environment: var4
            _fun18316: for (var _fun18316_ip = 0;;) switch (_fun18316_ip) {
                case 0:
                    var0 = arg0;
                    var11 = arg2;
                    var10 = arg4;
                    var2 = _closure2_slot5;
                    var8 = undefined;
                    var1 = arg1;
                    var4 = var2.bind(var8)(var1);
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.ceil;
                    var1 = arg3;
                    var3 = var1 * var4;
                    var1 = 8;
                    var3 = var3 / var1;
                    var7 = var5.bind(var6)(var3);
                    var3 = var2.Math;
                    var2 = var3.ceil;
                    var1 = var4 / var1;
                    var6 = var2.bind(var3)(var1);
                    var1 = var0[var11];
                    var5 = 1;
                    if (!(var1 > var5)) {
                        _fun18316_ip = 116;
                        continue _fun18316
                    }
                case 91:
                    var2 = 2;
                    var3 = var1 - var2;
                    var2 = [0, 0, 1];
                    var2 = var2[var3];
                    var0[var11] = var2;
                case 116:
                    var4 = 3;
                    if (!(var4 == var1)) {
                        _fun18316_ip = 180;
                        continue _fun18316
                    }
                case 123:
                    var2 = 255;
                    var1 = var6;
                    if (!(var1 < var7)) {
                        _fun18316_ip = 180;
                        continue _fun18316
                    }
                case 133:
                    var12 = var1 + var5;
                    var3 = var1 + var5;
                    var13 = var0[var3];
                    var3 = var1 + var5;
                    var3 = var3 - var6;
                    var3 = var0[var3];
                    var3 = var3 >>> var5;
                    var3 = var13 + var3;
                    var3 = var3 & var2;
                    var0[var12] = var3;
                    var1 = var1 + 1;
                    if (var1 < var7) {
                        _fun18316_ip = 133;
                        continue _fun18316
                    }
                case 180:
                    var3 = 0;
                    var12 = var3 < var10;
                    var2 = 2;
                    var1 = 0;
                    if (!var12) {
                        _fun18316_ip = 708;
                        continue _fun18316
                    }
                case 197:
                    var12 = var1 * var7;
                    var14 = var11 + var12;
                    var12 = var14 + var1;
                    var13 = var12 + var5;
                    var12 = var13 - var5;
                    var12 = var0[var12];
                    if (!(var3 != var12)) {
                        _fun18316_ip = 666;
                        continue _fun18316
                    }
                case 228:
                    if (!(var5 != var12)) {
                        _fun18316_ip = 584;
                        continue _fun18316
                    }
                case 235:
                    if (!(var2 != var12)) {
                        _fun18316_ip = 531;
                        continue _fun18316
                    }
                case 242:
                    if (!(var4 != var12)) {
                        _fun18316_ip = 403;
                        continue _fun18316
                    }
                case 249:
                    var16 = var3 < var6;
                    var15 = 0;
                    var12 = 0;
                    if (!var16) {
                        _fun18316_ip = 313;
                        continue _fun18316
                    }
                case 260:
                    var17 = var14 + var15;
                    var16 = var13 + var15;
                    var18 = var0[var16];
                    var19 = _closure2_slot7;
                    var16 = var14 + var15;
                    var16 = var16 - var7;
                    var16 = var0[var16];
                    var16 = var19.bind(var8)(var3, var16, var3);
                    var16 = var18 + var16;
                    var0[var17] = var16;
                    var15 = var15 + 1;
                    var12 = var15;
                    if (var12 < var6) {
                        _fun18316_ip = 260;
                        continue _fun18316
                    }
                case 313:
                    if (!(var12 < var7)) {
                        _fun18316_ip = 698;
                        continue _fun18316
                    }
                case 320:
                    var16 = var14 + var12;
                    var15 = var13 + var12;
                    var17 = var0[var15];
                    var20 = _closure2_slot7;
                    var15 = var14 + var12;
                    var15 = var15 - var6;
                    var19 = var0[var15];
                    var15 = var14 + var12;
                    var15 = var15 - var7;
                    var18 = var0[var15];
                    var15 = var14 + var12;
                    var15 = var15 - var6;
                    var15 = var15 - var7;
                    var15 = var0[var15];
                    var15 = var20.bind(var8)(var19, var18, var15);
                    var15 = var17 + var15;
                    var0[var16] = var15;
                    var12 = var12 + 1;
                    if (var12 < var7) {
                        _fun18316_ip = 320;
                        continue _fun18316
                    }
                case 398:
                    _fun18316_ip = 698;
                    continue _fun18316;
                case 403:
                    var16 = var3 < var6;
                    var15 = 0;
                    var12 = 0;
                    if (!var16) {
                        _fun18316_ip = 460;
                        continue _fun18316
                    }
                case 414:
                    var17 = var14 + var15;
                    var16 = var13 + var15;
                    var18 = var0[var16];
                    var16 = var14 + var15;
                    var16 = var16 - var7;
                    var16 = var0[var16];
                    var16 = var16 >>> var5;
                    var16 = var18 + var16;
                    var0[var17] = var16;
                    var15 = var15 + 1;
                    var12 = var15;
                    if (var12 < var6) {
                        _fun18316_ip = 414;
                        continue _fun18316
                    }
                case 460:
                    if (!(var12 < var7)) {
                        _fun18316_ip = 698;
                        continue _fun18316
                    }
                case 467:
                    var16 = var14 + var12;
                    var15 = var13 + var12;
                    var17 = var0[var15];
                    var15 = var14 + var12;
                    var15 = var15 - var7;
                    var18 = var0[var15];
                    var15 = var14 + var12;
                    var15 = var15 - var6;
                    var15 = var0[var15];
                    var15 = var18 + var15;
                    var15 = var15 >>> var5;
                    var15 = var17 + var15;
                    var0[var16] = var15;
                    var12 = var12 + 1;
                    if (var12 < var7) {
                        _fun18316_ip = 467;
                        continue _fun18316
                    }
                case 526:
                    _fun18316_ip = 698;
                    continue _fun18316;
                case 531:
                    var15 = var3 < var7;
                    var12 = 0;
                    if (!var15) {
                        _fun18316_ip = 698;
                        continue _fun18316
                    }
                case 543:
                    var16 = var14 + var12;
                    var15 = var13 + var12;
                    var17 = var0[var15];
                    var15 = var14 + var12;
                    var15 = var15 - var7;
                    var15 = var0[var15];
                    var15 = var17 + var15;
                    var0[var16] = var15;
                    var12 = var12 + 1;
                    if (var12 < var7) {
                        _fun18316_ip = 543;
                        continue _fun18316
                    }
                case 582:
                    _fun18316_ip = 698;
                    continue _fun18316;
                case 584:
                    var16 = var3 < var6;
                    var15 = 0;
                    var12 = 0;
                    if (!var16) {
                        _fun18316_ip = 621;
                        continue _fun18316
                    }
                case 595:
                    var17 = var14 + var15;
                    var16 = var13 + var15;
                    var16 = var0[var16];
                    var0[var17] = var16;
                    var15 = var15 + 1;
                    var12 = var15;
                    if (var12 < var6) {
                        _fun18316_ip = 595;
                        continue _fun18316
                    }
                case 621:
                    if (!(var12 < var7)) {
                        _fun18316_ip = 698;
                        continue _fun18316
                    }
                case 625:
                    var16 = var14 + var12;
                    var15 = var13 + var12;
                    var17 = var0[var15];
                    var15 = var14 + var12;
                    var15 = var15 - var6;
                    var15 = var0[var15];
                    var15 = var17 + var15;
                    var0[var16] = var15;
                    var12 = var12 + 1;
                    if (var12 < var7) {
                        _fun18316_ip = 625;
                        continue _fun18316
                    }
                case 664:
                    _fun18316_ip = 698;
                    continue _fun18316;
                case 666:
                    var15 = var3 < var7;
                    var12 = 0;
                    if (!var15) {
                        _fun18316_ip = 698;
                        continue _fun18316
                    }
                case 675:
                    var16 = var14 + var12;
                    var15 = var13 + var12;
                    var15 = var0[var15];
                    var0[var16] = var15;
                    var12 = var12 + 1;
                    if (var12 < var7) {
                        _fun18316_ip = 675;
                        continue _fun18316
                    }
                case 698:
                    var1 = var1 + 1;
                    if (var1 < var10) {
                        _fun18316_ip = 197;
                        continue _fun18316
                    }
                case 708:
                    return var0;
            }
        };
        var _closure2_slot6 = var0;
        var3 = function(arg0, arg1, arg2) { // Original name: _paeth, environment: var4
            _fun18317: for (var _fun18317_ip = 0;;) switch (_fun18317_ip) {
                case 0:
                    var0 = arg0;
                    var2 = arg1;
                    var1 = arg2;
                    var3 = var0 + var2;
                    var3 = var3 - var1;
                    var5 = var3 - var0;
                    var4 = var3 - var2;
                    var3 = var3 - var1;
                    var7 = var5 * var5;
                    var6 = var4 * var4;
                    if (!(var7 <= var6)) {
                        _fun18317_ip = 53;
                        continue _fun18317
                    }
                case 41:
                    var6 = var5 * var5;
                    var5 = var3 * var3;
                    if (!(!(var6 <= var5))) {
                        _fun18317_ip = 71;
                        continue _fun18317
                    }
                case 53:
                    var4 = var4 * var4;
                    var3 = var3 * var3;
                    if (!(var4 <= var3)) {
                        _fun18317_ip = 68;
                        continue _fun18317
                    }
                case 65:
                    var1 = var2;
                case 68:
                    var0 = var1;
                case 71:
                    return var0;
            }
        };
        var _closure2_slot7 = var3;
        var0 = function(arg0, arg1, arg2) { // Original name: _IHDR, environment: var4
            var2 = arg0;
            var0 = arg1;
            var1 = arg2;
            var5 = _closure2_slot0;
            var3 = var5.readUint;
            var3 = var3.bind(var5)(var2, var0);
            var1.width = var3;
            var3 = 4;
            var0 = var0 + var3;
            var5 = _closure2_slot0;
            var4 = var5.readUint;
            var4 = var4.bind(var5)(var2, var0);
            var1.height = var4;
            var0 = var0 + var3;
            var3 = var2[var0];
            var1.depth = var3;
            var0 = var0 + 1;
            var3 = var2[var0];
            var1.ctype = var3;
            var0 = var0 + 1;
            var3 = var2[var0];
            var1.compress = var3;
            var0 = var0 + 1;
            var3 = var2[var0];
            var1.filter = var3;
            var0 = var0 + 1;
            var0 = var2[var0];
            var1.interlace = var0;
            var0 = undefined;
            return var0;
        };
        var _closure2_slot8 = var0;
        var2 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) { // Original name: _copyTile, environment: var4
            _fun18319: for (var _fun18319_ip = 0;;) switch (_fun18319_ip) {
                case 0:
                    var29 = arg0;
                    var28 = arg1;
                    var27 = arg3;
                    var26 = arg4;
                    var25 = arg6;
                    var24 = arg7;
                    var23 = arg8;
                    var0 = global;
                    var2 = var0.Math;
                    var1 = var2.min;
                    var22 = var1.bind(var2)(var28, var26);
                    var3 = var0.Math;
                    var2 = var3.min;
                    var1 = arg2;
                    var0 = arg5;
                    var21 = var2.bind(var3)(var1, var0);
                    var20 = 0;
                    var30 = var20 < var21;
                    var9 = undefined;
                    var19 = 1;
                    var18 = 2;
                    var17 = 3;
                    var16 = 255;
                    var15 = 0.00392156862745098;
                    var14 = 20;
                    var13 = 220;
                    var12 = 0;
                    var11 = 0;
                    var10 = 0;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    var1 = undefined;
                    var0 = undefined;
                    if (!var30) {
                        _fun18319_ip = 1067;
                        continue _fun18319
                    }
                case 129:
                    var41 = var20 < var22;
                    var39 = var9;
                    var38 = var8;
                    var37 = var7;
                    var36 = var6;
                    var35 = var5;
                    var34 = var4;
                    var33 = var3;
                    var32 = var2;
                    var31 = var1;
                    var30 = var0;
                    var40 = 0;
                    var9 = var39;
                    var8 = var38;
                    var7 = var37;
                    var6 = var36;
                    var5 = var35;
                    var4 = var34;
                    var3 = var33;
                    var2 = var32;
                    var1 = var31;
                    var0 = var30;
                    if (!var41) {
                        _fun18319_ip = 1057;
                        continue _fun18319
                    }
                case 201:
                    if (!(var25 >= var20)) {
                        _fun18319_ip = 209;
                        continue _fun18319
                    }
                case 205:
                    if (!(!(var24 >= var20))) {
                        _fun18319_ip = 246;
                        continue _fun18319
                    }
                case 209:
                    var41 = -var24;
                    var41 = var41 + var10;
                    var41 = var41 * var28;
                    var41 = var41 - var25;
                    var41 = var41 + var40;
                    var52 = var41 << var18;
                    var41 = var10 * var26;
                    var41 = var41 + var40;
                    var51 = var41 << var18;
                    _fun18319_ip = 278;
                    continue _fun18319;
                case 246:
                    var41 = var10 * var28;
                    var41 = var41 + var40;
                    var52 = var41 << var18;
                    var41 = var24 + var10;
                    var41 = var41 * var26;
                    var41 = var41 + var25;
                    var41 = var41 + var40;
                    var51 = var41 << var18;
                case 278:
                    if (!(var20 != var23)) {
                        _fun18319_ip = 895;
                        continue _fun18319
                    }
                case 285:
                    if (!(var19 != var23)) {
                        _fun18319_ip = 693;
                        continue _fun18319
                    }
                case 292:
                    if (!(var18 != var23)) {
                        _fun18319_ip = 519;
                        continue _fun18319
                    }
                case 299:
                    var50 = var39;
                    var49 = var38;
                    var48 = var37;
                    var47 = var36;
                    var46 = var35;
                    var45 = var34;
                    var44 = var33;
                    var43 = var32;
                    var42 = var31;
                    var41 = var30;
                    if (!(var17 == var23)) {
                        _fun18319_ip = 981;
                        continue _fun18319
                    }
                case 336:
                    var53 = var52 + var17;
                    var60 = var29[var53];
                    var59 = var29[var52];
                    var53 = var52 + var19;
                    var58 = var29[var53];
                    var53 = var52 + var18;
                    var57 = var29[var53];
                    var53 = var51 + var17;
                    var53 = var27[var53];
                    var56 = var27[var51];
                    var54 = var51 + var19;
                    var55 = var27[var54];
                    var54 = var51 + var18;
                    var54 = var27[var54];
                    if (!(var60 == var53)) {
                        _fun18319_ip = 441;
                        continue _fun18319
                    }
                case 396:
                    if (!(var59 == var56)) {
                        _fun18319_ip = 441;
                        continue _fun18319
                    }
                case 400:
                    if (!(var58 == var55)) {
                        _fun18319_ip = 441;
                        continue _fun18319
                    }
                case 404:
                    var50 = var60;
                    var49 = var59;
                    var48 = var58;
                    var47 = var57;
                    var46 = var53;
                    var45 = var56;
                    var44 = var55;
                    var43 = var54;
                    var42 = var31;
                    var41 = var30;
                    if (!(var57 != var54)) {
                        _fun18319_ip = 981;
                        continue _fun18319
                    }
                case 441:
                    var49 = var59;
                    var48 = var58;
                    var47 = var57;
                    var46 = var53;
                    var45 = var56;
                    var44 = var55;
                    var43 = var54;
                    var42 = var31;
                    var41 = var30;
                    var50 = var60;
                    if (!(var50 < var13)) {
                        _fun18319_ip = 981;
                        continue _fun18319
                    }
                case 478:
                    var50 = var60;
                    var49 = var59;
                    var48 = var58;
                    var47 = var57;
                    var46 = var53;
                    var45 = var56;
                    var44 = var55;
                    var43 = var54;
                    var42 = var31;
                    var41 = var30;
                    if (!(var53 > var14)) {
                        _fun18319_ip = 981;
                        continue _fun18319
                    }
                case 515:
                    var53 = false;
                    return var53;
                case 519:
                    var53 = var52 + var17;
                    var60 = var29[var53];
                    var59 = var29[var52];
                    var53 = var52 + var19;
                    var58 = var29[var53];
                    var53 = var52 + var18;
                    var57 = var29[var53];
                    var61 = var51 + var17;
                    var56 = var27[var61];
                    var55 = var27[var51];
                    var63 = var51 + var19;
                    var54 = var27[var63];
                    var62 = var51 + var18;
                    var53 = var27[var62];
                    if (!(var60 == var56)) {
                        _fun18319_ip = 591;
                        continue _fun18319
                    }
                case 579:
                    if (!(var59 == var55)) {
                        _fun18319_ip = 591;
                        continue _fun18319
                    }
                case 583:
                    if (!(var58 == var54)) {
                        _fun18319_ip = 591;
                        continue _fun18319
                    }
                case 587:
                    if (!(var57 != var53)) {
                        _fun18319_ip = 642;
                        continue _fun18319
                    }
                case 591:
                    var27[var51] = var59;
                    var27[var63] = var58;
                    var27[var62] = var57;
                    var27[var61] = var60;
                    var50 = var60;
                    var49 = var59;
                    var48 = var58;
                    var47 = var57;
                    var46 = var56;
                    var45 = var55;
                    var44 = var54;
                    var43 = var53;
                    var42 = var31;
                    var41 = var30;
                    _fun18319_ip = 981;
                    continue _fun18319;
                case 642:
                    var27[var51] = var20;
                    var27[var63] = var20;
                    var27[var62] = var20;
                    var27[var61] = var20;
                    var50 = var60;
                    var49 = var59;
                    var48 = var58;
                    var47 = var57;
                    var46 = var56;
                    var45 = var55;
                    var44 = var54;
                    var43 = var53;
                    var42 = var31;
                    var41 = var30;
                    _fun18319_ip = 981;
                    continue _fun18319;
                case 693:
                    var53 = var52 + var17;
                    var53 = var29[var53];
                    var62 = var15 * var53;
                    var53 = var29[var52];
                    var61 = var53 * var62;
                    var53 = var52 + var19;
                    var53 = var29[var53];
                    var60 = var53 * var62;
                    var53 = var52 + var18;
                    var53 = var29[var53];
                    var59 = var53 * var62;
                    var67 = var51 + var17;
                    var53 = var27[var67];
                    var58 = var15 * var53;
                    var53 = var27[var51];
                    var57 = var53 * var58;
                    var66 = var51 + var19;
                    var53 = var27[var66];
                    var56 = var53 * var58;
                    var64 = var51 + var18;
                    var53 = var27[var64];
                    var55 = var53 * var58;
                    var54 = var19 - var62;
                    var53 = var58 * var54;
                    var53 = var62 + var53;
                    var65 = 0;
                    if (!(var65 !== var53)) {
                        _fun18319_ip = 803;
                        continue _fun18319
                    }
                case 799:
                    var65 = var19 / var53;
                case 803:
                    var63 = var16 * var53;
                    var27[var67] = var63;
                    var63 = var57 * var54;
                    var63 = var61 + var63;
                    var67 = var63 * var65;
                    var63 = var51 + var20;
                    var27[var63] = var67;
                    var63 = var56 * var54;
                    var63 = var60 + var63;
                    var63 = var63 * var65;
                    var27[var66] = var63;
                    var63 = var55 * var54;
                    var63 = var59 + var63;
                    var63 = var63 * var65;
                    var27[var64] = var63;
                    var50 = var62;
                    var49 = var61;
                    var48 = var60;
                    var47 = var59;
                    var46 = var58;
                    var45 = var57;
                    var44 = var56;
                    var43 = var55;
                    var42 = var54;
                    var41 = var53;
                    _fun18319_ip = 981;
                    continue _fun18319;
                case 895:
                    var53 = var29[var52];
                    var27[var51] = var53;
                    var53 = var52 + var19;
                    var54 = var29[var53];
                    var53 = var51 + var19;
                    var27[var53] = var54;
                    var53 = var52 + var18;
                    var54 = var29[var53];
                    var53 = var51 + var18;
                    var27[var53] = var54;
                    var53 = var52 + var17;
                    var54 = var29[var53];
                    var53 = var51 + var17;
                    var27[var53] = var54;
                    var50 = var39;
                    var49 = var38;
                    var48 = var37;
                    var47 = var36;
                    var46 = var35;
                    var45 = var34;
                    var44 = var33;
                    var43 = var32;
                    var42 = var31;
                    var41 = var30;
                case 981:
                    var40 = var40 + 1;
                    var39 = var50;
                    var38 = var49;
                    var37 = var48;
                    var36 = var47;
                    var35 = var46;
                    var34 = var45;
                    var33 = var44;
                    var32 = var43;
                    var31 = var42;
                    var30 = var41;
                    var12 = var52;
                    var11 = var51;
                    var9 = var39;
                    var8 = var38;
                    var7 = var37;
                    var6 = var36;
                    var5 = var35;
                    var4 = var34;
                    var3 = var33;
                    var2 = var32;
                    var1 = var31;
                    var0 = var30;
                    if (var40 < var22) {
                        _fun18319_ip = 201;
                        continue _fun18319
                    }
                case 1057:
                    var10 = var10 + 1;
                    if (var10 < var21) {
                        _fun18319_ip = 129;
                        continue _fun18319
                    }
                case 1067:
                    var0 = true;
                    return var0;
            }
        };
        var _closure2_slot9 = var2;
        var1 = {};
        var0 = function(arg0, arg1) { // Original name: nextZero, environment: var4
            _fun18320: for (var _fun18320_ip = 0;;) switch (_fun18320_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4[var0];
                    var3 = 0;
                    var2 = var0;
                    var0 = var2;
                    if (!(var3 != var1)) {
                        _fun18320_ip = 39;
                        continue _fun18320
                    }
                case 22:
                    var5 = var2 + 1;
                    var1 = var4[var5];
                    var2 = var5;
                    var0 = var2;
                    if (var3 != var1) {
                        _fun18320_ip = 22;
                        continue _fun18320
                    }
                case 39:
                    return var0;
            }
        };
        var1.nextZero = var0;
        var0 = function(arg0, arg1) { // Original name: readUshort, environment: var4
            var2 = arg0;
            var3 = arg1;
            var1 = var2[var3];
            var0 = 8;
            var1 = var1 << var0;
            var0 = 1;
            var0 = var3 + var0;
            var0 = var2[var0];
            var0 = var1 | var0;
            return var0;
        };
        var1.readUshort = var0;
        var0 = function(arg0, arg1, arg2) { // Original name: writeUshort, environment: var4
            var2 = arg0;
            var4 = arg1;
            var3 = arg2;
            var0 = 8;
            var1 = var3 >> var0;
            var0 = 255;
            var1 = var1 & var0;
            var2[var4] = var1;
            var1 = 1;
            var1 = var4 + var1;
            var0 = var0 & var3;
            var2[var1] = var0;
            var0 = undefined;
            return var0;
        };
        var1.writeUshort = var0;
        var0 = function(arg0, arg1) { // Original name: readUint, environment: var4
            var4 = arg0;
            var5 = arg1;
            var1 = var4[var5];
            var0 = 16777216;
            var1 = var0 * var1;
            var0 = 1;
            var0 = var5 + var0;
            var2 = var4[var0];
            var0 = 16;
            var3 = var2 << var0;
            var0 = 2;
            var0 = var5 + var0;
            var2 = var4[var0];
            var0 = 8;
            var0 = var2 << var0;
            var2 = 3;
            var2 = var5 + var2;
            var2 = var4[var2];
            var0 = var3 | var0;
            var0 = var0 | var2;
            var0 = var1 + var0;
            return var0;
        };
        var1.readUint = var0;
        var0 = function(arg0, arg1, arg2) { // Original name: writeUint, environment: var4
            var2 = arg0;
            var4 = arg1;
            var3 = arg2;
            var0 = 24;
            var1 = var3 >> var0;
            var0 = 255;
            var1 = var1 & var0;
            var2[var4] = var1;
            var1 = 1;
            var5 = var4 + var1;
            var1 = 16;
            var1 = var3 >> var1;
            var1 = var1 & var0;
            var2[var5] = var1;
            var1 = 2;
            var5 = var4 + var1;
            var1 = 8;
            var1 = var3 >> var1;
            var1 = var1 & var0;
            var2[var5] = var1;
            var1 = 3;
            var1 = var4 + var1;
            var0 = var0 & var3;
            var2[var1] = var0;
            var0 = undefined;
            return var0;
        };
        var1.writeUint = var0;
        var0 = function(arg0, arg1, arg2) { // Original name: readASCII, environment: var4
            _fun18325: for (var _fun18325_ip = 0;;) switch (_fun18325_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arg1;
                    var4 = arg2;
                    var3 = 0;
                    var7 = var3 < var4;
                    var1 = '';
                    var2 = global;
                    var0 = var1;
                    if (!var7) {
                        _fun18325_ip = 66;
                        continue _fun18325
                    }
                case 27:
                    var9 = var2.String;
                    var8 = var9.fromCharCode;
                    var7 = var5 + var3;
                    var7 = var6[var7];
                    var7 = var8.bind(var9)(var7);
                    var1 = var1 + var7;
                    var3 = var3 + 1;
                    var0 = var1;
                    if (var3 < var4) {
                        _fun18325_ip = 27;
                        continue _fun18325
                    }
                case 66:
                    return var0;
            }
        };
        var1.readASCII = var0;
        var0 = function(arg0, arg1, arg2) { // Original name: writeASCII, environment: var4
            _fun18326: for (var _fun18326_ip = 0;;) switch (_fun18326_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var2 = arg2;
                    var0 = var2.length;
                    var1 = 0;
                    var0 = var1 < var0;
                    if (!var0) {
                        _fun18326_ip = 54;
                        continue _fun18326
                    }
                case 23:
                    var5 = var3 + var1;
                    var0 = var2.charCodeAt;
                    var0 = var0.bind(var2)(var1);
                    var4[var5] = var0;
                    var1 = var1 + 1;
                    var0 = var2.length;
                    if (var1 < var0) {
                        _fun18326_ip = 23;
                        continue _fun18326
                    }
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var1.writeASCII = var0;
        var0 = function(arg0, arg1, arg2) { // Original name: readBytes, environment: var4
            _fun18327: for (var _fun18327_ip = 0;;) switch (_fun18327_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var2 = arg2;
                    var0 = new Array(0);
                    var1 = 0;
                    var5 = var1 < var2;
                    if (!var5) {
                        _fun18327_ip = 47;
                        continue _fun18327
                    }
                case 22:
                    var6 = var0.push;
                    var5 = var3 + var1;
                    var5 = var4[var5];
                    var5 = var6.bind(var0)(var5);
                    var1 = var1 + 1;
                    if (var1 < var2) {
                        _fun18327_ip = 22;
                        continue _fun18327
                    }
                case 47:
                    return var0;
            }
        };
        var1.readBytes = var0;
        var0 = function(arg0) { // Original name: pad, environment: var4
            _fun18328: for (var _fun18328_ip = 0;;) switch (_fun18328_ip) {
                case 0:
                    var2 = arg0;
                    var3 = var2.length;
                    var1 = 2;
                    var0 = var2;
                    if (!(var3 < var1)) {
                        _fun18328_ip = 28;
                        continue _fun18328
                    }
                case 18:
                    var1 = '0';
                    var0 = var1 + var2;
                case 28:
                    return var0;
            }
        };
        var1.pad = var0;
        var0 = function(arg0, arg1, arg2) { // Original name: readUTF8, environment: var4
            _fun18329: for (var _fun18329_ip = 0;;) switch (_fun18329_ip) {
                case 0:
                    var3 = arg2;
                    var2 = arg0;
                    var1 = arg1;
                    var0 = var3;
                    var7 = undefined;
                    var4 = undefined;
                    var5 = '';
                    var10 = 0;
                    var6 = var10 < var3;
                    var9 = 16;
                    var8 = '%';
                    if (!var6) {
                        _fun18329_ip = 99;
                        continue _fun18329
                    }
                case 39:
                    var11 = var5;
                    var13 = _closure2_slot0;
                    var12 = var13.pad;
                    var14 = var2;
                    var6 = var1;
                    var6 = var6 + var10;
                    var14 = var14[var6];
                    var6 = var14.toString;
                    var6 = var6.bind(var14)(var9);
                    var6 = var12.bind(var13)(var6);
                    var6 = var8 + var6;
                    var5 = var11 + var6;
                    var10 = var10 + 1;
                    var6 = var0;
                    if (var10 < var6) {
                        _fun18329_ip = 39;
                        continue _fun18329
                    }
                case 99: // try_start_0
                    var6 = global;
                    var6 = var6.decodeURIComponent;
                    var4 = var6.bind(var7)(var5);
                case 112: // try_end0
                    return var4;
                case 114: // catch_target0
                    CatchBlockStart(arg_register = 4);
                    var4 = _closure2_slot0;
                    var3 = var4.readASCII;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
            }
        };
        var1.readUTF8 = var0;
        var _closure2_slot0 = var1;
        var5 = function() { // Environment: var4
            var1 = function(arg0, arg1) { // Original name: C, environment: var0
                _fun18331: for (var _fun18331_ip = 0;;) switch (_fun18331_ip) {
                    case 0:
                        var6 = arg0;
                        var9 = arg1;
                        var5 = var6.length;
                        var1 = _closure3_slot0;
                        var8 = var1.v;
                        var4 = 0;
                        var2 = var4 <= var9;
                        var1 = 0;
                        if (!var2) {
                            _fun18331_ip = 45;
                            continue _fun18331
                        }
                    case 34:
                        var8[var1] = var4;
                        var1 = var1 + 1;
                        if (var1 <= var9) {
                            _fun18331_ip = 34;
                            continue _fun18331
                        }
                    case 45:
                        var3 = 1;
                        var7 = var3 < var5;
                        var2 = 2;
                        var1 = var3;
                        if (!var7) {
                            _fun18331_ip = 84;
                            continue _fun18331
                        }
                    case 61:
                        var10 = var6[var1];
                        var7 = var8[var10];
                        var7 = var7 + 1;
                        var8[var10] = var7;
                        var1 = var1 + var2;
                        if (var1 < var5) {
                            _fun18331_ip = 61;
                            continue _fun18331
                        }
                    case 84:
                        var0 = _closure3_slot0;
                        var1 = var0.m;
                        var8[var4] = var4;
                        var10 = var3 <= var9;
                        var7 = 0;
                        var0 = var3;
                        if (!var10) {
                            _fun18331_ip = 137;
                            continue _fun18331
                        }
                    case 110:
                        var10 = var0 - var3;
                        var10 = var8[var10];
                        var10 = var7 + var10;
                        var7 = var10 << var3;
                        var1[var0] = var7;
                        var0 = var0 + 1;
                        if (var0 <= var9) {
                            _fun18331_ip = 110;
                            continue _fun18331
                        }
                    case 137:
                        var7 = var4 < var5;
                        var0 = 0;
                        if (!var7) {
                            _fun18331_ip = 185;
                            continue _fun18331
                        }
                    case 146:
                        var7 = var0 + var3;
                        var8 = var6[var7];
                        if (!(var4 != var8)) {
                            _fun18331_ip = 177;
                            continue _fun18331
                        }
                    case 158:
                        var7 = var1[var8];
                        var6[var0] = var7;
                        var7 = var1[var8];
                        var7 = var7 + 1;
                        var1[var8] = var7;
                    case 177:
                        var0 = var0 + var2;
                        if (var0 < var5) {
                            _fun18331_ip = 146;
                            continue _fun18331
                        }
                    case 185:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure3_slot1 = var1;
            var1 = function(arg0, arg1, arg2) { // Original name: t, environment: var0
                _fun18332: for (var _fun18332_ip = 0;;) switch (_fun18332_ip) {
                    case 0:
                        var14 = arg0;
                        var13 = arg1;
                        var12 = arg2;
                        var11 = var14.length;
                        var0 = _closure3_slot0;
                        var10 = var0.i;
                        var9 = 0;
                        var15 = var9 < var11;
                        var0 = undefined;
                        var8 = 2;
                        var7 = 1;
                        var6 = 4;
                        var5 = 15;
                        var4 = 0;
                        var3 = undefined;
                        var2 = undefined;
                        var1 = undefined;
                        if (!var15) {
                            _fun18332_ip = 161;
                            continue _fun18332
                        }
                    case 57:
                        var15 = var4 + var7;
                        var16 = var14[var15];
                        if (!(var9 != var16)) {
                            _fun18332_ip = 153;
                            continue _fun18332
                        }
                    case 69:
                        var15 = var14[var15];
                        var16 = var4 >> var7;
                        var16 = var16 << var6;
                        var17 = var16 | var15;
                        var15 = var13 - var15;
                        var16 = var14[var4];
                        var18 = var16 << var15;
                        var15 = var7 << var15;
                        var16 = var18 + var15;
                        var15 = var18;
                        var3 = var17;
                        var2 = var15;
                        var1 = var16;
                        if (!(var2 != var1)) {
                            _fun18332_ip = 153;
                            continue _fun18332
                        }
                    case 121:
                        var19 = var10[var15];
                        var18 = var5 - var13;
                        var18 = var19 >>> var18;
                        var12[var18] = var17;
                        var15 = var15 + 1;
                        var3 = var17;
                        var1 = var16;
                        var2 = var15;
                        if (var2 != var16) {
                            _fun18332_ip = 121;
                            continue _fun18332
                        }
                    case 153:
                        var4 = var4 + var8;
                        if (var4 < var11) {
                            _fun18332_ip = 57;
                            continue _fun18332
                        }
                    case 161:
                        return var0;
                }
            };
            var _closure3_slot2 = var1;
            var1 = function(arg0, arg1) { // Original name: g, environment: var0
                _fun18333: for (var _fun18333_ip = 0;;) switch (_fun18333_ip) {
                    case 0:
                        var7 = arg0;
                        var6 = arg1;
                        var0 = _closure3_slot0;
                        var5 = var0.i;
                        var0 = 15;
                        var4 = var0 - var6;
                        var0 = var7.length;
                        var3 = 0;
                        var0 = var3 < var0;
                        var2 = 1;
                        var1 = 2;
                        if (!var0) {
                            _fun18333_ip = 90;
                            continue _fun18333
                        }
                    case 45:
                        var8 = var7[var3];
                        var0 = var3 + var2;
                        var0 = var7[var0];
                        var0 = var6 - var0;
                        var0 = var8 << var0;
                        var0 = var5[var0];
                        var0 = var0 >>> var4;
                        var7[var3] = var0;
                        var3 = var3 + var1;
                        var0 = var7.length;
                        if (var3 < var0) {
                            _fun18333_ip = 45;
                            continue _fun18333
                        }
                    case 90:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure3_slot3 = var1;
            var1 = function(arg0, arg1, arg2) { // Original name: F, environment: var0
                var4 = arg0;
                var1 = arg1;
                var0 = 3;
                var2 = var1 >>> var0;
                var3 = var4[var2];
                var0 = var1 >>> var0;
                var2 = 1;
                var0 = var2 + var0;
                var4 = var4[var0];
                var0 = 8;
                var0 = var4 << var0;
                var3 = var3 | var0;
                var0 = 7;
                var1 = var0 & var1;
                var0 = arg2;
                var0 = var2 << var0;
                var1 = var3 >>> var1;
                var0 = var0 - var2;
                var0 = var1 & var0;
                return var0;
            };
            var _closure3_slot4 = var1;
            var1 = function(arg0, arg1, arg2) { // Original name: s, environment: var0
                var1 = arg0;
                var3 = arg1;
                var0 = 3;
                var2 = var3 >>> var0;
                var5 = var1[var2];
                var4 = var3 >>> var0;
                var2 = 1;
                var4 = var2 + var4;
                var6 = var1[var4];
                var4 = 8;
                var4 = var6 << var4;
                var4 = var5 | var4;
                var5 = var3 >>> var0;
                var0 = 2;
                var0 = var0 + var5;
                var1 = var1[var0];
                var0 = 16;
                var1 = var1 << var0;
                var0 = 7;
                var3 = var0 & var3;
                var0 = arg2;
                var0 = var2 << var0;
                var1 = var4 | var1;
                var1 = var1 >>> var3;
                var0 = var0 - var2;
                var0 = var1 & var0;
                return var0;
            };
            var _closure3_slot5 = var1;
            var1 = function(arg0, arg1) { // Original name: w, environment: var0
                var1 = arg0;
                var3 = arg1;
                var0 = 3;
                var2 = var3 >>> var0;
                var4 = var1[var2];
                var5 = var3 >>> var0;
                var2 = 1;
                var2 = var2 + var5;
                var5 = var1[var2];
                var2 = 8;
                var2 = var5 << var2;
                var2 = var4 | var2;
                var4 = var3 >>> var0;
                var0 = 2;
                var0 = var0 + var4;
                var1 = var1[var0];
                var0 = 16;
                var0 = var1 << var0;
                var1 = 7;
                var1 = var1 & var3;
                var0 = var2 | var0;
                var0 = var0 >>> var1;
                return var0;
            };
            var _closure3_slot6 = var1;
            var1 = function(arg0, arg1) { // Original name: H, environment: var0
                _fun18337: for (var _fun18337_ip = 0;;) switch (_fun18337_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = arg1;
                        var6 = var0.length;
                        if (!(!(var5 <= var6))) {
                            _fun18337_ip = 82;
                            continue _fun18337
                        }
                    case 15:
                        var1 = global;
                        var3 = var1.Uint8Array;
                        var4 = var1.Math;
                        var2 = var4.max;
                        var1 = 1;
                        var1 = var6 << var1;
                        var8 = var2.bind(var4)(var1, var5);
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var9 = var2;
                        var1 = new var9[var3](var8, var7);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var3 = var1.set;
                        var2 = 0;
                        var2 = var3.bind(var1)(var0, var2);
                        return var1;
                    case 82:
                        return var0;
                }
            };
            var _closure3_slot7 = var1;
            var1 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: B, environment: var0
                _fun18338: for (var _fun18338_ip = 0;;) switch (_fun18338_ip) {
                    case 0:
                        var23 = arg0;
                        var22 = arg1;
                        var21 = arg2;
                        var20 = arg3;
                        var5 = arg4;
                        var19 = arg5;
                        var18 = 0;
                        var24 = var18 < var21;
                        var17 = undefined;
                        var15 = 2;
                        var14 = 3;
                        var13 = 1;
                        var12 = 7;
                        var11 = 11;
                        var10 = 18;
                        var9 = 17;
                        var8 = 16;
                        var7 = 15;
                        var6 = 4;
                        var4 = 0;
                        var3 = undefined;
                        var2 = undefined;
                        var1 = undefined;
                        var0 = var5;
                        if (!var24) {
                            _fun18338_ip = 303;
                            continue _fun18338
                        }
                    case 76:
                        var24 = _closure3_slot6;
                        var24 = var24.bind(var17)(var20, var5);
                        var24 = var24 & var22;
                        var24 = var23[var24];
                        var25 = var7 & var24;
                        var30 = var5 + var25;
                        var29 = var24 >>> var6;
                        if (!(!(var29 <= var7))) {
                            _fun18338_ip = 259;
                            continue _fun18338
                        }
                    case 113:
                        if (!(var8 !== var29)) {
                            _fun18338_ip = 178;
                            continue _fun18338
                        }
                    case 117:
                        if (!(var9 !== var29)) {
                            _fun18338_ip = 155;
                            continue _fun18338
                        }
                    case 121:
                        var35 = var30;
                        var34 = 0;
                        var33 = 0;
                        if (!(var10 === var29)) {
                            _fun18338_ip = 205;
                            continue _fun18338
                        }
                    case 132:
                        var24 = _closure3_slot4;
                        var24 = var24.bind(var17)(var20, var30, var12);
                        var33 = var11 + var24;
                        var35 = var30 + var12;
                        var34 = 0;
                        _fun18338_ip = 205;
                        continue _fun18338;
                    case 155:
                        var24 = _closure3_slot4;
                        var24 = var24.bind(var17)(var20, var30, var14);
                        var33 = var14 + var24;
                        var35 = var30 + var14;
                        var34 = 0;
                        _fun18338_ip = 205;
                        continue _fun18338;
                    case 178:
                        var24 = _closure3_slot4;
                        var24 = var24.bind(var17)(var20, var30, var15);
                        var33 = var14 + var24;
                        var35 = var30 + var15;
                        var25 = var4 - var13;
                        var34 = var19[var25];
                    case 205:
                        var32 = var4 + var33;
                        var31 = var4;
                        var25 = var35;
                        var28 = var34;
                        var27 = var33;
                        var26 = var32;
                        var24 = var31;
                        if (!(var24 < var32)) {
                            _fun18338_ip = 278;
                            continue _fun18338
                        }
                    case 231:
                        var19[var31] = var34;
                        var31 = var31 + 1;
                        var25 = var35;
                        var28 = var34;
                        var27 = var33;
                        var24 = var31;
                        var26 = var32;
                        if (var24 < var26) {
                            _fun18338_ip = 231;
                            continue _fun18338
                        }
                    case 257:
                        _fun18338_ip = 278;
                        continue _fun18338;
                    case 259:
                        var19[var4] = var29;
                        var24 = var4 + 1;
                        var25 = var30;
                        var28 = var3;
                        var27 = var2;
                        var26 = var1;
                    case 278:
                        var5 = var25;
                        var4 = var24;
                        var3 = var28;
                        var2 = var27;
                        var1 = var26;
                        var0 = var5;
                        if (var4 < var21) {
                            _fun18338_ip = 76;
                            continue _fun18338
                        }
                    case 303:
                        return var0;
                }
            };
            var _closure3_slot8 = var1;
            var1 = function(arg0, arg1, arg2, arg3) { // Original name: d, environment: var0
                _fun18339: for (var _fun18339_ip = 0;;) switch (_fun18339_ip) {
                    case 0:
                        var10 = arg0;
                        var9 = arg1;
                        var8 = arg2;
                        var5 = arg3;
                        var0 = var5.length;
                        var4 = 1;
                        var3 = var0 >>> var4;
                        var2 = 0;
                        var11 = var2 < var8;
                        var7 = 0;
                        var6 = 0;
                        var0 = 0;
                        var1 = 0;
                        if (!var11) {
                            _fun18339_ip = 89;
                            continue _fun18339
                        }
                    case 41:
                        var11 = var6 + var9;
                        var11 = var10[var11];
                        var12 = var6 << var4;
                        var5[var12] = var2;
                        var12 = var6 << var4;
                        var12 = var4 + var12;
                        var5[var12] = var11;
                        if (!(var11 > var7)) {
                            _fun18339_ip = 76;
                            continue _fun18339
                        }
                    case 73:
                        var7 = var11;
                    case 76:
                        var6 = var6 + 1;
                        var0 = var7;
                        var1 = var6;
                        if (var1 < var8) {
                            _fun18339_ip = 41;
                            continue _fun18339
                        }
                    case 89:
                        if (!(var1 < var3)) {
                            _fun18339_ip = 120;
                            continue _fun18339
                        }
                    case 93:
                        var6 = var1 << var4;
                        var5[var6] = var2;
                        var6 = var1 << var4;
                        var6 = var4 + var6;
                        var5[var6] = var2;
                        var1 = var1 + 1;
                        if (var1 < var3) {
                            _fun18339_ip = 93;
                            continue _fun18339
                        }
                    case 120:
                        return var0;
                }
            };
            var _closure3_slot9 = var1;
            var1 = global;
            var4 = var1.Uint16Array;
            var6 = var1.Uint32Array;
            var1 = {};
            var2 = var4.prototype;
            var5 = Object.create(var2, {
                constructor: {
                    value: var4
                }
            });
            var2 = 16;
            var9 = var5;
            var8 = var2;
            var3 = new var9[var4](var8, var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var1.m = var3;
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var9 = var3;
            var2 = new var9[var4](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            var1.v = var2;
            var2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            var1.d = var2;
            var2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999];
            var1.o = var2;
            var2 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0];
            var1.z = var2;
            var2 = var4.prototype;
            var5 = Object.create(var2, {
                constructor: {
                    value: var4
                }
            });
            var2 = 32;
            var9 = var5;
            var8 = var2;
            var3 = new var9[var4](var8, var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var1.B = var3;
            var3 = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535];
            var1.p = var3;
            var3 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0];
            var1.w = var3;
            var3 = var6.prototype;
            var5 = Object.create(var3, {
                constructor: {
                    value: var6
                }
            });
            var9 = var5;
            var3 = new var9[var6](var8, var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var1.h = var3;
            var3 = var4.prototype;
            var7 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var3 = 512;
            var9 = var7;
            var8 = var3;
            var5 = new var9[var4](var8, var7);
            var5 = var5 instanceof Object ? var5 : var7;
            var1.g = var5;
            var5 = new Array(0);
            var1.s = var5;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var9 = var5;
            var8 = var2;
            var2 = new var9[var4](var8, var7);
            var2 = var2 instanceof Object ? var2 : var5;
            var1.A = var2;
            var2 = new Array(0);
            var1.t = var2;
            var2 = var4.prototype;
            var7 = Object.create(var2, {
                constructor: {
                    value: var4
                }
            });
            var2 = 32768;
            var9 = var7;
            var8 = var2;
            var5 = new var9[var4](var8, var7);
            var5 = var5 instanceof Object ? var5 : var7;
            var1.k = var5;
            var5 = new Array(0);
            var1.c = var5;
            var5 = new Array(0);
            var1.a = var5;
            var5 = var4.prototype;
            var7 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var9 = var7;
            var5 = new var9[var4](var8, var7);
            var5 = var5 instanceof Object ? var5 : var7;
            var1.n = var5;
            var5 = new Array(0);
            var1.e = var5;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var9 = var5;
            var8 = var3;
            var3 = new var9[var4](var8, var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var1.C = var3;
            var3 = new Array(0);
            var1.b = var3;
            var3 = var4.prototype;
            var5 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var9 = var5;
            var8 = var2;
            var3 = new var9[var4](var8, var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var1.i = var3;
            var3 = var6.prototype;
            var5 = Object.create(var3, {
                constructor: {
                    value: var6
                }
            });
            var8 = 286;
            var9 = var5;
            var3 = new var9[var6](var8, var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var1.r = var3;
            var3 = var6.prototype;
            var5 = Object.create(var3, {
                constructor: {
                    value: var6
                }
            });
            var8 = 30;
            var9 = var5;
            var3 = new var9[var6](var8, var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var1.f = var3;
            var3 = var6.prototype;
            var5 = Object.create(var3, {
                constructor: {
                    value: var6
                }
            });
            var8 = 19;
            var9 = var5;
            var3 = new var9[var6](var8, var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var1.l = var3;
            var3 = var6.prototype;
            var5 = Object.create(var3, {
                constructor: {
                    value: var6
                }
            });
            var8 = 15000;
            var9 = var5;
            var3 = new var9[var6](var8, var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var1.u = var3;
            var3 = var4.prototype;
            var5 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var8 = 65536;
            var9 = var5;
            var3 = new var9[var4](var8, var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var1.q = var3;
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var9 = var3;
            var8 = var2;
            var2 = new var9[var4](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            var1.j = var2;
            var _closure3_slot0 = var1;
            var2 = function() { // Environment: var0
                _fun18340: for (var _fun18340_ip = 0;;) switch (_fun18340_ip) {
                    case 0:
                        var4 = function(arg0, arg1, arg2) { // Original name: A, environment: var0
                            _fun18341: for (var _fun18341_ip = 0;;) switch (_fun18341_ip) {
                                case 0:
                                    var4 = arg0;
                                    var3 = arg2;
                                    var0 = arg1;
                                    var0 = parseFloat(var0);
                                    var2 = var0 - 1;
                                    var1 = 0;
                                    if (!(var1 != var0)) {
                                        _fun18341_ip = 42;
                                        continue _fun18341
                                    }
                                case 21:
                                    var0 = var4.push;
                                    var0 = var0.bind(var4)(var1, var3);
                                    var0 = parseFloat(var2);
                                    var2 = var0 - 1;
                                    if (var1 != var0) {
                                        _fun18341_ip = 21;
                                        continue _fun18341
                                    }
                                case 42:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var3 = 0;
                        var21 = 2863311530.0;
                        var20 = 1431655765;
                        var19 = 1;
                        var18 = 3435973836.0;
                        var17 = 2;
                        var16 = 858993459;
                        var15 = 4042322160.0;
                        var5 = 4;
                        var14 = 252645135;
                        var13 = 4278255360.0;
                        var6 = 8;
                        var12 = 16711935;
                        var11 = 16;
                        var10 = 17;
                        var2 = 3;
                        var9 = 32;
                        var8 = 32768;
                        var7 = 0;
                    case 108:
                        var22 = var21 & var7;
                        var0 = var20 & var7;
                        var22 = var22 >>> var19;
                        var0 = var0 << var19;
                        var0 = var22 | var0;
                        var22 = var18 & var0;
                        var22 = var22 >>> var17;
                        var0 = var16 & var0;
                        var0 = var0 << var17;
                        var0 = var22 | var0;
                        var22 = var15 & var0;
                        var22 = var22 >>> var5;
                        var0 = var14 & var0;
                        var0 = var0 << var5;
                        var0 = var22 | var0;
                        var22 = var13 & var0;
                        var22 = var22 >>> var6;
                        var0 = var12 & var0;
                        var0 = var0 << var6;
                        var0 = var22 | var0;
                        var22 = _closure3_slot0;
                        var22 = var22.i;
                        var23 = var0 >>> var11;
                        var0 = var0 << var11;
                        var0 = var23 | var0;
                        var0 = var0 >>> var10;
                        var22[var7] = var0;
                        var7 = var7 + 1;
                        var0 = 0;
                        if (var7 < var8) {
                            _fun18340_ip = 108;
                            continue _fun18340
                        }
                    case 226:
                        var7 = _closure3_slot0;
                        var8 = var7.B;
                        var7 = _closure3_slot0;
                        var7 = var7.o;
                        var7 = var7[var0];
                        var10 = var7 << var2;
                        var7 = _closure3_slot0;
                        var7 = var7.z;
                        var7 = var7[var0];
                        var7 = var10 | var7;
                        var8[var0] = var7;
                        var7 = _closure3_slot0;
                        var8 = var7.h;
                        var7 = _closure3_slot0;
                        var7 = var7.p;
                        var7 = var7[var0];
                        var10 = var7 << var5;
                        var7 = _closure3_slot0;
                        var7 = var7.w;
                        var7 = var7[var0];
                        var7 = var10 | var7;
                        var8[var0] = var7;
                        var0 = var0 + 1;
                        if (var0 < var9) {
                            _fun18340_ip = 226;
                            continue _fun18340
                        }
                    case 329:
                        var0 = _closure3_slot0;
                        var5 = var0.s;
                        var0 = undefined;
                        var2 = 144;
                        var2 = var4.bind(var0)(var5, var2, var6);
                        var2 = _closure3_slot0;
                        var7 = var2.s;
                        var2 = 112;
                        var5 = 9;
                        var2 = var4.bind(var0)(var7, var2, var5);
                        var2 = _closure3_slot0;
                        var8 = var2.s;
                        var7 = 24;
                        var2 = 7;
                        var2 = var4.bind(var0)(var8, var7, var2);
                        var2 = _closure3_slot0;
                        var2 = var2.s;
                        var2 = var4.bind(var0)(var2, var6, var6);
                        var7 = _closure3_slot1;
                        var2 = _closure3_slot0;
                        var2 = var2.s;
                        var2 = var7.bind(var0)(var2, var5);
                        var8 = _closure3_slot2;
                        var2 = _closure3_slot0;
                        var6 = var2.s;
                        var2 = _closure3_slot0;
                        var2 = var2.g;
                        var2 = var8.bind(var0)(var6, var5, var2);
                        var6 = _closure3_slot3;
                        var2 = _closure3_slot0;
                        var2 = var2.s;
                        var2 = var6.bind(var0)(var2, var5);
                        var2 = _closure3_slot0;
                        var2 = var2.t;
                        var5 = 5;
                        var2 = var4.bind(var0)(var2, var9, var5);
                        var2 = _closure3_slot0;
                        var2 = var2.t;
                        var2 = var7.bind(var0)(var2, var5);
                        var2 = _closure3_slot0;
                        var7 = var2.t;
                        var2 = _closure3_slot0;
                        var2 = var2.A;
                        var2 = var8.bind(var0)(var7, var5, var2);
                        var2 = _closure3_slot0;
                        var2 = var2.t;
                        var2 = var6.bind(var0)(var2, var5);
                        var2 = _closure3_slot0;
                        var5 = var2.b;
                        var2 = 19;
                        var2 = var4.bind(var0)(var5, var2, var3);
                        var2 = _closure3_slot0;
                        var5 = var2.c;
                        var2 = 286;
                        var2 = var4.bind(var0)(var5, var2, var3);
                        var2 = _closure3_slot0;
                        var5 = var2.e;
                        var2 = 30;
                        var2 = var4.bind(var0)(var5, var2, var3);
                        var1 = _closure3_slot0;
                        var2 = var1.a;
                        var1 = 320;
                        var1 = var4.bind(var0)(var2, var1, var3);
                        return var0;
                }
            };
            var1 = undefined;
            var1 = var2.bind(var1)();
            var0 = function(arg0, arg1) { // Original name: v, environment: var0
                _fun18342: for (var _fun18342_ip = 0;;) switch (_fun18342_ip) {
                    case 0:
                        var42 = arg0;
                        var0 = arg1;
                        var1 = global;
                        var3 = var1.Uint8Array;
                        var1 = 0;
                        var2 = var42[var1];
                        var41 = 3;
                        if (!(var41 == var2)) {
                            _fun18342_ip = 41;
                            continue _fun18342
                        }
                    case 27:
                        var2 = 1;
                        var2 = var42[var2];
                        if (!(var1 != var2)) {
                            _fun18342_ip = 1581;
                            continue _fun18342
                        }
                    case 41:
                        var2 = null;
                        var40 = var2 == var0;
                        var67 = var0;
                        if (!var40) {
                            _fun18342_ip = 89;
                            continue _fun18342
                        }
                    case 53:
                        var4 = var42.length;
                        var2 = 2;
                        var2 = var4 >>> var2;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var3
                            }
                        });
                        var95 = var2 << var41;
                        var96 = var4;
                        var2 = new var96[var3](var95, var94);
                        var67 = var2 instanceof Object ? var2 : var4;
                    case 89:
                        var39 = undefined;
                        var37 = 1;
                        var36 = 5;
                        var35 = 257;
                        var34 = 10;
                        var33 = 4;
                        var32 = 14;
                        var31 = 2;
                        var30 = 38;
                        var29 = 131072;
                        var28 = 15;
                        var27 = 7;
                        var26 = 254;
                        var25 = 264;
                        var24 = 256;
                        var23 = 8;
                        var22 = 511;
                        var21 = 31;
                        var20 = undefined;
                        var19 = undefined;
                        var18 = 0;
                        var17 = 0;
                        var16 = 0;
                        var15 = 0;
                        var14 = 0;
                        var66 = 0;
                        var65 = 0;
                        var13 = undefined;
                        var12 = undefined;
                        var64 = undefined;
                        var63 = undefined;
                        var60 = undefined;
                        var59 = undefined;
                        var11 = undefined;
                        var10 = undefined;
                    case 194:
                        var4 = _closure3_slot5;
                        var9 = var4.bind(var39)(var42, var65, var37);
                        var2 = var65 + var37;
                        var44 = var4.bind(var39)(var42, var2, var31);
                        var43 = var65 + var41;
                        if (!(var1 === var44)) {
                            _fun18342_ip = 406;
                            continue _fun18342
                        }
                    case 227:
                        var4 = var27 & var43;
                        var2 = var43;
                        if (!var4) {
                            _fun18342_ip = 245;
                            continue _fun18342
                        }
                    case 237:
                        var4 = var23 - var4;
                        var2 = var43 + var4;
                    case 245:
                        var2 = var2 >>> var41;
                        var69 = var33 + var2;
                        var2 = var69 - var33;
                        var4 = var42[var2];
                        var2 = var69 - var41;
                        var2 = var42[var2];
                        var2 = var2 << var23;
                        var2 = var4 | var2;
                        var4 = var67;
                        if (!var40) {
                            _fun18342_ip = 297;
                            continue _fun18342
                        }
                    case 283:
                        var6 = _closure3_slot7;
                        var5 = var66 + var2;
                        var4 = var6.bind(var39)(var67, var5);
                    case 297:
                        var6 = var4.set;
                        var95 = var42.buffer;
                        var5 = var42.byteOffset;
                        var94 = var5 + var69;
                        var7 = var3.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var3
                            }
                        });
                        var96 = var7;
                        var93 = var2;
                        var5 = new var96[var3](var95, var94, var93, var92);
                        var5 = var5 instanceof Object ? var5 : var7;
                        var5 = var6.bind(var4)(var5, var66);
                        var5 = var69 + var2;
                        var65 = var5 << var41;
                        var62 = var66 + var2;
                        var61 = var4;
                        var81 = var20;
                        var80 = var19;
                        var79 = var18;
                        var78 = var17;
                        var77 = var16;
                        var76 = var15;
                        var75 = var14;
                        var74 = var13;
                        var73 = var12;
                        var72 = var64;
                        var71 = var60;
                        var70 = var59;
                        var68 = var2;
                        _fun18342_ip = 1444;
                        continue _fun18342;
                    case 406:
                        var53 = var67;
                        if (!var40) {
                            _fun18342_ip = 426;
                            continue _fun18342
                        }
                    case 412:
                        var4 = _closure3_slot7;
                        var2 = var66 + var29;
                        var53 = var4.bind(var39)(var67, var2);
                    case 426:
                        if (!(var37 === var44)) {
                            _fun18342_ip = 455;
                            continue _fun18342
                        }
                    case 430:
                        var2 = _closure3_slot0;
                        var20 = var2.g;
                        var2 = _closure3_slot0;
                        var19 = var2.A;
                        var15 = var22;
                        var14 = var21;
                    case 455:
                        var8 = var53;
                        var7 = var66;
                        var6 = var43;
                        var5 = var64;
                        var4 = var60;
                        var2 = var59;
                        if (!(var31 === var44)) {
                            _fun18342_ip = 957;
                            continue _fun18342
                        }
                    case 480:
                        var45 = _closure3_slot4;
                        var44 = var45.bind(var39)(var42, var43, var36);
                        var50 = var44 + var35;
                        var44 = var43 + var36;
                        var44 = var45.bind(var39)(var42, var44, var36);
                        var49 = var44 + var37;
                        var44 = var43 + var34;
                        var44 = var45.bind(var39)(var42, var44, var33);
                        var48 = var44 + var33;
                        var82 = var43 + var32;
                        var43 = 0;
                    case 531:
                        var44 = _closure3_slot0;
                        var44 = var44.b;
                        var44[var43] = var1;
                        var44 = _closure3_slot0;
                        var45 = var44.b;
                        var44 = var43 + var37;
                        var45[var44] = var1;
                        var43 = var43 + var31;
                        if (var43 < var30) {
                            _fun18342_ip = 531;
                            continue _fun18342
                        }
                    case 571:
                        var46 = var37;
                        var45 = 0;
                        var44 = var46;
                        var43 = 0;
                        if (!(var43 < var48)) {
                            _fun18342_ip = 662;
                            continue _fun18342
                        }
                    case 585:
                        var51 = _closure3_slot4;
                        var47 = var41 * var45;
                        var47 = var82 + var47;
                        var51 = var51.bind(var39)(var42, var47, var41);
                        var47 = _closure3_slot0;
                        var52 = var47.b;
                        var47 = _closure3_slot0;
                        var47 = var47.d;
                        var47 = var47[var45];
                        var47 = var47 << var37;
                        var47 = var37 + var47;
                        var52[var47] = var51;
                        if (!(var51 > var46)) {
                            _fun18342_ip = 646;
                            continue _fun18342
                        }
                    case 643:
                        var46 = var51;
                    case 646:
                        var45 = var45 + 1;
                        var44 = var46;
                        var64 = var51;
                        var43 = var45;
                        if (var43 < var48) {
                            _fun18342_ip = 585;
                            continue _fun18342
                        }
                    case 662:
                        var57 = _closure3_slot1;
                        var45 = _closure3_slot0;
                        var45 = var45.b;
                        var45 = var57.bind(var39)(var45, var44);
                        var56 = _closure3_slot2;
                        var45 = _closure3_slot0;
                        var46 = var45.b;
                        var45 = _closure3_slot0;
                        var45 = var45.C;
                        var45 = var56.bind(var39)(var46, var44, var45);
                        var45 = _closure3_slot0;
                        var52 = var45.k;
                        var45 = _closure3_slot0;
                        var51 = var45.n;
                        var58 = _closure3_slot8;
                        var45 = _closure3_slot0;
                        var95 = var45.C;
                        var45 = _closure3_slot0;
                        var90 = var45.a;
                        var45 = var37 << var44;
                        var94 = var45 - var37;
                        var93 = var50 + var49;
                        var45 = var41 * var48;
                        var91 = var82 + var45;
                        var96 = undefined;
                        var92 = var42;
                        var6 = var96[var58](var95, var94, var93, var92, var91, var90, var89);
                        var55 = _closure3_slot9;
                        var46 = _closure3_slot0;
                        var95 = var46.a;
                        var46 = _closure3_slot0;
                        var92 = var46.c;
                        var94 = 0;
                        var93 = var50;
                        var58 = var96[var55](var95, var94, var93, var92, var91);
                        var46 = var37 << var58;
                        var15 = var46 - var37;
                        var46 = _closure3_slot0;
                        var95 = var46.a;
                        var46 = _closure3_slot0;
                        var92 = var46.e;
                        var94 = var50;
                        var93 = var49;
                        var55 = var96[var55](var95, var94, var93, var92, var91);
                        var46 = var37 << var55;
                        var14 = var46 - var37;
                        var54 = _closure3_slot0;
                        var54 = var54.c;
                        var54 = var57.bind(var39)(var54, var58);
                        var54 = _closure3_slot0;
                        var54 = var54.c;
                        var54 = var56.bind(var39)(var54, var58, var52);
                        var54 = _closure3_slot0;
                        var54 = var54.e;
                        var54 = var57.bind(var39)(var54, var55);
                        var54 = _closure3_slot0;
                        var54 = var54.e;
                        var54 = var56.bind(var39)(var54, var55, var51);
                        var13 = var44;
                        var12 = var43;
                        var5 = var64;
                        var8 = var53;
                        var20 = var52;
                        var19 = var51;
                        var18 = var50;
                        var17 = var49;
                        var16 = var48;
                        var7 = var66;
                        var4 = var60;
                        var2 = var59;
                    case 957:
                        var43 = _closure3_slot6;
                        var43 = var43.bind(var39)(var42, var6);
                        var43 = var43 & var15;
                        var43 = var20[var43];
                        var44 = var28 & var43;
                        var48 = var6 + var44;
                        var58 = var43 >>> var33;
                        var82 = var58 >>> var23;
                        var56 = var8;
                        var55 = var20;
                        var54 = var19;
                        var53 = var18;
                        var52 = var17;
                        var51 = var16;
                        var50 = var15;
                        var49 = var14;
                        var57 = var7;
                        var47 = var13;
                        var46 = var12;
                        var45 = var5;
                        var44 = var4;
                        var43 = var2;
                        if (!(var82 !== var1)) {
                            _fun18342_ip = 1524;
                            continue _fun18342
                        }
                    case 1040:
                        var61 = var56;
                        var81 = var55;
                        var80 = var54;
                        var79 = var53;
                        var78 = var52;
                        var77 = var51;
                        var76 = var50;
                        var75 = var49;
                        var62 = var57;
                        var65 = var48;
                        var74 = var47;
                        var73 = var46;
                        var72 = var45;
                        var71 = var44;
                        var70 = var43;
                        var69 = var11;
                        var68 = var10;
                        var63 = var58;
                        if (!(var24 !== var63)) {
                            _fun18342_ip = 1444;
                            continue _fun18342
                        }
                    case 1101:
                        var82 = var57 + var58;
                        var86 = var82 - var26;
                        var84 = var48;
                        if (!(var58 > var25)) {
                            _fun18342_ip = 1169;
                            continue _fun18342
                        }
                    case 1116:
                        var82 = _closure3_slot0;
                        var83 = var82.B;
                        var82 = var58 - var35;
                        var83 = var83[var82];
                        var82 = var83 >>> var41;
                        var85 = var57 + var82;
                        var87 = _closure3_slot4;
                        var82 = var27 & var83;
                        var82 = var87.bind(var39)(var42, var48, var82);
                        var86 = var85 + var82;
                        var83 = var27 & var83;
                        var84 = var48 + var83;
                    case 1169:
                        var82 = _closure3_slot6;
                        var82 = var82.bind(var39)(var42, var84);
                        var82 = var82 & var49;
                        var82 = var54[var82];
                        var83 = var28 & var82;
                        var83 = var84 + var83;
                        var84 = var82 >>> var33;
                        var82 = _closure3_slot0;
                        var82 = var82.h;
                        var82 = var82[var84];
                        var85 = var82 >>> var33;
                        var87 = _closure3_slot5;
                        var84 = var28 & var82;
                        var84 = var87.bind(var39)(var42, var83, var84);
                        var85 = var85 + var84;
                        var82 = var28 & var82;
                        var84 = var83 + var82;
                        var83 = var56;
                        if (!var40) {
                            _fun18342_ip = 1263;
                            continue _fun18342
                        }
                    case 1249:
                        var87 = _closure3_slot7;
                        var82 = var57 + var29;
                        var83 = var87.bind(var39)(var56, var82);
                    case 1263:
                        var8 = var83;
                        var20 = var55;
                        var19 = var54;
                        var18 = var53;
                        var17 = var52;
                        var16 = var51;
                        var15 = var50;
                        var14 = var49;
                        var7 = var86;
                        var6 = var84;
                        var13 = var47;
                        var12 = var46;
                        var5 = var45;
                        var4 = var7;
                        var2 = var85;
                        var82 = var57;
                        if (!(var57 < var86)) {
                            _fun18342_ip = 957;
                            continue _fun18342
                        }
                    case 1318:
                        var87 = parseFloat(var82);
                        var88 = var87 + 1;
                        var87 = var87 - var85;
                        var87 = var83[var87];
                        var83[var82] = var87;
                        var87 = parseFloat(var88);
                        var89 = var87 + 1;
                        var87 = var87 - var85;
                        var87 = var83[var87];
                        var83[var88] = var87;
                        var87 = parseFloat(var89);
                        var88 = var87 + 1;
                        var87 = var87 - var85;
                        var87 = var83[var87];
                        var83[var89] = var87;
                        var87 = parseFloat(var88);
                        var82 = var87 + 1;
                        var87 = var87 - var85;
                        var87 = var83[var87];
                        var83[var88] = var87;
                        var8 = var83;
                        var20 = var55;
                        var19 = var54;
                        var18 = var53;
                        var17 = var52;
                        var16 = var51;
                        var15 = var50;
                        var14 = var49;
                        var7 = var86;
                        var6 = var84;
                        var13 = var47;
                        var12 = var46;
                        var5 = var45;
                        var2 = var85;
                        var4 = var7;
                        if (var82 < var4) {
                            _fun18342_ip = 1318;
                            continue _fun18342
                        }
                    case 1439:
                        _fun18342_ip = 957;
                        continue _fun18342;
                    case 1444:
                        var20 = var81;
                        var19 = var80;
                        var18 = var79;
                        var17 = var78;
                        var16 = var77;
                        var15 = var76;
                        var14 = var75;
                        var13 = var74;
                        var12 = var73;
                        var64 = var72;
                        var60 = var71;
                        var59 = var70;
                        var11 = var69;
                        var10 = var68;
                        var67 = var61;
                        var66 = var62;
                        if (var1 === var9) {
                            _fun18342_ip = 194;
                            continue _fun18342
                        }
                    case 1499:
                        var60 = var61.length;
                        var59 = var61;
                        if (!(var60 != var62)) {
                            _fun18342_ip = 1522;
                            continue _fun18342
                        }
                    case 1511:
                        var60 = var61.slice;
                        var59 = var60.bind(var61)(var1, var62);
                    case 1522:
                        return var59;
                    case 1524:
                        var57 = parseFloat(var57);
                        var7 = var57 + 1;
                        var56[var57] = var58;
                        var8 = var56;
                        var20 = var55;
                        var19 = var54;
                        var18 = var53;
                        var17 = var52;
                        var16 = var51;
                        var15 = var50;
                        var14 = var49;
                        var6 = var48;
                        var13 = var47;
                        var12 = var46;
                        var5 = var45;
                        var4 = var44;
                        var2 = var43;
                        _fun18342_ip = 957;
                        continue _fun18342;
                    case 1581:
                        if (var0) {
                            _fun18342_ip = 1606;
                            continue _fun18342
                        }
                    case 1584:
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var96 = var2;
                        var95 = 0;
                        var1 = new var96[var3](var95, var94);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 1606:
                        return var0;
                }
            };
            return var0;
        };
        var0 = undefined;
        var0 = var5.bind(var0)();
        var _closure2_slot1 = var0;
        var0 = {};
        var5 = function(arg0) { // Original name: decode, environment: var4
            _fun18343: for (var _fun18343_ip = 0;;) switch (_fun18343_ip) {
                case 0:
                    var5 = undefined;
                    var57 = undefined;
                    var58 = undefined;
                    var59 = undefined;
                    var0 = undefined;
                    var60 = undefined;
                    var61 = undefined;
                    var62 = undefined;
                    var63 = undefined;
                    var64 = undefined;
                    var56 = global;
                    var3 = var56.Uint8Array;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var85 = arg0;
                    var86 = var2;
                    var1 = new var86[var3](var85, var84);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var57 = var2;
                    var55 = 8;
                    var58 = var55;
                    var3 = _closure2_slot0;
                    var59 = var3;
                    var54 = var3.readUshort;
                    var53 = var3.readUint;
                    var3 = {};
                    var4 = {};
                    var3.tabs = var4;
                    var4 = new Array(0);
                    var3.frames = var4;
                    var0 = var3;
                    var4 = var56.Uint8Array;
                    var85 = var2.length;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var86 = var3;
                    var2 = new var86[var4](var85, var84);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var3 = [137, 80, 78, 71, 13, 10, 26, 10];
                    var10 = 0;
                    var2 = 0;
                case 148:
                    var6 = var57;
                    var7 = var6[var2];
                    var6 = var3[var2];
                    if (!(var7 == var6)) {
                        _fun18343_ip = 3576;
                        continue _fun18343
                    }
                case 166:
                    var52 = var2 + 1;
                    var2 = var52;
                    if (var52 < var55) {
                        _fun18343_ip = 148;
                        continue _fun18343
                    }
                case 176:
                    var3 = var58;
                    var2 = var57;
                    var2 = var2.length;
                    var2 = var3 < var2;
                    var51 = 4;
                    var8 = 1;
                    var50 = 2;
                    var49 = null;
                    var48 = 1000;
                    var47 = 24;
                    var46 = 25;
                    var45 = 12;
                    var44 = 16;
                    var43 = 22;
                    var42 = 20;
                    var41 = 100;
                    var40 = 'tEXt';
                    var39 = 3;
                    var38 = 100000;
                    var37 = 6;
                    var36 = 'IEND';
                    var35 = 'bKGD';
                    var34 = 'sRGB';
                    var33 = 'gAMA';
                    var32 = 'tRNS';
                    var31 = 'hIST';
                    var30 = 'PLTE';
                    var29 = 'iTXt';
                    var28 = 'zTXt';
                    var27 = 'cHRM';
                    var26 = 'pHYs';
                    var25 = 'fdAT';
                    var24 = 'fcTL';
                    var23 = 'acTL';
                    var22 = 'IDAT';
                    var21 = 'CgBI';
                    var20 = 'iCCP';
                    var19 = 'IHDR';
                    var18 = undefined;
                    var17 = 0;
                    var16 = 0;
                    var15 = undefined;
                    var14 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var9 = undefined;
                    var7 = undefined;
                    var6 = 0;
                    if (!var2) {
                        _fun18343_ip = 3443;
                        continue _fun18343
                    }
                case 371:
                    var66 = var59;
                    var3 = var66.readUint;
                    var65 = var57;
                    var2 = var58;
                    var60 = var3.bind(var66)(var65, var2);
                    var3 = var2 + var51;
                    var58 = var3;
                    var2 = var66.readASCII;
                    var2 = var2.bind(var66)(var65, var3, var51);
                    var61 = var2;
                    var58 = var3 + var51;
                    if (!(var19 != var2)) {
                        _fun18343_ip = 3307;
                        continue _fun18343
                    }
                case 426:
                    var2 = var61;
                    if (!(var20 != var2)) {
                        _fun18343_ip = 3130;
                        continue _fun18343
                    }
                case 436:
                    var2 = var61;
                    if (!(var21 != var2)) {
                        _fun18343_ip = 3058;
                        continue _fun18343
                    }
                case 446:
                    var2 = var61;
                    if (!(var22 != var2)) {
                        _fun18343_ip = 2970;
                        continue _fun18343
                    }
                case 456:
                    var2 = var61;
                    if (!(var23 != var2)) {
                        _fun18343_ip = 2855;
                        continue _fun18343
                    }
                case 466:
                    var2 = var61;
                    if (!(var24 != var2)) {
                        _fun18343_ip = 2563;
                        continue _fun18343
                    }
                case 476:
                    var2 = var61;
                    if (!(var25 != var2)) {
                        _fun18343_ip = 2462;
                        continue _fun18343
                    }
                case 486:
                    var2 = var61;
                    if (!(var26 != var2)) {
                        _fun18343_ip = 2350;
                        continue _fun18343
                    }
                case 496:
                    var2 = var61;
                    if (!(var27 != var2)) {
                        _fun18343_ip = 2231;
                        continue _fun18343
                    }
                case 506:
                    var2 = var61;
                    if (!(var40 != var2)) {
                        _fun18343_ip = 1997;
                        continue _fun18343
                    }
                case 516:
                    var2 = var61;
                    if (!(var28 != var2)) {
                        _fun18343_ip = 1997;
                        continue _fun18343
                    }
                case 526:
                    var2 = var61;
                    if (!(var29 != var2)) {
                        _fun18343_ip = 1675;
                        continue _fun18343
                    }
                case 536:
                    var2 = var61;
                    if (!(var30 != var2)) {
                        _fun18343_ip = 1599;
                        continue _fun18343
                    }
                case 546:
                    var2 = var61;
                    if (!(var31 != var2)) {
                        _fun18343_ip = 1432;
                        continue _fun18343
                    }
                case 556:
                    var2 = var61;
                    if (!(var32 != var2)) {
                        _fun18343_ip = 1116;
                        continue _fun18343
                    }
                case 566:
                    var2 = var61;
                    if (!(var33 != var2)) {
                        _fun18343_ip = 1040;
                        continue _fun18343
                    }
                case 576:
                    var2 = var61;
                    if (!(var34 != var2)) {
                        _fun18343_ip = 979;
                        continue _fun18343
                    }
                case 586:
                    var2 = var61;
                    if (!(var35 != var2)) {
                        _fun18343_ip = 644;
                        continue _fun18343
                    }
                case 593:
                    var2 = var61;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    var7 = var66;
                    var6 = var65;
                    if (!(var36 != var2)) {
                        _fun18343_ip = 3443;
                        continue _fun18343
                    }
                case 639:
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 644:
                    var2 = var0;
                    var2 = var2.ctype;
                    if (!(var10 != var2)) {
                        _fun18343_ip = 908;
                        continue _fun18343
                    }
                case 660:
                    var2 = var0;
                    var2 = var2.ctype;
                    if (!(var51 != var2)) {
                        _fun18343_ip = 908;
                        continue _fun18343
                    }
                case 676:
                    var2 = var0;
                    var2 = var2.ctype;
                    if (!(var50 != var2)) {
                        _fun18343_ip = 809;
                        continue _fun18343
                    }
                case 689:
                    var2 = var0;
                    var2 = var2.ctype;
                    if (!(var37 != var2)) {
                        _fun18343_ip = 809;
                        continue _fun18343
                    }
                case 702:
                    var2 = var0;
                    var2 = var2.ctype;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    if (!(var39 == var2)) {
                        _fun18343_ip = 3357;
                        continue _fun18343
                    }
                case 748:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var76 = var57;
                    var2 = var58;
                    var2 = var76[var2];
                    var75[var3] = var2;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 809:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var77 = var57;
                    var76 = var58;
                    var78 = var54.bind(var5)(var77, var76);
                    var2 = new Array(3);
                    var2[0] = var78;
                    var78 = var76 + var50;
                    var78 = var54.bind(var5)(var77, var78);
                    var2[1] = var78;
                    var76 = var76 + var51;
                    var76 = var54.bind(var5)(var77, var76);
                    var2[2] = var76;
                    var75[var3] = var2;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 908:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var76 = var57;
                    var2 = var58;
                    var76 = var54.bind(var5)(var76, var2);
                    var2 = new Array(1);
                    var2[0] = var76;
                    var75[var3] = var2;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 979:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var76 = var57;
                    var2 = var58;
                    var2 = var76[var2];
                    var75[var3] = var2;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 1040:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var78 = var59;
                    var77 = var78.readUint;
                    var76 = var57;
                    var2 = var58;
                    var2 = var77.bind(var78)(var76, var2);
                    var2 = var2 / var38;
                    var75[var3] = var2;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 1116:
                    var2 = var0;
                    var2 = var2.ctype;
                    if (!(var39 != var2)) {
                        _fun18343_ip = 1356;
                        continue _fun18343
                    }
                case 1132:
                    var2 = var0;
                    var2 = var2.ctype;
                    if (!(var10 != var2)) {
                        _fun18343_ip = 1293;
                        continue _fun18343
                    }
                case 1148:
                    var2 = var0;
                    var2 = var2.ctype;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    if (!(var50 == var2)) {
                        _fun18343_ip = 3357;
                        continue _fun18343
                    }
                case 1194:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var77 = var57;
                    var76 = var58;
                    var78 = var54.bind(var5)(var77, var76);
                    var2 = new Array(3);
                    var2[0] = var78;
                    var78 = var76 + var50;
                    var78 = var54.bind(var5)(var77, var78);
                    var2[1] = var78;
                    var76 = var76 + var51;
                    var76 = var54.bind(var5)(var77, var76);
                    var2[2] = var76;
                    var75[var3] = var2;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 1293:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var76 = var57;
                    var2 = var58;
                    var2 = var54.bind(var5)(var76, var2);
                    var75[var3] = var2;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 1356:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var79 = var59;
                    var78 = var79.readBytes;
                    var77 = var57;
                    var76 = var58;
                    var2 = var60;
                    var2 = var78.bind(var79)(var77, var76, var2);
                    var75[var3] = var2;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 1432:
                    var2 = var0;
                    var3 = var2.tabs;
                    var3 = var3.PLTE;
                    var3 = var3.length;
                    var3 = var3 / var39;
                    var76 = var2.tabs;
                    var75 = var61;
                    var2 = new Array(0);
                    var76[var75] = var2;
                    var2 = 0;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = 0;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var3;
                    if (!(var10 < var67)) {
                        _fun18343_ip = 3357;
                        continue _fun18343
                    }
                case 1511:
                    var75 = var0;
                    var76 = var75.tabs;
                    var75 = var61;
                    var77 = var76[var75];
                    var76 = var77.push;
                    var78 = var57;
                    var79 = var58;
                    var75 = var50 * var2;
                    var75 = var79 + var75;
                    var75 = var54.bind(var5)(var78, var75);
                    var75 = var76.bind(var77)(var75);
                    var2 = var2 + 1;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var3;
                    var73 = var2;
                    if (var73 < var3) {
                        _fun18343_ip = 1511;
                        continue _fun18343
                    }
                case 1594:
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 1599:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var79 = var59;
                    var78 = var79.readBytes;
                    var77 = var57;
                    var76 = var58;
                    var2 = var60;
                    var2 = var78.bind(var79)(var77, var76, var2);
                    var75[var3] = var2;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 1675:
                    var2 = var0;
                    var3 = var2.tabs;
                    var2 = var61;
                    var2 = var3[var2];
                    if (!(var49 == var2)) {
                        _fun18343_ip = 1713;
                        continue _fun18343
                    }
                case 1695:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var2 = {};
                    var75[var3] = var2;
                case 1713:
                    var78 = var58;
                    var62 = var78;
                    var81 = var59;
                    var2 = var81.nextZero;
                    var80 = var57;
                    var2 = var2.bind(var81)(var80, var78);
                    var75 = var81.readASCII;
                    var3 = var2 - var78;
                    var75 = var75.bind(var81)(var80, var78, var3);
                    var3 = var2 + var8;
                    var62 = var3;
                    var2 = var80[var3];
                    var76 = var3 + var8;
                    var76 = var80[var76];
                    var79 = var3 + var50;
                    var62 = var79;
                    var3 = var81.nextZero;
                    var3 = var3.bind(var81)(var80, var79);
                    var77 = var81.readASCII;
                    var76 = var3 - var79;
                    var76 = var77.bind(var81)(var80, var79, var76);
                    var79 = var3 + var8;
                    var62 = var79;
                    var3 = var81.nextZero;
                    var76 = var3.bind(var81)(var80, var79);
                    var77 = var81.readUTF8;
                    var3 = var76 - var79;
                    var3 = var77.bind(var81)(var80, var79, var3);
                    var77 = var60;
                    var3 = var76 + var8;
                    var62 = var3;
                    var3 = var3 - var78;
                    var3 = var77 - var3;
                    if (!(var10 != var2)) {
                        _fun18343_ip = 1920;
                        continue _fun18343
                    }
                case 1867:
                    var77 = _closure2_slot4;
                    var80 = var57;
                    var79 = var80.slice;
                    var78 = var62;
                    var2 = var78 + var3;
                    var2 = var79.bind(var80)(var78, var2);
                    var79 = var77.bind(var5)(var2);
                    var78 = var59;
                    var77 = var78.readUTF8;
                    var2 = var79.length;
                    var2 = var77.bind(var78)(var79, var10, var2);
                    _fun18343_ip = 1942;
                    continue _fun18343;
                case 1920:
                    var80 = var59;
                    var79 = var80.readUTF8;
                    var78 = var57;
                    var77 = var62;
                    var2 = var79.bind(var80)(var78, var77, var3);
                case 1942:
                    var77 = var0;
                    var78 = var77.tabs;
                    var77 = var61;
                    var77 = var78[var77];
                    var77[var75] = var2;
                    var68 = var2;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var76;
                    var70 = var75;
                    var69 = var3;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 1997:
                    var2 = var0;
                    var3 = var2.tabs;
                    var2 = var61;
                    var2 = var3[var2];
                    if (!(var49 == var2)) {
                        _fun18343_ip = 2035;
                        continue _fun18343
                    }
                case 2017:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var2 = {};
                    var75[var3] = var2;
                case 2035:
                    var78 = var59;
                    var2 = var78.nextZero;
                    var77 = var57;
                    var3 = var58;
                    var76 = var2.bind(var78)(var77, var3);
                    var75 = var78.readASCII;
                    var2 = var76 - var3;
                    var75 = var75.bind(var78)(var77, var3, var2);
                    var2 = var60;
                    var2 = var3 + var2;
                    var2 = var2 - var76;
                    var3 = var2 - var8;
                    var2 = var61;
                    if (!(var40 != var2)) {
                        _fun18343_ip = 2153;
                        continue _fun18343
                    }
                case 2095:
                    var77 = _closure2_slot4;
                    var80 = var57;
                    var79 = var80.slice;
                    var78 = var76 + var50;
                    var2 = var76 + var50;
                    var2 = var2 + var3;
                    var2 = var79.bind(var80)(var78, var2);
                    var79 = var77.bind(var5)(var2);
                    var78 = var59;
                    var77 = var78.readUTF8;
                    var2 = var79.length;
                    var2 = var77.bind(var78)(var79, var10, var2);
                    _fun18343_ip = 2176;
                    continue _fun18343;
                case 2153:
                    var80 = var59;
                    var79 = var80.readASCII;
                    var78 = var57;
                    var77 = var76 + var8;
                    var2 = var79.bind(var80)(var78, var77, var3);
                case 2176:
                    var77 = var0;
                    var78 = var77.tabs;
                    var77 = var61;
                    var77 = var78[var77];
                    var77[var75] = var2;
                    var68 = var2;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var76;
                    var70 = var75;
                    var69 = var3;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 2231:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var2 = new Array(0);
                    var75[var3] = var2;
                    var2 = 0;
                case 2253:
                    var3 = var0;
                    var75 = var3.tabs;
                    var3 = var61;
                    var76 = var75[var3];
                    var75 = var76.push;
                    var79 = var59;
                    var78 = var79.readUint;
                    var77 = var57;
                    var80 = var58;
                    var3 = var51 * var2;
                    var3 = var80 + var3;
                    var3 = var78.bind(var79)(var77, var3);
                    var3 = var75.bind(var76)(var3);
                    var2 = var2 + 1;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    var73 = var2;
                    if (var73 < var55) {
                        _fun18343_ip = 2253;
                        continue _fun18343
                    }
                case 2345:
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 2350:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var80 = var59;
                    var2 = var80.readUint;
                    var77 = var57;
                    var76 = var58;
                    var78 = var2.bind(var80)(var77, var76);
                    var2 = new Array(3);
                    var2[0] = var78;
                    var79 = var80.readUint;
                    var78 = var76 + var51;
                    var78 = var79.bind(var80)(var77, var78);
                    var2[1] = var78;
                    var76 = var76 + var55;
                    var76 = var77[var76];
                    var2[2] = var76;
                    var75[var3] = var2;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 2462:
                    var2 = var60;
                    var3 = var2 - var51;
                    var75 = 0;
                    var2 = 0;
                    if (!(var10 < var3)) {
                        _fun18343_ip = 2520;
                        continue _fun18343
                    }
                case 2477:
                    var76 = var16 + var75;
                    var77 = var57;
                    var3 = var58;
                    var3 = var3 + var75;
                    var3 = var3 + var51;
                    var3 = var77[var3];
                    var18[var76] = var3;
                    var75 = var75 + 1;
                    var3 = var60;
                    var3 = var3 - var51;
                    var2 = var75;
                    if (var2 < var3) {
                        _fun18343_ip = 2477;
                        continue _fun18343
                    }
                case 2520:
                    var3 = var60;
                    var3 = var3 - var51;
                    var65 = var16 + var3;
                    var73 = var2;
                    var66 = var18;
                    var74 = var17;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 2563:
                    var3 = var16;
                    if (!(var10 != var16)) {
                        _fun18343_ip = 2652;
                        continue _fun18343
                    }
                case 2570:
                    var79 = var0;
                    var75 = var79.frames;
                    var2 = var79.frames;
                    var2 = var2.length;
                    var2 = var2 - var8;
                    var75 = var75[var2];
                    var78 = _closure2_slot3;
                    var2 = var18.slice;
                    var84 = var2.bind(var18)(var10, var16);
                    var2 = var75.rect;
                    var83 = var2.width;
                    var2 = var75.rect;
                    var82 = var2.height;
                    var86 = undefined;
                    var85 = var79;
                    var2 = var86[var78](var85, var84, var83, var82, var81);
                    var75.data = var2;
                    var3 = 0;
                case 2652:
                    var78 = {};
                    var75 = var57;
                    var2 = var58;
                    var76 = var2 + var45;
                    var76 = var53.bind(var5)(var75, var76);
                    var78.x = var76;
                    var76 = var2 + var44;
                    var76 = var53.bind(var5)(var75, var76);
                    var78.y = var76;
                    var76 = var2 + var51;
                    var76 = var53.bind(var5)(var75, var76);
                    var78.width = var76;
                    var76 = var2 + var55;
                    var76 = var53.bind(var5)(var75, var76);
                    var78.height = var76;
                    var76 = var2 + var43;
                    var76 = var54.bind(var5)(var75, var76);
                    var77 = {};
                    var77.rect = var78;
                    var2 = var2 + var42;
                    var75 = var54.bind(var5)(var75, var2);
                    var78 = var10 == var76;
                    var2 = var41;
                    if (var78) {
                        _fun18343_ip = 2756;
                        continue _fun18343
                    }
                case 2753:
                    var2 = var76;
                case 2756:
                    var2 = var75 / var2;
                    var75 = var48 * var2;
                    var77.delay = var75;
                    var76 = var57;
                    var75 = var58;
                    var78 = var75 + var47;
                    var78 = var76[var78];
                    var77.dispose = var78;
                    var75 = var75 + var46;
                    var75 = var76[var75];
                    var77.blend = var75;
                    var75 = var0;
                    var76 = var75.frames;
                    var75 = var76.push;
                    var75 = var75.bind(var76)(var77);
                    var66 = var18;
                    var74 = var17;
                    var65 = var3;
                    var73 = var52;
                    var72 = var2;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 2855:
                    var2 = var0;
                    var76 = var2.tabs;
                    var75 = var61;
                    var3 = {};
                    var2 = var57;
                    var77 = var58;
                    var78 = var53.bind(var5)(var2, var77);
                    var3.num_frames = var78;
                    var77 = var77 + var51;
                    var77 = var53.bind(var5)(var2, var77);
                    var3.num_plays = var77;
                    var76[var75] = var3;
                    var75 = var56.Uint8Array;
                    var85 = var2.length;
                    var3 = var75.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var75
                        }
                    });
                    var86 = var3;
                    var2 = new var86[var75](var85, var84);
                    var66 = var2 instanceof Object ? var2 : var3;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 2970:
                    var2 = var60;
                    var3 = var10 < var2;
                    var75 = 0;
                    var2 = 0;
                    if (!var3) {
                        _fun18343_ip = 3019;
                        continue _fun18343
                    }
                case 2984:
                    var76 = var17 + var75;
                    var77 = var57;
                    var3 = var58;
                    var3 = var3 + var75;
                    var3 = var77[var3];
                    var4[var76] = var3;
                    var75 = var75 + 1;
                    var3 = var60;
                    var2 = var75;
                    if (var2 < var3) {
                        _fun18343_ip = 2984;
                        continue _fun18343
                    }
                case 3019:
                    var3 = var60;
                    var74 = var17 + var3;
                    var73 = var2;
                    var66 = var18;
                    var65 = var16;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 3058:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var78 = var57;
                    var77 = var78.slice;
                    var76 = var58;
                    var2 = var76 + var51;
                    var2 = var77.bind(var78)(var76, var2);
                    var75[var3] = var2;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 3130:
                    var3 = var58;
                    var62 = var3;
                    var2 = var57;
                    var2 = var2[var3];
                    if (!(var10 != var2)) {
                        _fun18343_ip = 3167;
                        continue _fun18343
                    }
                case 3147:
                    var2 = var62;
                    var3 = var2 + 1;
                    var62 = var3;
                    var2 = var57;
                    var2 = var2[var3];
                    if (var10 != var2) {
                        _fun18343_ip = 3147;
                        continue _fun18343
                    }
                case 3167:
                    var78 = var59;
                    var75 = var78.readASCII;
                    var76 = var57;
                    var77 = var58;
                    var2 = var62;
                    var3 = var2 - var77;
                    var3 = var75.bind(var78)(var76, var77, var3);
                    var3 = var2 + var8;
                    var3 = var76[var3];
                    var75 = var76.slice;
                    var3 = var2 + var50;
                    var2 = var60;
                    var2 = var77 + var2;
                    var63 = var75.bind(var76)(var3, var2);
                    var64 = null;
                case 3228: // try_start_0
                    var3 = _closure2_slot4;
                    var2 = var63;
                    var64 = var3.bind(var5)(var2);
                case 3240: // try_end0
                    _fun18343_ip = 3256;
                    continue _fun18343;
                case 3242: // catch_target0
                    CatchBlockStart(arg_register = 2);
                    var3 = _closure2_slot1;
                    var2 = var63;
                    var64 = var3.bind(var5)(var2);
                case 3256:
                    var2 = var0;
                    var75 = var2.tabs;
                    var3 = var61;
                    var2 = var64;
                    var75[var3] = var2;
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                    _fun18343_ip = 3357;
                    continue _fun18343;
                case 3307:
                    var76 = _closure2_slot8;
                    var75 = var57;
                    var3 = var58;
                    var2 = var0;
                    var2 = var76.bind(var5)(var75, var3, var2);
                    var66 = var18;
                    var74 = var17;
                    var65 = var16;
                    var73 = var52;
                    var72 = var15;
                    var71 = var14;
                    var70 = var13;
                    var69 = var12;
                    var68 = var11;
                    var67 = var9;
                case 3357:
                    var3 = var58;
                    var2 = var60;
                    var3 = var3 + var2;
                    var58 = var3;
                    var76 = var59;
                    var75 = var76.readUint;
                    var2 = var57;
                    var75 = var75.bind(var76)(var2, var3);
                    var3 = var3 + var51;
                    var58 = var3;
                    var2 = var2.length;
                    var18 = var66;
                    var17 = var74;
                    var16 = var65;
                    var52 = var73;
                    var15 = var72;
                    var14 = var71;
                    var13 = var70;
                    var12 = var69;
                    var11 = var68;
                    var9 = var67;
                    var7 = var18;
                    var6 = var16;
                    if (var3 < var2) {
                        _fun18343_ip = 371;
                        continue _fun18343
                    }
                case 3443:
                    if (!(var10 != var6)) {
                        _fun18343_ip = 3527;
                        continue _fun18343
                    }
                case 3447:
                    var9 = var0;
                    var3 = var9.frames;
                    var2 = var9.frames;
                    var2 = var2.length;
                    var2 = var2 - var8;
                    var3 = var3[var2];
                    var8 = _closure2_slot3;
                    var2 = var7.slice;
                    var84 = var2.bind(var7)(var10, var6);
                    var2 = var3.rect;
                    var83 = var2.width;
                    var2 = var3.rect;
                    var82 = var2.height;
                    var86 = undefined;
                    var85 = var9;
                    var2 = var86[var8](var85, var84, var83, var82, var81);
                    var3.data = var2;
                case 3527:
                    var3 = _closure2_slot3;
                    var83 = var0.width;
                    var82 = var0.height;
                    var86 = undefined;
                    var85 = var0;
                    var84 = var4;
                    var1 = var86[var3](var85, var84, var83, var82, var81);
                    var0.data = var1;
                    var1 = delete var0.compress;
                    var1 = delete var0.interlace;
                    var1 = delete var0.filter;
                    return var0;
                case 3576:
                    var0 = 'The input is not a PNG file!';
                    throw var0;
            }
        };
        var0.decode = var5;
        var4 = function(arg0) { // Original name: toRGBA8, environment: var4
            _fun18344: for (var _fun18344_ip = 0;;) switch (_fun18344_ip) {
                case 0:
                    var5 = arg0;
                    var4 = var5.width;
                    var3 = var5.height;
                    var0 = var5.tabs;
                    var0 = var0.acTL;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun18344_ip = 572;
                        continue _fun18344
                    }
                case 34:
                    var0 = new Array(0);
                    var1 = var5.frames;
                    var15 = 0;
                    var1 = var1[var15];
                    var1 = var1.data;
                    if (!(var2 == var1)) {
                        _fun18344_ip = 80;
                        continue _fun18344
                    }
                case 59:
                    var1 = var5.frames;
                    var2 = var1[var15];
                    var1 = var5.data;
                    var2.data = var1;
                case 80:
                    var2 = var4 * var3;
                    var1 = 4;
                    var14 = var2 * var1;
                    var1 = global;
                    var2 = var1.Uint8Array;
                    var6 = var2.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var2
                        }
                    });
                    var32 = var6;
                    var31 = var14;
                    var2 = new var32[var2](var31, var30);
                    var13 = var2 instanceof Object ? var2 : var6;
                    var2 = var1.Uint8Array;
                    var6 = var2.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var2
                        }
                    });
                    var32 = var6;
                    var31 = var14;
                    var2 = new var32[var2](var31, var30);
                    var12 = var2 instanceof Object ? var2 : var6;
                    var1 = var1.Uint8Array;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var32 = var2;
                    var31 = var14;
                    var1 = new var32[var1](var31, var30);
                    var11 = var1 instanceof Object ? var1 : var2;
                    var1 = var5.frames;
                    var1 = var1.length;
                    var1 = var15 < var1;
                    var8 = 2;
                    var7 = 1;
                    var6 = 0;
                    var2 = undefined;
                    if (!var1) {
                        _fun18344_ip = 570;
                        continue _fun18344
                    }
                case 214:
                    var1 = var5.frames;
                    var1 = var1[var6];
                    var16 = var1.rect;
                    var20 = var16.x;
                    var16 = var1.rect;
                    var19 = var16.y;
                    var16 = var1.rect;
                    var18 = var16.width;
                    var16 = var1.rect;
                    var17 = var16.height;
                    var21 = _closure2_slot2;
                    var31 = var1.data;
                    var32 = undefined;
                    var30 = var18;
                    var29 = var17;
                    var28 = var5;
                    var21 = var32[var21](var31, var30, var29, var28, var27);
                    if (!(var15 != var6)) {
                        _fun18344_ip = 322;
                        continue _fun18344
                    }
                case 296:
                    var16 = 0;
                    var2 = 0;
                    if (!(var15 < var14)) {
                        _fun18344_ip = 322;
                        continue _fun18344
                    }
                case 304:
                    var22 = var13[var16];
                    var11[var16] = var22;
                    var16 = var16 + 1;
                    var2 = var16;
                    if (var2 < var14) {
                        _fun18344_ip = 304;
                        continue _fun18344
                    }
                case 322:
                    var16 = var1.blend;
                    if (!(var15 != var16)) {
                        _fun18344_ip = 381;
                        continue _fun18344
                    }
                case 332:
                    var16 = var1.blend;
                    if (!(var7 == var16)) {
                        _fun18344_ip = 417;
                        continue _fun18344
                    }
                case 342:
                    var16 = _closure2_slot9;
                    var32 = undefined;
                    var31 = var21;
                    var30 = var18;
                    var29 = var17;
                    var28 = var13;
                    var27 = var4;
                    var26 = var3;
                    var25 = var20;
                    var24 = var19;
                    var23 = var7;
                    var16 = var32[var16](var31, var30, var29, var28, var27, var26, var25, var24, var23, var22);
                    _fun18344_ip = 417;
                    continue _fun18344;
                case 381:
                    var16 = _closure2_slot9;
                    var32 = undefined;
                    var31 = var21;
                    var30 = var18;
                    var29 = var17;
                    var28 = var13;
                    var27 = var4;
                    var26 = var3;
                    var25 = var20;
                    var24 = var19;
                    var23 = 0;
                    var16 = var32[var16](var31, var30, var29, var28, var27, var26, var25, var24, var23, var22);
                case 417:
                    var21 = var0.push;
                    var22 = var13.buffer;
                    var16 = var22.slice;
                    var16 = var16.bind(var22)(var15);
                    var16 = var21.bind(var0)(var16);
                    var21 = var1.dispose;
                    var16 = var2;
                    if (!(var15 != var21)) {
                        _fun18344_ip = 546;
                        continue _fun18344
                    }
                case 456:
                    var21 = var1.dispose;
                    if (!(var7 != var21)) {
                        _fun18344_ip = 507;
                        continue _fun18344
                    }
                case 466:
                    var1 = var1.dispose;
                    var16 = var2;
                    if (!(var8 == var1)) {
                        _fun18344_ip = 546;
                        continue _fun18344
                    }
                case 479:
                    var1 = 0;
                    var16 = 0;
                    if (!(var16 < var14)) {
                        _fun18344_ip = 546;
                        continue _fun18344
                    }
                case 487:
                    var21 = var11[var1];
                    var13[var1] = var21;
                    var1 = var1 + 1;
                    var16 = var1;
                    if (var16 < var14) {
                        _fun18344_ip = 487;
                        continue _fun18344
                    }
                case 505:
                    _fun18344_ip = 546;
                    continue _fun18344;
                case 507:
                    var1 = _closure2_slot9;
                    var32 = undefined;
                    var31 = var12;
                    var30 = var18;
                    var29 = var17;
                    var28 = var13;
                    var27 = var4;
                    var26 = var3;
                    var25 = var20;
                    var24 = var19;
                    var23 = 0;
                    var1 = var32[var1](var31, var30, var29, var28, var27, var26, var25, var24, var23, var22);
                    var16 = var2;
                case 546:
                    var6 = var6 + 1;
                    var1 = var5.frames;
                    var1 = var1.length;
                    var2 = var16;
                    if (var6 < var1) {
                        _fun18344_ip = 214;
                        continue _fun18344
                    }
                case 570:
                    return var0;
                case 572:
                    var2 = _closure2_slot2;
                    var31 = var5.data;
                    var32 = undefined;
                    var30 = var4;
                    var29 = var3;
                    var28 = var5;
                    var0 = var32[var2](var31, var30, var29, var28, var27);
                    var1 = var0.buffer;
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
            }
        };
        var0.toRGBA8 = var4;
        var0._paeth = var3;
        var0._copyTile = var2;
        var0._bin = var1;
        return var0;
    };
    var0 = undefined;
    var2 = var2.bind(var0)();
    var _closure1_slot0 = var2;
    var1 = function() { // Environment: var1
        _fun18345: for (var _fun18345_ip = 0;;) switch (_fun18345_ip) {
            case 0:
                var0 = function(arg0, arg1, arg2, arg3) { // Original name: addErr, environment: var5
                    var6 = arg0;
                    var2 = arg1;
                    var1 = arg2;
                    var5 = arg3;
                    var3 = var2[var1];
                    var0 = 0;
                    var0 = var6[var0];
                    var0 = var0 * var5;
                    var4 = 4;
                    var0 = var0 >> var4;
                    var0 = var3 + var0;
                    var2[var1] = var0;
                    var0 = 1;
                    var3 = var1 + var0;
                    var7 = var2[var3];
                    var0 = var6[var0];
                    var0 = var0 * var5;
                    var0 = var0 >> var4;
                    var0 = var7 + var0;
                    var2[var3] = var0;
                    var0 = 2;
                    var3 = var1 + var0;
                    var7 = var2[var3];
                    var0 = var6[var0];
                    var0 = var0 * var5;
                    var0 = var0 >> var4;
                    var0 = var7 + var0;
                    var2[var3] = var0;
                    var0 = 3;
                    var1 = var1 + var0;
                    var3 = var2[var1];
                    var0 = var6[var0];
                    var0 = var0 * var5;
                    var0 = var0 >> var4;
                    var0 = var3 + var0;
                    var2[var1] = var0;
                    var0 = undefined;
                    return var0;
                };
                var _closure2_slot5 = var0;
                var0 = function(arg0) { // Original name: N, environment: var5
                    var0 = global;
                    var3 = var0.Math;
                    var2 = var3.max;
                    var5 = var0.Math;
                    var4 = var5.min;
                    var1 = 255;
                    var0 = arg0;
                    var1 = var4.bind(var5)(var1, var0);
                    var0 = 0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot6 = var0;
                var0 = function(arg0, arg1) { // Original name: D, environment: var5
                    var4 = arg0;
                    var5 = arg1;
                    var0 = 0;
                    var1 = var4[var0];
                    var0 = var5[var0];
                    var3 = var1 - var0;
                    var0 = 1;
                    var1 = var4[var0];
                    var0 = var5[var0];
                    var2 = var1 - var0;
                    var0 = 2;
                    var1 = var4[var0];
                    var0 = var5[var0];
                    var1 = var1 - var0;
                    var0 = 3;
                    var4 = var4[var0];
                    var0 = var5[var0];
                    var0 = var4 - var0;
                    var3 = var3 * var3;
                    var2 = var2 * var2;
                    var2 = var3 + var2;
                    var1 = var1 * var1;
                    var1 = var2 + var1;
                    var0 = var0 * var0;
                    var0 = var1 + var0;
                    return var0;
                };
                var _closure2_slot7 = var0;
                var6 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Original name: dither, environment: var5
                    _fun18349: for (var _fun18349_ip = 0;;) switch (_fun18349_ip) {
                        case 0:
                            var29 = arg0;
                            var28 = arg1;
                            var27 = arg2;
                            var26 = arg3;
                            var25 = arg5;
                            var24 = arg6;
                            var0 = null;
                            if (!(var0 == var24)) {
                                _fun18349_ip = 27;
                                continue _fun18349
                            }
                        case 24:
                            var24 = 1;
                        case 27:
                            var23 = var26.length;
                            var22 = new Array(0);
                            var7 = new Array(0);
                            var21 = 0;
                            var3 = var21 < var23;
                            var5 = 255;
                            var2 = 8;
                            var4 = 16;
                            var1 = 24;
                            var0 = 0;
                            if (!var3) {
                                _fun18349_ip = 136;
                                continue _fun18349
                            }
                        case 63:
                            var8 = var26[var0];
                            var6 = var22.push;
                            var9 = var8 >>> var21;
                            var3 = new Array(4);
                            var9 = var9 & var5;
                            var3[0] = var9;
                            var9 = var8 >>> var2;
                            var9 = var9 & var5;
                            var3[1] = var9;
                            var9 = var8 >>> var4;
                            var9 = var9 & var5;
                            var3[2] = var9;
                            var8 = var8 >>> var1;
                            var8 = var8 & var5;
                            var3[3] = var8;
                            var3 = var6.bind(var22)(var3);
                            var0 = var0 + 1;
                            if (var0 < var23) {
                                _fun18349_ip = 63;
                                continue _fun18349
                            }
                        case 136:
                            var8 = var21 < var23;
                            var0 = undefined;
                            var1 = global;
                            var20 = 2;
                            var6 = 4294967295.0;
                            var3 = 0;
                            var2 = undefined;
                            var18 = undefined;
                            var17 = undefined;
                            var16 = undefined;
                            if (!var8) {
                                _fun18349_ip = 305;
                                continue _fun18349
                            }
                        case 176:
                            var14 = var21 < var23;
                            var13 = var6;
                            var11 = 0;
                            var8 = 0;
                            var12 = var13;
                            var10 = 0;
                            var9 = 0;
                            if (!var14) {
                                _fun18349_ip = 254;
                                continue _fun18349
                            }
                        case 197:
                            var30 = _closure2_slot7;
                            var15 = var22[var3];
                            var14 = var22[var8];
                            var15 = var30.bind(var0)(var15, var14);
                            var14 = var8 != var3;
                            if (!var14) {
                                _fun18349_ip = 226;
                                continue _fun18349
                            }
                        case 222:
                            var14 = var15 < var13;
                        case 226:
                            if (!var14) {
                                _fun18349_ip = 235;
                                continue _fun18349
                            }
                        case 229:
                            var13 = var15;
                            var11 = var8;
                        case 235:
                            var8 = var8 + 1;
                            var12 = var13;
                            var10 = var11;
                            var2 = var15;
                            var9 = var8;
                            if (var9 < var23) {
                                _fun18349_ip = 197;
                                continue _fun18349
                            }
                        case 254:
                            var11 = var1.Math;
                            var8 = var11.sqrt;
                            var8 = var8.bind(var11)(var12);
                            var8 = var8 / var20;
                            var8 = var8 * var8;
                            var8 = ~var8;
                            var8 = ~var8;
                            var7[var3] = var8;
                            var3 = var3 + 1;
                            var18 = var10;
                            var17 = var9;
                            var16 = var2;
                            if (var3 < var23) {
                                _fun18349_ip = 176;
                                continue _fun18349
                            }
                        case 305:
                            var6 = var1.Uint32Array;
                            var2 = arg4;
                            var49 = var2.buffer;
                            var3 = var6.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var50 = var3;
                            var2 = new var50[var6](var49, var48);
                            var15 = var2 instanceof Object ? var2 : var3;
                            var3 = var1.Int16Array;
                            var1 = var28 * var27;
                            var14 = 4;
                            var49 = var1 * var14;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var50 = var2;
                            var1 = new var50[var3](var49, var48);
                            var13 = var1 instanceof Object ? var1 : var2;
                            var12 = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
                            var1 = var12.length;
                            var1 = var21 < var1;
                            var3 = 0.5;
                            var2 = 0;
                            var11 = 0;
                            if (!var1) {
                                _fun18349_ip = 452;
                                continue _fun18349
                            }
                        case 413:
                            var1 = var12[var2];
                            var1 = var1 + var3;
                            var1 = var1 / var4;
                            var1 = var1 - var3;
                            var1 = var5 * var1;
                            var12[var2] = var1;
                            var2 = var2 + 1;
                            var1 = var12.length;
                            var11 = var2;
                            if (var11 < var1) {
                                _fun18349_ip = 413;
                                continue _fun18349
                            }
                        case 452:
                            var30 = var21 < var27;
                            var10 = 1;
                            var9 = 5;
                            var8 = 3;
                            var7 = 7;
                            var6 = 16777215;
                            var5 = 0;
                            var4 = undefined;
                            var3 = undefined;
                            var2 = undefined;
                            var1 = undefined;
                            if (!var30) {
                                _fun18349_ip = 1102;
                                continue _fun18349
                            }
                        case 490:
                            var33 = var21 < var28;
                            var32 = var16;
                            var30 = var2;
                            var31 = 0;
                            var16 = var32;
                            var2 = var30;
                            if (!var33) {
                                _fun18349_ip = 1092;
                                continue _fun18349
                            }
                        case 514:
                            var33 = var5 * var28;
                            var33 = var33 + var31;
                            var40 = var14 * var33;
                            if (!(var20 == var24)) {
                                _fun18349_ip = 640;
                                continue _fun18349
                            }
                        case 530:
                            var33 = var8 & var5;
                            var34 = var8 & var31;
                            var33 = var14 * var33;
                            var33 = var33 + var34;
                            var37 = var12[var33];
                            var34 = _closure2_slot6;
                            var33 = var29[var40];
                            var33 = var33 + var37;
                            var33 = var34.bind(var0)(var33);
                            var36 = new Array(4);
                            var36[0] = var33;
                            var33 = var40 + var10;
                            var33 = var29[var33];
                            var33 = var33 + var37;
                            var33 = var34.bind(var0)(var33);
                            var36[1] = var33;
                            var33 = var40 + var20;
                            var33 = var29[var33];
                            var33 = var33 + var37;
                            var33 = var34.bind(var0)(var33);
                            var36[2] = var33;
                            var33 = var40 + var8;
                            var33 = var29[var33];
                            var33 = var33 + var37;
                            var33 = var34.bind(var0)(var33);
                            var36[3] = var33;
                            _fun18349_ip = 750;
                            continue _fun18349;
                        case 640:
                            var35 = _closure2_slot6;
                            var34 = var29[var40];
                            var33 = var13[var40];
                            var33 = var34 + var33;
                            var34 = var35.bind(var0)(var33);
                            var33 = new Array(4);
                            var33[0] = var34;
                            var34 = var40 + var10;
                            var38 = var29[var34];
                            var34 = var13[var34];
                            var34 = var38 + var34;
                            var34 = var35.bind(var0)(var34);
                            var33[1] = var34;
                            var34 = var40 + var20;
                            var38 = var29[var34];
                            var34 = var13[var34];
                            var34 = var38 + var34;
                            var34 = var35.bind(var0)(var34);
                            var33[2] = var34;
                            var34 = var40 + var8;
                            var38 = var29[var34];
                            var34 = var13[var34];
                            var34 = var38 + var34;
                            var34 = var35.bind(var0)(var34);
                            var33[3] = var34;
                            var37 = var32;
                            var36 = var33;
                        case 750:
                            var42 = var21 < var23;
                            var41 = 0;
                            var34 = 0;
                            var33 = var6;
                            var39 = 0;
                            var38 = 0;
                            var35 = var33;
                            if (!var42) {
                                _fun18349_ip = 814;
                                continue _fun18349
                            }
                        case 771:
                            var43 = _closure2_slot7;
                            var42 = var22[var34];
                            var43 = var43.bind(var0)(var36, var42);
                            if (!(var43 < var33)) {
                                _fun18349_ip = 795;
                                continue _fun18349
                            }
                        case 789:
                            var41 = var34;
                            var33 = var43;
                        case 795:
                            var34 = var34 + 1;
                            var39 = var41;
                            var35 = var33;
                            var30 = var43;
                            var38 = var34;
                            if (var38 < var23) {
                                _fun18349_ip = 771;
                                continue _fun18349
                            }
                        case 814:
                            var34 = var22[var39];
                            var41 = var36[var21];
                            var33 = var34[var21];
                            var41 = var41 - var33;
                            var33 = new Array(4);
                            var33[0] = var41;
                            var42 = var36[var10];
                            var41 = var34[var10];
                            var41 = var42 - var41;
                            var33[1] = var41;
                            var42 = var36[var20];
                            var41 = var34[var20];
                            var41 = var42 - var41;
                            var33[2] = var41;
                            var41 = var36[var8];
                            var34 = var34[var8];
                            var34 = var41 - var34;
                            var33[3] = var34;
                            var34 = var30;
                            if (!(var10 == var24)) {
                                _fun18349_ip = 1036;
                                continue _fun18349
                            }
                        case 896:
                            var41 = var28 - var10;
                            if (!(var31 != var41)) {
                                _fun18349_ip = 927;
                                continue _fun18349
                            }
                        case 904:
                            var42 = _closure2_slot5;
                            var47 = var40 + var14;
                            var50 = undefined;
                            var49 = var33;
                            var48 = var13;
                            var46 = var7;
                            var41 = var50[var42](var49, var48, var47, var46, var45);
                        case 927:
                            var41 = var27 - var10;
                            if (!(var5 != var41)) {
                                _fun18349_ip = 1036;
                                continue _fun18349
                            }
                        case 935:
                            if (!(var21 != var31)) {
                                _fun18349_ip = 970;
                                continue _fun18349
                            }
                        case 939:
                            var42 = _closure2_slot5;
                            var41 = var14 * var28;
                            var41 = var40 + var41;
                            var47 = var41 - var14;
                            var50 = undefined;
                            var49 = var33;
                            var48 = var13;
                            var46 = var8;
                            var41 = var50[var42](var49, var48, var47, var46, var45);
                        case 970:
                            var42 = _closure2_slot5;
                            var41 = var14 * var28;
                            var47 = var40 + var41;
                            var50 = undefined;
                            var49 = var33;
                            var48 = var13;
                            var46 = var9;
                            var41 = var50[var42](var49, var48, var47, var46, var45);
                            var41 = var28 - var10;
                            if (!(var31 != var41)) {
                                _fun18349_ip = 1036;
                                continue _fun18349
                            }
                        case 1005:
                            var42 = _closure2_slot5;
                            var41 = var14 * var28;
                            var41 = var40 + var41;
                            var47 = var41 + var14;
                            var50 = undefined;
                            var49 = var33;
                            var48 = var13;
                            var46 = var10;
                            var41 = var50[var42](var49, var48, var47, var46, var45);
                        case 1036:
                            var42 = var40 >> var20;
                            var25[var42] = var39;
                            var41 = var26[var39];
                            var15[var42] = var41;
                            var31 = var31 + 1;
                            var32 = var37;
                            var30 = var34;
                            var11 = var40;
                            var18 = var39;
                            var17 = var38;
                            var16 = var32;
                            var4 = var36;
                            var3 = var35;
                            var2 = var30;
                            var1 = var33;
                            if (var31 < var28) {
                                _fun18349_ip = 514;
                                continue _fun18349
                            }
                        case 1092:
                            var5 = var5 + 1;
                            if (var5 < var27) {
                                _fun18349_ip = 490;
                                continue _fun18349
                            }
                        case 1102:
                            return var0;
                    }
                };
                var _closure2_slot8 = var6;
                var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: _main, environment: var5
                    _fun18350: for (var _fun18350_ip = 0;;) switch (_fun18350_ip) {
                        case 0:
                            var22 = arg0;
                            var21 = arg3;
                            var14 = arg4;
                            var15 = null;
                            if (!(var15 == var14)) {
                                _fun18350_ip = 17;
                                continue _fun18350
                            }
                        case 15:
                            var14 = {};
                        case 17:
                            var1 = _closure2_slot3;
                            var6 = var1.crc;
                            var1 = _closure2_slot1;
                            var4 = var1.writeUint;
                            var1 = _closure2_slot1;
                            var20 = var1.writeUshort;
                            var0 = _closure2_slot1;
                            var7 = var0.writeASCII;
                            var0 = var22.frames;
                            var0 = var0.length;
                            var23 = 1;
                            var19 = var0 > var23;
                            var2 = 0;
                            var0 = 0;
                            if (!var19) {
                                _fun18350_ip = 88;
                                continue _fun18350
                            }
                        case 85:
                            var0 = 20;
                        case 88:
                            var8 = 33;
                            var3 = var8 + var0;
                            var0 = var14.sRGB;
                            var1 = var3;
                            if (!(var15 != var0)) {
                                _fun18350_ip = 115;
                                continue _fun18350
                            }
                        case 108:
                            var0 = 13;
                            var1 = var3 + var0;
                        case 115:
                            var0 = var14.pHYs;
                            var9 = var1;
                            if (!(var15 != var0)) {
                                _fun18350_ip = 135;
                                continue _fun18350
                            }
                        case 128:
                            var0 = 21;
                            var9 = var1 + var0;
                        case 135:
                            var0 = var14.iCCP;
                            var0 = var15 != var0;
                            var3 = undefined;
                            var1 = undefined;
                            var11 = var9;
                            if (!var0) {
                                _fun18350_ip = 206;
                                continue _fun18350
                            }
                        case 155:
                            var0 = global;
                            var10 = var0.pako;
                            var5 = var10.deflate;
                            var0 = var14.iCCP;
                            var5 = var5.bind(var10)(var0);
                            var10 = var5.length;
                            var0 = 21;
                            var10 = var0 + var10;
                            var0 = 4;
                            var0 = var10 + var0;
                            var11 = var9 + var0;
                            var1 = var5;
                        case 206:
                            var0 = var22.ctype;
                            var13 = 3;
                            var5 = var13 == var0;
                            var9 = false;
                            var0 = var11;
                            if (!var5) {
                                _fun18350_ip = 339;
                                continue _fun18350
                            }
                        case 227:
                            var5 = var22.plte;
                            var5 = var5.length;
                            var25 = var2 < var5;
                            var18 = 24;
                            var17 = 255;
                            var16 = false;
                            var12 = 0;
                            var10 = false;
                            if (!var25) {
                                _fun18350_ip = 287;
                                continue _fun18350
                            }
                        case 257:
                            var25 = var22.plte;
                            var25 = var25[var12];
                            var25 = var25 >>> var18;
                            if (!(var25 !== var17)) {
                                _fun18350_ip = 277;
                                continue _fun18350
                            }
                        case 275:
                            var16 = true;
                        case 277:
                            var12 = var12 + 1;
                            var10 = var16;
                            if (var12 < var5) {
                                _fun18350_ip = 257;
                                continue _fun18350
                            }
                        case 287:
                            var16 = var13 * var5;
                            var12 = 0;
                            if (!var10) {
                                _fun18350_ip = 314;
                                continue _fun18350
                            }
                        case 296:
                            var17 = var23 * var5;
                            var5 = 8;
                            var17 = var5 + var17;
                            var5 = 4;
                            var12 = var17 + var5;
                        case 314:
                            var5 = 8;
                            var16 = var5 + var16;
                            var5 = 4;
                            var5 = var16 + var5;
                            var5 = var5 + var12;
                            var0 = var11 + var5;
                            var9 = var10;
                        case 339:
                            var5 = var22.frames;
                            var5 = var5.length;
                            var10 = var2 < var5;
                            var5 = 4;
                            var11 = 12;
                            var17 = 38;
                            var16 = var0;
                            var12 = 0;
                            var0 = var16;
                            if (!var10) {
                                _fun18350_ip = 448;
                                continue _fun18350
                            }
                        case 374:
                            var18 = var16;
                            if (!var19) {
                                _fun18350_ip = 384;
                                continue _fun18350
                            }
                        case 380:
                            var18 = var16 + var17;
                        case 384:
                            var10 = var22.frames;
                            var10 = var10[var12];
                            var10 = var10.cimg;
                            var10 = var10.length;
                            var10 = var10 + var11;
                            var10 = var18 + var10;
                            var18 = var10;
                            if (!(var2 != var12)) {
                                _fun18350_ip = 424;
                                continue _fun18350
                            }
                        case 420:
                            var18 = var10 + var5;
                        case 424:
                            var12 = var12 + 1;
                            var10 = var22.frames;
                            var10 = var10.length;
                            var16 = var18;
                            var0 = var16;
                            if (var12 < var10) {
                                _fun18350_ip = 374;
                                continue _fun18350
                            }
                        case 448:
                            var10 = global;
                            var12 = var10.Uint8Array;
                            var10 = var12.prototype;
                            var10 = Object.create(var10, {
                                constructor: {
                                    value: var12
                                }
                            });
                            var31 = var0 + var11;
                            var32 = var10;
                            var0 = new var32[var12](var31, var30);
                            var0 = var0 instanceof Object ? var0 : var10;
                            var12 = [137, 80, 78, 71, 13, 10, 26, 10];
                            var17 = 8;
                            var10 = 0;
                        case 495:
                            var16 = var12[var10];
                            var0[var10] = var16;
                            var10 = var10 + 1;
                            if (var10 < var17) {
                                _fun18350_ip = 495;
                                continue _fun18350
                            }
                        case 510:
                            var24 = 13;
                            var10 = var4.bind(var3)(var0, var17, var24);
                            var10 = 'IHDR';
                            var10 = var7.bind(var3)(var0, var11, var10);
                            var16 = 16;
                            var10 = arg1;
                            var10 = var4.bind(var3)(var0, var16, var10);
                            var12 = 20;
                            var10 = arg2;
                            var10 = var4.bind(var3)(var0, var12, var10);
                            var10 = var22.depth;
                            var12 = 24;
                            var0[var12] = var10;
                            var18 = var22.ctype;
                            var10 = 25;
                            var0[var10] = var18;
                            var18 = 26;
                            var0[var18] = var2;
                            var10 = 27;
                            var0[var10] = var2;
                            var10 = 28;
                            var0[var10] = var2;
                            var10 = 17;
                            var25 = var6.bind(var3)(var0, var11, var10);
                            var10 = 29;
                            var10 = var4.bind(var3)(var0, var10, var25);
                            var10 = var14.sRGB;
                            var10 = var15 != var10;
                            var25 = var8;
                            if (!var10) {
                                _fun18350_ip = 699;
                                continue _fun18350
                            }
                        case 642:
                            var8 = var4.bind(var3)(var0, var8, var23);
                            var10 = 37;
                            var8 = 'sRGB';
                            var8 = var7.bind(var3)(var0, var10, var8);
                            var26 = var14.sRGB;
                            var8 = 41;
                            var0[var8] = var26;
                            var8 = 5;
                            var10 = var6.bind(var3)(var0, var10, var8);
                            var8 = 42;
                            var8 = var4.bind(var3)(var0, var8, var10);
                            var25 = 46;
                        case 699:
                            var10 = var14.iCCP;
                            var8 = var25;
                            if (!(var15 != var10)) {
                                _fun18350_ip = 820;
                                continue _fun18350
                            }
                        case 712:
                            var10 = var1.length;
                            var10 = var24 + var10;
                            var26 = var4.bind(var3)(var0, var25, var10);
                            var25 = var25 + var5;
                            var26 = 'iCCP';
                            var26 = var7.bind(var3)(var0, var25, var26);
                            var26 = var25 + var5;
                            var25 = 'ICC profile';
                            var25 = var7.bind(var3)(var0, var26, var25);
                            var25 = 11;
                            var26 = var26 + var25;
                            var25 = 2;
                            var25 = var26 + var25;
                            var26 = var0.set;
                            var26 = var26.bind(var0)(var1, var25);
                            var1 = var1.length;
                            var1 = var25 + var1;
                            var25 = var10 + var5;
                            var10 = var1 - var25;
                            var10 = var6.bind(var3)(var0, var10, var25);
                            var10 = var4.bind(var3)(var0, var1, var10);
                            var8 = var1 + var5;
                        case 820:
                            var10 = var14.pHYs;
                            var1 = var8;
                            if (!(var15 != var10)) {
                                _fun18350_ip = 946;
                                continue _fun18350
                            }
                        case 833:
                            var10 = 9;
                            var10 = var4.bind(var3)(var0, var8, var10);
                            var8 = var8 + var5;
                            var10 = 'pHYs';
                            var10 = var7.bind(var3)(var0, var8, var10);
                            var8 = var8 + var5;
                            var10 = var14.pHYs;
                            var10 = var10[var2];
                            var10 = var4.bind(var3)(var0, var8, var10);
                            var8 = var8 + var5;
                            var10 = var14.pHYs;
                            var10 = var10[var23];
                            var10 = var4.bind(var3)(var0, var8, var10);
                            var8 = var8 + var5;
                            var25 = var14.pHYs;
                            var10 = 2;
                            var10 = var25[var10];
                            var0[var8] = var10;
                            var8 = var8 + 1;
                            var10 = var8 - var24;
                            var10 = var6.bind(var3)(var0, var10, var24);
                            var10 = var4.bind(var3)(var0, var8, var10);
                            var1 = var8 + var5;
                        case 946:
                            var8 = var1;
                            if (!var19) {
                                _fun18350_ip = 1054;
                                continue _fun18350
                            }
                        case 952:
                            var10 = var4.bind(var3)(var0, var1, var17);
                            var1 = var1 + var5;
                            var10 = 'acTL';
                            var10 = var7.bind(var3)(var0, var1, var10);
                            var1 = var1 + var5;
                            var10 = var22.frames;
                            var10 = var10.length;
                            var10 = var4.bind(var3)(var0, var1, var10);
                            var1 = var1 + var5;
                            var10 = var14.loop;
                            var15 = var15 != var10;
                            var10 = 0;
                            if (!var15) {
                                _fun18350_ip = 1021;
                                continue _fun18350
                            }
                        case 1015:
                            var10 = var14.loop;
                        case 1021:
                            var10 = var4.bind(var3)(var0, var1, var10);
                            var1 = var1 + var5;
                            var10 = var1 - var11;
                            var10 = var6.bind(var3)(var0, var10, var11);
                            var10 = var4.bind(var3)(var0, var1, var10);
                            var8 = var1 + var5;
                        case 1054:
                            var10 = var22.ctype;
                            var1 = var8;
                            if (!(var13 == var10)) {
                                _fun18350_ip = 1349;
                                continue _fun18350
                            }
                        case 1070:
                            var10 = var22.plte;
                            var10 = var10.length;
                            var11 = var13 * var10;
                            var11 = var4.bind(var3)(var0, var8, var11);
                            var8 = var8 + var5;
                            var11 = 'PLTE';
                            var11 = var7.bind(var3)(var0, var8, var11);
                            var14 = var8 + var5;
                            var24 = var2 < var10;
                            var11 = 255;
                            var15 = 2;
                            var8 = 0;
                            if (!var24) {
                                _fun18350_ip = 1195;
                                continue _fun18350
                            }
                        case 1126:
                            var24 = var13 * var8;
                            var25 = var22.plte;
                            var25 = var25[var8];
                            var28 = var11 & var25;
                            var26 = var25 >>> var17;
                            var25 = var25 >>> var16;
                            var24 = var14 + var24;
                            var27 = var24 + var2;
                            var0[var27] = var28;
                            var27 = var26 & var11;
                            var26 = var24 + var23;
                            var0[var26] = var27;
                            var25 = var25 & var11;
                            var24 = var24 + var15;
                            var0[var24] = var25;
                            var8 = var8 + 1;
                            if (var8 < var10) {
                                _fun18350_ip = 1126;
                                continue _fun18350
                            }
                        case 1195:
                            var8 = var13 * var10;
                            var8 = var14 + var8;
                            var14 = var13 * var10;
                            var13 = var13 * var10;
                            var14 = var8 - var14;
                            var14 = var14 - var5;
                            var13 = var13 + var5;
                            var13 = var6.bind(var3)(var0, var14, var13);
                            var13 = var4.bind(var3)(var0, var8, var13);
                            var8 = var8 + var5;
                            var1 = var8;
                            if (!var9) {
                                _fun18350_ip = 1349;
                                continue _fun18350
                            }
                        case 1247:
                            var9 = var4.bind(var3)(var0, var8, var10);
                            var8 = var8 + var5;
                            var9 = 'tRNS';
                            var9 = var7.bind(var3)(var0, var8, var9);
                            var8 = var8 + var5;
                            var13 = var2 < var10;
                            var9 = 0;
                            if (!var13) {
                                _fun18350_ip = 1315;
                                continue _fun18350
                            }
                        case 1282:
                            var14 = var8 + var9;
                            var13 = var22.plte;
                            var13 = var13[var9];
                            var13 = var13 >>> var12;
                            var13 = var13 & var11;
                            var0[var14] = var13;
                            var9 = var9 + 1;
                            if (var9 < var10) {
                                _fun18350_ip = 1282;
                                continue _fun18350
                            }
                        case 1315:
                            var8 = var8 + var10;
                            var9 = var8 - var10;
                            var10 = var10 + var5;
                            var9 = var9 - var5;
                            var9 = var6.bind(var3)(var0, var9, var10);
                            var9 = var4.bind(var3)(var0, var8, var9);
                            var1 = var8 + var5;
                        case 1349:
                            var8 = var22.frames;
                            var8 = var8.length;
                            var8 = var2 < var8;
                            var17 = 'IDAT';
                            var16 = 'fdAT';
                            var15 = 'fcTL';
                            var14 = 2;
                            var13 = 1000;
                            var12 = 30;
                            var11 = var1;
                            var10 = 0;
                            var9 = 0;
                            var1 = var11;
                            if (!var8) {
                                _fun18350_ip = 1779;
                                continue _fun18350
                            }
                        case 1410:
                            var8 = var22.frames;
                            var23 = var8[var10];
                            var8 = var11;
                            var25 = var9;
                            if (!var19) {
                                _fun18350_ip = 1633;
                                continue _fun18350
                            }
                        case 1432:
                            var24 = var4.bind(var3)(var0, var11, var18);
                            var24 = var11 + var5;
                            var26 = var7.bind(var3)(var0, var24, var15);
                            var26 = var24 + var5;
                            var27 = parseFloat(var9);
                            var25 = var27 + 1;
                            var27 = var4.bind(var3)(var0, var26, var27);
                            var26 = var26 + var5;
                            var27 = var23.rect;
                            var27 = var27.width;
                            var27 = var4.bind(var3)(var0, var26, var27);
                            var26 = var26 + var5;
                            var27 = var23.rect;
                            var27 = var27.height;
                            var27 = var4.bind(var3)(var0, var26, var27);
                            var26 = var26 + var5;
                            var27 = var23.rect;
                            var27 = var27.x;
                            var27 = var4.bind(var3)(var0, var26, var27);
                            var26 = var26 + var5;
                            var27 = var23.rect;
                            var27 = var27.y;
                            var27 = var4.bind(var3)(var0, var26, var27);
                            var26 = var26 + var5;
                            var27 = var21[var10];
                            var27 = var20.bind(var3)(var0, var26, var27);
                            var26 = var26 + var14;
                            var27 = var20.bind(var3)(var0, var26, var13);
                            var26 = var26 + var14;
                            var27 = var23.dispose;
                            var0[var26] = var27;
                            var26 = var26 + 1;
                            var27 = var23.blend;
                            var0[var26] = var27;
                            var26 = var26 + 1;
                            var27 = var26 - var12;
                            var27 = var6.bind(var3)(var0, var27, var12);
                            var27 = var4.bind(var3)(var0, var26, var27);
                            var8 = var26 + var5;
                        case 1633:
                            var26 = var23.cimg;
                            var23 = var26.length;
                            var27 = var2 == var10;
                            var24 = var5;
                            if (!var27) {
                                _fun18350_ip = 1656;
                                continue _fun18350
                            }
                        case 1654:
                            var24 = 0;
                        case 1656:
                            var24 = var23 + var24;
                            var24 = var4.bind(var3)(var0, var8, var24);
                            var24 = var8 + var5;
                            var8 = var16;
                            if (!var27) {
                                _fun18350_ip = 1680;
                                continue _fun18350
                            }
                        case 1677:
                            var8 = var17;
                        case 1680:
                            var8 = var7.bind(var3)(var0, var24, var8);
                            var27 = var24 + var5;
                            var8 = var27;
                            var9 = var25;
                            if (!(var2 != var10)) {
                                _fun18350_ip = 1718;
                                continue _fun18350
                            }
                        case 1701:
                            var28 = parseFloat(var25);
                            var9 = var28 + 1;
                            var28 = var4.bind(var3)(var0, var27, var28);
                            var8 = var27 + var5;
                        case 1718:
                            var25 = var0.set;
                            var25 = var25.bind(var0)(var26, var8);
                            var8 = var8 + var23;
                            var23 = var8 - var24;
                            var23 = var6.bind(var3)(var0, var24, var23);
                            var23 = var4.bind(var3)(var0, var8, var23);
                            var11 = var8 + var5;
                            var10 = var10 + 1;
                            var8 = var22.frames;
                            var8 = var8.length;
                            var1 = var11;
                            if (var10 < var8) {
                                _fun18350_ip = 1410;
                                continue _fun18350
                            }
                        case 1779:
                            var2 = var4.bind(var3)(var0, var1, var2);
                            var1 = var1 + var5;
                            var2 = 'IEND';
                            var2 = var7.bind(var3)(var0, var1, var2);
                            var2 = var1 + var5;
                            var1 = var2 - var5;
                            var1 = var6.bind(var3)(var0, var1, var5);
                            var1 = var4.bind(var3)(var0, var2, var1);
                            var0 = var0.buffer;
                            return var0;
                    }
                };
                var _closure2_slot9 = var0;
                var0 = function(arg0, arg1, arg2) { // Original name: compressPNG, environment: var5
                    _fun18351: for (var _fun18351_ip = 0;;) switch (_fun18351_ip) {
                        case 0:
                            var7 = arg0;
                            var6 = arg1;
                            var5 = arg2;
                            var0 = var7.frames;
                            var0 = var0.length;
                            var4 = 0;
                            var1 = var4 < var0;
                            var3 = global;
                            var0 = undefined;
                            if (!var1) {
                                _fun18351_ip = 175;
                                continue _fun18351
                            }
                        case 39:
                            var1 = var7.frames;
                            var8 = var1[var4];
                            var1 = var8.rect;
                            var1 = var1.width;
                            var1 = var8.rect;
                            var13 = var1.height;
                            var10 = var3.Uint8Array;
                            var1 = var8.bpl;
                            var1 = var13 * var1;
                            var20 = var1 + var13;
                            var9 = var10.prototype;
                            var9 = Object.create(var9, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var21 = var9;
                            var1 = new var21[var10](var20, var19);
                            var16 = var1 instanceof Object ? var1 : var9;
                            var11 = _closure2_slot14;
                            var20 = var8.img;
                            var18 = var8.bpp;
                            var17 = var8.bpl;
                            var21 = undefined;
                            var19 = var13;
                            var15 = var6;
                            var14 = var5;
                            var1 = var21[var11](var20, var19, var18, var17, var16, var15, var14, var13);
                            var8.cimg = var1;
                            var4 = var4 + 1;
                            var1 = var7.frames;
                            var1 = var1.length;
                            if (var4 < var1) {
                                _fun18351_ip = 39;
                                continue _fun18351
                            }
                        case 175:
                            return var0;
                    }
                };
                var _closure2_slot10 = var0;
                var7 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: compress, environment: var5
                    _fun18352: for (var _fun18352_ip = 0;;) switch (_fun18352_ip) {
                        case 0:
                            var0 = arg0;
                            var12 = arg1;
                            var11 = arg2;
                            var5 = arg3;
                            var3 = arg4;
                            var27 = 0;
                            var2 = var3[var27];
                            var26 = 1;
                            var10 = var3[var26];
                            var25 = 2;
                            var38 = var3[var25];
                            var24 = 3;
                            var7 = var3[var24];
                            var23 = 4;
                            var22 = var3[var23];
                            var1 = 5;
                            var9 = var3[var1];
                            var1 = var0.length;
                            var6 = var27 < var1;
                            var3 = 255;
                            var4 = undefined;
                            var21 = global;
                            var13 = var3;
                            var8 = 0;
                            var1 = var13;
                            var20 = undefined;
                            if (!var6) {
                                _fun18352_ip = 184;
                                continue _fun18352
                            }
                        case 85:
                            var15 = var21.Uint8Array;
                            var115 = var0[var8];
                            var14 = var15.prototype;
                            var14 = Object.create(var14, {
                                constructor: {
                                    value: var15
                                }
                            });
                            var116 = var14;
                            var6 = new var116[var15](var115, var114);
                            var18 = var6 instanceof Object ? var6 : var14;
                            var17 = var18.length;
                            var19 = var27 < var17;
                            var16 = var13;
                            var6 = 0;
                            var15 = var16;
                            var14 = 0;
                            if (!var19) {
                                _fun18352_ip = 163;
                                continue _fun18352
                            }
                        case 137:
                            var19 = var6 + var24;
                            var19 = var18[var19];
                            var16 = var16 & var19;
                            var6 = var6 + var23;
                            var15 = var16;
                            var14 = var6;
                            if (var14 < var17) {
                                _fun18352_ip = 137;
                                continue _fun18352
                            }
                        case 163:
                            var8 = var8 + 1;
                            var6 = var0.length;
                            var13 = var15;
                            var20 = var14;
                            var1 = var13;
                            if (var8 < var6) {
                                _fun18352_ip = 85;
                                continue _fun18352
                            }
                        case 184:
                            var19 = var3 != var1;
                            var1 = new Array(0);
                            var3 = var0.length;
                            var3 = var27 < var3;
                            var37 = 1000000000;
                            var36 = -1;
                            var35 = 0;
                            var34 = undefined;
                            var33 = undefined;
                            var32 = undefined;
                            var31 = undefined;
                            var30 = undefined;
                            var29 = undefined;
                            var28 = undefined;
                            var18 = undefined;
                            var17 = undefined;
                            var16 = undefined;
                            var15 = undefined;
                            var14 = undefined;
                            var13 = undefined;
                            var6 = undefined;
                            if (!var3) {
                                _fun18352_ip = 1424;
                                continue _fun18352
                            }
                        case 252:
                            var40 = var21.Uint8Array;
                            var115 = var0[var35];
                            var39 = var40.prototype;
                            var39 = Object.create(var39, {
                                constructor: {
                                    value: var40
                                }
                            });
                            var116 = var39;
                            var3 = new var116[var40](var115, var114);
                            var68 = var3 instanceof Object ? var3 : var39;
                            var40 = var21.Uint32Array;
                            var115 = var68.buffer;
                            var39 = var40.prototype;
                            var39 = Object.create(var39, {
                                constructor: {
                                    value: var40
                                }
                            });
                            var116 = var39;
                            var3 = new var116[var40](var115, var114);
                            var73 = var3 instanceof Object ? var3 : var39;
                            var49 = 0;
                            if (!var2) {
                                _fun18352_ip = 322;
                                continue _fun18352
                            }
                        case 319:
                            var49 = var26;
                        case 322:
                            if (!(var27 == var35)) {
                                _fun18352_ip = 378;
                                continue _fun18352
                            }
                        case 326:
                            var3 = var68.slice;
                            var50 = var3.bind(var68)(var27);
                            var55 = 0;
                            var54 = 0;
                            var53 = var12;
                            var52 = var11;
                            var47 = var29;
                            var46 = var28;
                            var45 = var18;
                            var44 = var17;
                            var43 = var16;
                            var42 = var15;
                            var41 = var14;
                            var40 = var13;
                            var39 = var6;
                            _fun18352_ip = 1332;
                            continue _fun18352;
                        case 378:
                            if (var38) {
                                _fun18352_ip = 412;
                                continue _fun18352
                            }
                        case 381:
                            if (var2) {
                                _fun18352_ip = 412;
                                continue _fun18352
                            }
                        case 384:
                            if (!(var26 != var35)) {
                                _fun18352_ip = 412;
                                continue _fun18352
                            }
                        case 388:
                            var3 = var35 - var25;
                            var3 = var1[var3];
                            var3 = var3.dispose;
                            var3 = var27 != var3;
                            var59 = var25;
                            if (!var3) {
                                _fun18352_ip = 415;
                                continue _fun18352
                            }
                        case 412:
                            var59 = var26;
                        case 415:
                            var72 = 0;
                            var71 = 0;
                            var70 = var12;
                            var69 = var11;
                            var67 = 0;
                            var66 = var37;
                            var65 = 0;
                            var60 = var14;
                            var51 = var6;
                            var64 = 0;
                            var63 = 0;
                            var62 = var70;
                            var61 = var69;
                            var58 = 0;
                            var57 = var66;
                            var56 = 0;
                            var48 = var60;
                            var3 = var51;
                            if (!(var27 < var59)) {
                                _fun18352_ip = 958;
                                continue _fun18352
                            }
                        case 468:
                            var76 = var21.Uint8Array;
                            var74 = var35 - var26;
                            var74 = var74 - var65;
                            var115 = var0[var74];
                            var74 = var76.prototype;
                            var116 = Object.create(var74, {
                                constructor: {
                                    value: var76
                                }
                            });
                            var74 = new var116[var76](var115, var114);
                            var76 = var21.Uint32Array;
                            var74 = var35 - var26;
                            var74 = var74 - var65;
                            var115 = var0[var74];
                            var75 = var76.prototype;
                            var75 = Object.create(var75, {
                                constructor: {
                                    value: var76
                                }
                            });
                            var116 = var75;
                            var74 = new var116[var76](var115, var114);
                            var83 = var74 instanceof Object ? var74 : var75;
                            var87 = var27 < var11;
                            var76 = var51;
                            var86 = var12;
                            var85 = var11;
                            var82 = var36;
                            var81 = var82;
                            var77 = 0;
                            var74 = var86;
                            var84 = var85;
                            var80 = var81;
                            var79 = var80;
                            var78 = 0;
                            var75 = var76;
                            if (!var87) {
                                _fun18352_ip = 780;
                                continue _fun18352
                            }
                        case 581:
                            var97 = var27 < var12;
                            var96 = var86;
                            var95 = var85;
                            var94 = var82;
                            var88 = var81;
                            var87 = 0;
                            var93 = var96;
                            var92 = var95;
                            var91 = var94;
                            var90 = var88;
                            var89 = 0;
                            if (!var97) {
                                _fun18352_ip = 737;
                                continue _fun18352
                            }
                        case 616:
                            var97 = var77 * var12;
                            var98 = var97 + var87;
                            var103 = var73[var98];
                            var97 = var83[var98];
                            var102 = var96;
                            var101 = var95;
                            var100 = var94;
                            var99 = var88;
                            if (!(var103 != var97)) {
                                _fun18352_ip = 700;
                                continue _fun18352
                            }
                        case 648:
                            var105 = var96;
                            if (!(var87 < var96)) {
                                _fun18352_ip = 658;
                                continue _fun18352
                            }
                        case 655:
                            var105 = var87;
                        case 658:
                            var103 = var94;
                            if (!(var87 > var94)) {
                                _fun18352_ip = 668;
                                continue _fun18352
                            }
                        case 665:
                            var103 = var87;
                        case 668:
                            var104 = var95;
                            if (!(var77 < var95)) {
                                _fun18352_ip = 678;
                                continue _fun18352
                            }
                        case 675:
                            var104 = var77;
                        case 678:
                            var97 = var88;
                            if (!(var77 > var88)) {
                                _fun18352_ip = 688;
                                continue _fun18352
                            }
                        case 685:
                            var97 = var77;
                        case 688:
                            var99 = var97;
                            var102 = var105;
                            var101 = var104;
                            var100 = var103;
                        case 700:
                            var87 = var87 + 1;
                            var96 = var102;
                            var95 = var101;
                            var94 = var100;
                            var88 = var99;
                            var93 = var96;
                            var92 = var95;
                            var91 = var94;
                            var90 = var88;
                            var76 = var98;
                            var89 = var87;
                            if (var89 < var12) {
                                _fun18352_ip = 616;
                                continue _fun18352
                            }
                        case 737:
                            var77 = var77 + 1;
                            var86 = var93;
                            var85 = var92;
                            var82 = var91;
                            var81 = var90;
                            var60 = var89;
                            var74 = var86;
                            var84 = var85;
                            var80 = var82;
                            var79 = var81;
                            var75 = var76;
                            var78 = var77;
                            if (var78 < var11) {
                                _fun18352_ip = 581;
                                continue _fun18352
                            }
                        case 780:
                            var77 = var60;
                            if (!(var36 == var80)) {
                                _fun18352_ip = 795;
                                continue _fun18352
                            }
                        case 787:
                            var74 = 0;
                            var84 = 0;
                            var80 = 0;
                            var79 = 0;
                        case 795:
                            var82 = var74;
                            var81 = var84;
                            if (!var10) {
                                _fun18352_ip = 842;
                                continue _fun18352
                            }
                        case 804:
                            var76 = ~var74;
                            var85 = var26 & var76;
                            var76 = var74;
                            if (var85) {
                                _fun18352_ip = 820;
                                continue _fun18352
                            }
                        case 817:
                            var76 = var74 - 1;
                        case 820:
                            var74 = ~var84;
                            var85 = var26 & var74;
                            var74 = var84;
                            if (var85) {
                                _fun18352_ip = 836;
                                continue _fun18352
                            }
                        case 833:
                            var74 = var84 - 1;
                        case 836:
                            var81 = var74;
                            var82 = var76;
                        case 842:
                            var74 = var80 - var82;
                            var76 = var74 + var26;
                            var74 = var79 - var81;
                            var74 = var74 + var26;
                            var76 = var76 * var74;
                            if (!(var76 < var66)) {
                                _fun18352_ip = 894;
                                continue _fun18352
                            }
                        case 866:
                            var74 = var80 - var82;
                            var70 = var74 + var26;
                            var74 = var79 - var81;
                            var69 = var74 + var26;
                            var72 = var82;
                            var71 = var81;
                            var67 = var65;
                            var66 = var76;
                        case 894:
                            var65 = var65 + 1;
                            var60 = var77;
                            var51 = var75;
                            var64 = var72;
                            var63 = var71;
                            var62 = var70;
                            var61 = var69;
                            var58 = var67;
                            var57 = var66;
                            var29 = var83;
                            var28 = var82;
                            var18 = var81;
                            var17 = var80;
                            var16 = var79;
                            var15 = var78;
                            var48 = var60;
                            var13 = var76;
                            var3 = var51;
                            var56 = var65;
                            if (var56 < var59) {
                                _fun18352_ip = 468;
                                continue _fun18352
                            }
                        case 958:
                            var65 = var21.Uint8Array;
                            var51 = var35 - var26;
                            var51 = var51 - var58;
                            var115 = var0[var51];
                            var60 = var65.prototype;
                            var60 = Object.create(var60, {
                                constructor: {
                                    value: var65
                                }
                            });
                            var116 = var60;
                            var51 = new var116[var65](var115, var114);
                            var51 = var51 instanceof Object ? var51 : var60;
                            if (!(var26 == var58)) {
                                _fun18352_ip = 1014;
                                continue _fun18352
                            }
                        case 1000:
                            var60 = var35 - var26;
                            var60 = var1[var60];
                            var60.dispose = var25;
                        case 1014:
                            var66 = var21.Uint8Array;
                            var60 = var62 * var61;
                            var115 = var60 * var23;
                            var65 = var66.prototype;
                            var65 = Object.create(var65, {
                                constructor: {
                                    value: var66
                                }
                            });
                            var116 = var65;
                            var60 = new var116[var66](var115, var114);
                            var65 = var60 instanceof Object ? var60 : var65;
                            var67 = _closure2_slot0;
                            var109 = -var64;
                            var108 = -var63;
                            var116 = undefined;
                            var115 = var51;
                            var114 = var12;
                            var113 = var11;
                            var112 = var65;
                            var111 = var62;
                            var110 = var61;
                            var107 = 0;
                            var60 = var116[var67](var115, var114, var113, var112, var111, var110, var109, var108, var107, var106);
                            var67 = _closure2_slot0;
                            var109 = -var64;
                            var108 = -var63;
                            var115 = var68;
                            var114 = var12;
                            var113 = var11;
                            var112 = var65;
                            var111 = var62;
                            var110 = var61;
                            var107 = var24;
                            var66 = var116[var67](var115, var114, var113, var112, var111, var110, var109, var108, var107, var106);
                            var60 = 0;
                            if (!var66) {
                                _fun18352_ip = 1127;
                                continue _fun18352
                            }
                        case 1124:
                            var60 = var26;
                        case 1127:
                            if (!(var26 !== var60)) {
                                _fun18352_ip = 1229;
                                continue _fun18352
                            }
                        case 1131:
                            var69 = _closure2_slot0;
                            var109 = -var64;
                            var108 = -var63;
                            var116 = undefined;
                            var115 = var68;
                            var114 = var12;
                            var113 = var11;
                            var112 = var65;
                            var111 = var62;
                            var110 = var61;
                            var107 = 0;
                            var66 = var116[var69](var115, var114, var113, var112, var111, var110, var109, var108, var107, var106);
                            var50 = var65;
                            var55 = var64;
                            var54 = var63;
                            var53 = var62;
                            var52 = var61;
                            var49 = var60;
                            var34 = var59;
                            var33 = var58;
                            var32 = var57;
                            var31 = var56;
                            var30 = var51;
                            var47 = var29;
                            var46 = var28;
                            var45 = var18;
                            var44 = var17;
                            var43 = var16;
                            var42 = var15;
                            var41 = var48;
                            var40 = var13;
                            var39 = var3;
                            _fun18352_ip = 1332;
                            continue _fun18352;
                        case 1229:
                            var67 = _closure2_slot13;
                            var66 = {};
                            var66.x = var64;
                            var66.y = var63;
                            var66.width = var62;
                            var66.height = var61;
                            var116 = undefined;
                            var115 = var68;
                            var114 = var12;
                            var113 = var11;
                            var112 = var65;
                            var111 = var66;
                            var66 = var116[var67](var115, var114, var113, var112, var111, var110);
                            var50 = var65;
                            var55 = var64;
                            var54 = var63;
                            var53 = var62;
                            var52 = var61;
                            var49 = var60;
                            var34 = var59;
                            var33 = var58;
                            var32 = var57;
                            var31 = var56;
                            var30 = var51;
                            var47 = var29;
                            var46 = var28;
                            var45 = var18;
                            var44 = var17;
                            var43 = var16;
                            var42 = var15;
                            var41 = var48;
                            var40 = var13;
                            var39 = var3;
                        case 1332:
                            var48 = var1.push;
                            var3 = {};
                            var51 = {};
                            var51.x = var55;
                            var51.y = var54;
                            var51.width = var53;
                            var51.height = var52;
                            var3.rect = var51;
                            var3.img = var50;
                            var3.blend = var49;
                            var3.dispose = var27;
                            var3 = var48.bind(var1)(var3);
                            var35 = var35 + 1;
                            var3 = var0.length;
                            var29 = var47;
                            var28 = var46;
                            var18 = var45;
                            var17 = var44;
                            var16 = var43;
                            var15 = var42;
                            var14 = var41;
                            var13 = var40;
                            var6 = var39;
                            if (var35 < var3) {
                                _fun18352_ip = 252;
                                continue _fun18352
                            }
                        case 1424:
                            if (!var2) {
                                _fun18352_ip = 1759;
                                continue _fun18352
                            }
                        case 1430:
                            var2 = var1.length;
                            var2 = var27 < var2;
                            var6 = 0;
                            var3 = undefined;
                            if (!var2) {
                                _fun18352_ip = 1759;
                                continue _fun18352
                            }
                        case 1449:
                            var2 = var1[var6];
                            var13 = var2.blend;
                            if (!(var26 != var13)) {
                                _fun18352_ip = 1744;
                                continue _fun18352
                            }
                        case 1466:
                            var15 = var2.rect;
                            var2 = var6 - var26;
                            var2 = var1[var2];
                            var13 = var2.rect;
                            var17 = var21.Math;
                            var16 = var17.min;
                            var14 = var15.x;
                            var2 = var13.x;
                            var17 = var16.bind(var17)(var14, var2);
                            var18 = var21.Math;
                            var16 = var18.min;
                            var14 = var15.y;
                            var2 = var13.y;
                            var14 = var16.bind(var18)(var14, var2);
                            var2 = {};
                            var2.x = var17;
                            var2.y = var14;
                            var29 = var21.Math;
                            var28 = var29.max;
                            var18 = var15.x;
                            var16 = var15.width;
                            var18 = var18 + var16;
                            var30 = var13.x;
                            var16 = var13.width;
                            var16 = var30 + var16;
                            var16 = var28.bind(var29)(var18, var16);
                            var16 = var16 - var17;
                            var2.width = var16;
                            var17 = var21.Math;
                            var16 = var17.max;
                            var18 = var15.y;
                            var15 = var15.height;
                            var15 = var18 + var15;
                            var18 = var13.y;
                            var13 = var13.height;
                            var13 = var18 + var13;
                            var13 = var16.bind(var17)(var15, var13);
                            var13 = var13 - var14;
                            var2.height = var13;
                            var13 = var6 - var26;
                            var13 = var1[var13];
                            var13.dispose = var26;
                            var13 = var6 - var26;
                            if (!(var13 !== var27)) {
                                _fun18352_ip = 1710;
                                continue _fun18352
                            }
                        case 1678:
                            var14 = _closure2_slot12;
                            var111 = var6 - var26;
                            var116 = undefined;
                            var115 = var0;
                            var114 = var12;
                            var113 = var11;
                            var112 = var1;
                            var110 = var2;
                            var109 = var10;
                            var13 = var116[var14](var115, var114, var113, var112, var111, var110, var109, var108);
                        case 1710:
                            var13 = _closure2_slot12;
                            var116 = undefined;
                            var115 = var0;
                            var114 = var12;
                            var113 = var11;
                            var112 = var1;
                            var111 = var6;
                            var110 = var2;
                            var109 = var10;
                            var13 = var116[var13](var115, var114, var113, var112, var111, var110, var109, var108);
                            var3 = var2;
                        case 1744:
                            var6 = var6 + 1;
                            var2 = var1.length;
                            if (var6 < var2) {
                                _fun18352_ip = 1449;
                                continue _fun18352
                            }
                        case 1759:
                            var0 = var0.length;
                            if (!(var26 != var0)) {
                                _fun18352_ip = 1824;
                                continue _fun18352
                            }
                        case 1768:
                            var0 = var1.length;
                            var0 = var27 < var0;
                            var2 = 0;
                            if (!var0) {
                                _fun18352_ip = 1824;
                                continue _fun18352
                            }
                        case 1782:
                            var0 = var1[var2];
                            var3 = var0.rect;
                            var3 = var3.width;
                            var0 = var0.rect;
                            var0 = var0.height;
                            var0 = var3 * var0;
                            var2 = var2 + 1;
                            var0 = var1.length;
                            if (var2 < var0) {
                                _fun18352_ip = 1782;
                                continue _fun18352
                            }
                        case 1824:
                            var13 = {};
                            var2 = new Array(0);
                            var18 = new Array(0);
                            if (!(var27 == var5)) {
                                _fun18352_ip = 2154;
                                continue _fun18352
                            }
                        case 1841:
                            var0 = var1.length;
                            var0 = var27 < var0;
                            var12 = 300;
                            var11 = null;
                            var10 = 0;
                            var6 = undefined;
                            var3 = undefined;
                            if (!var0) {
                                _fun18352_ip = 2785;
                                continue _fun18352
                            }
                        case 1870:
                            var0 = var1[var10];
                            var16 = var21.Uint32Array;
                            var14 = var0.img;
                            var115 = var14.buffer;
                            var15 = var16.prototype;
                            var15 = Object.create(var15, {
                                constructor: {
                                    value: var16
                                }
                            });
                            var116 = var15;
                            var14 = new var116[var16](var115, var114);
                            var29 = var14 instanceof Object ? var14 : var15;
                            var0 = var0.rect;
                            var28 = var0.width;
                            var17 = var29.length;
                            var0 = var21.Uint8Array;
                            var14 = var0.prototype;
                            var14 = Object.create(var14, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var116 = var14;
                            var115 = var17;
                            var0 = new var116[var0](var115, var114);
                            var16 = var0 instanceof Object ? var0 : var14;
                            var0 = var18.push;
                            var0 = var0.bind(var18)(var16);
                            var30 = var27 < var17;
                            var0 = var3;
                            var15 = 0;
                            var14 = 0;
                            var3 = var0;
                            if (!var30) {
                                _fun18352_ip = 2131;
                                continue _fun18352
                            }
                        case 1987:
                            var32 = var29[var15];
                            if (!(var27 != var15)) {
                                _fun18352_ip = 2007;
                                continue _fun18352
                            }
                        case 1995:
                            var30 = var15 - var26;
                            var30 = var29[var30];
                            if (!(var32 != var30)) {
                                _fun18352_ip = 2094;
                                continue _fun18352
                            }
                        case 2007:
                            if (!(var15 > var28)) {
                                _fun18352_ip = 2023;
                                continue _fun18352
                            }
                        case 2011:
                            var30 = var15 - var28;
                            var30 = var29[var30];
                            if (!(var32 != var30)) {
                                _fun18352_ip = 2077;
                                continue _fun18352
                            }
                        case 2023:
                            var31 = var13[var32];
                            if (!(var11 == var31)) {
                                _fun18352_ip = 2071;
                                continue _fun18352
                            }
                        case 2031:
                            var33 = var2.length;
                            var13[var32] = var33;
                            var30 = var2.push;
                            var30 = var30.bind(var2)(var32);
                            var30 = var2.length;
                            var31 = var33;
                            var14 = var15;
                            var6 = var32;
                            var3 = var31;
                            if (!(!(var30 >= var12))) {
                                _fun18352_ip = 2131;
                                continue _fun18352
                            }
                        case 2071:
                            var16[var15] = var31;
                            _fun18352_ip = 2109;
                            continue _fun18352;
                        case 2077:
                            var30 = var15 - var28;
                            var30 = var16[var30];
                            var16[var15] = var30;
                            var31 = var0;
                            _fun18352_ip = 2109;
                            continue _fun18352;
                        case 2094:
                            var30 = var15 - var26;
                            var30 = var16[var30];
                            var16[var15] = var30;
                            var31 = var0;
                        case 2109:
                            var15 = var15 + 1;
                            var0 = var31;
                            var6 = var32;
                            var3 = var0;
                            var14 = var15;
                            if (var14 < var17) {
                                _fun18352_ip = 1987;
                                continue _fun18352
                            }
                        case 2131:
                            var10 = var10 + 1;
                            var0 = var1.length;
                            var20 = var14;
                            if (var10 < var0) {
                                _fun18352_ip = 1870;
                                continue _fun18352
                            }
                        case 2149:
                            _fun18352_ip = 2785;
                            continue _fun18352;
                        case 2154:
                            var15 = new Array(0);
                            var0 = var1.length;
                            var0 = var27 < var0;
                            var3 = 0;
                            if (!var0) {
                                _fun18352_ip = 2210;
                                continue _fun18352
                            }
                        case 2172:
                            var6 = var15.push;
                            var0 = var1[var3];
                            var0 = var0.img;
                            var0 = var0.buffer;
                            var0 = var6.bind(var15)(var0);
                            var3 = var3 + 1;
                            var0 = var1.length;
                            if (var3 < var0) {
                                _fun18352_ip = 2172;
                                continue _fun18352
                            }
                        case 2210:
                            var0 = var15.length;
                            var0 = var27 < var0;
                            var10 = 0;
                            var3 = 0;
                            var6 = 0;
                            if (!var0) {
                                _fun18352_ip = 2257;
                                continue _fun18352
                            }
                        case 2228:
                            var0 = var15[var3];
                            var0 = var0.byteLength;
                            var10 = var10 + var0;
                            var3 = var3 + 1;
                            var0 = var15.length;
                            var6 = var10;
                            if (var3 < var0) {
                                _fun18352_ip = 2228;
                                continue _fun18352
                            }
                        case 2257:
                            var0 = var21.Uint8Array;
                            var3 = var0.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var116 = var3;
                            var115 = var6;
                            var0 = new var116[var0](var115, var114);
                            var0 = var0 instanceof Object ? var0 : var3;
                            var3 = var15.length;
                            var3 = var27 < var3;
                            var14 = 0;
                            var13 = 0;
                            var12 = undefined;
                            var11 = undefined;
                            var10 = undefined;
                            var6 = undefined;
                            if (!var3) {
                                _fun18352_ip = 2478;
                                continue _fun18352
                            }
                        case 2313:
                            var17 = var21.Uint8Array;
                            var115 = var15[var14];
                            var16 = var17.prototype;
                            var16 = Object.create(var16, {
                                constructor: {
                                    value: var17
                                }
                            });
                            var116 = var16;
                            var3 = new var116[var17](var115, var114);
                            var17 = var3 instanceof Object ? var3 : var16;
                            var3 = var17.length;
                            var28 = var27 < var3;
                            var16 = 0;
                            if (!var28) {
                                _fun18352_ip = 2459;
                                continue _fun18352
                            }
                        case 2357:
                            var31 = var17[var16];
                            var28 = var16 + var26;
                            var30 = var17[var28];
                            var28 = var16 + var25;
                            var29 = var17[var28];
                            var28 = var16 + var24;
                            var28 = var17[var28];
                            if (!(var27 == var28)) {
                                _fun18352_ip = 2395;
                                continue _fun18352
                            }
                        case 2389:
                            var31 = 0;
                            var30 = 0;
                            var29 = 0;
                        case 2395:
                            var32 = var13 + var16;
                            var0[var32] = var31;
                            var32 = var13 + var16;
                            var32 = var32 + var26;
                            var0[var32] = var30;
                            var32 = var13 + var16;
                            var32 = var32 + var25;
                            var0[var32] = var29;
                            var32 = var13 + var16;
                            var32 = var32 + var24;
                            var0[var32] = var28;
                            var16 = var16 + var23;
                            var12 = var31;
                            var11 = var30;
                            var10 = var29;
                            var6 = var28;
                            if (var16 < var3) {
                                _fun18352_ip = 2357;
                                continue _fun18352
                            }
                        case 2459:
                            var13 = var13 + var3;
                            var14 = var14 + 1;
                            var3 = var15.length;
                            if (var14 < var3) {
                                _fun18352_ip = 2313;
                                continue _fun18352
                            }
                        case 2478:
                            var3 = var0.buffer;
                            var0 = _closure2_slot16;
                            var6 = var0.bind(var4)(var3, var5);
                            var0 = var6.plte;
                            var0 = var0.length;
                            var0 = var27 < var0;
                            var3 = 0;
                            if (!var0) {
                                _fun18352_ip = 2564;
                                continue _fun18352
                            }
                        case 2514:
                            var5 = var2.push;
                            var0 = var6.plte;
                            var0 = var0[var3];
                            var0 = var0.est;
                            var0 = var0.rgba;
                            var0 = var5.bind(var2)(var0);
                            var3 = var3 + 1;
                            var0 = var6.plte;
                            var0 = var0.length;
                            if (var3 < var0) {
                                _fun18352_ip = 2514;
                                continue _fun18352
                            }
                        case 2564:
                            var0 = var1.length;
                            var0 = var27 < var0;
                            var5 = 0;
                            var3 = 0;
                            var20 = 0;
                            if (!var0) {
                                _fun18352_ip = 2785;
                                continue _fun18352
                            }
                        case 2585:
                            var11 = var1[var5];
                            var0 = var11.img;
                            var10 = var0.length;
                            var15 = var21.Uint8Array;
                            var0 = var6.inds;
                            var115 = var0.buffer;
                            var114 = var3 >> var25;
                            var113 = var10 >> var25;
                            var12 = var15.prototype;
                            var12 = Object.create(var12, {
                                constructor: {
                                    value: var15
                                }
                            });
                            var116 = var12;
                            var0 = new var116[var15](var115, var114, var113, var112);
                            var17 = var0 instanceof Object ? var0 : var12;
                            var0 = var18.push;
                            var0 = var0.bind(var18)(var17);
                            var13 = var21.Uint8Array;
                            var115 = var6.abuf;
                            var12 = var13.prototype;
                            var12 = Object.create(var12, {
                                constructor: {
                                    value: var13
                                }
                            });
                            var116 = var12;
                            var114 = var3;
                            var113 = var10;
                            var0 = new var116[var13](var115, var114, var113, var112);
                            var13 = var0 instanceof Object ? var0 : var12;
                            var0 = var3;
                            if (!var9) {
                                _fun18352_ip = 2747;
                                continue _fun18352
                            }
                        case 2700:
                            var16 = _closure2_slot8;
                            var115 = var11.img;
                            var12 = var11.rect;
                            var114 = var12.width;
                            var12 = var11.rect;
                            var113 = var12.height;
                            var116 = undefined;
                            var112 = var2;
                            var111 = var13;
                            var110 = var17;
                            var12 = var116[var16](var115, var114, var113, var112, var111, var110, var109);
                        case 2747:
                            var12 = var11.img;
                            var11 = var12.set;
                            var11 = var11.bind(var12)(var13);
                            var3 = var0 + var10;
                            var5 = var5 + 1;
                            var0 = var1.length;
                            var20 = var5;
                            if (var20 < var0) {
                                _fun18352_ip = 2585;
                                continue _fun18352
                            }
                        case 2785:
                            var17 = var2.length;
                            var16 = 256;
                            var0 = var17 <= var16;
                            if (!var0) {
                                _fun18352_ip = 2807;
                                continue _fun18352
                            }
                        case 2803:
                            var0 = var27 == var22;
                        case 2807:
                            var15 = 8;
                            var3 = var15;
                            if (!var0) {
                                _fun18352_ip = 2875;
                                continue _fun18352
                            }
                        case 2816:
                            var0 = var17 <= var25;
                            var6 = var26;
                            if (var0) {
                                _fun18352_ip = 2858;
                                continue _fun18352
                            }
                        case 2826:
                            var5 = var17 <= var23;
                            var0 = var25;
                            if (var5) {
                                _fun18352_ip = 2855;
                                continue _fun18352
                            }
                        case 2836:
                            var5 = 16;
                            var8 = var17 <= var5;
                            var5 = var15;
                            if (!var8) {
                                _fun18352_ip = 2852;
                                continue _fun18352
                            }
                        case 2849:
                            var5 = var23;
                        case 2852:
                            var0 = var5;
                        case 2855:
                            var6 = var0;
                        case 2858:
                            var5 = var21.Math;
                            var0 = var5.max;
                            var3 = var0.bind(var5)(var6, var7);
                        case 2875:
                            var0 = var1.length;
                            var0 = var27 < var0;
                            var14 = 6;
                            var13 = 7;
                            var12 = var14;
                            var11 = 0;
                            var10 = undefined;
                            var9 = undefined;
                            var8 = undefined;
                            var7 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            var4 = var12;
                            if (!var0) {
                                _fun18352_ip = 3715;
                                continue _fun18352
                            }
                        case 2916:
                            var36 = var1[var11];
                            var0 = var36.rect;
                            var0 = var0.x;
                            var0 = var36.rect;
                            var0 = var0.y;
                            var0 = var36.rect;
                            var47 = var0.width;
                            var0 = var36.rect;
                            var46 = var0.height;
                            var43 = var36.img;
                            var29 = var21.Uint32Array;
                            var115 = var43.buffer;
                            var0 = var29.prototype;
                            var116 = Object.create(var0, {
                                constructor: {
                                    value: var29
                                }
                            });
                            var0 = new var116[var29](var115, var114);
                            var40 = var23 * var47;
                            if (!(var17 <= var16)) {
                                _fun18352_ip = 3010;
                                continue _fun18352
                            }
                        case 3003:
                            if (!(var27 != var22)) {
                                _fun18352_ip = 3241;
                                continue _fun18352
                            }
                        case 3010:
                            var28 = var12;
                            var35 = var20;
                            var38 = var43;
                            var37 = var40;
                            var0 = var23;
                            var34 = var10;
                            var33 = var9;
                            var32 = var8;
                            var31 = var7;
                            var30 = var6;
                            var29 = var5;
                            if (!(var27 == var19)) {
                                _fun18352_ip = 3655;
                                continue _fun18352
                            }
                        case 3050:
                            var39 = var1.length;
                            var39 = var26 == var39;
                            var28 = var12;
                            var35 = var20;
                            var38 = var43;
                            var37 = var40;
                            var0 = var23;
                            var34 = var10;
                            var33 = var9;
                            var32 = var8;
                            var31 = var7;
                            var30 = var6;
                            var29 = var5;
                            if (!var39) {
                                _fun18352_ip = 3655;
                                continue _fun18352
                            }
                        case 3098:
                            var41 = var21.Uint8Array;
                            var39 = var47 * var46;
                            var115 = var39 * var24;
                            var40 = var41.prototype;
                            var40 = Object.create(var40, {
                                constructor: {
                                    value: var41
                                }
                            });
                            var116 = var40;
                            var39 = new var116[var41](var115, var114);
                            var40 = var39 instanceof Object ? var39 : var40;
                            var39 = var47 * var46;
                            var41 = 0;
                            var42 = 0;
                            if (!(var27 < var39)) {
                                _fun18352_ip = 3202;
                                continue _fun18352
                            }
                        case 3144:
                            var44 = var24 * var41;
                            var45 = var23 * var41;
                            var48 = var43[var45];
                            var40[var44] = var48;
                            var48 = var45 + var26;
                            var49 = var43[var48];
                            var48 = var44 + var26;
                            var40[var48] = var49;
                            var45 = var45 + var25;
                            var45 = var43[var45];
                            var44 = var44 + var25;
                            var40[var44] = var45;
                            var41 = var41 + 1;
                            var42 = var41;
                            if (var42 < var39) {
                                _fun18352_ip = 3144;
                                continue _fun18352
                            }
                        case 3202:
                            var37 = var24 * var47;
                            var35 = var42;
                            var28 = var25;
                            var38 = var40;
                            var0 = var24;
                            var34 = var38;
                            var33 = var9;
                            var32 = var8;
                            var31 = var7;
                            var30 = var6;
                            var29 = var39;
                            _fun18352_ip = 3655;
                            continue _fun18352;
                        case 3241:
                            var41 = var21.Math;
                            var40 = var41.ceil;
                            var39 = var3 * var47;
                            var39 = var39 / var15;
                            var43 = var40.bind(var41)(var39);
                            var41 = var21.Uint8Array;
                            var115 = var43 * var46;
                            var40 = var41.prototype;
                            var40 = Object.create(var40, {
                                constructor: {
                                    value: var41
                                }
                            });
                            var116 = var40;
                            var39 = new var116[var41](var115, var114);
                            var42 = var39 instanceof Object ? var39 : var40;
                            var41 = var18[var11];
                            var48 = var27 < var46;
                            var45 = 0;
                            var44 = var6;
                            var40 = 0;
                            var39 = var44;
                            if (!var48) {
                                _fun18352_ip = 3622;
                                continue _fun18352
                            }
                        case 3320:
                            var51 = var45 * var43;
                            var50 = var45 * var47;
                            if (!(var15 != var3)) {
                                _fun18352_ip = 3563;
                                continue _fun18352
                            }
                        case 3335:
                            if (!(var23 != var3)) {
                                _fun18352_ip = 3496;
                                continue _fun18352
                            }
                        case 3342:
                            if (!(var25 != var3)) {
                                _fun18352_ip = 3426;
                                continue _fun18352
                            }
                        case 3346:
                            if (!(var26 == var3)) {
                                _fun18352_ip = 3600;
                                continue _fun18352
                            }
                        case 3353:
                            var49 = var27 < var47;
                            var48 = 0;
                            var44 = 0;
                            if (!var49) {
                                _fun18352_ip = 3600;
                                continue _fun18352
                            }
                        case 3367:
                            var49 = var48 >> var24;
                            var52 = var51 + var49;
                            var53 = var42[var52];
                            var49 = var50 + var48;
                            var54 = var41[var49];
                            var49 = var13 & var48;
                            var49 = var26 * var49;
                            var49 = var13 - var49;
                            var49 = var54 << var49;
                            var49 = var53 | var49;
                            var42[var52] = var49;
                            var48 = var48 + 1;
                            var44 = var48;
                            if (var44 < var47) {
                                _fun18352_ip = 3367;
                                continue _fun18352
                            }
                        case 3421:
                            _fun18352_ip = 3600;
                            continue _fun18352;
                        case 3426:
                            var49 = var27 < var47;
                            var48 = 0;
                            var44 = 0;
                            if (!var49) {
                                _fun18352_ip = 3600;
                                continue _fun18352
                            }
                        case 3440:
                            var49 = var48 >> var25;
                            var52 = var51 + var49;
                            var53 = var42[var52];
                            var49 = var50 + var48;
                            var54 = var41[var49];
                            var49 = var24 & var48;
                            var49 = var25 * var49;
                            var49 = var14 - var49;
                            var49 = var54 << var49;
                            var49 = var53 | var49;
                            var42[var52] = var49;
                            var48 = var48 + 1;
                            var44 = var48;
                            if (var44 < var47) {
                                _fun18352_ip = 3440;
                                continue _fun18352
                            }
                        case 3494:
                            _fun18352_ip = 3600;
                            continue _fun18352;
                        case 3496:
                            var49 = var27 < var47;
                            var48 = 0;
                            var44 = 0;
                            if (!var49) {
                                _fun18352_ip = 3600;
                                continue _fun18352
                            }
                        case 3507:
                            var49 = var48 >> var26;
                            var52 = var51 + var49;
                            var53 = var42[var52];
                            var49 = var50 + var48;
                            var54 = var41[var49];
                            var49 = var26 & var48;
                            var49 = var23 * var49;
                            var49 = var23 - var49;
                            var49 = var54 << var49;
                            var49 = var53 | var49;
                            var42[var52] = var49;
                            var48 = var48 + 1;
                            var44 = var48;
                            if (var44 < var47) {
                                _fun18352_ip = 3507;
                                continue _fun18352
                            }
                        case 3561:
                            _fun18352_ip = 3600;
                            continue _fun18352;
                        case 3563:
                            var49 = var27 < var47;
                            var48 = 0;
                            var44 = 0;
                            if (!var49) {
                                _fun18352_ip = 3600;
                                continue _fun18352
                            }
                        case 3574:
                            var52 = var51 + var48;
                            var49 = var50 + var48;
                            var49 = var41[var49];
                            var42[var52] = var49;
                            var48 = var48 + 1;
                            var44 = var48;
                            if (var44 < var47) {
                                _fun18352_ip = 3574;
                                continue _fun18352
                            }
                        case 3600:
                            var45 = var45 + 1;
                            var20 = var51;
                            var7 = var50;
                            var39 = var44;
                            var40 = var45;
                            if (var40 < var46) {
                                _fun18352_ip = 3320;
                                continue _fun18352
                            }
                        case 3622:
                            var35 = var20;
                            var32 = var40;
                            var31 = var7;
                            var30 = var39;
                            var28 = var24;
                            var38 = var42;
                            var37 = var43;
                            var0 = var26;
                            var34 = var38;
                            var33 = var41;
                            var29 = var5;
                        case 3655:
                            var36.img = var38;
                            var36.bpl = var37;
                            var36.bpp = var0;
                            var11 = var11 + 1;
                            var0 = var1.length;
                            var12 = var28;
                            var20 = var35;
                            var10 = var34;
                            var9 = var33;
                            var8 = var32;
                            var7 = var31;
                            var6 = var30;
                            var5 = var29;
                            var4 = var12;
                            if (var11 < var0) {
                                _fun18352_ip = 2916;
                                continue _fun18352
                            }
                        case 3715:
                            var0 = {};
                            var0.ctype = var4;
                            var0.depth = var3;
                            var0.plte = var2;
                            var0.frames = var1;
                            return var0;
                    }
                };
                var _closure2_slot11 = var7;
                var0 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Original name: _updateFrame, environment: var5
                    _fun18353: for (var _fun18353_ip = 0;;) switch (_fun18353_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = arg1;
                            var5 = arg2;
                            var7 = arg3;
                            var8 = arg4;
                            var31 = arg5;
                            var9 = global;
                            var4 = var9.Uint8Array;
                            var3 = var9.Uint32Array;
                            var2 = 1;
                            var1 = var8 - var2;
                            var61 = var0[var1];
                            var10 = var4.prototype;
                            var10 = Object.create(var10, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var62 = var10;
                            var1 = new var62[var4](var61, var60);
                            var14 = var1 instanceof Object ? var1 : var10;
                            var1 = var8 - var2;
                            var61 = var0[var1];
                            var10 = var3.prototype;
                            var10 = Object.create(var10, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var62 = var10;
                            var1 = new var62[var3](var61, var60);
                            var30 = var1 instanceof Object ? var1 : var10;
                            var10 = var8 + var2;
                            var1 = var0.length;
                            var1 = var10 < var1;
                            var29 = null;
                            var28 = null;
                            if (!var1) {
                                _fun18353_ip = 139;
                                continue _fun18353
                            }
                        case 111:
                            var1 = var8 + var2;
                            var61 = var0[var1];
                            var10 = var4.prototype;
                            var10 = Object.create(var10, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var62 = var10;
                            var1 = new var62[var4](var61, var60);
                            var28 = var1 instanceof Object ? var1 : var10;
                        case 139:
                            var61 = var0[var8];
                            var1 = var4.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var62 = var1;
                            var0 = new var62[var4](var61, var60);
                            var4 = var0 instanceof Object ? var0 : var1;
                            var61 = var4.buffer;
                            var1 = var3.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var62 = var1;
                            var0 = new var62[var3](var61, var60);
                            var27 = var0 instanceof Object ? var0 : var1;
                            var0 = var31.height;
                            var13 = 0;
                            var12 = var13 < var0;
                            var1 = -1;
                            var0 = undefined;
                            var10 = 4;
                            var26 = 3;
                            var25 = var6;
                            var24 = var5;
                            var23 = var1;
                            var22 = var23;
                            var21 = 0;
                            var20 = undefined;
                            var19 = undefined;
                            var18 = undefined;
                            var16 = undefined;
                            var3 = var25;
                            var17 = var24;
                            var15 = var22;
                            var11 = var15;
                            if (!var12) {
                                _fun18353_ip = 550;
                                continue _fun18353
                            }
                        case 254:
                            var12 = var31.width;
                            var12 = var13 < var12;
                            var40 = var25;
                            var39 = var24;
                            var38 = var23;
                            var37 = var22;
                            var36 = 0;
                            var35 = var40;
                            var34 = var39;
                            var33 = var38;
                            var32 = var37;
                            if (!var12) {
                                _fun18353_ip = 511;
                                continue _fun18353
                            }
                        case 295:
                            var12 = var31.x;
                            var44 = var12 + var36;
                            var12 = var31.y;
                            var43 = var12 + var21;
                            var12 = var43 * var6;
                            var42 = var12 + var44;
                            var41 = var27[var42];
                            var12 = var13 == var41;
                            if (var12) {
                                _fun18353_ip = 393;
                                continue _fun18353
                            }
                        case 332:
                            var45 = var8 - var2;
                            var45 = var7[var45];
                            var45 = var45.dispose;
                            var45 = var13 == var45;
                            if (!var45) {
                                _fun18353_ip = 361;
                                continue _fun18353
                            }
                        case 353:
                            var46 = var30[var42];
                            var45 = var46 == var41;
                        case 361:
                            if (!var45) {
                                _fun18353_ip = 390;
                                continue _fun18353
                            }
                        case 364:
                            var46 = var29 == var28;
                            if (var46) {
                                _fun18353_ip = 387;
                                continue _fun18353
                            }
                        case 371:
                            var47 = var10 * var42;
                            var47 = var47 + var26;
                            var47 = var28[var47];
                            var46 = var13 != var47;
                        case 387:
                            var45 = var46;
                        case 390:
                            var12 = var45;
                        case 393:
                            var48 = var40;
                            var47 = var39;
                            var46 = var38;
                            var45 = var37;
                            if (var12) {
                                _fun18353_ip = 460;
                                continue _fun18353
                            }
                        case 408:
                            var51 = var40;
                            if (!(var44 < var40)) {
                                _fun18353_ip = 418;
                                continue _fun18353
                            }
                        case 415:
                            var51 = var44;
                        case 418:
                            var49 = var38;
                            if (!(var44 > var38)) {
                                _fun18353_ip = 428;
                                continue _fun18353
                            }
                        case 425:
                            var49 = var44;
                        case 428:
                            var50 = var39;
                            if (!(var43 < var39)) {
                                _fun18353_ip = 438;
                                continue _fun18353
                            }
                        case 435:
                            var50 = var43;
                        case 438:
                            var12 = var37;
                            if (!(var43 > var37)) {
                                _fun18353_ip = 448;
                                continue _fun18353
                            }
                        case 445:
                            var12 = var43;
                        case 448:
                            var45 = var12;
                            var48 = var51;
                            var47 = var50;
                            var46 = var49;
                        case 460:
                            var36 = var36 + 1;
                            var12 = var31.width;
                            var40 = var48;
                            var39 = var47;
                            var38 = var46;
                            var37 = var45;
                            var35 = var40;
                            var34 = var39;
                            var33 = var38;
                            var32 = var37;
                            var20 = var44;
                            var19 = var43;
                            var18 = var42;
                            var16 = var41;
                            if (var36 < var12) {
                                _fun18353_ip = 295;
                                continue _fun18353
                            }
                        case 511:
                            var21 = var21 + 1;
                            var12 = var31.height;
                            var25 = var35;
                            var24 = var34;
                            var23 = var33;
                            var22 = var32;
                            var3 = var25;
                            var17 = var24;
                            var15 = var23;
                            var11 = var22;
                            if (var21 < var12) {
                                _fun18353_ip = 254;
                                continue _fun18353
                            }
                        case 550:
                            if (!(var1 == var15)) {
                                _fun18353_ip = 562;
                                continue _fun18353
                            }
                        case 554:
                            var3 = 0;
                            var17 = 0;
                            var15 = 0;
                            var11 = 0;
                        case 562:
                            var16 = arg6;
                            var12 = var3;
                            var1 = var17;
                            if (!var16) {
                                _fun18353_ip = 612;
                                continue _fun18353
                            }
                        case 574:
                            var16 = ~var3;
                            var18 = var2 & var16;
                            var16 = var3;
                            if (var18) {
                                _fun18353_ip = 590;
                                continue _fun18353
                            }
                        case 587:
                            var16 = var3 - 1;
                        case 590:
                            var3 = ~var17;
                            var18 = var2 & var3;
                            var3 = var17;
                            if (var18) {
                                _fun18353_ip = 606;
                                continue _fun18353
                            }
                        case 603:
                            var3 = var17 - 1;
                        case 606:
                            var1 = var3;
                            var12 = var16;
                        case 612:
                            var3 = {};
                            var3.x = var12;
                            var3.y = var1;
                            var12 = var15 - var12;
                            var12 = var12 + var2;
                            var3.width = var12;
                            var1 = var11 - var1;
                            var1 = var1 + var2;
                            var3.height = var1;
                            var1 = var7[var8];
                            var1.rect = var3;
                            var1.blend = var2;
                            var11 = var9.Uint8Array;
                            var12 = var3.width;
                            var9 = var3.height;
                            var9 = var12 * var9;
                            var61 = var9 * var10;
                            var10 = var11.prototype;
                            var10 = Object.create(var10, {
                                constructor: {
                                    value: var11
                                }
                            });
                            var62 = var10;
                            var9 = new var62[var11](var61, var60);
                            var9 = var9 instanceof Object ? var9 : var10;
                            var1.img = var9;
                            var2 = var8 - var2;
                            var2 = var7[var2];
                            var2 = var2.dispose;
                            if (!(var13 != var2)) {
                                _fun18353_ip = 788;
                                continue _fun18353
                            }
                        case 730:
                            var11 = _closure2_slot0;
                            var58 = var1.img;
                            var57 = var3.width;
                            var56 = var3.height;
                            var2 = var3.x;
                            var55 = -var2;
                            var2 = var3.y;
                            var54 = -var2;
                            var62 = undefined;
                            var61 = var4;
                            var60 = var6;
                            var59 = var5;
                            var53 = 0;
                            var2 = var62[var11](var61, var60, var59, var58, var57, var56, var55, var54, var53, var52);
                            _fun18353_ip = 870;
                            continue _fun18353;
                        case 788:
                            var12 = _closure2_slot0;
                            var58 = var1.img;
                            var57 = var3.width;
                            var56 = var3.height;
                            var7 = var3.x;
                            var55 = -var7;
                            var7 = var3.y;
                            var54 = -var7;
                            var62 = undefined;
                            var61 = var14;
                            var60 = var6;
                            var59 = var5;
                            var53 = 0;
                            var7 = var62[var12](var61, var60, var59, var58, var57, var56, var55, var54, var53, var52);
                            var2 = _closure2_slot13;
                            var58 = var1.img;
                            var61 = var4;
                            var60 = var6;
                            var59 = var5;
                            var57 = var3;
                            var1 = var62[var2](var61, var60, var59, var58, var57, var56);
                        case 870:
                            return var0;
                    }
                };
                var _closure2_slot12 = var0;
                var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: _prepareDiff, environment: var5
                    var0 = arg4;
                    var10 = _closure2_slot0;
                    var15 = var0.width;
                    var14 = var0.height;
                    var1 = var0.x;
                    var13 = -var1;
                    var0 = var0.y;
                    var12 = -var0;
                    var0 = undefined;
                    var19 = arg0;
                    var18 = arg1;
                    var17 = arg2;
                    var16 = arg3;
                    var11 = 2;
                    var20 = undefined;
                    var1 = var20[var10](var19, var18, var17, var16, var15, var14, var13, var12, var11, var10);
                    return var0;
                };
                var _closure2_slot13 = var0;
                var0 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Original name: _filterZero, environment: var5
                    _fun18355: for (var _fun18355_ip = 0;;) switch (_fun18355_ip) {
                        case 0:
                            var13 = arg0;
                            var12 = arg1;
                            var11 = arg2;
                            var10 = arg3;
                            var9 = arg4;
                            var2 = arg5;
                            var1 = new Array(0);
                            var8 = [0, 1, 2, 3, 4];
                            var0 = -1;
                            if (!(var0 == var2)) {
                                _fun18355_ip = 79;
                                continue _fun18355
                            }
                        case 40:
                            var3 = var12 * var10;
                            var0 = 500000;
                            var0 = var3 > var0;
                            if (var0) {
                                _fun18355_ip = 64;
                                continue _fun18355
                            }
                        case 57:
                            var3 = 1;
                            var0 = var3 == var11;
                        case 64:
                            if (!var0) {
                                _fun18355_ip = 90;
                                continue _fun18355
                            }
                        case 67:
                            var8 = [0];
                            _fun18355_ip = 90;
                            continue _fun18355;
                        case 79:
                            var0 = new Array(1);
                            var0[0] = var2;
                            var8 = var0;
                        case 90:
                            var2 = arg6;
                            var7 = undefined;
                            if (!var2) {
                                _fun18355_ip = 110;
                                continue _fun18355
                            }
                        case 98:
                            var2 = {};
                            var3 = 0;
                            var2.level = var3;
                            var7 = var2;
                        case 110:
                            var3 = var9.length;
                            var2 = 10000000;
                            if (!(var3 > var2)) {
                                _fun18355_ip = 145;
                                continue _fun18355
                            }
                        case 125:
                            var2 = global;
                            var3 = var2.window;
                            var4 = var3.UZIP;
                            var3 = null;
                            if (!(var3 == var4)) {
                                _fun18355_ip = 155;
                                continue _fun18355
                            }
                        case 145:
                            var3 = global;
                            var6 = var3.pako;
                            _fun18355_ip = 167;
                            continue _fun18355;
                        case 155:
                            var2 = var2.window;
                            var6 = var2.UZIP;
                        case 167:
                            var2 = global;
                            var3 = var2.Date;
                            var2 = var3.now;
                            var2 = var2.bind(var3)();
                            var2 = var8.length;
                            var5 = 0;
                            var2 = var5 < var2;
                            var3 = 0;
                            if (!var2) {
                                _fun18355_ip = 282;
                                continue _fun18355
                            }
                        case 203:
                            var14 = var5 < var12;
                            var2 = 0;
                            if (!var14) {
                                _fun18355_ip = 248;
                                continue _fun18355
                            }
                        case 212:
                            var15 = _closure2_slot15;
                            var16 = var8[var3];
                            var22 = undefined;
                            var21 = var9;
                            var20 = var13;
                            var19 = var2;
                            var18 = var10;
                            var17 = var11;
                            var14 = var22[var15](var21, var20, var19, var18, var17, var16, var15);
                            var2 = var2 + 1;
                            if (var2 < var12) {
                                _fun18355_ip = 212;
                                continue _fun18355
                            }
                        case 248:
                            var14 = var1.push;
                            var2 = var6.deflate;
                            var2 = var2.bind(var6)(var9, var7);
                            var2 = var14.bind(var1)(var2);
                            var3 = var3 + 1;
                            var2 = var8.length;
                            if (var3 < var2) {
                                _fun18355_ip = 203;
                                continue _fun18355
                            }
                        case 282:
                            var2 = var1.length;
                            var2 = var5 < var2;
                            var4 = 1000000000;
                            var5 = 0;
                            var3 = undefined;
                            var0 = undefined;
                            if (!var2) {
                                _fun18355_ip = 346;
                                continue _fun18355
                            }
                        case 306:
                            var2 = var1[var5];
                            var2 = var2.length;
                            if (!(var2 < var4)) {
                                _fun18355_ip = 331;
                                continue _fun18355
                            }
                        case 319:
                            var2 = var1[var5];
                            var4 = var2.length;
                            var3 = var5;
                        case 331:
                            var5 = var5 + 1;
                            var2 = var1.length;
                            var0 = var3;
                            if (var5 < var2) {
                                _fun18355_ip = 306;
                                continue _fun18355
                            }
                        case 346:
                            var0 = var1[var0];
                            return var0;
                    }
                };
                var _closure2_slot14 = var0;
                var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: _filterLine, environment: var5
                    _fun18356: for (var _fun18356_ip = 0;;) switch (_fun18356_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var6 = arg2;
                            var3 = arg3;
                            var9 = arg4;
                            var7 = arg5;
                            var2 = var6 * var3;
                            var0 = var2 + var6;
                            var5[var0] = var7;
                            var1 = var0 + 1;
                            var0 = 0;
                            if (!(var0 != var7)) {
                                _fun18356_ip = 816;
                                continue _fun18356
                            }
                        case 42:
                            var11 = 1;
                            if (!(var11 != var7)) {
                                _fun18356_ip = 716;
                                continue _fun18356
                            }
                        case 52:
                            if (!(var0 != var6)) {
                                _fun18356_ip = 476;
                                continue _fun18356
                            }
                        case 59:
                            var6 = 2;
                            if (!(var6 == var7)) {
                                _fun18356_ip = 131;
                                continue _fun18356
                            }
                        case 66:
                            var12 = var0 < var3;
                            var10 = 256;
                            var8 = 255;
                            var6 = 0;
                            if (!var12) {
                                _fun18356_ip = 131;
                                continue _fun18356
                            }
                        case 84:
                            var13 = var1 + var6;
                            var12 = var2 + var6;
                            var12 = var4[var12];
                            var14 = var12 + var10;
                            var12 = var2 + var6;
                            var12 = var12 - var3;
                            var12 = var4[var12];
                            var12 = var14 - var12;
                            var12 = var12 & var8;
                            var5[var13] = var12;
                            var6 = var6 + 1;
                            if (var6 < var3) {
                                _fun18356_ip = 84;
                                continue _fun18356
                            }
                        case 131:
                            var6 = 3;
                            if (!(var6 == var7)) {
                                _fun18356_ip = 284;
                                continue _fun18356
                            }
                        case 141:
                            var12 = var0 < var9;
                            var10 = 256;
                            var8 = 255;
                            var6 = 0;
                            if (!var12) {
                                _fun18356_ip = 210;
                                continue _fun18356
                            }
                        case 159:
                            var13 = var1 + var6;
                            var12 = var2 + var6;
                            var12 = var4[var12];
                            var14 = var12 + var10;
                            var12 = var2 + var6;
                            var12 = var12 - var3;
                            var12 = var4[var12];
                            var12 = var12 >> var11;
                            var12 = var14 - var12;
                            var12 = var12 & var8;
                            var5[var13] = var12;
                            var6 = var6 + 1;
                            if (var6 < var9) {
                                _fun18356_ip = 159;
                                continue _fun18356
                            }
                        case 210:
                            var6 = var9;
                            if (!(var9 < var3)) {
                                _fun18356_ip = 284;
                                continue _fun18356
                            }
                        case 217:
                            var13 = var1 + var6;
                            var12 = var2 + var6;
                            var12 = var4[var12];
                            var14 = var12 + var10;
                            var12 = var2 + var6;
                            var12 = var12 - var3;
                            var15 = var4[var12];
                            var12 = var2 + var6;
                            var12 = var12 - var9;
                            var12 = var4[var12];
                            var12 = var15 + var12;
                            var12 = var12 >> var11;
                            var12 = var14 - var12;
                            var12 = var12 & var8;
                            var5[var13] = var12;
                            var6 = var6 + 1;
                            if (var6 < var3) {
                                _fun18356_ip = 217;
                                continue _fun18356
                            }
                        case 284:
                            var6 = 4;
                            if (!(var6 == var7)) {
                                _fun18356_ip = 911;
                                continue _fun18356
                            }
                        case 294:
                            var14 = var0 < var9;
                            var13 = 256;
                            var10 = undefined;
                            var8 = 255;
                            var6 = 0;
                            if (!var14) {
                                _fun18356_ip = 375;
                                continue _fun18356
                            }
                        case 317:
                            var15 = var1 + var6;
                            var14 = var2 + var6;
                            var14 = var4[var14];
                            var16 = var14 + var13;
                            var17 = _closure2_slot2;
                            var14 = var2 + var6;
                            var14 = var14 - var3;
                            var14 = var4[var14];
                            var14 = var17.bind(var10)(var0, var14, var0);
                            var14 = var16 - var14;
                            var14 = var14 & var8;
                            var5[var15] = var14;
                            var6 = var6 + 1;
                            if (var6 < var9) {
                                _fun18356_ip = 317;
                                continue _fun18356
                            }
                        case 375:
                            var6 = var9;
                            if (!(var9 < var3)) {
                                _fun18356_ip = 911;
                                continue _fun18356
                            }
                        case 385:
                            var15 = var1 + var6;
                            var14 = var2 + var6;
                            var14 = var4[var14];
                            var16 = var14 + var13;
                            var19 = _closure2_slot2;
                            var14 = var2 + var6;
                            var14 = var14 - var9;
                            var18 = var4[var14];
                            var14 = var2 + var6;
                            var14 = var14 - var3;
                            var17 = var4[var14];
                            var14 = var2 + var6;
                            var14 = var14 - var9;
                            var14 = var14 - var3;
                            var14 = var4[var14];
                            var14 = var19.bind(var10)(var18, var17, var14);
                            var14 = var16 - var14;
                            var14 = var14 & var8;
                            var5[var15] = var14;
                            var6 = var6 + 1;
                            if (var6 < var3) {
                                _fun18356_ip = 385;
                                continue _fun18356
                            }
                        case 471:
                            _fun18356_ip = 911;
                            continue _fun18356;
                        case 476:
                            var8 = var0 < var9;
                            var6 = 0;
                            if (!var8) {
                                _fun18356_ip = 508;
                                continue _fun18356
                            }
                        case 485:
                            var10 = var1 + var6;
                            var8 = var2 + var6;
                            var8 = var4[var8];
                            var5[var10] = var8;
                            var6 = var6 + 1;
                            if (var6 < var9) {
                                _fun18356_ip = 485;
                                continue _fun18356
                            }
                        case 508:
                            var6 = 2;
                            if (!(var6 == var7)) {
                                _fun18356_ip = 545;
                                continue _fun18356
                            }
                        case 515:
                            var6 = var9;
                            if (!(var9 < var3)) {
                                _fun18356_ip = 545;
                                continue _fun18356
                            }
                        case 522:
                            var10 = var1 + var6;
                            var8 = var2 + var6;
                            var8 = var4[var8];
                            var5[var10] = var8;
                            var6 = var6 + 1;
                            if (var6 < var3) {
                                _fun18356_ip = 522;
                                continue _fun18356
                            }
                        case 545:
                            var6 = 3;
                            if (!(var6 == var7)) {
                                _fun18356_ip = 619;
                                continue _fun18356
                            }
                        case 552:
                            var10 = 256;
                            var8 = 255;
                            var6 = var9;
                            if (!(var9 < var3)) {
                                _fun18356_ip = 619;
                                continue _fun18356
                            }
                        case 568:
                            var13 = var1 + var6;
                            var12 = var2 + var6;
                            var14 = var4[var12];
                            var12 = var2 + var6;
                            var12 = var12 - var9;
                            var12 = var4[var12];
                            var12 = var12 >> var11;
                            var12 = var14 - var12;
                            var12 = var12 + var10;
                            var12 = var12 & var8;
                            var5[var13] = var12;
                            var6 = var6 + 1;
                            if (var6 < var3) {
                                _fun18356_ip = 568;
                                continue _fun18356
                            }
                        case 619:
                            var6 = 4;
                            if (!(var6 == var7)) {
                                _fun18356_ip = 911;
                                continue _fun18356
                            }
                        case 629:
                            var10 = undefined;
                            var8 = 256;
                            var7 = 255;
                            var6 = var9;
                            if (!(var9 < var3)) {
                                _fun18356_ip = 911;
                                continue _fun18356
                            }
                        case 653:
                            var13 = var1 + var6;
                            var12 = var2 + var6;
                            var14 = var4[var12];
                            var15 = _closure2_slot2;
                            var12 = var2 + var6;
                            var12 = var12 - var9;
                            var12 = var4[var12];
                            var12 = var15.bind(var10)(var12, var0, var0);
                            var12 = var14 - var12;
                            var12 = var12 + var8;
                            var12 = var12 & var7;
                            var5[var13] = var12;
                            var6 = var6 + 1;
                            if (var6 < var3) {
                                _fun18356_ip = 653;
                                continue _fun18356
                            }
                        case 711:
                            _fun18356_ip = 911;
                            continue _fun18356;
                        case 716:
                            var7 = var0 < var9;
                            var6 = 0;
                            if (!var7) {
                                _fun18356_ip = 748;
                                continue _fun18356
                            }
                        case 725:
                            var8 = var1 + var6;
                            var7 = var2 + var6;
                            var7 = var4[var7];
                            var5[var8] = var7;
                            var6 = var6 + 1;
                            if (var6 < var9) {
                                _fun18356_ip = 725;
                                continue _fun18356
                            }
                        case 748:
                            var8 = 256;
                            var7 = 255;
                            var6 = var9;
                            if (!(var6 < var3)) {
                                _fun18356_ip = 911;
                                continue _fun18356
                            }
                        case 767:
                            var11 = var1 + var6;
                            var10 = var2 + var6;
                            var12 = var4[var10];
                            var10 = var2 + var6;
                            var10 = var10 - var9;
                            var10 = var4[var10];
                            var10 = var12 - var10;
                            var10 = var10 + var8;
                            var10 = var10 & var7;
                            var5[var11] = var10;
                            var6 = var6 + 1;
                            if (var6 < var3) {
                                _fun18356_ip = 767;
                                continue _fun18356
                            }
                        case 814:
                            _fun18356_ip = 911;
                            continue _fun18356;
                        case 816:
                            var6 = 500;
                            if (!(!(var3 < var6))) {
                                _fun18356_ip = 879;
                                continue _fun18356
                            }
                        case 826:
                            var7 = var5.set;
                            var6 = global;
                            var9 = var6.Uint8Array;
                            var22 = var4.buffer;
                            var8 = var9.prototype;
                            var8 = Object.create(var8, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var23 = var8;
                            var21 = var2;
                            var20 = var3;
                            var6 = new var23[var9](var22, var21, var20, var19);
                            var6 = var6 instanceof Object ? var6 : var8;
                            var6 = var7.bind(var5)(var6, var1);
                            _fun18356_ip = 911;
                            continue _fun18356;
                        case 879:
                            var6 = var0 < var3;
                            var0 = 0;
                            if (!var6) {
                                _fun18356_ip = 911;
                                continue _fun18356
                            }
                        case 888:
                            var7 = var1 + var0;
                            var6 = var2 + var0;
                            var6 = var4[var6];
                            var5[var7] = var6;
                            var0 = var0 + 1;
                            if (var0 < var3) {
                                _fun18356_ip = 888;
                                continue _fun18356
                            }
                        case 911:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot15 = var0;
                var2 = function(arg0, arg1, arg2) { // Original name: quantize, environment: var5
                    _fun18357: for (var _fun18357_ip = 0;;) switch (_fun18357_ip) {
                        case 0:
                            var2 = global;
                            var1 = var2.Date;
                            var0 = var1.now;
                            var0 = var0.bind(var1)();
                            var3 = var2.Uint8Array;
                            var0 = var3.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var31 = arg0;
                            var32 = var1;
                            var0 = new var32[var3](var31, var30);
                            var13 = var0 instanceof Object ? var0 : var1;
                            var0 = var13.slice;
                            var7 = 0;
                            var3 = var0.bind(var13)(var7);
                            var4 = var2.Uint32Array;
                            var31 = var3.buffer;
                            var1 = var4.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var32 = var1;
                            var0 = new var32[var4](var31, var30);
                            var6 = var0 instanceof Object ? var0 : var1;
                            var4 = _closure2_slot20;
                            var5 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var5)(var3, var1);
                            var18 = var1[var7];
                            var17 = 1;
                            var1 = var1[var17];
                            var8 = var1.length;
                            var4 = var2.Uint32Array;
                            var9 = var4.prototype;
                            var9 = Object.create(var9, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var32 = var9;
                            var31 = var8;
                            var4 = new var32[var4](var31, var30);
                            var4 = var4 instanceof Object ? var4 : var9;
                            var11 = var2.Uint8Array;
                            var31 = var4.buffer;
                            var10 = var11.prototype;
                            var10 = Object.create(var10, {
                                constructor: {
                                    value: var11
                                }
                            });
                            var32 = var10;
                            var9 = new var32[var11](var31, var30);
                            var12 = var9 instanceof Object ? var9 : var10;
                            var10 = var7 < var8;
                            var9 = 0;
                            if (!var10) {
                                _fun18357_ip = 221;
                                continue _fun18357
                            }
                        case 194:
                            var10 = var1[var9];
                            var10 = var10.est;
                            var10 = var10.rgba;
                            var4[var9] = var10;
                            var9 = var9 + 1;
                            if (var9 < var8) {
                                _fun18357_ip = 194;
                                continue _fun18357
                            }
                        case 221:
                            var16 = var13.length;
                            var10 = var2.Uint8Array;
                            var15 = 2;
                            var31 = var16 >> var15;
                            var9 = var10.prototype;
                            var9 = Object.create(var9, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var32 = var9;
                            var2 = new var32[var10](var31, var30);
                            var2 = var2 instanceof Object ? var2 : var9;
                            var9 = 60;
                            if (!(!(var8 <= var9))) {
                                _fun18357_ip = 597;
                                continue _fun18357
                            }
                        case 269:
                            var10 = var13.length;
                            var9 = 32000000;
                            if (!(!(var10 < var9))) {
                                _fun18357_ip = 476;
                                continue _fun18357
                            }
                        case 287:
                            var19 = var7 < var16;
                            var14 = 4;
                            var11 = 0.00392156862745098;
                            var10 = 3;
                            var9 = 0;
                            if (!var19) {
                                _fun18357_ip = 619;
                                continue _fun18357
                            }
                        case 315:
                            var19 = var13[var9];
                            var25 = var11 * var19;
                            var19 = var9 + var17;
                            var19 = var13[var19];
                            var24 = var11 * var19;
                            var19 = var9 + var15;
                            var19 = var13[var19];
                            var23 = var11 * var19;
                            var19 = var9 + var10;
                            var19 = var13[var19];
                            var22 = var11 * var19;
                            var20 = var18.left;
                            var21 = var18;
                            var19 = var21;
                            if (!var20) {
                                _fun18357_ip = 431;
                                continue _fun18357
                            }
                        case 373:
                            var26 = _closure2_slot22;
                            var31 = var21.est;
                            var32 = undefined;
                            var30 = var25;
                            var29 = var24;
                            var28 = var23;
                            var27 = var22;
                            var20 = var32[var26](var31, var30, var29, var28, var27, var26);
                            if (!(!(var20 <= var7))) {
                                _fun18357_ip = 412;
                                continue _fun18357
                            }
                        case 405:
                            var26 = var21.right;
                            _fun18357_ip = 417;
                            continue _fun18357;
                        case 412:
                            var26 = var21.left;
                        case 417:
                            var20 = var26.left;
                            var21 = var26;
                            var19 = var21;
                            if (var20) {
                                _fun18357_ip = 373;
                                continue _fun18357
                            }
                        case 431:
                            var20 = var9 >> var15;
                            var21 = var19.ind;
                            var2[var20] = var21;
                            var19 = var19.est;
                            var19 = var19.rgba;
                            var6[var20] = var19;
                            var9 = var9 + var14;
                            if (var9 < var16) {
                                _fun18357_ip = 315;
                                continue _fun18357
                            }
                        case 471:
                            _fun18357_ip = 619;
                            continue _fun18357;
                        case 476:
                            var19 = var7 < var16;
                            var14 = 0.00392156862745098;
                            var11 = 3;
                            var10 = 4;
                            var9 = 0;
                            if (!var19) {
                                _fun18357_ip = 619;
                                continue _fun18357
                            }
                        case 501:
                            var23 = _closure2_slot21;
                            var19 = var13[var9];
                            var30 = var14 * var19;
                            var19 = var9 + var17;
                            var19 = var13[var19];
                            var29 = var14 * var19;
                            var19 = var9 + var15;
                            var19 = var13[var19];
                            var28 = var14 * var19;
                            var19 = var9 + var11;
                            var19 = var13[var19];
                            var27 = var14 * var19;
                            var32 = undefined;
                            var31 = var18;
                            var19 = var32[var23](var31, var30, var29, var28, var27, var26);
                            var20 = var9 >> var15;
                            var21 = var19.ind;
                            var2[var20] = var21;
                            var19 = var19.est;
                            var19 = var19.rgba;
                            var6[var20] = var19;
                            var9 = var9 + var10;
                            if (var9 < var16) {
                                _fun18357_ip = 501;
                                continue _fun18357
                            }
                        case 595:
                            _fun18357_ip = 619;
                            continue _fun18357;
                        case 597:
                            var9 = _closure2_slot19;
                            var9 = var9.bind(var5)(var13, var2, var12);
                            var9 = _closure2_slot17;
                            var9 = var9.bind(var5)(var2, var6, var4);
                        case 619:
                            var15 = 1000000000;
                            var9 = arg2;
                            var11 = 0;
                            var10 = var15;
                            if (var9) {
                                _fun18357_ip = 660;
                                continue _fun18357
                            }
                        case 636:
                            var9 = var13.length;
                            var14 = var9 * var8;
                            var9 = 40000000;
                            var11 = 0;
                            var10 = var15;
                            if (!(var14 < var9)) {
                                _fun18357_ip = 749;
                                continue _fun18357
                            }
                        case 660:
                            var9 = _closure2_slot18;
                            var14 = var9.bind(var5)(var13, var2, var12);
                            var15 = var14 / var10;
                            var9 = 0.997;
                            if (!(!(var15 > var9))) {
                                _fun18357_ip = 702;
                                continue _fun18357
                            }
                        case 689:
                            var11 = var11 + 1;
                            var9 = 10;
                            var10 = var14;
                            if (var11 < var9) {
                                _fun18357_ip = 660;
                                continue _fun18357
                            }
                        case 702:
                            var9 = var7 < var8;
                            var7 = 0;
                            if (!var9) {
                                _fun18357_ip = 738;
                                continue _fun18357
                            }
                        case 711:
                            var9 = var1[var7];
                            var10 = var9.est;
                            var9 = var4[var7];
                            var10.rgba = var9;
                            var7 = var7 + 1;
                            if (var7 < var8) {
                                _fun18357_ip = 711;
                                continue _fun18357
                            }
                        case 738:
                            var0 = _closure2_slot17;
                            var0 = var0.bind(var5)(var2, var6, var4);
                        case 749:
                            var0 = {};
                            var3 = var3.buffer;
                            var0.abuf = var3;
                            var0.inds = var2;
                            var0.plte = var1;
                            return var0;
                    }
                };
                var _closure2_slot16 = var2;
                var0 = function(arg0, arg1, arg2) { // Original name: remap, environment: var5
                    _fun18358: for (var _fun18358_ip = 0;;) switch (_fun18358_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = arg1;
                            var2 = arg2;
                            var0 = var4.length;
                            var1 = 0;
                            var0 = var1 < var0;
                            if (!var0) {
                                _fun18358_ip = 47;
                                continue _fun18358
                            }
                        case 23:
                            var0 = var4[var1];
                            var0 = var2[var0];
                            var3[var1] = var0;
                            var1 = var1 + 1;
                            var0 = var4.length;
                            if (var1 < var0) {
                                _fun18358_ip = 23;
                                continue _fun18358
                            }
                        case 47:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot17 = var0;
                var0 = function(arg0, arg1, arg2) { // Original name: kmeans, environment: var5
                    _fun18359: for (var _fun18359_ip = 0;;) switch (_fun18359_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = arg1;
                            var2 = arg2;
                            var0 = var2.length;
                            var8 = 2;
                            var5 = var0 >>> var8;
                            var7 = global;
                            var6 = var7.Uint32Array;
                            var0 = var6.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var12 = 4;
                            var18 = var12 * var5;
                            var19 = var1;
                            var0 = new var19[var6](var18, var17);
                            var6 = var0 instanceof Object ? var0 : var1;
                            var0 = var7.Uint32Array;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var19 = var1;
                            var18 = var5;
                            var0 = new var19[var0](var18, var17);
                            var5 = var0 instanceof Object ? var0 : var1;
                            var0 = var4.length;
                            var1 = 0;
                            var0 = var1 < var0;
                            var11 = 1;
                            var10 = 3;
                            var9 = 0;
                            if (!var0) {
                                _fun18359_ip = 234;
                                continue _fun18359
                            }
                        case 110:
                            var0 = var9 >>> var8;
                            var14 = var3[var0];
                            var0 = var12 * var14;
                            var13 = var5[var14];
                            var13 = var13 + 1;
                            var5[var14] = var13;
                            var14 = var6[var0];
                            var13 = var4[var9];
                            var13 = var14 + var13;
                            var6[var0] = var13;
                            var14 = var0 + var11;
                            var15 = var6[var14];
                            var13 = var9 + var11;
                            var13 = var4[var13];
                            var13 = var15 + var13;
                            var6[var14] = var13;
                            var14 = var0 + var8;
                            var15 = var6[var14];
                            var13 = var9 + var8;
                            var13 = var4[var13];
                            var13 = var15 + var13;
                            var6[var14] = var13;
                            var13 = var0 + var10;
                            var14 = var6[var13];
                            var0 = var9 + var10;
                            var0 = var4[var0];
                            var0 = var14 + var0;
                            var6[var13] = var0;
                            var9 = var9 + var12;
                            var0 = var4.length;
                            if (var9 < var0) {
                                _fun18359_ip = 110;
                                continue _fun18359
                            }
                        case 234:
                            var0 = var2.length;
                            var0 = var1 < var0;
                            var1 = 0;
                            if (!var0) {
                                _fun18359_ip = 296;
                                continue _fun18359
                            }
                        case 248:
                            var10 = var7.Math;
                            var9 = var10.round;
                            var11 = var6[var1];
                            var0 = var1 >>> var8;
                            var0 = var5[var0];
                            var0 = var11 / var0;
                            var0 = var9.bind(var10)(var0);
                            var2[var1] = var0;
                            var1 = var1 + 1;
                            var0 = var2.length;
                            if (var1 < var0) {
                                _fun18359_ip = 248;
                                continue _fun18359
                            }
                        case 296:
                            var1 = _closure2_slot19;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var4, var3, var2);
                            return var0;
                    }
                };
                var _closure2_slot18 = var0;
                var4 = function(arg0, arg1, arg2) { // Original name: findNearest, environment: var5
                    _fun18360: for (var _fun18360_ip = 0;;) switch (_fun18360_ip) {
                        case 0:
                            var0 = arg0;
                            var16 = arg1;
                            var15 = arg2;
                            var1 = var15.length;
                            var2 = 2;
                            var14 = var1 >>> var2;
                            var13 = new Array(0);
                            var12 = 0;
                            var11 = var12 < var14;
                            var1 = undefined;
                            var17 = global;
                            var5 = 0.5;
                            var10 = 4;
                            var9 = 1;
                            var8 = 3;
                            var4 = 1000000000;
                            var3 = 0;
                            var7 = undefined;
                            var6 = undefined;
                            if (!var11) {
                                _fun18360_ip = 318;
                                continue _fun18360
                            }
                        case 72:
                            var18 = var10 * var3;
                            var28 = var15[var18];
                            var19 = var18 + var9;
                            var27 = var15[var19];
                            var19 = var18 + var2;
                            var26 = var15[var19];
                            var18 = var18 + var8;
                            var25 = var15[var18];
                            var20 = var1;
                            var24 = 0;
                            var23 = var4;
                            var21 = 0;
                            var22 = var23;
                            var19 = 0;
                            var18 = var20;
                            if (!var11) {
                                _fun18360_ip = 258;
                                continue _fun18360
                            }
                        case 128:
                            var32 = var24;
                            var31 = var23;
                            if (!(var3 != var21)) {
                                _fun18360_ip = 236;
                                continue _fun18360
                            }
                        case 138:
                            var29 = var10 * var21;
                            var30 = var15[var29];
                            var30 = var28 - var30;
                            var33 = var30 * var30;
                            var30 = var29 + var9;
                            var30 = var15[var30];
                            var30 = var27 - var30;
                            var30 = var30 * var30;
                            var33 = var33 + var30;
                            var30 = var29 + var2;
                            var30 = var15[var30];
                            var30 = var26 - var30;
                            var30 = var30 * var30;
                            var30 = var33 + var30;
                            var29 = var29 + var8;
                            var29 = var15[var29];
                            var29 = var25 - var29;
                            var29 = var29 * var29;
                            var29 = var30 + var29;
                            var32 = var24;
                            var20 = var29;
                            var31 = var23;
                            if (!(var20 < var31)) {
                                _fun18360_ip = 236;
                                continue _fun18360
                            }
                        case 227:
                            var32 = var21;
                            var31 = var29;
                            var20 = var31;
                        case 236:
                            var21 = var21 + 1;
                            var24 = var32;
                            var23 = var31;
                            var22 = var23;
                            var18 = var20;
                            var19 = var21;
                            if (var19 < var14) {
                                _fun18360_ip = 128;
                                continue _fun18360
                            }
                        case 258:
                            var21 = var17.Math;
                            var20 = var21.sqrt;
                            var20 = var20.bind(var21)(var22);
                            var20 = var5 * var20;
                            var13[var3] = var20;
                            var21 = var13[var3];
                            var20 = var13[var3];
                            var20 = var21 * var20;
                            var13[var3] = var20;
                            var3 = var3 + 1;
                            var7 = var19;
                            var1 = var18;
                            var6 = var1;
                            if (var3 < var14) {
                                _fun18360_ip = 72;
                                continue _fun18360
                            }
                        case 318:
                            var1 = var0.length;
                            var3 = var12 < var1;
                            var5 = 0;
                            var4 = 0;
                            var1 = 0;
                            if (!var3) {
                                _fun18360_ip = 651;
                                continue _fun18360
                            }
                        case 339:
                            var26 = var0[var4];
                            var3 = var4 + var9;
                            var25 = var0[var3];
                            var3 = var4 + var2;
                            var24 = var0[var3];
                            var3 = var4 + var8;
                            var23 = var0[var3];
                            var19 = var4 >>> var2;
                            var28 = var16[var19];
                            var3 = var10 * var28;
                            var17 = var15[var3];
                            var17 = var26 - var17;
                            var18 = var17 * var17;
                            var17 = var3 + var9;
                            var17 = var15[var17];
                            var17 = var25 - var17;
                            var17 = var17 * var17;
                            var18 = var18 + var17;
                            var17 = var3 + var2;
                            var17 = var15[var17];
                            var17 = var24 - var17;
                            var17 = var17 * var17;
                            var17 = var18 + var17;
                            var3 = var3 + var8;
                            var3 = var15[var3];
                            var3 = var23 - var3;
                            var3 = var3 * var3;
                            var27 = var17 + var3;
                            var20 = var13[var28];
                            var17 = var28;
                            var18 = var6;
                            var3 = var27;
                            if (!(var3 > var20)) {
                                _fun18360_ip = 621;
                                continue _fun18360
                            }
                        case 471:
                            var22 = var28;
                            var21 = var27;
                            var20 = 0;
                            var17 = var22;
                            var3 = var21;
                            var7 = 0;
                            var18 = var6;
                            if (!var11) {
                                _fun18360_ip = 621;
                                continue _fun18360
                            }
                        case 496:
                            var27 = var10 * var20;
                            var28 = var15[var27];
                            var28 = var26 - var28;
                            var29 = var28 * var28;
                            var28 = var27 + var9;
                            var28 = var15[var28];
                            var28 = var25 - var28;
                            var28 = var28 * var28;
                            var29 = var29 + var28;
                            var28 = var27 + var2;
                            var28 = var15[var28];
                            var28 = var24 - var28;
                            var28 = var28 * var28;
                            var28 = var29 + var28;
                            var27 = var27 + var8;
                            var27 = var15[var27];
                            var27 = var23 - var27;
                            var27 = var27 * var27;
                            var28 = var28 + var27;
                            if (!(var28 < var21)) {
                                _fun18360_ip = 602;
                                continue _fun18360
                            }
                        case 576:
                            var27 = var13[var20];
                            var22 = var20;
                            var21 = var28;
                            var17 = var22;
                            var3 = var21;
                            var7 = var17;
                            var18 = var3;
                            if (!(!(var28 < var27))) {
                                _fun18360_ip = 621;
                                continue _fun18360
                            }
                        case 602:
                            var20 = var20 + 1;
                            var17 = var22;
                            var3 = var21;
                            var18 = var28;
                            var7 = var20;
                            if (var7 < var14) {
                                _fun18360_ip = 496;
                                continue _fun18360
                            }
                        case 621:
                            var16[var19] = var17;
                            var5 = var5 + var3;
                            var4 = var4 + var10;
                            var3 = var0.length;
                            var6 = var18;
                            var1 = var5;
                            if (var4 < var3) {
                                _fun18360_ip = 339;
                                continue _fun18360
                            }
                        case 651:
                            var0 = var0.length;
                            var0 = var0 >>> var2;
                            var0 = var1 / var0;
                            return var0;
                    }
                };
                var _closure2_slot19 = var4;
                var3 = function(arg0, arg1, arg2) { // Original name: getKDtree, environment: var5
                    _fun18361: for (var _fun18361_ip = 0;;) switch (_fun18361_ip) {
                        case 0:
                            var13 = arg0;
                            var12 = arg1;
                            var11 = arg2;
                            var0 = null;
                            if (!(var0 == var11)) {
                                _fun18361_ip = 25;
                                continue _fun18361
                            }
                        case 15:
                            var11 = 0.0001;
                        case 25:
                            var0 = global;
                            var2 = var0.Uint32Array;
                            var26 = var13.buffer;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var27 = var1;
                            var0 = new var27[var2](var26, var25);
                            var10 = var0 instanceof Object ? var0 : var1;
                            var2 = {
                                'i0': 0,
                                'i1': null,
                                'bst': null,
                                'est': null,
                                'tdst': 0,
                                'left': null,
                                'right': null
                            };
                            var3 = 0;
                            var0 = var13.length;
                            var2.i1 = var0;
                            var4 = _closure2_slot25;
                            var1 = var2.i0;
                            var0 = var2.i1;
                            var8 = undefined;
                            var0 = var4.bind(var8)(var13, var1, var0);
                            var2.bst = var0;
                            var1 = _closure2_slot26;
                            var0 = var2.bst;
                            var0 = var1.bind(var8)(var0);
                            var2.est = var0;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1.length;
                            var0 = var0 < var12;
                            var7 = 4;
                            var6 = 16;
                            var5 = undefined;
                            var4 = undefined;
                            if (!var0) {
                                _fun18361_ip = 709;
                                continue _fun18361
                            }
                        case 170:
                            var0 = var1.length;
                            var14 = var3 < var0;
                            var18 = 0;
                            var17 = 0;
                            var15 = 0;
                            var0 = 0;
                            var16 = 0;
                            if (!var14) {
                                _fun18361_ip = 249;
                                continue _fun18361
                            }
                        case 192:
                            var14 = var1[var15];
                            var14 = var14.est;
                            var14 = var14.L;
                            if (!(var14 > var18)) {
                                _fun18361_ip = 231;
                                continue _fun18361
                            }
                        case 212:
                            var14 = var1[var15];
                            var14 = var14.est;
                            var18 = var14.L;
                            var17 = var15;
                        case 231:
                            var15 = var15 + 1;
                            var14 = var1.length;
                            var0 = var18;
                            var16 = var17;
                            if (var15 < var14) {
                                _fun18361_ip = 192;
                                continue _fun18361
                            }
                        case 249:
                            if (!(!(var0 < var11))) {
                                _fun18361_ip = 709;
                                continue _fun18361
                            }
                        case 256:
                            var0 = var1[var16];
                            var19 = _closure2_slot23;
                            var24 = var0.i0;
                            var23 = var0.i1;
                            var14 = var0.est;
                            var22 = var14.e;
                            var14 = var0.est;
                            var21 = var14.eMq255;
                            var27 = undefined;
                            var26 = var13;
                            var25 = var10;
                            var17 = var27[var19](var26, var25, var24, var23, var22, var21, var20);
                            var14 = var0.i0;
                            if (!(!(var14 >= var17))) {
                                _fun18361_ip = 673;
                                continue _fun18361
                            }
                        case 324:
                            var14 = var0.i1;
                            if (!(!(var14 <= var17))) {
                                _fun18361_ip = 673;
                                continue _fun18361
                            }
                        case 337:
                            var15 = {
                                'i0': null,
                                'i1': null,
                                'bst': null,
                                'est': null,
                                'tdst': 0,
                                'left': null,
                                'right': null
                            };
                            var14 = var0.i0;
                            var15.i0 = var14;
                            var15.i1 = var17;
                            var19 = _closure2_slot25;
                            var18 = var15.i0;
                            var14 = var15.i1;
                            var14 = var19.bind(var8)(var13, var18, var14);
                            var15.bst = var14;
                            var18 = _closure2_slot26;
                            var14 = var15.bst;
                            var14 = var18.bind(var8)(var14);
                            var15.est = var14;
                            var14 = {
                                'i0': null,
                                'i1': null,
                                'bst': null,
                                'est': null,
                                'tdst': 0,
                                'left': null,
                                'right': null
                            };
                            var14.i0 = var17;
                            var17 = var0.i1;
                            var14.i1 = var17;
                            var17 = {};
                            var18 = new Array(0);
                            var17.R = var18;
                            var18 = new Array(0);
                            var17.m = var18;
                            var18 = var0.bst;
                            var19 = var18.N;
                            var18 = var15.bst;
                            var18 = var18.N;
                            var18 = var19 - var18;
                            var17.N = var18;
                            var14.bst = var17;
                            var18 = 0;
                        case 504:
                            var17 = var14.bst;
                            var19 = var17.R;
                            var17 = var0.bst;
                            var17 = var17.R;
                            var20 = var17[var18];
                            var17 = var15.bst;
                            var17 = var17.R;
                            var17 = var17[var18];
                            var17 = var20 - var17;
                            var19[var18] = var17;
                            var18 = var18 + 1;
                            var17 = 0;
                            if (var18 < var6) {
                                _fun18361_ip = 504;
                                continue _fun18361
                            }
                        case 565:
                            var18 = var14.bst;
                            var19 = var18.m;
                            var18 = var0.bst;
                            var18 = var18.m;
                            var20 = var18[var17];
                            var18 = var15.bst;
                            var18 = var18.m;
                            var18 = var18[var17];
                            var18 = var20 - var18;
                            var19[var17] = var18;
                            var17 = var17 + 1;
                            if (var17 < var7) {
                                _fun18361_ip = 565;
                                continue _fun18361
                            }
                        case 624:
                            var18 = _closure2_slot26;
                            var17 = var14.bst;
                            var17 = var18.bind(var8)(var17);
                            var14.est = var17;
                            var0.left = var15;
                            var0.right = var14;
                            var1[var16] = var15;
                            var16 = var1.push;
                            var16 = var16.bind(var1)(var14);
                            _fun18361_ip = 691;
                            continue _fun18361;
                        case 673:
                            var0 = var0.est;
                            var0.L = var3;
                            var15 = var5;
                            var14 = var4;
                        case 691:
                            var0 = var1.length;
                            var5 = var15;
                            var4 = var14;
                            if (var0 < var12) {
                                _fun18361_ip = 170;
                                continue _fun18361
                            }
                        case 709:
                            var4 = var1.sort;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var0 = arg1;
                                var0 = var0.bst;
                                var1 = var0.N;
                                var0 = arg0;
                                var0 = var0.bst;
                                var0 = var0.N;
                                var0 = var1 - var0;
                                return var0;
                            };
                            var0 = var4.bind(var1)(var0);
                            var0 = var1.length;
                            var0 = var3 < var0;
                            var3 = 0;
                            if (!var0) {
                                _fun18361_ip = 763;
                                continue _fun18361
                            }
                        case 741:
                            var0 = var1[var3];
                            var0.ind = var3;
                            var3 = var3 + 1;
                            var0 = var1.length;
                            if (var3 < var0) {
                                _fun18361_ip = 741;
                                continue _fun18361
                            }
                        case 763:
                            var0 = new Array(2);
                            var0[0] = var2;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var _closure2_slot20 = var3;
                var1 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: getNearest, environment: var5
                    _fun18363: for (var _fun18363_ip = 0;;) switch (_fun18363_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = arg1;
                            var3 = arg2;
                            var2 = arg3;
                            var5 = arg4;
                            var6 = var0.left;
                            var1 = null;
                            if (!(var1 != var6)) {
                                _fun18363_ip = 176;
                                continue _fun18363
                            }
                        case 29:
                            var7 = _closure2_slot22;
                            var16 = var0.est;
                            var17 = undefined;
                            var15 = var4;
                            var14 = var3;
                            var13 = var2;
                            var12 = var5;
                            var9 = var17[var7](var16, var15, var14, var13, var12, var11);
                            var10 = var0.left;
                            var7 = var0.right;
                            var1 = 0;
                            if (!(var9 > var1)) {
                                _fun18363_ip = 86;
                                continue _fun18363
                            }
                        case 76:
                            var10 = var0.right;
                            var7 = var0.left;
                        case 86:
                            var1 = _closure2_slot21;
                            var17 = undefined;
                            var16 = var10;
                            var15 = var4;
                            var14 = var3;
                            var13 = var2;
                            var12 = var5;
                            var1 = var17[var1](var16, var15, var14, var13, var12, var11);
                            var10 = var1.tdst;
                            var9 = var9 * var9;
                            if (!(!(var10 <= var9))) {
                                _fun18363_ip = 174;
                                continue _fun18363
                            }
                        case 125:
                            var6 = _closure2_slot21;
                            var17 = undefined;
                            var16 = var7;
                            var15 = var4;
                            var14 = var3;
                            var13 = var2;
                            var12 = var5;
                            var7 = var17[var6](var16, var15, var14, var13, var12, var11);
                            var9 = var7.tdst;
                            var8 = var1.tdst;
                            var6 = var1;
                            if (!(var9 < var8)) {
                                _fun18363_ip = 172;
                                continue _fun18363
                            }
                        case 169:
                            var6 = var7;
                        case 172:
                            return var6;
                        case 174:
                            return var1;
                        case 176:
                            var1 = var0.est;
                            var6 = var1.q;
                            var1 = 0;
                            var1 = var6[var1];
                            var4 = var4 - var1;
                            var1 = 1;
                            var1 = var6[var1];
                            var3 = var3 - var1;
                            var1 = 2;
                            var1 = var6[var1];
                            var2 = var2 - var1;
                            var1 = 3;
                            var1 = var6[var1];
                            var1 = var5 - var1;
                            var4 = var4 * var4;
                            var3 = var3 * var3;
                            var3 = var4 + var3;
                            var2 = var2 * var2;
                            var2 = var3 + var2;
                            var1 = var1 * var1;
                            var1 = var2 + var1;
                            var0.tdst = var1;
                            return var0;
                    }
                };
                var _closure2_slot21 = var1;
                var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: planeDst, environment: var5
                    var0 = arg0;
                    var3 = var0.e;
                    var1 = 0;
                    var2 = var3[var1];
                    var1 = arg1;
                    var2 = var2 * var1;
                    var1 = 1;
                    var4 = var3[var1];
                    var1 = arg2;
                    var1 = var4 * var1;
                    var2 = var2 + var1;
                    var1 = 2;
                    var4 = var3[var1];
                    var1 = arg3;
                    var1 = var4 * var1;
                    var2 = var2 + var1;
                    var1 = 3;
                    var3 = var3[var1];
                    var1 = arg4;
                    var1 = var3 * var1;
                    var1 = var2 + var1;
                    var0 = var0.eMq;
                    var0 = var1 - var0;
                    return var0;
                };
                var _closure2_slot22 = var0;
                var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: splitPixels, environment: var5
                    _fun18365: for (var _fun18365_ip = 0;;) switch (_fun18365_ip) {
                        case 0:
                            var8 = arg0;
                            var10 = arg1;
                            var0 = arg2;
                            var7 = arg4;
                            var6 = arg5;
                            var2 = arg3;
                            var1 = 4;
                            var9 = var2 - var1;
                            var3 = 2;
                            var4 = undefined;
                            var2 = var0;
                            var0 = var2;
                            if (!(var0 < var9)) {
                                _fun18365_ip = 191;
                                continue _fun18365
                            }
                        case 46:
                            var11 = _closure2_slot24;
                            var12 = var11.bind(var4)(var8, var2, var7);
                            var13 = var2;
                            var11 = var13;
                            if (!(var12 <= var6)) {
                                _fun18365_ip = 92;
                                continue _fun18365
                            }
                        case 67:
                            var14 = var13 + var1;
                            var12 = _closure2_slot24;
                            var12 = var12.bind(var4)(var8, var14, var7);
                            var13 = var14;
                            var11 = var13;
                            if (var12 <= var6) {
                                _fun18365_ip = 67;
                                continue _fun18365
                            }
                        case 92:
                            var12 = _closure2_slot24;
                            var13 = var12.bind(var4)(var8, var9, var7);
                            var14 = var9;
                            var12 = var14;
                            if (!(var13 > var6)) {
                                _fun18365_ip = 138;
                                continue _fun18365
                            }
                        case 113:
                            var15 = var14 - var1;
                            var13 = _closure2_slot24;
                            var13 = var13.bind(var4)(var8, var15, var7);
                            var14 = var15;
                            var12 = var14;
                            if (var13 > var6) {
                                _fun18365_ip = 113;
                                continue _fun18365
                            }
                        case 138:
                            var0 = var11;
                            if (!(!(var0 >= var12))) {
                                _fun18365_ip = 191;
                                continue _fun18365
                            }
                        case 145:
                            var13 = var11 >> var3;
                            var14 = var10[var13];
                            var16 = var11 >> var3;
                            var13 = var12 >> var3;
                            var15 = var10[var13];
                            var10[var16] = var15;
                            var10[var13] = var14;
                            var2 = var11 + var1;
                            var9 = var12 - var1;
                            var0 = var2;
                            if (var0 < var9) {
                                _fun18365_ip = 46;
                                continue _fun18365
                            }
                        case 191:
                            var2 = _closure2_slot24;
                            var2 = var2.bind(var4)(var8, var0, var7);
                            var3 = var0;
                            var0 = var3;
                            if (!(var2 > var6)) {
                                _fun18365_ip = 237;
                                continue _fun18365
                            }
                        case 212:
                            var9 = var3 - var1;
                            var2 = _closure2_slot24;
                            var2 = var2.bind(var4)(var8, var9, var7);
                            var3 = var9;
                            var0 = var3;
                            if (var2 > var6) {
                                _fun18365_ip = 212;
                                continue _fun18365
                            }
                        case 237:
                            var0 = var0 + var1;
                            return var0;
                    }
                };
                var _closure2_slot23 = var0;
                var0 = function(arg0, arg1, arg2) { // Original name: vecDot, environment: var5
                    var4 = arg0;
                    var2 = arg1;
                    var3 = arg2;
                    var1 = var4[var2];
                    var0 = 0;
                    var0 = var3[var0];
                    var1 = var1 * var0;
                    var0 = 1;
                    var5 = var2 + var0;
                    var5 = var4[var5];
                    var0 = var3[var0];
                    var0 = var5 * var0;
                    var1 = var1 + var0;
                    var0 = 2;
                    var5 = var2 + var0;
                    var5 = var4[var5];
                    var0 = var3[var0];
                    var0 = var5 * var0;
                    var1 = var1 + var0;
                    var0 = 3;
                    var2 = var2 + var0;
                    var2 = var4[var2];
                    var0 = var3[var0];
                    var0 = var2 * var0;
                    var0 = var1 + var0;
                    return var0;
                };
                var _closure2_slot24 = var0;
                var0 = function(arg0, arg1, arg2) { // Original name: stats, environment: var5
                    _fun18367: for (var _fun18367_ip = 0;;) switch (_fun18367_ip) {
                        case 0:
                            var17 = arg0;
                            var16 = arg1;
                            var15 = arg2;
                            var3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            var2 = [0, 0, 0, 0];
                            var0 = var15 - var16;
                            var7 = 2;
                            var1 = var0 >> var7;
                            var14 = 0.00392156862745098;
                            var8 = 1;
                            var5 = 3;
                            var13 = 0;
                            var12 = 5;
                            var6 = 6;
                            var4 = 7;
                            var11 = 10;
                            var0 = 11;
                            var10 = 15;
                            var9 = 4;
                            if (!(var16 < var15)) {
                                _fun18367_ip = 349;
                                continue _fun18367
                            }
                        case 86:
                            var18 = var17[var16];
                            var21 = var14 * var18;
                            var18 = var16 + var8;
                            var18 = var17[var18];
                            var20 = var14 * var18;
                            var18 = var16 + var7;
                            var18 = var17[var18];
                            var19 = var14 * var18;
                            var18 = var16 + var5;
                            var18 = var17[var18];
                            var18 = var14 * var18;
                            var22 = var2[var13];
                            var22 = var22 + var21;
                            var2[var13] = var22;
                            var22 = var2[var8];
                            var22 = var22 + var20;
                            var2[var8] = var22;
                            var22 = var2[var7];
                            var22 = var22 + var19;
                            var2[var7] = var22;
                            var22 = var2[var5];
                            var22 = var22 + var18;
                            var2[var5] = var22;
                            var23 = var3[var13];
                            var22 = var21 * var21;
                            var22 = var23 + var22;
                            var3[var13] = var22;
                            var23 = var3[var8];
                            var22 = var21 * var20;
                            var22 = var23 + var22;
                            var3[var8] = var22;
                            var23 = var3[var7];
                            var22 = var21 * var19;
                            var22 = var23 + var22;
                            var3[var7] = var22;
                            var22 = var3[var5];
                            var21 = var21 * var18;
                            var21 = var22 + var21;
                            var3[var5] = var21;
                            var22 = var3[var12];
                            var21 = var20 * var20;
                            var21 = var22 + var21;
                            var3[var12] = var21;
                            var22 = var3[var6];
                            var21 = var20 * var19;
                            var21 = var22 + var21;
                            var3[var6] = var21;
                            var21 = var3[var4];
                            var20 = var20 * var18;
                            var20 = var21 + var20;
                            var3[var4] = var20;
                            var21 = var3[var11];
                            var20 = var19 * var19;
                            var20 = var21 + var20;
                            var3[var11] = var20;
                            var20 = var3[var0];
                            var19 = var19 * var18;
                            var19 = var20 + var19;
                            var3[var0] = var19;
                            var19 = var3[var10];
                            var18 = var18 * var18;
                            var18 = var19 + var18;
                            var3[var10] = var18;
                            var16 = var16 + var9;
                            if (var16 < var15) {
                                _fun18367_ip = 86;
                                continue _fun18367
                            }
                        case 349:
                            var8 = var3[var8];
                            var3[var9] = var8;
                            var8 = var3[var7];
                            var7 = 8;
                            var3[var7] = var8;
                            var7 = var3[var6];
                            var6 = 9;
                            var3[var6] = var7;
                            var6 = var3[var5];
                            var5 = 12;
                            var3[var5] = var6;
                            var5 = var3[var4];
                            var4 = 13;
                            var3[var4] = var5;
                            var4 = var3[var0];
                            var0 = 14;
                            var3[var0] = var4;
                            var0 = {};
                            var0.R = var3;
                            var0.m = var2;
                            var0.N = var1;
                            return var0;
                    }
                };
                var _closure2_slot25 = var0;
                var0 = function(arg0) { // Original name: estats, environment: var5
                    _fun18368: for (var _fun18368_ip = 0;;) switch (_fun18368_ip) {
                        case 0:
                            var1 = arg0;
                            var10 = var1.R;
                            var0 = var1.m;
                            var8 = var1.N;
                            var2 = 0;
                            var3 = var0[var2];
                            var4 = 1;
                            var14 = var0[var4];
                            var1 = 2;
                            var13 = var0[var1];
                            var5 = 3;
                            var12 = var0[var5];
                            var6 = var2 == var8;
                            var0 = 0;
                            if (var6) {
                                _fun18368_ip = 61;
                                continue _fun18368
                            }
                        case 57:
                            var0 = var4 / var8;
                        case 61:
                            var7 = var10[var2];
                            var6 = var3 * var3;
                            var6 = var6 * var0;
                            var6 = var7 - var6;
                            var9 = new Array(16);
                            var9[0] = var6;
                            var7 = var10[var4];
                            var6 = var3 * var14;
                            var6 = var6 * var0;
                            var6 = var7 - var6;
                            var9[1] = var6;
                            var7 = var10[var1];
                            var6 = var3 * var13;
                            var6 = var6 * var0;
                            var6 = var7 - var6;
                            var9[2] = var6;
                            var7 = var10[var5];
                            var6 = var3 * var12;
                            var6 = var6 * var0;
                            var6 = var7 - var6;
                            var9[3] = var6;
                            var6 = 4;
                            var7 = var10[var6];
                            var6 = var14 * var3;
                            var6 = var6 * var0;
                            var6 = var7 - var6;
                            var9[4] = var6;
                            var6 = 5;
                            var7 = var10[var6];
                            var6 = var14 * var14;
                            var6 = var6 * var0;
                            var6 = var7 - var6;
                            var9[5] = var6;
                            var6 = 6;
                            var7 = var10[var6];
                            var6 = var14 * var13;
                            var6 = var6 * var0;
                            var6 = var7 - var6;
                            var9[6] = var6;
                            var6 = 7;
                            var7 = var10[var6];
                            var6 = var14 * var12;
                            var6 = var6 * var0;
                            var6 = var7 - var6;
                            var9[7] = var6;
                            var7 = 8;
                            var11 = var10[var7];
                            var6 = var13 * var3;
                            var6 = var6 * var0;
                            var6 = var11 - var6;
                            var9[8] = var6;
                            var6 = 9;
                            var11 = var10[var6];
                            var6 = var13 * var14;
                            var6 = var6 * var0;
                            var6 = var11 - var6;
                            var9[9] = var6;
                            var6 = 10;
                            var11 = var10[var6];
                            var6 = var13 * var13;
                            var6 = var6 * var0;
                            var6 = var11 - var6;
                            var9[10] = var6;
                            var6 = 11;
                            var11 = var10[var6];
                            var6 = var13 * var12;
                            var6 = var6 * var0;
                            var6 = var11 - var6;
                            var9[11] = var6;
                            var6 = 12;
                            var11 = var10[var6];
                            var6 = var12 * var3;
                            var6 = var6 * var0;
                            var6 = var11 - var6;
                            var9[12] = var6;
                            var6 = 13;
                            var11 = var10[var6];
                            var6 = var12 * var14;
                            var6 = var6 * var0;
                            var6 = var11 - var6;
                            var9[13] = var6;
                            var6 = 14;
                            var11 = var10[var6];
                            var6 = var12 * var13;
                            var6 = var6 * var0;
                            var6 = var11 - var6;
                            var9[14] = var6;
                            var6 = 15;
                            var10 = var10[var6];
                            var6 = var12 * var12;
                            var6 = var6 * var0;
                            var6 = var10 - var6;
                            var9[15] = var6;
                            var11 = _closure2_slot4;
                            var6 = global;
                            var15 = var6.Math;
                            var10 = var15.random;
                            var10 = var10.bind(var15)();
                            var16 = new Array(4);
                            var16[0] = var10;
                            var15 = var6.Math;
                            var10 = var15.random;
                            var10 = var10.bind(var15)();
                            var16[1] = var10;
                            var15 = var6.Math;
                            var10 = var15.random;
                            var10 = var10.bind(var15)();
                            var16[2] = var10;
                            var15 = var6.Math;
                            var10 = var15.random;
                            var10 = var10.bind(var15)();
                            var16[3] = var10;
                            var15 = var2 != var8;
                            var10 = var16;
                            var8 = 0;
                            if (!var15) {
                                _fun18368_ip = 730;
                                continue _fun18368
                            }
                        case 529:
                            var15 = var11.multVec;
                            var18 = var15.bind(var11)(var9, var16);
                            var17 = var6.Math;
                            var16 = var17.sqrt;
                            var15 = var11.dot;
                            var15 = var15.bind(var11)(var18, var18);
                            var15 = var16.bind(var17)(var15);
                            var17 = var11.sml;
                            var16 = var4 / var15;
                            var18 = var17.bind(var11)(var16, var18);
                            var20 = 1e-09;
                            var19 = 16;
                            var17 = var15;
                            var16 = 0;
                        case 604:
                            var23 = var16 + 1;
                            var21 = var17;
                            var10 = var18;
                            var8 = var21;
                            if (!(var23 < var19)) {
                                _fun18368_ip = 730;
                                continue _fun18368
                            }
                        case 620:
                            var15 = var11.multVec;
                            var25 = var15.bind(var11)(var9, var18);
                            var24 = var6.Math;
                            var22 = var24.sqrt;
                            var15 = var11.dot;
                            var15 = var15.bind(var11)(var25, var25);
                            var24 = var22.bind(var24)(var15);
                            var22 = var11.sml;
                            var15 = var4 / var24;
                            var22 = var22.bind(var11)(var15, var25);
                            var18 = var22;
                            var17 = var24;
                            var16 = var23;
                            if (var2 == var23) {
                                _fun18368_ip = 604;
                                continue _fun18368
                            }
                        case 690:
                            var26 = var6.Math;
                            var25 = var26.abs;
                            var15 = var24 - var21;
                            var15 = var25.bind(var26)(var15);
                            var18 = var22;
                            var17 = var24;
                            var16 = var23;
                            var10 = var18;
                            var8 = var21;
                            if (!(var15 < var20)) {
                                _fun18368_ip = 604;
                                continue _fun18368
                            }
                        case 730:
                            var15 = var3 * var0;
                            var3 = new Array(4);
                            var3[0] = var15;
                            var14 = var14 * var0;
                            var3[1] = var14;
                            var13 = var13 * var0;
                            var3[2] = var13;
                            var0 = var12 * var0;
                            var3[3] = var0;
                            var0 = {};
                            var0.Cov = var9;
                            var0.q = var3;
                            var0.e = var10;
                            var0.L = var8;
                            var12 = var11.dot;
                            var9 = var11.sml;
                            var8 = 255;
                            var9 = var9.bind(var11)(var8, var3);
                            var9 = var12.bind(var11)(var9, var10);
                            var0.eMq255 = var9;
                            var9 = var11.dot;
                            var9 = var9.bind(var11)(var10, var3);
                            var0.eMq = var9;
                            var10 = var6.Math;
                            var9 = var10.round;
                            var5 = var3[var5];
                            var5 = var8 * var5;
                            var9 = var9.bind(var10)(var5);
                            var5 = 24;
                            var5 = var9 << var5;
                            var10 = var6.Math;
                            var9 = var10.round;
                            var1 = var3[var1];
                            var1 = var8 * var1;
                            var9 = var9.bind(var10)(var1);
                            var1 = 16;
                            var1 = var9 << var1;
                            var10 = var6.Math;
                            var9 = var10.round;
                            var4 = var3[var4];
                            var4 = var8 * var4;
                            var4 = var9.bind(var10)(var4);
                            var4 = var4 << var7;
                            var7 = var6.Math;
                            var6 = var7.round;
                            var3 = var3[var2];
                            var3 = var8 * var3;
                            var3 = var6.bind(var7)(var3);
                            var1 = var5 | var1;
                            var1 = var1 | var4;
                            var1 = var1 | var3;
                            var1 = var1 >>> var2;
                            var0.rgba = var1;
                            return var0;
                    }
                };
                var _closure2_slot26 = var0;
                var0 = _closure1_slot0;
                var8 = var0._copyTile;
                var _closure2_slot0 = var8;
                var8 = var0._bin;
                var _closure2_slot1 = var8;
                var8 = var0._paeth;
                var _closure2_slot2 = var8;
                var8 = {};
                var9 = global;
                var9 = var9.Uint32Array;
                var10 = var9.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var9
                    }
                });
                var15 = 256;
                var22 = var10;
                var21 = var15;
                var9 = new var22[var9](var21, var20);
                var9 = var9 instanceof Object ? var9 : var10;
                var13 = 8;
                var12 = 3988292384.0;
                var11 = 1;
                var10 = 0;
            case 294:
                var18 = var10;
                var17 = 0;
            case 299:
                var16 = var11 & var18;
                var19 = var18 >>> var11;
                if (var16) {
                    _fun18345_ip = 315;
                    continue _fun18345
                }
            case 310:
                var16 = var19;
                _fun18345_ip = 319;
                continue _fun18345;
            case 315:
                var16 = var12 ^ var19;
            case 319:
                var17 = var17 + 1;
                var18 = var16;
                if (var17 < var13) {
                    _fun18345_ip = 299;
                    continue _fun18345
                }
            case 329:
                var9[var10] = var16;
                var10 = var10 + 1;
                if (var10 < var15) {
                    _fun18345_ip = 294;
                    continue _fun18345
                }
            case 340:
                var8.table = var9;
                var9 = function(arg0, arg1, arg2, arg3) { // Original name: update, environment: var5
                    _fun18369: for (var _fun18369_ip = 0;;) switch (_fun18369_ip) {
                        case 0:
                            var1 = arg0;
                            var8 = arg1;
                            var7 = arg2;
                            var6 = arg3;
                            var5 = 0;
                            var9 = var5 < var6;
                            var3 = 255;
                            var2 = 8;
                            var0 = var1;
                            if (!var9) {
                                _fun18369_ip = 81;
                                continue _fun18369
                            }
                        case 33:
                            var9 = _closure2_slot3;
                            var10 = var9.table;
                            var9 = var7 + var5;
                            var9 = var8[var9];
                            var9 = var1 ^ var9;
                            var9 = var3 & var9;
                            var10 = var10[var9];
                            var9 = var1 >>> var2;
                            var1 = var10 ^ var9;
                            var5 = var5 + 1;
                            var0 = var1;
                            if (var5 < var6) {
                                _fun18369_ip = 33;
                                continue _fun18369
                            }
                        case 81:
                            return var0;
                    }
                };
                var8.update = var9;
                var9 = function(arg0, arg1, arg2) { // Original name: crc, environment: var5
                    var5 = _closure2_slot3;
                    var4 = var5.update;
                    var1 = 4294967295.0;
                    var8 = arg0;
                    var7 = arg1;
                    var6 = arg2;
                    var10 = var5;
                    var9 = var1;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    var0 = var1 ^ var0;
                    return var0;
                };
                var8.crc = var9;
                var _closure2_slot3 = var8;
                var8 = {};
                var9 = function(arg0, arg1) { // Original name: multVec, environment: var5
                    var5 = arg0;
                    var4 = arg1;
                    var6 = 0;
                    var1 = var5[var6];
                    var0 = var4[var6];
                    var1 = var1 * var0;
                    var3 = 1;
                    var2 = var5[var3];
                    var0 = var4[var3];
                    var0 = var2 * var0;
                    var1 = var1 + var0;
                    var2 = 2;
                    var7 = var5[var2];
                    var0 = var4[var2];
                    var0 = var7 * var0;
                    var7 = var1 + var0;
                    var1 = 3;
                    var8 = var5[var1];
                    var0 = var4[var1];
                    var0 = var8 * var0;
                    var7 = var7 + var0;
                    var0 = new Array(4);
                    var0[0] = var7;
                    var7 = 4;
                    var8 = var5[var7];
                    var7 = var4[var6];
                    var8 = var8 * var7;
                    var7 = 5;
                    var9 = var5[var7];
                    var7 = var4[var3];
                    var7 = var9 * var7;
                    var8 = var8 + var7;
                    var7 = 6;
                    var9 = var5[var7];
                    var7 = var4[var2];
                    var7 = var9 * var7;
                    var8 = var8 + var7;
                    var7 = 7;
                    var9 = var5[var7];
                    var7 = var4[var1];
                    var7 = var9 * var7;
                    var7 = var8 + var7;
                    var0[1] = var7;
                    var7 = 8;
                    var8 = var5[var7];
                    var7 = var4[var6];
                    var8 = var8 * var7;
                    var7 = 9;
                    var9 = var5[var7];
                    var7 = var4[var3];
                    var7 = var9 * var7;
                    var8 = var8 + var7;
                    var7 = 10;
                    var9 = var5[var7];
                    var7 = var4[var2];
                    var7 = var9 * var7;
                    var8 = var8 + var7;
                    var7 = 11;
                    var9 = var5[var7];
                    var7 = var4[var1];
                    var7 = var9 * var7;
                    var7 = var8 + var7;
                    var0[2] = var7;
                    var7 = 12;
                    var7 = var5[var7];
                    var6 = var4[var6];
                    var6 = var7 * var6;
                    var7 = 13;
                    var7 = var5[var7];
                    var3 = var4[var3];
                    var3 = var7 * var3;
                    var3 = var6 + var3;
                    var6 = 14;
                    var6 = var5[var6];
                    var2 = var4[var2];
                    var2 = var6 * var2;
                    var2 = var3 + var2;
                    var3 = 15;
                    var3 = var5[var3];
                    var1 = var4[var1];
                    var1 = var3 * var1;
                    var1 = var2 + var1;
                    var0[3] = var1;
                    return var0;
                };
                var8.multVec = var9;
                var9 = function(arg0, arg1) { // Original name: dot, environment: var5
                    var2 = arg0;
                    var3 = arg1;
                    var0 = 0;
                    var1 = var2[var0];
                    var0 = var3[var0];
                    var1 = var1 * var0;
                    var0 = 1;
                    var4 = var2[var0];
                    var0 = var3[var0];
                    var0 = var4 * var0;
                    var1 = var1 + var0;
                    var0 = 2;
                    var4 = var2[var0];
                    var0 = var3[var0];
                    var0 = var4 * var0;
                    var1 = var1 + var0;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = var3[var0];
                    var0 = var2 * var0;
                    var0 = var1 + var0;
                    return var0;
                };
                var8.dot = var9;
                var9 = function(arg0, arg1) { // Original name: sml, environment: var5
                    var2 = arg0;
                    var3 = arg1;
                    var0 = 0;
                    var0 = var3[var0];
                    var1 = var2 * var0;
                    var0 = new Array(4);
                    var0[0] = var1;
                    var1 = 1;
                    var1 = var3[var1];
                    var1 = var2 * var1;
                    var0[1] = var1;
                    var1 = 2;
                    var1 = var3[var1];
                    var1 = var2 * var1;
                    var0[2] = var1;
                    var1 = 3;
                    var1 = var3[var1];
                    var1 = var2 * var1;
                    var0[3] = var1;
                    return var0;
                };
                var8.sml = var9;
                var _closure2_slot4 = var8;
                var8 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Original name: encode, environment: var5
                    _fun18374: for (var _fun18374_ip = 0;;) switch (_fun18374_ip) {
                        case 0:
                            var6 = arg1;
                            var5 = arg2;
                            var7 = arg3;
                            var4 = arg6;
                            var0 = null;
                            if (!(var0 == var7)) {
                                _fun18374_ip = 20;
                                continue _fun18374
                            }
                        case 18:
                            var7 = 0;
                        case 20:
                            if (!(var0 == var4)) {
                                _fun18374_ip = 26;
                                continue _fun18374
                            }
                        case 24:
                            var4 = false;
                        case 26:
                            var3 = _closure2_slot11;
                            var2 = new Array(6);
                            var1 = false;
                            var2[0] = var1;
                            var2[1] = var1;
                            var2[2] = var1;
                            var8 = 0;
                            var2[3] = var8;
                            var2[4] = var4;
                            var2[5] = var1;
                            var4 = undefined;
                            var13 = arg0;
                            var14 = undefined;
                            var12 = var6;
                            var11 = var5;
                            var10 = var7;
                            var9 = var2;
                            var3 = var14[var3](var13, var12, var11, var10, var9, var8);
                            var2 = _closure2_slot10;
                            var1 = -1;
                            var1 = var2.bind(var4)(var3, var1);
                            var2 = _closure2_slot9;
                            var10 = arg4;
                            var9 = arg5;
                            var14 = undefined;
                            var13 = var3;
                            var12 = var6;
                            var11 = var5;
                            var0 = var14[var2](var13, var12, var11, var10, var9, var8);
                            return var0;
                    }
                };
                var0.encode = var8;
                var5 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) { // Original name: encodeLL, environment: var5
                    _fun18375: for (var _fun18375_ip = 0;;) switch (_fun18375_ip) {
                        case 0:
                            var11 = arg0;
                            var6 = arg1;
                            var5 = arg2;
                            var2 = arg3;
                            var0 = arg4;
                            var1 = arg5;
                            var4 = {};
                            var10 = 1;
                            var7 = var10 == var2;
                            var3 = 2;
                            if (!var7) {
                                _fun18375_ip = 35;
                                continue _fun18375
                            }
                        case 33:
                            var3 = 0;
                        case 35:
                            var7 = 0;
                            var9 = var7 == var0;
                            var8 = 4;
                            if (!var9) {
                                _fun18375_ip = 49;
                                continue _fun18375
                            }
                        case 47:
                            var8 = 0;
                        case 49:
                            var3 = var7 + var3;
                            var3 = var3 + var8;
                            var4.ctype = var3;
                            var4.depth = var1;
                            var3 = new Array(0);
                            var4.frames = var3;
                            var9 = global;
                            var8 = var9.Date;
                            var3 = var8.now;
                            var3 = var3.bind(var8)();
                            var0 = var2 + var0;
                            var8 = var0 * var1;
                            var3 = var8 * var6;
                            var0 = var11.length;
                            var0 = var7 < var0;
                            var2 = 8;
                            var1 = 0;
                            if (!var0) {
                                _fun18375_ip = 278;
                                continue _fun18375
                            }
                        case 125:
                            var13 = var4.frames;
                            var12 = var13.push;
                            var0 = {};
                            var14 = {
                                'x': 0,
                                'y': 0
                            };
                            var14.width = var6;
                            var14.height = var5;
                            var0.rect = var14;
                            var16 = var9.Uint8Array;
                            var21 = var11[var1];
                            var15 = var16.prototype;
                            var15 = Object.create(var15, {
                                constructor: {
                                    value: var16
                                }
                            });
                            var22 = var15;
                            var14 = new var22[var16](var21, var20);
                            var14 = var14 instanceof Object ? var14 : var15;
                            var0.img = var14;
                            var0.blend = var7;
                            var0.dispose = var10;
                            var16 = var9.Math;
                            var15 = var16.ceil;
                            var14 = var8 / var2;
                            var14 = var15.bind(var16)(var14);
                            var0.bpp = var14;
                            var16 = var9.Math;
                            var15 = var16.ceil;
                            var14 = var3 / var2;
                            var14 = var15.bind(var16)(var14);
                            var0.bpl = var14;
                            var0 = var12.bind(var13)(var0);
                            var1 = var1 + 1;
                            var0 = var11.length;
                            if (var1 < var0) {
                                _fun18375_ip = 125;
                                continue _fun18375
                            }
                        case 278:
                            var2 = _closure2_slot10;
                            var3 = undefined;
                            var1 = true;
                            var1 = var2.bind(var3)(var4, var7, var1);
                            var2 = _closure2_slot9;
                            var18 = arg6;
                            var17 = arg7;
                            var22 = undefined;
                            var21 = var4;
                            var20 = var6;
                            var19 = var5;
                            var0 = var22[var2](var21, var20, var19, var18, var17, var16);
                            return var0;
                    }
                };
                var0.encodeLL = var5;
                var5 = var0.encode;
                var5.compress = var7;
                var5 = var0.encode;
                var5.dither = var6;
                var0.quantize = var2;
                var2 = var0.quantize;
                var2.findNearest = var4;
                var2 = var0.quantize;
                var2.getKDtree = var3;
                var0 = var0.quantize;
                var0.getNearest = var1;
                var0 = undefined;
                return var0;
        }
    };
    var1 = var1.bind(var0)();
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);