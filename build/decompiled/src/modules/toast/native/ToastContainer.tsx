// modules/toast/native/ToastContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: AnimatedToast, environment: var1
        _fun46410: for (var _fun46410_ip = 0;;) switch (_fun46410_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.toast;
                var8 = var4.key;
                var0 = null;
                var3 = Object.create(var0);
                var13 = 0;
                var3.key = var13;
                var30 = {};
                var29 = var4;
                var28 = var3;
                var9 = copyDataProperties(var30, var29, var28);
                var _closure2_slot0 = var9;
                var18 = var1.state;
                var _closure2_slot1 = var18;
                var10 = var1.cleanUp;
                var _closure2_slot2 = var10;
                var4 = undefined;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var1 = _closure1_slot7;
                var11 = var1.bind(var4)();
                var3 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 6;
                var2 = var12[var1];
                var6 = var3.bind(var4)(var2);
                var2 = var6.useSharedValue;
                var23 = var2.bind(var6)(var13);
                var _closure2_slot3 = var23;
                var6 = _closure1_slot1;
                var2 = 7;
                var2 = var12[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var19 = var2.width;
                var _closure2_slot4 = var19;
                var24 = var2.height;
                var _closure2_slot5 = var24;
                var25 = 8;
                var2 = var12[var25];
                var13 = var3.bind(var4)(var2);
                var2 = var13.useMainTabsHeight;
                var22 = var2.bind(var13)();
                var _closure2_slot6 = var22;
                var2 = 9;
                var2 = var12[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var26 = var2.top;
                var _closure2_slot7 = var26;
                var2 = 10;
                var2 = var12[var2];
                var14 = var3.bind(var4)(var2);
                var13 = var14.useStateFromStores;
                var2 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var7
                    _fun46411: for (var _fun46411_ip = 0;;) switch (_fun46411_ip) {
                        case 0:
                            var0 = _closure1_slot4;
                            var1 = var0.useReducedMotion;
                            if (var1) {
                                _fun46411_ip = 29;
                                continue _fun46411
                            }
                        case 16:
                            var0 = _closure2_slot0;
                            var1 = var0.disableAnimations;
                        case 29:
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun46411_ip = 41;
                                continue _fun46411
                            }
                        case 38:
                            var0 = var1;
                        case 41:
                            return var0;
                    }
                };
                var16 = var13.bind(var14)(var6, var2);
                var _closure2_slot8 = var16;
                var6 = var9.content;
                var _closure2_slot9 = var6;
                var2 = 11;
                var2 = var12[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useIsScreenReaderEnabled;
                var2 = var2.bind(var3)();
                var3 = var0 != var6;
                if (!var3) {
                    _fun46410_ip = 304;
                    continue _fun46410
                }
            case 293:
                var13 = 'string';
                var12 = typeof var6;
                var3 = var13 === var12;
            case 304:
                _closure2_slot10 = var3;
                var12 = var9.position;
                var27 = 'top';
                if (!(var4 !== var12)) {
                    _fun46410_ip = 324;
                    continue _fun46410
                }
            case 321:
                var27 = var12;
            case 324:
                _closure2_slot11 = var27;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var1];
                var14 = var13.bind(var4)(var12);
                var13 = var14.useSharedValue;
                var15 = _closure1_slot8;
                if (var16) {
                    _fun46410_ip = 366;
                    continue _fun46410
                }
            case 358:
                var12 = var15.START;
                _fun46410_ip = 372;
                continue _fun46410;
            case 366:
                var12 = var15.END;
            case 372:
                var17 = var13.bind(var14)(var12);
                _closure2_slot12 = var17;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var12 = var20[var1];
                var14 = var21.bind(var4)(var12);
                var13 = var14.useAnimatedStyle;
                var12 = function() { // Original name: p, environment: var7
                    _fun46412: for (var _fun46412_ip = 0;;) switch (_fun46412_ip) {
                        case 0:
                            var0 = _closure2_slot11;
                            var9 = 'top';
                            if (!(var9 !== var0)) {
                                _fun46412_ip = 53;
                                continue _fun46412
                            }
                        case 15:
                            var2 = _closure2_slot5;
                            var3 = _closure2_slot3;
                            var0 = var3.get;
                            var0 = var0.bind(var3)();
                            var2 = var2 - var0;
                            var0 = _closure2_slot6;
                            var2 = var2 - var0;
                            var0 = 8;
                            var7 = var2 - var0;
                            _fun46412_ip = 64;
                            continue _fun46412;
                        case 53:
                            var2 = _closure2_slot7;
                            var0 = 8;
                            var7 = var2 + var0;
                        case 64:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var14 = 6;
                            var0 = var0[var14];
                            var13 = undefined;
                            var6 = var2.bind(var13)(var0);
                            var5 = var6.interpolate;
                            var2 = _closure2_slot12;
                            var0 = var2.get;
                            var3 = var0.bind(var2)();
                            var2 = _closure1_slot9;
                            var0 = _closure2_slot11;
                            var8 = -30;
                            if (!(var9 !== var0)) {
                                _fun46412_ip = 155;
                                continue _fun46412
                            }
                        case 126:
                            var9 = _closure2_slot5;
                            var0 = _closure2_slot6;
                            var9 = var9 - var0;
                            var10 = _closure2_slot3;
                            var0 = var10.get;
                            var0 = var0.bind(var10)();
                            var8 = var9 - var0;
                        case 155:
                            var0 = new Array(2);
                            var0[0] = var8;
                            var0[1] = var7;
                            var9 = var5.bind(var6)(var3, var2, var0);
                            var0 = {};
                            var2 = _closure2_slot8;
                            if (var2) {
                                _fun46412_ip = 233;
                                continue _fun46412
                            }
                        case 183:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 12;
                            var2 = var5[var2];
                            var6 = var3.bind(var13)(var2);
                            var5 = var6.withSpring;
                            var3 = _closure2_slot12;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = _closure1_slot10;
                            var2 = var5.bind(var6)(var3, var2);
                            _fun46412_ip = 246;
                            continue _fun46412;
                        case 233:
                            var5 = _closure2_slot12;
                            var3 = var5.get;
                            var2 = var3.bind(var5)();
                        case 246:
                            var0.opacity = var2;
                            var3 = {};
                            var5 = _closure2_slot8;
                            var2 = var9;
                            if (var5) {
                                _fun46412_ip = 412;
                                continue _fun46412
                            }
                        case 265:
                            var12 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 12;
                            var5 = var11[var5];
                            var8 = var12.bind(var13)(var5);
                            var7 = var8.withSpring;
                            var18 = _closure1_slot11;
                            var5 = function(arg0) { // Original name: t, environment: var5
                                _fun46413: for (var _fun46413_ip = 0;;) switch (_fun46413_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun46413_ip = 54;
                                            continue _fun46413
                                        }
                                    case 6:
                                        var2 = _closure2_slot1;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 13;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3);
                                        var1 = var1.TransitionStates;
                                        var1 = var1.YEETED;
                                        var0 = var2 === var1;
                                    case 54:
                                        if (!var0) {
                                            _fun46413_ip = 103;
                                            continue _fun46413
                                        }
                                    case 57:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 6;
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
                            var10 = {};
                            var15 = _closure2_slot1;
                            var10.state = var15;
                            var15 = 13;
                            var15 = var11[var15];
                            var15 = var12.bind(var13)(var15);
                            var15 = var15.TransitionStates;
                            var10.TransitionStates = var15;
                            var11 = var11[var14];
                            var11 = var12.bind(var13)(var11);
                            var11 = var11.runOnJS;
                            var10.runOnJS = var11;
                            var11 = _closure2_slot2;
                            var10.cleanUp = var11;
                            var5.__closure = var10;
                            var10 = 633151838569.0;
                            var5.__workletHash = var10;
                            var4 = _closure1_slot13;
                            var5.__initData = var4;
                            var17 = 'respect-motion-settings';
                            var20 = var8;
                            var19 = var9;
                            var16 = var5;
                            var2 = var20[var7](var19, var18, var17, var16, var15);
                        case 412:
                            var3.translateY = var2;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var0.transform = var2;
                            var2 = _closure2_slot4;
                            var1 = 32;
                            var1 = var2 - var1;
                            var0.maxWidth = var1;
                            return var0;
                    }
                };
                var15 = {};
                var15.position = var27;
                var15.safeAreaTop = var26;
                var15.CONTAINER_DISTANCE_VERTICAL = var25;
                var15.screenHeight = var24;
                var15.toastHeight = var23;
                var15.bottomTabsHeight = var22;
                var22 = var20[var1];
                var22 = var21.bind(var4)(var22);
                var22 = var22.interpolate;
                var15.interpolate = var22;
                var15.animationState = var17;
                var22 = _closure1_slot9;
                var15.ANIMATION_STATE_INPUT = var22;
                var22 = -30;
                var15.CONTAINER_TOP_POSITION_START = var22;
                var15.isReducedMotion = var16;
                var22 = 12;
                var22 = var20[var22];
                var22 = var21.bind(var4)(var22);
                var22 = var22.withSpring;
                var15.withSpring = var22;
                var22 = _closure1_slot10;
                var15.OPACITY_SPRING_PHYSICS = var22;
                var22 = _closure1_slot11;
                var15.TOAST_SPRING_PHYSICS = var22;
                var15.state = var18;
                var22 = 13;
                var22 = var20[var22];
                var22 = var21.bind(var4)(var22);
                var22 = var22.TransitionStates;
                var15.TransitionStates = var22;
                var20 = var20[var1];
                var20 = var21.bind(var4)(var20);
                var20 = var20.runOnJS;
                var15.runOnJS = var20;
                var15.cleanUp = var10;
                var15.screenWidth = var19;
                var19 = 16;
                var15.CONTAINER_DISTANCE_SIDES = var19;
                var12.__closure = var15;
                var15 = 15232111823130.0;
                var12.__workletHash = var15;
                var15 = _closure1_slot12;
                var12.__initData = var15;
                var12 = var13.bind(var14)(var12);
                var15 = _closure1_slot3;
                var14 = var15.useEffect;
                var13 = new Array(4);
                var13[0] = var18;
                var13[1] = var17;
                var13[2] = var16;
                var13[3] = var10;
                var10 = function() { // Environment: var7
                    _fun46414: for (var _fun46414_ip = 0;;) switch (_fun46414_ip) {
                        case 0:
                            var4 = _closure2_slot1;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 13;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.TransitionStates;
                            var3 = var3.YEETED;
                            if (!(var4 !== var3)) {
                                _fun46414_ip = 74;
                                continue _fun46414
                            }
                        case 48:
                            var5 = _closure2_slot12;
                            var4 = var5.set;
                            var3 = _closure1_slot8;
                            var3 = var3.END;
                            var3 = var4.bind(var5)(var3);
                            _fun46414_ip = 113;
                            continue _fun46414;
                        case 74:
                            var4 = _closure2_slot12;
                            var3 = var4.set;
                            var2 = _closure1_slot8;
                            var2 = var2.START;
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure2_slot8;
                            if (!var2) {
                                _fun46414_ip = 113;
                                continue _fun46414
                            }
                        case 105:
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)();
                        case 113:
                            return var0;
                    }
                };
                var10 = var14.bind(var15)(var10, var13);
                var14 = _closure1_slot3;
                var13 = var14.useEffect;
                var10 = new Array(2);
                var10[0] = var3;
                var10[1] = var6;
                var6 = function() { // Environment: var7
                    _fun46415: for (var _fun46415_ip = 0;;) switch (_fun46415_ip) {
                        case 0:
                            var1 = _closure2_slot10;
                            if (!var1) {
                                _fun46415_ip = 56;
                                continue _fun46415
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var2 = var1.AccessibilityAnnouncer;
                            var1 = var2.announce;
                            var0 = _closure2_slot9;
                            var0 = var1.bind(var2)(var0);
                        case 56:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var13.bind(var14)(var6, var10);
                if (!var3) {
                    _fun46410_ip = 725;
                    continue _fun46410
                }
            case 720:
                var0 = null;
                if (var2) {
                    _fun46410_ip = 838;
                    continue _fun46410
                }
            case 725:
                var3 = _closure1_slot6;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = var10[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var13 = 'none';
                var1.pointerEvents = var13;
                var13 = var11.container;
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var1.style = var11;
                var7 = function(arg0) { // Original name: onLayout, environment: var7
                    var2 = _closure2_slot3;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var0 = var0.height;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1.onLayout = var7;
                var7 = _closure1_slot6;
                var5 = 15;
                var5 = var10[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var30 = var5;
                var29 = var9;
                var9 = copyDataProperties(var30, var29);
                var5 = var7.bind(var4)(var6, var5, var8);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 838:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: renderItem, environment: var1
        var4 = _closure1_slot6;
        var3 = _closure1_slot14;
        var2 = {};
        var0 = arg1;
        var2.toast = var0;
        var0 = arg2;
        var2.state = var0;
        var0 = arg3;
        var2.cleanUp = var0;
        var1 = undefined;
        var0 = arg0;
        var0 = var4.bind(var1)(var3, var2, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: getItemKey, environment: var1
        var0 = arg0;
        var0 = var0.key;
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: wrapChildren, environment: var1
        var3 = _closure1_slot6;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 16;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.NonExpandingOverlayView;
        var0 = {};
        var4 = arg0;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var9 = 0;
    var6 = var5[var9];
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var8 = 1;
    var3 = var5[var8];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var7 = var10.createStyles;
    var3 = {};
    var11 = {
        'position': 'absolute',
        'alignSelf': 'center',
        'flexDirection': 'row',
        'justifyContent': 'center'
    };
    var12 = 5;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var12 = var12.TOAST_CONTAINER_SHADOW_COLOR;
    var11.shadowColor = var12;
    var3.container = var11;
    var3 = var7.bind(var10)(var3);
    var _closure1_slot7 = var3;
    var7 = {};
    var7.START = var9;
    var3 = 'START';
    var7[var9] = var3;
    var7.END = var8;
    var3 = 'END';
    var7[var8] = var3;
    var _closure1_slot8 = var7;
    var8 = var7.START;
    var3 = new Array(2);
    var3[0] = var8;
    var7 = var7.END;
    var3[1] = var7;
    var _closure1_slot9 = var3;
    var3 = {
        'mass': 0.1,
        'damping': 10,
        'stiffness': 100,
        'overshootClamping': true
    };
    var _closure1_slot10 = var3;
    var3 = {
        'mass': 0.35,
        'damping': 15,
        'stiffness': 350,
        'restDisplacementThreshold': 0.1,
        'restSpeedThreshold': 0.1
    };
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = "function ToastContainerTsx1(){const{position,safeAreaTop,CONTAINER_DISTANCE_VERTICAL,screenHeight,toastHeight,bottomTabsHeight,interpolate,animationState,ANIMATION_STATE_INPUT,CONTAINER_TOP_POSITION_START,isReducedMotion,withSpring,OPACITY_SPRING_PHYSICS,TOAST_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,screenWidth,CONTAINER_DISTANCE_SIDES}=this.__closure;const verticalPositionEnd=position==='top'?safeAreaTop+CONTAINER_DISTANCE_VERTICAL:screenHeight-toastHeight.get()-bottomTabsHeight-CONTAINER_DISTANCE_VERTICAL;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[position==='top'?CONTAINER_TOP_POSITION_START:screenHeight-bottomTabsHeight-toastHeight.get(),verticalPositionEnd]);return{opacity:!isReducedMotion?withSpring(animationState.get(),OPACITY_SPRING_PHYSICS):animationState.get(),transform:[{translateY:!isReducedMotion?withSpring(translateY,TOAST_SPRING_PHYSICS,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}):translateY}],maxWidth:screenWidth-CONTAINER_DISTANCE_SIDES*2};}";
    var3.code = var7;
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = 'function ToastContainerTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 10;
        var2 = var6[var2];
        var3 = undefined;
        var8 = var1.bind(var3)(var2);
        var7 = var8.useStateFromStoresArray;
        var2 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var0
            _fun46421: for (var _fun46421_ip = 0;;) switch (_fun46421_ip) {
                case 0:
                    var1 = _closure1_slot5;
                    var0 = var1.getContent;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun46421_ip = 33;
                        continue _fun46421
                    }
                case 23:
                    var0 = new Array(1);
                    var0[0] = var1;
                    _fun46421_ip = 37;
                    continue _fun46421;
                case 33:
                    var0 = new Array(0);
                case 37:
                    return var0;
            }
        };
        var5 = var7.bind(var8)(var5, var2);
        var _closure2_slot0 = var5;
        var8 = _closure1_slot3;
        var7 = var8.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var0 = function() { // Environment: var0
            _fun46422: for (var _fun46422_ip = 0;;) switch (_fun46422_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var3 = var2.length;
                    var2 = 0;
                    if (!(var2 === var3)) {
                        _fun46422_ip = 24;
                        continue _fun46422
                    }
                case 20:
                    var3 = undefined;
                    return var3;
                case 24:
                    var3 = global;
                    var4 = var3.setTimeout;
                    var1 = _closure2_slot0;
                    var1 = var1[var2];
                    var1 = var1.toastDurationMs;
                    var2 = null;
                    var2 = var2 != var1;
                    var3 = 2000;
                    if (!var2) {
                        _fun46422_ip = 64;
                        continue _fun46422
                    }
                case 61:
                    var3 = var1;
                case 64:
                    var2 = undefined;
                    var1 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 17;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var0 = var1.close;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1 = var4.bind(var2)(var1, var3);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var0 = var7.bind(var8)(var0, var2);
        var2 = _closure1_slot6;
        var0 = 13;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TransitionGroup;
        var0 = {};
        var0.items = var5;
        var5 = _closure1_slot15;
        var0.renderItem = var5;
        var5 = _closure1_slot16;
        var0.getItemKey = var5;
        var4 = _closure1_slot17;
        var0.wrapChildren = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/toast/native/ToastContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 5186, 33, 1297, 4835, 3679, 1464, 5187, 1568, 566, 4029, 4040, 3987, 3119, 12110, 3989, 3107, 2]);