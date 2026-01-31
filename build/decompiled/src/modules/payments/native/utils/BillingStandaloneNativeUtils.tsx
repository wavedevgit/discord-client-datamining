// modules/payments/native/utils/BillingStandaloneNativeUtils.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'BillingStandaloneNativeUtils';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot4 = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: emitAPLSentryErrorOnFailure, environment: var1
        _fun58211: for (var _fun58211_ip = 0;;) switch (_fun58211_ip) {
            case 0:
                var8 = arg0;
                var4 = var8[Symbol.iterator];
                var8 = var4().next;
                var10 = var8().value;
                var5 = var4;
                var0 = undefined;
                var5 = var5 === var0;
                var7 = undefined;
                if (var5) {
                    _fun58211_ip = 27;
                    continue _fun58211
                }
            case 24:
                var7 = var10;
            case 27:
                var9 = var7;
                var7 = undefined;
                if (var5) {
                    _fun58211_ip = 60;
                    continue _fun58211
                }
            case 35:
                var10 = var8().value;
                var8 = var4;
                var8 = var8 === var0;
                var7 = undefined;
                var5 = var8;
                if (var8) {
                    _fun58211_ip = 60;
                    continue _fun58211
                }
            case 54:
                var7 = var10;
                var5 = var8;
            case 60:
                var3 = var7;
                if (var5) {
                    _fun58211_ip = 69;
                    continue _fun58211
                }
            case 66:
                var4.return();
            case 69:
                var1 = arg1;
                var6 = undefined;
                var2 = 'Apple Payment Link mobile app to web popout failed';
                var4 = {};
                var5 = var3;
                var4.destination_url = var5;
                var5 = arg2;
                var4.load_id = var5;
                var6 = var4;
            case 103: // try_start_0
                var8 = _closure1_slot4;
                var7 = var8.error;
                var12 = var3;
                var3 = global;
                var5 = var3.HermesInternal;
                var11 = var5.concat;
                var10 = 'Failed to open mobile web popout to ';
                var5 = ', error response: ';
                var5 = var11.bind(var10)(var12, var5);
                var10 = var9;
                var5 = var7.bind(var8)(var5, var10);
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 2;
                var4 = var7[var4];
                var8 = var5.bind(var0)(var4);
                var7 = var8.captureApplePaymentLinkSentryError;
                var5 = var3.Error;
                var15 = var2;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var16 = var4;
                var3 = new var16[var5](var15, var14);
                var5 = var3 instanceof Object ? var3 : var4;
                var4 = var1;
                var3 = {};
                var9 = {};
                var9.failure_response = var10;
                var14 = var6;
                var15 = var9;
                var10 = copyDataProperties(var15, var14);
                var3.extra = var9;
                var3 = var7.bind(var8)(var5, var4, var3);
            case 249: // try_end0
                _fun58211_ip = 330;
                continue _fun58211;
            case 251: // catch_target0
                CatchBlockStart(arg_register = 3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 2;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.captureApplePaymentLinkSentryError;
                var3 = global;
                var7 = var3.Error;
                var15 = var2;
                var3 = var7.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var7
                    }
                });
                var16 = var3;
                var2 = new var16[var7](var15, var14);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = var1;
                var1 = {};
                var1.extra = var6;
                var1 = var4.bind(var5)(var3, var2, var1);
            case 330:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/payments/native/utils/BillingStandaloneNativeUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: goToStandalonePremiumCheckoutFromMobileApp, environment: var1
        var4 = arg1;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var _closure2_slot1 = var4;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.goToStandalonePremiumCheckout;
        var1 = function(arg0, arg1) { // Environment: var0
            var3 = arg0;
            var2 = arg1;
            var5 = var2.searchParams;
            var4 = var5.append;
            var0 = var3.body;
            var1 = var0.handoff_token;
            var0 = 'handoff_token';
            var0 = var4.bind(var5)(var0, var1);
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var1);
            var4 = var5.openURLExternally;
            var1 = var2.href;
            var1 = var4.bind(var5)(var1);
            var1 = _closure2_slot2;
            var1 = var1.bind(var0)(var3, var2);
            return var0;
        };
        var0 = function(arg0) { // Environment: var0
            var9 = 0;
            var3 = copyRestArgs(var9);
            var6 = _closure1_slot5;
            var5 = _closure2_slot0;
            var0 = _closure2_slot1;
            var2 = var0.loadId;
            var0 = undefined;
            var2 = var6.bind(var0)(var3, var5, var2);
            var2 = _closure2_slot3;
            var1 = new Array(0);
            var9 = var1;
            var8 = var3;
            var7 = 0;
            var3 = arraySpread(var9, var8, var7);
            var9 = var2;
            var8 = var1;
            var7 = undefined;
            var1 = apply(var9, var8, var7);
            return var0;
        };
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var2.goToStandalonePremiumCheckoutFromMobileApp = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: goToStandaloneNitroManagementFromMobileApp, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var6 = var1.loadId;
        var _closure2_slot1 = var6;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 3;
        var2 = var9[var2];
        var7 = undefined;
        var4 = var8.bind(var7)(var2);
        var3 = var4.goToBillingStandalonePageWithHandoff;
        var5 = _closure1_slot3;
        var2 = var5.BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK;
        var1 = 5;
        var1 = var9[var1];
        var1 = var8.bind(var7)(var1);
        var1 = var1.LinkingTypes;
        var1 = var1.APPLE_PAYMENT_LINK;
        var2 = var2.bind(var5)(var1, var6);
        var1 = function(arg0, arg1) { // Environment: var0
            var3 = arg0;
            var2 = arg1;
            var5 = var2.searchParams;
            var4 = var5.append;
            var0 = var3.body;
            var1 = var0.handoff_token;
            var0 = 'handoff_token';
            var0 = var4.bind(var5)(var0, var1);
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var1);
            var4 = var5.openURLExternally;
            var1 = var2.href;
            var1 = var4.bind(var5)(var1);
            var1 = _closure2_slot2;
            var1 = var1.bind(var0)(var3, var2);
            return var0;
        };
        var0 = function(arg0) { // Environment: var0
            var9 = 0;
            var3 = copyRestArgs(var9);
            var6 = _closure1_slot5;
            var5 = _closure2_slot0;
            var2 = _closure2_slot1;
            var0 = undefined;
            var2 = var6.bind(var0)(var3, var5, var2);
            var2 = _closure2_slot3;
            var1 = new Array(0);
            var9 = var1;
            var8 = var3;
            var7 = 0;
            var3 = arraySpread(var9, var8, var7);
            var9 = var2;
            var8 = var1;
            var7 = undefined;
            var1 = apply(var9, var8, var7);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.goToStandaloneNitroManagementFromMobileApp = var3;
    var1 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: goToStandaloneGuildBoostCheckoutFromMobileApp, environment: var1
        var7 = arg2;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var _closure2_slot1 = var7;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var1 = arg4;
        var _closure2_slot3 = var1;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 3;
        var3 = var9[var2];
        var2 = undefined;
        var4 = var8.bind(var2)(var3);
        var3 = var4.goToBillingStandalonePageWithHandoff;
        var6 = _closure1_slot3;
        var5 = var6.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE;
        var1 = 5;
        var1 = var9[var1];
        var1 = var8.bind(var2)(var1);
        var1 = var1.LinkingTypes;
        var2 = var1.APPLE_PAYMENT_LINK;
        var1 = arg1;
        var2 = var5.bind(var6)(var1, var2, var7);
        var1 = function(arg0, arg1) { // Environment: var0
            var3 = arg0;
            var2 = arg1;
            var5 = var2.searchParams;
            var4 = var5.append;
            var0 = var3.body;
            var1 = var0.handoff_token;
            var0 = 'handoff_token';
            var0 = var4.bind(var5)(var0, var1);
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var1);
            var4 = var5.openURLExternally;
            var1 = var2.href;
            var1 = var4.bind(var5)(var1);
            var1 = _closure2_slot2;
            var1 = var1.bind(var0)(var3, var2);
            return var0;
        };
        var0 = function(arg0) { // Environment: var0
            var9 = 0;
            var3 = copyRestArgs(var9);
            var6 = _closure1_slot5;
            var5 = _closure2_slot0;
            var2 = _closure2_slot1;
            var0 = undefined;
            var2 = var6.bind(var0)(var3, var5, var2);
            var2 = _closure2_slot3;
            var1 = new Array(0);
            var9 = var1;
            var8 = var3;
            var7 = 0;
            var3 = arraySpread(var9, var8, var7);
            var9 = var2;
            var8 = var1;
            var7 = undefined;
            var1 = apply(var9, var8, var7);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.goToStandaloneGuildBoostCheckoutFromMobileApp = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3, 3423, 7098, 3103, 670, 2]);