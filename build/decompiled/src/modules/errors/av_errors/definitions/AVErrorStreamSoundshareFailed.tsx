// modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx
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
    var1 = var4.bind(var0)(var1);
    var1 = var1.MediaEngineHookTypes;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function() {
        _fun117572: for (var _fun117572_ip = 0;;) switch (_fun117572_ip) {
            case 0:
                var2 = _closure1_slot2;
                var0 = var2.getCurrentUserActiveStream;
                var6 = var0.bind(var2)();
                var3 = null;
                var2 = var3 != var6;
                var7 = undefined;
                var0 = undefined;
                if (!var2) {
                    _fun117572_ip = 169;
                    continue _fun117572
                }
            case 33:
                var5 = _closure1_slot3;
                var4 = var5.getHookError;
                var2 = _closure1_slot4;
                var2 = var2.SOUND;
                var2 = var4.bind(var5)(var2);
                var2 = var3 != var2;
                var0 = undefined;
                if (!var2) {
                    _fun117572_ip = 169;
                    continue _fun117572
                }
            case 67:
                var2 = {};
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 3;
                var1 = var8[var1];
                var1 = var5.bind(var7)(var1);
                var1 = var1.AVError;
                var1 = var1.STREAM_SOUNDSHARE_FAILED;
                var2.type = var1;
                var1 = 4;
                var1 = var8[var1];
                var4 = var5.bind(var7)(var1);
                var3 = var4.getStreamErrorContext;
                var1 = 5;
                var1 = var8[var1];
                var5 = var5.bind(var7)(var1);
                var1 = var5.encodeStreamKey;
                var1 = var1.bind(var5)(var6);
                var9 = var3.bind(var4)(var1);
                var10 = var2;
                var1 = copyDataProperties(var10, var9);
                var1 = new Array(1);
                var1[0] = var2;
                var0 = var1;
            case 169:
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
    var3 = 'modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AVErrorStreamSoundshareFailedDefinition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3714, 3625, 660, 8008, 14979, 3505, 2]);