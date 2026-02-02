// modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var16 = 1;
    var3 = var5[var16];
    var3 = var4.bind(var0)(var3);
    var15 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.deleteChannelDetailsSearchState;
    var _closure1_slot7 = var7;
    var7 = var3.useChannelDetailsSearchActiveSource;
    var _closure1_slot8 = var7;
    var3 = var3.useIsChannelDetailsSearchActive;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.CHANNEL_DETAILS_TOP_MARGIN;
    var13 = var3.DESCRIPTION_HORIZONTAL_MARGIN;
    var3 = var3.SPRING_CHANNEL_HEADER;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var11 = 7;
    var3 = var5[var11];
    var3 = var12.bind(var0)(var3);
    var3 = var3.spacing;
    var14 = var3.PX_8;
    var _closure1_slot13 = var14;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var19 = var15.absoluteFillObject;
    var20 = var9;
    var15 = copyDataProperties(var20, var19);
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var17 = var15.BACKGROUND_BASE_LOWER;
    var15 = 'backgroundColor';
    var9[var15] = var17;
    var15 = 'flex';
    var9[var15] = var16;
    var3.detailsContainer = var9;
    var9 = {};
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var9.marginHorizontal = var15;
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var9.gap = var15;
    var9.paddingTop = var14;
    var3.information = var9;
    var9 = {};
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var9.marginTop = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var9.marginBottom = var14;
    var3.linkedLobby = var9;
    var9 = {};
    var9.paddingHorizontal = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.paddingTop = var13;
    var3.topic = var9;
    var9 = {
        'flex': 1,
        'flexGrow': 1
    };
    var3.search = var9;
    var9 = {};
    var9.marginTop = var10;
    var10 = var5[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.marginBottom = var10;
    var3.searchLocked = var9;
    var9 = {};
    var10 = 10;
    var9.zIndex = var10;
    var3.autocompleteSuggestions = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var9.paddingBottom = var11;
    var9.zIndex = var10;
    var3.newHeader = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot14 = var3;
    var3 = {};
    var7 = "function ChannelDetailsTsx1(){const{withTiming,searchActiveSource,timingInstant,timingFast,isSearchActive,runOnJS,onSearchInactiveAnimationFinish,onSearchActiveAnimationStart}=this.__closure;return{top:withTiming(0,searchActiveSource==='initial'?timingInstant:timingFast,'respect-motion-settings',function(finished){if(finished&&!isSearchActive){runOnJS(onSearchInactiveAnimationFinish)();}else{runOnJS(onSearchActiveAnimationStart)();}})};}";
    var3.code = var7;
    var _closure1_slot15 = var3;
    var3 = {};
    var7 = 'function ChannelDetailsTsx2(finished){const{isSearchActive,runOnJS,onSearchInactiveAnimationFinish,onSearchActiveAnimationStart}=this.__closure;if(finished&&!isSearchActive){runOnJS(onSearchInactiveAnimationFinish)();}else{runOnJS(onSearchActiveAnimationStart)();}}';
    var3.code = var7;
    var _closure1_slot16 = var3;
    var3 = {};
    var7 = "function ChannelDetailsTsx3(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height!=null&&height>=0?withSpring(isSearchActive?0:height,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height}}):undefined};}";
    var3.code = var7;
    var _closure1_slot17 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun105032: for (var _fun105032_ip = 0;;) switch (_fun105032_ip) {
            case 0:
                var1 = arg0;
                var26 = var1.channelId;
                var _closure2_slot0 = var26;
                var7 = var1.isSearchLocked;
                var _closure2_slot1 = var7;
                var20 = var1.onBackPress;
                var8 = var1.componentWidth;
                var30 = var1.isShowing;
                var4 = undefined;
                if (!(var30 === var4)) {
                    _fun105032_ip = 50;
                    continue _fun105032
                }
            case 48:
                var30 = true;
            case 50:
                var _closure2_slot2 = var30;
                var1 = var1.onChannelDeleted;
                var _closure2_slot3 = var1;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var2 = _closure1_slot14;
                var17 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var2 = var6.useChannelDetailWidth;
                var15 = var2.bind(var6)(var8);
                var2 = 10;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var41 = var5.bind(var6)(var3, var2);
                _closure2_slot4 = var41;
                var19 = null;
                var2 = var19 == var41;
                var3 = undefined;
                if (var2) {
                    _fun105032_ip = 208;
                    continue _fun105032
                }
            case 203:
                var3 = var41.guild_id;
            case 208:
                var6 = _closure1_slot3;
                var5 = var6.useEffect;
                var2 = new Array(2);
                var2[0] = var41;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun105034: for (var _fun105034_ip = 0;;) switch (_fun105034_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var2 = null;
                            if (!(var2 == var1)) {
                                _fun105034_ip = 31;
                                continue _fun105034
                            }
                        case 13:
                            var1 = _closure2_slot3;
                            if (!(var2 != var1)) {
                                _fun105034_ip = 31;
                                continue _fun105034
                            }
                        case 21:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 31:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var1, var2);
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 11;
                var1 = var9[var1];
                var5 = var2.bind(var4)(var1);
                var1 = var5.useChannelDetailsSearchContext;
                var16 = var1.bind(var5)(var26, var3);
                _closure2_slot5 = var16;
                var1 = 12;
                var1 = var9[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useSearchSuggestionsGesture;
                var1 = var1.bind(var2)(var16);
                var8 = var1.gesture;
                var23 = var1.dismissed;
                var22 = var1.setDismissed;
                var24 = var1.onLayoutMeasure;
                var6 = _closure1_slot1;
                var1 = 13;
                var2 = var9[var1];
                var5 = var6.bind(var4)(var2);
                var2 = 14;
                var2 = var9[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.CHANNEL_DETAILS;
                var2 = var5.bind(var4)(var2);
                var5 = var2.analyticsLocations;
                var2 = var19 == var41;
                var25 = var3;
                var28 = undefined;
                if (var2) {
                    _fun105032_ip = 392;
                    continue _fun105032
                }
            case 382:
                var2 = var41.isArchivedThread;
                var28 = var2.bind(var41)();
            case 392:
                var2 = _closure1_slot9;
                var33 = var2.bind(var4)(var26);
                _closure2_slot6 = var33;
                var2 = _closure1_slot8;
                var14 = var2.bind(var4)(var26);
                _closure2_slot7 = var14;
                var6 = _closure1_slot3;
                var2 = var6.useRef;
                var27 = var2.bind(var6)(var19);
                _closure2_slot8 = var27;
                var3 = var6.useContext;
                var29 = _closure1_slot0;
                var31 = _closure1_slot2;
                var2 = 15;
                var2 = var31[var2];
                var2 = var29.bind(var4)(var2);
                var2 = var2.SwipeForMemberListContext;
                var2 = var3.bind(var6)(var2);
                _closure2_slot9 = var2;
                var3 = 16;
                var3 = var31[var3];
                var9 = var29.bind(var4)(var3);
                var3 = var9.useIsScreenReaderEnabled;
                var21 = var3.bind(var9)();
                var9 = _closure1_slot1;
                var3 = 17;
                var3 = var31[var3];
                var3 = var9.bind(var4)(var3);
                var18 = var3.bind(var4)();
                var3 = 18;
                var3 = var31[var3];
                var3 = var9.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var10 = var3.top;
                _closure2_slot10 = var10;
                var9 = var6.useMemo;
                var3 = new Array(2);
                var3[0] = var10;
                var3[1] = var2;
                var2 = function() { // Environment: var0
                    _fun105035: for (var _fun105035_ip = 0;;) switch (_fun105035_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 19;
                            var1 = var2[var1];
                            var2 = undefined;
                            var3 = var3.bind(var2)(var1);
                            var1 = var3.isAndroid;
                            var1 = var1.bind(var3)();
                            if (var1) {
                                _fun105035_ip = 87;
                                continue _fun105035
                            }
                        case 38:
                            var1 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 20;
                            var0 = var3[var0];
                            var1 = var1.bind(var2)(var0);
                            var0 = var1.isIpadOS;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun105035_ip = 87;
                                continue _fun105035
                            }
                        case 71:
                            var1 = _closure2_slot9;
                            var0 = null;
                            var1 = var0 != var1;
                            if (!var1) {
                                _fun105035_ip = 104;
                                continue _fun105035
                            }
                        case 87:
                            var1 = {};
                            var2 = _closure2_slot10;
                            var1.paddingTop = var2;
                            var0 = var1;
                        case 104:
                            return var0;
                    }
                };
                var13 = var9.bind(var6)(var2, var3);
                var9 = var6.useLayoutEffect;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.trackAppUIViewed;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = new Array(0);
                var2 = var9.bind(var6)(var3, var2);
                var9 = var6.useEffect;
                var3 = new Array(2);
                var3[0] = var26;
                var3[1] = var7;
                var2 = function() { // Environment: var0
                    _fun105037: for (var _fun105037_ip = 0;;) switch (_fun105037_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (!var0) {
                                _fun105037_ip = 34;
                                continue _fun105037
                            }
                        case 10:
                            var0 = global;
                            var2 = var0.setTimeout;
                            var1 = undefined;
                            var0 = function() { // Environment: var0
                                _fun105038: for (var _fun105038_ip = 0;;) switch (_fun105038_ip) {
                                    case 0:
                                        var0 = _closure2_slot8;
                                        var1 = null;
                                        var4 = var1 == var0;
                                        var0 = undefined;
                                        if (var4) {
                                            _fun105038_ip = 46;
                                            continue _fun105038
                                        }
                                    case 18:
                                        var2 = _closure2_slot8;
                                        var2 = var2.current;
                                        var1 = var1 == var2;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun105038_ip = 46;
                                            continue _fun105038
                                        }
                                    case 36:
                                        var1 = var2.focus;
                                        var0 = var1.bind(var2)();
                                    case 46:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var1)(var0);
                        case 34:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var9.bind(var6)(var2, var3);
                var9 = var6.useCallback;
                var3 = new Array(1);
                var3[0] = var16;
                var2 = function() { // Environment: var0
                    _fun105039: for (var _fun105039_ip = 0;;) switch (_fun105039_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var6 = null;
                            var2 = var6 == var0;
                            var0 = undefined;
                            var4 = undefined;
                            if (var2) {
                                _fun105039_ip = 38;
                                continue _fun105039
                            }
                        case 22:
                            var5 = _closure2_slot8;
                            var5 = var5.current;
                            var2 = var6 == var5;
                            var4 = var5;
                        case 38:
                            if (var2) {
                                _fun105039_ip = 51;
                                continue _fun105039
                            }
                        case 41:
                            var2 = var4.blur;
                            var2 = var2.bind(var4)();
                        case 51:
                            var7 = _closure1_slot5;
                            var6 = var7.getState;
                            var5 = _closure2_slot5;
                            var4 = function(arg0) { // Environment: var3
                                var1 = arg0;
                                var0 = var1.isInitialSearchQuery;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var4 = var6.bind(var7)(var5, var4);
                            if (var4) {
                                _fun105039_ip = 146;
                                continue _fun105039
                            }
                        case 84:
                            var6 = _closure1_slot5;
                            var5 = var6.setState;
                            var4 = _closure2_slot5;
                            var3 = function(arg0) { // Environment: var3
                                var1 = arg0;
                                var0 = var1.reset;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var3 = var5.bind(var6)(var4, var3);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 22;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.fetchInitialMessages;
                            var1 = _closure2_slot5;
                            var1 = var2.bind(var3)(var1);
                        case 146:
                            return var0;
                    }
                };
                var37 = var9.bind(var6)(var2, var3);
                _closure2_slot11 = var37;
                var9 = var6.useCallback;
                var3 = function() { // Environment: var0
                    _fun105042: for (var _fun105042_ip = 0;;) switch (_fun105042_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var4 = null;
                            var1 = var4 == var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (var1) {
                                _fun105042_ip = 36;
                                continue _fun105042
                            }
                        case 20:
                            var3 = _closure2_slot8;
                            var3 = var3.current;
                            var1 = var4 == var3;
                            var2 = var3;
                        case 36:
                            if (var1) {
                                _fun105042_ip = 49;
                                continue _fun105042
                            }
                        case 39:
                            var1 = var2.focus;
                            var1 = var1.bind(var2)();
                        case 49:
                            return var0;
                    }
                };
                var2 = new Array(0);
                var11 = var9.bind(var6)(var3, var2);
                _closure2_slot12 = var11;
                var34 = 23;
                var2 = var31[var34];
                var3 = var29.bind(var4)(var2);
                var2 = var3.useSharedValue;
                var35 = var2.bind(var3)(var4);
                _closure2_slot13 = var35;
                var9 = var6.useCallback;
                var3 = new Array(1);
                var3[0] = var35;
                var2 = function(arg0) { // Environment: var0
                    _fun105043: for (var _fun105043_ip = 0;;) switch (_fun105043_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var2 = var0.height;
                            var0 = _closure1_slot13;
                            if (!(!(var2 <= var0))) {
                                _fun105043_ip = 110;
                                continue _fun105043
                            }
                        case 31:
                            var3 = _closure2_slot13;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            var1 = null;
                            var1 = var1 != var3;
                            if (!var1) {
                                _fun105043_ip = 93;
                                continue _fun105043
                            }
                        case 56:
                            var4 = global;
                            var5 = var4.Math;
                            var4 = var5.abs;
                            var3 = var2 - var3;
                            var4 = var4.bind(var5)(var3);
                            var3 = 0.001;
                            var1 = var4 < var3;
                        case 93:
                            if (var1) {
                                _fun105043_ip = 110;
                                continue _fun105043
                            }
                        case 96:
                            var1 = _closure2_slot13;
                            var0 = var1.set;
                            var0 = var0.bind(var1)(var2);
                        case 110:
                            var0 = undefined;
                            return var0;
                    }
                };
                var36 = var9.bind(var6)(var2, var3);
                var2 = var31[var34];
                var9 = var29.bind(var4)(var2);
                var3 = var9.useAnimatedStyle;
                var2 = function() {
                    _fun105044: for (var _fun105044_ip = 0;;) switch (_fun105044_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 24;
                            var2 = var4[var2];
                            var10 = undefined;
                            var6 = var3.bind(var10)(var2);
                            var5 = var6.withTiming;
                            var3 = _closure2_slot7;
                            var2 = 'initial';
                            if (!(var2 !== var3)) {
                                _fun105044_ip = 75;
                                continue _fun105044
                            }
                        case 47:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 26;
                            var2 = var4[var2];
                            var2 = var3.bind(var10)(var2);
                            var4 = var2.timingFast;
                            _fun105044_ip = 101;
                            continue _fun105044;
                        case 75:
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 25;
                            var2 = var8[var2];
                            var2 = var3.bind(var10)(var2);
                            var4 = var2.timingInstant;
                        case 101:
                            var3 = function arg0() {
                                _fun105045: for (var _fun105045_ip = 0;;) switch (_fun105045_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun105045_ip = 61;
                                            continue _fun105045
                                        }
                                    case 6:
                                        var1 = _closure2_slot6;
                                        if (var1) {
                                            _fun105045_ip = 61;
                                            continue _fun105045
                                        }
                                    case 16:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 23;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot11;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                        _fun105045_ip = 107;
                                        continue _fun105045;
                                    case 61:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 23;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot12;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 107:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = {};
                            var8 = _closure2_slot6;
                            var2.isSearchActive = var8;
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var8 = 23;
                            var8 = var11[var8];
                            var8 = var9.bind(var10)(var8);
                            var8 = var8.runOnJS;
                            var2.runOnJS = var8;
                            var8 = _closure2_slot11;
                            var2.onSearchInactiveAnimationFinish = var8;
                            var7 = _closure2_slot12;
                            var2.onSearchActiveAnimationStart = var7;
                            var3.__closure = var2;
                            var2 = 3100817967039.0;
                            var3.__workletHash = var2;
                            var1 = _closure1_slot16;
                            var3.__initData = var1;
                            var15 = 0;
                            var13 = 'respect-motion-settings';
                            var16 = var6;
                            var14 = var4;
                            var12 = var3;
                            var1 = var16[var5](var15, var14, var13, var12, var11);
                            var0.top = var1;
                            return var0;
                    }
                };
                var10 = {};
                var32 = 24;
                var38 = var31[var32];
                var38 = var29.bind(var4)(var38);
                var38 = var38.withTiming;
                var10.withTiming = var38;
                var10.searchActiveSource = var14;
                var14 = 25;
                var14 = var31[var14];
                var14 = var29.bind(var4)(var14);
                var14 = var14.timingInstant;
                var10.timingInstant = var14;
                var14 = 26;
                var38 = var31[var14];
                var38 = var29.bind(var4)(var38);
                var38 = var38.timingFast;
                var10.timingFast = var38;
                var10.isSearchActive = var33;
                var38 = var31[var34];
                var38 = var29.bind(var4)(var38);
                var38 = var38.runOnJS;
                var10.runOnJS = var38;
                var10.onSearchInactiveAnimationFinish = var37;
                var10.onSearchActiveAnimationStart = var11;
                var2.__closure = var10;
                var10 = 10079571864601.0;
                var2.__workletHash = var10;
                var10 = _closure1_slot15;
                var2.__initData = var10;
                var11 = var3.bind(var9)(var2);
                var2 = var31[var34];
                var9 = var29.bind(var4)(var2);
                var3 = var9.useAnimatedStyle;
                var2 = function() {
                    _fun105046: for (var _fun105046_ip = 0;;) switch (_fun105046_ip) {
                        case 0:
                            var1 = _closure2_slot13;
                            var0 = var1.get;
                            var6 = var0.bind(var1)();
                            var0 = {};
                            var1 = 'relative';
                            var0.position = var1;
                            var3 = _closure2_slot6;
                            var1 = 'auto';
                            if (!var3) {
                                _fun105046_ip = 41;
                                continue _fun105046
                            }
                        case 37:
                            var1 = 'none';
                        case 41:
                            var0.pointerEvents = var1;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 24;
                            var1 = var4[var1];
                            var5 = undefined;
                            var9 = var3.bind(var5)(var1);
                            var8 = var9.withTiming;
                            var1 = _closure2_slot6;
                            var4 = 1;
                            if (!var1) {
                                _fun105046_ip = 88;
                                continue _fun105046
                            }
                        case 86:
                            var4 = 0;
                        case 88:
                            var3 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = 26;
                            var1 = var10[var1];
                            var1 = var3.bind(var5)(var1);
                            var3 = var1.timingFast;
                            var1 = 'animate-always';
                            var1 = var8.bind(var9)(var4, var3, var1);
                            var0.opacity = var1;
                            var1 = null;
                            var3 = var1 != var6;
                            var1 = undefined;
                            if (!var3) {
                                _fun105046_ip = 228;
                                continue _fun105046
                            }
                        case 142:
                            var8 = 0;
                            var3 = var6 >= var8;
                            var1 = undefined;
                            if (!var3) {
                                _fun105046_ip = 228;
                                continue _fun105046
                            }
                        case 153:
                            var4 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 27;
                            var3 = var9[var3];
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.withSpring;
                            var2 = _closure2_slot6;
                            var3 = 0;
                            if (var2) {
                                _fun105046_ip = 190;
                                continue _fun105046
                            }
                        case 187:
                            var3 = var6;
                        case 190:
                            var2 = {};
                            var12 = _closure1_slot10;
                            var13 = var2;
                            var7 = copyDataProperties(var13, var12);
                            var7 = {};
                            var7.min = var8;
                            var7.max = var6;
                            var6 = 'clamp';
                            var2[var6] = var7;
                            var1 = var4.bind(var5)(var3, var2);
                        case 228:
                            var0.height = var1;
                            return var0;
                    }
                };
                var10 = {};
                var10.headerHeight = var35;
                var10.isSearchActive = var33;
                var32 = var31[var32];
                var32 = var29.bind(var4)(var32);
                var32 = var32.withTiming;
                var10.withTiming = var32;
                var14 = var31[var14];
                var14 = var29.bind(var4)(var14);
                var14 = var14.timingFast;
                var10.timingFast = var14;
                var14 = 27;
                var14 = var31[var14];
                var14 = var29.bind(var4)(var14);
                var14 = var14.withSpring;
                var10.withSpring = var14;
                var14 = _closure1_slot10;
                var10.SPRING_CHANNEL_HEADER = var14;
                var2.__closure = var10;
                var10 = 13749753414902.0;
                var2.__workletHash = var10;
                var10 = _closure1_slot17;
                var2.__initData = var10;
                var35 = var3.bind(var9)(var2);
                var9 = var6.useEffect;
                var3 = new Array(1);
                var3[0] = var16;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.initializeAutocomplete;
                    var1 = _closure2_slot5;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var9.bind(var6)(var2, var3);
                var9 = var6.useEffect;
                var3 = new Array(2);
                var3[0] = var16;
                var3[1] = var30;
                var2 = function() { // Environment: var0
                    _fun105048: for (var _fun105048_ip = 0;;) switch (_fun105048_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun105048_ip = 74;
                                continue _fun105048
                            }
                        case 10:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 28;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.clearAllSearchMesssages;
                            var2 = var2.bind(var3)();
                            var3 = _closure1_slot5;
                            var2 = var3.setState;
                            var1 = _closure2_slot5;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = var1.reset;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1, var0);
                        case 74:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var9.bind(var6)(var2, var3);
                var9 = var6.useEffect;
                var3 = new Array(2);
                var3[0] = var26;
                var3[1] = var16;
                var2 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 28;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var1);
                        var1 = var3.clearAllSearchMesssages;
                        var1 = var1.bind(var3)();
                        var4 = _closure1_slot7;
                        var3 = _closure2_slot0;
                        var3 = var4.bind(var0)(var3);
                        var3 = _closure1_slot5;
                        var2 = var3.deleteState;
                        var1 = _closure2_slot5;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    return var0;
                };
                var2 = var9.bind(var6)(var2, var3);
                var3 = var6.useEffect;
                var2 = new Array(1);
                var2[0] = var26;
                var0 = function() { // Environment: var0
                    _fun105052: for (var _fun105052_ip = 0;;) switch (_fun105052_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 29;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.getBestActiveInputForChannelId;
                            var1 = _closure2_slot0;
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun105052_ip = 59;
                                continue _fun105052
                            }
                        case 49:
                            var1 = var2.closeCustomKeyboard;
                            var1 = var1.bind(var2)();
                        case 59:
                            return var0;
                    }
                };
                var0 = var3.bind(var6)(var0, var2);
                var2 = var19 == var41;
                var0 = null;
                if (var2) {
                    _fun105032_ip = 2023;
                    continue _fun105032
                }
            case 1165:
                var3 = _closure1_slot11;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = var9[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var5;
                var5 = 30;
                var5 = var9[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.GestureDetector;
                var5 = {};
                var5.gesture = var8;
                var10 = _closure1_slot12;
                if (var7) {
                    _fun105032_ip = 1745;
                    continue _fun105032
                }
            case 1233:
                var38 = _closure1_slot1;
                var39 = _closure1_slot2;
                var7 = var39[var34];
                var7 = var38.bind(var4)(var7);
                var8 = var7.View;
                var7 = {};
                var14 = var17.detailsContainer;
                var9 = new Array(3);
                var9[0] = var14;
                var9[1] = var13;
                var9[2] = var11;
                var7.style = var9;
                var14 = true;
                var7.accessibilityViewIsModal = var14;
                var7.onAccessibilityEscape = var20;
                var11 = _closure1_slot4;
                var9 = {};
                var29 = var17.newHeader;
                var9.style = var29;
                var33 = _closure1_slot11;
                var29 = 33;
                var29 = var39[var29];
                var31 = var38.bind(var4)(var29);
                var29 = {};
                var29.ref = var27;
                var29.channel = var41;
                var29.onBackPress = var20;
                var29.onSuggestionsLayoutMeasure = var24;
                var29.suggestionsDismissed = var23;
                var29.setSuggestionsDismissed = var22;
                var29.componentWidth = var15;
                var31 = var33.bind(var4)(var31, var29);
                var29 = new Array(2);
                var29[0] = var31;
                var31 = var39[var34];
                var31 = var38.bind(var4)(var31);
                var32 = var31.View;
                var31 = {};
                var31.style = var35;
                var34 = var39[var34];
                var34 = var38.bind(var4)(var34);
                var35 = var34.View;
                var34 = {};
                var37 = var17.information;
                var34.style = var37;
                var34.onLayout = var36;
                var36 = 34;
                var36 = var39[var36];
                var37 = var38.bind(var4)(var36);
                var36 = {};
                var36.channel = var41;
                var37 = var33.bind(var4)(var37, var36);
                var36 = new Array(3);
                var36[0] = var37;
                var37 = 35;
                var37 = var39[var37];
                var38 = var38.bind(var4)(var37);
                var37 = {};
                var37.channel = var41;
                var39 = var17.linkedLobby;
                var37.containerStyle = var39;
                var37 = var33.bind(var4)(var38, var37);
                var36[1] = var37;
                var37 = var41.isPrivate;
                var38 = var37.bind(var41)();
                var37 = null;
                if (var38) {
                    _fun105032_ip = 1557;
                    continue _fun105032
                }
            case 1513:
                var40 = _closure1_slot11;
                var39 = _closure1_slot1;
                var42 = _closure1_slot2;
                var38 = 36;
                var38 = var42[var38];
                var39 = var39.bind(var4)(var38);
                var38 = {};
                var38.channel = var41;
                var41 = 'left';
                var38.textAlign = var41;
                var37 = var40.bind(var4)(var39, var38);
            case 1557:
                var36[2] = var37;
                var34.children = var36;
                var34 = var10.bind(var4)(var35, var34);
                var31.children = var34;
                var31 = var33.bind(var4)(var32, var31);
                var29[1] = var31;
                var9.children = var29;
                var11 = var10.bind(var4)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var11 = null;
                if (!(var14 !== var28)) {
                    _fun105032_ip = 1726;
                    continue _fun105032
                }
            case 1609:
                var29 = _closure1_slot11;
                var28 = _closure1_slot0;
                var34 = _closure1_slot2;
                var14 = 37;
                var14 = var34[var14];
                var14 = var28.bind(var4)(var14);
                var28 = var14.Freeze;
                var14 = {};
                var30 = !var30;
                var14.freeze = var30;
                var33 = _closure1_slot1;
                var30 = 38;
                var30 = var34[var30];
                var31 = var33.bind(var4)(var30);
                var30 = {};
                var32 = var17.search;
                var30.style = var32;
                var32 = 32;
                var32 = var34[var32];
                var33 = var33.bind(var4)(var32);
                var32 = {};
                var32.searchContext = var16;
                var32.width = var15;
                var32 = var29.bind(var4)(var33, var32);
                var30.children = var32;
                var30 = var29.bind(var4)(var31, var30);
                var14.children = var30;
                var11 = var29.bind(var4)(var28, var14);
            case 1726:
                var9[1] = var11;
                var7.children = var9;
                var7 = var10.bind(var4)(var8, var7);
                _fun105032_ip = 2003;
                continue _fun105032;
            case 1745:
                var9 = _closure1_slot4;
                var8 = {};
                var14 = var17.detailsContainer;
                var11 = new Array(2);
                var11[0] = var14;
                var11[1] = var13;
                var8.style = var11;
                var11 = true;
                var8.accessibilityViewIsModal = var11;
                var8.onAccessibilityEscape = var20;
                var13 = _closure1_slot11;
                var11 = {};
                var28 = var17.searchLocked;
                var14 = new Array(2);
                var14[0] = var28;
                var17 = var17.autocompleteSuggestions;
                var14[1] = var17;
                var11.style = var14;
                var17 = _closure1_slot1;
                var28 = _closure1_slot2;
                var14 = 31;
                var14 = var28[var14];
                var17 = var17.bind(var4)(var14);
                var14 = {};
                var14.ref = var27;
                var14.channelId = var26;
                var14.guildId = var25;
                var14.onSuggestionsLayoutMesure = var24;
                var14.onBackPress = var20;
                var14.suggestionsDismissed = var23;
                var14.setSuggestionsDismissed = var22;
                if (var18) {
                    _fun105032_ip = 1879;
                    continue _fun105032
                }
            case 1876:
                var18 = var21;
            case 1879:
                if (var18) {
                    _fun105032_ip = 1912;
                    continue _fun105032
                }
            case 1882:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var21 = 19;
                var21 = var23[var21];
                var22 = var22.bind(var4)(var21);
                var21 = var22.isAndroid;
                var18 = var21.bind(var22)();
            case 1912:
                if (!var18) {
                    _fun105032_ip = 1919;
                    continue _fun105032
                }
            case 1915:
                var18 = var19 != var20;
            case 1919:
                var14.showBackButton = var18;
                var14 = var13.bind(var4)(var17, var14);
                var11.children = var14;
                var13 = var13.bind(var4)(var9, var11);
                var11 = new Array(2);
                var11[0] = var13;
                var14 = _closure1_slot11;
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 32;
                var12 = var17[var12];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var12.searchContext = var16;
                var12.width = var15;
                var12 = var14.bind(var4)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var7 = var10.bind(var4)(var9, var8);
            case 2003:
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 2023:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 39;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8927, 1372, 8861, 8949, 33, 671, 1297, 13660, 566, 8925, 13661, 5690, 5543, 13658, 4031, 7649, 1568, 478, 1309, 4330, 11630, 3681, 4058, 4846, 4846, 4042, 8936, 3679, 4926, 13662, 13674, 13788, 13790, 13791, 13792, 4002, 13604, 2]);