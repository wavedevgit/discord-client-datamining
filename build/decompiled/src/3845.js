// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var12 = dependencyMap;
    var0 = function arg0, arg1, arg2() {
        _fun34520: for (var _fun34520_ip = 0;;) switch (_fun34520_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot4;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = _closure1_slot15;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun34520_ip = 51;
                    continue _fun34520
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun34520_ip = 92;
                continue _fun34520;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun34520_ip = 71;
                    continue _fun34520
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot4;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        _fun34521: for (var _fun34521_ip = 0;;) switch (_fun34521_ip) {
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
                _fun34521_ip = 74;
                continue _fun34521;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var12[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var12[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var12[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var12[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var12[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var12[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = "function pnpm_RotateTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}";
    var3.code = var4;
    var _closure1_slot6 = var3;
    var10 = 6;
    var3 = var12[var10];
    var3 = var11.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34525: for (var _fun34525_ip = 0;;) switch (_fun34525_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot1;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var4)(var5, var3);
                    var6 = arguments.length;
                    var3 = global;
                    var3 = var3.Array;
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var7;
                    var12 = var6;
                    var3 = new var13[var3](var12, var11);
                    var7 = var3 instanceof Object ? var3 : var7;
                    var3 = 0;
                    var9 = var3 < var6;
                    if (!var9) {
                        _fun34525_ip = 87;
                        continue _fun34525
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34525_ip = 72;
                        continue _fun34525
                    }
                case 87:
                    var3 = _closure1_slot14;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var8 = var1.bind(var3)();
                        var _closure4_slot0 = var8;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var6 = var4[var3];
                        var _closure4_slot1 = var6;
                        var3 = 1;
                        var5 = var4[var3];
                        var _closure4_slot2 = var5;
                        var4 = _closure3_slot0;
                        var3 = var4.getDelay;
                        var7 = var3.bind(var4)();
                        var _closure4_slot3 = var7;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot5 = var4;
                        var0 = function arg0() {
                            var7 = arg0;
                            var0 = {};
                            var3 = {};
                            var10 = _closure4_slot0;
                            var9 = _closure4_slot3;
                            var11 = _closure4_slot1;
                            var6 = _closure4_slot2;
                            var8 = undefined;
                            var2 = 1;
                            var2 = var11.bind(var8)(var2, var6);
                            var2 = var10.bind(var8)(var9, var2);
                            var3.opacity = var2;
                            var2 = {};
                            var4 = '0deg';
                            var4 = var11.bind(var8)(var4, var6);
                            var4 = var10.bind(var8)(var9, var4);
                            var2.rotate = var4;
                            var4 = new Array(3);
                            var4[0] = var2;
                            var5 = {};
                            var2 = 0;
                            var12 = var11.bind(var8)(var2, var6);
                            var12 = var10.bind(var8)(var9, var12);
                            var5.translateX = var12;
                            var4[1] = var5;
                            var5 = {};
                            var6 = var11.bind(var8)(var2, var6);
                            var6 = var10.bind(var8)(var9, var6);
                            var5.translateY = var6;
                            var4[2] = var5;
                            var3.transform = var4;
                            var0.animations = var3;
                            var3 = global;
                            var5 = var3.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var3.opacity = var2;
                            var6 = {};
                            var2 = '-90deg';
                            var6.rotate = var2;
                            var2 = new Array(3);
                            var2[0] = var6;
                            var6 = {};
                            var8 = var7.targetWidth;
                            var9 = 2;
                            var10 = var8 / var9;
                            var8 = var7.targetHeight;
                            var8 = var8 / var9;
                            var8 = var10 - var8;
                            var6.translateX = var8;
                            var2[1] = var6;
                            var6 = {};
                            var8 = var7.targetWidth;
                            var8 = var8 / var9;
                            var7 = var7.targetHeight;
                            var7 = var7 / var9;
                            var7 = var8 - var7;
                            var7 = -var7;
                            var6.translateY = var7;
                            var2[2] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot5;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.delayFunction = var8;
                        var2.delay = var7;
                        var2.animation = var6;
                        var2.config = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 1900668823867.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot6;
                        var0.__initData = var1;
                        return var0;
                    };
                    var0.build = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot2;
        var0 = {};
        var5 = 'createInstance';
        var0.key = var5;
        var1 = function() {
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
    var9 = var3.bind(var0)(var4);
    var3 = 'RotateInDownLeft';
    var9.presetName = var3;
    var3 = {};
    var4 = "function pnpm_RotateTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}";
    var3.code = var4;
    var _closure1_slot7 = var3;
    var3 = var12[var10];
    var3 = var11.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34530: for (var _fun34530_ip = 0;;) switch (_fun34530_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot1;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var4)(var5, var3);
                    var6 = arguments.length;
                    var3 = global;
                    var3 = var3.Array;
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var7;
                    var12 = var6;
                    var3 = new var13[var3](var12, var11);
                    var7 = var3 instanceof Object ? var3 : var7;
                    var3 = 0;
                    var9 = var3 < var6;
                    if (!var9) {
                        _fun34530_ip = 87;
                        continue _fun34530
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34530_ip = 72;
                        continue _fun34530
                    }
                case 87:
                    var3 = _closure1_slot14;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var8 = var1.bind(var3)();
                        var _closure4_slot0 = var8;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var6 = var4[var3];
                        var _closure4_slot1 = var6;
                        var3 = 1;
                        var5 = var4[var3];
                        var _closure4_slot2 = var5;
                        var4 = _closure3_slot0;
                        var3 = var4.getDelay;
                        var7 = var3.bind(var4)();
                        var _closure4_slot3 = var7;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot5 = var4;
                        var0 = function arg0() {
                            var7 = arg0;
                            var0 = {};
                            var3 = {};
                            var10 = _closure4_slot0;
                            var9 = _closure4_slot3;
                            var11 = _closure4_slot1;
                            var6 = _closure4_slot2;
                            var8 = undefined;
                            var2 = 1;
                            var2 = var11.bind(var8)(var2, var6);
                            var2 = var10.bind(var8)(var9, var2);
                            var3.opacity = var2;
                            var2 = {};
                            var4 = '0deg';
                            var4 = var11.bind(var8)(var4, var6);
                            var4 = var10.bind(var8)(var9, var4);
                            var2.rotate = var4;
                            var4 = new Array(3);
                            var4[0] = var2;
                            var5 = {};
                            var2 = 0;
                            var12 = var11.bind(var8)(var2, var6);
                            var12 = var10.bind(var8)(var9, var12);
                            var5.translateX = var12;
                            var4[1] = var5;
                            var5 = {};
                            var6 = var11.bind(var8)(var2, var6);
                            var6 = var10.bind(var8)(var9, var6);
                            var5.translateY = var6;
                            var4[2] = var5;
                            var3.transform = var4;
                            var0.animations = var3;
                            var3 = global;
                            var5 = var3.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var3.opacity = var2;
                            var6 = {};
                            var2 = '90deg';
                            var6.rotate = var2;
                            var2 = new Array(3);
                            var2[0] = var6;
                            var6 = {};
                            var8 = var7.targetWidth;
                            var9 = 2;
                            var10 = var8 / var9;
                            var8 = var7.targetHeight;
                            var8 = var8 / var9;
                            var8 = var10 - var8;
                            var8 = -var8;
                            var6.translateX = var8;
                            var2[1] = var6;
                            var6 = {};
                            var8 = var7.targetWidth;
                            var8 = var8 / var9;
                            var7 = var7.targetHeight;
                            var7 = var7 / var9;
                            var7 = var8 - var7;
                            var7 = -var7;
                            var6.translateY = var7;
                            var2[2] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot5;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.delayFunction = var8;
                        var2.delay = var7;
                        var2.animation = var6;
                        var2.config = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 1066189129817.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot7;
                        var0.__initData = var1;
                        return var0;
                    };
                    var0.build = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot2;
        var0 = {};
        var5 = 'createInstance';
        var0.key = var5;
        var1 = function() {
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
    var8 = var3.bind(var0)(var4);
    var3 = 'RotateInDownRight';
    var8.presetName = var3;
    var3 = {};
    var4 = "function pnpm_RotateTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}";
    var3.code = var4;
    var _closure1_slot8 = var3;
    var3 = var12[var10];
    var3 = var11.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34535: for (var _fun34535_ip = 0;;) switch (_fun34535_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot1;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var4)(var5, var3);
                    var6 = arguments.length;
                    var3 = global;
                    var3 = var3.Array;
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var7;
                    var12 = var6;
                    var3 = new var13[var3](var12, var11);
                    var7 = var3 instanceof Object ? var3 : var7;
                    var3 = 0;
                    var9 = var3 < var6;
                    if (!var9) {
                        _fun34535_ip = 87;
                        continue _fun34535
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34535_ip = 72;
                        continue _fun34535
                    }
                case 87:
                    var3 = _closure1_slot14;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var8 = var1.bind(var3)();
                        var _closure4_slot0 = var8;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var6 = var4[var3];
                        var _closure4_slot1 = var6;
                        var3 = 1;
                        var5 = var4[var3];
                        var _closure4_slot2 = var5;
                        var4 = _closure3_slot0;
                        var3 = var4.getDelay;
                        var7 = var3.bind(var4)();
                        var _closure4_slot3 = var7;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot5 = var4;
                        var0 = function arg0() {
                            var7 = arg0;
                            var0 = {};
                            var3 = {};
                            var10 = _closure4_slot0;
                            var9 = _closure4_slot3;
                            var11 = _closure4_slot1;
                            var6 = _closure4_slot2;
                            var8 = undefined;
                            var2 = 1;
                            var2 = var11.bind(var8)(var2, var6);
                            var2 = var10.bind(var8)(var9, var2);
                            var3.opacity = var2;
                            var2 = {};
                            var4 = '0deg';
                            var4 = var11.bind(var8)(var4, var6);
                            var4 = var10.bind(var8)(var9, var4);
                            var2.rotate = var4;
                            var4 = new Array(3);
                            var4[0] = var2;
                            var5 = {};
                            var2 = 0;
                            var12 = var11.bind(var8)(var2, var6);
                            var12 = var10.bind(var8)(var9, var12);
                            var5.translateX = var12;
                            var4[1] = var5;
                            var5 = {};
                            var6 = var11.bind(var8)(var2, var6);
                            var6 = var10.bind(var8)(var9, var6);
                            var5.translateY = var6;
                            var4[2] = var5;
                            var3.transform = var4;
                            var0.animations = var3;
                            var3 = global;
                            var5 = var3.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var3.opacity = var2;
                            var6 = {};
                            var2 = '90deg';
                            var6.rotate = var2;
                            var2 = new Array(3);
                            var2[0] = var6;
                            var6 = {};
                            var8 = var7.targetWidth;
                            var9 = 2;
                            var10 = var8 / var9;
                            var8 = var7.targetHeight;
                            var8 = var8 / var9;
                            var8 = var10 - var8;
                            var6.translateX = var8;
                            var2[1] = var6;
                            var6 = {};
                            var8 = var7.targetWidth;
                            var8 = var8 / var9;
                            var7 = var7.targetHeight;
                            var7 = var7 / var9;
                            var7 = var8 - var7;
                            var6.translateY = var7;
                            var2[2] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot5;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.delayFunction = var8;
                        var2.delay = var7;
                        var2.animation = var6;
                        var2.config = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 11999620665656.0;
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
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot2;
        var0 = {};
        var5 = 'createInstance';
        var0.key = var5;
        var1 = function() {
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
    var7 = var3.bind(var0)(var4);
    var3 = 'RotateInUpLeft';
    var7.presetName = var3;
    var3 = {};
    var4 = "function pnpm_RotateTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}";
    var3.code = var4;
    var _closure1_slot9 = var3;
    var3 = var12[var10];
    var3 = var11.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34540: for (var _fun34540_ip = 0;;) switch (_fun34540_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot1;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var4)(var5, var3);
                    var6 = arguments.length;
                    var3 = global;
                    var3 = var3.Array;
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var7;
                    var12 = var6;
                    var3 = new var13[var3](var12, var11);
                    var7 = var3 instanceof Object ? var3 : var7;
                    var3 = 0;
                    var9 = var3 < var6;
                    if (!var9) {
                        _fun34540_ip = 87;
                        continue _fun34540
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34540_ip = 72;
                        continue _fun34540
                    }
                case 87:
                    var3 = _closure1_slot14;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var8 = var1.bind(var3)();
                        var _closure4_slot0 = var8;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var6 = var4[var3];
                        var _closure4_slot1 = var6;
                        var3 = 1;
                        var5 = var4[var3];
                        var _closure4_slot2 = var5;
                        var4 = _closure3_slot0;
                        var3 = var4.getDelay;
                        var7 = var3.bind(var4)();
                        var _closure4_slot3 = var7;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot5 = var4;
                        var0 = function arg0() {
                            var7 = arg0;
                            var0 = {};
                            var3 = {};
                            var10 = _closure4_slot0;
                            var9 = _closure4_slot3;
                            var11 = _closure4_slot1;
                            var6 = _closure4_slot2;
                            var8 = undefined;
                            var2 = 1;
                            var2 = var11.bind(var8)(var2, var6);
                            var2 = var10.bind(var8)(var9, var2);
                            var3.opacity = var2;
                            var2 = {};
                            var4 = '0deg';
                            var4 = var11.bind(var8)(var4, var6);
                            var4 = var10.bind(var8)(var9, var4);
                            var2.rotate = var4;
                            var4 = new Array(3);
                            var4[0] = var2;
                            var5 = {};
                            var2 = 0;
                            var12 = var11.bind(var8)(var2, var6);
                            var12 = var10.bind(var8)(var9, var12);
                            var5.translateX = var12;
                            var4[1] = var5;
                            var5 = {};
                            var6 = var11.bind(var8)(var2, var6);
                            var6 = var10.bind(var8)(var9, var6);
                            var5.translateY = var6;
                            var4[2] = var5;
                            var3.transform = var4;
                            var0.animations = var3;
                            var3 = global;
                            var5 = var3.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var3.opacity = var2;
                            var6 = {};
                            var2 = '-90deg';
                            var6.rotate = var2;
                            var2 = new Array(3);
                            var2[0] = var6;
                            var6 = {};
                            var8 = var7.targetWidth;
                            var9 = 2;
                            var10 = var8 / var9;
                            var8 = var7.targetHeight;
                            var8 = var8 / var9;
                            var8 = var10 - var8;
                            var8 = -var8;
                            var6.translateX = var8;
                            var2[1] = var6;
                            var6 = {};
                            var8 = var7.targetWidth;
                            var8 = var8 / var9;
                            var7 = var7.targetHeight;
                            var7 = var7 / var9;
                            var7 = var8 - var7;
                            var6.translateY = var7;
                            var2[2] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot5;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.delayFunction = var8;
                        var2.delay = var7;
                        var2.animation = var6;
                        var2.config = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 15143335307550.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot9;
                        var0.__initData = var1;
                        return var0;
                    };
                    var0.build = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot2;
        var0 = {};
        var5 = 'createInstance';
        var0.key = var5;
        var1 = function() {
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
    var6 = var3.bind(var0)(var4);
    var3 = 'RotateInUpRight';
    var6.presetName = var3;
    var3 = {};
    var4 = "function pnpm_RotateTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}";
    var3.code = var4;
    var _closure1_slot10 = var3;
    var3 = var12[var10];
    var3 = var11.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34545: for (var _fun34545_ip = 0;;) switch (_fun34545_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot1;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var4)(var5, var3);
                    var6 = arguments.length;
                    var3 = global;
                    var3 = var3.Array;
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var7;
                    var12 = var6;
                    var3 = new var13[var3](var12, var11);
                    var7 = var3 instanceof Object ? var3 : var7;
                    var3 = 0;
                    var9 = var3 < var6;
                    if (!var9) {
                        _fun34545_ip = 87;
                        continue _fun34545
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34545_ip = 72;
                        continue _fun34545
                    }
                case 87:
                    var3 = _closure1_slot14;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var8 = var1.bind(var3)();
                        var _closure4_slot0 = var8;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var6 = var4[var3];
                        var _closure4_slot1 = var6;
                        var3 = 1;
                        var5 = var4[var3];
                        var _closure4_slot2 = var5;
                        var4 = _closure3_slot0;
                        var3 = var4.getDelay;
                        var7 = var3.bind(var4)();
                        var _closure4_slot3 = var7;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot5 = var4;
                        var0 = function arg0() {
                            var5 = arg0;
                            var0 = {};
                            var2 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var11 = _closure4_slot1;
                            var10 = _closure4_slot2;
                            var6 = undefined;
                            var7 = 0;
                            var3 = var11.bind(var6)(var7, var10);
                            var3 = var9.bind(var6)(var8, var3);
                            var2.opacity = var3;
                            var4 = {};
                            var3 = '90deg';
                            var3 = var11.bind(var6)(var3, var10);
                            var3 = var9.bind(var6)(var8, var3);
                            var4.rotate = var3;
                            var3 = new Array(3);
                            var3[0] = var4;
                            var4 = {};
                            var12 = var5.currentWidth;
                            var13 = 2;
                            var14 = var12 / var13;
                            var12 = var5.currentHeight;
                            var12 = var12 / var13;
                            var12 = var14 - var12;
                            var12 = var11.bind(var6)(var12, var10);
                            var12 = var9.bind(var6)(var8, var12);
                            var4.translateX = var12;
                            var3[1] = var4;
                            var4 = {};
                            var12 = var5.currentWidth;
                            var12 = var12 / var13;
                            var5 = var5.currentHeight;
                            var5 = var5 / var13;
                            var5 = var12 - var5;
                            var5 = var11.bind(var6)(var5, var10);
                            var5 = var9.bind(var6)(var8, var5);
                            var4.translateY = var5;
                            var3[2] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var2 = global;
                            var5 = var2.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var2 = 1;
                            var3.opacity = var2;
                            var6 = {};
                            var2 = '0deg';
                            var6.rotate = var2;
                            var2 = new Array(3);
                            var2[0] = var6;
                            var6 = {};
                            var6.translateX = var7;
                            var2[1] = var6;
                            var6 = {};
                            var6.translateY = var7;
                            var2[2] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot5;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.delayFunction = var8;
                        var2.delay = var7;
                        var2.animation = var6;
                        var2.config = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 11712932777694.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot10;
                        var0.__initData = var1;
                        return var0;
                    };
                    var0.build = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot2;
        var0 = {};
        var5 = 'createInstance';
        var0.key = var5;
        var1 = function() {
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
    var5 = var3.bind(var0)(var4);
    var3 = 'RotateOutDownLeft';
    var5.presetName = var3;
    var3 = {};
    var4 = "function pnpm_RotateTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}";
    var3.code = var4;
    var _closure1_slot11 = var3;
    var3 = var12[var10];
    var3 = var11.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34550: for (var _fun34550_ip = 0;;) switch (_fun34550_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot1;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var4)(var5, var3);
                    var6 = arguments.length;
                    var3 = global;
                    var3 = var3.Array;
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var7;
                    var12 = var6;
                    var3 = new var13[var3](var12, var11);
                    var7 = var3 instanceof Object ? var3 : var7;
                    var3 = 0;
                    var9 = var3 < var6;
                    if (!var9) {
                        _fun34550_ip = 87;
                        continue _fun34550
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34550_ip = 72;
                        continue _fun34550
                    }
                case 87:
                    var3 = _closure1_slot14;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var8 = var1.bind(var3)();
                        var _closure4_slot0 = var8;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var6 = var4[var3];
                        var _closure4_slot1 = var6;
                        var3 = 1;
                        var5 = var4[var3];
                        var _closure4_slot2 = var5;
                        var4 = _closure3_slot0;
                        var3 = var4.getDelay;
                        var7 = var3.bind(var4)();
                        var _closure4_slot3 = var7;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot5 = var4;
                        var0 = function arg0() {
                            var5 = arg0;
                            var0 = {};
                            var2 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var11 = _closure4_slot1;
                            var10 = _closure4_slot2;
                            var6 = undefined;
                            var7 = 0;
                            var3 = var11.bind(var6)(var7, var10);
                            var3 = var9.bind(var6)(var8, var3);
                            var2.opacity = var3;
                            var4 = {};
                            var3 = '-90deg';
                            var3 = var11.bind(var6)(var3, var10);
                            var3 = var9.bind(var6)(var8, var3);
                            var4.rotate = var3;
                            var3 = new Array(3);
                            var3[0] = var4;
                            var4 = {};
                            var12 = var5.currentWidth;
                            var13 = 2;
                            var14 = var12 / var13;
                            var12 = var5.currentHeight;
                            var12 = var12 / var13;
                            var12 = var14 - var12;
                            var12 = -var12;
                            var12 = var11.bind(var6)(var12, var10);
                            var12 = var9.bind(var6)(var8, var12);
                            var4.translateX = var12;
                            var3[1] = var4;
                            var4 = {};
                            var12 = var5.currentWidth;
                            var12 = var12 / var13;
                            var5 = var5.currentHeight;
                            var5 = var5 / var13;
                            var5 = var12 - var5;
                            var5 = var11.bind(var6)(var5, var10);
                            var5 = var9.bind(var6)(var8, var5);
                            var4.translateY = var5;
                            var3[2] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var2 = global;
                            var5 = var2.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var2 = 1;
                            var3.opacity = var2;
                            var6 = {};
                            var2 = '0deg';
                            var6.rotate = var2;
                            var2 = new Array(3);
                            var2[0] = var6;
                            var6 = {};
                            var6.translateX = var7;
                            var2[1] = var6;
                            var6 = {};
                            var6.translateY = var7;
                            var2[2] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot5;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.delayFunction = var8;
                        var2.delay = var7;
                        var2.animation = var6;
                        var2.config = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 16449003298460.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot11;
                        var0.__initData = var1;
                        return var0;
                    };
                    var0.build = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot2;
        var0 = {};
        var5 = 'createInstance';
        var0.key = var5;
        var1 = function() {
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
    var4 = var3.bind(var0)(var4);
    var3 = 'RotateOutDownRight';
    var4.presetName = var3;
    var3 = {};
    var13 = "function pnpm_RotateTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}";
    var3.code = var13;
    var _closure1_slot12 = var3;
    var3 = var12[var10];
    var3 = var11.bind(var0)(var3);
    var13 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34555: for (var _fun34555_ip = 0;;) switch (_fun34555_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot1;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var4)(var5, var3);
                    var6 = arguments.length;
                    var3 = global;
                    var3 = var3.Array;
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var7;
                    var12 = var6;
                    var3 = new var13[var3](var12, var11);
                    var7 = var3 instanceof Object ? var3 : var7;
                    var3 = 0;
                    var9 = var3 < var6;
                    if (!var9) {
                        _fun34555_ip = 87;
                        continue _fun34555
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34555_ip = 72;
                        continue _fun34555
                    }
                case 87:
                    var3 = _closure1_slot14;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var8 = var1.bind(var3)();
                        var _closure4_slot0 = var8;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var6 = var4[var3];
                        var _closure4_slot1 = var6;
                        var3 = 1;
                        var5 = var4[var3];
                        var _closure4_slot2 = var5;
                        var4 = _closure3_slot0;
                        var3 = var4.getDelay;
                        var7 = var3.bind(var4)();
                        var _closure4_slot3 = var7;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot5 = var4;
                        var0 = function arg0() {
                            var5 = arg0;
                            var0 = {};
                            var2 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var11 = _closure4_slot1;
                            var10 = _closure4_slot2;
                            var6 = undefined;
                            var7 = 0;
                            var3 = var11.bind(var6)(var7, var10);
                            var3 = var9.bind(var6)(var8, var3);
                            var2.opacity = var3;
                            var4 = {};
                            var3 = '-90deg';
                            var3 = var11.bind(var6)(var3, var10);
                            var3 = var9.bind(var6)(var8, var3);
                            var4.rotate = var3;
                            var3 = new Array(3);
                            var3[0] = var4;
                            var4 = {};
                            var12 = var5.currentWidth;
                            var13 = 2;
                            var14 = var12 / var13;
                            var12 = var5.currentHeight;
                            var12 = var12 / var13;
                            var12 = var14 - var12;
                            var12 = var11.bind(var6)(var12, var10);
                            var12 = var9.bind(var6)(var8, var12);
                            var4.translateX = var12;
                            var3[1] = var4;
                            var4 = {};
                            var12 = var5.currentWidth;
                            var12 = var12 / var13;
                            var5 = var5.currentHeight;
                            var5 = var5 / var13;
                            var5 = var12 - var5;
                            var5 = -var5;
                            var5 = var11.bind(var6)(var5, var10);
                            var5 = var9.bind(var6)(var8, var5);
                            var4.translateY = var5;
                            var3[2] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var2 = global;
                            var5 = var2.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var2 = 1;
                            var3.opacity = var2;
                            var6 = {};
                            var2 = '0deg';
                            var6.rotate = var2;
                            var2 = new Array(3);
                            var2[0] = var6;
                            var6 = {};
                            var6.translateX = var7;
                            var2[1] = var6;
                            var6 = {};
                            var6.translateY = var7;
                            var2[2] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot5;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.delayFunction = var8;
                        var2.delay = var7;
                        var2.animation = var6;
                        var2.config = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 16777964503997.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot12;
                        var0.__initData = var1;
                        return var0;
                    };
                    var0.build = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot2;
        var0 = {};
        var5 = 'createInstance';
        var0.key = var5;
        var1 = function() {
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
    var3 = var3.bind(var0)(var13);
    var13 = 'RotateOutUpLeft';
    var3.presetName = var13;
    var13 = {};
    var14 = "function pnpm_RotateTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}";
    var13.code = var14;
    var _closure1_slot13 = var13;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.ComplexAnimationBuilder;
    var1 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34560: for (var _fun34560_ip = 0;;) switch (_fun34560_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot1;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var4)(var5, var3);
                    var6 = arguments.length;
                    var3 = global;
                    var3 = var3.Array;
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var7;
                    var12 = var6;
                    var3 = new var13[var3](var12, var11);
                    var7 = var3 instanceof Object ? var3 : var7;
                    var3 = 0;
                    var9 = var3 < var6;
                    if (!var9) {
                        _fun34560_ip = 87;
                        continue _fun34560
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34560_ip = 72;
                        continue _fun34560
                    }
                case 87:
                    var3 = _closure1_slot14;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var8 = var1.bind(var3)();
                        var _closure4_slot0 = var8;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var6 = var4[var3];
                        var _closure4_slot1 = var6;
                        var3 = 1;
                        var5 = var4[var3];
                        var _closure4_slot2 = var5;
                        var4 = _closure3_slot0;
                        var3 = var4.getDelay;
                        var7 = var3.bind(var4)();
                        var _closure4_slot3 = var7;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot5 = var4;
                        var0 = function arg0() {
                            var5 = arg0;
                            var0 = {};
                            var2 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var11 = _closure4_slot1;
                            var10 = _closure4_slot2;
                            var6 = undefined;
                            var7 = 0;
                            var3 = var11.bind(var6)(var7, var10);
                            var3 = var9.bind(var6)(var8, var3);
                            var2.opacity = var3;
                            var4 = {};
                            var3 = '90deg';
                            var3 = var11.bind(var6)(var3, var10);
                            var3 = var9.bind(var6)(var8, var3);
                            var4.rotate = var3;
                            var3 = new Array(3);
                            var3[0] = var4;
                            var4 = {};
                            var12 = var5.currentWidth;
                            var13 = 2;
                            var14 = var12 / var13;
                            var12 = var5.currentHeight;
                            var12 = var12 / var13;
                            var12 = var14 - var12;
                            var12 = -var12;
                            var12 = var11.bind(var6)(var12, var10);
                            var12 = var9.bind(var6)(var8, var12);
                            var4.translateX = var12;
                            var3[1] = var4;
                            var4 = {};
                            var12 = var5.currentWidth;
                            var12 = var12 / var13;
                            var5 = var5.currentHeight;
                            var5 = var5 / var13;
                            var5 = var12 - var5;
                            var5 = -var5;
                            var5 = var11.bind(var6)(var5, var10);
                            var5 = var9.bind(var6)(var8, var5);
                            var4.translateY = var5;
                            var3[2] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var2 = global;
                            var5 = var2.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var2 = 1;
                            var3.opacity = var2;
                            var6 = {};
                            var2 = '0deg';
                            var6.rotate = var2;
                            var2 = new Array(3);
                            var2[0] = var6;
                            var6 = {};
                            var6.translateX = var7;
                            var2[1] = var6;
                            var6 = {};
                            var6.translateY = var7;
                            var2[2] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot5;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.delayFunction = var8;
                        var2.delay = var7;
                        var2.animation = var6;
                        var2.config = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 14312403608563.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot13;
                        var0.__initData = var1;
                        return var0;
                    };
                    var0.build = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot2;
        var0 = {};
        var5 = 'createInstance';
        var0.key = var5;
        var1 = function() {
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
    var1 = var1.bind(var0)(var10);
    var10 = 'RotateOutUpRight';
    var1.presetName = var10;
    var2.RotateInDownLeft = var9;
    var2.RotateInDownRight = var8;
    var2.RotateInUpLeft = var7;
    var2.RotateInUpRight = var6;
    var2.RotateOutDownLeft = var5;
    var2.RotateOutDownRight = var4;
    var2.RotateOutUpLeft = var3;
    var2.RotateOutUpRight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 3791]);