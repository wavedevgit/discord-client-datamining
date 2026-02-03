// modules/search/native/components/tabs/SearchTabsLayout.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var5 = var1.searchContext;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot3;
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.trackSearchEmptyResult;
            var1 = {};
            var4 = _closure2_slot0;
            var1.searchContext = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var3 = _closure1_slot11;
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 10;
        var0 = var8[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var7 = _closure1_slot0;
        var4 = 11;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.V6nAfF;
        var4 = var5.bind(var6)(var4);
        var0.text = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var7 = var3.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
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
    var6 = var3.MESSAGE_SEARCH_RESULT_TABS_SET;
    var _closure1_slot7 = var6;
    var6 = var3.SEARCH_MESSAGE_TAB_SENTINEL;
    var _closure1_slot8 = var6;
    var3 = var3.SearchTabs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ComponentActions;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var6 = var3.jsxs;
    var _closure1_slot12 = var6;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 0,
        'minHeight': 32
    };
    var3.controls = var9;
    var9 = {};
    var9.flex = var10;
    var3.pages = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.debounce;
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.trackSearchTabSelected;
        var0 = {};
        var3 = arg0;
        var0.searchContext = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = 500;
    var3 = var8.bind(var9)(var6, var3);
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = 'function SearchTabsLayoutTsx1({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(true);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}';
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = 'function SearchTabsLayoutTsx2(){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(false);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(false);}';
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = {};
    var6 = 'function SearchTabsLayoutTsx3({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;if(isDragging.get()){var _disallowMemberListGe;(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}}';
    var3.code = var6;
    var _closure1_slot18 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun105186: for (var _fun105186_ip = 0;;) switch (_fun105186_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.searchContext;
                var _closure2_slot0 = var5;
                var3 = var1.visibleTabs;
                var _closure2_slot1 = var3;
                var2 = var1.visibleTabCounts;
                var _closure2_slot2 = var2;
                var11 = var1.width;
                var4 = undefined;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var6 = _closure1_slot14;
                var10 = var6.bind(var4)();
                var8 = _closure1_slot3;
                var7 = var8.useMemo;
                var6 = new Array(3);
                var6[0] = var2;
                var6[1] = var3;
                var6[2] = var5;
                var2 = function() { // Environment: var0
                    var0 = new Array(0);
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot1;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun105188: for (var _fun105188_ip = 0;;) switch (_fun105188_ip) {
                            case 0:
                                var7 = arg0;
                                var3 = _closure3_slot0;
                                var2 = var3.push;
                                var1 = {};
                                var8 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var0 = 12;
                                var5 = var6[var0];
                                var0 = undefined;
                                var8 = var8.bind(var0)(var5);
                                var5 = var8.getTabTitle;
                                var5 = var5.bind(var8)(var7);
                                var1.label = var5;
                                var1.id = var7;
                                var8 = _closure1_slot11;
                                var5 = _closure1_slot1;
                                var4 = 13;
                                var4 = var6[var4];
                                var5 = var5.bind(var0)(var4);
                                var4 = {};
                                var4.tab = var7;
                                var9 = _closure2_slot0;
                                var4.searchContext = var9;
                                var4 = var8.bind(var0)(var5, var4);
                                var1.page = var4;
                                var5 = _closure2_slot2;
                                var4 = null;
                                var8 = var4 == var5;
                                var5 = undefined;
                                if (var8) {
                                    _fun105188_ip = 134;
                                    continue _fun105188
                                }
                            case 126:
                                var6 = _closure2_slot2;
                                var5 = var6[var7];
                            case 134:
                                var6 = var4 != var5;
                                var4 = undefined;
                                if (!var6) {
                                    _fun105188_ip = 146;
                                    continue _fun105188
                                }
                            case 143:
                                var4 = var5;
                            case 146:
                                var1.count = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var13 = var7.bind(var8)(var2, var6);
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var6 = new Array(1);
                var6[0] = var5;
                var2 = function(arg0) { // Environment: var0
                    _fun105189: for (var _fun105189_ip = 0;;) switch (_fun105189_ip) {
                        case 0:
                            var7 = arg0;
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 14;
                            var1 = var5[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var1);
                            var3 = var4.setSelectedTab;
                            var8 = _closure2_slot0;
                            var3 = var3.bind(var4)(var8, var7);
                            var3 = _closure1_slot15;
                            var3 = var3.bind(var0)(var8);
                            var6 = _closure1_slot6;
                            var4 = var6.getState;
                            var3 = function(arg0) { // Environment: var3
                                var1 = arg0;
                                var0 = var1.getQueryString;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var6 = var4.bind(var6)(var8, var3);
                            var4 = _closure1_slot0;
                            var3 = 12;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.getSearchTabFetchId;
                            var3 = _closure1_slot8;
                            var6 = var4.bind(var5)(var8, var3, var6);
                            var5 = _closure1_slot5;
                            var3 = var5.getIsFetching;
                            var4 = var3.bind(var5)(var6);
                            var3 = var5.getIsInitialFetchComplete;
                            var5 = var3.bind(var5)(var6);
                            var6 = _closure1_slot7;
                            var3 = var6.has;
                            var3 = var3.bind(var6)(var7);
                            var3 = !var3;
                            if (var3) {
                                _fun105189_ip = 165;
                                continue _fun105189
                            }
                        case 162:
                            var3 = var5;
                        case 165:
                            if (var3) {
                                _fun105189_ip = 171;
                                continue _fun105189
                            }
                        case 168:
                            var3 = var4;
                        case 171:
                            if (var3) {
                                _fun105189_ip = 209;
                                continue _fun105189
                            }
                        case 174:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 15;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.fetchInitialMessagesDebounced;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                        case 209:
                            return var0;
                    }
                };
                var12 = var7.bind(var8)(var2, var6);
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var2 = var9[var2];
                var8 = var7.bind(var4)(var2);
                var6 = var8.useSearchSegmentedControlState;
                var2 = {};
                var2.items = var13;
                var2.visibleTabs = var3;
                var2.onSelectedTabChange = var12;
                var2.width = var11;
                var2 = var6.bind(var8)(var2);
                var22 = var2.segmentedControlState;
                var2 = var2.selectedTab;
                var _closure2_slot3 = var2;
                var8 = var22.setActiveIndex;
                var _closure2_slot4 = var8;
                var6 = {};
                var6.searchTabs = var3;
                var6.setActiveIndex = var8;
                var3 = function arg0() {
                    var1 = arg0;
                    var6 = var1.searchTabs;
                    var _closure3_slot0 = var6;
                    var2 = var1.setActiveIndex;
                    var _closure3_slot1 = var2;
                    var5 = _closure1_slot3;
                    var4 = var5.useRef;
                    var3 = function() { // Environment: var0
                        var3 = _closure3_slot0;
                        var2 = var3.findIndex;
                        var1 = function(arg0) { // Environment: var1
                            var0 = _closure1_slot9;
                            var1 = var0.MEDIA;
                            var0 = arg0;
                            var0 = var0 === var1;
                            return var0;
                        };
                        var2 = var2.bind(var3)(var1);
                        var1 = _closure3_slot1;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3);
                    var _closure3_slot2 = var3;
                    var5 = _closure1_slot3;
                    var4 = var5.useEffect;
                    var3 = new Array(2);
                    var3[0] = var6;
                    var3[1] = var2;
                    var2 = function() { // Environment: var0
                        var1 = _closure3_slot2;
                        var0 = function() { // Environment: var0
                            var3 = _closure3_slot0;
                            var2 = var3.findIndex;
                            var1 = function(arg0) { // Environment: var1
                                var0 = _closure1_slot9;
                                var1 = var0.MEDIA;
                                var0 = arg0;
                                var0 = var0 === var1;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = _closure3_slot1;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var1.current = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var4.bind(var5)(var2, var3);
                    var3 = _closure1_slot3;
                    var2 = var3.useCallback;
                    var1 = function() { // Environment: var0
                        var1 = _closure3_slot2;
                        var0 = var1.current;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = new Array(0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var12 = var3.bind(var4)(var6);
                var _closure2_slot5 = var12;
                var11 = _closure1_slot3;
                var6 = var11.useMemo;
                var3 = new Array(2);
                var3[0] = var12;
                var3[1] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot3;
                    var0.selectedTab = var2;
                    var1 = _closure2_slot5;
                    var0.selectMediaTab = var1;
                    return var0;
                };
                var13 = var6.bind(var11)(var2, var3);
                var6 = _closure1_slot3;
                var3 = var6.useContext;
                var2 = 17;
                var2 = var9[var2];
                var2 = var7.bind(var4)(var2);
                var2 = var2.SwipeForMemberListContext;
                var18 = var3.bind(var6)(var2);
                var _closure2_slot6 = var18;
                var16 = null;
                var3 = var18;
                if (!(var16 == var3)) {
                    _fun105186_ip = 332;
                    continue _fun105186
                }
            case 330:
                var3 = {};
            case 332:
                var2 = var3.gesture;
                _closure2_slot7 = var2;
                var14 = var3.disallowGesture;
                _closure2_slot8 = var14;
                var11 = var3.channelId;
                _closure2_slot9 = var11;
                var9 = var3.screenIndex;
                _closure2_slot10 = var9;
                var7 = _closure1_slot3;
                var6 = var7.useMemo;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun105199: for (var _fun105199_ip = 0;;) switch (_fun105199_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun105199_ip = 17;
                                continue _fun105199
                            }
                        case 13:
                            var1 = undefined;
                            return var1;
                        case 17:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 18;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var2 = var1.Gesture;
                            var1 = var2.Native;
                            var2 = var1.bind(var2)();
                            var1 = var2.simultaneousWithExternalGesture;
                            var0 = _closure2_slot7;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var19 = var6.bind(var7)(var2, var3);
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 19;
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.useSharedValue;
                var2 = false;
                var12 = var3.bind(var6)(var2);
                _closure2_slot11 = var12;
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var3 = function arg0() {
                    _fun105200: for (var _fun105200_ip = 0;;) switch (_fun105200_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.contentOffset;
                            var4 = _closure2_slot11;
                            var3 = var4.set;
                            var2 = true;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure2_slot8;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun105200_ip = 63;
                                continue _fun105200
                            }
                        case 38:
                            var2 = _closure2_slot8;
                            var1 = var2.set;
                            var3 = var0.x;
                            var0 = 0;
                            var0 = var3 > var0;
                            var0 = var1.bind(var2)(var0);
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = {};
                var2.isDragging = var12;
                var2.disallowMemberListGesture = var14;
                var3.__closure = var2;
                var2 = 766628353255.0;
                var3.__workletHash = var2;
                var2 = _closure1_slot16;
                var3.__initData = var2;
                var2 = new Array(2);
                var2[0] = var14;
                var2[1] = var12;
                var21 = var6.bind(var7)(var3, var2);
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var3 = function() {
                    _fun105201: for (var _fun105201_ip = 0;;) switch (_fun105201_ip) {
                        case 0:
                            var3 = _closure2_slot11;
                            var1 = var3.set;
                            var2 = false;
                            var1 = var1.bind(var3)(var2);
                            var3 = _closure2_slot8;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun105201_ip = 43;
                                continue _fun105201
                            }
                        case 29:
                            var1 = _closure2_slot8;
                            var0 = var1.set;
                            var0 = var0.bind(var1)(var2);
                        case 43:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = {};
                var2.isDragging = var12;
                var2.disallowMemberListGesture = var14;
                var3.__closure = var2;
                var2 = 5683301645106.0;
                var3.__workletHash = var2;
                var2 = _closure1_slot17;
                var3.__initData = var2;
                var2 = new Array(2);
                var2[0] = var14;
                var2[1] = var12;
                var20 = var6.bind(var7)(var3, var2);
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var3 = function arg0() {
                    _fun105202: for (var _fun105202_ip = 0;;) switch (_fun105202_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.contentOffset;
                            var3 = _closure2_slot11;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun105202_ip = 63;
                                continue _fun105202
                            }
                        case 28:
                            var3 = _closure2_slot8;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun105202_ip = 63;
                                continue _fun105202
                            }
                        case 38:
                            var2 = _closure2_slot8;
                            var1 = var2.set;
                            var3 = var0.x;
                            var0 = 0;
                            var0 = var3 > var0;
                            var0 = var1.bind(var2)(var0);
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = {};
                var2.isDragging = var12;
                var2.disallowMemberListGesture = var14;
                var3.__closure = var2;
                var2 = 229712012692.0;
                var3.__workletHash = var2;
                var2 = _closure1_slot18;
                var3.__initData = var2;
                var2 = new Array(2);
                var2[0] = var14;
                var2[1] = var12;
                var17 = var6.bind(var7)(var3, var2);
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var3 = new Array(1);
                var3[0] = var5;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var0 = var2.deleteState;
                    var5 = _closure2_slot0;
                    var0 = var0.bind(var2)(var5);
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 20;
                    var6 = var4[var3];
                    var0 = undefined;
                    var7 = var2.bind(var0)(var6);
                    var6 = var7.clearAllSearchMesssages;
                    var6 = var6.bind(var7)();
                    var3 = var4[var3];
                    var6 = var2.bind(var0)(var3);
                    var3 = var6.clearSearchRecentMessages;
                    var3 = var3.bind(var6)();
                    var3 = _closure1_slot0;
                    var1 = 12;
                    var1 = var4[var1];
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.getSearchContextId;
                    var3 = var1.bind(var3)(var5);
                    var1 = 21;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.cleanUp;
                    var1 = var1.bind(var2)(var3);
                    return var0;
                };
                var7 = var6.bind(var7)(var2, var3);
                _closure2_slot12 = var7;
                var12 = _closure1_slot3;
                var6 = var12.useEffect;
                var3 = new Array(2);
                var3[0] = var18;
                var3[1] = var7;
                var2 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot12;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    return var0;
                };
                var2 = var6.bind(var12)(var2, var3);
                var6 = _closure1_slot3;
                var3 = var6.useEffect;
                var2 = new Array(5);
                var2[0] = var11;
                var2[1] = var9;
                var2[2] = var8;
                var2[3] = var18;
                var2[4] = var7;
                var0 = function() { // Environment: var0
                    _fun105206: for (var _fun105206_ip = 0;;) switch (_fun105206_ip) {
                        case 0:
                            var4 = function arg0() {
                                _fun105207: for (var _fun105207_ip = 0;;) switch (_fun105207_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = var0.channelId;
                                        var3 = var0.screenIndex;
                                        var1 = _closure2_slot9;
                                        var1 = var2 === var1;
                                        if (!var1) {
                                            _fun105207_ip = 36;
                                            continue _fun105207
                                        }
                                    case 28:
                                        var2 = _closure2_slot10;
                                        var1 = var3 === var2;
                                    case 36:
                                        if (!var1) {
                                            _fun105207_ip = 66;
                                            continue _fun105207
                                        }
                                    case 39:
                                        var5 = _closure2_slot4;
                                        var1 = undefined;
                                        var4 = 0;
                                        var3 = false;
                                        var2 = true;
                                        var2 = var5.bind(var1)(var4, var3, var2);
                                        var0 = _closure2_slot12;
                                        var0 = var0.bind(var1)();
                                    case 66:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot0 = var4;
                            var2 = _closure2_slot6;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun105206_ip = 30;
                                continue _fun105206
                            }
                        case 26:
                            var1 = undefined;
                            return var1;
                        case 30:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 22;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var3);
                            var3 = var2.ComponentDispatch;
                            var2 = var3.subscribe;
                            var1 = _closure1_slot10;
                            var1 = var1.CHANNEL_DETAILS_HIDDEN;
                            var1 = var2.bind(var3)(var1, var4);
                            var0 = function() { // Environment: var0
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 22;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var4 = var2.ComponentDispatch;
                                var3 = var4.unsubscribe;
                                var1 = _closure1_slot10;
                                var2 = var1.CHANNEL_DETAILS_HIDDEN;
                                var1 = _closure3_slot0;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var0 = var3.bind(var6)(var0, var2);
                var0 = var22.items;
                var2 = var0.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun105186_ip = 1114;
                    continue _fun105186
                }
            case 805:
                var3 = _closure1_slot12;
                var2 = _closure1_slot13;
                var0 = {};
                var9 = _closure1_slot4;
                var6 = {};
                var7 = var10.controls;
                var6.style = var7;
                var12 = _closure1_slot11;
                var11 = _closure1_slot1;
                var23 = _closure1_slot2;
                var7 = 23;
                var7 = var23[var7];
                var8 = var11.bind(var4)(var7);
                var7 = {};
                var7.state = var22;
                var8 = var12.bind(var4)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var12 = _closure1_slot11;
                var8 = 24;
                var8 = var23[var8];
                var11 = var11.bind(var4)(var8);
                var8 = {};
                var8.state = var22;
                var8 = var12.bind(var4)(var11, var8);
                var7[1] = var8;
                var6.children = var7;
                var7 = var3.bind(var4)(var9, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var8 = _closure1_slot11;
                var7 = {};
                var10 = var10.pages;
                var7.style = var10;
                var12 = _closure1_slot11;
                var14 = _closure1_slot0;
                var10 = 13;
                var10 = var23[var10];
                var10 = var14.bind(var4)(var10);
                var10 = var10.SearchTabsPageContext;
                var11 = var10.Provider;
                var10 = {};
                var10.value = var13;
                var15 = _closure1_slot11;
                var13 = 25;
                var13 = var23[var13];
                var13 = var14.bind(var4)(var13);
                var14 = var13.SegmentedControlPages;
                var13 = {};
                var13.state = var22;
                var22 = var16 == var18;
                var13.bounces = var22;
                var13.nativeGesture = var19;
                var22 = var16 != var18;
                var19 = undefined;
                if (!var22) {
                    _fun105186_ip = 1033;
                    continue _fun105186
                }
            case 1030:
                var19 = var21;
            case 1033:
                var13.onBeginDragWorklet = var19;
                var21 = var16 != var18;
                var19 = undefined;
                if (!var21) {
                    _fun105186_ip = 1050;
                    continue _fun105186
                }
            case 1047:
                var19 = var20;
            case 1050:
                var13.onEndDragWorklet = var19;
                var18 = var16 != var18;
                var16 = undefined;
                if (!var18) {
                    _fun105186_ip = 1067;
                    continue _fun105186
                }
            case 1064:
                var16 = var17;
            case 1067:
                var13.onScrollWorklet = var16;
                var13 = var15.bind(var4)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7.children = var10;
                var7 = var8.bind(var4)(var9, var7);
                var6[1] = var7;
                var0.children = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun105186_ip = 1135;
                continue _fun105186;
            case 1114:
                var3 = _closure1_slot11;
                var2 = _closure1_slot20;
                var1 = {};
                var1.searchContext = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1135:
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot19 = var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/SearchTabsLayout.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.searchContext;
        var4 = var0.width;
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 26;
        var1 = var8[var1];
        var3 = undefined;
        var5 = var2.bind(var3)(var1);
        var1 = var5.useVisibleSearchTabs;
        var1 = var1.bind(var5)(var7);
        var6 = var1.visibleTabs;
        var5 = var1.visibleTabCounts;
        var1 = 27;
        var1 = var8[var1];
        var8 = var2.bind(var3)(var1);
        var2 = var8.useAutoTrackSearchTabCountsViewedAnalytics;
        var1 = {};
        var1.searchContext = var7;
        var1.visibleTabCounts = var5;
        var1.visibleTabs = var6;
        var1 = var2.bind(var8)(var1);
        var2 = _closure1_slot11;
        var1 = _closure1_slot19;
        var0 = {};
        var0.searchContext = var7;
        var0.visibleTabs = var6;
        var0.visibleTabCounts = var5;
        var0.width = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4226, 8978, 8914, 660, 33, 1297, 22, 8977, 13714, 1234, 8980, 13715, 8992, 11673, 13816, 13696, 4961, 3720, 8987, 8988, 1229, 13817, 13818, 7803, 13819, 13823, 2]);