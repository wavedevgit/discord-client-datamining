// modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx
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
        'name': '2026-01-ios-push-notif-json-fix',
        'kind': 'user'
    };
    var8 = {};
    var9 = false;
    var8.enabled = var9;
    var3.defaultConfig = var8;
    var8 = {};
    var9 = {};
    var9.enabled = var10;
    var8[1] = var9;
    var3.variations = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot0 = var3;
    var3 = null;
    var _closure1_slot1 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun39193: for (var _fun39193_ip = 0;;) switch (_fun39193_ip) {
            case 0:
                var2 = _closure1_slot1;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun39193_ip = 49;
                    continue _fun39193
                }
            case 13:
                var3 = _closure1_slot0;
                var2 = var3.getConfig;
                var1 = {};
                var4 = 'isIOSPushNotificationRawPayloadFixExperiment';
                var1.location = var4;
                var1 = var2.bind(var3)(var1);
                var1 = var1.enabled;
                _closure1_slot1 = var1;
            case 49:
                var0 = _closure1_slot1;
                return var0;
        }
    };
    var2.isIOSPushNotificationRawPayloadFixExperimentEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);