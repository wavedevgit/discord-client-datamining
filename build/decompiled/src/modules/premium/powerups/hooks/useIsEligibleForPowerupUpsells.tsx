// modules/premium/powerups/hooks/useIsEligibleForPowerupUpsells.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0, arg1() {
        _fun113406: for (var _fun113406_ip = 0;;) switch (_fun113406_ip) {
            case 0:
                var3 = arg1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var2);
                var4 = var5.isPremium;
                var0 = _closure1_slot4;
                var2 = var0.TIER_2;
                var0 = arg0;
                var0 = var4.bind(var5)(var0, var2);
                var2 = null;
                var4 = var2 == var3;
                if (var4) {
                    _fun113406_ip = 68;
                    continue _fun113406
                }
            case 62:
                var1 = var3.premiumSince;
            case 68:
                var1 = var2 != var1;
                if (var0) {
                    _fun113406_ip = 78;
                    continue _fun113406
                }
            case 75:
                var0 = var1;
            case 78:
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useIsEligibleForPowerupUpsells.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun113407: for (var _fun113407_ip = 0;;) switch (_fun113407_ip) {
            case 0:
                var8 = arg0;
                var _closure2_slot0 = var8;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 4;
                var1 = var1[var7];
                var3 = undefined;
                var6 = var2.bind(var3)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot3;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var5.bind(var6)(var2, var1);
                var1 = null;
                var1 = var1 == var2;
                var9 = undefined;
                if (var1) {
                    _fun113407_ip = 80;
                    continue _fun113407
                }
            case 75:
                var9 = var2.id;
            case 80:
                var _closure2_slot1 = var9;
                var1 = _closure1_slot5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var7 = var6.bind(var3)(var5);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot2;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = new Array(2);
                var4[0] = var9;
                var4[1] = var8;
                var0 = function() { // Environment: var0
                    _fun113409: for (var _fun113409_ip = 0;;) switch (_fun113409_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun113409_ip = 45;
                                continue _fun113409
                            }
                        case 18:
                            var4 = _closure1_slot2;
                            var3 = var4.getMember;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var0 = var3.bind(var4)(var2, var1);
                        case 45:
                            return var0;
                    }
                };
                var0 = var6.bind(var7)(var5, var0, var4);
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.getIsEligibleForPowerupUpsells = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1681, 1621, 1623, 1638, 566, 2]);