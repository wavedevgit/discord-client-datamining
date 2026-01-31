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
    var4 = 1;
    var3 = var6[var4];
    var8 = var5.bind(var0)(var3);
    var3 = var8.forwardRef;
    var9 = var8.useCallback;
    var _closure1_slot5 = var9;
    var8 = var8.useMemo;
    var _closure1_slot6 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.findNodeHandle;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var5 = var4.jsx;
    var _closure1_slot8 = var5;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx1(e,animated=false){const{enabled,layout,scrollViewTarget,height,keyboardHeight,bottomOffset,interpolate,initialKeyboardSize,scrollDistanceWithRespectToSnapPoints,scrollPosition,snapToOffsets,scrollTo,scrollViewAnimatedRef}=this.__closure;var _layout$value,_layout$value2,_layout$value3;if(!enabled){return 0;}if(((_layout$value=layout.value)===null||_layout$value===void 0?void 0:_layout$value.parentScrollViewTarget)!==scrollViewTarget.value){return 0;}const visibleRect=height-keyboardHeight.value;const absoluteY=((_layout$value2=layout.value)===null||_layout$value2===void 0?void 0:_layout$value2.layout.absoluteY)||0;const inputHeight=((_layout$value3=layout.value)===null||_layout$value3===void 0?void 0:_layout$value3.layout.height)||0;const point=absoluteY+inputHeight;if(visibleRect-point<=bottomOffset){const relativeScrollTo=keyboardHeight.value-(height-point)+bottomOffset;const interpolatedScrollTo=interpolate(e,[initialKeyboardSize.value,keyboardHeight.value],[0,scrollDistanceWithRespectToSnapPoints(relativeScrollTo+scrollPosition.value,snapToOffsets)-scrollPosition.value]);const targetScrollY=Math.max(interpolatedScrollTo,0)+scrollPosition.value;scrollTo(scrollViewAnimatedRef,0,targetScrollY,animated);return interpolatedScrollTo;}if(absoluteY<0){const positionOnScreen=visibleRect-inputHeight-bottomOffset;const topOfScreen=scrollPosition.value+absoluteY;scrollTo(scrollViewAnimatedRef,0,topOfScreen-positionOnScreen,animated);}return 0;}';
    var4.code = var5;
    var _closure1_slot10 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx2(e){const{interpolate,keyboardHeight,extraKeyboardSpace,currentKeyboardFrameHeight}=this.__closure;const keyboardFrame=interpolate(e.height,[0,keyboardHeight.value],[0,keyboardHeight.value+extraKeyboardSpace]);currentKeyboardFrameHeight.value=keyboardFrame;}';
    var4.code = var5;
    var _closure1_slot11 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx3(customHeight){const{scrollPosition,layout,input,position,maybeScroll,keyboardHeight}=this.__closure;var _input$value;const prevScrollPosition=scrollPosition.value;const prevLayout=layout.value;if(!((_input$value=input.value)!==null&&_input$value!==void 0&&_input$value.layout)){return;}layout.value={...input.value,layout:{...input.value.layout,height:customHeight!==null&&customHeight!==void 0?customHeight:input.value.layout.height}};scrollPosition.value=position.value;maybeScroll(keyboardHeight.value,true);scrollPosition.value=prevScrollPosition;layout.value=prevLayout;}';
    var4.code = var5;
    var _closure1_slot12 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx4(){const{layout,input,scrollFromCurrentPosition}=this.__closure;var _layout$value,_input$value;if(((_layout$value=layout.value)===null||_layout$value===void 0?void 0:_layout$value.layout.height)!==((_input$value=input.value)===null||_input$value===void 0?void 0:_input$value.layout.height)){return;}scrollFromCurrentPosition();}';
    var4.code = var5;
    var _closure1_slot13 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx5(e){const{scrollFromCurrentPosition}=this.__closure;if(e.selection.start.position!==e.selection.end.position){scrollFromCurrentPosition(e.selection.end.y);}}';
    var4.code = var5;
    var _closure1_slot14 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx6(e){const{keyboardHeight,keyboardWillAppear,tag,initialKeyboardSize,scrollPosition,scrollBeforeKeyboardMovement,position,layout,input,maybeScroll}=this.__closure;const keyboardWillChangeSize=keyboardHeight.value!==e.height&&e.height>0;keyboardWillAppear.value=e.height>0&&keyboardHeight.value===0;const keyboardWillHide=e.height===0;const focusWasChanged=tag.value!==e.target&&e.target!==-1||keyboardWillChangeSize;if(keyboardWillChangeSize){initialKeyboardSize.value=keyboardHeight.value;}if(keyboardWillHide){initialKeyboardSize.value=0;scrollPosition.value=scrollBeforeKeyboardMovement.value;}if(keyboardWillAppear.value||keyboardWillChangeSize||focusWasChanged){scrollPosition.value=position.value;keyboardHeight.value=e.height;}if(focusWasChanged){tag.value=e.target;layout.value=input.value;scrollBeforeKeyboardMovement.value=position.value;}if(focusWasChanged&&!keyboardWillAppear.value){position.value+=maybeScroll(e.height,true);}}';
    var4.code = var5;
    var _closure1_slot15 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx7(e){const{syncKeyboardFrame,disableScrollOnKeyboardHide,keyboardWillAppear,maybeScroll}=this.__closure;syncKeyboardFrame(e);if(!disableScrollOnKeyboardHide||keyboardWillAppear.value){maybeScroll(e.height);}}';
    var4.code = var5;
    var _closure1_slot16 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx8(e){const{keyboardHeight,scrollPosition,position,syncKeyboardFrame}=this.__closure;keyboardHeight.value=e.height;scrollPosition.value=position.value;syncKeyboardFrame(e);}';
    var4.code = var5;
    var _closure1_slot17 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx9(){const{input}=this.__closure;return input.value;}';
    var4.code = var5;
    var _closure1_slot18 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx10(current,previous){const{layout,input,scrollPosition,maybeScroll,keyboardHeight}=this.__closure;if((current===null||current===void 0?void 0:current.target)===(previous===null||previous===void 0?void 0:previous.target)&&(current===null||current===void 0?void 0:current.layout.height)!==(previous===null||previous===void 0?void 0:previous.layout.height)){const prevLayout=layout.value;layout.value=input.value;scrollPosition.value+=maybeScroll(keyboardHeight.value,true);layout.value=prevLayout;}}';
    var4.code = var5;
    var _closure1_slot19 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx11(){const{enabled,currentKeyboardFrameHeight}=this.__closure;return enabled?{paddingBottom:currentKeyboardFrameHeight.value+1}:{};}';
    var4.code = var5;
    var _closure1_slot20 = var4;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun68355: for (var _fun68355_ip = 0;;) switch (_fun68355_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var11 = var5.children;
                var6 = var5.onLayout;
                var _closure2_slot1 = var6;
                var0 = var5.bottomOffset;
                var8 = 0;
                var3 = undefined;
                var30 = 0;
                if (!(var3 !== var0)) {
                    _fun68355_ip = 46;
                    continue _fun68355
                }
            case 43:
                var30 = var0;
            case 46:
                var _closure2_slot2 = var30;
                var0 = var5.disableScrollOnKeyboardHide;
                var23 = var3 !== var0;
                if (!var23) {
                    _fun68355_ip = 66;
                    continue _fun68355
                }
            case 63:
                var23 = var0;
            case 66:
                var _closure2_slot3 = var23;
                var0 = var5.enabled;
                var12 = var3 === var0;
                if (var12) {
                    _fun68355_ip = 85;
                    continue _fun68355
                }
            case 82:
                var12 = var0;
            case 85:
                var _closure2_slot4 = var12;
                var0 = var5.extraKeyboardSpace;
                var16 = 0;
                if (!(var3 !== var0)) {
                    _fun68355_ip = 104;
                    continue _fun68355
                }
            case 101:
                var16 = var0;
            case 104:
                var _closure2_slot5 = var16;
                var2 = var5.ScrollViewComponent;
                if (!(var3 === var2)) {
                    _fun68355_ip = 149;
                    continue _fun68355
                }
            case 120:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 4;
                var0 = var7[var0];
                var0 = var4.bind(var3)(var0);
                var2 = var0.ScrollView;
            case 149:
                var17 = var5.snapToOffsets;
                var _closure2_slot6 = var17;
                var4 = _closure1_slot4;
                var0 = _closure1_slot3;
                var7 = var4.bind(var3)(var5, var0);
                var5 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 4;
                var0 = var13[var9];
                var4 = var5.bind(var3)(var0);
                var0 = var4.useAnimatedRef;
                var31 = var0.bind(var4)();
                var _closure2_slot7 = var31;
                var0 = var13[var9];
                var4 = var5.bind(var3)(var0);
                var0 = var4.useSharedValue;
                var15 = null;
                var32 = var0.bind(var4)(var15);
                var _closure2_slot8 = var32;
                var0 = var13[var9];
                var4 = var5.bind(var3)(var0);
                var0 = var4.useSharedValue;
                var20 = var0.bind(var4)(var8);
                var _closure2_slot9 = var20;
                var0 = var13[var9];
                var4 = var5.bind(var3)(var0);
                var0 = var4.useScrollViewOffset;
                var25 = var0.bind(var4)(var31);
                var _closure2_slot10 = var25;
                var0 = var13[var9];
                var4 = var5.bind(var3)(var0);
                var0 = var4.useSharedValue;
                var14 = var0.bind(var4)(var8);
                var _closure2_slot11 = var14;
                var0 = var13[var9];
                var4 = var5.bind(var3)(var0);
                var0 = var4.useSharedValue;
                var18 = var0.bind(var4)(var8);
                var _closure2_slot12 = var18;
                var0 = var13[var9];
                var19 = var5.bind(var3)(var0);
                var4 = var19.useSharedValue;
                var0 = false;
                var26 = var4.bind(var19)(var0);
                var _closure2_slot13 = var26;
                var0 = var13[var9];
                var19 = var5.bind(var3)(var0);
                var4 = var19.useSharedValue;
                var0 = -1;
                var29 = var4.bind(var19)(var0);
                var _closure2_slot14 = var29;
                var0 = var13[var9];
                var4 = var5.bind(var3)(var0);
                var0 = var4.useSharedValue;
                var28 = var0.bind(var4)(var8);
                var _closure2_slot15 = var28;
                var0 = var13[var9];
                var4 = var5.bind(var3)(var0);
                var0 = var4.useSharedValue;
                var27 = var0.bind(var4)(var8);
                var _closure2_slot16 = var27;
                var4 = 5;
                var0 = var13[var4];
                var8 = var5.bind(var3)(var0);
                var0 = var8.useReanimatedFocusedInput;
                var0 = var0.bind(var8)();
                var21 = var0.input;
                var _closure2_slot17 = var21;
                var0 = var13[var9];
                var8 = var5.bind(var3)(var0);
                var0 = var8.useSharedValue;
                var22 = var0.bind(var8)(var15);
                var _closure2_slot18 = var22;
                var0 = var13[var4];
                var8 = var5.bind(var3)(var0);
                var0 = var8.useWindowDimensions;
                var0 = var0.bind(var8)();
                var19 = var0.height;
                var _closure2_slot19 = var19;
                var24 = _closure1_slot5;
                var8 = function(arg0) { // Environment: var1
                    _fun68356: for (var _fun68356_ip = 0;;) switch (_fun68356_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot0;
                            var3 = 'function';
                            var1 = typeof var1;
                            if (!(var3 !== var1)) {
                                _fun68356_ip = 40;
                                continue _fun68356
                            }
                        case 21:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun68356_ip = 51;
                                continue _fun68356
                            }
                        case 28:
                            var1 = _closure2_slot0;
                            var1.current = var2;
                            _fun68356_ip = 51;
                            continue _fun68356;
                        case 40:
                            var3 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                        case 51:
                            var1 = _closure2_slot7;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var0 = new Array(0);
                var0 = var24.bind(var3)(var8, var0);
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function(arg0) { // Environment: var1
                    _fun68357: for (var _fun68357_ip = 0;;) switch (_fun68357_ip) {
                        case 0:
                            var3 = _closure2_slot8;
                            var4 = _closure1_slot7;
                            var0 = _closure2_slot7;
                            var2 = var0.current;
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var3.value = var2;
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun68357_ip = 58;
                                continue _fun68357
                            }
                        case 46:
                            var2 = _closure2_slot1;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                        case 58:
                            return var0;
                    }
                };
                var8 = var24.bind(var3)(var6, var8);
                var15 = function arg0() {
                    _fun68358: for (var _fun68358_ip = 0;;) switch (_fun68358_ip) {
                        case 0:
                            var7 = undefined;
                            var1 = undefined;
                            var2 = arguments.length;
                            var0 = 1;
                            var6 = var2 > var0;
                            if (!var6) {
                                _fun68358_ip = 25;
                                continue _fun68358
                            }
                        case 17:
                            var2 = arguments[var0];
                            var6 = var7 !== var2;
                        case 25:
                            if (!var6) {
                                _fun68358_ip = 32;
                                continue _fun68358
                            }
                        case 28:
                            var6 = arguments[var0];
                        case 32:
                            var0 = _closure2_slot4;
                            if (var0) {
                                _fun68358_ip = 46;
                                continue _fun68358
                            }
                        case 42:
                            var0 = 0;
                            return var0;
                        case 46:
                            var0 = _closure2_slot18;
                            var0 = var0.value;
                            var2 = null;
                            var4 = var2 == var0;
                            var3 = undefined;
                            if (var4) {
                                _fun68358_ip = 74;
                                continue _fun68358
                            }
                        case 66:
                            var3 = var0.parentScrollViewTarget;
                        case 74:
                            var0 = _closure2_slot8;
                            var0 = var0.value;
                            if (!(var3 === var0)) {
                                _fun68358_ip = 507;
                                continue _fun68358
                            }
                        case 90:
                            var3 = _closure2_slot19;
                            var0 = _closure2_slot12;
                            var0 = var0.value;
                            var5 = var3 - var0;
                            var0 = _closure2_slot18;
                            var0 = var0.value;
                            var3 = var2 == var0;
                            var4 = undefined;
                            if (var3) {
                                _fun68358_ip = 137;
                                continue _fun68358
                            }
                        case 125:
                            var0 = var0.layout;
                            var4 = var0.absoluteY;
                        case 137:
                            if (var4) {
                                _fun68358_ip = 142;
                                continue _fun68358
                            }
                        case 140:
                            var4 = 0;
                        case 142:
                            var0 = _closure2_slot18;
                            var0 = var0.value;
                            var3 = var2 == var0;
                            var2 = undefined;
                            if (var3) {
                                _fun68358_ip = 171;
                                continue _fun68358
                            }
                        case 160:
                            var0 = var0.layout;
                            var2 = var0.height;
                        case 171:
                            if (var2) {
                                _fun68358_ip = 176;
                                continue _fun68358
                            }
                        case 174:
                            var2 = 0;
                        case 176:
                            var3 = var4 + var2;
                            var8 = var5 - var3;
                            var0 = _closure2_slot2;
                            if (!(!(var8 <= var0))) {
                                _fun68358_ip = 274;
                                continue _fun68358
                            }
                        case 192:
                            var0 = 0;
                            if (!(var4 < var0)) {
                                _fun68358_ip = 272;
                                continue _fun68358
                            }
                        case 198:
                            var5 = var5 - var2;
                            var2 = _closure2_slot2;
                            var9 = var5 - var2;
                            var2 = _closure2_slot9;
                            var2 = var2.value;
                            var2 = var2 + var4;
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 4;
                            var4 = var8[var4];
                            var8 = var5.bind(var7)(var4);
                            var5 = var8.scrollTo;
                            var16 = _closure2_slot7;
                            var14 = var2 - var9;
                            var17 = var8;
                            var15 = 0;
                            var13 = var6;
                            var2 = var17[var5](var16, var15, var14, var13, var12);
                        case 272:
                            return var0;
                        case 274:
                            var0 = _closure2_slot12;
                            var2 = var0.value;
                            var0 = _closure2_slot19;
                            var0 = var0 - var3;
                            var2 = var2 - var0;
                            var0 = _closure2_slot2;
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
                            var0 = 6;
                            var0 = var8[var0];
                            var12 = var3.bind(var7)(var0);
                            var11 = var12.scrollDistanceWithRespectToSnapPoints;
                            var0 = _closure2_slot9;
                            var0 = var0.value;
                            var4 = var4 + var0;
                            var0 = _closure2_slot6;
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
                            var16 = _closure2_slot7;
                            var17 = var3;
                            var15 = 0;
                            var13 = var6;
                            var1 = var17[var2](var16, var15, var14, var13, var12);
                            return var0;
                        case 507:
                            var0 = 0;
                            return var0;
                    }
                };
                var6 = {};
                var6.enabled = var12;
                var6.layout = var22;
                var6.scrollViewTarget = var32;
                var6.height = var19;
                var6.keyboardHeight = var18;
                var6.bottomOffset = var30;
                var32 = var13[var9];
                var32 = var5.bind(var3)(var32);
                var32 = var32.interpolate;
                var6.interpolate = var32;
                var6.initialKeyboardSize = var28;
                var32 = 6;
                var32 = var13[var32];
                var32 = var5.bind(var3)(var32);
                var32 = var32.scrollDistanceWithRespectToSnapPoints;
                var6.scrollDistanceWithRespectToSnapPoints = var32;
                var6.scrollPosition = var20;
                var6.snapToOffsets = var17;
                var32 = var13[var9];
                var32 = var5.bind(var3)(var32);
                var32 = var32.scrollTo;
                var6.scrollTo = var32;
                var6.scrollViewAnimatedRef = var31;
                var15.__closure = var6;
                var6 = 1094884089692.0;
                var15.__workletHash = var6;
                var6 = _closure1_slot10;
                var15.__initData = var6;
                var6 = new Array(4);
                var6[0] = var30;
                var6[1] = var12;
                var6[2] = var19;
                var6[3] = var17;
                var19 = var24.bind(var3)(var15, var6);
                var _closure2_slot20 = var19;
                var15 = function arg0() {
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
                    var2 = _closure2_slot5;
                    var7 = var7 + var2;
                    var2 = [0];
                    var2[1] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1 = _closure2_slot11;
                    var1.value = var2;
                    return var0;
                };
                var6 = {};
                var17 = var13[var9];
                var17 = var5.bind(var3)(var17);
                var17 = var17.interpolate;
                var6.interpolate = var17;
                var6.keyboardHeight = var18;
                var6.extraKeyboardSpace = var16;
                var6.currentKeyboardFrameHeight = var14;
                var15.__closure = var6;
                var6 = 12778300613460.0;
                var15.__workletHash = var6;
                var6 = _closure1_slot11;
                var15.__initData = var6;
                var6 = new Array(1);
                var6[0] = var16;
                var17 = var24.bind(var3)(var15, var6);
                var _closure2_slot21 = var17;
                var15 = function arg0() {
                    _fun68360: for (var _fun68360_ip = 0;;) switch (_fun68360_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot9;
                            var3 = var1.value;
                            var1 = _closure2_slot18;
                            var1 = var1.value;
                            var4 = _closure2_slot17;
                            var5 = var4.value;
                            var13 = null;
                            var4 = var13 != var5;
                            if (!var4) {
                                _fun68360_ip = 48;
                                continue _fun68360
                            }
                        case 42:
                            var4 = var5.layout;
                        case 48:
                            if (!var4) {
                                _fun68360_ip = 229;
                                continue _fun68360
                            }
                        case 54:
                            var4 = _closure2_slot18;
                            var9 = global;
                            var8 = var9.Object;
                            var7 = var8.assign;
                            var5 = _closure2_slot17;
                            var6 = var5.value;
                            var5 = {};
                            var12 = var9.Object;
                            var11 = var12.assign;
                            var9 = _closure2_slot17;
                            var9 = var9.value;
                            var10 = var9.layout;
                            var9 = {};
                            if (!(var13 == var2)) {
                                _fun68360_ip = 134;
                                continue _fun68360
                            }
                        case 114:
                            var13 = _closure2_slot17;
                            var13 = var13.value;
                            var13 = var13.layout;
                            var2 = var13.height;
                        case 134:
                            var9.height = var2;
                            var2 = {};
                            var2 = var11.bind(var12)(var2, var10, var9);
                            var5.layout = var2;
                            var2 = {};
                            var2 = var7.bind(var8)(var2, var6, var5);
                            var4.value = var2;
                            var4 = _closure2_slot9;
                            var2 = _closure2_slot10;
                            var2 = var2.value;
                            var4.value = var2;
                            var6 = _closure2_slot20;
                            var2 = _closure2_slot12;
                            var5 = var2.value;
                            var4 = undefined;
                            var2 = true;
                            var2 = var6.bind(var4)(var5, var2);
                            var2 = _closure2_slot9;
                            var2.value = var3;
                            var0 = _closure2_slot18;
                            var0.value = var1;
                        case 229:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = {};
                var6.scrollPosition = var20;
                var6.layout = var22;
                var6.input = var21;
                var6.position = var25;
                var6.maybeScroll = var19;
                var6.keyboardHeight = var18;
                var15.__closure = var6;
                var6 = 12153270857300.0;
                var15.__workletHash = var6;
                var6 = _closure1_slot12;
                var15.__initData = var6;
                var6 = new Array(1);
                var6[0] = var19;
                var30 = var24.bind(var3)(var15, var6);
                var _closure2_slot22 = var30;
                var15 = function() {
                    _fun68361: for (var _fun68361_ip = 0;;) switch (_fun68361_ip) {
                        case 0:
                            var0 = _closure2_slot18;
                            var4 = var0.value;
                            var2 = null;
                            var5 = var2 == var4;
                            var0 = undefined;
                            var3 = undefined;
                            if (var5) {
                                _fun68361_ip = 36;
                                continue _fun68361
                            }
                        case 25:
                            var4 = var4.layout;
                            var3 = var4.height;
                        case 36:
                            var4 = _closure2_slot17;
                            var4 = var4.value;
                            var5 = var2 == var4;
                            var2 = undefined;
                            if (var5) {
                                _fun68361_ip = 65;
                                continue _fun68361
                            }
                        case 54:
                            var4 = var4.layout;
                            var2 = var4.height;
                        case 65:
                            if (!(var3 === var2)) {
                                _fun68361_ip = 77;
                                continue _fun68361
                            }
                        case 69:
                            var1 = _closure2_slot22;
                            var1 = var1.bind(var0)();
                        case 77:
                            return var0;
                    }
                };
                var6 = {};
                var6.layout = var22;
                var6.input = var21;
                var6.scrollFromCurrentPosition = var30;
                var15.__closure = var6;
                var6 = 3296847946183.0;
                var15.__workletHash = var6;
                var6 = _closure1_slot13;
                var15.__initData = var6;
                var6 = new Array(1);
                var6[0] = var30;
                var6 = var24.bind(var3)(var15, var6);
                var _closure2_slot23 = var6;
                var16 = function arg0() {
                    _fun68362: for (var _fun68362_ip = 0;;) switch (_fun68362_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.selection;
                            var1 = var1.start;
                            var2 = var1.position;
                            var1 = var0.selection;
                            var1 = var1.end;
                            var1 = var1.position;
                            if (!(var2 !== var1)) {
                                _fun68362_ip = 69;
                                continue _fun68362
                            }
                        case 39:
                            var2 = _closure2_slot22;
                            var0 = var0.selection;
                            var0 = var0.end;
                            var1 = var0.y;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 69:
                            var0 = undefined;
                            return var0;
                    }
                };
                var15 = {};
                var15.scrollFromCurrentPosition = var30;
                var16.__closure = var15;
                var15 = 14864837076722.0;
                var16.__workletHash = var15;
                var15 = _closure1_slot14;
                var16.__initData = var15;
                var15 = new Array(1);
                var15[0] = var30;
                var24 = var24.bind(var3)(var16, var15);
                var16 = _closure1_slot6;
                var15 = new Array(1);
                var15[0] = var6;
                var6 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.debounce;
                    var1 = _closure2_slot23;
                    var0 = 200;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var30 = var16.bind(var3)(var6, var15);
                var4 = var13[var4];
                var16 = var5.bind(var3)(var4);
                var15 = var16.useFocusedInputHandler;
                var6 = {};
                var6.onChangeText = var30;
                var6.onSelectionChange = var24;
                var4 = new Array(2);
                var4[0] = var30;
                var4[1] = var24;
                var4 = var15.bind(var16)(var6, var4);
                var4 = 7;
                var4 = var13[var4];
                var16 = var5.bind(var3)(var4);
                var15 = var16.useSmoothKeyboardHandler;
                var6 = {};
                var4 = function arg0() {
                    _fun68364: for (var _fun68364_ip = 0;;) switch (_fun68364_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = _closure2_slot12;
                            var2 = var1.value;
                            var1 = var0.height;
                            var4 = var2 !== var1;
                            if (!var4) {
                                _fun68364_ip = 38;
                                continue _fun68364
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
                                _fun68364_ip = 69;
                                continue _fun68364
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
                                _fun68364_ip = 118;
                                continue _fun68364
                            }
                        case 102:
                            var7 = var0.target;
                            var6 = -1;
                            var1 = var6 !== var7;
                        case 118:
                            if (var1) {
                                _fun68364_ip = 124;
                                continue _fun68364
                            }
                        case 121:
                            var1 = var4;
                        case 124:
                            if (!var4) {
                                _fun68364_ip = 146;
                                continue _fun68364
                            }
                        case 127:
                            var7 = _closure2_slot15;
                            var6 = _closure2_slot12;
                            var6 = var6.value;
                            var7.value = var6;
                        case 146:
                            if (!(var5 === var2)) {
                                _fun68364_ip = 179;
                                continue _fun68364
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
                                _fun68364_ip = 194;
                                continue _fun68364
                            }
                        case 191:
                            var2 = var4;
                        case 194:
                            if (var2) {
                                _fun68364_ip = 200;
                                continue _fun68364
                            }
                        case 197:
                            var2 = var1;
                        case 200:
                            if (!var2) {
                                _fun68364_ip = 237;
                                continue _fun68364
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
                                _fun68364_ip = 294;
                                continue _fun68364
                            }
                        case 240:
                            var4 = _closure2_slot14;
                            var2 = var0.target;
                            var4.value = var2;
                            var4 = _closure2_slot18;
                            var2 = _closure2_slot17;
                            var2 = var2.value;
                            var4.value = var2;
                            var4 = _closure2_slot16;
                            var2 = _closure2_slot10;
                            var2 = var2.value;
                            var4.value = var2;
                        case 294:
                            if (!var1) {
                                _fun68364_ip = 309;
                                continue _fun68364
                            }
                        case 297:
                            var2 = _closure2_slot13;
                            var2 = var2.value;
                            var1 = !var2;
                        case 309:
                            if (!var1) {
                                _fun68364_ip = 350;
                                continue _fun68364
                            }
                        case 312:
                            var1 = _closure2_slot10;
                            var2 = var1.value;
                            var5 = _closure2_slot20;
                            var4 = var0.height;
                            var3 = undefined;
                            var0 = true;
                            var0 = var5.bind(var3)(var4, var0);
                            var0 = var2 + var0;
                            var1.value = var0;
                        case 350:
                            var0 = undefined;
                            return var0;
                    }
                };
                var24 = {};
                var24.keyboardHeight = var18;
                var24.keyboardWillAppear = var26;
                var24.tag = var29;
                var24.initialKeyboardSize = var28;
                var24.scrollPosition = var20;
                var24.scrollBeforeKeyboardMovement = var27;
                var24.position = var25;
                var24.layout = var22;
                var24.input = var21;
                var24.maybeScroll = var19;
                var4.__closure = var24;
                var24 = 5242412939465.0;
                var4.__workletHash = var24;
                var24 = _closure1_slot15;
                var4.__initData = var24;
                var6.onStart = var4;
                var4 = function arg0() {
                    _fun68365: for (var _fun68365_ip = 0;;) switch (_fun68365_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure2_slot21;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var3 = _closure2_slot3;
                            if (!var3) {
                                _fun68365_ip = 36;
                                continue _fun68365
                            }
                        case 24:
                            var4 = _closure2_slot13;
                            var4 = var4.value;
                            var3 = !var4;
                        case 36:
                            if (var3) {
                                _fun68365_ip = 53;
                                continue _fun68365
                            }
                        case 39:
                            var2 = _closure2_slot20;
                            var1 = var1.height;
                            var1 = var2.bind(var0)(var1);
                        case 53:
                            return var0;
                    }
                };
                var24 = {};
                var24.syncKeyboardFrame = var17;
                var24.disableScrollOnKeyboardHide = var23;
                var24.keyboardWillAppear = var26;
                var24.maybeScroll = var19;
                var4.__closure = var24;
                var24 = 14247955562368.0;
                var4.__workletHash = var24;
                var24 = _closure1_slot16;
                var4.__initData = var24;
                var6.onMove = var4;
                var4 = function arg0() {
                    var2 = arg0;
                    var3 = _closure2_slot12;
                    var1 = var2.height;
                    var3.value = var1;
                    var3 = _closure2_slot9;
                    var1 = _closure2_slot10;
                    var1 = var1.value;
                    var3.value = var1;
                    var1 = _closure2_slot21;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var24 = {};
                var24.keyboardHeight = var18;
                var24.scrollPosition = var20;
                var24.position = var25;
                var24.syncKeyboardFrame = var17;
                var4.__closure = var24;
                var24 = 9224731196.0;
                var4.__workletHash = var24;
                var24 = _closure1_slot17;
                var4.__initData = var24;
                var6.onEnd = var4;
                var4 = new Array(3);
                var4[0] = var19;
                var4[1] = var23;
                var4[2] = var17;
                var4 = var15.bind(var16)(var6, var4);
                var4 = var13[var9];
                var17 = var5.bind(var3)(var4);
                var16 = var17.useAnimatedReaction;
                var15 = function() {
                    var0 = _closure2_slot17;
                    var0 = var0.value;
                    return var0;
                };
                var4 = {};
                var4.input = var21;
                var15.__closure = var4;
                var4 = 11686541980526.0;
                var15.__workletHash = var4;
                var4 = _closure1_slot18;
                var15.__initData = var4;
                var6 = function arg0, arg1() {
                    _fun68368: for (var _fun68368_ip = 0;;) switch (_fun68368_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = arg1;
                            var1 = null;
                            var2 = var1 == var4;
                            var0 = undefined;
                            var5 = undefined;
                            if (var2) {
                                _fun68368_ip = 25;
                                continue _fun68368
                            }
                        case 19:
                            var5 = var4.target;
                        case 25:
                            var6 = var1 == var3;
                            var2 = undefined;
                            if (var6) {
                                _fun68368_ip = 40;
                                continue _fun68368
                            }
                        case 34:
                            var2 = var3.target;
                        case 40:
                            if (!(var5 === var2)) {
                                _fun68368_ip = 172;
                                continue _fun68368
                            }
                        case 47:
                            var5 = var1 == var4;
                            var2 = undefined;
                            if (var5) {
                                _fun68368_ip = 67;
                                continue _fun68368
                            }
                        case 56:
                            var4 = var4.layout;
                            var2 = var4.height;
                        case 67:
                            var4 = var1 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun68368_ip = 87;
                                continue _fun68368
                            }
                        case 76:
                            var3 = var3.layout;
                            var1 = var3.height;
                        case 87:
                            if (!(var2 !== var1)) {
                                _fun68368_ip = 172;
                                continue _fun68368
                            }
                        case 91:
                            var2 = _closure2_slot18;
                            var2 = var2.value;
                            var4 = _closure2_slot18;
                            var3 = _closure2_slot17;
                            var3 = var3.value;
                            var4.value = var3;
                            var4 = _closure2_slot9;
                            var5 = var4.value;
                            var7 = _closure2_slot20;
                            var3 = _closure2_slot12;
                            var6 = var3.value;
                            var3 = true;
                            var3 = var7.bind(var0)(var6, var3);
                            var3 = var5 + var3;
                            var4.value = var3;
                            var1 = _closure2_slot18;
                            var1.value = var2;
                        case 172:
                            return var0;
                    }
                };
                var4 = {};
                var4.layout = var22;
                var4.input = var21;
                var4.scrollPosition = var20;
                var4.maybeScroll = var19;
                var4.keyboardHeight = var18;
                var6.__closure = var4;
                var4 = 4138816146551.0;
                var6.__workletHash = var4;
                var4 = _closure1_slot19;
                var6.__initData = var4;
                var4 = new Array(0);
                var4 = var16.bind(var17)(var15, var6, var4);
                var4 = var13[var9];
                var6 = var5.bind(var3)(var4);
                var5 = var6.useAnimatedStyle;
                var4 = function() {
                    _fun68369: for (var _fun68369_ip = 0;;) switch (_fun68369_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (var0) {
                                _fun68369_ip = 14;
                                continue _fun68369
                            }
                        case 10:
                            var0 = {};
                            _fun68369_ip = 40;
                            continue _fun68369;
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
                var1.enabled = var12;
                var1.currentKeyboardFrameHeight = var14;
                var4.__closure = var1;
                var1 = 8565461511296.0;
                var4.__workletHash = var1;
                var1 = _closure1_slot20;
                var4.__initData = var1;
                var1 = new Array(1);
                var1[0] = var12;
                var12 = var5.bind(var6)(var4, var1);
                var1 = _closure1_slot9;
                var4 = global;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var4.ref = var0;
                var0 = {};
                var14 = 16;
                var0.scrollEventThrottle = var14;
                var0.onLayout = var8;
                var8 = new Array(2);
                var8[0] = var11;
                var11 = _closure1_slot8;
                var10 = _closure1_slot1;
                var9 = var13[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.View;
                var9 = {};
                var9.style = var12;
                var9 = var11.bind(var3)(var10, var9);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 3680, 8490, 8500, 8501]);