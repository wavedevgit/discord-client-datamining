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
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = function arg0() {
        _fun87512: for (var _fun87512_ip = 0;;) switch (_fun87512_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.skuId;
                var _closure2_slot0 = var8;
                var7 = var1.loadId;
                var _closure2_slot1 = var7;
                var6 = var1.analyticsLocations;
                var11 = var1.onCheckoutSuccess;
                var _closure2_slot2 = var11;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 4;
                var1 = var9[var1];
                var10 = undefined;
                var12 = var2.bind(var10)(var1);
                var5 = var12.useStateFromStores;
                var1 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
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
                var1 = var5.bind(var12)(var4, var1);
                var _closure2_slot3 = var1;
                var4 = 6;
                var4 = var9[var4];
                var5 = var2.bind(var10)(var4);
                var4 = var5.useFetchCollectiblesProduct;
                var4 = var4.bind(var5)(var8);
                var5 = var4.product;
                var _closure2_slot4 = var5;
                var12 = _closure1_slot5;
                var4 = new Array(2);
                var4[0] = var5;
                var4[1] = var1;
                var1 = function() { // Environment: var0
                    _fun87514: for (var _fun87514_ip = 0;;) switch (_fun87514_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun87514_ip = 104;
                                continue _fun87514
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
                            var5 = _closure2_slot4;
                            var1.product = var5;
                            var5 = _closure2_slot3;
                            var1.isPremiumUser = var5;
                            var4 = var3.bind(var4)(var1);
                            var1 = {};
                            var1.orbPrice = var4;
                            var3 = null;
                            if (!(var3 !== var4)) {
                                _fun87514_ip = 88;
                                continue _fun87514
                            }
                        case 82:
                            var3 = var4.amount;
                        case 88:
                            var1.orbPriceAmount = var3;
                            var2 = _closure2_slot4;
                            var1.product = var2;
                            return var1;
                        case 104:
                            return var0;
                    }
                };
                var4 = var12.bind(var10)(var1, var4);
                var1 = 8;
                var1 = var9[var1];
                var9 = var2.bind(var10)(var1);
                var2 = var9.useRedeemVirtualCurrency;
                var1 = {};
                var1.skuId = var8;
                var1.loadId = var7;
                var1 = var2.bind(var9)(var1);
                var12 = var1.redeemVirtualCurrency;
                var _closure2_slot5 = var12;
                var2 = var1.isSubmitting;
                var1 = var1.error;
                var9 = _closure1_slot4;
                var3 = new Array(4);
                var3[0] = var8;
                var3[1] = var7;
                var3[2] = var12;
                var3[3] = var11;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure2_slot5;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
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
                    var1 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var3 = var9.bind(var10)(var0, var3);
                var0 = {};
                var0.skuId = var8;
                var0.loadId = var7;
                var7 = null;
                if (!(var7 == var6)) {
                    _fun87512_ip = 277;
                    continue _fun87512
                }
            case 273:
                var6 = new Array(0);
            case 277:
                var0.analyticsLocations = var6;
                var0.product = var5;
                var0.orbProductContext = var4;
                var0.onRedeemVirtualCurrency = var3;
                var0.isRedeeming = var2;
                var0.orbRedemptionError = var1;
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
        _fun87517: for (var _fun87517_ip = 0;;) switch (_fun87517_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.skuId;
                var12 = var0.loadId;
                var10 = var0.analyticsSourceLocation;
                var11 = var0.analyticsLocations;
                var3 = var0.onCheckoutSuccess;
                var4 = var0.children;
                var2 = _closure1_slot9;
                var1 = {};
                var1.skuId = var13;
                var1.loadId = var12;
                var1.analyticsLocations = var11;
                var1.onCheckoutSuccess = var3;
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var9 = var1.orbProductContext;
                var8 = var1.onRedeemVirtualCurrency;
                var7 = var1.isRedeeming;
                var6 = var1.orbRedemptionError;
                var2 = _closure1_slot7;
                var0 = _closure1_slot8;
                var1 = var0.Provider;
                var0 = {};
                var5 = {};
                var5.skuId = var13;
                var5.loadId = var12;
                var12 = null;
                if (!(var12 == var11)) {
                    _fun87517_ip = 136;
                    continue _fun87517
                }
            case 132:
                var11 = new Array(0);
            case 136:
                var5.analyticsLocations = var11;
                var5.analyticsSourceLocation = var10;
                var5.orbProductContext = var9;
                var5.onRedeemVirtualCurrency = var8;
                var5.isRedeeming = var7;
                var5.orbRedemptionError = var6;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 33, 491, 566, 3114, 6963, 4617, 10090, 2]);