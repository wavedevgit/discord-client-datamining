// modules/main_tabs_v2/native/sidebar/details/ChannelDetailsSearchBar.tsx
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
    var3 = var3.setIsChannelDetailsSearchActive;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.CHANNEL_DETAILS_MARGIN;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot6 = var8;
    var3 = 5;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var7 = var9.createStyles;
    var3 = {};
    var10 = {};
    var12 = 'center';
    var10.justifyContent = var12;
    var12 = 6;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var12 = var12.SEARCH_BAR_HEIGHT;
    var10.height = var12;
    var10.paddingStart = var11;
    var11 = 8;
    var10.paddingEnd = var11;
    var3.back = var10;
    var3 = var7.bind(var9)(var3);
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ChevronLargeLeftIcon;
    var3 = {
        'size': 'sm',
        'color': 'interactive-text-default'
    };
    var3 = var8.bind(var0)(var7, var3);
    var _closure1_slot8 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun105734: for (var _fun105734_ip = 0;;) switch (_fun105734_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.channelId;
                var _closure2_slot0 = var1;
                var11 = var2.guildId;
                var7 = var2.onSuggestionsLayoutMesure;
                var14 = var2.onBackPress;
                var _closure2_slot1 = var14;
                var6 = var2.suggestionsDismissed;
                var4 = var2.setSuggestionsDismissed;
                var5 = var2.showBackButton;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun105734_ip = 61;
                    continue _fun105734
                }
            case 59:
                var5 = true;
            case 61:
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var2 = _closure1_slot7;
                var9 = var2.bind(var3)();
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 8;
                var2 = var12[var2];
                var10 = var10.bind(var3)(var2);
                var2 = var10.useChannelDetailsSearchContext;
                var11 = var2.bind(var10)(var1, var11);
                _closure2_slot2 = var11;
                var10 = _closure1_slot3;
                var15 = var10.useEffect;
                var13 = new Array(2);
                var13[0] = var1;
                var13[1] = var11;
                var2 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 9;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.trackSearchClosed;
                        var1 = {};
                        var4 = _closure2_slot2;
                        var1.searchContext = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    return var0;
                };
                var2 = var15.bind(var10)(var2, var13);
                var13 = var10.useCallback;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var11;
                var1 = function() { // Environment: var0
                    var5 = _closure1_slot4;
                    var4 = var5.setState;
                    var3 = _closure2_slot2;
                    var2 = function(arg0) { // Environment: var2
                        var1 = arg0;
                        var0 = var1.reset;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var4 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var2 = false;
                    var1 = 'action';
                    var1 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var13 = var13.bind(var10)(var1, var2);
                _closure2_slot3 = var13;
                var2 = var10.useCallback;
                var1 = new Array(3);
                var1[0] = var14;
                var1[1] = var13;
                var1[2] = var11;
                var0 = function() { // Environment: var0
                    _fun105739: for (var _fun105739_ip = 0;;) switch (_fun105739_ip) {
                        case 0:
                            var4 = _closure1_slot4;
                            var3 = var4.setState;
                            var2 = _closure2_slot2;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = var1.reset;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var0 = var3.bind(var4)(var2, var0);
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            if (!(var0 === var2)) {
                                _fun105739_ip = 55;
                                continue _fun105739
                            }
                        case 45:
                            var2 = _closure2_slot3;
                            var2 = var2.bind(var0)();
                            _fun105739_ip = 63;
                            continue _fun105739;
                        case 55:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)();
                        case 63:
                            return var0;
                    }
                };
                var10 = var2.bind(var10)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = 10;
                var0 = var12[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var12 = arg1;
                var0.ref = var12;
                var0.searchContext = var11;
                var0.onSuggestionsLayoutMesure = var7;
                var0.suggestionsDismissed = var6;
                var0.setSuggestionsDismissed = var4;
                var4 = null;
                if (!var5) {
                    _fun105734_ip = 391;
                    continue _fun105734
                }
            case 272:
                var7 = _closure1_slot6;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 11;
                var5 = var13[var5];
                var5 = var12.bind(var3)(var5);
                var6 = var5.PressableOpacity;
                var5 = {};
                var11 = 'button';
                var5.accessibilityRole = var11;
                var5.onPress = var10;
                var9 = var9.back;
                var5.style = var9;
                var9 = 12;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["13/7kX"];
                var9 = var10.bind(var11)(var9);
                var5.accessibilityLabel = var9;
                var8 = _closure1_slot8;
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 391:
                var0.backButton = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var3.bind(var6)(var1);
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsSearchBar.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11423, 7720, 8974, 33, 1297, 11452, 9387, 11421, 11449, 13762, 4880, 1234, 2]);