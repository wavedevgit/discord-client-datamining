// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var3);
    var3 = var4.Keyboard;
    var4 = var4.Platform;
    var _closure1_slot2 = var4;
    var4 = {
        'initialPosition': 0,
        'initialKeyboardState': null,
        'isScrollablePositionLocked': false
    };
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.KEYBOARD_STATE;
    var5 = var5.UNDETERMINED;
    var4.initialKeyboardState = var5;
    var _closure1_slot3 = var4;
    var3 = var3.dismiss;
    var _closure1_slot4 = var3;
    var4 = {};
    var3 = 'function pnpm_useGestureEventsHandlersDefaultTsx1(context){Object.keys(context).map(function(key){context[key]=undefined;});}';
    var4.code = var3;
    var3 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var1 = global;
        var2 = var1.Object;
        var1 = var2.keys;
        var2 = var1.bind(var2)(var3);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = arg0;
            var2[var1] = var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var5 = {};
    var3.__closure = var5;
    var5 = 16627033127293.0;
    var3.__workletHash = var5;
    var3.__initData = var4;
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 'function handleOnStart_Pnpm_useGestureEventsHandlersDefaultTsx2(__,_){const{stopAnimation,animatedKeyboardState,enableBlurKeyboardOnGesture,KEYBOARD_STATE,runOnJS,dismissKeyboard,context,animatedPosition,animatedScrollableContentOffsetY}=this.__closure;stopAnimation();let initialKeyboardState=animatedKeyboardState.value;if(enableBlurKeyboardOnGesture&&initialKeyboardState===KEYBOARD_STATE.SHOWN){initialKeyboardState=KEYBOARD_STATE.HIDDEN;runOnJS(dismissKeyboard)();}context.value={...context.value,initialPosition:animatedPosition.value,initialKeyboardState:animatedKeyboardState.value};if(animatedScrollableContentOffsetY.value>0){context.value={...context.value,isScrollablePositionLocked:true};}}';
    var3.code = var4;
    var _closure1_slot6 = var3;
    var3 = {};
    var4 = 'function handleOnChange_Pnpm_useGestureEventsHandlersDefaultTsx3(source,{translationY:translationY}){const{animatedHighestSnapPoint,isInTemporaryPosition,context,KEYBOARD_STATE,enablePanDownToClose,animatedContainerHeight,animatedSnapPoints,GESTURE_SOURCE,isScrollableRefreshable,animatedPosition,animatedScrollableContentOffsetY,clamp,enableOverDrag,animatedScrollableType,SCROLLABLE_TYPE,overDragResistanceFactor}=this.__closure;let highestSnapPoint=animatedHighestSnapPoint.value;if(isInTemporaryPosition.value&&context.value.initialKeyboardState===KEYBOARD_STATE.SHOWN){highestSnapPoint=context.value.initialPosition;}if(isInTemporaryPosition.value&&context.value.initialPosition<highestSnapPoint){highestSnapPoint=context.value.initialPosition;}const lowestSnapPoint=enablePanDownToClose?animatedContainerHeight.value:animatedSnapPoints.value[0];if(source===GESTURE_SOURCE.CONTENT&&isScrollableRefreshable.value&&animatedPosition.value===highestSnapPoint){return;}const negativeScrollableContentOffset=context.value.initialPosition===highestSnapPoint&&source===GESTURE_SOURCE.CONTENT||!context.value.isScrollablePositionLocked?animatedScrollableContentOffsetY.value*-1:0;const draggedPosition=context.value.initialPosition+translationY;const accumulatedDraggedPosition=draggedPosition+negativeScrollableContentOffset;const clampedPosition=clamp(accumulatedDraggedPosition,highestSnapPoint,lowestSnapPoint);if(context.value.isScrollablePositionLocked&&source===GESTURE_SOURCE.CONTENT&&animatedPosition.value===highestSnapPoint){context.value={...context.value,isScrollablePositionLocked:false};}if(enableOverDrag){if((source===GESTURE_SOURCE.HANDLE||animatedScrollableType.value===SCROLLABLE_TYPE.VIEW)&&draggedPosition<highestSnapPoint){const resistedPosition=highestSnapPoint-Math.sqrt(1+(highestSnapPoint-draggedPosition))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}if(source===GESTURE_SOURCE.HANDLE&&draggedPosition>lowestSnapPoint){const resistedPosition=lowestSnapPoint+Math.sqrt(1+(draggedPosition-lowestSnapPoint))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}if(source===GESTURE_SOURCE.CONTENT&&draggedPosition+negativeScrollableContentOffset>lowestSnapPoint){const resistedPosition=lowestSnapPoint+Math.sqrt(1+(draggedPosition+negativeScrollableContentOffset-lowestSnapPoint))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}}animatedPosition.value=clampedPosition;}';
    var3.code = var4;
    var _closure1_slot7 = var3;
    var3 = {};
    var4 = "function handleOnEnd_Pnpm_useGestureEventsHandlersDefaultTsx4(source,{translationY:translationY,absoluteY:absoluteY,velocityY:velocityY}){const{animatedHighestSnapPoint,animatedPosition,GESTURE_SOURCE,isScrollableRefreshable,isInTemporaryPosition,context,animateToPosition,ANIMATION_SOURCE,animatedScrollableType,SCROLLABLE_TYPE,KEYBOARD_STATE,Platform,WINDOW_HEIGHT,animatedKeyboardHeight,runOnJS,dismissKeyboard,animatedSnapPoints,enablePanDownToClose,animatedClosedPosition,snapPoint,animatedScrollableContentOffsetY}=this.__closure;const highestSnapPoint=animatedHighestSnapPoint.value;const isSheetAtHighestSnapPoint=animatedPosition.value===highestSnapPoint;if(source===GESTURE_SOURCE.CONTENT&&isScrollableRefreshable.value&&isSheetAtHighestSnapPoint){return;}if(isInTemporaryPosition.value&&context.value.initialPosition>=animatedPosition.value){if(context.value.initialPosition>animatedPosition.value){animateToPosition(context.value.initialPosition,ANIMATION_SOURCE.GESTURE,velocityY/2);}return;}const isScrollable=animatedScrollableType.value!==SCROLLABLE_TYPE.UNDETERMINED&&animatedScrollableType.value!==SCROLLABLE_TYPE.VIEW;if(context.value.initialKeyboardState===KEYBOARD_STATE.SHOWN&&animatedPosition.value>context.value.initialPosition){if(!(Platform.OS==='ios'&&isScrollable&&absoluteY>WINDOW_HEIGHT-animatedKeyboardHeight.value)){runOnJS(dismissKeyboard)();}}if(isInTemporaryPosition.value){isInTemporaryPosition.value=false;}const snapPoints=animatedSnapPoints.value.slice();if(enablePanDownToClose){snapPoints.unshift(animatedClosedPosition.value);}const destinationPoint=snapPoint(translationY+context.value.initialPosition,velocityY,snapPoints);if(destinationPoint===animatedPosition.value){return;}const wasGestureHandledByScrollView=source===GESTURE_SOURCE.CONTENT&&animatedScrollableContentOffsetY.value>0;if(wasGestureHandledByScrollView&&isSheetAtHighestSnapPoint){return;}animateToPosition(destinationPoint,ANIMATION_SOURCE.GESTURE,velocityY/2);}";
    var3.code = var4;
    var _closure1_slot8 = var3;
    var3 = {};
    var4 = 'function handleOnFinalize_Pnpm_useGestureEventsHandlersDefaultTsx5(){const{resetContext,context}=this.__closure;resetContext(context);}';
    var3.code = var4;
    var _closure1_slot9 = var3;
    var1 = function() {
        var4 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 2;
        var3 = var6[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var3 = var5.useBottomSheetInternal;
        var3 = var3.bind(var5)();
        var15 = var3.animatedPosition;
        var _closure2_slot0 = var15;
        var13 = var3.animatedSnapPoints;
        var _closure2_slot1 = var13;
        var25 = var3.animatedKeyboardState;
        var _closure2_slot2 = var25;
        var16 = var3.animatedKeyboardHeight;
        var _closure2_slot3 = var16;
        var22 = var3.animatedContainerHeight;
        var _closure2_slot4 = var22;
        var14 = var3.animatedScrollableType;
        var _closure2_slot5 = var14;
        var17 = var3.animatedHighestSnapPoint;
        var _closure2_slot6 = var17;
        var18 = var3.animatedClosedPosition;
        var _closure2_slot7 = var18;
        var12 = var3.animatedScrollableContentOffsetY;
        var _closure2_slot8 = var12;
        var24 = var3.enableOverDrag;
        var _closure2_slot9 = var24;
        var21 = var3.enablePanDownToClose;
        var _closure2_slot10 = var21;
        var23 = var3.overDragResistanceFactor;
        var _closure2_slot11 = var23;
        var20 = var3.isInTemporaryPosition;
        var _closure2_slot12 = var20;
        var19 = var3.isScrollableRefreshable;
        var _closure2_slot13 = var19;
        var26 = var3.enableBlurKeyboardOnGesture;
        var _closure2_slot14 = var26;
        var11 = var3.animateToPosition;
        var _closure2_slot15 = var11;
        var27 = var3.stopAnimation;
        var _closure2_slot16 = var27;
        var3 = 3;
        var5 = var6[var3];
        var7 = var4.bind(var2)(var5);
        var5 = var7.useSharedValue;
        var8 = global;
        var10 = var8.Object;
        var9 = var10.assign;
        var8 = _closure1_slot3;
        var0 = {};
        var0 = var9.bind(var10)(var0, var8);
        var5 = var5.bind(var7)(var0);
        var _closure2_slot17 = var5;
        var0 = {};
        var7 = var6[var3];
        var10 = var4.bind(var2)(var7);
        var9 = var10.useWorkletCallback;
        var7 = function() { // Environment: var1
            var0 = function arg0, arg1() {
                _fun45247: for (var _fun45247_ip = 0;;) switch (_fun45247_ip) {
                    case 0:
                        var1 = _closure2_slot16;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        var1 = _closure2_slot2;
                        var4 = var1.value;
                        var1 = _closure2_slot14;
                        if (!var1) {
                            _fun45247_ip = 68;
                            continue _fun45247
                        }
                    case 29:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 1;
                        var3 = var6[var3];
                        var3 = var5.bind(var0)(var3);
                        var3 = var3.KEYBOARD_STATE;
                        var3 = var3.SHOWN;
                        var1 = var4 === var3;
                    case 68:
                        if (!var1) {
                            _fun45247_ip = 136;
                            continue _fun45247
                        }
                    case 71:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var3 = 1;
                        var3 = var5[var3];
                        var3 = var4.bind(var0)(var3);
                        var3 = var3.KEYBOARD_STATE;
                        var3 = var3.HIDDEN;
                        var3 = 3;
                        var3 = var5[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.runOnJS;
                        var1 = _closure1_slot4;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var0)();
                    case 136:
                        var4 = _closure2_slot17;
                        var1 = global;
                        var8 = var1.Object;
                        var7 = var8.assign;
                        var6 = var4.value;
                        var5 = {};
                        var3 = _closure2_slot0;
                        var3 = var3.value;
                        var5.initialPosition = var3;
                        var3 = _closure2_slot2;
                        var3 = var3.value;
                        var5.initialKeyboardState = var3;
                        var3 = {};
                        var3 = var7.bind(var8)(var3, var6, var5);
                        var4.value = var3;
                        var3 = _closure2_slot8;
                        var4 = var3.value;
                        var3 = 0;
                        if (!(var4 > var3)) {
                            _fun45247_ip = 262;
                            continue _fun45247
                        }
                    case 218:
                        var2 = _closure2_slot17;
                        var6 = var1.Object;
                        var5 = var6.assign;
                        var4 = var2.value;
                        var3 = {};
                        var1 = true;
                        var3.isScrollablePositionLocked = var1;
                        var1 = {};
                        var1 = var5.bind(var6)(var1, var4, var3);
                        var2.value = var1;
                    case 262:
                        return var0;
                }
            };
            var2 = {};
            var1 = _closure2_slot16;
            var2.stopAnimation = var1;
            var1 = _closure2_slot2;
            var2.animatedKeyboardState = var1;
            var1 = _closure2_slot14;
            var2.enableBlurKeyboardOnGesture = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 1;
            var4 = var7[var4];
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            var4 = var4.KEYBOARD_STATE;
            var2.KEYBOARD_STATE = var4;
            var4 = 3;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.runOnJS;
            var2.runOnJS = var4;
            var4 = _closure1_slot4;
            var2.dismissKeyboard = var4;
            var4 = _closure2_slot17;
            var2.context = var4;
            var4 = _closure2_slot0;
            var2.animatedPosition = var4;
            var3 = _closure2_slot8;
            var2.animatedScrollableContentOffsetY = var3;
            var0.__closure = var2;
            var2 = 9400766587341.0;
            var0.__workletHash = var2;
            var1 = _closure1_slot6;
            var0.__initData = var1;
            return var0;
        };
        var8 = var7.bind(var2)();
        var7 = new Array(5);
        var7[0] = var27;
        var7[1] = var26;
        var7[2] = var15;
        var7[3] = var25;
        var7[4] = var12;
        var7 = var9.bind(var10)(var8, var7);
        var0.handleOnStart = var7;
        var7 = var6[var3];
        var10 = var4.bind(var2)(var7);
        var9 = var10.useWorkletCallback;
        var7 = function() { // Environment: var1
            var0 = function arg0, arg1() {
                _fun45249: for (var _fun45249_ip = 0;;) switch (_fun45249_ip) {
                    case 0:
                        var9 = arg0;
                        var0 = arg1;
                        var8 = var0.translationY;
                        var0 = _closure2_slot6;
                        var2 = var0.value;
                        var0 = _closure2_slot12;
                        var0 = var0.value;
                        if (!var0) {
                            _fun45249_ip = 92;
                            continue _fun45249
                        }
                    case 36:
                        var3 = _closure2_slot17;
                        var3 = var3.value;
                        var4 = var3.initialKeyboardState;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var3 = 1;
                        var5 = var5[var3];
                        var3 = undefined;
                        var3 = var6.bind(var3)(var5);
                        var3 = var3.KEYBOARD_STATE;
                        var3 = var3.SHOWN;
                        var0 = var4 === var3;
                    case 92:
                        if (!var0) {
                            _fun45249_ip = 110;
                            continue _fun45249
                        }
                    case 95:
                        var0 = _closure2_slot17;
                        var0 = var0.value;
                        var2 = var0.initialPosition;
                    case 110:
                        var0 = _closure2_slot12;
                        var0 = var0.value;
                        if (!var0) {
                            _fun45249_ip = 141;
                            continue _fun45249
                        }
                    case 122:
                        var3 = _closure2_slot17;
                        var3 = var3.value;
                        var3 = var3.initialPosition;
                        var0 = var3 < var2;
                    case 141:
                        if (!var0) {
                            _fun45249_ip = 159;
                            continue _fun45249
                        }
                    case 144:
                        var0 = _closure2_slot17;
                        var0 = var0.value;
                        var2 = var0.initialPosition;
                    case 159:
                        var0 = _closure2_slot10;
                        if (var0) {
                            _fun45249_ip = 183;
                            continue _fun45249
                        }
                    case 166:
                        var0 = _closure2_slot1;
                        var3 = var0.value;
                        var0 = 0;
                        var4 = var3[var0];
                        _fun45249_ip = 192;
                        continue _fun45249;
                    case 183:
                        var0 = _closure2_slot4;
                        var4 = var0.value;
                    case 192:
                        var3 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var5 = 1;
                        var0 = var0[var5];
                        var6 = undefined;
                        var0 = var3.bind(var6)(var0);
                        var0 = var0.GESTURE_SOURCE;
                        var0 = var0.CONTENT;
                        if (!(var9 === var0)) {
                            _fun45249_ip = 261;
                            continue _fun45249
                        }
                    case 233:
                        var0 = _closure2_slot13;
                        var0 = var0.value;
                        if (!var0) {
                            _fun45249_ip = 261;
                            continue _fun45249
                        }
                    case 245:
                        var0 = _closure2_slot0;
                        var0 = var0.value;
                        if (!(var0 !== var2)) {
                            _fun45249_ip = 700;
                            continue _fun45249
                        }
                    case 261:
                        var0 = _closure2_slot17;
                        var0 = var0.value;
                        var0 = var0.initialPosition;
                        if (!(var0 === var2)) {
                            _fun45249_ip = 313;
                            continue _fun45249
                        }
                    case 280:
                        var3 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var0 = var0[var5];
                        var0 = var3.bind(var6)(var0);
                        var0 = var0.GESTURE_SOURCE;
                        var0 = var0.CONTENT;
                        if (!(var9 !== var0)) {
                            _fun45249_ip = 333;
                            continue _fun45249
                        }
                    case 313:
                        var0 = _closure2_slot17;
                        var0 = var0.value;
                        var0 = var0.isScrollablePositionLocked;
                        var3 = 0;
                        if (var0) {
                            _fun45249_ip = 352;
                            continue _fun45249
                        }
                    case 333:
                        var0 = _closure2_slot8;
                        var10 = var0.value;
                        var0 = -1;
                        var3 = var0 * var10;
                    case 352:
                        var10 = _closure2_slot17;
                        var0 = var10.value;
                        var0 = var0.initialPosition;
                        var0 = var0 + var8;
                        var12 = var0 + var3;
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var8 = 4;
                        var8 = var13[var8];
                        var11 = var11.bind(var6)(var8);
                        var8 = var11.clamp;
                        var8 = var8.bind(var11)(var12, var2, var4);
                        var10 = var10.value;
                        var10 = var10.isScrollablePositionLocked;
                        if (!var10) {
                            _fun45249_ip = 455;
                            continue _fun45249
                        }
                    case 422:
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var11 = var11[var5];
                        var11 = var12.bind(var6)(var11);
                        var11 = var11.GESTURE_SOURCE;
                        var11 = var11.CONTENT;
                        var10 = var9 === var11;
                    case 455:
                        if (!var10) {
                            _fun45249_ip = 471;
                            continue _fun45249
                        }
                    case 458:
                        var11 = _closure2_slot0;
                        var11 = var11.value;
                        var10 = var11 === var2;
                    case 471:
                        if (!var10) {
                            _fun45249_ip = 520;
                            continue _fun45249
                        }
                    case 474:
                        var11 = _closure2_slot17;
                        var10 = global;
                        var15 = var10.Object;
                        var14 = var15.assign;
                        var13 = var11.value;
                        var12 = {};
                        var10 = false;
                        var12.isScrollablePositionLocked = var10;
                        var10 = {};
                        var10 = var14.bind(var15)(var10, var13, var12);
                        var11.value = var10;
                    case 520:
                        var10 = _closure2_slot9;
                        if (!var10) {
                            _fun45249_ip = 690;
                            continue _fun45249
                        }
                    case 530:
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var5];
                        var10 = var11.bind(var6)(var10);
                        var10 = var10.GESTURE_SOURCE;
                        var10 = var10.HANDLE;
                        if (!(var9 !== var10)) {
                            _fun45249_ip = 605;
                            continue _fun45249
                        }
                    case 563:
                        var10 = _closure2_slot5;
                        var11 = var10.value;
                        var12 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var5];
                        var10 = var12.bind(var6)(var10);
                        var10 = var10.SCROLLABLE_TYPE;
                        var10 = var10.VIEW;
                        if (!(var11 === var10)) {
                            _fun45249_ip = 612;
                            continue _fun45249
                        }
                    case 605:
                        if (!(!(var0 < var2))) {
                            _fun45249_ip = 812;
                            continue _fun45249
                        }
                    case 612:
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var5];
                        var10 = var11.bind(var6)(var10);
                        var10 = var10.GESTURE_SOURCE;
                        var10 = var10.HANDLE;
                        if (!(var9 === var10)) {
                            _fun45249_ip = 649;
                            continue _fun45249
                        }
                    case 645:
                        if (!(!(var0 > var4))) {
                            _fun45249_ip = 759;
                            continue _fun45249
                        }
                    case 649:
                        var10 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var7 = var7[var5];
                        var7 = var10.bind(var6)(var7);
                        var7 = var7.GESTURE_SOURCE;
                        var7 = var7.CONTENT;
                        if (!(var9 === var7)) {
                            _fun45249_ip = 690;
                            continue _fun45249
                        }
                    case 682:
                        var7 = var0 + var3;
                        if (!(!(var7 > var4))) {
                            _fun45249_ip = 702;
                            continue _fun45249
                        }
                    case 690:
                        var7 = _closure2_slot0;
                        var7.value = var8;
                    case 700:
                        return var6;
                    case 702:
                        var6 = global;
                        var7 = var6.Math;
                        var6 = var7.sqrt;
                        var3 = var0 + var3;
                        var3 = var3 - var4;
                        var3 = var3 + var5;
                        var6 = var6.bind(var7)(var3);
                        var3 = _closure2_slot11;
                        var3 = var6 * var3;
                        var3 = var4 + var3;
                        var6 = _closure2_slot0;
                        var6.value = var3;
                        var3 = undefined;
                        return var3;
                    case 759:
                        var3 = global;
                        var7 = var3.Math;
                        var6 = var7.sqrt;
                        var3 = var0 - var4;
                        var3 = var3 + var5;
                        var6 = var6.bind(var7)(var3);
                        var3 = _closure2_slot11;
                        var3 = var6 * var3;
                        var3 = var4 + var3;
                        var4 = _closure2_slot0;
                        var4.value = var3;
                        var3 = undefined;
                        return var3;
                    case 812:
                        var3 = global;
                        var4 = var3.Math;
                        var3 = var4.sqrt;
                        var0 = var2 - var0;
                        var0 = var0 + var5;
                        var3 = var3.bind(var4)(var0);
                        var0 = _closure2_slot11;
                        var0 = var3 * var0;
                        var0 = var2 - var0;
                        var1 = _closure2_slot0;
                        var1.value = var0;
                        var0 = undefined;
                        return var0;
                }
            };
            var2 = {};
            var1 = _closure2_slot6;
            var2.animatedHighestSnapPoint = var1;
            var1 = _closure2_slot12;
            var2.isInTemporaryPosition = var1;
            var1 = _closure2_slot17;
            var2.context = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 1;
            var8 = var7[var4];
            var5 = undefined;
            var8 = var6.bind(var5)(var8);
            var8 = var8.KEYBOARD_STATE;
            var2.KEYBOARD_STATE = var8;
            var8 = _closure2_slot10;
            var2.enablePanDownToClose = var8;
            var8 = _closure2_slot4;
            var2.animatedContainerHeight = var8;
            var8 = _closure2_slot1;
            var2.animatedSnapPoints = var8;
            var8 = var7[var4];
            var8 = var6.bind(var5)(var8);
            var8 = var8.GESTURE_SOURCE;
            var2.GESTURE_SOURCE = var8;
            var8 = _closure2_slot13;
            var2.isScrollableRefreshable = var8;
            var8 = _closure2_slot0;
            var2.animatedPosition = var8;
            var8 = _closure2_slot8;
            var2.animatedScrollableContentOffsetY = var8;
            var8 = 4;
            var8 = var7[var8];
            var8 = var6.bind(var5)(var8);
            var8 = var8.clamp;
            var2.clamp = var8;
            var8 = _closure2_slot9;
            var2.enableOverDrag = var8;
            var8 = _closure2_slot5;
            var2.animatedScrollableType = var8;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.SCROLLABLE_TYPE;
            var2.SCROLLABLE_TYPE = var4;
            var3 = _closure2_slot11;
            var2.overDragResistanceFactor = var3;
            var0.__closure = var2;
            var2 = 6221237616078.0;
            var0.__workletHash = var2;
            var1 = _closure1_slot7;
            var0.__initData = var1;
            return var0;
        };
        var8 = var7.bind(var2)();
        var7 = new Array(11);
        var7[0] = var24;
        var7[1] = var21;
        var7[2] = var23;
        var7[3] = var20;
        var7[4] = var19;
        var7[5] = var17;
        var7[6] = var22;
        var7[7] = var13;
        var7[8] = var15;
        var7[9] = var14;
        var7[10] = var12;
        var7 = var9.bind(var10)(var8, var7);
        var0.handleOnChange = var7;
        var7 = var6[var3];
        var10 = var4.bind(var2)(var7);
        var9 = var10.useWorkletCallback;
        var7 = function() { // Environment: var1
            var0 = function arg0, arg1() {
                _fun45251: for (var _fun45251_ip = 0;;) switch (_fun45251_ip) {
                    case 0:
                        var7 = arg0;
                        var0 = arg1;
                        var11 = var0.translationY;
                        var1 = var0.absoluteY;
                        var5 = var0.velocityY;
                        var0 = _closure2_slot6;
                        var1 = var0.value;
                        var0 = _closure2_slot0;
                        var0 = var0.value;
                        var4 = var0 === var1;
                        var8 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var6 = 1;
                        var3 = var0[var6];
                        var0 = undefined;
                        var3 = var8.bind(var0)(var3);
                        var3 = var3.GESTURE_SOURCE;
                        var3 = var3.CONTENT;
                        if (!(var7 === var3)) {
                            _fun45251_ip = 108;
                            continue _fun45251
                        }
                    case 90:
                        var3 = _closure2_slot13;
                        var3 = var3.value;
                        if (!var3) {
                            _fun45251_ip = 108;
                            continue _fun45251
                        }
                    case 102:
                        if (var4) {
                            _fun45251_ip = 690;
                            continue _fun45251
                        }
                    case 108:
                        var3 = _closure2_slot12;
                        var3 = var3.value;
                        if (!var3) {
                            _fun45251_ip = 151;
                            continue _fun45251
                        }
                    case 120:
                        var3 = _closure2_slot17;
                        var3 = var3.value;
                        var8 = var3.initialPosition;
                        var3 = _closure2_slot0;
                        var3 = var3.value;
                        if (!(!(var8 >= var3))) {
                            _fun45251_ip = 600;
                            continue _fun45251
                        }
                    case 151:
                        var3 = _closure2_slot5;
                        var8 = var3.value;
                        var9 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var3 = var3[var6];
                        var3 = var9.bind(var0)(var3);
                        var3 = var3.SCROLLABLE_TYPE;
                        var3 = var3.UNDETERMINED;
                        if (!(var8 !== var3)) {
                            _fun45251_ip = 231;
                            continue _fun45251
                        }
                    case 193:
                        var3 = _closure2_slot5;
                        var3 = var3.value;
                        var8 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var3 = var3[var6];
                        var3 = var8.bind(var0)(var3);
                        var3 = var3.SCROLLABLE_TYPE;
                        var3 = var3.VIEW;
                    case 231:
                        var3 = _closure2_slot17;
                        var3 = var3.value;
                        var8 = var3.initialKeyboardState;
                        var9 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var3 = var3[var6];
                        var3 = var9.bind(var0)(var3);
                        var3 = var3.KEYBOARD_STATE;
                        var3 = var3.SHOWN;
                        var3 = var8 === var3;
                        if (!var3) {
                            _fun45251_ip = 310;
                            continue _fun45251
                        }
                    case 282:
                        var8 = _closure2_slot0;
                        var9 = var8.value;
                        var8 = _closure2_slot17;
                        var8 = var8.value;
                        var8 = var8.initialPosition;
                        var3 = var9 > var8;
                    case 310:
                        if (!var3) {
                            _fun45251_ip = 351;
                            continue _fun45251
                        }
                    case 313:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var3 = 3;
                        var3 = var9[var3];
                        var9 = var8.bind(var0)(var3);
                        var8 = var9.runOnJS;
                        var3 = _closure1_slot4;
                        var3 = var8.bind(var9)(var3);
                        var3 = var3.bind(var0)();
                    case 351:
                        var3 = _closure2_slot12;
                        var3 = var3.value;
                        if (!var3) {
                            _fun45251_ip = 375;
                            continue _fun45251
                        }
                    case 363:
                        var8 = _closure2_slot12;
                        var3 = false;
                        var8.value = var3;
                    case 375:
                        var3 = _closure2_slot1;
                        var8 = var3.value;
                        var3 = var8.slice;
                        var10 = var3.bind(var8)();
                        var3 = _closure2_slot10;
                        if (!var3) {
                            _fun45251_ip = 420;
                            continue _fun45251
                        }
                    case 400:
                        var8 = var10.unshift;
                        var3 = _closure2_slot7;
                        var3 = var3.value;
                        var3 = var8.bind(var10)(var3);
                    case 420:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var3 = 5;
                        var3 = var9[var3];
                        var9 = var8.bind(var0)(var3);
                        var8 = var9.snapPoint;
                        var3 = _closure2_slot17;
                        var3 = var3.value;
                        var3 = var3.initialPosition;
                        var3 = var11 + var3;
                        var8 = var8.bind(var9)(var3, var5, var10);
                        var3 = _closure2_slot0;
                        var3 = var3.value;
                        if (!(var8 !== var3)) {
                            _fun45251_ip = 690;
                            continue _fun45251
                        }
                    case 488:
                        var9 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var3 = var3[var6];
                        var3 = var9.bind(var0)(var3);
                        var3 = var3.GESTURE_SOURCE;
                        var3 = var3.CONTENT;
                        var3 = var7 === var3;
                        if (!var3) {
                            _fun45251_ip = 539;
                            continue _fun45251
                        }
                    case 524:
                        var7 = _closure2_slot8;
                        var9 = var7.value;
                        var7 = 0;
                        var3 = var9 > var7;
                    case 539:
                        if (!var3) {
                            _fun45251_ip = 545;
                            continue _fun45251
                        }
                    case 542:
                        var3 = var4;
                    case 545:
                        if (var3) {
                            _fun45251_ip = 690;
                            continue _fun45251
                        }
                    case 551:
                        var7 = _closure2_slot15;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var3 = var3[var6];
                        var3 = var4.bind(var0)(var3);
                        var3 = var3.ANIMATION_SOURCE;
                        var4 = var3.GESTURE;
                        var3 = 2;
                        var3 = var5 / var3;
                        var3 = var7.bind(var0)(var8, var4, var3);
                        _fun45251_ip = 690;
                        continue _fun45251;
                    case 600:
                        var3 = _closure2_slot17;
                        var3 = var3.value;
                        var4 = var3.initialPosition;
                        var3 = _closure2_slot0;
                        var3 = var3.value;
                        if (!(var4 > var3)) {
                            _fun45251_ip = 690;
                            continue _fun45251
                        }
                    case 628:
                        var4 = _closure2_slot15;
                        var2 = _closure2_slot17;
                        var2 = var2.value;
                        var3 = var2.initialPosition;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var6];
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.ANIMATION_SOURCE;
                        var2 = var1.GESTURE;
                        var1 = 2;
                        var1 = var5 / var1;
                        var1 = var4.bind(var0)(var3, var2, var1);
                    case 690:
                        return var0;
                }
            };
            var2 = {};
            var1 = _closure2_slot6;
            var2.animatedHighestSnapPoint = var1;
            var1 = _closure2_slot0;
            var2.animatedPosition = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 1;
            var8 = var7[var4];
            var5 = undefined;
            var8 = var6.bind(var5)(var8);
            var8 = var8.GESTURE_SOURCE;
            var2.GESTURE_SOURCE = var8;
            var8 = _closure2_slot13;
            var2.isScrollableRefreshable = var8;
            var8 = _closure2_slot12;
            var2.isInTemporaryPosition = var8;
            var8 = _closure2_slot17;
            var2.context = var8;
            var8 = _closure2_slot15;
            var2.animateToPosition = var8;
            var8 = var7[var4];
            var8 = var6.bind(var5)(var8);
            var8 = var8.ANIMATION_SOURCE;
            var2.ANIMATION_SOURCE = var8;
            var8 = _closure2_slot5;
            var2.animatedScrollableType = var8;
            var8 = var7[var4];
            var8 = var6.bind(var5)(var8);
            var8 = var8.SCROLLABLE_TYPE;
            var2.SCROLLABLE_TYPE = var8;
            var8 = var7[var4];
            var8 = var6.bind(var5)(var8);
            var8 = var8.KEYBOARD_STATE;
            var2.KEYBOARD_STATE = var8;
            var8 = _closure1_slot2;
            var2.Platform = var8;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.WINDOW_HEIGHT;
            var2.WINDOW_HEIGHT = var4;
            var4 = _closure2_slot3;
            var2.animatedKeyboardHeight = var4;
            var4 = 3;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.runOnJS;
            var2.runOnJS = var4;
            var4 = _closure1_slot4;
            var2.dismissKeyboard = var4;
            var4 = _closure2_slot1;
            var2.animatedSnapPoints = var4;
            var4 = _closure2_slot10;
            var2.enablePanDownToClose = var4;
            var4 = _closure2_slot7;
            var2.animatedClosedPosition = var4;
            var4 = 5;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.snapPoint;
            var2.snapPoint = var4;
            var3 = _closure2_slot8;
            var2.animatedScrollableContentOffsetY = var3;
            var0.__closure = var2;
            var2 = 8667894097210.0;
            var0.__workletHash = var2;
            var1 = _closure1_slot8;
            var0.__initData = var1;
            return var0;
        };
        var8 = var7.bind(var2)();
        var7 = new Array(11);
        var7[0] = var21;
        var7[1] = var20;
        var7[2] = var19;
        var7[3] = var18;
        var7[4] = var17;
        var7[5] = var16;
        var7[6] = var15;
        var7[7] = var14;
        var7[8] = var13;
        var7[9] = var12;
        var7[10] = var11;
        var7 = var9.bind(var10)(var8, var7);
        var0.handleOnEnd = var7;
        var3 = var6[var3];
        var4 = var4.bind(var2)(var3);
        var3 = var4.useWorkletCallback;
        var1 = function() { // Environment: var1
            var0 = function() {
                var2 = _closure1_slot5;
                var1 = _closure2_slot17;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var2 = {};
            var3 = _closure1_slot5;
            var2.resetContext = var3;
            var3 = _closure2_slot17;
            var2.context = var3;
            var0.__closure = var2;
            var2 = 8824211868683.0;
            var0.__workletHash = var2;
            var1 = _closure1_slot9;
            var0.__initData = var1;
            return var0;
        };
        var2 = var1.bind(var2)();
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var0.handleOnFinalize = var1;
        return var0;
    };
    var2.useGestureEventsHandlersDefault = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 4899, 4906, 3682, 5009, 5010]);