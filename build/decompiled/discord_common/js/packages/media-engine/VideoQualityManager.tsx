// ../discord_common/js/packages/media-engine/VideoQualityManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var3 = global;
    var9 = var3.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var8[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var6 = var5.defaultVideoQualityOptions;
    var _closure1_slot4 = var6;
    var6 = var5.MediaEngineContextTypes;
    var _closure1_slot5 = var6;
    var9 = var5.VideoQualityMode;
    var6 = var5.VIDEO_QUALITY_FRAMERATE;
    var _closure1_slot6 = var6;
    var6 = var5.BIT_FLOOR_PER_PIXEL;
    var _closure1_slot7 = var6;
    var6 = var5.DESKTOP_LOW_QUALITY_STREAM_MAX_BITRATE;
    var _closure1_slot8 = var6;
    var6 = var5.DESKTOP_LOW_QUALITY_STREAM_MIN_BITRATE;
    var _closure1_slot9 = var6;
    var6 = var5.VIDEO_QUALITY_GOLIVE_LQ_WIDTH;
    var _closure1_slot10 = var6;
    var6 = var5.VIDEO_QUALITY_GOLIVE_LQ_HEIGHT;
    var _closure1_slot11 = var6;
    var5 = var5.VIDEO_QUALITY_GOLIVE_LQ_FRAMERATE;
    var _closure1_slot12 = var5;
    var6 = var3.Object;
    var5 = var6.freeze;
    var3 = {};
    var11 = var9.AUTO;
    var10 = {};
    var3[var11] = var10;
    var10 = var9.FULL;
    var9 = {};
    var11 = {
        'width': 1280,
        'height': 720
    };
    var9.encode = var11;
    var3[var10] = var9;
    var5 = var5.bind(var6)(var3);
    var3 = function arg0() {
        _fun32728: for (var _fun32728_ip = 0;;) switch (_fun32728_ip) {
            case 0:
                var1 = arg0;
                var2 = this;
                var5 = _closure1_slot3;
                var3 = _closure1_slot15;
                var0 = undefined;
                var3 = var5.bind(var0)(var2, var3);
                var3 = var1.capture;
                var5 = null;
                if (!(var5 == var3)) {
                    _fun32728_ip = 50;
                    continue _fun32728
                }
            case 37:
                var3 = var1.encode;
                if (!(var5 != var3)) {
                    _fun32728_ip = 202;
                    continue _fun32728
                }
            case 50:
                var3 = var1.capture;
                var6 = var5 == var3;
                var3 = undefined;
                if (var6) {
                    _fun32728_ip = 95;
                    continue _fun32728
                }
            case 65:
                var8 = _closure1_slot14;
                var10 = var1.capture;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var11 = var7;
                var6 = new var11[var8](var10, var9);
                var3 = var6 instanceof Object ? var6 : var7;
            case 95:
                var2.capture = var3;
                var3 = var1.encode;
                var5 = var5 == var3;
                var3 = undefined;
                if (var5) {
                    _fun32728_ip = 146;
                    continue _fun32728
                }
            case 116:
                var6 = _closure1_slot14;
                var10 = var1.encode;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var5;
                var4 = new var11[var6](var10, var9);
                var3 = var4 instanceof Object ? var4 : var5;
            case 146:
                var2.encode = var3;
                var3 = var1.bitrateMin;
                var2.bitrateMin = var3;
                var3 = var1.bitrateMax;
                var2.bitrateMax = var3;
                var3 = var1.bitrateTarget;
                var2.bitrateTarget = var3;
                var1 = var1.localWant;
                var2.localWant = var1;
                return var0;
            case 202:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = 'Invalid arguments.';
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot15 = var3;
    var4 = var4.bind(var0)(var3);
    var _closure1_slot13 = var4;
    var3 = function() { // Environment: var1
        var4 = _closure1_slot2;
        var3 = function arg0() {
            var1 = arg0;
            var2 = this;
            var4 = _closure1_slot3;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = var1.width;
            var2.width = var3;
            var3 = var1.height;
            var2.height = var3;
            var3 = var1.framerate;
            var2.framerate = var3;
            var3 = var1.width;
            var1 = var1.height;
            var1 = var3 * var1;
            var2.pixelCount = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var2 = 'equals';
        var0.key = var2;
        var2 = function arg0, arg1() {
            _fun32731: for (var _fun32731_ip = 0;;) switch (_fun32731_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var2 = null;
                    var0 = var2 == var4;
                    if (!var0) {
                        _fun32731_ip = 19;
                        continue _fun32731
                    }
                case 15:
                    var0 = var2 == var3;
                case 19:
                    if (var0) {
                        _fun32731_ip = 92;
                        continue _fun32731
                    }
                case 22:
                    var1 = var2 != var4;
                    if (!var1) {
                        _fun32731_ip = 33;
                        continue _fun32731
                    }
                case 29:
                    var1 = var2 != var3;
                case 33:
                    if (!var1) {
                        _fun32731_ip = 89;
                        continue _fun32731
                    }
                case 36:
                    var5 = var4.width;
                    var2 = var3.width;
                    var2 = var5 === var2;
                    if (!var2) {
                        _fun32731_ip = 67;
                        continue _fun32731
                    }
                case 53:
                    var6 = var4.height;
                    var5 = var3.height;
                    var2 = var6 === var5;
                case 67:
                    if (!var2) {
                        _fun32731_ip = 86;
                        continue _fun32731
                    }
                case 70:
                    var4 = var4.framerate;
                    var3 = var3.framerate;
                    var2 = var4 === var3;
                case 86:
                    var1 = var2;
                case 89:
                    var0 = var1;
                case 92:
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(2);
        var2[0] = var0;
        var0 = {};
        var5 = 'extend';
        var0.key = var5;
        var1 = function arg0, arg1() {
            _fun32732: for (var _fun32732_ip = 0;;) switch (_fun32732_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arg1;
                    var7 = null;
                    if (!(var7 != var1)) {
                        _fun32732_ip = 181;
                        continue _fun32732
                    }
                case 15:
                    if (!(var7 != var0)) {
                        _fun32732_ip = 179;
                        continue _fun32732
                    }
                case 22:
                    var3 = var7 == var0;
                    var2 = undefined;
                    if (var3) {
                        _fun32732_ip = 36;
                        continue _fun32732
                    }
                case 31:
                    var2 = var0.width;
                case 36:
                    if (!(var7 == var2)) {
                        _fun32732_ip = 57;
                        continue _fun32732
                    }
                case 40:
                    var4 = var7 == var1;
                    var3 = undefined;
                    if (var4) {
                        _fun32732_ip = 54;
                        continue _fun32732
                    }
                case 49:
                    var3 = var1.width;
                case 54:
                    var2 = var3;
                case 57:
                    var5 = var7 != var2;
                    var3 = 0;
                    if (!var5) {
                        _fun32732_ip = 69;
                        continue _fun32732
                    }
                case 66:
                    var3 = var2;
                case 69:
                    var5 = var7 == var0;
                    var2 = undefined;
                    if (var5) {
                        _fun32732_ip = 83;
                        continue _fun32732
                    }
                case 78:
                    var2 = var0.height;
                case 83:
                    if (!(var7 == var2)) {
                        _fun32732_ip = 104;
                        continue _fun32732
                    }
                case 87:
                    var8 = var7 == var1;
                    var5 = undefined;
                    if (var8) {
                        _fun32732_ip = 101;
                        continue _fun32732
                    }
                case 96:
                    var5 = var1.height;
                case 101:
                    var2 = var5;
                case 104:
                    var5 = var7 != var2;
                    var4 = 0;
                    if (!var5) {
                        _fun32732_ip = 116;
                        continue _fun32732
                    }
                case 113:
                    var4 = var2;
                case 116:
                    var2 = {};
                    var2.width = var3;
                    var2.height = var4;
                    var8 = var7 == var0;
                    var5 = undefined;
                    if (var8) {
                        _fun32732_ip = 141;
                        continue _fun32732
                    }
                case 135:
                    var5 = var0.framerate;
                case 141:
                    if (!(var7 == var5)) {
                        _fun32732_ip = 163;
                        continue _fun32732
                    }
                case 145:
                    var7 = var7 == var1;
                    var6 = undefined;
                    if (var7) {
                        _fun32732_ip = 160;
                        continue _fun32732
                    }
                case 154:
                    var6 = var1.framerate;
                case 160:
                    var5 = var6;
                case 163:
                    var2.framerate = var5;
                    var3 = var3 * var4;
                    var2.pixelCount = var3;
                    return var2;
                case 179:
                    return var1;
                case 181:
                    return var0;
            }
        };
        var0.value = var1;
        var2[1] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var4.bind(var1)(var3, var0, var2);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot14 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = function arg0, arg1() {
            _fun32734: for (var _fun32734_ip = 0;;) switch (_fun32734_ip) {
                case 0:
                    var6 = arguments[2];
                    var2 = this;
                    var0 = undefined;
                    if (!(var6 === var0)) {
                        _fun32734_ip = 19;
                        continue _fun32734
                    }
                case 12:
                    var6 = _closure1_slot4;
                case 19:
                    var4 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var0)(var2, var3);
                    var3 = arg0;
                    var2.contextType = var3;
                    var3 = arg1;
                    var2.connection = var3;
                    var2.options = var6;
                    var3 = false;
                    var2.isMuted = var3;
                    var5 = var2.contextType;
                    var4 = _closure1_slot5;
                    var4 = var4.STREAM;
                    var4 = var5 === var4;
                    var2.isStreamContext = var4;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 3;
                    var4 = var7[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.MediaSinkWantsLadder;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var4
                        }
                    });
                    var10 = var5;
                    var9 = var6;
                    var4 = new var10[var4](var9, var8);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var2.ladder = var4;
                    var4 = var2.getDefaultGoliveQuality;
                    var4 = var4.bind(var2)();
                    var2.goliveMaxQuality = var4;
                    var2.goliveSimulcastEnabled = var3;
                    var1 = _closure1_slot8;
                    var2.goliveSimulcastLQBitrateMax = var1;
                    var2.goliveSimulcastLQBitrateTarget = var1;
                    var1 = {};
                    var2.lastGoLivePixelCount = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getQuality';
        var0.key = var1;
        var1 = function arg0() {
            _fun32735: for (var _fun32735_ip = 0;;) switch (_fun32735_ip) {
                case 0:
                    var6 = arg0;
                    var4 = this;
                    var1 = var4.connection;
                    var0 = var1.getLocalWant;
                    var3 = var0.bind(var1)(var6);
                    var5 = null;
                    var0 = var5 != var6;
                    var7 = 0;
                    var1 = 0;
                    if (!var0) {
                        _fun32735_ip = 168;
                        continue _fun32735
                    }
                case 41:
                    var2 = var4.connection;
                    var0 = var2.getRemoteVideoSinkPixelCount;
                    var9 = var0.bind(var2)(var6);
                    var0 = var4.lastGoLivePixelCount;
                    var2 = var0[var6];
                    var0 = var9;
                    if (!(var5 != var2)) {
                        _fun32735_ip = 155;
                        continue _fun32735
                    }
                case 77:
                    var2 = var4.lastGoLivePixelCount;
                    var2 = var2[var6];
                    var0 = var9;
                    if (!(var2 > var7)) {
                        _fun32735_ip = 155;
                        continue _fun32735
                    }
                case 94:
                    var2 = var4.lastGoLivePixelCount;
                    var2 = var2[var6];
                    var8 = var9 / var2;
                    var7 = 1.05;
                    var2 = var9;
                    if (!(!(var8 > var7))) {
                        _fun32735_ip = 152;
                        continue _fun32735
                    }
                case 125:
                    var7 = 0.95;
                    var2 = var9;
                    if (!(!(var8 < var7))) {
                        _fun32735_ip = 152;
                        continue _fun32735
                    }
                case 142:
                    var7 = var4.lastGoLivePixelCount;
                    var2 = var7[var6];
                case 152:
                    var0 = var2;
                case 155:
                    var2 = var4.lastGoLivePixelCount;
                    var2[var6] = var0;
                    var1 = var0;
                case 168:
                    var0 = var4.isStreamContext;
                    if (var0) {
                        _fun32735_ip = 190;
                        continue _fun32735
                    }
                case 177:
                    var0 = var4.getVideoQuality;
                    var2 = var0.bind(var4)(var3);
                    _fun32735_ip = 204;
                    continue _fun32735;
                case 190:
                    var0 = var4.getGoliveQuality;
                    var2 = var0.bind(var4)(var3, var1);
                case 204:
                    var1 = var4.qualityOverwrite;
                    var0 = var2;
                    if (!(var5 != var1)) {
                        _fun32735_ip = 422;
                        continue _fun32735
                    }
                case 220:
                    var3 = _closure1_slot13;
                    var1 = {};
                    var10 = _closure1_slot14;
                    var9 = var10.extend;
                    var8 = var2.encode;
                    var7 = var4.qualityOverwrite;
                    var7 = var7.encode;
                    var7 = var9.bind(var10)(var8, var7);
                    var1.encode = var7;
                    var9 = _closure1_slot14;
                    var8 = var9.extend;
                    var7 = var2.capture;
                    var6 = var4.qualityOverwrite;
                    var6 = var6.capture;
                    var6 = var8.bind(var9)(var7, var6);
                    var1.capture = var6;
                    var6 = var4.qualityOverwrite;
                    var6 = var6.bitrateMin;
                    if (!(var5 == var6)) {
                        _fun32735_ip = 329;
                        continue _fun32735
                    }
                case 323:
                    var6 = var2.bitrateMin;
                case 329:
                    var1.bitrateMin = var6;
                    var6 = var4.qualityOverwrite;
                    var6 = var6.bitrateMax;
                    if (!(var5 == var6)) {
                        _fun32735_ip = 356;
                        continue _fun32735
                    }
                case 350:
                    var6 = var2.bitrateMax;
                case 356:
                    var1.bitrateMax = var6;
                    var4 = var4.qualityOverwrite;
                    var4 = var4.bitrateTarget;
                    if (!(var5 == var4)) {
                        _fun32735_ip = 383;
                        continue _fun32735
                    }
                case 377:
                    var4 = var2.bitrateTarget;
                case 383:
                    var1.bitrateTarget = var4;
                    var2 = var2.localWant;
                    var1.localWant = var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var2;
                    var12 = var1;
                    var1 = new var13[var3](var12, var11);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 422:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(12);
        var1[0] = var0;
        var0 = {};
        var5 = 'applyQualityConstraints';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun32736: for (var _fun32736_ip = 0;;) switch (_fun32736_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var2 = var3.getQuality;
                    var0 = arg1;
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.capture;
                    var4 = null;
                    if (!(var4 != var0)) {
                        _fun32736_ip = 110;
                        continue _fun32736
                    }
                case 32:
                    var0 = var2.capture;
                    var0 = var0.width;
                    var1.encodingVideoWidth = var0;
                    var0 = var2.capture;
                    var0 = var0.height;
                    var1.encodingVideoHeight = var0;
                    var0 = var2.capture;
                    var0 = var0.framerate;
                    var1.encodingVideoFrameRate = var0;
                    var0 = var2.capture;
                    var0 = var0.framerate;
                    var1.captureVideoFrameRate = var0;
                case 110:
                    var0 = var2.encode;
                    if (!(var4 != var0)) {
                        _fun32736_ip = 156;
                        continue _fun32736
                    }
                case 120:
                    var0 = var2.encode;
                    var0 = var0.framerate;
                    var1.remoteSinkWantsMaxFramerate = var0;
                    var0 = var2.encode;
                    var0 = var0.pixelCount;
                    var1.remoteSinkWantsPixelCount = var0;
                case 156:
                    var0 = var2.bitrateTarget;
                    if (!(var4 == var0)) {
                        _fun32736_ip = 180;
                        continue _fun32736
                    }
                case 166:
                    var0 = var2.bitrateMax;
                    var1.encodingVideoBitRate = var0;
                    _fun32736_ip = 192;
                    continue _fun32736;
                case 180:
                    var0 = var2.bitrateTarget;
                    var1.encodingVideoBitRate = var0;
                case 192:
                    var0 = var2.bitrateMin;
                    var1.encodingVideoMinBitRate = var0;
                    var0 = var2.bitrateMax;
                    var1.encodingVideoMaxBitRate = var0;
                    var0 = var1.encodingVideoBitRate;
                    var0 = var4 != var0;
                    if (!var0) {
                        _fun32736_ip = 239;
                        continue _fun32736
                    }
                case 229:
                    var3 = var1.encodingVideoMaxBitRate;
                    var0 = var4 != var3;
                case 239:
                    if (!var0) {
                        _fun32736_ip = 279;
                        continue _fun32736
                    }
                case 242:
                    var0 = global;
                    var5 = var0.Math;
                    var4 = var5.min;
                    var3 = var1.encodingVideoBitRate;
                    var0 = var1.encodingVideoMaxBitRate;
                    var0 = var4.bind(var5)(var3, var0);
                    var1.encodingVideoBitRate = var0;
                case 279:
                    var0 = {};
                    var0.quality = var2;
                    var0.constraints = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'setQualityOverwrite';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.qualityOverwrite = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'setGoliveQuality';
        var0.key = var5;
        var5 = function arg0() {
            _fun32738: for (var _fun32738_ip = 0;;) switch (_fun32738_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var3 = _closure1_slot13;
                    var0 = {};
                    var8 = _closure1_slot14;
                    var7 = var8.extend;
                    var5 = var1.goliveMaxQuality;
                    var6 = var5.capture;
                    var5 = var2.capture;
                    var5 = var7.bind(var8)(var6, var5);
                    var0.capture = var5;
                    var7 = _closure1_slot14;
                    var6 = var7.extend;
                    var4 = var1.goliveMaxQuality;
                    var5 = var4.encode;
                    var4 = var2.encode;
                    var4 = var6.bind(var7)(var5, var4);
                    var0.encode = var4;
                    var5 = var2.bitrateMin;
                    var4 = null;
                    if (!(var4 == var5)) {
                        _fun32738_ip = 117;
                        continue _fun32738
                    }
                case 105:
                    var6 = var1.goliveMaxQuality;
                    var5 = var6.bitrateMin;
                case 117:
                    var0.bitrateMin = var5;
                    var5 = var2.bitrateMax;
                    if (!(var4 == var5)) {
                        _fun32738_ip = 144;
                        continue _fun32738
                    }
                case 132:
                    var6 = var1.goliveMaxQuality;
                    var5 = var6.bitrateMax;
                case 144:
                    var0.bitrateMax = var5;
                    var2 = var2.bitrateTarget;
                    if (!(var4 == var2)) {
                        _fun32738_ip = 171;
                        continue _fun32738
                    }
                case 159:
                    var4 = var1.goliveMaxQuality;
                    var2 = var4.bitrateTarget;
                case 171:
                    var0.bitrateTarget = var2;
                    var2 = var1.goliveMaxQuality;
                    var2 = var2.localWant;
                    var0.localWant = var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var11 = var2;
                    var10 = var0;
                    var0 = new var11[var3](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var1.goliveMaxQuality = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'configGoLiveSimulcast';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var1 = arg1;
            var0 = this;
            var2 = arg0;
            var0.goliveSimulcastEnabled = var2;
            var0.goliveSimulcastLQBitrateMax = var1;
            var0.goliveSimulcastLQBitrateTarget = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'setGoLiveSimulcastLQTargetBitrate';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.goliveSimulcastLQBitrateTarget = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'shouldEnableGoliveSimulcastForHqQuality';
        var0.key = var5;
        var5 = function arg0() {
            _fun32741: for (var _fun32741_ip = 0;;) switch (_fun32741_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var0 = var0.goliveSimulcastEnabled;
                    var1 = !var0;
                    var0 = !var1;
                    if (var1) {
                        _fun32741_ip = 83;
                        continue _fun32741
                    }
                case 21:
                    var1 = var2.width;
                    var4 = 0;
                    var1 = var4 === var1;
                    if (!var1) {
                        _fun32741_ip = 44;
                        continue _fun32741
                    }
                case 35:
                    var3 = var2.height;
                    var1 = var4 === var3;
                case 44:
                    if (var1) {
                        _fun32741_ip = 80;
                        continue _fun32741
                    }
                case 47:
                    var3 = var2.width;
                    var2 = var2.height;
                    var3 = var3 * var2;
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot11;
                    var2 = var4 * var2;
                    var1 = var3 > var2;
                case 80:
                    var0 = var1;
                case 83:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getVideoQuality';
        var0.key = var5;
        var5 = function arg0() {
            _fun32742: for (var _fun32742_ip = 0;;) switch (_fun32742_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var2 = var3.ladder;
                    var0 = var2.getResolution;
                    var5 = var0.bind(var2)(var1);
                    var0 = var3.options;
                    var0 = var0.videoBitrate;
                    var2 = var0.min;
                    var0 = var5.budgetPortion;
                    var9 = var2 * var0;
                    var0 = var3.options;
                    var0 = var0.videoBitrate;
                    var2 = var0.max;
                    var0 = var5.budgetPortion;
                    var6 = var2 * var0;
                    var0 = var3.isMuted;
                    if (var0) {
                        _fun32742_ip = 94;
                        continue _fun32742
                    }
                case 86:
                    var7 = var5.framerate;
                    _fun32742_ip = 100;
                    continue _fun32742;
                case 94:
                    var7 = var5.mutedFramerate;
                case 100:
                    var2 = _closure1_slot13;
                    var0 = {};
                    var4 = {};
                    var11 = var4;
                    var10 = var5;
                    var5 = copyDataProperties(var11, var10);
                    var5 = 'framerate';
                    var4[var5] = var7;
                    var0.encode = var4;
                    var4 = {};
                    var5 = var3.options;
                    var5 = var5.videoCapture;
                    var5 = var5.width;
                    var4.width = var5;
                    var5 = var3.options;
                    var5 = var5.videoCapture;
                    var5 = var5.height;
                    var4.height = var5;
                    var5 = var3.options;
                    var5 = var5.videoCapture;
                    var5 = var5.framerate;
                    var4.framerate = var5;
                    var0.capture = var4;
                    var4 = global;
                    var8 = var4.Math;
                    var7 = var8.max;
                    var5 = var3.options;
                    var5 = var5.videoBitrateFloor;
                    var5 = var7.bind(var8)(var9, var5);
                    var0.bitrateMin = var5;
                    var5 = var4.Math;
                    var4 = var5.max;
                    var3 = var3.options;
                    var3 = var3.videoBitrateFloor;
                    var3 = var4.bind(var5)(var6, var3);
                    var0.bitrateMax = var3;
                    var0.localWant = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var1;
                    var11 = var0;
                    var0 = new var12[var2](var11, var10);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'scaleLinearly';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun32743: for (var _fun32743_ip = 0;;) switch (_fun32743_ip) {
                case 0:
                    var2 = arg1;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun32743_ip = 23;
                        continue _fun32743
                    }
                case 9:
                    var3 = arg0;
                    var1 = arg2;
                    var1 = var3 * var1;
                    var0 = var1 / var2;
                case 23:
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'getGoliveQuality';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun32744: for (var _fun32744_ip = 0;;) switch (_fun32744_ip) {
                case 0:
                    var2 = arg0;
                    var10 = arg1;
                    var1 = this;
                    var0 = var1.goliveSimulcastEnabled;
                    if (!var0) {
                        _fun32744_ip = 28;
                        continue _fun32744
                    }
                case 18:
                    var0 = 100;
                    if (!(!(var2 < var0))) {
                        _fun32744_ip = 558;
                        continue _fun32744
                    }
                case 28:
                    var0 = var1.goliveMaxQuality;
                    var3 = var0.encode;
                    var6 = null;
                    var5 = var6 == var3;
                    var4 = undefined;
                    var0 = undefined;
                    if (var5) {
                        _fun32744_ip = 59;
                        continue _fun32744
                    }
                case 53:
                    var0 = var3.pixelCount;
                case 59:
                    if (!(var4 !== var0)) {
                        _fun32744_ip = 550;
                        continue _fun32744
                    }
                case 66:
                    var0 = var1.goliveMaxQuality;
                    var0 = var0.encode;
                    var0 = var0.pixelCount;
                    if (!(!(var10 >= var0))) {
                        _fun32744_ip = 550;
                        continue _fun32744
                    }
                case 91:
                    var0 = 0;
                    if (!(!(var10 <= var0))) {
                        _fun32744_ip = 550;
                        continue _fun32744
                    }
                case 100:
                    var5 = global;
                    var9 = var5.Math;
                    var8 = var9.min;
                    var7 = _closure1_slot7;
                    var3 = var1.goliveMaxQuality;
                    var3 = var3.encode;
                    var3 = var3.pixelCount;
                    var7 = var7 * var3;
                    var3 = var1.goliveMaxQuality;
                    var3 = var3.encode;
                    var3 = var3.framerate;
                    var7 = var7 * var3;
                    var3 = var1.goliveMaxQuality;
                    var3 = var3.bitrateMax;
                    var11 = var8.bind(var9)(var7, var3);
                    var8 = var1.scaleLinearly;
                    var3 = var1.goliveMaxQuality;
                    var3 = var3.encode;
                    var7 = var3.pixelCount;
                    var3 = var1.goliveMaxQuality;
                    var3 = var3.bitrateMin;
                    var14 = var8.bind(var1)(var10, var7, var3);
                    var8 = var1.scaleLinearly;
                    var3 = var1.goliveMaxQuality;
                    var3 = var3.encode;
                    var7 = var3.pixelCount;
                    var3 = var1.goliveMaxQuality;
                    var3 = var3.bitrateMax;
                    var13 = var8.bind(var1)(var10, var7, var3);
                    var3 = var1.goliveMaxQuality;
                    var3 = var3.bitrateTarget;
                    var3 = var6 != var3;
                    var9 = undefined;
                    if (!var3) {
                        _fun32744_ip = 332;
                        continue _fun32744
                    }
                case 289:
                    var8 = var1.scaleLinearly;
                    var3 = var1.goliveMaxQuality;
                    var3 = var3.encode;
                    var7 = var3.pixelCount;
                    var3 = var1.goliveMaxQuality;
                    var3 = var3.bitrateTarget;
                    var9 = var8.bind(var1)(var10, var7, var3);
                case 332:
                    var3 = _closure1_slot13;
                    var0 = {};
                    var7 = var1.goliveMaxQuality;
                    var7 = var7.encode;
                    var0.encode = var7;
                    var7 = var1.goliveMaxQuality;
                    var7 = var7.capture;
                    var0.capture = var7;
                    var12 = var5.Math;
                    var10 = var12.max;
                    var8 = var5.Math;
                    var7 = var8.ceil;
                    var8 = var7.bind(var8)(var14);
                    var7 = var1.options;
                    var7 = var7.videoBitrateFloor;
                    var7 = var10.bind(var12)(var8, var7);
                    var0.bitrateMin = var7;
                    var10 = var5.Math;
                    var8 = var10.max;
                    var12 = var5.Math;
                    var7 = var12.ceil;
                    var7 = var7.bind(var12)(var13);
                    var7 = var8.bind(var10)(var7, var11);
                    var0.bitrateMax = var7;
                    var6 = var6 != var9;
                    var4 = undefined;
                    if (!var6) {
                        _fun32744_ip = 515;
                        continue _fun32744
                    }
                case 470:
                    var8 = var5.Math;
                    var7 = var8.max;
                    var6 = var5.Math;
                    var5 = var6.ceil;
                    var6 = var5.bind(var6)(var9);
                    var5 = var1.options;
                    var5 = var5.videoBitrateFloor;
                    var4 = var7.bind(var8)(var6, var5);
                case 515:
                    var0.bitrateTarget = var4;
                    var0.localWant = var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var18 = var2;
                    var17 = var0;
                    var0 = new var18[var3](var17, var16);
                    var0 = var0 instanceof Object ? var0 : var2;
                    return var0;
                case 550:
                    var0 = var1.goliveMaxQuality;
                    return var0;
                case 558:
                    var0 = var1.getGoliveLQQuality;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'getDefaultGoliveQuality';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var2 = _closure1_slot13;
            var0 = {};
            var3 = {
                'width': 1280,
                'height': 720
            };
            var4 = _closure1_slot6;
            var3.framerate = var4;
            var0.capture = var3;
            var3 = {
                'width': 1280,
                'height': 720,
                'framerate': null,
                'pixelCount': 921600
            };
            var3.framerate = var4;
            var0.encode = var3;
            var3 = var1.options;
            var3 = var3.desktopBitrate;
            var3 = var3.min;
            var0.bitrateMin = var3;
            var3 = var1.options;
            var3 = var3.desktopBitrate;
            var3 = var3.max;
            var0.bitrateMax = var3;
            var1 = var1.options;
            var1 = var1.desktopBitrate;
            var1 = var1.target;
            var0.bitrateTarget = var1;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var7 = var1;
            var6 = var0;
            var0 = new var7[var2](var6, var5);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'getGoliveLQQuality';
        var0.key = var5;
        var4 = function() {
            _fun32746: for (var _fun32746_ip = 0;;) switch (_fun32746_ip) {
                case 0:
                    var1 = this;
                    var0 = global;
                    var6 = var0.Math;
                    var5 = var6.min;
                    var4 = _closure1_slot10;
                    var2 = var1.goliveMaxQuality;
                    var7 = var2.encode;
                    var11 = null;
                    var9 = var11 == var7;
                    var2 = undefined;
                    if (var9) {
                        _fun32746_ip = 51;
                        continue _fun32746
                    }
                case 46:
                    var2 = var7.width;
                case 51:
                    if (!(var11 == var2)) {
                        _fun32746_ip = 59;
                        continue _fun32746
                    }
                case 55:
                    var2 = _closure1_slot10;
                case 59:
                    var6 = var5.bind(var6)(var4, var2);
                    var7 = var0.Math;
                    var5 = var7.min;
                    var4 = _closure1_slot11;
                    var2 = var1.goliveMaxQuality;
                    var9 = var2.encode;
                    var10 = var11 == var9;
                    var2 = undefined;
                    if (var10) {
                        _fun32746_ip = 106;
                        continue _fun32746
                    }
                case 101:
                    var2 = var9.height;
                case 106:
                    if (!(var11 == var2)) {
                        _fun32746_ip = 114;
                        continue _fun32746
                    }
                case 110:
                    var2 = _closure1_slot11;
                case 114:
                    var5 = var5.bind(var7)(var4, var2);
                    var9 = var0.Math;
                    var7 = var9.min;
                    var4 = _closure1_slot12;
                    var2 = var1.goliveMaxQuality;
                    var10 = var2.encode;
                    var12 = var11 == var10;
                    var2 = undefined;
                    if (var12) {
                        _fun32746_ip = 162;
                        continue _fun32746
                    }
                case 156:
                    var2 = var10.framerate;
                case 162:
                    if (!(var11 == var2)) {
                        _fun32746_ip = 170;
                        continue _fun32746
                    }
                case 166:
                    var2 = _closure1_slot12;
                case 170:
                    var7 = var7.bind(var9)(var4, var2);
                    var10 = var0.Math;
                    var9 = var10.min;
                    var4 = _closure1_slot10;
                    var2 = var1.goliveMaxQuality;
                    var12 = var2.capture;
                    var13 = var11 == var12;
                    var2 = undefined;
                    if (var13) {
                        _fun32746_ip = 217;
                        continue _fun32746
                    }
                case 212:
                    var2 = var12.width;
                case 217:
                    if (!(var11 == var2)) {
                        _fun32746_ip = 225;
                        continue _fun32746
                    }
                case 221:
                    var2 = _closure1_slot10;
                case 225:
                    var10 = var9.bind(var10)(var4, var2);
                    var12 = var0.Math;
                    var9 = var12.min;
                    var4 = _closure1_slot11;
                    var2 = var1.goliveMaxQuality;
                    var13 = var2.capture;
                    var14 = var11 == var13;
                    var2 = undefined;
                    if (var14) {
                        _fun32746_ip = 272;
                        continue _fun32746
                    }
                case 267:
                    var2 = var13.height;
                case 272:
                    if (!(var11 == var2)) {
                        _fun32746_ip = 280;
                        continue _fun32746
                    }
                case 276:
                    var2 = _closure1_slot11;
                case 280:
                    var9 = var9.bind(var12)(var4, var2);
                    var4 = var0.Math;
                    var2 = var4.min;
                    var0 = _closure1_slot12;
                    var12 = var1.goliveMaxQuality;
                    var12 = var12.capture;
                    var13 = var11 == var12;
                    var8 = undefined;
                    if (var13) {
                        _fun32746_ip = 328;
                        continue _fun32746
                    }
                case 322:
                    var8 = var12.framerate;
                case 328:
                    if (!(var11 == var8)) {
                        _fun32746_ip = 336;
                        continue _fun32746
                    }
                case 332:
                    var8 = _closure1_slot12;
                case 336:
                    var8 = var2.bind(var4)(var0, var8);
                    var2 = _closure1_slot13;
                    var0 = {};
                    var4 = {};
                    var4.width = var10;
                    var4.height = var9;
                    var4.framerate = var8;
                    var0.capture = var4;
                    var4 = {};
                    var4.width = var6;
                    var4.height = var5;
                    var4.framerate = var7;
                    var5 = var6 * var5;
                    var4.pixelCount = var5;
                    var0.encode = var4;
                    var3 = _closure1_slot9;
                    var0.bitrateMin = var3;
                    var3 = var1.goliveSimulcastLQBitrateMax;
                    var0.bitrateMax = var3;
                    var1 = var1.goliveSimulcastLQBitrateTarget;
                    var0.bitrateTarget = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var17 = var1;
                    var16 = var0;
                    var0 = new var17[var2](var16, var15);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0.value = var4;
        var1[11] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/packages/media-engine/VideoQualityManager.tsx';
    var6 = var7.bind(var8)(var6);
    var2.VIDEO_QUALITY_MODES_TO_OVERWRITES = var5;
    var2.WantsVideoQuality = var4;
    var2.VideoQuality = var3;
    var2.VideoQualityManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 3501, 3679, 2]);