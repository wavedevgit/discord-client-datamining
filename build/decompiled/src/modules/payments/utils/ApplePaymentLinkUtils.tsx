// modules/payments/utils/ApplePaymentLinkUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var8;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var4 = var3.Routes;
    var _closure1_slot3 = var4;
    var3 = var3.LinkingTypes;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.PREMIUM_TIER_2_PLANS;
    var _closure1_slot5 = var3;
    var5 = function arg0() {
        _fun29931: for (var _fun29931_ip = 0;;) switch (_fun29931_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.location;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var5 = var1.TurtleExperiment;
                var4 = var5.getCurrentConfig;
                var1 = {};
                var1.location = var3;
                var1 = var4.bind(var5)(var1);
                var1 = var1.enabled;
                if (var1) {
                    _fun29931_ip = 109;
                    continue _fun29931
                }
            case 64:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 4;
                var0 = var4[var0];
                var0 = var1.bind(var2)(var0);
                var2 = var0.MobileApplePaymentLinkExperiment;
                var1 = var2.getConfig;
                var0 = {};
                var0.location = var3;
                var0 = var1.bind(var2)(var0);
                _fun29931_ip = 123;
                continue _fun29931;
            case 109:
                var0 = {
                    'enabled': false,
                    'discountEnabled': false
                };
            case 123:
                return var0;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function arg0() {
        _fun29932: for (var _fun29932_ip = 0;;) switch (_fun29932_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.location;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 3;
                var0 = var5[var0];
                var2 = undefined;
                var0 = var3.bind(var2)(var0);
                var6 = var0.TurtleExperiment;
                var1 = var6.useExperiment;
                var0 = {};
                var0.location = var4;
                var0 = var1.bind(var6)(var0);
                var1 = var0.enabled;
                var0 = 4;
                var0 = var5[var0];
                var0 = var3.bind(var2)(var0);
                var3 = var0.MobileApplePaymentLinkExperiment;
                var2 = var3.useConfig;
                var0 = {};
                var0.location = var4;
                var0 = var2.bind(var3)(var0);
                if (!var1) {
                    _fun29932_ip = 113;
                    continue _fun29932
                }
            case 99:
                var0 = {
                    'enabled': false,
                    'discountEnabled': false
                };
            case 113:
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var3 = function arg0, arg1, arg2() {
        _fun29933: for (var _fun29933_ip = 0;;) switch (_fun29933_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var3 = var4.startsWith;
                var0 = _closure1_slot3;
                var0 = var0.BILLING_MANAGE_SUBSCRIPTION;
                var0 = var3.bind(var4)(var0);
                var0 = !var0;
                if (!var0) {
                    _fun29933_ip = 62;
                    continue _fun29933
                }
            case 36:
                var1 = _closure1_slot4;
                var3 = var1.APPLE_PAYMENT_LINK;
                var1 = arg2;
                var1 = var1 === var3;
                if (!var1) {
                    _fun29933_ip = 59;
                    continue _fun29933
                }
            case 56:
                var1 = var2;
            case 59:
                var0 = var1;
            case 62:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = function arg0() {
        _fun29934: for (var _fun29934_ip = 0;;) switch (_fun29934_ip) {
            case 0:
                var4 = arguments[1];
                var0 = arg0;
                var7 = var0.location;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun29934_ip = 19;
                    continue _fun29934
                }
            case 17:
                var4 = false;
            case 19:
                var1 = global;
                var0 = var1.window;
                var0 = var0.location;
                var2 = var0.pathname;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 6;
                var5 = var8[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.parse;
                var1 = var1.window;
                var1 = var1.location;
                var1 = var1.search;
                var1 = var5.bind(var6)(var1);
                var1 = var1.deep_link_type;
                var6 = var2.startsWith;
                var5 = _closure1_slot3;
                var5 = var5.BILLING_MANAGE_SUBSCRIPTION;
                var5 = var6.bind(var2)(var5);
                if (var5) {
                    _fun29934_ip = 158;
                    continue _fun29934
                }
            case 119:
                var6 = _closure1_slot6;
                var5 = {};
                var5.location = var7;
                var5 = var6.bind(var3)(var5);
                var5 = var5.enabled;
                var0 = _closure1_slot8;
                if (var4) {
                    _fun29934_ip = 149;
                    continue _fun29934
                }
            case 146:
                var4 = var5;
            case 149:
                var0 = var0.bind(var3)(var4, var2, var1);
                return var0;
            case 158:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var6 = 7;
    var6 = var8[var6];
    var10 = var7.bind(var0)(var6);
    var9 = var10.fileFinishedImporting;
    var6 = 'modules/payments/utils/ApplePaymentLinkUtils.tsx';
    var6 = var9.bind(var10)(var6);
    var6 = 'apple_payment_links';
    var2.APPLE_PAYMENT_LINK_ERROR_TAG = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.MobileApplePaymentLinkExperiment;
    var2.MobileApplePaymentLinkExperiment = var6;
    var6 = function(arg0, arg1, arg2) { // Environment: var1
        var1 = arg2;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.captureException;
        var2 = {};
        var5 = {};
        var6 = 'apple_payment_links';
        var5.app_context = var6;
        var6 = arg1;
        var5.source = var6;
        var7 = var1.tags;
        var8 = var5;
        var6 = copyDataProperties(var8, var7);
        var2.tags = var5;
        var1 = var1.extra;
        var2.extra = var1;
        var1 = arg0;
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.captureApplePaymentLinkSentryError = var6;
    var2.getApplePaymentLinkExperimentConfig = var5;
    var2.useApplePaymentLinkExperimentConfig = var4;
    var4 = function(arg0) { // Environment: var1
        var0 = arg0;
        var8 = var0.location;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 5;
        var1 = var7[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var1);
        var1 = var2.useLocation;
        var1 = var1.bind(var2)();
        var6 = var1.search;
        var3 = var1.pathname;
        var2 = _closure1_slot7;
        var1 = {};
        var1.location = var8;
        var1 = var2.bind(var4)(var1);
        var2 = var1.enabled;
        var1 = 6;
        var1 = var7[var1];
        var5 = var5.bind(var4)(var1);
        var1 = var5.parse;
        var1 = var1.bind(var5)(var6);
        var1 = var1.deep_link_type;
        var0 = _closure1_slot8;
        var0 = var0.bind(var4)(var2, var3, var1);
        return var0;
    };
    var2.useIsInApplePaymentLinkCustomCheckoutFlow = var4;
    var2.getIsInApplePaymentLinkCustomCheckoutFlow = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun29937: for (var _fun29937_ip = 0;;) switch (_fun29937_ip) {
            case 0:
                var6 = arg1;
                var0 = arg0;
                var0 = var0.location;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var7 = undefined;
                var5 = var2.bind(var7)(var1);
                var3 = var5.parse;
                var1 = global;
                var2 = var1.window;
                var2 = var2.location;
                var2 = var2.search;
                var2 = var3.bind(var5)(var2);
                var3 = var2.use_preset_offer;
                var1 = var1.window;
                var1 = var1.location;
                var5 = var1.pathname;
                var2 = _closure1_slot9;
                var1 = {};
                var1.location = var0;
                var0 = true;
                var2 = var2.bind(var7)(var1, var0);
                var1 = var5.startsWith;
                var0 = _closure1_slot3;
                var0 = var0.BILLING_PREMIUM_SUBSCRIBE;
                var0 = var1.bind(var5)(var0);
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun29937_ip = 182;
                    continue _fun29937
                }
            case 139:
                var1 = null;
                var1 = var1 != var6;
                if (!var1) {
                    _fun29937_ip = 162;
                    continue _fun29937
                }
            case 148:
                var5 = _closure1_slot5;
                var4 = var5.has;
                var1 = var4.bind(var5)(var6);
            case 162:
                if (!var1) {
                    _fun29937_ip = 168;
                    continue _fun29937
                }
            case 165:
                var1 = var2;
            case 168:
                if (!var1) {
                    _fun29937_ip = 179;
                    continue _fun29937
                }
            case 171:
                var2 = 'true';
                var1 = var2 === var3;
            case 179:
                var0 = var1;
            case 182:
                return var0;
        }
    };
    var2.getShouldUseApplePaymentLinkOfferInMobileWeb = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1623, 1207, 3465, 3466, 3467, 3340, 2]);