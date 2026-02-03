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
    var1.ImageTypes = var0;
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
    var1.ImageTypes = var2;
    var1 = {
        'extension': 'avif',
        'mimeType': 'image/avif',
        'description': 'Alliance for Open Media (AOMedia) Video 1 (AV1) Image File'
    };
    var4 = {};
    var3 = [0, 0, 0];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.AVIF = var1;
    var1 = {
        'extension': 'bmp',
        'mimeType': 'image/bmp',
        'description': 'A bitmap format used mostly in Windows'
    };
    var4 = {};
    var3 = [66, 77];
    var4.sequence = var3;
    var3 = ['dib'];
    var4.compatibleExtensions = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.BMP = var1;
    var1 = {
        'extension': 'bpg',
        'mimeType': 'image/bpg',
        'description': 'Better Portable Graphics image format'
    };
    var4 = {};
    var3 = [66, 80, 71, 251];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.BPG = var1;
    var1 = {
        'extension': 'cr2',
        'mimeType': 'image/x-canon-cr2',
        'description': 'Canon digital camera RAW file'
    };
    var4 = {};
    var3 = [73, 73, 42, 0, 16, 0, 0, 0, 67, 82];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.CR2 = var1;
    var1 = {
        'extension': 'exr',
        'mimeType': 'image/x-exr',
        'description': 'OpenEXR bitmap image format'
    };
    var4 = {};
    var3 = [118, 47, 49, 1];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.EXR = var1;
    var1 = {
        'extension': 'gif',
        'mimeType': 'image/gif',
        'description': 'Image file encoded in the Graphics Interchange Format (GIF)'
    };
    var4 = {};
    var3 = [71, 73, 70, 56, 55, 97];
    var4.sequence = var3;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {};
    var5 = [71, 73, 70, 56, 57, 97];
    var4.sequence = var5;
    var3[1] = var4;
    var1.signatures = var3;
    var2.GIF = var1;
    var1 = {
        'extension': 'heic',
        'mimeType': 'image/heic',
        'description': 'A variant of the HEIF (High Efficiency Image Format) that store images on the latest Apple devices.'
    };
    var4 = {};
    var3 = [102, 116, 121, 112, 104, 101, 105, 99];
    var4.sequence = var3;
    var5 = 4;
    var4.offset = var5;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {};
    var6 = [102, 116, 121, 112, 109];
    var4.sequence = var6;
    var4.offset = var5;
    var3[1] = var4;
    var1.signatures = var3;
    var2.HEIC = var1;
    var1 = {
        'extension': 'ico',
        'mimeType': 'image/x-icon',
        'description': 'Computer icon encoded in ICO file format'
    };
    var4 = {};
    var3 = [0, 0, 1, 0];
    var4.sequence = var3;
    var3 = ['spl'];
    var4.compatibleExtensions = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.ICO = var1;
    var1 = {
        'extension': 'jpeg',
        'mimeType': 'image/jpeg',
        'description': 'JPEG (Joint Photographic Experts Group) is a widely used lossy image compression format.'
    };
    var4 = {};
    var3 = [255, 216, 255, 225, 69, 120, 105, 102, 0];
    var4.sequence = var3;
    var3 = [4, 5];
    var4.skippedBytes = var3;
    var3 = 'Digital camera JPG using Exchangeable Image File Format (EXIF)';
    var4.description = var3;
    var3 = new Array(8);
    var3[0] = var4;
    var4 = {};
    var5 = [255, 216, 255, 232, 83, 80, 73, 70, 70, 0];
    var4.sequence = var5;
    var5 = [4, 5];
    var4.skippedBytes = var5;
    var5 = 'Still Picture Interchange File Format (SPIFF)';
    var4.description = var5;
    var3[1] = var4;
    var4 = {};
    var5 = [255, 216, 255, 224, 0, 16, 74, 70, 73, 70, 0, 0];
    var4.sequence = var5;
    var5 = 'JPEG raw or in the JFIF or Exif file format';
    var4.description = var5;
    var3[2] = var4;
    var4 = {};
    var6 = [255, 216, 255, 238];
    var4.sequence = var6;
    var4.description = var5;
    var3[3] = var4;
    var4 = {};
    var6 = [255, 216, 255, 225, 69, 120, 105, 102, 0, 0];
    var4.sequence = var6;
    var6 = [4, 5];
    var4.skippedBytes = var6;
    var4.description = var5;
    var3[4] = var4;
    var4 = {};
    var6 = [255, 216, 255, 224, 74, 70, 73, 70, 0];
    var4.sequence = var6;
    var6 = [4, 5];
    var4.skippedBytes = var6;
    var6 = 'JPEG/JFIF graphics file';
    var4.description = var6;
    var6 = ['jfif', 'jpe'];
    var4.compatibleExtensions = var6;
    var3[5] = var4;
    var4 = {};
    var6 = [255, 216, 255, 224];
    var4.sequence = var6;
    var4.description = var5;
    var3[6] = var4;
    var4 = {};
    var5 = [255, 216];
    var4.sequence = var5;
    var5 = 'Generic JPEGimage file';
    var4.description = var5;
    var5 = ['jpe'];
    var4.compatibleExtensions = var5;
    var3[7] = var4;
    var1.signatures = var3;
    var2.JPEG = var1;
    var1 = {
        'extension': 'pbm',
        'mimeType': 'image/x-portable-bitmap',
        'description': 'PBM (Portable Bitmap) is a simple monochrome bitmap image format that uses plain text ASCII characters to represent binary image data'
    };
    var4 = {};
    var3 = [80, 49, 10];
    var4.sequence = var3;
    var3 = 'Portable bitmap ASCII';
    var4.description = var3;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {};
    var5 = [80, 52, 10];
    var4.sequence = var5;
    var5 = 'Portable bitmap binary';
    var4.description = var5;
    var3[1] = var4;
    var1.signatures = var3;
    var2.PBM = var1;
    var1 = {
        'extension': 'pgm',
        'mimeType': 'image/x-portable-graymap',
        'description': 'PGM (Portable Graymap) is a simple grayscale image format that uses ASCII text characters to represent binary image data.'
    };
    var4 = {};
    var3 = [80, 50, 10];
    var4.sequence = var3;
    var3 = 'Portable Gray Map ASCII';
    var4.description = var3;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {};
    var5 = [80, 53, 10];
    var4.sequence = var5;
    var5 = 'Portable Gray Map binary';
    var4.description = var5;
    var3[1] = var4;
    var1.signatures = var3;
    var2.PGM = var1;
    var1 = {
        'extension': 'png',
        'mimeType': 'image/png',
        'description': 'PNG (Portable Network Graphics) is a lossless image compression format that supports a wide range of color depths and transparency and is widely used for high-quality graphics.'
    };
    var4 = {};
    var3 = [137, 80, 78, 71, 13, 10, 26, 10];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.PNG = var1;
    var1 = {
        'extension': 'ppm',
        'mimeType': 'image/x-portable-pixmap',
        'description': 'PPM (Portable Pixmap) is a simple color image format in the Portable Network Graphics (PNG) suite.'
    };
    var4 = {};
    var3 = [80, 51, 10];
    var4.sequence = var3;
    var3 = 'Portable Pixmap ASCII';
    var4.description = var3;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {};
    var5 = [80, 54, 10];
    var4.sequence = var5;
    var5 = 'Portable Pixmap binary';
    var4.description = var5;
    var3[1] = var4;
    var1.signatures = var3;
    var2.PPM = var1;
    var1 = {
        'extension': 'psd',
        'mimeType': 'image/vnd.adobe.photoshop',
        'description': 'PSD (Photoshop Document) is an Adobe Photoshop image file format'
    };
    var4 = {};
    var3 = [56, 66, 80, 83];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.PSD = var1;
    var1 = {
        'extension': 'webp',
        'mimeType': 'image/webp',
        'description': 'A modern image format that provides superior lossless and lossy compression for images on the web'
    };
    var4 = {};
    var3 = [82, 73, 70, 70, 87, 69, 66, 80];
    var4.sequence = var3;
    var3 = [4, 5, 6, 7];
    var4.skippedBytes = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.WEBP = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6]);