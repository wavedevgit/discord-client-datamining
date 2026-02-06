// modules/launchpad/native/useLaunchPadGesture.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var6 = var3.LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE;
    var _closure1_slot4 = var6;
    var6 = var3.LAUNCH_PAD_PULL_TAB_HEIGHT;
    var _closure1_slot5 = var6;
    var6 = var3.LAUNCH_PAD_PULL_TAB_HIT_SLOP;
    var _closure1_slot6 = var6;
    var6 = var3.LAUNCH_PAD_PULL_TAB_SCALE_FACTOR;
    var _closure1_slot7 = var6;
    var6 = var3.LAUNCH_PAD_PULL_TAB_WIDTH;
    var _closure1_slot8 = var6;
    var3 = var3.LaunchPadTypes;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function useLaunchPadGestureTsx1(){const{updateSharedValueIfChanged,gestureState,updaters}=this.__closure;updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});updaters.setLaunchPadPullTabScale(1.0);}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function useLaunchPadGestureTsx2(){const{gestureState,updaters,updateSharedValueIfChanged}=this.__closure;const{initialLaunchPadPosition:initialLaunchPadPosition,active:active}=gestureState.get();if(active){if(initialLaunchPadPosition===1){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function useLaunchPadGestureTsx3({velocityX:velocityX}){const{gestureState,updaters,launchPadSharedState}=this.__closure;const{requiresPop:requiresPop,startShown:startShown}=gestureState.get();if(requiresPop){if(!startShown){updaters.setLaunchPadPosition(0);}else{updaters.setLaunchPadPosition(1);}}else if(Math.abs(velocityX)<100){if(launchPadSharedState.get()>=0.5){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else if(velocityX>0){updaters.setLaunchPadPosition(0);}else{updaters.setLaunchPadPosition(1);}}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'function useLaunchPadGestureTsx4({translationX:translationX,translationY:translationY,absoluteX:absoluteX}){const{gestureState,getWindowDimensionsWorklet,POP_RESISTANCE,launchPadType,LaunchPadTypes,PIP_POP_DISTANCE,updaters,updateSharedValueIfChanged,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active)return;const{initialTouchX:initialTouchX,requiresPop:requiresPop}=gestureState.get();const{width:windowWidth}=getWindowDimensionsWorklet();const newXOffset=absoluteX-initialTouchX;const distance=Math.max(newXOffset*-1,0);const resistance=distance*POP_RESISTANCE;const positionOffsetX=absoluteX-gestureState.get().initialTouchX;const launchPadPosition=1-(gestureState.get().initialTouchX+translationX-(launchPadType!==LaunchPadTypes.PULL_TAB?40:0))/windowWidth;if(requiresPop&&distance<=PIP_POP_DISTANCE){if(launchPadType!==LaunchPadTypes.PULL_TAB){const a=(distance-resistance)/windowWidth;updaters.setLaunchPadPosition(a);}else{updaters.setLaunchPadPullTabTranslation(translationY);}updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}else{if(requiresPop){updateSharedValueIfChanged(gestureState,{requiresPop:false,positionOffsetX:positionOffsetX});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}updaters.setLaunchPadPosition(launchPadPosition);}}';
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = 'function useLaunchPadGestureTsx5(event,manager){const{gestureState,State,getWindowDimensionsWorklet,launchPadType,LaunchPadTypes,LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE,LAUNCH_PAD_PULL_TAB_WIDTH,LAUNCH_PAD_PULL_TAB_HIT_SLOP,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_HEIGHT,updaters,LAUNCH_PAD_PULL_TAB_SCALE_FACTOR,launchPadSharedState,MANUAL_ACTIVATION_THRESHOLD}=this.__closure;const{active:active,initialLaunchPadPosition:initialLaunchPadPosition,initialTouchX:initialTouchX,initialTouchY:initialTouchY}=gestureState.get();if(event.state!==State.BEGAN||active)return;const currentTouch=event.changedTouches[0];const{x:x,y:y}=currentTouch;const{width:windowWidth}=getWindowDimensionsWorklet();if(currentTouch==null||launchPadType===LaunchPadTypes.GESTURE_EDGE&&initialLaunchPadPosition===0&&initialTouchX<windowWidth-LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE||launchPadType===LaunchPadTypes.DISABLED){manager.fail();return;}if(launchPadType===LaunchPadTypes.PULL_TAB&&initialLaunchPadPosition===0){const inPullTabX=x>windowWidth-LAUNCH_PAD_PULL_TAB_WIDTH-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&x<windowWidth;const inPullTabY=y>launchPadPullTabState.get().position-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&y<launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_HIT_SLOP;if(inPullTabX&&inPullTabY){gestureState.set({...gestureState.get(),initialPullTabPosition:launchPadPullTabState.get().position,active:true});updaters.setLaunchPadPullTabScale(LAUNCH_PAD_PULL_TAB_SCALE_FACTOR);updaters.setLaunchPadShown(true);manager.activate();return;}}if(launchPadType!==LaunchPadTypes.PULL_TAB||launchPadType===LaunchPadTypes.PULL_TAB&&initialLaunchPadPosition>0){const horizontalDistance=x-initialTouchX;const verticalDistance=Math.abs(y-initialTouchY);const hasMovedCorrectDirection=launchPadSharedState.get()>0&&horizontalDistance>0||launchPadSharedState.get()<=0&&horizontalDistance<0;if(hasMovedCorrectDirection&&Math.abs(horizontalDistance)>verticalDistance){if(Math.abs(horizontalDistance)<MANUAL_ACTIVATION_THRESHOLD){return;}gestureState.set({...gestureState.get(),active:true});updaters.setLaunchPadShown(true);manager.activate();return;}}manager.fail();}';
    var3.code = var6;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 'function useLaunchPadGestureTsx6(event){const{gestureState,launchPadSharedState}=this.__closure;const{x:x,y:y}=event.changedTouches[0];gestureState.set({active:false,initialLaunchPadPosition:launchPadSharedState.get(),initialPullTabPosition:0,initialTouchX:x,initialTouchY:y,positionOffsetX:0,positionOffsetY:0,startTime:Date.now(),requiresPop:launchPadSharedState.get()===0,startShown:!(launchPadSharedState.get()===0)});}';
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/useLaunchPadGesture.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.launchPadType;
        var _closure2_slot0 = var7;
        var8 = var0.launchPadSharedState;
        var _closure2_slot1 = var8;
        var9 = var0.launchPadPullTabState;
        var _closure2_slot2 = var9;
        var12 = var0.gestureState;
        var _closure2_slot3 = var12;
        var6 = var0.updaters;
        var _closure2_slot4 = var6;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 2;
        var3 = var5[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.useIsModalOpen;
        var10 = var3.bind(var4)();
        var _closure2_slot5 = var10;
        var4 = _closure1_slot1;
        var3 = 3;
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var11 = var3.bind(var1)();
        var _closure2_slot6 = var11;
        var5 = _closure1_slot3;
        var0 = var5.useRef;
        var1 = var0.bind(var5)(var1);
        var _closure2_slot7 = var1;
        var0 = {};
        var4 = var5.useMemo;
        var3 = new Array(7);
        var3[0] = var12;
        var3[1] = var11;
        var3[2] = var10;
        var3[3] = var9;
        var3[4] = var8;
        var3[5] = var7;
        var3[6] = var6;
        var2 = function() { // Environment: var2
            _fun110000: for (var _fun110000_ip = 0;;) switch (_fun110000_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot9;
                    var1 = var1.GESTURE_FULL;
                    var12 = 0;
                    var6 = 0;
                    if (!(var2 === var1)) {
                        _fun110000_ip = 44;
                        continue _fun110000
                    }
                case 30:
                    var2 = _closure1_slot4;
                    var1 = -1;
                    var6 = var1 * var2;
                case 44:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 4;
                    var1 = var1[var7];
                    var9 = undefined;
                    var1 = var2.bind(var9)(var1);
                    var2 = var1.Gesture;
                    var1 = var2.Pan;
                    var4 = var1.bind(var2)();
                    var2 = var4.enabled;
                    var1 = _closure2_slot5;
                    var1 = !var1;
                    if (!var1) {
                        _fun110000_ip = 115;
                        continue _fun110000
                    }
                case 97:
                    var10 = _closure2_slot0;
                    var8 = _closure1_slot9;
                    var8 = var8.DISABLED;
                    var1 = var10 !== var8;
                case 115:
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.withRef;
                    var1 = _closure2_slot7;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.minDistance;
                    var4 = var1.bind(var2)(var12);
                    var2 = var4.maxPointers;
                    var1 = 1;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.manualActivation;
                    var14 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 5;
                    var1 = var10[var1];
                    var8 = var14.bind(var9)(var1);
                    var1 = var8.isAndroid;
                    var1 = var1.bind(var8)();
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.hitSlop;
                    var1 = {};
                    var8 = _closure2_slot6;
                    var13 = var8.top;
                    var11 = -1;
                    var13 = var11 * var13;
                    var1.top = var13;
                    var1.left = var12;
                    var8 = var8.bottom;
                    var8 = var11 * var8;
                    var1.bottom = var8;
                    var1.right = var6;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onTouchesDown;
                    var1 = function arg0() {
                        var0 = arg0;
                        var0 = var0.changedTouches;
                        var4 = 0;
                        var0 = var0[var4];
                        var6 = var0.x;
                        var3 = var0.y;
                        var2 = _closure2_slot3;
                        var1 = var2.set;
                        var0 = {
                            'active': false,
                            'initialLaunchPadPosition': null,
                            'initialPullTabPosition': 0,
                            'initialTouchX': null,
                            'initialTouchY': null,
                            'positionOffsetX': 0,
                            'positionOffsetY': 0
                        };
                        var5 = _closure2_slot1;
                        var7 = var5.get;
                        var7 = var7.bind(var5)();
                        var0.initialLaunchPadPosition = var7;
                        var0.initialTouchX = var6;
                        var0.initialTouchY = var3;
                        var3 = global;
                        var6 = var3.Date;
                        var3 = var6.now;
                        var3 = var3.bind(var6)();
                        var0.startTime = var3;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        var3 = var4 === var3;
                        var0.requiresPop = var3;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        var3 = var4 === var3;
                        var3 = !var3;
                        var0.startShown = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var8 = {};
                    var6 = _closure2_slot3;
                    var8.gestureState = var6;
                    var12 = _closure2_slot1;
                    var8.launchPadSharedState = var12;
                    var1.__closure = var8;
                    var8 = 14359599806316.0;
                    var1.__workletHash = var8;
                    var8 = _closure1_slot15;
                    var1.__initData = var8;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onTouchesMove;
                    var1 = function arg0, arg1() {
                        _fun110002: for (var _fun110002_ip = 0;;) switch (_fun110002_ip) {
                            case 0:
                                var4 = arg0;
                                var2 = arg1;
                                var1 = _closure2_slot3;
                                var0 = var1.get;
                                var0 = var0.bind(var1)();
                                var5 = var0.active;
                                var8 = var0.initialLaunchPadPosition;
                                var6 = var0.initialTouchX;
                                var10 = var0.initialTouchY;
                                var9 = var4.state;
                                var11 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var0 = 4;
                                var7 = var7[var0];
                                var0 = undefined;
                                var7 = var11.bind(var0)(var7);
                                var7 = var7.State;
                                var7 = var7.BEGAN;
                                if (!(var9 === var7)) {
                                    _fun110002_ip = 715;
                                    continue _fun110002
                                }
                            case 95:
                                if (var5) {
                                    _fun110002_ip = 715;
                                    continue _fun110002
                                }
                            case 101:
                                var4 = var4.changedTouches;
                                var5 = 0;
                                var12 = var4[var5];
                                var4 = var12.x;
                                var7 = var12.y;
                                var11 = _closure1_slot0;
                                var13 = _closure1_slot2;
                                var9 = 6;
                                var9 = var13[var9];
                                var11 = var11.bind(var0)(var9);
                                var9 = var11.getWindowDimensionsWorklet;
                                var9 = var9.bind(var11)();
                                var11 = var9.width;
                                var9 = null;
                                if (!(var9 != var12)) {
                                    _fun110002_ip = 705;
                                    continue _fun110002
                                }
                            case 167:
                                var12 = _closure2_slot0;
                                var9 = _closure1_slot9;
                                var9 = var9.GESTURE_EDGE;
                                if (!(var12 === var9)) {
                                    _fun110002_ip = 204;
                                    continue _fun110002
                                }
                            case 185:
                                if (!(var5 === var8)) {
                                    _fun110002_ip = 204;
                                    continue _fun110002
                                }
                            case 189:
                                var9 = _closure1_slot4;
                                var9 = var11 - var9;
                                if (!(!(var6 < var9))) {
                                    _fun110002_ip = 705;
                                    continue _fun110002
                                }
                            case 204:
                                var12 = _closure2_slot0;
                                var9 = _closure1_slot9;
                                var9 = var9.DISABLED;
                                if (!(var12 !== var9)) {
                                    _fun110002_ip = 705;
                                    continue _fun110002
                                }
                            case 225:
                                var12 = _closure2_slot0;
                                var9 = _closure1_slot9;
                                var9 = var9.PULL_TAB;
                                if (!(var12 === var9)) {
                                    _fun110002_ip = 348;
                                    continue _fun110002
                                }
                            case 243:
                                if (!(var5 === var8)) {
                                    _fun110002_ip = 348;
                                    continue _fun110002
                                }
                            case 247:
                                var12 = _closure2_slot2;
                                var9 = var12.get;
                                var9 = var9.bind(var12)();
                                var12 = var9.position;
                                var9 = _closure1_slot6;
                                var9 = var12 - var9;
                                var9 = var7 > var9;
                                if (!var9) {
                                    _fun110002_ip = 318;
                                    continue _fun110002
                                }
                            case 280:
                                var13 = _closure2_slot2;
                                var12 = var13.get;
                                var12 = var12.bind(var13)();
                                var13 = var12.position;
                                var12 = _closure1_slot5;
                                var13 = var13 + var12;
                                var12 = _closure1_slot6;
                                var12 = var13 + var12;
                                var9 = var7 < var12;
                            case 318:
                                var12 = _closure1_slot8;
                                var13 = var11 - var12;
                                var12 = _closure1_slot6;
                                var12 = var13 - var12;
                                if (!(var4 > var12)) {
                                    _fun110002_ip = 348;
                                    continue _fun110002
                                }
                            case 338:
                                if (!(var4 < var11)) {
                                    _fun110002_ip = 348;
                                    continue _fun110002
                                }
                            case 342:
                                if (var9) {
                                    _fun110002_ip = 591;
                                    continue _fun110002
                                }
                            case 348:
                                var11 = _closure2_slot0;
                                var9 = _closure1_slot9;
                                var9 = var9.PULL_TAB;
                                if (!(var11 === var9)) {
                                    _fun110002_ip = 388;
                                    continue _fun110002
                                }
                            case 366:
                                var11 = _closure2_slot0;
                                var9 = _closure1_slot9;
                                var9 = var9.PULL_TAB;
                                if (!(var11 === var9)) {
                                    _fun110002_ip = 478;
                                    continue _fun110002
                                }
                            case 384:
                                if (!(var8 > var5)) {
                                    _fun110002_ip = 478;
                                    continue _fun110002
                                }
                            case 388:
                                var6 = var4 - var6;
                                var4 = global;
                                var9 = var4.Math;
                                var8 = var9.abs;
                                var7 = var7 - var10;
                                var7 = var8.bind(var9)(var7);
                                var9 = _closure2_slot1;
                                var8 = var9.get;
                                var8 = var8.bind(var9)();
                                if (!(var8 > var5)) {
                                    _fun110002_ip = 436;
                                    continue _fun110002
                                }
                            case 432:
                                if (!(!(var6 > var5))) {
                                    _fun110002_ip = 457;
                                    continue _fun110002
                                }
                            case 436:
                                var9 = _closure2_slot1;
                                var8 = var9.get;
                                var8 = var8.bind(var9)();
                                if (!(var8 <= var5)) {
                                    _fun110002_ip = 478;
                                    continue _fun110002
                                }
                            case 453:
                                if (!(var6 < var5)) {
                                    _fun110002_ip = 478;
                                    continue _fun110002
                                }
                            case 457:
                                var8 = var4.Math;
                                var5 = var8.abs;
                                var5 = var5.bind(var8)(var6);
                                if (!(!(var5 > var7))) {
                                    _fun110002_ip = 493;
                                    continue _fun110002
                                }
                            case 478:
                                var5 = var2.fail;
                                var5 = var5.bind(var2)();
                                _fun110002_ip = 715;
                                continue _fun110002;
                            case 493:
                                var5 = var4.Math;
                                var4 = var5.abs;
                                var5 = var4.bind(var5)(var6);
                                var4 = 3;
                                if (!(!(var5 < var4))) {
                                    _fun110002_ip = 589;
                                    continue _fun110002
                                }
                            case 517:
                                var7 = _closure2_slot3;
                                var5 = var7.set;
                                var4 = {};
                                var6 = var7.get;
                                var14 = var6.bind(var7)();
                                var15 = var4;
                                var6 = copyDataProperties(var15, var14);
                                var6 = true;
                                var8 = 'active';
                                var4[var8] = var6;
                                var4 = var5.bind(var7)(var4);
                                var5 = _closure2_slot4;
                                var4 = var5.setLaunchPadShown;
                                var4 = var4.bind(var5)(var6);
                                var4 = var2.activate;
                                var4 = var4.bind(var2)();
                                var4 = undefined;
                                return var4;
                            case 589:
                                return var0;
                            case 591:
                                var7 = _closure2_slot3;
                                var6 = var7.set;
                                var5 = {};
                                var4 = var7.get;
                                var14 = var4.bind(var7)();
                                var15 = var5;
                                var4 = copyDataProperties(var15, var14);
                                var8 = _closure2_slot2;
                                var4 = var8.get;
                                var4 = var4.bind(var8)();
                                var8 = var4.position;
                                var4 = 'initialPullTabPosition';
                                var5[var4] = var8;
                                var4 = true;
                                var8 = 'active';
                                var5[var8] = var4;
                                var5 = var6.bind(var7)(var5);
                                var3 = _closure2_slot4;
                                var5 = var3.setLaunchPadPullTabScale;
                                var1 = _closure1_slot7;
                                var1 = var5.bind(var3)(var1);
                                var1 = var3.setLaunchPadShown;
                                var1 = var1.bind(var3)(var4);
                                var1 = var2.activate;
                                var1 = var1.bind(var2)();
                                var1 = undefined;
                                return var1;
                            case 705:
                                var1 = var2.fail;
                                var1 = var1.bind(var2)();
                            case 715:
                                return var0;
                        }
                    };
                    var11 = {};
                    var11.gestureState = var6;
                    var7 = var10[var7];
                    var7 = var14.bind(var9)(var7);
                    var7 = var7.State;
                    var11.State = var7;
                    var13 = 6;
                    var7 = var10[var13];
                    var7 = var14.bind(var9)(var7);
                    var7 = var7.getWindowDimensionsWorklet;
                    var11.getWindowDimensionsWorklet = var7;
                    var8 = _closure2_slot0;
                    var11.launchPadType = var8;
                    var7 = _closure1_slot9;
                    var11.LaunchPadTypes = var7;
                    var15 = _closure1_slot4;
                    var11.LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE = var15;
                    var15 = _closure1_slot8;
                    var11.LAUNCH_PAD_PULL_TAB_WIDTH = var15;
                    var15 = _closure1_slot6;
                    var11.LAUNCH_PAD_PULL_TAB_HIT_SLOP = var15;
                    var15 = _closure2_slot2;
                    var11.launchPadPullTabState = var15;
                    var15 = _closure1_slot5;
                    var11.LAUNCH_PAD_PULL_TAB_HEIGHT = var15;
                    var5 = _closure2_slot4;
                    var11.updaters = var5;
                    var15 = _closure1_slot7;
                    var11.LAUNCH_PAD_PULL_TAB_SCALE_FACTOR = var15;
                    var11.launchPadSharedState = var12;
                    var15 = 3;
                    var11.MANUAL_ACTIVATION_THRESHOLD = var15;
                    var1.__closure = var11;
                    var11 = 5887887666279.0;
                    var1.__workletHash = var11;
                    var11 = _closure1_slot14;
                    var1.__initData = var11;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onChange;
                    var1 = function arg0() {
                        _fun110003: for (var _fun110003_ip = 0;;) switch (_fun110003_ip) {
                            case 0:
                                var0 = arg0;
                                var10 = var0.translationX;
                                var6 = var0.translationY;
                                var9 = var0.absoluteX;
                                var2 = _closure2_slot3;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var1 = var1.active;
                                if (!var1) {
                                    _fun110003_ip = 494;
                                    continue _fun110003
                                }
                            case 49:
                                var11 = _closure2_slot3;
                                var1 = var11.get;
                                var1 = var1.bind(var11)();
                                var4 = var1.initialTouchX;
                                var2 = var1.requiresPop;
                                var7 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 6;
                                var5 = var5[var3];
                                var3 = undefined;
                                var7 = var7.bind(var3)(var5);
                                var5 = var7.getWindowDimensionsWorklet;
                                var5 = var5.bind(var7)();
                                var7 = var5.width;
                                var5 = global;
                                var12 = var5.Math;
                                var8 = var12.max;
                                var5 = var9 - var4;
                                var4 = -1;
                                var4 = var4 * var5;
                                var5 = 0;
                                var8 = var8.bind(var12)(var4, var5);
                                var4 = var11.get;
                                var4 = var4.bind(var11)();
                                var4 = var4.initialTouchX;
                                var4 = var9 - var4;
                                var9 = var11.get;
                                var9 = var9.bind(var11)();
                                var9 = var9.initialTouchX;
                                var9 = var9 + var10;
                                var11 = _closure2_slot0;
                                var10 = _closure1_slot9;
                                var10 = var10.PULL_TAB;
                                if (!(var11 !== var10)) {
                                    _fun110003_ip = 208;
                                    continue _fun110003
                                }
                            case 205:
                                var5 = 40;
                            case 208:
                                var5 = var9 - var5;
                                var10 = var5 / var7;
                                if (!var2) {
                                    _fun110003_ip = 229;
                                    continue _fun110003
                                }
                            case 219:
                                var5 = 70;
                                if (!(!(var8 <= var5))) {
                                    _fun110003_ip = 385;
                                    continue _fun110003
                                }
                            case 229:
                                var9 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var5 = 7;
                                var5 = var11[var5];
                                var9 = var9.bind(var3)(var5);
                                var5 = _closure2_slot3;
                                if (var2) {
                                    _fun110003_ip = 271;
                                    continue _fun110003
                                }
                            case 256:
                                var2 = {};
                                var2.positionOffsetX = var4;
                                var2 = var9.bind(var3)(var5, var2);
                                _fun110003_ip = 361;
                                continue _fun110003;
                            case 271:
                                var2 = {};
                                var12 = false;
                                var2.requiresPop = var12;
                                var2.positionOffsetX = var4;
                                var2 = var9.bind(var3)(var5, var2);
                                var9 = _closure1_slot0;
                                var2 = 8;
                                var2 = var11[var2];
                                var13 = var9.bind(var3)(var2);
                                var12 = var13.runOnJS;
                                var2 = 9;
                                var5 = var11[var2];
                                var5 = var9.bind(var3)(var5);
                                var5 = var5.triggerHapticFeedback;
                                var5 = var12.bind(var13)(var5);
                                var2 = var11[var2];
                                var2 = var9.bind(var3)(var2);
                                var2 = var2.HapticFeedbackTypes;
                                var2 = var2.IMPACT_MEDIUM;
                                var2 = var5.bind(var3)(var2);
                            case 361:
                                var9 = _closure2_slot4;
                                var5 = var9.setLaunchPadPosition;
                                var2 = 1;
                                var2 = var2 - var10;
                                var2 = var5.bind(var9)(var2);
                                _fun110003_ip = 494;
                                continue _fun110003;
                            case 385:
                                var5 = _closure2_slot0;
                                var2 = _closure1_slot9;
                                var2 = var2.PULL_TAB;
                                if (!(var5 === var2)) {
                                    _fun110003_ip = 420;
                                    continue _fun110003
                                }
                            case 403:
                                var5 = _closure2_slot4;
                                var2 = var5.setLaunchPadPullTabTranslation;
                                var2 = var2.bind(var5)(var6);
                                _fun110003_ip = 457;
                                continue _fun110003;
                            case 420:
                                var6 = _closure2_slot4;
                                var5 = var6.setLaunchPadPosition;
                                var2 = 0.5;
                                var2 = var2 * var8;
                                var2 = var8 - var2;
                                var2 = var2 / var7;
                                var2 = var5.bind(var6)(var2);
                            case 457:
                                var2 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 7;
                                var1 = var5[var1];
                                var2 = var2.bind(var3)(var1);
                                var1 = _closure2_slot3;
                                var0 = {};
                                var0.positionOffsetX = var4;
                                var0 = var2.bind(var3)(var1, var0);
                            case 494:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var11 = {};
                    var11.gestureState = var6;
                    var13 = var10[var13];
                    var13 = var14.bind(var9)(var13);
                    var13 = var13.getWindowDimensionsWorklet;
                    var11.getWindowDimensionsWorklet = var13;
                    var13 = 0.5;
                    var11.POP_RESISTANCE = var13;
                    var11.launchPadType = var8;
                    var11.LaunchPadTypes = var7;
                    var7 = 70;
                    var11.PIP_POP_DISTANCE = var7;
                    var11.updaters = var5;
                    var8 = _closure1_slot1;
                    var7 = 7;
                    var13 = var10[var7];
                    var13 = var8.bind(var9)(var13);
                    var11.updateSharedValueIfChanged = var13;
                    var13 = 8;
                    var13 = var10[var13];
                    var13 = var14.bind(var9)(var13);
                    var13 = var13.runOnJS;
                    var11.runOnJS = var13;
                    var13 = 9;
                    var15 = var10[var13];
                    var15 = var14.bind(var9)(var15);
                    var15 = var15.triggerHapticFeedback;
                    var11.triggerHapticFeedback = var15;
                    var13 = var10[var13];
                    var13 = var14.bind(var9)(var13);
                    var13 = var13.HapticFeedbackTypes;
                    var11.HapticFeedbackTypes = var13;
                    var1.__closure = var11;
                    var11 = 8073380735713.0;
                    var1.__workletHash = var11;
                    var11 = _closure1_slot13;
                    var1.__initData = var11;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onEnd;
                    var1 = function arg0() {
                        _fun110004: for (var _fun110004_ip = 0;;) switch (_fun110004_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.velocityX;
                                var3 = _closure2_slot3;
                                var0 = var3.get;
                                var0 = var0.bind(var3)();
                                var3 = var0.requiresPop;
                                var0 = var0.startShown;
                                if (var3) {
                                    _fun110004_ip = 178;
                                    continue _fun110004
                                }
                            case 43:
                                var3 = global;
                                var4 = var3.Math;
                                var3 = var4.abs;
                                var4 = var3.bind(var4)(var2);
                                var3 = 100;
                                if (!(!(var4 < var3))) {
                                    _fun110004_ip = 112;
                                    continue _fun110004
                                }
                            case 69:
                                var4 = 0;
                                if (!(!(var2 > var4))) {
                                    _fun110004_ip = 95;
                                    continue _fun110004
                                }
                            case 75:
                                var5 = _closure2_slot4;
                                var3 = var5.setLaunchPadPosition;
                                var2 = 1;
                                var2 = var3.bind(var5)(var2);
                                _fun110004_ip = 208;
                                continue _fun110004;
                            case 95:
                                var3 = _closure2_slot4;
                                var2 = var3.setLaunchPadPosition;
                                var2 = var2.bind(var3)(var4);
                                _fun110004_ip = 208;
                                continue _fun110004;
                            case 112:
                                var3 = _closure2_slot1;
                                var2 = var3.get;
                                var3 = var2.bind(var3)();
                                var2 = 0.5;
                                if (!(!(var3 >= var2))) {
                                    _fun110004_ip = 158;
                                    continue _fun110004
                                }
                            case 139:
                                var4 = _closure2_slot4;
                                var3 = var4.setLaunchPadPosition;
                                var2 = 0;
                                var2 = var3.bind(var4)(var2);
                                _fun110004_ip = 208;
                                continue _fun110004;
                            case 158:
                                var4 = _closure2_slot4;
                                var3 = var4.setLaunchPadPosition;
                                var2 = 1;
                                var2 = var3.bind(var4)(var2);
                                _fun110004_ip = 208;
                                continue _fun110004;
                            case 178:
                                var2 = _closure2_slot4;
                                var1 = var2.setLaunchPadPosition;
                                if (var0) {
                                    _fun110004_ip = 200;
                                    continue _fun110004
                                }
                            case 191:
                                var0 = 0;
                                var0 = var1.bind(var2)(var0);
                                _fun110004_ip = 208;
                                continue _fun110004;
                            case 200:
                                var0 = 1;
                                var0 = var1.bind(var2)(var0);
                            case 208:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var11 = {};
                    var11.gestureState = var6;
                    var11.updaters = var5;
                    var11.launchPadSharedState = var12;
                    var1.__closure = var11;
                    var11 = 14391907446770.0;
                    var1.__workletHash = var11;
                    var11 = _closure1_slot12;
                    var1.__initData = var11;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onTouchesCancelled;
                    var1 = function() {
                        _fun110005: for (var _fun110005_ip = 0;;) switch (_fun110005_ip) {
                            case 0:
                                var2 = _closure2_slot3;
                                var0 = var2.get;
                                var2 = var0.bind(var2)();
                                var0 = var2.initialLaunchPadPosition;
                                var2 = var2.active;
                                if (!var2) {
                                    _fun110005_ip = 72;
                                    continue _fun110005
                                }
                            case 31:
                                var3 = 1;
                                if (!(var3 !== var0)) {
                                    _fun110005_ip = 57;
                                    continue _fun110005
                                }
                            case 38:
                                var4 = _closure2_slot4;
                                var2 = var4.setLaunchPadPosition;
                                var0 = 0;
                                var0 = var2.bind(var4)(var0);
                                _fun110005_ip = 72;
                                continue _fun110005;
                            case 57:
                                var2 = _closure2_slot4;
                                var0 = var2.setLaunchPadPosition;
                                var0 = var0.bind(var2)(var3);
                            case 72:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 7;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = _closure2_slot3;
                                var1 = {
                                    'active': false,
                                    'initialLaunchPadPosition': 0,
                                    'initialPullTabPosition': 0,
                                    'initialTouchX': 0,
                                    'initialTouchY': 0,
                                    'positionOffsetX': 0,
                                    'positionOffsetY': 0,
                                    'startTime': 4294967295
                                };
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                        }
                    };
                    var11 = {};
                    var11.gestureState = var6;
                    var11.updaters = var5;
                    var12 = var10[var7];
                    var12 = var8.bind(var9)(var12);
                    var11.updateSharedValueIfChanged = var12;
                    var1.__closure = var11;
                    var11 = 11677880944102.0;
                    var1.__workletHash = var11;
                    var11 = _closure1_slot11;
                    var1.__initData = var11;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.onFinalize;
                    var0 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = _closure2_slot3;
                        var2 = {
                            'active': false,
                            'initialLaunchPadPosition': 0,
                            'initialPullTabPosition': 0,
                            'initialTouchX': 0,
                            'initialTouchY': 0,
                            'positionOffsetX': 0,
                            'positionOffsetY': 0,
                            'startTime': 4294967295
                        };
                        var2 = var4.bind(var0)(var3, var2);
                        var3 = _closure2_slot4;
                        var2 = var3.setLaunchPadPullTabScale;
                        var1 = 1;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var4 = {};
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var4.updateSharedValueIfChanged = var7;
                    var4.gestureState = var6;
                    var4.updaters = var5;
                    var0.__closure = var4;
                    var4 = 14463491499289.0;
                    var0.__workletHash = var4;
                    var3 = _closure1_slot10;
                    var0.__initData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var0.gesture = var2;
        var0.gestureRef = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9872, 3921, 1568, 4964, 478, 13048, 5306, 3722, 3281, 2]);