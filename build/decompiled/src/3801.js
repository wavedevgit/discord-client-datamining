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
    var1 = "function pnpm_repeatTs1(_nextAnimation,numberOfReps=2,reverse=false,callback,reduceMotion){const{defineAnimation,getReduceMotionForAnimation}=this.__closure;return defineAnimation(_nextAnimation,function(){'worklet';const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function repeat(animation,now){const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;if(finished){animation.reps+=1;if(nextAnimation.callback){nextAnimation.callback(true,animation.current);}if(animation.reduceMotion||numberOfReps>0&&animation.reps>=numberOfReps){return true;}const startValue=reverse?nextAnimation.current:animation.startValue;if(reverse){nextAnimation.toValue=animation.startValue;animation.startValue=startValue;}nextAnimation.onStart(nextAnimation,startValue,now,nextAnimation.previousAnimation);return false;}return false;}const repCallback=function(finished){if(callback){callback(finished);}if(!finished&&nextAnimation.callback){nextAnimation.callback(false);}};function onStart(animation,value,now,previousAnimation){animation.startValue=value;animation.reps=0;if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}if(animation.reduceMotion&&reverse&&(numberOfReps<=0||numberOfReps%2===0)){animation.current=animation.startValue;animation.onFrame=function(){return true;};}else{nextAnimation.onStart(nextAnimation,value,now,previousAnimation);}}return{isHigherOrder:true,onFrame:repeat,onStart:onStart,reps:0,current:nextAnimation.current,callback:repCallback,startValue:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}";
    var3.code = var1;
    var1 = {};
    var4 = "function pnpm_repeatTs2(){const{_nextAnimation,numberOfReps,reverse,callback,getReduceMotionForAnimation,reduceMotion}=this.__closure;const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function repeat(animation,now){const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;if(finished){animation.reps+=1;if(nextAnimation.callback){nextAnimation.callback(true,animation.current);}if(animation.reduceMotion||numberOfReps>0&&animation.reps>=numberOfReps){return true;}const startValue=reverse?nextAnimation.current:animation.startValue;if(reverse){nextAnimation.toValue=animation.startValue;animation.startValue=startValue;}nextAnimation.onStart(nextAnimation,startValue,now,nextAnimation.previousAnimation);return false;}return false;}const repCallback=function(finished){if(callback){callback(finished);}if(!finished&&nextAnimation.callback){nextAnimation.callback(false);}};function onStart(animation,value,now,previousAnimation){animation.startValue=value;animation.reps=0;if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}if(animation.reduceMotion&&reverse&&(numberOfReps<=0||numberOfReps%2===0)){animation.current=animation.startValue;animation.onFrame=function(){return true;};}else{nextAnimation.onStart(nextAnimation,value,now,previousAnimation);}}return{isHigherOrder:true,onFrame:repeat,onStart:onStart,reps:0,current:nextAnimation.current,callback:repCallback,startValue:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}";
    var1.code = var4;
    var _closure1_slot2 = var1;
    var1 = function arg0() {
        _fun33918: for (var _fun33918_ip = 0;;) switch (_fun33918_ip) {
            case 0:
                var3 = arg0;
                var9 = undefined;
                var2 = undefined;
                var _closure2_slot0 = var3;
                var1 = arguments.length;
                var4 = 1;
                var5 = var1 > var4;
                var1 = 2;
                var13 = var1;
                if (!var5) {
                    _fun33918_ip = 47;
                    continue _fun33918
                }
            case 32:
                var5 = arguments[var4];
                var13 = var1;
                if (!(var9 !== var5)) {
                    _fun33918_ip = 47;
                    continue _fun33918
                }
            case 43:
                var13 = arguments[var4];
            case 47:
                var _closure2_slot1 = var13;
                var4 = arguments.length;
                var12 = var4 > var1;
                if (!var12) {
                    _fun33918_ip = 69;
                    continue _fun33918
                }
            case 61:
                var4 = arguments[var1];
                var12 = var9 !== var4;
            case 69:
                if (!var12) {
                    _fun33918_ip = 76;
                    continue _fun33918
                }
            case 72:
                var12 = arguments[var1];
            case 76:
                var _closure2_slot2 = var12;
                var4 = arguments.length;
                var1 = 3;
                var4 = var4 > var1;
                var11 = undefined;
                if (!var4) {
                    _fun33918_ip = 99;
                    continue _fun33918
                }
            case 95:
                var11 = arguments[var1];
            case 99:
                var _closure2_slot3 = var11;
                var4 = arguments.length;
                var1 = 4;
                var4 = var4 > var1;
                var6 = undefined;
                if (!var4) {
                    _fun33918_ip = 122;
                    continue _fun33918
                }
            case 118:
                var6 = arguments[var1];
            case 122:
                var _closure2_slot4 = var6;
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 0;
                var1 = var10[var7];
                var2 = var8.bind(var9)(var1);
                var1 = var2.defineAnimation;
                var0 = function() {
                    _fun33919: for (var _fun33919_ip = 0;;) switch (_fun33919_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = 'function';
                            var0 = typeof var0;
                            if (!(var3 !== var0)) {
                                _fun33919_ip = 26;
                                continue _fun33919
                            }
                        case 20:
                            var4 = _closure2_slot0;
                            _fun33919_ip = 36;
                            continue _fun33919;
                        case 26:
                            var3 = _closure2_slot0;
                            var0 = undefined;
                            var4 = var3.bind(var0)();
                        case 36:
                            var _closure3_slot0 = var4;
                            var0 = {};
                            var3 = true;
                            var0.isHigherOrder = var3;
                            var3 = function arg0, arg1() {
                                _fun33920: for (var _fun33920_ip = 0;;) switch (_fun33920_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var5 = arg1;
                                        var4 = _closure3_slot0;
                                        var3 = var4.onFrame;
                                        var2 = _closure3_slot0;
                                        var2 = var3.bind(var4)(var2, var5);
                                        var3 = _closure3_slot0;
                                        var3 = var3.current;
                                        var1.current = var3;
                                        if (var2) {
                                            _fun33920_ip = 51;
                                            continue _fun33920
                                        }
                                    case 47:
                                        var2 = false;
                                        return var2;
                                    case 51:
                                        var3 = var1.reps;
                                        var2 = 1;
                                        var2 = var3 + var2;
                                        var1.reps = var2;
                                        var2 = _closure3_slot0;
                                        var2 = var2.callback;
                                        if (!var2) {
                                            _fun33920_ip = 106;
                                            continue _fun33920
                                        }
                                    case 83:
                                        var6 = _closure3_slot0;
                                        var4 = var6.callback;
                                        var3 = var1.current;
                                        var2 = true;
                                        var2 = var4.bind(var6)(var2, var3);
                                    case 106:
                                        var2 = var1.reduceMotion;
                                        if (var2) {
                                            _fun33920_ip = 235;
                                            continue _fun33920
                                        }
                                    case 115:
                                        var4 = _closure2_slot1;
                                        var3 = 0;
                                        if (!(var4 > var3)) {
                                            _fun33920_ip = 142;
                                            continue _fun33920
                                        }
                                    case 128:
                                        var4 = var1.reps;
                                        var3 = _closure2_slot1;
                                        if (!(!(var4 >= var3))) {
                                            _fun33920_ip = 235;
                                            continue _fun33920
                                        }
                                    case 142:
                                        var3 = _closure2_slot2;
                                        if (var3) {
                                            _fun33920_ip = 157;
                                            continue _fun33920
                                        }
                                    case 149:
                                        var4 = var1.startValue;
                                        _fun33920_ip = 166;
                                        continue _fun33920;
                                    case 157:
                                        var3 = _closure3_slot0;
                                        var4 = var3.current;
                                    case 166:
                                        var2 = _closure2_slot2;
                                        if (!var2) {
                                            _fun33920_ip = 195;
                                            continue _fun33920
                                        }
                                    case 173:
                                        var3 = _closure3_slot0;
                                        var2 = var1.startValue;
                                        var3.toValue = var2;
                                        var1.startValue = var4;
                                    case 195:
                                        var3 = _closure3_slot0;
                                        var2 = var3.onStart;
                                        var1 = _closure3_slot0;
                                        var7 = var1.previousAnimation;
                                        var11 = var3;
                                        var10 = var1;
                                        var9 = var4;
                                        var8 = var5;
                                        var0 = var11[var2](var10, var9, var8, var7, var6);
                                        var0 = false;
                                        return var0;
                                    case 235:
                                        var0 = true;
                                        return var0;
                                }
                            };
                            var0.onFrame = var3;
                            var3 = function arg0, arg1, arg2, arg3() {
                                _fun33921: for (var _fun33921_ip = 0;;) switch (_fun33921_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var7 = arg1;
                                        var2.startValue = var7;
                                        var4 = 0;
                                        var2.reps = var4;
                                        var0 = _closure3_slot0;
                                        var3 = var0.reduceMotion;
                                        var0 = undefined;
                                        if (!(var0 === var3)) {
                                            _fun33921_ip = 55;
                                            continue _fun33921
                                        }
                                    case 39:
                                        var5 = _closure3_slot0;
                                        var3 = var2.reduceMotion;
                                        var5.reduceMotion = var3;
                                    case 55:
                                        var3 = var2.reduceMotion;
                                        if (!var3) {
                                            _fun33921_ip = 97;
                                            continue _fun33921
                                        }
                                    case 64:
                                        var5 = _closure2_slot2;
                                        if (!var5) {
                                            _fun33921_ip = 97;
                                            continue _fun33921
                                        }
                                    case 74:
                                        var5 = _closure2_slot1;
                                        if (!(!(var5 <= var4))) {
                                            _fun33921_ip = 129;
                                            continue _fun33921
                                        }
                                    case 82:
                                        var5 = _closure2_slot1;
                                        var3 = 2;
                                        var3 = var5 % var3;
                                        if (!(var3 !== var4)) {
                                            _fun33921_ip = 129;
                                            continue _fun33921
                                        }
                                    case 97:
                                        var6 = _closure3_slot0;
                                        var5 = var6.onStart;
                                        var11 = _closure3_slot0;
                                        var9 = arg2;
                                        var8 = arg3;
                                        var12 = var6;
                                        var10 = var7;
                                        var1 = var12[var5](var11, var10, var9, var8, var7);
                                        _fun33921_ip = 154;
                                        continue _fun33921;
                                    case 129:
                                        var1 = var2.startValue;
                                        var2.current = var1;
                                        var1 = function() { // Environment: var1
                                            var0 = true;
                                            return var0;
                                        };
                                        var2.onFrame = var1;
                                    case 154:
                                        return var0;
                                }
                            };
                            var0.onStart = var3;
                            var3 = 0;
                            var0.reps = var3;
                            var4 = var4.current;
                            var0.current = var4;
                            var2 = function arg0() {
                                _fun33923: for (var _fun33923_ip = 0;;) switch (_fun33923_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = _closure2_slot3;
                                        if (!var2) {
                                            _fun33923_ip = 24;
                                            continue _fun33923
                                        }
                                    case 13:
                                        var2 = _closure2_slot3;
                                        var1 = undefined;
                                        var1 = var2.bind(var1)(var0);
                                    case 24:
                                        var0 = !var0;
                                        if (!var0) {
                                            _fun33923_ip = 43;
                                            continue _fun33923
                                        }
                                    case 30:
                                        var1 = _closure3_slot0;
                                        var0 = var1.callback;
                                    case 43:
                                        if (!var0) {
                                            _fun33923_ip = 66;
                                            continue _fun33923
                                        }
                                    case 46:
                                        var2 = _closure3_slot0;
                                        var1 = var2.callback;
                                        var0 = false;
                                        var0 = var1.bind(var2)(var0);
                                    case 66:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.callback = var2;
                            var0.startValue = var3;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var3 = var2[var3];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.getReduceMotionForAnimation;
                            var1 = _closure2_slot4;
                            var1 = var2.bind(var3)(var1);
                            var0.reduceMotion = var1;
                            return var0;
                    }
                };
                var5 = {};
                var5._nextAnimation = var3;
                var5.numberOfReps = var13;
                var5.reverse = var12;
                var5.callback = var11;
                var7 = var10[var7];
                var7 = var8.bind(var9)(var7);
                var7 = var7.getReduceMotionForAnimation;
                var5.getReduceMotionForAnimation = var7;
                var5.reduceMotion = var6;
                var0.__closure = var5;
                var5 = 11413099333511.0;
                var0.__workletHash = var5;
                var4 = _closure1_slot2;
                var0.__initData = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
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
    var4 = 13638828150427.0;
    var1.__workletHash = var4;
    var1.__initData = var3;
    var2.withRepeat = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3761]);