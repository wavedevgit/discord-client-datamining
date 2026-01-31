// modules/premium/experiments/VoiceFiltersEA.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var11 = true;
    var1.value = var11;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var8 = var1.CommonTriggerPoints;
    var1 = 1;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2025-06_voice_filters_ea',
        'label': 'Voice Filters EA'
    };
    var9 = {};
    var10 = null;
    var9.enabled = var10;
    var1.defaultConfig = var9;
    var8 = var8.CONNECTION_OPEN;
    var1.commonTriggerPoint = var8;
    var9 = {
        'id': 0,
        'label': "User don't see voice filters EA"
    };
    var8 = {};
    var8.enabled = var10;
    var9.config = var8;
    var8 = new Array(2);
    var8[0] = var9;
    var9 = {
        'id': 1,
        'label': 'User sees voice filters EA'
    };
    var10 = {};
    var10.enabled = var11;
    var9.config = var10;
    var8[1] = var9;
    var1.treatments = var8;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot2 = var1;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/experiments/VoiceFiltersEA.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun95344: for (var _fun95344_ip = 0;;) switch (_fun95344_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.location;
                var4 = _closure1_slot2;
                var3 = var4.useExperiment;
                var2 = {};
                var2.location = var0;
                var0 = {};
                var5 = false;
                var0.autoTrackExposure = var5;
                var0 = var3.bind(var4)(var2, var0);
                var0 = var0.enabled;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.useAreVoiceFiltersEnabled;
                var1 = {
                    'location': 'VoiceFiltersEarlyAccess',
                    'autoTrackExposure': true
                };
                var1 = var2.bind(var3)(var1);
                if (!var0) {
                    _fun95344_ip = 100;
                    continue _fun95344
                }
            case 97:
                var0 = var1;
            case 100:
                return var0;
        }
    };
    var2.default = var3;
    var2.VoiceFiltersEA = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3074, 12343, 2]);