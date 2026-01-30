// modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx
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
    var1 = var4.bind(var0)(var1);
    var1 = var1.ApplicationStreamStates;
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.Millis;
    var6 = var1.SECOND;
    var1 = 20;
    var1 = var1 * var6;
    var _closure1_slot6 = var1;
    var1 = {};
    var6 = function() { // Original name: getActiveErrors, environment: var3
        _fun118210: for (var _fun118210_ip = 0;;) switch (_fun118210_ip) {
            case 0:
                var1 = _closure1_slot3;
                var0 = var1.getCurrentUserActiveStream;
                var8 = var0.bind(var1)();
                var0 = null;
                if (!(var0 != var8)) {
                    _fun118210_ip = 580;
                    continue _fun118210
                }
            case 26:
                var2 = var8.state;
                var1 = _closure1_slot5;
                var1 = var1.PAUSED;
                if (!(var2 !== var1)) {
                    _fun118210_ip = 580;
                    continue _fun118210
                }
            case 48:
                var2 = _closure1_slot3;
                var1 = var2.getViewerIds;
                var1 = var1.bind(var2)(var8);
                var2 = var1.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun118210_ip = 578;
                    continue _fun118210
                }
            case 77:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var10 = 5;
                var1 = var1[var10];
                var9 = undefined;
                var2 = var2.bind(var9)(var1);
                var1 = var2.encodeStreamKey;
                var5 = var1.bind(var2)(var8);
                var2 = _closure1_slot4;
                var1 = var2.getRTCConnection;
                var2 = var1.bind(var2)(var5);
                if (!(var0 != var2)) {
                    _fun118210_ip = 576;
                    continue _fun118210
                }
            case 132:
                var1 = var2.getMediaEngineConnectionId;
                var6 = var1.bind(var2)();
                if (!(var0 != var6)) {
                    _fun118210_ip = 574;
                    continue _fun118210
                }
            case 149:
                var4 = _closure1_slot4;
                var1 = var4.getLastNonZeroRemoteVideoSinkWantsTime;
                var4 = var1.bind(var4)(var5);
                if (!(var0 != var4)) {
                    _fun118210_ip = 200;
                    continue _fun118210
                }
            case 168:
                var1 = global;
                var5 = var1.performance;
                var1 = var5.now;
                var1 = var1.bind(var5)();
                var4 = var1 - var4;
                var1 = _closure1_slot6;
                if (!(!(var4 < var1))) {
                    _fun118210_ip = 572;
                    continue _fun118210
                }
            case 200:
                var1 = var2.hasActiveRemoteWants;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun118210_ip = 215;
                    continue _fun118210
                }
            case 213:
                return var0;
            case 215:
                var5 = _closure1_slot2;
                var4 = var5.getParticipant;
                var2 = var8.channelId;
                var7 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var10];
                var7 = var7.bind(var9)(var1);
                var1 = var7.encodeStreamKey;
                var1 = var1.bind(var7)(var8);
                var5 = var4.bind(var5)(var2, var1);
                if (!(var0 != var5)) {
                    _fun118210_ip = 570;
                    continue _fun118210
                }
            case 271:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 6;
                var1 = var1[var7];
                var4 = var2.bind(var9)(var1);
                var2 = var4.getAccumulatedStatsWithMinDatapoints;
                var1 = var8.ownerId;
                var4 = var2.bind(var4)(var6, var1);
                if (!(var0 != var4)) {
                    _fun118210_ip = 568;
                    continue _fun118210
                }
            case 316:
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 7;
                var1 = var6[var1];
                var2 = var2.bind(var9)(var1);
                var1 = var2.getMaxQuality;
                var2 = var1.bind(var2)(var5);
                var5 = var0 == var2;
                var1 = null;
                if (var5) {
                    _fun118210_ip = 566;
                    continue _fun118210
                }
            case 359:
                var5 = var4.short;
                var6 = var5.frameRate;
                var11 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var12 = var11.bind(var9)(var5);
                var11 = var12.getWarningFrameRate;
                var5 = var2.maxFrameRate;
                var5 = var11.bind(var12)(var5);
                if (!(!(var6 < var5))) {
                    _fun118210_ip = 464;
                    continue _fun118210
                }
            case 409:
                var4 = var4.long;
                var4 = var4.frameRate;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var6 = var6.bind(var9)(var5);
                var5 = var6.getWarningFrameRate;
                var2 = var2.maxFrameRate;
                var2 = var5.bind(var6)(var2);
                var4 = var4 < var2;
                var2 = null;
                if (!var4) {
                    _fun118210_ip = 563;
                    continue _fun118210
                }
            case 464:
                var4 = {};
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var5 = 8;
                var5 = var3[var5];
                var5 = var7.bind(var9)(var5);
                var5 = var5.AVError;
                var5 = var5.STREAM_SEND_LOW_FPS;
                var4.type = var5;
                var5 = 9;
                var5 = var3[var5];
                var6 = var7.bind(var9)(var5);
                var5 = var6.getStreamErrorContext;
                var3 = var3[var10];
                var7 = var7.bind(var9)(var3);
                var3 = var7.encodeStreamKey;
                var3 = var3.bind(var7)(var8);
                var13 = var5.bind(var6)(var3);
                var14 = var4;
                var3 = copyDataProperties(var14, var13);
                var3 = new Array(1);
                var3[0] = var4;
                var2 = var3;
            case 563:
                var1 = var2;
            case 566:
                return var1;
            case 568:
                return var0;
            case 570:
                return var0;
            case 572:
                return var0;
            case 574:
                return var0;
            case 576:
                return var0;
            case 578:
                return var0;
            case 580:
                return var0;
        }
    };
    var1.getActiveErrors = var6;
    var3 = function(arg0) { // Original name: makeErrorContextKey, environment: var3
        var0 = arg0;
        var4 = var0.streamKey;
        var3 = var0.mediaSessionId;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = ':';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var1.makeErrorContextKey = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AVErrorStreamSendLowFPSDefinition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3908, 3673, 3568, 660, 667, 3464, 15011, 7980, 7968, 15008, 2]);