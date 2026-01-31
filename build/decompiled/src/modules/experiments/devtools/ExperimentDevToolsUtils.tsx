// modules/experiments/devtools/ExperimentDevToolsUtils.tsx
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
    var3 = {
        'id': 4294967295,
        'label': 'Not Eligible',
        'shortLabel': 'Not Eligible'
    };
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var6 = var6.Variation_Type;
    var6 = var6.OVERRIDE;
    var3.type = var6;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/experiments/devtools/ExperimentDevToolsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun28274: for (var _fun28274_ip = 0;;) switch (_fun28274_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.system;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.ExperimentSystem;
                var2 = var2.APEX;
                if (!(var3 === var2)) {
                    _fun28274_ip = 80;
                    continue _fun28274
                }
            case 50:
                var0 = _closure1_slot2;
                var3 = new Array(1);
                var3[0] = var0;
                var2 = var3.concat;
                var0 = var1.variants;
                var0 = var2.bind(var3)(var0);
                _fun28274_ip = 86;
                continue _fun28274;
            case 80:
                var0 = var1.variants;
            case 86:
                return var0;
        }
    };
    var2.getExperimentVariantsForDevTools = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3290, 1600, 2]);