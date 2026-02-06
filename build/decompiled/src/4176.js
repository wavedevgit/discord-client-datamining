// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7() {
        _fun38115: for (var _fun38115_ip = 0;;) switch (_fun38115_ip) {
            case 0:
                var15 = arg0;
                var14 = arg1;
                var13 = arg3;
                var12 = arg4;
                var11 = arg5;
                var10 = arg6;
                var9 = arg7;
                var8 = undefined;
                if (!(var8 !== var9)) {
                    _fun38115_ip = 465;
                    continue _fun38115
                }
            case 30:
                var0 = new Array(0);
                var1 = arg2;
                var7 = var1.items;
                var6 = 0;
                var16 = var6 < var9;
                var4 = 15;
                var3 = 2;
                var2 = 1;
                var1 = 0;
                if (!var16) {
                    _fun38115_ip = 463;
                    continue _fun38115
                }
            case 68:
                var17 = {};
                var16 = new Array(0);
                var17.extents = var16;
                var16 = _closure1_slot3;
                var16 = var16.bind(var8)(var15, var7, var14);
                var17.itemId = var16;
                var16 = var13.item;
                var16 = var16.itemId;
                var18 = var7 + var16;
                if (!(var2 !== var14)) {
                    _fun38115_ip = 121;
                    continue _fun38115
                }
            case 115:
                var16 = undefined;
                if (!(var3 === var14)) {
                    _fun38115_ip = 136;
                    continue _fun38115
                }
            case 121:
                var19 = var15.getUint16;
                var19 = var19.bind(var15)(var18);
                var16 = var4 & var19;
            case 136:
                var17.constructionMethod = var16;
                var16 = var13.item;
                var16 = var16.constructionMethod;
                var18 = var18 + var16;
                var16 = var15.getUint16;
                var16 = var16.bind(var15)(var18);
                var17.dataReferenceIndex = var16;
                var16 = var13.item;
                var16 = var16.dataReferenceIndex;
                var18 = var18 + var16;
                var19 = _closure1_slot5;
                var16 = var13.item;
                var16 = var16.baseOffset;
                var16 = var19.bind(var8)(var15, var18, var16);
                var17.baseOffset = var16;
                var16 = var13.item;
                var16 = var16.baseOffset;
                var18 = var18 + var16;
                var16 = var15.getUint16;
                var16 = var16.bind(var15)(var18);
                var17.extentCount = var16;
                var16 = var13.item;
                var16 = var16.extentCount;
                var19 = var18 + var16;
                var16 = var17.extentCount;
                var16 = var6 < var16;
                var18 = 0;
                var7 = var19;
                if (!var16) {
                    _fun38115_ip = 443;
                    continue _fun38115
                }
            case 285:
                var22 = {};
                var16 = _closure1_slot4;
                var27 = undefined;
                var26 = var15;
                var25 = var14;
                var24 = var19;
                var23 = var10;
                var16 = var27[var16](var26, var25, var24, var23, var22);
                var22.extentIndex = var16;
                var16 = var13.item;
                var16 = var16.extent;
                var16 = var16.extentIndex;
                var21 = var19 + var16;
                var16 = _closure1_slot5;
                var20 = var16.bind(var8)(var15, var21, var12);
                var22.extentOffset = var20;
                var20 = var13.item;
                var20 = var20.extent;
                var20 = var20.extentOffset;
                var20 = var21 + var20;
                var16 = var16.bind(var8)(var15, var20, var11);
                var22.extentLength = var16;
                var16 = var13.item;
                var16 = var16.extent;
                var16 = var16.extentLength;
                var19 = var20 + var16;
                var21 = var17.extents;
                var16 = var21.push;
                var16 = var16.bind(var21)(var22);
                var18 = var18 + 1;
                var16 = var17.extentCount;
                var7 = var19;
                if (var18 < var16) {
                    _fun38115_ip = 285;
                    continue _fun38115
                }
            case 443:
                var16 = var0.push;
                var16 = var16.bind(var0)(var17);
                var1 = var1 + 1;
                if (var1 < var9) {
                    _fun38115_ip = 68;
                    continue _fun38115
                }
            case 463:
                return var0;
            case 465:
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = function arg0, arg1, arg2() {
        _fun38116: for (var _fun38116_ip = 0;;) switch (_fun38116_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var4 = arg2;
                var1 = 2;
                if (!(!(var4 < var1))) {
                    _fun38116_ip = 35;
                    continue _fun38116
                }
            case 16:
                var0 = undefined;
                if (!(var1 === var4)) {
                    _fun38116_ip = 33;
                    continue _fun38116
                }
            case 22:
                var1 = var3.getUint32;
                var0 = var1.bind(var3)(var2);
            case 33:
                _fun38116_ip = 46;
                continue _fun38116;
            case 35:
                var1 = var3.getUint16;
                var0 = var1.bind(var3)(var2);
            case 46:
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var2 = function arg0, arg1, arg2, arg3() {
        _fun38117: for (var _fun38117_ip = 0;;) switch (_fun38117_ip) {
            case 0:
                var1 = arg1;
                var4 = arg3;
                var0 = 1;
                if (!(var0 !== var1)) {
                    _fun38117_ip = 20;
                    continue _fun38117
                }
            case 13:
                var0 = 2;
                if (!(var0 === var1)) {
                    _fun38117_ip = 26;
                    continue _fun38117
                }
            case 20:
                var0 = 0;
                if (!(!(var4 > var0))) {
                    _fun38117_ip = 30;
                    continue _fun38117
                }
            case 26:
                var0 = undefined;
                return var0;
            case 30:
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = arg0;
                var0 = arg2;
                var0 = var3.bind(var2)(var1, var0, var4);
                return var0;
        }
    };
    var _closure1_slot4 = var2;
    var2 = function arg0, arg1, arg2() {
        _fun38118: for (var _fun38118_ip = 0;;) switch (_fun38118_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var5 = arg2;
                var0 = 4;
                if (!(var0 !== var5)) {
                    _fun38118_ip = 87;
                    continue _fun38118
                }
            case 16:
                var4 = 0;
                var1 = 8;
                var0 = 0;
                if (!(var1 === var5)) {
                    _fun38118_ip = 85;
                    continue _fun38118
                }
            case 27:
                var1 = global;
                var6 = var1.console;
                var5 = var6.warn;
                var1 = 'This file uses an 8-bit offset which is currently not supported by ExifReader. Contact the maintainer to get it fixed.';
                var1 = var5.bind(var6)(var1);
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = var1[var4];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var1 = var4.get64BitValue;
                var0 = var1.bind(var4)(var3, var2);
            case 85:
                _fun38118_ip = 98;
                continue _fun38118;
            case 87:
                var1 = var3.getUint32;
                var0 = var1.bind(var3)(var2);
            case 98:
                return var0;
        }
    };
    var _closure1_slot5 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0, arg1, arg2, arg3() {
        _fun38119: for (var _fun38119_ip = 0;;) switch (_fun38119_ip) {
            case 0:
                var10 = arg0;
                var9 = arg1;
                var1 = arg2;
                var0 = 3;
                var2 = var1 + var0;
                var4 = {};
                var1 = {
                    'dataReferenceIndex': 2,
                    'extentCount': 2
                };
                var0 = 2;
                var3 = {};
                var1.extent = var3;
                var4.item = var1;
                if (!(!(var9 < var0))) {
                    _fun38119_ip = 76;
                    continue _fun38119
                }
            case 50:
                if (!(var0 === var9)) {
                    _fun38119_ip = 93;
                    continue _fun38119
                }
            case 54:
                var3 = 4;
                var4.itemCount = var3;
                var1 = var4.item;
                var1.itemId = var3;
                _fun38119_ip = 93;
                continue _fun38119;
            case 76:
                var4.itemCount = var0;
                var1 = var4.item;
                var1.itemId = var0;
            case 93:
                var6 = var4.item;
                var3 = 1;
                var1 = var3 === var9;
                if (var1) {
                    _fun38119_ip = 114;
                    continue _fun38119
                }
            case 108:
                var5 = 0;
                if (!(var0 === var9)) {
                    _fun38119_ip = 117;
                    continue _fun38119
                }
            case 114:
                var5 = var0;
            case 117:
                var6.constructionMethod = var5;
                var5 = {};
                var5.offsetSize = var2;
                var5.lengthSize = var2;
                var3 = var2 + var3;
                var5.baseOffsetSize = var3;
                var5.indexSize = var3;
                var2 = var2 + var0;
                var5.itemCount = var2;
                var3 = var5.itemCount;
                var2 = var4.itemCount;
                var2 = var3 + var2;
                var5.items = var2;
                var3 = {};
                var2 = 0;
                var3.itemId = var2;
                var5.item = var3;
                var6 = var5.item;
                var3 = var5.item;
                var7 = var3.itemId;
                var3 = var4.item;
                var3 = var3.itemId;
                var3 = var7 + var3;
                var6.constructionMethod = var3;
                var6 = var5.item;
                var3 = var5.item;
                var7 = var3.constructionMethod;
                var3 = var4.item;
                var3 = var3.constructionMethod;
                var3 = var7 + var3;
                var6.dataReferenceIndex = var3;
                var3 = {};
                var3.offsets = var5;
                var3.sizes = var4;
                var8 = var3.offsets;
                var7 = var3.sizes;
                var4 = var10.getUint8;
                var3 = var8.offsetSize;
                var3 = var4.bind(var10)(var3);
                var11 = 4;
                var6 = var3 >> var11;
                var3 = var7.item;
                var3 = var3.extent;
                var3.extentOffset = var6;
                var4 = var10.getUint8;
                var3 = var8.lengthSize;
                var4 = var4.bind(var10)(var3);
                var3 = 15;
                var5 = var3 & var4;
                var4 = var7.item;
                var4 = var4.extent;
                var4.extentLength = var5;
                var12 = var10.getUint8;
                var4 = var8.baseOffsetSize;
                var4 = var12.bind(var10)(var4);
                var11 = var4 >> var11;
                var4 = var7.item;
                var4.baseOffset = var11;
                var11 = var8.indexSize;
                if (var1) {
                    _fun38119_ip = 423;
                    continue _fun38119
                }
            case 417:
                var4 = undefined;
                if (!(var0 === var9)) {
                    _fun38119_ip = 438;
                    continue _fun38119
                }
            case 423:
                var1 = var10.getUint8;
                var1 = var1.bind(var10)(var11);
                var4 = var3 & var1;
            case 438:
                var1 = var7.item;
                var1 = var1.extent;
                var3 = undefined;
                var2 = 0;
                if (!(var3 !== var4)) {
                    _fun38119_ip = 460;
                    continue _fun38119
                }
            case 457:
                var2 = var4;
            case 460:
                var1.extentIndex = var2;
                var1 = var8.itemCount;
                if (!(!(var9 < var0))) {
                    _fun38119_ip = 495;
                    continue _fun38119
                }
            case 476:
                var2 = undefined;
                if (!(var0 === var9)) {
                    _fun38119_ip = 506;
                    continue _fun38119
                }
            case 482:
                var0 = var10.getUint32;
                var2 = var0.bind(var10)(var1);
                _fun38119_ip = 506;
                continue _fun38119;
            case 495:
                var0 = var10.getUint16;
                var2 = var0.bind(var10)(var1);
            case 506:
                var0 = {};
                var1 = 'iloc';
                var0.type = var1;
                var1 = _closure1_slot2;
                var21 = undefined;
                var20 = var10;
                var19 = var9;
                var18 = var8;
                var17 = var7;
                var16 = var6;
                var15 = var5;
                var14 = var4;
                var13 = var2;
                var1 = var21[var1](var20, var19, var18, var17, var16, var15, var14, var13, var12);
                var0.items = var1;
                var1 = arg3;
                var0.length = var1;
                return var0;
        }
    };
    var1.parseItemLocationBox = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4177]);