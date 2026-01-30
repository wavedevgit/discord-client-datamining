// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var2.is7Z = var0;
    var2.isLZH = var0;
    var2.isRAR = var0;
    var2.isZIP = var0;
    var3 = function(arg0) { // Original name: is7Z, environment: var1
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
        var0 = '_7z';
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.is7Z = var3;
    var3 = function(arg0) { // Original name: isLZH, environment: var1
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
        var0 = 'lzh';
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.isLZH = var3;
    var3 = function(arg0) { // Original name: isRAR, environment: var1
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
        var0 = 'rar';
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.isRAR = var3;
    var1 = function(arg0, arg1) { // Original name: isZIP, environment: var1
        _fun37732: for (var _fun37732_ip = 0;;) switch (_fun37732_ip) {
            case 0:
                var1 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var4 = var3.getFileChunk;
                var3 = null;
                var5 = var3 == var1;
                var3 = undefined;
                if (var5) {
                    _fun37732_ip = 50;
                    continue _fun37732
                }
            case 44:
                var3 = var1.chunkSize;
            case 50:
                if (var3) {
                    _fun37732_ip = 56;
                    continue _fun37732
                }
            case 53:
                var3 = 64;
            case 56:
                var1 = arg0;
                var3 = var4.bind(var2)(var1, var3);
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var0 = var1.bind(var2)(var0);
                var2 = var0.FileTypes;
                var1 = var2.checkByFileType;
                var0 = 'zip';
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.isZIP = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4101, 4102]);