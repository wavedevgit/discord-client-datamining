// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var3 = function arg0() {
        _fun37931: for (var _fun37931_ip = 0;;) switch (_fun37931_ip) {
            case 0:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 0;
                var0 = var6[var5];
                var3 = undefined;
                var0 = var4.bind(var3)(var0);
                var2 = var0.getFileChunk;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = 1;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var6 = var0.FileTypes;
                var4 = var6.checkByFileType;
                var0 = 'm4v';
                var0 = var4.bind(var6)(var2, var0);
                var4 = !var0;
                var0 = !var4;
                if (var4) {
                    _fun37931_ip = 111;
                    continue _fun37931
                }
            case 83:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var4.bind(var3)(var1);
                var1 = var1.isftypStringIncluded;
                var0 = var1.bind(var3)(var2);
            case 111:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = undefined;
    var2.isAVI = var0;
    var2.isFLV = var0;
    var2.isM4V = var0;
    var2.isMKV = var0;
    var2.isMOV = var0;
    var2.isMP4 = var0;
    var2.isOGG = var0;
    var2.isSWF = var0;
    var2.isWEBM = var0;
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 0;
        var0 = var4[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var3 = var0.getFileChunk;
        var0 = arg0;
        var3 = var3.bind(var1)(var0);
        var0 = 1;
        var0 = var4[var0];
        var0 = var2.bind(var1)(var0);
        var2 = var0.FileTypes;
        var1 = var2.checkByFileType;
        var0 = 'avi';
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.isAVI = var4;
    var4 = function arg0() {
        _fun37933: for (var _fun37933_ip = 0;;) switch (_fun37933_ip) {
            case 0:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 0;
                var0 = var6[var5];
                var3 = undefined;
                var0 = var4.bind(var3)(var0);
                var2 = var0.getFileChunk;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = 1;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var6 = var0.FileTypes;
                var4 = var6.checkByFileType;
                var0 = 'flv';
                var0 = var4.bind(var6)(var2, var0);
                var4 = !var0;
                var0 = !var4;
                if (var4) {
                    _fun37933_ip = 111;
                    continue _fun37933
                }
            case 83:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var4.bind(var3)(var1);
                var1 = var1.isFlvStringIncluded;
                var0 = var1.bind(var3)(var2);
            case 111:
                return var0;
        }
    };
    var2.isFLV = var4;
    var2.isM4V = var3;
    var3 = function arg0() {
        _fun37934: for (var _fun37934_ip = 0;;) switch (_fun37934_ip) {
            case 0:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var6 = 0;
                var0 = var5[var6];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var7 = var0.getFileChunk;
                var3 = arg0;
                var0 = 64;
                var3 = var7.bind(var4)(var3, var0);
                var0 = 1;
                var0 = var5[var0];
                var0 = var2.bind(var4)(var0);
                var5 = var0.FileTypes;
                var0 = var5.checkByFileType;
                var2 = 'mkv';
                var0 = var0.bind(var5)(var3, var2);
                var5 = !var0;
                var0 = !var5;
                if (var5) {
                    _fun37934_ip = 119;
                    continue _fun37934
                }
            case 87:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var5.bind(var4)(var1);
                var1 = var1.findMatroskaDocTypeElements;
                var1 = var1.bind(var4)(var3);
                var0 = var2 === var1;
            case 119:
                return var0;
        }
    };
    var2.isMKV = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 0;
        var0 = var4[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var3 = var0.getFileChunk;
        var0 = arg0;
        var3 = var3.bind(var1)(var0);
        var0 = 1;
        var0 = var4[var0];
        var0 = var2.bind(var1)(var0);
        var2 = var0.FileTypes;
        var1 = var2.checkByFileType;
        var0 = 'mov';
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.isMOV = var3;
    var3 = function arg0, arg1() {
        _fun37936: for (var _fun37936_ip = 0;;) switch (_fun37936_ip) {
            case 0:
                var5 = arg1;
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 0;
                var0 = var6[var0];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var3 = var0.getFileChunk;
                var0 = arg0;
                var3 = var3.bind(var4)(var0);
                var0 = 1;
                var0 = var6[var0];
                var0 = var1.bind(var4)(var0);
                var6 = var0.FileTypes;
                var1 = var6.checkByFileType;
                var0 = 'mp4';
                var0 = var1.bind(var6)(var3, var0);
                var1 = !var0;
                var0 = !var1;
                if (!var1) {
                    _fun37936_ip = 121;
                    continue _fun37936
                }
            case 86:
                var1 = null;
                var6 = var1 == var5;
                var1 = undefined;
                if (var6) {
                    _fun37936_ip = 103;
                    continue _fun37936
                }
            case 97:
                var1 = var5.excludeSimilarTypes;
            case 103:
                var1 = !var1;
                if (!var1) {
                    _fun37936_ip = 118;
                    continue _fun37936
                }
            case 109:
                var2 = _closure1_slot2;
                var1 = var2.bind(var4)(var3);
            case 118:
                var0 = var1;
            case 121:
                return var0;
        }
    };
    var2.isMP4 = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 0;
        var0 = var4[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var3 = var0.getFileChunk;
        var0 = arg0;
        var3 = var3.bind(var1)(var0);
        var0 = 1;
        var0 = var4[var0];
        var0 = var2.bind(var1)(var0);
        var2 = var0.FileTypes;
        var1 = var2.checkByFileType;
        var0 = 'ogg';
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.isOGG = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 0;
        var0 = var4[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var3 = var0.getFileChunk;
        var0 = arg0;
        var3 = var3.bind(var1)(var0);
        var0 = 1;
        var0 = var4[var0];
        var0 = var2.bind(var1)(var0);
        var2 = var0.FileTypes;
        var1 = var2.checkByFileType;
        var0 = 'swf';
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.isSWF = var3;
    var1 = function arg0() {
        _fun37939: for (var _fun37939_ip = 0;;) switch (_fun37939_ip) {
            case 0:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var6 = 0;
                var0 = var5[var6];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var7 = var0.getFileChunk;
                var3 = arg0;
                var0 = 64;
                var3 = var7.bind(var4)(var3, var0);
                var0 = 1;
                var0 = var5[var0];
                var0 = var2.bind(var4)(var0);
                var5 = var0.FileTypes;
                var0 = var5.checkByFileType;
                var2 = 'webm';
                var0 = var0.bind(var5)(var3, var2);
                var5 = !var0;
                var0 = !var5;
                if (var5) {
                    _fun37939_ip = 119;
                    continue _fun37939
                }
            case 87:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var5.bind(var4)(var1);
                var1 = var1.findMatroskaDocTypeElements;
                var1 = var1.bind(var4)(var3);
                var0 = var2 === var1;
            case 119:
                return var0;
        }
    };
    var2.isWEBM = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4137, 4138]);