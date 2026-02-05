// modules/media_engine/AsyncAudioDeviceExperiment.tsx
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
    var3 = 'modules/media_engine/AsyncAudioDeviceExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun94474: for (var _fun94474_ip = 0;;) switch (_fun94474_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.location;
                var5 = var0.autoTrackExposure;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun94474_ip = 22;
                    continue _fun94474
                }
            case 20:
                var5 = true;
            case 22:
                var0 = {};
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 0;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.AVHoldoutExperimentH22025;
                var3 = var4.getCurrentConfig;
                var2 = {};
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
    var2.getAsyncAudioDeviceExperimentConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3951, 2]);