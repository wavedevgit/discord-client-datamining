// modules/forums/native/AddMediaToOriginalForumPostActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _upload2, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun90059: for (var _fun90059_ip = 0;;) switch (_fun90059_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun90059_ip = 960;
                            continue _fun90059
                        }
                    case 15:
                        var4 = var1.threadId;
                        var9 = var4;
                        var _closure4_slot0 = var4;
                        var5 = var1.attachments;
                        var4 = var1.setIsUploading;
                        var3 = var4;
                        var _closure4_slot1 = var4;
                        var4 = var1.guild;
                        var7 = var4;
                        var _closure4_slot2 = var4;
                        var1 = var1.analyticsLocations;
                        var6 = var1;
                        var _closure4_slot3 = var1;
                        var4 = undefined;
                        var12 = undefined;
                        var _closure4_slot4 = var4;
                        var16 = undefined;
                        var10 = undefined;
                        var11 = undefined;
                        var14 = undefined;
                        var8 = undefined;
                        SaveGenerator(address = 94);
                    case 92:
                        return var4;
                    case 94:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun90059_ip = 957;
                            continue _fun90059
                        }
                    case 103:
                        var19 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var17 = 12;
                        var17 = var15[var17];
                        var17 = var19.bind(var4)(var17);
                        var18 = var17.prototype;
                        var18 = Object.create(var18, {
                            constructor: {
                                value: var17
                            }
                        });
                        var25 = var18;
                        var17 = new var25[var17](var24);
                        var21 = var17 instanceof Object ? var17 : var18;
                        var12 = var21;
                        _closure4_slot4 = var21;
                        var20 = var21.on;
                        var18 = 'start';
                        var17 = function() { // Environment: var13
                            var2 = _closure4_slot1;
                            var0 = undefined;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var17 = var20.bind(var21)(var18, var17);
                        var20 = var21.on;
                        var18 = 'progress';
                        var17 = function(arg0) { // Environment: var13
                            _fun90061: for (var _fun90061_ip = 0;;) switch (_fun90061_ip) {
                                case 0:
                                    var5 = arg0;
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 13;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var6 = var3.bind(var0)(var2);
                                    var4 = var6.maxFileSize;
                                    var2 = _closure4_slot2;
                                    var2 = var2.id;
                                    var4 = var4.bind(var6)(var2);
                                    var2 = var5.currentSize;
                                    if (!(var2 > var4)) {
                                        _fun90061_ip = 154;
                                        continue _fun90061
                                    }
                                case 61:
                                    var6 = _closure4_slot4;
                                    var2 = var6.cancel;
                                    var2 = var2.bind(var6)();
                                    var6 = _closure4_slot1;
                                    var2 = false;
                                    var2 = var6.bind(var0)(var2);
                                    var2 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var1 = 14;
                                    var1 = var6[var1];
                                    var7 = var2.bind(var0)(var1);
                                    var1 = var7.hideActionSheet;
                                    var1 = var1.bind(var7)();
                                    var1 = 15;
                                    var1 = var6[var1];
                                    var2 = var2.bind(var0)(var1);
                                    var1 = {};
                                    var1.file = var5;
                                    var1.maxSize = var4;
                                    var3 = _closure4_slot3;
                                    var1.analyticsLocations = var3;
                                    var1 = var2.bind(var0)(var1);
                                case 154:
                                    return var0;
                            }
                        };
                        var17 = var20.bind(var21)(var18, var17);
                        var20 = var21.on;
                        var18 = 'error';
                        var17 = function() { // Environment: var13
                            var2 = _closure4_slot1;
                            var0 = undefined;
                            var1 = false;
                            var1 = var2.bind(var0)(var1);
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 14;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                        };
                        var17 = var20.bind(var21)(var18, var17);
                        var20 = var21.on;
                        var18 = 'complete';
                        var17 = function() { // Environment: var13
                            var2 = _closure4_slot1;
                            var0 = undefined;
                            var1 = false;
                            var1 = var2.bind(var0)(var1);
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var5 = 16;
                            var5 = var3[var5];
                            var6 = var2.bind(var0)(var5);
                            var5 = var6.clearAll;
                            var4 = _closure4_slot0;
                            var1 = _closure1_slot8;
                            var1 = var1.ChannelMessage;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = 14;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                        };
                        var17 = var20.bind(var21)(var18, var17);
                        var18 = _closure1_slot10;
                        var17 = var18.getMessages;
                        var20 = var9;
                        var18 = var17.bind(var18)(var20);
                        var17 = var18.get;
                        var21 = 17;
                        var15 = var15[var21];
                        var19 = var19.bind(var4)(var15);
                        var15 = var19.castChannelIdAsMessageId;
                        var15 = var15.bind(var19)(var20);
                        var18 = var17.bind(var18)(var15);
                        var15 = null;
                        if (!(var15 == var18)) {
                            _fun90059_ip = 308;
                            continue _fun90059
                        }
                    case 302:
                        var17 = new Array(0);
                        _fun90059_ip = 314;
                        continue _fun90059;
                    case 308:
                        var17 = var18.attachments;
                    case 314:
                        var10 = var17;
                    case 317: // try_start_0
                        var17 = var12;
                        var12 = var17.uploadFiles;
                        var5 = var12.bind(var17)(var5);
                        SaveGenerator(address = 335);
                    case 333:
                        return var5;
                    case 335:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 12);
                        if (var12) {
                            _fun90059_ip = 833;
                            continue _fun90059
                        }
                    case 344:
                        var12 = 0;
                        var23 = var10;
                        var10 = new Array(0);
                        var24 = var10;
                        var22 = 0;
                        var12 = arraySpread(var24, var23, var22);
                        var17 = var5.map;
                        var13 = function(arg0, arg1) { // Environment: var13
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.getAttachmentPayload;
                            var1 = arg0;
                            var0 = arg1;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var13 = var17.bind(var5)(var13);
                        var11 = var13;
                        if (!(var15 == var13)) {
                            _fun90059_ip = 392;
                            continue _fun90059
                        }
                    case 386:
                        var13 = new Array(0);
                        _fun90059_ip = 395;
                        continue _fun90059;
                    case 392:
                        var13 = var11;
                    case 395:
                        var22 = var12;
                        var24 = var10;
                        var23 = var13;
                        var12 = arraySpread(var24, var23, var22);
                        var16 = var10;
                    case 411: // try_start_1 // try_end0
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var10 = 20;
                        var10 = var13[var10];
                        var10 = var11.bind(var4)(var10);
                        var12 = var10.HTTP;
                        var11 = var12.patch;
                        var10 = {};
                        var19 = _closure1_slot12;
                        var18 = var19.MESSAGE;
                        var17 = var9;
                        var20 = _closure1_slot1;
                        var13 = var13[var21];
                        var20 = var20.bind(var4)(var13);
                        var13 = var20.castChannelIdAsMessageId;
                        var13 = var13.bind(var20)(var17);
                        var13 = var18.bind(var19)(var17, var13);
                        var10.url = var13;
                        var13 = {};
                        var13.attachments = var16;
                        var10.body = var13;
                        var13 = true;
                        var10.rejectWithError = var13;
                        var10 = var11.bind(var12)(var10);
                        SaveGenerator(address = 517);
                    case 515:
                        return var10;
                    case 517:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 11);
                        if (var11) {
                            _fun90059_ip = 528;
                            continue _fun90059
                        }
                    case 523: // try_end1
                        _fun90059_ip = 830;
                        continue _fun90059;
                    case 528:
                        return var10;
                    case 531: // catch_target1
                        CatchBlockStart(arg_register = 12);
                        var11 = var3;
                        var10 = false;
                        var10 = var11.bind(var4)(var10);
                        var11 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var10 = 14;
                        var10 = var13[var10];
                        var16 = var11.bind(var4)(var10);
                        var10 = var16.hideActionSheet;
                        var10 = var10.bind(var16)();
                        var10 = 21;
                        var10 = var13[var10];
                        var10 = var11.bind(var4)(var10);
                        var11 = var10.prototype;
                        var11 = Object.create(var11, {
                            constructor: {
                                value: var10
                            }
                        });
                        var25 = var11;
                        var24 = var12;
                        var10 = new var25[var10](var24, var23);
                        var10 = var10 instanceof Object ? var10 : var11;
                        var8 = var10;
                        var11 = var10.code;
                        var10 = _closure1_slot11;
                        var10 = var10.EXPLICIT_CONTENT;
                        if (!(var11 !== var10)) {
                            _fun90059_ip = 760;
                            continue _fun90059
                        }
                    case 633:
                        var11 = _closure1_slot1;
                        var19 = _closure1_slot2;
                        var10 = 24;
                        var10 = var19[var10];
                        var12 = var11.bind(var4)(var10);
                        var11 = var12.show;
                        var10 = {};
                        var18 = _closure1_slot0;
                        var13 = 25;
                        var16 = var19[var13];
                        var16 = var18.bind(var4)(var16);
                        var17 = var16.intl;
                        var16 = var17.string;
                        var13 = var19[var13];
                        var13 = var18.bind(var4)(var13);
                        var13 = var13.t;
                        var13 = var13.B3vFdU;
                        var13 = var16.bind(var17)(var13);
                        var10.title = var13;
                        var16 = var8;
                        var13 = var16.getAnyErrorMessage;
                        var13 = var13.bind(var16)();
                        var14 = var13;
                        if (!(var15 == var13)) {
                            _fun90059_ip = 746;
                            continue _fun90059
                        }
                    case 736:
                        var13 = var8;
                        var13 = var13.message;
                        _fun90059_ip = 749;
                        continue _fun90059;
                    case 746:
                        var13 = var14;
                    case 749:
                        var10.body = var13;
                        var10 = var11.bind(var12)(var10);
                        _fun90059_ip = 830;
                        continue _fun90059;
                    case 760:
                        var11 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var10 = 22;
                        var10 = var14[var10];
                        var12 = var11.bind(var4)(var10);
                        var11 = var12.sendExplicitMediaClydeError;
                        var10 = var9;
                        var9 = var8.attachments;
                        var13 = _closure1_slot0;
                        var8 = 23;
                        var8 = var14[var8];
                        var8 = var13.bind(var4)(var8);
                        var8 = var8.TrackMediaRedactionContext;
                        var8 = var8.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED;
                        var8 = var11.bind(var12)(var10, var9, var8);
                    case 830:
                        return var4;
                    case 833:
                        return var5;
                    case 836: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var8 = var3;
                        var3 = false;
                        var3 = var8.bind(var4)(var3);
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 14;
                        var3 = var8[var3];
                        var9 = var9.bind(var4)(var3);
                        var3 = var9.hideActionSheet;
                        var3 = var3.bind(var9)();
                        var3 = _closure1_slot0;
                        var2 = 19;
                        var2 = var8[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.handleUploadMessageAttachmentsErrors;
                        var2 = {};
                        var8 = var5.file;
                        var2.file = var8;
                        var7 = var7.id;
                        var2.guildId = var7;
                        var2.analyticsLocations = var6;
                        var6 = var5.code;
                        var2.code = var6;
                        var5 = var5.reason;
                        var2.reason = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = undefined;
                        return var2;
                    case 957:
                        return var1;
                    case 960:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var12 = 4;
    var3 = var5[var12];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AbortCodes;
    var _closure1_slot11 = var6;
    var3 = var3.Endpoints;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var9 = 10;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingHorizontal': 16,
        'paddingTop': 24
    };
    var3.container = var8;
    var8 = {};
    var8.borderWidth = var10;
    var10 = 11;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var8.borderColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var8.borderRadius = var13;
    var13 = 32;
    var8.marginBottom = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BLACK;
    var8.shadowColor = var13;
    var13 = {
        'width': 0,
        'height': 1
    };
    var8.shadowOffset = var13;
    var13 = 0.25;
    var8.shadowOpacity = var13;
    var8.shadowRadius = var12;
    var8.elevation = var12;
    var3.post = var8;
    var8 = {
        'marginBottom': 0,
        'padding': 8
    };
    var3.postContent = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.title = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 32
    };
    var3.description = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var8.borderRadius = var10;
    var3.button = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.buttonMargin = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 34;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/AddMediaToOriginalForumPostActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AddMediaToOriginalForumPostActionSheet, environment: var1
        _fun90065: for (var _fun90065_ip = 0;;) switch (_fun90065_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.threadId;
                var _closure2_slot0 = var16;
                var2 = var0.attachments;
                var _closure2_slot1 = var2;
                var0 = var0.sendMessage;
                var _closure2_slot2 = var0;
                var1 = _closure1_slot15;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var9 = _closure1_slot5;
                var4 = var9.useState;
                var1 = false;
                var1 = var4.bind(var9)(var1);
                var7 = _closure1_slot3;
                var5 = 2;
                var4 = var7.bind(var3)(var1, var5);
                var1 = 0;
                var10 = var4[var1];
                var6 = 1;
                var4 = var4[var6];
                var _closure2_slot3 = var4;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 26;
                var15 = var14[var4];
                var20 = var13.bind(var3)(var15);
                var19 = var20.useStateFromStores;
                var15 = _closure1_slot7;
                var18 = new Array(1);
                var18[0] = var15;
                var17 = new Array(1);
                var17[0] = var16;
                var15 = function() { // Environment: var11
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var19.bind(var20)(var18, var15, var17);
                var _closure2_slot4 = var18;
                var15 = var14[var4];
                var21 = var13.bind(var3)(var15);
                var20 = var21.useStateFromStores;
                var15 = _closure1_slot9;
                var19 = new Array(1);
                var19[0] = var15;
                var17 = new Array(1);
                var17[0] = var18;
                var15 = function() { // Environment: var11
                    _fun90067: for (var _fun90067_ip = 0;;) switch (_fun90067_ip) {
                        case 0:
                            var2 = _closure1_slot9;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot4;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun90067_ip = 44;
                                continue _fun90067
                            }
                        case 30:
                            var4 = _closure2_slot4;
                            var3 = var4.getGuildId;
                            var0 = var3.bind(var4)();
                        case 44:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var17 = var20.bind(var21)(var19, var15, var17);
                var _closure2_slot5 = var17;
                var4 = var14[var4];
                var20 = var13.bind(var3)(var4);
                var19 = var20.useStateFromStores;
                var4 = _closure1_slot10;
                var15 = new Array(1);
                var15[0] = var4;
                var13 = new Array(1);
                var13[0] = var16;
                var4 = function() { // Environment: var11
                    var3 = _closure1_slot10;
                    var2 = var3.getMessage;
                    var1 = _closure2_slot0;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 17;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var0 = var4.castChannelIdAsMessageId;
                    var0 = var0.bind(var4)(var1);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var15 = var19.bind(var20)(var15, var4, var13);
                var _closure2_slot6 = var15;
                var13 = _closure1_slot1;
                var4 = 27;
                var4 = var14[var4];
                var4 = var13.bind(var3)(var4);
                var4 = var4.bind(var3)();
                var4 = var4.analyticsLocations;
                var _closure2_slot7 = var4;
                var14 = var9.useCallback;
                var13 = new Array(6);
                var13[0] = var18;
                var13[1] = var17;
                var13[2] = var15;
                var13[3] = var16;
                var13[4] = var2;
                var13[5] = var4;
                var4 = function() { // Environment: var11
                    _fun90069: for (var _fun90069_ip = 0;;) switch (_fun90069_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun90069_ip = 29;
                                continue _fun90069
                            }
                        case 13:
                            var1 = _closure2_slot6;
                            if (!(var2 != var1)) {
                                _fun90069_ip = 29;
                                continue _fun90069
                            }
                        case 21:
                            var1 = _closure2_slot5;
                            if (!(var2 == var1)) {
                                _fun90069_ip = 66;
                                continue _fun90069
                            }
                        case 29:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            _fun90069_ip = 171;
                            continue _fun90069;
                        case 66:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 28;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.trackForumAddMediaToOriginalPostClicked;
                            var1 = {};
                            var5 = true;
                            var1.added = var5;
                            var1 = var3.bind(var4)(var1);
                            var1 = {};
                            var3 = _closure2_slot0;
                            var1.threadId = var3;
                            var3 = _closure2_slot1;
                            var1.attachments = var3;
                            var3 = _closure2_slot3;
                            var1.setIsUploading = var3;
                            var3 = _closure2_slot5;
                            var1.guild = var3;
                            var0 = _closure2_slot7;
                            var1.analyticsLocations = var0;
                            var0 = function() { // Original name: _upload, environment: var0
                                var0 = undefined;
                                var3 = _closure1_slot16;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var0 = var0.bind(var2)(var1);
                        case 171:
                            var0 = undefined;
                            return var0;
                    }
                };
                var18 = var14.bind(var9)(var4, var13);
                var13 = var9.useCallback;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var11
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 28;
                    var2 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.trackForumAddMediaToOriginalPostClicked;
                    var2 = {};
                    var6 = false;
                    var2.added = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot1;
                    var1 = 14;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var17 = var13.bind(var9)(var0, var4);
                var4 = var9.useState;
                var0 = null;
                var4 = var4.bind(var9)(var0);
                var4 = var7.bind(var3)(var4, var5);
                var5 = var4[var1];
                var4 = var4[var6];
                var _closure2_slot8 = var4;
                var7 = var9.useEffect;
                var6 = new Array(1);
                var6[0] = var2;
                var4 = function() { // Environment: var11
                    _fun90072: for (var _fun90072_ip = 0;;) switch (_fun90072_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var3 = 0;
                            var2 = var1[var3];
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun90072_ip = 82;
                                continue _fun90072
                            }
                        case 19:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 29;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.getFileInfo;
                            var0 = _closure2_slot1;
                            var0 = var0[var3];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure2_slot8;
                                var0 = arg0;
                                var1 = var0.uri;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 82:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var7.bind(var9)(var4, var6);
                var6 = var2[var1];
                var7 = var0 == var6;
                var4 = undefined;
                if (var7) {
                    _fun90065_ip = 437;
                    continue _fun90065
                }
            case 432:
                var4 = var6.item;
            case 437:
                var6 = var0 != var4;
                var14 = undefined;
                if (!var6) {
                    _fun90065_ip = 512;
                    continue _fun90065
                }
            case 446:
                var0 = var0 != var5;
                var14 = undefined;
                if (!var0) {
                    _fun90065_ip = 512;
                    continue _fun90065
                }
            case 455:
                var0 = {};
                var0.src = var5;
                var5 = var4.width;
                var0.width = var5;
                var4 = var4.height;
                var0.height = var4;
                var4 = var2[var1];
                var4 = var4.spoiler;
                var0.spoiler = var4;
                var1 = var2[var1];
                var1 = var1.description;
                var0.alt = var1;
                var14 = var0;
            case 512:
                var2 = _closure1_slot13;
                var19 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 30;
                var0 = var15[var0];
                var0 = var19.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var4 = true;
                var0.startExpanded = var4;
                var6 = _closure1_slot14;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var12.container;
                var4.style = var7;
                var7 = {};
                var9 = 'none';
                var7.pointerEvents = var9;
                var9 = var12.post;
                var7.style = var9;
                var9 = 31;
                var9 = var15[var9];
                var9 = var19.bind(var3)(var9);
                var13 = var9.ForumPostListDisabled;
                var9 = {};
                var9.threadId = var16;
                var9.localDeviceMedia = var14;
                var14 = var12.postContent;
                var9.style = var14;
                var9 = var2.bind(var3)(var13, var9);
                var7.children = var9;
                var9 = var2.bind(var3)(var5, var7);
                var7 = new Array(6);
                var7[0] = var9;
                var9 = 32;
                var13 = var15[var9];
                var13 = var19.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var12.title;
                var13.style = var16;
                var16 = 25;
                var20 = var15[var16];
                var20 = var19.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var15[var16];
                var20 = var19.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["+SZF6S"];
                var20 = var21.bind(var22)(var20);
                var13.children = var20;
                var13 = var2.bind(var3)(var14, var13);
                var7[1] = var13;
                var9 = var15[var9];
                var9 = var19.bind(var3)(var9);
                var13 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var14 = var12.description;
                var9.style = var14;
                var14 = var15[var16];
                var14 = var19.bind(var3)(var14);
                var21 = var14.intl;
                var20 = var21.string;
                var14 = var15[var16];
                var14 = var19.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["0Ycgw5"];
                var14 = var20.bind(var21)(var14);
                var9.children = var14;
                var9 = var2.bind(var3)(var13, var9);
                var7[2] = var9;
                var14 = _closure1_slot1;
                var13 = 33;
                var8 = var15[var13];
                var9 = var14.bind(var3)(var8);
                var8 = {};
                var20 = var15[var16];
                var20 = var19.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var15[var16];
                var20 = var19.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.d611xH;
                var20 = var21.bind(var22)(var20);
                var8.text = var20;
                var20 = var15[var13];
                var20 = var14.bind(var3)(var20);
                var20 = var20.Colors;
                var20 = var20.BRAND;
                var8.color = var20;
                var21 = var12.button;
                var20 = new Array(2);
                var20[0] = var21;
                var21 = var12.buttonMargin;
                var20[1] = var21;
                var8.style = var20;
                var8.onPress = var18;
                var8.loading = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[3] = var8;
                var8 = var15[var13];
                var9 = var14.bind(var3)(var8);
                var8 = {};
                var18 = var15[var16];
                var18 = var19.bind(var3)(var18);
                var21 = var18.intl;
                var20 = var21.string;
                var18 = var15[var16];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["8rKVHL"];
                var18 = var20.bind(var21)(var18);
                var8.text = var18;
                var18 = var15[var13];
                var18 = var14.bind(var3)(var18);
                var18 = var18.Colors;
                var18 = var18.GREY;
                var8.color = var18;
                var20 = var12.button;
                var18 = new Array(2);
                var18[0] = var20;
                var20 = var12.buttonMargin;
                var18[1] = var20;
                var8.style = var18;
                var8.onPress = var17;
                var8.disabled = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[4] = var8;
                var8 = var15[var13];
                var9 = var14.bind(var3)(var8);
                var8 = {};
                var17 = var15[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var15[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["ETE/oC"];
                var16 = var17.bind(var18)(var16);
                var8.text = var16;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.Colors;
                var13 = var13.TRANSPARENT;
                var8.color = var13;
                var12 = var12.button;
                var8.style = var12;
                var11 = function() { // Original name: onPress, environment: var11
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.hideActionSheet;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8.onPress = var11;
                var8.disabled = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[5] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 1372, 3960, 1410, 4213, 660, 33, 1297, 671, 6576, 3968, 3237, 7572, 7570, 21, 3966, 7571, 507, 11635, 6487, 4219, 3896, 1234, 566, 5687, 6430, 3972, 4893, 11636, 3901, 4835, 2]);