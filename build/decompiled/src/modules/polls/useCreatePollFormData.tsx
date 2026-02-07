// modules/polls/useCreatePollFormData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0, arg1() {
        var0 = {};
        var1 = {};
        var2 = arg1;
        var1.status = var2;
        var2 = arg0;
        var1.mediaURL = var2;
        var0.mediaAttachmentState = var1;
        var1 = undefined;
        var0.emoji = var1;
        var0.stickerId = var1;
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MAX_NUMBER_OF_ANSWERS_PER_POLL;
    var _closure1_slot7 = var6;
    var6 = var3.MIN_NUMBER_OF_ANSWERS_PER_POLL;
    var _closure1_slot8 = var6;
    var3 = var3.PollDurations;
    var _closure1_slot9 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/useCreatePollFormData.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2, arg3() {
        _fun108925: for (var _fun108925_ip = 0;;) switch (_fun108925_ip) {
            case 0:
                var30 = arg0;
                var29 = arg1;
                var34 = arg2;
                var11 = arg3;
                var _closure2_slot0 = var30;
                var _closure2_slot1 = var29;
                var _closure2_slot2 = var34;
                var _closure2_slot3 = var11;
                var6 = var30.id;
                var _closure2_slot4 = var6;
                var3 = _closure1_slot6;
                var2 = var3.useState;
                var1 = function() { // Environment: var0
                    _fun108926: for (var _fun108926_ip = 0;;) switch (_fun108926_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var1 = null;
                            var3 = var1 == var0;
                            var4 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun108926_ip = 60;
                                continue _fun108926
                            }
                        case 20:
                            var2 = _closure2_slot3;
                            var5 = var2.initialAnswers;
                            var2 = var1 == var5;
                            var0 = undefined;
                            if (var2) {
                                _fun108926_ip = 60;
                                continue _fun108926
                            }
                        case 41:
                            var3 = var5.map;
                            var2 = function(arg0) { // Environment: var2
                                var0 = {};
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 4;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var1 = var2.generateEmptyPollAnswer;
                                var4 = var1.bind(var2)();
                                var5 = var0;
                                var1 = copyDataProperties(var5, var4);
                                var4 = arg0;
                                var5 = var0;
                                var1 = copyDataProperties(var5, var4);
                                return var0;
                            };
                            var0 = var3.bind(var5)(var2);
                        case 60:
                            if (!(var1 == var0)) {
                                _fun108926_ip = 131;
                                continue _fun108926
                            }
                        case 64:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var2 = 4;
                            var1 = var5[var2];
                            var6 = var3.bind(var4)(var1);
                            var1 = var6.generateEmptyPollAnswer;
                            var6 = var1.bind(var6)();
                            var1 = new Array(2);
                            var1[0] = var6;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.generateEmptyPollAnswer;
                            var2 = var2.bind(var3)();
                            var1[1] = var2;
                            var0 = var1;
                        case 131:
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = _closure1_slot5;
                var33 = undefined;
                var10 = 2;
                var1 = var1.bind(var33)(var2, var10);
                var8 = 0;
                var25 = var1[var8];
                var _closure2_slot5 = var25;
                var4 = 1;
                var1 = var1[var4];
                var _closure2_slot6 = var1;
                var2 = var3.useState;
                var7 = null;
                var1 = var7 == var11;
                var9 = undefined;
                if (var1) {
                    _fun108925_ip = 123;
                    continue _fun108925
                }
            case 115:
                var9 = var11.initialQuestion;
            case 123:
                var12 = var7 != var9;
                var1 = '';
                if (!var12) {
                    _fun108925_ip = 137;
                    continue _fun108925
                }
            case 134:
                var1 = var9;
            case 137:
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot5;
                var1 = var2.bind(var33)(var1, var10);
                var24 = var1[var8];
                var _closure2_slot7 = var24;
                var23 = var1[var4];
                var _closure2_slot8 = var23;
                var3 = _closure1_slot6;
                var1 = var3.useState;
                var9 = false;
                var1 = var1.bind(var3)(var9);
                var1 = var2.bind(var33)(var1, var10);
                var22 = var1[var8];
                var _closure2_slot9 = var22;
                var21 = var1[var4];
                var2 = var3.useState;
                var12 = var7 == var11;
                var1 = undefined;
                if (var12) {
                    _fun108925_ip = 224;
                    continue _fun108925
                }
            case 216:
                var1 = var11.initialDuration;
            case 224:
                if (!(var7 == var1)) {
                    _fun108925_ip = 238;
                    continue _fun108925
                }
            case 228:
                var7 = _closure1_slot9;
                var1 = var7.ONE_DAY;
            case 238:
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot5;
                var1 = var2.bind(var33)(var1, var10);
                var20 = var1[var8];
                var _closure2_slot10 = var20;
                var19 = var1[var4];
                var3 = _closure1_slot6;
                var7 = var3.useState;
                var1 = {};
                var1 = var7.bind(var3)(var1);
                var1 = var2.bind(var33)(var1, var10);
                var7 = var1[var8];
                var1 = var1[var4];
                var _closure2_slot11 = var1;
                var1 = var3.useState;
                var1 = var1.bind(var3)(var9);
                var1 = var2.bind(var33)(var1, var10);
                var2 = var1[var8];
                var1 = var1[var4];
                var _closure2_slot12 = var1;
                var9 = var25.filter;
                var3 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isAnswerFilled;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var32 = var9.bind(var25)(var3);
                var _closure2_slot13 = var32;
                var9 = var25.filter;
                var3 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isIncompleteAnswer;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var9.bind(var25)(var3);
                var9 = var24.length;
                var18 = var9 > var8;
                if (!var18) {
                    _fun108925_ip = 390;
                    continue _fun108925
                }
            case 377:
                var11 = var32.length;
                var9 = _closure1_slot8;
                var18 = var11 >= var9;
            case 390:
                if (!var18) {
                    _fun108925_ip = 402;
                    continue _fun108925
                }
            case 393:
                var3 = var3.length;
                var18 = var8 === var3;
            case 402:
                var11 = _closure1_slot1;
                var12 = _closure1_slot3;
                var3 = 5;
                var3 = var12[var3];
                var9 = var11.bind(var33)(var3);
                var3 = 6;
                var3 = var12[var3];
                var3 = var11.bind(var33)(var3);
                var3 = var3.createPoll;
                var9 = var9.bind(var33)(var3);
                var3 = _closure1_slot5;
                var3 = var3.bind(var33)(var9, var10);
                var31 = var3[var8];
                var _closure2_slot14 = var31;
                var4 = var3[var4];
                var3 = var4.error;
                var4 = var4.loading;
                var _closure2_slot15 = var4;
                var9 = var25.length;
                var8 = _closure1_slot7;
                var17 = var9 < var8;
                var _closure2_slot16 = var17;
                var9 = var25.length;
                var8 = _closure1_slot8;
                var16 = var9 > var8;
                var _closure2_slot17 = var16;
                var27 = _closure1_slot6;
                var10 = var27.useCallback;
                var9 = function(arg0) { // Environment: var0
                    var3 = _closure2_slot11;
                    var0 = undefined;
                    var2 = function(arg0) { // Environment: var2
                        var0 = {};
                        var2 = arg0;
                        var3 = var0;
                        var1 = copyDataProperties(var3, var2);
                        var1 = delete var0.question;
                        return var0;
                    };
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot8;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8 = new Array(0);
                var15 = var10.bind(var27)(var9, var8);
                var10 = var27.useCallback;
                var9 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.text;
                    var _closure3_slot0 = var2;
                    var2 = var0.index;
                    var _closure3_slot1 = var2;
                    var0 = var0.localCreationAnswerId;
                    var _closure3_slot2 = var0;
                    var4 = _closure2_slot11;
                    var0 = undefined;
                    var3 = function(arg0) { // Environment: var1
                        var0 = {};
                        var4 = arg0;
                        var5 = var0;
                        var1 = copyDataProperties(var5, var4);
                        var3 = _closure3_slot2;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'answer-';
                        var1 = var2.bind(var1)(var3);
                        var1 = delete var0[var1];
                        return var0;
                    };
                    var3 = var4.bind(var0)(var3);
                    var2 = _closure2_slot6;
                    var1 = function(arg0) { // Environment: var1
                        var0 = new Array(0);
                        var6 = arg0;
                        var5 = 0;
                        var7 = var0;
                        var1 = arraySpread(var7, var6, var5);
                        var2 = _closure3_slot1;
                        var1 = {};
                        var6 = var0[var2];
                        var7 = var1;
                        var4 = copyDataProperties(var7, var6);
                        var4 = _closure3_slot0;
                        var3 = 'text';
                        var1[var3] = var4;
                        var0[var2] = var1;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8 = new Array(0);
                var14 = var10.bind(var27)(var9, var8);
                var10 = var27.useCallback;
                var9 = function(arg0, arg1) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var2 = _closure2_slot6;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        var0 = new Array(0);
                        var6 = arg0;
                        var5 = 0;
                        var7 = var0;
                        var1 = arraySpread(var7, var6, var5);
                        var2 = _closure3_slot1;
                        var1 = {};
                        var6 = var0[var2];
                        var7 = var1;
                        var4 = copyDataProperties(var7, var6);
                        var4 = _closure3_slot0;
                        var3 = 'image';
                        var1[var3] = var4;
                        var0[var2] = var1;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8 = new Array(0);
                var8 = var10.bind(var27)(var9, var8);
                var _closure2_slot18 = var8;
                var11 = var27.useCallback;
                var10 = new Array(1);
                var10[0] = var25;
                var9 = function(arg0, arg1, arg2) { // Environment: var0
                    _fun108937: for (var _fun108937_ip = 0;;) switch (_fun108937_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = arg1;
                            var2 = var1[var0];
                            var4 = var2.image;
                            var3 = null;
                            var5 = var3 == var4;
                            var0 = undefined;
                            var1 = undefined;
                            if (var5) {
                                _fun108937_ip = 39;
                                continue _fun108937
                            }
                        case 33:
                            var1 = var4.mediaAttachmentState;
                        case 39:
                            var3 = var3 != var1;
                            if (!var3) {
                                _fun108937_ip = 59;
                                continue _fun108937
                            }
                        case 46:
                            var5 = var1.mediaURL;
                            var4 = arg2;
                            var3 = var5 !== var4;
                        case 59:
                            if (!var3) {
                                _fun108937_ip = 147;
                                continue _fun108937
                            }
                        case 62:
                            var4 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var3 = 7;
                            var3 = var8[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.removePollUploadAttachment;
                            var3 = var2.localCreationAnswerId;
                            var7 = _closure1_slot0;
                            var6 = 8;
                            var6 = var8[var6];
                            var7 = var7.bind(var0)(var6);
                            var6 = var7.getFileNameFromGifUrl;
                            var2 = var2.localCreationAnswerId;
                            var1 = var1.mediaURL;
                            var2 = var6.bind(var7)(var2, var1);
                            var1 = arg0;
                            var1 = var4.bind(var5)(var1, var3, var2);
                        case 147:
                            return var0;
                    }
                };
                var9 = var11.bind(var27)(var9, var10);
                var _closure2_slot19 = var9;
                var12 = var27.useCallback;
                var10 = function() { // Environment: var0
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*(arg0, arg1, arg2) { // Environment: var0
                        var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                            _fun108940: for (var _fun108940_ip = 0;;) switch (_fun108940_ip) {
                                case 0:
                                    StartGenerator();
                                    var10 = arg0;
                                    var5 = arg1;
                                    var7 = arg2;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun108940_ip = 254;
                                        continue _fun108940
                                    }
                                case 19:
                                    var1 = _closure2_slot5;
                                    var1 = var1[var5];
                                    var8 = var1.localCreationAnswerId;
                                    var1 = _closure2_slot19;
                                    var2 = undefined;
                                    var1 = var1.bind(var2)(var10, var5);
                                    var6 = _closure2_slot18;
                                    var12 = _closure1_slot10;
                                    var13 = _closure1_slot0;
                                    var11 = _closure1_slot3;
                                    var9 = 9;
                                    var1 = var11[var9];
                                    var1 = var13.bind(var2)(var1);
                                    var1 = var1.PollMediaUploadAttachmentStatus;
                                    var1 = var1.PREPARING;
                                    var1 = var12.bind(var2)(var7, var1);
                                    var1 = var6.bind(var2)(var1, var5);
                                    var6 = _closure1_slot2;
                                    var1 = 7;
                                    var1 = var11[var1];
                                    var6 = var6.bind(var2)(var1);
                                    var1 = var6.handlePollGifAttachmentAdd;
                                    var1 = var1.bind(var6)(var10, var8, var7);
                                    SaveGenerator(address = 136);
                                case 134:
                                    return var1;
                                case 136:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun108940_ip = 251;
                                        continue _fun108940
                                    }
                                case 142:
                                    var6 = null;
                                    if (!(var6 == var1)) {
                                        _fun108940_ip = 199;
                                        continue _fun108940
                                    }
                                case 148:
                                    var8 = _closure2_slot18;
                                    var10 = _closure1_slot10;
                                    var11 = _closure1_slot0;
                                    var6 = _closure1_slot3;
                                    var6 = var6[var9];
                                    var6 = var11.bind(var2)(var6);
                                    var6 = var6.PollMediaUploadAttachmentStatus;
                                    var6 = var6.ERROR;
                                    var6 = var10.bind(var2)(var7, var6);
                                    var6 = var8.bind(var2)(var6, var5);
                                    _fun108940_ip = 248;
                                    continue _fun108940;
                                case 199:
                                    var4 = _closure2_slot18;
                                    var6 = _closure1_slot10;
                                    var8 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var3 = var3[var9];
                                    var3 = var8.bind(var2)(var3);
                                    var3 = var3.PollMediaUploadAttachmentStatus;
                                    var3 = var3.READY_TO_UPLOAD;
                                    var3 = var6.bind(var2)(var7, var3);
                                    var3 = var4.bind(var2)(var3, var5);
                                case 248:
                                    return var2;
                                case 251:
                                    return var1;
                                case 254:
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
                var11 = var10.bind(var33)();
                var10 = new Array(3);
                var10[0] = var25;
                var10[1] = var8;
                var10[2] = var9;
                var13 = var12.bind(var27)(var11, var10);
                var12 = var27.useCallback;
                var11 = new Array(3);
                var11[0] = var25;
                var11[1] = var8;
                var11[2] = var9;
                var10 = function(arg0, arg1, arg2) { // Environment: var0
                    var12 = arg0;
                    var3 = arg1;
                    var11 = arg2;
                    var0 = _closure2_slot5;
                    var0 = var0[var3];
                    var10 = var0.localCreationAnswerId;
                    var0 = global;
                    var1 = var0.URL;
                    var0 = var1.createObjectURL;
                    var5 = var0.bind(var1)(var11);
                    var1 = _closure2_slot19;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var12, var3);
                    var13 = _closure2_slot18;
                    var4 = _closure1_slot10;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 9;
                    var9 = var7[var1];
                    var9 = var6.bind(var0)(var9);
                    var9 = var9.PollMediaUploadAttachmentStatus;
                    var9 = var9.PREPARING;
                    var9 = var4.bind(var0)(var5, var9);
                    var9 = var13.bind(var0)(var9, var3);
                    var9 = _closure1_slot2;
                    var8 = 7;
                    var8 = var7[var8];
                    var9 = var9.bind(var0)(var8);
                    var8 = var9.handlePollMediaAttachmentAdd;
                    var8 = var8.bind(var9)(var12, var10, var11);
                    var2 = _closure2_slot18;
                    var1 = var7[var1];
                    var1 = var6.bind(var0)(var1);
                    var1 = var1.PollMediaUploadAttachmentStatus;
                    var1 = var1.READY_TO_UPLOAD;
                    var1 = var4.bind(var0)(var5, var1);
                    var1 = var2.bind(var0)(var1, var3);
                    return var0;
                };
                var11 = var12.bind(var27)(var10, var11);
                var12 = var27.useCallback;
                var10 = new Array(3);
                var10[0] = var6;
                var10[1] = var8;
                var10[2] = var9;
                var8 = function(arg0, arg1) { // Environment: var0
                    var3 = arg1;
                    var4 = _closure2_slot19;
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2, var3);
                    var2 = _closure2_slot18;
                    var1 = {};
                    var4 = arg0;
                    var1.emoji = var4;
                    var1.stickerId = var0;
                    var1.mediaAttachmentState = var0;
                    var1 = var2.bind(var0)(var1, var3);
                    return var0;
                };
                var12 = var12.bind(var27)(var8, var10);
                var26 = var27.useCallback;
                var10 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var2 = _closure2_slot6;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        var0 = new Array(0);
                        var6 = arg0;
                        var5 = 0;
                        var7 = var0;
                        var1 = arraySpread(var7, var6, var5);
                        var2 = _closure3_slot0;
                        var1 = {};
                        var6 = var0[var2];
                        var7 = var1;
                        var3 = copyDataProperties(var7, var6);
                        var4 = undefined;
                        var3 = 'image';
                        var1[var3] = var4;
                        var0[var2] = var1;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8 = new Array(0);
                var8 = var26.bind(var27)(var10, var8);
                var28 = var27.useCallback;
                var26 = new Array(1);
                var26[0] = var17;
                var10 = function() { // Environment: var0
                    _fun108946: for (var _fun108946_ip = 0;;) switch (_fun108946_ip) {
                        case 0:
                            var1 = _closure2_slot16;
                            if (!var1) {
                                _fun108946_ip = 30;
                                continue _fun108946
                            }
                        case 10:
                            var2 = _closure2_slot6;
                            var1 = undefined;
                            var0 = function(arg0) { // Environment: var0
                                var0 = new Array(1);
                                var6 = arg0;
                                var5 = 0;
                                var7 = var0;
                                var2 = arraySpread(var7, var6, var5);
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 4;
                                var3 = var3[var1];
                                var1 = undefined;
                                var3 = var4.bind(var1)(var3);
                                var1 = var3.generateEmptyPollAnswer;
                                var1 = var1.bind(var3)();
                                var0[var2] = var1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var0;
                            };
                            var0 = var2.bind(var1)(var0);
                        case 30:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var28.bind(var27)(var10, var26);
                var28 = var27.useCallback;
                var35 = var25.length;
                var26 = new Array(5);
                var26[0] = var35;
                var26[1] = var16;
                var26[2] = var6;
                var26[3] = var34;
                var26[4] = var9;
                var9 = function(arg0) { // Environment: var0
                    _fun108948: for (var _fun108948_ip = 0;;) switch (_fun108948_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var2 = _closure2_slot17;
                            if (!var2) {
                                _fun108948_ip = 93;
                                continue _fun108948
                            }
                        case 19:
                            var2 = _closure2_slot5;
                            var3 = var2.length;
                            var6 = _closure2_slot19;
                            var5 = _closure2_slot4;
                            var2 = undefined;
                            var5 = var6.bind(var2)(var5, var4);
                            var5 = _closure2_slot6;
                            var1 = function(arg0) { // Environment: var1
                                var0 = new Array(0);
                                var5 = arg0;
                                var4 = 0;
                                var6 = var0;
                                var1 = arraySpread(var6, var5, var4);
                                var3 = var0.splice;
                                var2 = _closure3_slot0;
                                var1 = 1;
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var1 = var5.bind(var2)(var1);
                            var5 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var5)) {
                                _fun108948_ip = 93;
                                continue _fun108948
                            }
                        case 70:
                            var1 = _closure2_slot2;
                            var0 = {};
                            var0.indexToRemove = var4;
                            var0.numberOfAnswers = var3;
                            var0 = var1.bind(var2)(var0);
                        case 93:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var28.bind(var27)(var9, var26);
                var28 = var27.useEffect;
                var26 = new Array(1);
                var26[0] = var6;
                var6 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot2;
                        var1 = _closure1_slot3;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.removeAllPollUploadAttachments;
                        var1 = _closure2_slot4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    return var0;
                };
                var6 = var28.bind(var27)(var6, var26);
                var28 = var27.useCallback;
                var26 = new Array(2);
                var26[0] = var25;
                var26[1] = var24;
                var6 = function() { // Environment: var0
                    _fun108952: for (var _fun108952_ip = 0;;) switch (_fun108952_ip) {
                        case 0:
                            var1 = true;
                            var _closure3_slot0 = var1;
                            var4 = {};
                            var _closure3_slot1 = var4;
                            var3 = _closure2_slot7;
                            var2 = var3.trim;
                            var2 = var2.bind(var3)();
                            var2 = var2.length;
                            var5 = 0;
                            if (!(var5 === var2)) {
                                _fun108952_ip = 116;
                                continue _fun108952
                            }
                        case 42:
                            var2 = false;
                            _closure3_slot0 = var2;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var2 = 10;
                            var3 = var9[var2];
                            var7 = undefined;
                            var3 = var8.bind(var7)(var3);
                            var6 = var3.intl;
                            var3 = var6.string;
                            var2 = var9[var2];
                            var2 = var8.bind(var7)(var2);
                            var2 = var2.t;
                            var2 = var2.gPX3oI;
                            var2 = var3.bind(var6)(var2);
                            var4.question = var2;
                        case 116:
                            var6 = _closure2_slot5;
                            var3 = var6.filter;
                            var2 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 4;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.isAnswerFilled;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var3.bind(var6)(var2);
                            var6 = var2.length;
                            var3 = _closure1_slot8;
                            if (!(var6 < var3)) {
                                _fun108952_ip = 260;
                                continue _fun108952
                            }
                        case 153:
                            var3 = false;
                            _closure3_slot0 = var3;
                            var3 = _closure2_slot5;
                            var3 = var3[var5];
                            var6 = var3.localCreationAnswerId;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var5 = var3.concat;
                            var3 = 'answer-';
                            var3 = var5.bind(var3)(var6);
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var2 = 10;
                            var5 = var9[var2];
                            var7 = undefined;
                            var5 = var8.bind(var7)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var2 = var9[var2];
                            var2 = var8.bind(var7)(var2);
                            var2 = var2.t;
                            var2 = var2.fYvzEX;
                            var2 = var5.bind(var6)(var2);
                            var4[var3] = var2;
                        case 260:
                            var5 = _closure2_slot5;
                            var3 = var5.forEach;
                            var2 = function(arg0) { // Environment: var0
                                _fun108954: for (var _fun108954_ip = 0;;) switch (_fun108954_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot3;
                                        var0 = 4;
                                        var3 = var3[var0];
                                        var0 = undefined;
                                        var4 = var4.bind(var0)(var3);
                                        var3 = var4.isIncompleteAnswer;
                                        var3 = var3.bind(var4)(var2);
                                        if (!var3) {
                                            _fun108954_ip = 146;
                                            continue _fun108954
                                        }
                                    case 42:
                                        var4 = false;
                                        _closure3_slot0 = var4;
                                        var3 = _closure3_slot1;
                                        var5 = var2.localCreationAnswerId;
                                        var2 = global;
                                        var2 = var2.HermesInternal;
                                        var4 = var2.concat;
                                        var2 = 'answer-';
                                        var2 = var4.bind(var2)(var5);
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot3;
                                        var1 = 10;
                                        var4 = var7[var1];
                                        var4 = var6.bind(var0)(var4);
                                        var5 = var4.intl;
                                        var4 = var5.string;
                                        var1 = var7[var1];
                                        var1 = var6.bind(var0)(var1);
                                        var1 = var1.t;
                                        var1 = var1["8Qqkc+"];
                                        var1 = var4.bind(var5)(var1);
                                        var3[var2] = var1;
                                    case 146:
                                        return var0;
                                }
                            };
                            var2 = var3.bind(var5)(var2);
                            var2 = _closure2_slot11;
                            var3 = undefined;
                            var2 = var2.bind(var3)(var4);
                            var2 = _closure2_slot12;
                            var1 = _closure3_slot0;
                            var1 = !var1;
                            var1 = var2.bind(var3)(var1);
                            var0 = _closure3_slot0;
                            return var0;
                    }
                };
                var28 = var28.bind(var27)(var6, var26);
                var _closure2_slot20 = var28;
                var26 = var27.useCallback;
                var6 = _closure1_slot4;
                var5 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun108956: for (var _fun108956_ip = 0;;) switch (_fun108956_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun108956_ip = 134;
                                    continue _fun108956
                                }
                            case 10:
                                var3 = _closure2_slot14;
                                var1 = {};
                                var2 = _closure2_slot0;
                                var1.channel = var2;
                                var2 = _closure2_slot7;
                                var1.question = var2;
                                var2 = _closure2_slot13;
                                var1.answers = var2;
                                var2 = _closure2_slot9;
                                var1.allowMultiSelect = var2;
                                var2 = _closure2_slot10;
                                var1.duration = var2;
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var2 = 11;
                                var5 = var5[var2];
                                var2 = undefined;
                                var5 = var6.bind(var2)(var5);
                                var5 = var5.PollLayoutTypes;
                                var5 = var5.DEFAULT;
                                var1.layout = var5;
                                var4 = _closure2_slot1;
                                var1.onClose = var4;
                                var1 = var3.bind(var2)(var1);
                                SaveGenerator(address = 122);
                            case 120:
                                return var1;
                            case 122:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun108956_ip = 131;
                                    continue _fun108956
                                }
                            case 128:
                                return var2;
                            case 131:
                                return var1;
                            case 134:
                                return var0;
                        }
                    };
                    return var0;
                };
                var6 = var6.bind(var33)(var5);
                var5 = new Array(7);
                var5[0] = var24;
                var5[1] = var32;
                var5[2] = var22;
                var5[3] = var20;
                var5[4] = var31;
                var5[5] = var30;
                var5[6] = var29;
                var6 = var26.bind(var27)(var6, var5);
                var _closure2_slot21 = var6;
                var26 = var27.useCallback;
                var5 = new Array(3);
                var5[0] = var6;
                var5[1] = var4;
                var5[2] = var28;
                var0 = function() { // Environment: var0
                    _fun108957: for (var _fun108957_ip = 0;;) switch (_fun108957_ip) {
                        case 0:
                            var1 = _closure2_slot15;
                            var1 = !var1;
                            if (!var1) {
                                _fun108957_ip = 23;
                                continue _fun108957
                            }
                        case 13:
                            var3 = _closure2_slot20;
                            var2 = undefined;
                            var1 = var3.bind(var2)();
                        case 23:
                            if (!var1) {
                                _fun108957_ip = 36;
                                continue _fun108957
                            }
                        case 26:
                            var1 = _closure2_slot21;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 36:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var26.bind(var27)(var0, var5);
                var0 = {};
                var0.answers = var25;
                var0.question = var24;
                var0.setQuestion = var23;
                var0.allowMultiSelect = var22;
                var0.setAllowMultiSelect = var21;
                var0.duration = var20;
                var0.setDuration = var19;
                var0.canPost = var18;
                var0.canAddMoreAnswers = var17;
                var0.canRemoveMoreAnswers = var16;
                var0.handleQuestionChange = var15;
                var0.handleAnswerTextChange = var14;
                var0.handleGifSelect = var13;
                var0.handleEmojiSelect = var12;
                var0.handleCustomUpload = var11;
                var0.handleAddAnswer = var10;
                var0.handleRemoveAnswer = var9;
                var0.handleRemoveAnswerImage = var8;
                var0.fieldErrors = var7;
                var0.createPoll = var6;
                var0.handleSubmitPoll = var5;
                var0.submitting = var4;
                var0.createPollError = var3;
                var0.shouldFocusOnInvalidField = var2;
                var0.setShouldFocusOnInvalidField = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 6675, 6618, 10869, 9735, 14055, 14056, 14057, 1234, 6879, 2]);