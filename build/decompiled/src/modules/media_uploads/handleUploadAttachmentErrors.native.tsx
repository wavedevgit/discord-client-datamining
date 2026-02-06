// modules/media_uploads/handleUploadAttachmentErrors.native.tsx
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
    var6 = var3.AbortCodes;
    var _closure1_slot3 = var6;
    var3 = var3.MAX_UPLOAD_COUNT;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_uploads/handleUploadAttachmentErrors.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61580: for (var _fun61580_ip = 0;;) switch (_fun61580_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.file;
                var8 = var0.guildId;
                var4 = var0.analyticsLocations;
                var1 = var0.code;
                var5 = var0.reason;
                var0 = _closure1_slot3;
                var0 = var0.ENTITY_TOO_LARGE;
                if (!(var1 !== var0)) {
                    _fun61580_ip = 550;
                    continue _fun61580
                }
            case 51:
                var0 = _closure1_slot3;
                var0 = var0.TOO_MANY_ATTACHMENTS;
                if (!(var1 !== var0)) {
                    _fun61580_ip = 397;
                    continue _fun61580
                }
            case 68:
                var0 = _closure1_slot3;
                var0 = var0.ENTITY_EMPTY;
                if (!(var1 !== var0)) {
                    _fun61580_ip = 250;
                    continue _fun61580
                }
            case 85:
                var0 = _closure1_slot3;
                var0 = var0.INVALID_FILE_ASSET;
                var0 = var1 === var0;
                if (!var0) {
                    _fun61580_ip = 245;
                    continue _fun61580
                }
            case 105:
                var2 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 3;
                var1 = var14[var1];
                var13 = undefined;
                var3 = var2.bind(var13)(var1);
                var2 = var3.show;
                var1 = {};
                var12 = _closure1_slot0;
                var9 = 4;
                var10 = var14[var9];
                var10 = var12.bind(var13)(var10);
                var15 = var10.intl;
                var11 = var15.string;
                var10 = var14[var9];
                var10 = var12.bind(var13)(var10);
                var10 = var10.t;
                var10 = var10.B3vFdU;
                var10 = var11.bind(var15)(var10);
                var1.title = var10;
                var10 = var14[var9];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var14[var9];
                var9 = var12.bind(var13)(var9);
                var9 = var9.t;
                var9 = var9.zMEjJg;
                var9 = var10.bind(var11)(var9);
                var1.body = var9;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 245:
                _fun61580_ip = 392;
                continue _fun61580;
            case 250:
                var2 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 3;
                var1 = var14[var1];
                var13 = undefined;
                var3 = var2.bind(var13)(var1);
                var2 = var3.show;
                var1 = {};
                var12 = _closure1_slot0;
                var9 = 4;
                var10 = var14[var9];
                var10 = var12.bind(var13)(var10);
                var15 = var10.intl;
                var11 = var15.string;
                var10 = var14[var9];
                var10 = var12.bind(var13)(var10);
                var10 = var10.t;
                var10 = var10.B3vFdU;
                var10 = var11.bind(var15)(var10);
                var1.title = var10;
                var10 = var14[var9];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var14[var9];
                var9 = var12.bind(var13)(var9);
                var9 = var9.t;
                var9 = var9["9ZpT2C"];
                var9 = var10.bind(var11)(var9);
                var1.body = var9;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 392:
                _fun61580_ip = 548;
                continue _fun61580;
            case 397:
                var2 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 3;
                var1 = var14[var1];
                var13 = undefined;
                var3 = var2.bind(var13)(var1);
                var2 = var3.show;
                var1 = {};
                var10 = _closure1_slot0;
                var9 = 4;
                var11 = var14[var9];
                var11 = var10.bind(var13)(var11);
                var15 = var11.intl;
                var12 = var15.string;
                var11 = var14[var9];
                var11 = var10.bind(var13)(var11);
                var11 = var11.t;
                var11 = var11.wOr6hB;
                var11 = var12.bind(var15)(var11);
                var1.title = var11;
                var11 = var14[var9];
                var11 = var10.bind(var13)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var9 = var14[var9];
                var9 = var10.bind(var13)(var9);
                var9 = var9.t;
                var10 = var9["qqyp/e"];
                var9 = {};
                var13 = _closure1_slot4;
                var9.limit = var13;
                var9 = var11.bind(var12)(var10, var9);
                var1.body = var9;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 548:
                _fun61580_ip = 644;
                continue _fun61580;
            case 550:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 1;
                var1 = var9[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.file = var7;
                var7 = _closure1_slot0;
                var6 = 2;
                var6 = var9[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.maxFileSize;
                var6 = var6.bind(var7)(var8);
                var1.maxSize = var6;
                var1.analyticsLocations = var4;
                var4 = null;
                var6 = var4 == var5;
                var4 = undefined;
                if (var6) {
                    _fun61580_ip = 632;
                    continue _fun61580
                }
            case 627:
                var4 = var5.type;
            case 632:
                var1.errorReason = var4;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 644:
                return var0;
        }
    };
    var2.handleUploadMessageAttachmentsErrors = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 7636, 4009, 4003, 1234, 2]);