// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var2 = var0.Object;
    var2 = var2.prototype;
    var2 = var2.hasOwnProperty;
    var _closure1_slot2 = var2;
    var2 = {};
    var3 = function arg0() {
        var1 = arg0;
        var0 = '[]';
        var0 = var1 + var0;
        return var0;
    };
    var2.brackets = var3;
    var3 = 'comma';
    var2.comma = var3;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var0 = '[';
        var1 = var1 + var0;
        var0 = arg1;
        var1 = var1 + var0;
        var0 = ']';
        var0 = var1 + var0;
        return var0;
    };
    var2.indices = var3;
    var3 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var2.repeat = var3;
    var _closure1_slot3 = var2;
    var2 = var0.Array;
    var2 = var2.isArray;
    var _closure1_slot4 = var2;
    var2 = var0.Array;
    var2 = var2.prototype;
    var2 = var2.push;
    var _closure1_slot5 = var2;
    var2 = function arg0, arg1() {
        _fun6574: for (var _fun6574_ip = 0;;) switch (_fun6574_ip) {
            case 0:
                var5 = arg1;
                var4 = _closure1_slot5;
                var3 = var4.apply;
                var1 = _closure1_slot4;
                var0 = undefined;
                var1 = var1.bind(var0)(var5);
                var2 = var5;
                if (var1) {
                    _fun6574_ip = 43;
                    continue _fun6574
                }
            case 32:
                var1 = new Array(1);
                var1[0] = var5;
                var2 = var1;
            case 43:
                var1 = arg0;
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var _closure1_slot6 = var2;
    var0 = var0.Date;
    var0 = var0.prototype;
    var0 = var0.toISOString;
    var _closure1_slot7 = var0;
    var2 = {
        'addQueryPrefix': false,
        'allowDots': false,
        'allowEmptyArrays': false,
        'arrayFormat': 'indices',
        'charset': 'utf-8',
        'charsetSentinel': false,
        'commaRoundTrip': false,
        'delimiter': '&',
        'encode': true,
        'encodeDotInKeys': false,
        'encoder': null,
        'encodeValuesOnly': false
    };
    var3 = false;
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var4 = var4.encode;
    var2.encoder = var4;
    var2.filter = var0;
    var4 = 1;
    var5 = var7[var4];
    var5 = var6.bind(var0)(var5);
    var5 = var5.default;
    var2.format = var5;
    var5 = var7[var4];
    var5 = var6.bind(var0)(var5);
    var5 = var5.formatters;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.default;
    var4 = var5[var4];
    var2.formatter = var4;
    var2.indices = var3;
    var4 = function arg0() {
        var2 = _closure1_slot7;
        var1 = var2.call;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.serializeDate = var4;
    var2.skipNulls = var3;
    var2.strictNullHandling = var3;
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17() {
        _fun6576: for (var _fun6576_ip = 0;;) switch (_fun6576_ip) {
            case 0:
                var40 = arg0;
                var7 = arg1;
                var39 = arg2;
                var38 = arg3;
                var37 = arg4;
                var36 = arg5;
                var35 = arg6;
                var34 = arg7;
                var6 = arg8;
                var33 = arg9;
                var32 = arg10;
                var31 = arg11;
                var30 = arg12;
                var5 = arg13;
                var10 = arg14;
                var2 = arg15;
                var4 = arg16;
                var29 = arg17;
                var _closure2_slot0 = var30;
                var8 = var29.get;
                var3 = _closure1_slot9;
                var8 = var8.bind(var29)(var3);
                var28 = 0;
                var3 = undefined;
                var13 = 1;
                var9 = 0;
                var12 = false;
                var27 = 0;
                if (!(var3 !== var8)) {
                    _fun6576_ip = 177;
                    continue _fun6576
                }
            case 94:
                var14 = var8.get;
                var15 = var14.bind(var8)(var40);
                var14 = var9 + var13;
                var17 = var8;
                if (!(var3 !== var15)) {
                    _fun6576_ip = 124;
                    continue _fun6576
                }
            case 115:
                var12 = true;
                if (!(var15 !== var14)) {
                    _fun6576_ip = 1279;
                    continue _fun6576
                }
            case 124:
                var16 = var17.get;
                var15 = _closure1_slot9;
                var15 = var16.bind(var17)(var15);
                if (!(var3 === var15)) {
                    _fun6576_ip = 144;
                    continue _fun6576
                }
            case 142:
                var14 = 0;
            case 144:
                var16 = var17.get;
                var15 = _closure1_slot9;
                var15 = var16.bind(var17)(var15);
                var27 = var14;
                if (!(var3 !== var15)) {
                    _fun6576_ip = 177;
                    continue _fun6576
                }
            case 165:
                var8 = var15;
                var9 = var14;
                var27 = var9;
                if (!var12) {
                    _fun6576_ip = 94;
                    continue _fun6576
                }
            case 177:
                var26 = 'function';
                var8 = typeof var33;
                if (!(var26 !== var8)) {
                    _fun6576_ip = 272;
                    continue _fun6576
                }
            case 188:
                var8 = global;
                var8 = var8.Date;
                var8 = var40 instanceof var8;
                if (var8) {
                    _fun6576_ip = 265;
                    continue _fun6576
                }
            case 203:
                var8 = 'comma';
                var8 = var8 === var39;
                if (!var8) {
                    _fun6576_ip = 223;
                    continue _fun6576
                }
            case 214:
                var9 = _closure1_slot4;
                var8 = var9.bind(var3)(var40);
            case 223:
                var12 = var40;
                if (!var8) {
                    _fun6576_ip = 278;
                    continue _fun6576
                }
            case 229:
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var28];
                var9 = var9.bind(var3)(var8);
                var8 = var9.maybeMap;
                var0 = function(arg0) { // Environment: var0
                    _fun6577: for (var _fun6577_ip = 0;;) switch (_fun6577_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = global;
                            var0 = var0.Date;
                            var1 = var3 instanceof var0;
                            var0 = var3;
                            if (!var1) {
                                _fun6577_ip = 35;
                                continue _fun6577
                            }
                        case 21:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = var2.bind(var1)(var3);
                        case 35:
                            return var0;
                    }
                };
                var12 = var8.bind(var9)(var40, var0);
                _fun6576_ip = 278;
                continue _fun6576;
            case 265:
                var12 = var30.bind(var3)(var40);
                _fun6576_ip = 278;
                continue _fun6576;
            case 272:
                var12 = var33.bind(var3)(var7, var40);
            case 278:
                var25 = null;
                if (!(var25 === var12)) {
                    _fun6576_ip = 294;
                    continue _fun6576
                }
            case 284:
                var12 = '';
                if (var36) {
                    _fun6576_ip = 1236;
                    continue _fun6576
                }
            case 294:
                var9 = typeof var12;
                var0 = 'string';
                var0 = var0 === var9;
                if (var0) {
                    _fun6576_ip = 316;
                    continue _fun6576
                }
            case 308:
                var8 = 'number';
                var0 = var8 === var9;
            case 316:
                if (var0) {
                    _fun6576_ip = 327;
                    continue _fun6576
                }
            case 319:
                var8 = 'boolean';
                var0 = var8 === var9;
            case 327:
                if (var0) {
                    _fun6576_ip = 338;
                    continue _fun6576
                }
            case 330:
                var8 = 'symbol';
                var0 = var8 === var9;
            case 338:
                if (var0) {
                    _fun6576_ip = 349;
                    continue _fun6576
                }
            case 341:
                var8 = 'bigint';
                var0 = var8 === var9;
            case 349:
                if (var0) {
                    _fun6576_ip = 1089;
                    continue _fun6576
                }
            case 355:
                var8 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var28];
                var8 = var8.bind(var3)(var0);
                var0 = var8.isBuffer;
                var0 = var0.bind(var8)(var12);
                if (var0) {
                    _fun6576_ip = 1089;
                    continue _fun6576
                }
            case 389:
                var0 = new Array(0);
                if (!(var3 !== var12)) {
                    _fun6576_ip = 1087;
                    continue _fun6576
                }
            case 400:
                var8 = 'comma';
                var24 = var8 === var39;
                if (!var24) {
                    _fun6576_ip = 423;
                    continue _fun6576
                }
            case 411:
                var8 = _closure1_slot4;
                var8 = var8.bind(var3)(var12);
                if (var8) {
                    _fun6576_ip = 487;
                    continue _fun6576
                }
            case 423:
                var8 = _closure1_slot4;
                var8 = var8.bind(var3)(var33);
                var23 = var12;
                var22 = var33;
                if (var8) {
                    _fun6576_ip = 587;
                    continue _fun6576
                }
            case 444:
                var8 = global;
                var9 = var8.Object;
                var8 = var9.keys;
                var11 = var8.bind(var9)(var12);
                var8 = var11;
                if (!var32) {
                    _fun6576_ip = 479;
                    continue _fun6576
                }
            case 468:
                var9 = var11.sort;
                var8 = var9.bind(var11)(var32);
            case 479:
                var22 = var8;
                var23 = var12;
                _fun6576_ip = 587;
                continue _fun6576;
            case 487:
                var8 = var2;
                if (!var8) {
                    _fun6576_ip = 496;
                    continue _fun6576
                }
            case 493:
                var8 = var6;
            case 496:
                var9 = var12;
                if (!var8) {
                    _fun6576_ip = 531;
                    continue _fun6576
                }
            case 502:
                var11 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var28];
                var11 = var11.bind(var3)(var8);
                var8 = var11.maybeMap;
                var9 = var8.bind(var11)(var12, var6);
            case 531:
                var11 = {};
                var8 = var9.length;
                var14 = var8 > var28;
                var8 = undefined;
                if (!var14) {
                    _fun6576_ip = 569;
                    continue _fun6576
                }
            case 547:
                var15 = var9.join;
                var14 = ',';
                var14 = var15.bind(var9)(var14);
                if (var14) {
                    _fun6576_ip = 566;
                    continue _fun6576
                }
            case 564:
                var14 = null;
            case 566:
                var8 = var14;
            case 569:
                var11.value = var8;
                var8 = new Array(1);
                var8[0] = var11;
                var23 = var9;
                var22 = var8;
            case 587:
                var21 = global;
                var8 = var21.String;
                var15 = var8.bind(var3)(var7);
                if (var34) {
                    _fun6576_ip = 608;
                    continue _fun6576
                }
            case 603:
                var11 = var15;
                _fun6576_ip = 639;
                continue _fun6576;
            case 608:
                var14 = var15.replace;
                var9 = /\./g;
                var8 = '%2E';
                var11 = var14.bind(var15)(var9, var8);
            case 639:
                var9 = var11;
                if (!var38) {
                    _fun6576_ip = 682;
                    continue _fun6576
                }
            case 645:
                var8 = _closure1_slot4;
                var8 = var8.bind(var3)(var23);
                var9 = var11;
                if (!var8) {
                    _fun6576_ip = 682;
                    continue _fun6576
                }
            case 660:
                var8 = var23.length;
                var9 = var11;
                if (!(var13 === var8)) {
                    _fun6576_ip = 682;
                    continue _fun6576
                }
            case 672:
                var8 = '[]';
                var9 = var11 + var8;
            case 682:
                if (!var37) {
                    _fun6576_ip = 709;
                    continue _fun6576
                }
            case 685:
                var8 = _closure1_slot4;
                var8 = var8.bind(var3)(var23);
                if (!var8) {
                    _fun6576_ip = 709;
                    continue _fun6576
                }
            case 697:
                var8 = var23.length;
                if (!(var28 !== var8)) {
                    _fun6576_ip = 1075;
                    continue _fun6576
                }
            case 709:
                var8 = var22.length;
                var8 = var28 < var8;
                var20 = 2;
                var19 = typeof var39;
                var18 = '.';
                var17 = '[';
                var16 = ']';
                var15 = '%2E';
                var14 = 'object';
                var28 = 0;
                var13 = undefined;
                var11 = undefined;
                if (!var8) {
                    _fun6576_ip = 1073;
                    continue _fun6576
                }
            case 758:
                var42 = var22[var28];
                var8 = typeof var42;
                if (!(var14 === var8)) {
                    _fun6576_ip = 781;
                    continue _fun6576
                }
            case 769:
                if (!var42) {
                    _fun6576_ip = 781;
                    continue _fun6576
                }
            case 772:
                var8 = var42.value;
                if (!(var3 === var8)) {
                    _fun6576_ip = 787;
                    continue _fun6576
                }
            case 781:
                var46 = var23[var42];
                _fun6576_ip = 792;
                continue _fun6576;
            case 787:
                var46 = var42.value;
            case 792:
                if (!var35) {
                    _fun6576_ip = 802;
                    continue _fun6576
                }
            case 795:
                if (!(var25 !== var46)) {
                    _fun6576_ip = 1058;
                    continue _fun6576
                }
            case 802:
                if (!var31) {
                    _fun6576_ip = 808;
                    continue _fun6576
                }
            case 805:
                if (var34) {
                    _fun6576_ip = 821;
                    continue _fun6576
                }
            case 808:
                var8 = var21.String;
                var41 = var8.bind(var3)(var42);
                _fun6576_ip = 857;
                continue _fun6576;
            case 821:
                var8 = var21.String;
                var43 = var8.bind(var3)(var42);
                var42 = var43.replace;
                var8 = /\./g;
                var41 = var42.bind(var43)(var8, var15);
            case 857:
                var8 = _closure1_slot4;
                var8 = var8.bind(var3)(var23);
                if (var8) {
                    _fun6576_ip = 892;
                    continue _fun6576
                }
            case 869:
                if (var31) {
                    _fun6576_ip = 882;
                    continue _fun6576
                }
            case 872:
                var8 = var17 + var41;
                var8 = var8 + var16;
                _fun6576_ip = 886;
                continue _fun6576;
            case 882:
                var8 = var18 + var41;
            case 886:
                var45 = var9 + var8;
                _fun6576_ip = 908;
                continue _fun6576;
            case 892:
                var8 = var9;
                if (!(var26 === var19)) {
                    _fun6576_ip = 905;
                    continue _fun6576
                }
            case 899:
                var8 = var39.bind(var3)(var9, var41);
            case 905:
                var45 = var8;
            case 908:
                var8 = var29.set;
                var8 = var8.bind(var29)(var40, var27);
                var42 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var20];
                var8 = var42.bind(var3)(var8);
                var8 = var8.bind(var3)();
                var43 = var8.set;
                var42 = _closure1_slot9;
                var42 = var43.bind(var8)(var42, var29);
                var43 = _closure1_slot6;
                var44 = _closure1_slot11;
                if (!var24) {
                    _fun6576_ip = 983;
                    continue _fun6576
                }
            case 966:
                if (!var2) {
                    _fun6576_ip = 983;
                    continue _fun6576
                }
            case 969:
                var42 = _closure1_slot4;
                var47 = var42.bind(var3)(var23);
                var42 = null;
                if (var47) {
                    _fun6576_ip = 986;
                    continue _fun6576
                }
            case 983:
                var42 = var6;
            case 986:
                var66 = undefined;
                var65 = var46;
                var64 = var45;
                var63 = var39;
                var62 = var38;
                var61 = var37;
                var60 = var36;
                var59 = var35;
                var58 = var34;
                var57 = var42;
                var56 = var33;
                var55 = var32;
                var54 = var31;
                var53 = var30;
                var52 = var5;
                var51 = var10;
                var50 = var2;
                var49 = var4;
                var48 = var8;
                var42 = var66[var44](var65, var64, var63, var62, var61, var60, var59, var58, var57, var56, var55, var54, var53, var52, var51, var50, var49, var48, var47);
                var42 = var43.bind(var3)(var0, var42);
                var13 = var41;
                var11 = var8;
            case 1058:
                var28 = var28 + 1;
                var8 = var22.length;
                if (var28 < var8) {
                    _fun6576_ip = 758;
                    continue _fun6576
                }
            case 1073:
                return var0;
            case 1075:
                var8 = '[]';
                var8 = var9 + var8;
                return var8;
            case 1087:
                return var0;
            case 1089:
                if (var6) {
                    _fun6576_ip = 1137;
                    continue _fun6576
                }
            case 1092:
                var8 = var10.bind(var3)(var7);
                var0 = '=';
                var8 = var8 + var0;
                var0 = global;
                var0 = var0.String;
                var0 = var0.bind(var3)(var12);
                var0 = var10.bind(var3)(var0);
                var8 = var8 + var0;
                var0 = new Array(1);
                var0[0] = var8;
                _fun6576_ip = 1234;
                continue _fun6576;
            case 1137:
                var8 = var7;
                if (var2) {
                    _fun6576_ip = 1172;
                    continue _fun6576
                }
            case 1143:
                var9 = _closure1_slot8;
                var64 = var9.encoder;
                var62 = 'key';
                var66 = undefined;
                var65 = var7;
                var63 = var4;
                var61 = var5;
                var8 = var66[var6](var65, var64, var63, var62, var61, var60);
            case 1172:
                var9 = var10.bind(var3)(var8);
                var8 = '=';
                var9 = var9 + var8;
                var8 = _closure1_slot8;
                var64 = var8.encoder;
                var62 = 'value';
                var66 = undefined;
                var65 = var12;
                var63 = var4;
                var61 = var5;
                var8 = var66[var6](var65, var64, var63, var62, var61, var60);
                var8 = var10.bind(var3)(var8);
                var9 = var9 + var8;
                var8 = new Array(1);
                var8[0] = var9;
                var0 = var8;
            case 1234:
                return var0;
            case 1236:
                var0 = var7;
                if (!var6) {
                    _fun6576_ip = 1277;
                    continue _fun6576
                }
            case 1242:
                var0 = var7;
                if (var2) {
                    _fun6576_ip = 1277;
                    continue _fun6576
                }
            case 1248:
                var1 = _closure1_slot8;
                var64 = var1.encoder;
                var62 = 'key';
                var66 = undefined;
                var65 = var7;
                var63 = var4;
                var61 = var5;
                var0 = var66[var6](var65, var64, var63, var62, var61, var60);
            case 1277:
                return var0;
            case 1279:
                var0 = global;
                var2 = var0.RangeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var65 = 'Cyclic object value';
                var66 = var1;
                var0 = new var66[var2](var65, var64);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot11 = var2;
    var _closure1_slot10 = var2;
    var2 = function(arg0, arg1) { // Environment: var1
        _fun6578: for (var _fun6578_ip = 0;;) switch (_fun6578_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                if (var2) {
                    _fun6578_ip = 21;
                    continue _fun6578
                }
            case 9:
                var3 = _closure1_slot8;
                _fun6578_ip = 1022;
                continue _fun6578;
            case 21:
                var0 = var2.allowEmptyArrays;
                var12 = undefined;
                if (!(var12 !== var0)) {
                    _fun6578_ip = 53;
                    continue _fun6578
                }
            case 33:
                var0 = var2.allowEmptyArrays;
                var1 = 'boolean';
                var0 = typeof var0;
                if (!(var1 === var0)) {
                    _fun6578_ip = 1686;
                    continue _fun6578
                }
            case 53:
                var0 = var2.encodeDotInKeys;
                if (!(var12 !== var0)) {
                    _fun6578_ip = 83;
                    continue _fun6578
                }
            case 63:
                var0 = var2.encodeDotInKeys;
                var1 = 'boolean';
                var0 = typeof var0;
                if (!(var1 === var0)) {
                    _fun6578_ip = 1650;
                    continue _fun6578
                }
            case 83:
                var0 = var2.encoder;
                var5 = null;
                if (!(var5 !== var0)) {
                    _fun6578_ip = 125;
                    continue _fun6578
                }
            case 95:
                var0 = var2.encoder;
                if (!(var12 !== var0)) {
                    _fun6578_ip = 125;
                    continue _fun6578
                }
            case 105:
                var0 = var2.encoder;
                var1 = 'function';
                var0 = typeof var0;
                if (!(var1 === var0)) {
                    _fun6578_ip = 1614;
                    continue _fun6578
                }
            case 125:
                var11 = var2.charset;
                if (var11) {
                    _fun6578_ip = 147;
                    continue _fun6578
                }
            case 134:
                var0 = _closure1_slot8;
                var11 = var0.charset;
            case 147:
                var0 = var2.charset;
                if (!(var12 !== var0)) {
                    _fun6578_ip = 192;
                    continue _fun6578
                }
            case 157:
                var1 = var2.charset;
                var0 = 'utf-8';
                if (!(var0 !== var1)) {
                    _fun6578_ip = 192;
                    continue _fun6578
                }
            case 173:
                var1 = var2.charset;
                var0 = 'iso-8859-1';
                if (!(var0 === var1)) {
                    _fun6578_ip = 1578;
                    continue _fun6578
                }
            case 192:
                var6 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 1;
                var0 = var0[var7];
                var0 = var6.bind(var12)(var0);
                var9 = var0.default;
                var0 = var2.format;
                if (!(var12 !== var0)) {
                    _fun6578_ip = 316;
                    continue _fun6578
                }
            case 229:
                var10 = _closure1_slot2;
                var8 = var10.call;
                var6 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var0 = var6.bind(var12)(var0);
                var6 = var0.formatters;
                var0 = var2.format;
                var0 = var8.bind(var10)(var6, var0);
                if (var0) {
                    _fun6578_ip = 311;
                    continue _fun6578
                }
            case 275:
                var0 = global;
                var8 = var0.TypeError;
                var0 = var8.prototype;
                var6 = Object.create(var0, {
                    constructor: {
                        value: var8
                    }
                });
                var46 = 'Unknown format option provided.';
                var47 = var6;
                var0 = new var47[var8](var46, var45);
                var0 = var0 instanceof Object ? var0 : var6;
                throw var0;
            case 311:
                var9 = var2.format;
            case 316:
                var6 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var0 = var6.bind(var12)(var0);
                var0 = var0.formatters;
                var7 = var0[var9];
                var0 = _closure1_slot8;
                var10 = var0.filter;
                var0 = var2.filter;
                var8 = 'function';
                var0 = typeof var0;
                var0 = var8 === var0;
                if (var0) {
                    _fun6578_ip = 385;
                    continue _fun6578
                }
            case 371:
                var13 = _closure1_slot4;
                var6 = var2.filter;
                var0 = var13.bind(var12)(var6);
            case 385:
                if (!var0) {
                    _fun6578_ip = 393;
                    continue _fun6578
                }
            case 388:
                var10 = var2.filter;
            case 393:
                var6 = var2.arrayFormat;
                var0 = _closure1_slot3;
                var0 = var6 in var0;
                if (var0) {
                    _fun6578_ip = 454;
                    continue _fun6578
                }
            case 410:
                var6 = 'indices';
                var0 = var6 in var2;
                if (var0) {
                    _fun6578_ip = 433;
                    continue _fun6578
                }
            case 421:
                var0 = _closure1_slot8;
                var13 = var0.arrayFormat;
                _fun6578_ip = 452;
                continue _fun6578;
            case 433:
                var14 = var2.indices;
                var0 = 'repeat';
                if (!var14) {
                    _fun6578_ip = 449;
                    continue _fun6578
                }
            case 446:
                var0 = var6;
            case 449:
                var13 = var0;
            case 452:
                _fun6578_ip = 460;
                continue _fun6578;
            case 454:
                var13 = var2.arrayFormat;
            case 460:
                var0 = 'commaRoundTrip';
                var0 = var0 in var2;
                if (!var0) {
                    _fun6578_ip = 491;
                    continue _fun6578
                }
            case 471:
                var0 = var2.commaRoundTrip;
                var6 = 'boolean';
                var0 = typeof var0;
                if (!(var6 === var0)) {
                    _fun6578_ip = 1542;
                    continue _fun6578
                }
            case 491:
                var0 = var2.allowDots;
                if (!(var12 !== var0)) {
                    _fun6578_ip = 515;
                    continue _fun6578
                }
            case 501:
                var0 = var2.allowDots;
                var0 = !var0;
                var14 = !var0;
                _fun6578_ip = 543;
                continue _fun6578;
            case 515:
                var6 = var2.encodeDotInKeys;
                var0 = true;
                var0 = var0 === var6;
                if (var0) {
                    _fun6578_ip = 540;
                    continue _fun6578
                }
            case 530:
                var6 = _closure1_slot8;
                var0 = var6.allowDots;
            case 540:
                var14 = var0;
            case 543:
                var0 = {};
                var15 = var2.addQueryPrefix;
                var6 = 'boolean';
                var15 = typeof var15;
                if (!(var6 !== var15)) {
                    _fun6578_ip = 574;
                    continue _fun6578
                }
            case 562:
                var15 = _closure1_slot8;
                var15 = var15.addQueryPrefix;
                _fun6578_ip = 580;
                continue _fun6578;
            case 574:
                var15 = var2.addQueryPrefix;
            case 580:
                var0.addQueryPrefix = var15;
                var0.allowDots = var14;
                var14 = var2.allowEmptyArrays;
                var14 = typeof var14;
                if (!(var6 !== var14)) {
                    _fun6578_ip = 615;
                    continue _fun6578
                }
            case 603:
                var14 = _closure1_slot8;
                var14 = var14.allowEmptyArrays;
                _fun6578_ip = 627;
                continue _fun6578;
            case 615:
                var15 = var2.allowEmptyArrays;
                var15 = !var15;
                var14 = !var15;
            case 627:
                var0.allowEmptyArrays = var14;
                var0.arrayFormat = var13;
                var0.charset = var11;
                var11 = var2.charsetSentinel;
                var11 = typeof var11;
                if (!(var6 !== var11)) {
                    _fun6578_ip = 667;
                    continue _fun6578
                }
            case 655:
                var11 = _closure1_slot8;
                var11 = var11.charsetSentinel;
                _fun6578_ip = 673;
                continue _fun6578;
            case 667:
                var11 = var2.charsetSentinel;
            case 673:
                var0.charsetSentinel = var11;
                var11 = var2.commaRoundTrip;
                var11 = !var11;
                var11 = !var11;
                var0.commaRoundTrip = var11;
                var11 = var2.delimiter;
                if (!(var12 !== var11)) {
                    _fun6578_ip = 713;
                    continue _fun6578
                }
            case 705:
                var11 = var2.delimiter;
                _fun6578_ip = 723;
                continue _fun6578;
            case 713:
                var12 = _closure1_slot8;
                var11 = var12.delimiter;
            case 723:
                var0.delimiter = var11;
                var11 = var2.encode;
                var11 = typeof var11;
                if (!(var6 !== var11)) {
                    _fun6578_ip = 753;
                    continue _fun6578
                }
            case 741:
                var11 = _closure1_slot8;
                var11 = var11.encode;
                _fun6578_ip = 759;
                continue _fun6578;
            case 753:
                var11 = var2.encode;
            case 759:
                var0.encode = var11;
                var11 = var2.encodeDotInKeys;
                var11 = typeof var11;
                if (!(var6 !== var11)) {
                    _fun6578_ip = 789;
                    continue _fun6578
                }
            case 777:
                var11 = _closure1_slot8;
                var11 = var11.encodeDotInKeys;
                _fun6578_ip = 795;
                continue _fun6578;
            case 789:
                var11 = var2.encodeDotInKeys;
            case 795:
                var0.encodeDotInKeys = var11;
                var11 = var2.encoder;
                var11 = typeof var11;
                if (!(var8 !== var11)) {
                    _fun6578_ip = 825;
                    continue _fun6578
                }
            case 813:
                var11 = _closure1_slot8;
                var11 = var11.encoder;
                _fun6578_ip = 831;
                continue _fun6578;
            case 825:
                var11 = var2.encoder;
            case 831:
                var0.encoder = var11;
                var11 = var2.encodeValuesOnly;
                var11 = typeof var11;
                if (!(var6 !== var11)) {
                    _fun6578_ip = 861;
                    continue _fun6578
                }
            case 849:
                var11 = _closure1_slot8;
                var11 = var11.encodeValuesOnly;
                _fun6578_ip = 867;
                continue _fun6578;
            case 861:
                var11 = var2.encodeValuesOnly;
            case 867:
                var0.encodeValuesOnly = var11;
                var0.filter = var10;
                var0.format = var9;
                var0.formatter = var7;
                var7 = var2.serializeDate;
                var7 = typeof var7;
                if (!(var8 !== var7)) {
                    _fun6578_ip = 910;
                    continue _fun6578
                }
            case 898:
                var7 = _closure1_slot8;
                var7 = var7.serializeDate;
                _fun6578_ip = 916;
                continue _fun6578;
            case 910:
                var7 = var2.serializeDate;
            case 916:
                var0.serializeDate = var7;
                var7 = var2.skipNulls;
                var7 = typeof var7;
                if (!(var6 !== var7)) {
                    _fun6578_ip = 946;
                    continue _fun6578
                }
            case 934:
                var7 = _closure1_slot8;
                var7 = var7.skipNulls;
                _fun6578_ip = 952;
                continue _fun6578;
            case 946:
                var7 = var2.skipNulls;
            case 952:
                var0.skipNulls = var7;
                var7 = var2.sort;
                var7 = typeof var7;
                var5 = null;
                if (!(var8 === var7)) {
                    _fun6578_ip = 978;
                    continue _fun6578
                }
            case 972:
                var5 = var2.sort;
            case 978:
                var0.sort = var5;
                var5 = var2.strictNullHandling;
                var5 = typeof var5;
                if (!(var6 !== var5)) {
                    _fun6578_ip = 1008;
                    continue _fun6578
                }
            case 996:
                var1 = _closure1_slot8;
                var1 = var1.strictNullHandling;
                _fun6578_ip = 1014;
                continue _fun6578;
            case 1008:
                var1 = var2.strictNullHandling;
            case 1014:
                var0.strictNullHandling = var1;
                var3 = var0;
            case 1022:
                var0 = var3.filter;
                var1 = 'function';
                var0 = typeof var0;
                if (!(var1 !== var0)) {
                    _fun6578_ip = 1075;
                    continue _fun6578
                }
            case 1038:
                var2 = _closure1_slot4;
                var0 = var3.filter;
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var12 = undefined;
                var11 = var4;
                if (!var0) {
                    _fun6578_ip = 1094;
                    continue _fun6578
                }
            case 1065:
                var12 = var3.filter;
                var11 = var4;
                _fun6578_ip = 1094;
                continue _fun6578;
            case 1075:
                var2 = var3.filter;
                var1 = undefined;
                var0 = '';
                var11 = var2.bind(var1)(var0, var4);
                var12 = undefined;
            case 1094:
                var2 = new Array(0);
                var1 = 'object';
                var0 = typeof var11;
                if (!(var1 === var0)) {
                    _fun6578_ip = 1536;
                    continue _fun6578
                }
            case 1112:
                var10 = null;
                if (!(var10 !== var11)) {
                    _fun6578_ip = 1536;
                    continue _fun6578
                }
            case 1121:
                var1 = _closure1_slot3;
                var0 = var3.arrayFormat;
                var8 = var1[var0];
                var0 = 'comma';
                var7 = var0 === var8;
                if (!var7) {
                    _fun6578_ip = 1155;
                    continue _fun6578
                }
            case 1149:
                var7 = var3.commaRoundTrip;
            case 1155:
                if (var12) {
                    _fun6578_ip = 1176;
                    continue _fun6578
                }
            case 1158:
                var0 = global;
                var1 = var0.Object;
                var0 = var1.keys;
                var12 = var0.bind(var1)(var11);
            case 1176:
                var0 = var3.sort;
                if (!var0) {
                    _fun6578_ip = 1202;
                    continue _fun6578
                }
            case 1185:
                var1 = var12.sort;
                var0 = var3.sort;
                var0 = var1.bind(var12)(var0);
            case 1202:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var0 = var4[var0];
                var6 = undefined;
                var0 = var1.bind(var6)(var0);
                var5 = var0.bind(var6)();
                var0 = var12.length;
                var4 = 0;
                var0 = var4 < var0;
                var1 = 0;
                if (!var0) {
                    _fun6578_ip = 1426;
                    continue _fun6578
                }
            case 1247:
                var28 = var12[var1];
                var27 = var11[var28];
                var0 = var3.skipNulls;
                if (!var0) {
                    _fun6578_ip = 1268;
                    continue _fun6578
                }
            case 1264:
                var0 = var10 === var27;
            case 1268:
                if (var0) {
                    _fun6578_ip = 1411;
                    continue _fun6578
                }
            case 1274:
                var13 = _closure1_slot6;
                var26 = _closure1_slot10;
                var25 = var3.allowEmptyArrays;
                var24 = var3.strictNullHandling;
                var23 = var3.skipNulls;
                var22 = var3.encodeDotInKeys;
                var0 = var3.encode;
                var21 = null;
                if (!var0) {
                    _fun6578_ip = 1323;
                    continue _fun6578
                }
            case 1317:
                var21 = var3.encoder;
            case 1323:
                var37 = var3.filter;
                var36 = var3.sort;
                var35 = var3.allowDots;
                var34 = var3.serializeDate;
                var33 = var3.format;
                var32 = var3.formatter;
                var31 = var3.encodeValuesOnly;
                var30 = var3.charset;
                var47 = undefined;
                var46 = var27;
                var45 = var28;
                var44 = var8;
                var43 = var7;
                var42 = var25;
                var41 = var24;
                var40 = var23;
                var39 = var22;
                var38 = var21;
                var29 = var5;
                var0 = var47[var26](var46, var45, var44, var43, var42, var41, var40, var39, var38, var37, var36, var35, var34, var33, var32, var31, var30, var29, var28);
                var0 = var13.bind(var6)(var2, var0);
            case 1411:
                var1 = var1 + 1;
                var0 = var12.length;
                if (var1 < var0) {
                    _fun6578_ip = 1247;
                    continue _fun6578
                }
            case 1426:
                var1 = var2.join;
                var0 = var3.delimiter;
                var2 = var1.bind(var2)(var0);
                var5 = var3.addQueryPrefix;
                var0 = '';
                var1 = true;
                var6 = var0;
                if (!(var1 === var5)) {
                    _fun6578_ip = 1465;
                    continue _fun6578
                }
            case 1461:
                var6 = '?';
            case 1465:
                var5 = var3.charsetSentinel;
                var1 = var6;
                if (!var5) {
                    _fun6578_ip = 1518;
                    continue _fun6578
                }
            case 1477:
                var5 = var3.charset;
                var3 = 'iso-8859-1';
                if (!(var3 !== var5)) {
                    _fun6578_ip = 1505;
                    continue _fun6578
                }
            case 1493:
                var3 = 'utf8=%E2%9C%93&';
                var3 = var6 + var3;
                _fun6578_ip = 1515;
                continue _fun6578;
            case 1505:
                var5 = 'utf8=%26%2310003%3B&';
                var3 = var6 + var5;
            case 1515:
                var1 = var3;
            case 1518:
                var3 = var2.length;
                var3 = var3 > var4;
                if (!var3) {
                    _fun6578_ip = 1534;
                    continue _fun6578
                }
            case 1530:
                var0 = var1 + var2;
            case 1534:
                return var0;
            case 1536:
                var0 = '';
                return var0;
            case 1542:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var46 = '`commaRoundTrip` must be a boolean, or absent';
                var47 = var1;
                var0 = new var47[var2](var46, var45);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 1578:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var46 = 'The charset option must be either utf-8, iso-8859-1, or undefined';
                var47 = var1;
                var0 = new var47[var2](var46, var45);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 1614:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var46 = 'Encoder has to be a function.';
                var47 = var1;
                var0 = new var47[var2](var46, var45);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 1650:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var46 = '`encodeDotInKeys` option can only be `true` or `false`, when provided';
                var47 = var1;
                var0 = new var47[var2](var46, var45);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 1686:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var46 = '`allowEmptyArrays` option can only be `true` or `false`, when provided';
                var47 = var1;
                var0 = new var47[var2](var46, var45);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [513, 511, 515]);