// modules/panels/morphable/native/useMorphablePanelGesture.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var4 = var5.bind(var0)(var1);
    var1 = var4.IS_IOS;
    var _closure1_slot4 = var1;
    var1 = var4.MIN_PAN_GESTURE_MOVE;
    var _closure1_slot5 = var1;
    var1 = var4.MorphablePanelModes;
    var _closure1_slot6 = var1;
    var7 = var4.PANEL_TAP_GESTURE_MAX_DISTANCE;
    var _closure1_slot7 = var7;
    var7 = var4.PIP_POP_HEIGHT;
    var _closure1_slot8 = var7;
    var4 = var4.POP_RESISTANCE;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function useMorphablePanelGestureTsx1(){const{onTapGestureStart}=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();}';
    var4.code = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function useMorphablePanelGestureTsx2(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});}';
    var4.code = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function useMorphablePanelGestureTsx3(event){const{initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd}=this.__closure;if(initialGestureOffset.get().cancel){return;}const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode===MorphablePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});}';
    var4.code = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function useMorphablePanelGestureTsx4(_e){const{updateSharedValueIfChanged,initialGestureOffset,wrapperOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}';
    var4.code = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function useMorphablePanelGestureTsx5(event){const{mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(mode!==MorphablePanelModes.PIP){const minYOffset=safeArea.top;let newYOffset=(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1});}}';
    var4.code = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function useMorphablePanelGestureTsx6(event,manager){const{IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}const{absoluteX:absoluteX,absoluteY:absoluteY,absoluteMovement:absoluteMovement,isNotPullDownGesture:isNotPullDownGesture,yDiff:yDiff}=calculateXYDiff(event,initialGestureOffset);let startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else if(isNotPullDownGesture){manager.fail();}}else if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}}';
    var4.code = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function useMorphablePanelGestureTsx7(event){const{updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});}';
    var4.code = var7;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/panels/morphable/native/useMorphablePanelGesture.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun110385: for (var _fun110385_ip = 0;;) switch (_fun110385_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.mode;
                var _closure2_slot0 = var13;
                var11 = var1.onPanMinimizeGestureEnd;
                var _closure2_slot1 = var11;
                var10 = var1.onTapGestureStart;
                var _closure2_slot2 = var10;
                var9 = var1.panGestureEnabled;
                var14 = undefined;
                if (!(var9 === var14)) {
                    _fun110385_ip = 48;
                    continue _fun110385
                }
            case 46:
                var9 = false;
            case 48:
                var _closure2_slot3 = var9;
                var6 = var1.pipState;
                var _closure2_slot4 = var6;
                var12 = var1.swipeRequiresPop;
                if (!(var12 === var14)) {
                    _fun110385_ip = 74;
                    continue _fun110385
                }
            case 72:
                var12 = false;
            case 74:
                var _closure2_slot5 = var12;
                var5 = var1.wrapperOffset;
                var _closure2_slot6 = var5;
                var4 = var1.disableHorizontalSafeAreas;
                if (!(var4 === var14)) {
                    _fun110385_ip = 100;
                    continue _fun110385
                }
            case 98:
                var4 = false;
            case 100:
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var14;
                var _closure2_slot9 = var14;
                var _closure2_slot10 = var14;
                var3 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 2;
                var2 = var15[var2];
                var2 = var3.bind(var14)(var2);
                var7 = var2.bind(var14)();
                _closure2_slot8 = var7;
                var2 = 3;
                var2 = var15[var2];
                var2 = var3.bind(var14)(var2);
                var8 = var2.bind(var14)();
                _closure2_slot9 = var8;
                var3 = _closure1_slot0;
                var2 = 4;
                var2 = var15[var2];
                var14 = var3.bind(var14)(var2);
                var3 = var14.useSharedValue;
                var2 = {
                    'absoluteXStart': 0,
                    'absoluteYStart': 0,
                    'active': false,
                    'gestureInBottomSafeArea': false,
                    'cancel': false,
                    'requiresPop': false
                };
                var14 = var3.bind(var14)(var2);
                _closure2_slot10 = var14;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(11);
                var1[0] = var14;
                var1[1] = var13;
                var1[2] = var12;
                var1[3] = var11;
                var1[4] = var10;
                var1[5] = var9;
                var1[6] = var8;
                var1[7] = var7;
                var1[8] = var6;
                var1[9] = var5;
                var1[10] = var4;
                var0 = function() { // Environment: var0
                    var16 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var15 = 5;
                    var1 = var12[var15];
                    var11 = undefined;
                    var1 = var16.bind(var11)(var1);
                    var3 = var1.Gesture;
                    var2 = var3.Race;
                    var1 = var12[var15];
                    var1 = var16.bind(var11)(var1);
                    var4 = var1.Gesture;
                    var1 = var4.Tap;
                    var5 = var1.bind(var4)();
                    var4 = var5.enabled;
                    var9 = _closure2_slot2;
                    var1 = null;
                    var1 = var1 != var9;
                    var5 = var4.bind(var5)(var1);
                    var4 = var5.maxDistance;
                    var1 = _closure1_slot7;
                    var5 = var4.bind(var5)(var1);
                    var4 = var5.onStart;
                    var1 = function() {
                        _fun110387: for (var _fun110387_ip = 0;;) switch (_fun110387_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun110387_ip = 23;
                                    continue _fun110387
                                }
                            case 13:
                                var1 = _closure2_slot2;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 23:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var7 = {};
                    var7.onTapGestureStart = var9;
                    var1.__closure = var7;
                    var7 = 9880530558215.0;
                    var1.__workletHash = var7;
                    var7 = _closure1_slot10;
                    var1.__initData = var7;
                    var1 = var4.bind(var5)(var1);
                    var4 = var12[var15];
                    var4 = var16.bind(var11)(var4);
                    var5 = var4.Gesture;
                    var4 = var5.Pan;
                    var7 = var4.bind(var5)();
                    var5 = var7.enabled;
                    var4 = _closure2_slot3;
                    var7 = var5.bind(var7)(var4);
                    var5 = var7.manualActivation;
                    var4 = true;
                    var7 = var5.bind(var7)(var4);
                    var5 = var7.maxPointers;
                    var4 = 1;
                    var7 = var5.bind(var7)(var4);
                    var5 = var7.shouldCancelWhenOutside;
                    var4 = false;
                    var7 = var5.bind(var7)(var4);
                    var5 = var7.onBegin;
                    var4 = function arg0() {
                        var5 = arg0;
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = _closure2_slot6;
                        var1 = {
                            'x': 0,
                            'y': 0
                        };
                        var1 = var3.bind(var0)(var2, var1);
                        var3 = _closure2_slot10;
                        var2 = var3.set;
                        var1 = {};
                        var6 = var5.absoluteX;
                        var1.absoluteXStart = var6;
                        var6 = var5.absoluteY;
                        var1.absoluteYStart = var6;
                        var6 = false;
                        var1.active = var6;
                        var7 = var5.absoluteY;
                        var6 = _closure2_slot8;
                        var8 = var6.height;
                        var6 = _closure2_slot9;
                        var9 = var6.bottom;
                        var6 = 2;
                        var6 = var6 * var9;
                        var6 = var8 - var6;
                        var6 = var7 > var6;
                        var1.cancel = var6;
                        var6 = var5.absoluteY;
                        var5 = _closure2_slot8;
                        var7 = var5.height;
                        var5 = _closure2_slot9;
                        var5 = var5.bottom;
                        var5 = var7 - var5;
                        var5 = var6 > var5;
                        var1.gestureInBottomSafeArea = var5;
                        var4 = _closure2_slot5;
                        var1.requiresPop = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var13 = {};
                    var10 = _closure1_slot1;
                    var9 = 6;
                    var14 = var12[var9];
                    var14 = var10.bind(var11)(var14);
                    var13.updateSharedValueIfChanged = var14;
                    var14 = _closure2_slot6;
                    var13.wrapperOffset = var14;
                    var17 = _closure2_slot10;
                    var13.initialGestureOffset = var17;
                    var17 = _closure2_slot8;
                    var13.windowDimensions = var17;
                    var17 = _closure2_slot9;
                    var13.safeArea = var17;
                    var17 = _closure2_slot5;
                    var13.swipeRequiresPop = var17;
                    var4.__closure = var13;
                    var13 = 14796057583737.0;
                    var4.__workletHash = var13;
                    var13 = _closure1_slot16;
                    var4.__initData = var13;
                    var7 = var5.bind(var7)(var4);
                    var5 = var7.onTouchesMove;
                    var4 = function arg0, arg1() {
                        _fun110389: for (var _fun110389_ip = 0;;) switch (_fun110389_ip) {
                            case 0:
                                var6 = arg0;
                                var1 = arg1;
                                var2 = _closure1_slot4;
                                if (!var2) {
                                    _fun110389_ip = 44;
                                    continue _fun110389
                                }
                            case 16:
                                var3 = _closure2_slot10;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var2.gestureInBottomSafeArea;
                                if (var2) {
                                    _fun110389_ip = 481;
                                    continue _fun110389
                                }
                            case 44:
                                var3 = _closure2_slot10;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var2.cancel;
                                if (var2) {
                                    _fun110389_ip = 469;
                                    continue _fun110389
                                }
                            case 72:
                                var3 = var6.state;
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var2 = 5;
                                var2 = var7[var2];
                                var7 = undefined;
                                var2 = var5.bind(var7)(var2);
                                var2 = var2.State;
                                var2 = var2.BEGAN;
                                if (!(var3 === var2)) {
                                    _fun110389_ip = 491;
                                    continue _fun110389
                                }
                            case 118:
                                var3 = _closure2_slot10;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var2.active;
                                if (var2) {
                                    _fun110389_ip = 491;
                                    continue _fun110389
                                }
                            case 143:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 7;
                                var2 = var5[var2];
                                var5 = var3.bind(var7)(var2);
                                var3 = var5.calculateXYDiff;
                                var2 = _closure2_slot10;
                                var2 = var3.bind(var5)(var6, var2);
                                var6 = var2.absoluteX;
                                var5 = var2.absoluteY;
                                var10 = var2.absoluteMovement;
                                var8 = var2.isNotPullDownGesture;
                                var9 = var2.yDiff;
                                var3 = _closure2_slot0;
                                var2 = _closure1_slot6;
                                var2 = var2.PANEL;
                                if (!(var3 !== var2)) {
                                    _fun110389_ip = 315;
                                    continue _fun110389
                                }
                            case 227:
                                var3 = _closure2_slot0;
                                var2 = _closure1_slot6;
                                var2 = var2.PIP;
                                var3 = var3 === var2;
                                if (!var3) {
                                    _fun110389_ip = 256;
                                    continue _fun110389
                                }
                            case 248:
                                var2 = _closure1_slot5;
                                var3 = var10 > var2;
                            case 256:
                                var2 = false;
                                if (!var3) {
                                    _fun110389_ip = 343;
                                    continue _fun110389
                                }
                            case 261:
                                var10 = _closure1_slot0;
                                var13 = _closure1_slot2;
                                var3 = 4;
                                var3 = var13[var3];
                                var11 = var10.bind(var7)(var3);
                                var10 = var11.runOnJS;
                                var12 = _closure1_slot1;
                                var3 = 8;
                                var3 = var13[var3];
                                var3 = var12.bind(var7)(var3);
                                var3 = var10.bind(var11)(var3);
                                var3 = var3.bind(var7)();
                                var2 = true;
                                _fun110389_ip = 343;
                                continue _fun110389;
                            case 315:
                                var3 = 0;
                                var3 = var9 < var3;
                                var2 = true;
                                if (var3) {
                                    _fun110389_ip = 343;
                                    continue _fun110389
                                }
                            case 326:
                                var2 = false;
                                if (!var8) {
                                    _fun110389_ip = 343;
                                    continue _fun110389
                                }
                            case 331:
                                var8 = var1.fail;
                                var8 = var8.bind(var1)();
                                var2 = false;
                            case 343:
                                if (!var2) {
                                    _fun110389_ip = 491;
                                    continue _fun110389
                                }
                            case 349:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var0 = 6;
                                var0 = var3[var0];
                                var3 = var2.bind(var7)(var0);
                                var2 = _closure2_slot6;
                                var0 = {
                                    'x': 0,
                                    'y': 0,
                                    'gestureActive': true
                                };
                                var0 = var3.bind(var7)(var2, var0);
                                var3 = _closure2_slot10;
                                var2 = var3.set;
                                var0 = {
                                    'absoluteXStart': null,
                                    'absoluteYStart': null,
                                    'active': true,
                                    'cancel': false,
                                    'gestureInBottomSafeArea': false
                                };
                                var0.absoluteXStart = var6;
                                var0.absoluteYStart = var5;
                                var5 = _closure2_slot10;
                                var4 = var5.get;
                                var4 = var4.bind(var5)();
                                var4 = var4.requiresPop;
                                var0.requiresPop = var4;
                                var0 = var2.bind(var3)(var0);
                                var0 = var1.activate;
                                var0 = var0.bind(var1)();
                                _fun110389_ip = 491;
                                continue _fun110389;
                            case 469:
                                var0 = var1.fail;
                                var0 = var0.bind(var1)();
                                _fun110389_ip = 491;
                                continue _fun110389;
                            case 481:
                                var0 = var1.activate;
                                var0 = var0.bind(var1)();
                            case 491:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var13 = {};
                    var17 = _closure1_slot4;
                    var13.IS_IOS = var17;
                    var17 = _closure2_slot10;
                    var13.initialGestureOffset = var17;
                    var15 = var12[var15];
                    var15 = var16.bind(var11)(var15);
                    var15 = var15.State;
                    var13.State = var15;
                    var15 = 7;
                    var17 = var12[var15];
                    var17 = var16.bind(var11)(var17);
                    var17 = var17.calculateXYDiff;
                    var13.calculateXYDiff = var17;
                    var18 = _closure2_slot0;
                    var13.mode = var18;
                    var17 = _closure1_slot6;
                    var13.MorphablePanelModes = var17;
                    var19 = _closure1_slot5;
                    var13.MIN_PAN_GESTURE_MOVE = var19;
                    var19 = 4;
                    var20 = var12[var19];
                    var20 = var16.bind(var11)(var20);
                    var20 = var20.runOnJS;
                    var13.runOnJS = var20;
                    var20 = 8;
                    var20 = var12[var20];
                    var20 = var10.bind(var11)(var20);
                    var13.triggerIOSHaptic = var20;
                    var20 = var12[var9];
                    var20 = var10.bind(var11)(var20);
                    var13.updateSharedValueIfChanged = var20;
                    var13.wrapperOffset = var14;
                    var4.__closure = var13;
                    var13 = 12545486163726.0;
                    var4.__workletHash = var13;
                    var13 = _closure1_slot15;
                    var4.__initData = var13;
                    var7 = var5.bind(var7)(var4);
                    var5 = var7.onChange;
                    var4 = function arg0() {
                        _fun110390: for (var _fun110390_ip = 0;;) switch (_fun110390_ip) {
                            case 0:
                                var2 = arg0;
                                var4 = _closure2_slot0;
                                var3 = _closure1_slot6;
                                var3 = var3.PIP;
                                if (!(var4 === var3)) {
                                    _fun110390_ip = 146;
                                    continue _fun110390
                                }
                            case 27:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 6;
                                var3 = var5[var3];
                                var6 = undefined;
                                var5 = var4.bind(var6)(var3);
                                var4 = _closure2_slot6;
                                var3 = {};
                                var8 = _closure2_slot10;
                                var7 = var8.get;
                                var7 = var7.bind(var8)();
                                var8 = var7.absoluteXStart;
                                var7 = var2.absoluteX;
                                var7 = var8 - var7;
                                var8 = -1;
                                var7 = var8 * var7;
                                var3.x = var7;
                                var9 = _closure2_slot10;
                                var7 = var9.get;
                                var7 = var7.bind(var9)();
                                var9 = var7.absoluteYStart;
                                var7 = var2.absoluteY;
                                var7 = var9 - var7;
                                var7 = var8 * var7;
                                var3.y = var7;
                                var3 = var5.bind(var6)(var4, var3);
                                _fun110390_ip = 517;
                                continue _fun110390;
                            case 146:
                                var3 = _closure2_slot9;
                                var4 = var3.top;
                                var5 = _closure2_slot10;
                                var3 = var5.get;
                                var3 = var3.bind(var5)();
                                var3 = var3.absoluteYStart;
                                var2 = var2.absoluteY;
                                var3 = var3 - var2;
                                var2 = -1;
                                var2 = var2 * var3;
                                var5 = _closure2_slot10;
                                var3 = var5.get;
                                var3 = var3.bind(var5)();
                                var3 = var3.requiresPop;
                                var3 = !var3;
                                if (!var3) {
                                    _fun110390_ip = 223;
                                    continue _fun110390
                                }
                            case 219:
                                var3 = var2 <= var4;
                            case 223:
                                if (!var3) {
                                    _fun110390_ip = 273;
                                    continue _fun110390
                                }
                            case 226:
                                var5 = _closure2_slot10;
                                var4 = var5.set;
                                var3 = {};
                                var7 = _closure2_slot10;
                                var6 = var7.get;
                                var12 = var6.bind(var7)();
                                var13 = var3;
                                var6 = copyDataProperties(var13, var12);
                                var7 = true;
                                var6 = 'requiresPop';
                                var3[var6] = var7;
                                var3 = var4.bind(var5)(var3);
                            case 273:
                                var4 = _closure2_slot10;
                                var3 = var4.get;
                                var3 = var3.bind(var4)();
                                var3 = var3.requiresPop;
                                var4 = var2;
                                if (!var3) {
                                    _fun110390_ip = 473;
                                    continue _fun110390
                                }
                            case 301:
                                var3 = global;
                                var6 = var3.Math;
                                var5 = var6.max;
                                var3 = 0;
                                var3 = var5.bind(var6)(var2, var3);
                                var5 = _closure1_slot8;
                                if (!(!(var3 <= var5))) {
                                    _fun110390_ip = 461;
                                    continue _fun110390
                                }
                            case 333:
                                var7 = _closure2_slot10;
                                var6 = var7.set;
                                var5 = {};
                                var9 = _closure2_slot10;
                                var8 = var9.get;
                                var12 = var8.bind(var9)();
                                var13 = var5;
                                var8 = copyDataProperties(var13, var12);
                                var9 = false;
                                var8 = 'requiresPop';
                                var5[var8] = var9;
                                var5 = var6.bind(var7)(var5);
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var5 = 4;
                                var5 = var9[var5];
                                var7 = undefined;
                                var11 = var8.bind(var7)(var5);
                                var10 = var11.runOnJS;
                                var5 = 9;
                                var6 = var9[var5];
                                var6 = var8.bind(var7)(var6);
                                var6 = var6.triggerHapticFeedback;
                                var6 = var10.bind(var11)(var6);
                                var5 = var9[var5];
                                var5 = var8.bind(var7)(var5);
                                var5 = var5.HapticFeedbackTypes;
                                var5 = var5.IMPACT_MEDIUM;
                                var5 = var6.bind(var7)(var5);
                                var4 = var2;
                                _fun110390_ip = 473;
                                continue _fun110390;
                            case 461:
                                var2 = _closure1_slot9;
                                var2 = var3 * var2;
                                var4 = var3 - var2;
                            case 473:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 6;
                                var1 = var3[var1];
                                var3 = undefined;
                                var2 = var2.bind(var3)(var1);
                                var1 = _closure2_slot6;
                                var0 = {};
                                var0.y = var4;
                                var4 = 0;
                                var0.x = var4;
                                var0 = var2.bind(var3)(var1, var0);
                            case 517:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var13 = {};
                    var13.mode = var18;
                    var13.MorphablePanelModes = var17;
                    var20 = _closure2_slot9;
                    var13.safeArea = var20;
                    var20 = _closure2_slot10;
                    var13.initialGestureOffset = var20;
                    var20 = _closure1_slot9;
                    var13.POP_RESISTANCE = var20;
                    var20 = _closure1_slot8;
                    var13.PIP_POP_HEIGHT = var20;
                    var19 = var12[var19];
                    var19 = var16.bind(var11)(var19);
                    var19 = var19.runOnJS;
                    var13.runOnJS = var19;
                    var19 = 9;
                    var20 = var12[var19];
                    var20 = var16.bind(var11)(var20);
                    var20 = var20.triggerHapticFeedback;
                    var13.triggerHapticFeedback = var20;
                    var19 = var12[var19];
                    var19 = var16.bind(var11)(var19);
                    var19 = var19.HapticFeedbackTypes;
                    var13.HapticFeedbackTypes = var19;
                    var19 = var12[var9];
                    var19 = var10.bind(var11)(var19);
                    var13.updateSharedValueIfChanged = var19;
                    var13.wrapperOffset = var14;
                    var4.__closure = var13;
                    var13 = 6076208535373.0;
                    var4.__workletHash = var13;
                    var13 = _closure1_slot14;
                    var4.__initData = var13;
                    var7 = var5.bind(var7)(var4);
                    var5 = var7.onTouchesCancelled;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 6;
                        var1 = var5[var2];
                        var0 = undefined;
                        var8 = var3.bind(var0)(var1);
                        var7 = _closure2_slot10;
                        var6 = {};
                        var4 = false;
                        var6.active = var4;
                        var6 = var8.bind(var0)(var7, var6);
                        var2 = var5[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = _closure2_slot6;
                        var1 = {};
                        var1.gestureActive = var4;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var13 = {};
                    var19 = var12[var9];
                    var19 = var10.bind(var11)(var19);
                    var13.updateSharedValueIfChanged = var19;
                    var19 = _closure2_slot10;
                    var13.initialGestureOffset = var19;
                    var13.wrapperOffset = var14;
                    var4.__closure = var13;
                    var13 = 14566382353702.0;
                    var4.__workletHash = var13;
                    var13 = _closure1_slot13;
                    var4.__initData = var13;
                    var7 = var5.bind(var7)(var4);
                    var5 = var7.onEnd;
                    var4 = function arg0() {
                        _fun110392: for (var _fun110392_ip = 0;;) switch (_fun110392_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure2_slot10;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var2.cancel;
                                if (var2) {
                                    _fun110392_ip = 410;
                                    continue _fun110392
                                }
                            case 31:
                                var10 = var1.velocityX;
                                var9 = var1.velocityY;
                                var8 = var1.absoluteX;
                                var7 = var1.absoluteY;
                                var3 = _closure2_slot0;
                                var2 = _closure1_slot6;
                                var2 = var2.PIP;
                                if (!(var3 !== var2)) {
                                    _fun110392_ip = 210;
                                    continue _fun110392
                                }
                            case 79:
                                var3 = _closure2_slot0;
                                var2 = _closure1_slot6;
                                var2 = var2.PANEL;
                                if (!(var3 === var2)) {
                                    _fun110392_ip = 368;
                                    continue _fun110392
                                }
                            case 100:
                                var6 = 0;
                                if (!(var9 > var6)) {
                                    _fun110392_ip = 368;
                                    continue _fun110392
                                }
                            case 109:
                                var3 = _closure2_slot10;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var2.requiresPop;
                                if (var2) {
                                    _fun110392_ip = 368;
                                    continue _fun110392
                                }
                            case 134:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 6;
                                var2 = var4[var2];
                                var4 = undefined;
                                var5 = var3.bind(var4)(var2);
                                var3 = _closure2_slot6;
                                var2 = {};
                                var2.x = var6;
                                var6 = _closure2_slot8;
                                var6 = var6.height;
                                var2.y = var6;
                                var2 = var5.bind(var4)(var3, var2);
                                var3 = _closure2_slot1;
                                var2 = null;
                                var2 = var2 == var3;
                                if (var2) {
                                    _fun110392_ip = 206;
                                    continue _fun110392
                                }
                            case 198:
                                var3 = _closure2_slot1;
                                var2 = var3.bind(var4)();
                            case 206:
                                var2 = undefined;
                                return var2;
                            case 210:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 7;
                                var2 = var4[var2];
                                var5 = undefined;
                                var6 = var3.bind(var5)(var2);
                                var3 = var6.calculatePIPPositionFromVelocity;
                                var2 = {};
                                var2.velocityX = var10;
                                var2.velocityY = var9;
                                var2.absoluteX = var8;
                                var2.absoluteY = var7;
                                var7 = _closure2_slot8;
                                var2.windowDimensions = var7;
                                var7 = _closure2_slot9;
                                var2.safeArea = var7;
                                var7 = _closure2_slot7;
                                var2.disableHorizontalSafeAreas = var7;
                                var2 = var3.bind(var6)(var2);
                                var7 = var2.pipX;
                                var6 = var2.pipY;
                                var3 = _closure1_slot1;
                                var2 = 6;
                                var8 = var4[var2];
                                var10 = var3.bind(var5)(var8);
                                var9 = _closure2_slot6;
                                var8 = {};
                                var11 = false;
                                var8.gestureActive = var11;
                                var8 = var10.bind(var5)(var9, var8);
                                var2 = var4[var2];
                                var4 = var3.bind(var5)(var2);
                                var3 = _closure2_slot4;
                                var2 = {};
                                var2.x = var7;
                                var2.y = var6;
                                var2 = var4.bind(var5)(var3, var2);
                            case 368:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 6;
                                var1 = var3[var1];
                                var3 = undefined;
                                var2 = var2.bind(var3)(var1);
                                var1 = _closure2_slot6;
                                var0 = {
                                    'x': 0,
                                    'y': 0,
                                    'gestureActive': false
                                };
                                var0 = var2.bind(var3)(var1, var0);
                            case 410:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var13 = {};
                    var19 = _closure2_slot10;
                    var13.initialGestureOffset = var19;
                    var13.mode = var18;
                    var13.MorphablePanelModes = var17;
                    var15 = var12[var15];
                    var15 = var16.bind(var11)(var15);
                    var15 = var15.calculatePIPPositionFromVelocity;
                    var13.calculatePIPPositionFromVelocity = var15;
                    var15 = _closure2_slot8;
                    var13.windowDimensions = var15;
                    var15 = _closure2_slot9;
                    var13.safeArea = var15;
                    var15 = _closure2_slot7;
                    var13.disableHorizontalSafeAreas = var15;
                    var15 = var12[var9];
                    var15 = var10.bind(var11)(var15);
                    var13.updateSharedValueIfChanged = var15;
                    var13.wrapperOffset = var14;
                    var14 = _closure2_slot4;
                    var13.pipState = var14;
                    var14 = _closure2_slot1;
                    var13.onPanMinimizeGestureEnd = var14;
                    var4.__closure = var13;
                    var13 = 2406462688275.0;
                    var4.__workletHash = var13;
                    var13 = _closure1_slot12;
                    var4.__initData = var13;
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.onFinalize;
                    var0 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = _closure2_slot10;
                        var1 = {
                            'active': false,
                            'cancel': false
                        };
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var7 = {};
                    var9 = var12[var9];
                    var9 = var10.bind(var11)(var9);
                    var7.updateSharedValueIfChanged = var9;
                    var8 = _closure2_slot10;
                    var7.initialGestureOffset = var8;
                    var0.__closure = var7;
                    var7 = 11153815903321.0;
                    var0.__workletHash = var7;
                    var6 = _closure1_slot11;
                    var0.__initData = var6;
                    var0 = var4.bind(var5)(var0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var3;
    var2.MorphablePanelModes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11820, 1464, 1568, 3720, 4961, 5301, 14209, 14212, 3279, 2]);