// design/components/SegmentedControl/native/SegmentedControl.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = {
        'mass': 0.3,
        'damping': 13,
        'stiffness': 100,
        'restDisplacementThreshold': 0.001,
        'overshootClamping': true
    };
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        var7 = arg0;
        var0 = {};
        var1 = {};
        var6 = 1;
        var1.flexGrow = var6;
        var0.scrollContentContainer = var1;
        var1 = {
            'backgroundColor': null,
            'borderRadius': null,
            'paddingVertical': null,
            'display': 'flex',
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 4;
        var8 = var5[var2];
        var3 = undefined;
        var8 = var4.bind(var3)(var8);
        var8 = var8.colors;
        var8 = var8.INPUT_BACKGROUND_DEFAULT;
        var1.backgroundColor = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var8 = var8 + var7;
        var1.borderRadius = var8;
        var1.paddingVertical = var7;
        var0.controlsContainer = var1;
        var1 = {
            'position': 'absolute',
            'width': '100%',
            'height': '100%',
            'borderRadius': null,
            'flexDirection': 'row'
        };
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.radii;
        var7 = var7.lg;
        var1.borderRadius = var7;
        var0.indicatorContainer = var1;
        var1 = {};
        var1.flex = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.REDESIGN_INPUT_CONTROL_ACTIVE_BG;
        var1.backgroundColor = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.lg;
        var1.borderRadius = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.shadows;
        var9 = var2.SHADOW_LOW;
        var10 = var1;
        var2 = copyDataProperties(var10, var9);
        var0.indicator = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function SegmentedControlNativeTsx1(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function SegmentedControlNativeTsx2(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function SegmentedControlNativeTsx3(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'function SegmentedControlNativeTsx4(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth}=this.__closure;return(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();}';
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = "function SegmentedControlNativeTsx5(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,segmentSpacing,itemCount,previousIndicatorWidth,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}if(clampedActiveIndex.get()===0){translateX+=segmentSpacing;}else if(clampedActiveIndex.get()===itemCount-1){translateX-=segmentSpacing;}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,SELECTED_INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}";
    var3.code = var6;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 'function onPanGestureUpdate_SegmentedControlNativeTsx6(event){const{indicatorWidth,panIndex,activeIndex,itemCount}=this.__closure;const progess=event.translationX/indicatorWidth.get();const index=panIndex.get()+progess;activeIndex.set(Math.min(Math.max(index,0),itemCount-1));}';
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = 'function SegmentedControlNativeTsx7(){const{panIndex,activeIndex,runOnJS,setActiveIndex}=this.__closure;panIndex.set(-1);activeIndex.set(Math.round(activeIndex.get()));runOnJS(setActiveIndex)(activeIndex.get());}';
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = 'function SegmentedControlNativeTsx8(){const{panIndex,activeIndex}=this.__closure;panIndex.set(activeIndex.get());}';
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/SegmentedControl/native/SegmentedControl.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun66201: for (var _fun66201_ip = 0;;) switch (_fun66201_ip) {
            case 0:
                var0 = arg0;
                var19 = var0.state;
                var _closure2_slot0 = var19;
                var6 = var0.variant;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun66201_ip = 29;
                    continue _fun66201
                }
            case 25:
                var6 = 'default';
            case 29:
                var _closure2_slot1 = var6;
                var9 = var0.keyboardShouldPersistTaps;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var17 = var19.activeIndex;
                _closure2_slot2 = var17;
                var26 = var19.scrollOverflow;
                _closure2_slot3 = var26;
                var0 = var19.items;
                _closure2_slot4 = var0;
                var13 = var19.pressedIndex;
                _closure2_slot5 = var13;
                var15 = var19.setActiveIndex;
                _closure2_slot6 = var15;
                var1 = 'experimental_Large';
                var2 = var1 === var6;
                _closure2_slot7 = var2;
                var20 = 4;
                if (!var2) {
                    _fun66201_ip = 179;
                    continue _fun66201
                }
            case 176:
                var20 = 8;
            case 179:
                _closure2_slot8 = var20;
                var5 = _closure1_slot9;
                var10 = var5.bind(var4)(var20);
                _closure2_slot9 = var10;
                var21 = var0.length;
                _closure2_slot10 = var21;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var16 = 5;
                var7 = var8[var16];
                var12 = var5.bind(var4)(var7);
                var11 = var12.useSharedValue;
                var7 = -1;
                var18 = var11.bind(var12)(var7);
                _closure2_slot11 = var18;
                var7 = var8[var16];
                var11 = var5.bind(var4)(var7);
                var7 = var11.useSharedValue;
                var12 = 0;
                var27 = var7.bind(var11)(var12);
                _closure2_slot12 = var27;
                var7 = var8[var16];
                var11 = var5.bind(var4)(var7);
                var7 = var11.useSharedValue;
                var25 = var7.bind(var11)(var12);
                _closure2_slot13 = var25;
                var7 = var8[var16];
                var14 = var5.bind(var4)(var7);
                var12 = var14.useAnimatedReaction;
                var11 = function() {
                    var1 = _closure2_slot12;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = {};
                var7.indicatorWidth = var27;
                var11.__closure = var7;
                var7 = 5223249035388.0;
                var11.__workletHash = var7;
                var7 = _closure1_slot10;
                var11.__initData = var7;
                var7 = function arg0, arg1() {
                    _fun66203: for (var _fun66203_ip = 0;;) switch (_fun66203_ip) {
                        case 0:
                            var2 = arg1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun66203_ip = 26;
                                continue _fun66203
                            }
                        case 9:
                            var1 = _closure2_slot13;
                            var0 = var1.set;
                            var0 = var0.bind(var1)(var2);
                        case 26:
                            var0 = undefined;
                            return var0;
                    }
                };
                var22 = {};
                var22.previousIndicatorWidth = var25;
                var7.__closure = var22;
                var22 = 14748619096684.0;
                var7.__workletHash = var22;
                var22 = _closure1_slot11;
                var7.__initData = var22;
                var7 = var12.bind(var14)(var11, var7);
                var12 = _closure1_slot3;
                var14 = var12.useCallback;
                var11 = new Array(1);
                var11[0] = var27;
                var7 = function(arg0) { // Environment: var3
                    var2 = _closure2_slot12;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var0 = var0.width;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var22 = var14.bind(var12)(var7, var11);
                _closure2_slot14 = var22;
                var7 = var8[var16];
                var14 = var5.bind(var4)(var7);
                var11 = var14.useSharedValue;
                var7 = var17.get;
                var7 = var7.bind(var17)();
                var23 = var11.bind(var14)(var7);
                _closure2_slot15 = var23;
                var7 = var8[var16];
                var14 = var5.bind(var4)(var7);
                var11 = var14.useDerivedValue;
                var7 = function() {
                    var0 = global;
                    var3 = var0.Math;
                    var2 = var3.min;
                    var6 = var0.Math;
                    var5 = var6.max;
                    var4 = _closure2_slot2;
                    var1 = var4.get;
                    var4 = var1.bind(var4)();
                    var1 = 0;
                    var1 = var5.bind(var6)(var4, var1);
                    var4 = _closure2_slot10;
                    var0 = 1;
                    var0 = var4 - var0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var24 = {};
                var24.activeIndex = var17;
                var24.itemCount = var21;
                var7.__closure = var24;
                var24 = 790542357728.0;
                var7.__workletHash = var24;
                var24 = _closure1_slot12;
                var7.__initData = var24;
                var28 = var11.bind(var14)(var7);
                _closure2_slot16 = var28;
                var7 = var8[var16];
                var14 = var5.bind(var4)(var7);
                var11 = var14.useDerivedValue;
                var7 = function() {
                    var2 = _closure2_slot16;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var3 = _closure2_slot15;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var2 - var1;
                    var2 = _closure2_slot12;
                    var0 = var2.get;
                    var0 = var0.bind(var2)();
                    var0 = var1 * var0;
                    return var0;
                };
                var24 = {};
                var24.clampedActiveIndex = var28;
                var24.defaultActiveIndex = var23;
                var24.indicatorWidth = var27;
                var7.__closure = var24;
                var24 = 10116271570175.0;
                var7.__workletHash = var24;
                var24 = _closure1_slot13;
                var7.__initData = var24;
                var29 = var11.bind(var14)(var7);
                _closure2_slot17 = var29;
                var7 = var8[var16];
                var14 = var5.bind(var4)(var7);
                var11 = var14.useAnimatedStyle;
                var7 = function() {
                    _fun66207: for (var _fun66207_ip = 0;;) switch (_fun66207_ip) {
                        case 0:
                            var2 = _closure2_slot17;
                            var1 = var2.get;
                            var8 = var1.bind(var2)();
                            var2 = _closure2_slot5;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var3 = 0;
                            var1 = var1 >= var3;
                            var4 = 1;
                            var7 = var8;
                            var6 = var4;
                            if (!var1) {
                                _fun66207_ip = 209;
                                continue _fun66207
                            }
                        case 50:
                            var2 = _closure2_slot5;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var5 = _closure2_slot16;
                            var1 = var5.get;
                            var1 = var1.bind(var5)();
                            if (!(!(var2 < var1))) {
                                _fun66207_ip = 162;
                                continue _fun66207
                            }
                        case 80:
                            var2 = _closure2_slot5;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var5 = _closure2_slot16;
                            var1 = var5.get;
                            var1 = var1.bind(var5)();
                            var5 = var2 > var1;
                            var2 = var8;
                            var1 = var4;
                            if (!var5) {
                                _fun66207_ip = 160;
                                continue _fun66207
                            }
                        case 119:
                            var9 = _closure2_slot12;
                            var5 = var9.get;
                            var9 = var5.bind(var9)();
                            var5 = 0.02;
                            var5 = var5 * var9;
                            var2 = var8 + var5;
                            var1 = 1.04;
                        case 160:
                            _fun66207_ip = 203;
                            continue _fun66207;
                        case 162:
                            var9 = _closure2_slot12;
                            var5 = var9.get;
                            var9 = var5.bind(var9)();
                            var5 = 0.02;
                            var5 = var5 * var9;
                            var2 = var8 - var5;
                            var1 = 1.04;
                        case 203:
                            var7 = var2;
                            var6 = var1;
                        case 209:
                            var2 = _closure2_slot3;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            if (!(!(var1 < var3))) {
                                _fun66207_ip = 367;
                                continue _fun66207
                            }
                        case 229:
                            var2 = _closure2_slot3;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var2 = var7;
                            if (!(var1 > var3)) {
                                _fun66207_ip = 491;
                                continue _fun66207
                            }
                        case 252:
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 5;
                            var5 = var5[var1];
                            var1 = undefined;
                            var11 = var8.bind(var1)(var5);
                            var10 = var11.interpolate;
                            var5 = _closure2_slot3;
                            var1 = var5.get;
                            var15 = var1.bind(var5)();
                            var14 = [50, 0];
                            var13 = [0.9, 1];
                            var12 = 'clamp';
                            var16 = var11;
                            var1 = var16[var10](var15, var14, var13, var12, var11);
                            var8 = _closure2_slot12;
                            var5 = var8.get;
                            var8 = var5.bind(var8)();
                            var5 = var4 - var1;
                            var8 = var8 * var5;
                            var5 = 2;
                            var5 = var8 / var5;
                            var2 = var7 + var5;
                            var6 = var1;
                            _fun66207_ip = 491;
                            continue _fun66207;
                        case 367:
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 5;
                            var5 = var5[var1];
                            var1 = undefined;
                            var11 = var8.bind(var1)(var5);
                            var10 = var11.interpolate;
                            var5 = _closure2_slot3;
                            var1 = var5.get;
                            var15 = var1.bind(var5)();
                            var8 = new Array(2);
                            var1 = -50;
                            var8[0] = var1;
                            var8[1] = var3;
                            var13 = [0.9, 1];
                            var12 = 'clamp';
                            var16 = var11;
                            var14 = var8;
                            var1 = var16[var10](var15, var14, var13, var12, var11);
                            var8 = _closure2_slot12;
                            var5 = var8.get;
                            var5 = var5.bind(var8)();
                            var8 = -var5;
                            var5 = var4 - var1;
                            var8 = var8 * var5;
                            var5 = 2;
                            var5 = var8 / var5;
                            var2 = var7 + var5;
                            var6 = var1;
                        case 491:
                            var5 = _closure2_slot16;
                            var1 = var5.get;
                            var1 = var1.bind(var5)();
                            if (!(var3 !== var1)) {
                                _fun66207_ip = 546;
                                continue _fun66207
                            }
                        case 508:
                            var3 = _closure2_slot16;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            var1 = _closure2_slot10;
                            var1 = var1 - var4;
                            var7 = var2;
                            if (!(var3 === var1)) {
                                _fun66207_ip = 554;
                                continue _fun66207
                            }
                        case 536:
                            var1 = _closure2_slot8;
                            var7 = var2 - var1;
                            _fun66207_ip = 554;
                            continue _fun66207;
                        case 546:
                            var1 = _closure2_slot8;
                            var7 = var2 + var1;
                        case 554:
                            var2 = _closure2_slot12;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var3 = _closure2_slot13;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            var3 = var2 === var1;
                            if (var3) {
                                _fun66207_ip = 614;
                                continue _fun66207
                            }
                        case 587:
                            var2 = _closure2_slot13;
                            var1 = var2.set;
                            var4 = _closure2_slot12;
                            var0 = var4.get;
                            var0 = var0.bind(var4)();
                            var0 = var1.bind(var2)(var0);
                        case 614:
                            var0 = {};
                            var2 = {};
                            var1 = var7;
                            if (!var3) {
                                _fun66207_ip = 664;
                                continue _fun66207
                            }
                        case 624:
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 6;
                            var5 = var5[var4];
                            var4 = undefined;
                            var5 = var8.bind(var4)(var5);
                            var4 = var5.withSpring;
                            var3 = _closure1_slot8;
                            var1 = var4.bind(var5)(var7, var3);
                        case 664:
                            var2.translateX = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 6;
                            var5 = var5[var4];
                            var4 = undefined;
                            var5 = var7.bind(var4)(var5);
                            var4 = var5.withSpring;
                            var3 = _closure1_slot8;
                            var3 = var4.bind(var5)(var6, var3);
                            var2.scaleX = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var24 = {};
                var24.indicatorTranslateX = var29;
                var24.pressedIndex = var13;
                var24.clampedActiveIndex = var28;
                var28 = 0.04;
                var24.PRESSED_TRANSLATE_AMOUNT = var28;
                var24.indicatorWidth = var27;
                var24.scrollOverflow = var26;
                var26 = var8[var16];
                var26 = var5.bind(var4)(var26);
                var26 = var26.interpolate;
                var24.interpolate = var26;
                var26 = 50;
                var24.SCROLL_OVERFLOW_UPPER_BOUND = var26;
                var26 = 0.9;
                var24.SCROLL_OVERFLOW_MAX_SCALE = var26;
                var24.segmentSpacing = var20;
                var24.itemCount = var21;
                var24.previousIndicatorWidth = var25;
                var25 = 6;
                var25 = var8[var25];
                var25 = var5.bind(var4)(var25);
                var25 = var25.withSpring;
                var24.withSpring = var25;
                var25 = _closure1_slot8;
                var24.SELECTED_INDICATOR_SPRING = var25;
                var7.__closure = var24;
                var24 = 5537358752627.0;
                var7.__workletHash = var24;
                var24 = _closure1_slot14;
                var7.__initData = var24;
                var7 = var11.bind(var14)(var7);
                _closure2_slot18 = var7;
                var14 = var12.useMemo;
                var11 = new Array(5);
                var11[0] = var0;
                var11[1] = var23;
                var11[2] = var22;
                var22 = var10.indicator;
                var11[3] = var22;
                var11[4] = var7;
                var7 = function() { // Environment: var3
                    var2 = _closure2_slot4;
                    var1 = var2.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun66209: for (var _fun66209_ip = 0;;) switch (_fun66209_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.id;
                                var1 = _closure2_slot15;
                                var0 = var1.get;
                                var1 = var0.bind(var1)();
                                var0 = arg1;
                                var6 = var1 === var0;
                                var3 = _closure1_slot6;
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 5;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.View;
                                var0 = {};
                                var5 = undefined;
                                if (!var6) {
                                    _fun66209_ip = 76;
                                    continue _fun66209
                                }
                            case 72:
                                var5 = _closure2_slot14;
                            case 76:
                                var0.onLayout = var5;
                                var5 = _closure2_slot9;
                                var8 = var5.indicator;
                                var5 = new Array(2);
                                var5[0] = var8;
                                if (var6) {
                                    _fun66209_ip = 112;
                                    continue _fun66209
                                }
                            case 102:
                                var6 = {};
                                var8 = 0;
                                var6.opacity = var8;
                                _fun66209_ip = 116;
                                continue _fun66209;
                            case 112:
                                var6 = _closure2_slot18;
                            case 116:
                                var5[1] = var6;
                                var0.style = var5;
                                var0 = var3.bind(var2)(var1, var0, var4);
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var14.bind(var12)(var7, var11);
                var11 = var12.useMemo;
                var7 = new Array(8);
                var7[0] = var0;
                var7[1] = var21;
                var7[2] = var20;
                var7[3] = var19;
                var7[4] = var13;
                var7[5] = var2;
                var7[6] = var6;
                var7[7] = var15;
                var6 = function() { // Environment: var3
                    var2 = _closure2_slot4;
                    var1 = var2.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun66211: for (var _fun66211_ip = 0;;) switch (_fun66211_ip) {
                            case 0:
                                var0 = arg0;
                                var9 = arg1;
                                var8 = var0.label;
                                var4 = var0.id;
                                var7 = var0.icon;
                                var _closure4_slot0 = var9;
                                var0 = 0;
                                var0 = var0 === var9;
                                if (var0) {
                                    _fun66211_ip = 65;
                                    continue _fun66211
                                }
                            case 39:
                                var2 = _closure2_slot10;
                                var1 = 1;
                                var1 = var2 - var1;
                                var12 = undefined;
                                if (!(var9 === var1)) {
                                    _fun66211_ip = 63;
                                    continue _fun66211
                                }
                            case 56:
                                var1 = _closure2_slot8;
                                var12 = -var1;
                            case 63:
                                _fun66211_ip = 69;
                                continue _fun66211;
                            case 65:
                                var12 = _closure2_slot8;
                            case 69:
                                if (var0) {
                                    _fun66211_ip = 95;
                                    continue _fun66211
                                }
                            case 72:
                                var1 = _closure2_slot10;
                                var0 = 1;
                                var0 = var1 - var0;
                                var11 = undefined;
                                if (!(var9 === var0)) {
                                    _fun66211_ip = 93;
                                    continue _fun66211
                                }
                            case 89:
                                var11 = _closure2_slot8;
                            case 93:
                                _fun66211_ip = 102;
                                continue _fun66211;
                            case 95:
                                var0 = _closure2_slot8;
                                var11 = -var0;
                            case 102:
                                var3 = _closure1_slot6;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 7;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.SegmentedControlItem;
                                var0 = {};
                                var10 = {};
                                var14 = _closure2_slot10;
                                var13 = 1;
                                var14 = var13 / var14;
                                var13 = 100;
                                var14 = var14 * var13;
                                var13 = '%';
                                var13 = var14 + var13;
                                var10.minWidth = var13;
                                var10.marginStart = var12;
                                var10.marginEnd = var11;
                                var0.style = var10;
                                var0.index = var9;
                                var0.label = var8;
                                var8 = _closure2_slot0;
                                var0.state = var8;
                                var8 = _closure2_slot5;
                                var0.pressed = var8;
                                var8 = function() {
                                    var2 = _closure2_slot6;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var0.onPress = var8;
                                var8 = function() {
                                    var2 = _closure2_slot5;
                                    var1 = var2.set;
                                    var0 = _closure4_slot0;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var0.onPressIn = var8;
                                var6 = function() {
                                    var2 = _closure2_slot5;
                                    var1 = var2.set;
                                    var0 = -1;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var0.onPressOut = var6;
                                var8 = _closure2_slot7;
                                var6 = null;
                                if (!var8) {
                                    _fun66211_ip = 258;
                                    continue _fun66211
                                }
                            case 255:
                                var6 = var7;
                            case 258:
                                var0.icon = var6;
                                var5 = _closure2_slot1;
                                var0.variant = var5;
                                var0 = var3.bind(var2)(var1, var0, var4);
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var11.bind(var12)(var6, var7);
                var6 = function() { // Environment: var3
                    var0 = function arg0() {
                        var0 = arg0;
                        var2 = var0.translationX;
                        var3 = _closure2_slot12;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        var2 = var2 / var1;
                        var3 = _closure2_slot11;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        var8 = var1 + var2;
                        var2 = _closure2_slot2;
                        var1 = var2.set;
                        var3 = global;
                        var5 = var3.Math;
                        var4 = var5.min;
                        var7 = var3.Math;
                        var6 = var7.max;
                        var3 = 0;
                        var3 = var6.bind(var7)(var8, var3);
                        var6 = _closure2_slot10;
                        var0 = 1;
                        var0 = var6 - var0;
                        var0 = var4.bind(var5)(var3, var0);
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = {};
                    var3 = _closure2_slot12;
                    var1.indicatorWidth = var3;
                    var3 = _closure2_slot11;
                    var1.panIndex = var3;
                    var3 = _closure2_slot2;
                    var1.activeIndex = var3;
                    var2 = _closure2_slot10;
                    var1.itemCount = var2;
                    var0.__closure = var1;
                    var1 = 4853281820821.0;
                    var0.__workletHash = var1;
                    var1 = _closure1_slot15;
                    var0.__initData = var1;
                    return var0;
                };
                var12 = var6.bind(var4)();
                var7 = 8;
                var6 = var8[var7];
                var6 = var5.bind(var4)(var6);
                var11 = var6.Gesture;
                var6 = var11.Pan;
                var19 = var6.bind(var11)();
                var11 = var19.onStart;
                var6 = function() {
                    var2 = _closure2_slot11;
                    var1 = var2.set;
                    var3 = _closure2_slot2;
                    var0 = var3.get;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var20 = {};
                var20.panIndex = var18;
                var20.activeIndex = var17;
                var6.__closure = var20;
                var20 = 16822477236158.0;
                var6.__workletHash = var20;
                var20 = _closure1_slot17;
                var6.__initData = var20;
                var11 = var11.bind(var19)(var6);
                var6 = var11.onUpdate;
                var11 = var6.bind(var11)(var12);
                var6 = var11.onEnd;
                var3 = function() {
                    var3 = _closure2_slot11;
                    var2 = var3.set;
                    var0 = -1;
                    var0 = var2.bind(var3)(var0);
                    var3 = _closure2_slot2;
                    var2 = var3.set;
                    var0 = global;
                    var5 = var0.Math;
                    var4 = var5.round;
                    var6 = _closure2_slot2;
                    var0 = var6.get;
                    var0 = var0.bind(var6)();
                    var0 = var4.bind(var5)(var0);
                    var0 = var2.bind(var3)(var0);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 5;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot6;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot2;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var12 = {};
                var12.panIndex = var18;
                var12.activeIndex = var17;
                var16 = var8[var16];
                var16 = var5.bind(var4)(var16);
                var16 = var16.runOnJS;
                var12.runOnJS = var16;
                var12.setActiveIndex = var15;
                var3.__closure = var12;
                var12 = 4531135834116.0;
                var3.__workletHash = var12;
                var12 = _closure1_slot16;
                var3.__initData = var12;
                var6 = var6.bind(var11)(var3);
                var3 = 9;
                var3 = var8[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.isAndroid;
                var3 = var3.bind(var5)();
                var8 = 'tabbar';
                if (!var3) {
                    _fun66201_ip = 1167;
                    continue _fun66201
                }
            case 1161:
                var8 = 'tablist';
            case 1167:
                var11 = _closure1_slot7;
                var5 = _closure1_slot4;
                var3 = {};
                var3.accessibilityRole = var8;
                var8 = var10.controlsContainer;
                var3.style = var8;
                var8 = _closure1_slot6;
                var12 = {};
                var15 = false;
                var12.accessible = var15;
                var15 = var10.indicatorContainer;
                var12.style = var15;
                var12.children = var14;
                var14 = var8.bind(var4)(var5, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var12[1] = var13;
                var3.children = var12;
                var0 = var0.length;
                var5 = var11.bind(var4)(var5, var3, var0);
                var3 = _closure1_slot5;
                var0 = {
                    'horizontal': true,
                    'alwaysBounceHorizontal': false
                };
                var10 = var10.scrollContentContainer;
                var0.contentContainerStyle = var10;
                var0.keyboardShouldPersistTaps = var9;
                var0.children = var5;
                var0 = var8.bind(var4)(var3, var0);
                if (!var2) {
                    _fun66201_ip = 1342;
                    continue _fun66201
                }
            case 1298:
                var3 = _closure1_slot6;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var2.bind(var4)(var1);
                var2 = var1.GestureDetector;
                var1 = {};
                var1.gesture = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1342:
                return var0;
        }
    };
    var2.SegmentedControl = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3711, 4072, 8184, 4956, 478, 2]);