// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun34585: for (var _fun34585_ip = 0;;) switch (_fun34585_ip) {
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
                _fun34585_ip = 74;
                continue _fun34585;
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
    var6 = 'function pnpm_SequencedTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,reverse,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withSequence(withTiming(reverse?values.currentOriginX:values.targetOriginX,config),withTiming(values.targetOriginX,config))),originY:delayFunction(delay,withSequence(withTiming(reverse?values.targetOriginY:values.currentOriginY,config),withTiming(values.targetOriginY,config))),width:delayFunction(delay,withSequence(withTiming(reverse?values.currentWidth:values.targetWidth,config),withTiming(values.targetWidth,config))),height:delayFunction(delay,withSequence(withTiming(reverse?values.targetHeight:values.currentHeight,config),withTiming(values.targetHeight,config)))},callback:callback};}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BaseAnimationBuilder;
    var1 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: SequencedTransition, environment: var6
            _fun34589: for (var _fun34589_ip = 0;;) switch (_fun34589_ip) {
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
                        _fun34589_ip = 87;
                        continue _fun34589
                    }
                case 72:
                    var10 = arguments[var2];
                    var8[var2] = var10;
                    var2 = var2 + 1;
                    if (var2 < var6) {
                        _fun34589_ip = 72;
                        continue _fun34589
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
                        _fun34589_ip = 142;
                        continue _fun34589
                    }
                case 129:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var6);
                    _fun34589_ip = 181;
                    continue _fun34589;
                case 142:
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    if (var6) {
                        _fun34589_ip = 160;
                        continue _fun34589
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
                    var2 = false;
                    var0.reversed = var2;
                    var1 = function() { // Environment: var1
                        _fun34590: for (var _fun34590_ip = 0;;) switch (_fun34590_ip) {
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
                                var4 = {};
                                var5 = _closure3_slot0;
                                var5 = var5.durationV;
                                var7 = null;
                                var8 = var7 != var5;
                                var7 = 500;
                                if (!var8) {
                                    _fun34590_ip = 85;
                                    continue _fun34590
                                }
                            case 82:
                                var7 = var5;
                            case 85:
                                var5 = 2;
                                var5 = var7 / var5;
                                var4.duration = var5;
                                var _closure4_slot3 = var4;
                                var2 = _closure3_slot0;
                                var5 = var2.reversed;
                                var _closure4_slot4 = var5;
                                var0 = function(arg0) { // Original name: pnpm_SequencedTransitionTs1, environment: var0
                                    _fun34591: for (var _fun34591_ip = 0;;) switch (_fun34591_ip) {
                                        case 0:
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
                                            var9 = _closure4_slot0;
                                            var8 = _closure4_slot2;
                                            var5 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var12 = 5;
                                            var7 = var4[var12];
                                            var6 = undefined;
                                            var14 = var5.bind(var6)(var7);
                                            var13 = var14.withSequence;
                                            var4 = var4[var12];
                                            var11 = var5.bind(var6)(var4);
                                            var7 = var11.withTiming;
                                            var4 = _closure4_slot4;
                                            if (var4) {
                                                _fun34591_ip = 127;
                                                continue _fun34591
                                            }
                                        case 119:
                                            var5 = var3.targetOriginX;
                                            _fun34591_ip = 133;
                                            continue _fun34591;
                                        case 127:
                                            var5 = var3.currentOriginX;
                                        case 133:
                                            var4 = _closure4_slot3;
                                            var11 = var7.bind(var11)(var5, var4);
                                            var5 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var7 = var4[var12];
                                            var17 = var5.bind(var6)(var7);
                                            var16 = var17.withTiming;
                                            var15 = var3.targetOriginX;
                                            var7 = _closure4_slot3;
                                            var7 = var16.bind(var17)(var15, var7);
                                            var7 = var13.bind(var14)(var11, var7);
                                            var7 = var9.bind(var6)(var8, var7);
                                            var2.originX = var7;
                                            var9 = _closure4_slot0;
                                            var8 = _closure4_slot2;
                                            var7 = var4[var12];
                                            var14 = var5.bind(var6)(var7);
                                            var13 = var14.withSequence;
                                            var4 = var4[var12];
                                            var11 = var5.bind(var6)(var4);
                                            var7 = var11.withTiming;
                                            var4 = _closure4_slot4;
                                            if (var4) {
                                                _fun34591_ip = 250;
                                                continue _fun34591
                                            }
                                        case 242:
                                            var5 = var3.currentOriginY;
                                            _fun34591_ip = 256;
                                            continue _fun34591;
                                        case 250:
                                            var5 = var3.targetOriginY;
                                        case 256:
                                            var4 = _closure4_slot3;
                                            var11 = var7.bind(var11)(var5, var4);
                                            var7 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var5 = var4[var12];
                                            var17 = var7.bind(var6)(var5);
                                            var16 = var17.withTiming;
                                            var15 = var3.targetOriginY;
                                            var5 = _closure4_slot3;
                                            var5 = var16.bind(var17)(var15, var5);
                                            var5 = var13.bind(var14)(var11, var5);
                                            var5 = var9.bind(var6)(var8, var5);
                                            var2.originY = var5;
                                            var8 = _closure4_slot0;
                                            var5 = _closure4_slot2;
                                            var9 = var4[var12];
                                            var14 = var7.bind(var6)(var9);
                                            var13 = var14.withSequence;
                                            var4 = var4[var12];
                                            var11 = var7.bind(var6)(var4);
                                            var9 = var11.withTiming;
                                            var4 = _closure4_slot4;
                                            if (var4) {
                                                _fun34591_ip = 373;
                                                continue _fun34591
                                            }
                                        case 365:
                                            var7 = var3.targetWidth;
                                            _fun34591_ip = 379;
                                            continue _fun34591;
                                        case 373:
                                            var7 = var3.currentWidth;
                                        case 379:
                                            var4 = _closure4_slot3;
                                            var9 = var9.bind(var11)(var7, var4);
                                            var11 = _closure1_slot0;
                                            var7 = _closure1_slot1;
                                            var4 = var7[var12];
                                            var17 = var11.bind(var6)(var4);
                                            var16 = var17.withTiming;
                                            var15 = var3.targetWidth;
                                            var4 = _closure4_slot3;
                                            var4 = var16.bind(var17)(var15, var4);
                                            var4 = var13.bind(var14)(var9, var4);
                                            var4 = var8.bind(var6)(var5, var4);
                                            var2.width = var4;
                                            var5 = _closure4_slot0;
                                            var4 = _closure4_slot2;
                                            var8 = var7[var12];
                                            var9 = var11.bind(var6)(var8);
                                            var8 = var9.withSequence;
                                            var7 = var7[var12];
                                            var14 = var11.bind(var6)(var7);
                                            var13 = var14.withTiming;
                                            var7 = _closure4_slot4;
                                            if (var7) {
                                                _fun34591_ip = 495;
                                                continue _fun34591
                                            }
                                        case 487:
                                            var11 = var3.currentHeight;
                                            _fun34591_ip = 501;
                                            continue _fun34591;
                                        case 495:
                                            var11 = var3.targetHeight;
                                        case 501:
                                            var7 = _closure4_slot3;
                                            var7 = var13.bind(var14)(var11, var7);
                                            var11 = _closure1_slot0;
                                            var10 = _closure1_slot1;
                                            var10 = var10[var12];
                                            var12 = var11.bind(var6)(var10);
                                            var11 = var12.withTiming;
                                            var10 = var3.targetHeight;
                                            var3 = _closure4_slot3;
                                            var3 = var11.bind(var12)(var10, var3);
                                            var3 = var8.bind(var9)(var7, var3);
                                            var3 = var5.bind(var6)(var4, var3);
                                            var2.height = var3;
                                            var0.animations = var2;
                                            var1 = _closure4_slot1;
                                            var0.callback = var1;
                                            return var0;
                                    }
                                };
                                var2 = {};
                                var2.delayFunction = var6;
                                var2.delay = var1;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot1;
                                var6 = 5;
                                var10 = var9[var6];
                                var7 = undefined;
                                var10 = var8.bind(var7)(var10);
                                var10 = var10.withSequence;
                                var2.withSequence = var10;
                                var6 = var9[var6];
                                var6 = var8.bind(var7)(var6);
                                var6 = var6.withTiming;
                                var2.withTiming = var6;
                                var2.reverse = var5;
                                var2.config = var4;
                                var2.callback = var3;
                                var0.__closure = var2;
                                var2 = 255577740024.0;
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
        var7 = 'reverse';
        var0.key = var7;
        var1 = function() { // Original name: reverse, environment: var6
            var0 = this;
            var1 = var0.reversed;
            var1 = !var1;
            var0.reversed = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var5 = {};
        var0 = 'createInstance';
        var5.key = var0;
        var0 = function() { // Original name: createInstance, environment: var6
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
        var0 = new Array(2);
        var0[0] = var5;
        var5 = {};
        var5.key = var7;
        var6 = function() { // Original name: reverse, environment: var6
            var1 = _closure2_slot0;
            var0 = var1.createInstance;
            var1 = var0.bind(var1)();
            var0 = var1.reverse;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 'SequencedTransition';
    var1.presetName = var3;
    var2.SequencedTransition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3752, 3750]);