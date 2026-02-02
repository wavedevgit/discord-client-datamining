// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'function pnpm_BaseAnimationBuilderTs1(delay,animation){const{withDelay,reduceMotion}=this.__closure;return withDelay(delay,animation,reduceMotion);}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = {};
    var4 = 'function pnpm_BaseAnimationBuilderTs2(_,animation){const{getReduceMotionFromConfig,reduceMotion}=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;}';
    var3.code = var4;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var4 = _closure1_slot3;
        var3 = function() {
            var2 = this;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var1 = var1.ReduceMotion;
            var1 = var1.System;
            var2.reduceMotionV = var1;
            var1 = false;
            var2.randomizeDelay = var1;
            var1 = function() { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.ReanimatedError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = 'Unimplemented method in child class.';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            };
            var2.build = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var1 = 'duration';
        var0.key = var1;
        var2 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.durationV = var1;
            return var0;
        };
        var0.value = var2;
        var2 = new Array(9);
        var2[0] = var0;
        var0 = {};
        var10 = 'delay';
        var0.key = var10;
        var6 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.delayV = var1;
            return var0;
        };
        var0.value = var6;
        var2[1] = var0;
        var0 = {};
        var9 = 'withCallback';
        var0.key = var9;
        var6 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.callbackV = var1;
            return var0;
        };
        var0.value = var6;
        var2[2] = var0;
        var0 = {};
        var8 = 'reduceMotion';
        var0.key = var8;
        var6 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.reduceMotionV = var1;
            return var0;
        };
        var0.value = var6;
        var2[3] = var0;
        var0 = {};
        var7 = 'getDuration';
        var0.key = var7;
        var6 = function() {
            _fun33694: for (var _fun33694_ip = 0;;) switch (_fun33694_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.durationV;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 300;
                    if (!var2) {
                        _fun33694_ip = 27;
                        continue _fun33694
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
        };
        var0.value = var6;
        var2[4] = var0;
        var0 = {};
        var6 = 'randomDelay';
        var0.key = var6;
        var11 = function() {
            var0 = this;
            var1 = true;
            var0.randomizeDelay = var1;
            return var0;
        };
        var0.value = var11;
        var2[5] = var0;
        var0 = {};
        var11 = 'getDelay';
        var0.key = var11;
        var11 = function() {
            _fun33696: for (var _fun33696_ip = 0;;) switch (_fun33696_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.randomizeDelay;
                    if (var0) {
                        _fun33696_ip = 34;
                        continue _fun33696
                    }
                case 12:
                    var2 = var1.delayV;
                    var0 = null;
                    var3 = var0 != var2;
                    var0 = 0;
                    if (!var3) {
                        _fun33696_ip = 32;
                        continue _fun33696
                    }
                case 29:
                    var0 = var2;
                case 32:
                    _fun33696_ip = 80;
                    continue _fun33696;
                case 34:
                    var2 = global;
                    var3 = var2.Math;
                    var2 = var3.random;
                    var2 = var2.bind(var3)();
                    var3 = var1.delayV;
                    var1 = null;
                    var4 = var1 != var3;
                    var1 = 1000;
                    if (!var4) {
                        _fun33696_ip = 76;
                        continue _fun33696
                    }
                case 73:
                    var1 = var3;
                case 76:
                    var0 = var2 * var1;
                case 80:
                    return var0;
            }
        };
        var0.value = var11;
        var2[6] = var0;
        var0 = {};
        var11 = 'getReduceMotion';
        var0.key = var11;
        var11 = function() {
            var0 = this;
            var0 = var0.reduceMotionV;
            return var0;
        };
        var0.value = var11;
        var2[7] = var0;
        var0 = {};
        var11 = 'getDelayFunction';
        var0.key = var11;
        var11 = function() {
            _fun33698: for (var _fun33698_ip = 0;;) switch (_fun33698_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.randomizeDelay;
                    if (var0) {
                        _fun33698_ip = 20;
                        continue _fun33698
                    }
                case 14:
                    var0 = var3.delayV;
                case 20:
                    var2 = var3.getReduceMotion;
                    var4 = var2.bind(var3)();
                    var _closure3_slot0 = var4;
                    if (var0) {
                        _fun33698_ip = 119;
                        continue _fun33698
                    }
                case 37:
                    var0 = function arg0, arg1() {
                        var0 = arg1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getReduceMotionFromConfig;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        var0.reduceMotion = var1;
                        return var0;
                    };
                    var3 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 5;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var5 = var5.getReduceMotionFromConfig;
                    var3.getReduceMotionFromConfig = var5;
                    var3.reduceMotion = var4;
                    var0.__closure = var3;
                    var3 = 8417033392474.0;
                    var0.__workletHash = var3;
                    var2 = _closure1_slot5;
                    var0.__initData = var2;
                    _fun33698_ip = 202;
                    continue _fun33698;
                case 119:
                    var1 = function arg0, arg1() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.withDelay;
                        var2 = _closure3_slot0;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var4)(var1, var0, var2);
                        return var0;
                    };
                    var3 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 4;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var5 = var5.withDelay;
                    var3.withDelay = var5;
                    var3.reduceMotion = var4;
                    var1.__closure = var3;
                    var3 = 15544853359686.0;
                    var1.__workletHash = var3;
                    var2 = _closure1_slot4;
                    var1.__initData = var2;
                    var0 = var1;
                case 202:
                    return var0;
            }
        };
        var0.value = var11;
        var2[8] = var0;
        var0 = {};
        var0.key = var1;
        var1 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.duration;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var0.key = var10;
        var10 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.delay;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var10;
        var1[1] = var0;
        var0 = {};
        var0.key = var9;
        var9 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.withCallback;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var9;
        var1[2] = var0;
        var0 = {};
        var0.key = var8;
        var8 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.reduceMotion;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var8;
        var1[3] = var0;
        var0 = {};
        var0.key = var7;
        var7 = function() {
            var0 = 300;
            return var0;
        };
        var0.value = var7;
        var1[4] = var0;
        var0 = {};
        var0.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.createInstance;
            var1 = var0.bind(var1)();
            var0 = var1.randomDelay;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var6;
        var1[5] = var0;
        var0 = {};
        var6 = 'build';
        var0.key = var6;
        var5 = function() {
            var1 = this;
            var0 = var1.createInstance;
            var1 = var0.bind(var1)();
            var0 = var1.build;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = undefined;
        var0 = var4.bind(var0)(var3, var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.BaseAnimationBuilder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3707, 3693, 3754, 3722]);