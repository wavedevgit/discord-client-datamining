// components_native/common/TabBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var6 = var3.TouchableWithoutFeedback;
    var _closure1_slot5 = var6;
    var7 = var3.StyleSheet;
    var3 = var3.FlatList;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'stretch'
    };
    var3.innerContainer = var8;
    var8 = {
        'flexGrow': 1,
        'flexBasis': 'auto',
        'flexShrink': 0,
        'alignItems': 'center',
        'justifyContent': 'center',
        'marginBottom': 1,
        'marginHorizontal': 1,
        'padding': 10,
        'borderBottomWidth': 2,
        'borderBottomColor': 'transparent'
    };
    var3.tab = var8;
    var8 = {};
    var10 = 'rgba(0,0,0,0.1)';
    var8.backgroundColor = var10;
    var3.tabActive = var8;
    var8 = {};
    var10 = 5;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.BRAND_600;
    var8.borderBottomColor = var10;
    var3.tabSelected = var8;
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = function arg0() {
        _fun73469: for (var _fun73469_ip = 0;;) switch (_fun73469_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.children;
                var11 = var1.index;
                var _closure2_slot0 = var11;
                var13 = var1.isSelected;
                var8 = var1.tabStyle;
                var9 = var1.tabStyleActive;
                var12 = var1.tabStyleSelected;
                var15 = var1.onSelect;
                var _closure2_slot1 = var15;
                var4 = _closure1_slot3;
                var2 = var4.useState;
                var1 = function() { // Environment: var0
                    var0 = false;
                    return var0;
                };
                var5 = var2.bind(var4)(var1);
                var2 = _closure1_slot2;
                var3 = undefined;
                var1 = 2;
                var2 = var2.bind(var3)(var5, var1);
                var1 = 0;
                var10 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot2 = var1;
                var7 = var4.useCallback;
                var5 = new Array(1);
                var5[0] = var1;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var7 = var7.bind(var4)(var2, var5);
                var5 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var5 = var5.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var15;
                var1[1] = var11;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var11 = 'tab';
                var0.accessibilityRole = var11;
                var0.onPressIn = var7;
                var0.onPressOut = var5;
                var0.onPress = var4;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = _closure1_slot9;
                var11 = var7.tab;
                var7 = new Array(6);
                var7[0] = var11;
                var7[1] = var8;
                var11 = null;
                if (!var13) {
                    _fun73469_ip = 266;
                    continue _fun73469
                }
            case 256:
                var15 = _closure1_slot9;
                var11 = var15.tabSelected;
            case 266:
                var7[2] = var11;
                var11 = null;
                if (!var10) {
                    _fun73469_ip = 285;
                    continue _fun73469
                }
            case 275:
                var14 = _closure1_slot9;
                var11 = var14.tabActive;
            case 285:
                var7[3] = var11;
                var11 = null;
                if (!var13) {
                    _fun73469_ip = 297;
                    continue _fun73469
                }
            case 294:
                var11 = var12;
            case 297:
                var7[4] = var11;
                var8 = null;
                if (!var10) {
                    _fun73469_ip = 309;
                    continue _fun73469
                }
            case 306:
                var8 = var9;
            case 309:
                var7[5] = var8;
                var4.style = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/TabBar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73474: for (var _fun73474_ip = 0;;) switch (_fun73474_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.initialNumTabsToRender;
                var13 = var1.tabs;
                var18 = var1.tabIndexSelected;
                var _closure2_slot0 = var18;
                var17 = var1.tabStyle;
                var _closure2_slot1 = var17;
                var15 = var1.tabStyleActive;
                var _closure2_slot2 = var15;
                var12 = var1.tabStyleSelected;
                var _closure2_slot3 = var12;
                var6 = var1.onSelect;
                var _closure2_slot4 = var6;
                var16 = var1.containerStyle;
                var8 = var1.hideHorizontalScrollbar;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun73474_ip = 89;
                    continue _fun73474
                }
            case 87:
                var8 = false;
            case 89:
                var7 = var1.scrollToSelectedIndex;
                if (!(var7 === var3)) {
                    _fun73474_ip = 103;
                    continue _fun73474
                }
            case 101:
                var7 = false;
            case 103:
                var _closure2_slot5 = var7;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var4 = _closure1_slot3;
                var2 = var4.useRef;
                var1 = null;
                var1 = var2.bind(var4)(var1);
                _closure2_slot6 = var1;
                var2 = var4.useRef;
                var2 = var2.bind(var4)(var18);
                _closure2_slot7 = var2;
                var11 = var4.useEffect;
                var5 = new Array(1);
                var5[0] = var18;
                var2 = function() { // Environment: var0
                    var1 = _closure2_slot7;
                    var0 = _closure2_slot0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var11.bind(var4)(var2, var5);
                var5 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var6;
                var1 = function(arg0) { // Environment: var0
                    _fun73476: for (var _fun73476_ip = 0;;) switch (_fun73476_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure2_slot4;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var4);
                            var1 = _closure2_slot6;
                            var3 = var1.current;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun73476_ip = 49;
                                continue _fun73476
                            }
                        case 32:
                            var2 = var3.scrollToIndex;
                            var1 = {};
                            var1.index = var4;
                            var1 = var2.bind(var3)(var1);
                        case 49:
                            return var0;
                    }
                };
                var1 = var5.bind(var4)(var1, var2);
                _closure2_slot8 = var1;
                var2 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot3;
                    var4 = var3.useState;
                    var2 = function() { // Environment: var0
                        var0 = _closure3_slot0;
                        return var0;
                    };
                    var5 = var4.bind(var3)(var2);
                    var4 = _closure1_slot2;
                    var2 = undefined;
                    var1 = 1;
                    var2 = var4.bind(var2)(var5, var1);
                    var1 = 0;
                    var4 = var2[var1];
                    var _closure3_slot1 = var4;
                    var2 = var3.useEffect;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        var1 = global;
                        var4 = var1.setTimeout;
                        var3 = undefined;
                        var2 = function() { // Environment: var0
                            _fun73480: for (var _fun73480_ip = 0;;) switch (_fun73480_ip) {
                                case 0:
                                    var1 = _closure2_slot7;
                                    var2 = var1.current;
                                    var1 = _closure3_slot1;
                                    if (!(var2 === var1)) {
                                        _fun73480_ip = 67;
                                        continue _fun73480
                                    }
                                case 23:
                                    var0 = _closure2_slot6;
                                    var2 = var0.current;
                                    var0 = null;
                                    if (!(var0 != var2)) {
                                        _fun73480_ip = 67;
                                        continue _fun73480
                                    }
                                case 38:
                                    var1 = var2.scrollToIndex;
                                    var0 = {};
                                    var3 = _closure3_slot1;
                                    var0.index = var3;
                                    var3 = 1;
                                    var0.viewPosition = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 67:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = 500;
                        var1 = var4.bind(var3)(var2, var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = global;
                            var2 = var0.clearTimeout;
                            var1 = _closure4_slot0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = _closure2_slot6;
                    return var0;
                };
                var14 = var2.bind(var3)(var18);
                var11 = var4.useCallback;
                var5 = function(arg0, arg1) { // Environment: var0
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = 'tab-';
                    var0 = arg1;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var2 = new Array(0);
                var11 = var11.bind(var4)(var5, var2);
                var5 = var4.useCallback;
                var2 = new Array(7);
                var2[0] = var18;
                var2[1] = var17;
                var2[2] = var15;
                var2[3] = var12;
                var2[4] = var7;
                var2[5] = var6;
                var2[6] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun73483: for (var _fun73483_ip = 0;;) switch (_fun73483_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.item;
                            var6 = var1.index;
                            var3 = _closure1_slot8;
                            var2 = _closure1_slot10;
                            var1 = {};
                            var1.index = var6;
                            var4 = _closure2_slot0;
                            var4 = var6 === var4;
                            var1.isSelected = var4;
                            var4 = _closure2_slot1;
                            var1.tabStyle = var4;
                            var4 = _closure2_slot2;
                            var1.tabStyleActive = var4;
                            var4 = _closure2_slot3;
                            var1.tabStyleSelected = var4;
                            var4 = _closure2_slot5;
                            if (var4) {
                                _fun73483_ip = 86;
                                continue _fun73483
                            }
                        case 80:
                            var4 = _closure2_slot4;
                            _fun73483_ip = 90;
                            continue _fun73483;
                        case 86:
                            var4 = _closure2_slot8;
                        case 90:
                            var1.onSelect = var4;
                            var1.children = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var12 = var5.bind(var4)(var1, var2);
                var2 = var4.useMemo;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.Gesture;
                    var0 = var1.Native;
                    var2 = var0.bind(var1)();
                    var1 = var2.disallowInterruption;
                    var0 = true;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = new Array(0);
                var6 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var15 = _closure1_slot9;
                var4 = var15.container;
                var0.style = var4;
                var4 = 'tablist';
                var0.accessibilityRole = var4;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var17 = var7[var4];
                var17 = var5.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.t1qXlK;
                var4 = var17.bind(var18)(var4);
                var0.accessibilityLabel = var4;
                var4 = 6;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.GestureDetector;
                var4 = {};
                var4.gesture = var6;
                var7 = _closure1_slot6;
                var6 = {};
                var6.ref = var14;
                var14 = new Array(2);
                var14[0] = var16;
                var15 = var15.innerContainer;
                var14[1] = var15;
                var6.contentContainerStyle = var14;
                var14 = true;
                var6.horizontal = var14;
                var6.data = var13;
                var6.renderItem = var12;
                var6.keyExtractor = var11;
                var6.initialNumToRender = var10;
                var9 = _closure1_slot7;
                var6.onScrollToIndexFailed = var9;
                var8 = !var8;
                var6.showsHorizontalScrollIndicator = var8;
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 671, 4956, 1234, 2]);