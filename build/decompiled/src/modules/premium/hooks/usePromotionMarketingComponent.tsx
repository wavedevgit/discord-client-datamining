// modules/premium/hooks/usePromotionMarketingComponent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/hooks/usePromotionMarketingComponent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot2;
        var3 = var5.useEffect;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.maybeFetchActivePromotions;
            var1 = var1.bind(var2)();
            return var0;
        };
        var1 = new Array(0);
        var1 = var3.bind(var5)(var2, var1);
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot4;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot3;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun82366: for (var _fun82366_ip = 0;;) switch (_fun82366_ip) {
                case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getMarketingComponentByType;
                    var0 = _closure2_slot0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun82366_ip = 192;
                        continue _fun82366
                    }
                case 34:
                    var7 = var1.promotionId;
                    var6 = _closure1_slot4;
                    var5 = var6.getPromotionByTypeAndId;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 5;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.PromotionTypes;
                    var2 = var2.MARKETING_MOMENT;
                    var2 = var5.bind(var6)(var2, var7);
                    var5 = var0 == var2;
                    if (var5) {
                        _fun82366_ip = 105;
                        continue _fun82366
                    }
                case 99:
                    var4 = var2.trialId;
                case 105:
                    if (!(var0 != var4)) {
                        _fun82366_ip = 188;
                        continue _fun82366
                    }
                case 109:
                    var4 = _closure1_slot3;
                    var3 = var4.getUserTrialOffer;
                    var2 = var2.trialId;
                    var3 = var3.bind(var4)(var2);
                    if (!(var0 != var3)) {
                        _fun82366_ip = 190;
                        continue _fun82366
                    }
                case 134:
                    var2 = var3.expires_at;
                    if (!(var0 != var2)) {
                        _fun82366_ip = 188;
                        continue _fun82366
                    }
                case 144:
                    var2 = global;
                    var5 = var2.Date;
                    var4 = var5.parse;
                    var3 = var3.expires_at;
                    var3 = var4.bind(var5)(var3);
                    var4 = var2.Date;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    if (!(!(var3 < var2))) {
                        _fun82366_ip = 190;
                        continue _fun82366
                    }
                case 188:
                    return var1;
                case 190:
                    return var0;
                case 192:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.usePromotionMarketingComponent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6606, 7036, 7056, 566, 6823, 2]);