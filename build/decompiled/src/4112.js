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
    var1.VideoTypes = var0;
    var2 = function() { // Original name: VideoTypes, environment: var4
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = undefined;
        var1 = this;
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var _closure1_slot1 = var2;
    var2 = var3.bind(var0)(var2);
    var1.VideoTypes = var2;
    var1 = {
        'extension': 'avi',
        'mimeType': 'video/x-msvideo',
        'description': 'Audio Video Interleave video format'
    };
    var4 = {};
    var3 = [82, 73, 70, 70, 65, 86, 73, 32, 76, 73, 83, 84];
    var4.sequence = var3;
    var3 = [4, 5, 6, 7];
    var4.skippedBytes = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.AVI = var1;
    var1 = {
        'extension': 'flv',
        'mimeType': 'video/x-flv',
        'description': 'Flash Video file'
    };
    var4 = {};
    var3 = [70, 76, 86, 1];
    var4.sequence = var3;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {
        'sequence': null,
        'description': 'ISO Media, MPEG v4 system, or iTunes AVC-LC file',
        'offset': 4
    };
    var5 = [102, 116, 121, 112, 77, 52, 86, 32];
    var4.sequence = var5;
    var6 = 4;
    var5 = ['mp4', 'm4v'];
    var4.compatibleExtensions = var5;
    var3[1] = var4;
    var1.signatures = var3;
    var2.FLV = var1;
    var1 = {
        'extension': 'm4v',
        'mimeType': 'video/x-m4v',
        'description': "Apple's video container format, very similar to MP4"
    };
    var4 = {
        'sequence': null,
        'description': 'MPEG-4 video | QuickTime file',
        'offset': 4
    };
    var3 = [102, 116, 121, 112, 109, 112, 52, 50];
    var4.sequence = var3;
    var3 = ['mp4'];
    var4.compatibleExtensions = var3;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {
        'sequence': null,
        'description': 'ISO Media, MPEG v4 system, or iTunes AVC-LC file',
        'offset': 4
    };
    var5 = [102, 116, 121, 112, 77, 52, 86, 32];
    var4.sequence = var5;
    var5 = ['mp4', 'flv'];
    var4.compatibleExtensions = var5;
    var3[1] = var4;
    var1.signatures = var3;
    var2.M4V = var1;
    var1 = {
        'extension': 'mkv',
        'mimeType': 'video/x-matroska',
        'description': 'MKV (Matroska Video) is a flexible, open-source media container format that supports multiple audio, video, and subtitle streams in a single file'
    };
    var5 = {};
    var3 = [26, 69, 223, 163];
    var5.sequence = var3;
    var3 = 'EBML identifier';
    var5.description = var3;
    var4 = ['webm', 'mka', 'mks', 'mk3d'];
    var5.compatibleExtensions = var4;
    var4 = new Array(1);
    var4[0] = var5;
    var1.signatures = var4;
    var2.MKV = var1;
    var1 = {
        'extension': 'mov',
        'mimeType': 'video/quicktime',
        'description': 'QuickTime movie file'
    };
    var5 = {};
    var4 = [102, 116, 121, 112, 113, 116, 32, 32];
    var5.sequence = var4;
    var5.offset = var6;
    var4 = new Array(2);
    var4[0] = var5;
    var5 = {};
    var7 = [109, 111, 111, 118];
    var5.sequence = var7;
    var5.offset = var6;
    var4[1] = var5;
    var1.signatures = var4;
    var2.MOV = var1;
    var1 = {
        'extension': 'mp4',
        'mimeType': 'video/mp4',
        'description': 'A multimedia container format widely used for storing audio, video, and other data, and is known for its high compression efficiency and compatibility with many devices'
    };
    var5 = {
        'sequence': null,
        'description': 'MPEG-4 video file',
        'offset': 4
    };
    var4 = [102, 116, 121, 112, 77, 83, 78, 86];
    var5.sequence = var4;
    var4 = new Array(3);
    var4[0] = var5;
    var5 = {
        'sequence': null,
        'description': 'ISO Base Media file (MPEG-4) v1',
        'offset': 4
    };
    var6 = [102, 116, 121, 112, 105, 115, 111, 109];
    var5.sequence = var6;
    var4[1] = var5;
    var5 = {
        'sequence': null,
        'description': 'ISO Media, MPEG v4 system, or iTunes AVC-LC file',
        'offset': 4
    };
    var6 = [102, 116, 121, 112, 77, 52, 86, 32];
    var5.sequence = var6;
    var6 = ['m4v', 'flv'];
    var5.compatibleExtensions = var6;
    var4[2] = var5;
    var1.signatures = var4;
    var2.MP4 = var1;
    var1 = {
        'extension': 'ogg',
        'mimeType': 'video/ogg',
        'description': 'Ogg Vorbis Codec compressed Multimedia file'
    };
    var5 = {};
    var4 = [79, 103, 103, 83, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0];
    var5.sequence = var4;
    var4 = ['oga', 'ogv', 'ogx'];
    var5.compatibleExtensions = var4;
    var4 = new Array(1);
    var4[0] = var5;
    var1.signatures = var4;
    var2.OGG = var1;
    var1 = {
        'extension': 'swf',
        'mimeType': 'application/x-shockwave-flash',
        'description': 'SWF (Shockwave Flash) is a file format for multimedia, vector graphics, and ActionScript, used for creating and delivering animations, games, and other interactive web-based content'
    };
    var5 = {};
    var4 = [67, 87, 83];
    var5.sequence = var4;
    var4 = 'Macromedia Shockwave Flash player file (zlib compressed, SWF 6 and later)';
    var5.description = var4;
    var4 = new Array(3);
    var4[0] = var5;
    var5 = {};
    var6 = [70, 87, 83];
    var5.sequence = var6;
    var6 = 'Macromedia Shockwave Flash player file (uncompressed)';
    var5.description = var6;
    var4[1] = var5;
    var5 = {};
    var7 = [90, 87, 83];
    var5.sequence = var7;
    var5.description = var6;
    var4[2] = var5;
    var1.signatures = var4;
    var2.SWF = var1;
    var1 = {
        'extension': 'webm',
        'mimeType': 'video/webm',
        'description': 'WebM is a royalty-free, open-source media file format optimized for web delivery, using efficient VP8 video and Vorbis audio codecs'
    };
    var4 = {};
    var5 = [26, 69, 223, 163];
    var4.sequence = var5;
    var4.description = var3;
    var3 = ['mkv'];
    var4.compatibleExtensions = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.WEBM = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6]);