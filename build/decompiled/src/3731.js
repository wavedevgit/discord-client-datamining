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
    var1 = "function pnpm_timingTs1(toValue,userConfig,callback){const{__DEV__,assertEasingIsWorklet,defineAnimation,Easing,getReduceMotionForAnimation}=this.__closure;if(__DEV__&&userConfig!==null&&userConfig!==void 0&&userConfig.easing){assertEasingIsWorklet(userConfig.easing);}return defineAnimation(toValue,function(){'worklet';const config={duration:300,easing:Easing.inOut(Easing.quad)};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}function timing(animation,now){const{toValue:toValue,startTime:startTime,startValue:startValue}=animation;const runtime=now-startTime;if(runtime>=config.duration){animation.startTime=0;animation.current=toValue;return true;}const progress=animation.easing(runtime/config.duration);animation.current=startValue+(toValue-startValue)*progress;return false;}function onStart(animation,value,now,previousAnimation){if(previousAnimation&&previousAnimation.type==='timing'&&previousAnimation.toValue===toValue&&previousAnimation.startTime){animation.startTime=previousAnimation.startTime;animation.startValue=previousAnimation.startValue;}else{animation.startTime=now;animation.startValue=value;}animation.current=value;if(typeof config.easing==='object'){animation.easing=config.easing.factory();}else{animation.easing=config.easing;}}return{type:'timing',onFrame:timing,onStart:onStart,progress:0,toValue:toValue,startValue:0,startTime:0,easing:function(){return 0;},current:toValue,callback:callback,reduceMotion:getReduceMotionForAnimation(userConfig===null||userConfig===void 0?void 0:userConfig.reduceMotion)};});}";
    var3.code = var1;
    var1 = {};
    var4 = "function pnpm_timingTs2(){const{Easing,userConfig,toValue,callback,getReduceMotionForAnimation}=this.__closure;var _userConfig;const config={duration:300,easing:Easing.inOut(Easing.quad)};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}function timing(animation,now){const{toValue:toValue,startTime:startTime,startValue:startValue}=animation;const runtime=now-startTime;if(runtime>=config.duration){animation.startTime=0;animation.current=toValue;return true;}const progress=animation.easing(runtime/config.duration);animation.current=startValue+(toValue-startValue)*progress;return false;}function onStart(animation,value,now,previousAnimation){if(previousAnimation&&previousAnimation.type==='timing'&&previousAnimation.toValue===toValue&&previousAnimation.startTime){animation.startTime=previousAnimation.startTime;animation.startValue=previousAnimation.startValue;}else{animation.startTime=now;animation.startValue=value;}animation.current=value;if(typeof config.easing==='object'){animation.easing=config.easing.factory();}else{animation.easing=config.easing;}}return{type:'timing',onFrame:timing,onStart:onStart,progress:0,toValue:toValue,startValue:0,startTime:0,easing:function(){return 0;},current:toValue,callback:callback,reduceMotion:getReduceMotionForAnimation((_userConfig=userConfig)===null||_userConfig===void 0?void 0:_userConfig.reduceMotion)};}";
    var1.code = var4;
    var _closure1_slot2 = var1;
    var1 = function arg0, arg1, arg2() {
        var3 = arg0;
        var11 = arg1;
        var10 = arg2;
        var _closure2_slot0 = var3;
        var _closure2_slot1 = var11;
        var _closure2_slot2 = var10;
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var6 = 0;
        var1 = var9[var6];
        var7 = undefined;
        var2 = var8.bind(var7)(var1);
        var1 = var2.defineAnimation;
        var0 = function() {
            _fun33564: for (var _fun33564_ip = 0;;) switch (_fun33564_ip) {
                case 0:
                    var0 = {};
                    var1 = 300;
                    var0.duration = var1;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 1;
                    var4 = var8[var3];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var4);
                    var5 = var4.Easing;
                    var4 = var5.inOut;
                    var3 = var8[var3];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.Easing;
                    var3 = var3.quad;
                    var3 = var4.bind(var5)(var3);
                    var0.easing = var3;
                    var _closure3_slot0 = var0;
                    var0 = _closure2_slot1;
                    if (!var0) {
                        _fun33564_ip = 133;
                        continue _fun33564
                    }
                case 96:
                    var0 = global;
                    var5 = var0.Object;
                    var3 = var5.keys;
                    var0 = _closure2_slot1;
                    var5 = var3.bind(var5)(var0);
                    var3 = var5.forEach;
                    var0 = function(arg0) { // Environment: var6
                        var2 = arg0;
                        var1 = _closure3_slot0;
                        var0 = _closure2_slot1;
                        var0 = var0[var2];
                        var1[var2] = var0;
                        return var0;
                    };
                    var0 = var3.bind(var5)(var0);
                case 133:
                    var0 = {
                        'type': 'timing',
                        'onFrame': null,
                        'onStart': null,
                        'progress': 0,
                        'toValue': null,
                        'startValue': 0,
                        'startTime': 0
                    };
                    var3 = function arg0, arg1() {
                        _fun33566: for (var _fun33566_ip = 0;;) switch (_fun33566_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.toValue;
                                var4 = var1.startTime;
                                var3 = var1.startValue;
                                var2 = arg1;
                                var5 = var2 - var4;
                                var4 = _closure3_slot0;
                                var4 = var4.duration;
                                if (!(!(var5 >= var4))) {
                                    _fun33566_ip = 90;
                                    continue _fun33566
                                }
                            case 44:
                                var4 = var1.easing;
                                var2 = _closure3_slot0;
                                var2 = var2.duration;
                                var2 = var5 / var2;
                                var4 = var4.bind(var1)(var2);
                                var2 = var0 - var3;
                                var2 = var2 * var4;
                                var2 = var3 + var2;
                                var1.current = var2;
                                var2 = false;
                                return var2;
                            case 90:
                                var2 = 0;
                                var1.startTime = var2;
                                var1.current = var0;
                                var0 = true;
                                return var0;
                        }
                    };
                    var0.onFrame = var3;
                    var3 = function arg0, arg1, arg2, arg3() {
                        _fun33567: for (var _fun33567_ip = 0;;) switch (_fun33567_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = arg1;
                                var2 = arg3;
                                if (!var2) {
                                    _fun33567_ip = 51;
                                    continue _fun33567
                                }
                            case 12:
                                var4 = var2.type;
                                var3 = 'timing';
                                if (!(var3 === var4)) {
                                    _fun33567_ip = 51;
                                    continue _fun33567
                                }
                            case 25:
                                var4 = var2.toValue;
                                var3 = _closure2_slot0;
                                if (!(var4 === var3)) {
                                    _fun33567_ip = 51;
                                    continue _fun33567
                                }
                            case 42:
                                var3 = var2.startTime;
                                if (var3) {
                                    _fun33567_ip = 68;
                                    continue _fun33567
                                }
                            case 51:
                                var3 = arg2;
                                var1.startTime = var3;
                                var1.startValue = var0;
                                _fun33567_ip = 92;
                                continue _fun33567;
                            case 68:
                                var3 = var2.startTime;
                                var1.startTime = var3;
                                var2 = var2.startValue;
                                var1.startValue = var2;
                            case 92:
                                var1.current = var0;
                                var2 = _closure3_slot0;
                                var2 = var2.easing;
                                var3 = 'object';
                                var2 = typeof var2;
                                if (!(var3 !== var2)) {
                                    _fun33567_ip = 140;
                                    continue _fun33567
                                }
                            case 122:
                                var2 = _closure3_slot0;
                                var2 = var2.easing;
                                var1.easing = var2;
                                _fun33567_ip = 166;
                                continue _fun33567;
                            case 140:
                                var0 = _closure3_slot0;
                                var2 = var0.easing;
                                var0 = var2.factory;
                                var0 = var0.bind(var2)();
                                var1.easing = var0;
                            case 166:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onStart = var3;
                    var5 = 0;
                    var3 = _closure2_slot0;
                    var0.toValue = var3;
                    var6 = function() {
                        var0 = 0;
                        return var0;
                    };
                    var0.easing = var6;
                    var0.current = var3;
                    var3 = _closure2_slot2;
                    var0.callback = var3;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var5];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getReduceMotionForAnimation;
                    var6 = _closure2_slot1;
                    var5 = null;
                    var5 = var5 == var6;
                    var1 = undefined;
                    if (var5) {
                        _fun33564_ip = 252;
                        continue _fun33564
                    }
                case 242:
                    var4 = _closure2_slot1;
                    var1 = var4.reduceMotion;
                case 252:
                    var1 = var2.bind(var3)(var1);
                    var0.reduceMotion = var1;
                    return var0;
            }
        };
        var5 = {};
        var12 = 1;
        var12 = var9[var12];
        var12 = var8.bind(var7)(var12);
        var12 = var12.Easing;
        var5.Easing = var12;
        var5.userConfig = var11;
        var5.toValue = var3;
        var5.callback = var10;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.getReduceMotionForAnimation;
        var5.getReduceMotionForAnimation = var6;
        var0.__closure = var5;
        var5 = 16704866504175.0;
        var0.__workletHash = var5;
        var4 = _closure1_slot2;
        var0.__initData = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var4 = {};
    var0 = false;
    var4.__DEV__ = var0;
    var5 = 0;
    var8 = var7[var5];
    var0 = undefined;
    var8 = var6.bind(var0)(var8);
    var8 = var8.assertEasingIsWorklet;
    var4.assertEasingIsWorklet = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.defineAnimation;
    var4.defineAnimation = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var6.bind(var0)(var8);
    var8 = var8.Easing;
    var4.Easing = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.getReduceMotionForAnimation;
    var4.getReduceMotionForAnimation = var5;
    var1.__closure = var4;
    var4 = 7258055328141.0;
    var1.__workletHash = var4;
    var1.__initData = var3;
    var2.withTiming = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3720, 3732]);