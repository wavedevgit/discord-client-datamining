// ../discord_common/js/packages/media-engine/native/transformStats.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function(arg0) { // Original name: convertAudioLevel, environment: var1
        var1 = arg0;
        var0 = 32768;
        var0 = var1 / var0;
        return var0;
    };
    var _closure1_slot2 = var0;
    var0 = function(arg0) { // Original name: sumBytes, environment: var1
        _fun32597: for (var _fun32597_ip = 0;;) switch (_fun32597_ip) {
            case 0:
                var5 = arg0;
                var4 = null;
                var1 = var4 == var5;
                var0 = undefined;
                if (var1) {
                    _fun32597_ip = 20;
                    continue _fun32597
                }
            case 14:
                var0 = var5.headerBytes;
            case 20:
                var3 = var4 != var0;
                var1 = 0;
                if (!var3) {
                    _fun32597_ip = 32;
                    continue _fun32597
                }
            case 29:
                var1 = var0;
            case 32:
                var0 = var4 == var5;
                var3 = undefined;
                if (var0) {
                    _fun32597_ip = 47;
                    continue _fun32597
                }
            case 41:
                var3 = var5.payloadBytes;
            case 47:
                var6 = var4 != var3;
                var0 = 0;
                if (!var6) {
                    _fun32597_ip = 59;
                    continue _fun32597
                }
            case 56:
                var0 = var3;
            case 59:
                var1 = var1 + var0;
                var0 = var4 == var5;
                var3 = undefined;
                if (var0) {
                    _fun32597_ip = 78;
                    continue _fun32597
                }
            case 72:
                var3 = var5.paddingBytes;
            case 78:
                var6 = var4 != var3;
                var0 = 0;
                if (!var6) {
                    _fun32597_ip = 90;
                    continue _fun32597
                }
            case 87:
                var0 = var3;
            case 90:
                var1 = var1 + var0;
                var3 = var4 == var5;
                var0 = undefined;
                if (var3) {
                    _fun32597_ip = 124;
                    continue _fun32597
                }
            case 103:
                var3 = var5.fec;
                var6 = var4 == var3;
                var0 = undefined;
                if (var6) {
                    _fun32597_ip = 124;
                    continue _fun32597
                }
            case 118:
                var0 = var3.headerBytes;
            case 124:
                var6 = var4 != var0;
                var3 = 0;
                if (!var6) {
                    _fun32597_ip = 136;
                    continue _fun32597
                }
            case 133:
                var3 = var0;
            case 136:
                var0 = var4 == var5;
                var6 = undefined;
                if (var0) {
                    _fun32597_ip = 166;
                    continue _fun32597
                }
            case 145:
                var0 = var5.fec;
                var8 = var4 == var0;
                var6 = undefined;
                if (var8) {
                    _fun32597_ip = 166;
                    continue _fun32597
                }
            case 160:
                var6 = var0.payloadBytes;
            case 166:
                var8 = var4 != var6;
                var0 = 0;
                if (!var8) {
                    _fun32597_ip = 178;
                    continue _fun32597
                }
            case 175:
                var0 = var6;
            case 178:
                var3 = var3 + var0;
                var0 = var4 == var5;
                var6 = undefined;
                if (var0) {
                    _fun32597_ip = 212;
                    continue _fun32597
                }
            case 191:
                var0 = var5.fec;
                var8 = var4 == var0;
                var6 = undefined;
                if (var8) {
                    _fun32597_ip = 212;
                    continue _fun32597
                }
            case 206:
                var6 = var0.paddingBytes;
            case 212:
                var8 = var4 != var6;
                var0 = 0;
                if (!var8) {
                    _fun32597_ip = 224;
                    continue _fun32597
                }
            case 221:
                var0 = var6;
            case 224:
                var3 = var3 + var0;
                var0 = var4 == var5;
                var6 = undefined;
                if (var0) {
                    _fun32597_ip = 258;
                    continue _fun32597
                }
            case 237:
                var0 = var5.retransmitted;
                var8 = var4 == var0;
                var6 = undefined;
                if (var8) {
                    _fun32597_ip = 258;
                    continue _fun32597
                }
            case 252:
                var6 = var0.headerBytes;
            case 258:
                var8 = var4 != var6;
                var0 = 0;
                if (!var8) {
                    _fun32597_ip = 270;
                    continue _fun32597
                }
            case 267:
                var0 = var6;
            case 270:
                var3 = var3 + var0;
                var0 = var4 == var5;
                var6 = undefined;
                if (var0) {
                    _fun32597_ip = 304;
                    continue _fun32597
                }
            case 283:
                var0 = var5.retransmitted;
                var8 = var4 == var0;
                var6 = undefined;
                if (var8) {
                    _fun32597_ip = 304;
                    continue _fun32597
                }
            case 298:
                var6 = var0.payloadBytes;
            case 304:
                var8 = var4 != var6;
                var0 = 0;
                if (!var8) {
                    _fun32597_ip = 316;
                    continue _fun32597
                }
            case 313:
                var0 = var6;
            case 316:
                var3 = var3 + var0;
                var0 = var4 == var5;
                var6 = undefined;
                if (var0) {
                    _fun32597_ip = 350;
                    continue _fun32597
                }
            case 329:
                var0 = var5.retransmitted;
                var8 = var4 == var0;
                var6 = undefined;
                if (var8) {
                    _fun32597_ip = 350;
                    continue _fun32597
                }
            case 344:
                var6 = var0.paddingBytes;
            case 350:
                var8 = var4 != var6;
                var0 = 0;
                if (!var8) {
                    _fun32597_ip = 362;
                    continue _fun32597
                }
            case 359:
                var0 = var6;
            case 362:
                var3 = var3 + var0;
                var0 = var4 == var5;
                var6 = undefined;
                if (var0) {
                    _fun32597_ip = 396;
                    continue _fun32597
                }
            case 375:
                var0 = var5.transmitted;
                var8 = var4 == var0;
                var6 = undefined;
                if (var8) {
                    _fun32597_ip = 396;
                    continue _fun32597
                }
            case 390:
                var6 = var0.headerBytes;
            case 396:
                var8 = var4 != var6;
                var0 = 0;
                if (!var8) {
                    _fun32597_ip = 408;
                    continue _fun32597
                }
            case 405:
                var0 = var6;
            case 408:
                var3 = var3 + var0;
                var0 = var4 == var5;
                var6 = undefined;
                if (var0) {
                    _fun32597_ip = 442;
                    continue _fun32597
                }
            case 421:
                var0 = var5.transmitted;
                var8 = var4 == var0;
                var6 = undefined;
                if (var8) {
                    _fun32597_ip = 442;
                    continue _fun32597
                }
            case 436:
                var6 = var0.payloadBytes;
            case 442:
                var8 = var4 != var6;
                var0 = 0;
                if (!var8) {
                    _fun32597_ip = 454;
                    continue _fun32597
                }
            case 451:
                var0 = var6;
            case 454:
                var0 = var3 + var0;
                var6 = var4 == var5;
                var3 = undefined;
                if (var6) {
                    _fun32597_ip = 488;
                    continue _fun32597
                }
            case 467:
                var5 = var5.transmitted;
                var6 = var4 == var5;
                var3 = undefined;
                if (var6) {
                    _fun32597_ip = 488;
                    continue _fun32597
                }
            case 482:
                var3 = var5.paddingBytes;
            case 488:
                var4 = var4 != var3;
                var2 = 0;
                if (!var4) {
                    _fun32597_ip = 500;
                    continue _fun32597
                }
            case 497:
                var2 = var3;
            case 500:
                var0 = var0 + var2;
                var0 = var0 + var1;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0) { // Original name: sumPackets, environment: var1
        _fun32598: for (var _fun32598_ip = 0;;) switch (_fun32598_ip) {
            case 0:
                var5 = arg0;
                var4 = null;
                var1 = var4 == var5;
                var0 = undefined;
                if (var1) {
                    _fun32598_ip = 20;
                    continue _fun32598
                }
            case 14:
                var0 = var5.packets;
            case 20:
                var3 = var4 != var0;
                var1 = 0;
                if (!var3) {
                    _fun32598_ip = 32;
                    continue _fun32598
                }
            case 29:
                var1 = var0;
            case 32:
                var3 = var4 == var5;
                var0 = undefined;
                if (var3) {
                    _fun32598_ip = 62;
                    continue _fun32598
                }
            case 41:
                var3 = var5.fec;
                var6 = var4 == var3;
                var0 = undefined;
                if (var6) {
                    _fun32598_ip = 62;
                    continue _fun32598
                }
            case 56:
                var0 = var3.packets;
            case 62:
                var6 = var4 != var0;
                var3 = 0;
                if (!var6) {
                    _fun32598_ip = 74;
                    continue _fun32598
                }
            case 71:
                var3 = var0;
            case 74:
                var0 = var4 == var5;
                var6 = undefined;
                if (var0) {
                    _fun32598_ip = 104;
                    continue _fun32598
                }
            case 83:
                var0 = var5.retransmitted;
                var8 = var4 == var0;
                var6 = undefined;
                if (var8) {
                    _fun32598_ip = 104;
                    continue _fun32598
                }
            case 98:
                var6 = var0.packets;
            case 104:
                var8 = var4 != var6;
                var0 = 0;
                if (!var8) {
                    _fun32598_ip = 116;
                    continue _fun32598
                }
            case 113:
                var0 = var6;
            case 116:
                var0 = var3 + var0;
                var6 = var4 == var5;
                var3 = undefined;
                if (var6) {
                    _fun32598_ip = 150;
                    continue _fun32598
                }
            case 129:
                var5 = var5.transmitted;
                var6 = var4 == var5;
                var3 = undefined;
                if (var6) {
                    _fun32598_ip = 150;
                    continue _fun32598
                }
            case 144:
                var3 = var5.packets;
            case 150:
                var4 = var4 != var3;
                var2 = 0;
                if (!var4) {
                    _fun32598_ip = 162;
                    continue _fun32598
                }
            case 159:
                var2 = var3;
            case 162:
                var0 = var0 + var2;
                var0 = var0 + var1;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function(arg0) { // Original name: transformPlayoutStats, environment: var1
        _fun32599: for (var _fun32599_ip = 0;;) switch (_fun32599_ip) {
            case 0:
                var9 = arg0;
                var0 = {};
                var7 = var9;
                var3 = global;
                var2 = 1000;
                var1 = null;
                for (var4 in var7)
                    case 29: {
                        case 41: var11 = var4;
                        var13 = var9[var11];
                        var12 = var1 != var13;
                        var10 = null;
                        if (!var12) {
                            _fun32599_ip = 249;
                            continue _fun32599
                        }
                        case 60: var12 = {};
                        var16 = var3.Math;
                        var15 = var16.round;
                        var14 = var13.last;
                        var14 = var2 * var14;
                        var14 = var15.bind(var16)(var14);
                        var12.last = var14;
                        var16 = var3.Math;
                        var15 = var16.round;
                        var14 = var13.mean;
                        var14 = var2 * var14;
                        var14 = var15.bind(var16)(var14);
                        var12.mean = var14;
                        var16 = var3.Math;
                        var15 = var16.round;
                        var14 = var13.p75;
                        var14 = var2 * var14;
                        var14 = var15.bind(var16)(var14);
                        var12.p75 = var14;
                        var16 = var3.Math;
                        var15 = var16.round;
                        var14 = var13.p95;
                        var14 = var2 * var14;
                        var14 = var15.bind(var16)(var14);
                        var12.p95 = var14;
                        var16 = var3.Math;
                        var15 = var16.round;
                        var14 = var13.p99;
                        var14 = var2 * var14;
                        var14 = var15.bind(var16)(var14);
                        var12.p99 = var14;
                        var15 = var3.Math;
                        var14 = var15.round;
                        var13 = var13.max;
                        var13 = var2 * var13;
                        var13 = var14.bind(var15)(var13);
                        var12.max = var13;
                        var10 = var12;
                        case 249: var0[var11] = var10;
                        _fun32599_ip = 29;
                        continue _fun32599;
                    }
            case 258:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: transformOutboundVideoStats, environment: var1
        _fun32600: for (var _fun32600_ip = 0;;) switch (_fun32600_ip) {
            case 0:
                var4 = arg0;
                var11 = arg1;
                var3 = var4.substreams;
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var0
                    _fun32601: for (var _fun32601_ip = 0;;) switch (_fun32601_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.isRTX;
                            var0 = !var0;
                            if (!var0) {
                                _fun32601_ip = 28;
                                continue _fun32601
                            }
                        case 17:
                            var1 = var1.isFlexFEC;
                            var0 = !var1;
                        case 28:
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var3 = null;
                if (!(var3 == var2)) {
                    _fun32600_ip = 39;
                    continue _fun32600
                }
            case 35:
                var1 = undefined;
                return var1;
            case 39:
                var7 = var4.substreams;
                var6 = var7.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    var2 = _closure1_slot3;
                    var0 = arg1;
                    var1 = var0.rtpStats;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
                };
                var5 = 0;
                var7 = var6.bind(var7)(var1, var5);
                var6 = var4.substreams;
                var1 = var6.reduce;
                var0 = function(arg0, arg1) { // Environment: var0
                    var2 = _closure1_slot4;
                    var0 = arg1;
                    var1 = var0.rtpStats;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
                };
                var6 = var1.bind(var6)(var0, var5);
                var0 = {};
                var1 = 'video';
                var0.type = var1;
                var1 = var2.ssrc;
                var0.ssrc = var1;
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var10 = var8[var5];
                var1 = undefined;
                var14 = var9.bind(var1)(var10);
                var13 = var14.formatSinkWantStat;
                var12 = var2.ssrc;
                var10 = true;
                var10 = var13.bind(var14)(var11, var12, var10);
                var0.sinkWant = var10;
                var8 = var8[var5];
                var10 = var9.bind(var1)(var8);
                var9 = var10.formatSinkWantAsInt;
                var8 = var2.ssrc;
                var8 = var9.bind(var10)(var11, var8);
                var0.sinkWantAsInt = var8;
                var8 = {};
                var9 = var4.codecPayloadType;
                var8.id = var9;
                var9 = var4.codecName;
                var8.name = var9;
                var0.codec = var8;
                var8 = var4.keyFrameInterval;
                var0.keyFrameInterval = var8;
                var0.bytesSent = var7;
                var0.packetsSent = var6;
                var6 = var2.rtcpStats;
                var8 = var3 == var6;
                var7 = undefined;
                if (var8) {
                    _fun32600_ip = 257;
                    continue _fun32600
                }
            case 251:
                var7 = var6.packetsLost;
            case 257:
                var8 = var3 != var7;
                var6 = 0;
                if (!var8) {
                    _fun32600_ip = 269;
                    continue _fun32600
                }
            case 266:
                var6 = var7;
            case 269:
                var0.packetsLost = var6;
                var6 = var2.rtcpStats;
                var8 = var3 == var6;
                var7 = undefined;
                if (var8) {
                    _fun32600_ip = 295;
                    continue _fun32600
                }
            case 289:
                var7 = var6.fractionLost;
            case 295:
                var8 = var3 != var7;
                var6 = 0;
                if (!var8) {
                    _fun32600_ip = 307;
                    continue _fun32600
                }
            case 304:
                var6 = var7;
            case 307:
                var0.fractionLost = var6;
                var6 = var4.mediaBitrate;
                var0.bitrate = var6;
                var6 = var4.targetMediaBitrate;
                var0.bitrateTarget = var6;
                var6 = var4.encoderImplementationName;
                var0.encoderImplementationName = var6;
                var6 = var4.encodeUsage;
                var0.encodeUsage = var6;
                var6 = var4.avgEncodeTime;
                var0.averageEncodeTime = var6;
                var6 = {};
                var7 = var2.height;
                var6.height = var7;
                var7 = var2.width;
                var6.width = var7;
                var0.resolution = var6;
                var6 = var2.frameCounts;
                var7 = var6.keyFrames;
                var6 = var2.frameCounts;
                var6 = var6.deltaFrames;
                var6 = var7 + var6;
                var0.framesSent = var6;
                var6 = var2.frameCounts;
                var6 = var6.keyFrames;
                var0.keyFramesEncoded = var6;
                var6 = var4.framesEncoded;
                var0.framesEncoded = var6;
                var6 = var4.inputFrameRate;
                var0.frameRateInput = var6;
                var6 = var4.encodeFrameRate;
                var0.frameRateEncode = var6;
                var6 = var2.rtcpStats;
                var8 = var3 == var6;
                var7 = undefined;
                if (var8) {
                    _fun32600_ip = 502;
                    continue _fun32600
                }
            case 496:
                var7 = var6.firPackets;
            case 502:
                var8 = var3 != var7;
                var6 = 0;
                if (!var8) {
                    _fun32600_ip = 514;
                    continue _fun32600
                }
            case 511:
                var6 = var7;
            case 514:
                var0.firCount = var6;
                var6 = var2.rtcpStats;
                var8 = var3 == var6;
                var7 = undefined;
                if (var8) {
                    _fun32600_ip = 540;
                    continue _fun32600
                }
            case 534:
                var7 = var6.nackPackets;
            case 540:
                var8 = var3 != var7;
                var6 = 0;
                if (!var8) {
                    _fun32600_ip = 552;
                    continue _fun32600
                }
            case 549:
                var6 = var7;
            case 552:
                var0.nackCount = var6;
                var7 = var2.rtcpStats;
                var8 = var3 == var7;
                var6 = undefined;
                if (var8) {
                    _fun32600_ip = 578;
                    continue _fun32600
                }
            case 572:
                var6 = var7.pliPackets;
            case 578:
                var7 = var3 != var6;
                var5 = 0;
                if (!var7) {
                    _fun32600_ip = 590;
                    continue _fun32600
                }
            case 587:
                var5 = var6;
            case 590:
                var0.pliCount = var5;
                var5 = var4.qpSum;
                var0.qpSum = var5;
                var5 = var4.bwLimitedResolution;
                var0.bandwidthLimitedResolution = var5;
                var5 = var4.framesDroppedRateLimiter;
                var0.framesDroppedRateLimiter = var5;
                var5 = var4.framesDroppedEncoderQueue;
                var0.framesDroppedEncoderQueue = var5;
                var5 = var4.framesDroppedCongestionWindow;
                var0.framesDroppedCongestionWindow = var5;
                var5 = var4.framesDroppedEncoder;
                var0.framesDroppedEncoder = var5;
                var5 = var4.cpuLimitedResolution;
                var0.cpuLimitedResolution = var5;
                var5 = var2.encoderQualityStats;
                var7 = var3 == var5;
                var6 = undefined;
                if (var7) {
                    _fun32600_ip = 697;
                    continue _fun32600
                }
            case 689:
                var6 = var5.imageQualityVmaf_v061;
            case 697:
                var7 = var3 != var6;
                var5 = undefined;
                if (!var7) {
                    _fun32600_ip = 709;
                    continue _fun32600
                }
            case 706:
                var5 = var6;
            case 709:
                var0.encoderQualityVmaf = var5;
                var5 = var2.encoderQualityStats;
                var7 = var3 == var5;
                var6 = undefined;
                if (var7) {
                    _fun32600_ip = 737;
                    continue _fun32600
                }
            case 729:
                var6 = var5.imageQualityWebrtcPsnrDb;
            case 737:
                var7 = var3 != var6;
                var5 = undefined;
                if (!var7) {
                    _fun32600_ip = 749;
                    continue _fun32600
                }
            case 746:
                var5 = var6;
            case 749:
                var0.encoderQualityPsnr = var5;
                var5 = var2.encoderQualityStats;
                var7 = var3 == var5;
                var6 = undefined;
                if (var7) {
                    _fun32600_ip = 777;
                    continue _fun32600
                }
            case 769:
                var6 = var5.decodeErrors;
            case 777:
                var7 = var3 != var6;
                var5 = undefined;
                if (!var7) {
                    _fun32600_ip = 789;
                    continue _fun32600
                }
            case 786:
                var5 = var6;
            case 789:
                var0.qualityDecodeErrors = var5;
                var5 = var2.encoderQualityStats;
                var7 = var3 == var5;
                var6 = undefined;
                if (var7) {
                    _fun32600_ip = 817;
                    continue _fun32600
                }
            case 809:
                var6 = var5.decoderReboots;
            case 817:
                var7 = var3 != var6;
                var5 = undefined;
                if (!var7) {
                    _fun32600_ip = 829;
                    continue _fun32600
                }
            case 826:
                var5 = var6;
            case 829:
                var0.qualityDecoderReboots = var5;
                var5 = var2.encoderQualityStats;
                var7 = var3 == var5;
                var6 = undefined;
                if (var7) {
                    _fun32600_ip = 857;
                    continue _fun32600
                }
            case 849:
                var6 = var5.scoreErrors;
            case 857:
                var7 = var3 != var6;
                var5 = undefined;
                if (!var7) {
                    _fun32600_ip = 869;
                    continue _fun32600
                }
            case 866:
                var5 = var6;
            case 869:
                var0.qualityScoreErrors = var5;
                var5 = var2.encoderQualityStats;
                var7 = var3 == var5;
                var6 = undefined;
                if (var7) {
                    _fun32600_ip = 897;
                    continue _fun32600
                }
            case 889:
                var6 = var5.frameDrops;
            case 897:
                var7 = var3 != var6;
                var5 = undefined;
                if (!var7) {
                    _fun32600_ip = 909;
                    continue _fun32600
                }
            case 906:
                var5 = var6;
            case 909:
                var0.qualityFrameDrops = var5;
                var5 = var2.encoderQualityStats;
                var7 = var3 == var5;
                var6 = undefined;
                if (var7) {
                    _fun32600_ip = 937;
                    continue _fun32600
                }
            case 929:
                var6 = var5.sizeMismatches;
            case 937:
                var7 = var3 != var6;
                var5 = undefined;
                if (!var7) {
                    _fun32600_ip = 949;
                    continue _fun32600
                }
            case 946:
                var5 = var6;
            case 949:
                var0.qualitySizeMismatches = var5;
                var5 = var4.filter;
                var0.filter = var5;
                var5 = var4.passthroughCount;
                var0.passthroughCount = var5;
                var5 = var4.encryptSuccessCount;
                var0.encryptSuccessCount = var5;
                var5 = var4.encryptFailureCount;
                var0.encryptFailureCount = var5;
                var5 = var4.encryptDuration;
                var0.encryptDuration = var5;
                var5 = var4.encryptAttempts;
                var0.encryptAttempts = var5;
                var5 = var4.encryptMaxAttempts;
                var0.encryptMaxAttempts = var5;
                var5 = var4.encryptMissingKeyCount;
                var0.encryptMissingKeyCount = var5;
                var5 = var4.hqSimulcastStreamEncoded;
                var0.hqSimulcastStreamEncoded = var5;
                var5 = var4.lqSimulcastStreamEncoded;
                var0.lqSimulcastStreamEncoded = var5;
                var4 = var4.bwLimitedFrameRate;
                var0.bandwidthLimitedFrameRate = var4;
                var5 = var2.encoderQualityStats;
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun32600_ip = 1096;
                    continue _fun32600
                }
            case 1090:
                var4 = var5.freezeCount;
            case 1096:
                var0.freezeCount = var4;
                var5 = var2.encoderQualityStats;
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun32600_ip = 1122;
                    continue _fun32600
                }
            case 1116:
                var4 = var5.totalFreezesDuration;
            case 1122:
                var0.totalFreezesDuration = var4;
                var5 = var2.encoderQualityStats;
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun32600_ip = 1148;
                    continue _fun32600
                }
            case 1142:
                var4 = var5.totalFramesDuration;
            case 1148:
                var0.totalFramesDuration = var4;
                var2 = var2.encoderQualityStats;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun32600_ip = 1176;
                    continue _fun32600
                }
            case 1168:
                var1 = var2.interFrameEntropy;
            case 1176:
                var0.videoEntropy = var1;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: transformInboundVideoStats, environment: var1
        _fun32604: for (var _fun32604_ip = 0;;) switch (_fun32604_ip) {
            case 0:
                var3 = arg0;
                var15 = arg1;
                var11 = arg2;
                var5 = arg3;
                var1 = _closure1_slot3;
                var0 = var3.rtpStats;
                var4 = undefined;
                var7 = var1.bind(var4)(var0);
                var1 = _closure1_slot4;
                var0 = var3.rtpStats;
                var1 = var1.bind(var4)(var0);
                var0 = {};
                var6 = 'video';
                var0.type = var6;
                var6 = var3.ssrc;
                var0.ssrc = var6;
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 0;
                var10 = var8[var6];
                var13 = var9.bind(var4)(var10);
                var12 = var13.formatSinkWantStat;
                var10 = var3.ssrc;
                var14 = true;
                var10 = var12.bind(var13)(var15, var10, var14);
                var0.sinkWant = var10;
                var10 = var8[var6];
                var13 = var9.bind(var4)(var10);
                var12 = var13.formatSinkWantAsInt;
                var10 = var3.ssrc;
                var10 = var12.bind(var13)(var15, var10);
                var0.sinkWantAsInt = var10;
                var10 = var8[var6];
                var13 = var9.bind(var4)(var10);
                var12 = var13.formatSinkWantStat;
                var10 = var3.ssrc;
                var10 = var12.bind(var13)(var11, var10, var14);
                var0.sinkWantLocal = var10;
                var8 = var8[var6];
                var10 = var9.bind(var4)(var8);
                var9 = var10.formatSinkWantAsInt;
                var8 = var3.ssrc;
                var8 = var9.bind(var10)(var11, var8);
                var0.sinkWantLocalAsInt = var8;
                var8 = {};
                var9 = var3.codecPayloadType;
                var8.id = var9;
                var9 = var3.codecName;
                var8.name = var9;
                var0.codec = var8;
                var0.bytesReceived = var7;
                var0.packetsReceived = var1;
                var1 = var3.rtpStats;
                var7 = var1.packetsLost;
                var1 = null;
                if (!(var1 == var7)) {
                    _fun32604_ip = 279;
                    continue _fun32604
                }
            case 267:
                var8 = var3.rtcpStats;
                var7 = var8.packetsLost;
            case 279:
                var0.packetsLost = var7;
                var7 = var3.rtcpStats;
                var7 = var7.fractionLost;
                var0.fractionLost = var7;
                var7 = var3.totalBitrate;
                var0.bitrate = var7;
                var7 = var3.jitterBuffer;
                var0.jitterBuffer = var7;
                var7 = var3.currentDelay;
                var0.currentDelay = var7;
                var7 = var3.targetDelay;
                var0.targetDelay = var7;
                var7 = var3.minPlayoutDelay;
                var0.minPlayoutDelay = var7;
                var7 = var3.renderDelay;
                var0.renderDelay = var7;
                var7 = var3.decode;
                var0.averageDecodeTime = var7;
                var7 = {};
                var8 = var3.height;
                var7.height = var8;
                var8 = var3.width;
                var7.width = var8;
                var0.resolution = var7;
                var7 = var3.decoderImplementationName;
                var0.decoderImplementationName = var7;
                var7 = var3.framesDecoded;
                var0.framesDecoded = var7;
                var7 = var3.framesDropped;
                var0.framesDropped = var7;
                var7 = var3.framesDecodeErrors;
                var0.framesDecodeErrors = var7;
                var7 = var3.frameCounts;
                var8 = var7.keyFrames;
                var7 = var3.frameCounts;
                var7 = var7.deltaFrames;
                var7 = var8 + var7;
                var0.framesReceived = var7;
                var7 = var3.networkFramesDropped;
                var8 = var1 != var7;
                var6 = 0;
                if (!var8) {
                    _fun32604_ip = 500;
                    continue _fun32604
                }
            case 497:
                var6 = var7;
            case 500:
                var0.networkFramesDropped = var6;
                var6 = var3.frameCounts;
                var6 = var6.keyFrames;
                var0.keyFramesDecoded = var6;
                var6 = var3.decodeFrameRate;
                var0.frameRateDecode = var6;
                var6 = var3.networkFrameRate;
                var0.frameRateNetwork = var6;
                var6 = var3.renderFrameRate;
                var0.frameRateRender = var6;
                var6 = var3.rtcpStats;
                var6 = var6.firPackets;
                var0.firCount = var6;
                var6 = var3.rtcpStats;
                var6 = var6.nackPackets;
                var0.nackCount = var6;
                var6 = var3.rtcpStats;
                var6 = var6.pliPackets;
                var0.pliCount = var6;
                var6 = var3.qpSum;
                var0.qpSum = var6;
                var6 = var3.freezeCount;
                var0.freezeCount = var6;
                var6 = var3.pauseCount;
                var0.pauseCount = var6;
                var6 = var3.totalFreezesDuration;
                var0.totalFreezesDuration = var6;
                var6 = var3.totalPausesDuration;
                var0.totalPausesDuration = var6;
                var6 = var3.totalFramesDuration;
                var0.totalFramesDuration = var6;
                var6 = var3.sumOfSquaredFramesDurations;
                var0.sumOfSquaredFramesDurations = var6;
                var6 = var3.passthroughCount;
                var0.passthroughCount = var6;
                var6 = var3.decryptSuccessCount;
                var0.decryptSuccessCount = var6;
                var6 = var3.decryptFailureCount;
                var0.decryptFailureCount = var6;
                var6 = var3.decryptDuration;
                var0.decryptDuration = var6;
                var6 = var3.decryptAttempts;
                var0.decryptAttempts = var6;
                var6 = var3.decryptMissingKeyCount;
                var0.decryptMissingKeyCount = var6;
                var3 = var3.decryptInvalidNonceCount;
                var0.decryptInvalidNonceCount = var3;
                if (!(var1 == var5)) {
                    _fun32604_ip = 774;
                    continue _fun32604
                }
            case 770:
                var1 = {};
                _fun32604_ip = 818;
                continue _fun32604;
            case 774:
                var3 = _closure1_slot5;
                var2 = {};
                var6 = var5.videoJitterBuffer;
                var2.videoJitterBuffer = var6;
                var6 = var5.videoJitterDelay;
                var2.videoJitterDelay = var6;
                var5 = var5.videoJitterTarget;
                var2.videoJitterTarget = var5;
                var1 = var3.bind(var4)(var2);
            case 818:
                var18 = var0;
                var17 = var1;
                var1 = copyDataProperties(var18, var17);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/media-engine/native/transformStats.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: transformStats, environment: var1
        _fun32605: for (var _fun32605_ip = 0;;) switch (_fun32605_ip) {
            case 0:
                var3 = arg1;
                var8 = arg2;
                var _closure2_slot0 = var8;
                var0 = arg3;
                var _closure2_slot1 = var0;
                var5 = null;
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var5;
                var2 = 'string';
                var1 = typeof var3;
                var0 = var3;
                if (!(var2 === var1)) {
                    _fun32605_ip = 62;
                    continue _fun32605
                }
            case 43:
                var1 = global;
                var2 = var1.JSON;
                var1 = var2.parse;
                var0 = var1.bind(var2)(var3);
            case 62:
                var2 = new Array(0);
                var _closure2_slot4 = var2;
                var1 = var0.outbound;
                if (!(var5 != var1)) {
                    _fun32605_ip = 658;
                    continue _fun32605
                }
            case 83:
                var1 = var0.outbound;
                var9 = var1.audio;
                var6 = var1.video;
                var4 = var1.videos;
                if (!(var5 != var9)) {
                    _fun32605_ip = 573;
                    continue _fun32605
                }
            case 114:
                var1 = _closure2_slot3;
                var1 = var5 != var1;
                var15 = 0;
                var3 = 0;
                if (!var1) {
                    _fun32605_ip = 133;
                    continue _fun32605
                }
            case 129:
                var3 = _closure2_slot3;
            case 133:
                var1 = var9.bytesSent;
                var1 = var3 + var1;
                _closure2_slot3 = var1;
                var3 = var2.push;
                var1 = {};
                var10 = 'audio';
                var1.type = var10;
                var10 = var9.ssrc;
                var1.ssrc = var10;
                var13 = _closure1_slot0;
                var11 = _closure1_slot1;
                var14 = var11[var15];
                var12 = undefined;
                var18 = var13.bind(var12)(var14);
                var17 = var18.formatSinkWantStat;
                var16 = var9.ssrc;
                var14 = false;
                var14 = var17.bind(var18)(var8, var16, var14);
                var1.sinkWant = var14;
                var11 = var11[var15];
                var14 = var13.bind(var12)(var11);
                var13 = var14.formatSinkWantAsInt;
                var11 = var9.ssrc;
                var11 = var13.bind(var14)(var8, var11);
                var1.sinkWantAsInt = var11;
                var11 = {};
                var13 = var9.codecPayloadType;
                var11.id = var13;
                var13 = var9.codecName;
                var11.name = var13;
                var1.codec = var11;
                var11 = var9.bytesSent;
                var1.bytesSent = var11;
                var11 = var9.packetsSent;
                var1.packetsSent = var11;
                var11 = global;
                var14 = var11.Math;
                var13 = var14.max;
                var11 = var9.packetsLost;
                var11 = var13.bind(var14)(var15, var11);
                var1.packetsLost = var11;
                var13 = var9.fractionLost;
                var11 = 100;
                var11 = var11 * var13;
                var1.fractionLost = var11;
                var11 = _closure1_slot2;
                var10 = var9.audioLevel;
                var10 = var11.bind(var12)(var10);
                var1.audioLevel = var10;
                var10 = var9.mediaBitrate;
                var1.bitrate = var10;
                var10 = var9.targetMediaBitrate;
                var1.bitrateTarget = var10;
                var10 = var9.speaking;
                var1.audioDetected = var10;
                var10 = var9.framesCaptured;
                var1.framesCaptured = var10;
                var10 = var9.framesRendered;
                var1.framesRendered = var10;
                var10 = var9.noiseCancellerFrames;
                var1.noiseCancellerFrames = var10;
                var10 = var9.noiseCancellerProcessTime;
                var1.noiseCancellerProcessTime = var10;
                var10 = var9.voiceActivityDetectorProcessTime;
                var1.voiceActivityDetectorProcessTime = var10;
                var10 = var9.passthroughCount;
                var1.passthroughCount = var10;
                var10 = var9.encryptSuccessCount;
                var1.encryptSuccessCount = var10;
                var10 = var9.encryptFailureCount;
                var1.encryptFailureCount = var10;
                var10 = var9.encryptDuration;
                var1.encryptDuration = var10;
                var10 = var9.encryptAttempts;
                var1.encryptAttempts = var10;
                var10 = var9.encryptMaxAttempts;
                var1.encryptMaxAttempts = var10;
                var10 = var9.encryptMissingKeyCount;
                var1.encryptMissingKeyCount = var10;
                var10 = var9.pttQueueLatencyMicrosSamples;
                var1.pttQueueLatencyMicrosSamples = var10;
                var10 = var9.sampleRateMismatchPercent;
                var1.sampleRateMismatchPercent = var10;
                var9 = var9.currentSampleRate;
                var1.currentSampleRate = var9;
                var1 = var3.bind(var2)(var1);
            case 573:
                if (!(var5 == var4)) {
                    _fun32605_ip = 643;
                    continue _fun32605
                }
            case 577:
                if (!(var5 != var6)) {
                    _fun32605_ip = 658;
                    continue _fun32605
                }
            case 581:
                var3 = _closure1_slot6;
                var1 = undefined;
                var3 = var3.bind(var1)(var6, var8);
                if (!(var5 != var3)) {
                    _fun32605_ip = 658;
                    continue _fun32605
                }
            case 600:
                var1 = _closure2_slot3;
                var1 = var5 != var1;
                var6 = 0;
                if (!var1) {
                    _fun32605_ip = 617;
                    continue _fun32605
                }
            case 613:
                var6 = _closure2_slot3;
            case 617:
                var1 = var3.bytesSent;
                var1 = var6 + var1;
                _closure2_slot3 = var1;
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
                _fun32605_ip = 658;
                continue _fun32605;
            case 643:
                var3 = var4.forEach;
                var1 = function(arg0) { // Environment: var7
                    _fun32606: for (var _fun32606_ip = 0;;) switch (_fun32606_ip) {
                        case 0:
                            var4 = _closure1_slot6;
                            var3 = _closure2_slot0;
                            var0 = undefined;
                            var2 = arg0;
                            var3 = var4.bind(var0)(var2, var3);
                            var4 = null;
                            if (!(var4 != var3)) {
                                _fun32606_ip = 76;
                                continue _fun32606
                            }
                        case 31:
                            var2 = _closure2_slot3;
                            var2 = var4 != var2;
                            var4 = 0;
                            if (!var2) {
                                _fun32606_ip = 48;
                                continue _fun32606
                            }
                        case 44:
                            var4 = _closure2_slot3;
                        case 48:
                            var2 = var3.bytesSent;
                            var2 = var4 + var2;
                            _closure2_slot3 = var2;
                            var2 = _closure2_slot4;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                        case 76:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1);
            case 658:
                var3 = {};
                var _closure2_slot5 = var3;
                var1 = var0.inbound;
                if (!(var5 != var1)) {
                    _fun32605_ip = 695;
                    continue _fun32605
                }
            case 674:
                var6 = var0.inbound;
                var4 = var6.forEach;
                var1 = function(arg0) { // Environment: var7
                    _fun32607: for (var _fun32607_ip = 0;;) switch (_fun32607_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = var1.id;
                            var _closure3_slot0 = var3;
                            var9 = var1.audio;
                            var5 = var1.video;
                            var2 = var1.videos;
                            var11 = var1.playout;
                            var _closure3_slot1 = var11;
                            var6 = _closure2_slot5;
                            var4 = new Array(0);
                            var6[var3] = var4;
                            var7 = null;
                            if (!(var7 != var9)) {
                                _fun32607_ip = 800;
                                continue _fun32607
                            }
                        case 68:
                            var4 = _closure2_slot2;
                            var4 = var7 != var4;
                            var15 = 0;
                            var6 = 0;
                            if (!var4) {
                                _fun32607_ip = 87;
                                continue _fun32607
                            }
                        case 83:
                            var6 = _closure2_slot2;
                        case 87:
                            var4 = var9.bytesReceived;
                            var4 = var6 + var4;
                            _closure2_slot2 = var4;
                            var4 = _closure2_slot5;
                            var8 = var4[var3];
                            var6 = var8.push;
                            var4 = {};
                            var10 = 'audio';
                            var4.type = var10;
                            var10 = var9.ssrc;
                            var4.ssrc = var10;
                            var14 = _closure1_slot0;
                            var12 = _closure1_slot1;
                            var16 = var12[var15];
                            var13 = undefined;
                            var20 = var14.bind(var13)(var16);
                            var19 = var20.formatSinkWantStat;
                            var16 = _closure2_slot0;
                            var18 = var9.ssrc;
                            var17 = false;
                            var17 = var19.bind(var20)(var16, var18, var17);
                            var4.sinkWant = var17;
                            var12 = var12[var15];
                            var15 = var14.bind(var13)(var12);
                            var14 = var15.formatSinkWantAsInt;
                            var12 = var9.ssrc;
                            var12 = var14.bind(var15)(var16, var12);
                            var4.sinkWantAsInt = var12;
                            var12 = {};
                            var14 = var9.codecPayloadType;
                            var12.id = var14;
                            var14 = var9.codecName;
                            var12.name = var14;
                            var4.codec = var12;
                            var12 = var9.bytesReceived;
                            var4.bytesReceived = var12;
                            var12 = var9.packetsReceived;
                            var4.packetsReceived = var12;
                            var12 = var9.packetsLost;
                            var4.packetsLost = var12;
                            var12 = var9.fractionLost;
                            var14 = 100;
                            var12 = var14 * var12;
                            var4.fractionLost = var12;
                            var12 = var9.fecPacketsReceived;
                            var4.fecPacketsReceived = var12;
                            var12 = var9.fecPacketsDiscarded;
                            var4.fecPacketsDiscarded = var12;
                            var15 = _closure1_slot2;
                            var12 = var9.audioLevel;
                            var12 = var15.bind(var13)(var12);
                            var4.audioLevel = var12;
                            var12 = var9.speaking;
                            var4.audioDetected = var12;
                            var12 = var9.currentSampleRate;
                            var4.currentSampleRate = var12;
                            var12 = var9.jitter;
                            var4.jitter = var12;
                            var12 = var9.jitterBuffer;
                            var4.jitterBuffer = var12;
                            var12 = var9.jitterBufferPreferred;
                            var4.jitterBufferPreferred = var12;
                            var12 = var9.decodingCNG;
                            var4.decodingCNG = var12;
                            var12 = var9.decodingMutedOutput;
                            var4.decodingMutedOutput = var12;
                            var12 = var9.decodingNormal;
                            var4.decodingNormal = var12;
                            var12 = var9.decodingPLC;
                            var4.decodingPLC = var12;
                            var12 = var9.decodingPLCCNG;
                            var4.decodingPLCCNG = var12;
                            var12 = var9.nackCount;
                            var4.nackCount = var12;
                            var12 = var9.accelerateRate;
                            var12 = var14 * var12;
                            var4.accelerateRate = var12;
                            var12 = var9.expandRate;
                            var12 = var14 * var12;
                            var4.expandRate = var12;
                            var12 = var9.preemptiveExpandRate;
                            var12 = var14 * var12;
                            var4.preemptiveExpandRate = var12;
                            var12 = var9.speechExpandRate;
                            var12 = var14 * var12;
                            var4.speechExpandRate = var12;
                            var12 = var9.secondaryDecodedRate;
                            var12 = var14 * var12;
                            var4.secondaryDecodedRate = var12;
                            var12 = var9.opSilence;
                            var4.opSilence = var12;
                            var12 = var9.opNormal;
                            var4.opNormal = var12;
                            var12 = var9.opMerge;
                            var4.opMerge = var12;
                            var12 = var9.opExpand;
                            var4.opExpand = var12;
                            var12 = var9.opAccelerate;
                            var4.opAccelerate = var12;
                            var12 = var9.opPreemptiveExpand;
                            var4.opPreemptiveExpand = var12;
                            var12 = var9.opCNG;
                            var4.opCNG = var12;
                            var12 = var9.delayEstimate;
                            var4.delayEstimate = var12;
                            var12 = var9.passthroughCount;
                            var4.passthroughCount = var12;
                            var12 = var9.decryptSuccessCount;
                            var4.decryptSuccessCount = var12;
                            var12 = var9.decryptFailureCount;
                            var4.decryptFailureCount = var12;
                            var12 = var9.decryptDuration;
                            var4.decryptDuration = var12;
                            var12 = var9.decryptAttempts;
                            var4.decryptAttempts = var12;
                            var12 = var9.decryptMissingKeyCount;
                            var4.decryptMissingKeyCount = var12;
                            var9 = var9.decryptInvalidNonceCount;
                            var4.decryptInvalidNonceCount = var9;
                            if (!(var7 == var11)) {
                                _fun32607_ip = 708;
                                continue _fun32607
                            }
                        case 704:
                            var9 = {};
                            _fun32607_ip = 785;
                            continue _fun32607;
                        case 708:
                            var12 = _closure1_slot5;
                            var10 = {};
                            var14 = var11.audioJitterBuffer;
                            var10.audioJitterBuffer = var14;
                            var14 = var11.audioJitterDelay;
                            var10.audioJitterDelay = var14;
                            var14 = var11.audioJitterTarget;
                            var10.audioJitterTarget = var14;
                            var14 = var11.audioPlayoutUnderruns;
                            var10.audioPlayoutUnderruns = var14;
                            var14 = var11.relativeReceptionDelay;
                            var10.relativeReceptionDelay = var14;
                            var14 = var11.relativePlayoutDelay;
                            var10.relativePlayoutDelay = var14;
                            var9 = var12.bind(var13)(var10);
                        case 785:
                            var24 = var4;
                            var23 = var9;
                            var9 = copyDataProperties(var24, var23);
                            var4 = var6.bind(var8)(var4);
                        case 800:
                            if (!(var7 == var2)) {
                                _fun32607_ip = 901;
                                continue _fun32607
                            }
                        case 804:
                            if (!(var7 != var5)) {
                                _fun32607_ip = 916;
                                continue _fun32607
                            }
                        case 808:
                            var10 = _closure1_slot7;
                            var23 = _closure2_slot0;
                            var22 = _closure2_slot1;
                            var8 = undefined;
                            var25 = undefined;
                            var24 = var5;
                            var21 = var11;
                            var4 = var25[var10](var24, var23, var22, var21, var20);
                            if (!(var7 != var4)) {
                                _fun32607_ip = 916;
                                continue _fun32607
                            }
                        case 841:
                            var6 = _closure1_slot3;
                            var5 = var5.rtpStats;
                            var6 = var6.bind(var8)(var5);
                            var5 = _closure2_slot2;
                            var7 = var7 != var5;
                            var5 = 0;
                            if (!var7) {
                                _fun32607_ip = 873;
                                continue _fun32607
                            }
                        case 869:
                            var5 = _closure2_slot2;
                        case 873:
                            var5 = var5 + var6;
                            _closure2_slot2 = var5;
                            var1 = _closure2_slot5;
                            var3 = var1[var3];
                            var1 = var3.push;
                            var1 = var1.bind(var3)(var4);
                            _fun32607_ip = 916;
                            continue _fun32607;
                        case 901:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun32608: for (var _fun32608_ip = 0;;) switch (_fun32608_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var8 = _closure1_slot7;
                                        var11 = _closure2_slot0;
                                        var10 = _closure2_slot1;
                                        var9 = _closure3_slot1;
                                        var0 = undefined;
                                        var13 = undefined;
                                        var12 = var4;
                                        var3 = var13[var8](var12, var11, var10, var9, var8);
                                        var6 = null;
                                        if (!(var6 != var3)) {
                                            _fun32608_ip = 107;
                                            continue _fun32608
                                        }
                                    case 45:
                                        var5 = _closure1_slot3;
                                        var4 = var4.rtpStats;
                                        var5 = var5.bind(var0)(var4);
                                        var4 = _closure2_slot2;
                                        var6 = var6 != var4;
                                        var4 = 0;
                                        if (!var6) {
                                            _fun32608_ip = 77;
                                            continue _fun32608
                                        }
                                    case 73:
                                        var4 = _closure2_slot2;
                                    case 77:
                                        var4 = var4 + var5;
                                        _closure2_slot2 = var4;
                                        var2 = _closure2_slot5;
                                        var1 = _closure3_slot0;
                                        var2 = var2[var1];
                                        var1 = var2.push;
                                        var1 = var1.bind(var2)(var3);
                                    case 107:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 916:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var6)(var1);
            case 695:
                var9 = var0.transport;
                var4 = var0.clips;
                var8 = {};
                if (!(var5 != var9)) {
                    _fun32605_ip = 916;
                    continue _fun32605
                }
            case 716:
                var1 = var9.sendBandwidth;
                var8.availableOutgoingBitrate = var1;
                var1 = var9.rtt;
                var8.ping = var1;
                var1 = var9.decryptionFailures;
                var8.decryptionFailures = var1;
                var1 = var9.routingFailures;
                if (!(var5 != var1)) {
                    _fun32605_ip = 776;
                    continue _fun32605
                }
            case 764:
                var1 = var9.routingFailures;
                var8.routingFailures = var1;
            case 776:
                var1 = var9.localAddress;
                var8.localAddress = var1;
                var1 = var9.pacerDelay;
                var8.pacerDelay = var1;
                var1 = var9.receiverReports;
                if (!(var5 != var1)) {
                    _fun32605_ip = 822;
                    continue _fun32605
                }
            case 810:
                var1 = var9.receiverReports;
                var8.receiverReports = var1;
            case 822:
                var1 = var9.receiverBitrateEstimate;
                var8.receiverBitrateEstimate = var1;
                var1 = var9.outboundBitrateEstimate;
                var8.outboundBitrateEstimate = var1;
                var6 = var9.inboundBitrateEstimate;
                var10 = var5 != var6;
                var1 = 0;
                if (!var10) {
                    _fun32605_ip = 864;
                    continue _fun32605
                }
            case 861:
                var1 = var6;
            case 864:
                var8.inboundBitrateEstimate = var1;
                var1 = var9.packetsReceived;
                var8.packetsReceived = var1;
                var1 = var9.packetsSent;
                var8.packetsSent = var1;
                var1 = var9.secureFramesProtocolVersion;
                if (!(var5 != var1)) {
                    _fun32605_ip = 916;
                    continue _fun32605
                }
            case 904:
                var1 = var9.secureFramesProtocolVersion;
                var8.secureFramesProtocolVersion = var1;
            case 916:
                var10 = var5 == var9;
                var6 = undefined;
                if (var10) {
                    _fun32605_ip = 931;
                    continue _fun32605
                }
            case 925:
                var6 = var9.bytesReceived;
            case 931:
                var6 = var5 != var6;
                if (var6) {
                    _fun32605_ip = 978;
                    continue _fun32605
                }
            case 938:
                var10 = _closure2_slot2;
                var10 = var5 != var10;
                if (!var10) {
                    _fun32605_ip = 975;
                    continue _fun32605
                }
            case 949:
                var11 = global;
                var13 = var11.Number;
                var12 = var13.isNaN;
                var11 = _closure2_slot2;
                var11 = var12.bind(var13)(var11);
                var10 = !var11;
            case 975:
                var6 = var10;
            case 978:
                if (!var6) {
                    _fun32605_ip = 1022;
                    continue _fun32605
                }
            case 981:
                var6 = var5 == var9;
                var10 = undefined;
                if (var6) {
                    _fun32605_ip = 996;
                    continue _fun32605
                }
            case 990:
                var10 = var9.bytesReceived;
            case 996:
                if (!(var5 == var10)) {
                    _fun32605_ip = 1004;
                    continue _fun32605
                }
            case 1000:
                var10 = _closure2_slot2;
            case 1004:
                var11 = var5 != var10;
                var6 = undefined;
                if (!var11) {
                    _fun32605_ip = 1016;
                    continue _fun32605
                }
            case 1013:
                var6 = var10;
            case 1016:
                var8.bytesReceived = var6;
            case 1022:
                var10 = var5 == var9;
                var6 = undefined;
                if (var10) {
                    _fun32605_ip = 1037;
                    continue _fun32605
                }
            case 1031:
                var6 = var9.bytesSent;
            case 1037:
                var6 = var5 != var6;
                if (var6) {
                    _fun32605_ip = 1084;
                    continue _fun32605
                }
            case 1044:
                var10 = _closure2_slot3;
                var10 = var5 != var10;
                if (!var10) {
                    _fun32605_ip = 1081;
                    continue _fun32605
                }
            case 1055:
                var11 = global;
                var13 = var11.Number;
                var12 = var13.isNaN;
                var11 = _closure2_slot3;
                var11 = var12.bind(var13)(var11);
                var10 = !var11;
            case 1081:
                var6 = var10;
            case 1084:
                if (!var6) {
                    _fun32605_ip = 1128;
                    continue _fun32605
                }
            case 1087:
                var10 = var5 == var9;
                var6 = undefined;
                if (var10) {
                    _fun32605_ip = 1102;
                    continue _fun32605
                }
            case 1096:
                var6 = var9.bytesSent;
            case 1102:
                if (!(var5 == var6)) {
                    _fun32605_ip = 1110;
                    continue _fun32605
                }
            case 1106:
                var6 = _closure2_slot3;
            case 1110:
                var7 = var5 != var6;
                var1 = undefined;
                if (!var7) {
                    _fun32605_ip = 1122;
                    continue _fun32605
                }
            case 1119:
                var1 = var6;
            case 1122:
                var8.bytesSent = var1;
            case 1128:
                var6 = var0.screenshare;
                var7 = var0.camera;
                var1 = var0.audioDevice;
                var0 = {};
                var9 = arg0;
                var0.mediaEngineConnectionId = var9;
                var0.transport = var8;
                var0.screenshare = var6;
                var6 = var5 != var7;
                var5 = null;
                if (!var6) {
                    _fun32605_ip = 1224;
                    continue _fun32605
                }
            case 1175:
                var6 = {};
                var8 = var7.capturedFramesDropped;
                var6.capturedFramesDropped = var8;
                var8 = var7.capturedFramesCount;
                var6.capturedFramesCount = var8;
                var8 = var7.capturedFramesMean;
                var6.capturedFramesMean = var8;
                var7 = var7.capturedFramesStdev;
                var6.capturedFramesStdev = var7;
                var5 = var6;
            case 1224:
                var0.camera = var5;
                var0.clips = var4;
                var0.audioDevice = var1;
                var1 = {};
                var1.inbound = var3;
                var1.outbound = var2;
                var0.rtp = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3642, 2]);