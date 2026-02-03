// lib/VideoQualityStats.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var13 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var14;
    var0 = function() {
        _fun93916: for (var _fun93916_ip = 0;;) switch (_fun93916_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun93916_ip = 76;
                continue _fun93916;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var7 = function arg0() {
        _fun93919: for (var _fun93919_ip = 0;;) switch (_fun93919_ip) {
            case 0:
                var5 = arg0;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun93919_ip = 109;
                    continue _fun93919
                }
            case 9:
                var0 = global;
                var3 = var0.Object;
                var2 = var3.keys;
                var1 = _closure1_slot16;
                var4 = var2.bind(var3)(var1);
                var1 = var4.length;
                var3 = 0;
                var1 = var3 < var1;
                if (!var1) {
                    _fun93919_ip = 87;
                    continue _fun93919
                }
            case 48:
                var1 = var4[var3];
                var2 = var5.toLowerCase;
                var6 = var2.bind(var5)();
                var2 = var6.includes;
                var2 = var2.bind(var6)(var1);
                if (var2) {
                    _fun93919_ip = 99;
                    continue _fun93919
                }
            case 75:
                var3 = var3 + 1;
                var2 = var4.length;
                if (var3 < var2) {
                    _fun93919_ip = 48;
                    continue _fun93919
                }
            case 87:
                var2 = _closure1_slot14;
                var2 = var2.UNCATEGORIZED;
                return var2;
            case 99:
                var0 = _closure1_slot16;
                var0 = var0[var1];
                return var0;
            case 109:
                var0 = _closure1_slot14;
                var0 = var0.UNKNOWN;
                return var0;
        }
    };
    var _closure1_slot20 = var7;
    var6 = function arg0() {
        _fun93920: for (var _fun93920_ip = 0;;) switch (_fun93920_ip) {
            case 0:
                var5 = arg0;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun93920_ip = 109;
                    continue _fun93920
                }
            case 9:
                var0 = global;
                var3 = var0.Object;
                var2 = var3.keys;
                var1 = _closure1_slot17;
                var4 = var2.bind(var3)(var1);
                var1 = var4.length;
                var3 = 0;
                var1 = var3 < var1;
                if (!var1) {
                    _fun93920_ip = 87;
                    continue _fun93920
                }
            case 48:
                var1 = var4[var3];
                var2 = var5.toLowerCase;
                var6 = var2.bind(var5)();
                var2 = var6.includes;
                var2 = var2.bind(var6)(var1);
                if (var2) {
                    _fun93920_ip = 99;
                    continue _fun93920
                }
            case 75:
                var3 = var3 + 1;
                var2 = var4.length;
                if (var3 < var2) {
                    _fun93920_ip = 48;
                    continue _fun93920
                }
            case 87:
                var2 = _closure1_slot15;
                var2 = var2.UNCATEGORIZED;
                return var2;
            case 99:
                var0 = _closure1_slot17;
                var0 = var0[var1];
                return var0;
            case 109:
                var0 = _closure1_slot15;
                var0 = var0.UNKNOWN;
                return var0;
        }
    };
    var _closure1_slot21 = var6;
    var5 = function arg0() {
        _fun93921: for (var _fun93921_ip = 0;;) switch (_fun93921_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun93921_ip = 162;
                    continue _fun93921
                }
            case 12:
                var0 = var1.toUpperCase;
                var1 = var0.bind(var1)();
                var0 = 'H264';
                if (!(var0 !== var1)) {
                    _fun93921_ip = 147;
                    continue _fun93921
                }
            case 30:
                var0 = 'H265';
                if (!(var0 !== var1)) {
                    _fun93921_ip = 132;
                    continue _fun93921
                }
            case 38:
                var0 = 'VP8';
                if (!(var0 !== var1)) {
                    _fun93921_ip = 117;
                    continue _fun93921
                }
            case 46:
                var0 = 'VP9';
                if (!(var0 !== var1)) {
                    _fun93921_ip = 102;
                    continue _fun93921
                }
            case 54:
                var0 = 'AV1';
                if (!(var0 !== var1)) {
                    _fun93921_ip = 87;
                    continue _fun93921
                }
            case 62:
                var0 = 'AV1X';
                if (!(var0 !== var1)) {
                    _fun93921_ip = 87;
                    continue _fun93921
                }
            case 72:
                var0 = _closure1_slot13;
                var0 = var0.UNKNOWN;
                _fun93921_ip = 100;
                continue _fun93921;
            case 87:
                var1 = _closure1_slot13;
                var0 = var1.AV1;
            case 100:
                _fun93921_ip = 115;
                continue _fun93921;
            case 102:
                var1 = _closure1_slot13;
                var0 = var1.VP9;
            case 115:
                _fun93921_ip = 130;
                continue _fun93921;
            case 117:
                var1 = _closure1_slot13;
                var0 = var1.VP8;
            case 130:
                _fun93921_ip = 145;
                continue _fun93921;
            case 132:
                var1 = _closure1_slot13;
                var0 = var1.H265;
            case 145:
                _fun93921_ip = 160;
                continue _fun93921;
            case 147:
                var1 = _closure1_slot13;
                var0 = var1.H264;
            case 160:
                _fun93921_ip = 175;
                continue _fun93921;
            case 162:
                var1 = _closure1_slot13;
                var0 = var1.UNKNOWN;
            case 175:
                return var0;
        }
    };
    var _closure1_slot22 = var5;
    var3 = global;
    var10 = var3.Object;
    var8 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var10)(var2, var0, var4);
    var15 = 0;
    var4 = var14[var15];
    var0 = undefined;
    var4 = var9.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var14[var12];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var14[var4];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var14[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var14[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var14[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = [0, 500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000];
    var _closure1_slot9 = var8;
    var8 = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
    var _closure1_slot10 = var8;
    var8 = [720, 480, 360];
    var _closure1_slot11 = var8;
    var8 = ['framesCodec', 'framesNetwork', 'packets', 'packetsLost', 'framesDropped', 'framesCodecError', 'bytes', 'nackCount', 'pliCount', 'qpSum', 'freezeCount', 'pauseCount', 'totalFreezesDuration', 'totalPausesDuration', 'totalFramesDuration', 'keyframes', 'passthroughCount', 'cryptorSuccessCount', 'cryptorFailureCount', 'cryptorDuration', 'cryptorAttempts', 'cryptorMissingKeyCount', 'cryptorInvalidNonceCount', 'qualityDecodeErrors', 'qualityDecoderReboots', 'qualityScoreErrors', 'qualityFrameDrops', 'qualitySizeMismatches'];
    var _closure1_slot12 = var8;
    var11 = {};
    var8 = 'H264';
    var11.H264 = var8;
    var8 = 'H265';
    var11.H265 = var8;
    var8 = 'VP8';
    var11.VP8 = var8;
    var8 = 'VP9';
    var11.VP9 = var8;
    var8 = 'AV1';
    var11.AV1 = var8;
    var8 = 'UNKNOWN';
    var11.UNKNOWN = var8;
    var _closure1_slot13 = var11;
    var10 = {};
    var8 = 'nvidia_cuda';
    var10.NVIDIA_CUDA = var8;
    var8 = 'nvidia_direct_3d';
    var10.NVIDIA_DIRECT_3D = var8;
    var8 = 'openh264';
    var10.OPENH264 = var8;
    var21 = 'videotoolbox';
    var10.VIDEOTOOLBOX = var21;
    var8 = 'amd_direct_3d';
    var10.AMD_DIRECT_3D = var8;
    var8 = 'amd_vaapi';
    var10.AMD_VAAPI = var8;
    var8 = 'intel';
    var10.INTEL = var8;
    var8 = 'intel_direct_3d';
    var10.INTEL_DIRECT_3D = var8;
    var20 = 'vp8_libvpx';
    var10.VP8_LIBVPX = var20;
    var19 = 'exynos';
    var10.EXYNOS = var19;
    var18 = 'qualcomm';
    var10.QUALCOMM = var18;
    var17 = 'mediatek';
    var10.MEDIATEK = var17;
    var8 = 'wmf_sw';
    var10.WMF_SW = var8;
    var8 = 'wmf_hw';
    var10.WMF_HW = var8;
    var8 = 'wmf_direct_3d';
    var10.WMF_DIRECT_3D = var8;
    var16 = 'uncategorized';
    var10.UNCATEGORIZED = var16;
    var8 = 'unknown';
    var10.UNKNOWN = var8;
    var _closure1_slot14 = var10;
    var9 = {};
    var9.VIDEOTOOLBOX = var21;
    var9.VP8_LIBVPX = var20;
    var20 = 'electron';
    var9.ELECTRON = var20;
    var20 = 'ffmpeg';
    var9.FFMPEG = var20;
    var20 = 'dav1d';
    var9.DAV1D = var20;
    var20 = 'WebRTC';
    var9.WEBRTC = var20;
    var9.EXYNOS = var19;
    var9.QUALCOMM = var18;
    var9.MEDIATEK = var17;
    var9.UNCATEGORIZED = var16;
    var9.UNKNOWN = var8;
    var _closure1_slot15 = var9;
    var17 = var3.Object;
    var16 = var17.freeze;
    var8 = {};
    var18 = var10.NVIDIA_CUDA;
    var8['nvidia: cuda'] = var18;
    var18 = var10.NVIDIA_DIRECT_3D;
    var8['nvidia: direct3d'] = var18;
    var18 = var10.AMD_DIRECT_3D;
    var8['amd: direct3d'] = var18;
    var18 = var10.AMD_VAAPI;
    var8['amd: vaapi'] = var18;
    var18 = var10.INTEL_DIRECT_3D;
    var8['intel: direct3d'] = var18;
    var18 = var10.INTEL;
    var8.intel = var18;
    var18 = var10.VIDEOTOOLBOX;
    var8.videotoolbox = var18;
    var18 = var10.OPENH264;
    var8.openh264 = var18;
    var18 = var10.VP8_LIBVPX;
    var8.libvpx = var18;
    var18 = var10.EXYNOS;
    var8['c2.exynos'] = var18;
    var18 = var10.EXYNOS;
    var8['omx.exynos'] = var18;
    var18 = var10.QUALCOMM;
    var8['c2.qti'] = var18;
    var18 = var10.QUALCOMM;
    var8['omx.qcom'] = var18;
    var18 = var10.MEDIATEK;
    var8['c2.mtk'] = var18;
    var18 = var10.MEDIATEK;
    var8['omx.mtk'] = var18;
    var18 = var10.WMF_SW;
    var8['mediafoundation sw'] = var18;
    var18 = var10.WMF_HW;
    var8['mediafoundation hw'] = var18;
    var18 = var10.WMF_DIRECT_3D;
    var8['mediafoundation direct3d'] = var18;
    var8 = var16.bind(var17)(var8);
    var _closure1_slot16 = var8;
    var16 = var3.Object;
    var8 = var16.freeze;
    var3 = {};
    var17 = var9.VIDEOTOOLBOX;
    var3.videotoolbox = var17;
    var17 = var9.VP8_LIBVPX;
    var3.libvpx = var17;
    var17 = var9.ELECTRON;
    var3.electron = var17;
    var17 = var9.FFMPEG;
    var3.ffmpeg = var17;
    var17 = var9.DAV1D;
    var3.dav1d = var17;
    var17 = var9.WEBRTC;
    var3.webrtc = var17;
    var17 = var9.EXYNOS;
    var3['c2.exynos'] = var17;
    var17 = var9.EXYNOS;
    var3['omx.exynos'] = var17;
    var17 = var9.QUALCOMM;
    var3['c2.qti'] = var17;
    var17 = var9.QUALCOMM;
    var3['omx.qcom'] = var17;
    var17 = var9.MEDIATEK;
    var3['c2.mtk'] = var17;
    var17 = var9.MEDIATEK;
    var3['omx.mtk'] = var17;
    var3 = var8.bind(var16)(var3);
    var _closure1_slot17 = var3;
    var8 = {};
    var8.None = var15;
    var3 = 'None';
    var8[var15] = var3;
    var8.ClientSideDisableVideo = var12;
    var3 = 'ClientSideDisableVideo';
    var8[var12] = var3;
    var8.SenderStopped = var4;
    var3 = 'SenderStopped';
    var8[var4] = var3;
    var _closure1_slot18 = var8;
    var3 = function() { // Environment: var1
        var4 = function() {
            var2 = this;
            var3 = _closure1_slot7;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = 0;
            var2.bytes = var1;
            var2.framesCodec = var1;
            var3 = null;
            var2.framesCodecError = var3;
            var2.framesNetwork = var1;
            var2.resolution = var1;
            var2.minorResolution = var1;
            var2.majorResolution = var1;
            var2.timestamp = var1;
            var2.packets = var1;
            var2.packetsLost = var1;
            var2.framesDropped = var1;
            var2.nackCount = var1;
            var2.pliCount = var1;
            var2.encoder = var3;
            var2.decoder = var3;
            var2.codecType = var3;
            var2.qpSum = var1;
            var2.freezeCount = var1;
            var2.pauseCount = var1;
            var2.totalFreezesDuration = var1;
            var2.totalPausesDuration = var1;
            var2.totalFramesDuration = var1;
            var2.vmafScore = var3;
            var2.psnrDb = var3;
            var2.outboundSinkWant = var3;
            var2.keyframes = var3;
            var2.framesDroppedRateLimiter = var3;
            var2.framesDroppedEncoderQueue = var3;
            var2.framesDroppedCongestionWindow = var3;
            var2.framesDroppedEncoder = var3;
            var2.passthroughCount = var1;
            var2.cryptorSuccessCount = var1;
            var2.cryptorFailureCount = var1;
            var2.cryptorDuration = var1;
            var2.cryptorAttempts = var1;
            var2.cryptorMaxAttempts = var1;
            var2.cryptorMissingKeyCount = var1;
            var2.cryptorInvalidNonceCount = var1;
            var2.qualityDecodeErrors = var1;
            var2.qualityDecoderReboots = var1;
            var2.qualityScoreErrors = var1;
            var2.qualityFrameDrops = var1;
            var2.qualitySizeMismatches = var1;
            var2.localWant = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot8;
        var0 = {};
        var2 = 'parseInboundStats';
        var0.key = var2;
        var2 = function arg0, arg1() {
            _fun93924: for (var _fun93924_ip = 0;;) switch (_fun93924_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure2_slot0;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var11 = var1;
                    var0 = new var11[var0](var10);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun93924_ip = 660;
                        continue _fun93924
                    }
                case 39:
                    var1 = var2.bytesReceived;
                    var0.bytes = var1;
                    var1 = var2.framesDecoded;
                    var0.framesCodec = var1;
                    var4 = var2.framesDecodeErrors;
                    var5 = var3 != var4;
                    var1 = null;
                    if (!var5) {
                        _fun93924_ip = 81;
                        continue _fun93924
                    }
                case 78:
                    var1 = var4;
                case 81:
                    var0.framesCodecError = var1;
                    var1 = var2.framesReceived;
                    var0.framesNetwork = var1;
                    var1 = var2.packetsReceived;
                    var0.packets = var1;
                    var1 = var2.packetsLost;
                    var0.packetsLost = var1;
                    var1 = var2.framesDropped;
                    var0.framesDropped = var1;
                    var1 = var2.resolution;
                    var5 = var3 != var1;
                    var1 = 0;
                    var4 = 0;
                    if (!var5) {
                        _fun93924_ip = 163;
                        continue _fun93924
                    }
                case 152:
                    var5 = var2.resolution;
                    var4 = var5.height;
                case 163:
                    var0.resolution = var4;
                    var4 = var2.resolution;
                    var5 = var3 != var4;
                    var4 = 0;
                    if (!var5) {
                        _fun93924_ip = 225;
                        continue _fun93924
                    }
                case 184:
                    var5 = global;
                    var8 = var5.Math;
                    var7 = var8.min;
                    var5 = var2.resolution;
                    var6 = var5.height;
                    var5 = var2.resolution;
                    var5 = var5.width;
                    var4 = var7.bind(var8)(var6, var5);
                case 225:
                    var0.minorResolution = var4;
                    var4 = var2.resolution;
                    var5 = var3 != var4;
                    var4 = 0;
                    if (!var5) {
                        _fun93924_ip = 287;
                        continue _fun93924
                    }
                case 246:
                    var5 = global;
                    var8 = var5.Math;
                    var7 = var8.max;
                    var5 = var2.resolution;
                    var6 = var5.height;
                    var5 = var2.resolution;
                    var5 = var5.width;
                    var4 = var7.bind(var8)(var6, var5);
                case 287:
                    var0.majorResolution = var4;
                    var4 = arg1;
                    var0.timestamp = var4;
                    var4 = var2.nackCount;
                    var0.nackCount = var4;
                    var4 = var2.pliCount;
                    var0.pliCount = var4;
                    var7 = _closure1_slot21;
                    var5 = var2.decoderImplementationName;
                    var6 = undefined;
                    var5 = var7.bind(var6)(var5);
                    var0.decoder = var5;
                    var5 = _closure1_slot22;
                    var4 = var2.codec;
                    var4 = var4.name;
                    var4 = var5.bind(var6)(var4);
                    var0.codecType = var4;
                    var0.qpSum = var1;
                    var4 = var2.freezeCount;
                    var0.freezeCount = var4;
                    var4 = var2.pauseCount;
                    var0.pauseCount = var4;
                    var4 = var2.totalFreezesDuration;
                    var0.totalFreezesDuration = var4;
                    var4 = var2.totalPausesDuration;
                    var0.totalPausesDuration = var4;
                    var4 = var2.totalFramesDuration;
                    var0.totalFramesDuration = var4;
                    var5 = var2.keyFramesDecoded;
                    var6 = var3 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun93924_ip = 462;
                        continue _fun93924
                    }
                case 459:
                    var4 = var5;
                case 462:
                    var0.keyframes = var4;
                    var5 = var2.passthroughCount;
                    var6 = var3 != var5;
                    var4 = 0;
                    if (!var6) {
                        _fun93924_ip = 486;
                        continue _fun93924
                    }
                case 483:
                    var4 = var5;
                case 486:
                    var0.passthroughCount = var4;
                    var5 = var2.decryptSuccessCount;
                    var6 = var3 != var5;
                    var4 = 0;
                    if (!var6) {
                        _fun93924_ip = 510;
                        continue _fun93924
                    }
                case 507:
                    var4 = var5;
                case 510:
                    var0.cryptorSuccessCount = var4;
                    var5 = var2.decryptFailureCount;
                    var6 = var3 != var5;
                    var4 = 0;
                    if (!var6) {
                        _fun93924_ip = 534;
                        continue _fun93924
                    }
                case 531:
                    var4 = var5;
                case 534:
                    var0.cryptorFailureCount = var4;
                    var5 = var2.decryptDuration;
                    var6 = var3 != var5;
                    var4 = 0;
                    if (!var6) {
                        _fun93924_ip = 558;
                        continue _fun93924
                    }
                case 555:
                    var4 = var5;
                case 558:
                    var0.cryptorDuration = var4;
                    var5 = var2.decryptAttempts;
                    var6 = var3 != var5;
                    var4 = 0;
                    if (!var6) {
                        _fun93924_ip = 582;
                        continue _fun93924
                    }
                case 579:
                    var4 = var5;
                case 582:
                    var0.cryptorAttempts = var4;
                    var5 = var2.decryptMissingKeyCount;
                    var6 = var3 != var5;
                    var4 = 0;
                    if (!var6) {
                        _fun93924_ip = 606;
                        continue _fun93924
                    }
                case 603:
                    var4 = var5;
                case 606:
                    var0.cryptorMissingKeyCount = var4;
                    var5 = var2.decryptInvalidNonceCount;
                    var6 = var3 != var5;
                    var4 = 0;
                    if (!var6) {
                        _fun93924_ip = 630;
                        continue _fun93924
                    }
                case 627:
                    var4 = var5;
                case 630:
                    var0.cryptorInvalidNonceCount = var4;
                    var2 = var2.sinkWantLocalAsInt;
                    var3 = var3 != var2;
                    var1 = 0;
                    if (!var3) {
                        _fun93924_ip = 654;
                        continue _fun93924
                    }
                case 651:
                    var1 = var2;
                case 654:
                    var0.localWant = var1;
                case 660:
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(2);
        var2[0] = var0;
        var0 = {};
        var5 = 'parseOutboundStats';
        var0.key = var5;
        var1 = function arg0, arg1() {
            _fun93925: for (var _fun93925_ip = 0;;) switch (_fun93925_ip) {
                case 0:
                    var4 = arg0;
                    var0 = _closure2_slot0;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var12 = var1;
                    var0 = new var12[var0](var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun93925_ip = 933;
                        continue _fun93925
                    }
                case 39:
                    var1 = {};
                    var2 = var4.bytesSent;
                    var1.bytes = var2;
                    var2 = var4.framesEncoded;
                    var1.framesCodec = var2;
                    var1.framesCodecError = var3;
                    var6 = var4.framesSent;
                    var7 = var3 != var6;
                    var2 = 0;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 88;
                        continue _fun93925
                    }
                case 85:
                    var5 = var6;
                case 88:
                    var1.framesNetwork = var5;
                    var5 = var4.packetsSent;
                    var1.packets = var5;
                    var6 = var4.packetsLost;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 122;
                        continue _fun93925
                    }
                case 119:
                    var5 = var6;
                case 122:
                    var1.packetsLost = var5;
                    var1.framesDropped = var2;
                    var5 = var4.resolution;
                    var6 = var3 != var5;
                    var5 = 0;
                    if (!var6) {
                        _fun93925_ip = 158;
                        continue _fun93925
                    }
                case 147:
                    var6 = var4.resolution;
                    var5 = var6.height;
                case 158:
                    var1.resolution = var5;
                    var5 = var4.resolution;
                    var6 = var3 != var5;
                    var5 = 0;
                    if (!var6) {
                        _fun93925_ip = 219;
                        continue _fun93925
                    }
                case 178:
                    var6 = global;
                    var9 = var6.Math;
                    var8 = var9.min;
                    var6 = var4.resolution;
                    var7 = var6.height;
                    var6 = var4.resolution;
                    var6 = var6.width;
                    var5 = var8.bind(var9)(var7, var6);
                case 219:
                    var1.minorResolution = var5;
                    var5 = var4.resolution;
                    var6 = var3 != var5;
                    var5 = 0;
                    if (!var6) {
                        _fun93925_ip = 280;
                        continue _fun93925
                    }
                case 239:
                    var6 = global;
                    var9 = var6.Math;
                    var8 = var9.max;
                    var6 = var4.resolution;
                    var7 = var6.height;
                    var6 = var4.resolution;
                    var6 = var6.width;
                    var5 = var8.bind(var9)(var7, var6);
                case 280:
                    var1.majorResolution = var5;
                    var5 = arg1;
                    var1.timestamp = var5;
                    var8 = _closure1_slot20;
                    var6 = var4.encoderImplementationName;
                    var7 = undefined;
                    var6 = var8.bind(var7)(var6);
                    var1.encoder = var6;
                    var1.decoder = var3;
                    var6 = _closure1_slot22;
                    var5 = var4.codec;
                    var5 = var5.name;
                    var5 = var6.bind(var7)(var5);
                    var1.codecType = var5;
                    var5 = var4.nackCount;
                    var1.nackCount = var5;
                    var5 = var4.pliCount;
                    var1.pliCount = var5;
                    var5 = var4.qpSum;
                    var1.qpSum = var5;
                    var6 = var4.freezeCount;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 399;
                        continue _fun93925
                    }
                case 396:
                    var5 = var6;
                case 399:
                    var1.freezeCount = var5;
                    var1.pauseCount = var2;
                    var6 = var4.totalFreezesDuration;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 427;
                        continue _fun93925
                    }
                case 424:
                    var5 = var6;
                case 427:
                    var1.totalFreezesDuration = var5;
                    var1.totalPausesDuration = var2;
                    var6 = var4.totalFramesDuration;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 455;
                        continue _fun93925
                    }
                case 452:
                    var5 = var6;
                case 455:
                    var1.totalFramesDuration = var5;
                    var6 = var4.sinkWantAsInt;
                    var7 = var3 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun93925_ip = 478;
                        continue _fun93925
                    }
                case 475:
                    var5 = var6;
                case 478:
                    var1.outboundSinkWant = var5;
                    var6 = var4.encoderQualityVmaf;
                    var7 = var3 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun93925_ip = 501;
                        continue _fun93925
                    }
                case 498:
                    var5 = var6;
                case 501:
                    var1.vmafScore = var5;
                    var6 = var4.qualityDecodeErrors;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 524;
                        continue _fun93925
                    }
                case 521:
                    var5 = var6;
                case 524:
                    var1.qualityDecodeErrors = var5;
                    var6 = var4.qualityDecoderReboots;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 547;
                        continue _fun93925
                    }
                case 544:
                    var5 = var6;
                case 547:
                    var1.qualityDecoderReboots = var5;
                    var6 = var4.qualityScoreErrors;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 570;
                        continue _fun93925
                    }
                case 567:
                    var5 = var6;
                case 570:
                    var1.qualityScoreErrors = var5;
                    var6 = var4.qualityFrameDrops;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 593;
                        continue _fun93925
                    }
                case 590:
                    var5 = var6;
                case 593:
                    var1.qualityFrameDrops = var5;
                    var6 = var4.qualitySizeMismatches;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 616;
                        continue _fun93925
                    }
                case 613:
                    var5 = var6;
                case 616:
                    var1.qualitySizeMismatches = var5;
                    var6 = var4.encoderQualityPsnr;
                    var7 = var3 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun93925_ip = 639;
                        continue _fun93925
                    }
                case 636:
                    var5 = var6;
                case 639:
                    var1.psnrDb = var5;
                    var6 = var4.keyFramesEncoded;
                    var7 = var3 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun93925_ip = 662;
                        continue _fun93925
                    }
                case 659:
                    var5 = var6;
                case 662:
                    var1.keyframes = var5;
                    var6 = var4.framesDroppedRateLimiter;
                    var7 = var3 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun93925_ip = 685;
                        continue _fun93925
                    }
                case 682:
                    var5 = var6;
                case 685:
                    var1.framesDroppedRateLimiter = var5;
                    var6 = var4.framesDroppedEncoderQueue;
                    var7 = var3 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun93925_ip = 708;
                        continue _fun93925
                    }
                case 705:
                    var5 = var6;
                case 708:
                    var1.framesDroppedEncoderQueue = var5;
                    var6 = var4.framesDroppedCongestionWindow;
                    var7 = var3 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun93925_ip = 731;
                        continue _fun93925
                    }
                case 728:
                    var5 = var6;
                case 731:
                    var1.framesDroppedCongestionWindow = var5;
                    var6 = var4.framesDroppedEncoder;
                    var7 = var3 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun93925_ip = 754;
                        continue _fun93925
                    }
                case 751:
                    var5 = var6;
                case 754:
                    var1.framesDroppedEncoder = var5;
                    var6 = var4.passthroughCount;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 777;
                        continue _fun93925
                    }
                case 774:
                    var5 = var6;
                case 777:
                    var1.passthroughCount = var5;
                    var6 = var4.encryptSuccessCount;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 800;
                        continue _fun93925
                    }
                case 797:
                    var5 = var6;
                case 800:
                    var1.cryptorSuccessCount = var5;
                    var6 = var4.encryptFailureCount;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 823;
                        continue _fun93925
                    }
                case 820:
                    var5 = var6;
                case 823:
                    var1.cryptorFailureCount = var5;
                    var6 = var4.encryptDuration;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 846;
                        continue _fun93925
                    }
                case 843:
                    var5 = var6;
                case 846:
                    var1.cryptorDuration = var5;
                    var6 = var4.encryptAttempts;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 869;
                        continue _fun93925
                    }
                case 866:
                    var5 = var6;
                case 869:
                    var1.cryptorAttempts = var5;
                    var6 = var4.encryptMaxAttempts;
                    var7 = var3 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93925_ip = 892;
                        continue _fun93925
                    }
                case 889:
                    var5 = var6;
                case 892:
                    var1.cryptorMaxAttempts = var5;
                    var4 = var4.encryptMissingKeyCount;
                    var5 = var3 != var4;
                    var3 = 0;
                    if (!var5) {
                        _fun93925_ip = 915;
                        continue _fun93925
                    }
                case 912:
                    var3 = var4;
                case 915:
                    var1.cryptorMissingKeyCount = var3;
                    var1.cryptorInvalidNonceCount = var2;
                    var1.localWant = var2;
                    var0 = var1;
                case 933:
                    return var0;
            }
        };
        var0.value = var1;
        var2[1] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var4 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot8;
        var2 = function arg0() {
            var6 = arg0;
            var4 = this;
            var _closure3_slot0 = var4;
            var5 = _closure1_slot7;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var5.bind(var0)(var4, var3);
            var3 = global;
            var7 = var3.Object;
            var5 = var7.fromEntries;
            var9 = var3.Object;
            var8 = var9.values;
            var3 = _closure1_slot15;
            var9 = var8.bind(var9)(var3);
            var8 = var9.map;
            var3 = function(arg0) { // Environment: var1
                var0 = new Array(2);
                var1 = arg0;
                var0[0] = var1;
                var1 = 0;
                var0[1] = var1;
                return var0;
            };
            var3 = var8.bind(var9)(var3);
            var3 = var5.bind(var7)(var3);
            var4.decoderBuckets = var3;
            var3 = 0;
            var5 = {
                'H264': 0,
                'H265': 0,
                'VP8': 0,
                'VP9': 0,
                'AV1': 0,
                'UNKNOWN': 0
            };
            var4.codecBuckets = var5;
            var5 = new Array(0);
            var4.statsWindow = var5;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = 6;
            var9 = var7[var8];
            var9 = var5.bind(var0)(var9);
            var9 = var9.Histogram;
            var10 = var9.prototype;
            var10 = Object.create(var10, {
                constructor: {
                    value: var9
                }
            });
            var13 = var10;
            var9 = new var13[var9](var12);
            var9 = var9 instanceof Object ? var9 : var10;
            var4.fpsHistogram = var9;
            var9 = var7[var8];
            var9 = var5.bind(var0)(var9);
            var9 = var9.Histogram;
            var10 = var9.prototype;
            var10 = Object.create(var10, {
                constructor: {
                    value: var9
                }
            });
            var13 = var10;
            var9 = new var13[var9](var12);
            var9 = var9 instanceof Object ? var9 : var10;
            var4.bitrateHistogram = var9;
            var9 = var7[var8];
            var9 = var5.bind(var0)(var9);
            var9 = var9.Histogram;
            var10 = var9.prototype;
            var10 = Object.create(var10, {
                constructor: {
                    value: var9
                }
            });
            var13 = var10;
            var9 = new var13[var9](var12);
            var9 = var9 instanceof Object ? var9 : var10;
            var4.inboundBitrateEstimateHistogram = var9;
            var9 = var7[var8];
            var9 = var5.bind(var0)(var9);
            var9 = var9.Histogram;
            var10 = var9.prototype;
            var10 = Object.create(var10, {
                constructor: {
                    value: var9
                }
            });
            var13 = var10;
            var9 = new var13[var9](var12);
            var9 = var9 instanceof Object ? var9 : var10;
            var4.resolutionHistogram = var9;
            var8 = var7[var8];
            var8 = var5.bind(var0)(var8);
            var8 = var8.Histogram;
            var9 = var8.prototype;
            var9 = Object.create(var9, {
                constructor: {
                    value: var8
                }
            });
            var13 = var9;
            var8 = new var13[var8](var12);
            var8 = var8 instanceof Object ? var8 : var9;
            var4.localWantHistogram = var8;
            var9 = _closure1_slot1;
            var8 = 7;
            var8 = var7[var8];
            var8 = var9.bind(var0)(var8);
            var9 = var8.prototype;
            var9 = Object.create(var9, {
                constructor: {
                    value: var8
                }
            });
            var13 = var9;
            var8 = new var13[var8](var12);
            var8 = var8 instanceof Object ? var8 : var9;
            var4.systemResources = var8;
            var8 = _closure1_slot13;
            var8 = var8.UNKNOWN;
            var4.decoderCodec = var8;
            var8 = {
                'framesCodec': 0,
                'framesNetwork': 0,
                'packets': 0,
                'packetsLost': 0,
                'framesDropped': 0,
                'framesCodecError': 0,
                'bytes': 0,
                'nackCount': 0,
                'pliCount': 0,
                'qpSum': 0,
                'freezeCount': 0,
                'pauseCount': 0,
                'totalFreezesDuration': 0,
                'totalPausesDuration': 0,
                'totalFramesDuration': 0,
                'keyframes': 0,
                'passthroughCount': 0,
                'cryptorSuccessCount': 0,
                'cryptorFailureCount': 0,
                'cryptorDuration': 0,
                'cryptorAttempts': 0,
                'cryptorMissingKeyCount': 0,
                'cryptorInvalidNonceCount': 0,
                'qualityDecodeErrors': 0,
                'qualityDecoderReboots': 0,
                'qualityScoreErrors': 0,
                'qualityFrameDrops': 0,
                'qualitySizeMismatches': 0
            };
            var4.aggregatedProperties = var8;
            var4.aggregationDuration = var3;
            var8 = {};
            var4.bitrateBuckets = var8;
            var8 = {};
            var4.fpsBuckets = var8;
            var8 = {};
            var4.resolutionBuckets = var8;
            var4.resolutionTotal = var3;
            var4.minorResolutionTotal = var3;
            var4.majorResolutionTotal = var3;
            var4.intervalTotal = var3;
            var4.cryptorMaxAttempts = var3;
            var3 = _closure1_slot18;
            var3 = var3.None;
            var4.videoStoppedReason = var3;
            var3 = var6.now;
            var3 = var3.bind(var6)();
            var4.startTime = var3;
            var3 = 8;
            var3 = var7[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.StopWatch;
            var5 = var3.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var3
                }
            });
            var13 = var5;
            var12 = var6;
            var3 = new var13[var3](var12, var11);
            var3 = var3 instanceof Object ? var3 : var5;
            var4.videoStoppedWatch = var3;
            var5 = _closure1_slot9;
            var4 = var5.forEach;
            var3 = function(arg0) { // Environment: var1
                var0 = _closure3_slot0;
                var2 = var0.bitrateBuckets;
                var1 = 0;
                var0 = arg0;
                var2[var0] = var1;
                var0 = undefined;
                return var0;
            };
            var3 = var4.bind(var5)(var3);
            var5 = _closure1_slot10;
            var4 = var5.forEach;
            var3 = function(arg0) { // Environment: var1
                var0 = _closure3_slot0;
                var2 = var0.fpsBuckets;
                var1 = 0;
                var0 = arg0;
                var2[var0] = var1;
                var0 = undefined;
                return var0;
            };
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot11;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var0 = _closure3_slot0;
                var2 = var0.resolutionBuckets;
                var1 = 0;
                var0 = arg0;
                var2[var0] = var1;
                var0 = undefined;
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'isVideoStopped';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var1 = var0.videoStoppedReason;
            var0 = _closure1_slot18;
            var0 = var0.None;
            var0 = var1 !== var0;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(8);
        var1[0] = var0;
        var0 = {};
        var5 = 'videoStoppedDuration';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.videoStoppedWatch;
            var0 = var1.elapsed;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'collectAggregationStats';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93934: for (var _fun93934_ip = 0;;) switch (_fun93934_ip) {
                case 0:
                    var4 = arg0;
                    var1 = arg1;
                    var2 = this;
                    var10 = _closure1_slot12;
                    var0 = var10.length;
                    var9 = 0;
                    var3 = var9 < var0;
                    var0 = undefined;
                    var8 = null;
                    var7 = 0;
                    var6 = undefined;
                    var5 = undefined;
                    if (!var3) {
                        _fun93934_ip = 115;
                        continue _fun93934
                    }
                case 40:
                    var14 = var10[var7];
                    var16 = var4[var14];
                    if (!(var8 !== var16)) {
                        _fun93934_ip = 103;
                        continue _fun93934
                    }
                case 52:
                    var11 = var1[var14];
                    var12 = var8 != var11;
                    var3 = 0;
                    if (!var12) {
                        _fun93934_ip = 68;
                        continue _fun93934
                    }
                case 65:
                    var3 = var11;
                case 68:
                    var13 = var2.aggregatedProperties;
                    var15 = var13[var14];
                    var12 = var16;
                    if (!(!(var3 > var12))) {
                        _fun93934_ip = 89;
                        continue _fun93934
                    }
                case 85:
                    var12 = var16 - var3;
                case 89:
                    var12 = var15 + var12;
                    var13[var14] = var12;
                    var6 = var11;
                    var5 = var3;
                case 103:
                    var7 = var7 + 1;
                    var3 = var10.length;
                    if (var7 < var3) {
                        _fun93934_ip = 40;
                        continue _fun93934
                    }
                case 115:
                    var3 = var2.aggregationDuration;
                    var4 = var4.timestamp;
                    var1 = var1.timestamp;
                    var1 = var4 - var1;
                    var1 = var3 + var1;
                    var2.aggregationDuration = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'setVideoStopped';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93935: for (var _fun93935_ip = 0;;) switch (_fun93935_ip) {
                case 0:
                    var2 = arg1;
                    var0 = this;
                    var1 = var0.videoStoppedReason;
                    var3 = arg0;
                    if (var3) {
                        _fun93935_ip = 93;
                        continue _fun93935
                    }
                case 18:
                    var3 = ~var2;
                    var3 = var1 & var3;
                    var0.videoStoppedReason = var3;
                    var4 = var0.videoStoppedReason;
                    var3 = _closure1_slot18;
                    var3 = var3.None;
                    if (!(var4 === var3)) {
                        _fun93935_ip = 89;
                        continue _fun93935
                    }
                case 54:
                    var5 = var0.statsWindow;
                    var4 = var5.splice;
                    var3 = 0;
                    var3 = var4.bind(var5)(var3);
                    var4 = var0.videoStoppedWatch;
                    var3 = var4.stop;
                    var3 = var3.bind(var4)();
                case 89:
                    var3 = undefined;
                    return var3;
                case 93:
                    var1 = var1 | var2;
                    var0.videoStoppedReason = var1;
                    var1 = var0.videoStoppedWatch;
                    var0 = var1.start;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'appendAndIncrementStats';
        var0.key = var5;
        var5 = function arg0() {
            _fun93936: for (var _fun93936_ip = 0;;) switch (_fun93936_ip) {
                case 0:
                    var4 = arg0;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var2 = var0.isVideoStopped;
                    if (var2) {
                        _fun93936_ip = 1104;
                        continue _fun93936
                    }
                case 24:
                    var3 = var0.statsWindow;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
                    var2 = var0.statsWindow;
                    var2 = var2.length;
                    var6 = 2;
                    if (!(!(var2 < var6))) {
                        _fun93936_ip = 1104;
                        continue _fun93936
                    }
                case 61:
                    var3 = var0.statsWindow;
                    var2 = var0.statsWindow;
                    var2 = var2.length;
                    var15 = 1;
                    var2 = var2 - var15;
                    var2 = var3[var2];
                    var5 = var0.statsWindow;
                    var3 = var0.statsWindow;
                    var3 = var3.length;
                    var3 = var3 - var6;
                    var10 = var5[var3];
                    var3 = var0.collectAggregationStats;
                    var3 = var3.bind(var0)(var2, var10);
                    var3 = var0.cryptorFailureBeforeSuccessCount;
                    var5 = null;
                    if (!(var5 == var3)) {
                        _fun93936_ip = 182;
                        continue _fun93936
                    }
                case 140:
                    var6 = var4.cryptorSuccessCount;
                    var3 = 0;
                    if (!(var6 > var3)) {
                        _fun93936_ip = 182;
                        continue _fun93936
                    }
                case 152:
                    var6 = var0.aggregatedProperties;
                    var6 = var6.cryptorFailureCount;
                    var7 = var5 != var6;
                    var3 = 0;
                    if (!var7) {
                        _fun93936_ip = 176;
                        continue _fun93936
                    }
                case 173:
                    var3 = var6;
                case 176:
                    var0.cryptorFailureBeforeSuccessCount = var3;
                case 182:
                    var9 = var2.bytes;
                    var8 = var2.framesCodec;
                    var11 = var2.timestamp;
                    var6 = var2.resolution;
                    var _closure3_slot1 = var6;
                    var16 = var2.minorResolution;
                    var7 = var2.majorResolution;
                    var17 = var2.encoder;
                    var14 = var2.decoder;
                    var12 = var2.codecType;
                    var3 = var2.localWant;
                    var10 = var10.timestamp;
                    var13 = var11 - var10;
                    var10 = 1000;
                    var13 = var13 / var10;
                    var _closure3_slot2 = var13;
                    var18 = var0.intervalTotal;
                    var18 = var18 + var13;
                    var0.intervalTotal = var18;
                    var19 = var0.resolutionTotal;
                    var18 = var6 * var13;
                    var18 = var19 + var18;
                    var0.resolutionTotal = var18;
                    var18 = var0.minorResolutionTotal;
                    var16 = var16 * var13;
                    var16 = var18 + var16;
                    var0.minorResolutionTotal = var16;
                    var16 = var0.majorResolutionTotal;
                    var7 = var7 * var13;
                    var7 = var16 + var7;
                    var0.majorResolutionTotal = var7;
                    var7 = global;
                    var19 = var7.Math;
                    var18 = var19.max;
                    var16 = var0.cryptorMaxAttempts;
                    var7 = var2.cryptorMaxAttempts;
                    var7 = var18.bind(var19)(var16, var7);
                    var0.cryptorMaxAttempts = var7;
                    if (!(var5 != var17)) {
                        _fun93936_ip = 742;
                        continue _fun93936
                    }
                case 390:
                    if (!(var5 != var12)) {
                        _fun93936_ip = 742;
                        continue _fun93936
                    }
                case 397:
                    var7 = 'encoderBuckets';
                    var7 = var7 in var0;
                    if (!var7) {
                        _fun93936_ip = 742;
                        continue _fun93936
                    }
                case 411:
                    var16 = var0.encoderBuckets;
                    var7 = var16[var17];
                    var7 = var7 + var13;
                    var16[var17] = var7;
                    var16 = var0.codecBuckets;
                    var7 = var16[var12];
                    var7 = var7 + var13;
                    var16[var12] = var7;
                    var7 = var2.codecType;
                    var7 = var5 != var7;
                    if (!var7) {
                        _fun93936_ip = 483;
                        continue _fun93936
                    }
                case 460:
                    var17 = var2.codecType;
                    var16 = _closure1_slot13;
                    var16 = var16.UNKNOWN;
                    var7 = var17 !== var16;
                case 483:
                    if (!var7) {
                        _fun93936_ip = 498;
                        continue _fun93936
                    }
                case 486:
                    var7 = var2.codecType;
                    var0.encoderCodec = var7;
                case 498:
                    var7 = var4.vmafScore;
                    var7 = var5 != var7;
                    if (!var7) {
                        _fun93936_ip = 523;
                        continue _fun93936
                    }
                case 511:
                    var17 = var4.vmafScore;
                    var16 = 0;
                    var7 = var17 >= var16;
                case 523:
                    if (!var7) {
                        _fun93936_ip = 587;
                        continue _fun93936
                    }
                case 526:
                    var7 = var0.vmafScoreNum;
                    var7 = var7 + var15;
                    var0.vmafScoreNum = var7;
                    var16 = var0.vmafScoreSum;
                    var7 = var4.vmafScore;
                    var7 = var16 + var7;
                    var0.vmafScoreSum = var7;
                    var17 = var0.vmafHistogram;
                    var16 = var17.addSample;
                    var7 = var4.vmafScore;
                    var7 = var16.bind(var17)(var7);
                case 587:
                    var7 = var4.psnrDb;
                    var7 = var5 != var7;
                    if (!var7) {
                        _fun93936_ip = 612;
                        continue _fun93936
                    }
                case 600:
                    var17 = var4.psnrDb;
                    var16 = 0;
                    var7 = var17 >= var16;
                case 612:
                    if (!var7) {
                        _fun93936_ip = 676;
                        continue _fun93936
                    }
                case 615:
                    var7 = var0.psnrDbNum;
                    var7 = var7 + var15;
                    var0.psnrDbNum = var7;
                    var16 = var0.psnrDbSum;
                    var7 = var4.psnrDb;
                    var7 = var16 + var7;
                    var0.psnrDbSum = var7;
                    var17 = var0.psnrHistogram;
                    var16 = var17.addSample;
                    var7 = var4.psnrDb;
                    var7 = var16.bind(var17)(var7);
                case 676:
                    var7 = var4.outboundSinkWant;
                    var7 = var5 != var7;
                    if (!var7) {
                        _fun93936_ip = 701;
                        continue _fun93936
                    }
                case 689:
                    var17 = var4.outboundSinkWant;
                    var16 = 0;
                    var7 = var16 !== var17;
                case 701:
                    if (!var7) {
                        _fun93936_ip = 742;
                        continue _fun93936
                    }
                case 704:
                    var7 = var0.outboundSinkWantNum;
                    var7 = var7 + var15;
                    var0.outboundSinkWantNum = var7;
                    var7 = var0.outboundSinkWantSum;
                    var4 = var4.outboundSinkWant;
                    var4 = var7 + var4;
                    var0.outboundSinkWantSum = var4;
                case 742:
                    if (!(var5 != var14)) {
                        _fun93936_ip = 848;
                        continue _fun93936
                    }
                case 746:
                    if (!(var5 != var12)) {
                        _fun93936_ip = 848;
                        continue _fun93936
                    }
                case 750:
                    var4 = 'decoderBuckets';
                    var4 = var4 in var0;
                    if (!var4) {
                        _fun93936_ip = 848;
                        continue _fun93936
                    }
                case 761:
                    var7 = var0.decoderBuckets;
                    var4 = var7[var14];
                    var4 = var4 + var13;
                    var7[var14] = var4;
                    var7 = var0.codecBuckets;
                    var4 = var7[var12];
                    var4 = var4 + var13;
                    var7[var12] = var4;
                    var4 = var2.codecType;
                    var4 = var5 != var4;
                    if (!var4) {
                        _fun93936_ip = 833;
                        continue _fun93936
                    }
                case 810:
                    var7 = var2.codecType;
                    var5 = _closure1_slot13;
                    var5 = var5.UNKNOWN;
                    var4 = var7 !== var5;
                case 833:
                    if (!var4) {
                        _fun93936_ip = 848;
                        continue _fun93936
                    }
                case 836:
                    var2 = var2.codecType;
                    var0.decoderCodec = var2;
                case 848:
                    var2 = var0.statsWindow;
                    var4 = var2.length;
                    var2 = 6;
                    if (!(!(var4 < var2))) {
                        _fun93936_ip = 1104;
                        continue _fun93936
                    }
                case 869:
                    var4 = var0.statsWindow;
                    var2 = var0.statsWindow;
                    var5 = var2.length;
                    var2 = 3;
                    var2 = var5 - var2;
                    var2 = var4[var2];
                    var5 = var2.bytes;
                    var4 = var2.framesCodec;
                    var7 = var2.timestamp;
                    var14 = _closure1_slot11;
                    var13 = var14.forEach;
                    var12 = function(arg0) { // Environment: var1
                        _fun93937: for (var _fun93937_ip = 0;;) switch (_fun93937_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure3_slot1;
                                if (!(var1 <= var2)) {
                                    _fun93937_ip = 40;
                                    continue _fun93937
                                }
                            case 14:
                                var1 = _closure3_slot0;
                                var1 = var1.resolutionBuckets;
                                var3 = var1[var2];
                                var0 = _closure3_slot2;
                                var0 = var3 + var0;
                                var1[var2] = var0;
                            case 40:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var12 = var13.bind(var14)(var12);
                    var7 = var11 - var7;
                    var7 = var7 / var10;
                    var9 = var9 - var5;
                    var5 = 8;
                    var5 = var5 * var9;
                    var5 = var5 / var7;
                    var _closure3_slot3 = var5;
                    var4 = var8 - var4;
                    var4 = var4 / var7;
                    var _closure3_slot4 = var4;
                    var9 = _closure1_slot9;
                    var8 = var9.forEach;
                    var7 = function(arg0) { // Environment: var1
                        _fun93938: for (var _fun93938_ip = 0;;) switch (_fun93938_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure3_slot3;
                                if (!(var1 <= var2)) {
                                    _fun93938_ip = 40;
                                    continue _fun93938
                                }
                            case 14:
                                var1 = _closure3_slot0;
                                var1 = var1.bitrateBuckets;
                                var3 = var1[var2];
                                var0 = _closure3_slot2;
                                var0 = var3 + var0;
                                var1[var2] = var0;
                            case 40:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var7 = var8.bind(var9)(var7);
                    var7 = _closure1_slot10;
                    var2 = var7.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun93939: for (var _fun93939_ip = 0;;) switch (_fun93939_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure3_slot4;
                                if (!(var1 <= var2)) {
                                    _fun93939_ip = 40;
                                    continue _fun93939
                                }
                            case 14:
                                var1 = _closure3_slot0;
                                var1 = var1.fpsBuckets;
                                var3 = var1[var2];
                                var0 = _closure3_slot2;
                                var0 = var3 + var0;
                                var1[var2] = var0;
                            case 40:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var7)(var1);
                    var2 = var0.resolutionHistogram;
                    var1 = var2.addSample;
                    var1 = var1.bind(var2)(var6);
                    var2 = var0.bitrateHistogram;
                    var1 = var2.addSample;
                    var1 = var1.bind(var2)(var5);
                    var2 = var0.fpsHistogram;
                    var1 = var2.addSample;
                    var1 = var1.bind(var2)(var4);
                    var2 = var0.localWantHistogram;
                    var1 = var2.addSample;
                    var1 = var1.bind(var2)(var3);
                    var1 = var0.statsWindow;
                    var0 = var1.shift;
                    var0 = var0.bind(var1)();
                case 1104:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'addSystemResources';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.systemResources;
            var0 = var1.takeSample;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'appendTransportStats';
        var0.key = var5;
        var5 = function arg0() {
            _fun93941: for (var _fun93941_ip = 0;;) switch (_fun93941_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.inboundBitrateEstimate;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun93941_ip = 41;
                        continue _fun93941
                    }
                case 15:
                    var1 = this;
                    var2 = var1.inboundBitrateEstimateHistogram;
                    var1 = var2.addSample;
                    var0 = var0.inboundBitrateEstimate;
                    var0 = var1.bind(var2)(var0);
                case 41:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getCodecsUsed';
        var0.key = var5;
        var4 = function() {
            _fun93942: for (var _fun93942_ip = 0;;) switch (_fun93942_ip) {
                case 0:
                    var1 = global;
                    var0 = var1.Set;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var12 = var2;
                    var0 = new var12[var0](var11);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var3 = var1.Object;
                    var2 = var3.entries;
                    var1 = this;
                    var1 = var1.codecBuckets;
                    var8 = var2.bind(var3)(var1);
                    var1 = var8.length;
                    var7 = 0;
                    var1 = var7 < var1;
                    var5 = undefined;
                    var4 = 2;
                    var3 = 1;
                    var2 = 0;
                    if (!var1) {
                        _fun93942_ip = 129;
                        continue _fun93942
                    }
                case 81:
                    var9 = var8[var2];
                    var1 = _closure1_slot6;
                    var1 = var1.bind(var5)(var9, var4);
                    var9 = var1[var7];
                    var1 = var1[var3];
                    if (!(var1 > var7)) {
                        _fun93942_ip = 117;
                        continue _fun93942
                    }
                case 107:
                    var1 = var0.add;
                    var1 = var1.bind(var0)(var9);
                case 117:
                    var2 = var2 + 1;
                    var1 = var8.length;
                    if (var2 < var1) {
                        _fun93942_ip = 81;
                        continue _fun93942
                    }
                case 129:
                    return var0;
            }
        };
        var0.value = var4;
        var1[7] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun93944: for (var _fun93944_ip = 0;;) switch (_fun93944_ip) {
                case 0:
                    var5 = this;
                    var1 = 0;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var6 = _closure1_slot7;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot4;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot3;
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun93944_ip = 86;
                        continue _fun93944
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun93944_ip = 120;
                    continue _fun93944;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot4;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var3 = global;
                    var6 = var3.Object;
                    var5 = var6.fromEntries;
                    var8 = var3.Object;
                    var7 = var8.values;
                    var3 = _closure1_slot14;
                    var8 = var7.bind(var8)(var3);
                    var7 = var8.map;
                    var3 = function(arg0) { // Environment: var3
                        var0 = new Array(2);
                        var1 = arg0;
                        var0[0] = var1;
                        var1 = 0;
                        var0[1] = var1;
                        return var0;
                    };
                    var3 = var7.bind(var8)(var3);
                    var3 = var5.bind(var6)(var3);
                    var0.encoderBuckets = var3;
                    var3 = _closure1_slot13;
                    var3 = var3.UNKNOWN;
                    var0.encoderCodec = var3;
                    var0.targetFrames = var1;
                    var0.targetBytesMax = var1;
                    var0.targetBytesNetwork = var1;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var6 = var5[var2];
                    var6 = var3.bind(var4)(var6);
                    var6 = var6.Histogram;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var14 = var7;
                    var6 = new var14[var6](var13);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var0.targetBitrateHistogram = var6;
                    var0.outboundBytesAvailable = var1;
                    var6 = var5[var2];
                    var6 = var3.bind(var4)(var6);
                    var6 = var6.Histogram;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var14 = var7;
                    var6 = new var14[var6](var13);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var0.outboundBandwidthSurplus = var6;
                    var0.averageEncodeTime = var1;
                    var0.vmafScoreSum = var1;
                    var0.vmafScoreNum = var1;
                    var6 = var5[var2];
                    var6 = var3.bind(var4)(var6);
                    var6 = var6.Histogram;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var14 = var7;
                    var6 = new var14[var6](var13);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var0.vmafHistogram = var6;
                    var0.psnrDbSum = var1;
                    var0.psnrDbNum = var1;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.Histogram;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var14 = var3;
                    var2 = new var14[var2](var13);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0.psnrHistogram = var2;
                    var0.qualityDecodeErrors = var1;
                    var0.qualityDecoderReboots = var1;
                    var0.qualityScoreErrors = var1;
                    var0.qualityFrameDrops = var1;
                    var0.qualitySizeMismatches = var1;
                    var0.outboundSinkWantSum = var1;
                    var0.outboundSinkWantNum = var1;
                    var1 = null;
                    var0.framesDroppedRateLimiter = var1;
                    var0.framesDroppedEncoderQueue = var1;
                    var0.framesDroppedCongestionWindow = var1;
                    var0.framesDroppedEncoder = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot5;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot8;
        var4 = {};
        var5 = 'appendTargetRates';
        var4.key = var5;
        var0 = function arg0, arg1, arg2, arg3() {
            _fun93946: for (var _fun93946_ip = 0;;) switch (_fun93946_ip) {
                case 0:
                    var0 = arg0;
                    var4 = arg1;
                    var7 = arg2;
                    var5 = arg3;
                    var1 = this;
                    var2 = var1.statsWindow;
                    var2 = var2.length;
                    var8 = 2;
                    if (!(!(var2 < var8))) {
                        _fun93946_ip = 298;
                        continue _fun93946
                    }
                case 36:
                    var6 = null;
                    var9 = var6 != var0;
                    var2 = 0;
                    if (!var9) {
                        _fun93946_ip = 50;
                        continue _fun93946
                    }
                case 47:
                    var2 = var0;
                case 50:
                    var9 = var6 != var4;
                    var0 = 0;
                    if (!var9) {
                        _fun93946_ip = 62;
                        continue _fun93946
                    }
                case 59:
                    var0 = var4;
                case 62:
                    var9 = var6 != var7;
                    var4 = 0;
                    if (!var9) {
                        _fun93946_ip = 74;
                        continue _fun93946
                    }
                case 71:
                    var4 = var7;
                case 74:
                    var6 = var6 != var5;
                    var3 = 0;
                    if (!var6) {
                        _fun93946_ip = 86;
                        continue _fun93946
                    }
                case 83:
                    var3 = var5;
                case 86:
                    var6 = var1.statsWindow;
                    var5 = var1.statsWindow;
                    var7 = var5.length;
                    var5 = 1;
                    var5 = var7 - var5;
                    var5 = var6[var5];
                    var6 = var5.timestamp;
                    var7 = var1.statsWindow;
                    var5 = var1.statsWindow;
                    var5 = var5.length;
                    var5 = var5 - var8;
                    var5 = var7[var5];
                    var5 = var5.timestamp;
                    var6 = var6 - var5;
                    var5 = 1000;
                    var5 = var6 / var5;
                    var6 = var1.targetFrames;
                    var2 = var2 * var5;
                    var2 = var6 + var2;
                    var1.targetFrames = var2;
                    var7 = var1.targetBytesNetwork;
                    var2 = 8;
                    var6 = var0 / var2;
                    var6 = var6 * var5;
                    var6 = var7 + var6;
                    var1.targetBytesNetwork = var6;
                    var6 = var1.targetBytesMax;
                    var4 = var4 / var2;
                    var4 = var4 * var5;
                    var4 = var6 + var4;
                    var1.targetBytesMax = var4;
                    var4 = var1.outboundBytesAvailable;
                    var2 = var3 / var2;
                    var2 = var2 * var5;
                    var2 = var4 + var2;
                    var1.outboundBytesAvailable = var2;
                    var4 = var1.targetBitrateHistogram;
                    var2 = var4.addSample;
                    var2 = var2.bind(var4)(var0);
                    var2 = var1.outboundBandwidthSurplus;
                    var1 = var2.addSample;
                    var0 = var3 - var0;
                    var0 = var1.bind(var2)(var0);
                case 298:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var12 = 9;
    var12 = var14[var12];
    var14 = var13.bind(var0)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'lib/VideoQualityStats.tsx';
    var12 = var13.bind(var14)(var12);
    var2.CodecTypes = var11;
    var2.Encoders = var10;
    var2.Decoders = var9;
    var2.VideoStoppedReasons = var8;
    var2.parseEncoder = var7;
    var2.parseDecoder = var6;
    var2.parseCodecType = var5;
    var2.RawVideoStats = var4;
    var2.InboundStats = var3;
    var2.OutboundStats = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 57, 6, 7, 12257, 12256, 3529, 2]);