// modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx
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
    var1 = {};
    var6 = function() {
        _fun117576: for (var _fun117576_ip = 0;;) switch (_fun117576_ip) {
            case 0:
                var1 = _closure1_slot2;
                var0 = var1.getCurrentUserActiveStream;
                var8 = var0.bind(var1)();
                var0 = null;
                if (!(var0 != var8)) {
                    _fun117576_ip = 335;
                    continue _fun117576
                }
            case 26:
                var2 = _closure1_slot2;
                var1 = var2.getViewerIds;
                var1 = var1.bind(var2)(var8);
                var2 = var1.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun117576_ip = 333;
                    continue _fun117576
                }
            case 55:
                var4 = _closure1_slot3;
                var2 = var4.getRTCConnection;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var10 = 2;
                var1 = var1[var10];
                var9 = undefined;
                var5 = var5.bind(var9)(var1);
                var1 = var5.encodeStreamKey;
                var1 = var1.bind(var5)(var8);
                var2 = var2.bind(var4)(var1);
                var1 = var0 == var2;
                var5 = undefined;
                if (var1) {
                    _fun117576_ip = 122;
                    continue _fun117576
                }
            case 112:
                var1 = var2.getMediaEngineConnectionId;
                var5 = var1.bind(var2)();
            case 122:
                if (!(var0 != var5)) {
                    _fun117576_ip = 331;
                    continue _fun117576
                }
            case 129:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var4 = var2.bind(var9)(var1);
                var2 = var4.getAccumulatedStatsWithMinDatapoints;
                var1 = var8.ownerId;
                var2 = var2.bind(var4)(var5, var1);
                var4 = var0 == var2;
                var1 = null;
                if (var4) {
                    _fun117576_ip = 329;
                    continue _fun117576
                }
            case 179:
                var4 = var2.short;
                var5 = var4.packetLossRate;
                var4 = 100;
                var6 = var4 * var5;
                var5 = 10;
                if (!(!(var6 > var5))) {
                    _fun117576_ip = 227;
                    continue _fun117576
                }
            case 205:
                var2 = var2.long;
                var2 = var2.packetLossRate;
                var4 = var4 * var2;
                var2 = undefined;
                if (!(var4 > var5)) {
                    _fun117576_ip = 326;
                    continue _fun117576
                }
            case 227:
                var4 = {};
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var5 = 4;
                var5 = var3[var5];
                var5 = var7.bind(var9)(var5);
                var5 = var5.AVError;
                var5 = var5.STREAM_SEND_HIGH_PACKET_LOSS;
                var4.type = var5;
                var5 = 5;
                var5 = var3[var5];
                var6 = var7.bind(var9)(var5);
                var5 = var6.getStreamErrorContext;
                var3 = var3[var10];
                var7 = var7.bind(var9)(var3);
                var3 = var7.encodeStreamKey;
                var3 = var3.bind(var7)(var8);
                var11 = var5.bind(var6)(var3);
                var12 = var4;
                var3 = copyDataProperties(var12, var11);
                var3 = new Array(1);
                var3[0] = var4;
                var2 = var3;
            case 326:
                var1 = var2;
            case 329:
                return var1;
            case 331:
                return var0;
            case 333:
                return var0;
            case 335:
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
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AVErrorStreamSendHighPacketLossDefinition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3714, 3609, 3505, 14985, 8008, 14982, 2]);