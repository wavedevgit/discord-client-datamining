// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var1 = {};
    var3 = "function withSequence_Pnpm_sequenceTs1(_reduceMotionOrFirstAnimation,..._animations){const{logger,defineAnimation,getReduceMotionForAnimation}=this.__closure;let reduceMotion;if(_reduceMotionOrFirstAnimation){if(typeof _reduceMotionOrFirstAnimation==='string'){reduceMotion=_reduceMotionOrFirstAnimation;}else{_animations.unshift(_reduceMotionOrFirstAnimation);}}if(_animations.length===0){logger.warn('No animation was provided for the sequence');return defineAnimation(0,function(){'worklet';return{onStart:function(animation,value){return animation.current=value;},onFrame:function(){return true;},current:0,animationIndex:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}return defineAnimation(_animations[0],function(){'worklet';const animations=_animations.map(function(a){const result=typeof a==='function'?a():a;result.finished=false;return result;});function findNextNonReducedMotionAnimationIndex(index){while(index<animations.length-1&&animations[index].reduceMotion){index++;}return index;}const callback=function(finished){if(finished){return;}animations.forEach(function(animation){if(typeof animation.callback==='function'&&!animation.finished){animation.callback(finished);}});};function sequence(animation,now){const currentAnim=animations[animation.animationIndex];const finished=currentAnim.onFrame(currentAnim,now);animation.current=currentAnim.current;if(finished){if(currentAnim.callback){currentAnim.callback(true);}currentAnim.finished=true;animation.animationIndex=findNextNonReducedMotionAnimationIndex(animation.animationIndex+1);if(animation.animationIndex<animations.length){const nextAnim=animations[animation.animationIndex];nextAnim.onStart(nextAnim,currentAnim.current,now,currentAnim);return false;}return true;}return false;}function onStart(animation,value,now,previousAnimation){animations.forEach(function(anim){if(anim.reduceMotion===undefined){anim.reduceMotion=animation.reduceMotion;}});animation.animationIndex=findNextNonReducedMotionAnimationIndex(0);if(previousAnimation===undefined){previousAnimation=animations[animations.length-1];}const currentAnimation=animations[animation.animationIndex];currentAnimation.onStart(currentAnimation,value,now,previousAnimation);}return{isHigherOrder:true,onFrame:sequence,onStart:onStart,animationIndex:0,current:animations[0].current,callback:callback,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}";
    var1.code = var3;
    var _closure1_slot2 = var1;
    var1 = {};
    var3 = 'function pnpm_sequenceTs2(){const{getReduceMotionForAnimation,reduceMotion}=this.__closure;return{onStart:function(animation,value){return animation.current=value;},onFrame:function(){return true;},current:0,animationIndex:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}';
    var1.code = var3;
    var _closure1_slot3 = var1;
    var1 = {};
    var3 = "function pnpm_sequenceTs3(){const{_animations,getReduceMotionForAnimation,reduceMotion}=this.__closure;const animations=_animations.map(function(a){const result=typeof a==='function'?a():a;result.finished=false;return result;});function findNextNonReducedMotionAnimationIndex(index){while(index<animations.length-1&&animations[index].reduceMotion){index++;}return index;}const callback=function(finished){if(finished){return;}animations.forEach(function(animation){if(typeof animation.callback==='function'&&!animation.finished){animation.callback(finished);}});};function sequence(animation,now){const currentAnim=animations[animation.animationIndex];const finished=currentAnim.onFrame(currentAnim,now);animation.current=currentAnim.current;if(finished){if(currentAnim.callback){currentAnim.callback(true);}currentAnim.finished=true;animation.animationIndex=findNextNonReducedMotionAnimationIndex(animation.animationIndex+1);if(animation.animationIndex<animations.length){const nextAnim=animations[animation.animationIndex];nextAnim.onStart(nextAnim,currentAnim.current,now,currentAnim);return false;}return true;}return false;}function onStart(animation,value,now,previousAnimation){animations.forEach(function(anim){if(anim.reduceMotion===undefined){anim.reduceMotion=animation.reduceMotion;}});animation.animationIndex=findNextNonReducedMotionAnimationIndex(0);if(previousAnimation===undefined){previousAnimation=animations[animations.length-1];}const currentAnimation=animations[animation.animationIndex];currentAnimation.onStart(currentAnimation,value,now,previousAnimation);}return{isHigherOrder:true,onFrame:sequence,onStart:onStart,animationIndex:0,current:animations[0].current,callback:callback,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}";
    var1.code = var3;
    var _closure1_slot4 = var1;
    var1 = function() { // Environment: var0
        var0 = function arg0() {
            _fun33926: for (var _fun33926_ip = 0;;) switch (_fun33926_ip) {
                case 0:
                    var2 = arg0;
                    var10 = undefined;
                    var5 = undefined;
                    var3 = arguments.length;
                    var0 = global;
                    var7 = var0.Array;
                    var11 = 1;
                    var6 = var3 > var11;
                    var4 = 0;
                    var0 = 0;
                    if (!var6) {
                        _fun33926_ip = 38;
                        continue _fun33926
                    }
                case 34:
                    var0 = var3 - var11;
                case 38:
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var16 = var6;
                    var15 = var0;
                    var0 = new var16[var7](var15, var14);
                    var13 = var0 instanceof Object ? var0 : var6;
                    var _closure3_slot0 = var13;
                    var6 = var11 < var3;
                    var0 = var11;
                    if (!var6) {
                        _fun33926_ip = 94;
                        continue _fun33926
                    }
                case 75:
                    var7 = var0 - var11;
                    var6 = arguments[var0];
                    var13[var7] = var6;
                    var0 = var0 + 1;
                    if (var0 < var3) {
                        _fun33926_ip = 75;
                        continue _fun33926
                    }
                case 94:
                    var7 = undefined;
                    if (!var2) {
                        _fun33926_ip = 135;
                        continue _fun33926
                    }
                case 99:
                    var3 = 'string';
                    var0 = typeof var2;
                    if (!(var3 !== var0)) {
                        _fun33926_ip = 125;
                        continue _fun33926
                    }
                case 110:
                    var0 = var13.unshift;
                    var0 = var0.bind(var13)(var2);
                    var0 = undefined;
                    _fun33926_ip = 132;
                    continue _fun33926;
                case 125:
                    var _closure3_slot1 = var2;
                    var0 = var2;
                case 132:
                    var7 = var0;
                case 135:
                    var0 = var13.length;
                    if (!(var4 !== var0)) {
                        _fun33926_ip = 256;
                        continue _fun33926
                    }
                case 144:
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var0 = var9[var11];
                    var5 = var12.bind(var10)(var0);
                    var3 = var5.defineAnimation;
                    var2 = var13[var4];
                    var0 = function() {
                        var0 = function arg0() {
                            _fun33931: for (var _fun33931_ip = 0;;) switch (_fun33931_ip) {
                                case 0:
                                    var5 = arg0;
                                    var0 = _closure4_slot0;
                                    var0 = var0.length;
                                    var3 = 1;
                                    var1 = var0 - var3;
                                    var0 = var5;
                                    if (!(var5 < var1)) {
                                        _fun33931_ip = 98;
                                        continue _fun33931
                                    }
                                case 29:
                                    var1 = _closure4_slot0;
                                    var1 = var1[var5];
                                    var1 = var1.reduceMotion;
                                    var2 = var5;
                                    var0 = var2;
                                    if (!var1) {
                                        _fun33931_ip = 98;
                                        continue _fun33931
                                    }
                                case 52:
                                    var5 = var2 + 1;
                                    var1 = _closure4_slot0;
                                    var1 = var1.length;
                                    var1 = var1 - var3;
                                    var0 = var5;
                                    if (!(var5 < var1)) {
                                        _fun33931_ip = 98;
                                        continue _fun33931
                                    }
                                case 75:
                                    var1 = _closure4_slot0;
                                    var1 = var1[var5];
                                    var1 = var1.reduceMotion;
                                    var2 = var5;
                                    var0 = var2;
                                    if (var1) {
                                        _fun33931_ip = 52;
                                        continue _fun33931
                                    }
                                case 98:
                                    return var0;
                            }
                        };
                        var _closure4_slot1 = var0;
                        var4 = _closure3_slot0;
                        var3 = var4.map;
                        var0 = function(arg0) { // Environment: var2
                            _fun33932: for (var _fun33932_ip = 0;;) switch (_fun33932_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = 'function';
                                    var1 = typeof var2;
                                    var0 = var2;
                                    if (!(var3 === var1)) {
                                        _fun33932_ip = 23;
                                        continue _fun33932
                                    }
                                case 17:
                                    var1 = undefined;
                                    var0 = var2.bind(var1)();
                                case 23:
                                    var1 = false;
                                    var0.finished = var1;
                                    return var0;
                            }
                        };
                        var4 = var3.bind(var4)(var0);
                        var _closure4_slot0 = var4;
                        var0 = {};
                        var3 = true;
                        var0.isHigherOrder = var3;
                        var3 = function arg0, arg1() {
                            _fun33933: for (var _fun33933_ip = 0;;) switch (_fun33933_ip) {
                                case 0:
                                    var0 = arg0;
                                    var4 = arg1;
                                    var3 = _closure4_slot0;
                                    var2 = var0.animationIndex;
                                    var3 = var3[var2];
                                    var2 = var3.onFrame;
                                    var2 = var2.bind(var3)(var3, var4);
                                    var5 = var3.current;
                                    var0.current = var5;
                                    if (var2) {
                                        _fun33933_ip = 53;
                                        continue _fun33933
                                    }
                                case 49:
                                    var2 = false;
                                    return var2;
                                case 53:
                                    var2 = var3.callback;
                                    if (!var2) {
                                        _fun33933_ip = 75;
                                        continue _fun33933
                                    }
                                case 62:
                                    var5 = var3.callback;
                                    var2 = true;
                                    var2 = var5.bind(var3)(var2);
                                case 75:
                                    var2 = true;
                                    var3.finished = var2;
                                    var7 = _closure4_slot1;
                                    var6 = var0.animationIndex;
                                    var5 = 1;
                                    var6 = var6 + var5;
                                    var5 = undefined;
                                    var5 = var7.bind(var5)(var6);
                                    var0.animationIndex = var5;
                                    var6 = var0.animationIndex;
                                    var5 = _closure4_slot0;
                                    var5 = var5.length;
                                    if (!(!(var6 < var5))) {
                                        _fun33933_ip = 134;
                                        continue _fun33933
                                    }
                                case 132:
                                    return var2;
                                case 134:
                                    var1 = _closure4_slot0;
                                    var0 = var0.animationIndex;
                                    var2 = var1[var0];
                                    var1 = var2.onStart;
                                    var10 = var3.current;
                                    var12 = var2;
                                    var11 = var2;
                                    var9 = var4;
                                    var8 = var3;
                                    var0 = var12[var1](var11, var10, var9, var8, var7);
                                    var0 = false;
                                    return var0;
                            }
                        };
                        var0.onFrame = var3;
                        var3 = function arg0, arg1, arg2, arg3() {
                            _fun33934: for (var _fun33934_ip = 0;;) switch (_fun33934_ip) {
                                case 0:
                                    var1 = arg0;
                                    var5 = arg3;
                                    var _closure5_slot0 = var1;
                                    var4 = _closure4_slot0;
                                    var3 = var4.forEach;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun33935: for (var _fun33935_ip = 0;;) switch (_fun33935_ip) {
                                            case 0:
                                                var2 = arg0;
                                                var1 = var2.reduceMotion;
                                                var0 = undefined;
                                                if (!(var0 === var1)) {
                                                    _fun33935_ip = 34;
                                                    continue _fun33935
                                                }
                                            case 15:
                                                var1 = _closure5_slot0;
                                                var1 = var1.reduceMotion;
                                                var2.reduceMotion = var1;
                                            case 34:
                                                return var0;
                                        }
                                    };
                                    var0 = var3.bind(var4)(var0);
                                    var4 = _closure4_slot1;
                                    var0 = undefined;
                                    var3 = 0;
                                    var3 = var4.bind(var0)(var3);
                                    var1.animationIndex = var3;
                                    if (!(var0 === var5)) {
                                        _fun33934_ip = 77;
                                        continue _fun33934
                                    }
                                case 57:
                                    var4 = _closure4_slot0;
                                    var6 = var4.length;
                                    var3 = 1;
                                    var3 = var6 - var3;
                                    var5 = var4[var3];
                                case 77:
                                    var2 = _closure4_slot0;
                                    var1 = var1.animationIndex;
                                    var4 = var2[var1];
                                    var3 = var4.onStart;
                                    var9 = arg1;
                                    var8 = arg2;
                                    var11 = var4;
                                    var10 = var4;
                                    var7 = var5;
                                    var1 = var11[var3](var10, var9, var8, var7, var6);
                                    return var0;
                            }
                        };
                        var0.onStart = var3;
                        var3 = 0;
                        var0.animationIndex = var3;
                        var3 = var4[var3];
                        var3 = var3.current;
                        var0.current = var3;
                        var2 = function arg0() {
                            _fun33936: for (var _fun33936_ip = 0;;) switch (_fun33936_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    if (var1) {
                                        _fun33936_ip = 34;
                                        continue _fun33936
                                    }
                                case 12:
                                    var2 = _closure4_slot0;
                                    var1 = var2.forEach;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun33937: for (var _fun33937_ip = 0;;) switch (_fun33937_ip) {
                                            case 0:
                                                var2 = arg0;
                                                var0 = var2.callback;
                                                var1 = 'function';
                                                var0 = typeof var0;
                                                var0 = var1 !== var0;
                                                if (var0) {
                                                    _fun33937_ip = 29;
                                                    continue _fun33937
                                                }
                                            case 23:
                                                var0 = var2.finished;
                                            case 29:
                                                if (var0) {
                                                    _fun33937_ip = 50;
                                                    continue _fun33937
                                                }
                                            case 32:
                                                var1 = var2.callback;
                                                var0 = _closure5_slot0;
                                                var0 = var1.bind(var2)(var0);
                                            case 50:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 34:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0.callback = var2;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 1;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.getReduceMotionForAnimation;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var3)(var1);
                        var0.reduceMotion = var1;
                        return var0;
                    };
                    var8 = {};
                    var8._animations = var13;
                    var9 = var9[var11];
                    var9 = var12.bind(var10)(var9);
                    var9 = var9.getReduceMotionForAnimation;
                    var8.getReduceMotionForAnimation = var9;
                    var8.reduceMotion = var7;
                    var0.__closure = var8;
                    var8 = 13427604040510.0;
                    var0.__workletHash = var8;
                    var6 = _closure1_slot4;
                    var0.__initData = var6;
                    var0 = var3.bind(var5)(var2, var0);
                    _fun33926_ip = 383;
                    continue _fun33926;
                case 256:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = var8[var4];
                    var2 = var9.bind(var10)(var2);
                    var6 = var2.logger;
                    var3 = var6.warn;
                    var2 = 'No animation was provided for the sequence';
                    var2 = var3.bind(var6)(var2);
                    var2 = var8[var11];
                    var3 = var9.bind(var10)(var2);
                    var2 = var3.defineAnimation;
                    var1 = function() {
                        var0 = {};
                        var2 = function arg0, arg1() {
                            var0 = arg1;
                            var1 = arg0;
                            var1.current = var0;
                            return var0;
                        };
                        var0.onStart = var2;
                        var1 = function() {
                            var0 = true;
                            return var0;
                        };
                        var0.onFrame = var1;
                        var1 = 0;
                        var0.current = var1;
                        var0.animationIndex = var1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 1;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getReduceMotionForAnimation;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var3)(var1);
                        var0.reduceMotion = var1;
                        return var0;
                    };
                    var6 = {};
                    var8 = var8[var11];
                    var8 = var9.bind(var10)(var8);
                    var8 = var8.getReduceMotionForAnimation;
                    var6.getReduceMotionForAnimation = var8;
                    var6.reduceMotion = var7;
                    var1.__closure = var6;
                    var6 = 3306563388298.0;
                    var1.__workletHash = var6;
                    var5 = _closure1_slot3;
                    var1.__initData = var5;
                    var0 = var2.bind(var3)(var4, var1);
                case 383:
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 0;
        var3 = var6[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var3 = var3.logger;
        var2.logger = var3;
        var3 = 1;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.defineAnimation;
        var2.defineAnimation = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.getReduceMotionForAnimation;
        var2.getReduceMotionForAnimation = var3;
        var0.__closure = var2;
        var2 = 4184395270838.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    var2.withSequence = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3725, 3761]);