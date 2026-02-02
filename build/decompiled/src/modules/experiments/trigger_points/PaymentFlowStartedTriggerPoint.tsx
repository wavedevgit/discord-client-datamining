// modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var3 = var3.CommonTriggerPoints;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.CommonTriggerPointConfiguration;
    var11 = var3.PAYMENT_FLOW_STARTED;
    var7 = {};
    var3 = 'payment flow started';
    var7.location = var3;
    var3 = var9.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var9
        }
    });
    var12 = new Array(0);
    var13 = var4;
    var10 = var7;
    var3 = new var13[var9](var12, var11, var10, var9);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot3 = var3;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx';
    var4 = var5.bind(var6)(var4);
    var2.PaymentFlowStartedTriggerPoint = var3;
    var1 = function arg0() {
        _fun58047: for (var _fun58047_ip = 0;;) switch (_fun58047_ip) {
            case 0:
                var6 = arguments[1];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun58047_ip = 11;
                    continue _fun58047
                }
            case 9:
                var6 = {};
            case 11:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var2 = var4[var2];
                var5 = var3.bind(var0)(var2);
                var4 = var5.track;
                var2 = _closure1_slot2;
                var3 = var2.PAYMENT_FLOW_STARTED;
                var2 = arg0;
                var2 = var4.bind(var5)(var3, var2, var6);
                var2 = _closure1_slot3;
                var1 = var2.trigger;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var2.trackPaymentFlowStartedAnalyticsAndCTP = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 660, 7068, 795, 2]);