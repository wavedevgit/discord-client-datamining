// modules/quests/lib/FractionalPremiumUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.rewardsConfig;
        var2 = var0.rewards;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.type;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.QuestRewardTypes;
            var0 = var0.FRACTIONAL_PREMIUM;
            var0 = var1 === var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot3 = var3;
    var0 = 5;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/lib/FractionalPremiumUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Environment: var1
        _fun47215: for (var _fun47215_ip = 0;;) switch (_fun47215_ip) {
            case 0:
                var6 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 0;
                var0 = var0[var2];
                var7 = undefined;
                var4 = var3.bind(var7)(var0);
                var3 = var4.getFractionalPremiumUnitsHoursFromSkuIds;
                var5 = var6.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.skuId;
                    return var0;
                };
                var0 = var5.bind(var6)(var0);
                var6 = var3.bind(var4)(var0);
                var5 = 24;
                var0 = var6 % var5;
                if (!(var0 !== var2)) {
                    _fun47215_ip = 133;
                    continue _fun47215
                }
            case 66:
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 1;
                var3 = var8[var0];
                var3 = var2.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var0 = var8[var0];
                var0 = var2.bind(var7)(var0);
                var0 = var0.t;
                var2 = var0.J9Lu4h;
                var0 = {};
                var0.hours = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun47215_ip = 200;
                continue _fun47215;
            case 133:
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 1;
                var3 = var8[var1];
                var3 = var2.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var8[var1];
                var1 = var2.bind(var7)(var1);
                var1 = var1.t;
                var2 = var1.Cz1G97;
                var1 = {};
                var5 = var6 / var5;
                var1.days = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 200:
                return var0;
        }
    };
    var2.getDurationStringOfFractionalPremium = var4;
    var2.getFractionalPremiumQuestRewards = var3;
    var1 = function(arg0) { // Environment: var1
        var2 = _closure1_slot3;
        var8 = undefined;
        var0 = arg0;
        var3 = var2.bind(var8)(var0);
        var2 = var3.flatMap;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = global;
            var3 = var1.Array;
            var2 = var0.quantity;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.fill;
            var0 = var0.skuId;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var2.bind(var3)(var0);
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var6 = 0;
        var0 = var9[var6];
        var2 = var5.bind(var8)(var0);
        var0 = var2.getFractionalPremiumUnitsHoursFromSkuIds;
        var10 = var0.bind(var2)(var3);
        var7 = {};
        var0 = 1;
        var2 = var9[var0];
        var2 = var5.bind(var8)(var2);
        var2 = var2.t;
        var2 = var2.fYmirx;
        var7.days = var2;
        var2 = var9[var0];
        var2 = var5.bind(var8)(var2);
        var2 = var2.t;
        var2 = var2["C3RO+g"];
        var7.hours = var2;
        var2 = var9[var0];
        var2 = var5.bind(var8)(var2);
        var2 = var2.t;
        var2 = var2.r77oHc;
        var7.minutes = var2;
        var4 = 3;
        var2 = var9[var4];
        var3 = var5.bind(var8)(var2);
        var2 = var3.diffAsUnits;
        var11 = _closure1_slot1;
        var1 = 4;
        var1 = var9[var1];
        var1 = var11.bind(var8)(var1);
        var1 = var1.Millis;
        var1 = var1.HOUR;
        var1 = var10 * var1;
        var6 = var2.bind(var3)(var6, var1);
        var1 = var9[var0];
        var1 = var5.bind(var8)(var1);
        var3 = var1.intl;
        var2 = var3.formatToPlainString;
        var0 = var9[var0];
        var0 = var5.bind(var8)(var0);
        var0 = var0.t;
        var1 = var0["4SqnVD"];
        var0 = {};
        var4 = var9[var4];
        var5 = var5.bind(var8)(var4);
        var4 = var5.unitsAsStrings;
        var4 = var4.bind(var5)(var6, var7);
        var0.time = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getFractionalPremiumQuestRewardName = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3100, 1234, 5232, 3123, 667, 2]);