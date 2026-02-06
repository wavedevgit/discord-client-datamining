// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun34754: for (var _fun34754_ip = 0;;) switch (_fun34754_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun34754_ip = 74;
                continue _fun34754;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function pnpm_EntryExitTransitionTs1(values){const{enteringAnimation,exitingAnimation,delayFunction,delay,withSequence,withTiming,exitingDuration,logger,callback}=this.__closure;const enteringValues=enteringAnimation(values);const exitingValues=exitingAnimation(values);const animations={transform:[]};for(const prop of Object.keys(exitingValues.animations)){if(prop===\'transform\'){if(!Array.isArray(exitingValues.animations.transform)){continue;}exitingValues.animations.transform.forEach(function(value,index){for(const transformProp of Object.keys(value)){animations.transform.push({[transformProp]:delayFunction(delay,withSequence(value[transformProp],withTiming(exitingValues.initialValues.transform?exitingValues.initialValues.transform[index][transformProp]:0,{duration:0})))});}});}else{const sequence=enteringValues.animations[prop]!==undefined?[exitingValues.animations[prop],withTiming(enteringValues.initialValues[prop],{duration:0}),enteringValues.animations[prop]]:[exitingValues.animations[prop],withTiming(Object.keys(values).includes(prop)?values[prop]:exitingValues.initialValues[prop],{duration:0})];animations[prop]=delayFunction(delay,withSequence(...sequence));}}for(const prop of Object.keys(enteringValues.animations)){if(prop===\'transform\'){if(!Array.isArray(enteringValues.animations.transform)){continue;}enteringValues.animations.transform.forEach(function(value,index){for(const transformProp of Object.keys(value)){animations.transform.push({[transformProp]:delayFunction(delay+exitingDuration,withSequence(withTiming(enteringValues.initialValues.transform?enteringValues.initialValues.transform[index][transformProp]:0,{duration:exitingDuration}),value[transformProp]))});}});}else if(animations[prop]!==undefined){continue;}else{animations[prop]=delayFunction(delay,withSequence(withTiming(enteringValues.initialValues[prop],{duration:0}),enteringValues.animations[prop]));}}const mergedTransform=(Array.isArray(exitingValues.initialValues.transform)?exitingValues.initialValues.transform:[]).concat((Array.isArray(enteringValues.animations.transform)?enteringValues.animations.transform:[]).map(function(value){const objectKeys=Object.keys(value);if((objectKeys===null||objectKeys===void 0?void 0:objectKeys.length)<1){logger.error("${value} is not a valid Transform object");return value;}const transformProp=objectKeys[0];const current=value[transformProp].current;if(typeof current===\'string\'){if(current.includes(\'deg\')){return{[transformProp]:\'0deg\'};}else{return{[transformProp]:\'0\'};}}else if(transformProp.includes(\'translate\')){return{[transformProp]:0};}else{return{[transformProp]:1};}}));return{initialValues:{...exitingValues.initialValues,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight,transform:mergedTransform},animations:{originX:delayFunction(delay+exitingDuration,withTiming(values.targetOriginX,{duration:exitingDuration})),originY:delayFunction(delay+exitingDuration,withTiming(values.targetOriginY,{duration:exitingDuration})),width:delayFunction(delay+exitingDuration,withTiming(values.targetWidth,{duration:exitingDuration})),height:delayFunction(delay+exitingDuration,withTiming(values.targetHeight,{duration:exitingDuration})),...animations},callback:callback};}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.BaseAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34758: for (var _fun34758_ip = 0;;) switch (_fun34758_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var9 = undefined;
                    var6 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var4)(var5, var3);
                    var6 = arguments.length;
                    var7 = global;
                    var3 = var7.Array;
                    var8 = var3.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var8;
                    var13 = var6;
                    var3 = new var14[var3](var13, var12);
                    var8 = var3 instanceof Object ? var3 : var8;
                    var3 = 0;
                    var10 = var3 < var6;
                    if (!var10) {
                        _fun34758_ip = 87;
                        continue _fun34758
                    }
                case 72:
                    var10 = arguments[var3];
                    var8[var3] = var10;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34758_ip = 72;
                        continue _fun34758
                    }
                case 87:
                    var3 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var6 = var0.bind(var6)(var8);
                    var0 = _closure1_slot6;
                    var10 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun34758_ip = 142;
                        continue _fun34758
                    }
                case 129:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var6);
                    _fun34758_ip = 184;
                    continue _fun34758;
                case 142:
                    var9 = var7.Reflect;
                    var8 = var9.construct;
                    var7 = var6;
                    if (var7) {
                        _fun34758_ip = 163;
                        continue _fun34758
                    }
                case 159:
                    var7 = new Array(0);
                case 163:
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var8.bind(var9)(var10, var7, var6);
                case 184:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 6;
                    var6 = var5[var2];
                    var6 = var3.bind(var4)(var6);
                    var6 = var6.FadeIn;
                    var0.enteringV = var6;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.FadeOut;
                    var0.exitingV = var2;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var5 = var1.bind(var3)();
                        var _closure4_slot0 = var5;
                        var1 = _closure3_slot0;
                        var3 = var1.callbackV;
                        var _closure4_slot1 = var3;
                        var4 = _closure3_slot0;
                        var1 = var4.getDelay;
                        var1 = var1.bind(var4)();
                        var _closure4_slot2 = var1;
                        var4 = _closure3_slot0;
                        var6 = var4.enteringV;
                        var4 = var6.build;
                        var7 = var4.bind(var6)();
                        var _closure4_slot3 = var7;
                        var4 = _closure3_slot0;
                        var6 = var4.exitingV;
                        var4 = var6.build;
                        var6 = var4.bind(var6)();
                        var _closure4_slot4 = var6;
                        var2 = _closure3_slot0;
                        var4 = var2.exitingV;
                        var2 = var4.getDuration;
                        var4 = var2.bind(var4)();
                        var _closure4_slot5 = var4;
                        var0 = function arg0() {
                            _fun34760: for (var _fun34760_ip = 0;;) switch (_fun34760_ip) {
                                case 0:
                                    var4 = arg0;
                                    var6 = var4;
                                    var9 = undefined;
                                    var8 = undefined;
                                    var5 = undefined;
                                    var2 = undefined;
                                    var15 = undefined;
                                    var14 = undefined;
                                    var3 = _closure4_slot3;
                                    var3 = var3.bind(var9)(var4);
                                    var8 = var3;
                                    var _closure5_slot0 = var3;
                                    var3 = _closure4_slot4;
                                    var4 = var3.bind(var9)(var4);
                                    var5 = var4;
                                    var _closure5_slot1 = var4;
                                    var3 = {};
                                    var7 = new Array(0);
                                    var3.transform = var7;
                                    var2 = var3;
                                    var _closure5_slot2 = var3;
                                    var3 = global;
                                    var10 = var3.Object;
                                    var7 = var10.keys;
                                    var4 = var4.animations;
                                    var10 = var7.bind(var10)(var4);
                                    var4 = var10;
                                    var7 = var4[Symbol.iterator];
                                    var4 = var7().next;
                                    var12 = 7;
                                    var13 = 0;
                                    var11 = 'transform';
                                case 114:
                                    var16 = var4().value;
                                    var17 = var7;
                                    if (!(var17 !== var9)) {
                                        _fun34760_ip = 516;
                                        continue _fun34760
                                    }
                                case 128: // try_start_0
                                    var15 = var16;
                                    if (!(var11 !== var16)) {
                                        _fun34760_ip = 437;
                                        continue _fun34760
                                    }
                                case 138:
                                    var16 = var8;
                                    var17 = var16.animations;
                                    var16 = var15;
                                    var16 = var17[var16];
                                    if (!(var9 === var16)) {
                                        _fun34760_ip = 285;
                                        continue _fun34760
                                    }
                                case 161:
                                    var16 = var5;
                                    var16 = var16.animations;
                                    var20 = var15;
                                    var16 = var16[var20];
                                    var22 = new Array(2);
                                    var22[0] = var16;
                                    var17 = _closure1_slot0;
                                    var16 = _closure1_slot1;
                                    var16 = var16[var12];
                                    var19 = var17.bind(var9)(var16);
                                    var18 = var19.withTiming;
                                    var21 = var3.Object;
                                    var17 = var21.keys;
                                    var16 = var6;
                                    var17 = var17.bind(var21)(var16);
                                    var16 = var17.includes;
                                    var16 = var16.bind(var17)(var20);
                                    if (var16) {
                                        _fun34760_ip = 257;
                                        continue _fun34760
                                    }
                                case 239:
                                    var16 = var5;
                                    var17 = var16.initialValues;
                                    var16 = var15;
                                    var17 = var17[var16];
                                    _fun34760_ip = 267;
                                    continue _fun34760;
                                case 257:
                                    var20 = var6;
                                    var16 = var15;
                                    var17 = var20[var16];
                                case 267:
                                    var16 = {};
                                    var16.duration = var13;
                                    var16 = var18.bind(var19)(var17, var16);
                                    var22[1] = var16;
                                    _fun34760_ip = 377;
                                    continue _fun34760;
                                case 285:
                                    var16 = var5;
                                    var16 = var16.animations;
                                    var18 = var15;
                                    var17 = var16[var18];
                                    var16 = new Array(3);
                                    var16[0] = var17;
                                    var19 = _closure1_slot0;
                                    var17 = _closure1_slot1;
                                    var17 = var17[var12];
                                    var23 = var19.bind(var9)(var17);
                                    var21 = var23.withTiming;
                                    var17 = var8;
                                    var19 = var17.initialValues;
                                    var20 = var19[var18];
                                    var19 = {};
                                    var19.duration = var13;
                                    var19 = var21.bind(var23)(var20, var19);
                                    var16[1] = var19;
                                    var17 = var17.animations;
                                    var17 = var17[var18];
                                    var16[2] = var17;
                                    var22 = var16;
                                case 377:
                                    var18 = var2;
                                    var17 = var15;
                                    var20 = _closure4_slot0;
                                    var19 = _closure4_slot2;
                                    var21 = _closure1_slot0;
                                    var16 = _closure1_slot1;
                                    var16 = var16[var12];
                                    var16 = var21.bind(var9)(var16);
                                    var21 = var16.withSequence;
                                    var16 = var21.apply;
                                    var16 = var16.bind(var21)(var9, var22);
                                    var16 = var20.bind(var9)(var19, var16);
                                    var18[var17] = var16;
                                    _fun34760_ip = 504;
                                    continue _fun34760;
                                case 437:
                                    var18 = var3.Array;
                                    var17 = var18.isArray;
                                    var16 = var5;
                                    var16 = var16.animations;
                                    var16 = var16.transform;
                                    var16 = var17.bind(var18)(var16);
                                    if (var16) {
                                        _fun34760_ip = 475;
                                        continue _fun34760
                                    }
                                case 470: // try_end0
                                    _fun34760_ip = 114;
                                    continue _fun34760;
                                case 475: // try_start_1
                                    var16 = var5;
                                    var16 = var16.animations;
                                    var18 = var16.transform;
                                    var17 = var18.forEach;
                                    var16 = function(arg0, arg1) { // Environment: var0
                                        _fun34761: for (var _fun34761_ip = 0;;) switch (_fun34761_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var8 = var3;
                                                var9 = arg1;
                                                var0 = undefined;
                                                var10 = undefined;
                                                var1 = global;
                                                var2 = var1.Object;
                                                var1 = var2.keys;
                                                var1 = var1.bind(var2)(var3);
                                                var7 = var1;
                                                var2 = var7[Symbol.iterator];
                                                var7 = var2().next;
                                                var6 = 0;
                                                var1 = 7;
                                            case 51:
                                                var16 = var7().value;
                                                var11 = var2;
                                                if (!(var11 !== var0)) {
                                                    _fun34761_ip = 237;
                                                    continue _fun34761
                                                }
                                            case 65: // try_start_0
                                                var10 = var16;
                                                var11 = _closure5_slot2;
                                                var13 = var11.transform;
                                                var12 = var13.push;
                                                var15 = _closure1_slot2;
                                                var17 = _closure4_slot0;
                                                var14 = _closure4_slot2;
                                                var21 = _closure1_slot0;
                                                var11 = _closure1_slot1;
                                                var18 = var11[var1];
                                                var20 = var21.bind(var0)(var18);
                                                var19 = var20.withSequence;
                                                var18 = var8;
                                                var18 = var18[var16];
                                                var11 = var11[var1];
                                                var23 = var21.bind(var0)(var11);
                                                var22 = var23.withTiming;
                                                var11 = _closure5_slot1;
                                                var11 = var11.initialValues;
                                                var11 = var11.transform;
                                                var21 = 0;
                                                if (!var11) {
                                                    _fun34761_ip = 187;
                                                    continue _fun34761
                                                }
                                            case 158:
                                                var11 = _closure5_slot1;
                                                var11 = var11.initialValues;
                                                var24 = var11.transform;
                                                var11 = var9;
                                                var24 = var24[var11];
                                                var11 = var10;
                                                var21 = var24[var11];
                                            case 187:
                                                var11 = {};
                                                var11.duration = var6;
                                                var11 = var22.bind(var23)(var21, var11);
                                                var11 = var19.bind(var20)(var18, var11);
                                                var14 = var17.bind(var0)(var14, var11);
                                                var11 = {};
                                                var11 = var15.bind(var0)(var11, var16, var14);
                                                var11 = var12.bind(var13)(var11);
                                            case 225: // try_end0
                                                _fun34761_ip = 51;
                                                continue _fun34761;
                                            case 230: // catch_target0
                                                CatchBlockStart(arg_register = 1);
                                                var2.return();
                                                throw var1;
                                            case 237:
                                                return var0;
                                        }
                                    };
                                    var16 = var17.bind(var18)(var16);
                                case 504: // try_end1
                                    _fun34760_ip = 114;
                                    continue _fun34760;
                                case 509: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 4);
                                    var7.return();
                                    throw var4;
                                case 516:
                                    var15 = var3.Object;
                                    var7 = var15.keys;
                                    var4 = var8;
                                    var4 = var4.animations;
                                    var15 = var7.bind(var15)(var4);
                                    var4 = var15;
                                    var7 = var4[Symbol.iterator];
                                    var4 = var7().next;
                                case 547:
                                    var15 = var4().value;
                                    var16 = var7;
                                    if (!(var16 !== var9)) {
                                        _fun34760_ip = 773;
                                        continue _fun34760
                                    }
                                case 561: // try_start_2
                                    var14 = var15;
                                    if (!(var11 !== var15)) {
                                        _fun34760_ip = 694;
                                        continue _fun34760
                                    }
                                case 571:
                                    var16 = var2;
                                    var15 = var14;
                                    var15 = var16[var15];
                                    if (!(var9 === var15)) {
                                        _fun34760_ip = 689;
                                        continue _fun34760
                                    }
                                case 585:
                                    var17 = var2;
                                    var16 = var14;
                                    var19 = _closure4_slot0;
                                    var18 = _closure4_slot2;
                                    var20 = _closure1_slot0;
                                    var15 = _closure1_slot1;
                                    var21 = var15[var12];
                                    var22 = var20.bind(var9)(var21);
                                    var21 = var22.withSequence;
                                    var15 = var15[var12];
                                    var25 = var20.bind(var9)(var15);
                                    var24 = var25.withTiming;
                                    var15 = var8;
                                    var20 = var15.initialValues;
                                    var23 = var20[var16];
                                    var20 = {};
                                    var20.duration = var13;
                                    var20 = var24.bind(var25)(var23, var20);
                                    var15 = var15.animations;
                                    var15 = var15[var16];
                                    var15 = var21.bind(var22)(var20, var15);
                                    var15 = var19.bind(var9)(var18, var15);
                                    var17[var16] = var15;
                                    _fun34760_ip = 761;
                                    continue _fun34760;
                                case 689: // try_end2
                                    _fun34760_ip = 547;
                                    continue _fun34760;
                                case 694: // try_start_3
                                    var17 = var3.Array;
                                    var16 = var17.isArray;
                                    var15 = var8;
                                    var15 = var15.animations;
                                    var15 = var15.transform;
                                    var15 = var16.bind(var17)(var15);
                                    if (var15) {
                                        _fun34760_ip = 732;
                                        continue _fun34760
                                    }
                                case 727: // try_end3
                                    _fun34760_ip = 547;
                                    continue _fun34760;
                                case 732: // try_start_4
                                    var15 = var8;
                                    var15 = var15.animations;
                                    var17 = var15.transform;
                                    var16 = var17.forEach;
                                    var15 = function(arg0, arg1) { // Environment: var0
                                        _fun34762: for (var _fun34762_ip = 0;;) switch (_fun34762_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var8 = var3;
                                                var9 = arg1;
                                                var0 = undefined;
                                                var10 = undefined;
                                                var1 = global;
                                                var2 = var1.Object;
                                                var1 = var2.keys;
                                                var1 = var1.bind(var2)(var3);
                                                var7 = var1;
                                                var2 = var7[Symbol.iterator];
                                                var7 = var2().next;
                                                var3 = 7;
                                            case 49:
                                                var16 = var7().value;
                                                var11 = var2;
                                                if (!(var11 !== var0)) {
                                                    _fun34762_ip = 250;
                                                    continue _fun34762
                                                }
                                            case 63: // try_start_0
                                                var10 = var16;
                                                var11 = _closure5_slot2;
                                                var13 = var11.transform;
                                                var12 = var13.push;
                                                var15 = _closure1_slot2;
                                                var17 = _closure4_slot0;
                                                var14 = _closure4_slot2;
                                                var11 = _closure4_slot5;
                                                var14 = var14 + var11;
                                                var18 = _closure1_slot0;
                                                var11 = _closure1_slot1;
                                                var19 = var11[var3];
                                                var20 = var18.bind(var0)(var19);
                                                var19 = var20.withSequence;
                                                var11 = var11[var3];
                                                var22 = var18.bind(var0)(var11);
                                                var21 = var22.withTiming;
                                                var11 = _closure5_slot0;
                                                var11 = var11.initialValues;
                                                var11 = var11.transform;
                                                var18 = 0;
                                                if (!var11) {
                                                    _fun34762_ip = 186;
                                                    continue _fun34762
                                                }
                                            case 157:
                                                var11 = _closure5_slot0;
                                                var11 = var11.initialValues;
                                                var23 = var11.transform;
                                                var11 = var9;
                                                var23 = var23[var11];
                                                var11 = var10;
                                                var18 = var23[var11];
                                            case 186:
                                                var11 = {};
                                                var23 = _closure4_slot5;
                                                var11.duration = var23;
                                                var18 = var21.bind(var22)(var18, var11);
                                                var21 = var8;
                                                var11 = var10;
                                                var11 = var21[var11];
                                                var11 = var19.bind(var20)(var18, var11);
                                                var14 = var17.bind(var0)(var14, var11);
                                                var11 = {};
                                                var11 = var15.bind(var0)(var11, var16, var14);
                                                var11 = var12.bind(var13)(var11);
                                            case 238: // try_end0
                                                _fun34762_ip = 49;
                                                continue _fun34762;
                                            case 243: // catch_target0
                                                CatchBlockStart(arg_register = 1);
                                                var2.return();
                                                throw var1;
                                            case 250:
                                                return var0;
                                        }
                                    };
                                    var15 = var16.bind(var17)(var15);
                                case 761: // try_end4
                                    _fun34760_ip = 547;
                                    continue _fun34760;
                                case 766: // catch_target2 // catch_target3 // catch_target4
                                    CatchBlockStart(arg_register = 4);
                                    var7.return();
                                    throw var4;
                                case 773:
                                    var11 = var3.Array;
                                    var7 = var11.isArray;
                                    var4 = var5;
                                    var4 = var4.initialValues;
                                    var4 = var4.transform;
                                    var4 = var7.bind(var11)(var4);
                                    if (var4) {
                                        _fun34760_ip = 812;
                                        continue _fun34760
                                    }
                                case 806:
                                    var7 = new Array(0);
                                    _fun34760_ip = 826;
                                    continue _fun34760;
                                case 812:
                                    var4 = var5;
                                    var4 = var4.initialValues;
                                    var7 = var4.transform;
                                case 826:
                                    var4 = var7.concat;
                                    var14 = var3.Array;
                                    var13 = var14.isArray;
                                    var11 = var8;
                                    var11 = var11.animations;
                                    var11 = var11.transform;
                                    var11 = var13.bind(var14)(var11);
                                    if (var11) {
                                        _fun34760_ip = 870;
                                        continue _fun34760
                                    }
                                case 864:
                                    var11 = new Array(0);
                                    _fun34760_ip = 881;
                                    continue _fun34760;
                                case 870:
                                    var8 = var8.animations;
                                    var11 = var8.transform;
                                case 881:
                                    var8 = var11.map;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun34763: for (var _fun34763_ip = 0;;) switch (_fun34763_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = global;
                                                var2 = var1.Object;
                                                var1 = var2.keys;
                                                var2 = var1.bind(var2)(var0);
                                                var1 = null;
                                                var1 = var1 == var2;
                                                var3 = undefined;
                                                var4 = undefined;
                                                if (var1) {
                                                    _fun34763_ip = 39;
                                                    continue _fun34763
                                                }
                                            case 34:
                                                var4 = var2.length;
                                            case 39:
                                                var1 = 1;
                                                if (!(!(var4 < var1))) {
                                                    _fun34763_ip = 180;
                                                    continue _fun34763
                                                }
                                            case 49:
                                                var6 = 0;
                                                var7 = var2[var6];
                                                var2 = var0[var7];
                                                var5 = var2.current;
                                                var4 = 'string';
                                                var2 = typeof var5;
                                                if (!(var4 !== var2)) {
                                                    _fun34763_ip = 119;
                                                    continue _fun34763
                                                }
                                            case 75:
                                                var4 = var7.includes;
                                                var2 = 'translate';
                                                var8 = var4.bind(var7)(var2);
                                                var4 = _closure1_slot2;
                                                var2 = {};
                                                if (var8) {
                                                    _fun34763_ip = 110;
                                                    continue _fun34763
                                                }
                                            case 101:
                                                var1 = var4.bind(var3)(var2, var7, var1);
                                                _fun34763_ip = 117;
                                                continue _fun34763;
                                            case 110:
                                                var1 = var4.bind(var3)(var2, var7, var6);
                                            case 117:
                                                _fun34763_ip = 178;
                                                continue _fun34763;
                                            case 119:
                                                var4 = var5.includes;
                                                var2 = 'deg';
                                                var2 = var4.bind(var5)(var2);
                                                var6 = _closure1_slot2;
                                                var5 = {};
                                                if (var2) {
                                                    _fun34763_ip = 162;
                                                    continue _fun34763
                                                }
                                            case 147:
                                                var2 = '0';
                                                var2 = var6.bind(var3)(var5, var7, var2);
                                                _fun34763_ip = 175;
                                                continue _fun34763;
                                            case 162:
                                                var4 = '0deg';
                                                var2 = var6.bind(var3)(var5, var7, var4);
                                            case 175:
                                                var1 = var2;
                                            case 178:
                                                return var1;
                                            case 180:
                                                var2 = _closure1_slot0;
                                                var4 = _closure1_slot1;
                                                var1 = 8;
                                                var1 = var4[var1];
                                                var1 = var2.bind(var3)(var1);
                                                var3 = var1.logger;
                                                var2 = var3.error;
                                                var1 = '${value} is not a valid Transform object';
                                                var1 = var2.bind(var3)(var1);
                                                return var0;
                                        }
                                    };
                                    var0 = var8.bind(var11)(var0);
                                    var4 = var4.bind(var7)(var0);
                                    var0 = {};
                                    var11 = var3.Object;
                                    var8 = var11.assign;
                                    var7 = var5.initialValues;
                                    var5 = {};
                                    var13 = var6.currentOriginX;
                                    var5.originX = var13;
                                    var13 = var6.currentOriginY;
                                    var5.originY = var13;
                                    var13 = var6.currentWidth;
                                    var5.width = var13;
                                    var13 = var6.currentHeight;
                                    var5.height = var13;
                                    var5.transform = var4;
                                    var4 = {};
                                    var4 = var8.bind(var11)(var4, var7, var5);
                                    var0.initialValues = var4;
                                    var5 = var3.Object;
                                    var4 = var5.assign;
                                    var3 = {};
                                    var8 = _closure4_slot0;
                                    var7 = _closure4_slot2;
                                    var13 = _closure4_slot5;
                                    var15 = var7 + var13;
                                    var11 = _closure1_slot0;
                                    var10 = _closure1_slot1;
                                    var14 = var10[var12];
                                    var18 = var11.bind(var9)(var14);
                                    var17 = var18.withTiming;
                                    var16 = var6.targetOriginX;
                                    var14 = {};
                                    var14.duration = var13;
                                    var14 = var17.bind(var18)(var16, var14);
                                    var14 = var8.bind(var9)(var15, var14);
                                    var3.originX = var14;
                                    var15 = var7 + var13;
                                    var14 = var10[var12];
                                    var18 = var11.bind(var9)(var14);
                                    var17 = var18.withTiming;
                                    var16 = var6.targetOriginY;
                                    var14 = {};
                                    var14.duration = var13;
                                    var14 = var17.bind(var18)(var16, var14);
                                    var14 = var8.bind(var9)(var15, var14);
                                    var3.originY = var14;
                                    var15 = var7 + var13;
                                    var14 = var10[var12];
                                    var18 = var11.bind(var9)(var14);
                                    var17 = var18.withTiming;
                                    var16 = var6.targetWidth;
                                    var14 = {};
                                    var14.duration = var13;
                                    var14 = var17.bind(var18)(var16, var14);
                                    var14 = var8.bind(var9)(var15, var14);
                                    var3.width = var14;
                                    var7 = var7 + var13;
                                    var10 = var10[var12];
                                    var12 = var11.bind(var9)(var10);
                                    var11 = var12.withTiming;
                                    var10 = var6.targetHeight;
                                    var6 = {};
                                    var6.duration = var13;
                                    var6 = var11.bind(var12)(var10, var6);
                                    var6 = var8.bind(var9)(var7, var6);
                                    var3.height = var6;
                                    var2 = var4.bind(var5)(var3, var2);
                                    var0.animations = var2;
                                    var1 = _closure4_slot1;
                                    var0.callback = var1;
                                    return var0;
                            }
                        };
                        var2 = {};
                        var2.enteringAnimation = var7;
                        var2.exitingAnimation = var6;
                        var2.delayFunction = var5;
                        var2.delay = var1;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var8 = 7;
                        var9 = var7[var8];
                        var5 = undefined;
                        var9 = var6.bind(var5)(var9);
                        var9 = var9.withSequence;
                        var2.withSequence = var9;
                        var8 = var7[var8];
                        var8 = var6.bind(var5)(var8);
                        var8 = var8.withTiming;
                        var2.withTiming = var8;
                        var2.exitingDuration = var4;
                        var4 = 8;
                        var4 = var7[var4];
                        var4 = var6.bind(var5)(var4);
                        var4 = var4.logger;
                        var2.logger = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 15677837188414.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot8;
                        var0.__initData = var1;
                        return var0;
                    };
                    var0.build = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var2 = _closure1_slot7;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot4;
        var0 = {};
        var8 = 'entering';
        var0.key = var8;
        var1 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.enteringV = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var7 = 'exiting';
        var0.key = var7;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.exitingV = var1;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var5 = {};
        var0 = 'createInstance';
        var5.key = var0;
        var0 = function() {
            var0 = _closure2_slot0;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var2 = var1;
            var0 = new var2[var0](var1);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var5.value = var0;
        var0 = new Array(3);
        var0[0] = var5;
        var5 = {};
        var5.key = var8;
        var8 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.entering;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var8;
        var0[1] = var5;
        var5 = {};
        var5.key = var7;
        var6 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.exiting;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var6;
        var0[2] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var _closure1_slot9 = var3;
    var4 = 'EntryExitTransition';
    var3.presetName = var4;
    var2.EntryExitTransition = var3;
    var1 = function arg0, arg1() {
        var2 = _closure1_slot9;
        var1 = var2.entering;
        var0 = arg1;
        var2 = var1.bind(var2)(var0);
        var1 = var2.exiting;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.combineTransition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 6, 7, 15, 17, 18, 3842, 3795, 3727, 3793]);