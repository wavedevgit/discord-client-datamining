// modules/search/native/components/layout/SearchBarActivityIcon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var6 = var5[var9];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var8 = 1;
    var3 = var5[var8];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityIndicator;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SEARCH_MESSAGE_TAB_SENTINEL;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var7 = var3.Fragment;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var7 = var10.createStyles;
    var3 = {};
    var11 = {};
    var12 = 7;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var11.color = var12;
    var3.spinnerColor = var11;
    var11 = {
        'width': 18,
        'height': 18,
        'alignItems': 'center',
        'justifyContent': 'center',
        'position': 'absolute'
    };
    var3.spinner = var11;
    var11 = {
        'marginLeft': 12,
        'marginRight': 4
    };
    var3.icon = var11;
    var3 = var7.bind(var10)(var3);
    var _closure1_slot11 = var3;
    var7 = {};
    var7.START = var9;
    var3 = 'START';
    var7[var9] = var3;
    var7.END = var8;
    var3 = 'END';
    var7[var8] = var3;
    var _closure1_slot12 = var7;
    var8 = var7.START;
    var3 = new Array(2);
    var3[0] = var8;
    var7 = var7.END;
    var3[1] = var7;
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function SearchBarActivityIconTsx1(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[0,0.5])};}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = {};
    var7 = 'function SearchBarActivityIconTsx2(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[1,0])};}';
    var3.code = var7;
    var _closure1_slot15 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun105690: for (var _fun105690_ip = 0;;) switch (_fun105690_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.searchContext;
                var _closure2_slot0 = var5;
                var1 = _closure1_slot11;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var4 = _closure1_slot6;
                var2 = var4.useState;
                var1 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.getSearchResultsQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var2.bind(var4)(var5, var1);
                var _closure2_slot1 = var1;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 8;
                var1 = var12[var1];
                var7 = var11.bind(var3)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.getSearchTabFetchId;
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot7;
                    var1 = _closure2_slot1;
                    var2 = var4.bind(var5)(var3, var2, var1);
                    var1 = _closure1_slot5;
                    var0 = var1.getIsInitialFetchComplete;
                    var0 = var0.bind(var1)(var2);
                    var0 = !var0;
                    return var0;
                };
                var1 = var6.bind(var7)(var2, var1);
                var _closure2_slot2 = var1;
                var2 = var4.useState;
                var1 = function(arg0) { // Environment: var0
                    _fun105693: for (var _fun105693_ip = 0;;) switch (_fun105693_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.isInitialSearchQuery;
                            var2 = var0.bind(var1)();
                            var0 = var1.isAutocompleteVisible;
                            var1 = var0.bind(var1)();
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun105693_ip = 36;
                                continue _fun105693
                            }
                        case 33:
                            var0 = !var2;
                        case 36:
                            if (!var0) {
                                _fun105693_ip = 42;
                                continue _fun105693
                            }
                        case 39:
                            var0 = !var1;
                        case 42:
                            return var0;
                    }
                };
                var1 = var2.bind(var4)(var5, var1);
                var _closure2_slot3 = var1;
                var5 = 10;
                var2 = var12[var5];
                var6 = var11.bind(var3)(var2);
                var4 = var6.useSharedValue;
                var2 = _closure1_slot12;
                var2 = var2.START;
                var7 = var4.bind(var6)(var2);
                var _closure2_slot4 = var7;
                var6 = _closure1_slot3;
                var4 = var6.useEffect;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var7;
                var1 = function() { // Environment: var0
                    _fun105694: for (var _fun105694_ip = 0;;) switch (_fun105694_ip) {
                        case 0:
                            var6 = _closure2_slot3;
                            var3 = _closure2_slot4;
                            var2 = var3.set;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 11;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.withTiming;
                            var1 = _closure1_slot12;
                            if (var6) {
                                _fun105694_ip = 71;
                                continue _fun105694
                            }
                        case 53:
                            var6 = var1.START;
                            var6 = var4.bind(var5)(var6);
                            var6 = var2.bind(var3)(var6);
                            _fun105694_ip = 87;
                            continue _fun105694;
                        case 71:
                            var1 = var1.END;
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                        case 87:
                            return var0;
                    }
                };
                var1 = var4.bind(var6)(var1, var2);
                var1 = var12[var5];
                var4 = var11.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.interpolate;
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot13;
                    var1 = [0, 0.5];
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var0.opacity = var1;
                    return var0;
                };
                var8 = {};
                var6 = var12[var5];
                var6 = var11.bind(var3)(var6);
                var6 = var6.interpolate;
                var8.interpolate = var6;
                var8.fadeAnimationState = var7;
                var6 = _closure1_slot13;
                var8.ANIMATION_STATE_INPUT = var6;
                var1.__closure = var8;
                var8 = 12880513119188.0;
                var1.__workletHash = var8;
                var8 = _closure1_slot14;
                var1.__initData = var8;
                var14 = var2.bind(var4)(var1);
                var1 = var12[var5];
                var2 = var11.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.interpolate;
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot13;
                    var1 = [1, 0];
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var0.opacity = var1;
                    return var0;
                };
                var4 = {};
                var8 = var12[var5];
                var8 = var11.bind(var3)(var8);
                var8 = var8.interpolate;
                var4.interpolate = var8;
                var4.fadeAnimationState = var7;
                var4.ANIMATION_STATE_INPUT = var6;
                var0.__closure = var4;
                var4 = 11061952032557.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot15;
                var0.__initData = var4;
                var8 = var1.bind(var2)(var0);
                var2 = _closure1_slot10;
                var1 = _closure1_slot9;
                var0 = {};
                var7 = _closure1_slot8;
                var6 = _closure1_slot1;
                var4 = var12[var5];
                var4 = var6.bind(var3)(var4);
                var9 = var4.View;
                var4 = {};
                var4.style = var14;
                var14 = _closure1_slot4;
                var13 = {};
                var15 = var10.spinnerColor;
                var15 = var15.color;
                var13.color = var15;
                var16 = var10.icon;
                var15 = new Array(2);
                var15[0] = var16;
                var16 = var10.spinner;
                var15[1] = var16;
                var13.style = var15;
                var13 = var7.bind(var3)(var14, var13);
                var4.children = var13;
                var9 = var7.bind(var3)(var9, var4);
                var4 = new Array(2);
                var4[0] = var9;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var5.style = var8;
                var8 = 12;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var9 = var8.MagnifyingGlassIcon;
                var8 = {};
                var10 = var10.icon;
                var8.style = var10;
                var10 = 13;
                var10 = var12[var10];
                var11 = var11.bind(var3)(var10);
                var10 = var11.isAndroid;
                var11 = var10.bind(var11)();
                var10 = 'xs';
                if (!var11) {
                    _fun105690_ip = 579;
                    continue _fun105690
                }
            case 575:
                var10 = 'sm';
            case 579:
                var8.size = var10;
                var10 = 'interactive-text-default';
                var8.color = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/layout/SearchBarActivityIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4226, 9049, 8985, 33, 1297, 671, 632, 9051, 3721, 4097, 7082, 478, 2]);