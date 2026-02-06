// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = {
        'PATTERN_POSITION_TABLE': null,
        'G15': 1335,
        'G18': 7973,
        'G15_MASK': 21522
    };
    var2 = new Array(40);
    var3 = new Array(0);
    var2[0] = var3;
    var3 = [6, 18];
    var2[1] = var3;
    var3 = [6, 22];
    var2[2] = var3;
    var3 = [6, 26];
    var2[3] = var3;
    var3 = [6, 30];
    var2[4] = var3;
    var3 = [6, 34];
    var2[5] = var3;
    var3 = [6, 22, 38];
    var2[6] = var3;
    var3 = [6, 24, 42];
    var2[7] = var3;
    var3 = [6, 26, 46];
    var2[8] = var3;
    var3 = [6, 28, 50];
    var2[9] = var3;
    var3 = [6, 30, 54];
    var2[10] = var3;
    var3 = [6, 32, 58];
    var2[11] = var3;
    var3 = [6, 34, 62];
    var2[12] = var3;
    var3 = [6, 26, 46, 66];
    var2[13] = var3;
    var3 = [6, 26, 48, 70];
    var2[14] = var3;
    var3 = [6, 26, 50, 74];
    var2[15] = var3;
    var3 = [6, 30, 54, 78];
    var2[16] = var3;
    var3 = [6, 30, 56, 82];
    var2[17] = var3;
    var3 = [6, 30, 58, 86];
    var2[18] = var3;
    var3 = [6, 34, 62, 90];
    var2[19] = var3;
    var3 = [6, 28, 50, 72, 94];
    var2[20] = var3;
    var3 = [6, 26, 50, 74, 98];
    var2[21] = var3;
    var3 = [6, 30, 54, 78, 102];
    var2[22] = var3;
    var3 = [6, 28, 54, 80, 106];
    var2[23] = var3;
    var3 = [6, 32, 58, 84, 110];
    var2[24] = var3;
    var3 = [6, 30, 58, 86, 114];
    var2[25] = var3;
    var3 = [6, 34, 62, 90, 118];
    var2[26] = var3;
    var3 = [6, 26, 50, 74, 98, 122];
    var2[27] = var3;
    var3 = [6, 30, 54, 78, 102, 126];
    var2[28] = var3;
    var3 = [6, 26, 52, 78, 104, 130];
    var2[29] = var3;
    var3 = [6, 30, 56, 82, 108, 134];
    var2[30] = var3;
    var3 = [6, 34, 60, 86, 112, 138];
    var2[31] = var3;
    var3 = [6, 30, 58, 86, 114, 142];
    var2[32] = var3;
    var3 = [6, 34, 62, 90, 118, 146];
    var2[33] = var3;
    var3 = [6, 30, 54, 78, 102, 126, 150];
    var2[34] = var3;
    var3 = [6, 24, 50, 76, 102, 128, 154];
    var2[35] = var3;
    var3 = [6, 28, 54, 80, 106, 132, 158];
    var2[36] = var3;
    var3 = [6, 32, 58, 84, 110, 136, 162];
    var2[37] = var3;
    var3 = [6, 26, 54, 82, 110, 138, 166];
    var2[38] = var3;
    var3 = [6, 30, 58, 86, 114, 142, 170];
    var2[39] = var3;
    var1.PATTERN_POSITION_TABLE = var2;
    var2 = function arg0() {
        _fun67729: for (var _fun67729_ip = 0;;) switch (_fun67729_ip) {
            case 0:
                var3 = arg0;
                var1 = 10;
                var2 = var3 << var1;
                var5 = _closure1_slot2;
                var4 = var5.getBCHDigit;
                var5 = var4.bind(var5)(var2);
                var7 = _closure1_slot2;
                var6 = var7.getBCHDigit;
                var4 = _closure1_slot2;
                var4 = var4.G15;
                var4 = var6.bind(var7)(var4);
                var4 = var5 - var4;
                var6 = 0;
                var5 = var2;
                var2 = var5;
                if (!(var4 >= var6)) {
                    _fun67729_ip = 185;
                    continue _fun67729
                }
            case 69:
                var4 = _closure1_slot2;
                var7 = var4.G15;
                var8 = _closure1_slot2;
                var4 = var8.getBCHDigit;
                var8 = var4.bind(var8)(var5);
                var10 = _closure1_slot2;
                var9 = var10.getBCHDigit;
                var4 = _closure1_slot2;
                var4 = var4.G15;
                var4 = var9.bind(var10)(var4);
                var4 = var8 - var4;
                var4 = var7 << var4;
                var7 = var5 ^ var4;
                var8 = _closure1_slot2;
                var4 = var8.getBCHDigit;
                var8 = var4.bind(var8)(var7);
                var10 = _closure1_slot2;
                var9 = var10.getBCHDigit;
                var4 = _closure1_slot2;
                var4 = var4.G15;
                var4 = var9.bind(var10)(var4);
                var4 = var8 - var4;
                var5 = var7;
                var2 = var5;
                if (var4 >= var6) {
                    _fun67729_ip = 69;
                    continue _fun67729
                }
            case 185:
                var1 = var3 << var1;
                var1 = var1 | var2;
                var0 = _closure1_slot2;
                var0 = var0.G15_MASK;
                var0 = var1 ^ var0;
                return var0;
        }
    };
    var1.getBCHTypeInfo = var2;
    var2 = function arg0() {
        _fun67730: for (var _fun67730_ip = 0;;) switch (_fun67730_ip) {
            case 0:
                var2 = arg0;
                var0 = 12;
                var1 = var2 << var0;
                var4 = _closure1_slot2;
                var3 = var4.getBCHDigit;
                var4 = var3.bind(var4)(var1);
                var7 = _closure1_slot2;
                var5 = var7.getBCHDigit;
                var3 = _closure1_slot2;
                var3 = var3.G18;
                var3 = var5.bind(var7)(var3);
                var3 = var4 - var3;
                var5 = 0;
                var4 = var1;
                var1 = var4;
                if (!(var3 >= var5)) {
                    _fun67730_ip = 185;
                    continue _fun67730
                }
            case 69:
                var3 = _closure1_slot2;
                var7 = var3.G18;
                var8 = _closure1_slot2;
                var3 = var8.getBCHDigit;
                var8 = var3.bind(var8)(var4);
                var10 = _closure1_slot2;
                var9 = var10.getBCHDigit;
                var3 = _closure1_slot2;
                var3 = var3.G18;
                var3 = var9.bind(var10)(var3);
                var3 = var8 - var3;
                var3 = var7 << var3;
                var7 = var4 ^ var3;
                var8 = _closure1_slot2;
                var3 = var8.getBCHDigit;
                var8 = var3.bind(var8)(var7);
                var10 = _closure1_slot2;
                var9 = var10.getBCHDigit;
                var3 = _closure1_slot2;
                var3 = var3.G18;
                var3 = var9.bind(var10)(var3);
                var3 = var8 - var3;
                var4 = var7;
                var1 = var4;
                if (var3 >= var5) {
                    _fun67730_ip = 69;
                    continue _fun67730
                }
            case 185:
                var0 = var2 << var0;
                var0 = var0 | var1;
                return var0;
        }
    };
    var1.getBCHTypeNumber = var2;
    var2 = function arg0() {
        _fun67731: for (var _fun67731_ip = 0;;) switch (_fun67731_ip) {
            case 0:
                var4 = arg0;
                var3 = 0;
                var5 = var3 != var4;
                var2 = 1;
                var1 = 0;
                var0 = 0;
                if (!var5) {
                    _fun67731_ip = 33;
                    continue _fun67731
                }
            case 19:
                var1 = var1 + 1;
                var4 = var4 >>> var2;
                var0 = var1;
                if (var3 !== var4) {
                    _fun67731_ip = 19;
                    continue _fun67731
                }
            case 33:
                return var0;
        }
    };
    var1.getBCHDigit = var2;
    var2 = function arg0() {
        var0 = _closure1_slot2;
        var1 = var0.PATTERN_POSITION_TABLE;
        var2 = arg0;
        var0 = 1;
        var0 = var2 - var0;
        var0 = var1[var0];
        return var0;
    };
    var1.getPatternPosition = var2;
    var2 = function arg0, arg1, arg2() {
        _fun67733: for (var _fun67733_ip = 0;;) switch (_fun67733_ip) {
            case 0:
                var6 = arg0;
                var2 = arg1;
                var0 = arg2;
                var1 = 0;
                if (!(var1 !== var6)) {
                    _fun67733_ip = 303;
                    continue _fun67733
                }
            case 18:
                var3 = 1;
                if (!(var3 !== var6)) {
                    _fun67733_ip = 290;
                    continue _fun67733
                }
            case 28:
                var5 = 2;
                if (!(var5 !== var6)) {
                    _fun67733_ip = 277;
                    continue _fun67733
                }
            case 38:
                var4 = 3;
                if (!(var4 !== var6)) {
                    _fun67733_ip = 263;
                    continue _fun67733
                }
            case 48:
                var3 = 4;
                if (!(var3 !== var6)) {
                    _fun67733_ip = 205;
                    continue _fun67733
                }
            case 58:
                var3 = 5;
                if (!(var3 !== var6)) {
                    _fun67733_ip = 179;
                    continue _fun67733
                }
            case 65:
                var3 = 6;
                if (!(var3 !== var6)) {
                    _fun67733_ip = 149;
                    continue _fun67733
                }
            case 72:
                var3 = 7;
                if (!(var3 !== var6)) {
                    _fun67733_ip = 119;
                    continue _fun67733
                }
            case 79:
                var3 = global;
                var7 = var3.Error;
                var3 = 'bad maskPattern:';
                var9 = var3 + var6;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var10 = var6;
                var3 = new var10[var7](var9, var8);
                var3 = var3 instanceof Object ? var3 : var6;
                throw var3;
            case 119:
                var3 = var2 * var0;
                var6 = var3 % var4;
                var3 = var2 + var0;
                var3 = var3 % var5;
                var3 = var6 + var3;
                var3 = var3 % var5;
                var3 = var3 === var1;
                return var3;
            case 149:
                var3 = var2 * var0;
                var6 = var3 % var5;
                var3 = var2 * var0;
                var3 = var3 % var4;
                var3 = var6 + var3;
                var3 = var3 % var5;
                var3 = var3 === var1;
                return var3;
            case 179:
                var3 = var2 * var0;
                var6 = var3 % var5;
                var3 = var2 * var0;
                var3 = var3 % var4;
                var3 = var6 + var3;
                var3 = var3 === var1;
                return var3;
            case 205:
                var3 = global;
                var8 = var3.Math;
                var7 = var8.floor;
                var6 = var2 / var5;
                var6 = var7.bind(var8)(var6);
                var8 = var3.Math;
                var7 = var8.floor;
                var3 = var0 / var4;
                var3 = var7.bind(var8)(var3);
                var3 = var6 + var3;
                var3 = var3 % var5;
                var3 = var3 === var1;
                return var3;
            case 263:
                var3 = var2 + var0;
                var3 = var3 % var4;
                var3 = var3 === var1;
                return var3;
            case 277:
                var3 = 3;
                var3 = var0 % var3;
                var3 = var3 === var1;
                return var3;
            case 290:
                var3 = 2;
                var3 = var2 % var3;
                var3 = var3 === var1;
                return var3;
            case 303:
                var2 = var2 + var0;
                var0 = 2;
                var0 = var2 % var0;
                var0 = var0 === var1;
                return var0;
        }
    };
    var1.getMask = var2;
    var2 = function arg0() {
        _fun67734: for (var _fun67734_ip = 0;;) switch (_fun67734_ip) {
            case 0:
                var7 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 0;
                var0 = var0[var5];
                var4 = undefined;
                var2 = var1.bind(var4)(var0);
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = [1];
                var14 = var1;
                var12 = 0;
                var0 = new var14[var2](var13, var12, var11);
                var2 = var0 instanceof Object ? var0 : var1;
                var8 = var5 < var7;
                var3 = 1;
                var1 = 0;
                var0 = var2;
                if (!var8) {
                    _fun67734_ip = 171;
                    continue _fun67734
                }
            case 74:
                var9 = var2.multiply;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var11 = var8[var5];
                var11 = var10.bind(var4)(var11);
                var8 = var8[var3];
                var10 = var10.bind(var4)(var8);
                var8 = var10.gexp;
                var10 = var8.bind(var10)(var1);
                var8 = [1];
                var8[1] = var10;
                var10 = var11.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var11
                    }
                });
                var14 = var10;
                var13 = var8;
                var12 = 0;
                var8 = new var14[var11](var13, var12, var11);
                var8 = var8 instanceof Object ? var8 : var10;
                var2 = var9.bind(var2)(var8);
                var1 = var1 + 1;
                var0 = var2;
                if (var1 < var7) {
                    _fun67734_ip = 74;
                    continue _fun67734
                }
            case 171:
                return var0;
        }
    };
    var1.getErrorCorrectPolynomial = var2;
    var2 = function arg0, arg1() {
        _fun67735: for (var _fun67735_ip = 0;;) switch (_fun67735_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = 1;
                if (!(var0 <= var3)) {
                    _fun67735_ip = 23;
                    continue _fun67735
                }
            case 13:
                var0 = 10;
                if (!(!(var3 < var0))) {
                    _fun67735_ip = 438;
                    continue _fun67735
                }
            case 23:
                var1 = 27;
                if (!(!(var3 < var1))) {
                    _fun67735_ip = 259;
                    continue _fun67735
                }
            case 33:
                var1 = 41;
                if (!(!(var3 < var1))) {
                    _fun67735_ip = 80;
                    continue _fun67735
                }
            case 40:
                var1 = global;
                var4 = var1.Error;
                var1 = 'type:';
                var7 = var1 + var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var3;
                var1 = new var8[var4](var7, var6);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
            case 80:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var5 = 2;
                var3 = var3[var5];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.MODE_NUMBER;
                if (!(var3 !== var2)) {
                    _fun67735_ip = 254;
                    continue _fun67735
                }
            case 118:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var3 = var6.bind(var4)(var3);
                var3 = var3.MODE_ALPHA_NUM;
                if (!(var3 !== var2)) {
                    _fun67735_ip = 249;
                    continue _fun67735
                }
            case 145:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var3 = var6.bind(var4)(var3);
                var3 = var3.MODE_8BIT_BYTE;
                if (!(var3 !== var2)) {
                    _fun67735_ip = 244;
                    continue _fun67735
                }
            case 172:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.MODE_KANJI;
                if (!(var1 !== var2)) {
                    _fun67735_ip = 239;
                    continue _fun67735
                }
            case 199:
                var1 = global;
                var4 = var1.Error;
                var1 = 'mode:';
                var7 = var1 + var2;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var3;
                var1 = new var8[var4](var7, var6);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
            case 239:
                var1 = 12;
                return var1;
            case 244:
                var1 = 16;
                return var1;
            case 249:
                var1 = 13;
                return var1;
            case 254:
                var1 = 14;
                return var1;
            case 259:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var5 = 2;
                var3 = var3[var5];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.MODE_NUMBER;
                if (!(var3 !== var2)) {
                    _fun67735_ip = 433;
                    continue _fun67735
                }
            case 297:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var3 = var6.bind(var4)(var3);
                var3 = var3.MODE_ALPHA_NUM;
                if (!(var3 !== var2)) {
                    _fun67735_ip = 428;
                    continue _fun67735
                }
            case 324:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var3 = var6.bind(var4)(var3);
                var3 = var3.MODE_8BIT_BYTE;
                if (!(var3 !== var2)) {
                    _fun67735_ip = 423;
                    continue _fun67735
                }
            case 351:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.MODE_KANJI;
                if (!(var1 !== var2)) {
                    _fun67735_ip = 418;
                    continue _fun67735
                }
            case 378:
                var1 = global;
                var4 = var1.Error;
                var1 = 'mode:';
                var7 = var1 + var2;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var3;
                var1 = new var8[var4](var7, var6);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
            case 418:
                var1 = 10;
                return var1;
            case 423:
                var1 = 16;
                return var1;
            case 428:
                var1 = 11;
                return var1;
            case 433:
                var1 = 12;
                return var1;
            case 438:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var5 = 2;
                var3 = var3[var5];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.MODE_NUMBER;
                if (!(var3 !== var2)) {
                    _fun67735_ip = 607;
                    continue _fun67735
                }
            case 476:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var3 = var6.bind(var4)(var3);
                var3 = var3.MODE_ALPHA_NUM;
                if (!(var3 !== var2)) {
                    _fun67735_ip = 602;
                    continue _fun67735
                }
            case 503:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var3 = var6.bind(var4)(var3);
                var3 = var3.MODE_8BIT_BYTE;
                if (!(var3 !== var2)) {
                    _fun67735_ip = 597;
                    continue _fun67735
                }
            case 530:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.MODE_KANJI;
                if (!(var1 !== var2)) {
                    _fun67735_ip = 597;
                    continue _fun67735
                }
            case 557:
                var1 = global;
                var3 = var1.Error;
                var1 = 'mode:';
                var7 = var1 + var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 597:
                var1 = 8;
                return var1;
            case 602:
                var1 = 9;
                return var1;
            case 607:
                return var0;
        }
    };
    var1.getLengthInBits = var2;
    var2 = function arg0() {
        _fun67736: for (var _fun67736_ip = 0;;) switch (_fun67736_ip) {
            case 0:
                var7 = arg0;
                var0 = var7.getModuleCount;
                var5 = var0.bind(var7)();
                var4 = 0;
                var15 = var4 < var5;
                var12 = 3;
                var2 = 5;
                var14 = -1;
                var11 = 1;
                var13 = 0;
                var10 = 0;
                var9 = undefined;
                var6 = undefined;
                var3 = undefined;
                var0 = undefined;
                var1 = 0;
                if (!var15) {
                    _fun67736_ip = 314;
                    continue _fun67736
                }
            case 54:
                var19 = var4 < var5;
                var18 = var13;
                var16 = var0;
                var17 = 0;
                var15 = var18;
                var0 = var16;
                if (!var19) {
                    _fun67736_ip = 298;
                    continue _fun67736
                }
            case 78:
                var19 = var7.isDark;
                var21 = var19.bind(var7)(var10, var17);
                var24 = var17;
                var25 = 0;
                var23 = var14;
            case 98:
                var20 = var10 + var23;
                var22 = var25;
                var19 = var16;
                if (!(!(var20 < var4))) {
                    _fun67736_ip = 229;
                    continue _fun67736
                }
            case 112:
                var20 = var10 + var23;
                var28 = var5 <= var20;
                var27 = var4 == var23;
                var26 = var25;
                var20 = var14;
                var22 = var26;
                var19 = var16;
                if (var28) {
                    _fun67736_ip = 229;
                    continue _fun67736
                }
            case 139:
                var28 = var24 + var20;
                var28 = var28 < var4;
                if (var28) {
                    _fun67736_ip = 158;
                    continue _fun67736
                }
            case 150:
                var29 = var24 + var20;
                var28 = var5 <= var29;
            case 158:
                if (var28) {
                    _fun67736_ip = 174;
                    continue _fun67736
                }
            case 161:
                var29 = var27;
                if (!var29) {
                    _fun67736_ip = 171;
                    continue _fun67736
                }
            case 167:
                var29 = var4 == var20;
            case 171:
                var28 = var29;
            case 174:
                var29 = var26;
                if (var28) {
                    _fun67736_ip = 213;
                    continue _fun67736
                }
            case 180:
                var31 = var7.isDark;
                var30 = var10 + var23;
                var28 = var24 + var20;
                var30 = var31.bind(var7)(var30, var28);
                var28 = var26;
                if (!(var21 == var30)) {
                    _fun67736_ip = 210;
                    continue _fun67736
                }
            case 207:
                var28 = var26 + 1;
            case 210:
                var29 = var28;
            case 213:
                var20 = var20 + 1;
                var26 = var29;
                var22 = var26;
                var19 = var20;
                if (var19 <= var11) {
                    _fun67736_ip = 139;
                    continue _fun67736
                }
            case 229:
                var20 = var23 + 1;
                var25 = var22;
                var23 = var20;
                var16 = var19;
                if (var20 <= var11) {
                    _fun67736_ip = 98;
                    continue _fun67736
                }
            case 248:
                var23 = var18;
                if (!(var22 > var2)) {
                    _fun67736_ip = 267;
                    continue _fun67736
                }
            case 255:
                var25 = var12 + var22;
                var25 = var25 - var2;
                var23 = var18 + var25;
            case 267:
                var17 = var24 + 1;
                var18 = var23;
                var16 = var19;
                var15 = var18;
                var9 = var22;
                var6 = var21;
                var3 = var20;
                var0 = var16;
                if (var17 < var5) {
                    _fun67736_ip = 78;
                    continue _fun67736
                }
            case 298:
                var10 = var10 + 1;
                var13 = var15;
                var1 = var13;
                if (var10 < var5) {
                    _fun67736_ip = 54;
                    continue _fun67736
                }
            case 314:
                var0 = var5 - var11;
                var10 = 4;
                var6 = var1;
                var3 = 0;
                var8 = undefined;
                var1 = var6;
                if (!(var4 < var0)) {
                    _fun67736_ip = 523;
                    continue _fun67736
                }
            case 338:
                var0 = var5 - var11;
                var14 = var6;
                var13 = 0;
                var9 = var14;
                if (!(var4 < var0)) {
                    _fun67736_ip = 503;
                    continue _fun67736
                }
            case 357:
                var0 = var7.isDark;
                var15 = var0.bind(var7)(var3, var13);
                var0 = var13;
                var16 = 0;
                if (!var15) {
                    _fun67736_ip = 380;
                    continue _fun67736
                }
            case 377:
                var16 = var11;
            case 380:
                var17 = var7.isDark;
                var15 = var3 + var11;
                var17 = var17.bind(var7)(var15, var0);
                var15 = var16;
                if (!var17) {
                    _fun67736_ip = 405;
                    continue _fun67736
                }
            case 402:
                var15 = var16 + 1;
            case 405:
                var17 = var7.isDark;
                var16 = var0 + var11;
                var17 = var17.bind(var7)(var3, var16);
                var16 = var15;
                if (!var17) {
                    _fun67736_ip = 430;
                    continue _fun67736
                }
            case 427:
                var16 = var15 + 1;
            case 430:
                var18 = var7.isDark;
                var17 = var3 + var11;
                var15 = var0 + var11;
                var17 = var18.bind(var7)(var17, var15);
                var15 = var16;
                if (!var17) {
                    _fun67736_ip = 459;
                    continue _fun67736
                }
            case 456:
                var15 = var16 + 1;
            case 459:
                var17 = var4 !== var15;
                if (!var17) {
                    _fun67736_ip = 470;
                    continue _fun67736
                }
            case 466:
                var17 = var10 !== var15;
            case 470:
                var16 = var14;
                if (var17) {
                    _fun67736_ip = 480;
                    continue _fun67736
                }
            case 476:
                var16 = var14 + var12;
            case 480:
                var13 = var0 + 1;
                var0 = var5 - var11;
                var14 = var16;
                var9 = var14;
                var8 = var15;
                if (var13 < var0) {
                    _fun67736_ip = 357;
                    continue _fun67736
                }
            case 503:
                var3 = var3 + 1;
                var0 = var5 - var11;
                var6 = var9;
                var1 = var6;
                if (var3 < var0) {
                    _fun67736_ip = 338;
                    continue _fun67736
                }
            case 523:
                var13 = var4 < var5;
                var9 = 6;
                var8 = 40;
                var6 = 2;
                var3 = var1;
                var0 = 0;
                var1 = var3;
                if (!var13) {
                    _fun67736_ip = 750;
                    continue _fun67736
                }
            case 550:
                var14 = var5 - var9;
                var16 = var3;
                var15 = 0;
                var13 = var16;
                if (!(var4 < var14)) {
                    _fun67736_ip = 734;
                    continue _fun67736
                }
            case 569:
                var14 = var7.isDark;
                var18 = var14.bind(var7)(var0, var15);
                var14 = var15;
                if (!var18) {
                    _fun67736_ip = 606;
                    continue _fun67736
                }
            case 587:
                var19 = var7.isDark;
                var17 = var14 + var11;
                var17 = var19.bind(var7)(var0, var17);
                var18 = !var17;
            case 606:
                if (!var18) {
                    _fun67736_ip = 625;
                    continue _fun67736
                }
            case 609:
                var19 = var7.isDark;
                var17 = var14 + var6;
                var18 = var19.bind(var7)(var0, var17);
            case 625:
                if (!var18) {
                    _fun67736_ip = 644;
                    continue _fun67736
                }
            case 628:
                var19 = var7.isDark;
                var17 = var14 + var12;
                var18 = var19.bind(var7)(var0, var17);
            case 644:
                if (!var18) {
                    _fun67736_ip = 663;
                    continue _fun67736
                }
            case 647:
                var19 = var7.isDark;
                var17 = var14 + var10;
                var18 = var19.bind(var7)(var0, var17);
            case 663:
                if (!var18) {
                    _fun67736_ip = 685;
                    continue _fun67736
                }
            case 666:
                var19 = var7.isDark;
                var17 = var14 + var2;
                var17 = var19.bind(var7)(var0, var17);
                var18 = !var17;
            case 685:
                if (!var18) {
                    _fun67736_ip = 704;
                    continue _fun67736
                }
            case 688:
                var19 = var7.isDark;
                var17 = var14 + var9;
                var18 = var19.bind(var7)(var0, var17);
            case 704:
                var17 = var16;
                if (!var18) {
                    _fun67736_ip = 714;
                    continue _fun67736
                }
            case 710:
                var17 = var16 + var8;
            case 714:
                var15 = var14 + 1;
                var14 = var5 - var9;
                var16 = var17;
                var13 = var16;
                if (var15 < var14) {
                    _fun67736_ip = 569;
                    continue _fun67736
                }
            case 734:
                var0 = var0 + 1;
                var3 = var13;
                var1 = var3;
                if (var0 < var5) {
                    _fun67736_ip = 550;
                    continue _fun67736
                }
            case 750:
                var13 = var4 < var5;
                var3 = var1;
                var0 = 0;
                var1 = var3;
                if (!var13) {
                    _fun67736_ip = 968;
                    continue _fun67736
                }
            case 768:
                var14 = var5 - var9;
                var16 = var3;
                var15 = 0;
                var13 = var16;
                if (!(var4 < var14)) {
                    _fun67736_ip = 952;
                    continue _fun67736
                }
            case 787:
                var14 = var7.isDark;
                var18 = var14.bind(var7)(var15, var0);
                var14 = var15;
                if (!var18) {
                    _fun67736_ip = 824;
                    continue _fun67736
                }
            case 805:
                var19 = var7.isDark;
                var17 = var14 + var11;
                var17 = var19.bind(var7)(var17, var0);
                var18 = !var17;
            case 824:
                if (!var18) {
                    _fun67736_ip = 843;
                    continue _fun67736
                }
            case 827:
                var19 = var7.isDark;
                var17 = var14 + var6;
                var18 = var19.bind(var7)(var17, var0);
            case 843:
                if (!var18) {
                    _fun67736_ip = 862;
                    continue _fun67736
                }
            case 846:
                var19 = var7.isDark;
                var17 = var14 + var12;
                var18 = var19.bind(var7)(var17, var0);
            case 862:
                if (!var18) {
                    _fun67736_ip = 881;
                    continue _fun67736
                }
            case 865:
                var19 = var7.isDark;
                var17 = var14 + var10;
                var18 = var19.bind(var7)(var17, var0);
            case 881:
                if (!var18) {
                    _fun67736_ip = 903;
                    continue _fun67736
                }
            case 884:
                var19 = var7.isDark;
                var17 = var14 + var2;
                var17 = var19.bind(var7)(var17, var0);
                var18 = !var17;
            case 903:
                if (!var18) {
                    _fun67736_ip = 922;
                    continue _fun67736
                }
            case 906:
                var19 = var7.isDark;
                var17 = var14 + var9;
                var18 = var19.bind(var7)(var17, var0);
            case 922:
                var17 = var16;
                if (!var18) {
                    _fun67736_ip = 932;
                    continue _fun67736
                }
            case 928:
                var17 = var16 + var8;
            case 932:
                var15 = var14 + 1;
                var14 = var5 - var9;
                var16 = var17;
                var13 = var16;
                if (var15 < var14) {
                    _fun67736_ip = 787;
                    continue _fun67736
                }
            case 952:
                var0 = var0 + 1;
                var3 = var13;
                var1 = var3;
                if (var0 < var5) {
                    _fun67736_ip = 768;
                    continue _fun67736
                }
            case 968:
                var8 = var4 < var5;
                var3 = 0;
                var0 = 0;
                var6 = 0;
                if (!var8) {
                    _fun67736_ip = 1046;
                    continue _fun67736
                }
            case 981:
                var11 = var4 < var5;
                var9 = var0;
                var10 = 0;
                var8 = var9;
                if (!var11) {
                    _fun67736_ip = 1033;
                    continue _fun67736
                }
            case 996:
                var11 = var7.isDark;
                var13 = var11.bind(var7)(var10, var3);
                var12 = var10;
                var11 = var9;
                if (!var13) {
                    _fun67736_ip = 1020;
                    continue _fun67736
                }
            case 1017:
                var11 = var9 + 1;
            case 1020:
                var10 = var12 + 1;
                var9 = var11;
                var8 = var9;
                if (var10 < var5) {
                    _fun67736_ip = 996;
                    continue _fun67736
                }
            case 1033:
                var3 = var3 + 1;
                var0 = var8;
                var6 = var0;
                if (var3 < var5) {
                    _fun67736_ip = 981;
                    continue _fun67736
                }
            case 1046:
                var0 = global;
                var4 = var0.Math;
                var3 = var4.abs;
                var0 = 100;
                var0 = var0 * var6;
                var0 = var0 / var5;
                var5 = var0 / var5;
                var0 = 50;
                var0 = var5 - var0;
                var0 = var3.bind(var4)(var0);
                var2 = var0 / var2;
                var0 = 10;
                var0 = var0 * var2;
                var0 = var1 + var0;
                return var0;
        }
    };
    var1.getLostPoint = var2;
    var _closure1_slot2 = var1;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8404, 8405, 8399]);