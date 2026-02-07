// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var4 = 0;
    var3 = var6[var4];
    var0 = undefined;
    var8 = var5.bind(var0)(var3);
    var3 = var8.memo;
    var8 = var8.useMemo;
    var _closure1_slot3 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = {};
    var5 = 'function pnpm_BottomSheetContentTsx1(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,animatedKeyboardState,animatedKeyboardHeightInContainer,animatedHandleHeight,animatedSheetHeight,keyboardBehavior,KEYBOARD_BEHAVIOR,KEYBOARD_STATE,isInTemporaryPosition}=this.__closure;if(animatedContainerHeight.get()===INITIAL_CONTAINER_HEIGHT){return 0;}const keyboardState=animatedKeyboardState.get();const keyboardHeightInContainer=animatedKeyboardHeightInContainer.get();const handleHeight=Math.max(0,animatedHandleHeight.get());const containerHeight=animatedContainerHeight.get();let contentHeight=animatedSheetHeight.get()-handleHeight;switch(keyboardBehavior){case KEYBOARD_BEHAVIOR.extend:if(keyboardState===KEYBOARD_STATE.SHOWN){contentHeight=contentHeight-keyboardHeightInContainer;}break;case KEYBOARD_BEHAVIOR.fillParent:if(!isInTemporaryPosition.get()){break;}if(keyboardState===KEYBOARD_STATE.SHOWN){contentHeight=containerHeight-handleHeight-keyboardHeightInContainer;}else{contentHeight=containerHeight-handleHeight;}break;case KEYBOARD_BEHAVIOR.interactive:{if(!isInTemporaryPosition.get()){break;}const contentWithKeyboardHeight=contentHeight+keyboardHeightInContainer;if(keyboardState===KEYBOARD_STATE.SHOWN){if(keyboardHeightInContainer+animatedSheetHeight.get()>containerHeight){contentHeight=containerHeight-keyboardHeightInContainer-handleHeight;}}else if(contentWithKeyboardHeight+handleHeight>containerHeight){contentHeight=containerHeight-handleHeight;}else{contentHeight=contentWithKeyboardHeight;}break;}}return Math.max(contentHeight,0);}';
    var4.code = var5;
    var _closure1_slot5 = var4;
    var4 = {};
    var5 = 'function pnpm_BottomSheetContentTsx2(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,animatedHighestSnapPoint,animatedPosition,overDragResistanceFactor,animatedKeyboardState,KEYBOARD_STATE,animatedKeyboardHeightInContainer}=this.__closure;const containerHeight=animatedContainerHeight.get();if(containerHeight===INITIAL_CONTAINER_HEIGHT){return 0;}const highestSnapPoint=Math.max(animatedHighestSnapPoint.get(),animatedPosition.get());const overDragSafePaddingBottom=Math.sqrt(highestSnapPoint-containerHeight*-1)*overDragResistanceFactor;let paddingBottom=overDragSafePaddingBottom;if(animatedKeyboardState.get()===KEYBOARD_STATE.SHOWN){paddingBottom=overDragSafePaddingBottom+animatedKeyboardHeightInContainer.get();}return paddingBottom;}';
    var4.code = var5;
    var _closure1_slot6 = var4;
    var4 = {};
    var5 = 'function pnpm_BottomSheetContentTsx3(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,enableDynamicSizing,animatedContentHeight,detached,animatedPaddingBottom,animate,animationConfigs,overrideReduceMotion,animatedContentHeightMax}=this.__closure;if(animatedContainerHeight.get()===INITIAL_CONTAINER_HEIGHT){return{};}if(enableDynamicSizing&&animatedContentHeight.get()===INITIAL_CONTAINER_HEIGHT){return{};}const paddingBottom=detached?0:animatedPaddingBottom.get();return{paddingBottom:animate({point:paddingBottom,configs:animationConfigs,overrideReduceMotion:overrideReduceMotion}),height:animate({point:animatedContentHeightMax.get()+paddingBottom,configs:animationConfigs,overrideReduceMotion:overrideReduceMotion})};}';
    var4.code = var5;
    var _closure1_slot7 = var4;
    var1 = function arg0() {
        _fun45487: for (var _fun45487_ip = 0;;) switch (_fun45487_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.detached;
                var _closure2_slot0 = var12;
                var19 = var0.animationConfigs;
                var _closure2_slot1 = var19;
                var18 = var0.overrideReduceMotion;
                var _closure2_slot2 = var18;
                var16 = var0.keyboardBehavior;
                var _closure2_slot3 = var16;
                var9 = var0.accessible;
                var8 = var0.accessibilityLabel;
                var7 = var0.accessibilityHint;
                var6 = var0.accessibilityRole;
                var4 = var0.children;
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var1 = 2;
                var1 = var24[var1];
                var3 = undefined;
                var2 = var23.bind(var3)(var1);
                var1 = var2.useBottomSheetInternal;
                var1 = var1.bind(var2)();
                var20 = var1.enableDynamicSizing;
                var _closure2_slot4 = var20;
                var21 = var1.overDragResistanceFactor;
                var _closure2_slot5 = var21;
                var2 = var1.enableContentPanningGesture;
                var28 = var1.animatedPosition;
                var _closure2_slot6 = var28;
                var32 = var1.animatedHandleHeight;
                var _closure2_slot7 = var32;
                var27 = var1.animatedHighestSnapPoint;
                var _closure2_slot8 = var27;
                var15 = var1.animatedContainerHeight;
                var _closure2_slot9 = var15;
                var17 = var1.animatedContentHeight;
                var _closure2_slot10 = var17;
                var31 = var1.animatedSheetHeight;
                var _closure2_slot11 = var31;
                var26 = var1.animatedKeyboardState;
                var _closure2_slot12 = var26;
                var22 = var1.animatedKeyboardHeightInContainer;
                var _closure2_slot13 = var22;
                var30 = var1.isInTemporaryPosition;
                var _closure2_slot14 = var30;
                var1 = 3;
                var10 = var24[var1];
                var14 = var23.bind(var3)(var10);
                var13 = var14.useDerivedValue;
                var11 = function() {
                    _fun45488: for (var _fun45488_ip = 0;;) switch (_fun45488_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 4;
                            var0 = var3[var0];
                            var8 = undefined;
                            var0 = var2.bind(var8)(var0);
                            var0 = var0.INITIAL_CONTAINER_HEIGHT;
                            if (!(var1 !== var0)) {
                                _fun45488_ip = 508;
                                continue _fun45488
                            }
                        case 54:
                            var1 = _closure2_slot12;
                            var0 = var1.get;
                            var6 = var0.bind(var1)();
                            var1 = _closure2_slot13;
                            var0 = var1.get;
                            var4 = var0.bind(var1)();
                            var0 = global;
                            var9 = var0.Math;
                            var2 = var9.max;
                            var3 = _closure2_slot7;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            var3 = 0;
                            var11 = var2.bind(var9)(var3, var1);
                            var2 = _closure2_slot9;
                            var1 = var2.get;
                            var10 = var1.bind(var2)();
                            var2 = _closure2_slot11;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var1 = var1 - var11;
                            var13 = _closure2_slot3;
                            var12 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var9 = 5;
                            var2 = var2[var9];
                            var2 = var12.bind(var8)(var2);
                            var2 = var2.KEYBOARD_BEHAVIOR;
                            var2 = var2.extend;
                            if (!(var2 !== var13)) {
                                _fun45488_ip = 449;
                                continue _fun45488
                            }
                        case 187:
                            var12 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var9];
                            var2 = var12.bind(var8)(var2);
                            var2 = var2.KEYBOARD_BEHAVIOR;
                            var2 = var2.fillParent;
                            if (!(var2 !== var13)) {
                                _fun45488_ip = 378;
                                continue _fun45488
                            }
                        case 223:
                            var12 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var9];
                            var2 = var12.bind(var8)(var2);
                            var2 = var2.KEYBOARD_BEHAVIOR;
                            var12 = var2.interactive;
                            var2 = var1;
                            if (!(var12 === var13)) {
                                _fun45488_ip = 489;
                                continue _fun45488
                            }
                        case 262:
                            var13 = _closure2_slot14;
                            var12 = var13.get;
                            var12 = var12.bind(var13)();
                            var2 = var1;
                            if (!var12) {
                                _fun45488_ip = 489;
                                continue _fun45488
                            }
                        case 284:
                            var12 = var1 + var4;
                            var14 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var13 = var13[var9];
                            var13 = var14.bind(var8)(var13);
                            var13 = var13.KEYBOARD_STATE;
                            var13 = var13.SHOWN;
                            if (!(var6 !== var13)) {
                                _fun45488_ip = 341;
                                continue _fun45488
                            }
                        case 321:
                            var13 = var12 + var11;
                            if (!(var13 > var10)) {
                                _fun45488_ip = 333;
                                continue _fun45488
                            }
                        case 329:
                            var12 = var10 - var11;
                        case 333:
                            var2 = var12;
                            _fun45488_ip = 489;
                            continue _fun45488;
                        case 341:
                            var13 = _closure2_slot11;
                            var12 = var13.get;
                            var12 = var12.bind(var13)();
                            var12 = var4 + var12;
                            var2 = var1;
                            if (!(var12 > var10)) {
                                _fun45488_ip = 489;
                                continue _fun45488
                            }
                        case 368:
                            var12 = var10 - var4;
                            var2 = var12 - var11;
                            _fun45488_ip = 489;
                            continue _fun45488;
                        case 378:
                            var12 = _closure2_slot14;
                            var7 = var12.get;
                            var7 = var7.bind(var12)();
                            var2 = var1;
                            if (!var7) {
                                _fun45488_ip = 489;
                                continue _fun45488
                            }
                        case 397:
                            var12 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var9];
                            var7 = var12.bind(var8)(var7);
                            var7 = var7.KEYBOARD_STATE;
                            var7 = var7.SHOWN;
                            if (!(var6 !== var7)) {
                                _fun45488_ip = 436;
                                continue _fun45488
                            }
                        case 430:
                            var7 = var10 - var11;
                            _fun45488_ip = 444;
                            continue _fun45488;
                        case 436:
                            var10 = var10 - var11;
                            var7 = var10 - var4;
                        case 444:
                            var2 = var7;
                            _fun45488_ip = 489;
                            continue _fun45488;
                        case 449:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var9];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.KEYBOARD_STATE;
                            var5 = var5.SHOWN;
                            var2 = var1;
                            if (!(var6 === var5)) {
                                _fun45488_ip = 489;
                                continue _fun45488
                            }
                        case 485:
                            var2 = var1 - var4;
                        case 489:
                            var1 = var0.Math;
                            var0 = var1.max;
                            var0 = var0.bind(var1)(var2, var3);
                            return var0;
                        case 508:
                            var0 = 0;
                            return var0;
                    }
                };
                var10 = {};
                var10.animatedContainerHeight = var15;
                var25 = 4;
                var29 = var24[var25];
                var29 = var23.bind(var3)(var29);
                var29 = var29.INITIAL_CONTAINER_HEIGHT;
                var10.INITIAL_CONTAINER_HEIGHT = var29;
                var10.animatedKeyboardState = var26;
                var10.animatedKeyboardHeightInContainer = var22;
                var10.animatedHandleHeight = var32;
                var10.animatedSheetHeight = var31;
                var10.keyboardBehavior = var16;
                var29 = 5;
                var33 = var24[var29];
                var33 = var23.bind(var3)(var33);
                var33 = var33.KEYBOARD_BEHAVIOR;
                var10.KEYBOARD_BEHAVIOR = var33;
                var33 = var24[var29];
                var33 = var23.bind(var3)(var33);
                var33 = var33.KEYBOARD_STATE;
                var10.KEYBOARD_STATE = var33;
                var10.isInTemporaryPosition = var30;
                var11.__closure = var10;
                var10 = 2170474579366.0;
                var11.__workletHash = var10;
                var10 = _closure1_slot5;
                var11.__initData = var10;
                var10 = new Array(7);
                var10[0] = var15;
                var10[1] = var32;
                var10[2] = var22;
                var10[3] = var26;
                var10[4] = var31;
                var10[5] = var30;
                var10[6] = var16;
                var16 = var13.bind(var14)(var11, var10);
                var _closure2_slot15 = var16;
                var10 = var24[var1];
                var14 = var23.bind(var3)(var10);
                var13 = var14.useDerivedValue;
                var11 = function() {
                    _fun45489: for (var _fun45489_ip = 0;;) switch (_fun45489_ip) {
                        case 0:
                            var2 = _closure2_slot9;
                            var0 = var2.get;
                            var7 = var0.bind(var2)();
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 4;
                            var2 = var4[var2];
                            var5 = undefined;
                            var2 = var3.bind(var5)(var2);
                            var2 = var2.INITIAL_CONTAINER_HEIGHT;
                            if (!(var7 !== var2)) {
                                _fun45489_ip = 209;
                                continue _fun45489
                            }
                        case 54:
                            var2 = global;
                            var8 = var2.Math;
                            var6 = var8.max;
                            var4 = _closure2_slot8;
                            var3 = var4.get;
                            var4 = var3.bind(var4)();
                            var9 = _closure2_slot6;
                            var3 = var9.get;
                            var3 = var3.bind(var9)();
                            var6 = var6.bind(var8)(var4, var3);
                            var4 = var2.Math;
                            var3 = var4.sqrt;
                            var2 = -1;
                            var2 = var2 * var7;
                            var2 = var6 - var2;
                            var3 = var3.bind(var4)(var2);
                            var2 = _closure2_slot5;
                            var2 = var3 * var2;
                            var4 = _closure2_slot12;
                            var3 = var4.get;
                            var4 = var3.bind(var4)();
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 5;
                            var0 = var6[var0];
                            var0 = var3.bind(var5)(var0);
                            var0 = var0.KEYBOARD_STATE;
                            var3 = var0.SHOWN;
                            var0 = var2;
                            if (!(var4 === var3)) {
                                _fun45489_ip = 207;
                                continue _fun45489
                            }
                        case 190:
                            var3 = _closure2_slot13;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            var0 = var2 + var1;
                        case 207:
                            return var0;
                        case 209:
                            var0 = 0;
                            return var0;
                    }
                };
                var10 = {};
                var10.animatedContainerHeight = var15;
                var30 = var24[var25];
                var30 = var23.bind(var3)(var30);
                var30 = var30.INITIAL_CONTAINER_HEIGHT;
                var10.INITIAL_CONTAINER_HEIGHT = var30;
                var10.animatedHighestSnapPoint = var27;
                var10.animatedPosition = var28;
                var10.overDragResistanceFactor = var21;
                var10.animatedKeyboardState = var26;
                var29 = var24[var29];
                var29 = var23.bind(var3)(var29);
                var29 = var29.KEYBOARD_STATE;
                var10.KEYBOARD_STATE = var29;
                var10.animatedKeyboardHeightInContainer = var22;
                var11.__closure = var10;
                var10 = 3484699588399.0;
                var11.__workletHash = var10;
                var10 = _closure1_slot6;
                var11.__initData = var10;
                var10 = new Array(6);
                var10[0] = var21;
                var10[1] = var28;
                var10[2] = var15;
                var10[3] = var27;
                var10[4] = var26;
                var10[5] = var22;
                var22 = var13.bind(var14)(var11, var10);
                var _closure2_slot16 = var22;
                var10 = var24[var1];
                var14 = var23.bind(var3)(var10);
                var13 = var14.useAnimatedStyle;
                var11 = function() {
                    _fun45490: for (var _fun45490_ip = 0;;) switch (_fun45490_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            var0 = var1.get;
                            var2 = var0.bind(var1)();
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 4;
                            var0 = var0[var5];
                            var3 = undefined;
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.INITIAL_CONTAINER_HEIGHT;
                            if (!(var2 !== var0)) {
                                _fun45490_ip = 253;
                                continue _fun45490
                            }
                        case 54:
                            var0 = _closure2_slot4;
                            if (!var0) {
                                _fun45490_ip = 104;
                                continue _fun45490
                            }
                        case 61:
                            var2 = _closure2_slot10;
                            var0 = var2.get;
                            var2 = var0.bind(var2)();
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var5];
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.INITIAL_CONTAINER_HEIGHT;
                            if (!(var2 !== var0)) {
                                _fun45490_ip = 249;
                                continue _fun45490
                            }
                        case 104:
                            var0 = _closure2_slot0;
                            var7 = 0;
                            if (var0) {
                                _fun45490_ip = 126;
                                continue _fun45490
                            }
                        case 113:
                            var2 = _closure2_slot16;
                            var0 = var2.get;
                            var7 = var0.bind(var2)();
                        case 126:
                            var0 = {};
                            var2 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 6;
                            var4 = var8[var1];
                            var11 = var2.bind(var3)(var4);
                            var10 = var11.animate;
                            var9 = {};
                            var9.point = var7;
                            var5 = _closure2_slot1;
                            var9.configs = var5;
                            var4 = _closure2_slot2;
                            var9.overrideReduceMotion = var4;
                            var9 = var10.bind(var11)(var9);
                            var0.paddingBottom = var9;
                            var1 = var8[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.animate;
                            var1 = {};
                            var8 = _closure2_slot15;
                            var6 = var8.get;
                            var6 = var6.bind(var8)();
                            var6 = var6 + var7;
                            var1.point = var6;
                            var1.configs = var5;
                            var1.overrideReduceMotion = var4;
                            var1 = var2.bind(var3)(var1);
                            var0.height = var1;
                            return var0;
                        case 249:
                            var0 = {};
                            return var0;
                        case 253:
                            var0 = {};
                            return var0;
                    }
                };
                var10 = {};
                var10.animatedContainerHeight = var15;
                var25 = var24[var25];
                var25 = var23.bind(var3)(var25);
                var25 = var25.INITIAL_CONTAINER_HEIGHT;
                var10.INITIAL_CONTAINER_HEIGHT = var25;
                var10.enableDynamicSizing = var20;
                var10.animatedContentHeight = var17;
                var10.detached = var12;
                var10.animatedPaddingBottom = var22;
                var22 = 6;
                var22 = var24[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.animate;
                var10.animate = var22;
                var10.animationConfigs = var19;
                var10.overrideReduceMotion = var18;
                var10.animatedContentHeightMax = var16;
                var11.__closure = var10;
                var10 = 8203943631786.0;
                var11.__workletHash = var10;
                var10 = _closure1_slot7;
                var11.__initData = var10;
                var10 = new Array(8);
                var10[0] = var21;
                var10[1] = var20;
                var10[2] = var12;
                var10[3] = var19;
                var10[4] = var18;
                var10[5] = var17;
                var10[6] = var16;
                var10[7] = var15;
                var13 = var13.bind(var14)(var11, var10);
                var _closure2_slot17 = var13;
                var11 = _closure1_slot3;
                var10 = new Array(2);
                var10[0] = var13;
                var10[1] = var12;
                var5 = function() { // Environment: var5
                    _fun45491: for (var _fun45491_ip = 0;;) switch (_fun45491_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = {};
                            if (var2) {
                                _fun45491_ip = 26;
                                continue _fun45491
                            }
                        case 12:
                            var2 = 'hidden';
                            var0.overflow = var2;
                            var2 = var0;
                            _fun45491_ip = 38;
                            continue _fun45491;
                        case 26:
                            var3 = 'visible';
                            var0.overflow = var3;
                            var2 = var0;
                        case 38:
                            var0 = new Array(2);
                            var0[0] = var2;
                            var1 = _closure2_slot17;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var5 = var11.bind(var3)(var5, var10);
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                if (var2) {
                    _fun45487_ip = 825;
                    continue _fun45487
                }
            case 809:
                var1 = var11[var1];
                var1 = var10.bind(var3)(var1);
                var2 = var1.View;
                _fun45487_ip = 837;
                continue _fun45487;
            case 825:
                var1 = 7;
                var1 = var11[var1];
                var2 = var10.bind(var3)(var1);
            case 837:
                var1 = _closure1_slot4;
                var0 = {};
                var0.accessible = var9;
                var0.accessibilityLabel = var8;
                var0.accessibilityHint = var7;
                var0.accessibilityRole = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var1 = var3.bind(var0)(var1);
    var3 = 'BottomSheetContent';
    var1.displayName = var3;
    var2.BottomSheetContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 4940, 3722, 4939, 4936, 4952, 5068]);