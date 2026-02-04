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
    var4 = {};
    var0 = 'identity';
    var4.IDENTITY = var0;
    var0 = 'clamp';
    var4.CLAMP = var0;
    var0 = 'extend';
    var4.EXTEND = var0;
    var _closure1_slot2 = var4;
    var0 = {};
    var3 = 'function getVal_Pnpm_interpolationTs1(type,coef,val,leftEdgeOutput,rightEdgeOutput,x){const{Extrapolation}=this.__closure;switch(type){case Extrapolation.IDENTITY:return x;case Extrapolation.CLAMP:if(coef*val<coef*leftEdgeOutput){return leftEdgeOutput;}return rightEdgeOutput;case Extrapolation.EXTEND:default:return val;}}';
    var0.code = var3;
    var _closure1_slot3 = var0;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2, arg3, arg4, arg5() {
            _fun35081: for (var _fun35081_ip = 0;;) switch (_fun35081_ip) {
                case 0:
                    var6 = arg0;
                    var2 = arg1;
                    var3 = arg2;
                    var1 = arg3;
                    var0 = arg4;
                    var5 = _closure1_slot2;
                    var5 = var5.IDENTITY;
                    if (!(var5 !== var6)) {
                        _fun35081_ip = 75;
                        continue _fun35081
                    }
                case 32:
                    var5 = _closure1_slot2;
                    var5 = var5.CLAMP;
                    if (!(var5 !== var6)) {
                        _fun35081_ip = 58;
                        continue _fun35081
                    }
                case 46:
                    var4 = _closure1_slot2;
                    var4 = var4.EXTEND;
                    return var3;
                case 58:
                    var3 = var2 * var3;
                    var2 = var2 * var1;
                    if (!(var3 < var2)) {
                        _fun35081_ip = 73;
                        continue _fun35081
                    }
                case 70:
                    var0 = var1;
                case 73:
                    return var0;
                case 75:
                    var0 = arg5;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot2;
        var2.Extrapolation = var3;
        var0.__closure = var2;
        var2 = 15103214376416.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot3;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var3 = var3.bind(var0)();
    var _closure1_slot4 = var3;
    var3 = {};
    var5 = 'function isExtrapolate_Pnpm_interpolationTs2(value){const{Extrapolation}=this.__closure;return value===Extrapolation.EXTEND||value===Extrapolation.CLAMP||value===Extrapolation.IDENTITY;}';
    var3.code = var5;
    var _closure1_slot5 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun35083: for (var _fun35083_ip = 0;;) switch (_fun35083_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure1_slot2;
                    var0 = var0.EXTEND;
                    var0 = var2 === var0;
                    if (var0) {
                        _fun35083_ip = 37;
                        continue _fun35083
                    }
                case 23:
                    var3 = _closure1_slot2;
                    var3 = var3.CLAMP;
                    var0 = var2 === var3;
                case 37:
                    if (var0) {
                        _fun35083_ip = 54;
                        continue _fun35083
                    }
                case 40:
                    var1 = _closure1_slot2;
                    var1 = var1.IDENTITY;
                    var0 = var2 === var1;
                case 54:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot2;
        var2.Extrapolation = var3;
        var0.__closure = var2;
        var2 = 1560831703072.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot5;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot6 = var3;
    var3 = {};
    var5 = 'function validateType_Pnpm_interpolationTs3(type){const{Extrapolation,isExtrapolate}=this.__closure;const extrapolationConfig={extrapolateLeft:Extrapolation.EXTEND,extrapolateRight:Extrapolation.EXTEND};if(!type){return extrapolationConfig;}if(typeof type===\'string\'){if(!isExtrapolate(type)){throw new ReanimatedError("Unsupported value for \\"interpolate\\" \\nSupported values: [\\"extend\\", \\"clamp\\", \\"identity\\", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]\\n Valid example:\\n        interpolate(value, [inputRange], [outputRange], \\"clamp\\")");}extrapolationConfig.extrapolateLeft=type;extrapolationConfig.extrapolateRight=type;return extrapolationConfig;}if(type.extrapolateLeft&&!isExtrapolate(type.extrapolateLeft)||type.extrapolateRight&&!isExtrapolate(type.extrapolateRight)){throw new ReanimatedError("Unsupported value for \\"interpolate\\" \\nSupported values: [\\"extend\\", \\"clamp\\", \\"identity\\", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]\\n Valid example:\\n      interpolate(value, [inputRange], [outputRange], {\\n        extrapolateLeft: Extrapolation.CLAMP,\\n        extrapolateRight: Extrapolation.IDENTITY\\n      }})");}Object.assign(extrapolationConfig,type);return extrapolationConfig;}';
    var3.code = var5;
    var _closure1_slot7 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun35085: for (var _fun35085_ip = 0;;) switch (_fun35085_ip) {
                case 0:
                    var1 = arg0;
                    var0 = {};
                    var3 = _closure1_slot2;
                    var4 = var3.EXTEND;
                    var0.extrapolateLeft = var4;
                    var3 = var3.EXTEND;
                    var0.extrapolateRight = var3;
                    if (var1) {
                        _fun35085_ip = 39;
                        continue _fun35085
                    }
                case 37:
                    return var0;
                case 39:
                    var4 = 'string';
                    var3 = typeof var1;
                    if (!(var4 !== var3)) {
                        _fun35085_ip = 187;
                        continue _fun35085
                    }
                case 53:
                    var3 = var1.extrapolateLeft;
                    if (!var3) {
                        _fun35085_ip = 82;
                        continue _fun35085
                    }
                case 62:
                    var5 = _closure1_slot6;
                    var4 = var1.extrapolateLeft;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    if (!var3) {
                        _fun35085_ip = 111;
                        continue _fun35085
                    }
                case 82:
                    var3 = var1.extrapolateRight;
                    if (!var3) {
                        _fun35085_ip = 166;
                        continue _fun35085
                    }
                case 91:
                    var5 = _closure1_slot6;
                    var4 = var1.extrapolateRight;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    if (var3) {
                        _fun35085_ip = 166;
                        continue _fun35085
                    }
                case 111:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 0;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var5 = var3.ReanimatedError;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var7 = 'Unsupported value for "interpolate" \nSupported values: ["extend", "clamp", "identity", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]\n Valid example:\n      interpolate(value, [inputRange], [outputRange], {\n        extrapolateLeft: Extrapolation.CLAMP,\n        extrapolateRight: Extrapolation.IDENTITY\n      }})';
                    var8 = var4;
                    var3 = new var8[var5](var7, var6);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
                case 166:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.assign;
                    var3 = var3.bind(var4)(var0, var1);
                    return var0;
                case 187:
                    var3 = _closure1_slot6;
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    if (var3) {
                        _fun35085_ip = 254;
                        continue _fun35085
                    }
                case 201:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 0;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.ReanimatedError;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = 'Unsupported value for "interpolate" \nSupported values: ["extend", "clamp", "identity", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]\n Valid example:\n        interpolate(value, [inputRange], [outputRange], "clamp")';
                    var8 = var3;
                    var2 = new var8[var4](var7, var6);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
                case 254:
                    var0.extrapolateLeft = var1;
                    var0.extrapolateRight = var1;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot2;
        var2.Extrapolation = var3;
        var3 = _closure1_slot6;
        var2.isExtrapolate = var3;
        var0.__closure = var2;
        var2 = 9722315466599.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot7;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot8 = var3;
    var3 = {};
    var5 = 'function internalInterpolate_Pnpm_interpolationTs4(x,narrowedInput,extrapolationConfig){const{getVal}=this.__closure;const{leftEdgeInput:leftEdgeInput,rightEdgeInput:rightEdgeInput,leftEdgeOutput:leftEdgeOutput,rightEdgeOutput:rightEdgeOutput}=narrowedInput;if(rightEdgeInput-leftEdgeInput===0){return leftEdgeOutput;}const progress=(x-leftEdgeInput)/(rightEdgeInput-leftEdgeInput);const val=leftEdgeOutput+progress*(rightEdgeOutput-leftEdgeOutput);const coef=rightEdgeOutput>=leftEdgeOutput?1:-1;if(coef*val<coef*leftEdgeOutput){return getVal(extrapolationConfig.extrapolateLeft,coef,val,leftEdgeOutput,rightEdgeOutput,x);}else if(coef*val>coef*rightEdgeOutput){return getVal(extrapolationConfig.extrapolateRight,coef,val,leftEdgeOutput,rightEdgeOutput,x);}return val;}';
    var3.code = var5;
    var _closure1_slot9 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun35087: for (var _fun35087_ip = 0;;) switch (_fun35087_ip) {
                case 0:
                    var8 = arg0;
                    var3 = arg1;
                    var2 = arg2;
                    var4 = var3.leftEdgeInput;
                    var1 = var3.rightEdgeInput;
                    var0 = var3.leftEdgeOutput;
                    var7 = var3.rightEdgeOutput;
                    var5 = var1 - var4;
                    var3 = 0;
                    if (!(var5 != var3)) {
                        _fun35087_ip = 185;
                        continue _fun35087
                    }
                case 46:
                    var3 = var8 - var4;
                    var1 = var1 - var4;
                    var3 = var3 / var1;
                    var1 = var7 - var0;
                    var1 = var3 * var1;
                    var6 = var0 + var1;
                    var1 = var7 >= var0;
                    var5 = -1;
                    if (!var1) {
                        _fun35087_ip = 86;
                        continue _fun35087
                    }
                case 83:
                    var5 = 1;
                case 86:
                    var3 = var5 * var6;
                    var1 = var5 * var0;
                    if (!(!(var3 < var1))) {
                        _fun35087_ip = 149;
                        continue _fun35087
                    }
                case 98:
                    var4 = var5 * var6;
                    var3 = var5 * var7;
                    var1 = var6;
                    if (!(var4 > var3)) {
                        _fun35087_ip = 147;
                        continue _fun35087
                    }
                case 113:
                    var9 = _closure1_slot4;
                    var15 = var2.extrapolateRight;
                    var16 = undefined;
                    var14 = var5;
                    var13 = var6;
                    var12 = var0;
                    var11 = var7;
                    var10 = var8;
                    var1 = var16[var9](var15, var14, var13, var12, var11, var10, var9);
                case 147:
                    _fun35087_ip = 183;
                    continue _fun35087;
                case 149:
                    var4 = _closure1_slot4;
                    var15 = var2.extrapolateLeft;
                    var16 = undefined;
                    var14 = var5;
                    var13 = var6;
                    var12 = var0;
                    var11 = var7;
                    var10 = var8;
                    var1 = var16[var4](var15, var14, var13, var12, var11, var10, var9);
                case 183:
                    return var1;
                case 185:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot4;
        var2.getVal = var3;
        var0.__closure = var2;
        var2 = 16257995045856.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot9;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot10 = var3;
    var3 = {};
    var5 = "function interpolate_Pnpm_interpolationTs5(x,inputRange,outputRange,type){const{validateType,internalInterpolate}=this.__closure;if(inputRange.length<2||outputRange.length<2){throw new ReanimatedError('Interpolation input and output ranges should contain at least two values.');}const extrapolationConfig=validateType(type);const length=inputRange.length;const narrowedInput={leftEdgeInput:inputRange[0],rightEdgeInput:inputRange[1],leftEdgeOutput:outputRange[0],rightEdgeOutput:outputRange[1]};if(length>2){if(x>inputRange[length-1]){narrowedInput.leftEdgeInput=inputRange[length-2];narrowedInput.rightEdgeInput=inputRange[length-1];narrowedInput.leftEdgeOutput=outputRange[length-2];narrowedInput.rightEdgeOutput=outputRange[length-1];}else{for(let i=1;i<length;++i){if(x<=inputRange[i]){narrowedInput.leftEdgeInput=inputRange[i-1];narrowedInput.rightEdgeInput=inputRange[i];narrowedInput.leftEdgeOutput=outputRange[i-1];narrowedInput.rightEdgeOutput=outputRange[i];break;}}}}return internalInterpolate(x,narrowedInput,extrapolationConfig);}";
    var3.code = var5;
    var _closure1_slot11 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2, arg3() {
            _fun35089: for (var _fun35089_ip = 0;;) switch (_fun35089_ip) {
                case 0:
                    var4 = arg0;
                    var10 = arg1;
                    var6 = arg2;
                    var0 = var10.length;
                    var8 = 2;
                    if (!(!(var0 < var8))) {
                        _fun35089_ip = 272;
                        continue _fun35089
                    }
                case 24:
                    var0 = var6.length;
                    if (!(!(var0 < var8))) {
                        _fun35089_ip = 272;
                        continue _fun35089
                    }
                case 36:
                    var2 = _closure1_slot8;
                    var3 = undefined;
                    var1 = arg3;
                    var2 = var2.bind(var3)(var1);
                    var7 = var10.length;
                    var1 = {};
                    var9 = 0;
                    var5 = var10[var9];
                    var1.leftEdgeInput = var5;
                    var5 = 1;
                    var11 = var10[var5];
                    var1.rightEdgeInput = var11;
                    var9 = var6[var9];
                    var1.leftEdgeOutput = var9;
                    var9 = var6[var5];
                    var1.rightEdgeOutput = var9;
                    if (!(var7 > var8)) {
                        _fun35089_ip = 259;
                        continue _fun35089
                    }
                case 108:
                    var9 = var7 - var5;
                    var9 = var10[var9];
                    if (!(!(var4 > var9))) {
                        _fun35089_ip = 203;
                        continue _fun35089
                    }
                case 120:
                    var9 = var5 < var7;
                    var11 = var5;
                    if (!var9) {
                        _fun35089_ip = 259;
                        continue _fun35089
                    }
                case 133:
                    var12 = var10[var11];
                    var9 = var11;
                    if (!(!(var4 <= var12))) {
                        _fun35089_ip = 153;
                        continue _fun35089
                    }
                case 144:
                    var11 = var9 + 1;
                    if (var11 < var7) {
                        _fun35089_ip = 133;
                        continue _fun35089
                    }
                case 151:
                    _fun35089_ip = 259;
                    continue _fun35089;
                case 153:
                    var11 = var9 - var5;
                    var11 = var10[var11];
                    var1.leftEdgeInput = var11;
                    var11 = var10[var9];
                    var1.rightEdgeInput = var11;
                    var11 = var9 - var5;
                    var11 = var6[var11];
                    var1.leftEdgeOutput = var11;
                    var9 = var6[var9];
                    var1.rightEdgeOutput = var9;
                    _fun35089_ip = 259;
                    continue _fun35089;
                case 203:
                    var9 = var7 - var8;
                    var9 = var10[var9];
                    var1.leftEdgeInput = var9;
                    var9 = var7 - var5;
                    var9 = var10[var9];
                    var1.rightEdgeInput = var9;
                    var8 = var7 - var8;
                    var8 = var6[var8];
                    var1.leftEdgeOutput = var8;
                    var5 = var7 - var5;
                    var5 = var6[var5];
                    var1.rightEdgeOutput = var5;
                case 259:
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)(var4, var1, var2);
                    return var0;
                case 272:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var15 = 'Interpolation input and output ranges should contain at least two values.';
                    var16 = var1;
                    var0 = new var16[var2](var15, var14);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot8;
        var2.validateType = var3;
        var3 = _closure1_slot10;
        var2.internalInterpolate = var3;
        var0.__closure = var2;
        var2 = 16263308339935.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot11;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var5 = {};
    var6 = 'function clamp_Pnpm_interpolationTs6(value,min,max){return Math.min(Math.max(value,min),max);}';
    var5.code = var6;
    var _closure1_slot12 = var5;
    var1 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            var0 = global;
            var3 = var0.Math;
            var2 = var3.min;
            var5 = var0.Math;
            var4 = var5.max;
            var1 = arg0;
            var0 = arg1;
            var1 = var4.bind(var5)(var1, var0);
            var0 = arg2;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 13846341562950.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot12;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.Extrapolation = var4;
    var2.interpolate = var3;
    var2.clamp = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3732]);