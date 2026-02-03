// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = metroImportDefault;
    var2 = exports;
    var1 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var1;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun38480: for (var _fun38480_ip = 0;;) switch (_fun38480_ip) {
            case 0:
                var13 = arg0;
                var15 = arg1;
                var8 = arg2;
                var6 = arg3;
                var _closure2_slot0 = var6;
                var5 = new Array(0);
                var _closure2_slot1 = var5;
                var3 = new Array(0);
                var _closure2_slot2 = var3;
                var21 = new Array(0);
                var20 = _closure1_slot4;
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 4;
                var4 = var2[var7];
                var2 = undefined;
                var4 = var9.bind(var2)(var4);
                var11 = var4.COMPRESSION_METHOD_NONE;
                var19 = 0;
                var4 = var19 < var8;
                var10 = undefined;
                var9 = var11;
                if (!var4) {
                    _fun38480_ip = 482;
                    continue _fun38480
                }
            case 90:
                var12 = var15 + var19;
                var4 = var13.byteLength;
                var4 = var12 < var4;
                var18 = 5;
                var17 = var11;
                var16 = 0;
                var14 = undefined;
                var10 = undefined;
                var9 = var17;
                if (!var4) {
                    _fun38480_ip = 482;
                    continue _fun38480
                }
            case 125:
                var12 = _closure1_slot5;
                var4 = var17;
                var11 = var16;
                if (!(var20 === var12)) {
                    _fun38480_ip = 221;
                    continue _fun38480
                }
            case 139:
                var22 = _closure1_slot13;
                var12 = {};
                var12.type = var6;
                var12.dataView = var13;
                var23 = var15 + var11;
                var12.offset = var23;
                var22 = var22.bind(var2)(var12);
                var23 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var18];
                var12 = var23.bind(var2)(var12);
                var23 = var12.TYPE_ITXT;
                var12 = var11;
                if (!(var6 === var23)) {
                    _fun38480_ip = 206;
                    continue _fun38480
                }
            case 198:
                var23 = _closure1_slot9;
                var12 = var11 + var23;
            case 206:
                var23 = _closure1_slot14;
                var23 = var23.bind(var2)(var6, var20);
                _fun38480_ip = 378;
                continue _fun38480;
            case 221:
                var24 = _closure1_slot8;
                if (!(var20 !== var24)) {
                    _fun38480_ip = 426;
                    continue _fun38480
                }
            case 232:
                var25 = var13.getUint8;
                var24 = var15 + var11;
                var24 = var25.bind(var13)(var24);
                if (!(var19 !== var24)) {
                    _fun38480_ip = 359;
                    continue _fun38480
                }
            case 251:
                var25 = _closure1_slot4;
                if (!(var20 !== var25)) {
                    _fun38480_ip = 335;
                    continue _fun38480
                }
            case 259:
                var25 = _closure1_slot6;
                if (!(var20 !== var25)) {
                    _fun38480_ip = 311;
                    continue _fun38480
                }
            case 267:
                var25 = _closure1_slot7;
                var23 = var20;
                var22 = var4;
                var12 = var11;
                var14 = var24;
                if (!(var20 === var25)) {
                    _fun38480_ip = 378;
                    continue _fun38480
                }
            case 287:
                var25 = var21.push;
                var25 = var25.bind(var21)(var24);
                var23 = var20;
                var22 = var4;
                var12 = var11;
                var14 = var24;
                _fun38480_ip = 378;
                continue _fun38480;
            case 311:
                var25 = var3.push;
                var25 = var25.bind(var3)(var24);
                var23 = var20;
                var22 = var4;
                var12 = var11;
                var14 = var24;
                _fun38480_ip = 378;
                continue _fun38480;
            case 335:
                var25 = var5.push;
                var25 = var25.bind(var5)(var24);
                var23 = var20;
                var22 = var4;
                var12 = var11;
                var14 = var24;
                _fun38480_ip = 378;
                continue _fun38480;
            case 359:
                var25 = _closure1_slot14;
                var23 = var25.bind(var2)(var6, var20);
                var22 = var4;
                var12 = var11;
                var14 = var24;
            case 378:
                var16 = var12 + 1;
                var12 = var16 < var8;
                var10 = undefined;
                var9 = var22;
                if (!var12) {
                    _fun38480_ip = 482;
                    continue _fun38480
                }
            case 393:
                var24 = var15 + var16;
                var12 = var13.byteLength;
                var12 = var24 < var12;
                var20 = var23;
                var17 = var22;
                var10 = undefined;
                var9 = var17;
                if (var12) {
                    _fun38480_ip = 125;
                    continue _fun38480
                }
            case 424:
                _fun38480_ip = 482;
                continue _fun38480;
            case 426:
                var12 = global;
                var12 = var12.DataView;
                var14 = var13.buffer;
                var13 = var14.slice;
                var11 = var15 + var11;
                var8 = var15 + var8;
                var29 = var13.bind(var14)(var11, var8);
                var11 = var12.prototype;
                var11 = Object.create(var11, {
                    constructor: {
                        value: var12
                    }
                });
                var30 = var11;
                var8 = new var30[var12](var29, var28);
                var10 = var8 instanceof Object ? var8 : var11;
                var9 = var4;
            case 482:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var8.bind(var2)(var4);
                var4 = var4.COMPRESSION_METHOD_NONE;
                if (!(var9 !== var4)) {
                    _fun38480_ip = 519;
                    continue _fun38480
                }
            case 509:
                var4 = arg4;
                if (var4) {
                    _fun38480_ip = 519;
                    continue _fun38480
                }
            case 515:
                var4 = {};
                return var4;
            case 519:
                var11 = _closure1_slot0;
                var4 = _closure1_slot2;
                var7 = var4[var7];
                var8 = var11.bind(var2)(var7);
                var7 = var8.decompress;
                var12 = 5;
                var4 = var4[var12];
                var4 = var11.bind(var2)(var4);
                var4 = var4.TYPE_TEXT;
                if (!(var6 !== var4)) {
                    _fun38480_ip = 597;
                    continue _fun38480
                }
            case 564:
                var11 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var12];
                var4 = var11.bind(var2)(var4);
                var11 = var4.TYPE_ZTXT;
                var4 = 'utf-8';
                if (!(var6 === var11)) {
                    _fun38480_ip = 603;
                    continue _fun38480
                }
            case 597:
                var4 = 'latin1';
            case 603:
                var4 = var7.bind(var8)(var10, var9, var4);
                var7 = global;
                var7 = var7.Promise;
                var7 = var4 instanceof var7;
                if (var7) {
                    _fun38480_ip = 649;
                    continue _fun38480
                }
            case 625:
                var0 = _closure1_slot15;
                var30 = undefined;
                var29 = var4;
                var28 = var6;
                var27 = var3;
                var26 = var5;
                var0 = var30[var0](var29, var28, var27, var26, var25);
                _fun38480_ip = 680;
                continue _fun38480;
            case 649:
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    var5 = _closure1_slot15;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot2;
                    var6 = _closure2_slot1;
                    var10 = undefined;
                    var9 = arg0;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function() { // Environment: var1
                    var5 = _closure1_slot15;
                    var2 = '<text using unknown compression>';
                    var1 = var2.split;
                    var0 = '';
                    var9 = var1.bind(var2)(var0);
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot2;
                    var6 = _closure2_slot1;
                    var10 = undefined;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 680:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun38483: for (var _fun38483_ip = 0;;) switch (_fun38483_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.type;
                var2 = var0.dataView;
                var3 = var0.offset;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 5;
                var1 = var1[var7];
                var4 = undefined;
                var1 = var6.bind(var4)(var1);
                var1 = var1.TYPE_ITXT;
                if (!(var5 !== var1)) {
                    _fun38483_ip = 95;
                    continue _fun38483
                }
            case 55:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var6.bind(var4)(var1);
                var1 = var1.TYPE_ZTXT;
                if (!(var5 === var1)) {
                    _fun38483_ip = 114;
                    continue _fun38483
                }
            case 82:
                var1 = var2.getUint8;
                var1 = var1.bind(var2)(var3);
                return var1;
            case 95:
                var1 = var2.getUint8;
                var5 = var1.bind(var2)(var3);
                var1 = _closure1_slot10;
                if (!(var5 !== var1)) {
                    _fun38483_ip = 142;
                    continue _fun38483
                }
            case 114:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 4;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.COMPRESSION_METHOD_NONE;
                return var0;
            case 142:
                var1 = var2.getUint8;
                var0 = 1;
                var0 = var3 + var0;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun38484: for (var _fun38484_ip = 0;;) switch (_fun38484_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = _closure1_slot4;
                if (!(var2 === var0)) {
                    _fun38484_ip = 85;
                    continue _fun38484
                }
            case 17:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 5;
                var4 = var7[var0];
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                var8 = var4.TYPE_ITXT;
                var4 = new Array(2);
                var4[0] = var8;
                var0 = var7[var0];
                var0 = var6.bind(var5)(var0);
                var0 = var0.TYPE_ZTXT;
                var4[1] = var0;
                var0 = var4.includes;
                var0 = var0.bind(var4)(var3);
                if (var0) {
                    _fun38484_ip = 160;
                    continue _fun38484
                }
            case 85:
                var0 = _closure1_slot5;
                if (!(var2 !== var0)) {
                    _fun38484_ip = 113;
                    continue _fun38484
                }
            case 93:
                var0 = _closure1_slot6;
                if (!(var2 !== var0)) {
                    _fun38484_ip = 107;
                    continue _fun38484
                }
            case 101:
                var0 = _closure1_slot8;
                _fun38484_ip = 111;
                continue _fun38484;
            case 107:
                var0 = _closure1_slot7;
            case 111:
                _fun38484_ip = 158;
                continue _fun38484;
            case 113:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 5;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.TYPE_ITXT;
                if (!(var3 !== var2)) {
                    _fun38484_ip = 151;
                    continue _fun38484
                }
            case 145:
                var2 = _closure1_slot8;
                _fun38484_ip = 155;
                continue _fun38484;
            case 151:
                var2 = _closure1_slot6;
            case 155:
                var0 = var2;
            case 158:
                _fun38484_ip = 164;
                continue _fun38484;
            case 160:
                var0 = _closure1_slot5;
            case 164:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun38485: for (var _fun38485_ip = 0;;) switch (_fun38485_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var0 = global;
                var0 = var0.DataView;
                var0 = var4 instanceof var0;
                var1 = var4;
                if (!var0) {
                    _fun38485_ip = 70;
                    continue _fun38485
                }
            case 24:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var3 = var5.getStringFromDataView;
                var2 = var4.byteLength;
                var0 = 0;
                var1 = var3.bind(var5)(var4, var0, var2);
            case 70:
                var0 = {};
                var8 = _closure1_slot16;
                var3 = undefined;
                var7 = arg2;
                var5 = arg3;
                var5 = var8.bind(var3)(var6, var7, var5);
                var0.name = var5;
                var0.value = var1;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 5;
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var5 = var5.TYPE_ITXT;
                if (!(var6 === var5)) {
                    _fun38485_ip = 141;
                    continue _fun38485
                }
            case 132:
                var2 = _closure1_slot17;
                var1 = var2.bind(var3)(var4);
            case 141:
                var0.description = var1;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun38486: for (var _fun38486_ip = 0;;) switch (_fun38486_ip) {
            case 0:
                var3 = arg1;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 4;
                var0 = var7[var5];
                var4 = undefined;
                var8 = var2.bind(var4)(var0);
                var6 = var8.getStringValueFromArray;
                var0 = arg2;
                var6 = var6.bind(var8)(var0);
                var0 = 5;
                var0 = var7[var0];
                var0 = var2.bind(var4)(var0);
                var7 = var0.TYPE_TEXT;
                var2 = arg0;
                var0 = var6;
                if (!(var2 !== var7)) {
                    _fun38486_ip = 146;
                    continue _fun38486
                }
            case 70:
                var7 = var3.length;
                var2 = 0;
                var0 = var6;
                if (!(var2 !== var7)) {
                    _fun38486_ip = 146;
                    continue _fun38486
                }
            case 84:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getStringValueFromArray;
                var10 = var1.bind(var2)(var3);
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var13 = '';
                var11 = ' (';
                var9 = ')';
                var12 = var6;
                var0 = var13[var4](var12, var11, var10, var9, var8);
            case 146:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.decode;
        var1 = 'UTF-8';
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun38488: for (var _fun38488_ip = 0;;) switch (_fun38488_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var0 = var1.toLowerCase;
                var1 = var0.bind(var1)();
                var0 = 'raw profile type exif';
                var0 = var0 === var1;
                if (!var0) {
                    _fun38488_ip = 55;
                    continue _fun38488
                }
            case 29:
                var3 = var4.substring;
                var2 = 1;
                var1 = 5;
                var2 = var3.bind(var4)(var2, var1);
                var1 = 'exif';
                var0 = var1 === var2;
            case 55:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        _fun38489: for (var _fun38489_ip = 0;;) switch (_fun38489_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var0 = var1.toLowerCase;
                var1 = var0.bind(var1)();
                var0 = 'raw profile type iptc';
                var0 = var0 === var1;
                if (!var0) {
                    _fun38489_ip = 55;
                    continue _fun38489
                }
            case 29:
                var3 = var4.substring;
                var2 = 1;
                var1 = 5;
                var2 = var3.bind(var4)(var2, var1);
                var1 = 'iptc';
                var0 = var1 === var2;
            case 55:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun38490: for (var _fun38490_ip = 0;;) switch (_fun38490_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.match;
                var0 = /\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/;
                var0 = var1.bind(var2)(var0);
                var7 = 2;
                var3 = var0[var7];
                var2 = var3.replace;
                var1 = /\n/g;
                var0 = '';
                var6 = var2.bind(var3)(var1, var0);
                var5 = global;
                var2 = var5.DataView;
                var3 = var5.ArrayBuffer;
                var0 = var6.length;
                var12 = var0 / var7;
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var13 = var1;
                var0 = new var13[var3](var12, var11);
                var12 = var0 instanceof Object ? var0 : var1;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = var1;
                var0 = new var13[var2](var12, var11);
                var0 = var0 instanceof Object ? var0 : var1;
                var1 = var6.length;
                var4 = 0;
                var1 = var4 < var1;
                var3 = undefined;
                var2 = 16;
                if (!var1) {
                    _fun38490_ip = 204;
                    continue _fun38490
                }
            case 146:
                var10 = var0.setUint8;
                var9 = var5.parseInt;
                var1 = var6.substring;
                var8 = var4 + var7;
                var1 = var1.bind(var6)(var4, var8);
                var9 = var9.bind(var3)(var1, var2);
                var1 = var4 / var7;
                var1 = var10.bind(var0)(var1, var9);
                var1 = var6.length;
                var4 = var8;
                if (var4 < var1) {
                    _fun38490_ip = 146;
                    continue _fun38490
                }
            case 204:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var1 = var1[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = {};
    var3 = function arg0, arg1, arg2, arg3() {
        _fun38491: for (var _fun38491_ip = 0;;) switch (_fun38491_ip) {
            case 0:
                var13 = arg0;
                var12 = arg1;
                var11 = arg2;
                var0 = arg3;
                var _closure2_slot0 = var0;
                var3 = {};
                var4 = new Array(0);
                var0 = var12.length;
                var5 = 0;
                var0 = var5 < var0;
                var2 = global;
                var9 = 0;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                if (!var0) {
                    _fun38491_ip = 213;
                    continue _fun38491
                }
            case 54:
                var0 = var12[var9];
                var17 = _closure1_slot12;
                var26 = var0.offset;
                var25 = var0.length;
                var24 = var0.type;
                var28 = undefined;
                var27 = var13;
                var23 = var11;
                var20 = var28[var17](var27, var26, var25, var24, var23, var22);
                var0 = var2.Promise;
                var0 = var20 instanceof var0;
                if (var0) {
                    _fun38491_ip = 155;
                    continue _fun38491
                }
            case 103:
                var19 = var20.name;
                var18 = var20.value;
                var0 = var20.description;
                var17 = var19;
                var16 = var18;
                var15 = var0;
                if (!var19) {
                    _fun38491_ip = 189;
                    continue _fun38491
                }
            case 130:
                var21 = {};
                var21.value = var18;
                var21.description = var0;
                var3[var19] = var21;
                var17 = var19;
                var16 = var18;
                var15 = var0;
                _fun38491_ip = 189;
                continue _fun38491;
            case 155:
                var18 = var4.push;
                var19 = var20.then;
                var0 = function(arg0) { // Environment: var14
                    _fun38492: for (var _fun38492_ip = 0;;) switch (_fun38492_ip) {
                        case 0:
                            var1 = arg0;
                            var6 = undefined;
                            var3 = undefined;
                            var2 = undefined;
                            var0 = undefined;
                            var3 = var1.name;
                            var2 = var1.value;
                            var0 = var1.description;
                        case 26: // try_start_0
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var7 = 1;
                            var4 = var4[var7];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.USE_EXIF;
                            if (!var4) {
                                _fun38492_ip = 80;
                                continue _fun38492
                            }
                        case 58:
                            var8 = _closure1_slot18;
                            var5 = var3;
                            var4 = var2;
                            var4 = var8.bind(var6)(var5, var4);
                            if (var4) {
                                _fun38492_ip = 268;
                                continue _fun38492
                            }
                        case 80:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var4 = var4[var7];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.USE_IPTC;
                            if (!var4) {
                                _fun38492_ip = 125;
                                continue _fun38492
                            }
                        case 106:
                            var7 = _closure1_slot19;
                            var5 = var3;
                            var4 = var2;
                            var4 = var7.bind(var6)(var5, var4);
                            if (var4) {
                                _fun38492_ip = 205;
                                continue _fun38492
                            }
                        case 125:
                            var4 = var3;
                            if (!var4) {
                                _fun38492_ip = 200;
                                continue _fun38492
                            }
                        case 131:
                            var7 = _closure1_slot18;
                            var5 = var3;
                            var4 = var2;
                            var4 = var7.bind(var6)(var5, var4);
                            if (var4) {
                                _fun38492_ip = 200;
                                continue _fun38492
                            }
                        case 150:
                            var7 = _closure1_slot19;
                            var5 = var3;
                            var4 = var2;
                            var4 = var7.bind(var6)(var5, var4);
                            if (var4) {
                                _fun38492_ip = 200;
                                continue _fun38492
                            }
                        case 169:
                            var5 = _closure1_slot3;
                            var4 = var3;
                            var3 = {};
                            var7 = var2;
                            var3.value = var7;
                            var3.description = var0;
                            var0 = {};
                            var0 = var5.bind(var6)(var0, var4, var3);
                        case 198: // try_end0
                            return var0;
                        case 200:
                            _fun38492_ip = 338;
                            continue _fun38492;
                        case 205: // try_start_1
                            var0 = {};
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 3;
                            var3 = var5[var3];
                            var8 = var4.bind(var6)(var3);
                            var7 = var8.read;
                            var4 = _closure1_slot20;
                            var3 = var2;
                            var5 = var4.bind(var6)(var3);
                            var4 = _closure2_slot0;
                            var3 = 0;
                            var3 = var7.bind(var8)(var5, var3, var4);
                            var0.__iptc = var3;
                        case 266: // try_end1
                            return var0;
                        case 268: // try_start_2
                            var0 = {};
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 2;
                            var3 = var5[var3];
                            var5 = var4.bind(var6)(var3);
                            var4 = var5.read;
                            var3 = _closure1_slot20;
                            var3 = var3.bind(var6)(var2);
                            var2 = _closure1_slot11;
                            var1 = _closure2_slot0;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            var1 = var1.tags;
                            var0.__exif = var1;
                        case 334: // try_end2
                            return var0;
                        case 336: // catch_target0 // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 0);
                        case 338:
                            var0 = {};
                            return var0;
                    }
                };
                var0 = var19.bind(var20)(var0);
                var0 = var18.bind(var4)(var0);
                var17 = var8;
                var16 = var7;
                var15 = var6;
            case 189:
                var9 = var9 + 1;
                var0 = var12.length;
                var8 = var17;
                var7 = var16;
                var6 = var15;
                if (var9 < var0) {
                    _fun38491_ip = 54;
                    continue _fun38491
                }
            case 213:
                var0 = {};
                var0.readTags = var3;
                var3 = var4.length;
                var3 = var3 > var5;
                var1 = undefined;
                if (!var3) {
                    _fun38491_ip = 251;
                    continue _fun38491
                }
            case 234:
                var3 = var2.Promise;
                var2 = var3.all;
                var1 = var2.bind(var3)(var4);
            case 251:
                var0.readTagsPromise = var1;
                return var0;
        }
    };
    var1.read = var3;
    var3 = 'STATE_KEYWORD';
    var _closure1_slot4 = var3;
    var3 = 'STATE_COMPRESSION';
    var _closure1_slot5 = var3;
    var3 = 'STATE_LANG';
    var _closure1_slot6 = var3;
    var3 = 'STATE_TRANSLATED_KEYWORD';
    var _closure1_slot7 = var3;
    var3 = 'STATE_TEXT';
    var _closure1_slot8 = var3;
    var3 = 1;
    var _closure1_slot9 = var3;
    var _closure1_slot10 = var3;
    var3 = 6;
    var _closure1_slot11 = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 4168, 4184, 4196, 4165, 4172, 4198]);