// modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.items;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.id;
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = '-';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun106877: for (var _fun106877_ip = 0;;) switch (_fun106877_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.state;
                var _closure2_slot0 = var10;
                var2 = var0.transitionState;
                var _closure2_slot1 = var2;
                var13 = var0.cleanUp;
                var _closure2_slot2 = var13;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 4;
                var6 = var5[var0];
                var7 = var8.bind(var3)(var6);
                var6 = var7.useSharedValue;
                var14 = 5;
                var5 = var5[var14];
                var5 = var8.bind(var3)(var5);
                var5 = var5.TransitionStates;
                var8 = var5.MOUNTED;
                var5 = 0;
                if (!(var2 === var8)) {
                    _fun106877_ip = 106;
                    continue _fun106877
                }
            case 103:
                var5 = 1;
            case 106:
                var12 = var6.bind(var7)(var5);
                _closure2_slot3 = var12;
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = var11[var0];
                var8 = var5.bind(var3)(var6);
                var7 = var8.useAnimatedStyle;
                var6 = function() {
                    _fun106878: for (var _fun106878_ip = 0;;) switch (_fun106878_ip) {
                        case 0:
                            var0 = {};
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var1 = 6;
                            var1 = var12[var1];
                            var10 = undefined;
                            var7 = var11.bind(var10)(var1);
                            var6 = var7.withSpring;
                            var4 = _closure2_slot3;
                            var3 = var4.get;
                            var5 = var3.bind(var4)();
                            var3 = 7;
                            var3 = var12[var3];
                            var3 = var11.bind(var10)(var3);
                            var15 = var3.springStandard;
                            var3 = function arg0() {
                                _fun106879: for (var _fun106879_ip = 0;;) switch (_fun106879_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun106879_ip = 54;
                                            continue _fun106879
                                        }
                                    case 6:
                                        var2 = _closure2_slot1;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 5;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3);
                                        var1 = var1.TransitionStates;
                                        var1 = var1.YEETED;
                                        var0 = var2 === var1;
                                    case 54:
                                        if (!var0) {
                                            _fun106879_ip = 103;
                                            continue _fun106879
                                        }
                                    case 57:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 4;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot2;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 103:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = {};
                            var9 = _closure2_slot1;
                            var8.transitionState = var9;
                            var9 = 5;
                            var9 = var12[var9];
                            var9 = var11.bind(var10)(var9);
                            var9 = var9.TransitionStates;
                            var8.TransitionStates = var9;
                            var9 = 4;
                            var9 = var12[var9];
                            var9 = var11.bind(var10)(var9);
                            var9 = var9.runOnJS;
                            var8.runOnJS = var9;
                            var9 = _closure2_slot2;
                            var8.cleanUp = var9;
                            var3.__closure = var8;
                            var8 = 15209468679721.0;
                            var3.__workletHash = var8;
                            var2 = _closure1_slot6;
                            var3.__initData = var2;
                            var14 = 'respect-motion-settings';
                            var17 = var7;
                            var16 = var5;
                            var13 = var3;
                            var2 = var17[var6](var16, var15, var14, var13, var12);
                            var0.opacity = var2;
                            var2 = _closure2_slot3;
                            var1 = var2.get;
                            var3 = var1.bind(var2)();
                            var1 = 'absolute';
                            var2 = 1;
                            if (!(var2 === var3)) {
                                _fun106878_ip = 222;
                                continue _fun106878
                            }
                        case 218:
                            var1 = 'relative';
                        case 222:
                            var0.position = var1;
                            return var0;
                    }
                };
                var9 = {};
                var15 = 6;
                var15 = var11[var15];
                var15 = var5.bind(var3)(var15);
                var15 = var15.withSpring;
                var9.withSpring = var15;
                var9.opacity = var12;
                var15 = 7;
                var15 = var11[var15];
                var15 = var5.bind(var3)(var15);
                var15 = var15.springStandard;
                var9.springStandard = var15;
                var9.transitionState = var2;
                var14 = var11[var14];
                var14 = var5.bind(var3)(var14);
                var14 = var14.TransitionStates;
                var9.TransitionStates = var14;
                var14 = var11[var0];
                var14 = var5.bind(var3)(var14);
                var14 = var14.runOnJS;
                var9.runOnJS = var14;
                var9.cleanUp = var13;
                var6.__closure = var9;
                var9 = 10740262883803.0;
                var6.__workletHash = var9;
                var9 = _closure1_slot5;
                var6.__initData = var9;
                var6 = var7.bind(var8)(var6);
                var9 = _closure1_slot3;
                var8 = var9.useEffect;
                var7 = new Array(2);
                var7[0] = var12;
                var7[1] = var2;
                var2 = function() { // Environment: var1
                    _fun106880: for (var _fun106880_ip = 0;;) switch (_fun106880_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var2 = var3.set;
                            var5 = _closure2_slot1;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.TransitionStates;
                            var4 = var1.YEETED;
                            var1 = 1;
                            if (!(var5 === var4)) {
                                _fun106880_ip = 62;
                                continue _fun106880
                            }
                        case 60:
                            var1 = 0;
                        case 62:
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var2 = var8.bind(var9)(var2, var7);
                var2 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.SearchResultExactCountEnabled;
                    var2 = var3.useSetting;
                    var4 = var2.bind(var3)();
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot3;
                    var2 = var3.useCallback;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function(arg0) { // Environment: var0
                        _fun106882: for (var _fun106882_ip = 0;;) switch (_fun106882_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = _closure3_slot0;
                                if (var0) {
                                    _fun106882_ip = 90;
                                    continue _fun106882
                                }
                            case 13:
                                var2 = 1000;
                                if (!(var3 > var2)) {
                                    _fun106882_ip = 90;
                                    continue _fun106882
                                }
                            case 23:
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 3;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var4.bind(var0)(var1);
                                var0 = var1.defaultCountFormatter;
                                var4 = var0.bind(var1)(var2);
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var2 = var0.concat;
                                var1 = '(';
                                var0 = '+)';
                                var0 = var2.bind(var1)(var4, var0);
                                _fun106882_ip = 153;
                                continue _fun106882;
                            case 90:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 3;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var1 = var2.defaultCountFormatter;
                                var4 = var1.bind(var2)(var3);
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var3 = var1.concat;
                                var2 = '(';
                                var1 = ')';
                                var0 = var3.bind(var2)(var4, var1);
                            case 153:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var7 = var2.bind(var3)();
                var9 = _closure1_slot3;
                var8 = var9.useContext;
                var2 = 8;
                var2 = var11[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.SwipeForMemberListContext;
                var9 = var8.bind(var9)(var2);
                _closure2_slot4 = var9;
                var13 = _closure1_slot3;
                var12 = var13.useCallback;
                var8 = function() {
                    _fun106883: for (var _fun106883_ip = 0;;) switch (_fun106883_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun106883_ip = 35;
                                continue _fun106883
                            }
                        case 13:
                            var0 = _closure2_slot4;
                            var2 = var0.disallowGesture;
                            var1 = var2.set;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                        case 35:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = {};
                var2.swipeForMemberListContext = var9;
                var8.__closure = var2;
                var2 = 5080152010224.0;
                var8.__workletHash = var2;
                var2 = _closure1_slot7;
                var8.__initData = var2;
                var2 = new Array(1);
                var2[0] = var9;
                var8 = var12.bind(var13)(var8, var2);
                var2 = var11[var0];
                var13 = var5.bind(var3)(var2);
                var12 = var13.useAnimatedReaction;
                var2 = function() {
                    var0 = _closure2_slot0;
                    var1 = var0.scrollOffset;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var14 = {};
                var14.state = var10;
                var2.__closure = var14;
                var14 = 7791091456487.0;
                var2.__workletHash = var14;
                var14 = _closure1_slot8;
                var2.__initData = var14;
                var1 = function arg0, arg1() {
                    _fun106885: for (var _fun106885_ip = 0;;) switch (_fun106885_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            if (!(var2 !== var0)) {
                                _fun106885_ip = 43;
                                continue _fun106885
                            }
                        case 10:
                            var3 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun106885_ip = 43;
                                continue _fun106885
                            }
                        case 23:
                            var0 = _closure2_slot4;
                            var1 = var0.disallowGesture;
                            var0 = var1.set;
                            var0 = var0.bind(var1)(var2);
                        case 43:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = {};
                var14.swipeForMemberListContext = var9;
                var1.__closure = var14;
                var14 = 15386779064911.0;
                var1.__workletHash = var14;
                var14 = _closure1_slot9;
                var1.__initData = var14;
                var1 = var12.bind(var13)(var2, var1);
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var0.style = var6;
                var6 = _closure1_slot4;
                var4 = 9;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Tabs;
                var4 = {};
                var4.state = var10;
                var10 = false;
                var4.grow = var10;
                var4.formatCount = var7;
                var7 = null;
                var11 = var7 == var9;
                var10 = undefined;
                if (var11) {
                    _fun106877_ip = 628;
                    continue _fun106877
                }
            case 622:
                var10 = var9.gesture;
            case 628:
                var4.simultaneousHandlers = var10;
                var9 = var7 != var9;
                var7 = undefined;
                if (!var9) {
                    _fun106877_ip = 645;
                    continue _fun106877
                }
            case 642:
                var7 = var8;
            case 645:
                var4.onEndDrag = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        var4 = _closure1_slot4;
        var3 = _closure1_slot11;
        var2 = {};
        var0 = arg1;
        var2.state = var0;
        var0 = arg2;
        var2.transitionState = var0;
        var0 = arg3;
        var2.cleanUp = var0;
        var1 = undefined;
        var0 = arg0;
        var0 = var4.bind(var1)(var3, var2, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = "function SearchTabsTransitionGroupTsx1(){const{withSpring,opacity,springStandard,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}),position:opacity.get()===1?'relative':'absolute'};}";
    var3.code = var6;
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'function SearchTabsTransitionGroupTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function SearchTabsTransitionGroupTsx3(){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function SearchTabsTransitionGroupTsx4(){const{state}=this.__closure;return state.scrollOffset.get()>0;}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function SearchTabsTransitionGroupTsx5(isOffsetFromStart,prevIsOffsetFromStart){const{swipeForMemberListContext}=this.__closure;if(isOffsetFromStart!==prevIsOffsetFromStart){var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(isOffsetFromStart);}}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.state;
        var3 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 5;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.TransitionGroup;
        var0 = {};
        var5 = new Array(1);
        var5[0] = var6;
        var0.items = var5;
        var5 = _closure1_slot10;
        var0.getItemKey = var5;
        var4 = _closure1_slot12;
        var0.renderItem = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1348, 7801, 3720, 4028, 4081, 4087, 13696, 7801, 2]);