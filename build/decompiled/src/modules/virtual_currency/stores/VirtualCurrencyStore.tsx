// modules/virtual_currency/stores/VirtualCurrencyStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun75620: for (var _fun75620_ip = 0;;) switch (_fun75620_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun75620_ip = 76;
                continue _fun75620;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Store;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun75624: for (var _fun75624_ip = 0;;) switch (_fun75624_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var0 = 5;
                    var0 = var7[var0];
                    var0 = var6.bind(var3)(var0);
                    var9 = new Array(2);
                    var9[0] = var0;
                    var0 = {};
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleRedeemVirtualCurrencyStart;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.VIRTUAL_CURRENCY_REDEEM_START = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleRedeemVirtualCurrencySuccess;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.VIRTUAL_CURRENCY_REDEEM_SUCCESS = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleRedeemVirtualCurrencyFail;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.VIRTUAL_CURRENCY_REDEEM_FAIL = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleBalanceFetch;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.VIRTUAL_CURRENCY_BALANCE_FETCH = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleBalanceFetchSuccess;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleBalanceFetchFail;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleBalanceUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.VIRTUAL_CURRENCY_BALANCE_UPDATE = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleOnboardingModalOpen;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleOnboardingModalReset;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET = var6;
                    var6 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleBalanceStateReset;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0.LOGIN_SUCCESS = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.setBalancePillOverlay;
                        var0 = arg0;
                        var0 = var0.balancePillOverlay;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY = var6;
                    var9[1] = var0;
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun75624_ip = 248;
                        continue _fun75624
                    }
                case 235:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun75624_ip = 282;
                    continue _fun75624;
                case 248:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 282:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = null;
                    var0._entitlements = var2;
                    var0._redeemingSkuId = var2;
                    var1 = false;
                    var0._isRedeemingVirtualCurrency = var1;
                    var0._redeemVirtualCurrencyError = var2;
                    var0._balance = var2;
                    var0._fetchBalanceError = var2;
                    var0._isFetchingBalance = var1;
                    var0._onboardingModalOpenedPrior = var1;
                    var0._balancePillOverlay = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'redeemError';
        var4.key = var0;
        var0 = function() {
            var0 = this;
            var0 = var0._redeemVirtualCurrencyError;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(21);
        var0[0] = var4;
        var4 = {};
        var6 = 'isRedeeming';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._isRedeemingVirtualCurrency;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'redeemingSkuId';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._redeemingSkuId;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'entitlements';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._entitlements;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'balance';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._balance;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'fetchBalanceError';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._fetchBalanceError;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isFetchingBalance';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._isFetchingBalance;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'onboardingModalOpenedPrior';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._onboardingModalOpenedPrior;
            return var0;
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'balancePillOverlay';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._balancePillOverlay;
            return var0;
        };
        var4.get = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'setBalancePillOverlay';
        var4.key = var6;
        var6 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0._balancePillOverlay = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getCurrentBalance';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.balance;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'handleBalanceStateReset';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = null;
            var1._balance = var0;
            var1._fetchBalanceError = var0;
            var0 = false;
            var1._isFetchingBalance = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'handleBalanceFetch';
        var4.key = var6;
        var6 = function arg0() {
            _fun75648: for (var _fun75648_ip = 0;;) switch (_fun75648_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var0 = null;
                    if (!(var1 != var0)) {
                        _fun75648_ip = 30;
                        continue _fun75648
                    }
                case 12:
                    var3 = true;
                    var2._isFetchingBalance = var3;
                    var2._fetchBalanceError = var0;
                    var0 = undefined;
                    return var0;
                case 30:
                    var4 = "Cannot destructure 'undefined' or 'null'.";
                    var5 = var1;
                    var0 = throwTypeError(var5, var4);
                    var0 = undefined;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'handleBalanceFetchSuccess';
        var4.key = var6;
        var6 = function arg0() {
            var1 = this;
            var0 = arg0;
            var0 = var0.balance;
            var2 = false;
            var1._isFetchingBalance = var2;
            var1._balance = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'handleBalanceFetchFail';
        var4.key = var6;
        var6 = function arg0() {
            var1 = this;
            var0 = arg0;
            var0 = var0.error;
            var2 = false;
            var1._isFetchingBalance = var2;
            var1._fetchBalanceError = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'handleBalanceUpdate';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var1 = var0.balance;
            var0 = this;
            var0._balance = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'handleRedeemVirtualCurrencyStart';
        var4.key = var6;
        var6 = function arg0() {
            var1 = this;
            var0 = arg0;
            var2 = var0.skuId;
            var0 = null;
            var1._entitlements = var0;
            var1._redeemingSkuId = var2;
            var1._redeemVirtualCurrencyError = var0;
            var0 = true;
            var1._isRedeemingVirtualCurrency = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'handleRedeemVirtualCurrencySuccess';
        var4.key = var6;
        var6 = function arg0() {
            var1 = this;
            var0 = arg0;
            var0 = var0.entitlements;
            var1._entitlements = var0;
            var0 = null;
            var1._redeemingSkuId = var0;
            var0 = false;
            var1._isRedeemingVirtualCurrency = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'handleRedeemVirtualCurrencyFail';
        var4.key = var6;
        var6 = function arg0() {
            var1 = this;
            var0 = arg0;
            var2 = var0.error;
            var0 = null;
            var1._entitlements = var0;
            var1._redeemVirtualCurrencyError = var2;
            var1._redeemingSkuId = var0;
            var0 = false;
            var1._isRedeemingVirtualCurrency = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'handleOnboardingModalOpen';
        var4.key = var6;
        var6 = function arg0() {
            _fun75655: for (var _fun75655_ip = 0;;) switch (_fun75655_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var1 != var0)) {
                        _fun75655_ip = 24;
                        continue _fun75655
                    }
                case 9:
                    var2 = true;
                    var0 = this;
                    var0._onboardingModalOpenedPrior = var2;
                    var0 = undefined;
                    return var0;
                case 24:
                    var3 = "Cannot destructure 'undefined' or 'null'.";
                    var4 = var1;
                    var0 = throwTypeError(var4, var3);
                    var0 = undefined;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'handleOnboardingModalReset';
        var4.key = var6;
        var5 = function arg0() {
            _fun75656: for (var _fun75656_ip = 0;;) switch (_fun75656_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var1 != var0)) {
                        _fun75656_ip = 24;
                        continue _fun75656
                    }
                case 9:
                    var2 = false;
                    var0 = this;
                    var0._onboardingModalOpenedPrior = var2;
                    var0 = undefined;
                    return var0;
                case 24:
                    var3 = "Cannot destructure 'undefined' or 'null'.";
                    var4 = var1;
                    var0 = throwTypeError(var4, var3);
                    var0 = undefined;
                    throw var0;
            }
        };
        var4.value = var5;
        var0[20] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 'VirtualCurrencyStore';
    var1.displayName = var3;
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/stores/VirtualCurrencyStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 806, 566, 2]);