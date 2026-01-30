// modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchResultContentEntityTypes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: BaseMessagesScreen, environment: var1
        _fun106510: for (var _fun106510_ip = 0;;) switch (_fun106510_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.data;
                var _closure2_slot0 = var12;
                var5 = var1.searchContext;
                var _closure2_slot1 = var5;
                var17 = var1.tab;
                var _closure2_slot2 = var17;
                var21 = var1.isFocused;
                var _closure2_slot3 = var21;
                var2 = var1.isFirstPageLoading;
                var0 = var1.isNextPageLoading;
                var11 = var1.estimatedItemSize;
                var13 = var1.contentContainerStyle;
                var8 = var1.ItemSeparatorComponent;
                var7 = var1.numColumns;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                if (var2) {
                    _fun106510_ip = 116;
                    continue _fun106510
                }
            case 113:
                var2 = var0;
            case 116:
                _closure2_slot4 = var2;
                var6 = _closure1_slot5;
                var3 = var6.useState;
                var0 = function(arg0) { // Environment: var9
                    var1 = arg0;
                    var0 = var1.getSearchResultsQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var3.bind(var6)(var5, var0);
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = 6;
                var0 = var16[var0];
                var3 = var15.bind(var4)(var0);
                var0 = var3.getSearchTabFetchId;
                var0 = var0.bind(var3)(var5, var17, var6);
                _closure2_slot5 = var0;
                var6 = 7;
                var0 = var16[var6];
                var18 = var15.bind(var4)(var0);
                var14 = var18.useStateFromStores;
                var0 = _closure1_slot4;
                var10 = new Array(1);
                var10[0] = var0;
                var3 = function() { // Environment: var9
                    var2 = _closure1_slot4;
                    var1 = var2.getIsIndexing;
                    var0 = _closure2_slot5;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var14.bind(var18)(var10, var3);
                var6 = var16[var6];
                var14 = var15.bind(var4)(var6);
                var10 = var14.useStateFromStoresObject;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var9
                    var0 = {};
                    var3 = _closure1_slot4;
                    var4 = var3.getIsHistoricalIndexing;
                    var2 = _closure2_slot5;
                    var2 = var4.bind(var3)(var2);
                    var0.isHistoricalIndexing = var2;
                    var2 = var3.getDocumentsIndexed;
                    var1 = _closure2_slot5;
                    var1 = var2.bind(var3)(var1);
                    var0.documentsIndexed = var1;
                    return var0;
                };
                var0 = var10.bind(var14)(var6, var0);
                var18 = var0.isHistoricalIndexing;
                _closure2_slot6 = var18;
                var19 = var0.documentsIndexed;
                _closure2_slot7 = var19;
                var0 = 8;
                var0 = var16[var0];
                var10 = var15.bind(var4)(var0);
                var6 = var10.useMessageSearchErrorScreen;
                var0 = {};
                var0.searchContext = var5;
                var0.tab = var17;
                var10 = var6.bind(var10)(var0);
                var0 = var10.canShowErrorScreen;
                var6 = var10.errorScreenText;
                var22 = var10.canShowErrorToast;
                _closure2_slot8 = var22;
                var14 = var10.showErrorToast;
                _closure2_slot9 = var14;
                var10 = 9;
                var10 = var16[var10];
                var15 = var15.bind(var4)(var10);
                var10 = var15.useSearchFetchPendingManager;
                var15 = var10.bind(var15)(var5);
                _closure2_slot10 = var15;
                var16 = _closure1_slot3;
                var23 = var16.useCallback;
                var10 = var12.length;
                var20 = new Array(6);
                var20[0] = var10;
                var20[1] = var2;
                var20[2] = var21;
                var20[3] = var15;
                var20[4] = var17;
                var20[5] = var5;
                var10 = function() { // Environment: var9
                    _fun106514: for (var _fun106514_ip = 0;;) switch (_fun106514_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 !== var2)) {
                                _fun106514_ip = 117;
                                continue _fun106514
                            }
                        case 18:
                            var1 = _closure2_slot4;
                            if (var1) {
                                _fun106514_ip = 99;
                                continue _fun106514
                            }
                        case 25:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun106514_ip = 52;
                                continue _fun106514
                            }
                        case 32:
                            var3 = _closure2_slot10;
                            var2 = var3.add;
                            var1 = _closure2_slot2;
                            var1 = var2.bind(var3)(var1);
                            _fun106514_ip = 117;
                            continue _fun106514;
                        case 52:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.fetchNextMessages;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var4)(var2, var1);
                            _fun106514_ip = 117;
                            continue _fun106514;
                        case 99:
                            var2 = _closure2_slot10;
                            var1 = var2.add;
                            var0 = _closure2_slot2;
                            var0 = var1.bind(var2)(var0);
                        case 117:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var23.bind(var16)(var10, var20);
                var23 = var16.useEffect;
                var20 = new Array(5);
                var20[0] = var21;
                var20[1] = var2;
                var20[2] = var5;
                var20[3] = var15;
                var20[4] = var17;
                var15 = function() { // Environment: var9
                    _fun106515: for (var _fun106515_ip = 0;;) switch (_fun106515_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun106515_ip = 27;
                                continue _fun106515
                            }
                        case 10:
                            var2 = _closure2_slot3;
                            if (!var2) {
                                _fun106515_ip = 24;
                                continue _fun106515
                            }
                        case 17:
                            var3 = _closure2_slot4;
                            var2 = !var3;
                        case 24:
                            var1 = var2;
                        case 27:
                            if (!var1) {
                                _fun106515_ip = 54;
                                continue _fun106515
                            }
                        case 30:
                            var3 = _closure2_slot10;
                            var2 = var3.flush;
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1, var0);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var15 = var23.bind(var16)(var15, var20);
                var20 = var16.useEffect;
                var15 = new Array(5);
                var15[0] = var22;
                var22 = var12.length;
                var15[1] = var22;
                var15[2] = var21;
                var15[3] = var2;
                var15[4] = var14;
                var14 = function() { // Environment: var9
                    _fun106516: for (var _fun106516_ip = 0;;) switch (_fun106516_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var1 = !var1;
                            if (!var1) {
                                _fun106516_ip = 17;
                                continue _fun106516
                            }
                        case 13:
                            var1 = _closure2_slot8;
                        case 17:
                            if (!var1) {
                                _fun106516_ip = 24;
                                continue _fun106516
                            }
                        case 20:
                            var1 = _closure2_slot3;
                        case 24:
                            if (!var1) {
                                _fun106516_ip = 42;
                                continue _fun106516
                            }
                        case 27:
                            var2 = _closure2_slot0;
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var3 > var2;
                        case 42:
                            if (!var1) {
                                _fun106516_ip = 55;
                                continue _fun106516
                            }
                        case 45:
                            var1 = _closure2_slot9;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var20.bind(var16)(var14, var15);
                var15 = var16.useMemo;
                var14 = new Array(4);
                var14[0] = var19;
                var14[1] = var18;
                var14[2] = var5;
                var14[3] = var17;
                var9 = function() { // Environment: var9
                    _fun106517: for (var _fun106517_ip = 0;;) switch (_fun106517_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var2 = null;
                            var0 = null;
                            if (!var1) {
                                _fun106517_ip = 106;
                                continue _fun106517
                            }
                        case 14:
                            var1 = _closure2_slot7;
                            var1 = var2 != var1;
                            var0 = null;
                            if (!var1) {
                                _fun106517_ip = 106;
                                continue _fun106517
                            }
                        case 27:
                            var3 = _closure2_slot7;
                            var1 = 0;
                            var1 = var3 > var1;
                            var0 = null;
                            if (!var1) {
                                _fun106517_ip = 106;
                                continue _fun106517
                            }
                        case 42:
                            var4 = _closure1_slot7;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var6 = _closure2_slot1;
                            var1.searchContext = var6;
                            var6 = _closure2_slot7;
                            var1.documentsIndexed = var6;
                            var5 = _closure2_slot2;
                            var1.tab = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 106:
                            return var0;
                    }
                };
                var9 = var15.bind(var16)(var9, var14);
                if (var3) {
                    _fun106510_ip = 685;
                    continue _fun106510
                }
            case 562:
                if (var2) {
                    _fun106510_ip = 617;
                    continue _fun106510
                }
            case 565:
                if (!var0) {
                    _fun106510_ip = 617;
                    continue _fun106510
                }
            case 568:
                var2 = var12.length;
                var0 = 0;
                if (!(var0 === var2)) {
                    _fun106510_ip = 617;
                    continue _fun106510
                }
            case 579:
                var3 = _closure1_slot7;
                var2 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 13;
                var0 = var14[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var0.text = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun106510_ip = 683;
                continue _fun106510;
            case 617:
                var6 = _closure1_slot7;
                var3 = _closure1_slot1;
                var14 = _closure1_slot2;
                var2 = 14;
                var2 = var14[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.contentContainerStyle = var13;
                var2.data = var12;
                var2.estimatedItemSize = var11;
                var2.onEndReached = var10;
                var2.ListHeaderComponent = var9;
                var2.ItemSeparatorComponent = var8;
                var2.numColumns = var7;
                var0 = var6.bind(var4)(var3, var2);
            case 683:
                _fun106510_ip = 722;
                continue _fun106510;
            case 685:
                var3 = _closure1_slot7;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 12;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.searchContext = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 722:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function(arg0) { // Original name: trackMessageItemPress, environment: var1
        _fun106518: for (var _fun106518_ip = 0;;) switch (_fun106518_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.searchContext;
                var8 = var0.channelId;
                var6 = var0.messageId;
                var5 = var0.index;
                var1 = _closure1_slot4;
                var0 = var1.getMessage;
                var7 = var0.bind(var1)(var6);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.trackSearchResultClicked;
                var1 = {};
                var1.searchContext = var9;
                var1.channelId = var8;
                var1.messageId = var6;
                var8 = null;
                var9 = var8 == var7;
                var6 = undefined;
                if (var9) {
                    _fun106518_ip = 116;
                    continue _fun106518
                }
            case 96:
                var7 = var7.author;
                var8 = var8 == var7;
                var6 = undefined;
                if (var8) {
                    _fun106518_ip = 116;
                    continue _fun106518
                }
            case 111:
                var6 = var7.id;
            case 116:
                var1.userId = var6;
                var1.index = var5;
                var4 = _closure1_slot6;
                var4 = var4.MESSAGE;
                var1.entityType = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.trackMessageItemPress = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4190, 8925, 8860, 33, 8924, 8927, 566, 13805, 13823, 11693, 13824, 13825, 13744, 13758, 2]);