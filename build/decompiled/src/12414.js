// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
    var _closure1_slot2 = var1;
    var1 = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
    var _closure1_slot3 = var1;
    var1 = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
    var _closure1_slot4 = var1;
    var1 = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
    var _closure1_slot5 = var1;
    var1 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7() {
        _fun94802: for (var _fun94802_ip = 0;;) switch (_fun94802_ip) {
            case 0:
                var10 = arg0;
                var36 = arg1;
                var35 = arg2;
                var12 = arg3;
                var5 = arg4;
                var3 = arg5;
                var34 = arg6;
                var2 = arg7;
                var4 = var2.bits;
                var8 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var9 = var1[var0];
                var7 = undefined;
                var9 = var8.bind(var7)(var9);
                var9 = var9.Buf16;
                var11 = var9.prototype;
                var11 = Object.create(var11, {
                    constructor: {
                        value: var9
                    }
                });
                var33 = 16;
                var49 = var11;
                var48 = var33;
                var9 = new var49[var9](var48, var47);
                var32 = var9 instanceof Object ? var9 : var11;
                var1 = var1[var0];
                var1 = var8.bind(var7)(var1);
                var1 = var1.Buf16;
                var7 = var1.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var1
                    }
                });
                var49 = var7;
                var48 = var33;
                var1 = new var49[var1](var48, var47);
                var11 = var1 instanceof Object ? var1 : var7;
                var13 = 15;
                var1 = 0;
            case 129:
                var32[var1] = var0;
                var1 = var1 + 1;
                if (var1 <= var13) {
                    _fun94802_ip = 129;
                    continue _fun94802
                }
            case 140:
                var7 = var0 < var12;
                var1 = 0;
                if (!var7) {
                    _fun94802_ip = 175;
                    continue _fun94802
                }
            case 149:
                var7 = var35 + var1;
                var8 = var36[var7];
                var7 = var32[var8];
                var7 = var7 + 1;
                var32[var8] = var7;
                var1 = var1 + 1;
                if (var1 < var12) {
                    _fun94802_ip = 149;
                    continue _fun94802
                }
            case 175:
                var7 = var32[var13];
                var1 = 1;
                var8 = var13;
                var31 = var8;
                if (!(var0 === var7)) {
                    _fun94802_ip = 216;
                    continue _fun94802
                }
            case 192:
                var9 = var8 - 1;
                var31 = var9;
                if (!(var9 >= var1)) {
                    _fun94802_ip = 216;
                    continue _fun94802
                }
            case 202:
                var7 = var32[var9];
                var8 = var9;
                var31 = var8;
                if (var0 === var7) {
                    _fun94802_ip = 192;
                    continue _fun94802
                }
            case 216:
                if (!(var4 > var31)) {
                    _fun94802_ip = 223;
                    continue _fun94802
                }
            case 220:
                var4 = var31;
            case 223:
                if (!(var0 !== var31)) {
                    _fun94802_ip = 1127;
                    continue _fun94802
                }
            case 230:
                var9 = var1;
                if (!(var1 < var31)) {
                    _fun94802_ip = 275;
                    continue _fun94802
                }
            case 237:
                var7 = var32[var1];
                var8 = var1;
                var9 = var8;
                if (!(var0 === var7)) {
                    _fun94802_ip = 275;
                    continue _fun94802
                }
            case 251:
                var14 = var8 + 1;
                var9 = var14;
                if (!(var14 < var31)) {
                    _fun94802_ip = 275;
                    continue _fun94802
                }
            case 261:
                var7 = var32[var14];
                var8 = var14;
                var9 = var8;
                if (var0 === var7) {
                    _fun94802_ip = 251;
                    continue _fun94802
                }
            case 275:
                if (!(var4 < var9)) {
                    _fun94802_ip = 282;
                    continue _fun94802
                }
            case 279:
                var4 = var9;
            case 282:
                var14 = var1;
                var8 = var14;
            case 288:
                var15 = var32[var14];
                var7 = var8 << var1;
                var7 = var7 - var15;
                if (!(!(var7 < var0))) {
                    _fun94802_ip = 1119;
                    continue _fun94802
                }
            case 307:
                var14 = var14 + 1;
                var8 = var7;
                if (var14 <= var13) {
                    _fun94802_ip = 288;
                    continue _fun94802
                }
            case 317:
                if (!(var7 > var0)) {
                    _fun94802_ip = 335;
                    continue _fun94802
                }
            case 321:
                if (!(var0 !== var10)) {
                    _fun94802_ip = 1111;
                    continue _fun94802
                }
            case 328:
                if (!(var1 === var31)) {
                    _fun94802_ip = 1111;
                    continue _fun94802
                }
            case 335:
                var11[var1] = var0;
                var8 = var1;
            case 342:
                var15 = var8 + var1;
                var16 = var11[var8];
                var14 = var32[var8];
                var14 = var16 + var14;
                var11[var15] = var14;
                var8 = var8 + 1;
                if (var8 < var13) {
                    _fun94802_ip = 342;
                    continue _fun94802
                }
            case 369:
                var13 = var0 < var12;
                var8 = 0;
                if (!var13) {
                    _fun94802_ip = 423;
                    continue _fun94802
                }
            case 378:
                var13 = var35 + var8;
                var13 = var36[var13];
                if (!(var0 !== var13)) {
                    _fun94802_ip = 416;
                    continue _fun94802
                }
            case 390:
                var13 = var35 + var8;
                var15 = var36[var13];
                var13 = var11[var15];
                var13 = parseFloat(var13);
                var14 = var13 + 1;
                var11[var15] = var14;
                var34[var13] = var8;
            case 416:
                var8 = var8 + 1;
                if (var8 < var12) {
                    _fun94802_ip = 378;
                    continue _fun94802
                }
            case 423:
                var30 = 19;
                var29 = var34;
                var28 = 0;
                var27 = var29;
                var26 = 0;
                if (!(var0 !== var10)) {
                    _fun94802_ip = 487;
                    continue _fun94802
                }
            case 440:
                if (!(var1 !== var10)) {
                    _fun94802_ip = 464;
                    continue _fun94802
                }
            case 444:
                var29 = _closure1_slot4;
                var27 = _closure1_slot5;
                var30 = -1;
                var28 = 0;
                var26 = 0;
                _fun94802_ip = 487;
                continue _fun94802;
            case 464:
                var29 = _closure1_slot2;
                var27 = _closure1_slot3;
                var30 = 256;
                var28 = -257;
                var26 = var28;
            case 487:
                var6 = var1 << var4;
                var25 = var6 - var1;
                var24 = var1 === var10;
                if (!var24) {
                    _fun94802_ip = 515;
                    continue _fun94802
                }
            case 502:
                var8 = 852;
                if (!(!(var6 > var8))) {
                    _fun94802_ip = 1109;
                    continue _fun94802
                }
            case 515:
                var8 = 2;
                var23 = var8 === var10;
                var10 = -1;
                var8 = 24;
                var22 = 592;
                var21 = 852;
                var20 = 96;
                var19 = var10;
                var18 = var3;
                var17 = var9;
                var16 = 0;
                var15 = var4;
                var14 = 0;
                var13 = var7;
                var12 = var6;
                var11 = 0;
                if (!var23) {
                    _fun94802_ip = 604;
                    continue _fun94802
                }
            case 573:
                var19 = var10;
                var18 = var3;
                var17 = var9;
                var16 = 0;
                var15 = var4;
                var14 = 0;
                var13 = var7;
                var11 = 0;
                var12 = var6;
                if (!(!(var12 > var22))) {
                    _fun94802_ip = 1109;
                    continue _fun94802
                }
            case 604:
                var44 = var17 - var14;
                var7 = var34[var16];
                var42 = var19;
                var10 = var18;
                var9 = var17;
                var43 = var15;
                var6 = var14;
                var41 = var12;
                if (!(!(var7 < var30))) {
                    _fun94802_ip = 676;
                    continue _fun94802
                }
            case 634:
                var7 = var34[var16];
                var7 = var7 > var30;
                var39 = var20;
                var38 = 0;
                if (!var7) {
                    _fun94802_ip = 682;
                    continue _fun94802
                }
            case 650:
                var7 = var34[var16];
                var7 = var26 + var7;
                var39 = var27[var7];
                var7 = var34[var16];
                var7 = var28 + var7;
                var38 = var29[var7];
                _fun94802_ip = 682;
                continue _fun94802;
            case 676:
                var38 = var34[var16];
                var39 = 0;
            case 682:
                var7 = var9 - var6;
                var37 = var1 << var7;
                var40 = var1 << var43;
                var7 = var40;
            case 697:
                var45 = var11 >> var6;
                var45 = var10 + var45;
                var7 = var7 - var37;
                var47 = var44 << var8;
                var46 = var39 << var33;
                var46 = var47 | var46;
                var46 = var46 | var38;
                var45 = var45 + var7;
                var5[var45] = var46;
                if (var0 !== var7) {
                    _fun94802_ip = 697;
                    continue _fun94802
                }
            case 737:
                var7 = var9 - var1;
                var38 = var1 << var7;
                var7 = var11 & var38;
                var37 = var38;
                var38 = var37;
                if (!var7) {
                    _fun94802_ip = 775;
                    continue _fun94802
                }
            case 758:
                var39 = var37 >> var1;
                var7 = var11 & var39;
                var37 = var39;
                var38 = var37;
                if (var7) {
                    _fun94802_ip = 758;
                    continue _fun94802
                }
            case 775:
                var7 = 0;
                if (!(var7 !== var38)) {
                    _fun94802_ip = 793;
                    continue _fun94802
                }
            case 781:
                var37 = var38 - var1;
                var37 = var11 & var37;
                var7 = var37 + var38;
            case 793:
                var37 = var16 + 1;
                var38 = var32[var9];
                var39 = var38 - 1;
                var32[var9] = var39;
                var38 = var9;
                if (!(var0 == var39)) {
                    _fun94802_ip = 833;
                    continue _fun94802
                }
            case 814:
                if (!(var9 !== var31)) {
                    _fun94802_ip = 1071;
                    continue _fun94802
                }
            case 821:
                var39 = var34[var37];
                var39 = var35 + var39;
                var38 = var36[var39];
            case 833:
                var19 = var42;
                var18 = var10;
                var17 = var38;
                var16 = var37;
                var15 = var43;
                var14 = var6;
                var12 = var41;
                var11 = var7;
                if (!(var38 > var4)) {
                    _fun94802_ip = 604;
                    continue _fun94802
                }
            case 864:
                var39 = var7 & var25;
                var18 = var10;
                var17 = var38;
                var16 = var37;
                var15 = var43;
                var14 = var6;
                var12 = var41;
                var11 = var7;
                var19 = var42;
                if (var39 === var19) {
                    _fun94802_ip = 604;
                    continue _fun94802
                }
            case 899:
                var14 = var6;
                if (!(var0 === var14)) {
                    _fun94802_ip = 909;
                    continue _fun94802
                }
            case 906:
                var14 = var4;
            case 909:
                var18 = var10 + var40;
                var44 = var38 - var14;
                var42 = var1 << var44;
                var40 = var44 + var14;
                var15 = var44;
                var13 = var42;
                if (!(var40 < var31)) {
                    _fun94802_ip = 1006;
                    continue _fun94802
                }
            case 935:
                var40 = var44 + var14;
                var40 = var32[var40];
                var40 = var42 - var40;
                var42 = var44;
                var15 = var42;
                var13 = var40;
                if (!(!(var13 <= var0))) {
                    _fun94802_ip = 1006;
                    continue _fun94802
                }
            case 960:
                var44 = var42 + 1;
                var45 = var40 << var1;
                var43 = var44 + var14;
                var15 = var44;
                var13 = var45;
                if (!(var43 < var31)) {
                    _fun94802_ip = 1006;
                    continue _fun94802
                }
            case 981:
                var43 = var44 + var14;
                var43 = var32[var43];
                var40 = var45 - var43;
                var42 = var44;
                var15 = var42;
                var13 = var40;
                if (!(var13 <= var0)) {
                    _fun94802_ip = 960;
                    continue _fun94802
                }
            case 1006:
                var40 = var1 << var15;
                var12 = var41 + var40;
                if (!var24) {
                    _fun94802_ip = 1021;
                    continue _fun94802
                }
            case 1017:
                if (!(!(var12 > var21))) {
                    _fun94802_ip = 1069;
                    continue _fun94802
                }
            case 1021:
                if (!var23) {
                    _fun94802_ip = 1028;
                    continue _fun94802
                }
            case 1024:
                if (!(!(var12 > var22))) {
                    _fun94802_ip = 1069;
                    continue _fun94802
                }
            case 1028:
                var42 = var4 << var8;
                var40 = var15 << var33;
                var41 = var18 - var3;
                var40 = var42 | var40;
                var40 = var40 | var41;
                var5[var39] = var40;
                var19 = var39;
                var17 = var38;
                var16 = var37;
                var11 = var7;
                _fun94802_ip = 604;
                continue _fun94802;
            case 1069:
                return var1;
            case 1071:
                if (!(var0 !== var7)) {
                    _fun94802_ip = 1101;
                    continue _fun94802
                }
            case 1075:
                var7 = var10 + var7;
                var6 = var9 - var6;
                var8 = var6 << var8;
                var6 = 4194304;
                var6 = var6 | var8;
                var5[var7] = var6;
            case 1101:
                var2.bits = var4;
                return var0;
            case 1109:
                return var1;
            case 1111:
                var4 = -1;
                return var4;
            case 1119:
                var4 = -1;
                return var4;
            case 1127:
                var3 = parseFloat(var3);
                var4 = 20971520;
                var5[var3] = var4;
                var3 = var3 + 1;
                var3 = parseFloat(var3);
                var5[var3] = var4;
                var2.bits = var1;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12403]);