// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var13 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var14;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var1
        _fun34012: for (var _fun34012_ip = 0;;) switch (_fun34012_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot5;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = _closure1_slot18;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun34012_ip = 51;
                    continue _fun34012
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun34012_ip = 92;
                continue _fun34012;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun34012_ip = 71;
                    continue _fun34012
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot5;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun34013: for (var _fun34013_ip = 0;;) switch (_fun34013_ip) {
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
                _fun34013_ip = 74;
                continue _fun34013;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var14[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var14[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var14[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var14[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var14[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = {};
    var4 = 'function pnpm_BounceTs1(){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.2,{duration:duration*0.55}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.1,{duration:duration*0.15}),withTiming(1,{duration:duration*0.15})))}]},initialValues:{transform:[{scale:0}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot7 = var3;
    var12 = 6;
    var3 = var14[var12];
    var3 = var13.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: BounceIn, environment: var6
            _fun34017: for (var _fun34017_ip = 0;;) switch (_fun34017_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot2;
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
                        _fun34017_ip = 87;
                        continue _fun34017
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34017_ip = 72;
                        continue _fun34017
                    }
                case 87:
                    var3 = _closure1_slot17;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var6 = var1.bind(var3)();
                        var _closure4_slot0 = var6;
                        var3 = _closure3_slot0;
                        var1 = var3.getDelay;
                        var1 = var1.bind(var3)();
                        var _closure4_slot1 = var1;
                        var4 = _closure3_slot0;
                        var3 = var4.getDuration;
                        var5 = var3.bind(var4)();
                        var _closure4_slot2 = var5;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot3 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot4 = var4;
                        var0 = function() { // Original name: pnpm_BounceTs1, environment: var0
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var7 = _closure4_slot0;
                            var6 = _closure4_slot1;
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot1;
                            var13 = 5;
                            var3 = var15[var13];
                            var5 = undefined;
                            var12 = var14.bind(var5)(var3);
                            var11 = var12.withSequence;
                            var3 = var15[var13];
                            var10 = var14.bind(var5)(var3);
                            var9 = var10.withTiming;
                            var8 = {};
                            var16 = _closure4_slot2;
                            var3 = 0.55;
                            var3 = var3 * var16;
                            var8.duration = var3;
                            var3 = 1.2;
                            var10 = var9.bind(var10)(var3, var8);
                            var3 = var15[var13];
                            var18 = var14.bind(var5)(var3);
                            var17 = var18.withTiming;
                            var9 = {};
                            var3 = 0.15;
                            var8 = var3 * var16;
                            var9.duration = var8;
                            var8 = 0.9;
                            var9 = var17.bind(var18)(var8, var9);
                            var8 = var15[var13];
                            var19 = var14.bind(var5)(var8);
                            var18 = var19.withTiming;
                            var17 = {};
                            var8 = var3 * var16;
                            var17.duration = var8;
                            var8 = 1.1;
                            var21 = var18.bind(var19)(var8, var17);
                            var13 = var15[var13];
                            var15 = var14.bind(var5)(var13);
                            var14 = var15.withTiming;
                            var13 = {};
                            var3 = var3 * var16;
                            var13.duration = var3;
                            var3 = 1;
                            var20 = var14.bind(var15)(var3, var13);
                            var24 = var12;
                            var23 = var10;
                            var22 = var9;
                            var3 = var24[var11](var23, var22, var21, var20, var19);
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
                            var2 = _closure4_slot4;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot3;
                            var0.callback = var1;
                            return var0;
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
                        var2.duration = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 6814288411244.0;
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
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var0 = {};
        var7 = 'getDuration';
        var0.key = var7;
        var1 = function() { // Original name: getDuration, environment: var6
            _fun34020: for (var _fun34020_ip = 0;;) switch (_fun34020_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.durationV;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 600;
                    if (!var2) {
                        _fun34020_ip = 27;
                        continue _fun34020
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
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
        var6 = function() { // Original name: getDuration, environment: var6
            var0 = 600;
            return var0;
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var11 = var3.bind(var0)(var4);
    var3 = 'BounceIn';
    var11.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_BounceTs2(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateY:values.windowHeight}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot8 = var3;
    var3 = var14[var12];
    var3 = var13.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: BounceInDown, environment: var6
            _fun34024: for (var _fun34024_ip = 0;;) switch (_fun34024_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot2;
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
                        _fun34024_ip = 87;
                        continue _fun34024
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34024_ip = 72;
                        continue _fun34024
                    }
                case 87:
                    var3 = _closure1_slot17;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var6 = var1.bind(var3)();
                        var _closure4_slot0 = var6;
                        var3 = _closure3_slot0;
                        var1 = var3.getDelay;
                        var1 = var1.bind(var3)();
                        var _closure4_slot1 = var1;
                        var4 = _closure3_slot0;
                        var3 = var4.getDuration;
                        var5 = var3.bind(var4)();
                        var _closure4_slot2 = var5;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot3 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot4 = var4;
                        var0 = function(arg0) { // Original name: pnpm_BounceTs2, environment: var0
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var7 = _closure4_slot0;
                            var6 = _closure4_slot1;
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot1;
                            var13 = 5;
                            var3 = var15[var13];
                            var5 = undefined;
                            var12 = var14.bind(var5)(var3);
                            var11 = var12.withSequence;
                            var3 = var15[var13];
                            var10 = var14.bind(var5)(var3);
                            var9 = var10.withTiming;
                            var8 = {};
                            var16 = _closure4_slot2;
                            var3 = 0.55;
                            var3 = var3 * var16;
                            var8.duration = var3;
                            var3 = -20;
                            var10 = var9.bind(var10)(var3, var8);
                            var3 = var15[var13];
                            var18 = var14.bind(var5)(var3);
                            var17 = var18.withTiming;
                            var9 = {};
                            var3 = 0.15;
                            var8 = var3 * var16;
                            var9.duration = var8;
                            var8 = 10;
                            var9 = var17.bind(var18)(var8, var9);
                            var8 = var15[var13];
                            var19 = var14.bind(var5)(var8);
                            var18 = var19.withTiming;
                            var17 = {};
                            var8 = var3 * var16;
                            var17.duration = var8;
                            var8 = -10;
                            var21 = var18.bind(var19)(var8, var17);
                            var13 = var15[var13];
                            var15 = var14.bind(var5)(var13);
                            var14 = var15.withTiming;
                            var13 = {};
                            var3 = var3 * var16;
                            var13.duration = var3;
                            var3 = 0;
                            var20 = var14.bind(var15)(var3, var13);
                            var24 = var12;
                            var23 = var10;
                            var22 = var9;
                            var3 = var24[var11](var23, var22, var21, var20, var19);
                            var3 = var7.bind(var5)(var6, var3);
                            var4.translateY = var3;
                            var3 = new Array(1);
                            var3[0] = var4;
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
                            var2 = new Array(1);
                            var2[0] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot4;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot3;
                            var0.callback = var1;
                            return var0;
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
                        var2.duration = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 4551292686981.0;
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
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var0 = {};
        var7 = 'getDuration';
        var0.key = var7;
        var1 = function() { // Original name: getDuration, environment: var6
            _fun34027: for (var _fun34027_ip = 0;;) switch (_fun34027_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.durationV;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 600;
                    if (!var2) {
                        _fun34027_ip = 27;
                        continue _fun34027
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
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
        var6 = function() { // Original name: getDuration, environment: var6
            var0 = 600;
            return var0;
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var10 = var3.bind(var0)(var4);
    var3 = 'BounceInDown';
    var10.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_BounceTs3(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateY:-values.windowHeight}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot9 = var3;
    var3 = var14[var12];
    var3 = var13.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: BounceInUp, environment: var6
            _fun34031: for (var _fun34031_ip = 0;;) switch (_fun34031_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot2;
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
                        _fun34031_ip = 87;
                        continue _fun34031
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34031_ip = 72;
                        continue _fun34031
                    }
                case 87:
                    var3 = _closure1_slot17;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var6 = var1.bind(var3)();
                        var _closure4_slot0 = var6;
                        var3 = _closure3_slot0;
                        var1 = var3.getDelay;
                        var1 = var1.bind(var3)();
                        var _closure4_slot1 = var1;
                        var4 = _closure3_slot0;
                        var3 = var4.getDuration;
                        var5 = var3.bind(var4)();
                        var _closure4_slot2 = var5;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot3 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot4 = var4;
                        var0 = function(arg0) { // Original name: pnpm_BounceTs3, environment: var0
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var7 = _closure4_slot0;
                            var6 = _closure4_slot1;
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot1;
                            var13 = 5;
                            var3 = var15[var13];
                            var5 = undefined;
                            var12 = var14.bind(var5)(var3);
                            var11 = var12.withSequence;
                            var3 = var15[var13];
                            var10 = var14.bind(var5)(var3);
                            var9 = var10.withTiming;
                            var8 = {};
                            var16 = _closure4_slot2;
                            var3 = 0.55;
                            var3 = var3 * var16;
                            var8.duration = var3;
                            var3 = 20;
                            var10 = var9.bind(var10)(var3, var8);
                            var3 = var15[var13];
                            var18 = var14.bind(var5)(var3);
                            var17 = var18.withTiming;
                            var9 = {};
                            var3 = 0.15;
                            var8 = var3 * var16;
                            var9.duration = var8;
                            var8 = -10;
                            var9 = var17.bind(var18)(var8, var9);
                            var8 = var15[var13];
                            var19 = var14.bind(var5)(var8);
                            var18 = var19.withTiming;
                            var17 = {};
                            var8 = var3 * var16;
                            var17.duration = var8;
                            var8 = 10;
                            var21 = var18.bind(var19)(var8, var17);
                            var13 = var15[var13];
                            var15 = var14.bind(var5)(var13);
                            var14 = var15.withTiming;
                            var13 = {};
                            var3 = var3 * var16;
                            var13.duration = var3;
                            var3 = 0;
                            var20 = var14.bind(var15)(var3, var13);
                            var24 = var12;
                            var23 = var10;
                            var22 = var9;
                            var3 = var24[var11](var23, var22, var21, var20, var19);
                            var3 = var7.bind(var5)(var6, var3);
                            var4.translateY = var3;
                            var3 = new Array(1);
                            var3[0] = var4;
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
                            var2 = new Array(1);
                            var2[0] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot4;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot3;
                            var0.callback = var1;
                            return var0;
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
                        var2.duration = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 11333943352836.0;
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
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var0 = {};
        var7 = 'getDuration';
        var0.key = var7;
        var1 = function() { // Original name: getDuration, environment: var6
            _fun34034: for (var _fun34034_ip = 0;;) switch (_fun34034_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.durationV;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 600;
                    if (!var2) {
                        _fun34034_ip = 27;
                        continue _fun34034
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
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
        var6 = function() { // Original name: getDuration, environment: var6
            var0 = 600;
            return var0;
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var9 = var3.bind(var0)(var4);
    var3 = 'BounceInUp';
    var9.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_BounceTs4(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateX:-values.windowWidth}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot10 = var3;
    var3 = var14[var12];
    var3 = var13.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: BounceInLeft, environment: var6
            _fun34038: for (var _fun34038_ip = 0;;) switch (_fun34038_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot2;
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
                        _fun34038_ip = 87;
                        continue _fun34038
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34038_ip = 72;
                        continue _fun34038
                    }
                case 87:
                    var3 = _closure1_slot17;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var6 = var1.bind(var3)();
                        var _closure4_slot0 = var6;
                        var3 = _closure3_slot0;
                        var1 = var3.getDelay;
                        var1 = var1.bind(var3)();
                        var _closure4_slot1 = var1;
                        var4 = _closure3_slot0;
                        var3 = var4.getDuration;
                        var5 = var3.bind(var4)();
                        var _closure4_slot2 = var5;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot3 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot4 = var4;
                        var0 = function(arg0) { // Original name: pnpm_BounceTs4, environment: var0
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var7 = _closure4_slot0;
                            var6 = _closure4_slot1;
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot1;
                            var13 = 5;
                            var3 = var15[var13];
                            var5 = undefined;
                            var12 = var14.bind(var5)(var3);
                            var11 = var12.withSequence;
                            var3 = var15[var13];
                            var10 = var14.bind(var5)(var3);
                            var9 = var10.withTiming;
                            var8 = {};
                            var16 = _closure4_slot2;
                            var3 = 0.55;
                            var3 = var3 * var16;
                            var8.duration = var3;
                            var3 = 20;
                            var10 = var9.bind(var10)(var3, var8);
                            var3 = var15[var13];
                            var18 = var14.bind(var5)(var3);
                            var17 = var18.withTiming;
                            var9 = {};
                            var3 = 0.15;
                            var8 = var3 * var16;
                            var9.duration = var8;
                            var8 = -10;
                            var9 = var17.bind(var18)(var8, var9);
                            var8 = var15[var13];
                            var19 = var14.bind(var5)(var8);
                            var18 = var19.withTiming;
                            var17 = {};
                            var8 = var3 * var16;
                            var17.duration = var8;
                            var8 = 10;
                            var21 = var18.bind(var19)(var8, var17);
                            var13 = var15[var13];
                            var15 = var14.bind(var5)(var13);
                            var14 = var15.withTiming;
                            var13 = {};
                            var3 = var3 * var16;
                            var13.duration = var3;
                            var3 = 0;
                            var20 = var14.bind(var15)(var3, var13);
                            var24 = var12;
                            var23 = var10;
                            var22 = var9;
                            var3 = var24[var11](var23, var22, var21, var20, var19);
                            var3 = var7.bind(var5)(var6, var3);
                            var4.translateX = var3;
                            var3 = new Array(1);
                            var3[0] = var4;
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
                            var2 = new Array(1);
                            var2[0] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot4;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot3;
                            var0.callback = var1;
                            return var0;
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
                        var2.duration = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 10162410157050.0;
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
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var0 = {};
        var7 = 'getDuration';
        var0.key = var7;
        var1 = function() { // Original name: getDuration, environment: var6
            _fun34041: for (var _fun34041_ip = 0;;) switch (_fun34041_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.durationV;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 600;
                    if (!var2) {
                        _fun34041_ip = 27;
                        continue _fun34041
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
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
        var6 = function() { // Original name: getDuration, environment: var6
            var0 = 600;
            return var0;
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var4);
    var3 = 'BounceInLeft';
    var8.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_BounceTs5(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateX:values.windowWidth}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot11 = var3;
    var3 = var14[var12];
    var3 = var13.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: BounceInRight, environment: var6
            _fun34045: for (var _fun34045_ip = 0;;) switch (_fun34045_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot2;
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
                        _fun34045_ip = 87;
                        continue _fun34045
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34045_ip = 72;
                        continue _fun34045
                    }
                case 87:
                    var3 = _closure1_slot17;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var6 = var1.bind(var3)();
                        var _closure4_slot0 = var6;
                        var3 = _closure3_slot0;
                        var1 = var3.getDelay;
                        var1 = var1.bind(var3)();
                        var _closure4_slot1 = var1;
                        var4 = _closure3_slot0;
                        var3 = var4.getDuration;
                        var5 = var3.bind(var4)();
                        var _closure4_slot2 = var5;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot3 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot4 = var4;
                        var0 = function(arg0) { // Original name: pnpm_BounceTs5, environment: var0
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var7 = _closure4_slot0;
                            var6 = _closure4_slot1;
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot1;
                            var13 = 5;
                            var3 = var15[var13];
                            var5 = undefined;
                            var12 = var14.bind(var5)(var3);
                            var11 = var12.withSequence;
                            var3 = var15[var13];
                            var10 = var14.bind(var5)(var3);
                            var9 = var10.withTiming;
                            var8 = {};
                            var16 = _closure4_slot2;
                            var3 = 0.55;
                            var3 = var3 * var16;
                            var8.duration = var3;
                            var3 = -20;
                            var10 = var9.bind(var10)(var3, var8);
                            var3 = var15[var13];
                            var18 = var14.bind(var5)(var3);
                            var17 = var18.withTiming;
                            var9 = {};
                            var3 = 0.15;
                            var8 = var3 * var16;
                            var9.duration = var8;
                            var8 = 10;
                            var9 = var17.bind(var18)(var8, var9);
                            var8 = var15[var13];
                            var19 = var14.bind(var5)(var8);
                            var18 = var19.withTiming;
                            var17 = {};
                            var8 = var3 * var16;
                            var17.duration = var8;
                            var8 = -10;
                            var21 = var18.bind(var19)(var8, var17);
                            var13 = var15[var13];
                            var15 = var14.bind(var5)(var13);
                            var14 = var15.withTiming;
                            var13 = {};
                            var3 = var3 * var16;
                            var13.duration = var3;
                            var3 = 0;
                            var20 = var14.bind(var15)(var3, var13);
                            var24 = var12;
                            var23 = var10;
                            var22 = var9;
                            var3 = var24[var11](var23, var22, var21, var20, var19);
                            var3 = var7.bind(var5)(var6, var3);
                            var4.translateX = var3;
                            var3 = new Array(1);
                            var3[0] = var4;
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
                            var2 = new Array(1);
                            var2[0] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot4;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot3;
                            var0.callback = var1;
                            return var0;
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
                        var2.duration = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 4134237895259.0;
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
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var0 = {};
        var7 = 'getDuration';
        var0.key = var7;
        var1 = function() { // Original name: getDuration, environment: var6
            _fun34048: for (var _fun34048_ip = 0;;) switch (_fun34048_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.durationV;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 600;
                    if (!var2) {
                        _fun34048_ip = 27;
                        continue _fun34048
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
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
        var6 = function() { // Original name: getDuration, environment: var6
            var0 = 600;
            return var0;
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var4);
    var3 = 'BounceInRight';
    var7.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_BounceTs6(){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.1,{duration:duration*0.15}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.2,{duration:duration*0.15}),withTiming(0,{duration:duration*0.55})))}]},initialValues:{transform:[{scale:1}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot12 = var3;
    var3 = var14[var12];
    var3 = var13.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: BounceOut, environment: var6
            _fun34052: for (var _fun34052_ip = 0;;) switch (_fun34052_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot2;
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
                        _fun34052_ip = 87;
                        continue _fun34052
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34052_ip = 72;
                        continue _fun34052
                    }
                case 87:
                    var3 = _closure1_slot17;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var6 = var1.bind(var3)();
                        var _closure4_slot0 = var6;
                        var3 = _closure3_slot0;
                        var1 = var3.getDelay;
                        var1 = var1.bind(var3)();
                        var _closure4_slot1 = var1;
                        var4 = _closure3_slot0;
                        var3 = var4.getDuration;
                        var5 = var3.bind(var4)();
                        var _closure4_slot2 = var5;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot3 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot4 = var4;
                        var0 = function() { // Original name: pnpm_BounceTs6, environment: var0
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var7 = _closure4_slot0;
                            var6 = _closure4_slot1;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot1;
                            var3 = 5;
                            var8 = var14[var3];
                            var5 = undefined;
                            var12 = var13.bind(var5)(var8);
                            var11 = var12.withSequence;
                            var8 = var14[var3];
                            var17 = var13.bind(var5)(var8);
                            var15 = var17.withTiming;
                            var10 = {};
                            var16 = _closure4_slot2;
                            var8 = 0.15;
                            var9 = var8 * var16;
                            var10.duration = var9;
                            var9 = 1.1;
                            var10 = var15.bind(var17)(var9, var10);
                            var9 = var14[var3];
                            var18 = var13.bind(var5)(var9);
                            var17 = var18.withTiming;
                            var15 = {};
                            var9 = var8 * var16;
                            var15.duration = var9;
                            var9 = 0.9;
                            var9 = var17.bind(var18)(var9, var15);
                            var15 = var14[var3];
                            var18 = var13.bind(var5)(var15);
                            var17 = var18.withTiming;
                            var15 = {};
                            var8 = var8 * var16;
                            var15.duration = var8;
                            var8 = 1.2;
                            var20 = var17.bind(var18)(var8, var15);
                            var3 = var14[var3];
                            var15 = var13.bind(var5)(var3);
                            var14 = var15.withTiming;
                            var13 = {};
                            var3 = 0.55;
                            var3 = var3 * var16;
                            var13.duration = var3;
                            var3 = 0;
                            var19 = var14.bind(var15)(var3, var13);
                            var23 = var12;
                            var22 = var10;
                            var21 = var9;
                            var3 = var23[var11](var22, var21, var20, var19, var18);
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
                            var2 = _closure4_slot4;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot3;
                            var0.callback = var1;
                            return var0;
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
                        var2.duration = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 15864962046507.0;
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
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var0 = {};
        var7 = 'getDuration';
        var0.key = var7;
        var1 = function() { // Original name: getDuration, environment: var6
            _fun34055: for (var _fun34055_ip = 0;;) switch (_fun34055_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.durationV;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 600;
                    if (!var2) {
                        _fun34055_ip = 27;
                        continue _fun34055
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
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
        var6 = function() { // Original name: getDuration, environment: var6
            var0 = 600;
            return var0;
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var6 = var3.bind(var0)(var4);
    var3 = 'BounceOut';
    var6.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_BounceTs7(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(values.windowHeight,{duration:duration*0.55})))}]},initialValues:{transform:[{translateY:0}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot13 = var3;
    var3 = var14[var12];
    var3 = var13.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: BounceOutDown, environment: var6
            _fun34059: for (var _fun34059_ip = 0;;) switch (_fun34059_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot2;
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
                        _fun34059_ip = 87;
                        continue _fun34059
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34059_ip = 72;
                        continue _fun34059
                    }
                case 87:
                    var3 = _closure1_slot17;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var6 = var1.bind(var3)();
                        var _closure4_slot0 = var6;
                        var3 = _closure3_slot0;
                        var1 = var3.getDelay;
                        var1 = var1.bind(var3)();
                        var _closure4_slot1 = var1;
                        var4 = _closure3_slot0;
                        var3 = var4.getDuration;
                        var5 = var3.bind(var4)();
                        var _closure4_slot2 = var5;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot3 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot4 = var4;
                        var0 = function(arg0) { // Original name: pnpm_BounceTs7, environment: var0
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var7 = _closure4_slot0;
                            var6 = _closure4_slot1;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot1;
                            var3 = 5;
                            var8 = var14[var3];
                            var5 = undefined;
                            var12 = var13.bind(var5)(var8);
                            var11 = var12.withSequence;
                            var8 = var14[var3];
                            var16 = var13.bind(var5)(var8);
                            var15 = var16.withTiming;
                            var10 = {};
                            var17 = _closure4_slot2;
                            var8 = 0.15;
                            var9 = var8 * var17;
                            var10.duration = var9;
                            var9 = -10;
                            var10 = var15.bind(var16)(var9, var10);
                            var9 = var14[var3];
                            var18 = var13.bind(var5)(var9);
                            var16 = var18.withTiming;
                            var15 = {};
                            var9 = var8 * var17;
                            var15.duration = var9;
                            var9 = 10;
                            var9 = var16.bind(var18)(var9, var15);
                            var15 = var14[var3];
                            var18 = var13.bind(var5)(var15);
                            var16 = var18.withTiming;
                            var15 = {};
                            var8 = var8 * var17;
                            var15.duration = var8;
                            var8 = -20;
                            var20 = var16.bind(var18)(var8, var15);
                            var3 = var14[var3];
                            var15 = var13.bind(var5)(var3);
                            var14 = var15.withTiming;
                            var3 = arg0;
                            var13 = var3.windowHeight;
                            var3 = {};
                            var16 = 0.55;
                            var16 = var16 * var17;
                            var3.duration = var16;
                            var19 = var14.bind(var15)(var13, var3);
                            var23 = var12;
                            var22 = var10;
                            var21 = var9;
                            var3 = var23[var11](var22, var21, var20, var19, var18);
                            var3 = var7.bind(var5)(var6, var3);
                            var4.translateY = var3;
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
                            var6.translateY = var2;
                            var2 = new Array(1);
                            var2[0] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot4;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot3;
                            var0.callback = var1;
                            return var0;
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
                        var2.duration = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 4170057933312.0;
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
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var0 = {};
        var7 = 'getDuration';
        var0.key = var7;
        var1 = function() { // Original name: getDuration, environment: var6
            _fun34062: for (var _fun34062_ip = 0;;) switch (_fun34062_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.durationV;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 600;
                    if (!var2) {
                        _fun34062_ip = 27;
                        continue _fun34062
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
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
        var6 = function() { // Original name: getDuration, environment: var6
            var0 = 600;
            return var0;
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var5 = var3.bind(var0)(var4);
    var3 = 'BounceOutDown';
    var5.presetName = var3;
    var3 = {};
    var4 = 'function pnpm_BounceTs8(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(-values.windowHeight,{duration:duration*0.55})))}]},initialValues:{transform:[{translateY:0}],...initialValues},callback:callback};}';
    var3.code = var4;
    var _closure1_slot14 = var3;
    var3 = var14[var12];
    var3 = var13.bind(var0)(var3);
    var4 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: BounceOutUp, environment: var6
            _fun34066: for (var _fun34066_ip = 0;;) switch (_fun34066_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot2;
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
                        _fun34066_ip = 87;
                        continue _fun34066
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34066_ip = 72;
                        continue _fun34066
                    }
                case 87:
                    var3 = _closure1_slot17;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var6 = var1.bind(var3)();
                        var _closure4_slot0 = var6;
                        var3 = _closure3_slot0;
                        var1 = var3.getDelay;
                        var1 = var1.bind(var3)();
                        var _closure4_slot1 = var1;
                        var4 = _closure3_slot0;
                        var3 = var4.getDuration;
                        var5 = var3.bind(var4)();
                        var _closure4_slot2 = var5;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot3 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot4 = var4;
                        var0 = function(arg0) { // Original name: pnpm_BounceTs8, environment: var0
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var7 = _closure4_slot0;
                            var6 = _closure4_slot1;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot1;
                            var3 = 5;
                            var8 = var14[var3];
                            var5 = undefined;
                            var12 = var13.bind(var5)(var8);
                            var11 = var12.withSequence;
                            var8 = var14[var3];
                            var16 = var13.bind(var5)(var8);
                            var15 = var16.withTiming;
                            var10 = {};
                            var17 = _closure4_slot2;
                            var8 = 0.15;
                            var9 = var8 * var17;
                            var10.duration = var9;
                            var9 = 10;
                            var10 = var15.bind(var16)(var9, var10);
                            var9 = var14[var3];
                            var18 = var13.bind(var5)(var9);
                            var16 = var18.withTiming;
                            var15 = {};
                            var9 = var8 * var17;
                            var15.duration = var9;
                            var9 = -10;
                            var9 = var16.bind(var18)(var9, var15);
                            var15 = var14[var3];
                            var18 = var13.bind(var5)(var15);
                            var16 = var18.withTiming;
                            var15 = {};
                            var8 = var8 * var17;
                            var15.duration = var8;
                            var8 = 20;
                            var20 = var16.bind(var18)(var8, var15);
                            var3 = var14[var3];
                            var15 = var13.bind(var5)(var3);
                            var14 = var15.withTiming;
                            var3 = arg0;
                            var3 = var3.windowHeight;
                            var13 = -var3;
                            var3 = {};
                            var16 = 0.55;
                            var16 = var16 * var17;
                            var3.duration = var16;
                            var19 = var14.bind(var15)(var13, var3);
                            var23 = var12;
                            var22 = var10;
                            var21 = var9;
                            var3 = var23[var11](var22, var21, var20, var19, var18);
                            var3 = var7.bind(var5)(var6, var3);
                            var4.translateY = var3;
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
                            var6.translateY = var2;
                            var2 = new Array(1);
                            var2[0] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot4;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot3;
                            var0.callback = var1;
                            return var0;
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
                        var2.duration = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 8059944917039.0;
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
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var0 = {};
        var7 = 'getDuration';
        var0.key = var7;
        var1 = function() { // Original name: getDuration, environment: var6
            _fun34069: for (var _fun34069_ip = 0;;) switch (_fun34069_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.durationV;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 600;
                    if (!var2) {
                        _fun34069_ip = 27;
                        continue _fun34069
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
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
        var6 = function() { // Original name: getDuration, environment: var6
            var0 = 600;
            return var0;
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var4 = var3.bind(var0)(var4);
    var3 = 'BounceOutUp';
    var4.presetName = var3;
    var3 = {};
    var15 = 'function pnpm_BounceTs9(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(-values.windowWidth,{duration:duration*0.55})))}]},initialValues:{transform:[{translateX:0}],...initialValues},callback:callback};}';
    var3.code = var15;
    var _closure1_slot15 = var3;
    var3 = var14[var12];
    var3 = var13.bind(var0)(var3);
    var15 = var3.ComplexAnimationBuilder;
    var3 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: BounceOutLeft, environment: var6
            _fun34073: for (var _fun34073_ip = 0;;) switch (_fun34073_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot2;
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
                        _fun34073_ip = 87;
                        continue _fun34073
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34073_ip = 72;
                        continue _fun34073
                    }
                case 87:
                    var3 = _closure1_slot17;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var6 = var1.bind(var3)();
                        var _closure4_slot0 = var6;
                        var3 = _closure3_slot0;
                        var1 = var3.getDelay;
                        var1 = var1.bind(var3)();
                        var _closure4_slot1 = var1;
                        var4 = _closure3_slot0;
                        var3 = var4.getDuration;
                        var5 = var3.bind(var4)();
                        var _closure4_slot2 = var5;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot3 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot4 = var4;
                        var0 = function(arg0) { // Original name: pnpm_BounceTs9, environment: var0
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var7 = _closure4_slot0;
                            var6 = _closure4_slot1;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot1;
                            var3 = 5;
                            var8 = var14[var3];
                            var5 = undefined;
                            var12 = var13.bind(var5)(var8);
                            var11 = var12.withSequence;
                            var8 = var14[var3];
                            var16 = var13.bind(var5)(var8);
                            var15 = var16.withTiming;
                            var10 = {};
                            var17 = _closure4_slot2;
                            var8 = 0.15;
                            var9 = var8 * var17;
                            var10.duration = var9;
                            var9 = 10;
                            var10 = var15.bind(var16)(var9, var10);
                            var9 = var14[var3];
                            var18 = var13.bind(var5)(var9);
                            var16 = var18.withTiming;
                            var15 = {};
                            var9 = var8 * var17;
                            var15.duration = var9;
                            var9 = -10;
                            var9 = var16.bind(var18)(var9, var15);
                            var15 = var14[var3];
                            var18 = var13.bind(var5)(var15);
                            var16 = var18.withTiming;
                            var15 = {};
                            var8 = var8 * var17;
                            var15.duration = var8;
                            var8 = 20;
                            var20 = var16.bind(var18)(var8, var15);
                            var3 = var14[var3];
                            var15 = var13.bind(var5)(var3);
                            var14 = var15.withTiming;
                            var3 = arg0;
                            var3 = var3.windowWidth;
                            var13 = -var3;
                            var3 = {};
                            var16 = 0.55;
                            var16 = var16 * var17;
                            var3.duration = var16;
                            var19 = var14.bind(var15)(var13, var3);
                            var23 = var12;
                            var22 = var10;
                            var21 = var9;
                            var3 = var23[var11](var22, var21, var20, var19, var18);
                            var3 = var7.bind(var5)(var6, var3);
                            var4.translateX = var3;
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
                            var6.translateX = var2;
                            var2 = new Array(1);
                            var2[0] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot4;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot3;
                            var0.callback = var1;
                            return var0;
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
                        var2.duration = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 6930767645815.0;
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
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var0 = {};
        var7 = 'getDuration';
        var0.key = var7;
        var1 = function() { // Original name: getDuration, environment: var6
            _fun34076: for (var _fun34076_ip = 0;;) switch (_fun34076_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.durationV;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 600;
                    if (!var2) {
                        _fun34076_ip = 27;
                        continue _fun34076
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
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
        var6 = function() { // Original name: getDuration, environment: var6
            var0 = 600;
            return var0;
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var15);
    var15 = 'BounceOutLeft';
    var3.presetName = var15;
    var15 = {};
    var16 = 'function pnpm_BounceTs10(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(values.windowWidth,{duration:duration*0.55})))}]},initialValues:{transform:[{translateX:0}],...initialValues},callback:callback};}';
    var15.code = var16;
    var _closure1_slot16 = var15;
    var12 = var14[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.ComplexAnimationBuilder;
    var1 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: BounceOutRight, environment: var6
            _fun34080: for (var _fun34080_ip = 0;;) switch (_fun34080_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot2;
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
                        _fun34080_ip = 87;
                        continue _fun34080
                    }
                case 72:
                    var9 = arguments[var3];
                    var7[var3] = var9;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun34080_ip = 72;
                        continue _fun34080
                    }
                case 87:
                    var3 = _closure1_slot17;
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var1 = var3.getDelayFunction;
                        var6 = var1.bind(var3)();
                        var _closure4_slot0 = var6;
                        var3 = _closure3_slot0;
                        var1 = var3.getDelay;
                        var1 = var1.bind(var3)();
                        var _closure4_slot1 = var1;
                        var4 = _closure3_slot0;
                        var3 = var4.getDuration;
                        var5 = var3.bind(var4)();
                        var _closure4_slot2 = var5;
                        var3 = _closure3_slot0;
                        var3 = var3.callbackV;
                        var _closure4_slot3 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.initialValues;
                        var _closure4_slot4 = var4;
                        var0 = function(arg0) { // Original name: pnpm_BounceTs10, environment: var0
                            var0 = {};
                            var2 = {};
                            var4 = {};
                            var7 = _closure4_slot0;
                            var6 = _closure4_slot1;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot1;
                            var3 = 5;
                            var8 = var14[var3];
                            var5 = undefined;
                            var12 = var13.bind(var5)(var8);
                            var11 = var12.withSequence;
                            var8 = var14[var3];
                            var16 = var13.bind(var5)(var8);
                            var15 = var16.withTiming;
                            var10 = {};
                            var17 = _closure4_slot2;
                            var8 = 0.15;
                            var9 = var8 * var17;
                            var10.duration = var9;
                            var9 = -10;
                            var10 = var15.bind(var16)(var9, var10);
                            var9 = var14[var3];
                            var18 = var13.bind(var5)(var9);
                            var16 = var18.withTiming;
                            var15 = {};
                            var9 = var8 * var17;
                            var15.duration = var9;
                            var9 = 10;
                            var9 = var16.bind(var18)(var9, var15);
                            var15 = var14[var3];
                            var18 = var13.bind(var5)(var15);
                            var16 = var18.withTiming;
                            var15 = {};
                            var8 = var8 * var17;
                            var15.duration = var8;
                            var8 = -20;
                            var20 = var16.bind(var18)(var8, var15);
                            var3 = var14[var3];
                            var15 = var13.bind(var5)(var3);
                            var14 = var15.withTiming;
                            var3 = arg0;
                            var13 = var3.windowWidth;
                            var3 = {};
                            var16 = 0.55;
                            var16 = var16 * var17;
                            var3.duration = var16;
                            var19 = var14.bind(var15)(var13, var3);
                            var23 = var12;
                            var22 = var10;
                            var21 = var9;
                            var3 = var23[var11](var22, var21, var20, var19, var18);
                            var3 = var7.bind(var5)(var6, var3);
                            var4.translateX = var3;
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
                            var6.translateX = var2;
                            var2 = new Array(1);
                            var2[0] = var6;
                            var3.transform = var2;
                            var2 = _closure4_slot4;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.initialValues = var2;
                            var1 = _closure4_slot3;
                            var0.callback = var1;
                            return var0;
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
                        var2.duration = var5;
                        var2.initialValues = var4;
                        var2.callback = var3;
                        var0.__closure = var2;
                        var2 = 11465945086863.0;
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
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var0 = {};
        var7 = 'getDuration';
        var0.key = var7;
        var1 = function() { // Original name: getDuration, environment: var6
            _fun34083: for (var _fun34083_ip = 0;;) switch (_fun34083_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.durationV;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 600;
                    if (!var2) {
                        _fun34083_ip = 27;
                        continue _fun34083
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
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
        var6 = function() { // Original name: getDuration, environment: var6
            var0 = 600;
            return var0;
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var12);
    var12 = 'BounceOutRight';
    var1.presetName = var12;
    var2.BounceIn = var11;
    var2.BounceInDown = var10;
    var2.BounceInUp = var9;
    var2.BounceInLeft = var8;
    var2.BounceInRight = var7;
    var2.BounceOut = var6;
    var2.BounceOutDown = var5;
    var2.BounceOutUp = var4;
    var2.BounceOutLeft = var3;
    var2.BounceOutRight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3750, 3748]);