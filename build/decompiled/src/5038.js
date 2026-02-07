// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = ['testOnly_pressed', 'hitSlop', 'pressRetentionOffset', 'delayHoverIn', 'delayHoverOut', 'delayLongPress', 'unstable_pressDelay', 'onHoverIn', 'onHoverOut', 'onPress', 'onPressIn', 'onPressOut', 'onLongPress', 'onLayout', 'style', 'children', 'android_disableSound', 'android_ripple', 'disabled', 'accessible', 'simultaneousWithExternalGesture', 'requireExternalGestureToFail', 'blocksExternalGesture'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var8 = var7.useCallback;
    var _closure1_slot6 = var8;
    var8 = var7.useEffect;
    var _closure1_slot7 = var8;
    var8 = var7.useMemo;
    var _closure1_slot8 = var8;
    var8 = var7.useRef;
    var _closure1_slot9 = var8;
    var7 = var7.useState;
    var _closure1_slot10 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Platform;
    var _closure1_slot11 = var6;
    var3 = var3.processColor;
    var _closure1_slot12 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 5;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = var4.isTestEnv;
    var3 = var3.bind(var4)();
    var _closure1_slot15 = var3;
    var3 = null;
    var _closure1_slot16 = var3;
    var3 = {};
    var4 = 'function pnpm_PressableTsx1(event){const{hoverInTimeout,clearTimeout,delayHoverOut,hoverOutTimeout,setTimeout,onHoverOut,gestureToPressableEvent}=this.__closure;var _onHoverOut2;if(hoverInTimeout.current){clearTimeout(hoverInTimeout.current);}if(delayHoverOut){hoverOutTimeout.current=setTimeout(function(){var _onHoverOut;return(_onHoverOut=onHoverOut)===null||_onHoverOut===void 0?void 0:_onHoverOut(gestureToPressableEvent(event));},delayHoverOut);return;}(_onHoverOut2=onHoverOut)===null||_onHoverOut2===void 0||_onHoverOut2(gestureToPressableEvent(event));}';
    var3.code = var4;
    var _closure1_slot17 = var3;
    var3 = {};
    var4 = 'function pnpm_PressableTsx2(event){const{hoverOutTimeout,clearTimeout,delayHoverIn,hoverInTimeout,setTimeout,onHoverIn,gestureToPressableEvent}=this.__closure;var _onHoverIn2;if(hoverOutTimeout.current){clearTimeout(hoverOutTimeout.current);}if(delayHoverIn){hoverInTimeout.current=setTimeout(function(){var _onHoverIn;return(_onHoverIn=onHoverIn)===null||_onHoverIn===void 0?void 0:_onHoverIn(gestureToPressableEvent(event));},delayHoverIn);return;}(_onHoverIn2=onHoverIn)===null||_onHoverIn2===void 0||_onHoverIn2(gestureToPressableEvent(event));}';
    var3.code = var4;
    var _closure1_slot18 = var3;
    var3 = {};
    var4 = "function pnpm_PressableTsx3(_event,success){const{Platform,stateMachine,StateMachineEvent,handleFinalize}=this.__closure;if(Platform.OS==='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}handleFinalize();}}";
    var3.code = var4;
    var _closure1_slot19 = var3;
    var3 = {};
    var4 = 'function pnpm_PressableTsx4(event){const{gestureTouchToPressableEvent,stateMachine,handlePressOut}=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}';
    var3.code = var4;
    var _closure1_slot20 = var3;
    var3 = {};
    var4 = "function pnpm_PressableTsx5(){const{Platform,stateMachine,handleFinalize}=this.__closure;if(Platform.OS==='android'){stateMachine.reset();handleFinalize();}}";
    var3.code = var4;
    var _closure1_slot21 = var3;
    var3 = {};
    var4 = 'function pnpm_PressableTsx6(event){const{gestureTouchToPressableEvent,stateMachine,StateMachineEvent}=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.handleEvent(StateMachineEvent.LONG_PRESS_TOUCHES_DOWN,pressableEvent);}';
    var3.code = var4;
    var _closure1_slot22 = var3;
    var3 = {};
    var4 = "function pnpm_PressableTsx7(_event,success){const{Platform,stateMachine,StateMachineEvent,handleFinalize}=this.__closure;if(Platform.OS!=='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}if(Platform.OS!=='ios'){handleFinalize();}}}";
    var3.code = var4;
    var _closure1_slot23 = var3;
    var3 = {};
    var4 = "function pnpm_PressableTsx8(){const{Platform,stateMachine,StateMachineEvent}=this.__closure;if(Platform.OS!=='android'){stateMachine.handleEvent(StateMachineEvent.NATIVE_START);}}";
    var3.code = var4;
    var _closure1_slot24 = var3;
    var3 = {};
    var4 = 'function pnpm_PressableTsx9(){const{stateMachine,StateMachineEvent}=this.__closure;stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN);}';
    var3.code = var4;
    var _closure1_slot25 = var3;
    var3 = {};
    var4 = "function pnpm_PressableTsx10(event){const{Platform,gestureTouchToPressableEvent,stateMachine,handlePressOut}=this.__closure;if(Platform.OS!=='macos'&&Platform.OS!=='web'){const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}}";
    var3.code = var4;
    var _closure1_slot26 = var3;
    var1 = function arg0() {
        _fun45323: for (var _fun45323_ip = 0;;) switch (_fun45323_ip) {
            case 0:
                var25 = arg0;
                var3 = undefined;
                var8 = undefined;
                var12 = var25.testOnly_pressed;
                var22 = var25.hitSlop;
                var _closure2_slot0 = var22;
                var18 = var25.pressRetentionOffset;
                var _closure2_slot1 = var18;
                var29 = var25.delayHoverIn;
                var _closure2_slot2 = var29;
                var28 = var25.delayHoverOut;
                var _closure2_slot3 = var28;
                var26 = var25.delayLongPress;
                var _closure2_slot4 = var26;
                var27 = var25.unstable_pressDelay;
                var _closure2_slot5 = var27;
                var20 = var25.onHoverIn;
                var _closure2_slot6 = var20;
                var1 = var25.onHoverOut;
                var _closure2_slot7 = var1;
                var17 = var25.onPress;
                var _closure2_slot8 = var17;
                var16 = var25.onPressIn;
                var _closure2_slot9 = var16;
                var15 = var25.onPressOut;
                var _closure2_slot10 = var15;
                var13 = var25.onLongPress;
                var _closure2_slot11 = var13;
                var6 = var25.onLayout;
                var _closure2_slot12 = var6;
                var9 = var25.style;
                var2 = var25.children;
                var21 = var25.android_disableSound;
                var14 = var25.android_ripple;
                var _closure2_slot13 = var14;
                var19 = var25.disabled;
                var24 = var25.accessible;
                var23 = var25.simultaneousWithExternalGesture;
                var11 = var25.requireExternalGestureToFail;
                var7 = var25.blocksExternalGesture;
                var10 = _closure1_slot5;
                var5 = _closure1_slot3;
                var10 = var10.bind(var3)(var25, var5);
                var5 = {};
                var5.simultaneousWithExternalGesture = var23;
                var5.requireExternalGestureToFail = var11;
                var5.blocksExternalGesture = var7;
                var _closure2_slot14 = var5;
                var7 = _closure1_slot10;
                var11 = null;
                var5 = var11 != var12;
                if (!var5) {
                    _fun45323_ip = 252;
                    continue _fun45323
                }
            case 249:
                var5 = var12;
            case 252:
                var12 = var7.bind(var3)(var5);
                var7 = _closure1_slot4;
                var5 = 2;
                var12 = var7.bind(var3)(var12, var5);
                var5 = 0;
                var7 = var12[var5];
                var5 = 1;
                var5 = var12[var5];
                var _closure2_slot15 = var5;
                var5 = _closure1_slot9;
                var12 = var5.bind(var3)(var11);
                var _closure2_slot16 = var12;
                var12 = var5.bind(var3)(var11);
                var _closure2_slot17 = var12;
                var12 = true;
                var23 = var5.bind(var3)(var12);
                var _closure2_slot18 = var23;
                var23 = false;
                var25 = var5.bind(var3)(var23);
                var _closure2_slot19 = var25;
                var25 = {
                    'width': 0,
                    'height': 0
                };
                var25 = var5.bind(var3)(var25);
                var _closure2_slot20 = var25;
                var25 = _closure1_slot8;
                var30 = new Array(1);
                var30[0] = var22;
                var22 = function() { // Environment: var0
                    _fun45324: for (var _fun45324_ip = 0;;) switch (_fun45324_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = 'number';
                            var0 = typeof var0;
                            if (!(var2 !== var0)) {
                                _fun45324_ip = 38;
                                continue _fun45324
                            }
                        case 18:
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun45324_ip = 32;
                                continue _fun45324
                            }
                        case 28:
                            var0 = {};
                            _fun45324_ip = 36;
                            continue _fun45324;
                        case 32:
                            var0 = _closure2_slot0;
                        case 36:
                            _fun45324_ip = 78;
                            continue _fun45324;
                        case 38:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 6;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.numberAsInset;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 78:
                            return var0;
                    }
                };
                var32 = var25.bind(var3)(var22, var30);
                var _closure2_slot21 = var32;
                var22 = new Array(1);
                var22[0] = var18;
                var18 = function() { // Environment: var0
                    _fun45325: for (var _fun45325_ip = 0;;) switch (_fun45325_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = 'number';
                            var0 = typeof var0;
                            if (!(var2 !== var0)) {
                                _fun45325_ip = 38;
                                continue _fun45325
                            }
                        case 18:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun45325_ip = 32;
                                continue _fun45325
                            }
                        case 28:
                            var0 = {};
                            _fun45325_ip = 36;
                            continue _fun45325;
                        case 32:
                            var0 = _closure2_slot1;
                        case 36:
                            _fun45325_ip = 78;
                            continue _fun45325;
                        case 38:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 6;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.numberAsInset;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 78:
                            return var0;
                    }
                };
                var30 = var25.bind(var3)(var18, var22);
                var22 = _closure1_slot0;
                var31 = _closure1_slot2;
                var18 = 6;
                var18 = var31[var18];
                var22 = var22.bind(var3)(var18);
                var18 = var22.addInsets;
                var22 = var18.bind(var22)(var32, var30);
                var _closure2_slot22 = var22;
                var31 = _closure1_slot6;
                var30 = function() { // Environment: var0
                    _fun45326: for (var _fun45326_ip = 0;;) switch (_fun45326_ip) {
                        case 0:
                            var1 = _closure2_slot16;
                            var1 = var1.current;
                            if (!var1) {
                                _fun45326_ip = 63;
                                continue _fun45326
                            }
                        case 15:
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var1 = _closure2_slot16;
                            var2 = var1.current;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var2 = _closure2_slot16;
                            var1 = null;
                            var2.current = var1;
                            var1 = _closure2_slot18;
                            var0 = true;
                            var1.current = var0;
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var18 = new Array(0);
                var18 = var31.bind(var3)(var30, var18);
                var _closure2_slot23 = var18;
                var33 = function() { // Environment: var0
                    _fun45327: for (var _fun45327_ip = 0;;) switch (_fun45327_ip) {
                        case 0:
                            var1 = _closure2_slot17;
                            var1 = var1.current;
                            if (!var1) {
                                _fun45327_ip = 51;
                                continue _fun45327
                            }
                        case 15:
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var1 = _closure2_slot17;
                            var2 = var1.current;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var1 = _closure2_slot17;
                            var0 = null;
                            var1.current = var0;
                        case 51:
                            var0 = undefined;
                            return var0;
                    }
                };
                var30 = new Array(0);
                var33 = var31.bind(var3)(var33, var30);
                var _closure2_slot24 = var33;
                var30 = new Array(3);
                var30[0] = var13;
                var30[1] = var18;
                var30[2] = var26;
                var26 = function(arg0) { // Environment: var0
                    _fun45328: for (var _fun45328_ip = 0;;) switch (_fun45328_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var1 = _closure2_slot11;
                            if (!var1) {
                                _fun45328_ip = 81;
                                continue _fun45328
                            }
                        case 19:
                            var1 = _closure2_slot23;
                            var4 = undefined;
                            var1 = var1.bind(var4)();
                            var1 = _closure2_slot16;
                            var2 = global;
                            var3 = var2.setTimeout;
                            var6 = _closure2_slot4;
                            var2 = null;
                            var6 = var2 != var6;
                            var2 = 500;
                            if (!var6) {
                                _fun45328_ip = 64;
                                continue _fun45328
                            }
                        case 60:
                            var2 = _closure2_slot4;
                        case 64:
                            var0 = function() { // Environment: var0
                                var2 = _closure2_slot18;
                                var1 = false;
                                var2.current = var1;
                                var2 = _closure2_slot11;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var3.bind(var4)(var0, var2);
                            var1.current = var0;
                        case 81:
                            var0 = undefined;
                            return var0;
                    }
                };
                var26 = var31.bind(var3)(var26, var30);
                var _closure2_slot25 = var26;
                var30 = new Array(2);
                var30[0] = var16;
                var30[1] = var26;
                var26 = function(arg0) { // Environment: var0
                    _fun45330: for (var _fun45330_ip = 0;;) switch (_fun45330_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = _closure2_slot9;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun45330_ip = 27;
                                continue _fun45330
                            }
                        case 16:
                            var3 = _closure2_slot9;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var4);
                        case 27:
                            var3 = _closure2_slot25;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var4);
                            var4 = _closure2_slot15;
                            var3 = true;
                            var3 = var4.bind(var0)(var3);
                            var3 = _closure2_slot17;
                            var3 = var3.current;
                            if (!var3) {
                                _fun45330_ip = 93;
                                continue _fun45330
                            }
                        case 61:
                            var3 = global;
                            var4 = var3.clearTimeout;
                            var3 = _closure2_slot17;
                            var3 = var3.current;
                            var3 = var4.bind(var0)(var3);
                            var1 = _closure2_slot17;
                            var1.current = var2;
                        case 93:
                            return var0;
                    }
                };
                var26 = var31.bind(var3)(var26, var30);
                var _closure2_slot26 = var26;
                var30 = new Array(2);
                var30[0] = var33;
                var30[1] = var18;
                var18 = function() { // Environment: var0
                    var0 = _closure2_slot19;
                    var2 = false;
                    var0.current = var2;
                    var3 = _closure2_slot23;
                    var0 = undefined;
                    var3 = var3.bind(var0)();
                    var3 = _closure2_slot24;
                    var3 = var3.bind(var0)();
                    var1 = _closure2_slot15;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var18 = var31.bind(var3)(var18, var30);
                var _closure2_slot27 = var18;
                var30 = new Array(3);
                var30[0] = var26;
                var30[1] = var32;
                var30[2] = var27;
                var27 = function(arg0) { // Environment: var0
                    _fun45332: for (var _fun45332_ip = 0;;) switch (_fun45332_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var2 = var2[var0];
                            var0 = undefined;
                            var8 = var3.bind(var0)(var2);
                            var7 = var8.isTouchWithinInset;
                            var2 = _closure2_slot20;
                            var6 = var2.current;
                            var5 = _closure2_slot21;
                            var2 = var4.nativeEvent;
                            var10 = var2.changedTouches;
                            var9 = var10.at;
                            var2 = -1;
                            var2 = var9.bind(var10)(var2);
                            var2 = var7.bind(var8)(var6, var5, var2);
                            if (!var2) {
                                _fun45332_ip = 158;
                                continue _fun45332
                            }
                        case 95:
                            var5 = _closure2_slot19;
                            var2 = true;
                            var5.current = var2;
                            var2 = _closure2_slot5;
                            if (var2) {
                                _fun45332_ip = 125;
                                continue _fun45332
                            }
                        case 114:
                            var2 = _closure2_slot26;
                            var2 = var2.bind(var0)(var4);
                            _fun45332_ip = 158;
                            continue _fun45332;
                        case 125:
                            var2 = _closure2_slot17;
                            var4 = global;
                            var4 = var4.setTimeout;
                            var3 = _closure2_slot5;
                            var1 = function() { // Environment: var1
                                var2 = _closure2_slot26;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var4.bind(var0)(var1, var3);
                            var2.current = var1;
                        case 158:
                            return var0;
                    }
                };
                var30 = var31.bind(var3)(var27, var30);
                var _closure2_slot28 = var30;
                var27 = new Array(4);
                var27[0] = var18;
                var27[1] = var26;
                var27[2] = var17;
                var27[3] = var15;
                var26 = function(arg0) { // Environment: var0
                    _fun45334: for (var _fun45334_ip = 0;;) switch (_fun45334_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = undefined;
                            var2 = undefined;
                            var4 = arguments.length;
                            var1 = 1;
                            var4 = var4 > var1;
                            if (!var4) {
                                _fun45334_ip = 28;
                                continue _fun45334
                            }
                        case 20:
                            var5 = arguments[var1];
                            var4 = var0 !== var5;
                        case 28:
                            var5 = !var4;
                            if (!var4) {
                                _fun45334_ip = 38;
                                continue _fun45334
                            }
                        case 34:
                            var5 = arguments[var1];
                        case 38:
                            var2 = _closure2_slot19;
                            var2 = var2.current;
                            if (!var2) {
                                _fun45334_ip = 148;
                                continue _fun45334
                            }
                        case 53:
                            var4 = _closure2_slot19;
                            var2 = false;
                            var4.current = var2;
                            var2 = _closure2_slot17;
                            var2 = var2.current;
                            if (!var2) {
                                _fun45334_ip = 86;
                                continue _fun45334
                            }
                        case 77:
                            var2 = _closure2_slot26;
                            var2 = var2.bind(var0)(var3);
                        case 86:
                            var2 = _closure2_slot10;
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun45334_ip = 105;
                                continue _fun45334
                            }
                        case 96:
                            var2 = _closure2_slot10;
                            var2 = var2.bind(var0)(var3);
                        case 105:
                            var2 = _closure2_slot18;
                            var2 = var2.current;
                            if (!var2) {
                                _fun45334_ip = 120;
                                continue _fun45334
                            }
                        case 117:
                            var2 = var5;
                        case 120:
                            if (!var2) {
                                _fun45334_ip = 140;
                                continue _fun45334
                            }
                        case 123:
                            var2 = _closure2_slot8;
                            if (!(var4 != var2)) {
                                _fun45334_ip = 140;
                                continue _fun45334
                            }
                        case 131:
                            var2 = _closure2_slot8;
                            var2 = var2.bind(var0)(var3);
                        case 140:
                            var1 = _closure2_slot27;
                            var1 = var1.bind(var0)();
                        case 148:
                            return var0;
                    }
                };
                var26 = var31.bind(var3)(var26, var27);
                var _closure2_slot29 = var26;
                var31 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.PressableStateMachine;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var4 = var1;
                    var0 = new var4[var0](var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var27 = new Array(0);
                var27 = var25.bind(var3)(var31, var27);
                var _closure2_slot30 = var27;
                var32 = _closure1_slot7;
                var31 = new Array(3);
                var31[0] = var30;
                var31[1] = var26;
                var31[2] = var27;
                var30 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.getStatesConfig;
                    var3 = _closure2_slot28;
                    var2 = _closure2_slot29;
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = _closure2_slot30;
                    var1 = var2.setStates;
                    var1 = var1.bind(var2)(var3);
                    return var0;
                };
                var30 = var32.bind(var3)(var30, var31);
                var30 = var5.bind(var3)(var11);
                var _closure2_slot31 = var30;
                var5 = var5.bind(var3)(var11);
                var _closure2_slot32 = var5;
                var5 = new Array(4);
                var5[0] = var29;
                var5[1] = var28;
                var5[2] = var20;
                var5[3] = var1;
                var1 = function() { // Environment: var0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 9;
                    var1 = var8[var1];
                    var6 = undefined;
                    var1 = var7.bind(var6)(var1);
                    var2 = var1.GestureObjects;
                    var1 = var2.Hover;
                    var4 = var1.bind(var2)();
                    var2 = var4.manualActivation;
                    var1 = true;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.cancelsTouchesInView;
                    var1 = false;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onBegin;
                    var1 = function arg0() {
                        _fun45338: for (var _fun45338_ip = 0;;) switch (_fun45338_ip) {
                            case 0:
                                var6 = arg0;
                                var _closure4_slot0 = var6;
                                var1 = _closure2_slot32;
                                var1 = var1.current;
                                if (!var1) {
                                    _fun45338_ip = 48;
                                    continue _fun45338
                                }
                            case 24:
                                var1 = global;
                                var4 = var1.clearTimeout;
                                var1 = _closure2_slot32;
                                var3 = var1.current;
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                            case 48:
                                var1 = _closure2_slot2;
                                if (var1) {
                                    _fun45338_ip = 112;
                                    continue _fun45338
                                }
                            case 55:
                                var3 = _closure2_slot6;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun45338_ip = 147;
                                    continue _fun45338
                                }
                            case 65:
                                var4 = _closure2_slot6;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 6;
                                var1 = var3[var1];
                                var3 = undefined;
                                var5 = var5.bind(var3)(var1);
                                var1 = var5.gestureToPressableEvent;
                                var1 = var1.bind(var5)(var6);
                                var1 = var4.bind(var3)(var1);
                                _fun45338_ip = 147;
                                continue _fun45338;
                            case 112:
                                var1 = _closure2_slot31;
                                var3 = global;
                                var4 = var3.setTimeout;
                                var3 = _closure2_slot2;
                                var2 = undefined;
                                var0 = function() { // Environment: var0
                                    _fun45339: for (var _fun45339_ip = 0;;) switch (_fun45339_ip) {
                                        case 0:
                                            var2 = _closure2_slot6;
                                            var0 = null;
                                            var2 = var0 == var2;
                                            var3 = undefined;
                                            var0 = undefined;
                                            if (var2) {
                                                _fun45339_ip = 70;
                                                continue _fun45339
                                            }
                                        case 20:
                                            var2 = _closure2_slot6;
                                            var4 = _closure1_slot0;
                                            var5 = _closure1_slot2;
                                            var1 = 6;
                                            var1 = var5[var1];
                                            var5 = var4.bind(var3)(var1);
                                            var4 = var5.gestureToPressableEvent;
                                            var1 = _closure4_slot0;
                                            var1 = var4.bind(var5)(var1);
                                            var0 = var2.bind(var3)(var1);
                                        case 70:
                                            return var0;
                                    }
                                };
                                var0 = var4.bind(var2)(var0, var3);
                                var1.current = var0;
                            case 147:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var11 = {};
                    var5 = _closure2_slot32;
                    var11.hoverOutTimeout = var5;
                    var10 = global;
                    var5 = var10.clearTimeout;
                    var11.clearTimeout = var5;
                    var5 = _closure2_slot2;
                    var11.delayHoverIn = var5;
                    var5 = _closure2_slot31;
                    var11.hoverInTimeout = var5;
                    var5 = var10.setTimeout;
                    var11.setTimeout = var5;
                    var5 = _closure2_slot6;
                    var11.onHoverIn = var5;
                    var5 = 6;
                    var12 = var8[var5];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.gestureToPressableEvent;
                    var11.gestureToPressableEvent = var12;
                    var1.__closure = var11;
                    var11 = 145410820733.0;
                    var1.__workletHash = var11;
                    var11 = _closure1_slot18;
                    var1.__initData = var11;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.onFinalize;
                    var0 = function arg0() {
                        _fun45340: for (var _fun45340_ip = 0;;) switch (_fun45340_ip) {
                            case 0:
                                var6 = arg0;
                                var _closure4_slot0 = var6;
                                var1 = _closure2_slot31;
                                var1 = var1.current;
                                if (!var1) {
                                    _fun45340_ip = 48;
                                    continue _fun45340
                                }
                            case 24:
                                var1 = global;
                                var4 = var1.clearTimeout;
                                var1 = _closure2_slot31;
                                var3 = var1.current;
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                            case 48:
                                var1 = _closure2_slot3;
                                if (var1) {
                                    _fun45340_ip = 112;
                                    continue _fun45340
                                }
                            case 55:
                                var3 = _closure2_slot7;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun45340_ip = 147;
                                    continue _fun45340
                                }
                            case 65:
                                var4 = _closure2_slot7;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 6;
                                var1 = var3[var1];
                                var3 = undefined;
                                var5 = var5.bind(var3)(var1);
                                var1 = var5.gestureToPressableEvent;
                                var1 = var1.bind(var5)(var6);
                                var1 = var4.bind(var3)(var1);
                                _fun45340_ip = 147;
                                continue _fun45340;
                            case 112:
                                var1 = _closure2_slot32;
                                var3 = global;
                                var4 = var3.setTimeout;
                                var3 = _closure2_slot3;
                                var2 = undefined;
                                var0 = function() { // Environment: var0
                                    _fun45341: for (var _fun45341_ip = 0;;) switch (_fun45341_ip) {
                                        case 0:
                                            var2 = _closure2_slot7;
                                            var0 = null;
                                            var2 = var0 == var2;
                                            var3 = undefined;
                                            var0 = undefined;
                                            if (var2) {
                                                _fun45341_ip = 70;
                                                continue _fun45341
                                            }
                                        case 20:
                                            var2 = _closure2_slot7;
                                            var4 = _closure1_slot0;
                                            var5 = _closure1_slot2;
                                            var1 = 6;
                                            var1 = var5[var1];
                                            var5 = var4.bind(var3)(var1);
                                            var4 = var5.gestureToPressableEvent;
                                            var1 = _closure4_slot0;
                                            var1 = var4.bind(var5)(var1);
                                            var0 = var2.bind(var3)(var1);
                                        case 70:
                                            return var0;
                                    }
                                };
                                var0 = var4.bind(var2)(var0, var3);
                                var1.current = var0;
                            case 147:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = {};
                    var11 = _closure2_slot31;
                    var4.hoverInTimeout = var11;
                    var11 = var10.clearTimeout;
                    var4.clearTimeout = var11;
                    var11 = _closure2_slot3;
                    var4.delayHoverOut = var11;
                    var11 = _closure2_slot32;
                    var4.hoverOutTimeout = var11;
                    var10 = var10.setTimeout;
                    var4.setTimeout = var10;
                    var9 = _closure2_slot7;
                    var4.onHoverOut = var9;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.gestureToPressableEvent;
                    var4.gestureToPressableEvent = var5;
                    var0.__closure = var4;
                    var4 = 117886059607.0;
                    var0.__workletHash = var4;
                    var3 = _closure1_slot17;
                    var0.__initData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var25.bind(var3)(var1, var5);
                var20 = new Array(3);
                var20[0] = var27;
                var20[1] = var18;
                var20[2] = var26;
                var5 = function() { // Environment: var0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 9;
                    var1 = var9[var1];
                    var7 = undefined;
                    var1 = var8.bind(var7)(var1);
                    var2 = var1.GestureObjects;
                    var1 = var2.LongPress;
                    var5 = var1.bind(var2)();
                    var4 = var5.minDuration;
                    var1 = 5;
                    var2 = var9[var1];
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.INT32_MAX;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.maxDistance;
                    var1 = var9[var1];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.INT32_MAX;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.cancelsTouchesInView;
                    var1 = false;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onTouchesDown;
                    var1 = function arg0() {
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 6;
                        var1 = var6[var0];
                        var0 = undefined;
                        var3 = var5.bind(var0)(var1);
                        var2 = var3.gestureTouchToPressableEvent;
                        var1 = arg0;
                        var4 = var2.bind(var3)(var1);
                        var3 = _closure2_slot30;
                        var2 = var3.handleEvent;
                        var1 = 8;
                        var1 = var6[var1];
                        var1 = var5.bind(var0)(var1);
                        var1 = var1.StateMachineEvent;
                        var1 = var1.LONG_PRESS_TOUCHES_DOWN;
                        var1 = var2.bind(var3)(var1, var4);
                        return var0;
                    };
                    var10 = {};
                    var12 = 6;
                    var5 = var9[var12];
                    var5 = var8.bind(var7)(var5);
                    var5 = var5.gestureTouchToPressableEvent;
                    var10.gestureTouchToPressableEvent = var5;
                    var6 = _closure2_slot30;
                    var10.stateMachine = var6;
                    var6 = 8;
                    var11 = var9[var6];
                    var11 = var8.bind(var7)(var11);
                    var11 = var11.StateMachineEvent;
                    var10.StateMachineEvent = var11;
                    var1.__closure = var10;
                    var10 = 5538605329543.0;
                    var1.__workletHash = var10;
                    var10 = _closure1_slot22;
                    var1.__initData = var10;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onTouchesUp;
                    var1 = function() {
                        var2 = _closure2_slot30;
                        var1 = var2.reset;
                        var1 = var1.bind(var2)();
                        var1 = _closure2_slot27;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var11 = {};
                    var10 = _closure1_slot11;
                    var11.Platform = var10;
                    var13 = _closure2_slot30;
                    var11.stateMachine = var13;
                    var13 = _closure2_slot27;
                    var11.handleFinalize = var13;
                    var1.__closure = var11;
                    var11 = 9871785058594.0;
                    var1.__workletHash = var11;
                    var11 = _closure1_slot21;
                    var1.__initData = var11;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onTouchesCancelled;
                    var1 = function arg0() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.gestureTouchToPressableEvent;
                        var1 = arg0;
                        var3 = var2.bind(var3)(var1);
                        var4 = _closure2_slot30;
                        var2 = var4.reset;
                        var2 = var2.bind(var4)();
                        var2 = _closure2_slot29;
                        var1 = false;
                        var1 = var2.bind(var0)(var3, var1);
                        return var0;
                    };
                    var11 = {};
                    var12 = var9[var12];
                    var12 = var8.bind(var7)(var12);
                    var12 = var12.gestureTouchToPressableEvent;
                    var11.gestureTouchToPressableEvent = var12;
                    var12 = _closure2_slot30;
                    var11.stateMachine = var12;
                    var12 = _closure2_slot29;
                    var11.handlePressOut = var12;
                    var1.__closure = var11;
                    var11 = 8223505277740.0;
                    var1.__workletHash = var11;
                    var11 = _closure1_slot20;
                    var1.__initData = var11;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.onFinalize;
                    var0 = function arg0, arg1() {
                        var0 = undefined;
                        return var0;
                    };
                    var4 = {};
                    var4.Platform = var10;
                    var10 = _closure2_slot30;
                    var4.stateMachine = var10;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.StateMachineEvent;
                    var4.StateMachineEvent = var6;
                    var5 = _closure2_slot27;
                    var4.handleFinalize = var5;
                    var0.__closure = var4;
                    var4 = 946627735228.0;
                    var0.__workletHash = var4;
                    var3 = _closure1_slot19;
                    var0.__initData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var25.bind(var3)(var5, var20);
                var20 = new Array(3);
                var20[0] = var27;
                var20[1] = var26;
                var20[2] = var18;
                var18 = function() { // Environment: var0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 9;
                    var1 = var9[var1];
                    var7 = undefined;
                    var1 = var8.bind(var7)(var1);
                    var2 = var1.GestureObjects;
                    var1 = var2.Native;
                    var4 = var1.bind(var2)();
                    var2 = var4.onTouchesCancelled;
                    var1 = function arg0() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.gestureTouchToPressableEvent;
                        var1 = arg0;
                        var3 = var2.bind(var3)(var1);
                        var4 = _closure2_slot30;
                        var2 = var4.reset;
                        var2 = var2.bind(var4)();
                        var2 = _closure2_slot29;
                        var1 = false;
                        var1 = var2.bind(var0)(var3, var1);
                        return var0;
                    };
                    var6 = {};
                    var10 = _closure1_slot11;
                    var6.Platform = var10;
                    var5 = 6;
                    var5 = var9[var5];
                    var5 = var8.bind(var7)(var5);
                    var5 = var5.gestureTouchToPressableEvent;
                    var6.gestureTouchToPressableEvent = var5;
                    var11 = _closure2_slot30;
                    var6.stateMachine = var11;
                    var11 = _closure2_slot29;
                    var6.handlePressOut = var11;
                    var1.__closure = var6;
                    var6 = 9061249296673.0;
                    var1.__workletHash = var6;
                    var6 = _closure1_slot26;
                    var1.__initData = var6;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onBegin;
                    var1 = function() {
                        var3 = _closure2_slot30;
                        var2 = var3.handleEvent;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 8;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.StateMachineEvent;
                        var1 = var1.NATIVE_BEGIN;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var11 = {};
                    var6 = _closure2_slot30;
                    var11.stateMachine = var6;
                    var6 = 8;
                    var12 = var9[var6];
                    var12 = var8.bind(var7)(var12);
                    var12 = var12.StateMachineEvent;
                    var11.StateMachineEvent = var12;
                    var1.__closure = var11;
                    var11 = 11605577071200.0;
                    var1.__workletHash = var11;
                    var11 = _closure1_slot25;
                    var1.__initData = var11;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onStart;
                    var1 = function() {
                        var0 = undefined;
                        return var0;
                    };
                    var11 = {};
                    var11.Platform = var10;
                    var12 = _closure2_slot30;
                    var11.stateMachine = var12;
                    var12 = var9[var6];
                    var12 = var8.bind(var7)(var12);
                    var12 = var12.StateMachineEvent;
                    var11.StateMachineEvent = var12;
                    var1.__closure = var11;
                    var11 = 1583717288778.0;
                    var1.__workletHash = var11;
                    var11 = _closure1_slot24;
                    var1.__initData = var11;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.onFinalize;
                    var0 = function arg0, arg1() {
                        _fun45351: for (var _fun45351_ip = 0;;) switch (_fun45351_ip) {
                            case 0:
                                var4 = _closure2_slot30;
                                var3 = var4.handleEvent;
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 8;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var5.bind(var0)(var2);
                                var2 = var2.StateMachineEvent;
                                var5 = arg1;
                                if (var5) {
                                    _fun45351_ip = 63;
                                    continue _fun45351
                                }
                            case 50:
                                var5 = var2.CANCEL;
                                var5 = var3.bind(var4)(var5);
                                _fun45351_ip = 74;
                                continue _fun45351;
                            case 63:
                                var2 = var2.FINALIZE;
                                var2 = var3.bind(var4)(var2);
                            case 74:
                                var1 = _closure2_slot27;
                                var1 = var1.bind(var0)();
                                return var0;
                        }
                    };
                    var4 = {};
                    var4.Platform = var10;
                    var10 = _closure2_slot30;
                    var4.stateMachine = var10;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.StateMachineEvent;
                    var4.StateMachineEvent = var6;
                    var5 = _closure2_slot27;
                    var4.handleFinalize = var5;
                    var0.__closure = var4;
                    var4 = 13697558324309.0;
                    var0.__workletHash = var4;
                    var3 = _closure1_slot23;
                    var0.__initData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var25.bind(var3)(var18, var20);
                var20 = var12 !== var19;
                var _closure2_slot33 = var20;
                var12 = new Array(3);
                var12[0] = var18;
                var12[1] = var5;
                var12[2] = var1;
                var8 = function arg0() {
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var3 = var4.enabled;
                    var2 = _closure2_slot33;
                    var2 = var3.bind(var4)(var2);
                    var3 = var4.runOnJS;
                    var2 = true;
                    var2 = var3.bind(var4)(var2);
                    var3 = var4.hitSlop;
                    var2 = _closure2_slot22;
                    var2 = var3.bind(var4)(var2);
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.entries;
                    var1 = _closure2_slot14;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var4 = _closure1_slot4;
                        var0 = undefined;
                        var3 = arg0;
                        var2 = 2;
                        var3 = var4.bind(var0)(var3, var2);
                        var2 = 0;
                        var5 = var3[var2];
                        var2 = 1;
                        var4 = var3[var2];
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.applyRelationProp;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1, var5, var4);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var12;
                var5 = var1[Symbol.iterator];
                var1 = var5().next;
            case 813:
                var19 = var1().value;
                var18 = var5;
                if (!(var18 !== var3)) {
                    _fun45323_ip = 841;
                    continue _fun45323
                }
            case 824: // try_start_0
                var18 = var8;
                var18 = var18.bind(var3)(var19);
            case 832: // try_end0
                _fun45323_ip = 813;
                continue _fun45323;
            case 834: // catch_target0
                CatchBlockStart(arg_register = 1);
                var5.return();
                throw var1;
            case 841:
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var1 = 9;
                var5 = var19[var1];
                var5 = var18.bind(var3)(var5);
                var5 = var5.GestureObjects;
                var8 = var5.Simultaneous;
                var5 = var8.apply;
                var1 = var19[var1];
                var1 = var18.bind(var3)(var1);
                var1 = var1.GestureObjects;
                var5 = var5.bind(var8)(var1, var12);
                var8 = 'function';
                var1 = typeof var9;
                var18 = var9;
                if (!(var8 === var1)) {
                    _fun45323_ip = 925;
                    continue _fun45323
                }
            case 913:
                var1 = {};
                var1.pressed = var7;
                var18 = var9.bind(var3)(var1);
            case 925:
                var1 = typeof var2;
                var12 = var2;
                if (!(var8 === var1)) {
                    _fun45323_ip = 947;
                    continue _fun45323
                }
            case 935:
                var1 = {};
                var1.pressed = var7;
                var12 = var2.bind(var3)(var1);
            case 947:
                var7 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var14;
                var1 = function() { // Environment: var0
                    _fun45354: for (var _fun45354_ip = 0;;) switch (_fun45354_ip) {
                        case 0:
                            var0 = _closure1_slot16;
                            var4 = null;
                            if (!(var4 === var0)) {
                                _fun45354_ip = 49;
                                continue _fun45354
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 5;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var0 = var2.isFabric;
                            var0 = var0.bind(var2)();
                            _closure1_slot16 = var0;
                        case 49:
                            var0 = _closure2_slot13;
                            var3 = 0;
                            if (!var0) {
                                _fun45354_ip = 63;
                                continue _fun45354
                            }
                        case 61:
                            var3 = undefined;
                        case 63:
                            var0 = _closure2_slot13;
                            var6 = var4 == var0;
                            var2 = undefined;
                            var0 = undefined;
                            if (var6) {
                                _fun45354_ip = 87;
                                continue _fun45354
                            }
                        case 78:
                            var5 = _closure2_slot13;
                            var0 = var5.color;
                        case 87:
                            if (!(var4 != var0)) {
                                _fun45354_ip = 94;
                                continue _fun45354
                            }
                        case 91:
                            var3 = var0;
                        case 94:
                            var4 = _closure1_slot16;
                            var0 = var3;
                            if (var4) {
                                _fun45354_ip = 113;
                                continue _fun45354
                            }
                        case 104:
                            var1 = _closure1_slot12;
                            var0 = var1.bind(var2)(var3);
                        case 113:
                            return var0;
                    }
                };
                var19 = var7.bind(var3)(var1, var2);
                var2 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function(arg0) { // Environment: var0
                    _fun45355: for (var _fun45355_ip = 0;;) switch (_fun45355_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = _closure2_slot12;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun45355_ip = 27;
                                continue _fun45355
                            }
                        case 16:
                            var3 = _closure2_slot12;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var0);
                        case 27:
                            var1 = _closure2_slot20;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var25 = var2.bind(var3)(var0, var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 11;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.GestureDetector;
                var0 = {};
                var0.gesture = var5;
                var6 = _closure1_slot14;
                var7 = _closure1_slot1;
                var5 = 12;
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var7 = global;
                var9 = var7.Object;
                var8 = var9.assign;
                var7 = {};
                var7.onLayout = var25;
                var23 = var23 !== var24;
                var7.accessible = var23;
                var7.hitSlop = var22;
                var7.enabled = var20;
                var22 = var11 != var21;
                var20 = undefined;
                if (!var22) {
                    _fun45323_ip = 1099;
                    continue _fun45323
                }
            case 1096:
                var20 = var21;
            case 1099:
                var7.touchSoundDisabled = var20;
                var7.rippleColor = var19;
                var20 = var11 == var14;
                var19 = undefined;
                if (var20) {
                    _fun45323_ip = 1124;
                    continue _fun45323
                }
            case 1118:
                var19 = var14.radius;
            case 1124:
                var20 = var11 != var19;
                var14 = undefined;
                if (!var20) {
                    _fun45323_ip = 1136;
                    continue _fun45323
                }
            case 1133:
                var14 = var19;
            case 1136:
                var7.rippleRadius = var14;
                var14 = new Array(2);
                var19 = {};
                var14[0] = var19;
                var14[1] = var18;
                var7.style = var14;
                var18 = _closure1_slot15;
                var14 = undefined;
                if (!var18) {
                    _fun45323_ip = 1171;
                    continue _fun45323
                }
            case 1168:
                var14 = var17;
            case 1171:
                var7.testOnly_onPress = var14;
                var17 = _closure1_slot15;
                var14 = undefined;
                if (!var17) {
                    _fun45323_ip = 1190;
                    continue _fun45323
                }
            case 1187:
                var14 = var16;
            case 1190:
                var7.testOnly_onPressIn = var14;
                var16 = _closure1_slot15;
                var14 = undefined;
                if (!var16) {
                    _fun45323_ip = 1209;
                    continue _fun45323
                }
            case 1206:
                var14 = var15;
            case 1209:
                var7.testOnly_onPressOut = var14;
                var14 = _closure1_slot15;
                var4 = undefined;
                if (!var14) {
                    _fun45323_ip = 1228;
                    continue _fun45323
                }
            case 1225:
                var4 = var13;
            case 1228:
                var7.testOnly_onLongPress = var4;
                var4 = new Array(2);
                var4[0] = var12;
                var4[1] = var11;
                var7.children = var4;
                var4 = {};
                var4 = var8.bind(var9)(var4, var10, var7);
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 29, 31, 27, 33, 4967, 5039, 5040, 5041, 5014, 5042, 4999, 5026]);