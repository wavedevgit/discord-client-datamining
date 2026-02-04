// modules/premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = {};
    var0 = 'control';
    var3.CONTROL = var0;
    var0 = 'treatment_a';
    var3.TREATMENT_A = var0;
    var0 = 'treatment_b';
    var3.TREATMENT_B = var0;
    var _closure1_slot0 = var3;
    var4 = {};
    var5 = var3.CONTROL;
    var0 = 0;
    var4[var5] = var0;
    var7 = var3.TREATMENT_A;
    var5 = 300;
    var4[var7] = var5;
    var7 = var3.TREATMENT_B;
    var5 = 700;
    var4[var7] = var5;
    var _closure1_slot1 = var4;
    var5 = var6[var0];
    var4 = metroImportDefault;
    var0 = undefined;
    var5 = var4.bind(var0)(var5);
    var4 = {
        'name': '2025-12-nitro-s-rewards',
        'kind': 'user'
    };
    var7 = {};
    var8 = var3.CONTROL;
    var7.treatment = var8;
    var4.defaultConfig = var7;
    var7 = {};
    var8 = {};
    var9 = var3.CONTROL;
    var8.treatment = var9;
    var7[0] = var8;
    var8 = {};
    var9 = var3.TREATMENT_A;
    var8.treatment = var9;
    var7[1] = var8;
    var8 = {};
    var9 = var3.TREATMENT_B;
    var8.treatment = var9;
    var7[2] = var8;
    var4.variations = var7;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var5 = 1;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.PremiumRewardsOrbsTreatment = var3;
    var3 = function arg0() {
        _fun95836: for (var _fun95836_ip = 0;;) switch (_fun95836_ip) {
            case 0:
                var3 = _closure1_slot2;
                var2 = var3.useConfig;
                var0 = {};
                var4 = arg0;
                var0.location = var4;
                var0 = var2.bind(var3)(var0);
                var2 = var0.treatment;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun95836_ip = 49;
                    continue _fun95836
                }
            case 39:
                var0 = _closure1_slot0;
                var2 = var0.CONTROL;
            case 49:
                var0 = {};
                var0.treatment = var2;
                var3 = _closure1_slot0;
                var3 = var3.CONTROL;
                var3 = var2 !== var3;
                var0.isInTreatment = var3;
                var1 = _closure1_slot1;
                var1 = var1[var2];
                var0.orbsRewardAmount = var1;
                return var0;
        }
    };
    var2.usePremiumRewardsOrbsExperiment = var3;
    var1 = function arg0() {
        _fun95837: for (var _fun95837_ip = 0;;) switch (_fun95837_ip) {
            case 0:
                var3 = _closure1_slot2;
                var2 = var3.getConfig;
                var0 = {};
                var4 = arg0;
                var0.location = var4;
                var0 = var2.bind(var3)(var0);
                var2 = var0.treatment;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun95837_ip = 49;
                    continue _fun95837
                }
            case 39:
                var0 = _closure1_slot0;
                var2 = var0.CONTROL;
            case 49:
                var0 = {};
                var0.treatment = var2;
                var3 = _closure1_slot0;
                var3 = var3.CONTROL;
                var3 = var2 !== var3;
                var0.isInTreatment = var3;
                var1 = _closure1_slot1;
                var1 = var1[var2];
                var0.orbsRewardAmount = var1;
                return var0;
        }
    };
    var2.getPremiumRewardsOrbsExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1302, 2]);