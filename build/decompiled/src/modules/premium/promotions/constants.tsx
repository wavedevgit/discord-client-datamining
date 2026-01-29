// modules/premium/promotions/constants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var6 = {};
    var7 = 0;
    var6.THIRD_PARTY = var7;
    var1 = 'THIRD_PARTY';
    var6[var7] = var1;
    var3 = 1;
    var6.BOGO = var3;
    var1 = 'BOGO';
    var6[var3] = var1;
    var3 = 3;
    var6.THIRD_PARTY_INBOUND = var3;
    var1 = 'THIRD_PARTY_INBOUND';
    var6[var3] = var1;
    var3 = 4;
    var6.THIRD_PARTY_OUTBOUND = var3;
    var1 = 'THIRD_PARTY_OUTBOUND';
    var6[var3] = var1;
    var3 = 5;
    var6.MARKETING_MOMENT = var3;
    var1 = 'MARKETING_MOMENT';
    var6[var3] = var1;
    var3 = 6;
    var6.GIFT_PROMOTION = var3;
    var1 = 'GIFT_PROMOTION';
    var6[var3] = var1;
    var3 = 7;
    var6.THIRD_PARTY_OUTBOUND_RECURRING = var3;
    var1 = 'THIRD_PARTY_OUTBOUND_RECURRING';
    var6[var3] = var1;
    var5 = {};
    var4 = 'steelseries';
    var1 = {
        'id': 'steelseries',
        'label': 'SteelSeries'
    };
    var5.steelseries = var1;
    var3 = 'kontrolfreek';
    var1 = {
        'id': 'kontrolfreek',
        'label': 'KontrolFreek'
    };
    var5.kontrolfreek = var1;
    var8 = var0.Set;
    var1 = var0.Object;
    var0 = var1.keys;
    var12 = var0.bind(var1)(var5);
    var1 = var8.prototype;
    var1 = Object.create(var1, {
        constructor: {
            value: var8
        }
    });
    var13 = var1;
    var0 = new var13[var8](var12, var11);
    var1 = var0 instanceof Object ? var0 : var1;
    var0 = dependencyMap;
    var8 = var0[var7];
    var7 = require;
    var0 = undefined;
    var9 = var7.bind(var0)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/premium/promotions/constants.tsx';
    var7 = var8.bind(var9)(var7);
    var2.PromotionTypes = var6;
    var2.RECURRING_PARTNERS = var5;
    var2.STEELSERIES_PARTNER_ID = var4;
    var2.KONTROLFREEK_PARTNER_ID = var3;
    var2.RECURRING_PARTNER_IDS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);