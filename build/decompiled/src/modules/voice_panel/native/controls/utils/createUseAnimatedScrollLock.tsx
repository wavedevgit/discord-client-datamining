// modules/voice_panel/native/controls/utils/createUseAnimatedScrollLock.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var4);
    var3 = 1;
    var3 = var6[var3];
    var4 = var5.bind(var0)(var3);
    var3 = var4.isAndroid;
    var3 = var3.bind(var4)();
    var _closure1_slot2 = var3;
    var4 = var7.createContext;
    var3 = function() { // Environment: var1
        var0 = {};
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var4 = {};
    var7 = 'function onBeginDrag_createUseAnimatedScrollLockTsx1(_,context){const{isDragScrolling}=this.__closure;context.momentumEndCount=0;isDragScrolling.set(true);}';
    var4.code = var7;
    var _closure1_slot3 = var4;
    var4 = {};
    var7 = 'function onEndDrag_createUseAnimatedScrollLockTsx2(event){const{isDragScrolling,scrollLocked}=this.__closure;var _event$velocity$y,_event$velocity;isDragScrolling.set(false);if(Math.abs((_event$velocity$y=(_event$velocity=event.velocity)===null||_event$velocity===void 0?void 0:_event$velocity.y)!==null&&_event$velocity$y!==void 0?_event$velocity$y:0)===0){scrollLocked.set(false);}}';
    var4.code = var7;
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = 'function onMomentumEnd_createUseAnimatedScrollLockTsx3(event,context){const{IS_ANDROID,scrollLocked}=this.__closure;if(IS_ANDROID){var _context$momentumEndC;let count=(_context$momentumEndC=context===null||context===void 0?void 0:context.momentumEndCount)!==null&&_context$momentumEndC!==void 0?_context$momentumEndC:0;count+=1;if(count===3){scrollLocked.set(false);}else if(context!=null){context.momentumEndCount=count;}}else{scrollLocked.set(false);}}';
    var4.code = var7;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'function onScroll_createUseAnimatedScrollLockTsx4(event){const{isDragScrolling,IS_ANDROID,scrollTo,scrollerRef,scrollOffsetValue,scrollLocked,onScrollHandler,runOnJS,onScrollHandlerWorkletized}=this.__closure;var _onScrollHandlerWorkl;const newScrollPosition=event.contentOffset.y;if(isDragScrolling.get()!==true){let scrollPosition=newScrollPosition;if(IS_ANDROID&&scrollPosition<0){scrollPosition=0;scrollTo(scrollerRef,0,0,false);}scrollOffsetValue.set(scrollPosition);}else{const isUp=newScrollPosition<scrollOffsetValue.get();if(scrollLocked.get()||isUp&&newScrollPosition<=0){if(!scrollLocked.get()){scrollLocked.set(true);}scrollTo(scrollerRef,0,0,false);scrollOffsetValue.set(0);}else{scrollOffsetValue.set(newScrollPosition);}}const{width:width,height:height}=event.layoutMeasurement;const{width:contentWidth,height:contentHeight}=event.contentSize;onScrollHandler!=null&&runOnJS(onScrollHandler)({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});(_onScrollHandlerWorkl=onScrollHandlerWorkletized)===null||_onScrollHandlerWorkl===void 0||_onScrollHandlerWorkl({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});}';
    var4.code = var7;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function createUseAnimatedScrollLockTsx5(){const{scrollLocked}=this.__closure;return{showsVerticalScrollIndicator:!scrollLocked.get()};}';
    var4.code = var7;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/utils/createUseAnimatedScrollLock.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ControlsGestureScrollLock = var3;
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: createUseAnimatedScrollLock, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var0 = function() { // Environment: var0
            _fun105500: for (var _fun105500_ip = 0;;) switch (_fun105500_ip) {
                case 0:
                    var0 = arguments[0];
                    var7 = undefined;
                    if (!(var0 === var7)) {
                        _fun105500_ip = 13;
                        continue _fun105500
                    }
                case 11:
                    var0 = {};
                case 13:
                    var16 = var0.onScrollHandler;
                    var _closure3_slot0 = var16;
                    var15 = var0.onScrollHandlerWorkletized;
                    var _closure3_slot1 = var15;
                    var _closure3_slot2 = var7;
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var4 = 2;
                    var0 = var9[var4];
                    var1 = var5.bind(var7)(var0);
                    var0 = var1.useAnimatedRef;
                    var2 = var0.bind(var1)();
                    _closure3_slot2 = var2;
                    var0 = {};
                    var1 = var9[var4];
                    var12 = var5.bind(var7)(var1);
                    var11 = var12.useAnimatedScrollHandler;
                    var10 = {};
                    var8 = function(arg0, arg1) { // Original name: w, environment: var3
                        var1 = 0;
                        var0 = arg1;
                        var0.momentumEndCount = var1;
                        var2 = _closure2_slot3;
                        var1 = var2.set;
                        var0 = true;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var13 = {};
                    var18 = _closure2_slot3;
                    var13.isDragScrolling = var18;
                    var8.__closure = var13;
                    var13 = 16433590303176.0;
                    var8.__workletHash = var13;
                    var13 = _closure1_slot3;
                    var8.__initData = var13;
                    var10.onBeginDrag = var8;
                    var13 = function(arg0) { // Original name: H, environment: var3
                        _fun105502: for (var _fun105502_ip = 0;;) switch (_fun105502_ip) {
                            case 0:
                                var2 = _closure2_slot3;
                                var0 = var2.set;
                                var3 = false;
                                var0 = var0.bind(var2)(var3);
                                var0 = global;
                                var6 = var0.Math;
                                var5 = var6.abs;
                                var0 = arg0;
                                var4 = var0.velocity;
                                var2 = null;
                                var8 = var2 == var4;
                                var0 = undefined;
                                var7 = undefined;
                                if (var8) {
                                    _fun105502_ip = 60;
                                    continue _fun105502
                                }
                            case 55:
                                var7 = var4.y;
                            case 60:
                                var8 = var2 != var7;
                                var4 = 0;
                                var2 = 0;
                                if (!var8) {
                                    _fun105502_ip = 74;
                                    continue _fun105502
                                }
                            case 71:
                                var2 = var7;
                            case 74:
                                var2 = var5.bind(var6)(var2);
                                if (!(var4 === var2)) {
                                    _fun105502_ip = 97;
                                    continue _fun105502
                                }
                            case 83:
                                var2 = _closure2_slot1;
                                var1 = var2.set;
                                var1 = var1.bind(var2)(var3);
                            case 97:
                                return var0;
                        }
                    };
                    var14 = {};
                    var14.isDragScrolling = var18;
                    var8 = _closure2_slot1;
                    var14.scrollLocked = var8;
                    var13.__closure = var14;
                    var14 = 1594981610850.0;
                    var13.__workletHash = var14;
                    var14 = _closure1_slot4;
                    var13.__initData = var14;
                    var10.onEndDrag = var13;
                    var13 = function(arg0, arg1) { // Original name: D, environment: var3
                        _fun105503: for (var _fun105503_ip = 0;;) switch (_fun105503_ip) {
                            case 0:
                                var1 = arg1;
                                var0 = _closure1_slot2;
                                if (var0) {
                                    _fun105503_ip = 34;
                                    continue _fun105503
                                }
                            case 13:
                                var3 = _closure2_slot1;
                                var2 = var3.set;
                                var0 = false;
                                var0 = var2.bind(var3)(var0);
                                _fun105503_ip = 108;
                                continue _fun105503;
                            case 34:
                                var2 = null;
                                var3 = var2 == var1;
                                var0 = undefined;
                                if (var3) {
                                    _fun105503_ip = 51;
                                    continue _fun105503
                                }
                            case 45:
                                var0 = var1.momentumEndCount;
                            case 51:
                                var4 = var2 != var0;
                                var3 = 0;
                                if (!var4) {
                                    _fun105503_ip = 63;
                                    continue _fun105503
                                }
                            case 60:
                                var3 = var0;
                            case 63:
                                var0 = 1;
                                var0 = var3 + var0;
                                var3 = 3;
                                if (!(var3 !== var0)) {
                                    _fun105503_ip = 89;
                                    continue _fun105503
                                }
                            case 77:
                                if (!(var2 != var1)) {
                                    _fun105503_ip = 108;
                                    continue _fun105503
                                }
                            case 81:
                                var1.momentumEndCount = var0;
                                _fun105503_ip = 108;
                                continue _fun105503;
                            case 89:
                                var2 = _closure2_slot1;
                                var1 = var2.set;
                                var0 = false;
                                var0 = var1.bind(var2)(var0);
                            case 108:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var14 = {};
                    var17 = _closure1_slot2;
                    var14.IS_ANDROID = var17;
                    var14.scrollLocked = var8;
                    var13.__closure = var14;
                    var14 = 17525906195822.0;
                    var13.__workletHash = var14;
                    var14 = _closure1_slot5;
                    var13.__initData = var14;
                    var10.onMomentumEnd = var13;
                    var13 = function(arg0) { // Original name: k, environment: var3
                        _fun105504: for (var _fun105504_ip = 0;;) switch (_fun105504_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.contentOffset;
                                var4 = var1.y;
                                var3 = _closure2_slot3;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var5 = true;
                                if (!(var5 === var2)) {
                                    _fun105504_ip = 199;
                                    continue _fun105504
                                }
                            case 39:
                                var3 = _closure2_slot2;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var4 < var2;
                                var6 = _closure2_slot1;
                                var3 = var6.get;
                                var3 = var3.bind(var6)();
                                if (var3) {
                                    _fun105504_ip = 100;
                                    continue _fun105504
                                }
                            case 72:
                                if (!var2) {
                                    _fun105504_ip = 81;
                                    continue _fun105504
                                }
                            case 75:
                                var2 = 0;
                                if (!(!(var4 <= var2))) {
                                    _fun105504_ip = 100;
                                    continue _fun105504
                                }
                            case 81:
                                var3 = _closure2_slot2;
                                var2 = var3.set;
                                var2 = var2.bind(var3)(var4);
                                _fun105504_ip = 285;
                                continue _fun105504;
                            case 100:
                                var3 = _closure2_slot1;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                if (var2) {
                                    _fun105504_ip = 130;
                                    continue _fun105504
                                }
                            case 116:
                                var3 = _closure2_slot1;
                                var2 = var3.set;
                                var2 = var2.bind(var3)(var5);
                            case 130:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 2;
                                var3 = var3[var2];
                                var2 = undefined;
                                var7 = var5.bind(var2)(var3);
                                var6 = var7.scrollTo;
                                var14 = _closure3_slot2;
                                var5 = 0;
                                var11 = false;
                                var15 = var7;
                                var13 = 0;
                                var12 = 0;
                                var2 = var15[var6](var14, var13, var12, var11, var10);
                                var3 = _closure2_slot2;
                                var2 = var3.set;
                                var2 = var2.bind(var3)(var5);
                                _fun105504_ip = 285;
                                continue _fun105504;
                            case 199:
                                var5 = _closure1_slot2;
                                if (!var5) {
                                    _fun105504_ip = 215;
                                    continue _fun105504
                                }
                            case 209:
                                var3 = 0;
                                var5 = var4 < var3;
                            case 215:
                                var3 = var4;
                                if (!var5) {
                                    _fun105504_ip = 271;
                                    continue _fun105504
                                }
                            case 221:
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var2 = 2;
                                var5 = var5[var2];
                                var2 = undefined;
                                var8 = var6.bind(var2)(var5);
                                var7 = var8.scrollTo;
                                var14 = _closure3_slot2;
                                var11 = false;
                                var15 = var8;
                                var13 = 0;
                                var12 = 0;
                                var5 = var15[var7](var14, var13, var12, var11, var10);
                                var3 = 0;
                            case 271:
                                var2 = _closure2_slot2;
                                var1 = var2.set;
                                var1 = var1.bind(var2)(var3);
                            case 285:
                                var1 = var0.layoutMeasurement;
                                var6 = var1.width;
                                var5 = var1.height;
                                var0 = var0.contentSize;
                                var3 = var0.width;
                                var0 = var0.height;
                                var2 = _closure3_slot0;
                                var7 = null;
                                if (!(var7 != var2)) {
                                    _fun105504_ip = 399;
                                    continue _fun105504
                                }
                            case 330:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot1;
                                var2 = 2;
                                var2 = var9[var2];
                                var9 = undefined;
                                var10 = var8.bind(var9)(var2);
                                var8 = var10.runOnJS;
                                var2 = _closure3_slot0;
                                var8 = var8.bind(var10)(var2);
                                var2 = {};
                                var2.width = var6;
                                var2.height = var5;
                                var2.offset = var4;
                                var2.contentWidth = var3;
                                var2.contentHeight = var0;
                                var2 = var8.bind(var9)(var2);
                            case 399:
                                var2 = _closure3_slot1;
                                if (!(var7 != var2)) {
                                    _fun105504_ip = 443;
                                    continue _fun105504
                                }
                            case 407:
                                var2 = _closure3_slot1;
                                var1 = {};
                                var1.width = var6;
                                var1.height = var5;
                                var1.offset = var4;
                                var1.contentWidth = var3;
                                var1.contentHeight = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 443:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var14 = {};
                    var14.isDragScrolling = var18;
                    var14.IS_ANDROID = var17;
                    var17 = var9[var4];
                    var17 = var5.bind(var7)(var17);
                    var17 = var17.scrollTo;
                    var14.scrollTo = var17;
                    var14.scrollerRef = var2;
                    var17 = _closure2_slot2;
                    var14.scrollOffsetValue = var17;
                    var14.scrollLocked = var8;
                    var14.onScrollHandler = var16;
                    var16 = var9[var4];
                    var16 = var5.bind(var7)(var16);
                    var16 = var16.runOnJS;
                    var14.runOnJS = var16;
                    var14.onScrollHandlerWorkletized = var15;
                    var13.__closure = var14;
                    var14 = 13271628494164.0;
                    var13.__workletHash = var14;
                    var14 = _closure1_slot6;
                    var13.__initData = var14;
                    var10.onScroll = var13;
                    var10 = var11.bind(var12)(var10);
                    var0.onScroll = var10;
                    var4 = var9[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.useAnimatedProps;
                    var3 = function() { // Original name: L, environment: var3
                        var0 = {};
                        var2 = _closure2_slot1;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var1 = !var1;
                        var0.showsVerticalScrollIndicator = var1;
                        return var0;
                    };
                    var7 = {};
                    var7.scrollLocked = var8;
                    var3.__closure = var7;
                    var7 = 3670657775473.0;
                    var3.__workletHash = var7;
                    var6 = _closure1_slot7;
                    var3.__initData = var6;
                    var3 = var4.bind(var5)(var3);
                    var0.animatedProps = var3;
                    var0.scrollerRef = var2;
                    var1 = _closure2_slot0;
                    var0.gestureRef = var1;
                    return var0;
            }
        };
        return var0;
    };
    var2.createUseAnimatedScrollLock = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 478, 3679, 2]);