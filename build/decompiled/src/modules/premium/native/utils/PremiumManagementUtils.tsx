// modules/premium/native/utils/PremiumManagementUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var8;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var3 = var3.SubscriptionStatusTypes;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.PaymentGatewayToFriendlyName;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var8[var3];
    var5 = var4.bind(var0)(var3);
    var3 = var5.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var5
        }
    });
    var11 = 'PremiumManagementUtils';
    var12 = var4;
    var3 = new var12[var5](var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot6 = var3;
    var5 = {};
    var3 = 'premium_management';
    var5.PREMIUM_MANAGEMENT = var3;
    var4 = {};
    var3 = 'manage_in_app';
    var4.IN_APP = var3;
    var3 = 'manage_in_external_mobile_payment_gateway';
    var4.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY = var3;
    var3 = 'manage_in_web';
    var4.IN_WEB = var3;
    var _closure1_slot7 = var4;
    var3 = function(arg0) { // Original name: getPremiumManagementMethod, environment: var1
        _fun59301: for (var _fun59301_ip = 0;;) switch (_fun59301_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                var3 = var2 == var1;
                var0 = null;
                if (var3) {
                    _fun59301_ip = 88;
                    continue _fun59301
                }
            case 14:
                var3 = var1.isOnPlatformMatchingExternalPaymentGateway;
                if (var3) {
                    _fun59301_ip = 72;
                    continue _fun59301
                }
            case 23:
                var3 = var1.isPurchasedExternally;
                if (!var3) {
                    _fun59301_ip = 42;
                    continue _fun59301
                }
            case 32:
                var1 = var1.paymentGateway;
                if (!(var2 == var1)) {
                    _fun59301_ip = 57;
                    continue _fun59301
                }
            case 42:
                var1 = _closure1_slot7;
                var1 = var1.IN_WEB;
                _fun59301_ip = 70;
                continue _fun59301;
            case 57:
                var2 = _closure1_slot7;
                var1 = var2.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY;
            case 70:
                _fun59301_ip = 85;
                continue _fun59301;
            case 72:
                var2 = _closure1_slot7;
                var1 = var2.IN_APP;
            case 85:
                var0 = var1;
            case 88:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var6 = function() { // Original name: defaultMobileWebNitroManagementSuccessCallback, environment: var1
        var2 = _closure1_slot6;
        var1 = var2.log;
        var0 = 'Successfully opened mobile web Nitro Management page';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot9 = var6;
    var6 = function(arg0) { // Original name: defaultMobileWebNitroManagementFailureCallback, environment: var1
        var3 = _closure1_slot6;
        var2 = var3.error;
        var1 = 'Failed to open mobile web Nitro Management page, error response: ';
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 4;
        var1 = var8[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.show;
        var1 = {};
        var7 = _closure1_slot0;
        var4 = 5;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var5 = var5.t;
        var5 = var5.vgvbiP;
        var5 = var6.bind(var9)(var5);
        var1.title = var5;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var0)(var4);
        var4 = var4.t;
        var4 = var4.ycleJf;
        var4 = var5.bind(var6)(var4);
        var1.body = var4;
        var4 = true;
        var1.hideActionSheet = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot10 = var6;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/native/utils/PremiumManagementUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.MobileWebDestinationTypes = var5;
    var2.PremiumManagementMethod = var4;
    var2.getPremiumManagementMethod = var3;
    var1 = function(arg0) { // Original name: getExternalManagementMessage, environment: var1
        _fun59304: for (var _fun59304_ip = 0;;) switch (_fun59304_ip) {
            case 0:
                var5 = arg0;
                var1 = arguments[1];
                var8 = undefined;
                if (!(var1 === var8)) {
                    _fun59304_ip = 16;
                    continue _fun59304
                }
            case 14:
                var1 = null;
            case 16:
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var8;
                var0 = _closure1_slot8;
                var3 = var0.bind(var8)(var5);
                var0 = null;
                if (!(var0 != var3)) {
                    _fun59304_ip = 634;
                    continue _fun59304
                }
            case 45:
                var2 = _closure1_slot7;
                var2 = var2.IN_APP;
                if (!(var3 !== var2)) {
                    _fun59304_ip = 634;
                    continue _fun59304
                }
            case 62:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 6;
                var2 = var7[var2];
                var4 = var4.bind(var8)(var2);
                var2 = var4.isIOS;
                var2 = var2.bind(var4)();
                var7 = 'Android';
                if (!var2) {
                    _fun59304_ip = 107;
                    continue _fun59304
                }
            case 101:
                var7 = 'iOS';
            case 107:
                var2 = _closure1_slot7;
                var2 = var2.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY;
                if (!(var3 === var2)) {
                    _fun59304_ip = 138;
                    continue _fun59304
                }
            case 121:
                if (!(var0 != var5)) {
                    _fun59304_ip = 138;
                    continue _fun59304
                }
            case 125:
                var2 = var5.paymentGateway;
                if (!(var0 == var2)) {
                    _fun59304_ip = 546;
                    continue _fun59304
                }
            case 138:
                var2 = _closure1_slot7;
                var2 = var2.IN_WEB;
                if (!(var3 !== var2)) {
                    _fun59304_ip = 154;
                    continue _fun59304
                }
            case 152:
                return var0;
            case 154:
                if (!(var0 != var1)) {
                    _fun59304_ip = 177;
                    continue _fun59304
                }
            case 158:
                var2 = var1.shouldAllowExternalManagement;
                if (!var2) {
                    _fun59304_ip = 177;
                    continue _fun59304
                }
            case 167:
                var2 = 'iOS';
                if (!(var2 !== var7)) {
                    _fun59304_ip = 244;
                    continue _fun59304
                }
            case 177:
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 5;
                var4 = var10[var2];
                var4 = var3.bind(var8)(var4);
                var9 = var4.intl;
                var4 = var9.formatToPlainString;
                var2 = var10[var2];
                var2 = var3.bind(var8)(var2);
                var2 = var2.t;
                var3 = var2.CnoyAN;
                var2 = {};
                var2.mobilePlatform = var7;
                var2 = var4.bind(var9)(var3, var2);
                return var2;
            case 244:
                var10 = function() { // Original name: manageExternalNitroSubscription, environment: var12
                    _fun59305: for (var _fun59305_ip = 0;;) switch (_fun59305_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 7;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.goToStandaloneNitroManagementFromMobileApp;
                            var3 = {};
                            var2 = _closure2_slot0;
                            var6 = var2.loadId;
                            var3.loadId = var6;
                            var2 = var2.onSuccessCallback;
                            var7 = null;
                            if (!(var7 == var2)) {
                                _fun59305_ip = 69;
                                continue _fun59305
                            }
                        case 63:
                            var2 = _closure1_slot9;
                            _fun59305_ip = 79;
                            continue _fun59305;
                        case 69:
                            var6 = _closure2_slot0;
                            var2 = var6.onSuccessCallback;
                        case 79:
                            var6 = _closure2_slot0;
                            var6 = var6.onFailureCallback;
                            if (!(var7 == var6)) {
                                _fun59305_ip = 99;
                                continue _fun59305
                            }
                        case 93:
                            var1 = _closure1_slot10;
                            _fun59305_ip = 109;
                            continue _fun59305;
                        case 99:
                            var0 = _closure2_slot0;
                            var1 = var0.onFailureCallback;
                        case 109:
                            var11 = 'premium_external_management';
                            var12 = var5;
                            var10 = var3;
                            var9 = var2;
                            var8 = var1;
                            var0 = var12[var4](var11, var10, var9, var8, var7);
                            return var0;
                    }
                };
                _closure2_slot1 = var10;
                var2 = var0 == var5;
                var3 = undefined;
                if (var2) {
                    _fun59304_ip = 267;
                    continue _fun59304
                }
            case 262:
                var3 = var5.status;
            case 267:
                var2 = _closure1_slot3;
                var2 = var2.CANCELED;
                var9 = var3 === var2;
                if (var9) {
                    _fun59304_ip = 298;
                    continue _fun59304
                }
            case 284:
                var2 = _closure1_slot3;
                var2 = var2.PAUSE_PENDING;
                var9 = var3 === var2;
            case 298:
                if (var9) {
                    _fun59304_ip = 315;
                    continue _fun59304
                }
            case 301:
                var2 = _closure1_slot3;
                var2 = var2.PAST_DUE;
                var9 = var3 === var2;
            case 315:
                var1 = var1.returnCtaAsComponent;
                if (var1) {
                    _fun59304_ip = 396;
                    continue _fun59304
                }
            case 324:
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 5;
                var3 = var11[var1];
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var11[var1];
                var1 = var2.bind(var8)(var1);
                var1 = var1.t;
                var2 = var1.IERwUb;
                var1 = {};
                var1.manageExternalNitroSubscription = var10;
                var1 = var3.bind(var4)(var2, var1);
                _fun59304_ip = 544;
                continue _fun59304;
            case 396:
                var4 = _closure1_slot5;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 8;
                var2 = var10[var2];
                var2 = var11.bind(var8)(var2);
                var3 = var2.LinkButton;
                var2 = {};
                var13 = {};
                var14 = 'flex-start';
                var13.justifyContent = var14;
                var2.containerStyle = var13;
                var12 = function() { // Original name: onPress, environment: var12
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var2.onPress = var12;
                var14 = 5;
                var10 = var10[var14];
                var10 = var11.bind(var8)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var14];
                var12 = var13.bind(var8)(var12);
                var12 = var12.t;
                if (var9) {
                    _fun59304_ip = 511;
                    continue _fun59304
                }
            case 501:
                var9 = var12["olSp/D"];
                _fun59304_ip = 519;
                continue _fun59304;
            case 511:
                var9 = var12.tqSSSA;
            case 519:
                var9 = var10.bind(var11)(var9);
                var2.text = var9;
                var9 = 'text-sm/semibold';
                var2.variant = var9;
                var1 = var4.bind(var8)(var3, var2);
            case 544:
                return var1;
            case 546:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 5;
                var3 = var9[var1];
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var9[var1];
                var1 = var2.bind(var8)(var1);
                var1 = var1.t;
                var2 = var1.cFZnqX;
                var1 = {};
                var1.mobilePlatform = var7;
                var6 = _closure1_slot4;
                var5 = var5.paymentGateway;
                var5 = var6[var5];
                var1.externalPaymentGateway = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 634:
                return var0;
        }
    };
    var2.getExternalManagementMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 483, 33, 3, 3896, 1234, 478, 7098, 7257, 2]);