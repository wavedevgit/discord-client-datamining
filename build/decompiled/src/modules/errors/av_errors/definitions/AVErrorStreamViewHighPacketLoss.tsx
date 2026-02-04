// modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx
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
    var1 = {};
    var6 = function() {
        _fun117558: for (var _fun117558_ip = 0;;) switch (_fun117558_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.getReportInboundErrors;
                var2 = var0.bind(var2)();
                var0 = null;
                if (!var2) {
                    _fun117558_ip = 79;
                    continue _fun117558
                }
            case 40:
                var2 = _closure1_slot2;
                var1 = var2.getAllActiveStreams;
                var4 = var1.bind(var2)();
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun117559: for (var _fun117559_ip = 0;;) switch (_fun117559_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = arg1;
                            var4 = _closure1_slot4;
                            var2 = var4.getRTCConnection;
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var9 = 4;
                            var1 = var1[var9];
                            var8 = undefined;
                            var5 = var5.bind(var8)(var1);
                            var1 = var5.encodeStreamKey;
                            var1 = var1.bind(var5)(var7);
                            var4 = var2.bind(var4)(var1);
                            var2 = null;
                            var1 = var2 == var4;
                            var6 = undefined;
                            if (var1) {
                                _fun117559_ip = 78;
                                continue _fun117559
                            }
                        case 68:
                            var1 = var4.getMediaEngineConnectionId;
                            var6 = var1.bind(var4)();
                        case 78:
                            if (!(var2 != var6)) {
                                _fun117559_ip = 305;
                                continue _fun117559
                            }
                        case 85:
                            var4 = var7.ownerId;
                            var5 = _closure1_slot3;
                            var1 = var5.getId;
                            var1 = var1.bind(var5)();
                            if (!(var4 !== var1)) {
                                _fun117559_ip = 303;
                                continue _fun117559
                            }
                        case 112:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = 3;
                            var1 = var5[var1];
                            var5 = var4.bind(var8)(var1);
                            var4 = var5.getAccumulatedStatsWithMinDatapoints;
                            var1 = var7.ownerId;
                            var1 = var4.bind(var5)(var6, var1);
                            if (!(var2 != var1)) {
                                _fun117559_ip = 301;
                                continue _fun117559
                            }
                        case 157:
                            var2 = var1.short;
                            var2 = var2.packetLossRate;
                            var4 = 100;
                            var5 = var4 * var2;
                            var2 = 10;
                            if (!(!(var5 > var2))) {
                                _fun117559_ip = 203;
                                continue _fun117559
                            }
                        case 183:
                            var1 = var1.long;
                            var1 = var1.packetLossRate;
                            var1 = var4 * var1;
                            if (!(var1 > var2)) {
                                _fun117559_ip = 301;
                                continue _fun117559
                            }
                        case 203:
                            var2 = var0.push;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var4 = 5;
                            var4 = var3[var4];
                            var4 = var6.bind(var8)(var4);
                            var4 = var4.AVError;
                            var4 = var4.STREAM_VIEW_HIGH_PACKET_LOSS;
                            var1.type = var4;
                            var4 = 6;
                            var4 = var3[var4];
                            var5 = var6.bind(var8)(var4);
                            var4 = var5.getStreamErrorContext;
                            var3 = var3[var9];
                            var6 = var6.bind(var8)(var3);
                            var3 = var6.encodeStreamKey;
                            var3 = var3.bind(var6)(var7);
                            var10 = var4.bind(var5)(var3);
                            var11 = var1;
                            var3 = copyDataProperties(var11, var10);
                            var1 = var2.bind(var0)(var1);
                        case 301:
                            return var0;
                        case 303:
                            return var0;
                        case 305:
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
    var3 = function arg0() {
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
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AVErrorStreamViewHighPacketLossDefinition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3714, 1216, 3609, 14982, 3505, 8008, 14979, 2]);