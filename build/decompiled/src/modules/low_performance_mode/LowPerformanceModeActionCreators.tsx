// modules/low_performance_mode/LowPerformanceModeActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/low_performance_mode/LowPerformanceModeActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: setEnabled, environment: var1
        _fun88937: for (var _fun88937_ip = 0;;) switch (_fun88937_ip) {
            case 0:
                var4 = arg0;
                var0 = !var4;
                if (!var0) {
                    _fun88937_ip = 21;
                    continue _fun88937
                }
            case 9:
                var1 = _closure1_slot2;
                var0 = var1.enabled;
            case 21:
                if (!var0) {
                    _fun88937_ip = 82;
                    continue _fun88937
                }
            case 24:
                var1 = _closure1_slot2;
                var1 = var1.optedOut;
                if (var1) {
                    _fun88937_ip = 82;
                    continue _fun88937
                }
            case 40:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.track;
                var0 = _closure1_slot3;
                var0 = var0.LOW_PERFORMANCE_MODE_OPT_OUT;
                var0 = var1.bind(var2)(var0);
            case 82:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'LOW_PERFORMANCE_MODE_SET_ENABLED';
                var1.type = var5;
                var1.enabled = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1299, 660, 795, 806, 2]);