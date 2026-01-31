// design/components/Sticky/native/StickyHeader.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var1 = function(arg0) { // Original name: useStickyHeaderStyles, environment: var3
        _fun89017: for (var _fun89017_ip = 0;;) switch (_fun89017_ip) {
            case 0:
                var6 = arg0;
                var5 = arguments[1];
                var _closure2_slot0 = var6;
                var8 = undefined;
                if (!(var5 === var8)) {
                    _fun89017_ip = 20;
                    continue _fun89017
                }
            case 18:
                var5 = true;
            case 20:
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var8;
                var4 = _closure1_slot3;
                var2 = var4.useContext;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 5;
                var1 = var9[var1];
                var1 = var7.bind(var8)(var1);
                var1 = var1.AccessibilityPreferencesContext;
                var1 = var2.bind(var4)(var1);
                var1 = var1.reducedMotion;
                var10 = var1.enabled;
                _closure2_slot2 = var10;
                var1 = 2;
                var1 = var9[var1];
                var2 = var7.bind(var8)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: l, environment: var0
                    _fun89018: for (var _fun89018_ip = 0;;) switch (_fun89018_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var6 = 0;
                            var4 = var2 > var6;
                            var2 = 'relative';
                            if (var0) {
                                _fun89018_ip = 163;
                                continue _fun89018
                            }
                        case 38:
                            var0 = var2;
                            if (!var4) {
                                _fun89018_ip = 48;
                                continue _fun89018
                            }
                        case 44:
                            var0 = 'absolute';
                        case 48:
                            var1.position = var0;
                            var5 = {};
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var7 = 6;
                            var8 = var8[var7];
                            var7 = undefined;
                            var10 = var9.bind(var7)(var8);
                            var9 = var10.withTiming;
                            var7 = _closure2_slot1;
                            var8 = 0;
                            if (var7) {
                                _fun89018_ip = 109;
                                continue _fun89018
                            }
                        case 93:
                            var11 = _closure2_slot0;
                            var7 = var11.get;
                            var7 = var7.bind(var11)();
                            var8 = -var7;
                        case 109:
                            var7 = {};
                            var11 = _closure1_slot6;
                            var7.duration = var11;
                            var0 = _closure1_slot5;
                            var7.easing = var0;
                            var0 = 'animate-always';
                            var0 = var9.bind(var10)(var8, var7, var0);
                            var5.translateY = var0;
                            var0 = new Array(1);
                            var0[0] = var5;
                            var1.transform = var0;
                            var0 = var1;
                            _fun89018_ip = 255;
                            continue _fun89018;
                        case 163:
                            if (!var4) {
                                _fun89018_ip = 170;
                                continue _fun89018
                            }
                        case 166:
                            var2 = 'absolute';
                        case 170:
                            var1.position = var2;
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 6;
                            var5 = var5[var4];
                            var4 = undefined;
                            var5 = var7.bind(var4)(var5);
                            var4 = var5.withTiming;
                            var3 = _closure2_slot1;
                            var6 = 0;
                            if (!var3) {
                                _fun89018_ip = 216;
                                continue _fun89018
                            }
                        case 213:
                            var6 = 1;
                        case 216:
                            var3 = {};
                            var7 = _closure1_slot6;
                            var3.duration = var7;
                            var2 = _closure1_slot5;
                            var3.easing = var2;
                            var2 = 'animate-always';
                            var2 = var4.bind(var5)(var6, var3, var2);
                            var1.opacity = var2;
                            var0 = var1;
                        case 255:
                            return var0;
                    }
                };
                var4 = {};
                var4.useReducedMotion = var10;
                var4.headerHeight = var6;
                var6 = 6;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                var6 = var6.withTiming;
                var4.withTiming = var6;
                var4.show = var5;
                var5 = _closure1_slot6;
                var4.SHOW_DURATION = var5;
                var5 = _closure1_slot5;
                var4.SHOW_EASING = var5;
                var0.__closure = var4;
                var4 = 10390349288548.0;
                var0.__workletHash = var4;
                var3 = _closure1_slot8;
                var0.__initData = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot9 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var11 = 0;
    var7 = var6[var11];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.Easing;
    var8 = var9.bezier;
    var15 = 0.4;
    var13 = 0.2;
    var16 = var9;
    var14 = 0;
    var12 = var10;
    var4 = var16[var8](var15, var14, var13, var12, var11);
    var _closure1_slot5 = var4;
    var4 = 300;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'zIndex': 1,
        'width': '100%',
        'top': 0
    };
    var4.container = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = "function StickyHeaderNativeTsx1(){const{useReducedMotion,headerHeight,withTiming,show,SHOW_DURATION,SHOW_EASING}=this.__closure;return useReducedMotion?{position:headerHeight.get()>0?'absolute':'relative',opacity:withTiming(show?1:0,{duration:SHOW_DURATION,easing:SHOW_EASING},'animate-always')}:{position:headerHeight.get()>0?'absolute':'relative',transform:[{translateY:withTiming(show?0:-headerHeight.get(),{duration:SHOW_DURATION,easing:SHOW_EASING},'animate-always')}]};}";
    var4.code = var7;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sticky/native/StickyHeader.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: StickyHeader, environment: var3
        _fun89019: for (var _fun89019_ip = 0;;) switch (_fun89019_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.show;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun89019_ip = 19;
                    continue _fun89019
                }
            case 17:
                var6 = true;
            case 19:
                var _closure2_slot0 = var6;
                var4 = var0.children;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var2 = _closure1_slot7;
                var7 = var2.bind(var3)();
                var8 = _closure1_slot3;
                var5 = var8.useContext;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 4;
                var2 = var9[var2];
                var2 = var10.bind(var3)(var2);
                var2 = var2.StickyContext;
                var5 = var5.bind(var8)(var2);
                var2 = var5.headerHeight;
                var11 = var5.setHeaderHeight;
                _closure2_slot1 = var11;
                var5 = var5.setShowHeader;
                _closure2_slot2 = var5;
                var12 = _closure1_slot3;
                var10 = var12.useRef;
                var8 = -1;
                var8 = var10.bind(var12)(var8);
                _closure2_slot3 = var8;
                var12 = _closure1_slot3;
                var10 = var12.useEffect;
                var8 = new Array(2);
                var8[0] = var6;
                var8[1] = var5;
                var5 = function() { // Environment: var1
                    _fun89020: for (var _fun89020_ip = 0;;) switch (_fun89020_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            if (var2) {
                                _fun89020_ip = 29;
                                continue _fun89020
                            }
                        case 12:
                            var4 = _closure2_slot2;
                            var3 = _closure2_slot0;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            _fun89020_ip = 69;
                            continue _fun89020;
                        case 29:
                            var2 = _closure2_slot3;
                            var1 = global;
                            var5 = var1.setTimeout;
                            var4 = _closure1_slot6;
                            var3 = undefined;
                            var1 = function() { // Environment: var0
                                var2 = _closure2_slot2;
                                var1 = _closure2_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var5.bind(var3)(var1, var4);
                            var2.current = var1;
                        case 69:
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var0 = _closure2_slot3;
                                var1 = var0.current;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var5 = var10.bind(var12)(var5, var8);
                var10 = _closure1_slot3;
                var8 = var10.useCallback;
                var5 = new Array(1);
                var5[0] = var11;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.height;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var5 = var8.bind(var10)(var1, var5);
                var1 = _closure1_slot9;
                var8 = var1.bind(var3)(var2, var6);
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var0 = 2;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var9 = var7.container;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var0.style = var7;
                var0.onLayout = var5;
                var5 = !var6;
                var0.accessibilityElementsHidden = var5;
                var5 = 'no-hide-descendants';
                if (!var6) {
                    _fun89019_ip = 290;
                    continue _fun89019
                }
            case 286:
                var5 = 'auto';
            case 290:
                var0.importantForAccessibility = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.StickyHeader = var3;
    var2.useStickyHeaderStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3679, 1297, 11521, 3124, 4056, 2]);