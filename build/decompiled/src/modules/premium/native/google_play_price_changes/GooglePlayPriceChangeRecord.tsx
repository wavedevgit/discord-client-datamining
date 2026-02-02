// modules/premium/native/google_play_price_changes/GooglePlayPriceChangeRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun25360: for (var _fun25360_ip = 0;;) switch (_fun25360_ip) {
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
                _fun25360_ip = 74;
                continue _fun25360;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = {};
    var6 = 'PRICE_CHANGE_MODE_UNSPECIFIED';
    var3.PRICE_CHANGE_MODE_UNSPECIFIED = var6;
    var6 = 'PRICE_DECREASE';
    var3.PRICE_DECREASE = var6;
    var6 = 'PRICE_INCREASE';
    var3.PRICE_INCREASE = var6;
    var6 = 'OPT_OUT_PRICE_INCREASE';
    var3.OPT_OUT_PRICE_INCREASE = var6;
    var _closure1_slot5 = var3;
    var1 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            _fun25364: for (var _fun25364_ip = 0;;) switch (_fun25364_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot3;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun25364_ip = 65;
                        continue _fun25364
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun25364_ip = 103;
                    continue _fun25364;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = var1.userId;
                    var0.userId = var2;
                    var2 = var1.subscriptionId;
                    var0.subscriptionId = var2;
                    var2 = var1.oldCurrency;
                    var0.oldCurrency = var2;
                    var2 = var1.oldPrice;
                    var0.oldPrice = var2;
                    var2 = var1.newCurrency;
                    var0.newCurrency = var2;
                    var2 = var1.newPrice;
                    var0.newPrice = var2;
                    var2 = var1.priceChangeMode;
                    var0.priceChangeMode = var2;
                    var2 = var1.expectedChargeTime;
                    var0.expectedChargeTime = var2;
                    var1 = var1.priceChangeId;
                    var0.priceChangeId = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'isPriceIncrease';
        var5.key = var1;
        var1 = function() {
            _fun25365: for (var _fun25365_ip = 0;;) switch (_fun25365_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.priceChangeMode;
                    var0 = _closure1_slot5;
                    var0 = var0.PRICE_INCREASE;
                    var0 = var3 === var0;
                    if (var0) {
                        _fun25365_ip = 49;
                        continue _fun25365
                    }
                case 29:
                    var2 = var2.priceChangeMode;
                    var1 = _closure1_slot5;
                    var1 = var1.OPT_OUT_PRICE_INCREASE;
                    var0 = var2 === var1;
                case 49:
                    return var0;
            }
        };
        var5.get = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var6 = 'isOptOutPriceIncrease';
        var5.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.priceChangeMode;
            var0 = _closure1_slot5;
            var0 = var0.OPT_OUT_PRICE_INCREASE;
            var0 = var1 === var0;
            return var0;
        };
        var5.get = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'isPriceDecrease';
        var5.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.priceChangeMode;
            var0 = _closure1_slot5;
            var0 = var0.PRICE_DECREASE;
            var0 = var1 === var0;
            return var0;
        };
        var5.get = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'isInFuture';
        var5.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.expectedChargeTime;
            var0 = global;
            var0 = var0.Date;
            var2 = var0.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var0
                }
            });
            var3 = var2;
            var0 = new var3[var0](var2);
            var2 = var0 instanceof Object ? var0 : var2;
            var0 = var2.toISOString;
            var0 = var0.bind(var2)();
            var0 = var1 > var0;
            return var0;
        };
        var5.get = var6;
        var1[3] = var5;
        var5 = {};
        var6 = 'createFromServer';
        var5.key = var6;
        var0 = function arg0() {
            var1 = arg0;
            var2 = _closure2_slot0;
            var0 = {};
            var3 = var1.user_id;
            var0.userId = var3;
            var3 = var1.subscription_id;
            var0.subscriptionId = var3;
            var3 = var1.old_currency;
            var0.oldCurrency = var3;
            var3 = var1.old_price;
            var0.oldPrice = var3;
            var3 = var1.new_currency;
            var0.newCurrency = var3;
            var3 = var1.new_price;
            var0.newPrice = var3;
            var3 = var1.price_change_mode;
            var0.priceChangeMode = var3;
            var3 = var1.expected_charge_time;
            var0.expectedChargeTime = var3;
            var1 = var1.price_change_id;
            var0.priceChangeId = var1;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var5 = var1;
            var4 = var0;
            var0 = new var5[var2](var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var4);
    var4 = 6;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/google_play_price_changes/GooglePlayPriceChangeRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var1;
    var2.GooglePlayPriceChangeMode = var3;
    var2.GooglePlayPriceChangeRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 2]);