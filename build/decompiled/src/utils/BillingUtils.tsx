// utils/BillingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun25584: for (var _fun25584_ip = 0;;) switch (_fun25584_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun25584_ip = 115;
                            continue _fun25584
                        }
                    case 10:
                        var4 = null;
                        var3 = var4 != var1;
                        var2 = null;
                        if (!var3) {
                            _fun25584_ip = 109;
                            continue _fun25584
                        }
                    case 21:
                        var5 = var1.paymentGateway;
                        var3 = _closure1_slot4;
                        var3 = var3.BRAINTREE;
                        var2 = null;
                        if (!(var5 === var3)) {
                            _fun25584_ip = 109;
                            continue _fun25584
                        }
                    case 46:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.collectDeviceData;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 82);
                    case 80:
                        return var1;
                    case 82:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun25584_ip = 112;
                            continue _fun25584
                        }
                    case 88:
                        var3 = var4 != var1;
                        var2 = null;
                        if (!var3) {
                            _fun25584_ip = 109;
                            continue _fun25584
                        }
                    case 97:
                        var3 = {};
                        var3.braintree_device_data = var1;
                        var2 = var3;
                    case 109:
                        return var2;
                    case 112:
                        return var1;
                    case 115:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PaymentGateways;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/BillingUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var0 = global;
        var0 = var0.Date;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var6 = var1;
        var0 = new var6[var0](var5);
        var3 = var0 instanceof Object ? var0 : var1;
        var1 = var3.setMonth;
        var2 = arg0;
        var0 = 1;
        var0 = var2 - var0;
        var0 = var1.bind(var3)(var0);
        var2 = var3.toLocaleString;
        var1 = {};
        var0 = 'short';
        var1.month = var0;
        var0 = arg1;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getLocalizedDisplayMonth = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createGatewayCheckoutContext = var3;
    var3 = function arg0, arg1() {
        _fun25587: for (var _fun25587_ip = 0;;) switch (_fun25587_ip) {
            case 0:
                var6 = arg1;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.captureException;
                var2 = {};
                var9 = var2;
                var8 = var6;
                var1 = copyDataProperties(var9, var8);
                var5 = {};
                var1 = null;
                var7 = var1 == var6;
                var1 = undefined;
                if (var7) {
                    _fun25587_ip = 65;
                    continue _fun25587
                }
            case 59:
                var1 = var6.tags;
            case 65:
                var9 = var5;
                var8 = var1;
                var1 = copyDataProperties(var9, var8);
                var6 = 'billing';
                var1 = 'app_context';
                var5[var1] = var6;
                var1 = 'tags';
                var2[var1] = var5;
                var1 = arg0;
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.captureBillingException = var3;
    var3 = function arg0, arg1() {
        _fun25588: for (var _fun25588_ip = 0;;) switch (_fun25588_ip) {
            case 0:
                var6 = arg1;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.captureMessage;
                var2 = {};
                var9 = var2;
                var8 = var6;
                var1 = copyDataProperties(var9, var8);
                var5 = {};
                var1 = null;
                var7 = var1 == var6;
                var1 = undefined;
                if (var7) {
                    _fun25588_ip = 65;
                    continue _fun25588
                }
            case 59:
                var1 = var6.tags;
            case 65:
                var9 = var5;
                var8 = var1;
                var1 = copyDataProperties(var9, var8);
                var6 = 'billing';
                var1 = 'app_context';
                var5[var1] = var6;
                var1 = 'tags';
                var2[var1] = var5;
                var1 = arg0;
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.captureBillingMessage = var3;
    var1 = function arg0, arg1() {
        _fun25589: for (var _fun25589_ip = 0;;) switch (_fun25589_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = 'P1M';
                var0 = var0 === var2;
                var4 = var0;
                if (!var0) {
                    _fun25589_ip = 32;
                    continue _fun25589
                }
            case 22:
                var1 = 'P1Y';
                var4 = var1 === var3;
            case 32:
                var1 = true;
                if (!(var4 !== var1)) {
                    _fun25589_ip = 177;
                    continue _fun25589
                }
            case 41:
                var4 = var0;
                if (!var0) {
                    _fun25589_ip = 57;
                    continue _fun25589
                }
            case 47:
                var5 = 'P6M';
                var4 = var5 === var3;
            case 57:
                if (!(var4 !== var1)) {
                    _fun25589_ip = 172;
                    continue _fun25589
                }
            case 61:
                if (!var0) {
                    _fun25589_ip = 74;
                    continue _fun25589
                }
            case 64:
                var4 = 'P3M';
                var0 = var4 === var3;
            case 74:
                if (!(var0 !== var1)) {
                    _fun25589_ip = 167;
                    continue _fun25589
                }
            case 78:
                var0 = 'P3M';
                var0 = var0 === var2;
                var4 = var0;
                if (!var0) {
                    _fun25589_ip = 104;
                    continue _fun25589
                }
            case 94:
                var5 = 'P1Y';
                var4 = var5 === var3;
            case 104:
                if (!(var4 !== var1)) {
                    _fun25589_ip = 162;
                    continue _fun25589
                }
            case 108:
                if (!var0) {
                    _fun25589_ip = 121;
                    continue _fun25589
                }
            case 111:
                var4 = 'P6M';
                var0 = var4 === var3;
            case 121:
                if (!(var0 !== var1)) {
                    _fun25589_ip = 157;
                    continue _fun25589
                }
            case 125:
                var0 = 'P6M';
                var0 = var0 === var2;
                if (!var0) {
                    _fun25589_ip = 148;
                    continue _fun25589
                }
            case 138:
                var2 = 'P1Y';
                var0 = var2 === var3;
            case 148:
                if (!(var0 !== var1)) {
                    _fun25589_ip = 157;
                    continue _fun25589
                }
            case 152:
                var0 = 1;
                return var0;
            case 157:
                var0 = 2;
                return var0;
            case 162:
                var0 = 4;
                return var0;
            case 167:
                var0 = 3;
                return var0;
            case 172:
                var0 = 6;
                return var0;
            case 177:
                var0 = 12;
                return var0;
        }
    };
    var2.calculateStandardizedUnits = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 483, 3128, 1207, 2]);