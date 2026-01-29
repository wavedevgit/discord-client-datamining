// modules/messages/native/renderer/transformMessageAttachments.tsx
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
    var3 = var3.AttachmentType;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageAttachmentFlags;
    var _closure1_slot4 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/transformMessageAttachments.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: transformMessageAttachments, environment: var1
        var1 = arg0;
        var3 = var1.attachments;
        var2 = var1.uploadAttachments;
        var _closure2_slot0 = var2;
        var2 = var1.shouldInlineAttachmentMedia;
        var _closure2_slot1 = var2;
        var2 = var1.gifAutoPlay;
        var _closure2_slot2 = var2;
        var2 = var1.viewImageDescriptions;
        var _closure2_slot3 = var2;
        var2 = var1.useReducedMotion;
        var _closure2_slot4 = var2;
        var2 = var1.shouldObscureSpoiler;
        var _closure2_slot5 = var2;
        var2 = var1.themedBackgroundColor;
        var _closure2_slot6 = var2;
        var2 = var1.enabledContentHarmTypeFlags;
        var _closure2_slot7 = var2;
        var2 = var1.shouldAgeVerify;
        var _closure2_slot8 = var2;
        var1 = var1.colors;
        var _closure2_slot9 = var1;
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            _fun55962: for (var _fun55962_ip = 0;;) switch (_fun55962_ip) {
                case 0:
                    var2 = arg0;
                    var1 = var2.flags;
                    var0 = null;
                    var0 = var0 == var1;
                    if (var0) {
                        _fun55962_ip = 72;
                        continue _fun55962
                    }
                case 17:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 2;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.hasFlag;
                    var2 = var2.flags;
                    var1 = _closure1_slot4;
                    var1 = var1.IS_THUMBNAIL;
                    var1 = var3.bind(var4)(var2, var1);
                    var0 = !var1;
                case 72:
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.map;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun55963: for (var _fun55963_ip = 0;;) switch (_fun55963_ip) {
                case 0:
                    var6 = arg0;
                    var7 = arg1;
                    var29 = var6.proxy_url;
                    var30 = var6.url;
                    var5 = var6.filename;
                    var24 = var6.size;
                    var17 = var6.width;
                    var22 = var6.height;
                    var20 = var6.description;
                    var19 = var6.duration_secs;
                    var18 = var6.waveform;
                    var10 = var6.id;
                    var9 = var6.placeholder;
                    var8 = var6.placeholder_version;
                    var0 = var6.flags;
                    var3 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 3;
                    var12 = var11[var1];
                    var4 = undefined;
                    var13 = var3.bind(var4)(var12);
                    var12 = var13.isImageFile;
                    var16 = var12.bind(var13)(var5);
                    var12 = var11[var1];
                    var13 = var3.bind(var4)(var12);
                    var12 = var13.isAudioFile;
                    var13 = var12.bind(var13)(var5);
                    var12 = var11[var1];
                    var14 = var3.bind(var4)(var12);
                    var12 = var14.isVideoFile;
                    var15 = var12.bind(var14)(var5);
                    var1 = var11[var1];
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.isWebPlayerVideoFile;
                    var3 = var1.bind(var3)(var5);
                    var23 = var16;
                    if (var23) {
                        _fun55963_ip = 182;
                        continue _fun55963
                    }
                case 179:
                    var23 = var15;
                case 182:
                    var1 = _closure2_slot0;
                    var11 = null;
                    var1 = var11 != var1;
                    if (!var1) {
                        _fun55963_ip = 211;
                        continue _fun55963
                    }
                case 198:
                    var12 = _closure2_slot0;
                    var12 = var12.length;
                    var1 = var7 < var12;
                case 211:
                    var12 = undefined;
                    if (!var1) {
                        _fun55963_ip = 224;
                        continue _fun55963
                    }
                case 216:
                    var1 = _closure2_slot0;
                    var12 = var1[var7];
                case 224:
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var27 = 2;
                    var1 = var1[var27];
                    var21 = var7.bind(var4)(var1);
                    var14 = var21.hasFlag;
                    var1 = var11 != var0;
                    var26 = 0;
                    var7 = 0;
                    if (!var1) {
                        _fun55963_ip = 264;
                        continue _fun55963
                    }
                case 261:
                    var7 = var0;
                case 264:
                    var1 = _closure1_slot4;
                    var1 = var1.IS_ANIMATED;
                    var7 = var14.bind(var21)(var7, var1);
                    if (!var16) {
                        _fun55963_ip = 291;
                        continue _fun55963
                    }
                case 283:
                    if (!(var11 != var17)) {
                        _fun55963_ip = 291;
                        continue _fun55963
                    }
                case 287:
                    if (!(var11 == var22)) {
                        _fun55963_ip = 365;
                        continue _fun55963
                    }
                case 291:
                    var1 = var15;
                    if (!var1) {
                        _fun55963_ip = 311;
                        continue _fun55963
                    }
                case 297:
                    var14 = _closure2_slot1;
                    if (var14) {
                        _fun55963_ip = 308;
                        continue _fun55963
                    }
                case 304:
                    var14 = var11 != var12;
                case 308:
                    var1 = var14;
                case 311:
                    var21 = undefined;
                    var25 = var30;
                    if (!var1) {
                        _fun55963_ip = 416;
                        continue _fun55963
                    }
                case 319:
                    var1 = var30;
                    if (!(var11 != var29)) {
                        _fun55963_ip = 336;
                        continue _fun55963
                    }
                case 326:
                    var14 = '?format=webp';
                    var1 = var29 + var14;
                case 336:
                    var14 = var30;
                    if (!(var11 != var29)) {
                        _fun55963_ip = 357;
                        continue _fun55963
                    }
                case 343:
                    var28 = '';
                    var14 = var30;
                    if (!(var28 !== var29)) {
                        _fun55963_ip = 357;
                        continue _fun55963
                    }
                case 354:
                    var14 = var29;
                case 357:
                    var21 = var14;
                    var25 = var1;
                    _fun55963_ip = 416;
                    continue _fun55963;
                case 365:
                    var14 = _closure1_slot1;
                    var28 = _closure1_slot2;
                    var1 = 4;
                    var1 = var28[var1];
                    var28 = var14.bind(var4)(var1);
                    var14 = var28.getImageSrc;
                    var1 = _closure2_slot2;
                    var31 = !var1;
                    var35 = var28;
                    var34 = var29;
                    var33 = var17;
                    var32 = var22;
                    var25 = var35[var14](var34, var33, var32, var31, var30);
                    var21 = undefined;
                case 416:
                    var14 = var17;
                    if (!(var11 != var12)) {
                        _fun55963_ip = 440;
                        continue _fun55963
                    }
                case 423:
                    var1 = var12.width;
                    var14 = var17;
                    if (!(var1 > var26)) {
                        _fun55963_ip = 440;
                        continue _fun55963
                    }
                case 435:
                    var14 = var12.width;
                case 440:
                    var1 = var22;
                    if (!(var11 != var12)) {
                        _fun55963_ip = 464;
                        continue _fun55963
                    }
                case 447:
                    var17 = var12.height;
                    var1 = var22;
                    if (!(var17 > var26)) {
                        _fun55963_ip = 464;
                        continue _fun55963
                    }
                case 459:
                    var1 = var12.height;
                case 464:
                    var22 = _closure2_slot1;
                    var17 = 0;
                    if (!var22) {
                        _fun55963_ip = 490;
                        continue _fun55963
                    }
                case 473:
                    var17 = 0;
                    if (!var23) {
                        _fun55963_ip = 490;
                        continue _fun55963
                    }
                case 478:
                    var22 = var11 != var14;
                    var17 = 0;
                    if (!var22) {
                        _fun55963_ip = 490;
                        continue _fun55963
                    }
                case 487:
                    var17 = var14;
                case 490:
                    var22 = _closure2_slot1;
                    var14 = 0;
                    if (!var22) {
                        _fun55963_ip = 516;
                        continue _fun55963
                    }
                case 499:
                    var14 = 0;
                    if (!var23) {
                        _fun55963_ip = 516;
                        continue _fun55963
                    }
                case 504:
                    var22 = var11 != var1;
                    var14 = 0;
                    if (!var22) {
                        _fun55963_ip = 516;
                        continue _fun55963
                    }
                case 513:
                    var14 = var1;
                case 516:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var27];
                    var22 = var22.bind(var4)(var1);
                    var1 = var22.hasFlag;
                    var27 = var11 != var0;
                    var26 = 0;
                    if (!var27) {
                        _fun55963_ip = 551;
                        continue _fun55963
                    }
                case 548:
                    var26 = var0;
                case 551:
                    var0 = _closure1_slot4;
                    var0 = var0.IS_CLIP;
                    var0 = var1.bind(var22)(var26, var0);
                    var1 = undefined;
                    if (!var0) {
                        _fun55963_ip = 682;
                        continue _fun55963
                    }
                case 572:
                    var0 = {};
                    var28 = _closure1_slot0;
                    var29 = _closure1_slot2;
                    var22 = 5;
                    var26 = var29[var22];
                    var26 = var28.bind(var4)(var26);
                    var27 = var26.intl;
                    var26 = var27.string;
                    var22 = var29[var22];
                    var22 = var28.bind(var4)(var22);
                    var22 = var22.t;
                    var22 = var22.gESDiU;
                    var22 = var26.bind(var27)(var22);
                    var0.attachmentTagText = var22;
                    var22 = 'clip';
                    var0.attachmentTagIconType = var22;
                    var22 = _closure2_slot9;
                    var26 = var22.clipTagBackgroundColor;
                    var0.attachmentTagBackgroundColor = var26;
                    var22 = var22.clipTagTextColor;
                    var0.attachmentTagTextColor = var22;
                    var1 = var0;
                case 682:
                    var0 = {};
                    var22 = var25;
                    if (!(var11 != var12)) {
                        _fun55963_ip = 726;
                        continue _fun55963
                    }
                case 691:
                    var26 = var12.localUri;
                    var22 = var25;
                    if (!(var11 != var26)) {
                        _fun55963_ip = 726;
                        continue _fun55963
                    }
                case 704:
                    var22 = var25;
                    if (!var23) {
                        _fun55963_ip = 726;
                        continue _fun55963
                    }
                case 710:
                    var23 = _closure2_slot1;
                    var22 = var25;
                    if (!var23) {
                        _fun55963_ip = 726;
                        continue _fun55963
                    }
                case 720:
                    var22 = var12.localUri;
                case 726:
                    var0.url = var22;
                    var0.videoUrl = var21;
                    var23 = _closure1_slot1;
                    var21 = _closure1_slot2;
                    var22 = 6;
                    var22 = var21[var22];
                    var22 = var23.bind(var4)(var22);
                    var22 = var22.bind(var4)(var6);
                    var0.filename = var22;
                    var22 = 7;
                    var22 = var21[var22];
                    var23 = var23.bind(var4)(var22);
                    var22 = var23.filesize;
                    var22 = var22.bind(var23)(var24);
                    var0.size = var22;
                    var0.description = var20;
                    var24 = _closure1_slot0;
                    var20 = 5;
                    var22 = var21[var20];
                    var22 = var24.bind(var4)(var22);
                    var25 = var22.intl;
                    var23 = var25.string;
                    var22 = var21[var20];
                    var22 = var24.bind(var4)(var22);
                    var22 = var22.t;
                    var22 = var22.jCV1Tz;
                    var23 = var23.bind(var25)(var22);
                    var22 = var23.toUpperCase;
                    var22 = var22.bind(var23)();
                    var0.alt = var22;
                    var22 = var21[var20];
                    var22 = var24.bind(var4)(var22);
                    var23 = var22.intl;
                    var22 = var23.string;
                    var21 = var21[var20];
                    var21 = var24.bind(var4)(var21);
                    var21 = var21.t;
                    var21 = var21.fSiQ3A;
                    var21 = var22.bind(var23)(var21);
                    var0.altTextHint = var21;
                    var21 = _closure2_slot3;
                    var0.showDescription = var21;
                    var0.durationSecs = var19;
                    var0.waveform = var18;
                    var0.width = var17;
                    var0.height = var14;
                    var17 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var18 = var14[var20];
                    var18 = var17.bind(var4)(var18);
                    var19 = var18.intl;
                    var18 = var19.string;
                    var14 = var14[var20];
                    var14 = var17.bind(var4)(var14);
                    var17 = var14.t;
                    if (var15) {
                        _fun55963_ip = 1001;
                        continue _fun55963
                    }
                case 988:
                    var14 = var17.IPzNKE;
                    var14 = var18.bind(var19)(var14);
                    _fun55963_ip = 1012;
                    continue _fun55963;
                case 1001:
                    var17 = var17["BEWw/7"];
                    var14 = var18.bind(var19)(var17);
                case 1012:
                    var0.hint = var14;
                    var17 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var18 = var14[var20];
                    var18 = var17.bind(var4)(var18);
                    var19 = var18.intl;
                    var18 = var19.string;
                    var14 = var14[var20];
                    var14 = var17.bind(var4)(var14);
                    var17 = var14.t;
                    if (var15) {
                        _fun55963_ip = 1074;
                        continue _fun55963
                    }
                case 1061:
                    var14 = var17.fKyfca;
                    var14 = var18.bind(var19)(var14);
                    _fun55963_ip = 1085;
                    continue _fun55963;
                case 1074:
                    var17 = var17["/SCpvi"];
                    var14 = var18.bind(var19)(var17);
                case 1085:
                    var0.role = var14;
                    var14 = _closure1_slot3;
                    if (var16) {
                        _fun55963_ip = 1127;
                        continue _fun55963
                    }
                case 1097:
                    if (var15) {
                        _fun55963_ip = 1119;
                        continue _fun55963
                    }
                case 1100:
                    if (var13) {
                        _fun55963_ip = 1111;
                        continue _fun55963
                    }
                case 1103:
                    var13 = var14.OTHER;
                    _fun55963_ip = 1117;
                    continue _fun55963;
                case 1111:
                    var13 = var14.AUDIO;
                case 1117:
                    _fun55963_ip = 1125;
                    continue _fun55963;
                case 1119:
                    var13 = var14.VIDEO;
                case 1125:
                    _fun55963_ip = 1133;
                    continue _fun55963;
                case 1127:
                    var13 = var14.IMAGE;
                case 1133:
                    var0.attachmentType = var13;
                    var0.id = var10;
                    var10 = _closure2_slot4;
                    var10 = !var10;
                    var0.isAnimated = var10;
                    var13 = var11 == var12;
                    var10 = undefined;
                    if (var13) {
                        _fun55963_ip = 1169;
                        continue _fun55963
                    }
                case 1163:
                    var10 = var12.uploaderId;
                case 1169:
                    var0.uploaderId = var10;
                    var13 = var11 == var12;
                    var10 = undefined;
                    if (var13) {
                        _fun55963_ip = 1189;
                        continue _fun55963
                    }
                case 1183:
                    var10 = var12.uploaderItemId;
                case 1189:
                    var0.uploaderItemId = var10;
                    var10 = _closure2_slot6;
                    var11 = var11 != var10;
                    var10 = undefined;
                    if (!var11) {
                        _fun55963_ip = 1211;
                        continue _fun55963
                    }
                case 1207:
                    var10 = _closure2_slot6;
                case 1211:
                    var0.backgroundColor = var10;
                    var0.placeholder = var9;
                    var0.placeholderVersion = var8;
                    var8 = 1000;
                    var0.mediaViewerBufferForPlaybackMs = var8;
                    var0.mediaViewerBufferForPlaybackAfterRebufferMs = var8;
                    var8 = 20000;
                    var0.mediaViewerMinBufferMs = var8;
                    var0.mediaViewerMaxBufferMs = var8;
                    var8 = false;
                    var0.mediaViewerEnableDecoderFallback = var8;
                    var8 = true;
                    var0.mediaViewerEnableAsyncBufferQueueing = var8;
                    var0.srcIsAnimated = var7;
                    var0.inlinePlaybackDisabled = var3;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 8;
                    var2 = var7[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.getAttachmentObscurityProps;
                    var2 = {};
                    var2.attachment = var6;
                    var6 = _closure2_slot5;
                    var2.shouldObscureSpoiler = var6;
                    var6 = _closure2_slot7;
                    var2.enabledContentHarmTypeFlags = var6;
                    var5 = _closure2_slot8;
                    var2.shouldAgeVerify = var5;
                    var33 = var3.bind(var4)(var2);
                    var34 = var0;
                    var2 = copyDataProperties(var34, var33);
                    var34 = var0;
                    var33 = var1;
                    var1 = copyDataProperties(var34, var33);
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6475, 660, 1384, 3933, 6743, 1234, 6757, 3963, 6755, 2]);