// modules/premium/experiments/OutboundPromoDesktopUpsellExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var9 = true;
    var1.value = var9;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var7 = var1.CommonTriggerPoints;
    var1 = 1;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2024-06_outbound_promo_desktop_upsell',
        'label': 'Upsell Outbound Promos'
    };
    var7 = var7.CONNECTION_OPEN;
    var1.commonTriggerPoint = var7;
    var7 = {};
    var8 = false;
    var7.enabled = var8;
    var1.defaultConfig = var7;
    var8 = {
        'id': 1,
        'label': 'Enable upsells for outbound promos w/ Nagbar variant 1 - gift inventory cta'
    };
    var7 = {};
    var7.enabled = var9;
    var8.config = var7;
    var7 = new Array(1);
    var7[0] = var8;
    var1.treatments = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/experiments/OutboundPromoDesktopUpsellExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.OutboundPromoDesktopUpsellExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3117, 2]);