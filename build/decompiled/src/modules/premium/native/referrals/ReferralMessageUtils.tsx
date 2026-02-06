// modules/premium/native/referrals/ReferralMessageUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/referrals/ReferralMessageUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun79349: for (var _fun79349_ip = 0;;) switch (_fun79349_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = var2.getPremiumTypeSubscription;
                var0 = false;
                var3 = var3.bind(var2)(var0);
                var0 = var2.hasFetchedSubscriptions;
                var0 = var0.bind(var2)();
                var2 = _closure1_slot1;
                var1 = var2.isFetchingOffer;
                var1 = var1.bind(var2)();
                if (!var0) {
                    _fun79349_ip = 53;
                    continue _fun79349
                }
            case 47:
                var2 = null;
                var0 = var2 == var3;
            case 53:
                if (!var0) {
                    _fun79349_ip = 59;
                    continue _fun79349
                }
            case 56:
                var0 = !var1;
            case 59:
                return var0;
        }
    };
    var2.canOpenPremiumPlanDirectlyForReferralTrial = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3119, 6668, 2]);