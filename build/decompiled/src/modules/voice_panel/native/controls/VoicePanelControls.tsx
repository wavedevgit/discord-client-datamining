// modules/voice_panel/native/controls/VoicePanelControls.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.UI_SHOW_HIDE_PHYSICS;
    var _closure1_slot6 = var7;
    var7 = var3.MODE_CHANGE_PHYSICS;
    var _closure1_slot7 = var7;
    var7 = var3.BORDER_RADIUS_PHYSICS;
    var _closure1_slot8 = var7;
    var7 = var3.PANEL_CONTROLS_HEIGHT_PHYSICS;
    var _closure1_slot9 = var7;
    var3 = var3.VoicePanelModes;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.CALL_TILE_GUTTER;
    var _closure1_slot11 = var7;
    var3 = var3.EDGE_GUTTER;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
    var _closure1_slot13 = var7;
    var3 = var3.VoicePanelControlsModes;
    var _closure1_slot14 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ComponentActions;
    var _closure1_slot15 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot16 = var7;
    var7 = var3.Fragment;
    var _closure1_slot17 = var7;
    var3 = var3.jsxs;
    var _closure1_slot18 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var14 = var10.absoluteFillObject;
    var15 = var9;
    var10 = copyDataProperties(var15, var14);
    var10 = 'zIndex';
    var9[var10] = var12;
    var3.accessibilityWrapper = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 0,
        'left': '50%',
        'overflow': 'hidden',
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var10 = 10;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xxl;
    var9.borderRadius = var12;
    var3.wrapper = var9;
    var9 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'zIndex': 20,
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.marginHorizontal = var10;
    var3.buttonsWrapper = var9;
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'zIndex': 21
    };
    var3.actionSheetHeaderBar = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot19 = var3;
    var3 = {};
    var7 = 'function VoicePanelControlsTsx1(){const{controlsSpecs,VoicePanelControlsModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER;}';
    var3.code = var7;
    var _closure1_slot20 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun111558: for (var _fun111558_ip = 0;;) switch (_fun111558_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.openTab;
                var _closure2_slot0 = var13;
                var1 = _closure1_slot19;
                var3 = undefined;
                var7 = var1.bind(var3)();
                var6 = _closure1_slot4;
                var2 = var6.useContext;
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 11;
                var1 = var9[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var2.bind(var6)(var1);
                var10 = var1.controlsSpecs;
                var _closure2_slot1 = var10;
                var12 = var1.dismissPanel;
                var _closure2_slot2 = var12;
                var11 = var1.connected;
                var _closure2_slot3 = var11;
                var8 = _closure1_slot0;
                var1 = 12;
                var1 = var9[var1];
                var14 = var8.bind(var3)(var1);
                var2 = var14.useDerivedValue;
                var1 = function() {
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var1 = var0.mode;
                    var0 = _closure1_slot14;
                    var0 = var0.DRAWER;
                    var0 = var1 === var0;
                    return var0;
                };
                var15 = {};
                var15.controlsSpecs = var10;
                var16 = _closure1_slot14;
                var15.VoicePanelControlsModes = var16;
                var1.__closure = var15;
                var15 = 243364694825.0;
                var1.__workletHash = var15;
                var15 = _closure1_slot20;
                var1.__initData = var15;
                var2 = var2.bind(var14)(var1);
                var1 = 13;
                var1 = var9[var1];
                var1 = var4.bind(var3)(var1);
                var4 = var1.bind(var3)(var2);
                var2 = var6.useCallback;
                var1 = new Array(4);
                var1[0] = var13;
                var1[1] = var12;
                var1[2] = var11;
                var1[3] = var10;
                var0 = function() { // Environment: var0
                    _fun111560: for (var _fun111560_ip = 0;;) switch (_fun111560_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var3 = var1.mode;
                            var2 = _closure1_slot14;
                            var2 = var2.DRAWER;
                            if (!(var3 !== var2)) {
                                _fun111560_ip = 122;
                                continue _fun111560
                            }
                        case 38:
                            var3 = _closure2_slot0;
                            var2 = {};
                            var4 = 'settings';
                            var2.tab = var4;
                            var5 = _closure2_slot3;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 14;
                            var5 = var5[var1];
                            var1 = undefined;
                            var5 = var6.bind(var1)(var5);
                            var5 = var5.VoicePanelTabAnalyticsSources;
                            if (var4) {
                                _fun111560_ip = 105;
                                continue _fun111560
                            }
                        case 97:
                            var4 = var5.PREJOIN_BUTTON;
                            _fun111560_ip = 111;
                            continue _fun111560;
                        case 105:
                            var4 = var5.CONNECTED_BUTTON;
                        case 111:
                            var2.source = var4;
                            var1 = var3.bind(var1)(var2);
                            _fun111560_ip = 132;
                            continue _fun111560;
                        case 122:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 132:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot16;
                var0 = 15;
                var0 = var9[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.ActionSheetHeaderBar;
                var0 = {};
                var7 = var7.actionSheetHeaderBar;
                var0.style = var7;
                var7 = 16;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.ActionSheetHeaderBarVariants;
                var7 = var7.FLOATING;
                var0.variant = var7;
                var0.onPress = var6;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 17;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                if (var4) {
                    _fun111558_ip = 358;
                    continue _fun111558
                }
            case 343:
                var4 = var5.OXW7dL;
                var4 = var6.bind(var7)(var4);
                _fun111558_ip = 371;
                continue _fun111558;
            case 358:
                var5 = var5["awDmr/"];
                var4 = var6.bind(var7)(var5);
            case 371:
                var0.accessibilityLabel = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot21 = var3;
    var3 = {};
    var7 = 'function VoicePanelControlsTsx2(){const{scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)();}';
    var3.code = var7;
    var _closure1_slot22 = var3;
    var3 = {};
    var7 = 'function VoicePanelControlsTsx3({velocityY:velocityY}){const{wrapperSpecs,wrapperDimensions,calculateVoicePanelHeaderSpecs,safeArea,controlsSpecs,VoicePanelControlsModes,gestureSpecs,scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;const absoluteVelocity=Math.abs(velocityY);let resultingControlMode;if(absoluteVelocity>200&&velocityY<0){wrapperSpecs.set({...wrapperSpecs.get(),height:wrapperDimensions.get().drawerHeight-calculateVoicePanelHeaderSpecs(safeArea.get()).height});if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else if(absoluteVelocity<200&&gestureSpecs.get().isDrawer){if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.FLOATING_DEFAULT;}}scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)(resultingControlMode);}';
    var3.code = var7;
    var _closure1_slot23 = var3;
    var3 = {};
    var7 = "function VoicePanelControlsTsx4(){const{scrollLock,isDragScrolling,gestureSpecs,runOnJS,gestureLock}=this.__closure;console.log('ZZZZZ - ControlsGesture.onTouchesCancelled');scrollLock.set(false);isDragScrolling.set(false);gestureSpecs.set({...gestureSpecs.get(),active:false});runOnJS(gestureLock.unlock)();}";
    var3.code = var7;
    var _closure1_slot24 = var3;
    var3 = {};
    var7 = 'function VoicePanelControlsTsx5(event){const{gestureSpecs,calculateVoicePanelHeaderSpecs,safeArea,wrapperSpecs,getControlsDrawerOpenWidth,windowDimensions,wrapperDimensions,controlsSpecs,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,getControlsDefaultWidth}=this.__closure;const change=event.absoluteY-gestureSpecs.get().absoluteY;const newHeight=gestureSpecs.get().height-gestureSpecs.get().y-change;if(newHeight>gestureSpecs.get().drawerTransitionHeight){if(!gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:true});}const headerHeight=calculateVoicePanelHeaderSpecs(safeArea.get()).height;wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:0,width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(newHeight,wrapperDimensions.get().drawerHeight-headerHeight),drawerMode:true});}else{const progress=newHeight/gestureSpecs.get().drawerTransitionHeight;const floatingHeight=controlsSpecs.get().height;const yOffset=Math.max(newHeight-safeArea.get().bottom-floatingHeight,0)*-1;const newChange=yOffset*(1-progress/1.5);if(gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:false});}if(floatingHeight!==wrapperSpecs.get().height&&!wrapperSpecs.get().drawerMode){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:safeArea.get().bottom*-1+newChange,width:getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:floatingHeight,drawerMode:false});}}';
    var3.code = var7;
    var _closure1_slot25 = var3;
    var3 = {};
    var7 = "function VoicePanelControlsTsx6(event,manager){const{State,gestureSpecs,controlsSpecs,VoicePanelControlsModes,touchMoveCount,isDragScrolling,sharedTab,scrollOffsetValue,GESTURE_VERTICAL_MINIMUM,wrapperSpecs,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT,tab,runOnJS,openTab,VoicePanelTabAnalyticsSources,scrollLock}=this.__closure;if(event.state!==State.BEGAN||gestureSpecs.get().active)return;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){manager.fail();return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=5?true:isDragScrolling.get();const scrollOffset=function(){switch(sharedTab.get()){case'settings':case'app_launcher':return scrollOffsetValue.get();default:return 0;}}();const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=gestureSpecs.get().absoluteY-absoluteY;if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&isDragging&&(computed>=0||scrollOffset>0)){return;}if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT&&computed>GESTURE_VERTICAL_MINIMUM||controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&(computed<-GESTURE_VERTICAL_MINIMUM||computed>GESTURE_VERTICAL_MINIMUM)){gestureSpecs.set({absoluteX:absoluteX,absoluteY:absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:true,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER&&tab!=='settings'){runOnJS(openTab)({tab:'settings',source:VoicePanelTabAnalyticsSources.GESTURE,disableControlsUpdate:true});}scrollLock.set(true);manager.activate();}else if(Math.abs(computed)>Math.abs(GESTURE_VERTICAL_MINIMUM)){manager.fail();}}";
    var3.code = var7;
    var _closure1_slot26 = var3;
    var3 = {};
    var7 = 'function VoicePanelControlsTsx7(){const{runOnJS,gestureLock}=this.__closure;runOnJS(gestureLock.lock)();}';
    var3.code = var7;
    var _closure1_slot27 = var3;
    var3 = {};
    var7 = 'function VoicePanelControlsTsx8(event){const{touchMoveCount,gestureSpecs,wrapperSpecs,controlsSpecs,VoicePanelControlsModes,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT}=this.__closure;touchMoveCount.set(0);gestureSpecs.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:false,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});}';
    var3.code = var7;
    var _closure1_slot28 = var3;
    var3 = {};
    var7 = 'function VoicePanelControlsTsx9(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}';
    var3.code = var7;
    var _closure1_slot29 = var3;
    var3 = {};
    var7 = 'function VoicePanelControlsTsx10(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous)return;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}';
    var3.code = var7;
    var _closure1_slot30 = var3;
    var3 = {};
    var7 = 'function VoicePanelControlsTsx11(){const{connected,controlsSpecs,mode,windowDimensions,windowDimensionsIgnoringKeyboard,safeArea}=this.__closure;return{connected:connected.get(),currentControlsMode:controlsSpecs.get().mode,mode:mode.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,windowHeightIgnoringKeyboard:windowDimensionsIgnoringKeyboard.get().height,controlsHeightValue:controlsSpecs.get().height,safeArea:safeArea.get()};}';
    var3.code = var7;
    var _closure1_slot31 = var3;
    var3 = {};
    var7 = 'function VoicePanelControlsTsx12(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperSpecs,VoicePanelControlsModes,runOnJS,setControlsMode,isScreenReaderEnabled,EDGE_GUTTER,getControlsDefaultWidth,getDrawerSpec,getControlsDrawerOpenWidth}=this.__closure;var _previous$currentCont;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{currentControlsMode:currentControlsMode,mode:mode,windowWidth:windowWidth,windowHeightIgnoringKeyboard:windowHeightIgnoringKeyboard,controlsHeightValue:controlsHeightValue,safeArea:safeArea}=props;switch(mode){case VoicePanelModes.DISMISSED:case VoicePanelModes.PIP:if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}return;case VoicePanelModes.PANEL:default:break;}switch(currentControlsMode){case VoicePanelControlsModes.RESET:runOnJS(setControlsMode)({mode:(_previous$currentCont=previous===null||previous===void 0?void 0:previous.currentControlsMode)!==null&&_previous$currentCont!==void 0?_previous$currentCont:VoicePanelControlsModes.FLOATING_DEFAULT});return;case VoicePanelControlsModes.HIDDEN:if(isScreenReaderEnabled){wrapperSpecs.set({...wrapperSpecs.get(),hidden:false});break;}if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}break;case VoicePanelControlsModes.FLOATING_DEFAULT:wrapperSpecs.set({x:0,y:Math.max(safeArea.bottom,EDGE_GUTTER)*-1,width:getControlsDefaultWidth(windowWidth,safeArea.left,safeArea.right),height:controlsHeightValue,drawerMode:false,hidden:false});break;case VoicePanelControlsModes.DRAWER:const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(windowHeightIgnoringKeyboard,safeArea.top);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(wrapperSpecs.get().height<=controlsHeightValue){height=maxHeight;}else if(previous!=null&&wrapperSpecs.get().height===getDrawerSpec(previous.windowHeight,previous.safeArea.top).maxHeight){height=maxHeight;}else if(wrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=minHeight;}wrapperSpecs.set({x:0,y:0,width:getControlsDrawerOpenWidth(windowWidth,safeArea.left,safeArea.right),height:height,drawerMode:true,hidden:false});break;}}';
    var3.code = var7;
    var _closure1_slot32 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun111561: for (var _fun111561_ip = 0;;) switch (_fun111561_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.channelId;
                var15 = var1.wrapperSpecs;
                var _closure2_slot0 = var15;
                var14 = var1.controlsSpecs;
                var _closure2_slot1 = var14;
                var13 = var1.accessoryHeights;
                var _closure2_slot2 = var13;
                var1 = var1.gestureState;
                var _closure2_slot3 = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 28;
                var2 = var4[var2];
                var3 = undefined;
                var6 = var5.bind(var3)(var2);
                var2 = var6.useShouldShowFloatingCTA;
                var6 = var2.bind(var6)(var7);
                var10 = _closure1_slot1;
                var2 = 19;
                var2 = var4[var2];
                var2 = var10.bind(var3)(var2);
                var9 = var2.bind(var3)();
                var _closure2_slot4 = var9;
                var2 = 29;
                var2 = var4[var2];
                var2 = var10.bind(var3)(var2);
                var2 = var2.bind(var3)(var7);
                var12 = var2.isConnectingToConsole;
                var _closure2_slot5 = var12;
                var11 = var2.isConnectingOrConnectedToConsole;
                var7 = _closure1_slot4;
                var10 = var7.useMemo;
                var2 = new Array(4);
                var2[0] = var15;
                var2[1] = var14;
                var2[2] = var13;
                var2[3] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.wrapperSpecs = var2;
                    var2 = _closure2_slot1;
                    var0.controlsSpecs = var2;
                    var2 = _closure2_slot2;
                    var0.accessoryHeights = var2;
                    var1 = _closure2_slot3;
                    var0.gestureState = var1;
                    return var0;
                };
                var10 = var10.bind(var7)(var1, var2);
                var2 = var7.useLayoutEffect;
                var1 = new Array(2);
                var1[0] = var12;
                var1[1] = var9;
                var0 = function() { // Environment: var0
                    _fun111563: for (var _fun111563_ip = 0;;) switch (_fun111563_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var1 = _closure2_slot4;
                            if (var0) {
                                _fun111563_ip = 26;
                                continue _fun111563
                            }
                        case 14:
                            var0 = var1.unlock;
                            var0 = var0.bind(var1)();
                            _fun111563_ip = 36;
                            continue _fun111563;
                        case 26:
                            var0 = var1.lock;
                            var0 = var0.bind(var1)();
                        case 36:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot18;
                var1 = _closure1_slot17;
                var0 = {};
                var12 = _closure1_slot16;
                var9 = 30;
                var4 = var4[var9];
                var4 = var5.bind(var3)(var4);
                var7 = var4.TransitionItem;
                var4 = {};
                var5 = undefined;
                if (!var6) {
                    _fun111561_ip = 258;
                    continue _fun111561
                }
            case 255:
                var5 = var10;
            case 258:
                var4.item = var5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var13 = 31;
                var13 = var5[var13];
                var13 = var6.bind(var3)(var13);
                var13 = var13.renderVoicePanelFloatingCTA;
                var4.renderItem = var13;
                var7 = var12.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot16;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var6 = var5.TransitionItem;
                var5 = {};
                var9 = undefined;
                if (!var11) {
                    _fun111561_ip = 336;
                    continue _fun111561
                }
            case 333:
                var9 = var10;
            case 336:
                var5.item = var9;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 32;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.renderVoicePanelConsoleStatus;
                var5.renderItem = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot33 = var3;
    var3 = {};
    var7 = "function VoicePanelControlsTsx13(){const{controlsSpecs,connected,sharedTab,wrapperSpecs,TRANSITIONAL_HEIGHT,CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const showPushToTalkText=controlsSpecs.get().pushToTalk&&connected.get();const height=sharedTab.get()==='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?CONTROLS_DRAWER_HEADER_EXPANDED_SIZE:controlsSpecs.get().height;const translateY=function(){return sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?-controlsSpecs.get().height:0;}();return{top:showPushToTalkText?-4:0,height:withSpring(height,MODE_CHANGE_PHYSICS),opacity:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(translateY,MODE_CHANGE_PHYSICS)},{scale:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0.95:1,MODE_CHANGE_PHYSICS)}]};}";
    var3.code = var7;
    var _closure1_slot34 = var3;
    var7 = var6.memo;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.openTab;
        var _closure2_slot0 = var1;
        var15 = var0.wrapperSpecs;
        var _closure2_slot1 = var15;
        var16 = var0.sharedTab;
        var _closure2_slot2 = var16;
        var14 = _closure1_slot4;
        var1 = var14.useRef;
        var0 = true;
        var11 = var1.bind(var14)(var0);
        var _closure2_slot3 = var11;
        var0 = _closure1_slot19;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var1 = var14.useContext;
        var5 = _closure1_slot1;
        var10 = _closure1_slot2;
        var0 = 11;
        var0 = var10[var0];
        var0 = var5.bind(var3)(var0);
        var0 = var1.bind(var14)(var0);
        var18 = var0.controlsSpecs;
        var _closure2_slot4 = var18;
        var17 = var0.connected;
        var _closure2_slot5 = var17;
        var0 = 33;
        var0 = var10[var0];
        var0 = var5.bind(var3)(var0);
        var8 = var0.bind(var3)();
        var1 = _closure1_slot0;
        var0 = 12;
        var4 = var10[var0];
        var12 = var1.bind(var3)(var4);
        var9 = var12.useAnimatedStyle;
        var4 = function() {
            _fun111565: for (var _fun111565_ip = 0;;) switch (_fun111565_ip) {
                case 0:
                    var1 = _closure2_slot4;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var2 = var0.pushToTalk;
                    if (!var2) {
                        _fun111565_ip = 38;
                        continue _fun111565
                    }
                case 25:
                    var1 = _closure2_slot5;
                    var0 = var1.get;
                    var2 = var0.bind(var1)();
                case 38:
                    var1 = _closure2_slot2;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var10 = 'settings';
                    if (!(var10 === var0)) {
                        _fun111565_ip = 84;
                        continue _fun111565
                    }
                case 59:
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var1 = var0.height;
                    var0 = 200;
                    if (!(!(var1 >= var0))) {
                        _fun111565_ip = 104;
                        continue _fun111565
                    }
                case 84:
                    var1 = _closure2_slot4;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var12 = var0.height;
                    _fun111565_ip = 111;
                    continue _fun111565;
                case 104:
                    var12 = _closure1_slot13;
                case 111:
                    var1 = _closure2_slot2;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var13 = 0;
                    if (!(var10 !== var0)) {
                        _fun111565_ip = 181;
                        continue _fun111565
                    }
                case 130:
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var1 = var0.height;
                    var0 = 200;
                    var0 = var1 >= var0;
                    var13 = 0;
                    if (!var0) {
                        _fun111565_ip = 181;
                        continue _fun111565
                    }
                case 160:
                    var1 = _closure2_slot4;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var0 = var0.height;
                    var13 = -var0;
                case 181:
                    var0 = {};
                    var1 = 0;
                    if (!var2) {
                        _fun111565_ip = 194;
                        continue _fun111565
                    }
                case 188:
                    var1 = -4;
                case 194:
                    var0.top = var1;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var9 = 34;
                    var4 = var1[var9];
                    var6 = undefined;
                    var11 = var2.bind(var6)(var4);
                    var8 = var11.withSpring;
                    var4 = _closure1_slot7;
                    var4 = var8.bind(var11)(var12, var4);
                    var0.height = var4;
                    var1 = var1[var9];
                    var4 = var2.bind(var6)(var1);
                    var2 = var4.withSpring;
                    var8 = _closure2_slot2;
                    var1 = var8.get;
                    var11 = var1.bind(var8)();
                    var8 = 1;
                    var1 = var8;
                    if (!(var10 !== var11)) {
                        _fun111565_ip = 312;
                        continue _fun111565
                    }
                case 279:
                    var12 = _closure2_slot1;
                    var11 = var12.get;
                    var11 = var11.bind(var12)();
                    var12 = var11.height;
                    var11 = 200;
                    var11 = var12 >= var11;
                    var1 = var8;
                    if (!var11) {
                        _fun111565_ip = 312;
                        continue _fun111565
                    }
                case 310:
                    var1 = 0;
                case 312:
                    var12 = _closure1_slot7;
                    var1 = var2.bind(var4)(var1, var12);
                    var0.opacity = var1;
                    var2 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = var4[var9];
                    var11 = var5.bind(var6)(var1);
                    var1 = var11.withSpring;
                    var1 = var1.bind(var11)(var13, var12);
                    var2.translateY = var1;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var4 = var4[var9];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.withSpring;
                    var9 = _closure2_slot2;
                    var4 = var9.get;
                    var9 = var4.bind(var9)();
                    var4 = var8;
                    if (!(var10 !== var9)) {
                        _fun111565_ip = 446;
                        continue _fun111565
                    }
                case 405:
                    var9 = _closure2_slot1;
                    var7 = var9.get;
                    var7 = var7.bind(var9)();
                    var9 = var7.height;
                    var7 = 200;
                    var7 = var9 >= var7;
                    var4 = var8;
                    if (!var7) {
                        _fun111565_ip = 446;
                        continue _fun111565
                    }
                case 436:
                    var4 = 0.95;
                case 446:
                    var3 = _closure1_slot7;
                    var3 = var5.bind(var6)(var4, var3);
                    var2.scale = var3;
                    var1[1] = var2;
                    var0.transform = var1;
                    return var0;
            }
        };
        var13 = {};
        var13.controlsSpecs = var18;
        var13.connected = var17;
        var13.sharedTab = var16;
        var13.wrapperSpecs = var15;
        var15 = 200;
        var13.TRANSITIONAL_HEIGHT = var15;
        var15 = _closure1_slot13;
        var13.CONTROLS_DRAWER_HEADER_EXPANDED_SIZE = var15;
        var15 = 34;
        var15 = var10[var15];
        var15 = var1.bind(var3)(var15);
        var15 = var15.withSpring;
        var13.withSpring = var15;
        var15 = _closure1_slot7;
        var13.MODE_CHANGE_PHYSICS = var15;
        var4.__closure = var13;
        var13 = 13795695387432.0;
        var4.__workletHash = var13;
        var13 = _closure1_slot34;
        var4.__initData = var13;
        var9 = var9.bind(var12)(var4);
        var13 = var14.useEffect;
        var12 = function() { // Environment: var6
            var1 = _closure2_slot3;
            var0 = false;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var4 = new Array(0);
        var4 = var13.bind(var14)(var12, var4);
        var2 = _closure1_slot16;
        var0 = var10[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.LayoutAnimationConfig;
        var0 = {};
        var4 = 35;
        var4 = var10[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.bind(var3)(var11);
        var0.skipEntering = var4;
        var4 = 36;
        var4 = var10[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var10 = var7.buttonsWrapper;
        var7 = new Array(2);
        var7[0] = var10;
        var7[1] = var9;
        var4.style = var7;
        var7 = var8.map;
        var6 = function(arg0) { // Environment: var6
            var3 = arg0;
            var2 = var3.render;
            var1 = var3.key;
            var0 = {};
            var0.props = var3;
            var5 = _closure2_slot0;
            var0.openTab = var5;
            var4 = _closure2_slot1;
            var0.wrapperSpecs = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var6 = var7.bind(var8)(var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot35 = var3;
    var3 = {};
    var7 = 'function VoicePanelControlsTsx14(){const{withSpring,wrapperSpecs,borderRadius,BORDER_RADIUS_PHYSICS,PANEL_CONTROLS_HEIGHT_PHYSICS,MODE_CHANGE_PHYSICS,roundToNearestPixel,UI_SHOW_HIDE_PHYSICS,useReducedMotion,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;return{borderBottomRightRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),borderBottomLeftRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),height:withSpring(wrapperSpecs.get().height,PANEL_CONTROLS_HEIGHT_PHYSICS),width:withSpring(wrapperSpecs.get().width,MODE_CHANGE_PHYSICS),marginLeft:withSpring(roundToNearestPixel(wrapperSpecs.get().width/2)*-1,MODE_CHANGE_PHYSICS),opacity:withSpring(wrapperSpecs.get().hidden?0:1,MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop)?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}';
    var3.code = var7;
    var _closure1_slot36 = var3;
    var3 = {};
    var7 = "function VoicePanelControlsTsx15(){const{mode,VoicePanelModes,wrapperSpecs}=this.__closure;return{pointerEvents:mode.get()!==VoicePanelModes.PANEL||wrapperSpecs.get().hidden?'none':'auto'};}";
    var3.code = var7;
    var _closure1_slot37 = var3;
    var3 = {};
    var7 = 'function VoicePanelControlsTsx16(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}';
    var3.code = var7;
    var _closure1_slot38 = var3;
    var3 = {};
    var7 = 'function VoicePanelControlsTsx17(mode,previousMode){const{isScreenReaderEnabled,VoicePanelControlsModes,runOnJS,setIsDrawer}=this.__closure;if(mode===previousMode||!isScreenReaderEnabled)return;if(mode===VoicePanelControlsModes.DRAWER&&previousMode!==VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(true);}else if(mode!==VoicePanelControlsModes.DRAWER&&previousMode===VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(false);}}';
    var3.code = var7;
    var _closure1_slot39 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun111568: for (var _fun111568_ip = 0;;) switch (_fun111568_ip) {
            case 0:
                var1 = arg0;
                var25 = var1.gestureState;
                var _closure2_slot0 = var25;
                var15 = _closure1_slot0;
                var22 = _closure1_slot2;
                var1 = 24;
                var1 = var22[var1];
                var3 = undefined;
                var2 = var15.bind(var3)(var1);
                var1 = var2.useIsScreenReaderEnabled;
                var31 = var1.bind(var2)();
                var _closure2_slot1 = var31;
                var5 = _closure1_slot4;
                var2 = var5.useContext;
                var11 = _closure1_slot1;
                var1 = 11;
                var1 = var22[var1];
                var1 = var11.bind(var3)(var1);
                var1 = var2.bind(var5)(var1);
                var28 = var1.channelId;
                var _closure2_slot2 = var28;
                var27 = var1.controlsSpecs;
                var _closure2_slot3 = var27;
                var17 = var1.mode;
                var _closure2_slot4 = var17;
                var6 = var1.setControlsMode;
                var _closure2_slot5 = var6;
                var23 = var1.useReducedMotion;
                var _closure2_slot6 = var23;
                var1 = _closure1_slot19;
                var14 = var1.bind(var3)();
                var2 = var5.useState;
                var1 = null;
                var1 = var2.bind(var5)(var1);
                var9 = _closure1_slot3;
                var8 = 2;
                var1 = var9.bind(var3)(var1, var8);
                var7 = 0;
                var19 = var1[var7];
                var _closure2_slot7 = var19;
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot8 = var1;
                var30 = 12;
                var1 = var22[var30];
                var4 = var15.bind(var3)(var1);
                var1 = var4.useSharedValue;
                var18 = var1.bind(var4)(var19);
                var _closure2_slot9 = var18;
                var4 = var5.useLayoutEffect;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot9;
                    var1 = var2.set;
                    var0 = _closure2_slot7;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var4.bind(var5)(var1);
                var1 = 37;
                var1 = var22[var1];
                var1 = var11.bind(var3)(var1);
                var21 = var1.bind(var3)(var28);
                var1 = 38;
                var1 = var22[var1];
                var10 = var15.bind(var3)(var1);
                var4 = var10.useMaybeFetchSoundboardSounds;
                var1 = {};
                var1.shouldFetch = var21;
                var1 = var4.bind(var10)(var1);
                var10 = var5.useCallback;
                var4 = new Array(3);
                var4[0] = var28;
                var4[1] = var27;
                var4[2] = var6;
                var1 = function(arg0) { // Environment: var0
                    _fun111570: for (var _fun111570_ip = 0;;) switch (_fun111570_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.tab;
                            var _closure3_slot0 = var0;
                            var0 = var2.source;
                            var _closure3_slot1 = var0;
                            var3 = var2.disableControlsUpdate;
                            var0 = undefined;
                            if (!(var3 === var0)) {
                                _fun111570_ip = 38;
                                continue _fun111570
                            }
                        case 36:
                            var3 = false;
                        case 38:
                            var _closure3_slot2 = var3;
                            var2 = var2.controlsProps;
                            var _closure3_slot3 = var2;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 39;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.batchUpdates;
                            var1 = function() { // Environment: var1
                                _fun111571: for (var _fun111571_ip = 0;;) switch (_fun111571_ip) {
                                    case 0:
                                        var0 = false;
                                        var _closure4_slot0 = var0;
                                        var1 = _closure2_slot3;
                                        var0 = var1.get;
                                        var0 = var0.bind(var1)();
                                        var1 = var0.mode;
                                        var0 = _closure1_slot14;
                                        var0 = var0.DRAWER;
                                        var5 = var1 !== var0;
                                        var6 = _closure2_slot8;
                                        var0 = undefined;
                                        var1 = function(arg0) { // Environment: var4
                                            var0 = _closure3_slot0;
                                            var1 = arg0;
                                            var1 = var1 !== var0;
                                            _closure4_slot0 = var1;
                                            return var0;
                                        };
                                        var1 = var6.bind(var0)(var1);
                                        var6 = _closure3_slot2;
                                        if (var6) {
                                            _fun111571_ip = 110;
                                            continue _fun111571
                                        }
                                    case 74:
                                        var7 = _closure2_slot5;
                                        var6 = {};
                                        var8 = _closure1_slot14;
                                        var8 = var8.DRAWER;
                                        var6.mode = var8;
                                        var10 = _closure3_slot3;
                                        var11 = var6;
                                        var8 = copyDataProperties(var11, var10);
                                        var6 = var7.bind(var0)(var6);
                                    case 110:
                                        var4 = _closure4_slot0;
                                        if (var4) {
                                            _fun111571_ip = 120;
                                            continue _fun111571
                                        }
                                    case 117:
                                        var4 = var5;
                                    case 120:
                                        if (!var4) {
                                            _fun111571_ip = 162;
                                            continue _fun111571
                                        }
                                    case 123:
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var3 = 14;
                                        var3 = var5[var3];
                                        var4 = var4.bind(var0)(var3);
                                        var3 = _closure2_slot2;
                                        var2 = _closure3_slot0;
                                        var1 = _closure3_slot1;
                                        var1 = var4.bind(var0)(var3, var2, var1);
                                    case 162:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var16 = var10.bind(var5)(var1, var4);
                var _closure2_slot10 = var16;
                var1 = 40;
                var1 = var22[var1];
                var1 = var11.bind(var3)(var1);
                var26 = var1.bind(var3)();
                var _closure2_slot11 = var26;
                var10 = var5.useLayoutEffect;
                var4 = new Array(4);
                var4[0] = var28;
                var4[1] = var27;
                var4[2] = var16;
                var4[3] = var19;
                var1 = function() { // Environment: var0
                    var3 = function() {
                        _fun111574: for (var _fun111574_ip = 0;;) switch (_fun111574_ip) {
                            case 0:
                                var4 = _closure1_slot5;
                                var3 = var4.getChatOpen;
                                var2 = _closure2_slot2;
                                var2 = var3.bind(var4)(var2);
                                var4 = _closure3_slot0;
                                if (!(var2 !== var4)) {
                                    _fun111574_ip = 115;
                                    continue _fun111574
                                }
                            case 36:
                                var _closure3_slot0 = var2;
                                if (!var2) {
                                    _fun111574_ip = 115;
                                    continue _fun111574
                                }
                            case 43:
                                var2 = _closure2_slot10;
                                var1 = {};
                                var3 = 'chat';
                                var1.tab = var3;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 14;
                                var3 = var3[var0];
                                var0 = undefined;
                                var3 = var4.bind(var0)(var3);
                                var3 = var3.VoicePanelTabAnalyticsSources;
                                var3 = var3.STORE;
                                var1.source = var3;
                                var3 = {};
                                var4 = true;
                                var3.debounce = var4;
                                var1.controlsProps = var3;
                                var0 = var2.bind(var0)(var1);
                            case 115:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot1 = var3;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
                    var2 = _closure1_slot5;
                    var1 = var2.addChangeListener;
                    var1 = var1.bind(var2)(var3);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot5;
                        var1 = var2.removeChangeListener;
                        var0 = _closure3_slot1;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var1 = var10.bind(var5)(var1, var4);
                var10 = var5.useEffect;
                var4 = new Array(1);
                var4[0] = var16;
                var1 = function() { // Environment: var0
                    var4 = function() {
                        var2 = _closure2_slot10;
                        var1 = {};
                        var0 = 'chat';
                        var1.tab = var0;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 14;
                        var3 = var3[var0];
                        var0 = undefined;
                        var3 = var4.bind(var0)(var3);
                        var3 = var3.VoicePanelTabAnalyticsSources;
                        var3 = var3.HEADER_BUTTON;
                        var1.source = var3;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 41;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var3 = var2.ComponentDispatch;
                    var2 = var3.subscribe;
                    var1 = _closure1_slot15;
                    var1 = var1.VOICE_PANEL_OPEN_CHAT_TAB;
                    var1 = var2.bind(var3)(var1, var4);
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 41;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var4 = var2.ComponentDispatch;
                        var3 = var4.unsubscribe;
                        var1 = _closure1_slot15;
                        var2 = var1.VOICE_PANEL_OPEN_CHAT_TAB;
                        var1 = _closure3_slot0;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = var10.bind(var5)(var1, var4);
                var1 = 42;
                var1 = var22[var1];
                var4 = var15.bind(var3)(var1);
                var1 = var4.getSafeAreaInsets;
                var12 = var1.bind(var4)();
                var1 = var22[var30];
                var10 = var15.bind(var3)(var1);
                var4 = var10.useSharedValue;
                var1 = {
                    'width': null,
                    'height': 0,
                    'x': 0,
                    'y': 0,
                    'drawerMode': false,
                    'hidden': false
                };
                var20 = 22;
                var20 = var22[var20];
                var32 = var15.bind(var3)(var20);
                var29 = var32.getControlsDefaultWidth;
                var20 = 43;
                var20 = var22[var20];
                var24 = var15.bind(var3)(var20);
                var20 = var24.getWindowDimensions;
                var20 = var20.bind(var24)();
                var24 = var20.width;
                var20 = var12.left;
                var12 = var12.right;
                var12 = var29.bind(var32)(var24, var20, var12);
                var1.width = var12;
                var24 = false;
                var20 = var4.bind(var10)(var1);
                var _closure2_slot12 = var20;
                var1 = 10;
                var1 = var22[var1];
                var1 = var11.bind(var3)(var1);
                var1 = var1.radii;
                var29 = var1.xxl;
                var _closure2_slot13 = var29;
                var1 = var22[var30];
                var10 = var15.bind(var3)(var1);
                var4 = var10.useAnimatedStyle;
                var1 = function() {
                    _fun111579: for (var _fun111579_ip = 0;;) switch (_fun111579_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var8 = 34;
                            var1 = var1[var8];
                            var6 = undefined;
                            var9 = var2.bind(var6)(var1);
                            var5 = var9.withSpring;
                            var2 = _closure2_slot12;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var2 = var1.drawerMode;
                            var4 = 0;
                            if (var2) {
                                _fun111579_ip = 63;
                                continue _fun111579
                            }
                        case 59:
                            var4 = _closure2_slot13;
                        case 63:
                            var2 = _closure1_slot8;
                            var2 = var5.bind(var9)(var4, var2);
                            var0.borderBottomRightRadius = var2;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var8];
                            var9 = var4.bind(var6)(var2);
                            var5 = var9.withSpring;
                            var4 = _closure2_slot12;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var2 = var2.drawerMode;
                            var4 = 0;
                            if (var2) {
                                _fun111579_ip = 128;
                                continue _fun111579
                            }
                        case 124:
                            var4 = _closure2_slot13;
                        case 128:
                            var2 = _closure1_slot8;
                            var2 = var5.bind(var9)(var4, var2);
                            var0.borderBottomLeftRadius = var2;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var5 = var2[var8];
                            var12 = var4.bind(var6)(var5);
                            var11 = var12.withSpring;
                            var9 = _closure2_slot12;
                            var5 = var9.get;
                            var5 = var5.bind(var9)();
                            var10 = var5.height;
                            var5 = _closure1_slot9;
                            var5 = var11.bind(var12)(var10, var5);
                            var0.height = var5;
                            var5 = var2[var8];
                            var11 = var4.bind(var6)(var5);
                            var10 = var11.withSpring;
                            var5 = var9.get;
                            var5 = var5.bind(var9)();
                            var5 = var5.width;
                            var12 = _closure1_slot7;
                            var5 = var10.bind(var11)(var5, var12);
                            var0.width = var5;
                            var5 = var2[var8];
                            var11 = var4.bind(var6)(var5);
                            var10 = var11.withSpring;
                            var13 = _closure1_slot1;
                            var5 = 44;
                            var5 = var2[var5];
                            var13 = var13.bind(var6)(var5);
                            var5 = var9.get;
                            var5 = var5.bind(var9)();
                            var14 = var5.width;
                            var5 = 2;
                            var5 = var14 / var5;
                            var13 = var13.bind(var6)(var5);
                            var5 = -1;
                            var5 = var5 * var13;
                            var5 = var10.bind(var11)(var5, var12);
                            var0.marginLeft = var5;
                            var2 = var2[var8];
                            var5 = var4.bind(var6)(var2);
                            var4 = var5.withSpring;
                            var2 = var9.get;
                            var2 = var2.bind(var9)();
                            var9 = var2.hidden;
                            var2 = 1;
                            if (!var9) {
                                _fun111579_ip = 353;
                                continue _fun111579
                            }
                        case 351:
                            var2 = 0;
                        case 353:
                            var1 = _closure1_slot7;
                            var1 = var4.bind(var5)(var2, var1);
                            var0.opacity = var1;
                            var2 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = var4[var8];
                            var11 = var5.bind(var6)(var1);
                            var10 = var11.withSpring;
                            var9 = _closure2_slot12;
                            var1 = var9.get;
                            var1 = var1.bind(var9)();
                            var9 = var1.x;
                            var1 = _closure1_slot6;
                            var1 = var10.bind(var11)(var9, var1);
                            var2.translateX = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var4 = var4[var8];
                            var6 = var5.bind(var6)(var4);
                            var5 = var6.withSpring;
                            var8 = _closure2_slot6;
                            var4 = var8.get;
                            var4 = var4.bind(var8)();
                            if (var4) {
                                _fun111579_ip = 575;
                                continue _fun111579
                            }
                        case 464:
                            var8 = _closure2_slot12;
                            var4 = var8.get;
                            var4 = var4.bind(var8)();
                            var4 = var4.hidden;
                            if (var4) {
                                _fun111579_ip = 530;
                                continue _fun111579
                            }
                        case 486:
                            var8 = _closure2_slot0;
                            var4 = var8.get;
                            var4 = var4.bind(var8)();
                            var4 = var4.active;
                            if (!var4) {
                                _fun111579_ip = 575;
                                continue _fun111579
                            }
                        case 508:
                            var8 = _closure2_slot0;
                            var4 = var8.get;
                            var4 = var4.bind(var8)();
                            var4 = var4.requiresPop;
                            if (var4) {
                                _fun111579_ip = 575;
                                continue _fun111579
                            }
                        case 530:
                            var8 = _closure2_slot12;
                            var4 = var8.get;
                            var4 = var4.bind(var8)();
                            var8 = var4.height;
                            var4 = _closure1_slot11;
                            var8 = var8 + var4;
                            var9 = _closure2_slot11;
                            var4 = var9.get;
                            var4 = var4.bind(var9)();
                            var4 = var8 + var4;
                            _fun111579_ip = 593;
                            continue _fun111579;
                        case 575:
                            var8 = _closure2_slot12;
                            var7 = var8.get;
                            var7 = var7.bind(var8)();
                            var4 = var7.y;
                        case 593:
                            var3 = _closure1_slot6;
                            var3 = var5.bind(var6)(var4, var3);
                            var2.translateY = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var12 = {};
                var32 = 34;
                var32 = var22[var32];
                var32 = var15.bind(var3)(var32);
                var32 = var32.withSpring;
                var12.withSpring = var32;
                var12.wrapperSpecs = var20;
                var12.borderRadius = var29;
                var29 = _closure1_slot8;
                var12.BORDER_RADIUS_PHYSICS = var29;
                var29 = _closure1_slot9;
                var12.PANEL_CONTROLS_HEIGHT_PHYSICS = var29;
                var29 = _closure1_slot7;
                var12.MODE_CHANGE_PHYSICS = var29;
                var29 = 44;
                var29 = var22[var29];
                var29 = var11.bind(var3)(var29);
                var12.roundToNearestPixel = var29;
                var29 = _closure1_slot6;
                var12.UI_SHOW_HIDE_PHYSICS = var29;
                var12.useReducedMotion = var23;
                var12.gestureState = var25;
                var23 = _closure1_slot11;
                var12.CALL_TILE_GUTTER = var23;
                var12.accessoryHeights = var26;
                var1.__closure = var12;
                var12 = 4447271015736.0;
                var1.__workletHash = var12;
                var12 = _closure1_slot36;
                var1.__initData = var12;
                var23 = var4.bind(var10)(var1);
                var1 = var22[var30];
                var10 = var15.bind(var3)(var1);
                var4 = var10.useAnimatedProps;
                var1 = function() {
                    _fun111580: for (var _fun111580_ip = 0;;) switch (_fun111580_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot4;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = _closure1_slot10;
                            var2 = var2.PANEL;
                            if (!(var3 === var2)) {
                                _fun111580_ip = 61;
                                continue _fun111580
                            }
                        case 35:
                            var2 = _closure2_slot12;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var2 = var1.hidden;
                            var1 = 'auto';
                            if (!var2) {
                                _fun111580_ip = 65;
                                continue _fun111580
                            }
                        case 61:
                            var1 = 'none';
                        case 65:
                            var0.pointerEvents = var1;
                            return var0;
                    }
                };
                var12 = {};
                var12.mode = var17;
                var17 = _closure1_slot10;
                var12.VoicePanelModes = var17;
                var12.wrapperSpecs = var20;
                var1.__closure = var12;
                var12 = 9395644139205.0;
                var1.__workletHash = var12;
                var12 = _closure1_slot37;
                var1.__initData = var12;
                var12 = var4.bind(var10)(var1);
                var1 = function arg0, arg1, arg2, arg3() {
                    var15 = arg0;
                    var16 = arg1;
                    var13 = arg2;
                    var20 = arg3;
                    var _closure3_slot0 = var15;
                    var _closure3_slot1 = var16;
                    var _closure3_slot2 = var13;
                    var _closure3_slot3 = var20;
                    var6 = _closure1_slot4;
                    var2 = var6.useContext;
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var1 = 11;
                    var1 = var12[var1];
                    var11 = undefined;
                    var1 = var5.bind(var11)(var1);
                    var1 = var2.bind(var6)(var1);
                    var23 = var1.controlsSpecs;
                    var _closure3_slot4 = var23;
                    var8 = var1.windowDimensions;
                    var _closure3_slot5 = var8;
                    var3 = var1.wrapperDimensions;
                    var _closure3_slot6 = var3;
                    var19 = var1.safeArea;
                    var _closure3_slot7 = var19;
                    var10 = _closure1_slot0;
                    var9 = 12;
                    var1 = var12[var9];
                    var14 = var10.bind(var11)(var1);
                    var2 = var14.useSharedValue;
                    var4 = 0;
                    var22 = false;
                    var1 = {
                        'absoluteX': 0,
                        'absoluteY': 0,
                        'x': 0,
                        'y': 0,
                        'height': 0,
                        'isDrawer': false,
                        'active': false,
                        'drawerTransitionHeight': 200,
                        'interFloatingTransitionHeight': 200
                    };
                    var1 = var2.bind(var14)(var1);
                    var _closure3_slot8 = var1;
                    var2 = var12[var9];
                    var14 = var10.bind(var11)(var2);
                    var2 = var14.useSharedValue;
                    var14 = var2.bind(var14)(var4);
                    var _closure3_slot9 = var14;
                    var2 = var12[var9];
                    var17 = var10.bind(var11)(var2);
                    var2 = var17.useSharedValue;
                    var21 = var2.bind(var17)(var22);
                    var _closure3_slot10 = var21;
                    var2 = var12[var9];
                    var17 = var10.bind(var11)(var2);
                    var2 = var17.useSharedValue;
                    var17 = var2.bind(var17)(var4);
                    var _closure3_slot11 = var17;
                    var2 = var6.useRef;
                    var2 = var2.bind(var6)(var11);
                    var _closure3_slot12 = var2;
                    var2 = var12[var9];
                    var18 = var10.bind(var11)(var2);
                    var2 = var18.useSharedValue;
                    var18 = var2.bind(var18)(var22);
                    var _closure3_slot13 = var18;
                    var22 = var6.useState;
                    var2 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var5 = var2.bind(var0)(var1);
                        var4 = var5.createUseAnimatedScrollLock;
                        var9 = _closure3_slot12;
                        var8 = _closure3_slot13;
                        var7 = _closure3_slot11;
                        var6 = _closure3_slot10;
                        var10 = var5;
                        var0 = var10[var4](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var24 = var22.bind(var6)(var2);
                    var22 = _closure1_slot3;
                    var2 = 1;
                    var2 = var22.bind(var11)(var24, var2);
                    var2 = var2[var4];
                    var4 = 19;
                    var4 = var12[var4];
                    var4 = var5.bind(var11)(var4);
                    var22 = var4.bind(var11)();
                    var _closure3_slot14 = var22;
                    var5 = var6.useMemo;
                    var4 = new Array(14);
                    var4[0] = var23;
                    var4[1] = var22;
                    var4[2] = var1;
                    var4[3] = var21;
                    var4[4] = var20;
                    var4[5] = var19;
                    var4[6] = var18;
                    var4[7] = var17;
                    var4[8] = var16;
                    var4[9] = var15;
                    var4[10] = var14;
                    var4[11] = var8;
                    var4[12] = var3;
                    var4[13] = var13;
                    var3 = function() { // Environment: var0
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var16 = 20;
                        var1 = var9[var16];
                        var7 = undefined;
                        var1 = var8.bind(var7)(var1);
                        var2 = var1.Gesture;
                        var1 = var2.Pan;
                        var4 = var1.bind(var2)();
                        var2 = var4.manualActivation;
                        var1 = true;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.maxPointers;
                        var1 = 1;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.shouldCancelWhenOutside;
                        var1 = false;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.withRef;
                        var1 = _closure3_slot12;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.onTouchesDown;
                        var1 = function arg0() {
                            var4 = arg0;
                            var1 = _closure3_slot9;
                            var0 = var1.set;
                            var5 = 0;
                            var0 = var0.bind(var1)(var5);
                            var2 = _closure3_slot8;
                            var1 = var2.set;
                            var0 = {};
                            var6 = var4.changedTouches;
                            var6 = var6[var5];
                            var6 = var6.absoluteX;
                            var0.absoluteX = var6;
                            var4 = var4.changedTouches;
                            var4 = var4[var5];
                            var4 = var4.absoluteY;
                            var0.absoluteY = var4;
                            var5 = _closure3_slot2;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var4 = var4.x;
                            var0.x = var4;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var4 = var4.y;
                            var0.y = var4;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var4 = var4.height;
                            var0.height = var4;
                            var4 = _closure3_slot4;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var4 = var3.mode;
                            var3 = _closure1_slot14;
                            var3 = var3.DRAWER;
                            var3 = var4 === var3;
                            var0.isDrawer = var3;
                            var3 = false;
                            var0.active = var3;
                            var3 = 200;
                            var0.drawerTransitionHeight = var3;
                            var0.interFloatingTransitionHeight = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var5 = {};
                        var10 = _closure3_slot9;
                        var5.touchMoveCount = var10;
                        var13 = _closure3_slot8;
                        var5.gestureSpecs = var13;
                        var20 = _closure3_slot2;
                        var5.wrapperSpecs = var20;
                        var15 = _closure3_slot4;
                        var5.controlsSpecs = var15;
                        var14 = _closure1_slot14;
                        var5.VoicePanelControlsModes = var14;
                        var11 = 200;
                        var5.TRANSITIONAL_HEIGHT = var11;
                        var5.INTER_FLOATING_TRANSITIONAL_HEIGHT = var11;
                        var1.__closure = var5;
                        var5 = 11358013348501.0;
                        var1.__workletHash = var5;
                        var5 = _closure1_slot28;
                        var1.__initData = var5;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.onStart;
                        var1 = function() {
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.runOnJS;
                            var1 = _closure3_slot14;
                            var1 = var1.lock;
                            var1 = var2.bind(var3)(var1);
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var12 = {};
                        var6 = 12;
                        var5 = var9[var6];
                        var5 = var8.bind(var7)(var5);
                        var5 = var5.runOnJS;
                        var12.runOnJS = var5;
                        var5 = _closure3_slot14;
                        var12.gestureLock = var5;
                        var1.__closure = var12;
                        var12 = 10726111020848.0;
                        var1.__workletHash = var12;
                        var12 = _closure1_slot27;
                        var1.__initData = var12;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.onTouchesMove;
                        var1 = function arg0, arg1() {
                            _fun111586: for (var _fun111586_ip = 0;;) switch (_fun111586_ip) {
                                case 0:
                                    var4 = arg0;
                                    var2 = arg1;
                                    var5 = var4.state;
                                    var6 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 20;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var1 = var6.bind(var0)(var1);
                                    var1 = var1.State;
                                    var1 = var1.BEGAN;
                                    if (!(var5 === var1)) {
                                        _fun111586_ip = 781;
                                        continue _fun111586
                                    }
                                case 55:
                                    var6 = _closure3_slot8;
                                    var5 = var6.get;
                                    var5 = var5.bind(var6)();
                                    var5 = var5.active;
                                    if (var5) {
                                        _fun111586_ip = 781;
                                        continue _fun111586
                                    }
                                case 83:
                                    var6 = _closure3_slot4;
                                    var5 = var6.get;
                                    var5 = var5.bind(var6)();
                                    var6 = var5.mode;
                                    var5 = _closure1_slot14;
                                    var5 = var5.HIDDEN;
                                    if (!(var6 === var5)) {
                                        _fun111586_ip = 130;
                                        continue _fun111586
                                    }
                                case 115:
                                    var5 = var2.fail;
                                    var5 = var5.bind(var2)();
                                    _fun111586_ip = 781;
                                    continue _fun111586;
                                case 130:
                                    var6 = _closure3_slot9;
                                    var7 = var6.set;
                                    var5 = var6.get;
                                    var8 = var5.bind(var6)();
                                    var5 = 1;
                                    var5 = var8 + var5;
                                    var5 = var7.bind(var6)(var5);
                                    var5 = var6.get;
                                    var6 = var5.bind(var6)();
                                    var5 = 5;
                                    var8 = var6 <= var5;
                                    if (var8) {
                                        _fun111586_ip = 192;
                                        continue _fun111586
                                    }
                                case 179:
                                    var6 = _closure3_slot10;
                                    var5 = var6.get;
                                    var8 = var5.bind(var6)();
                                case 192:
                                    var6 = _closure3_slot1;
                                    var5 = var6.get;
                                    var6 = var5.bind(var6)();
                                    var7 = 'settings';
                                    if (!(var7 !== var6)) {
                                        _fun111586_ip = 225;
                                        continue _fun111586
                                    }
                                case 213:
                                    var5 = 'app_launcher';
                                    var11 = 0;
                                    if (!(var5 === var6)) {
                                        _fun111586_ip = 238;
                                        continue _fun111586
                                    }
                                case 225:
                                    var6 = _closure3_slot11;
                                    var5 = var6.get;
                                    var11 = var5.bind(var6)();
                                case 238:
                                    var4 = var4.changedTouches;
                                    var9 = 0;
                                    var5 = var4[var9];
                                    var4 = var5.absoluteY;
                                    var5 = var5.absoluteX;
                                    var10 = _closure3_slot8;
                                    var6 = var10.get;
                                    var6 = var6.bind(var10)();
                                    var6 = var6.absoluteY;
                                    var10 = var6 - var4;
                                    var12 = _closure3_slot4;
                                    var6 = var12.get;
                                    var6 = var6.bind(var12)();
                                    var12 = var6.mode;
                                    var6 = _closure1_slot14;
                                    var6 = var6.DRAWER;
                                    var6 = var12 === var6;
                                    if (!var6) {
                                        _fun111586_ip = 323;
                                        continue _fun111586
                                    }
                                case 320:
                                    var6 = var8;
                                case 323:
                                    if (!var6) {
                                        _fun111586_ip = 340;
                                        continue _fun111586
                                    }
                                case 326:
                                    var8 = var10 >= var9;
                                    if (var8) {
                                        _fun111586_ip = 337;
                                        continue _fun111586
                                    }
                                case 333:
                                    var8 = var11 > var9;
                                case 337:
                                    var6 = var8;
                                case 340:
                                    if (var6) {
                                        _fun111586_ip = 781;
                                        continue _fun111586
                                    }
                                case 346:
                                    var8 = _closure3_slot4;
                                    var6 = var8.get;
                                    var6 = var6.bind(var8)();
                                    var8 = var6.mode;
                                    var6 = _closure1_slot14;
                                    var6 = var6.FLOATING_DEFAULT;
                                    if (!(var8 === var6)) {
                                        _fun111586_ip = 385;
                                        continue _fun111586
                                    }
                                case 378:
                                    var6 = 30;
                                    if (!(!(var10 > var6))) {
                                        _fun111586_ip = 495;
                                        continue _fun111586
                                    }
                                case 385:
                                    var8 = _closure3_slot4;
                                    var6 = var8.get;
                                    var6 = var6.bind(var8)();
                                    var8 = var6.mode;
                                    var6 = _closure1_slot14;
                                    var6 = var6.DRAWER;
                                    if (!(var8 === var6)) {
                                        _fun111586_ip = 434;
                                        continue _fun111586
                                    }
                                case 417:
                                    var6 = -30;
                                    if (!(!(var10 < var6))) {
                                        _fun111586_ip = 495;
                                        continue _fun111586
                                    }
                                case 427:
                                    var6 = 30;
                                    if (!(!(var10 > var6))) {
                                        _fun111586_ip = 495;
                                        continue _fun111586
                                    }
                                case 434:
                                    var6 = global;
                                    var9 = var6.Math;
                                    var8 = var9.abs;
                                    var8 = var8.bind(var9)(var10);
                                    var10 = var6.Math;
                                    var9 = var10.abs;
                                    var6 = 30;
                                    var6 = var9.bind(var10)(var6);
                                    if (!(var8 > var6)) {
                                        _fun111586_ip = 781;
                                        continue _fun111586
                                    }
                                case 480:
                                    var6 = var2.fail;
                                    var6 = var6.bind(var2)();
                                    _fun111586_ip = 781;
                                    continue _fun111586;
                                case 495:
                                    var10 = _closure3_slot8;
                                    var9 = var10.set;
                                    var6 = {};
                                    var6.absoluteX = var5;
                                    var6.absoluteY = var4;
                                    var5 = _closure3_slot2;
                                    var4 = var5.get;
                                    var4 = var4.bind(var5)();
                                    var4 = var4.x;
                                    var6.x = var4;
                                    var4 = var5.get;
                                    var4 = var4.bind(var5)();
                                    var4 = var4.y;
                                    var6.y = var4;
                                    var4 = var5.get;
                                    var4 = var4.bind(var5)();
                                    var4 = var4.height;
                                    var6.height = var4;
                                    var8 = _closure3_slot4;
                                    var4 = var8.get;
                                    var4 = var4.bind(var8)();
                                    var11 = var4.mode;
                                    var5 = _closure1_slot14;
                                    var4 = var5.DRAWER;
                                    var4 = var11 === var4;
                                    var6.isDrawer = var4;
                                    var4 = true;
                                    var6.active = var4;
                                    var11 = 200;
                                    var6.drawerTransitionHeight = var11;
                                    var6.interFloatingTransitionHeight = var11;
                                    var6 = var9.bind(var10)(var6);
                                    var6 = var8.get;
                                    var6 = var6.bind(var8)();
                                    var6 = var6.mode;
                                    var5 = var5.DRAWER;
                                    var5 = var6 !== var5;
                                    if (!var5) {
                                        _fun111586_ip = 671;
                                        continue _fun111586
                                    }
                                case 663:
                                    var6 = _closure3_slot0;
                                    var5 = var7 !== var6;
                                case 671:
                                    if (!var5) {
                                        _fun111586_ip = 757;
                                        continue _fun111586
                                    }
                                case 674:
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var3 = 12;
                                    var3 = var8[var3];
                                    var6 = var7.bind(var0)(var3);
                                    var5 = var6.runOnJS;
                                    var3 = _closure3_slot3;
                                    var5 = var5.bind(var6)(var3);
                                    var3 = {
                                        'tab': 'settings',
                                        'source': null,
                                        'disableControlsUpdate': true
                                    };
                                    var6 = 14;
                                    var6 = var8[var6];
                                    var6 = var7.bind(var0)(var6);
                                    var6 = var6.VoicePanelTabAnalyticsSources;
                                    var6 = var6.GESTURE;
                                    var3.source = var6;
                                    var3 = var5.bind(var0)(var3);
                                case 757:
                                    var3 = _closure3_slot13;
                                    var1 = var3.set;
                                    var1 = var1.bind(var3)(var4);
                                    var1 = var2.activate;
                                    var1 = var1.bind(var2)();
                                case 781:
                                    return var0;
                            }
                        };
                        var12 = {};
                        var16 = var9[var16];
                        var16 = var8.bind(var7)(var16);
                        var16 = var16.State;
                        var12.State = var16;
                        var12.gestureSpecs = var13;
                        var12.controlsSpecs = var15;
                        var12.VoicePanelControlsModes = var14;
                        var12.touchMoveCount = var10;
                        var10 = _closure3_slot10;
                        var12.isDragScrolling = var10;
                        var16 = _closure3_slot1;
                        var12.sharedTab = var16;
                        var16 = _closure3_slot11;
                        var12.scrollOffsetValue = var16;
                        var16 = 30;
                        var12.GESTURE_VERTICAL_MINIMUM = var16;
                        var12.wrapperSpecs = var20;
                        var12.TRANSITIONAL_HEIGHT = var11;
                        var12.INTER_FLOATING_TRANSITIONAL_HEIGHT = var11;
                        var11 = _closure3_slot0;
                        var12.tab = var11;
                        var11 = var9[var6];
                        var11 = var8.bind(var7)(var11);
                        var11 = var11.runOnJS;
                        var12.runOnJS = var11;
                        var11 = _closure3_slot3;
                        var12.openTab = var11;
                        var11 = 14;
                        var11 = var9[var11];
                        var11 = var8.bind(var7)(var11);
                        var11 = var11.VoicePanelTabAnalyticsSources;
                        var12.VoicePanelTabAnalyticsSources = var11;
                        var11 = _closure3_slot13;
                        var12.scrollLock = var11;
                        var1.__closure = var12;
                        var12 = 16426957992320.0;
                        var1.__workletHash = var12;
                        var12 = _closure1_slot26;
                        var1.__initData = var12;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.onChange;
                        var1 = function arg0() {
                            _fun111587: for (var _fun111587_ip = 0;;) switch (_fun111587_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = var0.absoluteY;
                                    var1 = _closure3_slot8;
                                    var0 = var1.get;
                                    var0 = var0.bind(var1)();
                                    var0 = var0.absoluteY;
                                    var2 = var2 - var0;
                                    var0 = var1.get;
                                    var0 = var0.bind(var1)();
                                    var4 = var0.height;
                                    var0 = var1.get;
                                    var0 = var0.bind(var1)();
                                    var0 = var0.y;
                                    var0 = var4 - var0;
                                    var6 = var0 - var2;
                                    var0 = var1.get;
                                    var0 = var0.bind(var1)();
                                    var0 = var0.drawerTransitionHeight;
                                    if (!(!(var6 > var0))) {
                                        _fun111587_ip = 597;
                                        continue _fun111587
                                    }
                                case 93:
                                    var1 = _closure3_slot8;
                                    var0 = var1.get;
                                    var0 = var0.bind(var1)();
                                    var0 = var0.drawerTransitionHeight;
                                    var9 = var6 / var0;
                                    var2 = _closure3_slot4;
                                    var0 = var2.get;
                                    var0 = var0.bind(var2)();
                                    var5 = var0.height;
                                    var0 = global;
                                    var4 = var0.Math;
                                    var2 = var4.max;
                                    var7 = _closure3_slot7;
                                    var0 = var7.get;
                                    var0 = var0.bind(var7)();
                                    var0 = var0.bottom;
                                    var0 = var6 - var0;
                                    var0 = var0 - var5;
                                    var10 = 0;
                                    var0 = var2.bind(var4)(var0, var10);
                                    var7 = -1;
                                    var8 = var7 * var0;
                                    var0 = var1.get;
                                    var0 = var0.bind(var1)();
                                    var0 = var0.isDrawer;
                                    if (!var0) {
                                        _fun111587_ip = 252;
                                        continue _fun111587
                                    }
                                case 209:
                                    var2 = _closure3_slot8;
                                    var1 = var2.set;
                                    var0 = {};
                                    var4 = var2.get;
                                    var15 = var4.bind(var2)();
                                    var16 = var0;
                                    var4 = copyDataProperties(var16, var15);
                                    var11 = false;
                                    var4 = 'isDrawer';
                                    var0[var4] = var11;
                                    var0 = var1.bind(var2)(var0);
                                case 252:
                                    var1 = _closure3_slot2;
                                    var0 = var1.get;
                                    var0 = var0.bind(var1)();
                                    var0 = var0.height;
                                    var0 = var5 === var0;
                                    if (var0) {
                                        _fun111587_ip = 296;
                                        continue _fun111587
                                    }
                                case 277:
                                    var2 = _closure3_slot2;
                                    var1 = var2.get;
                                    var1 = var1.bind(var2)();
                                    var0 = var1.drawerMode;
                                case 296:
                                    if (var0) {
                                        _fun111587_ip = 378;
                                        continue _fun111587
                                    }
                                case 299:
                                    var4 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var0 = 12;
                                    var0 = var11[var0];
                                    var2 = undefined;
                                    var13 = var4.bind(var2)(var0);
                                    var12 = var13.runOnJS;
                                    var0 = 23;
                                    var1 = var11[var0];
                                    var1 = var4.bind(var2)(var1);
                                    var1 = var1.triggerHapticFeedback;
                                    var1 = var12.bind(var13)(var1);
                                    var0 = var11[var0];
                                    var0 = var4.bind(var2)(var0);
                                    var0 = var0.HapticFeedbackTypes;
                                    var0 = var0.IMPACT_MEDIUM;
                                    var0 = var1.bind(var2)(var0);
                                case 378:
                                    var2 = _closure3_slot2;
                                    var1 = var2.set;
                                    var0 = {};
                                    var4 = var2.get;
                                    var15 = var4.bind(var2)();
                                    var16 = var0;
                                    var4 = copyDataProperties(var16, var15);
                                    var4 = 'x';
                                    var0[var4] = var10;
                                    var11 = _closure3_slot7;
                                    var4 = var11.get;
                                    var4 = var4.bind(var11)();
                                    var4 = var4.bottom;
                                    var7 = var7 * var4;
                                    var4 = 1.5;
                                    var9 = var9 / var4;
                                    var4 = 1;
                                    var4 = var4 - var9;
                                    var4 = var8 * var4;
                                    var7 = var7 + var4;
                                    var4 = 'y';
                                    var0[var4] = var7;
                                    var8 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var4 = 22;
                                    var7 = var7[var4];
                                    var4 = undefined;
                                    var10 = var8.bind(var4)(var7);
                                    var9 = var10.getControlsDefaultWidth;
                                    var7 = _closure3_slot5;
                                    var4 = var7.get;
                                    var4 = var4.bind(var7)();
                                    var8 = var4.width;
                                    var4 = var11.get;
                                    var4 = var4.bind(var11)();
                                    var7 = var4.left;
                                    var4 = var11.get;
                                    var4 = var4.bind(var11)();
                                    var4 = var4.right;
                                    var7 = var9.bind(var10)(var8, var7, var4);
                                    var4 = 'width';
                                    var0[var4] = var7;
                                    var4 = 'height';
                                    var0[var4] = var5;
                                    var5 = false;
                                    var4 = 'drawerMode';
                                    var0[var4] = var5;
                                    var0 = var1.bind(var2)(var0);
                                    _fun111587_ip = 908;
                                    continue _fun111587;
                                case 597:
                                    var1 = _closure3_slot8;
                                    var0 = var1.get;
                                    var0 = var0.bind(var1)();
                                    var0 = var0.isDrawer;
                                    if (var0) {
                                        _fun111587_ip = 662;
                                        continue _fun111587
                                    }
                                case 619:
                                    var2 = _closure3_slot8;
                                    var1 = var2.set;
                                    var0 = {};
                                    var4 = var2.get;
                                    var15 = var4.bind(var2)();
                                    var16 = var0;
                                    var4 = copyDataProperties(var16, var15);
                                    var5 = true;
                                    var4 = 'isDrawer';
                                    var0[var4] = var5;
                                    var0 = var1.bind(var2)(var0);
                                case 662:
                                    var1 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var0 = 21;
                                    var0 = var9[var0];
                                    var8 = undefined;
                                    var1 = var1.bind(var8)(var0);
                                    var11 = _closure3_slot7;
                                    var0 = var11.get;
                                    var0 = var0.bind(var11)();
                                    var0 = var1.bind(var8)(var0);
                                    var7 = var0.height;
                                    var2 = _closure3_slot2;
                                    var1 = var2.set;
                                    var0 = {};
                                    var5 = var2.get;
                                    var15 = var5.bind(var2)();
                                    var16 = var0;
                                    var5 = copyDataProperties(var16, var15);
                                    var10 = 0;
                                    var5 = 'x';
                                    var0[var5] = var10;
                                    var5 = 'y';
                                    var0[var5] = var10;
                                    var5 = _closure1_slot0;
                                    var4 = 22;
                                    var4 = var9[var4];
                                    var10 = var5.bind(var8)(var4);
                                    var9 = var10.getControlsDrawerOpenWidth;
                                    var5 = _closure3_slot5;
                                    var4 = var5.get;
                                    var4 = var4.bind(var5)();
                                    var8 = var4.width;
                                    var4 = var11.get;
                                    var4 = var4.bind(var11)();
                                    var5 = var4.left;
                                    var4 = var11.get;
                                    var4 = var4.bind(var11)();
                                    var4 = var4.right;
                                    var5 = var9.bind(var10)(var8, var5, var4);
                                    var4 = 'width';
                                    var0[var4] = var5;
                                    var4 = global;
                                    var5 = var4.Math;
                                    var4 = var5.min;
                                    var8 = _closure3_slot6;
                                    var3 = var8.get;
                                    var3 = var3.bind(var8)();
                                    var3 = var3.drawerHeight;
                                    var3 = var3 - var7;
                                    var4 = var4.bind(var5)(var6, var3);
                                    var3 = 'height';
                                    var0[var3] = var4;
                                    var4 = true;
                                    var3 = 'drawerMode';
                                    var0[var3] = var4;
                                    var0 = var1.bind(var2)(var0);
                                case 908:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var12 = {};
                        var12.gestureSpecs = var13;
                        var18 = _closure1_slot1;
                        var17 = 21;
                        var16 = var9[var17];
                        var16 = var18.bind(var7)(var16);
                        var12.calculateVoicePanelHeaderSpecs = var16;
                        var16 = _closure3_slot7;
                        var12.safeArea = var16;
                        var12.wrapperSpecs = var20;
                        var21 = 22;
                        var22 = var9[var21];
                        var22 = var8.bind(var7)(var22);
                        var22 = var22.getControlsDrawerOpenWidth;
                        var12.getControlsDrawerOpenWidth = var22;
                        var22 = _closure3_slot5;
                        var12.windowDimensions = var22;
                        var19 = _closure3_slot6;
                        var12.wrapperDimensions = var19;
                        var12.controlsSpecs = var15;
                        var22 = var9[var6];
                        var22 = var8.bind(var7)(var22);
                        var22 = var22.runOnJS;
                        var12.runOnJS = var22;
                        var22 = 23;
                        var23 = var9[var22];
                        var23 = var8.bind(var7)(var23);
                        var23 = var23.triggerHapticFeedback;
                        var12.triggerHapticFeedback = var23;
                        var22 = var9[var22];
                        var22 = var8.bind(var7)(var22);
                        var22 = var22.HapticFeedbackTypes;
                        var12.HapticFeedbackTypes = var22;
                        var21 = var9[var21];
                        var21 = var8.bind(var7)(var21);
                        var21 = var21.getControlsDefaultWidth;
                        var12.getControlsDefaultWidth = var21;
                        var1.__closure = var12;
                        var12 = 7837856916375.0;
                        var1.__workletHash = var12;
                        var12 = _closure1_slot25;
                        var1.__initData = var12;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.onTouchesCancelled;
                        var1 = function() {
                            var2 = _closure3_slot13;
                            var0 = var2.set;
                            var5 = false;
                            var0 = var0.bind(var2)(var5);
                            var2 = _closure3_slot10;
                            var0 = var2.set;
                            var0 = var0.bind(var2)(var5);
                            var3 = _closure3_slot8;
                            var2 = var3.set;
                            var0 = {};
                            var4 = var3.get;
                            var6 = var4.bind(var3)();
                            var7 = var0;
                            var4 = copyDataProperties(var7, var6);
                            var4 = 'active';
                            var0[var4] = var5;
                            var0 = var2.bind(var3)(var0);
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 12;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.runOnJS;
                            var1 = _closure3_slot14;
                            var1 = var1.unlock;
                            var1 = var2.bind(var3)(var1);
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var12 = {};
                        var12.scrollLock = var11;
                        var12.isDragScrolling = var10;
                        var12.gestureSpecs = var13;
                        var21 = var9[var6];
                        var21 = var8.bind(var7)(var21);
                        var21 = var21.runOnJS;
                        var12.runOnJS = var21;
                        var12.gestureLock = var5;
                        var1.__closure = var12;
                        var12 = 1131746916097.0;
                        var1.__workletHash = var12;
                        var12 = _closure1_slot24;
                        var1.__initData = var12;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.onEnd;
                        var1 = function arg0() {
                            _fun111589: for (var _fun111589_ip = 0;;) switch (_fun111589_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = var0.velocityY;
                                    var0 = global;
                                    var1 = var0.Math;
                                    var0 = var1.abs;
                                    var1 = var0.bind(var1)(var3);
                                    var0 = 200;
                                    if (!(var1 > var0)) {
                                        _fun111589_ip = 44;
                                        continue _fun111589
                                    }
                                case 35:
                                    var2 = 0;
                                    if (!(!(var3 < var2))) {
                                        _fun111589_ip = 200;
                                        continue _fun111589
                                    }
                                case 44:
                                    if (!(var1 < var0)) {
                                        _fun111589_ip = 73;
                                        continue _fun111589
                                    }
                                case 48:
                                    var2 = _closure3_slot8;
                                    var1 = var2.get;
                                    var1 = var1.bind(var2)();
                                    var1 = var1.isDrawer;
                                    if (var1) {
                                        _fun111589_ip = 135;
                                        continue _fun111589
                                    }
                                case 73:
                                    var2 = _closure3_slot4;
                                    var1 = var2.get;
                                    var1 = var1.bind(var2)();
                                    var3 = var1.mode;
                                    var2 = _closure1_slot14;
                                    var2 = var2.FLOATING_DEFAULT;
                                    if (!(var3 !== var2)) {
                                        _fun111589_ip = 123;
                                        continue _fun111589
                                    }
                                case 111:
                                    var2 = _closure1_slot14;
                                    var2 = var2.FLOATING_DEFAULT;
                                    _fun111589_ip = 133;
                                    continue _fun111589;
                                case 123:
                                    var1 = _closure1_slot14;
                                    var2 = var1.RESET;
                                case 133:
                                    _fun111589_ip = 195;
                                    continue _fun111589;
                                case 135:
                                    var1 = _closure3_slot4;
                                    var0 = var1.get;
                                    var0 = var0.bind(var1)();
                                    var3 = var0.mode;
                                    var0 = _closure1_slot14;
                                    var0 = var0.DRAWER;
                                    if (!(var3 !== var0)) {
                                        _fun111589_ip = 182;
                                        continue _fun111589
                                    }
                                case 170:
                                    var0 = _closure1_slot14;
                                    var0 = var0.DRAWER;
                                    _fun111589_ip = 192;
                                    continue _fun111589;
                                case 182:
                                    var1 = _closure1_slot14;
                                    var0 = var1.RESET;
                                case 192:
                                    var2 = var0;
                                case 195:
                                    _fun111589_ip = 372;
                                    continue _fun111589;
                                case 200:
                                    var5 = _closure3_slot2;
                                    var4 = var5.set;
                                    var3 = {};
                                    var1 = var5.get;
                                    var11 = var1.bind(var5)();
                                    var12 = var3;
                                    var1 = copyDataProperties(var12, var11);
                                    var6 = _closure3_slot6;
                                    var1 = var6.get;
                                    var1 = var1.bind(var6)();
                                    var7 = var1.drawerHeight;
                                    var8 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var6 = 21;
                                    var6 = var9[var6];
                                    var9 = undefined;
                                    var8 = var8.bind(var9)(var6);
                                    var10 = _closure3_slot7;
                                    var6 = var10.get;
                                    var6 = var6.bind(var10)();
                                    var6 = var8.bind(var9)(var6);
                                    var6 = var6.height;
                                    var7 = var7 - var6;
                                    var6 = 'height';
                                    var3[var6] = var7;
                                    var3 = var4.bind(var5)(var3);
                                    var3 = _closure3_slot4;
                                    var0 = var3.get;
                                    var0 = var0.bind(var3)();
                                    var3 = var0.mode;
                                    var0 = _closure1_slot14;
                                    var0 = var0.DRAWER;
                                    if (!(var3 !== var0)) {
                                        _fun111589_ip = 359;
                                        continue _fun111589
                                    }
                                case 347:
                                    var0 = _closure1_slot14;
                                    var0 = var0.DRAWER;
                                    _fun111589_ip = 369;
                                    continue _fun111589;
                                case 359:
                                    var1 = _closure1_slot14;
                                    var0 = var1.RESET;
                                case 369:
                                    var2 = var0;
                                case 372:
                                    var3 = _closure3_slot13;
                                    var0 = var3.set;
                                    var4 = false;
                                    var0 = var0.bind(var3)(var4);
                                    var3 = _closure3_slot10;
                                    var0 = var3.set;
                                    var0 = var0.bind(var3)(var4);
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var0 = 12;
                                    var3 = var3[var0];
                                    var0 = undefined;
                                    var4 = var4.bind(var0)(var3);
                                    var3 = var4.runOnJS;
                                    var1 = _closure3_slot14;
                                    var1 = var1.unlock;
                                    var1 = var3.bind(var4)(var1);
                                    var1 = var1.bind(var0)(var2);
                                    return var0;
                            }
                        };
                        var12 = {};
                        var12.wrapperSpecs = var20;
                        var12.wrapperDimensions = var19;
                        var17 = var9[var17];
                        var17 = var18.bind(var7)(var17);
                        var12.calculateVoicePanelHeaderSpecs = var17;
                        var12.safeArea = var16;
                        var12.controlsSpecs = var15;
                        var12.VoicePanelControlsModes = var14;
                        var12.gestureSpecs = var13;
                        var12.scrollLock = var11;
                        var12.isDragScrolling = var10;
                        var13 = var9[var6];
                        var13 = var8.bind(var7)(var13);
                        var13 = var13.runOnJS;
                        var12.runOnJS = var13;
                        var12.gestureLock = var5;
                        var1.__closure = var12;
                        var12 = 891400234356.0;
                        var1.__workletHash = var12;
                        var12 = _closure1_slot23;
                        var1.__initData = var12;
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.onFinalize;
                        var0 = function() {
                            var2 = _closure3_slot13;
                            var0 = var2.set;
                            var3 = false;
                            var0 = var0.bind(var2)(var3);
                            var2 = _closure3_slot10;
                            var0 = var2.set;
                            var0 = var0.bind(var2)(var3);
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 12;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.runOnJS;
                            var1 = _closure3_slot14;
                            var1 = var1.unlock;
                            var1 = var2.bind(var3)(var1);
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var4 = {};
                        var4.scrollLock = var11;
                        var4.isDragScrolling = var10;
                        var6 = var9[var6];
                        var6 = var8.bind(var7)(var6);
                        var6 = var6.runOnJS;
                        var4.runOnJS = var6;
                        var4.gestureLock = var5;
                        var0.__closure = var4;
                        var4 = 7081480235438.0;
                        var0.__workletHash = var4;
                        var3 = _closure1_slot22;
                        var0.__initData = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3 = var5.bind(var6)(var3, var4);
                    var4 = var12[var9];
                    var6 = var10.bind(var11)(var4);
                    var5 = var6.useAnimatedReaction;
                    var4 = function() {
                        var1 = _closure3_slot2;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        var0 = var0.drawerMode;
                        return var0;
                    };
                    var8 = {};
                    var8.wrapperSpecs = var13;
                    var4.__closure = var8;
                    var8 = 6312637480574.0;
                    var4.__workletHash = var8;
                    var8 = _closure1_slot29;
                    var4.__initData = var8;
                    var0 = function arg0, arg1() {
                        _fun111592: for (var _fun111592_ip = 0;;) switch (_fun111592_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = arg1;
                                if (!(var1 !== var0)) {
                                    _fun111592_ip = 89;
                                    continue _fun111592
                                }
                            case 10:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 12;
                                var0 = var4[var0];
                                var2 = undefined;
                                var6 = var3.bind(var2)(var0);
                                var5 = var6.runOnJS;
                                var0 = 23;
                                var1 = var4[var0];
                                var1 = var3.bind(var2)(var1);
                                var1 = var1.triggerHapticFeedback;
                                var1 = var5.bind(var6)(var1);
                                var0 = var4[var0];
                                var0 = var3.bind(var2)(var0);
                                var0 = var0.HapticFeedbackTypes;
                                var0 = var0.IMPACT_MEDIUM;
                                var0 = var1.bind(var2)(var0);
                            case 89:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var8 = {};
                    var9 = var12[var9];
                    var9 = var10.bind(var11)(var9);
                    var9 = var9.runOnJS;
                    var8.runOnJS = var9;
                    var9 = 23;
                    var13 = var12[var9];
                    var13 = var10.bind(var11)(var13);
                    var13 = var13.triggerHapticFeedback;
                    var8.triggerHapticFeedback = var13;
                    var9 = var12[var9];
                    var9 = var10.bind(var11)(var9);
                    var9 = var9.HapticFeedbackTypes;
                    var8.HapticFeedbackTypes = var9;
                    var0.__closure = var8;
                    var8 = 6391154289487.0;
                    var0.__workletHash = var8;
                    var7 = _closure1_slot30;
                    var0.__initData = var7;
                    var0 = var5.bind(var6)(var4, var0);
                    var0 = {};
                    var0.gesture = var3;
                    var0.useScrollLock = var2;
                    var0.gestureSpecs = var1;
                    return var0;
                };
                var37 = undefined;
                var36 = var19;
                var35 = var18;
                var34 = var20;
                var33 = var16;
                var1 = var37[var1](var36, var35, var34, var33, var32);
                var10 = var1.gesture;
                var4 = var1.useScrollLock;
                var17 = var1.gestureSpecs;
                var1 = function arg0() {
                    var12 = arg0;
                    var _closure3_slot0 = var12;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var0 = 24;
                    var2 = var9[var0];
                    var0 = undefined;
                    var3 = var8.bind(var0)(var2);
                    var2 = var3.useIsScreenReaderEnabled;
                    var7 = var2.bind(var3)();
                    var _closure3_slot1 = var7;
                    var6 = _closure1_slot1;
                    var2 = 25;
                    var2 = var9[var2];
                    var3 = var6.bind(var0)(var2);
                    var2 = {};
                    var4 = true;
                    var2.ignoreKeyboard = var4;
                    var14 = var3.bind(var0)(var2);
                    var _closure3_slot2 = var14;
                    var4 = _closure1_slot4;
                    var3 = var4.useContext;
                    var2 = 11;
                    var2 = var9[var2];
                    var2 = var6.bind(var0)(var2);
                    var2 = var3.bind(var4)(var2);
                    var17 = var2.controlsSpecs;
                    var _closure3_slot3 = var17;
                    var15 = var2.windowDimensions;
                    var _closure3_slot4 = var15;
                    var16 = var2.mode;
                    var _closure3_slot5 = var16;
                    var10 = var2.setControlsMode;
                    var _closure3_slot6 = var10;
                    var13 = var2.safeArea;
                    var _closure3_slot7 = var13;
                    var18 = var2.connected;
                    var _closure3_slot8 = var18;
                    var11 = 12;
                    var2 = var9[var11];
                    var4 = var8.bind(var0)(var2);
                    var3 = var4.useAnimatedReaction;
                    var2 = function() {
                        var0 = {};
                        var3 = _closure3_slot8;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var0.connected = var2;
                        var3 = _closure3_slot3;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var2 = var2.mode;
                        var0.currentControlsMode = var2;
                        var4 = _closure3_slot5;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        var0.mode = var2;
                        var4 = _closure3_slot4;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        var2 = var2.width;
                        var0.windowWidth = var2;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        var2 = var2.height;
                        var0.windowHeight = var2;
                        var4 = _closure3_slot2;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        var2 = var2.height;
                        var0.windowHeightIgnoringKeyboard = var2;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var2 = var2.height;
                        var0.controlsHeightValue = var2;
                        var2 = _closure3_slot7;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var0.safeArea = var1;
                        return var0;
                    };
                    var6 = {};
                    var6.connected = var18;
                    var6.controlsSpecs = var17;
                    var6.mode = var16;
                    var6.windowDimensions = var15;
                    var6.windowDimensionsIgnoringKeyboard = var14;
                    var6.safeArea = var13;
                    var2.__closure = var6;
                    var6 = 8473375804517.0;
                    var2.__workletHash = var6;
                    var6 = _closure1_slot31;
                    var2.__initData = var6;
                    var1 = function arg0, arg1() {
                        _fun111595: for (var _fun111595_ip = 0;;) switch (_fun111595_ip) {
                            case 0:
                                var1 = arg0;
                                var6 = arg1;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 26;
                                var2 = var2[var0];
                                var0 = undefined;
                                var7 = var3.bind(var0)(var2);
                                var3 = var7.cheapWorkletShallowEqual;
                                var5 = null;
                                var8 = var5 != var6;
                                var2 = undefined;
                                if (!var8) {
                                    _fun111595_ip = 51;
                                    continue _fun111595
                                }
                            case 48:
                                var2 = var6;
                            case 51:
                                var2 = var3.bind(var7)(var1, var2);
                                if (var2) {
                                    _fun111595_ip = 901;
                                    continue _fun111595
                                }
                            case 63:
                                var2 = var1.currentControlsMode;
                                var3 = var1.mode;
                                var12 = var1.windowWidth;
                                var9 = var1.windowHeightIgnoringKeyboard;
                                var7 = var1.controlsHeightValue;
                                var8 = var1.safeArea;
                                var1 = _closure1_slot10;
                                var1 = var1.DISMISSED;
                                if (!(var1 !== var3)) {
                                    _fun111595_ip = 829;
                                    continue _fun111595
                                }
                            case 115:
                                var1 = _closure1_slot10;
                                var1 = var1.PIP;
                                if (!(var1 !== var3)) {
                                    _fun111595_ip = 829;
                                    continue _fun111595
                                }
                            case 132:
                                var1 = _closure1_slot10;
                                var1 = var1.PANEL;
                                var1 = _closure1_slot14;
                                var1 = var1.RESET;
                                if (!(var1 !== var2)) {
                                    _fun111595_ip = 748;
                                    continue _fun111595
                                }
                            case 159:
                                var1 = _closure1_slot14;
                                var1 = var1.HIDDEN;
                                if (!(var1 !== var2)) {
                                    _fun111595_ip = 621;
                                    continue _fun111595
                                }
                            case 176:
                                var1 = _closure1_slot14;
                                var1 = var1.FLOATING_DEFAULT;
                                if (!(var1 !== var2)) {
                                    _fun111595_ip = 486;
                                    continue _fun111595
                                }
                            case 193:
                                var1 = _closure1_slot14;
                                var1 = var1.DRAWER;
                                if (!(var1 === var2)) {
                                    _fun111595_ip = 901;
                                    continue _fun111595
                                }
                            case 210:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var13 = 27;
                                var1 = var1[var13];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.getDrawerSpec;
                                var1 = var8.top;
                                var1 = var2.bind(var3)(var9, var1);
                                var9 = var1.minHeight;
                                var2 = var1.maxHeight;
                                var10 = _closure3_slot0;
                                var3 = var10.get;
                                var3 = var3.bind(var10)();
                                var3 = var3.height;
                                if (!(!(var3 <= var7))) {
                                    _fun111595_ip = 395;
                                    continue _fun111595
                                }
                            case 284:
                                if (!(var5 != var6)) {
                                    _fun111595_ip = 362;
                                    continue _fun111595
                                }
                            case 288:
                                var10 = _closure3_slot0;
                                var3 = var10.get;
                                var3 = var3.bind(var10)();
                                var10 = var3.height;
                                var11 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var13];
                                var14 = var11.bind(var0)(var3);
                                var13 = var14.getDrawerSpec;
                                var11 = var6.windowHeight;
                                var3 = var6.safeArea;
                                var3 = var3.top;
                                var3 = var13.bind(var14)(var11, var3);
                                var3 = var3.maxHeight;
                                if (!(var10 !== var3)) {
                                    _fun111595_ip = 395;
                                    continue _fun111595
                                }
                            case 362:
                                var10 = _closure3_slot0;
                                var3 = var10.get;
                                var3 = var3.bind(var10)();
                                var10 = var3.height;
                                var11 = var2 + var9;
                                var3 = 2;
                                var3 = var11 / var3;
                                if (!(var10 >= var3)) {
                                    _fun111595_ip = 398;
                                    continue _fun111595
                                }
                            case 395:
                                var9 = var2;
                            case 398:
                                var3 = _closure3_slot0;
                                var2 = var3.set;
                                var1 = {
                                    'x': 0,
                                    'y': 0,
                                    'width': null,
                                    'height': null,
                                    'drawerMode': true,
                                    'hidden': false
                                };
                                var11 = _closure1_slot0;
                                var13 = _closure1_slot2;
                                var10 = 22;
                                var10 = var13[var10];
                                var14 = var11.bind(var0)(var10);
                                var13 = var14.getControlsDrawerOpenWidth;
                                var11 = var8.left;
                                var10 = var8.right;
                                var10 = var13.bind(var14)(var12, var11, var10);
                                var1.width = var10;
                                var1.height = var9;
                                var1 = var2.bind(var3)(var1);
                                _fun111595_ip = 901;
                                continue _fun111595;
                            case 486:
                                var3 = _closure3_slot0;
                                var2 = var3.set;
                                var1 = {
                                    'x': 0,
                                    'y': null,
                                    'width': null,
                                    'height': null,
                                    'drawerMode': false,
                                    'hidden': false
                                };
                                var9 = global;
                                var13 = var9.Math;
                                var11 = var13.max;
                                var10 = var8.bottom;
                                var9 = _closure1_slot12;
                                var10 = var11.bind(var13)(var10, var9);
                                var9 = -1;
                                var9 = var9 * var10;
                                var1.y = var9;
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var9 = 22;
                                var9 = var11[var9];
                                var11 = var10.bind(var0)(var9);
                                var10 = var11.getControlsDefaultWidth;
                                var9 = var8.left;
                                var8 = var8.right;
                                var8 = var10.bind(var11)(var12, var9, var8);
                                var1.width = var8;
                                var1.height = var7;
                                var1 = var2.bind(var3)(var1);
                                _fun111595_ip = 901;
                                continue _fun111595;
                            case 621:
                                var2 = _closure3_slot1;
                                var3 = _closure3_slot0;
                                if (var2) {
                                    _fun111595_ip = 704;
                                    continue _fun111595
                                }
                            case 635:
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var2.hidden;
                                if (var2) {
                                    _fun111595_ip = 901;
                                    continue _fun111595
                                }
                            case 656:
                                var7 = _closure3_slot0;
                                var2 = var7.set;
                                var1 = {};
                                var8 = var7.get;
                                var16 = var8.bind(var7)();
                                var17 = var1;
                                var8 = copyDataProperties(var17, var16);
                                var9 = true;
                                var8 = 'hidden';
                                var1[var8] = var9;
                                var1 = var2.bind(var7)(var1);
                                _fun111595_ip = 901;
                                continue _fun111595;
                            case 704:
                                var2 = var3.set;
                                var1 = {};
                                var7 = var3.get;
                                var16 = var7.bind(var3)();
                                var17 = var1;
                                var7 = copyDataProperties(var17, var16);
                                var8 = false;
                                var7 = 'hidden';
                                var1[var7] = var8;
                                var1 = var2.bind(var3)(var1);
                                _fun111595_ip = 901;
                                continue _fun111595;
                            case 748:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 12;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.runOnJS;
                                var1 = _closure3_slot6;
                                var2 = var2.bind(var3)(var1);
                                var1 = {};
                                var7 = var5 == var6;
                                var3 = undefined;
                                if (var7) {
                                    _fun111595_ip = 802;
                                    continue _fun111595
                                }
                            case 796:
                                var3 = var6.currentControlsMode;
                            case 802:
                                if (!(var5 == var3)) {
                                    _fun111595_ip = 816;
                                    continue _fun111595
                                }
                            case 806:
                                var4 = _closure1_slot14;
                                var3 = var4.FLOATING_DEFAULT;
                            case 816:
                                var1.mode = var3;
                                var1 = var2.bind(var0)(var1);
                                var1 = undefined;
                                return var1;
                            case 829:
                                var3 = _closure3_slot0;
                                var1 = var3.get;
                                var1 = var1.bind(var3)();
                                var1 = var1.hidden;
                                if (var1) {
                                    _fun111595_ip = 897;
                                    continue _fun111595
                                }
                            case 854:
                                var4 = _closure3_slot0;
                                var3 = var4.set;
                                var2 = {};
                                var5 = var4.get;
                                var16 = var5.bind(var4)();
                                var17 = var2;
                                var5 = copyDataProperties(var17, var16);
                                var6 = true;
                                var5 = 'hidden';
                                var2[var5] = var6;
                                var1 = var3.bind(var4)(var2);
                            case 897:
                                var1 = undefined;
                                return var1;
                            case 901:
                                return var0;
                        }
                    };
                    var6 = {};
                    var13 = 26;
                    var13 = var9[var13];
                    var13 = var8.bind(var0)(var13);
                    var13 = var13.cheapWorkletShallowEqual;
                    var6.cheapWorkletShallowEqual = var13;
                    var13 = _closure1_slot10;
                    var6.VoicePanelModes = var13;
                    var6.wrapperSpecs = var12;
                    var12 = _closure1_slot14;
                    var6.VoicePanelControlsModes = var12;
                    var11 = var9[var11];
                    var11 = var8.bind(var0)(var11);
                    var11 = var11.runOnJS;
                    var6.runOnJS = var11;
                    var6.setControlsMode = var10;
                    var6.isScreenReaderEnabled = var7;
                    var7 = _closure1_slot12;
                    var6.EDGE_GUTTER = var7;
                    var7 = 22;
                    var10 = var9[var7];
                    var10 = var8.bind(var0)(var10);
                    var10 = var10.getControlsDefaultWidth;
                    var6.getControlsDefaultWidth = var10;
                    var10 = 27;
                    var10 = var9[var10];
                    var10 = var8.bind(var0)(var10);
                    var10 = var10.getDrawerSpec;
                    var6.getDrawerSpec = var10;
                    var7 = var9[var7];
                    var7 = var8.bind(var0)(var7);
                    var7 = var7.getControlsDrawerOpenWidth;
                    var6.getControlsDrawerOpenWidth = var7;
                    var1.__closure = var6;
                    var6 = 11593751602783.0;
                    var1.__workletHash = var6;
                    var5 = _closure1_slot32;
                    var1.__initData = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = var1.bind(var3)(var20);
                var1 = var5.useState;
                var1 = var1.bind(var5)(var24);
                var1 = var9.bind(var3)(var1, var8);
                var9 = var1[var7];
                var29 = var1[var2];
                var _closure2_slot14 = var29;
                var1 = var22[var30];
                var8 = var15.bind(var3)(var1);
                var7 = var8.useAnimatedReaction;
                var2 = function() {
                    var1 = _closure2_slot3;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var0 = var0.mode;
                    return var0;
                };
                var1 = {};
                var1.controlsSpecs = var27;
                var2.__closure = var1;
                var1 = 1144186345815.0;
                var2.__workletHash = var1;
                var1 = _closure1_slot38;
                var2.__initData = var1;
                var1 = function arg0, arg1() {
                    _fun111597: for (var _fun111597_ip = 0;;) switch (_fun111597_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = arg1;
                            var0 = var2 !== var3;
                            if (!var0) {
                                _fun111597_ip = 20;
                                continue _fun111597
                            }
                        case 13:
                            var0 = _closure2_slot1;
                        case 20:
                            if (!var0) {
                                _fun111597_ip = 185;
                                continue _fun111597
                            }
                        case 26:
                            var1 = _closure1_slot14;
                            var1 = var1.DRAWER;
                            if (!(var2 === var1)) {
                                _fun111597_ip = 57;
                                continue _fun111597
                            }
                        case 43:
                            var1 = _closure1_slot14;
                            var1 = var1.DRAWER;
                            if (!(var3 === var1)) {
                                _fun111597_ip = 139;
                                continue _fun111597
                            }
                        case 57:
                            var1 = _closure1_slot14;
                            var1 = var1.DRAWER;
                            var1 = var2 !== var1;
                            if (!var1) {
                                _fun111597_ip = 88;
                                continue _fun111597
                            }
                        case 74:
                            var2 = _closure1_slot14;
                            var2 = var2.DRAWER;
                            var1 = var3 === var2;
                        case 88:
                            if (!var1) {
                                _fun111597_ip = 185;
                                continue _fun111597
                            }
                        case 91:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 12;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot14;
                            var2 = var2.bind(var4)(var1);
                            var1 = false;
                            var1 = var2.bind(var3)(var1);
                            _fun111597_ip = 185;
                            continue _fun111597;
                        case 139:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 12;
                            var0 = var2[var0];
                            var2 = undefined;
                            var3 = var1.bind(var2)(var0);
                            var1 = var3.runOnJS;
                            var0 = _closure2_slot14;
                            var1 = var1.bind(var3)(var0);
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                        case 185:
                            var0 = undefined;
                            return var0;
                    }
                };
                var24 = {};
                var24.isScreenReaderEnabled = var31;
                var31 = _closure1_slot14;
                var24.VoicePanelControlsModes = var31;
                var30 = var22[var30];
                var30 = var15.bind(var3)(var30);
                var30 = var30.runOnJS;
                var24.runOnJS = var30;
                var24.setIsDrawer = var29;
                var1.__closure = var24;
                var24 = 129244609438.0;
                var1.__workletHash = var24;
                var24 = _closure1_slot39;
                var1.__initData = var24;
                var1 = var7.bind(var8)(var2, var1);
                var1 = var5.useId;
                var24 = var1.bind(var5)();
                var2 = var5.useCallback;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot5;
                    var1 = {};
                    var0 = _closure1_slot14;
                    var0 = var0.FLOATING_DEFAULT;
                    var1.mode = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot18;
                var0 = 18;
                var0 = var22[var0];
                var0 = var15.bind(var3)(var0);
                var0 = var0.ControlsGestureScrollLock;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var7 = _closure1_slot16;
                var4 = 45;
                var4 = var22[var4];
                var5 = var11.bind(var3)(var4);
                var4 = {};
                var4.wrapperSpecs = var20;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var6 = _closure1_slot33;
                var5 = {};
                var5.channelId = var28;
                var5.wrapperSpecs = var20;
                var5.controlsSpecs = var27;
                var5.accessoryHeights = var26;
                var5.gestureState = var25;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var5 = 46;
                var5 = var22[var5];
                var6 = var11.bind(var3)(var5);
                var5 = {};
                var5.nativeID = var24;
                var24 = var14.accessibilityWrapper;
                var5.style = var24;
                var5.accessibilityViewIsModal = var9;
                var5.onAccessibilityEscape = var8;
                var8 = 'box-none';
                var5.pointerEvents = var8;
                var8 = 20;
                var8 = var22[var8];
                var8 = var15.bind(var3)(var8);
                var9 = var8.GestureDetector;
                var8 = {};
                var8.gesture = var10;
                var10 = 36;
                var10 = var22[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var24 = var14.wrapper;
                var14 = new Array(2);
                var14[0] = var24;
                var14[1] = var23;
                var10.style = var14;
                var10.animatedProps = var12;
                var14 = _closure1_slot21;
                var12 = {};
                var12.openTab = var16;
                var14 = var7.bind(var3)(var14, var12);
                var12 = new Array(4);
                var12[0] = var14;
                var14 = 47;
                var14 = var22[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.VoicePanelVisualEffectView;
                var14 = {};
                var21 = !var21;
                if (!var21) {
                    _fun111568_ip = 1380;
                    continue _fun111568
                }
            case 1350:
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var22 = 48;
                var22 = var24[var22];
                var23 = var23.bind(var3)(var22);
                var22 = var23.isAndroid;
                var21 = var22.bind(var23)();
            case 1380:
                var14.matchAppTheme = var21;
                var14 = var7.bind(var3)(var15, var14);
                var12[1] = var14;
                var15 = _closure1_slot16;
                var21 = _closure1_slot35;
                var14 = {};
                var14.openTab = var16;
                var14.wrapperSpecs = var20;
                var14.sharedTab = var18;
                var14 = var15.bind(var3)(var21, var14);
                var12[2] = var14;
                var14 = _closure1_slot1;
                var21 = _closure1_slot2;
                var13 = 49;
                var13 = var21[var13];
                var14 = var14.bind(var3)(var13);
                var13 = {};
                var13.wrapperSpecs = var20;
                var13.tab = var19;
                var13.sharedTab = var18;
                var13.gestureSpecs = var17;
                var13.openTab = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[3] = var13;
                var10.children = var12;
                var10 = var2.bind(var3)(var11, var10);
                var8.children = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 50;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/VoicePanelControls.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3950, 11840, 11843, 11838, 660, 33, 1297, 671, 11839, 3722, 8218, 14363, 5205, 5205, 1234, 13773, 14290, 4964, 11844, 14364, 3281, 4071, 13048, 5307, 14365, 14268, 14366, 4028, 14368, 14371, 14373, 4082, 4738, 6482, 14248, 8596, 802, 14392, 1229, 1568, 1464, 13153, 14393, 14292, 14370, 478, 14394, 2]);