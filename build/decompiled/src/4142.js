// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
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
        var0 = 'm4a';
        var0 = var1.bind(var2)(var3, var0);
        return var0;
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
    var2.isAAC = var0;
    var2.isAMR = var0;
    var2.isFLAC = var0;
    var2.isM4A = var0;
    var2.isMP3 = var0;
    var2.isWAV = var0;
    var4 = function arg0, arg1() {
        _fun37887: for (var _fun37887_ip = 0;;) switch (_fun37887_ip) {
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
                var0 = 'aac';
                var0 = var1.bind(var6)(var3, var0);
                var1 = !var0;
                var0 = !var1;
                if (!var1) {
                    _fun37887_ip = 121;
                    continue _fun37887
                }
            case 86:
                var1 = null;
                var6 = var1 == var5;
                var1 = undefined;
                if (var6) {
                    _fun37887_ip = 103;
                    continue _fun37887
                }
            case 97:
                var1 = var5.excludeSimilarTypes;
            case 103:
                var1 = !var1;
                if (!var1) {
                    _fun37887_ip = 118;
                    continue _fun37887
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
    var2.isAAC = var4;
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
        var0 = 'amr';
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.isAMR = var4;
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
        var0 = 'flac';
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.isFLAC = var4;
    var2.isM4A = var3;
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
        var0 = 'mp3';
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.isMP3 = var3;
    var1 = function arg0() {
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
        var0 = 'wav';
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.isWAV = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4138, 4139]);