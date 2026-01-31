// modules/media_panel/native/MediaPlaybackPanelUI.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useContext;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS;
    var _closure1_slot7 = var6;
    var3 = var3.MediaPlaybackPanelModes;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.IS_IOS;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BORDER_RADIUS_PHYSICS;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.opacity = var9;
    var3.wrapperAnimationPresets = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'zIndex': 1
    };
    var3.wrapper = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
        'overflow': 'hidden',
        'borderWidth': 1
    };
    var9 = 8;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CHAT_BORDER;
    var8.borderColor = var12;
    var3.mask = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.shadows;
    var14 = var12.SHADOW_LOW_HOVER;
    var15 = var8;
    var12 = copyDataProperties(var15, var14);
    var3.maskElevation = var8;
    var8 = {
        'xOffset': 0,
        'yOffset': 0,
        'shadowColorIos': '#000000',
        'shadowOpacity': 0,
        'shadowRadius': 0,
        'elevation': 0,
        'shadowColorAndroid': '#000000'
    };
    var3.maskEmptyElevation = var8;
    var8 = {};
    var8.flex = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.content = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'function MediaPlaybackPanelUITsx1(){const{mode,windowDimensions,canShowPIP}=this.__closure;return{mode:mode.get(),windowDimensions:windowDimensions,canShowPIP:canShowPIP.get()};}';
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = 'function MediaPlaybackPanelUITsx2(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:modeToSet,windowDimensions:windowDimensions,canShowPIP:canShowPIP}=props;if(modeToSet===MediaPlaybackPanelModes.PIP){const{width:width,height:height}=canShowPIP?{width:120,height:120}:{width:0,height:0};updateSharedValueIfChanged(wrapperDimensions,{width:width,height:height});}else if(modeToSet===MediaPlaybackPanelModes.DISMISSED){updateSharedValueIfChanged(wrapperOffset,{y:windowDimensions.height});}}';
    var3.code = var6;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 'function MediaPlaybackPanelUITsx3(){const{mode,wrapperDimensions,pipAvoidanceSpecs,wrapperOffset,windowDimensions,safeArea,pipState}=this.__closure;return{mode:mode.get(),wrapperDimensions:wrapperDimensions.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),wrapperOffset:wrapperOffset.get(),windowDimensions:windowDimensions,safeArea:safeArea,pipState:pipState.get()};}';
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = 'function MediaPlaybackPanelUITsx4(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,getClampedPIPPosition,safeArea,disableHorizontalSafeAreas,wrapperOpacity,animateWrapperTranslation,wrapperTranslationX,wrapperTranslationY}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,wrapperDimensions:wrapperDimensions,pipAvoidanceSpecs:pipAvoidanceSpecs,wrapperOffset:wrapperOffset,windowDimensions:windowDimensions,pipState:pipState}=props;let x=0;let y=0;const{gestureActive:gestureActive}=wrapperOffset;const{x:pipX,y:pipY}=pipState;switch(mode){case MediaPlaybackPanelModes.PIP:{const clampedPosition=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:120,height:120,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.bottom,topAvoidanceRegion:pipAvoidanceSpecs.top,positionOffset:gestureActive?wrapperOffset:undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});x=clampedPosition.x;y=clampedPosition.y;wrapperOpacity.set(1);break;}case MediaPlaybackPanelModes.DISMISSED:{y=wrapperDimensions.height;wrapperOpacity.set(0);break;}}const previousPIPState=previous===null||previous===void 0?void 0:previous.pipState;const pipPositionChanged=pipX!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.x)||pipY!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.y);const shouldAnimateForPIP=mode===MediaPlaybackPanelModes.PIP&&pipPositionChanged&&!wrapperOffset.gestureActive;animateWrapperTranslation.set(shouldAnimateForPIP||mode!==MediaPlaybackPanelModes.PIP);wrapperTranslationX.set(x);wrapperTranslationY.set(y);}';
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = "function MediaPlaybackPanelUITsx5(){const{withTiming,wrapperOpacity,timingFast,animateWrapperTranslation,withSpring,wrapperTranslationX,MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,wrapperTranslationY,wrapperDimensions,wrapperElevationStyles}=this.__closure;const opacity=withTiming(wrapperOpacity.get(),timingFast,'respect-motion-settings');return{transform:[{translateX:animateWrapperTranslation.get()?withSpring(wrapperTranslationX.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,'animate-always'):wrapperTranslationX.get()},{translateY:animateWrapperTranslation.get()?withSpring(wrapperTranslationY.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,animateWrapperTranslation.get()?'respect-motion-settings':'animate-never'):wrapperTranslationY.get()}],opacity:opacity,width:wrapperDimensions.get().width,height:wrapperDimensions.get().height,...wrapperElevationStyles};}";
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = {};
    var6 = "function MediaPlaybackPanelUITsx6(){const{withSpring,borderRadius,BORDER_RADIUS_PHYSICS,maskElevationStyles}=this.__closure;return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS,'animate-always'),...maskElevationStyles};}";
    var3.code = var6;
    var _closure1_slot18 = var3;
    var3 = {};
    var6 = "function MediaPlaybackPanelUITsx7(){const{windowDimensions}=this.__closure;const{height:height,width:width}=windowDimensions;return{position:'absolute',top:0,left:0,width:width,height:height,overflow:'hidden'};}";
    var3.code = var6;
    var _closure1_slot19 = var3;
    var3 = {};
    var6 = "function MediaPlaybackPanelUITsx8(){const{styles}=this.__closure;const topBorderRadius=0;const top=0;return{flexDirection:'column',backgroundColor:styles.content.backgroundColor,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius,top:top,overflow:'hidden'};}";
    var3.code = var6;
    var _closure1_slot20 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_panel/native/MediaPlaybackPanelUI.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: MediaPlaybackPanelUI, environment: var1
        var1 = _closure1_slot12;
        var3 = undefined;
        var14 = var1.bind(var3)();
        var _closure2_slot0 = var14;
        var15 = _closure1_slot1;
        var16 = _closure1_slot2;
        var1 = 10;
        var1 = var16[var1];
        var1 = var15.bind(var3)(var1);
        var10 = var1.bind(var3)();
        var _closure2_slot1 = var10;
        var5 = _closure1_slot5;
        var1 = 11;
        var4 = var16[var1];
        var4 = var15.bind(var3)(var4);
        var4 = var5.bind(var3)(var4);
        var7 = var4.wrapperDimensions;
        var5 = var4.wrapperOffset;
        var11 = _closure1_slot0;
        var12 = 12;
        var4 = var16[var12];
        var8 = var11.bind(var3)(var4);
        var6 = var8.useAnimatedStyle;
        var4 = function() { // Original name: p, environment: var2
            var2 = _closure2_slot1;
            var1 = var2.height;
            var0 = {
                'position': 'absolute',
                'top': 0,
                'left': 0,
                'width': null,
                'height': null,
                'overflow': 'hidden'
            };
            var2 = var2.width;
            var0.width = var2;
            var0.height = var1;
            return var0;
        };
        var9 = {};
        var9.windowDimensions = var10;
        var4.__closure = var9;
        var9 = 5768037716653.0;
        var4.__workletHash = var9;
        var9 = _closure1_slot19;
        var4.__initData = var9;
        var6 = var6.bind(var8)(var4);
        var4 = function(arg0, arg1) { // Original name: useWrapperStyles, environment: var2
            _fun111846: for (var _fun111846_ip = 0;;) switch (_fun111846_ip) {
                case 0:
                    var14 = arg0;
                    var23 = arg1;
                    var _closure3_slot0 = var14;
                    var _closure3_slot1 = var23;
                    var0 = _closure1_slot12;
                    var12 = undefined;
                    var5 = var0.bind(var12)();
                    var _closure3_slot2 = var5;
                    var15 = _closure1_slot1;
                    var21 = _closure1_slot2;
                    var0 = 9;
                    var0 = var21[var0];
                    var0 = var15.bind(var12)(var0);
                    var18 = var0.bind(var12)();
                    var _closure3_slot3 = var18;
                    var0 = 10;
                    var0 = var21[var0];
                    var0 = var15.bind(var12)(var0);
                    var22 = var0.bind(var12)();
                    var _closure3_slot4 = var22;
                    var4 = _closure1_slot4;
                    var3 = var4.useContext;
                    var0 = 11;
                    var0 = var21[var0];
                    var0 = var15.bind(var12)(var0);
                    var0 = var3.bind(var4)(var0);
                    var4 = var0.mode;
                    var _closure3_slot5 = var4;
                    var11 = var0.pipState;
                    var _closure3_slot6 = var11;
                    var24 = var0.pipAvoidanceSpecs;
                    var _closure3_slot7 = var24;
                    var6 = var0.canShowPIP;
                    var _closure3_slot8 = var6;
                    var20 = _closure1_slot0;
                    var3 = 12;
                    var0 = var21[var3];
                    var9 = var20.bind(var12)(var0);
                    var8 = var9.useAnimatedReaction;
                    var7 = function() { // Original name: u, environment: var1
                        var0 = {};
                        var3 = _closure3_slot5;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var0.mode = var2;
                        var2 = _closure3_slot4;
                        var0.windowDimensions = var2;
                        var2 = _closure3_slot8;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var0.canShowPIP = var1;
                        return var0;
                    };
                    var0 = {};
                    var0.mode = var4;
                    var0.windowDimensions = var22;
                    var0.canShowPIP = var6;
                    var7.__closure = var0;
                    var0 = 4412661953046.0;
                    var7.__workletHash = var0;
                    var0 = _closure1_slot13;
                    var7.__initData = var0;
                    var6 = function(arg0, arg1) { // Original name: p, environment: var1
                        _fun111848: for (var _fun111848_ip = 0;;) switch (_fun111848_ip) {
                            case 0:
                                var2 = arg0;
                                var6 = arg1;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 13;
                                var3 = var3[var0];
                                var0 = undefined;
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.cheapWorkletShallowEqual;
                                var3 = null;
                                var7 = var3 != var6;
                                var3 = undefined;
                                if (!var7) {
                                    _fun111848_ip = 51;
                                    continue _fun111848
                                }
                            case 48:
                                var3 = var6;
                            case 51:
                                var3 = var4.bind(var5)(var2, var3);
                                if (var3) {
                                    _fun111848_ip = 239;
                                    continue _fun111848
                                }
                            case 63:
                                var4 = var2.mode;
                                var6 = var2.windowDimensions;
                                var2 = var2.canShowPIP;
                                var3 = _closure1_slot8;
                                var3 = var3.PIP;
                                if (!(var4 !== var3)) {
                                    _fun111848_ip = 157;
                                    continue _fun111848
                                }
                            case 94:
                                var3 = _closure1_slot8;
                                var3 = var3.DISMISSED;
                                if (!(var4 === var3)) {
                                    _fun111848_ip = 239;
                                    continue _fun111848
                                }
                            case 111:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 14;
                                var3 = var5[var3];
                                var5 = var4.bind(var0)(var3);
                                var4 = _closure3_slot1;
                                var3 = {};
                                var6 = var6.height;
                                var3.y = var6;
                                var3 = var5.bind(var0)(var4, var3);
                                _fun111848_ip = 239;
                                continue _fun111848;
                            case 157:
                                if (var2) {
                                    _fun111848_ip = 172;
                                    continue _fun111848
                                }
                            case 160:
                                var2 = {
                                    'width': 0,
                                    'height': 0
                                };
                                _fun111848_ip = 186;
                                continue _fun111848;
                            case 172:
                                var2 = {
                                    'width': 120,
                                    'height': 120
                                };
                            case 186:
                                var5 = var2.width;
                                var4 = var2.height;
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 14;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = _closure3_slot0;
                                var1 = {};
                                var1.width = var5;
                                var1.height = var4;
                                var1 = var3.bind(var0)(var2, var1);
                            case 239:
                                return var0;
                        }
                    };
                    var10 = {};
                    var19 = 13;
                    var0 = var21[var19];
                    var0 = var20.bind(var12)(var0);
                    var0 = var0.cheapWorkletShallowEqual;
                    var10.cheapWorkletShallowEqual = var0;
                    var0 = _closure1_slot8;
                    var10.MediaPlaybackPanelModes = var0;
                    var13 = 14;
                    var13 = var21[var13];
                    var13 = var15.bind(var12)(var13);
                    var10.updateSharedValueIfChanged = var13;
                    var10.wrapperDimensions = var14;
                    var10.wrapperOffset = var23;
                    var6.__closure = var10;
                    var10 = 8412437178561.0;
                    var6.__workletHash = var10;
                    var10 = _closure1_slot14;
                    var6.__initData = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var6 = var21[var3];
                    var7 = var20.bind(var12)(var6);
                    var6 = var7.useSharedValue;
                    var8 = 0;
                    var16 = var6.bind(var7)(var8);
                    var _closure3_slot9 = var16;
                    var6 = var21[var3];
                    var7 = var20.bind(var12)(var6);
                    var6 = var7.useSharedValue;
                    var15 = var6.bind(var7)(var8);
                    var _closure3_slot10 = var15;
                    var6 = var21[var3];
                    var7 = var20.bind(var12)(var6);
                    var6 = var7.useSharedValue;
                    var17 = var6.bind(var7)(var8);
                    var _closure3_slot11 = var17;
                    var6 = var21[var3];
                    var8 = var20.bind(var12)(var6);
                    var7 = var8.useSharedValue;
                    var6 = false;
                    var10 = var7.bind(var8)(var6);
                    var _closure3_slot12 = var10;
                    var7 = _closure1_slot6;
                    var6 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.shouldDisableSafeAreas;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var13 = var7.bind(var12)(var6);
                    var _closure3_slot13 = var13;
                    var6 = var21[var3];
                    var9 = var20.bind(var12)(var6);
                    var8 = var9.useAnimatedReaction;
                    var7 = function() { // Original name: R, environment: var1
                        var0 = {};
                        var3 = _closure3_slot5;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var0.mode = var2;
                        var3 = _closure3_slot0;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var0.wrapperDimensions = var2;
                        var3 = _closure3_slot7;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var0.pipAvoidanceSpecs = var2;
                        var3 = _closure3_slot1;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var0.wrapperOffset = var2;
                        var2 = _closure3_slot4;
                        var0.windowDimensions = var2;
                        var2 = _closure3_slot3;
                        var0.safeArea = var2;
                        var2 = _closure3_slot6;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var0.pipState = var1;
                        return var0;
                    };
                    var6 = {};
                    var6.mode = var4;
                    var6.wrapperDimensions = var14;
                    var6.pipAvoidanceSpecs = var24;
                    var6.wrapperOffset = var23;
                    var6.windowDimensions = var22;
                    var6.safeArea = var18;
                    var6.pipState = var11;
                    var7.__closure = var6;
                    var6 = 4950432193502.0;
                    var7.__workletHash = var6;
                    var6 = _closure1_slot15;
                    var7.__initData = var6;
                    var6 = function(arg0, arg1) { // Original name: C, environment: var1
                        _fun111851: for (var _fun111851_ip = 0;;) switch (_fun111851_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = arg1;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var6 = var4.bind(var0)(var1);
                                var5 = var6.cheapWorkletShallowEqual;
                                var4 = null;
                                var8 = var4 != var2;
                                var1 = undefined;
                                if (!var8) {
                                    _fun111851_ip = 51;
                                    continue _fun111851
                                }
                            case 48:
                                var1 = var2;
                            case 51:
                                var1 = var5.bind(var6)(var3, var1);
                                if (var1) {
                                    _fun111851_ip = 468;
                                    continue _fun111851
                                }
                            case 63:
                                var8 = var3.mode;
                                var9 = var3.wrapperDimensions;
                                var14 = var3.pipAvoidanceSpecs;
                                var1 = var3.wrapperOffset;
                                var12 = var3.windowDimensions;
                                var3 = var3.pipState;
                                var15 = var1.gestureActive;
                                var10 = var3.x;
                                var6 = var3.y;
                                var3 = _closure1_slot8;
                                var3 = var3.PIP;
                                if (!(var3 !== var8)) {
                                    _fun111851_ip = 180;
                                    continue _fun111851
                                }
                            case 128:
                                var3 = _closure1_slot8;
                                var13 = var3.DISMISSED;
                                var11 = 0;
                                var5 = 0;
                                var3 = 0;
                                if (!(var13 === var8)) {
                                    _fun111851_ip = 320;
                                    continue _fun111851
                                }
                            case 151:
                                var3 = var9.height;
                                var16 = _closure3_slot11;
                                var13 = var16.set;
                                var13 = var13.bind(var16)(var11);
                                var5 = 0;
                                _fun111851_ip = 320;
                                continue _fun111851;
                            case 180:
                                var11 = _closure1_slot0;
                                var13 = _closure1_slot2;
                                var9 = 15;
                                var9 = var13[var9];
                                var13 = var11.bind(var0)(var9);
                                var11 = var13.getClampedPIPPosition;
                                var9 = {};
                                var9.pipX = var10;
                                var9.pipY = var6;
                                var16 = 120;
                                var9.width = var16;
                                var9.height = var16;
                                var9.windowDimensions = var12;
                                var16 = _closure3_slot3;
                                var9.safeArea = var16;
                                var16 = var14.bottom;
                                var9.bottomAvoidanceRegion = var16;
                                var14 = var14.top;
                                var9.topAvoidanceRegion = var14;
                                var14 = undefined;
                                if (!var15) {
                                    _fun111851_ip = 274;
                                    continue _fun111851
                                }
                            case 271:
                                var14 = var1;
                            case 274:
                                var9.positionOffset = var14;
                                var14 = _closure3_slot13;
                                var9.disableHorizontalSafeAreas = var14;
                                var9 = var11.bind(var13)(var9);
                                var5 = var9.x;
                                var3 = var9.y;
                                var14 = _closure3_slot11;
                                var13 = var14.set;
                                var12 = 1;
                                var12 = var13.bind(var14)(var12);
                            case 320:
                                var11 = var4 == var2;
                                var9 = undefined;
                                if (var11) {
                                    _fun111851_ip = 335;
                                    continue _fun111851
                                }
                            case 329:
                                var9 = var2.pipState;
                            case 335:
                                var11 = var4 == var9;
                                var2 = undefined;
                                if (var11) {
                                    _fun111851_ip = 349;
                                    continue _fun111851
                                }
                            case 344:
                                var2 = var9.x;
                            case 349:
                                var2 = var10 !== var2;
                                if (var2) {
                                    _fun111851_ip = 374;
                                    continue _fun111851
                                }
                            case 356:
                                var10 = var4 == var9;
                                var4 = undefined;
                                if (var10) {
                                    _fun111851_ip = 370;
                                    continue _fun111851
                                }
                            case 365:
                                var4 = var9.y;
                            case 370:
                                var2 = var6 !== var4;
                            case 374:
                                var4 = _closure1_slot8;
                                var4 = var4.PIP;
                                var6 = var8 === var4;
                                if (!var6) {
                                    _fun111851_ip = 394;
                                    continue _fun111851
                                }
                            case 391:
                                var6 = var2;
                            case 394:
                                if (!var6) {
                                    _fun111851_ip = 406;
                                    continue _fun111851
                                }
                            case 397:
                                var1 = var1.gestureActive;
                                var6 = !var1;
                            case 406:
                                var4 = _closure3_slot12;
                                var2 = var4.set;
                                if (var6) {
                                    _fun111851_ip = 435;
                                    continue _fun111851
                                }
                            case 421:
                                var7 = _closure1_slot8;
                                var7 = var7.PIP;
                                var6 = var8 !== var7;
                            case 435:
                                var2 = var2.bind(var4)(var6);
                                var4 = _closure3_slot9;
                                var2 = var4.set;
                                var2 = var2.bind(var4)(var5);
                                var2 = _closure3_slot10;
                                var1 = var2.set;
                                var1 = var1.bind(var2)(var3);
                            case 468:
                                return var0;
                        }
                    };
                    var11 = {};
                    var19 = var21[var19];
                    var19 = var20.bind(var12)(var19);
                    var19 = var19.cheapWorkletShallowEqual;
                    var11.cheapWorkletShallowEqual = var19;
                    var11.MediaPlaybackPanelModes = var0;
                    var19 = 15;
                    var19 = var21[var19];
                    var19 = var20.bind(var12)(var19);
                    var19 = var19.getClampedPIPPosition;
                    var11.getClampedPIPPosition = var19;
                    var11.safeArea = var18;
                    var11.disableHorizontalSafeAreas = var13;
                    var11.wrapperOpacity = var17;
                    var11.animateWrapperTranslation = var10;
                    var11.wrapperTranslationX = var16;
                    var11.wrapperTranslationY = var15;
                    var6.__closure = var11;
                    var11 = 10793489581273.0;
                    var6.__workletHash = var11;
                    var11 = _closure1_slot16;
                    var6.__initData = var11;
                    var6 = var8.bind(var9)(var7, var6);
                    var6 = var4.get;
                    var6 = var6.bind(var4)();
                    var0 = var0.PIP;
                    if (!(var6 === var0)) {
                        _fun111846_ip = 691;
                        continue _fun111846
                    }
                case 684:
                    var0 = _closure1_slot9;
                    if (var0) {
                        _fun111846_ip = 699;
                        continue _fun111846
                    }
                case 691:
                    var9 = var5.maskEmptyElevation;
                    _fun111846_ip = 705;
                    continue _fun111846;
                case 699:
                    var9 = var5.maskElevation;
                case 705:
                    var _closure3_slot14 = var9;
                    var0 = var4.get;
                    var4 = var0.bind(var4)();
                    var0 = _closure1_slot8;
                    var0 = var0.PIP;
                    if (!(var4 === var0)) {
                        _fun111846_ip = 747;
                        continue _fun111846
                    }
                case 732:
                    var0 = _closure1_slot9;
                    if (var0) {
                        _fun111846_ip = 747;
                        continue _fun111846
                    }
                case 739:
                    var8 = var5.maskElevation;
                    _fun111846_ip = 753;
                    continue _fun111846;
                case 747:
                    var8 = var5.maskEmptyElevation;
                case 753:
                    var _closure3_slot15 = var8;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var0 = var13[var3];
                    var6 = var11.bind(var12)(var0);
                    var4 = var6.useAnimatedStyle;
                    var0 = function() { // Original name: L, environment: var1
                        _fun111852: for (var _fun111852_ip = 0;;) switch (_fun111852_ip) {
                            case 0:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var0 = 16;
                                var0 = var7[var0];
                                var9 = undefined;
                                var4 = var5.bind(var9)(var0);
                                var3 = var4.withTiming;
                                var2 = _closure3_slot11;
                                var0 = var2.get;
                                var2 = var0.bind(var2)();
                                var0 = 17;
                                var0 = var7[var0];
                                var0 = var5.bind(var9)(var0);
                                var0 = var0.timingFast;
                                var11 = 'respect-motion-settings';
                                var2 = var3.bind(var4)(var2, var0, var11);
                                var0 = {};
                                var4 = {};
                                var5 = _closure3_slot12;
                                var3 = var5.get;
                                var3 = var3.bind(var5)();
                                if (var3) {
                                    _fun111852_ip = 112;
                                    continue _fun111852
                                }
                            case 97:
                                var5 = _closure3_slot9;
                                var3 = var5.get;
                                var3 = var3.bind(var5)();
                                _fun111852_ip = 167;
                                continue _fun111852;
                            case 112:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var5 = 18;
                                var5 = var8[var5];
                                var12 = var7.bind(var9)(var5);
                                var10 = var12.withSpring;
                                var7 = _closure3_slot9;
                                var5 = var7.get;
                                var8 = var5.bind(var7)();
                                var7 = _closure1_slot7;
                                var5 = 'animate-always';
                                var3 = var10.bind(var12)(var8, var7, var5);
                            case 167:
                                var4.translateX = var3;
                                var3 = new Array(2);
                                var3[0] = var4;
                                var4 = {};
                                var7 = _closure3_slot12;
                                var5 = var7.get;
                                var5 = var5.bind(var7)();
                                if (var5) {
                                    _fun111852_ip = 213;
                                    continue _fun111852
                                }
                            case 198:
                                var7 = _closure3_slot10;
                                var5 = var7.get;
                                var5 = var5.bind(var7)();
                                _fun111852_ip = 287;
                                continue _fun111852;
                            case 213:
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var7 = 18;
                                var7 = var10[var7];
                                var10 = var8.bind(var9)(var7);
                                var9 = var10.withSpring;
                                var8 = _closure3_slot10;
                                var7 = var8.get;
                                var8 = var7.bind(var8)();
                                var7 = _closure1_slot7;
                                var12 = _closure3_slot12;
                                var6 = var12.get;
                                var12 = var6.bind(var12)();
                                var6 = 'animate-never';
                                if (!var12) {
                                    _fun111852_ip = 280;
                                    continue _fun111852
                                }
                            case 277:
                                var6 = var11;
                            case 280:
                                var5 = var9.bind(var10)(var8, var7, var6);
                            case 287:
                                var4.translateY = var5;
                                var3[1] = var4;
                                var0.transform = var3;
                                var0.opacity = var2;
                                var3 = _closure3_slot0;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var2.width;
                                var0.width = var2;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var2.height;
                                var0.height = var2;
                                var14 = _closure3_slot14;
                                var15 = var0;
                                var1 = copyDataProperties(var15, var14);
                                return var0;
                        }
                    };
                    var7 = {};
                    var18 = 16;
                    var18 = var13[var18];
                    var18 = var11.bind(var12)(var18);
                    var18 = var18.withTiming;
                    var7.withTiming = var18;
                    var7.wrapperOpacity = var17;
                    var17 = 17;
                    var17 = var13[var17];
                    var17 = var11.bind(var12)(var17);
                    var17 = var17.timingFast;
                    var7.timingFast = var17;
                    var7.animateWrapperTranslation = var10;
                    var10 = 18;
                    var17 = var13[var10];
                    var17 = var11.bind(var12)(var17);
                    var17 = var17.withSpring;
                    var7.withSpring = var17;
                    var7.wrapperTranslationX = var16;
                    var16 = _closure1_slot7;
                    var7.MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS = var16;
                    var7.wrapperTranslationY = var15;
                    var7.wrapperDimensions = var14;
                    var7.wrapperElevationStyles = var9;
                    var0.__closure = var7;
                    var7 = 11049335639852.0;
                    var0.__workletHash = var7;
                    var7 = _closure1_slot17;
                    var0.__initData = var7;
                    var0 = var4.bind(var6)(var0);
                    var _closure3_slot16 = var0;
                    var6 = _closure1_slot1;
                    var4 = 8;
                    var4 = var13[var4];
                    var4 = var6.bind(var12)(var4);
                    var4 = var4.radii;
                    var9 = var4.xl;
                    var _closure3_slot17 = var9;
                    var3 = var13[var3];
                    var6 = var11.bind(var12)(var3);
                    var4 = var6.useAnimatedStyle;
                    var3 = function() { // Original name: B, environment: var1
                        var0 = {};
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 18;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.withSpring;
                        var4 = _closure3_slot17;
                        var3 = _closure1_slot10;
                        var2 = 'animate-always';
                        var2 = var5.bind(var6)(var4, var3, var2);
                        var0.borderRadius = var2;
                        var8 = _closure3_slot15;
                        var9 = var0;
                        var1 = copyDataProperties(var9, var8);
                        return var0;
                    };
                    var7 = {};
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.withSpring;
                    var7.withSpring = var10;
                    var7.borderRadius = var9;
                    var9 = _closure1_slot10;
                    var7.BORDER_RADIUS_PHYSICS = var9;
                    var7.maskElevationStyles = var8;
                    var3.__closure = var7;
                    var7 = 7035830192327.0;
                    var3.__workletHash = var7;
                    var7 = _closure1_slot18;
                    var3.__initData = var7;
                    var6 = var4.bind(var6)(var3);
                    var _closure3_slot18 = var6;
                    var4 = _closure1_slot4;
                    var3 = var4.useMemo;
                    var2 = new Array(3);
                    var2[0] = var0;
                    var0 = var5.wrapper;
                    var2[1] = var0;
                    var0 = var5.wrapperAnimationPresets;
                    var2[2] = var0;
                    var0 = function() { // Environment: var1
                        var2 = _closure3_slot16;
                        var0 = new Array(3);
                        var0[0] = var2;
                        var1 = _closure3_slot2;
                        var2 = var1.wrapper;
                        var0[1] = var2;
                        var1 = var1.wrapperAnimationPresets;
                        var0[2] = var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var0, var2);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var3 = var4.useMemo;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var5 = var5.mask;
                    var2[1] = var5;
                    var1 = function() { // Environment: var1
                        var2 = _closure3_slot18;
                        var0 = new Array(2);
                        var0[0] = var2;
                        var1 = _closure3_slot2;
                        var1 = var1.mask;
                        var0[1] = var1;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    var0[1] = var1;
                    return var0;
            }
        };
        var7 = var4.bind(var3)(var7, var5);
        var5 = _closure1_slot3;
        var4 = 2;
        var5 = var5.bind(var3)(var7, var4);
        var4 = 0;
        var8 = var5[var4];
        var4 = 1;
        var10 = var5[var4];
        var4 = var16[var12];
        var5 = var11.bind(var3)(var4);
        var4 = var5.useAnimatedStyle;
        var2 = function() { // Original name: b, environment: var2
            var0 = {
                'flexDirection': 'column',
                'backgroundColor': null,
                'borderTopStartRadius': 0,
                'borderTopEndRadius': 0,
                'top': 0,
                'overflow': 'hidden'
            };
            var1 = _closure2_slot0;
            var1 = var1.content;
            var1 = var1.backgroundColor;
            var0.backgroundColor = var1;
            return var0;
        };
        var7 = {};
        var7.styles = var14;
        var2.__closure = var7;
        var7 = 8557652955267.0;
        var2.__workletHash = var7;
        var7 = _closure1_slot20;
        var2.__initData = var7;
        var17 = var4.bind(var5)(var2);
        var4 = _closure1_slot4;
        var2 = var4.useContext;
        var1 = var16[var1];
        var1 = var15.bind(var3)(var1);
        var1 = var2.bind(var4)(var1);
        var4 = var1.wrapperOffset;
        var5 = var1.pipState;
        var7 = 19;
        var1 = var16[var7];
        var2 = var15.bind(var3)(var1);
        var1 = {};
        var9 = true;
        var1.panGestureEnabled = var9;
        var7 = var16[var7];
        var7 = var11.bind(var3)(var7);
        var7 = var7.MorphablePanelModes;
        var7 = var7.PIP;
        var1.mode = var7;
        var1.pipState = var5;
        var1.wrapperOffset = var4;
        var13 = var2.bind(var3)(var1);
        var2 = _closure1_slot11;
        var0 = 20;
        var0 = var16[var0];
        var0 = var11.bind(var3)(var0);
        var1 = var0.LayerScope;
        var0 = {};
        var4 = var16[var12];
        var4 = var15.bind(var3)(var4);
        var5 = var4.View;
        var4 = {};
        var4.style = var6;
        var6 = 'box-none';
        var4.pointerEvents = var6;
        var6 = var16[var12];
        var6 = var15.bind(var3)(var6);
        var7 = var6.View;
        var6 = {};
        var6.style = var8;
        var8 = var16[var12];
        var8 = var15.bind(var3)(var8);
        var9 = var8.View;
        var8 = {};
        var8.style = var10;
        var10 = 21;
        var10 = var16[var10];
        var10 = var11.bind(var3)(var10);
        var11 = var10.GestureDetector;
        var10 = {};
        var10.gesture = var13;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var13 = var12.View;
        var12 = {};
        var18 = var14.content;
        var14 = new Array(2);
        var14[0] = var18;
        var14[1] = var17;
        var12.style = var14;
        var14 = 22;
        var14 = var16[var14];
        var15 = var15.bind(var3)(var14);
        var14 = {};
        var14 = var2.bind(var3)(var15, var14);
        var12.children = var14;
        var12 = var2.bind(var3)(var13, var12);
        var10.children = var12;
        var10 = var2.bind(var3)(var11, var10);
        var8.children = var10;
        var8 = var2.bind(var3)(var9, var8);
        var6.children = var8;
        var6 = var2.bind(var3)(var7, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 8038, 12804, 11772, 11771, 33, 1297, 671, 1568, 1464, 14334, 3679, 5264, 5263, 14166, 4056, 4844, 4040, 14168, 5168, 4924, 14336, 2]);