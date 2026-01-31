// stores/billing/BillingInfoStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun25106: for (var _fun25106_ip = 0;;) switch (_fun25106_ip) {
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
            case 70: // try_end0
                _fun25106_ip = 74;
                continue _fun25106;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var12 = function() { // Original name: handlePaymentSourceCreateEnd, environment: var3
        var0 = false;
        _closure1_slot11 = var0;
        var0 = undefined;
        return var0;
    };
    var11 = function() { // Original name: handlePaymentSourcesFetchEnd, environment: var3
        var0 = undefined;
        var _closure1_slot6 = var0;
        return var0;
    };
    var10 = function() { // Original name: handleSubscriptionFetchEnd, environment: var3
        var0 = false;
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var9 = function() { // Original name: handleSubscriptionUpdateStart, environment: var3
        var0 = true;
        _closure1_slot15 = var0;
        var0 = undefined;
        return var0;
    };
    var8 = function() { // Original name: handleSubscriptionUpdateEnd, environment: var3
        var0 = false;
        _closure1_slot15 = var0;
        var0 = undefined;
        return var0;
    };
    var0 = global;
    var13 = var0.Object;
    var7 = var13.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var13)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.FallbackCurrencyCountry;
    var _closure1_slot5 = var1;
    var1 = false;
    var _closure1_slot11 = var1;
    var _closure1_slot12 = var1;
    var _closure1_slot13 = var1;
    var _closure1_slot14 = var1;
    var _closure1_slot15 = var1;
    var7 = null;
    var _closure1_slot16 = var7;
    var _closure1_slot17 = var7;
    var _closure1_slot18 = var1;
    var _closure1_slot19 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: BillingInfoStore, environment: var5
            _fun25115: for (var _fun25115_ip = 0;;) switch (_fun25115_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun25115_ip = 69;
                        continue _fun25115
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun25115_ip = 105;
                    continue _fun25115;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'isBusy';
        var4.key = var0;
        var0 = function() { // Original name: get, environment: var5
            _fun25116: for (var _fun25116_ip = 0;;) switch (_fun25116_ip) {
                case 0:
                    var0 = _closure1_slot11;
                    if (var0) {
                        _fun25116_ip = 14;
                        continue _fun25116
                    }
                case 10:
                    var0 = _closure1_slot12;
                case 14:
                    if (var0) {
                        _fun25116_ip = 21;
                        continue _fun25116
                    }
                case 17:
                    var0 = _closure1_slot15;
                case 21:
                    if (var0) {
                        _fun25116_ip = 28;
                        continue _fun25116
                    }
                case 24:
                    var0 = _closure1_slot13;
                case 28:
                    return var0;
            }
        };
        var4.get = var0;
        var0 = new Array(18);
        var0[0] = var4;
        var4 = {};
        var6 = 'isUpdatingPaymentSource';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot12;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isRemovingPaymentSource';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot13;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isSyncing';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun25119: for (var _fun25119_ip = 0;;) switch (_fun25119_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isPaymentSourceFetching;
                    if (var0) {
                        _fun25119_ip = 18;
                        continue _fun25119
                    }
                case 12:
                    var0 = var1.isSubscriptionFetching;
                case 18:
                    return var0;
            }
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isSubscriptionFetching';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot14;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isPaymentSourceFetching';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var1 = _closure1_slot6;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'editSourceError';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot16;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'removeSourceError';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot17;
            return var0;
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'ipCountryCodeLoaded';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var1 = _closure1_slot7;
            var0 = undefined;
            var0 = var0 !== var1;
            return var0;
        };
        var4.get = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'ipCountryCode';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot7;
            return var0;
        };
        var4.get = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'ipCountryCodeRequest';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot8;
            return var0;
        };
        var4.get = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'ipLocationLoaded';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var1 = _closure1_slot9;
            var0 = undefined;
            var0 = var0 !== var1;
            return var0;
        };
        var4.get = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'ipLocation';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot9;
            return var0;
        };
        var4.get = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'ipLocationRequest';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot10;
            return var0;
        };
        var4.get = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'ipLocationHasError';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot19;
            return var0;
        };
        var4.get = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'ipCountryCodeWithFallback';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun25131: for (var _fun25131_ip = 0;;) switch (_fun25131_ip) {
                case 0:
                    var2 = _closure1_slot7;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun25131_ip = 19;
                        continue _fun25131
                    }
                case 13:
                    var0 = _closure1_slot5;
                    _fun25131_ip = 23;
                    continue _fun25131;
                case 19:
                    var0 = _closure1_slot7;
                case 23:
                    return var0;
            }
        };
        var4.get = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'ipCountryCodeHasError';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot18;
            return var0;
        };
        var4.get = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'paymentSourcesFetchRequest';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot6;
            return var0;
        };
        var4.get = var5;
        var0[17] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'BillingInfoStore';
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var16 = var6.bind(var0)(var1);
    var1 = {};
    var13 = function() { // Original name: handlePaymentSourceCreateStart, environment: var3
        var0 = true;
        _closure1_slot11 = var0;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_PAYMENT_SOURCE_CREATE_START = var13;
    var1.BILLING_PAYMENT_SOURCE_CREATE_SUCCESS = var12;
    var1.BILLING_PAYMENT_SOURCE_CREATE_FAIL = var12;
    var1.STRIPE_TOKEN_FAILURE = var12;
    var12 = function() { // Original name: handlePaymentSourceRemoveStart, environment: var3
        var0 = true;
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_PAYMENT_SOURCE_REMOVE_START = var12;
    var12 = function() { // Original name: handlePaymentSourceRemoveSuccess, environment: var3
        var0 = false;
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS = var12;
    var12 = function(arg0) { // Original name: handlePaymentSourceRemoveFail, environment: var3
        var0 = arg0;
        var1 = var0.error;
        var2 = false;
        _closure1_slot13 = var2;
        _closure1_slot17 = var1;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_PAYMENT_SOURCE_REMOVE_FAIL = var12;
    var12 = function() { // Original name: handleClearRemoveError, environment: var3
        var0 = null;
        _closure1_slot17 = var0;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR = var12;
    var12 = function() { // Original name: handlePaymentSourceUpdateStart, environment: var3
        var0 = true;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_PAYMENT_SOURCE_UPDATE_START = var12;
    var12 = function() { // Original name: handlePaymentSourceUpdateSuccess, environment: var3
        var0 = false;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS = var12;
    var12 = function(arg0) { // Original name: handlePaymentSourceUpdateFail, environment: var3
        var0 = arg0;
        var1 = var0.error;
        var2 = false;
        _closure1_slot12 = var2;
        _closure1_slot16 = var1;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_PAYMENT_SOURCE_UPDATE_FAIL = var12;
    var12 = function() { // Original name: handleClearUpdateError, environment: var3
        var0 = null;
        _closure1_slot16 = var0;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR = var12;
    var12 = function(arg0) { // Original name: handlePaymentSourcesFetchStart, environment: var3
        var0 = arg0;
        var1 = var0.request;
        _closure1_slot6 = var1;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_PAYMENT_SOURCES_FETCH_START = var12;
    var1.BILLING_PAYMENT_SOURCES_FETCH_SUCCESS = var11;
    var1.BILLING_PAYMENT_SOURCES_FETCH_FAIL = var11;
    var11 = function() { // Original name: handleSubscriptionFetchStart, environment: var3
        var0 = true;
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_SUBSCRIPTION_FETCH_START = var11;
    var1.BILLING_SUBSCRIPTION_FETCH_SUCCESS = var10;
    var1.BILLING_SUBSCRIPTION_FETCH_FAIL = var10;
    var1.BILLING_SUBSCRIPTION_UPDATE_START = var9;
    var1.BILLING_SUBSCRIPTION_CANCEL_START = var9;
    var1.BILLING_SUBSCRIPTION_UPDATE_SUCCESS = var8;
    var1.BILLING_SUBSCRIPTION_UPDATE_FAIL = var8;
    var1.BILLING_SUBSCRIPTION_CANCEL_FAIL = var8;
    var1.BILLING_SUBSCRIPTION_CANCEL_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleIpCountryCodeFetchStart, environment: var3
        var0 = arg0;
        var1 = var0.request;
        var _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_IP_COUNTRY_CODE_FETCH_START = var8;
    var8 = function(arg0) { // Original name: handleSetIpCountryCode, environment: var3
        var0 = arg0;
        var1 = var0.countryCode;
        var _closure1_slot7 = var1;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_SET_IP_COUNTRY_CODE = var8;
    var8 = function() { // Original name: handleIpCountryCodeFailure, environment: var3
        var0 = null;
        _closure1_slot7 = var0;
        var0 = true;
        _closure1_slot18 = var0;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_IP_COUNTRY_CODE_FAILURE = var8;
    var8 = function(arg0) { // Original name: handleIpLocationFetchStart, environment: var3
        var0 = arg0;
        var1 = var0.request;
        var _closure1_slot10 = var1;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_IP_LOCATION_FETCH_START = var8;
    var8 = function(arg0) { // Original name: handleSetIpLocation, environment: var3
        var0 = arg0;
        var1 = var0.location;
        var _closure1_slot9 = var1;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_SET_IP_LOCATION = var8;
    var8 = function() { // Original name: handleIpLocationFailure, environment: var3
        var0 = null;
        _closure1_slot9 = var0;
        var0 = true;
        _closure1_slot19 = var0;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_IP_LOCATION_FAILURE = var8;
    var8 = function() { // Original name: handleLogout, environment: var3
        var0 = undefined;
        _closure1_slot6 = var0;
        _closure1_slot8 = var0;
        _closure1_slot7 = var0;
        var1 = false;
        _closure1_slot18 = var1;
        _closure1_slot9 = var0;
        _closure1_slot19 = var1;
        _closure1_slot10 = var0;
        var1 = null;
        _closure1_slot17 = var1;
        _closure1_slot16 = var1;
        return var0;
    };
    var1.LOGOUT = var8;
    var3 = function(arg0) { // Original name: CONNECTION_OPEN, environment: var3
        _fun25152: for (var _fun25152_ip = 0;;) switch (_fun25152_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.countryCode;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun25152_ip = 22;
                    continue _fun25152
                }
            case 15:
                _closure1_slot7 = var1;
            case 22:
                var0 = undefined;
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var17 = var3;
    var15 = var1;
    var1 = new var17[var7](var16, var15, var14);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/billing/BillingInfoStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 566, 806, 2]);