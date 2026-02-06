// modules/polls/PollUploadAttachmentActionCreators.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun108485: for (var _fun108485_ip = 0;;) switch (_fun108485_ip) {
                    case 0:
                        StartGenerator();
                        var14 = arg1;
                        var13 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun108485_ip = 486;
                            continue _fun108485
                        }
                    case 16:
                        var10 = arg0;
                        var6 = var14;
                        var2 = var13;
                        var1 = undefined;
                        var7 = undefined;
                        var3 = undefined;
                        var5 = undefined;
                        var8 = undefined;
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var4 = 3;
                        var11 = var11[var4];
                        var12 = var12.bind(var1)(var11);
                        var11 = var12.getFileNameFromGifUrl;
                        var7 = var11.bind(var12)(var14, var13);
                    case 70: // try_start_0
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var11 = var11[var4];
                        var12 = var12.bind(var1)(var11);
                        var11 = var12.downloadPollGif;
                        var2 = var11.bind(var12)(var2);
                        SaveGenerator(address = 102);
                    case 100:
                        return var2;
                    case 102:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 11);
                        if (var11) {
                            _fun108485_ip = 478;
                            continue _fun108485
                        }
                    case 111:
                        var3 = var2;
                        var12 = null;
                        if (!(var12 != var2)) {
                            _fun108485_ip = 475;
                            continue _fun108485
                        }
                    case 123:
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var4 = var13[var4];
                        var15 = var11.bind(var1)(var4);
                        var14 = var15.getFilePathForGif;
                        var4 = var7;
                        var18 = var14.bind(var15)(var4);
                        var4 = 4;
                        var4 = var13[var4];
                        var14 = var11.bind(var1)(var4);
                        var13 = var14.writeFile;
                        var17 = var3;
                        var19 = 'cache';
                        var16 = 'base64';
                        var20 = var14;
                        var3 = var20[var13](var19, var18, var17, var16, var15);
                        SaveGenerator(address = 194);
                    case 192:
                        return var3;
                    case 194:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun108485_ip = 472;
                            continue _fun108485
                        }
                    case 203:
                        var5 = var3;
                        if (!(var12 != var3)) {
                            _fun108485_ip = 469;
                            continue _fun108485
                        }
                    case 213:
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var4 = 5;
                        var4 = var13[var4];
                        var13 = var11.bind(var1)(var4);
                        var11 = var13.getImageDimensionsIfMissing;
                        var4 = var5;
                        var4 = var11.bind(var13)(var4);
                        SaveGenerator(address = 251);
                    case 249:
                        return var4;
                    case 251:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 11);
                        if (var11) {
                            _fun108485_ip = 466;
                            continue _fun108485
                        }
                    case 260:
                        var8 = var4;
                        var11 = {};
                        var11.id = var6;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var6 = 6;
                        var13 = var13[var6];
                        var13 = var14.bind(var1)(var13);
                        var13 = var13.UploadOrigin;
                        var13 = var13.IMAGE_PICKER;
                        var11.origin = var13;
                        var13 = var5;
                        var11.uri = var13;
                        var11.originalUri = var13;
                        var11.filename = var7;
                        var7 = 'image/gif';
                        var11.mimeType = var7;
                        var13 = var12 == var4;
                        var7 = undefined;
                        if (var13) {
                            _fun108485_ip = 351;
                            continue _fun108485
                        }
                    case 343:
                        var13 = var8;
                        var7 = var13.width;
                    case 351:
                        var11.width = var7;
                        var7 = var8;
                        var12 = var12 == var7;
                        var7 = undefined;
                        if (var12) {
                            _fun108485_ip = 372;
                            continue _fun108485
                        }
                    case 367:
                        var7 = var8.height;
                    case 372:
                        var11.height = var7;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = var8[var6];
                        var6 = var7.bind(var1)(var6);
                        var6 = var6.UploadPlatform;
                        var6 = var6.REACT_NATIVE;
                        var11.platform = var6;
                        var7 = _closure1_slot1;
                        var6 = 7;
                        var6 = var8[var6];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.addFile;
                        var6 = {};
                        var6.file = var11;
                        var6.channelId = var10;
                        var9 = _closure1_slot4;
                        var9 = var9.Poll;
                        var6.draftType = var9;
                        var6 = var7.bind(var8)(var6);
                    case 463: // try_end0
                        return var5;
                    case 466:
                        return var4;
                    case 469:
                        return var1;
                    case 472:
                        return var3;
                    case 475:
                        return var1;
                    case 478:
                        return var2;
                    case 481: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        return var1;
                    case 486:
                        return var0;
                }
            };
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun108488: for (var _fun108488_ip = 0;;) switch (_fun108488_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun108488_ip = 150;
                            continue _fun108488
                        }
                    case 10:
                        var4 = arg0;
                        var3 = arg1;
                        var1 = arg2;
                    case 19: // try_start_0
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 7;
                        var5 = var7[var5];
                        var6 = undefined;
                        var9 = var8.bind(var6)(var5);
                        var8 = var9.remove;
                        var5 = var4;
                        var4 = var3;
                        var3 = _closure1_slot4;
                        var3 = var3.Poll;
                        var3 = var8.bind(var9)(var5, var4, var3);
                        var5 = _closure1_slot0;
                        var2 = 4;
                        var2 = var7[var2];
                        var4 = var5.bind(var6)(var2);
                        var3 = var4.removeFile;
                        var2 = 3;
                        var2 = var7[var2];
                        var5 = var5.bind(var6)(var2);
                        var2 = var5.getFilePathForGif;
                        var2 = var2.bind(var5)(var1);
                        var1 = 'cache';
                        var1 = var3.bind(var4)(var1, var2);
                        SaveGenerator(address = 132);
                    case 130:
                        return var1;
                    case 132:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun108488_ip = 140;
                            continue _fun108488
                        }
                    case 138: // try_end0
                        _fun108488_ip = 145;
                        continue _fun108488;
                    case 140:
                        return var1;
                    case 143: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 145:
                        var1 = undefined;
                        return var1;
                    case 150:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun108491: for (var _fun108491_ip = 0;;) switch (_fun108491_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun108491_ip = 118;
                            continue _fun108491
                        }
                    case 7:
                        var2 = arg0;
                    case 10: // try_start_0
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 7;
                        var3 = var5[var3];
                        var4 = undefined;
                        var7 = var6.bind(var4)(var3);
                        var6 = var7.clearAll;
                        var3 = var2;
                        var2 = _closure1_slot4;
                        var2 = var2.Poll;
                        var2 = var6.bind(var7)(var3, var2);
                        var3 = _closure1_slot0;
                        var2 = 4;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.clearFolder;
                        var2 = _closure1_slot5;
                        var1 = 'cache';
                        var1 = var3.bind(var4)(var1, var2);
                        SaveGenerator(address = 100);
                    case 98:
                        return var1;
                    case 100:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun108491_ip = 108;
                            continue _fun108491
                        }
                    case 106: // try_end0
                        _fun108491_ip = 113;
                        continue _fun108491;
                    case 108:
                        return var1;
                    case 111: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 113:
                        var1 = undefined;
                        return var1;
                    case 118:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.POLL_ATTACHMENT_FOLDER;
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/PollUploadAttachmentActionCreators.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.handlePollGifAttachmentAdd = var3;
    var3 = function() {
        var0 = undefined;
        return var0;
    };
    var2.handlePollMediaAttachmentAdd = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.removePollUploadAttachment = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.removeAllPollUploadAttachments = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4001, 6632, 14014, 13060, 4013, 4006, 7634, 2]);