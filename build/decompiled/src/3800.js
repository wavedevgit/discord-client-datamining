// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var15 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var16 = dependencyMap;
    var0 = function arg0, arg1, arg2() {
        _fun34209: for (var _fun34209_ip = 0;;) switch (_fun34209_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot4;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = _closure1_slot19;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun34209_ip = 51;
                    continue _fun34209
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun34209_ip = 92;
                continue _fun34209;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun34209_ip = 71;
                    continue _fun34209
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
    var _closure1_slot18 = var0;
    var0 = function() {
        _fun34210: for (var _fun34210_ip = 0;;) switch (_fun34210_ip) {
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
                _fun34210_ip = 74;
                continue _fun34210;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var16[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var16[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var16[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var16[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var16[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var16[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = "function pnpm_FlipTs1(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'},{translateY:-targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:500},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}";
    var3.code = var4;
    var _closure1_slot6 = var3;
    var14 = 6;
    var3 = var16[var14];
    var3 = var15.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34214: for (var _fun34214_ip = 0;;) switch (_fun34214_ip) {
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
                        _fun34214_ip = 87;
                        continue _fun34214
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34214_ip = 72;
                        continue _fun34214
                    }
                case 87:
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var7 = var1.bind(var3)();
                        var _closure4_slot0 = var7;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var5 = var4[var3];
                        var _closure4_slot1 = var5;
                        var3 = 1;
                        var4 = var4[var3];
                        var _closure4_slot2 = var4;
                        var6 = _closure3_slot0;
                        var3 = var6.getDelay;
                        var6 = var3.bind(var6)();
                        var _closure4_slot3 = var6;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var8 = var2.initialValues;
                        var _closure4_slot5 = var8;
                        var0 = function arg0() {
                            var0 = {};
                            var1 = global;
                            var6 = var1.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var2 = {};
                            var3 = 500;
                            var2.perspective = var3;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var2 = {};
                            var7 = '90deg';
                            var2.rotateX = var7;
                            var1[1] = var2;
                            var2 = {};
                            var7 = arg0;
                            var7 = var7.targetHeight;
                            var7 = -var7;
                            var2.translateY = var7;
                            var1[2] = var2;
                            var4.transform = var1;
                            var2 = _closure4_slot5;
                            var2 = var5.bind(var6)(var4, var2);
                            var0.initialValues = var2;
                            var2 = {};
                            var4 = {};
                            var4.perspective = var3;
                            var3 = new Array(3);
                            var3[0] = var4;
                            var4 = {};
                            var8 = _closure4_slot0;
                            var7 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var9 = _closure4_slot2;
                            var6 = undefined;
                            var5 = '0deg';
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.rotateX = var5;
                            var3[1] = var4;
                            var4 = {};
                            var5 = 0;
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.translateY = var5;
                            var3[2] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.initialValues = var8;
                        var2.delayFunction = var7;
                        var2.delay = var6;
                        var2.animation = var5;
                        var2.config = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 17482936202676.0;
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
    var13 = var3.bind(var0)(var4);
    var3 = 'FlipInXUp';
    var13.presetName = var3;
    var3 = {};
    var4 = "function pnpm_FlipTs2(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'-90deg'},{translateX:-targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}";
    var3.code = var4;
    var _closure1_slot7 = var3;
    var3 = var16[var14];
    var3 = var15.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34219: for (var _fun34219_ip = 0;;) switch (_fun34219_ip) {
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
                        _fun34219_ip = 87;
                        continue _fun34219
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34219_ip = 72;
                        continue _fun34219
                    }
                case 87:
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var7 = var1.bind(var3)();
                        var _closure4_slot0 = var7;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var5 = var4[var3];
                        var _closure4_slot1 = var5;
                        var3 = 1;
                        var4 = var4[var3];
                        var _closure4_slot2 = var4;
                        var6 = _closure3_slot0;
                        var3 = var6.getDelay;
                        var6 = var3.bind(var6)();
                        var _closure4_slot3 = var6;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var8 = var2.initialValues;
                        var _closure4_slot5 = var8;
                        var0 = function arg0() {
                            var0 = {};
                            var1 = global;
                            var6 = var1.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var2 = {};
                            var3 = 500;
                            var2.perspective = var3;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var2 = {};
                            var7 = '-90deg';
                            var2.rotateY = var7;
                            var1[1] = var2;
                            var2 = {};
                            var7 = arg0;
                            var7 = var7.targetWidth;
                            var7 = -var7;
                            var2.translateX = var7;
                            var1[2] = var2;
                            var4.transform = var1;
                            var2 = _closure4_slot5;
                            var2 = var5.bind(var6)(var4, var2);
                            var0.initialValues = var2;
                            var2 = {};
                            var4 = {};
                            var8 = _closure4_slot0;
                            var7 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var9 = _closure4_slot2;
                            var6 = undefined;
                            var3 = var10.bind(var6)(var3, var9);
                            var3 = var8.bind(var6)(var7, var3);
                            var4.perspective = var3;
                            var3 = new Array(3);
                            var3[0] = var4;
                            var4 = {};
                            var5 = '0deg';
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.rotateY = var5;
                            var3[1] = var4;
                            var4 = {};
                            var5 = 0;
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.translateX = var5;
                            var3[2] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.initialValues = var8;
                        var2.delayFunction = var7;
                        var2.delay = var6;
                        var2.animation = var5;
                        var2.config = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 7030831354781.0;
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
    var12 = var3.bind(var0)(var4);
    var3 = 'FlipInYLeft';
    var12.presetName = var3;
    var3 = {};
    var4 = "function pnpm_FlipTs3(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'-90deg'},{translateY:targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}";
    var3.code = var4;
    var _closure1_slot8 = var3;
    var3 = var16[var14];
    var3 = var15.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34224: for (var _fun34224_ip = 0;;) switch (_fun34224_ip) {
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
                        _fun34224_ip = 87;
                        continue _fun34224
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34224_ip = 72;
                        continue _fun34224
                    }
                case 87:
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var7 = var1.bind(var3)();
                        var _closure4_slot0 = var7;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var5 = var4[var3];
                        var _closure4_slot1 = var5;
                        var3 = 1;
                        var4 = var4[var3];
                        var _closure4_slot2 = var4;
                        var6 = _closure3_slot0;
                        var3 = var6.getDelay;
                        var6 = var3.bind(var6)();
                        var _closure4_slot3 = var6;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var8 = var2.initialValues;
                        var _closure4_slot5 = var8;
                        var0 = function arg0() {
                            var0 = {};
                            var1 = global;
                            var6 = var1.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var2 = {};
                            var3 = 500;
                            var2.perspective = var3;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var2 = {};
                            var7 = '-90deg';
                            var2.rotateX = var7;
                            var1[1] = var2;
                            var2 = {};
                            var7 = arg0;
                            var7 = var7.targetHeight;
                            var2.translateY = var7;
                            var1[2] = var2;
                            var4.transform = var1;
                            var2 = _closure4_slot5;
                            var2 = var5.bind(var6)(var4, var2);
                            var0.initialValues = var2;
                            var2 = {};
                            var4 = {};
                            var8 = _closure4_slot0;
                            var7 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var9 = _closure4_slot2;
                            var6 = undefined;
                            var3 = var10.bind(var6)(var3, var9);
                            var3 = var8.bind(var6)(var7, var3);
                            var4.perspective = var3;
                            var3 = new Array(3);
                            var3[0] = var4;
                            var4 = {};
                            var5 = '0deg';
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.rotateX = var5;
                            var3[1] = var4;
                            var4 = {};
                            var5 = 0;
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.translateY = var5;
                            var3[2] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.initialValues = var8;
                        var2.delayFunction = var7;
                        var2.delay = var6;
                        var2.animation = var5;
                        var2.config = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 8540727794920.0;
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
    var11 = var3.bind(var0)(var4);
    var3 = 'FlipInXDown';
    var11.presetName = var3;
    var3 = {};
    var4 = "function pnpm_FlipTs4(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'},{translateX:targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}";
    var3.code = var4;
    var _closure1_slot9 = var3;
    var3 = var16[var14];
    var3 = var15.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34229: for (var _fun34229_ip = 0;;) switch (_fun34229_ip) {
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
                        _fun34229_ip = 87;
                        continue _fun34229
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34229_ip = 72;
                        continue _fun34229
                    }
                case 87:
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var7 = var1.bind(var3)();
                        var _closure4_slot0 = var7;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var5 = var4[var3];
                        var _closure4_slot1 = var5;
                        var3 = 1;
                        var4 = var4[var3];
                        var _closure4_slot2 = var4;
                        var6 = _closure3_slot0;
                        var3 = var6.getDelay;
                        var6 = var3.bind(var6)();
                        var _closure4_slot3 = var6;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var8 = var2.initialValues;
                        var _closure4_slot5 = var8;
                        var0 = function arg0() {
                            var0 = {};
                            var1 = global;
                            var6 = var1.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var2 = {};
                            var3 = 500;
                            var2.perspective = var3;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var2 = {};
                            var7 = '90deg';
                            var2.rotateY = var7;
                            var1[1] = var2;
                            var2 = {};
                            var7 = arg0;
                            var7 = var7.targetWidth;
                            var2.translateX = var7;
                            var1[2] = var2;
                            var4.transform = var1;
                            var2 = _closure4_slot5;
                            var2 = var5.bind(var6)(var4, var2);
                            var0.initialValues = var2;
                            var2 = {};
                            var4 = {};
                            var8 = _closure4_slot0;
                            var7 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var9 = _closure4_slot2;
                            var6 = undefined;
                            var3 = var10.bind(var6)(var3, var9);
                            var3 = var8.bind(var6)(var7, var3);
                            var4.perspective = var3;
                            var3 = new Array(3);
                            var3[0] = var4;
                            var4 = {};
                            var5 = '0deg';
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.rotateY = var5;
                            var3[1] = var4;
                            var4 = {};
                            var5 = 0;
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.translateX = var5;
                            var3[2] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.initialValues = var8;
                        var2.delayFunction = var7;
                        var2.delay = var6;
                        var2.animation = var5;
                        var2.config = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 10571583952635.0;
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
    var10 = var3.bind(var0)(var4);
    var3 = 'FlipInYRight';
    var10.presetName = var3;
    var3 = {};
    var4 = "function pnpm_FlipTs5(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))}]},callback:callback};}";
    var3.code = var4;
    var _closure1_slot10 = var3;
    var3 = var16[var14];
    var3 = var15.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34234: for (var _fun34234_ip = 0;;) switch (_fun34234_ip) {
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
                        _fun34234_ip = 87;
                        continue _fun34234
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34234_ip = 72;
                        continue _fun34234
                    }
                case 87:
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var7 = var1.bind(var3)();
                        var _closure4_slot0 = var7;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var5 = var4[var3];
                        var _closure4_slot1 = var5;
                        var3 = 1;
                        var4 = var4[var3];
                        var _closure4_slot2 = var4;
                        var6 = _closure3_slot0;
                        var3 = var6.getDelay;
                        var6 = var3.bind(var6)();
                        var _closure4_slot3 = var6;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var8 = var2.initialValues;
                        var _closure4_slot5 = var8;
                        var0 = function() {
                            var0 = {};
                            var1 = global;
                            var6 = var1.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var2 = {};
                            var3 = 500;
                            var2.perspective = var3;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var7 = '90deg';
                            var2.rotateX = var7;
                            var1[1] = var2;
                            var4.transform = var1;
                            var2 = _closure4_slot5;
                            var2 = var5.bind(var6)(var4, var2);
                            var0.initialValues = var2;
                            var2 = {};
                            var4 = {};
                            var8 = _closure4_slot0;
                            var7 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var9 = _closure4_slot2;
                            var6 = undefined;
                            var3 = var10.bind(var6)(var3, var9);
                            var3 = var8.bind(var6)(var7, var3);
                            var4.perspective = var3;
                            var3 = new Array(2);
                            var3[0] = var4;
                            var4 = {};
                            var5 = '0deg';
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.rotateX = var5;
                            var3[1] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.initialValues = var8;
                        var2.delayFunction = var7;
                        var2.delay = var6;
                        var2.animation = var5;
                        var2.config = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 5139023366989.0;
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
    var9 = var3.bind(var0)(var4);
    var3 = 'FlipInEasyX';
    var9.presetName = var3;
    var3 = {};
    var4 = "function pnpm_FlipTs6(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))}]},callback:callback};}";
    var3.code = var4;
    var _closure1_slot11 = var3;
    var3 = var16[var14];
    var3 = var15.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34239: for (var _fun34239_ip = 0;;) switch (_fun34239_ip) {
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
                        _fun34239_ip = 87;
                        continue _fun34239
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34239_ip = 72;
                        continue _fun34239
                    }
                case 87:
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var7 = var1.bind(var3)();
                        var _closure4_slot0 = var7;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var5 = var4[var3];
                        var _closure4_slot1 = var5;
                        var3 = 1;
                        var4 = var4[var3];
                        var _closure4_slot2 = var4;
                        var6 = _closure3_slot0;
                        var3 = var6.getDelay;
                        var6 = var3.bind(var6)();
                        var _closure4_slot3 = var6;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var8 = var2.initialValues;
                        var _closure4_slot5 = var8;
                        var0 = function() {
                            var0 = {};
                            var1 = global;
                            var6 = var1.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var2 = {};
                            var3 = 500;
                            var2.perspective = var3;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var7 = '90deg';
                            var2.rotateY = var7;
                            var1[1] = var2;
                            var4.transform = var1;
                            var2 = _closure4_slot5;
                            var2 = var5.bind(var6)(var4, var2);
                            var0.initialValues = var2;
                            var2 = {};
                            var4 = {};
                            var8 = _closure4_slot0;
                            var7 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var9 = _closure4_slot2;
                            var6 = undefined;
                            var3 = var10.bind(var6)(var3, var9);
                            var3 = var8.bind(var6)(var7, var3);
                            var4.perspective = var3;
                            var3 = new Array(2);
                            var3[0] = var4;
                            var4 = {};
                            var5 = '0deg';
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.rotateY = var5;
                            var3[1] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.initialValues = var8;
                        var2.delayFunction = var7;
                        var2.delay = var6;
                        var2.animation = var5;
                        var2.config = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 4577193778414.0;
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
    var8 = var3.bind(var0)(var4);
    var3 = 'FlipInEasyY';
    var8.presetName = var3;
    var3 = {};
    var4 = "function pnpm_FlipTs7(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))},{translateY:delayFunction(delay,animation(-targetValues.currentHeight,config))}]},callback:callback};}";
    var3.code = var4;
    var _closure1_slot12 = var3;
    var3 = var16[var14];
    var3 = var15.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34244: for (var _fun34244_ip = 0;;) switch (_fun34244_ip) {
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
                        _fun34244_ip = 87;
                        continue _fun34244
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34244_ip = 72;
                        continue _fun34244
                    }
                case 87:
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var7 = var1.bind(var3)();
                        var _closure4_slot0 = var7;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var5 = var4[var3];
                        var _closure4_slot1 = var5;
                        var3 = 1;
                        var4 = var4[var3];
                        var _closure4_slot2 = var4;
                        var6 = _closure3_slot0;
                        var3 = var6.getDelay;
                        var6 = var3.bind(var6)();
                        var _closure4_slot3 = var6;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var8 = var2.initialValues;
                        var _closure4_slot5 = var8;
                        var0 = function arg0() {
                            var0 = {};
                            var1 = global;
                            var6 = var1.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var2 = {};
                            var3 = 500;
                            var2.perspective = var3;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var2 = {};
                            var7 = '0deg';
                            var2.rotateX = var7;
                            var1[1] = var2;
                            var2 = {};
                            var7 = 0;
                            var2.translateY = var7;
                            var1[2] = var2;
                            var4.transform = var1;
                            var2 = _closure4_slot5;
                            var2 = var5.bind(var6)(var4, var2);
                            var0.initialValues = var2;
                            var2 = {};
                            var4 = {};
                            var8 = _closure4_slot0;
                            var7 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var9 = _closure4_slot2;
                            var6 = undefined;
                            var3 = var10.bind(var6)(var3, var9);
                            var3 = var8.bind(var6)(var7, var3);
                            var4.perspective = var3;
                            var3 = new Array(3);
                            var3[0] = var4;
                            var4 = {};
                            var5 = '90deg';
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.rotateX = var5;
                            var3[1] = var4;
                            var4 = {};
                            var5 = arg0;
                            var5 = var5.currentHeight;
                            var5 = -var5;
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.translateY = var5;
                            var3[2] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.initialValues = var8;
                        var2.delayFunction = var7;
                        var2.delay = var6;
                        var2.animation = var5;
                        var2.config = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 3506458137332.0;
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
    var7 = var3.bind(var0)(var4);
    var3 = 'FlipOutXUp';
    var7.presetName = var3;
    var3 = {};
    var4 = "function pnpm_FlipTs8(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-targetValues.currentWidth,config))}]},callback:callback};}";
    var3.code = var4;
    var _closure1_slot13 = var3;
    var3 = var16[var14];
    var3 = var15.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34249: for (var _fun34249_ip = 0;;) switch (_fun34249_ip) {
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
                        _fun34249_ip = 87;
                        continue _fun34249
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34249_ip = 72;
                        continue _fun34249
                    }
                case 87:
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var7 = var1.bind(var3)();
                        var _closure4_slot0 = var7;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var5 = var4[var3];
                        var _closure4_slot1 = var5;
                        var3 = 1;
                        var4 = var4[var3];
                        var _closure4_slot2 = var4;
                        var6 = _closure3_slot0;
                        var3 = var6.getDelay;
                        var6 = var3.bind(var6)();
                        var _closure4_slot3 = var6;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var8 = var2.initialValues;
                        var _closure4_slot5 = var8;
                        var0 = function arg0() {
                            var0 = {};
                            var1 = global;
                            var6 = var1.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var2 = {};
                            var3 = 500;
                            var2.perspective = var3;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var2 = {};
                            var7 = '0deg';
                            var2.rotateY = var7;
                            var1[1] = var2;
                            var2 = {};
                            var7 = 0;
                            var2.translateX = var7;
                            var1[2] = var2;
                            var4.transform = var1;
                            var2 = _closure4_slot5;
                            var2 = var5.bind(var6)(var4, var2);
                            var0.initialValues = var2;
                            var2 = {};
                            var4 = {};
                            var8 = _closure4_slot0;
                            var7 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var9 = _closure4_slot2;
                            var6 = undefined;
                            var3 = var10.bind(var6)(var3, var9);
                            var3 = var8.bind(var6)(var7, var3);
                            var4.perspective = var3;
                            var3 = new Array(3);
                            var3[0] = var4;
                            var4 = {};
                            var5 = '-90deg';
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.rotateY = var5;
                            var3[1] = var4;
                            var4 = {};
                            var5 = arg0;
                            var5 = var5.currentWidth;
                            var5 = -var5;
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.translateX = var5;
                            var3[2] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.initialValues = var8;
                        var2.delayFunction = var7;
                        var2.delay = var6;
                        var2.animation = var5;
                        var2.config = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 17419119819311.0;
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
    var6 = var3.bind(var0)(var4);
    var3 = 'FlipOutYLeft';
    var6.presetName = var3;
    var3 = {};
    var4 = "function pnpm_FlipTs9(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('-90deg',config))},{translateY:delayFunction(delay,animation(targetValues.currentHeight,config))}]},callback:callback};}";
    var3.code = var4;
    var _closure1_slot14 = var3;
    var3 = var16[var14];
    var3 = var15.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34254: for (var _fun34254_ip = 0;;) switch (_fun34254_ip) {
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
                        _fun34254_ip = 87;
                        continue _fun34254
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34254_ip = 72;
                        continue _fun34254
                    }
                case 87:
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var7 = var1.bind(var3)();
                        var _closure4_slot0 = var7;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var5 = var4[var3];
                        var _closure4_slot1 = var5;
                        var3 = 1;
                        var4 = var4[var3];
                        var _closure4_slot2 = var4;
                        var6 = _closure3_slot0;
                        var3 = var6.getDelay;
                        var6 = var3.bind(var6)();
                        var _closure4_slot3 = var6;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var8 = var2.initialValues;
                        var _closure4_slot5 = var8;
                        var0 = function arg0() {
                            var0 = {};
                            var1 = global;
                            var6 = var1.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var2 = {};
                            var3 = 500;
                            var2.perspective = var3;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var2 = {};
                            var7 = '0deg';
                            var2.rotateX = var7;
                            var1[1] = var2;
                            var2 = {};
                            var7 = 0;
                            var2.translateY = var7;
                            var1[2] = var2;
                            var4.transform = var1;
                            var2 = _closure4_slot5;
                            var2 = var5.bind(var6)(var4, var2);
                            var0.initialValues = var2;
                            var2 = {};
                            var4 = {};
                            var8 = _closure4_slot0;
                            var7 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var9 = _closure4_slot2;
                            var6 = undefined;
                            var3 = var10.bind(var6)(var3, var9);
                            var3 = var8.bind(var6)(var7, var3);
                            var4.perspective = var3;
                            var3 = new Array(3);
                            var3[0] = var4;
                            var4 = {};
                            var5 = '-90deg';
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.rotateX = var5;
                            var3[1] = var4;
                            var4 = {};
                            var5 = arg0;
                            var5 = var5.currentHeight;
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.translateY = var5;
                            var3[2] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.initialValues = var8;
                        var2.delayFunction = var7;
                        var2.delay = var6;
                        var2.animation = var5;
                        var2.config = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 9961334044730.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot14;
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
    var3 = 'FlipOutXDown';
    var5.presetName = var3;
    var3 = {};
    var4 = "function pnpm_FlipTs10(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(targetValues.currentWidth,config))}]},callback:callback};}";
    var3.code = var4;
    var _closure1_slot15 = var3;
    var3 = var16[var14];
    var3 = var15.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34259: for (var _fun34259_ip = 0;;) switch (_fun34259_ip) {
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
                        _fun34259_ip = 87;
                        continue _fun34259
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34259_ip = 72;
                        continue _fun34259
                    }
                case 87:
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var7 = var1.bind(var3)();
                        var _closure4_slot0 = var7;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var5 = var4[var3];
                        var _closure4_slot1 = var5;
                        var3 = 1;
                        var4 = var4[var3];
                        var _closure4_slot2 = var4;
                        var6 = _closure3_slot0;
                        var3 = var6.getDelay;
                        var6 = var3.bind(var6)();
                        var _closure4_slot3 = var6;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var8 = var2.initialValues;
                        var _closure4_slot5 = var8;
                        var0 = function arg0() {
                            var0 = {};
                            var1 = global;
                            var6 = var1.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var2 = {};
                            var3 = 500;
                            var2.perspective = var3;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var2 = {};
                            var7 = '0deg';
                            var2.rotateY = var7;
                            var1[1] = var2;
                            var2 = {};
                            var7 = 0;
                            var2.translateX = var7;
                            var1[2] = var2;
                            var4.transform = var1;
                            var2 = _closure4_slot5;
                            var2 = var5.bind(var6)(var4, var2);
                            var0.initialValues = var2;
                            var2 = {};
                            var4 = {};
                            var8 = _closure4_slot0;
                            var7 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var9 = _closure4_slot2;
                            var6 = undefined;
                            var3 = var10.bind(var6)(var3, var9);
                            var3 = var8.bind(var6)(var7, var3);
                            var4.perspective = var3;
                            var3 = new Array(3);
                            var3[0] = var4;
                            var4 = {};
                            var5 = '90deg';
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.rotateY = var5;
                            var3[1] = var4;
                            var4 = {};
                            var5 = arg0;
                            var5 = var5.currentWidth;
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.translateX = var5;
                            var3[2] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.initialValues = var8;
                        var2.delayFunction = var7;
                        var2.delay = var6;
                        var2.animation = var5;
                        var2.config = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 12107293900726.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot15;
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
    var3 = 'FlipOutYRight';
    var4.presetName = var3;
    var3 = {};
    var17 = "function pnpm_FlipTs11(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))}]},callback:callback};}";
    var3.code = var17;
    var _closure1_slot16 = var3;
    var3 = var16[var14];
    var3 = var15.bind(var0)(var3);
    var17 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34264: for (var _fun34264_ip = 0;;) switch (_fun34264_ip) {
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
                        _fun34264_ip = 87;
                        continue _fun34264
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34264_ip = 72;
                        continue _fun34264
                    }
                case 87:
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var7 = var1.bind(var3)();
                        var _closure4_slot0 = var7;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var5 = var4[var3];
                        var _closure4_slot1 = var5;
                        var3 = 1;
                        var4 = var4[var3];
                        var _closure4_slot2 = var4;
                        var6 = _closure3_slot0;
                        var3 = var6.getDelay;
                        var6 = var3.bind(var6)();
                        var _closure4_slot3 = var6;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var8 = var2.initialValues;
                        var _closure4_slot5 = var8;
                        var0 = function() {
                            var0 = {};
                            var1 = global;
                            var6 = var1.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var2 = {};
                            var3 = 500;
                            var2.perspective = var3;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var7 = '0deg';
                            var2.rotateX = var7;
                            var1[1] = var2;
                            var4.transform = var1;
                            var2 = _closure4_slot5;
                            var2 = var5.bind(var6)(var4, var2);
                            var0.initialValues = var2;
                            var2 = {};
                            var4 = {};
                            var8 = _closure4_slot0;
                            var7 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var9 = _closure4_slot2;
                            var6 = undefined;
                            var3 = var10.bind(var6)(var3, var9);
                            var3 = var8.bind(var6)(var7, var3);
                            var4.perspective = var3;
                            var3 = new Array(2);
                            var3[0] = var4;
                            var4 = {};
                            var5 = '90deg';
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.rotateX = var5;
                            var3[1] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.initialValues = var8;
                        var2.delayFunction = var7;
                        var2.delay = var6;
                        var2.animation = var5;
                        var2.config = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 9417124215224.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot16;
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
    var3 = var3.bind(var0)(var17);
    var17 = 'FlipOutEasyX';
    var3.presetName = var17;
    var17 = {};
    var18 = "function pnpm_FlipTs12(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))}]},callback:callback};}";
    var17.code = var18;
    var _closure1_slot17 = var17;
    var14 = var16[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.ComplexAnimationBuilder;
    var1 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34269: for (var _fun34269_ip = 0;;) switch (_fun34269_ip) {
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
                        _fun34269_ip = 87;
                        continue _fun34269
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34269_ip = 72;
                        continue _fun34269
                    }
                case 87:
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var7 = var1.bind(var3)();
                        var _closure4_slot0 = var7;
                        var3 = _closure3_slot0;
                        var1 = var3.getAnimationAndConfig;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = undefined;
                        var3 = 2;
                        var4 = var5.bind(var4)(var6, var3);
                        var3 = 0;
                        var5 = var4[var3];
                        var _closure4_slot1 = var5;
                        var3 = 1;
                        var4 = var4[var3];
                        var _closure4_slot2 = var4;
                        var6 = _closure3_slot0;
                        var3 = var6.getDelay;
                        var6 = var3.bind(var6)();
                        var _closure4_slot3 = var6;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot4 = var3;
                        var2 = _closure3_slot0;
                        var8 = var2.initialValues;
                        var _closure4_slot5 = var8;
                        var0 = function() {
                            var0 = {};
                            var1 = global;
                            var6 = var1.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var2 = {};
                            var3 = 500;
                            var2.perspective = var3;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var7 = '0deg';
                            var2.rotateY = var7;
                            var1[1] = var2;
                            var4.transform = var1;
                            var2 = _closure4_slot5;
                            var2 = var5.bind(var6)(var4, var2);
                            var0.initialValues = var2;
                            var2 = {};
                            var4 = {};
                            var8 = _closure4_slot0;
                            var7 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var9 = _closure4_slot2;
                            var6 = undefined;
                            var3 = var10.bind(var6)(var3, var9);
                            var3 = var8.bind(var6)(var7, var3);
                            var4.perspective = var3;
                            var3 = new Array(2);
                            var3[0] = var4;
                            var4 = {};
                            var5 = '90deg';
                            var5 = var10.bind(var6)(var5, var9);
                            var5 = var8.bind(var6)(var7, var5);
                            var4.rotateY = var5;
                            var3[1] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var1 = _closure4_slot4;
                            var0.callback = var1;
                            return var0;
                        };
                        var2 = {};
                        var2.initialValues = var8;
                        var2.delayFunction = var7;
                        var2.delay = var6;
                        var2.animation = var5;
                        var2.config = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 4473299233947.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot17;
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
    var1 = var1.bind(var0)(var14);
    var14 = 'FlipOutEasyY';
    var1.presetName = var14;
    var2.FlipInXUp = var13;
    var2.FlipInYLeft = var12;
    var2.FlipInXDown = var11;
    var2.FlipInYRight = var10;
    var2.FlipInEasyX = var9;
    var2.FlipInEasyY = var8;
    var2.FlipOutXUp = var7;
    var2.FlipOutYLeft = var6;
    var2.FlipOutXDown = var5;
    var2.FlipOutYRight = var4;
    var2.FlipOutEasyX = var3;
    var2.FlipOutEasyY = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 3750]);