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
    var3 = 'function computeEasingProgress_Pnpm_swipeSimulatorTs1(startingTimestamp,distance,velocity){if(Math.abs(distance)<1){return 1;}const elapsedTime=(_getAnimationTimestamp()-startingTimestamp)/1000;const currentPosition=velocity*elapsedTime;const progress=currentPosition/distance;return progress;}';
    var0.code = var3;
    var _closure1_slot2 = var0;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun35016: for (var _fun35016_ip = 0;;) switch (_fun35016_ip) {
                case 0:
                    var2 = arg1;
                    var1 = global;
                    var3 = var1.Math;
                    var0 = var3.abs;
                    var3 = var0.bind(var3)(var2);
                    var0 = 1;
                    var3 = var3 < var0;
                    if (var3) {
                        _fun35016_ip = 72;
                        continue _fun35016
                    }
                case 32:
                    var3 = var1._getAnimationTimestamp;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var1 = arg0;
                    var3 = var3 - var1;
                    var1 = 1000;
                    var3 = var3 / var1;
                    var1 = arg2;
                    var1 = var1 * var3;
                    var0 = var1 / var2;
                case 72:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 11092056948922.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var3 = var3.bind(var0)();
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'function easing_Pnpm_swipeSimulatorTs2(x){return 1-Math.pow(1-x,5);}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            var0 = global;
            var4 = var0.Math;
            var3 = var4.pow;
            var1 = 1;
            var0 = arg0;
            var2 = var1 - var0;
            var0 = 5;
            var0 = var3.bind(var4)(var2, var0);
            var0 = var1 - var0;
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 4992389111746.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 'function computeProgress_Pnpm_swipeSimulatorTs3(screenTransitionConfig,event,isTransitionCanceled){const screenDimensions=screenTransitionConfig.screenDimensions;const progressX=Math.abs(event.translationX/screenDimensions.width);const progressY=Math.abs(event.translationY/screenDimensions.height);const maxProgress=Math.max(progressX,progressY);const progress=isTransitionCanceled?maxProgress/2:maxProgress;return progress;}';
    var3.code = var4;
    var _closure1_slot6 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun35020: for (var _fun35020_ip = 0;;) switch (_fun35020_ip) {
                case 0:
                    var5 = arg1;
                    var0 = arg0;
                    var1 = var0.screenDimensions;
                    var0 = global;
                    var4 = var0.Math;
                    var3 = var4.abs;
                    var6 = var5.translationX;
                    var2 = var1.width;
                    var2 = var6 / var2;
                    var3 = var3.bind(var4)(var2);
                    var4 = var0.Math;
                    var2 = var4.abs;
                    var5 = var5.translationY;
                    var1 = var1.height;
                    var1 = var5 / var1;
                    var2 = var2.bind(var4)(var1);
                    var1 = var0.Math;
                    var0 = var1.max;
                    var2 = var0.bind(var1)(var3, var2);
                    var1 = arg2;
                    var0 = var2;
                    if (!var1) {
                        _fun35020_ip = 111;
                        continue _fun35020
                    }
                case 104:
                    var1 = 2;
                    var0 = var2 / var1;
                case 111:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 3778680834909.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot6;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot7 = var3;
    var3 = {};
    var4 = 'function maybeScheduleNextFrame_Pnpm_swipeSimulatorTs4(step,didScreenReachDestination,screenTransitionConfig,event,isTransitionCanceled){const{computeProgress,RNScreensTurboModule}=this.__closure;if(!didScreenReachDestination){const stackTag=screenTransitionConfig.stackTag;const progress=computeProgress(screenTransitionConfig,event,isTransitionCanceled);RNScreensTurboModule.updateTransition(stackTag,progress);requestAnimationFrame(step);}else{var _screenTransitionConf;(_screenTransitionConf=screenTransitionConfig.onFinishAnimation)===null||_screenTransitionConf===void 0||_screenTransitionConf.call(screenTransitionConfig);}}';
    var3.code = var4;
    var _closure1_slot8 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2, arg3, arg4() {
            _fun35022: for (var _fun35022_ip = 0;;) switch (_fun35022_ip) {
                case 0:
                    var1 = arg2;
                    var0 = arg1;
                    if (var0) {
                        _fun35022_ip = 92;
                        continue _fun35022
                    }
                case 9:
                    var5 = var1.stackTag;
                    var6 = _closure1_slot7;
                    var3 = undefined;
                    var4 = arg3;
                    var2 = arg4;
                    var4 = var6.bind(var3)(var1, var4, var2);
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var0 = 0;
                    var0 = var6[var0];
                    var0 = var2.bind(var3)(var0);
                    var2 = var0.RNScreensTurboModule;
                    var0 = var2.updateTransition;
                    var0 = var0.bind(var2)(var5, var4);
                    var0 = global;
                    var2 = var0.requestAnimationFrame;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0);
                    _fun35022_ip = 114;
                    continue _fun35022;
                case 92:
                    var2 = var1.onFinishAnimation;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun35022_ip = 114;
                        continue _fun35022
                    }
                case 104:
                    var0 = var1.onFinishAnimation;
                    var0 = var0.bind(var1)();
                case 114:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot7;
        var2.computeProgress = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 0;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.RNScreensTurboModule;
        var2.RNScreensTurboModule = var3;
        var0.__closure = var2;
        var2 = 7657931427196.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot8;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot9 = var3;
    var3 = {};
    var4 = "function getSwipeSimulator_Pnpm_swipeSimulatorTs5(event,screenTransitionConfig,lockAxis){const{BASE_VELOCITY,ADDITIONAL_VELOCITY_FACTOR_X,ADDITIONAL_VELOCITY_FACTOR_Y,ADDITIONAL_VELOCITY_FACTOR_XY,applyStyleForBelowTopScreen,computeEasingProgress,easing,applyStyle,maybeScheduleNextFrame}=this.__closure;const screenDimensions=screenTransitionConfig.screenDimensions;const startTimestamp=_getAnimationTimestamp();const{isTransitionCanceled:isTransitionCanceled}=screenTransitionConfig;const startingPosition={x:event.translationX,y:event.translationY};const direction={x:Math.sign(event.translationX),y:Math.sign(event.translationY)};const finalPosition=isTransitionCanceled?{x:0,y:0}:{x:direction.x*screenDimensions.width,y:direction.y*screenDimensions.height};const distance={x:Math.abs(finalPosition.x-startingPosition.x),y:Math.abs(finalPosition.y-startingPosition.y)};const didScreenReachDestination={x:false,y:false};const velocity={x:BASE_VELOCITY,y:BASE_VELOCITY};if(lockAxis==='x'){velocity.y=0;velocity.x+=ADDITIONAL_VELOCITY_FACTOR_X*distance.x/screenDimensions.width;}else if(lockAxis==='y'){velocity.x=0;velocity.y+=ADDITIONAL_VELOCITY_FACTOR_Y*distance.y/screenDimensions.height;}else{const euclideanDistance=Math.sqrt(distance.x**2+distance.y**2);const screenDiagonal=Math.sqrt(screenDimensions.width**2+screenDimensions.height**2);const velocityVectorLength=BASE_VELOCITY+ADDITIONAL_VELOCITY_FACTOR_XY*euclideanDistance/screenDiagonal;if(Math.abs(startingPosition.x)>Math.abs(startingPosition.y)){velocity.x=velocityVectorLength;velocity.y=velocityVectorLength*Math.abs(startingPosition.y/startingPosition.x);}else{velocity.x=velocityVectorLength*Math.abs(startingPosition.x/startingPosition.y);velocity.y=velocityVectorLength;}}if(isTransitionCanceled){function didScreenReachDestinationCheck(){if(lockAxis==='x'){return didScreenReachDestination.x;}else if(lockAxis==='y'){return didScreenReachDestination.y;}else{return didScreenReachDestination.x&&didScreenReachDestination.y;}}function restoreOriginalStyleForBelowTopScreen(){event.translationX=direction.x*screenDimensions.width;event.translationY=direction.y*screenDimensions.height;applyStyleForBelowTopScreen(screenTransitionConfig,event);}const computeFrame=function(){const progress={x:computeEasingProgress(startTimestamp,distance.x,velocity.x),y:computeEasingProgress(startTimestamp,distance.y,velocity.y)};event.translationX=startingPosition.x-direction.x*distance.x*easing(progress.x);event.translationY=startingPosition.y-direction.y*distance.y*easing(progress.y);if(direction.x>0){if(event.translationX<=0){didScreenReachDestination.x=true;event.translationX=0;}}else{if(event.translationX>=0){didScreenReachDestination.x=true;event.translationX=0;}}if(direction.y>0){if(event.translationY<=0){didScreenReachDestination.y=true;event.translationY=0;}}else{if(event.translationY>=0){didScreenReachDestination.y=true;event.translationY=0;}}applyStyle(screenTransitionConfig,event);const finished=didScreenReachDestinationCheck();if(finished){restoreOriginalStyleForBelowTopScreen();}maybeScheduleNextFrame(computeFrame,finished,screenTransitionConfig,event,isTransitionCanceled);};return computeFrame;}else{const computeFrame=function(){const progress={x:computeEasingProgress(startTimestamp,distance.x,velocity.x),y:computeEasingProgress(startTimestamp,distance.y,velocity.y)};event.translationX=startingPosition.x+direction.x*distance.x*easing(progress.x);event.translationY=startingPosition.y+direction.y*distance.y*easing(progress.y);if(direction.x>0){if(event.translationX>=screenDimensions.width){didScreenReachDestination.x=true;event.translationX=screenDimensions.width;}}else{if(event.translationX<=-screenDimensions.width){didScreenReachDestination.x=true;event.translationX=-screenDimensions.width;}}if(direction.y>0){if(event.translationY>=screenDimensions.height){didScreenReachDestination.y=true;event.translationY=screenDimensions.height;}}else{if(event.translationY<=-screenDimensions.height){didScreenReachDestination.y=true;event.translationY=-screenDimensions.height;}}applyStyle(screenTransitionConfig,event);maybeScheduleNextFrame(computeFrame,didScreenReachDestination.x||didScreenReachDestination.y,screenTransitionConfig,event,isTransitionCanceled);};return computeFrame;}}";
    var3.code = var4;
    var _closure1_slot10 = var3;
    var1 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun35024: for (var _fun35024_ip = 0;;) switch (_fun35024_ip) {
                case 0:
                    var3 = arg0;
                    var0 = arg1;
                    var9 = arg2;
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var0;
                    var _closure3_slot2 = var9;
                    var2 = var0.screenDimensions;
                    var _closure3_slot3 = var2;
                    var8 = global;
                    var5 = var8._getAnimationTimestamp;
                    var4 = undefined;
                    var4 = var5.bind(var4)();
                    var _closure3_slot4 = var4;
                    var0 = var0.isTransitionCanceled;
                    var _closure3_slot5 = var0;
                    var4 = {};
                    var5 = var3.translationX;
                    var4.x = var5;
                    var5 = var3.translationY;
                    var4.y = var5;
                    var _closure3_slot6 = var4;
                    var7 = var8.Math;
                    var6 = var7.sign;
                    var5 = var3.translationX;
                    var7 = var6.bind(var7)(var5);
                    var _closure3_slot7 = var7;
                    var6 = var8.Math;
                    var5 = var6.sign;
                    var3 = var3.translationY;
                    var6 = var5.bind(var6)(var3);
                    var _closure3_slot8 = var6;
                    if (var0) {
                        _fun35024_ip = 176;
                        continue _fun35024
                    }
                case 146:
                    var3 = {};
                    var5 = var2.width;
                    var5 = var7 * var5;
                    var3.x = var5;
                    var5 = var2.height;
                    var5 = var6 * var5;
                    var3.y = var5;
                    _fun35024_ip = 186;
                    continue _fun35024;
                case 176:
                    var3 = {
                        'x': 0,
                        'y': 0
                    };
                case 186:
                    var5 = {};
                    var10 = var8.Math;
                    var7 = var10.abs;
                    var11 = var3.x;
                    var6 = var4.x;
                    var6 = var11 - var6;
                    var6 = var7.bind(var10)(var6);
                    var5.x = var6;
                    var7 = var8.Math;
                    var6 = var7.abs;
                    var10 = var3.y;
                    var3 = var4.y;
                    var3 = var10 - var3;
                    var3 = var6.bind(var7)(var3);
                    var5.y = var3;
                    var _closure3_slot9 = var5;
                    var3 = {
                        'x': false,
                        'y': false
                    };
                    var _closure3_slot10 = var3;
                    var3 = {
                        'x': 400,
                        'y': 400
                    };
                    var6 = 400;
                    var _closure3_slot11 = var3;
                    var7 = 'x';
                    if (!(var7 !== var9)) {
                        _fun35024_ip = 618;
                        continue _fun35024
                    }
                case 307:
                    var7 = 'y';
                    if (!(var7 !== var9)) {
                        _fun35024_ip = 569;
                        continue _fun35024
                    }
                case 318:
                    var10 = var8.Math;
                    var9 = var10.sqrt;
                    var15 = var5.x;
                    var13 = 2;
                    var14 = var13;
                    var11 = exponentiationOperator(var15, var14);
                    var15 = var5.y;
                    var7 = exponentiationOperator(var15, var14);
                    var7 = var11 + var7;
                    var10 = var9.bind(var10)(var7);
                    var11 = var8.Math;
                    var9 = var11.sqrt;
                    var15 = var2.width;
                    var12 = exponentiationOperator(var15, var14);
                    var15 = var2.height;
                    var7 = exponentiationOperator(var15, var14);
                    var7 = var12 + var7;
                    var9 = var9.bind(var11)(var7);
                    var7 = 600;
                    var7 = var7 * var10;
                    var7 = var7 / var9;
                    var7 = var6 + var7;
                    var11 = var8.Math;
                    var10 = var11.abs;
                    var9 = var4.x;
                    var10 = var10.bind(var11)(var9);
                    var12 = var8.Math;
                    var11 = var12.abs;
                    var9 = var4.y;
                    var9 = var11.bind(var12)(var9);
                    if (!(!(var10 > var9))) {
                        _fun35024_ip = 520;
                        continue _fun35024
                    }
                case 468:
                    var11 = var8.Math;
                    var10 = var11.abs;
                    var12 = var4.x;
                    var9 = var4.y;
                    var9 = var12 / var9;
                    var9 = var10.bind(var11)(var9);
                    var9 = var7 * var9;
                    var3.x = var9;
                    var3.y = var7;
                    _fun35024_ip = 659;
                    continue _fun35024;
                case 520:
                    var3.x = var7;
                    var9 = var8.Math;
                    var8 = var9.abs;
                    var10 = var4.y;
                    var4 = var4.x;
                    var4 = var10 / var4;
                    var4 = var8.bind(var9)(var4);
                    var4 = var7 * var4;
                    var3.y = var4;
                    _fun35024_ip = 659;
                    continue _fun35024;
                case 569:
                    var4 = 0;
                    var3.x = var4;
                    var7 = var3.y;
                    var8 = var5.y;
                    var4 = 500;
                    var8 = var4 * var8;
                    var4 = var2.height;
                    var4 = var8 / var4;
                    var4 = var7 + var4;
                    var3.y = var4;
                    _fun35024_ip = 659;
                    continue _fun35024;
                case 618:
                    var4 = 0;
                    var3.y = var4;
                    var4 = var3.x;
                    var5 = var5.x;
                    var5 = var6 * var5;
                    var2 = var2.width;
                    var2 = var5 / var2;
                    var2 = var4 + var2;
                    var3.x = var2;
                case 659:
                    if (var0) {
                        _fun35024_ip = 673;
                        continue _fun35024
                    }
                case 662:
                    var0 = function() {
                        _fun35026: for (var _fun35026_ip = 0;;) switch (_fun35026_ip) {
                            case 0:
                                var4 = {};
                                var7 = _closure1_slot3;
                                var6 = _closure3_slot4;
                                var0 = _closure3_slot9;
                                var5 = var0.x;
                                var0 = _closure3_slot11;
                                var3 = var0.x;
                                var0 = undefined;
                                var3 = var7.bind(var0)(var6, var5, var3);
                                var4.x = var3;
                                var3 = _closure3_slot9;
                                var5 = var3.y;
                                var3 = _closure3_slot11;
                                var3 = var3.y;
                                var3 = var7.bind(var0)(var6, var5, var3);
                                var4.y = var3;
                                var5 = _closure3_slot0;
                                var6 = _closure3_slot6;
                                var9 = var6.x;
                                var3 = _closure3_slot7;
                                var7 = _closure3_slot9;
                                var7 = var7.x;
                                var10 = var3 * var7;
                                var8 = _closure1_slot5;
                                var7 = var4.x;
                                var7 = var8.bind(var0)(var7);
                                var7 = var10 * var7;
                                var7 = var9 + var7;
                                var5.translationX = var7;
                                var6 = var6.y;
                                var9 = _closure3_slot8;
                                var7 = _closure3_slot9;
                                var7 = var7.y;
                                var7 = var9 * var7;
                                var4 = var4.y;
                                var4 = var8.bind(var0)(var4);
                                var4 = var7 * var4;
                                var4 = var6 + var4;
                                var5.translationY = var4;
                                var4 = 0;
                                if (!(!(var3 > var4))) {
                                    _fun35026_ip = 248;
                                    continue _fun35026
                                }
                            case 186:
                                var3 = _closure3_slot0;
                                var5 = var3.translationX;
                                var3 = _closure3_slot3;
                                var3 = var3.width;
                                var3 = -var3;
                                if (!(var5 <= var3)) {
                                    _fun35026_ip = 302;
                                    continue _fun35026
                                }
                            case 212:
                                var5 = _closure3_slot10;
                                var3 = true;
                                var5.x = var3;
                                var5 = _closure3_slot0;
                                var3 = _closure3_slot3;
                                var3 = var3.width;
                                var3 = -var3;
                                var5.translationX = var3;
                                _fun35026_ip = 302;
                                continue _fun35026;
                            case 248:
                                var3 = _closure3_slot0;
                                var5 = var3.translationX;
                                var3 = _closure3_slot3;
                                var3 = var3.width;
                                if (!(var5 >= var3)) {
                                    _fun35026_ip = 302;
                                    continue _fun35026
                                }
                            case 271:
                                var5 = _closure3_slot10;
                                var3 = true;
                                var5.x = var3;
                                var5 = _closure3_slot0;
                                var3 = _closure3_slot3;
                                var3 = var3.width;
                                var5.translationX = var3;
                            case 302:
                                var3 = _closure3_slot8;
                                if (!(!(var3 > var4))) {
                                    _fun35026_ip = 372;
                                    continue _fun35026
                                }
                            case 310:
                                var3 = _closure3_slot0;
                                var4 = var3.translationY;
                                var3 = _closure3_slot3;
                                var3 = var3.height;
                                var3 = -var3;
                                if (!(var4 <= var3)) {
                                    _fun35026_ip = 426;
                                    continue _fun35026
                                }
                            case 336:
                                var4 = _closure3_slot10;
                                var3 = true;
                                var4.y = var3;
                                var4 = _closure3_slot0;
                                var3 = _closure3_slot3;
                                var3 = var3.height;
                                var3 = -var3;
                                var4.translationY = var3;
                                _fun35026_ip = 426;
                                continue _fun35026;
                            case 372:
                                var3 = _closure3_slot0;
                                var4 = var3.translationY;
                                var3 = _closure3_slot3;
                                var3 = var3.height;
                                if (!(var4 >= var3)) {
                                    _fun35026_ip = 426;
                                    continue _fun35026
                                }
                            case 395:
                                var4 = _closure3_slot10;
                                var3 = true;
                                var4.y = var3;
                                var4 = _closure3_slot0;
                                var3 = _closure3_slot3;
                                var3 = var3.height;
                                var4.translationY = var3;
                            case 426:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var3 = 1;
                                var3 = var5[var3];
                                var6 = var4.bind(var0)(var3);
                                var5 = var6.applyStyle;
                                var4 = _closure3_slot1;
                                var3 = _closure3_slot0;
                                var3 = var5.bind(var6)(var4, var3);
                                var6 = _closure1_slot9;
                                var5 = _closure3_slot13;
                                var2 = _closure3_slot10;
                                var4 = var2.x;
                                if (var4) {
                                    _fun35026_ip = 495;
                                    continue _fun35026
                                }
                            case 486:
                                var2 = _closure3_slot10;
                                var4 = var2.y;
                            case 495:
                                var13 = _closure3_slot1;
                                var12 = _closure3_slot0;
                                var11 = _closure3_slot5;
                                var16 = undefined;
                                var15 = var5;
                                var14 = var4;
                                var1 = var16[var6](var15, var14, var13, var12, var11, var10);
                                return var0;
                        }
                    };
                    var _closure3_slot13 = var0;
                    return var0;
                case 673:
                    var0 = function() {
                        _fun35025: for (var _fun35025_ip = 0;;) switch (_fun35025_ip) {
                            case 0:
                                var4 = {};
                                var7 = _closure1_slot3;
                                var6 = _closure3_slot4;
                                var0 = _closure3_slot9;
                                var5 = var0.x;
                                var0 = _closure3_slot11;
                                var3 = var0.x;
                                var0 = undefined;
                                var3 = var7.bind(var0)(var6, var5, var3);
                                var4.x = var3;
                                var3 = _closure3_slot9;
                                var5 = var3.y;
                                var3 = _closure3_slot11;
                                var3 = var3.y;
                                var3 = var7.bind(var0)(var6, var5, var3);
                                var4.y = var3;
                                var5 = _closure3_slot0;
                                var6 = _closure3_slot6;
                                var9 = var6.x;
                                var3 = _closure3_slot7;
                                var7 = _closure3_slot9;
                                var7 = var7.x;
                                var10 = var3 * var7;
                                var8 = _closure1_slot5;
                                var7 = var4.x;
                                var7 = var8.bind(var0)(var7);
                                var7 = var10 * var7;
                                var7 = var9 - var7;
                                var5.translationX = var7;
                                var6 = var6.y;
                                var9 = _closure3_slot8;
                                var7 = _closure3_slot9;
                                var7 = var7.y;
                                var7 = var9 * var7;
                                var4 = var4.y;
                                var4 = var8.bind(var0)(var4);
                                var4 = var7 * var4;
                                var4 = var6 - var4;
                                var5.translationY = var4;
                                var4 = 0;
                                if (!(!(var3 > var4))) {
                                    _fun35025_ip = 224;
                                    continue _fun35025
                                }
                            case 186:
                                var3 = _closure3_slot0;
                                var3 = var3.translationX;
                                if (!(var3 >= var4)) {
                                    _fun35025_ip = 260;
                                    continue _fun35025
                                }
                            case 200:
                                var5 = _closure3_slot10;
                                var3 = true;
                                var5.x = var3;
                                var3 = _closure3_slot0;
                                var3.translationX = var4;
                                _fun35025_ip = 260;
                                continue _fun35025;
                            case 224:
                                var3 = _closure3_slot0;
                                var3 = var3.translationX;
                                if (!(var3 <= var4)) {
                                    _fun35025_ip = 260;
                                    continue _fun35025
                                }
                            case 238:
                                var5 = _closure3_slot10;
                                var3 = true;
                                var5.x = var3;
                                var3 = _closure3_slot0;
                                var3.translationX = var4;
                            case 260:
                                var3 = _closure3_slot8;
                                if (!(!(var3 > var4))) {
                                    _fun35025_ip = 306;
                                    continue _fun35025
                                }
                            case 268:
                                var3 = _closure3_slot0;
                                var3 = var3.translationY;
                                if (!(var3 >= var4)) {
                                    _fun35025_ip = 342;
                                    continue _fun35025
                                }
                            case 282:
                                var5 = _closure3_slot10;
                                var3 = true;
                                var5.y = var3;
                                var3 = _closure3_slot0;
                                var3.translationY = var4;
                                _fun35025_ip = 342;
                                continue _fun35025;
                            case 306:
                                var3 = _closure3_slot0;
                                var3 = var3.translationY;
                                if (!(var3 <= var4)) {
                                    _fun35025_ip = 342;
                                    continue _fun35025
                                }
                            case 320:
                                var5 = _closure3_slot10;
                                var3 = true;
                                var5.y = var3;
                                var3 = _closure3_slot0;
                                var3.translationY = var4;
                            case 342:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var5 = 1;
                                var3 = var3[var5];
                                var7 = var4.bind(var0)(var3);
                                var6 = var7.applyStyle;
                                var4 = _closure3_slot1;
                                var3 = _closure3_slot0;
                                var3 = var6.bind(var7)(var4, var3);
                                var4 = _closure3_slot2;
                                var3 = 'x';
                                if (!(var3 !== var4)) {
                                    _fun35025_ip = 432;
                                    continue _fun35025
                                }
                            case 394:
                                var4 = _closure3_slot2;
                                var3 = 'y';
                                var6 = var3 === var4;
                                if (var6) {
                                    _fun35025_ip = 418;
                                    continue _fun35025
                                }
                            case 409:
                                var3 = _closure3_slot10;
                                var6 = var3.x;
                            case 418:
                                if (!var6) {
                                    _fun35025_ip = 430;
                                    continue _fun35025
                                }
                            case 421:
                                var3 = _closure3_slot10;
                                var6 = var3.y;
                            case 430:
                                _fun35025_ip = 441;
                                continue _fun35025;
                            case 432:
                                var3 = _closure3_slot10;
                                var6 = var3.x;
                            case 441:
                                if (!var6) {
                                    _fun35025_ip = 523;
                                    continue _fun35025
                                }
                            case 444:
                                var7 = _closure3_slot0;
                                var8 = _closure3_slot7;
                                var3 = _closure3_slot3;
                                var4 = var3.width;
                                var4 = var8 * var4;
                                var7.translationX = var4;
                                var4 = _closure3_slot8;
                                var3 = var3.height;
                                var3 = var4 * var3;
                                var7.translationY = var3;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var5];
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.applyStyleForBelowTopScreen;
                                var3 = _closure3_slot1;
                                var3 = var4.bind(var5)(var3, var7);
                            case 523:
                                var5 = _closure1_slot9;
                                var15 = _closure3_slot12;
                                var13 = _closure3_slot1;
                                var12 = _closure3_slot0;
                                var11 = _closure3_slot5;
                                var16 = undefined;
                                var14 = var6;
                                var1 = var16[var5](var15, var14, var13, var12, var11, var10);
                                return var0;
                        }
                    };
                    var _closure3_slot12 = var0;
                    return var0;
            }
        };
        var2 = {
            'BASE_VELOCITY': 400,
            'ADDITIONAL_VELOCITY_FACTOR_X': 400,
            'ADDITIONAL_VELOCITY_FACTOR_Y': 500,
            'ADDITIONAL_VELOCITY_FACTOR_XY': 600
        };
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 1;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.applyStyleForBelowTopScreen;
        var2.applyStyleForBelowTopScreen = var7;
        var7 = _closure1_slot3;
        var2.computeEasingProgress = var7;
        var7 = _closure1_slot5;
        var2.easing = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.applyStyle;
        var2.applyStyle = var3;
        var3 = _closure1_slot9;
        var2.maybeScheduleNextFrame = var3;
        var0.__closure = var2;
        var2 = 11722244836970.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot10;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.getSwipeSimulator = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3867, 3865]);