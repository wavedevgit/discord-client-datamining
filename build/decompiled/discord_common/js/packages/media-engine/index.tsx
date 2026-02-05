// ../discord_common/js/packages/media-engine/index.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var0 = function arg0() {
        _fun32220: for (var _fun32220_ip = 0;;) switch (_fun32220_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot2;
                var1 = var1.NATIVE;
                if (!(var1 !== var2)) {
                    _fun32220_ip = 73;
                    continue _fun32220
                }
            case 20:
                var1 = _closure1_slot2;
                var1 = var1.WEBRTC;
                if (!(var1 !== var2)) {
                    _fun32220_ip = 44;
                    continue _fun32220
                }
            case 34:
                var1 = _closure1_slot2;
                var1 = var1.DUMMY;
            case 44:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.default;
                return var1;
            case 73:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.default;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var4 = 0;
    var3 = var10[var4];
    var0 = undefined;
    var3 = var9.bind(var0)(var3);
    var7 = var3.MediaEngineContextTypes;
    var3 = var3.MediaEngineImplementations;
    var _closure1_slot2 = var3;
    var6 = {};
    var6.SOURCE_NOT_FOUND = var4;
    var3 = 'SOURCE_NOT_FOUND';
    var6[var4] = var3;
    var4 = 1;
    var6.USER_STOPPED = var4;
    var3 = 'USER_STOPPED';
    var6[var4] = var3;
    var4 = 2;
    var6.OTHER_ERROR = var4;
    var3 = 'OTHER_ERROR';
    var6[var4] = var3;
    var5 = {};
    var3 = 'input_device';
    var5.INPUT_DEVICE = var3;
    var3 = 'stream';
    var5.STREAM = var3;
    var4 = {};
    var3 = '';
    var4.NONE = var3;
    var3 = 'background_blur';
    var4.BACKGROUND_BLUR = var3;
    var3 = 'background_replacement';
    var4.BACKGROUND_REPLACEMENT = var3;
    var3 = {};
    var8 = 'cameraBackgroundPreview';
    var3.CAMERA_BACKGROUND_PREVIEW = var8;
    var8 = 'cameraBackgroundLive';
    var3.CAMERA_BACKGROUND_LIVE = var8;
    var8 = 3;
    var8 = var10[var8];
    var12 = var9.bind(var0)(var8);
    var11 = var12.fileFinishedImporting;
    var8 = '../discord_common/js/packages/media-engine/index.tsx';
    var8 = var11.bind(var12)(var8);
    var8 = 4;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.BaseConnectionEvent;
    var2.BaseConnectionEvent = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.MediaEngineEvent;
    var2.MediaEngineEvent = var8;
    var2.MediaEngineContextTypes = var7;
    var2.DesktopSourceEndReason = var6;
    var2.FilterTargetType = var5;
    var2.FilterSettingsGraph = var4;
    var2.FilterSettingsKey = var3;
    var3 = function() {
        _fun32221: for (var _fun32221_ip = 0;;) switch (_fun32221_ip) {
            case 0:
                var0 = _closure1_slot2;
                var0 = var0.NATIVE;
                var3 = new Array(2);
                var3[0] = var0;
                var0 = _closure1_slot2;
                var0 = var0.WEBRTC;
                var3[1] = var0;
                var2 = var3.find;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = undefined;
                    var0 = arg0;
                    var1 = var2.bind(var1)(var0);
                    var0 = var1.supported;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun32221_ip = 68;
                    continue _fun32221
                }
            case 58:
                var1 = _closure1_slot2;
                var0 = var1.DUMMY;
            case 68:
                return var0;
        }
    };
    var2.determineMediaEngine = var3;
    var1 = function arg0() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var4 = var1;
        var0 = new var4[var0](var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.initializeMediaEngine = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3510, 3634, 3708, 2, 3690, 3709]);