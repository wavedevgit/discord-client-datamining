// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = ['children', 'onLayout', 'bottomOffset', 'disableScrollOnKeyboardHide', 'enabled', 'extraKeyboardSpace', 'ScrollViewComponent', 'snapToOffsets'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var4 = 2;
    var3 = var6[var4];
    var8 = var5.bind(var0)(var3);
    var3 = var8.forwardRef;
    var9 = var8.useCallback;
    var _closure1_slot6 = var9;
    var9 = var8.useEffect;
    var _closure1_slot7 = var9;
    var9 = var8.useImperativeHandle;
    var _closure1_slot8 = var9;
    var8 = var8.useMemo;
    var _closure1_slot9 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var5 = var4.jsx;
    var _closure1_slot11 = var5;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx1(e,animated=false){const{enabled,layout,scrollViewTarget,height,keyboardHeight,bottomOffset,interpolate,initialKeyboardSize,scrollDistanceWithRespectToSnapPoints,scrollPosition,snapToOffsets,scrollTo,scrollViewAnimatedRef}=this.__closure;var _layout$value,_layout$value2,_layout$value3;if(!enabled){return 0;}if(((_layout$value=layout.value)===null||_layout$value===void 0?void 0:_layout$value.parentScrollViewTarget)!==scrollViewTarget.value){return 0;}const visibleRect=height-keyboardHeight.value;const absoluteY=((_layout$value2=layout.value)===null||_layout$value2===void 0?void 0:_layout$value2.layout.absoluteY)||0;const inputHeight=((_layout$value3=layout.value)===null||_layout$value3===void 0?void 0:_layout$value3.layout.height)||0;const point=absoluteY+inputHeight;if(visibleRect-point<=bottomOffset){const relativeScrollTo=keyboardHeight.value-(height-point)+bottomOffset;const interpolatedScrollTo=interpolate(e,[initialKeyboardSize.value,keyboardHeight.value],[0,scrollDistanceWithRespectToSnapPoints(relativeScrollTo+scrollPosition.value,snapToOffsets)-scrollPosition.value]);const targetScrollY=Math.max(interpolatedScrollTo,0)+scrollPosition.value;scrollTo(scrollViewAnimatedRef,0,targetScrollY,animated);return interpolatedScrollTo;}if(point<0){const positionOnScreen=visibleRect-bottomOffset;const topOfScreen=scrollPosition.value+point;scrollTo(scrollViewAnimatedRef,0,topOfScreen-positionOnScreen,animated);}return 0;}';
    var4.code = var5;
    var _closure1_slot13 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx2(newPosition){const{scrollPosition,maybeScroll,keyboardHeight}=this.__closure;const prevScroll=scrollPosition.value;scrollPosition.value=newPosition;maybeScroll(keyboardHeight.value,true);scrollPosition.value=prevScroll;}';
    var4.code = var5;
    var _closure1_slot14 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx3(e){const{interpolate,keyboardHeight,extraKeyboardSpace,currentKeyboardFrameHeight}=this.__closure;const keyboardFrame=interpolate(e.height,[0,keyboardHeight.value],[0,keyboardHeight.value+extraKeyboardSpace]);currentKeyboardFrameHeight.value=keyboardFrame;}';
    var4.code = var5;
    var _closure1_slot15 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx4(){const{lastSelection,input,layout,clamp}=this.__closure;var _lastSelection$value,_input$value;const customHeight=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.selection.end.y;if(!((_input$value=input.value)!==null&&_input$value!==void 0&&_input$value.layout)||!customHeight){return false;}layout.value={...input.value,layout:{...input.value.layout,height:clamp(customHeight,0,input.value.layout.height)}};return true;}';
    var4.code = var5;
    var _closure1_slot16 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx5(){const{layout,updateLayoutFromSelection,performScrollWithPositionRestoration,position}=this.__closure;const prevLayout=layout.value;if(!updateLayoutFromSelection()){return;}performScrollWithPositionRestoration(position.value);layout.value=prevLayout;}';
    var4.code = var5;
    var _closure1_slot17 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx6(){const{scrollFromCurrentPosition}=this.__closure;scrollFromCurrentPosition();}';
    var4.code = var5;
    var _closure1_slot18 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx7(e){const{lastSelection,scrollFromCurrentPosition,onChangeTextHandler}=this.__closure;var _lastSelection$value,_lastSelection$value2;const lastTarget=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.target;const latestSelection=(_lastSelection$value2=lastSelection.value)===null||_lastSelection$value2===void 0?void 0:_lastSelection$value2.selection;lastSelection.value=e;if(e.target!==lastTarget){return;}if(e.selection.end.position===e.selection.start.position&&(latestSelection===null||latestSelection===void 0?void 0:latestSelection.end.y)!==e.selection.end.y){return scrollFromCurrentPosition();}if(e.selection.start.position!==e.selection.end.position){return scrollFromCurrentPosition();}onChangeTextHandler();}';
    var4.code = var5;
    var _closure1_slot19 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx8(e){const{keyboardHeight,keyboardWillAppear,tag,initialKeyboardSize,scrollPosition,scrollBeforeKeyboardMovement,position,updateLayoutFromSelection,maybeScroll}=this.__closure;const keyboardWillChangeSize=keyboardHeight.value!==e.height&&e.height>0;keyboardWillAppear.value=e.height>0&&keyboardHeight.value===0;const keyboardWillHide=e.height===0;const focusWasChanged=tag.value!==e.target&&e.target!==-1||keyboardWillChangeSize;if(keyboardWillChangeSize){initialKeyboardSize.value=keyboardHeight.value;}if(keyboardWillHide){initialKeyboardSize.value=0;scrollPosition.value=scrollBeforeKeyboardMovement.value;}if(keyboardWillAppear.value||keyboardWillChangeSize||focusWasChanged){scrollPosition.value=position.value;keyboardHeight.value=e.height;}if(focusWasChanged){tag.value=e.target;updateLayoutFromSelection();scrollBeforeKeyboardMovement.value=position.value;}if(focusWasChanged&&!keyboardWillAppear.value){position.value+=maybeScroll(e.height,true);}}';
    var4.code = var5;
    var _closure1_slot20 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx9(e){const{syncKeyboardFrame,disableScrollOnKeyboardHide,keyboardWillAppear,maybeScroll}=this.__closure;syncKeyboardFrame(e);if(!disableScrollOnKeyboardHide||keyboardWillAppear.value){maybeScroll(e.height);}}';
    var4.code = var5;
    var _closure1_slot21 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx10(e){const{keyboardHeight,scrollPosition,position,syncKeyboardFrame}=this.__closure;keyboardHeight.value=e.height;scrollPosition.value=position.value;syncKeyboardFrame(e);}';
    var4.code = var5;
    var _closure1_slot22 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx11(){const{scrollFromCurrentPosition}=this.__closure;scrollFromCurrentPosition();}';
    var4.code = var5;
    var _closure1_slot23 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx12(){const{input}=this.__closure;return input.value;}';
    var4.code = var5;
    var _closure1_slot24 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx13(current,previous){const{scrollFromCurrentPosition}=this.__closure;if((current===null||current===void 0?void 0:current.target)===(previous===null||previous===void 0?void 0:previous.target)&&(current===null||current===void 0?void 0:current.layout.height)!==(previous===null||previous===void 0?void 0:previous.layout.height)){scrollFromCurrentPosition();}}';
    var4.code = var5;
    var _closure1_slot25 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx14(){const{enabled,currentKeyboardFrameHeight}=this.__closure;return enabled?{paddingBottom:currentKeyboardFrameHeight.value+1}:{};}';
    var4.code = var5;
    var _closure1_slot26 = var4;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun68565: for (var _fun68565_ip = 0;;) switch (_fun68565_ip) {
            case 0:
                var5 = arg0;
                var11 = var5.children;
                var8 = var5.onLayout;
                var _closure2_slot0 = var8;
                var0 = var5.bottomOffset;
                var16 = 0;
                var3 = undefined;
                var6 = 0;
                if (!(var3 !== var0)) {
                    _fun68565_ip = 39;
                    continue _fun68565
                }
            case 36:
                var6 = var0;
            case 39:
                var _closure2_slot1 = var6;
                var0 = var5.disableScrollOnKeyboardHide;
                var23 = var3 !== var0;
                if (!var23) {
                    _fun68565_ip = 59;
                    continue _fun68565
                }
            case 56:
                var23 = var0;
            case 59:
                var _closure2_slot2 = var23;
                var0 = var5.enabled;
                var9 = var3 === var0;
                if (var9) {
                    _fun68565_ip = 78;
                    continue _fun68565
                }
            case 75:
                var9 = var0;
            case 78:
                var _closure2_slot3 = var9;
                var0 = var5.extraKeyboardSpace;
                var22 = 0;
                if (!(var3 !== var0)) {
                    _fun68565_ip = 97;
                    continue _fun68565
                }
            case 94:
                var22 = var0;
            case 97:
                var _closure2_slot4 = var22;
                var2 = var5.ScrollViewComponent;
                if (!(var3 === var2)) {
                    _fun68565_ip = 142;
                    continue _fun68565
                }
            case 113:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 4;
                var0 = var7[var0];
                var0 = var4.bind(var3)(var0);
                var2 = var0.ScrollView;
            case 142:
                var20 = var5.snapToOffsets;
                var _closure2_slot5 = var20;
                var4 = _closure1_slot5;
                var0 = _closure1_slot3;
                var7 = var4.bind(var3)(var5, var0);
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var14 = 4;
                var0 = var4[var14];
                var12 = var5.bind(var3)(var0);
                var0 = var12.useAnimatedRef;
                var30 = var0.bind(var12)();
                var _closure2_slot6 = var30;
                var12 = _closure1_slot10;
                var0 = var12.useRef;
                var18 = null;
                var12 = var0.bind(var12)(var18);
                var _closure2_slot7 = var12;
                var13 = _closure1_slot1;
                var0 = 5;
                var0 = var4[var0];
                var0 = var13.bind(var3)(var0);
                var0 = var0.bind(var3)(var30, var12);
                var12 = var4[var14];
                var13 = var5.bind(var3)(var12);
                var12 = var13.useSharedValue;
                var34 = var12.bind(var13)(var18);
                var _closure2_slot8 = var34;
                var12 = var4[var14];
                var13 = var5.bind(var3)(var12);
                var12 = var13.useSharedValue;
                var27 = var12.bind(var13)(var16);
                var _closure2_slot9 = var27;
                var12 = var4[var14];
                var13 = var5.bind(var3)(var12);
                var12 = var13.useScrollViewOffset;
                var26 = var12.bind(var13)(var30);
                var _closure2_slot10 = var26;
                var12 = var4[var14];
                var13 = var5.bind(var3)(var12);
                var12 = var13.useSharedValue;
                var12 = var12.bind(var13)(var16);
                var _closure2_slot11 = var12;
                var13 = var4[var14];
                var15 = var5.bind(var3)(var13);
                var13 = var15.useSharedValue;
                var28 = var13.bind(var15)(var16);
                var _closure2_slot12 = var28;
                var13 = var4[var14];
                var17 = var5.bind(var3)(var13);
                var15 = var17.useSharedValue;
                var13 = false;
                var29 = var15.bind(var17)(var13);
                var _closure2_slot13 = var29;
                var13 = var4[var14];
                var17 = var5.bind(var3)(var13);
                var15 = var17.useSharedValue;
                var13 = -1;
                var33 = var15.bind(var17)(var13);
                var _closure2_slot14 = var33;
                var13 = var4[var14];
                var15 = var5.bind(var3)(var13);
                var13 = var15.useSharedValue;
                var32 = var13.bind(var15)(var16);
                var _closure2_slot15 = var32;
                var13 = var4[var14];
                var15 = var5.bind(var3)(var13);
                var13 = var15.useSharedValue;
                var31 = var13.bind(var15)(var16);
                var _closure2_slot16 = var31;
                var15 = 6;
                var13 = var4[var15];
                var16 = var5.bind(var3)(var13);
                var13 = var16.useReanimatedFocusedInput;
                var16 = var13.bind(var16)();
                var13 = var16.input;
                var _closure2_slot17 = var13;
                var19 = var16.update;
                var _closure2_slot18 = var19;
                var16 = var4[var14];
                var17 = var5.bind(var3)(var16);
                var16 = var17.useSharedValue;
                var21 = var16.bind(var17)(var18);
                var _closure2_slot19 = var21;
                var16 = var4[var14];
                var17 = var5.bind(var3)(var16);
                var16 = var17.useSharedValue;
                var25 = var16.bind(var17)(var18);
                var _closure2_slot20 = var25;
                var16 = var4[var15];
                var17 = var5.bind(var3)(var16);
                var16 = var17.useWindowDimensions;
                var16 = var16.bind(var17)();
                var24 = var16.height;
                var _closure2_slot21 = var24;
                var17 = _closure1_slot6;
                var16 = new Array(1);
                var16[0] = var8;
                var8 = function(arg0) { // Environment: var1
                    _fun68566: for (var _fun68566_ip = 0;;) switch (_fun68566_ip) {
                        case 0:
                            var3 = _closure2_slot8;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 7;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var2);
                            var4 = var5.findNodeHandle;
                            var2 = _closure2_slot6;
                            var2 = var2.current;
                            var2 = var4.bind(var5)(var2);
                            var3.value = var2;
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun68566_ip = 80;
                                continue _fun68566
                            }
                        case 68:
                            var2 = _closure2_slot0;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                        case 80:
                            return var0;
                    }
                };
                var8 = var17.bind(var3)(var8, var16);
                var18 = function arg0() {
                    _fun68567: for (var _fun68567_ip = 0;;) switch (_fun68567_ip) {
                        case 0:
                            var7 = undefined;
                            var1 = undefined;
                            var2 = arguments.length;
                            var0 = 1;
                            var6 = var2 > var0;
                            if (!var6) {
                                _fun68567_ip = 25;
                                continue _fun68567
                            }
                        case 17:
                            var2 = arguments[var0];
                            var6 = var7 !== var2;
                        case 25:
                            if (!var6) {
                                _fun68567_ip = 32;
                                continue _fun68567
                            }
                        case 28:
                            var6 = arguments[var0];
                        case 32:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun68567_ip = 46;
                                continue _fun68567
                            }
                        case 42:
                            var0 = 0;
                            return var0;
                        case 46:
                            var0 = _closure2_slot19;
                            var2 = var0.value;
                            var0 = null;
                            var4 = var0 == var2;
                            var3 = undefined;
                            if (var4) {
                                _fun68567_ip = 74;
                                continue _fun68567
                            }
                        case 66:
                            var3 = var2.parentScrollViewTarget;
                        case 74:
                            var2 = _closure2_slot8;
                            var2 = var2.value;
                            if (!(var3 === var2)) {
                                _fun68567_ip = 503;
                                continue _fun68567
                            }
                        case 90:
                            var3 = _closure2_slot21;
                            var2 = _closure2_slot12;
                            var2 = var2.value;
                            var4 = var3 - var2;
                            var2 = _closure2_slot19;
                            var3 = var2.value;
                            var5 = var0 == var3;
                            var2 = undefined;
                            if (var5) {
                                _fun68567_ip = 137;
                                continue _fun68567
                            }
                        case 125:
                            var3 = var3.layout;
                            var2 = var3.absoluteY;
                        case 137:
                            if (var2) {
                                _fun68567_ip = 142;
                                continue _fun68567
                            }
                        case 140:
                            var2 = 0;
                        case 142:
                            var3 = _closure2_slot19;
                            var3 = var3.value;
                            var5 = var0 == var3;
                            var0 = undefined;
                            if (var5) {
                                _fun68567_ip = 171;
                                continue _fun68567
                            }
                        case 160:
                            var3 = var3.layout;
                            var0 = var3.height;
                        case 171:
                            if (var0) {
                                _fun68567_ip = 176;
                                continue _fun68567
                            }
                        case 174:
                            var0 = 0;
                        case 176:
                            var3 = var2 + var0;
                            var2 = var4 - var3;
                            var0 = _closure2_slot1;
                            if (!(!(var2 <= var0))) {
                                _fun68567_ip = 270;
                                continue _fun68567
                            }
                        case 192:
                            var0 = 0;
                            if (!(var3 < var0)) {
                                _fun68567_ip = 268;
                                continue _fun68567
                            }
                        case 198:
                            var2 = _closure2_slot1;
                            var9 = var4 - var2;
                            var2 = _closure2_slot9;
                            var2 = var2.value;
                            var2 = var2 + var3;
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 4;
                            var4 = var8[var4];
                            var8 = var5.bind(var7)(var4);
                            var5 = var8.scrollTo;
                            var16 = _closure2_slot6;
                            var14 = var2 - var9;
                            var17 = var8;
                            var15 = 0;
                            var13 = var6;
                            var2 = var17[var5](var16, var15, var14, var13, var12);
                        case 268:
                            return var0;
                        case 270:
                            var0 = _closure2_slot12;
                            var2 = var0.value;
                            var0 = _closure2_slot21;
                            var0 = var0 - var3;
                            var2 = var2 - var0;
                            var0 = _closure2_slot1;
                            var4 = var2 + var0;
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 4;
                            var0 = var8[var2];
                            var10 = var3.bind(var7)(var0);
                            var9 = var10.interpolate;
                            var0 = _closure2_slot15;
                            var0 = var0.value;
                            var5 = new Array(2);
                            var5[0] = var0;
                            var0 = _closure2_slot12;
                            var0 = var0.value;
                            var5[1] = var0;
                            var0 = 8;
                            var0 = var8[var0];
                            var12 = var3.bind(var7)(var0);
                            var11 = var12.scrollDistanceWithRespectToSnapPoints;
                            var0 = _closure2_slot9;
                            var0 = var0.value;
                            var4 = var4 + var0;
                            var0 = _closure2_slot5;
                            var4 = var11.bind(var12)(var4, var0);
                            var0 = _closure2_slot9;
                            var0 = var0.value;
                            var0 = var4 - var0;
                            var4 = [0];
                            var4[1] = var0;
                            var0 = arg0;
                            var0 = var9.bind(var10)(var0, var5, var4);
                            var4 = global;
                            var9 = var4.Math;
                            var4 = var9.max;
                            var5 = 0;
                            var9 = var4.bind(var9)(var0, var5);
                            var4 = _closure2_slot9;
                            var4 = var4.value;
                            var14 = var9 + var4;
                            var2 = var8[var2];
                            var3 = var3.bind(var7)(var2);
                            var2 = var3.scrollTo;
                            var16 = _closure2_slot6;
                            var17 = var3;
                            var15 = 0;
                            var13 = var6;
                            var1 = var17[var2](var16, var15, var14, var13, var12);
                            return var0;
                        case 503:
                            var0 = 0;
                            return var0;
                    }
                };
                var16 = {};
                var16.enabled = var9;
                var16.layout = var21;
                var16.scrollViewTarget = var34;
                var16.height = var24;
                var16.keyboardHeight = var28;
                var16.bottomOffset = var6;
                var34 = var4[var14];
                var34 = var5.bind(var3)(var34);
                var34 = var34.interpolate;
                var16.interpolate = var34;
                var16.initialKeyboardSize = var32;
                var34 = 8;
                var34 = var4[var34];
                var34 = var5.bind(var3)(var34);
                var34 = var34.scrollDistanceWithRespectToSnapPoints;
                var16.scrollDistanceWithRespectToSnapPoints = var34;
                var16.scrollPosition = var27;
                var16.snapToOffsets = var20;
                var34 = var4[var14];
                var34 = var5.bind(var3)(var34);
                var34 = var34.scrollTo;
                var16.scrollTo = var34;
                var16.scrollViewAnimatedRef = var30;
                var18.__closure = var16;
                var16 = 5214591696024.0;
                var18.__workletHash = var16;
                var16 = _closure1_slot13;
                var18.__initData = var16;
                var16 = new Array(4);
                var16[0] = var6;
                var16[1] = var9;
                var16[2] = var24;
                var16[3] = var20;
                var24 = var17.bind(var3)(var18, var16);
                var _closure2_slot22 = var24;
                var18 = function arg0() {
                    var0 = _closure2_slot9;
                    var2 = var0.value;
                    var3 = _closure2_slot9;
                    var0 = arg0;
                    var3.value = var0;
                    var5 = _closure2_slot22;
                    var0 = _closure2_slot12;
                    var4 = var0.value;
                    var0 = undefined;
                    var3 = true;
                    var3 = var5.bind(var0)(var4, var3);
                    var1 = _closure2_slot9;
                    var1.value = var2;
                    return var0;
                };
                var16 = {};
                var16.scrollPosition = var27;
                var16.maybeScroll = var24;
                var16.keyboardHeight = var28;
                var18.__closure = var16;
                var16 = 889884238578.0;
                var18.__workletHash = var16;
                var16 = _closure1_slot14;
                var18.__initData = var16;
                var16 = new Array(3);
                var16[0] = var27;
                var16[1] = var28;
                var16[2] = var24;
                var20 = var17.bind(var3)(var18, var16);
                var _closure2_slot23 = var20;
                var18 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.interpolate;
                    var1 = arg0;
                    var4 = var1.height;
                    var2 = _closure2_slot12;
                    var2 = var2.value;
                    var3 = [0];
                    var3[1] = var2;
                    var2 = _closure2_slot12;
                    var7 = var2.value;
                    var2 = _closure2_slot4;
                    var7 = var7 + var2;
                    var2 = [0];
                    var2[1] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1 = _closure2_slot11;
                    var1.value = var2;
                    return var0;
                };
                var16 = {};
                var30 = var4[var14];
                var30 = var5.bind(var3)(var30);
                var30 = var30.interpolate;
                var16.interpolate = var30;
                var16.keyboardHeight = var28;
                var16.extraKeyboardSpace = var22;
                var16.currentKeyboardFrameHeight = var12;
                var18.__closure = var16;
                var16 = 10876962584853.0;
                var18.__workletHash = var16;
                var16 = _closure1_slot15;
                var18.__initData = var16;
                var16 = new Array(1);
                var16[0] = var22;
                var22 = var17.bind(var3)(var18, var16);
                var _closure2_slot24 = var22;
                var18 = function() {
                    _fun68570: for (var _fun68570_ip = 0;;) switch (_fun68570_ip) {
                        case 0:
                            var0 = _closure2_slot20;
                            var2 = var0.value;
                            var0 = null;
                            var3 = var0 == var2;
                            var13 = undefined;
                            var14 = undefined;
                            if (var3) {
                                _fun68570_ip = 41;
                                continue _fun68570
                            }
                        case 25:
                            var2 = var2.selection;
                            var2 = var2.end;
                            var14 = var2.y;
                        case 41:
                            var2 = _closure2_slot17;
                            var2 = var2.value;
                            var0 = var0 == var2;
                            if (var0) {
                                _fun68570_ip = 66;
                                continue _fun68570
                            }
                        case 57:
                            var2 = var2.layout;
                            var0 = !var2;
                        case 66:
                            if (var0) {
                                _fun68570_ip = 72;
                                continue _fun68570
                            }
                        case 69:
                            var0 = !var14;
                        case 72:
                            if (var0) {
                                _fun68570_ip = 227;
                                continue _fun68570
                            }
                        case 78:
                            var3 = _closure2_slot19;
                            var2 = global;
                            var7 = var2.Object;
                            var6 = var7.assign;
                            var4 = _closure2_slot17;
                            var5 = var4.value;
                            var4 = {};
                            var11 = var2.Object;
                            var10 = var11.assign;
                            var2 = _closure2_slot17;
                            var2 = var2.value;
                            var9 = var2.layout;
                            var8 = {};
                            var12 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var2 = 4;
                            var2 = var15[var2];
                            var13 = var12.bind(var13)(var2);
                            var12 = var13.clamp;
                            var1 = _closure2_slot17;
                            var1 = var1.value;
                            var1 = var1.layout;
                            var2 = var1.height;
                            var1 = 0;
                            var2 = var12.bind(var13)(var14, var1, var2);
                            var8.height = var2;
                            var2 = {};
                            var2 = var10.bind(var11)(var2, var9, var8);
                            var4.layout = var2;
                            var2 = {};
                            var2 = var6.bind(var7)(var2, var5, var4);
                            var3.value = var2;
                            var0 = 0;
                        case 227:
                            var0 = !var0;
                            return var0;
                    }
                };
                var16 = {};
                var16.lastSelection = var25;
                var16.input = var13;
                var16.layout = var21;
                var30 = var4[var14];
                var30 = var5.bind(var3)(var30);
                var30 = var30.clamp;
                var16.clamp = var30;
                var18.__closure = var16;
                var16 = 13796355899900.0;
                var18.__workletHash = var16;
                var16 = _closure1_slot16;
                var18.__initData = var16;
                var16 = new Array(3);
                var16[0] = var13;
                var16[1] = var25;
                var16[2] = var21;
                var30 = var17.bind(var3)(var18, var16);
                var _closure2_slot25 = var30;
                var18 = function() {
                    _fun68571: for (var _fun68571_ip = 0;;) switch (_fun68571_ip) {
                        case 0:
                            var0 = _closure2_slot19;
                            var2 = var0.value;
                            var3 = _closure2_slot25;
                            var0 = undefined;
                            var3 = var3.bind(var0)();
                            if (!var3) {
                                _fun68571_ip = 53;
                                continue _fun68571
                            }
                        case 25:
                            var4 = _closure2_slot23;
                            var3 = _closure2_slot10;
                            var3 = var3.value;
                            var3 = var4.bind(var0)(var3);
                            var1 = _closure2_slot19;
                            var1.value = var2;
                        case 53:
                            return var0;
                    }
                };
                var16 = {};
                var16.layout = var21;
                var16.updateLayoutFromSelection = var30;
                var16.performScrollWithPositionRestoration = var20;
                var16.position = var26;
                var18.__closure = var16;
                var16 = 13538739181123.0;
                var18.__workletHash = var16;
                var16 = _closure1_slot17;
                var18.__initData = var16;
                var16 = new Array(1);
                var16[0] = var20;
                var18 = var17.bind(var3)(var18, var16);
                var _closure2_slot26 = var18;
                var20 = function() {
                    var1 = _closure2_slot26;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var16 = {};
                var16.scrollFromCurrentPosition = var18;
                var20.__closure = var16;
                var16 = 15649864318735.0;
                var20.__workletHash = var16;
                var16 = _closure1_slot18;
                var20.__initData = var16;
                var16 = new Array(1);
                var16[0] = var18;
                var16 = var17.bind(var3)(var20, var16);
                var _closure2_slot27 = var16;
                var21 = _closure1_slot9;
                var20 = new Array(1);
                var20[0] = var16;
                var16 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.debounce;
                    var1 = _closure2_slot27;
                    var0 = 200;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var21 = var21.bind(var3)(var16, var20);
                var _closure2_slot28 = var21;
                var20 = function arg0() {
                    _fun68574: for (var _fun68574_ip = 0;;) switch (_fun68574_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure2_slot20;
                            var3 = var2.value;
                            var4 = null;
                            var5 = var4 == var3;
                            var2 = undefined;
                            var6 = undefined;
                            if (var5) {
                                _fun68574_ip = 34;
                                continue _fun68574
                            }
                        case 28:
                            var6 = var3.target;
                        case 34:
                            var3 = _closure2_slot20;
                            var5 = var3.value;
                            var7 = var4 == var5;
                            var3 = undefined;
                            if (var7) {
                                _fun68574_ip = 58;
                                continue _fun68574
                            }
                        case 52:
                            var3 = var5.selection;
                        case 58:
                            var5 = _closure2_slot20;
                            var5.value = var0;
                            var5 = var0.target;
                            if (!(var5 !== var6)) {
                                _fun68574_ip = 80;
                                continue _fun68574
                            }
                        case 78:
                            return var2;
                        case 80:
                            var5 = var0.selection;
                            var5 = var5.end;
                            var6 = var5.position;
                            var5 = var0.selection;
                            var5 = var5.start;
                            var5 = var5.position;
                            if (!(var6 === var5)) {
                                _fun68574_ip = 155;
                                continue _fun68574
                            }
                        case 116:
                            var5 = var4 == var3;
                            var4 = undefined;
                            if (var5) {
                                _fun68574_ip = 135;
                                continue _fun68574
                            }
                        case 125:
                            var3 = var3.end;
                            var4 = var3.y;
                        case 135:
                            var3 = var0.selection;
                            var3 = var3.end;
                            var3 = var3.y;
                            if (!(var4 === var3)) {
                                _fun68574_ip = 203;
                                continue _fun68574
                            }
                        case 155:
                            var3 = var0.selection;
                            var3 = var3.start;
                            var3 = var3.position;
                            var0 = var0.selection;
                            var0 = var0.end;
                            var0 = var0.position;
                            if (!(var3 === var0)) {
                                _fun68574_ip = 203;
                                continue _fun68574
                            }
                        case 191:
                            var0 = _closure2_slot28;
                            var0 = var0.bind(var2)();
                            var0 = undefined;
                            _fun68574_ip = 211;
                            continue _fun68574;
                        case 203:
                            var1 = _closure2_slot26;
                            var0 = var1.bind(var2)();
                        case 211:
                            return var0;
                    }
                };
                var16 = {};
                var16.lastSelection = var25;
                var16.scrollFromCurrentPosition = var18;
                var16.onChangeTextHandler = var21;
                var20.__closure = var16;
                var16 = 6285803105134.0;
                var20.__workletHash = var16;
                var16 = _closure1_slot19;
                var20.__initData = var16;
                var16 = new Array(2);
                var16[0] = var18;
                var16[1] = var21;
                var25 = var17.bind(var3)(var20, var16);
                var15 = var4[var15];
                var21 = var5.bind(var3)(var15);
                var20 = var21.useFocusedInputHandler;
                var16 = {};
                var16.onSelectionChange = var25;
                var15 = new Array(1);
                var15[0] = var25;
                var15 = var20.bind(var21)(var16, var15);
                var15 = 9;
                var15 = var4[var15];
                var21 = var5.bind(var3)(var15);
                var20 = var21.useSmoothKeyboardHandler;
                var16 = {};
                var15 = function arg0() {
                    _fun68575: for (var _fun68575_ip = 0;;) switch (_fun68575_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = _closure2_slot12;
                            var2 = var1.value;
                            var1 = var0.height;
                            var4 = var2 !== var1;
                            if (!var4) {
                                _fun68575_ip = 38;
                                continue _fun68575
                            }
                        case 27:
                            var2 = var0.height;
                            var1 = 0;
                            var4 = var2 > var1;
                        case 38:
                            var2 = _closure2_slot13;
                            var1 = var0.height;
                            var5 = 0;
                            var1 = var1 > var5;
                            if (!var1) {
                                _fun68575_ip = 69;
                                continue _fun68575
                            }
                        case 56:
                            var6 = _closure2_slot12;
                            var6 = var6.value;
                            var1 = var5 === var6;
                        case 69:
                            var2.value = var1;
                            var2 = var0.height;
                            var1 = _closure2_slot14;
                            var6 = var1.value;
                            var1 = var0.target;
                            var1 = var6 !== var1;
                            if (!var1) {
                                _fun68575_ip = 118;
                                continue _fun68575
                            }
                        case 102:
                            var7 = var0.target;
                            var6 = -1;
                            var1 = var6 !== var7;
                        case 118:
                            if (var1) {
                                _fun68575_ip = 124;
                                continue _fun68575
                            }
                        case 121:
                            var1 = var4;
                        case 124:
                            if (!var4) {
                                _fun68575_ip = 146;
                                continue _fun68575
                            }
                        case 127:
                            var7 = _closure2_slot15;
                            var6 = _closure2_slot12;
                            var6 = var6.value;
                            var7.value = var6;
                        case 146:
                            if (!(var5 === var2)) {
                                _fun68575_ip = 179;
                                continue _fun68575
                            }
                        case 150:
                            var2 = _closure2_slot15;
                            var2.value = var5;
                            var5 = _closure2_slot9;
                            var2 = _closure2_slot16;
                            var2 = var2.value;
                            var5.value = var2;
                        case 179:
                            var2 = _closure2_slot13;
                            var2 = var2.value;
                            if (var2) {
                                _fun68575_ip = 194;
                                continue _fun68575
                            }
                        case 191:
                            var2 = var4;
                        case 194:
                            if (var2) {
                                _fun68575_ip = 200;
                                continue _fun68575
                            }
                        case 197:
                            var2 = var1;
                        case 200:
                            if (!var2) {
                                _fun68575_ip = 237;
                                continue _fun68575
                            }
                        case 203:
                            var4 = _closure2_slot9;
                            var2 = _closure2_slot10;
                            var2 = var2.value;
                            var4.value = var2;
                            var4 = _closure2_slot12;
                            var2 = var0.height;
                            var4.value = var2;
                        case 237:
                            if (!var1) {
                                _fun68575_ip = 285;
                                continue _fun68575
                            }
                        case 240:
                            var4 = _closure2_slot14;
                            var2 = var0.target;
                            var4.value = var2;
                            var4 = _closure2_slot25;
                            var2 = undefined;
                            var2 = var4.bind(var2)();
                            var4 = _closure2_slot16;
                            var2 = _closure2_slot10;
                            var2 = var2.value;
                            var4.value = var2;
                        case 285:
                            if (!var1) {
                                _fun68575_ip = 300;
                                continue _fun68575
                            }
                        case 288:
                            var2 = _closure2_slot13;
                            var2 = var2.value;
                            var1 = !var2;
                        case 300:
                            if (!var1) {
                                _fun68575_ip = 341;
                                continue _fun68575
                            }
                        case 303:
                            var1 = _closure2_slot10;
                            var2 = var1.value;
                            var5 = _closure2_slot22;
                            var4 = var0.height;
                            var3 = undefined;
                            var0 = true;
                            var0 = var5.bind(var3)(var4, var0);
                            var0 = var2 + var0;
                            var1.value = var0;
                        case 341:
                            var0 = undefined;
                            return var0;
                    }
                };
                var25 = {};
                var25.keyboardHeight = var28;
                var25.keyboardWillAppear = var29;
                var25.tag = var33;
                var25.initialKeyboardSize = var32;
                var25.scrollPosition = var27;
                var25.scrollBeforeKeyboardMovement = var31;
                var25.position = var26;
                var25.updateLayoutFromSelection = var30;
                var25.maybeScroll = var24;
                var15.__closure = var25;
                var25 = 5127142727991.0;
                var15.__workletHash = var25;
                var25 = _closure1_slot20;
                var15.__initData = var25;
                var16.onStart = var15;
                var15 = function arg0() {
                    _fun68576: for (var _fun68576_ip = 0;;) switch (_fun68576_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure2_slot24;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var3 = _closure2_slot2;
                            if (!var3) {
                                _fun68576_ip = 36;
                                continue _fun68576
                            }
                        case 24:
                            var4 = _closure2_slot13;
                            var4 = var4.value;
                            var3 = !var4;
                        case 36:
                            if (var3) {
                                _fun68576_ip = 53;
                                continue _fun68576
                            }
                        case 39:
                            var2 = _closure2_slot22;
                            var1 = var1.height;
                            var1 = var2.bind(var0)(var1);
                        case 53:
                            return var0;
                    }
                };
                var25 = {};
                var25.syncKeyboardFrame = var22;
                var25.disableScrollOnKeyboardHide = var23;
                var25.keyboardWillAppear = var29;
                var25.maybeScroll = var24;
                var15.__closure = var25;
                var25 = 164622369678.0;
                var15.__workletHash = var25;
                var25 = _closure1_slot21;
                var15.__initData = var25;
                var16.onMove = var15;
                var15 = function arg0() {
                    var2 = arg0;
                    var3 = _closure2_slot12;
                    var1 = var2.height;
                    var3.value = var1;
                    var3 = _closure2_slot9;
                    var1 = _closure2_slot10;
                    var1 = var1.value;
                    var3.value = var1;
                    var1 = _closure2_slot24;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var25 = {};
                var25.keyboardHeight = var28;
                var25.scrollPosition = var27;
                var25.position = var26;
                var25.syncKeyboardFrame = var22;
                var15.__closure = var25;
                var25 = 5871991401637.0;
                var15.__workletHash = var25;
                var25 = _closure1_slot22;
                var15.__initData = var25;
                var16.onEnd = var15;
                var15 = new Array(3);
                var15[0] = var24;
                var15[1] = var23;
                var15[2] = var22;
                var15 = var20.bind(var21)(var16, var15);
                var16 = _closure1_slot4;
                var15 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun68579: for (var _fun68579_ip = 0;;) switch (_fun68579_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun68579_ip = 126;
                                    continue _fun68579
                                }
                            case 7:
                                var1 = _closure2_slot18;
                                var2 = undefined;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 24);
                            case 22:
                                return var1;
                            case 24:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun68579_ip = 123;
                                    continue _fun68579
                                }
                            case 30:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 4;
                                var3 = var5[var3];
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.runOnUI;
                                var3 = function() {
                                    var1 = _closure2_slot26;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)();
                                    return var0;
                                };
                                var7 = {};
                                var8 = _closure2_slot26;
                                var7.scrollFromCurrentPosition = var8;
                                var3.__closure = var7;
                                var7 = 15924950418969.0;
                                var3.__workletHash = var7;
                                var6 = _closure1_slot23;
                                var3.__initData = var6;
                                var3 = var4.bind(var5)(var3);
                                var3 = var3.bind(var2)();
                                return var2;
                            case 123:
                                return var1;
                            case 126:
                                return var0;
                        }
                    };
                    return var0;
                };
                var16 = var16.bind(var3)(var15);
                var15 = new Array(2);
                var15[0] = var19;
                var15[1] = var18;
                var15 = var17.bind(var3)(var16, var15);
                var _closure2_slot29 = var15;
                var19 = _closure1_slot8;
                var17 = new Array(1);
                var17[0] = var15;
                var16 = arg1;
                var15 = function() { // Environment: var1
                    _fun68581: for (var _fun68581_ip = 0;;) switch (_fun68581_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            var3 = var0.current;
                            var2 = {};
                            if (var3) {
                                _fun68581_ip = 22;
                                continue _fun68581
                            }
                        case 17:
                            var4 = var2;
                            _fun68581_ip = 41;
                            continue _fun68581;
                        case 22:
                            var0 = global;
                            var1 = var0.Object;
                            var0 = var1.assign;
                            var4 = var0.bind(var1)(var2, var3);
                        case 41:
                            var0 = global;
                            var3 = var0.Object;
                            var2 = var3.assign;
                            var1 = {};
                            var0 = function() {
                                var1 = _closure2_slot29;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var1.assureFocusedInputVisible = var0;
                            var0 = {};
                            var0 = var2.bind(var3)(var0, var4, var1);
                            return var0;
                    }
                };
                var15 = var19.bind(var3)(var16, var15, var17);
                var16 = _closure1_slot7;
                var15 = new Array(1);
                var15[0] = var6;
                var6 = function() { // Environment: var1
                    var1 = _closure2_slot29;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var6 = var16.bind(var3)(var6, var15);
                var6 = var4[var14];
                var17 = var5.bind(var3)(var6);
                var16 = var17.useAnimatedReaction;
                var15 = function() {
                    var0 = _closure2_slot17;
                    var0 = var0.value;
                    return var0;
                };
                var6 = {};
                var6.input = var13;
                var15.__closure = var6;
                var6 = 1061750841044.0;
                var15.__workletHash = var6;
                var6 = _closure1_slot24;
                var15.__initData = var6;
                var13 = function arg0, arg1() {
                    _fun68585: for (var _fun68585_ip = 0;;) switch (_fun68585_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var2 = null;
                            var1 = var2 == var5;
                            var0 = undefined;
                            var3 = undefined;
                            if (var1) {
                                _fun68585_ip = 25;
                                continue _fun68585
                            }
                        case 19:
                            var3 = var5.target;
                        case 25:
                            var6 = var2 == var4;
                            var1 = undefined;
                            if (var6) {
                                _fun68585_ip = 40;
                                continue _fun68585
                            }
                        case 34:
                            var1 = var4.target;
                        case 40:
                            var1 = var3 === var1;
                            if (!var1) {
                                _fun68585_ip = 91;
                                continue _fun68585
                            }
                        case 47:
                            var6 = var2 == var5;
                            var3 = undefined;
                            if (var6) {
                                _fun68585_ip = 67;
                                continue _fun68585
                            }
                        case 56:
                            var5 = var5.layout;
                            var3 = var5.height;
                        case 67:
                            var5 = var2 == var4;
                            var2 = undefined;
                            if (var5) {
                                _fun68585_ip = 87;
                                continue _fun68585
                            }
                        case 76:
                            var4 = var4.layout;
                            var2 = var4.height;
                        case 87:
                            var1 = var3 !== var2;
                        case 91:
                            if (!var1) {
                                _fun68585_ip = 105;
                                continue _fun68585
                            }
                        case 94:
                            var1 = _closure2_slot26;
                            var1 = var1.bind(var0)();
                        case 105:
                            return var0;
                    }
                };
                var6 = {};
                var6.scrollFromCurrentPosition = var18;
                var13.__closure = var6;
                var6 = 17105719720027.0;
                var13.__workletHash = var6;
                var6 = _closure1_slot25;
                var13.__initData = var6;
                var6 = new Array(0);
                var6 = var16.bind(var17)(var15, var13, var6);
                var4 = var4[var14];
                var6 = var5.bind(var3)(var4);
                var5 = var6.useAnimatedStyle;
                var4 = function() {
                    _fun68586: for (var _fun68586_ip = 0;;) switch (_fun68586_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun68586_ip = 14;
                                continue _fun68586
                            }
                        case 10:
                            var0 = {};
                            _fun68586_ip = 40;
                            continue _fun68586;
                        case 14:
                            var1 = {};
                            var2 = _closure2_slot11;
                            var3 = var2.value;
                            var2 = 1;
                            var2 = var3 + var2;
                            var1.paddingBottom = var2;
                            var0 = var1;
                        case 40:
                            return var0;
                    }
                };
                var1 = {};
                var1.enabled = var9;
                var1.currentKeyboardFrameHeight = var12;
                var4.__closure = var1;
                var1 = 9334060441125.0;
                var4.__workletHash = var1;
                var1 = _closure1_slot26;
                var4.__initData = var1;
                var1 = new Array(1);
                var1[0] = var9;
                var13 = var5.bind(var6)(var4, var1);
                var1 = _closure1_slot12;
                var4 = global;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var4.ref = var0;
                var0 = {};
                var12 = 16;
                var0.scrollEventThrottle = var12;
                var0.onLayout = var8;
                var8 = new Array(2);
                var8[0] = var11;
                if (!var9) {
                    _fun68565_ip = 2001;
                    continue _fun68565
                }
            case 1963:
                var12 = _closure1_slot11;
                var11 = _closure1_slot1;
                var10 = _closure1_slot2;
                var10 = var10[var14];
                var10 = var11.bind(var3)(var10);
                var11 = var10.View;
                var10 = {};
                var10.style = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 2001:
                var8[1] = var9;
                var0.children = var8;
                var0 = var5.bind(var6)(var4, var7, var0);
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var1 = var3.bind(var0)(var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 29, 31, 33, 3721, 8548, 8532, 8528, 8549, 8550]);