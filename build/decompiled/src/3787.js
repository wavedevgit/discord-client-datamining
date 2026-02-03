// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = {};
    var3 = 'function validateConfig_Pnpm_decayTs1(config){if(config.clamp){if(!Array.isArray(config.clamp)){throw new ReanimatedError("`config.clamp` must be an array but is "+typeof config.clamp+".");}if(config.clamp.length!==2){throw new ReanimatedError("`clamp array` must contain 2 items but is given "+config.clamp.length+".");}}if(config.velocityFactor<=0){throw new ReanimatedError("`config.velocityFactor` must be greater then 0 but is "+config.velocityFactor+".");}if(config.rubberBandEffect&&!config.clamp){throw new ReanimatedError(\'You need to set `clamp` property when using `rubberBandEffect`.\');}}';
    var0.code = var3;
    var _closure1_slot2 = var0;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33808: for (var _fun33808_ip = 0;;) switch (_fun33808_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1.clamp;
                    if (!var0) {
                        _fun33808_ip = 151;
                        continue _fun33808
                    }
                case 15:
                    var0 = global;
                    var4 = var0.Array;
                    var3 = var4.isArray;
                    var2 = var1.clamp;
                    var2 = var3.bind(var4)(var2);
                    if (var2) {
                        _fun33808_ip = 130;
                        continue _fun33808
                    }
                case 42:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 0;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.ReanimatedError;
                    var2 = var1.clamp;
                    var3 = var0.HermesInternal;
                    var6 = var3.concat;
                    var5 = '`config.clamp` must be an array but is ';
                    var3 = typeof var2;
                    var2 = '.';
                    var8 = var6.bind(var5)(var3, var2);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var9 = var3;
                    var2 = new var9[var4](var8, var7);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
                case 130:
                    var2 = var1.clamp;
                    var3 = var2.length;
                    var2 = 2;
                    if (!(var2 === var3)) {
                        _fun33808_ip = 326;
                        continue _fun33808
                    }
                case 151:
                    var2 = var1.velocityFactor;
                    var3 = 0;
                    if (!(!(var2 <= var3))) {
                        _fun33808_ip = 241;
                        continue _fun33808
                    }
                case 163:
                    var2 = var1.rubberBandEffect;
                    if (!var2) {
                        _fun33808_ip = 237;
                        continue _fun33808
                    }
                case 172:
                    var2 = var1.clamp;
                    if (var2) {
                        _fun33808_ip = 237;
                        continue _fun33808
                    }
                case 181:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var4 = var2[var3];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var5 = var2.ReanimatedError;
                    var2 = var5.prototype;
                    var4 = Object.create(var2, {
                        constructor: {
                            value: var5
                        }
                    });
                    var8 = 'You need to set `clamp` property when using `rubberBandEffect`.';
                    var9 = var4;
                    var2 = new var9[var5](var8, var7);
                    var2 = var2 instanceof Object ? var2 : var4;
                    throw var2;
                case 237:
                    var2 = undefined;
                    return var2;
                case 241:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var3 = var2[var3];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.ReanimatedError;
                    var6 = var1.velocityFactor;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var3 = '`config.velocityFactor` must be greater then 0 but is ';
                    var2 = '.';
                    var8 = var5.bind(var3)(var6, var2);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var9 = var3;
                    var2 = new var9[var4](var8, var7);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
                case 326:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 0;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.ReanimatedError;
                    var1 = var1.clamp;
                    var4 = var1.length;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = '`clamp array` must contain 2 items but is given ';
                    var0 = '.';
                    var8 = var3.bind(var1)(var4, var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = var1;
                    var0 = new var9[var2](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 14532293098342.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var8 = var3.bind(var0)();
    var _closure1_slot3 = var8;
    var3 = {};
    var4 = "function pnpm_decayTs2(userConfig,callback){const{defineAnimation,isValidRubberBandConfig,rubberBandDecay,rigidDecay,validateConfig,getReduceMotionForAnimation}=this.__closure;return defineAnimation(0,function(){'worklet';var _config$velocity;const config={deceleration:0.998,velocityFactor:1,velocity:0,rubberBandFactor:0.6};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}const decay=isValidRubberBandConfig(config)?function(animation,now){return rubberBandDecay(animation,now,config);}:function(animation,now){return rigidDecay(animation,now,config);};function onStart(animation,value,now){const initialVelocity=config.velocity;animation.current=value;animation.lastTimestamp=now;animation.startTimestamp=now;animation.initialVelocity=initialVelocity;animation.velocity=initialVelocity;validateConfig(config);if(animation.reduceMotion&&config.clamp){if(value<config.clamp[0]){animation.current=config.clamp[0];}else if(value>config.clamp[1]){animation.current=config.clamp[1];}}}return{onFrame:decay,onStart:onStart,callback:callback,velocity:(_config$velocity=config.velocity)!==null&&_config$velocity!==void 0?_config$velocity:0,initialVelocity:0,current:undefined,lastTimestamp:0,startTimestamp:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};});}";
    var3.code = var4;
    var4 = {};
    var5 = 'function pnpm_decayTs3(){const{userConfig,isValidRubberBandConfig,rubberBandDecay,rigidDecay,validateConfig,callback,getReduceMotionForAnimation}=this.__closure;var _config$velocity;const config={deceleration:0.998,velocityFactor:1,velocity:0,rubberBandFactor:0.6};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}const decay=isValidRubberBandConfig(config)?function(animation,now){return rubberBandDecay(animation,now,config);}:function(animation,now){return rigidDecay(animation,now,config);};function onStart(animation,value,now){const initialVelocity=config.velocity;animation.current=value;animation.lastTimestamp=now;animation.startTimestamp=now;animation.initialVelocity=initialVelocity;animation.velocity=initialVelocity;validateConfig(config);if(animation.reduceMotion&&config.clamp){if(value<config.clamp[0]){animation.current=config.clamp[0];}else if(value>config.clamp[1]){animation.current=config.clamp[1];}}}return{onFrame:decay,onStart:onStart,callback:callback,velocity:(_config$velocity=config.velocity)!==null&&_config$velocity!==void 0?_config$velocity:0,initialVelocity:0,current:undefined,lastTimestamp:0,startTimestamp:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};}';
    var4.code = var5;
    var _closure1_slot4 = var4;
    var1 = function arg0, arg1() {
        var10 = arg0;
        var9 = arg1;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var9;
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var5 = 1;
        var2 = var8[var5];
        var6 = undefined;
        var3 = var7.bind(var6)(var2);
        var2 = var3.defineAnimation;
        var1 = function() {
            _fun33810: for (var _fun33810_ip = 0;;) switch (_fun33810_ip) {
                case 0:
                    var1 = {
                        'deceleration': 0.998,
                        'velocityFactor': 1,
                        'velocity': 0,
                        'rubberBandFactor': 0.6
                    };
                    var5 = 1;
                    var3 = 0;
                    var _closure3_slot0 = var1;
                    var0 = _closure2_slot0;
                    if (!var0) {
                        _fun33810_ip = 72;
                        continue _fun33810
                    }
                case 35:
                    var0 = global;
                    var4 = var0.Object;
                    var2 = var4.keys;
                    var0 = _closure2_slot0;
                    var4 = var2.bind(var4)(var0);
                    var2 = var4.forEach;
                    var0 = function(arg0) { // Environment: var7
                        var2 = arg0;
                        var1 = _closure3_slot0;
                        var0 = _closure2_slot0;
                        var0 = var0[var2];
                        var1[var2] = var0;
                        return var0;
                    };
                    var0 = var2.bind(var4)(var0);
                case 72:
                    var0 = {};
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 2;
                    var8 = var8[var4];
                    var4 = undefined;
                    var9 = var9.bind(var4)(var8);
                    var8 = var9.isValidRubberBandConfig;
                    var8 = var8.bind(var9)(var1);
                    if (var8) {
                        _fun33810_ip = 120;
                        continue _fun33810
                    }
                case 113:
                    var8 = function(arg0, arg1) { // Environment: var7
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.rigidDecay;
                        var2 = _closure3_slot0;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var4)(var1, var0, var2);
                        return var0;
                    };
                    _fun33810_ip = 125;
                    continue _fun33810;
                case 120:
                    var8 = function(arg0, arg1) { // Environment: var7
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 3;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.rubberBandDecay;
                        var2 = _closure3_slot0;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var4)(var1, var0, var2);
                        return var0;
                    };
                case 125:
                    var0.onFrame = var8;
                    var7 = function arg0, arg1, arg2() {
                        _fun33814: for (var _fun33814_ip = 0;;) switch (_fun33814_ip) {
                            case 0:
                                var2 = arg0;
                                var6 = arg1;
                                var3 = arg2;
                                var4 = _closure3_slot0;
                                var0 = var4.velocity;
                                var2.current = var6;
                                var2.lastTimestamp = var3;
                                var2.startTimestamp = var3;
                                var2.initialVelocity = var0;
                                var2.velocity = var0;
                                var3 = _closure1_slot3;
                                var0 = undefined;
                                var3 = var3.bind(var0)(var4);
                                var3 = var2.reduceMotion;
                                if (!var3) {
                                    _fun33814_ip = 85;
                                    continue _fun33814
                                }
                            case 75:
                                var4 = _closure3_slot0;
                                var3 = var4.clamp;
                            case 85:
                                if (!var3) {
                                    _fun33814_ip = 171;
                                    continue _fun33814
                                }
                            case 88:
                                var3 = _closure3_slot0;
                                var4 = var3.clamp;
                                var3 = 0;
                                var4 = var4[var3];
                                if (!(!(var6 < var4))) {
                                    _fun33814_ip = 151;
                                    continue _fun33814
                                }
                            case 108:
                                var4 = _closure3_slot0;
                                var4 = var4.clamp;
                                var5 = 1;
                                var4 = var4[var5];
                                if (!(var6 > var4)) {
                                    _fun33814_ip = 171;
                                    continue _fun33814
                                }
                            case 129:
                                var4 = _closure3_slot0;
                                var4 = var4.clamp;
                                var4 = var4[var5];
                                var2.current = var4;
                                _fun33814_ip = 171;
                                continue _fun33814;
                            case 151:
                                var1 = _closure3_slot0;
                                var1 = var1.clamp;
                                var1 = var1[var3];
                                var2.current = var1;
                            case 171:
                                return var0;
                        }
                    };
                    var0.onStart = var7;
                    var6 = _closure2_slot1;
                    var0.callback = var6;
                    var7 = var1.velocity;
                    var6 = null;
                    var8 = var6 != var7;
                    var6 = 0;
                    if (!var8) {
                        _fun33810_ip = 169;
                        continue _fun33810
                    }
                case 166:
                    var6 = var7;
                case 169:
                    var0.velocity = var6;
                    var0.initialVelocity = var3;
                    var0.current = var4;
                    var0.lastTimestamp = var3;
                    var0.startTimestamp = var3;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var5];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.getReduceMotionForAnimation;
                    var1 = var1.reduceMotion;
                    var1 = var2.bind(var3)(var1);
                    var0.reduceMotion = var1;
                    return var0;
            }
        };
        var4 = {};
        var4.userConfig = var10;
        var10 = 2;
        var10 = var8[var10];
        var10 = var7.bind(var6)(var10);
        var10 = var10.isValidRubberBandConfig;
        var4.isValidRubberBandConfig = var10;
        var10 = 3;
        var10 = var8[var10];
        var10 = var7.bind(var6)(var10);
        var10 = var10.rubberBandDecay;
        var4.rubberBandDecay = var10;
        var10 = 4;
        var10 = var8[var10];
        var10 = var7.bind(var6)(var10);
        var10 = var10.rigidDecay;
        var4.rigidDecay = var10;
        var10 = _closure1_slot3;
        var4.validateConfig = var10;
        var4.callback = var9;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.getReduceMotionForAnimation;
        var4.getReduceMotionForAnimation = var5;
        var1.__closure = var4;
        var4 = 17099614658252.0;
        var1.__workletHash = var4;
        var0 = _closure1_slot4;
        var1.__initData = var0;
        var0 = 0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var4 = {};
    var5 = 1;
    var9 = var7[var5];
    var9 = var6.bind(var0)(var9);
    var9 = var9.defineAnimation;
    var4.defineAnimation = var9;
    var9 = 2;
    var9 = var7[var9];
    var9 = var6.bind(var0)(var9);
    var9 = var9.isValidRubberBandConfig;
    var4.isValidRubberBandConfig = var9;
    var9 = 3;
    var9 = var7[var9];
    var9 = var6.bind(var0)(var9);
    var9 = var9.rubberBandDecay;
    var4.rubberBandDecay = var9;
    var9 = 4;
    var9 = var7[var9];
    var9 = var6.bind(var0)(var9);
    var9 = var9.rigidDecay;
    var4.rigidDecay = var9;
    var4.validateConfig = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.getReduceMotionForAnimation;
    var4.getReduceMotionForAnimation = var5;
    var1.__closure = var4;
    var4 = 3913201228611.0;
    var1.__workletHash = var4;
    var1.__initData = var3;
    var2.withDecay = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3723, 3752, 3788, 3789, 3790]);