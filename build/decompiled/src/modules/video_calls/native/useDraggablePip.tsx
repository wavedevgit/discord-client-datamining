// modules/video_calls/native/useDraggablePip.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useChannelCallStore;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PIP_FOCUS_SCALE;
    var _closure1_slot4 = var3;
    var3 = {
        'mass': 1,
        'stiffness': 250,
        'overshootClamping': true,
        'restSpeedThreshold': 0.001,
        'restDisplacementThreshold': 0.001,
        'damping': 20
    };
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx1(){const{withTiming,pipFocus,PIP_FOCUS_SCALE,STANDARD_EASING}=this.__closure;return withTiming(pipFocus?PIP_FOCUS_SCALE:1,{easing:STANDARD_EASING,duration:250});}';
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx2(){const{width}=this.__closure;return width;}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx3(){const{height}=this.__closure;return height;}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx4(){const{pipScale,width}=this.__closure;return pipScale.get()*width;}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx5(){const{pipScale,height}=this.__closure;return pipScale.get()*height;}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx6(){const{containerWidth}=this.__closure;return containerWidth;}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx7(){const{containerHeight}=this.__closure;return containerHeight;}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx8(){const{containerWidth,scaledWidthDv,xPosition}=this.__closure;return[containerWidth-scaledWidthDv.get(),xPosition.get()];}';
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx9(result,previous){const{cheapWorkletArrayShallowEqual,clamp,xPosition,xDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerWidthNew,xPositionNew]=result;const[containerWidthOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerWidthNew!==containerWidthOld){const newX=clamp(xPositionNew*(containerWidthNew/containerWidthOld),0,containerWidthNew);xPosition.set(newX);xDestination.set(newX);}}';
    var3.code = var6;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx10(){const{containerHeight,scaledHeightDv,yPosition}=this.__closure;return[containerHeight-scaledHeightDv.get(),yPosition.get()];}';
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx11(result,previous){const{cheapWorkletArrayShallowEqual,clamp,yPosition,yDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerHeightNew,yPositionNew]=result;const[containerHeightOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerHeightNew!==containerHeightOld){const newY=clamp(yPositionNew*(containerHeightNew/containerHeightOld),0,containerHeightNew);yPosition.set(newY);yDestination.set(newY);}}';
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx12(event){const{xPosition,containerWidthDv,scaledWidthDv,clamp,yPosition,containerHeightDv,scaledHeightDv,snapToCorners,withSpring,spring,xDestination,yDestination}=this.__closure;const toss=0.0875;const xToss=xPosition.get()+toss*event.velocityX;const xMin=0;const xMax=containerWidthDv.get()-scaledWidthDv.get();const targetX=clamp(xToss,xMin,xMax);const yToss=yPosition.get()+toss*event.velocityY;const yMin=0;const yMax=containerHeightDv.get()-scaledHeightDv.get();const targetY=clamp(yToss,yMin,yMax);const top=targetY;const bottom=containerHeightDv.get()-scaledHeightDv.get()-targetY;const left=targetX;const right=containerWidthDv.get()-scaledWidthDv.get()-targetX;const minDistance=Math.min(top,bottom,left,right);let snapX=targetX;let snapY=targetY;switch(minDistance){case top:snapY=yMin;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case bottom:snapY=yMax;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case left:snapX=xMin;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;case right:snapX=xMax;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;}xPosition.set(withSpring(snapX,{...spring,velocity:event.velocityX}));xDestination.set(snapX);yPosition.set(withSpring(snapY,{...spring,velocity:event.velocityY}));yDestination.set(snapY);}';
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx13(event){const{xPosition,xDestination,yPosition,yDestination,trackedVoiceControlsToggleMovedForGestureSv,onMoved,runOnJS}=this.__closure;xPosition.set(xDestination.get()+event.translationX);yPosition.set(yDestination.get()+event.translationY);if(!trackedVoiceControlsToggleMovedForGestureSv.get()){if(onMoved!=null){runOnJS(onMoved)();}trackedVoiceControlsToggleMovedForGestureSv.set(true);}}';
    var3.code = var6;
    var _closure1_slot18 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx14(){const{onPress,runOnJS}=this.__closure;if(onPress!=null){runOnJS(onPress)();}}';
    var3.code = var6;
    var _closure1_slot19 = var3;
    var3 = {};
    var6 = 'function useDraggablePipTsx15(){const{xPosition,scaledWidthDv,widthDv,yPosition,scaledHeightDv,heightDv,pipScale}=this.__closure;return{transform:[{translateX:xPosition.get()+(scaledWidthDv.get()-widthDv.get())/2},{translateY:yPosition.get()+(scaledHeightDv.get()-heightDv.get())/2},{scale:pipScale.get()}]};}';
    var3.code = var6;
    var _closure1_slot20 = var3;
    var3 = {};
    var6 = 'function clamp_useDraggablePipTsx16(value,min,max){return Math.min(Math.max(value,min),max);}';
    var3.code = var6;
    var _closure1_slot21 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            var0 = global;
            var3 = var0.Math;
            var2 = var3.min;
            var5 = var0.Math;
            var4 = var5.max;
            var1 = arg0;
            var0 = arg1;
            var1 = var4.bind(var5)(var1, var0);
            var0 = arg2;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 1988116204206.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot21;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot22 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/useDraggablePip.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun63045: for (var _fun63045_ip = 0;;) switch (_fun63045_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.width;
                var _closure2_slot0 = var11;
                var12 = var0.height;
                var _closure2_slot1 = var12;
                var25 = var0.containerWidth;
                var _closure2_slot2 = var25;
                var17 = var0.containerHeight;
                var _closure2_slot3 = var17;
                var19 = var0.onPress;
                var _closure2_slot4 = var19;
                var27 = var0.onMoved;
                var _closure2_slot5 = var27;
                var21 = var0.snapToCorners;
                var _closure2_slot6 = var21;
                var15 = var0.activeOffsetX;
                var2 = var0.activeOffsetY;
                var3 = _closure1_slot3;
                var5 = undefined;
                var0 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.pipFocus;
                    return var0;
                };
                var8 = var3.bind(var5)(var0);
                var _closure2_slot7 = var8;
                var22 = _closure1_slot0;
                var23 = _closure1_slot1;
                var13 = 3;
                var0 = var23[var13];
                var6 = var22.bind(var5)(var0);
                var3 = var6.useDerivedValue;
                var0 = function() {
                    _fun63047: for (var _fun63047_ip = 0;;) switch (_fun63047_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 4;
                            var0 = var2[var0];
                            var6 = undefined;
                            var3 = var1.bind(var6)(var0);
                            var2 = var3.withTiming;
                            var0 = _closure2_slot7;
                            var1 = 1;
                            if (!var0) {
                                _fun63047_ip = 47;
                                continue _fun63047
                            }
                        case 43:
                            var1 = _closure1_slot4;
                        case 47:
                            var0 = {};
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var4 = 5;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.STANDARD_EASING;
                            var0.easing = var4;
                            var4 = 250;
                            var0.duration = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var7 = {};
                var9 = 4;
                var9 = var23[var9];
                var9 = var22.bind(var5)(var9);
                var9 = var9.withTiming;
                var7.withTiming = var9;
                var7.pipFocus = var8;
                var8 = _closure1_slot4;
                var7.PIP_FOCUS_SCALE = var8;
                var8 = 5;
                var8 = var23[var8];
                var8 = var22.bind(var5)(var8);
                var8 = var8.STANDARD_EASING;
                var7.STANDARD_EASING = var8;
                var0.__closure = var7;
                var7 = 7848271415351.0;
                var0.__workletHash = var7;
                var7 = _closure1_slot6;
                var0.__initData = var7;
                var6 = var3.bind(var6)(var0);
                var _closure2_slot8 = var6;
                var0 = var23[var13];
                var7 = var22.bind(var5)(var0);
                var3 = var7.useDerivedValue;
                var0 = function() {
                    var0 = _closure2_slot0;
                    return var0;
                };
                var8 = {};
                var8.width = var11;
                var0.__closure = var8;
                var8 = 14810909441301.0;
                var0.__workletHash = var8;
                var8 = _closure1_slot7;
                var0.__initData = var8;
                var10 = var3.bind(var7)(var0);
                var _closure2_slot9 = var10;
                var0 = var23[var13];
                var7 = var22.bind(var5)(var0);
                var3 = var7.useDerivedValue;
                var0 = function() {
                    var0 = _closure2_slot1;
                    return var0;
                };
                var8 = {};
                var8.height = var12;
                var0.__closure = var8;
                var8 = 15343935194036.0;
                var0.__workletHash = var8;
                var8 = _closure1_slot8;
                var0.__initData = var8;
                var7 = var3.bind(var7)(var0);
                var _closure2_slot10 = var7;
                var0 = var23[var13];
                var8 = var22.bind(var5)(var0);
                var3 = var8.useDerivedValue;
                var0 = function() {
                    var2 = _closure2_slot8;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0 = _closure2_slot0;
                    var0 = var1 * var0;
                    return var0;
                };
                var9 = {};
                var9.pipScale = var6;
                var9.width = var11;
                var0.__closure = var9;
                var9 = 3468337829868.0;
                var0.__workletHash = var9;
                var9 = _closure1_slot9;
                var0.__initData = var9;
                var11 = var3.bind(var8)(var0);
                var _closure2_slot11 = var11;
                var0 = var23[var13];
                var8 = var22.bind(var5)(var0);
                var3 = var8.useDerivedValue;
                var0 = function() {
                    var2 = _closure2_slot8;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0 = _closure2_slot1;
                    var0 = var1 * var0;
                    return var0;
                };
                var9 = {};
                var9.pipScale = var6;
                var9.height = var12;
                var0.__closure = var9;
                var9 = 7163944260205.0;
                var0.__workletHash = var9;
                var9 = _closure1_slot10;
                var0.__initData = var9;
                var8 = var3.bind(var8)(var0);
                var _closure2_slot12 = var8;
                var0 = var23[var13];
                var9 = var22.bind(var5)(var0);
                var3 = var9.useDerivedValue;
                var0 = function() {
                    var0 = _closure2_slot2;
                    return var0;
                };
                var12 = {};
                var12.containerWidth = var25;
                var0.__closure = var12;
                var12 = 13449836478609.0;
                var0.__workletHash = var12;
                var12 = _closure1_slot11;
                var0.__initData = var12;
                var26 = var3.bind(var9)(var0);
                var _closure2_slot13 = var26;
                var0 = var23[var13];
                var9 = var22.bind(var5)(var0);
                var3 = var9.useDerivedValue;
                var0 = function() {
                    var0 = _closure2_slot3;
                    return var0;
                };
                var12 = {};
                var12.containerHeight = var17;
                var0.__closure = var12;
                var12 = 4105281399152.0;
                var0.__workletHash = var12;
                var12 = _closure1_slot12;
                var0.__initData = var12;
                var24 = var3.bind(var9)(var0);
                var _closure2_slot14 = var24;
                var0 = var23[var13];
                var3 = var22.bind(var5)(var0);
                var0 = var3.useSharedValue;
                var9 = 0;
                var20 = var0.bind(var3)(var9);
                var _closure2_slot15 = var20;
                var0 = var23[var13];
                var12 = var22.bind(var5)(var0);
                var3 = var12.useSharedValue;
                var0 = var20.get;
                var0 = var0.bind(var20)();
                var12 = var3.bind(var12)(var0);
                var _closure2_slot16 = var12;
                var0 = var23[var13];
                var3 = var22.bind(var5)(var0);
                var0 = var3.useSharedValue;
                var18 = var0.bind(var3)(var9);
                var _closure2_slot17 = var18;
                var0 = var23[var13];
                var9 = var22.bind(var5)(var0);
                var3 = var9.useSharedValue;
                var0 = var18.get;
                var0 = var0.bind(var18)();
                var9 = var3.bind(var9)(var0);
                var _closure2_slot18 = var9;
                var0 = var23[var13];
                var14 = var22.bind(var5)(var0);
                var3 = var14.useSharedValue;
                var0 = false;
                var28 = var3.bind(var14)(var0);
                var _closure2_slot19 = var28;
                var0 = var23[var13];
                var16 = var22.bind(var5)(var0);
                var14 = var16.useAnimatedReaction;
                var3 = function() {
                    var2 = _closure2_slot2;
                    var3 = _closure2_slot11;
                    var0 = var3.get;
                    var0 = var0.bind(var3)();
                    var2 = var2 - var0;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var2 = _closure2_slot16;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var0 = {};
                var0.containerWidth = var25;
                var0.scaledWidthDv = var11;
                var0.xPosition = var12;
                var3.__closure = var0;
                var0 = 2741340788440.0;
                var3.__workletHash = var0;
                var0 = _closure1_slot13;
                var3.__initData = var0;
                var0 = function arg0, arg1() {
                    _fun63055: for (var _fun63055_ip = 0;;) switch (_fun63055_ip) {
                        case 0:
                            var3 = arg0;
                            var7 = arg1;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var1);
                            var4 = var5.cheapWorkletArrayShallowEqual;
                            var6 = null;
                            var8 = var6 != var7;
                            var1 = undefined;
                            if (!var8) {
                                _fun63055_ip = 51;
                                continue _fun63055
                            }
                        case 48:
                            var1 = var7;
                        case 51:
                            var1 = var4.bind(var5)(var3, var1);
                            if (var1) {
                                _fun63055_ip = 171;
                                continue _fun63055
                            }
                        case 60:
                            var9 = _closure1_slot2;
                            var1 = 2;
                            var1 = var9.bind(var0)(var3, var1);
                            var4 = 0;
                            var3 = var1[var4];
                            var8 = 1;
                            var5 = var1[var8];
                            var1 = var7;
                            if (!(var6 == var1)) {
                                _fun63055_ip = 103;
                                continue _fun63055
                            }
                        case 93:
                            var1 = [0, 0];
                        case 103:
                            var1 = var9.bind(var0)(var1, var8);
                            var1 = var1[var4];
                            if (!(var6 != var7)) {
                                _fun63055_ip = 171;
                                continue _fun63055
                            }
                        case 117:
                            if (!(var3 !== var1)) {
                                _fun63055_ip = 171;
                                continue _fun63055
                            }
                        case 121:
                            var2 = _closure1_slot22;
                            var1 = var3 / var1;
                            var1 = var5 * var1;
                            var3 = var2.bind(var0)(var1, var4, var3);
                            var4 = _closure2_slot16;
                            var2 = var4.set;
                            var2 = var2.bind(var4)(var3);
                            var2 = _closure2_slot15;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3);
                        case 171:
                            return var0;
                    }
                };
                var30 = {};
                var29 = 6;
                var25 = var23[var29];
                var25 = var22.bind(var5)(var25);
                var25 = var25.cheapWorkletArrayShallowEqual;
                var30.cheapWorkletArrayShallowEqual = var25;
                var25 = _closure1_slot22;
                var30.clamp = var25;
                var30.xPosition = var12;
                var30.xDestination = var20;
                var0.__closure = var30;
                var30 = 15748808822770.0;
                var0.__workletHash = var30;
                var30 = _closure1_slot14;
                var0.__initData = var30;
                var0 = var14.bind(var16)(var3, var0);
                var0 = var23[var13];
                var16 = var22.bind(var5)(var0);
                var14 = var16.useAnimatedReaction;
                var3 = function() {
                    var2 = _closure2_slot3;
                    var3 = _closure2_slot12;
                    var0 = var3.get;
                    var0 = var0.bind(var3)();
                    var2 = var2 - var0;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var2 = _closure2_slot18;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var0 = {};
                var0.containerHeight = var17;
                var0.scaledHeightDv = var8;
                var0.yPosition = var9;
                var3.__closure = var0;
                var0 = 11475249153313.0;
                var3.__workletHash = var0;
                var0 = _closure1_slot15;
                var3.__initData = var0;
                var0 = function arg0, arg1() {
                    _fun63057: for (var _fun63057_ip = 0;;) switch (_fun63057_ip) {
                        case 0:
                            var3 = arg0;
                            var7 = arg1;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var1);
                            var4 = var5.cheapWorkletArrayShallowEqual;
                            var6 = null;
                            var8 = var6 != var7;
                            var1 = undefined;
                            if (!var8) {
                                _fun63057_ip = 51;
                                continue _fun63057
                            }
                        case 48:
                            var1 = var7;
                        case 51:
                            var1 = var4.bind(var5)(var3, var1);
                            if (var1) {
                                _fun63057_ip = 171;
                                continue _fun63057
                            }
                        case 60:
                            var9 = _closure1_slot2;
                            var1 = 2;
                            var1 = var9.bind(var0)(var3, var1);
                            var4 = 0;
                            var3 = var1[var4];
                            var8 = 1;
                            var5 = var1[var8];
                            var1 = var7;
                            if (!(var6 == var1)) {
                                _fun63057_ip = 103;
                                continue _fun63057
                            }
                        case 93:
                            var1 = [0, 0];
                        case 103:
                            var1 = var9.bind(var0)(var1, var8);
                            var1 = var1[var4];
                            if (!(var6 != var7)) {
                                _fun63057_ip = 171;
                                continue _fun63057
                            }
                        case 117:
                            if (!(var3 !== var1)) {
                                _fun63057_ip = 171;
                                continue _fun63057
                            }
                        case 121:
                            var2 = _closure1_slot22;
                            var1 = var3 / var1;
                            var1 = var5 * var1;
                            var3 = var2.bind(var0)(var1, var4, var3);
                            var4 = _closure2_slot18;
                            var2 = var4.set;
                            var2 = var2.bind(var4)(var3);
                            var2 = _closure2_slot17;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3);
                        case 171:
                            return var0;
                    }
                };
                var17 = {};
                var29 = var23[var29];
                var29 = var22.bind(var5)(var29);
                var29 = var29.cheapWorkletArrayShallowEqual;
                var17.cheapWorkletArrayShallowEqual = var29;
                var17.clamp = var25;
                var17.yPosition = var9;
                var17.yDestination = var18;
                var0.__closure = var17;
                var17 = 7685377389843.0;
                var0.__workletHash = var17;
                var17 = _closure1_slot16;
                var0.__initData = var17;
                var0 = var14.bind(var16)(var3, var0);
                var14 = 7;
                var0 = var23[var14];
                var0 = var22.bind(var5)(var0);
                var3 = var0.Gesture;
                var0 = var3.Pan;
                var16 = var0.bind(var3)();
                var3 = var16.onUpdate;
                var0 = function arg0() {
                    _fun63058: for (var _fun63058_ip = 0;;) switch (_fun63058_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = _closure2_slot16;
                            var3 = var4.set;
                            var5 = _closure2_slot15;
                            var2 = var5.get;
                            var5 = var2.bind(var5)();
                            var2 = var1.translationX;
                            var2 = var5 + var2;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure2_slot18;
                            var2 = var3.set;
                            var5 = _closure2_slot17;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var1 = var1.translationY;
                            var1 = var4 + var1;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure2_slot19;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun63058_ip = 165;
                                continue _fun63058
                            }
                        case 96:
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun63058_ip = 149;
                                continue _fun63058
                            }
                        case 106:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 3;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot5;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
                        case 149:
                            var2 = _closure2_slot19;
                            var1 = var2.set;
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                        case 165:
                            var0 = undefined;
                            return var0;
                    }
                };
                var17 = {};
                var17.xPosition = var12;
                var17.xDestination = var20;
                var17.yPosition = var9;
                var17.yDestination = var18;
                var17.trackedVoiceControlsToggleMovedForGestureSv = var28;
                var17.onMoved = var27;
                var27 = var23[var13];
                var27 = var22.bind(var5)(var27);
                var27 = var27.runOnJS;
                var17.runOnJS = var27;
                var0.__closure = var17;
                var17 = 14964390506971.0;
                var0.__workletHash = var17;
                var17 = _closure1_slot18;
                var0.__initData = var17;
                var16 = var3.bind(var16)(var0);
                var3 = var16.onEnd;
                var0 = function arg0() {
                    _fun63059: for (var _fun63059_ip = 0;;) switch (_fun63059_ip) {
                        case 0:
                            var8 = arg0;
                            var2 = _closure2_slot16;
                            var0 = var2.get;
                            var2 = var0.bind(var2)();
                            var0 = var8.velocityX;
                            var10 = 0.0875;
                            var0 = var10 * var0;
                            var3 = var2 + var0;
                            var4 = _closure2_slot13;
                            var0 = var4.get;
                            var2 = var0.bind(var4)();
                            var11 = _closure2_slot11;
                            var0 = var11.get;
                            var0 = var0.bind(var11)();
                            var5 = var2 - var0;
                            var12 = _closure1_slot22;
                            var0 = undefined;
                            var2 = 0;
                            var6 = var12.bind(var0)(var3, var2, var5);
                            var7 = _closure2_slot18;
                            var3 = var7.get;
                            var7 = var3.bind(var7)();
                            var3 = var8.velocityY;
                            var3 = var10 * var3;
                            var3 = var7 + var3;
                            var10 = _closure2_slot14;
                            var7 = var10.get;
                            var14 = var7.bind(var10)();
                            var13 = _closure2_slot12;
                            var7 = var13.get;
                            var7 = var7.bind(var13)();
                            var7 = var14 - var7;
                            var12 = var12.bind(var0)(var3, var2, var7);
                            var3 = var10.get;
                            var10 = var3.bind(var10)();
                            var3 = var13.get;
                            var3 = var3.bind(var13)();
                            var3 = var10 - var3;
                            var10 = var3 - var12;
                            var3 = var4.get;
                            var4 = var3.bind(var4)();
                            var3 = var11.get;
                            var3 = var3.bind(var11)();
                            var3 = var4 - var3;
                            var4 = var3 - var6;
                            var3 = global;
                            var11 = var3.Math;
                            var3 = var11.min;
                            var20 = var11;
                            var19 = var12;
                            var18 = var10;
                            var17 = var6;
                            var16 = var4;
                            var13 = var20[var3](var19, var18, var17, var16, var15);
                            if (!(var12 !== var13)) {
                                _fun63059_ip = 361;
                                continue _fun63059
                            }
                        case 243:
                            if (!(var10 !== var13)) {
                                _fun63059_ip = 328;
                                continue _fun63059
                            }
                        case 247:
                            if (!(var6 !== var13)) {
                                _fun63059_ip = 297;
                                continue _fun63059
                            }
                        case 251:
                            var11 = var6;
                            var3 = var12;
                            if (!(var4 === var13)) {
                                _fun63059_ip = 390;
                                continue _fun63059
                            }
                        case 264:
                            var13 = _closure2_slot6;
                            var11 = var5;
                            var3 = var12;
                            if (!var13) {
                                _fun63059_ip = 390;
                                continue _fun63059
                            }
                        case 277:
                            var14 = var12 < var10;
                            var13 = 0;
                            if (var14) {
                                _fun63059_ip = 289;
                                continue _fun63059
                            }
                        case 286:
                            var13 = var7;
                        case 289:
                            var3 = var13;
                            var11 = var5;
                            _fun63059_ip = 390;
                            continue _fun63059;
                        case 297:
                            var13 = _closure2_slot6;
                            var11 = 0;
                            var3 = var12;
                            if (!var13) {
                                _fun63059_ip = 390;
                                continue _fun63059
                            }
                        case 309:
                            var12 = var12 < var10;
                            var10 = 0;
                            if (var12) {
                                _fun63059_ip = 321;
                                continue _fun63059
                            }
                        case 318:
                            var10 = var7;
                        case 321:
                            var3 = var10;
                            var11 = 0;
                            _fun63059_ip = 390;
                            continue _fun63059;
                        case 328:
                            var10 = _closure2_slot6;
                            var11 = var6;
                            var3 = var7;
                            if (!var10) {
                                _fun63059_ip = 390;
                                continue _fun63059
                            }
                        case 341:
                            var12 = var6 < var4;
                            var10 = 0;
                            if (var12) {
                                _fun63059_ip = 353;
                                continue _fun63059
                            }
                        case 350:
                            var10 = var5;
                        case 353:
                            var11 = var10;
                            var3 = var7;
                            _fun63059_ip = 390;
                            continue _fun63059;
                        case 361:
                            var7 = _closure2_slot6;
                            var11 = var6;
                            var3 = 0;
                            if (!var7) {
                                _fun63059_ip = 390;
                                continue _fun63059
                            }
                        case 373:
                            var6 = var6 < var4;
                            var4 = 0;
                            if (var6) {
                                _fun63059_ip = 385;
                                continue _fun63059
                            }
                        case 382:
                            var4 = var5;
                        case 385:
                            var11 = var4;
                            var3 = 0;
                        case 390:
                            var12 = _closure2_slot16;
                            var5 = var12.set;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var2 = 8;
                            var4 = var7[var2];
                            var14 = var6.bind(var0)(var4);
                            var13 = var14.withSpring;
                            var4 = {};
                            var10 = _closure1_slot5;
                            var19 = var4;
                            var18 = var10;
                            var9 = copyDataProperties(var19, var18);
                            var15 = var8.velocityX;
                            var9 = 'velocity';
                            var4[var9] = var15;
                            var4 = var13.bind(var14)(var11, var4);
                            var4 = var5.bind(var12)(var4);
                            var5 = _closure2_slot15;
                            var4 = var5.set;
                            var4 = var4.bind(var5)(var11);
                            var5 = _closure2_slot18;
                            var4 = var5.set;
                            var2 = var7[var2];
                            var7 = var6.bind(var0)(var2);
                            var6 = var7.withSpring;
                            var2 = {};
                            var19 = var2;
                            var18 = var10;
                            var10 = copyDataProperties(var19, var18);
                            var8 = var8.velocityY;
                            var2[var9] = var8;
                            var2 = var6.bind(var7)(var3, var2);
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure2_slot17;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3);
                            return var0;
                    }
                };
                var17 = {};
                var17.xPosition = var12;
                var17.containerWidthDv = var26;
                var17.scaledWidthDv = var11;
                var17.clamp = var25;
                var17.yPosition = var9;
                var17.containerHeightDv = var24;
                var17.scaledHeightDv = var8;
                var17.snapToCorners = var21;
                var21 = 8;
                var21 = var23[var21];
                var21 = var22.bind(var5)(var21);
                var21 = var21.withSpring;
                var17.withSpring = var21;
                var21 = _closure1_slot5;
                var17.spring = var21;
                var17.xDestination = var20;
                var17.yDestination = var18;
                var0.__closure = var17;
                var17 = 690760681755.0;
                var0.__workletHash = var17;
                var17 = _closure1_slot17;
                var0.__initData = var17;
                var17 = var3.bind(var16)(var0);
                var0 = null;
                if (!(var0 != var15)) {
                    _fun63045_ip = 1379;
                    continue _fun63045
                }
            case 1368:
                var3 = var17.activeOffsetX;
                var3 = var3.bind(var17)(var15);
            case 1379:
                if (!(var0 != var2)) {
                    _fun63045_ip = 1394;
                    continue _fun63045
                }
            case 1383:
                var0 = var17.activeOffsetY;
                var0 = var0.bind(var17)(var2);
            case 1394:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = var2[var14];
                var0 = var3.bind(var5)(var0);
                var15 = var0.Gesture;
                var0 = var15.Tap;
                var16 = var0.bind(var15)();
                var15 = var16.onStart;
                var0 = function() {
                    _fun63060: for (var _fun63060_ip = 0;;) switch (_fun63060_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun63060_ip = 56;
                                continue _fun63060
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 3;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot4;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 56:
                            var0 = undefined;
                            return var0;
                    }
                };
                var18 = {};
                var18.onPress = var19;
                var19 = var2[var13];
                var19 = var3.bind(var5)(var19);
                var19 = var19.runOnJS;
                var18.runOnJS = var19;
                var0.__closure = var18;
                var18 = 4692146362189.0;
                var0.__workletHash = var18;
                var18 = _closure1_slot19;
                var0.__initData = var18;
                var16 = var15.bind(var16)(var0);
                var0 = {};
                var14 = var2[var14];
                var14 = var3.bind(var5)(var14);
                var15 = var14.Gesture;
                var14 = var15.Race;
                var14 = var14.bind(var15)(var17, var16);
                var0.gesture = var14;
                var2 = var2[var13];
                var3 = var3.bind(var5)(var2);
                var2 = var3.useAnimatedStyle;
                var1 = function() {
                    var0 = {};
                    var2 = {};
                    var4 = _closure2_slot16;
                    var1 = var4.get;
                    var4 = var1.bind(var4)();
                    var5 = _closure2_slot11;
                    var1 = var5.get;
                    var5 = var1.bind(var5)();
                    var6 = _closure2_slot9;
                    var1 = var6.get;
                    var1 = var1.bind(var6)();
                    var1 = var5 - var1;
                    var6 = 2;
                    var1 = var1 / var6;
                    var1 = var4 + var1;
                    var2.translateX = var1;
                    var1 = new Array(3);
                    var1[0] = var2;
                    var2 = {};
                    var5 = _closure2_slot18;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var7 = _closure2_slot12;
                    var4 = var7.get;
                    var7 = var4.bind(var7)();
                    var8 = _closure2_slot10;
                    var4 = var8.get;
                    var4 = var4.bind(var8)();
                    var4 = var7 - var4;
                    var4 = var4 / var6;
                    var4 = var5 + var4;
                    var2.translateY = var4;
                    var1[1] = var2;
                    var2 = {};
                    var4 = _closure2_slot8;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2.scale = var3;
                    var1[2] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var5 = {};
                var5.xPosition = var12;
                var5.scaledWidthDv = var11;
                var5.widthDv = var10;
                var5.yPosition = var9;
                var5.scaledHeightDv = var8;
                var5.heightDv = var7;
                var5.pipScale = var6;
                var1.__closure = var5;
                var5 = 12534173786665.0;
                var1.__workletHash = var5;
                var4 = _closure1_slot20;
                var1.__initData = var4;
                var1 = var2.bind(var3)(var1);
                var0.draggableGridItemStyles = var1;
                return var0;
        }
    };
    var2.useDraggablePip = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 7904, 7909, 3720, 4097, 4886, 5306, 4963, 4081, 2]);