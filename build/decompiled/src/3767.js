// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = {};
    var3 = "function pnpm_KeyframeTs1(){const{keyframes,delayFunction,delay,withTiming,Easing,withSequence,initialValues,makeKeyframeKey,callback}=this.__closure;const animations={};const addAnimation=function(key){const keyframePoints=keyframes[key];if(keyframePoints.length===0){return;}const animation=delayFunction(delay,keyframePoints.length===1?withTiming(keyframePoints[0].value,{duration:keyframePoints[0].duration,easing:keyframePoints[0].easing?keyframePoints[0].easing:Easing.linear}):withSequence(...keyframePoints.map(function(keyframePoint){return withTiming(keyframePoint.value,{duration:keyframePoint.duration,easing:keyframePoint.easing?keyframePoint.easing:Easing.linear});})));if(key.includes('transform')){if(!('transform'in animations)){animations.transform=[];}animations.transform.push({[key.split(':')[1]]:animation});}else{animations[key]=animation;}};Object.keys(initialValues).forEach(function(key){if(key.includes('transform')){initialValues[key].forEach(function(transformProp,index){Object.keys(transformProp).forEach(function(transformPropKey){addAnimation(makeKeyframeKey(index,transformPropKey));});});}else{addAnimation(key);}});return{animations:animations,initialValues:initialValues,callback:callback};}";
    var1.code = var3;
    var _closure1_slot6 = var1;
    var1 = {};
    var3 = 'function pnpm_KeyframeTs2(delay,animation){const{withDelay,reduceMotion}=this.__closure;return withDelay(delay,animation,reduceMotion);}';
    var1.code = var3;
    var _closure1_slot7 = var1;
    var1 = {};
    var3 = 'function pnpm_KeyframeTs3(_,animation){const{getReduceMotionFromConfig,reduceMotion}=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;}';
    var1.code = var3;
    var _closure1_slot8 = var1;
    var1 = function() { // Environment: var4
        var3 = _closure1_slot5;
        var2 = function arg0() {
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot4;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.ReduceMotion;
            var3 = var3.System;
            var2.reduceMotionV = var3;
            var1 = function() { // Environment: var1
                _fun33820: for (var _fun33820_ip = 0;;) switch (_fun33820_ip) {
                    case 0:
                        var2 = _closure3_slot0;
                        var3 = var2.delayV;
                        var _closure4_slot0 = var3;
                        var4 = var2.getDelayFunction;
                        var7 = var4.bind(var2)();
                        var _closure4_slot1 = var7;
                        var4 = var2.parseDefinitions;
                        var4 = var4.bind(var2)();
                        var8 = var4.keyframes;
                        var _closure4_slot2 = var8;
                        var6 = var4.initialValues;
                        var _closure4_slot3 = var6;
                        var5 = var2.callbackV;
                        var _closure4_slot4 = var5;
                        var2 = var2.parsedAnimation;
                        if (var2) {
                            _fun33820_ip = 249;
                            continue _fun33820
                        }
                    case 87:
                        var2 = _closure3_slot0;
                        var1 = function() {
                            var3 = {};
                            var _closure5_slot0 = var3;
                            var1 = function arg0() {
                                _fun33822: for (var _fun33822_ip = 0;;) switch (_fun33822_ip) {
                                    case 0:
                                        var8 = arg0;
                                        var1 = _closure4_slot2;
                                        var11 = var1[var8];
                                        var1 = var11.length;
                                        var10 = 0;
                                        if (!(var10 !== var1)) {
                                            _fun33822_ip = 352;
                                            continue _fun33822
                                        }
                                    case 28:
                                        var2 = _closure4_slot1;
                                        var1 = _closure4_slot0;
                                        var0 = var11.length;
                                        var3 = 1;
                                        if (!(var3 !== var0)) {
                                            _fun33822_ip = 118;
                                            continue _fun33822
                                        }
                                    case 48:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var4 = 5;
                                        var4 = var6[var4];
                                        var6 = undefined;
                                        var4 = var5.bind(var6)(var4);
                                        var5 = var4.withSequence;
                                        var4 = var5.apply;
                                        var7 = _closure1_slot3;
                                        var9 = var11.map;
                                        var0 = function(arg0) { // Environment: var0
                                            _fun33823: for (var _fun33823_ip = 0;;) switch (_fun33823_ip) {
                                                case 0:
                                                    var5 = arg0;
                                                    var1 = _closure1_slot0;
                                                    var2 = _closure1_slot1;
                                                    var0 = 5;
                                                    var0 = var2[var0];
                                                    var7 = undefined;
                                                    var3 = var1.bind(var7)(var0);
                                                    var2 = var3.withTiming;
                                                    var1 = var5.value;
                                                    var0 = {};
                                                    var6 = var5.duration;
                                                    var0.duration = var6;
                                                    var6 = var5.easing;
                                                    if (var6) {
                                                        _fun33823_ip = 92;
                                                        continue _fun33823
                                                    }
                                                case 58:
                                                    var6 = _closure1_slot0;
                                                    var8 = _closure1_slot1;
                                                    var4 = 6;
                                                    var4 = var8[var4];
                                                    var4 = var6.bind(var7)(var4);
                                                    var4 = var4.Easing;
                                                    var4 = var4.linear;
                                                    _fun33823_ip = 98;
                                                    continue _fun33823;
                                                case 92:
                                                    var4 = var5.easing;
                                                case 98:
                                                    var0.easing = var4;
                                                    var0 = var2.bind(var3)(var1, var0);
                                                    return var0;
                                            }
                                        };
                                        var0 = var9.bind(var11)(var0);
                                        var0 = var7.bind(var6)(var0);
                                        var0 = var4.bind(var5)(var6, var0);
                                        _fun33822_ip = 240;
                                        continue _fun33822;
                                    case 118:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var4 = 5;
                                        var4 = var6[var4];
                                        var13 = undefined;
                                        var7 = var5.bind(var13)(var4);
                                        var6 = var7.withTiming;
                                        var4 = var11[var10];
                                        var5 = var4.value;
                                        var4 = {};
                                        var12 = var11[var10];
                                        var12 = var12.duration;
                                        var4.duration = var12;
                                        var12 = var11[var10];
                                        var12 = var12.easing;
                                        if (var12) {
                                            _fun33822_ip = 219;
                                            continue _fun33822
                                        }
                                    case 185:
                                        var12 = _closure1_slot0;
                                        var14 = _closure1_slot1;
                                        var9 = 6;
                                        var9 = var14[var9];
                                        var9 = var12.bind(var13)(var9);
                                        var9 = var9.Easing;
                                        var9 = var9.linear;
                                        _fun33822_ip = 229;
                                        continue _fun33822;
                                    case 219:
                                        var10 = var11[var10];
                                        var9 = var10.easing;
                                    case 229:
                                        var4.easing = var9;
                                        var0 = var6.bind(var7)(var5, var4);
                                    case 240:
                                        var6 = undefined;
                                        var5 = var2.bind(var6)(var1, var0);
                                        var0 = var8.includes;
                                        var2 = 'transform';
                                        var4 = var0.bind(var8)(var2);
                                        var1 = _closure5_slot0;
                                        if (var4) {
                                            _fun33822_ip = 278;
                                            continue _fun33822
                                        }
                                    case 272:
                                        var1[var8] = var5;
                                        _fun33822_ip = 352;
                                        continue _fun33822;
                                    case 278:
                                        var1 = var2 in var1;
                                        if (var1) {
                                            _fun33822_ip = 299;
                                            continue _fun33822
                                        }
                                    case 285:
                                        var2 = _closure5_slot0;
                                        var1 = new Array(0);
                                        var2.transform = var1;
                                    case 299:
                                        var0 = _closure5_slot0;
                                        var2 = var0.transform;
                                        var1 = var2.push;
                                        var4 = _closure1_slot2;
                                        var7 = var8.split;
                                        var0 = ':';
                                        var0 = var7.bind(var8)(var0);
                                        var3 = var0[var3];
                                        var0 = {};
                                        var0 = var4.bind(var6)(var0, var3, var5);
                                        var0 = var1.bind(var2)(var0);
                                    case 352:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure5_slot1 = var1;
                            var1 = global;
                            var5 = var1.Object;
                            var4 = var5.keys;
                            var2 = _closure4_slot3;
                            var5 = var4.bind(var5)(var2);
                            var4 = var5.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun33824: for (var _fun33824_ip = 0;;) switch (_fun33824_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = var1.includes;
                                        var0 = 'transform';
                                        var0 = var2.bind(var1)(var0);
                                        if (var0) {
                                            _fun33824_ip = 36;
                                            continue _fun33824
                                        }
                                    case 20:
                                        var2 = _closure5_slot1;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        _fun33824_ip = 64;
                                        continue _fun33824;
                                    case 36:
                                        var0 = _closure4_slot3;
                                        var2 = var0[var1];
                                        var1 = var2.forEach;
                                        var0 = function(arg0, arg1) { // Environment: var0
                                            var1 = arg1;
                                            var _closure7_slot0 = var1;
                                            var1 = global;
                                            var3 = var1.Object;
                                            var2 = var3.keys;
                                            var1 = arg0;
                                            var2 = var2.bind(var3)(var1);
                                            var1 = var2.forEach;
                                            var0 = function(arg0) { // Environment: var0
                                                var2 = _closure5_slot1;
                                                var4 = _closure1_slot10;
                                                var3 = _closure7_slot0;
                                                var0 = undefined;
                                                var1 = arg0;
                                                var1 = var4.bind(var0)(var3, var1);
                                                var1 = var2.bind(var0)(var1);
                                                return var0;
                                            };
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                    case 64:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var4.bind(var5)(var0);
                            var0 = {};
                            var0.animations = var3;
                            var0.initialValues = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var4 = {};
                        var4.keyframes = var8;
                        var4.delayFunction = var7;
                        var4.delay = var3;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var7 = 5;
                        var11 = var10[var7];
                        var8 = undefined;
                        var11 = var9.bind(var8)(var11);
                        var11 = var11.withTiming;
                        var4.withTiming = var11;
                        var11 = 6;
                        var11 = var10[var11];
                        var11 = var9.bind(var8)(var11);
                        var11 = var11.Easing;
                        var4.Easing = var11;
                        var7 = var10[var7];
                        var7 = var9.bind(var8)(var7);
                        var7 = var7.withSequence;
                        var4.withSequence = var7;
                        var4.initialValues = var6;
                        var6 = _closure1_slot10;
                        var4.makeKeyframeKey = var6;
                        var4.callback = var5;
                        var1.__closure = var4;
                        var4 = 2209924843920.0;
                        var1.__workletHash = var4;
                        var3 = _closure1_slot6;
                        var1.__initData = var3;
                        var2.parsedAnimation = var1;
                    case 249:
                        var0 = _closure3_slot0;
                        var0 = var0.parsedAnimation;
                        return var0;
                }
            };
            var2.build = var1;
            var1 = arg0;
            var2.definitions = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'parseDefinitions';
        var0.key = var1;
        var1 = function() {
            _fun33827: for (var _fun33827_ip = 0;;) switch (_fun33827_ip) {
                case 0:
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var1 = {};
                    var _closure3_slot1 = var1;
                    var2 = var4.definitions;
                    var2 = var2.from;
                    if (!var2) {
                        _fun33827_ip = 79;
                        continue _fun33827
                    }
                case 29:
                    var2 = var4.definitions;
                    var5 = 0;
                    var2 = var2[var5];
                    if (var2) {
                        _fun33827_ip = 472;
                        continue _fun33827
                    }
                case 47:
                    var3 = var4.definitions;
                    var2 = var4.definitions;
                    var2 = var2.from;
                    var3[var5] = var2;
                    var2 = var4.definitions;
                    var2 = delete var2.from;
                case 79:
                    var2 = var4.definitions;
                    var2 = var2.to;
                    if (!var2) {
                        _fun33827_ip = 144;
                        continue _fun33827
                    }
                case 93:
                    var2 = var4.definitions;
                    var5 = 100;
                    var2 = var2[var5];
                    if (var2) {
                        _fun33827_ip = 413;
                        continue _fun33827
                    }
                case 112:
                    var3 = var4.definitions;
                    var2 = var4.definitions;
                    var2 = var2.to;
                    var3[var5] = var2;
                    var2 = var4.definitions;
                    var2 = delete var2.to;
                case 144:
                    var2 = var4.definitions;
                    var3 = 0;
                    var2 = var2[var3];
                    if (var2) {
                        _fun33827_ip = 218;
                        continue _fun33827
                    }
                case 159:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 7;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var6 = var2.ReanimatedError;
                    var2 = var6.prototype;
                    var5 = Object.create(var2, {
                        constructor: {
                            value: var6
                        }
                    });
                    var9 = "Please provide 0 or 'from' keyframe with initial state of your object.";
                    var10 = var5;
                    var2 = new var10[var6](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var5;
                    throw var2;
                case 218:
                    var2 = var4.definitions;
                    var2 = var2[var3];
                    var _closure3_slot2 = var2;
                    var3 = global;
                    var6 = var3.Object;
                    var5 = var6.keys;
                    var7 = var5.bind(var6)(var2);
                    var6 = var7.forEach;
                    var5 = function(arg0) { // Environment: var0
                        _fun33828: for (var _fun33828_ip = 0;;) switch (_fun33828_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = 'transform';
                                if (!(var0 !== var2)) {
                                    _fun33828_ip = 28;
                                    continue _fun33828
                                }
                            case 11:
                                var1 = _closure3_slot1;
                                var0 = new Array(0);
                                var1[var2] = var0;
                                _fun33828_ip = 91;
                                continue _fun33828;
                            case 28:
                                var0 = global;
                                var3 = var0.Array;
                                var2 = var3.isArray;
                                var1 = _closure3_slot2;
                                var1 = var1.transform;
                                var1 = var2.bind(var3)(var1);
                                if (var1) {
                                    _fun33828_ip = 65;
                                    continue _fun33828
                                }
                            case 61:
                                var1 = undefined;
                                return var1;
                            case 65:
                                var0 = _closure3_slot2;
                                var2 = var0.transform;
                                var1 = var2.forEach;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    var1 = arg1;
                                    var _closure5_slot0 = var1;
                                    var1 = global;
                                    var3 = var1.Object;
                                    var2 = var3.keys;
                                    var1 = arg0;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.forEach;
                                    var0 = function(arg0) { // Environment: var0
                                        var3 = _closure3_slot1;
                                        var4 = _closure1_slot10;
                                        var2 = _closure5_slot0;
                                        var0 = undefined;
                                        var1 = arg0;
                                        var2 = var4.bind(var0)(var2, var1);
                                        var1 = new Array(0);
                                        var3[var2] = var1;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                            case 91:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
                    var6 = var4.durationV;
                    var5 = 500;
                    if (!var6) {
                        _fun33827_ip = 286;
                        continue _fun33827
                    }
                case 280:
                    var5 = var4.durationV;
                case 286:
                    var _closure3_slot3 = var5;
                    var6 = var3.Array;
                    var5 = var6.from;
                    var8 = var3.Object;
                    var7 = var8.keys;
                    var4 = var4.definitions;
                    var4 = var7.bind(var8)(var4);
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.map;
                    var3 = var3.Number;
                    var5 = var4.bind(var5)(var3);
                    var3 = function arg0, arg1() {
                        var1 = arg1;
                        var0 = 100;
                        var2 = var1 / var0;
                        var1 = _closure3_slot3;
                        var1 = var2 * var1;
                        var2 = _closure3_slot1;
                        var0 = arg0;
                        var4 = var2[var0];
                        var3 = var4.reduce;
                        var2 = function(arg0, arg1) { // Environment: var0
                            var0 = arg1;
                            var1 = var0.duration;
                            var0 = arg0;
                            var0 = var0 + var1;
                            return var0;
                        };
                        var0 = 0;
                        var0 = var3.bind(var4)(var2, var0);
                        var0 = var1 - var0;
                        return var0;
                    };
                    var _closure3_slot4 = var3;
                    var4 = var5.filter;
                    var3 = function(arg0) { // Environment: var0
                        var1 = 0;
                        var0 = arg0;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.sort;
                    var3 = function(arg0, arg1) { // Environment: var0
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun33835: for (var _fun33835_ip = 0;;) switch (_fun33835_ip) {
                            case 0:
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var1 = 0;
                                if (!(!(var2 < var1))) {
                                    _fun33835_ip = 104;
                                    continue _fun33835
                                }
                            case 15:
                                var1 = 100;
                                if (!(!(var2 > var1))) {
                                    _fun33835_ip = 104;
                                    continue _fun33835
                                }
                            case 22:
                                var1 = _closure3_slot0;
                                var1 = var1.definitions;
                                var3 = var1[var2];
                                var _closure4_slot1 = var3;
                                var1 = var3.easing;
                                var _closure4_slot2 = var1;
                                var1 = delete var3.easing;
                                var1 = function arg0, arg1() {
                                    _fun33836: for (var _fun33836_ip = 0;;) switch (_fun33836_ip) {
                                        case 0:
                                            var0 = {};
                                            var1 = arg0;
                                            var0.key = var1;
                                            var1 = arg1;
                                            var0.value = var1;
                                            var2 = _closure4_slot0;
                                            var0.currentKeyPoint = var2;
                                            var1 = _closure4_slot2;
                                            var0.easing = var1;
                                            var8 = var0.key;
                                            var5 = var0.value;
                                            var7 = var0.currentKeyPoint;
                                            var4 = var0.easing;
                                            var1 = _closure3_slot1;
                                            var1 = var8 in var1;
                                            if (var1) {
                                                _fun33836_ip = 132;
                                                continue _fun33836
                                            }
                                        case 73:
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var1 = 7;
                                            var2 = var2[var1];
                                            var1 = undefined;
                                            var1 = var3.bind(var1)(var2);
                                            var3 = var1.ReanimatedError;
                                            var1 = var3.prototype;
                                            var2 = Object.create(var1, {
                                                constructor: {
                                                    value: var3
                                                }
                                            });
                                            var10 = "Keyframe can contain only that set of properties that were provide with initial values (keyframe 0 or 'from')";
                                            var11 = var2;
                                            var1 = new var11[var3](var10, var9);
                                            var1 = var1 instanceof Object ? var1 : var2;
                                            throw var1;
                                        case 132:
                                            var1 = _closure3_slot1;
                                            var3 = var1[var8];
                                            var2 = var3.push;
                                            var1 = {};
                                            var6 = _closure3_slot4;
                                            var0 = undefined;
                                            var6 = var6.bind(var0)(var8, var7);
                                            var1.duration = var6;
                                            var1.value = var5;
                                            var1.easing = var4;
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                    }
                                };
                                var _closure4_slot3 = var1;
                                var1 = global;
                                var2 = var1.Object;
                                var1 = var2.keys;
                                var2 = var1.bind(var2)(var3);
                                var1 = var2.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    _fun33837: for (var _fun33837_ip = 0;;) switch (_fun33837_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var0 = 'transform';
                                            if (!(var0 !== var3)) {
                                                _fun33837_ip = 36;
                                                continue _fun33837
                                            }
                                        case 11:
                                            var2 = _closure4_slot3;
                                            var0 = _closure4_slot1;
                                            var1 = var0[var3];
                                            var0 = undefined;
                                            var0 = var2.bind(var0)(var3, var1);
                                            _fun33837_ip = 99;
                                            continue _fun33837;
                                        case 36:
                                            var0 = global;
                                            var3 = var0.Array;
                                            var2 = var3.isArray;
                                            var1 = _closure4_slot1;
                                            var1 = var1.transform;
                                            var1 = var2.bind(var3)(var1);
                                            if (var1) {
                                                _fun33837_ip = 73;
                                                continue _fun33837
                                            }
                                        case 69:
                                            var1 = undefined;
                                            return var1;
                                        case 73:
                                            var0 = _closure4_slot1;
                                            var2 = var0.transform;
                                            var1 = var2.forEach;
                                            var0 = function(arg0, arg1) { // Environment: var0
                                                var3 = arg0;
                                                var _closure6_slot0 = var3;
                                                var1 = arg1;
                                                var _closure6_slot1 = var1;
                                                var1 = global;
                                                var2 = var1.Object;
                                                var1 = var2.keys;
                                                var2 = var1.bind(var2)(var3);
                                                var1 = var2.forEach;
                                                var0 = function(arg0) { // Environment: var0
                                                    var4 = arg0;
                                                    var3 = _closure4_slot3;
                                                    var5 = _closure1_slot10;
                                                    var2 = _closure6_slot1;
                                                    var0 = undefined;
                                                    var2 = var5.bind(var0)(var2, var4);
                                                    var1 = _closure6_slot0;
                                                    var1 = var1[var4];
                                                    var1 = var3.bind(var0)(var2, var1);
                                                    return var0;
                                                };
                                                var0 = var1.bind(var2)(var0);
                                                var0 = undefined;
                                                return var0;
                                            };
                                            var0 = var1.bind(var2)(var0);
                                        case 99:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            case 104:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 7;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                var2 = var0.ReanimatedError;
                                var0 = var2.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var4 = 'Keyframe should be in between range 0 - 100.';
                                var5 = var1;
                                var0 = new var5[var2](var4, var3);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                        }
                    };
                    var0 = var3.bind(var4)(var0);
                    var0 = {};
                    var0.initialValues = var2;
                    var0.keyframes = var1;
                    return var0;
                case 413:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = "You cannot provide both keyframe 100 and 'to' as they both specified values at the end of the animation.";
                    var10 = var1;
                    var0 = new var10[var2](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 472:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = "You cannot provide both keyframe 0 and 'from' as they both specified initial values.";
                    var10 = var1;
                    var0 = new var10[var2](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'duration';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.durationV = var1;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'delay';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.delayV = var1;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'withCallback';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.callbackV = var1;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'reduceMotion';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.reduceMotionV = var1;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getDelayFunction';
        var0.key = var5;
        var4 = function() {
            _fun33844: for (var _fun33844_ip = 0;;) switch (_fun33844_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.delayV;
                    var4 = var2.reduceMotionV;
                    var _closure3_slot0 = var4;
                    if (var0) {
                        _fun33844_ip = 106;
                        continue _fun33844
                    }
                case 24:
                    var0 = function arg0, arg1() {
                        var0 = arg1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getReduceMotionFromConfig;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        var0.reduceMotion = var1;
                        return var0;
                    };
                    var3 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 8;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var5 = var5.getReduceMotionFromConfig;
                    var3.getReduceMotionFromConfig = var5;
                    var3.reduceMotion = var4;
                    var0.__closure = var3;
                    var3 = 14632587413843.0;
                    var0.__workletHash = var3;
                    var2 = _closure1_slot8;
                    var0.__initData = var2;
                    _fun33844_ip = 189;
                    continue _fun33844;
                case 106:
                    var1 = function arg0, arg1() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 5;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.withDelay;
                        var2 = _closure3_slot0;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var4)(var1, var0, var2);
                        return var0;
                    };
                    var3 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 5;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var5 = var5.withDelay;
                    var3.withDelay = var5;
                    var3.reduceMotion = var4;
                    var1.__closure = var3;
                    var3 = 6884672498893.0;
                    var1.__workletHash = var3;
                    var2 = _closure1_slot7;
                    var1.__initData = var2;
                    var0 = var1;
                case 189:
                    return var0;
            }
        };
        var0.value = var4;
        var1[5] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = {};
    var5 = 'function makeKeyframeKey_Pnpm_KeyframeTs4(index,transformProp){return index+"_transform:"+transformProp;}';
    var3.code = var5;
    var _closure1_slot9 = var3;
    var3 = function() { // Environment: var4
        var0 = function arg0, arg1() {
            var0 = global;
            var0 = var0.HermesInternal;
            var4 = var0.concat;
            var3 = '';
            var2 = arg0;
            var1 = '_transform:';
            var0 = arg1;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 11090453666227.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot9;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot10 = var3;
    var2.Keyframe = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 65, 6, 7, 3707, 3754, 3734, 3693, 3722]);