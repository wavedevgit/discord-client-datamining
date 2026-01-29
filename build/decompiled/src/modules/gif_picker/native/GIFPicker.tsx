// modules/gif_picker/native/GIFPicker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var10 = 1;
    var3 = var5[var10];
    var6 = var6.bind(var0)(var3);
    var _closure1_slot5 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot8 = var7;
    var7 = var3.ChatInputComponentViewedTypes;
    var _closure1_slot9 = var7;
    var7 = var3.GIF_FETCH_LIMIT_IOS;
    var _closure1_slot10 = var7;
    var7 = var3.GIFPickerResultTypes;
    var _closure1_slot11 = var7;
    var3 = var3.TooltipNames;
    var _closure1_slot12 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot13 = var7;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot15 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: GIFPicker, environment: var1
        _fun74027: for (var _fun74027_ip = 0;;) switch (_fun74027_ip) {
            case 0:
                var2 = arg0;
                var16 = var2.bottomSheetRef;
                var _closure2_slot0 = var16;
                var7 = var2.channelId;
                var _closure2_slot1 = var7;
                var1 = var2.guildId;
                var _closure2_slot2 = var1;
                var18 = var2.hideFavorites;
                var24 = var2.onPressGIF;
                var _closure2_slot3 = var24;
                var2 = _closure1_slot15;
                var3 = undefined;
                var4 = var2.bind(var3)();
                var15 = _closure1_slot5;
                var5 = var15.useEffect;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun74028: for (var _fun74028_ip = 0;;) switch (_fun74028_ip) {
                        case 0:
                            var2 = _closure1_slot2;
                            var1 = _closure1_slot3;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.initializeSearch;
                            var1 = var1.bind(var2)();
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun74028_ip = 121;
                                continue _fun74028
                            }
                        case 48:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 8;
                            var1 = var3[var1];
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot8;
                            var2 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                            var1 = {};
                            var6 = _closure1_slot9;
                            var6 = var6.GIF;
                            var1.type = var6;
                            var6 = _closure2_slot1;
                            var1.channel_id = var6;
                            var5 = _closure2_slot2;
                            var1.guild_id = var5;
                            var1 = var3.bind(var4)(var2, var1);
                        case 121:
                            return var0;
                    }
                };
                var1 = var5.bind(var15)(var1, var2);
                var7 = _closure1_slot1;
                var23 = _closure1_slot3;
                var1 = 9;
                var1 = var23[var1];
                var1 = var7.bind(var3)(var1);
                var8 = var1.bind(var3)();
                var _closure2_slot4 = var8;
                var1 = 10;
                var1 = var23[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var _closure2_slot5 = var1;
                var5 = var15.useMemo;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun74029: for (var _fun74029_ip = 0;;) switch (_fun74029_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var3 = 2;
                            var4 = var3;
                            if (!var0) {
                                _fun74029_ip = 19;
                                continue _fun74029
                            }
                        case 16:
                            var4 = 3;
                        case 19:
                            var0 = {};
                            var0.columns = var4;
                            var1 = _closure2_slot5;
                            var1 = var1.width;
                            var2 = var1 / var4;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var1 = 11;
                            var5 = var5[var1];
                            var1 = undefined;
                            var1 = var6.bind(var1)(var5);
                            var1 = var1.GIF_PICKER_GUTTER_SPACING;
                            var3 = var1 / var3;
                            var1 = 1;
                            var1 = var4 - var1;
                            var1 = var3 * var1;
                            var1 = var2 - var1;
                            var0.columnWidth = var1;
                            return var0;
                    }
                };
                var1 = var5.bind(var15)(var1, var2);
                var14 = var1.columns;
                var13 = var1.columnWidth;
                var2 = var15.useRef;
                var1 = null;
                var19 = var2.bind(var15)(var1);
                var _closure2_slot6 = var19;
                var1 = var15.useState;
                var11 = false;
                var1 = var1.bind(var15)(var11);
                var10 = _closure1_slot4;
                var9 = 2;
                var1 = var10.bind(var3)(var1, var9);
                var8 = 0;
                var5 = var1[var8];
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot7 = var1;
                var12 = var15.useRef;
                var1 = '';
                var1 = var12.bind(var15)(var1);
                var _closure2_slot8 = var1;
                var1 = var15.useState;
                var1 = var1.bind(var15)(var11);
                var1 = var10.bind(var3)(var1, var9);
                var12 = var1[var8];
                var1 = var1[var2];
                var _closure2_slot9 = var1;
                var11 = var15.useState;
                var1 = _closure1_slot11;
                var1 = var1.SEARCH;
                var1 = var11.bind(var15)(var1);
                var1 = var10.bind(var3)(var1, var9);
                var22 = var1[var8];
                var _closure2_slot10 = var22;
                var1 = var1[var2];
                var _closure2_slot11 = var1;
                var9 = var15.useCallback;
                var2 = new Array(1);
                var2[0] = var19;
                var1 = function() { // Environment: var0
                    _fun74030: for (var _fun74030_ip = 0;;) switch (_fun74030_ip) {
                        case 0:
                            var3 = _closure2_slot7;
                            var0 = undefined;
                            var2 = false;
                            var2 = var3.bind(var0)(var2);
                            var4 = _closure2_slot11;
                            var3 = _closure1_slot11;
                            var3 = var3.SEARCH;
                            var3 = var4.bind(var0)(var3);
                            var3 = _closure1_slot2;
                            var4 = _closure1_slot3;
                            var2 = 7;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.resetSearch;
                            var2 = var2.bind(var3)();
                            var1 = _closure2_slot6;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun74030_ip = 93;
                                continue _fun74030
                            }
                        case 83:
                            var1 = var2.blur;
                            var1 = var1.bind(var2)();
                        case 93:
                            return var0;
                    }
                };
                var21 = var9.bind(var15)(var1, var2);
                var9 = var15.useMemo;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 12;
                    var1 = var5[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.debounce;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var0 = var5[var0];
                    var0 = var1.bind(var4)(var0);
                    var1 = var0.search;
                    var0 = 200;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = new Array(0);
                var2 = var9.bind(var15)(var2, var1);
                var _closure2_slot12 = var2;
                var9 = _closure1_slot0;
                var1 = 11;
                var1 = var23[var1];
                var10 = var9.bind(var3)(var1);
                var1 = var10.useFavoriteGIFsMobile;
                var1 = var1.bind(var10)();
                var10 = var1.favorites;
                var _closure2_slot13 = var10;
                var17 = var1.favoritesCategory;
                var1 = 13;
                var1 = var23[var1];
                var11 = var9.bind(var3)(var1);
                var10 = var11.useStateFromStoresObject;
                var1 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var1;
                var1 = function() { // Environment: var0
                    _fun74032: for (var _fun74032_ip = 0;;) switch (_fun74032_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure2_slot10;
                            var3 = _closure1_slot11;
                            var3 = var3.FAVORITES;
                            if (!(var4 === var3)) {
                                _fun74032_ip = 32;
                                continue _fun74032
                            }
                        case 26:
                            var2 = _closure2_slot13;
                            _fun74032_ip = 48;
                            continue _fun74032;
                        case 32:
                            var4 = _closure1_slot7;
                            var3 = var4.getResultItems;
                            var2 = var3.bind(var4)();
                        case 48:
                            var0.resultItems = var2;
                            var2 = _closure1_slot7;
                            var1 = var2.getResultQuery;
                            var1 = var1.bind(var2)();
                            var0.resultQuery = var1;
                            return var0;
                    }
                };
                var1 = var10.bind(var11)(var9, var1);
                var11 = var1.resultItems;
                var _closure2_slot14 = var11;
                var1 = var1.resultQuery;
                var _closure2_slot15 = var1;
                var10 = var15.useCallback;
                var9 = new Array(3);
                var9[0] = var2;
                var9[1] = var19;
                var9[2] = var1;
                var2 = function(arg0) { // Environment: var0
                    _fun74033: for (var _fun74033_ip = 0;;) switch (_fun74033_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = arguments[1];
                            var0 = undefined;
                            if (!(var4 === var0)) {
                                _fun74033_ip = 14;
                                continue _fun74033
                            }
                        case 12:
                            var4 = true;
                        case 14:
                            var1 = _closure2_slot8;
                            var1 = var1.current;
                            if (!(var1 !== var3)) {
                                _fun74033_ip = 227;
                                continue _fun74033
                            }
                        case 33:
                            var1 = _closure2_slot8;
                            var1.current = var3;
                            var6 = _closure2_slot11;
                            var1 = _closure1_slot11;
                            var1 = var1.SEARCH;
                            var1 = var6.bind(var0)(var1);
                            var1 = var3.trim;
                            var1 = var1.bind(var3)();
                            var6 = var1.length;
                            var1 = 0;
                            var6 = var6 > var1;
                            var7 = _closure2_slot9;
                            var1 = !var6;
                            var1 = !var1;
                            if (!var6) {
                                _fun74033_ip = 107;
                                continue _fun74033
                            }
                        case 99:
                            var8 = _closure2_slot15;
                            var1 = var8 !== var3;
                        case 107:
                            var1 = var7.bind(var0)(var1);
                            var1 = _closure2_slot7;
                            var1 = var1.bind(var0)(var6);
                            var8 = !var4;
                            if (var8) {
                                _fun74033_ip = 133;
                                continue _fun74033
                            }
                        case 127:
                            var7 = _closure2_slot12;
                            _fun74033_ip = 159;
                            continue _fun74033;
                        case 133:
                            var6 = _closure1_slot2;
                            var9 = _closure1_slot3;
                            var1 = 7;
                            var1 = var9[var1];
                            var1 = var6.bind(var0)(var1);
                            var7 = var1.search;
                        case 159:
                            var1 = null;
                            var9 = '';
                            var6 = null;
                            if (!(var9 !== var3)) {
                                _fun74033_ip = 181;
                                continue _fun74033
                            }
                        case 171:
                            var9 = _closure1_slot11;
                            var6 = var9.SEARCH;
                        case 181:
                            var10 = _closure1_slot10;
                            var14 = undefined;
                            var13 = var3;
                            var12 = var6;
                            var11 = var8;
                            var5 = var14[var7](var13, var12, var11, var10, var9);
                            if (var4) {
                                _fun74033_ip = 227;
                                continue _fun74033
                            }
                        case 203:
                            var2 = _closure2_slot6;
                            var2 = var2.current;
                            if (!(var1 != var2)) {
                                _fun74033_ip = 227;
                                continue _fun74033
                            }
                        case 216:
                            var1 = var2.setText;
                            var1 = var1.bind(var2)(var3);
                        case 227:
                            return var0;
                    }
                };
                var20 = var10.bind(var15)(var2, var9);
                var _closure2_slot16 = var20;
                var10 = var15.useEffect;
                var9 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 14;
                    var1 = var3[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.acknowledgeTooltip;
                    var1 = _closure1_slot12;
                    var1 = var1.GIF_PICKER_TOOLTIP;
                    var1 = var4.bind(var5)(var1);
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var0 = var3[var0];
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.fetchTrendingSearchTerms;
                    var0 = var0.bind(var1)();
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var0 = 15;
                        var2 = var5[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.wait;
                        var4 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.resetSearch;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    return var0;
                };
                var2 = new Array(0);
                var2 = var10.bind(var15)(var9, var2);
                var10 = var15.useEffect;
                var9 = new Array(2);
                var9[0] = var1;
                var9[1] = var19;
                var2 = function() { // Environment: var0
                    _fun74036: for (var _fun74036_ip = 0;;) switch (_fun74036_ip) {
                        case 0:
                            var2 = _closure2_slot15;
                            var1 = '';
                            if (!(var1 !== var2)) {
                                _fun74036_ip = 55;
                                continue _fun74036
                            }
                        case 15:
                            var3 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.fetchSuggestions;
                            var1 = _closure2_slot15;
                            var1 = var2.bind(var3)(var1);
                        case 55:
                            var2 = _closure2_slot9;
                            var3 = _closure2_slot15;
                            var0 = _closure2_slot6;
                            var5 = var0.current;
                            var0 = null;
                            var4 = var0 == var5;
                            var0 = undefined;
                            var1 = undefined;
                            if (var4) {
                                _fun74036_ip = 95;
                                continue _fun74036
                            }
                        case 85:
                            var4 = var5.getText;
                            var1 = var4.bind(var5)();
                        case 95:
                            var1 = var3 !== var1;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var2 = var10.bind(var15)(var2, var9);
                var10 = var15.useMemo;
                var9 = new Array(1);
                var9[0] = var20;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot13;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 16;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = function(arg0) { // Original name: onClickSuggestion, environment: var4
                        var3 = _closure2_slot16;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = false;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var0.onClickSuggestion = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var9 = var10.bind(var15)(var2, var9);
                var10 = var15.useCallback;
                var2 = new Array(3);
                var2[0] = var24;
                var24 = var11.length;
                var2[1] = var24;
                var2[2] = var1;
                var1 = function(arg0, arg1) { // Environment: var0
                    var2 = arg0;
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var0 = 7;
                    var3 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.trackSelectGIF;
                    var3 = {};
                    var6 = _closure1_slot11;
                    var6 = var6.SEARCH;
                    var3.type = var6;
                    var6 = arg1;
                    var3.index = var6;
                    var6 = 0;
                    var3.offset = var6;
                    var1 = _closure1_slot10;
                    var3.limit = var1;
                    var6 = _closure2_slot14;
                    var7 = var6.length;
                    var3.results = var7;
                    var6 = var6.length;
                    var3.totalResults = var6;
                    var6 = _closure2_slot15;
                    var3.query = var6;
                    var6 = var2.id;
                    var3.gifId = var6;
                    var3 = var4.bind(var5)(var3);
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var10 = var10.bind(var15)(var1, var2);
                var2 = var15.useCallback;
                var1 = new Array(2);
                var1[0] = var16;
                var1[1] = var20;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun74040: for (var _fun74040_ip = 0;;) switch (_fun74040_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure1_slot11;
                            var1 = var1.TRENDING_GIFS;
                            if (!(var2 !== var1)) {
                                _fun74040_ip = 83;
                                continue _fun74040
                            }
                        case 20:
                            var1 = _closure1_slot11;
                            var1 = var1.FAVORITES;
                            if (!(var2 !== var1)) {
                                _fun74040_ip = 56;
                                continue _fun74040
                            }
                        case 34:
                            var5 = _closure2_slot16;
                            var4 = undefined;
                            var3 = arg1;
                            var1 = false;
                            var1 = var5.bind(var4)(var3, var1);
                            _fun74040_ip = 143;
                            continue _fun74040;
                        case 56:
                            var5 = _closure2_slot7;
                            var3 = undefined;
                            var4 = false;
                            var4 = var5.bind(var3)(var4);
                            var1 = _closure2_slot11;
                            var1 = var1.bind(var3)(var2);
                            _fun74040_ip = 143;
                            continue _fun74040;
                        case 83:
                            var5 = _closure2_slot7;
                            var3 = undefined;
                            var4 = false;
                            var4 = var5.bind(var3)(var4);
                            var1 = _closure2_slot11;
                            var1 = var1.bind(var3)(var2);
                            var2 = _closure1_slot2;
                            var4 = _closure1_slot3;
                            var1 = 7;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.fetchTrendingGIFs;
                            var0 = _closure1_slot10;
                            var0 = var1.bind(var2)(var0);
                        case 143:
                            var0 = _closure2_slot0;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun74040_ip = 171;
                                continue _fun74040
                            }
                        case 161:
                            var0 = var1.expandActionSheet;
                            var0 = var0.bind(var1)();
                        case 171:
                            var0 = undefined;
                            return var0;
                    }
                };
                var15 = var2.bind(var15)(var0, var1);
                var2 = _closure1_slot14;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var4.container;
                var0.style = var4;
                var16 = _closure1_slot13;
                var4 = 17;
                var4 = var23[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var4.categoryType = var22;
                var4.onQueryClear = var21;
                var4.onQueryChange = var20;
                var4.searchInputRef = var19;
                var7 = var16.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = var11.length;
                if (!(!(var7 > var8))) {
                    _fun74027_ip = 822;
                    continue _fun74027
                }
            case 754:
                if (var5) {
                    _fun74027_ip = 822;
                    continue _fun74027
                }
            case 757:
                var8 = _closure1_slot13;
                var7 = _closure1_slot1;
                var16 = _closure1_slot3;
                var5 = 19;
                var5 = var16[var5];
                var7 = var7.bind(var3)(var5);
                var5 = {};
                var5.columns = var14;
                var5.onSelectCategory = var15;
                var15 = true;
                var16 = undefined;
                if (!(var15 !== var18)) {
                    _fun74027_ip = 804;
                    continue _fun74027
                }
            case 801:
                var16 = var17;
            case 804:
                var5.favoritesCategory = var16;
                var5.inActionSheet = var15;
                var5 = var8.bind(var3)(var7, var5);
                _fun74027_ip = 891;
                continue _fun74027;
            case 822:
                var8 = _closure1_slot13;
                var7 = _closure1_slot1;
                var15 = _closure1_slot3;
                var6 = 18;
                var6 = var15[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.columns = var14;
                var6.columnWidth = var13;
                var6.loading = var12;
                var12 = true;
                var6.inActionSheet = var12;
                var6.resultItems = var11;
                var6.onPressGIF = var10;
                var6.ListFooterComponent = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 891:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gif_picker/native/GIFPicker.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 9152, 660, 33, 1297, 9151, 795, 7645, 1464, 9297, 22, 566, 8576, 806, 9298, 9299, 9303, 9306, 2]);