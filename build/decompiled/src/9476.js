// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useRef;
    var _closure1_slot2 = var3;
    var3 = {};
    var4 = 'function pnpm_useVisibleRangesTsx1(){const{windowSize,translation,viewSize,total,loop,isArraysEqual,cachedRanges}=this.__closure;var _cachedRanges$current,_cachedRanges$current2,_cachedRanges$current3,_cachedRanges$current4;const positiveCount=Math.round(windowSize/2);const negativeCount=windowSize-positiveCount;let currentIndex=Math.round(-translation.value/viewSize);currentIndex=currentIndex<0?currentIndex%total+total:currentIndex;let newRanges;if(!loop){newRanges={negativeRange:[0+currentIndex-(windowSize-1),0+currentIndex],positiveRange:[0+currentIndex,currentIndex+(windowSize-1)]};}else{const negativeRange=[(currentIndex-negativeCount+total)%total,(currentIndex-1+total)%total];const positiveRange=[(currentIndex+total)%total,(currentIndex+positiveCount+total)%total];if(negativeRange[0]<total&&negativeRange[0]>negativeRange[1]){negativeRange[1]=total-1;positiveRange[0]=0;}if(positiveRange[0]>positiveRange[1]){negativeRange[1]=total-1;positiveRange[0]=0;}newRanges={negativeRange:negativeRange,positiveRange:positiveRange};}if(isArraysEqual((_cachedRanges$current=(_cachedRanges$current2=cachedRanges.current)===null||_cachedRanges$current2===void 0?void 0:_cachedRanges$current2.negativeRange)!==null&&_cachedRanges$current!==void 0?_cachedRanges$current:[],newRanges.negativeRange)&&isArraysEqual((_cachedRanges$current3=(_cachedRanges$current4=cachedRanges.current)===null||_cachedRanges$current4===void 0?void 0:_cachedRanges$current4.positiveRange)!==null&&_cachedRanges$current3!==void 0?_cachedRanges$current3:[],newRanges.positiveRange))return cachedRanges.current;cachedRanges.current=newRanges;return cachedRanges.current;}';
    var3.code = var4;
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'function isArraysEqual_Pnpm_useVisibleRangesTsx2(a,b){if(a.length!==b.length)return false;return a.every(function(value,index){return value===b[index];});}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            _fun75193: for (var _fun75193_ip = 0;;) switch (_fun75193_ip) {
                case 0:
                    var3 = arg0;
                    var0 = arg1;
                    var _closure3_slot0 = var0;
                    var2 = var3.length;
                    var0 = var0.length;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun75193_ip = 47;
                        continue _fun75193
                    }
                case 29:
                    var2 = var3.every;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = arg1;
                        var1 = var1[var0];
                        var0 = arg0;
                        var0 = var0 === var1;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 47:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 6222082561981.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot5 = var3;
    var1 = function arg0() {
        _fun75195: for (var _fun75195_ip = 0;;) switch (_fun75195_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.total;
                var8 = undefined;
                var6 = 0;
                if (!(var8 !== var0)) {
                    _fun75195_ip = 22;
                    continue _fun75195
                }
            case 19:
                var6 = var0;
            case 22:
                var _closure2_slot0 = var6;
                var10 = var2.viewSize;
                var _closure2_slot1 = var10;
                var4 = var2.translation;
                var _closure2_slot2 = var4;
                var0 = var2.windowSize;
                var7 = var2.loop;
                var _closure2_slot3 = var7;
                var3 = null;
                var5 = var6;
                if (!(var3 != var0)) {
                    _fun75195_ip = 74;
                    continue _fun75195
                }
            case 71:
                var5 = var0;
            case 74:
                var _closure2_slot4 = var5;
                var2 = _closure1_slot2;
                var9 = var2.bind(var8)(var3);
                var _closure2_slot5 = var9;
                var3 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 1;
                var2 = var11[var2];
                var3 = var3.bind(var8)(var2);
                var2 = var3.useDerivedValue;
                var1 = function() {
                    _fun75196: for (var _fun75196_ip = 0;;) switch (_fun75196_ip) {
                        case 0:
                            var1 = global;
                            var4 = var1.Math;
                            var3 = var4.round;
                            var5 = _closure2_slot4;
                            var2 = 2;
                            var2 = var5 / var2;
                            var7 = var3.bind(var4)(var2);
                            var2 = _closure2_slot4;
                            var3 = var2 - var7;
                            var4 = var1.Math;
                            var2 = var4.round;
                            var1 = _closure2_slot2;
                            var1 = var1.value;
                            var5 = -var1;
                            var1 = _closure2_slot1;
                            var1 = var5 / var1;
                            var4 = var2.bind(var4)(var1);
                            var1 = 0;
                            var5 = var4;
                            if (!(var5 < var1)) {
                                _fun75196_ip = 101;
                                continue _fun75196
                            }
                        case 85:
                            var2 = _closure2_slot0;
                            var4 = var4 % var2;
                            var2 = _closure2_slot0;
                            var5 = var4 + var2;
                        case 101:
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun75196_ip = 188;
                                continue _fun75196
                            }
                        case 108:
                            var2 = {};
                            var9 = var1 + var5;
                            var4 = _closure2_slot4;
                            var8 = 1;
                            var6 = var4 - var8;
                            var4 = new Array(2);
                            var6 = var9 - var6;
                            var4[0] = var6;
                            var6 = var1 + var5;
                            var4[1] = var6;
                            var2.negativeRange = var4;
                            var6 = var1 + var5;
                            var4 = new Array(2);
                            var4[0] = var6;
                            var6 = _closure2_slot4;
                            var6 = var6 - var8;
                            var6 = var5 + var6;
                            var4[1] = var6;
                            var2.positiveRange = var4;
                            _fun75196_ip = 380;
                            continue _fun75196;
                        case 188:
                            var4 = var5 - var3;
                            var3 = _closure2_slot0;
                            var4 = var4 + var3;
                            var3 = _closure2_slot0;
                            var3 = var4 % var3;
                            var4 = new Array(2);
                            var4[0] = var3;
                            var6 = 1;
                            var8 = var5 - var6;
                            var3 = _closure2_slot0;
                            var8 = var8 + var3;
                            var3 = _closure2_slot0;
                            var3 = var8 % var3;
                            var4[1] = var3;
                            var3 = _closure2_slot0;
                            var8 = var5 + var3;
                            var3 = _closure2_slot0;
                            var8 = var8 % var3;
                            var3 = new Array(2);
                            var3[0] = var8;
                            var7 = var5 + var7;
                            var5 = _closure2_slot0;
                            var7 = var7 + var5;
                            var5 = _closure2_slot0;
                            var5 = var7 % var5;
                            var3[1] = var5;
                            var7 = var4[var1];
                            var5 = _closure2_slot0;
                            var5 = var7 < var5;
                            if (!var5) {
                                _fun75196_ip = 318;
                                continue _fun75196
                            }
                        case 306:
                            var8 = var4[var1];
                            var7 = var4[var6];
                            var5 = var8 > var7;
                        case 318:
                            if (!var5) {
                                _fun75196_ip = 337;
                                continue _fun75196
                            }
                        case 321:
                            var5 = _closure2_slot0;
                            var5 = var5 - var6;
                            var4[var6] = var5;
                            var3[var1] = var1;
                        case 337:
                            var7 = var3[var1];
                            var5 = var3[var6];
                            if (!(var7 > var5)) {
                                _fun75196_ip = 365;
                                continue _fun75196
                            }
                        case 349:
                            var5 = _closure2_slot0;
                            var5 = var5 - var6;
                            var4[var6] = var5;
                            var3[var1] = var1;
                        case 365:
                            var1 = {};
                            var1.negativeRange = var4;
                            var1.positiveRange = var3;
                            var2 = var1;
                        case 380:
                            var7 = _closure1_slot5;
                            var1 = _closure2_slot5;
                            var1 = var1.current;
                            var3 = null;
                            var8 = var3 == var1;
                            var6 = undefined;
                            var5 = undefined;
                            if (var8) {
                                _fun75196_ip = 415;
                                continue _fun75196
                            }
                        case 409:
                            var5 = var1.negativeRange;
                        case 415:
                            if (!(var3 == var5)) {
                                _fun75196_ip = 423;
                                continue _fun75196
                            }
                        case 419:
                            var5 = new Array(0);
                        case 423:
                            var1 = var2.negativeRange;
                            var1 = var7.bind(var6)(var5, var1);
                            if (!var1) {
                                _fun75196_ip = 486;
                                continue _fun75196
                            }
                        case 438:
                            var5 = _closure1_slot5;
                            var4 = _closure2_slot5;
                            var7 = var4.current;
                            var8 = var3 == var7;
                            var4 = undefined;
                            if (var8) {
                                _fun75196_ip = 466;
                                continue _fun75196
                            }
                        case 460:
                            var4 = var7.positiveRange;
                        case 466:
                            if (!(var3 == var4)) {
                                _fun75196_ip = 474;
                                continue _fun75196
                            }
                        case 470:
                            var4 = new Array(0);
                        case 474:
                            var3 = var2.positiveRange;
                            var1 = var5.bind(var6)(var4, var3);
                        case 486:
                            if (var1) {
                                _fun75196_ip = 499;
                                continue _fun75196
                            }
                        case 489:
                            var1 = _closure2_slot5;
                            var1.current = var2;
                        case 499:
                            var0 = _closure2_slot5;
                            var0 = var0.current;
                            return var0;
                    }
                };
                var8 = {};
                var8.windowSize = var5;
                var8.translation = var4;
                var8.viewSize = var10;
                var8.total = var6;
                var8.loop = var7;
                var10 = _closure1_slot5;
                var8.isArraysEqual = var10;
                var8.cachedRanges = var9;
                var1.__closure = var8;
                var8 = 627759706032.0;
                var1.__workletHash = var8;
                var0 = _closure1_slot3;
                var1.__initData = var0;
                var0 = new Array(4);
                var0[0] = var7;
                var0[1] = var6;
                var0[2] = var5;
                var0[3] = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.useVisibleRanges = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3721]);