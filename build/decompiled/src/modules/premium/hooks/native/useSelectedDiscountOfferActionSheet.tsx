// modules/premium/hooks/native/useSelectedDiscountOfferActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DismissibleContentGroupName;
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/hooks/native/useSelectedDiscountOfferActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun109808: for (var _fun109808_ip = 0;;) switch (_fun109808_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 2;
                var1 = var6[var4];
                var3 = undefined;
                var2 = var5.bind(var3)(var1);
                var1 = var2.usePremiumDiscountOffer;
                var1 = var1.bind(var2)();
                var2 = 3;
                var2 = var6[var2];
                var8 = var5.bind(var3)(var2);
                var7 = var8.useSelectedSnowflakeBoundDismissibleContent;
                var5 = null;
                var2 = var5 != var1;
                var6 = null;
                if (!var2) {
                    _fun109808_ip = 111;
                    continue _fun109808
                }
            case 64:
                var2 = var1.expires_at;
                var2 = var5 == var2;
                var6 = null;
                if (!var2) {
                    _fun109808_ip = 111;
                    continue _fun109808
                }
            case 79:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 4;
                var2 = var10[var2];
                var2 = var9.bind(var3)(var2);
                var2 = var2.DismissibleContent;
                var6 = var2.DISCOUNT_OFFER_ACTION_SHEET;
            case 111:
                var9 = var5 == var1;
                var2 = undefined;
                if (var9) {
                    _fun109808_ip = 125;
                    continue _fun109808
                }
            case 120:
                var2 = var1.id;
            case 125:
                var9 = var5 != var2;
                var5 = '';
                if (!var9) {
                    _fun109808_ip = 139;
                    continue _fun109808
                }
            case 136:
                var5 = var2;
            case 139:
                var2 = _closure1_slot3;
                var2 = var2.MAIN_VIEW_TOOLTIPS;
                var2 = var7.bind(var8)(var6, var5, var2);
                var0 = _closure1_slot2;
                var2 = var0.bind(var3)(var2, var4);
                var0 = {};
                var0.discountOffer = var1;
                var1 = 0;
                var1 = var2[var1];
                var0.discountOfferDismissibleContent = var1;
                var1 = 1;
                var1 = var2[var1];
                var0.markDismissed = var1;
                return var0;
        }
    };
    var2.useSelectedDiscountOfferActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1369, 6650, 5952, 1358, 2]);