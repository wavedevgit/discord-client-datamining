// modules/search/hooks/useEligibleFilterTokens.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var6 = var5.bind(var2)(var3);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var0 = _closure1_slot3;
            var0 = var0.hidePersonalInformation;
            return var0;
        };
        var5 = var5.bind(var6)(var3, var2);
        var _closure2_slot1 = var5;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun105170: for (var _fun105170_ip = 0;;) switch (_fun105170_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var2 = var4.isChannelFilterSupported;
                    var0 = _closure2_slot0;
                    var2 = var2.bind(var4)(var0);
                    var0 = new Array(0);
                    var3 = _closure2_slot1;
                    if (var3) {
                        _fun105170_ip = 94;
                        continue _fun105170
                    }
                case 54:
                    var4 = var0.push;
                    var3 = _closure1_slot4;
                    var3 = var3.FILTER_FROM;
                    var3 = var4.bind(var0)(var3);
                    var4 = var0.push;
                    var3 = _closure1_slot4;
                    var3 = var3.FILTER_MENTIONS;
                    var3 = var4.bind(var0)(var3);
                case 94:
                    var4 = var0.push;
                    var3 = _closure1_slot4;
                    var3 = var3.FILTER_HAS;
                    var3 = var4.bind(var0)(var3);
                    if (!var2) {
                        _fun105170_ip = 137;
                        continue _fun105170
                    }
                case 117:
                    var3 = var0.push;
                    var2 = _closure1_slot4;
                    var2 = var2.FILTER_IN;
                    var2 = var3.bind(var0)(var2);
                case 137:
                    var3 = var0.push;
                    var2 = _closure1_slot4;
                    var2 = var2.FILTER_ON;
                    var2 = var3.bind(var0)(var2);
                    var3 = var0.push;
                    var2 = _closure1_slot4;
                    var2 = var2.FILTER_BEFORE;
                    var2 = var3.bind(var0)(var2);
                    var3 = var0.push;
                    var2 = _closure1_slot4;
                    var2 = var2.FILTER_AFTER;
                    var2 = var3.bind(var0)(var2);
                    var2 = var0.push;
                    var1 = _closure1_slot4;
                    var1 = var1.FILTER_AUTHOR_TYPE;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var3;
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
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg2;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SearchTokenTypes;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/hooks/useEligibleFilterTokens.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useEligibleFilterTokens = var3;
    var1 = function arg0() {
        var4 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var4 = var4.bind(var3)(var2);
        var _closure2_slot0 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = global;
            var2 = var0.Set;
            var3 = _closure2_slot0;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useEligibleFilterTokensSet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3237, 660, 566, 8980, 2]);