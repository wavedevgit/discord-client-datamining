// modules/rewards/ProgramRewardsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function arg0() {
        _fun96455: for (var _fun96455_ip = 0;;) switch (_fun96455_ip) {
            case 0:
                var4 = arguments[1];
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun96455_ip = 15;
                    continue _fun96455
                }
            case 9:
                var4 = 'ProgramRewardsUtils';
            case 15:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.RewardProgram;
                var2 = var1.NITRO;
                var1 = arg0;
                if (!(var1 !== var2)) {
                    _fun96455_ip = 61;
                    continue _fun96455
                }
            case 57:
                var1 = false;
                return var1;
            case 61:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var0 = var5[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.getPremiumRewardsOrbsExperiment;
                var0 = var0.bind(var1)(var4);
                var0 = var0.isInTreatment;
                var1 = 4;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.isVirtualCurrencyEnabled;
                var1 = {};
                var1.location = var4;
                var1 = var2.bind(var3)(var1);
                var1 = var1.enabled;
                if (!var0) {
                    _fun96455_ip = 138;
                    continue _fun96455
                }
            case 135:
                var0 = var1;
            case 138:
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var3 = function arg0() {
        _fun96456: for (var _fun96456_ip = 0;;) switch (_fun96456_ip) {
            case 0:
                var7 = arguments[1];
                var4 = undefined;
                if (!(var7 === var4)) {
                    _fun96456_ip = 15;
                    continue _fun96456
                }
            case 9:
                var7 = 'ProgramRewardsUtils';
            case 15:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var0 = var5[var0];
                var1 = var3.bind(var4)(var0);
                var0 = var1.usePremiumRewardsOrbsExperiment;
                var0 = var0.bind(var1)(var7);
                var1 = var0.isInTreatment;
                var0 = 4;
                var0 = var5[var0];
                var6 = var3.bind(var4)(var0);
                var2 = var6.useVirtualCurrencyEnabled;
                var0 = {};
                var0.location = var7;
                var0 = var2.bind(var6)(var0);
                var2 = var0.enabled;
                var0 = 2;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.RewardProgram;
                var3 = var0.NITRO;
                var0 = arg0;
                var0 = var0 === var3;
                if (!var0) {
                    _fun96456_ip = 132;
                    continue _fun96456
                }
            case 123:
                if (!var1) {
                    _fun96456_ip = 129;
                    continue _fun96456
                }
            case 126:
                var1 = var2;
            case 129:
                var0 = var1;
            case 132:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var8 = var7[var0];
    var5 = arg2;
    var0 = undefined;
    var5 = var5.bind(var0)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.PremiumTypes;
    var _closure1_slot3 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/rewards/ProgramRewardsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.isEligibleForProgramReward = var4;
    var2.useIsEligibleForProgramReward = var3;
    var3 = function() {
        _fun96457: for (var _fun96457_ip = 0;;) switch (_fun96457_ip) {
            case 0:
                var3 = arguments[0];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun96457_ip = 15;
                    continue _fun96457
                }
            case 9:
                var3 = 'ProgramRewardsUtils';
            case 15:
                var1 = _closure1_slot4;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 2;
                var0 = var5[var0];
                var0 = var4.bind(var2)(var0);
                var0 = var0.RewardProgram;
                var0 = var0.NITRO;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.isEligibleForAnyProgramReward = var3;
    var3 = function() {
        _fun96458: for (var _fun96458_ip = 0;;) switch (_fun96458_ip) {
            case 0:
                var3 = arguments[0];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun96458_ip = 15;
                    continue _fun96458
                }
            case 9:
                var3 = 'ProgramRewardsUtils';
            case 15:
                var1 = _closure1_slot5;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 2;
                var0 = var5[var0];
                var0 = var4.bind(var2)(var0);
                var0 = var0.RewardProgram;
                var0 = var0.NITRO;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.useIsEligibleForAnyProgramReward = var3;
    var1 = function arg0() {
        _fun96459: for (var _fun96459_ip = 0;;) switch (_fun96459_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun96459_ip = 25;
                    continue _fun96459
                }
            case 9:
                var1 = _closure1_slot2;
                var0 = var1.getCurrentUser;
                var3 = var0.bind(var1)();
            case 25:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 1623, 12539, 12540, 12541, 1640, 2]);