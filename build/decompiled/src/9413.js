// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function() { // Original name: horizontalStackLayout, environment: var1
        _fun74872: for (var _fun74872_ip = 0;;) switch (_fun74872_ip) {
            case 0:
                var5 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var1 = 0;
                if (!(var3 > var1)) {
                    _fun74872_ip = 23;
                    continue _fun74872
                }
            case 15:
                var3 = arguments[var1];
                if (!(var5 === var3)) {
                    _fun74872_ip = 27;
                    continue _fun74872
                }
            case 23:
                var3 = {};
                _fun74872_ip = 31;
                continue _fun74872;
            case 27:
                var3 = arguments[var1];
            case 31:
                var _closure2_slot0 = var3;
                var0 = function(arg0) { // Original name: pnpm_stackTs1, environment: var0
                    _fun74873: for (var _fun74873_ip = 0;;) switch (_fun74873_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var4 = var1.showLength;
                            var1 = _closure2_slot0;
                            var1 = var1.snapDirection;
                            var3 = 'left';
                            var14 = undefined;
                            var15 = var3;
                            if (!(var14 !== var1)) {
                                _fun74873_ip = 39;
                                continue _fun74873
                            }
                        case 36:
                            var15 = var1;
                        case 39:
                            var1 = _closure2_slot0;
                            var10 = var1.moveSize;
                            if (!(var14 === var10)) {
                                _fun74873_ip = 65;
                                continue _fun74873
                            }
                        case 53:
                            var1 = _closure1_slot3;
                            var10 = var1.width;
                        case 65:
                            var1 = _closure2_slot0;
                            var1 = var1.stackInterval;
                            var7 = 18;
                            if (!(var14 !== var1)) {
                                _fun74873_ip = 85;
                                continue _fun74873
                            }
                        case 82:
                            var7 = var1;
                        case 85:
                            var1 = _closure2_slot0;
                            var1 = var1.scaleInterval;
                            var9 = 0.04;
                            if (!(var14 !== var1)) {
                                _fun74873_ip = 112;
                                continue _fun74873
                            }
                        case 109:
                            var9 = var1;
                        case 112:
                            var1 = _closure2_slot0;
                            var1 = var1.opacityInterval;
                            var5 = 0.1;
                            if (!(var14 !== var1)) {
                                _fun74873_ip = 139;
                                continue _fun74873
                            }
                        case 136:
                            var5 = var1;
                        case 139:
                            var0 = _closure2_slot0;
                            var0 = var0.rotateZDeg;
                            var8 = 30;
                            if (!(var14 !== var0)) {
                                _fun74873_ip = 159;
                                continue _fun74873
                            }
                        case 156:
                            var8 = var0;
                        case 159:
                            var2 = _closure1_slot7;
                            var1 = {};
                            var1.showLength = var4;
                            var4 = arg0;
                            var1.value = var4;
                            var1.snapDirection = var15;
                            var1 = var2.bind(var14)(var1);
                            var4 = var1.validLength;
                            var12 = var1.value;
                            var11 = var1.inputRange;
                            var2 = _closure1_slot9;
                            var1 = {};
                            var1.validLength = var4;
                            var1.value = var12;
                            var1.opacityInterval = var5;
                            var1.snapDirection = var15;
                            var1 = var2.bind(var14)(var1);
                            var2 = var1.zIndex;
                            var1 = var1.opacity;
                            if (!(var3 !== var15)) {
                                _fun74873_ip = 539;
                                continue _fun74873
                            }
                        case 255:
                            var13 = 'right';
                            var3 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            if (!(var13 === var15)) {
                                _fun74873_ip = 804;
                                continue _fun74873
                            }
                        case 272:
                            var20 = _closure1_slot0;
                            var21 = _closure1_slot1;
                            var13 = 2;
                            var15 = var21[var13];
                            var18 = var20.bind(var14)(var15);
                            var17 = var18.interpolate;
                            var15 = -var4;
                            var15 = var15 * var7;
                            var16 = new Array(3);
                            var16[0] = var15;
                            var15 = 0;
                            var16[1] = var15;
                            var16[2] = var10;
                            var15 = var21[var13];
                            var15 = var20.bind(var14)(var15);
                            var15 = var15.Extrapolation;
                            var23 = var15.CLAMP;
                            var27 = var18;
                            var26 = var12;
                            var25 = var11;
                            var24 = var16;
                            var3 = var27[var17](var26, var25, var24, var23, var22);
                            var15 = var21[var13];
                            var19 = var20.bind(var14)(var15);
                            var18 = var19.interpolate;
                            var17 = var4 * var9;
                            var15 = 1;
                            var22 = var15 - var17;
                            var17 = new Array(3);
                            var17[0] = var22;
                            var17[1] = var15;
                            var17[2] = var15;
                            var15 = var21[var13];
                            var15 = var20.bind(var14)(var15);
                            var15 = var15.Extrapolation;
                            var23 = var15.CLAMP;
                            var27 = var19;
                            var26 = var12;
                            var25 = var11;
                            var24 = var17;
                            var6 = var27[var18](var26, var25, var24, var23, var22);
                            var17 = var21[var13];
                            var19 = var20.bind(var14)(var17);
                            var18 = var19.interpolate;
                            var17 = [0, 0];
                            var17[2] = var8;
                            var13 = var21[var13];
                            var13 = var20.bind(var14)(var13);
                            var13 = var13.Extrapolation;
                            var23 = var13.CLAMP;
                            var27 = var19;
                            var26 = var12;
                            var25 = var11;
                            var24 = var17;
                            var19 = var27[var18](var26, var25, var24, var23, var22);
                            var13 = global;
                            var13 = var13.HermesInternal;
                            var18 = var13.concat;
                            var17 = '';
                            var13 = 'deg';
                            var5 = var18.bind(var17)(var19, var13);
                            _fun74873_ip = 804;
                            continue _fun74873;
                        case 539:
                            var13 = _closure1_slot0;
                            var15 = _closure1_slot1;
                            var0 = 2;
                            var16 = var15[var0];
                            var18 = var13.bind(var14)(var16);
                            var17 = var18.interpolate;
                            var16 = -var10;
                            var10 = new Array(3);
                            var10[0] = var16;
                            var16 = 0;
                            var10[1] = var16;
                            var7 = var4 * var7;
                            var10[2] = var7;
                            var7 = var15[var0];
                            var7 = var13.bind(var14)(var7);
                            var7 = var7.Extrapolation;
                            var23 = var7.CLAMP;
                            var27 = var18;
                            var26 = var12;
                            var25 = var11;
                            var24 = var10;
                            var3 = var27[var17](var26, var25, var24, var23, var22);
                            var10 = var15[var0];
                            var17 = var13.bind(var14)(var10);
                            var10 = var17.interpolate;
                            var9 = var4 * var9;
                            var4 = 1;
                            var4 = var4 - var9;
                            var9 = [1, 1];
                            var9[2] = var4;
                            var4 = var15[var0];
                            var4 = var13.bind(var14)(var4);
                            var4 = var4.Extrapolation;
                            var23 = var4.CLAMP;
                            var27 = var17;
                            var26 = var12;
                            var25 = var11;
                            var24 = var9;
                            var6 = var27[var10](var26, var25, var24, var23, var22);
                            var9 = var15[var0];
                            var10 = var13.bind(var14)(var9);
                            var9 = var10.interpolate;
                            var17 = -var8;
                            var8 = new Array(3);
                            var8[0] = var17;
                            var8[1] = var16;
                            var8[2] = var16;
                            var0 = var15[var0];
                            var0 = var13.bind(var14)(var0);
                            var0 = var0.Extrapolation;
                            var23 = var0.CLAMP;
                            var27 = var10;
                            var26 = var12;
                            var25 = var11;
                            var24 = var8;
                            var10 = var27[var9](var26, var25, var24, var23, var22);
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var9 = var0.concat;
                            var8 = '';
                            var0 = 'deg';
                            var5 = var9.bind(var8)(var10, var0);
                        case 804:
                            var0 = {};
                            var4 = {};
                            var4.translateX = var3;
                            var3 = new Array(3);
                            var3[0] = var4;
                            var4 = {};
                            var4.scale = var6;
                            var3[1] = var4;
                            var4 = {};
                            var4.rotateZ = var5;
                            var3[2] = var4;
                            var0.transform = var3;
                            var0.zIndex = var2;
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var2 = {};
                var4 = _closure1_slot3;
                var2.screen = var4;
                var2.modeConfig = var3;
                var3 = _closure1_slot7;
                var2.getCommonVariables = var3;
                var3 = _closure1_slot9;
                var2.getCommonStyles = var3;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var7 = var6[var3];
                var7 = var4.bind(var5)(var7);
                var7 = var7.interpolate;
                var2.interpolate = var7;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.Extrapolation;
                var2.Extrapolation = var3;
                var0.__closure = var2;
                var2 = 13118376883684.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot4;
                var0.__initData = var1;
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.useMemo;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var6 = var4.Dimensions;
    var5 = var6.get;
    var4 = 'window';
    var4 = var5.bind(var6)(var4);
    var _closure1_slot3 = var4;
    var4 = {};
    var5 = 'function pnpm_stackTs1(_value){const{screen,modeConfig,getCommonVariables,getCommonStyles,interpolate,Extrapolation}=this.__closure;const{showLength:showLength,snapDirection="left",moveSize=screen.width,stackInterval=18,scaleInterval=0.04,opacityInterval=0.1,rotateZDeg=30}=modeConfig;const{validLength:validLength,value:value,inputRange:inputRange}=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection});const{zIndex:zIndex,opacity:opacity}=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection});let translateX;let scale;let rotateZ;if(snapDirection==="left"){translateX=interpolate(value,inputRange,[-moveSize,0,validLength*stackInterval],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1,1,1-validLength*scaleInterval],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[-rotateZDeg,0,0],Extrapolation.CLAMP)+"deg";}else if(snapDirection==="right"){translateX=interpolate(value,inputRange,[-validLength*stackInterval,0,moveSize],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1-validLength*scaleInterval,1,1],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[0,0,rotateZDeg],Extrapolation.CLAMP)+"deg";}const transform=[{translateX:translateX},{scale:scale},{rotateZ:rotateZ}];const styles={transform:transform,zIndex:zIndex,opacity:opacity};return styles;}';
    var4.code = var5;
    var _closure1_slot4 = var4;
    var4 = {};
    var5 = 'function pnpm_stackTs2(_value){const{screen,modeConfig,getCommonVariables,getCommonStyles,interpolate,Extrapolation}=this.__closure;const{showLength:showLength,snapDirection="left",moveSize=screen.width,stackInterval=18,scaleInterval=0.04,opacityInterval=0.1,rotateZDeg=30}=modeConfig;const{validLength:validLength,value:value,inputRange:inputRange}=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection});const{zIndex:zIndex,opacity:opacity}=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection});let translateX;let scale;let rotateZ;let translateY;if(snapDirection==="left"){translateX=interpolate(value,inputRange,[-moveSize,0,0],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1,1,1-validLength*scaleInterval],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[-rotateZDeg,0,0],Extrapolation.CLAMP)+"deg";translateY=interpolate(value,inputRange,[0,0,validLength*stackInterval],Extrapolation.CLAMP);}else if(snapDirection==="right"){translateX=interpolate(value,inputRange,[0,0,moveSize],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1-validLength*scaleInterval,1,1],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[0,0,rotateZDeg],Extrapolation.CLAMP)+"deg";translateY=interpolate(value,inputRange,[validLength*stackInterval,0,0],Extrapolation.CLAMP);}const transform=[{translateX:translateX},{scale:scale},{rotateZ:rotateZ},{translateY:translateY}];const styles={transform:transform,zIndex:zIndex,opacity:opacity};return styles;}';
    var4.code = var5;
    var _closure1_slot5 = var4;
    var4 = {};
    var5 = 'function getCommonVariables_Pnpm_stackTs3(opts){const{showLength:showLength,value:_value,snapDirection:snapDirection}=opts;function easeInOutCubic(v){return v<0.5?4*v*v*v:1-(-2*v+2)**3/2;}const page=Math.floor(Math.abs(_value));const diff=Math.abs(_value)%1;const value=_value<0?-(page+easeInOutCubic(diff)):page+easeInOutCubic(diff);const validLength=showLength-1;let inputRange;if(snapDirection==="left")inputRange=[-1,0,validLength];else if(snapDirection==="right")inputRange=[-validLength,0,1];else throw new Error("snapDirection must be set to either left or right");return{inputRange:inputRange,validLength:validLength,value:value};}';
    var4.code = var5;
    var _closure1_slot6 = var4;
    var4 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: getCommonVariables, environment: var0
            _fun74875: for (var _fun74875_ip = 0;;) switch (_fun74875_ip) {
                case 0:
                    var0 = arg0;
                    var9 = function(arg0) { // Original name: easeInOutCubic, environment: var1
                        _fun74876: for (var _fun74876_ip = 0;;) switch (_fun74876_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = 0.5;
                                if (!(!(var2 < var0))) {
                                    _fun74876_ip = 54;
                                    continue _fun74876
                                }
                            case 17:
                                var0 = -2;
                                var0 = var0 * var2;
                                var1 = 2;
                                var5 = var0 + var1;
                                var4 = 3;
                                var0 = exponentiationOperator(var5, var4);
                                var1 = var0 / var1;
                                var0 = 1;
                                var0 = var0 - var1;
                                _fun74876_ip = 69;
                                continue _fun74876;
                            case 54:
                                var1 = 4;
                                var1 = var1 * var2;
                                var1 = var1 * var2;
                                var0 = var1 * var2;
                            case 69:
                                return var0;
                        }
                    };
                    var2 = var0.showLength;
                    var1 = var0.value;
                    var6 = var0.snapDirection;
                    var0 = global;
                    var5 = var0.Math;
                    var4 = var5.floor;
                    var7 = var0.Math;
                    var3 = var7.abs;
                    var3 = var3.bind(var7)(var1);
                    var7 = var4.bind(var5)(var3);
                    var4 = var0.Math;
                    var3 = var4.abs;
                    var3 = var3.bind(var4)(var1);
                    var5 = 1;
                    var8 = var3 % var5;
                    var4 = 0;
                    if (!(!(var1 < var4))) {
                        _fun74875_ip = 108;
                        continue _fun74875
                    }
                case 95:
                    var1 = undefined;
                    var1 = var9.bind(var1)(var8);
                    var1 = var7 + var1;
                    _fun74875_ip = 122;
                    continue _fun74875;
                case 108:
                    var3 = undefined;
                    var3 = var9.bind(var3)(var8);
                    var3 = var7 + var3;
                    var1 = -var3;
                case 122:
                    var2 = var2 - var5;
                    var3 = 'left';
                    if (!(var3 !== var6)) {
                        _fun74875_ip = 197;
                        continue _fun74875
                    }
                case 134:
                    var3 = 'right';
                    if (!(var3 === var6)) {
                        _fun74875_ip = 163;
                        continue _fun74875
                    }
                case 142:
                    var3 = new Array(3);
                    var6 = -var2;
                    var3[0] = var6;
                    var3[1] = var4;
                    var3[2] = var5;
                    _fun74875_ip = 222;
                    continue _fun74875;
                case 163:
                    var6 = var0.Error;
                    var0 = var6.prototype;
                    var5 = Object.create(var0, {
                        constructor: {
                            value: var6
                        }
                    });
                    var10 = 'snapDirection must be set to either left or right';
                    var11 = var5;
                    var0 = new var11[var6](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var5;
                    throw var0;
                case 197:
                    var0 = new Array(3);
                    var5 = -1;
                    var0[0] = var5;
                    var0[1] = var4;
                    var0[2] = var2;
                    var3 = var0;
                case 222:
                    var0 = {};
                    var0.inputRange = var3;
                    var0.validLength = var2;
                    var0.value = var1;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 9545327827217.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot6;
        var0.__initData = var1;
        return var0;
    };
    var4 = var4.bind(var0)();
    var _closure1_slot7 = var4;
    var4 = {};
    var5 = 'function getCommonStyles_Pnpm_stackTs4(opts){const{interpolate}=this.__closure;const{snapDirection:snapDirection,validLength:validLength,value:value,opacityInterval:opacityInterval}=opts;let zIndex;let opacity;if(snapDirection==="left"){zIndex=Math.floor(interpolate(value,[-1.5,-1,-1+Number.MIN_VALUE,0,validLength],[Number.MIN_VALUE,validLength,validLength,validLength-1,-1])*10000)/100;opacity=interpolate(value,[-1,0,validLength-1,validLength],[0.25,1,1-(validLength-1)*opacityInterval,0.25]);}else if(snapDirection==="right"){zIndex=Math.floor(interpolate(value,[-validLength,0,1-Number.MIN_VALUE,1,1.5],[1,validLength-1,validLength,validLength,Number.MIN_VALUE])*10000)/100;opacity=interpolate(value,[-validLength,1-validLength,0,1],[0.25,1-(validLength-1)*opacityInterval,1,0.25]);}else{throw new Error("snapDirection must be set to either left or right");}return{zIndex:Math.round(zIndex),opacity:opacity};}';
    var4.code = var5;
    var _closure1_slot8 = var4;
    var4 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: getCommonStyles, environment: var0
            _fun74878: for (var _fun74878_ip = 0;;) switch (_fun74878_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.snapDirection;
                    var0 = var1.validLength;
                    var7 = var1.value;
                    var8 = var1.opacityInterval;
                    var1 = 'left';
                    if (!(var1 !== var2)) {
                        _fun74878_ip = 356;
                        continue _fun74878
                    }
                case 37:
                    var1 = 'right';
                    if (!(var1 === var2)) {
                        _fun74878_ip = 320;
                        continue _fun74878
                    }
                case 48:
                    var15 = global;
                    var11 = var15.Math;
                    var10 = var11.floor;
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var2 = 2;
                    var1 = var9[var2];
                    var3 = undefined;
                    var14 = var5.bind(var3)(var1);
                    var13 = var14.interpolate;
                    var1 = -var0;
                    var12 = new Array(5);
                    var12[0] = var1;
                    var1 = 0;
                    var12[1] = var1;
                    var4 = var15.Number;
                    var4 = var4.MIN_VALUE;
                    var6 = 1;
                    var4 = var6 - var4;
                    var12[2] = var4;
                    var12[3] = var6;
                    var4 = 1.5;
                    var12[4] = var4;
                    var16 = var0 - var6;
                    var4 = [1];
                    var4[1] = var16;
                    var4[2] = var0;
                    var4[3] = var0;
                    var15 = var15.Number;
                    var15 = var15.MIN_VALUE;
                    var4[4] = var15;
                    var12 = var13.bind(var14)(var7, var12, var4);
                    var4 = 10000;
                    var4 = var4 * var12;
                    var10 = var10.bind(var11)(var4);
                    var4 = 100;
                    var4 = var10 / var4;
                    var2 = var9[var2];
                    var5 = var5.bind(var3)(var2);
                    var3 = var5.interpolate;
                    var9 = -var0;
                    var2 = new Array(4);
                    var2[0] = var9;
                    var9 = var6 - var0;
                    var2[1] = var9;
                    var2[2] = var1;
                    var2[3] = var6;
                    var1 = var0 - var6;
                    var9 = var1 * var8;
                    var1 = [0.25];
                    var9 = var6 - var9;
                    var1[1] = var9;
                    var1[2] = var6;
                    var6 = 0.25;
                    var1[3] = var6;
                    var1 = var3.bind(var5)(var7, var2, var1);
                    _fun74878_ip = 617;
                    continue _fun74878;
                case 320:
                    var2 = global;
                    var5 = var2.Error;
                    var2 = var5.prototype;
                    var3 = Object.create(var2, {
                        constructor: {
                            value: var5
                        }
                    });
                    var21 = 'snapDirection must be set to either left or right';
                    var22 = var3;
                    var2 = new var22[var5](var21, var20);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
                case 356:
                    var2 = global;
                    var14 = var2.Math;
                    var13 = var14.floor;
                    var6 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var3 = 2;
                    var9 = var12[var3];
                    var5 = undefined;
                    var17 = var6.bind(var5)(var9);
                    var16 = var17.interpolate;
                    var15 = new Array(5);
                    var9 = -1.5;
                    var15[0] = var9;
                    var11 = -1;
                    var15[1] = var11;
                    var9 = var2.Number;
                    var9 = var9.MIN_VALUE;
                    var9 = var11 + var9;
                    var15[2] = var9;
                    var10 = 0;
                    var15[3] = var10;
                    var15[4] = var0;
                    var2 = var2.Number;
                    var9 = var2.MIN_VALUE;
                    var2 = new Array(5);
                    var2[0] = var9;
                    var2[1] = var0;
                    var2[2] = var0;
                    var9 = 1;
                    var18 = var0 - var9;
                    var2[3] = var18;
                    var2[4] = var11;
                    var15 = var16.bind(var17)(var7, var15, var2);
                    var2 = 10000;
                    var2 = var2 * var15;
                    var13 = var13.bind(var14)(var2);
                    var2 = 100;
                    var4 = var13 / var2;
                    var3 = var12[var3];
                    var6 = var6.bind(var5)(var3);
                    var5 = var6.interpolate;
                    var3 = new Array(4);
                    var3[0] = var11;
                    var3[1] = var10;
                    var10 = var0 - var9;
                    var3[2] = var10;
                    var3[3] = var0;
                    var0 = var0 - var9;
                    var8 = var0 * var8;
                    var0 = [0.25, 1];
                    var8 = var9 - var8;
                    var0[2] = var8;
                    var8 = 0.25;
                    var0[3] = var8;
                    var1 = var5.bind(var6)(var7, var3, var0);
                case 617:
                    var0 = {};
                    var2 = global;
                    var3 = var2.Math;
                    var2 = var3.round;
                    var2 = var2.bind(var3)(var4);
                    var0.zIndex = var2;
                    var0.opacity = var1;
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.interpolate;
        var2.interpolate = var3;
        var0.__closure = var2;
        var2 = 9067239849373.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot8;
        var0.__initData = var1;
        return var0;
    };
    var4 = var4.bind(var0)();
    var _closure1_slot9 = var4;
    var2.horizontalStackLayout = var3;
    var3 = function() { // Original name: useHorizontalStackLayout, environment: var1
        _fun74879: for (var _fun74879_ip = 0;;) switch (_fun74879_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var1 = 0;
                if (!(var3 > var1)) {
                    _fun74879_ip = 23;
                    continue _fun74879
                }
            case 15:
                var3 = arguments[var1];
                if (!(var4 === var3)) {
                    _fun74879_ip = 27;
                    continue _fun74879
                }
            case 23:
                var3 = {};
                _fun74879_ip = 31;
                continue _fun74879;
            case 27:
                var3 = arguments[var1];
            case 31:
                var _closure2_slot0 = var3;
                var5 = arguments.length;
                var1 = 1;
                if (!(var5 > var1)) {
                    _fun74879_ip = 53;
                    continue _fun74879
                }
            case 45:
                var5 = arguments[var1];
                if (!(var4 === var5)) {
                    _fun74879_ip = 57;
                    continue _fun74879
                }
            case 53:
                var6 = {};
                _fun74879_ip = 61;
                continue _fun74879;
            case 57:
                var6 = arguments[var1];
            case 61:
                var _closure2_slot1 = var6;
                var5 = _closure1_slot2;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var6;
                var0 = function() { // Environment: var0
                    _fun74880: for (var _fun74880_ip = 0;;) switch (_fun74880_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.Object;
                            var2 = var3.assign;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var6 = var4.snapDirection;
                            var4 = 'positive';
                            var5 = 'right';
                            if (!(var5 === var6)) {
                                _fun74880_ip = 44;
                                continue _fun74880
                            }
                        case 40:
                            var4 = 'negative';
                        case 44:
                            var1.type = var4;
                            var4 = _closure2_slot0;
                            var4 = var4.showLength;
                            var1.viewCount = var4;
                            var0 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var1 = var5.bind(var4)(var0, var1);
                var0 = {};
                var2 = _closure1_slot10;
                var2 = var2.bind(var4)(var3);
                var0.layout = var2;
                var0.config = var1;
                return var0;
        }
    };
    var2.useHorizontalStackLayout = var3;
    var1 = function() { // Original name: verticalStackLayout, environment: var1
        _fun74881: for (var _fun74881_ip = 0;;) switch (_fun74881_ip) {
            case 0:
                var5 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var1 = 0;
                if (!(var3 > var1)) {
                    _fun74881_ip = 23;
                    continue _fun74881
                }
            case 15:
                var3 = arguments[var1];
                if (!(var5 === var3)) {
                    _fun74881_ip = 27;
                    continue _fun74881
                }
            case 23:
                var3 = {};
                _fun74881_ip = 31;
                continue _fun74881;
            case 27:
                var3 = arguments[var1];
            case 31:
                var _closure2_slot0 = var3;
                var0 = function(arg0) { // Original name: pnpm_stackTs2, environment: var0
                    _fun74882: for (var _fun74882_ip = 0;;) switch (_fun74882_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var6 = var1.showLength;
                            var1 = _closure2_slot0;
                            var1 = var1.snapDirection;
                            var3 = 'left';
                            var16 = undefined;
                            var12 = var3;
                            if (!(var16 !== var1)) {
                                _fun74882_ip = 39;
                                continue _fun74882
                            }
                        case 36:
                            var12 = var1;
                        case 39:
                            var1 = _closure2_slot0;
                            var4 = var1.moveSize;
                            if (!(var16 === var4)) {
                                _fun74882_ip = 65;
                                continue _fun74882
                            }
                        case 53:
                            var1 = _closure1_slot3;
                            var4 = var1.width;
                        case 65:
                            var1 = _closure2_slot0;
                            var1 = var1.stackInterval;
                            var18 = 18;
                            if (!(var16 !== var1)) {
                                _fun74882_ip = 85;
                                continue _fun74882
                            }
                        case 82:
                            var18 = var1;
                        case 85:
                            var1 = _closure2_slot0;
                            var1 = var1.scaleInterval;
                            var8 = 0.04;
                            if (!(var16 !== var1)) {
                                _fun74882_ip = 112;
                                continue _fun74882
                            }
                        case 109:
                            var8 = var1;
                        case 112:
                            var1 = _closure2_slot0;
                            var1 = var1.opacityInterval;
                            var5 = 0.1;
                            if (!(var16 !== var1)) {
                                _fun74882_ip = 139;
                                continue _fun74882
                            }
                        case 136:
                            var5 = var1;
                        case 139:
                            var0 = _closure2_slot0;
                            var0 = var0.rotateZDeg;
                            var11 = 30;
                            if (!(var16 !== var0)) {
                                _fun74882_ip = 159;
                                continue _fun74882
                            }
                        case 156:
                            var11 = var0;
                        case 159:
                            var2 = _closure1_slot7;
                            var1 = {};
                            var1.showLength = var6;
                            var6 = arg0;
                            var1.value = var6;
                            var1.snapDirection = var12;
                            var1 = var2.bind(var16)(var1);
                            var10 = var1.validLength;
                            var14 = var1.value;
                            var13 = var1.inputRange;
                            var2 = _closure1_slot9;
                            var1 = {};
                            var1.validLength = var10;
                            var1.value = var14;
                            var1.opacityInterval = var5;
                            var1.snapDirection = var12;
                            var1 = var2.bind(var16)(var1);
                            var2 = var1.zIndex;
                            var1 = var1.opacity;
                            if (!(var3 !== var12)) {
                                _fun74882_ip = 604;
                                continue _fun74882
                            }
                        case 255:
                            var9 = 'right';
                            var3 = undefined;
                            var7 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            if (!(var9 === var12)) {
                                _fun74882_ip = 935;
                                continue _fun74882
                            }
                        case 274:
                            var22 = _closure1_slot0;
                            var23 = _closure1_slot1;
                            var9 = 2;
                            var12 = var23[var9];
                            var19 = var22.bind(var16)(var12);
                            var17 = var19.interpolate;
                            var15 = [0, 0];
                            var15[2] = var4;
                            var12 = var23[var9];
                            var12 = var22.bind(var16)(var12);
                            var12 = var12.Extrapolation;
                            var26 = var12.CLAMP;
                            var30 = var19;
                            var29 = var14;
                            var28 = var13;
                            var27 = var15;
                            var3 = var30[var17](var29, var28, var27, var26, var25);
                            var12 = var23[var9];
                            var20 = var22.bind(var16)(var12);
                            var19 = var20.interpolate;
                            var15 = var10 * var8;
                            var12 = 1;
                            var21 = var12 - var15;
                            var15 = new Array(3);
                            var15[0] = var21;
                            var15[1] = var12;
                            var15[2] = var12;
                            var12 = var23[var9];
                            var12 = var22.bind(var16)(var12);
                            var12 = var12.Extrapolation;
                            var26 = var12.CLAMP;
                            var30 = var20;
                            var29 = var14;
                            var28 = var13;
                            var27 = var15;
                            var7 = var30[var19](var29, var28, var27, var26, var25);
                            var12 = var23[var9];
                            var21 = var22.bind(var16)(var12);
                            var20 = var21.interpolate;
                            var19 = [0, 0];
                            var19[2] = var11;
                            var12 = var23[var9];
                            var12 = var22.bind(var16)(var12);
                            var12 = var12.Extrapolation;
                            var26 = var12.CLAMP;
                            var30 = var21;
                            var29 = var14;
                            var28 = var13;
                            var27 = var19;
                            var21 = var30[var20](var29, var28, var27, var26, var25);
                            var12 = global;
                            var12 = var12.HermesInternal;
                            var20 = var12.concat;
                            var19 = '';
                            var12 = 'deg';
                            var6 = var20.bind(var19)(var21, var12);
                            var19 = var23[var9];
                            var21 = var22.bind(var16)(var19);
                            var20 = var21.interpolate;
                            var24 = var10 * var18;
                            var19 = new Array(3);
                            var19[0] = var24;
                            var24 = 0;
                            var19[1] = var24;
                            var19[2] = var24;
                            var9 = var23[var9];
                            var9 = var22.bind(var16)(var9);
                            var9 = var9.Extrapolation;
                            var26 = var9.CLAMP;
                            var30 = var21;
                            var29 = var14;
                            var28 = var13;
                            var27 = var19;
                            var5 = var30[var20](var29, var28, var27, var26, var25);
                            _fun74882_ip = 935;
                            continue _fun74882;
                        case 604:
                            var15 = _closure1_slot0;
                            var17 = _closure1_slot1;
                            var0 = 2;
                            var9 = var17[var0];
                            var20 = var15.bind(var16)(var9);
                            var19 = var20.interpolate;
                            var4 = -var4;
                            var12 = new Array(3);
                            var12[0] = var4;
                            var4 = 0;
                            var12[1] = var4;
                            var12[2] = var4;
                            var9 = var17[var0];
                            var9 = var15.bind(var16)(var9);
                            var9 = var9.Extrapolation;
                            var26 = var9.CLAMP;
                            var30 = var20;
                            var29 = var14;
                            var28 = var13;
                            var27 = var12;
                            var3 = var30[var19](var29, var28, var27, var26, var25);
                            var12 = var17[var0];
                            var20 = var15.bind(var16)(var12);
                            var19 = var20.interpolate;
                            var12 = var10 * var8;
                            var8 = 1;
                            var8 = var8 - var12;
                            var12 = [1, 1];
                            var12[2] = var8;
                            var8 = var17[var0];
                            var8 = var15.bind(var16)(var8);
                            var8 = var8.Extrapolation;
                            var26 = var8.CLAMP;
                            var30 = var20;
                            var29 = var14;
                            var28 = var13;
                            var27 = var12;
                            var7 = var30[var19](var29, var28, var27, var26, var25);
                            var12 = var17[var0];
                            var19 = var15.bind(var16)(var12);
                            var12 = var19.interpolate;
                            var20 = -var11;
                            var11 = new Array(3);
                            var11[0] = var20;
                            var11[1] = var4;
                            var11[2] = var4;
                            var4 = var17[var0];
                            var4 = var15.bind(var16)(var4);
                            var4 = var4.Extrapolation;
                            var26 = var4.CLAMP;
                            var30 = var19;
                            var29 = var14;
                            var28 = var13;
                            var27 = var11;
                            var19 = var30[var12](var29, var28, var27, var26, var25);
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var12 = var4.concat;
                            var11 = '';
                            var4 = 'deg';
                            var6 = var12.bind(var11)(var19, var4);
                            var11 = var17[var0];
                            var12 = var15.bind(var16)(var11);
                            var11 = var12.interpolate;
                            var18 = var10 * var18;
                            var10 = [0, 0];
                            var10[2] = var18;
                            var0 = var17[var0];
                            var0 = var15.bind(var16)(var0);
                            var0 = var0.Extrapolation;
                            var26 = var0.CLAMP;
                            var30 = var12;
                            var29 = var14;
                            var28 = var13;
                            var27 = var10;
                            var5 = var30[var11](var29, var28, var27, var26, var25);
                        case 935:
                            var0 = {};
                            var4 = {};
                            var4.translateX = var3;
                            var3 = new Array(4);
                            var3[0] = var4;
                            var4 = {};
                            var4.scale = var7;
                            var3[1] = var4;
                            var4 = {};
                            var4.rotateZ = var6;
                            var3[2] = var4;
                            var4 = {};
                            var4.translateY = var5;
                            var3[3] = var4;
                            var0.transform = var3;
                            var0.zIndex = var2;
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var2 = {};
                var4 = _closure1_slot3;
                var2.screen = var4;
                var2.modeConfig = var3;
                var3 = _closure1_slot7;
                var2.getCommonVariables = var3;
                var3 = _closure1_slot9;
                var2.getCommonStyles = var3;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var7 = var6[var3];
                var7 = var4.bind(var5)(var7);
                var7 = var7.interpolate;
                var2.interpolate = var7;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.Extrapolation;
                var2.Extrapolation = var3;
                var0.__closure = var2;
                var2 = 9752649608963.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot5;
                var0.__initData = var1;
                return var0;
        }
    };
    var2.verticalStackLayout = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3680]);