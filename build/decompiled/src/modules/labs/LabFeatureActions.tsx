// modules/labs/LabFeatureActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = {};
    var _closure1_slot3 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/labs/LabFeatureActions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun85888: for (var _fun85888_ip = 0;;) switch (_fun85888_ip) {
            case 0:
                var5 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun85888_ip = 19;
                    continue _fun85888
                }
            case 12:
                var1 = _closure1_slot3;
            case 19:
                var4 = var1.enabled;
                if (!(var4 === var0)) {
                    _fun85888_ip = 48;
                    continue _fun85888
                }
            case 28:
                var2 = _closure1_slot2;
                var1 = var2.get;
                var1 = var1.bind(var2)(var5);
                var4 = !var1;
            case 48:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'LAB_FEATURE_TOGGLE';
                var1.type = var6;
                var1.labFeature = var5;
                var1.enabled = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.toggleLabFeature = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8880, 806, 2]);