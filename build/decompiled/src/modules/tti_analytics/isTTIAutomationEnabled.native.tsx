// modules/tti_analytics/isTTIAutomationEnabled.native.tsx
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
    var3 = var3.NativeModules;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/tti_analytics/isTTIAutomationEnabled.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: isTTIAutomationEnabled, environment: var1
        _fun35178: for (var _fun35178_ip = 0;;) switch (_fun35178_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun35178_ip = 58;
                    continue _fun35178
                }
            case 38:
                var1 = _closure1_slot2;
                var2 = var1.TTIManager;
                var1 = var2.runningTTIAutomation;
                var0 = var1.bind(var2)();
            case 58:
                return var0;
        }
    };
    var2.isTTIAutomationEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 2]);