// modules/voice_panel/native/header/VoicePanelHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var8 = true;
    var3.value = var8;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var11 = 0;
    var3 = var5[var11];
    var0 = undefined;
    var3 = var15.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var14 = var3.StyleSheet;
    var _closure1_slot5 = var14;
    var3 = var3.Platform;
    var3 = 3;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.MODE_CHANGE_PHYSICS;
    var _closure1_slot14 = var7;
    var9 = var3.UI_SHOW_HIDE_PHYSICS;
    var _closure1_slot15 = var9;
    var9 = var3.VoicePanelModes;
    var _closure1_slot16 = var9;
    var3 = var3.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
    var _closure1_slot17 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var16 = var3.EDGE_GUTTER;
    var _closure1_slot18 = var16;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelControlsModes;
    var _closure1_slot19 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot20 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.jsx;
    var _closure1_slot21 = var9;
    var3 = var3.jsxs;
    var _closure1_slot22 = var3;
    var3 = {};
    var9 = 300;
    var3.duration = var9;
    var _closure1_slot23 = var3;
    var3 = 16;
    var3 = var5[var3];
    var12 = var4.bind(var0)(var3);
    var9 = var12.createStyles;
    var3 = {};
    var13 = {
        'zIndex': 1,
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'width': '100%',
        'paddingBottom': null,
        'overflow': 'hidden'
    };
    var13.paddingBottom = var16;
    var3.headerWrapper = var13;
    var13 = {};
    var19 = var14.absoluteFillObject;
    var20 = var13;
    var16 = copyDataProperties(var20, var19);
    var17 = 0.7;
    var16 = 'opacity';
    var13[var16] = var17;
    var3.blurStyles = var13;
    var16 = 'relative';
    var13 = {
        'position': 'relative',
        'justifyContent': 'flex-start',
        'flexDirection': 'row',
        'alignItems': 'center',
        'flexShrink': 1,
        'gap': 12
    };
    var3.leftWrapper = var13;
    var13 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 12,
        'paddingLeft': 12
    };
    var3.rightWrapper = var13;
    var13 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.headerOuter = var13;
    var13 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'flexShrink': 1,
        'flexGrow': 1
    };
    var3.headerInner = var13;
    var13 = {};
    var13.position = var16;
    var3.headerContentWrapper = var13;
    var13 = {};
    var16 = var14.hairlineWidth;
    var13.height = var16;
    var16 = 0.2;
    var13.opacity = var16;
    var3.stroke = var13;
    var13 = {};
    var16 = var14.hairlineWidth;
    var13.height = var16;
    var16 = 0.8;
    var13.opacity = var16;
    var3.strokeAlt = var13;
    var13 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'bottom': 0
    };
    var14 = var14.hairlineWidth;
    var13.height = var14;
    var3.strokeContainer = var13;
    var13 = {
        'width': 12,
        'height': 12,
        'borderRadius': null,
        'padding': 2
    };
    var14 = 17;
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var13.borderRadius = var16;
    var3.focusedSpeakingDotWrapper = var13;
    var13 = {
        'width': 8,
        'height': 8
    };
    var14 = var5[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var13.borderRadius = var14;
    var3.focusedSpeakingDot = var13;
    var13 = {};
    var14 = -8;
    var13.marginLeft = var14;
    var3.shieldIconMargin = var13;
    var3 = var9.bind(var12)(var3);
    var _closure1_slot24 = var3;
    var3 = {};
    var3.DOWN = var11;
    var9 = 'DOWN';
    var3[var11] = var9;
    var3.LEFT = var10;
    var9 = 'LEFT';
    var3[var10] = var9;
    var _closure1_slot25 = var3;
    var3 = {};
    var20 = var3;
    var19 = var7;
    var7 = copyDataProperties(var20, var19);
    var7 = 'overshootClamping';
    var3[var7] = var8;
    var _closure1_slot26 = var3;
    var3 = {};
    var7 = 'function VoicePanelHeaderTsx1(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}';
    var3.code = var7;
    var _closure1_slot27 = var3;
    var3 = {};
    var7 = 'function VoicePanelHeaderTsx2(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}';
    var3.code = var7;
    var _closure1_slot28 = var3;
    var3 = {};
    var7 = 'function VoicePanelHeaderTsx3(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}';
    var3.code = var7;
    var _closure1_slot29 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        var1 = arg0;
        var13 = var1.isHeaderHidden;
        var _closure2_slot0 = var13;
        var8 = var1.scrollPosition;
        var _closure2_slot1 = var8;
        var10 = var1.focused;
        var _closure2_slot2 = var10;
        var1 = _closure1_slot24;
        var3 = undefined;
        var11 = var1.bind(var3)();
        var9 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 18;
        var2 = var12[var1];
        var6 = var9.bind(var3)(var2);
        var5 = var6.useDerivedValue;
        var2 = function() {
            _fun110907: for (var _fun110907_ip = 0;;) switch (_fun110907_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var0 = !var0;
                    if (!var0) {
                        _fun110907_ip = 66;
                        continue _fun110907
                    }
                case 22:
                    var3 = _closure2_slot2;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = null;
                    var1 = var1 != var3;
                    if (var1) {
                        _fun110907_ip = 63;
                        continue _fun110907
                    }
                case 44:
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    var1 = var3 > var2;
                case 63:
                    var0 = var1;
                case 66:
                    return var0;
            }
        };
        var7 = {};
        var7.isHeaderHidden = var13;
        var7.focused = var10;
        var7.scrollPosition = var8;
        var2.__closure = var7;
        var7 = 8127245112238.0;
        var2.__workletHash = var7;
        var7 = _closure1_slot27;
        var2.__initData = var7;
        var7 = var5.bind(var6)(var2);
        var _closure2_slot3 = var7;
        var2 = var12[var1];
        var6 = var9.bind(var3)(var2);
        var5 = var6.useAnimatedProps;
        var2 = function() {
            _fun110908: for (var _fun110908_ip = 0;;) switch (_fun110908_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.withSpring;
                    var4 = _closure2_slot3;
                    var1 = var4.get;
                    var4 = var1.bind(var4)();
                    var1 = 0;
                    if (!var4) {
                        _fun110908_ip = 63;
                        continue _fun110908
                    }
                case 53:
                    var1 = 0.3;
                case 63:
                    var1 = var2.bind(var3)(var1);
                    var0.blurAmount = var1;
                    return var0;
            }
        };
        var10 = {};
        var8 = 19;
        var13 = var12[var8];
        var13 = var9.bind(var3)(var13);
        var13 = var13.withSpring;
        var10.withSpring = var13;
        var10.showHeaderBlur = var7;
        var2.__closure = var10;
        var10 = 10074943135400.0;
        var2.__workletHash = var10;
        var10 = _closure1_slot28;
        var2.__initData = var10;
        var6 = var5.bind(var6)(var2);
        var1 = var12[var1];
        var2 = var9.bind(var3)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            _fun110909: for (var _fun110909_ip = 0;;) switch (_fun110909_ip) {
                case 0:
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 19;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.withSpring;
                    var5 = _closure2_slot3;
                    var2 = var5.get;
                    var5 = var2.bind(var5)();
                    var2 = 0;
                    if (!var5) {
                        _fun110909_ip = 56;
                        continue _fun110909
                    }
                case 53:
                    var2 = 1;
                case 56:
                    var1 = _closure1_slot26;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.opacity = var1;
                    return var0;
            }
        };
        var5 = {};
        var8 = var12[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.withSpring;
        var5.withSpring = var8;
        var5.showHeaderBlur = var7;
        var7 = _closure1_slot26;
        var5.HEADER_CHANGE_PHYSICS = var7;
        var0.__closure = var5;
        var5 = 2825977044105.0;
        var0.__workletHash = var5;
        var5 = _closure1_slot29;
        var0.__initData = var5;
        var7 = var1.bind(var2)(var0);
        var2 = _closure1_slot22;
        var9 = _closure1_slot1;
        var0 = 20;
        var0 = var12[var0];
        var1 = var9.bind(var3)(var0);
        var0 = {};
        var5 = _closure1_slot5;
        var8 = var5.absoluteFill;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var7;
        var0.style = var5;
        var5 = 'none';
        var0.pointerEvents = var5;
        var10 = _closure1_slot21;
        var4 = 21;
        var4 = var12[var4];
        var5 = var9.bind(var3)(var4);
        var4 = {
            'style': null,
            'blurStyle': 'ultra-thin',
            'blurTheme': 'dark'
        };
        var7 = var11.blurStyles;
        var4.style = var7;
        var4.animatedProps = var6;
        var5 = var10.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var8 = 22;
        var5 = var12[var8];
        var6 = var9.bind(var3)(var5);
        var5 = {};
        var7 = var11.strokeContainer;
        var5.style = var7;
        var7 = var12[var8];
        var13 = var9.bind(var3)(var7);
        var7 = {};
        var14 = var11.stroke;
        var7.style = var14;
        var13 = var10.bind(var3)(var13, var7);
        var7 = new Array(2);
        var7[0] = var13;
        var8 = var12[var8];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var11 = var11.strokeAlt;
        var8.style = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var5.children = var7;
        var5 = var2.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot30 = var3;
    var3 = {};
    var7 = 'function VoicePanelHeaderTsx4(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}';
    var3.code = var7;
    var _closure1_slot31 = var3;
    var3 = {};
    var7 = 'function VoicePanelHeaderTsx5(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}';
    var3.code = var7;
    var _closure1_slot32 = var3;
    var7 = var6.memo;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot8;
        var2 = var3.getId;
        var6 = var2.bind(var3)();
        var _closure2_slot0 = var6;
        var10 = _closure1_slot4;
        var4 = var10.useContext;
        var5 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 23;
        var2 = var7[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var2 = var4.bind(var10)(var2);
        var14 = var2.focused;
        var _closure2_slot1 = var14;
        var13 = var2.controlsSpecs;
        var _closure2_slot2 = var13;
        var4 = _closure1_slot0;
        var2 = 18;
        var8 = var7[var2];
        var11 = var4.bind(var3)(var8);
        var9 = var11.useSharedValue;
        var12 = _closure1_slot12;
        var8 = var12.isSpeaking;
        var8 = var8.bind(var12)(var6);
        var12 = var9.bind(var11)(var8);
        var _closure2_slot3 = var12;
        var9 = var10.useLayoutEffect;
        var8 = new Array(2);
        var8[0] = var6;
        var8[1] = var12;
        var6 = function() { // Environment: var1
            var3 = function() {
                var2 = _closure2_slot3;
                var1 = var2.set;
                var4 = _closure1_slot12;
                var3 = var4.isSpeaking;
                var0 = _closure2_slot0;
                var0 = var3.bind(var4)(var0);
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var _closure3_slot0 = var3;
            var1 = undefined;
            var1 = var3.bind(var1)();
            var2 = _closure1_slot12;
            var1 = var2.addReactChangeListener;
            var1 = var1.bind(var2)(var3);
            var0 = function() { // Environment: var0
                var2 = _closure1_slot12;
                var1 = var2.removeReactChangeListener;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var6 = var9.bind(var10)(var6, var8);
        var6 = _closure1_slot24;
        var6 = var6.bind(var3)();
        var8 = var7[var2];
        var10 = var4.bind(var3)(var8);
        var9 = var10.useDerivedValue;
        var8 = function() {
            _fun110914: for (var _fun110914_ip = 0;;) switch (_fun110914_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = var2.get;
                    var2 = var0.bind(var2)();
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun110914_ip = 60;
                        continue _fun110914
                    }
                case 25:
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = var2.mode;
                    var2 = _closure1_slot19;
                    var2 = var2.HIDDEN;
                    var0 = var3 !== var2;
                case 60:
                    if (!var0) {
                        _fun110914_ip = 76;
                        continue _fun110914
                    }
                case 63:
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var0 = var1.bind(var2)();
                case 76:
                    return var0;
            }
        };
        var11 = {};
        var11.focused = var14;
        var11.controlsSpecs = var13;
        var13 = _closure1_slot19;
        var11.VoicePanelControlsModes = var13;
        var11.speaking = var12;
        var8.__closure = var11;
        var11 = 5466722752449.0;
        var8.__workletHash = var11;
        var11 = _closure1_slot31;
        var8.__initData = var11;
        var9 = var9.bind(var10)(var8);
        var _closure2_slot4 = var9;
        var2 = var7[var2];
        var4 = var4.bind(var3)(var2);
        var2 = var4.useAnimatedStyle;
        var1 = function() {
            _fun110915: for (var _fun110915_ip = 0;;) switch (_fun110915_ip) {
                case 0:
                    var0 = {};
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 0;
                    if (!var2) {
                        _fun110915_ip = 26;
                        continue _fun110915
                    }
                case 23:
                    var1 = 1;
                case 26:
                    var0.opacity = var1;
                    return var0;
            }
        };
        var8 = {};
        var8.showSpeakingIndicator = var9;
        var1.__closure = var8;
        var8 = 16177124708898.0;
        var1.__workletHash = var8;
        var8 = _closure1_slot32;
        var1.__initData = var8;
        var9 = var2.bind(var4)(var1);
        var2 = _closure1_slot21;
        var4 = 20;
        var0 = var7[var4];
        var1 = var5.bind(var3)(var0);
        var0 = {};
        var10 = var6.focusedSpeakingDotWrapper;
        var8 = new Array(2);
        var8[0] = var10;
        var8[1] = var9;
        var0.style = var8;
        var8 = 'none';
        var0.pointerEvents = var8;
        var4 = var7[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var6 = var6.focusedSpeakingDot;
        var4.style = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot33 = var3;
    var3 = {};
    var7 = 'function VoicePanelHeaderTsx6(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}';
    var3.code = var7;
    var _closure1_slot34 = var3;
    var3 = {};
    var7 = 'function VoicePanelHeaderTsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}';
    var3.code = var7;
    var _closure1_slot35 = var3;
    var3 = {};
    var7 = 'function VoicePanelHeaderTsx8(){const{calculateVoicePanelHeaderSpecs,safeArea,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get());if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}';
    var3.code = var7;
    var _closure1_slot36 = var3;
    var3 = {};
    var7 = 'function VoicePanelHeaderTsx9(){const{calculateVoicePanelHeaderSpecs,safeArea,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get());const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs.height-specs.paddingTop+EDGE_GUTTER:specs.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs.paddingTop;return{...specs,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}';
    var3.code = var7;
    var _closure1_slot37 = var3;
    var3 = {};
    var7 = 'function VoicePanelHeaderTsx10(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}';
    var3.code = var7;
    var _closure1_slot38 = var3;
    var3 = {};
    var7 = 'function VoicePanelHeaderTsx11(){const{calculateVoicePanelHeaderSpecs,safeArea,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get());return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}';
    var3.code = var7;
    var _closure1_slot39 = var3;
    var3 = {};
    var7 = "function VoicePanelHeaderTsx12(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}";
    var3.code = var7;
    var _closure1_slot40 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun110916: for (var _fun110916_ip = 0;;) switch (_fun110916_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.wrapperOffset;
                var _closure2_slot0 = var20;
                var22 = var0.gestureState;
                var _closure2_slot1 = var22;
                var16 = var0.layout;
                var3 = undefined;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var0 = _closure1_slot24;
                var23 = var0.bind(var3)();
                var14 = _closure1_slot4;
                var1 = var14.useContext;
                var15 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 23;
                var0 = var4[var0];
                var0 = var15.bind(var3)(var0);
                var0 = var1.bind(var14)(var0);
                var13 = var0.guildId;
                var27 = var0.channelId;
                var _closure2_slot2 = var27;
                var7 = var0.focused;
                var _closure2_slot3 = var7;
                var29 = var0.controlsSpecs;
                var _closure2_slot4 = var29;
                var33 = var0.mode;
                var _closure2_slot5 = var33;
                var26 = var0.safeArea;
                var _closure2_slot6 = var26;
                var24 = var0.connected;
                var _closure2_slot7 = var24;
                var8 = var0.scrollPosition;
                var1 = _closure1_slot0;
                var0 = 24;
                var0 = var4[var0];
                var5 = var1.bind(var3)(var0);
                var0 = var5.useIsScreenReaderEnabled;
                var21 = var0.bind(var5)();
                var _closure2_slot8 = var21;
                var0 = 25;
                var0 = var4[var0];
                var0 = var15.bind(var3)(var0);
                var30 = var0.bind(var3)(var27);
                var6 = 26;
                var0 = var4[var6];
                var11 = var1.bind(var3)(var0);
                var10 = var11.useStateFromStores;
                var0 = _closure1_slot13;
                var9 = new Array(4);
                var9[0] = var0;
                var0 = _closure1_slot11;
                var9[1] = var0;
                var0 = _closure1_slot9;
                var9[2] = var0;
                var0 = _closure1_slot7;
                var9[3] = var0;
                var5 = new Array(1);
                var5[0] = var27;
                var0 = function() { // Environment: var2
                    _fun110917: for (var _fun110917_ip = 0;;) switch (_fun110917_ip) {
                        case 0:
                            var3 = _closure1_slot9;
                            var2 = var3.getChannel;
                            var0 = _closure2_slot2;
                            var8 = var2.bind(var3)(var0);
                            var2 = null;
                            var3 = var2 != var8;
                            var5 = undefined;
                            var0 = undefined;
                            if (!var3) {
                                _fun110917_ip = 78;
                                continue _fun110917
                            }
                        case 37:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 27;
                            var3 = var6[var3];
                            var7 = var4.bind(var5)(var3);
                            var6 = var7.computeChannelName;
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot11;
                            var0 = var6.bind(var7)(var8, var4, var3);
                        case 78:
                            if (!(var2 == var0)) {
                                _fun110917_ip = 137;
                                continue _fun110917
                            }
                        case 82:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 28;
                            var2 = var6[var1];
                            var2 = var4.bind(var5)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.t;
                            var1 = var1.zLZPmk;
                            var0 = var2.bind(var3)(var1);
                        case 137:
                            return var0;
                    }
                };
                var31 = var10.bind(var11)(var9, var0, var5);
                var0 = var14.useState;
                var0 = var0.bind(var14)(var3);
                var12 = _closure1_slot3;
                var10 = 2;
                var0 = var12.bind(var3)(var0, var10);
                var9 = 0;
                var11 = var0[var9];
                var5 = 1;
                var0 = var0[var5];
                var _closure2_slot9 = var0;
                var0 = var14.useState;
                var17 = null;
                var0 = var0.bind(var14)(var17);
                var0 = var12.bind(var3)(var0, var10);
                var10 = var0[var9];
                var0 = var0[var5];
                var _closure2_slot10 = var0;
                var12 = var14.useCallback;
                var5 = new Array(1);
                var5[0] = var27;
                var0 = function(arg0) { // Environment: var2
                    _fun110918: for (var _fun110918_ip = 0;;) switch (_fun110918_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = _closure2_slot10;
                            var7 = _closure2_slot2;
                            var0 = null;
                            var5 = var0 == var2;
                            var3 = null;
                            if (var5) {
                                _fun110918_ip = 61;
                                continue _fun110918
                            }
                        case 25:
                            var6 = _closure1_slot6;
                            var5 = var6.getParticipant;
                            var5 = var5.bind(var6)(var7, var2);
                            var6 = var0 == var5;
                            var0 = null;
                            if (var6) {
                                _fun110918_ip = 58;
                                continue _fun110918
                            }
                        case 53:
                            var0 = var5.type;
                        case 58:
                            var3 = var0;
                        case 61:
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var1 = _closure2_slot9;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var28 = var12.bind(var14)(var0, var5);
                var _closure2_slot11 = var28;
                var0 = 18;
                var5 = var4[var0];
                var18 = var1.bind(var3)(var5);
                var14 = var18.useAnimatedReaction;
                var12 = function() {
                    _fun110919: for (var _fun110919_ip = 0;;) switch (_fun110919_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun110919_ip = 32;
                                continue _fun110919
                            }
                        case 27:
                            var0 = var1.id;
                        case 32:
                            return var0;
                    }
                };
                var5 = {};
                var5.focused = var7;
                var12.__closure = var5;
                var5 = 7943480174143.0;
                var12.__workletHash = var5;
                var5 = _closure1_slot34;
                var12.__initData = var5;
                var5 = function arg0, arg1() {
                    _fun110920: for (var _fun110920_ip = 0;;) switch (_fun110920_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            if (!(var2 !== var0)) {
                                _fun110920_ip = 57;
                                continue _fun110920
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var0);
                            var3 = var4.runOnJS;
                            var0 = _closure2_slot11;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.bind(var1)(var2);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var25 = {};
                var32 = var4[var0];
                var32 = var1.bind(var3)(var32);
                var32 = var32.runOnJS;
                var25.runOnJS = var32;
                var25.handleFocusChange = var28;
                var5.__closure = var25;
                var25 = 13084116412140.0;
                var5.__workletHash = var25;
                var25 = _closure1_slot35;
                var5.__initData = var25;
                var5 = var14.bind(var18)(var12, var5);
                var5 = var4[var0];
                var14 = var1.bind(var3)(var5);
                var12 = var14.useDerivedValue;
                var5 = function() {
                    _fun110921: for (var _fun110921_ip = 0;;) switch (_fun110921_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 29;
                            var0 = var3[var0];
                            var4 = undefined;
                            var2 = var2.bind(var4)(var0);
                            var5 = _closure2_slot6;
                            var0 = var5.get;
                            var0 = var0.bind(var5)();
                            var2 = var2.bind(var4)(var0);
                            var4 = _closure2_slot5;
                            var0 = var4.get;
                            var4 = var0.bind(var4)();
                            var0 = _closure1_slot16;
                            var0 = var0.PIP;
                            if (!(var4 !== var0)) {
                                _fun110921_ip = 180;
                                continue _fun110921
                            }
                        case 73:
                            var4 = _closure2_slot1;
                            var0 = var4.get;
                            var0 = var0.bind(var4)();
                            var0 = var0.active;
                            if (!var0) {
                                _fun110921_ip = 133;
                                continue _fun110921
                            }
                        case 95:
                            var4 = _closure2_slot1;
                            var0 = var4.get;
                            var0 = var0.bind(var4)();
                            var0 = var0.requiresPop;
                            if (var0) {
                                _fun110921_ip = 133;
                                continue _fun110921
                            }
                        case 117:
                            var4 = _closure2_slot7;
                            var0 = var4.get;
                            var0 = var0.bind(var4)();
                            if (var0) {
                                _fun110921_ip = 180;
                                continue _fun110921
                            }
                        case 133:
                            var4 = _closure2_slot5;
                            var0 = var4.get;
                            var6 = var0.bind(var4)();
                            var0 = _closure1_slot16;
                            var5 = var0.DISMISSED;
                            var0 = 0;
                            if (!(var6 === var5)) {
                                _fun110921_ip = 196;
                                continue _fun110921
                            }
                        case 162:
                            var5 = _closure2_slot7;
                            var3 = var5.get;
                            var3 = var3.bind(var5)();
                            var0 = 0;
                            if (!var3) {
                                _fun110921_ip = 196;
                                continue _fun110921
                            }
                        case 180:
                            var2 = var2.height;
                            var1 = _closure1_slot18;
                            var1 = var2 + var1;
                            var0 = -var1;
                        case 196:
                            return var0;
                    }
                };
                var18 = {};
                var28 = 29;
                var25 = var4[var28];
                var25 = var15.bind(var3)(var25);
                var18.calculateVoicePanelHeaderSpecs = var25;
                var18.safeArea = var26;
                var18.mode = var33;
                var25 = _closure1_slot16;
                var18.VoicePanelModes = var25;
                var18.gestureState = var22;
                var18.connected = var24;
                var22 = _closure1_slot18;
                var18.EDGE_GUTTER = var22;
                var5.__closure = var18;
                var18 = 16949501788449.0;
                var5.__workletHash = var18;
                var18 = _closure1_slot36;
                var5.__initData = var18;
                var32 = var12.bind(var14)(var5);
                var _closure2_slot12 = var32;
                var5 = var4[var0];
                var14 = var1.bind(var3)(var5);
                var12 = var14.useAnimatedStyle;
                var5 = function() {
                    _fun110922: for (var _fun110922_ip = 0;;) switch (_fun110922_ip) {
                        case 0:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 29;
                            var0 = var2[var0];
                            var5 = undefined;
                            var1 = var1.bind(var5)(var0);
                            var3 = _closure2_slot6;
                            var0 = var3.get;
                            var0 = var0.bind(var3)();
                            var4 = var1.bind(var5)(var0);
                            var1 = _closure2_slot5;
                            var0 = var1.get;
                            var3 = var0.bind(var1)();
                            var0 = _closure1_slot16;
                            var1 = var0.PIP;
                            var7 = _closure2_slot7;
                            var0 = var7.get;
                            var7 = var0.bind(var7)();
                            var0 = var4.height;
                            if (var7) {
                                _fun110922_ip = 110;
                                continue _fun110922
                            }
                        case 90:
                            var7 = var4.paddingTop;
                            var8 = var0 - var7;
                            var7 = _closure1_slot18;
                            var7 = var8 + var7;
                            _fun110922_ip = 113;
                            continue _fun110922;
                        case 110:
                            var7 = var0;
                        case 113:
                            var8 = _closure2_slot7;
                            var0 = var8.get;
                            var0 = var0.bind(var8)();
                            if (var0) {
                                _fun110922_ip = 135;
                                continue _fun110922
                            }
                        case 129:
                            var8 = _closure1_slot18;
                            _fun110922_ip = 141;
                            continue _fun110922;
                        case 135:
                            var8 = var4.paddingTop;
                        case 141:
                            var0 = {};
                            var11 = var0;
                            var10 = var4;
                            var4 = copyDataProperties(var11, var10);
                            var4 = 'paddingTop';
                            var0[var4] = var8;
                            var8 = _closure2_slot7;
                            var4 = var8.get;
                            var4 = var4.bind(var8)();
                            var8 = 24;
                            var9 = var8;
                            if (!var4) {
                                _fun110922_ip = 186;
                                continue _fun110922
                            }
                        case 184:
                            var9 = 0;
                        case 186:
                            var4 = 'borderTopLeftRadius';
                            var0[var4] = var9;
                            var9 = _closure2_slot7;
                            var4 = var9.get;
                            var4 = var4.bind(var9)();
                            if (!var4) {
                                _fun110922_ip = 213;
                                continue _fun110922
                            }
                        case 211:
                            var8 = 0;
                        case 213:
                            var4 = 'borderTopRightRadius';
                            var0[var4] = var8;
                            var4 = 'height';
                            var0[var4] = var7;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 30;
                            var4 = var8[var4];
                            var7 = var7.bind(var5)(var4);
                            var4 = var7.withTiming;
                            if (!(var3 !== var1)) {
                                _fun110922_ip = 290;
                                continue _fun110922
                            }
                        case 260:
                            var3 = _closure2_slot5;
                            var1 = var3.get;
                            var8 = var1.bind(var3)();
                            var1 = _closure1_slot16;
                            var1 = var1.DISMISSED;
                            var3 = 1;
                            if (!(var8 === var1)) {
                                _fun110922_ip = 292;
                                continue _fun110922
                            }
                        case 290:
                            var3 = 0;
                        case 292:
                            var1 = _closure1_slot23;
                            var3 = var4.bind(var7)(var3, var1);
                            var1 = 'opacity';
                            var0[var1] = var3;
                            var1 = {};
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 19;
                            var3 = var7[var3];
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.withSpring;
                            var7 = _closure2_slot12;
                            var3 = var7.get;
                            var3 = var3.bind(var7)();
                            var8 = _closure2_slot7;
                            var7 = var8.get;
                            var7 = var7.bind(var8)();
                            if (var7) {
                                _fun110922_ip = 395;
                                continue _fun110922
                            }
                        case 367:
                            var7 = _closure2_slot0;
                            var2 = var7.get;
                            var2 = var2.bind(var7)();
                            var2 = var2.gestureActive;
                            if (!var2) {
                                _fun110922_ip = 395;
                                continue _fun110922
                            }
                        case 389:
                            var2 = _closure1_slot17;
                            _fun110922_ip = 399;
                            continue _fun110922;
                        case 395:
                            var2 = _closure1_slot15;
                        case 399:
                            var2 = var4.bind(var5)(var3, var2);
                            var1.translateY = var2;
                            var2 = new Array(1);
                            var2[0] = var1;
                            var1 = 'transform';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var18 = {};
                var34 = var4[var28];
                var34 = var15.bind(var3)(var34);
                var18.calculateVoicePanelHeaderSpecs = var34;
                var18.safeArea = var26;
                var18.mode = var33;
                var18.VoicePanelModes = var25;
                var18.connected = var24;
                var18.EDGE_GUTTER = var22;
                var25 = 30;
                var22 = var4[var25];
                var22 = var1.bind(var3)(var22);
                var22 = var22.withTiming;
                var18.withTiming = var22;
                var24 = _closure1_slot23;
                var18.OPACITY_TIMING = var24;
                var22 = 19;
                var33 = var4[var22];
                var33 = var1.bind(var3)(var33);
                var33 = var33.withSpring;
                var18.withSpring = var33;
                var18.yOffset = var32;
                var18.wrapperOffset = var20;
                var20 = _closure1_slot17;
                var18.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE = var20;
                var20 = _closure1_slot15;
                var18.UI_SHOW_HIDE_PHYSICS = var20;
                var5.__closure = var18;
                var18 = 1052627369386.0;
                var5.__workletHash = var18;
                var18 = _closure1_slot37;
                var5.__initData = var18;
                var5 = var12.bind(var14)(var5);
                var12 = var4[var0];
                var18 = var1.bind(var3)(var12);
                var14 = var18.useDerivedValue;
                var12 = function() {
                    _fun110923: for (var _fun110923_ip = 0;;) switch (_fun110923_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var2 = var0.mode;
                            var0 = _closure1_slot19;
                            var0 = var0.HIDDEN;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun110923_ip = 48;
                                continue _fun110923
                            }
                        case 41:
                            var1 = _closure2_slot8;
                            var0 = !var1;
                        case 48:
                            return var0;
                    }
                };
                var20 = {};
                var20.controlsSpecs = var29;
                var29 = _closure1_slot19;
                var20.VoicePanelControlsModes = var29;
                var20.isScreenReaderEnabled = var21;
                var12.__closure = var20;
                var20 = 16725581527938.0;
                var12.__workletHash = var20;
                var20 = _closure1_slot38;
                var12.__initData = var20;
                var14 = var14.bind(var18)(var12);
                var _closure2_slot13 = var14;
                var12 = var4[var0];
                var20 = var1.bind(var3)(var12);
                var18 = var20.useAnimatedStyle;
                var12 = function() {
                    _fun110924: for (var _fun110924_ip = 0;;) switch (_fun110924_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 29;
                            var0 = var5[var0];
                            var7 = undefined;
                            var2 = var2.bind(var7)(var0);
                            var4 = _closure2_slot6;
                            var0 = var4.get;
                            var0 = var0.bind(var4)();
                            var0 = var2.bind(var7)(var0);
                            var6 = var0.height;
                            var0 = {};
                            var4 = _closure1_slot0;
                            var2 = 30;
                            var2 = var5[var2];
                            var8 = var4.bind(var7)(var2);
                            var5 = var8.withTiming;
                            var4 = _closure2_slot13;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var4 = 1;
                            if (!var2) {
                                _fun110924_ip = 95;
                                continue _fun110924
                            }
                        case 93:
                            var4 = 0;
                        case 95:
                            var2 = _closure1_slot23;
                            var2 = var5.bind(var8)(var4, var2);
                            var0.opacity = var2;
                            var2 = {};
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 19;
                            var4 = var8[var4];
                            var5 = var5.bind(var7)(var4);
                            var4 = var5.withSpring;
                            var7 = _closure2_slot13;
                            var3 = var7.get;
                            var7 = var3.bind(var7)();
                            var3 = 0;
                            if (!var7) {
                                _fun110924_ip = 157;
                                continue _fun110924
                            }
                        case 154:
                            var3 = -var6;
                        case 157:
                            var1 = _closure1_slot14;
                            var1 = var4.bind(var5)(var3, var1);
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var21 = {};
                var28 = var4[var28];
                var28 = var15.bind(var3)(var28);
                var21.calculateVoicePanelHeaderSpecs = var28;
                var21.safeArea = var26;
                var25 = var4[var25];
                var25 = var1.bind(var3)(var25);
                var25 = var25.withTiming;
                var21.withTiming = var25;
                var21.isHeaderHidden = var14;
                var21.OPACITY_TIMING = var24;
                var22 = var4[var22];
                var22 = var1.bind(var3)(var22);
                var22 = var22.withSpring;
                var21.withSpring = var22;
                var22 = _closure1_slot14;
                var21.MODE_CHANGE_PHYSICS = var22;
                var12.__closure = var21;
                var21 = 3320897771806.0;
                var12.__workletHash = var21;
                var21 = _closure1_slot39;
                var12.__initData = var21;
                var18 = var18.bind(var20)(var12);
                var0 = var4[var0];
                var20 = var1.bind(var3)(var0);
                var12 = var20.useAnimatedProps;
                var0 = function() {
                    _fun110925: for (var _fun110925_ip = 0;;) switch (_fun110925_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot13;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = 'box-none';
                            if (!var3) {
                                _fun110925_ip = 31;
                                continue _fun110925
                            }
                        case 27:
                            var2 = 'none';
                        case 31:
                            var0.pointerEvents = var2;
                            var3 = _closure2_slot13;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = 'auto';
                            if (!var3) {
                                _fun110925_ip = 62;
                                continue _fun110925
                            }
                        case 56:
                            var2 = 'no-hide-descendants';
                        case 62:
                            var0.importantForAccessibility = var2;
                            var2 = _closure2_slot13;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var0.accessibilityElementsHidden = var1;
                            return var0;
                    }
                };
                var21 = {};
                var21.isHeaderHidden = var14;
                var0.__closure = var21;
                var21 = 4740985143159.0;
                var0.__workletHash = var21;
                var21 = _closure1_slot40;
                var0.__initData = var21;
                var12 = var12.bind(var20)(var0);
                var0 = 31;
                var0 = var4[var0];
                var20 = var1.bind(var3)(var0);
                var0 = var20.useCanInviteMembers;
                var20 = var0.bind(var20)(var27);
                var0 = 32;
                var0 = var4[var0];
                var21 = var1.bind(var3)(var0);
                var0 = var21.useInviteMembersCallback;
                var26 = var0.bind(var21)(var27);
                var0 = 33;
                var0 = var4[var0];
                var0 = var15.bind(var3)(var0);
                var28 = var0.bind(var3)();
                var0 = 34;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useNavigatorBackPressHandler;
                var0 = var0.bind(var1)(var28);
                if (!(var17 == var10)) {
                    _fun110916_ip = 1195;
                    continue _fun110916
                }
            case 1183:
                var0 = _closure1_slot25;
                var15 = var0.DOWN;
                _fun110916_ip = 1205;
                continue _fun110916;
            case 1195:
                var0 = _closure1_slot25;
                var15 = var0.LEFT;
            case 1205:
                _closure2_slot14 = var15;
                var0 = _closure1_slot25;
                var0 = var0.LEFT;
                if (!(var15 !== var0)) {
                    _fun110916_ip = 1298;
                    continue _fun110916
                }
            case 1223:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var0 = 28;
                var1 = var22[var0];
                var1 = var21.bind(var3)(var1);
                var4 = var1.intl;
                var1 = var4.string;
                var0 = var22[var0];
                var0 = var21.bind(var3)(var0);
                var0 = var0.t;
                if (var30) {
                    _fun110916_ip = 1283;
                    continue _fun110916
                }
            case 1270:
                var21 = var0.WAI6xu;
                var36 = var1.bind(var4)(var21);
                _fun110916_ip = 1296;
                continue _fun110916;
            case 1283:
                var0 = var0.RLCTQG;
                var36 = var1.bind(var4)(var0);
            case 1296:
                _fun110916_ip = 1355;
                continue _fun110916;
            case 1298:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var0 = 28;
                var1 = var22[var0];
                var1 = var21.bind(var3)(var1);
                var4 = var1.intl;
                var1 = var4.string;
                var0 = var22[var0];
                var0 = var21.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["9M6OdC"];
                var36 = var1.bind(var4)(var0);
            case 1355:
                var4 = _closure1_slot1;
                var0 = _closure1_slot2;
                var1 = 35;
                var1 = var0[var1];
                var4 = var4.bind(var3)(var1);
                var21 = _closure1_slot8;
                var1 = var21.getId;
                var1 = var1.bind(var21)();
                var4 = var4.bind(var3)(var1, var27, var13);
                _closure2_slot15 = var4;
                var1 = _closure1_slot0;
                var6 = var0[var6];
                var22 = var1.bind(var3)(var6);
                var21 = var22.useStateFromStores;
                var6 = _closure1_slot10;
                var13 = new Array(1);
                var13[0] = var6;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var2
                    _fun110926: for (var _fun110926_ip = 0;;) switch (_fun110926_ip) {
                        case 0:
                            var1 = _closure2_slot15;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun110926_ip = 515;
                                continue _fun110926
                            }
                        case 18:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var7 = 35;
                            var4 = var4[var7];
                            var5 = undefined;
                            var8 = var6.bind(var5)(var4);
                            var6 = var8.isStableUserParticipant;
                            var4 = _closure2_slot15;
                            var4 = var6.bind(var8)(var4);
                            if (!var4) {
                                _fun110926_ip = 515;
                                continue _fun110926
                            }
                        case 64:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var7];
                            var6 = var6.bind(var5)(var4);
                            var4 = var6.stableParticipantHasVideo;
                            var3 = _closure2_slot15;
                            var3 = var4.bind(var6)(var3);
                            if (!var3) {
                                _fun110926_ip = 515;
                                continue _fun110926
                            }
                        case 102:
                            var4 = _closure1_slot10;
                            var3 = var4.getVideoDevices;
                            var6 = var3.bind(var4)();
                            var3 = global;
                            var4 = var3.Object;
                            var3 = var4.keys;
                            var7 = var3.bind(var4)(var6);
                            var4 = var7.length;
                            var3 = 2;
                            if (!(!(var4 < var3))) {
                                _fun110926_ip = 515;
                                continue _fun110926
                            }
                        case 149:
                            var4 = _closure1_slot10;
                            var3 = var4.getVideoDeviceId;
                            var3 = var3.bind(var4)();
                            var _closure3_slot0 = var3;
                            var3 = var6[var3];
                            var8 = var0 == var3;
                            var4 = undefined;
                            if (var8) {
                                _fun110926_ip = 186;
                                continue _fun110926
                            }
                        case 180:
                            var4 = var3.facing;
                        case 186:
                            var3 = var7.find;
                            var2 = function(arg0) { // Environment: var2
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var3 = var3.bind(var7)(var2);
                            var7 = var0 != var3;
                            var2 = undefined;
                            if (!var7) {
                                _fun110926_ip = 234;
                                continue _fun110926
                            }
                        case 212:
                            var6 = var6[var3];
                            var7 = var0 == var6;
                            var3 = undefined;
                            if (var7) {
                                _fun110926_ip = 231;
                                continue _fun110926
                            }
                        case 225:
                            var3 = var6.facing;
                        case 231:
                            var2 = var3;
                        case 234:
                            if (!(var0 != var4)) {
                                _fun110926_ip = 458;
                                continue _fun110926
                            }
                        case 241:
                            if (!(var0 != var2)) {
                                _fun110926_ip = 458;
                                continue _fun110926
                            }
                        case 248:
                            var0 = 'back';
                            if (!(var0 === var4)) {
                                _fun110926_ip = 269;
                                continue _fun110926
                            }
                        case 256:
                            var3 = 'front';
                            if (!(var3 !== var2)) {
                                _fun110926_ip = 399;
                                continue _fun110926
                            }
                        case 269:
                            var3 = 'front';
                            if (!(var3 === var4)) {
                                _fun110926_ip = 283;
                                continue _fun110926
                            }
                        case 279:
                            if (!(var0 !== var2)) {
                                _fun110926_ip = 340;
                                continue _fun110926
                            }
                        case 283:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 28;
                            var2 = var6[var0];
                            var2 = var4.bind(var5)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var0 = var6[var0];
                            var0 = var4.bind(var5)(var0);
                            var0 = var0.t;
                            var0 = var0["t9eQ/g"];
                            var0 = var2.bind(var3)(var0);
                            _fun110926_ip = 397;
                            continue _fun110926;
                        case 340:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 28;
                            var3 = var7[var2];
                            var3 = var6.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var7[var2];
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.t;
                            var2 = var2["7YZ/Si"];
                            var0 = var3.bind(var4)(var2);
                        case 397:
                            _fun110926_ip = 456;
                            continue _fun110926;
                        case 399:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 28;
                            var3 = var7[var2];
                            var3 = var6.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var7[var2];
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.t;
                            var2 = var2["/R1SBx"];
                            var0 = var3.bind(var4)(var2);
                        case 456:
                            _fun110926_ip = 513;
                            continue _fun110926;
                        case 458:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 28;
                            var2 = var6[var1];
                            var2 = var4.bind(var5)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.t;
                            var1 = var1["t9eQ/g"];
                            var0 = var2.bind(var3)(var1);
                        case 513:
                            return var0;
                        case 515:
                            var0 = undefined;
                            return var0;
                    }
                };
                var21 = var21.bind(var22)(var13, var4, var6);
                var13 = _closure1_slot4;
                var22 = var13.useCallback;
                var6 = function() { // Environment: var2
                    _fun110928: for (var _fun110928_ip = 0;;) switch (_fun110928_ip) {
                        case 0:
                            var5 = _closure1_slot10;
                            var2 = var5.getVideoDeviceId;
                            var2 = var2.bind(var5)();
                            var _closure3_slot0 = var2;
                            var2 = global;
                            var4 = var2.Object;
                            var3 = var4.keys;
                            var2 = var5.getVideoDevices;
                            var2 = var2.bind(var5)();
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun110928_ip = 107;
                                continue _fun110928
                            }
                        case 74:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 36;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var0 = var1.setVideoDevice;
                            var0 = var0.bind(var1)(var2);
                        case 107:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = new Array(0);
                var22 = var22.bind(var13)(var6, var4);
                var6 = var13.useMemo;
                var4 = new Array(1);
                var4[0] = var15;
                var2 = function() { // Environment: var2
                    _fun110930: for (var _fun110930_ip = 0;;) switch (_fun110930_ip) {
                        case 0:
                            var0 = {};
                            var2 = {};
                            var4 = _closure2_slot14;
                            var1 = _closure1_slot25;
                            var3 = var1.LEFT;
                            var1 = '0deg';
                            if (!(var4 === var3)) {
                                _fun110930_ip = 40;
                                continue _fun110930
                            }
                        case 34:
                            var1 = '90deg';
                        case 40:
                            var2.rotateZ = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var25 = var6.bind(var13)(var2, var4);
                var2 = 37;
                var2 = var0[var2];
                var6 = var1.bind(var3)(var2);
                var4 = var6.useIsSecureFramesUIEnabled;
                var2 = {};
                var2.channelId = var27;
                var33 = var4.bind(var6)(var2);
                var4 = 38;
                var0 = var0[var4];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useIsUserSecureFramesVerified;
                var0 = {};
                var6 = _closure1_slot20;
                var13 = var6.USER;
                var6 = null;
                if (!(var10 === var13)) {
                    _fun110916_ip = 1581;
                    continue _fun110916
                }
            case 1569:
                var13 = var17 != var11;
                var6 = null;
                if (!var13) {
                    _fun110916_ip = 1581;
                    continue _fun110916
                }
            case 1578:
                var6 = var11;
            case 1581:
                var0.userId = var6;
                var0.channelId = var27;
                var1 = var1.bind(var2)(var0);
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var4 = var2.bind(var3)(var0);
                var2 = var4.useIsStreamSecureFramesVerified;
                var0 = {};
                var6 = _closure1_slot20;
                var13 = var6.STREAM;
                var6 = null;
                if (!(var10 === var13)) {
                    _fun110916_ip = 1647;
                    continue _fun110916
                }
            case 1635:
                var13 = var17 != var11;
                var6 = null;
                if (!var13) {
                    _fun110916_ip = 1647;
                    continue _fun110916
                }
            case 1644:
                var6 = var11;
            case 1647:
                var0.streamKey = var6;
                var0.channelId = var27;
                var0 = var2.bind(var4)(var0);
                var2 = _closure1_slot20;
                var2 = var2.STREAM;
                if (!(var2 !== var10)) {
                    _fun110916_ip = 1696;
                    continue _fun110916
                }
            case 1675:
                var2 = _closure1_slot20;
                var2 = var2.USER;
                var32 = false;
                if (!(var2 === var10)) {
                    _fun110916_ip = 1699;
                    continue _fun110916
                }
            case 1691:
                var32 = var1;
                _fun110916_ip = 1699;
                continue _fun110916;
            case 1696:
                var32 = var0;
            case 1699:
                var2 = _closure1_slot22;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var13 = 20;
                var0 = var0[var13];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = var23.headerWrapper;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var15 = 'box-none';
                var0.pointerEvents = var15;
                var0.layout = var16;
                var6 = _closure1_slot21;
                var5 = _closure1_slot30;
                var4 = {};
                var4.isHeaderHidden = var14;
                var4.scrollPosition = var8;
                var4.focused = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = var30;
                if (!var5) {
                    _fun110916_ip = 1873;
                    continue _fun110916
                }
            case 1808:
                var8 = _closure1_slot21;
                var24 = _closure1_slot1;
                var29 = _closure1_slot2;
                var6 = 39;
                var6 = var29[var6];
                var7 = var24.bind(var3)(var6);
                var6 = {};
                var11 = 17;
                var11 = var29[var11];
                var11 = var24.bind(var3)(var11);
                var11 = var11.colors;
                var11 = var11.BLACK;
                var6.baseColor = var11;
                var6.minHeight = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1873:
                var4[1] = var5;
                var7 = _closure1_slot22;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var13];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var8 = var23.headerContentWrapper;
                var5.style = var8;
                var5.pointerEvents = var15;
                var5.layout = var16;
                var8 = _closure1_slot20;
                var8 = var8.USER;
                var9 = null;
                if (!(var10 === var8)) {
                    _fun110916_ip = 1973;
                    continue _fun110916
                }
            case 1936:
                var11 = _closure1_slot21;
                var10 = _closure1_slot1;
                var24 = _closure1_slot2;
                var8 = 40;
                var8 = var24[var8];
                var10 = var10.bind(var3)(var8);
                var8 = {};
                var8.isHeaderHidden = var14;
                var9 = var11.bind(var3)(var10, var8);
            case 1973:
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot22;
                var29 = _closure1_slot1;
                var35 = _closure1_slot2;
                var9 = var35[var13];
                var10 = var29.bind(var3)(var9);
                var9 = {};
                var24 = var23.headerOuter;
                var14 = new Array(2);
                var14[0] = var24;
                var14[1] = var18;
                var9.style = var14;
                var9.animatedProps = var12;
                var12 = 22;
                var12 = var35[var12];
                var14 = var29.bind(var3)(var12);
                var12 = {};
                var18 = var23.leftWrapper;
                var12.style = var18;
                var12.pointerEvents = var15;
                var34 = _closure1_slot21;
                var18 = 41;
                var15 = var35[var18];
                var24 = var29.bind(var3)(var15);
                var15 = {};
                var37 = 42;
                var37 = var35[var37];
                var37 = var29.bind(var3)(var37);
                var15.icon = var37;
                var15.accessibilityLabel = var36;
                var15.onPress = var28;
                var15.style = var25;
                var24 = var34.bind(var3)(var24, var15);
                var15 = new Array(2);
                var15[0] = var24;
                var24 = var35[var13];
                var25 = var29.bind(var3)(var24);
                var24 = {};
                var28 = var23.headerInner;
                var24.style = var28;
                var28 = 43;
                var28 = var35[var28];
                var29 = var29.bind(var3)(var28);
                var28 = {};
                var29 = var34.bind(var3)(var29, var28);
                var28 = new Array(2);
                var28[0] = var29;
                var29 = null;
                if (!var33) {
                    _fun110916_ip = 2266;
                    continue _fun110916
                }
            case 2174:
                var29 = null;
                if (!var32) {
                    _fun110916_ip = 2266;
                    continue _fun110916
                }
            case 2179:
                var34 = _closure1_slot21;
                var33 = _closure1_slot0;
                var37 = _closure1_slot2;
                var32 = 44;
                var32 = var37[var32];
                var32 = var33.bind(var3)(var32);
                var33 = var32.ShieldLockIcon;
                var32 = {};
                var35 = 'xs';
                var32.size = var35;
                var36 = _closure1_slot1;
                var35 = 17;
                var35 = var37[var35];
                var35 = var36.bind(var3)(var35);
                var35 = var35.colors;
                var35 = var35.TEXT_SUBTLE;
                var32.color = var35;
                var35 = var23.shieldIconMargin;
                var32.style = var35;
                var29 = var34.bind(var3)(var33, var32);
            case 2266:
                var28[1] = var29;
                var24.children = var28;
                var24 = var11.bind(var3)(var25, var24);
                var15[1] = var24;
                var12.children = var15;
                var14 = var11.bind(var3)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var15 = _closure1_slot22;
                var24 = _closure1_slot1;
                var28 = _closure1_slot2;
                var13 = var28[var13];
                var14 = var24.bind(var3)(var13);
                var13 = {};
                var23 = var23.rightWrapper;
                var13.style = var23;
                var13.layout = var16;
                var25 = _closure1_slot21;
                var23 = _closure1_slot33;
                var16 = {};
                var23 = var25.bind(var3)(var23, var16);
                var16 = new Array(5);
                var16[0] = var23;
                var23 = 45;
                var23 = var28[var23];
                var29 = var24.bind(var3)(var23);
                var23 = {};
                var23.isConnectedToVoiceChannel = var30;
                var23.channelId = var27;
                var23 = var25.bind(var3)(var29, var23);
                var16[1] = var23;
                var23 = 46;
                var23 = var28[var23];
                var24 = var24.bind(var3)(var23);
                var23 = {};
                var23.channelId = var27;
                var23 = var25.bind(var3)(var24, var23);
                var16[2] = var23;
                if (!var20) {
                    _fun110916_ip = 2540;
                    continue _fun110916
                }
            case 2428:
                var25 = _closure1_slot21;
                var28 = _closure1_slot1;
                var32 = _closure1_slot2;
                var23 = var32[var18];
                var24 = var28.bind(var3)(var23);
                var23 = {};
                var27 = 47;
                var27 = var32[var27];
                var27 = var28.bind(var3)(var27);
                var23.icon = var27;
                var28 = _closure1_slot0;
                var27 = 28;
                var29 = var32[var27];
                var29 = var28.bind(var3)(var29);
                var30 = var29.intl;
                var29 = var30.formatToPlainString;
                var27 = var32[var27];
                var27 = var28.bind(var3)(var27);
                var27 = var27.t;
                var28 = var27["dHHb/2"];
                var27 = {};
                var27.channelName = var31;
                var27 = var29.bind(var30)(var28, var27);
                var23.accessibilityLabel = var27;
                var23.onPress = var26;
                var20 = var25.bind(var3)(var24, var23);
            case 2540:
                var16[3] = var20;
                var20 = var17 != var21;
                var17 = null;
                if (!var20) {
                    _fun110916_ip = 2606;
                    continue _fun110916
                }
            case 2553:
                var20 = _closure1_slot21;
                var24 = _closure1_slot1;
                var25 = _closure1_slot2;
                var18 = var25[var18];
                var19 = var24.bind(var3)(var18);
                var18 = {};
                var23 = 48;
                var23 = var25[var23];
                var23 = var24.bind(var3)(var23);
                var18.icon = var23;
                var18.onPress = var22;
                var18.accessibilityLabel = var21;
                var17 = var20.bind(var3)(var19, var18);
            case 2606:
                var16[4] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 49;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/header/VoicePanelHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3948, 1590, 1216, 1372, 3476, 3100, 3949, 1621, 11816, 11819, 11814, 3523, 33, 1297, 671, 3720, 4081, 6458, 4072, 6457, 11815, 4070, 14221, 566, 4792, 1234, 11820, 4097, 14268, 14243, 14269, 4708, 14270, 8208, 8282, 8243, 13639, 14271, 14273, 7368, 14274, 8288, 14296, 14301, 8646, 14303, 2]);