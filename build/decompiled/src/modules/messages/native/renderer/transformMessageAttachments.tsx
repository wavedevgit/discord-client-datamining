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
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/transformMessageAttachments.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
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
            _fun56284: for (var _fun56284_ip = 0;;) switch (_fun56284_ip) {
                case 0:
                    var2 = arg0;
                    var1 = var2.flags;
                    var0 = null;
                    var0 = var0 == var1;
                    if (var0) {
                        _fun56284_ip = 72;
                        continue _fun56284
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
            _fun56285: for (var _fun56285_ip = 0;;) switch (_fun56285_ip) {
                case 0:
                    var6 = arg0;
                    var7 = arg1;
                    var29 = var6.proxy_url;
                    var30 = var6.url;
                    var5 = var6.filename;
                    var25 = var6.size;
                    var18 = var6.width;
                    var23 = var6.height;
                    var21 = var6.description;
                    var20 = var6.duration_secs;
                    var19 = var6.waveform;
                    var11 = var6.id;
                    var10 = var6.placeholder;
                    var9 = var6.placeholder_version;
                    var0 = var6.flags;
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 3;
                    var12 = var8[var1];
                    var4 = undefined;
                    var13 = var3.bind(var4)(var12);
                    var12 = var13.isImageFile;
                    var17 = var12.bind(var13)(var5);
                    var12 = var8[var1];
                    var13 = var3.bind(var4)(var12);
                    var12 = var13.isAudioFile;
                    var14 = var12.bind(var13)(var5);
                    var12 = var8[var1];
                    var13 = var3.bind(var4)(var12);
                    var12 = var13.isVideoFile;
                    var16 = var12.bind(var13)(var5);
                    var1 = var8[var1];
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.isWebPlayerVideoFile;
                    var3 = var1.bind(var3)(var5);
                    var24 = var17;
                    if (var24) {
                        _fun56285_ip = 182;
                        continue _fun56285
                    }
                case 179:
                    var24 = var16;
                case 182:
                    var1 = _closure2_slot0;
                    var12 = null;
                    var1 = var12 != var1;
                    if (!var1) {
                        _fun56285_ip = 211;
                        continue _fun56285
                    }
                case 198:
                    var8 = _closure2_slot0;
                    var8 = var8.length;
                    var1 = var7 < var8;
                case 211:
                    var13 = undefined;
                    if (!var1) {
                        _fun56285_ip = 224;
                        continue _fun56285
                    }
                case 216:
                    var1 = _closure2_slot0;
                    var13 = var1[var7];
                case 224:
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var28 = 2;
                    var1 = var1[var28];
                    var15 = var7.bind(var4)(var1);
                    var8 = var15.hasFlag;
                    var1 = var12 != var0;
                    var27 = 0;
                    var7 = 0;
                    if (!var1) {
                        _fun56285_ip = 264;
                        continue _fun56285
                    }
                case 261:
                    var7 = var0;
                case 264:
                    var1 = _closure1_slot4;
                    var1 = var1.IS_ANIMATED;
                    var7 = var8.bind(var15)(var7, var1);
                    if (!var17) {
                        _fun56285_ip = 291;
                        continue _fun56285
                    }
                case 283:
                    if (!(var12 != var18)) {
                        _fun56285_ip = 291;
                        continue _fun56285
                    }
                case 287:
                    if (!(var12 == var23)) {
                        _fun56285_ip = 365;
                        continue _fun56285
                    }
                case 291:
                    var1 = var16;
                    if (!var1) {
                        _fun56285_ip = 311;
                        continue _fun56285
                    }
                case 297:
                    var8 = _closure2_slot1;
                    if (var8) {
                        _fun56285_ip = 308;
                        continue _fun56285
                    }
                case 304:
                    var8 = var12 != var13;
                case 308:
                    var1 = var8;
                case 311:
                    var22 = undefined;
                    var26 = var30;
                    if (!var1) {
                        _fun56285_ip = 416;
                        continue _fun56285
                    }
                case 319:
                    var1 = var30;
                    if (!(var12 != var29)) {
                        _fun56285_ip = 336;
                        continue _fun56285
                    }
                case 326:
                    var8 = '?format=webp';
                    var1 = var29 + var8;
                case 336:
                    var8 = var30;
                    if (!(var12 != var29)) {
                        _fun56285_ip = 357;
                        continue _fun56285
                    }
                case 343:
                    var15 = '';
                    var8 = var30;
                    if (!(var15 !== var29)) {
                        _fun56285_ip = 357;
                        continue _fun56285
                    }
                case 354:
                    var8 = var29;
                case 357:
                    var22 = var8;
                    var26 = var1;
                    _fun56285_ip = 416;
                    continue _fun56285;
                case 365:
                    var8 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var1 = 4;
                    var1 = var15[var1];
                    var15 = var8.bind(var4)(var1);
                    var8 = var15.getImageSrc;
                    var1 = _closure2_slot2;
                    var31 = !var1;
                    var35 = var15;
                    var34 = var29;
                    var33 = var18;
                    var32 = var23;
                    var26 = var35[var8](var34, var33, var32, var31, var30);
                    var22 = undefined;
                case 416:
                    var8 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var1 = 5;
                    var1 = var15[var1];
                    var8 = var8.bind(var4)(var1);
                    var1 = var8.isAndroid;
                    var15 = var1.bind(var8)();
                    var1 = 'default';
                    var8 = var1;
                    if (!var15) {
                        _fun56285_ip = 517;
                        continue _fun56285
                    }
                case 456:
                    var8 = var1;
                    if (!var16) {
                        _fun56285_ip = 517;
                        continue _fun56285
                    }
                case 462:
                    var15 = _closure1_slot0;
                    var29 = _closure1_slot2;
                    var1 = 6;
                    var1 = var29[var1];
                    var1 = var15.bind(var4)(var1);
                    var29 = var1.AndroidExoPlayerHttpEngineExperiment;
                    var15 = var29.getConfig;
                    var1 = {};
                    var30 = 'transformMessageAttachments';
                    var1.location = var30;
                    var1 = var15.bind(var29)(var1);
                    var8 = var1.httpEngine;
                case 517:
                    var15 = var18;
                    if (!(var12 != var13)) {
                        _fun56285_ip = 541;
                        continue _fun56285
                    }
                case 524:
                    var1 = var13.width;
                    var15 = var18;
                    if (!(var1 > var27)) {
                        _fun56285_ip = 541;
                        continue _fun56285
                    }
                case 536:
                    var15 = var13.width;
                case 541:
                    var1 = var23;
                    if (!(var12 != var13)) {
                        _fun56285_ip = 565;
                        continue _fun56285
                    }
                case 548:
                    var18 = var13.height;
                    var1 = var23;
                    if (!(var18 > var27)) {
                        _fun56285_ip = 565;
                        continue _fun56285
                    }
                case 560:
                    var1 = var13.height;
                case 565:
                    var23 = _closure2_slot1;
                    var18 = 0;
                    if (!var23) {
                        _fun56285_ip = 591;
                        continue _fun56285
                    }
                case 574:
                    var18 = 0;
                    if (!var24) {
                        _fun56285_ip = 591;
                        continue _fun56285
                    }
                case 579:
                    var23 = var12 != var15;
                    var18 = 0;
                    if (!var23) {
                        _fun56285_ip = 591;
                        continue _fun56285
                    }
                case 588:
                    var18 = var15;
                case 591:
                    var23 = _closure2_slot1;
                    var15 = 0;
                    if (!var23) {
                        _fun56285_ip = 617;
                        continue _fun56285
                    }
                case 600:
                    var15 = 0;
                    if (!var24) {
                        _fun56285_ip = 617;
                        continue _fun56285
                    }
                case 605:
                    var23 = var12 != var1;
                    var15 = 0;
                    if (!var23) {
                        _fun56285_ip = 617;
                        continue _fun56285
                    }
                case 614:
                    var15 = var1;
                case 617:
                    var23 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var28];
                    var23 = var23.bind(var4)(var1);
                    var1 = var23.hasFlag;
                    var28 = var12 != var0;
                    var27 = 0;
                    if (!var28) {
                        _fun56285_ip = 652;
                        continue _fun56285
                    }
                case 649:
                    var27 = var0;
                case 652:
                    var0 = _closure1_slot4;
                    var0 = var0.IS_CLIP;
                    var0 = var1.bind(var23)(var27, var0);
                    var1 = undefined;
                    if (!var0) {
                        _fun56285_ip = 783;
                        continue _fun56285
                    }
                case 673:
                    var0 = {};
                    var29 = _closure1_slot0;
                    var30 = _closure1_slot2;
                    var23 = 7;
                    var27 = var30[var23];
                    var27 = var29.bind(var4)(var27);
                    var28 = var27.intl;
                    var27 = var28.string;
                    var23 = var30[var23];
                    var23 = var29.bind(var4)(var23);
                    var23 = var23.t;
                    var23 = var23.gESDiU;
                    var23 = var27.bind(var28)(var23);
                    var0.attachmentTagText = var23;
                    var23 = 'clip';
                    var0.attachmentTagIconType = var23;
                    var23 = _closure2_slot9;
                    var27 = var23.clipTagBackgroundColor;
                    var0.attachmentTagBackgroundColor = var27;
                    var23 = var23.clipTagTextColor;
                    var0.attachmentTagTextColor = var23;
                    var1 = var0;
                case 783:
                    var0 = {};
                    var23 = var26;
                    if (!(var12 != var13)) {
                        _fun56285_ip = 827;
                        continue _fun56285
                    }
                case 792:
                    var27 = var13.localUri;
                    var23 = var26;
                    if (!(var12 != var27)) {
                        _fun56285_ip = 827;
                        continue _fun56285
                    }
                case 805:
                    var23 = var26;
                    if (!var24) {
                        _fun56285_ip = 827;
                        continue _fun56285
                    }
                case 811:
                    var24 = _closure2_slot1;
                    var23 = var26;
                    if (!var24) {
                        _fun56285_ip = 827;
                        continue _fun56285
                    }
                case 821:
                    var23 = var13.localUri;
                case 827:
                    var0.url = var23;
                    var0.videoUrl = var22;
                    var24 = _closure1_slot1;
                    var22 = _closure1_slot2;
                    var23 = 8;
                    var23 = var22[var23];
                    var23 = var24.bind(var4)(var23);
                    var23 = var23.bind(var4)(var6);
                    var0.filename = var23;
                    var23 = 9;
                    var23 = var22[var23];
                    var24 = var24.bind(var4)(var23);
                    var23 = var24.filesize;
                    var23 = var23.bind(var24)(var25);
                    var0.size = var23;
                    var0.description = var21;
                    var25 = _closure1_slot0;
                    var21 = 7;
                    var23 = var22[var21];
                    var23 = var25.bind(var4)(var23);
                    var26 = var23.intl;
                    var24 = var26.string;
                    var23 = var22[var21];
                    var23 = var25.bind(var4)(var23);
                    var23 = var23.t;
                    var23 = var23.jCV1Tz;
                    var24 = var24.bind(var26)(var23);
                    var23 = var24.toUpperCase;
                    var23 = var23.bind(var24)();
                    var0.alt = var23;
                    var23 = var22[var21];
                    var23 = var25.bind(var4)(var23);
                    var24 = var23.intl;
                    var23 = var24.string;
                    var22 = var22[var21];
                    var22 = var25.bind(var4)(var22);
                    var22 = var22.t;
                    var22 = var22.fSiQ3A;
                    var22 = var23.bind(var24)(var22);
                    var0.altTextHint = var22;
                    var22 = _closure2_slot3;
                    var0.showDescription = var22;
                    var0.durationSecs = var20;
                    var0.waveform = var19;
                    var0.width = var18;
                    var0.height = var15;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var19 = var15[var21];
                    var19 = var18.bind(var4)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var15 = var15[var21];
                    var15 = var18.bind(var4)(var15);
                    var18 = var15.t;
                    if (var16) {
                        _fun56285_ip = 1102;
                        continue _fun56285
                    }
                case 1089:
                    var15 = var18.IPzNKE;
                    var15 = var19.bind(var20)(var15);
                    _fun56285_ip = 1113;
                    continue _fun56285;
                case 1102:
                    var18 = var18["BEWw/7"];
                    var15 = var19.bind(var20)(var18);
                case 1113:
                    var0.hint = var15;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var19 = var15[var21];
                    var19 = var18.bind(var4)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var15 = var15[var21];
                    var15 = var18.bind(var4)(var15);
                    var18 = var15.t;
                    if (var16) {
                        _fun56285_ip = 1175;
                        continue _fun56285
                    }
                case 1162:
                    var15 = var18.fKyfca;
                    var15 = var19.bind(var20)(var15);
                    _fun56285_ip = 1186;
                    continue _fun56285;
                case 1175:
                    var18 = var18["/SCpvi"];
                    var15 = var19.bind(var20)(var18);
                case 1186:
                    var0.role = var15;
                    var15 = _closure1_slot3;
                    if (var17) {
                        _fun56285_ip = 1228;
                        continue _fun56285
                    }
                case 1198:
                    if (var16) {
                        _fun56285_ip = 1220;
                        continue _fun56285
                    }
                case 1201:
                    if (var14) {
                        _fun56285_ip = 1212;
                        continue _fun56285
                    }
                case 1204:
                    var14 = var15.OTHER;
                    _fun56285_ip = 1218;
                    continue _fun56285;
                case 1212:
                    var14 = var15.AUDIO;
                case 1218:
                    _fun56285_ip = 1226;
                    continue _fun56285;
                case 1220:
                    var14 = var15.VIDEO;
                case 1226:
                    _fun56285_ip = 1234;
                    continue _fun56285;
                case 1228:
                    var14 = var15.IMAGE;
                case 1234:
                    var0.attachmentType = var14;
                    var0.id = var11;
                    var11 = _closure2_slot4;
                    var11 = !var11;
                    var0.isAnimated = var11;
                    var14 = var12 == var13;
                    var11 = undefined;
                    if (var14) {
                        _fun56285_ip = 1270;
                        continue _fun56285
                    }
                case 1264:
                    var11 = var13.uploaderId;
                case 1270:
                    var0.uploaderId = var11;
                    var14 = var12 == var13;
                    var11 = undefined;
                    if (var14) {
                        _fun56285_ip = 1290;
                        continue _fun56285
                    }
                case 1284:
                    var11 = var13.uploaderItemId;
                case 1290:
                    var0.uploaderItemId = var11;
                    var11 = _closure2_slot6;
                    var12 = var12 != var11;
                    var11 = undefined;
                    if (!var12) {
                        _fun56285_ip = 1312;
                        continue _fun56285
                    }
                case 1308:
                    var11 = _closure2_slot6;
                case 1312:
                    var0.backgroundColor = var11;
                    var0.placeholder = var10;
                    var0.placeholderVersion = var9;
                    var9 = 1000;
                    var0.mediaViewerBufferForPlaybackMs = var9;
                    var0.mediaViewerBufferForPlaybackAfterRebufferMs = var9;
                    var9 = 20000;
                    var0.mediaViewerMinBufferMs = var9;
                    var0.mediaViewerMaxBufferMs = var9;
                    var9 = false;
                    var0.mediaViewerEnableDecoderFallback = var9;
                    var9 = true;
                    var0.mediaViewerEnableAsyncBufferQueueing = var9;
                    var0.mediaViewerHttpEngine = var8;
                    var0.srcIsAnimated = var7;
                    var0.inlinePlaybackDisabled = var3;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 10;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [6541, 660, 1384, 3980, 6814, 478, 6828, 1234, 6829, 4010, 6826, 2]);