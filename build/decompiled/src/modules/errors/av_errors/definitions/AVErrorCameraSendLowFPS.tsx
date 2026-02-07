// modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx
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
    var1 = 20;
    var1 = var1 * var6;
    var _closure1_slot5 = var1;
    var1 = {};
    var6 = function() {
        _fun118306: for (var _fun118306_ip = 0;;) switch (_fun118306_ip) {
            case 0:
                var1 = _closure1_slot4;
                var0 = var1.getRTCConnection;
                var2 = var0.bind(var1)();
                var0 = null;
                if (!(var0 != var2)) {
                    _fun118306_ip = 332;
                    continue _fun118306
                }
            case 26:
                var1 = var2.getMediaEngineConnectionId;
                var5 = var1.bind(var2)();
                if (!(var0 != var5)) {
                    _fun118306_ip = 330;
                    continue _fun118306
                }
            case 43:
                var4 = _closure1_slot3;
                var1 = var4.isVideoEnabled;
                var1 = var1.bind(var4)();
                if (var1) {
                    _fun118306_ip = 62;
                    continue _fun118306
                }
            case 60:
                return var0;
            case 62:
                var4 = _closure1_slot4;
                var1 = var4.getLastNonZeroRemoteVideoSinkWantsTime;
                var4 = var1.bind(var4)();
                if (!(var0 != var4)) {
                    _fun118306_ip = 112;
                    continue _fun118306
                }
            case 80:
                var1 = global;
                var6 = var1.performance;
                var1 = var6.now;
                var1 = var1.bind(var6)();
                var4 = var1 - var4;
                var1 = _closure1_slot5;
                if (!(!(var4 < var1))) {
                    _fun118306_ip = 328;
                    continue _fun118306
                }
            case 112:
                var1 = var2.hasActiveRemoteWants;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun118306_ip = 127;
                    continue _fun118306
                }
            case 125:
                return var0;
            case 127:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 4;
                var1 = var4[var1];
                var6 = undefined;
                var4 = var2.bind(var6)(var1);
                var2 = var4.getAccumulatedStatsWithMinDatapoints;
                var7 = _closure1_slot2;
                var1 = var7.getId;
                var1 = var1.bind(var7)();
                var2 = var2.bind(var4)(var5, var1);
                var4 = var0 == var2;
                var1 = null;
                if (var4) {
                    _fun118306_ip = 326;
                    continue _fun118306
                }
            case 187:
                var4 = var2.short;
                var5 = var4.frameRate;
                var4 = 10;
                if (!(!(var5 < var4))) {
                    _fun118306_ip = 227;
                    continue _fun118306
                }
            case 206:
                var2 = var2.long;
                var2 = var2.frameRate;
                var4 = var2 < var4;
                var2 = undefined;
                if (!var4) {
                    _fun118306_ip = 323;
                    continue _fun118306
                }
            case 227:
                var4 = {};
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var8 = 5;
                var8 = var7[var8];
                var8 = var5.bind(var6)(var8);
                var8 = var8.AVError;
                var8 = var8.CAMERA_SEND_LOW_FPS;
                var4.type = var8;
                var8 = _closure1_slot2;
                var3 = var8.getId;
                var3 = var3.bind(var8)();
                var4.userId = var3;
                var3 = 6;
                var3 = var7[var3];
                var5 = var5.bind(var6)(var3);
                var3 = var5.getVoiceChannelErrorContext;
                var9 = var3.bind(var5)();
                var10 = var4;
                var3 = copyDataProperties(var10, var9);
                var3 = new Array(1);
                var3[0] = var4;
                var2 = var3;
            case 323:
                var1 = var2;
            case 326:
                return var1;
            case 328:
                return var0;
            case 330:
                return var0;
            case 332:
                return var0;
        }
    };
    var1.getActiveErrors = var6;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.mediaSessionId;
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = '';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var1.makeErrorContextKey = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AVErrorCameraSendLowFPSDefinition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3477, 3519, 667, 15078, 8076, 15075, 2]);