// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4.value = var1;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var4 = var4.bind(var0)(var5);
    var4 = var4.Platform;
    var6 = var3.Object;
    var5 = var6.freeze;
    var4 = {
        'allFiles': '*/*',
        'audio': 'audio/*',
        'csv': null,
        'doc': 'application/msword',
        'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'images': 'image/*',
        'pdf': 'application/pdf',
        'plainText': 'text/plain',
        'json': 'application/json',
        'ppt': 'application/vnd.ms-powerpoint',
        'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'video': 'video/*',
        'xls': 'application/vnd.ms-excel',
        'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'zip': 'application/zip'
    };
    var7 = ['text/csv', 'text/comma-separated-values'];
    var4.csv = var7;
    var4 = var5.bind(var6)(var4);
    var6 = var3.Object;
    var5 = var6.freeze;
    var3 = {
        'allFiles': 'public.item',
        'audio': 'public.audio',
        'csv': 'public.comma-separated-values-text',
        'doc': 'com.microsoft.word.doc',
        'docx': 'org.openxmlformats.wordprocessingml.document',
        'images': 'public.image',
        'pdf': 'com.adobe.pdf',
        'plainText': 'public.plain-text',
        'json': 'public.json',
        'ppt': 'com.microsoft.powerpoint.ppt',
        'pptx': 'org.openxmlformats.presentationml.presentation',
        'video': 'public.movie',
        'xls': 'com.microsoft.excel.xls',
        'xlsx': 'org.openxmlformats.spreadsheetml.sheet',
        'zip': 'public.zip-archive'
    };
    var5 = var5.bind(var6)(var3);
    var3 = {};
    var3.android = var4;
    var3.ios = var5;
    var3.macos = var5;
    var3.windows = var4;
    var3.web = var4;
    var3 = var3.android;
    var2.types = var3;
    var2.typesAreEqual = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);