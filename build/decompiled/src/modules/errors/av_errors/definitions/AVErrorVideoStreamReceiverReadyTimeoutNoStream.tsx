// modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeoutNoStream.tsx
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
        var2 = _closure1_slot3;
        var1 = var2.getTimedoutVideos;
        var3 = var1.bind(var2)();
        var1 = global;
        var2 = var1.Object;
        var1 = var2.values;
        var3 = var1.bind(var2)(var3);
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            _fun117610: for (var _fun117610_ip = 0;;) switch (_fun117610_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.userId;
                    var2 = var0.videoStreamId;
                    var3 = _closure1_slot2;
                    var0 = var3.getId;
                    var0 = var0.bind(var3)();
                    var0 = var0 !== var1;
                    if (!var0) {
                        _fun117610_ip = 44;
                        continue _fun117610
                    }
                case 38:
                    var1 = null;
                    var0 = var1 == var2;
                case 44:
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = {};
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.AVError;
            var1 = var1.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM;
            var0.type = var1;
            var4 = arg0;
            var5 = var0;
            var1 = copyDataProperties(var5, var4);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.getActiveErrors = var6;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.mediaContext;
        var3 = var0.userId;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = ':';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var1.makeErrorContextKey = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeoutNoStream.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3952, 8008, 2]);