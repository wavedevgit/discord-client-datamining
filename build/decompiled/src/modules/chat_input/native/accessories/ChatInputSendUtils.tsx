// modules/chat_input/native/accessories/ChatInputSendUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function arg0, arg1() {
        _fun89479: for (var _fun89479_ip = 0;;) switch (_fun89479_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun89479_ip = 46;
                    continue _fun89479
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun89479_ip = 55;
                    continue _fun89479
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun89479_ip = 345;
                    continue _fun89479
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun89479_ip = 323;
                    continue _fun89479
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun89479_ip = 283;
                    continue _fun89479
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun89479_ip = 270;
                    continue _fun89479
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun89479_ip = 163;
                    continue _fun89479
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun89479_ip = 179;
                    continue _fun89479
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun89479_ip = 249;
                    continue _fun89479
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun89479_ip = 249;
                    continue _fun89479
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun89479_ip = 234;
                    continue _fun89479
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun89479_ip = 247;
                    continue _fun89479
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun89479_ip = 265;
                continue _fun89479;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun89479_ip = 283;
                continue _fun89479;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun89479_ip = 323;
                    continue _fun89479
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun89479_ip = 330;
                    continue _fun89479
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun89480: for (var _fun89480_ip = 0;;) switch (_fun89480_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun89480_ip = 56;
                                continue _fun89480
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun89480_ip = 67;
                            continue _fun89480;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun89481: for (var _fun89481_ip = 0;;) switch (_fun89481_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun89481_ip = 23;
                    continue _fun89481
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun89481_ip = 33;
                    continue _fun89481
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun89481_ip = 70;
                    continue _fun89481
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun89481_ip = 55;
                    continue _fun89481
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun89482: for (var _fun89482_ip = 0;;) switch (_fun89482_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.text;
                var _closure2_slot0 = var9;
                var8 = var1.parsedMessage;
                var7 = var1.tts;
                var0 = undefined;
                if (!(var7 === var0)) {
                    _fun89482_ip = 34;
                    continue _fun89482
                }
            case 32:
                var7 = false;
            case 34:
                var15 = var1.source;
                var2 = var1.params;
                var1 = var2.channel;
                var _closure2_slot1 = var1;
                var4 = var2.chatInputRef;
                var3 = var2.hasAttachmentsToUpload;
                var13 = var2.pendingReply;
                var2 = var2.analyticsLocations;
                var _closure2_slot2 = var2;
                var _closure2_slot3 = var0;
                var10 = '';
                if (!(var10 === var9)) {
                    _fun89482_ip = 158;
                    continue _fun89482
                }
            case 94:
                var5 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 9;
                var2 = var11[var2];
                var11 = var5.bind(var0)(var2);
                var5 = var11.addBreadcrumb;
                var2 = {};
                var12 = global;
                var12 = var12.HermesInternal;
                var14 = var12.concat;
                var12 = 'Empty text from ';
                var12 = var14.bind(var12)(var15);
                var2.message = var12;
                var2 = var5.bind(var11)(var2);
            case 158:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 10;
                var5 = var12[var5];
                var14 = var11.bind(var0)(var5);
                var12 = var14.saveDraft;
                var11 = var1.id;
                var5 = _closure1_slot4;
                var5 = var5.ChannelMessage;
                var5 = var12.bind(var14)(var11, var10, var5);
                var12 = var4.current;
                var11 = null;
                if (!(var11 != var12)) {
                    _fun89482_ip = 230;
                    continue _fun89482
                }
            case 220:
                var5 = var12.clearText;
                var5 = var5.bind(var12)();
            case 230:
                var5 = var4.current;
                if (!(var11 != var5)) {
                    _fun89482_ip = 249;
                    continue _fun89482
                }
            case 239:
                var4 = var5.showSideActions;
                var4 = var4.bind(var5)();
            case 249:
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 11;
                var4 = var12[var4];
                var12 = var5.bind(var0)(var4);
                var5 = var12.handleLegacyCommands;
                var4 = {};
                var4.channel = var1;
                var14 = false;
                var4.isEdit = var14;
                var14 = var5.bind(var12)(var9, var4);
                var12 = var9;
                var5 = var8;
                var4 = var7;
                if (!(var11 != var14)) {
                    _fun89482_ip = 355;
                    continue _fun89482
                }
            case 307:
                var15 = var14.content;
                if (!(var11 != var15)) {
                    _fun89482_ip = 330;
                    continue _fun89482
                }
            case 316:
                var15 = var14.content;
                _closure2_slot0 = var15;
                var9 = var15;
                var8 = undefined;
            case 330:
                var15 = var14.tts;
                if (!(var11 != var15)) {
                    _fun89482_ip = 346;
                    continue _fun89482
                }
            case 340:
                var7 = var14.tts;
            case 346:
                var4 = var7;
                var12 = var9;
                var5 = var8;
            case 355:
                if (!(var11 == var5)) {
                    _fun89482_ip = 391;
                    continue _fun89482
                }
            case 359:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 12;
                var7 = var9[var7];
                var8 = var8.bind(var0)(var7);
                var7 = var8.parse;
                var5 = var7.bind(var8)(var1, var12);
            case 391:
                var5.tts = var4;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 13;
                var4 = var8[var4];
                var9 = var7.bind(var0)(var4);
                var7 = var9.deletePendingReply;
                var4 = var1.id;
                var4 = var7.bind(var9)(var4);
                var7 = {};
                var9 = _closure1_slot1;
                var4 = 14;
                var8 = var8[var4];
                var9 = var9.bind(var0)(var8);
                var8 = var9.getSendMessageOptionsForReply;
                var19 = var8.bind(var9)(var13);
                var20 = var7;
                var8 = copyDataProperties(var20, var19);
                var8 = _closure1_slot11;
                var9 = var8.CHAT_INPUT;
                var8 = 'location';
                var7[var8] = var9;
                var15 = var1.id;
                if (var3) {
                    _fun89482_ip = 502;
                    continue _fun89482
                }
            case 496:
                var8 = new Array(0);
                _fun89482_ip = 583;
                continue _fun89482;
            case 502:
                var14 = _closure1_slot6;
                var13 = var14.getUploads;
                var9 = _closure1_slot4;
                var9 = var9.ChannelMessage;
                var9 = var13.bind(var14)(var15, var9);
                if (!(var11 != var9)) {
                    _fun89482_ip = 576;
                    continue _fun89482
                }
            case 532:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var11 = 8;
                var11 = var14[var11];
                var14 = var13.bind(var0)(var11);
                var13 = var14.clearAll;
                var11 = _closure1_slot4;
                var11 = var11.ChannelMessage;
                var11 = var13.bind(var14)(var15, var11);
                _fun89482_ip = 580;
                continue _fun89482;
            case 576:
                var9 = new Array(0);
            case 580:
                var8 = var9;
            case 583:
                _closure2_slot3 = var8;
                if (var3) {
                    _fun89482_ip = 599;
                    continue _fun89482
                }
            case 590:
                var9 = var5.content;
                var3 = var10 !== var9;
            case 599:
                if (var3) {
                    _fun89482_ip = 655;
                    continue _fun89482
                }
            case 602:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 9;
                var3 = var10[var3];
                var10 = var9.bind(var0)(var3);
                var9 = var10.addBreadcrumb;
                var3 = {};
                var11 = 'Parsed empty message content from text';
                var3.message = var11;
                var11 = {};
                var11.text = var12;
                var3.data = var11;
                var3 = var9.bind(var10)(var3);
            case 655:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var4 = var3.bind(var0)(var2);
                var3 = var4.sendMessage;
                var2 = var1.id;
                var1 = {};
                var20 = var1;
                var19 = var7;
                var7 = copyDataProperties(var20, var19);
                var7 = 'attachmentsToUpload';
                var1[var7] = var8;
                var7 = function arg0, arg1, arg2() {
                    _fun89483: for (var _fun89483_ip = 0;;) switch (_fun89483_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 15;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.handleUploadMessageAttachmentsErrors;
                            var3 = {};
                            var2 = arg0;
                            var3.file = var2;
                            var7 = _closure2_slot1;
                            var6 = var7.getGuildId;
                            var6 = var6.bind(var7)();
                            var3.guildId = var6;
                            var6 = _closure2_slot2;
                            var3.analyticsLocations = var6;
                            var6 = arg1;
                            var3.code = var6;
                            var6 = arg2;
                            var3.reason = var6;
                            var3 = var4.bind(var5)(var3);
                            if (!var3) {
                                _fun89483_ip = 109;
                                continue _fun89483
                            }
                        case 94:
                            var4 = _closure2_slot3;
                            var5 = var4.length;
                            var4 = 0;
                            var3 = var5 > var4;
                        case 109:
                            if (!var3) {
                                _fun89483_ip = 233;
                                continue _fun89483
                            }
                        case 112:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 8;
                            var3 = var6[var3];
                            var8 = var5.bind(var0)(var3);
                            var7 = var8.setUploads;
                            var4 = {};
                            var3 = _closure2_slot1;
                            var9 = var3.id;
                            var4.channelId = var9;
                            var9 = _closure2_slot3;
                            var4.uploads = var9;
                            var9 = _closure1_slot4;
                            var9 = var9.ChannelMessage;
                            var4.draftType = var9;
                            var9 = true;
                            var4.resetState = var9;
                            var4 = var7.bind(var8)(var4);
                            var4 = 10;
                            var4 = var6[var4];
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.saveDraft;
                            var3 = var3.id;
                            var2 = _closure2_slot0;
                            var1 = _closure1_slot4;
                            var1 = var1.ChannelMessage;
                            var1 = var4.bind(var5)(var3, var2, var1);
                        case 233:
                            return var0;
                    }
                };
                var6 = 'onAttachmentUploadError';
                var1[var6] = var7;
                var21 = var4;
                var20 = var2;
                var19 = var5;
                var18 = undefined;
                var17 = var1;
                var1 = var21[var3](var20, var19, var18, var17, var16);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var4 = function arg0() {
        _fun89484: for (var _fun89484_ip = 0;;) switch (_fun89484_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.text;
                var0 = var0.params;
                var5 = var0.channel;
                var9 = var0.analyticsLocations;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 12;
                var0 = var3[var0];
                var1 = undefined;
                var4 = var4.bind(var1)(var0);
                var0 = var4.parse;
                var0 = var0.bind(var4)(var5, var6);
                var4 = var0.content;
                var6 = var4.length;
                var4 = _closure1_slot0;
                var13 = 16;
                var3 = var3[var13];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getMaxMessageLength;
                var3 = var3.bind(var4)();
                if (!(!(var6 <= var3))) {
                    _fun89484_ip = 452;
                    continue _fun89484
                }
            case 105:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 17;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.canUseIncreasedMessageLength;
                var7 = _closure1_slot7;
                var3 = var7.getCurrentUser;
                var3 = var3.bind(var7)();
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                if (var3) {
                    _fun89484_ip = 238;
                    continue _fun89484
                }
            case 160:
                var3 = 18;
                var3 = var5[var3];
                var8 = var4.bind(var1)(var3);
                var7 = var8.handleShowUpsellAlert;
                var3 = {};
                var10 = _closure1_slot10;
                var10 = var10.LONGER_MESSAGE;
                var3.initialUpsellKey = var10;
                var10 = {};
                var3.analyticsLocation = var10;
                var3.analyticsLocations = var9;
                var9 = {};
                var10 = _closure1_slot12;
                var10 = var10.MESSAGE_LENGTH_UPSELL;
                var9.type = var10;
                var3.analyticsProperties = var9;
                var3 = var7.bind(var8)(var3);
                _fun89484_ip = 450;
                continue _fun89484;
            case 238:
                var3 = 19;
                var3 = var5[var3];
                var8 = var4.bind(var1)(var3);
                var7 = var8.show;
                var3 = {};
                var14 = _closure1_slot0;
                var9 = 20;
                var10 = var5[var9];
                var10 = var14.bind(var1)(var10);
                var12 = var10.intl;
                var11 = var12.string;
                var10 = var5[var9];
                var10 = var14.bind(var1)(var10);
                var10 = var10.t;
                var10 = var10.l8rYLt;
                var10 = var11.bind(var12)(var10);
                var3.title = var10;
                var10 = var5[var9];
                var10 = var14.bind(var1)(var10);
                var12 = var10.intl;
                var11 = var12.formatToPlainString;
                var9 = var5[var9];
                var9 = var14.bind(var1)(var9);
                var9 = var9.t;
                var10 = var9.FfjF15;
                var9 = {};
                var9.currentLength = var6;
                var13 = var5[var13];
                var14 = var14.bind(var1)(var13);
                var13 = var14.getMaxMessageLength;
                var13 = var13.bind(var14)();
                var9.maxLength = var13;
                var9 = var11.bind(var12)(var10, var9);
                var3.body = var9;
                var3 = var7.bind(var8)(var3);
                var3 = 21;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot8;
                var3 = var2.OPEN_MODAL;
                var2 = {};
                var7 = 'Message Too Long Alert iOS';
                var2.type = var7;
                var2.message_content_length = var6;
                var2 = var4.bind(var5)(var3, var2);
            case 450:
                return var1;
            case 452:
                return var0;
        }
    };
    var _closure1_slot16 = var4;
    var3 = function arg0, arg1() {
        _fun89485: for (var _fun89485_ip = 0;;) switch (_fun89485_ip) {
            case 0:
                var1 = _closure1_slot7;
                var0 = var1.getCurrentUser;
                var3 = var0.bind(var1)();
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.canUploadLargeFiles;
                var1 = var1.bind(var2)(var3);
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                if (var1) {
                    _fun89485_ip = 189;
                    continue _fun89485
                }
            case 63:
                var1 = 18;
                var1 = var10[var1];
                var5 = var2.bind(var0)(var1);
                var3 = var5.handleShowUpsellAlert;
                var1 = {};
                var6 = _closure1_slot10;
                var6 = var6.UPLOAD;
                var1.initialUpsellKey = var6;
                var6 = {};
                var7 = _closure1_slot9;
                var7 = var7.FILE_UPLOAD_POPOUT;
                var6.section = var7;
                var1.analyticsLocation = var6;
                var6 = 28;
                var6 = var10[var6];
                var6 = var2.bind(var0)(var6);
                var7 = var6.FILE_UPLOAD_POPOUT;
                var6 = new Array(1);
                var6[0] = var7;
                var1.analyticsLocations = var6;
                var6 = {};
                var7 = _closure1_slot12;
                var7 = var7.UPLOAD_ERROR_UPSELL;
                var6.type = var7;
                var1.analyticsProperties = var6;
                var6 = arg1;
                var1.largestFileSize = var6;
                var1 = var3.bind(var5)(var1);
                _fun89485_ip = 351;
                continue _fun89485;
            case 189:
                var1 = 19;
                var1 = var10[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.show;
                var1 = {};
                var9 = _closure1_slot0;
                var4 = 20;
                var5 = var10[var4];
                var5 = var9.bind(var0)(var5);
                var7 = var5.intl;
                var6 = var7.string;
                var5 = var10[var4];
                var5 = var9.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5["/tGlcj"];
                var5 = var6.bind(var7)(var5);
                var1.title = var5;
                var5 = var10[var4];
                var5 = var9.bind(var0)(var5);
                var7 = var5.intl;
                var6 = var7.formatToPlainString;
                var4 = var10[var4];
                var4 = var9.bind(var0)(var4);
                var4 = var4.t;
                var5 = var4.fxEKdS;
                var4 = {};
                var8 = 27;
                var8 = var10[var8];
                var10 = var9.bind(var0)(var8);
                var9 = var10.sizeString;
                var8 = arg0;
                var8 = var9.bind(var10)(var8);
                var4.maxSize = var8;
                var4 = var6.bind(var7)(var5, var4);
                var1.body = var4;
                var1 = var2.bind(var3)(var1);
            case 351:
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun89488: for (var _fun89488_ip = 0;;) switch (_fun89488_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun89488_ip = 390;
                            continue _fun89488
                        }
                    case 13:
                        var3 = var1.applicationCommand;
                        var6 = var3.command;
                        var10 = var3.optionValues;
                        var7 = var1.params;
                        var4 = undefined;
                        SaveGenerator(address = 43);
                    case 41:
                        return var4;
                    case 43:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun89488_ip = 387;
                            continue _fun89488
                        }
                    case 52:
                        var13 = var7.channel;
                        var2 = var7.chatInputRef;
                        var3 = var2.current;
                        var8 = null;
                        if (!(var8 != var3)) {
                            _fun89488_ip = 84;
                            continue _fun89488
                        }
                    case 74:
                        var2 = var3.clearText;
                        var2 = var2.bind(var3)();
                    case 84:
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 29;
                        var2 = var9[var2];
                        var9 = var3.bind(var4)(var2);
                        var3 = var9.installApplicationOnDemandIfNeeded;
                        var2 = {};
                        var11 = var6.applicationId;
                        var2.applicationId = var11;
                        var11 = var7.channel;
                        var2.channel = var11;
                        var11 = var6.integration_types;
                        var2.commandIntegrationTypes = var11;
                        var2 = var3.bind(var9)(var2);
                        SaveGenerator(address = 153);
                    case 151:
                        return var2;
                    case 153:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun89488_ip = 384;
                            continue _fun89488
                        }
                    case 162:
                        var3 = var2.isAuthorized;
                        if (!var3) {
                            _fun89488_ip = 378;
                            continue _fun89488
                        }
                    case 174:
                        var9 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var3 = 30;
                        var3 = var12[var3];
                        var9 = var9.bind(var4)(var3);
                        var3 = {};
                        var3.command = var6;
                        var3.optionValues = var10;
                        var11 = _closure1_slot0;
                        var10 = 31;
                        var10 = var12[var10];
                        var12 = var11.bind(var4)(var10);
                        var11 = var12.getCommandContext;
                        var10 = {};
                        var10.channel = var13;
                        var13 = 'channel';
                        var10.type = var13;
                        var10 = var11.bind(var12)(var10);
                        var3.context = var10;
                        var10 = _closure1_slot17;
                        var3.maxSizeCallback = var10;
                        var3 = var9.bind(var4)(var3);
                        SaveGenerator(address = 269);
                    case 267:
                        return var3;
                    case 269:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 9);
                        if (var9) {
                            _fun89488_ip = 381;
                            continue _fun89488
                        }
                    case 275:
                        var9 = var6.inputType;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var6 = 32;
                        var6 = var11[var6];
                        var6 = var10.bind(var4)(var6);
                        var6 = var6.ApplicationCommandInputType;
                        var6 = var6.BUILT_IN_TEXT;
                        var6 = var9 === var6;
                        if (!var6) {
                            _fun89488_ip = 324;
                            continue _fun89488
                        }
                    case 320:
                        var6 = var8 != var3;
                    case 324:
                        if (!var6) {
                            _fun89488_ip = 378;
                            continue _fun89488
                        }
                    case 327:
                        var6 = _closure1_slot15;
                        var5 = {};
                        var8 = var3.content;
                        var5.text = var8;
                        var5.parsedMessage = var4;
                        var8 = var3.tts;
                        var5.tts = var8;
                        var8 = 'handleSendApplicationCommand';
                        var5.source = var8;
                        var5.params = var7;
                        var5 = var6.bind(var4)(var5);
                    case 378:
                        return var4;
                    case 381:
                        return var3;
                    case 384:
                        return var2;
                    case 387:
                        return var1;
                    case 390:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot18 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.DraftType;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.AnalyticEvents;
    var _closure1_slot8 = var8;
    var8 = var5.AnalyticsSections;
    var _closure1_slot9 = var8;
    var5 = var5.UpsellTypes;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.MessageSendLocation;
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.PremiumUpsellTypes;
    var _closure1_slot12 = var5;
    var5 = 33;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/chat_input/native/accessories/ChatInputSendUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.chatInputValidateContentLength = var4;
    var4 = function arg0() {
        _fun89489: for (var _fun89489_ip = 0;;) switch (_fun89489_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.text;
                var _closure2_slot0 = var9;
                var5 = var0.params;
                var _closure2_slot1 = var5;
                var0 = undefined;
                var _closure2_slot2 = var0;
                var7 = var5.channel;
                var2 = var5.hasAttachmentsToUpload;
                var6 = _closure1_slot5;
                var4 = var6.isChannelOnCooldown;
                var4 = var4.bind(var6)(var7);
                if (var4) {
                    _fun89489_ip = 653;
                    continue _fun89489
                }
            case 65:
                var6 = var9.length;
                var4 = 0;
                if (!(var4 === var6)) {
                    _fun89489_ip = 82;
                    continue _fun89489
                }
            case 76:
                if (!var2) {
                    _fun89489_ip = 653;
                    continue _fun89489
                }
            case 82:
                var4 = _closure1_slot16;
                var2 = {};
                var2.text = var9;
                var2.params = var5;
                var8 = var4.bind(var0)(var2);
                _closure2_slot2 = var8;
                var2 = null;
                if (!(var2 != var8)) {
                    _fun89489_ip = 653;
                    continue _fun89489
                }
            case 115:
                var6 = _closure1_slot13;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 22;
                var4 = var11[var4];
                var4 = var10.bind(var0)(var4);
                var4 = var4.RESTRICTIONS;
                var11 = var6.bind(var0)(var4);
                var6 = var11.bind(var0)();
                var4 = var6.done;
                var10 = false;
                if (var4) {
                    _fun89489_ip = 434;
                    continue _fun89489
                }
            case 167:
                var4 = var6.value;
                var12 = var4.check;
                var4 = var7.getGuildId;
                var4 = var4.bind(var7)();
                var4 = var2 != var4;
                var12 = var12.bind(var0)(var9, var7, var4);
                if (!(var10 === var12)) {
                    _fun89489_ip = 223;
                    continue _fun89489
                }
            case 203:
                var13 = var11.bind(var0)();
                var4 = var13.done;
                var6 = var13;
                if (var4) {
                    _fun89489_ip = 434;
                    continue _fun89489
                }
            case 221:
                _fun89489_ip = 167;
                continue _fun89489;
            case 223:
                var6 = _closure1_slot1;
                var15 = _closure1_slot2;
                var4 = 19;
                var4 = var15[var4];
                var10 = var6.bind(var0)(var4);
                var6 = var10.show;
                var4 = {};
                var14 = _closure1_slot0;
                var11 = 20;
                var13 = var15[var11];
                var13 = var14.bind(var0)(var13);
                var17 = var13.intl;
                var16 = var17.string;
                var13 = var15[var11];
                var13 = var14.bind(var0)(var13);
                var13 = var13.t;
                var13 = var13.mY3Y38;
                var13 = var16.bind(var17)(var13);
                var4.title = var13;
                var12 = var12.body;
                var4.body = var12;
                var12 = var15[var11];
                var12 = var14.bind(var0)(var12);
                var16 = var12.intl;
                var13 = var16.string;
                var12 = var15[var11];
                var12 = var14.bind(var0)(var12);
                var12 = var12.t;
                var12 = var12.KJnHq3;
                var12 = var13.bind(var16)(var12);
                var4.confirmText = var12;
                var12 = function() {
                    var2 = _closure1_slot15;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var1.text = var0;
                    var0 = _closure2_slot2;
                    var1.parsedMessage = var0;
                    var0 = undefined;
                    var1.tts = var0;
                    var4 = 'alert onConfirm';
                    var1.source = var4;
                    var3 = _closure2_slot1;
                    var1.params = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.onConfirm = var12;
                var12 = var15[var11];
                var12 = var14.bind(var0)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var0)(var11);
                var11 = var11.t;
                var11 = var11.fsBWmS;
                var11 = var12.bind(var13)(var11);
                var4.cancelText = var11;
                var4 = var6.bind(var10)(var4);
                var4 = undefined;
                return var4;
            case 434:
                var11 = _closure1_slot6;
                var10 = var11.getUploads;
                var6 = var7.id;
                var4 = _closure1_slot4;
                var4 = var4.ChannelMessage;
                var6 = var10.bind(var11)(var6, var4);
                if (!(var2 != var6)) {
                    _fun89489_ip = 509;
                    continue _fun89489
                }
            case 469:
                var4 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 23;
                var2 = var10[var2];
                var10 = var4.bind(var0)(var2);
                var4 = var10.shouldShowAddMediaToOriginalPostModal;
                var2 = var7.id;
                var2 = var4.bind(var10)(var6, var2);
                if (var2) {
                    _fun89489_ip = 551;
                    continue _fun89489
                }
            case 509:
                var4 = _closure1_slot15;
                var2 = {};
                var2.text = var9;
                var2.parsedMessage = var8;
                var2.tts = var0;
                var8 = 'handleSendMessage';
                var2.source = var8;
                var2.params = var5;
                var2 = var4.bind(var0)(var2);
                _fun89489_ip = 653;
                continue _fun89489;
            case 551:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = 24;
                var4 = var2[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.openLazy;
                var8 = _closure1_slot0;
                var3 = 26;
                var3 = var2[var3];
                var8 = var8.bind(var0)(var3);
                var3 = 25;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var8.bind(var0)(var3, var2);
                var2 = {};
                var7 = var7.id;
                var2.threadId = var7;
                var2.attachments = var6;
                var1 = function() {
                    var2 = _closure1_slot15;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var1.text = var0;
                    var0 = _closure2_slot2;
                    var1.parsedMessage = var0;
                    var0 = undefined;
                    var1.tts = var0;
                    var4 = 'AddMediaToOriginalForumPostActionSheet';
                    var1.source = var4;
                    var3 = _closure2_slot1;
                    var1.params = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2.sendMessage = var1;
                var1 = 'add-media-to-original-forum-post';
                var1 = var4.bind(var5)(var3, var1, var2);
            case 653:
                return var0;
        }
    };
    var2.chatInputHandleSendText = var4;
    var4 = function arg0() {
        _fun89492: for (var _fun89492_ip = 0;;) switch (_fun89492_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.text;
                var1 = var0.threadCreationCallback;
                var4 = var2.length;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 16;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.getMaxMessageLength;
                var3 = var3.bind(var5)();
                if (!(var4 > var3)) {
                    _fun89492_ip = 178;
                    continue _fun89492
                }
            case 58:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 17;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.canUseIncreasedMessageLength;
                var6 = _closure1_slot7;
                var3 = var6.getCurrentUser;
                var3 = var3.bind(var6)();
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun89492_ip = 178;
                    continue _fun89492
                }
            case 105:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 18;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.handleShowUpsellAlert;
                var3 = {};
                var6 = _closure1_slot10;
                var6 = var6.LONGER_MESSAGE;
                var3.initialUpsellKey = var6;
                var6 = {};
                var7 = _closure1_slot12;
                var7 = var7.MESSAGE_LENGTH_UPSELL;
                var6.type = var7;
                var3.analyticsProperties = var6;
                var3 = var4.bind(var5)(var3);
                var3 = undefined;
                return var3;
            case 178:
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var2.chatInputCreateThread = var4;
    var2.showFileSizeExceededAlert = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot18;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.chatInputSendApplicationCommand = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4000, 6555, 3999, 1621, 660, 1346, 1623, 7629, 1207, 6501, 11633, 5592, 9285, 6546, 7630, 7686, 3109, 7632, 4002, 1234, 795, 9291, 8908, 3278, 11635, 1307, 4008, 5583, 8005, 8006, 11666, 4547, 2]);