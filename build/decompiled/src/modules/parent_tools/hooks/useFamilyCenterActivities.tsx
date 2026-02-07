// modules/parent_tools/hooks/useFamilyCenterActivities.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot2;
            var1 = var2.getTotalForDisplayType;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.TeenActionDisplayType;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/hooks/useFamilyCenterActivities.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStoresArray;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot2;
            var1 = var2.getActionsForDisplayType;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useActionsForDisplayType = var4;
    var2.useActionTotalsForDisplayType = var3;
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure1_slot3;
            var2 = var1.bind(var2)(var0);
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot2;
                var1 = var2.getTotalForDisplayType;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = 0;
                var0 = var1 > var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useHasActionForAnyDisplayType = var3;
    var1 = function arg0() {
        _fun82893: for (var _fun82893_ip = 0;;) switch (_fun82893_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot4;
                var3 = undefined;
                var1 = var1.bind(var3)(var5);
                var4 = null;
                var6 = var4 != var1;
                var2 = 0;
                if (!var6) {
                    _fun82893_ip = 31;
                    continue _fun82893
                }
            case 28:
                var2 = var1;
            case 31:
                var1 = _closure1_slot3;
                var1 = var1.TOTAL_VOICE_MINUTES;
                if (!(var5 !== var1)) {
                    _fun82893_ip = 141;
                    continue _fun82893
                }
            case 45:
                var1 = _closure1_slot3;
                var1 = var1.PURCHASES;
                if (!(var5 !== var1)) {
                    _fun82893_ip = 61;
                    continue _fun82893
                }
            case 59:
                return var2;
            case 61:
                var5 = _closure1_slot2;
                var1 = var5.getTotalSpendAmount;
                var7 = var1.bind(var5)();
                var5 = _closure1_slot2;
                var1 = var5.getTotalSpendCurrency;
                var6 = var1.bind(var5)();
                var1 = var2;
                if (!(var4 != var7)) {
                    _fun82893_ip = 139;
                    continue _fun82893
                }
            case 100:
                var1 = var2;
                if (!(var4 != var6)) {
                    _fun82893_ip = 139;
                    continue _fun82893
                }
            case 107:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 4;
                var4 = var8[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.shortenAndFormatPrice;
                var1 = var4.bind(var5)(var7, var6);
            case 139:
                return var1;
            case 141:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 3;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.formatTotalTime;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.useFormattedTotalForDisplayType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4593, 4594, 632, 4658, 4606, 2]);