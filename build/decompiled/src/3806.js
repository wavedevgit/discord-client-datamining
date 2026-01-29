// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun34516: for (var _fun34516_ip = 0;;) switch (_fun34516_ip) {
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
                _fun34516_ip = 74;
                continue _fun34516;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = {};
    var6 = 'function pnpm_JumpingTransitionTs1(values){const{delayFunction,delay,withTiming,config,withSequence,halfDuration,Easing,callback}=this.__closure;const d=Math.max(Math.abs(values.targetOriginX-values.currentOriginX),Math.abs(values.targetOriginY-values.currentOriginY));return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,config)),originY:delayFunction(delay,withSequence(withTiming(Math.min(values.targetOriginY,values.currentOriginY)-d,{duration:halfDuration,easing:Easing.out(Easing.exp)}),withTiming(values.targetOriginY,{...config,duration:halfDuration,easing:Easing.bounce}))),width:delayFunction(delay,withTiming(values.targetWidth,config)),height:delayFunction(delay,withTiming(values.targetHeight,config))},callback:callback};}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BaseAnimationBuilder;
    var1 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: JumpingTransition, environment: var1
            _fun34520: for (var _fun34520_ip = 0;;) switch (_fun34520_ip) {
                case 0:
                    var4 = this;
                    var3 = undefined;
                    var9 = undefined;
                    var6 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var2 = var6.bind(var3)(var4, var2);
                    var6 = arguments.length;
                    var7 = global;
                    var2 = var7.Array;
                    var8 = var2.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var2
                        }
                    });
                    var14 = var8;
                    var13 = var6;
                    var2 = new var14[var2](var13, var12);
                    var8 = var2 instanceof Object ? var2 : var8;
                    var2 = 0;
                    var10 = var2 < var6;
                    if (!var10) {
                        _fun34520_ip = 87;
                        continue _fun34520
                    }
                case 72:
                    var10 = arguments[var2];
                    var8[var2] = var10;
                    var2 = var2 + 1;
                    if (var2 < var6) {
                        _fun34520_ip = 72;
                        continue _fun34520
                    }
                case 87:
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var6 = var0.bind(var6)(var8);
                    var0 = _closure1_slot5;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun34520_ip = 142;
                        continue _fun34520
                    }
                case 129:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var6);
                    _fun34520_ip = 181;
                    continue _fun34520;
                case 142:
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    if (var6) {
                        _fun34520_ip = 160;
                        continue _fun34520
                    }
                case 156:
                    var6 = new Array(0);
                case 160:
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var7.bind(var8)(var9, var6, var5);
                case 181:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        _fun34521: for (var _fun34521_ip = 0;;) switch (_fun34521_ip) {
                            case 0:
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
                                var2 = _closure3_slot0;
                                var4 = var2.durationV;
                                var2 = null;
                                var6 = var2 != var4;
                                var2 = 300;
                                if (!var6) {
                                    _fun34521_ip = 83;
                                    continue _fun34521
                                }
                            case 80:
                                var2 = var4;
                            case 83:
                                var4 = 2;
                                var4 = var2 / var4;
                                var _closure4_slot3 = var4;
                                var9 = {};
                                var9.duration = var2;
                                var _closure4_slot4 = var9;
                                var0 = function(arg0) { // Original name: pnpm_JumpingTransitionTs1, environment: var0
                                    var3 = arg0;
                                    var17 = global;
                                    var4 = var17.Math;
                                    var2 = var4.max;
                                    var5 = var17.Math;
                                    var1 = var5.abs;
                                    var6 = var3.targetOriginX;
                                    var0 = var3.currentOriginX;
                                    var0 = var6 - var0;
                                    var1 = var1.bind(var5)(var0);
                                    var6 = var17.Math;
                                    var5 = var6.abs;
                                    var7 = var3.targetOriginY;
                                    var0 = var3.currentOriginY;
                                    var0 = var7 - var0;
                                    var0 = var5.bind(var6)(var0);
                                    var11 = var2.bind(var4)(var1, var0);
                                    var0 = {};
                                    var1 = {};
                                    var2 = var3.currentOriginX;
                                    var1.originX = var2;
                                    var2 = var3.currentOriginY;
                                    var1.originY = var2;
                                    var2 = var3.currentWidth;
                                    var1.width = var2;
                                    var2 = var3.currentHeight;
                                    var1.height = var2;
                                    var0.initialValues = var1;
                                    var2 = {};
                                    var6 = _closure4_slot0;
                                    var5 = _closure4_slot2;
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot1;
                                    var7 = 5;
                                    var10 = var9[var7];
                                    var4 = undefined;
                                    var14 = var8.bind(var4)(var10);
                                    var13 = var14.withTiming;
                                    var12 = var3.targetOriginX;
                                    var10 = _closure4_slot4;
                                    var10 = var13.bind(var14)(var12, var10);
                                    var10 = var6.bind(var4)(var5, var10);
                                    var2.originX = var10;
                                    var10 = var9[var7];
                                    var13 = var8.bind(var4)(var10);
                                    var12 = var13.withSequence;
                                    var10 = var9[var7];
                                    var16 = var8.bind(var4)(var10);
                                    var15 = var16.withTiming;
                                    var19 = var17.Math;
                                    var18 = var19.min;
                                    var14 = var3.targetOriginY;
                                    var10 = var3.currentOriginY;
                                    var10 = var18.bind(var19)(var14, var10);
                                    var14 = var10 - var11;
                                    var11 = {};
                                    var10 = _closure4_slot3;
                                    var11.duration = var10;
                                    var10 = 6;
                                    var18 = var9[var10];
                                    var18 = var8.bind(var4)(var18);
                                    var20 = var18.Easing;
                                    var19 = var20.out;
                                    var18 = var9[var10];
                                    var18 = var8.bind(var4)(var18);
                                    var18 = var18.Easing;
                                    var18 = var18.exp;
                                    var18 = var19.bind(var20)(var18);
                                    var11.easing = var18;
                                    var11 = var15.bind(var16)(var14, var11);
                                    var14 = var9[var7];
                                    var16 = var8.bind(var4)(var14);
                                    var15 = var16.withTiming;
                                    var14 = var3.targetOriginY;
                                    var20 = var17.Object;
                                    var19 = var20.assign;
                                    var18 = _closure4_slot4;
                                    var17 = {};
                                    var21 = _closure4_slot3;
                                    var17.duration = var21;
                                    var10 = var9[var10];
                                    var10 = var8.bind(var4)(var10);
                                    var10 = var10.Easing;
                                    var10 = var10.bounce;
                                    var17.easing = var10;
                                    var10 = {};
                                    var10 = var19.bind(var20)(var10, var18, var17);
                                    var10 = var15.bind(var16)(var14, var10);
                                    var10 = var12.bind(var13)(var11, var10);
                                    var10 = var6.bind(var4)(var5, var10);
                                    var2.originY = var10;
                                    var10 = var9[var7];
                                    var13 = var8.bind(var4)(var10);
                                    var12 = var13.withTiming;
                                    var11 = var3.targetWidth;
                                    var10 = _closure4_slot4;
                                    var10 = var12.bind(var13)(var11, var10);
                                    var10 = var6.bind(var4)(var5, var10);
                                    var2.width = var10;
                                    var7 = var9[var7];
                                    var9 = var8.bind(var4)(var7);
                                    var8 = var9.withTiming;
                                    var7 = var3.targetHeight;
                                    var3 = _closure4_slot4;
                                    var3 = var8.bind(var9)(var7, var3);
                                    var3 = var6.bind(var4)(var5, var3);
                                    var2.height = var3;
                                    var0.animations = var2;
                                    var1 = _closure4_slot1;
                                    var0.callback = var1;
                                    return var0;
                                };
                                var2 = {};
                                var2.delayFunction = var5;
                                var2.delay = var1;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var8 = 5;
                                var10 = var7[var8];
                                var5 = undefined;
                                var10 = var6.bind(var5)(var10);
                                var10 = var10.withTiming;
                                var2.withTiming = var10;
                                var2.config = var9;
                                var8 = var7[var8];
                                var8 = var6.bind(var5)(var8);
                                var8 = var8.withSequence;
                                var2.withSequence = var8;
                                var2.halfDuration = var4;
                                var4 = 6;
                                var4 = var7[var4];
                                var4 = var6.bind(var5)(var4);
                                var4 = var4.Easing;
                                var2.Easing = var4;
                                var2.callback = var3;
                                var0.__closure = var2;
                                var2 = 11549153259849.0;
                                var0.__workletHash = var2;
                                var1 = _closure1_slot7;
                                var0.__initData = var1;
                                return var0;
                        }
                    };
                    var0.build = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var0 = {};
        var5 = 'createInstance';
        var0.key = var5;
        var1 = function() { // Original name: createInstance, environment: var1
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
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 'JumpingTransition';
    var1.presetName = var3;
    var2.JumpingTransition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3750, 3730, 3748]);