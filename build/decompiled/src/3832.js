// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun34718: for (var _fun34718_ip = 0;;) switch (_fun34718_ip) {
            case 0:
                var3 = arg0;
                var6 = var3;
                var4 = arg1;
                var1 = global;
                var2 = var1.Array;
                var0 = var2.isArray;
                var2 = var0.bind(var2)(var3);
                var0 = var6;
                if (var2) {
                    _fun34718_ip = 273;
                    continue _fun34718
                }
            case 36:
                var3 = 'object';
                var2 = typeof var0;
                if (!(var3 === var2)) {
                    _fun34718_ip = 73;
                    continue _fun34718
                }
            case 47:
                var5 = var6;
                var2 = null;
                if (!(var2 !== var5)) {
                    _fun34718_ip = 73;
                    continue _fun34718
                }
            case 56:
                var2 = var6;
                var2 = var2.value;
                var5 = undefined;
                if (!(var5 !== var2)) {
                    _fun34718_ip = 208;
                    continue _fun34718
                }
            case 73:
                var2 = var4;
                var7 = undefined;
                if (!(var7 !== var2)) {
                    _fun34718_ip = 317;
                    continue _fun34718
                }
            case 85:
                var2 = var6;
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun34718_ip = 317;
                    continue _fun34718
                }
            case 98:
                var3 = var6;
                var2 = null;
                if (!(var2 !== var3)) {
                    _fun34718_ip = 317;
                    continue _fun34718
                }
            case 110:
                var2 = var6;
                var2 = var2.value;
                if (!(var7 !== var2)) {
                    _fun34718_ip = 317;
                    continue _fun34718
                }
            case 125:
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 7;
                var2 = var8[var2];
                var2 = var3.bind(var7)(var2);
                var7 = var2.ReanimatedError;
                var9 = var4;
                var2 = var1.HermesInternal;
                var8 = var2.concat;
                var3 = 'Invalid value passed to `';
                var2 = '`, maybe you forgot to use `.value`?';
                var11 = var8.bind(var3)(var9, var2);
                var3 = var7.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var7
                    }
                });
                var12 = var3;
                var2 = new var12[var7](var11, var10);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 208:
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = var6;
                var1 = var2.bind(var3)(var1);
                var3 = var1;
                var2 = var3[Symbol.iterator];
                var3 = var2().next;
            case 236:
                var9 = var3().value;
                var7 = var2;
                if (!(var7 !== var5)) {
                    _fun34718_ip = 317;
                    continue _fun34718
                }
            case 247: // try_start_0
                var8 = _closure1_slot20;
                var7 = var6;
                var7 = var7[var9];
                var7 = var8.bind(var5)(var7, var9);
            case 264: // try_end0
                _fun34718_ip = 236;
                continue _fun34718;
            case 266: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 273:
                var3 = var0;
                var1 = var3[Symbol.iterator];
                var3 = var1().next;
                var0 = undefined;
            case 284:
                var7 = var3().value;
                var5 = var1;
                if (!(var5 !== var0)) {
                    _fun34718_ip = 317;
                    continue _fun34718
                }
            case 295: // try_start_1
                var6 = _closure1_slot20;
                var5 = var4;
                var5 = var6.bind(var0)(var7, var5);
            case 308: // try_end1
                _fun34718_ip = 284;
                continue _fun34718;
            case 310: // catch_target1
                CatchBlockStart(arg_register = 0);
                var1.return();
                throw var0;
            case 317:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        var0 = '{}';
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useEffect;
    var _closure1_slot6 = var6;
    var3 = var3.useRef;
    var _closure1_slot7 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Platform;
    var3 = 3;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = var4.shouldBeUseWeb;
    var3 = var3.bind(var4)();
    var _closure1_slot8 = var3;
    var4 = {};
    var3 = "function prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,animatedProp,lastAnimation,lastValue){const prepareAnimation_Pnpm_useAnimatedStyleTs1=this._recur;if(Array.isArray(animatedProp)){animatedProp.forEach(function(prop,index){prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,prop,lastAnimation&&lastAnimation[index],lastValue&&lastValue[index]);});}if(typeof animatedProp==='object'&&animatedProp.onFrame){const animation=animatedProp;let value=animation.current;if(lastValue!==undefined&&lastValue!==null){if(typeof lastValue==='object'){if(lastValue.value!==undefined){value=lastValue.value;}else if(lastValue.onFrame!==undefined){if((lastAnimation===null||lastAnimation===void 0?void 0:lastAnimation.current)!==undefined){value=lastAnimation.current;}else if((lastValue===null||lastValue===void 0?void 0:lastValue.current)!==undefined){value=lastValue.current;}}}else{value=lastValue;}}animation.callStart=function(timestamp){animation.onStart(animation,value,timestamp,lastAnimation);};animation.callStart(frameTimestamp);animation.callStart=null;}else if(typeof animatedProp==='object'){Object.keys(animatedProp).forEach(function(key){return prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,animatedProp[key],lastAnimation&&lastAnimation[key],lastValue&&lastValue[key]);});}}";
    var4.code = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun34720: for (var _fun34720_ip = 0;;) switch (_fun34720_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var5 = arg2;
                var4 = arg3;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var1;
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var4;
                var0 = global;
                var7 = var0.Array;
                var6 = var7.isArray;
                var6 = var6.bind(var7)(var1);
                if (!var6) {
                    _fun34720_ip = 66;
                    continue _fun34720
                }
            case 51:
                var7 = var1.forEach;
                var6 = function(arg0, arg1) { // Environment: var2
                    _fun34721: for (var _fun34721_ip = 0;;) switch (_fun34721_ip) {
                        case 0:
                            var1 = arg1;
                            var5 = _closure1_slot3;
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot2;
                            if (!var3) {
                                _fun34721_ip = 32;
                                continue _fun34721
                            }
                        case 24:
                            var2 = _closure2_slot2;
                            var3 = var2[var1];
                        case 32:
                            var2 = _closure2_slot3;
                            if (!var2) {
                                _fun34721_ip = 47;
                                continue _fun34721
                            }
                        case 39:
                            var0 = _closure2_slot3;
                            var2 = var0[var1];
                        case 47:
                            var0 = undefined;
                            var9 = arg0;
                            var11 = undefined;
                            var10 = var4;
                            var8 = var3;
                            var7 = var2;
                            var1 = var11[var5](var10, var9, var8, var7, var6);
                            return var0;
                    }
                };
                var6 = var7.bind(var1)(var6);
            case 66:
                var7 = 'object';
                var6 = typeof var1;
                var6 = var7 === var6;
                if (!var6) {
                    _fun34720_ip = 89;
                    continue _fun34720
                }
            case 80:
                var8 = var1.onFrame;
                if (var8) {
                    _fun34720_ip = 131;
                    continue _fun34720
                }
            case 89:
                if (!var6) {
                    _fun34720_ip = 279;
                    continue _fun34720
                }
            case 95:
                var6 = var0.Object;
                var0 = var6.keys;
                var8 = var0.bind(var6)(var1);
                var6 = var8.forEach;
                var0 = function(arg0) { // Environment: var2
                    _fun34723: for (var _fun34723_ip = 0;;) switch (_fun34723_ip) {
                        case 0:
                            var6 = arg0;
                            var5 = _closure1_slot3;
                            var4 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var3 = var1[var6];
                            var2 = _closure2_slot2;
                            if (!var2) {
                                _fun34723_ip = 40;
                                continue _fun34723
                            }
                        case 32:
                            var1 = _closure2_slot2;
                            var2 = var1[var6];
                        case 40:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun34723_ip = 55;
                                continue _fun34723
                            }
                        case 47:
                            var0 = _closure2_slot3;
                            var1 = var0[var6];
                        case 55:
                            var0 = undefined;
                            var12 = undefined;
                            var11 = var4;
                            var10 = var3;
                            var9 = var2;
                            var8 = var1;
                            var1 = var12[var5](var11, var10, var9, var8, var7);
                            return var0;
                    }
                };
                var0 = var6.bind(var8)(var0);
                _fun34720_ip = 279;
                continue _fun34720;
            case 131:
                var _closure2_slot4 = var1;
                var0 = var1.current;
                var _closure2_slot5 = var0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun34720_ip = 251;
                    continue _fun34720
                }
            case 150:
                var6 = typeof var4;
                if (!(var7 !== var6)) {
                    _fun34720_ip = 163;
                    continue _fun34720
                }
            case 157:
                _closure2_slot5 = var4;
                _fun34720_ip = 251;
                continue _fun34720;
            case 163:
                var6 = var4.value;
                var7 = undefined;
                if (!(var7 === var6)) {
                    _fun34720_ip = 242;
                    continue _fun34720
                }
            case 174:
                var6 = var4.onFrame;
                if (!(var7 !== var6)) {
                    _fun34720_ip = 251;
                    continue _fun34720
                }
            case 184:
                var8 = var0 == var5;
                var6 = undefined;
                if (var8) {
                    _fun34720_ip = 198;
                    continue _fun34720
                }
            case 193:
                var6 = var5.current;
            case 198:
                if (!(var7 === var6)) {
                    _fun34720_ip = 231;
                    continue _fun34720
                }
            case 202:
                var8 = var0 == var4;
                var6 = undefined;
                if (var8) {
                    _fun34720_ip = 216;
                    continue _fun34720
                }
            case 211:
                var6 = var4.current;
            case 216:
                if (!(var7 !== var6)) {
                    _fun34720_ip = 251;
                    continue _fun34720
                }
            case 220:
                var6 = var4.current;
                _closure2_slot5 = var6;
                _fun34720_ip = 251;
                continue _fun34720;
            case 231:
                var5 = var5.current;
                _closure2_slot5 = var5;
                _fun34720_ip = 251;
                continue _fun34720;
            case 242:
                var4 = var4.value;
                _closure2_slot5 = var4;
            case 251:
                var2 = function(arg0) { // Environment: var2
                    var5 = _closure2_slot4;
                    var4 = var5.onStart;
                    var9 = _closure2_slot4;
                    var8 = _closure2_slot5;
                    var6 = _closure2_slot2;
                    var7 = arg0;
                    var10 = var5;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    var0 = undefined;
                    return var0;
                };
                var1.callStart = var2;
                var2 = var1.callStart;
                var2 = var2.bind(var1)(var3);
                var1.callStart = var0;
            case 279:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var5 = {};
    var3.__closure = var5;
    var5 = 14540565048240.0;
    var3.__workletHash = var5;
    var3.__initData = var4;
    var _closure1_slot9 = var3;
    var4 = {};
    var3 = "function runAnimations_Pnpm_useAnimatedStyleTs2(animation,timestamp,key,result,animationsActive,forceCopyAnimation){const runAnimations_Pnpm_useAnimatedStyleTs2=this._recur;if(!animationsActive.value){return true;}if(Array.isArray(animation)){result[key]=[];let allFinished=true;forceCopyAnimation=key==='boxShadow';animation.forEach(function(entry,index){if(!runAnimations_Pnpm_useAnimatedStyleTs2(entry,timestamp,index,result[key],animationsActive,forceCopyAnimation)){allFinished=false;}});return allFinished;}else if(typeof animation==='object'&&animation.onFrame){let finished=true;if(!animation.finished){if(animation.callStart){animation.callStart(timestamp);animation.callStart=null;}finished=animation.onFrame(animation,timestamp);animation.timestamp=timestamp;if(finished){animation.finished=true;animation.callback&&animation.callback(true);}}if(forceCopyAnimation){result[key]={...animation.current};}else{result[key]=animation.current;}return finished;}else if(typeof animation==='object'){result[key]={};let allFinished=true;Object.keys(animation).forEach(function(k){if(!runAnimations_Pnpm_useAnimatedStyleTs2(animation[k],timestamp,k,result[key],animationsActive,forceCopyAnimation)){allFinished=false;}});return allFinished;}else{result[key]=animation;return true;}}";
    var4.code = var3;
    var3 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        _fun34724: for (var _fun34724_ip = 0;;) switch (_fun34724_ip) {
            case 0:
                var3 = arg0;
                var8 = arg1;
                var2 = arg2;
                var4 = arg3;
                var1 = arg4;
                var5 = arg5;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var8;
                var _closure2_slot2 = var2;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var1;
                var _closure2_slot5 = var5;
                var1 = var1.value;
                if (var1) {
                    _fun34724_ip = 56;
                    continue _fun34724
                }
            case 52:
                var1 = true;
                return var1;
            case 56:
                var6 = global;
                var7 = var6.Array;
                var1 = var7.isArray;
                var1 = var1.bind(var7)(var3);
                if (var1) {
                    _fun34724_ip = 300;
                    continue _fun34724
                }
            case 80:
                var7 = 'object';
                var1 = typeof var3;
                var1 = var7 === var1;
                if (!var1) {
                    _fun34724_ip = 103;
                    continue _fun34724
                }
            case 94:
                var7 = var3.onFrame;
                if (var7) {
                    _fun34724_ip = 163;
                    continue _fun34724
                }
            case 103:
                if (var1) {
                    _fun34724_ip = 114;
                    continue _fun34724
                }
            case 106:
                var4[var2] = var3;
                var1 = true;
                return var1;
            case 114:
                var1 = {};
                var4[var2] = var1;
                var1 = true;
                var _closure2_slot7 = var1;
                var7 = var6.Object;
                var1 = var7.keys;
                var9 = var1.bind(var7)(var3);
                var7 = var9.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun34726: for (var _fun34726_ip = 0;;) switch (_fun34726_ip) {
                        case 0:
                            var8 = arg0;
                            var7 = _closure1_slot4;
                            var0 = _closure2_slot0;
                            var14 = var0[var8];
                            var13 = _closure2_slot1;
                            var1 = _closure2_slot3;
                            var0 = _closure2_slot2;
                            var11 = var1[var0];
                            var10 = _closure2_slot4;
                            var9 = _closure2_slot5;
                            var0 = undefined;
                            var15 = undefined;
                            var12 = var8;
                            var1 = var15[var7](var14, var13, var12, var11, var10, var9, var8);
                            if (var1) {
                                _fun34726_ip = 65;
                                continue _fun34726
                            }
                        case 59:
                            var1 = false;
                            _closure2_slot7 = var1;
                        case 65:
                            return var0;
                    }
                };
                var1 = var7.bind(var9)(var1);
                var1 = _closure2_slot7;
                return var1;
            case 163:
                var7 = var3.finished;
                var9 = true;
                var1 = true;
                if (var7) {
                    _fun34724_ip = 260;
                    continue _fun34724
                }
            case 176:
                var7 = var3.callStart;
                if (!var7) {
                    _fun34724_ip = 204;
                    continue _fun34724
                }
            case 185:
                var7 = var3.callStart;
                var7 = var7.bind(var3)(var8);
                var7 = null;
                var3.callStart = var7;
            case 204:
                var7 = var3.onFrame;
                var7 = var7.bind(var3)(var3, var8);
                var3.timestamp = var8;
                var1 = var7;
                if (!var7) {
                    _fun34724_ip = 260;
                    continue _fun34724
                }
            case 228:
                var3.finished = var9;
                var8 = var3.callback;
                var1 = var7;
                if (!var8) {
                    _fun34724_ip = 260;
                    continue _fun34724
                }
            case 246:
                var8 = var3.callback;
                var8 = var8.bind(var3)(var9);
                var1 = var7;
            case 260:
                if (var5) {
                    _fun34724_ip = 270;
                    continue _fun34724
                }
            case 263:
                var5 = var3.current;
                _fun34724_ip = 294;
                continue _fun34724;
            case 270:
                var9 = var6.Object;
                var8 = var9.assign;
                var7 = var3.current;
                var6 = {};
                var5 = var8.bind(var9)(var6, var7);
            case 294:
                var4[var2] = var5;
                return var1;
            case 300:
                var1 = new Array(0);
                var4[var2] = var1;
                var1 = true;
                var _closure2_slot6 = var1;
                var1 = 'boxShadow';
                var1 = var1 === var2;
                _closure2_slot5 = var1;
                var2 = var3.forEach;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun34725: for (var _fun34725_ip = 0;;) switch (_fun34725_ip) {
                        case 0:
                            var8 = _closure1_slot4;
                            var13 = _closure2_slot1;
                            var1 = _closure2_slot3;
                            var0 = _closure2_slot2;
                            var11 = var1[var0];
                            var10 = _closure2_slot4;
                            var9 = _closure2_slot5;
                            var0 = undefined;
                            var14 = arg0;
                            var12 = arg1;
                            var15 = undefined;
                            var1 = var15[var8](var14, var13, var12, var11, var10, var9, var8);
                            if (var1) {
                                _fun34725_ip = 57;
                                continue _fun34725
                            }
                        case 51:
                            var1 = false;
                            _closure2_slot6 = var1;
                        case 57:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var0 = _closure2_slot6;
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var5 = {};
    var3.__closure = var5;
    var5 = 2714844766543.0;
    var3.__workletHash = var5;
    var3.__initData = var4;
    var _closure1_slot10 = var3;
    var3 = {};
    var4 = "function styleUpdater_Pnpm_useAnimatedStyleTs3(viewDescriptors,updater,state,animationsActive,isAnimatedProps=false){const{SHOULD_BE_USE_WEB,processBoxShadow,isAnimated,prepareAnimation,runAnimations,updateProps,shallowEqual}=this.__closure;var _state$animations,_updater;const animations=(_state$animations=state.animations)!==null&&_state$animations!==void 0?_state$animations:{};const newValues=(_updater=updater())!==null&&_updater!==void 0?_updater:{};const oldValues=state.last;const nonAnimatedNewValues={};let hasAnimations=false;let frameTimestamp;let hasNonAnimatedValues=false;if(!SHOULD_BE_USE_WEB&&newValues.boxShadow){processBoxShadow(newValues);}for(const key in newValues){const value=newValues[key];if(isAnimated(value)){frameTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();prepareAnimation(frameTimestamp,value,animations[key],oldValues[key]);animations[key]=value;hasAnimations=true;}else{hasNonAnimatedValues=true;nonAnimatedNewValues[key]=value;delete animations[key];}}if(hasAnimations){const frame=function(timestamp){const{animations:animations,last:last,isAnimationCancelled:isAnimationCancelled}=state;if(isAnimationCancelled){state.isAnimationRunning=false;return;}const updates={};let allFinished=true;for(const propName in animations){const finished=runAnimations(animations[propName],timestamp,propName,updates,animationsActive);if(finished){if(Array.isArray(updates[propName])){updates[propName].forEach(function(obj){for(const prop in obj){if(!last[propName]||typeof last[propName]!=='object'){last[propName]={};}last[propName][prop]=obj[prop];}});}else{last[propName]=updates[propName];}delete animations[propName];}else{allFinished=false;}}if(updates){updateProps(viewDescriptors,updates);}if(!allFinished){requestAnimationFrame(frame);}else{state.isAnimationRunning=false;}};state.animations=animations;if(!state.isAnimationRunning){state.isAnimationCancelled=false;state.isAnimationRunning=true;frame(frameTimestamp);}if(hasNonAnimatedValues){updateProps(viewDescriptors,nonAnimatedNewValues);}}else{state.isAnimationCancelled=true;state.animations=[];if(!shallowEqual(oldValues,newValues)){updateProps(viewDescriptors,newValues,isAnimatedProps);}}state.last=newValues;}";
    var3.code = var4;
    var _closure1_slot11 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2, arg3() {
            _fun34728: for (var _fun34728_ip = 0;;) switch (_fun34728_ip) {
                case 0:
                    var6 = arg0;
                    var2 = arg2;
                    var0 = undefined;
                    var1 = undefined;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var2;
                    var3 = arg3;
                    var _closure3_slot2 = var3;
                    var3 = arguments.length;
                    var8 = 4;
                    var14 = var3 > var8;
                    if (!var14) {
                        _fun34728_ip = 48;
                        continue _fun34728
                    }
                case 40:
                    var3 = arguments[var8];
                    var14 = var0 !== var3;
                case 48:
                    if (!var14) {
                        _fun34728_ip = 55;
                        continue _fun34728
                    }
                case 51:
                    var14 = arguments[var8];
                case 55:
                    var11 = var2.animations;
                    var3 = null;
                    if (!(var3 == var11)) {
                        _fun34728_ip = 69;
                        continue _fun34728
                    }
                case 67:
                    var11 = {};
                case 69:
                    var1 = arg1;
                    var1 = var1.bind(var0)();
                    if (!(var3 == var1)) {
                        _fun34728_ip = 82;
                        continue _fun34728
                    }
                case 80:
                    var1 = {};
                case 82:
                    var15 = var2.last;
                    var5 = {};
                    var4 = _closure1_slot8;
                    var4 = !var4;
                    if (!var4) {
                        _fun34728_ip = 109;
                        continue _fun34728
                    }
                case 103:
                    var4 = var1.boxShadow;
                case 109:
                    if (!var4) {
                        _fun34728_ip = 140;
                        continue _fun34728
                    }
                case 112:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var7 = var7.bind(var0)(var4);
                    var4 = var7.processBoxShadow;
                    var4 = var4.bind(var7)(var1);
                case 140:
                    var22 = var1;
                    var10 = false;
                    var9 = true;
                    var16 = 5;
                    var18 = undefined;
                    var17 = false;
                    var13 = false;
                    var8 = undefined;
                    var7 = false;
                    var4 = false;
                    for (var19 in var22)
                        case 173: {
                            var24 = var13;
                            var8 = var18;
                            var7 = var17;
                            var4 = var24;
                            case 194: var27 = var19;
                            var26 = var1[var27];
                            var28 = _closure1_slot1;
                            var25 = _closure1_slot2;
                            var25 = var25[var16];
                            var28 = var28.bind(var0)(var25);
                            var25 = var28.isAnimated;
                            var25 = var25.bind(var28)(var26);
                            if (var25) {
                                _fun34728_ip = 244;
                                continue _fun34728
                            }
                            case 232: var5[var27] = var26;
                            var25 = delete var11[var27];
                            var13 = true;
                            _fun34728_ip = 173;
                            continue _fun34728;
                            case 244: var25 = _closure1_slot0;
                            var25 = var25.__frameTimestamp;
                            if (var25) {
                                _fun34728_ip = 271;
                                continue _fun34728
                            }
                            case 257: var29 = _closure1_slot0;
                            var28 = var29._getAnimationTimestamp;
                            var25 = var28.bind(var29)();
                            case 271: var30 = _closure1_slot9;
                            var32 = var11[var27];
                            var31 = var15[var27];
                            var35 = undefined;
                            var34 = var25;
                            var33 = var26;
                            var28 = var35[var30](var34, var33, var32, var31, var30);
                            var11[var27] = var26;
                            var18 = var25;
                            var17 = true;
                            var13 = var24;
                            _fun34728_ip = 173;
                            continue _fun34728;
                        }
                case 312:
                    if (var7) {
                        _fun34728_ip = 398;
                        continue _fun34728
                    }
                case 315:
                    var2.isAnimationCancelled = var9;
                    var7 = new Array(0);
                    var2.animations = var7;
                    var13 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var16];
                    var13 = var13.bind(var0)(var7);
                    var7 = var13.shallowEqual;
                    var7 = var7.bind(var13)(var15, var1);
                    if (var7) {
                        _fun34728_ip = 474;
                        continue _fun34728
                    }
                case 363:
                    var13 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var7 = 6;
                    var7 = var15[var7];
                    var13 = var13.bind(var0)(var7);
                    var7 = var13.updateProps;
                    var7 = var7.bind(var13)(var6, var1, var14);
                    _fun34728_ip = 474;
                    continue _fun34728;
                case 398:
                    var7 = function arg0() {
                        _fun34729: for (var _fun34729_ip = 0;;) switch (_fun34729_ip) {
                            case 0:
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var3 = _closure3_slot1;
                                var2 = var3.animations;
                                var _closure4_slot1 = var2;
                                var4 = var3.last;
                                var _closure4_slot2 = var4;
                                var3 = var3.isAnimationCancelled;
                                if (var3) {
                                    _fun34729_ip = 176;
                                    continue _fun34729
                                }
                            case 48:
                                var6 = {};
                                var _closure4_slot3 = var6;
                                var3 = true;
                                var _closure4_slot4 = var3;
                                var9 = function arg0() {
                                    _fun34730: for (var _fun34730_ip = 0;;) switch (_fun34730_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var _closure5_slot0 = var2;
                                            var8 = _closure1_slot10;
                                            var0 = _closure4_slot1;
                                            var13 = var0[var2];
                                            var12 = _closure4_slot0;
                                            var10 = _closure4_slot3;
                                            var9 = _closure3_slot2;
                                            var0 = undefined;
                                            var14 = undefined;
                                            var11 = var2;
                                            var4 = var14[var8](var13, var12, var11, var10, var9, var8);
                                            if (var4) {
                                                _fun34730_ip = 64;
                                                continue _fun34730
                                            }
                                        case 56:
                                            var4 = false;
                                            _closure4_slot4 = var4;
                                            _fun34730_ip = 142;
                                            continue _fun34730;
                                        case 64:
                                            var4 = global;
                                            var6 = var4.Array;
                                            var5 = var6.isArray;
                                            var4 = _closure4_slot3;
                                            var4 = var4[var2];
                                            var4 = var5.bind(var6)(var4);
                                            if (var4) {
                                                _fun34730_ip = 111;
                                                continue _fun34730
                                            }
                                        case 93:
                                            var5 = _closure4_slot2;
                                            var4 = _closure4_slot3;
                                            var4 = var4[var2];
                                            var5[var2] = var4;
                                            _fun34730_ip = 134;
                                            continue _fun34730;
                                        case 111:
                                            var4 = _closure4_slot3;
                                            var5 = var4[var2];
                                            var4 = var5.forEach;
                                            var3 = function(arg0) { // Environment: var3
                                                _fun34731: for (var _fun34731_ip = 0;;) switch (_fun34731_ip) {
                                                    case 0:
                                                        var8 = arg0;
                                                        var6 = var8;
                                                        var0 = 'object';
                                                        for (var3 in var6)
                                                            case 24: {
                                                                case 33: var11 = var3;
                                                                var10 = _closure4_slot2;
                                                                var9 = _closure5_slot0;
                                                                var9 = var10[var9];
                                                                if (!var9) {
                                                                    _fun34731_ip = 70;
                                                                    continue _fun34731
                                                                }
                                                                case 51: var12 = _closure4_slot2;
                                                                var10 = _closure5_slot0;
                                                                var10 = var12[var10];
                                                                var10 = typeof var10;
                                                                var9 = var0 === var10;
                                                                case 70: if (var9) {
                                                                    _fun34731_ip = 87;
                                                                    continue _fun34731
                                                                }
                                                                case 73: var12 = _closure4_slot2;
                                                                var10 = _closure5_slot0;
                                                                var9 = {};
                                                                var12[var10] = var9;
                                                                case 87: var10 = _closure4_slot2;
                                                                var9 = _closure5_slot0;
                                                                var10 = var10[var9];
                                                                var9 = var8[var11];
                                                                var10[var11] = var9;
                                                                _fun34731_ip = 24;
                                                                continue _fun34731;
                                                            }
                                                    case 109:
                                                        var0 = undefined;
                                                        return var0;
                                                }
                                            };
                                            var3 = var4.bind(var5)(var3);
                                        case 134:
                                            var1 = _closure4_slot1;
                                            var1 = delete var1[var2];
                                        case 142:
                                            return var0;
                                    }
                                };
                                var7 = var2;
                                var3 = undefined;
                                for (var2 in var7)
                                    case 78: {
                                        case 87: var10 = var2;
                                        var10 = var9.bind(var3)(var10);
                                        _fun34729_ip = 78;
                                        continue _fun34729;
                                    }
                            case 97:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 6;
                                var2 = var5[var2];
                                var5 = var4.bind(var3)(var2);
                                var4 = var5.updateProps;
                                var2 = _closure3_slot0;
                                var2 = var4.bind(var5)(var2, var6);
                                var1 = _closure4_slot4;
                                if (var1) {
                                    _fun34729_ip = 162;
                                    continue _fun34729
                                }
                            case 143:
                                var1 = global;
                                var2 = var1.requestAnimationFrame;
                                var1 = _closure3_slot3;
                                var1 = var2.bind(var3)(var1);
                                _fun34729_ip = 188;
                                continue _fun34729;
                            case 162:
                                var2 = _closure3_slot1;
                                var1 = false;
                                var2.isAnimationRunning = var1;
                                _fun34729_ip = 188;
                                continue _fun34729;
                            case 176:
                                var1 = _closure3_slot1;
                                var0 = false;
                                var1.isAnimationRunning = var0;
                            case 188:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot3 = var7;
                    var2.animations = var11;
                    var11 = var2.isAnimationRunning;
                    if (var11) {
                        _fun34728_ip = 439;
                        continue _fun34728
                    }
                case 422:
                    var2.isAnimationCancelled = var10;
                    var2.isAnimationRunning = var9;
                    var7 = var7.bind(var0)(var8);
                case 439:
                    if (!var4) {
                        _fun34728_ip = 474;
                        continue _fun34728
                    }
                case 442:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var3 = var7[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.updateProps;
                    var3 = var3.bind(var4)(var6, var5);
                case 474:
                    var2.last = var1;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot8;
        var2.SHOULD_BE_USE_WEB = var3;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 4;
        var3 = var6[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var3 = var3.processBoxShadow;
        var2.processBoxShadow = var3;
        var3 = 5;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.isAnimated;
        var2.isAnimated = var7;
        var7 = _closure1_slot9;
        var2.prepareAnimation = var7;
        var7 = _closure1_slot10;
        var2.runAnimations = var7;
        var7 = 6;
        var7 = var6[var7];
        var7 = var5.bind(var4)(var7);
        var7 = var7.updateProps;
        var2.updateProps = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.shallowEqual;
        var2.shallowEqual = var3;
        var0.__closure = var2;
        var2 = 58135325650.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot11;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot12 = var3;
    var3 = {};
    var4 = 'function jestStyleUpdater_Pnpm_useAnimatedStyleTs4(viewDescriptors,updater,state,animationsActive,animatedValues,adapters){const{isAnimated,prepareAnimation,runAnimations,updatePropsJestWrapper,shallowEqual}=this.__closure;var _state$animations,_updater;const animations=(_state$animations=state.animations)!==null&&_state$animations!==void 0?_state$animations:{};const newValues=(_updater=updater())!==null&&_updater!==void 0?_updater:{};const oldValues=state.last;let hasAnimations=false;let frameTimestamp;Object.keys(animations).forEach(function(key){const value=newValues[key];if(!isAnimated(value)){delete animations[key];}});Object.keys(newValues).forEach(function(key){const value=newValues[key];if(isAnimated(value)){frameTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();prepareAnimation(frameTimestamp,value,animations[key],oldValues[key]);animations[key]=value;hasAnimations=true;}});function frame(timestamp){const{animations:animations,last:last,isAnimationCancelled:isAnimationCancelled}=state;if(isAnimationCancelled){state.isAnimationRunning=false;return;}const updates={};let allFinished=true;Object.keys(animations).forEach(function(propName){const finished=runAnimations(animations[propName],timestamp,propName,updates,animationsActive);if(finished){last[propName]=updates[propName];delete animations[propName];}else{allFinished=false;}});if(Object.keys(updates).length){updatePropsJestWrapper(viewDescriptors,updates,animatedValues,adapters);}if(!allFinished){requestAnimationFrame(frame);}else{state.isAnimationRunning=false;}}if(hasAnimations){state.animations=animations;if(!state.isAnimationRunning){state.isAnimationCancelled=false;state.isAnimationRunning=true;frame(frameTimestamp);}}else{state.isAnimationCancelled=true;state.animations=[];}state.last=newValues;if(!shallowEqual(oldValues,newValues)){updatePropsJestWrapper(viewDescriptors,newValues,animatedValues,adapters);}}';
    var3.code = var4;
    var _closure1_slot13 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2, arg3, arg4, arg5() {
            _fun34733: for (var _fun34733_ip = 0;;) switch (_fun34733_ip) {
                case 0:
                    var6 = arg0;
                    var1 = arg2;
                    var5 = arg4;
                    var4 = arg5;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var1;
                    var0 = arg3;
                    var _closure3_slot2 = var0;
                    var _closure3_slot3 = var5;
                    var _closure3_slot4 = var4;
                    var9 = var1.animations;
                    var7 = null;
                    if (!(var7 == var9)) {
                        _fun34733_ip = 51;
                        continue _fun34733
                    }
                case 49:
                    var9 = {};
                case 51:
                    var _closure3_slot6 = var9;
                    var3 = arg1;
                    var0 = undefined;
                    var3 = var3.bind(var0)();
                    if (!(var7 == var3)) {
                        _fun34733_ip = 70;
                        continue _fun34733
                    }
                case 68:
                    var3 = {};
                case 70:
                    var _closure3_slot7 = var3;
                    var8 = var1.last;
                    var _closure3_slot8 = var8;
                    var7 = false;
                    var _closure3_slot9 = var7;
                    var10 = global;
                    var12 = var10.Object;
                    var11 = var12.keys;
                    var13 = var11.bind(var12)(var9);
                    var12 = var13.forEach;
                    var11 = function(arg0) { // Environment: var2
                        _fun34734: for (var _fun34734_ip = 0;;) switch (_fun34734_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = _closure3_slot7;
                                var5 = var0[var2];
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var0 = 5;
                                var3 = var3[var0];
                                var0 = undefined;
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.isAnimated;
                                var3 = var3.bind(var4)(var5);
                                if (var3) {
                                    _fun34734_ip = 61;
                                    continue _fun34734
                                }
                            case 53:
                                var1 = _closure3_slot6;
                                var1 = delete var1[var2];
                            case 61:
                                return var0;
                        }
                    };
                    var11 = var12.bind(var13)(var11);
                    var11 = var10.Object;
                    var10 = var11.keys;
                    var12 = var10.bind(var11)(var3);
                    var11 = var12.forEach;
                    var10 = function(arg0) { // Environment: var2
                        _fun34735: for (var _fun34735_ip = 0;;) switch (_fun34735_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = _closure3_slot7;
                                var3 = var0[var4];
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var0 = 5;
                                var5 = var5[var0];
                                var0 = undefined;
                                var6 = var6.bind(var0)(var5);
                                var5 = var6.isAnimated;
                                var5 = var5.bind(var6)(var3);
                                if (!var5) {
                                    _fun34735_ip = 130;
                                    continue _fun34735
                                }
                            case 53:
                                var5 = _closure1_slot0;
                                var7 = var5.__frameTimestamp;
                                if (var7) {
                                    _fun34735_ip = 80;
                                    continue _fun34735
                                }
                            case 66:
                                var6 = _closure1_slot0;
                                var5 = var6._getAnimationTimestamp;
                                var7 = var5.bind(var6)();
                            case 80:
                                var _closure3_slot5 = var7;
                                var6 = _closure1_slot9;
                                var1 = _closure3_slot6;
                                var9 = var1[var4];
                                var1 = _closure3_slot8;
                                var8 = var1[var4];
                                var12 = undefined;
                                var11 = var7;
                                var10 = var3;
                                var1 = var12[var6](var11, var10, var9, var8, var7);
                                var1 = _closure3_slot6;
                                var1[var4] = var3;
                                var1 = true;
                                _closure3_slot9 = var1;
                            case 130:
                                return var0;
                        }
                    };
                    var10 = var11.bind(var12)(var10);
                    var10 = _closure3_slot9;
                    if (var10) {
                        _fun34733_ip = 181;
                        continue _fun34733
                    }
                case 161:
                    var10 = true;
                    var1.isAnimationCancelled = var10;
                    var10 = new Array(0);
                    var1.animations = var10;
                    _fun34733_ip = 228;
                    continue _fun34733;
                case 181:
                    var1.animations = var9;
                    var9 = var1.isAnimationRunning;
                    if (var9) {
                        _fun34733_ip = 228;
                        continue _fun34733
                    }
                case 196:
                    var1.isAnimationCancelled = var7;
                    var7 = true;
                    var1.isAnimationRunning = var7;
                    var7 = function arg0() {
                        _fun34736: for (var _fun34736_ip = 0;;) switch (_fun34736_ip) {
                            case 0:
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var1 = _closure3_slot1;
                                var5 = var1.animations;
                                var _closure4_slot1 = var5;
                                var3 = var1.last;
                                var _closure4_slot2 = var3;
                                var1 = var1.isAnimationCancelled;
                                if (var1) {
                                    _fun34736_ip = 210;
                                    continue _fun34736
                                }
                            case 48:
                                var8 = {};
                                var _closure4_slot3 = var8;
                                var1 = true;
                                var _closure4_slot4 = var1;
                                var1 = global;
                                var4 = var1.Object;
                                var3 = var4.keys;
                                var5 = var3.bind(var4)(var5);
                                var4 = var5.forEach;
                                var3 = function(arg0) { // Environment: var2
                                    _fun34737: for (var _fun34737_ip = 0;;) switch (_fun34737_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var7 = _closure1_slot10;
                                            var0 = _closure4_slot1;
                                            var12 = var0[var2];
                                            var11 = _closure4_slot0;
                                            var9 = _closure4_slot3;
                                            var8 = _closure3_slot2;
                                            var0 = undefined;
                                            var13 = undefined;
                                            var10 = var2;
                                            var3 = var13[var7](var12, var11, var10, var9, var8, var7);
                                            if (var3) {
                                                _fun34737_ip = 58;
                                                continue _fun34737
                                            }
                                        case 50:
                                            var3 = false;
                                            _closure4_slot4 = var3;
                                            _fun34737_ip = 82;
                                            continue _fun34737;
                                        case 58:
                                            var4 = _closure4_slot2;
                                            var3 = _closure4_slot3;
                                            var3 = var3[var2];
                                            var4[var2] = var3;
                                            var1 = _closure4_slot1;
                                            var1 = delete var1[var2];
                                        case 82:
                                            return var0;
                                    }
                                };
                                var3 = var4.bind(var5)(var3);
                                var4 = var1.Object;
                                var3 = var4.keys;
                                var3 = var3.bind(var4)(var8);
                                var3 = var3.length;
                                if (!var3) {
                                    _fun34736_ip = 170;
                                    continue _fun34736
                                }
                            case 117:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var3 = 6;
                                var4 = var4[var3];
                                var3 = undefined;
                                var7 = var5.bind(var3)(var4);
                                var6 = var7.updatePropsJestWrapper;
                                var12 = _closure3_slot0;
                                var10 = _closure3_slot3;
                                var9 = _closure3_slot4;
                                var13 = var7;
                                var11 = var8;
                                var3 = var13[var6](var12, var11, var10, var9, var8);
                            case 170:
                                var2 = _closure4_slot4;
                                if (var2) {
                                    _fun34736_ip = 196;
                                    continue _fun34736
                                }
                            case 177:
                                var3 = var1.requestAnimationFrame;
                                var2 = _closure3_slot10;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                _fun34736_ip = 222;
                                continue _fun34736;
                            case 196:
                                var2 = _closure3_slot1;
                                var1 = false;
                                var2.isAnimationRunning = var1;
                                _fun34736_ip = 222;
                                continue _fun34736;
                            case 210:
                                var1 = _closure3_slot1;
                                var0 = false;
                                var1.isAnimationRunning = var0;
                            case 222:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot10 = var7;
                    var2 = _closure3_slot5;
                    var2 = var7.bind(var0)(var2);
                case 228:
                    var1.last = var3;
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 5;
                    var2 = var9[var2];
                    var7 = var7.bind(var0)(var2);
                    var2 = var7.shallowEqual;
                    var2 = var2.bind(var7)(var8, var3);
                    if (var2) {
                        _fun34733_ip = 317;
                        continue _fun34733
                    }
                case 272:
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 6;
                    var1 = var7[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.updatePropsJestWrapper;
                    var18 = var2;
                    var17 = var6;
                    var16 = var3;
                    var15 = var5;
                    var14 = var4;
                    var1 = var18[var1](var17, var16, var15, var14, var13);
                case 317:
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 5;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.isAnimated;
        var2.isAnimated = var7;
        var7 = _closure1_slot9;
        var2.prepareAnimation = var7;
        var7 = _closure1_slot10;
        var2.runAnimations = var7;
        var7 = 6;
        var7 = var6[var7];
        var7 = var5.bind(var4)(var7);
        var7 = var7.updatePropsJestWrapper;
        var2.updatePropsJestWrapper = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.shallowEqual;
        var2.shallowEqual = var3;
        var0.__closure = var2;
        var2 = 1062035865445.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot13;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot14 = var3;
    var3 = {};
    var4 = 'function pnpm_useAnimatedStyleTs5(){const{updater,adaptersArray}=this.__closure;const newValues=updater();adaptersArray.forEach(function(adapter){adapter(newValues);});return newValues;}';
    var3.code = var4;
    var _closure1_slot15 = var3;
    var3 = {};
    var4 = 'function pnpm_useAnimatedStyleTs6(){const{jestStyleUpdater,shareableViewDescriptors,updater,remoteState,areAnimationsActive,jestAnimatedValues,adaptersArray}=this.__closure;jestStyleUpdater(shareableViewDescriptors,updater,remoteState,areAnimationsActive,jestAnimatedValues,adaptersArray);}';
    var3.code = var4;
    var _closure1_slot16 = var3;
    var3 = {};
    var4 = 'function pnpm_useAnimatedStyleTs7(){const{styleUpdater,shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps}=this.__closure;styleUpdater(shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps);}';
    var3.code = var4;
    var _closure1_slot17 = var3;
    var3 = {};
    var4 = 'function pnpm_useAnimatedStyleTs8(){const{styleUpdater,shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps}=this.__closure;styleUpdater(shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps);remoteState.isFirstRun=false;}';
    var3.code = var4;
    var _closure1_slot18 = var3;
    var3 = {};
    var4 = 'function pnpm_useAnimatedStyleTs9(){const{remoteState}=this.__closure;return remoteState.isFirstRun=true;}';
    var3.code = var4;
    var _closure1_slot19 = var3;
    var1 = function arg0, arg1, arg2() {
        _fun34738: for (var _fun34738_ip = 0;;) switch (_fun34738_ip) {
            case 0:
                var13 = arg0;
                var5 = arg1;
                var4 = arg2;
                var7 = undefined;
                var2 = undefined;
                var _closure2_slot0 = var13;
                var _closure2_slot1 = var4;
                var1 = arguments.length;
                var8 = 3;
                var1 = var1 > var8;
                if (!var1) {
                    _fun34738_ip = 44;
                    continue _fun34738
                }
            case 36:
                var3 = arguments[var8];
                var1 = var7 !== var3;
            case 44:
                if (!var1) {
                    _fun34738_ip = 51;
                    continue _fun34738
                }
            case 47:
                var1 = arguments[var8];
            case 51:
                var _closure2_slot2 = var1;
                var2 = _closure1_slot7;
                var1 = null;
                var2 = var2.bind(var7)(var1);
                var6 = global;
                var11 = var6.Object;
                var10 = var11.values;
                var9 = var13.__closure;
                if (!(var1 == var9)) {
                    _fun34738_ip = 93;
                    continue _fun34738
                }
            case 91:
                var9 = {};
            case 93:
                var10 = var10.bind(var11)(var9);
                var _closure2_slot3 = var10;
                var9 = _closure1_slot8;
                if (!var9) {
                    _fun34738_ip = 117;
                    continue _fun34738
                }
            case 109:
                var11 = var10.length;
                var9 = !var11;
            case 117:
                var11 = undefined;
                if (!var9) {
                    _fun34738_ip = 129;
                    continue _fun34738
                }
            case 122:
                var9 = var1 != var5;
                var11 = var5;
            case 129:
                if (!var9) {
                    _fun34738_ip = 137;
                    continue _fun34738
                }
            case 132:
                var9 = var11.length;
            case 137:
                var11 = var10;
                if (!var9) {
                    _fun34738_ip = 150;
                    continue _fun34738
                }
            case 143:
                _closure2_slot3 = var5;
                var11 = var5;
            case 150:
                if (var4) {
                    _fun34738_ip = 159;
                    continue _fun34738
                }
            case 153:
                var10 = new Array(0);
                _fun34738_ip = 195;
                continue _fun34738;
            case 159:
                var9 = var6.Array;
                var6 = var9.isArray;
                var9 = var6.bind(var9)(var4);
                var6 = var4;
                if (var9) {
                    _fun34738_ip = 192;
                    continue _fun34738
                }
            case 181:
                var9 = new Array(1);
                var9[0] = var4;
                var6 = var9;
            case 192:
                var10 = var6;
            case 195:
                var _closure2_slot4 = var10;
                var6 = null;
                if (!var4) {
                    _fun34738_ip = 235;
                    continue _fun34738
                }
            case 204:
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 5;
                var4 = var12[var4];
                var9 = var9.bind(var7)(var4);
                var4 = var9.buildWorkletsHash;
                var6 = var4.bind(var9)(var10);
            case 235:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 8;
                var4 = var10[var4];
                var10 = var9.bind(var7)(var4);
                var9 = var10.useSharedValue;
                var4 = true;
                var10 = var9.bind(var10)(var4);
                var _closure2_slot5 = var10;
                var9 = _closure1_slot7;
                var4 = {};
                var4 = var9.bind(var7)(var4);
                var _closure2_slot6 = var4;
                if (var5) {
                    _fun34738_ip = 329;
                    continue _fun34738
                }
            case 290:
                var14 = new Array(0);
                var12 = var14.concat;
                var9 = _closure1_slot5;
                var11 = var9.bind(var7)(var11);
                var15 = var13.__workletHash;
                var9 = new Array(1);
                var9[0] = var15;
                var11 = var12.bind(var14)(var11, var9);
                _fun34738_ip = 347;
                continue _fun34738;
            case 329:
                var12 = var5.push;
                var9 = var13.__workletHash;
                var9 = var12.bind(var5)(var9);
                var11 = var5;
            case 347:
                if (!var6) {
                    _fun34738_ip = 360;
                    continue _fun34738
                }
            case 350:
                var5 = var11.push;
                var5 = var5.bind(var11)(var6);
            case 360:
                var5 = var2.current;
                if (var5) {
                    _fun34738_ip = 509;
                    continue _fun34738
                }
            case 371:
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 9;
                var5 = var12[var5];
                var6 = var9.bind(var7)(var5);
                var5 = var6.initialUpdaterRun;
                var15 = var5.bind(var6)(var13);
                var5 = {};
                var6 = {};
                var6.value = var15;
                var6.updater = var13;
                var5.initial = var6;
                var6 = 10;
                var6 = var12[var6];
                var14 = var9.bind(var7)(var6);
                var13 = var14.makeShareable;
                var6 = {
                    'last': null,
                    'animations': null,
                    'isAnimationCancelled': false,
                    'isAnimationRunning': false,
                    'isFirstRun': true
                };
                var6.last = var15;
                var15 = {};
                var6.animations = var15;
                var6 = var13.bind(var14)(var6);
                var5.remoteState = var6;
                var6 = 11;
                var6 = var12[var6];
                var9 = var9.bind(var7)(var6);
                var6 = var9.makeViewDescriptorsSet;
                var6 = var6.bind(var9)();
                var5.viewDescriptors = var6;
                var2.current = var5;
            case 509:
                var2 = var2.current;
                var5 = var2.initial;
                var6 = var2.remoteState;
                var _closure2_slot7 = var6;
                var6 = var2.viewDescriptors;
                var9 = var6.shareableViewDescriptors;
                var _closure2_slot8 = var9;
                var2 = var11.push;
                var2 = var2.bind(var11)(var9);
                var9 = _closure1_slot6;
                var2 = function() { // Environment: var0
                    _fun34739: for (var _fun34739_ip = 0;;) switch (_fun34739_ip) {
                        case 0:
                            var6 = _closure2_slot0;
                            var _closure3_slot0 = var6;
                            var2 = _closure2_slot1;
                            if (!var2) {
                                _fun34739_ip = 87;
                                continue _fun34739
                            }
                        case 20:
                            var2 = function() {
                                var3 = _closure2_slot0;
                                var0 = undefined;
                                var0 = var3.bind(var0)();
                                var _closure4_slot0 = var0;
                                var3 = _closure2_slot4;
                                var2 = var3.forEach;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = _closure4_slot0;
                                    var1 = arg0;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)(var2);
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var3 = {};
                            var4 = _closure2_slot0;
                            var3.updater = var4;
                            var4 = _closure2_slot4;
                            var3.adaptersArray = var4;
                            var2.__closure = var3;
                            var3 = 2827602676287.0;
                            var2.__workletHash = var3;
                            var3 = _closure1_slot15;
                            var2.__initData = var3;
                            _closure3_slot0 = var2;
                            var6 = var2;
                        case 87:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 3;
                            var3 = var5[var3];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.isJest;
                            var3 = var3.bind(var4)();
                            if (var3) {
                                _fun34739_ip = 277;
                                continue _fun34739
                            }
                        case 128:
                            var3 = function() {
                                var6 = _closure1_slot12;
                                var11 = _closure2_slot8;
                                var10 = _closure3_slot0;
                                var9 = _closure2_slot7;
                                var8 = _closure2_slot5;
                                var7 = _closure2_slot2;
                                var0 = undefined;
                                var12 = undefined;
                                var1 = var12[var6](var11, var10, var9, var8, var7, var6);
                                return var0;
                            };
                            var4 = {};
                            var7 = _closure1_slot12;
                            var4.styleUpdater = var7;
                            var7 = _closure2_slot8;
                            var4.shareableViewDescriptors = var7;
                            var4.updaterFn = var6;
                            var6 = _closure2_slot7;
                            var4.remoteState = var6;
                            var6 = _closure2_slot5;
                            var4.areAnimationsActive = var6;
                            var6 = _closure2_slot2;
                            var4.isAnimatedProps = var6;
                            var3.__closure = var4;
                            var4 = 10567228834479.0;
                            var3.__workletHash = var4;
                            var4 = _closure1_slot17;
                            var3.__initData = var4;
                            var6 = global;
                            var4 = var6.globalThis;
                            var4 = var4._IS_FABRIC;
                            var7 = !var4;
                            if (!var7) {
                                _fun34739_ip = 247;
                                continue _fun34739
                            }
                        case 237:
                            var4 = _closure2_slot7;
                            var7 = var4.isFirstRun;
                        case 247:
                            var4 = var3;
                            if (!var7) {
                                _fun34739_ip = 384;
                                continue _fun34739
                            }
                        case 256:
                            var7 = var6.requestAnimationFrame;
                            var6 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 10;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.runOnUI;
                                var1 = function() {
                                    var7 = _closure1_slot12;
                                    var12 = _closure2_slot8;
                                    var11 = _closure3_slot0;
                                    var10 = _closure2_slot7;
                                    var9 = _closure2_slot5;
                                    var8 = _closure2_slot2;
                                    var0 = undefined;
                                    var13 = undefined;
                                    var2 = var13[var7](var12, var11, var10, var9, var8, var7);
                                    var2 = _closure2_slot7;
                                    var1 = false;
                                    var2.isFirstRun = var1;
                                    return var0;
                                };
                                var5 = {};
                                var6 = _closure1_slot12;
                                var5.styleUpdater = var6;
                                var7 = _closure2_slot8;
                                var5.shareableViewDescriptors = var7;
                                var7 = _closure3_slot0;
                                var5.updaterFn = var7;
                                var7 = _closure2_slot7;
                                var5.remoteState = var7;
                                var7 = _closure2_slot5;
                                var5.areAnimationsActive = var7;
                                var6 = _closure2_slot2;
                                var5.isAnimatedProps = var6;
                                var1.__closure = var5;
                                var5 = 11622360674991.0;
                                var1.__workletHash = var5;
                                var4 = _closure1_slot18;
                                var1.__initData = var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var6 = var7.bind(var5)(var6);
                            var4 = var3;
                            _fun34739_ip = 384;
                            continue _fun34739;
                        case 277:
                            var3 = function() {
                                var7 = _closure1_slot14;
                                var13 = _closure2_slot8;
                                var12 = _closure2_slot0;
                                var11 = _closure2_slot7;
                                var10 = _closure2_slot5;
                                var9 = _closure2_slot6;
                                var8 = _closure2_slot4;
                                var0 = undefined;
                                var14 = undefined;
                                var1 = var14[var7](var13, var12, var11, var10, var9, var8, var7);
                                return var0;
                            };
                            var6 = {};
                            var7 = _closure1_slot14;
                            var6.jestStyleUpdater = var7;
                            var7 = _closure2_slot8;
                            var6.shareableViewDescriptors = var7;
                            var7 = _closure2_slot0;
                            var6.updater = var7;
                            var7 = _closure2_slot7;
                            var6.remoteState = var7;
                            var7 = _closure2_slot5;
                            var6.areAnimationsActive = var7;
                            var7 = _closure2_slot6;
                            var6.jestAnimatedValues = var7;
                            var7 = _closure2_slot4;
                            var6.adaptersArray = var7;
                            var3.__closure = var6;
                            var6 = 16463232807054.0;
                            var3.__workletHash = var6;
                            var6 = _closure1_slot16;
                            var3.__initData = var6;
                            var4 = var3;
                        case 384:
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 10;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.startMapper;
                            var1 = _closure2_slot3;
                            var1 = var2.bind(var3)(var4, var1);
                            var _closure3_slot1 = var1;
                            var0 = function() { // Environment: var0
                                _fun34746: for (var _fun34746_ip = 0;;) switch (_fun34746_ip) {
                                    case 0:
                                        var2 = _closure1_slot1;
                                        var0 = _closure1_slot2;
                                        var3 = 10;
                                        var1 = var0[var3];
                                        var0 = undefined;
                                        var5 = var2.bind(var0)(var1);
                                        var2 = var5.stopMapper;
                                        var1 = _closure3_slot1;
                                        var1 = var2.bind(var5)(var1);
                                        var1 = global;
                                        var1 = var1.globalThis;
                                        var1 = var1._IS_FABRIC;
                                        if (var1) {
                                            _fun34746_ip = 145;
                                            continue _fun34746
                                        }
                                    case 60:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var1 = var1[var3];
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.runOnUI;
                                        var1 = function() {
                                            var1 = _closure2_slot7;
                                            var0 = true;
                                            var1.isFirstRun = var0;
                                            return var0;
                                        };
                                        var5 = {};
                                        var6 = _closure2_slot7;
                                        var5.remoteState = var6;
                                        var1.__closure = var5;
                                        var5 = 6168210089002.0;
                                        var1.__workletHash = var5;
                                        var4 = _closure1_slot19;
                                        var1.__initData = var4;
                                        var1 = var2.bind(var3)(var1);
                                        var1 = var1.bind(var0)();
                                    case 145:
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var2 = var9.bind(var7)(var2, var11);
                var2 = new Array(1);
                var2[0] = var10;
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot5;
                    var0 = true;
                    var1.value = var0;
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot5;
                        var0 = false;
                        var1.value = var0;
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var0 = var9.bind(var7)(var0, var2);
                var2 = _closure1_slot20;
                var0 = var5.value;
                var0 = var2.bind(var7)(var0);
                var0 = _closure1_slot7;
                var0 = var0.bind(var7)(var1);
                var1 = var0.current;
                if (var1) {
                    _fun34738_ip = 700;
                    continue _fun34738
                }
            case 621:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var2 = var2.bind(var7)(var1);
                var1 = var2.isJest;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun34738_ip = 665;
                    continue _fun34738
                }
            case 651:
                var1 = {};
                var1.viewDescriptors = var6;
                var1.initial = var5;
                _fun34738_ip = 694;
                continue _fun34738;
            case 665:
                var2 = {};
                var2.viewDescriptors = var6;
                var2.initial = var5;
                var2.jestAnimatedValues = var4;
                var3 = _closure1_slot21;
                var2.toJSON = var3;
                var1 = var2;
            case 694:
                var0.current = var1;
            case 700:
                var0 = var0.current;
                return var0;
        }
    };
    var2.useAnimatedStyle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 31, 27, 3685, 3833, 3828, 3783, 3693, 3834, 3754, 3726, 3781]);