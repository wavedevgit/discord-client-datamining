// modules/media_uploads/uploadMessageAttachments.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _uploadMessageAttachments, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun54585: for (var _fun54585_ip = 0;;) switch (_fun54585_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun54585_ip = 406;
                            continue _fun54585
                        }
                    case 15:
                        var2 = var1.channelId;
                        var _closure4_slot0 = var2;
                        var9 = var1.message;
                        var8 = var1.nonce;
                        var _closure4_slot1 = var8;
                        var6 = var1.items;
                        var1 = var1.shouldUploadFailureSendNotification;
                        var _closure4_slot2 = var1;
                        var2 = undefined;
                        var _closure4_slot3 = var2;
                        var _closure4_slot4 = var2;
                        SaveGenerator(address = 68);
                    case 66:
                        return var2;
                    case 68:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun54585_ip = 403;
                            continue _fun54585
                        }
                    case 77:
                        var7 = _closure1_slot5;
                        var5 = var7.has;
                        var5 = var5.bind(var7)(var8);
                        if (var5) {
                            _fun54585_ip = 400;
                            continue _fun54585
                        }
                    case 100:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 2;
                        var5 = var8[var5];
                        var5 = var7.bind(var2)(var5);
                        var7 = var5.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var5
                            }
                        });
                        var14 = var7;
                        var5 = new var14[var5](var13);
                        var5 = var5 instanceof Object ? var5 : var7;
                        _closure4_slot3 = var5;
                        var7 = var5._file;
                        var11 = var7.id;
                        var7 = global;
                        var7 = var7.HermesInternal;
                        var10 = var7.concat;
                        var7 = 'pending-upload-';
                        var10 = var10.bind(var7)(var11);
                        var7 = _closure1_slot0;
                        var4 = 3;
                        var4 = var8[var4];
                        var8 = var7.bind(var2)(var4);
                        var7 = var8.createMessageRecord;
                        var4 = {};
                        var13 = var4;
                        var12 = var9;
                        var9 = copyDataProperties(var13, var12);
                        var9 = 'key';
                        var4[var9] = var10;
                        var4 = var7.bind(var8)(var4);
                        _closure4_slot4 = var4;
                        var8 = var5.on;
                        var7 = 'start';
                        var4 = function(arg0) { // Environment: var3
                            var3 = _closure1_slot5;
                            var2 = var3.add;
                            var1 = _closure4_slot1;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var5 = 'UPLOAD_START';
                            var1.type = var5;
                            var5 = _closure4_slot0;
                            var1.channelId = var5;
                            var5 = arg0;
                            var1.file = var5;
                            var5 = _closure4_slot3;
                            var1.uploader = var5;
                            var4 = _closure4_slot4;
                            var1.message = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var4 = var8.bind(var5)(var7, var4);
                        var8 = var5.on;
                        var7 = 'compression-progress';
                        var4 = function(arg0) { // Environment: var3
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'UPLOAD_COMPRESSION_PROGRESS';
                            var1.type = var4;
                            var4 = _closure4_slot0;
                            var1.channelId = var4;
                            var4 = arg0;
                            var1.file = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var4 = var8.bind(var5)(var7, var4);
                        var8 = var5.on;
                        var7 = 'progress';
                        var4 = function(arg0) { // Environment: var3
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'UPLOAD_PROGRESS';
                            var1.type = var4;
                            var4 = _closure4_slot0;
                            var1.channelId = var4;
                            var4 = arg0;
                            var1.file = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var4 = var8.bind(var5)(var7, var4);
                        var8 = var5.on;
                        var7 = 'error';
                        var4 = function(arg0) { // Environment: var3
                            var3 = _closure1_slot5;
                            var2 = var3.delete;
                            var1 = _closure4_slot1;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure4_slot3;
                            var1 = var2.cancel;
                            var1 = var1.bind(var2)();
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var5 = 'UPLOAD_FAIL';
                            var1.type = var5;
                            var5 = _closure4_slot0;
                            var1.channelId = var5;
                            var5 = arg0;
                            var1.file = var5;
                            var5 = _closure4_slot4;
                            var5 = var5.id;
                            var1.messageId = var5;
                            var4 = _closure4_slot2;
                            var1.shouldSendNotification = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var4 = var8.bind(var5)(var7, var4);
                        var8 = var5.on;
                        var7 = 'complete';
                        var4 = function(arg0) { // Environment: var3
                            _fun54590: for (var _fun54590_ip = 0;;) switch (_fun54590_ip) {
                                case 0:
                                    var3 = arg0;
                                    var _closure5_slot0 = var3;
                                    var6 = _closure1_slot5;
                                    var5 = var6.delete;
                                    var4 = _closure4_slot1;
                                    var4 = var5.bind(var6)(var4);
                                    var5 = _closure1_slot4;
                                    var4 = var5.getMessageForFile;
                                    var3 = var3.id;
                                    var5 = var4.bind(var5)(var3);
                                    var7 = null;
                                    var3 = var7 != var5;
                                    if (!var3) {
                                        _fun54590_ip = 75;
                                        continue _fun54590
                                    }
                                case 62:
                                    var6 = var5.content;
                                    var4 = '';
                                    var3 = var4 === var6;
                                case 75:
                                    if (!var3) {
                                        _fun54590_ip = 88;
                                        continue _fun54590
                                    }
                                case 78:
                                    var4 = _closure4_slot3;
                                    var3 = var4._aborted;
                                case 88:
                                    if (!var3) {
                                        _fun54590_ip = 161;
                                        continue _fun54590
                                    }
                                case 91:
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var2 = 4;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var4 = var4.bind(var2)(var3);
                                    var3 = var4.dispatch;
                                    var2 = {};
                                    var6 = 'MESSAGE_DELETE';
                                    var2.type = var6;
                                    var6 = var5.nonce;
                                    if (!(var7 == var6)) {
                                        _fun54590_ip = 143;
                                        continue _fun54590
                                    }
                                case 138:
                                    var6 = var5.id;
                                case 143:
                                    var2.id = var6;
                                    var5 = var5.channel_id;
                                    var2.channelId = var5;
                                    var2 = var3.bind(var4)(var2);
                                case 161:
                                    var1 = _closure4_slot3;
                                    var1 = var1._aborted;
                                    if (!var1) {
                                        _fun54590_ip = 197;
                                        continue _fun54590
                                    }
                                case 174:
                                    var1 = global;
                                    var3 = var1.setTimeout;
                                    var2 = undefined;
                                    var1 = function() { // Environment: var0
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 4;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.dispatch;
                                        var1 = {};
                                        var4 = 'UPLOAD_COMPLETE';
                                        var1.type = var4;
                                        var4 = _closure4_slot0;
                                        var1.channelId = var4;
                                        var4 = _closure5_slot0;
                                        var1.file = var4;
                                        var4 = true;
                                        var1.aborted = var4;
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                    };
                                    var0 = 0;
                                    var0 = var3.bind(var2)(var1, var0);
                                case 197:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4 = var8.bind(var5)(var7, var4);
                        var7 = var5.on;
                        var4 = 'cancel-upload-item';
                        var3 = function(arg0) { // Environment: var3
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'UPLOAD_FILE_UPDATE';
                            var1.type = var4;
                            var4 = arg0;
                            var1.file = var4;
                            var4 = _closure4_slot0;
                            var1.channelId = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var3 = var7.bind(var5)(var4, var3);
                        var4 = {};
                        var3 = var5.uploadFiles;
                        var3 = var3.bind(var5)(var6);
                        SaveGenerator(address = 378);
                    case 376:
                        return var3;
                    case 378:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun54585_ip = 397;
                            continue _fun54585
                        }
                    case 384:
                        var4.attachments = var3;
                        var4.uploader = var5;
                        return var4;
                    case 397:
                        return var3;
                    case 400:
                        return var2;
                    case 403:
                        return var1;
                    case 406:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = var3.Set;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var13 = var6;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_uploads/uploadMessageAttachments.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: uploadMessageAttachments, environment: var1
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.uploadMessageAttachments = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6576, 6577, 3931, 806, 2]);