// modules/rewards/ProgramRewardsUtils.tsx
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rewards/ProgramRewardsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        _fun95756: for (var _fun95756_ip = 0;;) switch (_fun95756_ip) {
            case 0:
                var2 = arguments[0];
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun95756_ip = 15;
                    continue _fun95756
                }
            case 9:
                var2 = 'ProgramRewardsUtils';
            case 15:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getPremiumRewardsOrbsExperiment;
                var0 = var0.bind(var1)(var2);
                var0 = var0.isInTreatment;
                return var0;
        }
    };
    var2.isInProgramRewardsTreatments = var3;
    var3 = function() {
        _fun95757: for (var _fun95757_ip = 0;;) switch (_fun95757_ip) {
            case 0:
                var2 = arguments[0];
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun95757_ip = 15;
                    continue _fun95757
                }
            case 9:
                var2 = 'ProgramRewardsUtils';
            case 15:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.usePremiumRewardsOrbsExperiment;
                var0 = var0.bind(var1)(var2);
                var0 = var0.isInTreatment;
                return var0;
        }
    };
    var2.useIsInProgramRewardsTreatments = var3;
    var1 = function arg0() {
        _fun95758: for (var _fun95758_ip = 0;;) switch (_fun95758_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun95758_ip = 25;
                    continue _fun95758
                }
            case 9:
                var1 = _closure1_slot2;
                var0 = var1.getCurrentUser;
                var3 = var0.bind(var1)();
            case 25:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.isPremiumExactly;
                var0 = _closure1_slot3;
                var0 = var0.TIER_2;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.hasNecessaryPremiumSubscriptionStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 1615, 12480, 1628, 2]);