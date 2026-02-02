// design/components/ContextMenu/native/ContextMenuPopout.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        var1 = _closure1_slot8;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var4.divider;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var2 = var1.items;
        var _closure2_slot0 = var2;
        var3 = var1.title;
        var _closure2_slot1 = var3;
        var3 = var1.state;
        var _closure2_slot2 = var3;
        var3 = var1.onPress;
        var _closure2_slot3 = var3;
        var1 = var1.dividerIndexes;
        var _closure2_slot4 = var1;
        var1 = var2.map;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun46374: for (var _fun46374_ip = 0;;) switch (_fun46374_ip) {
                case 0:
                    var0 = arg0;
                    var10 = arg1;
                    var11 = var0.label;
                    var1 = var0.action;
                    var _closure3_slot0 = var1;
                    var12 = var0.iconSource;
                    var9 = var0.IconComponent;
                    var0 = var0.variant;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    var13 = 1;
                    var1 = var1 - var13;
                    var6 = _closure1_slot5;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.ContextMenuItem;
                    var2 = {};
                    var2.index = var10;
                    var2.label = var11;
                    var14 = 0;
                    var14 = var14 === var10;
                    if (!var14) {
                        _fun46374_ip = 121;
                        continue _fun46374
                    }
                case 111:
                    var16 = _closure2_slot1;
                    var15 = null;
                    var14 = var15 == var16;
                case 121:
                    var2.start = var14;
                    var1 = var10 === var1;
                    var2.end = var1;
                    var1 = _closure2_slot4;
                    var14 = var1.includes;
                    var13 = var10 + var13;
                    var13 = var14.bind(var1)(var13);
                    var2.lastInSection = var13;
                    var2.iconSource = var12;
                    var2.IconComponent = var9;
                    var8 = _closure2_slot2;
                    var2.state = var8;
                    var5 = function arg0() {
                        _fun46375: for (var _fun46375_ip = 0;;) switch (_fun46375_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 10;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var1);
                                var1 = var3.isAndroid;
                                var1 = var1.bind(var3)();
                                if (!var1) {
                                    _fun46375_ip = 68;
                                    continue _fun46375
                                }
                            case 38:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 16;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.getIsScreenReaderEnabled;
                                var1 = var2.bind(var3)();
                            case 68:
                                if (!var1) {
                                    _fun46375_ip = 82;
                                    continue _fun46375
                                }
                            case 71:
                                var1 = _closure3_slot0;
                                var1 = var1.bind(var0)();
                            case 82:
                                var3 = _closure2_slot3;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun46375_ip = 107;
                                    continue _fun46375
                                }
                            case 95:
                                var2 = _closure2_slot3;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var1);
                            case 107:
                                return var0;
                        }
                    };
                    var2.onPress = var5;
                    var2.variant = var0;
                    var5 = global;
                    var0 = var5.HermesInternal;
                    var9 = var0.concat;
                    var8 = '';
                    var0 = '-';
                    var0 = var9.bind(var8)(var11, var0, var10);
                    var6 = var6.bind(var4)(var3, var2, var0);
                    var0 = var1.includes;
                    var1 = var0.bind(var1)(var10);
                    var0 = var6;
                    if (!var1) {
                        _fun46374_ip = 308;
                        continue _fun46374
                    }
                case 237:
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot6;
                    var1 = {};
                    var9 = _closure1_slot5;
                    var8 = _closure1_slot16;
                    var5 = var5.HermesInternal;
                    var7 = var5.concat;
                    var5 = 'divider-';
                    var7 = var7.bind(var5)(var10);
                    var5 = {};
                    var7 = var9.bind(var4)(var8, var5, var7);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 308:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun46376: for (var _fun46376_ip = 0;;) switch (_fun46376_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.onPress;
                var10 = var1.visible;
                var _closure2_slot0 = var10;
                var1 = _closure1_slot14;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var2 = var6.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    var0 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 11;
                    var1 = var7[var1];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var1);
                    var3 = var4.withSpring;
                    var2 = _closure2_slot0;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 5;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.CONTEXT_MENU_SPRING;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.opacity = var1;
                    return var0;
                };
                var9 = {};
                var11 = 11;
                var11 = var7[var11];
                var11 = var6.bind(var3)(var11);
                var11 = var11.withSpring;
                var9.withSpring = var11;
                var9.visible = var10;
                var10 = 5;
                var10 = var7[var10];
                var10 = var6.bind(var3)(var10);
                var10 = var10.CONTEXT_MENU_SPRING;
                var9.CONTEXT_MENU_SPRING = var10;
                var0.__closure = var9;
                var9 = 7758377027899.0;
                var0.__workletHash = var9;
                var9 = _closure1_slot15;
                var0.__initData = var9;
                var10 = var1.bind(var2)(var0);
                var2 = _closure1_slot5;
                var0 = 17;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.Backdrop;
                var0 = {};
                var9 = 'none';
                var0.blur = var9;
                var11 = var8.backdrop;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var0.style = var9;
                var8 = var8.accessibleDismiss;
                var0.accessibleDismissStyle = var8;
                var0.onDismiss = var4;
                var4 = 10;
                var4 = var7[var4];
                var6 = var6.bind(var3)(var4);
                var4 = var6.isAndroid;
                var4 = var4.bind(var6)();
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 18;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                if (var4) {
                    _fun46376_ip = 307;
                    continue _fun46376
                }
            case 292:
                var4 = var5.xs0juG;
                var4 = var6.bind(var7)(var4);
                _fun46376_ip = 320;
                continue _fun46376;
            case 307:
                var5 = var5.hPBScv;
                var4 = var6.bind(var7)(var5);
            case 320:
                var0.accessibilityLabel = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
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
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var9 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.Fragment;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var12 = {
        'position': 'absolute',
        'backgroundColor': null,
        'borderWidth': 1
    };
    var10 = 4;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGHEST;
    var12.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var12.borderColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var12.borderRadius = var13;
    var13 = 5;
    var14 = var5[var13];
    var14 = var4.bind(var0)(var14);
    var14 = var14.CONTEXT_MENU_MIN_WIDTH;
    var12.minWidth = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.shadows;
    var16 = var14.SHADOW_HIGH;
    var17 = var12;
    var14 = copyDataProperties(var17, var16);
    var6.container = var12;
    var12 = {
        'width': 20,
        'height': 20
    };
    var6.formIcon = var12;
    var12 = {};
    var14 = var5[var13];
    var14 = var4.bind(var0)(var14);
    var14 = var14.CONTEXT_MENU_ITEM_PADDING;
    var12.padding = var14;
    var6.titleContainer = var12;
    var12 = {};
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var13 = var13.CONTEXT_MENU_DIVIDER_HEIGHT;
    var12.borderBottomWidth = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var12.borderBottomColor = var13;
    var6.divider = var12;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var6 = {};
    var7 = "function ContextMenuPopoutNativeTsx1(){const{maxHeight,height,CONTEXT_MENU_MIN_WIDTH,positionY,positionX,CONTEXT_MENU_MIN_SCALE,withSpring,interpolate,visible,CONTEXT_MENU_SPRING,transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;const visibleHeight=Math.min(maxHeight,height);const halfHeight=visibleHeight/2;const halfWidth=CONTEXT_MENU_MIN_WIDTH/2;const translateYDirection=positionY==='below'?-1:1;const translateXDirection=positionX==='left'?-1:1;const translateY=translateYDirection*halfHeight+CONTEXT_MENU_MIN_SCALE*-translateYDirection*halfHeight;const translateX=translateXDirection*halfWidth+CONTEXT_MENU_MIN_SCALE*-translateXDirection*halfWidth;return{opacity:withSpring(interpolate(visible.get(),[0,1],[0,1]),CONTEXT_MENU_SPRING,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}),transform:[{translateX:withSpring(interpolate(visible.get(),[0,1],[translateX,0]),CONTEXT_MENU_SPRING)},{translateY:withSpring(interpolate(visible.get(),[0,1],[translateY,0]),CONTEXT_MENU_SPRING)},{scale:withSpring(interpolate(visible.get(),[0,1],[CONTEXT_MENU_MIN_SCALE,1]),CONTEXT_MENU_SPRING)}]};}";
    var6.code = var7;
    var _closure1_slot9 = var6;
    var6 = {};
    var7 = 'function ContextMenuPopoutNativeTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}';
    var6.code = var7;
    var _closure1_slot10 = var6;
    var6 = {};
    var7 = 'function ContextMenuPopoutNativeTsx3(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}';
    var6.code = var7;
    var _closure1_slot11 = var6;
    var6 = {};
    var7 = 'function ContextMenuPopoutNativeTsx4(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}';
    var6.code = var7;
    var _closure1_slot12 = var6;
    var6 = {};
    var7 = 'function ContextMenuPopoutNativeTsx5(e,state){const{scrollingEnabled}=this.__closure;if(scrollingEnabled.get()){state.fail();}else{state.activate();}}';
    var6.code = var7;
    var _closure1_slot13 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.CONTEXT_MENU_BACKDROP_BACKGROUND;
    var8.backgroundColor = var10;
    var3.backdrop = var8;
    var8 = {};
    var16 = var9.absoluteFillObject;
    var17 = var8;
    var9 = copyDataProperties(var17, var16);
    var10 = 'auto';
    var9 = 'height';
    var8[var9] = var10;
    var3.accessibleDismiss = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 'function ContextMenuPopoutNativeTsx6(){const{withSpring,visible,CONTEXT_MENU_SPRING}=this.__closure;return{opacity:withSpring(visible.get(),CONTEXT_MENU_SPRING)};}';
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/ContextMenu/native/ContextMenuPopout.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun46378: for (var _fun46378_ip = 0;;) switch (_fun46378_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.menu;
                var23 = var2.transitionState;
                var _closure2_slot0 = var23;
                var19 = var2.cleanUp;
                var _closure2_slot1 = var19;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var4 = var1.x;
                var26 = var1.positionX;
                var _closure2_slot2 = var26;
                var27 = var1.positionY;
                var _closure2_slot3 = var27;
                var28 = var1.height;
                var _closure2_slot4 = var28;
                var18 = var1.items;
                var16 = var1.state;
                var _closure2_slot5 = var16;
                var5 = var1.requestClose;
                var _closure2_slot6 = var5;
                var15 = var1.onClose;
                var _closure2_slot7 = var15;
                var17 = var1.title;
                var2 = var1.keyboardShouldPersistTaps;
                var11 = 'handled';
                if (!(var3 !== var2)) {
                    _fun46378_ip = 135;
                    continue _fun46378
                }
            case 132:
                var11 = var2;
            case 135:
                var14 = var1.dividerIndexes;
                var6 = var1.y;
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var21 = 6;
                var2 = var1[var21];
                var7 = var8.bind(var3)(var2);
                var2 = var7.useSharedValue;
                var22 = 7;
                var1 = var1[var22];
                var1 = var8.bind(var3)(var1);
                var1 = var1.TransitionStates;
                var8 = var1.MOUNTED;
                var1 = 0;
                if (!(var23 === var8)) {
                    _fun46378_ip = 208;
                    continue _fun46378
                }
            case 205:
                var1 = 1;
            case 208:
                var10 = var2.bind(var7)(var1);
                _closure2_slot8 = var10;
                var8 = _closure1_slot3;
                var7 = var8.useEffect;
                var2 = new Array(2);
                var2[0] = var23;
                var2[1] = var10;
                var1 = function() { // Environment: var0
                    _fun46379: for (var _fun46379_ip = 0;;) switch (_fun46379_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 7;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            if (!(var3 !== var2)) {
                                _fun46379_ip = 67;
                                continue _fun46379
                            }
                        case 48:
                            var4 = _closure2_slot8;
                            var3 = var4.set;
                            var2 = 1;
                            var2 = var3.bind(var4)(var2);
                            _fun46379_ip = 83;
                            continue _fun46379;
                        case 67:
                            var3 = _closure2_slot8;
                            var2 = var3.set;
                            var1 = 0;
                            var1 = var2.bind(var3)(var1);
                        case 83:
                            return var0;
                    }
                };
                var1 = var7.bind(var8)(var1, var2);
                var1 = _closure1_slot8;
                var24 = var1.bind(var3)();
                var7 = _closure1_slot1;
                var20 = _closure1_slot2;
                var1 = 8;
                var1 = var20[var1];
                var2 = var7.bind(var3)(var1);
                var1 = {};
                var8 = true;
                var1.includeKeyboardHeight = var8;
                var1 = var2.bind(var3)(var1);
                var1 = var1.insets;
                var9 = var1.top;
                var2 = var1.bottom;
                var1 = 9;
                var1 = var20[var1];
                var7 = var7.bind(var3)(var1);
                var1 = {};
                var13 = _closure1_slot0;
                var8 = 10;
                var8 = var20[var8];
                var13 = var13.bind(var3)(var8);
                var8 = var13.isAndroid;
                var8 = var8.bind(var13)();
                var1.ignoreKeyboard = var8;
                var1 = var7.bind(var3)(var1);
                var7 = var1.width;
                var1 = var1.height;
                var8 = 'below';
                var8 = var8 === var27;
                var1 = var1 - var6;
                if (var8) {
                    _fun46378_ip = 420;
                    continue _fun46378
                }
            case 384:
                var13 = var1 - var9;
                var20 = _closure1_slot0;
                var25 = _closure1_slot2;
                var9 = 5;
                var9 = var25[var9];
                var9 = var20.bind(var3)(var9);
                var9 = var9.CONTEXT_MENU_EDGE_OFFSET;
                var13 = var13 - var9;
                _fun46378_ip = 454;
                continue _fun46378;
            case 420:
                var2 = var1 - var2;
                var9 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 5;
                var1 = var20[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.CONTEXT_MENU_EDGE_OFFSET;
                var13 = var2 - var1;
            case 454:
                _closure2_slot9 = var13;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var21];
                var9 = var2.bind(var3)(var1);
                var2 = var9.useSharedValue;
                var1 = var28 >= var13;
                var1 = var2.bind(var9)(var1);
                _closure2_slot10 = var1;
                var20 = {};
                var2 = 'bottom';
                if (!var8) {
                    _fun46378_ip = 507;
                    continue _fun46378
                }
            case 503:
                var2 = 'top';
            case 507:
                var20[var2] = var6;
                var20[var26] = var4;
                var2 = 'maxHeight';
                var20[var2] = var13;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var25 = 5;
                var2 = var8[var25];
                var2 = var6.bind(var3)(var2);
                var2 = var2.CONTEXT_MENU_EDGE_OFFSET;
                var2 = var7 - var2;
                var4 = var2 - var4;
                var2 = 'maxWidth';
                var20[var2] = var4;
                var2 = var8[var21];
                var7 = var6.bind(var3)(var2);
                var4 = var7.useAnimatedStyle;
                var2 = function() {
                    _fun46380: for (var _fun46380_ip = 0;;) switch (_fun46380_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.Math;
                            var2 = var3.min;
                            var1 = _closure2_slot9;
                            var0 = _closure2_slot4;
                            var0 = var2.bind(var3)(var1, var0);
                            var2 = 2;
                            var20 = var0 / var2;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var9 = 5;
                            var0 = var0[var9];
                            var8 = undefined;
                            var0 = var3.bind(var8)(var0);
                            var0 = var0.CONTEXT_MENU_MIN_WIDTH;
                            var18 = var0 / var2;
                            var2 = _closure2_slot3;
                            var4 = 1;
                            var0 = 'below';
                            var19 = var4;
                            if (!(var0 === var2)) {
                                _fun46380_ip = 98;
                                continue _fun46380
                            }
                        case 92:
                            var19 = -1;
                        case 98:
                            var2 = _closure2_slot2;
                            var0 = 'left';
                            var6 = var4;
                            if (!(var0 === var2)) {
                                _fun46380_ip = 119;
                                continue _fun46380
                            }
                        case 113:
                            var6 = -1;
                        case 119:
                            var0 = {};
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var5 = 11;
                            var2 = var3[var5];
                            var15 = var7.bind(var8)(var2);
                            var14 = var15.withSpring;
                            var11 = 6;
                            var2 = var3[var11];
                            var17 = var7.bind(var8)(var2);
                            var16 = var17.interpolate;
                            var12 = _closure2_slot8;
                            var2 = var12.get;
                            var13 = var2.bind(var12)();
                            var12 = [0, 1];
                            var2 = [0, 1];
                            var13 = var16.bind(var17)(var13, var12, var2);
                            var2 = var3[var9];
                            var2 = var7.bind(var8)(var2);
                            var23 = var2.CONTEXT_MENU_SPRING;
                            var2 = function arg0() {
                                _fun46381: for (var _fun46381_ip = 0;;) switch (_fun46381_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun46381_ip = 54;
                                            continue _fun46381
                                        }
                                    case 6:
                                        var2 = _closure2_slot0;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 7;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3);
                                        var1 = var1.TransitionStates;
                                        var1 = var1.YEETED;
                                        var0 = var2 === var1;
                                    case 54:
                                        if (!var0) {
                                            _fun46381_ip = 130;
                                            continue _fun46381
                                        }
                                    case 57:
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var2 = 6;
                                        var0 = var4[var2];
                                        var1 = undefined;
                                        var7 = var3.bind(var1)(var0);
                                        var6 = var7.runOnJS;
                                        var5 = _closure2_slot1;
                                        var5 = var6.bind(var7)(var5);
                                        var5 = var5.bind(var1)();
                                        var2 = var4[var2];
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot7;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 130:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var16 = {};
                            var17 = _closure2_slot0;
                            var16.transitionState = var17;
                            var17 = 7;
                            var17 = var3[var17];
                            var17 = var7.bind(var8)(var17);
                            var17 = var17.TransitionStates;
                            var16.TransitionStates = var17;
                            var17 = var3[var11];
                            var17 = var7.bind(var8)(var17);
                            var17 = var17.runOnJS;
                            var16.runOnJS = var17;
                            var17 = _closure2_slot1;
                            var16.cleanUp = var17;
                            var17 = _closure2_slot7;
                            var16.onClose = var17;
                            var2.__closure = var16;
                            var16 = 4025068986009.0;
                            var2.__workletHash = var16;
                            var1 = _closure1_slot10;
                            var2.__initData = var1;
                            var22 = 'respect-motion-settings';
                            var25 = var15;
                            var24 = var13;
                            var21 = var2;
                            var1 = var25[var14](var24, var23, var22, var21, var20);
                            var0.opacity = var1;
                            var2 = {};
                            var1 = var3[var5];
                            var14 = var7.bind(var8)(var1);
                            var13 = var14.withSpring;
                            var1 = var3[var11];
                            var17 = var7.bind(var8)(var1);
                            var16 = var17.interpolate;
                            var12 = _closure2_slot8;
                            var1 = var12.get;
                            var15 = var1.bind(var12)();
                            var1 = var3[var9];
                            var1 = var7.bind(var8)(var1);
                            var12 = var1.CONTEXT_MENU_MIN_SCALE;
                            var1 = -var6;
                            var1 = var12 * var1;
                            var12 = new Array(2);
                            var6 = var6 * var18;
                            var1 = var1 * var18;
                            var1 = var6 + var1;
                            var12[0] = var1;
                            var6 = 0;
                            var12[1] = var6;
                            var1 = [0, 1];
                            var12 = var16.bind(var17)(var15, var1, var12);
                            var1 = var3[var9];
                            var1 = var7.bind(var8)(var1);
                            var1 = var1.CONTEXT_MENU_SPRING;
                            var1 = var13.bind(var14)(var12, var1);
                            var2.translateX = var1;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var2 = {};
                            var12 = var3[var5];
                            var14 = var7.bind(var8)(var12);
                            var13 = var14.withSpring;
                            var12 = var3[var11];
                            var17 = var7.bind(var8)(var12);
                            var16 = var17.interpolate;
                            var15 = _closure2_slot8;
                            var12 = var15.get;
                            var15 = var12.bind(var15)();
                            var12 = var3[var9];
                            var12 = var7.bind(var8)(var12);
                            var18 = var12.CONTEXT_MENU_MIN_SCALE;
                            var12 = -var19;
                            var18 = var18 * var12;
                            var12 = new Array(2);
                            var19 = var19 * var20;
                            var18 = var18 * var20;
                            var18 = var19 + var18;
                            var12[0] = var18;
                            var12[1] = var6;
                            var6 = [0, 1];
                            var12 = var16.bind(var17)(var15, var6, var12);
                            var6 = var3[var9];
                            var6 = var7.bind(var8)(var6);
                            var6 = var6.CONTEXT_MENU_SPRING;
                            var6 = var13.bind(var14)(var12, var6);
                            var2.translateY = var6;
                            var1[1] = var2;
                            var2 = {};
                            var5 = var3[var5];
                            var6 = var7.bind(var8)(var5);
                            var5 = var6.withSpring;
                            var11 = var3[var11];
                            var13 = var7.bind(var8)(var11);
                            var12 = var13.interpolate;
                            var11 = _closure2_slot8;
                            var10 = var11.get;
                            var11 = var10.bind(var11)();
                            var10 = var3[var9];
                            var10 = var7.bind(var8)(var10);
                            var14 = var10.CONTEXT_MENU_MIN_SCALE;
                            var10 = new Array(2);
                            var10[0] = var14;
                            var10[1] = var4;
                            var4 = [0, 1];
                            var4 = var12.bind(var13)(var11, var4, var10);
                            var3 = var3[var9];
                            var3 = var7.bind(var8)(var3);
                            var3 = var3.CONTEXT_MENU_SPRING;
                            var3 = var5.bind(var6)(var4, var3);
                            var2.scale = var3;
                            var1[2] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var9 = {};
                var9.maxHeight = var13;
                var9.height = var28;
                var28 = var8[var25];
                var28 = var6.bind(var3)(var28);
                var28 = var28.CONTEXT_MENU_MIN_WIDTH;
                var9.CONTEXT_MENU_MIN_WIDTH = var28;
                var9.positionY = var27;
                var9.positionX = var26;
                var26 = var8[var25];
                var26 = var6.bind(var3)(var26);
                var26 = var26.CONTEXT_MENU_MIN_SCALE;
                var9.CONTEXT_MENU_MIN_SCALE = var26;
                var26 = 11;
                var26 = var8[var26];
                var26 = var6.bind(var3)(var26);
                var26 = var26.withSpring;
                var9.withSpring = var26;
                var26 = var8[var21];
                var26 = var6.bind(var3)(var26);
                var26 = var26.interpolate;
                var9.interpolate = var26;
                var9.visible = var10;
                var25 = var8[var25];
                var25 = var6.bind(var3)(var25);
                var25 = var25.CONTEXT_MENU_SPRING;
                var9.CONTEXT_MENU_SPRING = var25;
                var9.transitionState = var23;
                var22 = var8[var22];
                var22 = var6.bind(var3)(var22);
                var22 = var22.TransitionStates;
                var9.TransitionStates = var22;
                var22 = var8[var21];
                var22 = var6.bind(var3)(var22);
                var22 = var22.runOnJS;
                var9.runOnJS = var22;
                var9.cleanUp = var19;
                var9.onClose = var15;
                var2.__closure = var9;
                var9 = 16778623591634.0;
                var2.__workletHash = var9;
                var9 = _closure1_slot9;
                var2.__initData = var9;
                var19 = var4.bind(var7)(var2);
                var4 = _closure1_slot3;
                var9 = var4.useMemo;
                var7 = new Array(3);
                var7[0] = var16;
                var7[1] = var5;
                var7[2] = var1;
                var2 = function() { // Environment: var0
                    var4 = function arg0() {
                        var1 = arg0;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 12;
                        var2 = var2[var0];
                        var0 = undefined;
                        var5 = var3.bind(var0)(var2);
                        var4 = var5.updateContextMenuState;
                        var3 = var1.absoluteX;
                        var2 = var1.absoluteY;
                        var1 = _closure2_slot5;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var0;
                    };
                    var1 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 12;
                    var2 = var9[var2];
                    var7 = undefined;
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.updateContextMenuState;
                    var1.updateContextMenuState = var2;
                    var6 = _closure2_slot5;
                    var1.state = var6;
                    var4.__closure = var1;
                    var1 = 14952697295916.0;
                    var4.__workletHash = var1;
                    var1 = _closure1_slot11;
                    var4.__initData = var1;
                    var1 = 13;
                    var1 = var9[var1];
                    var1 = var8.bind(var7)(var1);
                    var2 = var1.Gesture;
                    var1 = var2.Pan;
                    var10 = var1.bind(var2)();
                    var2 = var10.manualActivation;
                    var1 = true;
                    var10 = var2.bind(var10)(var1);
                    var2 = var10.onTouchesDown;
                    var1 = function arg0, arg1() {
                        _fun46384: for (var _fun46384_ip = 0;;) switch (_fun46384_ip) {
                            case 0:
                                var1 = arg1;
                                var2 = _closure2_slot10;
                                var0 = var2.get;
                                var0 = var0.bind(var2)();
                                if (var0) {
                                    _fun46384_ip = 34;
                                    continue _fun46384
                                }
                            case 22:
                                var0 = var1.activate;
                                var0 = var0.bind(var1)();
                                _fun46384_ip = 44;
                                continue _fun46384;
                            case 34:
                                var0 = var1.fail;
                                var0 = var0.bind(var1)();
                            case 44:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var11 = {};
                    var12 = _closure2_slot10;
                    var11.scrollingEnabled = var12;
                    var1.__closure = var11;
                    var11 = 1299584703797.0;
                    var1.__workletHash = var11;
                    var11 = _closure1_slot13;
                    var1.__initData = var11;
                    var2 = var2.bind(var10)(var1);
                    var1 = var2.onStart;
                    var2 = var1.bind(var2)(var4);
                    var1 = var2.onUpdate;
                    var2 = var1.bind(var2)(var4);
                    var1 = var2.onEnd;
                    var0 = function() {
                        var0 = _closure2_slot5;
                        var2 = var0.activeIndex;
                        var0 = var2.get;
                        var3 = var0.bind(var2)();
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2);
                        var2 = var4.runOnJS;
                        var1 = _closure2_slot6;
                        var2 = var2.bind(var4)(var1);
                        var1 = -1;
                        var1 = var1 === var3;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var4 = {};
                    var4.state = var6;
                    var6 = 6;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.runOnJS;
                    var4.runOnJS = var6;
                    var5 = _closure2_slot6;
                    var4.requestClose = var5;
                    var0.__closure = var4;
                    var4 = 14495067009140.0;
                    var0.__workletHash = var4;
                    var3 = _closure1_slot12;
                    var0.__initData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var9.bind(var4)(var2, var7);
                var7 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var13;
                var2[1] = var1;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot10;
                    var1 = var2.set;
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.round;
                    var3 = arg0;
                    var3 = var3.nativeEvent;
                    var3 = var3.layout;
                    var3 = var3.height;
                    var3 = var5.bind(var6)(var3);
                    var5 = var4.Math;
                    var4 = var5.round;
                    var0 = _closure2_slot9;
                    var0 = var4.bind(var5)(var0);
                    var0 = var3 >= var0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var13 = var7.bind(var4)(var1, var2);
                var7 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot6;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var22 = var7.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot6;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var15 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot6;
                var0 = {};
                var7 = _closure1_slot5;
                var5 = _closure1_slot18;
                var4 = {};
                var4.onPress = var22;
                var4.visible = var10;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var5 = 13;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.GestureDetector;
                var5 = {};
                var5.gesture = var9;
                var10 = _closure1_slot7;
                var9 = _closure1_slot1;
                var8 = var8[var21];
                var8 = var9.bind(var3)(var8);
                var9 = var8.ScrollView;
                var8 = {};
                var8.onLayout = var13;
                var13 = false;
                var8.bounces = var13;
                var21 = var24.container;
                var13 = new Array(3);
                var13[0] = var21;
                var13[1] = var20;
                var13[2] = var19;
                var8.style = var13;
                var8.keyboardShouldPersistTaps = var11;
                var11 = 'list';
                var8.accessibilityRole = var11;
                var13 = null;
                var11 = var13 != var17;
                if (!var11) {
                    _fun46378_ip = 1208;
                    continue _fun46378
                }
            case 1077:
                var20 = _closure1_slot7;
                var19 = _closure1_slot6;
                var11 = {};
                var23 = _closure1_slot5;
                var22 = _closure1_slot4;
                var21 = {};
                var24 = var24.titleContainer;
                var21.style = var24;
                var26 = _closure1_slot5;
                var25 = _closure1_slot0;
                var27 = _closure1_slot2;
                var24 = 14;
                var24 = var27[var24];
                var24 = var25.bind(var3)(var24);
                var25 = var24.Text;
                var24 = {
                    'variant': 'text-md/bold',
                    'color': 'mobile-text-heading-primary',
                    'accessibilityRole': 'header'
                };
                var24.children = var17;
                var24 = var26.bind(var3)(var25, var24);
                var21.children = var24;
                var22 = var23.bind(var3)(var22, var21);
                var21 = new Array(2);
                var21[0] = var22;
                var24 = _closure1_slot5;
                var23 = _closure1_slot16;
                var22 = {};
                var22 = var24.bind(var3)(var23, var22);
                var21[1] = var22;
                var11.children = var21;
                var13 = var20.bind(var3)(var19, var11);
            case 1208:
                var11 = new Array(2);
                var11[0] = var13;
                var13 = _closure1_slot17;
                var12 = {};
                var12.items = var18;
                var12.title = var17;
                var12.state = var16;
                var12.onPress = var15;
                var12.dividerIndexes = var14;
                var12 = var13.bind(var3)(var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ContextMenuPopout = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5184, 3681, 3989, 4858, 1464, 478, 4042, 5185, 4926, 3902, 5186, 4031, 4032, 1234, 2]);