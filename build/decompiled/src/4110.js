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
    var1.AudioTypes = var0;
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
    var1.AudioTypes = var2;
    var1 = {
        'extension': 'aac',
        'mimeType': 'audio/aac',
        'description': 'Advanced Audio Coding (AAC) is an audio coding standard for lossy digital audio compression'
    };
    var4 = {};
    var3 = [255, 241];
    var4.sequence = var3;
    var3 = 'MPEG-4 Advanced Audio Coding (AAC) Low Complexity (LC) audio file';
    var4.description = var3;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {};
    var5 = [255, 249];
    var4.sequence = var5;
    var5 = 'MPEG-2 Advanced Audio Coding (AAC) Low Complexity (LC) audio file';
    var4.description = var5;
    var3[1] = var4;
    var1.signatures = var3;
    var2.AAC = var1;
    var1 = {
        'extension': 'amr',
        'mimeType': 'audio/amr',
        'description': 'Adaptive Multi-Rate ACELP (Algebraic Code Excited Linear Prediction) Codec, commonly audio format with GSM cell phones'
    };
    var4 = {};
    var3 = [35, 33, 65, 77, 82];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.AMR = var1;
    var1 = {
        'extension': 'flac',
        'mimeType': 'audio/x-flac',
        'description': 'Free Lossless Audio Codec file'
    };
    var4 = {};
    var3 = [102, 76, 97, 67, 0, 0, 0, 34];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.FLAC = var1;
    var1 = {
        'extension': 'm4a',
        'mimeType': 'audio/x-m4a',
        'description': 'Apple Lossless Audio Codec file'
    };
    var4 = {};
    var3 = [102, 116, 121, 112, 77, 52, 65, 32];
    var4.sequence = var3;
    var3 = 4;
    var4.offset = var3;
    var3 = ['aac'];
    var4.compatibleExtensions = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.M4A = var1;
    var1 = {
        'extension': 'mp3',
        'mimeType': 'audio/mpeg',
        'description': 'A digital audio file format that uses compression to reduce file size while maintaining high quality sound'
    };
    var4 = {};
    var3 = [255, 251];
    var4.sequence = var3;
    var5 = 'MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)';
    var4.description = var5;
    var3 = new Array(4);
    var3[0] = var4;
    var4 = {};
    var6 = [255, 243];
    var4.sequence = var6;
    var4.description = var5;
    var3[1] = var4;
    var4 = {};
    var6 = [255, 242];
    var4.sequence = var6;
    var4.description = var5;
    var3[2] = var4;
    var4 = {};
    var5 = [73, 68, 51];
    var4.sequence = var5;
    var5 = 'MP3 file with an ID3v2 container';
    var4.description = var5;
    var3[3] = var4;
    var1.signatures = var3;
    var2.MP3 = var1;
    var1 = {
        'extension': 'wav',
        'mimeType': 'audio/wav',
        'description': 'Waveform Audio File Format'
    };
    var4 = {};
    var3 = [82, 73, 70, 70, 87, 65, 86, 69, 102, 109, 116, 32];
    var4.sequence = var3;
    var3 = [4, 5, 6, 7];
    var4.skippedBytes = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.WAV = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6]);