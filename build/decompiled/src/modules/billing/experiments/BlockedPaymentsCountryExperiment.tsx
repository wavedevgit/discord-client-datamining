// modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx
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
    var11 = true;
    var3.value = var11;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var4 = 0;
    var3 = var6[var4];
    var0 = undefined;
    var8 = var5.bind(var0)(var3);
    var7 = var8.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2022-03_block_russian_purchases',
        'label': 'Block purchases based on country'
    };
    var9 = {};
    var10 = false;
    var9.paymentsBlocked = var10;
    var3.defaultConfig = var9;
    var12 = {
        'id': 1,
        'label': 'Payments Blocked'
    };
    var9 = {};
    var9.paymentsBlocked = var11;
    var12.config = var9;
    var9 = new Array(1);
    var9[0] = var12;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot2 = var3;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2022-03_block_russian_purchases_desktop',
        'label': 'Block purchases based on country (desktop specific flags)'
    };
    var9 = {};
    var9.checkPaymentSource = var10;
    var4.defaultConfig = var9;
    var10 = {
        'id': 1,
        'label': 'Check Payment Source'
    };
    var9 = {};
    var9.checkPaymentSource = var11;
    var10.config = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4.treatments = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function() {
        _fun56483: for (var _fun56483_ip = 0;;) switch (_fun56483_ip) {
            case 0:
                var4 = _closure1_slot2;
                var3 = var4.useExperiment;
                var1 = {};
                var0 = 'c519a9_1';
                var1.location = var0;
                var0 = {};
                var6 = false;
                var0.autoTrackExposure = var6;
                var0 = var3.bind(var4)(var1, var0);
                var0 = var0.paymentsBlocked;
                var5 = _closure1_slot3;
                var4 = var5.useExperiment;
                var3 = {};
                var1 = 'c519a9_2';
                var3.location = var1;
                var1 = {};
                var1.autoTrackExposure = var6;
                var1 = var4.bind(var5)(var3, var1);
                var1 = var1.checkPaymentSource;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var3 = var2.defaultBillingCountryCode;
                if (var0) {
                    _fun56483_ip = 136;
                    continue _fun56483
                }
            case 122:
                if (!var1) {
                    _fun56483_ip = 133;
                    continue _fun56483
                }
            case 125:
                var2 = 'RU';
                var1 = var2 === var3;
            case 133:
                var0 = var1;
            case 136:
                return var0;
        }
    };
    var2.useBlockedPaymentsConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3074, 6828, 2]);