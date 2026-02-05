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
    var1 = 'function pnpm_clampTs1(config,_animationToClamp){const{defineAnimation,recognizePrefixSuffix,logger,getReduceMotionForAnimation}=this.__closure;return defineAnimation(_animationToClamp,function(){\'worklet\';const animationToClamp=typeof _animationToClamp===\'function\'?_animationToClamp():_animationToClamp;const strippedMin=config.min===undefined?undefined:recognizePrefixSuffix(config.min).strippedValue;const strippedMax=config.max===undefined?undefined:recognizePrefixSuffix(config.max).strippedValue;function clampOnFrame(animation,now){const finished=animationToClamp.onFrame(animationToClamp,now);if(animationToClamp.current===undefined){logger.warn("Error inside \'withClamp\' animation, the inner animation has invalid current value");return true;}else{const{prefix:prefix,strippedValue:strippedValue,suffix:suffix}=recognizePrefixSuffix(animationToClamp.current);let newValue;if(strippedMax!==undefined&&strippedMax<strippedValue){newValue=strippedMax;}else if(strippedMin!==undefined&&strippedMin>strippedValue){newValue=strippedMin;}else{newValue=strippedValue;}animation.current=typeof animationToClamp.current===\'number\'?newValue:""+(prefix===undefined?\'\':prefix)+newValue+(suffix===undefined?\'\':suffix);}return finished;}function onStart(animation,value,now,previousAnimation){animation.current=value;animation.previousAnimation=animationToClamp;const animationBeforeClamped=previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.previousAnimation;if(config.max!==undefined&&config.min!==undefined&&config.max<config.min){logger.warn(\'Wrong config was provided to withClamp. Min value is bigger than max\');}animationToClamp.onStart(animationToClamp,(animationBeforeClamped===null||animationBeforeClamped===void 0?void 0:animationBeforeClamped.current)||value,now,animationBeforeClamped);}const callback=function(finished){if(animationToClamp.callback){animationToClamp.callback(finished);}};return{isHigherOrder:true,onFrame:clampOnFrame,onStart:onStart,current:animationToClamp.current,callback:callback,previousAnimation:null,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};});}';
    var3.code = var1;
    var1 = {};
    var4 = 'function pnpm_clampTs2(){const{_animationToClamp,config,recognizePrefixSuffix,logger,getReduceMotionForAnimation}=this.__closure;const animationToClamp=typeof _animationToClamp===\'function\'?_animationToClamp():_animationToClamp;const strippedMin=config.min===undefined?undefined:recognizePrefixSuffix(config.min).strippedValue;const strippedMax=config.max===undefined?undefined:recognizePrefixSuffix(config.max).strippedValue;function clampOnFrame(animation,now){const finished=animationToClamp.onFrame(animationToClamp,now);if(animationToClamp.current===undefined){logger.warn("Error inside \'withClamp\' animation, the inner animation has invalid current value");return true;}else{const{prefix:prefix,strippedValue:strippedValue,suffix:suffix}=recognizePrefixSuffix(animationToClamp.current);let newValue;if(strippedMax!==undefined&&strippedMax<strippedValue){newValue=strippedMax;}else if(strippedMin!==undefined&&strippedMin>strippedValue){newValue=strippedMin;}else{newValue=strippedValue;}animation.current=typeof animationToClamp.current===\'number\'?newValue:""+(prefix===undefined?\'\':prefix)+newValue+(suffix===undefined?\'\':suffix);}return finished;}function onStart(animation,value,now,previousAnimation){animation.current=value;animation.previousAnimation=animationToClamp;const animationBeforeClamped=previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.previousAnimation;if(config.max!==undefined&&config.min!==undefined&&config.max<config.min){logger.warn(\'Wrong config was provided to withClamp. Min value is bigger than max\');}animationToClamp.onStart(animationToClamp,(animationBeforeClamped===null||animationBeforeClamped===void 0?void 0:animationBeforeClamped.current)||value,now,animationBeforeClamped);}const callback=function(finished){if(animationToClamp.callback){animationToClamp.callback(finished);}};return{isHigherOrder:true,onFrame:clampOnFrame,onStart:onStart,current:animationToClamp.current,callback:callback,previousAnimation:null,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};}';
    var1.code = var4;
    var _closure1_slot2 = var1;
    var1 = function arg0, arg1() {
        var10 = arg0;
        var3 = arg1;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var3;
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var6 = 0;
        var1 = var9[var6];
        var7 = undefined;
        var2 = var8.bind(var7)(var1);
        var1 = var2.defineAnimation;
        var0 = function() {
            _fun33900: for (var _fun33900_ip = 0;;) switch (_fun33900_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var3 = 'function';
                    var0 = typeof var0;
                    if (!(var3 !== var0)) {
                        _fun33900_ip = 26;
                        continue _fun33900
                    }
                case 20:
                    var3 = _closure2_slot1;
                    _fun33900_ip = 36;
                    continue _fun33900;
                case 26:
                    var4 = _closure2_slot1;
                    var0 = undefined;
                    var3 = var4.bind(var0)();
                case 36:
                    var _closure3_slot0 = var3;
                    var0 = _closure2_slot0;
                    var5 = var0.min;
                    var4 = undefined;
                    var0 = undefined;
                    if (!(var4 !== var5)) {
                        _fun33900_ip = 105;
                        continue _fun33900
                    }
                case 57:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 0;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.recognizePrefixSuffix;
                    var5 = _closure2_slot0;
                    var5 = var5.min;
                    var5 = var6.bind(var7)(var5);
                    var0 = var5.strippedValue;
                case 105:
                    var _closure3_slot1 = var0;
                    var0 = _closure2_slot0;
                    var5 = var0.max;
                    var0 = undefined;
                    if (!(var0 !== var5)) {
                        _fun33900_ip = 172;
                        continue _fun33900
                    }
                case 124:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 0;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.recognizePrefixSuffix;
                    var5 = _closure2_slot0;
                    var5 = var5.max;
                    var5 = var6.bind(var7)(var5);
                    var0 = var5.strippedValue;
                case 172:
                    var _closure3_slot2 = var0;
                    var0 = {};
                    var5 = true;
                    var0.isHigherOrder = var5;
                    var5 = function arg0, arg1() {
                        _fun33901: for (var _fun33901_ip = 0;;) switch (_fun33901_ip) {
                            case 0:
                                var4 = _closure3_slot0;
                                var2 = var4.onFrame;
                                var1 = _closure3_slot0;
                                var0 = arg1;
                                var0 = var2.bind(var4)(var1, var0);
                                var1 = _closure3_slot0;
                                var1 = var1.current;
                                var2 = undefined;
                                if (!(var2 !== var1)) {
                                    _fun33901_ip = 230;
                                    continue _fun33901
                                }
                            case 44:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var1 = 0;
                                var1 = var5[var1];
                                var5 = var4.bind(var2)(var1);
                                var4 = var5.recognizePrefixSuffix;
                                var1 = _closure3_slot0;
                                var1 = var1.current;
                                var1 = var4.bind(var5)(var1);
                                var4 = var1.prefix;
                                var6 = var1.strippedValue;
                                var1 = var1.suffix;
                                var5 = _closure3_slot2;
                                if (!(var2 !== var5)) {
                                    _fun33901_ip = 120;
                                    continue _fun33901
                                }
                            case 112:
                                var5 = _closure3_slot2;
                                if (!(!(var5 < var6))) {
                                    _fun33901_ip = 148;
                                    continue _fun33901
                                }
                            case 120:
                                var5 = _closure3_slot1;
                                var7 = var6;
                                if (!(var2 !== var5)) {
                                    _fun33901_ip = 146;
                                    continue _fun33901
                                }
                            case 131:
                                var5 = _closure3_slot1;
                                var7 = var6;
                                if (!(var5 > var7)) {
                                    _fun33901_ip = 146;
                                    continue _fun33901
                                }
                            case 142:
                                var7 = _closure3_slot1;
                            case 146:
                                _fun33901_ip = 152;
                                continue _fun33901;
                            case 148:
                                var7 = _closure3_slot2;
                            case 152:
                                var3 = _closure3_slot0;
                                var3 = var3.current;
                                var6 = 'number';
                                var5 = typeof var3;
                                var3 = var7;
                                if (!(var6 !== var5)) {
                                    _fun33901_ip = 219;
                                    continue _fun33901
                                }
                            case 175:
                                var6 = '';
                                var5 = var6;
                                if (!(var2 !== var4)) {
                                    _fun33901_ip = 189;
                                    continue _fun33901
                                }
                            case 186:
                                var5 = var4;
                            case 189:
                                var4 = var6;
                                if (!(var2 !== var1)) {
                                    _fun33901_ip = 199;
                                    continue _fun33901
                                }
                            case 196:
                                var4 = var1;
                            case 199:
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var1 = var1.concat;
                                var3 = var1.bind(var6)(var5, var7, var4);
                            case 219:
                                var1 = arg0;
                                var1.current = var3;
                                return var0;
                            case 230:
                                var1 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var0 = 1;
                                var0 = var3[var0];
                                var0 = var1.bind(var2)(var0);
                                var2 = var0.logger;
                                var1 = var2.warn;
                                var0 = "Error inside 'withClamp' animation, the inner animation has invalid current value";
                                var0 = var1.bind(var2)(var0);
                                var0 = true;
                                return var0;
                        }
                    };
                    var0.onFrame = var5;
                    var5 = function arg0, arg1, arg2, arg3() {
                        _fun33902: for (var _fun33902_ip = 0;;) switch (_fun33902_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = arg1;
                                var4 = arg3;
                                var2.current = var1;
                                var0 = _closure3_slot0;
                                var2.previousAnimation = var0;
                                var2 = null;
                                var5 = var2 == var4;
                                var0 = undefined;
                                var6 = undefined;
                                if (var5) {
                                    _fun33902_ip = 47;
                                    continue _fun33902
                                }
                            case 41:
                                var6 = var4.previousAnimation;
                            case 47:
                                var4 = _closure2_slot0;
                                var4 = var4.max;
                                var4 = var0 !== var4;
                                if (!var4) {
                                    _fun33902_ip = 79;
                                    continue _fun33902
                                }
                            case 66:
                                var7 = _closure2_slot0;
                                var7 = var7.min;
                                var4 = var0 !== var7;
                            case 79:
                                if (!var4) {
                                    _fun33902_ip = 100;
                                    continue _fun33902
                                }
                            case 82:
                                var5 = _closure2_slot0;
                                var7 = var5.max;
                                var5 = var5.min;
                                var4 = var7 < var5;
                            case 100:
                                if (!var4) {
                                    _fun33902_ip = 148;
                                    continue _fun33902
                                }
                            case 103:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var4 = 1;
                                var4 = var7[var4];
                                var4 = var5.bind(var0)(var4);
                                var7 = var4.logger;
                                var5 = var7.warn;
                                var4 = 'Wrong config was provided to withClamp. Min value is bigger than max';
                                var4 = var5.bind(var7)(var4);
                            case 148:
                                var5 = _closure3_slot0;
                                var4 = var5.onStart;
                                var3 = _closure3_slot0;
                                var7 = var2 == var6;
                                var2 = undefined;
                                if (var7) {
                                    _fun33902_ip = 176;
                                    continue _fun33902
                                }
                            case 171:
                                var2 = var6.current;
                            case 176:
                                if (var2) {
                                    _fun33902_ip = 182;
                                    continue _fun33902
                                }
                            case 179:
                                var2 = var1;
                            case 182:
                                var9 = arg2;
                                var12 = var5;
                                var11 = var3;
                                var10 = var2;
                                var8 = var6;
                                var1 = var12[var4](var11, var10, var9, var8, var7);
                                return var0;
                        }
                    };
                    var0.onStart = var5;
                    var3 = var3.current;
                    var0.current = var3;
                    var2 = function arg0() {
                        _fun33903: for (var _fun33903_ip = 0;;) switch (_fun33903_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.callback;
                                if (!var1) {
                                    _fun33903_ip = 34;
                                    continue _fun33903
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
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 0;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.getReduceMotionForAnimation;
                    var1 = _closure2_slot0;
                    var1 = var1.reduceMotion;
                    var1 = var2.bind(var3)(var1);
                    var0.reduceMotion = var1;
                    return var0;
            }
        };
        var5 = {};
        var5._animationToClamp = var3;
        var5.config = var10;
        var10 = var9[var6];
        var10 = var8.bind(var7)(var10);
        var10 = var10.recognizePrefixSuffix;
        var5.recognizePrefixSuffix = var10;
        var10 = 1;
        var10 = var9[var10];
        var10 = var8.bind(var7)(var10);
        var10 = var10.logger;
        var5.logger = var10;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.getReduceMotionForAnimation;
        var5.getReduceMotionForAnimation = var6;
        var0.__closure = var5;
        var5 = 9293031098818.0;
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
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.recognizePrefixSuffix;
    var4.recognizePrefixSuffix = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var6.bind(var0)(var8);
    var8 = var8.logger;
    var4.logger = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.getReduceMotionForAnimation;
    var4.getReduceMotionForAnimation = var5;
    var1.__closure = var4;
    var4 = 2452826107198.0;
    var1.__workletHash = var4;
    var1.__initData = var3;
    var2.withClamp = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3761, 3725]);