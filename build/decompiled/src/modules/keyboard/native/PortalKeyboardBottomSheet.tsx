// modules/keyboard/native/PortalKeyboardBottomSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: PortalKeyboardBottomSheetHeader, environment: var1
        _fun107919: for (var _fun107919_ip = 0;;) switch (_fun107919_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.style;
                var7 = var0.handleCollapse;
                var0 = _closure1_slot10;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useIsScreenReaderEnabled;
                var10 = var0.bind(var1)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var8 = var9.headerContainer;
                var5 = new Array(3);
                var5[0] = var8;
                var8 = undefined;
                if (!var10) {
                    _fun107919_ip = 92;
                    continue _fun107919
                }
            case 86:
                var8 = var9.headerContainerScreenReaderEnabled;
            case 92:
                var5[1] = var8;
                var5[2] = var6;
                var0.style = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 8;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ActionSheetDragHandle;
                var4 = {};
                var4.onPress = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Platform;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.isIOS;
    var3 = var3.bind(var7)();
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0
    };
    var3.container = var9;
    var9 = {};
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var12;
    var12 = 'hidden';
    var9.overflow = var12;
    var3.background = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.none;
    var9.borderTopLeftRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.none;
    var9.borderTopRightRadius = var12;
    var12 = '100%';
    var9.width = var12;
    var12 = 8;
    var13 = var5[var12];
    var13 = var4.bind(var0)(var13);
    var13 = var13.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
    var9.height = var13;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var12 = var12.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
    var12 = -var12;
    var9.marginBottom = var12;
    var3.headerContainer = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var12 = -var12;
    var9.marginBottom = var12;
    var3.headerContainerScreenReaderEnabled = var9;
    var9 = {
        'overflow': 'hidden',
        'display': 'flex'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var10;
    var3.roundingView = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = 'function PortalKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}';
    var3.code = var7;
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = 'function PortalKeyboardBottomSheetTsx2(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}';
    var3.code = var7;
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = 'function PortalKeyboardBottomSheetTsx3(isFullyExpanded,isFullExpandedPrevious){const{forceMaxHeight,runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded&&!forceMaxHeight){runOnJS(dismissGlobalKeyboard)();}}';
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = "function PortalKeyboardBottomSheetTsx4(){const{interpolate,animatedIndex}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[0,1],[0,15],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[0,1],[0,15],'clamp')};}";
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = {};
    var7 = 'function PortalKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}';
    var3.code = var7;
    var _closure1_slot15 = var3;
    var3 = {};
    var7 = 'function PortalKeyboardBottomSheetTsx6(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}';
    var3.code = var7;
    var _closure1_slot16 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Original name: PortalKeyboardBottomSheet, environment: var1
        _fun107920: for (var _fun107920_ip = 0;;) switch (_fun107920_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.animatedIndex;
                var _closure2_slot0 = var10;
                var32 = var0.animatedPosition;
                var19 = var0.chatInputRef;
                var _closure2_slot1 = var19;
                var12 = var0.children;
                var2 = var0.isAppsKeyboard;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun107920_ip = 50;
                    continue _fun107920
                }
            case 48:
                var2 = false;
            case 50:
                var _closure2_slot2 = var2;
                var31 = var0.animationConfigs;
                var30 = var0.onClose;
                var _closure2_slot3 = var30;
                var1 = var0.transitionState;
                var21 = var0.backdropComponent;
                var23 = var0.headerStyle;
                var _closure2_slot4 = var23;
                var17 = var0.disableHeaderRoundingAnimation;
                var16 = var0.roundingViewStyle;
                var18 = var0.onAnimate;
                var _closure2_slot5 = var18;
                var11 = var0.rendersHandle;
                if (!(var11 === var3)) {
                    _fun107920_ip = 126;
                    continue _fun107920
                }
            case 124:
                var11 = true;
            case 126:
                var _closure2_slot6 = var11;
                var28 = var0.width;
                var34 = var0.forceMaxHeight;
                if (!(var34 === var3)) {
                    _fun107920_ip = 147;
                    continue _fun107920
                }
            case 145:
                var34 = false;
            case 147:
                var _closure2_slot7 = var34;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var0 = _closure1_slot10;
                var15 = var0.bind(var3)();
                var13 = _closure1_slot4;
                var0 = var13.useRef;
                var22 = null;
                var33 = var0.bind(var13)(var22);
                _closure2_slot8 = var33;
                var7 = _closure1_slot1;
                var41 = _closure1_slot2;
                var20 = 10;
                var0 = var41[var20];
                var4 = var7.bind(var3)(var0);
                var0 = {};
                var0.forceMaxHeight = var34;
                var8 = var4.bind(var3)(var0);
                var42 = _closure1_slot0;
                var0 = 11;
                var0 = var41[var0];
                var0 = var42.bind(var3)(var0);
                var0 = var0.TransitionStates;
                var0 = var0.YEETED;
                var0 = var1 === var0;
                _closure2_slot9 = var0;
                var1 = 12;
                var1 = var41[var1];
                var6 = var42.bind(var3)(var1);
                var4 = var6.useBottomSheetImperativeHandle;
                var1 = arg1;
                var1 = var4.bind(var6)(var1, var33);
                var6 = var13.useLayoutEffect;
                var4 = new Array(2);
                var4[0] = var33;
                var4[1] = var0;
                var1 = function() { // Environment: var14
                    _fun107921: for (var _fun107921_ip = 0;;) switch (_fun107921_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            if (!var1) {
                                _fun107921_ip = 35;
                                continue _fun107921
                            }
                        case 10:
                            var0 = _closure2_slot8;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun107921_ip = 35;
                                continue _fun107921
                            }
                        case 25:
                            var0 = var1.forceClose;
                            var0 = var0.bind(var1)();
                        case 35:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var6.bind(var13)(var1, var4);
                var1 = 13;
                var1 = var41[var1];
                var9 = var42.bind(var3)(var1);
                var6 = var9.useStateFromStores;
                var1 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var14
                    var1 = _closure1_slot6;
                    var0 = var1.isOpen;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var6.bind(var9)(var4, var1);
                var1 = 14;
                var1 = var41[var1];
                var1 = var7.bind(var3)(var1);
                var26 = var1.bind(var3)();
                var1 = 15;
                var1 = var41[var1];
                var1 = var42.bind(var3)(var1);
                var1 = var1.KeyboardTypes;
                var25 = var1.EXPRESSION;
                var1 = 9;
                var1 = var41[var1];
                var4 = var42.bind(var3)(var1);
                var1 = var4.useIsScreenReaderEnabled;
                var1 = var1.bind(var4)();
                _closure2_slot10 = var1;
                var9 = var13.useCallback;
                var4 = new Array(5);
                var4[0] = var19;
                var4[1] = var0;
                var4[2] = var18;
                var4[3] = var30;
                var4[4] = var2;
                var2 = function(arg0, arg1, arg2) { // Environment: var14
                    _fun107923: for (var _fun107923_ip = 0;;) switch (_fun107923_ip) {
                        case 0:
                            var6 = arg0;
                            var4 = arg1;
                            var3 = arg2;
                            var1 = _closure2_slot9;
                            if (!var1) {
                                _fun107923_ip = 32;
                                continue _fun107923
                            }
                        case 19:
                            var1 = -1;
                            if (!(var1 === var4)) {
                                _fun107923_ip = 272;
                                continue _fun107923
                            }
                        case 32:
                            if (!(var6 !== var4)) {
                                _fun107923_ip = 292;
                                continue _fun107923
                            }
                        case 39:
                            var1 = -1;
                            if (!(var1 !== var4)) {
                                _fun107923_ip = 292;
                                continue _fun107923
                            }
                        case 52:
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun107923_ip = 75;
                                continue _fun107923
                            }
                        case 62:
                            var5 = _closure2_slot5;
                            var2 = undefined;
                            var2 = var5.bind(var2)(var6, var4, var3);
                        case 75:
                            var2 = 0;
                            if (!(var2 !== var6)) {
                                _fun107923_ip = 177;
                                continue _fun107923
                            }
                        case 81:
                            var5 = 1;
                            if (!(var5 === var6)) {
                                _fun107923_ip = 292;
                                continue _fun107923
                            }
                        case 91:
                            if (!(var2 === var4)) {
                                _fun107923_ip = 292;
                                continue _fun107923
                            }
                        case 98:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 18;
                            var4 = var4[var2];
                            var2 = undefined;
                            var4 = var5.bind(var2)(var4);
                            var2 = var4.isChannelFocused;
                            var2 = var2.bind(var4)();
                            if (var2) {
                                _fun107923_ip = 292;
                                continue _fun107923
                            }
                        case 139:
                            var2 = _closure2_slot2;
                            if (!var2) {
                                _fun107923_ip = 292;
                                continue _fun107923
                            }
                        case 149:
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            if (!(var1 != var2)) {
                                _fun107923_ip = 292;
                                continue _fun107923
                            }
                        case 165:
                            var1 = var2.closeCustomKeyboard;
                            var1 = var1.bind(var2)();
                            _fun107923_ip = 292;
                            continue _fun107923;
                        case 177:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 16;
                            var2 = var5[var2];
                            var5 = undefined;
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.ANIMATION_SOURCE;
                            var2 = var2.KEYBOARD;
                            if (!(var3 !== var2)) {
                                _fun107923_ip = 292;
                                continue _fun107923
                            }
                        case 218:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 17;
                            var2 = var6[var1];
                            var3 = var4.bind(var5)(var2);
                            var2 = var3.triggerHapticFeedback;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.HapticFeedbackTypes;
                            var1 = var1.IMPACT_LIGHT;
                            var1 = var2.bind(var3)(var1);
                            _fun107923_ip = 292;
                            continue _fun107923;
                        case 272:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun107923_ip = 292;
                                continue _fun107923
                            }
                        case 282:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 292:
                            var0 = undefined;
                            return var0;
                    }
                };
                var29 = var9.bind(var13)(var2, var4);
                var4 = 19;
                var2 = var41[var4];
                var18 = var42.bind(var3)(var2);
                var9 = var18.useDerivedValue;
                var2 = function() { // Original name: V, environment: var14
                    var1 = _closure2_slot0;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var0 = 0.975;
                    var0 = var1 > var0;
                    return var0;
                };
                var19 = {};
                var19.animatedIndex = var10;
                var2.__closure = var19;
                var19 = 2001839633402.0;
                var2.__workletHash = var19;
                var19 = _closure1_slot11;
                var2.__initData = var19;
                var2 = var9.bind(var18)(var2);
                _closure2_slot11 = var2;
                var9 = var41[var4];
                var24 = var42.bind(var3)(var9);
                var19 = var24.useAnimatedReaction;
                var18 = function() { // Original name: L, environment: var14
                    var1 = _closure2_slot11;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = {};
                var9.isFullyExpanded = var2;
                var18.__closure = var9;
                var9 = 9531298805666.0;
                var18.__workletHash = var9;
                var9 = _closure1_slot12;
                var18.__initData = var9;
                var9 = function(arg0, arg1) { // Original name: J, environment: var14
                    _fun107926: for (var _fun107926_ip = 0;;) switch (_fun107926_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = null;
                            var1 = arg1;
                            if (!(var2 != var1)) {
                                _fun107926_ip = 82;
                                continue _fun107926
                            }
                        case 12:
                            if (var0) {
                                _fun107926_ip = 22;
                                continue _fun107926
                            }
                        case 15:
                            var0 = _closure2_slot7;
                        case 22:
                            if (var0) {
                                _fun107926_ip = 82;
                                continue _fun107926
                            }
                        case 25:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 19;
                            var0 = var5[var0];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var0);
                            var2 = var3.runOnJS;
                            var0 = 20;
                            var0 = var5[var0];
                            var0 = var4.bind(var1)(var0);
                            var0 = var0.dismissGlobalKeyboard;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 82:
                            var0 = undefined;
                            return var0;
                    }
                };
                var27 = {};
                var27.forceMaxHeight = var34;
                var34 = var41[var4];
                var34 = var42.bind(var3)(var34);
                var34 = var34.runOnJS;
                var27.runOnJS = var34;
                var34 = 20;
                var34 = var41[var34];
                var34 = var42.bind(var3)(var34);
                var34 = var34.dismissGlobalKeyboard;
                var27.dismissGlobalKeyboard = var34;
                var9.__closure = var27;
                var27 = 14649856286006.0;
                var9.__workletHash = var27;
                var27 = _closure1_slot13;
                var9.__initData = var27;
                var9 = var19.bind(var24)(var18, var9);
                var9 = 21;
                var9 = var41[var9];
                var18 = var7.bind(var3)(var9);
                var9 = function() { // Environment: var14
                    var0 = function() { // Environment: var0
                        _fun107928: for (var _fun107928_ip = 0;;) switch (_fun107928_ip) {
                            case 0:
                                var2 = _closure2_slot3;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun107928_ip = 23;
                                    continue _fun107928
                                }
                            case 13:
                                var1 = _closure2_slot3;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 23:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var9 = var18.bind(var3)(var9);
                var19 = var13.useCallback;
                var18 = function(arg0) { // Environment: var14
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 16;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.BottomSheetBackdrop;
                    var0 = {};
                    var6 = arg0;
                    var7 = var0;
                    var4 = copyDataProperties(var7, var6);
                    var5 = 'collapse';
                    var4 = 'pressBehavior';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var9 = new Array(0);
                var19 = var19.bind(var13)(var18, var9);
                var18 = var13.useCallback;
                var9 = new Array(5);
                var9[0] = var23;
                var9[1] = var33;
                var9[2] = var11;
                var9[3] = var2;
                var9[4] = var1;
                var2 = function() { // Environment: var14
                    _fun107930: for (var _fun107930_ip = 0;;) switch (_fun107930_ip) {
                        case 0:
                            var3 = _closure2_slot6;
                            var2 = false;
                            var0 = null;
                            if (!(var2 !== var3)) {
                                _fun107930_ip = 67;
                                continue _fun107930
                            }
                        case 15:
                            var4 = _closure1_slot7;
                            var3 = _closure1_slot17;
                            var2 = {};
                            var5 = _closure2_slot4;
                            var2.style = var5;
                            var5 = function() { // Original name: handleCollapse, environment: var5
                                _fun107931: for (var _fun107931_ip = 0;;) switch (_fun107931_ip) {
                                    case 0:
                                        var0 = _closure2_slot8;
                                        var3 = var0.current;
                                        var0 = null;
                                        if (!(var0 != var3)) {
                                            _fun107931_ip = 28;
                                            continue _fun107931
                                        }
                                    case 18:
                                        var2 = var3.collapse;
                                        var2 = var2.bind(var3)();
                                    case 28:
                                        var2 = _closure2_slot10;
                                        if (!var2) {
                                            _fun107931_ip = 58;
                                            continue _fun107931
                                        }
                                    case 35:
                                        var1 = _closure2_slot8;
                                        var1 = var1.current;
                                        if (!(var0 != var1)) {
                                            _fun107931_ip = 58;
                                            continue _fun107931
                                        }
                                    case 48:
                                        var0 = var1.forceClose;
                                        var0 = var0.bind(var1)();
                                    case 58:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2.handleCollapse = var5;
                            var1 = _closure2_slot11;
                            var2.isFullyExpanded = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 67:
                            return var0;
                    }
                };
                var23 = var18.bind(var13)(var2, var9);
                var2 = var41[var4];
                var18 = var42.bind(var3)(var2);
                var9 = var18.useAnimatedStyle;
                var2 = function() { // Original name: q, environment: var14
                    var0 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 19;
                    var2 = var5[var1];
                    var3 = undefined;
                    var11 = var4.bind(var3)(var2);
                    var10 = var11.interpolate;
                    var2 = _closure2_slot0;
                    var6 = var2.get;
                    var15 = var6.bind(var2)();
                    var14 = [0, 1];
                    var13 = [0, 15];
                    var6 = 'clamp';
                    var16 = var11;
                    var12 = var6;
                    var7 = var16[var10](var15, var14, var13, var12, var11);
                    var0.borderTopLeftRadius = var7;
                    var1 = var5[var1];
                    var5 = var4.bind(var3)(var1);
                    var4 = var5.interpolate;
                    var1 = var2.get;
                    var15 = var1.bind(var2)();
                    var14 = [0, 1];
                    var13 = [0, 15];
                    var16 = var5;
                    var1 = var16[var4](var15, var14, var13, var12, var11);
                    var0.borderTopRightRadius = var1;
                    return var0;
                };
                var24 = {};
                var27 = var41[var4];
                var27 = var42.bind(var3)(var27);
                var27 = var27.interpolate;
                var24.interpolate = var27;
                var24.animatedIndex = var10;
                var2.__closure = var24;
                var24 = 13716272266662.0;
                var2.__workletHash = var24;
                var24 = _closure1_slot14;
                var2.__initData = var24;
                var18 = var9.bind(var18)(var2);
                var2 = 22;
                var2 = var41[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var36 = var2.left;
                var35 = var2.right;
                var2 = 23;
                var2 = var41[var2];
                var7 = var7.bind(var3)(var2);
                var2 = {};
                var9 = true;
                var2.ignoreKeyboard = var9;
                var2 = var7.bind(var3)(var2);
                var7 = var2.height;
                var34 = var2.width;
                var24 = var13.useCallback;
                var9 = function(arg0) { // Environment: var14
                    var3 = _closure1_slot7;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 16;
                    var0 = var7[var0];
                    var2 = undefined;
                    var0 = var5.bind(var2)(var0);
                    var1 = var0.BottomSheetFooter;
                    var0 = {};
                    var8 = arg0;
                    var9 = var0;
                    var6 = copyDataProperties(var9, var8);
                    var6 = _closure1_slot7;
                    var4 = 24;
                    var4 = var7[var4];
                    var4 = var5.bind(var2)(var4);
                    var5 = var4.PortalHost;
                    var4 = {};
                    var7 = 'expression-footer';
                    var4.name = var7;
                    var5 = var6.bind(var2)(var5, var4);
                    var4 = 'children';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2 = new Array(0);
                var24 = var24.bind(var13)(var9, var2);
                var9 = var13.useState;
                var2 = false;
                var13 = var9.bind(var13)(var2);
                var9 = _closure1_slot3;
                var2 = 2;
                var27 = var9.bind(var3)(var13, var2);
                var9 = 0;
                var13 = var27[var9];
                var2 = 1;
                var40 = var27[var2];
                _closure2_slot12 = var40;
                var2 = var41[var4];
                var38 = var42.bind(var3)(var2);
                var37 = var38.useAnimatedReaction;
                var27 = function() { // Original name: Q, environment: var14
                    var0 = global;
                    var3 = var0.Math;
                    var2 = var3.max;
                    var1 = _closure2_slot0;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var1 = 0;
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = var0 > var1;
                    return var0;
                };
                var2 = {};
                var2.animatedIndex = var10;
                var27.__closure = var2;
                var2 = 8952872079740.0;
                var27.__workletHash = var2;
                var2 = _closure1_slot15;
                var27.__initData = var2;
                var2 = function(arg0, arg1) { // Original name: z, environment: var14
                    _fun107935: for (var _fun107935_ip = 0;;) switch (_fun107935_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            if (!(var2 !== var0)) {
                                _fun107935_ip = 57;
                                continue _fun107935
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var0);
                            var3 = var4.runOnJS;
                            var0 = _closure2_slot12;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.bind(var1)(var2);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var39 = {};
                var41 = var41[var4];
                var41 = var42.bind(var3)(var41);
                var41 = var41.runOnJS;
                var39.runOnJS = var41;
                var39.setAccessibilityViewIsModal = var40;
                var2.__closure = var39;
                var39 = 16051387075966.0;
                var2.__workletHash = var39;
                var39 = _closure1_slot16;
                var2.__initData = var39;
                var2 = var37.bind(var38)(var27, var2);
                var27 = var1;
                if (var27) {
                    _fun107920_ip = 1145;
                    continue _fun107920
                }
            case 1142:
                var27 = var0;
            case 1145:
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var4 = undefined;
                if (!var6) {
                    _fun107920_ip = 1184;
                    continue _fun107920
                }
            case 1178:
                var4 = 'no-hide-descendants';
            case 1184:
                var0.importantForAccessibility = var4;
                var6 = var15.container;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = {};
                if (!(var22 == var28)) {
                    _fun107920_ip = 1216;
                    continue _fun107920
                }
            case 1208:
                var34 = var34 - var36;
                var28 = var34 - var35;
            case 1216:
                var6.width = var28;
                var6.height = var7;
                var4[1] = var6;
                var0.style = var4;
                var4 = 'box-none';
                var0.pointerEvents = var4;
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var28 = _closure1_slot2;
                var4 = 16;
                var4 = var28[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var4.ref = var33;
                var4.animatedIndex = var10;
                var4.animatedPosition = var32;
                var4.animationConfigs = var31;
                var4.onClose = var30;
                var4.onAnimate = var29;
                var29 = !var27;
                var4.enableContentPanningGesture = var29;
                var27 = !var27;
                var4.enableHandlePanningGesture = var27;
                var4.handleComponent = var23;
                var27 = _closure1_slot0;
                var23 = 5;
                var23 = var28[var23];
                var27 = var27.bind(var3)(var23);
                var23 = var27.isAndroid;
                var27 = var23.bind(var27)();
                var23 = undefined;
                if (!var27) {
                    _fun107920_ip = 1359;
                    continue _fun107920
                }
            case 1350:
                var23 = undefined;
                if (!(var26 === var25)) {
                    _fun107920_ip = 1359;
                    continue _fun107920
                }
            case 1356:
                var23 = var24;
            case 1359:
                var4.renderFooter = var23;
                var23 = var15.background;
                var4.backgroundStyle = var23;
                if (!(var22 != var21)) {
                    _fun107920_ip = 1382;
                    continue _fun107920
                }
            case 1379:
                var19 = var21;
            case 1382:
                var4.backdropComponent = var19;
                var19 = new Array(2);
                var21 = -10;
                var19[0] = var21;
                var19[1] = var20;
                var4.activeOffsetY = var19;
                var9 = 0;
                if (!var11) {
                    _fun107920_ip = 1441;
                    continue _fun107920
                }
            case 1415:
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var11 = 8;
                var11 = var20[var11];
                var11 = var19.bind(var3)(var11);
                var9 = var11.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
            case 1441:
                var4.handleHeight = var9;
                var44 = var4;
                var43 = var8;
                var8 = copyDataProperties(var44, var43);
                var11 = _closure1_slot7;
                var9 = _closure1_slot0;
                var19 = _closure1_slot2;
                var8 = 25;
                var8 = var19[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.AccessibilityViewAnimated;
                var8 = {};
                var19 = 'portal-keyboard-sheet';
                var8.nativeID = var19;
                var19 = var15.roundingView;
                var15 = new Array(3);
                var15[0] = var19;
                var17 = !var17;
                if (!var17) {
                    _fun107920_ip = 1522;
                    continue _fun107920
                }
            case 1519:
                var17 = var18;
            case 1522:
                var15[1] = var17;
                var15[2] = var16;
                var8.style = var15;
                var14 = function() { // Original name: onAccessibilityEscape, environment: var14
                    _fun107936: for (var _fun107936_ip = 0;;) switch (_fun107936_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun107936_ip = 28;
                                continue _fun107936
                            }
                        case 18:
                            var0 = var1.collapse;
                            var0 = var0.bind(var1)();
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8.onAccessibilityEscape = var14;
                var8.accessibilityViewIsModal = var13;
                var8.children = var12;
                var9 = var11.bind(var3)(var9, var8);
                var8 = 'children';
                var4[var8] = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var6 = _closure1_slot9;
                if (!var6) {
                    _fun107920_ip = 1628;
                    continue _fun107920
                }
            case 1591:
                var9 = _closure1_slot7;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 26;
                var7 = var11[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var7.animatedSheetIndex = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 1628:
                var4[1] = var6;
                var7 = _closure1_slot7;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 27;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.NavScrim;
                var5 = {};
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/keyboard/native/PortalKeyboardBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8566, 33, 478, 1297, 671, 6985, 4023, 13886, 3981, 5157, 566, 3867, 1567, 4889, 3238, 8682, 3677, 1582, 4056, 1568, 1464, 3880, 4019, 8472, 5160, 2]);