// modules/errors/av_errors/AVErrorAnalytics.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun117612: for (var _fun117612_ip = 0;;) switch (_fun117612_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.getConnectionStats;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var1 = null;
                var3 = var1 == var2;
                var0 = null;
                if (var3) {
                    _fun117612_ip = 84;
                    continue _fun117612
                }
            case 32:
                var2 = var2.stats;
                var2 = var2.rtp;
                var4 = var2.outbound;
                var3 = var4.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = 'video';
                    var0 = var0 === var1;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun117612_ip = 81;
                    continue _fun117612
                }
            case 78:
                var1 = var2;
            case 81:
                var0 = var1;
            case 84:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun117614: for (var _fun117614_ip = 0;;) switch (_fun117614_ip) {
            case 0:
                var2 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun117614_ip = 103;
                    continue _fun117614
                }
            case 9:
                var4 = _closure1_slot4;
                var3 = var4.getConnectionStats;
                var1 = arg0;
                var1 = var3.bind(var4)(var1);
                if (!(var0 != var1)) {
                    _fun117614_ip = 101;
                    continue _fun117614
                }
            case 34:
                var1 = var1.stats;
                var1 = var1.rtp;
                var1 = var1.inbound;
                var4 = var1[var2];
                var2 = var0 == var4;
                var1 = null;
                if (var2) {
                    _fun117614_ip = 99;
                    continue _fun117614
                }
            case 65:
                var3 = var4.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = 'video';
                    var0 = var0 === var1;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var4 = var0 != var3;
                var2 = null;
                if (!var4) {
                    _fun117614_ip = 96;
                    continue _fun117614
                }
            case 93:
                var2 = var3;
            case 96:
                var1 = var2;
            case 99:
                return var1;
            case 101:
                return var0;
            case 103:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun117616: for (var _fun117616_ip = 0;;) switch (_fun117616_ip) {
            case 0:
                var3 = arg1;
                var0 = arg0;
                if (var0) {
                    _fun117616_ip = 29;
                    continue _fun117616
                }
            case 12:
                var4 = _closure1_slot17;
                var2 = undefined;
                var0 = arg2;
                var0 = var4.bind(var2)(var3, var0);
                _fun117616_ip = 40;
                continue _fun117616;
            case 29:
                var2 = _closure1_slot16;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 40:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun117617: for (var _fun117617_ip = 0;;) switch (_fun117617_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.getConnectionStats;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun117617_ip = 50;
                    continue _fun117617
                }
            case 32:
                var2 = var2.stats;
                var2 = var2.transport;
                var1 = var2.outboundBitrateEstimate;
            case 50:
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun117617_ip = 62;
                    continue _fun117617
                }
            case 59:
                var0 = var1;
            case 62:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun117618: for (var _fun117618_ip = 0;;) switch (_fun117618_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.getConnectionStats;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun117618_ip = 50;
                    continue _fun117618
                }
            case 32:
                var2 = var2.stats;
                var2 = var2.transport;
                var1 = var2.inboundBitrateEstimate;
            case 50:
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun117618_ip = 62;
                    continue _fun117618
                }
            case 59:
                var0 = var1;
            case 62:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun117619: for (var _fun117619_ip = 0;;) switch (_fun117619_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot4;
                var0 = var1.getConnectionStats;
                var7 = var0.bind(var1)(var2);
                var1 = _closure1_slot4;
                var0 = var1.getLastConnectionStats;
                var6 = var0.bind(var1)(var2);
                var0 = null;
                if (!(var0 != var7)) {
                    _fun117619_ip = 298;
                    continue _fun117619
                }
            case 47:
                if (!(var0 != var6)) {
                    _fun117619_ip = 298;
                    continue _fun117619
                }
            case 54:
                var4 = {};
                var5 = ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames'];
                var1 = var5.length;
                var3 = 0;
                var1 = var3 < var1;
                var11 = undefined;
                var2 = 0;
                if (!var1) {
                    _fun117619_ip = 182;
                    continue _fun117619
                }
            case 84:
                var8 = var5[var2];
                var1 = var6.stats;
                var9 = var1.screenshare;
                var10 = var0 == var9;
                var1 = undefined;
                if (var10) {
                    _fun117619_ip = 113;
                    continue _fun117619
                }
            case 109:
                var1 = var9[var8];
            case 113:
                var10 = var0 != var1;
                var9 = 0;
                if (!var10) {
                    _fun117619_ip = 125;
                    continue _fun117619
                }
            case 122:
                var9 = var1;
            case 125:
                var1 = var7.stats;
                var1 = var1.screenshare;
                var13 = var0 == var1;
                var10 = undefined;
                if (var13) {
                    _fun117619_ip = 150;
                    continue _fun117619
                }
            case 146:
                var10 = var1[var8];
            case 150:
                var13 = var0 != var10;
                var1 = 0;
                if (!var13) {
                    _fun117619_ip = 162;
                    continue _fun117619
                }
            case 159:
                var1 = var10;
            case 162:
                var1 = var1 - var9;
                var4[var8] = var1;
                var2 = var2 + 1;
                var1 = var5.length;
                if (var2 < var1) {
                    _fun117619_ip = 84;
                    continue _fun117619
                }
            case 182:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.entries;
                var10 = var1.bind(var2)(var4);
                var1 = var10.length;
                var4 = var3 < var1;
                var7 = -1;
                var9 = 2;
                var8 = 1;
                var6 = null;
                var5 = 0;
                var1 = var7;
                var2 = null;
                if (!var4) {
                    _fun117619_ip = 284;
                    continue _fun117619
                }
            case 234:
                var13 = var10[var5];
                var4 = _closure1_slot3;
                var13 = var4.bind(var11)(var13, var9);
                var4 = var13[var3];
                var13 = var13[var8];
                if (!(var13 > var7)) {
                    _fun117619_ip = 266;
                    continue _fun117619
                }
            case 260:
                var7 = var13;
                var6 = var4;
            case 266:
                var5 = var5 + 1;
                var4 = var10.length;
                var1 = var7;
                var2 = var6;
                if (var5 < var4) {
                    _fun117619_ip = 234;
                    continue _fun117619
                }
            case 284:
                var3 = var1 > var3;
                var1 = null;
                if (!var3) {
                    _fun117619_ip = 296;
                    continue _fun117619
                }
            case 293:
                var1 = var2;
            case 296:
                return var1;
            case 298:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getSystemAnalyticsInfo;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MediaEngineContextTypes;
    var _closure1_slot14 = var6;
    var3 = var3.SIMULCAST_HQ_QUALITY;
    var _closure1_slot15 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/av_errors/AVErrorAnalytics.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun117620: for (var _fun117620_ip = 0;;) switch (_fun117620_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var6;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 12;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.getErrorInfo;
                var4 = var3.bind(var4)(var6);
                var _closure2_slot2 = var4;
                var6 = _closure1_slot10;
                var3 = var6.getVoiceChannelId;
                var3 = var3.bind(var6)();
                var6 = 'channelId';
                var6 = var6 in var5;
                var7 = undefined;
                if (!var6) {
                    _fun117620_ip = 84;
                    continue _fun117620
                }
            case 79:
                var7 = var5.channelId;
            case 84:
                var6 = null;
                if (!(var6 != var7)) {
                    _fun117620_ip = 93;
                    continue _fun117620
                }
            case 90:
                var3 = var7;
            case 93:
                var7 = var6 != var3;
                var8 = null;
                if (!var7) {
                    _fun117620_ip = 105;
                    continue _fun117620
                }
            case 102:
                var8 = var3;
            case 105:
                var _closure2_slot3 = var8;
                var7 = _closure1_slot6;
                var3 = var7.getChannel;
                var3 = var3.bind(var7)(var8);
                var _closure2_slot4 = var3;
                var3 = 'streamKey';
                var7 = var3 in var5;
                var3 = undefined;
                if (!var7) {
                    _fun117620_ip = 146;
                    continue _fun117620
                }
            case 140:
                var3 = var5.streamKey;
            case 146:
                var7 = 'mediaContext';
                var8 = var7 in var5;
                var7 = undefined;
                if (!var8) {
                    _fun117620_ip = 165;
                    continue _fun117620
                }
            case 159:
                var7 = var5.mediaContext;
            case 165:
                var _closure2_slot5 = var7;
                var8 = 'underlyingError';
                var9 = var8 in var5;
                var8 = undefined;
                if (!var9) {
                    _fun117620_ip = 188;
                    continue _fun117620
                }
            case 182:
                var8 = var5.underlyingError;
            case 188:
                var _closure2_slot6 = var8;
                var8 = 'errorMessage';
                var9 = var8 in var5;
                var8 = undefined;
                if (!var9) {
                    _fun117620_ip = 211;
                    continue _fun117620
                }
            case 205:
                var8 = var5.errorMessage;
            case 211:
                var _closure2_slot7 = var8;
                var8 = 'mediaSessionId';
                var9 = var8 in var5;
                var8 = undefined;
                if (!var9) {
                    _fun117620_ip = 234;
                    continue _fun117620
                }
            case 228:
                var8 = var5.mediaSessionId;
            case 234:
                var _closure2_slot8 = var8;
                var8 = 'rtcConnectionId';
                var9 = var8 in var5;
                var8 = undefined;
                if (!var9) {
                    _fun117620_ip = 257;
                    continue _fun117620
                }
            case 251:
                var8 = var5.rtcConnectionId;
            case 257:
                var _closure2_slot9 = var8;
                var8 = 'videoCodec';
                var9 = var8 in var5;
                var8 = undefined;
                if (!var9) {
                    _fun117620_ip = 280;
                    continue _fun117620
                }
            case 274:
                var8 = var5.videoCodec;
            case 280:
                var _closure2_slot10 = var8;
                var8 = 'videoEncoder';
                var9 = var8 in var5;
                var8 = undefined;
                if (!var9) {
                    _fun117620_ip = 303;
                    continue _fun117620
                }
            case 297:
                var8 = var5.videoEncoder;
            case 303:
                var _closure2_slot11 = var8;
                var8 = 'videoDecoder';
                var9 = var8 in var5;
                var8 = undefined;
                if (!var9) {
                    _fun117620_ip = 330;
                    continue _fun117620
                }
            case 322:
                var8 = var5.videoDecoder;
            case 330:
                var _closure2_slot12 = var8;
                var8 = 'audioCaptureSampleRateMismatchPercent';
                var9 = var8 in var5;
                var8 = undefined;
                if (!var9) {
                    _fun117620_ip = 353;
                    continue _fun117620
                }
            case 347:
                var8 = var5.audioCaptureSampleRateMismatchPercent;
            case 353:
                var _closure2_slot13 = var8;
                var8 = 'audioInputDeviceName';
                var9 = var8 in var5;
                var8 = undefined;
                if (!var9) {
                    _fun117620_ip = 376;
                    continue _fun117620
                }
            case 370:
                var8 = var5.audioInputDeviceName;
            case 376:
                var _closure2_slot14 = var8;
                var8 = 'audioOutputDeviceName';
                var9 = var8 in var5;
                var8 = undefined;
                if (!var9) {
                    _fun117620_ip = 399;
                    continue _fun117620
                }
            case 393:
                var8 = var5.audioOutputDeviceName;
            case 399:
                var _closure2_slot15 = var8;
                var8 = 'videoDeviceName';
                var9 = var8 in var5;
                var8 = undefined;
                if (!var9) {
                    _fun117620_ip = 422;
                    continue _fun117620
                }
            case 416:
                var8 = var5.videoDeviceName;
            case 422:
                var _closure2_slot16 = var8;
                var8 = 'userId';
                var8 = var8 in var5;
                var10 = undefined;
                if (!var8) {
                    _fun117620_ip = 444;
                    continue _fun117620
                }
            case 439:
                var10 = var5.userId;
            case 444:
                var8 = var6 != var3;
                var5 = null;
                if (!var8) {
                    _fun117620_ip = 484;
                    continue _fun117620
                }
            case 453:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 13;
                var8 = var11[var8];
                var9 = var9.bind(var0)(var8);
                var8 = var9.decodeStreamKey;
                var5 = var8.bind(var9)(var3);
            case 484:
                var _closure2_slot17 = var5;
                var8 = var6 != var3;
                var12 = null;
                if (!var8) {
                    _fun117620_ip = 512;
                    continue _fun117620
                }
            case 497:
                var9 = _closure1_slot11;
                var8 = var9.getRTCConnection;
                var12 = var8.bind(var9)(var3);
            case 512:
                var _closure2_slot18 = var12;
                var8 = var12;
                if (!(var6 == var3)) {
                    _fun117620_ip = 537;
                    continue _fun117620
                }
            case 523:
                var11 = _closure1_slot8;
                var9 = var11.getRTCConnection;
                var8 = var9.bind(var11)();
            case 537:
                var _closure2_slot19 = var8;
                var9 = var6 != var3;
                var13 = null;
                if (!var9) {
                    _fun117620_ip = 583;
                    continue _fun117620
                }
            case 550:
                var11 = var6 == var12;
                var9 = undefined;
                if (var11) {
                    _fun117620_ip = 580;
                    continue _fun117620
                }
            case 559:
                var11 = var12.analyticsContext;
                var14 = var6 == var11;
                var9 = undefined;
                if (var14) {
                    _fun117620_ip = 580;
                    continue _fun117620
                }
            case 574:
                var9 = var11.streamApplication;
            case 580:
                var13 = var9;
            case 583:
                var11 = _closure1_slot5;
                var9 = var11.getState;
                var9 = var9.bind(var11)();
                var11 = var9.resolution;
                var _closure2_slot20 = var11;
                var9 = var9.fps;
                var _closure2_slot21 = var9;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 14;
                var9 = var14[var9];
                var11 = var11.bind(var0)(var9);
                var9 = var11.getRunningGameAnalytics;
                var9 = var9.bind(var11)(var13);
                var11 = var9.gameName;
                var _closure2_slot22 = var11;
                var11 = var9.gameId;
                var _closure2_slot23 = var11;
                var11 = var9.exe;
                var _closure2_slot24 = var11;
                var9 = var9.distributor;
                var _closure2_slot25 = var9;
                var4 = var4.isErrorOutbound;
                var _closure2_slot26 = var4;
                if (!(var6 == var7)) {
                    _fun117620_ip = 712;
                    continue _fun117620
                }
            case 702:
                var9 = _closure1_slot14;
                var7 = var9.DEFAULT;
            case 712:
                var _closure2_slot27 = var7;
                if (!(var6 != var5)) {
                    _fun117620_ip = 726;
                    continue _fun117620
                }
            case 720:
                var10 = var5.ownerId;
            case 726:
                var _closure2_slot28 = var10;
                if (!(var6 == var12)) {
                    _fun117620_ip = 749;
                    continue _fun117620
                }
            case 734:
                var7 = 'receiver';
                if (!var4) {
                    _fun117620_ip = 747;
                    continue _fun117620
                }
            case 743:
                var7 = 'sender';
            case 747:
                _fun117620_ip = 771;
                continue _fun117620;
            case 749:
                var11 = var6 == var12;
                var9 = undefined;
                if (var11) {
                    _fun117620_ip = 768;
                    continue _fun117620
                }
            case 758:
                var11 = var12.getVoiceParticipantType;
                var9 = var11.bind(var12)();
            case 768:
                var7 = var9;
            case 771:
                var _closure2_slot29 = var7;
                var7 = var6 == var8;
                var9 = undefined;
                if (var7) {
                    _fun117620_ip = 794;
                    continue _fun117620
                }
            case 784:
                var7 = var8.getMediaEngineConnectionId;
                var9 = var7.bind(var8)();
            case 794:
                var11 = var6 != var9;
                var7 = null;
                if (!var11) {
                    _fun117620_ip = 806;
                    continue _fun117620
                }
            case 803:
                var7 = var9;
            case 806:
                var _closure2_slot30 = var7;
                if (!(var6 != var3)) {
                    _fun117620_ip = 818;
                    continue _fun117620
                }
            case 814:
                if (!(var6 == var5)) {
                    _fun117620_ip = 938;
                    continue _fun117620
                }
            case 818:
                if (var4) {
                    _fun117620_ip = 855;
                    continue _fun117620
                }
            case 821:
                var7 = var6 != var10;
                var3 = null;
                if (!var7) {
                    _fun117620_ip = 853;
                    continue _fun117620
                }
            case 830:
                var9 = var6 == var8;
                var7 = undefined;
                if (var9) {
                    _fun117620_ip = 850;
                    continue _fun117620
                }
            case 839:
                var9 = var8.getInboundStats;
                var7 = var9.bind(var8)(var10);
            case 850:
                var3 = var7;
            case 853:
                _fun117620_ip = 936;
                continue _fun117620;
            case 855:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 15;
                var7 = var10[var7];
                var11 = var9.bind(var0)(var7);
                var10 = var11.maxBy;
                var7 = var6 == var8;
                var9 = undefined;
                if (var7) {
                    _fun117620_ip = 900;
                    continue _fun117620
                }
            case 890:
                var7 = var8.getOutboundStats;
                var9 = var7.bind(var8)();
            case 900:
                if (!(var6 == var9)) {
                    _fun117620_ip = 908;
                    continue _fun117620
                }
            case 904:
                var9 = new Array(0);
            case 908:
                var7 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.num_frames;
                    return var0;
                };
                var9 = var10.bind(var11)(var9, var7);
                var10 = var6 != var9;
                var7 = null;
                if (!var10) {
                    _fun117620_ip = 933;
                    continue _fun117620
                }
            case 930:
                var7 = var9;
            case 933:
                var3 = var7;
            case 936:
                _fun117620_ip = 1016;
                continue _fun117620;
            case 938:
                var7 = var6 == var8;
                if (var4) {
                    _fun117620_ip = 969;
                    continue _fun117620
                }
            case 945:
                var4 = undefined;
                if (var7) {
                    _fun117620_ip = 967;
                    continue _fun117620
                }
            case 950:
                var9 = var8.getInboundStats;
                var5 = var5.ownerId;
                var4 = var9.bind(var8)(var5);
            case 967:
                _fun117620_ip = 1013;
                continue _fun117620;
            case 969:
                var5 = undefined;
                if (var7) {
                    _fun117620_ip = 1010;
                    continue _fun117620
                }
            case 974:
                var7 = var8.getOutboundStats;
                var8 = var7.bind(var8)();
                var6 = var6 == var8;
                var5 = undefined;
                if (var6) {
                    _fun117620_ip = 1010;
                    continue _fun117620
                }
            case 993:
                var7 = var8.find;
                var6 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.quality;
                    var0 = _closure1_slot15;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var7.bind(var8)(var6);
            case 1010:
                var4 = var5;
            case 1013:
                var3 = var4;
            case 1016:
                var _closure2_slot1 = var3;
                var2 = _closure1_slot12;
                var3 = var2.bind(var0)();
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    _fun117623: for (var _fun117623_ip = 0;;) switch (_fun117623_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = {};
                            var1 = _closure2_slot0;
                            var0 = var1.valueOf;
                            var0 = var0.bind(var1)();
                            var4.error_name = var0;
                            var0 = _closure2_slot2;
                            var1 = var0.errorCode;
                            var4.error_code = var1;
                            var1 = var0.severity;
                            var4.error_severity = var1;
                            var0 = var0.category;
                            var4.error_category = var0;
                            var0 = _closure2_slot6;
                            var2 = null;
                            var1 = var2 != var0;
                            var0 = null;
                            if (!var1) {
                                _fun117623_ip = 88;
                                continue _fun117623
                            }
                        case 84:
                            var0 = _closure2_slot6;
                        case 88:
                            var4.underlying_error = var0;
                            var0 = _closure2_slot7;
                            var1 = var2 != var0;
                            var0 = null;
                            if (!var1) {
                                _fun117623_ip = 112;
                                continue _fun117623
                            }
                        case 108:
                            var0 = _closure2_slot7;
                        case 112:
                            var4.error_message = var0;
                            var0 = _closure2_slot4;
                            var1 = var2 == var0;
                            var0 = undefined;
                            var6 = undefined;
                            if (var1) {
                                _fun117623_ip = 141;
                                continue _fun117623
                            }
                        case 132:
                            var1 = _closure2_slot4;
                            var6 = var1.guild_id;
                        case 141:
                            var7 = var2 != var6;
                            var1 = null;
                            if (!var7) {
                                _fun117623_ip = 153;
                                continue _fun117623
                            }
                        case 150:
                            var1 = var6;
                        case 153:
                            var4.guild_id = var1;
                            var1 = _closure2_slot3;
                            var6 = var2 != var1;
                            var1 = null;
                            if (!var6) {
                                _fun117623_ip = 174;
                                continue _fun117623
                            }
                        case 170:
                            var1 = _closure2_slot3;
                        case 174:
                            var4.channel_id = var1;
                            var1 = _closure2_slot4;
                            var1 = var2 == var1;
                            var6 = undefined;
                            if (var1) {
                                _fun117623_ip = 200;
                                continue _fun117623
                            }
                        case 191:
                            var1 = _closure2_slot4;
                            var6 = var1.type;
                        case 200:
                            var7 = var2 != var6;
                            var1 = null;
                            if (!var7) {
                                _fun117623_ip = 212;
                                continue _fun117623
                            }
                        case 209:
                            var1 = var6;
                        case 212:
                            var4.channel_type = var1;
                            var1 = _closure2_slot9;
                            var6 = var2 != var1;
                            var1 = null;
                            if (!var6) {
                                _fun117623_ip = 234;
                                continue _fun117623
                            }
                        case 230:
                            var1 = _closure2_slot9;
                        case 234:
                            var4.rtc_connection_id = var1;
                            var1 = _closure2_slot8;
                            if (!(var2 == var1)) {
                                _fun117623_ip = 266;
                                continue _fun117623
                            }
                        case 247:
                            var6 = _closure1_slot8;
                            var1 = var6.getMediaSessionId;
                            var6 = var1.bind(var6)();
                            _fun117623_ip = 270;
                            continue _fun117623;
                        case 266:
                            var6 = _closure2_slot8;
                        case 270:
                            var7 = var2 != var6;
                            var1 = null;
                            if (!var7) {
                                _fun117623_ip = 282;
                                continue _fun117623
                            }
                        case 279:
                            var1 = var6;
                        case 282:
                            var4.media_session_id = var1;
                            var1 = _closure2_slot18;
                            var1 = var2 == var1;
                            var6 = undefined;
                            if (var1) {
                                _fun117623_ip = 310;
                                continue _fun117623
                            }
                        case 300:
                            var1 = _closure2_slot18;
                            var6 = var1.parentMediaSessionId;
                        case 310:
                            var7 = var2 != var6;
                            var1 = null;
                            if (!var7) {
                                _fun117623_ip = 322;
                                continue _fun117623
                            }
                        case 319:
                            var1 = var6;
                        case 322:
                            var4.parent_media_session_id = var1;
                            var1 = _closure2_slot5;
                            var6 = var2 != var1;
                            var1 = null;
                            if (!var6) {
                                _fun117623_ip = 344;
                                continue _fun117623
                            }
                        case 340:
                            var1 = _closure2_slot5;
                        case 344:
                            var4.context = var1;
                            var7 = _closure1_slot8;
                            var6 = var7.getRTCConnection;
                            var8 = var6.bind(var7)();
                            var6 = var2 == var8;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 386;
                                continue _fun117623
                            }
                        case 374:
                            var6 = var8.getVoiceVersion;
                            var7 = var6.bind(var8)();
                        case 386:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 398;
                                continue _fun117623
                            }
                        case 395:
                            var6 = var7;
                        case 398:
                            var4.voice_backend_version = var6;
                            var7 = _closure1_slot8;
                            var6 = var7.getRTCConnection;
                            var8 = var6.bind(var7)();
                            var6 = var2 == var8;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 438;
                                continue _fun117623
                            }
                        case 426:
                            var6 = var8.getRtcWorkerVersion;
                            var7 = var6.bind(var8)();
                        case 438:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 450;
                                continue _fun117623
                            }
                        case 447:
                            var6 = var7;
                        case 450:
                            var4.rtc_worker_backend_version = var6;
                            var8 = _closure1_slot9;
                            var7 = var8.getRegion;
                            var9 = _closure1_slot8;
                            var6 = var9.getHostname;
                            var6 = var6.bind(var9)();
                            var7 = var7.bind(var8)(var6);
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 496;
                                continue _fun117623
                            }
                        case 493:
                            var6 = var7;
                        case 496:
                            var4.guild_region = var6;
                            var7 = _closure1_slot8;
                            var6 = var7.getHostname;
                            var7 = var6.bind(var7)();
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 527;
                                continue _fun117623
                            }
                        case 524:
                            var6 = var7;
                        case 527:
                            var4.hostname = var6;
                            var6 = _closure2_slot19;
                            var6 = var2 == var6;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 559;
                                continue _fun117623
                            }
                        case 545:
                            var8 = _closure2_slot19;
                            var6 = var8.getDurationSeconds;
                            var7 = var6.bind(var8)();
                        case 559:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 571;
                                continue _fun117623
                            }
                        case 568:
                            var6 = var7;
                        case 571:
                            var4.duration = var6;
                            var6 = _closure2_slot29;
                            var7 = var2 != var6;
                            var6 = null;
                            if (!var7) {
                                _fun117623_ip = 592;
                                continue _fun117623
                            }
                        case 588:
                            var6 = _closure2_slot29;
                        case 592:
                            var4.participant_type = var6;
                            var6 = _closure2_slot1;
                            var7 = var2 == var6;
                            var8 = undefined;
                            if (var7) {
                                _fun117623_ip = 616;
                                continue _fun117623
                            }
                        case 610:
                            var8 = var6.num_frames;
                        case 616:
                            var9 = var2 != var8;
                            var7 = 0;
                            if (!var9) {
                                _fun117623_ip = 628;
                                continue _fun117623
                            }
                        case 625:
                            var7 = var8;
                        case 628:
                            var4.num_frames = var7;
                            var7 = _closure2_slot1;
                            var9 = var2 == var7;
                            var8 = undefined;
                            if (var9) {
                                _fun117623_ip = 652;
                                continue _fun117623
                            }
                        case 646:
                            var8 = var7.num_packets;
                        case 652:
                            var9 = var2 != var8;
                            var7 = 0;
                            if (!var9) {
                                _fun117623_ip = 664;
                                continue _fun117623
                            }
                        case 661:
                            var7 = var8;
                        case 664:
                            var4.num_packets = var7;
                            var7 = _closure2_slot1;
                            var9 = var2 == var7;
                            var8 = undefined;
                            if (var9) {
                                _fun117623_ip = 688;
                                continue _fun117623
                            }
                        case 682:
                            var8 = var7.num_bytes;
                        case 688:
                            var9 = var2 != var8;
                            var7 = 0;
                            if (!var9) {
                                _fun117623_ip = 700;
                                continue _fun117623
                            }
                        case 697:
                            var7 = var8;
                        case 700:
                            var4.num_bytes = var7;
                            var10 = _closure1_slot18;
                            var9 = _closure2_slot26;
                            var8 = _closure2_slot30;
                            var7 = _closure2_slot28;
                            var8 = var10.bind(var0)(var9, var8, var7);
                            var9 = var2 == var8;
                            var7 = undefined;
                            if (var9) {
                                _fun117623_ip = 743;
                                continue _fun117623
                            }
                        case 737:
                            var7 = var8.packetsLost;
                        case 743:
                            var8 = var2 != var7;
                            var6 = 0;
                            if (!var8) {
                                _fun117623_ip = 755;
                                continue _fun117623
                            }
                        case 752:
                            var6 = var7;
                        case 755:
                            var4.num_packets_lost = var6;
                            var6 = _closure2_slot10;
                            if (!(var2 == var6)) {
                                _fun117623_ip = 846;
                                continue _fun117623
                            }
                        case 770:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 16;
                            var6 = var8[var6];
                            var8 = var7.bind(var0)(var6);
                            var7 = var8.parseCodecType;
                            var11 = _closure1_slot18;
                            var10 = _closure2_slot26;
                            var9 = _closure2_slot30;
                            var6 = _closure2_slot28;
                            var9 = var11.bind(var0)(var10, var9, var6);
                            var10 = var2 == var9;
                            var6 = undefined;
                            if (var10) {
                                _fun117623_ip = 839;
                                continue _fun117623
                            }
                        case 828:
                            var9 = var9.codec;
                            var6 = var9.name;
                        case 839:
                            var7 = var7.bind(var8)(var6);
                            _fun117623_ip = 850;
                            continue _fun117623;
                        case 846:
                            var7 = _closure2_slot10;
                        case 850:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 862;
                                continue _fun117623
                            }
                        case 859:
                            var6 = var7;
                        case 862:
                            var4.video_codec = var6;
                            var6 = _closure2_slot11;
                            if (!(var2 == var6)) {
                                _fun117623_ip = 936;
                                continue _fun117623
                            }
                        case 875:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 16;
                            var6 = var8[var6];
                            var8 = var7.bind(var0)(var6);
                            var7 = var8.parseEncoder;
                            var9 = _closure1_slot16;
                            var6 = _closure2_slot30;
                            var9 = var9.bind(var0)(var6);
                            var10 = var2 == var9;
                            var6 = undefined;
                            if (var10) {
                                _fun117623_ip = 929;
                                continue _fun117623
                            }
                        case 923:
                            var6 = var9.encoderImplementationName;
                        case 929:
                            var7 = var7.bind(var8)(var6);
                            _fun117623_ip = 940;
                            continue _fun117623;
                        case 936:
                            var7 = _closure2_slot11;
                        case 940:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 952;
                                continue _fun117623
                            }
                        case 949:
                            var6 = var7;
                        case 952:
                            var4.video_encoder = var6;
                            var6 = _closure2_slot12;
                            if (!(var2 == var6)) {
                                _fun117623_ip = 1033;
                                continue _fun117623
                            }
                        case 967:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 16;
                            var6 = var8[var6];
                            var8 = var7.bind(var0)(var6);
                            var7 = var8.parseDecoder;
                            var10 = _closure1_slot17;
                            var9 = _closure2_slot30;
                            var6 = _closure2_slot28;
                            var9 = var10.bind(var0)(var9, var6);
                            var10 = var2 == var9;
                            var6 = undefined;
                            if (var10) {
                                _fun117623_ip = 1026;
                                continue _fun117623
                            }
                        case 1020:
                            var6 = var9.decoderImplementationName;
                        case 1026:
                            var7 = var7.bind(var8)(var6);
                            _fun117623_ip = 1037;
                            continue _fun117623;
                        case 1033:
                            var7 = _closure2_slot12;
                        case 1037:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1049;
                                continue _fun117623
                            }
                        case 1046:
                            var6 = var7;
                        case 1049:
                            var4.video_decoder = var6;
                            var6 = _closure2_slot13;
                            var7 = var2 != var6;
                            var6 = null;
                            if (!var7) {
                                _fun117623_ip = 1073;
                                continue _fun117623
                            }
                        case 1069:
                            var6 = _closure2_slot13;
                        case 1073:
                            var4.audio_capture_sample_rate_mismatch_percent = var6;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 17;
                            var6 = var8[var6];
                            var6 = var7.bind(var0)(var6);
                            var7 = var6.WindowVisibilityVideoManager;
                            var6 = var7.isIncomingVideoEnabled;
                            var6 = var6.bind(var7)();
                            var6 = !var6;
                            var4.incoming_video_stopped_for_occlusion = var6;
                            var9 = _closure1_slot18;
                            var8 = _closure2_slot26;
                            var7 = _closure2_slot30;
                            var6 = _closure2_slot28;
                            var6 = var9.bind(var0)(var8, var7, var6);
                            var8 = var2 == var6;
                            var7 = undefined;
                            if (var8) {
                                _fun117623_ip = 1164;
                                continue _fun117623
                            }
                        case 1158:
                            var7 = var6.bitrate;
                        case 1164:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1176;
                                continue _fun117623
                            }
                        case 1173:
                            var6 = var7;
                        case 1176:
                            var4.bitrate = var6;
                            var7 = _closure2_slot26;
                            var6 = null;
                            if (!var7) {
                                _fun117623_ip = 1230;
                                continue _fun117623
                            }
                        case 1190:
                            var8 = _closure1_slot16;
                            var7 = _closure2_slot30;
                            var8 = var8.bind(var0)(var7);
                            var9 = var2 == var8;
                            var7 = undefined;
                            if (var9) {
                                _fun117623_ip = 1218;
                                continue _fun117623
                            }
                        case 1212:
                            var7 = var8.bitrateTarget;
                        case 1218:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1230;
                                continue _fun117623
                            }
                        case 1227:
                            var6 = var7;
                        case 1230:
                            var4.target_bitrate = var6;
                            var6 = _closure2_slot26;
                            var8 = _closure2_slot27;
                            var7 = _closure2_slot28;
                            if (var6) {
                                _fun117623_ip = 1291;
                                continue _fun117623
                            }
                        case 1252:
                            var6 = _closure1_slot17;
                            var7 = var6.bind(var0)(var8, var7);
                            var9 = var2 == var7;
                            var6 = undefined;
                            if (var9) {
                                _fun117623_ip = 1277;
                                continue _fun117623
                            }
                        case 1271:
                            var6 = var7.frameRateDecode;
                        case 1277:
                            var9 = var2 != var6;
                            var7 = null;
                            if (!var9) {
                                _fun117623_ip = 1289;
                                continue _fun117623
                            }
                        case 1286:
                            var7 = var6;
                        case 1289:
                            _fun117623_ip = 1330;
                            continue _fun117623;
                        case 1291:
                            var6 = _closure1_slot16;
                            var6 = var6.bind(var0)(var8);
                            var9 = var2 == var6;
                            var8 = undefined;
                            if (var9) {
                                _fun117623_ip = 1315;
                                continue _fun117623
                            }
                        case 1309:
                            var8 = var6.frameRateEncode;
                        case 1315:
                            var9 = var2 != var8;
                            var6 = null;
                            if (!var9) {
                                _fun117623_ip = 1327;
                                continue _fun117623
                            }
                        case 1324:
                            var6 = var8;
                        case 1327:
                            var7 = var6;
                        case 1330:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1342;
                                continue _fun117623
                            }
                        case 1339:
                            var6 = var7;
                        case 1342:
                            var4.fps = var6;
                            var8 = _closure2_slot27;
                            var6 = _closure1_slot14;
                            var7 = var6.STREAM;
                            var6 = null;
                            if (!(var8 === var7)) {
                                _fun117623_ip = 1380;
                                continue _fun117623
                            }
                        case 1367:
                            var7 = _closure2_slot26;
                            var6 = null;
                            if (!var7) {
                                _fun117623_ip = 1380;
                                continue _fun117623
                            }
                        case 1376:
                            var6 = _closure2_slot21;
                        case 1380:
                            var4.target_fps = var6;
                            var6 = _closure2_slot17;
                            var6 = var2 == var6;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 1410;
                                continue _fun117623
                            }
                        case 1400:
                            var6 = _closure2_slot17;
                            var7 = var6.ownerId;
                        case 1410:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1422;
                                continue _fun117623
                            }
                        case 1419:
                            var6 = var7;
                        case 1422:
                            var4.sender_user_id = var6;
                            var6 = _closure2_slot18;
                            var6 = var2 == var6;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 1454;
                                continue _fun117623
                            }
                        case 1440:
                            var8 = _closure2_slot18;
                            var6 = var8.getRegion;
                            var7 = var6.bind(var8)();
                        case 1454:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1466;
                                continue _fun117623
                            }
                        case 1463:
                            var6 = var7;
                        case 1466:
                            var4.stream_region = var6;
                            var7 = _closure2_slot26;
                            var6 = null;
                            if (!var7) {
                                _fun117623_ip = 1530;
                                continue _fun117623
                            }
                        case 1480:
                            var7 = _closure2_slot18;
                            var8 = var2 == var7;
                            var7 = undefined;
                            if (var8) {
                                _fun117623_ip = 1518;
                                continue _fun117623
                            }
                        case 1493:
                            var8 = _closure2_slot18;
                            var8 = var8.analyticsContext;
                            var9 = var2 == var8;
                            var7 = undefined;
                            if (var9) {
                                _fun117623_ip = 1518;
                                continue _fun117623
                            }
                        case 1512:
                            var7 = var8.streamSourceType;
                        case 1518:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1530;
                                continue _fun117623
                            }
                        case 1527:
                            var6 = var7;
                        case 1530:
                            var4.stream_source_type = var6;
                            var6 = _closure2_slot18;
                            var6 = var2 == var6;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 1573;
                                continue _fun117623
                            }
                        case 1548:
                            var6 = _closure2_slot18;
                            var6 = var6.analyticsContext;
                            var8 = var2 == var6;
                            var7 = undefined;
                            if (var8) {
                                _fun117623_ip = 1573;
                                continue _fun117623
                            }
                        case 1567:
                            var7 = var6.numViewers;
                        case 1573:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1585;
                                continue _fun117623
                            }
                        case 1582:
                            var6 = var7;
                        case 1585:
                            var4.num_stream_viewers = var6;
                            var7 = _closure2_slot26;
                            var6 = null;
                            if (!var7) {
                                _fun117623_ip = 1618;
                                continue _fun117623
                            }
                        case 1601:
                            var7 = _closure2_slot20;
                            var7 = var2 != var7;
                            var6 = null;
                            if (!var7) {
                                _fun117623_ip = 1618;
                                continue _fun117623
                            }
                        case 1614:
                            var6 = _closure2_slot20;
                        case 1618:
                            var4.video_input_resolution_height = var6;
                            var7 = _closure2_slot26;
                            var6 = null;
                            if (!var7) {
                                _fun117623_ip = 1651;
                                continue _fun117623
                            }
                        case 1634:
                            var7 = _closure2_slot21;
                            var7 = var2 != var7;
                            var6 = null;
                            if (!var7) {
                                _fun117623_ip = 1651;
                                continue _fun117623
                            }
                        case 1647:
                            var6 = _closure2_slot21;
                        case 1651:
                            var4.video_input_frame_rate = var6;
                            var7 = _closure1_slot21;
                            var6 = _closure2_slot30;
                            var6 = var7.bind(var0)(var6);
                            var4.screenshare_capture_method = var6;
                            var6 = _closure2_slot22;
                            var7 = var2 != var6;
                            var6 = null;
                            if (!var7) {
                                _fun117623_ip = 1695;
                                continue _fun117623
                            }
                        case 1691:
                            var6 = _closure2_slot22;
                        case 1695:
                            var4.share_application_name = var6;
                            var6 = _closure2_slot23;
                            var7 = var2 != var6;
                            var6 = null;
                            if (!var7) {
                                _fun117623_ip = 1717;
                                continue _fun117623
                            }
                        case 1713:
                            var6 = _closure2_slot23;
                        case 1717:
                            var4.share_application_id = var6;
                            var6 = _closure2_slot24;
                            var7 = var2 != var6;
                            var6 = null;
                            if (!var7) {
                                _fun117623_ip = 1739;
                                continue _fun117623
                            }
                        case 1735:
                            var6 = _closure2_slot24;
                        case 1739:
                            var4.share_application_executable = var6;
                            var6 = _closure2_slot25;
                            var7 = var2 != var6;
                            var6 = null;
                            if (!var7) {
                                _fun117623_ip = 1761;
                                continue _fun117623
                            }
                        case 1757:
                            var6 = _closure2_slot25;
                        case 1761:
                            var4.share_application_distributor = var6;
                            var6 = var2 == var3;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 1781;
                                continue _fun117623
                            }
                        case 1775:
                            var7 = var3.cpu_brand;
                        case 1781:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1793;
                                continue _fun117623
                            }
                        case 1790:
                            var6 = var7;
                        case 1793:
                            var4.cpu_brand = var6;
                            var6 = var2 == var3;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 1813;
                                continue _fun117623
                            }
                        case 1807:
                            var7 = var3.cpu_vendor;
                        case 1813:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1825;
                                continue _fun117623
                            }
                        case 1822:
                            var6 = var7;
                        case 1825:
                            var4.cpu_vendor = var6;
                            var6 = var2 == var3;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 1845;
                                continue _fun117623
                            }
                        case 1839:
                            var7 = var3.cpu_memory;
                        case 1845:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1857;
                                continue _fun117623
                            }
                        case 1854:
                            var6 = var7;
                        case 1857:
                            var4.cpu_memory = var6;
                            var6 = var2 == var3;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 1877;
                                continue _fun117623
                            }
                        case 1871:
                            var7 = var3.gpu_brand;
                        case 1877:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1889;
                                continue _fun117623
                            }
                        case 1886:
                            var6 = var7;
                        case 1889:
                            var4.gpu_brand = var6;
                            var6 = var2 == var3;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 1909;
                                continue _fun117623
                            }
                        case 1903:
                            var7 = var3.gpu_count;
                        case 1909:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1921;
                                continue _fun117623
                            }
                        case 1918:
                            var6 = var7;
                        case 1921:
                            var4.gpu_count = var6;
                            var6 = var2 == var3;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 1941;
                                continue _fun117623
                            }
                        case 1935:
                            var7 = var3.gpu_memory;
                        case 1941:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1953;
                                continue _fun117623
                            }
                        case 1950:
                            var6 = var7;
                        case 1953:
                            var4.gpu_memory = var6;
                            var6 = var2 == var3;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 1973;
                                continue _fun117623
                            }
                        case 1967:
                            var7 = var3.gpu_device_vendor_id;
                        case 1973:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 1985;
                                continue _fun117623
                            }
                        case 1982:
                            var6 = var7;
                        case 1985:
                            var4.gpu_device_vendor_id = var6;
                            var6 = var2 == var3;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 2005;
                                continue _fun117623
                            }
                        case 1999:
                            var7 = var3.gpu_device_device_id;
                        case 2005:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 2017;
                                continue _fun117623
                            }
                        case 2014:
                            var6 = var7;
                        case 2017:
                            var4.gpu_device_device_id = var6;
                            var6 = var2 == var3;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 2037;
                                continue _fun117623
                            }
                        case 2031:
                            var7 = var3.gpu_device_sub_sys_id;
                        case 2037:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 2049;
                                continue _fun117623
                            }
                        case 2046:
                            var6 = var7;
                        case 2049:
                            var4.gpu_device_sub_sys_id = var6;
                            var6 = var2 == var3;
                            var7 = undefined;
                            if (var6) {
                                _fun117623_ip = 2069;
                                continue _fun117623
                            }
                        case 2063:
                            var7 = var3.gpu_device_revision;
                        case 2069:
                            var8 = var2 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun117623_ip = 2081;
                                continue _fun117623
                            }
                        case 2078:
                            var6 = var7;
                        case 2081:
                            var4.gpu_device_revision = var6;
                            var7 = var2 == var3;
                            var6 = undefined;
                            if (var7) {
                                _fun117623_ip = 2101;
                                continue _fun117623
                            }
                        case 2095:
                            var6 = var3.gpu_driver_version;
                        case 2101:
                            var7 = var2 != var6;
                            var3 = null;
                            if (!var7) {
                                _fun117623_ip = 2113;
                                continue _fun117623
                            }
                        case 2110:
                            var3 = var6;
                        case 2113:
                            var4.gpu_driver_version = var3;
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var7 = 18;
                            var3 = var3[var7];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.getCurrentCPUUsagePercent;
                            var6 = var3.bind(var6)();
                            var8 = var2 != var6;
                            var3 = null;
                            if (!var8) {
                                _fun117623_ip = 2160;
                                continue _fun117623
                            }
                        case 2157:
                            var3 = var6;
                        case 2160:
                            var4.cpu_usage = var3;
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.getCurrentMemoryUsageKB;
                            var6 = var3.bind(var6)();
                            var7 = var2 != var6;
                            var3 = null;
                            if (!var7) {
                                _fun117623_ip = 2206;
                                continue _fun117623
                            }
                        case 2203:
                            var3 = var6;
                        case 2206:
                            var4.memory_usage = var3;
                            var6 = _closure1_slot19;
                            var3 = _closure2_slot30;
                            var3 = var6.bind(var0)(var3);
                            var4.outbound_bitrate_estimate = var3;
                            var6 = _closure1_slot20;
                            var3 = _closure2_slot30;
                            var3 = var6.bind(var0)(var3);
                            var4.inbound_bitrate_estimate = var3;
                            var6 = _closure1_slot7;
                            var3 = var6.getHardwareEncoding;
                            var3 = var3.bind(var6)();
                            var4.hardware_enabled = var3;
                            var3 = _closure2_slot14;
                            if (!(var2 == var3)) {
                                _fun117623_ip = 2324;
                                continue _fun117623
                            }
                        case 2280:
                            var7 = _closure1_slot7;
                            var3 = var7.getInputDevices;
                            var6 = var3.bind(var7)();
                            var3 = var7.getInputDeviceId;
                            var3 = var3.bind(var7)();
                            var6 = var6[var3];
                            var7 = var2 == var6;
                            var3 = undefined;
                            if (var7) {
                                _fun117623_ip = 2322;
                                continue _fun117623
                            }
                        case 2317:
                            var3 = var6.name;
                        case 2322:
                            _fun117623_ip = 2328;
                            continue _fun117623;
                        case 2324:
                            var3 = _closure2_slot14;
                        case 2328:
                            var4.audio_input_device_name = var3;
                            var3 = _closure2_slot15;
                            if (!(var2 == var3)) {
                                _fun117623_ip = 2387;
                                continue _fun117623
                            }
                        case 2343:
                            var7 = _closure1_slot7;
                            var3 = var7.getOutputDevices;
                            var6 = var3.bind(var7)();
                            var3 = var7.getOutputDeviceId;
                            var3 = var3.bind(var7)();
                            var6 = var6[var3];
                            var7 = var2 == var6;
                            var3 = undefined;
                            if (var7) {
                                _fun117623_ip = 2385;
                                continue _fun117623
                            }
                        case 2380:
                            var3 = var6.name;
                        case 2385:
                            _fun117623_ip = 2391;
                            continue _fun117623;
                        case 2387:
                            var3 = _closure2_slot15;
                        case 2391:
                            var4.audio_output_device_name = var3;
                            var3 = _closure2_slot16;
                            if (!(var2 == var3)) {
                                _fun117623_ip = 2450;
                                continue _fun117623
                            }
                        case 2406:
                            var7 = _closure1_slot7;
                            var3 = var7.getVideoDevices;
                            var6 = var3.bind(var7)();
                            var3 = var7.getVideoDeviceId;
                            var3 = var3.bind(var7)();
                            var6 = var6[var3];
                            var7 = var2 == var6;
                            var3 = undefined;
                            if (var7) {
                                _fun117623_ip = 2448;
                                continue _fun117623
                            }
                        case 2443:
                            var3 = var6.name;
                        case 2448:
                            _fun117623_ip = 2454;
                            continue _fun117623;
                        case 2450:
                            var3 = _closure2_slot16;
                        case 2454:
                            var4.video_device_name = var3;
                            var5 = _closure1_slot7;
                            var3 = var5.getMediaEngine;
                            var6 = var3.bind(var5)();
                            var3 = var6.getAudioSubsystem;
                            var3 = var3.bind(var6)();
                            var4.audio_subsystem = var3;
                            var3 = var5.getSettings;
                            var3 = var3.bind(var5)();
                            var3 = var3.automaticAudioSubsystem;
                            var4.automatic_audio_subsystem = var3;
                            var3 = var5.getMediaEngine;
                            var6 = var3.bind(var5)();
                            var3 = var6.getAudioLayer;
                            var3 = var3.bind(var6)();
                            var4.audio_layer = var3;
                            var3 = var5.getSettings;
                            var3 = var3.bind(var5)();
                            var3 = var3.mode;
                            var4.audio_input_mode = var3;
                            var3 = var5.getSettings;
                            var3 = var3.bind(var5)();
                            var3 = var3.modeOptions;
                            var3 = var3.autoThreshold;
                            var4.automatic_audio_input_sensitivity_enabled = var3;
                            var3 = var5.getSettings;
                            var3 = var3.bind(var5)();
                            var3 = var3.modeOptions;
                            var3 = var3.threshold;
                            var4.audio_input_sensitivity = var3;
                            var3 = var5.getEchoCancellation;
                            var3 = var3.bind(var5)();
                            var4.echo_cancellation_enabled = var3;
                            var3 = var5.getNoiseSuppression;
                            var3 = var3.bind(var5)();
                            var4.noise_suppression_enabled = var3;
                            var3 = var5.getNoiseCancellation;
                            var3 = var3.bind(var5)();
                            var4.noise_cancellation_enabled = var3;
                            var3 = var5.getAutomaticGainControl;
                            var3 = var3.bind(var5)();
                            var4.automatic_gain_control_enabled = var3;
                            var3 = var5.getSidechainCompression;
                            var3 = var3.bind(var5)();
                            var4.sidechain_compression_enabled = var3;
                            var3 = var5.getInputVolume;
                            var3 = var3.bind(var5)();
                            var4.input_volume = var3;
                            var3 = var5.getOutputVolume;
                            var3 = var3.bind(var5)();
                            var4.output_volume = var3;
                            var3 = global;
                            var8 = var3.Object;
                            var7 = var8.keys;
                            var6 = var5.getInputDevices;
                            var6 = var6.bind(var5)();
                            var6 = var7.bind(var8)(var6);
                            var6 = var6.length;
                            var4.audio_input_device_count = var6;
                            var7 = var3.Object;
                            var6 = var7.keys;
                            var3 = var5.getOutputDevices;
                            var3 = var3.bind(var5)();
                            var3 = var6.bind(var7)(var3);
                            var3 = var3.length;
                            var4.audio_output_device_count = var3;
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var3 = 19;
                            var3 = var7[var3];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.getAppHardwareAccelerationEnabled;
                            var3 = var3.bind(var6)();
                            var4.app_hardware_acceleration_enabled = var3;
                            var3 = var5.getInputDeviceOSMuted;
                            var5 = var3.bind(var5)();
                            var6 = var2 != var5;
                            var3 = null;
                            if (!var6) {
                                _fun117623_ip = 2860;
                                continue _fun117623
                            }
                        case 2857:
                            var3 = var5;
                        case 2860:
                            var4.input_device_os_muted = var3;
                            var5 = _closure1_slot7;
                            var3 = var5.getInputDeviceOSVolume;
                            var3 = var3.bind(var5)();
                            var5 = var2 != var3;
                            var2 = null;
                            if (!var5) {
                                _fun117623_ip = 2895;
                                continue _fun117623
                            }
                        case 2892:
                            var2 = var3;
                        case 2895:
                            var4.input_device_os_volume = var2;
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 20;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.track;
                            var1 = _closure1_slot13;
                            var1 = var1.AV_ERROR_REPORTED;
                            var1 = var2.bind(var3)(var1, var4);
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.sendAVErrorAnalyticsEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3567, 3583, 1372, 3435, 3477, 3586, 1661, 3568, 3587, 660, 3469, 7967, 3464, 3669, 22, 12224, 7994, 12176, 1347, 795, 2]);