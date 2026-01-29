// modules/premium/gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useShouldShowGiftingPromotionDeco, environment: var1
        _fun74721: for (var _fun74721_ip = 0;;) switch (_fun74721_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.useNativeGiftContext;
                var0 = var0.bind(var1)();
                var2 = var0.claimableRewards;
                var5 = var0.premiumType;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun74721_ip = 72;
                    continue _fun74721
                }
            case 56:
                var1 = _closure1_slot2;
                var1 = var1.TIER_2;
                var1 = var5 === var1;
                _fun74721_ip = 86;
                continue _fun74721;
            case 72:
                var3 = _closure1_slot2;
                var3 = var3.TIER_2;
                var1 = var4 === var3;
            case 86:
                var0 = var0 != var2;
                if (!var0) {
                    _fun74721_ip = 104;
                    continue _fun74721
                }
            case 93:
                var3 = var2.length;
                var2 = 0;
                var0 = var3 > var2;
            case 104:
                if (!var0) {
                    _fun74721_ip = 110;
                    continue _fun74721
                }
            case 107:
                var0 = var1;
            case 110:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1615, 9361, 2]);