// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = {};
    var3 = 'function A_Pnpm_BezierTs1(aA1,aA2){return 1.0-3.0*aA2+3.0*aA1;}';
    var0.code = var3;
    var _closure1_slot2 = var0;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1) { // Original name: A, environment: var0
            var1 = 3;
            var0 = arg1;
            var2 = var1 * var0;
            var0 = arg0;
            var1 = var1 * var0;
            var0 = 1;
            var0 = var0 - var2;
            var0 = var0 + var1;
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 6646411187233.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var3 = var3.bind(var0)();
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'function B_Pnpm_BezierTs2(aA1,aA2){return 3.0*aA2-6.0*aA1;}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1) { // Original name: B, environment: var0
            var1 = 3;
            var0 = arg1;
            var1 = var1 * var0;
            var2 = 6;
            var0 = arg0;
            var0 = var2 * var0;
            var0 = var1 - var0;
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 4657056619296.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 'function C_Pnpm_BezierTs3(aA1){return 3.0*aA1;}';
    var3.code = var4;
    var _closure1_slot6 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: C, environment: var0
            var1 = 3;
            var0 = arg0;
            var0 = var1 * var0;
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 10558087844899.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot6;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot7 = var3;
    var3 = {};
    var4 = 'function calcBezier_Pnpm_BezierTs4(aT,aA1,aA2){const{A,B,C}=this.__closure;return((A(aA1,aA2)*aT+B(aA1,aA2))*aT+C(aA1))*aT;}';
    var3.code = var4;
    var _closure1_slot8 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1, arg2) { // Original name: calcBezier, environment: var0
            var1 = arg0;
            var4 = arg1;
            var6 = arg2;
            var2 = _closure1_slot3;
            var3 = undefined;
            var2 = var2.bind(var3)(var4, var6);
            var5 = var2 * var1;
            var2 = _closure1_slot5;
            var2 = var2.bind(var3)(var4, var6);
            var2 = var5 + var2;
            var2 = var2 * var1;
            var0 = _closure1_slot7;
            var0 = var0.bind(var3)(var4);
            var0 = var2 + var0;
            var0 = var0 * var1;
            return var0;
        };
        var2 = {};
        var3 = _closure1_slot3;
        var2.A = var3;
        var3 = _closure1_slot5;
        var2.B = var3;
        var3 = _closure1_slot7;
        var2.C = var3;
        var0.__closure = var2;
        var2 = 6436686649451.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot8;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot9 = var3;
    var3 = {};
    var4 = 'function getSlope_Pnpm_BezierTs5(aT,aA1,aA2){const{A,B,C}=this.__closure;return 3.0*A(aA1,aA2)*aT*aT+2.0*B(aA1,aA2)*aT+C(aA1);}';
    var3.code = var4;
    var _closure1_slot10 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1, arg2) { // Original name: getSlope, environment: var0
            var5 = arg0;
            var4 = arg1;
            var6 = arg2;
            var0 = _closure1_slot3;
            var3 = undefined;
            var2 = var0.bind(var3)(var4, var6);
            var0 = 3;
            var0 = var0 * var2;
            var0 = var0 * var5;
            var2 = var0 * var5;
            var0 = _closure1_slot5;
            var6 = var0.bind(var3)(var4, var6);
            var0 = 2;
            var0 = var0 * var6;
            var0 = var0 * var5;
            var1 = _closure1_slot7;
            var1 = var1.bind(var3)(var4);
            var0 = var2 + var0;
            var0 = var0 + var1;
            return var0;
        };
        var2 = {};
        var3 = _closure1_slot3;
        var2.A = var3;
        var3 = _closure1_slot5;
        var2.B = var3;
        var3 = _closure1_slot7;
        var2.C = var3;
        var0.__closure = var2;
        var2 = 7144143660854.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot10;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot11 = var3;
    var3 = {};
    var4 = 'function binarySubdivide_Pnpm_BezierTs6(aX,aA,aB,mX1,mX2){const{calcBezier,SUBDIVISION_PRECISION,SUBDIVISION_MAX_ITERATIONS}=this.__closure;let currentX;let currentT;let i=0;do{currentT=aA+(aB-aA)/2.0;currentX=calcBezier(currentT,mX1,mX2)-aX;if(currentX>0.0){aB=currentT;}else{aA=currentT;}}while(Math.abs(currentX)>SUBDIVISION_PRECISION&&++i<SUBDIVISION_MAX_ITERATIONS);return currentT;}';
    var3.code = var4;
    var _closure1_slot12 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: binarySubdivide, environment: var0
            _fun33623: for (var _fun33623_ip = 0;;) switch (_fun33623_ip) {
                case 0:
                    var13 = arg0;
                    var12 = arg1;
                    var11 = arg2;
                    var10 = arg3;
                    var9 = arg4;
                    var8 = 0;
                    var7 = 10;
                    var6 = global;
                    var5 = 1e-07;
                    var3 = 2;
                    var2 = undefined;
                    var1 = 0;
                case 42:
                    var14 = _closure1_slot9;
                    var0 = var11 - var12;
                    var0 = var0 / var3;
                    var0 = var12 + var0;
                    var14 = var14.bind(var2)(var0, var10, var9);
                    var17 = var14 - var13;
                    var14 = var0;
                    if (!(var17 > var8)) {
                        _fun33623_ip = 82;
                        continue _fun33623
                    }
                case 76:
                    var14 = var12;
                    var11 = var0;
                case 82:
                    var16 = var6.Math;
                    var15 = var16.abs;
                    var15 = var15.bind(var16)(var17);
                    if (!(var15 > var5)) {
                        _fun33623_ip = 113;
                        continue _fun33623
                    }
                case 103:
                    var1 = var1 + 1;
                    var12 = var14;
                    if (var1 < var7) {
                        _fun33623_ip = 42;
                        continue _fun33623
                    }
                case 113:
                    return var0;
            }
        };
        var2 = {
            'calcBezier': null,
            'SUBDIVISION_PRECISION': 1e-07,
            'SUBDIVISION_MAX_ITERATIONS': 10
        };
        var3 = _closure1_slot9;
        var2.calcBezier = var3;
        var0.__closure = var2;
        var2 = 16502327865282.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot12;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot13 = var3;
    var3 = {};
    var4 = 'function newtonRaphsonIterate_Pnpm_BezierTs7(aX,aGuessT,mX1,mX2){const{NEWTON_ITERATIONS,getSlope,calcBezier}=this.__closure;for(let i=0;i<NEWTON_ITERATIONS;++i){const currentSlope=getSlope(aGuessT,mX1,mX2);if(currentSlope===0.0){return aGuessT;}const currentX=calcBezier(aGuessT,mX1,mX2)-aX;aGuessT-=currentX/currentSlope;}return aGuessT;}';
    var3.code = var4;
    var _closure1_slot14 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1, arg2, arg3) { // Original name: newtonRaphsonIterate, environment: var0
            _fun33625: for (var _fun33625_ip = 0;;) switch (_fun33625_ip) {
                case 0:
                    var10 = arg0;
                    var9 = arg1;
                    var8 = arg2;
                    var7 = arg3;
                    var6 = 0;
                    var4 = undefined;
                    var3 = 4;
                    var2 = 0;
                case 24:
                    var0 = _closure1_slot11;
                    var11 = var0.bind(var4)(var9, var8, var7);
                    var0 = var9;
                    if (!(var6 !== var11)) {
                        _fun33625_ip = 77;
                        continue _fun33625
                    }
                case 42:
                    var1 = _closure1_slot9;
                    var1 = var1.bind(var4)(var0, var8, var7);
                    var1 = var1 - var10;
                    var1 = var1 / var11;
                    var1 = var0 - var1;
                    var2 = var2 + 1;
                    var9 = var1;
                    if (var2 < var3) {
                        _fun33625_ip = 24;
                        continue _fun33625
                    }
                case 75:
                    return var1;
                case 77:
                    return var0;
            }
        };
        var2 = {};
        var1 = 4;
        var2.NEWTON_ITERATIONS = var1;
        var3 = _closure1_slot11;
        var2.getSlope = var3;
        var3 = _closure1_slot9;
        var2.calcBezier = var3;
        var0.__closure = var2;
        var2 = 13998382484908.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot14;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot15 = var3;
    var3 = {};
    var4 = "function Bezier_Pnpm_BezierTs8(mX1,mY1,mX2,mY2){const{kSplineTableSize,calcBezier,kSampleStepSize,getSlope,NEWTON_MIN_SLOPE,newtonRaphsonIterate,binarySubdivide}=this.__closure;function LinearEasing(x){'worklet';return x;}if(!(mX1>=0&&mX1<=1&&mX2>=0&&mX2<=1)){throw new ReanimatedError('Bezier x values must be in [0, 1] range.');}if(mX1===mY1&&mX2===mY2){return LinearEasing;}const sampleValues=new Array(kSplineTableSize);for(let i=0;i<kSplineTableSize;++i){sampleValues[i]=calcBezier(i*kSampleStepSize,mX1,mX2);}function getTForX(aX){'worklet';let intervalStart=0.0;let currentSample=1;const lastSample=kSplineTableSize-1;for(;currentSample!==lastSample&&sampleValues[currentSample]<=aX;++currentSample){intervalStart+=kSampleStepSize;}--currentSample;const dist=(aX-sampleValues[currentSample])/(sampleValues[currentSample+1]-sampleValues[currentSample]);const guessForT=intervalStart+dist*kSampleStepSize;const initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope>=NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT,mX1,mX2);}else if(initialSlope===0.0){return guessForT;}else{return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);}}return function Bezier_Pnpm_BezierTs8(x){'worklet';if(mX1===mY1&&mX2===mY2){return x;}if(x===0){return 0;}if(x===1){return 1;}return calcBezier(getTForX(x),mY1,mY2);};}";
    var3.code = var4;
    var _closure1_slot16 = var3;
    var3 = {};
    var4 = 'function LinearEasing_Pnpm_BezierTs9(x){return x;}';
    var3.code = var4;
    var _closure1_slot17 = var3;
    var3 = {};
    var4 = 'function getTForX_Pnpm_BezierTs10(aX){const{kSplineTableSize,sampleValues,kSampleStepSize,getSlope,mX1,mX2,NEWTON_MIN_SLOPE,newtonRaphsonIterate,binarySubdivide}=this.__closure;let intervalStart=0.0;let currentSample=1;const lastSample=kSplineTableSize-1;for(;currentSample!==lastSample&&sampleValues[currentSample]<=aX;++currentSample){intervalStart+=kSampleStepSize;}--currentSample;const dist=(aX-sampleValues[currentSample])/(sampleValues[currentSample+1]-sampleValues[currentSample]);const guessForT=intervalStart+dist*kSampleStepSize;const initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope>=NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT,mX1,mX2);}else if(initialSlope===0.0){return guessForT;}else{return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);}}';
    var3.code = var4;
    var _closure1_slot18 = var3;
    var3 = {};
    var4 = 'function BezierEasing_Pnpm_BezierTs11(x){const{mX1,mY1,mX2,mY2,calcBezier,getTForX}=this.__closure;if(mX1===mY1&&mX2===mY2){return x;}if(x===0){return 0;}if(x===1){return 1;}return calcBezier(getTForX(x),mY1,mY2);}';
    var3.code = var4;
    var _closure1_slot19 = var3;
    var1 = function() { // Environment: var1
        var0 = function(arg0, arg1, arg2, arg3) { // Original name: Bezier, environment: var0
            _fun33627: for (var _fun33627_ip = 0;;) switch (_fun33627_ip) {
                case 0:
                    var8 = arg0;
                    var7 = arg1;
                    var6 = arg2;
                    var5 = arg3;
                    var _closure3_slot0 = var8;
                    var _closure3_slot1 = var7;
                    var _closure3_slot2 = var6;
                    var _closure3_slot3 = var5;
                    var0 = function() { // Environment: var1
                        var0 = function(arg0) { // Original name: LinearEasing, environment: var0
                            var0 = arg0;
                            return var0;
                        };
                        var1 = {};
                        var0.__closure = var1;
                        var1 = 17109055856391.0;
                        var0.__workletHash = var1;
                        var1 = _closure1_slot17;
                        var0.__initData = var1;
                        return var0;
                    };
                    var4 = undefined;
                    var0 = var0.bind(var4)();
                    var11 = 0;
                    if (!(var8 >= var11)) {
                        _fun33627_ip = 62;
                        continue _fun33627
                    }
                case 47:
                    var2 = 1;
                    if (!(var8 <= var2)) {
                        _fun33627_ip = 62;
                        continue _fun33627
                    }
                case 54:
                    if (!(var6 >= var11)) {
                        _fun33627_ip = 62;
                        continue _fun33627
                    }
                case 58:
                    if (!(!(var6 <= var2))) {
                        _fun33627_ip = 116;
                        continue _fun33627
                    }
                case 62:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var11];
                    var2 = var3.bind(var4)(var2);
                    var9 = var2.ReanimatedError;
                    var2 = var9.prototype;
                    var3 = Object.create(var2, {
                        constructor: {
                            value: var9
                        }
                    });
                    var16 = 'Bezier x values must be in [0, 1] range.';
                    var17 = var3;
                    var2 = new var17[var9](var16, var15);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
                case 116:
                    if (!(var8 === var7)) {
                        _fun33627_ip = 127;
                        continue _fun33627
                    }
                case 120:
                    if (!(var6 !== var5)) {
                        _fun33627_ip = 300;
                        continue _fun33627
                    }
                case 127:
                    var2 = global;
                    var2 = var2.Array;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = 11;
                    var17 = var3;
                    var16 = var10;
                    var2 = new var17[var2](var16, var15);
                    var9 = var2 instanceof Object ? var2 : var3;
                    var _closure3_slot4 = var9;
                    var3 = 0.1;
                    var11 = 0;
                case 180:
                    var13 = _closure1_slot9;
                    var12 = var11 * var3;
                    var12 = var13.bind(var4)(var12, var8, var6);
                    var9[var11] = var12;
                    var11 = var11 + 1;
                    if (var11 < var10) {
                        _fun33627_ip = 180;
                        continue _fun33627
                    }
                case 206:
                    var3 = function() { // Environment: var1
                        var0 = function(arg0) { // Original name: getTForX, environment: var0
                            _fun33631: for (var _fun33631_ip = 0;;) switch (_fun33631_ip) {
                                case 0:
                                    var6 = arg0;
                                    var2 = _closure3_slot4;
                                    var0 = 1;
                                    var2 = var2[var0];
                                    var4 = var2 <= var6;
                                    var8 = 0;
                                    var3 = 0.1;
                                    var9 = 10;
                                    var7 = 0;
                                    var5 = var0;
                                    var10 = 0;
                                    var2 = var5;
                                    if (!var4) {
                                        _fun33631_ip = 90;
                                        continue _fun33631
                                    }
                                case 49:
                                    var12 = var7 + var3;
                                    var11 = var5 + 1;
                                    var10 = var12;
                                    var2 = var11;
                                    if (!(var9 !== var11)) {
                                        _fun33631_ip = 90;
                                        continue _fun33631
                                    }
                                case 66:
                                    var4 = _closure3_slot4;
                                    var4 = var4[var11];
                                    var7 = var12;
                                    var5 = var11;
                                    var10 = var7;
                                    var2 = var5;
                                    if (var4 <= var6) {
                                        _fun33631_ip = 49;
                                        continue _fun33631
                                    }
                                case 90:
                                    var5 = var2 - 1;
                                    var2 = _closure3_slot4;
                                    var2 = var2[var5];
                                    var2 = var6 - var2;
                                    var4 = _closure3_slot4;
                                    var0 = var5 + var0;
                                    var4 = var4[var0];
                                    var0 = _closure3_slot4;
                                    var0 = var0[var5];
                                    var0 = var4 - var0;
                                    var0 = var2 / var0;
                                    var0 = var0 * var3;
                                    var5 = var10 + var0;
                                    var9 = _closure1_slot11;
                                    var7 = _closure3_slot0;
                                    var0 = _closure3_slot2;
                                    var4 = undefined;
                                    var7 = var9.bind(var4)(var5, var7, var0);
                                    var0 = 0.001;
                                    if (!(!(var7 >= var0))) {
                                        _fun33631_ip = 216;
                                        continue _fun33631
                                    }
                                case 179:
                                    var0 = var5;
                                    if (!(var8 !== var7)) {
                                        _fun33631_ip = 214;
                                        continue _fun33631
                                    }
                                case 186:
                                    var9 = _closure1_slot13;
                                    var14 = _closure3_slot0;
                                    var13 = _closure3_slot2;
                                    var15 = var10 + var3;
                                    var18 = undefined;
                                    var17 = var6;
                                    var16 = var10;
                                    var0 = var18[var9](var17, var16, var15, var14, var13, var12);
                                case 214:
                                    _fun33631_ip = 240;
                                    continue _fun33631;
                                case 216:
                                    var3 = _closure1_slot15;
                                    var15 = _closure3_slot0;
                                    var14 = _closure3_slot2;
                                    var18 = undefined;
                                    var17 = var6;
                                    var16 = var5;
                                    var0 = var18[var3](var17, var16, var15, var14, var13);
                                case 240:
                                    return var0;
                            }
                        };
                        var2 = {
                            'kSplineTableSize': 11,
                            'sampleValues': null,
                            'kSampleStepSize': 0.1
                        };
                        var1 = _closure3_slot4;
                        var2.sampleValues = var1;
                        var4 = _closure1_slot11;
                        var2.getSlope = var4;
                        var4 = _closure3_slot0;
                        var2.mX1 = var4;
                        var3 = _closure3_slot2;
                        var2.mX2 = var3;
                        var3 = 0.001;
                        var2.NEWTON_MIN_SLOPE = var3;
                        var3 = _closure1_slot15;
                        var2.newtonRaphsonIterate = var3;
                        var3 = _closure1_slot13;
                        var2.binarySubdivide = var3;
                        var0.__closure = var2;
                        var2 = 8576728300710.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot18;
                        var0.__initData = var1;
                        return var0;
                    };
                    var4 = var3.bind(var4)();
                    var _closure3_slot5 = var4;
                    var1 = function(arg0) { // Original name: BezierEasing, environment: var1
                        _fun33632: for (var _fun33632_ip = 0;;) switch (_fun33632_ip) {
                            case 0:
                                var5 = arg0;
                                var1 = _closure3_slot0;
                                var0 = _closure3_slot1;
                                if (!(var1 === var0)) {
                                    _fun33632_ip = 33;
                                    continue _fun33632
                                }
                            case 18:
                                var2 = _closure3_slot2;
                                var1 = _closure3_slot3;
                                var0 = var5;
                                if (!(var2 !== var1)) {
                                    _fun33632_ip = 85;
                                    continue _fun33632
                                }
                            case 33:
                                var1 = 0;
                                if (!(var1 !== var5)) {
                                    _fun33632_ip = 82;
                                    continue _fun33632
                                }
                            case 39:
                                var2 = 1;
                                if (!(var2 !== var5)) {
                                    _fun33632_ip = 79;
                                    continue _fun33632
                                }
                            case 46:
                                var7 = _closure1_slot9;
                                var4 = _closure3_slot5;
                                var6 = undefined;
                                var5 = var4.bind(var6)(var5);
                                var4 = _closure3_slot1;
                                var3 = _closure3_slot3;
                                var2 = var7.bind(var6)(var5, var4, var3);
                            case 79:
                                var1 = var2;
                            case 82:
                                var0 = var1;
                            case 85:
                                return var0;
                        }
                    };
                    var3 = {};
                    var3.mX1 = var8;
                    var3.mY1 = var7;
                    var3.mX2 = var6;
                    var3.mY2 = var5;
                    var5 = _closure1_slot9;
                    var3.calcBezier = var5;
                    var3.getTForX = var4;
                    var1.__closure = var3;
                    var3 = 4633198201234.0;
                    var1.__workletHash = var3;
                    var2 = _closure1_slot19;
                    var1.__initData = var2;
                    return var1;
                case 300:
                    return var0;
            }
        };
        var2 = {
            'kSplineTableSize': 11,
            'calcBezier': null,
            'kSampleStepSize': 0.1,
            'getSlope': null,
            'NEWTON_MIN_SLOPE': 0.001
        };
        var3 = _closure1_slot9;
        var2.calcBezier = var3;
        var3 = _closure1_slot11;
        var2.getSlope = var3;
        var3 = _closure1_slot15;
        var2.newtonRaphsonIterate = var3;
        var3 = _closure1_slot13;
        var2.binarySubdivide = var3;
        var0.__closure = var2;
        var2 = 1707642440340.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot16;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.Bezier = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3691]);