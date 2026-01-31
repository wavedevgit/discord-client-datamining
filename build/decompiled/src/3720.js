// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun33345: for (var _fun33345_ip = 0;;) switch (_fun33345_ip) {
        case 0:
            var3 = require;
            var2 = exports;
            var4 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var4;
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var1);
            var0 = 0;
            var5 = var4[var0];
            var1 = metroImportDefault;
            var0 = undefined;
            var1 = var1.bind(var0)(var5);
            var _closure1_slot2 = var1;
            var1 = false;
            var _closure1_slot3 = var1;
            var1 = 1;
            var1 = var4[var1];
            var5 = var3.bind(var0)(var1);
            var1 = var5.shouldBeUseWeb;
            var10 = var1.bind(var5)();
            var _closure1_slot4 = var10;
            var1 = {
                'originX': true,
                'originY': true,
                'width': true,
                'height': true,
                'borderRadius': true,
                'globalOriginX': true,
                'globalOriginY': true,
                'opacity': true,
                'transform': true,
                'backgroundColor': true
            };
            var _closure1_slot5 = var1;
            var1 = {};
            var5 = 'function isValidLayoutAnimationProp_Pnpm_utilTs1(prop){const{LAYOUT_ANIMATION_SUPPORTED_PROPS}=this.__closure;return prop in LAYOUT_ANIMATION_SUPPORTED_PROPS;}';
            var1.code = var5;
            var _closure1_slot6 = var1;
            var1 = function() { // Environment: var7
                var0 = function(arg0) { // Original name: isValidLayoutAnimationProp, environment: var0
                    var1 = _closure1_slot5;
                    var0 = arg0;
                    var0 = var0 in var1;
                    return var0;
                };
                var2 = {};
                var3 = _closure1_slot5;
                var2.LAYOUT_ANIMATION_SUPPORTED_PROPS = var3;
                var0.__closure = var2;
                var2 = 13235833688548.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot6;
                var0.__initData = var1;
                return var0;
            };
            var9 = var1.bind(var0)();
            var1 = {};
            var5 = "function assertEasingIsWorklet_Pnpm_utilTs2(easing){const{SHOULD_BE_USE_WEB,isWorkletFunction}=this.__closure;if(_WORKLET){return;}if(SHOULD_BE_USE_WEB){return;}if(easing!==null&&easing!==void 0&&easing.factory){return;}if(!isWorkletFunction(easing)){throw new ReanimatedError('The easing function is not a worklet. Please make sure you import `Easing` from react-native-reanimated.');}}";
            var1.code = var5;
            var _closure1_slot7 = var1;
            var1 = function() { // Environment: var7
                var0 = function(arg0) { // Original name: assertEasingIsWorklet, environment: var0
                    _fun33349: for (var _fun33349_ip = 0;;) switch (_fun33349_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = global;
                            var0 = var0._WORKLET;
                            if (var0) {
                                _fun33349_ip = 129;
                                continue _fun33349
                            }
                        case 14:
                            var1 = _closure1_slot4;
                            if (var1) {
                                _fun33349_ip = 129;
                                continue _fun33349
                            }
                        case 24:
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun33349_ip = 39;
                                continue _fun33349
                            }
                        case 30:
                            var1 = var4.factory;
                            if (var1) {
                                _fun33349_ip = 129;
                                continue _fun33349
                            }
                        case 39:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 2;
                            var1 = var2[var1];
                            var2 = undefined;
                            var3 = var3.bind(var2)(var1);
                            var1 = var3.isWorkletFunction;
                            var1 = var1.bind(var3)(var4);
                            if (var1) {
                                _fun33349_ip = 129;
                                continue _fun33349
                            }
                        case 75:
                            var1 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 3;
                            var0 = var3[var0];
                            var0 = var1.bind(var2)(var0);
                            var2 = var0.ReanimatedError;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var5 = 'The easing function is not a worklet. Please make sure you import `Easing` from react-native-reanimated.';
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        case 129:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = {};
                var3 = _closure1_slot4;
                var2.SHOULD_BE_USE_WEB = var3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.isWorkletFunction;
                var2.isWorkletFunction = var3;
                var0.__closure = var2;
                var2 = 8431488219943.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot7;
                var0.__initData = var1;
                return var0;
            };
            var8 = var1.bind(var0)();
            var1 = {};
            var5 = 'function recognizePrefixSuffix_Pnpm_utilTs3(value){if(typeof value===\'string\'){var _match$;const match=value.match(/([A-Za-z]*)(-?\\d*\\.?\\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);if(!match){throw new ReanimatedError("Couldn\'t parse animation value.");}const prefix=match[1];const suffix=match[4];const number=match[2]+((_match$=match[3])!==null&&_match$!==void 0?_match$:\'\');return{prefix:prefix,suffix:suffix,strippedValue:parseFloat(number)};}else{return{strippedValue:value};}}';
            var1.code = var5;
            var _closure1_slot8 = var1;
            var1 = function() { // Environment: var7
                var0 = function(arg0) { // Original name: recognizePrefixSuffix, environment: var0
                    _fun33351: for (var _fun33351_ip = 0;;) switch (_fun33351_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = 'string';
                            var0 = typeof var2;
                            if (!(var1 !== var0)) {
                                _fun33351_ip = 23;
                                continue _fun33351
                            }
                        case 14:
                            var0 = {};
                            var0.strippedValue = var2;
                            return var0;
                        case 23:
                            var1 = var2.match;
                            var0 = /([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/;
                            var4 = var1.bind(var2)(var0);
                            if (var4) {
                                _fun33351_ip = 110;
                                continue _fun33351
                            }
                        case 51:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 3;
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
                            var6 = "Couldn't parse animation value.";
                            var7 = var1;
                            var0 = new var7[var2](var6, var5);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        case 110:
                            var0 = 1;
                            var2 = var4[var0];
                            var0 = 4;
                            var1 = var4[var0];
                            var0 = 2;
                            var3 = var4[var0];
                            var0 = 3;
                            var4 = var4[var0];
                            var0 = null;
                            var5 = var0 != var4;
                            var0 = '';
                            if (!var5) {
                                _fun33351_ip = 154;
                                continue _fun33351
                            }
                        case 151:
                            var0 = var4;
                        case 154:
                            var3 = var3 + var0;
                            var0 = {};
                            var0.prefix = var2;
                            var0.suffix = var1;
                            var1 = global;
                            var2 = var1.parseFloat;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            var0.strippedValue = var1;
                            return var0;
                    }
                };
                var1 = {};
                var0.__closure = var1;
                var1 = 11076682371077.0;
                var0.__workletHash = var1;
                var1 = _closure1_slot8;
                var0.__initData = var1;
                return var0;
            };
            var6 = var1.bind(var0)();
            var _closure1_slot9 = var6;
            var1 = 4;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var1 = var1.ReducedMotionManager;
            var1 = var1.uiValue;
            var _closure1_slot10 = var1;
            var1 = {};
            var3 = 'function getReduceMotionFromConfig_Pnpm_utilTs4(config){const{ReduceMotion,isReduceMotionOnUI}=this.__closure;return!config||config===ReduceMotion.System?isReduceMotionOnUI.value:config===ReduceMotion.Always;}';
            var1.code = var3;
            var _closure1_slot11 = var1;
            var1 = function() { // Environment: var7
                var0 = function(arg0) { // Original name: getReduceMotionFromConfig, environment: var0
                    _fun33353: for (var _fun33353_ip = 0;;) switch (_fun33353_ip) {
                        case 0:
                            var2 = arg0;
                            if (!var2) {
                                _fun33353_ip = 47;
                                continue _fun33353
                            }
                        case 6:
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var5 = 2;
                            var0 = var0[var5];
                            var4 = undefined;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.ReduceMotion;
                            var0 = var0.System;
                            if (!(var2 === var0)) {
                                _fun33353_ip = 61;
                                continue _fun33353
                            }
                        case 47:
                            var0 = _closure1_slot10;
                            var0 = var0.value;
                            _fun33353_ip = 94;
                            continue _fun33353;
                        case 61:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var5];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.ReduceMotion;
                            var1 = var1.Always;
                            var0 = var2 === var1;
                        case 94:
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
                var3 = var3.ReduceMotion;
                var2.ReduceMotion = var3;
                var3 = _closure1_slot10;
                var2.isReduceMotionOnUI = var3;
                var0.__closure = var2;
                var2 = 7977910521960.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot11;
                var0.__initData = var1;
                return var0;
            };
            var5 = var1.bind(var0)();
            var _closure1_slot12 = var5;
            var1 = {};
            var3 = 'function getReduceMotionForAnimation_Pnpm_utilTs5(config){const{getReduceMotionFromConfig}=this.__closure;if(!config){return undefined;}return getReduceMotionFromConfig(config);}';
            var1.code = var3;
            var _closure1_slot13 = var1;
            var1 = function() { // Environment: var7
                var0 = function(arg0) { // Original name: getReduceMotionForAnimation, environment: var0
                    _fun33355: for (var _fun33355_ip = 0;;) switch (_fun33355_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = undefined;
                            if (var2) {
                                _fun33355_ip = 10;
                                continue _fun33355
                            }
                        case 8:
                            return var1;
                        case 10:
                            var0 = _closure1_slot12;
                            var0 = var0.bind(var1)(var2);
                            return var0;
                    }
                };
                var2 = {};
                var3 = _closure1_slot12;
                var2.getReduceMotionFromConfig = var3;
                var0.__closure = var2;
                var2 = 10866808344662.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot13;
                var0.__initData = var1;
                return var0;
            };
            var4 = var1.bind(var0)();
            var1 = {};
            var3 = 'function applyProgressToMatrix_Pnpm_utilTs6(progress,a,b){const{addMatrices,scaleMatrix,subtractMatrices}=this.__closure;return addMatrices(a,scaleMatrix(subtractMatrices(b,a),progress));}';
            var1.code = var3;
            var _closure1_slot14 = var1;
            var1 = function() { // Environment: var7
                var0 = function(arg0, arg1, arg2) { // Original name: applyProgressToMatrix, environment: var0
                    var3 = arg1;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var0 = 5;
                    var1 = var8[var0];
                    var4 = undefined;
                    var2 = var7.bind(var4)(var1);
                    var1 = var2.addMatrices;
                    var5 = var8[var0];
                    var6 = var7.bind(var4)(var5);
                    var5 = var6.scaleMatrix;
                    var0 = var8[var0];
                    var7 = var7.bind(var4)(var0);
                    var4 = var7.subtractMatrices;
                    var0 = arg2;
                    var4 = var4.bind(var7)(var0, var3);
                    var0 = arg0;
                    var0 = var5.bind(var6)(var4, var0);
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
                };
                var2 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 5;
                var7 = var6[var3];
                var4 = undefined;
                var7 = var5.bind(var4)(var7);
                var7 = var7.addMatrices;
                var2.addMatrices = var7;
                var7 = var6[var3];
                var7 = var5.bind(var4)(var7);
                var7 = var7.scaleMatrix;
                var2.scaleMatrix = var7;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.subtractMatrices;
                var2.subtractMatrices = var3;
                var0.__closure = var2;
                var2 = 4822273347900.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot14;
                var0.__initData = var1;
                return var0;
            };
            var1 = var1.bind(var0)();
            var _closure1_slot15 = var1;
            var1 = {};
            var3 = 'function applyProgressToNumber_Pnpm_utilTs7(progress,a,b){return a+progress*(b-a);}';
            var1.code = var3;
            var _closure1_slot16 = var1;
            var1 = function() { // Environment: var7
                var0 = function(arg0, arg1, arg2) { // Original name: applyProgressToNumber, environment: var0
                    var1 = arg1;
                    var0 = arg2;
                    var2 = var0 - var1;
                    var0 = arg0;
                    var0 = var0 * var2;
                    var0 = var1 + var0;
                    return var0;
                };
                var1 = {};
                var0.__closure = var1;
                var1 = 954128472665.0;
                var0.__workletHash = var1;
                var1 = _closure1_slot16;
                var0.__initData = var1;
                return var0;
            };
            var1 = var1.bind(var0)();
            var _closure1_slot17 = var1;
            var1 = {};
            var3 = "function decorateAnimation_Pnpm_utilTs8(animation){const{getReduceMotionFromConfig,recognizePrefixSuffix,isColor,toLinearSpace,convertToRGBA,clampRGBA,rgbaArrayToRGBAColor,toGammaSpace,decomposeMatrixIntoMatricesAndAngles,applyProgressToMatrix,applyProgressToNumber,getRotationMatrix,multiplyMatrices,flatten,isAffineMatrixFlat}=this.__closure;const baseOnStart=animation.onStart;const baseOnFrame=animation.onFrame;if(animation.isHigherOrder){animation.onStart=function(animation,value,timestamp,previousAnimation){if(animation.reduceMotion===undefined){animation.reduceMotion=getReduceMotionFromConfig();}return baseOnStart(animation,value,timestamp,previousAnimation);};return;}const animationCopy=Object.assign({},animation);delete animationCopy.callback;const prefNumberSuffOnStart=function(animation,value,timestamp,previousAnimation){var _animation$__prefix,_animation$__suffix;const{prefix:prefix,suffix:suffix,strippedValue:strippedValue}=recognizePrefixSuffix(value);animation.__prefix=prefix;animation.__suffix=suffix;animation.strippedCurrent=strippedValue;const{strippedValue:strippedToValue}=recognizePrefixSuffix(animation.toValue);animation.current=strippedValue;animation.startValue=strippedValue;animation.toValue=strippedToValue;if(previousAnimation&&previousAnimation!==animation){const{prefix:paPrefix,suffix:paSuffix,strippedValue:paStrippedValue}=recognizePrefixSuffix(previousAnimation.current);previousAnimation.current=paStrippedValue;previousAnimation.__prefix=paPrefix;previousAnimation.__suffix=paSuffix;}baseOnStart(animation,strippedValue,timestamp,previousAnimation);animation.current=((_animation$__prefix=animation.__prefix)!==null&&_animation$__prefix!==void 0?_animation$__prefix:'')+animation.current+((_animation$__suffix=animation.__suffix)!==null&&_animation$__suffix!==void 0?_animation$__suffix:'');if(previousAnimation&&previousAnimation!==animation){var _previousAnimation$__,_previousAnimation$__2;previousAnimation.current=((_previousAnimation$__=previousAnimation.__prefix)!==null&&_previousAnimation$__!==void 0?_previousAnimation$__:'')+previousAnimation.current+((_previousAnimation$__2=previousAnimation.__suffix)!==null&&_previousAnimation$__2!==void 0?_previousAnimation$__2:'');}};const prefNumberSuffOnFrame=function(animation,timestamp){var _animation$__prefix2,_animation$__suffix2;animation.current=animation.strippedCurrent;const res=baseOnFrame(animation,timestamp);animation.strippedCurrent=animation.current;animation.current=((_animation$__prefix2=animation.__prefix)!==null&&_animation$__prefix2!==void 0?_animation$__prefix2:'')+animation.current+((_animation$__suffix2=animation.__suffix)!==null&&_animation$__suffix2!==void 0?_animation$__suffix2:'');return res;};const tab=['R','G','B','A'];const colorOnStart=function(animation,value,timestamp,previousAnimation){let RGBAValue;let RGBACurrent;let RGBAToValue;const res=[];if(isColor(value)){RGBACurrent=toLinearSpace(convertToRGBA(animation.current));RGBAValue=toLinearSpace(convertToRGBA(value));if(animation.toValue){RGBAToValue=toLinearSpace(convertToRGBA(animation.toValue));}}tab.forEach(function(i,index){animation[i]=Object.assign({},animationCopy);animation[i].current=RGBACurrent[index];animation[i].toValue=RGBAToValue?RGBAToValue[index]:undefined;animation[i].onStart(animation[i],RGBAValue[index],timestamp,previousAnimation?previousAnimation[i]:undefined);res.push(animation[i].current);});animation.unroundedCurrent=res;clampRGBA(res);animation.current=rgbaArrayToRGBAColor(toGammaSpace(res));};const colorOnFrame=function(animation,timestamp){const res=[];let finished=true;animation.current=animation.nonscaledCurrent;tab.forEach(function(i){const result=animation[i].onFrame(animation[i],timestamp);finished=finished&&result;res.push(animation[i].current);});clampRGBA(res);animation.nonscaledCurrent=res;animation.current=rgbaArrayToRGBAColor(toGammaSpace(res));return finished;};const transformationMatrixOnStart=function(animation,value,timestamp,previousAnimation){const toValue=animation.toValue;animation.startMatrices=decomposeMatrixIntoMatricesAndAngles(value);animation.stopMatrices=decomposeMatrixIntoMatricesAndAngles(toValue);animation[0]=Object.assign({},animationCopy);animation[0].current=0;animation[0].toValue=100;animation[0].onStart(animation[0],0,timestamp,previousAnimation?previousAnimation[0]:undefined);animation.current=value;};const transformationMatrixOnFrame=function(animation,timestamp){let finished=true;const result=animation[0].onFrame(animation[0],timestamp);finished=finished&&result;const progress=animation[0].current/100;const transforms=['translationMatrix','scaleMatrix','skewMatrix'];const mappedTransforms=[];transforms.forEach(function(key,_){return mappedTransforms.push(applyProgressToMatrix(progress,animation.startMatrices[key],animation.stopMatrices[key]));});const[currentTranslation,currentScale,skewMatrix]=mappedTransforms;const rotations=['x','y','z'];const mappedRotations=[];rotations.forEach(function(key,_){const angle=applyProgressToNumber(progress,animation.startMatrices['r'+key],animation.stopMatrices['r'+key]);mappedRotations.push(getRotationMatrix(angle,key));});const[rotationMatrixX,rotationMatrixY,rotationMatrixZ]=mappedRotations;const rotationMatrix=multiplyMatrices(rotationMatrixX,multiplyMatrices(rotationMatrixY,rotationMatrixZ));const updated=flatten(multiplyMatrices(multiplyMatrices(currentScale,multiplyMatrices(skewMatrix,rotationMatrix)),currentTranslation));animation.current=updated;return finished;};const arrayOnStart=function(animation,value,timestamp,previousAnimation){value.forEach(function(v,i){animation[i]=Object.assign({},animationCopy);animation[i].current=v;animation[i].toValue=animation.toValue[i];animation[i].onStart(animation[i],v,timestamp,previousAnimation?previousAnimation[i]:undefined);});animation.current=[...value];};const arrayOnFrame=function(animation,timestamp){let finished=true;animation.current.forEach(function(_,i){const result=animation[i].onFrame(animation[i],timestamp);finished=finished&&result;animation.current[i]=animation[i].current;});return finished;};const objectOnStart=function(animation,value,timestamp,previousAnimation){for(const key in value){animation[key]=Object.assign({},animationCopy);animation[key].onStart=animation.onStart;animation[key].current=value[key];animation[key].toValue=animation.toValue[key];animation[key].onStart(animation[key],value[key],timestamp,previousAnimation?previousAnimation[key]:undefined);}animation.current=value;};const objectOnFrame=function(animation,timestamp){let finished=true;const newObject={};for(const key in animation.current){const result=animation[key].onFrame(animation[key],timestamp);finished=finished&&result;newObject[key]=animation[key].current;}animation.current=newObject;return finished;};animation.onStart=function(animation,value,timestamp,previousAnimation){if(animation.reduceMotion===undefined){animation.reduceMotion=getReduceMotionFromConfig();}if(animation.reduceMotion){if(animation.toValue!==undefined){animation.current=animation.toValue;}else{baseOnStart(animation,value,timestamp,previousAnimation);}animation.startTime=0;animation.onFrame=function(){return true;};return;}if(isColor(value)){colorOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=colorOnFrame;return;}else if(isAffineMatrixFlat(value)){transformationMatrixOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=transformationMatrixOnFrame;return;}else if(Array.isArray(value)){arrayOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=arrayOnFrame;return;}else if(typeof value==='string'){prefNumberSuffOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=prefNumberSuffOnFrame;return;}else if(typeof value==='object'&&value!==null){objectOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=objectOnFrame;return;}baseOnStart(animation,value,timestamp,previousAnimation);};}";
            var1.code = var3;
            var _closure1_slot18 = var1;
            var1 = function() { // Environment: var7
                var0 = function(arg0) { // Original name: decorateAnimation, environment: var0
                    _fun33361: for (var _fun33361_ip = 0;;) switch (_fun33361_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.onStart;
                            var _closure3_slot0 = var2;
                            var2 = var1.onFrame;
                            var _closure3_slot1 = var2;
                            var2 = var1.isHigherOrder;
                            if (var2) {
                                _fun33361_ip = 136;
                                continue _fun33361
                            }
                        case 34:
                            var2 = global;
                            var4 = var2.Object;
                            var3 = var4.assign;
                            var2 = {};
                            var2 = var3.bind(var4)(var2, var1);
                            var _closure3_slot2 = var2;
                            var2 = delete var2.callback;
                            var2 = function(arg0, arg1) { // Original name: prefNumberSuffOnFrame, environment: var0
                                _fun33363: for (var _fun33363_ip = 0;;) switch (_fun33363_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = var2.strippedCurrent;
                                        var2.current = var0;
                                        var3 = _closure3_slot1;
                                        var1 = undefined;
                                        var0 = arg1;
                                        var0 = var3.bind(var1)(var2, var0);
                                        var1 = var2.current;
                                        var2.strippedCurrent = var1;
                                        var1 = var2.__prefix;
                                        var5 = null;
                                        var6 = var5 != var1;
                                        var3 = '';
                                        var4 = var3;
                                        if (!var6) {
                                            _fun33363_ip = 69;
                                            continue _fun33363
                                        }
                                    case 66:
                                        var4 = var1;
                                    case 69:
                                        var1 = var2.current;
                                        var1 = var4 + var1;
                                        var4 = var2.__suffix;
                                        var5 = var5 != var4;
                                        if (!var5) {
                                            _fun33363_ip = 94;
                                            continue _fun33363
                                        }
                                    case 91:
                                        var3 = var4;
                                    case 94:
                                        var1 = var1 + var3;
                                        var2.current = var1;
                                        return var0;
                                }
                            };
                            var _closure3_slot3 = var2;
                            var2 = ['R', 'G', 'B', 'A'];
                            var _closure3_slot4 = var2;
                            var2 = function(arg0, arg1) { // Original name: colorOnFrame, environment: var0
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var1 = arg1;
                                var _closure4_slot1 = var1;
                                var6 = new Array(0);
                                var _closure4_slot2 = var6;
                                var1 = true;
                                var _closure4_slot3 = var1;
                                var1 = var2.nonscaledCurrent;
                                var2.current = var1;
                                var4 = _closure3_slot4;
                                var3 = var4.forEach;
                                var1 = function(arg0) { // Environment: var0
                                    _fun33365: for (var _fun33365_ip = 0;;) switch (_fun33365_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var1 = _closure4_slot0;
                                            var5 = var1[var3];
                                            var4 = var5.onFrame;
                                            var2 = var1[var3];
                                            var1 = _closure4_slot1;
                                            var2 = var4.bind(var5)(var2, var1);
                                            var1 = _closure4_slot3;
                                            if (!var1) {
                                                _fun33365_ip = 44;
                                                continue _fun33365
                                            }
                                        case 41:
                                            var1 = var2;
                                        case 44:
                                            _closure4_slot3 = var1;
                                            var2 = _closure4_slot2;
                                            var1 = var2.push;
                                            var0 = _closure4_slot0;
                                            var0 = var0[var3];
                                            var0 = var0.current;
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var3.bind(var4)(var1);
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot1;
                                var1 = 6;
                                var3 = var8[var1];
                                var5 = undefined;
                                var4 = var7.bind(var5)(var3);
                                var3 = var4.clampRGBA;
                                var3 = var3.bind(var4)(var6);
                                var2.nonscaledCurrent = var6;
                                var3 = var8[var1];
                                var4 = var7.bind(var5)(var3);
                                var3 = var4.rgbaArrayToRGBAColor;
                                var1 = var8[var1];
                                var5 = var7.bind(var5)(var1);
                                var1 = var5.toGammaSpace;
                                var1 = var1.bind(var5)(var6);
                                var1 = var3.bind(var4)(var1);
                                var2.current = var1;
                                var0 = _closure4_slot3;
                                return var0;
                            };
                            var _closure3_slot5 = var2;
                            var2 = function(arg0, arg1) { // Original name: transformationMatrixOnFrame, environment: var0
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var5 = 0;
                                var4 = var2[var5];
                                var3 = var4.onFrame;
                                var1 = var2[var5];
                                var0 = arg1;
                                var0 = var3.bind(var4)(var1, var0);
                                var1 = var2[var5];
                                var3 = var1.current;
                                var1 = 100;
                                var1 = var3 / var1;
                                var _closure4_slot1 = var1;
                                var1 = new Array(0);
                                var _closure4_slot2 = var1;
                                var7 = ['translationMatrix', 'scaleMatrix', 'skewMatrix'];
                                var4 = var7.forEach;
                                var3 = function(arg0, arg1) { // Environment: var6
                                    var3 = arg0;
                                    var2 = _closure4_slot2;
                                    var1 = var2.push;
                                    var6 = _closure1_slot15;
                                    var5 = _closure4_slot1;
                                    var0 = _closure4_slot0;
                                    var4 = var0.startMatrices;
                                    var4 = var4[var3];
                                    var0 = var0.stopMatrices;
                                    var3 = var0[var3];
                                    var0 = undefined;
                                    var0 = var6.bind(var0)(var5, var4, var3);
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var3 = var4.bind(var7)(var3);
                                var7 = var1[var5];
                                var4 = 1;
                                var10 = var1[var4];
                                var3 = 2;
                                var13 = var1[var3];
                                var1 = new Array(0);
                                var _closure4_slot3 = var1;
                                var9 = ['x', 'y', 'z'];
                                var8 = var9.forEach;
                                var6 = function(arg0, arg1) { // Environment: var6
                                    var6 = arg0;
                                    var7 = _closure1_slot17;
                                    var5 = _closure4_slot1;
                                    var3 = _closure4_slot0;
                                    var8 = var3.startMatrices;
                                    var0 = 'r';
                                    var4 = var0 + var6;
                                    var4 = var8[var4];
                                    var3 = var3.stopMatrices;
                                    var0 = var0 + var6;
                                    var3 = var3[var0];
                                    var0 = undefined;
                                    var5 = var7.bind(var0)(var5, var4, var3);
                                    var3 = _closure4_slot3;
                                    var2 = var3.push;
                                    var4 = _closure1_slot0;
                                    var7 = _closure1_slot1;
                                    var1 = 5;
                                    var1 = var7[var1];
                                    var4 = var4.bind(var0)(var1);
                                    var1 = var4.getRotationMatrix;
                                    var1 = var1.bind(var4)(var5, var6);
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var6 = var8.bind(var9)(var6);
                                var6 = var1[var5];
                                var12 = var1[var4];
                                var9 = var1[var3];
                                var14 = _closure1_slot0;
                                var15 = _closure1_slot1;
                                var1 = 5;
                                var3 = var15[var1];
                                var11 = undefined;
                                var5 = var14.bind(var11)(var3);
                                var4 = var5.multiplyMatrices;
                                var3 = var15[var1];
                                var8 = var14.bind(var11)(var3);
                                var3 = var8.multiplyMatrices;
                                var3 = var3.bind(var8)(var12, var9);
                                var12 = var4.bind(var5)(var6, var3);
                                var3 = var15[var1];
                                var4 = var14.bind(var11)(var3);
                                var3 = var4.flatten;
                                var5 = var15[var1];
                                var6 = var14.bind(var11)(var5);
                                var5 = var6.multiplyMatrices;
                                var8 = var15[var1];
                                var9 = var14.bind(var11)(var8);
                                var8 = var9.multiplyMatrices;
                                var1 = var15[var1];
                                var11 = var14.bind(var11)(var1);
                                var1 = var11.multiplyMatrices;
                                var1 = var1.bind(var11)(var13, var12);
                                var1 = var8.bind(var9)(var10, var1);
                                var1 = var5.bind(var6)(var1, var7);
                                var1 = var3.bind(var4)(var1);
                                var2.current = var1;
                                return var0;
                            };
                            var _closure3_slot6 = var2;
                            var2 = function(arg0, arg1) { // Original name: arrayOnFrame, environment: var0
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var2 = arg1;
                                var _closure4_slot1 = var2;
                                var2 = true;
                                var _closure4_slot2 = var2;
                                var3 = var1.current;
                                var2 = var3.forEach;
                                var1 = function(arg0, arg1) { // Environment: var0
                                    _fun33370: for (var _fun33370_ip = 0;;) switch (_fun33370_ip) {
                                        case 0:
                                            var2 = arg1;
                                            var1 = _closure4_slot0;
                                            var5 = var1[var2];
                                            var4 = var5.onFrame;
                                            var3 = var1[var2];
                                            var1 = _closure4_slot1;
                                            var3 = var4.bind(var5)(var3, var1);
                                            var1 = _closure4_slot2;
                                            if (!var1) {
                                                _fun33370_ip = 44;
                                                continue _fun33370
                                            }
                                        case 41:
                                            var1 = var3;
                                        case 44:
                                            _closure4_slot2 = var1;
                                            var0 = _closure4_slot0;
                                            var1 = var0.current;
                                            var0 = var0[var2];
                                            var0 = var0.current;
                                            var1[var2] = var0;
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                var0 = _closure4_slot2;
                                return var0;
                            };
                            var _closure3_slot7 = var2;
                            var2 = function(arg0, arg1) { // Original name: objectOnFrame, environment: var0
                                _fun33371: for (var _fun33371_ip = 0;;) switch (_fun33371_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var9 = arg1;
                                        var1 = {};
                                        var7 = var2.current;
                                        var3 = true;
                                        var0 = true;
                                        for (var4 in var7)
                                            case 25: {
                                                var0 = var3;
                                                case 37: var12 = var4;
                                                var13 = var2[var12];
                                                var11 = var13.onFrame;
                                                var10 = var2[var12];
                                                var11 = var11.bind(var13)(var10, var9);
                                                var10 = var3;
                                                if (!var3) {
                                                    _fun33371_ip = 69;
                                                    continue _fun33371
                                                }
                                                case 66: var10 = var11;
                                                case 69: var11 = var2[var12];
                                                var11 = var11.current;
                                                var1[var12] = var11;
                                                var3 = var10;
                                                _fun33371_ip = 25;
                                                continue _fun33371;
                                            }
                                    case 87:
                                        var2.current = var1;
                                        return var0;
                                }
                            };
                            var _closure3_slot8 = var2;
                            var2 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                                _fun33372: for (var _fun33372_ip = 0;;) switch (_fun33372_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var7 = arg1;
                                        var6 = arg2;
                                        var5 = arg3;
                                        var0 = var2.reduceMotion;
                                        var4 = undefined;
                                        if (!(var4 === var0)) {
                                            _fun33372_ip = 43;
                                            continue _fun33372
                                        }
                                    case 26:
                                        var0 = _closure1_slot12;
                                        var0 = var0.bind(var4)();
                                        var2.reduceMotion = var0;
                                    case 43:
                                        var0 = var2.reduceMotion;
                                        if (var0) {
                                            _fun33372_ip = 972;
                                            continue _fun33372
                                        }
                                    case 55:
                                        var8 = _closure1_slot0;
                                        var9 = _closure1_slot1;
                                        var0 = 6;
                                        var0 = var9[var0];
                                        var8 = var8.bind(var4)(var0);
                                        var0 = var8.isColor;
                                        var0 = var0.bind(var8)(var7);
                                        if (var0) {
                                            _fun33372_ip = 932;
                                            continue _fun33372
                                        }
                                    case 95:
                                        var8 = _closure1_slot0;
                                        var0 = _closure1_slot1;
                                        var10 = 5;
                                        var0 = var0[var10];
                                        var8 = var8.bind(var4)(var0);
                                        var0 = var8.isAffineMatrixFlat;
                                        var0 = var0.bind(var8)(var7);
                                        if (var0) {
                                            _fun33372_ip = 748;
                                            continue _fun33372
                                        }
                                    case 132:
                                        var15 = global;
                                        var8 = var15.Array;
                                        var0 = var8.isArray;
                                        var0 = var0.bind(var8)(var7);
                                        if (var0) {
                                            _fun33372_ip = 705;
                                            continue _fun33372
                                        }
                                    case 156:
                                        var8 = typeof var7;
                                        var0 = 'string';
                                        if (!(var0 !== var8)) {
                                            _fun33372_ip = 399;
                                            continue _fun33372
                                        }
                                    case 170:
                                        var0 = 'object';
                                        if (!(var0 === var8)) {
                                            _fun33372_ip = 184;
                                            continue _fun33372
                                        }
                                    case 178:
                                        var0 = null;
                                        if (!(var0 === var7)) {
                                            _fun33372_ip = 216;
                                            continue _fun33372
                                        }
                                    case 184:
                                        var0 = _closure3_slot0;
                                        var27 = undefined;
                                        var26 = var2;
                                        var25 = var7;
                                        var24 = var6;
                                        var23 = var5;
                                        var0 = var27[var0](var26, var25, var24, var23, var22);
                                        var0 = undefined;
                                        _fun33372_ip = 394;
                                        continue _fun33372;
                                    case 216:
                                        var13 = var7;
                                        for (var9 in var13)
                                            case 233: {
                                                case 245: var21 = var9;
                                                var19 = var15.Object;
                                                var18 = var19.assign;
                                                var17 = _closure3_slot2;
                                                var16 = {};
                                                var16 = var18.bind(var19)(var16, var17);
                                                var2[var21] = var16;
                                                var17 = var2[var21];
                                                var16 = var2.onStart;
                                                var17.onStart = var16;
                                                var17 = var2[var21];
                                                var16 = var7[var21];
                                                var17.current = var16;
                                                var17 = var2[var21];
                                                var16 = var2.toValue;
                                                var16 = var16[var21];
                                                var17.toValue = var16;
                                                var20 = var2[var21];
                                                var19 = var20.onStart;
                                                var18 = var2[var21];
                                                var17 = var7[var21];
                                                var16 = undefined;
                                                if (!var5) {
                                                    _fun33372_ip = 352;
                                                    continue _fun33372
                                                }
                                                case 348: var16 = var5[var21];
                                                case 352: var27 = var20;
                                                var26 = var18;
                                                var25 = var17;
                                                var24 = var6;
                                                var23 = var16;
                                                var16 = var27[var19](var26, var25, var24, var23, var22);
                                                _fun33372_ip = 233;
                                                continue _fun33372;
                                            }
                                    case 376:
                                        var2.current = var7;
                                        var8 = _closure3_slot8;
                                        var2.onFrame = var8;
                                        var0 = undefined;
                                    case 394:
                                        _fun33372_ip = 703;
                                        continue _fun33372;
                                    case 399:
                                        var9 = _closure1_slot9;
                                        var11 = var9.bind(var4)(var7);
                                        var12 = var11.prefix;
                                        var8 = var11.suffix;
                                        var11 = var11.strippedValue;
                                        var2.__prefix = var12;
                                        var2.__suffix = var8;
                                        var2.strippedCurrent = var11;
                                        var8 = var2.toValue;
                                        var8 = var9.bind(var4)(var8);
                                        var8 = var8.strippedValue;
                                        var2.current = var11;
                                        var2.startValue = var11;
                                        var2.toValue = var8;
                                        if (!var5) {
                                            _fun33372_ip = 536;
                                            continue _fun33372
                                        }
                                    case 482:
                                        if (!(var5 !== var2)) {
                                            _fun33372_ip = 536;
                                            continue _fun33372
                                        }
                                    case 486:
                                        var9 = _closure1_slot9;
                                        var8 = var5.current;
                                        var12 = var9.bind(var4)(var8);
                                        var9 = var12.prefix;
                                        var8 = var12.suffix;
                                        var12 = var12.strippedValue;
                                        var5.current = var12;
                                        var5.__prefix = var9;
                                        var5.__suffix = var8;
                                    case 536:
                                        var9 = _closure3_slot0;
                                        var27 = undefined;
                                        var26 = var2;
                                        var25 = var11;
                                        var24 = var6;
                                        var23 = var5;
                                        var9 = var27[var9](var26, var25, var24, var23, var22);
                                        var9 = var2.__prefix;
                                        var13 = null;
                                        var14 = var13 != var9;
                                        var11 = '';
                                        var12 = var11;
                                        if (!var14) {
                                            _fun33372_ip = 586;
                                            continue _fun33372
                                        }
                                    case 583:
                                        var12 = var9;
                                    case 586:
                                        var9 = var2.current;
                                        var12 = var12 + var9;
                                        var14 = var2.__suffix;
                                        var15 = var13 != var14;
                                        var9 = var11;
                                        if (!var15) {
                                            _fun33372_ip = 614;
                                            continue _fun33372
                                        }
                                    case 611:
                                        var9 = var14;
                                    case 614:
                                        var9 = var12 + var9;
                                        var2.current = var9;
                                        var9 = var5;
                                        if (!var9) {
                                            _fun33372_ip = 634;
                                            continue _fun33372
                                        }
                                    case 630:
                                        var9 = var5 !== var2;
                                    case 634:
                                        if (!var9) {
                                            _fun33372_ip = 691;
                                            continue _fun33372
                                        }
                                    case 637:
                                        var9 = var5.__prefix;
                                        var14 = var13 != var9;
                                        var12 = var11;
                                        if (!var14) {
                                            _fun33372_ip = 656;
                                            continue _fun33372
                                        }
                                    case 653:
                                        var12 = var9;
                                    case 656:
                                        var9 = var5.current;
                                        var9 = var12 + var9;
                                        var12 = var5.__suffix;
                                        var13 = var13 != var12;
                                        if (!var13) {
                                            _fun33372_ip = 681;
                                            continue _fun33372
                                        }
                                    case 678:
                                        var11 = var12;
                                    case 681:
                                        var9 = var9 + var11;
                                        var5.current = var9;
                                    case 691:
                                        var8 = _closure3_slot3;
                                        var2.onFrame = var8;
                                        var0 = undefined;
                                    case 703:
                                        _fun33372_ip = 743;
                                        continue _fun33372;
                                    case 705:
                                        var8 = function(arg0, arg1, arg2, arg3) { // Original name: arrayOnStart, environment: var1
                                            var2 = arg0;
                                            var3 = arg1;
                                            var _closure5_slot0 = var2;
                                            var1 = arg2;
                                            var _closure5_slot1 = var1;
                                            var1 = arg3;
                                            var _closure5_slot2 = var1;
                                            var1 = var3.forEach;
                                            var0 = function(arg0, arg1) { // Environment: var0
                                                _fun33377: for (var _fun33377_ip = 0;;) switch (_fun33377_ip) {
                                                    case 0:
                                                        var6 = arg0;
                                                        var8 = arg1;
                                                        var0 = _closure5_slot0;
                                                        var1 = global;
                                                        var4 = var1.Object;
                                                        var3 = var4.assign;
                                                        var2 = _closure3_slot2;
                                                        var1 = {};
                                                        var1 = var3.bind(var4)(var1, var2);
                                                        var0[var8] = var1;
                                                        var1 = var0[var8];
                                                        var1.current = var6;
                                                        var2 = var0[var8];
                                                        var1 = var0.toValue;
                                                        var1 = var1[var8];
                                                        var2.toValue = var1;
                                                        var5 = var0[var8];
                                                        var4 = var5.onStart;
                                                        var3 = var0[var8];
                                                        var2 = _closure5_slot1;
                                                        var9 = _closure5_slot2;
                                                        var0 = undefined;
                                                        var1 = undefined;
                                                        if (!var9) {
                                                            _fun33377_ip = 112;
                                                            continue _fun33377
                                                        }
                                                    case 104:
                                                        var7 = _closure5_slot2;
                                                        var1 = var7[var8];
                                                    case 112:
                                                        var14 = var5;
                                                        var13 = var3;
                                                        var12 = var6;
                                                        var11 = var2;
                                                        var10 = var1;
                                                        var1 = var14[var4](var13, var12, var11, var10, var9);
                                                        return var0;
                                                }
                                            };
                                            var0 = var1.bind(var3)(var0);
                                            var1 = _closure1_slot2;
                                            var0 = undefined;
                                            var1 = var1.bind(var0)(var3);
                                            var2.current = var1;
                                            return var0;
                                        };
                                        var27 = undefined;
                                        var26 = var2;
                                        var25 = var7;
                                        var24 = var6;
                                        var23 = var5;
                                        var8 = var27[var8](var26, var25, var24, var23, var22);
                                        var8 = _closure3_slot7;
                                        var2.onFrame = var8;
                                        var0 = undefined;
                                    case 743:
                                        _fun33372_ip = 930;
                                        continue _fun33372;
                                    case 748:
                                        var9 = var2.toValue;
                                        var8 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var11 = var3[var10];
                                        var12 = var8.bind(var4)(var11);
                                        var11 = var12.decomposeMatrixIntoMatricesAndAngles;
                                        var11 = var11.bind(var12)(var7);
                                        var2.startMatrices = var11;
                                        var3 = var3[var10];
                                        var8 = var8.bind(var4)(var3);
                                        var3 = var8.decomposeMatrixIntoMatricesAndAngles;
                                        var3 = var3.bind(var8)(var9);
                                        var2.stopMatrices = var3;
                                        var3 = global;
                                        var11 = var3.Object;
                                        var10 = var11.assign;
                                        var9 = _closure3_slot2;
                                        var8 = {};
                                        var8 = var10.bind(var11)(var8, var9);
                                        var12 = 0;
                                        var2[var12] = var8;
                                        var8 = var2[var12];
                                        var8.current = var12;
                                        var9 = var2[var12];
                                        var8 = 100;
                                        var9.toValue = var8;
                                        var11 = var2[var12];
                                        var10 = var11.onStart;
                                        var9 = var2[var12];
                                        var8 = undefined;
                                        if (!var5) {
                                            _fun33372_ip = 894;
                                            continue _fun33372
                                        }
                                    case 890:
                                        var8 = var5[var12];
                                    case 894:
                                        var27 = var11;
                                        var26 = var9;
                                        var25 = 0;
                                        var24 = var6;
                                        var23 = var8;
                                        var8 = var27[var10](var26, var25, var24, var23, var22);
                                        var2.current = var7;
                                        var3 = _closure3_slot6;
                                        var2.onFrame = var3;
                                        var0 = undefined;
                                    case 930:
                                        _fun33372_ip = 970;
                                        continue _fun33372;
                                    case 932:
                                        var3 = function(arg0, arg1, arg2, arg3) { // Original name: colorOnStart, environment: var1
                                            _fun33374: for (var _fun33374_ip = 0;;) switch (_fun33374_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var10 = arg1;
                                                    var _closure5_slot0 = var2;
                                                    var0 = arg2;
                                                    var _closure5_slot1 = var0;
                                                    var0 = arg3;
                                                    var _closure5_slot2 = var0;
                                                    var6 = new Array(0);
                                                    var _closure5_slot6 = var6;
                                                    var5 = _closure1_slot0;
                                                    var0 = _closure1_slot1;
                                                    var7 = 6;
                                                    var4 = var0[var7];
                                                    var0 = undefined;
                                                    var5 = var5.bind(var0)(var4);
                                                    var4 = var5.isColor;
                                                    var4 = var4.bind(var5)(var10);
                                                    if (!var4) {
                                                        _fun33374_ip = 244;
                                                        continue _fun33374
                                                    }
                                                case 76:
                                                    var9 = _closure1_slot0;
                                                    var4 = _closure1_slot1;
                                                    var5 = var4[var7];
                                                    var11 = var9.bind(var0)(var5);
                                                    var8 = var11.toLinearSpace;
                                                    var5 = var4[var7];
                                                    var13 = var9.bind(var0)(var5);
                                                    var12 = var13.convertToRGBA;
                                                    var5 = var2.current;
                                                    var5 = var12.bind(var13)(var5);
                                                    var5 = var8.bind(var11)(var5);
                                                    var _closure5_slot4 = var5;
                                                    var5 = var4[var7];
                                                    var8 = var9.bind(var0)(var5);
                                                    var5 = var8.toLinearSpace;
                                                    var4 = var4[var7];
                                                    var9 = var9.bind(var0)(var4);
                                                    var4 = var9.convertToRGBA;
                                                    var4 = var4.bind(var9)(var10);
                                                    var4 = var5.bind(var8)(var4);
                                                    var _closure5_slot3 = var4;
                                                    var4 = var2.toValue;
                                                    if (!var4) {
                                                        _fun33374_ip = 244;
                                                        continue _fun33374
                                                    }
                                                case 186:
                                                    var9 = _closure1_slot0;
                                                    var4 = _closure1_slot1;
                                                    var5 = var4[var7];
                                                    var8 = var9.bind(var0)(var5);
                                                    var5 = var8.toLinearSpace;
                                                    var4 = var4[var7];
                                                    var10 = var9.bind(var0)(var4);
                                                    var9 = var10.convertToRGBA;
                                                    var4 = var2.toValue;
                                                    var4 = var9.bind(var10)(var4);
                                                    var4 = var5.bind(var8)(var4);
                                                    var _closure5_slot5 = var4;
                                                case 244:
                                                    var5 = _closure3_slot4;
                                                    var4 = var5.forEach;
                                                    var3 = function(arg0, arg1) { // Environment: var3
                                                        _fun33375: for (var _fun33375_ip = 0;;) switch (_fun33375_ip) {
                                                            case 0:
                                                                var4 = arg0;
                                                                var3 = arg1;
                                                                var0 = _closure5_slot0;
                                                                var2 = global;
                                                                var7 = var2.Object;
                                                                var6 = var7.assign;
                                                                var5 = _closure3_slot2;
                                                                var2 = {};
                                                                var2 = var6.bind(var7)(var2, var5);
                                                                var0[var4] = var2;
                                                                var5 = var0[var4];
                                                                var2 = _closure5_slot4;
                                                                var2 = var2[var3];
                                                                var5.current = var2;
                                                                var5 = var0[var4];
                                                                var6 = _closure5_slot5;
                                                                var0 = undefined;
                                                                var2 = undefined;
                                                                if (!var6) {
                                                                    _fun33375_ip = 86;
                                                                    continue _fun33375
                                                                }
                                                            case 78:
                                                                var6 = _closure5_slot5;
                                                                var2 = var6[var3];
                                                            case 86:
                                                                var5.toValue = var2;
                                                                var2 = _closure5_slot0;
                                                                var8 = var2[var4];
                                                                var7 = var8.onStart;
                                                                var6 = var2[var4];
                                                                var2 = _closure5_slot3;
                                                                var5 = var2[var3];
                                                                var3 = _closure5_slot1;
                                                                var9 = _closure5_slot2;
                                                                var2 = undefined;
                                                                if (!var9) {
                                                                    _fun33375_ip = 139;
                                                                    continue _fun33375
                                                                }
                                                            case 131:
                                                                var9 = _closure5_slot2;
                                                                var2 = var9[var4];
                                                            case 139:
                                                                var14 = var8;
                                                                var13 = var6;
                                                                var12 = var5;
                                                                var11 = var3;
                                                                var10 = var2;
                                                                var2 = var14[var7](var13, var12, var11, var10, var9);
                                                                var3 = _closure5_slot6;
                                                                var2 = var3.push;
                                                                var1 = _closure5_slot0;
                                                                var1 = var1[var4];
                                                                var1 = var1.current;
                                                                var1 = var2.bind(var3)(var1);
                                                                return var0;
                                                        }
                                                    };
                                                    var3 = var4.bind(var5)(var3);
                                                    var2.unroundedCurrent = var6;
                                                    var5 = _closure1_slot0;
                                                    var1 = _closure1_slot1;
                                                    var3 = var1[var7];
                                                    var4 = var5.bind(var0)(var3);
                                                    var3 = var4.clampRGBA;
                                                    var3 = var3.bind(var4)(var6);
                                                    var3 = var1[var7];
                                                    var4 = var5.bind(var0)(var3);
                                                    var3 = var4.rgbaArrayToRGBAColor;
                                                    var1 = var1[var7];
                                                    var5 = var5.bind(var0)(var1);
                                                    var1 = var5.toGammaSpace;
                                                    var1 = var1.bind(var5)(var6);
                                                    var1 = var3.bind(var4)(var1);
                                                    var2.current = var1;
                                                    return var0;
                                            }
                                        };
                                        var27 = undefined;
                                        var26 = var2;
                                        var25 = var7;
                                        var24 = var6;
                                        var23 = var5;
                                        var3 = var27[var3](var26, var25, var24, var23, var22);
                                        var3 = _closure3_slot5;
                                        var2.onFrame = var3;
                                        var0 = undefined;
                                    case 970:
                                        _fun33372_ip = 1042;
                                        continue _fun33372;
                                    case 972:
                                        var3 = var2.toValue;
                                        if (!(var4 === var3)) {
                                            _fun33372_ip = 1009;
                                            continue _fun33372
                                        }
                                    case 982:
                                        var3 = _closure3_slot0;
                                        var27 = undefined;
                                        var26 = var2;
                                        var25 = var7;
                                        var24 = var6;
                                        var23 = var5;
                                        var3 = var27[var3](var26, var25, var24, var23, var22);
                                        _fun33372_ip = 1021;
                                        continue _fun33372;
                                    case 1009:
                                        var3 = var2.toValue;
                                        var2.current = var3;
                                    case 1021:
                                        var3 = 0;
                                        var2.startTime = var3;
                                        var1 = function() { // Environment: var1
                                            var0 = true;
                                            return var0;
                                        };
                                        var2.onFrame = var1;
                                        var0 = undefined;
                                    case 1042:
                                        return var0;
                                }
                            };
                            var1.onStart = var2;
                            _fun33361_ip = 147;
                            continue _fun33361;
                        case 136:
                            var0 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                                _fun33362: for (var _fun33362_ip = 0;;) switch (_fun33362_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var0 = var5.reduceMotion;
                                        var4 = undefined;
                                        if (!(var4 === var0)) {
                                            _fun33362_ip = 32;
                                            continue _fun33362
                                        }
                                    case 15:
                                        var0 = _closure1_slot12;
                                        var0 = var0.bind(var4)();
                                        var5.reduceMotion = var0;
                                    case 32:
                                        var3 = _closure3_slot0;
                                        var8 = arg1;
                                        var7 = arg2;
                                        var6 = arg3;
                                        var10 = undefined;
                                        var9 = var5;
                                        var0 = var10[var3](var9, var8, var7, var6, var5);
                                        return var0;
                                }
                            };
                            var1.onStart = var0;
                        case 147:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = {};
                var3 = _closure1_slot12;
                var2.getReduceMotionFromConfig = var3;
                var3 = _closure1_slot9;
                var2.recognizePrefixSuffix = var3;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var7 = var6[var3];
                var4 = undefined;
                var7 = var5.bind(var4)(var7);
                var7 = var7.isColor;
                var2.isColor = var7;
                var7 = var6[var3];
                var7 = var5.bind(var4)(var7);
                var7 = var7.toLinearSpace;
                var2.toLinearSpace = var7;
                var7 = var6[var3];
                var7 = var5.bind(var4)(var7);
                var7 = var7.convertToRGBA;
                var2.convertToRGBA = var7;
                var7 = var6[var3];
                var7 = var5.bind(var4)(var7);
                var7 = var7.clampRGBA;
                var2.clampRGBA = var7;
                var7 = var6[var3];
                var7 = var5.bind(var4)(var7);
                var7 = var7.rgbaArrayToRGBAColor;
                var2.rgbaArrayToRGBAColor = var7;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.toGammaSpace;
                var2.toGammaSpace = var3;
                var3 = 5;
                var7 = var6[var3];
                var7 = var5.bind(var4)(var7);
                var7 = var7.decomposeMatrixIntoMatricesAndAngles;
                var2.decomposeMatrixIntoMatricesAndAngles = var7;
                var7 = _closure1_slot15;
                var2.applyProgressToMatrix = var7;
                var7 = _closure1_slot17;
                var2.applyProgressToNumber = var7;
                var7 = var6[var3];
                var7 = var5.bind(var4)(var7);
                var7 = var7.getRotationMatrix;
                var2.getRotationMatrix = var7;
                var7 = var6[var3];
                var7 = var5.bind(var4)(var7);
                var7 = var7.multiplyMatrices;
                var2.multiplyMatrices = var7;
                var7 = var6[var3];
                var7 = var5.bind(var4)(var7);
                var7 = var7.flatten;
                var2.flatten = var7;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.isAffineMatrixFlat;
                var2.isAffineMatrixFlat = var3;
                var0.__closure = var2;
                var2 = 6240615473022.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot18;
                var0.__initData = var1;
                return var0;
            };
            var1 = var1.bind(var0)();
            var _closure1_slot19 = var1;
            var1 = {};
            var3 = "function defineAnimation_Pnpm_utilTs9(starting,factory){const{IN_STYLE_UPDATER,decorateAnimation,SHOULD_BE_USE_WEB}=this.__closure;if(IN_STYLE_UPDATER){return starting;}const create=function(){'worklet';const animation=factory();decorateAnimation(animation);return animation;};if(_WORKLET||SHOULD_BE_USE_WEB){return create();}create.__isAnimationDefinition=true;return create;}";
            var1.code = var3;
            var _closure1_slot20 = var1;
            var1 = {};
            var3 = 'function pnpm_utilTs10(){const{factory,decorateAnimation}=this.__closure;const animation=factory();decorateAnimation(animation);return animation;}';
            var1.code = var3;
            var _closure1_slot21 = var1;
            var1 = function() { // Environment: var7
                var0 = function(arg0, arg1) { // Original name: defineAnimation, environment: var0
                    _fun33379: for (var _fun33379_ip = 0;;) switch (_fun33379_ip) {
                        case 0:
                            var3 = arg1;
                            var _closure3_slot0 = var3;
                            var2 = _closure1_slot3;
                            if (var2) {
                                _fun33379_ip = 111;
                                continue _fun33379
                            }
                        case 19:
                            var2 = function() { // Original name: pnpm_utilTs10, environment: var1
                                var0 = _closure3_slot0;
                                var2 = undefined;
                                var0 = var0.bind(var2)();
                                var1 = _closure1_slot19;
                                var1 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = {};
                            var1.factory = var3;
                            var3 = _closure1_slot19;
                            var1.decorateAnimation = var3;
                            var2.__closure = var1;
                            var1 = 9825023081203.0;
                            var2.__workletHash = var1;
                            var1 = _closure1_slot21;
                            var2.__initData = var1;
                            var1 = global;
                            var1 = var1._WORKLET;
                            if (var1) {
                                _fun33379_ip = 103;
                                continue _fun33379
                            }
                        case 83:
                            var0 = _closure1_slot4;
                            if (var0) {
                                _fun33379_ip = 103;
                                continue _fun33379
                            }
                        case 90:
                            var0 = true;
                            var2.__isAnimationDefinition = var0;
                            var0 = var2;
                            _fun33379_ip = 109;
                            continue _fun33379;
                        case 103:
                            var1 = undefined;
                            var0 = var2.bind(var1)();
                        case 109:
                            return var0;
                        case 111:
                            var0 = arg0;
                            return var0;
                    }
                };
                var2 = {};
                var3 = _closure1_slot3;
                var2.IN_STYLE_UPDATER = var3;
                var3 = _closure1_slot19;
                var2.decorateAnimation = var3;
                var3 = _closure1_slot4;
                var2.SHOULD_BE_USE_WEB = var3;
                var0.__closure = var2;
                var2 = 8998026617746.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot20;
                var0.__initData = var1;
                return var0;
            };
            var3 = var1.bind(var0)();
            var1 = {};
            var11 = "function cancelAnimationNative_Pnpm_utilTs11(sharedValue){const{runOnUI}=this.__closure;if(_WORKLET){sharedValue.value=sharedValue.value;}else{runOnUI(function(){'worklet';sharedValue.value=sharedValue.value;})();}}";
            var1.code = var11;
            var _closure1_slot22 = var1;
            var1 = {};
            var11 = 'function pnpm_utilTs12(){const{sharedValue}=this.__closure;sharedValue.value=sharedValue.value;}';
            var1.code = var11;
            var _closure1_slot23 = var1;
            var1 = function() { // Environment: var7
                var0 = function(arg0) { // Original name: cancelAnimationNative, environment: var0
                    _fun33382: for (var _fun33382_ip = 0;;) switch (_fun33382_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var2 = global;
                            var2 = var2._WORKLET;
                            if (var2) {
                                _fun33382_ip = 106;
                                continue _fun33382
                            }
                        case 20:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 7;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.runOnUI;
                            var0 = function() { // Original name: pnpm_utilTs12, environment: var0
                                var1 = _closure3_slot0;
                                var0 = var1.value;
                                var1.value = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var6 = {};
                            var6.sharedValue = var1;
                            var0.__closure = var6;
                            var6 = 14261344384038.0;
                            var0.__workletHash = var6;
                            var5 = _closure1_slot23;
                            var0.__initData = var5;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.bind(var2)();
                            _fun33382_ip = 117;
                            continue _fun33382;
                        case 106:
                            var0 = var1.value;
                            var1.value = var0;
                        case 117:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.runOnUI;
                var2.runOnUI = var3;
                var0.__closure = var2;
                var2 = 796831326214.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot22;
                var0.__initData = var1;
                return var0;
            };
            var1 = var1.bind(var0)();
            if (!var10) {
                _fun33345_ip = 455;
                continue _fun33345
            }
        case 450:
            var1 = function(arg0) { // Original name: cancelAnimationWeb, environment: var7
                var1 = arg0;
                var0 = var1.value;
                var1.value = var0;
                var0 = undefined;
                return var0;
            };
        case 455:
            var2.isValidLayoutAnimationProp = var9;
            var2.assertEasingIsWorklet = var8;
            var7 = function(arg0) { // Original name: initialUpdaterRun, environment: var7
                var0 = true;
                _closure1_slot3 = var0;
                var1 = arg0;
                var0 = undefined;
                var0 = var1.bind(var0)();
                var1 = false;
                _closure1_slot3 = var1;
                return var0;
            };
            var2.initialUpdaterRun = var7;
            var2.recognizePrefixSuffix = var6;
            var2.getReduceMotionFromConfig = var5;
            var2.getReduceMotionForAnimation = var4;
            var2.defineAnimation = var3;
            var2.cancelAnimation = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 3683, 3705, 3691, 3721, 3722, 3723, 3687]);