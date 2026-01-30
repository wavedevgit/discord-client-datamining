// modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx
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
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ApplicationStreamStates;
    var _closure1_slot6 = var1;
    var1 = {};
    var6 = function() { // Original name: getActiveErrors, environment: var3
        _fun118195: for (var _fun118195_ip = 0;;) switch (_fun118195_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.getReportInboundErrors;
                var2 = var0.bind(var2)();
                var0 = null;
                if (!var2) {
                    _fun118195_ip = 79;
                    continue _fun118195
                }
            case 40:
                var2 = _closure1_slot3;
                var1 = var2.getAllActiveStreams;
                var4 = var1.bind(var2)();
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun118196: for (var _fun118196_ip = 0;;) switch (_fun118196_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = arg1;
                            var4 = _closure1_slot5;
                            var2 = var4.getRTCConnection;
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var9 = 6;
                            var1 = var1[var9];
                            var8 = undefined;
                            var5 = var5.bind(var8)(var1);
                            var1 = var5.encodeStreamKey;
                            var1 = var1.bind(var5)(var7);
                            var2 = var2.bind(var4)(var1);
                            var4 = null;
                            var1 = var4 == var2;
                            var10 = undefined;
                            if (var1) {
                                _fun118196_ip = 78;
                                continue _fun118196
                            }
                        case 68:
                            var1 = var2.getMediaEngineConnectionId;
                            var10 = var1.bind(var2)();
                        case 78:
                            if (!(var4 != var10)) {
                                _fun118196_ip = 479;
                                continue _fun118196
                            }
                        case 85:
                            var2 = var7.ownerId;
                            var5 = _closure1_slot4;
                            var1 = var5.getId;
                            var1 = var1.bind(var5)();
                            if (!(var2 !== var1)) {
                                _fun118196_ip = 477;
                                continue _fun118196
                            }
                        case 112:
                            var2 = var7.state;
                            var1 = _closure1_slot6;
                            var1 = var1.PAUSED;
                            if (!(var2 !== var1)) {
                                _fun118196_ip = 477;
                                continue _fun118196
                            }
                        case 134:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var6 = 5;
                            var1 = var1[var6];
                            var5 = var2.bind(var8)(var1);
                            var2 = var5.getAccumulatedStatsWithMinDatapoints;
                            var1 = var7.ownerId;
                            var2 = var2.bind(var5)(var10, var1);
                            if (!(var4 != var2)) {
                                _fun118196_ip = 475;
                                continue _fun118196
                            }
                        case 179:
                            var11 = _closure1_slot2;
                            var10 = var11.getParticipant;
                            var5 = var7.channelId;
                            var12 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var9];
                            var12 = var12.bind(var8)(var1);
                            var1 = var12.encodeStreamKey;
                            var1 = var1.bind(var12)(var7);
                            var10 = var10.bind(var11)(var5, var1);
                            if (!(var4 != var10)) {
                                _fun118196_ip = 473;
                                continue _fun118196
                            }
                        case 235:
                            var5 = _closure1_slot0;
                            var11 = _closure1_slot1;
                            var1 = 7;
                            var1 = var11[var1];
                            var5 = var5.bind(var8)(var1);
                            var1 = var5.getMaxQuality;
                            var1 = var1.bind(var5)(var10);
                            if (!(var4 != var1)) {
                                _fun118196_ip = 471;
                                continue _fun118196
                            }
                        case 273:
                            var4 = var2.short;
                            var5 = var4.frameRate;
                            var10 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var6];
                            var11 = var10.bind(var8)(var4);
                            var10 = var11.getWarningFrameRate;
                            var4 = var1.maxFrameRate;
                            var4 = var10.bind(var11)(var4);
                            if (!(!(var5 < var4))) {
                                _fun118196_ip = 373;
                                continue _fun118196
                            }
                        case 323:
                            var2 = var2.long;
                            var2 = var2.frameRate;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var6];
                            var5 = var5.bind(var8)(var4);
                            var4 = var5.getWarningFrameRate;
                            var1 = var1.maxFrameRate;
                            var1 = var4.bind(var5)(var1);
                            if (!(var2 < var1)) {
                                _fun118196_ip = 471;
                                continue _fun118196
                            }
                        case 373:
                            var2 = var0.push;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var4 = 8;
                            var4 = var3[var4];
                            var4 = var6.bind(var8)(var4);
                            var4 = var4.AVError;
                            var4 = var4.STREAM_VIEW_LOW_FPS;
                            var1.type = var4;
                            var4 = 9;
                            var4 = var3[var4];
                            var5 = var6.bind(var8)(var4);
                            var4 = var5.getStreamErrorContext;
                            var3 = var3[var9];
                            var6 = var6.bind(var8)(var3);
                            var3 = var6.encodeStreamKey;
                            var3 = var3.bind(var6)(var7);
                            var13 = var4.bind(var5)(var3);
                            var14 = var1;
                            var3 = copyDataProperties(var14, var13);
                            var1 = var2.bind(var0)(var1);
                        case 471:
                            return var0;
                        case 473:
                            return var0;
                        case 475:
                            return var0;
                        case 477:
                            return var0;
                        case 479:
                            return var0;
                    }
                };
                var1 = new Array(0);
                var0 = var3.bind(var4)(var2, var1);
            case 79:
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
    var3 = 'modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AVErrorStreamViewLowFPSDefinition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3908, 3673, 1216, 3568, 660, 15011, 3464, 7980, 7968, 15008, 2]);