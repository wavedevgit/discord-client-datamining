// design/components/Tabs/native/Tabs.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function(arg0) { // Original name: defaultCountFormatter, environment: var1
        var2 = arg0;
        var1 = var2.toLocaleString;
        var0 = _closure1_slot5;
        var0 = var0.locale;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot19 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var8 = var4.ScrollView;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.jsx;
    var _closure1_slot6 = var9;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var7 = var7.bind(var0)(var4);
    var4 = var7.createAnimatedComponent;
    var4 = var4.bind(var7)(var8);
    var _closure1_slot8 = var4;
    var4 = {
        'mass': 0.3,
        'damping': 13,
        'stiffness': 100,
        'restDisplacementThreshold': 0.001,
        'overshootClamping': true
    };
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = function(arg0) { // Environment: var1
        var0 = {};
        var1 = {
            'display': 'flex',
            'flexGrow': 1,
            'minWidth': '100%',
            'flexDirection': 'row',
            'alignItems': 'center',
            'borderBottomColor': null,
            'borderBottomWidth': 1
        };
        var6 = 'row';
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 6;
        var7 = var5[var2];
        var3 = undefined;
        var7 = var4.bind(var3)(var7);
        var7 = var7.colors;
        var7 = var7.BORDER_SUBTLE;
        var1.borderBottomColor = var7;
        var0.container = var1;
        var1 = {};
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var1.marginHorizontal = var7;
        var1.flexDirection = var6;
        var6 = arg0;
        var1.gap = var6;
        var0.controlsContainer = var1;
        var1 = {
            'position': 'absolute',
            'width': '100%',
            'height': '100%',
            'flexDirection': 'row',
            'alignItems': 'flex-end'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_16;
        var1.marginLeft = var6;
        var0.indicatorContainer = var1;
        var1 = {};
        var6 = 2;
        var1.height = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.TEXT_BRAND;
        var1.backgroundColor = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.xs;
        var1.borderTopStartRadius = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.radii;
        var2 = var2.xs;
        var1.borderTopEndRadius = var2;
        var0.indicator = var1;
        return var0;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function TabsNativeTsx1(){const{activeIndex,itemCount}=this.__closure;return Math.round(Math.min(Math.max(activeIndex.get(),0),itemCount-1));}';
    var4.code = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function TabsNativeTsx2(){const{itemDimensions,clampedActiveIndex}=this.__closure;const activeItem=itemDimensions.get()[clampedActiveIndex.get()];if(activeItem==null)return 0;return activeItem.width;}';
    var4.code = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function TabsNativeTsx3(){const{itemDimensions,clampedActiveIndex}=this.__closure;var _itemDimensions$get$c,_itemDimensions$get$c2;return(_itemDimensions$get$c=(_itemDimensions$get$c2=itemDimensions.get()[clampedActiveIndex.get()])===null||_itemDimensions$get$c2===void 0?void 0:_itemDimensions$get$c2.x)!==null&&_itemDimensions$get$c!==void 0?_itemDimensions$get$c:0;}';
    var4.code = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = "function TabsNativeTsx4(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}return{width:withSpring(indicatorWidth.get(),SELECTED_INDICATOR_SPRING),transform:[{translateX:withSpring(translateX,SELECTED_INDICATOR_SPRING)},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}";
    var4.code = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function TabsNativeTsx5(event){const{scrollOffset,onScrollWorklet}=this.__closure;var _onScrollWorklet;scrollOffset.set(event.contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event.contentOffset.x);}';
    var4.code = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function TabsNativeTsx6(){const{onEndDrag}=this.__closure;var _onEndDrag;(_onEndDrag=onEndDrag)===null||_onEndDrag===void 0||_onEndDrag();}';
    var4.code = var7;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function TabsNativeTsx7(){const{scrollOffset,activeIndex,itemDimensions}=this.__closure;return{scrollOffset:scrollOffset.get(),activeIndex:activeIndex.get(),itemDimensions:itemDimensions.get()};}';
    var4.code = var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function TabsNativeTsx8(props,prevState){const{cheapWorkletShallowEqual,itemSpacing,pageWidth,runOnJS,scrollToOffset,AUTO_SCROLL_BUFFER}=this.__closure;var _itemDimensions$activ,_itemDimensions$activ2,_itemDimensions$activ3;if(props.activeIndex===(prevState===null||prevState===void 0?void 0:prevState.activeIndex))return;if(cheapWorkletShallowEqual(props,prevState!==null&&prevState!==void 0?prevState:undefined))return;const{scrollOffset:scrollOffset,activeIndex:activeIndex,itemDimensions:itemDimensions}=props;const width=itemDimensions.reduce(function(sum,item){var _item$width;return sum+((_item$width=item===null||item===void 0?void 0:item.width)!==null&&_item$width!==void 0?_item$width:0);},0);const itemOffset=((_itemDimensions$activ=(_itemDimensions$activ2=itemDimensions[activeIndex])===null||_itemDimensions$activ2===void 0?void 0:_itemDimensions$activ2.x)!==null&&_itemDimensions$activ!==void 0?_itemDimensions$activ:0)+(activeIndex-1)*itemSpacing;const itemWidth=(_itemDimensions$activ3=itemDimensions[activeIndex])===null||_itemDimensions$activ3===void 0?void 0:_itemDimensions$activ3.width;if(width===0||itemOffset==null||itemWidth==null)return;if(scrollOffset+pageWidth<itemOffset+itemWidth){runOnJS(scrollToOffset)(itemOffset+AUTO_SCROLL_BUFFER);}else if(itemOffset<scrollOffset){runOnJS(scrollToOffset)(itemOffset-AUTO_SCROLL_BUFFER);}}';
    var4.code = var7;
    var _closure1_slot18 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Tabs/native/Tabs.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.defaultCountFormatter = var3;
    var1 = function(arg0) { // Original name: Tabs, environment: var1
        _fun61946: for (var _fun61946_ip = 0;;) switch (_fun61946_ip) {
            case 0:
                var1 = arg0;
                var20 = var1.state;
                var _closure2_slot0 = var20;
                var19 = var1.grow;
                var4 = undefined;
                if (!(var19 === var4)) {
                    _fun61946_ip = 28;
                    continue _fun61946
                }
            case 26:
                var19 = true;
            case 28:
                var _closure2_slot1 = var19;
                var21 = var1.formatCount;
                if (!(var21 === var4)) {
                    _fun61946_ip = 49;
                    continue _fun61946
                }
            case 42:
                var21 = _closure1_slot19;
            case 49:
                var _closure2_slot2 = var21;
                var16 = var1.simultaneousHandlers;
                var _closure2_slot3 = var16;
                var31 = var1.onScrollWorklet;
                var _closure2_slot4 = var31;
                var30 = var1.onEndDrag;
                var _closure2_slot5 = var30;
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
                var _closure2_slot19 = var4;
                var _closure2_slot20 = var4;
                var _closure2_slot21 = var4;
                var _closure2_slot22 = var4;
                var _closure2_slot23 = var4;
                var17 = var20.activeIndex;
                _closure2_slot6 = var17;
                var29 = var20.scrollOffset;
                _closure2_slot7 = var29;
                var24 = var20.scrollOverflow;
                _closure2_slot8 = var24;
                var22 = var20.items;
                _closure2_slot9 = var22;
                var25 = var20.itemDimensions;
                _closure2_slot10 = var25;
                var28 = var20.itemSpacing;
                _closure2_slot11 = var28;
                var27 = var20.pageWidth;
                _closure2_slot12 = var27;
                var18 = var20.pressedIndex;
                _closure2_slot13 = var18;
                var3 = var20.setActiveIndex;
                _closure2_slot14 = var3;
                var5 = var20.useReducedMotion;
                _closure2_slot15 = var5;
                var2 = _closure1_slot10;
                var13 = var2.bind(var4)(var28);
                _closure2_slot16 = var13;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var15 = 4;
                var2 = var12[var15];
                var6 = var10.bind(var4)(var2);
                var2 = var6.useSharedValue;
                var7 = var2.bind(var6)(var27);
                _closure2_slot17 = var7;
                var26 = var22.length;
                _closure2_slot18 = var26;
                var6 = _closure1_slot3;
                var8 = var6.useRef;
                var2 = null;
                var9 = var8.bind(var6)(var2);
                _closure2_slot19 = var9;
                var11 = var6.useCallback;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot17;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var0 = var0.width;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var11 = var11.bind(var6)(var7, var8);
                var7 = var12[var15];
                var14 = var10.bind(var4)(var7);
                var8 = var14.useDerivedValue;
                var7 = function() { // Original name: L, environment: var0
                    var0 = global;
                    var2 = var0.Math;
                    var1 = var2.round;
                    var5 = var0.Math;
                    var4 = var5.min;
                    var8 = var0.Math;
                    var7 = var8.max;
                    var6 = _closure2_slot6;
                    var3 = var6.get;
                    var6 = var3.bind(var6)();
                    var3 = 0;
                    var3 = var7.bind(var8)(var6, var3);
                    var6 = _closure2_slot18;
                    var0 = 1;
                    var0 = var6 - var0;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var23 = {};
                var23.activeIndex = var17;
                var23.itemCount = var26;
                var7.__closure = var23;
                var23 = 3447899396126.0;
                var7.__workletHash = var23;
                var23 = _closure1_slot11;
                var7.__initData = var23;
                var32 = var8.bind(var14)(var7);
                _closure2_slot20 = var32;
                var7 = var12[var15];
                var14 = var10.bind(var4)(var7);
                var8 = var14.useDerivedValue;
                var7 = function() { // Original name: C, environment: var0
                    _fun61949: for (var _fun61949_ip = 0;;) switch (_fun61949_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var2 = _closure2_slot20;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var1 = var1[var0];
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = 0;
                            if (var2) {
                                _fun61949_ip = 49;
                                continue _fun61949
                            }
                        case 44:
                            var0 = var1.width;
                        case 49:
                            return var0;
                    }
                };
                var23 = {};
                var23.itemDimensions = var25;
                var23.clampedActiveIndex = var32;
                var7.__closure = var23;
                var23 = 8603255620075.0;
                var7.__workletHash = var23;
                var23 = _closure1_slot12;
                var7.__initData = var23;
                var26 = var8.bind(var14)(var7);
                _closure2_slot21 = var26;
                var7 = var12[var15];
                var14 = var10.bind(var4)(var7);
                var8 = var14.useDerivedValue;
                var7 = function() { // Original name: W, environment: var0
                    _fun61950: for (var _fun61950_ip = 0;;) switch (_fun61950_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var2 = _closure2_slot20;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var2 = var1[var0];
                            var0 = null;
                            var3 = var0 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun61950_ip = 49;
                                continue _fun61950
                            }
                        case 44:
                            var1 = var2.x;
                        case 49:
                            var2 = var0 != var1;
                            var0 = 0;
                            if (!var2) {
                                _fun61950_ip = 61;
                                continue _fun61950
                            }
                        case 58:
                            var0 = var1;
                        case 61:
                            return var0;
                    }
                };
                var23 = {};
                var23.itemDimensions = var25;
                var23.clampedActiveIndex = var32;
                var7.__closure = var23;
                var23 = 3224400863644.0;
                var7.__workletHash = var23;
                var23 = _closure1_slot13;
                var7.__initData = var23;
                var33 = var8.bind(var14)(var7);
                _closure2_slot22 = var33;
                var7 = var12[var15];
                var14 = var10.bind(var4)(var7);
                var8 = var14.useAnimatedStyle;
                var7 = function() { // Original name: N, environment: var0
                    _fun61951: for (var _fun61951_ip = 0;;) switch (_fun61951_ip) {
                        case 0:
                            var2 = _closure2_slot22;
                            var0 = var2.get;
                            var8 = var0.bind(var2)();
                            var2 = _closure2_slot13;
                            var0 = var2.get;
                            var2 = var0.bind(var2)();
                            var0 = 0;
                            var4 = var2 >= var0;
                            var2 = 1;
                            var3 = var8;
                            var6 = var2;
                            if (!var4) {
                                _fun61951_ip = 209;
                                continue _fun61951
                            }
                        case 50:
                            var5 = _closure2_slot13;
                            var4 = var5.get;
                            var5 = var4.bind(var5)();
                            var7 = _closure2_slot20;
                            var4 = var7.get;
                            var4 = var4.bind(var7)();
                            if (!(!(var5 < var4))) {
                                _fun61951_ip = 162;
                                continue _fun61951
                            }
                        case 80:
                            var5 = _closure2_slot13;
                            var4 = var5.get;
                            var5 = var4.bind(var5)();
                            var7 = _closure2_slot20;
                            var4 = var7.get;
                            var4 = var4.bind(var7)();
                            var7 = var5 > var4;
                            var5 = var8;
                            var4 = var2;
                            if (!var7) {
                                _fun61951_ip = 160;
                                continue _fun61951
                            }
                        case 119:
                            var9 = _closure2_slot21;
                            var7 = var9.get;
                            var9 = var7.bind(var9)();
                            var7 = 0.02;
                            var7 = var7 * var9;
                            var5 = var8 + var7;
                            var4 = 1.04;
                        case 160:
                            _fun61951_ip = 203;
                            continue _fun61951;
                        case 162:
                            var9 = _closure2_slot21;
                            var7 = var9.get;
                            var9 = var7.bind(var9)();
                            var7 = 0.02;
                            var7 = var7 * var9;
                            var5 = var8 - var7;
                            var4 = 1.04;
                        case 203:
                            var3 = var5;
                            var6 = var4;
                        case 209:
                            var5 = _closure2_slot8;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            if (!(!(var4 < var0))) {
                                _fun61951_ip = 367;
                                continue _fun61951
                            }
                        case 229:
                            var5 = _closure2_slot8;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var10 = var3;
                            if (!(var4 > var0)) {
                                _fun61951_ip = 491;
                                continue _fun61951
                            }
                        case 252:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 4;
                            var5 = var5[var4];
                            var4 = undefined;
                            var11 = var7.bind(var4)(var5);
                            var9 = var11.interpolate;
                            var5 = _closure2_slot8;
                            var4 = var5.get;
                            var15 = var4.bind(var5)();
                            var14 = [50, 0];
                            var13 = [0.9, 1];
                            var12 = 'clamp';
                            var16 = var11;
                            var4 = var16[var9](var15, var14, var13, var12, var11);
                            var7 = _closure2_slot21;
                            var5 = var7.get;
                            var7 = var5.bind(var7)();
                            var5 = var2 - var4;
                            var7 = var7 * var5;
                            var5 = 2;
                            var5 = var7 / var5;
                            var10 = var3 + var5;
                            var6 = var4;
                            _fun61951_ip = 491;
                            continue _fun61951;
                        case 367:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 4;
                            var5 = var5[var4];
                            var4 = undefined;
                            var9 = var7.bind(var4)(var5);
                            var8 = var9.interpolate;
                            var5 = _closure2_slot8;
                            var4 = var5.get;
                            var15 = var4.bind(var5)();
                            var5 = new Array(2);
                            var4 = -50;
                            var5[0] = var4;
                            var5[1] = var0;
                            var13 = [0.9, 1];
                            var12 = 'clamp';
                            var16 = var9;
                            var14 = var5;
                            var0 = var16[var8](var15, var14, var13, var12, var11);
                            var5 = _closure2_slot21;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var4 = -var4;
                            var2 = var2 - var0;
                            var4 = var4 * var2;
                            var2 = 2;
                            var2 = var4 / var2;
                            var10 = var3 + var2;
                            var6 = var0;
                        case 491:
                            var0 = {};
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 7;
                            var2 = var8[var3];
                            var4 = undefined;
                            var9 = var7.bind(var4)(var2);
                            var2 = var9.withSpring;
                            var11 = _closure2_slot21;
                            var1 = var11.get;
                            var1 = var1.bind(var11)();
                            var5 = _closure1_slot9;
                            var1 = var2.bind(var9)(var1, var5);
                            var0.width = var1;
                            var2 = {};
                            var1 = var8[var3];
                            var9 = var7.bind(var4)(var1);
                            var1 = var9.withSpring;
                            var1 = var1.bind(var9)(var10, var5);
                            var2.translateX = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var3 = var8[var3];
                            var4 = var7.bind(var4)(var3);
                            var3 = var4.withSpring;
                            var3 = var3.bind(var4)(var6, var5);
                            var2.scaleX = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var23 = {};
                var23.indicatorTranslateX = var33;
                var23.pressedIndex = var18;
                var23.clampedActiveIndex = var32;
                var32 = 0.04;
                var23.PRESSED_TRANSLATE_AMOUNT = var32;
                var23.indicatorWidth = var26;
                var23.scrollOverflow = var24;
                var24 = var12[var15];
                var24 = var10.bind(var4)(var24);
                var24 = var24.interpolate;
                var23.interpolate = var24;
                var24 = 50;
                var23.SCROLL_OVERFLOW_UPPER_BOUND = var24;
                var24 = 0.9;
                var23.SCROLL_OVERFLOW_MAX_SCALE = var24;
                var24 = 7;
                var24 = var12[var24];
                var24 = var10.bind(var4)(var24);
                var24 = var24.withSpring;
                var23.withSpring = var24;
                var24 = _closure1_slot9;
                var23.SELECTED_INDICATOR_SPRING = var24;
                var7.__closure = var23;
                var23 = 1794186407627.0;
                var7.__workletHash = var23;
                var23 = _closure1_slot14;
                var7.__initData = var23;
                var14 = var8.bind(var14)(var7);
                var7 = var12[var15];
                var23 = var10.bind(var4)(var7);
                var8 = var23.useAnimatedScrollHandler;
                var7 = {};
                var24 = function(arg0) { // Original name: b, environment: var0
                    _fun61952: for (var _fun61952_ip = 0;;) switch (_fun61952_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure2_slot7;
                            var3 = var4.set;
                            var2 = var0.contentOffset;
                            var2 = var2.x;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure2_slot4;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun61952_ip = 63;
                                continue _fun61952
                            }
                        case 41:
                            var2 = _closure2_slot4;
                            var0 = var0.contentOffset;
                            var1 = var0.x;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var26 = {};
                var26.scrollOffset = var29;
                var26.onScrollWorklet = var31;
                var24.__closure = var26;
                var26 = 1586298483424.0;
                var24.__workletHash = var26;
                var26 = _closure1_slot15;
                var24.__initData = var26;
                var7.onScroll = var24;
                var24 = function() { // Original name: $, environment: var0
                    _fun61953: for (var _fun61953_ip = 0;;) switch (_fun61953_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun61953_ip = 23;
                                continue _fun61953
                            }
                        case 13:
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var26 = {};
                var26.onEndDrag = var30;
                var24.__closure = var26;
                var26 = 6364544472149.0;
                var24.__workletHash = var26;
                var26 = _closure1_slot16;
                var24.__initData = var26;
                var7.onEndDrag = var24;
                var7 = var8.bind(var23)(var7);
                var23 = var6.useCallback;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function(arg0) { // Environment: var0
                    _fun61954: for (var _fun61954_ip = 0;;) switch (_fun61954_ip) {
                        case 0:
                            var0 = _closure2_slot19;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun61954_ip = 50;
                                continue _fun61954
                            }
                        case 18:
                            var1 = var2.scrollTo;
                            var0 = {};
                            var4 = arg0;
                            var0.x = var4;
                            var3 = _closure2_slot15;
                            var3 = !var3;
                            var0.animated = var3;
                            var0 = var1.bind(var2)(var0);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var26 = var23.bind(var6)(var5, var8);
                _closure2_slot23 = var26;
                var5 = var12[var15];
                var24 = var10.bind(var4)(var5);
                var23 = var24.useAnimatedReaction;
                var8 = function() { // Original name: P, environment: var0
                    var0 = {};
                    var3 = _closure2_slot7;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var0.scrollOffset = var2;
                    var3 = _closure2_slot6;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var0.activeIndex = var2;
                    var2 = _closure2_slot10;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.itemDimensions = var1;
                    return var0;
                };
                var5 = {};
                var5.scrollOffset = var29;
                var5.activeIndex = var17;
                var5.itemDimensions = var25;
                var8.__closure = var5;
                var5 = 9993285637539.0;
                var8.__workletHash = var5;
                var5 = _closure1_slot17;
                var8.__initData = var5;
                var5 = function(arg0, arg1) { // Original name: F, environment: var0
                    _fun61956: for (var _fun61956_ip = 0;;) switch (_fun61956_ip) {
                        case 0:
                            var1 = arg0;
                            var6 = arg1;
                            var3 = var1.activeIndex;
                            var7 = null;
                            var4 = var7 == var6;
                            var0 = undefined;
                            var2 = undefined;
                            if (var4) {
                                _fun61956_ip = 31;
                                continue _fun61956
                            }
                        case 25:
                            var2 = var6.activeIndex;
                        case 31:
                            if (!(var3 !== var2)) {
                                _fun61956_ip = 335;
                                continue _fun61956
                            }
                        case 38:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 8;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.cheapWorkletShallowEqual;
                            var8 = var7 != var6;
                            var3 = undefined;
                            if (!var8) {
                                _fun61956_ip = 79;
                                continue _fun61956
                            }
                        case 76:
                            var3 = var6;
                        case 79:
                            var3 = var4.bind(var5)(var1, var3);
                            if (var3) {
                                _fun61956_ip = 335;
                                continue _fun61956
                            }
                        case 91:
                            var4 = var1.scrollOffset;
                            var9 = var1.activeIndex;
                            var5 = var1.itemDimensions;
                            var3 = var5.reduce;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun61957: for (var _fun61957_ip = 0;;) switch (_fun61957_ip) {
                                    case 0:
                                        var2 = arg1;
                                        var1 = null;
                                        var3 = var1 == var2;
                                        var0 = undefined;
                                        if (var3) {
                                            _fun61957_ip = 19;
                                            continue _fun61957
                                        }
                                    case 14:
                                        var0 = var2.width;
                                    case 19:
                                        var2 = var1 != var0;
                                        var1 = 0;
                                        if (!var2) {
                                            _fun61957_ip = 31;
                                            continue _fun61957
                                        }
                                    case 28:
                                        var1 = var0;
                                    case 31:
                                        var0 = arg0;
                                        var0 = var0 + var1;
                                        return var0;
                                }
                            };
                            var8 = 0;
                            var6 = var3.bind(var5)(var1, var8);
                            var3 = var5[var9];
                            var10 = var7 == var3;
                            var1 = undefined;
                            if (var10) {
                                _fun61956_ip = 148;
                                continue _fun61956
                            }
                        case 143:
                            var1 = var3.x;
                        case 148:
                            var3 = var7 != var1;
                            var10 = 0;
                            if (!var3) {
                                _fun61956_ip = 160;
                                continue _fun61956
                            }
                        case 157:
                            var10 = var1;
                        case 160:
                            var1 = 1;
                            var11 = var9 - var1;
                            var3 = _closure2_slot11;
                            var3 = var11 * var3;
                            var3 = var10 + var3;
                            var9 = var5[var9];
                            var10 = var7 == var9;
                            var5 = undefined;
                            if (var10) {
                                _fun61956_ip = 200;
                                continue _fun61956
                            }
                        case 195:
                            var5 = var9.width;
                        case 200:
                            var6 = var8 !== var6;
                            if (!var6) {
                                _fun61956_ip = 211;
                                continue _fun61956
                            }
                        case 207:
                            var6 = var7 != var3;
                        case 211:
                            if (!var6) {
                                _fun61956_ip = 218;
                                continue _fun61956
                            }
                        case 214:
                            var6 = var7 != var5;
                        case 218:
                            if (!var6) {
                                _fun61956_ip = 335;
                                continue _fun61956
                            }
                        case 221:
                            var6 = _closure2_slot12;
                            var6 = var4 + var6;
                            var5 = var3 + var5;
                            if (!(!(var6 < var5))) {
                                _fun61956_ip = 289;
                                continue _fun61956
                            }
                        case 237:
                            if (!(var3 < var4)) {
                                _fun61956_ip = 335;
                                continue _fun61956
                            }
                        case 241:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 4;
                            var4 = var6[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.runOnJS;
                            var4 = _closure2_slot23;
                            var5 = var5.bind(var6)(var4);
                            var4 = 16;
                            var4 = var3 - var4;
                            var4 = var5.bind(var0)(var4);
                            _fun61956_ip = 335;
                            continue _fun61956;
                        case 289:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 4;
                            var2 = var5[var2];
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot23;
                            var2 = var2.bind(var4)(var1);
                            var1 = 16;
                            var1 = var3 + var1;
                            var1 = var2.bind(var0)(var1);
                        case 335:
                            return var0;
                    }
                };
                var25 = {};
                var29 = 8;
                var29 = var12[var29];
                var29 = var10.bind(var4)(var29);
                var29 = var29.cheapWorkletShallowEqual;
                var25.cheapWorkletShallowEqual = var29;
                var25.itemSpacing = var28;
                var25.pageWidth = var27;
                var27 = var12[var15];
                var27 = var10.bind(var4)(var27);
                var27 = var27.runOnJS;
                var25.runOnJS = var27;
                var25.scrollToOffset = var26;
                var26 = 16;
                var25.AUTO_SCROLL_BUFFER = var26;
                var5.__closure = var25;
                var25 = 15851319414889.0;
                var5.__workletHash = var25;
                var25 = _closure1_slot18;
                var5.__initData = var25;
                var5 = var23.bind(var24)(var8, var5);
                var8 = var6.useMemo;
                var5 = new Array(8);
                var5[0] = var22;
                var5[1] = var21;
                var5[2] = var20;
                var5[3] = var19;
                var5[4] = var18;
                var5[5] = var17;
                var5[6] = var3;
                var3 = var13.controlsContainer;
                var5[7] = var3;
                var3 = function() { // Environment: var0
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot4;
                    var1 = {};
                    var4 = _closure2_slot16;
                    var4 = var4.controlsContainer;
                    var1.style = var4;
                    var5 = _closure2_slot9;
                    var4 = var5.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun61959: for (var _fun61959_ip = 0;;) switch (_fun61959_ip) {
                            case 0:
                                var0 = arg0;
                                var7 = arg1;
                                var6 = var0.label;
                                var9 = var0.count;
                                var4 = var0.id;
                                var _closure4_slot0 = var7;
                                var3 = _closure1_slot6;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 9;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.TabItem;
                                var0 = {};
                                var0.index = var7;
                                var0.label = var6;
                                var6 = null;
                                var8 = var6 != var9;
                                var6 = undefined;
                                if (!var8) {
                                    _fun61959_ip = 96;
                                    continue _fun61959
                                }
                            case 84:
                                var8 = _closure2_slot2;
                                var6 = var8.bind(var2)(var9);
                            case 96:
                                var0.count = var6;
                                var8 = _closure2_slot0;
                                var0.state = var8;
                                var8 = _closure2_slot1;
                                var0.grow = var8;
                                var8 = _closure2_slot13;
                                var0.pressed = var8;
                                var8 = _closure2_slot6;
                                var6 = var8.get;
                                var6 = var6.bind(var8)();
                                var6 = var7 === var6;
                                var0.selected = var6;
                                var6 = function() { // Original name: onPress, environment: var5
                                    var2 = _closure2_slot14;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var0.onPress = var6;
                                var6 = function() { // Original name: onPressIn, environment: var5
                                    var2 = _closure2_slot13;
                                    var1 = var2.set;
                                    var0 = _closure4_slot0;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var0.onPressIn = var6;
                                var5 = function() { // Original name: onPressOut, environment: var5
                                    var2 = _closure2_slot13;
                                    var1 = var2.set;
                                    var0 = -1;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var0.onPressOut = var5;
                                var0 = var3.bind(var2)(var1, var0, var4);
                                return var0;
                        }
                    };
                    var0 = var4.bind(var5)(var0);
                    var1.children = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var8 = var8.bind(var6)(var3, var5);
                var5 = var6.useMemo;
                var3 = new Array(1);
                var3[0] = var16;
                var0 = function() { // Environment: var0
                    _fun61963: for (var _fun61963_ip = 0;;) switch (_fun61963_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var2 = var0 == var2;
                            if (var2) {
                                _fun61963_ip = 72;
                                continue _fun61963
                            }
                        case 16:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 10;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var3 = var2.Gesture;
                            var2 = var3.Native;
                            var3 = var2.bind(var3)();
                            var2 = var3.simultaneousWithExternalGesture;
                            var1 = _closure2_slot3;
                            var0 = var2.bind(var3)(var1);
                        case 72:
                            return var0;
                    }
                };
                var6 = var5.bind(var6)(var0, var3);
                var5 = _closure1_slot7;
                var3 = _closure1_slot8;
                var0 = {
                    'ref': null,
                    'accessibilityRole': null,
                    'keyboardShouldPersistTaps': 'handled',
                    'horizontal': true,
                    'onScroll': null,
                    'scrollEventThrottle': 16,
                    'showsHorizontalScrollIndicator': false
                };
                var0.ref = var9;
                var9 = 11;
                var9 = var12[var9];
                var10 = var10.bind(var4)(var9);
                var9 = var10.isIOS;
                var10 = var9.bind(var10)();
                var9 = undefined;
                if (!var10) {
                    _fun61946_ip = 1226;
                    continue _fun61946
                }
            case 1220:
                var9 = 'tabbar';
            case 1226:
                var0.accessibilityRole = var9;
                var0.onScroll = var7;
                var7 = false;
                var9 = var13.container;
                var0.contentContainerStyle = var9;
                var0.bounces = var7;
                var10 = _closure1_slot6;
                var9 = _closure1_slot4;
                var7 = {};
                var12 = var13.indicatorContainer;
                var7.style = var12;
                var7.onLayout = var11;
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var11 = var11[var15];
                var11 = var12.bind(var4)(var11);
                var12 = var11.View;
                var11 = {};
                var15 = var13.indicator;
                var13 = new Array(2);
                var13[0] = var15;
                var13[1] = var14;
                var11.style = var13;
                var11 = var10.bind(var4)(var12, var11);
                var7.children = var11;
                var9 = var10.bind(var4)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var0.children = var7;
                var5 = var5.bind(var4)(var3, var0);
                var0 = var5;
                if (!(var2 != var6)) {
                    _fun61946_ip = 1418;
                    continue _fun61946
                }
            case 1371:
                var3 = _closure1_slot6;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 10;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.GestureDetector;
                var1 = {};
                var1.gesture = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1418:
                return var0;
        }
    };
    var2.Tabs = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1676, 33, 3677, 1297, 671, 4034, 5257, 7762, 4917, 478, 2]);