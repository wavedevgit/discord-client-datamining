// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var8 = true;
    var1.value = var8;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var3 = var7[var1];
    var10 = var9.bind(var0)(var3);
    var3 = var10.useMemo;
    var _closure1_slot4 = var3;
    var3 = var10.useCallback;
    var _closure1_slot5 = var3;
    var4 = var10.forwardRef;
    var3 = var10.useImperativeHandle;
    var _closure1_slot6 = var3;
    var3 = var10.memo;
    var10 = var10.useEffect;
    var _closure1_slot7 = var10;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = 2;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var10 = var1.Platform;
    var _closure1_slot8 = var10;
    var1 = var1.StyleSheet;
    var _closure1_slot9 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var9 = var1.jsx;
    var _closure1_slot10 = var9;
    var1 = var1.jsxs;
    var _closure1_slot11 = var1;
    var1 = 4;
    var1 = var7[var1];
    var7 = var6.bind(var0)(var1);
    var6 = var7.addWhitelistedUIProps;
    var1 = {};
    var1.decelerationRate = var8;
    var1 = var6.bind(var7)(var1);
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx1(){const{topInset,bottomInset,$modal,_animatedContainerHeight}=this.__closure;const verticalInset=topInset+bottomInset;return $modal?_animatedContainerHeight.value-verticalInset:_animatedContainerHeight.value;}';
    var1.code = var6;
    var _closure1_slot12 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx2(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.value[animatedSnapPoints.value.length-1];}';
    var1.code = var6;
    var _closure1_slot13 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx3(){const{animatedContainerHeight,$modal,detached,bottomInset}=this.__closure;let closedPosition=animatedContainerHeight.value;if($modal||detached){closedPosition=animatedContainerHeight.value+bottomInset;}return closedPosition;}';
    var1.code = var6;
    var _closure1_slot14 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx4(){const{animatedContainerHeight,animatedHighestSnapPoint}=this.__closure;return animatedContainerHeight.value-animatedHighestSnapPoint.value;}';
    var1.code = var6;
    var _closure1_slot15 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx5(){const{_providedContainerHeight,animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,handleComponent,animatedHandleHeight,INITIAL_HANDLE_HEIGHT,animatedSnapPoints,INITIAL_SNAP_POINT}=this.__closure;let isContainerHeightCalculated=false;if(_providedContainerHeight!==null||_providedContainerHeight!==undefined){isContainerHeightCalculated=true;}if(animatedContainerHeight.value!==INITIAL_CONTAINER_HEIGHT){isContainerHeightCalculated=true;}let isHandleHeightCalculated=false;if(handleComponent===null){animatedHandleHeight.value=0;isHandleHeightCalculated=true;}if(animatedHandleHeight.value!==INITIAL_HANDLE_HEIGHT){isHandleHeightCalculated=true;}let isSnapPointsNormalized=false;if(animatedSnapPoints.value[0]!==INITIAL_SNAP_POINT){isSnapPointsNormalized=true;}return isContainerHeightCalculated&&isHandleHeightCalculated&&isSnapPointsNormalized;}';
    var1.code = var6;
    var _closure1_slot16 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx6(){const{animatedPosition,animatedClosedPosition,SHEET_STATE,animatedContainerHeight,animatedSheetHeight,animatedKeyboardHeightInContainer,keyboardBehavior,KEYBOARD_BEHAVIOR,isInTemporaryPosition}=this.__closure;if(animatedPosition.value>=animatedClosedPosition.value){return SHEET_STATE.CLOSED;}const extendedPosition=animatedContainerHeight.value-animatedSheetHeight.value;if(animatedPosition.value===extendedPosition){return SHEET_STATE.EXTENDED;}const keyboardHeightInContainer=animatedKeyboardHeightInContainer.value;const extendedPositionWithKeyboard=Math.max(0,animatedContainerHeight.value-(animatedSheetHeight.value+keyboardHeightInContainer));if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive&&isInTemporaryPosition.value&&animatedPosition.value===extendedPositionWithKeyboard){return SHEET_STATE.EXTENDED;}if(animatedPosition.value===0){return SHEET_STATE.FILL_PARENT;}if(animatedPosition.value<extendedPosition){return SHEET_STATE.OVER_EXTENDED;}return SHEET_STATE.OPENED;}';
    var1.code = var6;
    var _closure1_slot17 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx7(){const{enableContentPanningGesture,SCROLLABLE_STATE,animatedScrollableOverrideState,animatedSheetState,SHEET_STATE,animatedKeyboardState,KEYBOARD_STATE,animatedAnimationState,ANIMATION_STATE}=this.__closure;if(!enableContentPanningGesture){return SCROLLABLE_STATE.UNLOCKED;}if(animatedScrollableOverrideState.value!==SCROLLABLE_STATE.UNDETERMINED){return animatedScrollableOverrideState.value;}if(animatedSheetState.value===SHEET_STATE.FILL_PARENT){return SCROLLABLE_STATE.UNLOCKED;}if(animatedSheetState.value===SHEET_STATE.EXTENDED){return SCROLLABLE_STATE.UNLOCKED;}if(animatedKeyboardState.value===KEYBOARD_STATE.SHOWN&&animatedAnimationState.value===ANIMATION_STATE.RUNNING){return SCROLLABLE_STATE.UNLOCKED;}return SCROLLABLE_STATE.LOCKED;}';
    var1.code = var6;
    var _closure1_slot18 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx8(){const{animatedSnapPoints,animatedContainerHeight,isLayoutCalculated,interpolate,animatedPosition,Extrapolation,android_keyboardInputMode,KEYBOARD_INPUT_MODE,animatedAnimationSource,ANIMATION_SOURCE,animatedAnimationState,ANIMATION_STATE,isInTemporaryPosition,animatedCurrentIndex,animatedNextPositionIndex}=this.__closure;const adjustedSnapPoints=animatedSnapPoints.value.slice().reverse();const adjustedSnapPointsIndexes=animatedSnapPoints.value.slice().map(function(_,index){return index;}).reverse();adjustedSnapPoints.push(animatedContainerHeight.value);adjustedSnapPointsIndexes.push(-1);const currentIndex=isLayoutCalculated.value?interpolate(animatedPosition.value,adjustedSnapPoints,adjustedSnapPointsIndexes,Extrapolation.CLAMP):-1;if(android_keyboardInputMode===KEYBOARD_INPUT_MODE.adjustResize&&animatedAnimationSource.value===ANIMATION_SOURCE.KEYBOARD&&animatedAnimationState.value===ANIMATION_STATE.RUNNING&&isInTemporaryPosition.value){return Math.max(animatedCurrentIndex.value,currentIndex);}if(animatedAnimationSource.value===ANIMATION_SOURCE.SNAP_POINT_CHANGE&&animatedAnimationState.value===ANIMATION_STATE.RUNNING){return animatedNextPositionIndex.value;}return currentIndex;}';
    var1.code = var6;
    var _closure1_slot19 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx9(){const{cancelAnimation,animatedPosition,animatedAnimationSource,ANIMATION_SOURCE,animatedAnimationState,ANIMATION_STATE}=this.__closure;cancelAnimation(animatedPosition);animatedAnimationSource.value=ANIMATION_SOURCE.NONE;animatedAnimationState.value=ANIMATION_STATE.STOPPED;}';
    var1.code = var6;
    var _closure1_slot20 = var1;
    var1 = {};
    var6 = "function animateToPositionCompleted_Pnpm_BottomSheetTsx10(isFinished){const{__DEV__,runOnJS,print,animatedCurrentIndex,animatedNextPosition,animatedNextPositionIndex,animatedAnimationSource,ANIMATION_SOURCE,isAnimatedOnMount,isForcedClosing,animatedAnimationState,ANIMATION_STATE,INITIAL_VALUE,animatedContainerHeightDidChange}=this.__closure;if(!isFinished){return;}if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'animateToPositionCompleted',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedNextPosition:animatedNextPosition.value,animatedNextPositionIndex:animatedNextPositionIndex.value}});}if(animatedAnimationSource.value===ANIMATION_SOURCE.MOUNT){isAnimatedOnMount.value=true;}isForcedClosing.value=false;animatedAnimationSource.value=ANIMATION_SOURCE.NONE;animatedAnimationState.value=ANIMATION_STATE.STOPPED;animatedNextPosition.value=INITIAL_VALUE;animatedNextPositionIndex.value=INITIAL_VALUE;animatedContainerHeightDidChange.value=false;}";
    var1.code = var6;
    var _closure1_slot21 = var1;
    var1 = {};
    var6 = "function animateToPosition_Pnpm_BottomSheetTsx11(position,source,velocity=0,configs){const{__DEV__,runOnJS,print,animatedPosition,animatedAnimationState,ANIMATION_STATE,animatedNextPosition,stopAnimation,animatedAnimationSource,animatedKeyboardState,KEYBOARD_STATE,keyboardBehavior,KEYBOARD_BEHAVIOR,animatedKeyboardHeightInContainer,animatedNextPositionIndex,animatedSnapPoints,handleOnAnimate,animate,_providedAnimationConfigs,_providedOverrideReduceMotion,animateToPositionCompleted}=this.__closure;if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'animateToPosition',params:{currentPosition:animatedPosition.value,nextPosition:position,source:source}});}if(position===animatedPosition.value||position===undefined||animatedAnimationState.value===ANIMATION_STATE.RUNNING&&position===animatedNextPosition.value){return;}if(animatedAnimationState.value===ANIMATION_STATE.RUNNING){stopAnimation();}animatedAnimationState.value=ANIMATION_STATE.RUNNING;animatedAnimationSource.value=source;animatedNextPosition.value=position;let offset=0;if(animatedKeyboardState.value===KEYBOARD_STATE.SHOWN&&keyboardBehavior!==KEYBOARD_BEHAVIOR.extend&&position<animatedPosition.value){offset=animatedKeyboardHeightInContainer.value;}animatedNextPositionIndex.value=animatedSnapPoints.value.indexOf(position+offset);runOnJS(handleOnAnimate)(animatedNextPositionIndex.value,position,source);animatedPosition.value=animate({point:position,configs:configs||_providedAnimationConfigs,velocity:velocity,overrideReduceMotion:_providedOverrideReduceMotion,onComplete:animateToPositionCompleted});}";
    var1.code = var6;
    var _closure1_slot22 = var1;
    var1 = {};
    var6 = 'function setToPosition_Pnpm_BottomSheetTsx12(targetPosition){const setToPosition_Pnpm_BottomSheetTsx12=this._recur;const{animatedPosition,animatedAnimationState,ANIMATION_STATE,animatedNextPosition,__DEV__,runOnJS,print,BottomSheet,animatedNextPositionIndex,animatedSnapPoints,stopAnimation,animatedContainerHeightDidChange}=this.__closure;if(targetPosition===animatedPosition.value||targetPosition===undefined||animatedAnimationState.value===ANIMATION_STATE.RUNNING&&targetPosition===animatedNextPosition.value){return;}if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:setToPosition_Pnpm_BottomSheetTsx12.name,params:{currentPosition:animatedPosition.value,targetPosition:targetPosition}});}animatedNextPosition.value=targetPosition;animatedNextPositionIndex.value=animatedSnapPoints.value.indexOf(targetPosition);stopAnimation();animatedPosition.value=targetPosition;animatedContainerHeightDidChange.value=false;}';
    var1.code = var6;
    var _closure1_slot23 = var1;
    var1 = {};
    var6 = "function getEvaluatedPosition_Pnpm_BottomSheetTsx13(source){const{animatedCurrentIndex,animatedSnapPoints,animatedKeyboardState,animatedHighestSnapPoint,ANIMATION_SOURCE,keyboardBlurBehavior,KEYBOARD_BLUR_BEHAVIOR,KEYBOARD_STATE,animatedContentGestureState,State,animatedHandleGestureState,isInTemporaryPosition,keyboardBehavior,KEYBOARD_BEHAVIOR,Platform,android_keyboardInputMode,animatedKeyboardHeightInContainer,animatedPosition,isAnimatedOnMount,_providedIndex,animatedClosedPosition}=this.__closure;const currentIndex=animatedCurrentIndex.value;const snapPoints=animatedSnapPoints.value;const keyboardState=animatedKeyboardState.value;const highestSnapPoint=animatedHighestSnapPoint.value;if(source===ANIMATION_SOURCE.KEYBOARD&&keyboardBlurBehavior===KEYBOARD_BLUR_BEHAVIOR.restore&&keyboardState===KEYBOARD_STATE.HIDDEN&&animatedContentGestureState.value!==State.ACTIVE&&animatedHandleGestureState.value!==State.ACTIVE){isInTemporaryPosition.value=false;const nextPosition=snapPoints[currentIndex];return nextPosition;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.extend&&keyboardState===KEYBOARD_STATE.SHOWN){return highestSnapPoint;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.fillParent&&keyboardState===KEYBOARD_STATE.SHOWN){isInTemporaryPosition.value=true;return 0;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive&&keyboardState===KEYBOARD_STATE.SHOWN&&!(Platform.OS==='android'&&android_keyboardInputMode==='adjustResize')){isInTemporaryPosition.value=true;const keyboardHeightInContainer=animatedKeyboardHeightInContainer.value;return Math.max(0,highestSnapPoint-keyboardHeightInContainer);}if(isInTemporaryPosition.value){return animatedPosition.value;}if(!isAnimatedOnMount.value){return _providedIndex===-1?animatedClosedPosition.value:snapPoints[_providedIndex];}return snapPoints[currentIndex];}";
    var1.code = var6;
    var _closure1_slot24 = var1;
    var1 = {};
    var6 = 'function evaluatePosition_Pnpm_BottomSheetTsx14(source,animationConfigs){const{isForcedClosing,ANIMATION_SOURCE,isLayoutCalculated,getEvaluatedPosition,isAnimatedOnMount,animateOnMount,animateToPosition,setToPosition,animatedAnimationState,ANIMATION_STATE,animatedNextPositionIndex,isInTemporaryPosition,animatedClosedPosition,animatedCurrentIndex,animatedSnapPoints,reduceMotion,animatedIndex,animatedPosition,animatedContainerHeightDidChange}=this.__closure;if(isForcedClosing.value&&source!==ANIMATION_SOURCE.USER){return;}if(!isLayoutCalculated.value){return;}const proposedPosition=getEvaluatedPosition(source);if(!isAnimatedOnMount.value){if(animateOnMount){animateToPosition(proposedPosition,ANIMATION_SOURCE.MOUNT,undefined,animationConfigs);}else{setToPosition(proposedPosition);isAnimatedOnMount.value=true;}return;}if(animatedAnimationState.value===ANIMATION_STATE.RUNNING){if(animatedNextPositionIndex.value===-1&&!isInTemporaryPosition.value){setToPosition(animatedClosedPosition.value);return;}if(animatedNextPositionIndex.value!==animatedCurrentIndex.value){animateToPosition(animatedSnapPoints.value[animatedNextPositionIndex.value],source,undefined,animationConfigs);return;}}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING&&animatedCurrentIndex.value===-1){if(reduceMotion&&animatedSnapPoints.value[animatedIndex.value]!==animatedPosition.value){return;}setToPosition(animatedClosedPosition.value);return;}if(animatedContainerHeightDidChange.value){setToPosition(proposedPosition);return;}animateToPosition(proposedPosition,source,undefined,animationConfigs);}';
    var1.code = var6;
    var _closure1_slot25 = var1;
    var1 = {};
    var6 = 'function handleSnapToPosition_Pnpm_BottomSheetTsx15(position,animationConfigs){const handleSnapToPosition_Pnpm_BottomSheetTsx15=this._recur;const{__DEV__,print,BottomSheet,normalizeSnapPoint,animatedContainerHeight,isLayoutCalculated,animatedNextPosition,isForcedClosing,isInTemporaryPosition,runOnUI,animateToPosition,ANIMATION_SOURCE}=this.__closure;if(__DEV__){print({component:BottomSheet.name,method:handleSnapToPosition_Pnpm_BottomSheetTsx15.name,params:{position:position}});}const nextPosition=normalizeSnapPoint(position,animatedContainerHeight.value);if(!isLayoutCalculated||nextPosition===animatedNextPosition.value||isForcedClosing.value){return;}isInTemporaryPosition.value=true;runOnUI(animateToPosition)(nextPosition,ANIMATION_SOURCE.USER,0,animationConfigs);}';
    var1.code = var6;
    var _closure1_slot26 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx16(){const{animatedContainerHeight}=this.__closure;return animatedContainerHeight.value;}';
    var1.code = var6;
    var _closure1_slot27 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx17(result,previous){const{INITIAL_CONTAINER_HEIGHT,animatedContainerHeightDidChange,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,animatedNextPositionIndex,animateToPosition,animatedClosedPosition}=this.__closure;if(result===INITIAL_CONTAINER_HEIGHT){return;}animatedContainerHeightDidChange.value=result!==previous;if(animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE&&animatedNextPositionIndex.value===-1){animateToPosition(animatedClosedPosition.value,ANIMATION_SOURCE.GESTURE);}}';
    var1.code = var6;
    var _closure1_slot28 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx18(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.value;}';
    var1.code = var6;
    var _closure1_slot29 = var1;
    var1 = {};
    var6 = "function pnpm_BottomSheetTsx19(result,previous){const{isAnimatedOnMount,isLayoutCalculated,__DEV__,runOnJS,print,evaluatePosition,ANIMATION_SOURCE}=this.__closure;if(JSON.stringify(result)===JSON.stringify(previous)&&isAnimatedOnMount.value){return;}if(!isLayoutCalculated.value){return;}if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'useAnimatedReaction::OnSnapPointChange',category:'effect',params:{result:result}});}evaluatePosition(ANIMATION_SOURCE.SNAP_POINT_CHANGE);}";
    var1.code = var6;
    var _closure1_slot30 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx20(){const{animatedKeyboardState,animatedKeyboardHeight}=this.__closure;return{_keyboardState:animatedKeyboardState.value,_keyboardHeight:animatedKeyboardHeight.value};}';
    var1.code = var6;
    var _closure1_slot31 = var1;
    var1 = {};
    var6 = "function pnpm_BottomSheetTsx21(result,_previousResult){const{KEYBOARD_STATE,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,__DEV__,runOnJS,print,BottomSheet,animatedKeyboardHeightInContainer,$modal,bottomInset,animatedContainerOffset,Platform,android_keyboardInputMode,KEYBOARD_INPUT_MODE,keyboardBehavior,KEYBOARD_BEHAVIOR,animatedContentGestureState,State,animatedHandleGestureState,keyboardBlurBehavior,KEYBOARD_BLUR_BEHAVIOR,getKeyboardAnimationConfigs,keyboardAnimationEasing,keyboardAnimationDuration,evaluatePosition}=this.__closure;const{_keyboardState:_keyboardState,_keyboardHeight:_keyboardHeight}=result;const _previousKeyboardState=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardState;const _previousKeyboardHeight=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardHeight;if(_keyboardState===_previousKeyboardState&&_keyboardHeight===_previousKeyboardHeight){return;}if(_keyboardState===KEYBOARD_STATE.UNDETERMINED){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE){return;}if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnKeyboardStateChange',category:'effect',params:{keyboardState:_keyboardState,keyboardHeight:_keyboardHeight}});}animatedKeyboardHeightInContainer.value=_keyboardHeight===0?0:$modal?Math.abs(_keyboardHeight-Math.abs(bottomInset-animatedContainerOffset.value.bottom)):Math.abs(_keyboardHeight-animatedContainerOffset.value.bottom);if(Platform.OS==='android'&&android_keyboardInputMode===KEYBOARD_INPUT_MODE.adjustResize){animatedKeyboardHeightInContainer.value=0;if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive){return;}}const hasActiveGesture=animatedContentGestureState.value===State.ACTIVE||animatedContentGestureState.value===State.BEGAN||animatedHandleGestureState.value===State.ACTIVE||animatedHandleGestureState.value===State.BEGAN;if(hasActiveGesture){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&keyboardBlurBehavior===KEYBOARD_BLUR_BEHAVIOR.none){return;}const animationConfigs=getKeyboardAnimationConfigs(keyboardAnimationEasing.value,keyboardAnimationDuration.value);evaluatePosition(ANIMATION_SOURCE.KEYBOARD,animationConfigs);}";
    var1.code = var6;
    var _closure1_slot32 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx22(){const{animatedPosition}=this.__closure;return animatedPosition.value;}';
    var1.code = var6;
    var _closure1_slot33 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx23(_animatedPosition){const{_providedAnimatedPosition,topInset}=this.__closure;if(_providedAnimatedPosition){_providedAnimatedPosition.value=_animatedPosition+topInset;}}';
    var1.code = var6;
    var _closure1_slot34 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx24(){const{animatedIndex}=this.__closure;return animatedIndex.value;}';
    var1.code = var6;
    var _closure1_slot35 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx25(_animatedIndex){const{_providedAnimatedIndex}=this.__closure;if(_providedAnimatedIndex){_providedAnimatedIndex.value=_animatedIndex;}}';
    var1.code = var6;
    var _closure1_slot36 = var1;
    var1 = {};
    var6 = 'function pnpm_BottomSheetTsx26(){const{animatedIndex,animatedPosition,animatedAnimationState,animatedContentGestureState,animatedHandleGestureState}=this.__closure;return{_animatedIndex:animatedIndex.value,_animatedPosition:animatedPosition.value,_animationState:animatedAnimationState.value,_contentGestureState:animatedContentGestureState.value,_handleGestureState:animatedHandleGestureState.value};}';
    var1.code = var6;
    var _closure1_slot37 = var1;
    var1 = {};
    var6 = "function pnpm_BottomSheetTsx27({_animatedIndex:_animatedIndex,_animatedPosition:_animatedPosition,_animationState:_animationState,_contentGestureState:_contentGestureState,_handleGestureState:_handleGestureState}){const{ANIMATION_STATE,animatedNextPosition,INITIAL_VALUE,animatedNextPositionIndex,State,reduceMotion,animatedCurrentIndex,animatedSnapPoints,__DEV__,runOnJS,print,BottomSheet,handleOnChange,_providedOnClose}=this.__closure;if(_animationState!==ANIMATION_STATE.STOPPED){return;}if(animatedNextPosition.value!==INITIAL_VALUE&&animatedNextPositionIndex.value!==INITIAL_VALUE&&(_animatedPosition!==animatedNextPosition.value||_animatedIndex!==animatedNextPositionIndex.value)){return;}if(_animatedIndex%1!==0){return;}const hasNoActiveGesture=(_contentGestureState===State.END||_contentGestureState===State.UNDETERMINED||_contentGestureState===State.CANCELLED)&&(_handleGestureState===State.END||_handleGestureState===State.UNDETERMINED||_handleGestureState===State.CANCELLED);if(!hasNoActiveGesture){return;}if(reduceMotion&&_animatedIndex===animatedCurrentIndex.value&&animatedSnapPoints.value[_animatedIndex]!==_animatedPosition){return;}if(_animatedIndex!==animatedCurrentIndex.value){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnChange',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}animatedCurrentIndex.value=_animatedIndex;runOnJS(handleOnChange)(_animatedIndex,_animatedPosition);}if(_animatedIndex===-1&&_providedOnClose){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::onClose',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}runOnJS(_providedOnClose)();}}";
    var1.code = var6;
    var _closure1_slot38 = var1;
    var1 = function(arg0, arg1) { // Original name: BottomSheet, environment: var5
        _fun44474: for (var _fun44474_ip = 0;;) switch (_fun44474_ip) {
            case 0:
                var1 = arg0;
                var65 = var1.animationConfigs;
                var _closure2_slot0 = var65;
                var2 = var1.index;
                var45 = 0;
                var3 = undefined;
                var12 = 0;
                if (!(var3 !== var2)) {
                    _fun44474_ip = 33;
                    continue _fun44474
                }
            case 30:
                var12 = var2;
            case 33:
                var _closure2_slot1 = var12;
                var11 = var1.snapPoints;
                var30 = var1.initialPosition;
                if (!(var3 === var30)) {
                    _fun44474_ip = 82;
                    continue _fun44474
                }
            case 53:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var30 = var2.INITIAL_POSITION;
            case 82:
                var14 = var1.animateOnMount;
                if (!(var3 === var14)) {
                    _fun44474_ip = 121;
                    continue _fun44474
                }
            case 92:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var14 = var2.DEFAULT_ANIMATE_ON_MOUNT;
            case 121:
                var _closure2_slot2 = var14;
                var91 = var1.enableContentPanningGesture;
                if (!(var3 === var91)) {
                    _fun44474_ip = 164;
                    continue _fun44474
                }
            case 135:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var91 = var2.DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
            case 164:
                var _closure2_slot3 = var91;
                var28 = var1.enableHandlePanningGesture;
                var27 = var1.enableOverDrag;
                if (!(var3 === var27)) {
                    _fun44474_ip = 213;
                    continue _fun44474
                }
            case 184:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var27 = var2.DEFAULT_ENABLE_OVER_DRAG;
            case 213:
                var _closure2_slot4 = var27;
                var26 = var1.enablePanDownToClose;
                if (!(var3 === var26)) {
                    _fun44474_ip = 256;
                    continue _fun44474
                }
            case 227:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var26 = var2.DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
            case 256:
                var _closure2_slot5 = var26;
                var90 = var1.enableDynamicSizing;
                if (!(var3 === var90)) {
                    _fun44474_ip = 299;
                    continue _fun44474
                }
            case 270:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var90 = var2.DEFAULT_DYNAMIC_SIZING;
            case 299:
                var _closure2_slot6 = var90;
                var25 = var1.overDragResistanceFactor;
                if (!(var3 === var25)) {
                    _fun44474_ip = 342;
                    continue _fun44474
                }
            case 313:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var25 = var2.DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
            case 342:
                var _closure2_slot7 = var25;
                var62 = var1.overrideReduceMotion;
                var _closure2_slot8 = var62;
                var21 = var1.style;
                var10 = var1.containerStyle;
                var16 = var1.backgroundStyle;
                var22 = var1.handleStyle;
                var18 = var1.handleIndicatorStyle;
                var9 = var1.gestureEventsHandlersHook;
                var24 = var1.keyboardBehavior;
                if (!(var3 === var24)) {
                    _fun44474_ip = 430;
                    continue _fun44474
                }
            case 401:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var24 = var2.DEFAULT_KEYBOARD_BEHAVIOR;
            case 430:
                var _closure2_slot9 = var24;
                var67 = var1.keyboardBlurBehavior;
                if (!(var3 === var67)) {
                    _fun44474_ip = 473;
                    continue _fun44474
                }
            case 444:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var67 = var2.DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
            case 473:
                var _closure2_slot10 = var67;
                var66 = var1.android_keyboardInputMode;
                if (!(var3 === var66)) {
                    _fun44474_ip = 516;
                    continue _fun44474
                }
            case 487:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var66 = var2.DEFAULT_KEYBOARD_INPUT_MODE;
            case 516:
                var _closure2_slot11 = var66;
                var89 = var1.enableBlurKeyboardOnGesture;
                if (!(var3 === var89)) {
                    _fun44474_ip = 559;
                    continue _fun44474
                }
            case 530:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var89 = var2.DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
            case 559:
                var _closure2_slot12 = var89;
                var48 = var1.keyboardIncludeBottomOffset;
                if (!(var3 === var48)) {
                    _fun44474_ip = 604;
                    continue _fun44474
                }
            case 575:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var48 = var2.DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET;
            case 604:
                var44 = var1.containerHeight;
                var _closure2_slot13 = var44;
                var29 = var1.containerOffset;
                var2 = var1.topInset;
                var35 = 0;
                if (!(var3 !== var2)) {
                    _fun44474_ip = 635;
                    continue _fun44474
                }
            case 632:
                var35 = var2;
            case 635:
                var _closure2_slot14 = var35;
                var2 = var1.bottomInset;
                var15 = 0;
                if (!(var3 !== var2)) {
                    _fun44474_ip = 654;
                    continue _fun44474
                }
            case 651:
                var15 = var2;
            case 654:
                var _closure2_slot15 = var15;
                var8 = var1.maxDynamicContentSize;
                var6 = var1.contentHeight;
                var7 = var1.handleHeight;
                var64 = var1.animatedPosition;
                var _closure2_slot16 = var64;
                var63 = var1.animatedIndex;
                var _closure2_slot17 = var63;
                var88 = var1.simultaneousHandlers;
                var _closure2_slot18 = var88;
                var87 = var1.waitFor;
                var _closure2_slot19 = var87;
                var86 = var1.activeOffsetX;
                var _closure2_slot20 = var86;
                var85 = var1.activeOffsetY;
                var _closure2_slot21 = var85;
                var84 = var1.failOffsetX;
                var _closure2_slot22 = var84;
                var83 = var1.failOffsetY;
                var _closure2_slot23 = var83;
                var47 = var1.onChange;
                var _closure2_slot24 = var47;
                var46 = var1.onClose;
                var _closure2_slot25 = var46;
                var4 = var1.onAnimate;
                var _closure2_slot26 = var4;
                var2 = var1.$modal;
                var43 = var3 !== var2;
                if (!var43) {
                    _fun44474_ip = 802;
                    continue _fun44474
                }
            case 799:
                var43 = var2;
            case 802:
                var _closure2_slot27 = var43;
                var2 = var1.detached;
                var33 = var3 !== var2;
                if (!var33) {
                    _fun44474_ip = 822;
                    continue _fun44474
                }
            case 819:
                var33 = var2;
            case 822:
                var _closure2_slot28 = var33;
                var23 = var1.handleComponent;
                var _closure2_slot29 = var23;
                var13 = var1.backdropComponent;
                var40 = var1.backgroundComponent;
                var38 = var1.renderFooter;
                var34 = var1.children;
                var20 = var1.BodyComponent;
                var39 = var1.accessible;
                if (!(var3 === var39)) {
                    _fun44474_ip = 903;
                    continue _fun44474
                }
            case 874:
                var5 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 5;
                var2 = var17[var2];
                var2 = var5.bind(var3)(var2);
                var39 = var2.DEFAULT_ACCESSIBLE;
            case 903:
                var36 = var1.accessibilityLabel;
                if (!(var3 === var36)) {
                    _fun44474_ip = 941;
                    continue _fun44474
                }
            case 912:
                var5 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 5;
                var2 = var17[var2];
                var2 = var5.bind(var3)(var2);
                var36 = var2.DEFAULT_ACCESSIBILITY_LABEL;
            case 941:
                var37 = var1.accessibilityRole;
                if (!(var3 === var37)) {
                    _fun44474_ip = 979;
                    continue _fun44474
                }
            case 950:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var37 = var1.DEFAULT_ACCESSIBILITY_ROLE;
            case 979:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var31 = var5.bind(var3)(var2);
                var5 = var31.useReactiveSharedValue;
                var17 = null;
                var2 = var44;
                if (!(var17 == var2)) {
                    _fun44474_ip = 1043;
                    continue _fun44474
                }
            case 1017:
                var41 = _closure1_slot0;
                var42 = _closure1_slot2;
                var32 = 5;
                var32 = var42[var32];
                var32 = var41.bind(var3)(var32);
                var2 = var32.INITIAL_CONTAINER_HEIGHT;
            case 1043:
                var42 = var5.bind(var31)(var2);
                var _closure2_slot30 = var42;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var51 = 4;
                var31 = var2[var51];
                var49 = var5.bind(var3)(var31);
                var41 = var49.useDerivedValue;
                var32 = function() { // Original name: pnpm_BottomSheetTsx1, environment: var0
                    _fun44475: for (var _fun44475_ip = 0;;) switch (_fun44475_ip) {
                        case 0:
                            var2 = _closure2_slot14;
                            var0 = _closure2_slot15;
                            var2 = var2 + var0;
                            var0 = _closure2_slot27;
                            var1 = _closure2_slot30;
                            var1 = var1.value;
                            if (var0) {
                                _fun44475_ip = 36;
                                continue _fun44475
                            }
                        case 31:
                            var0 = var1;
                            _fun44475_ip = 40;
                            continue _fun44475;
                        case 36:
                            var0 = var1 - var2;
                        case 40:
                            return var0;
                    }
                };
                var31 = {};
                var31.topInset = var35;
                var31.bottomInset = var15;
                var31.$modal = var43;
                var31._animatedContainerHeight = var42;
                var32.__closure = var31;
                var31 = 4416945277961.0;
                var32.__workletHash = var31;
                var31 = _closure1_slot12;
                var32.__initData = var31;
                var31 = new Array(4);
                var31[0] = var35;
                var31[1] = var15;
                var31[2] = var43;
                var31[3] = var42;
                var74 = var41.bind(var49)(var32, var31);
                var _closure2_slot31 = var74;
                var2 = var2[var1];
                var5 = var5.bind(var3)(var2);
                var2 = var5.useReactiveSharedValue;
                if (!(var17 == var29)) {
                    _fun44474_ip = 1214;
                    continue _fun44474
                }
            case 1188:
                var32 = _closure1_slot0;
                var41 = _closure1_slot2;
                var31 = 5;
                var31 = var41[var31];
                var31 = var32.bind(var3)(var31);
                var29 = var31.INITIAL_CONTAINER_OFFSET;
            case 1214:
                var41 = var2.bind(var5)(var29);
                var _closure2_slot32 = var41;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var1];
                var5 = var5.bind(var3)(var2);
                var2 = var5.useReactiveSharedValue;
                if (!(var17 == var7)) {
                    _fun44474_ip = 1276;
                    continue _fun44474
                }
            case 1250:
                var31 = _closure1_slot0;
                var32 = _closure1_slot2;
                var29 = 5;
                var29 = var32[var29];
                var29 = var31.bind(var3)(var29);
                var7 = var29.INITIAL_HANDLE_HEIGHT;
            case 1276:
                var29 = var2.bind(var5)(var7);
                var _closure2_slot33 = var29;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = var2[var51];
                var31 = var5.bind(var3)(var7);
                var7 = var31.useSharedValue;
                var101 = var7.bind(var31)(var45);
                var _closure2_slot34 = var101;
                var2 = var2[var51];
                var5 = var5.bind(var3)(var2);
                var2 = var5.useSharedValue;
                if (!(var17 == var6)) {
                    _fun44474_ip = 1362;
                    continue _fun44474
                }
            case 1336:
                var31 = _closure1_slot0;
                var32 = _closure1_slot2;
                var7 = 5;
                var7 = var32[var7];
                var7 = var31.bind(var3)(var7);
                var6 = var7.INITIAL_CONTAINER_HEIGHT;
            case 1362:
                var104 = var2.bind(var5)(var6);
                var _closure2_slot35 = var104;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = var2[var1];
                var7 = var5.bind(var3)(var6);
                var6 = var7.useAnimatedSnapPoints;
                var114 = var7;
                var113 = var11;
                var112 = var74;
                var111 = var104;
                var110 = var29;
                var109 = var101;
                var108 = var90;
                var107 = var8;
                var8 = var114[var6](var113, var112, var111, var110, var109, var108, var107, var106);
                var7 = _closure1_slot3;
                var6 = 2;
                var7 = var7.bind(var3)(var8, var6);
                var53 = var7[var45];
                var _closure2_slot36 = var53;
                var6 = 1;
                var6 = var7[var6];
                var _closure2_slot37 = var6;
                var7 = var2[var51];
                var31 = var5.bind(var3)(var7);
                var11 = var31.useDerivedValue;
                var8 = function() { // Original name: pnpm_BottomSheetTsx2, environment: var0
                    var1 = _closure2_slot36;
                    var1 = var1.value;
                    var0 = _closure2_slot36;
                    var0 = var0.value;
                    var2 = var0.length;
                    var0 = 1;
                    var0 = var2 - var0;
                    var0 = var1[var0];
                    return var0;
                };
                var7 = {};
                var7.animatedSnapPoints = var53;
                var8.__closure = var7;
                var7 = 2910694947130.0;
                var8.__workletHash = var7;
                var7 = _closure1_slot13;
                var8.__initData = var7;
                var7 = new Array(1);
                var7[0] = var53;
                var99 = var11.bind(var31)(var8, var7);
                var _closure2_slot38 = var99;
                var7 = var2[var51];
                var31 = var5.bind(var3)(var7);
                var11 = var31.useDerivedValue;
                var8 = function() { // Original name: pnpm_BottomSheetTsx3, environment: var0
                    _fun44477: for (var _fun44477_ip = 0;;) switch (_fun44477_ip) {
                        case 0:
                            var0 = _closure2_slot31;
                            var0 = var0.value;
                            var2 = _closure2_slot27;
                            if (var2) {
                                _fun44477_ip = 23;
                                continue _fun44477
                            }
                        case 19:
                            var2 = _closure2_slot28;
                        case 23:
                            if (!var2) {
                                _fun44477_ip = 43;
                                continue _fun44477
                            }
                        case 26:
                            var2 = _closure2_slot31;
                            var2 = var2.value;
                            var1 = _closure2_slot15;
                            var0 = var2 + var1;
                        case 43:
                            return var0;
                    }
                };
                var7 = {};
                var7.animatedContainerHeight = var74;
                var7.$modal = var43;
                var7.detached = var33;
                var7.bottomInset = var15;
                var8.__closure = var7;
                var7 = 1052527833249.0;
                var8.__workletHash = var7;
                var7 = _closure1_slot14;
                var8.__initData = var7;
                var7 = new Array(4);
                var7[0] = var74;
                var7[1] = var43;
                var7[2] = var33;
                var7[3] = var15;
                var76 = var11.bind(var31)(var8, var7);
                var _closure2_slot39 = var76;
                var7 = var2[var51];
                var31 = var5.bind(var3)(var7);
                var11 = var31.useDerivedValue;
                var8 = function() { // Original name: pnpm_BottomSheetTsx4, environment: var0
                    var1 = _closure2_slot31;
                    var1 = var1.value;
                    var0 = _closure2_slot38;
                    var0 = var0.value;
                    var0 = var1 - var0;
                    return var0;
                };
                var7 = {};
                var7.animatedContainerHeight = var74;
                var7.animatedHighestSnapPoint = var99;
                var8.__closure = var7;
                var7 = 12626261619737.0;
                var8.__workletHash = var7;
                var7 = _closure1_slot15;
                var8.__initData = var7;
                var7 = new Array(2);
                var7[0] = var74;
                var7[1] = var99;
                var103 = var11.bind(var31)(var8, var7);
                var _closure2_slot40 = var103;
                var2 = var2[var1];
                var7 = var5.bind(var3)(var2);
                var5 = var7.useReactiveSharedValue;
                var8 = -1;
                var2 = var8;
                if (var14) {
                    _fun44474_ip = 1751;
                    continue _fun44474
                }
            case 1748:
                var2 = var12;
            case 1751:
                var54 = var5.bind(var7)(var2);
                var _closure2_slot41 = var54;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = var2[var51];
                var11 = var5.bind(var3)(var7);
                var7 = var11.useSharedValue;
                var30 = var7.bind(var11)(var30);
                var _closure2_slot42 = var30;
                var7 = var2[var51];
                var31 = var5.bind(var3)(var7);
                var11 = var31.useSharedValue;
                var57 = 5;
                var7 = var2[var57];
                var7 = var5.bind(var3)(var7);
                var7 = var7.INITIAL_VALUE;
                var58 = var11.bind(var31)(var7);
                var _closure2_slot43 = var58;
                var7 = var2[var51];
                var31 = var5.bind(var3)(var7);
                var11 = var31.useSharedValue;
                var7 = var2[var57];
                var7 = var5.bind(var3)(var7);
                var7 = var7.INITIAL_VALUE;
                var56 = var11.bind(var31)(var7);
                var _closure2_slot44 = var56;
                var2 = var2[var51];
                var7 = var5.bind(var3)(var2);
                var5 = var7.useSharedValue;
                var2 = !var14;
                if (var2) {
                    _fun44474_ip = 1898;
                    continue _fun44474
                }
            case 1894:
                var2 = var8 === var12;
            case 1898:
                var8 = var5.bind(var7)(var2);
                var _closure2_slot45 = var8;
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = var11[var51];
                var7 = var5.bind(var3)(var2);
                var2 = var7.useSharedValue;
                var52 = false;
                var93 = var2.bind(var7)(var52);
                var _closure2_slot46 = var93;
                var2 = var11[var51];
                var32 = var5.bind(var3)(var2);
                var31 = var32.useDerivedValue;
                var7 = function() { // Original name: pnpm_BottomSheetTsx5, environment: var0
                    _fun44479: for (var _fun44479_ip = 0;;) switch (_fun44479_ip) {
                        case 0:
                            var0 = _closure2_slot13;
                            var8 = null;
                            var2 = var8 === var0;
                            if (!var2) {
                                _fun44479_ip = 26;
                                continue _fun44479
                            }
                        case 16:
                            var1 = _closure2_slot13;
                            var0 = undefined;
                            var2 = var0 === var1;
                        case 26:
                            var0 = false;
                            if (var2) {
                                _fun44479_ip = 33;
                                continue _fun44479
                            }
                        case 31:
                            var0 = true;
                        case 33:
                            var2 = _closure2_slot31;
                            var5 = var2.value;
                            var9 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var7 = 5;
                            var2 = var2[var7];
                            var6 = undefined;
                            var2 = var9.bind(var6)(var2);
                            var2 = var2.INITIAL_CONTAINER_HEIGHT;
                            if (!(var5 !== var2)) {
                                _fun44479_ip = 79;
                                continue _fun44479
                            }
                        case 77:
                            var0 = true;
                        case 79:
                            var5 = _closure2_slot29;
                            var2 = false;
                            if (!(var8 === var5)) {
                                _fun44479_ip = 103;
                                continue _fun44479
                            }
                        case 89:
                            var8 = _closure2_slot33;
                            var5 = 0;
                            var8.value = var5;
                            var2 = true;
                        case 103:
                            var5 = _closure2_slot33;
                            var8 = var5.value;
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var5 = var9.bind(var6)(var5);
                            var5 = var5.INITIAL_HANDLE_HEIGHT;
                            if (!(var8 !== var5)) {
                                _fun44479_ip = 141;
                                continue _fun44479
                            }
                        case 139:
                            var2 = true;
                        case 141:
                            var4 = _closure2_slot36;
                            var5 = var4.value;
                            var4 = 0;
                            var4 = var5[var4];
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var3 = var5.bind(var6)(var3);
                            var3 = var3.INITIAL_SNAP_POINT;
                            var1 = false;
                            if (!(var4 !== var3)) {
                                _fun44479_ip = 187;
                                continue _fun44479
                            }
                        case 185:
                            var1 = true;
                        case 187:
                            if (!var0) {
                                _fun44479_ip = 193;
                                continue _fun44479
                            }
                        case 190:
                            var0 = var2;
                        case 193:
                            if (!var0) {
                                _fun44479_ip = 199;
                                continue _fun44479
                            }
                        case 196:
                            var0 = var1;
                        case 199:
                            return var0;
                    }
                };
                var2 = {};
                var2._providedContainerHeight = var44;
                var2.animatedContainerHeight = var74;
                var49 = var11[var57];
                var49 = var5.bind(var3)(var49);
                var49 = var49.INITIAL_CONTAINER_HEIGHT;
                var2.INITIAL_CONTAINER_HEIGHT = var49;
                var2.handleComponent = var23;
                var2.animatedHandleHeight = var29;
                var49 = var11[var57];
                var49 = var5.bind(var3)(var49);
                var49 = var49.INITIAL_HANDLE_HEIGHT;
                var2.INITIAL_HANDLE_HEIGHT = var49;
                var2.animatedSnapPoints = var53;
                var49 = var11[var57];
                var49 = var5.bind(var3)(var49);
                var49 = var49.INITIAL_SNAP_POINT;
                var2.INITIAL_SNAP_POINT = var49;
                var7.__closure = var2;
                var2 = 16854996685215.0;
                var7.__workletHash = var2;
                var2 = _closure1_slot16;
                var7.__initData = var2;
                var2 = new Array(5);
                var2[0] = var44;
                var2[1] = var74;
                var2[2] = var29;
                var2[3] = var53;
                var2[4] = var23;
                var75 = var31.bind(var32)(var7, var2);
                var _closure2_slot47 = var75;
                var2 = var11[var51];
                var7 = var5.bind(var3)(var2);
                var2 = var7.useSharedValue;
                var92 = var2.bind(var7)(var52);
                var _closure2_slot48 = var92;
                var2 = var11[var51];
                var7 = var5.bind(var3)(var2);
                var2 = var7.useSharedValue;
                var7 = var2.bind(var7)(var52);
                var _closure2_slot49 = var7;
                var2 = var11[var51];
                var31 = var5.bind(var3)(var2);
                var2 = var31.useSharedValue;
                var78 = var2.bind(var31)(var52);
                var _closure2_slot50 = var78;
                var2 = var11[var51];
                var32 = var5.bind(var3)(var2);
                var31 = var32.useSharedValue;
                var55 = 7;
                var2 = var11[var55];
                var2 = var5.bind(var3)(var2);
                var2 = var2.State;
                var2 = var2.UNDETERMINED;
                var60 = var31.bind(var32)(var2);
                var _closure2_slot51 = var60;
                var2 = var11[var51];
                var32 = var5.bind(var3)(var2);
                var31 = var32.useSharedValue;
                var2 = var11[var55];
                var2 = var5.bind(var3)(var2);
                var2 = var2.State;
                var2 = var2.UNDETERMINED;
                var2 = var31.bind(var32)(var2);
                var _closure2_slot52 = var2;
                var31 = var11[var1];
                var32 = var5.bind(var3)(var31);
                var31 = var32.useScrollable;
                var31 = var31.bind(var32)();
                var102 = var31.animatedScrollableType;
                var _closure2_slot53 = var102;
                var95 = var31.animatedScrollableContentOffsetY;
                var _closure2_slot54 = var95;
                var97 = var31.animatedScrollableOverrideState;
                var _closure2_slot55 = var97;
                var94 = var31.isScrollableRefreshable;
                var _closure2_slot56 = var94;
                var82 = var31.setScrollableRef;
                var _closure2_slot57 = var82;
                var81 = var31.removeScrollableRef;
                var _closure2_slot58 = var81;
                var31 = var11[var1];
                var44 = var5.bind(var3)(var31);
                var32 = var44.useKeyboard;
                var31 = {};
                var31.includeBottomOffset = var48;
                var31 = var32.bind(var44)(var31);
                var73 = var31.state;
                var _closure2_slot59 = var73;
                var32 = var31.height;
                var _closure2_slot60 = var32;
                var69 = var31.animationDuration;
                var _closure2_slot61 = var69;
                var70 = var31.animationEasing;
                var _closure2_slot62 = var70;
                var96 = var31.shouldHandleKeyboardEvents;
                var _closure2_slot63 = var96;
                var31 = var11[var51];
                var44 = var5.bind(var3)(var31);
                var31 = var44.useSharedValue;
                var71 = var31.bind(var44)(var45);
                var _closure2_slot64 = var71;
                var31 = var11[var51];
                var44 = var5.bind(var3)(var31);
                var31 = var44.useReducedMotion;
                var31 = var31.bind(var44)();
                var _closure2_slot65 = var31;
                var44 = _closure1_slot4;
                var45 = new Array(2);
                var45[0] = var31;
                var45[1] = var62;
                var31 = function() { // Environment: var0
                    _fun44480: for (var _fun44480_ip = 0;;) switch (_fun44480_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            if (!var0) {
                                _fun44480_ip = 55;
                                continue _fun44480
                            }
                        case 10:
                            var3 = _closure2_slot8;
                            var6 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 4;
                            var0 = var0[var5];
                            var4 = undefined;
                            var0 = var6.bind(var4)(var0);
                            var0 = var0.ReduceMotion;
                            var0 = var0.System;
                            if (!(var3 === var0)) {
                                _fun44480_ip = 61;
                                continue _fun44480
                            }
                        case 55:
                            var0 = _closure2_slot65;
                            _fun44480_ip = 98;
                            continue _fun44480;
                        case 61:
                            var2 = _closure2_slot8;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.ReduceMotion;
                            var1 = var1.Always;
                            var0 = var2 === var1;
                        case 98:
                            return var0;
                    }
                };
                var48 = var44.bind(var3)(var31, var45);
                var _closure2_slot66 = var48;
                var31 = var11[var51];
                var49 = var5.bind(var3)(var31);
                var45 = var49.useSharedValue;
                var59 = 8;
                var31 = var11[var59];
                var31 = var5.bind(var3)(var31);
                var31 = var31.ANIMATION_STATE;
                var31 = var31.UNDETERMINED;
                var61 = var45.bind(var49)(var31);
                var _closure2_slot67 = var61;
                var31 = var11[var51];
                var49 = var5.bind(var3)(var31);
                var45 = var49.useSharedValue;
                var31 = var11[var59];
                var31 = var5.bind(var3)(var31);
                var31 = var31.ANIMATION_SOURCE;
                var31 = var31.MOUNT;
                var72 = var45.bind(var49)(var31);
                var _closure2_slot68 = var72;
                var31 = var11[var51];
                var50 = var5.bind(var3)(var31);
                var49 = var50.useDerivedValue;
                var45 = function() { // Original name: pnpm_BottomSheetTsx6, environment: var0
                    _fun44481: for (var _fun44481_ip = 0;;) switch (_fun44481_ip) {
                        case 0:
                            var1 = _closure2_slot42;
                            var2 = var1.value;
                            var1 = _closure2_slot39;
                            var1 = var1.value;
                            if (!(!(var2 >= var1))) {
                                _fun44481_ip = 381;
                                continue _fun44481
                            }
                        case 28:
                            var1 = _closure2_slot31;
                            var2 = var1.value;
                            var1 = _closure2_slot40;
                            var1 = var1.value;
                            var2 = var2 - var1;
                            var1 = _closure2_slot42;
                            var1 = var1.value;
                            if (!(var1 !== var2)) {
                                _fun44481_ip = 342;
                                continue _fun44481
                            }
                        case 66:
                            var1 = _closure2_slot64;
                            var6 = var1.value;
                            var1 = global;
                            var4 = var1.Math;
                            var3 = var4.max;
                            var1 = _closure2_slot31;
                            var5 = var1.value;
                            var1 = _closure2_slot40;
                            var1 = var1.value;
                            var1 = var1 + var6;
                            var1 = var5 - var1;
                            var6 = 0;
                            var7 = var3.bind(var4)(var6, var1);
                            var8 = _closure2_slot9;
                            var9 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var4 = 8;
                            var5 = var3[var4];
                            var3 = undefined;
                            var5 = var9.bind(var3)(var5);
                            var5 = var5.KEYBOARD_BEHAVIOR;
                            var5 = var5.interactive;
                            if (!(var8 === var5)) {
                                _fun44481_ip = 192;
                                continue _fun44481
                            }
                        case 167:
                            var5 = _closure2_slot48;
                            var5 = var5.value;
                            if (!var5) {
                                _fun44481_ip = 192;
                                continue _fun44481
                            }
                        case 179:
                            var5 = _closure2_slot42;
                            var5 = var5.value;
                            if (!(var5 !== var7)) {
                                _fun44481_ip = 311;
                                continue _fun44481
                            }
                        case 192:
                            var5 = _closure2_slot42;
                            var5 = var5.value;
                            if (!(var6 !== var5)) {
                                _fun44481_ip = 280;
                                continue _fun44481
                            }
                        case 205:
                            var0 = _closure2_slot42;
                            var0 = var0.value;
                            if (!(!(var0 < var2))) {
                                _fun44481_ip = 249;
                                continue _fun44481
                            }
                        case 218:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var4];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.SHEET_STATE;
                            var0 = var0.OPENED;
                            _fun44481_ip = 278;
                            continue _fun44481;
                        case 249:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var2 = var5.bind(var3)(var2);
                            var2 = var2.SHEET_STATE;
                            var0 = var2.OVER_EXTENDED;
                        case 278:
                            _fun44481_ip = 309;
                            continue _fun44481;
                        case 280:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var2 = var5.bind(var3)(var2);
                            var2 = var2.SHEET_STATE;
                            var0 = var2.FILL_PARENT;
                        case 309:
                            _fun44481_ip = 340;
                            continue _fun44481;
                        case 311:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var4];
                            var1 = var2.bind(var3)(var1);
                            var1 = var1.SHEET_STATE;
                            var0 = var1.EXTENDED;
                        case 340:
                            return var0;
                        case 342:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var0 = var0.SHEET_STATE;
                            var0 = var0.EXTENDED;
                            return var0;
                        case 381:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var0 = var0.SHEET_STATE;
                            var0 = var0.CLOSED;
                            return var0;
                    }
                };
                var31 = {};
                var31.animatedPosition = var30;
                var31.animatedClosedPosition = var76;
                var68 = var11[var59];
                var68 = var5.bind(var3)(var68);
                var68 = var68.SHEET_STATE;
                var31.SHEET_STATE = var68;
                var31.animatedContainerHeight = var74;
                var31.animatedSheetHeight = var103;
                var31.animatedKeyboardHeightInContainer = var71;
                var31.keyboardBehavior = var24;
                var68 = var11[var59];
                var68 = var5.bind(var3)(var68);
                var68 = var68.KEYBOARD_BEHAVIOR;
                var31.KEYBOARD_BEHAVIOR = var68;
                var31.isInTemporaryPosition = var92;
                var45.__closure = var31;
                var31 = 5310633624984.0;
                var45.__workletHash = var31;
                var31 = _closure1_slot17;
                var45.__initData = var31;
                var31 = new Array(7);
                var31[0] = var76;
                var31[1] = var74;
                var31[2] = var71;
                var31[3] = var30;
                var31[4] = var103;
                var31[5] = var92;
                var31[6] = var24;
                var100 = var49.bind(var50)(var45, var31);
                var _closure2_slot69 = var100;
                var31 = var11[var51];
                var50 = var5.bind(var3)(var31);
                var49 = var50.useDerivedValue;
                var45 = function() { // Original name: pnpm_BottomSheetTsx7, environment: var0
                    _fun44482: for (var _fun44482_ip = 0;;) switch (_fun44482_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun44482_ip = 52;
                                continue _fun44482
                            }
                        case 13:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var1);
                            var0 = var0.SCROLLABLE_STATE;
                            var0 = var0.UNLOCKED;
                            _fun44482_ip = 347;
                            continue _fun44482;
                        case 52:
                            var1 = _closure2_slot55;
                            var4 = var1.value;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var6 = 8;
                            var1 = var1[var6];
                            var5 = undefined;
                            var1 = var7.bind(var5)(var1);
                            var1 = var1.SCROLLABLE_STATE;
                            var1 = var1.UNDETERMINED;
                            if (!(var4 === var1)) {
                                _fun44482_ip = 335;
                                continue _fun44482
                            }
                        case 102:
                            var1 = _closure2_slot69;
                            var4 = var1.value;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var7.bind(var5)(var1);
                            var1 = var1.SHEET_STATE;
                            var1 = var1.FILL_PARENT;
                            if (!(var4 !== var1)) {
                                _fun44482_ip = 304;
                                continue _fun44482
                            }
                        case 147:
                            var1 = _closure2_slot69;
                            var4 = var1.value;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var7.bind(var5)(var1);
                            var1 = var1.SHEET_STATE;
                            var1 = var1.EXTENDED;
                            if (!(var4 !== var1)) {
                                _fun44482_ip = 304;
                                continue _fun44482
                            }
                        case 189:
                            var1 = _closure2_slot59;
                            var4 = var1.value;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var7.bind(var5)(var1);
                            var1 = var1.KEYBOARD_STATE;
                            var1 = var1.SHOWN;
                            if (!(var4 === var1)) {
                                _fun44482_ip = 273;
                                continue _fun44482
                            }
                        case 231:
                            var1 = _closure2_slot67;
                            var4 = var1.value;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var7.bind(var5)(var1);
                            var1 = var1.ANIMATION_STATE;
                            var1 = var1.RUNNING;
                            if (!(var4 !== var1)) {
                                _fun44482_ip = 304;
                                continue _fun44482
                            }
                        case 273:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.SCROLLABLE_STATE;
                            var1 = var1.LOCKED;
                            _fun44482_ip = 333;
                            continue _fun44482;
                        case 304:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.SCROLLABLE_STATE;
                            var1 = var3.UNLOCKED;
                        case 333:
                            _fun44482_ip = 344;
                            continue _fun44482;
                        case 335:
                            var2 = _closure2_slot55;
                            var1 = var2.value;
                        case 344:
                            var0 = var1;
                        case 347:
                            return var0;
                    }
                };
                var31 = {};
                var31.enableContentPanningGesture = var91;
                var68 = var11[var59];
                var68 = var5.bind(var3)(var68);
                var68 = var68.SCROLLABLE_STATE;
                var31.SCROLLABLE_STATE = var68;
                var31.animatedScrollableOverrideState = var97;
                var31.animatedSheetState = var100;
                var68 = var11[var59];
                var68 = var5.bind(var3)(var68);
                var68 = var68.SHEET_STATE;
                var31.SHEET_STATE = var68;
                var31.animatedKeyboardState = var73;
                var68 = var11[var59];
                var68 = var5.bind(var3)(var68);
                var68 = var68.KEYBOARD_STATE;
                var31.KEYBOARD_STATE = var68;
                var31.animatedAnimationState = var61;
                var68 = var11[var59];
                var68 = var5.bind(var3)(var68);
                var68 = var68.ANIMATION_STATE;
                var31.ANIMATION_STATE = var68;
                var45.__closure = var31;
                var31 = 1522258685135.0;
                var45.__workletHash = var31;
                var31 = _closure1_slot18;
                var45.__initData = var31;
                var31 = new Array(5);
                var31[0] = var91;
                var31[1] = var61;
                var31[2] = var73;
                var31[3] = var97;
                var31[4] = var100;
                var98 = var49.bind(var50)(var45, var31);
                var _closure2_slot70 = var98;
                var31 = var11[var51];
                var50 = var5.bind(var3)(var31);
                var49 = var50.useDerivedValue;
                var45 = function() { // Original name: pnpm_BottomSheetTsx8, environment: var0
                    _fun44483: for (var _fun44483_ip = 0;;) switch (_fun44483_ip) {
                        case 0:
                            var0 = _closure2_slot36;
                            var2 = var0.value;
                            var0 = var2.slice;
                            var2 = var0.bind(var2)();
                            var0 = var2.reverse;
                            var7 = var0.bind(var2)();
                            var0 = _closure2_slot36;
                            var2 = var0.value;
                            var0 = var2.slice;
                            var3 = var0.bind(var2)();
                            var2 = var3.map;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var0 = arg1;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var0);
                            var0 = var2.reverse;
                            var6 = var0.bind(var2)();
                            var2 = var7.push;
                            var0 = _closure2_slot31;
                            var0 = var0.value;
                            var0 = var2.bind(var7)(var0);
                            var0 = var6.push;
                            var2 = -1;
                            var0 = var0.bind(var6)(var2);
                            var0 = _closure2_slot47;
                            var0 = var0.value;
                            var4 = var2;
                            if (!var0) {
                                _fun44483_ip = 203;
                                continue _fun44483
                            }
                        case 126:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var0 = 4;
                            var2 = var10[var0];
                            var8 = undefined;
                            var5 = var9.bind(var8)(var2);
                            var3 = var5.interpolate;
                            var2 = _closure2_slot42;
                            var2 = var2.value;
                            var0 = var10[var0];
                            var0 = var9.bind(var8)(var0);
                            var0 = var0.Extrapolation;
                            var11 = var0.CLAMP;
                            var15 = var5;
                            var14 = var2;
                            var13 = var7;
                            var12 = var6;
                            var4 = var15[var3](var14, var13, var12, var11, var10);
                        case 203:
                            var3 = _closure2_slot11;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var7 = 8;
                            var0 = var0[var7];
                            var6 = undefined;
                            var0 = var5.bind(var6)(var0);
                            var0 = var0.KEYBOARD_INPUT_MODE;
                            var0 = var0.adjustResize;
                            if (!(var3 === var0)) {
                                _fun44483_ip = 344;
                                continue _fun44483
                            }
                        case 248:
                            var0 = _closure2_slot68;
                            var3 = var0.value;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var7];
                            var0 = var5.bind(var6)(var0);
                            var0 = var0.ANIMATION_SOURCE;
                            var0 = var0.KEYBOARD;
                            if (!(var3 === var0)) {
                                _fun44483_ip = 344;
                                continue _fun44483
                            }
                        case 290:
                            var0 = _closure2_slot67;
                            var3 = var0.value;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var7];
                            var0 = var5.bind(var6)(var0);
                            var0 = var0.ANIMATION_STATE;
                            var0 = var0.RUNNING;
                            if (!(var3 === var0)) {
                                _fun44483_ip = 344;
                                continue _fun44483
                            }
                        case 332:
                            var0 = _closure2_slot48;
                            var0 = var0.value;
                            if (var0) {
                                _fun44483_ip = 445;
                                continue _fun44483
                            }
                        case 344:
                            var0 = _closure2_slot68;
                            var5 = var0.value;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var7];
                            var0 = var3.bind(var6)(var0);
                            var0 = var0.ANIMATION_SOURCE;
                            var3 = var0.SNAP_POINT_CHANGE;
                            var0 = var4;
                            if (!(var5 === var3)) {
                                _fun44483_ip = 443;
                                continue _fun44483
                            }
                        case 389:
                            var3 = _closure2_slot67;
                            var3 = var3.value;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.ANIMATION_STATE;
                            var2 = var2.RUNNING;
                            var0 = var4;
                            if (!(var3 === var2)) {
                                _fun44483_ip = 443;
                                continue _fun44483
                            }
                        case 434:
                            var2 = _closure2_slot44;
                            var0 = var2.value;
                        case 443:
                            _fun44483_ip = 473;
                            continue _fun44483;
                        case 445:
                            var2 = global;
                            var3 = var2.Math;
                            var2 = var3.max;
                            var1 = _closure2_slot41;
                            var1 = var1.value;
                            var0 = var2.bind(var3)(var1, var4);
                        case 473:
                            return var0;
                    }
                };
                var31 = {};
                var31.animatedSnapPoints = var53;
                var31.animatedContainerHeight = var74;
                var31.isLayoutCalculated = var75;
                var68 = var11[var51];
                var68 = var5.bind(var3)(var68);
                var68 = var68.interpolate;
                var31.interpolate = var68;
                var31.animatedPosition = var30;
                var68 = var11[var51];
                var68 = var5.bind(var3)(var68);
                var68 = var68.Extrapolation;
                var31.Extrapolation = var68;
                var31.android_keyboardInputMode = var66;
                var68 = var11[var59];
                var68 = var5.bind(var3)(var68);
                var68 = var68.KEYBOARD_INPUT_MODE;
                var31.KEYBOARD_INPUT_MODE = var68;
                var31.animatedAnimationSource = var72;
                var68 = var11[var59];
                var68 = var5.bind(var3)(var68);
                var68 = var68.ANIMATION_SOURCE;
                var31.ANIMATION_SOURCE = var68;
                var31.animatedAnimationState = var61;
                var68 = var11[var59];
                var68 = var5.bind(var3)(var68);
                var68 = var68.ANIMATION_STATE;
                var31.ANIMATION_STATE = var68;
                var31.isInTemporaryPosition = var92;
                var31.animatedCurrentIndex = var54;
                var31.animatedNextPositionIndex = var56;
                var45.__closure = var31;
                var31 = 1383862303157.0;
                var45.__workletHash = var31;
                var31 = _closure1_slot19;
                var45.__initData = var31;
                var31 = new Array(10);
                var31[0] = var66;
                var31[1] = var72;
                var31[2] = var61;
                var31[3] = var74;
                var31[4] = var54;
                var31[5] = var56;
                var31[6] = var30;
                var31[7] = var53;
                var31[8] = var92;
                var31[9] = var75;
                var31 = var49.bind(var50)(var45, var31);
                var _closure2_slot71 = var31;
                var105 = _closure1_slot5;
                var45 = new Array(3);
                var45[0] = var47;
                var45[1] = var54;
                var45[2] = var6;
                var6 = function(arg0, arg1) { // Original name: handleOnChange, environment: var0
                    _fun44485: for (var _fun44485_ip = 0;;) switch (_fun44485_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot24;
                            if (!var1) {
                                _fun44485_ip = 118;
                                continue _fun44485
                            }
                        case 13:
                            var3 = _closure2_slot24;
                            var0 = _closure2_slot37;
                            var0 = var0.value;
                            if (!(var4 !== var0)) {
                                _fun44485_ip = 69;
                                continue _fun44485
                            }
                        case 30:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var0 = var0.SNAP_POINT_TYPE;
                            var2 = var0.PROVIDED;
                            _fun44485_ip = 106;
                            continue _fun44485;
                        case 69:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var5.bind(var0)(var1);
                            var0 = var0.SNAP_POINT_TYPE;
                            var2 = var0.DYNAMIC;
                        case 106:
                            var1 = undefined;
                            var0 = arg1;
                            var0 = var3.bind(var1)(var4, var0, var2);
                        case 118:
                            var0 = undefined;
                            return var0;
                    }
                };
                var47 = var105.bind(var3)(var6, var45);
                var _closure2_slot72 = var47;
                var6 = new Array(3);
                var6[0] = var4;
                var6[1] = var54;
                var6[2] = var30;
                var4 = function(arg0, arg1, arg2) { // Original name: handleOnAnimate, environment: var0
                    _fun44486: for (var _fun44486_ip = 0;;) switch (_fun44486_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = _closure2_slot26;
                            if (!var1) {
                                _fun44486_ip = 79;
                                continue _fun44486
                            }
                        case 13:
                            var1 = _closure2_slot41;
                            var1 = var1.value;
                            var1 = var6 === var1;
                            if (!var1) {
                                _fun44486_ip = 39;
                                continue _fun44486
                            }
                        case 29:
                            var2 = -1;
                            var1 = var2 !== var6;
                        case 39:
                            if (var1) {
                                _fun44486_ip = 79;
                                continue _fun44486
                            }
                        case 42:
                            var5 = _closure2_slot26;
                            var1 = _closure2_slot41;
                            var11 = var1.value;
                            var0 = _closure2_slot42;
                            var9 = var0.value;
                            var12 = undefined;
                            var8 = arg1;
                            var7 = arg2;
                            var10 = var6;
                            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
                        case 79:
                            var0 = undefined;
                            return var0;
                    }
                };
                var68 = var105.bind(var3)(var4, var6);
                var _closure2_slot73 = var68;
                var4 = var11[var51];
                var49 = var5.bind(var3)(var4);
                var45 = var49.useWorkletCallback;
                var6 = function() { // Original name: pnpm_BottomSheetTsx9, environment: var0
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 4;
                    var1 = var4[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var1);
                    var5 = var6.cancelAnimation;
                    var1 = _closure2_slot42;
                    var1 = var5.bind(var6)(var1);
                    var6 = _closure2_slot68;
                    var1 = 8;
                    var5 = var4[var1];
                    var5 = var3.bind(var0)(var5);
                    var5 = var5.ANIMATION_SOURCE;
                    var5 = var5.NONE;
                    var6.value = var5;
                    var2 = _closure2_slot67;
                    var1 = var4[var1];
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.ANIMATION_STATE;
                    var1 = var1.STOPPED;
                    var2.value = var1;
                    return var0;
                };
                var4 = {};
                var50 = var11[var51];
                var50 = var5.bind(var3)(var50);
                var50 = var50.cancelAnimation;
                var4.cancelAnimation = var50;
                var4.animatedPosition = var30;
                var4.animatedAnimationSource = var72;
                var50 = var11[var59];
                var50 = var5.bind(var3)(var50);
                var50 = var50.ANIMATION_SOURCE;
                var4.ANIMATION_SOURCE = var50;
                var4.animatedAnimationState = var61;
                var50 = var11[var59];
                var50 = var5.bind(var3)(var50);
                var50 = var50.ANIMATION_STATE;
                var4.ANIMATION_STATE = var50;
                var6.__closure = var4;
                var4 = 17031011772977.0;
                var6.__workletHash = var4;
                var4 = _closure1_slot20;
                var6.__initData = var4;
                var4 = new Array(3);
                var4[0] = var30;
                var4[1] = var61;
                var4[2] = var72;
                var6 = var45.bind(var49)(var6, var4);
                var _closure2_slot74 = var6;
                var4 = var11[var51];
                var49 = var5.bind(var3)(var4);
                var45 = var49.useWorkletCallback;
                var4 = function() { // Environment: var0
                    var0 = function(arg0) { // Original name: animateToPositionCompleted, environment: var0
                        _fun44489: for (var _fun44489_ip = 0;;) switch (_fun44489_ip) {
                            case 0:
                                var0 = arg0;
                                if (!var0) {
                                    _fun44489_ip = 219;
                                    continue _fun44489
                                }
                            case 9:
                                var1 = _closure2_slot68;
                                var4 = var1.value;
                                var6 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var2 = 8;
                                var1 = var1[var2];
                                var5 = undefined;
                                var1 = var6.bind(var5)(var1);
                                var1 = var1.ANIMATION_SOURCE;
                                var1 = var1.MOUNT;
                                if (!(var4 === var1)) {
                                    _fun44489_ip = 74;
                                    continue _fun44489
                                }
                            case 62:
                                var4 = _closure2_slot45;
                                var1 = true;
                                var4.value = var1;
                            case 74:
                                var4 = _closure2_slot49;
                                var1 = false;
                                var4.value = var1;
                                var7 = _closure2_slot68;
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = var6[var2];
                                var3 = var4.bind(var5)(var3);
                                var3 = var3.ANIMATION_SOURCE;
                                var3 = var3.NONE;
                                var7.value = var3;
                                var3 = _closure2_slot67;
                                var2 = var6[var2];
                                var2 = var4.bind(var5)(var2);
                                var2 = var2.ANIMATION_STATE;
                                var2 = var2.STOPPED;
                                var3.value = var2;
                                var7 = _closure2_slot43;
                                var2 = 5;
                                var3 = var6[var2];
                                var3 = var4.bind(var5)(var3);
                                var3 = var3.INITIAL_VALUE;
                                var7.value = var3;
                                var3 = _closure2_slot44;
                                var2 = var6[var2];
                                var2 = var4.bind(var5)(var2);
                                var2 = var2.INITIAL_VALUE;
                                var3.value = var2;
                                var0 = _closure2_slot50;
                                var0.value = var1;
                            case 219:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = {};
                    var1 = false;
                    var2.__DEV__ = var1;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.runOnJS;
                    var2.runOnJS = var3;
                    var3 = 9;
                    var3 = var7[var3];
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.print;
                    var2.print = var3;
                    var4 = _closure2_slot41;
                    var2.animatedCurrentIndex = var4;
                    var4 = _closure2_slot43;
                    var2.animatedNextPosition = var4;
                    var4 = _closure2_slot44;
                    var2.animatedNextPositionIndex = var4;
                    var4 = _closure2_slot68;
                    var2.animatedAnimationSource = var4;
                    var4 = 8;
                    var8 = var7[var4];
                    var8 = var6.bind(var5)(var8);
                    var8 = var8.ANIMATION_SOURCE;
                    var2.ANIMATION_SOURCE = var8;
                    var8 = _closure2_slot45;
                    var2.isAnimatedOnMount = var8;
                    var8 = _closure2_slot49;
                    var2.isForcedClosing = var8;
                    var8 = _closure2_slot67;
                    var2.animatedAnimationState = var8;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.ANIMATION_STATE;
                    var2.ANIMATION_STATE = var4;
                    var4 = 5;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.INITIAL_VALUE;
                    var2.INITIAL_VALUE = var4;
                    var3 = _closure2_slot50;
                    var2.animatedContainerHeightDidChange = var3;
                    var0.__closure = var2;
                    var2 = 16634512058026.0;
                    var0.__workletHash = var2;
                    var1 = _closure1_slot21;
                    var0.__initData = var1;
                    return var0;
                };
                var4 = var4.bind(var3)();
                var4 = var45.bind(var49)(var4);
                var _closure2_slot75 = var4;
                var4 = var11[var51];
                var50 = var5.bind(var3)(var4);
                var49 = var50.useWorkletCallback;
                var4 = function() { // Environment: var0
                    var0 = function(arg0, arg1) { // Original name: animateToPosition, environment: var0
                        _fun44491: for (var _fun44491_ip = 0;;) switch (_fun44491_ip) {
                            case 0:
                                var8 = arg0;
                                var9 = arg1;
                                var0 = undefined;
                                var3 = undefined;
                                var2 = arguments.length;
                                var1 = 2;
                                var4 = var2 > var1;
                                var6 = 0;
                                if (!var4) {
                                    _fun44491_ip = 39;
                                    continue _fun44491
                                }
                            case 25:
                                var4 = arguments[var1];
                                var6 = 0;
                                if (!(var0 !== var4)) {
                                    _fun44491_ip = 39;
                                    continue _fun44491
                                }
                            case 35:
                                var6 = arguments[var1];
                            case 39:
                                var4 = arguments.length;
                                var1 = 3;
                                var4 = var4 > var1;
                                var7 = undefined;
                                if (!var4) {
                                    _fun44491_ip = 58;
                                    continue _fun44491
                                }
                            case 54:
                                var7 = arguments[var1];
                            case 58:
                                var1 = _closure2_slot42;
                                var1 = var1.value;
                                if (!(var8 !== var1)) {
                                    _fun44491_ip = 520;
                                    continue _fun44491
                                }
                            case 77:
                                if (!(var0 !== var8)) {
                                    _fun44491_ip = 520;
                                    continue _fun44491
                                }
                            case 84:
                                var1 = _closure2_slot67;
                                var4 = var1.value;
                                var10 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var12 = 8;
                                var3 = var3[var12];
                                var3 = var10.bind(var0)(var3);
                                var3 = var3.ANIMATION_STATE;
                                var3 = var3.RUNNING;
                                if (!(var4 === var3)) {
                                    _fun44491_ip = 148;
                                    continue _fun44491
                                }
                            case 132:
                                var3 = _closure2_slot43;
                                var3 = var3.value;
                                if (!(var8 !== var3)) {
                                    _fun44491_ip = 520;
                                    continue _fun44491
                                }
                            case 148:
                                var3 = _closure2_slot67;
                                var4 = var3.value;
                                var10 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var12];
                                var3 = var10.bind(var0)(var3);
                                var3 = var3.ANIMATION_STATE;
                                var3 = var3.RUNNING;
                                if (!(var4 === var3)) {
                                    _fun44491_ip = 198;
                                    continue _fun44491
                                }
                            case 190:
                                var3 = _closure2_slot74;
                                var3 = var3.bind(var0)();
                            case 198:
                                var11 = _closure2_slot67;
                                var10 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var4 = var3[var12];
                                var4 = var10.bind(var0)(var4);
                                var4 = var4.ANIMATION_STATE;
                                var4 = var4.RUNNING;
                                var11.value = var4;
                                var4 = _closure2_slot68;
                                var4.value = var9;
                                var4 = _closure2_slot43;
                                var4.value = var8;
                                var4 = _closure2_slot59;
                                var4 = var4.value;
                                var3 = var3[var12];
                                var3 = var10.bind(var0)(var3);
                                var3 = var3.KEYBOARD_STATE;
                                var3 = var3.SHOWN;
                                var3 = var4 === var3;
                                if (!var3) {
                                    _fun44491_ip = 331;
                                    continue _fun44491
                                }
                            case 294:
                                var10 = _closure2_slot9;
                                var11 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var4 = var4[var12];
                                var4 = var11.bind(var0)(var4);
                                var4 = var4.KEYBOARD_BEHAVIOR;
                                var4 = var4.extend;
                                var3 = var10 !== var4;
                            case 331:
                                if (!var3) {
                                    _fun44491_ip = 347;
                                    continue _fun44491
                                }
                            case 334:
                                var4 = _closure2_slot42;
                                var4 = var4.value;
                                var3 = var8 < var4;
                            case 347:
                                var2 = 0;
                                if (!var3) {
                                    _fun44491_ip = 361;
                                    continue _fun44491
                                }
                            case 352:
                                var3 = _closure2_slot64;
                                var2 = var3.value;
                            case 361:
                                var3 = _closure2_slot44;
                                var4 = _closure2_slot36;
                                var10 = var4.value;
                                var4 = var10.indexOf;
                                var2 = var8 + var2;
                                var2 = var4.bind(var10)(var2);
                                var3.value = var2;
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 4;
                                var1 = var4[var1];
                                var10 = var3.bind(var0)(var1);
                                var2 = var10.runOnJS;
                                var1 = _closure2_slot73;
                                var2 = var2.bind(var10)(var1);
                                var1 = _closure2_slot44;
                                var1 = var1.value;
                                var1 = var2.bind(var0)(var1, var8, var9);
                                var2 = _closure2_slot42;
                                var1 = 9;
                                var1 = var4[var1];
                                var4 = var3.bind(var0)(var1);
                                var3 = var4.animate;
                                var1 = {};
                                var1.point = var8;
                                if (var7) {
                                    _fun44491_ip = 481;
                                    continue _fun44491
                                }
                            case 477:
                                var7 = _closure2_slot0;
                            case 481:
                                var1.configs = var7;
                                var1.velocity = var6;
                                var6 = _closure2_slot8;
                                var1.overrideReduceMotion = var6;
                                var5 = _closure2_slot75;
                                var1.onComplete = var5;
                                var1 = var3.bind(var4)(var1);
                                var2.value = var1;
                            case 520:
                                return var0;
                        }
                    };
                    var2 = {};
                    var1 = false;
                    var2.__DEV__ = var1;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.runOnJS;
                    var2.runOnJS = var3;
                    var4 = 9;
                    var3 = var7[var4];
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.print;
                    var2.print = var3;
                    var8 = _closure2_slot42;
                    var2.animatedPosition = var8;
                    var8 = _closure2_slot67;
                    var2.animatedAnimationState = var8;
                    var8 = 8;
                    var9 = var7[var8];
                    var9 = var6.bind(var5)(var9);
                    var9 = var9.ANIMATION_STATE;
                    var2.ANIMATION_STATE = var9;
                    var9 = _closure2_slot43;
                    var2.animatedNextPosition = var9;
                    var9 = _closure2_slot74;
                    var2.stopAnimation = var9;
                    var9 = _closure2_slot68;
                    var2.animatedAnimationSource = var9;
                    var9 = _closure2_slot59;
                    var2.animatedKeyboardState = var9;
                    var9 = var7[var8];
                    var9 = var6.bind(var5)(var9);
                    var9 = var9.KEYBOARD_STATE;
                    var2.KEYBOARD_STATE = var9;
                    var9 = _closure2_slot9;
                    var2.keyboardBehavior = var9;
                    var8 = var7[var8];
                    var8 = var6.bind(var5)(var8);
                    var8 = var8.KEYBOARD_BEHAVIOR;
                    var2.KEYBOARD_BEHAVIOR = var8;
                    var8 = _closure2_slot64;
                    var2.animatedKeyboardHeightInContainer = var8;
                    var8 = _closure2_slot44;
                    var2.animatedNextPositionIndex = var8;
                    var8 = _closure2_slot36;
                    var2.animatedSnapPoints = var8;
                    var8 = _closure2_slot73;
                    var2.handleOnAnimate = var8;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.animate;
                    var2.animate = var4;
                    var4 = _closure2_slot0;
                    var2._providedAnimationConfigs = var4;
                    var4 = _closure2_slot8;
                    var2._providedOverrideReduceMotion = var4;
                    var3 = _closure2_slot75;
                    var2.animateToPositionCompleted = var3;
                    var0.__closure = var2;
                    var2 = 11829586443894.0;
                    var0.__workletHash = var2;
                    var1 = _closure1_slot22;
                    var0.__initData = var1;
                    return var0;
                };
                var45 = var4.bind(var3)();
                var4 = new Array(4);
                var4[0] = var68;
                var4[1] = var24;
                var4[2] = var65;
                var4[3] = var62;
                var77 = var49.bind(var50)(var45, var4);
                var _closure2_slot76 = var77;
                var4 = var11[var51];
                var65 = var5.bind(var3)(var4);
                var62 = var65.useWorkletCallback;
                var45 = function(arg0) { // Original name: setToPosition, environment: var0
                    _fun44492: for (var _fun44492_ip = 0;;) switch (_fun44492_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot42;
                            var1 = var1.value;
                            var1 = var2 === var1;
                            if (var1) {
                                _fun44492_ip = 28;
                                continue _fun44492
                            }
                        case 22:
                            var3 = undefined;
                            var1 = var3 === var2;
                        case 28:
                            if (var1) {
                                _fun44492_ip = 100;
                                continue _fun44492
                            }
                        case 31:
                            var3 = _closure2_slot67;
                            var4 = var3.value;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 8;
                            var5 = var5[var3];
                            var3 = undefined;
                            var3 = var6.bind(var3)(var5);
                            var3 = var3.ANIMATION_STATE;
                            var3 = var3.RUNNING;
                            var3 = var4 === var3;
                            if (!var3) {
                                _fun44492_ip = 97;
                                continue _fun44492
                            }
                        case 84:
                            var4 = _closure2_slot43;
                            var4 = var4.value;
                            var3 = var2 === var4;
                        case 97:
                            var1 = var3;
                        case 100:
                            if (var1) {
                                _fun44492_ip = 175;
                                continue _fun44492
                            }
                        case 103:
                            var1 = _closure2_slot43;
                            var1.value = var2;
                            var3 = _closure2_slot44;
                            var1 = _closure2_slot36;
                            var4 = var1.value;
                            var1 = var4.indexOf;
                            var1 = var1.bind(var4)(var2);
                            var3.value = var1;
                            var3 = _closure2_slot74;
                            var1 = undefined;
                            var1 = var3.bind(var1)();
                            var1 = _closure2_slot42;
                            var1.value = var2;
                            var1 = _closure2_slot50;
                            var0 = false;
                            var1.value = var0;
                        case 175:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = {};
                var4.animatedPosition = var30;
                var4.animatedAnimationState = var61;
                var49 = var11[var59];
                var49 = var5.bind(var3)(var49);
                var49 = var49.ANIMATION_STATE;
                var4.ANIMATION_STATE = var49;
                var4.animatedNextPosition = var58;
                var4.__DEV__ = var52;
                var49 = var11[var51];
                var49 = var5.bind(var3)(var49);
                var49 = var49.runOnJS;
                var4.runOnJS = var49;
                var50 = 9;
                var49 = var11[var50];
                var49 = var5.bind(var3)(var49);
                var49 = var49.print;
                var4.print = var49;
                var49 = _closure1_slot39;
                var4.BottomSheet = var49;
                var4.animatedNextPositionIndex = var56;
                var4.animatedSnapPoints = var53;
                var4.stopAnimation = var6;
                var4.animatedContainerHeightDidChange = var78;
                var45.__closure = var4;
                var4 = 1470510512522.0;
                var45.__workletHash = var4;
                var4 = _closure1_slot23;
                var45.__initData = var4;
                var4 = new Array(0);
                var79 = var62.bind(var65)(var45, var4);
                var _closure2_slot77 = var79;
                var4 = var11[var51];
                var65 = var5.bind(var3)(var4);
                var62 = var65.useWorkletCallback;
                var4 = function() { // Environment: var0
                    var0 = function(arg0) { // Original name: getEvaluatedPosition, environment: var0
                        _fun44494: for (var _fun44494_ip = 0;;) switch (_fun44494_ip) {
                            case 0:
                                var0 = _closure2_slot41;
                                var1 = var0.value;
                                var0 = _closure2_slot36;
                                var0 = var0.value;
                                var3 = _closure2_slot59;
                                var5 = var3.value;
                                var3 = _closure2_slot38;
                                var3 = var3.value;
                                var9 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var8 = 8;
                                var6 = var6[var8];
                                var7 = undefined;
                                var6 = var9.bind(var7)(var6);
                                var6 = var6.ANIMATION_SOURCE;
                                var9 = var6.KEYBOARD;
                                var6 = arg0;
                                if (!(var6 === var9)) {
                                    _fun44494_ip = 249;
                                    continue _fun44494
                                }
                            case 86:
                                var9 = _closure2_slot10;
                                var10 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var6 = var6[var8];
                                var6 = var10.bind(var7)(var6);
                                var6 = var6.KEYBOARD_BLUR_BEHAVIOR;
                                var6 = var6.restore;
                                if (!(var9 === var6)) {
                                    _fun44494_ip = 249;
                                    continue _fun44494
                                }
                            case 126:
                                var9 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var6 = var6[var8];
                                var6 = var9.bind(var7)(var6);
                                var6 = var6.KEYBOARD_STATE;
                                var6 = var6.HIDDEN;
                                if (!(var5 === var6)) {
                                    _fun44494_ip = 249;
                                    continue _fun44494
                                }
                            case 159:
                                var6 = _closure2_slot51;
                                var9 = var6.value;
                                var10 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var11 = 7;
                                var6 = var6[var11];
                                var6 = var10.bind(var7)(var6);
                                var6 = var6.State;
                                var6 = var6.ACTIVE;
                                if (!(var9 !== var6)) {
                                    _fun44494_ip = 249;
                                    continue _fun44494
                                }
                            case 204:
                                var6 = _closure2_slot52;
                                var9 = var6.value;
                                var10 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var6 = var6[var11];
                                var6 = var10.bind(var7)(var6);
                                var6 = var6.State;
                                var6 = var6.ACTIVE;
                                if (!(var9 === var6)) {
                                    _fun44494_ip = 619;
                                    continue _fun44494
                                }
                            case 249:
                                var9 = _closure2_slot9;
                                var10 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var6 = var6[var8];
                                var6 = var10.bind(var7)(var6);
                                var6 = var6.KEYBOARD_BEHAVIOR;
                                var6 = var6.extend;
                                if (!(var9 === var6)) {
                                    _fun44494_ip = 322;
                                    continue _fun44494
                                }
                            case 286:
                                var9 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var6 = var6[var8];
                                var6 = var9.bind(var7)(var6);
                                var6 = var6.KEYBOARD_STATE;
                                var6 = var6.SHOWN;
                                if (!(var5 !== var6)) {
                                    _fun44494_ip = 617;
                                    continue _fun44494
                                }
                            case 322:
                                var9 = _closure2_slot9;
                                var10 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var6 = var6[var8];
                                var6 = var10.bind(var7)(var6);
                                var6 = var6.KEYBOARD_BEHAVIOR;
                                var6 = var6.fillParent;
                                if (!(var9 === var6)) {
                                    _fun44494_ip = 395;
                                    continue _fun44494
                                }
                            case 359:
                                var9 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var6 = var6[var8];
                                var6 = var9.bind(var7)(var6);
                                var6 = var6.KEYBOARD_STATE;
                                var6 = var6.SHOWN;
                                if (!(var5 !== var6)) {
                                    _fun44494_ip = 601;
                                    continue _fun44494
                                }
                            case 395:
                                var9 = _closure2_slot9;
                                var10 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var6 = var6[var8];
                                var6 = var10.bind(var7)(var6);
                                var6 = var6.KEYBOARD_BEHAVIOR;
                                var6 = var6.interactive;
                                if (!(var9 === var6)) {
                                    _fun44494_ip = 477;
                                    continue _fun44494
                                }
                            case 432:
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var4 = var4[var8];
                                var4 = var6.bind(var7)(var4);
                                var4 = var4.KEYBOARD_STATE;
                                var4 = var4.SHOWN;
                                if (!(var5 === var4)) {
                                    _fun44494_ip = 477;
                                    continue _fun44494
                                }
                            case 465:
                                var5 = _closure2_slot11;
                                var4 = 'adjustResize';
                                if (!(var4 === var5)) {
                                    _fun44494_ip = 553;
                                    continue _fun44494
                                }
                            case 477:
                                var4 = _closure2_slot48;
                                var4 = var4.value;
                                if (var4) {
                                    _fun44494_ip = 542;
                                    continue _fun44494
                                }
                            case 489:
                                var4 = _closure2_slot45;
                                var4 = var4.value;
                                if (var4) {
                                    _fun44494_ip = 536;
                                    continue _fun44494
                                }
                            case 501:
                                var5 = _closure2_slot1;
                                var4 = -1;
                                if (!(var4 !== var5)) {
                                    _fun44494_ip = 525;
                                    continue _fun44494
                                }
                            case 515:
                                var4 = _closure2_slot1;
                                var4 = var0[var4];
                                _fun44494_ip = 534;
                                continue _fun44494;
                            case 525:
                                var5 = _closure2_slot39;
                                var4 = var5.value;
                            case 534:
                                _fun44494_ip = 540;
                                continue _fun44494;
                            case 536:
                                var4 = var0[var1];
                            case 540:
                                _fun44494_ip = 551;
                                continue _fun44494;
                            case 542:
                                var5 = _closure2_slot42;
                                var4 = var5.value;
                            case 551:
                                return var4;
                            case 553:
                                var5 = _closure2_slot48;
                                var4 = true;
                                var5.value = var4;
                                var4 = _closure2_slot64;
                                var4 = var4.value;
                                var5 = global;
                                var7 = var5.Math;
                                var6 = var7.max;
                                var5 = var3 - var4;
                                var4 = 0;
                                var4 = var6.bind(var7)(var4, var5);
                                return var4;
                            case 601:
                                var5 = _closure2_slot48;
                                var4 = true;
                                var5.value = var4;
                                var4 = 0;
                                return var4;
                            case 617:
                                return var3;
                            case 619:
                                var3 = _closure2_slot48;
                                var2 = false;
                                var3.value = var2;
                                var0 = var0[var1];
                                return var0;
                        }
                    };
                    var2 = {};
                    var1 = _closure2_slot41;
                    var2.animatedCurrentIndex = var1;
                    var1 = _closure2_slot36;
                    var2.animatedSnapPoints = var1;
                    var1 = _closure2_slot59;
                    var2.animatedKeyboardState = var1;
                    var1 = _closure2_slot38;
                    var2.animatedHighestSnapPoint = var1;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var8 = var7[var4];
                    var5 = undefined;
                    var8 = var6.bind(var5)(var8);
                    var8 = var8.ANIMATION_SOURCE;
                    var2.ANIMATION_SOURCE = var8;
                    var8 = _closure2_slot10;
                    var2.keyboardBlurBehavior = var8;
                    var8 = var7[var4];
                    var8 = var6.bind(var5)(var8);
                    var8 = var8.KEYBOARD_BLUR_BEHAVIOR;
                    var2.KEYBOARD_BLUR_BEHAVIOR = var8;
                    var8 = var7[var4];
                    var8 = var6.bind(var5)(var8);
                    var8 = var8.KEYBOARD_STATE;
                    var2.KEYBOARD_STATE = var8;
                    var8 = _closure2_slot51;
                    var2.animatedContentGestureState = var8;
                    var8 = 7;
                    var8 = var7[var8];
                    var8 = var6.bind(var5)(var8);
                    var8 = var8.State;
                    var2.State = var8;
                    var8 = _closure2_slot52;
                    var2.animatedHandleGestureState = var8;
                    var8 = _closure2_slot48;
                    var2.isInTemporaryPosition = var8;
                    var8 = _closure2_slot9;
                    var2.keyboardBehavior = var8;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.KEYBOARD_BEHAVIOR;
                    var2.KEYBOARD_BEHAVIOR = var4;
                    var4 = _closure1_slot8;
                    var2.Platform = var4;
                    var4 = _closure2_slot11;
                    var2.android_keyboardInputMode = var4;
                    var4 = _closure2_slot64;
                    var2.animatedKeyboardHeightInContainer = var4;
                    var4 = _closure2_slot42;
                    var2.animatedPosition = var4;
                    var4 = _closure2_slot45;
                    var2.isAnimatedOnMount = var4;
                    var4 = _closure2_slot1;
                    var2._providedIndex = var4;
                    var3 = _closure2_slot39;
                    var2.animatedClosedPosition = var3;
                    var0.__closure = var2;
                    var2 = 10275779842691.0;
                    var0.__workletHash = var2;
                    var1 = _closure1_slot24;
                    var0.__initData = var1;
                    return var0;
                };
                var45 = var4.bind(var3)();
                var4 = new Array(13);
                var4[0] = var60;
                var4[1] = var54;
                var4[2] = var2;
                var4[3] = var99;
                var4[4] = var71;
                var4[5] = var73;
                var4[6] = var30;
                var4[7] = var53;
                var4[8] = var92;
                var4[9] = var8;
                var4[10] = var24;
                var4[11] = var67;
                var4[12] = var12;
                var65 = var62.bind(var65)(var45, var4);
                var _closure2_slot78 = var65;
                var4 = var11[var51];
                var68 = var5.bind(var3)(var4);
                var62 = var68.useWorkletCallback;
                var4 = function() { // Environment: var0
                    var0 = function(arg0, arg1) { // Original name: evaluatePosition, environment: var0
                        _fun44496: for (var _fun44496_ip = 0;;) switch (_fun44496_ip) {
                            case 0:
                                var4 = arg0;
                                var3 = arg1;
                                var1 = _closure2_slot49;
                                var1 = var1.value;
                                if (!var1) {
                                    _fun44496_ip = 65;
                                    continue _fun44496
                                }
                            case 21:
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 8;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var5.bind(var1)(var2);
                                var1 = var1.ANIMATION_SOURCE;
                                var1 = var1.USER;
                                if (!(var4 === var1)) {
                                    _fun44496_ip = 489;
                                    continue _fun44496
                                }
                            case 65:
                                var1 = _closure2_slot47;
                                var1 = var1.value;
                                if (!var1) {
                                    _fun44496_ip = 489;
                                    continue _fun44496
                                }
                            case 80:
                                var1 = _closure2_slot78;
                                var2 = undefined;
                                var5 = var1.bind(var2)(var4);
                                var1 = _closure2_slot45;
                                var1 = var1.value;
                                if (var1) {
                                    _fun44496_ip = 194;
                                    continue _fun44496
                                }
                            case 103:
                                var1 = _closure2_slot2;
                                if (var1) {
                                    _fun44496_ip = 136;
                                    continue _fun44496
                                }
                            case 110:
                                var1 = _closure2_slot77;
                                var1 = var1.bind(var2)(var5);
                                var6 = _closure2_slot45;
                                var1 = true;
                                var6.value = var1;
                                _fun44496_ip = 489;
                                continue _fun44496;
                            case 136:
                                var6 = _closure2_slot76;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 8;
                                var1 = var8[var1];
                                var1 = var7.bind(var2)(var1);
                                var1 = var1.ANIMATION_SOURCE;
                                var12 = var1.MOUNT;
                                var14 = undefined;
                                var13 = var5;
                                var11 = undefined;
                                var10 = var3;
                                var1 = var14[var6](var13, var12, var11, var10, var9);
                                _fun44496_ip = 489;
                                continue _fun44496;
                            case 194:
                                var1 = _closure2_slot67;
                                var7 = var1.value;
                                var9 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var8 = 8;
                                var6 = var6[var8];
                                var6 = var9.bind(var2)(var6);
                                var6 = var6.ANIMATION_STATE;
                                var6 = var6.RUNNING;
                                if (!(var7 === var6)) {
                                    _fun44496_ip = 320;
                                    continue _fun44496
                                }
                            case 242:
                                var6 = _closure2_slot44;
                                var7 = var6.value;
                                var6 = -1;
                                if (!(var6 === var7)) {
                                    _fun44496_ip = 295;
                                    continue _fun44496
                                }
                            case 261:
                                var6 = _closure2_slot48;
                                var6 = var6.value;
                                if (var6) {
                                    _fun44496_ip = 295;
                                    continue _fun44496
                                }
                            case 273:
                                var7 = _closure2_slot77;
                                var6 = _closure2_slot39;
                                var6 = var6.value;
                                var6 = var7.bind(var2)(var6);
                                var6 = undefined;
                                return var6;
                            case 295:
                                var6 = _closure2_slot44;
                                var7 = var6.value;
                                var6 = _closure2_slot41;
                                var6 = var6.value;
                                if (!(var7 === var6)) {
                                    _fun44496_ip = 493;
                                    continue _fun44496
                                }
                            case 320:
                                var6 = _closure2_slot67;
                                var6 = var6.value;
                                var7 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var8];
                                var1 = var7.bind(var2)(var1);
                                var1 = var1.ANIMATION_STATE;
                                var1 = var1.RUNNING;
                                if (!(var6 !== var1)) {
                                    _fun44496_ip = 445;
                                    continue _fun44496
                                }
                            case 362:
                                var1 = _closure2_slot41;
                                var6 = var1.value;
                                var1 = -1;
                                if (!(var1 === var6)) {
                                    _fun44496_ip = 445;
                                    continue _fun44496
                                }
                            case 381:
                                var1 = _closure2_slot66;
                                if (!var1) {
                                    _fun44496_ip = 423;
                                    continue _fun44496
                                }
                            case 388:
                                var1 = _closure2_slot36;
                                var6 = var1.value;
                                var1 = _closure2_slot71;
                                var1 = var1.value;
                                var6 = var6[var1];
                                var1 = _closure2_slot42;
                                var1 = var1.value;
                                if (!(var6 === var1)) {
                                    _fun44496_ip = 443;
                                    continue _fun44496
                                }
                            case 423:
                                var6 = _closure2_slot77;
                                var1 = _closure2_slot39;
                                var1 = var1.value;
                                var1 = var6.bind(var2)(var1);
                                _fun44496_ip = 489;
                                continue _fun44496;
                            case 443:
                                return var2;
                            case 445:
                                var1 = _closure2_slot50;
                                var1 = var1.value;
                                if (var1) {
                                    _fun44496_ip = 480;
                                    continue _fun44496
                                }
                            case 457:
                                var1 = _closure2_slot76;
                                var14 = undefined;
                                var13 = var5;
                                var12 = var4;
                                var11 = undefined;
                                var10 = var3;
                                var1 = var14[var1](var13, var12, var11, var10, var9);
                                _fun44496_ip = 489;
                                continue _fun44496;
                            case 480:
                                var1 = _closure2_slot77;
                                var1 = var1.bind(var2)(var5);
                            case 489:
                                var1 = undefined;
                                return var1;
                            case 493:
                                var1 = _closure2_slot76;
                                var5 = _closure2_slot36;
                                var5 = var5.value;
                                var0 = _closure2_slot44;
                                var0 = var0.value;
                                var13 = var5[var0];
                                var14 = undefined;
                                var12 = var4;
                                var11 = undefined;
                                var10 = var3;
                                var0 = var14[var1](var13, var12, var11, var10, var9);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = {};
                    var1 = _closure2_slot49;
                    var2.isForcedClosing = var1;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var8 = var7[var4];
                    var5 = undefined;
                    var8 = var6.bind(var5)(var8);
                    var8 = var8.ANIMATION_SOURCE;
                    var2.ANIMATION_SOURCE = var8;
                    var8 = _closure2_slot47;
                    var2.isLayoutCalculated = var8;
                    var8 = _closure2_slot78;
                    var2.getEvaluatedPosition = var8;
                    var8 = _closure2_slot45;
                    var2.isAnimatedOnMount = var8;
                    var8 = _closure2_slot2;
                    var2.animateOnMount = var8;
                    var8 = _closure2_slot76;
                    var2.animateToPosition = var8;
                    var8 = _closure2_slot77;
                    var2.setToPosition = var8;
                    var8 = _closure2_slot67;
                    var2.animatedAnimationState = var8;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.ANIMATION_STATE;
                    var2.ANIMATION_STATE = var4;
                    var4 = _closure2_slot44;
                    var2.animatedNextPositionIndex = var4;
                    var4 = _closure2_slot48;
                    var2.isInTemporaryPosition = var4;
                    var4 = _closure2_slot39;
                    var2.animatedClosedPosition = var4;
                    var4 = _closure2_slot41;
                    var2.animatedCurrentIndex = var4;
                    var4 = _closure2_slot36;
                    var2.animatedSnapPoints = var4;
                    var4 = _closure2_slot66;
                    var2.reduceMotion = var4;
                    var4 = _closure2_slot71;
                    var2.animatedIndex = var4;
                    var4 = _closure2_slot42;
                    var2.animatedPosition = var4;
                    var3 = _closure2_slot50;
                    var2.animatedContainerHeightDidChange = var3;
                    var0.__closure = var2;
                    var2 = 15576428237314.0;
                    var0.__workletHash = var2;
                    var1 = _closure1_slot25;
                    var0.__initData = var1;
                    return var0;
                };
                var45 = var4.bind(var3)();
                var4 = new Array(4);
                var4[0] = var65;
                var4[1] = var77;
                var4[2] = var79;
                var4[3] = var48;
                var68 = var62.bind(var68)(var45, var4);
                var _closure2_slot79 = var68;
                var1 = var11[var1];
                var45 = var5.bind(var3)(var1);
                var4 = var45.useStableCallback;
                var1 = function(arg0, arg1) { // Original name: handleSnapToIndex, environment: var0
                    _fun44497: for (var _fun44497_ip = 0;;) switch (_fun44497_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = _closure2_slot36;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var3 = _closure2_slot47;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun44497_ip = 268;
                                continue _fun44497
                            }
                        case 38:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 10;
                            var3 = var5[var3];
                            var5 = undefined;
                            var7 = var4.bind(var5)(var3);
                            var3 = -1;
                            var4 = var6 >= var3;
                            if (!var4) {
                                _fun44497_ip = 92;
                                continue _fun44497
                            }
                        case 76:
                            var8 = var1.length;
                            var3 = 1;
                            var3 = var8 - var3;
                            var4 = var6 <= var3;
                        case 92:
                            var8 = var1.length;
                            var3 = 1;
                            var8 = var8 - var3;
                            var3 = "'index' was provided but out of the provided snap points range! expected value to be between -1, ";
                            var3 = var3 + var8;
                            var3 = var7.bind(var5)(var4, var3);
                            var4 = var1[var6];
                            var1 = _closure2_slot47;
                            var1 = var1.value;
                            if (!var1) {
                                _fun44497_ip = 149;
                                continue _fun44497
                            }
                        case 136:
                            var3 = _closure2_slot44;
                            var3 = var3.value;
                            var1 = var6 !== var3;
                        case 149:
                            if (!var1) {
                                _fun44497_ip = 165;
                                continue _fun44497
                            }
                        case 152:
                            var3 = _closure2_slot43;
                            var3 = var3.value;
                            var1 = var4 !== var3;
                        case 165:
                            if (!var1) {
                                _fun44497_ip = 180;
                                continue _fun44497
                            }
                        case 168:
                            var3 = _closure2_slot49;
                            var3 = var3.value;
                            var1 = !var3;
                        case 180:
                            if (!var1) {
                                _fun44497_ip = 268;
                                continue _fun44497
                            }
                        case 183:
                            var3 = _closure2_slot48;
                            var1 = false;
                            var3.value = var1;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = 4;
                            var3 = var2[var3];
                            var6 = var1.bind(var5)(var3);
                            var3 = var6.runOnUI;
                            var0 = _closure2_slot76;
                            var3 = var3.bind(var6)(var0);
                            var0 = 8;
                            var0 = var2[var0];
                            var0 = var1.bind(var5)(var0);
                            var0 = var0.ANIMATION_SOURCE;
                            var11 = var0.USER;
                            var10 = 0;
                            var9 = arg1;
                            var13 = undefined;
                            var12 = var4;
                            var0 = var13[var3](var12, var11, var10, var9, var8);
                        case 268:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var4.bind(var45)(var1);
                var _closure2_slot80 = var4;
                var1 = var11[var51];
                var79 = var5.bind(var3)(var1);
                var62 = var79.useWorkletCallback;
                var45 = function(arg0, arg1) { // Original name: handleSnapToPosition, environment: var0
                    _fun44498: for (var _fun44498_ip = 0;;) switch (_fun44498_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var2.bind(var0)(var1);
                            var5 = var6.normalizeSnapPoint;
                            var2 = _closure2_slot31;
                            var4 = var2.value;
                            var2 = arg0;
                            var5 = var5.bind(var6)(var2, var4);
                            var2 = _closure2_slot47;
                            if (!var2) {
                                _fun44498_ip = 72;
                                continue _fun44498
                            }
                        case 59:
                            var4 = _closure2_slot43;
                            var4 = var4.value;
                            var2 = var5 !== var4;
                        case 72:
                            if (!var2) {
                                _fun44498_ip = 87;
                                continue _fun44498
                            }
                        case 75:
                            var4 = _closure2_slot49;
                            var4 = var4.value;
                            var2 = !var4;
                        case 87:
                            if (!var2) {
                                _fun44498_ip = 175;
                                continue _fun44498
                            }
                        case 90:
                            var4 = _closure2_slot48;
                            var2 = true;
                            var4.value = var2;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var4 = 4;
                            var4 = var3[var4];
                            var6 = var2.bind(var0)(var4);
                            var4 = var6.runOnUI;
                            var1 = _closure2_slot76;
                            var4 = var4.bind(var6)(var1);
                            var1 = 8;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.ANIMATION_SOURCE;
                            var9 = var1.USER;
                            var8 = 0;
                            var7 = arg1;
                            var11 = undefined;
                            var10 = var5;
                            var1 = var11[var4](var10, var9, var8, var7, var6);
                        case 175:
                            return var0;
                    }
                };
                var1 = {};
                var1.__DEV__ = var52;
                var80 = var11[var50];
                var80 = var5.bind(var3)(var80);
                var80 = var80.print;
                var1.print = var80;
                var1.BottomSheet = var49;
                var80 = var11[var50];
                var80 = var5.bind(var3)(var80);
                var80 = var80.normalizeSnapPoint;
                var1.normalizeSnapPoint = var80;
                var1.animatedContainerHeight = var74;
                var1.isLayoutCalculated = var75;
                var1.animatedNextPosition = var58;
                var1.isForcedClosing = var7;
                var1.isInTemporaryPosition = var92;
                var80 = var11[var51];
                var80 = var5.bind(var3)(var80);
                var80 = var80.runOnUI;
                var1.runOnUI = var80;
                var1.animateToPosition = var77;
                var80 = var11[var59];
                var80 = var5.bind(var3)(var80);
                var80 = var80.ANIMATION_SOURCE;
                var1.ANIMATION_SOURCE = var80;
                var45.__closure = var1;
                var1 = 15646490046918.0;
                var45.__workletHash = var1;
                var1 = _closure1_slot26;
                var45.__initData = var1;
                var1 = new Array(7);
                var1[0] = var77;
                var1[1] = var15;
                var1[2] = var35;
                var1[3] = var75;
                var1[4] = var7;
                var1[5] = var74;
                var1[6] = var30;
                var80 = var62.bind(var79)(var45, var1);
                var _closure2_slot81 = var80;
                var45 = new Array(6);
                var45[0] = var77;
                var45[1] = var7;
                var45[2] = var75;
                var45[3] = var92;
                var45[4] = var58;
                var45[5] = var76;
                var1 = function(arg0) { // Original name: handleClose, environment: var0
                    _fun44499: for (var _fun44499_ip = 0;;) switch (_fun44499_ip) {
                        case 0:
                            var1 = _closure2_slot39;
                            var5 = var1.value;
                            var1 = _closure2_slot47;
                            var1 = var1.value;
                            if (!var1) {
                                _fun44499_ip = 37;
                                continue _fun44499
                            }
                        case 24:
                            var2 = _closure2_slot43;
                            var2 = var2.value;
                            var1 = var5 !== var2;
                        case 37:
                            if (!var1) {
                                _fun44499_ip = 52;
                                continue _fun44499
                            }
                        case 40:
                            var2 = _closure2_slot49;
                            var2 = var2.value;
                            var1 = !var2;
                        case 52:
                            if (!var1) {
                                _fun44499_ip = 145;
                                continue _fun44499
                            }
                        case 55:
                            var2 = _closure2_slot48;
                            var1 = false;
                            var2.value = var1;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = 4;
                            var3 = var2[var3];
                            var4 = undefined;
                            var6 = var1.bind(var4)(var3);
                            var3 = var6.runOnUI;
                            var0 = _closure2_slot76;
                            var3 = var3.bind(var6)(var0);
                            var0 = 8;
                            var0 = var2[var0];
                            var0 = var1.bind(var4)(var0);
                            var0 = var0.ANIMATION_SOURCE;
                            var9 = var0.USER;
                            var8 = 0;
                            var7 = arg0;
                            var11 = undefined;
                            var10 = var5;
                            var0 = var11[var3](var10, var9, var8, var7, var6);
                        case 145:
                            var0 = undefined;
                            return var0;
                    }
                };
                var45 = var105.bind(var3)(var1, var45);
                var _closure2_slot82 = var45;
                var62 = new Array(5);
                var62[0] = var77;
                var62[1] = var7;
                var62[2] = var92;
                var62[3] = var58;
                var62[4] = var76;
                var1 = function(arg0) { // Original name: handleForceClose, environment: var0
                    _fun44500: for (var _fun44500_ip = 0;;) switch (_fun44500_ip) {
                        case 0:
                            var1 = _closure2_slot39;
                            var5 = var1.value;
                            var1 = _closure2_slot43;
                            var1 = var1.value;
                            var1 = var5 === var1;
                            if (var1) {
                                _fun44500_ip = 37;
                                continue _fun44500
                            }
                        case 28:
                            var2 = _closure2_slot49;
                            var1 = var2.value;
                        case 37:
                            if (var1) {
                                _fun44500_ip = 142;
                                continue _fun44500
                            }
                        case 40:
                            var2 = _closure2_slot48;
                            var1 = false;
                            var2.value = var1;
                            var2 = _closure2_slot49;
                            var1 = true;
                            var2.value = var1;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = 4;
                            var3 = var2[var3];
                            var4 = undefined;
                            var6 = var1.bind(var4)(var3);
                            var3 = var6.runOnUI;
                            var0 = _closure2_slot76;
                            var3 = var3.bind(var6)(var0);
                            var0 = 8;
                            var0 = var2[var0];
                            var0 = var1.bind(var4)(var0);
                            var0 = var0.ANIMATION_SOURCE;
                            var9 = var0.USER;
                            var8 = 0;
                            var7 = arg0;
                            var11 = undefined;
                            var10 = var5;
                            var0 = var11[var3](var10, var9, var8, var7, var6);
                        case 142:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var105.bind(var3)(var1, var62);
                var _closure2_slot83 = var1;
                var79 = new Array(7);
                var79[0] = var77;
                var79[1] = var92;
                var79[2] = var75;
                var79[3] = var7;
                var79[4] = var53;
                var79[5] = var58;
                var79[6] = var56;
                var62 = function(arg0) { // Original name: handleExpand, environment: var0
                    _fun44501: for (var _fun44501_ip = 0;;) switch (_fun44501_ip) {
                        case 0:
                            var1 = _closure2_slot36;
                            var2 = var1.value;
                            var1 = var2.length;
                            var3 = 1;
                            var1 = var1 - var3;
                            var5 = var2[var1];
                            var1 = _closure2_slot47;
                            var1 = var1.value;
                            if (!var1) {
                                _fun44501_ip = 62;
                                continue _fun44501
                            }
                        case 40:
                            var2 = var2.length;
                            var3 = var2 - var3;
                            var2 = _closure2_slot44;
                            var2 = var2.value;
                            var1 = var3 !== var2;
                        case 62:
                            if (!var1) {
                                _fun44501_ip = 78;
                                continue _fun44501
                            }
                        case 65:
                            var2 = _closure2_slot43;
                            var2 = var2.value;
                            var1 = var5 !== var2;
                        case 78:
                            if (!var1) {
                                _fun44501_ip = 93;
                                continue _fun44501
                            }
                        case 81:
                            var2 = _closure2_slot49;
                            var2 = var2.value;
                            var1 = !var2;
                        case 93:
                            if (!var1) {
                                _fun44501_ip = 186;
                                continue _fun44501
                            }
                        case 96:
                            var2 = _closure2_slot48;
                            var1 = false;
                            var2.value = var1;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = 4;
                            var3 = var2[var3];
                            var4 = undefined;
                            var6 = var1.bind(var4)(var3);
                            var3 = var6.runOnUI;
                            var0 = _closure2_slot76;
                            var3 = var3.bind(var6)(var0);
                            var0 = 8;
                            var0 = var2[var0];
                            var0 = var1.bind(var4)(var0);
                            var0 = var0.ANIMATION_SOURCE;
                            var9 = var0.USER;
                            var8 = 0;
                            var7 = arg0;
                            var11 = undefined;
                            var10 = var5;
                            var0 = var11[var3](var10, var9, var8, var7, var6);
                        case 186:
                            var0 = undefined;
                            return var0;
                    }
                };
                var79 = var105.bind(var3)(var62, var79);
                var _closure2_slot84 = var79;
                var62 = new Array(7);
                var62[0] = var77;
                var62[1] = var7;
                var62[2] = var75;
                var62[3] = var92;
                var62[4] = var53;
                var62[5] = var58;
                var62[6] = var56;
                var7 = function(arg0) { // Original name: handleCollapse, environment: var0
                    _fun44502: for (var _fun44502_ip = 0;;) switch (_fun44502_ip) {
                        case 0:
                            var1 = _closure2_slot36;
                            var1 = var1.value;
                            var5 = 0;
                            var4 = var1[var5];
                            var1 = _closure2_slot47;
                            if (!var1) {
                                _fun44502_ip = 38;
                                continue _fun44502
                            }
                        case 25:
                            var2 = _closure2_slot44;
                            var2 = var2.value;
                            var1 = var5 !== var2;
                        case 38:
                            if (!var1) {
                                _fun44502_ip = 54;
                                continue _fun44502
                            }
                        case 41:
                            var2 = _closure2_slot43;
                            var2 = var2.value;
                            var1 = var4 !== var2;
                        case 54:
                            if (!var1) {
                                _fun44502_ip = 69;
                                continue _fun44502
                            }
                        case 57:
                            var2 = _closure2_slot49;
                            var2 = var2.value;
                            var1 = !var2;
                        case 69:
                            if (!var1) {
                                _fun44502_ip = 162;
                                continue _fun44502
                            }
                        case 72:
                            var2 = _closure2_slot48;
                            var1 = false;
                            var2.value = var1;
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 4;
                            var2 = var6[var2];
                            var3 = undefined;
                            var7 = var1.bind(var3)(var2);
                            var2 = var7.runOnUI;
                            var0 = _closure2_slot76;
                            var2 = var2.bind(var7)(var0);
                            var0 = 8;
                            var0 = var6[var0];
                            var0 = var1.bind(var3)(var0);
                            var0 = var0.ANIMATION_SOURCE;
                            var10 = var0.USER;
                            var8 = arg0;
                            var12 = undefined;
                            var11 = var4;
                            var9 = 0;
                            var0 = var12[var2](var11, var10, var9, var8, var7);
                        case 162:
                            var0 = undefined;
                            return var0;
                    }
                };
                var62 = var105.bind(var3)(var7, var62);
                var _closure2_slot85 = var62;
                var106 = _closure1_slot6;
                var105 = arg1;
                var7 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot80;
                    var0.snapToIndex = var2;
                    var2 = _closure2_slot81;
                    var0.snapToPosition = var2;
                    var2 = _closure2_slot84;
                    var0.expand = var2;
                    var2 = _closure2_slot85;
                    var0.collapse = var2;
                    var2 = _closure2_slot82;
                    var0.close = var2;
                    var1 = _closure2_slot83;
                    var0.forceClose = var1;
                    return var0;
                };
                var7 = var106.bind(var3)(var105, var7);
                var7 = new Array(41);
                var7[0] = var31;
                var7[1] = var30;
                var7[2] = var104;
                var7[3] = var103;
                var7[4] = var102;
                var7[5] = var60;
                var7[6] = var2;
                var7[7] = var76;
                var7[8] = var101;
                var7[9] = var74;
                var7[10] = var29;
                var7[11] = var61;
                var7[12] = var73;
                var7[13] = var32;
                var7[14] = var71;
                var7[15] = var100;
                var7[16] = var99;
                var7[17] = var98;
                var7[18] = var97;
                var7[19] = var53;
                var7[20] = var96;
                var7[21] = var95;
                var7[22] = var94;
                var7[23] = var93;
                var7[24] = var92;
                var7[25] = var91;
                var7[26] = var25;
                var7[27] = var27;
                var7[28] = var26;
                var7[29] = var90;
                var7[30] = var89;
                var7[31] = var88;
                var7[32] = var87;
                var7[33] = var86;
                var7[34] = var85;
                var7[35] = var84;
                var7[36] = var83;
                var7[37] = var82;
                var7[38] = var81;
                var7[39] = var77;
                var7[40] = var6;
                var6 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot3;
                    var0.enableContentPanningGesture = var2;
                    var2 = _closure2_slot6;
                    var0.enableDynamicSizing = var2;
                    var2 = _closure2_slot7;
                    var0.overDragResistanceFactor = var2;
                    var2 = _closure2_slot4;
                    var0.enableOverDrag = var2;
                    var2 = _closure2_slot5;
                    var0.enablePanDownToClose = var2;
                    var2 = _closure2_slot67;
                    var0.animatedAnimationState = var2;
                    var2 = _closure2_slot69;
                    var0.animatedSheetState = var2;
                    var2 = _closure2_slot70;
                    var0.animatedScrollableState = var2;
                    var2 = _closure2_slot55;
                    var0.animatedScrollableOverrideState = var2;
                    var2 = _closure2_slot51;
                    var0.animatedContentGestureState = var2;
                    var2 = _closure2_slot52;
                    var0.animatedHandleGestureState = var2;
                    var2 = _closure2_slot59;
                    var0.animatedKeyboardState = var2;
                    var2 = _closure2_slot53;
                    var0.animatedScrollableType = var2;
                    var2 = _closure2_slot71;
                    var0.animatedIndex = var2;
                    var2 = _closure2_slot42;
                    var0.animatedPosition = var2;
                    var2 = _closure2_slot40;
                    var0.animatedSheetHeight = var2;
                    var2 = _closure2_slot35;
                    var0.animatedContentHeight = var2;
                    var2 = _closure2_slot39;
                    var0.animatedClosedPosition = var2;
                    var2 = _closure2_slot33;
                    var0.animatedHandleHeight = var2;
                    var2 = _closure2_slot34;
                    var0.animatedFooterHeight = var2;
                    var2 = _closure2_slot60;
                    var0.animatedKeyboardHeight = var2;
                    var2 = _closure2_slot64;
                    var0.animatedKeyboardHeightInContainer = var2;
                    var2 = _closure2_slot31;
                    var0.animatedContainerHeight = var2;
                    var2 = _closure2_slot36;
                    var0.animatedSnapPoints = var2;
                    var2 = _closure2_slot38;
                    var0.animatedHighestSnapPoint = var2;
                    var2 = _closure2_slot54;
                    var0.animatedScrollableContentOffsetY = var2;
                    var2 = _closure2_slot48;
                    var0.isInTemporaryPosition = var2;
                    var2 = _closure2_slot46;
                    var0.isContentHeightFixed = var2;
                    var2 = _closure2_slot56;
                    var0.isScrollableRefreshable = var2;
                    var2 = _closure2_slot63;
                    var0.shouldHandleKeyboardEvents = var2;
                    var2 = _closure2_slot18;
                    var0.simultaneousHandlers = var2;
                    var2 = _closure2_slot19;
                    var0.waitFor = var2;
                    var2 = _closure2_slot20;
                    var0.activeOffsetX = var2;
                    var2 = _closure2_slot21;
                    var0.activeOffsetY = var2;
                    var2 = _closure2_slot22;
                    var0.failOffsetX = var2;
                    var2 = _closure2_slot23;
                    var0.failOffsetY = var2;
                    var2 = _closure2_slot12;
                    var0.enableBlurKeyboardOnGesture = var2;
                    var2 = _closure2_slot76;
                    var0.animateToPosition = var2;
                    var2 = _closure2_slot74;
                    var0.stopAnimation = var2;
                    var2 = _closure2_slot57;
                    var0.setScrollableRef = var2;
                    var1 = _closure2_slot58;
                    var0.removeScrollableRef = var1;
                    return var0;
                };
                var6 = var44.bind(var3)(var6, var7);
                var7 = new Array(8);
                var7[0] = var31;
                var7[1] = var30;
                var7[2] = var4;
                var7[3] = var80;
                var7[4] = var79;
                var7[5] = var62;
                var7[6] = var45;
                var7[7] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot71;
                    var0.animatedIndex = var2;
                    var2 = _closure2_slot42;
                    var0.animatedPosition = var2;
                    var2 = _closure2_slot80;
                    var0.snapToIndex = var2;
                    var2 = _closure2_slot81;
                    var0.snapToPosition = var2;
                    var2 = _closure2_slot84;
                    var0.expand = var2;
                    var2 = _closure2_slot85;
                    var0.collapse = var2;
                    var2 = _closure2_slot82;
                    var0.close = var2;
                    var1 = _closure2_slot83;
                    var0.forceClose = var1;
                    return var0;
                };
                var7 = var44.bind(var3)(var1, var7);
                var1 = var11[var51];
                var62 = var5.bind(var3)(var1);
                var45 = var62.useAnimatedReaction;
                var44 = function() { // Original name: pnpm_BottomSheetTsx16, environment: var0
                    var0 = _closure2_slot31;
                    var0 = var0.value;
                    return var0;
                };
                var1 = {};
                var1.animatedContainerHeight = var74;
                var44.__closure = var1;
                var1 = 12308480249646.0;
                var44.__workletHash = var1;
                var1 = _closure1_slot27;
                var44.__initData = var1;
                var1 = function(arg0, arg1) { // Original name: pnpm_BottomSheetTsx17, environment: var0
                    _fun44507: for (var _fun44507_ip = 0;;) switch (_fun44507_ip) {
                        case 0:
                            var5 = arg0;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 5;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.INITIAL_CONTAINER_HEIGHT;
                            if (!(var5 !== var2)) {
                                _fun44507_ip = 224;
                                continue _fun44507
                            }
                        case 41:
                            var4 = _closure2_slot50;
                            var3 = arg1;
                            var3 = var5 !== var3;
                            var4.value = var3;
                            var3 = _closure2_slot67;
                            var4 = var3.value;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var5 = 8;
                            var3 = var3[var5];
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.ANIMATION_STATE;
                            var3 = var3.RUNNING;
                            var3 = var4 === var3;
                            if (!var3) {
                                _fun44507_ip = 151;
                                continue _fun44507
                            }
                        case 109:
                            var4 = _closure2_slot68;
                            var6 = var4.value;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var5];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.ANIMATION_SOURCE;
                            var4 = var4.GESTURE;
                            var3 = var6 === var4;
                        case 151:
                            if (!var3) {
                                _fun44507_ip = 173;
                                continue _fun44507
                            }
                        case 154:
                            var4 = _closure2_slot44;
                            var6 = var4.value;
                            var4 = -1;
                            var3 = var4 === var6;
                        case 173:
                            if (!var3) {
                                _fun44507_ip = 224;
                                continue _fun44507
                            }
                        case 176:
                            var3 = _closure2_slot76;
                            var2 = _closure2_slot39;
                            var2 = var2.value;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.ANIMATION_SOURCE;
                            var1 = var1.GESTURE;
                            var1 = var3.bind(var0)(var2, var1);
                        case 224:
                            return var0;
                    }
                };
                var74 = {};
                var79 = var11[var57];
                var79 = var5.bind(var3)(var79);
                var79 = var79.INITIAL_CONTAINER_HEIGHT;
                var74.INITIAL_CONTAINER_HEIGHT = var79;
                var74.animatedContainerHeightDidChange = var78;
                var74.animatedAnimationState = var61;
                var78 = var11[var59];
                var78 = var5.bind(var3)(var78);
                var78 = var78.ANIMATION_STATE;
                var74.ANIMATION_STATE = var78;
                var74.animatedAnimationSource = var72;
                var78 = var11[var59];
                var78 = var5.bind(var3)(var78);
                var78 = var78.ANIMATION_SOURCE;
                var74.ANIMATION_SOURCE = var78;
                var74.animatedNextPositionIndex = var56;
                var74.animateToPosition = var77;
                var74.animatedClosedPosition = var76;
                var1.__closure = var74;
                var74 = 14620022635386.0;
                var1.__workletHash = var74;
                var74 = _closure1_slot28;
                var1.__initData = var74;
                var1 = var45.bind(var62)(var44, var1);
                var1 = var11[var51];
                var74 = var5.bind(var3)(var1);
                var62 = var74.useAnimatedReaction;
                var45 = function() { // Original name: pnpm_BottomSheetTsx18, environment: var0
                    var0 = _closure2_slot36;
                    var0 = var0.value;
                    return var0;
                };
                var1 = {};
                var1.animatedSnapPoints = var53;
                var45.__closure = var1;
                var1 = 16103751497216.0;
                var45.__workletHash = var1;
                var1 = _closure1_slot29;
                var45.__initData = var1;
                var44 = function(arg0, arg1) { // Original name: pnpm_BottomSheetTsx19, environment: var0
                    _fun44509: for (var _fun44509_ip = 0;;) switch (_fun44509_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.JSON;
                            var2 = var3.stringify;
                            var1 = arg0;
                            var1 = var2.bind(var3)(var1);
                            var3 = var0.JSON;
                            var2 = var3.stringify;
                            var0 = arg1;
                            var0 = var2.bind(var3)(var0);
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun44509_ip = 61;
                                continue _fun44509
                            }
                        case 49:
                            var1 = _closure2_slot45;
                            var0 = var1.value;
                        case 61:
                            if (var0) {
                                _fun44509_ip = 125;
                                continue _fun44509
                            }
                        case 64:
                            var1 = _closure2_slot47;
                            var1 = var1.value;
                            if (!var1) {
                                _fun44509_ip = 125;
                                continue _fun44509
                            }
                        case 79:
                            var2 = _closure2_slot79;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var0 = var1[var0];
                            var1 = undefined;
                            var0 = var3.bind(var1)(var0);
                            var0 = var0.ANIMATION_SOURCE;
                            var0 = var0.SNAP_POINT_CHANGE;
                            var0 = var2.bind(var1)(var0);
                        case 125:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = {};
                var1.isAnimatedOnMount = var8;
                var1.isLayoutCalculated = var75;
                var1.__DEV__ = var52;
                var76 = var11[var51];
                var76 = var5.bind(var3)(var76);
                var76 = var76.runOnJS;
                var1.runOnJS = var76;
                var76 = var11[var50];
                var76 = var5.bind(var3)(var76);
                var76 = var76.print;
                var1.print = var76;
                var1.evaluatePosition = var68;
                var76 = var11[var59];
                var76 = var5.bind(var3)(var76);
                var76 = var76.ANIMATION_SOURCE;
                var1.ANIMATION_SOURCE = var76;
                var44.__closure = var1;
                var1 = 1047659532107.0;
                var44.__workletHash = var1;
                var1 = _closure1_slot30;
                var44.__initData = var1;
                var1 = new Array(2);
                var1[0] = var75;
                var1[1] = var53;
                var1 = var62.bind(var74)(var45, var44, var1);
                var1 = var11[var51];
                var62 = var5.bind(var3)(var1);
                var45 = var62.useAnimatedReaction;
                var44 = function() { // Original name: pnpm_BottomSheetTsx20, environment: var0
                    var0 = {};
                    var2 = _closure2_slot59;
                    var2 = var2.value;
                    var0._keyboardState = var2;
                    var1 = _closure2_slot60;
                    var1 = var1.value;
                    var0._keyboardHeight = var1;
                    return var0;
                };
                var1 = {};
                var1.animatedKeyboardState = var73;
                var1.animatedKeyboardHeight = var32;
                var44.__closure = var1;
                var1 = 14903064847424.0;
                var44.__workletHash = var1;
                var1 = _closure1_slot31;
                var44.__initData = var1;
                var32 = function(arg0, arg1) { // Original name: pnpm_BottomSheetTsx21, environment: var0
                    _fun44511: for (var _fun44511_ip = 0;;) switch (_fun44511_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = arg1;
                            var4 = var0._keyboardState;
                            var12 = var0._keyboardHeight;
                            var1 = null;
                            var5 = var1 == var3;
                            var0 = undefined;
                            var2 = undefined;
                            if (var5) {
                                _fun44511_ip = 37;
                                continue _fun44511
                            }
                        case 31:
                            var2 = var3._keyboardState;
                        case 37:
                            var5 = var1 == var3;
                            var1 = undefined;
                            if (var5) {
                                _fun44511_ip = 52;
                                continue _fun44511
                            }
                        case 46:
                            var1 = var3._keyboardHeight;
                        case 52:
                            if (!(var4 === var2)) {
                                _fun44511_ip = 63;
                                continue _fun44511
                            }
                        case 56:
                            if (!(var12 !== var1)) {
                                _fun44511_ip = 767;
                                continue _fun44511
                            }
                        case 63:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var5 = 8;
                            var2 = var2[var5];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.KEYBOARD_STATE;
                            var2 = var2.UNDETERMINED;
                            if (!(var4 !== var2)) {
                                _fun44511_ip = 767;
                                continue _fun44511
                            }
                        case 105:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var5];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.KEYBOARD_STATE;
                            var2 = var2.HIDDEN;
                            if (!(var4 === var2)) {
                                _fun44511_ip = 228;
                                continue _fun44511
                            }
                        case 138:
                            var3 = _closure2_slot67;
                            var6 = var3.value;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.ANIMATION_STATE;
                            var3 = var3.RUNNING;
                            if (!(var6 === var3)) {
                                _fun44511_ip = 228;
                                continue _fun44511
                            }
                        case 183:
                            var2 = _closure2_slot68;
                            var3 = var2.value;
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var5];
                            var2 = var6.bind(var0)(var2);
                            var2 = var2.ANIMATION_SOURCE;
                            var2 = var2.GESTURE;
                            if (!(var3 !== var2)) {
                                _fun44511_ip = 767;
                                continue _fun44511
                            }
                        case 228:
                            var7 = _closure2_slot64;
                            var6 = 0;
                            var3 = 0;
                            if (!(var3 !== var12)) {
                                _fun44511_ip = 340;
                                continue _fun44511
                            }
                        case 243:
                            var8 = _closure2_slot27;
                            var9 = global;
                            var11 = var9.Math;
                            var10 = var11.abs;
                            if (var8) {
                                _fun44511_ip = 289;
                                continue _fun44511
                            }
                        case 264:
                            var8 = _closure2_slot32;
                            var8 = var8.value;
                            var8 = var8.bottom;
                            var8 = var12 - var8;
                            var8 = var10.bind(var11)(var8);
                            _fun44511_ip = 337;
                            continue _fun44511;
                        case 289:
                            var14 = var9.Math;
                            var13 = var14.abs;
                            var15 = _closure2_slot15;
                            var9 = _closure2_slot32;
                            var9 = var9.value;
                            var9 = var9.bottom;
                            var9 = var15 - var9;
                            var9 = var13.bind(var14)(var9);
                            var9 = var12 - var9;
                            var8 = var10.bind(var11)(var9);
                        case 337:
                            var3 = var8;
                        case 340:
                            var7.value = var3;
                            var7 = _closure2_slot11;
                            var8 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var3 = var8.bind(var0)(var3);
                            var3 = var3.KEYBOARD_INPUT_MODE;
                            var3 = var3.adjustResize;
                            if (!(var7 === var3)) {
                                _fun44511_ip = 433;
                                continue _fun44511
                            }
                        case 383:
                            var3 = _closure2_slot64;
                            var3.value = var6;
                            var6 = _closure2_slot9;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.KEYBOARD_BEHAVIOR;
                            var3 = var3.interactive;
                            if (!(var6 !== var3)) {
                                _fun44511_ip = 767;
                                continue _fun44511
                            }
                        case 433:
                            var3 = _closure2_slot51;
                            var6 = var3.value;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var8 = 7;
                            var3 = var3[var8];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.State;
                            var3 = var3.ACTIVE;
                            if (!(var6 !== var3)) {
                                _fun44511_ip = 767;
                                continue _fun44511
                            }
                        case 481:
                            var3 = _closure2_slot51;
                            var6 = var3.value;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var8];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.State;
                            var3 = var3.BEGAN;
                            if (!(var6 !== var3)) {
                                _fun44511_ip = 767;
                                continue _fun44511
                            }
                        case 526:
                            var3 = _closure2_slot52;
                            var6 = var3.value;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var8];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.State;
                            var3 = var3.ACTIVE;
                            if (!(var6 !== var3)) {
                                _fun44511_ip = 767;
                                continue _fun44511
                            }
                        case 571:
                            var3 = _closure2_slot52;
                            var6 = var3.value;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var8];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.State;
                            var3 = var3.BEGAN;
                            if (!(var6 !== var3)) {
                                _fun44511_ip = 767;
                                continue _fun44511
                            }
                        case 616:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.KEYBOARD_STATE;
                            var3 = var3.HIDDEN;
                            if (!(var4 === var3)) {
                                _fun44511_ip = 686;
                                continue _fun44511
                            }
                        case 649:
                            var4 = _closure2_slot10;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.KEYBOARD_BLUR_BEHAVIOR;
                            var3 = var3.none;
                            if (!(var4 !== var3)) {
                                _fun44511_ip = 767;
                                continue _fun44511
                            }
                        case 686:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var3 = 9;
                            var3 = var1[var3];
                            var8 = var4.bind(var0)(var3);
                            var7 = var8.getKeyboardAnimationConfigs;
                            var3 = _closure2_slot62;
                            var6 = var3.value;
                            var3 = _closure2_slot61;
                            var3 = var3.value;
                            var3 = var7.bind(var8)(var6, var3);
                            var2 = _closure2_slot79;
                            var1 = var1[var5];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.ANIMATION_SOURCE;
                            var1 = var1.KEYBOARD;
                            var1 = var2.bind(var0)(var1, var3);
                        case 767:
                            return var0;
                    }
                };
                var1 = {};
                var73 = var11[var59];
                var73 = var5.bind(var3)(var73);
                var73 = var73.KEYBOARD_STATE;
                var1.KEYBOARD_STATE = var73;
                var1.animatedAnimationState = var61;
                var73 = var11[var59];
                var73 = var5.bind(var3)(var73);
                var73 = var73.ANIMATION_STATE;
                var1.ANIMATION_STATE = var73;
                var1.animatedAnimationSource = var72;
                var72 = var11[var59];
                var72 = var5.bind(var3)(var72);
                var72 = var72.ANIMATION_SOURCE;
                var1.ANIMATION_SOURCE = var72;
                var1.__DEV__ = var52;
                var72 = var11[var51];
                var72 = var5.bind(var3)(var72);
                var72 = var72.runOnJS;
                var1.runOnJS = var72;
                var72 = var11[var50];
                var72 = var5.bind(var3)(var72);
                var72 = var72.print;
                var1.print = var72;
                var1.BottomSheet = var49;
                var1.animatedKeyboardHeightInContainer = var71;
                var1.$modal = var43;
                var1.bottomInset = var15;
                var1.animatedContainerOffset = var41;
                var71 = _closure1_slot8;
                var1.Platform = var71;
                var1.android_keyboardInputMode = var66;
                var71 = var11[var59];
                var71 = var5.bind(var3)(var71);
                var71 = var71.KEYBOARD_INPUT_MODE;
                var1.KEYBOARD_INPUT_MODE = var71;
                var1.keyboardBehavior = var24;
                var71 = var11[var59];
                var71 = var5.bind(var3)(var71);
                var71 = var71.KEYBOARD_BEHAVIOR;
                var1.KEYBOARD_BEHAVIOR = var71;
                var1.animatedContentGestureState = var60;
                var71 = var11[var55];
                var71 = var5.bind(var3)(var71);
                var71 = var71.State;
                var1.State = var71;
                var1.animatedHandleGestureState = var2;
                var1.keyboardBlurBehavior = var67;
                var71 = var11[var59];
                var71 = var5.bind(var3)(var71);
                var71 = var71.KEYBOARD_BLUR_BEHAVIOR;
                var1.KEYBOARD_BLUR_BEHAVIOR = var71;
                var71 = var11[var50];
                var71 = var5.bind(var3)(var71);
                var71 = var71.getKeyboardAnimationConfigs;
                var1.getKeyboardAnimationConfigs = var71;
                var1.keyboardAnimationEasing = var70;
                var1.keyboardAnimationDuration = var69;
                var1.evaluatePosition = var68;
                var32.__closure = var1;
                var1 = 3826286975425.0;
                var32.__workletHash = var1;
                var1 = _closure1_slot32;
                var32.__initData = var1;
                var1 = new Array(7);
                var1[0] = var43;
                var1[1] = var15;
                var1[2] = var24;
                var1[3] = var67;
                var1[4] = var66;
                var1[5] = var41;
                var1[6] = var65;
                var1 = var45.bind(var62)(var44, var32, var1);
                var1 = var11[var51];
                var62 = var5.bind(var3)(var1);
                var45 = var62.useAnimatedReaction;
                var44 = function() { // Original name: pnpm_BottomSheetTsx22, environment: var0
                    var0 = _closure2_slot42;
                    var0 = var0.value;
                    return var0;
                };
                var1 = {};
                var1.animatedPosition = var30;
                var44.__closure = var1;
                var1 = 14107338560521.0;
                var44.__workletHash = var1;
                var1 = _closure1_slot33;
                var44.__initData = var1;
                var32 = function(arg0) { // Original name: pnpm_BottomSheetTsx23, environment: var0
                    _fun44513: for (var _fun44513_ip = 0;;) switch (_fun44513_ip) {
                        case 0:
                            var1 = _closure2_slot16;
                            if (!var1) {
                                _fun44513_ip = 31;
                                continue _fun44513
                            }
                        case 10:
                            var1 = _closure2_slot16;
                            var2 = _closure2_slot14;
                            var0 = arg0;
                            var0 = var0 + var2;
                            var1.value = var0;
                        case 31:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = {};
                var1._providedAnimatedPosition = var64;
                var1.topInset = var35;
                var32.__closure = var1;
                var1 = 11716938993854.0;
                var32.__workletHash = var1;
                var1 = _closure1_slot34;
                var32.__initData = var1;
                var1 = new Array(0);
                var1 = var45.bind(var62)(var44, var32, var1);
                var1 = var11[var51];
                var62 = var5.bind(var3)(var1);
                var45 = var62.useAnimatedReaction;
                var44 = function() { // Original name: pnpm_BottomSheetTsx24, environment: var0
                    var0 = _closure2_slot71;
                    var0 = var0.value;
                    return var0;
                };
                var1 = {};
                var1.animatedIndex = var31;
                var44.__closure = var1;
                var1 = 4322474325743.0;
                var44.__workletHash = var1;
                var1 = _closure1_slot35;
                var44.__initData = var1;
                var32 = function(arg0) { // Original name: pnpm_BottomSheetTsx25, environment: var0
                    _fun44515: for (var _fun44515_ip = 0;;) switch (_fun44515_ip) {
                        case 0:
                            var1 = _closure2_slot17;
                            if (!var1) {
                                _fun44515_ip = 23;
                                continue _fun44515
                            }
                        case 10:
                            var1 = _closure2_slot17;
                            var0 = arg0;
                            var1.value = var0;
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = {};
                var1._providedAnimatedIndex = var63;
                var32.__closure = var1;
                var1 = 14207021927928.0;
                var32.__workletHash = var1;
                var1 = _closure1_slot36;
                var32.__initData = var1;
                var1 = new Array(0);
                var1 = var45.bind(var62)(var44, var32, var1);
                var1 = var11[var51];
                var45 = var5.bind(var3)(var1);
                var44 = var45.useAnimatedReaction;
                var32 = function() { // Original name: pnpm_BottomSheetTsx26, environment: var0
                    var0 = {};
                    var2 = _closure2_slot71;
                    var2 = var2.value;
                    var0._animatedIndex = var2;
                    var2 = _closure2_slot42;
                    var2 = var2.value;
                    var0._animatedPosition = var2;
                    var2 = _closure2_slot67;
                    var2 = var2.value;
                    var0._animationState = var2;
                    var2 = _closure2_slot51;
                    var2 = var2.value;
                    var0._contentGestureState = var2;
                    var1 = _closure2_slot52;
                    var1 = var1.value;
                    var0._handleGestureState = var1;
                    return var0;
                };
                var1 = {};
                var1.animatedIndex = var31;
                var1.animatedPosition = var30;
                var1.animatedAnimationState = var61;
                var1.animatedContentGestureState = var60;
                var1.animatedHandleGestureState = var2;
                var32.__closure = var1;
                var1 = 4984898715723.0;
                var32.__workletHash = var1;
                var1 = _closure1_slot37;
                var32.__initData = var1;
                var2 = function(arg0) { // Original name: pnpm_BottomSheetTsx27, environment: var0
                    _fun44517: for (var _fun44517_ip = 0;;) switch (_fun44517_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0._animatedIndex;
                            var5 = var0._animatedPosition;
                            var3 = var0._animationState;
                            var7 = var0._contentGestureState;
                            var8 = var0._handleGestureState;
                            var6 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var6.bind(var0)(var1);
                            var1 = var1.ANIMATION_STATE;
                            var1 = var1.STOPPED;
                            var1 = var3 === var1;
                            if (!var1) {
                                _fun44517_ip = 196;
                                continue _fun44517
                            }
                        case 77:
                            var3 = _closure2_slot43;
                            var6 = var3.value;
                            var10 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var12 = 5;
                            var3 = var3[var12];
                            var3 = var10.bind(var0)(var3);
                            var3 = var3.INITIAL_VALUE;
                            var3 = var6 === var3;
                            if (var3) {
                                _fun44517_ip = 158;
                                continue _fun44517
                            }
                        case 122:
                            var6 = _closure2_slot44;
                            var10 = var6.value;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var12];
                            var6 = var11.bind(var0)(var6);
                            var6 = var6.INITIAL_VALUE;
                            var3 = var10 === var6;
                        case 158:
                            if (var3) {
                                _fun44517_ip = 193;
                                continue _fun44517
                            }
                        case 161:
                            var6 = _closure2_slot43;
                            var6 = var6.value;
                            var6 = var5 === var6;
                            if (!var6) {
                                _fun44517_ip = 190;
                                continue _fun44517
                            }
                        case 177:
                            var9 = _closure2_slot44;
                            var9 = var9.value;
                            var6 = var4 === var9;
                        case 190:
                            var3 = var6;
                        case 193:
                            var1 = var3;
                        case 196:
                            if (!var1) {
                                _fun44517_ip = 212;
                                continue _fun44517
                            }
                        case 199:
                            var3 = 1;
                            var6 = var4 % var3;
                            var3 = 0;
                            var1 = var6 === var3;
                        case 212:
                            if (!var1) {
                                _fun44517_ip = 440;
                                continue _fun44517
                            }
                        case 218:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var10 = 7;
                            var3 = var3[var10];
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.State;
                            var3 = var3.END;
                            var3 = var7 !== var3;
                            if (!var3) {
                                _fun44517_ip = 290;
                                continue _fun44517
                            }
                        case 257:
                            var9 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var10];
                            var6 = var9.bind(var0)(var6);
                            var6 = var6.State;
                            var6 = var6.UNDETERMINED;
                            var3 = var7 !== var6;
                        case 290:
                            if (!var3) {
                                _fun44517_ip = 326;
                                continue _fun44517
                            }
                        case 293:
                            var9 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var10];
                            var6 = var9.bind(var0)(var6);
                            var6 = var6.State;
                            var6 = var6.CANCELLED;
                            var3 = var7 !== var6;
                        case 326:
                            if (var3) {
                                _fun44517_ip = 437;
                                continue _fun44517
                            }
                        case 329:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var10];
                            var6 = var7.bind(var0)(var6);
                            var6 = var6.State;
                            var6 = var6.END;
                            var6 = var8 !== var6;
                            if (!var6) {
                                _fun44517_ip = 398;
                                continue _fun44517
                            }
                        case 365:
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var10];
                            var7 = var9.bind(var0)(var7);
                            var7 = var7.State;
                            var7 = var7.UNDETERMINED;
                            var6 = var8 !== var7;
                        case 398:
                            if (!var6) {
                                _fun44517_ip = 434;
                                continue _fun44517
                            }
                        case 401:
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var10];
                            var7 = var9.bind(var0)(var7);
                            var7 = var7.State;
                            var7 = var7.CANCELLED;
                            var6 = var8 !== var7;
                        case 434:
                            var3 = var6;
                        case 437:
                            var1 = !var3;
                        case 440:
                            if (!var1) {
                                _fun44517_ip = 613;
                                continue _fun44517
                            }
                        case 446:
                            var3 = _closure2_slot66;
                            if (!var3) {
                                _fun44517_ip = 469;
                                continue _fun44517
                            }
                        case 456:
                            var6 = _closure2_slot41;
                            var6 = var6.value;
                            var3 = var4 === var6;
                        case 469:
                            if (!var3) {
                                _fun44517_ip = 489;
                                continue _fun44517
                            }
                        case 472:
                            var6 = _closure2_slot36;
                            var6 = var6.value;
                            var6 = var6[var4];
                            var3 = var6 !== var5;
                        case 489:
                            if (var3) {
                                _fun44517_ip = 613;
                                continue _fun44517
                            }
                        case 492:
                            var3 = _closure2_slot41;
                            var3 = var3.value;
                            if (!(var4 !== var3)) {
                                _fun44517_ip = 555;
                                continue _fun44517
                            }
                        case 505:
                            var3 = _closure2_slot41;
                            var3.value = var4;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 4;
                            var3 = var7[var3];
                            var7 = var6.bind(var0)(var3);
                            var6 = var7.runOnJS;
                            var3 = _closure2_slot72;
                            var3 = var6.bind(var7)(var3);
                            var3 = var3.bind(var0)(var4, var5);
                        case 555:
                            var3 = -1;
                            var3 = var3 === var4;
                            if (!var3) {
                                _fun44517_ip = 572;
                                continue _fun44517
                            }
                        case 568:
                            var3 = _closure2_slot25;
                        case 572:
                            if (!var3) {
                                _fun44517_ip = 613;
                                continue _fun44517
                            }
                        case 575:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 4;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.runOnJS;
                            var1 = _closure2_slot25;
                            var1 = var2.bind(var3)(var1);
                            var1 = var1.bind(var0)();
                        case 613:
                            return var0;
                    }
                };
                var1 = {};
                var59 = var11[var59];
                var59 = var5.bind(var3)(var59);
                var59 = var59.ANIMATION_STATE;
                var1.ANIMATION_STATE = var59;
                var1.animatedNextPosition = var58;
                var57 = var11[var57];
                var57 = var5.bind(var3)(var57);
                var57 = var57.INITIAL_VALUE;
                var1.INITIAL_VALUE = var57;
                var1.animatedNextPositionIndex = var56;
                var55 = var11[var55];
                var55 = var5.bind(var3)(var55);
                var55 = var55.State;
                var1.State = var55;
                var1.reduceMotion = var48;
                var1.animatedCurrentIndex = var54;
                var1.animatedSnapPoints = var53;
                var1.__DEV__ = var52;
                var51 = var11[var51];
                var51 = var5.bind(var3)(var51);
                var51 = var51.runOnJS;
                var1.runOnJS = var51;
                var50 = var11[var50];
                var50 = var5.bind(var3)(var50);
                var50 = var50.print;
                var1.print = var50;
                var1.BottomSheet = var49;
                var1.handleOnChange = var47;
                var1._providedOnClose = var46;
                var2.__closure = var1;
                var1 = 11608666988638.0;
                var2.__workletHash = var1;
                var1 = _closure1_slot38;
                var2.__initData = var1;
                var1 = new Array(3);
                var1[0] = var48;
                var1[1] = var47;
                var1[2] = var46;
                var1 = var44.bind(var45)(var32, var2, var1);
                var2 = _closure1_slot7;
                var1 = new Array(4);
                var1[0] = var14;
                var1[1] = var12;
                var1[2] = var8;
                var1[3] = var4;
                var0 = function() { // Environment: var0
                    _fun44518: for (var _fun44518_ip = 0;;) switch (_fun44518_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun44518_ip = 22;
                                continue _fun44518
                            }
                        case 10:
                            var2 = _closure2_slot45;
                            var2 = var2.value;
                            var1 = !var2;
                        case 22:
                            if (var1) {
                                _fun44518_ip = 40;
                                continue _fun44518
                            }
                        case 25:
                            var2 = _closure2_slot80;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 40:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                var2 = _closure1_slot10;
                var4 = 11;
                var0 = var11[var4];
                var0 = var5.bind(var3)(var0);
                var1 = var0.BottomSheetProvider;
                var0 = {};
                var0.value = var7;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetInternalProvider;
                var4 = {};
                var4.value = var6;
                var8 = _closure1_slot11;
                var7 = _closure1_slot1;
                var6 = 12;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.gestureEventsHandlersHook = var9;
                var11 = null;
                if (!var13) {
                    _fun44474_ip = 6018;
                    continue _fun44474
                }
            case 5982:
                var12 = _closure1_slot10;
                var9 = {};
                var9.animatedIndex = var31;
                var9.animatedPosition = var30;
                var14 = _closure1_slot9;
                var14 = var14.absoluteFillObject;
                var9.style = var14;
                var11 = var12.bind(var3)(var13, var9);
            case 6018:
                var9 = new Array(2);
                var9[0] = var11;
                var13 = _closure1_slot10;
                var14 = _closure1_slot0;
                var32 = _closure1_slot2;
                var11 = 13;
                var11 = var32[var11];
                var11 = var14.bind(var3)(var11);
                var12 = var11.BottomSheetHostingContainer;
                var11 = {};
                var43 = !var43;
                var11.shouldCalculateHeight = var43;
                var11.containerHeight = var42;
                var11.containerOffset = var41;
                var11.topInset = var35;
                var11.bottomInset = var15;
                var11.detached = var33;
                var11.style = var10;
                var15 = _closure1_slot11;
                var10 = 14;
                var10 = var32[var10];
                var10 = var14.bind(var3)(var10);
                var14 = var10.BottomSheetBody;
                var10 = {};
                var10.style = var21;
                var10.BodyComponent = var20;
                var20 = null;
                if (!(var17 !== var40)) {
                    _fun44474_ip = 6197;
                    continue _fun44474
                }
            case 6134:
                var35 = _closure1_slot10;
                var32 = _closure1_slot0;
                var41 = _closure1_slot2;
                var21 = 15;
                var21 = var41[var21];
                var21 = var32.bind(var3)(var21);
                var32 = var21.BottomSheetBackgroundContainer;
                var21 = {};
                var21.animatedIndex = var31;
                var21.animatedPosition = var30;
                var21.backgroundComponent = var40;
                var21.backgroundStyle = var16;
                var16 = 'BottomSheetBackgroundContainer';
                var20 = var35.bind(var3)(var32, var21, var16);
            case 6197:
                var16 = new Array(3);
                var16[0] = var20;
                var32 = _closure1_slot11;
                var21 = _closure1_slot0;
                var35 = _closure1_slot2;
                var20 = 16;
                var20 = var35[var20];
                var20 = var21.bind(var3)(var20);
                var21 = var20.BottomSheetContent;
                var20 = {};
                var35 = 'box-none';
                var20.pointerEvents = var35;
                var40 = var17 != var39;
                var35 = undefined;
                if (!var40) {
                    _fun44474_ip = 6260;
                    continue _fun44474
                }
            case 6257:
                var35 = var39;
            case 6260:
                var20.accessible = var35;
                var39 = var17 != var37;
                var35 = undefined;
                if (!var39) {
                    _fun44474_ip = 6276;
                    continue _fun44474
                }
            case 6273:
                var35 = var37;
            case 6276:
                var20.accessibilityRole = var35;
                var37 = var17 != var36;
                var35 = undefined;
                if (!var37) {
                    _fun44474_ip = 6292;
                    continue _fun44474
                }
            case 6289:
                var35 = var36;
            case 6292:
                var20.accessibilityLabel = var35;
                var20.keyboardBehavior = var24;
                var20.detached = var33;
                var33 = new Array(2);
                var33[0] = var34;
                var34 = null;
                if (!var38) {
                    _fun44474_ip = 6362;
                    continue _fun44474
                }
            case 6319:
                var37 = _closure1_slot10;
                var36 = _closure1_slot0;
                var39 = _closure1_slot2;
                var35 = 17;
                var35 = var39[var35];
                var35 = var36.bind(var3)(var35);
                var36 = var35.BottomSheetFooterContainer;
                var35 = {};
                var35.renderFooter = var38;
                var34 = var37.bind(var3)(var36, var35);
            case 6362:
                var33[1] = var34;
                var20.children = var33;
                var20 = var32.bind(var3)(var21, var20);
                var16[1] = var20;
                var17 = null;
                if (!(var17 !== var23)) {
                    _fun44474_ip = 6484;
                    continue _fun44474
                }
            case 6386:
                var21 = _closure1_slot10;
                var20 = _closure1_slot0;
                var32 = _closure1_slot2;
                var19 = 18;
                var19 = var32[var19];
                var19 = var20.bind(var3)(var19);
                var20 = var19.BottomSheetHandleContainer;
                var19 = {};
                var19.animatedIndex = var31;
                var19.animatedPosition = var30;
                var19.handleHeight = var29;
                var19.enableHandlePanningGesture = var28;
                var19.enableOverDrag = var27;
                var19.enablePanDownToClose = var26;
                var19.overDragResistanceFactor = var25;
                var19.keyboardBehavior = var24;
                var19.handleComponent = var23;
                var19.handleStyle = var22;
                var19.handleIndicatorStyle = var18;
                var18 = 'BottomSheetHandleContainer';
                var17 = var21.bind(var3)(var20, var19, var18);
            case 6484:
                var16[2] = var17;
                var10.children = var16;
                var10 = var15.bind(var3)(var14, var10);
                var11.children = var10;
                var10 = 'BottomSheetContainer';
                var10 = var13.bind(var3)(var12, var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot39 = var1;
    var1 = var4.bind(var0)(var1);
    var1 = var3.bind(var0)(var1);
    var3 = 'BottomSheet';
    var1.displayName = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 3678, 4893, 4894, 4917, 4890, 4906, 44, 4900, 5010, 5012, 5015, 5017, 5021, 5024, 5028]);