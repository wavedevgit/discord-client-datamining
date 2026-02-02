// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun34544: for (var _fun34544_ip = 0;;) switch (_fun34544_ip) {
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
                _fun34544_ip = 74;
                continue _fun34544;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
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
    var6 = 'function pnpm_CurvedTransitionTs1(values){const{delayFunction,delay,withTiming,duration,easing,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,{duration:duration,easing:easing.easingX})),originY:delayFunction(delay,withTiming(values.targetOriginY,{duration:duration,easing:easing.easingY})),width:delayFunction(delay,withTiming(values.targetWidth,{duration:duration,easing:easing.easingWidth})),height:delayFunction(delay,withTiming(values.targetHeight,{duration:duration,easing:easing.easingHeight}))},callback:callback};}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BaseAnimationBuilder;
    var1 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34548: for (var _fun34548_ip = 0;;) switch (_fun34548_ip) {
                case 0:
                    var4 = this;
                    var6 = undefined;
                    var9 = undefined;
                    var5 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var6)(var4, var3);
                    var5 = arguments.length;
                    var7 = global;
                    var3 = var7.Array;
                    var8 = var3.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var8;
                    var13 = var5;
                    var3 = new var14[var3](var13, var12);
                    var8 = var3 instanceof Object ? var3 : var8;
                    var3 = 0;
                    var10 = var3 < var5;
                    if (!var10) {
                        _fun34548_ip = 87;
                        continue _fun34548
                    }
                case 72:
                    var10 = arguments[var3];
                    var8[var3] = var10;
                    var3 = var3 + 1;
                    if (var3 < var5) {
                        _fun34548_ip = 72;
                        continue _fun34548
                    }
                case 87:
                    var3 = _closure2_slot0;
                    var5 = new Array(0);
                    var0 = var5.concat;
                    var5 = var0.bind(var5)(var8);
                    var0 = _closure1_slot5;
                    var10 = var0.bind(var6)(var3);
                    var3 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var6)();
                    if (var0) {
                        _fun34548_ip = 142;
                        continue _fun34548
                    }
                case 129:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var4, var5);
                    _fun34548_ip = 184;
                    continue _fun34548;
                case 142:
                    var9 = var7.Reflect;
                    var8 = var9.construct;
                    var7 = var5;
                    if (var7) {
                        _fun34548_ip = 163;
                        continue _fun34548
                    }
                case 159:
                    var7 = new Array(0);
                case 163:
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var6)(var4);
                    var5 = var5.constructor;
                    var0 = var8.bind(var9)(var10, var7, var5);
                case 184:
                    var0 = var3.bind(var6)(var4, var0);
                    var _closure3_slot0 = var0;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 5;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var8 = var3.Easing;
                    var4 = var8.in;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.Easing;
                    var3 = var3.ease;
                    var3 = var4.bind(var8)(var3);
                    var0.easingXV = var3;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var8 = var3.Easing;
                    var4 = var8.out;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.Easing;
                    var3 = var3.ease;
                    var3 = var4.bind(var8)(var3);
                    var0.easingYV = var3;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var8 = var3.Easing;
                    var4 = var8.in;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.Easing;
                    var3 = var3.exp;
                    var3 = var4.bind(var8)(var3);
                    var0.easingWidthV = var3;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.Easing;
                    var3 = var4.out;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.Easing;
                    var2 = var2.exp;
                    var2 = var3.bind(var4)(var2);
                    var0.easingHeightV = var2;
                    var1 = function() { // Environment: var1
                        _fun34549: for (var _fun34549_ip = 0;;) switch (_fun34549_ip) {
                            case 0:
                                var3 = _closure3_slot0;
                                var1 = var3.getDelayFunction;
                                var6 = var1.bind(var3)();
                                var _closure4_slot0 = var6;
                                var1 = _closure3_slot0;
                                var3 = var1.callbackV;
                                var _closure4_slot1 = var3;
                                var4 = _closure3_slot0;
                                var1 = var4.getDelay;
                                var1 = var1.bind(var4)();
                                var _closure4_slot2 = var1;
                                var4 = _closure3_slot0;
                                var4 = var4.durationV;
                                var5 = null;
                                var7 = var5 != var4;
                                var5 = 300;
                                if (!var7) {
                                    _fun34549_ip = 83;
                                    continue _fun34549
                                }
                            case 80:
                                var5 = var4;
                            case 83:
                                var _closure4_slot3 = var5;
                                var4 = {};
                                var7 = _closure3_slot0;
                                var7 = var7.easingXV;
                                var4.easingX = var7;
                                var7 = _closure3_slot0;
                                var7 = var7.easingYV;
                                var4.easingY = var7;
                                var7 = _closure3_slot0;
                                var7 = var7.easingWidthV;
                                var4.easingWidth = var7;
                                var2 = _closure3_slot0;
                                var2 = var2.easingHeightV;
                                var4.easingHeight = var2;
                                var _closure4_slot4 = var4;
                                var0 = function arg0() {
                                    var3 = arg0;
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
                                    var7 = 6;
                                    var10 = var9[var7];
                                    var4 = undefined;
                                    var13 = var8.bind(var4)(var10);
                                    var12 = var13.withTiming;
                                    var11 = var3.targetOriginX;
                                    var10 = {};
                                    var14 = _closure4_slot3;
                                    var10.duration = var14;
                                    var14 = _closure4_slot4;
                                    var14 = var14.easingX;
                                    var10.easing = var14;
                                    var10 = var12.bind(var13)(var11, var10);
                                    var10 = var6.bind(var4)(var5, var10);
                                    var2.originX = var10;
                                    var10 = var9[var7];
                                    var13 = var8.bind(var4)(var10);
                                    var12 = var13.withTiming;
                                    var11 = var3.targetOriginY;
                                    var10 = {};
                                    var14 = _closure4_slot3;
                                    var10.duration = var14;
                                    var14 = _closure4_slot4;
                                    var14 = var14.easingY;
                                    var10.easing = var14;
                                    var10 = var12.bind(var13)(var11, var10);
                                    var10 = var6.bind(var4)(var5, var10);
                                    var2.originY = var10;
                                    var10 = var9[var7];
                                    var13 = var8.bind(var4)(var10);
                                    var12 = var13.withTiming;
                                    var11 = var3.targetWidth;
                                    var10 = {};
                                    var14 = _closure4_slot3;
                                    var10.duration = var14;
                                    var14 = _closure4_slot4;
                                    var14 = var14.easingWidth;
                                    var10.easing = var14;
                                    var10 = var12.bind(var13)(var11, var10);
                                    var10 = var6.bind(var4)(var5, var10);
                                    var2.width = var10;
                                    var7 = var9[var7];
                                    var9 = var8.bind(var4)(var7);
                                    var8 = var9.withTiming;
                                    var7 = var3.targetHeight;
                                    var3 = {};
                                    var10 = _closure4_slot3;
                                    var3.duration = var10;
                                    var10 = _closure4_slot4;
                                    var10 = var10.easingHeight;
                                    var3.easing = var10;
                                    var3 = var8.bind(var9)(var7, var3);
                                    var3 = var6.bind(var4)(var5, var3);
                                    var2.height = var3;
                                    var0.animations = var2;
                                    var1 = _closure4_slot1;
                                    var0.callback = var1;
                                    return var0;
                                };
                                var2 = {};
                                var2.delayFunction = var6;
                                var2.delay = var1;
                                var8 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var6 = 6;
                                var7 = var7[var6];
                                var6 = undefined;
                                var6 = var8.bind(var6)(var7);
                                var6 = var6.withTiming;
                                var2.withTiming = var6;
                                var2.duration = var5;
                                var2.easing = var4;
                                var2.callback = var3;
                                var0.__closure = var2;
                                var2 = 8113645568730.0;
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
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var0 = {};
        var10 = 'easingX';
        var0.key = var10;
        var1 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.easingXV = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var9 = 'easingY';
        var0.key = var9;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.easingYV = var1;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var8 = 'easingWidth';
        var0.key = var8;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.easingWidthV = var1;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var7 = 'easingHeight';
        var0.key = var7;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.easingHeightV = var1;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
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
        var0 = new Array(5);
        var0[0] = var5;
        var5 = {};
        var5.key = var10;
        var10 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.easingX;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var10;
        var0[1] = var5;
        var5 = {};
        var5.key = var9;
        var9 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.easingY;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var9;
        var0[2] = var5;
        var5 = {};
        var5.key = var8;
        var8 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.easingWidth;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var8;
        var0[3] = var5;
        var5 = {};
        var5.key = var7;
        var6 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.easingHeight;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var6;
        var0[4] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 'CurvedTransition';
    var1.presetName = var3;
    var2.CurvedTransition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3734, 3754, 3752]);