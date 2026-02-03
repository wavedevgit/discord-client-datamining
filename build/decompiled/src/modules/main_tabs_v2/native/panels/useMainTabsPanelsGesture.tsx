// modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun100667: for (var _fun100667_ip = 0;;) switch (_fun100667_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var0 = metroImportDefault;
            var _closure1_slot1 = var0;
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
            var3 = var3.useWindowDimensions;
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.LaunchPadTypes;
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var6 = var4.bind(var0)(var3);
            var3 = var6.isAndroid;
            var3 = var3.bind(var6)();
            var _closure1_slot6 = var3;
            var6 = 4;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            if (var3) {
                _fun100667_ip = 171;
                continue _fun100667
            }
        case 163:
            var3 = var6.DEFAULT_PANELS_ANIMATION_CONFIG;
            _fun100667_ip = 177;
            continue _fun100667;
        case 171:
            var3 = var6.ANDROID_PANELS_ANIMATION_CONFIG;
        case 177:
            var _closure1_slot7 = var3;
            var3 = {};
            var6 = "function useMainTabsPanelsGestureTsx1(width){const{isDragging,translateX,IS_ANDROID,withTiming,timingInstant}=this.__closure;if(isDragging.get())return;if(translateX.get()===0)return;translateX.set(IS_ANDROID?withTiming(width,timingInstant,'animate-always'):width);}";
            var3.code = var6;
            var _closure1_slot8 = var3;
            var3 = {};
            var6 = "function useMainTabsPanelsGestureTsx2(show,isFling,velocity,force){const{translateX,width,onVisibilityChange,runOnJS,onPreMovement,panelsConfig,isTimingConfig,withTiming,withSpring}=this.__closure;if(!force&&translateX.get()!==0&&translateX.get()!==width){return false;}const targetTranslationX=show?0:width;if(translateX.get()===targetTranslationX){if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}return false;}if(onPreMovement!=null){runOnJS(onPreMovement)(show);}const animationConfig=show?isFling?panelsConfig.swipeSidePanelOpen:panelsConfig.nonSwipeSidePanelOpen:isFling?panelsConfig.swipeSidePanelClose:panelsConfig.nonSwipeSidePanelClose;function handleAnimationFinish(finished){'worklet';if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}translateX.set(isTimingConfig(animationConfig)?withTiming(targetTranslationX,animationConfig,'respect-motion-settings',handleAnimationFinish):withSpring(targetTranslationX,{...animationConfig,velocity:velocity},'respect-motion-settings',handleAnimationFinish));return true;}";
            var3.code = var6;
            var _closure1_slot9 = var3;
            var3 = {};
            var6 = 'function handleAnimationFinish_useMainTabsPanelsGestureTsx3(finished){const{onVisibilityChange,runOnJS,show}=this.__closure;if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}';
            var3.code = var6;
            var _closure1_slot10 = var3;
            var3 = {};
            var6 = 'function useMainTabsPanelsGestureTsx4(){const{disallowGesture}=this.__closure;return disallowGesture.get();}';
            var3.code = var6;
            var _closure1_slot11 = var3;
            var3 = {};
            var6 = 'function useMainTabsPanelsGestureTsx5(currentDisallow,previousDisallow){const{didJustAllowGesture}=this.__closure;if(currentDisallow===previousDisallow)return;if(currentDisallow)return;didJustAllowGesture.set(true);}';
            var3.code = var6;
            var _closure1_slot12 = var3;
            var3 = {};
            var6 = 'function useMainTabsPanelsGestureTsx6(e){const{isDragging,disallowGesture,didJustAllowGesture,runOnJS,setIsDraggingRef,panelsConfig,movePanel,translateX,width}=this.__closure;try{if(!isDragging.get()||disallowGesture.get()||didJustAllowGesture.get()){return;}}finally{isDragging.set(false);didJustAllowGesture.set(false);runOnJS(setIsDraggingRef)(false);}if(Math.abs(e.velocityX)>panelsConfig.minFlingVelocityX){movePanel(e.velocityX<0,true,e.velocityX,true);}else{movePanel(translateX.get()<width/2,false,e.velocityX,true);}}';
            var3.code = var6;
            var _closure1_slot13 = var3;
            var3 = {};
            var6 = 'function useMainTabsPanelsGestureTsx7(e){const{disallowGesture,translateX,width,didJustAllowGesture}=this.__closure;if(disallowGesture.get()){const currentTranslateX=translateX.get();if(currentTranslateX===0||currentTranslateX===width){return;}translateX.set(0);return;}translateX.set(Math.max(0,Math.min(width,translateX.get()+e.changeX)));didJustAllowGesture.set(false);}';
            var3.code = var6;
            var _closure1_slot14 = var3;
            var3 = {};
            var6 = 'function useMainTabsPanelsGestureTsx8(){const{isDragging,runOnJS,setIsDraggingRef,onDragStart}=this.__closure;isDragging.set(true);runOnJS(setIsDraggingRef)(true);if(onDragStart!=null){runOnJS(onDragStart)();}}';
            var3.code = var6;
            var _closure1_slot15 = var3;
            var3 = {};
            var6 = 'function useMainTabsPanelsGestureTsx9(event,manager){const{State,startPosition,GESTURE_MIN_DISTANCE,disallowGesture,translateX,cancelOnSwipeRightFromStart,width,launchPadType,LaunchPadTypes,windowWidth,LAUNCHPAD_GESTURE_INSET}=this.__closure;if(event.state!==State.BEGAN)return;const touch=event.allTouches[0];if(touch==null)return;const xDiff=touch.x-startPosition.get().x;const xDiffAbs=Math.abs(xDiff);if(xDiffAbs<=GESTURE_MIN_DISTANCE)return;if(disallowGesture.get()){return;}const yDiffAbs=Math.abs(touch.y-startPosition.get().y);if(xDiffAbs<=yDiffAbs||xDiffAbs*xDiffAbs+yDiffAbs*yDiffAbs<GESTURE_MIN_DISTANCE*GESTURE_MIN_DISTANCE){return;}if(xDiff<=0){if(translateX.get()===0){manager.fail();return;}}else{if(cancelOnSwipeRightFromStart===true&&translateX.get()>=width){manager.fail();return;}}const isGestureBasedLaunchPad=launchPadType===LaunchPadTypes.GESTURE_EDGE||launchPadType===LaunchPadTypes.GESTURE_FULL;if(isGestureBasedLaunchPad&&xDiff<0){const launchpadGestureEdge=windowWidth-LAUNCHPAD_GESTURE_INSET;if(launchPadType===LaunchPadTypes.GESTURE_FULL&&startPosition.get().x<launchpadGestureEdge||launchPadType===LaunchPadTypes.GESTURE_EDGE&&startPosition.get().x>=launchpadGestureEdge){manager.fail();return;}}manager.activate();}';
            var3.code = var6;
            var _closure1_slot16 = var3;
            var3 = {};
            var6 = 'function useMainTabsPanelsGestureTsx10(event,manager){const{startPosition}=this.__closure;const touch=event.allTouches[0];if(touch==null)return;startPosition.set({x:touch.x,y:touch.y});manager.begin();}';
            var3.code = var6;
            var _closure1_slot17 = var3;
            var3 = 13;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun100668: for (var _fun100668_ip = 0;;) switch (_fun100668_ip) {
                    case 0:
                        var2 = arg0;
                        var16 = var2.canDrag;
                        var _closure2_slot0 = var16;
                        var24 = var2.onVisibilityChange;
                        var _closure2_slot1 = var24;
                        var17 = var2.onDragStart;
                        var _closure2_slot2 = var17;
                        var23 = var2.onPreMovement;
                        var _closure2_slot3 = var23;
                        var5 = var2.startShown;
                        var1 = var2.openWidth;
                        var13 = var2.cancelOnSwipeRightFromStart;
                        var _closure2_slot4 = var13;
                        var20 = undefined;
                        var _closure2_slot8 = var20;
                        var _closure2_slot9 = var20;
                        var _closure2_slot10 = var20;
                        var _closure2_slot11 = var20;
                        var _closure2_slot12 = var20;
                        var _closure2_slot13 = var20;
                        var _closure2_slot14 = var20;
                        var _closure2_slot15 = var20;
                        var _closure2_slot16 = var20;
                        var _closure2_slot17 = var20;
                        var _closure2_slot18 = var20;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 5;
                        var2 = var4[var2];
                        var2 = var3.bind(var20)(var2);
                        var14 = var2.bind(var20)();
                        var _closure2_slot5 = var14;
                        var2 = 6;
                        var2 = var4[var2];
                        var2 = var3.bind(var20)(var2);
                        var19 = var2.bind(var20)();
                        var _closure2_slot6 = var19;
                        var2 = _closure1_slot4;
                        var2 = var2.bind(var20)();
                        var18 = var2.width;
                        var _closure2_slot7 = var18;
                        var3 = null;
                        var2 = var18;
                        if (!(var3 != var1)) {
                            _fun100668_ip = 193;
                            continue _fun100668
                        }
                    case 190:
                        var2 = var1;
                    case 193:
                        _closure2_slot8 = var2;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var8 = 7;
                        var1 = var1[var8];
                        var4 = var3.bind(var20)(var1);
                        var3 = var4.useSharedValue;
                        var1 = 0;
                        if (var5) {
                            _fun100668_ip = 231;
                            continue _fun100668
                        }
                    case 228:
                        var1 = var2;
                    case 231:
                        var4 = var3.bind(var4)(var1);
                        _closure2_slot9 = var4;
                        var11 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var1 = var21[var8];
                        var3 = var11.bind(var20)(var1);
                        var1 = var3.useSharedValue;
                        var22 = false;
                        var5 = var1.bind(var3)(var22);
                        _closure2_slot10 = var5;
                        var9 = _closure1_slot3;
                        var1 = var9.useRef;
                        var1 = var1.bind(var9)(var22);
                        _closure2_slot11 = var1;
                        var10 = var9.useCallback;
                        var6 = new Array(1);
                        var6[0] = var1;
                        var3 = function(arg0) { // Environment: var0
                            var1 = _closure2_slot11;
                            var0 = arg0;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var12 = var10.bind(var9)(var3, var6);
                        _closure2_slot12 = var12;
                        var3 = var21[var8];
                        var6 = var11.bind(var20)(var3);
                        var3 = var6.useSharedValue;
                        var10 = var3.bind(var6)(var22);
                        _closure2_slot13 = var10;
                        var15 = var9.useEffect;
                        var6 = new Array(3);
                        var6[0] = var5;
                        var6[1] = var4;
                        var6[2] = var2;
                        var3 = function() { // Environment: var0
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var0 = 7;
                            var1 = var9[var0];
                            var0 = undefined;
                            var4 = var8.bind(var0)(var1);
                            var3 = var4.runOnUI;
                            var2 = function arg0() {
                                _fun100671: for (var _fun100671_ip = 0;;) switch (_fun100671_ip) {
                                    case 0:
                                        var7 = arg0;
                                        var2 = _closure2_slot10;
                                        var1 = var2.get;
                                        var1 = var1.bind(var2)();
                                        if (var1) {
                                            _fun100671_ip = 126;
                                            continue _fun100671
                                        }
                                    case 22:
                                        var2 = _closure2_slot9;
                                        var1 = var2.get;
                                        var2 = var1.bind(var2)();
                                        var1 = 0;
                                        if (!(var1 !== var2)) {
                                            _fun100671_ip = 126;
                                            continue _fun100671
                                        }
                                    case 41:
                                        var2 = _closure2_slot9;
                                        var1 = var2.set;
                                        var4 = _closure1_slot6;
                                        var0 = var7;
                                        if (!var4) {
                                            _fun100671_ip = 121;
                                            continue _fun100671
                                        }
                                    case 63:
                                        var8 = _closure1_slot0;
                                        var9 = _closure1_slot2;
                                        var3 = 8;
                                        var3 = var9[var3];
                                        var4 = undefined;
                                        var6 = var8.bind(var4)(var3);
                                        var5 = var6.withTiming;
                                        var3 = 9;
                                        var3 = var9[var3];
                                        var3 = var8.bind(var4)(var3);
                                        var4 = var3.timingInstant;
                                        var3 = 'animate-always';
                                        var0 = var5.bind(var6)(var7, var4, var3);
                                    case 121:
                                        var0 = var1.bind(var2)(var0);
                                    case 126:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var6 = {};
                            var7 = _closure2_slot10;
                            var6.isDragging = var7;
                            var7 = _closure2_slot9;
                            var6.translateX = var7;
                            var7 = _closure1_slot6;
                            var6.IS_ANDROID = var7;
                            var7 = 8;
                            var7 = var9[var7];
                            var7 = var8.bind(var0)(var7);
                            var7 = var7.withTiming;
                            var6.withTiming = var7;
                            var7 = 9;
                            var7 = var9[var7];
                            var7 = var8.bind(var0)(var7);
                            var7 = var7.timingInstant;
                            var6.timingInstant = var7;
                            var2.__closure = var6;
                            var6 = 16976202846494.0;
                            var2.__workletHash = var6;
                            var5 = _closure1_slot8;
                            var2.__initData = var5;
                            var2 = var3.bind(var4)(var2);
                            var1 = _closure2_slot8;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var3 = var15.bind(var9)(var3, var6);
                        var15 = var9.useCallback;
                        var6 = function arg0, arg1, arg2, arg3() {
                            _fun100672: for (var _fun100672_ip = 0;;) switch (_fun100672_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = arg1;
                                    var _closure3_slot0 = var2;
                                    var0 = arg3;
                                    if (var0) {
                                        _fun100672_ip = 65;
                                        continue _fun100672
                                    }
                                case 18:
                                    var5 = _closure2_slot9;
                                    var4 = var5.get;
                                    var5 = var4.bind(var5)();
                                    var4 = 0;
                                    if (!(var4 !== var5)) {
                                        _fun100672_ip = 65;
                                        continue _fun100672
                                    }
                                case 40:
                                    var5 = _closure2_slot9;
                                    var4 = var5.get;
                                    var4 = var4.bind(var5)();
                                    var0 = _closure2_slot8;
                                    if (!(var4 !== var0)) {
                                        _fun100672_ip = 65;
                                        continue _fun100672
                                    }
                                case 61:
                                    var0 = false;
                                    return var0;
                                case 65:
                                    var10 = 0;
                                    if (var2) {
                                        _fun100672_ip = 77;
                                        continue _fun100672
                                    }
                                case 70:
                                    var10 = _closure2_slot8;
                                case 77:
                                    var5 = _closure2_slot9;
                                    var4 = var5.get;
                                    var4 = var4.bind(var5)();
                                    if (!(var4 !== var10)) {
                                        _fun100672_ip = 383;
                                        continue _fun100672
                                    }
                                case 100:
                                    var5 = _closure2_slot3;
                                    var4 = null;
                                    if (!(var4 != var5)) {
                                        _fun100672_ip = 154;
                                        continue _fun100672
                                    }
                                case 110:
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var4 = 7;
                                    var4 = var5[var4];
                                    var5 = undefined;
                                    var7 = var6.bind(var5)(var4);
                                    var6 = var7.runOnJS;
                                    var4 = _closure2_slot3;
                                    var4 = var6.bind(var7)(var4);
                                    var4 = var4.bind(var5)(var2);
                                case 154:
                                    var4 = _closure1_slot7;
                                    if (var2) {
                                        _fun100672_ip = 183;
                                        continue _fun100672
                                    }
                                case 164:
                                    if (var3) {
                                        _fun100672_ip = 175;
                                        continue _fun100672
                                    }
                                case 167:
                                    var5 = var4.nonSwipeSidePanelClose;
                                    _fun100672_ip = 181;
                                    continue _fun100672;
                                case 175:
                                    var5 = var4.swipeSidePanelClose;
                                case 181:
                                    _fun100672_ip = 203;
                                    continue _fun100672;
                                case 183:
                                    if (var3) {
                                        _fun100672_ip = 194;
                                        continue _fun100672
                                    }
                                case 186:
                                    var3 = var4.nonSwipeSidePanelOpen;
                                    _fun100672_ip = 200;
                                    continue _fun100672;
                                case 194:
                                    var3 = var4.swipeSidePanelOpen;
                                case 200:
                                    var5 = var3;
                                case 203:
                                    var1 = function() { // Environment: var1
                                        var0 = function arg0() {
                                            _fun100674: for (var _fun100674_ip = 0;;) switch (_fun100674_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    if (!var0) {
                                                        _fun100674_ip = 19;
                                                        continue _fun100674
                                                    }
                                                case 6:
                                                    var2 = _closure2_slot1;
                                                    var1 = null;
                                                    var0 = var1 != var2;
                                                case 19:
                                                    if (!var0) {
                                                        _fun100674_ip = 76;
                                                        continue _fun100674
                                                    }
                                                case 22:
                                                    var1 = _closure1_slot0;
                                                    var2 = _closure1_slot2;
                                                    var0 = 7;
                                                    var0 = var2[var0];
                                                    var2 = undefined;
                                                    var3 = var1.bind(var2)(var0);
                                                    var1 = var3.runOnJS;
                                                    var0 = _closure2_slot1;
                                                    var1 = var1.bind(var3)(var0);
                                                    var0 = _closure3_slot0;
                                                    var0 = var1.bind(var2)(var0);
                                                case 76:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var2 = {};
                                        var1 = _closure2_slot1;
                                        var2.onVisibilityChange = var1;
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var3 = 7;
                                        var4 = var4[var3];
                                        var3 = undefined;
                                        var3 = var5.bind(var3)(var4);
                                        var3 = var3.runOnJS;
                                        var2.runOnJS = var3;
                                        var3 = _closure3_slot0;
                                        var2.show = var3;
                                        var0.__closure = var2;
                                        var2 = 1018878139815.0;
                                        var0.__workletHash = var2;
                                        var1 = _closure1_slot10;
                                        var0.__initData = var1;
                                        return var0;
                                    };
                                    var7 = undefined;
                                    var9 = var1.bind(var7)();
                                    var4 = _closure2_slot9;
                                    var3 = var4.set;
                                    var6 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var1 = 4;
                                    var1 = var11[var1];
                                    var6 = var6.bind(var7)(var1);
                                    var1 = var6.isTimingConfig;
                                    var1 = var1.bind(var6)(var5);
                                    var6 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var8 = var5;
                                    if (var1) {
                                        _fun100672_ip = 335;
                                        continue _fun100672
                                    }
                                case 270:
                                    var1 = 10;
                                    var1 = var11[var1];
                                    var13 = var6.bind(var7)(var1);
                                    var12 = var13.withSpring;
                                    var5 = {};
                                    var18 = var5;
                                    var17 = var8;
                                    var1 = copyDataProperties(var18, var17);
                                    var14 = arg2;
                                    var1 = 'velocity';
                                    var5[var1] = var14;
                                    var16 = 'respect-motion-settings';
                                    var19 = var13;
                                    var18 = var10;
                                    var17 = var5;
                                    var15 = var9;
                                    var1 = var19[var12](var18, var17, var16, var15, var14);
                                    _fun100672_ip = 374;
                                    continue _fun100672;
                                case 335:
                                    var5 = 8;
                                    var5 = var11[var5];
                                    var7 = var6.bind(var7)(var5);
                                    var6 = var7.withTiming;
                                    var16 = 'respect-motion-settings';
                                    var19 = var7;
                                    var18 = var10;
                                    var17 = var8;
                                    var15 = var9;
                                    var1 = var19[var6](var18, var17, var16, var15, var14);
                                case 374:
                                    var1 = var3.bind(var4)(var1);
                                    var1 = true;
                                    return var1;
                                case 383:
                                    var3 = _closure2_slot1;
                                    var1 = null;
                                    if (!(var1 != var3)) {
                                        _fun100672_ip = 437;
                                        continue _fun100672
                                    }
                                case 393:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 7;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var4 = var4.bind(var1)(var3);
                                    var3 = var4.runOnJS;
                                    var0 = _closure2_slot1;
                                    var0 = var3.bind(var4)(var0);
                                    var0 = var0.bind(var1)(var2);
                                case 437:
                                    var0 = false;
                                    return var0;
                            }
                        };
                        var3 = {};
                        var3.translateX = var4;
                        var3.width = var2;
                        var3.onVisibilityChange = var24;
                        var25 = var21[var8];
                        var25 = var11.bind(var20)(var25);
                        var25 = var25.runOnJS;
                        var3.runOnJS = var25;
                        var3.onPreMovement = var23;
                        var25 = _closure1_slot7;
                        var3.panelsConfig = var25;
                        var25 = 4;
                        var25 = var21[var25];
                        var25 = var11.bind(var20)(var25);
                        var25 = var25.isTimingConfig;
                        var3.isTimingConfig = var25;
                        var25 = 8;
                        var25 = var21[var25];
                        var25 = var11.bind(var20)(var25);
                        var25 = var25.withTiming;
                        var3.withTiming = var25;
                        var25 = 10;
                        var25 = var21[var25];
                        var25 = var11.bind(var20)(var25);
                        var25 = var25.withSpring;
                        var3.withSpring = var25;
                        var6.__closure = var3;
                        var3 = 4205680413964.0;
                        var6.__workletHash = var3;
                        var3 = _closure1_slot9;
                        var6.__initData = var3;
                        var3 = new Array(4);
                        var3[0] = var24;
                        var3[1] = var23;
                        var3[2] = var4;
                        var3[3] = var2;
                        var3 = var15.bind(var9)(var6, var3);
                        _closure2_slot14 = var3;
                        var6 = var21[var8];
                        var15 = var11.bind(var20)(var6);
                        var6 = var15.useSharedValue;
                        var6 = var6.bind(var15)(var22);
                        _closure2_slot15 = var6;
                        var15 = var21[var8];
                        var24 = var11.bind(var20)(var15);
                        var23 = var24.useAnimatedReaction;
                        var22 = function() {
                            var1 = _closure2_slot13;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var15 = {};
                        var15.disallowGesture = var10;
                        var22.__closure = var15;
                        var15 = 15338765161171.0;
                        var22.__workletHash = var15;
                        var15 = _closure1_slot11;
                        var22.__initData = var15;
                        var15 = function arg0, arg1() {
                            _fun100676: for (var _fun100676_ip = 0;;) switch (_fun100676_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = arg1;
                                    if (!(var0 !== var1)) {
                                        _fun100676_ip = 32;
                                        continue _fun100676
                                    }
                                case 10:
                                    if (var0) {
                                        _fun100676_ip = 32;
                                        continue _fun100676
                                    }
                                case 13:
                                    var2 = _closure2_slot15;
                                    var1 = var2.set;
                                    var0 = true;
                                    var0 = var1.bind(var2)(var0);
                                case 32:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var25 = {};
                        var25.didJustAllowGesture = var6;
                        var15.__closure = var25;
                        var25 = 17048450187141.0;
                        var15.__workletHash = var25;
                        var25 = _closure1_slot12;
                        var15.__initData = var25;
                        var15 = var23.bind(var24)(var22, var15);
                        var8 = var21[var8];
                        var15 = var11.bind(var20)(var8);
                        var11 = var15.useSharedValue;
                        var8 = {
                            'x': 0,
                            'y': 0
                        };
                        var15 = var11.bind(var15)(var8);
                        _closure2_slot16 = var15;
                        var8 = var9.useContext;
                        var11 = _closure1_slot1;
                        var7 = 11;
                        var7 = var21[var7];
                        var7 = var11.bind(var20)(var7);
                        var11 = var8.bind(var9)(var7);
                        _closure2_slot17 = var11;
                        var8 = var9.useMemo;
                        var7 = new Array(15);
                        var7[0] = var19;
                        var7[1] = var4;
                        var7[2] = var2;
                        var7[3] = var18;
                        var7[4] = var5;
                        var7[5] = var3;
                        var7[6] = var17;
                        var7[7] = var16;
                        var7[8] = var15;
                        var7[9] = var14;
                        var7[10] = var13;
                        var7[11] = var10;
                        var7[12] = var12;
                        var7[13] = var11;
                        var7[14] = var6;
                        var6 = function() { // Environment: var0
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var10 = 12;
                            var1 = var9[var10];
                            var7 = undefined;
                            var1 = var8.bind(var7)(var1);
                            var2 = var1.Gesture;
                            var1 = var2.Pan;
                            var4 = var1.bind(var2)();
                            var2 = var4.enabled;
                            var1 = _closure2_slot0;
                            var4 = var2.bind(var4)(var1);
                            var2 = var4.requireExternalGestureToFail;
                            var1 = _closure2_slot17;
                            var4 = var2.bind(var4)(var1);
                            var2 = var4.manualActivation;
                            var1 = 3;
                            var1 = var9[var1];
                            var6 = var8.bind(var7)(var1);
                            var1 = var6.isAndroid;
                            var1 = var1.bind(var6)();
                            var4 = var2.bind(var4)(var1);
                            var2 = var4.hitSlop;
                            var1 = {};
                            var6 = _closure2_slot6;
                            var11 = var6.top;
                            var11 = -var11;
                            var1.top = var11;
                            var11 = var6.left;
                            var11 = -var11;
                            var1.left = var11;
                            var11 = var6.bottom;
                            var11 = -var11;
                            var1.bottom = var11;
                            var6 = var6.right;
                            var6 = -var6;
                            var1.right = var6;
                            var4 = var2.bind(var4)(var1);
                            var2 = var4.onTouchesDown;
                            var1 = function arg0, arg1() {
                                _fun100678: for (var _fun100678_ip = 0;;) switch (_fun100678_ip) {
                                    case 0:
                                        var1 = arg1;
                                        var0 = arg0;
                                        var2 = var0.allTouches;
                                        var0 = 0;
                                        var4 = var2[var0];
                                        var0 = null;
                                        if (!(var0 != var4)) {
                                            _fun100678_ip = 71;
                                            continue _fun100678
                                        }
                                    case 24:
                                        var3 = _closure2_slot16;
                                        var2 = var3.set;
                                        var0 = {};
                                        var5 = var4.x;
                                        var0.x = var5;
                                        var4 = var4.y;
                                        var0.y = var4;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var1.begin;
                                        var0 = var0.bind(var1)();
                                    case 71:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var6 = {};
                            var11 = _closure2_slot16;
                            var6.startPosition = var11;
                            var1.__closure = var6;
                            var6 = 718728838752.0;
                            var1.__workletHash = var6;
                            var6 = _closure1_slot17;
                            var1.__initData = var6;
                            var4 = var2.bind(var4)(var1);
                            var2 = var4.onTouchesMove;
                            var1 = function arg0, arg1() {
                                _fun100679: for (var _fun100679_ip = 0;;) switch (_fun100679_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = arg1;
                                        var5 = var1.state;
                                        var6 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        var9 = 12;
                                        var3 = var0[var9];
                                        var0 = undefined;
                                        var3 = var6.bind(var0)(var3);
                                        var3 = var3.State;
                                        var3 = var3.BEGAN;
                                        if (!(var5 === var3)) {
                                            _fun100679_ip = 464;
                                            continue _fun100679
                                        }
                                    case 55:
                                        var1 = var1.allTouches;
                                        var5 = 0;
                                        var6 = var1[var5];
                                        var1 = null;
                                        if (!(var1 != var6)) {
                                            _fun100679_ip = 464;
                                            continue _fun100679
                                        }
                                    case 76:
                                        var7 = var6.x;
                                        var8 = _closure2_slot16;
                                        var3 = var8.get;
                                        var3 = var3.bind(var8)();
                                        var3 = var3.x;
                                        var3 = var7 - var3;
                                        var8 = global;
                                        var10 = var8.Math;
                                        var7 = var10.abs;
                                        var7 = var7.bind(var10)(var3);
                                        if (!(!(var7 <= var9))) {
                                            _fun100679_ip = 464;
                                            continue _fun100679
                                        }
                                    case 132:
                                        var10 = _closure2_slot13;
                                        var9 = var10.get;
                                        var9 = var9.bind(var10)();
                                        if (var9) {
                                            _fun100679_ip = 464;
                                            continue _fun100679
                                        }
                                    case 151:
                                        var9 = var8.Math;
                                        var8 = var9.abs;
                                        var10 = var6.y;
                                        var11 = _closure2_slot16;
                                        var6 = var11.get;
                                        var6 = var6.bind(var11)();
                                        var6 = var6.y;
                                        var6 = var10 - var6;
                                        var6 = var8.bind(var9)(var6);
                                        if (!(!(var7 <= var6))) {
                                            _fun100679_ip = 464;
                                            continue _fun100679
                                        }
                                    case 202:
                                        var7 = var7 * var7;
                                        var6 = var6 * var6;
                                        var7 = var7 + var6;
                                        var6 = 144;
                                        if (!(!(var7 < var6))) {
                                            _fun100679_ip = 464;
                                            continue _fun100679
                                        }
                                    case 224:
                                        if (!(!(var3 <= var5))) {
                                            _fun100679_ip = 273;
                                            continue _fun100679
                                        }
                                    case 228:
                                        var7 = _closure2_slot4;
                                        var6 = true;
                                        if (!(var6 === var7)) {
                                            _fun100679_ip = 293;
                                            continue _fun100679
                                        }
                                    case 238:
                                        var7 = _closure2_slot9;
                                        var6 = var7.get;
                                        var7 = var6.bind(var7)();
                                        var6 = _closure2_slot8;
                                        if (!(var7 >= var6)) {
                                            _fun100679_ip = 293;
                                            continue _fun100679
                                        }
                                    case 259:
                                        var6 = var2.fail;
                                        var6 = var6.bind(var2)();
                                        var6 = undefined;
                                        return var6;
                                    case 273:
                                        var7 = _closure2_slot9;
                                        var6 = var7.get;
                                        var6 = var6.bind(var7)();
                                        if (!(var5 !== var6)) {
                                            _fun100679_ip = 450;
                                            continue _fun100679
                                        }
                                    case 293:
                                        var7 = _closure2_slot5;
                                        var6 = _closure1_slot5;
                                        var6 = var6.GESTURE_EDGE;
                                        if (!(var7 !== var6)) {
                                            _fun100679_ip = 329;
                                            continue _fun100679
                                        }
                                    case 311:
                                        var7 = _closure2_slot5;
                                        var6 = _closure1_slot5;
                                        var6 = var6.GESTURE_FULL;
                                        if (!(var7 === var6)) {
                                            _fun100679_ip = 424;
                                            continue _fun100679
                                        }
                                    case 329:
                                        if (!(var3 < var5)) {
                                            _fun100679_ip = 424;
                                            continue _fun100679
                                        }
                                    case 333:
                                        var5 = _closure2_slot7;
                                        var3 = 48;
                                        var3 = var5 - var3;
                                        var6 = _closure2_slot5;
                                        var5 = _closure1_slot5;
                                        var5 = var5.GESTURE_FULL;
                                        if (!(var6 === var5)) {
                                            _fun100679_ip = 384;
                                            continue _fun100679
                                        }
                                    case 362:
                                        var6 = _closure2_slot16;
                                        var5 = var6.get;
                                        var5 = var5.bind(var6)();
                                        var5 = var5.x;
                                        if (!(!(var5 < var3))) {
                                            _fun100679_ip = 436;
                                            continue _fun100679
                                        }
                                    case 384:
                                        var5 = _closure2_slot5;
                                        var4 = _closure1_slot5;
                                        var4 = var4.GESTURE_EDGE;
                                        if (!(var5 === var4)) {
                                            _fun100679_ip = 424;
                                            continue _fun100679
                                        }
                                    case 402:
                                        var4 = _closure2_slot16;
                                        var1 = var4.get;
                                        var1 = var1.bind(var4)();
                                        var1 = var1.x;
                                        if (!(!(var1 >= var3))) {
                                            _fun100679_ip = 436;
                                            continue _fun100679
                                        }
                                    case 424:
                                        var1 = var2.activate;
                                        var1 = var1.bind(var2)();
                                        _fun100679_ip = 464;
                                        continue _fun100679;
                                    case 436:
                                        var1 = var2.fail;
                                        var1 = var1.bind(var2)();
                                        var1 = undefined;
                                        return var1;
                                    case 450:
                                        var1 = var2.fail;
                                        var1 = var1.bind(var2)();
                                        var1 = undefined;
                                        return var1;
                                    case 464:
                                        return var0;
                                }
                            };
                            var6 = {};
                            var11 = var9[var10];
                            var11 = var8.bind(var7)(var11);
                            var11 = var11.State;
                            var6.State = var11;
                            var11 = _closure2_slot16;
                            var6.startPosition = var11;
                            var6.GESTURE_MIN_DISTANCE = var10;
                            var10 = _closure2_slot13;
                            var6.disallowGesture = var10;
                            var10 = _closure2_slot9;
                            var6.translateX = var10;
                            var10 = _closure2_slot4;
                            var6.cancelOnSwipeRightFromStart = var10;
                            var10 = _closure2_slot8;
                            var6.width = var10;
                            var10 = _closure2_slot5;
                            var6.launchPadType = var10;
                            var10 = _closure1_slot5;
                            var6.LaunchPadTypes = var10;
                            var10 = _closure2_slot7;
                            var6.windowWidth = var10;
                            var10 = 48;
                            var6.LAUNCHPAD_GESTURE_INSET = var10;
                            var1.__closure = var6;
                            var6 = 13108412336922.0;
                            var1.__workletHash = var6;
                            var6 = _closure1_slot16;
                            var1.__initData = var6;
                            var4 = var2.bind(var4)(var1);
                            var2 = var4.onStart;
                            var1 = function() {
                                _fun100680: for (var _fun100680_ip = 0;;) switch (_fun100680_ip) {
                                    case 0:
                                        var2 = _closure2_slot10;
                                        var0 = var2.set;
                                        var5 = true;
                                        var0 = var0.bind(var2)(var5);
                                        var6 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        var4 = 7;
                                        var3 = var0[var4];
                                        var0 = undefined;
                                        var7 = var6.bind(var0)(var3);
                                        var6 = var7.runOnJS;
                                        var3 = _closure2_slot12;
                                        var3 = var6.bind(var7)(var3);
                                        var3 = var3.bind(var0)(var5);
                                        var5 = _closure2_slot2;
                                        var3 = null;
                                        if (!(var3 != var5)) {
                                            _fun100680_ip = 108;
                                            continue _fun100680
                                        }
                                    case 73:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var2 = var2[var4];
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.runOnJS;
                                        var1 = _closure2_slot2;
                                        var1 = var2.bind(var3)(var1);
                                        var1 = var1.bind(var0)();
                                    case 108:
                                        return var0;
                                }
                            };
                            var10 = {};
                            var6 = _closure2_slot10;
                            var10.isDragging = var6;
                            var6 = 7;
                            var11 = var9[var6];
                            var11 = var8.bind(var7)(var11);
                            var11 = var11.runOnJS;
                            var10.runOnJS = var11;
                            var11 = _closure2_slot12;
                            var10.setIsDraggingRef = var11;
                            var11 = _closure2_slot2;
                            var10.onDragStart = var11;
                            var1.__closure = var10;
                            var10 = 8659650895938.0;
                            var1.__workletHash = var10;
                            var10 = _closure1_slot15;
                            var1.__initData = var10;
                            var4 = var2.bind(var4)(var1);
                            var2 = var4.onChange;
                            var1 = function arg0() {
                                _fun100681: for (var _fun100681_ip = 0;;) switch (_fun100681_ip) {
                                    case 0:
                                        var2 = _closure2_slot13;
                                        var1 = var2.get;
                                        var1 = var1.bind(var2)();
                                        var2 = _closure2_slot9;
                                        if (var1) {
                                            _fun100681_ip = 119;
                                            continue _fun100681
                                        }
                                    case 23:
                                        var3 = var2.set;
                                        var1 = global;
                                        var6 = var1.Math;
                                        var5 = var6.max;
                                        var8 = var1.Math;
                                        var7 = var8.min;
                                        var4 = _closure2_slot8;
                                        var9 = _closure2_slot9;
                                        var1 = var9.get;
                                        var9 = var1.bind(var9)();
                                        var1 = arg0;
                                        var1 = var1.changeX;
                                        var1 = var9 + var1;
                                        var4 = var7.bind(var8)(var4, var1);
                                        var1 = 0;
                                        var1 = var5.bind(var6)(var1, var4);
                                        var1 = var3.bind(var2)(var1);
                                        var4 = _closure2_slot15;
                                        var3 = var4.set;
                                        var1 = false;
                                        var1 = var3.bind(var4)(var1);
                                        _fun100681_ip = 156;
                                        continue _fun100681;
                                    case 119:
                                        var1 = var2.get;
                                        var3 = var1.bind(var2)();
                                        var2 = 0;
                                        if (!(var2 !== var3)) {
                                            _fun100681_ip = 160;
                                            continue _fun100681
                                        }
                                    case 134:
                                        var1 = _closure2_slot8;
                                        if (!(var3 !== var1)) {
                                            _fun100681_ip = 160;
                                            continue _fun100681
                                        }
                                    case 142:
                                        var1 = _closure2_slot9;
                                        var0 = var1.set;
                                        var0 = var0.bind(var1)(var2);
                                    case 156:
                                        var0 = undefined;
                                        return var0;
                                    case 160:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var10 = {};
                            var11 = _closure2_slot13;
                            var10.disallowGesture = var11;
                            var11 = _closure2_slot9;
                            var10.translateX = var11;
                            var11 = _closure2_slot8;
                            var10.width = var11;
                            var11 = _closure2_slot15;
                            var10.didJustAllowGesture = var11;
                            var1.__closure = var10;
                            var10 = 13355779907583.0;
                            var1.__workletHash = var10;
                            var10 = _closure1_slot14;
                            var1.__initData = var10;
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.onFinalize;
                            var0 = function arg0() {
                                _fun100682: for (var _fun100682_ip = 0;;) switch (_fun100682_ip) {
                                    case 0:
                                        var2 = arg0;
                                    case 3: // try_start_0
                                        var3 = _closure2_slot10;
                                        var0 = var3.get;
                                        var0 = var0.bind(var3)();
                                        if (!var0) {
                                            _fun100682_ip = 266;
                                            continue _fun100682
                                        }
                                    case 25:
                                        var3 = _closure2_slot13;
                                        var0 = var3.get;
                                        var0 = var0.bind(var3)();
                                        if (var0) {
                                            _fun100682_ip = 266;
                                            continue _fun100682
                                        }
                                    case 44:
                                        var3 = _closure2_slot15;
                                        var0 = var3.get;
                                        var0 = var0.bind(var3)();
                                        if (var0) {
                                            _fun100682_ip = 266;
                                            continue _fun100682
                                        }
                                    case 63: // try_end0
                                        var3 = _closure2_slot10;
                                        var0 = var3.set;
                                        var7 = false;
                                        var0 = var0.bind(var3)(var7);
                                        var3 = _closure2_slot15;
                                        var0 = var3.set;
                                        var0 = var0.bind(var3)(var7);
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var0 = 7;
                                        var4 = var4[var0];
                                        var0 = undefined;
                                        var6 = var5.bind(var0)(var4);
                                        var5 = var6.runOnJS;
                                        var4 = _closure2_slot12;
                                        var4 = var5.bind(var6)(var4);
                                        var4 = var4.bind(var0)(var7);
                                        var4 = global;
                                        var6 = var4.Math;
                                        var5 = var6.abs;
                                        var4 = var2;
                                        var4 = var4.velocityX;
                                        var4 = var5.bind(var6)(var4);
                                        var3 = _closure1_slot7;
                                        var3 = var3.minFlingVelocityX;
                                        if (!(!(var4 > var3))) {
                                            _fun100682_ip = 232;
                                            continue _fun100682
                                        }
                                    case 179:
                                        var6 = _closure2_slot14;
                                        var4 = _closure2_slot9;
                                        var3 = var4.get;
                                        var4 = var3.bind(var4)();
                                        var5 = _closure2_slot8;
                                        var3 = 2;
                                        var3 = var5 / var3;
                                        var11 = var4 < var3;
                                        var3 = var2;
                                        var9 = var3.velocityX;
                                        var8 = true;
                                        var12 = undefined;
                                        var10 = false;
                                        var3 = var12[var6](var11, var10, var9, var8, var7);
                                        _fun100682_ip = 264;
                                        continue _fun100682;
                                    case 232:
                                        var5 = _closure2_slot14;
                                        var4 = var2.velocityX;
                                        var3 = 0;
                                        var11 = var4 < var3;
                                        var9 = var2.velocityX;
                                        var12 = undefined;
                                        var10 = true;
                                        var8 = true;
                                        var2 = var12[var5](var11, var10, var9, var8, var7);
                                    case 264:
                                        return var0;
                                    case 266:
                                        var3 = _closure2_slot10;
                                        var0 = var3.set;
                                        var2 = false;
                                        var0 = var0.bind(var3)(var2);
                                        var3 = _closure2_slot15;
                                        var0 = var3.set;
                                        var0 = var0.bind(var3)(var2);
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var0 = 7;
                                        var3 = var3[var0];
                                        var0 = undefined;
                                        var4 = var4.bind(var0)(var3);
                                        var3 = var4.runOnJS;
                                        var1 = _closure2_slot12;
                                        var1 = var3.bind(var4)(var1);
                                        var1 = var1.bind(var0)(var2);
                                        return var0;
                                    case 342: // catch_target0
                                        CatchBlockStart(arg_register = 0);
                                        var4 = _closure2_slot10;
                                        var2 = var4.set;
                                        var3 = false;
                                        var2 = var2.bind(var4)(var3);
                                        var4 = _closure2_slot15;
                                        var2 = var4.set;
                                        var2 = var2.bind(var4)(var3);
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var2 = 7;
                                        var4 = var4[var2];
                                        var2 = undefined;
                                        var5 = var5.bind(var2)(var4);
                                        var4 = var5.runOnJS;
                                        var1 = _closure2_slot12;
                                        var1 = var4.bind(var5)(var1);
                                        var1 = var1.bind(var2)(var3);
                                        throw var0;
                                }
                            };
                            var4 = {};
                            var10 = _closure2_slot10;
                            var4.isDragging = var10;
                            var10 = _closure2_slot13;
                            var4.disallowGesture = var10;
                            var10 = _closure2_slot15;
                            var4.didJustAllowGesture = var10;
                            var6 = var9[var6];
                            var6 = var8.bind(var7)(var6);
                            var6 = var6.runOnJS;
                            var4.runOnJS = var6;
                            var6 = _closure2_slot12;
                            var4.setIsDraggingRef = var6;
                            var6 = _closure1_slot7;
                            var4.panelsConfig = var6;
                            var6 = _closure2_slot14;
                            var4.movePanel = var6;
                            var6 = _closure2_slot9;
                            var4.translateX = var6;
                            var5 = _closure2_slot8;
                            var4.width = var5;
                            var0.__closure = var4;
                            var4 = 2071301756262.0;
                            var0.__workletHash = var4;
                            var3 = _closure1_slot13;
                            var0.__initData = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var7 = var8.bind(var9)(var6, var7);
                        _closure2_slot18 = var7;
                        var8 = var9.useMemo;
                        var6 = new Array(3);
                        var6[0] = var7;
                        var6[1] = var10;
                        var6[2] = var4;
                        var0 = function() { // Environment: var0
                            var0 = {};
                            var2 = _closure2_slot18;
                            var0.gesture = var2;
                            var2 = _closure2_slot13;
                            var0.disallowGesture = var2;
                            var1 = _closure2_slot9;
                            var0.translateX = var1;
                            return var0;
                        };
                        var6 = var8.bind(var9)(var0, var6);
                        var0 = {};
                        var0.gesture = var7;
                        var0.panelGestureContext = var6;
                        var0.isDragging = var5;
                        var0.translateX = var4;
                        var0.movePanel = var3;
                        var0.maxWidth = var2;
                        var0.isDraggingRef = var1;
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 9844, 478, 13115, 9846, 1568, 3720, 4097, 4881, 4081, 9847, 4961, 2]);