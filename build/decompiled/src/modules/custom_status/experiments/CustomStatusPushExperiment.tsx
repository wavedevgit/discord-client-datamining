// modules/custom_status/experiments/CustomStatusPushExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var6 = var7.createApexExperiment;
    var3 = {
        'name': '2025-09-custom-status-push-notif-receiver',
        'kind': 'user'
    };
    var8 = {};
    var9 = false;
    var8.enabled = var9;
    var3.defaultConfig = var8;
    var8 = {};
    var11 = {};
    var11.enabled = var9;
    var8[0] = var11;
    var11 = {};
    var11.enabled = var10;
    var8[1] = var11;
    var3.variations = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2024-10_icymi_push',
        'label': 'Custom Status ICYMI Push Notifications'
    };
    var8 = {};
    var8.enabled = var9;
    var3.defaultConfig = var8;
    var9 = {
        'id': 1,
        'label': 'Enabled'
    };
    var8 = {};
    var8.enabled = var10;
    var9.config = var8;
    var8 = new Array(1);
    var8[0] = var9;
    var3.treatments = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/experiments/CustomStatusPushExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun85721: for (var _fun85721_ip = 0;;) switch (_fun85721_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = var3.useConfig;
                var0 = {};
                var4 = 'settings';
                var0.location = var4;
                var0 = var2.bind(var3)(var0);
                var0 = var0.enabled;
                var3 = _closure1_slot1;
                var2 = var3.useExperiment;
                var1 = {};
                var1.location = var4;
                var1 = var2.bind(var3)(var1);
                var1 = var1.enabled;
                if (var0) {
                    _fun85721_ip = 65;
                    continue _fun85721
                }
            case 62:
                var0 = var1;
            case 65:
                return var0;
        }
    };
    var2.useCustomStatusPushExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 3115, 2]);