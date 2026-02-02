// modules/user_settings/PushToTalkLatchingExperiment.tsx
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
    var10 = true;
    var3.value = var10;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var7 = var4.bind(var0)(var3);
    var6 = var7.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2025-05_push_to_talk_latching',
        'label': 'Push to Talk Latching'
    };
    var8 = {};
    var9 = false;
    var8.enableLatching = var9;
    var3.defaultConfig = var8;
    var9 = {
        'id': 1,
        'label': 'Enable latching feature'
    };
    var8 = {};
    var8.enableLatching = var10;
    var9.config = var8;
    var8 = new Array(1);
    var8[0] = var9;
    var3.treatments = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/PushToTalkLatchingExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun68853: for (var _fun68853_ip = 0;;) switch (_fun68853_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.location;
                var4 = var1.autoTrackExposure;
                var5 = undefined;
                if (!(var4 === var5)) {
                    _fun68853_ip = 22;
                    continue _fun68853
                }
            case 20:
                var4 = true;
            case 22:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 1;
                var2 = var6[var2];
                var2 = var3.bind(var5)(var2);
                var6 = var2.AVHoldoutExperimentH22025;
                var5 = var6.getCurrentConfig;
                var3 = {};
                var3.location = var0;
                var2 = {};
                var2.autoTrackExposure = var4;
                var2 = var5.bind(var6)(var3, var2);
                var5 = var2.isInHoldout;
                var3 = _closure1_slot2;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var1.location = var0;
                var0 = {};
                var0.disable = var5;
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getPushToTalkLatchingExperimentConfig = var3;
    var1 = function arg0() {
        _fun68854: for (var _fun68854_ip = 0;;) switch (_fun68854_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.location;
                var4 = var1.autoTrackExposure;
                var5 = undefined;
                if (!(var4 === var5)) {
                    _fun68854_ip = 22;
                    continue _fun68854
                }
            case 20:
                var4 = true;
            case 22:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 1;
                var2 = var6[var2];
                var2 = var3.bind(var5)(var2);
                var6 = var2.AVHoldoutExperimentH22025;
                var5 = var6.useExperiment;
                var3 = {};
                var3.location = var0;
                var2 = {};
                var2.autoTrackExposure = var4;
                var2 = var5.bind(var6)(var3, var2);
                var5 = var2.isInHoldout;
                var3 = _closure1_slot2;
                var2 = var3.useExperiment;
                var1 = {};
                var1.location = var0;
                var0 = {};
                var0.disable = var5;
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.usePushToTalkLatchingExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3076, 3912, 2]);