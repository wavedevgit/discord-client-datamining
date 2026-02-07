// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var0 = 0;
    var2 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var2);
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var _closure1_slot0 = var2;
    var2 = global;
    var7 = var2.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var2 = true;
    var5.value = var2;
    var2 = '__esModule';
    var2 = var6.bind(var7)(var1, var2, var5);
    var1.CompressedTypes = var0;
    var2 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = undefined;
        var1 = this;
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var _closure1_slot1 = var2;
    var2 = var3.bind(var0)(var2);
    var1.CompressedTypes = var2;
    var1 = {
        'extension': '7z',
        'mimeType': 'application/x-7z-compressed',
        'description': '7-Zip compressed file'
    };
    var4 = {};
    var3 = [55, 122, 188, 175, 39, 28];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2._7Z = var1;
    var1 = {
        'extension': 'lzh',
        'mimeType': 'application/x-lzh-compressed',
        'description': 'Compressed file using Lempel-Ziv and Haruyasu (LZH) compression algorithm'
    };
    var4 = {};
    var3 = [45, 104, 108, 48, 45];
    var4.sequence = var3;
    var3 = 'Lempel Ziv Huffman archive file Method 0 (No compression)';
    var4.description = var3;
    var3 = ['lha'];
    var4.compatibleExtensions = var3;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {};
    var5 = [45, 104, 108, 53, 45];
    var4.sequence = var5;
    var5 = 'Lempel Ziv Huffman archive file Method 5 (8KiB sliding window)';
    var4.description = var5;
    var5 = ['lha'];
    var4.compatibleExtensions = var5;
    var3[1] = var4;
    var1.signatures = var3;
    var2.LZH = var1;
    var1 = {
        'extension': 'rar',
        'mimeType': 'application/x-rar-compressed',
        'description': 'Roshal ARchive compressed archive file'
    };
    var4 = {};
    var3 = [82, 97, 114, 33, 26, 7, 0];
    var4.sequence = var3;
    var3 = 'Compressed archive v5.00 onwards';
    var4.description = var3;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {};
    var5 = [82, 97, 114, 33, 26, 7, 1, 0];
    var4.sequence = var5;
    var5 = 'Compressed archive v1.50 onwards';
    var4.description = var5;
    var3[1] = var4;
    var1.signatures = var3;
    var2.RAR = var1;
    var1 = {
        'extension': 'zip',
        'mimeType': 'application/zip',
        'description': 'Compressed archive file'
    };
    var4 = {
        'sequence': null,
        'offset': 29152,
        'description': 'WinZip compressed archive'
    };
    var3 = [87, 105, 110, 90, 105, 112];
    var4.sequence = var3;
    var3 = new Array(7);
    var3[0] = var4;
    var4 = {};
    var5 = [80, 75, 3, 4, 20, 0, 1, 0, 99, 0, 0, 0, 0, 0];
    var4.sequence = var5;
    var5 = 'ZLock Pro encrypted ZIP';
    var4.description = var5;
    var3[1] = var4;
    var4 = {
        'sequence': null,
        'offset': 30,
        'description': 'PKLITE compressed ZIP archive (see also PKZIP)'
    };
    var5 = [80, 75, 76, 73, 84, 69];
    var4.sequence = var5;
    var3[2] = var4;
    var4 = {
        'sequence': null,
        'offset': 526,
        'description': 'PKSFX self-extracting executable compressed file (see also PKZIP)'
    };
    var5 = [80, 75, 83, 112, 88];
    var4.sequence = var5;
    var3[3] = var4;
    var4 = {};
    var5 = [80, 75, 3, 4];
    var4.sequence = var5;
    var5 = 'PKZIP archive file - zip file format and multiple formats based on it';
    var4.description = var5;
    var5 = ['aar', 'apk', 'docx', 'epub', 'ipa', 'jar', 'kmz', 'maff', 'msix', 'odp', 'ods', 'odt', 'pk3', 'pk4', 'pptx', 'usdz', 'vsdx', 'xlsx', 'xpi'];
    var4.compatibleExtensions = var5;
    var3[4] = var4;
    var4 = {};
    var5 = [80, 75, 5, 6];
    var4.sequence = var5;
    var5 = 'PKZIP empty archive file - zip file format and multiple formats based on it';
    var4.description = var5;
    var5 = ['aar', 'apk', 'docx', 'epub', 'ipa', 'jar', 'kmz', 'maff', 'msix', 'odp', 'ods', 'odt', 'pk3', 'pk4', 'pptx', 'usdz', 'vsdx', 'xlsx', 'xpi'];
    var4.compatibleExtensions = var5;
    var3[5] = var4;
    var4 = {};
    var5 = [80, 75, 7, 8];
    var4.sequence = var5;
    var5 = 'PKZIP multivolume archive file - zip file format and multiple formats based on it';
    var4.description = var5;
    var5 = ['aar', 'apk', 'docx', 'epub', 'ipa', 'jar', 'kmz', 'maff', 'msix', 'odp', 'ods', 'odt', 'pk3', 'pk4', 'pptx', 'usdz', 'vsdx', 'xlsx', 'xpi'];
    var4.compatibleExtensions = var5;
    var3[6] = var4;
    var1.signatures = var3;
    var2.ZIP = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6]);