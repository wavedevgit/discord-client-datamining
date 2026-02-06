// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var3 = 0;
    var6 = var5[var3];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useCallback;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx1(){const{vertical}=this.__closure;return!vertical;}';
    var3.code = var4;
    var _closure1_slot6 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx2(){const{loop,overscrollEnabled,measure,containerRef,dataLength,size}=this.__closure;if(!loop&&!overscrollEnabled){const measurement=measure(containerRef);const containerWidth=(measurement===null||measurement===void 0?void 0:measurement.width)||0;if(dataLength*size<containerWidth)return 0;return dataLength*size-containerWidth;}return dataLength*size;}';
    var3.code = var4;
    var _closure1_slot7 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx3(toValue,onFinished){const{scrollAnimationDuration,Easing,dealWithAnimation,withAnimation,runOnJS}=this.__closure;var _withAnimation;const defaultWithAnimation={type:"timing",config:{duration:scrollAnimationDuration+100,easing:Easing.easeOutQuart}};return dealWithAnimation((_withAnimation=withAnimation)!==null&&_withAnimation!==void 0?_withAnimation:defaultWithAnimation)(toValue,function(isFinished){"worklet";if(isFinished)onFinished&&runOnJS(onFinished)();});}';
    var3.code = var4;
    var _closure1_slot8 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx4(isFinished){const{onFinished,runOnJS}=this.__closure;if(isFinished)onFinished&&runOnJS(onFinished)();}';
    var3.code = var4;
    var _closure1_slot9 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx5(scrollEndTranslationValue,scrollEndVelocityValue,onFinished){const{translation,withDecay,maxScrollDistancePerSwipeIsSet,maxScrollDistancePerSwipe,size,pagingEnabled,withSpring,loop,maxPage,snapEnabled,overscrollEnabled,getLimit}=this.__closure;const origin=translation.value;const velocity=scrollEndVelocityValue;let finalTranslation=withDecay({velocity:velocity,deceleration:0.999});if(maxScrollDistancePerSwipeIsSet&&Math.abs(scrollEndTranslationValue)>maxScrollDistancePerSwipe){finalTranslation=origin;}else{const nextPage=-Math.round((origin+velocity*2)/size);if(pagingEnabled){const offset=-(scrollEndTranslationValue>=0?1:-1);const computed=offset<0?Math.ceil:Math.floor;const page=computed(-origin/size);const velocityDirection=-Math.sign(velocity);if(page===nextPage||velocityDirection!==offset){finalTranslation=withSpring(withProcessTranslation(-page*size),onFinished);}else if(loop){const finalPage=page+offset;finalTranslation=withSpring(withProcessTranslation(-finalPage*size),onFinished);}else{const finalPage=Math.min(maxPage-1,Math.max(0,page+offset));finalTranslation=withSpring(withProcessTranslation(-finalPage*size),onFinished);}}if(!pagingEnabled&&snapEnabled){finalTranslation=withSpring(withProcessTranslation(-nextPage*size),onFinished);}}translation.value=finalTranslation;function withProcessTranslation(translation){if(!loop&&!overscrollEnabled){const limit=getLimit();const sign=Math.sign(translation);return sign*Math.max(0,Math.min(limit,Math.abs(translation)));}return translation;}}';
    var3.code = var4;
    var _closure1_slot10 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx6(isFinished){const{touching,onScrollEnd,runOnJS}=this.__closure;if(isFinished){touching.value=false;onScrollEnd&&runOnJS(onScrollEnd)();}}';
    var3.code = var4;
    var _closure1_slot11 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx7(){const{touching,translation,withDecay,scrollEndVelocity,onFinish}=this.__closure;touching.value=true;translation.value=withDecay({velocity:scrollEndVelocity.value},function(isFinished){return onFinish(isFinished);});}';
    var3.code = var4;
    var _closure1_slot12 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx8(isFinished){const{onFinish}=this.__closure;return onFinish(isFinished);}';
    var3.code = var4;
    var _closure1_slot13 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx9(){const{touching,translation,scrollEndTranslation,activeDecay,loop,withSpring,maxPage,size}=this.__closure;if(touching.value)return;if(translation.value>0){if(scrollEndTranslation.value<0){activeDecay();return;}if(!loop){translation.value=withSpring(0);return;}}if(translation.value<-((maxPage-1)*size)){if(scrollEndTranslation.value>0){activeDecay();return;}if(!loop)translation.value=withSpring(-((maxPage-1)*size));}}';
    var3.code = var4;
    var _closure1_slot14 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx10(){const{translation}=this.__closure;return translation.value;}';
    var3.code = var4;
    var _closure1_slot15 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx11(){const{pagingEnabled,resetBoundary}=this.__closure;if(!pagingEnabled)resetBoundary();}';
    var3.code = var4;
    var _closure1_slot16 = var3;
    var3 = {};
    var4 = 'function withProcessTranslation_Pnpm_ScrollViewGestureTsx12(translation){const{loop,overscrollEnabled,getLimit}=this.__closure;if(!loop&&!overscrollEnabled){const limit=getLimit();const sign=Math.sign(translation);return sign*Math.max(0,Math.min(limit,Math.abs(translation)));}return translation;}';
    var3.code = var4;
    var _closure1_slot17 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx13(_){const{touching,validStart,onScrollStart,runOnJS,max,maxPage,size,loop,overscrollEnabled,getLimit,panOffset,translation}=this.__closure;touching.value=true;validStart.value=true;onScrollStart&&runOnJS(onScrollStart)();max.value=(maxPage-1)*size;if(!loop&&!overscrollEnabled)max.value=getLimit();panOffset.value=translation.value;}';
    var3.code = var4;
    var _closure1_slot18 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx14(e){const{panOffset,validStart,cancelAnimation,translation,touching,isHorizontal,fixedDirection,loop,max}=this.__closure;if(panOffset.value===undefined){return;}if(validStart.value){validStart.value=false;cancelAnimation(translation);}touching.value=true;const{translationX:translationX,translationY:translationY}=e;let panTranslation=isHorizontal.value?translationX:translationY;if(fixedDirection==="negative")panTranslation=-Math.abs(panTranslation);else if(fixedDirection==="positive")panTranslation=+Math.abs(panTranslation);if(!loop){if(translation.value>0||translation.value<-max.value){const boundary=translation.value>0?0:-max.value;const fixed=boundary-panOffset.value;const dynamic=panTranslation-fixed;translation.value=boundary+dynamic*0.5;return;}}const translationValue=panOffset.value+panTranslation;translation.value=translationValue;}';
    var3.code = var4;
    var _closure1_slot19 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx15(e,_success){const{panOffset,isHorizontal,scrollEndVelocity,fixedDirection,scrollEndTranslation,maxScrollDistancePerSwipeIsSet,maxScrollDistancePerSwipe,size,translation,withSpring,withProcessTranslation,onScrollEnd,minScrollDistancePerSwipeIsSet,minScrollDistancePerSwipe,endWithSpring,loop,touching}=this.__closure;if(panOffset.value===undefined){return;}const{velocityX:velocityX,velocityY:velocityY,translationX:translationX,translationY:translationY}=e;const scrollEndVelocityValue=isHorizontal.value?velocityX:velocityY;scrollEndVelocity.value=scrollEndVelocityValue;let panTranslation=isHorizontal.value?translationX:translationY;if(fixedDirection==="negative")panTranslation=-Math.abs(panTranslation);else if(fixedDirection==="positive")panTranslation=+Math.abs(panTranslation);scrollEndTranslation.value=panTranslation;const totalTranslation=scrollEndVelocityValue+panTranslation;if(maxScrollDistancePerSwipeIsSet&&Math.abs(totalTranslation)>maxScrollDistancePerSwipe){const nextPage=Math.round((panOffset.value+maxScrollDistancePerSwipe*Math.sign(totalTranslation))/size)*size;translation.value=withSpring(withProcessTranslation(nextPage),onScrollEnd);}else if(minScrollDistancePerSwipeIsSet&&Math.abs(totalTranslation)<minScrollDistancePerSwipe){const nextPage=Math.round((panOffset.value+minScrollDistancePerSwipe*Math.sign(totalTranslation))/size)*size;translation.value=withSpring(withProcessTranslation(nextPage),onScrollEnd);}else{endWithSpring(panTranslation,scrollEndVelocityValue,onScrollEnd);}if(!loop)touching.value=false;panOffset.value=undefined;}';
    var3.code = var4;
    var _closure1_slot20 = var3;
    var3 = {};
    var4 = 'function pnpm_ScrollViewGestureTsx16(e){const{updateContainerSize}=this.__closure;updateContainerSize({width:e.nativeEvent.layout.width,height:e.nativeEvent.layout.height});}';
    var3.code = var4;
    var _closure1_slot21 = var3;
    var1 = function arg0() {
        _fun75213: for (var _fun75213_ip = 0;;) switch (_fun75213_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.useGlobalState;
                var1 = var1.bind(var2)();
                var2 = var1.props;
                var21 = var2.onConfigurePanGesture;
                var15 = var2.vertical;
                var _closure2_slot0 = var15;
                var44 = var2.pagingEnabled;
                var _closure2_slot1 = var44;
                var23 = var2.snapEnabled;
                var _closure2_slot2 = var23;
                var34 = var2.loop;
                var _closure2_slot3 = var34;
                var37 = var2.scrollAnimationDuration;
                var _closure2_slot4 = var37;
                var22 = var2.withAnimation;
                var _closure2_slot5 = var22;
                var18 = var2.enabled;
                var41 = var2.dataLength;
                var _closure2_slot6 = var41;
                var38 = var2.overscrollEnabled;
                var _closure2_slot7 = var38;
                var26 = var2.maxScrollDistancePerSwipe;
                var _closure2_slot8 = var26;
                var24 = var2.minScrollDistancePerSwipe;
                var _closure2_slot9 = var24;
                var27 = var2.fixedDirection;
                var _closure2_slot10 = var27;
                var2 = var1.common;
                var35 = var2.size;
                var _closure2_slot11 = var35;
                var1 = var1.layout;
                var16 = var1.updateContainerSize;
                var _closure2_slot12 = var16;
                var31 = var6.translation;
                var _closure2_slot13 = var31;
                var11 = var6.testID;
                var10 = var6.style;
                if (!(var3 === var10)) {
                    _fun75213_ip = 224;
                    continue _fun75213
                }
            case 222:
                var10 = {};
            case 224:
                var20 = var6.onScrollStart;
                var _closure2_slot14 = var20;
                var17 = var6.onScrollEnd;
                var _closure2_slot15 = var17;
                var9 = var6.onTouchBegin;
                var8 = var6.onTouchEnd;
                var _closure2_slot16 = var41;
                var1 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 3;
                var2 = var13[var4];
                var14 = var1.bind(var3)(var2);
                var12 = var14.useDerivedValue;
                var7 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    return var0;
                };
                var2 = {};
                var2.vertical = var15;
                var7.__closure = var2;
                var2 = 1538641593051.0;
                var7.__workletHash = var2;
                var2 = _closure1_slot6;
                var7.__initData = var2;
                var2 = new Array(1);
                var2[0] = var15;
                var30 = var12.bind(var14)(var7, var2);
                var _closure2_slot17 = var30;
                var2 = var13[var4];
                var7 = var1.bind(var3)(var2);
                var2 = var7.useSharedValue;
                var12 = 0;
                var39 = var2.bind(var7)(var12);
                var _closure2_slot18 = var39;
                var2 = var13[var4];
                var7 = var1.bind(var3)(var2);
                var2 = var7.useSharedValue;
                var32 = var2.bind(var7)(var3);
                var _closure2_slot19 = var32;
                var2 = var13[var4];
                var7 = var1.bind(var3)(var2);
                var2 = var7.useSharedValue;
                var14 = false;
                var33 = var2.bind(var7)(var14);
                var _closure2_slot20 = var33;
                var2 = var13[var4];
                var7 = var1.bind(var3)(var2);
                var2 = var7.useSharedValue;
                var19 = var2.bind(var7)(var14);
                var _closure2_slot21 = var19;
                var2 = var13[var4];
                var7 = var1.bind(var3)(var2);
                var2 = var7.useSharedValue;
                var28 = var2.bind(var7)(var12);
                var _closure2_slot22 = var28;
                var2 = var13[var4];
                var7 = var1.bind(var3)(var2);
                var2 = var7.useSharedValue;
                var29 = var2.bind(var7)(var12);
                var _closure2_slot23 = var29;
                var2 = var13[var4];
                var7 = var1.bind(var3)(var2);
                var2 = var7.useAnimatedRef;
                var12 = var2.bind(var7)();
                var _closure2_slot24 = var12;
                var7 = 'number';
                var2 = typeof var26;
                var25 = var7 === var2;
                var _closure2_slot25 = var25;
                var2 = typeof var24;
                var36 = var7 === var2;
                var _closure2_slot26 = var36;
                var15 = _closure1_slot3;
                var14 = var15.useCallback;
                var7 = function() {
                    _fun75215: for (var _fun75215_ip = 0;;) switch (_fun75215_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun75215_ip = 115;
                                continue _fun75215
                            }
                        case 10:
                            var1 = _closure2_slot7;
                            if (var1) {
                                _fun75215_ip = 115;
                                continue _fun75215
                            }
                        case 17:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 3;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.measure;
                            var1 = _closure2_slot24;
                            var1 = var2.bind(var4)(var1);
                            var2 = null;
                            var2 = var2 == var1;
                            if (var2) {
                                _fun75215_ip = 71;
                                continue _fun75215
                            }
                        case 66:
                            var3 = var1.width;
                        case 71:
                            if (var3) {
                                _fun75215_ip = 76;
                                continue _fun75215
                            }
                        case 74:
                            var3 = 0;
                        case 76:
                            var2 = _closure2_slot6;
                            var1 = _closure2_slot11;
                            var1 = var2 * var1;
                            var2 = var1 < var3;
                            var1 = 0;
                            if (var2) {
                                _fun75215_ip = 113;
                                continue _fun75215
                            }
                        case 97:
                            var4 = _closure2_slot6;
                            var2 = _closure2_slot11;
                            var2 = var4 * var2;
                            var1 = var2 - var3;
                        case 113:
                            return var1;
                        case 115:
                            var1 = _closure2_slot6;
                            var0 = _closure2_slot11;
                            var0 = var1 * var0;
                            return var0;
                    }
                };
                var2 = {};
                var2.loop = var34;
                var2.overscrollEnabled = var38;
                var40 = var13[var4];
                var40 = var1.bind(var3)(var40);
                var40 = var40.measure;
                var2.measure = var40;
                var2.containerRef = var12;
                var2.dataLength = var41;
                var2.size = var35;
                var7.__closure = var2;
                var2 = 14254270315231.0;
                var7.__workletHash = var2;
                var2 = _closure1_slot7;
                var7.__initData = var2;
                var2 = new Array(4);
                var2[0] = var34;
                var2[1] = var35;
                var2[2] = var41;
                var2[3] = var38;
                var40 = var14.bind(var15)(var7, var2);
                var _closure2_slot27 = var40;
                var14 = var15.useCallback;
                var7 = function arg0, arg1() {
                    _fun75216: for (var _fun75216_ip = 0;;) switch (_fun75216_ip) {
                        case 0:
                            var5 = arg1;
                            var _closure3_slot0 = var5;
                            var6 = {};
                            var0 = 'timing';
                            var6.type = var0;
                            var2 = {};
                            var3 = _closure2_slot4;
                            var0 = 100;
                            var0 = var3 + var0;
                            var2.duration = var0;
                            var4 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 4;
                            var9 = var8[var3];
                            var3 = undefined;
                            var9 = var4.bind(var3)(var9);
                            var9 = var9.Easing;
                            var9 = var9.easeOutQuart;
                            var2.easing = var9;
                            var6.config = var2;
                            var2 = 5;
                            var2 = var8[var2];
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.dealWithAnimation;
                            var9 = _closure2_slot5;
                            var8 = null;
                            if (!(var8 != var9)) {
                                _fun75216_ip = 117;
                                continue _fun75216
                            }
                        case 113:
                            var6 = _closure2_slot5;
                        case 117:
                            var2 = var2.bind(var4)(var6);
                            var1 = function arg0() {
                                _fun75217: for (var _fun75217_ip = 0;;) switch (_fun75217_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun75217_ip = 13;
                                            continue _fun75217
                                        }
                                    case 6:
                                        var0 = _closure3_slot0;
                                    case 13:
                                        if (!var0) {
                                            _fun75217_ip = 62;
                                            continue _fun75217
                                        }
                                    case 16:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 3;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure3_slot0;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 62:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4 = {};
                            var4.onFinished = var5;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 3;
                            var5 = var7[var5];
                            var5 = var6.bind(var3)(var5);
                            var5 = var5.runOnJS;
                            var4.runOnJS = var5;
                            var1.__closure = var4;
                            var4 = 7565331159140.0;
                            var1.__workletHash = var4;
                            var0 = _closure1_slot9;
                            var1.__initData = var0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                    }
                };
                var2 = {};
                var2.scrollAnimationDuration = var37;
                var42 = 4;
                var42 = var13[var42];
                var42 = var1.bind(var3)(var42);
                var42 = var42.Easing;
                var2.Easing = var42;
                var42 = 5;
                var42 = var13[var42];
                var42 = var1.bind(var3)(var42);
                var42 = var42.dealWithAnimation;
                var2.dealWithAnimation = var42;
                var2.withAnimation = var22;
                var42 = var13[var4];
                var42 = var1.bind(var3)(var42);
                var42 = var42.runOnJS;
                var2.runOnJS = var42;
                var7.__closure = var2;
                var2 = 14905784555207.0;
                var7.__workletHash = var2;
                var2 = _closure1_slot8;
                var7.__initData = var2;
                var2 = new Array(2);
                var2[0] = var37;
                var2[1] = var22;
                var22 = var14.bind(var15)(var7, var2);
                var _closure2_slot28 = var22;
                var14 = var15.useCallback;
                var7 = function arg0, arg1, arg2() {
                    _fun75218: for (var _fun75218_ip = 0;;) switch (_fun75218_ip) {
                        case 0:
                            var8 = arg0;
                            var12 = arg1;
                            var5 = arg2;
                            var6 = function arg0() {
                                _fun75219: for (var _fun75219_ip = 0;;) switch (_fun75219_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = _closure2_slot3;
                                        if (var2) {
                                            _fun75219_ip = 108;
                                            continue _fun75219
                                        }
                                    case 13:
                                        var2 = _closure2_slot7;
                                        if (var2) {
                                            _fun75219_ip = 108;
                                            continue _fun75219
                                        }
                                    case 20:
                                        var2 = _closure2_slot27;
                                        var1 = undefined;
                                        var7 = var2.bind(var1)();
                                        var1 = global;
                                        var3 = var1.Math;
                                        var2 = var3.sign;
                                        var2 = var2.bind(var3)(var0);
                                        var5 = var1.Math;
                                        var4 = var5.max;
                                        var6 = var1.Math;
                                        var3 = var6.min;
                                        var8 = var1.Math;
                                        var1 = var8.abs;
                                        var1 = var1.bind(var8)(var0);
                                        var3 = var3.bind(var6)(var7, var1);
                                        var1 = 0;
                                        var1 = var4.bind(var5)(var1, var3);
                                        var1 = var2 * var1;
                                        return var1;
                                    case 108:
                                        return var0;
                                }
                            };
                            var0 = _closure2_slot13;
                            var4 = var0.value;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 3;
                            var2 = var2[var0];
                            var0 = undefined;
                            var7 = var3.bind(var0)(var2);
                            var3 = var7.withDecay;
                            var2 = {};
                            var2.velocity = var12;
                            var9 = 0.999;
                            var2.deceleration = var9;
                            var7 = var3.bind(var7)(var2);
                            var2 = _closure2_slot25;
                            if (!var2) {
                                _fun75218_ip = 128;
                                continue _fun75218
                            }
                        case 95:
                            var2 = global;
                            var3 = var2.Math;
                            var2 = var3.abs;
                            var9 = var2.bind(var3)(var8);
                            var3 = _closure2_slot8;
                            var2 = var4;
                            if (!(!(var9 > var3))) {
                                _fun75218_ip = 461;
                                continue _fun75218
                            }
                        case 128:
                            var9 = global;
                            var11 = var9.Math;
                            var10 = var11.round;
                            var3 = 2;
                            var3 = var3 * var12;
                            var13 = var4 + var3;
                            var3 = _closure2_slot11;
                            var3 = var13 / var3;
                            var3 = var10.bind(var11)(var3);
                            var3 = -var3;
                            var10 = _closure2_slot1;
                            if (!var10) {
                                _fun75218_ip = 415;
                                continue _fun75218
                            }
                        case 178:
                            var15 = 0;
                            var10 = var8 >= var15;
                            var8 = -1;
                            if (!var10) {
                                _fun75218_ip = 196;
                                continue _fun75218
                            }
                        case 193:
                            var8 = 1;
                        case 196:
                            var8 = -var8;
                            if (!(!(var8 < var15))) {
                                _fun75218_ip = 217;
                                continue _fun75218
                            }
                        case 203:
                            var10 = var9.Math;
                            var10 = var10.floor;
                            _fun75218_ip = 229;
                            continue _fun75218;
                        case 217:
                            var11 = var9.Math;
                            var10 = var11.ceil;
                        case 229:
                            var11 = -var4;
                            var4 = _closure2_slot11;
                            var4 = var11 / var4;
                            var4 = var10.bind(var0)(var4);
                            var11 = var9.Math;
                            var10 = var11.sign;
                            var10 = var10.bind(var11)(var12);
                            var10 = -var10;
                            if (!(var4 !== var3)) {
                                _fun75218_ip = 389;
                                continue _fun75218
                            }
                        case 269:
                            if (!(var10 === var8)) {
                                _fun75218_ip = 389;
                                continue _fun75218
                            }
                        case 273:
                            var10 = _closure2_slot3;
                            if (var10) {
                                _fun75218_ip = 357;
                                continue _fun75218
                            }
                        case 280:
                            var12 = var9.Math;
                            var11 = var12.min;
                            var13 = _closure2_slot16;
                            var10 = 1;
                            var10 = var13 - var10;
                            var14 = var9.Math;
                            var13 = var14.max;
                            var9 = var4 + var8;
                            var9 = var13.bind(var14)(var15, var9);
                            var9 = var11.bind(var12)(var10, var9);
                            var10 = _closure2_slot28;
                            var11 = -var9;
                            var9 = _closure2_slot11;
                            var9 = var11 * var9;
                            var9 = var6.bind(var0)(var9);
                            var7 = var10.bind(var0)(var9, var5);
                            _fun75218_ip = 415;
                            continue _fun75218;
                        case 357:
                            var9 = _closure2_slot28;
                            var8 = var4 + var8;
                            var10 = _closure2_slot11;
                            var8 = -var8;
                            var8 = var8 * var10;
                            var8 = var6.bind(var0)(var8);
                            var7 = var9.bind(var0)(var8, var5);
                            _fun75218_ip = 415;
                            continue _fun75218;
                        case 389:
                            var8 = _closure2_slot28;
                            var9 = -var4;
                            var4 = _closure2_slot11;
                            var4 = var9 * var4;
                            var4 = var6.bind(var0)(var4);
                            var7 = var8.bind(var0)(var4, var5);
                        case 415:
                            var4 = _closure2_slot1;
                            var4 = !var4;
                            if (!var4) {
                                _fun75218_ip = 429;
                                continue _fun75218
                            }
                        case 425:
                            var4 = _closure2_slot2;
                        case 429:
                            var2 = var7;
                            if (!var4) {
                                _fun75218_ip = 461;
                                continue _fun75218
                            }
                        case 435:
                            var4 = _closure2_slot28;
                            var7 = _closure2_slot11;
                            var3 = -var3;
                            var3 = var3 * var7;
                            var3 = var6.bind(var0)(var3);
                            var2 = var4.bind(var0)(var3, var5);
                        case 461:
                            var1 = _closure2_slot13;
                            var1.value = var2;
                            return var0;
                    }
                };
                var2 = {};
                var2.translation = var31;
                var37 = var13[var4];
                var37 = var1.bind(var3)(var37);
                var37 = var37.withDecay;
                var2.withDecay = var37;
                var2.maxScrollDistancePerSwipeIsSet = var25;
                var2.maxScrollDistancePerSwipe = var26;
                var2.size = var35;
                var2.pagingEnabled = var44;
                var2.withSpring = var22;
                var2.loop = var34;
                var2.maxPage = var41;
                var2.snapEnabled = var23;
                var2.overscrollEnabled = var38;
                var2.getLimit = var40;
                var7.__closure = var2;
                var2 = 205523855173.0;
                var7.__workletHash = var2;
                var2 = _closure1_slot10;
                var7.__initData = var2;
                var2 = new Array(9);
                var2[0] = var22;
                var2[1] = var35;
                var2[2] = var41;
                var2[3] = var34;
                var2[4] = var23;
                var2[5] = var31;
                var2[6] = var44;
                var2[7] = var26;
                var2[8] = var25;
                var23 = var14.bind(var15)(var7, var2);
                var _closure2_slot29 = var23;
                var14 = var15.useCallback;
                var7 = function arg0() {
                    _fun75220: for (var _fun75220_ip = 0;;) switch (_fun75220_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun75220_ip = 71;
                                continue _fun75220
                            }
                        case 6:
                            var2 = _closure2_slot20;
                            var1 = false;
                            var2.value = var1;
                            var1 = _closure2_slot15;
                            if (!var1) {
                                _fun75220_ip = 71;
                                continue _fun75220
                            }
                        case 28:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 3;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot15;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 71:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = {};
                var2.touching = var33;
                var2.onScrollEnd = var17;
                var37 = var13[var4];
                var37 = var1.bind(var3)(var37);
                var37 = var37.runOnJS;
                var2.runOnJS = var37;
                var7.__closure = var2;
                var2 = 13381002348098.0;
                var7.__workletHash = var2;
                var2 = _closure1_slot11;
                var7.__initData = var2;
                var2 = new Array(2);
                var2[0] = var17;
                var2[1] = var33;
                var37 = var14.bind(var15)(var7, var2);
                var _closure2_slot30 = var37;
                var14 = var15.useCallback;
                var7 = function() {
                    var1 = _closure2_slot20;
                    var0 = true;
                    var1.value = var0;
                    var2 = _closure2_slot13;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var1);
                    var4 = var5.withDecay;
                    var3 = {};
                    var1 = _closure2_slot23;
                    var1 = var1.value;
                    var3.velocity = var1;
                    var1 = function arg0() {
                        var2 = _closure2_slot30;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var7 = {};
                    var8 = _closure2_slot30;
                    var7.onFinish = var8;
                    var1.__closure = var7;
                    var7 = 13082713046354.0;
                    var1.__workletHash = var7;
                    var6 = _closure1_slot13;
                    var1.__initData = var6;
                    var1 = var4.bind(var5)(var3, var1);
                    var2.value = var1;
                    return var0;
                };
                var2 = {};
                var2.touching = var33;
                var2.translation = var31;
                var42 = var13[var4];
                var42 = var1.bind(var3)(var42);
                var42 = var42.withDecay;
                var2.withDecay = var42;
                var2.scrollEndVelocity = var29;
                var2.onFinish = var37;
                var7.__closure = var2;
                var2 = 12267307896109.0;
                var7.__workletHash = var2;
                var2 = _closure1_slot12;
                var7.__initData = var2;
                var2 = new Array(4);
                var2[0] = var37;
                var2[1] = var29;
                var2[2] = var33;
                var2[3] = var31;
                var37 = var14.bind(var15)(var7, var2);
                var _closure2_slot31 = var37;
                var14 = var15.useCallback;
                var7 = function() {
                    _fun75223: for (var _fun75223_ip = 0;;) switch (_fun75223_ip) {
                        case 0:
                            var1 = _closure2_slot20;
                            var1 = var1.value;
                            if (var1) {
                                _fun75223_ip = 206;
                                continue _fun75223
                            }
                        case 18:
                            var1 = _closure2_slot13;
                            var1 = var1.value;
                            var2 = 0;
                            if (!(var1 > var2)) {
                                _fun75223_ip = 81;
                                continue _fun75223
                            }
                        case 33:
                            var1 = _closure2_slot22;
                            var1 = var1.value;
                            if (!(!(var1 < var2))) {
                                _fun75223_ip = 192;
                                continue _fun75223
                            }
                        case 49:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun75223_ip = 81;
                                continue _fun75223
                            }
                        case 56:
                            var3 = _closure2_slot13;
                            var4 = _closure2_slot28;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var2);
                            var3.value = var1;
                            var1 = undefined;
                            return var1;
                        case 81:
                            var1 = _closure2_slot13;
                            var4 = var1.value;
                            var1 = _closure2_slot16;
                            var3 = 1;
                            var1 = var1 - var3;
                            var5 = _closure2_slot11;
                            var1 = -var1;
                            var1 = var1 * var5;
                            if (!(var4 < var1)) {
                                _fun75223_ip = 206;
                                continue _fun75223
                            }
                        case 116:
                            var1 = _closure2_slot22;
                            var1 = var1.value;
                            if (!(!(var1 > var2))) {
                                _fun75223_ip = 178;
                                continue _fun75223
                            }
                        case 129:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun75223_ip = 206;
                                continue _fun75223
                            }
                        case 136:
                            var2 = _closure2_slot13;
                            var4 = _closure2_slot28;
                            var1 = _closure2_slot16;
                            var1 = var1 - var3;
                            var3 = _closure2_slot11;
                            var1 = -var1;
                            var3 = var1 * var3;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var2.value = var1;
                            _fun75223_ip = 206;
                            continue _fun75223;
                        case 178:
                            var2 = _closure2_slot31;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            var1 = undefined;
                            return var1;
                        case 192:
                            var1 = _closure2_slot31;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            var0 = undefined;
                            return var0;
                        case 206:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = {};
                var2.touching = var33;
                var2.translation = var31;
                var2.scrollEndTranslation = var28;
                var2.activeDecay = var37;
                var2.loop = var34;
                var2.withSpring = var22;
                var2.maxPage = var41;
                var2.size = var35;
                var7.__closure = var2;
                var2 = 11689345102683.0;
                var7.__workletHash = var2;
                var2 = _closure1_slot14;
                var7.__initData = var2;
                var2 = new Array(8);
                var2[0] = var33;
                var2[1] = var31;
                var2[2] = var41;
                var2[3] = var35;
                var2[4] = var28;
                var2[5] = var34;
                var2[6] = var37;
                var2[7] = var22;
                var43 = var14.bind(var15)(var7, var2);
                var _closure2_slot32 = var43;
                var2 = var13[var4];
                var42 = var1.bind(var3)(var2);
                var37 = var42.useAnimatedReaction;
                var14 = function() {
                    var0 = _closure2_slot13;
                    var0 = var0.value;
                    return var0;
                };
                var2 = {};
                var2.translation = var31;
                var14.__closure = var2;
                var2 = 10264158907215.0;
                var14.__workletHash = var2;
                var2 = _closure1_slot15;
                var14.__initData = var2;
                var7 = function() {
                    _fun75225: for (var _fun75225_ip = 0;;) switch (_fun75225_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun75225_ip = 20;
                                continue _fun75225
                            }
                        case 10:
                            var1 = _closure2_slot32;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 20:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = {};
                var2.pagingEnabled = var44;
                var2.resetBoundary = var43;
                var7.__closure = var2;
                var2 = 1428786849795.0;
                var7.__workletHash = var2;
                var2 = _closure1_slot16;
                var7.__initData = var2;
                var2 = new Array(2);
                var2[0] = var44;
                var2[1] = var43;
                var2 = var37.bind(var42)(var14, var7, var2);
                var2 = function() { // Environment: var0
                    var0 = function arg0() {
                        _fun75227: for (var _fun75227_ip = 0;;) switch (_fun75227_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = _closure2_slot3;
                                if (var2) {
                                    _fun75227_ip = 108;
                                    continue _fun75227
                                }
                            case 13:
                                var2 = _closure2_slot7;
                                if (var2) {
                                    _fun75227_ip = 108;
                                    continue _fun75227
                                }
                            case 20:
                                var2 = _closure2_slot27;
                                var1 = undefined;
                                var7 = var2.bind(var1)();
                                var1 = global;
                                var3 = var1.Math;
                                var2 = var3.sign;
                                var2 = var2.bind(var3)(var0);
                                var5 = var1.Math;
                                var4 = var5.max;
                                var6 = var1.Math;
                                var3 = var6.min;
                                var8 = var1.Math;
                                var1 = var8.abs;
                                var1 = var1.bind(var8)(var0);
                                var3 = var3.bind(var6)(var7, var1);
                                var1 = 0;
                                var1 = var4.bind(var5)(var1, var3);
                                var1 = var2 * var1;
                                return var1;
                            case 108:
                                return var0;
                        }
                    };
                    var1 = {};
                    var3 = _closure2_slot3;
                    var1.loop = var3;
                    var3 = _closure2_slot7;
                    var1.overscrollEnabled = var3;
                    var2 = _closure2_slot27;
                    var1.getLimit = var2;
                    var0.__closure = var1;
                    var1 = 4415703918410.0;
                    var0.__workletHash = var1;
                    var1 = _closure1_slot17;
                    var0.__initData = var1;
                    return var0;
                };
                var37 = var2.bind(var3)();
                var _closure2_slot33 = var37;
                var14 = _closure1_slot4;
                var7 = function arg0() {
                    _fun75228: for (var _fun75228_ip = 0;;) switch (_fun75228_ip) {
                        case 0:
                            var1 = _closure2_slot20;
                            var2 = true;
                            var1.value = var2;
                            var1 = _closure2_slot21;
                            var1.value = var2;
                            var1 = _closure2_slot14;
                            if (!var1) {
                                _fun75228_ip = 75;
                                continue _fun75228
                            }
                        case 32:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 3;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot14;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
                        case 75:
                            var2 = _closure2_slot18;
                            var3 = _closure2_slot16;
                            var1 = 1;
                            var3 = var3 - var1;
                            var1 = _closure2_slot11;
                            var1 = var3 * var1;
                            var2.value = var1;
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun75228_ip = 115;
                                continue _fun75228
                            }
                        case 111:
                            var1 = _closure2_slot7;
                        case 115:
                            if (var1) {
                                _fun75228_ip = 138;
                                continue _fun75228
                            }
                        case 118:
                            var2 = _closure2_slot18;
                            var3 = _closure2_slot27;
                            var1 = undefined;
                            var1 = var3.bind(var1)();
                            var2.value = var1;
                        case 138:
                            var1 = _closure2_slot19;
                            var0 = _closure2_slot13;
                            var0 = var0.value;
                            var1.value = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = {};
                var2.touching = var33;
                var2.validStart = var19;
                var2.onScrollStart = var20;
                var42 = var13[var4];
                var42 = var1.bind(var3)(var42);
                var42 = var42.runOnJS;
                var2.runOnJS = var42;
                var2.max = var39;
                var2.maxPage = var41;
                var2.size = var35;
                var2.loop = var34;
                var2.overscrollEnabled = var38;
                var2.getLimit = var40;
                var2.panOffset = var32;
                var2.translation = var31;
                var7.__closure = var2;
                var2 = 11962065871670.0;
                var7.__workletHash = var2;
                var2 = _closure1_slot18;
                var7.__initData = var2;
                var2 = new Array(11);
                var2[0] = var39;
                var2[1] = var35;
                var2[2] = var41;
                var2[3] = var34;
                var2[4] = var33;
                var2[5] = var32;
                var2[6] = var19;
                var2[7] = var31;
                var2[8] = var38;
                var2[9] = var40;
                var2[10] = var20;
                var20 = var14.bind(var3)(var7, var2);
                var7 = function arg0() {
                    _fun75229: for (var _fun75229_ip = 0;;) switch (_fun75229_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot19;
                            var2 = var0.value;
                            var0 = undefined;
                            if (!(var0 !== var2)) {
                                _fun75229_ip = 345;
                                continue _fun75229
                            }
                        case 24:
                            var2 = _closure2_slot21;
                            var2 = var2.value;
                            if (!var2) {
                                _fun75229_ip = 86;
                                continue _fun75229
                            }
                        case 36:
                            var4 = _closure2_slot21;
                            var2 = false;
                            var4.value = var2;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 3;
                            var2 = var5[var2];
                            var5 = var4.bind(var0)(var2);
                            var4 = var5.cancelAnimation;
                            var2 = _closure2_slot13;
                            var2 = var4.bind(var5)(var2);
                        case 86:
                            var4 = _closure2_slot20;
                            var2 = true;
                            var4.value = var2;
                            var2 = var3.translationX;
                            var5 = var3.translationY;
                            var3 = _closure2_slot17;
                            var3 = var3.value;
                            if (!var3) {
                                _fun75229_ip = 125;
                                continue _fun75229
                            }
                        case 122:
                            var5 = var2;
                        case 125:
                            var3 = _closure2_slot10;
                            var2 = 'negative';
                            if (!(var2 !== var3)) {
                                _fun75229_ip = 176;
                                continue _fun75229
                            }
                        case 137:
                            var4 = _closure2_slot10;
                            var2 = 'positive';
                            var3 = var5;
                            if (!(var2 === var4)) {
                                _fun75229_ip = 198;
                                continue _fun75229
                            }
                        case 152:
                            var2 = global;
                            var4 = var2.Math;
                            var2 = var4.abs;
                            var2 = var2.bind(var4)(var5);
                            var3 = var2 - 0;
                            _fun75229_ip = 198;
                            continue _fun75229;
                        case 176:
                            var2 = global;
                            var4 = var2.Math;
                            var2 = var4.abs;
                            var2 = var2.bind(var4)(var5);
                            var3 = -var2;
                        case 198:
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun75229_ip = 322;
                                continue _fun75229
                            }
                        case 205:
                            var2 = _closure2_slot13;
                            var2 = var2.value;
                            var5 = 0;
                            if (!(!(var2 > var5))) {
                                _fun75229_ip = 245;
                                continue _fun75229
                            }
                        case 220:
                            var2 = _closure2_slot13;
                            var4 = var2.value;
                            var2 = _closure2_slot18;
                            var2 = var2.value;
                            var2 = -var2;
                            if (!(var4 < var2)) {
                                _fun75229_ip = 322;
                                continue _fun75229
                            }
                        case 245:
                            var2 = _closure2_slot13;
                            var2 = var2.value;
                            var2 = var2 > var5;
                            var5 = 0;
                            if (var2) {
                                _fun75229_ip = 275;
                                continue _fun75229
                            }
                        case 263:
                            var2 = _closure2_slot18;
                            var2 = var2.value;
                            var5 = -var2;
                        case 275:
                            var2 = _closure2_slot19;
                            var2 = var2.value;
                            var2 = var5 - var2;
                            var6 = var3 - var2;
                            var4 = _closure2_slot13;
                            var2 = 0.5;
                            var2 = var2 * var6;
                            var2 = var5 + var2;
                            var4.value = var2;
                            _fun75229_ip = 345;
                            continue _fun75229;
                        case 322:
                            var2 = _closure2_slot19;
                            var2 = var2.value;
                            var2 = var2 + var3;
                            var1 = _closure2_slot13;
                            var1.value = var2;
                        case 345:
                            return var0;
                    }
                };
                var2 = {};
                var2.panOffset = var32;
                var2.validStart = var19;
                var40 = var13[var4];
                var40 = var1.bind(var3)(var40);
                var40 = var40.cancelAnimation;
                var2.cancelAnimation = var40;
                var2.translation = var31;
                var2.touching = var33;
                var2.isHorizontal = var30;
                var2.fixedDirection = var27;
                var2.loop = var34;
                var2.max = var39;
                var7.__closure = var2;
                var2 = 851179073329.0;
                var7.__workletHash = var2;
                var2 = _closure1_slot19;
                var7.__initData = var2;
                var2 = new Array(9);
                var2[0] = var30;
                var2[1] = var39;
                var2[2] = var32;
                var2[3] = var34;
                var2[4] = var38;
                var2[5] = var27;
                var2[6] = var31;
                var2[7] = var19;
                var2[8] = var33;
                var19 = var14.bind(var3)(var7, var2);
                var7 = function arg0, arg1() {
                    _fun75230: for (var _fun75230_ip = 0;;) switch (_fun75230_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = _closure2_slot19;
                            var2 = var0.value;
                            var0 = undefined;
                            if (!(var0 !== var2)) {
                                _fun75230_ip = 495;
                                continue _fun75230
                            }
                        case 24:
                            var3 = var4.velocityX;
                            var7 = var4.velocityY;
                            var2 = var4.translationX;
                            var4 = var4.translationY;
                            var5 = _closure2_slot17;
                            var5 = var5.value;
                            if (!var5) {
                                _fun75230_ip = 63;
                                continue _fun75230
                            }
                        case 60:
                            var7 = var3;
                        case 63:
                            var3 = _closure2_slot23;
                            var3.value = var7;
                            var3 = _closure2_slot17;
                            var3 = var3.value;
                            if (!var3) {
                                _fun75230_ip = 88;
                                continue _fun75230
                            }
                        case 85:
                            var4 = var2;
                        case 88:
                            var3 = _closure2_slot10;
                            var2 = 'negative';
                            if (!(var2 !== var3)) {
                                _fun75230_ip = 139;
                                continue _fun75230
                            }
                        case 100:
                            var3 = _closure2_slot10;
                            var2 = 'positive';
                            var6 = var4;
                            if (!(var2 === var3)) {
                                _fun75230_ip = 161;
                                continue _fun75230
                            }
                        case 115:
                            var2 = global;
                            var3 = var2.Math;
                            var2 = var3.abs;
                            var2 = var2.bind(var3)(var4);
                            var6 = var2 - 0;
                            _fun75230_ip = 161;
                            continue _fun75230;
                        case 139:
                            var2 = global;
                            var3 = var2.Math;
                            var2 = var3.abs;
                            var2 = var2.bind(var3)(var4);
                            var6 = -var2;
                        case 161:
                            var2 = _closure2_slot22;
                            var2.value = var6;
                            var8 = var7 + var6;
                            var2 = _closure2_slot25;
                            if (!var2) {
                                _fun75230_ip = 212;
                                continue _fun75230
                            }
                        case 182:
                            var2 = global;
                            var4 = var2.Math;
                            var3 = var4.abs;
                            var4 = var3.bind(var4)(var8);
                            var3 = _closure2_slot8;
                            if (!(!(var4 > var3))) {
                                _fun75230_ip = 367;
                                continue _fun75230
                            }
                        case 212:
                            var3 = _closure2_slot26;
                            if (!var3) {
                                _fun75230_ip = 246;
                                continue _fun75230
                            }
                        case 219:
                            var3 = global;
                            var5 = var3.Math;
                            var4 = var5.abs;
                            var5 = var4.bind(var5)(var8);
                            var4 = _closure2_slot9;
                            if (!(!(var5 < var4))) {
                                _fun75230_ip = 266;
                                continue _fun75230
                            }
                        case 246:
                            var5 = _closure2_slot29;
                            var4 = _closure2_slot15;
                            var4 = var5.bind(var0)(var6, var7, var4);
                            _fun75230_ip = 466;
                            continue _fun75230;
                        case 266:
                            var6 = var3.Math;
                            var5 = var6.round;
                            var4 = _closure2_slot19;
                            var4 = var4.value;
                            var7 = _closure2_slot9;
                            var9 = var3.Math;
                            var3 = var9.sign;
                            var3 = var3.bind(var9)(var8);
                            var3 = var7 * var3;
                            var3 = var4 + var3;
                            var4 = _closure2_slot11;
                            var3 = var3 / var4;
                            var3 = var5.bind(var6)(var3);
                            var5 = var3 * var4;
                            var4 = _closure2_slot13;
                            var6 = _closure2_slot28;
                            var3 = _closure2_slot33;
                            var5 = var3.bind(var0)(var5);
                            var3 = _closure2_slot15;
                            var3 = var6.bind(var0)(var5, var3);
                            var4.value = var3;
                            _fun75230_ip = 466;
                            continue _fun75230;
                        case 367:
                            var5 = var2.Math;
                            var4 = var5.round;
                            var3 = _closure2_slot19;
                            var3 = var3.value;
                            var6 = _closure2_slot8;
                            var7 = var2.Math;
                            var2 = var7.sign;
                            var2 = var2.bind(var7)(var8);
                            var2 = var6 * var2;
                            var2 = var3 + var2;
                            var3 = _closure2_slot11;
                            var2 = var2 / var3;
                            var2 = var4.bind(var5)(var2);
                            var4 = var2 * var3;
                            var3 = _closure2_slot13;
                            var5 = _closure2_slot28;
                            var2 = _closure2_slot33;
                            var4 = var2.bind(var0)(var4);
                            var2 = _closure2_slot15;
                            var2 = var5.bind(var0)(var4, var2);
                            var3.value = var2;
                        case 466:
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun75230_ip = 485;
                                continue _fun75230
                            }
                        case 473:
                            var3 = _closure2_slot20;
                            var2 = false;
                            var3.value = var2;
                        case 485:
                            var1 = _closure2_slot19;
                            var1.value = var0;
                        case 495:
                            return var0;
                    }
                };
                var2 = {};
                var2.panOffset = var32;
                var2.isHorizontal = var30;
                var2.scrollEndVelocity = var29;
                var2.fixedDirection = var27;
                var2.scrollEndTranslation = var28;
                var2.maxScrollDistancePerSwipeIsSet = var25;
                var2.maxScrollDistancePerSwipe = var26;
                var2.size = var35;
                var2.translation = var31;
                var2.withSpring = var22;
                var2.withProcessTranslation = var37;
                var2.onScrollEnd = var17;
                var2.minScrollDistancePerSwipeIsSet = var36;
                var2.minScrollDistancePerSwipe = var24;
                var2.endWithSpring = var23;
                var2.loop = var34;
                var2.touching = var33;
                var7.__closure = var2;
                var2 = 14460845775334.0;
                var7.__workletHash = var2;
                var2 = _closure1_slot20;
                var7.__initData = var2;
                var2 = new Array(16);
                var2[0] = var35;
                var2[1] = var34;
                var2[2] = var33;
                var2[3] = var32;
                var2[4] = var31;
                var2[5] = var30;
                var2[6] = var29;
                var2[7] = var28;
                var2[8] = var27;
                var2[9] = var25;
                var2[10] = var26;
                var2[11] = var25;
                var2[12] = var24;
                var2[13] = var23;
                var2[14] = var22;
                var2[15] = var17;
                var17 = var14.bind(var3)(var7, var2);
                var2 = 6;
                var2 = var13[var2];
                var14 = var1.bind(var3)(var2);
                var7 = var14.usePanGestureProxy;
                var2 = {};
                var2.onConfigurePanGesture = var21;
                var2.onGestureStart = var20;
                var2.onGestureUpdate = var19;
                var2.onGestureEnd = var17;
                var17 = {};
                var17.enabled = var18;
                var2.options = var17;
                var14 = var7.bind(var14)(var2);
                var7 = var15.useCallback;
                var2 = function arg0() {
                    var0 = arg0;
                    var2 = _closure2_slot12;
                    var1 = {};
                    var3 = var0.nativeEvent;
                    var3 = var3.layout;
                    var3 = var3.width;
                    var1.width = var3;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var0 = var0.height;
                    var1.height = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = {};
                var0.updateContainerSize = var16;
                var2.__closure = var0;
                var0 = 15591637556712.0;
                var2.__workletHash = var0;
                var0 = _closure1_slot21;
                var2.__initData = var0;
                var0 = new Array(1);
                var0[0] = var16;
                var7 = var7.bind(var15)(var2, var0);
                var2 = _closure1_slot5;
                var0 = 7;
                var0 = var13[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.GestureDetector;
                var0 = {};
                var0.gesture = var14;
                var5 = _closure1_slot1;
                var4 = var13[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var4.ref = var12;
                var4.testID = var11;
                var4.style = var10;
                var4.onTouchStart = var9;
                var4.onTouchEnd = var8;
                var4.onLayout = var7;
                var6 = var6.children;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ScrollViewGesture = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 9488, 3723, 9482, 9498, 9501, 4964]);