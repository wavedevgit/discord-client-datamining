// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var0 = dependencyMap;
    var _closure1_slot2 = var0;
    var0 = function(arg0, arg1) { // Original name: isSOF0Marker, environment: var3
        var2 = arg0;
        var1 = var2.getUint16;
        var0 = arg1;
        var1 = var1.bind(var2)(var0);
        var0 = _closure1_slot19;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot37 = var0;
    var0 = function(arg0, arg1) { // Original name: isSOF2Marker, environment: var3
        var2 = arg0;
        var1 = var2.getUint16;
        var0 = arg1;
        var1 = var1.bind(var2)(var0);
        var0 = _closure1_slot20;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot38 = var0;
    var0 = function(arg0, arg1) { // Original name: isApp2ICCMarker, environment: var3
        _fun37901: for (var _fun37901_ip = 0;;) switch (_fun37901_ip) {
            case 0:
                var6 = arg0;
                var7 = arg1;
                var0 = _closure1_slot15;
                var5 = var0.length;
                var0 = var6.getUint16;
                var2 = var0.bind(var6)(var7);
                var0 = _closure1_slot27;
                var0 = var2 === var0;
                if (!var0) {
                    _fun37901_ip = 91;
                    continue _fun37901
                }
            case 40:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getStringFromDataView;
                var2 = _closure1_slot6;
                var2 = var7 + var2;
                var2 = var3.bind(var4)(var6, var2, var5);
                var1 = _closure1_slot15;
                var0 = var2 === var1;
            case 91:
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function(arg0, arg1) { // Original name: isApp2MPFMarker, environment: var3
        _fun37902: for (var _fun37902_ip = 0;;) switch (_fun37902_ip) {
            case 0:
                var6 = arg0;
                var7 = arg1;
                var0 = _closure1_slot18;
                var5 = var0.length;
                var0 = var6.getUint16;
                var2 = var0.bind(var6)(var7);
                var0 = _closure1_slot27;
                var0 = var2 === var0;
                if (!var0) {
                    _fun37902_ip = 91;
                    continue _fun37902
                }
            case 40:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getStringFromDataView;
                var2 = _closure1_slot6;
                var2 = var7 + var2;
                var2 = var3.bind(var4)(var6, var2, var5);
                var1 = _closure1_slot18;
                var0 = var2 === var1;
            case 91:
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function(arg0, arg1) { // Original name: isApp0JfifMarker, environment: var3
        _fun37903: for (var _fun37903_ip = 0;;) switch (_fun37903_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var0 = _closure1_slot32;
                var4 = var0.length;
                var0 = var3.getUint16;
                var2 = var0.bind(var3)(var5);
                var0 = _closure1_slot25;
                var0 = var2 === var0;
                if (!var0) {
                    _fun37903_ip = 91;
                    continue _fun37903
                }
            case 40:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 1;
                var6 = var6[var2];
                var2 = undefined;
                var7 = var7.bind(var2)(var6);
                var6 = var7.getStringFromDataView;
                var2 = _closure1_slot6;
                var2 = var5 + var2;
                var6 = var6.bind(var7)(var3, var2, var4);
                var2 = _closure1_slot32;
                var0 = var6 === var2;
            case 91:
                if (!var0) {
                    _fun37903_ip = 123;
                    continue _fun37903
                }
            case 94:
                var2 = var3.getUint8;
                var1 = _closure1_slot6;
                var1 = var5 + var1;
                var1 = var1 + var4;
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var0 = var1 === var2;
            case 123:
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = function(arg0, arg1) { // Original name: isApp1ExifMarker, environment: var3
        _fun37904: for (var _fun37904_ip = 0;;) switch (_fun37904_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var0 = _closure1_slot33;
                var4 = var0.length;
                var0 = var3.getUint16;
                var2 = var0.bind(var3)(var5);
                var0 = _closure1_slot26;
                var0 = var2 === var0;
                if (!var0) {
                    _fun37904_ip = 91;
                    continue _fun37904
                }
            case 40:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 1;
                var6 = var6[var2];
                var2 = undefined;
                var7 = var7.bind(var2)(var6);
                var6 = var7.getStringFromDataView;
                var2 = _closure1_slot6;
                var2 = var5 + var2;
                var6 = var6.bind(var7)(var3, var2, var4);
                var2 = _closure1_slot33;
                var0 = var6 === var2;
            case 91:
                if (!var0) {
                    _fun37904_ip = 123;
                    continue _fun37904
                }
            case 94:
                var2 = var3.getUint8;
                var1 = _closure1_slot6;
                var1 = var5 + var1;
                var1 = var1 + var4;
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var0 = var1 === var2;
            case 123:
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var0 = function(arg0, arg1) { // Original name: isApp1XmpMarker, environment: var3
        _fun37905: for (var _fun37905_ip = 0;;) switch (_fun37905_ip) {
            case 0:
                var6 = arg0;
                var7 = arg1;
                var0 = var6.getUint16;
                var2 = var0.bind(var6)(var7);
                var0 = _closure1_slot26;
                var0 = var2 === var0;
                if (!var0) {
                    _fun37905_ip = 91;
                    continue _fun37905
                }
            case 31:
                var2 = _closure1_slot34;
                var5 = var2.length;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getStringFromDataView;
                var2 = _closure1_slot6;
                var2 = var7 + var2;
                var2 = var3.bind(var4)(var6, var2, var5);
                var1 = _closure1_slot34;
                var0 = var2 === var1;
            case 91:
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var0 = function(arg0, arg1) { // Original name: isApp1ExtendedXmpMarker, environment: var3
        _fun37906: for (var _fun37906_ip = 0;;) switch (_fun37906_ip) {
            case 0:
                var6 = arg0;
                var7 = arg1;
                var0 = var6.getUint16;
                var2 = var0.bind(var6)(var7);
                var0 = _closure1_slot26;
                var0 = var2 === var0;
                if (!var0) {
                    _fun37906_ip = 91;
                    continue _fun37906
                }
            case 31:
                var2 = _closure1_slot35;
                var5 = var2.length;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getStringFromDataView;
                var2 = _closure1_slot6;
                var2 = var7 + var2;
                var2 = var3.bind(var4)(var6, var2, var5);
                var1 = _closure1_slot35;
                var0 = var2 === var1;
            case 91:
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = function(arg0, arg1) { // Original name: getXmpChunkDetails, environment: var3
        var0 = {};
        var2 = _closure1_slot11;
        var1 = arg0;
        var1 = var1 + var2;
        var0.dataOffset = var1;
        var2 = arg1;
        var1 = 31;
        var1 = var2 - var1;
        var0.length = var1;
        return var0;
    };
    var _closure1_slot45 = var0;
    var0 = function(arg0, arg1) { // Original name: getExtendedXmpChunkDetails, environment: var3
        var0 = {};
        var2 = _closure1_slot12;
        var1 = arg0;
        var1 = var1 + var2;
        var0.dataOffset = var1;
        var2 = arg1;
        var1 = 77;
        var1 = var2 - var1;
        var0.length = var1;
        return var0;
    };
    var _closure1_slot46 = var0;
    var0 = function(arg0, arg1) { // Original name: isApp13PhotoshopMarker, environment: var3
        _fun37909: for (var _fun37909_ip = 0;;) switch (_fun37909_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var0 = _closure1_slot36;
                var4 = var0.length;
                var0 = var3.getUint16;
                var2 = var0.bind(var3)(var5);
                var0 = _closure1_slot28;
                var0 = var2 === var0;
                if (!var0) {
                    _fun37909_ip = 91;
                    continue _fun37909
                }
            case 40:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 1;
                var6 = var6[var2];
                var2 = undefined;
                var7 = var7.bind(var2)(var6);
                var6 = var7.getStringFromDataView;
                var2 = _closure1_slot6;
                var2 = var5 + var2;
                var6 = var6.bind(var7)(var3, var2, var4);
                var2 = _closure1_slot36;
                var0 = var6 === var2;
            case 91:
                if (!var0) {
                    _fun37909_ip = 123;
                    continue _fun37909
                }
            case 94:
                var2 = var3.getUint8;
                var1 = _closure1_slot6;
                var1 = var5 + var1;
                var1 = var1 + var4;
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var0 = var1 === var2;
            case 123:
                return var0;
        }
    };
    var _closure1_slot47 = var0;
    var0 = function(arg0, arg1) { // Original name: isAppMarker, environment: var3
        _fun37910: for (var _fun37910_ip = 0;;) switch (_fun37910_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.getUint16;
                var0 = arg1;
                var2 = var1.bind(var2)(var0);
                var0 = _closure1_slot25;
                var0 = var2 >= var0;
                if (!var0) {
                    _fun37910_ip = 39;
                    continue _fun37910
                }
            case 31:
                var3 = _closure1_slot29;
                var0 = var2 <= var3;
            case 39:
                if (var0) {
                    _fun37910_ip = 50;
                    continue _fun37910
                }
            case 42:
                var3 = _closure1_slot30;
                var0 = var2 === var3;
            case 50:
                if (var0) {
                    _fun37910_ip = 61;
                    continue _fun37910
                }
            case 53:
                var3 = _closure1_slot19;
                var0 = var2 === var3;
            case 61:
                if (var0) {
                    _fun37910_ip = 72;
                    continue _fun37910
                }
            case 64:
                var3 = _closure1_slot20;
                var0 = var2 === var3;
            case 72:
                if (var0) {
                    _fun37910_ip = 83;
                    continue _fun37910
                }
            case 75:
                var3 = _closure1_slot21;
                var0 = var2 === var3;
            case 83:
                if (var0) {
                    _fun37910_ip = 94;
                    continue _fun37910
                }
            case 86:
                var3 = _closure1_slot22;
                var0 = var2 === var3;
            case 94:
                if (var0) {
                    _fun37910_ip = 105;
                    continue _fun37910
                }
            case 97:
                var3 = _closure1_slot23;
                var0 = var2 === var3;
            case 105:
                if (var0) {
                    _fun37910_ip = 116;
                    continue _fun37910
                }
            case 108:
                var1 = _closure1_slot24;
                var0 = var2 === var1;
            case 116:
                return var0;
        }
    };
    var _closure1_slot48 = var0;
    var0 = function(arg0, arg1) { // Original name: isFillByte, environment: var3
        var2 = arg0;
        var1 = var2.getUint16;
        var0 = arg1;
        var1 = var1.bind(var2)(var0);
        var0 = _closure1_slot31;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot49 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var2);
    var0 = {};
    var2 = function(arg0) { // Original name: isJpegFile, environment: var3
        _fun37912: for (var _fun37912_ip = 0;;) switch (_fun37912_ip) {
            case 0:
                var3 = arg0;
                var1 = !var3;
                var0 = !var1;
                if (var1) {
                    _fun37912_ip = 29;
                    continue _fun37912
                }
            case 12:
                var2 = var3.byteLength;
                var1 = _closure1_slot3;
                var0 = var2 >= var1;
            case 29:
                if (!var0) {
                    _fun37912_ip = 56;
                    continue _fun37912
                }
            case 32:
                var2 = var3.getUint16;
                var1 = 0;
                var2 = var2.bind(var3)(var1);
                var1 = _closure1_slot4;
                var0 = var2 === var1;
            case 56:
                return var0;
        }
    };
    var0.isJpegFile = var2;
    var2 = function(arg0) { // Original name: findJpegOffsets, environment: var3
        _fun37913: for (var _fun37913_ip = 0;;) switch (_fun37913_ip) {
            case 0:
                var30 = arg0;
                var10 = _closure1_slot5;
                var0 = _closure1_slot6;
                var0 = var10 + var0;
                var1 = var30.byteLength;
                var29 = 5;
                var0 = var0 + var29;
                var0 = var0 <= var1;
                var28 = undefined;
                var27 = 16;
                var26 = 0;
                var25 = undefined;
                var24 = undefined;
                var23 = undefined;
                var22 = undefined;
                var21 = undefined;
                var20 = undefined;
                var19 = undefined;
                var18 = undefined;
                var17 = undefined;
                var16 = var10;
                var15 = undefined;
                var14 = undefined;
                var13 = undefined;
                var12 = undefined;
                var7 = undefined;
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                var1 = undefined;
                var10 = var16;
                if (!var0) {
                    _fun37913_ip = 1495;
                    continue _fun37913
                }
            case 96:
                var11 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var26];
                var0 = var11.bind(var28)(var0);
                var0 = var0.USE_FILE;
                if (!var0) {
                    _fun37913_ip = 138;
                    continue _fun37913
                }
            case 122:
                var0 = _closure1_slot37;
                var0 = var0.bind(var28)(var30, var16);
                if (var0) {
                    _fun37913_ip = 1293;
                    continue _fun37913
                }
            case 138:
                var11 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var26];
                var0 = var11.bind(var28)(var0);
                var0 = var0.USE_FILE;
                if (!var0) {
                    _fun37913_ip = 180;
                    continue _fun37913
                }
            case 164:
                var0 = _closure1_slot38;
                var0 = var0.bind(var28)(var30, var16);
                if (var0) {
                    _fun37913_ip = 1231;
                    continue _fun37913
                }
            case 180:
                var11 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var26];
                var0 = var11.bind(var28)(var0);
                var0 = var0.USE_JFIF;
                if (!var0) {
                    _fun37913_ip = 222;
                    continue _fun37913
                }
            case 206:
                var0 = _closure1_slot41;
                var0 = var0.bind(var28)(var30, var16);
                if (var0) {
                    _fun37913_ip = 1169;
                    continue _fun37913
                }
            case 222:
                var11 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var26];
                var0 = var11.bind(var28)(var0);
                var0 = var0.USE_EXIF;
                if (!var0) {
                    _fun37913_ip = 264;
                    continue _fun37913
                }
            case 248:
                var0 = _closure1_slot42;
                var0 = var0.bind(var28)(var30, var16);
                if (var0) {
                    _fun37913_ip = 1104;
                    continue _fun37913
                }
            case 264:
                var11 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var26];
                var0 = var11.bind(var28)(var0);
                var0 = var0.USE_XMP;
                if (!var0) {
                    _fun37913_ip = 306;
                    continue _fun37913
                }
            case 290:
                var0 = _closure1_slot43;
                var0 = var0.bind(var28)(var30, var16);
                if (var0) {
                    _fun37913_ip = 1011;
                    continue _fun37913
                }
            case 306:
                var11 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var26];
                var0 = var11.bind(var28)(var0);
                var0 = var0.USE_XMP;
                if (!var0) {
                    _fun37913_ip = 348;
                    continue _fun37913
                }
            case 332:
                var0 = _closure1_slot44;
                var0 = var0.bind(var28)(var30, var16);
                if (var0) {
                    _fun37913_ip = 918;
                    continue _fun37913
                }
            case 348:
                var11 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var26];
                var0 = var11.bind(var28)(var0);
                var0 = var0.USE_IPTC;
                if (!var0) {
                    _fun37913_ip = 390;
                    continue _fun37913
                }
            case 374:
                var0 = _closure1_slot47;
                var0 = var0.bind(var28)(var30, var16);
                if (var0) {
                    _fun37913_ip = 853;
                    continue _fun37913
                }
            case 390:
                var11 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var26];
                var0 = var11.bind(var28)(var0);
                var0 = var0.USE_ICC;
                if (!var0) {
                    _fun37913_ip = 432;
                    continue _fun37913
                }
            case 416:
                var0 = _closure1_slot39;
                var0 = var0.bind(var28)(var30, var16);
                if (var0) {
                    _fun37913_ip = 699;
                    continue _fun37913
                }
            case 432:
                var11 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var26];
                var0 = var11.bind(var28)(var0);
                var0 = var0.USE_MPF;
                if (!var0) {
                    _fun37913_ip = 474;
                    continue _fun37913
                }
            case 458:
                var0 = _closure1_slot40;
                var0 = var0.bind(var28)(var30, var16);
                if (var0) {
                    _fun37913_ip = 634;
                    continue _fun37913
                }
            case 474:
                var0 = _closure1_slot48;
                var0 = var0.bind(var28)(var30, var16);
                if (var0) {
                    _fun37913_ip = 574;
                    continue _fun37913
                }
            case 487:
                var0 = _closure1_slot49;
                var0 = var0.bind(var28)(var30, var16);
                var7 = var24;
                var8 = var23;
                var6 = var22;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                var2 = var18;
                var1 = var17;
                var10 = var16;
                if (!var0) {
                    _fun37913_ip = 1495;
                    continue _fun37913
                }
            case 530:
                var31 = var16 + 1;
                var39 = var24;
                var38 = var23;
                var37 = var22;
                var36 = var21;
                var35 = var20;
                var34 = var19;
                var33 = var18;
                var32 = var17;
                var43 = var15;
                var42 = var14;
                var41 = var13;
                var40 = var12;
                _fun37913_ip = 1404;
                continue _fun37913;
            case 574:
                var11 = var30.getUint16;
                var0 = _closure1_slot7;
                var0 = var16 + var0;
                var55 = var11.bind(var30)(var0);
                var54 = var24;
                var53 = var23;
                var52 = var22;
                var51 = var21;
                var50 = var20;
                var49 = var19;
                var48 = var18;
                var47 = var17;
                var45 = var15;
                var44 = var14;
                var11 = var13;
                var0 = var12;
                _fun37913_ip = 1353;
                continue _fun37913;
            case 634:
                var56 = var30.getUint16;
                var46 = _closure1_slot7;
                var46 = var16 + var46;
                var55 = var56.bind(var30)(var46);
                var46 = _closure1_slot14;
                var47 = var16 + var46;
                var54 = var24;
                var53 = var23;
                var52 = var22;
                var51 = var21;
                var50 = var20;
                var49 = var19;
                var48 = var18;
                var45 = var15;
                var44 = var14;
                var11 = var13;
                var0 = var12;
                _fun37913_ip = 1353;
                continue _fun37913;
            case 699:
                var56 = var30.getUint16;
                var46 = _closure1_slot7;
                var46 = var16 + var46;
                var60 = var56.bind(var30)(var46);
                var46 = _closure1_slot13;
                var58 = var16 + var46;
                var57 = var60 - var27;
                var56 = var30.getUint8;
                var46 = _closure1_slot16;
                var46 = var16 + var46;
                var56 = var56.bind(var30)(var46);
                var59 = var30.getUint8;
                var46 = _closure1_slot17;
                var46 = var16 + var46;
                var46 = var59.bind(var30)(var46);
                var59 = var18;
                if (var18) {
                    _fun37913_ip = 778;
                    continue _fun37913
                }
            case 774:
                var59 = new Array(0);
            case 778:
                var62 = var59.push;
                var61 = {};
                var61.offset = var58;
                var61.length = var57;
                var61.chunkNumber = var56;
                var61.chunksTotal = var46;
                var61 = var62.bind(var59)(var61);
                var48 = var59;
                var55 = var60;
                var54 = var24;
                var53 = var23;
                var52 = var22;
                var51 = var21;
                var50 = var20;
                var49 = var19;
                var47 = var17;
                var45 = var58;
                var44 = var57;
                var11 = var56;
                var0 = var46;
                _fun37913_ip = 1353;
                continue _fun37913;
            case 853:
                var56 = var30.getUint16;
                var46 = _closure1_slot7;
                var46 = var16 + var46;
                var55 = var56.bind(var30)(var46);
                var46 = _closure1_slot10;
                var50 = var16 + var46;
                var54 = var24;
                var53 = var23;
                var52 = var22;
                var51 = var21;
                var49 = var19;
                var48 = var18;
                var47 = var17;
                var45 = var15;
                var44 = var14;
                var11 = var13;
                var0 = var12;
                _fun37913_ip = 1353;
                continue _fun37913;
            case 918:
                var46 = var19;
                if (var19) {
                    _fun37913_ip = 928;
                    continue _fun37913
                }
            case 924:
                var46 = new Array(0);
            case 928:
                var57 = var30.getUint16;
                var56 = _closure1_slot7;
                var56 = var16 + var56;
                var56 = var57.bind(var30)(var56);
                var58 = var46.push;
                var57 = _closure1_slot46;
                var57 = var57.bind(var28)(var16, var56);
                var57 = var58.bind(var46)(var57);
                var49 = var46;
                var55 = var56;
                var54 = var24;
                var53 = var23;
                var52 = var22;
                var51 = var21;
                var50 = var20;
                var48 = var18;
                var47 = var17;
                var45 = var15;
                var44 = var14;
                var11 = var13;
                var0 = var12;
                _fun37913_ip = 1353;
                continue _fun37913;
            case 1011:
                var46 = var19;
                if (var19) {
                    _fun37913_ip = 1021;
                    continue _fun37913
                }
            case 1017:
                var46 = new Array(0);
            case 1021:
                var57 = var30.getUint16;
                var56 = _closure1_slot7;
                var56 = var16 + var56;
                var56 = var57.bind(var30)(var56);
                var58 = var46.push;
                var57 = _closure1_slot45;
                var57 = var57.bind(var28)(var16, var56);
                var57 = var58.bind(var46)(var57);
                var49 = var46;
                var55 = var56;
                var54 = var24;
                var53 = var23;
                var52 = var22;
                var51 = var21;
                var50 = var20;
                var48 = var18;
                var47 = var17;
                var45 = var15;
                var44 = var14;
                var11 = var13;
                var0 = var12;
                _fun37913_ip = 1353;
                continue _fun37913;
            case 1104:
                var56 = var30.getUint16;
                var46 = _closure1_slot7;
                var46 = var16 + var46;
                var55 = var56.bind(var30)(var46);
                var46 = _closure1_slot9;
                var51 = var16 + var46;
                var54 = var24;
                var53 = var23;
                var52 = var22;
                var50 = var20;
                var49 = var19;
                var48 = var18;
                var47 = var17;
                var45 = var15;
                var44 = var14;
                var11 = var13;
                var0 = var12;
                _fun37913_ip = 1353;
                continue _fun37913;
            case 1169:
                var56 = var30.getUint16;
                var46 = _closure1_slot7;
                var46 = var16 + var46;
                var55 = var56.bind(var30)(var46);
                var46 = _closure1_slot8;
                var52 = var16 + var46;
                var54 = var24;
                var53 = var23;
                var51 = var21;
                var50 = var20;
                var49 = var19;
                var48 = var18;
                var47 = var17;
                var45 = var15;
                var44 = var14;
                var11 = var13;
                var0 = var12;
                _fun37913_ip = 1353;
                continue _fun37913;
            case 1231:
                var56 = var30.getUint16;
                var46 = _closure1_slot7;
                var46 = var16 + var46;
                var55 = var56.bind(var30)(var46);
                var46 = _closure1_slot7;
                var53 = var16 + var46;
                var54 = var24;
                var52 = var22;
                var51 = var21;
                var50 = var20;
                var49 = var19;
                var48 = var18;
                var47 = var17;
                var45 = var15;
                var44 = var14;
                var11 = var13;
                var0 = var12;
                _fun37913_ip = 1353;
                continue _fun37913;
            case 1293:
                var56 = var30.getUint16;
                var46 = _closure1_slot7;
                var46 = var16 + var46;
                var55 = var56.bind(var30)(var46);
                var46 = _closure1_slot7;
                var54 = var16 + var46;
                var53 = var23;
                var52 = var22;
                var51 = var21;
                var50 = var20;
                var49 = var19;
                var48 = var18;
                var47 = var17;
                var45 = var15;
                var44 = var14;
                var11 = var13;
                var0 = var12;
            case 1353:
                var46 = _closure1_slot7;
                var46 = var46 + var55;
                var31 = var16 + var46;
                var25 = var55;
                var39 = var54;
                var38 = var53;
                var37 = var52;
                var36 = var51;
                var35 = var50;
                var34 = var49;
                var33 = var48;
                var32 = var47;
                var43 = var45;
                var42 = var44;
                var41 = var11;
                var40 = var0;
            case 1404:
                var0 = _closure1_slot6;
                var0 = var31 + var0;
                var11 = var30.byteLength;
                var0 = var0 + var29;
                var24 = var39;
                var23 = var38;
                var22 = var37;
                var21 = var36;
                var20 = var35;
                var19 = var34;
                var18 = var33;
                var17 = var32;
                var16 = var31;
                var15 = var43;
                var14 = var42;
                var13 = var41;
                var12 = var40;
                var7 = var24;
                var8 = var23;
                var6 = var22;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                var2 = var18;
                var1 = var17;
                var10 = var16;
                if (var0 <= var11) {
                    _fun37913_ip = 96;
                    continue _fun37913
                }
            case 1495:
                var0 = {};
                var9 = _closure1_slot5;
                var9 = var10 > var9;
                var0.hasAppMarkers = var9;
                if (var7) {
                    _fun37913_ip = 1516;
                    continue _fun37913
                }
            case 1513:
                var7 = var8;
            case 1516:
                var0.fileDataOffset = var7;
                var0.jfifDataOffset = var6;
                var0.tiffHeaderOffset = var5;
                var0.iptcDataOffset = var4;
                var0.xmpChunks = var3;
                var0.iccChunks = var2;
                var0.mpfDataOffset = var1;
                return var0;
        }
    };
    var0.findJpegOffsets = var2;
    var2 = 2;
    var _closure1_slot3 = var2;
    var4 = 65496;
    var _closure1_slot4 = var4;
    var _closure1_slot5 = var2;
    var4 = 4;
    var _closure1_slot6 = var4;
    var _closure1_slot7 = var2;
    var _closure1_slot8 = var2;
    var2 = 10;
    var _closure1_slot9 = var2;
    var2 = 18;
    var _closure1_slot10 = var2;
    var5 = 33;
    var _closure1_slot11 = var5;
    var5 = 79;
    var _closure1_slot12 = var5;
    var _closure1_slot13 = var2;
    var2 = 8;
    var _closure1_slot14 = var2;
    var2 = 'ICC_PROFILE\x00';
    var _closure1_slot15 = var2;
    var2 = var2.length;
    var4 = var4 + var2;
    var _closure1_slot16 = var4;
    var2 = 1;
    var2 = var4 + var2;
    var _closure1_slot17 = var2;
    var2 = 'MPF\x00';
    var _closure1_slot18 = var2;
    var2 = 65472;
    var _closure1_slot19 = var2;
    var2 = 65474;
    var _closure1_slot20 = var2;
    var2 = 65476;
    var _closure1_slot21 = var2;
    var2 = 65499;
    var _closure1_slot22 = var2;
    var2 = 65501;
    var _closure1_slot23 = var2;
    var2 = 65498;
    var _closure1_slot24 = var2;
    var2 = 65504;
    var _closure1_slot25 = var2;
    var2 = 65505;
    var _closure1_slot26 = var2;
    var2 = 65506;
    var _closure1_slot27 = var2;
    var2 = 65517;
    var _closure1_slot28 = var2;
    var2 = 65519;
    var _closure1_slot29 = var2;
    var2 = 65534;
    var _closure1_slot30 = var2;
    var2 = 65535;
    var _closure1_slot31 = var2;
    var2 = 'JFIF';
    var _closure1_slot32 = var2;
    var2 = 'Exif';
    var _closure1_slot33 = var2;
    var2 = 'http://ns.adobe.com/xap/1.0/\x00';
    var _closure1_slot34 = var2;
    var2 = 'http://ns.adobe.com/xmp/extension/\x00';
    var _closure1_slot35 = var2;
    var2 = 'Photoshop 3.0';
    var _closure1_slot36 = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4132, 4129]);