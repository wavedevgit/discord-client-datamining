// modules/messages/MosaicMediaType.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var3.MessageAttachmentFlags;
    var _closure1_slot2 = var3;
    var3 = /\.(mp3|m4a|ogg|opus|wav|flac)$/i;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/MosaicMediaType.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun72880: for (var _fun72880_ip = 0;;) switch (_fun72880_ip) {
            case 0:
                var2 = arg0;
                var0 = 'IMAGE';
                var0 = var0 === var2;
                if (var0) {
                    _fun72880_ip = 22;
                    continue _fun72880
                }
            case 14:
                var1 = 'VIDEO';
                var0 = var1 === var2;
            case 22:
                if (var0) {
                    _fun72880_ip = 35;
                    continue _fun72880
                }
            case 25:
                var1 = 'CLIP';
                var0 = var1 === var2;
            case 35:
                if (var0) {
                    _fun72880_ip = 46;
                    continue _fun72880
                }
            case 38:
                var1 = 'VISUAL_PLACEHOLDER';
                var0 = var1 === var2;
            case 46:
                return var0;
        }
    };
    var2.isVisualMedia = var3;
    var3 = function(arg0) { // Environment: var1
        _fun72881: for (var _fun72881_ip = 0;;) switch (_fun72881_ip) {
            case 0:
                var2 = arg0;
                var0 = 'IMAGE';
                var0 = var0 === var2;
                if (var0) {
                    _fun72881_ip = 22;
                    continue _fun72881
                }
            case 14:
                var1 = 'VIDEO';
                var0 = var1 === var2;
            case 22:
                if (var0) {
                    _fun72881_ip = 33;
                    continue _fun72881
                }
            case 25:
                var1 = 'VISUAL_PLACEHOLDER';
                var0 = var1 === var2;
            case 33:
                return var0;
        }
    };
    var2.isGroupableMedia = var3;
    var3 = function(arg0, arg1) { // Original name: getMosaicMediaTypeForAttachment, environment: var1
        _fun72882: for (var _fun72882_ip = 0;;) switch (_fun72882_ip) {
            case 0:
                var7 = arg0;
                var0 = arg1;
                var5 = var7.filename;
                var2 = var7.width;
                var1 = var7.height;
                if (!var0) {
                    _fun72882_ip = 45;
                    continue _fun72882
                }
            case 25:
                var8 = null;
                if (!(var8 != var2)) {
                    _fun72882_ip = 45;
                    continue _fun72882
                }
            case 31:
                var6 = 0;
                if (!(var2 > var6)) {
                    _fun72882_ip = 45;
                    continue _fun72882
                }
            case 37:
                if (!(var8 != var1)) {
                    _fun72882_ip = 45;
                    continue _fun72882
                }
            case 41:
                if (!(!(var1 > var6))) {
                    _fun72882_ip = 162;
                    continue _fun72882
                }
            case 45:
                var2 = null;
                if (!(var2 != var0)) {
                    _fun72882_ip = 87;
                    continue _fun72882
                }
            case 51:
                var1 = _closure1_slot3;
                var0 = var1.test;
                var0 = var0.bind(var1)(var5);
                if (!var0) {
                    _fun72882_ip = 87;
                    continue _fun72882
                }
            case 71:
                var0 = var7.url;
                var1 = var2 != var0;
                var0 = 'AUDIO';
                if (var1) {
                    _fun72882_ip = 157;
                    continue _fun72882
                }
            case 87:
                var1 = var7.url;
                var2 = var2 != var1;
                var3 = 'OTHER';
                var1 = var3;
                if (!var2) {
                    _fun72882_ip = 154;
                    continue _fun72882
                }
            case 106:
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var9.bind(var2)(var4);
                var2 = var4.isPlaintextPreviewableFile;
                var2 = var2.bind(var4)(var5);
                var1 = var3;
                if (!var2) {
                    _fun72882_ip = 154;
                    continue _fun72882
                }
            case 148:
                var1 = 'PLAINTEXT_PREVIEW';
            case 154:
                var0 = var1;
            case 157:
                _fun72882_ip = 343;
                continue _fun72882;
            case 162:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var10 = 1;
                var1 = var1[var10];
                var9 = undefined;
                var2 = var2.bind(var9)(var1);
                var1 = var2.isImageFile;
                var2 = var1.bind(var2)(var5);
                var1 = 'IMAGE';
                if (var2) {
                    _fun72882_ip = 340;
                    continue _fun72882
                }
            case 208:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var10];
                var4 = var4.bind(var9)(var2);
                var2 = var4.isVideoFile;
                var4 = var2.bind(var4)(var5);
                var5 = 'INVALID';
                var2 = var5;
                if (!var4) {
                    _fun72882_ip = 337;
                    continue _fun72882
                }
            case 246:
                var4 = var7.proxy_url;
                var4 = var8 != var4;
                var2 = var5;
                if (!var4) {
                    _fun72882_ip = 337;
                    continue _fun72882
                }
            case 262:
                var5 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 2;
                var4 = var10[var4];
                var5 = var5.bind(var9)(var4);
                var4 = var5.hasFlag;
                var7 = var7.flags;
                var8 = var8 != var7;
                var6 = 0;
                if (!var8) {
                    _fun72882_ip = 305;
                    continue _fun72882
                }
            case 302:
                var6 = var7;
            case 305:
                var3 = _closure1_slot2;
                var3 = var3.IS_CLIP;
                var4 = var4.bind(var5)(var6, var3);
                var3 = 'VIDEO';
                if (!var4) {
                    _fun72882_ip = 334;
                    continue _fun72882
                }
            case 328:
                var3 = 'CLIP';
            case 334:
                var2 = var3;
            case 337:
                var1 = var2;
            case 340:
                var0 = var1;
            case 343:
                return var0;
        }
    };
    var2.getMosaicMediaTypeForAttachment = var3;
    var1 = function(arg0) { // Original name: getMosaicMediaTypeForUnfurledMediaItem, environment: var1
        _fun72883: for (var _fun72883_ip = 0;;) switch (_fun72883_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.contentType;
                var4 = var0.width;
                var1 = var0.height;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun72883_ip = 109;
                    continue _fun72883
                }
            case 25:
                var0 = 0;
                if (!(var4 > var0)) {
                    _fun72883_ip = 109;
                    continue _fun72883
                }
            case 31:
                if (!(var3 != var1)) {
                    _fun72883_ip = 109;
                    continue _fun72883
                }
            case 35:
                if (!(var1 > var0)) {
                    _fun72883_ip = 109;
                    continue _fun72883
                }
            case 39:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = 1;
                var1 = var1[var4];
                var3 = undefined;
                var5 = var5.bind(var3)(var1);
                var1 = var5.isImageContentType;
                var1 = var1.bind(var5)(var2);
                if (var1) {
                    _fun72883_ip = 121;
                    continue _fun72883
                }
            case 78:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isVideoContentType;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun72883_ip = 115;
                    continue _fun72883
                }
            case 109:
                var0 = 'VISUAL_PLACEHOLDER';
                return var0;
            case 115:
                var0 = 'VIDEO';
                return var0;
            case 121:
                var0 = 'IMAGE';
                return var0;
        }
    };
    var2.getMosaicMediaTypeForUnfurledMediaItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3939, 1384, 9125, 2]);