// modules/media/MediaTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var10;
    var5 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.version;
        var0.version = var2;
        var1 = var1.flags;
        var0.flags = var1;
        return var0;
    };
    var _closure1_slot6 = var5;
    var3 = function arg0() {
        _fun36656: for (var _fun36656_ip = 0;;) switch (_fun36656_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 1;
                var0 = var0[var8];
                var2 = undefined;
                var9 = var1.bind(var2)(var0);
                var7 = var9.hasFlag;
                var0 = var5.flags;
                var6 = null;
                var10 = var6 != var0;
                var4 = 0;
                if (!var10) {
                    _fun36656_ip = 53;
                    continue _fun36656
                }
            case 50:
                var4 = var0;
            case 53:
                var0 = _closure1_slot3;
                var0 = var0.CONTAINS_EXPLICIT_MEDIA;
                var0 = var7.bind(var9)(var4, var0);
                var4 = 0;
                if (!var0) {
                    _fun36656_ip = 87;
                    continue _fun36656
                }
            case 74:
                var0 = _closure1_slot4;
                var0 = var0.EXPLICIT;
                var4 = var0 | 0;
            case 87:
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var8];
                var9 = var7.bind(var2)(var0);
                var8 = var9.hasFlag;
                var0 = var5.flags;
                var10 = var6 != var0;
                var7 = 0;
                if (!var10) {
                    _fun36656_ip = 127;
                    continue _fun36656
                }
            case 124:
                var7 = var0;
            case 127:
                var0 = _closure1_slot3;
                var0 = var0.IS_ANIMATED;
                var0 = var8.bind(var9)(var7, var0);
                var1 = 0;
                if (!var0) {
                    _fun36656_ip = 161;
                    continue _fun36656
                }
            case 148:
                var0 = _closure1_slot5;
                var0 = var0.IS_ANIMATED;
                var1 = var0 | 0;
            case 161:
                var0 = {};
                var7 = var5.url;
                var0.url = var7;
                var7 = var5.proxy_url;
                var0.proxyUrl = var7;
                var7 = var5.height;
                var0.height = var7;
                var7 = var5.width;
                var0.width = var7;
                var7 = var5.content_type;
                var0.contentType = var7;
                var7 = var5.original_content_type;
                var0.originalContentType = var7;
                var7 = var5.placeholder;
                var0.placeholder = var7;
                var7 = var5.placeholder_version;
                var0.placeholderVersion = var7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 2;
                var3 = var8[var3];
                var3 = var7.bind(var2)(var3);
                var3 = var3.UnfurledMediaLoadingState;
                var3 = var3.LOADED_SUCCESS;
                var0.loadingState = var3;
                var3 = var5.content_scan_version;
                var3 = var6 == var3;
                var2 = undefined;
                if (var3) {
                    _fun36656_ip = 317;
                    continue _fun36656
                }
            case 297:
                var3 = {};
                var5 = var5.content_scan_version;
                var3.version = var5;
                var3.flags = var4;
                var2 = var3;
            case 317:
                var0.contentScanMetadata = var2;
                var0.flags = var1;
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = function arg0() {
        _fun36657: for (var _fun36657_ip = 0;;) switch (_fun36657_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 3;
                var0 = var0[var5];
                var4 = undefined;
                var6 = var3.bind(var4)(var0);
                var3 = var6.isImageFile;
                var0 = var1.filename;
                var3 = var3.bind(var6)(var0);
                var0 = 'IMAGE';
                if (var3) {
                    _fun36657_ip = 100;
                    continue _fun36657
                }
            case 52:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isVideoFile;
                var1 = var1.filename;
                var2 = var2.bind(var3)(var1);
                var1 = 'INVALID';
                if (!var2) {
                    _fun36657_ip = 97;
                    continue _fun36657
                }
            case 93:
                var1 = 'VIDEO';
            case 97:
                var0 = var1;
            case 100:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var4 = var10[var0];
    var0 = undefined;
    var4 = var9.bind(var0)(var4);
    var4 = var4.MessageAttachmentFlags;
    var _closure1_slot3 = var4;
    var7 = {};
    var11 = 1;
    var7.EXPLICIT = var11;
    var4 = 'EXPLICIT';
    var7[var11] = var4;
    var6 = 2;
    var7.GORE = var6;
    var4 = 'GORE';
    var7[var6] = var4;
    var6 = 4;
    var7.SELF_HARM = var6;
    var4 = 'SELF_HARM';
    var7[var6] = var4;
    var _closure1_slot4 = var7;
    var6 = {};
    var4 = 'native';
    var6.NATIVE = var4;
    var4 = 'jpegli';
    var6.JPEGLI = var4;
    var4 = 'jpeg_ios';
    var6.JPEG_IOS = var4;
    var4 = 'passthrough';
    var6.PASSTHROUGH = var4;
    var4 = {};
    var4.IS_ANIMATED = var11;
    var8 = 'IS_ANIMATED';
    var4[var11] = var8;
    var _closure1_slot5 = var4;
    var8 = 5;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/media/MediaTypes.tsx';
    var8 = var9.bind(var10)(var8);
    var2.ContentScanFlags = var7;
    var2.ImageEncoder = var6;
    var2.toContentScanMetadata = var5;
    var2.UnfurledMediaItemFlags = var4;
    var4 = function arg0() {
        _fun36658: for (var _fun36658_ip = 0;;) switch (_fun36658_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var1 = var2.url;
                var0.url = var1;
                var1 = var2.proxy_url;
                var0.proxyUrl = var1;
                var1 = var2.height;
                var0.height = var1;
                var1 = var2.width;
                var0.width = var1;
                var1 = var2.placeholder;
                var0.placeholder = var1;
                var1 = var2.placeholder_version;
                var0.placeholderVersion = var1;
                var1 = var2.content_type;
                var0.contentType = var1;
                var1 = var2.original_content_type;
                var0.originalContentType = var1;
                var1 = var2.loading_state;
                var0.loadingState = var1;
                var3 = var2.content_scan_metadata;
                var1 = null;
                var4 = var1 != var3;
                var6 = undefined;
                var3 = undefined;
                if (!var4) {
                    _fun36658_ip = 137;
                    continue _fun36658
                }
            case 119:
                var5 = _closure1_slot6;
                var4 = var2.content_scan_metadata;
                var3 = var5.bind(var6)(var4);
            case 137:
                var0.contentScanMetadata = var3;
                var2 = var2.flags;
                var3 = var1 != var2;
                var1 = 0;
                if (!var3) {
                    _fun36658_ip = 159;
                    continue _fun36658
                }
            case 156:
                var1 = var2;
            case 159:
                var0.flags = var1;
                return var0;
        }
    };
    var2.toUnfurledMediaItem = var4;
    var2.messageAttachmentToUnfurledMediaItem = var3;
    var3 = function arg0() {
        _fun36659: for (var _fun36659_ip = 0;;) switch (_fun36659_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 3;
                var0 = var0[var4];
                var7 = undefined;
                var3 = var1.bind(var7)(var0);
                var1 = var3.isImageContentType;
                var0 = var2.contentType;
                var1 = var1.bind(var3)(var0);
                var0 = 'IMAGE';
                if (var1) {
                    _fun36659_ip = 168;
                    continue _fun36659
                }
            case 52:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var4 = var3.bind(var7)(var1);
                var3 = var4.isVideoContentType;
                var1 = var2.contentType;
                var4 = var3.bind(var4)(var1);
                var3 = 'INVALID';
                var1 = var3;
                if (!var4) {
                    _fun36659_ip = 165;
                    continue _fun36659
                }
            case 96:
                var6 = var2.proxyUrl;
                var4 = null;
                var6 = var4 != var6;
                var1 = var3;
                if (!var6) {
                    _fun36659_ip = 165;
                    continue _fun36659
                }
            case 114:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 4;
                var5 = var8[var5];
                var6 = var6.bind(var7)(var5);
                var5 = var6.toURLSafe;
                var2 = var2.proxyUrl;
                var2 = var5.bind(var6)(var2);
                var2 = var4 != var2;
                var1 = var3;
                if (!var2) {
                    _fun36659_ip = 165;
                    continue _fun36659
                }
            case 161:
                var1 = 'VIDEO';
            case 165:
                var0 = var1;
            case 168:
                return var0;
        }
    };
    var2.getUnfurledMediaItemType = var3;
    var3 = function arg0, arg1() {
        var3 = arg0;
        var0 = {};
        var4 = _closure1_slot7;
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var6 = var0;
        var4 = copyDataProperties(var6, var5);
        var1 = _closure1_slot8;
        var2 = var1.bind(var2)(var3);
        var1 = 'type';
        var0[var1] = var2;
        var2 = var3.description;
        var1 = 'alt';
        var0[var1] = var2;
        var2 = {};
        var1 = arg1;
        var2.message = var1;
        var1 = {};
        var4 = 'attachment';
        var1.type = var4;
        var4 = var3.id;
        var1.attachmentId = var4;
        var4 = var3.filename;
        var1.filename = var4;
        var4 = var3.title;
        var1.title = var4;
        var3 = var3.size;
        var1.size = var3;
        var2.identifier = var1;
        var1 = 'sourceMetadata';
        var0[var1] = var2;
        return var0;
    };
    var2.messageAttachmentToMediaItem = var3;
    var3 = function arg0, arg1, arg2() {
        var1 = arg0;
        var0 = {};
        var2 = arg2;
        var0.type = var2;
        var2 = var1.url;
        var0.url = var2;
        var2 = var1.proxyURL;
        var0.proxyUrl = var2;
        var2 = var1.width;
        var0.width = var2;
        var2 = var1.height;
        var0.height = var2;
        var2 = var1.placeholder;
        var0.placeholder = var2;
        var2 = var1.placeholderVersion;
        var0.placeholderVersion = var2;
        var2 = arg1;
        var0.sourceMetadata = var2;
        var1 = var1.contentType;
        var0.contentType = var1;
        return var0;
    };
    var2.embedMediaToMediaItem = var3;
    var1 = function arg0() {
        _fun36662: for (var _fun36662_ip = 0;;) switch (_fun36662_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.width;
                var3 = null;
                var0 = var3 != var0;
                if (!var0) {
                    _fun36662_ip = 28;
                    continue _fun36662
                }
            case 17:
                var4 = var1.width;
                var2 = 0;
                var0 = var4 > var2;
            case 28:
                if (!var0) {
                    _fun36662_ip = 40;
                    continue _fun36662
                }
            case 31:
                var2 = var1.height;
                var0 = var3 != var2;
            case 40:
                if (!var0) {
                    _fun36662_ip = 54;
                    continue _fun36662
                }
            case 43:
                var2 = var1.height;
                var1 = 0;
                var0 = var2 > var1;
            case 54:
                return var0;
        }
    };
    var2.isVisualUnfurledMediaItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1384, 1645, 3980, 1457, 2]);