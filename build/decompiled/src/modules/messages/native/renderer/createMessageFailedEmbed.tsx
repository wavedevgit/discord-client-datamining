// modules/messages/native/renderer/createMessageFailedEmbed.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageFailureState;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageEmbedTypes;
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/createMessageFailedEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun56183: for (var _fun56183_ip = 0;;) switch (_fun56183_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.uploaderFile;
                var1 = var0.useAttachmentUploadPreview;
                var4 = var0.colors;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun56183_ip = 145;
                    continue _fun56183
                }
            case 26:
                var0 = {};
                var5 = _closure1_slot4;
                var5 = var5.TEXT;
                var0.type = var5;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 4;
                var6 = var10[var5];
                var8 = undefined;
                var6 = var9.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var10[var5];
                var5 = var9.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5.lBLP4u;
                var5 = var6.bind(var7)(var5);
                var0.messageSendError = var5;
                var2 = _closure1_slot3;
                var2 = var2.UNSPECIFIED;
                var0.failureState = var2;
                var2 = true;
                var0.disableBackgroundColor = var2;
                var2 = var4.failedMessageBodyTextColor;
                var0.bodyTextColor = var2;
                _fun56183_ip = 533;
                continue _fun56183;
            case 145:
                if (var1) {
                    _fun56183_ip = 369;
                    continue _fun56183
                }
            case 151:
                var1 = {};
                var2 = _closure1_slot4;
                var2 = var2.TEXT;
                var1.type = var2;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 4;
                var8 = var10[var2];
                var7 = undefined;
                var8 = var6.bind(var7)(var8);
                var9 = var8.intl;
                var8 = var9.formatToPlainString;
                var2 = var10[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.t;
                var6 = var2.D0noUt;
                var2 = {};
                var10 = var3.attachmentsCount;
                var2.count = var10;
                var2 = var8.bind(var9)(var6, var2);
                var1.numAttachments = var2;
                var2 = _closure1_slot3;
                var2 = var2.UPLOAD_FAILED;
                var1.failureState = var2;
                var8 = var3.currentSize;
                var2 = '';
                var6 = 0;
                if (!(var6 !== var8)) {
                    _fun56183_ip = 343;
                    continue _fun56183
                }
            case 277:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 6;
                var5 = var8[var5];
                var6 = var6.bind(var7)(var5);
                var5 = var6.sizeString;
                var3 = var3.currentSize;
                var7 = var5.bind(var6)(var3);
                var3 = global;
                var3 = var3.HermesInternal;
                var6 = var3.concat;
                var5 = ' (';
                var3 = ')';
                var2 = var6.bind(var5)(var7, var3);
            case 343:
                var2 = '' + var2;
                var1.attachmentsSize = var2;
                var2 = var4.embedBodyTextColor;
                var1.bodyTextColor = var2;
                _fun56183_ip = 530;
                continue _fun56183;
            case 369:
                var2 = {};
                var5 = _closure1_slot4;
                var5 = var5.TEXT;
                var2.type = var5;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 4;
                var9 = var8[var6];
                var7 = undefined;
                var9 = var5.bind(var7)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var6 = var8[var6];
                var6 = var5.bind(var7)(var6);
                var6 = var6.t;
                var6 = var6.lBLP4u;
                var6 = var9.bind(var10)(var6);
                var2.messageSendError = var6;
                var6 = _closure1_slot3;
                var6 = var6.UNSPECIFIED;
                var2.failureState = var6;
                var6 = true;
                var2.disableBackgroundColor = var6;
                var4 = var4.failedMessageBodyTextColor;
                var2.bodyTextColor = var4;
                var4 = 2;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.getAssetUriForEmbed;
                var6 = _closure1_slot1;
                var3 = 5;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var4.bind(var5)(var3);
                var2.iconURL = var3;
                var1 = var2;
            case 530:
                var0 = var1;
            case 533:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        var0 = arg0;
        var3 = var0.errorMessage;
        var2 = var0.colors;
        var0 = {};
        var4 = _closure1_slot4;
        var4 = var4.TEXT;
        var0.type = var4;
        var0.messageSendError = var3;
        var3 = _closure1_slot3;
        var3 = var3.AUTO_MODERATION_BLOCKED_MESSAGE;
        var0.failureState = var3;
        var3 = true;
        var0.disableBackgroundColor = var3;
        var2 = var2.automodBlockedBodyTextColor;
        var0.bodyTextColor = var2;
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var3 = var3.bind(var5)(var2);
        var2 = var3.getAssetUriForEmbed;
        var4 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        var0.iconURL = var1;
        return var0;
    };
    var2.createAutomodBlockedMessageEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6517, 660, 6645, 6793, 1234, 6794, 4009, 2]);