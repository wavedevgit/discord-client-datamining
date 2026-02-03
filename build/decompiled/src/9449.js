// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var6 = metroImportDefault;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot2 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useRef;
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'function pnpm_useCarouselControllerTsx1(){const{handlerOffset,round,size,dataInfo,convertToSharedIndex,loop,autoFillData}=this.__closure;const handlerOffsetValue=handlerOffset.value;const toInt=round(handlerOffsetValue/size)%dataInfo.length;const isPositive=handlerOffsetValue<=0;const i=isPositive?Math.abs(toInt):Math.abs(toInt>0?dataInfo.length-toInt:0);const newSharedIndexValue=convertToSharedIndex({loop:loop,rawDataLength:dataInfo.originalLength,autoFillData:autoFillData,index:i});return{i:i,newSharedIndexValue:newSharedIndexValue};}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = {};
    var4 = 'function pnpm_useCarouselControllerTsx2({i:i,newSharedIndexValue:newSharedIndexValue}){const{index,runOnJS,setSharedIndex}=this.__closure;index.value=i;runOnJS(setSharedIndex)(newSharedIndexValue);}';
    var3.code = var4;
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 'function pnpm_useCarouselControllerTsx3(toValue,onFinished){const{runOnJS,onScrollEnd,duration,Easing,dealWithAnimation,withAnimation}=this.__closure;var _withAnimation;const callback=function(isFinished){"worklet";if(isFinished){runOnJS(onScrollEnd)();onFinished&&runOnJS(onFinished)();}};const defaultWithAnimation={type:"timing",config:{duration:duration,easing:Easing.easeOutQuart}};return dealWithAnimation((_withAnimation=withAnimation)!==null&&_withAnimation!==void 0?_withAnimation:defaultWithAnimation)(toValue,callback);}';
    var3.code = var4;
    var _closure1_slot6 = var3;
    var3 = {};
    var4 = 'function pnpm_useCarouselControllerTsx4(isFinished){const{runOnJS,onScrollEnd,onFinished}=this.__closure;if(isFinished){runOnJS(onScrollEnd)();onFinished&&runOnJS(onFinished)();}}';
    var3.code = var4;
    var _closure1_slot7 = var3;
    var3 = {};
    var4 = 'function pnpm_useCarouselControllerTsx5(opts={}){const{canSliding,loop,index,dataInfo,size,overscrollEnabled,containerSize,onScrollStart,currentFixedPage,handlerOffset,scrollWithTiming}=this.__closure;var _onScrollStart;const{count=1,animated=true,onFinished:onFinished}=opts;if(!canSliding())return;if(!loop&&index.value>=dataInfo.length-1)return;const visibleContentWidth=(dataInfo.length-index.value)*size;if(!overscrollEnabled&&!(visibleContentWidth>containerSize.value.width)){return;}(_onScrollStart=onScrollStart)===null||_onScrollStart===void 0||_onScrollStart();const nextPage=currentFixedPage()+count;index.value=nextPage;if(animated){handlerOffset.value=scrollWithTiming(-nextPage*size,onFinished);}else{handlerOffset.value=-nextPage*size;onFinished===null||onFinished===void 0||onFinished();}}';
    var3.code = var4;
    var _closure1_slot8 = var3;
    var1 = function arg0() {
        _fun75003: for (var _fun75003_ip = 0;;) switch (_fun75003_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var28 = function arg0() {
                    var1 = _closure2_slot13;
                    var0 = arg0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var _closure2_slot24 = var28;
                var10 = var0.ref;
                var16 = var0.size;
                var _closure2_slot1 = var16;
                var15 = var0.loop;
                var _closure2_slot2 = var15;
                var1 = var0.dataLength;
                var _closure2_slot3 = var1;
                var13 = var0.handlerOffset;
                var _closure2_slot4 = var13;
                var20 = var0.withAnimation;
                var _closure2_slot5 = var20;
                var3 = var0.defaultIndex;
                var24 = undefined;
                var6 = 0;
                if (!(var24 !== var3)) {
                    _fun75003_ip = 91;
                    continue _fun75003
                }
            case 88:
                var6 = var3;
            case 91:
                var21 = var0.duration;
                var _closure2_slot6 = var21;
                var3 = var0.autoFillData;
                var _closure2_slot7 = var3;
                var14 = var0.fixedDirection;
                var _closure2_slot8 = var14;
                var23 = _closure1_slot0;
                var25 = _closure1_slot1;
                var4 = 1;
                var4 = var25[var4];
                var7 = var23.bind(var24)(var4);
                var4 = var7.useGlobalState;
                var4 = var4.bind(var7)();
                var7 = var4.props;
                var19 = var7.overscrollEnabled;
                var _closure2_slot9 = var19;
                var4 = var4.layout;
                var18 = var4.containerSize;
                var _closure2_slot10 = var18;
                var9 = _closure1_slot2;
                var7 = var9.useMemo;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var2
                    var0 = {};
                    var1 = _closure2_slot3;
                    var0.length = var1;
                    var2 = !var1;
                    var0.disable = var2;
                    var0.originalLength = var1;
                    return var0;
                };
                var12 = var7.bind(var9)(var1, var4);
                var _closure2_slot11 = var12;
                var22 = 2;
                var1 = var25[var22];
                var4 = var23.bind(var24)(var1);
                var1 = var4.useSharedValue;
                var1 = var1.bind(var4)(var6);
                var _closure2_slot12 = var1;
                var4 = _closure1_slot3;
                var26 = var4.bind(var24)(var6);
                var _closure2_slot13 = var26;
                var27 = var4.bind(var24)(var6);
                var7 = var9.useCallback;
                var6 = new Array(4);
                var6[0] = var13;
                var6[1] = var12;
                var6[2] = var16;
                var6[3] = var15;
                var4 = function() { // Environment: var2
                    _fun75006: for (var _fun75006_ip = 0;;) switch (_fun75006_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun75006_ip = 126;
                                continue _fun75006
                            }
                        case 10:
                            var1 = _closure2_slot4;
                            var3 = var1.value;
                            var2 = _closure2_slot1;
                            var3 = var3 / var2;
                            var2 = _closure2_slot11;
                            var2 = var2.length;
                            var6 = var3 % var2;
                            var4 = global;
                            var3 = var4.Math;
                            var2 = var3.round;
                            var1 = var1.value;
                            var7 = 0;
                            if (!(!(var1 <= var7))) {
                                _fun75006_ip = 102;
                                continue _fun75006
                            }
                        case 64:
                            var5 = var4.Math;
                            var1 = var5.abs;
                            var7 = 0;
                            if (!(var6 > var7)) {
                                _fun75006_ip = 95;
                                continue _fun75006
                            }
                        case 82:
                            var8 = _closure2_slot11;
                            var8 = var8.length;
                            var7 = var8 - var6;
                        case 95:
                            var1 = var1.bind(var5)(var7);
                            _fun75006_ip = 119;
                            continue _fun75006;
                        case 102:
                            var5 = var4.Math;
                            var4 = var5.abs;
                            var1 = var4.bind(var5)(var6);
                        case 119:
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 126:
                            var1 = global;
                            var2 = var1.Math;
                            var1 = var2.round;
                            var3 = _closure2_slot4;
                            var3 = var3.value;
                            var0 = _closure2_slot1;
                            var0 = var3 / var0;
                            var0 = var1.bind(var2)(var0);
                            var0 = -var0;
                            return var0;
                    }
                };
                var4 = var7.bind(var9)(var4, var6);
                var _closure2_slot14 = var4;
                var6 = var25[var22];
                var17 = var23.bind(var24)(var6);
                var11 = var17.useAnimatedReaction;
                var8 = function() {
                    _fun75007: for (var _fun75007_ip = 0;;) switch (_fun75007_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var0 = var0.value;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 3;
                            var2 = var3[var2];
                            var3 = undefined;
                            var6 = var4.bind(var3)(var2);
                            var4 = var6.round;
                            var2 = _closure2_slot1;
                            var2 = var0 / var2;
                            var4 = var4.bind(var6)(var2);
                            var2 = _closure2_slot11;
                            var2 = var2.length;
                            var6 = var4 % var2;
                            var4 = 0;
                            if (!(!(var0 <= var4))) {
                                _fun75007_ip = 114;
                                continue _fun75007
                            }
                        case 74:
                            var0 = global;
                            var2 = var0.Math;
                            var0 = var2.abs;
                            var4 = 0;
                            if (!(var6 > var4)) {
                                _fun75007_ip = 107;
                                continue _fun75007
                            }
                        case 94:
                            var7 = _closure2_slot11;
                            var7 = var7.length;
                            var4 = var7 - var6;
                        case 107:
                            var4 = var0.bind(var2)(var4);
                            _fun75007_ip = 133;
                            continue _fun75007;
                        case 114:
                            var0 = global;
                            var2 = var0.Math;
                            var0 = var2.abs;
                            var4 = var0.bind(var2)(var6);
                        case 133:
                            var0 = {};
                            var0.i = var4;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var1 = 4;
                            var1 = var6[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.convertToSharedIndex;
                            var1 = {};
                            var6 = _closure2_slot2;
                            var1.loop = var6;
                            var6 = _closure2_slot11;
                            var6 = var6.originalLength;
                            var1.rawDataLength = var6;
                            var5 = _closure2_slot7;
                            var1.autoFillData = var5;
                            var1.index = var4;
                            var1 = var2.bind(var3)(var1);
                            var0.newSharedIndexValue = var1;
                            return var0;
                    }
                };
                var6 = {};
                var6.handlerOffset = var13;
                var7 = 3;
                var7 = var25[var7];
                var7 = var23.bind(var24)(var7);
                var7 = var7.round;
                var6.round = var7;
                var6.size = var16;
                var6.dataInfo = var12;
                var7 = 4;
                var7 = var25[var7];
                var7 = var23.bind(var24)(var7);
                var7 = var7.convertToSharedIndex;
                var6.convertToSharedIndex = var7;
                var6.loop = var15;
                var6.autoFillData = var3;
                var8.__closure = var6;
                var6 = 15925793381075.0;
                var8.__workletHash = var6;
                var6 = _closure1_slot4;
                var8.__initData = var6;
                var7 = function arg0() {
                    var0 = arg0;
                    var3 = var0.i;
                    var2 = var0.newSharedIndexValue;
                    var0 = _closure2_slot12;
                    var0.value = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 2;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot24;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var6 = {};
                var6.index = var1;
                var29 = var25[var22];
                var29 = var23.bind(var24)(var29);
                var29 = var29.runOnJS;
                var6.runOnJS = var29;
                var6.setSharedIndex = var28;
                var7.__closure = var6;
                var6 = 4173925309211.0;
                var7.__workletHash = var6;
                var6 = _closure1_slot5;
                var7.__initData = var6;
                var6 = new Array(8);
                var6[0] = var27;
                var6[1] = var26;
                var6[2] = var16;
                var6[3] = var12;
                var6[4] = var1;
                var6[5] = var15;
                var6[6] = var3;
                var6[7] = var13;
                var6 = var11.bind(var17)(var8, var7, var6);
                var7 = var9.useCallback;
                var6 = new Array(4);
                var6[0] = var1;
                var6[1] = var3;
                var6[2] = var12;
                var6[3] = var15;
                var3 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.computedRealIndexWithAutoFillData;
                    var0 = {};
                    var4 = _closure2_slot12;
                    var4 = var4.value;
                    var0.index = var4;
                    var4 = _closure2_slot11;
                    var4 = var4.originalLength;
                    var0.dataLength = var4;
                    var4 = _closure2_slot2;
                    var0.loop = var4;
                    var3 = _closure2_slot7;
                    var0.autoFillData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var7.bind(var9)(var3, var6);
                var _closure2_slot15 = var3;
                var8 = var9.useCallback;
                var7 = new Array(1);
                var7[0] = var12;
                var6 = function() { // Environment: var2
                    var0 = _closure2_slot11;
                    var0 = var0.disable;
                    var0 = !var0;
                    return var0;
                };
                var11 = var8.bind(var9)(var6, var7);
                var _closure2_slot16 = var11;
                var8 = var9.useCallback;
                var7 = new Array(1);
                var7[0] = var0;
                var6 = function() { // Environment: var2
                    _fun75011: for (var _fun75011_ip = 0;;) switch (_fun75011_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = var1.onScrollEnd;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun75011_ip = 33;
                                continue _fun75011
                            }
                        case 19:
                            var1 = _closure2_slot0;
                            var0 = var1.onScrollEnd;
                            var0 = var0.bind(var1)();
                        case 33:
                            var0 = undefined;
                            return var0;
                    }
                };
                var17 = var8.bind(var9)(var6, var7);
                var _closure2_slot17 = var17;
                var7 = var9.useCallback;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var2
                    _fun75012: for (var _fun75012_ip = 0;;) switch (_fun75012_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = var1.onScrollStart;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun75012_ip = 33;
                                continue _fun75012
                            }
                        case 19:
                            var1 = _closure2_slot0;
                            var0 = var1.onScrollStart;
                            var0 = var0.bind(var1)();
                        case 33:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var7.bind(var9)(var0, var6);
                var _closure2_slot18 = var8;
                var7 = var9.useCallback;
                var6 = function arg0, arg1() {
                    _fun75013: for (var _fun75013_ip = 0;;) switch (_fun75013_ip) {
                        case 0:
                            var7 = arg1;
                            var _closure3_slot0 = var7;
                            var3 = function arg0() {
                                _fun75014: for (var _fun75014_ip = 0;;) switch (_fun75014_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun75014_ip = 97;
                                            continue _fun75014
                                        }
                                    case 6:
                                        var3 = _closure1_slot0;
                                        var0 = _closure1_slot1;
                                        var4 = 2;
                                        var0 = var0[var4];
                                        var1 = undefined;
                                        var5 = var3.bind(var1)(var0);
                                        var3 = var5.runOnJS;
                                        var0 = _closure2_slot17;
                                        var0 = var3.bind(var5)(var0);
                                        var0 = var0.bind(var1)();
                                        var3 = _closure3_slot0;
                                        if (!var3) {
                                            _fun75014_ip = 97;
                                            continue _fun75014
                                        }
                                    case 62:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var2 = var2[var4];
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.runOnJS;
                                        var0 = _closure3_slot0;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 97:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4 = {};
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 2;
                            var5 = var6[var2];
                            var2 = undefined;
                            var5 = var1.bind(var2)(var5);
                            var5 = var5.runOnJS;
                            var4.runOnJS = var5;
                            var8 = _closure2_slot17;
                            var4.onScrollEnd = var8;
                            var4.onFinished = var7;
                            var3.__closure = var4;
                            var4 = 14195210871308.0;
                            var3.__workletHash = var4;
                            var0 = _closure1_slot7;
                            var3.__initData = var0;
                            var4 = {};
                            var0 = 'timing';
                            var4.type = var0;
                            var0 = {};
                            var7 = _closure2_slot6;
                            var0.duration = var7;
                            var7 = 5;
                            var7 = var6[var7];
                            var7 = var1.bind(var2)(var7);
                            var7 = var7.Easing;
                            var7 = var7.easeOutQuart;
                            var0.easing = var7;
                            var4.config = var0;
                            var0 = 6;
                            var0 = var6[var0];
                            var1 = var1.bind(var2)(var0);
                            var0 = var1.dealWithAnimation;
                            var7 = _closure2_slot5;
                            var6 = null;
                            if (!(var6 != var7)) {
                                _fun75013_ip = 186;
                                continue _fun75013
                            }
                        case 182:
                            var4 = _closure2_slot5;
                        case 186:
                            var1 = var0.bind(var1)(var4);
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0, var3);
                            return var0;
                    }
                };
                var0 = {};
                var22 = var25[var22];
                var22 = var23.bind(var24)(var22);
                var22 = var22.runOnJS;
                var0.runOnJS = var22;
                var0.onScrollEnd = var17;
                var0.duration = var21;
                var22 = 5;
                var22 = var25[var22];
                var22 = var23.bind(var24)(var22);
                var22 = var22.Easing;
                var0.Easing = var22;
                var22 = 6;
                var22 = var25[var22];
                var22 = var23.bind(var24)(var22);
                var22 = var22.dealWithAnimation;
                var0.dealWithAnimation = var22;
                var0.withAnimation = var20;
                var6.__closure = var0;
                var0 = 4740828363382.0;
                var6.__workletHash = var0;
                var0 = _closure1_slot6;
                var6.__initData = var0;
                var0 = new Array(3);
                var0[0] = var21;
                var0[1] = var20;
                var0[2] = var17;
                var0 = var7.bind(var9)(var6, var0);
                var _closure2_slot19 = var0;
                var7 = var9.useCallback;
                var6 = function() {
                    _fun75015: for (var _fun75015_ip = 0;;) switch (_fun75015_ip) {
                        case 0:
                            var0 = undefined;
                            var3 = undefined;
                            var1 = arguments.length;
                            var2 = 0;
                            if (!(var1 > var2)) {
                                _fun75015_ip = 21;
                                continue _fun75015
                            }
                        case 13:
                            var1 = arguments[var2];
                            if (!(var0 === var1)) {
                                _fun75015_ip = 25;
                                continue _fun75015
                            }
                        case 21:
                            var1 = {};
                            _fun75015_ip = 29;
                            continue _fun75015;
                        case 25:
                            var1 = arguments[var2];
                        case 29:
                            var2 = var1.count;
                            var7 = 1;
                            var5 = var7;
                            if (!(var0 !== var2)) {
                                _fun75015_ip = 48;
                                continue _fun75015
                            }
                        case 45:
                            var5 = var2;
                        case 48:
                            var2 = var1.animated;
                            var6 = var0 === var2;
                            if (var6) {
                                _fun75015_ip = 64;
                                continue _fun75015
                            }
                        case 61:
                            var6 = var2;
                        case 64:
                            var4 = var1.onFinished;
                            var2 = _closure2_slot16;
                            var2 = var2.bind(var0)();
                            if (!var2) {
                                _fun75015_ip = 276;
                                continue _fun75015
                            }
                        case 87:
                            var2 = _closure2_slot2;
                            if (var2) {
                                _fun75015_ip = 123;
                                continue _fun75015
                            }
                        case 94:
                            var2 = _closure2_slot12;
                            var3 = var2.value;
                            var2 = _closure2_slot11;
                            var2 = var2.length;
                            var2 = var2 - var7;
                            if (!(!(var3 >= var2))) {
                                _fun75015_ip = 276;
                                continue _fun75015
                            }
                        case 123:
                            var2 = _closure2_slot11;
                            var3 = var2.length;
                            var2 = _closure2_slot12;
                            var2 = var2.value;
                            var3 = var3 - var2;
                            var2 = _closure2_slot1;
                            var3 = var3 * var2;
                            var2 = _closure2_slot9;
                            if (var2) {
                                _fun75015_ip = 178;
                                continue _fun75015
                            }
                        case 160:
                            var2 = _closure2_slot10;
                            var2 = var2.value;
                            var2 = var2.width;
                            if (!(var3 > var2)) {
                                _fun75015_ip = 276;
                                continue _fun75015
                            }
                        case 178:
                            var2 = _closure2_slot18;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun75015_ip = 196;
                                continue _fun75015
                            }
                        case 188:
                            var2 = _closure2_slot18;
                            var2 = var2.bind(var0)();
                        case 196:
                            var2 = _closure2_slot14;
                            var2 = var2.bind(var0)();
                            var5 = var2 + var5;
                            var2 = _closure2_slot12;
                            var2.value = var5;
                            var2 = _closure2_slot4;
                            var5 = -var5;
                            if (var6) {
                                _fun75015_ip = 252;
                                continue _fun75015
                            }
                        case 228:
                            var6 = _closure2_slot1;
                            var6 = var5 * var6;
                            var2.value = var6;
                            if (!(var3 != var4)) {
                                _fun75015_ip = 276;
                                continue _fun75015
                            }
                        case 246:
                            var3 = var4.bind(var0)();
                            _fun75015_ip = 276;
                            continue _fun75015;
                        case 252:
                            var3 = _closure2_slot19;
                            var1 = _closure2_slot1;
                            var1 = var5 * var1;
                            var1 = var3.bind(var0)(var1, var4);
                            var2.value = var1;
                        case 276:
                            return var0;
                    }
                };
                var17 = {};
                var17.canSliding = var11;
                var17.loop = var15;
                var17.index = var1;
                var17.dataInfo = var12;
                var17.size = var16;
                var17.overscrollEnabled = var19;
                var17.containerSize = var18;
                var17.onScrollStart = var8;
                var17.currentFixedPage = var4;
                var17.handlerOffset = var13;
                var17.scrollWithTiming = var0;
                var6.__closure = var17;
                var17 = 4352275578667.0;
                var6.__workletHash = var17;
                var5 = _closure1_slot8;
                var6.__initData = var5;
                var5 = new Array(9);
                var5[0] = var11;
                var5[1] = var15;
                var5[2] = var1;
                var5[3] = var12;
                var5[4] = var8;
                var5[5] = var13;
                var5[6] = var16;
                var5[7] = var0;
                var5[8] = var4;
                var6 = var7.bind(var9)(var6, var5);
                var _closure2_slot20 = var6;
                var7 = var9.useCallback;
                var5 = new Array(8);
                var5[0] = var11;
                var5[1] = var15;
                var5[2] = var1;
                var5[3] = var8;
                var5[4] = var13;
                var5[5] = var16;
                var5[6] = var0;
                var5[7] = var4;
                var4 = function() { // Environment: var2
                    _fun75016: for (var _fun75016_ip = 0;;) switch (_fun75016_ip) {
                        case 0:
                            var0 = undefined;
                            var2 = undefined;
                            var1 = arguments.length;
                            var3 = 0;
                            if (!(var1 > var3)) {
                                _fun75016_ip = 21;
                                continue _fun75016
                            }
                        case 13:
                            var1 = arguments[var3];
                            if (!(var0 === var1)) {
                                _fun75016_ip = 25;
                                continue _fun75016
                            }
                        case 21:
                            var1 = {};
                            _fun75016_ip = 29;
                            continue _fun75016;
                        case 25:
                            var1 = arguments[var3];
                        case 29:
                            var2 = var1.count;
                            var5 = 1;
                            if (!(var0 !== var2)) {
                                _fun75016_ip = 45;
                                continue _fun75016
                            }
                        case 42:
                            var5 = var2;
                        case 45:
                            var2 = var1.animated;
                            var6 = var0 === var2;
                            if (var6) {
                                _fun75016_ip = 61;
                                continue _fun75016
                            }
                        case 58:
                            var6 = var2;
                        case 61:
                            var4 = var1.onFinished;
                            var2 = _closure2_slot16;
                            var2 = var2.bind(var0)();
                            if (!var2) {
                                _fun75016_ip = 199;
                                continue _fun75016
                            }
                        case 81:
                            var2 = _closure2_slot2;
                            if (var2) {
                                _fun75016_ip = 101;
                                continue _fun75016
                            }
                        case 88:
                            var2 = _closure2_slot12;
                            var2 = var2.value;
                            if (!(!(var2 <= var3))) {
                                _fun75016_ip = 199;
                                continue _fun75016
                            }
                        case 101:
                            var2 = _closure2_slot18;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun75016_ip = 119;
                                continue _fun75016
                            }
                        case 111:
                            var2 = _closure2_slot18;
                            var2 = var2.bind(var0)();
                        case 119:
                            var2 = _closure2_slot14;
                            var2 = var2.bind(var0)();
                            var5 = var2 - var5;
                            var2 = _closure2_slot12;
                            var2.value = var5;
                            var2 = _closure2_slot4;
                            var5 = -var5;
                            if (var6) {
                                _fun75016_ip = 175;
                                continue _fun75016
                            }
                        case 151:
                            var6 = _closure2_slot1;
                            var6 = var5 * var6;
                            var2.value = var6;
                            if (!(var3 != var4)) {
                                _fun75016_ip = 199;
                                continue _fun75016
                            }
                        case 169:
                            var3 = var4.bind(var0)();
                            _fun75016_ip = 199;
                            continue _fun75016;
                        case 175:
                            var3 = _closure2_slot19;
                            var1 = _closure2_slot1;
                            var1 = var5 * var1;
                            var1 = var3.bind(var0)(var1, var4);
                            var2.value = var1;
                        case 199:
                            return var0;
                    }
                };
                var5 = var7.bind(var9)(var4, var5);
                var _closure2_slot21 = var5;
                var7 = var9.useCallback;
                var4 = new Array(9);
                var4[0] = var16;
                var4[1] = var15;
                var4[2] = var1;
                var4[3] = var14;
                var4[4] = var13;
                var12 = var12.length;
                var4[5] = var12;
                var4[6] = var11;
                var4[7] = var8;
                var4[8] = var0;
                var0 = function(arg0) { // Environment: var2
                    _fun75017: for (var _fun75017_ip = 0;;) switch (_fun75017_ip) {
                        case 0:
                            var1 = arg0;
                            var5 = var1.i;
                            var2 = var1.animated;
                            var0 = undefined;
                            var6 = var0 !== var2;
                            if (!var6) {
                                _fun75017_ip = 26;
                                continue _fun75017
                            }
                        case 23:
                            var6 = var2;
                        case 26:
                            var4 = var1.onFinished;
                            var2 = _closure2_slot12;
                            var2 = var2.value;
                            if (!(var5 !== var2)) {
                                _fun75017_ip = 346;
                                continue _fun75017
                            }
                        case 51:
                            var2 = _closure2_slot16;
                            var2 = var2.bind(var0)();
                            if (!var2) {
                                _fun75017_ip = 346;
                                continue _fun75017
                            }
                        case 65:
                            var3 = _closure2_slot18;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun75017_ip = 83;
                                continue _fun75017
                            }
                        case 75:
                            var3 = _closure2_slot18;
                            var3 = var3.bind(var0)();
                        case 83:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var3 = 7;
                            var3 = var8[var3];
                            var9 = var7.bind(var0)(var3);
                            var8 = var9.handlerOffsetDirection;
                            var7 = _closure2_slot4;
                            var3 = _closure2_slot8;
                            var8 = var8.bind(var9)(var7, var3);
                            var9 = _closure2_slot1;
                            var3 = var5 * var9;
                            var7 = var3 * var8;
                            var3 = _closure2_slot11;
                            var3 = var3.length;
                            var9 = var3 * var9;
                            var3 = _closure2_slot2;
                            var11 = false;
                            if (!var3) {
                                _fun75017_ip = 210;
                                continue _fun75017
                            }
                        case 160:
                            var3 = global;
                            var12 = var3.Math;
                            var10 = var12.abs;
                            var3 = _closure2_slot4;
                            var3 = var3.value;
                            var3 = var3 % var9;
                            var3 = var10.bind(var12)(var3);
                            var10 = var3 / var9;
                            var3 = 0.5;
                            var11 = var10 >= var3;
                        case 210:
                            var3 = global;
                            var12 = var3.Math;
                            var10 = var12.floor;
                            var14 = var3.Math;
                            var13 = var14.abs;
                            var3 = _closure2_slot4;
                            var3 = var3.value;
                            var3 = var3 / var9;
                            var3 = var13.bind(var14)(var3);
                            var10 = var10.bind(var12)(var3);
                            var3 = 0;
                            if (!var11) {
                                _fun75017_ip = 267;
                                continue _fun75017
                            }
                        case 264:
                            var3 = 1;
                        case 267:
                            var3 = var10 + var3;
                            var3 = var3 * var9;
                            var3 = var3 * var8;
                            var3 = var3 + var7;
                            if (var6) {
                                _fun75017_ip = 316;
                                continue _fun75017
                            }
                        case 286:
                            var6 = _closure2_slot4;
                            var6.value = var3;
                            var6 = _closure2_slot12;
                            var6.value = var5;
                            if (!(var2 != var4)) {
                                _fun75017_ip = 346;
                                continue _fun75017
                            }
                        case 310:
                            var2 = var4.bind(var0)();
                            _fun75017_ip = 346;
                            continue _fun75017;
                        case 316:
                            var2 = _closure2_slot12;
                            var2.value = var5;
                            var2 = _closure2_slot4;
                            var1 = _closure2_slot19;
                            var1 = var1.bind(var0)(var3, var4);
                            var2.value = var1;
                        case 346:
                            return var0;
                    }
                };
                var0 = var7.bind(var9)(var0, var4);
                var _closure2_slot22 = var0;
                var7 = var9.useCallback;
                var4 = new Array(3);
                var4[0] = var5;
                var4[1] = var6;
                var4[2] = var0;
                var0 = function() { // Environment: var2
                    _fun75018: for (var _fun75018_ip = 0;;) switch (_fun75018_ip) {
                        case 0:
                            var0 = undefined;
                            var3 = undefined;
                            var2 = arguments.length;
                            var1 = 0;
                            if (!(var2 > var1)) {
                                _fun75018_ip = 21;
                                continue _fun75018
                            }
                        case 13:
                            var2 = arguments[var1];
                            if (!(var0 === var2)) {
                                _fun75018_ip = 25;
                                continue _fun75018
                            }
                        case 21:
                            var2 = {};
                            _fun75018_ip = 29;
                            continue _fun75018;
                        case 25:
                            var2 = arguments[var1];
                        case 29:
                            var5 = var2.index;
                            var8 = var2.count;
                            var3 = var2.animated;
                            var4 = var0 !== var3;
                            if (!var4) {
                                _fun75018_ip = 56;
                                continue _fun75018
                            }
                        case 53:
                            var4 = var3;
                        case 56:
                            var3 = var2.onFinished;
                            var6 = 'number';
                            var2 = typeof var5;
                            if (!(var6 === var2)) {
                                _fun75018_ip = 83;
                                continue _fun75018
                            }
                        case 73:
                            var2 = -1;
                            if (!(!(var5 > var2))) {
                                _fun75018_ip = 190;
                                continue _fun75018
                            }
                        case 83:
                            if (!var8) {
                                _fun75018_ip = 218;
                                continue _fun75018
                            }
                        case 89:
                            var6 = global;
                            var7 = var6.Math;
                            var2 = var7.round;
                            var8 = var2.bind(var7)(var8);
                            if (!(!(var8 < var1))) {
                                _fun75018_ip = 142;
                                continue _fun75018
                            }
                        case 111:
                            var2 = _closure2_slot20;
                            var1 = {};
                            var1.count = var8;
                            var1.animated = var4;
                            var1.onFinished = var3;
                            var1 = var2.bind(var0)(var1);
                            _fun75018_ip = 218;
                            continue _fun75018;
                        case 142:
                            var2 = _closure2_slot21;
                            var1 = {};
                            var7 = var6.Math;
                            var6 = var7.abs;
                            var6 = var6.bind(var7)(var8);
                            var1.count = var6;
                            var1.animated = var4;
                            var1.onFinished = var3;
                            var1 = var2.bind(var0)(var1);
                            _fun75018_ip = 218;
                            continue _fun75018;
                        case 190:
                            var2 = _closure2_slot22;
                            var1 = {};
                            var1.i = var5;
                            var1.animated = var4;
                            var1.onFinished = var3;
                            var1 = var2.bind(var0)(var1);
                        case 218:
                            return var0;
                    }
                };
                var4 = var7.bind(var9)(var0, var4);
                var _closure2_slot23 = var4;
                var8 = var9.useImperativeHandle;
                var7 = new Array(4);
                var7[0] = var3;
                var7[1] = var6;
                var7[2] = var5;
                var7[3] = var4;
                var0 = function() { // Environment: var2
                    var0 = {};
                    var2 = _closure2_slot20;
                    var0.next = var2;
                    var2 = _closure2_slot21;
                    var0.prev = var2;
                    var2 = _closure2_slot15;
                    var0.getCurrentIndex = var2;
                    var1 = _closure2_slot23;
                    var0.scrollTo = var1;
                    return var0;
                };
                var0 = var8.bind(var9)(var10, var0, var7);
                var0 = {};
                var0.next = var6;
                var0.prev = var5;
                var0.scrollTo = var4;
                var0.getCurrentIndex = var3;
                var2 = function() {
                    var0 = _closure2_slot13;
                    var0 = var0.current;
                    return var0;
                };
                var0.getSharedIndex = var2;
                var0.index = var1;
                return var0;
        }
    };
    var2.useCarouselController = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9441, 3712, 9450, 9434, 9435, 9451, 9437]);