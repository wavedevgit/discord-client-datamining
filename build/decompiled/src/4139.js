// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var1 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var4;
    var0 = 0;
    var5 = var4[var0];
    var0 = undefined;
    var5 = var3.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = global;
    var8 = var5.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var5 = true;
    var6.value = var5;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var1, var5, var6);
    var1.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = var0;
    var1.FileTypes = var0;
    var5 = ['m4v', 'flv', 'mp4', 'mkv', 'webm', 'avif', 'heic'];
    var1.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = var5;
    var2 = function() { // Environment: var2
        var4 = function() {
            var3 = _closure1_slot2;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var0 = {};
        var2 = 'getInfoByName';
        var0.key = var2;
        var2 = function arg0() {
            var4 = arg0;
            var1 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var0 = var2[var0];
            var3 = undefined;
            var0 = var1.bind(var3)(var0);
            var2 = var0.fetchFromObject;
            var1 = _closure2_slot0;
            var0 = var4.toUpperCase;
            var0 = var0.bind(var4)();
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var2;
        var2 = new Array(6);
        var2[0] = var0;
        var0 = {};
        var5 = 'getSignaturesByName';
        var0.key = var5;
        var5 = function arg0() {
            var4 = arg0;
            var1 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var0 = var2[var0];
            var3 = undefined;
            var0 = var1.bind(var3)(var0);
            var2 = var0.fetchFromObject;
            var1 = _closure2_slot0;
            var0 = var4.toUpperCase;
            var0 = var0.bind(var4)();
            var0 = var2.bind(var3)(var1, var0);
            var0 = var0.signatures;
            return var0;
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'detectSignature';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun37872: for (var _fun37872_ip = 0;;) switch (_fun37872_ip) {
                case 0:
                    var7 = arg0;
                    var0 = undefined;
                    var1 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    var11 = undefined;
                    var6 = arg1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var4 = 0;
                case 23:
                    var13 = var6().value;
                    var12 = var2;
                    if (!(var12 !== var0)) {
                        _fun37872_ip = 219;
                        continue _fun37872
                    }
                case 37: // try_start_0
                    var1 = var13;
                    var8 = true;
                    var13 = var13.offset;
                    var12 = var13;
                    if (var13) {
                        _fun37872_ip = 56;
                        continue _fun37872
                    }
                case 54:
                    var12 = 0;
                case 56:
                    var9 = var12;
                    var10 = 0;
                    var11 = 0;
                    var12 = var1;
                    var12 = var12.sequence;
                    var12 = var12.length;
                    if (!(var4 < var12)) {
                        _fun37872_ip = 196;
                        continue _fun37872
                    }
                case 81:
                    var12 = var1;
                    var12 = var12.skippedBytes;
                    if (!var12) {
                        _fun37872_ip = 118;
                        continue _fun37872
                    }
                case 93:
                    var12 = var1;
                    var14 = var12.skippedBytes;
                    var13 = var14.includes;
                    var12 = var11;
                    var12 = var13.bind(var14)(var12);
                    if (var12) {
                        _fun37872_ip = 163;
                        continue _fun37872
                    }
                case 118:
                    var13 = var7;
                    var12 = var9;
                    var15 = var11;
                    var12 = var12 + var15;
                    var13 = var13[var12];
                    var12 = var1;
                    var14 = var12.sequence;
                    var12 = var10;
                    var12 = var15 - var12;
                    var12 = var14[var12];
                    if (!(var13 !== var12)) {
                        _fun37872_ip = 169;
                        continue _fun37872
                    }
                case 159:
                    var8 = false;
                    _fun37872_ip = 196;
                    continue _fun37872;
                case 163:
                    var12 = var10;
                    var10 = var12 + 1;
                case 169:
                    var12 = var11;
                    var13 = var12 + 1;
                    var11 = var13;
                    var12 = var1;
                    var12 = var12.sequence;
                    var12 = var12.length;
                    if (var13 < var12) {
                        _fun37872_ip = 81;
                        continue _fun37872
                    }
                case 196:
                    var12 = var8;
                    if (var12) {
                        _fun37872_ip = 207;
                        continue _fun37872
                    }
                case 202: // try_end0
                    _fun37872_ip = 23;
                    continue _fun37872;
                case 207:
                    var2.return();
                    return var1;
                case 212: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 219:
                    return var0;
            }
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'detectTypeByAdditionalCheck';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun37873: for (var _fun37873_ip = 0;;) switch (_fun37873_ip) {
                case 0:
                    var6 = arg0;
                    var3 = arg1;
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.extension;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var3 = var2.some;
                    var1 = function(arg0) { // Environment: var0
                        var2 = ['m4v', 'flv', 'mp4', 'heic'];
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    if (var1) {
                        _fun37873_ip = 270;
                        continue _fun37873
                    }
                case 45:
                    var3 = var2.some;
                    var1 = function(arg0) { // Environment: var0
                        var2 = ['mkv', 'webm'];
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    if (var1) {
                        _fun37873_ip = 134;
                        continue _fun37873
                    }
                case 64:
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        var2 = ['avif'];
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var1.bind(var2)(var0);
                    var3 = undefined;
                    var0 = undefined;
                    if (!var1) {
                        _fun37873_ip = 132;
                        continue _fun37873
                    }
                case 87:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 2;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.isAvifStringIncluded;
                    var1 = var1.bind(var3)(var6);
                    var0 = undefined;
                    if (!var1) {
                        _fun37873_ip = 132;
                        continue _fun37873
                    }
                case 126:
                    var0 = 'avif';
                case 132:
                    return var0;
                case 134:
                    var1 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 2;
                    var0 = var3[var0];
                    var5 = undefined;
                    var0 = var1.bind(var5)(var0);
                    var0 = var0.findMatroskaDocTypeElements;
                    var7 = var0.bind(var5)(var6);
                    var0 = 'mkv';
                    if (!(var0 === var7)) {
                        _fun37873_ip = 214;
                        continue _fun37873
                    }
                case 180:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var1 = 3;
                    var1 = var8[var1];
                    var1 = var3.bind(var5)(var1);
                    var1 = var1.isMKV;
                    var1 = var1.bind(var5)(var6);
                    if (var1) {
                        _fun37873_ip = 268;
                        continue _fun37873
                    }
                case 214:
                    var3 = 'webm';
                    var1 = undefined;
                    if (!(var3 === var7)) {
                        _fun37873_ip = 265;
                        continue _fun37873
                    }
                case 226:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 3;
                    var4 = var8[var4];
                    var4 = var7.bind(var5)(var4);
                    var4 = var4.isWEBM;
                    var4 = var4.bind(var5)(var6);
                    var1 = undefined;
                    if (!var4) {
                        _fun37873_ip = 265;
                        continue _fun37873
                    }
                case 262:
                    var1 = var3;
                case 265:
                    var0 = var1;
                case 268:
                    return var0;
                case 270:
                    var1 = var2.includes;
                    var0 = 'heic';
                    var1 = var1.bind(var2)(var0);
                    if (!var1) {
                        _fun37873_ip = 331;
                        continue _fun37873
                    }
                case 289:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 3;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.isHEIC;
                    var1 = var1.bind(var2)(var6);
                    if (var1) {
                        _fun37873_ip = 462;
                        continue _fun37873
                    }
                case 331:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var8 = 3;
                    var1 = var1[var8];
                    var5 = undefined;
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.isFLV;
                    var2 = var1.bind(var5)(var6);
                    var1 = 'flv';
                    if (var2) {
                        _fun37873_ip = 459;
                        continue _fun37873
                    }
                case 376:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var8];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.isM4V;
                    var7 = var2.bind(var5)(var6);
                    var4 = 'mp4';
                    var2 = var4;
                    if (!var7) {
                        _fun37873_ip = 456;
                        continue _fun37873
                    }
                case 416:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var8];
                    var3 = var7.bind(var5)(var3);
                    var3 = var3.isHEIC;
                    var3 = var3.bind(var5)(var6);
                    var2 = var4;
                    if (var3) {
                        _fun37873_ip = 456;
                        continue _fun37873
                    }
                case 450:
                    var2 = 'm4v';
                case 456:
                    var1 = var2;
                case 459:
                    var0 = var1;
                case 462:
                    return var0;
            }
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'detectbBySignatures';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun37878: for (var _fun37878_ip = 0;;) switch (_fun37878_ip) {
                case 0:
                    var8 = arg0;
                    var0 = undefined;
                    var1 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    var11 = undefined;
                    var12 = undefined;
                    var13 = undefined;
                    var7 = arg1;
                    var2 = var7[Symbol.iterator];
                    var7 = var2().next;
                    var5 = 0;
                    var4 = null;
                case 27:
                    var15 = var7().value;
                    var14 = var2;
                    if (!(var14 !== var0)) {
                        _fun37878_ip = 259;
                        continue _fun37878
                    }
                case 41: // try_start_0
                    var1 = var15;
                    var9 = 0;
                    var10 = true;
                    var15 = var15.offset;
                    var14 = var15;
                    if (var15) {
                        _fun37878_ip = 62;
                        continue _fun37878
                    }
                case 60:
                    var14 = 0;
                case 62:
                    var11 = var14;
                    var14 = var1;
                    var15 = var4 == var14;
                    var14 = undefined;
                    if (var15) {
                        _fun37878_ip = 86;
                        continue _fun37878
                    }
                case 77:
                    var15 = var1;
                    var14 = var15.skippedBytes;
                case 86:
                    var15 = var1;
                    var16 = var15.sequence;
                    var16 = var16.length;
                    if (var14) {
                        _fun37878_ip = 108;
                        continue _fun37878
                    }
                case 103:
                    var14 = var16;
                    _fun37878_ip = 123;
                    continue _fun37878;
                case 108:
                    var15 = var15.skippedBytes;
                    var15 = var15.length;
                    var14 = var16 + var15;
                case 123:
                    var12 = var14;
                    var13 = 0;
                    if (!(var5 < var14)) {
                        _fun37878_ip = 236;
                        continue _fun37878
                    }
                case 132:
                    var14 = var1;
                    var14 = var14.skippedBytes;
                    if (!var14) {
                        _fun37878_ip = 169;
                        continue _fun37878
                    }
                case 144:
                    var14 = var1;
                    var16 = var14.skippedBytes;
                    var15 = var16.includes;
                    var14 = var13;
                    var14 = var15.bind(var16)(var14);
                    if (var14) {
                        _fun37878_ip = 214;
                        continue _fun37878
                    }
                case 169:
                    var15 = var8;
                    var14 = var11;
                    var17 = var13;
                    var14 = var14 + var17;
                    var15 = var15[var14];
                    var14 = var1;
                    var16 = var14.sequence;
                    var14 = var9;
                    var14 = var17 - var14;
                    var14 = var16[var14];
                    if (!(var15 !== var14)) {
                        _fun37878_ip = 220;
                        continue _fun37878
                    }
                case 210:
                    var10 = false;
                    _fun37878_ip = 236;
                    continue _fun37878;
                case 214:
                    var14 = var9;
                    var9 = var14 + 1;
                case 220:
                    var14 = var13;
                    var15 = var14 + 1;
                    var13 = var15;
                    var14 = var12;
                    if (var15 < var14) {
                        _fun37878_ip = 132;
                        continue _fun37878
                    }
                case 236:
                    var14 = var10;
                    if (var14) {
                        _fun37878_ip = 247;
                        continue _fun37878
                    }
                case 242: // try_end0
                    _fun37878_ip = 27;
                    continue _fun37878;
                case 247:
                    var2.return();
                    return var1;
                case 252: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 259:
                    return var0;
            }
        };
        var0.value = var5;
        var2[4] = var0;
        var0 = {};
        var5 = 'checkByFileType';
        var0.key = var5;
        var1 = function arg0, arg1() {
            _fun37879: for (var _fun37879_ip = 0;;) switch (_fun37879_ip) {
                case 0:
                    var2 = arg1;
                    var0 = global;
                    var0 = var0.Object;
                    var0 = var0.prototype;
                    var5 = var0.hasOwnProperty;
                    var4 = var5.call;
                    var3 = _closure2_slot0;
                    var1 = var2.toUpperCase;
                    var1 = var1.bind(var2)();
                    var1 = var4.bind(var5)(var3, var1);
                    if (!var1) {
                        _fun37879_ip = 96;
                        continue _fun37879
                    }
                case 53:
                    var3 = _closure2_slot0;
                    var1 = var3.getSignaturesByName;
                    var0 = var2.toUpperCase;
                    var0 = var0.bind(var2)();
                    var2 = var1.bind(var3)(var0);
                    var1 = var3.detectSignature;
                    var0 = arg0;
                    var0 = var1.bind(var3)(var0, var2);
                    if (var0) {
                        _fun37879_ip = 100;
                        continue _fun37879
                    }
                case 96:
                    var0 = false;
                    return var0;
                case 100:
                    var0 = true;
                    return var0;
            }
        };
        var0.value = var1;
        var2[5] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var2 = var2.bind(var0)();
    var1.FileTypes = var2;
    var1 = 4;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.AudioTypes;
    var5 = var5.AAC;
    var2.AAC = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.AudioTypes;
    var5 = var5.AMR;
    var2.AMR = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.AudioTypes;
    var5 = var5.FLAC;
    var2.FLAC = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.AudioTypes;
    var5 = var5.M4A;
    var2.M4A = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.AudioTypes;
    var5 = var5.MP3;
    var2.MP3 = var5;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.AudioTypes;
    var1 = var1.WAV;
    var2.WAV = var1;
    var1 = 5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.ImageTypes;
    var5 = var5.AVIF;
    var2.AVIF = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.ImageTypes;
    var5 = var5.BMP;
    var2.BMP = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.ImageTypes;
    var5 = var5.BPG;
    var2.BPG = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.ImageTypes;
    var5 = var5.CR2;
    var2.CR2 = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.ImageTypes;
    var5 = var5.EXR;
    var2.EXR = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.ImageTypes;
    var5 = var5.GIF;
    var2.GIF = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.ImageTypes;
    var5 = var5.ICO;
    var2.ICO = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.ImageTypes;
    var5 = var5.JPEG;
    var2.JPEG = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.ImageTypes;
    var5 = var5.PBM;
    var2.PBM = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.ImageTypes;
    var5 = var5.PGM;
    var2.PGM = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.ImageTypes;
    var5 = var5.PNG;
    var2.PNG = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.ImageTypes;
    var5 = var5.PPM;
    var2.PPM = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.ImageTypes;
    var5 = var5.PSD;
    var2.PSD = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.ImageTypes;
    var5 = var5.WEBP;
    var2.WEBP = var5;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.ImageTypes;
    var1 = var1.HEIC;
    var2.HEIC = var1;
    var1 = 6;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.VideoTypes;
    var5 = var5.AVI;
    var2.AVI = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.VideoTypes;
    var5 = var5.FLV;
    var2.FLV = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.VideoTypes;
    var5 = var5.M4V;
    var2.M4V = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.VideoTypes;
    var5 = var5.MKV;
    var2.MKV = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.VideoTypes;
    var5 = var5.MOV;
    var2.MOV = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.VideoTypes;
    var5 = var5.MP4;
    var2.MP4 = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.VideoTypes;
    var5 = var5.OGG;
    var2.OGG = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.VideoTypes;
    var5 = var5.SWF;
    var2.SWF = var5;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.VideoTypes;
    var1 = var1.WEBM;
    var2.WEBM = var1;
    var1 = 7;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.CompressedTypes;
    var5 = var5._7Z;
    var2._7Z = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.CompressedTypes;
    var5 = var5.LZH;
    var2.LZH = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.CompressedTypes;
    var5 = var5.RAR;
    var2.RAR = var5;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.CompressedTypes;
    var1 = var1.ZIP;
    var2.ZIP = var1;
    var1 = 8;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.OtherTypes;
    var5 = var5.BLEND;
    var2.BLEND = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.OtherTypes;
    var5 = var5.DOC;
    var2.DOC = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.OtherTypes;
    var5 = var5.ELF;
    var2.ELF = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.OtherTypes;
    var5 = var5.EXE;
    var2.EXE = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.OtherTypes;
    var5 = var5.INDD;
    var2.INDD = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.OtherTypes;
    var5 = var5.MACHO;
    var2.MACHO = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.OtherTypes;
    var5 = var5.ORC;
    var2.ORC = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.OtherTypes;
    var5 = var5.PARQUET;
    var2.PARQUET = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.OtherTypes;
    var5 = var5.PCAP;
    var2.PCAP = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.OtherTypes;
    var5 = var5.PDF;
    var2.PDF = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.OtherTypes;
    var5 = var5.PS;
    var2.PS = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.OtherTypes;
    var5 = var5.RTF;
    var2.RTF = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.OtherTypes;
    var5 = var5.SQLITE;
    var2.SQLITE = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.OtherTypes;
    var5 = var5.STL;
    var2.STL = var5;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.OtherTypes;
    var1 = var1.TTF;
    var2.TTF = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4137, 4140, 4146, 4147, 4148, 4149, 4150]);