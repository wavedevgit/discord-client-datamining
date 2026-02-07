// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
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
                var0 = _closure1_slot11;
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
    var _closure1_slot10 = var0;
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
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 'function pnpm_StretchTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleX:0}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot6 = var3;
    var6 = 6;
    var3 = var8[var6];
    var3 = var7.bind(var0)(var3);
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
                    var3 = _closure1_slot10;
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
                            var4.scaleX = var3;
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
                            var6.scaleX = var2;
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
                        var2 = 8236429657427.0;
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
    var5 = var3.bind(var0)(var4);
    var3 = 'StretchInX';
    var5.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_StretchTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleY:0}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot7 = var3;
    var3 = var8[var6];
    var3 = var7.bind(var0)(var3);
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
                    var3 = _closure1_slot10;
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
                            var4.scaleY = var3;
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
                            var6.scaleY = var2;
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
                        var2 = 15758510181808.0;
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
    var4 = var3.bind(var0)(var4);
    var3 = 'StretchInY';
    var4.presetName = var3;
    var3 = {};
    var9 = 'function pnpm_StretchTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleX:1}],...initialValues},callback:callback};}';
    var3.code = var9;
    var _closure1_slot8 = var3;
    var3 = var8[var6];
    var3 = var7.bind(var0)(var3);
    var9 = var3.ComplexAnimationBuilder;
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
                    var3 = _closure1_slot10;
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
                            var4.scaleX = var3;
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
                            var6.scaleX = var2;
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
                        var2 = 2374207350737.0;
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
    var3 = var3.bind(var0)(var9);
    var9 = 'StretchOutX';
    var3.presetName = var9;
    var9 = {};
    var10 = 'function pnpm_StretchTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleY:1}],...initialValues},callback:callback};}';
    var9.code = var10;
    var _closure1_slot9 = var9;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.ComplexAnimationBuilder;
    var1 = function(arg0) { // Environment: var1
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
                    var3 = _closure1_slot10;
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
                            var4.scaleY = var3;
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
                            var6.scaleY = var2;
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
                        var2 = 3228047902646.0;
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
    var1 = var1.bind(var0)(var6);
    var6 = 'StretchOutY';
    var1.presetName = var6;
    var2.StretchInX = var5;
    var2.StretchInY = var4;
    var2.StretchOutX = var3;
    var2.StretchOutY = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 3792]);