// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var5 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = 0;
    var2 = var5[var0];
    var0 = undefined;
    var4 = var3.bind(var0)(var2);
    var2 = var4.isAndroid;
    var2 = var2.bind(var4)();
    var _closure1_slot3 = var2;
    var2 = {};
    var4 = 'function startObservingProgress_Pnpm_animationsManagerTs1(tag,sharedValue,animationType){const{LayoutAnimationType,TAG_OFFSET}=this.__closure;const isSharedTransition=animationType===LayoutAnimationType.SHARED_ELEMENT_TRANSITION;sharedValue.addListener(tag+TAG_OFFSET,function(){global._notifyAboutProgress(tag,sharedValue.value,isSharedTransition);});}';
    var2.code = var4;
    var _closure1_slot4 = var2;
    var2 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            var5 = arg0;
            var4 = arg1;
            var _closure3_slot0 = var5;
            var _closure3_slot1 = var4;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 1;
            var2 = var2[var0];
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var2 = var2.LayoutAnimationType;
            var3 = var2.SHARED_ELEMENT_TRANSITION;
            var2 = arg2;
            var2 = var2 === var3;
            var _closure3_slot2 = var2;
            var3 = var4.addListener;
            var2 = 1000000000;
            var2 = var5 + var2;
            var1 = function() { // Environment: var1
                var4 = _closure1_slot0;
                var3 = var4._notifyAboutProgress;
                var2 = _closure3_slot0;
                var1 = _closure3_slot1;
                var1 = var1.value;
                var0 = _closure3_slot2;
                var0 = var3.bind(var4)(var2, var1, var0);
                var0 = undefined;
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var2 = {};
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.LayoutAnimationType;
        var2.LayoutAnimationType = var3;
        var3 = 1000000000;
        var2.TAG_OFFSET = var3;
        var0.__closure = var2;
        var2 = 15816248532180.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var2 = var2.bind(var0)();
    var _closure1_slot5 = var2;
    var2 = {};
    var4 = 'function stopObservingProgress_Pnpm_animationsManagerTs2(tag,sharedValue,removeView=false){const{TAG_OFFSET}=this.__closure;sharedValue.removeListener(tag+TAG_OFFSET);global._notifyAboutEnd(tag,removeView);}';
    var2.code = var4;
    var _closure1_slot6 = var2;
    var2 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            _fun33457: for (var _fun33457_ip = 0;;) switch (_fun33457_ip) {
                case 0:
                    var4 = arg0;
                    var5 = arg1;
                    var0 = undefined;
                    var2 = undefined;
                    var3 = arguments.length;
                    var1 = 2;
                    var3 = var3 > var1;
                    if (!var3) {
                        _fun33457_ip = 31;
                        continue _fun33457
                    }
                case 23:
                    var6 = arguments[var1];
                    var3 = var0 !== var6;
                case 31:
                    if (!var3) {
                        _fun33457_ip = 38;
                        continue _fun33457
                    }
                case 34:
                    var3 = arguments[var1];
                case 38:
                    var2 = var5.removeListener;
                    var1 = 1000000000;
                    var1 = var4 + var1;
                    var1 = var2.bind(var5)(var1);
                    var2 = _closure1_slot0;
                    var1 = var2._notifyAboutEnd;
                    var1 = var1.bind(var2)(var4, var3);
                    return var0;
            }
        };
        var1 = {};
        var2 = 1000000000;
        var1.TAG_OFFSET = var2;
        var0.__closure = var1;
        var1 = 8517596296348.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot6;
        var0.__initData = var1;
        return var0;
    };
    var2 = var2.bind(var0)();
    var _closure1_slot7 = var2;
    var2 = {};
    var4 = 'function createLayoutAnimationManager_Pnpm_animationsManagerTs3(){const{LayoutAnimationType,makeMutableUI,stopObservingProgress,withStyleAnimation,startObservingProgress,IS_ANDROID}=this.__closure;const currentAnimationForTag=new Map();const mutableValuesForTag=new Map();const startActually=function(tag,type,yogaValues,config){if(type===LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS){global.ProgressTransitionRegister.onTransitionStart(tag,yogaValues);return;}const style=config(yogaValues);let currentAnimation=style.animations;const previousAnimation=currentAnimationForTag.get(tag);if(previousAnimation){currentAnimation={...previousAnimation,...style.animations};}currentAnimationForTag.set(tag,currentAnimation);let value=mutableValuesForTag.get(tag);if(value===undefined){value=makeMutableUI(style.initialValues);mutableValuesForTag.set(tag,value);}else{stopObservingProgress(tag,value);value._value=style.initialValues;}const animation=withStyleAnimation(currentAnimation);animation.callback=function(finished){if(finished){currentAnimationForTag.delete(tag);mutableValuesForTag.delete(tag);const shouldRemoveView=type===LayoutAnimationType.EXITING;stopObservingProgress(tag,value,shouldRemoveView);}style.callback&&style.callback(finished===undefined?false:finished);};startObservingProgress(tag,value,type);value.value=animation;};let start;if(IS_ANDROID){start=function(tag,type,yogaValues,config){return requestAnimationFrame(function(){startActually(tag,type,yogaValues,config);});};}else{start=startActually;}return{start:start,stop:function(tag){const value=mutableValuesForTag.get(tag);if(!value){return;}stopObservingProgress(tag,value);}};}';
    var2.code = var4;
    var _closure1_slot8 = var2;
    var2 = function() { // Environment: var1
        var0 = function() {
            _fun33459: for (var _fun33459_ip = 0;;) switch (_fun33459_ip) {
                case 0:
                    var0 = global;
                    var2 = var0.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = var3;
                    var2 = new var4[var2](var3);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var _closure3_slot0 = var2;
                    var0 = var0.Map;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var4 = var2;
                    var0 = new var4[var0](var3);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var _closure3_slot1 = var0;
                    var2 = function arg0, arg1, arg2, arg3() {
                        _fun33460: for (var _fun33460_ip = 0;;) switch (_fun33460_ip) {
                            case 0:
                                var5 = arg0;
                                var4 = arg1;
                                var2 = arg2;
                                var _closure4_slot0 = var5;
                                var _closure4_slot1 = var4;
                                var7 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 1;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var7.bind(var0)(var1);
                                var1 = var1.LayoutAnimationType;
                                var1 = var1.SHARED_ELEMENT_TRANSITION_PROGRESS;
                                if (!(var4 === var1)) {
                                    _fun33460_ip = 87;
                                    continue _fun33460
                                }
                            case 60:
                                var1 = _closure1_slot0;
                                var7 = var1.ProgressTransitionRegister;
                                var1 = var7.onTransitionStart;
                                var1 = var1.bind(var7)(var5, var2);
                                _fun33460_ip = 332;
                                continue _fun33460;
                            case 87:
                                var1 = arg3;
                                var1 = var1.bind(var0)(var2);
                                var _closure4_slot2 = var1;
                                var8 = var1.animations;
                                var9 = _closure3_slot0;
                                var2 = var9.get;
                                var12 = var2.bind(var9)(var5);
                                if (!var12) {
                                    _fun33460_ip = 153;
                                    continue _fun33460
                                }
                            case 125:
                                var2 = global;
                                var11 = var2.Object;
                                var10 = var11.assign;
                                var9 = var1.animations;
                                var2 = {};
                                var8 = var10.bind(var11)(var2, var12, var9);
                            case 153:
                                var9 = _closure3_slot0;
                                var2 = var9.set;
                                var2 = var2.bind(var9)(var5, var8);
                                var9 = _closure3_slot1;
                                var2 = var9.get;
                                var2 = var2.bind(var9)(var5);
                                var _closure4_slot3 = var2;
                                if (!(var0 !== var2)) {
                                    _fun33460_ip = 214;
                                    continue _fun33460
                                }
                            case 190:
                                var9 = _closure1_slot7;
                                var9 = var9.bind(var0)(var5, var2);
                                var9 = var1.initialValues;
                                var2._value = var9;
                                _fun33460_ip = 273;
                                continue _fun33460;
                            case 214:
                                var10 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var9 = 2;
                                var9 = var11[var9];
                                var10 = var10.bind(var0)(var9);
                                var9 = var10.makeMutableUI;
                                var1 = var1.initialValues;
                                var1 = var9.bind(var10)(var1);
                                _closure4_slot3 = var1;
                                var9 = _closure3_slot1;
                                var7 = var9.set;
                                var7 = var7.bind(var9)(var5, var1);
                                var2 = var1;
                            case 273:
                                var7 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var1 = 3;
                                var1 = var9[var1];
                                var7 = var7.bind(var0)(var1);
                                var1 = var7.withStyleAnimation;
                                var1 = var1.bind(var7)(var8);
                                var6 = function(arg0) { // Environment: var6
                                    _fun33461: for (var _fun33461_ip = 0;;) switch (_fun33461_ip) {
                                        case 0:
                                            var3 = arg0;
                                            if (!var3) {
                                                _fun33461_ip = 104;
                                                continue _fun33461
                                            }
                                        case 6:
                                            var4 = _closure3_slot0;
                                            var2 = var4.delete;
                                            var5 = _closure4_slot0;
                                            var2 = var2.bind(var4)(var5);
                                            var2 = _closure3_slot1;
                                            var0 = var2.delete;
                                            var0 = var0.bind(var2)(var5);
                                            var6 = _closure4_slot1;
                                            var7 = _closure1_slot1;
                                            var4 = _closure1_slot2;
                                            var0 = 1;
                                            var0 = var4[var0];
                                            var4 = undefined;
                                            var0 = var7.bind(var4)(var0);
                                            var0 = var0.LayoutAnimationType;
                                            var0 = var0.EXITING;
                                            var2 = _closure1_slot7;
                                            var1 = _closure4_slot3;
                                            var0 = var6 === var0;
                                            var0 = var2.bind(var4)(var5, var1, var0);
                                        case 104:
                                            var1 = _closure4_slot2;
                                            var1 = var1.callback;
                                            if (!var1) {
                                                _fun33461_ip = 147;
                                                continue _fun33461
                                            }
                                        case 120:
                                            var2 = _closure4_slot2;
                                            var1 = var2.callback;
                                            var0 = undefined;
                                            var0 = var0 !== var3;
                                            if (!var0) {
                                                _fun33461_ip = 142;
                                                continue _fun33461
                                            }
                                        case 139:
                                            var0 = var3;
                                        case 142:
                                            var0 = var1.bind(var2)(var0);
                                        case 147:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1.callback = var6;
                                var3 = _closure1_slot5;
                                var3 = var3.bind(var0)(var5, var2, var4);
                                var2.value = var1;
                            case 332:
                                return var0;
                        }
                    };
                    var _closure3_slot2 = var2;
                    var0 = {};
                    var3 = _closure1_slot3;
                    if (!var3) {
                        _fun33459_ip = 90;
                        continue _fun33459
                    }
                case 85:
                    var2 = function arg0, arg1, arg2, arg3() {
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var1 = arg1;
                        var _closure4_slot1 = var1;
                        var1 = arg2;
                        var _closure4_slot2 = var1;
                        var1 = arg3;
                        var _closure4_slot3 = var1;
                        var1 = global;
                        var2 = var1.requestAnimationFrame;
                        var1 = undefined;
                        var0 = function() { // Environment: var0
                            var5 = _closure3_slot2;
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot1;
                            var7 = _closure4_slot2;
                            var6 = _closure4_slot3;
                            var0 = undefined;
                            var10 = undefined;
                            var1 = var10[var5](var9, var8, var7, var6, var5);
                            return var0;
                        };
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                case 90:
                    var0.start = var2;
                    var1 = function arg0() {
                        _fun33464: for (var _fun33464_ip = 0;;) switch (_fun33464_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure3_slot1;
                                var0 = var1.get;
                                var2 = var0.bind(var1)(var3);
                                if (!var2) {
                                    _fun33464_ip = 38;
                                    continue _fun33464
                                }
                            case 23:
                                var1 = _closure1_slot7;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var3, var2);
                            case 38:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.stop = var1;
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 1;
        var3 = var6[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var3 = var3.LayoutAnimationType;
        var2.LayoutAnimationType = var3;
        var3 = 2;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.makeMutableUI;
        var2.makeMutableUI = var3;
        var3 = _closure1_slot7;
        var2.stopObservingProgress = var3;
        var3 = 3;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.withStyleAnimation;
        var2.withStyleAnimation = var3;
        var3 = _closure1_slot5;
        var2.startObservingProgress = var3;
        var3 = _closure1_slot3;
        var2.IS_ANDROID = var3;
        var0.__closure = var2;
        var2 = 8526874600063.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot8;
        var0.__initData = var1;
        return var0;
    };
    var6 = var2.bind(var0)();
    var _closure1_slot9 = var6;
    var4 = {};
    var2 = 'function pnpm_animationsManagerTs4(){const{createLayoutAnimationManager}=this.__closure;global.LayoutAnimationsManager=createLayoutAnimationManager();}';
    var4.code = var2;
    var2 = 4;
    var2 = var5[var2];
    var3 = var3.bind(var0)(var2);
    var2 = var3.runOnUIImmediately;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot9;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var2.LayoutAnimationsManager = var1;
        return var0;
    };
    var5 = {};
    var5.createLayoutAnimationManager = var6;
    var1.__closure = var5;
    var5 = 11408639565737.0;
    var1.__workletHash = var5;
    var1.__initData = var4;
    var1 = var2.bind(var3)(var1);
    var1 = var1.bind(var0)();
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3724, 3746, 3758, 3760, 3728]);