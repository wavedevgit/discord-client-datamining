// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var0 = dependencyMap;
    var _closure1_slot2 = var0;
    var0 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.objectAssign;
        var2 = {};
        var0 = {};
        var1 = arg1;
        var0.value = var1;
        var1 = arg2;
        var0.description = var1;
        var2.fileType = var0;
        var1 = {};
        var0 = arg0;
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var2 = function arg0, arg1() {
        _fun38055: for (var _fun38055_ip = 0;;) switch (_fun38055_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var12 = 0;
                var1 = var1[var12];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var1 = var1.USE_TIFF;
                if (!var1) {
                    _fun38055_ip = 73;
                    continue _fun38055
                }
            case 36:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var2 = 1;
                var1 = var1[var2];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isTiffFile;
                var1 = var1.bind(var3)(var5);
                if (var1) {
                    _fun38055_ip = 906;
                    continue _fun38055
                }
            case 73:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var12];
                var1 = var3.bind(var4)(var1);
                var1 = var1.USE_JPEG;
                if (!var1) {
                    _fun38055_ip = 136;
                    continue _fun38055
                }
            case 99:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var7 = 2;
                var1 = var1[var7];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isJpegFile;
                var1 = var1.bind(var3)(var5);
                if (var1) {
                    _fun38055_ip = 855;
                    continue _fun38055
                }
            case 136:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var12];
                var1 = var3.bind(var4)(var1);
                var1 = var1.USE_PNG;
                if (!var1) {
                    _fun38055_ip = 199;
                    continue _fun38055
                }
            case 162:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var6 = 3;
                var1 = var1[var6];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isPngFile;
                var1 = var1.bind(var3)(var5);
                if (var1) {
                    _fun38055_ip = 802;
                    continue _fun38055
                }
            case 199:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var12];
                var1 = var3.bind(var4)(var1);
                var1 = var1.USE_HEIC;
                if (!var1) {
                    _fun38055_ip = 262;
                    continue _fun38055
                }
            case 225:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var8 = 4;
                var1 = var1[var8];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isHeicFile;
                var1 = var1.bind(var3)(var5);
                if (var1) {
                    _fun38055_ip = 751;
                    continue _fun38055
                }
            case 262:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var12];
                var1 = var3.bind(var4)(var1);
                var1 = var1.USE_AVIF;
                if (!var1) {
                    _fun38055_ip = 325;
                    continue _fun38055
                }
            case 288:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var9 = 5;
                var1 = var1[var9];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isAvifFile;
                var1 = var1.bind(var3)(var5);
                if (var1) {
                    _fun38055_ip = 700;
                    continue _fun38055
                }
            case 325:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var12];
                var1 = var3.bind(var4)(var1);
                var1 = var1.USE_WEBP;
                if (!var1) {
                    _fun38055_ip = 388;
                    continue _fun38055
                }
            case 351:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var10 = 6;
                var1 = var1[var10];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isWebpFile;
                var1 = var1.bind(var3)(var5);
                if (var1) {
                    _fun38055_ip = 647;
                    continue _fun38055
                }
            case 388:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var12];
                var1 = var3.bind(var4)(var1);
                var1 = var1.USE_GIF;
                if (!var1) {
                    _fun38055_ip = 451;
                    continue _fun38055
                }
            case 414:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var11 = 7;
                var1 = var1[var11];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isGifFile;
                var1 = var1.bind(var3)(var5);
                if (var1) {
                    _fun38055_ip = 598;
                    continue _fun38055
                }
            case 451:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var12];
                var1 = var3.bind(var4)(var1);
                var1 = var1.USE_XMP;
                if (!var1) {
                    _fun38055_ip = 511;
                    continue _fun38055
                }
            case 477:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var12 = 8;
                var1 = var1[var12];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isXMLFile;
                var1 = var1.bind(var3)(var5);
                if (var1) {
                    _fun38055_ip = 547;
                    continue _fun38055
                }
            case 511:
                var1 = global;
                var13 = var1.Error;
                var1 = var13.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var13
                    }
                });
                var16 = 'Invalid image format';
                var17 = var3;
                var1 = new var17[var13](var16, var15);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
            case 547:
                var13 = _closure1_slot3;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var12];
                var3 = var3.bind(var4)(var1);
                var1 = var3.findOffsets;
                var12 = var1.bind(var3)(var5);
                var3 = 'xml';
                var1 = 'XML';
                var1 = var13.bind(var4)(var12, var3, var1);
                return var1;
            case 598:
                var12 = _closure1_slot3;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var11];
                var3 = var3.bind(var4)(var1);
                var1 = var3.findOffsets;
                var11 = var1.bind(var3)(var5);
                var3 = 'gif';
                var1 = 'GIF';
                var1 = var12.bind(var4)(var11, var3, var1);
                return var1;
            case 647:
                var11 = _closure1_slot3;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var10];
                var3 = var3.bind(var4)(var1);
                var1 = var3.findOffsets;
                var10 = var1.bind(var3)(var5);
                var3 = 'webp';
                var1 = 'WebP';
                var1 = var11.bind(var4)(var10, var3, var1);
                return var1;
            case 700:
                var10 = _closure1_slot3;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var9];
                var3 = var3.bind(var4)(var1);
                var1 = var3.findAvifOffsets;
                var9 = var1.bind(var3)(var5);
                var3 = 'avif';
                var1 = 'AVIF';
                var1 = var10.bind(var4)(var9, var3, var1);
                return var1;
            case 751:
                var9 = _closure1_slot3;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var3 = var3.bind(var4)(var1);
                var1 = var3.findHeicOffsets;
                var8 = var1.bind(var3)(var5);
                var3 = 'heic';
                var1 = 'HEIC';
                var1 = var9.bind(var4)(var8, var3, var1);
                return var1;
            case 802:
                var8 = _closure1_slot3;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var6 = var3.bind(var4)(var1);
                var3 = var6.findPngOffsets;
                var1 = arg1;
                var6 = var3.bind(var6)(var5, var1);
                var3 = 'png';
                var1 = 'PNG';
                var1 = var8.bind(var4)(var6, var3, var1);
                return var1;
            case 855:
                var6 = _closure1_slot3;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var3 = var3.bind(var4)(var1);
                var1 = var3.findJpegOffsets;
                var5 = var1.bind(var3)(var5);
                var3 = 'jpeg';
                var1 = 'JPEG';
                var1 = var6.bind(var4)(var5, var3, var1);
                return var1;
            case 906:
                var3 = _closure1_slot3;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var1 = var1.bind(var4)(var0);
                var0 = var1.findTiffOffsets;
                var2 = var0.bind(var1)();
                var1 = 'tiff';
                var0 = 'TIFF';
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var0.parseAppMarkers = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4169, 4170, 4172, 4173, 4174, 4178, 4179, 4180, 4181, 4166]);