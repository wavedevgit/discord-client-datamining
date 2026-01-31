// modules/errors/av_errors/AVErrorContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function() {
        _fun117538: for (var _fun117538_ip = 0;;) switch (_fun117538_ip) {
            case 0:
                var0 = {};
                var3 = _closure1_slot2;
                var1 = var3.getVideoDevices;
                var3 = var1.bind(var3)();
                var4 = _closure1_slot2;
                var1 = var4.getVideoDeviceId;
                var1 = var1.bind(var4)();
                var5 = var3[var1];
                var3 = null;
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun117538_ip = 53;
                    continue _fun117538
                }
            case 48:
                var4 = var5.name;
            case 53:
                var0.videoDeviceName = var4;
                var5 = _closure1_slot2;
                var4 = var5.getInputDevices;
                var5 = var4.bind(var5)();
                var6 = _closure1_slot2;
                var4 = var6.getInputDeviceId;
                var4 = var4.bind(var6)();
                var5 = var5[var4];
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun117538_ip = 104;
                    continue _fun117538
                }
            case 99:
                var4 = var5.name;
            case 104:
                var0.audioInputDeviceName = var4;
                var5 = _closure1_slot2;
                var4 = var5.getOutputDevices;
                var4 = var4.bind(var5)();
                var5 = _closure1_slot2;
                var2 = var5.getOutputDeviceId;
                var2 = var2.bind(var5)();
                var2 = var4[var2];
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun117538_ip = 155;
                    continue _fun117538
                }
            case 150:
                var1 = var2.name;
            case 155:
                var0.audioOutputDeviceName = var1;
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/AVErrorContext.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        _fun117539: for (var _fun117539_ip = 0;;) switch (_fun117539_ip) {
            case 0:
                var2 = _closure1_slot4;
                var0 = var2.getVoiceChannelId;
                var5 = var0.bind(var2)();
                var0 = {};
                var3 = null;
                var6 = var3 != var5;
                var2 = undefined;
                var4 = undefined;
                if (!var6) {
                    _fun117539_ip = 35;
                    continue _fun117539
                }
            case 32:
                var4 = var5;
            case 35:
                var0.channelId = var4;
                var5 = _closure1_slot3;
                var4 = var5.getMediaSessionId;
                var4 = var4.bind(var5)();
                var5 = var3 != var4;
                var3 = undefined;
                if (!var5) {
                    _fun117539_ip = 65;
                    continue _fun117539
                }
            case 62:
                var3 = var4;
            case 65:
                var0.mediaSessionId = var3;
                var4 = _closure1_slot3;
                var3 = var4.getRTCConnectionId;
                var3 = var3.bind(var4)();
                var0.rtcConnectionId = var3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 4;
                var3 = var5[var3];
                var3 = var4.bind(var2)(var3);
                var3 = var3.MediaEngineContextTypes;
                var3 = var3.DEFAULT;
                var0.mediaContext = var3;
                var1 = _closure1_slot6;
                var7 = var1.bind(var2)();
                var8 = var0;
                var1 = copyDataProperties(var8, var7);
                return var0;
        }
    };
    var2.getVoiceChannelErrorContext = var4;
    var3 = function arg0() {
        _fun117540: for (var _fun117540_ip = 0;;) switch (_fun117540_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 5;
                var0 = var2[var0];
                var2 = undefined;
                var3 = var3.bind(var2)(var0);
                var0 = var3.decodeStreamKey;
                var0 = var0.bind(var3)(var4);
                var5 = var0.channelId;
                var3 = var0.ownerId;
                var6 = _closure1_slot5;
                var0 = var6.getRTCConnection;
                var7 = var0.bind(var6)(var4);
                var0 = {};
                var0.channelId = var5;
                var5 = null;
                var6 = var5 == var7;
                var8 = undefined;
                if (var6) {
                    _fun117540_ip = 92;
                    continue _fun117540
                }
            case 82:
                var6 = var7.getMediaSessionId;
                var8 = var6.bind(var7)();
            case 92:
                var9 = var5 != var8;
                var6 = undefined;
                if (!var9) {
                    _fun117540_ip = 104;
                    continue _fun117540
                }
            case 101:
                var6 = var8;
            case 104:
                var0.mediaSessionId = var6;
                var6 = var5 == var7;
                var5 = undefined;
                if (var6) {
                    _fun117540_ip = 128;
                    continue _fun117540
                }
            case 118:
                var6 = var7.getRTCConnectionId;
                var5 = var6.bind(var7)();
            case 128:
                var0.rtcConnectionId = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 4;
                var5 = var7[var5];
                var5 = var6.bind(var2)(var5);
                var5 = var5.MediaEngineContextTypes;
                var5 = var5.STREAM;
                var0.mediaContext = var5;
                var0.streamKey = var4;
                var0.userId = var3;
                var1 = _closure1_slot6;
                var10 = var1.bind(var2)();
                var11 = var0;
                var1 = copyDataProperties(var11, var10);
                return var0;
        }
    };
    var2.getStreamErrorContext = var3;
    var2.getCommonErrorContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3435, 3477, 1661, 3568, 3592, 3464, 2]);