// lib/uploader/UploadTargets.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var9 = 0;
    var3 = var6[var9];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var8 = 1;
    var3 = var6[var8];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var7 = 2;
    var3 = var6[var7];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.Endpoints;
    var _closure1_slot7 = var4;
    var3 = var3.MAX_UPLOAD_COUNT;
    var _closure1_slot8 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getCreateAttachmentURL';
        var0.key = var1;
        var1 = function arg0() {
            var2 = _closure1_slot7;
            var1 = var2.MESSAGE_CREATE_ATTACHMENT_UPLOAD;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'getDeleteUploadURL';
        var0.key = var5;
        var5 = function arg0() {
            var2 = _closure1_slot7;
            var1 = var2.MESSAGE_DELETE_UPLOAD;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getMaxFileSize';
        var0.key = var5;
        var5 = function arg0() {
            _fun37707: for (var _fun37707_ip = 0;;) switch (_fun37707_ip) {
                case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getBasicChannel;
                    var1 = arg0;
                    var3 = var2.bind(var3)(var1);
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.maxFileSize;
                    var4 = null;
                    var4 = var4 == var3;
                    if (var4) {
                        _fun37707_ip = 63;
                        continue _fun37707
                    }
                case 58:
                    var0 = var3.guild_id;
                case 63:
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getMaxAttachmentsCount';
        var0.key = var5;
        var5 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getMaxTotalAttachmentSize';
        var0.key = var5;
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.MAX_TOTAL_ATTACHMENT_SIZE;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'shouldReactNativeCompressUploads';
        var0.key = var5;
        var4 = function() {
            var0 = true;
            return var0;
        };
        var0.get = var4;
        var1[5] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot9 = var3;
    var3 = {};
    var3.MESSAGE_ATTACHMENT = var9;
    var4 = 'MESSAGE_ATTACHMENT';
    var3[var9] = var4;
    var3.GUILD_PRODUCT_ATTACHMENT = var8;
    var4 = 'GUILD_PRODUCT_ATTACHMENT';
    var3[var8] = var4;
    var3.GRAVITY_ATTACHMENT = var7;
    var4 = 'GRAVITY_ATTACHMENT';
    var3[var7] = var4;
    var _closure1_slot10 = var3;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/uploader/UploadTargets.tsx';
    var4 = var5.bind(var6)(var4);
    var2.UploadTargets = var3;
    var1 = function arg0() {
        _fun37711: for (var _fun37711_ip = 0;;) switch (_fun37711_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot10;
                var1 = var1.GUILD_PRODUCT_ATTACHMENT;
                if (!(var1 !== var2)) {
                    _fun37711_ip = 114;
                    continue _fun37711
                }
            case 20:
                var1 = _closure1_slot10;
                var1 = var1.GRAVITY_ATTACHMENT;
                if (!(var1 !== var2)) {
                    _fun37711_ip = 70;
                    continue _fun37711
                }
            case 34:
                var1 = _closure1_slot10;
                var1 = var1.MESSAGE_ATTACHMENT;
                var1 = _closure1_slot9;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var5 = var2;
                var1 = new var5[var1](var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            case 70:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var5 = var2;
                var1 = new var5[var1](var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            case 114:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var5 = var1;
                var0 = new var5[var0](var4);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.getUploadTarget = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1372, 660, 4000, 3998, 4122, 4124, 2]);