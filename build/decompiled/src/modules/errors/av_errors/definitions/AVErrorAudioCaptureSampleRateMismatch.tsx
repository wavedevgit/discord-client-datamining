// modules/errors/av_errors/definitions/AVErrorAudioCaptureSampleRateMismatch.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.Millis;
    var6 = var1.SECOND;
    var1 = 10;
    var1 = var1 * var6;
    var _closure1_slot5 = var1;
    var1 = {};
    var6 = function() {
        _fun117585: for (var _fun117585_ip = 0;;) switch (_fun117585_ip) {
            case 0:
                var1 = _closure1_slot4;
                var0 = var1.getRTCConnection;
                var2 = var0.bind(var1)();
                var6 = null;
                var1 = var6 == var2;
                var0 = undefined;
                var3 = undefined;
                if (var1) {
                    _fun117585_ip = 40;
                    continue _fun117585
                }
            case 30:
                var1 = var2.getDurationSeconds;
                var3 = var1.bind(var2)();
            case 40:
                var4 = var6 != var3;
                var2 = 0;
                if (!var4) {
                    _fun117585_ip = 52;
                    continue _fun117585
                }
            case 49:
                var2 = var3;
            case 52:
                var3 = 30;
                if (!(!(var2 < var3))) {
                    _fun117585_ip = 345;
                    continue _fun117585
                }
            case 62:
                var2 = global;
                var7 = var2.performance;
                var4 = var7.now;
                var7 = var4.bind(var7)();
                var8 = _closure1_slot3;
                var4 = var8.getLastAudioInputDeviceChangeTimestamp;
                var4 = var4.bind(var8)();
                var7 = var7 - var4;
                var4 = _closure1_slot5;
                if (!(!(var7 < var4))) {
                    _fun117585_ip = 345;
                    continue _fun117585
                }
            case 110:
                var8 = _closure1_slot2;
                var7 = var8.getConnectionStats;
                var9 = _closure1_slot4;
                var4 = var9.getRTCConnection;
                var10 = var4.bind(var9)();
                var9 = var6 == var10;
                var4 = undefined;
                if (var9) {
                    _fun117585_ip = 153;
                    continue _fun117585
                }
            case 143:
                var9 = var10.getMediaEngineConnectionId;
                var4 = var9.bind(var10)();
            case 153:
                var7 = var7.bind(var8)(var4);
                var8 = var6 == var7;
                var4 = undefined;
                if (var8) {
                    _fun117585_ip = 219;
                    continue _fun117585
                }
            case 167:
                var7 = var7.stats;
                var7 = var7.rtp;
                var9 = var7.outbound;
                var8 = var9.find;
                var7 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = 'audio';
                    var0 = var0 === var1;
                    return var0;
                };
                var7 = var8.bind(var9)(var7);
                var8 = var6 == var7;
                var4 = undefined;
                if (var8) {
                    _fun117585_ip = 219;
                    continue _fun117585
                }
            case 213:
                var4 = var7.sampleRateMismatchPercent;
            case 219:
                var6 = var6 != var4;
                var1 = 0;
                if (!var6) {
                    _fun117585_ip = 231;
                    continue _fun117585
                }
            case 228:
                var1 = var4;
            case 231:
                var4 = var2.Math;
                var2 = var4.abs;
                var2 = var2.bind(var4)(var1);
                var3 = var2 > var3;
                var2 = var1;
                var1 = undefined;
                if (!var3) {
                    _fun117585_ip = 343;
                    continue _fun117585
                }
            case 260:
                var3 = {};
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var6 = 4;
                var6 = var5[var6];
                var6 = var4.bind(var0)(var6);
                var6 = var6.AVError;
                var6 = var6.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH;
                var3.type = var6;
                var3.audioCaptureSampleRateMismatchPercent = var2;
                var2 = 5;
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.getVoiceChannelErrorContext;
                var11 = var2.bind(var4)();
                var12 = var3;
                var2 = copyDataProperties(var12, var11);
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
            case 343:
                return var1;
            case 345:
                return var0;
        }
    };
    var1.getActiveErrors = var6;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.mediaSessionId;
        var3 = var0.audioInputDeviceName;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = ':';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var1.makeErrorContextKey = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/av_errors/definitions/AVErrorAudioCaptureSampleRateMismatch.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AVErrorAudioCaptureSampleRateMismatchDefinition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3567, 3435, 3477, 667, 7967, 14938, 2]);