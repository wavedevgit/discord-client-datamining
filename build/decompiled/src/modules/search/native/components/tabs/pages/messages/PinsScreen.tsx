// modules/search/native/components/tabs/pages/messages/PinsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: InitialPinsScreen, environment: var1
        var0 = arg0;
        var1 = var0.searchContext;
        var _closure2_slot0 = var1;
        var10 = var0.isFocused;
        var _closure2_slot1 = var10;
        var3 = _closure1_slot7;
        var2 = var3.useState;
        var0 = function(arg0) { // Environment: var7
            var1 = arg0;
            var0 = var1.isInitialSearchQuery;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        var _closure2_slot2 = var0;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 8;
        var2 = var6[var2];
        var3 = undefined;
        var9 = var5.bind(var3)(var2);
        var8 = var9.useFullscreenPlaceholderCount;
        var2 = {};
        var11 = _closure1_slot8;
        var2.placeholderHeight = var11;
        var11 = 1;
        var2.numColumns = var11;
        var11 = var8.bind(var9)(var2);
        var _closure2_slot3 = var11;
        var9 = _closure1_slot3;
        var8 = var9.useEffect;
        var2 = new Array(3);
        var2[0] = var10;
        var2[1] = var0;
        var0 = var1.channelId;
        var2[2] = var0;
        var0 = function() { // Environment: var7
            _fun106852: for (var _fun106852_ip = 0;;) switch (_fun106852_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    if (!var1) {
                        _fun106852_ip = 14;
                        continue _fun106852
                    }
                case 10:
                    var1 = _closure2_slot1;
                case 14:
                    if (!var1) {
                        _fun106852_ip = 62;
                        continue _fun106852
                    }
                case 17:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchPins;
                    var0 = _closure2_slot0;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                case 62:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var8.bind(var9)(var0, var2);
        var0 = 10;
        var0 = var6[var0];
        var9 = var5.bind(var3)(var0);
        var8 = var9.useStateFromStoresObject;
        var0 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var0;
        var0 = function() { // Environment: var7
            _fun106853: for (var _fun106853_ip = 0;;) switch (_fun106853_ip) {
                case 0:
                    var3 = _closure1_slot4;
                    var1 = var3.getPins;
                    var0 = _closure2_slot0;
                    var0 = var0.channelId;
                    var3 = var1.bind(var3)(var0);
                    var0 = {};
                    var1 = null;
                    var5 = var1 == var3;
                    var4 = undefined;
                    if (var5) {
                        _fun106853_ip = 48;
                        continue _fun106853
                    }
                case 43:
                    var4 = var3.items;
                case 48:
                    var0.items = var4;
                    var1 = var1 == var3;
                    if (var1) {
                        _fun106853_ip = 78;
                        continue _fun106853
                    }
                case 59:
                    var3 = var3.state;
                    var2 = _closure1_slot5;
                    var2 = var2.LOADING;
                    var1 = var3 === var2;
                case 78:
                    var0.showLoading = var1;
                    return var0;
            }
        };
        var2 = var8.bind(var9)(var2, var0);
        var0 = var2.items;
        var _closure2_slot4 = var0;
        var9 = var2.showLoading;
        var _closure2_slot5 = var9;
        var2 = 11;
        var2 = var6[var2];
        var10 = var5.bind(var3)(var2);
        var8 = var10.useOnPressMessageItem;
        var2 = {};
        var2.searchContext = var1;
        var12 = var8.bind(var10)(var2);
        var _closure2_slot6 = var12;
        var10 = _closure1_slot3;
        var8 = var10.useCallback;
        var2 = new Array(2);
        var2[0] = var12;
        var2[1] = var1;
        var1 = function(arg0, arg1) { // Environment: var7
            _fun106854: for (var _fun106854_ip = 0;;) switch (_fun106854_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.channelId;
                    var2 = var0.messageId;
                    var1 = _closure1_slot6;
                    var0 = var1.getMessage;
                    var9 = var0.bind(var1)(var2);
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var1);
                    var5 = var6.trackSearchResultClicked;
                    var4 = {};
                    var8 = _closure2_slot0;
                    var4.searchContext = var8;
                    var4.channelId = var3;
                    var4.messageId = var2;
                    var10 = null;
                    var11 = var10 == var9;
                    var8 = undefined;
                    if (var11) {
                        _fun106854_ip = 112;
                        continue _fun106854
                    }
                case 92:
                    var9 = var9.author;
                    var10 = var10 == var9;
                    var8 = undefined;
                    if (var10) {
                        _fun106854_ip = 112;
                        continue _fun106854
                    }
                case 107:
                    var8 = var9.id;
                case 112:
                    var4.userId = var8;
                    var8 = arg1;
                    var4.index = var8;
                    var7 = _closure1_slot12;
                    var7 = var7.MESSAGE;
                    var4.entityType = var7;
                    var4 = var5.bind(var6)(var4);
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var0)(var3, var2);
                    return var0;
            }
        };
        var10 = var8.bind(var10)(var1, var2);
        var _closure2_slot7 = var10;
        var8 = _closure1_slot3;
        var2 = var8.useRef;
        var1 = {};
        var1 = var2.bind(var8)(var1);
        var _closure2_slot8 = var1;
        var8 = _closure1_slot3;
        var2 = var8.useMemo;
        var1 = new Array(4);
        var1[0] = var11;
        var1[1] = var10;
        var1[2] = var9;
        var1[3] = var0;
        var0 = function() { // Environment: var7
            _fun106855: for (var _fun106855_ip = 0;;) switch (_fun106855_ip) {
                case 0:
                    var0 = new Array(0);
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot4;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun106855_ip = 44;
                        continue _fun106855
                    }
                case 23:
                    var3 = _closure2_slot4;
                    var2 = var3.forEach;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var0 = arg0;
                        var6 = var0.message;
                        var0 = arg1;
                        var _closure4_slot0 = var0;
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var0 = {};
                        var3 = _closure1_slot9;
                        var3 = var3.MESSAGE;
                        var0.type = var3;
                        var3 = {};
                        var3.message = var6;
                        var5 = function(arg0) { // Original name: onPress, environment: var5
                            var0 = arg0;
                            var1 = var0.channelId;
                            var0 = var0.messageId;
                            var3 = _closure2_slot7;
                            var2 = {};
                            var2.channelId = var1;
                            var2.messageId = var0;
                            var1 = _closure4_slot0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var3.onPress = var5;
                        var4 = _closure1_slot10;
                        var3.lineClamp = var4;
                        var4 = _closure2_slot8;
                        var3.messageSizeCacheRef = var4;
                        var0.props = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                case 44:
                    var1 = _closure2_slot5;
                    if (!var1) {
                        _fun106855_ip = 132;
                        continue _fun106855
                    }
                case 51:
                    var1 = _closure2_slot3;
                    var5 = 0;
                    var1 = var5 < var1;
                    var3 = global;
                    var2 = 'message-placeholder-';
                    if (!var1) {
                        _fun106855_ip = 132;
                        continue _fun106855
                    }
                case 75:
                    var7 = var0.push;
                    var1 = {};
                    var8 = _closure1_slot9;
                    var8 = var8.MESSAGE_PLACEHOLDER;
                    var1.type = var8;
                    var8 = var3.HermesInternal;
                    var8 = var8.concat;
                    var8 = var8.bind(var2)(var5);
                    var1.key = var8;
                    var1 = var7.bind(var0)(var1);
                    var5 = var5 + 1;
                    var1 = _closure2_slot3;
                    if (var5 < var1) {
                        _fun106855_ip = 75;
                        continue _fun106855
                    }
                case 132:
                    return var0;
            }
        };
        var8 = var2.bind(var8)(var0, var1);
        var0 = 13;
        var0 = var6[var0];
        var1 = var5.bind(var3)(var0);
        var0 = var1.useContentContainerStyles;
        var9 = var0.bind(var1)();
        var2 = _closure1_slot14;
        var1 = _closure1_slot1;
        var0 = 14;
        var0 = var6[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var9 = var9.messagesContentContainer;
        var0.contentContainerStyle = var9;
        var0.data = var8;
        var7 = function() { // Original name: onEndReached, environment: var7
            _fun106858: for (var _fun106858_ip = 0;;) switch (_fun106858_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.fetchPins;
                    var1 = _closure2_slot0;
                    var2 = var1.channelId;
                    var1 = {};
                    var5 = _closure2_slot4;
                    var7 = null;
                    var8 = var7 == var5;
                    var5 = undefined;
                    if (var8) {
                        _fun106858_ip = 96;
                        continue _fun106858
                    }
                case 60:
                    var9 = _closure2_slot4;
                    var8 = var9.at;
                    var6 = -1;
                    var6 = var8.bind(var9)(var6);
                    var7 = var7 == var6;
                    var5 = undefined;
                    if (var7) {
                        _fun106858_ip = 96;
                        continue _fun106858
                    }
                case 90:
                    var5 = var6.pinnedAt;
                case 96:
                    var1.before = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var0.onEndReached = var7;
        var4 = _closure1_slot11;
        var0.estimatedItemSize = var4;
        var4 = 15;
        var4 = var6[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.MessageVerticalSeparator;
        var0.ItemSeparatorComponent = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var8 = var5[var3];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.MESSAGE_PLACEHOLDER_ITEM_SIZE;
    var _closure1_slot8 = var7;
    var7 = var3.SearchListItemTypes;
    var _closure1_slot9 = var7;
    var7 = var3.SEARCH_PINNED_MESSAGES_LINE_CLAMP;
    var _closure1_slot10 = var7;
    var3 = var3.MESSAGE_ESTIMATED_ITEM_SIZE;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchResultContentEntityTypes;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchTypes;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: PinsScreen, environment: var1
        _fun106859: for (var _fun106859_ip = 0;;) switch (_fun106859_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.searchContext;
                var6 = var0.tab;
                var5 = var0.isFocused;
                var3 = _closure1_slot7;
                var2 = var3.useState;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.isInitialSearchQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var3)(var7, var0);
                if (!var0) {
                    _fun106859_ip = 143;
                    continue _fun106859
                }
            case 51:
                var2 = var7.type;
                var0 = _closure1_slot13;
                var0 = var0.CHANNEL;
                if (!(var2 !== var0)) {
                    _fun106859_ip = 108;
                    continue _fun106859
                }
            case 70:
                var2 = var7.type;
                var0 = _closure1_slot13;
                var0 = var0.GUILD_CHANNEL;
                if (!(var2 !== var0)) {
                    _fun106859_ip = 108;
                    continue _fun106859
                }
            case 89:
                var2 = var7.type;
                var0 = _closure1_slot13;
                var0 = var0.THREAD;
                if (!(var2 === var0)) {
                    _fun106859_ip = 143;
                    continue _fun106859
                }
            case 108:
                var4 = _closure1_slot14;
                var3 = _closure1_slot15;
                var2 = {};
                var2.searchContext = var7;
                var2.tab = var6;
                var2.isFocused = var5;
                var0 = undefined;
                var0 = var4.bind(var0)(var3, var2);
                _fun106859_ip = 192;
                continue _fun106859;
            case 143:
                var4 = _closure1_slot14;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 16;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.searchContext = var7;
                var1.tab = var6;
                var1.isFocused = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 192:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/pages/messages/PinsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9576, 4190, 8925, 8861, 8860, 660, 33, 13685, 9575, 566, 13681, 8924, 13739, 13689, 13688, 13767, 2]);