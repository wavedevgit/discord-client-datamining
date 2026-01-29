// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = module;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var2;
    var0 = dependencyMap;
    var _closure1_slot2 = var0;
    var0 = function(arg0) { // Original name: countSymbols, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.ucs2;
        var1 = var2.decode;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = var0.length;
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0, arg1) { // Original name: at, environment: var1
        _fun97406: for (var _fun97406_ip = 0;;) switch (_fun97406_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var3 = var1[var0];
                var1 = global;
                var2 = var1.isNaN;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                if (var2) {
                    _fun97406_ip = 45;
                    continue _fun97406
                }
            case 28:
                var2 = var1.String;
                var1 = var2.fromCodePoint;
                var0 = var1.bind(var2)(var3);
            case 45:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0) { // Original name: isSingleDot, environment: var1
        _fun97407: for (var _fun97407_ip = 0;;) switch (_fun97407_ip) {
            case 0:
                var2 = arg0;
                var0 = '.';
                var0 = var0 === var2;
                if (var0) {
                    _fun97407_ip = 34;
                    continue _fun97407
                }
            case 14:
                var1 = var2.toLowerCase;
                var2 = var1.bind(var2)();
                var1 = '%2e';
                var0 = var1 === var2;
            case 34:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: isWindowsDriveLetterString, environment: var1
        _fun97408: for (var _fun97408_ip = 0;;) switch (_fun97408_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.length;
                var0 = 2;
                var0 = var0 === var1;
                if (!var0) {
                    _fun97408_ip = 67;
                    continue _fun97408
                }
            case 18:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.isASCIIAlpha;
                var5 = var3.codePointAt;
                var1 = 0;
                var1 = var5.bind(var3)(var1);
                var0 = var2.bind(var4)(var1);
            case 67:
                if (!var0) {
                    _fun97408_ip = 103;
                    continue _fun97408
                }
            case 70:
                var2 = 1;
                var4 = var3[var2];
                var1 = ':';
                var1 = var1 === var4;
                if (var1) {
                    _fun97408_ip = 100;
                    continue _fun97408
                }
            case 88:
                var3 = var3[var2];
                var2 = '|';
                var1 = var2 === var3;
            case 100:
                var0 = var1;
            case 103:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0) { // Original name: isSpecialScheme, environment: var1
        var1 = _closure1_slot3;
        var0 = arg0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var0 !== var1;
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: isSpecial, environment: var1
        var2 = _closure1_slot13;
        var0 = arg0;
        var1 = var0.scheme;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: isNotSpecial, environment: var1
        var2 = _closure1_slot13;
        var0 = arg0;
        var1 = var0.scheme;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = !var0;
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: defaultPort, environment: var1
        var1 = _closure1_slot3;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: isC0ControlPercentEncode, environment: var1
        _fun97413: for (var _fun97413_ip = 0;;) switch (_fun97413_ip) {
            case 0:
                var2 = arg0;
                var0 = 31;
                var0 = var2 <= var0;
                if (var0) {
                    _fun97413_ip = 20;
                    continue _fun97413
                }
            case 13:
                var1 = 126;
                var0 = var2 > var1;
            case 20:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0) { // Original name: isUserinfoPercentEncode, environment: var1
        _fun97414: for (var _fun97414_ip = 0;;) switch (_fun97414_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot20;
                var0 = undefined;
                var0 = var2.bind(var0)(var3);
                if (var0) {
                    _fun97414_ip = 34;
                    continue _fun97414
                }
            case 20:
                var2 = _closure1_slot5;
                var1 = var2.has;
                var0 = var1.bind(var2)(var3);
            case 34:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0) { // Original name: isFragmentPercentEncode, environment: var1
        _fun97415: for (var _fun97415_ip = 0;;) switch (_fun97415_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot17;
                var0 = undefined;
                var0 = var2.bind(var0)(var3);
                if (var0) {
                    _fun97415_ip = 34;
                    continue _fun97415
                }
            case 20:
                var2 = _closure1_slot6;
                var1 = var2.has;
                var0 = var1.bind(var2)(var3);
            case 34:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0) { // Original name: isPathPercentEncode, environment: var1
        _fun97416: for (var _fun97416_ip = 0;;) switch (_fun97416_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot19;
                var0 = undefined;
                var0 = var2.bind(var0)(var3);
                if (var0) {
                    _fun97416_ip = 34;
                    continue _fun97416
                }
            case 20:
                var2 = _closure1_slot7;
                var1 = var2.has;
                var0 = var1.bind(var2)(var3);
            case 34:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0, arg1) { // Original name: percentEncodeChar, environment: var1
        _fun97417: for (var _fun97417_ip = 0;;) switch (_fun97417_ip) {
            case 0:
                var1 = arg0;
                var0 = global;
                var2 = var0.String;
                var0 = var2.fromCodePoint;
                var3 = var0.bind(var2)(var1);
                var0 = arg1;
                var8 = undefined;
                var1 = var0.bind(var8)(var1);
                var0 = var3;
                if (!var1) {
                    _fun97417_ip = 155;
                    continue _fun97417
                }
            case 38:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var1 = var2.bind(var8)(var1);
                var2 = var1.Buffer;
                var1 = var2.from;
                var6 = var1.bind(var2)(var3);
                var1 = var6.length;
                var5 = 0;
                var2 = var5 < var1;
                var3 = '';
                var4 = 3;
                var1 = var3;
                if (!var2) {
                    _fun97417_ip = 152;
                    continue _fun97417
                }
            case 101:
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var10 = var9.bind(var8)(var2);
                var9 = var10.percentEncode;
                var2 = var6[var5];
                var2 = var9.bind(var10)(var2);
                var3 = var3 + var2;
                var5 = var5 + 1;
                var2 = var6.length;
                var1 = var3;
                if (var5 < var2) {
                    _fun97417_ip = 101;
                    continue _fun97417
                }
            case 152:
                var0 = var1;
            case 155:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0) { // Original name: parseIPv4Number, environment: var1
        _fun97418: for (var _fun97418_ip = 0;;) switch (_fun97418_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.length;
                var1 = 2;
                if (!(var0 >= var1)) {
                    _fun97418_ip = 70;
                    continue _fun97418
                }
            case 15:
                var2 = var4.charAt;
                var0 = 0;
                var2 = var2.bind(var4)(var0);
                var0 = '0';
                if (!(var0 === var2)) {
                    _fun97418_ip = 70;
                    continue _fun97418
                }
            case 38:
                var2 = var4.charAt;
                var0 = 1;
                var2 = var2.bind(var4)(var0);
                var0 = var2.toLowerCase;
                var2 = var0.bind(var2)();
                var0 = 'x';
                if (!(var0 !== var2)) {
                    _fun97418_ip = 133;
                    continue _fun97418
                }
            case 70:
                var0 = var4.length;
                var0 = var0 >= var1;
                if (!var0) {
                    _fun97418_ip = 105;
                    continue _fun97418
                }
            case 82:
                var3 = var4.charAt;
                var2 = 0;
                var3 = var3.bind(var4)(var2);
                var2 = '0';
                var0 = var2 === var3;
            case 105:
                var3 = 10;
                var2 = var4;
                if (!var0) {
                    _fun97418_ip = 147;
                    continue _fun97418
                }
            case 114:
                var5 = var4.substring;
                var0 = 1;
                var2 = var5.bind(var4)(var0);
                var3 = 8;
                _fun97418_ip = 147;
                continue _fun97418;
            case 133:
                var0 = var4.substring;
                var2 = var0.bind(var4)(var1);
                var3 = 16;
            case 147:
                var0 = '';
                if (!(var0 !== var2)) {
                    _fun97418_ip = 251;
                    continue _fun97418
                }
            case 155:
                var1 = /[^0-7]/;
                var0 = 10;
                if (!(var0 === var3)) {
                    _fun97418_ip = 190;
                    continue _fun97418
                }
            case 176:
                var1 = /[^0-9]/;
            case 190:
                var0 = 16;
                if (!(var0 === var3)) {
                    _fun97418_ip = 211;
                    continue _fun97418
                }
            case 197:
                var1 = /[^0-9A-Fa-f]/;
            case 211:
                var0 = var1.test;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun97418_ip = 242;
                    continue _fun97418
                }
            case 224:
                var0 = global;
                var1 = var0.parseInt;
                var0 = undefined;
                var0 = var1.bind(var0)(var2, var3);
                _fun97418_ip = 249;
                continue _fun97418;
            case 242:
                var0 = _closure1_slot4;
            case 249:
                return var0;
            case 251:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0) { // Original name: parseHost, environment: var1
        _fun97419: for (var _fun97419_ip = 0;;) switch (_fun97419_ip) {
            case 0:
                var2 = arg0;
                var25 = undefined;
                var1 = undefined;
                var0 = arguments.length;
                var7 = 1;
                var0 = var0 > var7;
                if (!var0) {
                    _fun97419_ip = 28;
                    continue _fun97419
                }
            case 20:
                var3 = arguments[var7];
                var0 = var25 !== var3;
            case 28:
                if (!var0) {
                    _fun97419_ip = 35;
                    continue _fun97419
                }
            case 31:
                var0 = arguments[var7];
            case 35:
                var6 = 0;
                var3 = var2[var6];
                var1 = '[';
                if (!(var1 !== var3)) {
                    _fun97419_ip = 641;
                    continue _fun97419
                }
            case 52:
                if (var0) {
                    _fun97419_ip = 625;
                    continue _fun97419
                }
            case 58:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var13 = 3;
                var1 = var8[var13];
                var4 = var5.bind(var25)(var1);
                var3 = var4.percentDecode;
                var1 = 2;
                var1 = var8[var1];
                var1 = var5.bind(var25)(var1);
                var5 = var1.Buffer;
                var1 = var5.from;
                var1 = var1.bind(var5)(var2);
                var3 = var3.bind(var4)(var1);
                var1 = var3.toString;
                var1 = var1.bind(var3)();
                var3 = null;
                if (!(var3 === var1)) {
                    _fun97419_ip = 139;
                    continue _fun97419
                }
            case 135:
                var1 = _closure1_slot4;
            case 139:
                var3 = _closure1_slot4;
                if (!(var1 !== var3)) {
                    _fun97419_ip = 619;
                    continue _fun97419
                }
            case 150:
                var4 = var1.search;
                var3 = /\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\\/ |: | \ ? | @ | \[ | \\ | \] / ;
                var4 = var4.bind(var1)(var3);
                var3 = -1;
                if (!(var3 === var4)) {
                    _fun97419_ip = 613;
                    continue _fun97419
                }
            case 188:
                var4 = var1;
                var8 = undefined;
                var11 = undefined;
                var14 = undefined;
                var5 = undefined;
                var12 = undefined;
                var9 = var1.split;
                var3 = '.';
                var15 = var9.bind(var1)(var3);
                var3 = var15.length;
                var3 = var3 - var7;
                var3 = var15[var3];
                var9 = '';
                var3 = var9 === var3;
                if (!var3) {
                    _fun97419_ip = 248;
                    continue _fun97419
                }
            case 239:
                var10 = var15.length;
                var3 = var10 > var7;
            case 248:
                if (!var3) {
                    _fun97419_ip = 261;
                    continue _fun97419
                }
            case 251:
                var3 = var15.pop;
                var3 = var3.bind(var15)();
            case 261:
                var10 = var15.length;
                var3 = 4;
                if (!(!(var10 > var3))) {
                    _fun97419_ip = 586;
                    continue _fun97419
                }
            case 276:
                var8 = new Array(0);
                var3 = var15;
                var10 = var3[Symbol.iterator];
                var3 = var10().next;
            case 286:
                var15 = var3().value;
                var16 = var10;
                if (!(var16 !== var25)) {
                    _fun97419_ip = 377;
                    continue _fun97419
                }
            case 297: // try_start_0
                var11 = var15;
                if (!(var9 !== var15)) {
                    _fun97419_ip = 356;
                    continue _fun97419
                }
            case 304:
                var16 = _closure1_slot22;
                var15 = var11;
                var16 = var16.bind(var25)(var15);
                var14 = var16;
                var15 = _closure1_slot4;
                if (!(var16 !== var15)) {
                    _fun97419_ip = 345;
                    continue _fun97419
                }
            case 327:
                var17 = var8;
                var16 = var17.push;
                var15 = var14;
                var15 = var16.bind(var17)(var15);
            case 343: // try_end0
                _fun97419_ip = 286;
                continue _fun97419;
            case 345: // try_start_1
                var3 = var4;
            case 348: // try_end1
                var10.return();
                _fun97419_ip = 589;
                continue _fun97419;
            case 356: // try_start_2
                var9 = var4;
            case 359: // try_end2
                var10.return();
                var3 = var9;
                _fun97419_ip = 589;
                continue _fun97419;
            case 370: // catch_target0 // catch_target1 // catch_target2
                CatchBlockStart(arg_register = 9);
                var10.return();
                throw var9;
            case 377:
                var9 = var8;
                var9 = var9.length;
                var9 = var9 - var7;
                var11 = 255;
                var10 = 0;
                if (!(var6 < var9)) {
                    _fun97419_ip = 431;
                    continue _fun97419
                }
            case 398:
                var9 = var8;
                var9 = var9[var10];
                if (!(!(var9 > var11))) {
                    _fun97419_ip = 580;
                    continue _fun97419
                }
            case 412:
                var10 = var10 + 1;
                var9 = var8;
                var9 = var9.length;
                var9 = var9 - var7;
                if (var10 < var9) {
                    _fun97419_ip = 398;
                    continue _fun97419
                }
            case 431:
                var9 = var8;
                var10 = var9.length;
                var10 = var10 - var7;
                var14 = var9[var10];
                var11 = global;
                var16 = var11.Math;
                var15 = var16.pow;
                var10 = var9.length;
                var9 = 5;
                var9 = var9 - var10;
                var10 = 256;
                var9 = var15.bind(var16)(var10, var9);
                if (!(!(var14 >= var9))) {
                    _fun97419_ip = 574;
                    continue _fun97419
                }
            case 489:
                var14 = var8;
                var8 = var14.pop;
                var5 = var8.bind(var14)();
                var12 = 0;
                var8 = var14;
                var9 = var8[Symbol.iterator];
                var8 = var9().next;
            case 510:
                var17 = var8().value;
                var14 = var9;
                if (!(var14 !== var25)) {
                    _fun97419_ip = 569;
                    continue _fun97419
                }
            case 521: // try_start_3
                var16 = var5;
                var19 = var11.Math;
                var18 = var19.pow;
                var14 = var12;
                var15 = var13 - var14;
                var15 = var18.bind(var19)(var10, var15);
                var15 = var17 * var15;
                var5 = var16 + var15;
                var12 = var14 + 1;
            case 560: // try_end3
                _fun97419_ip = 510;
                continue _fun97419;
            case 562: // catch_target3
                CatchBlockStart(arg_register = 8);
                var9.return();
                throw var8;
            case 569:
                var3 = var5;
                _fun97419_ip = 589;
                continue _fun97419;
            case 574:
                var3 = _closure1_slot4;
                _fun97419_ip = 589;
                continue _fun97419;
            case 580:
                var3 = _closure1_slot4;
                _fun97419_ip = 589;
                continue _fun97419;
            case 586:
                var3 = var4;
            case 589:
                var5 = 'number';
                var4 = typeof var3;
                if (!(var5 !== var4)) {
                    _fun97419_ip = 608;
                    continue _fun97419
                }
            case 600:
                var4 = _closure1_slot4;
                if (!(var3 === var4)) {
                    _fun97419_ip = 611;
                    continue _fun97419
                }
            case 608:
                var1 = var3;
            case 611:
                return var1;
            case 613:
                var1 = _closure1_slot4;
                return var1;
            case 619:
                var0 = _closure1_slot4;
                return var0;
            case 625:
                var0 = function(arg0) { // Original name: parseOpaqueHost, environment: var0
                    _fun97420: for (var _fun97420_ip = 0;;) switch (_fun97420_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.search;
                            var0 = /\u0000|\u0009|\u000A|\u000D|\u0020|#|\\/ |: | \ ? | @ | \[ | \\ | \] / ;
                            var1 = var1.bind(var2)(var0);
                            var0 = -1;
                            if (!(var0 === var1)) {
                                _fun97420_ip = 137;
                                continue _fun97420
                            }
                        case 38:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 0;
                            var0 = var0[var5];
                            var4 = undefined;
                            var0 = var1.bind(var4)(var0);
                            var1 = var0.ucs2;
                            var0 = var1.decode;
                            var3 = var0.bind(var1)(var2);
                            var0 = var3.length;
                            var1 = var5 < var0;
                            var2 = '';
                            var0 = var2;
                            if (!var1) {
                                _fun97420_ip = 135;
                                continue _fun97420
                            }
                        case 98:
                            var8 = _closure1_slot21;
                            var7 = var3[var5];
                            var1 = _closure1_slot17;
                            var1 = var8.bind(var4)(var7, var1);
                            var2 = var2 + var1;
                            var5 = var5 + 1;
                            var1 = var3.length;
                            var0 = var2;
                            if (var5 < var1) {
                                _fun97420_ip = 98;
                                continue _fun97420
                            }
                        case 135:
                            return var0;
                        case 137:
                            var0 = _closure1_slot4;
                            return var0;
                    }
                };
                var0 = var0.bind(var25)(var2);
                return var0;
            case 641:
                var0 = var2.length;
                var0 = var0 - var7;
                var1 = var2[var0];
                var0 = ']';
                if (!(var0 === var1)) {
                    _fun97419_ip = 1619;
                    continue _fun97419
                }
            case 665:
                var1 = var2.substring;
                var0 = var2.length;
                var0 = var0 - var7;
                var3 = var1.bind(var2)(var7, var0);
                var5 = [0, 0, 0, 0, 0, 0, 0, 0];
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var2.bind(var25)(var0);
                var2 = var0.ucs2;
                var0 = var2.decode;
                var24 = var0.bind(var2)(var3);
                var0 = var24[var6];
                var8 = null;
                var21 = 58;
                var2 = 0;
                var4 = null;
                var20 = 0;
                if (!(var21 === var0)) {
                    _fun97419_ip = 772;
                    continue _fun97419
                }
            case 752:
                var0 = var24[var7];
                var20 = 2;
                var2 = var7;
                var4 = var2;
                if (!(var21 === var0)) {
                    _fun97419_ip = 1613;
                    continue _fun97419
                }
            case 772:
                var0 = var24.length;
                var0 = var20 < var0;
                var23 = 46;
                var22 = global;
                var19 = 16;
                var10 = 4;
                var3 = 8;
                var18 = var2;
                var17 = var4;
                var16 = undefined;
                var15 = undefined;
                var2 = var18;
                var4 = var17;
                if (!var0) {
                    _fun97419_ip = 1491;
                    continue _fun97419
                }
            case 817:
                var9 = var18;
                var11 = var17;
                if (!(var3 !== var9)) {
                    _fun97419_ip = 1607;
                    continue _fun97419
                }
            case 830:
                var0 = var24[var20];
                if (!(var21 === var0)) {
                    _fun97419_ip = 865;
                    continue _fun97419
                }
            case 838:
                if (!(var8 === var11)) {
                    _fun97419_ip = 856;
                    continue _fun97419
                }
            case 842:
                var26 = var20 + 1;
                var28 = var9 + 1;
                var27 = var28;
                _fun97419_ip = 1085;
                continue _fun97419;
            case 856:
                var0 = _closure1_slot4;
                _fun97419_ip = 1617;
                continue _fun97419;
            case 865:
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var7];
                var14 = var13.bind(var25)(var12);
                var13 = var14.isASCIIHex;
                var12 = var24[var20];
                var29 = var13.bind(var14)(var12);
                var32 = var20;
                var31 = 0;
                var30 = 0;
                var13 = var32;
                var14 = 0;
                var12 = 0;
                if (!var29) {
                    _fun97419_ip = 1016;
                    continue _fun97419
                }
            case 914:
                var33 = var22.parseInt;
                var29 = _closure1_slot10;
                var29 = var29.bind(var25)(var24, var32);
                var33 = var33.bind(var25)(var29, var19);
                var29 = var19 * var31;
                var34 = var29 + var33;
                var35 = var32 + 1;
                var33 = var30 + 1;
                var13 = var35;
                var14 = var34;
                var12 = var33;
                if (!(var33 < var10)) {
                    _fun97419_ip = 1016;
                    continue _fun97419
                }
            case 963:
                var36 = _closure1_slot0;
                var29 = _closure1_slot2;
                var29 = var29[var7];
                var37 = var36.bind(var25)(var29);
                var36 = var37.isASCIIHex;
                var29 = var24[var35];
                var29 = var36.bind(var37)(var29);
                var32 = var35;
                var31 = var34;
                var30 = var33;
                var13 = var32;
                var14 = var31;
                var12 = var30;
                if (var29) {
                    _fun97419_ip = 914;
                    continue _fun97419
                }
            case 1016:
                var29 = var24[var13];
                if (!(var23 !== var29)) {
                    _fun97419_ip = 1126;
                    continue _fun97419
                }
            case 1024:
                var29 = var24[var13];
                if (!(var21 !== var29)) {
                    _fun97419_ip = 1052;
                    continue _fun97419
                }
            case 1032:
                var30 = var24[var13];
                var29 = var13;
                if (!(var25 !== var30)) {
                    _fun97419_ip = 1066;
                    continue _fun97419
                }
            case 1043:
                var0 = _closure1_slot4;
                _fun97419_ip = 1617;
                continue _fun97419;
            case 1052:
                var31 = var13 + 1;
                var30 = var24[var31];
                var29 = var31;
                if (!(var25 !== var30)) {
                    _fun97419_ip = 1117;
                    continue _fun97419
                }
            case 1066:
                var5[var9] = var14;
                var28 = var9 + 1;
                var26 = var29;
                var27 = var11;
                var16 = var14;
                var15 = var12;
            case 1085:
                var14 = var24.length;
                var18 = var28;
                var17 = var27;
                var20 = var26;
                var2 = var18;
                var4 = var17;
                if (var20 < var14) {
                    _fun97419_ip = 817;
                    continue _fun97419
                }
            case 1112:
                _fun97419_ip = 1491;
                continue _fun97419;
            case 1117:
                var0 = _closure1_slot4;
                _fun97419_ip = 1617;
                continue _fun97419;
            case 1126:
                if (!(var6 !== var12)) {
                    _fun97419_ip = 1601;
                    continue _fun97419
                }
            case 1133:
                var21 = var13 - var12;
                var12 = 6;
                if (!(!(var9 > var12))) {
                    _fun97419_ip = 1595;
                    continue _fun97419
                }
            case 1147:
                var13 = var24[var21];
                var20 = 256;
                var19 = 2;
                var18 = 255;
                var17 = 10;
                var16 = var9;
                var15 = 0;
                var12 = var16;
                var9 = 0;
                var14 = undefined;
                if (!(var14 !== var13)) {
                    _fun97419_ip = 1481;
                    continue _fun97419
                }
            case 1185:
                var26 = var21;
                if (!(var15 > var6)) {
                    _fun97419_ip = 1216;
                    continue _fun97419
                }
            case 1192:
                var13 = var24[var21];
                if (!(var23 === var13)) {
                    _fun97419_ip = 1204;
                    continue _fun97419
                }
            case 1200:
                if (!(!(var15 < var10))) {
                    _fun97419_ip = 1213;
                    continue _fun97419
                }
            case 1204:
                var0 = _closure1_slot4;
                _fun97419_ip = 1617;
                continue _fun97419;
            case 1213:
                var26 = var21 + 1;
            case 1216:
                var27 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var7];
                var28 = var27.bind(var25)(var13);
                var27 = var28.isASCIIDigit;
                var13 = var24[var26];
                var13 = var27.bind(var28)(var13);
                if (var13) {
                    _fun97419_ip = 1260;
                    continue _fun97419
                }
            case 1251:
                var0 = _closure1_slot4;
                _fun97419_ip = 1617;
                continue _fun97419;
            case 1260:
                var27 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var7];
                var28 = var27.bind(var25)(var13);
                var27 = var28.isASCIIDigit;
                var13 = var24[var26];
                var13 = var27.bind(var28)(var13);
                var28 = var26;
                var27 = null;
                var21 = var28;
                var26 = null;
                if (!var13) {
                    _fun97419_ip = 1419;
                    continue _fun97419
                }
            case 1305:
                var29 = var22.parseInt;
                var13 = _closure1_slot10;
                var13 = var13.bind(var25)(var24, var28);
                var29 = var29.bind(var25)(var13);
                var13 = var28;
                var30 = var29;
                if (!(var8 !== var27)) {
                    _fun97419_ip = 1359;
                    continue _fun97419
                }
            case 1336:
                if (!(var6 !== var27)) {
                    _fun97419_ip = 1350;
                    continue _fun97419
                }
            case 1340:
                var31 = var17 * var27;
                var30 = var31 + var29;
                _fun97419_ip = 1359;
                continue _fun97419;
            case 1350:
                var0 = _closure1_slot4;
                _fun97419_ip = 1617;
                continue _fun97419;
            case 1359:
                if (!(!(var30 > var18))) {
                    _fun97419_ip = 1589;
                    continue _fun97419
                }
            case 1366:
                var31 = var13 + 1;
                var32 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var7];
                var33 = var32.bind(var25)(var13);
                var32 = var33.isASCIIDigit;
                var13 = var24[var31];
                var13 = var32.bind(var33)(var13);
                var28 = var31;
                var27 = var30;
                var21 = var28;
                var26 = var27;
                var14 = var29;
                if (var13) {
                    _fun97419_ip = 1305;
                    continue _fun97419
                }
            case 1419:
                var13 = var5[var16];
                var13 = var20 * var13;
                var13 = var13 + var26;
                var5[var16] = var13;
                var26 = var15 + 1;
                var13 = var19 != var26;
                if (!var13) {
                    _fun97419_ip = 1449;
                    continue _fun97419
                }
            case 1445:
                var13 = var10 !== var26;
            case 1449:
                var27 = var16;
                if (var13) {
                    _fun97419_ip = 1458;
                    continue _fun97419
                }
            case 1455:
                var27 = var16 + 1;
            case 1458:
                var13 = var24[var21];
                var16 = var27;
                var15 = var26;
                var12 = var16;
                var9 = var15;
                if (var25 !== var13) {
                    _fun97419_ip = 1185;
                    continue _fun97419
                }
            case 1481:
                var2 = var12;
                var4 = var11;
                if (!(var10 === var9)) {
                    _fun97419_ip = 1583;
                    continue _fun97419
                }
            case 1491:
                if (!(var8 === var4)) {
                    _fun97419_ip = 1515;
                    continue _fun97419
                }
            case 1495:
                var0 = var5;
                if (!(var8 === var4)) {
                    _fun97419_ip = 1617;
                    continue _fun97419
                }
            case 1502:
                var0 = var5;
                if (!(var3 !== var2)) {
                    _fun97419_ip = 1617;
                    continue _fun97419
                }
            case 1509:
                var0 = _closure1_slot4;
                _fun97419_ip = 1617;
                continue _fun97419;
            case 1515:
                var3 = var2 - var4;
                var2 = 7;
                var0 = var5;
                if (!(var3 > var6)) {
                    _fun97419_ip = 1617;
                    continue _fun97419
                }
            case 1529:
                var8 = var4 + var3;
                var8 = var8 - var7;
                var8 = var5[var8];
                var9 = var4 + var3;
                var10 = var9 - var7;
                var9 = var5[var2];
                var5[var10] = var9;
                var5[var2] = var8;
                var2 = var2 - 1;
                var3 = var3 - 1;
                var0 = var5;
                if (!(var6 !== var2)) {
                    _fun97419_ip = 1617;
                    continue _fun97419
                }
            case 1574:
                var0 = var5;
                if (var3 > var6) {
                    _fun97419_ip = 1529;
                    continue _fun97419
                }
            case 1581:
                _fun97419_ip = 1617;
                continue _fun97419;
            case 1583:
                var0 = _closure1_slot4;
                _fun97419_ip = 1617;
                continue _fun97419;
            case 1589:
                var0 = _closure1_slot4;
                _fun97419_ip = 1617;
                continue _fun97419;
            case 1595:
                var0 = _closure1_slot4;
                _fun97419_ip = 1617;
                continue _fun97419;
            case 1601:
                var0 = _closure1_slot4;
                _fun97419_ip = 1617;
                continue _fun97419;
            case 1607:
                var0 = _closure1_slot4;
                _fun97419_ip = 1617;
                continue _fun97419;
            case 1613:
                var0 = _closure1_slot4;
            case 1617:
                _fun97419_ip = 1626;
                continue _fun97419;
            case 1619:
                var0 = _closure1_slot4;
            case 1626:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var4 = function(arg0) { // Original name: serializeHost, environment: var1
        _fun97421: for (var _fun97421_ip = 0;;) switch (_fun97421_ip) {
            case 0:
                var10 = arg0;
                var8 = '';
                var7 = 1;
                var6 = global;
                var5 = 256;
                var4 = 4;
                var3 = '.';
                var2 = undefined;
                var9 = 'number';
                var0 = typeof var10;
                var1 = var10;
                if (!(var9 !== var0)) {
                    _fun97421_ip = 89;
                    continue _fun97421
                }
            case 41:
                var0 = var6.Array;
                var9 = var10 instanceof var0;
                var0 = var10;
                if (!var9) {
                    _fun97421_ip = 87;
                    continue _fun97421
                }
            case 57:
                var9 = function(arg0) { // Original name: serializeIPv6, environment: var9
                    _fun97422: for (var _fun97422_ip = 0;;) switch (_fun97422_ip) {
                        case 0:
                            var12 = arg0;
                            var0 = var12.length;
                            var11 = 0;
                            var4 = var11 < var0;
                            var10 = null;
                            var8 = 1;
                            var9 = null;
                            var7 = null;
                            var6 = 0;
                            var5 = 0;
                            var2 = null;
                            var1 = var8;
                            var3 = null;
                            var0 = 0;
                            if (!var4) {
                                _fun97422_ip = 127;
                                continue _fun97422
                            }
                        case 39:
                            var4 = var12[var5];
                            if (!(var11 === var4)) {
                                _fun97422_ip = 68;
                                continue _fun97422
                            }
                        case 47:
                            var14 = var7;
                            if (!(var10 === var7)) {
                                _fun97422_ip = 57;
                                continue _fun97422
                            }
                        case 54:
                            var14 = var5;
                        case 57:
                            var13 = var6 + 1;
                            var16 = var9;
                            var15 = var8;
                            _fun97422_ip = 91;
                            continue _fun97422;
                        case 68:
                            var4 = var8;
                            if (!(var6 > var8)) {
                                _fun97422_ip = 81;
                                continue _fun97422
                            }
                        case 75:
                            var9 = var7;
                            var4 = var6;
                        case 81:
                            var16 = var9;
                            var15 = var4;
                            var14 = null;
                            var13 = 0;
                        case 91:
                            var5 = var5 + 1;
                            var4 = var12.length;
                            var9 = var16;
                            var8 = var15;
                            var7 = var14;
                            var6 = var13;
                            var2 = var9;
                            var1 = var8;
                            var3 = var7;
                            var0 = var6;
                            if (var5 < var4) {
                                _fun97422_ip = 39;
                                continue _fun97422
                            }
                        case 127:
                            if (!(var0 > var1)) {
                                _fun97422_ip = 137;
                                continue _fun97422
                            }
                        case 131:
                            var2 = var3;
                            var1 = var0;
                        case 137:
                            var0 = {};
                            var0.idx = var2;
                            var0.len = var1;
                            var10 = var0.idx;
                            var9 = '';
                            var7 = 7;
                            var6 = ':';
                            var5 = 16;
                            var3 = '::';
                            var2 = false;
                            var1 = 0;
                        case 179:
                            var14 = var2;
                            if (!var2) {
                                _fun97422_ip = 193;
                                continue _fun97422
                            }
                        case 185:
                            var0 = var12[var1];
                            var14 = var11 === var0;
                        case 193:
                            var0 = var9;
                            var13 = var2;
                            if (var14) {
                                _fun97422_ip = 273;
                                continue _fun97422
                            }
                        case 202:
                            var16 = var2;
                            if (!var2) {
                                _fun97422_ip = 210;
                                continue _fun97422
                            }
                        case 208:
                            var16 = false;
                        case 210:
                            if (!(var10 === var1)) {
                                _fun97422_ip = 232;
                                continue _fun97422
                            }
                        case 214:
                            var14 = var6;
                            if (!(var11 === var1)) {
                                _fun97422_ip = 224;
                                continue _fun97422
                            }
                        case 221:
                            var14 = var3;
                        case 224:
                            var15 = var9 + var14;
                            var14 = true;
                            _fun97422_ip = 267;
                            continue _fun97422;
                        case 232:
                            var18 = var12[var1];
                            var17 = var18.toString;
                            var17 = var17.bind(var18)(var5);
                            var18 = var9 + var17;
                            var17 = var18;
                            if (!(var7 !== var1)) {
                                _fun97422_ip = 261;
                                continue _fun97422
                            }
                        case 257:
                            var17 = var18 + var6;
                        case 261:
                            var15 = var17;
                            var14 = var16;
                        case 267:
                            var0 = var15;
                            var13 = var14;
                        case 273:
                            var1 = var1 + 1;
                            var2 = var13;
                            var9 = var0;
                            if (var1 <= var7) {
                                _fun97422_ip = 179;
                                continue _fun97422
                            }
                        case 286:
                            return var0;
                    }
                };
                var10 = var9.bind(var2)(var10);
                var9 = '[';
                var10 = var9 + var10;
                var9 = ']';
                var0 = var10 + var9;
            case 87:
                _fun97421_ip = 153;
                continue _fun97421;
            case 89:
                var10 = var6.String;
                var9 = var1 % var5;
                var9 = var10.bind(var2)(var9);
                var10 = var9 + var8;
                var9 = var10;
                if (!(var4 !== var7)) {
                    _fun97421_ip = 119;
                    continue _fun97421
                }
            case 115:
                var9 = var3 + var10;
            case 119:
                var12 = var6.Math;
                var11 = var12.floor;
                var10 = var1 / var5;
                var1 = var11.bind(var12)(var10);
                var7 = var7 + 1;
                var8 = var9;
                var0 = var8;
                if (var7 <= var4) {
                    _fun97421_ip = 89;
                    continue _fun97421
                }
            case 153:
                return var0;
        }
    };
    var _closure1_slot24 = var4;
    var0 = function(arg0) { // Original name: shortenPath, environment: var1
        _fun97423: for (var _fun97423_ip = 0;;) switch (_fun97423_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.path;
                var3 = var1.length;
                var2 = 0;
                if (!(var2 !== var3)) {
                    _fun97423_ip = 93;
                    continue _fun97423
                }
            case 20:
                var3 = var0.scheme;
                var0 = 'file';
                var0 = var0 === var3;
                if (!var0) {
                    _fun97423_ip = 49;
                    continue _fun97423
                }
            case 37:
                var4 = var1.length;
                var3 = 1;
                var0 = var3 === var4;
            case 49:
                if (!var0) {
                    _fun97423_ip = 80;
                    continue _fun97423
                }
            case 52:
                var4 = var1[var2];
                var3 = /^[A-Za-z]:$/;
                var2 = var3.test;
                var0 = var2.bind(var3)(var4);
            case 80:
                if (var0) {
                    _fun97423_ip = 93;
                    continue _fun97423
                }
            case 83:
                var0 = var1.pop;
                var0 = var0.bind(var1)();
            case 93:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0) { // Original name: includesCredentials, environment: var1
        _fun97424: for (var _fun97424_ip = 0;;) switch (_fun97424_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.username;
                var2 = '';
                var0 = var2 !== var0;
                if (var0) {
                    _fun97424_ip = 29;
                    continue _fun97424
                }
            case 19:
                var1 = var1.password;
                var0 = var2 !== var1;
            case 29:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var3 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: URLStateMachine, environment: var1
        _fun97425: for (var _fun97425_ip = 0;;) switch (_fun97425_ip) {
            case 0:
                var3 = arg1;
                var0 = arg2;
                var4 = arg4;
                var2 = this;
                var1 = 0;
                var2.pointer = var1;
                var5 = arg0;
                var2.input = var5;
                if (var3) {
                    _fun97425_ip = 34;
                    continue _fun97425
                }
            case 32:
                var3 = null;
            case 34:
                var2.base = var3;
                if (var0) {
                    _fun97425_ip = 49;
                    continue _fun97425
                }
            case 43:
                var0 = 'utf-8';
            case 49:
                var2.encodingOverride = var0;
                var2.stateOverride = var4;
                var0 = arg3;
                var2.url = var0;
                var0 = false;
                var2.failure = var0;
                var2.parseError = var0;
                var3 = var2.url;
                if (var3) {
                    _fun97425_ip = 181;
                    continue _fun97425
                }
            case 92:
                var3 = {
                    'scheme': '',
                    'username': '',
                    'password': '',
                    'host': null,
                    'port': null,
                    'path': null,
                    'query': null,
                    'fragment': null,
                    'cannotBeABaseURL': false
                };
                var7 = '';
                var5 = new Array(0);
                var3.path = var5;
                var2.url = var3;
                var6 = var2.input;
                var5 = var6.replace;
                var3 = /^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g;
                var3 = var5.bind(var6)(var3, var7);
                var5 = var2.input;
                if (!(var3 !== var5)) {
                    _fun97425_ip = 175;
                    continue _fun97425
                }
            case 167:
                var5 = true;
                var2.parseError = var5;
            case 175:
                var2.input = var3;
            case 181:
                var7 = var2.input;
                var6 = var7.replace;
                var5 = /\u0009|\u000A|\u000D/g;
                var3 = '';
                var5 = var6.bind(var7)(var5, var3);
                var6 = var2.input;
                if (!(var5 !== var6)) {
                    _fun97425_ip = 234;
                    continue _fun97425
                }
            case 226:
                var6 = true;
                var2.parseError = var6;
            case 234:
                var2.input = var5;
                if (var4) {
                    _fun97425_ip = 249;
                    continue _fun97425
                }
            case 243:
                var4 = 'scheme start';
            case 249:
                var2.state = var4;
                var2.buffer = var3;
                var2.atFlag = var0;
                var2.arrFlag = var0;
                var2.passwordTokenSeenFlag = var0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = var0[var1];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var4 = var1.ucs2;
                var3 = var4.decode;
                var1 = var2.input;
                var1 = var3.bind(var4)(var1);
                var2.input = var1;
                var3 = var2.pointer;
                var1 = var2.input;
                var1 = var1.length;
                var5 = 'parse ';
                var4 = global;
                if (!(var3 <= var1)) {
                    _fun97425_ip = 487;
                    continue _fun97425
                }
            case 362:
                var3 = var2.input;
                var1 = var2.pointer;
                var7 = var3[var1];
                var1 = var4.isNaN;
                var1 = var1.bind(var0)(var7);
                var3 = undefined;
                if (var1) {
                    _fun97425_ip = 411;
                    continue _fun97425
                }
            case 394:
                var8 = var4.String;
                var1 = var8.fromCodePoint;
                var3 = var1.bind(var8)(var7);
            case 411:
                var1 = var2.state;
                var1 = var5 + var1;
                var1 = var2[var1];
                var3 = var1.bind(var2)(var7, var3);
                if (!var3) {
                    _fun97425_ip = 487;
                    continue _fun97425
                }
            case 433:
                var1 = _closure1_slot4;
                if (!(var3 !== var1)) {
                    _fun97425_ip = 479;
                    continue _fun97425
                }
            case 441:
                var1 = var2.pointer;
                var1 = var1 + 1;
                var2.pointer = var1;
                var3 = var2.pointer;
                var1 = var2.input;
                var1 = var1.length;
                if (var3 <= var1) {
                    _fun97425_ip = 362;
                    continue _fun97425
                }
            case 477:
                _fun97425_ip = 487;
                continue _fun97425;
            case 479:
                var1 = true;
                var2.failure = var1;
            case 487:
                return var0;
        }
    };
    var _closure1_slot27 = var3;
    var0 = function(arg0, arg1) { // Original name: startsWithWindowsDriveLetter, environment: var1
        _fun97426: for (var _fun97426_ip = 0;;) switch (_fun97426_ip) {
            case 0:
                var5 = arg0;
                var6 = arg1;
                var0 = var5.length;
                var1 = var0 - var6;
                var2 = 2;
                var0 = var1 >= var2;
                if (!var0) {
                    _fun97426_ip = 99;
                    continue _fun97426
                }
            case 25:
                var7 = var5[var6];
                var4 = 1;
                var3 = var6 + var4;
                var8 = var5[var3];
                var9 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = var3[var4];
                var3 = undefined;
                var4 = var9.bind(var3)(var4);
                var3 = var4.isASCIIAlpha;
                var3 = var3.bind(var4)(var7);
                if (!var3) {
                    _fun97426_ip = 96;
                    continue _fun97426
                }
            case 76:
                var4 = 58;
                var4 = var4 === var8;
                if (var4) {
                    _fun97426_ip = 93;
                    continue _fun97426
                }
            case 86:
                var7 = 124;
                var4 = var7 === var8;
            case 93:
                var3 = var4;
            case 96:
                var0 = var3;
            case 99:
                if (!var0) {
                    _fun97426_ip = 137;
                    continue _fun97426
                }
            case 102:
                var1 = var2 === var1;
                if (var1) {
                    _fun97426_ip = 134;
                    continue _fun97426
                }
            case 109:
                var4 = _closure1_slot8;
                var3 = var4.has;
                var2 = var6 + var2;
                var2 = var5[var2];
                var1 = var3.bind(var4)(var2);
            case 134:
                var0 = var1;
            case 137:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = {
        'ftp': 21,
        'file': null,
        'http': 80,
        'https': 443,
        'ws': 80,
        'wss': 443
    };
    var _closure1_slot3 = var0;
    var5 = global;
    var7 = var5.Symbol;
    var0 = undefined;
    var6 = 'failure';
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var8 = var5.Set;
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var9 = [47, 58, 59, 61, 64, 91, 92, 93, 94, 124];
    var10 = var7;
    var6 = new var10[var8](var9, var8);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot5 = var6;
    var8 = var5.Set;
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var9 = [32, 34, 60, 62, 96];
    var10 = var7;
    var6 = new var10[var8](var9, var8);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot6 = var6;
    var8 = var5.Set;
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var9 = [35, 63, 123, 125];
    var10 = var7;
    var6 = new var10[var8](var9, var8);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot7 = var6;
    var7 = var3.prototype;
    var6 = function(arg0, arg1) { // Original name: parseSchemeStart, environment: var1
        _fun97427: for (var _fun97427_ip = 0;;) switch (_fun97427_ip) {
            case 0:
                var3 = arg1;
                var1 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 1;
                var4 = var4[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.isASCIIAlpha;
                var2 = arg0;
                var2 = var4.bind(var5)(var2);
                if (var2) {
                    _fun97427_ip = 100;
                    continue _fun97427
                }
            case 48:
                var2 = var1.stateOverride;
                if (var2) {
                    _fun97427_ip = 86;
                    continue _fun97427
                }
            case 57:
                var2 = 'no scheme';
                var1.state = var2;
                var2 = var1.pointer;
                var2 = var2 - 1;
                var1.pointer = var2;
                _fun97427_ip = 136;
                continue _fun97427;
            case 86:
                var2 = true;
                var1.parseError = var2;
                var0 = _closure1_slot4;
                return var0;
            case 100:
                var2 = var1.buffer;
                var0 = var3.toLowerCase;
                var0 = var0.bind(var3)();
                var0 = var2 + var0;
                var1.buffer = var0;
                var0 = 'scheme';
                var1.state = var0;
            case 136:
                var0 = true;
                return var0;
        }
    };
    var7['parse scheme start'] = var6;
    var7 = var3.prototype;
    var6 = function(arg0, arg1) { // Original name: parseScheme, environment: var1
        _fun97428: for (var _fun97428_ip = 0;;) switch (_fun97428_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = this;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 1;
                var2 = var2[var7];
                var5 = undefined;
                var6 = var6.bind(var5)(var2);
                var2 = var6.isASCIIAlphanumeric;
                var2 = var2.bind(var6)(var4);
                if (var2) {
                    _fun97428_ip = 769;
                    continue _fun97428
                }
            case 51:
                var2 = 43;
                if (!(var2 !== var4)) {
                    _fun97428_ip = 769;
                    continue _fun97428
                }
            case 61:
                var2 = 45;
                if (!(var2 !== var4)) {
                    _fun97428_ip = 769;
                    continue _fun97428
                }
            case 71:
                var2 = 46;
                if (!(var2 !== var4)) {
                    _fun97428_ip = 769;
                    continue _fun97428
                }
            case 81:
                var2 = 58;
                if (!(var2 !== var4)) {
                    _fun97428_ip = 150;
                    continue _fun97428
                }
            case 88:
                var2 = var1.stateOverride;
                if (var2) {
                    _fun97428_ip = 136;
                    continue _fun97428
                }
            case 97:
                var2 = '';
                var1.buffer = var2;
                var2 = 'no scheme';
                var1.state = var2;
                var2 = -1;
                var1.pointer = var2;
                _fun97428_ip = 795;
                continue _fun97428;
            case 136:
                var2 = true;
                var1.parseError = var2;
                var2 = _closure1_slot4;
                return var2;
            case 150:
                var2 = var1.stateOverride;
                if (!var2) {
                    _fun97428_ip = 352;
                    continue _fun97428
                }
            case 162:
                var4 = _closure1_slot14;
                var2 = var1.url;
                var2 = var4.bind(var5)(var2);
                if (!var2) {
                    _fun97428_ip = 201;
                    continue _fun97428
                }
            case 179:
                var4 = _closure1_slot13;
                var2 = var1.buffer;
                var2 = var4.bind(var5)(var2);
                if (var2) {
                    _fun97428_ip = 201;
                    continue _fun97428
                }
            case 197:
                var2 = false;
                return var2;
            case 201:
                var4 = _closure1_slot14;
                var2 = var1.url;
                var2 = var4.bind(var5)(var2);
                if (var2) {
                    _fun97428_ip = 240;
                    continue _fun97428
                }
            case 218:
                var4 = _closure1_slot13;
                var2 = var1.buffer;
                var2 = var4.bind(var5)(var2);
                if (!var2) {
                    _fun97428_ip = 240;
                    continue _fun97428
                }
            case 236:
                var2 = false;
                return var2;
            case 240:
                var4 = _closure1_slot26;
                var2 = var1.url;
                var2 = var4.bind(var5)(var2);
                if (var2) {
                    _fun97428_ip = 274;
                    continue _fun97428
                }
            case 257:
                var2 = var1.url;
                var4 = var2.port;
                var2 = null;
                if (!(var2 !== var4)) {
                    _fun97428_ip = 291;
                    continue _fun97428
                }
            case 274:
                var4 = var1.buffer;
                var2 = 'file';
                if (!(var2 !== var4)) {
                    _fun97428_ip = 765;
                    continue _fun97428
                }
            case 291:
                var2 = var1.url;
                var4 = var2.scheme;
                var2 = 'file';
                if (!(var2 === var4)) {
                    _fun97428_ip = 352;
                    continue _fun97428
                }
            case 310:
                var2 = var1.url;
                var4 = var2.host;
                var2 = '';
                if (!(var2 !== var4)) {
                    _fun97428_ip = 761;
                    continue _fun97428
                }
            case 332:
                var2 = var1.url;
                var4 = var2.host;
                var2 = null;
                if (!(var2 !== var4)) {
                    _fun97428_ip = 761;
                    continue _fun97428
                }
            case 352:
                var4 = var1.url;
                var2 = var1.buffer;
                var4.scheme = var2;
                var2 = var1.stateOverride;
                if (var2) {
                    _fun97428_ip = 709;
                    continue _fun97428
                }
            case 381:
                var8 = '';
                var1.buffer = var8;
                var2 = var1.url;
                var4 = var2.scheme;
                var2 = 'file';
                if (!(var2 !== var4)) {
                    _fun97428_ip = 633;
                    continue _fun97428
                }
            case 413:
                var6 = _closure1_slot14;
                var4 = var1.url;
                var4 = var6.bind(var5)(var4);
                if (!var4) {
                    _fun97428_ip = 472;
                    continue _fun97428
                }
            case 430:
                var6 = var1.base;
                var4 = null;
                if (!(var4 !== var6)) {
                    _fun97428_ip = 472;
                    continue _fun97428
                }
            case 442:
                var4 = var1.base;
                var6 = var4.scheme;
                var4 = var1.url;
                var4 = var4.scheme;
                if (!(var6 !== var4)) {
                    _fun97428_ip = 616;
                    continue _fun97428
                }
            case 472:
                var6 = _closure1_slot14;
                var4 = var1.url;
                var4 = var6.bind(var5)(var4);
                if (var4) {
                    _fun97428_ip = 599;
                    continue _fun97428
                }
            case 489:
                var6 = var1.input;
                var4 = var1.pointer;
                var4 = var4 + var7;
                var6 = var6[var4];
                var4 = 47;
                if (!(var4 !== var6)) {
                    _fun97428_ip = 567;
                    continue _fun97428
                }
            case 516:
                var6 = var1.url;
                var4 = true;
                var6.cannotBeABaseURL = var4;
                var4 = var1.url;
                var6 = var4.path;
                var4 = var6.push;
                var4 = var4.bind(var6)(var8);
                var4 = 'cannot-be-a-base-URL path';
                var1.state = var4;
                _fun97428_ip = 795;
                continue _fun97428;
            case 567:
                var4 = 'path or authority';
                var1.state = var4;
                var4 = var1.pointer;
                var4 = var4 + 1;
                var1.pointer = var4;
                _fun97428_ip = 795;
                continue _fun97428;
            case 599:
                var4 = 'special authority slashes';
                var1.state = var4;
                _fun97428_ip = 795;
                continue _fun97428;
            case 616:
                var4 = 'special relative or authority';
                var1.state = var4;
                _fun97428_ip = 795;
                continue _fun97428;
            case 633:
                var6 = var1.input;
                var4 = var1.pointer;
                var4 = var4 + var7;
                var4 = var6[var4];
                var7 = 47;
                var4 = var7 === var4;
                if (!var4) {
                    _fun97428_ip = 690;
                    continue _fun97428
                }
            case 663:
                var8 = var1.input;
                var9 = var1.pointer;
                var6 = 2;
                var6 = var9 + var6;
                var6 = var8[var6];
                var4 = var7 === var6;
            case 690:
                if (var4) {
                    _fun97428_ip = 701;
                    continue _fun97428
                }
            case 693:
                var4 = true;
                var1.parseError = var4;
            case 701:
                var1.state = var2;
                _fun97428_ip = 795;
                continue _fun97428;
            case 709:
                var2 = var1.url;
                var2 = var2.port;
                var4 = _closure1_slot16;
                var0 = var1.url;
                var0 = var0.scheme;
                var0 = var4.bind(var5)(var0);
                if (!(var2 === var0)) {
                    _fun97428_ip = 757;
                    continue _fun97428
                }
            case 744:
                var2 = var1.url;
                var0 = null;
                var2.port = var0;
            case 757:
                var0 = false;
                return var0;
            case 761:
                var0 = false;
                return var0;
            case 765:
                var0 = false;
                return var0;
            case 769:
                var2 = var1.buffer;
                var0 = var3.toLowerCase;
                var0 = var0.bind(var3)();
                var0 = var2 + var0;
                var1.buffer = var0;
            case 795:
                var0 = true;
                return var0;
        }
    };
    var7['parse scheme'] = var6;
    var7 = var3.prototype;
    var6 = function(arg0) { // Original name: parseNoScheme, environment: var1
        _fun97429: for (var _fun97429_ip = 0;;) switch (_fun97429_ip) {
            case 0:
                var1 = arg0;
                var3 = this;
                var2 = var3.base;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun97429_ip = 268;
                    continue _fun97429
                }
            case 21:
                var0 = var3.base;
                var0 = var0.cannotBeABaseURL;
                if (!var0) {
                    _fun97429_ip = 46;
                    continue _fun97429
                }
            case 36:
                var0 = 35;
                if (!(var0 === var1)) {
                    _fun97429_ip = 268;
                    continue _fun97429
                }
            case 46:
                var0 = var3.base;
                var0 = var0.cannotBeABaseURL;
                if (!var0) {
                    _fun97429_ip = 68;
                    continue _fun97429
                }
            case 61:
                var0 = 35;
                if (!(var0 !== var1)) {
                    _fun97429_ip = 148;
                    continue _fun97429
                }
            case 68:
                var0 = var3.base;
                var0 = var0.scheme;
                var1 = 'file';
                if (!(var1 !== var0)) {
                    _fun97429_ip = 120;
                    continue _fun97429
                }
            case 88:
                var0 = 'relative';
                var3.state = var0;
                var0 = var3.pointer;
                var0 = var0 - 1;
                var3.pointer = var0;
                var0 = true;
                _fun97429_ip = 275;
                continue _fun97429;
            case 120:
                var3.state = var1;
                var1 = var3.pointer;
                var1 = var1 - 1;
                var3.pointer = var1;
                var0 = true;
                _fun97429_ip = 275;
                continue _fun97429;
            case 148:
                var2 = var3.url;
                var1 = var3.base;
                var1 = var1.scheme;
                var2.scheme = var1;
                var2 = var3.url;
                var1 = var3.base;
                var4 = var1.path;
                var1 = var4.slice;
                var1 = var1.bind(var4)();
                var2.path = var1;
                var2 = var3.url;
                var1 = var3.base;
                var1 = var1.query;
                var2.query = var1;
                var2 = var3.url;
                var1 = '';
                var2.fragment = var1;
                var2 = var3.url;
                var1 = true;
                var2.cannotBeABaseURL = var1;
                var2 = 'fragment';
                var3.state = var2;
                var0 = true;
                _fun97429_ip = 275;
                continue _fun97429;
            case 268:
                var0 = _closure1_slot4;
            case 275:
                return var0;
        }
    };
    var7['parse no scheme'] = var6;
    var7 = var3.prototype;
    var6 = function(arg0) { // Original name: parseSpecialRelativeOrAuthority, environment: var1
        _fun97430: for (var _fun97430_ip = 0;;) switch (_fun97430_ip) {
            case 0:
                var1 = this;
                var2 = 47;
                var0 = arg0;
                if (!(var2 === var0)) {
                    _fun97430_ip = 40;
                    continue _fun97430
                }
            case 13:
                var3 = var1.input;
                var4 = var1.pointer;
                var0 = 1;
                var0 = var4 + var0;
                var0 = var3[var0];
                if (!(var2 !== var0)) {
                    _fun97430_ip = 75;
                    continue _fun97430
                }
            case 40:
                var0 = true;
                var1.parseError = var0;
                var0 = 'relative';
                var1.state = var0;
                var0 = var1.pointer;
                var0 = var0 - 1;
                var1.pointer = var0;
                _fun97430_ip = 102;
                continue _fun97430;
            case 75:
                var0 = 'special authority ignore slashes';
                var1.state = var0;
                var0 = var1.pointer;
                var0 = var0 + 1;
                var1.pointer = var0;
            case 102:
                var0 = true;
                return var0;
        }
    };
    var7['parse special relative or authority'] = var6;
    var7 = var3.prototype;
    var6 = function(arg0) { // Original name: parsePathOrAuthority, environment: var1
        _fun97431: for (var _fun97431_ip = 0;;) switch (_fun97431_ip) {
            case 0:
                var1 = this;
                var2 = 47;
                var0 = arg0;
                if (!(var2 !== var0)) {
                    _fun97431_ip = 40;
                    continue _fun97431
                }
            case 13:
                var0 = 'path';
                var1.state = var0;
                var0 = var1.pointer;
                var0 = var0 - 1;
                var1.pointer = var0;
                _fun97431_ip = 52;
                continue _fun97431;
            case 40:
                var0 = 'authority';
                var1.state = var0;
            case 52:
                var0 = true;
                return var0;
        }
    };
    var7['parse path or authority'] = var6;
    var7 = var3.prototype;
    var6 = function(arg0) { // Original name: parseRelative, environment: var1
        _fun97432: for (var _fun97432_ip = 0;;) switch (_fun97432_ip) {
            case 0:
                var2 = arg0;
                var0 = this;
                var3 = var0.url;
                var1 = var0.base;
                var1 = var1.scheme;
                var3.scheme = var1;
                var1 = global;
                var1 = var1.isNaN;
                var4 = undefined;
                var1 = var1.bind(var4)(var2);
                if (var1) {
                    _fun97432_ip = 662;
                    continue _fun97432
                }
            case 50:
                var1 = 47;
                if (!(var1 !== var2)) {
                    _fun97432_ip = 645;
                    continue _fun97432
                }
            case 60:
                var1 = 63;
                if (!(var1 !== var2)) {
                    _fun97432_ip = 492;
                    continue _fun97432
                }
            case 70:
                var1 = 35;
                if (!(var1 !== var2)) {
                    _fun97432_ip = 316;
                    continue _fun97432
                }
            case 80:
                var3 = _closure1_slot14;
                var1 = var0.url;
                var1 = var3.bind(var4)(var1);
                if (!var1) {
                    _fun97432_ip = 110;
                    continue _fun97432
                }
            case 100:
                var1 = 92;
                if (!(var1 !== var2)) {
                    _fun97432_ip = 291;
                    continue _fun97432
                }
            case 110:
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.username;
                var2.username = var1;
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.password;
                var2.password = var1;
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.host;
                var2.host = var1;
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.port;
                var2.port = var1;
                var2 = var0.url;
                var1 = var0.base;
                var5 = var1.path;
                var4 = var5.slice;
                var1 = var0.base;
                var1 = var1.path;
                var3 = var1.length;
                var1 = 1;
                var3 = var3 - var1;
                var1 = 0;
                var1 = var4.bind(var5)(var1, var3);
                var2.path = var1;
                var1 = 'path';
                var0.state = var1;
                var1 = var0.pointer;
                var1 = var1 - 1;
                var0.pointer = var1;
                _fun97432_ip = 808;
                continue _fun97432;
            case 291:
                var1 = true;
                var0.parseError = var1;
                var1 = 'relative slash';
                var0.state = var1;
                _fun97432_ip = 808;
                continue _fun97432;
            case 316:
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.username;
                var2.username = var1;
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.password;
                var2.password = var1;
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.host;
                var2.host = var1;
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.port;
                var2.port = var1;
                var2 = var0.url;
                var1 = var0.base;
                var3 = var1.path;
                var1 = var3.slice;
                var1 = var1.bind(var3)();
                var2.path = var1;
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.query;
                var2.query = var1;
                var2 = var0.url;
                var1 = '';
                var2.fragment = var1;
                var1 = 'fragment';
                var0.state = var1;
                _fun97432_ip = 808;
                continue _fun97432;
            case 492:
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.username;
                var2.username = var1;
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.password;
                var2.password = var1;
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.host;
                var2.host = var1;
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.port;
                var2.port = var1;
                var2 = var0.url;
                var1 = var0.base;
                var3 = var1.path;
                var1 = var3.slice;
                var1 = var1.bind(var3)();
                var2.path = var1;
                var2 = var0.url;
                var1 = '';
                var2.query = var1;
                var1 = 'query';
                var0.state = var1;
                _fun97432_ip = 808;
                continue _fun97432;
            case 645:
                var1 = 'relative slash';
                var0.state = var1;
                _fun97432_ip = 808;
                continue _fun97432;
            case 662:
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.username;
                var2.username = var1;
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.password;
                var2.password = var1;
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.host;
                var2.host = var1;
                var2 = var0.url;
                var1 = var0.base;
                var1 = var1.port;
                var2.port = var1;
                var2 = var0.url;
                var1 = var0.base;
                var3 = var1.path;
                var1 = var3.slice;
                var1 = var1.bind(var3)();
                var2.path = var1;
                var1 = var0.url;
                var0 = var0.base;
                var0 = var0.query;
                var1.query = var0;
            case 808:
                var0 = true;
                return var0;
        }
    };
    var7['parse relative'] = var6;
    var7 = var3.prototype;
    var6 = function(arg0) { // Original name: parseRelativeSlash, environment: var1
        _fun97433: for (var _fun97433_ip = 0;;) switch (_fun97433_ip) {
            case 0:
                var2 = arg0;
                var1 = this;
                var4 = _closure1_slot14;
                var3 = var1.url;
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                if (!var0) {
                    _fun97433_ip = 74;
                    continue _fun97433
                }
            case 28:
                var0 = 47;
                if (!(var0 !== var2)) {
                    _fun97433_ip = 42;
                    continue _fun97433
                }
            case 35:
                var0 = 92;
                if (!(var0 === var2)) {
                    _fun97433_ip = 74;
                    continue _fun97433
                }
            case 42:
                var0 = 92;
                if (!(var0 === var2)) {
                    _fun97433_ip = 57;
                    continue _fun97433
                }
            case 49:
                var0 = true;
                var1.parseError = var0;
            case 57:
                var0 = 'special authority ignore slashes';
                var1.state = var0;
                _fun97433_ip = 211;
                continue _fun97433;
            case 74:
                var0 = 47;
                if (!(var0 !== var2)) {
                    _fun97433_ip = 199;
                    continue _fun97433
                }
            case 81:
                var2 = var1.url;
                var0 = var1.base;
                var0 = var0.username;
                var2.username = var0;
                var2 = var1.url;
                var0 = var1.base;
                var0 = var0.password;
                var2.password = var0;
                var2 = var1.url;
                var0 = var1.base;
                var0 = var0.host;
                var2.host = var0;
                var2 = var1.url;
                var0 = var1.base;
                var0 = var0.port;
                var2.port = var0;
                var0 = 'path';
                var1.state = var0;
                var0 = var1.pointer;
                var0 = var0 - 1;
                var1.pointer = var0;
                _fun97433_ip = 211;
                continue _fun97433;
            case 199:
                var0 = 'authority';
                var1.state = var0;
            case 211:
                var0 = true;
                return var0;
        }
    };
    var7['parse relative slash'] = var6;
    var7 = var3.prototype;
    var6 = function(arg0) { // Original name: parseSpecialAuthoritySlashes, environment: var1
        _fun97434: for (var _fun97434_ip = 0;;) switch (_fun97434_ip) {
            case 0:
                var1 = this;
                var2 = 47;
                var0 = arg0;
                if (!(var2 === var0)) {
                    _fun97434_ip = 40;
                    continue _fun97434
                }
            case 13:
                var3 = var1.input;
                var4 = var1.pointer;
                var0 = 1;
                var0 = var4 + var0;
                var0 = var3[var0];
                if (!(var2 !== var0)) {
                    _fun97434_ip = 77;
                    continue _fun97434
                }
            case 40:
                var0 = true;
                var1.parseError = var0;
                var0 = 'special authority ignore slashes';
                var1.state = var0;
                var0 = var1.pointer;
                var0 = var0 - 1;
                var1.pointer = var0;
                _fun97434_ip = 104;
                continue _fun97434;
            case 77:
                var0 = 'special authority ignore slashes';
                var1.state = var0;
                var0 = var1.pointer;
                var0 = var0 + 1;
                var1.pointer = var0;
            case 104:
                var0 = true;
                return var0;
        }
    };
    var7['parse special authority slashes'] = var6;
    var7 = var3.prototype;
    var6 = function(arg0) { // Original name: parseSpecialAuthorityIgnoreSlashes, environment: var1
        _fun97435: for (var _fun97435_ip = 0;;) switch (_fun97435_ip) {
            case 0:
                var2 = arg0;
                var1 = this;
                var0 = 47;
                if (!(var0 !== var2)) {
                    _fun97435_ip = 20;
                    continue _fun97435
                }
            case 13:
                var0 = 92;
                if (!(var0 === var2)) {
                    _fun97435_ip = 30;
                    continue _fun97435
                }
            case 20:
                var0 = true;
                var1.parseError = var0;
                _fun97435_ip = 57;
                continue _fun97435;
            case 30:
                var0 = 'authority';
                var1.state = var0;
                var0 = var1.pointer;
                var0 = var0 - 1;
                var1.pointer = var0;
            case 57:
                var0 = true;
                return var0;
        }
    };
    var7['parse special authority ignore slashes'] = var6;
    var7 = var3.prototype;
    var6 = function(arg0, arg1) { // Original name: parseAuthority, environment: var1
        _fun97436: for (var _fun97436_ip = 0;;) switch (_fun97436_ip) {
            case 0:
                var2 = arg0;
                var1 = this;
                var0 = 64;
                if (!(var0 !== var2)) {
                    _fun97436_ip = 212;
                    continue _fun97436
                }
            case 16:
                var0 = global;
                var0 = var0.isNaN;
                var4 = undefined;
                var0 = var0.bind(var4)(var2);
                if (var0) {
                    _fun97436_ip = 106;
                    continue _fun97436
                }
            case 34:
                var0 = 47;
                if (!(var0 !== var2)) {
                    _fun97436_ip = 106;
                    continue _fun97436
                }
            case 41:
                var0 = 63;
                if (!(var0 !== var2)) {
                    _fun97436_ip = 106;
                    continue _fun97436
                }
            case 48:
                var0 = 35;
                if (!(var0 !== var2)) {
                    _fun97436_ip = 106;
                    continue _fun97436
                }
            case 55:
                var3 = _closure1_slot14;
                var0 = var1.url;
                var0 = var3.bind(var4)(var0);
                if (!var0) {
                    _fun97436_ip = 82;
                    continue _fun97436
                }
            case 75:
                var0 = 92;
                if (!(var0 !== var2)) {
                    _fun97436_ip = 106;
                    continue _fun97436
                }
            case 82:
                var2 = var1.buffer;
                var0 = arg1;
                var0 = var2 + var0;
                var1.buffer = var0;
                _fun97436_ip = 416;
                continue _fun97436;
            case 106:
                var0 = var1.atFlag;
                if (!var0) {
                    _fun97436_ip = 129;
                    continue _fun97436
                }
            case 115:
                var2 = var1.buffer;
                var0 = '';
                if (!(var0 !== var2)) {
                    _fun97436_ip = 195;
                    continue _fun97436
                }
            case 129:
                var2 = var1.pointer;
                var3 = _closure1_slot9;
                var0 = var1.buffer;
                var3 = var3.bind(var4)(var0);
                var0 = 1;
                var0 = var3 + var0;
                var0 = var2 - var0;
                var1.pointer = var0;
                var0 = '';
                var1.buffer = var0;
                var0 = 'host';
                var1.state = var0;
                _fun97436_ip = 416;
                continue _fun97436;
            case 195:
                var0 = true;
                var1.parseError = var0;
                var0 = _closure1_slot4;
                return var0;
            case 212:
                var7 = true;
                var1.parseError = var7;
                var0 = var1.atFlag;
                if (!var0) {
                    _fun97436_ip = 251;
                    continue _fun97436
                }
            case 229:
                var2 = var1.buffer;
                var0 = '%40';
                var0 = var0 + var2;
                var1.buffer = var0;
            case 251:
                var1.atFlag = var7;
                var2 = _closure1_slot9;
                var0 = var1.buffer;
                var5 = undefined;
                var4 = var2.bind(var5)(var0);
                var3 = 0;
                var8 = var3 < var4;
                var2 = 58;
                var0 = undefined;
                if (!var8) {
                    _fun97436_ip = 406;
                    continue _fun97436
                }
            case 291:
                var9 = var1.buffer;
                var8 = var9.codePointAt;
                var11 = var8.bind(var9)(var3);
                var8 = var3;
                if (!(var2 === var11)) {
                    _fun97436_ip = 332;
                    continue _fun97436
                }
            case 315:
                var9 = var1.passwordTokenSeenFlag;
                if (var9) {
                    _fun97436_ip = 332;
                    continue _fun97436
                }
            case 324:
                var1.passwordTokenSeenFlag = var7;
                _fun97436_ip = 399;
                continue _fun97436;
            case 332:
                var10 = _closure1_slot21;
                var9 = _closure1_slot18;
                var9 = var10.bind(var5)(var11, var9);
                var10 = var1.passwordTokenSeenFlag;
                var11 = var1.url;
                if (var10) {
                    _fun97436_ip = 380;
                    continue _fun97436
                }
            case 360:
                var10 = var11.username;
                var10 = var10 + var9;
                var11.username = var10;
                var0 = var9;
                _fun97436_ip = 399;
                continue _fun97436;
            case 380:
                var10 = var11.password;
                var10 = var10 + var9;
                var11.password = var10;
                var0 = var9;
            case 399:
                var3 = var8 + 1;
                if (var3 < var4) {
                    _fun97436_ip = 291;
                    continue _fun97436
                }
            case 406:
                var0 = '';
                var1.buffer = var0;
            case 416:
                var0 = true;
                return var0;
        }
    };
    var7['parse authority'] = var6;
    var7 = var3.prototype;
    var8 = var3.prototype;
    var6 = function(arg0, arg1) { // Original name: parseHostName, environment: var1
        _fun97437: for (var _fun97437_ip = 0;;) switch (_fun97437_ip) {
            case 0:
                var2 = arg0;
                var1 = this;
                var0 = var1.stateOverride;
                if (!var0) {
                    _fun97437_ip = 37;
                    continue _fun97437
                }
            case 15:
                var0 = var1.url;
                var3 = var0.scheme;
                var0 = 'file';
                if (!(var0 !== var3)) {
                    _fun97437_ip = 534;
                    continue _fun97437
                }
            case 37:
                var0 = 58;
                if (!(var0 === var2)) {
                    _fun97437_ip = 187;
                    continue _fun97437
                }
            case 47:
                var0 = var1.arrFlag;
                if (var0) {
                    _fun97437_ip = 187;
                    continue _fun97437
                }
            case 59:
                var0 = var1.buffer;
                var3 = '';
                if (!(var3 !== var0)) {
                    _fun97437_ip = 170;
                    continue _fun97437
                }
            case 73:
                var7 = _closure1_slot23;
                var6 = var1.buffer;
                var8 = _closure1_slot15;
                var4 = var1.url;
                var5 = undefined;
                var4 = var8.bind(var5)(var4);
                var5 = var7.bind(var5)(var6, var4);
                var4 = _closure1_slot4;
                if (!(var5 !== var4)) {
                    _fun97437_ip = 164;
                    continue _fun97437
                }
            case 116:
                var4 = var1.url;
                var4.host = var5;
                var1.buffer = var3;
                var3 = 'port';
                var1.state = var3;
                var4 = var1.stateOverride;
                var3 = 'hostname';
                if (!(var3 === var4)) {
                    _fun97437_ip = 561;
                    continue _fun97437
                }
            case 160:
                var3 = false;
                return var3;
            case 164:
                var0 = _closure1_slot4;
                return var0;
            case 170:
                var0 = true;
                var1.parseError = var0;
                var0 = _closure1_slot4;
                return var0;
            case 187:
                var0 = global;
                var0 = var0.isNaN;
                var5 = undefined;
                var0 = var0.bind(var5)(var2);
                if (var0) {
                    _fun97437_ip = 309;
                    continue _fun97437
                }
            case 205:
                var0 = 47;
                if (!(var0 !== var2)) {
                    _fun97437_ip = 309;
                    continue _fun97437
                }
            case 212:
                var0 = 63;
                if (!(var0 !== var2)) {
                    _fun97437_ip = 309;
                    continue _fun97437
                }
            case 219:
                var0 = 35;
                if (!(var0 !== var2)) {
                    _fun97437_ip = 309;
                    continue _fun97437
                }
            case 226:
                var3 = _closure1_slot14;
                var0 = var1.url;
                var0 = var3.bind(var5)(var0);
                if (!var0) {
                    _fun97437_ip = 253;
                    continue _fun97437
                }
            case 246:
                var0 = 92;
                if (!(var0 !== var2)) {
                    _fun97437_ip = 309;
                    continue _fun97437
                }
            case 253:
                var0 = 91;
                if (!(var0 !== var2)) {
                    _fun97437_ip = 277;
                    continue _fun97437
                }
            case 260:
                var0 = 93;
                if (!(var0 === var2)) {
                    _fun97437_ip = 285;
                    continue _fun97437
                }
            case 267:
                var0 = false;
                var1.arrFlag = var0;
                _fun97437_ip = 285;
                continue _fun97437;
            case 277:
                var0 = true;
                var1.arrFlag = var0;
            case 285:
                var2 = var1.buffer;
                var0 = arg1;
                var0 = var2 + var0;
                var1.buffer = var0;
                _fun97437_ip = 561;
                continue _fun97437;
            case 309:
                var0 = var1.pointer;
                var0 = var0 - 1;
                var1.pointer = var0;
                var3 = _closure1_slot14;
                var2 = var1.url;
                var2 = var3.bind(var5)(var2);
                if (!var2) {
                    _fun97437_ip = 361;
                    continue _fun97437
                }
            case 344:
                var3 = var1.buffer;
                var2 = '';
                if (!(var2 !== var3)) {
                    _fun97437_ip = 520;
                    continue _fun97437
                }
            case 361:
                var2 = var1.stateOverride;
                if (!var2) {
                    _fun97437_ip = 418;
                    continue _fun97437
                }
            case 370:
                var3 = var1.buffer;
                var2 = '';
                if (!(var2 === var3)) {
                    _fun97437_ip = 418;
                    continue _fun97437
                }
            case 384:
                var3 = _closure1_slot26;
                var2 = var1.url;
                var2 = var3.bind(var5)(var2);
                if (var2) {
                    _fun97437_ip = 508;
                    continue _fun97437
                }
            case 401:
                var2 = var1.url;
                var3 = var2.port;
                var2 = null;
                if (!(var2 === var3)) {
                    _fun97437_ip = 508;
                    continue _fun97437
                }
            case 418:
                var4 = _closure1_slot23;
                var3 = var1.buffer;
                var6 = _closure1_slot15;
                var2 = var1.url;
                var2 = var6.bind(var5)(var2);
                var3 = var4.bind(var5)(var3, var2);
                var2 = _closure1_slot4;
                if (!(var3 !== var2)) {
                    _fun97437_ip = 502;
                    continue _fun97437
                }
            case 456:
                var2 = var1.url;
                var2.host = var3;
                var2 = '';
                var1.buffer = var2;
                var2 = 'path start';
                var1.state = var2;
                var2 = var1.stateOverride;
                if (!var2) {
                    _fun97437_ip = 561;
                    continue _fun97437
                }
            case 498:
                var2 = false;
                return var2;
            case 502:
                var2 = _closure1_slot4;
                return var2;
            case 508:
                var2 = true;
                var1.parseError = var2;
                var2 = false;
                return var2;
            case 520:
                var2 = true;
                var1.parseError = var2;
                var0 = _closure1_slot4;
                return var0;
            case 534:
                var0 = var1.pointer;
                var0 = var0 - 1;
                var1.pointer = var0;
                var0 = 'file host';
                var1.state = var0;
            case 561:
                var0 = true;
                return var0;
        }
    };
    var8['parse host'] = var6;
    var7['parse hostname'] = var6;
    var7 = var3.prototype;
    var6 = function(arg0, arg1) { // Original name: parsePort, environment: var1
        _fun97438: for (var _fun97438_ip = 0;;) switch (_fun97438_ip) {
            case 0:
                var5 = arg0;
                var1 = this;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 1;
                var2 = var2[var4];
                var7 = undefined;
                var3 = var3.bind(var7)(var2);
                var2 = var3.isASCIIDigit;
                var2 = var2.bind(var3)(var5);
                if (var2) {
                    _fun97438_ip = 297;
                    continue _fun97438
                }
            case 48:
                var3 = global;
                var2 = var3.isNaN;
                var2 = var2.bind(var7)(var5);
                if (var2) {
                    _fun97438_ip = 132;
                    continue _fun97438
                }
            case 64:
                var2 = 47;
                if (!(var2 !== var5)) {
                    _fun97438_ip = 132;
                    continue _fun97438
                }
            case 71:
                var2 = 63;
                if (!(var2 !== var5)) {
                    _fun97438_ip = 132;
                    continue _fun97438
                }
            case 78:
                var2 = 35;
                if (!(var2 !== var5)) {
                    _fun97438_ip = 132;
                    continue _fun97438
                }
            case 85:
                var6 = _closure1_slot14;
                var2 = var1.url;
                var2 = var6.bind(var7)(var2);
                if (!var2) {
                    _fun97438_ip = 109;
                    continue _fun97438
                }
            case 102:
                var2 = 92;
                if (!(var2 !== var5)) {
                    _fun97438_ip = 132;
                    continue _fun97438
                }
            case 109:
                var2 = var1.stateOverride;
                if (var2) {
                    _fun97438_ip = 132;
                    continue _fun97438
                }
            case 118:
                var2 = true;
                var1.parseError = var2;
                var2 = _closure1_slot4;
                return var2;
            case 132:
                var5 = var1.buffer;
                var2 = '';
                if (!(var2 !== var5)) {
                    _fun97438_ip = 241;
                    continue _fun97438
                }
            case 146:
                var6 = var3.parseInt;
                var5 = var1.buffer;
                var5 = var6.bind(var7)(var5);
                var9 = var3.Math;
                var8 = var9.pow;
                var6 = 2;
                var3 = 16;
                var3 = var8.bind(var9)(var6, var3);
                var3 = var3 - var4;
                if (!(!(var5 > var3))) {
                    _fun97438_ip = 283;
                    continue _fun97438
                }
            case 195:
                var4 = var1.url;
                var6 = _closure1_slot16;
                var3 = var1.url;
                var3 = var3.scheme;
                var6 = var6.bind(var7)(var3);
                var3 = null;
                if (!(var5 !== var6)) {
                    _fun97438_ip = 229;
                    continue _fun97438
                }
            case 226:
                var3 = var5;
            case 229:
                var4.port = var3;
                var1.buffer = var2;
            case 241:
                var2 = var1.stateOverride;
                if (var2) {
                    _fun97438_ip = 279;
                    continue _fun97438
                }
            case 250:
                var2 = 'path start';
                var1.state = var2;
                var2 = var1.pointer;
                var2 = var2 - 1;
                var1.pointer = var2;
                _fun97438_ip = 316;
                continue _fun97438;
            case 279:
                var2 = false;
                return var2;
            case 283:
                var2 = true;
                var1.parseError = var2;
                var0 = _closure1_slot4;
                return var0;
            case 297:
                var2 = var1.buffer;
                var0 = arg1;
                var0 = var2 + var0;
                var1.buffer = var0;
            case 316:
                var0 = true;
                return var0;
        }
    };
    var7['parse port'] = var6;
    var7 = var5.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var9 = [47, 92, 63, 35];
    var10 = var6;
    var5 = new var10[var7](var9, var8);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot8 = var5;
    var6 = var3.prototype;
    var5 = function(arg0) { // Original name: parseFile, environment: var1
        _fun97439: for (var _fun97439_ip = 0;;) switch (_fun97439_ip) {
            case 0:
                var2 = arg0;
                var1 = this;
                var0 = var1.url;
                var3 = 'file';
                var0.scheme = var3;
                var0 = 47;
                if (!(var0 !== var2)) {
                    _fun97439_ip = 547;
                    continue _fun97439
                }
            case 31:
                var0 = 92;
                if (!(var0 !== var2)) {
                    _fun97439_ip = 547;
                    continue _fun97439
                }
            case 41:
                var4 = var1.base;
                var0 = null;
                if (!(var0 !== var4)) {
                    _fun97439_ip = 69;
                    continue _fun97439
                }
            case 53:
                var0 = var1.base;
                var0 = var0.scheme;
                if (!(var3 !== var0)) {
                    _fun97439_ip = 99;
                    continue _fun97439
                }
            case 69:
                var0 = 'path';
                var1.state = var0;
                var0 = var1.pointer;
                var0 = var0 - 1;
                var1.pointer = var0;
                _fun97439_ip = 574;
                continue _fun97439;
            case 99:
                var0 = global;
                var0 = var0.isNaN;
                var4 = undefined;
                var0 = var0.bind(var4)(var2);
                if (var0) {
                    _fun97439_ip = 467;
                    continue _fun97439
                }
            case 120:
                var0 = 63;
                if (!(var0 !== var2)) {
                    _fun97439_ip = 385;
                    continue _fun97439
                }
            case 130:
                var0 = 35;
                if (!(var0 !== var2)) {
                    _fun97439_ip = 277;
                    continue _fun97439
                }
            case 140:
                var6 = _closure1_slot28;
                var5 = var1.input;
                var3 = var1.pointer;
                var3 = var6.bind(var4)(var5, var3);
                if (var3) {
                    _fun97439_ip = 239;
                    continue _fun97439
                }
            case 168:
                var5 = var1.url;
                var3 = var1.base;
                var3 = var3.host;
                var5.host = var3;
                var5 = var1.url;
                var3 = var1.base;
                var6 = var3.path;
                var3 = var6.slice;
                var3 = var3.bind(var6)();
                var5.path = var3;
                var3 = _closure1_slot25;
                var0 = var1.url;
                var0 = var3.bind(var4)(var0);
                _fun97439_ip = 247;
                continue _fun97439;
            case 239:
                var0 = true;
                var1.parseError = var0;
            case 247:
                var0 = 'path';
                var1.state = var0;
                var0 = var1.pointer;
                var0 = var0 - 1;
                var1.pointer = var0;
                _fun97439_ip = 574;
                continue _fun97439;
            case 277:
                var3 = var1.url;
                var0 = var1.base;
                var0 = var0.host;
                var3.host = var0;
                var3 = var1.url;
                var0 = var1.base;
                var4 = var0.path;
                var0 = var4.slice;
                var0 = var0.bind(var4)();
                var3.path = var0;
                var3 = var1.url;
                var0 = var1.base;
                var0 = var0.query;
                var3.query = var0;
                var3 = var1.url;
                var0 = '';
                var3.fragment = var0;
                var0 = 'fragment';
                var1.state = var0;
                _fun97439_ip = 574;
                continue _fun97439;
            case 385:
                var3 = var1.url;
                var0 = var1.base;
                var0 = var0.host;
                var3.host = var0;
                var3 = var1.url;
                var0 = var1.base;
                var4 = var0.path;
                var0 = var4.slice;
                var0 = var0.bind(var4)();
                var3.path = var0;
                var3 = var1.url;
                var0 = '';
                var3.query = var0;
                var0 = 'query';
                var1.state = var0;
                _fun97439_ip = 574;
                continue _fun97439;
            case 467:
                var3 = var1.url;
                var0 = var1.base;
                var0 = var0.host;
                var3.host = var0;
                var3 = var1.url;
                var0 = var1.base;
                var4 = var0.path;
                var0 = var4.slice;
                var0 = var0.bind(var4)();
                var3.path = var0;
                var3 = var1.url;
                var0 = var1.base;
                var0 = var0.query;
                var3.query = var0;
                _fun97439_ip = 574;
                continue _fun97439;
            case 547:
                var0 = 92;
                if (!(var0 === var2)) {
                    _fun97439_ip = 562;
                    continue _fun97439
                }
            case 554:
                var0 = true;
                var1.parseError = var0;
            case 562:
                var0 = 'file slash';
                var1.state = var0;
            case 574:
                var0 = true;
                return var0;
        }
    };
    var6['parse file'] = var5;
    var6 = var3.prototype;
    var5 = function(arg0) { // Original name: parseFileSlash, environment: var1
        _fun97440: for (var _fun97440_ip = 0;;) switch (_fun97440_ip) {
            case 0:
                var2 = arg0;
                var1 = this;
                var0 = 47;
                if (!(var0 !== var2)) {
                    _fun97440_ip = 282;
                    continue _fun97440
                }
            case 16:
                var0 = 92;
                if (!(var0 !== var2)) {
                    _fun97440_ip = 282;
                    continue _fun97440
                }
            case 26:
                var3 = var1.base;
                var0 = null;
                var0 = var0 === var3;
                if (var0) {
                    _fun97440_ip = 61;
                    continue _fun97440
                }
            case 41:
                var3 = var1.base;
                var4 = var3.scheme;
                var3 = 'file';
                var0 = var3 !== var4;
            case 61:
                if (var0) {
                    _fun97440_ip = 91;
                    continue _fun97440
                }
            case 64:
                var6 = _closure1_slot28;
                var5 = var1.input;
                var4 = var1.pointer;
                var3 = undefined;
                var0 = var6.bind(var3)(var5, var4);
            case 91:
                if (var0) {
                    _fun97440_ip = 255;
                    continue _fun97440
                }
            case 97:
                var0 = var1.base;
                var0 = var0.path;
                var5 = 0;
                var4 = var0[var5];
                var3 = var4.length;
                var0 = 2;
                var3 = var0 === var3;
                if (!var3) {
                    _fun97440_ip = 177;
                    continue _fun97440
                }
            case 130:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 1;
                var6 = var6[var0];
                var0 = undefined;
                var7 = var7.bind(var0)(var6);
                var6 = var7.isASCIIAlpha;
                var0 = var4.codePointAt;
                var0 = var0.bind(var4)(var5);
                var3 = var6.bind(var7)(var0);
            case 177:
                if (!var3) {
                    _fun97440_ip = 195;
                    continue _fun97440
                }
            case 180:
                var0 = 1;
                var4 = var4[var0];
                var0 = ':';
                var3 = var0 === var4;
            case 195:
                var0 = var1.url;
                if (var3) {
                    _fun97440_ip = 223;
                    continue _fun97440
                }
            case 203:
                var3 = var1.base;
                var3 = var3.host;
                var0.host = var3;
                _fun97440_ip = 255;
                continue _fun97440;
            case 223:
                var4 = var0.path;
                var3 = var4.push;
                var0 = var1.base;
                var0 = var0.path;
                var0 = var0[var5];
                var0 = var3.bind(var4)(var0);
            case 255:
                var0 = 'path';
                var1.state = var0;
                var0 = var1.pointer;
                var0 = var0 - 1;
                var1.pointer = var0;
                _fun97440_ip = 309;
                continue _fun97440;
            case 282:
                var0 = 92;
                if (!(var0 === var2)) {
                    _fun97440_ip = 297;
                    continue _fun97440
                }
            case 289:
                var0 = true;
                var1.parseError = var0;
            case 297:
                var0 = 'file host';
                var1.state = var0;
            case 309:
                var0 = true;
                return var0;
        }
    };
    var6['parse file slash'] = var5;
    var6 = var3.prototype;
    var5 = function(arg0, arg1) { // Original name: parseFileHost, environment: var1
        _fun97441: for (var _fun97441_ip = 0;;) switch (_fun97441_ip) {
            case 0:
                var2 = arg0;
                var1 = this;
                var0 = global;
                var0 = var0.isNaN;
                var6 = undefined;
                var0 = var0.bind(var6)(var2);
                if (var0) {
                    _fun97441_ip = 76;
                    continue _fun97441
                }
            case 24:
                var0 = 47;
                if (!(var0 !== var2)) {
                    _fun97441_ip = 76;
                    continue _fun97441
                }
            case 31:
                var0 = 92;
                if (!(var0 !== var2)) {
                    _fun97441_ip = 76;
                    continue _fun97441
                }
            case 38:
                var0 = 63;
                if (!(var0 !== var2)) {
                    _fun97441_ip = 76;
                    continue _fun97441
                }
            case 45:
                var0 = 35;
                if (!(var0 !== var2)) {
                    _fun97441_ip = 76;
                    continue _fun97441
                }
            case 52:
                var2 = var1.buffer;
                var0 = arg1;
                var0 = var2 + var0;
                var1.buffer = var0;
                _fun97441_ip = 294;
                continue _fun97441;
            case 76:
                var0 = var1.pointer;
                var0 = var0 - 1;
                var1.pointer = var0;
                var0 = var1.stateOverride;
                if (var0) {
                    _fun97441_ip = 144;
                    continue _fun97441
                }
            case 100:
                var2 = _closure1_slot12;
                var0 = var1.buffer;
                var0 = var2.bind(var6)(var0);
                if (!var0) {
                    _fun97441_ip = 144;
                    continue _fun97441
                }
            case 121:
                var0 = true;
                var1.parseError = var0;
                var0 = 'path';
                var1.state = var0;
                _fun97441_ip = 294;
                continue _fun97441;
            case 144:
                var0 = var1.buffer;
                var2 = '';
                if (!(var2 !== var0)) {
                    _fun97441_ip = 262;
                    continue _fun97441
                }
            case 158:
                var5 = _closure1_slot23;
                var4 = var1.buffer;
                var7 = _closure1_slot15;
                var3 = var1.url;
                var3 = var7.bind(var6)(var3);
                var4 = var5.bind(var6)(var4, var3);
                var3 = _closure1_slot4;
                if (!(var4 !== var3)) {
                    _fun97441_ip = 256;
                    continue _fun97441
                }
            case 199:
                var3 = 'localhost';
                if (!(var3 === var4)) {
                    _fun97441_ip = 212;
                    continue _fun97441
                }
            case 209:
                var4 = var2;
            case 212:
                var3 = var1.url;
                var3.host = var4;
                var3 = var1.stateOverride;
                if (var3) {
                    _fun97441_ip = 252;
                    continue _fun97441
                }
            case 232:
                var1.buffer = var2;
                var3 = 'path start';
                var1.state = var3;
                _fun97441_ip = 294;
                continue _fun97441;
            case 252:
                var3 = false;
                return var3;
            case 256:
                var0 = _closure1_slot4;
                return var0;
            case 262:
                var0 = var1.url;
                var0.host = var2;
                var0 = var1.stateOverride;
                if (var0) {
                    _fun97441_ip = 298;
                    continue _fun97441
                }
            case 282:
                var0 = 'path start';
                var1.state = var0;
            case 294:
                var0 = true;
                return var0;
            case 298:
                var0 = false;
                return var0;
        }
    };
    var6['parse file host'] = var5;
    var6 = var3.prototype;
    var5 = function(arg0) { // Original name: parsePathStart, environment: var1
        _fun97442: for (var _fun97442_ip = 0;;) switch (_fun97442_ip) {
            case 0:
                var3 = arg0;
                var1 = this;
                var4 = _closure1_slot14;
                var2 = var1.url;
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                if (var2) {
                    _fun97442_ip = 158;
                    continue _fun97442
                }
            case 31:
                var2 = var1.stateOverride;
                if (var2) {
                    _fun97442_ip = 77;
                    continue _fun97442
                }
            case 40:
                var2 = 63;
                if (!(var2 === var3)) {
                    _fun97442_ip = 77;
                    continue _fun97442
                }
            case 47:
                var4 = var1.url;
                var2 = '';
                var4.query = var2;
                var2 = 'query';
                var1.state = var2;
                _fun97442_ip = 215;
                continue _fun97442;
            case 77:
                var2 = var1.stateOverride;
                if (var2) {
                    _fun97442_ip = 120;
                    continue _fun97442
                }
            case 86:
                var2 = 35;
                if (!(var2 === var3)) {
                    _fun97442_ip = 120;
                    continue _fun97442
                }
            case 93:
                var4 = var1.url;
                var2 = '';
                var4.fragment = var2;
                var2 = 'fragment';
                var1.state = var2;
                _fun97442_ip = 215;
                continue _fun97442;
            case 120:
                if (!(var0 !== var3)) {
                    _fun97442_ip = 215;
                    continue _fun97442
                }
            case 124:
                var0 = 'path';
                var1.state = var0;
                var0 = 47;
                if (!(var0 !== var3)) {
                    _fun97442_ip = 215;
                    continue _fun97442
                }
            case 141:
                var0 = var1.pointer;
                var0 = var0 - 1;
                var1.pointer = var0;
                _fun97442_ip = 215;
                continue _fun97442;
            case 158:
                var2 = 92;
                if (!(var2 === var3)) {
                    _fun97442_ip = 173;
                    continue _fun97442
                }
            case 165:
                var0 = true;
                var1.parseError = var0;
            case 173:
                var0 = 'path';
                var1.state = var0;
                var0 = 47;
                var0 = var0 !== var3;
                if (!var0) {
                    _fun97442_ip = 197;
                    continue _fun97442
                }
            case 193:
                var0 = var2 !== var3;
            case 197:
                if (!var0) {
                    _fun97442_ip = 215;
                    continue _fun97442
                }
            case 200:
                var0 = var1.pointer;
                var0 = var0 - 1;
                var1.pointer = var0;
            case 215:
                var0 = true;
                return var0;
        }
    };
    var6['parse path start'] = var5;
    var6 = var3.prototype;
    var5 = function(arg0) { // Original name: parsePath, environment: var1
        _fun97443: for (var _fun97443_ip = 0;;) switch (_fun97443_ip) {
            case 0:
                var3 = arg0;
                var1 = this;
                var0 = global;
                var2 = var0.isNaN;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                if (var2) {
                    _fun97443_ip = 260;
                    continue _fun97443
                }
            case 27:
                var2 = 47;
                if (!(var2 !== var3)) {
                    _fun97443_ip = 260;
                    continue _fun97443
                }
            case 37:
                var5 = _closure1_slot14;
                var4 = var1.url;
                var4 = var5.bind(var0)(var4);
                if (!var4) {
                    _fun97443_ip = 67;
                    continue _fun97443
                }
            case 57:
                var4 = 92;
                if (!(var4 !== var3)) {
                    _fun97443_ip = 260;
                    continue _fun97443
                }
            case 67:
                var4 = var1.stateOverride;
                if (var4) {
                    _fun97443_ip = 96;
                    continue _fun97443
                }
            case 76:
                var4 = 63;
                if (!(var4 !== var3)) {
                    _fun97443_ip = 260;
                    continue _fun97443
                }
            case 86:
                var4 = 35;
                if (!(var4 !== var3)) {
                    _fun97443_ip = 260;
                    continue _fun97443
                }
            case 96:
                var4 = 37;
                var4 = var4 !== var3;
                if (var4) {
                    _fun97443_ip = 214;
                    continue _fun97443
                }
            case 106:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var8 = 1;
                var5 = var5[var8];
                var7 = var6.bind(var0)(var5);
                var6 = var7.isASCIIHex;
                var9 = var1.input;
                var5 = var1.pointer;
                var5 = var5 + var8;
                var5 = var9[var5];
                var5 = var6.bind(var7)(var5);
                if (!var5) {
                    _fun97443_ip = 211;
                    continue _fun97443
                }
            case 160:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var8 = var7.bind(var0)(var6);
                var7 = var8.isASCIIHex;
                var9 = var1.input;
                var10 = var1.pointer;
                var6 = 2;
                var6 = var10 + var6;
                var6 = var9[var6];
                var5 = var7.bind(var8)(var6);
            case 211:
                var4 = var5;
            case 214:
                if (var4) {
                    _fun97443_ip = 225;
                    continue _fun97443
                }
            case 217:
                var4 = true;
                var1.parseError = var4;
            case 225:
                var4 = var1.buffer;
                var5 = _closure1_slot21;
                var2 = _closure1_slot20;
                var2 = var5.bind(var0)(var3, var2);
                var2 = var4 + var2;
                var1.buffer = var2;
                _fun97443_ip = 947;
                continue _fun97443;
            case 260:
                var5 = _closure1_slot14;
                var2 = var1.url;
                var2 = var5.bind(var0)(var2);
                if (!var2) {
                    _fun97443_ip = 287;
                    continue _fun97443
                }
            case 280:
                var5 = 92;
                var2 = var5 === var3;
            case 287:
                if (!var2) {
                    _fun97443_ip = 298;
                    continue _fun97443
                }
            case 290:
                var2 = true;
                var1.parseError = var2;
            case 298:
                var5 = var1.buffer;
                var2 = var5.toLowerCase;
                var6 = var2.bind(var5)();
                var2 = '..';
                var2 = var2 === var6;
                if (var2) {
                    _fun97443_ip = 337;
                    continue _fun97443
                }
            case 327:
                var5 = '%2e.';
                var2 = var5 === var6;
            case 337:
                if (var2) {
                    _fun97443_ip = 350;
                    continue _fun97443
                }
            case 340:
                var5 = '.%2e';
                var2 = var5 === var6;
            case 350:
                if (var2) {
                    _fun97443_ip = 363;
                    continue _fun97443
                }
            case 353:
                var5 = '%2e%2e';
                var2 = var5 === var6;
            case 363:
                if (var2) {
                    _fun97443_ip = 650;
                    continue _fun97443
                }
            case 369:
                var5 = _closure1_slot11;
                var2 = var1.buffer;
                var2 = var5.bind(var0)(var2);
                if (!var2) {
                    _fun97443_ip = 448;
                    continue _fun97443
                }
            case 387:
                var2 = 47;
                if (!(var2 !== var3)) {
                    _fun97443_ip = 448;
                    continue _fun97443
                }
            case 394:
                var5 = _closure1_slot14;
                var2 = var1.url;
                var2 = var5.bind(var0)(var2);
                if (!var2) {
                    _fun97443_ip = 418;
                    continue _fun97443
                }
            case 411:
                var2 = 92;
                if (!(var2 !== var3)) {
                    _fun97443_ip = 448;
                    continue _fun97443
                }
            case 418:
                var2 = var1.url;
                var6 = var2.path;
                var5 = var6.push;
                var2 = '';
                var2 = var5.bind(var6)(var2);
                _fun97443_ip = 729;
                continue _fun97443;
            case 448:
                var5 = _closure1_slot11;
                var2 = var1.buffer;
                var2 = var5.bind(var0)(var2);
                if (var2) {
                    _fun97443_ip = 729;
                    continue _fun97443
                }
            case 469:
                var2 = var1.url;
                var5 = var2.scheme;
                var2 = 'file';
                var2 = var2 === var5;
                if (!var2) {
                    _fun97443_ip = 513;
                    continue _fun97443
                }
            case 491:
                var5 = var1.url;
                var5 = var5.path;
                var6 = var5.length;
                var5 = 0;
                var2 = var5 === var6;
            case 513:
                if (!var2) {
                    _fun97443_ip = 531;
                    continue _fun97443
                }
            case 516:
                var6 = _closure1_slot12;
                var5 = var1.buffer;
                var2 = var6.bind(var0)(var5);
            case 531:
                if (!var2) {
                    _fun97443_ip = 621;
                    continue _fun97443
                }
            case 534:
                var2 = var1.url;
                var2 = var2.host;
                var5 = '';
                var2 = var5 !== var2;
                if (!var2) {
                    _fun97443_ip = 573;
                    continue _fun97443
                }
            case 556:
                var6 = var1.url;
                var7 = var6.host;
                var6 = null;
                var2 = var6 !== var7;
            case 573:
                if (!var2) {
                    _fun97443_ip = 595;
                    continue _fun97443
                }
            case 576:
                var2 = true;
                var1.parseError = var2;
                var2 = var1.url;
                var2.host = var5;
            case 595:
                var5 = var1.buffer;
                var2 = 0;
                var5 = var5[var2];
                var2 = ':';
                var2 = var5 + var2;
                var1.buffer = var2;
            case 621:
                var2 = var1.url;
                var6 = var2.path;
                var5 = var6.push;
                var2 = var1.buffer;
                var2 = var5.bind(var6)(var2);
                _fun97443_ip = 729;
                continue _fun97443;
            case 650:
                var5 = _closure1_slot25;
                var2 = var1.url;
                var2 = var5.bind(var0)(var2);
                var2 = 47;
                var2 = var2 === var3;
                if (var2) {
                    _fun97443_ip = 701;
                    continue _fun97443
                }
            case 674:
                var5 = _closure1_slot14;
                var4 = var1.url;
                var4 = var5.bind(var0)(var4);
                if (!var4) {
                    _fun97443_ip = 698;
                    continue _fun97443
                }
            case 691:
                var5 = 92;
                var4 = var5 === var3;
            case 698:
                var2 = var4;
            case 701:
                if (var2) {
                    _fun97443_ip = 729;
                    continue _fun97443
                }
            case 704:
                var2 = var1.url;
                var5 = var2.path;
                var4 = var5.push;
                var2 = '';
                var2 = var4.bind(var5)(var2);
            case 729:
                var2 = '';
                var1.buffer = var2;
                var4 = var1.url;
                var5 = var4.scheme;
                var4 = 'file';
                if (!(var4 === var5)) {
                    _fun97443_ip = 891;
                    continue _fun97443
                }
            case 761:
                if (!(var0 !== var3)) {
                    _fun97443_ip = 779;
                    continue _fun97443
                }
            case 765:
                var0 = 63;
                if (!(var0 !== var3)) {
                    _fun97443_ip = 779;
                    continue _fun97443
                }
            case 772:
                var0 = 35;
                if (!(var0 === var3)) {
                    _fun97443_ip = 891;
                    continue _fun97443
                }
            case 779:
                var0 = var1.url;
                var0 = var0.path;
                var0 = var0.length;
                var6 = 1;
                if (!(var0 > var6)) {
                    _fun97443_ip = 891;
                    continue _fun97443
                }
            case 802:
                var0 = var1.url;
                var0 = var0.path;
                var5 = 0;
                var0 = var0[var5];
                var4 = true;
                if (!(var2 === var0)) {
                    _fun97443_ip = 891;
                    continue _fun97443
                }
            case 825:
                var1.parseError = var4;
                var0 = var1.url;
                var7 = var0.path;
                var0 = var7.shift;
                var0 = var0.bind(var7)();
                var0 = var1.url;
                var0 = var0.path;
                var0 = var0.length;
                if (!(var0 > var6)) {
                    _fun97443_ip = 891;
                    continue _fun97443
                }
            case 872:
                var0 = var1.url;
                var0 = var0.path;
                var0 = var0[var5];
                if (var2 === var0) {
                    _fun97443_ip = 825;
                    continue _fun97443
                }
            case 891:
                var0 = 63;
                if (!(var0 === var3)) {
                    _fun97443_ip = 919;
                    continue _fun97443
                }
            case 898:
                var0 = var1.url;
                var0.query = var2;
                var0 = 'query';
                var1.state = var0;
            case 919:
                var0 = 35;
                if (!(var0 === var3)) {
                    _fun97443_ip = 947;
                    continue _fun97443
                }
            case 926:
                var0 = var1.url;
                var0.fragment = var2;
                var0 = 'fragment';
                var1.state = var0;
            case 947:
                var0 = true;
                return var0;
        }
    };
    var6['parse path'] = var5;
    var6 = var3.prototype;
    var5 = function(arg0) { // Original name: parseCannotBeABaseURLPath, environment: var1
        _fun97444: for (var _fun97444_ip = 0;;) switch (_fun97444_ip) {
            case 0:
                var7 = arg0;
                var1 = this;
                var0 = 63;
                if (!(var0 !== var7)) {
                    _fun97444_ip = 279;
                    continue _fun97444
                }
            case 16:
                var0 = 35;
                if (!(var0 !== var7)) {
                    _fun97444_ip = 252;
                    continue _fun97444
                }
            case 26:
                var0 = global;
                var2 = var0.isNaN;
                var6 = undefined;
                var2 = var2.bind(var6)(var7);
                if (var2) {
                    _fun97444_ip = 51;
                    continue _fun97444
                }
            case 44:
                var3 = 37;
                var2 = var3 === var7;
            case 51:
                if (var2) {
                    _fun97444_ip = 62;
                    continue _fun97444
                }
            case 54:
                var2 = true;
                var1.parseError = var2;
            case 62:
                var2 = 37;
                var2 = var2 !== var7;
                if (var2) {
                    _fun97444_ip = 183;
                    continue _fun97444
                }
            case 72:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var8 = 1;
                var3 = var3[var8];
                var9 = var5.bind(var6)(var3);
                var5 = var9.isASCIIHex;
                var10 = var1.input;
                var3 = var1.pointer;
                var3 = var3 + var8;
                var3 = var10[var3];
                var3 = var5.bind(var9)(var3);
                if (!var3) {
                    _fun97444_ip = 180;
                    continue _fun97444
                }
            case 129:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var8];
                var8 = var5.bind(var6)(var4);
                var5 = var8.isASCIIHex;
                var9 = var1.input;
                var10 = var1.pointer;
                var4 = 2;
                var4 = var10 + var4;
                var4 = var9[var4];
                var3 = var5.bind(var8)(var4);
            case 180:
                var2 = var3;
            case 183:
                if (var2) {
                    _fun97444_ip = 194;
                    continue _fun97444
                }
            case 186:
                var2 = true;
                var1.parseError = var2;
            case 194:
                var0 = var0.isNaN;
                var0 = var0.bind(var6)(var7);
                if (var0) {
                    _fun97444_ip = 304;
                    continue _fun97444
                }
            case 208:
                var0 = var1.url;
                var3 = var0.path;
                var2 = 0;
                var4 = var3[var2];
                var5 = _closure1_slot21;
                var0 = _closure1_slot17;
                var0 = var5.bind(var6)(var7, var0);
                var0 = var4 + var0;
                var3[var2] = var0;
                _fun97444_ip = 304;
                continue _fun97444;
            case 252:
                var2 = var1.url;
                var0 = '';
                var2.fragment = var0;
                var0 = 'fragment';
                var1.state = var0;
                _fun97444_ip = 304;
                continue _fun97444;
            case 279:
                var2 = var1.url;
                var0 = '';
                var2.query = var0;
                var0 = 'query';
                var1.state = var0;
            case 304:
                var0 = true;
                return var0;
        }
    };
    var6['parse cannot-be-a-base-URL path'] = var5;
    var6 = var3.prototype;
    var5 = function(arg0, arg1) { // Original name: parseQuery, environment: var1
        _fun97445: for (var _fun97445_ip = 0;;) switch (_fun97445_ip) {
            case 0:
                var3 = arg0;
                var1 = this;
                var15 = global;
                var0 = var15.isNaN;
                var14 = undefined;
                var0 = var0.bind(var14)(var3);
                if (var0) {
                    _fun97445_ip = 202;
                    continue _fun97445
                }
            case 27:
                var0 = var1.stateOverride;
                if (var0) {
                    _fun97445_ip = 46;
                    continue _fun97445
                }
            case 36:
                var0 = 35;
                if (!(var0 !== var3)) {
                    _fun97445_ip = 202;
                    continue _fun97445
                }
            case 46:
                var0 = 37;
                var0 = var0 !== var3;
                if (var0) {
                    _fun97445_ip = 167;
                    continue _fun97445
                }
            case 56:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 1;
                var2 = var2[var6];
                var7 = var5.bind(var14)(var2);
                var5 = var7.isASCIIHex;
                var8 = var1.input;
                var2 = var1.pointer;
                var2 = var2 + var6;
                var2 = var8[var2];
                var2 = var5.bind(var7)(var2);
                if (!var2) {
                    _fun97445_ip = 164;
                    continue _fun97445
                }
            case 113:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var6 = var5.bind(var14)(var4);
                var5 = var6.isASCIIHex;
                var7 = var1.input;
                var8 = var1.pointer;
                var4 = 2;
                var4 = var8 + var4;
                var4 = var7[var4];
                var2 = var5.bind(var6)(var4);
            case 164:
                var0 = var2;
            case 167:
                if (var0) {
                    _fun97445_ip = 178;
                    continue _fun97445
                }
            case 170:
                var0 = true;
                var1.parseError = var0;
            case 178:
                var2 = var1.buffer;
                var0 = arg1;
                var0 = var2 + var0;
                var1.buffer = var0;
                _fun97445_ip = 583;
                continue _fun97445;
            case 202:
                var2 = _closure1_slot14;
                var0 = var1.url;
                var0 = var2.bind(var14)(var0);
                if (!var0) {
                    _fun97445_ip = 241;
                    continue _fun97445
                }
            case 222:
                var2 = var1.url;
                var4 = var2.scheme;
                var2 = 'ws';
                var0 = var2 !== var4;
            case 241:
                if (!var0) {
                    _fun97445_ip = 265;
                    continue _fun97445
                }
            case 244:
                var2 = var1.url;
                var4 = var2.scheme;
                var2 = 'wss';
                var0 = var2 !== var4;
            case 265:
                if (var0) {
                    _fun97445_ip = 280;
                    continue _fun97445
                }
            case 268:
                var0 = 'utf-8';
                var1.encodingOverride = var0;
            case 280:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 2;
                var0 = var4[var0];
                var0 = var2.bind(var14)(var0);
                var4 = var0.Buffer;
                var2 = var4.from;
                var0 = var1.buffer;
                var12 = var2.bind(var4)(var0);
                var0 = var12.length;
                var11 = 0;
                var2 = var11 < var0;
                var10 = 3;
                var9 = 39;
                var8 = 62;
                var7 = 60;
                var0 = 35;
                var6 = 34;
                var5 = 126;
                var4 = 33;
                if (!var2) {
                    _fun97445_ip = 548;
                    continue _fun97445
                }
            case 363:
                var2 = var12[var11];
                if (!(!(var2 < var4))) {
                    _fun97445_ip = 480;
                    continue _fun97445
                }
            case 371:
                var2 = var12[var11];
                if (!(!(var2 > var5))) {
                    _fun97445_ip = 480;
                    continue _fun97445
                }
            case 379:
                var2 = var12[var11];
                if (!(var6 !== var2)) {
                    _fun97445_ip = 480;
                    continue _fun97445
                }
            case 387:
                var2 = var12[var11];
                if (!(var0 !== var2)) {
                    _fun97445_ip = 480;
                    continue _fun97445
                }
            case 395:
                var2 = var12[var11];
                if (!(var7 !== var2)) {
                    _fun97445_ip = 480;
                    continue _fun97445
                }
            case 403:
                var2 = var12[var11];
                if (!(var8 !== var2)) {
                    _fun97445_ip = 480;
                    continue _fun97445
                }
            case 411:
                var2 = var12[var11];
                if (!(var9 === var2)) {
                    _fun97445_ip = 436;
                    continue _fun97445
                }
            case 419:
                var16 = _closure1_slot14;
                var2 = var1.url;
                var2 = var16.bind(var14)(var2);
                if (var2) {
                    _fun97445_ip = 480;
                    continue _fun97445
                }
            case 436:
                var16 = var1.url;
                var17 = var16.query;
                var19 = var15.String;
                var18 = var19.fromCodePoint;
                var2 = var12[var11];
                var2 = var18.bind(var19)(var2);
                var2 = var17 + var2;
                var16.query = var2;
                _fun97445_ip = 533;
                continue _fun97445;
            case 480:
                var16 = var1.url;
                var17 = var16.query;
                var18 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var19 = var18.bind(var14)(var2);
                var18 = var19.percentEncode;
                var2 = var12[var11];
                var2 = var18.bind(var19)(var2);
                var2 = var17 + var2;
                var16.query = var2;
            case 533:
                var11 = var11 + 1;
                var2 = var12.length;
                if (var11 < var2) {
                    _fun97445_ip = 363;
                    continue _fun97445
                }
            case 548:
                var2 = '';
                var1.buffer = var2;
                if (!(var0 === var3)) {
                    _fun97445_ip = 583;
                    continue _fun97445
                }
            case 562:
                var0 = var1.url;
                var0.fragment = var2;
                var0 = 'fragment';
                var1.state = var0;
            case 583:
                var0 = true;
                return var0;
        }
    };
    var6['parse query'] = var5;
    var5 = var3.prototype;
    var3 = function(arg0) { // Original name: parseFragment, environment: var1
        _fun97446: for (var _fun97446_ip = 0;;) switch (_fun97446_ip) {
            case 0:
                var6 = arg0;
                var1 = this;
                var0 = global;
                var0 = var0.isNaN;
                var5 = undefined;
                var0 = var0.bind(var5)(var6);
                if (var0) {
                    _fun97446_ip = 216;
                    continue _fun97446
                }
            case 27:
                var0 = 0;
                if (!(var0 !== var6)) {
                    _fun97446_ip = 208;
                    continue _fun97446
                }
            case 36:
                var0 = 37;
                var0 = var0 !== var6;
                if (var0) {
                    _fun97446_ip = 157;
                    continue _fun97446
                }
            case 46:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 1;
                var2 = var2[var7];
                var8 = var4.bind(var5)(var2);
                var4 = var8.isASCIIHex;
                var9 = var1.input;
                var2 = var1.pointer;
                var2 = var2 + var7;
                var2 = var9[var2];
                var2 = var4.bind(var8)(var2);
                if (!var2) {
                    _fun97446_ip = 154;
                    continue _fun97446
                }
            case 103:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var7 = var4.bind(var5)(var3);
                var4 = var7.isASCIIHex;
                var8 = var1.input;
                var9 = var1.pointer;
                var3 = 2;
                var3 = var9 + var3;
                var3 = var8[var3];
                var2 = var4.bind(var7)(var3);
            case 154:
                var0 = var2;
            case 157:
                if (var0) {
                    _fun97446_ip = 168;
                    continue _fun97446
                }
            case 160:
                var0 = true;
                var1.parseError = var0;
            case 168:
                var2 = var1.url;
                var3 = var2.fragment;
                var4 = _closure1_slot21;
                var0 = _closure1_slot19;
                var0 = var4.bind(var5)(var6, var0);
                var0 = var3 + var0;
                var2.fragment = var0;
                _fun97446_ip = 216;
                continue _fun97446;
            case 208:
                var0 = true;
                var1.parseError = var0;
            case 216:
                var0 = true;
                return var0;
        }
    };
    var5['parse fragment'] = var3;
    var5 = var2.exports;
    var3 = function(arg0, arg1) { // Original name: serializeURL, environment: var1
        _fun97447: for (var _fun97447_ip = 0;;) switch (_fun97447_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var7 = undefined;
                var0 = undefined;
                var3 = var1.scheme;
                var6 = ':';
                var0 = var3 + var6;
                var3 = var1.host;
                var4 = null;
                if (!(var4 === var3)) {
                    _fun97447_ip = 87;
                    continue _fun97447
                }
            case 36:
                var3 = var1.host;
                var3 = var4 === var3;
                if (!var3) {
                    _fun97447_ip = 63;
                    continue _fun97447
                }
            case 49:
                var8 = var1.scheme;
                var5 = 'file';
                var3 = var5 === var8;
            case 63:
                if (!var3) {
                    _fun97447_ip = 231;
                    continue _fun97447
                }
            case 69:
                var5 = var0;
                var3 = '//';
                var0 = var5 + var3;
                _fun97447_ip = 231;
                continue _fun97447;
            case 87:
                var5 = var0;
                var3 = '//';
                var0 = var5 + var3;
                var3 = var1.username;
                var5 = '';
                var3 = var5 === var3;
                if (!var3) {
                    _fun97447_ip = 126;
                    continue _fun97447
                }
            case 116:
                var8 = var1.password;
                var3 = var5 === var8;
            case 126:
                if (var3) {
                    _fun97447_ip = 179;
                    continue _fun97447
                }
            case 129:
                var8 = var0;
                var3 = var1.username;
                var0 = var8 + var3;
                var3 = var1.password;
                if (!(var5 !== var3)) {
                    _fun97447_ip = 168;
                    continue _fun97447
                }
            case 151:
                var5 = var0;
                var3 = var1.password;
                var3 = var6 + var3;
                var0 = var5 + var3;
            case 168:
                var5 = var0;
                var3 = '@';
                var0 = var5 + var3;
            case 179:
                var5 = var0;
                var8 = _closure1_slot24;
                var3 = var1.host;
                var3 = var8.bind(var7)(var3);
                var0 = var5 + var3;
                var3 = var1.port;
                if (!(var4 !== var3)) {
                    _fun97447_ip = 231;
                    continue _fun97447
                }
            case 214:
                var5 = var0;
                var3 = var1.port;
                var3 = var6 + var3;
                var0 = var5 + var3;
            case 231:
                var3 = var1.cannotBeABaseURL;
                if (var3) {
                    _fun97447_ip = 287;
                    continue _fun97447
                }
            case 240:
                var3 = var1.path;
                var6 = var3;
                var5 = var6[Symbol.iterator];
                var6 = var5().next;
                var3 = '/';
            case 256:
                var8 = var6().value;
                var9 = var5;
                if (!(var9 !== var7)) {
                    _fun97447_ip = 306;
                    continue _fun97447
                }
            case 267: // try_start_0
                var9 = var0;
                var8 = var3 + var8;
                var0 = var9 + var8;
            case 278: // try_end0
                _fun97447_ip = 256;
                continue _fun97447;
            case 280: // catch_target0
                CatchBlockStart(arg_register = 3);
                var5.return();
                throw var3;
            case 287:
                var5 = var0;
                var6 = var1.path;
                var3 = 0;
                var3 = var6[var3];
                var0 = var5 + var3;
            case 306:
                var3 = var1.query;
                if (!(var4 !== var3)) {
                    _fun97447_ip = 337;
                    continue _fun97447
                }
            case 316:
                var5 = var0;
                var6 = var1.query;
                var3 = '?';
                var3 = var3 + var6;
                var0 = var5 + var3;
            case 337:
                if (var2) {
                    _fun97447_ip = 350;
                    continue _fun97447
                }
            case 340:
                var3 = var1.fragment;
                var2 = var4 === var3;
            case 350:
                if (var2) {
                    _fun97447_ip = 374;
                    continue _fun97447
                }
            case 353:
                var2 = var0;
                var3 = var1.fragment;
                var1 = '#';
                var1 = var1 + var3;
                var0 = var2 + var1;
            case 374:
                return var0;
        }
    };
    var5.serializeURL = var3;
    var5 = var2.exports;
    var3 = function(arg0) { // Environment: var1
        _fun97448: for (var _fun97448_ip = 0;;) switch (_fun97448_ip) {
            case 0:
                var1 = arg0;
                var0 = var1;
                var2 = var1.scheme;
                var1 = 'blob';
                if (!(var1 !== var2)) {
                    _fun97448_ip = 184;
                    continue _fun97448
                }
            case 23:
                var1 = 'ftp';
                if (!(var1 !== var2)) {
                    _fun97448_ip = 71;
                    continue _fun97448
                }
            case 31:
                var1 = 'http';
                if (!(var1 !== var2)) {
                    _fun97448_ip = 71;
                    continue _fun97448
                }
            case 39:
                var1 = 'https';
                if (!(var1 !== var2)) {
                    _fun97448_ip = 71;
                    continue _fun97448
                }
            case 47:
                var1 = 'ws';
                if (!(var1 !== var2)) {
                    _fun97448_ip = 71;
                    continue _fun97448
                }
            case 55:
                var1 = 'wss';
                if (!(var1 !== var2)) {
                    _fun97448_ip = 71;
                    continue _fun97448
                }
            case 65:
                var1 = 'null';
                return var1;
            case 71:
                var2 = {};
                var1 = var0;
                var3 = var1.scheme;
                var2.scheme = var3;
                var3 = var1.host;
                var2.host = var3;
                var1 = var1.port;
                var2.port = var1;
                var3 = var2.scheme;
                var1 = '://';
                var3 = var3 + var1;
                var5 = _closure1_slot24;
                var4 = var2.host;
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var3 = var3 + var1;
                var5 = var2.port;
                var4 = null;
                var1 = var3;
                if (!(var4 !== var5)) {
                    _fun97448_ip = 182;
                    continue _fun97448
                }
            case 164:
                var4 = var2.port;
                var2 = ':';
                var2 = var2 + var4;
                var1 = var3 + var2;
            case 182:
                return var1;
            case 184: // try_start_0
                var3 = _closure1_slot1;
                var2 = var3.exports;
                var1 = var2.serializeURLOrigin;
                var4 = var3.exports;
                var3 = var4.parseURL;
                var5 = var0.path;
                var0 = 0;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var1.bind(var2)(var0);
            case 235: // try_end0
                return var0;
            case 237: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = 'null';
                return var0;
        }
    };
    var5.serializeURLOrigin = var3;
    var5 = var2.exports;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun97449: for (var _fun97449_ip = 0;;) switch (_fun97449_ip) {
            case 0:
                var0 = arg1;
                var1 = undefined;
                if (!(var1 === var0)) {
                    _fun97449_ip = 11;
                    continue _fun97449
                }
            case 9:
                var0 = {};
            case 11:
                var6 = _closure1_slot27;
                var10 = var0.baseURL;
                var9 = var0.encodingOverride;
                var8 = var0.url;
                var7 = var0.stateOverride;
                var0 = var6.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = arg0;
                var12 = var1;
                var0 = new var12[var6](var11, var10, var9, var8, var7, var6);
                var1 = var0 instanceof Object ? var0 : var1;
                var2 = var1.failure;
                var0 = null;
                if (var2) {
                    _fun97449_ip = 80;
                    continue _fun97449
                }
            case 75:
                var0 = var1.url;
            case 80:
                return var0;
        }
    };
    var5.basicURLParse = var3;
    var5 = var2.exports;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun97450: for (var _fun97450_ip = 0;;) switch (_fun97450_ip) {
            case 0:
                var5 = arg0;
                var0 = '';
                var5.username = var0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = 0;
                var1 = var0[var3];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var6 = var1.ucs2;
                var2 = var6.decode;
                var1 = arg1;
                var2 = var2.bind(var6)(var1);
                var1 = var2.length;
                var1 = var3 < var1;
                if (!var1) {
                    _fun97450_ip = 114;
                    continue _fun97450
                }
            case 69:
                var6 = var5.username;
                var8 = _closure1_slot21;
                var7 = var2[var3];
                var1 = _closure1_slot18;
                var1 = var8.bind(var0)(var7, var1);
                var1 = var6 + var1;
                var5.username = var1;
                var3 = var3 + 1;
                var1 = var2.length;
                if (var3 < var1) {
                    _fun97450_ip = 69;
                    continue _fun97450
                }
            case 114:
                return var0;
        }
    };
    var5.setTheUsername = var3;
    var5 = var2.exports;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun97451: for (var _fun97451_ip = 0;;) switch (_fun97451_ip) {
            case 0:
                var5 = arg0;
                var0 = '';
                var5.password = var0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = 0;
                var1 = var0[var3];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var6 = var1.ucs2;
                var2 = var6.decode;
                var1 = arg1;
                var2 = var2.bind(var6)(var1);
                var1 = var2.length;
                var1 = var3 < var1;
                if (!var1) {
                    _fun97451_ip = 115;
                    continue _fun97451
                }
            case 69:
                var6 = var5.password;
                var8 = _closure1_slot21;
                var7 = var2[var3];
                var1 = _closure1_slot18;
                var1 = var8.bind(var0)(var7, var1);
                var1 = var6 + var1;
                var5.password = var1;
                var3 = var3 + 1;
                var1 = var2.length;
                if (var3 < var1) {
                    _fun97451_ip = 69;
                    continue _fun97451
                }
            case 115:
                return var0;
        }
    };
    var5.setThePassword = var3;
    var3 = var2.exports;
    var3.serializeHost = var4;
    var4 = var2.exports;
    var3 = function(arg0) { // Original name: cannotHaveAUsernamePasswordPort, environment: var1
        _fun97452: for (var _fun97452_ip = 0;;) switch (_fun97452_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.host;
                var0 = null;
                var0 = var0 === var2;
                if (var0) {
                    _fun97452_ip = 32;
                    continue _fun97452
                }
            case 18:
                var3 = var1.host;
                var2 = '';
                var0 = var2 === var3;
            case 32:
                if (var0) {
                    _fun97452_ip = 41;
                    continue _fun97452
                }
            case 35:
                var0 = var1.cannotBeABaseURL;
            case 41:
                if (var0) {
                    _fun97452_ip = 58;
                    continue _fun97452
                }
            case 44:
                var2 = var1.scheme;
                var1 = 'file';
                var0 = var1 === var2;
            case 58:
                return var0;
        }
    };
    var4.cannotHaveAUsernamePasswordPort = var3;
    var4 = var2.exports;
    var3 = function(arg0) { // Environment: var1
        var0 = global;
        var2 = var0.String;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var4.serializeInteger = var3;
    var2 = var2.exports;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun97454: for (var _fun97454_ip = 0;;) switch (_fun97454_ip) {
            case 0:
                var0 = arg1;
                var1 = undefined;
                if (!(var1 === var0)) {
                    _fun97454_ip = 11;
                    continue _fun97454
                }
            case 9:
                var0 = {};
            case 11:
                var1 = _closure1_slot1;
                var3 = var1.exports;
                var2 = var3.basicURLParse;
                var1 = {};
                var4 = var0.baseURL;
                var1.baseURL = var4;
                var0 = var0.encodingOverride;
                var1.encodingOverride = var0;
                var0 = arg0;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.parseURL = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12712, 12713, 488, 12714]);