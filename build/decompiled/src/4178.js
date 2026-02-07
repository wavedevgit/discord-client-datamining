// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var0 = dependencyMap;
    var _closure1_slot2 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var3 = function arg0() {
        _fun38133: for (var _fun38133_ip = 0;;) switch (_fun38133_ip) {
            case 0:
                var5 = arg0;
                var1 = !var5;
                var0 = !var1;
                if (var1) {
                    _fun38133_ip = 62;
                    continue _fun38133
                }
            case 12:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var4 = 0;
                var2 = var1[var4];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getStringFromDataView;
                var1 = 4;
                var2 = var2.bind(var3)(var5, var4, var1);
                var1 = 'RIFF';
                var0 = var2 === var1;
            case 62:
                if (!var0) {
                    _fun38133_ip = 116;
                    continue _fun38133
                }
            case 65:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getStringFromDataView;
                var2 = 8;
                var1 = 4;
                var2 = var3.bind(var4)(var5, var2, var1);
                var1 = 'WEBP';
                var0 = var2 === var1;
            case 116:
                return var0;
        }
    };
    var0.isWebpFile = var3;
    var2 = function arg0() {
        _fun38134: for (var _fun38134_ip = 0;;) switch (_fun38134_ip) {
            case 0:
                var27 = arg0;
                var1 = var27.byteLength;
                var0 = 20;
                var0 = var0 < var1;
                var26 = undefined;
                var25 = 12;
                var7 = false;
                var24 = 8;
                var23 = 1;
                var22 = 2;
                var21 = 0;
                var20 = true;
                var19 = 6;
                var17 = 'Exif\x00\x00';
                var16 = 'VP8X';
                var15 = 'ICCP';
                var14 = 'XMP ';
                var13 = 'EXIF';
                var12 = 4;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                var8 = undefined;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                var1 = undefined;
                var5 = false;
                if (!var0) {
                    _fun38134_ip = 496;
                    continue _fun38134
                }
            case 99:
                var28 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = var6[var21];
                var28 = var28.bind(var26)(var0);
                var0 = var28.getStringFromDataView;
                var0 = var0.bind(var28)(var27, var25, var12);
                var29 = var27.getUint32;
                var28 = var25 + var12;
                var33 = var29.bind(var27)(var28, var20);
                var28 = _closure1_slot1;
                var6 = var6[var23];
                var6 = var28.bind(var26)(var6);
                var28 = var6.USE_EXIF;
                var6 = var25;
                if (!var28) {
                    _fun38134_ip = 177;
                    continue _fun38134
                }
            case 170:
                if (!(var13 !== var0)) {
                    _fun38134_ip = 364;
                    continue _fun38134
                }
            case 177:
                var29 = _closure1_slot1;
                var28 = _closure1_slot2;
                var28 = var28[var23];
                var28 = var29.bind(var26)(var28);
                var28 = var28.USE_XMP;
                if (!var28) {
                    _fun38134_ip = 207;
                    continue _fun38134
                }
            case 203:
                if (!(var14 !== var0)) {
                    _fun38134_ip = 325;
                    continue _fun38134
                }
            case 207:
                var29 = _closure1_slot1;
                var28 = _closure1_slot2;
                var28 = var28[var23];
                var28 = var29.bind(var26)(var28);
                var28 = var28.USE_ICC;
                if (!var28) {
                    _fun38134_ip = 237;
                    continue _fun38134
                }
            case 233:
                if (!(var15 !== var0)) {
                    _fun38134_ip = 276;
                    continue _fun38134
                }
            case 237:
                var32 = var11;
                var31 = var10;
                var30 = var9;
                var29 = var8;
                if (!(var16 === var0)) {
                    _fun38134_ip = 423;
                    continue _fun38134
                }
            case 256:
                var29 = var6 + var24;
                var32 = var11;
                var31 = var10;
                var30 = var9;
                var7 = true;
                _fun38134_ip = 423;
                continue _fun38134;
            case 276:
                var28 = {};
                var0 = var6 + var24;
                var28.offset = var0;
                var28.length = var33;
                var28.chunkNumber = var23;
                var28.chunksTotal = var23;
                var0 = new Array(1);
                var0[0] = var28;
                var32 = var11;
                var31 = var10;
                var30 = var0;
                var29 = var8;
                var7 = true;
                _fun38134_ip = 423;
                continue _fun38134;
            case 325:
                var28 = {};
                var0 = var6 + var24;
                var28.dataOffset = var0;
                var28.length = var33;
                var0 = new Array(1);
                var0[0] = var28;
                var32 = var11;
                var31 = var0;
                var30 = var9;
                var29 = var8;
                var7 = true;
                _fun38134_ip = 423;
                continue _fun38134;
            case 364:
                var28 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var21];
                var34 = var28.bind(var26)(var0);
                var0 = var34.getStringFromDataView;
                var28 = var6 + var24;
                var34 = var0.bind(var34)(var27, var28, var19);
                var0 = var28;
                if (!(var34 === var17)) {
                    _fun38134_ip = 409;
                    continue _fun38134
                }
            case 405:
                var0 = var28 + var19;
            case 409:
                var32 = var0;
                var31 = var10;
                var30 = var9;
                var29 = var8;
                var7 = true;
            case 423:
                var34 = var33 % var22;
                var28 = var7;
                var0 = var33;
                if (!(var34 !== var21)) {
                    _fun38134_ip = 441;
                    continue _fun38134
                }
            case 437:
                var0 = var33 + var23;
            case 441:
                var0 = var24 + var0;
                var25 = var6 + var0;
                var6 = var27.byteLength;
                var0 = var25 + var24;
                var11 = var32;
                var10 = var31;
                var9 = var30;
                var8 = var29;
                var7 = var28;
                var4 = var11;
                var3 = var10;
                var2 = var9;
                var1 = var8;
                var5 = var7;
                if (var0 < var6) {
                    _fun38134_ip = 99;
                    continue _fun38134
                }
            case 496:
                var0 = {};
                var0.hasAppMarkers = var5;
                var0.tiffHeaderOffset = var4;
                var0.xmpChunks = var3;
                var0.iccChunks = var2;
                var0.vp8xChunkOffset = var1;
                return var0;
        }
    };
    var0.findOffsets = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4165, 4168]);