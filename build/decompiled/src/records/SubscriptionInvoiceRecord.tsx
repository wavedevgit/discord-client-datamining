// records/SubscriptionInvoiceRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun25367: for (var _fun25367_ip = 0;;) switch (_fun25367_ip) {
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
                _fun25367_ip = 74;
                continue _fun25367;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var4 = function(arg0) { // Original name: SubscriptionInvoiceRecord, environment: var0
            _fun25371: for (var _fun25371_ip = 0;;) switch (_fun25371_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot5;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun25371_ip = 65;
                        continue _fun25371
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun25371_ip = 103;
                    continue _fun25371;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = var1.invoiceItems;
                    var0.invoiceItems = var2;
                    var2 = var1.total;
                    var0.total = var2;
                    var2 = var1.subtotal;
                    var0.subtotal = var2;
                    var2 = var1.currency;
                    var0.currency = var2;
                    var2 = var1.tax;
                    var0.tax = var2;
                    var2 = var1.taxInclusive;
                    var0.taxInclusive = var2;
                    var2 = var1.subscriptionPeriodStart;
                    var0.subscriptionPeriodStart = var2;
                    var2 = var1.subscriptionPeriodEnd;
                    var0.subscriptionPeriodEnd = var2;
                    var1 = var1.status;
                    var0.status = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'findInvoiceItemByPlanId';
        var5.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var0
            _fun25372: for (var _fun25372_ip = 0;;) switch (_fun25372_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = this;
                    var2 = var1.invoiceItems;
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.subscriptionPlanId;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun25372_ip = 45;
                        continue _fun25372
                    }
                case 42:
                    var0 = var1;
                case 45:
                    return var0;
            }
        };
        var5.value = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var6 = 'getDiscountIdIfExists';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            _fun25374: for (var _fun25374_ip = 0;;) switch (_fun25374_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.invoiceItems;
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.discounts;
                        var1 = var0.length;
                        var0 = 0;
                        var0 = var1 > var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun25374_ip = 63;
                        continue _fun25374
                    }
                case 32:
                    var2 = var0.discounts;
                    var3 = var2.length;
                    var2 = 0;
                    if (!(var2 !== var3)) {
                        _fun25374_ip = 63;
                        continue _fun25374
                    }
                case 49:
                    var0 = var0.discounts;
                    var0 = var0[var2];
                    if (!(var1 == var0)) {
                        _fun25374_ip = 67;
                        continue _fun25374
                    }
                case 63:
                    var1 = undefined;
                    return var1;
                case 67:
                    var0 = var0.discount_id;
                    return var0;
            }
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'createInvoiceFromServer';
        var5.key = var6;
        var0 = function(arg0) { // Original name: value, environment: var0
            _fun25376: for (var _fun25376_ip = 0;;) switch (_fun25376_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure2_slot0;
                    var0 = {};
                    var3 = var1.id;
                    var0.id = var3;
                    var6 = var1.invoice_items;
                    var3 = null;
                    var4 = var3 == var6;
                    var8 = undefined;
                    var3 = undefined;
                    if (var4) {
                        _fun25376_ip = 79;
                        continue _fun25376
                    }
                case 40:
                    var5 = var6.map;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var4 = 6;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.createInvoiceItemFromServer;
                    var3 = var5.bind(var6)(var4);
                case 79:
                    var0.invoiceItems = var3;
                    var3 = var1.total;
                    var0.total = var3;
                    var3 = var1.subtotal;
                    var0.subtotal = var3;
                    var3 = var1.currency;
                    var0.currency = var3;
                    var3 = var1.tax;
                    var0.tax = var3;
                    var3 = var1.tax_inclusive;
                    var0.taxInclusive = var3;
                    var3 = global;
                    var6 = var3.Date;
                    var10 = var1.subscription_period_start;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var11 = var5;
                    var4 = new var11[var6](var10, var9);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var0.subscriptionPeriodStart = var4;
                    var5 = var3.Date;
                    var10 = var1.subscription_period_end;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var11 = var4;
                    var3 = new var11[var5](var10, var9);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var0.subscriptionPeriodEnd = var3;
                    var1 = var1.status;
                    var0.status = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var11 = var1;
                    var10 = var0;
                    var0 = new var11[var2](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'records/SubscriptionInvoiceRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 3080, 2]);