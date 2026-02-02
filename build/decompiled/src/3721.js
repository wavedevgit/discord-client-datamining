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
    var3 = "function resolvePath_Pnpm_styleAnimationTs1(obj,path){const keys=Array.isArray(path)?path:[path];return keys.reduce(function(acc,current){if(Array.isArray(acc)&&typeof current==='number'){return acc[current];}else if(acc!==null&&typeof acc==='object'&&current in acc){return acc[current];}return undefined;},obj);}";
    var0.code = var3;
    var _closure1_slot2 = var0;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            _fun33339: for (var _fun33339_ip = 0;;) switch (_fun33339_ip) {
                case 0:
                    var1 = arg1;
                    var0 = global;
                    var2 = var0.Array;
                    var0 = var2.isArray;
                    var0 = var0.bind(var2)(var1);
                    var3 = var1;
                    if (var0) {
                        _fun33339_ip = 38;
                        continue _fun33339
                    }
                case 27:
                    var0 = new Array(1);
                    var0[0] = var1;
                    var3 = var0;
                case 38:
                    var2 = var3.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        _fun33340: for (var _fun33340_ip = 0;;) switch (_fun33340_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = arg1;
                                var0 = global;
                                var3 = var0.Array;
                                var0 = var3.isArray;
                                var0 = var0.bind(var3)(var2);
                                if (!var0) {
                                    _fun33340_ip = 38;
                                    continue _fun33340
                                }
                            case 27:
                                var3 = 'number';
                                var0 = typeof var1;
                                if (!(var3 !== var0)) {
                                    _fun33340_ip = 68;
                                    continue _fun33340
                                }
                            case 38:
                                var3 = null;
                                var0 = undefined;
                                if (!(var3 !== var2)) {
                                    _fun33340_ip = 72;
                                    continue _fun33340
                                }
                            case 46:
                                var5 = 'object';
                                var3 = typeof var2;
                                var0 = undefined;
                                if (!(var5 === var3)) {
                                    _fun33340_ip = 72;
                                    continue _fun33340
                                }
                            case 59:
                                var3 = var1 in var2;
                                var0 = undefined;
                                if (!var3) {
                                    _fun33340_ip = 72;
                                    continue _fun33340
                                }
                            case 68:
                                var0 = var2[var1];
                            case 72:
                                return var0;
                        }
                    };
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 6511886988303.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var3 = var3.bind(var0)();
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = "function setPath_Pnpm_styleAnimationTs2(obj,path,value){const keys=Array.isArray(path)?path:[path];let currObj=obj;for(let i=0;i<keys.length-1;i++){currObj=currObj;if(!(keys[i]in currObj)){if(typeof keys[i+1]==='number'){currObj[keys[i]]=[];}else{currObj[keys[i]]={};}}currObj=currObj[keys[i]];}currObj[keys[keys.length-1]]=value;}";
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun33342: for (var _fun33342_ip = 0;;) switch (_fun33342_ip) {
                case 0:
                    var2 = arg0;
                    var3 = arg1;
                    var0 = global;
                    var1 = var0.Array;
                    var0 = var1.isArray;
                    var0 = var0.bind(var1)(var3);
                    var1 = var3;
                    if (var0) {
                        _fun33342_ip = 41;
                        continue _fun33342
                    }
                case 30:
                    var0 = new Array(1);
                    var0[0] = var3;
                    var1 = var0;
                case 41:
                    var0 = var1.length;
                    var3 = 1;
                    var0 = var0 - var3;
                    var5 = 'number';
                    var4 = var2;
                    var2 = var4;
                    var6 = 0;
                    if (!(var6 < var0)) {
                        _fun33342_ip = 146;
                        continue _fun33342
                    }
                case 69:
                    var0 = var1[var6];
                    var0 = var0 in var4;
                    if (var0) {
                        _fun33342_ip = 119;
                        continue _fun33342
                    }
                case 80:
                    var0 = var6 + var3;
                    var0 = var1[var0];
                    var0 = typeof var0;
                    if (!(var5 !== var0)) {
                        _fun33342_ip = 107;
                        continue _fun33342
                    }
                case 95:
                    var7 = var1[var6];
                    var0 = {};
                    var4[var7] = var0;
                    _fun33342_ip = 119;
                    continue _fun33342;
                case 107:
                    var7 = var1[var6];
                    var0 = new Array(0);
                    var4[var7] = var0;
                case 119:
                    var0 = var1[var6];
                    var4 = var4[var0];
                    var6 = var6 + 1;
                    var0 = var1.length;
                    var0 = var0 - var3;
                    var2 = var4;
                    if (var6 < var0) {
                        _fun33342_ip = 69;
                        continue _fun33342
                    }
                case 146:
                    var0 = var1.length;
                    var0 = var0 - var3;
                    var1 = var1[var0];
                    var0 = arg2;
                    var2[var1] = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 1936400546748.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 'function withStyleAnimation_Pnpm_styleAnimationTs3(styleAnimations){const{defineAnimation,ColorProperties,setPath,processColor,resolvePath,__DEV__,logger,isValidLayoutAnimationProp,withTiming}=this.__closure;return defineAnimation({},function(){\'worklet\';const onFrame=function(animation,now){let stillGoing=false;const entriesToCheck=[{value:animation.styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value===\'object\'&&currentEntry.value.onFrame===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const currentStyleAnimation=currentEntry.value;if(currentStyleAnimation.finished){continue;}const finished=currentStyleAnimation.onFrame(currentStyleAnimation,now);if(finished){currentStyleAnimation.finished=true;if(currentStyleAnimation.callback){currentStyleAnimation.callback(true);}}else{stillGoing=true;}const isAnimatingColorProp=ColorProperties.includes(currentEntry.path[0]);setPath(animation.current,currentEntry.path,isAnimatingColorProp?processColor(currentStyleAnimation.current):currentStyleAnimation.current);}}return!stillGoing;};const onStart=function(animation,value,now,previousAnimation){const entriesToCheck=[{value:styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value===\'object\'&&currentEntry.value.onStart===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const prevAnimation=resolvePath(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.styleAnimations,currentEntry.path);let prevVal=resolvePath(value,currentEntry.path);if(prevAnimation&&!prevVal){prevVal=prevAnimation.current;}if(__DEV__){if(prevVal===undefined){logger.warn("Initial values for animation are missing for property "+currentEntry.path.join(\'.\'));}const propName=currentEntry.path[0];if(typeof propName===\'string\'&&!isValidLayoutAnimationProp(propName.trim())){logger.warn("\'"+propName+"\' property is not officially supported for layout animations. It may not work as expected.");}}setPath(animation.current,currentEntry.path,prevVal);let currentAnimation;if(typeof currentEntry.value!==\'object\'||!currentEntry.value.onStart){currentAnimation=withTiming(currentEntry.value,{duration:0});setPath(animation.styleAnimations,currentEntry.path,currentAnimation);}else{currentAnimation=currentEntry.value;}currentAnimation.onStart(currentAnimation,prevVal,now,prevAnimation);}}};const callback=function(finished){if(!finished){const animationsToCheck=[styleAnimations];while(animationsToCheck.length>0){const currentAnimation=animationsToCheck.pop();if(Array.isArray(currentAnimation)){for(const element of currentAnimation){animationsToCheck.push(element);}}else if(typeof currentAnimation===\'object\'&&currentAnimation.onStart===undefined){for(const value of Object.values(currentAnimation)){animationsToCheck.push(value);}}else{const currentStyleAnimation=currentAnimation;if(!currentStyleAnimation.finished&&currentStyleAnimation.callback){currentStyleAnimation.callback(false);}}}}};return{isHigherOrder:true,onFrame:onFrame,onStart:onStart,current:{},styleAnimations:styleAnimations,callback:callback};});}';
    var3.code = var4;
    var _closure1_slot6 = var3;
    var3 = {};
    var4 = 'function pnpm_styleAnimationTs4(){const{ColorProperties,setPath,processColor,styleAnimations,resolvePath,__DEV__,logger,isValidLayoutAnimationProp,withTiming}=this.__closure;const onFrame=function(animation,now){let stillGoing=false;const entriesToCheck=[{value:animation.styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value===\'object\'&&currentEntry.value.onFrame===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const currentStyleAnimation=currentEntry.value;if(currentStyleAnimation.finished){continue;}const finished=currentStyleAnimation.onFrame(currentStyleAnimation,now);if(finished){currentStyleAnimation.finished=true;if(currentStyleAnimation.callback){currentStyleAnimation.callback(true);}}else{stillGoing=true;}const isAnimatingColorProp=ColorProperties.includes(currentEntry.path[0]);setPath(animation.current,currentEntry.path,isAnimatingColorProp?processColor(currentStyleAnimation.current):currentStyleAnimation.current);}}return!stillGoing;};const onStart=function(animation,value,now,previousAnimation){const entriesToCheck=[{value:styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value===\'object\'&&currentEntry.value.onStart===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const prevAnimation=resolvePath(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.styleAnimations,currentEntry.path);let prevVal=resolvePath(value,currentEntry.path);if(prevAnimation&&!prevVal){prevVal=prevAnimation.current;}if(__DEV__){if(prevVal===undefined){logger.warn("Initial values for animation are missing for property "+currentEntry.path.join(\'.\'));}const propName=currentEntry.path[0];if(typeof propName===\'string\'&&!isValidLayoutAnimationProp(propName.trim())){logger.warn("\'"+propName+"\' property is not officially supported for layout animations. It may not work as expected.");}}setPath(animation.current,currentEntry.path,prevVal);let currentAnimation;if(typeof currentEntry.value!==\'object\'||!currentEntry.value.onStart){currentAnimation=withTiming(currentEntry.value,{duration:0});setPath(animation.styleAnimations,currentEntry.path,currentAnimation);}else{currentAnimation=currentEntry.value;}currentAnimation.onStart(currentAnimation,prevVal,now,prevAnimation);}}};const callback=function(finished){if(!finished){const animationsToCheck=[styleAnimations];while(animationsToCheck.length>0){const currentAnimation=animationsToCheck.pop();if(Array.isArray(currentAnimation)){for(const element of currentAnimation){animationsToCheck.push(element);}}else if(typeof currentAnimation===\'object\'&&currentAnimation.onStart===undefined){for(const value of Object.values(currentAnimation)){animationsToCheck.push(value);}}else{const currentStyleAnimation=currentAnimation;if(!currentStyleAnimation.finished&&currentStyleAnimation.callback){currentStyleAnimation.callback(false);}}}}};return{isHigherOrder:true,onFrame:onFrame,onStart:onStart,current:{},styleAnimations:styleAnimations,callback:callback};}';
    var3.code = var4;
    var _closure1_slot7 = var3;
    var1 = function() { // Environment: var1
        var0 = function arg0() {
            var9 = arg0;
            var _closure3_slot0 = var9;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 0;
            var2 = var8[var5];
            var6 = undefined;
            var3 = var7.bind(var6)(var2);
            var2 = var3.defineAnimation;
            var1 = function() {
                var0 = {};
                var2 = true;
                var0.isHigherOrder = var2;
                var2 = function arg0, arg1() {
                    _fun33346: for (var _fun33346_ip = 0;;) switch (_fun33346_ip) {
                        case 0:
                            var15 = arg0;
                            var14 = arg1;
                            var11 = undefined;
                            var12 = undefined;
                            var13 = undefined;
                            var1 = {};
                            var0 = var15.styleAnimations;
                            var1.value = var0;
                            var0 = new Array(0);
                            var1.path = var0;
                            var0 = new Array(1);
                            var0[0] = var1;
                            var12 = var0;
                            var0 = var0.length;
                            var10 = 0;
                            var1 = var0 > var10;
                            var4 = false;
                            var9 = global;
                            var7 = 1;
                            var6 = true;
                            var5 = 'object';
                            var3 = undefined;
                            var2 = undefined;
                            var0 = false;
                            if (!var1) {
                                _fun33346_ip = 606;
                                continue _fun33346
                            }
                        case 83:
                            var16 = var12;
                            var1 = var16.pop;
                            var1 = var1.bind(var16)();
                            var13 = var1;
                            var17 = var9.Array;
                            var16 = var17.isArray;
                            var1 = var1.value;
                            var16 = var16.bind(var17)(var1);
                            var1 = var13;
                            var1 = var1.value;
                            if (var16) {
                                _fun33346_ip = 479;
                                continue _fun33346
                            }
                        case 134:
                            var16 = typeof var1;
                            if (!(var5 === var16)) {
                                _fun33346_ip = 162;
                                continue _fun33346
                            }
                        case 141:
                            var16 = var13;
                            var16 = var16.value;
                            var16 = var16.onFrame;
                            if (!(var11 !== var16)) {
                                _fun33346_ip = 365;
                                continue _fun33346
                            }
                        case 162:
                            var16 = var13;
                            var19 = var16.value;
                            var20 = var19.finished;
                            var16 = var4;
                            var18 = var3;
                            var17 = var19;
                            if (var20) {
                                _fun33346_ip = 579;
                                continue _fun33346
                            }
                        case 191:
                            var20 = var19.onFrame;
                            var21 = var20.bind(var19)(var19, var14);
                            var20 = true;
                            if (!var21) {
                                _fun33346_ip = 240;
                                continue _fun33346
                            }
                        case 208:
                            var19.finished = var6;
                            var21 = var19.callback;
                            var20 = var4;
                            if (!var21) {
                                _fun33346_ip = 240;
                                continue _fun33346
                            }
                        case 226:
                            var21 = var19.callback;
                            var21 = var21.bind(var19)(var6);
                            var20 = var4;
                        case 240:
                            var22 = _closure1_slot0;
                            var21 = _closure1_slot1;
                            var21 = var21[var7];
                            var21 = var22.bind(var11)(var21);
                            var24 = var21.ColorProperties;
                            var23 = var24.includes;
                            var22 = var13;
                            var21 = var22.path;
                            var21 = var21[var10];
                            var21 = var23.bind(var24)(var21);
                            var24 = _closure1_slot5;
                            var23 = var15.current;
                            var22 = var22.path;
                            if (var21) {
                                _fun33346_ip = 311;
                                continue _fun33346
                            }
                        case 304:
                            var21 = var19.current;
                            _fun33346_ip = 344;
                            continue _fun33346;
                        case 311:
                            var26 = _closure1_slot0;
                            var25 = _closure1_slot1;
                            var25 = var25[var7];
                            var27 = var26.bind(var11)(var25);
                            var26 = var27.processColor;
                            var25 = var19.current;
                            var21 = var26.bind(var27)(var25);
                        case 344:
                            var21 = var24.bind(var11)(var23, var22, var21);
                            var16 = var20;
                            var18 = var3;
                            var17 = var19;
                            _fun33346_ip = 579;
                            continue _fun33346;
                        case 365:
                            var21 = var9.Object;
                            var20 = var21.keys;
                            var19 = var13;
                            var19 = var19.value;
                            var21 = var20.bind(var21)(var19);
                            var19 = var21;
                            var20 = var19[Symbol.iterator];
                            var19 = var20().next;
                        case 395:
                            var26 = var19().value;
                            var21 = var20;
                            var16 = var4;
                            var18 = var3;
                            var17 = var2;
                            if (!(var21 !== var11)) {
                                _fun33346_ip = 579;
                                continue _fun33346
                            }
                        case 418: // try_start_0
                            var23 = var12;
                            var22 = var23.push;
                            var21 = {};
                            var24 = var13;
                            var25 = var24.value;
                            var25 = var25[var26];
                            var21.value = var25;
                            var25 = var24.path;
                            var24 = var25.concat;
                            var24 = var24.bind(var25)(var26);
                            var21.path = var24;
                            var21 = var22.bind(var23)(var21);
                        case 470: // try_end0
                            _fun33346_ip = 395;
                            continue _fun33346;
                        case 472: // catch_target0
                            CatchBlockStart(arg_register = 19);
                            var20.return();
                            throw var19;
                        case 479:
                            var1 = var1.length;
                            var1 = var10 < var1;
                            var19 = 0;
                            var16 = var4;
                            var18 = 0;
                            var17 = var2;
                            if (!var1) {
                                _fun33346_ip = 579;
                                continue _fun33346
                            }
                        case 501:
                            var22 = var12;
                            var21 = var22.push;
                            var20 = {};
                            var1 = var13;
                            var23 = var1.value;
                            var23 = var23[var19];
                            var20.value = var23;
                            var24 = var1.path;
                            var23 = var24.concat;
                            var23 = var23.bind(var24)(var19);
                            var20.path = var23;
                            var20 = var21.bind(var22)(var20);
                            var19 = var19 + 1;
                            var1 = var1.value;
                            var1 = var1.length;
                            var16 = var4;
                            var17 = var2;
                            var18 = var19;
                            if (var18 < var1) {
                                _fun33346_ip = 501;
                                continue _fun33346
                            }
                        case 579:
                            var1 = var12;
                            var1 = var1.length;
                            var4 = var16;
                            var3 = var18;
                            var2 = var17;
                            var0 = var4;
                            if (var1 > var10) {
                                _fun33346_ip = 83;
                                continue _fun33346
                            }
                        case 606:
                            var0 = !var0;
                            return var0;
                    }
                };
                var0.onFrame = var2;
                var2 = function arg0, arg1, arg2, arg3() {
                    _fun33347: for (var _fun33347_ip = 0;;) switch (_fun33347_ip) {
                        case 0:
                            var17 = arg0;
                            var16 = arg1;
                            var15 = arg2;
                            var14 = arg3;
                            var0 = undefined;
                            var12 = undefined;
                            var13 = undefined;
                            var2 = {};
                            var1 = _closure3_slot0;
                            var2.value = var1;
                            var1 = new Array(0);
                            var2.path = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var12 = var1;
                            var1 = var1.length;
                            var11 = 0;
                            var1 = var1 > var11;
                            var10 = global;
                            var8 = 2;
                            var7 = 'object';
                            var6 = null;
                            var5 = undefined;
                            var4 = undefined;
                            var3 = undefined;
                            var2 = undefined;
                            if (!var1) {
                                _fun33347_ip = 648;
                                continue _fun33347
                            }
                        case 90:
                            var18 = var12;
                            var1 = var18.pop;
                            var1 = var1.bind(var18)();
                            var13 = var1;
                            var19 = var10.Array;
                            var18 = var19.isArray;
                            var1 = var1.value;
                            var18 = var18.bind(var19)(var1);
                            var1 = var13;
                            var1 = var1.value;
                            if (var18) {
                                _fun33347_ip = 515;
                                continue _fun33347
                            }
                        case 141:
                            var18 = typeof var1;
                            if (!(var7 === var18)) {
                                _fun33347_ip = 169;
                                continue _fun33347
                            }
                        case 148:
                            var18 = var13;
                            var18 = var18.value;
                            var18 = var18.onStart;
                            if (!(var0 !== var18)) {
                                _fun33347_ip = 398;
                                continue _fun33347
                            }
                        case 169:
                            var21 = _closure1_slot3;
                            var18 = var6 == var14;
                            var20 = undefined;
                            if (var18) {
                                _fun33347_ip = 188;
                                continue _fun33347
                            }
                        case 182:
                            var20 = var14.styleAnimations;
                        case 188:
                            var18 = var13;
                            var19 = var18.path;
                            var20 = var21.bind(var0)(var20, var19);
                            var19 = _closure1_slot3;
                            var18 = var18.path;
                            var19 = var19.bind(var0)(var16, var18);
                            var18 = var20;
                            if (!var20) {
                                _fun33347_ip = 228;
                                continue _fun33347
                            }
                        case 225:
                            var18 = !var19;
                        case 228:
                            if (!var18) {
                                _fun33347_ip = 236;
                                continue _fun33347
                            }
                        case 231:
                            var19 = var20.current;
                        case 236:
                            var23 = _closure1_slot5;
                            var22 = var17.current;
                            var18 = var13;
                            var21 = var18.path;
                            var21 = var23.bind(var0)(var22, var21, var19);
                            var18 = var18.value;
                            var18 = typeof var18;
                            if (!(var7 === var18)) {
                                _fun33347_ip = 290;
                                continue _fun33347
                            }
                        case 273:
                            var18 = var13;
                            var18 = var18.value;
                            var18 = var18.onStart;
                            if (var18) {
                                _fun33347_ip = 357;
                                continue _fun33347
                            }
                        case 290:
                            var21 = _closure1_slot0;
                            var18 = _closure1_slot1;
                            var18 = var18[var8];
                            var24 = var21.bind(var0)(var18);
                            var23 = var24.withTiming;
                            var21 = var13;
                            var22 = var21.value;
                            var18 = {};
                            var18.duration = var11;
                            var18 = var23.bind(var24)(var22, var18);
                            var23 = _closure1_slot5;
                            var22 = var17.styleAnimations;
                            var21 = var21.path;
                            var21 = var23.bind(var0)(var22, var21, var18);
                            _fun33347_ip = 365;
                            continue _fun33347;
                        case 357:
                            var21 = var13;
                            var18 = var21.value;
                        case 365:
                            var21 = var18.onStart;
                            var34 = var18;
                            var33 = var18;
                            var32 = var19;
                            var31 = var15;
                            var30 = var20;
                            var21 = var34[var21](var33, var32, var31, var30, var29);
                            var21 = var5;
                            _fun33347_ip = 621;
                            continue _fun33347;
                        case 398:
                            var24 = var10.Object;
                            var23 = var24.keys;
                            var22 = var13;
                            var22 = var22.value;
                            var24 = var23.bind(var24)(var22);
                            var22 = var24;
                            var23 = var22[Symbol.iterator];
                            var22 = var23().next;
                        case 428:
                            var29 = var22().value;
                            var24 = var23;
                            var21 = var5;
                            var20 = var4;
                            var19 = var3;
                            var18 = var2;
                            if (!(var24 !== var0)) {
                                _fun33347_ip = 621;
                                continue _fun33347
                            }
                        case 454: // try_start_0
                            var26 = var12;
                            var25 = var26.push;
                            var24 = {};
                            var27 = var13;
                            var28 = var27.value;
                            var28 = var28[var29];
                            var24.value = var28;
                            var28 = var27.path;
                            var27 = var28.concat;
                            var27 = var27.bind(var28)(var29);
                            var24.path = var27;
                            var24 = var25.bind(var26)(var24);
                        case 506: // try_end0
                            _fun33347_ip = 428;
                            continue _fun33347;
                        case 508: // catch_target0
                            CatchBlockStart(arg_register = 22);
                            var23.return();
                            throw var22;
                        case 515:
                            var1 = var1.length;
                            var1 = var11 < var1;
                            var22 = 0;
                            var21 = 0;
                            var20 = var4;
                            var19 = var3;
                            var18 = var2;
                            if (!var1) {
                                _fun33347_ip = 621;
                                continue _fun33347
                            }
                        case 540:
                            var25 = var12;
                            var24 = var25.push;
                            var23 = {};
                            var1 = var13;
                            var26 = var1.value;
                            var26 = var26[var22];
                            var23.value = var26;
                            var27 = var1.path;
                            var26 = var27.concat;
                            var26 = var26.bind(var27)(var22);
                            var23.path = var26;
                            var23 = var24.bind(var25)(var23);
                            var22 = var22 + 1;
                            var1 = var1.value;
                            var1 = var1.length;
                            var20 = var4;
                            var19 = var3;
                            var18 = var2;
                            var21 = var22;
                            if (var21 < var1) {
                                _fun33347_ip = 540;
                                continue _fun33347
                            }
                        case 621:
                            var1 = var12;
                            var1 = var1.length;
                            var5 = var21;
                            var4 = var20;
                            var3 = var19;
                            var2 = var18;
                            if (var1 > var11) {
                                _fun33347_ip = 90;
                                continue _fun33347
                            }
                        case 648:
                            return var0;
                    }
                };
                var0.onStart = var2;
                var2 = {};
                var0.current = var2;
                var2 = _closure3_slot0;
                var0.styleAnimations = var2;
                var1 = function arg0() {
                    _fun33348: for (var _fun33348_ip = 0;;) switch (_fun33348_ip) {
                        case 0:
                            var0 = undefined;
                            var7 = undefined;
                            var1 = arg0;
                            if (var1) {
                                _fun33348_ip = 265;
                                continue _fun33348
                            }
                        case 13:
                            var2 = _closure3_slot0;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var7 = var1;
                            var1 = var1.length;
                            var6 = 0;
                            var1 = var1 > var6;
                            var5 = global;
                            var4 = false;
                            var3 = 'object';
                            var2 = undefined;
                            if (!var1) {
                                _fun33348_ip = 265;
                                continue _fun33348
                            }
                        case 58:
                            var8 = var7;
                            var1 = var8.pop;
                            var10 = var1.bind(var8)();
                            var8 = var5.Array;
                            var1 = var8.isArray;
                            var1 = var1.bind(var8)(var10);
                            if (var1) {
                                _fun33348_ip = 205;
                                continue _fun33348
                            }
                        case 90:
                            var1 = typeof var10;
                            if (!(var3 === var1)) {
                                _fun33348_ip = 107;
                                continue _fun33348
                            }
                        case 97:
                            var1 = var10.onStart;
                            if (!(var0 !== var1)) {
                                _fun33348_ip = 147;
                                continue _fun33348
                            }
                        case 107:
                            var1 = var10.finished;
                            var1 = !var1;
                            if (!var1) {
                                _fun33348_ip = 125;
                                continue _fun33348
                            }
                        case 119:
                            var1 = var10.callback;
                        case 125:
                            var8 = var10;
                            if (!var1) {
                                _fun33348_ip = 247;
                                continue _fun33348
                            }
                        case 131:
                            var1 = var10.callback;
                            var1 = var1.bind(var10)(var4);
                            var8 = var10;
                            _fun33348_ip = 247;
                            continue _fun33348;
                        case 147:
                            var9 = var5.Object;
                            var1 = var9.values;
                            var11 = var1.bind(var9)(var10);
                            var1 = var11;
                            var9 = var1[Symbol.iterator];
                            var1 = var9().next;
                        case 169:
                            var13 = var1().value;
                            var11 = var9;
                            var8 = var2;
                            if (!(var11 !== var0)) {
                                _fun33348_ip = 247;
                                continue _fun33348
                            }
                        case 183: // try_start_0
                            var12 = var7;
                            var11 = var12.push;
                            var11 = var11.bind(var12)(var13);
                        case 196: // try_end0
                            _fun33348_ip = 169;
                            continue _fun33348;
                        case 198: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var9.return();
                            throw var1;
                        case 205:
                            var1 = var10;
                            var9 = var1[Symbol.iterator];
                            var1 = var9().next;
                        case 211:
                            var12 = var1().value;
                            var10 = var9;
                            var8 = var2;
                            if (!(var10 !== var0)) {
                                _fun33348_ip = 247;
                                continue _fun33348
                            }
                        case 225: // try_start_1
                            var11 = var7;
                            var10 = var11.push;
                            var10 = var10.bind(var11)(var12);
                        case 238: // try_end1
                            _fun33348_ip = 211;
                            continue _fun33348;
                        case 240: // catch_target1
                            CatchBlockStart(arg_register = 1);
                            var9.return();
                            throw var1;
                        case 247:
                            var1 = var7;
                            var1 = var1.length;
                            var2 = var8;
                            if (var1 > var6) {
                                _fun33348_ip = 58;
                                continue _fun33348
                            }
                        case 265:
                            return var0;
                    }
                };
                var0.callback = var1;
                return var0;
            };
            var4 = {};
            var10 = 1;
            var11 = var8[var10];
            var11 = var7.bind(var6)(var11);
            var11 = var11.ColorProperties;
            var4.ColorProperties = var11;
            var11 = _closure1_slot5;
            var4.setPath = var11;
            var10 = var8[var10];
            var10 = var7.bind(var6)(var10);
            var10 = var10.processColor;
            var4.processColor = var10;
            var4.styleAnimations = var9;
            var9 = _closure1_slot3;
            var4.resolvePath = var9;
            var9 = false;
            var4.__DEV__ = var9;
            var9 = 3;
            var9 = var8[var9];
            var9 = var7.bind(var6)(var9);
            var9 = var9.logger;
            var4.logger = var9;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.isValidLayoutAnimationProp;
            var4.isValidLayoutAnimationProp = var5;
            var5 = 2;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.withTiming;
            var4.withTiming = var5;
            var1.__closure = var4;
            var4 = 1293354823532.0;
            var1.__workletHash = var4;
            var0 = _closure1_slot7;
            var1.__initData = var0;
            var0 = {};
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var2 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 0;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.defineAnimation;
        var2.defineAnimation = var7;
        var7 = 1;
        var8 = var6[var7];
        var8 = var5.bind(var4)(var8);
        var8 = var8.ColorProperties;
        var2.ColorProperties = var8;
        var8 = _closure1_slot5;
        var2.setPath = var8;
        var7 = var6[var7];
        var7 = var5.bind(var4)(var7);
        var7 = var7.processColor;
        var2.processColor = var7;
        var7 = _closure1_slot3;
        var2.resolvePath = var7;
        var7 = false;
        var2.__DEV__ = var7;
        var7 = 3;
        var7 = var6[var7];
        var7 = var5.bind(var4)(var7);
        var7 = var7.logger;
        var2.logger = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.isValidLayoutAnimationProp;
        var2.isValidLayoutAnimationProp = var3;
        var3 = 2;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.withTiming;
        var2.withTiming = var3;
        var0.__closure = var2;
        var2 = 3046356752495.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot6;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.withStyleAnimation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3722, 3725, 3733, 3686]);