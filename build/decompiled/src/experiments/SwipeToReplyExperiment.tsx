// experiments/SwipeToReplyExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = var3.LaunchPadTypes;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'experiments/SwipeToReplyExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun77503: for (var _fun77503_ip = 0;;) switch (_fun77503_ip) {
            case 0:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 1;
                var1 = var4[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.bind(var3)();
                var1 = _closure1_slot3;
                var1 = var1.GESTURE_FULL;
                var2 = var2 === var1;
                var1 = _closure1_slot0;
                var0 = 2;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useIsSwipeToMemberListEnabled;
                var1 = var0.bind(var1)();
                var0 = !var2;
                if (var2) {
                    _fun77503_ip = 78;
                    continue _fun77503
                }
            case 75:
                var0 = !var1;
            case 78:
                return var0;
        }
    };
    var2.useIsMessageSwipeActionsEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9847, 9849, 8997, 2]);