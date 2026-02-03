// modules/media_uploads/native/VideoUploadUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
var7 = require;
        var5 = metroImportDefault;
        var2 = exports;
        var8 = dependencyMap;
        var3 = function arg0, arg1() {
            _fun37716: for(var _fun37716_ip = 0; ; ) switch(_fun37716_ip) {
case 0:
                var0 = arg0;
                var7 = arg1;
                var2 = var0.width;
                var1 = var0.height;
                var1 = var2 / var1;
                var3 = var0.width;
                var2 = var0.height;
                if(!(!(var3 > var2))) { _fun37716_ip = 86; continue _fun37716 }
case 34:
                var2 = global;
                var5 = var2.Math;
                var4 = var5.min;
                var3 = var0.width;
                var3 = var4.bind(var5)(var7, var3);
                var5 = var2.Math;
                var4 = var5.round;
                var2 = var3 / var1;
                var2 = var4.bind(var5)(var2);
                var6 = var3;
                var3 = var2;
                _fun37716_ip = 133; continue _fun37716;
case 86:
                var2 = global;
                var5 = var2.Math;
                var4 = var5.min;
                var0 = var0.height;
                var0 = var4.bind(var5)(var7, var0);
                var4 = var2.Math;
                var2 = var4.round;
                var1 = var0 * var1;
                var6 = var2.bind(var4)(var1);
                var3 = var0;
case 133:
                var0 = {};
                var1 = 2;
                var5 = var6 % var1;
                var4 = 0;
                var2 = var6;
                if(!(var5 !== var4)) { _fun37716_ip = 158; continue _fun37716 }
case 151:
                var5 = 1;
                var2 = var6 + var5;
case 158:
                var0.width = var2;
                var2 = var3 % var1;
                var1 = var3;
                if(!(var2 !== var4)) { _fun37716_ip = 180; continue _fun37716 }
case 173:
                var2 = 1;
                var1 = var3 + var2;
case 180:
                var0.height = var1;
                return var0;
            }
        };
        var _closure1_slot5 = var3;
        var0 = global;
        var9 = var0.Object;
        var6 = var9.defineProperty;
        var4 = {};
        var0 = true;
        var4.value = var0;
        var0 = '__esModule';
        var0 = var6.bind(var9)(var2, var0, var4);
        var0 = 0;
        var4 = var8[var0];
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var _closure1_slot1 = var4;
        var4 = 1;
        var4 = var8[var4];
        var4 = var5.bind(var0)(var4);
        var _closure1_slot2 = var4;
        var4 = 2;
        var4 = var8[var4];
        var4 = var7.bind(var0)(var4);
        var4 = var4.VideoCompressionQuality;
        var _closure1_slot3 = var4;
        var4 = 3;
        var4 = var8[var4];
        var6 = var5.bind(var0)(var4);
        var4 = var6.prototype;
        var5 = Object.create(var4, {constructor: {value: var6}});
        var13 = 'VideoUploadUtils.tsx';
        var14 = var5;
        var4 = new var14[var6](var13, var12);
        var4 = var4 instanceof Object ? var4 : var5;
        var _closure1_slot4 = var4;
        var4 = function() { // Environment: var1
            var3 = _closure1_slot2;
            var2 = function arg0, arg1, arg2() {
                var2 = this;
                var3 = _closure1_slot1;
                var1 = _closure2_slot0;
                var0 = undefined;
                var1 = var3.bind(var0)(var2, var1);
                var1 = arg0;
                var2.value = var1;
                var1 = arg1;
                var2.targetResolution = var1;
                var1 = arg2;
                var2.targetBitrate = var1;
                return var0;
            };
            var _closure2_slot0 = var2;
            var0 = {};
            var4 = 'toString';
            var0.key = var4;
            var1 = function () {
                var0 = this;
                var0 = var0.value;
                return var0;
            };
            var0.value = var1;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var5 = var4.bind(var0)();
        var _closure1_slot0 = var5;
        var4 = var5.prototype;
        var6 = Object.create(var4, {constructor: {value: var5}});
        var13 = 'very_low';
        var10 = 360;
        var11 = 800000;
        var14 = var6;
        var12 = var10;
        var4 = new var14[var5](var13, var12, var11, var10);
        var4 = var4 instanceof Object ? var4 : var6;
        var5.VERY_LOW = var4;
        var4 = var5.prototype;
        var6 = Object.create(var4, {constructor: {value: var5}});
        var13 = 'low';
        var11 = 1200000;
        var14 = var6;
        var4 = new var14[var5](var13, var12, var11, var10);
        var4 = var4 instanceof Object ? var4 : var6;
        var5.LOW = var4;
        var4 = var5.prototype;
        var6 = Object.create(var4, {constructor: {value: var5}});
        var13 = 'medium';
        var12 = 480;
        var11 = 2000000;
        var14 = var6;
        var4 = new var14[var5](var13, var12, var11, var10);
        var4 = var4 instanceof Object ? var4 : var6;
        var5.MEDIUM = var4;
        var4 = var5.prototype;
        var6 = Object.create(var4, {constructor: {value: var5}});
        var13 = 'high';
        var12 = 720;
        var11 = 2500000;
        var14 = var6;
        var4 = new var14[var5](var13, var12, var11, var10);
        var4 = var4 instanceof Object ? var4 : var6;
        var5.HIGH = var4;
        var4 = var5.prototype;
        var6 = Object.create(var4, {constructor: {value: var5}});
        var13 = 'very_high';
        var12 = 1080;
        var11 = 7000000;
        var14 = var6;
        var4 = new var14[var5](var13, var12, var11, var10);
        var4 = var4 instanceof Object ? var4 : var6;
        var5.VERY_HIGH = var4;
        var4 = function(arg0) { // Environment: var1
            _fun37720: for(var _fun37720_ip = 0; ; ) switch(_fun37720_ip) {
case 0:
                var4 = arg0;
                var5 = arguments[1];
                var0 = undefined;
                if(!(var5 === var0)) { _fun37720_ip = 15; continue _fun37720 }
case 12:
                var5 = 1;
case 15:
                var0 = _closure1_slot3;
                var0 = var0.VERY_LOW;
                if(!(var0 !== var4)) { _fun37720_ip = 194; continue _fun37720 }
case 35:
                var0 = _closure1_slot3;
                var0 = var0.LOW;
                if(!(var0 !== var4)) { _fun37720_ip = 182; continue _fun37720 }
case 52:
                var0 = _closure1_slot3;
                var0 = var0.MEDIUM;
                if(!(var0 !== var4)) { _fun37720_ip = 170; continue _fun37720 }
case 66:
                var0 = _closure1_slot3;
                var0 = var0.HIGH;
                if(!(var0 !== var4)) { _fun37720_ip = 158; continue _fun37720 }
case 80:
                var0 = _closure1_slot3;
                var0 = var0.VERY_HIGH;
                if(!(var0 !== var4)) { _fun37720_ip = 146; continue _fun37720 }
case 94:
                var0 = global;
                var3 = var0.Error;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = 'Unknown compression quality: ';
                var8 = var2.bind(var0)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var9 = var2;
                var0 = new var9[var3](var8, var7);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
case 146:
                var0 = _closure1_slot0;
                var0 = var0.VERY_HIGH;
                _fun37720_ip = 204; continue _fun37720;
case 158:
                var2 = _closure1_slot0;
                var0 = var2.HIGH;
                _fun37720_ip = 204; continue _fun37720;
case 170:
                var2 = _closure1_slot0;
                var0 = var2.MEDIUM;
                _fun37720_ip = 204; continue _fun37720;
case 182:
                var2 = _closure1_slot0;
                var0 = var2.LOW;
                _fun37720_ip = 204; continue _fun37720;
case 194:
                var2 = _closure1_slot0;
                var0 = var2.VERY_LOW;
case 204:
                var2 = 1;
                if(!(var2 === var5)) { _fun37720_ip = 213; continue _fun37720 }
case 211:
                return var0;
case 213:
                var2 = global;
                var4 = var2.Math;
                var3 = var4.round;
                var2 = var0.targetBitrate;
                var2 = var2 * var5;
                var6 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var8 = var0.value;
                var7 = var0.targetResolution;
                var1 = var3.prototype;
                var1 = Object.create(var1, {constructor: {value: var3}});
                var9 = var1;
                var0 = new var9[var3](var8, var7, var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            }
        };
        var5.fromCompressionQuality = var4;
        var4 = {'bitrateFloor': 300000, 'createHDR': false, 'frameRate': 30, 'keyFrameIntervalSeconds': 2, 'rotationDegrees': 0, 'skipVideoTranscode': false, 'targetBitrate': null, 'targetHeight': 480, 'targetWidth': 640, 'useHEVC': false, 'videoQuality': null, 'hevcIsSupported': false, 'useTranscodedVideoForMovSources': true, 'transmuxLivePhotos': true, 'progressUpdateGranularity': 10};
        var6 = var5.MEDIUM;
        var6 = var6.targetBitrate;
        var4.targetBitrate = var6;
        var6 = var5.MEDIUM;
        var4.videoQuality = var6;
        var6 = 4;
        var6 = var8[var6];
        var8 = var7.bind(var0)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'modules/media_uploads/native/VideoUploadUtils.tsx';
        var6 = var7.bind(var8)(var6);
        var2.VideoQualityTarget = var5;
        var2.DEFAULT_VIDEO_ENCODING_CONFIG = var4;
        var2.calculateTargetDimensions = var3;
        var3 = function arg0, arg1, arg2, arg3() {
            _fun37721: for(var _fun37721_ip = 0; ; ) switch(_fun37721_ip) {
case 0:
                var0 = arg0;
                var1 = arg1;
                var4 = arg2;
                var3 = arg3;
                var2 = null;
                if(!(var2 != var4)) { _fun37721_ip = 29; continue _fun37721 }
case 18:
                if(!(var2 != var3)) { _fun37721_ip = 29; continue _fun37721 }
case 22:
                if(!(!(var4 > var3))) { _fun37721_ip = 194; continue _fun37721 }
case 29:
                var5 = _closure1_slot5;
                var4 = var0.targetResolution;
                var3 = undefined;
                var3 = var5.bind(var3)(var1, var4);
                var4 = global;
                var7 = var4.Math;
                var6 = var7.round;
                var5 = var1.width;
                var6 = var6.bind(var7)(var5);
                var7 = var4.Math;
                var5 = var7.round;
                var4 = var1.height;
                var5 = var5.bind(var7)(var4);
                var4 = var3.width;
                var4 = var6 <= var4;
                if(!var4) { _fun37721_ip = 115; continue _fun37721 }
case 106:
                var3 = var3.height;
                var4 = var5 <= var3;
case 115:
                var3 = var1.bitRate;
                var0 = var0.targetBitrate;
                var3 = var3 <= var0;
                var0 = !var4;
                if(!var4) { _fun37721_ip = 140; continue _fun37721 }
case 137:
                var0 = !var3;
case 140:
                if(var0) { _fun37721_ip = 152; continue _fun37721 }
case 143:
                var3 = var1.format;
                var0 = var2 == var3;
case 152:
                if(var0) { _fun37721_ip = 189; continue _fun37721 }
case 155:
                var4 = var1.format;
                var3 = var4.match;
                var1 = /(avc1|hvc1|video\\/(avc|hevc))/i;
                var1 = var3.bind(var4)(var1);
                var0 = var2 === var1;
case 189:
                var0 = !var0;
                return var0;
case 194:
                var0 = false;
                return var0;
            }
        };
        var2.canSkipVideoTranscode = var3;
        var3 = function arg0() {
            _fun37722: for(var _fun37722_ip = 0; ; ) switch(_fun37722_ip) {
case 0:
                var3 = arg0;
                var0 = var3.format;
                var1 = null;
                var0 = var1 != var0;
                var7 = 'unknown';
                if(!var0) { _fun37722_ip = 56; continue _fun37722 }
case 21:
                var2 = var3.format;
                var0 = {'hvc1': 'hvc1 (HEVC)', 'avc1': 'avc1 (H.264)'};
                var0 = var0[var2];
                if(!(var1 == var0)) { _fun37722_ip = 53; continue _fun37722 }
case 48:
                var0 = var3.format;
case 53:
                var7 = var0;
case 56:
                var5 = _closure1_slot4;
                var2 = var5.info;
                var0 = 'Video Source Metadata:';
                var0 = var2.bind(var5)(var0);
                var4 = var5.info;
                var0 = global;
                var2 = var0.HermesInternal;
                var6 = var2.concat;
                var2 = '- Codec: ';
                var2 = var6.bind(var2)(var7);
                var2 = var4.bind(var5)(var2);
                var4 = var5.info;
                var9 = var3.width;
                var8 = var3.height;
                var2 = var0.HermesInternal;
                var7 = var2.concat;
                var6 = '- Dimensions: ';
                var2 = 'x';
                var2 = var7.bind(var6)(var9, var2, var8);
                var2 = var4.bind(var5)(var2);
                var4 = var5.info;
                var8 = var3.bitRate;
                var2 = var0.HermesInternal;
                var7 = var2.concat;
                var6 = '- Bitrate: ';
                var2 = ' bps';
                var2 = var7.bind(var6)(var8, var2);
                var2 = var4.bind(var5)(var2);
                var4 = var5.info;
                var8 = var3.frameRate;
                var2 = var0.HermesInternal;
                var7 = var2.concat;
                var6 = '- Frame Rate: ';
                var2 = ' fps';
                var2 = var7.bind(var6)(var8, var2);
                var2 = var4.bind(var5)(var2);
                var4 = var5.info;
                var2 = var3.isHDRContent;
                var6 = 'No';
                if(!var2) { _fun37722_ip = 283; continue _fun37722 }
case 277:
                var6 = 'Yes';
case 283:
                var2 = '- HDR: ';
                var2 = var2 + var6;
                var2 = var4.bind(var5)(var2);
                var2 = _closure1_slot4;
                var4 = var2.info;
                var6 = var3.rotationDegrees;
                var1 = var0.HermesInternal;
                var5 = var1.concat;
                var1 = '- Rotation Degrees: ';
                var1 = var5.bind(var1)(var6);
                var1 = var4.bind(var2)(var1);
                var4 = var2.info;
                var6 = var3.sourceProfile;
                var1 = var0.HermesInternal;
                var5 = var1.concat;
                var1 = '- Profile: ';
                var1 = var5.bind(var1)(var6);
                var1 = var4.bind(var2)(var1);
                var4 = var2.info;
                var6 = var3.sourceLevel;
                var1 = var0.HermesInternal;
                var5 = var1.concat;
                var1 = '- Level: ';
                var1 = var5.bind(var1)(var6);
                var1 = var4.bind(var2)(var1);
                var1 = var2.info;
                var5 = var3.durationMs;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '- Duration: ';
                var0 = ' ms';
                var0 = var4.bind(var3)(var5, var0);
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            }
        };
        var2.logSourceMetadata = var3;
        var3 = function arg0() {
            _fun37723: for(var _fun37723_ip = 0; ; ) switch(_fun37723_ip) {
case 0:
                var6 = arg0;
                var5 = _closure1_slot4;
                var1 = var5.info;
                var0 = 'Encoder Video Quality Settings:';
                var0 = var1.bind(var5)(var0);
                var3 = var5.info;
                var2 = var6.videoQuality;
                var7 = null;
                var1 = var7 == var2;
                var0 = undefined;
                var9 = undefined;
                if(var1) { _fun37723_ip = 61; continue _fun37723 }
case 52:
                var1 = var2.toString;
                var9 = var1.bind(var2)();
case 61:
                var1 = global;
                var2 = var1.HermesInternal;
                var8 = var2.concat;
                var2 = '- Compression Quality: ';
                var2 = var8.bind(var2)(var9);
                var2 = var3.bind(var5)(var2);
                var5 = _closure1_slot4;
                var3 = var5.info;
                var2 = var6.videoQuality;
                var8 = var7 == var2;
                var10 = undefined;
                if(var8) { _fun37723_ip = 121; continue _fun37723 }
case 115:
                var10 = var2.targetResolution;
case 121:
                var2 = var1.HermesInternal;
                var9 = var2.concat;
                var8 = '- Compression Quality Target Resolution: ';
                var2 = 'p';
                var2 = var9.bind(var8)(var10, var2);
                var2 = var3.bind(var5)(var2);
                var5 = _closure1_slot4;
                var3 = var5.info;
                var2 = var6.videoQuality;
                var7 = var7 == var2;
                var8 = undefined;
                if(var7) { _fun37723_ip = 184; continue _fun37723 }
case 178:
                var8 = var2.targetBitrate;
case 184:
                var2 = var1.HermesInternal;
                var7 = var2.concat;
                var2 = '- Compression Quality Max Bitrate: ';
                var11 = ' bps';
                var2 = var7.bind(var2)(var8, var11);
                var2 = var3.bind(var5)(var2);
                var5 = _closure1_slot4;
                var3 = var5.info;
                var2 = 'Encoder Video Transcoding Settings:';
                var2 = var3.bind(var5)(var2);
                var5 = var6.skipVideoTranscode;
                var3 = _closure1_slot4;
                var2 = var3.info;
                if(var5) { _fun37723_ip = 653; continue _fun37723 }
case 261:
                var5 = var6.useHEVC;
                var7 = 'avc1 (H.264)';
                if(!var5) { _fun37723_ip = 282; continue _fun37723 }
case 276:
                var7 = 'hvc1 (HEVC)';
case 282:
                var5 = '- Codec: ';
                var5 = var5 + var7;
                var5 = var2.bind(var3)(var5);
                var8 = _closure1_slot4;
                var7 = var8.info;
                var13 = var6.targetWidth;
                var12 = var6.targetHeight;
                var5 = var1.HermesInternal;
                var10 = var5.concat;
                var9 = '- Dimensions: ';
                var5 = 'x';
                var5 = var10.bind(var9)(var13, var5, var12);
                var5 = var7.bind(var8)(var5);
                var7 = var8.info;
                var10 = var6.targetBitrate;
                var5 = var1.HermesInternal;
                var9 = var5.concat;
                var5 = '- Bitrate: ';
                var5 = var9.bind(var5)(var10, var11);
                var5 = var7.bind(var8)(var5);
                var7 = var8.info;
                var11 = var6.frameRate;
                var5 = var1.HermesInternal;
                var10 = var5.concat;
                var9 = '- Frame Rate: ';
                var5 = ' fps';
                var5 = var10.bind(var9)(var11, var5);
                var5 = var7.bind(var8)(var5);
                var7 = var8.info;
                var11 = var6.keyFrameIntervalSeconds;
                var5 = var1.HermesInternal;
                var10 = var5.concat;
                var9 = '- Key Frame Interval: ';
                var5 = ' seconds';
                var5 = var10.bind(var9)(var11, var5);
                var5 = var7.bind(var8)(var5);
                var7 = var8.info;
                var5 = var6.createHDR;
                var9 = 'No';
                var10 = var9;
                if(!var5) { _fun37723_ip = 514; continue _fun37723 }
case 508:
                var10 = 'Yes';
case 514:
                var5 = '- Create HDR: ';
                var5 = var5 + var10;
                var5 = var7.bind(var8)(var5);
                var8 = _closure1_slot4;
                var7 = var8.info;
                var11 = var6.rotationDegrees;
                var5 = var1.HermesInternal;
                var10 = var5.concat;
                var5 = '- Rotation Degrees: ';
                var5 = var10.bind(var5)(var11);
                var5 = var7.bind(var8)(var5);
                var7 = var8.info;
                var5 = var6.hevcIsSupported;
                if(!var5) { _fun37723_ip = 593; continue _fun37723 }
case 587:
                var9 = 'Yes';
case 593:
                var5 = '- HEVC Supported: ';
                var5 = var5 + var9;
                var5 = var7.bind(var8)(var5);
                var5 = _closure1_slot4;
                var4 = var5.info;
                var7 = var6.progressUpdateGranularity;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var1 = '- Progress Update Granularity: ';
                var1 = var6.bind(var1)(var7);
                var1 = var4.bind(var5)(var1);
                _fun37723_ip = 664; continue _fun37723;
case 653:
                var1 = '- Skip Video Transcode: Yes';
                var1 = var2.bind(var3)(var1);
case 664:
                return var0;
            }
        };
        var2.logEncoderSettings = var3;
        var3 = function arg0, arg1, arg2() {
            var0 = arg0;
            var4 = var0.bitRate;
            var0 = global;
            var3 = var0.Math;
            var2 = var3.max;
            var1 = arg2;
            var3 = var2.bind(var3)(var4, var1);
            var2 = var0.Math;
            var1 = var2.min;
            var0 = arg1;
            var0 = var0.targetBitrate;
            var0 = var1.bind(var2)(var3, var0);
            return var0;
        };
        var2.calculateOptimalBitrate = var3;
        var1 = function arg0, arg1, arg2, arg3, arg4() {
            _fun37725: for(var _fun37725_ip = 0; ; ) switch(_fun37725_ip) {
case 0:
                var1 = arg3;
                var0 = arg1;
                var2 = !var0;
                if(var2) { _fun37725_ip = 18; continue _fun37725 }
case 12:
                var0 = arg2;
                var2 = !var0;
case 18:
                var0 = !var2;
                if(var2) { _fun37725_ip = 54; continue _fun37725 }
case 24:
                if(!var1) { _fun37725_ip = 42; continue _fun37725 }
case 27:
                var2 = arg0;
                var3 = var2.rotationDegrees;
                var2 = 0;
                var1 = var2 !== var3;
case 42:
                if(!var1) { _fun37725_ip = 51; continue _fun37725 }
case 45:
                var2 = arg4;
                var1 = !var2;
case 51:
                var0 = !var1;
case 54:
                return var0;
            }
        };
        var2.shouldUseHEVC = var1;
        return var0;})(undefined,undefined,undefined,undefined,undefined,undefined,[6,7,3197,3,2]);