// modules/media_uploads/experiments/VideoUploadBitrateExperiment.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.VideoCompressionQuality;
    var _closure1_slot2 = var3;
    var10 = 1;
    var3 = var5[var10];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createApexExperiment;
    var3 = {
        'name': '2025-10-video-upload-bitrate-reduction',
        'kind': 'user'
    };
    var8 = {};
    var8.bitrateMultiplier = var10;
    var3.defaultConfig = var8;
    var8 = {};
    var9 = {};
    var9.bitrateMultiplier = var10;
    var8[0] = var9;
    var9 = {};
    var10 = 0.9;
    var9.bitrateMultiplier = var10;
    var8[1] = var9;
    var9 = {};
    var10 = 0.8;
    var9.bitrateMultiplier = var10;
    var8[2] = var9;
    var3.variations = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_uploads/experiments/VideoUploadBitrateExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun37626: for (var _fun37626_ip = 0;;) switch (_fun37626_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.location;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var5 = var1.MediaInfraHoldoutExperimentH22025;
                var4 = var5.getCurrentConfig;
                var2 = {};
                var2.location = var3;
                var1 = {};
                var6 = true;
                var1.autoTrackExposure = var6;
                var1 = var4.bind(var5)(var2, var1);
                var2 = var1.isInHoldout;
                var1 = {};
                if (var2) {
                    _fun37626_ip = 98;
                    continue _fun37626
                }
            case 77:
                var2 = _closure1_slot3;
                var0 = var2.getConfig;
                var1.location = var3;
                var0 = var0.bind(var2)(var1);
                _fun37626_ip = 109;
                continue _fun37626;
            case 98:
                var2 = 1;
                var1.bitrateMultiplier = var2;
                var0 = var1;
            case 109:
                return var0;
        }
    };
    var2.getVideoUploadBitrateConfig = var3;
    var1 = function arg0() {
        _fun37627: for (var _fun37627_ip = 0;;) switch (_fun37627_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot2;
                var0 = var0.MEDIUM;
                var0 = var2 === var0;
                if (var0) {
                    _fun37627_ip = 37;
                    continue _fun37627
                }
            case 23:
                var1 = _closure1_slot2;
                var1 = var1.HIGH;
                var0 = var2 === var1;
            case 37:
                return var0;
        }
    };
    var2.shouldApplyBitrateExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3188, 1301, 1588, 2]);