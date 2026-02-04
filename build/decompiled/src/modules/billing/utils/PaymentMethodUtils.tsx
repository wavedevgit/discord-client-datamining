// modules/billing/utils/PaymentMethodUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var6 = var6.PaymentSourceTypes;
    var _closure1_slot3 = var6;
    var8 = var6.CARD;
    var7 = new Array(2);
    var7[0] = var8;
    var8 = var6.PAYPAL;
    var7[1] = var8;
    var _closure1_slot4 = var7;
    var9 = var3.Set;
    var7 = var9.prototype;
    var8 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var16 = ['DE', 'BG', 'CZ', 'DK', 'HU', 'RO', 'SE', 'CH', 'SI', 'IE', 'LV', 'MT', 'FR', 'SK', 'FI', 'GR', 'PT', 'LU', 'LT', 'CY', 'NO', 'NL', 'ES', 'BE', 'AT', 'IT'];
    var17 = var8;
    var7 = new var17[var9](var16, var15);
    var15 = var7 instanceof Object ? var7 : var8;
    var9 = var3.Map;
    var7 = var6.SOFORT;
    var8 = new Array(2);
    var8[0] = var7;
    var11 = var3.Set;
    var7 = var11.prototype;
    var10 = Object.create(var7, {
        constructor: {
            value: var11
        }
    });
    var16 = new Array(0);
    var17 = var10;
    var7 = new var17[var11](var16, var15);
    var7 = var7 instanceof Object ? var7 : var10;
    var8[1] = var7;
    var7 = new Array(14);
    var7[0] = var8;
    var10 = var6.PRZELEWY24;
    var8 = new Array(2);
    var8[0] = var10;
    var12 = var3.Set;
    var10 = var12.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var12
        }
    });
    var16 = ['ALL', 'PL'];
    var17 = var11;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var8[1] = var10;
    var7[1] = var8;
    var10 = var6.GIROPAY;
    var8 = new Array(2);
    var8[0] = var10;
    var12 = var3.Set;
    var10 = var12.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var12
        }
    });
    var16 = ['ALL', 'DE'];
    var17 = var11;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var8[1] = var10;
    var7[2] = var8;
    var10 = var6.PAYSAFE_CARD;
    var8 = new Array(2);
    var8[0] = var10;
    var12 = var3.Set;
    var10 = ['ALL'];
    var14 = 1;
    var16 = var10;
    var11 = arraySpread(var16, var15, var14);
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var17 = var11;
    var16 = var10;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var8[1] = var10;
    var7[3] = var8;
    var10 = var6.GCASH;
    var8 = new Array(2);
    var8[0] = var10;
    var12 = var3.Set;
    var10 = var12.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var12
        }
    });
    var16 = ['ALL', 'PH'];
    var17 = var11;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var8[1] = var10;
    var7[4] = var8;
    var10 = var6.GRABPAY_MY;
    var8 = new Array(2);
    var8[0] = var10;
    var12 = var3.Set;
    var10 = var12.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var12
        }
    });
    var16 = ['ALL', 'MY'];
    var17 = var11;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var8[1] = var10;
    var7[5] = var8;
    var10 = var6.MOMO_WALLET;
    var8 = new Array(2);
    var8[0] = var10;
    var12 = var3.Set;
    var10 = var12.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var12
        }
    });
    var16 = ['ALL', 'VN'];
    var17 = var11;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var8[1] = var10;
    var7[6] = var8;
    var10 = var6.VENMO;
    var8 = new Array(2);
    var8[0] = var10;
    var12 = var3.Set;
    var10 = var12.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var12
        }
    });
    var16 = ['ALL', 'US'];
    var17 = var11;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var8[1] = var10;
    var7[7] = var8;
    var10 = var6.KAKAOPAY;
    var8 = new Array(2);
    var8[0] = var10;
    var12 = var3.Set;
    var10 = var12.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var12
        }
    });
    var16 = ['ALL', 'KR'];
    var17 = var11;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var8[1] = var10;
    var7[8] = var8;
    var10 = var6.GOPAY_WALLET;
    var8 = new Array(2);
    var8[0] = var10;
    var12 = var3.Set;
    var10 = var12.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var12
        }
    });
    var16 = ['ALL', 'ID'];
    var17 = var11;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var8[1] = var10;
    var7[9] = var8;
    var10 = var6.BANCONTACT;
    var8 = new Array(2);
    var8[0] = var10;
    var12 = var3.Set;
    var10 = var12.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var12
        }
    });
    var16 = ['ALL', 'BE'];
    var17 = var11;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var8[1] = var10;
    var7[10] = var8;
    var10 = var6.EPS;
    var8 = new Array(2);
    var8[0] = var10;
    var12 = var3.Set;
    var10 = var12.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var12
        }
    });
    var16 = ['ALL', 'AT'];
    var17 = var11;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var8[1] = var10;
    var7[11] = var8;
    var10 = var6.IDEAL;
    var8 = new Array(2);
    var8[0] = var10;
    var12 = var3.Set;
    var10 = var12.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var12
        }
    });
    var16 = ['ALL', 'NL'];
    var17 = var11;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var8[1] = var10;
    var7[12] = var8;
    var10 = var6.CASH_APP;
    var8 = new Array(2);
    var8[0] = var10;
    var12 = var3.Set;
    var10 = var12.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var12
        }
    });
    var16 = ['ALL', 'US'];
    var17 = var11;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var8[1] = var10;
    var7[13] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var9
        }
    });
    var17 = var8;
    var16 = var7;
    var7 = new var17[var9](var16, var15);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot5 = var7;
    var7 = var3.Map;
    var8 = var6.PAYSAFE_CARD;
    var6 = new Array(2);
    var6[0] = var8;
    var9 = var3.Set;
    var3 = var9.prototype;
    var8 = Object.create(var3, {
        constructor: {
            value: var9
        }
    });
    var16 = ['DE'];
    var17 = var8;
    var3 = new var17[var9](var16, var15);
    var3 = var3 instanceof Object ? var3 : var8;
    var6[1] = var3;
    var3 = new Array(1);
    var3[0] = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var17 = var6;
    var16 = var3;
    var3 = new var17[var7](var16, var15);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/billing/utils/PaymentMethodUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = ['city', 'country', 'line1'];
    var2.NEW_PAYMENT_METHOD_REQUIRED_ADDRESS_ATTRIBUTES = var3;
    var1 = function arg0() {
        _fun29559: for (var _fun29559_ip = 0;;) switch (_fun29559_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.ipCountryCode;
                var0 = var0.location;
                var9 = undefined;
                var _closure2_slot1 = var9;
                var _closure2_slot2 = var9;
                var _closure2_slot3 = var9;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 1;
                var3 = var6[var3];
                var6 = var5.bind(var9)(var3);
                var5 = var6.getCurrentConfig;
                var3 = {};
                var3.location = var0;
                var0 = {};
                var7 = false;
                var0.autoTrackExposure = var7;
                var3 = var5.bind(var6)(var3, var0);
                var0 = var3.enabledPaymentTypes;
                var _closure2_slot0 = var0;
                var0 = var3.forceCountryCode;
                var6 = var3.validCountryCodes;
                var7 = null;
                var5 = var7 != var1;
                var3 = 'ALL';
                if (!var5) {
                    _fun29559_ip = 118;
                    continue _fun29559
                }
            case 115:
                var3 = var1;
            case 118:
                _closure2_slot1 = var3;
                var3 = var6.length;
                var5 = 0;
                var3 = var3 > var5;
                if (!var3) {
                    _fun29559_ip = 140;
                    continue _fun29559
                }
            case 136:
                var3 = var7 != var0;
            case 140:
                if (!var3) {
                    _fun29559_ip = 147;
                    continue _fun29559
                }
            case 143:
                var3 = var7 != var1;
            case 147:
                if (!var3) {
                    _fun29559_ip = 170;
                    continue _fun29559
                }
            case 150:
                var3 = var6.includes;
                var3 = var3.bind(var6)(var1);
                if (!var3) {
                    _fun29559_ip = 166;
                    continue _fun29559
                }
            case 163:
                var0 = var1;
            case 166:
                _closure2_slot1 = var0;
            case 170:
                var3 = global;
                var0 = var3.Set;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var14 = var1;
                var0 = new var14[var0](var13);
                var6 = var0 instanceof Object ? var0 : var1;
                _closure2_slot2 = var6;
                var8 = new Array(0);
                _closure2_slot3 = var8;
                var7 = _closure1_slot5;
                var1 = var7.forEach;
                var0 = function(arg0, arg1) { // Environment: var4
                    _fun29560: for (var _fun29560_ip = 0;;) switch (_fun29560_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = arg1;
                            var3 = _closure2_slot0;
                            var1 = var3.includes;
                            var1 = var1.bind(var3)(var2);
                            if (!var1) {
                                _fun29560_ip = 73;
                                continue _fun29560
                            }
                        case 26:
                            var3 = var4.has;
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var4)(var1);
                            if (var1) {
                                _fun29560_ip = 59;
                                continue _fun29560
                            }
                        case 43:
                            var3 = _closure2_slot3;
                            var1 = var3.push;
                            var1 = var1.bind(var3)(var2);
                            _fun29560_ip = 73;
                            continue _fun29560;
                        case 59:
                            var1 = _closure2_slot2;
                            var0 = var1.add;
                            var0 = var0.bind(var1)(var2);
                        case 73:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var7)(var0);
                var7 = _closure1_slot6;
                var1 = var7.forEach;
                var0 = function(arg0, arg1) { // Environment: var4
                    _fun29561: for (var _fun29561_ip = 0;;) switch (_fun29561_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.has;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var1);
                            if (!var1) {
                                _fun29561_ip = 40;
                                continue _fun29561
                            }
                        case 23:
                            var2 = _closure2_slot2;
                            var1 = var2.add;
                            var0 = arg1;
                            var0 = var1.bind(var2)(var0);
                        case 40:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var7)(var0);
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var10 = 2;
                var0 = var0[var10];
                var0 = var1.bind(var9)(var0);
                var0 = var0.isIOSWeb;
                if (var0) {
                    _fun29559_ip = 300;
                    continue _fun29559
                }
            case 277:
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var10];
                var1 = var7.bind(var9)(var1);
                var0 = var1.isAndroidWeb;
            case 300:
                var1 = var8;
                if (!var0) {
                    _fun29559_ip = 348;
                    continue _fun29559
                }
            case 306:
                var7 = var6.delete;
                var0 = _closure1_slot3;
                var0 = var0.VENMO;
                var0 = var7.bind(var6)(var0);
                var7 = var8.filter;
                var0 = function(arg0) { // Environment: var4
                    var0 = _closure1_slot3;
                    var1 = var0.VENMO;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var0 = var7.bind(var8)(var0);
                _closure2_slot3 = var0;
                var1 = var0;
            case 348:
                var0 = {};
                var12 = _closure1_slot4;
                var2 = new Array(0);
                var13 = var2;
                var11 = 0;
                var11 = arraySpread(var13, var12, var11);
                var5 = var3.Array;
                var3 = var5.from;
                var12 = var3.bind(var5)(var6);
                var13 = var2;
                var3 = arraySpread(var13, var12, var11);
                var0.countryPaymentMethods = var2;
                var0.remainingPaymentMethods = var1;
                return var0;
        }
    };
    var2.getPaymentMethods = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3448, 3360, 2]);