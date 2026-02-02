// modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PremiumTypes;
    var _closure1_slot6 = var6;
    var3 = var3.FractionalPremiumStates;
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        _fun55237: for (var _fun55237_ip = 0;;) switch (_fun55237_ip) {
            case 0:
                var5 = arguments[0];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun55237_ip = 13;
                    continue _fun55237
                }
            case 11:
                var5 = false;
            case 13:
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var0;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 4;
                var3 = var8[var3];
                var9 = var6.bind(var0)(var3);
                var7 = var9.useStateFromStores;
                var3 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var1
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var11 = var7.bind(var9)(var4, var3);
                var3 = 5;
                var3 = var8[var3];
                var4 = var6.bind(var0)(var3);
                var3 = var4.useHasDiscountApplied;
                var4 = var3.bind(var4)();
                var3 = 6;
                var3 = var8[var3];
                var6 = var6.bind(var0)(var3);
                var3 = var6.useHasActiveTrial;
                var3 = var3.bind(var6)();
                var7 = _closure1_slot1;
                var6 = 7;
                var6 = var8[var6];
                var6 = var7.bind(var0)(var6);
                var7 = var6.bind(var0)();
                var6 = null;
                var6 = var6 == var11;
                var8 = undefined;
                if (var6) {
                    _fun55237_ip = 153;
                    continue _fun55237
                }
            case 147:
                var8 = var11.verified;
            case 153:
                var6 = true;
                var6 = var6 === var8;
                if (!var6) {
                    _fun55237_ip = 204;
                    continue _fun55237
                }
            case 162:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 8;
                var8 = var10[var8];
                var10 = var9.bind(var0)(var8);
                var9 = var10.isPremiumExactly;
                var8 = _closure1_slot6;
                var8 = var8.TIER_2;
                var6 = var9.bind(var10)(var11, var8);
            case 204:
                if (!var6) {
                    _fun55237_ip = 213;
                    continue _fun55237
                }
            case 207:
                var6 = var7.fetched;
            case 213:
                if (!var6) {
                    _fun55237_ip = 236;
                    continue _fun55237
                }
            case 216:
                var8 = var7.fractionalState;
                var7 = _closure1_slot7;
                var7 = var7.FP_ONLY;
                var6 = var8 !== var7;
            case 236:
                if (!var6) {
                    _fun55237_ip = 242;
                    continue _fun55237
                }
            case 239:
                var6 = !var4;
            case 242:
                if (!var6) {
                    _fun55237_ip = 248;
                    continue _fun55237
                }
            case 245:
                var6 = !var3;
            case 248:
                _closure2_slot1 = var6;
                var4 = _closure1_slot3;
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    _fun55239: for (var _fun55239_ip = 0;;) switch (_fun55239_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (!var0) {
                                _fun55239_ip = 17;
                                continue _fun55239
                            }
                        case 10:
                            var1 = _closure2_slot0;
                            var0 = !var1;
                        case 17:
                            if (!var0) {
                                _fun55239_ip = 37;
                                continue _fun55239
                            }
                        case 20:
                            var1 = _closure1_slot5;
                            var0 = var1.checkAndFetchReferralsRemaining;
                            var0 = var0.bind(var1)();
                        case 37:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.useMaybeFetchReferralsRemaining = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1613, 6606, 1615, 566, 6616, 6618, 4617, 1628, 2]);