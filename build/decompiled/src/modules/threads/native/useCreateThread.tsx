// modules/threads/native/useCreateThread.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageSendLocation;
    var _closure1_slot6 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/native/useCreateThread.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = arg0;
        var10 = var0.parentChannel;
        var9 = var0.parentMessageId;
        var8 = var0.threadSettings;
        var7 = var0.privateThreadMode;
        var6 = var0.location;
        var5 = var0.onThreadCreated;
        var4 = var0.useDefaultThreadName;
        var12 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 4;
        var1 = var11[var1];
        var2 = undefined;
        var1 = var12.bind(var2)(var1);
        var1 = var1.bind(var2)();
        var1 = var1.analyticsLocations;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot0;
        var0 = 5;
        var0 = var11[var0];
        var2 = var1.bind(var2)(var0);
        var1 = var2.useCreateThreadCommon;
        var0 = {};
        var0.parentChannel = var10;
        var0.parentMessageId = var9;
        var0.threadSettings = var8;
        var0.privateThreadMode = var7;
        var0.location = var6;
        var0.onThreadCreated = var5;
        var0.useDefaultThreadName = var4;
        var3 = function arg0, arg1, arg2() {
            var10 = arg0;
            var7 = arg1;
            var _closure3_slot0 = var10;
            var _closure3_slot1 = var7;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var0 = 6;
            var1 = var9[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var4 = var5.sendMessage;
            var3 = var10.id;
            var1 = 7;
            var1 = var9[var1];
            var9 = var2.bind(var0)(var1);
            var2 = var9.parse;
            var1 = arg2;
            var13 = var2.bind(var9)(var10, var1);
            var1 = {};
            var8 = _closure1_slot6;
            var8 = var8.THREAD_CREATION;
            var1.location = var8;
            var1.attachmentsToUpload = var7;
            var6 = function arg0, arg1, arg2() {
                _fun73825: for (var _fun73825_ip = 0;;) switch (_fun73825_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 8;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.handleUploadMessageAttachmentsErrors;
                        var1 = {};
                        var5 = arg0;
                        var1.file = var5;
                        var7 = _closure3_slot0;
                        var6 = var7.getGuildId;
                        var6 = var6.bind(var7)();
                        var1.guildId = var6;
                        var6 = _closure2_slot0;
                        var1.analyticsLocations = var6;
                        var6 = arg1;
                        var1.code = var6;
                        var6 = arg2;
                        var1.reason = var6;
                        var1 = var2.bind(var3)(var1);
                        if (!var1) {
                            _fun73825_ip = 174;
                            continue _fun73825
                        }
                    case 97:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.setUploads;
                        var1 = {};
                        var6 = _closure3_slot0;
                        var6 = var6.id;
                        var1.channelId = var6;
                        var5 = _closure3_slot1;
                        var1.uploads = var5;
                        var4 = _closure1_slot5;
                        var4 = var4.FirstThreadMessage;
                        var1.draftType = var4;
                        var4 = true;
                        var1.resetState = var4;
                        var1 = var2.bind(var3)(var1);
                    case 174:
                        return var0;
                }
            };
            var1.onAttachmentUploadError = var6;
            var15 = var5;
            var14 = var3;
            var12 = undefined;
            var11 = var1;
            var1 = var15[var4](var14, var13, var12, var11, var10);
            return var0;
        };
        var0.uploadHandler = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun73826: for (var _fun73826_ip = 0;;) switch (_fun73826_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.parentChannel;
                var _closure2_slot0 = var7;
                var9 = var0.threadSettings;
                var6 = var0.appliedTags;
                var4 = var0.onThreadCreated;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 4;
                var3 = var2[var3];
                var8 = undefined;
                var3 = var5.bind(var8)(var3);
                var3 = var3.bind(var8)();
                var5 = var3.analyticsLocations;
                var _closure2_slot1 = var5;
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun73829: for (var _fun73829_ip = 0;;) switch (_fun73829_ip) {
                                case 0:
                                    StartGenerator();
                                    var2 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun73829_ip = 192;
                                        continue _fun73829
                                    }
                                case 15:
                                    var _closure5_slot0 = var2;
                                    var6 = undefined;
                                    var _closure5_slot1 = var6;
                                    var _closure5_slot2 = var6;
                                    var5 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var3 = 10;
                                    var3 = var7[var3];
                                    var3 = var5.bind(var6)(var3);
                                    var5 = var3.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var10 = var5;
                                    var3 = new var10[var3](var9);
                                    var3 = var3 instanceof Object ? var3 : var5;
                                    _closure5_slot1 = var3;
                                    var5 = _closure1_slot0;
                                    var4 = 11;
                                    var4 = var7[var4];
                                    var6 = var5.bind(var6)(var4);
                                    var5 = var6.maxFileSize;
                                    var7 = _closure2_slot0;
                                    var4 = var7.getGuildId;
                                    var4 = var4.bind(var7)();
                                    var4 = var5.bind(var6)(var4);
                                    _closure5_slot2 = var4;
                                    var5 = var3.on;
                                    var4 = 'progress';
                                    var1 = function(arg0) { // Environment: var1
                                        _fun73830: for (var _fun73830_ip = 0;;) switch (_fun73830_ip) {
                                            case 0:
                                                var5 = arg0;
                                                var1 = var5.currentSize;
                                                var0 = _closure5_slot2;
                                                if (!(var1 > var0)) {
                                                    _fun73830_ip = 164;
                                                    continue _fun73830
                                                }
                                            case 23:
                                                var1 = _closure5_slot1;
                                                var0 = var1.cancel;
                                                var0 = var0.bind(var1)();
                                                var1 = _closure1_slot1;
                                                var6 = _closure1_slot2;
                                                var0 = 9;
                                                var0 = var6[var0];
                                                var2 = undefined;
                                                var8 = var1.bind(var2)(var0);
                                                var7 = var8.setUploads;
                                                var0 = {};
                                                var10 = _closure2_slot0;
                                                var10 = var10.id;
                                                var0.channelId = var10;
                                                var10 = _closure5_slot0;
                                                var0.uploads = var10;
                                                var9 = _closure1_slot5;
                                                var9 = var9.FirstThreadMessage;
                                                var0.draftType = var9;
                                                var9 = true;
                                                var0.resetState = var9;
                                                var0 = var7.bind(var8)(var0);
                                                var0 = 12;
                                                var0 = var6[var0];
                                                var1 = var1.bind(var2)(var0);
                                                var0 = {};
                                                var0.file = var5;
                                                var4 = _closure5_slot2;
                                                var0.maxSize = var4;
                                                var3 = _closure2_slot1;
                                                var0.analyticsLocations = var3;
                                                var0 = var1.bind(var2)(var0);
                                            case 164:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var1 = var5.bind(var3)(var4, var1);
                                    var1 = var3.uploadFiles;
                                    var1 = var1.bind(var3)(var2);
                                    SaveGenerator(address = 162);
                                case 160:
                                    return var1;
                                case 162:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun73829_ip = 189;
                                        continue _fun73829
                                    }
                                case 168:
                                    var2 = {};
                                    var3 = var3._file;
                                    var2.uploaderFile = var3;
                                    var2.files = var1;
                                    return var2;
                                case 189:
                                    return var1;
                                case 192:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var3 = var1.bind(var8)();
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var7;
                var3 = var10.bind(var11)(var3, var1);
                var1 = _closure1_slot0;
                var0 = 5;
                var0 = var2[var0];
                var2 = var1.bind(var8)(var0);
                var1 = var2.useCreateForumPostCommon;
                var0 = {};
                var0.parentChannel = var7;
                var7 = null;
                var10 = var7 == var9;
                if (var10) {
                    _fun73826_ip = 153;
                    continue _fun73826
                }
            case 148:
                var8 = var9.name;
            case 153:
                var9 = var7 != var8;
                var7 = '';
                if (!var9) {
                    _fun73826_ip = 167;
                    continue _fun73826
                }
            case 164:
                var7 = var8;
            case 167:
                var0.name = var7;
                var0.appliedTags = var6;
                var0.analyticsLocations = var5;
                var0.onThreadCreated = var4;
                var0.upload = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.useCreateForumPost = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 3992, 1346, 5721, 7598, 6521, 5583, 7603, 7602, 6610, 4000, 7604, 2]);