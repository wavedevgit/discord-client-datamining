// modules/media_uploads/experiments/MessageAttachmentUploadsChecksumExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var7 = var4.bind(var0)(var1);
    var6 = var7.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2025-03_message_attachment_uploads_checksum',
        'label': 'Validate checksum of message attachment uploads'
    };
    var3 = {
        'enabled': false,
        'enforced': false,
        'largerChunks': false
    };
    var1.defaultConfig = var3;
    var9 = {
        'id': 1,
        'label': 'Control 2'
    };
    var3 = 1;
    var8 = {
        'enabled': false,
        'enforced': false,
        'largerChunks': false
    };
    var9.config = var8;
    var8 = new Array(4);
    var8[0] = var9;
    var9 = {
        'id': 2,
        'label': 'Validate without enforcement'
    };
    var10 = {
        'enabled': true,
        'enforced': false,
        'largerChunks': false
    };
    var9.config = var10;
    var8[1] = var9;
    var9 = {
        'id': 3,
        'label': 'Validate without enforcement (larger chunks)'
    };
    var10 = {
        'enabled': true,
        'enforced': false,
        'largerChunks': true
    };
    var9.config = var10;
    var8[2] = var9;
    var9 = {
        'id': 4,
        'label': 'Validate with enforcement'
    };
    var10 = {
        'enabled': true,
        'enforced': true,
        'largerChunks': false
    };
    var9.config = var10;
    var8[3] = var9;
    var1.treatments = var8;
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_uploads/experiments/MessageAttachmentUploadsChecksumExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3115, 2]);