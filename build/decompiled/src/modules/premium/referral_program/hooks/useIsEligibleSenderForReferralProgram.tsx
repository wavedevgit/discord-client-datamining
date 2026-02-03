// modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        _fun55340: for (var _fun55340_ip = 0;;) switch (_fun55340_ip) {
            case 0:
                var6 = arguments[0];
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun55340_ip = 11;
                    continue _fun55340
                }
            case 9:
                var6 = false;
            case 11:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var1 = var5.useMaybeFetchReferralsRemaining;
                var1 = var1.bind(var5)(var6);
                var1 = 2;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot2;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot2;
                    var0 = var1.getIsEligibleToSendReferrals;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.useIsEligibleSenderForReferralProgram = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6637, 6646, 566, 2]);