// modules/home_drawer/native/useHomeDrawerGesture.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var11;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var1 = {};
    var9 = true;
    var1.value = var9;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var1);
    var15 = 0;
    var1 = var11[var15];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var5 = var11[var1];
    var1 = metroImportAll;
    var12 = var1.bind(var0)(var5);
    var _closure1_slot4 = var12;
    var1 = 2;
    var1 = var11[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var11[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var8 = {
        'mass': 0.3,
        'damping': 30,
        'stiffness': 400
    };
    var _closure1_slot7 = var8;
    var7 = {
        'mass': 0.4,
        'damping': 100,
        'stiffness': 250
    };
    var _closure1_slot8 = var7;
    var6 = {
        'mass': 1,
        'damping': 20,
        'stiffness': 150
    };
    var5 = {};
    var20 = var5;
    var19 = var6;
    var1 = copyDataProperties(var20, var19);
    var4 = {};
    var20 = var4;
    var19 = var6;
    var1 = copyDataProperties(var20, var19);
    var1 = 'overshootClamping';
    var4[var1] = var9;
    var1 = {};
    var9 = "function useHomeDrawerGestureTsx1(){const{safeAreaInsets,withSpring,panelX,gestureState,HOME_GESTURE_DRAG_PHYSICS,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return{flex:1,marginTop:safeAreaInsets.top,transform:[{translateX:withSpring(panelX.get(),gestureState.get().active?HOME_GESTURE_DRAG_PHYSICS:HOME_DRAWER_FLING_PHYSICS,'animate-always')}]};}";
    var1.code = var9;
    var _closure1_slot9 = var1;
    var1 = {};
    var9 = 'function useHomeDrawerGestureTsx2(){const{gestureState}=this.__closure;gestureState.set({active:false,initialX:0,initialY:0,panelX:0,requiresPop:true});}';
    var1.code = var9;
    var _closure1_slot10 = var1;
    var1 = {};
    var9 = 'function useHomeDrawerGestureTsx3(event){const{runOnJS,setHomeDrawerState,gestureState,panelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH}=this.__closure;if(event.velocityX>50){runOnJS(setHomeDrawerState)(true);}else if(event.velocityX<-50){runOnJS(setHomeDrawerState)(false);}else{if(gestureState.get().requiresPop){runOnJS(setHomeDrawerState)(false);}else{if(panelX.get()===0){runOnJS(setHomeDrawerState)(false);}else if(panelX.get()>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX){runOnJS(setHomeDrawerState)(true);}else if(panelX.get()>=INITIAL_OPEN_WIDTH&&event.absoluteX-gestureState.get().initialX>0){runOnJS(setHomeDrawerState)(true);}else{runOnJS(setHomeDrawerState)(false);}}}}';
    var1.code = var9;
    var _closure1_slot11 = var1;
    var1 = {};
    var9 = 'function useHomeDrawerGestureTsx4(event){const{gestureState,POP_DISTANCE,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,panelX,INITIAL_OPEN_WIDTH}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;if(gestureState.get().requiresPop){const distance=Math.max(newXOffset,0);if(distance>=POP_DISTANCE){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);gestureState.set({...gestureState.get(),requiresPop:false});panelX.set(distance);}}else{if(newXOffset<0){panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}else{panelX.set(Math.max(newXOffset+gestureState.get().panelX,INITIAL_OPEN_WIDTH));}}}';
    var1.code = var9;
    var _closure1_slot12 = var1;
    var1 = {};
    var9 = 'function useHomeDrawerGestureTsx5(event,manager){const{gestureState,panelX}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);if(absoluteYDiff>absoluteXDiff||panelX.get()===0&&touchX<gestureState.get().initialX||panelX.get()>0&&touchX>gestureState.get().initialX){manager.fail();}if(panelX.get()===0&&touchX>gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}else if(touchX<gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}}';
    var1.code = var9;
    var _closure1_slot13 = var1;
    var1 = {};
    var9 = 'function useHomeDrawerGestureTsx6(event){const{gestureState,panelX}=this.__closure;gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get(),requiresPop:panelX.get()===0});}';
    var1.code = var9;
    var _closure1_slot14 = var1;
    var9 = var12.createContext;
    var1 = {};
    var13 = 12;
    var13 = var11[var13];
    var13 = var10.bind(var0)(var13);
    var14 = var13.Gesture;
    var13 = var14.Pan;
    var13 = var13.bind(var14)();
    var1.gesture = var13;
    var13 = {};
    var1.panelStyles = var13;
    var13 = 14;
    var14 = var11[var13];
    var17 = var10.bind(var0)(var14);
    var16 = var17.createFakeSharedValue;
    var14 = {
        'active': false,
        'initialX': 0,
        'initialY': 0,
        'panelX': 0,
        'requiresPop': false
    };
    var14 = var16.bind(var17)(var14);
    var1.gestureState = var14;
    var13 = var11[var13];
    var14 = var10.bind(var0)(var13);
    var13 = var14.createFakeSharedValue;
    var13 = var13.bind(var14)(var15);
    var1.panelX = var13;
    var1 = var9.bind(var12)(var1);
    var9 = 15;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/home_drawer/native/useHomeDrawerGesture.tsx';
    var9 = var10.bind(var11)(var9);
    var2.HOME_GESTURE_DRAG_PHYSICS = var8;
    var2.HOME_DRAWER_FLING_PHYSICS = var7;
    var2.BASE_PHYSICS = var6;
    var6 = {
        'mass': 1,
        'damping': 20,
        'stiffness': 500
    };
    var2.POP_PHYSICS = var6;
    var2.transitionSpringPhysics = var5;
    var2.transitionSpringPhysicsClamped = var4;
    var3 = function() {
        _fun100760: for (var _fun100760_ip = 0;;) switch (_fun100760_ip) {
            case 0:
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 4;
                var2 = var13[var2];
                var5 = undefined;
                var2 = var7.bind(var5)(var2);
                var4 = var2.MobileHomeDrawerExperiment;
                var3 = var4.useConfig;
                var2 = {};
                var6 = 'gesture';
                var2.location = var6;
                var2 = var3.bind(var4)(var2);
                var8 = var2.enableHome;
                var2 = _closure1_slot5;
                var2 = var2.bind(var5)();
                var9 = var2.panelX;
                var _closure2_slot0 = var9;
                var10 = var2.gestureState;
                var _closure2_slot1 = var10;
                var4 = var2.updateMaxX;
                var _closure2_slot2 = var4;
                var3 = var2.maxX;
                var _closure2_slot3 = var3;
                var2 = var2.setPanelX;
                var _closure2_slot4 = var2;
                var6 = 5;
                var6 = var13[var6];
                var7 = var7.bind(var5)(var6);
                var6 = var7.useNavigation;
                var11 = var6.bind(var7)();
                var _closure2_slot5 = var11;
                var7 = _closure1_slot1;
                var6 = 6;
                var6 = var13[var6];
                var6 = var7.bind(var5)(var6);
                var14 = var6.bind(var5)();
                var _closure2_slot6 = var14;
                var6 = 7;
                var6 = var13[var6];
                var6 = var7.bind(var5)(var6);
                var12 = var6.bind(var5)();
                var _closure2_slot7 = var12;
                var6 = 8;
                var6 = var13[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.bind(var5)();
                var6 = var6.isChatBesideChannelList;
                if (!var8) {
                    _fun100760_ip = 216;
                    continue _fun100760
                }
            case 213:
                var8 = !var6;
            case 216:
                var _closure2_slot8 = var8;
                var6 = _closure1_slot4;
                var13 = var6.useEffect;
                var7 = new Array(4);
                var7[0] = var14;
                var7[1] = var12;
                var7[2] = var4;
                var7[3] = var8;
                var4 = function() { // Environment: var1
                    _fun100761: for (var _fun100761_ip = 0;;) switch (_fun100761_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            var3 = _closure2_slot2;
                            if (var1) {
                                _fun100761_ip = 44;
                                continue _fun100761
                            }
                        case 14:
                            var4 = undefined;
                            var2 = {
                                'width': 0,
                                'height': 0
                            };
                            var1 = {
                                'top': 0,
                                'bottom': 0,
                                'left': 0,
                                'right': 0
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            _fun100761_ip = 60;
                            continue _fun100761;
                        case 44:
                            var2 = _closure2_slot6;
                            var1 = _closure2_slot7;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                        case 60:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var13.bind(var6)(var4, var7);
                var7 = var6.useEffect;
                var4 = new Array(3);
                var4[0] = var11;
                var4[1] = var2;
                var4[2] = var8;
                var2 = function() { // Environment: var1
                    var4 = function arg0() {
                        _fun100763: for (var _fun100763_ip = 0;;) switch (_fun100763_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.data;
                                var6 = var0.state;
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 9;
                                var1 = var1[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var1);
                                var3 = var5.coerceGuildsRoute;
                                var4 = null;
                                var7 = var4 == var6;
                                var1 = undefined;
                                if (var7) {
                                    _fun100763_ip = 100;
                                    continue _fun100763
                                }
                            case 55:
                                var7 = var6.routes;
                                var8 = var4 == var7;
                                var1 = undefined;
                                if (var8) {
                                    _fun100763_ip = 100;
                                    continue _fun100763
                                }
                            case 70:
                                var9 = var4 == var6;
                                var8 = undefined;
                                if (var9) {
                                    _fun100763_ip = 84;
                                    continue _fun100763
                                }
                            case 79:
                                var8 = var6.index;
                            case 84:
                                var9 = var4 != var8;
                                var6 = 0;
                                if (!var9) {
                                    _fun100763_ip = 96;
                                    continue _fun100763
                                }
                            case 93:
                                var6 = var8;
                            case 96:
                                var1 = var7[var6];
                            case 100:
                                var1 = var3.bind(var5)(var1);
                                if (!(var4 != var1)) {
                                    _fun100763_ip = 205;
                                    continue _fun100763
                                }
                            case 109:
                                var5 = _closure2_slot8;
                                if (!var5) {
                                    _fun100763_ip = 205;
                                    continue _fun100763
                                }
                            case 119:
                                var1 = var1.params;
                                var5 = var4 == var1;
                                var4 = undefined;
                                if (var5) {
                                    _fun100763_ip = 140;
                                    continue _fun100763
                                }
                            case 134:
                                var4 = var1.drawerOpen;
                            case 140:
                                var1 = true;
                                var1 = var1 === var4;
                                var4 = _closure2_slot4;
                                var3 = 'closed';
                                if (!var1) {
                                    _fun100763_ip = 161;
                                    continue _fun100763
                                }
                            case 157:
                                var3 = 'open';
                            case 161:
                                var3 = var4.bind(var0)(var3);
                                var3 = _closure1_slot6;
                                var2 = var3.getState;
                                var2 = var2.bind(var3)();
                                if (var1) {
                                    _fun100763_ip = 195;
                                    continue _fun100763
                                }
                            case 183:
                                var1 = var2.stopTimer;
                                var1 = var1.bind(var2)();
                                _fun100763_ip = 205;
                                continue _fun100763;
                            case 195:
                                var1 = var2.startTimer;
                                var1 = var1.bind(var2)();
                            case 205:
                                return var0;
                        }
                    };
                    var _closure3_slot0 = var4;
                    var3 = _closure2_slot5;
                    var2 = var3.addListener;
                    var1 = 'state';
                    var1 = var2.bind(var3)(var1, var4);
                    var0 = function() { // Environment: var0
                        var3 = _closure2_slot5;
                        var2 = var3.removeListener;
                        var1 = _closure3_slot0;
                        var0 = 'state';
                        var0 = var2.bind(var3)(var0, var1);
                        var1 = _closure1_slot6;
                        var0 = var1.getState;
                        var1 = var0.bind(var1)();
                        var0 = var1.stopTimer;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var2 = var7.bind(var6)(var2, var4);
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 10;
                var2 = var14[var2];
                var7 = var13.bind(var5)(var2);
                var4 = var7.useAnimatedStyle;
                var2 = function() {
                    _fun100765: for (var _fun100765_ip = 0;;) switch (_fun100765_ip) {
                        case 0:
                            var0 = {};
                            var1 = 1;
                            var0.flex = var1;
                            var1 = _closure2_slot7;
                            var1 = var1.top;
                            var0.marginTop = var1;
                            var2 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 11;
                            var5 = var5[var4];
                            var4 = undefined;
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.withSpring;
                            var7 = _closure2_slot0;
                            var4 = var7.get;
                            var4 = var4.bind(var7)();
                            var7 = _closure2_slot1;
                            var3 = var7.get;
                            var3 = var3.bind(var7)();
                            var3 = var3.active;
                            if (var3) {
                                _fun100765_ip = 98;
                                continue _fun100765
                            }
                        case 92:
                            var3 = _closure1_slot8;
                            _fun100765_ip = 102;
                            continue _fun100765;
                        case 98:
                            var3 = _closure1_slot7;
                        case 102:
                            var1 = 'animate-always';
                            var1 = var5.bind(var6)(var4, var3, var1);
                            var2.translateX = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var11 = {};
                var11.safeAreaInsets = var12;
                var12 = 11;
                var12 = var14[var12];
                var12 = var13.bind(var5)(var12);
                var12 = var12.withSpring;
                var11.withSpring = var12;
                var11.panelX = var9;
                var11.gestureState = var10;
                var12 = _closure1_slot7;
                var11.HOME_GESTURE_DRAG_PHYSICS = var12;
                var12 = _closure1_slot8;
                var11.HOME_DRAWER_FLING_PHYSICS = var12;
                var2.__closure = var11;
                var11 = 13899151055922.0;
                var2.__workletHash = var11;
                var11 = _closure1_slot9;
                var2.__initData = var11;
                var2 = var4.bind(var7)(var2);
                var _closure2_slot9 = var2;
                var7 = var6.useMemo;
                var4 = new Array(4);
                var4[0] = var10;
                var4[1] = var9;
                var4[2] = var8;
                var4[3] = var3;
                var3 = function() { // Environment: var1
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var1 = 12;
                    var1 = var13[var1];
                    var11 = undefined;
                    var1 = var12.bind(var11)(var1);
                    var2 = var1.Gesture;
                    var1 = var2.Pan;
                    var4 = var1.bind(var2)();
                    var2 = var4.enabled;
                    var1 = _closure2_slot8;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.manualActivation;
                    var1 = true;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.shouldCancelWhenOutside;
                    var1 = false;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.maxPointers;
                    var1 = 1;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onBegin;
                    var1 = function arg0() {
                        var4 = arg0;
                        var2 = _closure2_slot1;
                        var1 = var2.set;
                        var0 = {};
                        var5 = false;
                        var0.active = var5;
                        var5 = var4.absoluteX;
                        var0.initialX = var5;
                        var4 = var4.absoluteY;
                        var0.initialY = var4;
                        var4 = _closure2_slot0;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var0.panelX = var3;
                        var3 = var4.get;
                        var4 = var3.bind(var4)();
                        var3 = 0;
                        var3 = var3 === var4;
                        var0.requiresPop = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var6 = {};
                    var5 = _closure2_slot1;
                    var6.gestureState = var5;
                    var9 = _closure2_slot0;
                    var6.panelX = var9;
                    var1.__closure = var6;
                    var6 = 16959675508268.0;
                    var1.__workletHash = var6;
                    var6 = _closure1_slot14;
                    var1.__initData = var6;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onTouchesMove;
                    var1 = function arg0, arg1() {
                        _fun100768: for (var _fun100768_ip = 0;;) switch (_fun100768_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = arg1;
                                var3 = _closure2_slot1;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var2.active;
                                if (var2) {
                                    _fun100768_ip = 417;
                                    continue _fun100768
                                }
                            case 34:
                                var3 = var0.changedTouches;
                                var2 = 0;
                                var3 = var3[var2];
                                var6 = var3.absoluteX;
                                var0 = var0.changedTouches;
                                var0 = var0[var2];
                                var8 = var0.absoluteY;
                                var0 = global;
                                var7 = var0.Math;
                                var5 = var7.abs;
                                var9 = _closure2_slot1;
                                var3 = var9.get;
                                var3 = var3.bind(var9)();
                                var3 = var3.initialX;
                                var3 = var6 - var3;
                                var3 = var5.bind(var7)(var3);
                                var7 = var0.Math;
                                var5 = var7.abs;
                                var0 = var9.get;
                                var0 = var0.bind(var9)();
                                var0 = var0.initialY;
                                var0 = var8 - var0;
                                var0 = var5.bind(var7)(var0);
                                var0 = var0 > var3;
                                if (var0) {
                                    _fun100768_ip = 199;
                                    continue _fun100768
                                }
                            case 153:
                                var5 = _closure2_slot0;
                                var3 = var5.get;
                                var3 = var3.bind(var5)();
                                var3 = var2 === var3;
                                if (!var3) {
                                    _fun100768_ip = 196;
                                    continue _fun100768
                                }
                            case 173:
                                var7 = _closure2_slot1;
                                var5 = var7.get;
                                var5 = var5.bind(var7)();
                                var5 = var5.initialX;
                                var3 = var6 < var5;
                            case 196:
                                var0 = var3;
                            case 199:
                                if (var0) {
                                    _fun100768_ip = 248;
                                    continue _fun100768
                                }
                            case 202:
                                var5 = _closure2_slot0;
                                var3 = var5.get;
                                var3 = var3.bind(var5)();
                                var3 = var3 > var2;
                                if (!var3) {
                                    _fun100768_ip = 245;
                                    continue _fun100768
                                }
                            case 222:
                                var7 = _closure2_slot1;
                                var5 = var7.get;
                                var5 = var5.bind(var7)();
                                var5 = var5.initialX;
                                var3 = var6 > var5;
                            case 245:
                                var0 = var3;
                            case 248:
                                if (!var0) {
                                    _fun100768_ip = 261;
                                    continue _fun100768
                                }
                            case 251:
                                var0 = var1.fail;
                                var0 = var0.bind(var1)();
                            case 261:
                                var3 = _closure2_slot0;
                                var0 = var3.get;
                                var0 = var0.bind(var3)();
                                var0 = var2 === var0;
                                if (!var0) {
                                    _fun100768_ip = 304;
                                    continue _fun100768
                                }
                            case 281:
                                var3 = _closure2_slot1;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var2.initialX;
                                var0 = var6 > var2;
                            case 304:
                                if (var0) {
                                    _fun100768_ip = 330;
                                    continue _fun100768
                                }
                            case 307:
                                var3 = _closure2_slot1;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var2.initialX;
                                var0 = var6 < var2;
                            case 330:
                                if (!var0) {
                                    _fun100768_ip = 417;
                                    continue _fun100768
                                }
                            case 333:
                                var3 = _closure2_slot1;
                                var2 = var3.set;
                                var0 = {};
                                var5 = var3.get;
                                var10 = var5.bind(var3)();
                                var11 = var0;
                                var5 = copyDataProperties(var11, var10);
                                var7 = true;
                                var5 = 'active';
                                var0[var5] = var7;
                                var5 = 'initialX';
                                var0[var5] = var6;
                                var5 = _closure2_slot0;
                                var4 = var5.get;
                                var5 = var4.bind(var5)();
                                var4 = 'panelX';
                                var0[var4] = var5;
                                var0 = var2.bind(var3)(var0);
                                var0 = var1.activate;
                                var0 = var0.bind(var1)();
                            case 417:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var6 = {};
                    var6.gestureState = var5;
                    var6.panelX = var9;
                    var1.__closure = var6;
                    var6 = 3506811332424.0;
                    var1.__workletHash = var6;
                    var6 = _closure1_slot13;
                    var1.__initData = var6;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onChange;
                    var1 = function arg0() {
                        _fun100769: for (var _fun100769_ip = 0;;) switch (_fun100769_ip) {
                            case 0:
                                var2 = _closure2_slot1;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var1 = var1.active;
                                if (!var1) {
                                    _fun100769_ip = 377;
                                    continue _fun100769
                                }
                            case 28:
                                var1 = arg0;
                                var3 = var1.absoluteX;
                                var2 = _closure2_slot1;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var1 = var1.initialX;
                                var4 = var3 - var1;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var1 = var1.requiresPop;
                                var3 = 0;
                                if (var1) {
                                    _fun100769_ip = 212;
                                    continue _fun100769
                                }
                            case 83:
                                if (!(!(var4 < var3))) {
                                    _fun100769_ip = 151;
                                    continue _fun100769
                                }
                            case 87:
                                var5 = _closure2_slot0;
                                var2 = var5.set;
                                var1 = global;
                                var8 = var1.Math;
                                var7 = var8.max;
                                var6 = _closure2_slot1;
                                var1 = var6.get;
                                var1 = var1.bind(var6)();
                                var1 = var1.panelX;
                                var6 = var4 + var1;
                                var1 = 64;
                                var1 = var7.bind(var8)(var6, var1);
                                var1 = var2.bind(var5)(var1);
                                _fun100769_ip = 377;
                                continue _fun100769;
                            case 151:
                                var5 = _closure2_slot0;
                                var2 = var5.set;
                                var1 = global;
                                var7 = var1.Math;
                                var6 = var7.max;
                                var8 = _closure2_slot1;
                                var1 = var8.get;
                                var1 = var1.bind(var8)();
                                var1 = var1.panelX;
                                var1 = var4 + var1;
                                var1 = var6.bind(var7)(var1, var3);
                                var1 = var2.bind(var5)(var1);
                                _fun100769_ip = 377;
                                continue _fun100769;
                            case 212:
                                var1 = global;
                                var2 = var1.Math;
                                var1 = var2.max;
                                var2 = var1.bind(var2)(var4, var3);
                                var1 = 16;
                                if (!(var2 >= var1)) {
                                    _fun100769_ip = 377;
                                    continue _fun100769
                                }
                            case 241:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var1 = 10;
                                var1 = var6[var1];
                                var4 = undefined;
                                var8 = var5.bind(var4)(var1);
                                var7 = var8.runOnJS;
                                var1 = 13;
                                var3 = var6[var1];
                                var3 = var5.bind(var4)(var3);
                                var3 = var3.triggerHapticFeedback;
                                var3 = var7.bind(var8)(var3);
                                var1 = var6[var1];
                                var1 = var5.bind(var4)(var1);
                                var1 = var1.HapticFeedbackTypes;
                                var1 = var1.IMPACT_MEDIUM;
                                var1 = var3.bind(var4)(var1);
                                var4 = _closure2_slot1;
                                var3 = var4.set;
                                var1 = {};
                                var5 = var4.get;
                                var9 = var5.bind(var4)();
                                var10 = var1;
                                var5 = copyDataProperties(var10, var9);
                                var6 = false;
                                var5 = 'requiresPop';
                                var1[var5] = var6;
                                var1 = var3.bind(var4)(var1);
                                var1 = _closure2_slot0;
                                var0 = var1.set;
                                var0 = var0.bind(var1)(var2);
                            case 377:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var6 = {};
                    var6.gestureState = var5;
                    var7 = 16;
                    var6.POP_DISTANCE = var7;
                    var10 = 10;
                    var7 = var13[var10];
                    var7 = var12.bind(var11)(var7);
                    var7 = var7.runOnJS;
                    var6.runOnJS = var7;
                    var7 = 13;
                    var14 = var13[var7];
                    var14 = var12.bind(var11)(var14);
                    var14 = var14.triggerHapticFeedback;
                    var6.triggerHapticFeedback = var14;
                    var7 = var13[var7];
                    var7 = var12.bind(var11)(var7);
                    var7 = var7.HapticFeedbackTypes;
                    var6.HapticFeedbackTypes = var7;
                    var6.panelX = var9;
                    var7 = 64;
                    var6.INITIAL_OPEN_WIDTH = var7;
                    var1.__closure = var6;
                    var6 = 1900918821347.0;
                    var1.__workletHash = var6;
                    var6 = _closure1_slot12;
                    var1.__initData = var6;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onEnd;
                    var1 = function arg0() {
                        _fun100770: for (var _fun100770_ip = 0;;) switch (_fun100770_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = var2.velocityX;
                                var0 = 50;
                                if (!(!(var1 > var0))) {
                                    _fun100770_ip = 365;
                                    continue _fun100770
                                }
                            case 19:
                                var1 = var2.velocityX;
                                var0 = -50;
                                if (!(!(var1 < var0))) {
                                    _fun100770_ip = 303;
                                    continue _fun100770
                                }
                            case 38:
                                var3 = _closure2_slot1;
                                var1 = var3.get;
                                var1 = var1.bind(var3)();
                                var1 = var1.requiresPop;
                                if (var1) {
                                    _fun100770_ip = 303;
                                    continue _fun100770
                                }
                            case 66:
                                var3 = _closure2_slot0;
                                var1 = var3.get;
                                var3 = var1.bind(var3)();
                                var1 = 0;
                                if (!(var1 !== var3)) {
                                    _fun100770_ip = 303;
                                    continue _fun100770
                                }
                            case 88:
                                var4 = _closure2_slot0;
                                var3 = var4.get;
                                var4 = var3.bind(var4)();
                                var5 = _closure2_slot3;
                                var3 = 0.5;
                                var3 = var3 * var5;
                                if (!(!(var4 > var3))) {
                                    _fun100770_ip = 241;
                                    continue _fun100770
                                }
                            case 123:
                                var4 = _closure2_slot0;
                                var3 = var4.get;
                                var4 = var3.bind(var4)();
                                var3 = 64;
                                if (!(var4 >= var3)) {
                                    _fun100770_ip = 176;
                                    continue _fun100770
                                }
                            case 143:
                                var2 = var2.absoluteX;
                                var3 = _closure2_slot1;
                                var0 = var3.get;
                                var0 = var0.bind(var3)();
                                var0 = var0.initialX;
                                var0 = var2 - var0;
                                if (!(!(var0 > var1))) {
                                    _fun100770_ip = 241;
                                    continue _fun100770
                                }
                            case 176:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var0 = 10;
                                var0 = var5[var0];
                                var2 = undefined;
                                var3 = var4.bind(var2)(var0);
                                var1 = var3.runOnJS;
                                var0 = 9;
                                var0 = var5[var0];
                                var0 = var4.bind(var2)(var0);
                                var0 = var0.setHomeDrawerState;
                                var1 = var1.bind(var3)(var0);
                                var0 = false;
                                var0 = var1.bind(var2)(var0);
                                _fun100770_ip = 425;
                                continue _fun100770;
                            case 241:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var0 = 10;
                                var0 = var5[var0];
                                var2 = undefined;
                                var3 = var4.bind(var2)(var0);
                                var1 = var3.runOnJS;
                                var0 = 9;
                                var0 = var5[var0];
                                var0 = var4.bind(var2)(var0);
                                var0 = var0.setHomeDrawerState;
                                var1 = var1.bind(var3)(var0);
                                var0 = true;
                                var0 = var1.bind(var2)(var0);
                                _fun100770_ip = 425;
                                continue _fun100770;
                            case 303:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var0 = 10;
                                var0 = var5[var0];
                                var2 = undefined;
                                var3 = var4.bind(var2)(var0);
                                var1 = var3.runOnJS;
                                var0 = 9;
                                var0 = var5[var0];
                                var0 = var4.bind(var2)(var0);
                                var0 = var0.setHomeDrawerState;
                                var1 = var1.bind(var3)(var0);
                                var0 = false;
                                var0 = var1.bind(var2)(var0);
                                _fun100770_ip = 425;
                                continue _fun100770;
                            case 365:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var0 = 10;
                                var0 = var5[var0];
                                var2 = undefined;
                                var3 = var4.bind(var2)(var0);
                                var1 = var3.runOnJS;
                                var0 = 9;
                                var0 = var5[var0];
                                var0 = var4.bind(var2)(var0);
                                var0 = var0.setHomeDrawerState;
                                var1 = var1.bind(var3)(var0);
                                var0 = true;
                                var0 = var1.bind(var2)(var0);
                            case 425:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var6 = {};
                    var10 = var13[var10];
                    var10 = var12.bind(var11)(var10);
                    var10 = var10.runOnJS;
                    var6.runOnJS = var10;
                    var10 = 9;
                    var10 = var13[var10];
                    var10 = var12.bind(var11)(var10);
                    var10 = var10.setHomeDrawerState;
                    var6.setHomeDrawerState = var10;
                    var6.gestureState = var5;
                    var6.panelX = var9;
                    var9 = 0.5;
                    var6.FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN = var9;
                    var8 = _closure2_slot3;
                    var6.maxX = var8;
                    var6.INITIAL_OPEN_WIDTH = var7;
                    var1.__closure = var6;
                    var6 = 13266139428780.0;
                    var1.__workletHash = var6;
                    var6 = _closure1_slot11;
                    var1.__initData = var6;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.onFinalize;
                    var0 = function() {
                        var2 = _closure2_slot1;
                        var1 = var2.set;
                        var0 = {
                            'active': false,
                            'initialX': 0,
                            'initialY': 0,
                            'panelX': 0,
                            'requiresPop': true
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var4 = {};
                    var4.gestureState = var5;
                    var0.__closure = var4;
                    var4 = 3022289284204.0;
                    var0.__workletHash = var4;
                    var3 = _closure1_slot10;
                    var0.__initData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var7.bind(var6)(var3, var4);
                var _closure2_slot10 = var3;
                var4 = var6.useState;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var2 = _closure2_slot10;
                    var0.gesture = var2;
                    var2 = _closure2_slot9;
                    var0.panelStyles = var2;
                    var2 = _closure2_slot1;
                    var0.gestureState = var2;
                    var1 = _closure2_slot0;
                    var0.panelX = var1;
                    return var0;
                };
                var4 = var4.bind(var6)(var1);
                var1 = _closure1_slot3;
                var0 = 1;
                var1 = var1.bind(var5)(var4, var0);
                var0 = 0;
                var1 = var1[var0];
                var0 = {};
                var0.gesture = var3;
                var0.panelStyles = var2;
                var0.homeDrawerState = var1;
                return var0;
        }
    };
    var2.useHomeGesture = var3;
    var2.HomeDrawerStateContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 13142, 13143, 3927, 1470, 1464, 1568, 3924, 3921, 3722, 4082, 4964, 3281, 5260, 2]);