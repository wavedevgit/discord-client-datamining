// modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var7 = 0;
    var3 = var5[var7];
    var0 = undefined;
    var3 = var9.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PixelRatio;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.VoicePanelModes;
    var _closure1_slot6 = var8;
    var3 = var3.MODE_CHANGE_PHYSICS;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelControlsModes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelPIPModes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SCALE_PHYSICS;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot11 = var8;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = {};
    var3.duration = var7;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var9.bind(var0)(var3);
    var7 = var8.createAnimatedComponent;
    var3 = 9;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var3 = var7.bind(var8)(var3);
    var _closure1_slot14 = var3;
    var3 = {};
    var7 = 'function getScaleChangeWithOverscroll_VoicePanelVideoRendererTsx1(currentScale,scaleChange,fitScale){const{MIN_OVERSCROLL,OVERSCOLL_INTENSITY_FACTOR}=this.__closure;if(currentScale>=fitScale){return scaleChange;}const underScale=1-currentScale;const factor=Math.max(MIN_OVERSCROLL,1-underScale*underScale*OVERSCOLL_INTENSITY_FACTOR);return 1+(scaleChange-1)*factor;}';
    var3.code = var7;
    var _closure1_slot15 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun111334: for (var _fun111334_ip = 0;;) switch (_fun111334_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    if (!(!(var1 >= var2))) {
                        _fun111334_ip = 78;
                        continue _fun111334
                    }
                case 13:
                    var2 = 1;
                    var1 = var2 - var1;
                    var3 = var0 - var2;
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.max;
                    var4 = 0.1;
                    var7 = var1 * var1;
                    var1 = 5;
                    var1 = var7 * var1;
                    var1 = var2 - var1;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var3 * var1;
                    var1 = var2 + var1;
                    return var1;
                case 78:
                    return var0;
            }
        };
        var1 = {
            'MIN_OVERSCROLL': 0.1,
            'OVERSCOLL_INTENSITY_FACTOR': 5
        };
        var0.__closure = var1;
        var1 = 8727721301304.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot15;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var10 = 'absolute';
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '100%',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.wrapper = var9;
    var9 = {};
    var9.position = var10;
    var3.animatedWrapperStyles = var9;
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '100%'
    };
    var3.videoRenderer = var9;
    var9 = {
        'width': '100%',
        'height': '100%'
    };
    var3.video = var9;
    var9 = {
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'marginTop': 4294967280,
        'marginLeft': 4294967280,
        'height': 32,
        'width': 32
    };
    var3.spinner = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot17 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx2(){const{containerLayout,videoDimensions}=this.__closure;return Math.max(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}';
    var3.code = var7;
    var _closure1_slot18 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx3(){const{containerLayout,videoDimensions}=this.__closure;return Math.min(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}';
    var3.code = var7;
    var _closure1_slot19 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx4(){const{translateX,translateY,scale,fitScale,coverScale}=this.__closure;if(translateX.get()!==0||translateY.get()!==0){return false;}if(scale.get()===fitScale.get()||scale.get()===coverScale.get()){return true;}return false;}';
    var3.code = var7;
    var _closure1_slot20 = var3;
    var3 = {};
    var7 = "function VoicePanelVideoRendererTsx5(forcedMode){const{scale,withSpring,fitScale,MODE_CHANGE_PHYSICS,disableAnimations,coverScale,translateX,SCALE_PHYSICS,translateY,currentSizeThreshold}=this.__closure;if(forcedMode==='fit'){scale.set(withSpring(fitScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}else{scale.set(withSpring(coverScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}translateX.set(withSpring(0,SCALE_PHYSICS));translateY.set(withSpring(0,SCALE_PHYSICS));currentSizeThreshold.set(forcedMode);}";
    var3.code = var7;
    var _closure1_slot21 = var3;
    var3 = {};
    var7 = "function VoicePanelVideoRendererTsx6(){const{focused,id,videoDimensions,windowDimensions,isCamera,resetToDefaultSize}=this.__closure;var _focused$get;let resizeMode=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id?'fit':'cover';const videoLandscape=videoDimensions.get().width>=videoDimensions.get().height;const parentLandscape=windowDimensions.get().width>=windowDimensions.get().height;const matchingAspect=videoLandscape===parentLandscape;if(isCamera&&resizeMode==='fit'){if(matchingAspect){resizeMode='cover';}}resetToDefaultSize(resizeMode);}";
    var3.code = var7;
    var _closure1_slot22 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx7(){const{containerLayout}=this.__closure;return containerLayout.get();}';
    var3.code = var7;
    var _closure1_slot23 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx8(containerLayout,previous){const{cheapWorkletShallowEqual,focused,id,resetOnLayoutChange}=this.__closure;var _focused$get;if(cheapWorkletShallowEqual(containerLayout,previous!==null&&previous!==void 0?previous:undefined))return;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id)return;if(containerLayout!==previous&&previous!=null){resetOnLayoutChange();}}';
    var3.code = var7;
    var _closure1_slot24 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx9(){const{coverScale,fitScale,MIN_ZOOM_FOR_COVER_SNAP_OFFSET,translateX,scale,translateY,SNAP_CENTER_THRESHOLD,containerLayout,videoDimensions,SNAP_EDGE_OUTER_THRESHOLD,SNAP_EDGE_INNER_THRESHOLD}=this.__closure;if(coverScale.get()<fitScale.get()+MIN_ZOOM_FOR_COVER_SNAP_OFFSET){return false;}const screenTranslateX=translateX.get()*scale.get();const screenTranslateY=translateY.get()*scale.get();if(screenTranslateX<-SNAP_CENTER_THRESHOLD||screenTranslateX>SNAP_CENTER_THRESHOLD||screenTranslateY<-SNAP_CENTER_THRESHOLD||screenTranslateY>SNAP_CENTER_THRESHOLD){return false;}const adjustedScreenTranslateX=screenTranslateX+(containerLayout.get().width-videoDimensions.get().width*scale.get())/2;const adjustedScreenTranslateY=screenTranslateY+(containerLayout.get().height-videoDimensions.get().height*scale.get())/2;const videoWidth=videoDimensions.get().width*scale.get();const videoHeight=videoDimensions.get().height*scale.get();if(videoHeight>=containerLayout.get().height&&adjustedScreenTranslateX>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateX<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth>=containerLayout.get().width-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth<=containerLayout.get().width+SNAP_EDGE_OUTER_THRESHOLD){return true;}if(videoWidth>=containerLayout.get().width&&adjustedScreenTranslateY>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateY<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight>=containerLayout.get().height-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight<=containerLayout.get().height+SNAP_EDGE_OUTER_THRESHOLD){return true;}return false;}';
    var3.code = var7;
    var _closure1_slot25 = var3;
    var3 = {};
    var7 = "function VoicePanelVideoRendererTsx10(){const{numGesturesActive,isInSnap,resetToDefaultSize,scale,fitScale,videoDimensions,containerLayout,translateX,withSpring,SCALE_PHYSICS,translateY}=this.__closure;if(numGesturesActive.get()>0){return;}if(isInSnap.get()){isInSnap.set(false);resetToDefaultSize('cover');return;}if(scale.get()<fitScale.get()){resetToDefaultSize('fit');return;}const maxTranslateY=Math.max(0,(videoDimensions.get().height-containerLayout.get().height/scale.get())/2);const maxTranslateX=Math.max(0,(videoDimensions.get().width-containerLayout.get().width/scale.get())/2);translateX.set(withSpring(Math.min(maxTranslateX,Math.max(-maxTranslateX,translateX.get())),SCALE_PHYSICS));translateY.set(withSpring(Math.min(maxTranslateY,Math.max(-maxTranslateY,translateY.get())),SCALE_PHYSICS));}";
    var3.code = var7;
    var _closure1_slot26 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx11(){const{focused,id,isInDefaultZoom,isInPanToZoom}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id&&(!isInDefaultZoom.get()||isInPanToZoom.get());}';
    var3.code = var7;
    var _closure1_slot27 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx12(isFocusedZoomed,previous){const{setIsFocusedVideoZoomed}=this.__closure;if(isFocusedZoomed===previous){return;}setIsFocusedVideoZoomed(isFocusedZoomed);}';
    var3.code = var7;
    var _closure1_slot28 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx13(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}';
    var3.code = var7;
    var _closure1_slot29 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx14(isFocused,previous){const{resetOnLayoutChange}=this.__closure;if(isFocused===previous){return;}resetOnLayoutChange();}';
    var3.code = var7;
    var _closure1_slot30 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx15(){const{mode}=this.__closure;return mode.get();}';
    var3.code = var7;
    var _closure1_slot31 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx16(mode,previous){const{resetOnLayoutChange}=this.__closure;if(mode===previous){return;}resetOnLayoutChange();}';
    var3.code = var7;
    var _closure1_slot32 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx17(){const{videoDimensions}=this.__closure;return videoDimensions.get();}';
    var3.code = var7;
    var _closure1_slot33 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx18(layout,previous){const{currentSizeThreshold,resetOnLayoutChange}=this.__closure;if(currentSizeThreshold==null){return;}if(layout.width===(previous===null||previous===void 0?void 0:previous.width)&&layout.height===(previous===null||previous===void 0?void 0:previous.height)){return;}resetOnLayoutChange();}';
    var3.code = var7;
    var _closure1_slot34 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx19(){const{coverScale}=this.__closure;return coverScale.get();}';
    var3.code = var7;
    var _closure1_slot35 = var3;
    var3 = {};
    var7 = "function VoicePanelVideoRendererTsx20(current,previous){const{currentSizeThreshold,resetToDefaultSize}=this.__closure;const _currentSizeThreshold=currentSizeThreshold.get();if(_currentSizeThreshold!=='cover'){return;}if(current===previous){return;}resetToDefaultSize(_currentSizeThreshold);}";
    var3.code = var7;
    var _closure1_slot36 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx21(){const{isInSnap}=this.__closure;return isInSnap.get();}';
    var3.code = var7;
    var _closure1_slot37 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx22(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous){return;}if(!current){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}';
    var3.code = var7;
    var _closure1_slot38 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx23(){const{isInDefaultZoom,resetOnLayoutChange,focused,id,runOnJS,setFocused}=this.__closure;var _focused$get;if(!isInDefaultZoom.get()){resetOnLayoutChange();return;}if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){runOnJS(setFocused)(id);}else{runOnJS(setFocused)(null);}}';
    var3.code = var7;
    var _closure1_slot39 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx24(e,manager){return manager.fail();}';
    var3.code = var7;
    var _closure1_slot40 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx25(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}';
    var3.code = var7;
    var _closure1_slot41 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx26(e,manager){return manager.fail();}';
    var3.code = var7;
    var _closure1_slot42 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx27(){const{numGesturesActive,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);handleMovementEnd();}';
    var3.code = var7;
    var _closure1_slot43 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx28(event){const{scale,getScaleChangeWithOverscroll,fitScale,containerLayout,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),event.scaleChange,fitScale.get()));const startingFocalFromCenterX=event.focalX-containerLayout.get().width/2;const startingFocalFromCenterY=event.focalY-containerLayout.get().height/2;const zoomCenteringX=-1*startingFocalFromCenterX*(event.scaleChange-1)/scale.get();const zoomCenteringY=-1*startingFocalFromCenterY*(event.scaleChange-1)/scale.get();translateX.set(translateX.get()+zoomCenteringX);translateY.set(translateY.get()+zoomCenteringY);isInSnap.set(isInCoverSnap());}';
    var3.code = var7;
    var _closure1_slot44 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx29(){const{numGesturesActive,isInPanToZoom,currentSizeThreshold}=this.__closure;numGesturesActive.set(numGesturesActive.get()+1);isInPanToZoom.set(false);currentSizeThreshold.set(null);}';
    var3.code = var7;
    var _closure1_slot45 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx30(event,manager){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();}}';
    var3.code = var7;
    var _closure1_slot46 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx31(){const{isInPanToZoom}=this.__closure;isInPanToZoom.set(false);}';
    var3.code = var7;
    var _closure1_slot47 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx32(event){const{numGesturesActive,translateX,withSpring,FLING_VELOCITY_SCALING,scale,SCALE_PHYSICS,translateY,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);translateX.set(withSpring(translateX.get()+event.velocityX*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));translateY.set(withSpring(translateY.get()+event.velocityY*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));handleMovementEnd();}';
    var3.code = var7;
    var _closure1_slot48 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx33(event){const{isInPanToZoom,PAN_TO_ZOOM_SCALE_FACTOR,scale,getScaleChangeWithOverscroll,fitScale,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;if(isInPanToZoom.get()){const scaleChange=1+event.changeY*PAN_TO_ZOOM_SCALE_FACTOR;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),scaleChange,fitScale.get()));}else{translateX.set(translateX.get()+event.changeX/scale.get());translateY.set(translateY.get()+event.changeY/scale.get());}isInSnap.set(isInCoverSnap());}';
    var3.code = var7;
    var _closure1_slot49 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx34(){const{isInPanToZoom,runOnJS,hideControls,numGesturesActive,currentSizeThreshold}=this.__closure;if(isInPanToZoom.get()){runOnJS(hideControls)();}numGesturesActive.set(numGesturesActive.get()+1);currentSizeThreshold.set(null);}';
    var3.code = var7;
    var _closure1_slot50 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx35(){const{lastTapTimestamp,PAN_TO_ZOOM_TAP_TIME_MILLIS,isInPanToZoom}=this.__closure;const hasRecentTap=Date.now()-lastTapTimestamp.get()<=PAN_TO_ZOOM_TAP_TIME_MILLIS;isInPanToZoom.set(hasRecentTap);lastTapTimestamp.set(Date.now());}';
    var3.code = var7;
    var _closure1_slot51 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx36(event,manager){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();return;}}';
    var3.code = var7;
    var _closure1_slot52 = var3;
    var3 = {};
    var7 = 'function shouldMakeActive_VoicePanelVideoRendererTsx37({mode:mode,focusedId:focusedId,selfId:selfId,isScrollVisible:isScrollVisible}){const{VoicePanelModes}=this.__closure;const isPIP=mode===VoicePanelModes.PIP;if(!isScrollVisible||isPIP||focusedId!=null&&focusedId!==selfId){return false;}return true;}';
    var3.code = var7;
    var _closure1_slot53 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun111336: for (var _fun111336_ip = 0;;) switch (_fun111336_ip) {
                case 0:
                    var0 = arg0;
                    var4 = var0.mode;
                    var3 = var0.focusedId;
                    var2 = var0.selfId;
                    var0 = var0.isScrollVisible;
                    var1 = _closure1_slot6;
                    var1 = var1.PIP;
                    var1 = var4 === var1;
                    var0 = !var0;
                    if (var0) {
                        _fun111336_ip = 52;
                        continue _fun111336
                    }
                case 49:
                    var0 = var1;
                case 52:
                    if (var0) {
                        _fun111336_ip = 71;
                        continue _fun111336
                    }
                case 55:
                    var1 = null;
                    var1 = var1 != var3;
                    if (!var1) {
                        _fun111336_ip = 68;
                        continue _fun111336
                    }
                case 64:
                    var1 = var3 !== var2;
                case 68:
                    var0 = var1;
                case 71:
                    var0 = !var0;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot6;
        var2.VoicePanelModes = var3;
        var0.__closure = var2;
        var2 = 14556501664557.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot53;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot54 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx38(){const{mode,focused,isScrollVisible,streamId}=this.__closure;var _focused$get;return[mode.get(),(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,isScrollVisible.get(),streamId];}';
    var3.code = var7;
    var _closure1_slot55 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx39(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setHasActiveVideoOutputSink,shouldMakeActive,id}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[mode,focusedId,isScrollVisible,streamId]=props;if(streamId==null)return;runOnJS(setHasActiveVideoOutputSink)(streamId,shouldMakeActive({mode:mode,focusedId:focusedId,selfId:id,isScrollVisible:isScrollVisible}));}';
    var3.code = var7;
    var _closure1_slot56 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx40(){const{focused,id,windowDimensions,sharedCoords}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id){return{width:windowDimensions.get().width,height:windowDimensions.get().height};}return{width:sharedCoords.get().width,height:sharedCoords.get().height};}';
    var3.code = var7;
    var _closure1_slot57 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx41(){const{scale,videoDimensions,mode}=this.__closure;return[scale.get(),videoDimensions.get(),mode.get()];}';
    var3.code = var7;
    var _closure1_slot58 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx42(props,previous){const{streamId,cheapWorkletShallowEqual,runOnJS,respondToVideoSizeUpdate}=this.__closure;if(streamId==null)return;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(respondToVideoSizeUpdate)();}';
    var3.code = var7;
    var _closure1_slot59 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx43(){const{videoDimensions,pipState,VoicePanelPIPModes,scale,disableAnimations,translateX,translateY,mirror}=this.__closure;let{width:width,height:height}=videoDimensions.get();if(pipState.mode===VoicePanelPIPModes.IN_APP){if(width>height){width=width*(pipState.height/height)/scale.get();height=pipState.height/scale.get();}else{height=height*(pipState.width/width)/scale.get();width=pipState.width/scale.get();}}return{width:width,height:height,opacity:disableAnimations.get()?0:1,transform:[{scale:scale.get()},{translateX:translateX.get()},{translateY:translateY.get()},{scaleX:mirror?-1:1}]};}';
    var3.code = var7;
    var _closure1_slot60 = var3;
    var3 = {};
    var7 = "function VoicePanelVideoRendererTsx44(){const{isInSnap,SNAP_EDGE_INNER_THRESHOLD,withDelay,focused,id,withTiming,OPACITY_TIMING}=this.__closure;var _focused$get,_focused$get2;if(isInSnap.get()){return{position:'absolute',top:0,left:0,bottom:0,right:0,borderWidth:SNAP_EDGE_INNER_THRESHOLD,overflow:'hidden',borderColor:'white',opacity:0.5};}return{position:'absolute',top:-1,left:-1,bottom:-1,right:-1,borderWidth:2,borderRadius:24+2,overflow:'hidden',borderColor:'white',opacity:withDelay(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id?300:0,withTiming(((_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id)===id?0:0.3,OPACITY_TIMING,'animate-never'))};}";
    var3.code = var7;
    var _closure1_slot61 = var3;
    var3 = {};
    var7 = 'function VoicePanelVideoRendererTsx45(values){const{layout,disableAnimations}=this.__closure;return layout(values,disableAnimations.get());}';
    var3.code = var7;
    var _closure1_slot62 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun111337: for (var _fun111337_ip = 0;;) switch (_fun111337_ip) {
            case 0:
                var1 = arg0;
                var23 = var1.id;
                var _closure2_slot0 = var23;
                var21 = var1.streamId;
                var _closure2_slot1 = var21;
                var20 = var1.userId;
                var28 = var1.videoSpinnerContext;
                var16 = var1.sharedCoords;
                var _closure2_slot2 = var16;
                var27 = var1.isScrollVisible;
                var _closure2_slot3 = var27;
                var17 = var1.isCamera;
                var _closure2_slot4 = var17;
                var19 = var1.streamKey;
                var18 = var1.mirror;
                var3 = undefined;
                if (!(var18 === var3)) {
                    _fun111337_ip = 85;
                    continue _fun111337
                }
            case 83:
                var18 = false;
            case 85:
                var _closure2_slot5 = var18;
                var2 = var1.focusOnReady;
                if (!(var2 === var3)) {
                    _fun111337_ip = 101;
                    continue _fun111337
                }
            case 99:
                var2 = false;
            case 101:
                var _closure2_slot6 = var2;
                var31 = var1.paused;
                if (!(var31 === var3)) {
                    _fun111337_ip = 117;
                    continue _fun111337
                }
            case 115:
                var31 = false;
            case 117:
                var22 = var1.style;
                var13 = var1.layout;
                var _closure2_slot7 = var13;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var _closure2_slot18 = var3;
                var _closure2_slot19 = var3;
                var _closure2_slot20 = var3;
                var _closure2_slot21 = var3;
                var _closure2_slot22 = var3;
                var _closure2_slot23 = var3;
                var _closure2_slot24 = var3;
                var _closure2_slot25 = var3;
                var1 = _closure1_slot17;
                var12 = var1.bind(var3)();
                var6 = _closure1_slot4;
                var2 = var6.useContext;
                var11 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 11;
                var1 = var7[var1];
                var1 = var11.bind(var3)(var1);
                var1 = var2.bind(var6)(var1);
                var32 = var1.mode;
                _closure2_slot8 = var32;
                var24 = var1.focused;
                _closure2_slot9 = var24;
                var2 = var1.setFocused;
                _closure2_slot10 = var2;
                var2 = var1.layoutManager;
                _closure2_slot11 = var2;
                var26 = var1.windowDimensions;
                _closure2_slot12 = var26;
                var9 = var1.streamOutputSinkStack;
                var1 = _closure1_slot0;
                var25 = 8;
                var4 = var7[var25];
                var5 = var1.bind(var3)(var4);
                var4 = var5.useSharedValue;
                var15 = true;
                var8 = var4.bind(var5)(var15);
                _closure2_slot13 = var8;
                var4 = var7[var25];
                var10 = var1.bind(var3)(var4);
                var5 = var10.useSharedValue;
                var4 = {};
                var29 = var2.getTargetDimensions;
                var35 = var29.bind(var2)(var23);
                var36 = var4;
                var29 = copyDataProperties(var36, var35);
                var30 = var5.bind(var10)(var4);
                _closure2_slot14 = var30;
                var4 = 16;
                var4 = var7[var4];
                var5 = var1.bind(var3)(var4);
                var4 = var5.usePIPState;
                var29 = var4.bind(var5)();
                _closure2_slot15 = var29;
                var4 = var6.useState;
                var10 = var4.bind(var6)(var15);
                var5 = _closure1_slot3;
                var4 = 2;
                var5 = var5.bind(var3)(var10, var4);
                var4 = 0;
                var10 = var5[var4];
                var4 = 1;
                var4 = var5[var4];
                _closure2_slot16 = var4;
                var5 = var6.useRef;
                var4 = function() { // Environment: var0
                    _fun111338: for (var _fun111338_ip = 0;;) switch (_fun111338_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            if (!var1) {
                                _fun111338_ip = 25;
                                continue _fun111338
                            }
                        case 10:
                            var2 = _closure2_slot10;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 25:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                _closure2_slot17 = var4;
                var4 = 17;
                var4 = var7[var4];
                var5 = var11.bind(var3)(var4);
                var4 = {};
                var4.streamId = var21;
                var4.userId = var20;
                var4.loading = var10;
                var4.videoSpinnerContext = var28;
                var4.paused = var31;
                var4.streamKey = var19;
                var4 = var5.bind(var3)(var4);
                var4 = var4.onReady;
                _closure2_slot18 = var4;
                var5 = 18;
                var5 = var7[var5];
                var19 = var11.bind(var3)(var5);
                var5 = {};
                var31 = 'VideoRenderer';
                var5.location = var31;
                var5.videoSpinnerContext = var28;
                var5.userId = var20;
                var5.streamId = var21;
                var5.loading = var10;
                var5 = var19.bind(var3)(var5);
                var19 = var6.useCallback;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    var3 = _closure2_slot16;
                    var0 = undefined;
                    var2 = false;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure2_slot17;
                    var2 = var3.current;
                    var2 = var2.bind(var3)();
                    var1 = _closure2_slot18;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var20 = var19.bind(var6)(var4, var5);
                var4 = 19;
                var4 = var7[var4];
                var5 = var1.bind(var3)(var4);
                var4 = var5.useSetHasActiveVideoOutputSink;
                var28 = var4.bind(var5)(var9);
                _closure2_slot19 = var28;
                var4 = var7[var25];
                var19 = var1.bind(var3)(var4);
                var9 = var19.useAnimatedReaction;
                var5 = function() {
                    _fun111340: for (var _fun111340_ip = 0;;) switch (_fun111340_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var0 = var2.get;
                            var2 = var0.bind(var2)();
                            var0 = new Array(4);
                            var0[0] = var2;
                            var3 = _closure2_slot9;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = null;
                            var4 = var2 == var3;
                            var2 = undefined;
                            if (var4) {
                                _fun111340_ip = 53;
                                continue _fun111340
                            }
                        case 48:
                            var2 = var3.id;
                        case 53:
                            var0[1] = var2;
                            var3 = _closure2_slot3;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var0[2] = var2;
                            var1 = _closure2_slot1;
                            var0[3] = var1;
                            return var0;
                    }
                };
                var4 = {};
                var4.mode = var32;
                var4.focused = var24;
                var4.isScrollVisible = var27;
                var4.streamId = var21;
                var5.__closure = var4;
                var4 = 3558943323767.0;
                var5.__workletHash = var4;
                var4 = _closure1_slot55;
                var5.__initData = var4;
                var4 = function arg0, arg1() {
                    _fun111341: for (var _fun111341_ip = 0;;) switch (_fun111341_ip) {
                        case 0:
                            var5 = arg0;
                            var7 = arg1;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var2 = var2[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var4 = var6.cheapWorkletArrayShallowEqual;
                            var2 = null;
                            var8 = var2 != var7;
                            var3 = undefined;
                            if (!var8) {
                                _fun111341_ip = 51;
                                continue _fun111341
                            }
                        case 48:
                            var3 = var7;
                        case 51:
                            var3 = var4.bind(var6)(var5, var3);
                            if (var3) {
                                _fun111341_ip = 181;
                                continue _fun111341
                            }
                        case 60:
                            var4 = _closure1_slot3;
                            var3 = 4;
                            var4 = var4.bind(var0)(var5, var3);
                            var3 = 0;
                            var8 = var4[var3];
                            var3 = 1;
                            var7 = var4[var3];
                            var3 = 2;
                            var5 = var4[var3];
                            var3 = 3;
                            var3 = var4[var3];
                            if (!(var2 != var3)) {
                                _fun111341_ip = 181;
                                continue _fun111341
                            }
                        case 104:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 8;
                            var2 = var6[var2];
                            var9 = var4.bind(var0)(var2);
                            var4 = var9.runOnJS;
                            var2 = _closure2_slot19;
                            var2 = var4.bind(var9)(var2);
                            var4 = _closure1_slot54;
                            var1 = {};
                            var1.mode = var8;
                            var1.focusedId = var7;
                            var6 = _closure2_slot0;
                            var1.selfId = var6;
                            var1.isScrollVisible = var5;
                            var1 = var4.bind(var0)(var1);
                            var1 = var2.bind(var0)(var3, var1);
                        case 181:
                            return var0;
                    }
                };
                var27 = {};
                var33 = 13;
                var31 = var7[var33];
                var31 = var1.bind(var3)(var31);
                var31 = var31.cheapWorkletArrayShallowEqual;
                var27.cheapWorkletArrayShallowEqual = var31;
                var31 = var7[var25];
                var31 = var1.bind(var3)(var31);
                var31 = var31.runOnJS;
                var27.runOnJS = var31;
                var27.setHasActiveVideoOutputSink = var28;
                var28 = _closure1_slot54;
                var27.shouldMakeActive = var28;
                var27.id = var23;
                var4.__closure = var27;
                var27 = 12089612803324.0;
                var4.__workletHash = var27;
                var27 = _closure1_slot56;
                var4.__initData = var27;
                var4 = var9.bind(var19)(var5, var4);
                var5 = var6.useCallback;
                var4 = new Array(4);
                var4[0] = var30;
                var4[1] = var2;
                var4[2] = var23;
                var4[3] = var8;
                var2 = function(arg0) { // Environment: var0
                    _fun111342: for (var _fun111342_ip = 0;;) switch (_fun111342_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var6 = var0.width;
                            var5 = var0.height;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 20;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = _closure2_slot14;
                            var2 = {};
                            var2.width = var6;
                            var2.height = var5;
                            var2 = var4.bind(var0)(var3, var2);
                            var4 = _closure2_slot11;
                            var3 = var4.setTargetDimensions;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var4)(var2, var6, var5);
                            var2 = _closure2_slot13;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun111342_ip = 130;
                                continue _fun111342
                            }
                        case 104:
                            var1 = global;
                            var3 = var1.setTimeout;
                            var2 = function() { // Environment: var1
                                var2 = _closure2_slot13;
                                var1 = var2.set;
                                var0 = false;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var1 = 34;
                            var1 = var3.bind(var0)(var2, var1);
                        case 130:
                            return var0;
                    }
                };
                var19 = var5.bind(var6)(var2, var4);
                var2 = var7[var25];
                var5 = var1.bind(var3)(var2);
                var4 = var5.useDerivedValue;
                var2 = function() {
                    _fun111344: for (var _fun111344_ip = 0;;) switch (_fun111344_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            var1 = null;
                            var3 = var1 == var0;
                            var1 = undefined;
                            if (var3) {
                                _fun111344_ip = 32;
                                continue _fun111344
                            }
                        case 27:
                            var1 = var0.id;
                        case 32:
                            var0 = _closure2_slot0;
                            if (!(var1 !== var0)) {
                                _fun111344_ip = 84;
                                continue _fun111344
                            }
                        case 40:
                            var0 = {};
                            var3 = _closure2_slot2;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            var1 = var1.width;
                            var0.width = var1;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            var1 = var1.height;
                            var0.height = var1;
                            _fun111344_ip = 133;
                            continue _fun111344;
                        case 84:
                            var1 = {};
                            var4 = _closure2_slot12;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var3 = var3.width;
                            var1.width = var3;
                            var3 = _closure2_slot12;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var2 = var2.height;
                            var1.height = var2;
                            var0 = var1;
                        case 133:
                            return var0;
                    }
                };
                var9 = {};
                var9.focused = var24;
                var9.id = var23;
                var9.windowDimensions = var26;
                var9.sharedCoords = var16;
                var2.__closure = var9;
                var9 = 9631392718391.0;
                var2.__workletHash = var9;
                var9 = _closure1_slot57;
                var2.__initData = var9;
                var2 = var4.bind(var5)(var2);
                var4 = {};
                var4.id = var23;
                var4.isCamera = var17;
                var4.focused = var24;
                var4.mode = var32;
                var4.loading = var10;
                var4.containerLayout = var2;
                var4.videoDimensions = var30;
                var4.disableAnimations = var8;
                var2 = function arg0() {
                    var0 = arg0;
                    var23 = var0.id;
                    var _closure3_slot0 = var23;
                    var22 = var0.isCamera;
                    var _closure3_slot1 = var22;
                    var24 = var0.focused;
                    var _closure3_slot2 = var24;
                    var36 = var0.mode;
                    var _closure3_slot3 = var36;
                    var26 = var0.loading;
                    var _closure3_slot4 = var26;
                    var20 = var0.containerLayout;
                    var _closure3_slot5 = var20;
                    var35 = var0.videoDimensions;
                    var _closure3_slot6 = var35;
                    var34 = var0.disableAnimations;
                    var _closure3_slot7 = var34;
                    var9 = _closure1_slot4;
                    var1 = var9.useContext;
                    var2 = _closure1_slot1;
                    var33 = _closure1_slot2;
                    var0 = 11;
                    var0 = var33[var0];
                    var32 = undefined;
                    var0 = var2.bind(var32)(var0);
                    var0 = var1.bind(var9)(var0);
                    var38 = var0.setIsFocusedVideoZoomed;
                    var _closure3_slot8 = var38;
                    var19 = var0.windowDimensions;
                    var _closure3_slot9 = var19;
                    var25 = var0.dismissToPIPGestureRef;
                    var _closure3_slot10 = var25;
                    var14 = var0.setFocused;
                    var _closure3_slot11 = var14;
                    var13 = var0.hideControls;
                    var _closure3_slot12 = var13;
                    var12 = var0.controlsSpecs;
                    var _closure3_slot13 = var12;
                    var11 = var0.showControls;
                    var _closure3_slot14 = var11;
                    var31 = _closure1_slot0;
                    var30 = 8;
                    var0 = var33[var30];
                    var2 = var31.bind(var32)(var0);
                    var1 = var2.useSharedValue;
                    var0 = 1;
                    var5 = var1.bind(var2)(var0);
                    var _closure3_slot15 = var5;
                    var0 = var33[var30];
                    var1 = var31.bind(var32)(var0);
                    var0 = var1.useSharedValue;
                    var10 = 0;
                    var4 = var0.bind(var1)(var10);
                    var _closure3_slot16 = var4;
                    var0 = var33[var30];
                    var1 = var31.bind(var32)(var0);
                    var0 = var1.useSharedValue;
                    var3 = var0.bind(var1)(var10);
                    var _closure3_slot17 = var3;
                    var0 = var33[var30];
                    var1 = var31.bind(var32)(var0);
                    var0 = var1.useSharedValue;
                    var2 = var0.bind(var1)(var10);
                    var _closure3_slot18 = var2;
                    var0 = var33[var30];
                    var1 = var31.bind(var32)(var0);
                    var0 = var1.useSharedValue;
                    var8 = false;
                    var1 = var0.bind(var1)(var8);
                    var _closure3_slot19 = var1;
                    var0 = var33[var30];
                    var7 = var31.bind(var32)(var0);
                    var0 = var7.useSharedValue;
                    var17 = var0.bind(var7)(var10);
                    var _closure3_slot20 = var17;
                    var0 = var33[var30];
                    var7 = var31.bind(var32)(var0);
                    var0 = var7.useSharedValue;
                    var16 = var0.bind(var7)(var8);
                    var _closure3_slot21 = var16;
                    var0 = var33[var30];
                    var8 = var31.bind(var32)(var0);
                    var7 = var8.useSharedValue;
                    var0 = null;
                    var21 = var7.bind(var8)(var0);
                    var _closure3_slot22 = var21;
                    var0 = var33[var30];
                    var8 = var31.bind(var32)(var0);
                    var7 = var8.useDerivedValue;
                    var0 = function() {
                        var0 = global;
                        var3 = var0.Math;
                        var2 = var3.max;
                        var4 = _closure3_slot5;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var1 = var1.width;
                        var5 = _closure3_slot6;
                        var0 = var5.get;
                        var0 = var0.bind(var5)();
                        var0 = var0.width;
                        var1 = var1 / var0;
                        var0 = var4.get;
                        var0 = var0.bind(var4)();
                        var4 = var0.height;
                        var0 = var5.get;
                        var0 = var0.bind(var5)();
                        var0 = var0.height;
                        var0 = var4 / var0;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var10 = {};
                    var10.containerLayout = var20;
                    var10.videoDimensions = var35;
                    var0.__closure = var10;
                    var10 = 4177496646282.0;
                    var0.__workletHash = var10;
                    var10 = _closure1_slot18;
                    var0.__initData = var10;
                    var29 = var7.bind(var8)(var0);
                    var _closure3_slot23 = var29;
                    var0 = var33[var30];
                    var8 = var31.bind(var32)(var0);
                    var7 = var8.useDerivedValue;
                    var0 = function() {
                        var0 = global;
                        var3 = var0.Math;
                        var2 = var3.min;
                        var4 = _closure3_slot5;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var1 = var1.width;
                        var5 = _closure3_slot6;
                        var0 = var5.get;
                        var0 = var0.bind(var5)();
                        var0 = var0.width;
                        var1 = var1 / var0;
                        var0 = var4.get;
                        var0 = var0.bind(var4)();
                        var4 = var0.height;
                        var0 = var5.get;
                        var0 = var0.bind(var5)();
                        var0 = var0.height;
                        var0 = var4 / var0;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var10 = {};
                    var10.containerLayout = var20;
                    var10.videoDimensions = var35;
                    var0.__closure = var10;
                    var10 = 5260375952053.0;
                    var0.__workletHash = var10;
                    var10 = _closure1_slot19;
                    var0.__initData = var10;
                    var10 = var7.bind(var8)(var0);
                    var _closure3_slot24 = var10;
                    var0 = var33[var30];
                    var8 = var31.bind(var32)(var0);
                    var7 = var8.useDerivedValue;
                    var0 = function() {
                        _fun111348: for (var _fun111348_ip = 0;;) switch (_fun111348_ip) {
                            case 0:
                                var1 = _closure3_slot16;
                                var0 = var1.get;
                                var0 = var0.bind(var1)();
                                var3 = 0;
                                var0 = var3 === var0;
                                if (!var0) {
                                    _fun111348_ip = 42;
                                    continue _fun111348
                                }
                            case 25:
                                var4 = _closure3_slot17;
                                var1 = var4.get;
                                var1 = var1.bind(var4)();
                                var0 = var3 === var1;
                            case 42:
                                if (!var0) {
                                    _fun111348_ip = 111;
                                    continue _fun111348
                                }
                            case 45:
                                var3 = _closure3_slot15;
                                var1 = var3.get;
                                var3 = var1.bind(var3)();
                                var4 = _closure3_slot24;
                                var1 = var4.get;
                                var1 = var1.bind(var4)();
                                var1 = var3 === var1;
                                if (var1) {
                                    _fun111348_ip = 108;
                                    continue _fun111348
                                }
                            case 78:
                                var4 = _closure3_slot15;
                                var3 = var4.get;
                                var3 = var3.bind(var4)();
                                var4 = _closure3_slot23;
                                var2 = var4.get;
                                var2 = var2.bind(var4)();
                                var1 = var3 === var2;
                            case 108:
                                var0 = var1;
                            case 111:
                                return var0;
                        }
                    };
                    var15 = {};
                    var15.translateX = var4;
                    var15.translateY = var3;
                    var15.scale = var5;
                    var15.fitScale = var10;
                    var15.coverScale = var29;
                    var0.__closure = var15;
                    var15 = 15099362638406.0;
                    var0.__workletHash = var15;
                    var15 = _closure1_slot20;
                    var0.__initData = var15;
                    var15 = var7.bind(var8)(var0);
                    var _closure3_slot25 = var15;
                    var8 = var9.useCallback;
                    var7 = function arg0() {
                        _fun111349: for (var _fun111349_ip = 0;;) switch (_fun111349_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = 'fit';
                                if (!(var0 !== var3)) {
                                    _fun111349_ip = 112;
                                    continue _fun111349
                                }
                            case 11:
                                var2 = _closure3_slot15;
                                var1 = var2.set;
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var5 = 12;
                                var6 = var6[var5];
                                var5 = undefined;
                                var7 = var7.bind(var5)(var6);
                                var6 = var7.withSpring;
                                var8 = _closure3_slot23;
                                var5 = var8.get;
                                var5 = var5.bind(var8)();
                                var4 = _closure1_slot7;
                                var8 = _closure3_slot7;
                                var0 = var8.get;
                                var8 = var0.bind(var8)();
                                var0 = 'respect-motion-settings';
                                if (!var8) {
                                    _fun111349_ip = 98;
                                    continue _fun111349
                                }
                            case 92:
                                var0 = 'animate-never';
                            case 98:
                                var0 = var6.bind(var7)(var5, var4, var0);
                                var0 = var1.bind(var2)(var0);
                                _fun111349_ip = 211;
                                continue _fun111349;
                            case 112:
                                var2 = _closure3_slot15;
                                var1 = var2.set;
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var5 = 12;
                                var6 = var6[var5];
                                var5 = undefined;
                                var7 = var7.bind(var5)(var6);
                                var6 = var7.withSpring;
                                var8 = _closure3_slot24;
                                var5 = var8.get;
                                var5 = var5.bind(var8)();
                                var4 = _closure1_slot7;
                                var8 = _closure3_slot7;
                                var0 = var8.get;
                                var8 = var0.bind(var8)();
                                var0 = 'respect-motion-settings';
                                if (!var8) {
                                    _fun111349_ip = 199;
                                    continue _fun111349
                                }
                            case 193:
                                var0 = 'animate-never';
                            case 199:
                                var0 = var6.bind(var7)(var5, var4, var0);
                                var0 = var1.bind(var2)(var0);
                            case 211:
                                var10 = _closure3_slot16;
                                var5 = var10.set;
                                var6 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var2 = 12;
                                var4 = var9[var2];
                                var0 = undefined;
                                var11 = var6.bind(var0)(var4);
                                var4 = var11.withSpring;
                                var8 = _closure1_slot10;
                                var7 = 0;
                                var4 = var4.bind(var11)(var7, var8);
                                var4 = var5.bind(var10)(var4);
                                var5 = _closure3_slot17;
                                var4 = var5.set;
                                var2 = var9[var2];
                                var6 = var6.bind(var0)(var2);
                                var2 = var6.withSpring;
                                var2 = var2.bind(var6)(var7, var8);
                                var2 = var4.bind(var5)(var2);
                                var2 = _closure3_slot22;
                                var1 = var2.set;
                                var1 = var1.bind(var2)(var3);
                                return var0;
                        }
                    };
                    var0 = {};
                    var0.scale = var5;
                    var27 = 12;
                    var18 = var33[var27];
                    var18 = var31.bind(var32)(var18);
                    var18 = var18.withSpring;
                    var0.withSpring = var18;
                    var0.fitScale = var10;
                    var18 = _closure1_slot7;
                    var0.MODE_CHANGE_PHYSICS = var18;
                    var0.disableAnimations = var34;
                    var0.coverScale = var29;
                    var0.translateX = var4;
                    var18 = _closure1_slot10;
                    var0.SCALE_PHYSICS = var18;
                    var0.translateY = var3;
                    var0.currentSizeThreshold = var21;
                    var7.__closure = var0;
                    var0 = 16610861286231.0;
                    var7.__workletHash = var0;
                    var0 = _closure1_slot21;
                    var7.__initData = var0;
                    var0 = new Array(7);
                    var0[0] = var5;
                    var0[1] = var4;
                    var0[2] = var3;
                    var0[3] = var29;
                    var0[4] = var21;
                    var0[5] = var10;
                    var0[6] = var34;
                    var34 = var8.bind(var9)(var7, var0);
                    var _closure3_slot26 = var34;
                    var8 = var9.useCallback;
                    var7 = function() {
                        _fun111350: for (var _fun111350_ip = 0;;) switch (_fun111350_ip) {
                            case 0:
                                var2 = _closure3_slot2;
                                var0 = var2.get;
                                var2 = var0.bind(var2)();
                                var0 = null;
                                var3 = var0 == var2;
                                var0 = undefined;
                                var5 = undefined;
                                if (var3) {
                                    _fun111350_ip = 34;
                                    continue _fun111350
                                }
                            case 29:
                                var5 = var2.id;
                            case 34:
                                var4 = _closure3_slot0;
                                var3 = 'cover';
                                var2 = var3;
                                if (!(var5 === var4)) {
                                    _fun111350_ip = 53;
                                    continue _fun111350
                                }
                            case 49:
                                var2 = 'fit';
                            case 53:
                                var6 = _closure3_slot6;
                                var4 = var6.get;
                                var4 = var4.bind(var6)();
                                var5 = var4.width;
                                var4 = var6.get;
                                var4 = var4.bind(var6)();
                                var4 = var4.height;
                                var6 = var5 >= var4;
                                var7 = _closure3_slot9;
                                var4 = var7.get;
                                var4 = var4.bind(var7)();
                                var5 = var4.width;
                                var4 = var7.get;
                                var4 = var4.bind(var7)();
                                var4 = var4.height;
                                var5 = var5 >= var4;
                                var4 = _closure3_slot1;
                                if (!var4) {
                                    _fun111350_ip = 140;
                                    continue _fun111350
                                }
                            case 132:
                                var7 = 'fit';
                                var4 = var7 === var2;
                            case 140:
                                if (!var4) {
                                    _fun111350_ip = 147;
                                    continue _fun111350
                                }
                            case 143:
                                var4 = var6 === var5;
                            case 147:
                                if (!var4) {
                                    _fun111350_ip = 153;
                                    continue _fun111350
                                }
                            case 150:
                                var2 = var3;
                            case 153:
                                var1 = _closure3_slot26;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                        }
                    };
                    var0 = {};
                    var0.focused = var24;
                    var0.id = var23;
                    var0.videoDimensions = var35;
                    var0.windowDimensions = var19;
                    var0.isCamera = var22;
                    var0.resetToDefaultSize = var34;
                    var7.__closure = var0;
                    var0 = 15643035811761.0;
                    var7.__workletHash = var0;
                    var0 = _closure1_slot22;
                    var7.__initData = var0;
                    var0 = new Array(6);
                    var0[0] = var24;
                    var0[1] = var23;
                    var0[2] = var22;
                    var0[3] = var35;
                    var0[4] = var19;
                    var0[5] = var34;
                    var22 = var8.bind(var9)(var7, var0);
                    var _closure3_slot27 = var22;
                    var0 = var33[var30];
                    var19 = var31.bind(var32)(var0);
                    var8 = var19.useAnimatedReaction;
                    var7 = function() {
                        var1 = _closure3_slot5;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = {};
                    var0.containerLayout = var20;
                    var7.__closure = var0;
                    var0 = 9695573702258.0;
                    var7.__workletHash = var0;
                    var0 = _closure1_slot23;
                    var7.__initData = var0;
                    var0 = function arg0, arg1() {
                        _fun111352: for (var _fun111352_ip = 0;;) switch (_fun111352_ip) {
                            case 0:
                                var5 = arg0;
                                var4 = arg1;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var1);
                                var2 = var6.cheapWorkletShallowEqual;
                                var3 = null;
                                var7 = var3 != var4;
                                var1 = undefined;
                                if (!var7) {
                                    _fun111352_ip = 51;
                                    continue _fun111352
                                }
                            case 48:
                                var1 = var4;
                            case 51:
                                var1 = var2.bind(var6)(var5, var1);
                                if (var1) {
                                    _fun111352_ip = 123;
                                    continue _fun111352
                                }
                            case 60:
                                var6 = _closure3_slot2;
                                var2 = var6.get;
                                var2 = var2.bind(var6)();
                                var7 = var3 == var2;
                                var6 = undefined;
                                if (var7) {
                                    _fun111352_ip = 90;
                                    continue _fun111352
                                }
                            case 85:
                                var6 = var2.id;
                            case 90:
                                var2 = _closure3_slot0;
                                var2 = var6 === var2;
                                if (!var2) {
                                    _fun111352_ip = 105;
                                    continue _fun111352
                                }
                            case 101:
                                var2 = var5 !== var4;
                            case 105:
                                if (!var2) {
                                    _fun111352_ip = 112;
                                    continue _fun111352
                                }
                            case 108:
                                var2 = var3 != var4;
                            case 112:
                                if (!var2) {
                                    _fun111352_ip = 123;
                                    continue _fun111352
                                }
                            case 115:
                                var1 = _closure3_slot27;
                                var1 = var1.bind(var0)();
                            case 123:
                                return var0;
                        }
                    };
                    var37 = {};
                    var39 = 13;
                    var39 = var33[var39];
                    var39 = var31.bind(var32)(var39);
                    var39 = var39.cheapWorkletShallowEqual;
                    var37.cheapWorkletShallowEqual = var39;
                    var37.focused = var24;
                    var37.id = var23;
                    var37.resetOnLayoutChange = var22;
                    var0.__closure = var37;
                    var37 = 13816224514199.0;
                    var0.__workletHash = var37;
                    var37 = _closure1_slot24;
                    var0.__initData = var37;
                    var0 = var8.bind(var19)(var7, var0);
                    var8 = var9.useCallback;
                    var7 = function() {
                        _fun111353: for (var _fun111353_ip = 0;;) switch (_fun111353_ip) {
                            case 0:
                                var1 = _closure3_slot23;
                                var0 = var1.get;
                                var1 = var0.bind(var1)();
                                var3 = _closure3_slot24;
                                var0 = var3.get;
                                var3 = var0.bind(var3)();
                                var0 = 0.05;
                                var0 = var3 + var0;
                                if (!(!(var1 < var0))) {
                                    _fun111353_ip = 542;
                                    continue _fun111353
                                }
                            case 50:
                                var1 = _closure3_slot16;
                                var0 = var1.get;
                                var1 = var0.bind(var1)();
                                var4 = _closure3_slot15;
                                var0 = var4.get;
                                var0 = var0.bind(var4)();
                                var1 = var1 * var0;
                                var3 = _closure3_slot17;
                                var0 = var3.get;
                                var3 = var0.bind(var3)();
                                var0 = var4.get;
                                var0 = var0.bind(var4)();
                                var5 = var3 * var0;
                                var6 = -50;
                                if (!(!(var1 < var6))) {
                                    _fun111353_ip = 538;
                                    continue _fun111353
                                }
                            case 119:
                                var4 = 50;
                                if (!(!(var1 > var4))) {
                                    _fun111353_ip = 538;
                                    continue _fun111353
                                }
                            case 129:
                                if (!(!(var5 < var6))) {
                                    _fun111353_ip = 538;
                                    continue _fun111353
                                }
                            case 136:
                                if (!(!(var5 > var4))) {
                                    _fun111353_ip = 538;
                                    continue _fun111353
                                }
                            case 143:
                                var8 = _closure3_slot5;
                                var0 = var8.get;
                                var0 = var0.bind(var8)();
                                var7 = var0.width;
                                var3 = _closure3_slot6;
                                var0 = var3.get;
                                var0 = var0.bind(var3)();
                                var10 = var0.width;
                                var9 = _closure3_slot15;
                                var0 = var9.get;
                                var0 = var0.bind(var9)();
                                var0 = var10 * var0;
                                var0 = var7 - var0;
                                var7 = 2;
                                var0 = var0 / var7;
                                var1 = var1 + var0;
                                var0 = var8.get;
                                var0 = var0.bind(var8)();
                                var10 = var0.height;
                                var0 = var3.get;
                                var0 = var0.bind(var3)();
                                var11 = var0.height;
                                var0 = var9.get;
                                var0 = var0.bind(var9)();
                                var0 = var11 * var0;
                                var0 = var10 - var0;
                                var0 = var0 / var7;
                                var5 = var5 + var0;
                                var0 = var3.get;
                                var0 = var0.bind(var3)();
                                var7 = var0.width;
                                var0 = var9.get;
                                var0 = var0.bind(var9)();
                                var7 = var7 * var0;
                                var0 = var3.get;
                                var0 = var0.bind(var3)();
                                var3 = var0.height;
                                var0 = var9.get;
                                var0 = var0.bind(var9)();
                                var3 = var3 * var0;
                                var0 = var8.get;
                                var0 = var0.bind(var8)();
                                var0 = var0.height;
                                var0 = var3 >= var0;
                                if (!var0) {
                                    _fun111353_ip = 343;
                                    continue _fun111353
                                }
                            case 339:
                                var0 = var1 >= var6;
                            case 343:
                                if (!var0) {
                                    _fun111353_ip = 353;
                                    continue _fun111353
                                }
                            case 346:
                                var8 = 25;
                                var0 = var1 <= var8;
                            case 353:
                                if (!var0) {
                                    _fun111353_ip = 389;
                                    continue _fun111353
                                }
                            case 356:
                                var9 = var1 + var7;
                                var10 = _closure3_slot5;
                                var8 = var10.get;
                                var8 = var8.bind(var10)();
                                var10 = var8.width;
                                var8 = 25;
                                var8 = var10 - var8;
                                var0 = var9 >= var8;
                            case 389:
                                if (!var0) {
                                    _fun111353_ip = 422;
                                    continue _fun111353
                                }
                            case 392:
                                var8 = var1 + var7;
                                var9 = _closure3_slot5;
                                var1 = var9.get;
                                var1 = var1.bind(var9)();
                                var1 = var1.width;
                                var1 = var1 + var4;
                                var0 = var8 <= var1;
                            case 422:
                                if (var0) {
                                    _fun111353_ip = 536;
                                    continue _fun111353
                                }
                            case 425:
                                var8 = _closure3_slot5;
                                var1 = var8.get;
                                var1 = var1.bind(var8)();
                                var1 = var1.width;
                                var1 = var7 >= var1;
                                if (!var1) {
                                    _fun111353_ip = 454;
                                    continue _fun111353
                                }
                            case 450:
                                var1 = var5 >= var6;
                            case 454:
                                if (!var1) {
                                    _fun111353_ip = 464;
                                    continue _fun111353
                                }
                            case 457:
                                var6 = 25;
                                var1 = var5 <= var6;
                            case 464:
                                if (!var1) {
                                    _fun111353_ip = 500;
                                    continue _fun111353
                                }
                            case 467:
                                var7 = var5 + var3;
                                var8 = _closure3_slot5;
                                var6 = var8.get;
                                var6 = var6.bind(var8)();
                                var8 = var6.height;
                                var6 = 25;
                                var6 = var8 - var6;
                                var1 = var7 >= var6;
                            case 500:
                                if (!var1) {
                                    _fun111353_ip = 533;
                                    continue _fun111353
                                }
                            case 503:
                                var3 = var5 + var3;
                                var5 = _closure3_slot5;
                                var2 = var5.get;
                                var2 = var2.bind(var5)();
                                var2 = var2.height;
                                var2 = var2 + var4;
                                var1 = var3 <= var2;
                            case 533:
                                var0 = var1;
                            case 536:
                                return var0;
                            case 538:
                                var0 = false;
                                return var0;
                            case 542:
                                var0 = false;
                                return var0;
                        }
                    };
                    var0 = {};
                    var0.coverScale = var29;
                    var0.fitScale = var10;
                    var19 = 0.05;
                    var0.MIN_ZOOM_FOR_COVER_SNAP_OFFSET = var19;
                    var0.translateX = var4;
                    var0.scale = var5;
                    var0.translateY = var3;
                    var19 = 50;
                    var0.SNAP_CENTER_THRESHOLD = var19;
                    var0.containerLayout = var20;
                    var0.videoDimensions = var35;
                    var0.SNAP_EDGE_OUTER_THRESHOLD = var19;
                    var19 = 25;
                    var0.SNAP_EDGE_INNER_THRESHOLD = var19;
                    var7.__closure = var0;
                    var0 = 3902544453390.0;
                    var7.__workletHash = var0;
                    var0 = _closure1_slot25;
                    var7.__initData = var0;
                    var0 = new Array(7);
                    var0[0] = var29;
                    var0[1] = var5;
                    var0[2] = var4;
                    var0[3] = var3;
                    var0[4] = var20;
                    var0[5] = var35;
                    var0[6] = var10;
                    var19 = var8.bind(var9)(var7, var0);
                    var _closure3_slot28 = var19;
                    var8 = var9.useCallback;
                    var7 = function() {
                        _fun111354: for (var _fun111354_ip = 0;;) switch (_fun111354_ip) {
                            case 0:
                                var2 = _closure3_slot18;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var5 = 0;
                                if (!(!(var1 > var5))) {
                                    _fun111354_ip = 460;
                                    continue _fun111354
                                }
                            case 25:
                                var2 = _closure3_slot19;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                if (var1) {
                                    _fun111354_ip = 425;
                                    continue _fun111354
                                }
                            case 44:
                                var2 = _closure3_slot15;
                                var1 = var2.get;
                                var2 = var1.bind(var2)();
                                var3 = _closure3_slot24;
                                var1 = var3.get;
                                var1 = var1.bind(var3)();
                                if (!(!(var2 < var1))) {
                                    _fun111354_ip = 408;
                                    continue _fun111354
                                }
                            case 77:
                                var1 = global;
                                var4 = var1.Math;
                                var3 = var4.max;
                                var7 = _closure3_slot6;
                                var2 = var7.get;
                                var2 = var2.bind(var7)();
                                var6 = var2.height;
                                var8 = _closure3_slot5;
                                var2 = var8.get;
                                var2 = var2.bind(var8)();
                                var9 = var2.height;
                                var10 = _closure3_slot15;
                                var2 = var10.get;
                                var2 = var2.bind(var10)();
                                var2 = var9 / var2;
                                var2 = var6 - var2;
                                var6 = 2;
                                var2 = var2 / var6;
                                var9 = var3.bind(var4)(var5, var2);
                                var4 = var1.Math;
                                var3 = var4.max;
                                var2 = var7.get;
                                var2 = var2.bind(var7)();
                                var7 = var2.width;
                                var2 = var8.get;
                                var2 = var2.bind(var8)();
                                var8 = var2.width;
                                var2 = var10.get;
                                var2 = var2.bind(var10)();
                                var2 = var8 / var2;
                                var2 = var7 - var2;
                                var2 = var2 / var6;
                                var15 = var3.bind(var4)(var5, var2);
                                var10 = _closure3_slot16;
                                var3 = var10.set;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var4 = 12;
                                var2 = var8[var4];
                                var5 = undefined;
                                var12 = var7.bind(var5)(var2);
                                var11 = var12.withSpring;
                                var14 = var1.Math;
                                var13 = var14.min;
                                var18 = var1.Math;
                                var17 = var18.max;
                                var16 = -var15;
                                var2 = var10.get;
                                var2 = var2.bind(var10)();
                                var2 = var17.bind(var18)(var16, var2);
                                var2 = var13.bind(var14)(var15, var2);
                                var6 = _closure1_slot10;
                                var2 = var11.bind(var12)(var2, var6);
                                var2 = var3.bind(var10)(var2);
                                var3 = _closure3_slot17;
                                var2 = var3.set;
                                var4 = var8[var4];
                                var5 = var7.bind(var5)(var4);
                                var4 = var5.withSpring;
                                var8 = var1.Math;
                                var7 = var8.min;
                                var12 = var1.Math;
                                var11 = var12.max;
                                var10 = -var9;
                                var1 = var3.get;
                                var1 = var1.bind(var3)();
                                var1 = var11.bind(var12)(var10, var1);
                                var1 = var7.bind(var8)(var9, var1);
                                var1 = var4.bind(var5)(var1, var6);
                                var1 = var2.bind(var3)(var1);
                                _fun111354_ip = 460;
                                continue _fun111354;
                            case 408:
                                var3 = _closure3_slot26;
                                var2 = undefined;
                                var1 = 'fit';
                                var1 = var3.bind(var2)(var1);
                                _fun111354_ip = 460;
                                continue _fun111354;
                            case 425:
                                var3 = _closure3_slot19;
                                var2 = var3.set;
                                var1 = false;
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure3_slot26;
                                var1 = undefined;
                                var0 = 'cover';
                                var0 = var2.bind(var1)(var0);
                                var0 = undefined;
                                return var0;
                            case 460:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = {};
                    var0.numGesturesActive = var2;
                    var0.isInSnap = var1;
                    var0.resetToDefaultSize = var34;
                    var0.scale = var5;
                    var0.fitScale = var10;
                    var0.videoDimensions = var35;
                    var0.containerLayout = var20;
                    var0.translateX = var4;
                    var27 = var33[var27];
                    var27 = var31.bind(var32)(var27);
                    var27 = var27.withSpring;
                    var0.withSpring = var27;
                    var0.SCALE_PHYSICS = var18;
                    var0.translateY = var3;
                    var7.__closure = var0;
                    var0 = 3493652911835.0;
                    var7.__workletHash = var0;
                    var0 = _closure1_slot26;
                    var7.__initData = var0;
                    var0 = new Array(9);
                    var0[0] = var10;
                    var0[1] = var2;
                    var0[2] = var1;
                    var0[3] = var5;
                    var0[4] = var35;
                    var0[5] = var20;
                    var0[6] = var4;
                    var0[7] = var3;
                    var0[8] = var34;
                    var18 = var8.bind(var9)(var7, var0);
                    var _closure3_slot29 = var18;
                    var0 = var33[var30];
                    var27 = var31.bind(var32)(var0);
                    var8 = var27.useAnimatedReaction;
                    var7 = function() {
                        _fun111355: for (var _fun111355_ip = 0;;) switch (_fun111355_ip) {
                            case 0:
                                var1 = _closure3_slot2;
                                var0 = var1.get;
                                var0 = var0.bind(var1)();
                                var1 = null;
                                var3 = var1 == var0;
                                var1 = undefined;
                                if (var3) {
                                    _fun111355_ip = 32;
                                    continue _fun111355
                                }
                            case 27:
                                var1 = var0.id;
                            case 32:
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                if (!var0) {
                                    _fun111355_ip = 78;
                                    continue _fun111355
                                }
                            case 43:
                                var3 = _closure3_slot25;
                                var1 = var3.get;
                                var1 = var1.bind(var3)();
                                var1 = !var1;
                                if (var1) {
                                    _fun111355_ip = 75;
                                    continue _fun111355
                                }
                            case 62:
                                var3 = _closure3_slot21;
                                var2 = var3.get;
                                var1 = var2.bind(var3)();
                            case 75:
                                var0 = var1;
                            case 78:
                                return var0;
                        }
                    };
                    var0 = {};
                    var0.focused = var24;
                    var0.id = var23;
                    var0.isInDefaultZoom = var15;
                    var0.isInPanToZoom = var16;
                    var7.__closure = var0;
                    var0 = 5209373786986.0;
                    var7.__workletHash = var0;
                    var0 = _closure1_slot27;
                    var7.__initData = var0;
                    var0 = function arg0, arg1() {
                        _fun111356: for (var _fun111356_ip = 0;;) switch (_fun111356_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = arg1;
                                if (!(var2 !== var0)) {
                                    _fun111356_ip = 24;
                                    continue _fun111356
                                }
                            case 10:
                                var1 = _closure3_slot8;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 24:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var37 = {};
                    var37.setIsFocusedVideoZoomed = var38;
                    var0.__closure = var37;
                    var37 = 10707557639101.0;
                    var0.__workletHash = var37;
                    var37 = _closure1_slot28;
                    var0.__initData = var37;
                    var0 = var8.bind(var27)(var7, var0);
                    var0 = var33[var30];
                    var27 = var31.bind(var32)(var0);
                    var8 = var27.useAnimatedReaction;
                    var7 = function() {
                        _fun111357: for (var _fun111357_ip = 0;;) switch (_fun111357_ip) {
                            case 0:
                                var2 = _closure3_slot2;
                                var1 = var2.get;
                                var2 = var1.bind(var2)();
                                var1 = null;
                                var3 = var1 == var2;
                                var1 = undefined;
                                if (var3) {
                                    _fun111357_ip = 32;
                                    continue _fun111357
                                }
                            case 27:
                                var1 = var2.id;
                            case 32:
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                        }
                    };
                    var0 = {};
                    var0.focused = var24;
                    var0.id = var23;
                    var7.__closure = var0;
                    var0 = 619124678280.0;
                    var7.__workletHash = var0;
                    var0 = _closure1_slot29;
                    var7.__initData = var0;
                    var0 = function arg0, arg1() {
                        _fun111358: for (var _fun111358_ip = 0;;) switch (_fun111358_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = arg1;
                                if (!(var1 !== var0)) {
                                    _fun111358_ip = 23;
                                    continue _fun111358
                                }
                            case 10:
                                var1 = _closure3_slot27;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 23:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var37 = {};
                    var37.resetOnLayoutChange = var22;
                    var0.__closure = var37;
                    var37 = 8458824233146.0;
                    var0.__workletHash = var37;
                    var37 = _closure1_slot30;
                    var0.__initData = var37;
                    var0 = var8.bind(var27)(var7, var0);
                    var0 = var33[var30];
                    var27 = var31.bind(var32)(var0);
                    var8 = var27.useAnimatedReaction;
                    var7 = function() {
                        var1 = _closure3_slot3;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = {};
                    var0.mode = var36;
                    var7.__closure = var0;
                    var0 = 7040117988961.0;
                    var7.__workletHash = var0;
                    var0 = _closure1_slot31;
                    var7.__initData = var0;
                    var0 = function arg0, arg1() {
                        _fun111360: for (var _fun111360_ip = 0;;) switch (_fun111360_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = arg1;
                                if (!(var1 !== var0)) {
                                    _fun111360_ip = 23;
                                    continue _fun111360
                                }
                            case 10:
                                var1 = _closure3_slot27;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 23:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var36 = {};
                    var36.resetOnLayoutChange = var22;
                    var0.__closure = var36;
                    var36 = 9279120690968.0;
                    var0.__workletHash = var36;
                    var36 = _closure1_slot32;
                    var0.__initData = var36;
                    var0 = var8.bind(var27)(var7, var0);
                    var0 = var33[var30];
                    var27 = var31.bind(var32)(var0);
                    var8 = var27.useAnimatedReaction;
                    var7 = function() {
                        var1 = _closure3_slot6;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = {};
                    var0.videoDimensions = var35;
                    var7.__closure = var0;
                    var0 = 8748184223523.0;
                    var7.__workletHash = var0;
                    var0 = _closure1_slot33;
                    var7.__initData = var0;
                    var0 = function arg0, arg1() {
                        _fun111362: for (var _fun111362_ip = 0;;) switch (_fun111362_ip) {
                            case 0:
                                var4 = arg0;
                                var5 = arg1;
                                var1 = _closure3_slot22;
                                var3 = null;
                                if (!(var3 != var1)) {
                                    _fun111362_ip = 81;
                                    continue _fun111362
                                }
                            case 19:
                                var6 = var4.width;
                                var7 = var3 == var5;
                                var1 = undefined;
                                var2 = undefined;
                                if (var7) {
                                    _fun111362_ip = 40;
                                    continue _fun111362
                                }
                            case 35:
                                var2 = var5.width;
                            case 40:
                                var2 = var6 === var2;
                                if (!var2) {
                                    _fun111362_ip = 70;
                                    continue _fun111362
                                }
                            case 47:
                                var4 = var4.height;
                                var6 = var3 == var5;
                                var3 = undefined;
                                if (var6) {
                                    _fun111362_ip = 66;
                                    continue _fun111362
                                }
                            case 61:
                                var3 = var5.height;
                            case 66:
                                var2 = var4 === var3;
                            case 70:
                                if (var2) {
                                    _fun111362_ip = 81;
                                    continue _fun111362
                                }
                            case 73:
                                var0 = _closure3_slot27;
                                var0 = var0.bind(var1)();
                            case 81:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var35 = {};
                    var35.currentSizeThreshold = var21;
                    var35.resetOnLayoutChange = var22;
                    var0.__closure = var35;
                    var35 = 8464422969486.0;
                    var0.__workletHash = var35;
                    var35 = _closure1_slot34;
                    var0.__initData = var35;
                    var0 = var8.bind(var27)(var7, var0);
                    var0 = var33[var30];
                    var27 = var31.bind(var32)(var0);
                    var8 = var27.useAnimatedReaction;
                    var7 = function() {
                        var1 = _closure3_slot23;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = {};
                    var0.coverScale = var29;
                    var7.__closure = var0;
                    var0 = 5444376625069.0;
                    var7.__workletHash = var0;
                    var0 = _closure1_slot35;
                    var7.__initData = var0;
                    var0 = function arg0, arg1() {
                        _fun111364: for (var _fun111364_ip = 0;;) switch (_fun111364_ip) {
                            case 0:
                                var2 = _closure3_slot22;
                                var1 = var2.get;
                                var2 = var1.bind(var2)();
                                var1 = 'cover';
                                var1 = var1 === var2;
                                if (!var1) {
                                    _fun111364_ip = 37;
                                    continue _fun111364
                                }
                            case 27:
                                var4 = arg0;
                                var3 = arg1;
                                var1 = var4 !== var3;
                            case 37:
                                if (!var1) {
                                    _fun111364_ip = 51;
                                    continue _fun111364
                                }
                            case 40:
                                var1 = _closure3_slot26;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 51:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var29 = {};
                    var29.currentSizeThreshold = var21;
                    var29.resetToDefaultSize = var34;
                    var0.__closure = var29;
                    var29 = 10764193588506.0;
                    var0.__workletHash = var29;
                    var29 = _closure1_slot36;
                    var0.__initData = var29;
                    var0 = var8.bind(var27)(var7, var0);
                    var0 = var33[var30];
                    var27 = var31.bind(var32)(var0);
                    var8 = var27.useAnimatedReaction;
                    var7 = function() {
                        var1 = _closure3_slot19;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = {};
                    var0.isInSnap = var1;
                    var7.__closure = var0;
                    var0 = 2178206594630.0;
                    var7.__workletHash = var0;
                    var0 = _closure1_slot37;
                    var7.__initData = var0;
                    var0 = function arg0, arg1() {
                        _fun111366: for (var _fun111366_ip = 0;;) switch (_fun111366_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = arg1;
                                var0 = var1 !== var0;
                                if (!var0) {
                                    _fun111366_ip = 16;
                                    continue _fun111366
                                }
                            case 13:
                                var0 = var1;
                            case 16:
                                if (!var0) {
                                    _fun111366_ip = 98;
                                    continue _fun111366
                                }
                            case 19:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 8;
                                var0 = var4[var0];
                                var2 = undefined;
                                var6 = var3.bind(var2)(var0);
                                var5 = var6.runOnJS;
                                var0 = 14;
                                var1 = var4[var0];
                                var1 = var3.bind(var2)(var1);
                                var1 = var1.triggerHapticFeedback;
                                var1 = var5.bind(var6)(var1);
                                var0 = var4[var0];
                                var0 = var3.bind(var2)(var0);
                                var0 = var0.HapticFeedbackTypes;
                                var0 = var0.IMPACT_LIGHT;
                                var0 = var1.bind(var2)(var0);
                            case 98:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var29 = {};
                    var30 = var33[var30];
                    var30 = var31.bind(var32)(var30);
                    var30 = var30.runOnJS;
                    var29.runOnJS = var30;
                    var30 = 14;
                    var34 = var33[var30];
                    var34 = var31.bind(var32)(var34);
                    var34 = var34.triggerHapticFeedback;
                    var29.triggerHapticFeedback = var34;
                    var30 = var33[var30];
                    var30 = var31.bind(var32)(var30);
                    var30 = var30.HapticFeedbackTypes;
                    var29.HapticFeedbackTypes = var30;
                    var0.__closure = var29;
                    var29 = 11115846398818.0;
                    var0.__workletHash = var29;
                    var28 = _closure1_slot38;
                    var0.__initData = var28;
                    var0 = var8.bind(var27)(var7, var0);
                    var0 = {};
                    var8 = var9.useMemo;
                    var7 = new Array(22);
                    var7[0] = var26;
                    var7[1] = var25;
                    var7[2] = var24;
                    var7[3] = var23;
                    var7[4] = var5;
                    var7[5] = var4;
                    var7[6] = var3;
                    var7[7] = var22;
                    var7[8] = var2;
                    var7[9] = var21;
                    var7[10] = var20;
                    var7[11] = var1;
                    var7[12] = var19;
                    var7[13] = var18;
                    var7[14] = var17;
                    var7[15] = var16;
                    var7[16] = var15;
                    var7[17] = var14;
                    var7[18] = var13;
                    var7[19] = var12;
                    var7[20] = var11;
                    var7[21] = var10;
                    var6 = function() { // Environment: var6
                        var16 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var6 = 15;
                        var1 = var17[var6];
                        var15 = undefined;
                        var1 = var16.bind(var15)(var1);
                        var4 = var1.Gesture;
                        var3 = var4.Simultaneous;
                        var1 = var17[var6];
                        var1 = var16.bind(var15)(var1);
                        var8 = var1.Gesture;
                        var5 = var8.Exclusive;
                        var1 = var17[var6];
                        var1 = var16.bind(var15)(var1);
                        var2 = var1.Gesture;
                        var1 = var2.Tap;
                        var9 = var1.bind(var2)();
                        var2 = var9.numberOfTaps;
                        var1 = 2;
                        var9 = var2.bind(var9)(var1);
                        var2 = var9.onTouchesMove;
                        var1 = function arg0, arg1() {
                            var1 = arg1;
                            var0 = var1.fail;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var10 = {};
                        var1.__closure = var10;
                        var10 = 17368742583362.0;
                        var1.__workletHash = var10;
                        var10 = _closure1_slot40;
                        var1.__initData = var10;
                        var9 = var2.bind(var9)(var1);
                        var2 = var9.onStart;
                        var1 = function() {
                            _fun111369: for (var _fun111369_ip = 0;;) switch (_fun111369_ip) {
                                case 0:
                                    var2 = _closure3_slot25;
                                    var1 = var2.get;
                                    var1 = var1.bind(var2)();
                                    if (var1) {
                                        _fun111369_ip = 34;
                                        continue _fun111369
                                    }
                                case 19:
                                    var2 = _closure3_slot27;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
                                    _fun111369_ip = 163;
                                    continue _fun111369;
                                case 34:
                                    var2 = _closure3_slot2;
                                    var1 = var2.get;
                                    var1 = var1.bind(var2)();
                                    var3 = null;
                                    var5 = var3 == var1;
                                    var2 = undefined;
                                    var4 = undefined;
                                    if (var5) {
                                        _fun111369_ip = 65;
                                        continue _fun111369
                                    }
                                case 60:
                                    var4 = var1.id;
                                case 65:
                                    var1 = _closure3_slot0;
                                    if (!(var4 === var1)) {
                                        _fun111369_ip = 117;
                                        continue _fun111369
                                    }
                                case 73:
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var1 = 8;
                                    var1 = var5[var1];
                                    var5 = var4.bind(var2)(var1);
                                    var4 = var5.runOnJS;
                                    var1 = _closure3_slot11;
                                    var1 = var4.bind(var5)(var1);
                                    var1 = var1.bind(var2)(var3);
                                    _fun111369_ip = 163;
                                    continue _fun111369;
                                case 117:
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var1 = 8;
                                    var1 = var4[var1];
                                    var4 = var3.bind(var2)(var1);
                                    var3 = var4.runOnJS;
                                    var1 = _closure3_slot11;
                                    var1 = var3.bind(var4)(var1);
                                    var0 = _closure3_slot0;
                                    var0 = var1.bind(var2)(var0);
                                case 163:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var10 = {};
                        var11 = _closure3_slot25;
                        var10.isInDefaultZoom = var11;
                        var11 = _closure3_slot27;
                        var10.resetOnLayoutChange = var11;
                        var28 = _closure3_slot2;
                        var10.focused = var28;
                        var27 = _closure3_slot0;
                        var10.id = var27;
                        var25 = 8;
                        var11 = var17[var25];
                        var11 = var16.bind(var15)(var11);
                        var11 = var11.runOnJS;
                        var10.runOnJS = var11;
                        var11 = _closure3_slot11;
                        var10.setFocused = var11;
                        var1.__closure = var10;
                        var10 = 10743965328356.0;
                        var1.__workletHash = var10;
                        var10 = _closure1_slot39;
                        var1.__initData = var10;
                        var2 = var2.bind(var9)(var1);
                        var1 = var17[var6];
                        var1 = var16.bind(var15)(var1);
                        var9 = var1.Gesture;
                        var1 = var9.Tap;
                        var10 = var1.bind(var9)();
                        var9 = var10.onTouchesMove;
                        var1 = function arg0, arg1() {
                            var1 = arg1;
                            var0 = var1.fail;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var11 = {};
                        var1.__closure = var11;
                        var11 = 8766053850176.0;
                        var1.__workletHash = var11;
                        var11 = _closure1_slot42;
                        var1.__initData = var11;
                        var10 = var9.bind(var10)(var1);
                        var9 = var10.onStart;
                        var1 = function() {
                            _fun111371: for (var _fun111371_ip = 0;;) switch (_fun111371_ip) {
                                case 0:
                                    var2 = _closure3_slot13;
                                    var1 = var2.get;
                                    var1 = var1.bind(var2)();
                                    var3 = var1.mode;
                                    var2 = _closure1_slot8;
                                    var2 = var2.HIDDEN;
                                    if (!(var3 !== var2)) {
                                        _fun111371_ip = 90;
                                        continue _fun111371
                                    }
                                case 38:
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 8;
                                    var2 = var4[var2];
                                    var4 = undefined;
                                    var5 = var3.bind(var4)(var2);
                                    var3 = var5.runOnJS;
                                    var2 = _closure3_slot12;
                                    var3 = var3.bind(var5)(var2);
                                    var2 = {};
                                    var5 = true;
                                    var2.debounce = var5;
                                    var2 = var3.bind(var4)(var2);
                                    _fun111371_ip = 140;
                                    continue _fun111371;
                                case 90:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 8;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var3 = var3.bind(var2)(var1);
                                    var1 = var3.runOnJS;
                                    var0 = _closure3_slot14;
                                    var1 = var1.bind(var3)(var0);
                                    var0 = {};
                                    var3 = true;
                                    var0.debounce = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 140:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var11 = {};
                        var12 = _closure3_slot13;
                        var11.controlsSpecs = var12;
                        var12 = _closure1_slot8;
                        var11.VoicePanelControlsModes = var12;
                        var12 = var17[var25];
                        var12 = var16.bind(var15)(var12);
                        var12 = var12.runOnJS;
                        var11.runOnJS = var12;
                        var12 = _closure3_slot14;
                        var11.showControls = var12;
                        var24 = _closure3_slot12;
                        var11.hideControls = var24;
                        var1.__closure = var11;
                        var11 = 11260765819879.0;
                        var1.__workletHash = var11;
                        var11 = _closure1_slot41;
                        var1.__initData = var11;
                        var1 = var9.bind(var10)(var1);
                        var2 = var5.bind(var8)(var2, var1);
                        var1 = var17[var6];
                        var1 = var16.bind(var15)(var1);
                        var5 = var1.Gesture;
                        var1 = var5.Pinch;
                        var9 = var1.bind(var5)();
                        var8 = var9.enabled;
                        var5 = _closure3_slot4;
                        var1 = !var5;
                        var9 = var8.bind(var9)(var1);
                        var8 = var9.onTouchesDown;
                        var1 = function arg0, arg1() {
                            _fun111372: for (var _fun111372_ip = 0;;) switch (_fun111372_ip) {
                                case 0:
                                    var2 = arg1;
                                    var3 = _closure3_slot2;
                                    var0 = var3.get;
                                    var4 = var0.bind(var3)();
                                    var0 = null;
                                    var5 = var0 == var4;
                                    var0 = undefined;
                                    var3 = undefined;
                                    if (var5) {
                                        _fun111372_ip = 37;
                                        continue _fun111372
                                    }
                                case 32:
                                    var3 = var4.id;
                                case 37:
                                    var1 = _closure3_slot0;
                                    if (!(var3 !== var1)) {
                                        _fun111372_ip = 55;
                                        continue _fun111372
                                    }
                                case 45:
                                    var1 = var2.fail;
                                    var1 = var1.bind(var2)();
                                case 55:
                                    return var0;
                            }
                        };
                        var10 = {};
                        var10.focused = var28;
                        var10.id = var27;
                        var1.__closure = var10;
                        var10 = 8765017804058.0;
                        var1.__workletHash = var10;
                        var10 = _closure1_slot46;
                        var1.__initData = var10;
                        var10 = var8.bind(var9)(var1);
                        var8 = var10.onStart;
                        var1 = function() {
                            var3 = _closure3_slot18;
                            var2 = var3.set;
                            var1 = var3.get;
                            var4 = var1.bind(var3)();
                            var1 = 1;
                            var1 = var4 + var1;
                            var1 = var2.bind(var3)(var1);
                            var3 = _closure3_slot21;
                            var2 = var3.set;
                            var1 = false;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure3_slot22;
                            var1 = var2.set;
                            var0 = null;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var11 = {};
                        var18 = _closure3_slot18;
                        var11.numGesturesActive = var18;
                        var9 = _closure3_slot21;
                        var11.isInPanToZoom = var9;
                        var23 = _closure3_slot22;
                        var11.currentSizeThreshold = var23;
                        var1.__closure = var11;
                        var11 = 3449238089307.0;
                        var1.__workletHash = var11;
                        var11 = _closure1_slot45;
                        var1.__initData = var11;
                        var10 = var8.bind(var10)(var1);
                        var8 = var10.onChange;
                        var1 = function arg0() {
                            var3 = arg0;
                            var7 = _closure3_slot15;
                            var4 = var7.set;
                            var0 = var7.get;
                            var5 = var0.bind(var7)();
                            var9 = _closure1_slot16;
                            var0 = var7.get;
                            var8 = var0.bind(var7)();
                            var6 = var3.scaleChange;
                            var2 = _closure3_slot24;
                            var0 = var2.get;
                            var2 = var0.bind(var2)();
                            var0 = undefined;
                            var2 = var9.bind(var0)(var8, var6, var2);
                            var2 = var5 * var2;
                            var2 = var4.bind(var7)(var2);
                            var4 = var3.focalX;
                            var8 = _closure3_slot5;
                            var2 = var8.get;
                            var2 = var2.bind(var8)();
                            var2 = var2.width;
                            var5 = 2;
                            var2 = var2 / var5;
                            var6 = var4 - var2;
                            var4 = var3.focalY;
                            var2 = var8.get;
                            var2 = var2.bind(var8)();
                            var2 = var2.height;
                            var2 = var2 / var5;
                            var5 = var4 - var2;
                            var2 = var3.scaleChange;
                            var4 = 1;
                            var9 = var2 - var4;
                            var2 = var7.get;
                            var8 = var2.bind(var7)();
                            var2 = -1;
                            var6 = var2 * var6;
                            var6 = var6 * var9;
                            var6 = var6 / var8;
                            var3 = var3.scaleChange;
                            var4 = var3 - var4;
                            var3 = var7.get;
                            var3 = var3.bind(var7)();
                            var2 = var2 * var5;
                            var2 = var2 * var4;
                            var5 = var2 / var3;
                            var4 = _closure3_slot16;
                            var3 = var4.set;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var2 = var2 + var6;
                            var2 = var3.bind(var4)(var2);
                            var4 = _closure3_slot17;
                            var3 = var4.set;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var2 = var2 + var5;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure3_slot19;
                            var2 = var3.set;
                            var1 = _closure3_slot28;
                            var1 = var1.bind(var0)();
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var11 = {};
                        var13 = _closure3_slot15;
                        var11.scale = var13;
                        var22 = _closure1_slot16;
                        var11.getScaleChangeWithOverscroll = var22;
                        var21 = _closure3_slot24;
                        var11.fitScale = var21;
                        var12 = _closure3_slot5;
                        var11.containerLayout = var12;
                        var14 = _closure3_slot16;
                        var11.translateX = var14;
                        var12 = _closure3_slot17;
                        var11.translateY = var12;
                        var20 = _closure3_slot19;
                        var11.isInSnap = var20;
                        var19 = _closure3_slot28;
                        var11.isInCoverSnap = var19;
                        var1.__closure = var11;
                        var11 = 2077670235308.0;
                        var1.__workletHash = var11;
                        var11 = _closure1_slot44;
                        var1.__initData = var11;
                        var10 = var8.bind(var10)(var1);
                        var8 = var10.onEnd;
                        var1 = function() {
                            var3 = _closure3_slot18;
                            var2 = var3.set;
                            var1 = var3.get;
                            var4 = var1.bind(var3)();
                            var1 = 1;
                            var1 = var4 - var1;
                            var1 = var2.bind(var3)(var1);
                            var1 = _closure3_slot29;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var29 = {};
                        var29.numGesturesActive = var18;
                        var11 = _closure3_slot29;
                        var29.handleMovementEnd = var11;
                        var1.__closure = var29;
                        var29 = 5853458336611.0;
                        var1.__workletHash = var29;
                        var29 = _closure1_slot43;
                        var1.__initData = var29;
                        var1 = var8.bind(var10)(var1);
                        var6 = var17[var6];
                        var6 = var16.bind(var15)(var6);
                        var8 = var6.Gesture;
                        var6 = var8.Pan;
                        var8 = var6.bind(var8)();
                        var6 = var8.enabled;
                        var5 = !var5;
                        var8 = var6.bind(var8)(var5);
                        var6 = var8.requireExternalGestureToFail;
                        var5 = _closure3_slot10;
                        var8 = var6.bind(var8)(var5);
                        var6 = var8.averageTouches;
                        var5 = true;
                        var8 = var6.bind(var8)(var5);
                        var6 = var8.onTouchesDown;
                        var5 = function arg0, arg1() {
                            _fun111376: for (var _fun111376_ip = 0;;) switch (_fun111376_ip) {
                                case 0:
                                    var2 = arg1;
                                    var3 = _closure3_slot2;
                                    var0 = var3.get;
                                    var4 = var0.bind(var3)();
                                    var0 = null;
                                    var5 = var0 == var4;
                                    var0 = undefined;
                                    var3 = undefined;
                                    if (var5) {
                                        _fun111376_ip = 37;
                                        continue _fun111376
                                    }
                                case 32:
                                    var3 = var4.id;
                                case 37:
                                    var1 = _closure3_slot0;
                                    if (!(var3 !== var1)) {
                                        _fun111376_ip = 55;
                                        continue _fun111376
                                    }
                                case 45:
                                    var1 = var2.fail;
                                    var1 = var1.bind(var2)();
                                case 55:
                                    return var0;
                            }
                        };
                        var10 = {};
                        var10.focused = var28;
                        var10.id = var27;
                        var5.__closure = var10;
                        var10 = 2184905113389.0;
                        var5.__workletHash = var10;
                        var10 = _closure1_slot52;
                        var5.__initData = var10;
                        var8 = var6.bind(var8)(var5);
                        var6 = var8.onBegin;
                        var5 = function() {
                            var0 = global;
                            var2 = var0.Date;
                            var1 = var2.now;
                            var4 = var1.bind(var2)();
                            var2 = _closure3_slot20;
                            var3 = var2.get;
                            var3 = var3.bind(var2)();
                            var5 = var4 - var3;
                            var4 = _closure3_slot21;
                            var3 = var4.set;
                            var1 = 250;
                            var1 = var5 <= var1;
                            var1 = var3.bind(var4)(var1);
                            var1 = var2.set;
                            var3 = var0.Date;
                            var0 = var3.now;
                            var0 = var0.bind(var3)();
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var10 = {};
                        var26 = _closure3_slot20;
                        var10.lastTapTimestamp = var26;
                        var26 = 250;
                        var10.PAN_TO_ZOOM_TAP_TIME_MILLIS = var26;
                        var10.isInPanToZoom = var9;
                        var5.__closure = var10;
                        var10 = 7713579688732.0;
                        var5.__workletHash = var10;
                        var10 = _closure1_slot51;
                        var5.__initData = var10;
                        var8 = var6.bind(var8)(var5);
                        var6 = var8.onStart;
                        var5 = function() {
                            _fun111378: for (var _fun111378_ip = 0;;) switch (_fun111378_ip) {
                                case 0:
                                    var2 = _closure3_slot21;
                                    var1 = var2.get;
                                    var1 = var1.bind(var2)();
                                    if (!var1) {
                                        _fun111378_ip = 62;
                                        continue _fun111378
                                    }
                                case 19:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 8;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var4 = var3.bind(var2)(var1);
                                    var3 = var4.runOnJS;
                                    var1 = _closure3_slot12;
                                    var1 = var3.bind(var4)(var1);
                                    var1 = var1.bind(var2)();
                                case 62:
                                    var3 = _closure3_slot18;
                                    var2 = var3.set;
                                    var1 = var3.get;
                                    var4 = var1.bind(var3)();
                                    var1 = 1;
                                    var1 = var4 + var1;
                                    var1 = var2.bind(var3)(var1);
                                    var2 = _closure3_slot22;
                                    var1 = var2.set;
                                    var0 = null;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var10 = {};
                        var10.isInPanToZoom = var9;
                        var25 = var17[var25];
                        var25 = var16.bind(var15)(var25);
                        var25 = var25.runOnJS;
                        var10.runOnJS = var25;
                        var10.hideControls = var24;
                        var10.numGesturesActive = var18;
                        var10.currentSizeThreshold = var23;
                        var5.__closure = var10;
                        var10 = 16349993539830.0;
                        var5.__workletHash = var10;
                        var10 = _closure1_slot50;
                        var5.__initData = var10;
                        var8 = var6.bind(var8)(var5);
                        var6 = var8.onChange;
                        var5 = function arg0() {
                            _fun111379: for (var _fun111379_ip = 0;;) switch (_fun111379_ip) {
                                case 0:
                                    var1 = arg0;
                                    var3 = _closure3_slot21;
                                    var2 = var3.get;
                                    var2 = var2.bind(var3)();
                                    if (var2) {
                                        _fun111379_ip = 120;
                                        continue _fun111379
                                    }
                                case 22:
                                    var4 = _closure3_slot16;
                                    var3 = var4.set;
                                    var2 = var4.get;
                                    var5 = var2.bind(var4)();
                                    var6 = var1.changeX;
                                    var7 = _closure3_slot15;
                                    var2 = var7.get;
                                    var2 = var2.bind(var7)();
                                    var2 = var6 / var2;
                                    var2 = var5 + var2;
                                    var2 = var3.bind(var4)(var2);
                                    var4 = _closure3_slot17;
                                    var3 = var4.set;
                                    var2 = var4.get;
                                    var5 = var2.bind(var4)();
                                    var6 = var1.changeY;
                                    var2 = var7.get;
                                    var2 = var2.bind(var7)();
                                    var2 = var6 / var2;
                                    var2 = var5 + var2;
                                    var2 = var3.bind(var4)(var2);
                                    _fun111379_ip = 212;
                                    continue _fun111379;
                                case 120:
                                    var2 = var1.changeY;
                                    var1 = 0.0075;
                                    var9 = var2 * var1;
                                    var3 = _closure3_slot15;
                                    var2 = var3.set;
                                    var1 = var3.get;
                                    var4 = var1.bind(var3)();
                                    var8 = _closure1_slot16;
                                    var1 = var3.get;
                                    var7 = var1.bind(var3)();
                                    var5 = _closure3_slot24;
                                    var1 = var5.get;
                                    var6 = var1.bind(var5)();
                                    var5 = undefined;
                                    var1 = 1;
                                    var1 = var1 + var9;
                                    var1 = var8.bind(var5)(var7, var1, var6);
                                    var1 = var4 * var1;
                                    var1 = var2.bind(var3)(var1);
                                case 212:
                                    var3 = _closure3_slot19;
                                    var2 = var3.set;
                                    var1 = _closure3_slot28;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)();
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var10 = {};
                        var10.isInPanToZoom = var9;
                        var23 = 0.0075;
                        var10.PAN_TO_ZOOM_SCALE_FACTOR = var23;
                        var10.scale = var13;
                        var10.getScaleChangeWithOverscroll = var22;
                        var10.fitScale = var21;
                        var10.translateX = var14;
                        var10.translateY = var12;
                        var10.isInSnap = var20;
                        var10.isInCoverSnap = var19;
                        var5.__closure = var10;
                        var10 = 17282206686388.0;
                        var5.__workletHash = var10;
                        var10 = _closure1_slot49;
                        var5.__initData = var10;
                        var8 = var6.bind(var8)(var5);
                        var6 = var8.onEnd;
                        var5 = function arg0() {
                            var2 = arg0;
                            var4 = _closure3_slot18;
                            var3 = var4.set;
                            var0 = var4.get;
                            var5 = var0.bind(var4)();
                            var0 = 1;
                            var0 = var5 - var0;
                            var0 = var3.bind(var4)(var0);
                            var11 = _closure3_slot16;
                            var4 = var11.set;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 12;
                            var3 = var8[var5];
                            var0 = undefined;
                            var13 = var6.bind(var0)(var3);
                            var12 = var13.withSpring;
                            var3 = var11.get;
                            var14 = var3.bind(var11)();
                            var3 = var2.velocityX;
                            var9 = 0.05;
                            var15 = var3 * var9;
                            var10 = _closure3_slot15;
                            var3 = var10.get;
                            var3 = var3.bind(var10)();
                            var3 = var15 / var3;
                            var3 = var14 + var3;
                            var7 = _closure1_slot10;
                            var3 = var12.bind(var13)(var3, var7);
                            var3 = var4.bind(var11)(var3);
                            var4 = _closure3_slot17;
                            var3 = var4.set;
                            var5 = var8[var5];
                            var6 = var6.bind(var0)(var5);
                            var5 = var6.withSpring;
                            var8 = var4.get;
                            var8 = var8.bind(var4)();
                            var2 = var2.velocityY;
                            var9 = var2 * var9;
                            var2 = var10.get;
                            var2 = var2.bind(var10)();
                            var2 = var9 / var2;
                            var2 = var8 + var2;
                            var2 = var5.bind(var6)(var2, var7);
                            var2 = var3.bind(var4)(var2);
                            var1 = _closure3_slot29;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var10 = {};
                        var10.numGesturesActive = var18;
                        var10.translateX = var14;
                        var14 = 12;
                        var14 = var17[var14];
                        var14 = var16.bind(var15)(var14);
                        var14 = var14.withSpring;
                        var10.withSpring = var14;
                        var14 = 0.05;
                        var10.FLING_VELOCITY_SCALING = var14;
                        var10.scale = var13;
                        var13 = _closure1_slot10;
                        var10.SCALE_PHYSICS = var13;
                        var10.translateY = var12;
                        var10.handleMovementEnd = var11;
                        var5.__closure = var10;
                        var10 = 10045783163820.0;
                        var5.__workletHash = var10;
                        var10 = _closure1_slot48;
                        var5.__initData = var10;
                        var6 = var6.bind(var8)(var5);
                        var5 = var6.onFinalize;
                        var0 = function() {
                            var2 = _closure3_slot21;
                            var1 = var2.set;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var8 = {};
                        var8.isInPanToZoom = var9;
                        var0.__closure = var8;
                        var8 = 2318423816868.0;
                        var0.__workletHash = var8;
                        var7 = _closure1_slot47;
                        var0.__initData = var7;
                        var0 = var5.bind(var6)(var0);
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var6 = var8.bind(var9)(var6, var7);
                    var0.gesture = var6;
                    var0.scale = var5;
                    var0.translateX = var4;
                    var0.translateY = var3;
                    var0.numGesturesActive = var2;
                    var0.isInSnap = var1;
                    return var0;
                };
                var2 = var2.bind(var3)(var4);
                var4 = var2.gesture;
                var28 = var2.scale;
                _closure2_slot20 = var28;
                var27 = var2.translateX;
                _closure2_slot21 = var27;
                var26 = var2.translateY;
                _closure2_slot22 = var26;
                var9 = var2.isInSnap;
                _closure2_slot23 = var9;
                var5 = _closure1_slot5;
                var2 = var5.get;
                var2 = var2.bind(var5)();
                _closure2_slot24 = var2;
                var16 = var6.useCallback;
                var5 = new Array(6);
                var5[0] = var21;
                var5[1] = var17;
                var5[2] = var28;
                var5[3] = var30;
                var5[4] = var32;
                var5[5] = var2;
                var2 = function() { // Environment: var0
                    _fun111382: for (var _fun111382_ip = 0;;) switch (_fun111382_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            var1 = var1 == var2;
                            if (var1) {
                                _fun111382_ip = 20;
                                continue _fun111382
                            }
                        case 16:
                            var1 = _closure2_slot4;
                        case 20:
                            if (var1) {
                                _fun111382_ip = 53;
                                continue _fun111382
                            }
                        case 23:
                            var3 = _closure2_slot8;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = _closure1_slot6;
                            var2 = var2.PANEL;
                            var1 = var3 !== var2;
                        case 53:
                            if (var1) {
                                _fun111382_ip = 173;
                                continue _fun111382
                            }
                        case 56:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 21;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.updateVideoSize;
                            var2 = _closure2_slot1;
                            var1 = {};
                            var6 = _closure2_slot14;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            var6 = var5.width;
                            var5 = _closure2_slot24;
                            var5 = var6 * var5;
                            var1.width = var5;
                            var6 = _closure2_slot14;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            var6 = var5.height;
                            var5 = _closure2_slot24;
                            var5 = var6 * var5;
                            var1.height = var5;
                            var5 = _closure2_slot20;
                            var0 = var5.get;
                            var0 = var0.bind(var5)();
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 173:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var16.bind(var6)(var2, var5);
                _closure2_slot25 = var2;
                var5 = var7[var25];
                var31 = var1.bind(var3)(var5);
                var17 = var31.useAnimatedReaction;
                var16 = function() {
                    var2 = _closure2_slot20;
                    var0 = var2.get;
                    var2 = var0.bind(var2)();
                    var0 = new Array(3);
                    var0[0] = var2;
                    var3 = _closure2_slot14;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var0[1] = var2;
                    var2 = _closure2_slot8;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0[2] = var1;
                    return var0;
                };
                var5 = {};
                var5.scale = var28;
                var5.videoDimensions = var30;
                var5.mode = var32;
                var16.__closure = var5;
                var5 = 16492795532326.0;
                var16.__workletHash = var5;
                var5 = _closure1_slot58;
                var16.__initData = var5;
                var5 = function arg0, arg1() {
                    _fun111384: for (var _fun111384_ip = 0;;) switch (_fun111384_ip) {
                        case 0:
                            var3 = arg1;
                            var1 = _closure2_slot1;
                            var4 = null;
                            if (!(var4 != var1)) {
                                _fun111384_ip = 109;
                                continue _fun111384
                            }
                        case 16:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 13;
                            var5 = var5[var1];
                            var1 = undefined;
                            var6 = var6.bind(var1)(var5);
                            var5 = var6.cheapWorkletShallowEqual;
                            var7 = var4 != var3;
                            var4 = undefined;
                            if (!var7) {
                                _fun111384_ip = 59;
                                continue _fun111384
                            }
                        case 56:
                            var4 = var3;
                        case 59:
                            var3 = arg0;
                            var3 = var5.bind(var6)(var3, var4);
                            if (var3) {
                                _fun111384_ip = 109;
                                continue _fun111384
                            }
                        case 71:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 8;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot25;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 109:
                            var0 = undefined;
                            return var0;
                    }
                };
                var32 = {};
                var32.streamId = var21;
                var33 = var7[var33];
                var33 = var1.bind(var3)(var33);
                var33 = var33.cheapWorkletShallowEqual;
                var32.cheapWorkletShallowEqual = var33;
                var33 = var7[var25];
                var33 = var1.bind(var3)(var33);
                var33 = var33.runOnJS;
                var32.runOnJS = var33;
                var32.respondToVideoSizeUpdate = var2;
                var5.__closure = var32;
                var32 = 5259362546534.0;
                var5.__workletHash = var32;
                var32 = _closure1_slot59;
                var5.__initData = var32;
                var5 = var17.bind(var31)(var16, var5);
                var16 = var6.useEffect;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.addOnPipModeChangedListener;
                    var1 = function(arg0) { // Environment: var0
                        _fun111386: for (var _fun111386_ip = 0;;) switch (_fun111386_ip) {
                            case 0:
                                var0 = arg0;
                                if (var0) {
                                    _fun111386_ip = 19;
                                    continue _fun111386
                                }
                            case 6:
                                var1 = _closure2_slot25;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 19:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        _fun111387: for (var _fun111387_ip = 0;;) switch (_fun111387_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun111387_ip = 27;
                                    continue _fun111387
                                }
                            case 13:
                                var1 = _closure3_slot0;
                                var0 = var1.remove;
                                var0 = var0.bind(var1)();
                            case 27:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var16.bind(var6)(var2, var5);
                var2 = var7[var25];
                var16 = var1.bind(var3)(var2);
                var5 = var16.useAnimatedStyle;
                var2 = function() {
                    _fun111388: for (var _fun111388_ip = 0;;) switch (_fun111388_ip) {
                        case 0:
                            var1 = _closure2_slot14;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            var6 = var0.width;
                            var7 = var0.height;
                            var0 = _closure2_slot15;
                            var3 = var0.mode;
                            var0 = _closure1_slot9;
                            var0 = var0.IN_APP;
                            var2 = var6;
                            var1 = var7;
                            if (!(var3 === var0)) {
                                _fun111388_ip = 193;
                                continue _fun111388
                            }
                        case 61:
                            if (!(!(var6 > var7))) {
                                _fun111388_ip = 127;
                                continue _fun111388
                            }
                        case 65:
                            var0 = _closure2_slot15;
                            var0 = var0.width;
                            var0 = var0 / var6;
                            var3 = var7 * var0;
                            var5 = _closure2_slot20;
                            var0 = var5.get;
                            var0 = var0.bind(var5)();
                            var0 = var3 / var0;
                            var3 = _closure2_slot15;
                            var5 = var3.width;
                            var8 = _closure2_slot20;
                            var3 = var8.get;
                            var3 = var3.bind(var8)();
                            var3 = var5 / var3;
                            _fun111388_ip = 187;
                            continue _fun111388;
                        case 127:
                            var5 = _closure2_slot15;
                            var5 = var5.height;
                            var5 = var5 / var7;
                            var6 = var6 * var5;
                            var7 = _closure2_slot20;
                            var5 = var7.get;
                            var5 = var5.bind(var7)();
                            var3 = var6 / var5;
                            var5 = _closure2_slot15;
                            var7 = var5.height;
                            var8 = _closure2_slot20;
                            var5 = var8.get;
                            var5 = var5.bind(var8)();
                            var0 = var7 / var5;
                        case 187:
                            var2 = var3;
                            var1 = var0;
                        case 193:
                            var0 = {};
                            var0.width = var2;
                            var0.height = var1;
                            var2 = _closure2_slot13;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var3 = 1;
                            var1 = var3;
                            if (!var2) {
                                _fun111388_ip = 227;
                                continue _fun111388
                            }
                        case 225:
                            var1 = 0;
                        case 227:
                            var0.opacity = var1;
                            var2 = {};
                            var5 = _closure2_slot20;
                            var1 = var5.get;
                            var1 = var1.bind(var5)();
                            var2.scale = var1;
                            var1 = new Array(4);
                            var1[0] = var2;
                            var2 = {};
                            var6 = _closure2_slot21;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            var2.translateX = var5;
                            var1[1] = var2;
                            var2 = {};
                            var6 = _closure2_slot22;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            var2.translateY = var5;
                            var1[2] = var2;
                            var2 = {};
                            var4 = _closure2_slot5;
                            if (!var4) {
                                _fun111388_ip = 322;
                                continue _fun111388
                            }
                        case 316:
                            var3 = -1;
                        case 322:
                            var2.scaleX = var3;
                            var1[3] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var17 = {};
                var17.videoDimensions = var30;
                var17.pipState = var29;
                var29 = _closure1_slot9;
                var17.VoicePanelPIPModes = var29;
                var17.scale = var28;
                var17.disableAnimations = var8;
                var17.translateX = var27;
                var17.translateY = var26;
                var17.mirror = var18;
                var2.__closure = var17;
                var17 = 4149619035590.0;
                var2.__workletHash = var17;
                var17 = _closure1_slot60;
                var2.__initData = var17;
                var18 = var5.bind(var16)(var2);
                var2 = var7[var25];
                var16 = var1.bind(var3)(var2);
                var5 = var16.useAnimatedStyle;
                var2 = function() {
                    _fun111389: for (var _fun111389_ip = 0;;) switch (_fun111389_ip) {
                        case 0:
                            var1 = _closure2_slot23;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun111389_ip = 213;
                                continue _fun111389
                            }
                        case 22:
                            var0 = {
                                'position': 'absolute',
                                'top': 4294967295,
                                'left': 4294967295,
                                'bottom': 4294967295,
                                'right': 4294967295,
                                'borderWidth': 2,
                                'borderRadius': 26,
                                'overflow': 'hidden',
                                'borderColor': 'white'
                            };
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 8;
                            var2 = var4[var2];
                            var10 = undefined;
                            var4 = var3.bind(var10)(var2);
                            var3 = var4.withDelay;
                            var5 = _closure2_slot9;
                            var2 = var5.get;
                            var2 = var2.bind(var5)();
                            var11 = null;
                            var5 = var11 == var2;
                            var8 = undefined;
                            if (var5) {
                                _fun111389_ip = 96;
                                continue _fun111389
                            }
                        case 91:
                            var8 = var2.id;
                        case 96:
                            var7 = _closure2_slot0;
                            var2 = 0;
                            if (!(var8 !== var7)) {
                                _fun111389_ip = 112;
                                continue _fun111389
                            }
                        case 106:
                            var2 = 300;
                        case 112:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 23;
                            var7 = var9[var7];
                            var8 = var8.bind(var10)(var7);
                            var7 = var8.withTiming;
                            var12 = _closure2_slot9;
                            var9 = var12.get;
                            var9 = var9.bind(var12)();
                            var11 = var11 == var9;
                            var10 = undefined;
                            if (var11) {
                                _fun111389_ip = 164;
                                continue _fun111389
                            }
                        case 159:
                            var10 = var9.id;
                        case 164:
                            var9 = _closure2_slot0;
                            var6 = 0.3;
                            if (!(var10 === var9)) {
                                _fun111389_ip = 184;
                                continue _fun111389
                            }
                        case 182:
                            var6 = 0;
                        case 184:
                            var5 = _closure1_slot13;
                            var1 = 'animate-never';
                            var1 = var7.bind(var8)(var6, var5, var1);
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            _fun111389_ip = 227;
                            continue _fun111389;
                        case 213:
                            var0 = {
                                'position': 'absolute',
                                'top': 0,
                                'left': 0,
                                'bottom': 0,
                                'right': 0,
                                'borderWidth': 25,
                                'overflow': 'hidden',
                                'borderColor': 'white',
                                'opacity': 0.5
                            };
                        case 227:
                            return var0;
                    }
                };
                var17 = {};
                var17.isInSnap = var9;
                var9 = 25;
                var17.SNAP_EDGE_INNER_THRESHOLD = var9;
                var25 = var7[var25];
                var25 = var1.bind(var3)(var25);
                var25 = var25.withDelay;
                var17.withDelay = var25;
                var17.focused = var24;
                var17.id = var23;
                var23 = 23;
                var23 = var7[var23];
                var23 = var1.bind(var3)(var23);
                var23 = var23.withTiming;
                var17.withTiming = var23;
                var23 = _closure1_slot13;
                var17.OPACITY_TIMING = var23;
                var2.__closure = var17;
                var17 = 721308515928.0;
                var2.__workletHash = var17;
                var17 = _closure1_slot61;
                var2.__initData = var17;
                var17 = var5.bind(var16)(var2);
                var5 = var6.useCallback;
                var2 = function arg0() {
                    var3 = _closure2_slot7;
                    var1 = _closure2_slot13;
                    var0 = var1.get;
                    var2 = var0.bind(var1)();
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var0 = {};
                var0.layout = var13;
                var0.disableAnimations = var8;
                var2.__closure = var0;
                var0 = 15434697019045.0;
                var2.__workletHash = var0;
                var0 = _closure1_slot62;
                var2.__initData = var0;
                var0 = new Array(2);
                var0[0] = var13;
                var0[1] = var8;
                var16 = var5.bind(var6)(var2, var0);
                var2 = _closure1_slot11;
                var0 = 15;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.GestureDetector;
                var0 = {};
                var0.gesture = var4;
                var6 = _closure1_slot12;
                var8 = 24;
                var4 = var7[var8];
                var5 = var11.bind(var3)(var4);
                var4 = {};
                var23 = var12.wrapper;
                var13 = new Array(2);
                var13[0] = var23;
                var13[1] = var22;
                var4.style = var13;
                var4.layout = var16;
                var7 = var7[var8];
                var11 = var11.bind(var3)(var7);
                var7 = {};
                var22 = var12.animatedWrapperStyles;
                var13 = new Array(2);
                var13[0] = var22;
                var13[1] = var18;
                var7.style = var13;
                var7.layout = var16;
                var18 = _closure1_slot14;
                var13 = {};
                var13.streamId = var21;
                var13.onReady = var20;
                var13.onSize = var19;
                var19 = var12.video;
                var13.style = var19;
                var13.layout = var16;
                var13 = var2.bind(var3)(var18, var13);
                var7.children = var13;
                var11 = var2.bind(var3)(var11, var7);
                var7 = new Array(2);
                var7[0] = var11;
                var11 = _closure1_slot11;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                if (var10) {
                    _fun111337_ip = 1823;
                    continue _fun111337
                }
            case 1786:
                var8 = var14[var8];
                var10 = var13.bind(var3)(var8);
                var8 = {};
                var8.style = var17;
                var8.layout = var16;
                var16 = 'none';
                var8.pointerEvents = var16;
                var8 = var11.bind(var3)(var10, var8);
                _fun111337_ip = 1882;
                continue _fun111337;
            case 1823:
                var9 = var14[var9];
                var10 = var13.bind(var3)(var9);
                var9 = {};
                var9.animate = var15;
                var12 = var12.spinner;
                var9.style = var12;
                var12 = 26;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.unsafe_rawColors;
                var12 = var12.BRAND_500;
                var9.color = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1882:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 11840, 11838, 14283, 11841, 33, 3722, 8067, 1297, 11839, 4082, 5307, 3281, 4964, 14287, 8059, 8057, 14277, 5306, 14221, 8062, 4098, 6482, 8064, 671, 2]);