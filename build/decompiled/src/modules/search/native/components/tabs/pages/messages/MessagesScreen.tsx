// modules/search/native/components/tabs/pages/messages/MessagesScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.SEARCH_FILTERS_BY_TAB;
    var _closure1_slot5 = var7;
    var7 = var3.SearchFilter;
    var _closure1_slot6 = var7;
    var7 = var3.SEARCH_PINNED_MESSAGES_LINE_CLAMP;
    var _closure1_slot7 = var7;
    var7 = var3.SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
    var _closure1_slot8 = var7;
    var7 = var3.MESSAGE_PLACEHOLDER_ITEM_SIZE;
    var _closure1_slot9 = var7;
    var7 = var3.SearchListItemTypes;
    var _closure1_slot10 = var7;
    var3 = var3.MESSAGE_ESTIMATED_ITEM_SIZE;
    var _closure1_slot11 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun106551: for (var _fun106551_ip = 0;;) switch (_fun106551_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.searchContext;
                var _closure2_slot0 = var12;
                var11 = var1.tab;
                var10 = var1.isFocused;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var2 = var4.bind(var3)(var1);
                var1 = var2.useSearchMessages;
                var15 = var1.bind(var2)(var12, var11);
                var _closure2_slot1 = var15;
                var6 = _closure1_slot4;
                var2 = var6.useState;
                var1 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.getSearchResultsQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var2.bind(var6)(var12, var1);
                var _closure2_slot2 = var1;
                var2 = 5;
                var2 = var5[var2];
                var5 = var4.bind(var3)(var2);
                var4 = var5.useOnPressMessageItem;
                var2 = {};
                var2.searchContext = var12;
                var2 = var4.bind(var5)(var2);
                var _closure2_slot3 = var2;
                var5 = _closure1_slot3;
                var6 = var5.useCallback;
                var4 = new Array(2);
                var4[0] = var2;
                var4[1] = var12;
                var2 = function(arg0, arg1) { // Environment: var0
                    var0 = arg0;
                    var3 = var0.channelId;
                    var2 = var0.messageId;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var1);
                    var5 = var6.trackMessageItemPress;
                    var4 = {};
                    var7 = _closure2_slot0;
                    var4.searchContext = var7;
                    var4.channelId = var3;
                    var4.messageId = var2;
                    var7 = arg1;
                    var4.index = var7;
                    var4 = var5.bind(var6)(var4);
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var0)(var3, var2);
                    return var0;
                };
                var17 = var6.bind(var5)(var2, var4);
                var _closure2_slot4 = var17;
                var4 = var5.useRef;
                var2 = {};
                var2 = var4.bind(var5)(var2);
                var _closure2_slot5 = var2;
                var2 = _closure1_slot5;
                var4 = var2[var11];
                var2 = _closure1_slot6;
                var2 = var2.Pins;
                if (!(var4 !== var2)) {
                    _fun106551_ip = 222;
                    continue _fun106551
                }
            case 216:
                var16 = _closure1_slot8;
                _fun106551_ip = 226;
                continue _fun106551;
            case 222:
                var16 = _closure1_slot7;
            case 226:
                _closure2_slot6 = var16;
                var6 = _closure1_slot3;
                var4 = var6.useMemo;
                var2 = new Array(2);
                var2[0] = var16;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var5 = _closure2_slot2;
                    var4 = _closure2_slot6;
                    var1 = var3.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var6 = var1;
                    var0 = new var6[var3](var5, var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var14 = var4.bind(var6)(var1, var2);
                _closure2_slot7 = var14;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 8;
                var1 = var8[var1];
                var4 = var7.bind(var3)(var1);
                var2 = var4.useSearchMessagesLoadingState;
                var1 = {};
                var1.searchContext = var12;
                var1.tab = var11;
                var5 = _closure1_slot9;
                var1.placeholderHeight = var5;
                var5 = 1;
                var1.numColumns = var5;
                var1 = var2.bind(var4)(var1);
                var13 = var1.placeholderCount;
                _closure2_slot8 = var13;
                var5 = var1.isFirstPageLoading;
                var4 = var1.isNextPageLoading;
                var2 = var6.useMemo;
                var1 = new Array(5);
                var1[0] = var17;
                var1[1] = var16;
                var1[2] = var15;
                var1[3] = var14;
                var1[4] = var13;
                var0 = function() { // Environment: var0
                    _fun106555: for (var _fun106555_ip = 0;;) switch (_fun106555_ip) {
                        case 0:
                            var0 = new Array(0);
                            var _closure3_slot0 = var0;
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun106555_ip = 44;
                                continue _fun106555
                            }
                        case 23:
                            var3 = _closure2_slot1;
                            var2 = var3.forEach;
                            var1 = function(arg0, arg1) { // Environment: var1
                                var0 = arg1;
                                var _closure4_slot0 = var0;
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var0 = {};
                                var3 = _closure1_slot10;
                                var3 = var3.MESSAGE;
                                var0.type = var3;
                                var3 = {};
                                var8 = _closure2_slot7;
                                var7 = var8.parse;
                                var6 = arg0;
                                var6 = var7.bind(var8)(var6);
                                var3.message = var6;
                                var5 = function arg0() {
                                    var3 = _closure2_slot4;
                                    var2 = _closure4_slot0;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var3.bind(var1)(var0, var2);
                                    return var0;
                                };
                                var3.onPress = var5;
                                var5 = _closure2_slot6;
                                var3.lineClamp = var5;
                                var4 = _closure2_slot5;
                                var3.messageSizeCacheRef = var4;
                                var0.props = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 44:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getAdjustedPlaceholderCount;
                            var1 = {};
                            var6 = 1;
                            var1.numColumns = var6;
                            var6 = var0.length;
                            var1.numResults = var6;
                            var4 = _closure2_slot8;
                            var1.placeholderCount = var4;
                            var4 = var2.bind(var3)(var1);
                            var3 = 0;
                            var6 = var3 < var4;
                            var2 = global;
                            var1 = 'message-placeholder-';
                            if (!var6) {
                                _fun106555_ip = 179;
                                continue _fun106555
                            }
                        case 126:
                            var7 = var0.push;
                            var6 = {};
                            var8 = _closure1_slot10;
                            var8 = var8.MESSAGE_PLACEHOLDER;
                            var6.type = var8;
                            var8 = var2.HermesInternal;
                            var8 = var8.concat;
                            var8 = var8.bind(var1)(var3);
                            var6.key = var8;
                            var6 = var7.bind(var0)(var6);
                            var3 = var3 + 1;
                            if (var3 < var4) {
                                _fun106555_ip = 126;
                                continue _fun106555
                            }
                        case 179:
                            return var0;
                    }
                };
                var13 = var2.bind(var6)(var0, var1);
                var0 = 10;
                var0 = var8[var0];
                var1 = var7.bind(var3)(var0);
                var0 = var1.useContentContainerStyles;
                var6 = var0.bind(var1)();
                var2 = _closure1_slot12;
                var1 = _closure1_slot1;
                var0 = 6;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.data = var13;
                var0.searchContext = var12;
                var0.tab = var11;
                var0.isFocused = var10;
                var9 = _closure1_slot11;
                var0.estimatedItemSize = var9;
                var6 = var6.messagesContentContainer;
                var0.contentContainerStyle = var6;
                var6 = 11;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.MessageVerticalSeparator;
                var0.ItemSeparatorComponent = var6;
                var0.isFirstPageLoading = var5;
                var0.isNextPageLoading = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/pages/messages/MessagesScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9049, 8985, 33, 13861, 13789, 13863, 13878, 13862, 13867, 13849, 13796, 2]);