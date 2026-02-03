// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var19 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var20 = dependencyMap;
    var0 = function arg0, arg1, arg2() {
        _fun34635: for (var _fun34635_ip = 0;;) switch (_fun34635_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot4;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = _closure1_slot23;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun34635_ip = 51;
                    continue _fun34635
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun34635_ip = 92;
                continue _fun34635;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun34635_ip = 71;
                    continue _fun34635
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
    var _closure1_slot22 = var0;
    var0 = function() {
        _fun34636: for (var _fun34636_ip = 0;;) switch (_fun34636_ip) {
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
                _fun34636_ip = 74;
                continue _fun34636;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot23 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var20[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var20[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var20[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var20[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var20[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var20[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 'function pnpm_ZoomTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scale:0}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot6 = var3;
    var18 = 6;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34640: for (var _fun34640_ip = 0;;) switch (_fun34640_ip) {
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
                        _fun34640_ip = 87;
                        continue _fun34640
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34640_ip = 72;
                        continue _fun34640
                    }
                case 87:
                    var3 = _closure1_slot22;
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
                        var0 = function() {
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var7 = _closure4_slot0;
                            var6 = _closure4_slot3;
                            var9 = _closure4_slot1;
                            var8 = _closure4_slot2;
                            var5 = undefined;
                            var3 = 1;
                            var3 = var9.bind(var5)(var3, var8);
                            var3 = var7.bind(var5)(var6, var3);
                            var4.scale = var3;
                            var3 = new Array(1);
                            var3[0] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var2 = global;
                            var5 = var2.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var6 = {};
                            var2 = 0;
                            var6.scale = var2;
                            var2 = new Array(1);
                            var2[0] = var6;
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
                        var2 = 1262081960523.0;
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
    var17 = var3.bind(var0)(var4);
    var3 = 'ZoomIn';
    var17.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_ZoomTs2(){const{delayFunction,delay,animation,config,rotate,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(1,config))},{rotate:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scale:0},{rotate:rotate+"rad"}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot7 = var3;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34645: for (var _fun34645_ip = 0;;) switch (_fun34645_ip) {
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
                        _fun34645_ip = 87;
                        continue _fun34645
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34645_ip = 72;
                        continue _fun34645
                    }
                case 87:
                    var3 = _closure1_slot22;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        _fun34646: for (var _fun34646_ip = 0;;) switch (_fun34646_ip) {
                            case 0:
                                var3 = _closure3_slot0;
                                var1 = var3.getDelayFunction;
                                var9 = var1.bind(var3)();
                                var _closure4_slot0 = var9;
                                var3 = _closure3_slot0;
                                var1 = var3.getAnimationAndConfig;
                                var6 = var1.bind(var3)();
                                var5 = _closure1_slot0;
                                var4 = undefined;
                                var3 = 2;
                                var4 = var5.bind(var4)(var6, var3);
                                var3 = 0;
                                var7 = var4[var3];
                                var _closure4_slot1 = var7;
                                var3 = 1;
                                var6 = var4[var3];
                                var _closure4_slot2 = var6;
                                var4 = _closure3_slot0;
                                var3 = var4.getDelay;
                                var8 = var3.bind(var4)();
                                var _closure4_slot3 = var8;
                                var3 = _closure3_slot0;
                                var3 = var3.rotateV;
                                var5 = '0.3';
                                if (!var3) {
                                    _fun34646_ip = 123;
                                    continue _fun34646
                                }
                            case 113:
                                var3 = _closure3_slot0;
                                var5 = var3.rotateV;
                            case 123:
                                var _closure4_slot4 = var5;
                                var3 = _closure3_slot0;
                                var3 = var3.callbackV;
                                var _closure4_slot5 = var3;
                                var2 = _closure3_slot0;
                                var4 = var2.initialValues;
                                var _closure4_slot6 = var4;
                                var0 = function() {
                                    var0 = {};
                                    var3 = {};
                                    var2 = {};
                                    var9 = _closure4_slot0;
                                    var8 = _closure4_slot3;
                                    var10 = _closure4_slot1;
                                    var6 = _closure4_slot2;
                                    var7 = undefined;
                                    var4 = 1;
                                    var4 = var10.bind(var7)(var4, var6);
                                    var4 = var9.bind(var7)(var8, var4);
                                    var2.scale = var4;
                                    var4 = new Array(2);
                                    var4[0] = var2;
                                    var5 = {};
                                    var2 = 0;
                                    var6 = var10.bind(var7)(var2, var6);
                                    var6 = var9.bind(var7)(var8, var6);
                                    var5.rotate = var6;
                                    var4[1] = var5;
                                    var3.transform = var4;
                                    var0.animations = var3;
                                    var7 = global;
                                    var5 = var7.Object;
                                    var4 = var5.assign;
                                    var3 = {};
                                    var6 = {};
                                    var6.scale = var2;
                                    var2 = new Array(2);
                                    var2[0] = var6;
                                    var6 = {};
                                    var10 = _closure4_slot4;
                                    var7 = var7.HermesInternal;
                                    var9 = var7.concat;
                                    var8 = '';
                                    var7 = 'rad';
                                    var7 = var9.bind(var8)(var10, var7);
                                    var6.rotate = var7;
                                    var2[1] = var6;
                                    var3.transform = var2;
                                    var2 = _closure4_slot6;
                                    var2 = var4.bind(var5)(var3, var2);
                                    var0.initialValues = var2;
                                    var1 = _closure4_slot5;
                                    var0.callback = var1;
                                    return var0;
                                };
                                var2 = {};
                                var2.delayFunction = var9;
                                var2.delay = var8;
                                var2.animation = var7;
                                var2.config = var6;
                                var2.rotate = var5;
                                var2.initialValues = var4;
                                var2.callback = var3;
                                var0.__closure = var2;
                                var2 = 15519876599894.0;
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
    var16 = var3.bind(var0)(var4);
    var3 = 'ZoomInRotate';
    var16.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_ZoomTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateX:-values.windowWidth},{scale:0}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot8 = var3;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34650: for (var _fun34650_ip = 0;;) switch (_fun34650_ip) {
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
                        _fun34650_ip = 87;
                        continue _fun34650
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34650_ip = 72;
                        continue _fun34650
                    }
                case 87:
                    var3 = _closure1_slot22;
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
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var11 = _closure4_slot1;
                            var10 = _closure4_slot2;
                            var6 = undefined;
                            var7 = 0;
                            var3 = var11.bind(var6)(var7, var10);
                            var3 = var9.bind(var6)(var8, var3);
                            var4.translateX = var3;
                            var3 = new Array(2);
                            var3[0] = var4;
                            var4 = {};
                            var5 = 1;
                            var5 = var11.bind(var6)(var5, var10);
                            var5 = var9.bind(var6)(var8, var5);
                            var4.scale = var5;
                            var3[1] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var2 = global;
                            var5 = var2.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var6 = {};
                            var2 = arg0;
                            var2 = var2.windowWidth;
                            var2 = -var2;
                            var6.translateX = var2;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var6 = {};
                            var6.scale = var7;
                            var2[1] = var6;
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
                        var2 = 9623778840206.0;
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
    var15 = var3.bind(var0)(var4);
    var3 = 'ZoomInLeft';
    var15.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_ZoomTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateX:values.windowWidth},{scale:0}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot9 = var3;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34655: for (var _fun34655_ip = 0;;) switch (_fun34655_ip) {
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
                        _fun34655_ip = 87;
                        continue _fun34655
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34655_ip = 72;
                        continue _fun34655
                    }
                case 87:
                    var3 = _closure1_slot22;
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
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var11 = _closure4_slot1;
                            var10 = _closure4_slot2;
                            var6 = undefined;
                            var7 = 0;
                            var3 = var11.bind(var6)(var7, var10);
                            var3 = var9.bind(var6)(var8, var3);
                            var4.translateX = var3;
                            var3 = new Array(2);
                            var3[0] = var4;
                            var4 = {};
                            var5 = 1;
                            var5 = var11.bind(var6)(var5, var10);
                            var5 = var9.bind(var6)(var8, var5);
                            var4.scale = var5;
                            var3[1] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var2 = global;
                            var5 = var2.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var6 = {};
                            var2 = arg0;
                            var2 = var2.windowWidth;
                            var6.translateX = var2;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var6 = {};
                            var6.scale = var7;
                            var2[1] = var6;
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
                        var2 = 3951441470564.0;
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
    var14 = var3.bind(var0)(var4);
    var3 = 'ZoomInRight';
    var14.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_ZoomTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:-values.windowHeight},{scale:0}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot10 = var3;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34660: for (var _fun34660_ip = 0;;) switch (_fun34660_ip) {
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
                        _fun34660_ip = 87;
                        continue _fun34660
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34660_ip = 72;
                        continue _fun34660
                    }
                case 87:
                    var3 = _closure1_slot22;
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
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var11 = _closure4_slot1;
                            var10 = _closure4_slot2;
                            var6 = undefined;
                            var7 = 0;
                            var3 = var11.bind(var6)(var7, var10);
                            var3 = var9.bind(var6)(var8, var3);
                            var4.translateY = var3;
                            var3 = new Array(2);
                            var3[0] = var4;
                            var4 = {};
                            var5 = 1;
                            var5 = var11.bind(var6)(var5, var10);
                            var5 = var9.bind(var6)(var8, var5);
                            var4.scale = var5;
                            var3[1] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var2 = global;
                            var5 = var2.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var6 = {};
                            var2 = arg0;
                            var2 = var2.windowHeight;
                            var2 = -var2;
                            var6.translateY = var2;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var6 = {};
                            var6.scale = var7;
                            var2[1] = var6;
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
                        var2 = 11673124834481.0;
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
    var13 = var3.bind(var0)(var4);
    var3 = 'ZoomInUp';
    var13.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_ZoomTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:values.windowHeight},{scale:0}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot11 = var3;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34665: for (var _fun34665_ip = 0;;) switch (_fun34665_ip) {
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
                        _fun34665_ip = 87;
                        continue _fun34665
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34665_ip = 72;
                        continue _fun34665
                    }
                case 87:
                    var3 = _closure1_slot22;
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
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var11 = _closure4_slot1;
                            var10 = _closure4_slot2;
                            var6 = undefined;
                            var7 = 0;
                            var3 = var11.bind(var6)(var7, var10);
                            var3 = var9.bind(var6)(var8, var3);
                            var4.translateY = var3;
                            var3 = new Array(2);
                            var3[0] = var4;
                            var4 = {};
                            var5 = 1;
                            var5 = var11.bind(var6)(var5, var10);
                            var5 = var9.bind(var6)(var8, var5);
                            var4.scale = var5;
                            var3[1] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var2 = global;
                            var5 = var2.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var6 = {};
                            var2 = arg0;
                            var2 = var2.windowHeight;
                            var6.translateY = var2;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var6 = {};
                            var6.scale = var7;
                            var2[1] = var6;
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
                        var2 = 16474472853503.0;
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
    var12 = var3.bind(var0)(var4);
    var3 = 'ZoomInDown';
    var12.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_ZoomTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:-values.targetHeight},{scale:0}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot12 = var3;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34670: for (var _fun34670_ip = 0;;) switch (_fun34670_ip) {
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
                        _fun34670_ip = 87;
                        continue _fun34670
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34670_ip = 72;
                        continue _fun34670
                    }
                case 87:
                    var3 = _closure1_slot22;
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
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var11 = _closure4_slot1;
                            var10 = _closure4_slot2;
                            var6 = undefined;
                            var7 = 0;
                            var3 = var11.bind(var6)(var7, var10);
                            var3 = var9.bind(var6)(var8, var3);
                            var4.translateY = var3;
                            var3 = new Array(2);
                            var3[0] = var4;
                            var4 = {};
                            var5 = 1;
                            var5 = var11.bind(var6)(var5, var10);
                            var5 = var9.bind(var6)(var8, var5);
                            var4.scale = var5;
                            var3[1] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var2 = global;
                            var5 = var2.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var6 = {};
                            var2 = arg0;
                            var2 = var2.targetHeight;
                            var2 = -var2;
                            var6.translateY = var2;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var6 = {};
                            var6.scale = var7;
                            var2[1] = var6;
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
                        var2 = 9580191401742.0;
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
    var11 = var3.bind(var0)(var4);
    var3 = 'ZoomInEasyUp';
    var11.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_ZoomTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:values.targetHeight},{scale:0}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot13 = var3;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34675: for (var _fun34675_ip = 0;;) switch (_fun34675_ip) {
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
                        _fun34675_ip = 87;
                        continue _fun34675
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34675_ip = 72;
                        continue _fun34675
                    }
                case 87:
                    var3 = _closure1_slot22;
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
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var11 = _closure4_slot1;
                            var10 = _closure4_slot2;
                            var6 = undefined;
                            var7 = 0;
                            var3 = var11.bind(var6)(var7, var10);
                            var3 = var9.bind(var6)(var8, var3);
                            var4.translateY = var3;
                            var3 = new Array(2);
                            var3[0] = var4;
                            var4 = {};
                            var5 = 1;
                            var5 = var11.bind(var6)(var5, var10);
                            var5 = var9.bind(var6)(var8, var5);
                            var4.scale = var5;
                            var3[1] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var2 = global;
                            var5 = var2.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var6 = {};
                            var2 = arg0;
                            var2 = var2.targetHeight;
                            var6.translateY = var2;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var6 = {};
                            var6.scale = var7;
                            var2[1] = var6;
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
                        var2 = 8663849822572.0;
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
    var10 = var3.bind(var0)(var4);
    var3 = 'ZoomInEasyDown';
    var10.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_ZoomTs9(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scale:1}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot14 = var3;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34680: for (var _fun34680_ip = 0;;) switch (_fun34680_ip) {
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
                        _fun34680_ip = 87;
                        continue _fun34680
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34680_ip = 72;
                        continue _fun34680
                    }
                case 87:
                    var3 = _closure1_slot22;
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
                        var0 = function() {
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var7 = _closure4_slot0;
                            var6 = _closure4_slot3;
                            var9 = _closure4_slot1;
                            var8 = _closure4_slot2;
                            var5 = undefined;
                            var3 = 0;
                            var3 = var9.bind(var5)(var3, var8);
                            var3 = var7.bind(var5)(var6, var3);
                            var4.scale = var3;
                            var3 = new Array(1);
                            var3[0] = var4;
                            var2.transform = var3;
                            var0.animations = var2;
                            var2 = global;
                            var5 = var2.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var6 = {};
                            var2 = 1;
                            var6.scale = var2;
                            var2 = new Array(1);
                            var2[0] = var6;
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
                        var2 = 11880899972707.0;
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
    var9 = var3.bind(var0)(var4);
    var3 = 'ZoomOut';
    var9.presetName = var3;
    var3 = {};
    var4 = "function pnpm_ZoomTs10(){const{delayFunction,delay,animation,config,rotate,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation(rotate,config))}]},initialValues:{transform:[{scale:1},{rotate:'0rad'}],...initialValues},callback:callback};}";
    var3.code = var4;
    var _closure1_slot15 = var3;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34685: for (var _fun34685_ip = 0;;) switch (_fun34685_ip) {
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
                        _fun34685_ip = 87;
                        continue _fun34685
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34685_ip = 72;
                        continue _fun34685
                    }
                case 87:
                    var3 = _closure1_slot22;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        _fun34686: for (var _fun34686_ip = 0;;) switch (_fun34686_ip) {
                            case 0:
                                var3 = _closure3_slot0;
                                var1 = var3.getDelayFunction;
                                var9 = var1.bind(var3)();
                                var _closure4_slot0 = var9;
                                var3 = _closure3_slot0;
                                var1 = var3.getAnimationAndConfig;
                                var6 = var1.bind(var3)();
                                var5 = _closure1_slot0;
                                var4 = undefined;
                                var3 = 2;
                                var4 = var5.bind(var4)(var6, var3);
                                var3 = 0;
                                var7 = var4[var3];
                                var _closure4_slot1 = var7;
                                var3 = 1;
                                var6 = var4[var3];
                                var _closure4_slot2 = var6;
                                var4 = _closure3_slot0;
                                var3 = var4.getDelay;
                                var8 = var3.bind(var4)();
                                var _closure4_slot3 = var8;
                                var3 = _closure3_slot0;
                                var3 = var3.rotateV;
                                var5 = '0.3';
                                if (!var3) {
                                    _fun34686_ip = 123;
                                    continue _fun34686
                                }
                            case 113:
                                var3 = _closure3_slot0;
                                var5 = var3.rotateV;
                            case 123:
                                var _closure4_slot4 = var5;
                                var3 = _closure3_slot0;
                                var3 = var3.callbackV;
                                var _closure4_slot5 = var3;
                                var2 = _closure3_slot0;
                                var4 = var2.initialValues;
                                var _closure4_slot6 = var4;
                                var0 = function() {
                                    var0 = {};
                                    var2 = {};
                                    var4 = {};
                                    var8 = _closure4_slot0;
                                    var7 = _closure4_slot3;
                                    var10 = _closure4_slot1;
                                    var9 = _closure4_slot2;
                                    var6 = undefined;
                                    var3 = 0;
                                    var3 = var10.bind(var6)(var3, var9);
                                    var3 = var8.bind(var6)(var7, var3);
                                    var4.scale = var3;
                                    var3 = new Array(2);
                                    var3[0] = var4;
                                    var4 = {};
                                    var5 = _closure4_slot4;
                                    var5 = var10.bind(var6)(var5, var9);
                                    var5 = var8.bind(var6)(var7, var5);
                                    var4.rotate = var5;
                                    var3[1] = var4;
                                    var2.transform = var3;
                                    var0.animations = var2;
                                    var2 = global;
                                    var5 = var2.Object;
                                    var4 = var5.assign;
                                    var3 = {};
                                    var6 = {};
                                    var2 = 1;
                                    var6.scale = var2;
                                    var2 = new Array(2);
                                    var2[0] = var6;
                                    var6 = {};
                                    var7 = '0rad';
                                    var6.rotate = var7;
                                    var2[1] = var6;
                                    var3.transform = var2;
                                    var2 = _closure4_slot6;
                                    var2 = var4.bind(var5)(var3, var2);
                                    var0.initialValues = var2;
                                    var1 = _closure4_slot5;
                                    var0.callback = var1;
                                    return var0;
                                };
                                var2 = {};
                                var2.delayFunction = var9;
                                var2.delay = var8;
                                var2.animation = var7;
                                var2.config = var6;
                                var2.rotate = var5;
                                var2.initialValues = var4;
                                var2.callback = var3;
                                var0.__closure = var2;
                                var2 = 14218456220590.0;
                                var0.__workletHash = var2;
                                var1 = _closure1_slot15;
                                var0.__initData = var1;
                                return var0;
                        }
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
    var3 = 'ZoomOutRotate';
    var8.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_ZoomTs11(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateX:0},{scale:1}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot16 = var3;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34690: for (var _fun34690_ip = 0;;) switch (_fun34690_ip) {
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
                        _fun34690_ip = 87;
                        continue _fun34690
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34690_ip = 72;
                        continue _fun34690
                    }
                case 87:
                    var3 = _closure1_slot22;
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
                            var0 = {};
                            var3 = {};
                            var2 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var4 = arg0;
                            var4 = var4.windowWidth;
                            var4 = -var4;
                            var6 = _closure4_slot2;
                            var7 = undefined;
                            var4 = var10.bind(var7)(var4, var6);
                            var4 = var9.bind(var7)(var8, var4);
                            var2.translateX = var4;
                            var4 = new Array(2);
                            var4[0] = var2;
                            var5 = {};
                            var2 = 0;
                            var6 = var10.bind(var7)(var2, var6);
                            var6 = var9.bind(var7)(var8, var6);
                            var5.scale = var6;
                            var4[1] = var5;
                            var3.transform = var4;
                            var0.animations = var3;
                            var3 = global;
                            var5 = var3.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var6 = {};
                            var6.translateX = var2;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var6 = {};
                            var7 = 1;
                            var6.scale = var7;
                            var2[1] = var6;
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
                        var2 = 4016039076957.0;
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
    var7 = var3.bind(var0)(var4);
    var3 = 'ZoomOutLeft';
    var7.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_ZoomTs12(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateX:0},{scale:1}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot17 = var3;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34695: for (var _fun34695_ip = 0;;) switch (_fun34695_ip) {
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
                        _fun34695_ip = 87;
                        continue _fun34695
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34695_ip = 72;
                        continue _fun34695
                    }
                case 87:
                    var3 = _closure1_slot22;
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
                            var0 = {};
                            var3 = {};
                            var2 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var4 = arg0;
                            var4 = var4.windowWidth;
                            var6 = _closure4_slot2;
                            var7 = undefined;
                            var4 = var10.bind(var7)(var4, var6);
                            var4 = var9.bind(var7)(var8, var4);
                            var2.translateX = var4;
                            var4 = new Array(2);
                            var4[0] = var2;
                            var5 = {};
                            var2 = 0;
                            var6 = var10.bind(var7)(var2, var6);
                            var6 = var9.bind(var7)(var8, var6);
                            var5.scale = var6;
                            var4[1] = var5;
                            var3.transform = var4;
                            var0.animations = var3;
                            var3 = global;
                            var5 = var3.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var6 = {};
                            var6.translateX = var2;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var6 = {};
                            var7 = 1;
                            var6.scale = var7;
                            var2[1] = var6;
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
                        var2 = 13414598349747.0;
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
    var6 = var3.bind(var0)(var4);
    var3 = 'ZoomOutRight';
    var6.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_ZoomTs13(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(-values.windowHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot18 = var3;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34700: for (var _fun34700_ip = 0;;) switch (_fun34700_ip) {
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
                        _fun34700_ip = 87;
                        continue _fun34700
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34700_ip = 72;
                        continue _fun34700
                    }
                case 87:
                    var3 = _closure1_slot22;
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
                            var0 = {};
                            var3 = {};
                            var2 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var4 = arg0;
                            var4 = var4.windowHeight;
                            var4 = -var4;
                            var6 = _closure4_slot2;
                            var7 = undefined;
                            var4 = var10.bind(var7)(var4, var6);
                            var4 = var9.bind(var7)(var8, var4);
                            var2.translateY = var4;
                            var4 = new Array(2);
                            var4[0] = var2;
                            var5 = {};
                            var2 = 0;
                            var6 = var10.bind(var7)(var2, var6);
                            var6 = var9.bind(var7)(var8, var6);
                            var5.scale = var6;
                            var4[1] = var5;
                            var3.transform = var4;
                            var0.animations = var3;
                            var3 = global;
                            var5 = var3.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var6 = {};
                            var6.translateY = var2;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var6 = {};
                            var7 = 1;
                            var6.scale = var7;
                            var2[1] = var6;
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
                        var2 = 570907039910.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot18;
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
    var3 = 'ZoomOutUp';
    var5.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_ZoomTs14(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(values.windowHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot19 = var3;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34705: for (var _fun34705_ip = 0;;) switch (_fun34705_ip) {
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
                        _fun34705_ip = 87;
                        continue _fun34705
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34705_ip = 72;
                        continue _fun34705
                    }
                case 87:
                    var3 = _closure1_slot22;
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
                            var0 = {};
                            var3 = {};
                            var2 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var4 = arg0;
                            var4 = var4.windowHeight;
                            var6 = _closure4_slot2;
                            var7 = undefined;
                            var4 = var10.bind(var7)(var4, var6);
                            var4 = var9.bind(var7)(var8, var4);
                            var2.translateY = var4;
                            var4 = new Array(2);
                            var4[0] = var2;
                            var5 = {};
                            var2 = 0;
                            var6 = var10.bind(var7)(var2, var6);
                            var6 = var9.bind(var7)(var8, var6);
                            var5.scale = var6;
                            var4[1] = var5;
                            var3.transform = var4;
                            var0.animations = var3;
                            var3 = global;
                            var5 = var3.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var6 = {};
                            var6.translateY = var2;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var6 = {};
                            var7 = 1;
                            var6.scale = var7;
                            var2[1] = var6;
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
                        var2 = 4332816695692.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot19;
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
    var3 = 'ZoomOutDown';
    var4.presetName = var3;
    var3 = {};
    var21 = 'function pnpm_ZoomTs15(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(-values.currentHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}';
    var3.code = var21;
    var _closure1_slot20 = var3;
    var3 = var20[var18];
    var3 = var19.bind(var0)(var3);
    var21 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34710: for (var _fun34710_ip = 0;;) switch (_fun34710_ip) {
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
                        _fun34710_ip = 87;
                        continue _fun34710
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34710_ip = 72;
                        continue _fun34710
                    }
                case 87:
                    var3 = _closure1_slot22;
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
                            var0 = {};
                            var3 = {};
                            var2 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var4 = arg0;
                            var4 = var4.currentHeight;
                            var4 = -var4;
                            var6 = _closure4_slot2;
                            var7 = undefined;
                            var4 = var10.bind(var7)(var4, var6);
                            var4 = var9.bind(var7)(var8, var4);
                            var2.translateY = var4;
                            var4 = new Array(2);
                            var4[0] = var2;
                            var5 = {};
                            var2 = 0;
                            var6 = var10.bind(var7)(var2, var6);
                            var6 = var9.bind(var7)(var8, var6);
                            var5.scale = var6;
                            var4[1] = var5;
                            var3.transform = var4;
                            var0.animations = var3;
                            var3 = global;
                            var5 = var3.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var6 = {};
                            var6.translateY = var2;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var6 = {};
                            var7 = 1;
                            var6.scale = var7;
                            var2[1] = var6;
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
                        var2 = 1576389803461.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot20;
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
    var3 = var3.bind(var0)(var21);
    var21 = 'ZoomOutEasyUp';
    var3.presetName = var21;
    var21 = {};
    var22 = 'function pnpm_ZoomTs16(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(values.currentHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}';
    var21.code = var22;
    var _closure1_slot21 = var21;
    var18 = var20[var18];
    var18 = var19.bind(var0)(var18);
    var18 = var18.ComplexAnimationBuilder;
    var1 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun34715: for (var _fun34715_ip = 0;;) switch (_fun34715_ip) {
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
                        _fun34715_ip = 87;
                        continue _fun34715
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34715_ip = 72;
                        continue _fun34715
                    }
                case 87:
                    var3 = _closure1_slot22;
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
                            var0 = {};
                            var3 = {};
                            var2 = {};
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot3;
                            var10 = _closure4_slot1;
                            var4 = arg0;
                            var4 = var4.currentHeight;
                            var6 = _closure4_slot2;
                            var7 = undefined;
                            var4 = var10.bind(var7)(var4, var6);
                            var4 = var9.bind(var7)(var8, var4);
                            var2.translateY = var4;
                            var4 = new Array(2);
                            var4[0] = var2;
                            var5 = {};
                            var2 = 0;
                            var6 = var10.bind(var7)(var2, var6);
                            var6 = var9.bind(var7)(var8, var6);
                            var5.scale = var6;
                            var4[1] = var5;
                            var3.transform = var4;
                            var0.animations = var3;
                            var3 = global;
                            var5 = var3.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var6 = {};
                            var6.translateY = var2;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var6 = {};
                            var7 = 1;
                            var6.scale = var7;
                            var2[1] = var6;
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
                        var2 = 14278999536075.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot21;
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
    var1 = var1.bind(var0)(var18);
    var18 = 'ZoomOutEasyDown';
    var1.presetName = var18;
    var2.ZoomIn = var17;
    var2.ZoomInRotate = var16;
    var2.ZoomInLeft = var15;
    var2.ZoomInRight = var14;
    var2.ZoomInUp = var13;
    var2.ZoomInDown = var12;
    var2.ZoomInEasyUp = var11;
    var2.ZoomInEasyDown = var10;
    var2.ZoomOut = var9;
    var2.ZoomOutRotate = var8;
    var2.ZoomOutLeft = var7;
    var2.ZoomOutRight = var6;
    var2.ZoomOutUp = var5;
    var2.ZoomOutDown = var4;
    var2.ZoomOutEasyUp = var3;
    var2.ZoomOutEasyDown = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 3791]);