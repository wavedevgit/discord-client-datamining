// modules/errors/hooks/useVideoStreamError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot2;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun64951: for (var _fun64951_ip = 0;;) switch (_fun64951_ip) {
                case 0:
                    var1 = _closure1_slot2;
                    var0 = var1.getId;
                    var1 = var0.bind(var1)();
                    var0 = _closure2_slot1;
                    if (!(var1 !== var0)) {
                        _fun64951_ip = 141;
                        continue _fun64951
                    }
                case 28:
                    var3 = _closure1_slot3;
                    var2 = var3.getActiveErrorsOfType;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var1 = 4;
                    var0 = var9[var1];
                    var7 = undefined;
                    var0 = var8.bind(var7)(var0);
                    var0 = var0.AVError;
                    var0 = var0.VIDEO_STREAM_RECEIVER_READY_TIMEOUT;
                    var13 = var2.bind(var3)(var0);
                    var0 = new Array(0);
                    var12 = 0;
                    var14 = var0;
                    var12 = arraySpread(var14, var13, var12);
                    var6 = _closure1_slot3;
                    var3 = var6.getActiveErrorsOfType;
                    var1 = var9[var1];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.AVError;
                    var1 = var1.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM;
                    var13 = var3.bind(var6)(var1);
                    var14 = var0;
                    var1 = arraySpread(var14, var13, var12);
                    var3 = var0;
                    _fun64951_ip = 332;
                    continue _fun64951;
                case 141:
                    var1 = _closure2_slot0;
                    var0 = _closure1_slot4;
                    var0 = var0.STREAM;
                    if (!(var1 !== var0)) {
                        _fun64951_ip = 165;
                        continue _fun64951
                    }
                case 159:
                    var2 = new Array(0);
                    _fun64951_ip = 214;
                    continue _fun64951;
                case 165:
                    var6 = _closure1_slot3;
                    var1 = var6.getActiveErrorsOfType;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var0 = 4;
                    var7 = var7[var0];
                    var0 = undefined;
                    var0 = var8.bind(var0)(var7);
                    var0 = var0.AVError;
                    var0 = var0.SCREENSHARE_OS_ERROR;
                    var2 = var1.bind(var6)(var0);
                case 214:
                    var0 = new Array(0);
                    var12 = 0;
                    var14 = var0;
                    var13 = var2;
                    var12 = arraySpread(var14, var13, var12);
                    var11 = _closure1_slot3;
                    var10 = var11.getActiveErrorsOfType;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var1 = 4;
                    var2 = var9[var1];
                    var7 = undefined;
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.AVError;
                    var2 = var2.VIDEO_STREAM_SENDER_READY_TIMEOUT;
                    var13 = var10.bind(var11)(var2);
                    var14 = var0;
                    var12 = arraySpread(var14, var13, var12);
                    var6 = _closure1_slot3;
                    var5 = var6.getActiveErrorsOfType;
                    var1 = var9[var1];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.AVError;
                    var1 = var1.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM;
                    var13 = var5.bind(var6)(var1);
                    var14 = var0;
                    var1 = arraySpread(var14, var13, var12);
                    var3 = var0;
                case 332:
                    var0 = var3.length;
                    var2 = 0;
                    var0 = var2 < var0;
                    if (!var0) {
                        _fun64951_ip = 389;
                        continue _fun64951
                    }
                case 346:
                    var0 = var3[var2];
                    var5 = var0.mediaContext;
                    var1 = _closure2_slot0;
                    if (!(var5 === var1)) {
                        _fun64951_ip = 377;
                        continue _fun64951
                    }
                case 364:
                    var5 = var0.userId;
                    var1 = _closure2_slot1;
                    if (!(var5 !== var1)) {
                        _fun64951_ip = 393;
                        continue _fun64951
                    }
                case 377:
                    var2 = var2 + 1;
                    var1 = var3.length;
                    if (var2 < var1) {
                        _fun64951_ip = 346;
                        continue _fun64951
                    }
                case 389:
                    var1 = undefined;
                    return var1;
                case 393:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot5 = var1;
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
    var4 = var5.bind(var0)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/hooks/useVideoStreamError.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0, arg1() {
        _fun64952: for (var _fun64952_ip = 0;;) switch (_fun64952_ip) {
            case 0:
                var3 = _closure1_slot5;
                var0 = undefined;
                var2 = arg0;
                var1 = arg1;
                var1 = var3.bind(var0)(var2, var1);
                var2 = null;
                var2 = var2 == var1;
                if (var2) {
                    _fun64952_ip = 35;
                    continue _fun64952
                }
            case 30:
                var0 = var1.type;
            case 35:
                return var0;
        }
    };
    var2.default = var3;
    var2.useVideoStreamErrorContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 8075, 3511, 566, 8076, 2]);