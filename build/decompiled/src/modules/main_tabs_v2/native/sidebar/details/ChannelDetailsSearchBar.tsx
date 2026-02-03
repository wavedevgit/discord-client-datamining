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
    var10 = var3.CHANNEL_DETAILS_MARGIN;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var11 = 'center';
    var9.justifyContent = var11;
    var11 = 6;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.SEARCH_BAR_HEIGHT;
    var9.height = var11;
    var9.paddingStart = var10;
    var10 = 8;
    var9.paddingEnd = var10;
    var3.back = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun105067: for (var _fun105067_ip = 0;;) switch (_fun105067_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.channelId;
                var _closure2_slot0 = var1;
                var11 = var2.guildId;
                var9 = var2.onSuggestionsLayoutMesure;
                var14 = var2.onBackPress;
                var _closure2_slot1 = var14;
                var7 = var2.suggestionsDismissed;
                var4 = var2.setSuggestionsDismissed;
                var6 = var2.showBackButton;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun105067_ip = 61;
                    continue _fun105067
                }
            case 59:
                var6 = true;
            case 61:
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var2 = _closure1_slot7;
                var8 = var2.bind(var3)();
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 7;
                var2 = var12[var2];
                var10 = var10.bind(var3)(var2);
                var2 = var10.useChannelDetailsSearchContext;
                var10 = var2.bind(var10)(var1, var11);
                _closure2_slot2 = var10;
                var11 = _closure1_slot3;
                var15 = var11.useEffect;
                var13 = new Array(2);
                var13[0] = var1;
                var13[1] = var10;
                var2 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 8;
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
                var2 = var15.bind(var11)(var2, var13);
                var13 = var11.useCallback;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var10;
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
                var13 = var13.bind(var11)(var1, var2);
                _closure2_slot3 = var13;
                var2 = var11.useCallback;
                var1 = new Array(3);
                var1[0] = var14;
                var1[1] = var13;
                var1[2] = var10;
                var0 = function() { // Environment: var0
                    _fun105072: for (var _fun105072_ip = 0;;) switch (_fun105072_ip) {
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
                                _fun105072_ip = 55;
                                continue _fun105072
                            }
                        case 45:
                            var2 = _closure2_slot3;
                            var2 = var2.bind(var0)();
                            _fun105072_ip = 63;
                            continue _fun105072;
                        case 55:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)();
                        case 63:
                            return var0;
                    }
                };
                var11 = var2.bind(var11)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = 9;
                var0 = var12[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var12 = arg1;
                var0.ref = var12;
                var0.searchContext = var10;
                var0.onSuggestionsLayoutMesure = var9;
                var0.suggestionsDismissed = var7;
                var0.setSuggestionsDismissed = var4;
                var4 = null;
                if (!var6) {
                    _fun105067_ip = 428;
                    continue _fun105067
                }
            case 275:
                var7 = _closure1_slot6;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 10;
                var5 = var10[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.PressableOpacity;
                var5 = {};
                var12 = 'button';
                var5.accessibilityRole = var12;
                var5.onPress = var11;
                var8 = var8.back;
                var5.style = var8;
                var8 = 11;
                var11 = var10[var8];
                var11 = var9.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["13/7kX"];
                var8 = var11.bind(var12)(var8);
                var5.accessibilityLabel = var8;
                var8 = 12;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.ChevronLargeLeftIcon;
                var8 = {
                    'size': 'sm',
                    'color': 'interactive-text-default'
                };
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 428:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8978, 8912, 9000, 33, 1297, 11685, 8976, 8977, 13701, 4902, 1234, 9361, 2]);