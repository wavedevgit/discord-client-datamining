// design/components/SegmentedControl/native/SegmentedControlPages.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var5 = arg0;
        var14 = var5.pageIndex;
        var _closure2_slot0 = var14;
        var4 = var5.index;
        var _closure2_slot1 = var4;
        var8 = var5.item;
        var17 = var5.activePageRangeStart;
        var _closure2_slot2 = var17;
        var16 = var5.activePageRangeEnd;
        var _closure2_slot3 = var16;
        var3 = {
            'pageIndex': 0,
            'index': 0,
            'item': 0,
            'activePageRangeStart': 0,
            'activePageRangeEnd': 0
        };
        var19 = null;
        var20 = var3;
        var0 = silentSetPrototypeOf(var20, var19);
        var2 = 0;
        var20 = {};
        var19 = var5;
        var18 = var3;
        var7 = copyDataProperties(var20, var19, var18);
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 4;
        var9 = var10[var0];
        var3 = undefined;
        var12 = var6.bind(var3)(var9);
        var11 = var12.useAnimatedProps;
        var9 = function() {
            _fun62716: for (var _fun62716_ip = 0;;) switch (_fun62716_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0 = _closure2_slot1;
                    var1 = var1 !== var0;
                    var0 = {};
                    var2 = 'box-none';
                    if (!var1) {
                        _fun62716_ip = 39;
                        continue _fun62716
                    }
                case 35:
                    var2 = 'none';
                case 39:
                    var0.pointerEvents = var2;
                    var2 = 'auto';
                    if (!var1) {
                        _fun62716_ip = 57;
                        continue _fun62716
                    }
                case 51:
                    var2 = 'no-hide-descendants';
                case 57:
                    var0.importantForAccessibility = var2;
                    var0.accessibilityElementsHidden = var1;
                    return var0;
            }
        };
        var13 = {};
        var13.pageIndex = var14;
        var13.index = var4;
        var9.__closure = var13;
        var13 = 15882774395232.0;
        var9.__workletHash = var13;
        var13 = _closure1_slot16;
        var9.__initData = var13;
        var11 = var11.bind(var12)(var9);
        var13 = _closure1_slot4;
        var12 = var13.useState;
        var9 = function() { // Environment: var1
            _fun62717: for (var _fun62717_ip = 0;;) switch (_fun62717_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var3 = _closure2_slot2;
                    var0 = var3.get;
                    var0 = var0.bind(var3)();
                    var0 = var2 >= var0;
                    if (!var0) {
                        _fun62717_ip = 48;
                        continue _fun62717
                    }
                case 27:
                    var2 = _closure2_slot1;
                    var3 = _closure2_slot3;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var0 = var2 <= var1;
                case 48:
                    var0 = !var0;
                    return var0;
            }
        };
        var13 = var12.bind(var13)(var9);
        var12 = _closure1_slot3;
        var9 = 2;
        var12 = var12.bind(var3)(var13, var9);
        var9 = var12[var2];
        var2 = 1;
        var15 = var12[var2];
        var _closure2_slot4 = var15;
        var2 = var10[var0];
        var13 = var6.bind(var3)(var2);
        var12 = var13.useAnimatedReaction;
        var2 = function() {
            var2 = _closure2_slot2;
            var0 = var2.get;
            var2 = var0.bind(var2)();
            var0 = new Array(2);
            var0[0] = var2;
            var2 = _closure2_slot3;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var0[1] = var1;
            return var0;
        };
        var14 = {};
        var14.activePageRangeStart = var17;
        var14.activePageRangeEnd = var16;
        var2.__closure = var14;
        var14 = 4369092387570.0;
        var2.__workletHash = var14;
        var14 = _closure1_slot17;
        var2.__initData = var14;
        var1 = function arg0() {
            _fun62719: for (var _fun62719_ip = 0;;) switch (_fun62719_ip) {
                case 0:
                    var3 = arg0;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var4 = var3().value;
                    var2 = var1;
                    var0 = undefined;
                    var2 = var2 === var0;
                    var5 = undefined;
                    if (var2) {
                        _fun62719_ip = 27;
                        continue _fun62719
                    }
                case 24:
                    var5 = var4;
                case 27:
                    var4 = undefined;
                    if (var2) {
                        _fun62719_ip = 57;
                        continue _fun62719
                    }
                case 32:
                    var6 = var3().value;
                    var3 = var1;
                    var3 = var3 === var0;
                    var4 = undefined;
                    var2 = var3;
                    if (var3) {
                        _fun62719_ip = 57;
                        continue _fun62719
                    }
                case 51:
                    var4 = var6;
                    var2 = var3;
                case 57:
                    if (var2) {
                        _fun62719_ip = 63;
                        continue _fun62719
                    }
                case 60:
                    var1.return();
                case 63:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var1 = var3[var1];
                    var6 = var2.bind(var0)(var1);
                    var2 = var6.runOnJS;
                    var1 = _closure2_slot4;
                    var2 = var2.bind(var6)(var1);
                    var1 = _closure2_slot1;
                    var1 = var1 >= var5;
                    if (!var1) {
                        _fun62719_ip = 122;
                        continue _fun62719
                    }
                case 114:
                    var3 = _closure2_slot1;
                    var1 = var3 <= var4;
                case 122:
                    var1 = !var1;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var14 = {};
        var14.index = var4;
        var16 = var10[var0];
        var16 = var6.bind(var3)(var16);
        var16 = var16.runOnJS;
        var14.runOnJS = var16;
        var14.setFreeze = var15;
        var1.__closure = var14;
        var14 = 6822814542665.0;
        var1.__workletHash = var14;
        var14 = _closure1_slot18;
        var1.__initData = var14;
        var1 = var12.bind(var13)(var2, var1);
        var2 = _closure1_slot5;
        var1 = _closure1_slot1;
        var0 = var10[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var20 = var0;
        var19 = var7;
        var7 = copyDataProperties(var20, var19);
        var7 = 'animatedProps';
        var0[var7] = var11;
        var7 = _closure1_slot5;
        var5 = 8;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Freeze;
        var5 = {};
        var5.freeze = var9;
        var8 = var8.page;
        var5.children = var8;
        var6 = var7.bind(var3)(var6, var5);
        var5 = 'children';
        var0[var5] = var6;
        var0 = var2.bind(var3)(var1, var0, var4);
        return var0;
    };
    var _closure1_slot22 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ScrollView;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = var6.createAnimatedComponent;
    var3 = var3.bind(var6)(var7);
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function SegmentedControlPagesNativeTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function SegmentedControlPagesNativeTsx2(value){const{runOnJS,updateCurrentActiveIndex}=this.__closure;runOnJS(updateCurrentActiveIndex)(value);}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function SegmentedControlPagesNativeTsx3(){const{pageIndex}=this.__closure;return pageIndex.get();}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function SegmentedControlPagesNativeTsx4(value){const{activeIndex}=this.__closure;activeIndex.set(value);}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function SegmentedControlPagesNativeTsx5(contentOffset,contentSize){const{pageIndex,roundIfClose,pageWidth,reportedPageIndex,runOnJS,onPageChanged}=this.__closure;pageIndex.set(Math.min(Math.max(roundIfClose(contentOffset.x/pageWidth,1e-4),0),roundIfClose(contentSize.width/pageWidth,1e-4)-1));const pageFullyVisible=pageIndex.get()%1===0;if(pageFullyVisible&&reportedPageIndex.get()!==pageIndex.get()){reportedPageIndex.set(pageIndex.get());runOnJS(onPageChanged)(pageIndex.get());}}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function SegmentedControlPagesNativeTsx6(event){const{onBeginDragWorklet}=this.__closure;var _onBeginDragWorklet;(_onBeginDragWorklet=onBeginDragWorklet)===null||_onBeginDragWorklet===void 0||_onBeginDragWorklet(event);}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'function SegmentedControlPagesNativeTsx7(event){const{onEndDragWorklet}=this.__closure;var _onEndDragWorklet;(_onEndDragWorklet=onEndDragWorklet)===null||_onEndDragWorklet===void 0||_onEndDragWorklet(event);}';
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = 'function SegmentedControlPagesNativeTsx8({contentOffset:contentOffset,contentSize:contentSize}){const{scrollTarget,roundIfClose,runOnJS,refreshScrollOffset,resolvePageIndex}=this.__closure;if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{const page=scrollTarget.get();runOnJS(refreshScrollOffset)(page);}}resolvePageIndex(contentOffset,contentSize);}';
    var3.code = var6;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 'function SegmentedControlPagesNativeTsx9(event){const{lastScrollOffsetX,onScrollWorklet,itemCount,pageWidth,activeIndex,runOnJS,refreshScrollOffset,scrollOverflow,scrollTarget,roundIfClose,resolvePageIndex}=this.__closure;var _onScrollWorklet;const{contentOffset:contentOffset,contentSize:contentSize}=event;if(contentSize.width===0){return;}if(lastScrollOffsetX.get()===contentOffset.x){return;}lastScrollOffsetX.set(contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event);const expectedContentSize=itemCount*pageWidth;if(Math.round(expectedContentSize)%Math.round(contentSize.width)!==0){const page=activeIndex.get()*pageWidth;runOnJS(refreshScrollOffset)(page);return;}if(contentOffset.x<0){scrollOverflow.set(contentOffset.x);}else if(contentOffset.x>contentSize.width-pageWidth){scrollOverflow.set(contentOffset.x-(contentSize.width-pageWidth));}else{scrollOverflow.set(0);}if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{return;}}resolvePageIndex(contentOffset,contentSize);}';
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = "function SegmentedControlPagesNativeTsx10(){const{pageIndex,index}=this.__closure;const isHidden=pageIndex.get()!==index;return{pointerEvents:isHidden?'none':'box-none',importantForAccessibility:isHidden?'no-hide-descendants':'auto',accessibilityElementsHidden:isHidden};}";
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = 'function SegmentedControlPagesNativeTsx11(){const{activePageRangeStart,activePageRangeEnd}=this.__closure;return[activePageRangeStart.get(),activePageRangeEnd.get()];}';
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = {};
    var6 = 'function SegmentedControlPagesNativeTsx12([start,end]){const{index,runOnJS,setFreeze}=this.__closure;const isInActiveRange=index>=start&&index<=end;runOnJS(setFreeze)(!isInActiveRange);}';
    var3.code = var6;
    var _closure1_slot18 = var3;
    var3 = {};
    var6 = 'function SegmentedControlPagesNativeTsx13(min,max){const{activePageRangeStart,activePageRangeEnd}=this.__closure;activePageRangeStart.set(Math.min(activePageRangeStart.get(),min));activePageRangeEnd.set(Math.max(activePageRangeEnd.get(),max));}';
    var3.code = var6;
    var _closure1_slot19 = var3;
    var3 = {};
    var6 = 'function SegmentedControlPagesNativeTsx14(){const{activeIndex,pressedIndex}=this.__closure;return{activeIndex:activeIndex.get(),pressedIndex:pressedIndex.get()};}';
    var3.code = var6;
    var _closure1_slot20 = var3;
    var3 = {};
    var6 = 'function SegmentedControlPagesNativeTsx15({activeIndex:activeIndex,pressedIndex:pressedIndex}){const{expandActivePageRange}=this.__closure;let min=activeIndex;let max=activeIndex;if(pressedIndex!==-1){min=Math.min(activeIndex,pressedIndex);max=Math.max(activeIndex,pressedIndex);}expandActivePageRange(Math.floor(min),Math.ceil(max));}';
    var3.code = var6;
    var _closure1_slot21 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/SegmentedControl/native/SegmentedControlPages.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62720: for (var _fun62720_ip = 0;;) switch (_fun62720_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.state;
                var13 = var1.style;
                var10 = var1.bounces;
                var6 = var1.nativeGesture;
                var29 = var1.onBeginDragWorklet;
                var _closure2_slot0 = var29;
                var28 = var1.onEndDragWorklet;
                var _closure2_slot1 = var28;
                var26 = var1.onScrollWorklet;
                var _closure2_slot2 = var26;
                var8 = var0.items;
                var3 = var0.activeIndex;
                var _closure2_slot3 = var3;
                var12 = var0.pagerRef;
                var _closure2_slot4 = var12;
                var21 = var0.scrollTarget;
                var _closure2_slot5 = var21;
                var22 = var0.scrollOverflow;
                var _closure2_slot6 = var22;
                var2 = var0.pressedIndex;
                var7 = var0.onPageChangeRef;
                var _closure2_slot7 = var7;
                var11 = var0.pageWidth;
                var _closure2_slot8 = var11;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var24 = 4;
                var0 = var20[var24];
                var4 = undefined;
                var14 = var19.bind(var4)(var0);
                var9 = var14.useSharedValue;
                var0 = var3.get;
                var0 = var0.bind(var3)();
                var0 = var9.bind(var14)(var0);
                var _closure2_slot9 = var0;
                var9 = var20[var24];
                var15 = var19.bind(var4)(var9);
                var14 = var15.useSharedValue;
                var9 = var3.get;
                var9 = var9.bind(var3)();
                var16 = var14.bind(var15)(var9);
                var _closure2_slot10 = var16;
                var25 = var8.length;
                var _closure2_slot11 = var25;
                var9 = var20[var24];
                var14 = var19.bind(var4)(var9);
                var9 = var14.useSharedValue;
                var27 = var9.bind(var14)(var4);
                var _closure2_slot12 = var27;
                var15 = _closure1_slot4;
                var14 = var15.useRef;
                var9 = false;
                var9 = var14.bind(var15)(var9);
                var _closure2_slot13 = var9;
                var15 = _closure1_slot4;
                var14 = var15.useRef;
                var9 = var3.get;
                var9 = var9.bind(var3)();
                var9 = var14.bind(var15)(var9);
                var _closure2_slot14 = var9;
                var17 = _closure1_slot4;
                var15 = var17.useCallback;
                var14 = function(arg0) { // Environment: var5
                    var1 = _closure2_slot14;
                    var0 = arg0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var9 = new Array(0);
                var23 = var15.bind(var17)(var14, var9);
                var _closure2_slot15 = var23;
                var9 = var20[var24];
                var17 = var19.bind(var4)(var9);
                var15 = var17.useAnimatedReaction;
                var14 = function() {
                    var1 = _closure2_slot3;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = {};
                var9.activeIndex = var3;
                var14.__closure = var9;
                var9 = 4275537317596.0;
                var14.__workletHash = var9;
                var9 = _closure1_slot7;
                var14.__initData = var9;
                var9 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.runOnJS;
                    var1 = _closure2_slot15;
                    var2 = var2.bind(var3)(var1);
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var18 = {};
                var30 = var20[var24];
                var30 = var19.bind(var4)(var30);
                var30 = var30.runOnJS;
                var18.runOnJS = var30;
                var18.updateCurrentActiveIndex = var23;
                var9.__closure = var18;
                var18 = 1219187007872.0;
                var9.__workletHash = var18;
                var18 = _closure1_slot8;
                var9.__initData = var18;
                var9 = var15.bind(var17)(var14, var9);
                var9 = var20[var24];
                var17 = var19.bind(var4)(var9);
                var15 = var17.useAnimatedReaction;
                var14 = function() {
                    var1 = _closure2_slot9;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = {};
                var9.pageIndex = var0;
                var14.__closure = var9;
                var9 = 3363652844798.0;
                var14.__workletHash = var9;
                var9 = _closure1_slot9;
                var14.__initData = var9;
                var9 = function arg0() {
                    var2 = _closure2_slot3;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var18 = {};
                var18.activeIndex = var3;
                var9.__closure = var18;
                var18 = 10225590895783.0;
                var9.__workletHash = var18;
                var18 = _closure1_slot10;
                var9.__initData = var18;
                var9 = var15.bind(var17)(var14, var9);
                var15 = _closure1_slot4;
                var14 = var15.useCallback;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function(arg0) { // Environment: var5
                    _fun62726: for (var _fun62726_ip = 0;;) switch (_fun62726_ip) {
                        case 0:
                            var1 = _closure2_slot7;
                            var3 = null;
                            var1 = var3 == var1;
                            if (var1) {
                                _fun62726_ip = 29;
                                continue _fun62726
                            }
                        case 16:
                            var2 = _closure2_slot7;
                            var2 = var2.current;
                            var1 = var3 == var2;
                        case 29:
                            if (var1) {
                                _fun62726_ip = 49;
                                continue _fun62726
                            }
                        case 32:
                            var2 = _closure2_slot7;
                            var1 = var2.current;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                        case 49:
                            var0 = undefined;
                            return var0;
                    }
                };
                var17 = var14.bind(var15)(var7, var9);
                var _closure2_slot16 = var17;
                var15 = _closure1_slot4;
                var14 = var15.useCallback;
                var9 = new Array(2);
                var9[0] = var12;
                var9[1] = var21;
                var7 = function(arg0) { // Environment: var5
                    _fun62727: for (var _fun62727_ip = 0;;) switch (_fun62727_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot5;
                            var0 = var1.set;
                            var0 = var0.bind(var1)(var4);
                            var0 = _closure2_slot4;
                            var5 = null;
                            var1 = var5 == var0;
                            var0 = undefined;
                            var3 = undefined;
                            if (var1) {
                                _fun62727_ip = 53;
                                continue _fun62727
                            }
                        case 37:
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            var1 = var5 == var2;
                            var3 = var2;
                        case 53:
                            if (var1) {
                                _fun62727_ip = 80;
                                continue _fun62727
                            }
                        case 56:
                            var2 = var3.scrollTo;
                            var1 = {};
                            var1.x = var4;
                            var4 = false;
                            var1.animated = var4;
                            var1 = var2.bind(var3)(var1);
                        case 80:
                            return var0;
                    }
                };
                var23 = var14.bind(var15)(var7, var9);
                var _closure2_slot17 = var23;
                var15 = _closure1_slot4;
                var14 = var15.useEffect;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var23;
                var7 = function() { // Environment: var5
                    _fun62728: for (var _fun62728_ip = 0;;) switch (_fun62728_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            var2 = 0;
                            if (!(var1 > var2)) {
                                _fun62728_ip = 78;
                                continue _fun62728
                            }
                        case 13:
                            var1 = _closure2_slot13;
                            var1 = var1.current;
                            if (var1) {
                                _fun62728_ip = 78;
                                continue _fun62728
                            }
                        case 25:
                            var3 = _closure2_slot13;
                            var1 = true;
                            var3.current = var1;
                            var1 = _closure2_slot14;
                            var1 = var1.current;
                            if (!(var1 > var2)) {
                                _fun62728_ip = 78;
                                continue _fun62728
                            }
                        case 50:
                            var1 = _closure2_slot14;
                            var2 = var1.current;
                            var1 = _closure2_slot8;
                            var2 = var2 * var1;
                            var1 = _closure2_slot17;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 78:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var14.bind(var15)(var7, var9);
                var15 = _closure1_slot4;
                var14 = var15.useCallback;
                var9 = function arg0, arg1() {
                    _fun62729: for (var _fun62729_ip = 0;;) switch (_fun62729_ip) {
                        case 0:
                            var6 = _closure2_slot9;
                            var7 = var6.set;
                            var0 = global;
                            var10 = var0.Math;
                            var9 = var10.min;
                            var15 = var0.Math;
                            var14 = var15.max;
                            var5 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var3 = 5;
                            var4 = var11[var3];
                            var0 = undefined;
                            var16 = var5.bind(var0)(var4);
                            var8 = var16.roundIfClose;
                            var4 = arg0;
                            var4 = var4.x;
                            var13 = _closure2_slot8;
                            var4 = var4 / var13;
                            var12 = 0.0001;
                            var8 = var8.bind(var16)(var4, var12);
                            var4 = 0;
                            var8 = var14.bind(var15)(var8, var4);
                            var3 = var11[var3];
                            var11 = var5.bind(var0)(var3);
                            var5 = var11.roundIfClose;
                            var3 = arg1;
                            var3 = var3.width;
                            var3 = var3 / var13;
                            var3 = var5.bind(var11)(var3, var12);
                            var5 = 1;
                            var3 = var3 - var5;
                            var3 = var9.bind(var10)(var8, var3);
                            var3 = var7.bind(var6)(var3);
                            var3 = var6.get;
                            var3 = var3.bind(var6)();
                            var3 = var3 % var5;
                            var3 = var3 === var4;
                            if (!var3) {
                                _fun62729_ip = 208;
                                continue _fun62729
                            }
                        case 178:
                            var5 = _closure2_slot10;
                            var4 = var5.get;
                            var5 = var4.bind(var5)();
                            var6 = _closure2_slot9;
                            var4 = var6.get;
                            var4 = var4.bind(var6)();
                            var3 = var5 !== var4;
                        case 208:
                            if (!var3) {
                                _fun62729_ip = 286;
                                continue _fun62729
                            }
                        case 211:
                            var6 = _closure2_slot10;
                            var5 = var6.set;
                            var3 = _closure2_slot9;
                            var4 = var3.get;
                            var4 = var4.bind(var3)();
                            var4 = var5.bind(var6)(var4);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 4;
                            var2 = var5[var2];
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot16;
                            var2 = var2.bind(var4)(var1);
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            var1 = var2.bind(var0)(var1);
                        case 286:
                            return var0;
                    }
                };
                var7 = {};
                var7.pageIndex = var0;
                var18 = 5;
                var30 = var20[var18];
                var30 = var19.bind(var4)(var30);
                var30 = var30.roundIfClose;
                var7.roundIfClose = var30;
                var7.pageWidth = var11;
                var7.reportedPageIndex = var16;
                var30 = var20[var24];
                var30 = var19.bind(var4)(var30);
                var30 = var30.runOnJS;
                var7.runOnJS = var30;
                var7.onPageChanged = var17;
                var9.__closure = var7;
                var7 = 4668517096289.0;
                var9.__workletHash = var7;
                var7 = _closure1_slot11;
                var9.__initData = var7;
                var7 = new Array(4);
                var7[0] = var17;
                var7[1] = var0;
                var7[2] = var11;
                var7[3] = var16;
                var17 = var14.bind(var15)(var9, var7);
                var _closure2_slot18 = var17;
                var7 = var20[var24];
                var14 = var19.bind(var4)(var7);
                var9 = var14.useAnimatedScrollHandler;
                var7 = {};
                var15 = function arg0() {
                    _fun62730: for (var _fun62730_ip = 0;;) switch (_fun62730_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun62730_ip = 27;
                                continue _fun62730
                            }
                        case 13:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 27:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = {};
                var16.onBeginDragWorklet = var29;
                var15.__closure = var16;
                var16 = 2903273634804.0;
                var15.__workletHash = var16;
                var16 = _closure1_slot12;
                var15.__initData = var16;
                var7.onBeginDrag = var15;
                var15 = function arg0() {
                    _fun62731: for (var _fun62731_ip = 0;;) switch (_fun62731_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun62731_ip = 27;
                                continue _fun62731
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 27:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = {};
                var16.onEndDragWorklet = var28;
                var15.__closure = var16;
                var16 = 14857102500821.0;
                var15.__workletHash = var16;
                var16 = _closure1_slot13;
                var15.__initData = var16;
                var7.onEndDrag = var15;
                var15 = function arg0() {
                    _fun62732: for (var _fun62732_ip = 0;;) switch (_fun62732_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.contentOffset;
                            var2 = var0.contentSize;
                            var4 = _closure2_slot5;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            var5 = -1;
                            if (!(var5 !== var1)) {
                                _fun62732_ip = 187;
                                continue _fun62732
                            }
                        case 44:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 5;
                            var4 = var6[var4];
                            var6 = undefined;
                            var9 = var7.bind(var6)(var4);
                            var8 = var9.roundIfClose;
                            var7 = var3.x;
                            var10 = _closure2_slot5;
                            var4 = var10.get;
                            var4 = var4.bind(var10)();
                            var7 = var7 - var4;
                            var4 = 0.0001;
                            var7 = var8.bind(var9)(var7, var4);
                            var4 = 0;
                            if (!(var4 !== var7)) {
                                _fun62732_ip = 173;
                                continue _fun62732
                            }
                        case 119:
                            var7 = _closure2_slot5;
                            var4 = var7.get;
                            var4 = var4.bind(var7)();
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 4;
                            var1 = var8[var1];
                            var8 = var7.bind(var6)(var1);
                            var7 = var8.runOnJS;
                            var1 = _closure2_slot17;
                            var1 = var7.bind(var8)(var1);
                            var1 = var1.bind(var6)(var4);
                            _fun62732_ip = 187;
                            continue _fun62732;
                        case 173:
                            var4 = _closure2_slot5;
                            var1 = var4.set;
                            var1 = var1.bind(var4)(var5);
                        case 187:
                            var1 = _closure2_slot18;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var3, var2);
                            return var0;
                    }
                };
                var16 = {};
                var16.scrollTarget = var21;
                var28 = var20[var18];
                var28 = var19.bind(var4)(var28);
                var28 = var28.roundIfClose;
                var16.roundIfClose = var28;
                var28 = var20[var24];
                var28 = var19.bind(var4)(var28);
                var28 = var28.runOnJS;
                var16.runOnJS = var28;
                var16.refreshScrollOffset = var23;
                var16.resolvePageIndex = var17;
                var15.__closure = var16;
                var16 = 10636475595563.0;
                var15.__workletHash = var16;
                var16 = _closure1_slot14;
                var15.__initData = var16;
                var7.onMomentumEnd = var15;
                var15 = function arg0() {
                    _fun62733: for (var _fun62733_ip = 0;;) switch (_fun62733_ip) {
                        case 0:
                            var6 = arg0;
                            var4 = var6.contentOffset;
                            var3 = var6.contentSize;
                            var0 = var3.width;
                            var5 = 0;
                            if (!(var5 !== var0)) {
                                _fun62733_ip = 452;
                                continue _fun62733
                            }
                        case 29:
                            var2 = _closure2_slot12;
                            var0 = var2.get;
                            var2 = var0.bind(var2)();
                            var0 = var4.x;
                            if (!(var2 !== var0)) {
                                _fun62733_ip = 452;
                                continue _fun62733
                            }
                        case 57:
                            var7 = _closure2_slot12;
                            var2 = var7.set;
                            var0 = var4.x;
                            var0 = var2.bind(var7)(var0);
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun62733_ip = 97;
                                continue _fun62733
                            }
                        case 86:
                            var2 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var6);
                        case 97:
                            var0 = global;
                            var7 = var0.Math;
                            var6 = var7.round;
                            var8 = _closure2_slot11;
                            var2 = _closure2_slot8;
                            var2 = var8 * var2;
                            var2 = var6.bind(var7)(var2);
                            var7 = var0.Math;
                            var6 = var7.round;
                            var0 = var3.width;
                            var0 = var6.bind(var7)(var0);
                            var0 = var2 % var0;
                            if (!(var0 != var5)) {
                                _fun62733_ip = 226;
                                continue _fun62733
                            }
                        case 156:
                            var2 = _closure2_slot3;
                            var0 = var2.get;
                            var2 = var0.bind(var2)();
                            var0 = _closure2_slot8;
                            var6 = var2 * var0;
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 4;
                            var0 = var2[var0];
                            var2 = undefined;
                            var8 = var7.bind(var2)(var0);
                            var7 = var8.runOnJS;
                            var0 = _closure2_slot17;
                            var0 = var7.bind(var8)(var0);
                            var0 = var0.bind(var2)(var6);
                            _fun62733_ip = 452;
                            continue _fun62733;
                        case 226:
                            var0 = var4.x;
                            if (!(!(var0 < var5))) {
                                _fun62733_ip = 311;
                                continue _fun62733
                            }
                        case 235:
                            var2 = var4.x;
                            var6 = var3.width;
                            var0 = _closure2_slot8;
                            var0 = var6 - var0;
                            if (!(!(var2 > var0))) {
                                _fun62733_ip = 273;
                                continue _fun62733
                            }
                        case 257:
                            var2 = _closure2_slot6;
                            var0 = var2.set;
                            var0 = var0.bind(var2)(var5);
                            _fun62733_ip = 330;
                            continue _fun62733;
                        case 273:
                            var6 = _closure2_slot6;
                            var2 = var6.set;
                            var7 = var4.x;
                            var8 = var3.width;
                            var0 = _closure2_slot8;
                            var0 = var8 - var0;
                            var0 = var7 - var0;
                            var0 = var2.bind(var6)(var0);
                            _fun62733_ip = 330;
                            continue _fun62733;
                        case 311:
                            var6 = _closure2_slot6;
                            var2 = var6.set;
                            var0 = var4.x;
                            var0 = var2.bind(var6)(var0);
                        case 330:
                            var2 = _closure2_slot5;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var6 = -1;
                            if (!(var6 !== var0)) {
                                _fun62733_ip = 440;
                                continue _fun62733
                            }
                        case 353:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 5;
                            var2 = var2[var0];
                            var0 = undefined;
                            var9 = var7.bind(var0)(var2);
                            var8 = var9.roundIfClose;
                            var7 = var4.x;
                            var10 = _closure2_slot5;
                            var2 = var10.get;
                            var2 = var2.bind(var10)();
                            var7 = var7 - var2;
                            var2 = 0.0001;
                            var2 = var8.bind(var9)(var7, var2);
                            if (!(var5 === var2)) {
                                _fun62733_ip = 456;
                                continue _fun62733
                            }
                        case 426:
                            var5 = _closure2_slot5;
                            var2 = var5.set;
                            var2 = var2.bind(var5)(var6);
                        case 440:
                            var2 = _closure2_slot18;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var4, var3);
                        case 452:
                            var1 = undefined;
                            return var1;
                        case 456:
                            return var0;
                    }
                };
                var16 = {};
                var16.lastScrollOffsetX = var27;
                var16.onScrollWorklet = var26;
                var16.itemCount = var25;
                var16.pageWidth = var11;
                var16.activeIndex = var3;
                var24 = var20[var24];
                var24 = var19.bind(var4)(var24);
                var24 = var24.runOnJS;
                var16.runOnJS = var24;
                var16.refreshScrollOffset = var23;
                var16.scrollOverflow = var22;
                var16.scrollTarget = var21;
                var18 = var20[var18];
                var18 = var19.bind(var4)(var18);
                var18 = var18.roundIfClose;
                var16.roundIfClose = var18;
                var16.resolvePageIndex = var17;
                var15.__closure = var16;
                var16 = 9933659944135.0;
                var15.__workletHash = var16;
                var16 = _closure1_slot15;
                var15.__initData = var16;
                var7.onScroll = var15;
                var9 = var9.bind(var14)(var7);
                var16 = _closure1_slot4;
                var15 = var16.useMemo;
                var14 = new Array(1);
                var14[0] = var11;
                var7 = function() { // Environment: var5
                    var0 = {};
                    var1 = 1;
                    var0.flex = var1;
                    var1 = _closure2_slot8;
                    var0.width = var1;
                    return var0;
                };
                var14 = var15.bind(var16)(var7, var14);
                var _closure2_slot19 = var14;
                var16 = _closure1_slot4;
                var15 = var16.useMemo;
                var7 = new Array(2);
                var7[0] = var0;
                var7[1] = var11;
                var0 = function() { // Environment: var5
                    _fun62735: for (var _fun62735_ip = 0;;) switch (_fun62735_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot9;
                            var1 = var3.get;
                            var4 = var1.bind(var3)();
                            var1 = null;
                            var5 = var1 != var4;
                            var1 = 0;
                            var3 = 0;
                            if (!var5) {
                                _fun62735_ip = 34;
                                continue _fun62735
                            }
                        case 31:
                            var3 = var4;
                        case 34:
                            var2 = _closure2_slot8;
                            var2 = var3 * var2;
                            var0.x = var2;
                            var0.y = var1;
                            return var0;
                    }
                };
                var7 = var15.bind(var16)(var0, var7);
                var0 = function arg0, arg1() {
                    var10 = arg0;
                    var _closure3_slot0 = var10;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var1 = var5[var3];
                    var6 = undefined;
                    var8 = var4.bind(var6)(var1);
                    var2 = var8.useSharedValue;
                    var1 = var10.get;
                    var1 = var1.bind(var10)();
                    var2 = var2.bind(var8)(var1);
                    var _closure3_slot2 = var2;
                    var1 = var5[var3];
                    var9 = var4.bind(var6)(var1);
                    var8 = var9.useSharedValue;
                    var1 = var10.get;
                    var1 = var1.bind(var10)();
                    var1 = var8.bind(var9)(var1);
                    var _closure3_slot3 = var1;
                    var10 = _closure1_slot4;
                    var9 = var10.useCallback;
                    var8 = function arg0, arg1() {
                        var4 = _closure3_slot2;
                        var3 = var4.set;
                        var0 = global;
                        var7 = var0.Math;
                        var6 = var7.min;
                        var2 = var4.get;
                        var5 = var2.bind(var4)();
                        var2 = arg0;
                        var2 = var6.bind(var7)(var5, var2);
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure3_slot3;
                        var1 = var2.set;
                        var5 = var0.Math;
                        var4 = var5.max;
                        var0 = var2.get;
                        var3 = var0.bind(var2)();
                        var0 = arg1;
                        var0 = var4.bind(var5)(var3, var0);
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var11 = {};
                    var11.activePageRangeStart = var2;
                    var11.activePageRangeEnd = var1;
                    var8.__closure = var11;
                    var11 = 2331757825366.0;
                    var8.__workletHash = var11;
                    var7 = _closure1_slot19;
                    var8.__initData = var7;
                    var7 = new Array(2);
                    var7[0] = var1;
                    var7[1] = var2;
                    var7 = var9.bind(var10)(var8, var7);
                    var _closure3_slot4 = var7;
                    var3 = var5[var3];
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.useAnimatedReaction;
                    var3 = function() { // Environment: var0
                        var0 = function() {
                            var0 = {};
                            var3 = _closure3_slot0;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var0.activeIndex = var2;
                            var2 = _closure3_slot1;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var0.pressedIndex = var1;
                            return var0;
                        };
                        var1 = {};
                        var3 = _closure3_slot0;
                        var1.activeIndex = var3;
                        var2 = _closure3_slot1;
                        var1.pressedIndex = var2;
                        var0.__closure = var1;
                        var1 = 6772272225245.0;
                        var0.__workletHash = var1;
                        var1 = _closure1_slot20;
                        var0.__initData = var1;
                        return var0;
                    };
                    var3 = var3.bind(var6)();
                    var0 = function() { // Environment: var0
                        var0 = function arg0() {
                            _fun62741: for (var _fun62741_ip = 0;;) switch (_fun62741_ip) {
                                case 0:
                                    var0 = arg0;
                                    var6 = var0.activeIndex;
                                    var3 = var0.pressedIndex;
                                    var0 = -1;
                                    var5 = var6;
                                    var4 = var5;
                                    if (!(var0 !== var3)) {
                                        _fun62741_ip = 67;
                                        continue _fun62741
                                    }
                                case 31:
                                    var0 = global;
                                    var2 = var0.Math;
                                    var1 = var2.min;
                                    var5 = var1.bind(var2)(var6, var3);
                                    var2 = var0.Math;
                                    var0 = var2.max;
                                    var4 = var0.bind(var2)(var6, var3);
                                case 67:
                                    var3 = _closure3_slot4;
                                    var0 = global;
                                    var2 = var0.Math;
                                    var1 = var2.floor;
                                    var2 = var1.bind(var2)(var5);
                                    var1 = var0.Math;
                                    var0 = var1.ceil;
                                    var1 = var0.bind(var1)(var4);
                                    var0 = undefined;
                                    var1 = var3.bind(var0)(var2, var1);
                                    return var0;
                            }
                        };
                        var1 = {};
                        var2 = _closure3_slot4;
                        var1.expandActivePageRange = var2;
                        var0.__closure = var1;
                        var1 = 14123388242859.0;
                        var0.__workletHash = var1;
                        var1 = _closure1_slot21;
                        var0.__initData = var1;
                        return var0;
                    };
                    var0 = var0.bind(var6)();
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
                };
                var3 = var0.bind(var4)(var3, var2);
                var2 = _closure1_slot3;
                var0 = 2;
                var3 = var2.bind(var4)(var3, var0);
                var0 = 0;
                var2 = var3[var0];
                var _closure2_slot20 = var2;
                var2 = 1;
                var2 = var3[var2];
                var _closure2_slot21 = var2;
                if (!(var0 !== var11)) {
                    _fun62720_ip = 1499;
                    continue _fun62720
                }
            case 1261:
                var3 = _closure1_slot5;
                var2 = _closure1_slot6;
                var0 = {
                    'ref': null,
                    'style': null,
                    'contentOffset': null,
                    'keyboardShouldPersistTaps': 'handled',
                    'showsHorizontalScrollIndicator': false,
                    'pagingEnabled': true
                };
                var0.ref = var12;
                var12 = new Array(2);
                var12[0] = var14;
                var12[1] = var13;
                var0.style = var12;
                var0.contentOffset = var7;
                var7 = true;
                var0.snapToInterval = var11;
                var11 = 'center';
                var0.snapToAlignment = var11;
                var11 = 'fast';
                var0.decelerationRate = var11;
                var0.centerContent = var7;
                var0.bounces = var10;
                var0.horizontal = var7;
                var10 = 'none';
                var0.accessibilityRole = var10;
                var0.onScroll = var9;
                var0.disableIntervalMomentum = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 6;
                var7 = var10[var7];
                var9 = var9.bind(var4)(var7);
                var7 = var9.isIOS;
                var9 = var7.bind(var9)();
                var7 = undefined;
                if (!var9) {
                    _fun62720_ip = 1411;
                    continue _fun62720
                }
            case 1408:
                var7 = 32;
            case 1411:
                var0.scrollEventThrottle = var7;
                var7 = var8.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    var4 = arg1;
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot22;
                    var1 = {};
                    var1.index = var4;
                    var5 = _closure2_slot20;
                    var1.activePageRangeStart = var5;
                    var5 = _closure2_slot21;
                    var1.activePageRangeEnd = var5;
                    var5 = _closure2_slot10;
                    var1.pageIndex = var5;
                    var0 = _closure2_slot19;
                    var1.style = var0;
                    var0 = arg0;
                    var1.item = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var5 = var7.bind(var8)(var5);
                var0.children = var5;
                var5 = var3.bind(var4)(var2, var0);
                var2 = null;
                var0 = var5;
                if (!(var2 != var6)) {
                    _fun62720_ip = 1497;
                    continue _fun62720
                }
            case 1450:
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.GestureDetector;
                var1 = {};
                var1.gesture = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1497:
                return var0;
            case 1499:
                var0 = null;
                return var0;
        }
    };
    var2.SegmentedControlPages = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 3721, 7875, 478, 4963, 4040, 2]);