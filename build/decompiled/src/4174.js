// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = metroImportDefault;
    var _closure1_slot1 = var2;
    var2 = dependencyMap;
    var _closure1_slot2 = var2;
    var2 = function arg0, arg1() {
        _fun38100: for (var _fun38100_ip = 0;;) switch (_fun38100_ip) {
            case 0:
                var6 = arg0;
                var3 = arg1;
                var1 = function arg0, arg1() {
                    _fun38101: for (var _fun38101_ip = 0;;) switch (_fun38101_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = arg1;
                            var0 = var2.getUint32;
                            var3 = var0.bind(var2)(var1);
                            var5 = 0;
                            if (!(var5 !== var3)) {
                                _fun38101_ip = 122;
                                continue _fun38101
                            }
                        case 23:
                            var0 = 1;
                            if (!(var0 === var3)) {
                                _fun38101_ip = 52;
                                continue _fun38101
                            }
                        case 30:
                            var6 = var2.getUint32;
                            var4 = 8;
                            var0 = var1 + var4;
                            var0 = var6.bind(var2)(var0);
                            if (!(var5 !== var0)) {
                                _fun38101_ip = 76;
                                continue _fun38101
                            }
                        case 52:
                            var0 = {};
                            var0.length = var3;
                            var5 = 4;
                            var3 = var1 + var5;
                            var3 = var3 + var5;
                            var0.contentOffset = var3;
                            return var0;
                        case 76:
                            var0 = {};
                            var5 = var2.getUint32;
                            var3 = 12;
                            var3 = var1 + var3;
                            var3 = var5.bind(var2)(var3);
                            var0.length = var3;
                            var5 = 4;
                            var3 = var1 + var5;
                            var3 = var3 + var5;
                            var3 = var3 + var4;
                            var0.contentOffset = var3;
                            return var0;
                        case 122:
                            var0 = {};
                            var2 = var2.byteLength;
                            var2 = var2 - var1;
                            var0.length = var2;
                            var2 = 4;
                            var1 = var1 + var2;
                            var1 = var1 + var2;
                            var0.contentOffset = var1;
                            return var0;
                    }
                };
                var0 = undefined;
                var1 = var1.bind(var0)(var6, var3);
                var2 = var1.length;
                var5 = var1.contentOffset;
                var1 = 8;
                if (!(!(var2 < var1))) {
                    _fun38100_ip = 1044;
                    continue _fun38100
                }
            case 42:
                var8 = var6.getUint32;
                var4 = 4;
                var1 = var3 + var4;
                var8 = var8.bind(var6)(var1);
                var1 = 1718909296;
                if (!(var1 !== var8)) {
                    _fun38100_ip = 985;
                    continue _fun38100
                }
            case 73:
                var1 = 1768977008;
                if (!(var1 !== var8)) {
                    _fun38100_ip = 940;
                    continue _fun38100
                }
            case 86:
                var1 = 1768973167;
                if (!(var1 !== var8)) {
                    _fun38100_ip = 895;
                    continue _fun38100
                }
            case 99:
                var1 = 1668246642;
                if (!(var1 !== var8)) {
                    _fun38100_ip = 859;
                    continue _fun38100
                }
            case 112:
                var1 = var6.getUint8;
                var10 = var1.bind(var6)(var5);
                var1 = 1835365473;
                if (!(var1 !== var8)) {
                    _fun38100_ip = 799;
                    continue _fun38100
                }
            case 136:
                var1 = 1768714083;
                if (!(var1 !== var8)) {
                    _fun38100_ip = 746;
                    continue _fun38100
                }
            case 149:
                var1 = 1768517222;
                if (!(var1 !== var8)) {
                    _fun38100_ip = 714;
                    continue _fun38100
                }
            case 162:
                var1 = 1768842853;
                if (!(var1 !== var8)) {
                    _fun38100_ip = 187;
                    continue _fun38100
                }
            case 172:
                var1 = {};
                var1.type = var0;
                var1.length = var2;
                _fun38100_ip = 712;
                continue _fun38100;
            case 187:
                var11 = 1;
                var8 = var5 + var11;
                var13 = 3;
                var9 = var8 + var13;
                var8 = {};
                var12 = 'infe';
                var8.type = var12;
                var8.length = var2;
                var12 = 0;
                var14 = var12 !== var10;
                if (!var14) {
                    _fun38100_ip = 230;
                    continue _fun38100
                }
            case 226:
                var14 = var11 !== var10;
            case 230:
                var12 = var9;
                if (var14) {
                    _fun38100_ip = 338;
                    continue _fun38100
                }
            case 236:
                var14 = var6.getUint16;
                var14 = var14.bind(var6)(var9);
                var8.itemId = var14;
                var16 = 2;
                var9 = var9 + var16;
                var14 = var6.getUint16;
                var14 = var14.bind(var6)(var9);
                var8.itemProtectionIndex = var14;
                var14 = var9 + var16;
                var15 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var16];
                var15 = var15.bind(var0)(var9);
                var9 = var15.getNullTerminatedStringFromDataView;
                var9 = var9.bind(var15)(var6, var14);
                var8.itemName = var9;
                var9 = var8.itemName;
                var9 = var9.length;
                var9 = var9 + var11;
                var12 = var14 + var9;
            case 338:
                var14 = 2;
                var1 = var8;
                if (!(var10 >= var14)) {
                    _fun38100_ip = 712;
                    continue _fun38100
                }
            case 351:
                if (!(var14 !== var10)) {
                    _fun38100_ip = 385;
                    continue _fun38100
                }
            case 355:
                var9 = var12;
                if (!(var13 === var10)) {
                    _fun38100_ip = 406;
                    continue _fun38100
                }
            case 362:
                var13 = var6.getUint32;
                var13 = var13.bind(var6)(var12);
                var8.itemId = var13;
                var9 = var12 + var4;
                _fun38100_ip = 406;
                continue _fun38100;
            case 385:
                var13 = var6.getUint16;
                var13 = var13.bind(var6)(var12);
                var8.itemId = var13;
                var9 = var12 + var14;
            case 406:
                var12 = var6.getUint16;
                var12 = var12.bind(var6)(var9);
                var8.itemProtectionIndex = var12;
                var9 = var9 + var14;
                var12 = var6.getUint32;
                var12 = var12.bind(var6)(var9);
                var8.itemType = var12;
                var13 = var9 + var4;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var14];
                var15 = var15.bind(var0)(var12);
                var12 = var15.getNullTerminatedStringFromDataView;
                var12 = var12.bind(var15)(var6, var13);
                var8.itemName = var12;
                var12 = var8.itemName;
                var12 = var12.length;
                var12 = var12 + var11;
                var15 = var13 + var12;
                var13 = var8.itemType;
                var12 = _closure1_slot4;
                if (!(var13 !== var12)) {
                    _fun38100_ip = 594;
                    continue _fun38100
                }
            case 519:
                var13 = var8.itemType;
                var12 = _closure1_slot5;
                var1 = var8;
                if (!(var13 === var12)) {
                    _fun38100_ip = 712;
                    continue _fun38100
                }
            case 539:
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var14];
                var13 = var13.bind(var0)(var12);
                var12 = var13.getNullTerminatedStringFromDataView;
                var12 = var12.bind(var13)(var6, var15);
                var8.itemUri = var12;
                var12 = var8.itemUri;
                var12 = var12.length;
                var12 = var12 + var11;
                var1 = var8;
                _fun38100_ip = 712;
                continue _fun38100;
            case 594:
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var14];
                var13 = var13.bind(var0)(var12);
                var12 = var13.getNullTerminatedStringFromDataView;
                var12 = var12.bind(var13)(var6, var15);
                var8.contentType = var12;
                var12 = var3 + var2;
                var13 = var8.contentType;
                var13 = var13.length;
                var13 = var13 + var11;
                var13 = var15 + var13;
                var1 = var8;
                if (!(var12 > var13)) {
                    _fun38100_ip = 712;
                    continue _fun38100
                }
            case 659:
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var14];
                var12 = var12.bind(var0)(var9);
                var9 = var12.getNullTerminatedStringFromDataView;
                var9 = var9.bind(var12)(var6, var13);
                var8.contentEncoding = var9;
                var9 = var8.contentEncoding;
                var9 = var9.length;
                var9 = var9 + var11;
                var1 = var8;
            case 712:
                _fun38100_ip = 744;
                continue _fun38100;
            case 714:
                var8 = 1;
                var18 = var5 + var8;
                var7 = function arg0, arg1, arg2, arg3, arg4() {
                    _fun38102: for (var _fun38102_ip = 0;;) switch (_fun38102_ip) {
                        case 0:
                            var1 = arg4;
                            var2 = {};
                            var3 = arg3;
                            var0 = 3;
                            var0 = var3 + var0;
                            var2.entryCount = var0;
                            var0 = {};
                            var3 = 4;
                            var5 = 0;
                            var4 = arg2;
                            if (!(var5 === var4)) {
                                _fun38102_ip = 37;
                                continue _fun38102
                            }
                        case 34:
                            var3 = 2;
                        case 37:
                            var0.entryCount = var3;
                            var3 = var2.entryCount;
                            var0 = var0.entryCount;
                            var0 = var3 + var0;
                            var2.itemInfos = var0;
                            var0 = {};
                            var0.offsets = var2;
                            var2 = var0.offsets;
                            var0 = {};
                            var3 = 'iinf';
                            var0.type = var3;
                            var6 = _closure1_slot9;
                            var5 = var2.itemInfos;
                            var3 = var2.itemInfos;
                            var2 = arg1;
                            var2 = var3 - var2;
                            var4 = var1 - var2;
                            var3 = undefined;
                            var2 = arg0;
                            var2 = var6.bind(var3)(var2, var5, var4);
                            var0.itemInfos = var2;
                            var0.length = var1;
                            return var0;
                    }
                };
                var22 = undefined;
                var21 = var6;
                var20 = var3;
                var19 = var10;
                var17 = var2;
                var1 = var22[var7](var21, var20, var19, var18, var17, var16);
            case 744:
                _fun38100_ip = 797;
                continue _fun38100;
            case 746:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 0;
                var7 = var9[var7];
                var9 = var8.bind(var0)(var7);
                var8 = var9.parseItemLocationBox;
                var7 = 1;
                var19 = var5 + var7;
                var22 = var9;
                var21 = var6;
                var20 = var10;
                var18 = var2;
                var1 = var22[var8](var21, var20, var19, var18, var17);
            case 797:
                _fun38100_ip = 857;
                continue _fun38100;
            case 799:
                var7 = 1;
                var9 = var5 + var7;
                var7 = {};
                var8 = 'meta';
                var7.type = var8;
                var10 = _closure1_slot9;
                var8 = 3;
                var9 = var9 + var8;
                var8 = var9 - var3;
                var8 = var2 - var8;
                var8 = var10.bind(var0)(var6, var9, var8);
                var7.subBoxes = var8;
                var7.length = var2;
                var1 = var7;
            case 857:
                return var1;
            case 859:
                var1 = {};
                var7 = 'colr';
                var1.type = var7;
                var7 = _closure1_slot8;
                var7 = var7.bind(var0)(var6, var5);
                var1.icc = var7;
                var1.length = var2;
                return var1;
            case 895:
                var1 = {};
                var7 = 'ipco';
                var1.type = var7;
                var8 = _closure1_slot9;
                var7 = var5 - var3;
                var7 = var2 - var7;
                var7 = var8.bind(var0)(var6, var5, var7);
                var1.properties = var7;
                var1.length = var2;
                return var1;
            case 940:
                var1 = {};
                var7 = 'iprp';
                var1.type = var7;
                var7 = _closure1_slot9;
                var3 = var5 - var3;
                var3 = var2 - var3;
                var3 = var7.bind(var0)(var6, var5, var3);
                var1.subBoxes = var3;
                var1.length = var2;
                return var1;
            case 985:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 2;
                var1 = var7[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.getStringFromDataView;
                var3 = var1.bind(var3)(var6, var5, var4);
                var1 = {};
                var4 = 'ftyp';
                var1.type = var4;
                var1.majorBrand = var3;
                var1.length = var2;
                return var1;
            case 1044:
                return var0;
        }
    };
    var _closure1_slot6 = var2;
    var3 = function arg0, arg1() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg0;
        var3 = var1.subBoxes;
        var2 = var3.find;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.type;
            var0 = 'iloc';
            var0 = var0 === var1;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var2 = var1.items;
        var1 = var2.find;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.itemId;
            var0 = _closure2_slot0;
            var0 = var1 === var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot7 = var3;
    var3 = function arg0, arg1() {
        _fun38106: for (var _fun38106_ip = 0;;) switch (_fun38106_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var2 = var5.getStringFromDataView;
                var1 = 4;
                var5 = var2.bind(var5)(var3, var4, var1);
                var2 = 'prof';
                if (!(var2 !== var5)) {
                    _fun38106_ip = 69;
                    continue _fun38106
                }
            case 57:
                var2 = 'rICC';
                if (!(var2 !== var5)) {
                    _fun38106_ip = 69;
                    continue _fun38106
                }
            case 67:
                return var0;
            case 69:
                var0 = {};
                var2 = var4 + var1;
                var0.offset = var2;
                var2 = var3.getUint32;
                var1 = var4 + var1;
                var1 = var2.bind(var3)(var1);
                var0.length = var1;
                var1 = 1;
                var0.chunkNumber = var1;
                var0.chunksTotal = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = function arg0, arg1, arg2() {
        _fun38107: for (var _fun38107_ip = 0;;) switch (_fun38107_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var7 = arg2;
                var0 = _closure1_slot3;
                var5 = new Array(2);
                var5[0] = var0;
                var0 = _closure1_slot4;
                var5[1] = var0;
                var0 = new Array(0);
                var1 = var8 + var7;
                var4 = -1;
                var3 = undefined;
                var2 = var8;
                if (!(var2 < var1)) {
                    _fun38107_ip = 151;
                    continue _fun38107
                }
            case 55:
                var1 = _closure1_slot6;
                var1 = var1.bind(var3)(var9, var2);
                var10 = var2;
                if (!(var3 !== var1)) {
                    _fun38107_ip = 151;
                    continue _fun38107
                }
            case 72:
                var11 = var1.type;
                var11 = var3 === var11;
                if (var11) {
                    _fun38107_ip = 121;
                    continue _fun38107
                }
            case 84:
                var12 = var1.itemType;
                var12 = var3 !== var12;
                if (!var12) {
                    _fun38107_ip = 118;
                    continue _fun38107
                }
            case 97:
                var14 = var5.indexOf;
                var13 = var1.itemType;
                var13 = var14.bind(var5)(var13);
                var12 = var4 === var13;
            case 118:
                var11 = var12;
            case 121:
                if (var11) {
                    _fun38107_ip = 134;
                    continue _fun38107
                }
            case 124:
                var11 = var0.push;
                var11 = var11.bind(var0)(var1);
            case 134:
                var1 = var1.length;
                var2 = var10 + var1;
                var1 = var8 + var7;
                if (var2 < var1) {
                    _fun38107_ip = 55;
                    continue _fun38107
                }
            case 151:
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var4 = 1165519206;
    var _closure1_slot3 = var4;
    var3 = 1835625829;
    var _closure1_slot4 = var3;
    var5 = 1970432288;
    var _closure1_slot5 = var5;
    var1.ITEM_INFO_TYPE_EXIF = var4;
    var1.ITEM_INFO_TYPE_MIME = var3;
    var1.parseBox = var2;
    var0 = function arg0() {
        _fun38108: for (var _fun38108_ip = 0;;) switch (_fun38108_ip) {
            case 0:
                var8 = arg0;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var7 = 1;
                var0 = var0[var7];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var0 = var0.USE_EXIF;
                if (var0) {
                    _fun38108_ip = 95;
                    continue _fun38108
                }
            case 39:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var1.bind(var4)(var0);
                var0 = var0.USE_XMP;
                if (var0) {
                    _fun38108_ip = 95;
                    continue _fun38108
                }
            case 65:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var1.bind(var4)(var0);
                var0 = var0.USE_ICC;
                if (var0) {
                    _fun38108_ip = 95;
                    continue _fun38108
                }
            case 91:
                var0 = {};
                return var0;
            case 95:
                var1 = {};
                var3 = var8.byteLength;
                var0 = 8;
                var0 = var0 <= var3;
                var9 = 4;
                var6 = 'meta';
                var10 = 0;
                var3 = undefined;
                if (!var0) {
                    _fun38108_ip = 187;
                    continue _fun38108
                }
            case 124:
                var0 = _closure1_slot6;
                var0 = var0.bind(var4)(var8, var10);
                var11 = var10;
                var3 = undefined;
                if (!(var4 !== var0)) {
                    _fun38108_ip = 187;
                    continue _fun38108
                }
            case 143:
                var12 = var0.type;
                var3 = var0;
                if (!(var6 !== var12)) {
                    _fun38108_ip = 187;
                    continue _fun38108
                }
            case 155:
                var0 = var0.length;
                var10 = var11 + var0;
                var0 = var10 + var9;
                var11 = var8.byteLength;
                var0 = var0 + var9;
                var0 = var0 <= var11;
                var3 = undefined;
                if (var0) {
                    _fun38108_ip = 124;
                    continue _fun38108
                }
            case 187:
                if (var3) {
                    _fun38108_ip = 204;
                    continue _fun38108
                }
            case 190:
                var0 = {};
                var6 = false;
                var0.hasAppMarkers = var6;
                _fun38108_ip = 376;
                continue _fun38108;
            case 204:
                var9 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var9.bind(var4)(var6);
                var6 = var6.USE_EXIF;
                if (!var6) {
                    _fun38108_ip = 247;
                    continue _fun38108
                }
            case 230:
                var6 = function arg0, arg1() {
                    _fun38109: for (var _fun38109_ip = 0;;) switch (_fun38109_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = arg1;
                        case 6: // try_start_0
                            var4 = var0;
                            var0 = function arg0() {
                                var1 = arg0;
                                var3 = var1.subBoxes;
                                var2 = var3.find;
                                var1 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.type;
                                    var0 = 'iinf';
                                    var0 = var0 === var1;
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                var2 = var1.itemInfos;
                                var1 = var2.find;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.itemType;
                                    var0 = _closure1_slot3;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var3 = undefined;
                            var0 = var0.bind(var3)(var4);
                            var2 = var0.itemId;
                            var0 = _closure1_slot7;
                            var0 = var0.bind(var3)(var4, var2);
                            var3 = var1;
                            var1 = var0.baseOffset;
                            var2 = var0.extents;
                            var0 = 0;
                            var0 = var2[var0];
                            var0 = var0.extentOffset;
                            var2 = var1 + var0;
                            var0 = 4;
                            var1 = var2 + var0;
                            var0 = var3.getUint32;
                            var0 = var0.bind(var3)(var2);
                            var0 = var1 + var0;
                        case 95: // try_end0
                            return var0;
                        case 97: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var6.bind(var4)(var8, var3);
                var1.tiffHeaderOffset = var6;
            case 247:
                var8 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.USE_XMP;
                if (!var6) {
                    _fun38108_ip = 289;
                    continue _fun38108
                }
            case 273:
                var6 = function arg0() {
                    _fun38113: for (var _fun38113_ip = 0;;) switch (_fun38113_ip) {
                        case 0:
                            var0 = arg0;
                        case 3: // try_start_0
                            var4 = var0;
                            var0 = function arg0() {
                                var1 = arg0;
                                var3 = var1.subBoxes;
                                var2 = var3.find;
                                var1 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.type;
                                    var0 = 'iinf';
                                    var0 = var0 === var1;
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                var2 = var1.itemInfos;
                                var1 = var2.find;
                                var0 = function(arg0) { // Environment: var0
                                    _fun38116: for (var _fun38116_ip = 0;;) switch (_fun38116_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var2 = var1.itemType;
                                            var0 = _closure1_slot4;
                                            var0 = var2 === var0;
                                            if (!var0) {
                                                _fun38116_ip = 39;
                                                continue _fun38116
                                            }
                                        case 23:
                                            var2 = var1.contentType;
                                            var1 = 'application/rdf+xml';
                                            var0 = var1 === var2;
                                        case 39:
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var3 = undefined;
                            var0 = var0.bind(var3)(var4);
                            var1 = var0.itemId;
                            var0 = _closure1_slot7;
                            var2 = var0.bind(var3)(var4, var1);
                            var0 = var0.bind(var3)(var4, var1);
                            var1 = var0.extents;
                            var0 = 0;
                            var0 = var1[var0];
                            var1 = {};
                            var3 = var2.baseOffset;
                            var2 = var0.extentOffset;
                            var2 = var3 + var2;
                            var1.dataOffset = var2;
                            var0 = var0.extentLength;
                            var1.length = var0;
                            var0 = new Array(1);
                            var0[0] = var1;
                        case 98: // try_end0
                            return var0;
                        case 100: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var6.bind(var4)(var3);
                var1.xmpChunks = var6;
            case 289:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var6.bind(var4)(var5);
                var5 = var5.USE_ICC;
                if (!var5) {
                    _fun38108_ip = 331;
                    continue _fun38108
                }
            case 315:
                var2 = function arg0() {
                    _fun38117: for (var _fun38117_ip = 0;;) switch (_fun38117_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = undefined;
                            var1 = undefined;
                        case 9: // try_start_0
                            var5 = var3.subBoxes;
                            var4 = var5.find;
                            var3 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = 'iprp';
                                var0 = var0 === var1;
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3);
                            var5 = var3.subBoxes;
                            var4 = var5.find;
                            var3 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = 'ipco';
                                var0 = var0 === var1;
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3);
                            var4 = var3.properties;
                            var3 = var4.find;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = 'colr';
                                var0 = var0 === var1;
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.icc;
                            var1 = var2;
                            if (var2) {
                                _fun38117_ip = 86;
                                continue _fun38117
                            }
                        case 84: // try_end0
                            _fun38117_ip = 101;
                            continue _fun38117;
                        case 86: // try_start_1
                            var2 = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                        case 97: // try_end1
                            return var1;
                        case 99: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register = 1);
                        case 101:
                            return var0;
                    }
                };
                var2 = var2.bind(var4)(var3);
                var1.iccChunks = var2;
            case 331:
                var2 = var1.tiffHeaderOffset;
                var2 = var4 !== var2;
                if (var2) {
                    _fun38108_ip = 354;
                    continue _fun38108
                }
            case 344:
                var3 = var1.xmpChunks;
                var2 = var4 !== var3;
            case 354:
                if (var2) {
                    _fun38108_ip = 367;
                    continue _fun38108
                }
            case 357:
                var3 = var1.iccChunks;
                var2 = var4 !== var3;
            case 367:
                var1.hasAppMarkers = var2;
                var0 = var1;
            case 376:
                return var0;
        }
    };
    var1.findOffsets = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4175, 4168, 4165]);