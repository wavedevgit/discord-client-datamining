// modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var6 = var5[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.RTCConnectionQuality;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = function() { // Original name: getActiveErrors, environment: var3
        var2 = _closure1_slot2;
        var1 = var2.getAllActiveStreamKeys;
        var3 = var1.bind(var2)();
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var1
            _fun117564: for (var _fun117564_ip = 0;;) switch (_fun117564_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure1_slot2;
                    var0 = var1.getQuality;
                    var3 = var0.bind(var1)(var4);
                    var0 = _closure1_slot3;
                    var1 = var0.BAD;
                    var0 = null;
                    if (!(var3 === var1)) {
                        _fun117564_ip = 110;
                        continue _fun117564
                    }
                case 37:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 2;
                    var2 = var6[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.AVError;
                    var2 = var2.STREAM_BAD_NETWORK_QUALITY;
                    var1.type = var2;
                    var2 = 3;
                    var2 = var6[var2];
                    var3 = var5.bind(var3)(var2);
                    var2 = var3.getStreamErrorContext;
                    var7 = var2.bind(var3)(var4);
                    var8 = var1;
                    var2 = copyDataProperties(var8, var7);
                    var0 = var1;
                case 110:
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.filter;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 4;
        var3 = var3[var0];
        var0 = undefined;
        var0 = var4.bind(var0)(var3);
        var0 = var0.isNotNullish;
        var0 = var1.bind(var2)(var0);
        return var0;
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
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AVErrorStreamBadNetworkQualityDefinition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3568, 660, 7967, 14938, 1304, 2]);