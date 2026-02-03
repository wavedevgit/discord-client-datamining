// modules/search/native/hooks/useSearchScreenError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SEARCH_MESSAGE_TAB_SENTINEL;
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/hooks/useSearchScreenError.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun105703: for (var _fun105703_ip = 0;;) switch (_fun105703_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.searchContext;
                var7 = var1.tab;
                var10 = undefined;
                var _closure2_slot3 = var10;
                var4 = _closure1_slot6;
                var3 = var4.useState;
                var2 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.getSearchResultsQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var3.bind(var4)(var8, var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 5;
                var2 = var4[var2];
                var5 = var3.bind(var10)(var2);
                var2 = var5.getSearchTabFetchId;
                var2 = var2.bind(var5)(var8, var7, var6);
                var _closure2_slot0 = var2;
                var2 = 6;
                var2 = var4[var2];
                var5 = var3.bind(var10)(var2);
                var4 = var5.useStateFromStoresObject;
                var2 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot5;
                    var1 = var3.getError;
                    var2 = _closure2_slot0;
                    var1 = var1.bind(var3)(var2);
                    var0.error = var1;
                    var1 = var3.getIsFetching;
                    var1 = var1.bind(var3)(var2);
                    var0.isFetching = var1;
                    return var0;
                };
                var2 = var4.bind(var5)(var3, var2);
                var4 = var2.error;
                var2 = var2.isFetching;
                var _closure2_slot1 = var2;
                var7 = _closure1_slot4;
                var5 = var7.useState;
                var3 = false;
                var6 = var5.bind(var7)(var3);
                var5 = _closure1_slot3;
                var3 = 2;
                var6 = var5.bind(var10)(var6, var3);
                var3 = 0;
                var3 = var6[var3];
                var5 = 1;
                var5 = var6[var5];
                var _closure2_slot2 = var5;
                var6 = var7.useEffect;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    _fun105706: for (var _fun105706_ip = 0;;) switch (_fun105706_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun105706_ip = 23;
                                continue _fun105706
                            }
                        case 10:
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var7)(var2, var5);
                var2 = null;
                var6 = var2 == var4;
                var5 = undefined;
                if (var6) {
                    _fun105703_ip = 236;
                    continue _fun105703
                }
            case 226:
                var6 = var4.getAnyErrorMessage;
                var5 = var6.bind(var4)();
            case 236:
                if (!(var2 == var5)) {
                    _fun105703_ip = 295;
                    continue _fun105703
                }
            case 240:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 7;
                var7 = var11[var6];
                var7 = var9.bind(var10)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var11[var6];
                var6 = var9.bind(var10)(var6);
                var6 = var6.t;
                var6 = var6.uvDZBZ;
                var5 = var7.bind(var8)(var6);
            case 295:
                _closure2_slot3 = var5;
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 8;
                    var1 = var7[var1];
                    var3 = var6.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = 'SEARCH_ERROR_TOAST';
                    var1.key = var5;
                    var5 = 9;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var1.icon = var5;
                    var4 = _closure2_slot3;
                    var1.content = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var6.bind(var7)(var0, var1);
                var0 = {};
                var6 = var2 != var4;
                var0.canShowErrorScreen = var6;
                var0.errorScreenText = var5;
                var2 = var2 != var4;
                if (!var2) {
                    _fun105703_ip = 355;
                    continue _fun105703
                }
            case 352:
                var2 = !var3;
            case 355:
                var0.canShowErrorToast = var2;
                var0.showErrorToast = var1;
                return var0;
        }
    };
    var2.useMessageSearchErrorScreen = var3;
    var1 = function arg0() {
        _fun105708: for (var _fun105708_ip = 0;;) switch (_fun105708_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.searchContext;
                var2 = _closure1_slot6;
                var1 = var2.useState;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.getSearchResultsQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var1.bind(var2)(var5, var0);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var7 = undefined;
                var2 = var1.bind(var7)(var0);
                var1 = var2.getSearchTabFetchId;
                var0 = _closure1_slot7;
                var4 = var1.bind(var2)(var5, var0, var4);
                var1 = _closure1_slot5;
                var0 = var1.getIsInitialFetchComplete;
                var1 = var0.bind(var1)(var4);
                var0 = null;
                if (var1) {
                    _fun105708_ip = 97;
                    continue _fun105708
                }
            case 95:
                return var0;
            case 97:
                var2 = _closure1_slot5;
                var1 = var2.getTotalCount;
                var1 = var1.bind(var2)(var4);
                if (!(var0 == var1)) {
                    _fun105708_ip = 214;
                    continue _fun105708
                }
            case 116:
                var2 = _closure1_slot5;
                var1 = var2.getError;
                var4 = var1.bind(var2)(var4);
                var2 = var0 == var4;
                var1 = null;
                if (var2) {
                    _fun105708_ip = 212;
                    continue _fun105708
                }
            case 140:
                var2 = var4.getAnyErrorMessage;
                var2 = var2.bind(var4)();
                if (!(var0 == var2)) {
                    _fun105708_ip = 209;
                    continue _fun105708
                }
            case 154:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 7;
                var4 = var8[var3];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.uvDZBZ;
                var2 = var4.bind(var5)(var3);
            case 209:
                var1 = var2;
            case 212:
                return var1;
            case 214:
                return var0;
        }
    };
    var2.useMessageTabCountsErrorText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4226, 8978, 8914, 8980, 566, 1234, 3148, 7512, 2]);