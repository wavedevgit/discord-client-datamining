// modules/premium/native/PremiumPlanPurchasedStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.create;
    var3 = function() { // Environment: var1
        var0 = {
            'productId': '',
            'initiatedPurchaseFromNewFlow': false,
            'isPaymentSuccess': false,
            'applePaymentLinkStatus': null
        };
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumPlanPurchasedStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.usePremiumPlanPurchasedStore = var3;
    var3 = function(arg0) { // Original name: setInitiatedPurchaseFromNewFlow, environment: var1
        var0 = arg0;
        var2 = var0.productId;
        var _closure2_slot0 = var2;
        var2 = var0.onPaymentSuccess;
        var _closure2_slot1 = var2;
        var0 = var0.onPaymentDismiss;
        var _closure2_slot2 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot5;
            var1 = var2.setState;
            var0 = {};
            var4 = _closure2_slot0;
            var0.productId = var4;
            var4 = true;
            var0.initiatedPurchaseFromNewFlow = var4;
            var4 = _closure2_slot1;
            var0.onPaymentSuccess = var4;
            var3 = _closure2_slot2;
            var0.onPaymentDismiss = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setInitiatedPurchaseFromNewFlow = var3;
    var3 = function() { // Original name: setPaymentSuccess, environment: var1
        _fun57545: for (var _fun57545_ip = 0;;) switch (_fun57545_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.initiatedPurchaseFromNewFlow;
                if (!var1) {
                    _fun57545_ip = 103;
                    continue _fun57545
                }
            case 26:
                var2 = _closure1_slot5;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var2 = var1.productId;
                var1 = var1.onPaymentSuccess;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = var5.batchUpdates;
                var3 = function() { // Environment: var3
                    var2 = _closure1_slot5;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = true;
                    var0.isPaymentSuccess = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var3 = null;
                if (!(var3 != var1)) {
                    _fun57545_ip = 103;
                    continue _fun57545
                }
            case 98:
                var0 = var1.bind(var0)(var2);
            case 103:
                var0 = undefined;
                return var0;
        }
    };
    var2.setPaymentSuccess = var3;
    var3 = function(arg0) { // Original name: setApplePaymentLinkStatus, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot5;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.applePaymentLinkStatus = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setApplePaymentLinkStatus = var3;
    var3 = function(arg0) { // Original name: handleApplePaymentLinkStatus, environment: var1
        _fun57549: for (var _fun57549_ip = 0;;) switch (_fun57549_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var0 = 'succeeded';
                if (!(var0 === var1)) {
                    _fun57549_ip = 238;
                    continue _fun57549
                }
            case 22:
                var1 = _closure1_slot5;
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var2 = var0.productId;
                var1 = var0.onPaymentSuccess;
                var5 = var0.applePaymentLinkStatus;
                var0 = 'dismissed';
                if (!(var0 !== var5)) {
                    _fun57549_ip = 242;
                    continue _fun57549
                }
            case 68:
                var5 = _closure1_slot3;
                var0 = var5.getKey;
                var7 = var0.bind(var5)();
                var8 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 4;
                var6 = var0[var5];
                var0 = undefined;
                var6 = var8.bind(var0)(var6);
                var6 = var6.PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY;
                if (!(var7 !== var6)) {
                    _fun57549_ip = 191;
                    continue _fun57549
                }
            case 114:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = var9[var5];
                var6 = var8.bind(var0)(var5);
                var5 = {};
                var7 = _closure1_slot4;
                var7 = var7.TIER_2;
                var5.premiumType = var7;
                var7 = 5;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var8 = var7.DEEPLINK;
                var7 = new Array(1);
                var7[0] = var8;
                var5.analyticsLocations = var7;
                var7 = {};
                var5.analyticsLocation = var7;
                var5 = var6.bind(var0)(var5);
            case 191:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 3;
                var4 = var6[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.batchUpdates;
                var3 = function() { // Environment: var3
                    var2 = _closure1_slot5;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = true;
                    var0.isPaymentSuccess = var3;
                    var3 = _closure2_slot0;
                    var0.applePaymentLinkStatus = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var3 = null;
                if (!(var3 != var1)) {
                    _fun57549_ip = 238;
                    continue _fun57549
                }
            case 233:
                var0 = var1.bind(var0)(var2);
            case 238:
                var0 = undefined;
                return var0;
            case 242:
                var0 = undefined;
                return var0;
        }
    };
    var2.handleApplePaymentLinkStatus = var3;
    var3 = function(arg0) { // Original name: showOldPaymentFlowSuccess, environment: var1
        _fun57551: for (var _fun57551_ip = 0;;) switch (_fun57551_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.initiatedPurchaseFromNewFlow;
                if (var1) {
                    _fun57551_ip = 37;
                    continue _fun57551
                }
            case 26:
                var2 = arg0;
                var1 = undefined;
                var1 = var2.bind(var1)();
                _fun57551_ip = 77;
                continue _fun57551;
            case 37:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.batchUpdates;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = true;
                    var0.isPaymentSuccess = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 77:
                var0 = undefined;
                return var0;
        }
    };
    var2.showOldPaymentFlowSuccess = var3;
    var1 = function() { // Original name: reset, environment: var1
        _fun57553: for (var _fun57553_ip = 0;;) switch (_fun57553_ip) {
            case 0:
                var3 = _closure1_slot5;
                var2 = var3.getState;
                var3 = var2.bind(var3)();
                var5 = var3.productId;
                var2 = var3.isPaymentSuccess;
                var4 = var3.onPaymentDismiss;
                var3 = var3.applePaymentLinkStatus;
                var _closure2_slot0 = var3;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun57553_ip = 74;
                    continue _fun57553
                }
            case 53:
                var3 = {};
                var3.productId = var5;
                var3.isSuccess = var2;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
            case 74:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    _fun57554: for (var _fun57554_ip = 0;;) switch (_fun57554_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var2 = var3.setState;
                            var1 = {
                                'productId': '',
                                'initiatedPurchaseFromNewFlow': false,
                                'isPaymentSuccess': false
                            };
                            var0 = _closure2_slot0;
                            var6 = null;
                            var5 = var6 != var0;
                            var0 = null;
                            if (!var5) {
                                _fun57554_ip = 65;
                                continue _fun57554
                            }
                        case 45:
                            var5 = _closure2_slot0;
                            var4 = 'in_mobile_web';
                            var0 = null;
                            if (!(var4 !== var5)) {
                                _fun57554_ip = 65;
                                continue _fun57554
                            }
                        case 61:
                            var0 = 'dismissed';
                        case 65:
                            var1.applePaymentLinkStatus = var0;
                            var0 = undefined;
                            var1.onPaymentSuccess = var0;
                            var1.onPaymentDismiss = var0;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.reset = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3099, 1615, 629, 802, 7013, 5540, 2]);