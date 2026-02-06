// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var5;
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = ['width', 'height', 'originX', 'originY', 'transform', 'borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'];
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'function pnpm_SharedTransitionTs1(viewTag,values,progress){const{progressAnimationCallback}=this.__closure;const newStyles=progressAnimationCallback(values,progress);global._notifyAboutProgress(viewTag,newStyles,true);}';
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function pnpm_SharedTransitionTs2(values){const{animationFactory,SUPPORTED_PROPS,withTiming,reduceMotion,transitionDuration}=this.__closure;let animations={};const initialValues={};if(animationFactory){animations=animationFactory(values);for(const key in animations){if(!SUPPORTED_PROPS.includes(key)){throw new ReanimatedError("The prop \'"+key+"\' is not supported yet.");}}}else{for(const propName of SUPPORTED_PROPS){if(propName===\'transform\'){const matrix=values.targetTransformMatrix;animations.transformMatrix=withTiming(matrix,{reduceMotion:reduceMotion,duration:transitionDuration});}else{const capitalizedPropName=""+propName.charAt(0).toUpperCase()+propName.slice(1);const keyToTargetValue="target"+capitalizedPropName;animations[propName]=withTiming(values[keyToTargetValue],{reduceMotion:reduceMotion,duration:transitionDuration});}}}for(const propName in animations){if(propName===\'transform\'){initialValues.transformMatrix=values.currentTransformMatrix;}else{const capitalizedPropName=propName.charAt(0).toUpperCase()+propName.slice(1);const keyToCurrentValue="current"+capitalizedPropName;initialValues[propName]=values[keyToCurrentValue];}}return{initialValues:initialValues,animations:animations};}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function pnpm_SharedTransitionTs3(viewTag,values,progress){const{SUPPORTED_PROPS}=this.__closure;const newStyles={};for(const propertyName of SUPPORTED_PROPS){if(propertyName===\'transform\'){const currentMatrix=values.currentTransformMatrix;const targetMatrix=values.targetTransformMatrix;const newMatrix=new Array(9);for(let i=0;i<9;i++){newMatrix[i]=progress*(targetMatrix[i]-currentMatrix[i])+currentMatrix[i];}newStyles.transformMatrix=newMatrix;}else{const PropertyName=propertyName.charAt(0).toUpperCase()+propertyName.slice(1);const currentPropertyName="current"+PropertyName;const targetPropertyName="target"+PropertyName;const currentValue=values[currentPropertyName];const targetValue=values[targetPropertyName];newStyles[propertyName]=progress*(targetValue-currentValue)+currentValue;}}global._notifyAboutProgress(viewTag,newStyles,true);}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var1 = function() { // Environment: var1
        var4 = function() {
            var1 = this;
            var4 = _closure1_slot3;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var1, var3);
            var3 = null;
            var1._customAnimationFactory = var3;
            var1._animation = var3;
            var3 = 500;
            var1._transitionDuration = var3;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var2 = var3.bind(var0)(var2);
            var2 = var2.ReduceMotion;
            var2 = var2.System;
            var1._reduceMotion = var2;
            var1._customProgressAnimation = var0;
            var1._progressAnimation = var0;
            var1._defaultTransitionType = var0;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var0 = {};
        var1 = 'custom';
        var0.key = var1;
        var2 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0._customAnimationFactory = var1;
            return var0;
        };
        var0.value = var2;
        var2 = new Array(12);
        var2[0] = var0;
        var0 = {};
        var8 = 'progressAnimation';
        var0.key = var8;
        var6 = function arg0() {
            var3 = arg0;
            var0 = this;
            var _closure3_slot0 = var3;
            var1 = function arg0, arg1, arg2() {
                var3 = _closure3_slot0;
                var0 = undefined;
                var2 = arg1;
                var1 = arg2;
                var5 = var3.bind(var0)(var2, var1);
                var4 = _closure1_slot0;
                var3 = var4._notifyAboutProgress;
                var2 = arg0;
                var1 = true;
                var1 = var3.bind(var4)(var2, var5, var1);
                return var0;
            };
            var2 = {};
            var2.progressAnimationCallback = var3;
            var1.__closure = var2;
            var2 = 10649853891033.0;
            var1.__workletHash = var2;
            var2 = _closure1_slot6;
            var1.__initData = var2;
            var0._customProgressAnimation = var1;
            return var0;
        };
        var0.value = var6;
        var2[1] = var0;
        var0 = {};
        var9 = 'duration';
        var0.key = var9;
        var6 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0._transitionDuration = var1;
            return var0;
        };
        var0.value = var6;
        var2[2] = var0;
        var0 = {};
        var6 = 'reduceMotion';
        var0.key = var6;
        var7 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0._reduceMotion = var1;
            return var0;
        };
        var0.value = var7;
        var2[3] = var0;
        var0 = {};
        var7 = 'defaultTransitionType';
        var0.key = var7;
        var10 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0._defaultTransitionType = var1;
            return var0;
        };
        var0.value = var10;
        var2[4] = var0;
        var0 = {};
        var10 = 'registerTransition';
        var0.key = var10;
        var10 = function arg0, arg1() {
            _fun34841: for (var _fun34841_ip = 0;;) switch (_fun34841_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var0 = undefined;
                    var1 = undefined;
                    var3 = arguments.length;
                    var9 = 2;
                    var8 = var3 > var9;
                    if (!var8) {
                        _fun34841_ip = 31;
                        continue _fun34841
                    }
                case 23:
                    var3 = arguments[var9];
                    var8 = var0 !== var3;
                case 31:
                    if (!var8) {
                        _fun34841_ip = 38;
                        continue _fun34841
                    }
                case 34:
                    var8 = arguments[var9];
                case 38:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 3;
                    var3 = var6[var3];
                    var6 = var5.bind(var0)(var3);
                    var5 = var6.getReduceMotionFromConfig;
                    var3 = var2.getReduceMotion;
                    var3 = var3.bind(var2)();
                    var3 = var5.bind(var6)(var3);
                    if (var3) {
                        _fun34841_ip = 383;
                        continue _fun34841
                    }
                case 88:
                    var3 = var2.getTransitionAnimation;
                    var7 = var3.bind(var2)();
                    var3 = var2.getProgressAnimation;
                    var3 = var3.bind(var2)();
                    var5 = var2._defaultTransitionType;
                    if (var5) {
                        _fun34841_ip = 211;
                        continue _fun34841
                    }
                case 121:
                    var5 = var2._customAnimationFactory;
                    if (!var5) {
                        _fun34841_ip = 176;
                        continue _fun34841
                    }
                case 130:
                    var5 = var2._customProgressAnimation;
                    if (var5) {
                        _fun34841_ip = 176;
                        continue _fun34841
                    }
                case 139:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.SharedTransitionType;
                    var5 = var5.ANIMATION;
                    var2._defaultTransitionType = var5;
                    _fun34841_ip = 211;
                    continue _fun34841;
                case 176:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.SharedTransitionType;
                    var5 = var5.PROGRESS_ANIMATION;
                    var2._defaultTransitionType = var5;
                case 211:
                    var5 = var2._defaultTransitionType;
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var6.bind(var0)(var2);
                    var2 = var2.SharedTransitionType;
                    var2 = var2.ANIMATION;
                    if (!(var5 !== var2)) {
                        _fun34841_ip = 281;
                        continue _fun34841
                    }
                case 250:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var5.bind(var0)(var2);
                    var2 = var2.LayoutAnimationType;
                    var6 = var2.SHARED_ELEMENT_TRANSITION_PROGRESS;
                    _fun34841_ip = 310;
                    continue _fun34841;
                case 281:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var5.bind(var0)(var2);
                    var2 = var2.LayoutAnimationType;
                    var6 = var2.SHARED_ELEMENT_TRANSITION;
                case 310:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 4;
                    var1 = var5[var1];
                    var5 = var2.bind(var0)(var1);
                    var2 = var5.updateLayoutAnimations;
                    var11 = arg1;
                    var15 = var5;
                    var14 = var4;
                    var13 = var6;
                    var12 = var7;
                    var10 = var8;
                    var1 = var15[var2](var14, var13, var12, var11, var10, var9);
                    var1 = _closure2_slot0;
                    var2 = var1._progressTransitionManager;
                    var1 = var2.addProgressAnimation;
                    var1 = var1.bind(var2)(var4, var3);
                case 383:
                    return var0;
            }
        };
        var0.value = var10;
        var2[5] = var0;
        var0 = {};
        var10 = 'unregisterTransition';
        var0.key = var10;
        var10 = function arg0() {
            _fun34842: for (var _fun34842_ip = 0;;) switch (_fun34842_ip) {
                case 0:
                    var4 = arg0;
                    var0 = undefined;
                    var2 = undefined;
                    var3 = arguments.length;
                    var1 = 1;
                    var3 = var3 > var1;
                    if (!var3) {
                        _fun34842_ip = 28;
                        continue _fun34842
                    }
                case 20:
                    var5 = arguments[var1];
                    var3 = var0 !== var5;
                case 28:
                    if (!var3) {
                        _fun34842_ip = 35;
                        continue _fun34842
                    }
                case 31:
                    var3 = arguments[var1];
                case 35:
                    var1 = this;
                    var5 = var1._defaultTransitionType;
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 2;
                    var2 = var2[var7];
                    var2 = var6.bind(var0)(var2);
                    var2 = var2.SharedTransitionType;
                    var2 = var2.ANIMATION;
                    if (!(var5 !== var2)) {
                        _fun34842_ip = 114;
                        continue _fun34842
                    }
                case 83:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var5.bind(var0)(var2);
                    var2 = var2.LayoutAnimationType;
                    var5 = var2.SHARED_ELEMENT_TRANSITION_PROGRESS;
                    _fun34842_ip = 143;
                    continue _fun34842;
                case 114:
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var6.bind(var0)(var2);
                    var2 = var2.LayoutAnimationType;
                    var5 = var2.SHARED_ELEMENT_TRANSITION;
                case 143:
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 4;
                    var1 = var6[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.updateLayoutAnimations;
                    var13 = var2;
                    var12 = var4;
                    var11 = var5;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = var3;
                    var1 = var13[var1](var12, var11, var10, var9, var8, var7);
                    var1 = _closure2_slot0;
                    var2 = var1._progressTransitionManager;
                    var1 = var2.removeProgressAnimation;
                    var1 = var1.bind(var2)(var4, var3);
                    return var0;
            }
        };
        var0.value = var10;
        var2[6] = var0;
        var0 = {};
        var10 = 'getReduceMotion';
        var0.key = var10;
        var10 = function() {
            var0 = this;
            var0 = var0._reduceMotion;
            return var0;
        };
        var0.value = var10;
        var2[7] = var0;
        var0 = {};
        var10 = 'getTransitionAnimation';
        var0.key = var10;
        var10 = function() {
            _fun34844: for (var _fun34844_ip = 0;;) switch (_fun34844_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._animation;
                    if (var1) {
                        _fun34844_ip = 24;
                        continue _fun34844
                    }
                case 12:
                    var1 = var0.buildAnimation;
                    var1 = var1.bind(var0)();
                case 24:
                    var0 = var0._animation;
                    return var0;
            }
        };
        var0.value = var10;
        var2[8] = var0;
        var0 = {};
        var10 = 'getProgressAnimation';
        var0.key = var10;
        var10 = function() {
            _fun34845: for (var _fun34845_ip = 0;;) switch (_fun34845_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._progressAnimation;
                    if (var1) {
                        _fun34845_ip = 24;
                        continue _fun34845
                    }
                case 12:
                    var1 = var0.buildProgressAnimation;
                    var1 = var1.bind(var0)();
                case 24:
                    var0 = var0._progressAnimation;
                    return var0;
            }
        };
        var0.value = var10;
        var2[9] = var0;
        var0 = {};
        var10 = 'buildAnimation';
        var0.key = var10;
        var10 = function() {
            var2 = this;
            var0 = var2._customAnimationFactory;
            var _closure3_slot0 = var0;
            var5 = var2._transitionDuration;
            var _closure3_slot1 = var5;
            var6 = var2._reduceMotion;
            var _closure3_slot2 = var6;
            var1 = function arg0() {
                _fun34847: for (var _fun34847_ip = 0;;) switch (_fun34847_ip) {
                    case 0:
                        var12 = arg0;
                        var4 = undefined;
                        var14 = undefined;
                        var1 = {};
                        var2 = {};
                        var3 = _closure3_slot0;
                        if (var3) {
                            _fun34847_ip = 267;
                            continue _fun34847
                        }
                    case 24:
                        var3 = _closure1_slot5;
                        var11 = var3;
                        var5 = var11[Symbol.iterator];
                        var11 = var5().next;
                        var10 = 6;
                        var9 = 0;
                        var8 = 1;
                        var7 = global;
                        var6 = 'target';
                        var3 = 'transform';
                    case 55:
                        var15 = var11().value;
                        var16 = var5;
                        if (!(var16 !== var4)) {
                            _fun34847_ip = 404;
                            continue _fun34847
                        }
                    case 69: // try_start_0
                        var14 = var15;
                        if (!(var3 !== var15)) {
                            _fun34847_ip = 190;
                            continue _fun34847
                        }
                    case 76:
                        var17 = var14;
                        var15 = var17.charAt;
                        var16 = var15.bind(var17)(var9);
                        var15 = var16.toUpperCase;
                        var18 = var15.bind(var16)();
                        var15 = var17.slice;
                        var16 = var15.bind(var17)(var8);
                        var15 = var7.HermesInternal;
                        var15 = var15.concat;
                        var18 = var15.bind(var6)(var18, var16);
                        var16 = var1;
                        var19 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var15 = var15[var10];
                        var20 = var19.bind(var4)(var15);
                        var19 = var20.withTiming;
                        var15 = var12;
                        var18 = var15[var18];
                        var15 = {};
                        var21 = _closure3_slot2;
                        var15.reduceMotion = var21;
                        var21 = _closure3_slot1;
                        var15.duration = var21;
                        var15 = var19.bind(var20)(var18, var15);
                        var16[var17] = var15;
                        _fun34847_ip = 255;
                        continue _fun34847;
                    case 190:
                        var15 = var12;
                        var19 = var15.targetTransformMatrix;
                        var16 = var1;
                        var17 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var15 = var15[var10];
                        var18 = var17.bind(var4)(var15);
                        var17 = var18.withTiming;
                        var15 = {};
                        var20 = _closure3_slot2;
                        var15.reduceMotion = var20;
                        var20 = _closure3_slot1;
                        var15.duration = var20;
                        var15 = var17.bind(var18)(var19, var15);
                        var16.transformMatrix = var15;
                    case 255: // try_end0
                        _fun34847_ip = 55;
                        continue _fun34847;
                    case 260: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var5.return();
                        throw var3;
                    case 267:
                        var3 = _closure3_slot0;
                        var0 = var12;
                        var0 = var3.bind(var4)(var0);
                        var1 = var0;
                        var9 = var0;
                        for (var5 in var9)
                            case 296: {
                                case 305: var6 = var5;
                                var11 = _closure1_slot5;
                                var3 = var11.includes;
                                var3 = var3.bind(var11)(var6);
                                if (var3) {
                                    _fun34847_ip = 296;
                                    continue _fun34847
                                }
                                case 325: var3 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var0 = 5;
                                var0 = var5[var0];
                                var0 = var3.bind(var4)(var0);
                                var4 = var0.ReanimatedError;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var5 = var0.concat;
                                var3 = "The prop '";
                                var0 = "' is not supported yet.";
                                var23 = var5.bind(var3)(var6, var0);
                                var3 = var4.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var24 = var3;
                                var0 = new var24[var4](var23, var22);
                                var0 = var0 instanceof Object ? var0 : var3;
                                throw var0;
                            }
                    case 404:
                        var10 = var1;
                        var6 = 0;
                        var5 = 1;
                        var4 = global;
                        var3 = 'current';
                        var0 = 'transform';
                        for (var7 in var10)
                            case 430: {
                                case 439: var14 = var7;
                                if (!(var0 !== var14)) {
                                    _fun34847_ip = 510;
                                    continue _fun34847
                                }
                                case 446: var13 = var14.charAt;
                                var15 = var13.bind(var14)(var6);
                                var13 = var15.toUpperCase;
                                var15 = var13.bind(var15)();
                                var13 = var14.slice;
                                var13 = var13.bind(var14)(var5);
                                var15 = var15 + var13;
                                var13 = var4.HermesInternal;
                                var13 = var13.concat;
                                var15 = var13.bind(var3)(var15);
                                var13 = var12;
                                var13 = var13[var15];
                                var2[var14] = var13;
                                _fun34847_ip = 430;
                                continue _fun34847;
                                case 510: var13 = var12;
                                var13 = var13.currentTransformMatrix;
                                var2.transformMatrix = var13;
                                _fun34847_ip = 430;
                                continue _fun34847;
                            }
                    case 527:
                        var0 = {};
                        var0.initialValues = var2;
                        var0.animations = var1;
                        return var0;
                }
            };
            var4 = {};
            var4.animationFactory = var0;
            var0 = _closure1_slot5;
            var4.SUPPORTED_PROPS = var0;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var0 = 6;
            var7 = var7[var0];
            var0 = undefined;
            var7 = var8.bind(var0)(var7);
            var7 = var7.withTiming;
            var4.withTiming = var7;
            var4.reduceMotion = var6;
            var4.transitionDuration = var5;
            var1.__closure = var4;
            var4 = 5349002490567.0;
            var1.__workletHash = var4;
            var3 = _closure1_slot7;
            var1.__initData = var3;
            var2._animation = var1;
            return var0;
        };
        var0.value = var10;
        var2[10] = var0;
        var0 = {};
        var10 = 'buildProgressAnimation';
        var0.key = var10;
        var10 = function() {
            _fun34848: for (var _fun34848_ip = 0;;) switch (_fun34848_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._customProgressAnimation;
                    if (var0) {
                        _fun34848_ip = 73;
                        continue _fun34848
                    }
                case 12:
                    var0 = function arg0, arg1, arg2() {
                        _fun34849: for (var _fun34849_ip = 0;;) switch (_fun34849_ip) {
                            case 0:
                                var12 = arg1;
                                var13 = arg2;
                                var0 = undefined;
                                var14 = undefined;
                                var15 = undefined;
                                var16 = undefined;
                                var17 = undefined;
                                var18 = undefined;
                                var1 = {};
                                var3 = _closure1_slot5;
                                var11 = var3;
                                var4 = var11[Symbol.iterator];
                                var11 = var4().next;
                                var10 = global;
                                var9 = 9;
                                var8 = 0;
                                var7 = 1;
                                var6 = 'target';
                                var5 = 'current';
                                var3 = 'transform';
                            case 55:
                                var19 = var11().value;
                                var20 = var4;
                                if (!(var20 !== var0)) {
                                    _fun34849_ip = 304;
                                    continue _fun34849
                                }
                            case 69: // try_start_0
                                var14 = var19;
                                if (!(var3 !== var19)) {
                                    _fun34849_ip = 181;
                                    continue _fun34849
                                }
                            case 76:
                                var21 = var14;
                                var19 = var21.charAt;
                                var20 = var19.bind(var21)(var8);
                                var19 = var20.toUpperCase;
                                var20 = var19.bind(var20)();
                                var19 = var21.slice;
                                var19 = var19.bind(var21)(var7);
                                var23 = var20 + var19;
                                var19 = var10.HermesInternal;
                                var19 = var19.concat;
                                var20 = var19.bind(var6)(var23);
                                var19 = var12;
                                var22 = var10.HermesInternal;
                                var22 = var22.concat;
                                var22 = var22.bind(var5)(var23);
                                var22 = var19[var22];
                                var19 = var19[var20];
                                var20 = var1;
                                var23 = var13;
                                var19 = var19 - var22;
                                var19 = var23 * var19;
                                var19 = var19 + var22;
                                var20[var21] = var19;
                                _fun34849_ip = 292;
                                continue _fun34849;
                            case 181:
                                var19 = var12;
                                var15 = var19.currentTransformMatrix;
                                var16 = var19.targetTransformMatrix;
                                var19 = var10.Array;
                                var20 = var19.prototype;
                                var20 = Object.create(var20, {
                                    constructor: {
                                        value: var19
                                    }
                                });
                                var28 = var20;
                                var27 = var9;
                                var19 = new var28[var19](var27, var26);
                                var17 = var19 instanceof Object ? var19 : var20;
                                var18 = 0;
                            case 227:
                                var21 = var17;
                                var19 = var18;
                                var23 = var13;
                                var20 = var16;
                                var24 = var20[var19];
                                var20 = var15;
                                var22 = var20[var19];
                                var22 = var24 - var22;
                                var22 = var23 * var22;
                                var20 = var20[var19];
                                var20 = var22 + var20;
                                var21[var19] = var20;
                                var19 = var19 + 1;
                                var18 = var19;
                                if (var19 < var9) {
                                    _fun34849_ip = 227;
                                    continue _fun34849
                                }
                            case 280:
                                var20 = var1;
                                var19 = var17;
                                var20.transformMatrix = var19;
                            case 292: // try_end0
                                _fun34849_ip = 55;
                                continue _fun34849;
                            case 297: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var4.return();
                                throw var3;
                            case 304:
                                var5 = _closure1_slot0;
                                var4 = var5._notifyAboutProgress;
                                var3 = var1;
                                var2 = arg0;
                                var1 = true;
                                var1 = var4.bind(var5)(var2, var3, var1);
                                return var0;
                        }
                    };
                    var3 = {};
                    var4 = _closure1_slot5;
                    var3.SUPPORTED_PROPS = var4;
                    var0.__closure = var3;
                    var3 = 11460342543363.0;
                    var0.__workletHash = var3;
                    var2 = _closure1_slot8;
                    var0.__initData = var2;
                    var1._progressAnimation = var0;
                    _fun34848_ip = 85;
                    continue _fun34848;
                case 73:
                    var0 = var1._customProgressAnimation;
                    var1._progressAnimation = var0;
                case 85:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var10;
        var2[11] = var0;
        var0 = {};
        var0.key = var1;
        var1 = function arg0() {
            var0 = _closure2_slot0;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var4 = var1;
            var0 = new var4[var0](var3);
            var2 = var0 instanceof Object ? var0 : var1;
            var1 = var2.custom;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var0.key = var9;
        var9 = function arg0() {
            var0 = _closure2_slot0;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var4 = var1;
            var0 = new var4[var0](var3);
            var2 = var0 instanceof Object ? var0 : var1;
            var1 = var2.duration;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var9;
        var1[1] = var0;
        var0 = {};
        var0.key = var8;
        var8 = function arg0() {
            var0 = _closure2_slot0;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var4 = var1;
            var0 = new var4[var0](var3);
            var2 = var0 instanceof Object ? var0 : var1;
            var1 = var2.progressAnimation;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var8;
        var1[2] = var0;
        var0 = {};
        var0.key = var7;
        var7 = function arg0() {
            var0 = _closure2_slot0;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var4 = var1;
            var0 = new var4[var0](var3);
            var2 = var0 instanceof Object ? var0 : var1;
            var1 = var2.defaultTransitionType;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var7;
        var1[3] = var0;
        var0 = {};
        var0.key = var6;
        var5 = function arg0() {
            var0 = _closure2_slot0;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var4 = var1;
            var0 = new var4[var0](var3);
            var2 = var0 instanceof Object ? var0 : var1;
            var1 = var2.reduceMotion;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ProgressTransitionManager;
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var12 = var4;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var1._progressTransitionManager = var3;
    var2.SharedTransition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3748, 3763, 3837, 3734, 3795, 3859]);