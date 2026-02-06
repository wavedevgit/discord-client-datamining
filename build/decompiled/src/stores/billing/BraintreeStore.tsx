// stores/billing/BraintreeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun25602: for (var _fun25602_ip = 0;;) switch (_fun25602_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = function() {
                _fun25603: for (var _fun25603_ip = 0;;) switch (_fun25603_ip) {
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
                        _fun25603_ip = 74;
                        continue _fun25603;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot16 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot16 = var0;
            var1 = global;
            var9 = var1.Object;
            var8 = var9.defineProperty;
            var7 = {};
            var0 = true;
            var7.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var7);
            var0 = 0;
            var7 = var5[var0];
            var0 = undefined;
            var7 = var6.bind(var0)(var7);
            var _closure1_slot2 = var7;
            var7 = 1;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot3 = var7;
            var7 = 2;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot4 = var7;
            var7 = 3;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot5 = var7;
            var7 = 4;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot6 = var7;
            var7 = 5;
            var7 = var5[var7];
            var7 = var4.bind(var0)(var7);
            var8 = var7.Endpoints;
            var _closure1_slot7 = var8;
            var8 = var7.PaymentGateways;
            var _closure1_slot8 = var8;
            var7 = var7.PaymentSourceTypes;
            var _closure1_slot9 = var7;
            var7 = null;
            var _closure1_slot12 = var7;
            var _closure1_slot13 = var7;
            var _closure1_slot14 = var7;
            var7 = 6;
            var7 = var5[var7];
            var8 = var4.bind(var0)(var7);
            var7 = var8.isDesktop;
            var7 = var7.bind(var8)();
            if (!var7) {
                _fun25602_ip = 259;
                continue _fun25602
            }
        case 225:
            var7 = var1.window;
            var1 = {};
            var8 = function() {
                _fun25606: for (var _fun25606_ip = 0;;) switch (_fun25606_ip) {
                    case 0:
                        var2 = _closure1_slot10;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun25606_ip = 81;
                            continue _fun25606
                        }
                    case 13:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.getAPIBaseURL;
                        var1 = var1.bind(var2)();
                        var4 = _closure1_slot7;
                        var3 = var4.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                        var2 = _closure1_slot8;
                        var2 = var2.BRAINTREE;
                        var0 = _closure1_slot10;
                        var0 = var3.bind(var4)(var2, var0);
                        var0 = var1 + var0;
                        return var0;
                    case 81:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var6 = 'popupBridgeState is unset';
                        var7 = var1;
                        var0 = new var7[var2](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var1.getReturnUrlPrefix = var8;
            var8 = function arg0() {
                var3 = arg0;
                var _closure1_slot11 = var3;
                var1 = global;
                var2 = var1.window;
                var1 = var2.open;
                var1 = var1.bind(var2)(var3);
                var1 = _closure1_slot15;
                var0 = var1.emitChange;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var1.open = var8;
            var7.popupBridge = var1;
        case 259:
            var1 = 8;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var7 = var1.Store;
            var1 = function(arg0) { // Environment: var3
                var3 = function() {
                    _fun25609: for (var _fun25609_ip = 0;;) switch (_fun25609_ip) {
                        case 0:
                            var3 = this;
                            var2 = undefined;
                            var4 = undefined;
                            var0 = _closure1_slot2;
                            var1 = _closure2_slot0;
                            var0 = var0.bind(var2)(var3, var1);
                            var0 = _closure1_slot5;
                            var8 = var0.bind(var2)(var1);
                            var1 = _closure1_slot4;
                            var0 = _closure1_slot16;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun25609_ip = 69;
                                continue _fun25609
                            }
                        case 51:
                            var6 = var8.apply;
                            var4 = arguments;
                            var0 = var4;
                            var0 = var6.bind(var8)(var3, var0);
                            _fun25609_ip = 105;
                            continue _fun25609;
                        case 69:
                            var6 = global;
                            var7 = var6.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot5;
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
                var4 = _closure1_slot6;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot3;
                var4 = {};
                var0 = 'getClient';
                var4.key = var0;
                var0 = function() {
                    var0 = _closure1_slot12;
                    return var0;
                };
                var4.value = var0;
                var0 = new Array(4);
                var0[0] = var4;
                var4 = {};
                var6 = 'getPayPalClient';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot13;
                    return var0;
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'getVenmoClient';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot14;
                    return var0;
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'getLastURL';
                var4.key = var6;
                var5 = function() {
                    var0 = _closure1_slot11;
                    return var0;
                };
                var4.value = var5;
                var0[3] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var8 = var1.bind(var0)(var7);
            var1 = 'BraintreeStore';
            var8.displayName = var1;
            var1 = 9;
            var1 = var5[var1];
            var12 = var6.bind(var0)(var1);
            var1 = {};
            var6 = function arg0() {
                var0 = arg0;
                var1 = var0.client;
                _closure1_slot12 = var1;
                var0 = undefined;
                return var0;
            };
            var1.BRAINTREE_CREATE_CLIENT_SUCCESS = var6;
            var6 = function arg0() {
                var0 = arg0;
                var1 = var0.paypalClient;
                _closure1_slot13 = var1;
                var0 = undefined;
                return var0;
            };
            var1.BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS = var6;
            var6 = function arg0() {
                _fun25616: for (var _fun25616_ip = 0;;) switch (_fun25616_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.paymentSourceType;
                        var3 = var0.state;
                        var1 = var0.path;
                        var0 = var0.query;
                        var4 = _closure1_slot9;
                        var4 = var4.PAYPAL;
                        if (!(var5 === var4)) {
                            _fun25616_ip = 104;
                            continue _fun25616
                        }
                    case 43:
                        var2 = _closure1_slot10;
                        if (!(var3 === var2)) {
                            _fun25616_ip = 104;
                            continue _fun25616
                        }
                    case 51:
                        var2 = global;
                        var2 = var2.window;
                        var2 = var2.popupBridge;
                        var3 = var2.onComplete;
                        var4 = 'function';
                        var2 = typeof var3;
                        if (!(var4 === var2)) {
                            _fun25616_ip = 104;
                            continue _fun25616
                        }
                    case 82:
                        var2 = {};
                        var2.path = var1;
                        var2.queryItems = var0;
                        var1 = undefined;
                        var0 = null;
                        var0 = var3.bind(var1)(var0, var2);
                    case 104:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.BILLING_POPUP_BRIDGE_CALLBACK = var6;
            var6 = function arg0() {
                _fun25617: for (var _fun25617_ip = 0;;) switch (_fun25617_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.paymentSourceType;
                        var1 = var0.state;
                        var2 = _closure1_slot9;
                        var2 = var2.PAYPAL;
                        if (!(var3 === var2)) {
                            _fun25617_ip = 35;
                            continue _fun25617
                        }
                    case 31:
                        var _closure1_slot10 = var1;
                    case 35:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.BILLING_POPUP_BRIDGE_STATE_UPDATE = var6;
            var6 = function() {
                var0 = null;
                _closure1_slot13 = var0;
                var0 = undefined;
                return var0;
            };
            var1.BRAINTREE_TEARDOWN_PAYPAL_CLIENT = var6;
            var6 = function arg0() {
                var0 = arg0;
                var1 = var0.venmoClient;
                _closure1_slot14 = var1;
                var0 = undefined;
                return var0;
            };
            var1.BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS = var6;
            var6 = function() {
                var0 = null;
                _closure1_slot14 = var0;
                var0 = undefined;
                return var0;
            };
            var1.BRAINTREE_TEARDOWN_VENMO_CLIENT = var6;
            var6 = var8.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var8
                }
            });
            var13 = var6;
            var11 = var1;
            var1 = new var13[var8](var12, var11, var10);
            var1 = var1 instanceof Object ? var1 : var6;
            var _closure1_slot15 = var1;
            var3 = 10;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'stores/billing/BraintreeStore.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 478, 507, 566, 806, 2]);