// modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var4 = var3.createContext;
    var8 = var3.useContext;
    var _closure1_slot3 = var8;
    var8 = var3.useCallback;
    var _closure1_slot4 = var8;
    var3 = var3.useMemo;
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = {
        'skuId': '123',
        'loadId': null,
        'analyticsLocations': null,
        'analyticsSourceLocation': null,
        'isRedeeming': false,
        'orbRedemptionError': null,
        'orbProductContext': null
    };
    var7 = 3;
    var7 = var6[var7];
    var8 = var5.bind(var0)(var7);
    var7 = var8.v4;
    var7 = var7.bind(var8)();
    var3.loadId = var7;
    var7 = new Array(0);
    var3.analyticsLocations = var7;
    var3.analyticsSourceLocation = var0;
    var7 = function() {
        var0 = undefined;
        return var0;
    };
    var3.onRedeemVirtualCurrency = var7;
    var3.rentalDuration = var0;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = function arg0() {
        _fun86588: for (var _fun86588_ip = 0;;) switch (_fun86588_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.skuId;
                var _closure2_slot0 = var9;
                var8 = var1.loadId;
                var _closure2_slot1 = var8;
                var7 = var1.analyticsLocations;
                var12 = var1.onCheckoutSuccess;
                var _closure2_slot2 = var12;
                var1 = var1.rentalDuration;
                var _closure2_slot3 = var1;
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 4;
                var2 = var10[var2];
                var11 = undefined;
                var13 = var3.bind(var11)(var2);
                var6 = var13.useStateFromStores;
                var2 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.canUseCollectibles;
                    var3 = _closure1_slot6;
                    var0 = var3.getCurrentUser;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var6.bind(var13)(var5, var2);
                var _closure2_slot4 = var2;
                var5 = 6;
                var5 = var10[var5];
                var6 = var3.bind(var11)(var5);
                var5 = var6.useFetchCollectiblesProduct;
                var5 = var5.bind(var6)(var9);
                var6 = var5.product;
                var _closure2_slot5 = var6;
                var13 = _closure1_slot5;
                var5 = new Array(3);
                var5[0] = var6;
                var5[1] = var2;
                var5[2] = var1;
                var2 = function() { // Environment: var0
                    _fun86590: for (var _fun86590_ip = 0;;) switch (_fun86590_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun86590_ip = 117;
                                continue _fun86590
                            }
                        case 13:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 7;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getProductOrbPrice;
                            var1 = {};
                            var5 = _closure2_slot5;
                            var1.product = var5;
                            var5 = _closure2_slot4;
                            var1.isPremiumUser = var5;
                            var5 = _closure2_slot3;
                            var5 = var0 != var5;
                            var1.isRental = var5;
                            var4 = var3.bind(var4)(var1);
                            var1 = {};
                            var1.orbPrice = var4;
                            var3 = null;
                            if (!(var3 !== var4)) {
                                _fun86590_ip = 101;
                                continue _fun86590
                            }
                        case 95:
                            var3 = var4.amount;
                        case 101:
                            var1.orbPriceAmount = var3;
                            var2 = _closure2_slot5;
                            var1.product = var2;
                            return var1;
                        case 117:
                            return var0;
                    }
                };
                var5 = var13.bind(var11)(var2, var5);
                var2 = 8;
                var2 = var10[var2];
                var10 = var3.bind(var11)(var2);
                var3 = var10.useRedeemVirtualCurrency;
                var2 = {};
                var2.skuId = var9;
                var2.loadId = var8;
                var2 = var3.bind(var10)(var2);
                var13 = var2.redeemVirtualCurrency;
                var _closure2_slot6 = var13;
                var3 = var2.isSubmitting;
                var2 = var2.error;
                var10 = _closure1_slot4;
                var4 = new Array(5);
                var4[0] = var9;
                var4[1] = var8;
                var4[2] = var13;
                var4[3] = var12;
                var4[4] = var1;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var5 = _closure2_slot6;
                    var9 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var0 = null;
                    var6 = var0 != var2;
                    var0 = undefined;
                    var7 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot2;
                        var1 = {};
                        var3 = arg0;
                        var1.entitlements = var3;
                        var0 = _closure2_slot0;
                        var1.skuId = var0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var1 = _closure3_slot0;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var10 = undefined;
                    var1 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var4 = var10.bind(var11)(var0, var4);
                var0 = {};
                var0.skuId = var9;
                var0.loadId = var8;
                var8 = null;
                if (!(var8 == var7)) {
                    _fun86588_ip = 295;
                    continue _fun86588
                }
            case 291:
                var7 = new Array(0);
            case 295:
                var0.analyticsLocations = var7;
                var0.product = var6;
                var0.orbProductContext = var5;
                var0.onRedeemVirtualCurrency = var4;
                var0.isRedeeming = var3;
                var0.orbRedemptionError = var2;
                var0.rentalDuration = var1;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useOrbCheckoutModalContextProvider = var3;
    var3 = function(arg0) { // Environment: var1
        _fun86593: for (var _fun86593_ip = 0;;) switch (_fun86593_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.skuId;
                var13 = var0.loadId;
                var11 = var0.analyticsSourceLocation;
                var12 = var0.analyticsLocations;
                var3 = var0.onCheckoutSuccess;
                var6 = var0.rentalDuration;
                var4 = var0.children;
                var2 = _closure1_slot9;
                var1 = {};
                var1.skuId = var14;
                var1.loadId = var13;
                var1.analyticsLocations = var12;
                var1.onCheckoutSuccess = var3;
                var1.rentalDuration = var6;
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var10 = var1.orbProductContext;
                var9 = var1.onRedeemVirtualCurrency;
                var8 = var1.isRedeeming;
                var7 = var1.orbRedemptionError;
                var2 = _closure1_slot7;
                var0 = _closure1_slot8;
                var1 = var0.Provider;
                var0 = {};
                var5 = {};
                var5.skuId = var14;
                var5.loadId = var13;
                var13 = null;
                if (!(var13 == var12)) {
                    _fun86593_ip = 147;
                    continue _fun86593
                }
            case 143:
                var12 = new Array(0);
            case 147:
                var5.analyticsLocations = var12;
                var5.analyticsSourceLocation = var11;
                var5.orbProductContext = var10;
                var5.onRedeemVirtualCurrency = var9;
                var5.isRedeeming = var8;
                var5.orbRedemptionError = var7;
                var5.rentalDuration = var6;
                var0.value = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.OrbCheckoutModalContextProvider = var3;
    var1 = function() { // Environment: var1
        var2 = _closure1_slot3;
        var1 = _closure1_slot8;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.useOrbCheckoutModalContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1613, 33, 491, 566, 3068, 6842, 4577, 9962, 2]);