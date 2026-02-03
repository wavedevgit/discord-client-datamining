// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var3 = {};
    var1 = "function pnpm_delayTs1(delayMs,_nextAnimation,reduceMotion){const{defineAnimation,getReduceMotionForAnimation}=this.__closure;return defineAnimation(_nextAnimation,function(){'worklet';const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function delay(animation,now){const{startTime:startTime,started:started,previousAnimation:previousAnimation}=animation;const current=animation.current;if(now-startTime>=delayMs||animation.reduceMotion){if(!started){nextAnimation.onStart(nextAnimation,current,now,previousAnimation);animation.previousAnimation=null;animation.started=true;}const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;return finished;}else if(previousAnimation){const finished=previousAnimation.finished||previousAnimation.onFrame(previousAnimation,now);animation.current=previousAnimation.current;if(finished){animation.previousAnimation=null;}}return false;}function onStart(animation,value,now,previousAnimation){animation.startTime=now;animation.started=false;animation.current=value;if(previousAnimation===animation){animation.previousAnimation=previousAnimation.previousAnimation;}else{animation.previousAnimation=previousAnimation;}if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}}const callback=function(finished){if(nextAnimation.callback){nextAnimation.callback(finished);}};return{isHigherOrder:true,onFrame:delay,onStart:onStart,current:nextAnimation.current,callback:callback,previousAnimation:null,startTime:0,started:false,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}";
    var3.code = var1;
    var1 = {};
    var4 = "function pnpm_delayTs2(){const{_nextAnimation,delayMs,getReduceMotionForAnimation,reduceMotion}=this.__closure;const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function delay(animation,now){const{startTime:startTime,started:started,previousAnimation:previousAnimation}=animation;const current=animation.current;if(now-startTime>=delayMs||animation.reduceMotion){if(!started){nextAnimation.onStart(nextAnimation,current,now,previousAnimation);animation.previousAnimation=null;animation.started=true;}const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;return finished;}else if(previousAnimation){const finished=previousAnimation.finished||previousAnimation.onFrame(previousAnimation,now);animation.current=previousAnimation.current;if(finished){animation.previousAnimation=null;}}return false;}function onStart(animation,value,now,previousAnimation){animation.startTime=now;animation.started=false;animation.current=value;if(previousAnimation===animation){animation.previousAnimation=previousAnimation.previousAnimation;}else{animation.previousAnimation=previousAnimation;}if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}}const callback=function(finished){if(nextAnimation.callback){nextAnimation.callback(finished);}};return{isHigherOrder:true,onFrame:delay,onStart:onStart,current:nextAnimation.current,callback:callback,previousAnimation:null,startTime:0,started:false,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}";
    var1.code = var4;
    var _closure1_slot2 = var1;
    var1 = function arg0, arg1, arg2() {
        var11 = arg0;
        var3 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var11;
        var _closure2_slot1 = var3;
        var _closure2_slot2 = var6;
        var9 = _closure1_slot0;
        var10 = _closure1_slot1;
        var7 = 0;
        var1 = var10[var7];
        var8 = undefined;
        var2 = var9.bind(var8)(var1);
        var1 = var2.defineAnimation;
        var0 = function() {
            _fun33913: for (var _fun33913_ip = 0;;) switch (_fun33913_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var3 = 'function';
                    var0 = typeof var0;
                    if (!(var3 !== var0)) {
                        _fun33913_ip = 26;
                        continue _fun33913
                    }
                case 20:
                    var3 = _closure2_slot1;
                    _fun33913_ip = 36;
                    continue _fun33913;
                case 26:
                    var4 = _closure2_slot1;
                    var0 = undefined;
                    var3 = var4.bind(var0)();
                case 36:
                    var _closure3_slot0 = var3;
                    var0 = {};
                    var4 = true;
                    var0.isHigherOrder = var4;
                    var4 = function arg0, arg1() {
                        _fun33914: for (var _fun33914_ip = 0;;) switch (_fun33914_ip) {
                            case 0:
                                var2 = arg0;
                                var5 = arg1;
                                var1 = var2.startTime;
                                var0 = var2.started;
                                var6 = var2.previousAnimation;
                                var4 = var2.current;
                                var3 = var5 - var1;
                                var1 = _closure2_slot0;
                                if (!(!(var3 >= var1))) {
                                    _fun33914_ip = 103;
                                    continue _fun33914
                                }
                            case 44:
                                var1 = var2.reduceMotion;
                                if (var1) {
                                    _fun33914_ip = 103;
                                    continue _fun33914
                                }
                            case 53:
                                if (!var6) {
                                    _fun33914_ip = 99;
                                    continue _fun33914
                                }
                            case 56:
                                var1 = var6.finished;
                                if (var1) {
                                    _fun33914_ip = 77;
                                    continue _fun33914
                                }
                            case 65:
                                var3 = var6.onFrame;
                                var1 = var3.bind(var6)(var6, var5);
                            case 77:
                                var3 = var6.current;
                                var2.current = var3;
                                if (!var1) {
                                    _fun33914_ip = 99;
                                    continue _fun33914
                                }
                            case 91:
                                var1 = null;
                                var2.previousAnimation = var1;
                            case 99:
                                var1 = false;
                                return var1;
                            case 103:
                                if (var0) {
                                    _fun33914_ip = 155;
                                    continue _fun33914
                                }
                            case 106:
                                var3 = _closure3_slot0;
                                var1 = var3.onStart;
                                var10 = _closure3_slot0;
                                var11 = var3;
                                var9 = var4;
                                var8 = var5;
                                var7 = var6;
                                var0 = var11[var1](var10, var9, var8, var7, var6);
                                var0 = null;
                                var2.previousAnimation = var0;
                                var0 = true;
                                var2.started = var0;
                            case 155:
                                var4 = _closure3_slot0;
                                var3 = var4.onFrame;
                                var0 = _closure3_slot0;
                                var0 = var3.bind(var4)(var0, var5);
                                var1 = _closure3_slot0;
                                var1 = var1.current;
                                var2.current = var1;
                                return var0;
                        }
                    };
                    var0.onFrame = var4;
                    var4 = function arg0, arg1, arg2, arg3() {
                        _fun33915: for (var _fun33915_ip = 0;;) switch (_fun33915_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = arg3;
                                var0 = arg2;
                                var1.startTime = var0;
                                var0 = false;
                                var1.started = var0;
                                var0 = arg1;
                                var1.current = var0;
                                var0 = var2;
                                if (!(var0 === var1)) {
                                    _fun33915_ip = 45;
                                    continue _fun33915
                                }
                            case 39:
                                var0 = var2.previousAnimation;
                            case 45:
                                var1.previousAnimation = var0;
                                var0 = _closure3_slot0;
                                var3 = var0.reduceMotion;
                                var0 = undefined;
                                if (!(var0 === var3)) {
                                    _fun33915_ip = 86;
                                    continue _fun33915
                                }
                            case 70:
                                var2 = _closure3_slot0;
                                var1 = var1.reduceMotion;
                                var2.reduceMotion = var1;
                            case 86:
                                return var0;
                        }
                    };
                    var0.onStart = var4;
                    var3 = var3.current;
                    var0.current = var3;
                    var2 = function arg0() {
                        _fun33916: for (var _fun33916_ip = 0;;) switch (_fun33916_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.callback;
                                if (!var1) {
                                    _fun33916_ip = 34;
                                    continue _fun33916
                                }
                            case 16:
                                var2 = _closure3_slot0;
                                var1 = var2.callback;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                            case 34:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.callback = var2;
                    var2 = null;
                    var0.previousAnimation = var2;
                    var3 = 0;
                    var0.startTime = var3;
                    var2 = false;
                    var0.started = var2;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var3 = var2[var3];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getReduceMotionForAnimation;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
                    var0.reduceMotion = var1;
                    return var0;
            }
        };
        var5 = {};
        var5._nextAnimation = var3;
        var5.delayMs = var11;
        var7 = var10[var7];
        var7 = var9.bind(var8)(var7);
        var7 = var7.getReduceMotionForAnimation;
        var5.getReduceMotionForAnimation = var7;
        var5.reduceMotion = var6;
        var0.__closure = var5;
        var5 = 7904568249320.0;
        var0.__workletHash = var5;
        var4 = _closure1_slot2;
        var0.__initData = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var4 = {};
    var5 = 0;
    var8 = var7[var5];
    var0 = undefined;
    var8 = var6.bind(var0)(var8);
    var8 = var8.defineAnimation;
    var4.defineAnimation = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.getReduceMotionForAnimation;
    var4.getReduceMotionForAnimation = var5;
    var1.__closure = var4;
    var4 = 10965419997083.0;
    var1.__workletHash = var4;
    var1.__initData = var3;
    var2.withDelay = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3761]);