// actions/native/UploadActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var1 = 0;
    var7 = var5[var1];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.DraftType;
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function(arg0, arg1) { // Original name: restoreFailedUpload, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'UPLOAD_RESTORE_FAILED_UPLOAD';
        var1.type = var4;
        var4 = arg0;
        var1.messageId = var4;
        var4 = arg1;
        var1.file = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.restoreFailedUpload = var6;
    var6 = function(arg0, arg1) { // Original name: cancel, environment: var3
        _fun78261: for (var _fun78261_ip = 0;;) switch (_fun78261_ip) {
            case 0:
                var1 = arg1;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 2;
                var2 = var0[var3];
                var0 = undefined;
                var6 = var5.bind(var0)(var2);
                var5 = var6.dispatch;
                var2 = {};
                var7 = 'UPLOAD_CANCEL_REQUEST';
                var2.type = var7;
                var7 = arg0;
                var2.channelId = var7;
                var2.file = var1;
                var2 = var5.bind(var6)(var2);
                var5 = _closure1_slot4;
                var2 = var5.getMessageForFile;
                var1 = var1.id;
                var5 = var2.bind(var5)(var1);
                var1 = null;
                if (!(var1 != var5)) {
                    _fun78261_ip = 198;
                    continue _fun78261
                }
            case 86:
                var7 = _closure1_slot2;
                var6 = var7.getDraft;
                var2 = var5.channel_id;
                var1 = _closure1_slot3;
                var1 = var1.ChannelMessage;
                var2 = var6.bind(var7)(var2, var1);
                var1 = '';
                if (!(var1 === var2)) {
                    _fun78261_ip = 198;
                    continue _fun78261
                }
            case 125:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'DRAFT_SAVE';
                var1.type = var6;
                var6 = var5.channel_id;
                var1.channelId = var6;
                var5 = var5.content;
                var1.draft = var5;
                var4 = _closure1_slot3;
                var4 = var4.ChannelMessage;
                var1.draftType = var4;
                var1 = var2.bind(var3)(var1);
            case 198:
                return var0;
        }
    };
    var1.cancel = var6;
    var3 = function(arg0, arg1) { // Original name: cancelUploadItem, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'UPLOAD_ITEM_CANCEL_REQUEST';
        var1.type = var4;
        var4 = arg0;
        var1.file = var4;
        var4 = arg1;
        var1.itemId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.cancelUploadItem = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/native/UploadActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3954, 6572, 806, 2]);