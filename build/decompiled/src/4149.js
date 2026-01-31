// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        _fun38022: for (var _fun38022_ip = 0;;) switch (_fun38022_ip) {
            case 0:
                var14 = arg0;
                var16 = arg2;
                var15 = arg3;
                var13 = arg4;
                var6 = arg1;
                var7 = undefined;
                var3 = undefined;
                var5 = undefined;
                var4 = undefined;
                var2 = undefined;
                var10 = _closure1_slot1;
                var1 = _closure1_slot2;
                var9 = 0;
                var8 = var1[var9];
                var11 = var10.bind(var7)(var8);
                var8 = var11.getTypeSize;
                var17 = 'SHORT';
                var11 = var8.bind(var11)(var17);
                var8 = var1[var9];
                var12 = var10.bind(var7)(var8);
                var8 = var12.getTypeSize;
                var8 = var8.bind(var12)(var17);
                var12 = var11 + var8;
                var8 = var1[var9];
                var17 = var10.bind(var7)(var8);
                var8 = var17.getTypeSize;
                var18 = 'LONG';
                var8 = var8.bind(var17)(var18);
                var8 = var12 + var8;
                var17 = var1[var9];
                var19 = var10.bind(var7)(var17);
                var17 = var19.getShortAt;
                var5 = var17.bind(var19)(var14, var15, var13);
                var17 = var1[var9];
                var19 = var10.bind(var7)(var17);
                var17 = var19.getShortAt;
                var11 = var15 + var11;
                var11 = var17.bind(var19)(var14, var11, var13);
                var17 = var1[var9];
                var19 = var10.bind(var7)(var17);
                var17 = var19.getLongAt;
                var12 = var15 + var12;
                var12 = var17.bind(var19)(var14, var12, var13);
                var1 = var1[var9];
                var1 = var10.bind(var7)(var1);
                var1 = var1.typeSizes;
                var1 = var1[var11];
                if (!(var7 !== var1)) {
                    _fun38022_ip = 255;
                    continue _fun38022
                }
            case 211:
                var1 = arg5;
                if (var1) {
                    _fun38022_ip = 257;
                    continue _fun38022
                }
            case 217:
                var10 = _closure1_slot1;
                var17 = _closure1_slot2;
                var1 = 1;
                var1 = var17[var1];
                var10 = var10.bind(var7)(var1);
                var1 = var6;
                var10 = var10[var1];
                var1 = var5;
                var1 = var10[var1];
                if (!(var7 === var1)) {
                    _fun38022_ip = 257;
                    continue _fun38022
                }
            case 255:
                return var7;
            case 257:
                var17 = _closure1_slot1;
                var1 = _closure1_slot2;
                var10 = var1[var9];
                var10 = var17.bind(var7)(var10);
                var10 = var10.typeSizes;
                var10 = var10[var11];
                var10 = var10 * var12;
                var1 = var1[var9];
                var17 = var17.bind(var7)(var1);
                var1 = var17.getTypeSize;
                var1 = var1.bind(var17)(var18);
                if (!(!(var10 <= var1))) {
                    _fun38022_ip = 445;
                    continue _fun38022
                }
            case 315:
                var18 = _closure1_slot1;
                var1 = _closure1_slot2;
                var10 = var1[var9];
                var19 = var18.bind(var7)(var10);
                var17 = var19.getLongAt;
                var10 = var15 + var8;
                var10 = var17.bind(var19)(var14, var10, var13);
                var17 = var16 + var10;
                var1 = var1[var9];
                var1 = var18.bind(var7)(var1);
                var1 = var1.typeSizes;
                var1 = var1[var11];
                var1 = var1 * var12;
                var17 = var17 + var1;
                var1 = var14.byteLength;
                if (!(!(var17 <= var1))) {
                    _fun38022_ip = 401;
                    continue _fun38022
                }
            case 390:
                var3 = '<faulty value>';
                var1 = var10;
                _fun38022_ip = 477;
                continue _fun38022;
            case 401:
                var18 = _closure1_slot5;
                var24 = var16 + var10;
                var19 = var5;
                var16 = 33723;
                var20 = var16 === var19;
                var26 = undefined;
                var25 = var14;
                var23 = var11;
                var22 = var12;
                var21 = var13;
                var3 = var26[var18](var25, var24, var23, var22, var21, var20, var19);
                var1 = var10;
                _fun38022_ip = 477;
                continue _fun38022;
            case 445:
                var10 = _closure1_slot5;
                var8 = var15 + var8;
                var26 = undefined;
                var25 = var14;
                var24 = var8;
                var23 = var11;
                var22 = var12;
                var21 = var13;
                var3 = var26[var10](var25, var24, var23, var22, var21, var20);
                var1 = var8;
            case 477:
                var10 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var9];
                var8 = var10.bind(var7)(var8);
                var8 = var8.tagTypes;
                var8 = var8.ASCII;
                if (!(var11 === var8)) {
                    _fun38022_ip = 617;
                    continue _fun38022
                }
            case 510:
                var16 = var3;
                var10 = new Array(0);
                var8 = var16.length;
                var8 = var9 < var8;
                var15 = '';
                var14 = '\x00';
                var13 = 0;
                var12 = 0;
                if (!var8) {
                    _fun38022_ip = 602;
                    continue _fun38022
                }
            case 543:
                var8 = var16[var12];
                if (!(var14 === var8)) {
                    _fun38022_ip = 556;
                    continue _fun38022
                }
            case 551:
                var17 = var13 + 1;
                _fun38022_ip = 587;
                continue _fun38022;
            case 556:
                var8 = var10[var13];
                if (!(var7 === var8)) {
                    _fun38022_ip = 568;
                    continue _fun38022
                }
            case 564:
                var10[var13] = var15;
            case 568:
                var18 = var10[var13];
                var8 = var16[var12];
                var8 = var18 + var8;
                var10[var13] = var8;
                var17 = var13;
            case 587:
                var12 = var12 + 1;
                var8 = var16.length;
                var13 = var17;
                if (var12 < var8) {
                    _fun38022_ip = 543;
                    continue _fun38022
                }
            case 602:
                var3 = var10;
                var8 = function arg0() {
                    _fun38023: for (var _fun38023_ip = 0;;) switch (_fun38023_ip) {
                        case 0:
                            var0 = arg0;
                        case 3: // try_start_0
                            var3 = var0;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var0 = global;
                                var2 = var0.decodeURIComponent;
                                var3 = var0.escape;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0);
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 23: // try_end0
                            return var1;
                        case 25: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            return var0;
                    }
                };
                var3 = var8.bind(var7)(var10);
            case 617:
                var12 = var5;
                var8 = global;
                var8 = var8.HermesInternal;
                var10 = var8.concat;
                var8 = 'undefined-';
                var4 = var10.bind(var8)(var12);
                var2 = var3;
                var13 = _closure1_slot1;
                var8 = _closure1_slot2;
                var10 = 1;
                var8 = var8[var10];
                var13 = var13.bind(var7)(var8);
                var8 = var6;
                var8 = var13[var8];
                var8 = var8[var12];
                if (!(var7 !== var8)) {
                    _fun38022_ip = 1026;
                    continue _fun38022
                }
            case 685:
                var12 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var12 = var12.bind(var7)(var8);
                var8 = var6;
                var12 = var12[var8];
                var8 = var5;
                var8 = var12[var8];
                var8 = var8.name;
                if (!(var7 !== var8)) {
                    _fun38022_ip = 768;
                    continue _fun38022
                }
            case 725:
                var12 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var12 = var12.bind(var7)(var8);
                var8 = var6;
                var12 = var12[var8];
                var8 = var5;
                var8 = var12[var8];
                var8 = var8.description;
                if (!(var7 === var8)) {
                    _fun38022_ip = 933;
                    continue _fun38022
                }
            case 768:
                var12 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var9];
                var8 = var12.bind(var7)(var8);
                var8 = var8.tagTypes;
                var8 = var8.RATIONAL;
                if (!(var11 !== var8)) {
                    _fun38022_ip = 882;
                    continue _fun38022
                }
            case 801:
                var12 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var9];
                var8 = var12.bind(var7)(var8);
                var8 = var8.tagTypes;
                var8 = var8.SRATIONAL;
                if (!(var11 !== var8)) {
                    _fun38022_ip = 882;
                    continue _fun38022
                }
            case 834:
                var11 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var11 = var11.bind(var7)(var8);
                var8 = var6;
                var11 = var11[var8];
                var8 = var5;
                var4 = var11[var8];
                var11 = _closure1_slot6;
                var8 = var3;
                var2 = var11.bind(var7)(var8);
                _fun38022_ip = 1026;
                continue _fun38022;
            case 882:
                var11 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var11 = var11.bind(var7)(var8);
                var8 = var6;
                var11 = var11[var8];
                var8 = var5;
                var4 = var11[var8];
                var8 = var3;
                var9 = var8[var9];
                var8 = var8[var10];
                var8 = var9 / var8;
                var2 = '' + var8;
                _fun38022_ip = 1026;
                continue _fun38022;
            case 933:
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var9 = var9.bind(var7)(var8);
                var8 = var6;
                var9 = var9[var8];
                var8 = var5;
                var8 = var9[var8];
                var4 = var8.name;
            case 969: // try_start_0
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var8 = var9.bind(var7)(var8);
                var8 = var8[var6];
                var6 = var5;
                var9 = var8[var6];
                var8 = var9.description;
                var6 = var3;
                var2 = var8.bind(var9)(var6);
            case 1010: // try_end0
                _fun38022_ip = 1026;
                continue _fun38022;
            case 1012: // catch_target0
                CatchBlockStart(arg_register = 6);
                var6 = _closure1_slot6;
                var0 = var3;
                var2 = var6.bind(var7)(var0);
            case 1026:
                var0 = {};
                var0.id = var5;
                var0.name = var4;
                var0.value = var3;
                var0.description = var2;
                var0.__offset = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun38025: for (var _fun38025_ip = 0;;) switch (_fun38025_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var12 = arg2;
                var11 = arg3;
                var7 = arg4;
                var4 = undefined;
                var2 = undefined;
                var3 = new Array(0);
                var0 = arguments.length;
                var1 = 5;
                var0 = var0 > var1;
                if (!var0) {
                    _fun38025_ip = 44;
                    continue _fun38025
                }
            case 36:
                var5 = arguments[var1];
                var0 = var4 !== var5;
            case 44:
                if (!var0) {
                    _fun38025_ip = 51;
                    continue _fun38025
                }
            case 47:
                var0 = arguments[var1];
            case 51:
                var2 = var12;
                var6 = var11;
                if (!var0) {
                    _fun38025_ip = 117;
                    continue _fun38025
                }
            case 60:
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 0;
                var0 = var10[var1];
                var0 = var5.bind(var4)(var0);
                var0 = var0.typeSizes;
                var0 = var0[var12];
                var6 = var11 * var0;
                var1 = var10[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.tagTypes;
                var2 = var1.BYTE;
            case 117:
                var5 = 0;
                var10 = var5 < var6;
                var0 = 0;
                if (!var10) {
                    _fun38025_ip = 194;
                    continue _fun38025
                }
            case 131:
                var11 = var3.push;
                var12 = _closure1_slot3;
                var10 = var12[var2];
                var10 = var10.bind(var12)(var9, var8, var7);
                var10 = var11.bind(var3)(var10);
                var11 = _closure1_slot1;
                var10 = _closure1_slot2;
                var10 = var10[var5];
                var10 = var11.bind(var4)(var10);
                var10 = var10.typeSizes;
                var10 = var10[var2];
                var8 = var8 + var10;
                var0 = var0 + 1;
                if (var0 < var6) {
                    _fun38025_ip = 131;
                    continue _fun38025
                }
            case 194:
                var6 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var0 = var6.bind(var4)(var0);
                var0 = var0.tagTypes;
                var0 = var0.ASCII;
                if (!(var2 !== var0)) {
                    _fun38025_ip = 248;
                    continue _fun38025
                }
            case 227:
                var6 = var3.length;
                var2 = 1;
                var0 = var3;
                if (!(var2 === var6)) {
                    _fun38025_ip = 276;
                    continue _fun38025
                }
            case 242:
                var0 = var3[var5];
                _fun38025_ip = 276;
                continue _fun38025;
            case 248:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getAsciiValue;
                var0 = var1.bind(var2)(var3);
            case 276:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function arg0() {
        _fun38026: for (var _fun38026_ip = 0;;) switch (_fun38026_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var0 = var0.Array;
                var1 = var3 instanceof var0;
                var0 = var3;
                if (!var1) {
                    _fun38026_ip = 37;
                    continue _fun38026
                }
            case 21:
                var2 = var3.join;
                var1 = ', ';
                var0 = var2.bind(var3)(var1);
            case 37:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var1 = {};
    var4 = 0;
    var7 = var6[var4];
    var0 = undefined;
    var7 = var5.bind(var0)(var7);
    var7 = var7.getByteAt;
    var1[1] = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.getAsciiAt;
    var1[2] = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.getShortAt;
    var1[3] = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.getLongAt;
    var1[4] = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.getRationalAt;
    var1[5] = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.getUndefinedAt;
    var1[7] = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.getSlongAt;
    var1[9] = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.getSrationalAt;
    var1[10] = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.getIfdPointerAt;
    var1[13] = var4;
    var _closure1_slot3 = var1;
    var1 = function arg0, arg1, arg2() {
        var1 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 0;
        var2 = var2[var0];
        var0 = undefined;
        var5 = var3.bind(var0)(var2);
        var4 = var5.getLongAt;
        var0 = 4;
        var3 = var1 + var0;
        var2 = arg0;
        var0 = arg2;
        var0 = var4.bind(var5)(var2, var3, var0);
        var0 = var1 + var0;
        return var0;
    };
    var2.get0thIfdOffset = var1;
    var1 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        _fun38028: for (var _fun38028_ip = 0;;) switch (_fun38028_ip) {
            case 0:
                var8 = arg0;
                var10 = arg1;
                var7 = arg2;
                var9 = arg3;
                var6 = arg4;
                var5 = arg5;
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var3 = 0;
                var0 = var11[var3];
                var4 = undefined;
                var1 = var12.bind(var4)(var0);
                var0 = var1.getTypeSize;
                var13 = 'SHORT';
                var1 = var0.bind(var1)(var13);
                var0 = {};
                var11 = var11[var3];
                var12 = var12.bind(var4)(var11);
                var11 = var12.getTypeSize;
                var11 = var11.bind(var12)(var13);
                var12 = var9 + var11;
                var11 = var8.byteLength;
                var11 = var12 <= var11;
                var18 = 0;
                if (!var11) {
                    _fun38028_ip = 128;
                    continue _fun38028
                }
            case 98:
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var11 = var11[var3];
                var12 = var12.bind(var4)(var11);
                var11 = var12.getShortAt;
                var18 = var11.bind(var12)(var8, var9, var6);
            case 128:
                var9 = var9 + var1;
                var11 = var9;
                if (!(var3 < var18)) {
                    _fun38028_ip = 372;
                    continue _fun38028
                }
            case 142:
                var17 = 12;
                var12 = var9 + var17;
                var1 = var8.byteLength;
                var1 = var12 > var1;
                var16 = 'LevelInfo';
                var15 = 1;
                var14 = 'MakerNote';
                var13 = var9;
                var12 = 0;
                var11 = var13;
                if (var1) {
                    _fun38028_ip = 372;
                    continue _fun38028
                }
            case 184:
                var1 = _closure1_slot4;
                var28 = undefined;
                var27 = var8;
                var26 = var10;
                var25 = var7;
                var24 = var13;
                var23 = var6;
                var22 = var5;
                var9 = var28[var1](var27, var26, var25, var24, var23, var22, var21);
                var1 = var13;
                if (!(var4 !== var9)) {
                    _fun38028_ip = 335;
                    continue _fun38028
                }
            case 219:
                var20 = var9.name;
                var19 = {};
                var21 = var9.id;
                var19.id = var21;
                var21 = var9.value;
                var19.value = var21;
                var21 = var9.description;
                var19.description = var21;
                var0[var20] = var19;
                var19 = var9.name;
                var19 = var14 === var19;
                if (var19) {
                    _fun38028_ip = 311;
                    continue _fun38028
                }
            case 269:
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var20 = var20[var15];
                var20 = var21.bind(var4)(var20);
                var20 = var20.IFD_TYPE_PENTAX;
                var20 = var10 === var20;
                if (!var20) {
                    _fun38028_ip = 308;
                    continue _fun38028
                }
            case 299:
                var21 = var9.name;
                var20 = var16 === var21;
            case 308:
                var19 = var20;
            case 311:
                if (!var19) {
                    _fun38028_ip = 335;
                    continue _fun38028
                }
            case 314:
                var19 = var9.name;
                var19 = var0[var19];
                var9 = var9.__offset;
                var19.__offset = var9;
            case 335:
                var19 = var1 + var17;
                var12 = var12 + 1;
                var11 = var19;
                if (!(var12 < var18)) {
                    _fun38028_ip = 372;
                    continue _fun38028
                }
            case 349:
                var9 = var8.byteLength;
                var1 = var19 + var17;
                var13 = var19;
                var11 = var13;
                if (!(var1 > var9)) {
                    _fun38028_ip = 184;
                    continue _fun38028
                }
            case 372:
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 2;
                var1 = var12[var1];
                var1 = var9.bind(var4)(var1);
                var1 = var1.USE_THUMBNAIL;
                if (!var1) {
                    _fun38028_ip = 581;
                    continue _fun38028
                }
            case 404:
                var9 = var8.byteLength;
                var12 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var13 = var12.bind(var4)(var1);
                var12 = var13.getTypeSize;
                var1 = 'LONG';
                var1 = var12.bind(var13)(var1);
                var1 = var9 - var1;
                if (!(var11 < var1)) {
                    _fun38028_ip = 581;
                    continue _fun38028
                }
            case 453:
                var9 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var9 = var9.bind(var4)(var1);
                var1 = var9.getLongAt;
                var1 = var1.bind(var9)(var8, var11, var6);
                var3 = var3 !== var1;
                if (!var3) {
                    _fun38028_ip = 520;
                    continue _fun38028
                }
            case 490:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 1;
                var9 = var12[var9];
                var9 = var11.bind(var4)(var9);
                var9 = var9.IFD_TYPE_0TH;
                var3 = var10 === var9;
            case 520:
                if (!var3) {
                    _fun38028_ip = 581;
                    continue _fun38028
                }
            case 523:
                var3 = _closure1_slot7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 1;
                var2 = var10[var2];
                var2 = var9.bind(var4)(var2);
                var26 = var2.IFD_TYPE_1ST;
                var24 = var7 + var1;
                var28 = undefined;
                var27 = var8;
                var25 = var7;
                var23 = var6;
                var22 = var5;
                var1 = var28[var3](var27, var26, var25, var24, var23, var22, var21);
                var0.Thumbnail = var1;
            case 581:
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var2.readIfd = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4146, 4150, 4132]);