// modules/guild_sidebar/native/PremiumGuildSubscriptionPromptTooltip.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var6 = var7.create;
    var3 = {};
    var9 = 16;
    var8 = {
        'marginTop': 8,
        'marginLeft': 190,
        'top': 2,
        'position': 'relative',
        'borderTopWidth': 0,
        'borderRightWidth': 0,
        'borderBottomWidth': 16,
        'borderLeftWidth': 16
    };
    var3.arrow = var8;
    var8 = {};
    var11 = 173;
    var8.marginLeft = var11;
    var3.shortWidthArrow = var8;
    var8 = {};
    var8.padding = var9;
    var3.tooltip = var8;
    var8 = {
        'position': 'absolute',
        'width': 240,
        'zIndex': 10,
        'right': 8,
        'top': 4294967286
    };
    var3.tooltipContainer = var8;
    var8 = {};
    var9 = 200;
    var8.width = var9;
    var3.shortWidthTooltipContainer = var8;
    var8 = {};
    var9 = 'center';
    var8.textAlign = var9;
    var3.tooltipText = var8;
    var8 = {
        'paddingVertical': 0,
        'marginTop': 14,
        'alignSelf': 'stretch'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.PRIMARY_100;
    var8.backgroundColor = var11;
    var3.closeButton = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.BRAND_500;
    var8.color = var9;
    var3.closeButtonText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function PremiumGuildSubscriptionPromptTooltipTsx1(){const{scrollPosition}=this.__closure;return scrollPosition.get();}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function PremiumGuildSubscriptionPromptTooltipTsx2(current,previous){const{bannerOffset,headerHeight,runOnJS,checkScrolling}=this.__closure;const newTranslateY=Math.max(bannerOffset-current,headerHeight/2);const oldTranslateY=Math.max(bannerOffset-(previous!==null&&previous!==void 0?previous:0),headerHeight/2);if(newTranslateY!==oldTranslateY){runOnJS(checkScrolling)();}}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function PremiumGuildSubscriptionPromptTooltipTsx3(){const{bannerOffset,scrollPosition,headerHeight,withTiming,opacity,shouldLoop,withRepeat,withSequence,translateBounceOffset}=this.__closure;const translateY=Math.max(bannerOffset-scrollPosition.get(),headerHeight/2);return{opacity:withTiming(opacity.get(),{duration:500}),transform:[{translateY:!shouldLoop.get()?translateY:withRepeat(withSequence(withTiming(translateY,{duration:500}),withTiming(translateY+translateBounceOffset,{duration:500})),-1,true)}]};}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function PremiumGuildSubscriptionPromptTooltipTsx4(){const{scrollPosition}=this.__closure;return scrollPosition.get();}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function PremiumGuildSubscriptionPromptTooltipTsx5(current,previous){const{bannerOffset,bannerHeight,headerHeight,runOnJS,checkScrolling}=this.__closure;const newTranslateY=Math.max(current-bannerOffset,bannerHeight+headerHeight/2);const oldTranslateY=Math.max((previous!==null&&previous!==void 0?previous:0)-bannerOffset,bannerHeight+headerHeight/2);if(newTranslateY!==oldTranslateY){runOnJS(checkScrolling)();}}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function PremiumGuildSubscriptionPromptTooltipTsx6(){const{scrollPosition,bannerHeight,headerHeight,withTiming,opacity,shouldLoop,withRepeat,withSequence,translateBounceOffset}=this.__closure;let sp=scrollPosition.get();if(sp<=bannerHeight){sp=bannerHeight+headerHeight/2;}else{sp=sp+headerHeight/2;}const translateY=sp;return{opacity:withTiming(opacity.get(),{duration:500}),transform:[{translateY:!shouldLoop.get()?translateY:withRepeat(withSequence(withTiming(translateY,{duration:500}),withTiming(translateY+translateBounceOffset,{duration:500})),-1,true)}]};}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_sidebar/native/PremiumGuildSubscriptionPromptTooltip.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun101779: for (var _fun101779_ip = 0;;) switch (_fun101779_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.bannerHeight;
                var _closure2_slot0 = var17;
                var16 = var0.headerHeight;
                var _closure2_slot1 = var16;
                var18 = var0.scrollPosition;
                var _closure2_slot2 = var18;
                var14 = var0.onClosePress;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var2 = -var17;
                var0 = 2;
                var0 = var16 / var0;
                var21 = var2 - var0;
                var _closure2_slot3 = var21;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 5;
                var0 = var7[var4];
                var5 = var6.bind(var3)(var0);
                var2 = var5.useSharedValue;
                var0 = 0;
                var9 = var2.bind(var5)(var0);
                var _closure2_slot4 = var9;
                var5 = _closure1_slot1;
                var2 = 6;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var2 = var2.width;
                var5 = 7;
                var5 = var7[var5];
                var8 = var6.bind(var3)(var5);
                var7 = var8.useStateFromStores;
                var5 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var1
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var5 = var7.bind(var8)(var6, var5);
                var11 = 4;
                if (!var5) {
                    _fun101779_ip = 192;
                    continue _fun101779
                }
            case 190:
                var11 = 0;
            case 192:
                _closure2_slot5 = var11;
                var15 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = var0[var4];
                var7 = var15.bind(var3)(var5);
                var6 = var7.useSharedValue;
                var5 = false;
                var12 = var6.bind(var7)(var5);
                _closure2_slot6 = var12;
                var8 = _closure1_slot3;
                var6 = var8.useRef;
                var5 = -1;
                var5 = var6.bind(var8)(var5);
                _closure2_slot7 = var5;
                var7 = var8.useCallback;
                var6 = new Array(2);
                var6[0] = var5;
                var6[1] = var12;
                var5 = function() { // Environment: var1
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var0 = _closure2_slot7;
                    var3 = var0.current;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var3 = _closure2_slot7;
                    var5 = var2.setTimeout;
                    var4 = function() { // Environment: var2
                        var2 = _closure2_slot6;
                        var1 = var2.set;
                        var0 = true;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var2 = 100;
                    var2 = var5.bind(var0)(var4, var2);
                    var3.current = var2;
                    var3 = _closure2_slot6;
                    var2 = var3.set;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var20 = var7.bind(var8)(var5, var6);
                _closure2_slot8 = var20;
                var5 = var0[var4];
                var10 = var15.bind(var3)(var5);
                var7 = var10.useAnimatedReaction;
                var6 = function() {
                    var1 = _closure2_slot2;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = {};
                var5.scrollPosition = var18;
                var6.__closure = var5;
                var5 = 17178753567879.0;
                var6.__workletHash = var5;
                var5 = _closure1_slot10;
                var6.__initData = var5;
                var5 = function arg0, arg1() {
                    _fun101784: for (var _fun101784_ip = 0;;) switch (_fun101784_ip) {
                        case 0:
                            var1 = arg1;
                            var3 = global;
                            var6 = var3.Math;
                            var5 = var6.max;
                            var4 = _closure2_slot3;
                            var2 = arg0;
                            var4 = var2 - var4;
                            var8 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var7 = 2;
                            var2 = var2 / var7;
                            var2 = var8 + var2;
                            var2 = var5.bind(var6)(var4, var2);
                            var5 = var3.Math;
                            var4 = var5.max;
                            var3 = null;
                            var6 = var3 != var1;
                            var3 = 0;
                            if (!var6) {
                                _fun101784_ip = 80;
                                continue _fun101784
                            }
                        case 77:
                            var3 = var1;
                        case 80:
                            var1 = _closure2_slot3;
                            var3 = var3 - var1;
                            var6 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = var1 / var7;
                            var1 = var6 + var1;
                            var1 = var4.bind(var5)(var3, var1);
                            if (!(var2 !== var1)) {
                                _fun101784_ip = 157;
                                continue _fun101784
                            }
                        case 114:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot8;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 157:
                            var0 = undefined;
                            return var0;
                    }
                };
                var19 = {};
                var19.bannerOffset = var21;
                var19.bannerHeight = var17;
                var19.headerHeight = var16;
                var21 = var0[var4];
                var21 = var15.bind(var3)(var21);
                var21 = var21.runOnJS;
                var19.runOnJS = var21;
                var19.checkScrolling = var20;
                var5.__closure = var19;
                var19 = 12896852940649.0;
                var5.__workletHash = var19;
                var19 = _closure1_slot11;
                var5.__initData = var19;
                var5 = var7.bind(var10)(var6, var5);
                var5 = var0[var4];
                var7 = var15.bind(var3)(var5);
                var6 = var7.useAnimatedStyle;
                var5 = function() {
                    _fun101785: for (var _fun101785_ip = 0;;) switch (_fun101785_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            var0 = _closure2_slot0;
                            if (!(!(var1 <= var0))) {
                                _fun101785_ip = 41;
                                continue _fun101785
                            }
                        case 24:
                            var2 = _closure2_slot1;
                            var0 = 2;
                            var0 = var2 / var0;
                            var9 = var1 + var0;
                            _fun101785_ip = 60;
                            continue _fun101785;
                        case 41:
                            var1 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var0 = 2;
                            var0 = var2 / var0;
                            var9 = var1 + var0;
                        case 60:
                            var0 = {};
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var14 = 8;
                            var1 = var1[var14];
                            var13 = undefined;
                            var6 = var2.bind(var13)(var1);
                            var5 = var6.withTiming;
                            var2 = _closure2_slot4;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = {};
                            var12 = 500;
                            var1.duration = var12;
                            var1 = var5.bind(var6)(var2, var1);
                            var0.opacity = var1;
                            var2 = {};
                            var5 = _closure2_slot6;
                            var1 = var5.get;
                            var5 = var1.bind(var5)();
                            var1 = var9;
                            if (!var5) {
                                _fun101785_ip = 273;
                                continue _fun101785
                            }
                        case 151:
                            var11 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 5;
                            var5 = var10[var4];
                            var7 = var11.bind(var13)(var5);
                            var6 = var7.withRepeat;
                            var4 = var10[var4];
                            var8 = var11.bind(var13)(var4);
                            var5 = var8.withSequence;
                            var4 = var10[var14];
                            var16 = var11.bind(var13)(var4);
                            var15 = var16.withTiming;
                            var4 = {};
                            var4.duration = var12;
                            var4 = var15.bind(var16)(var9, var4);
                            var10 = var10[var14];
                            var11 = var11.bind(var13)(var10);
                            var10 = var11.withTiming;
                            var3 = _closure2_slot5;
                            var9 = var9 + var3;
                            var3 = {};
                            var3.duration = var12;
                            var3 = var10.bind(var11)(var9, var3);
                            var5 = var5.bind(var8)(var4, var3);
                            var4 = -1;
                            var3 = true;
                            var1 = var6.bind(var7)(var5, var4, var3);
                        case 273:
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var10 = {};
                var10.scrollPosition = var18;
                var10.bannerHeight = var17;
                var10.headerHeight = var16;
                var16 = 8;
                var16 = var0[var16];
                var16 = var15.bind(var3)(var16);
                var16 = var16.withTiming;
                var10.withTiming = var16;
                var10.opacity = var9;
                var10.shouldLoop = var12;
                var12 = var0[var4];
                var12 = var15.bind(var3)(var12);
                var12 = var12.withRepeat;
                var10.withRepeat = var12;
                var12 = var0[var4];
                var12 = var15.bind(var3)(var12);
                var12 = var12.withSequence;
                var10.withSequence = var12;
                var10.translateBounceOffset = var11;
                var5.__closure = var10;
                var10 = 17167097810223.0;
                var5.__workletHash = var10;
                var10 = _closure1_slot12;
                var5.__initData = var10;
                var5 = var6.bind(var7)(var5);
                var7 = var8.useEffect;
                var6 = new Array(1);
                var6[0] = var9;
                var1 = function() { // Environment: var1
                    var0 = global;
                    var3 = var0.setTimeout;
                    var0 = undefined;
                    var2 = function() { // Environment: var1
                        var2 = _closure2_slot4;
                        var1 = var2.set;
                        var0 = 1;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = 500;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1 = var7.bind(var8)(var1, var6);
                var1 = 330;
                var9 = var2 <= var1;
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var4 = _closure1_slot6;
                var6 = var4.tooltipContainer;
                var4 = new Array(3);
                var4[0] = var6;
                var6 = null;
                if (!var9) {
                    _fun101779_ip = 678;
                    continue _fun101779
                }
            case 668:
                var7 = _closure1_slot6;
                var6 = var7.shortWidthTooltipContainer;
            case 678:
                var4[1] = var6;
                var4[2] = var5;
                var0.style = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var7 = _closure1_slot6;
                var10 = var7.tooltip;
                var4.containerStyle = var10;
                var10 = var7.tooltipText;
                var4.labelStyle = var10;
                var10 = var7.arrow;
                var7 = new Array(2);
                var7[0] = var10;
                var8 = null;
                if (!var9) {
                    _fun101779_ip = 771;
                    continue _fun101779
                }
            case 761:
                var9 = _closure1_slot6;
                var8 = var9.shortWidthArrow;
            case 771:
                var7[1] = var8;
                var4.arrowStyle = var7;
                var18 = _closure1_slot0;
                var12 = _closure1_slot2;
                var15 = 10;
                var7 = var12[var15];
                var7 = var18.bind(var3)(var7);
                var9 = var7.intl;
                var8 = var9.string;
                var7 = var12[var15];
                var7 = var18.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.UyHD4O;
                var7 = var8.bind(var9)(var7);
                var4.label = var7;
                var7 = var12[var15];
                var7 = var18.bind(var3)(var7);
                var9 = var7.intl;
                var8 = var9.string;
                var7 = var12[var15];
                var7 = var18.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.Q3qa4x;
                var7 = var8.bind(var9)(var7);
                var4.title = var7;
                var9 = _closure1_slot5;
                var11 = _closure1_slot1;
                var10 = 11;
                var7 = var12[var10];
                var8 = var11.bind(var3)(var7);
                var7 = {};
                var16 = var12[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var12[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.U9PrMw;
                var15 = var16.bind(var17)(var15);
                var7.text = var15;
                var7.onPress = var14;
                var14 = var12[var10];
                var14 = var11.bind(var3)(var14);
                var14 = var14.Colors;
                var14 = var14.PRIMARY;
                var7.color = var14;
                var13 = _closure1_slot6;
                var14 = var13.closeButtonText;
                var7.textStyle = var14;
                var13 = var13.closeButton;
                var7.style = var13;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.Sizes;
                var10 = var10.SMALL;
                var7.size = var10;
                var10 = true;
                var7.shrink = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun101788: for (var _fun101788_ip = 0;;) switch (_fun101788_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.bannerHeight;
                var16 = var0.headerHeight;
                var _closure2_slot0 = var16;
                var17 = var0.scrollPosition;
                var _closure2_slot1 = var17;
                var14 = var0.onClosePress;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var0 = 2;
                var0 = var16 / var0;
                var18 = var0 + var2;
                var _closure2_slot2 = var18;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 5;
                var0 = var7[var4];
                var5 = var6.bind(var3)(var0);
                var2 = var5.useSharedValue;
                var0 = 0;
                var9 = var2.bind(var5)(var0);
                var _closure2_slot3 = var9;
                var5 = _closure1_slot1;
                var2 = 6;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var2 = var2.width;
                var5 = 7;
                var5 = var7[var5];
                var8 = var6.bind(var3)(var5);
                var7 = var8.useStateFromStores;
                var5 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var1
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var5 = var7.bind(var8)(var6, var5);
                var11 = 4;
                if (!var5) {
                    _fun101788_ip = 185;
                    continue _fun101788
                }
            case 183:
                var11 = 0;
            case 185:
                _closure2_slot4 = var11;
                var15 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = var0[var4];
                var7 = var15.bind(var3)(var5);
                var6 = var7.useSharedValue;
                var5 = false;
                var12 = var6.bind(var7)(var5);
                _closure2_slot5 = var12;
                var8 = _closure1_slot3;
                var6 = var8.useRef;
                var5 = -1;
                var5 = var6.bind(var8)(var5);
                _closure2_slot6 = var5;
                var7 = var8.useCallback;
                var6 = new Array(2);
                var6[0] = var5;
                var6[1] = var12;
                var5 = function() { // Environment: var1
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var0 = _closure2_slot6;
                    var3 = var0.current;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var3 = _closure2_slot6;
                    var5 = var2.setTimeout;
                    var4 = function() { // Environment: var2
                        var2 = _closure2_slot5;
                        var1 = var2.set;
                        var0 = true;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var2 = 100;
                    var2 = var5.bind(var0)(var4, var2);
                    var3.current = var2;
                    var3 = _closure2_slot5;
                    var2 = var3.set;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var20 = var7.bind(var8)(var5, var6);
                _closure2_slot7 = var20;
                var5 = var0[var4];
                var10 = var15.bind(var3)(var5);
                var7 = var10.useAnimatedReaction;
                var6 = function() {
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = {};
                var5.scrollPosition = var17;
                var6.__closure = var5;
                var5 = 2831463390050.0;
                var6.__workletHash = var5;
                var5 = _closure1_slot7;
                var6.__initData = var5;
                var5 = function arg0, arg1() {
                    _fun101793: for (var _fun101793_ip = 0;;) switch (_fun101793_ip) {
                        case 0:
                            var7 = arg1;
                            var1 = global;
                            var8 = var1.Math;
                            var5 = var8.max;
                            var3 = _closure2_slot2;
                            var2 = arg0;
                            var4 = var3 - var2;
                            var2 = _closure2_slot0;
                            var6 = 2;
                            var2 = var2 / var6;
                            var2 = var5.bind(var8)(var4, var2);
                            var5 = var1.Math;
                            var4 = var5.max;
                            var1 = null;
                            var8 = var1 != var7;
                            var1 = 0;
                            if (!var8) {
                                _fun101793_ip = 72;
                                continue _fun101793
                            }
                        case 69:
                            var1 = var7;
                        case 72:
                            var3 = var3 - var1;
                            var1 = _closure2_slot0;
                            var1 = var1 / var6;
                            var1 = var4.bind(var5)(var3, var1);
                            if (!(var2 !== var1)) {
                                _fun101793_ip = 137;
                                continue _fun101793
                            }
                        case 94:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot7;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 137:
                            var0 = undefined;
                            return var0;
                    }
                };
                var19 = {};
                var19.bannerOffset = var18;
                var19.headerHeight = var16;
                var21 = var0[var4];
                var21 = var15.bind(var3)(var21);
                var21 = var21.runOnJS;
                var19.runOnJS = var21;
                var19.checkScrolling = var20;
                var5.__closure = var19;
                var19 = 10643233591625.0;
                var5.__workletHash = var19;
                var19 = _closure1_slot8;
                var5.__initData = var19;
                var5 = var7.bind(var10)(var6, var5);
                var5 = var0[var4];
                var7 = var15.bind(var3)(var5);
                var6 = var7.useAnimatedStyle;
                var5 = function() {
                    _fun101794: for (var _fun101794_ip = 0;;) switch (_fun101794_ip) {
                        case 0:
                            var0 = global;
                            var4 = var0.Math;
                            var2 = var4.max;
                            var1 = _closure2_slot2;
                            var5 = _closure2_slot1;
                            var0 = var5.get;
                            var0 = var0.bind(var5)();
                            var1 = var1 - var0;
                            var5 = _closure2_slot0;
                            var0 = 2;
                            var0 = var5 / var0;
                            var9 = var2.bind(var4)(var1, var0);
                            var0 = {};
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var14 = 8;
                            var1 = var1[var14];
                            var13 = undefined;
                            var6 = var2.bind(var13)(var1);
                            var5 = var6.withTiming;
                            var2 = _closure2_slot3;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = {};
                            var12 = 500;
                            var1.duration = var12;
                            var1 = var5.bind(var6)(var2, var1);
                            var0.opacity = var1;
                            var2 = {};
                            var5 = _closure2_slot5;
                            var1 = var5.get;
                            var5 = var1.bind(var5)();
                            var1 = var9;
                            if (!var5) {
                                _fun101794_ip = 267;
                                continue _fun101794
                            }
                        case 145:
                            var11 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 5;
                            var5 = var10[var4];
                            var7 = var11.bind(var13)(var5);
                            var6 = var7.withRepeat;
                            var4 = var10[var4];
                            var8 = var11.bind(var13)(var4);
                            var5 = var8.withSequence;
                            var4 = var10[var14];
                            var16 = var11.bind(var13)(var4);
                            var15 = var16.withTiming;
                            var4 = {};
                            var4.duration = var12;
                            var4 = var15.bind(var16)(var9, var4);
                            var10 = var10[var14];
                            var11 = var11.bind(var13)(var10);
                            var10 = var11.withTiming;
                            var3 = _closure2_slot4;
                            var9 = var9 + var3;
                            var3 = {};
                            var3.duration = var12;
                            var3 = var10.bind(var11)(var9, var3);
                            var5 = var5.bind(var8)(var4, var3);
                            var4 = -1;
                            var3 = true;
                            var1 = var6.bind(var7)(var5, var4, var3);
                        case 267:
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var10 = {};
                var10.bannerOffset = var18;
                var10.scrollPosition = var17;
                var10.headerHeight = var16;
                var16 = 8;
                var16 = var0[var16];
                var16 = var15.bind(var3)(var16);
                var16 = var16.withTiming;
                var10.withTiming = var16;
                var10.opacity = var9;
                var10.shouldLoop = var12;
                var12 = var0[var4];
                var12 = var15.bind(var3)(var12);
                var12 = var12.withRepeat;
                var10.withRepeat = var12;
                var12 = var0[var4];
                var12 = var15.bind(var3)(var12);
                var12 = var12.withSequence;
                var10.withSequence = var12;
                var10.translateBounceOffset = var11;
                var5.__closure = var10;
                var10 = 167669905565.0;
                var5.__workletHash = var10;
                var10 = _closure1_slot9;
                var5.__initData = var10;
                var5 = var6.bind(var7)(var5);
                var7 = var8.useEffect;
                var6 = new Array(1);
                var6[0] = var9;
                var1 = function() { // Environment: var1
                    var0 = global;
                    var3 = var0.setTimeout;
                    var0 = undefined;
                    var2 = function() { // Environment: var1
                        var2 = _closure2_slot3;
                        var1 = var2.set;
                        var0 = 1;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = 500;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1 = var7.bind(var8)(var1, var6);
                var1 = 330;
                var9 = var2 <= var1;
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var4 = _closure1_slot6;
                var6 = var4.tooltipContainer;
                var4 = new Array(3);
                var4[0] = var6;
                var6 = null;
                if (!var9) {
                    _fun101788_ip = 666;
                    continue _fun101788
                }
            case 656:
                var7 = _closure1_slot6;
                var6 = var7.shortWidthTooltipContainer;
            case 666:
                var4[1] = var6;
                var4[2] = var5;
                var0.style = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var7 = _closure1_slot6;
                var10 = var7.tooltip;
                var4.containerStyle = var10;
                var10 = var7.tooltipText;
                var4.labelStyle = var10;
                var10 = var7.arrow;
                var7 = new Array(2);
                var7[0] = var10;
                var8 = null;
                if (!var9) {
                    _fun101788_ip = 759;
                    continue _fun101788
                }
            case 749:
                var9 = _closure1_slot6;
                var8 = var9.shortWidthArrow;
            case 759:
                var7[1] = var8;
                var4.arrowStyle = var7;
                var18 = _closure1_slot0;
                var12 = _closure1_slot2;
                var15 = 10;
                var7 = var12[var15];
                var7 = var18.bind(var3)(var7);
                var9 = var7.intl;
                var8 = var9.string;
                var7 = var12[var15];
                var7 = var18.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.UyHD4O;
                var7 = var8.bind(var9)(var7);
                var4.label = var7;
                var7 = var12[var15];
                var7 = var18.bind(var3)(var7);
                var9 = var7.intl;
                var8 = var9.string;
                var7 = var12[var15];
                var7 = var18.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.Q3qa4x;
                var7 = var8.bind(var9)(var7);
                var4.title = var7;
                var9 = _closure1_slot5;
                var11 = _closure1_slot1;
                var10 = 11;
                var7 = var12[var10];
                var8 = var11.bind(var3)(var7);
                var7 = {};
                var16 = var12[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var12[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.U9PrMw;
                var15 = var16.bind(var17)(var15);
                var7.text = var15;
                var7.onPress = var14;
                var14 = var12[var10];
                var14 = var11.bind(var3)(var14);
                var14 = var14.Colors;
                var14 = var14.PRIMARY;
                var7.color = var14;
                var13 = _closure1_slot6;
                var14 = var13.closeButtonText;
                var7.textStyle = var14;
                var13 = var13.closeButton;
                var7.style = var13;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.Sizes;
                var10 = var10.SMALL;
                var7.size = var10;
                var10 = true;
                var7.shrink = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.PremiumGuildSubscriptionPromptTooltipFlashList = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 671, 3711, 1464, 566, 4088, 8614, 1234, 4868, 2]);