// modules/activities/utils/tryLaunchAsFrame.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/tryLaunchAsFrame.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun64016: for (var _fun64016_ip = 0;;) switch (_fun64016_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.applicationId;
                var2 = _closure1_slot3;
                var0 = var2.getApplication;
                var5 = var0.bind(var2)(var4);
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun64016_ip = 71;
                    continue _fun64016
                }
            case 35:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 1;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var6.bind(var0)(var3);
                var0 = var3.canLaunchFrame;
                var0 = var0.bind(var3)(var5);
                var2 = !var0;
            case 71:
                var0 = !var2;
                if (var2) {
                    _fun64016_ip = 118;
                    continue _fun64016
                }
            case 77:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.launchFrame;
                var1 = {};
                var1.applicationId = var4;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 118:
                return var0;
        }
    };
    var2.tryLaunchAsFrame = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3445, 4667, 7933, 2]);