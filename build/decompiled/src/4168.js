// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var0 = dependencyMap;
    var _closure1_slot2 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: getImageNumberValue, environment: var3
        _fun38248: for (var _fun38248_ip = 0;;) switch (_fun38248_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var4 = arg2;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 0;
                var2 = var1[var0];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.LITTLE_ENDIAN;
                var1 = arg3;
                if (!(var1 !== var2)) {
                    _fun38248_ip = 105;
                    continue _fun38248
                }
            case 46:
                var9 = var0 < var4;
                var8 = 1;
                var7 = 8;
                var3 = 0;
                var2 = 0;
                var1 = 0;
                if (!var9) {
                    _fun38248_ip = 103;
                    continue _fun38248
                }
            case 65:
                var9 = var5 + var2;
                var10 = var6[var9];
                var9 = var4 - var8;
                var9 = var9 - var2;
                var9 = var7 * var9;
                var9 = var10 << var9;
                var3 = var3 + var9;
                var2 = var2 + 1;
                var1 = var3;
                if (var2 < var4) {
                    _fun38248_ip = 65;
                    continue _fun38248
                }
            case 103:
                return var1;
            case 105:
                var7 = var0 < var4;
                var3 = 8;
                var2 = 0;
                var1 = 0;
                var0 = 0;
                if (!var7) {
                    _fun38248_ip = 151;
                    continue _fun38248
                }
            case 121:
                var7 = var5 + var1;
                var8 = var6[var7];
                var7 = var3 * var1;
                var7 = var8 << var7;
                var2 = var2 + var7;
                var1 = var1 + 1;
                var0 = var2;
                if (var1 < var4) {
                    _fun38248_ip = 121;
                    continue _fun38248
                }
            case 151:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function(arg0) { // Original name: getImageFlags, environment: var3
        _fun38249: for (var _fun38249_ip = 0;;) switch (_fun38249_ip) {
            case 0:
                var3 = arg0;
                var0 = 31;
                var2 = var3 >> var0;
                var1 = new Array(3);
                var0 = 1;
                var2 = var2 & var0;
                var1[0] = var2;
                var2 = 30;
                var2 = var3 >> var2;
                var2 = var2 & var0;
                var1[1] = var2;
                var2 = 29;
                var2 = var3 >> var2;
                var2 = var2 & var0;
                var1[2] = var2;
                var3 = new Array(0);
                var2 = 0;
                var2 = var1[var2];
                if (!var2) {
                    _fun38249_ip = 84;
                    continue _fun38249
                }
            case 68:
                var4 = var3.push;
                var2 = 'Dependent Parent Image';
                var2 = var4.bind(var3)(var2);
            case 84:
                var0 = var1[var0];
                if (!var0) {
                    _fun38249_ip = 107;
                    continue _fun38249
                }
            case 91:
                var2 = var3.push;
                var0 = 'Dependent Child Image';
                var0 = var2.bind(var3)(var0);
            case 107:
                var0 = 2;
                var0 = var1[var0];
                if (!var0) {
                    _fun38249_ip = 133;
                    continue _fun38249
                }
            case 117:
                var2 = var3.push;
                var0 = 'Representative Image';
                var0 = var2.bind(var3)(var0);
            case 133:
                var0 = {};
                var0.value = var1;
                var2 = var3.join;
                var1 = ', ';
                var1 = var2.bind(var3)(var1);
                if (var1) {
                    _fun38249_ip = 162;
                    continue _fun38249
                }
            case 158:
                var1 = 'None';
            case 162:
                var0.description = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0) { // Original name: getImageFormat, environment: var3
        _fun38250: for (var _fun38250_ip = 0;;) switch (_fun38250_ip) {
            case 0:
                var1 = arg0;
                var0 = 24;
                var1 = var1 >> var0;
                var0 = 7;
                var3 = var1 & var0;
                var0 = {};
                var0.value = var3;
                var1 = 'Unknown';
                var2 = 0;
                if (!(var2 === var3)) {
                    _fun38250_ip = 37;
                    continue _fun38250
                }
            case 33:
                var1 = 'JPEG';
            case 37:
                var0.description = var1;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0) { // Original name: getImageType, environment: var3
        _fun38251: for (var _fun38251_ip = 0;;) switch (_fun38251_ip) {
            case 0:
                var1 = 16777215;
                var0 = arg0;
                var2 = var1 & var0;
                var0 = {};
                var0.value = var2;
                var1 = {
                    196608: 'Baseline MP Primary Image',
                    65537: 'Large Thumbnail (VGA equivalent)',
                    65538: 'Large Thumbnail (Full HD equivalent)',
                    131073: 'Multi-Frame Image (Panorama)',
                    131074: 'Multi-Frame Image (Disparity)',
                    131075: 'Multi-Frame Image (Multi-Angle)',
                    0: 'Undefined'
                };
                var1 = var1[var2];
                if (var1) {
                    _fun38251_ip = 44;
                    continue _fun38251
                }
            case 40:
                var1 = 'Unknown';
            case 44:
                var0.description = var1;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: getImageOffset, environment: var3
        _fun38252: for (var _fun38252_ip = 0;;) switch (_fun38252_ip) {
            case 0:
                var3 = arg0;
                var0 = 0;
                if (!(var0 !== var3)) {
                    _fun38252_ip = 95;
                    continue _fun38252
                }
            case 9:
                var6 = _closure1_slot4;
                var2 = arg1;
                var5 = var2.value;
                var2 = _closure1_slot3;
                var2 = var3 * var2;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var4 = undefined;
                var7 = var3.bind(var4)(var1);
                var3 = var7.getTypeSize;
                var1 = 'LONG';
                var9 = var3.bind(var7)(var1);
                var1 = 8;
                var10 = var2 + var1;
                var8 = arg2;
                var12 = undefined;
                var11 = var5;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                var1 = arg3;
                var0 = var2 + var1;
            case 95:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var2);
    var0 = {};
    var2 = function(arg0, arg1, arg2) { // Original name: read, environment: var3
        var5 = arg0;
        var4 = arg1;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 0;
        var1 = var9[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = var2.getByteOrder;
        var2 = var1.bind(var2)(var5, var4);
        var1 = _closure1_slot0;
        var0 = 1;
        var6 = var9[var0];
        var8 = var1.bind(var3)(var6);
        var7 = var8.readIfd;
        var6 = 2;
        var6 = var9[var6];
        var6 = var1.bind(var3)(var6);
        var6 = var6.IFD_TYPE_MPF;
        var0 = var9[var0];
        var1 = var1.bind(var3)(var0);
        var0 = var1.get0thIfdOffset;
        var12 = var0.bind(var1)(var5, var4, var2);
        var10 = arg2;
        var16 = var8;
        var15 = var5;
        var14 = var6;
        var13 = var4;
        var11 = var2;
        var0 = var16[var7](var15, var14, var13, var12, var11, var10, var9);
        var1 = function(arg0, arg1, arg2, arg3) { // Original name: addMpfImages, environment: var1
            _fun38254: for (var _fun38254_ip = 0;;) switch (_fun38254_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg1;
                    var0 = arg2;
                    var14 = arg3;
                    var1 = var0.MPEntry;
                    if (var1) {
                        _fun38254_ip = 25;
                        continue _fun38254
                    }
                case 23:
                    return var0;
                case 25:
                    var1 = new Array(0);
                    var13 = global;
                    var4 = var13.Math;
                    var3 = var4.ceil;
                    var2 = var0.MPEntry;
                    var2 = var2.value;
                    var5 = var2.length;
                    var2 = _closure1_slot3;
                    var2 = var5 / var2;
                    var2 = var3.bind(var4)(var2);
                    var11 = 0;
                    var2 = var11 < var2;
                    var10 = 3;
                    var9 = undefined;
                    var8 = 'LONG';
                    var7 = 4;
                    var6 = 'SHORT';
                    var5 = 12;
                    var4 = 14;
                    var3 = 'base64';
                    if (!var2) {
                        _fun38254_ip = 650;
                        continue _fun38254
                    }
                case 113:
                    var2 = {};
                    var1[var11] = var2;
                    var23 = _closure1_slot4;
                    var2 = var0.MPEntry;
                    var20 = var2.value;
                    var2 = _closure1_slot3;
                    var28 = var11 * var2;
                    var24 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var18 = var2[var10];
                    var21 = var24.bind(var9)(var18);
                    var18 = var21.getTypeSize;
                    var27 = var18.bind(var21)(var8);
                    var30 = undefined;
                    var29 = var20;
                    var26 = var14;
                    var20 = var30[var23](var29, var28, var27, var26, var25);
                    var19 = var1[var11];
                    var18 = _closure1_slot5;
                    var18 = var18.bind(var9)(var20);
                    var19.ImageFlags = var18;
                    var19 = var1[var11];
                    var18 = _closure1_slot6;
                    var18 = var18.bind(var9)(var20);
                    var19.ImageFormat = var18;
                    var19 = var1[var11];
                    var18 = _closure1_slot7;
                    var18 = var18.bind(var9)(var20);
                    var19.ImageType = var18;
                    var18 = var0.MPEntry;
                    var20 = var18.value;
                    var18 = _closure1_slot3;
                    var18 = var11 * var18;
                    var19 = var2[var10];
                    var21 = var24.bind(var9)(var19);
                    var19 = var21.getTypeSize;
                    var27 = var19.bind(var21)(var8);
                    var28 = var18 + var7;
                    var30 = undefined;
                    var29 = var20;
                    var26 = var14;
                    var18 = var30[var23](var29, var28, var27, var26, var25);
                    var20 = var1[var11];
                    var19 = {};
                    var19.value = var18;
                    var21 = '' + var18;
                    var19.description = var21;
                    var20.ImageSize = var19;
                    var20 = _closure1_slot8;
                    var28 = var0.MPEntry;
                    var29 = var11;
                    var27 = var14;
                    var26 = var15;
                    var22 = var30[var20](var29, var28, var27, var26, var25);
                    var20 = var1[var11];
                    var19 = {};
                    var19.value = var22;
                    var21 = '' + var22;
                    var19.description = var21;
                    var20.ImageOffset = var19;
                    var19 = var0.MPEntry;
                    var21 = var19.value;
                    var19 = _closure1_slot3;
                    var19 = var11 * var19;
                    var20 = var2[var10];
                    var25 = var24.bind(var9)(var20);
                    var20 = var25.getTypeSize;
                    var27 = var20.bind(var25)(var6);
                    var28 = var19 + var5;
                    var30 = undefined;
                    var29 = var21;
                    var26 = var14;
                    var21 = var30[var23](var29, var28, var27, var26, var25);
                    var20 = var1[var11];
                    var19 = {};
                    var19.value = var21;
                    var21 = '' + var21;
                    var19.description = var21;
                    var20.DependentImage1EntryNumber = var19;
                    var19 = var0.MPEntry;
                    var21 = var19.value;
                    var19 = _closure1_slot3;
                    var19 = var11 * var19;
                    var20 = var2[var10];
                    var24 = var24.bind(var9)(var20);
                    var20 = var24.getTypeSize;
                    var27 = var20.bind(var24)(var6);
                    var28 = var19 + var4;
                    var30 = undefined;
                    var29 = var21;
                    var26 = var14;
                    var21 = var30[var23](var29, var28, var27, var26, var25);
                    var20 = var1[var11];
                    var19 = {};
                    var19.value = var21;
                    var21 = '' + var21;
                    var19.description = var21;
                    var20.DependentImage2EntryNumber = var19;
                    var19 = var1[var11];
                    var21 = var16.buffer;
                    var20 = var21.slice;
                    var18 = var22 + var18;
                    var18 = var20.bind(var21)(var22, var18);
                    var19.image = var18;
                    var18 = _closure1_slot0;
                    var2 = var2[var7];
                    var20 = var18.bind(var9)(var2);
                    var19 = var20.deferInit;
                    var18 = var1[var11];
                    var2 = function() { // Environment: var17
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.getBase64Image;
                        var0 = this;
                        var0 = var0.image;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var19.bind(var20)(var18, var3, var2);
                    var11 = var11 + 1;
                    var19 = var13.Math;
                    var18 = var19.ceil;
                    var2 = var0.MPEntry;
                    var2 = var2.value;
                    var20 = var2.length;
                    var2 = _closure1_slot3;
                    var2 = var20 / var2;
                    var2 = var18.bind(var19)(var2);
                    if (var11 < var2) {
                        _fun38254_ip = 113;
                        continue _fun38254
                    }
                case 650:
                    var0.Images = var1;
                    return var0;
            }
        };
        var16 = undefined;
        var15 = var5;
        var14 = var4;
        var13 = var0;
        var12 = var2;
        var1 = var16[var1](var15, var14, var13, var12, var11);
        return var0;
    };
    var0.read = var2;
    var2 = 16;
    var _closure1_slot3 = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4128, 4143, 4144, 4140, 4123]);