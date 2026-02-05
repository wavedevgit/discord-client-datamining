// modules/media_engine/VideoCaptureDeviceForEncode.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/VideoCaptureDeviceForEncode.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun93695: for (var _fun93695_ip = 0;;) switch (_fun93695_ip) {
            case 0:
                var5 = arguments[1];
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun93695_ip = 11;
                    continue _fun93695
                }
            case 9:
                var5 = true;
            case 11:
                var0 = {};
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var4 = var1.AVHoldoutExperimentH22025;
                var3 = var4.getCurrentConfig;
                var2 = {};
                var1 = arg0;
                var2.location = var1;
                var1 = {};
                var1.autoTrackExposure = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = var1.isInHoldout;
                var1 = !var1;
                var0.enabled = var1;
                return var0;
        }
    };
    var2.getVideoCaptureDeviceForEncodeConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3951, 2]);