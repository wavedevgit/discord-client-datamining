// modules/keyboard/native/PortalKeyboardBottomSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun108208: for (var _fun108208_ip = 0;;) switch (_fun108208_ip) {
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
                    _fun108208_ip = 92;
                    continue _fun108208
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
    var _closure1_slot19 = var0;
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
    var3 = var12.bind(var0)(var3);
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot7 = var8;
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
    var9 = var4.bind(var0)(var3);
    var7 = var9.createStyles;
    var3 = {};
    var10 = {
        'position': 'absolute',
        'top': 0,
        'left': 0
    };
    var3.container = var10;
    var10 = {};
    var11 = 7;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var10.backgroundColor = var13;
    var13 = 'hidden';
    var10.overflow = var13;
    var3.background = var10;
    var10 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.none;
    var10.borderTopLeftRadius = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.none;
    var10.borderTopRightRadius = var13;
    var13 = '100%';
    var10.width = var13;
    var13 = 8;
    var14 = var5[var13];
    var14 = var4.bind(var0)(var14);
    var14 = var14.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
    var10.height = var14;
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var13 = var13.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
    var13 = -var13;
    var10.marginBottom = var13;
    var3.headerContainer = var10;
    var10 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var13 = -var13;
    var10.marginBottom = var13;
    var3.headerContainerScreenReaderEnabled = var10;
    var10 = {
        'overflow': 'hidden',
        'display': 'flex'
    };
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var10.backgroundColor = var11;
    var3.roundingView = var10;
    var3 = var7.bind(var9)(var3);
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
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.PortalHost;
    var3 = {};
    var9 = 'expression-footer';
    var3.name = var9;
    var3 = var8.bind(var0)(var7, var3);
    var _closure1_slot15 = var3;
    var3 = {};
    var7 = 'function PortalKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}';
    var3.code = var7;
    var _closure1_slot16 = var3;
    var3 = {};
    var7 = 'function PortalKeyboardBottomSheetTsx6(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}';
    var3.code = var7;
    var _closure1_slot17 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.NavScrim;
    var3 = {};
    var3 = var8.bind(var0)(var7, var3);
    var _closure1_slot18 = var3;
    var3 = var6.forwardRef;
    var1 = function arg0, arg1() {
        _fun108209: for (var _fun108209_ip = 0;;) switch (_fun108209_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.animatedIndex;
                var _closure2_slot0 = var10;
                var31 = var0.animatedPosition;
                var19 = var0.chatInputRef;
                var _closure2_slot1 = var19;
                var12 = var0.children;
                var2 = var0.isAppsKeyboard;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun108209_ip = 50;
                    continue _fun108209
                }
            case 48:
                var2 = false;
            case 50:
                var _closure2_slot2 = var2;
                var30 = var0.animationConfigs;
                var29 = var0.onClose;
                var _closure2_slot3 = var29;
                var1 = var0.transitionState;
                var20 = var0.backdropComponent;
                var22 = var0.headerStyle;
                var _closure2_slot4 = var22;
                var17 = var0.disableHeaderRoundingAnimation;
                var16 = var0.roundingViewStyle;
                var18 = var0.onAnimate;
                var _closure2_slot5 = var18;
                var11 = var0.rendersHandle;
                if (!(var11 === var3)) {
                    _fun108209_ip = 126;
                    continue _fun108209
                }
            case 124:
                var11 = true;
            case 126:
                var _closure2_slot6 = var11;
                var35 = var0.width;
                var27 = var0.forceMaxHeight;
                if (!(var27 === var3)) {
                    _fun108209_ip = 147;
                    continue _fun108209
                }
            case 145:
                var27 = false;
            case 147:
                var _closure2_slot7 = var27;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var0 = _closure1_slot10;
                var15 = var0.bind(var3)();
                var13 = _closure1_slot4;
                var0 = var13.useRef;
                var21 = null;
                var32 = var0.bind(var13)(var21);
                _closure2_slot8 = var32;
                var7 = _closure1_slot1;
                var40 = _closure1_slot2;
                var0 = 12;
                var0 = var40[var0];
                var4 = var7.bind(var3)(var0);
                var0 = {};
                var0.forceMaxHeight = var27;
                var8 = var4.bind(var3)(var0);
                var41 = _closure1_slot0;
                var0 = 13;
                var0 = var40[var0];
                var0 = var41.bind(var3)(var0);
                var0 = var0.TransitionStates;
                var0 = var0.YEETED;
                var0 = var1 === var0;
                _closure2_slot9 = var0;
                var1 = 14;
                var1 = var40[var1];
                var6 = var41.bind(var3)(var1);
                var4 = var6.useBottomSheetImperativeHandle;
                var1 = arg1;
                var1 = var4.bind(var6)(var1, var32);
                var6 = var13.useLayoutEffect;
                var4 = new Array(2);
                var4[0] = var32;
                var4[1] = var0;
                var1 = function() { // Environment: var14
                    _fun108210: for (var _fun108210_ip = 0;;) switch (_fun108210_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            if (!var1) {
                                _fun108210_ip = 35;
                                continue _fun108210
                            }
                        case 10:
                            var0 = _closure2_slot8;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun108210_ip = 35;
                                continue _fun108210
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
                var1 = 15;
                var1 = var40[var1];
                var9 = var41.bind(var3)(var1);
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
                var1 = 16;
                var1 = var40[var1];
                var1 = var7.bind(var3)(var1);
                var25 = var1.bind(var3)();
                var1 = 17;
                var1 = var40[var1];
                var1 = var41.bind(var3)(var1);
                var1 = var1.KeyboardTypes;
                var24 = var1.EXPRESSION;
                var1 = 9;
                var1 = var40[var1];
                var4 = var41.bind(var3)(var1);
                var1 = var4.useIsScreenReaderEnabled;
                var1 = var1.bind(var4)();
                _closure2_slot10 = var1;
                var9 = var13.useCallback;
                var4 = new Array(5);
                var4[0] = var19;
                var4[1] = var0;
                var4[2] = var18;
                var4[3] = var29;
                var4[4] = var2;
                var2 = function(arg0, arg1, arg2) { // Environment: var14
                    _fun108212: for (var _fun108212_ip = 0;;) switch (_fun108212_ip) {
                        case 0:
                            var6 = arg0;
                            var4 = arg1;
                            var3 = arg2;
                            var1 = _closure2_slot9;
                            if (!var1) {
                                _fun108212_ip = 32;
                                continue _fun108212
                            }
                        case 19:
                            var1 = -1;
                            if (!(var1 === var4)) {
                                _fun108212_ip = 272;
                                continue _fun108212
                            }
                        case 32:
                            if (!(var6 !== var4)) {
                                _fun108212_ip = 292;
                                continue _fun108212
                            }
                        case 39:
                            var1 = -1;
                            if (!(var1 !== var4)) {
                                _fun108212_ip = 292;
                                continue _fun108212
                            }
                        case 52:
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun108212_ip = 75;
                                continue _fun108212
                            }
                        case 62:
                            var5 = _closure2_slot5;
                            var2 = undefined;
                            var2 = var5.bind(var2)(var6, var4, var3);
                        case 75:
                            var2 = 0;
                            if (!(var2 !== var6)) {
                                _fun108212_ip = 177;
                                continue _fun108212
                            }
                        case 81:
                            var5 = 1;
                            if (!(var5 === var6)) {
                                _fun108212_ip = 292;
                                continue _fun108212
                            }
                        case 91:
                            if (!(var2 === var4)) {
                                _fun108212_ip = 292;
                                continue _fun108212
                            }
                        case 98:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 20;
                            var4 = var4[var2];
                            var2 = undefined;
                            var4 = var5.bind(var2)(var4);
                            var2 = var4.isChannelFocused;
                            var2 = var2.bind(var4)();
                            if (var2) {
                                _fun108212_ip = 292;
                                continue _fun108212
                            }
                        case 139:
                            var2 = _closure2_slot2;
                            if (!var2) {
                                _fun108212_ip = 292;
                                continue _fun108212
                            }
                        case 149:
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            if (!(var1 != var2)) {
                                _fun108212_ip = 292;
                                continue _fun108212
                            }
                        case 165:
                            var1 = var2.closeCustomKeyboard;
                            var1 = var1.bind(var2)();
                            _fun108212_ip = 292;
                            continue _fun108212;
                        case 177:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 18;
                            var2 = var5[var2];
                            var5 = undefined;
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.ANIMATION_SOURCE;
                            var2 = var2.KEYBOARD;
                            if (!(var3 !== var2)) {
                                _fun108212_ip = 292;
                                continue _fun108212
                            }
                        case 218:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 19;
                            var2 = var6[var1];
                            var3 = var4.bind(var5)(var2);
                            var2 = var3.triggerHapticFeedback;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.HapticFeedbackTypes;
                            var1 = var1.IMPACT_LIGHT;
                            var1 = var2.bind(var3)(var1);
                            _fun108212_ip = 292;
                            continue _fun108212;
                        case 272:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun108212_ip = 292;
                                continue _fun108212
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
                var28 = var9.bind(var13)(var2, var4);
                var4 = 21;
                var2 = var40[var4];
                var18 = var41.bind(var3)(var2);
                var9 = var18.useDerivedValue;
                var2 = function() {
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
                var9 = var40[var4];
                var23 = var41.bind(var3)(var9);
                var19 = var23.useAnimatedReaction;
                var18 = function() {
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
                var9 = function arg0, arg1() {
                    _fun108215: for (var _fun108215_ip = 0;;) switch (_fun108215_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = null;
                            var1 = arg1;
                            if (!(var2 != var1)) {
                                _fun108215_ip = 82;
                                continue _fun108215
                            }
                        case 12:
                            if (var0) {
                                _fun108215_ip = 22;
                                continue _fun108215
                            }
                        case 15:
                            var0 = _closure2_slot7;
                        case 22:
                            if (var0) {
                                _fun108215_ip = 82;
                                continue _fun108215
                            }
                        case 25:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 21;
                            var0 = var5[var0];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var0);
                            var2 = var3.runOnJS;
                            var0 = 22;
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
                var26 = {};
                var26.forceMaxHeight = var27;
                var27 = var40[var4];
                var27 = var41.bind(var3)(var27);
                var27 = var27.runOnJS;
                var26.runOnJS = var27;
                var27 = 22;
                var27 = var40[var27];
                var27 = var41.bind(var3)(var27);
                var27 = var27.dismissGlobalKeyboard;
                var26.dismissGlobalKeyboard = var27;
                var9.__closure = var26;
                var26 = 14649856286006.0;
                var9.__workletHash = var26;
                var26 = _closure1_slot13;
                var9.__initData = var26;
                var9 = var19.bind(var23)(var18, var9);
                var9 = 23;
                var9 = var40[var9];
                var18 = var7.bind(var3)(var9);
                var9 = function() { // Environment: var14
                    var0 = function() { // Environment: var0
                        _fun108217: for (var _fun108217_ip = 0;;) switch (_fun108217_ip) {
                            case 0:
                                var2 = _closure2_slot3;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun108217_ip = 23;
                                    continue _fun108217
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
                    var0 = 18;
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
                var9[0] = var22;
                var9[1] = var32;
                var9[2] = var11;
                var9[3] = var2;
                var9[4] = var1;
                var2 = function() { // Environment: var14
                    _fun108219: for (var _fun108219_ip = 0;;) switch (_fun108219_ip) {
                        case 0:
                            var3 = _closure2_slot6;
                            var2 = false;
                            var0 = null;
                            if (!(var2 !== var3)) {
                                _fun108219_ip = 67;
                                continue _fun108219
                            }
                        case 15:
                            var4 = _closure1_slot7;
                            var3 = _closure1_slot19;
                            var2 = {};
                            var5 = _closure2_slot4;
                            var2.style = var5;
                            var5 = function() {
                                _fun108220: for (var _fun108220_ip = 0;;) switch (_fun108220_ip) {
                                    case 0:
                                        var0 = _closure2_slot8;
                                        var3 = var0.current;
                                        var0 = null;
                                        if (!(var0 != var3)) {
                                            _fun108220_ip = 28;
                                            continue _fun108220
                                        }
                                    case 18:
                                        var2 = var3.collapse;
                                        var2 = var2.bind(var3)();
                                    case 28:
                                        var2 = _closure2_slot10;
                                        if (!var2) {
                                            _fun108220_ip = 58;
                                            continue _fun108220
                                        }
                                    case 35:
                                        var1 = _closure2_slot8;
                                        var1 = var1.current;
                                        if (!(var0 != var1)) {
                                            _fun108220_ip = 58;
                                            continue _fun108220
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
                var22 = var18.bind(var13)(var2, var9);
                var2 = var40[var4];
                var18 = var41.bind(var3)(var2);
                var9 = var18.useAnimatedStyle;
                var2 = function() {
                    var0 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 21;
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
                var23 = {};
                var26 = var40[var4];
                var26 = var41.bind(var3)(var26);
                var26 = var26.interpolate;
                var23.interpolate = var26;
                var23.animatedIndex = var10;
                var2.__closure = var23;
                var23 = 13716272266662.0;
                var2.__workletHash = var23;
                var23 = _closure1_slot14;
                var2.__initData = var23;
                var18 = var9.bind(var18)(var2);
                var2 = 24;
                var2 = var40[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var37 = var2.left;
                var36 = var2.right;
                var2 = 25;
                var2 = var40[var2];
                var7 = var7.bind(var3)(var2);
                var2 = {};
                var9 = true;
                var2.ignoreKeyboard = var9;
                var2 = var7.bind(var3)(var2);
                var7 = var2.height;
                var27 = var2.width;
                var23 = var13.useCallback;
                var9 = function(arg0) { // Environment: var14
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.BottomSheetFooter;
                    var0 = {};
                    var6 = arg0;
                    var7 = var0;
                    var5 = copyDataProperties(var7, var6);
                    var5 = _closure1_slot15;
                    var4 = 'children';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2 = new Array(0);
                var23 = var23.bind(var13)(var9, var2);
                var9 = var13.useState;
                var2 = false;
                var13 = var9.bind(var13)(var2);
                var9 = _closure1_slot3;
                var2 = 2;
                var26 = var9.bind(var3)(var13, var2);
                var9 = 0;
                var13 = var26[var9];
                var2 = 1;
                var39 = var26[var2];
                _closure2_slot12 = var39;
                var2 = var40[var4];
                var34 = var41.bind(var3)(var2);
                var33 = var34.useAnimatedReaction;
                var26 = function() {
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
                var26.__closure = var2;
                var2 = 8952872079740.0;
                var26.__workletHash = var2;
                var2 = _closure1_slot16;
                var26.__initData = var2;
                var2 = function arg0, arg1() {
                    _fun108224: for (var _fun108224_ip = 0;;) switch (_fun108224_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            if (!(var2 !== var0)) {
                                _fun108224_ip = 57;
                                continue _fun108224
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 21;
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
                var38 = {};
                var40 = var40[var4];
                var40 = var41.bind(var3)(var40);
                var40 = var40.runOnJS;
                var38.runOnJS = var40;
                var38.setAccessibilityViewIsModal = var39;
                var2.__closure = var38;
                var38 = 16051387075966.0;
                var2.__workletHash = var38;
                var38 = _closure1_slot17;
                var2.__initData = var38;
                var2 = var33.bind(var34)(var26, var2);
                var26 = var1;
                if (var26) {
                    _fun108209_ip = 1145;
                    continue _fun108209
                }
            case 1142:
                var26 = var0;
            case 1145:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 26;
                var1 = var0[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useLocalHorizontalSafeArea;
                var1 = var1.bind(var2)();
                var34 = var1.left;
                var33 = var1.right;
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var4 = undefined;
                if (!var6) {
                    _fun108209_ip = 1220;
                    continue _fun108209
                }
            case 1214:
                var4 = 'no-hide-descendants';
            case 1220:
                var0.importantForAccessibility = var4;
                var6 = var15.container;
                var4 = new Array(3);
                var4[0] = var6;
                var6 = {};
                var6.marginLeft = var34;
                var6.marginRight = var33;
                var4[1] = var6;
                var6 = {};
                var38 = global;
                var34 = var38.Math;
                var33 = var34.min;
                if (!(var21 == var35)) {
                    _fun108209_ip = 1285;
                    continue _fun108209
                }
            case 1273:
                var38 = var38.Number;
                var35 = var38.MAX_SAFE_INTEGER;
            case 1285:
                var27 = var27 - var37;
                var27 = var27 - var36;
                var27 = var33.bind(var34)(var35, var27);
                var6.width = var27;
                var6.height = var7;
                var4[2] = var6;
                var0.style = var4;
                var4 = 'box-none';
                var0.pointerEvents = var4;
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var27 = _closure1_slot2;
                var4 = 18;
                var4 = var27[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var4.ref = var32;
                var4.animatedIndex = var10;
                var4.animatedPosition = var31;
                var4.animationConfigs = var30;
                var4.onClose = var29;
                var4.onAnimate = var28;
                var28 = !var26;
                var4.enableContentPanningGesture = var28;
                var26 = !var26;
                var4.enableHandlePanningGesture = var26;
                var4.handleComponent = var22;
                var26 = _closure1_slot0;
                var22 = 5;
                var22 = var27[var22];
                var26 = var26.bind(var3)(var22);
                var22 = var26.isAndroid;
                var26 = var22.bind(var26)();
                var22 = undefined;
                if (!var26) {
                    _fun108209_ip = 1442;
                    continue _fun108209
                }
            case 1433:
                var22 = undefined;
                if (!(var25 === var24)) {
                    _fun108209_ip = 1442;
                    continue _fun108209
                }
            case 1439:
                var22 = var23;
            case 1442:
                var4.renderFooter = var22;
                var22 = var15.background;
                var4.backgroundStyle = var22;
                if (!(var21 != var20)) {
                    _fun108209_ip = 1465;
                    continue _fun108209
                }
            case 1462:
                var19 = var20;
            case 1465:
                var4.backdropComponent = var19;
                var19 = new Array(2);
                var20 = -10;
                var19[0] = var20;
                var20 = 10;
                var19[1] = var20;
                var4.activeOffsetY = var19;
                var9 = 0;
                if (!var11) {
                    _fun108209_ip = 1527;
                    continue _fun108209
                }
            case 1501:
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var11 = 8;
                var11 = var20[var11];
                var11 = var19.bind(var3)(var11);
                var9 = var11.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
            case 1527:
                var4.handleHeight = var9;
                var43 = var4;
                var42 = var8;
                var8 = copyDataProperties(var43, var42);
                var11 = _closure1_slot7;
                var9 = _closure1_slot0;
                var19 = _closure1_slot2;
                var8 = 27;
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
                    _fun108209_ip = 1608;
                    continue _fun108209
                }
            case 1605:
                var17 = var18;
            case 1608:
                var15[1] = var17;
                var15[2] = var16;
                var8.style = var15;
                var14 = function() {
                    _fun108225: for (var _fun108225_ip = 0;;) switch (_fun108225_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun108225_ip = 28;
                                continue _fun108225
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
                    _fun108209_ip = 1714;
                    continue _fun108209
                }
            case 1677:
                var9 = _closure1_slot7;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 28;
                var7 = var11[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var7.animatedSheetIndex = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 1714:
                var4[1] = var6;
                var5 = _closure1_slot18;
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/keyboard/native/PortalKeyboardBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 9112, 33, 478, 1297, 671, 7123, 4076, 3923, 5224, 13945, 4023, 5226, 566, 3911, 1567, 4909, 3280, 9099, 3717, 1582, 4109, 1568, 1464, 13098, 4072, 9241, 2]);