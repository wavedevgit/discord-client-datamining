// modules/errors/hooks/useVideoReadyTimeout.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var3 = var3.Millis;
    var6 = var3.SECOND;
    var3 = 20;
    var3 = var3 * var6;
    var _closure1_slot3 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/hooks/useVideoReadyTimeout.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useVideoReadyTimeout, environment: var1
        _fun64474: for (var _fun64474_ip = 0;;) switch (_fun64474_ip) {
            case 0:
                var2 = arg0;
                var8 = var2.streamId;
                var _closure2_slot0 = var8;
                var6 = var2.userId;
                var _closure2_slot1 = var6;
                var4 = var2.videoSpinnerContext;
                var0 = var2.streamKey;
                var _closure2_slot2 = var0;
                var7 = var2.loading;
                var _closure2_slot3 = var7;
                var9 = var2.paused;
                var10 = undefined;
                if (!(var9 === var10)) {
                    _fun64474_ip = 64;
                    continue _fun64474
                }
            case 62:
                var9 = false;
            case 64:
                var _closure2_slot4 = var9;
                var _closure2_slot5 = var10;
                var _closure2_slot6 = var10;
                var13 = _closure1_slot2;
                var12 = var13.useRef;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var11 = 2;
                var11 = var3[var11];
                var11 = var5.bind(var10)(var11);
                var11 = var11.Timeout;
                var14 = var11.prototype;
                var14 = Object.create(var14, {
                    constructor: {
                        value: var11
                    }
                });
                var17 = var14;
                var11 = new var17[var11](var16);
                var11 = var11 instanceof Object ? var11 : var14;
                var11 = var12.bind(var13)(var11);
                _closure2_slot5 = var11;
                var11 = 3;
                var3 = var3[var11];
                var3 = var5.bind(var10)(var3);
                var3 = var3.VideoSpinnerContext;
                var3 = var3.SELF_STREAM;
                if (!(var4 !== var3)) {
                    _fun64474_ip = 238;
                    continue _fun64474
                }
            case 171:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var5.bind(var10)(var3);
                var3 = var3.VideoSpinnerContext;
                var3 = var3.REMOTE_STREAM;
                if (!(var4 !== var3)) {
                    _fun64474_ip = 238;
                    continue _fun64474
                }
            case 204:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 4;
                var3 = var5[var3];
                var3 = var4.bind(var10)(var3);
                var3 = var3.MediaEngineContextTypes;
                var5 = var3.DEFAULT;
                _fun64474_ip = 270;
                continue _fun64474;
            case 238:
                var4 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 4;
                var3 = var11[var3];
                var3 = var4.bind(var10)(var3);
                var3 = var3.MediaEngineContextTypes;
                var5 = var3.STREAM;
            case 270:
                _closure2_slot6 = var5;
                var4 = _closure1_slot2;
                var3 = var4.useEffect;
                var2 = new Array(6);
                var2[0] = var9;
                var2[1] = var8;
                var2[2] = var7;
                var2[3] = var5;
                var2[4] = var0;
                var2[5] = var6;
                var0 = function() { // Environment: var1
                    _fun64475: for (var _fun64475_ip = 0;;) switch (_fun64475_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun64475_ip = 103;
                                continue _fun64475
                            }
                        case 12:
                            var1 = _closure2_slot4;
                            if (var1) {
                                _fun64475_ip = 103;
                                continue _fun64475
                            }
                        case 19:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var3 = 5;
                            var4 = var4[var3];
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var4 = var3.WindowVisibilityVideoManager;
                            var3 = var4.isIncomingVideoEnabled;
                            var3 = var3.bind(var4)();
                            if (!var3) {
                                _fun64475_ip = 103;
                                continue _fun64475
                            }
                        case 63:
                            var2 = _closure2_slot5;
                            var4 = var2.current;
                            var _closure3_slot0 = var4;
                            var3 = var4.start;
                            var2 = _closure1_slot3;
                            var1 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 6;
                                var1 = var1[var0];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var1);
                                var5 = var6.videoStreamTimedOut;
                                var10 = _closure2_slot0;
                                var9 = _closure2_slot1;
                                var8 = _closure2_slot6;
                                var7 = _closure2_slot2;
                                var11 = var6;
                                var1 = var11[var5](var10, var9, var8, var7, var6);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            var0 = function() { // Environment: var0
                                var1 = _closure3_slot0;
                                var0 = var1.stop;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                        case 103:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var0, var2);
                var0 = {};
                var3 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    var0 = _closure2_slot5;
                    var2 = var0.current;
                    var0 = var2.stop;
                    var0 = var0.bind(var2)();
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 6;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.clearVideoStreamTimeout;
                    var2 = _closure2_slot6;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                var0.onReady = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 667, 3589, 7992, 3592, 7994, 7997, 2]);