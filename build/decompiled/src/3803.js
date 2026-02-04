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
    var1 = "function pnpm_springTs1(toValue,userConfig,callback){const{defineAnimation,checkIfConfigIsValid,underDampedSpringCalculations,criticallyDampedSpringCalculations,isAnimationTerminatingCalculation,calculateNewMassToMatchDuration,initialCalculations,scaleZetaToMatchClamps,getReduceMotionForAnimation}=this.__closure;return defineAnimation(toValue,function(){'worklet';const defaultConfig={damping:10,mass:1,stiffness:100,overshootClamping:false,restDisplacementThreshold:0.01,restSpeedThreshold:2,velocity:0,duration:2000,dampingRatio:0.5,reduceMotion:undefined,clamp:undefined};const config={...defaultConfig,...userConfig,useDuration:!!(userConfig!==null&&userConfig!==void 0&&userConfig.duration||userConfig!==null&&userConfig!==void 0&&userConfig.dampingRatio),skipAnimation:false};config.skipAnimation=!checkIfConfigIsValid(config);if(config.duration===0){config.skipAnimation=true;}function springOnFrame(animation,now){const{toValue:toValue,startTimestamp:startTimestamp,current:current}=animation;const timeFromStart=now-startTimestamp;if(config.useDuration&&timeFromStart>=config.duration){animation.current=toValue;animation.lastTimestamp=0;return true;}if(config.skipAnimation){animation.current=toValue;animation.lastTimestamp=0;return true;}const{lastTimestamp:lastTimestamp,velocity:velocity}=animation;const deltaTime=Math.min(now-lastTimestamp,64);animation.lastTimestamp=now;const t=deltaTime/1000;const v0=-velocity;const x0=toValue-current;const{zeta:zeta,omega0:omega0,omega1:omega1}=animation;const{position:newPosition,velocity:newVelocity}=zeta<1?underDampedSpringCalculations(animation,{zeta:zeta,v0:v0,x0:x0,omega0:omega0,omega1:omega1,t:t}):criticallyDampedSpringCalculations(animation,{v0:v0,x0:x0,omega0:omega0,t:t});animation.current=newPosition;animation.velocity=newVelocity;const{isOvershooting:isOvershooting,isVelocity:isVelocity,isDisplacement:isDisplacement}=isAnimationTerminatingCalculation(animation,config);const springIsNotInMove=isOvershooting||isVelocity&&isDisplacement;if(!config.useDuration&&springIsNotInMove){animation.velocity=0;animation.current=toValue;animation.lastTimestamp=0;return true;}return false;}function isTriggeredTwice(previousAnimation,animation){return(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.toValue)===animation.toValue&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.duration)===animation.duration&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.dampingRatio)===animation.dampingRatio;}function onStart(animation,value,now,previousAnimation){animation.current=value;animation.startValue=value;let mass=config.mass;const triggeredTwice=isTriggeredTwice(previousAnimation,animation);const duration=config.duration;const x0=triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startValue:Number(animation.toValue)-value;if(previousAnimation){animation.velocity=(triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity:(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity)+config.velocity)||0;}else{animation.velocity=config.velocity||0;}if(triggeredTwice){animation.zeta=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.zeta)||0;animation.omega0=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega0)||0;animation.omega1=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega1)||0;}else{if(config.useDuration){const actualDuration=triggeredTwice?duration-(((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||0)-((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||0)):duration;config.duration=actualDuration;mass=calculateNewMassToMatchDuration(x0,config,animation.velocity);}const{zeta:zeta,omega0:omega0,omega1:omega1}=initialCalculations(mass,config);animation.zeta=zeta;animation.omega0=omega0;animation.omega1=omega1;if(config.clamp!==undefined){animation.zeta=scaleZetaToMatchClamps(animation,config.clamp);}}animation.lastTimestamp=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||now;animation.startTimestamp=triggeredTwice?(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||now:now;}return{onFrame:springOnFrame,onStart:onStart,toValue:toValue,velocity:config.velocity||0,current:toValue,startValue:0,callback:callback,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};});}";
    var3.code = var1;
    var1 = {};
    var4 = 'function pnpm_springTs2(){const{userConfig,checkIfConfigIsValid,underDampedSpringCalculations,criticallyDampedSpringCalculations,isAnimationTerminatingCalculation,calculateNewMassToMatchDuration,initialCalculations,scaleZetaToMatchClamps,toValue,callback,getReduceMotionForAnimation}=this.__closure;var _userConfig,_userConfig2;const defaultConfig={damping:10,mass:1,stiffness:100,overshootClamping:false,restDisplacementThreshold:0.01,restSpeedThreshold:2,velocity:0,duration:2000,dampingRatio:0.5,reduceMotion:undefined,clamp:undefined};const config={...defaultConfig,...userConfig,useDuration:!!((_userConfig=userConfig)!==null&&_userConfig!==void 0&&_userConfig.duration||(_userConfig2=userConfig)!==null&&_userConfig2!==void 0&&_userConfig2.dampingRatio),skipAnimation:false};config.skipAnimation=!checkIfConfigIsValid(config);if(config.duration===0){config.skipAnimation=true;}function springOnFrame(animation,now){const{toValue:toValue,startTimestamp:startTimestamp,current:current}=animation;const timeFromStart=now-startTimestamp;if(config.useDuration&&timeFromStart>=config.duration){animation.current=toValue;animation.lastTimestamp=0;return true;}if(config.skipAnimation){animation.current=toValue;animation.lastTimestamp=0;return true;}const{lastTimestamp:lastTimestamp,velocity:velocity}=animation;const deltaTime=Math.min(now-lastTimestamp,64);animation.lastTimestamp=now;const t=deltaTime/1000;const v0=-velocity;const x0=toValue-current;const{zeta:zeta,omega0:omega0,omega1:omega1}=animation;const{position:newPosition,velocity:newVelocity}=zeta<1?underDampedSpringCalculations(animation,{zeta:zeta,v0:v0,x0:x0,omega0:omega0,omega1:omega1,t:t}):criticallyDampedSpringCalculations(animation,{v0:v0,x0:x0,omega0:omega0,t:t});animation.current=newPosition;animation.velocity=newVelocity;const{isOvershooting:isOvershooting,isVelocity:isVelocity,isDisplacement:isDisplacement}=isAnimationTerminatingCalculation(animation,config);const springIsNotInMove=isOvershooting||isVelocity&&isDisplacement;if(!config.useDuration&&springIsNotInMove){animation.velocity=0;animation.current=toValue;animation.lastTimestamp=0;return true;}return false;}function isTriggeredTwice(previousAnimation,animation){return(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.toValue)===animation.toValue&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.duration)===animation.duration&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.dampingRatio)===animation.dampingRatio;}function onStart(animation,value,now,previousAnimation){animation.current=value;animation.startValue=value;let mass=config.mass;const triggeredTwice=isTriggeredTwice(previousAnimation,animation);const duration=config.duration;const x0=triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startValue:Number(animation.toValue)-value;if(previousAnimation){animation.velocity=(triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity:(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity)+config.velocity)||0;}else{animation.velocity=config.velocity||0;}if(triggeredTwice){animation.zeta=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.zeta)||0;animation.omega0=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega0)||0;animation.omega1=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega1)||0;}else{if(config.useDuration){const actualDuration=triggeredTwice?duration-(((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||0)-((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||0)):duration;config.duration=actualDuration;mass=calculateNewMassToMatchDuration(x0,config,animation.velocity);}const{zeta:zeta,omega0:omega0,omega1:omega1}=initialCalculations(mass,config);animation.zeta=zeta;animation.omega0=omega0;animation.omega1=omega1;if(config.clamp!==undefined){animation.zeta=scaleZetaToMatchClamps(animation,config.clamp);}}animation.lastTimestamp=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||now;animation.startTimestamp=triggeredTwice?(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||now:now;}return{onFrame:springOnFrame,onStart:onStart,toValue:toValue,velocity:config.velocity||0,current:toValue,startValue:0,callback:callback,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};}';
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
            _fun33942: for (var _fun33942_ip = 0;;) switch (_fun33942_ip) {
                case 0:
                    var10 = {
                        'damping': 10,
                        'mass': 1,
                        'stiffness': 100,
                        'overshootClamping': false,
                        'restDisplacementThreshold': 0.01,
                        'restSpeedThreshold': 2,
                        'velocity': 0,
                        'duration': 2000,
                        'dampingRatio': 0.5
                    };
                    var8 = 1;
                    var0 = false;
                    var5 = 0;
                    var4 = undefined;
                    var10.reduceMotion = var4;
                    var10.clamp = var4;
                    var1 = global;
                    var9 = var1.Object;
                    var7 = var9.assign;
                    var2 = _closure2_slot1;
                    var1 = {};
                    var13 = null;
                    var11 = var13 != var2;
                    if (!var11) {
                        _fun33942_ip = 75;
                        continue _fun33942
                    }
                case 66:
                    var12 = _closure2_slot1;
                    var11 = var12.duration;
                case 75:
                    if (var11) {
                        _fun33942_ip = 102;
                        continue _fun33942
                    }
                case 78:
                    var12 = _closure2_slot1;
                    var12 = var13 != var12;
                    if (!var12) {
                        _fun33942_ip = 99;
                        continue _fun33942
                    }
                case 89:
                    var13 = _closure2_slot1;
                    var12 = var13.dampingRatio;
                case 99:
                    var11 = var12;
                case 102:
                    var11 = !var11;
                    var11 = !var11;
                    var1.useDuration = var11;
                    var1.skipAnimation = var0;
                    var17 = {};
                    var18 = var9;
                    var16 = var10;
                    var15 = var2;
                    var14 = var1;
                    var1 = var18[var7](var17, var16, var15, var14, var13);
                    var _closure3_slot0 = var1;
                    var7 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var0 = var0[var8];
                    var7 = var7.bind(var4)(var0);
                    var0 = var7.checkIfConfigIsValid;
                    var0 = var0.bind(var7)(var1);
                    var0 = !var0;
                    var1.skipAnimation = var0;
                    var0 = var1.duration;
                    if (!(var5 === var0)) {
                        _fun33942_ip = 197;
                        continue _fun33942
                    }
                case 189:
                    var0 = true;
                    var1.skipAnimation = var0;
                case 197:
                    var0 = {};
                    var7 = function arg0, arg1() {
                        _fun33943: for (var _fun33943_ip = 0;;) switch (_fun33943_ip) {
                            case 0:
                                var1 = arg0;
                                var5 = arg1;
                                var0 = var1.toValue;
                                var2 = var1.startTimestamp;
                                var3 = var1.current;
                                var6 = var5 - var2;
                                var4 = _closure3_slot0;
                                var4 = var4.useDuration;
                                if (!var4) {
                                    _fun33943_ip = 59;
                                    continue _fun33943
                                }
                            case 43:
                                var4 = _closure3_slot0;
                                var4 = var4.duration;
                                if (!(!(var6 >= var4))) {
                                    _fun33943_ip = 438;
                                    continue _fun33943
                                }
                            case 59:
                                var4 = _closure3_slot0;
                                var4 = var4.skipAnimation;
                                if (var4) {
                                    _fun33943_ip = 420;
                                    continue _fun33943
                                }
                            case 75:
                                var6 = var1.lastTimestamp;
                                var4 = var1.velocity;
                                var7 = global;
                                var9 = var7.Math;
                                var8 = var9.min;
                                var7 = var5 - var6;
                                var6 = 64;
                                var6 = var8.bind(var9)(var7, var6);
                                var1.lastTimestamp = var5;
                                var5 = 1000;
                                var8 = var6 / var5;
                                var12 = -var4;
                                var11 = var0 - var3;
                                var13 = var1.zeta;
                                var10 = var1.omega0;
                                var9 = var1.omega1;
                                var4 = 1;
                                if (!(!(var13 < var4))) {
                                    _fun33943_ip = 218;
                                    continue _fun33943
                                }
                            case 161:
                                var6 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var5 = var3[var4];
                                var3 = undefined;
                                var6 = var6.bind(var3)(var5);
                                var5 = var6.criticallyDampedSpringCalculations;
                                var3 = {};
                                var3.v0 = var12;
                                var3.x0 = var11;
                                var3.omega0 = var10;
                                var3.t = var8;
                                var3 = var5.bind(var6)(var1, var3);
                                _fun33943_ip = 283;
                                continue _fun33943;
                            case 218:
                                var7 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var6 = var5[var4];
                                var5 = undefined;
                                var7 = var7.bind(var5)(var6);
                                var6 = var7.underDampedSpringCalculations;
                                var5 = {};
                                var5.zeta = var13;
                                var5.v0 = var12;
                                var5.x0 = var11;
                                var5.omega0 = var10;
                                var5.omega1 = var9;
                                var5.t = var8;
                                var3 = var6.bind(var7)(var1, var5);
                            case 283:
                                var5 = var3.position;
                                var3 = var3.velocity;
                                var1.current = var5;
                                var1.velocity = var3;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var4 = var3[var4];
                                var3 = undefined;
                                var5 = var5.bind(var3)(var4);
                                var4 = var5.isAnimationTerminatingCalculation;
                                var3 = _closure3_slot0;
                                var5 = var4.bind(var5)(var1, var3);
                                var3 = var5.isOvershooting;
                                var4 = var5.isVelocity;
                                var5 = var5.isDisplacement;
                                if (var3) {
                                    _fun33943_ip = 374;
                                    continue _fun33943
                                }
                            case 365:
                                if (!var4) {
                                    _fun33943_ip = 371;
                                    continue _fun33943
                                }
                            case 368:
                                var4 = var5;
                            case 371:
                                var3 = var4;
                            case 374:
                                var2 = _closure3_slot0;
                                var2 = var2.useDuration;
                                if (var2) {
                                    _fun33943_ip = 390;
                                    continue _fun33943
                                }
                            case 387:
                                var2 = !var3;
                            case 390:
                                if (var2) {
                                    _fun33943_ip = 415;
                                    continue _fun33943
                                }
                            case 393:
                                var3 = 0;
                                var1.velocity = var3;
                                var1.current = var0;
                                var1.lastTimestamp = var3;
                                var2 = 0;
                            case 415:
                                var2 = !var2;
                                return var2;
                            case 420:
                                var1.current = var0;
                                var2 = 0;
                                var1.lastTimestamp = var2;
                                var2 = true;
                                return var2;
                            case 438:
                                var1.current = var0;
                                var0 = 0;
                                var1.lastTimestamp = var0;
                                var0 = true;
                                return var0;
                        }
                    };
                    var0.onFrame = var7;
                    var6 = function arg0, arg1, arg2, arg3() {
                        _fun33944: for (var _fun33944_ip = 0;;) switch (_fun33944_ip) {
                            case 0:
                                var2 = arg0;
                                var8 = arg1;
                                var3 = arg2;
                                var5 = arg3;
                                var2.current = var8;
                                var2.startValue = var8;
                                var0 = _closure3_slot0;
                                var12 = var0.mass;
                                var4 = null;
                                var7 = var4 == var5;
                                var0 = undefined;
                                var1 = undefined;
                                if (var7) {
                                    _fun33944_ip = 56;
                                    continue _fun33944
                                }
                            case 50:
                                var1 = var5.lastTimestamp;
                            case 56:
                                if (!var1) {
                                    _fun33944_ip = 77;
                                    continue _fun33944
                                }
                            case 59:
                                var9 = var4 == var5;
                                var7 = undefined;
                                if (var9) {
                                    _fun33944_ip = 74;
                                    continue _fun33944
                                }
                            case 68:
                                var7 = var5.startTimestamp;
                            case 74:
                                var1 = var7;
                            case 77:
                                if (!var1) {
                                    _fun33944_ip = 105;
                                    continue _fun33944
                                }
                            case 80:
                                var7 = var4 == var5;
                                var9 = undefined;
                                if (var7) {
                                    _fun33944_ip = 95;
                                    continue _fun33944
                                }
                            case 89:
                                var9 = var5.toValue;
                            case 95:
                                var7 = var2.toValue;
                                var1 = var9 === var7;
                            case 105:
                                if (!var1) {
                                    _fun33944_ip = 131;
                                    continue _fun33944
                                }
                            case 108:
                                var7 = var4 == var5;
                                var9 = undefined;
                                if (var7) {
                                    _fun33944_ip = 122;
                                    continue _fun33944
                                }
                            case 117:
                                var9 = var5.duration;
                            case 122:
                                var7 = var2.duration;
                                var1 = var9 === var7;
                            case 131:
                                if (!var1) {
                                    _fun33944_ip = 159;
                                    continue _fun33944
                                }
                            case 134:
                                var7 = var4 == var5;
                                var9 = undefined;
                                if (var7) {
                                    _fun33944_ip = 149;
                                    continue _fun33944
                                }
                            case 143:
                                var9 = var5.dampingRatio;
                            case 149:
                                var7 = var2.dampingRatio;
                                var1 = var9 === var7;
                            case 159:
                                var7 = _closure3_slot0;
                                var9 = var7.duration;
                                if (var1) {
                                    _fun33944_ip = 196;
                                    continue _fun33944
                                }
                            case 171:
                                var7 = global;
                                var10 = var7.Number;
                                var7 = var2.toValue;
                                var7 = var10.bind(var0)(var7);
                                var11 = var7 - var8;
                                _fun33944_ip = 214;
                                continue _fun33944;
                            case 196:
                                var8 = var4 == var5;
                                var7 = undefined;
                                if (var8) {
                                    _fun33944_ip = 211;
                                    continue _fun33944
                                }
                            case 205:
                                var7 = var5.startValue;
                            case 211:
                                var11 = var7;
                            case 214:
                                if (var5) {
                                    _fun33944_ip = 234;
                                    continue _fun33944
                                }
                            case 217:
                                var7 = _closure3_slot0;
                                var7 = var7.velocity;
                                if (var7) {
                                    _fun33944_ip = 232;
                                    continue _fun33944
                                }
                            case 230:
                                var7 = 0;
                            case 232:
                                _fun33944_ip = 290;
                                continue _fun33944;
                            case 234:
                                var13 = var4 == var5;
                                if (var1) {
                                    _fun33944_ip = 268;
                                    continue _fun33944
                                }
                            case 241:
                                var10 = undefined;
                                if (var13) {
                                    _fun33944_ip = 252;
                                    continue _fun33944
                                }
                            case 246:
                                var10 = var5.velocity;
                            case 252:
                                var8 = _closure3_slot0;
                                var8 = var8.velocity;
                                var8 = var10 + var8;
                                _fun33944_ip = 282;
                                continue _fun33944;
                            case 268:
                                var10 = undefined;
                                if (var13) {
                                    _fun33944_ip = 279;
                                    continue _fun33944
                                }
                            case 273:
                                var10 = var5.velocity;
                            case 279:
                                var8 = var10;
                            case 282:
                                if (var8) {
                                    _fun33944_ip = 287;
                                    continue _fun33944
                                }
                            case 285:
                                var8 = 0;
                            case 287:
                                var7 = var8;
                            case 290:
                                var2.velocity = var7;
                                if (var1) {
                                    _fun33944_ip = 564;
                                    continue _fun33944
                                }
                            case 302:
                                var7 = _closure3_slot0;
                                var7 = var7.useDuration;
                                if (!var7) {
                                    _fun33944_ip = 425;
                                    continue _fun33944
                                }
                            case 315:
                                var8 = var9;
                                if (!var1) {
                                    _fun33944_ip = 369;
                                    continue _fun33944
                                }
                            case 321:
                                var7 = var4 == var5;
                                var10 = undefined;
                                if (var7) {
                                    _fun33944_ip = 336;
                                    continue _fun33944
                                }
                            case 330:
                                var10 = var5.lastTimestamp;
                            case 336:
                                if (var10) {
                                    _fun33944_ip = 341;
                                    continue _fun33944
                                }
                            case 339:
                                var10 = 0;
                            case 341:
                                var13 = var4 == var5;
                                var7 = undefined;
                                if (var13) {
                                    _fun33944_ip = 356;
                                    continue _fun33944
                                }
                            case 350:
                                var7 = var5.startTimestamp;
                            case 356:
                                if (var7) {
                                    _fun33944_ip = 361;
                                    continue _fun33944
                                }
                            case 359:
                                var7 = 0;
                            case 361:
                                var7 = var10 - var7;
                                var8 = var9 - var7;
                            case 369:
                                var7 = _closure3_slot0;
                                var7.duration = var8;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot1;
                                var7 = 1;
                                var7 = var9[var7];
                                var10 = var8.bind(var0)(var7);
                                var9 = var10.calculateNewMassToMatchDuration;
                                var8 = _closure3_slot0;
                                var7 = var2.velocity;
                                var12 = var9.bind(var10)(var11, var8, var7);
                            case 425:
                                var10 = _closure1_slot0;
                                var8 = _closure1_slot1;
                                var9 = 1;
                                var8 = var8[var9];
                                var11 = var10.bind(var0)(var8);
                                var10 = var11.initialCalculations;
                                var8 = _closure3_slot0;
                                var8 = var10.bind(var11)(var12, var8);
                                var11 = var8.zeta;
                                var10 = var8.omega0;
                                var8 = var8.omega1;
                                var2.zeta = var11;
                                var2.omega0 = var10;
                                var2.omega1 = var8;
                                var8 = _closure3_slot0;
                                var8 = var8.clamp;
                                if (!(var0 !== var8)) {
                                    _fun33944_ip = 642;
                                    continue _fun33944
                                }
                            case 517:
                                var8 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var7 = var7[var9];
                                var8 = var8.bind(var0)(var7);
                                var7 = var8.scaleZetaToMatchClamps;
                                var6 = _closure3_slot0;
                                var6 = var6.clamp;
                                var6 = var7.bind(var8)(var2, var6);
                                var2.zeta = var6;
                                _fun33944_ip = 642;
                                continue _fun33944;
                            case 564:
                                var7 = var4 == var5;
                                var6 = undefined;
                                if (var7) {
                                    _fun33944_ip = 579;
                                    continue _fun33944
                                }
                            case 573:
                                var6 = var5.zeta;
                            case 579:
                                if (var6) {
                                    _fun33944_ip = 584;
                                    continue _fun33944
                                }
                            case 582:
                                var6 = 0;
                            case 584:
                                var2.zeta = var6;
                                var7 = var4 == var5;
                                var6 = undefined;
                                if (var7) {
                                    _fun33944_ip = 605;
                                    continue _fun33944
                                }
                            case 599:
                                var6 = var5.omega0;
                            case 605:
                                if (var6) {
                                    _fun33944_ip = 610;
                                    continue _fun33944
                                }
                            case 608:
                                var6 = 0;
                            case 610:
                                var2.omega0 = var6;
                                var7 = var4 == var5;
                                var6 = undefined;
                                if (var7) {
                                    _fun33944_ip = 631;
                                    continue _fun33944
                                }
                            case 625:
                                var6 = var5.omega1;
                            case 631:
                                if (var6) {
                                    _fun33944_ip = 636;
                                    continue _fun33944
                                }
                            case 634:
                                var6 = 0;
                            case 636:
                                var2.omega1 = var6;
                            case 642:
                                var7 = var4 == var5;
                                var6 = undefined;
                                if (var7) {
                                    _fun33944_ip = 657;
                                    continue _fun33944
                                }
                            case 651:
                                var6 = var5.lastTimestamp;
                            case 657:
                                if (var6) {
                                    _fun33944_ip = 663;
                                    continue _fun33944
                                }
                            case 660:
                                var6 = var3;
                            case 663:
                                var2.lastTimestamp = var6;
                                if (!var1) {
                                    _fun33944_ip = 690;
                                    continue _fun33944
                                }
                            case 672:
                                var6 = var4 == var5;
                                var4 = undefined;
                                if (var6) {
                                    _fun33944_ip = 687;
                                    continue _fun33944
                                }
                            case 681:
                                var4 = var5.startTimestamp;
                            case 687:
                                var1 = var4;
                            case 690:
                                if (var1) {
                                    _fun33944_ip = 696;
                                    continue _fun33944
                                }
                            case 693:
                                var1 = var3;
                            case 696:
                                var2.startTimestamp = var1;
                                return var0;
                        }
                    };
                    var0.onStart = var6;
                    var6 = _closure2_slot0;
                    var0.toValue = var6;
                    var6 = var1.velocity;
                    if (var6) {
                        _fun33942_ip = 239;
                        continue _fun33942
                    }
                case 237:
                    var6 = 0;
                case 239:
                    var0.velocity = var6;
                    var6 = _closure2_slot0;
                    var0.current = var6;
                    var0.startValue = var5;
                    var3 = _closure2_slot2;
                    var0.callback = var3;
                    var0.lastTimestamp = var5;
                    var0.startTimestamp = var5;
                    var0.zeta = var5;
                    var0.omega0 = var5;
                    var0.omega1 = var5;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var5];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.getReduceMotionForAnimation;
                    var1 = var1.reduceMotion;
                    var1 = var2.bind(var3)(var1);
                    var0.reduceMotion = var1;
                    return var0;
            }
        };
        var5 = {};
        var5.userConfig = var11;
        var11 = 1;
        var12 = var9[var11];
        var12 = var8.bind(var7)(var12);
        var12 = var12.checkIfConfigIsValid;
        var5.checkIfConfigIsValid = var12;
        var12 = var9[var11];
        var12 = var8.bind(var7)(var12);
        var12 = var12.underDampedSpringCalculations;
        var5.underDampedSpringCalculations = var12;
        var12 = var9[var11];
        var12 = var8.bind(var7)(var12);
        var12 = var12.criticallyDampedSpringCalculations;
        var5.criticallyDampedSpringCalculations = var12;
        var12 = var9[var11];
        var12 = var8.bind(var7)(var12);
        var12 = var12.isAnimationTerminatingCalculation;
        var5.isAnimationTerminatingCalculation = var12;
        var12 = var9[var11];
        var12 = var8.bind(var7)(var12);
        var12 = var12.calculateNewMassToMatchDuration;
        var5.calculateNewMassToMatchDuration = var12;
        var12 = var9[var11];
        var12 = var8.bind(var7)(var12);
        var12 = var12.initialCalculations;
        var5.initialCalculations = var12;
        var11 = var9[var11];
        var11 = var8.bind(var7)(var11);
        var11 = var11.scaleZetaToMatchClamps;
        var5.scaleZetaToMatchClamps = var11;
        var5.toValue = var3;
        var5.callback = var10;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.getReduceMotionForAnimation;
        var5.getReduceMotionForAnimation = var6;
        var0.__closure = var5;
        var5 = 892655332136.0;
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
    var8 = 1;
    var9 = var7[var8];
    var9 = var6.bind(var0)(var9);
    var9 = var9.checkIfConfigIsValid;
    var4.checkIfConfigIsValid = var9;
    var9 = var7[var8];
    var9 = var6.bind(var0)(var9);
    var9 = var9.underDampedSpringCalculations;
    var4.underDampedSpringCalculations = var9;
    var9 = var7[var8];
    var9 = var6.bind(var0)(var9);
    var9 = var9.criticallyDampedSpringCalculations;
    var4.criticallyDampedSpringCalculations = var9;
    var9 = var7[var8];
    var9 = var6.bind(var0)(var9);
    var9 = var9.isAnimationTerminatingCalculation;
    var4.isAnimationTerminatingCalculation = var9;
    var9 = var7[var8];
    var9 = var6.bind(var0)(var9);
    var9 = var9.calculateNewMassToMatchDuration;
    var4.calculateNewMassToMatchDuration = var9;
    var9 = var7[var8];
    var9 = var6.bind(var0)(var9);
    var9 = var9.initialCalculations;
    var4.initialCalculations = var9;
    var8 = var7[var8];
    var8 = var6.bind(var0)(var8);
    var8 = var8.scaleZetaToMatchClamps;
    var4.scaleZetaToMatchClamps = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.getReduceMotionForAnimation;
    var4.getReduceMotionForAnimation = var5;
    var1.__closure = var4;
    var4 = 16128171855735.0;
    var1.__workletHash = var4;
    var1.__initData = var3;
    var2.withSpring = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3761, 3804]);