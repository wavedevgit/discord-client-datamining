// modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var8 = var1.searchContext;
        var _closure2_slot0 = var8;
        var2 = var1.tab;
        var _closure2_slot1 = var2;
        var10 = var1.placeholderHeight;
        var9 = var1.numColumns;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 3;
        var2 = var5[var2];
        var3 = undefined;
        var7 = var4.bind(var3)(var2);
        var6 = var7.useFullscreenPlaceholderCount;
        var2 = {};
        var2.placeholderHeight = var10;
        var2.numColumns = var9;
        var2 = var6.bind(var7)(var2);
        var _closure2_slot2 = var2;
        var7 = _closure1_slot3;
        var6 = var7.useState;
        var2 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.getSearchResultsQuery;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = var6.bind(var7)(var8, var2);
        var _closure2_slot3 = var2;
        var2 = 4;
        var2 = var5[var2];
        var3 = var4.bind(var3)(var2);
        var2 = var3.useStateFromStoresObject;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun105864: for (var _fun105864_ip = 0;;) switch (_fun105864_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.getSearchTabFetchId;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot3;
                    var4 = var4.bind(var5)(var3, var2, var1);
                    var3 = _closure1_slot2;
                    var1 = var3.getIsInitialFetchComplete;
                    var1 = var1.bind(var3)(var4);
                    var2 = var3.getIsFetching;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var1;
                    var3 = !var1;
                    if (var1) {
                        _fun105864_ip = 91;
                        continue _fun105864
                    }
                case 88:
                    var3 = var2;
                case 91:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.max;
                    var2 = _closure2_slot2;
                    var6 = _closure1_slot4;
                    var0 = _closure2_slot1;
                    var0 = var6[var0];
                    var2 = var4.bind(var5)(var2, var0);
                    var0 = {};
                    var0.isFirstPageLoading = var1;
                    var0.isNextPageLoading = var3;
                    if (var1) {
                        _fun105864_ip = 146;
                        continue _fun105864
                    }
                case 141:
                    var1 = 0;
                    if (!var3) {
                        _fun105864_ip = 149;
                        continue _fun105864
                    }
                case 146:
                    var1 = var2;
                case 149:
                    var0.placeholderCount = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useSearchMessagesLoadingState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4190, 8925, 8861, 13685, 566, 8927, 2]);