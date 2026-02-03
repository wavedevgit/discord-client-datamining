// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun33964: for (var _fun33964_ip = 0;;) switch (_fun33964_ip) {
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
                _fun33964_ip = 74;
                continue _fun33964;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BaseAnimationBuilder;
    var1 = function(arg0) { // Environment: var1
        var4 = function() {
            _fun33968: for (var _fun33968_ip = 0;;) switch (_fun33968_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun33968_ip = 69;
                        continue _fun33968
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun33968_ip = 105;
                    continue _fun33968;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var5 = {};
        var0 = 'easing';
        var5.key = var0;
        var1 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.easingV = var1;
            return var0;
        };
        var5.value = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var16 = 'rotate';
        var5.key = var16;
        var7 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.rotateV = var1;
            return var0;
        };
        var5.value = var7;
        var1[1] = var5;
        var5 = {};
        var15 = 'springify';
        var5.key = var15;
        var7 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.durationV = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.withSpring;
            var0.type = var1;
            return var0;
        };
        var5.value = var7;
        var1[2] = var5;
        var5 = {};
        var14 = 'dampingRatio';
        var5.key = var14;
        var7 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.dampingRatioV = var1;
            return var0;
        };
        var5.value = var7;
        var1[3] = var5;
        var5 = {};
        var13 = 'damping';
        var5.key = var13;
        var7 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.dampingV = var1;
            return var0;
        };
        var5.value = var7;
        var1[4] = var5;
        var5 = {};
        var12 = 'mass';
        var5.key = var12;
        var7 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.massV = var1;
            return var0;
        };
        var5.value = var7;
        var1[5] = var5;
        var5 = {};
        var11 = 'stiffness';
        var5.key = var11;
        var7 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.stiffnessV = var1;
            return var0;
        };
        var5.value = var7;
        var1[6] = var5;
        var5 = {};
        var10 = 'overshootClamping';
        var5.key = var10;
        var7 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.overshootClampingV = var1;
            return var0;
        };
        var5.value = var7;
        var1[7] = var5;
        var5 = {};
        var9 = 'restDisplacementThreshold';
        var5.key = var9;
        var7 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.restDisplacementThresholdV = var1;
            return var0;
        };
        var5.value = var7;
        var1[8] = var5;
        var5 = {};
        var8 = 'restSpeedThreshold';
        var5.key = var8;
        var7 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.restSpeedThresholdV = var1;
            return var0;
        };
        var5.value = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'withInitialValues';
        var5.key = var7;
        var17 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.initialValues = var1;
            return var0;
        };
        var5.value = var17;
        var1[10] = var5;
        var5 = {};
        var17 = 'getAnimationAndConfig';
        var5.key = var17;
        var17 = function() {
            _fun33980: for (var _fun33980_ip = 0;;) switch (_fun33980_ip) {
                case 0:
                    var1 = this;
                    var15 = function arg0, arg1() {
                        _fun33981: for (var _fun33981_ip = 0;;) switch (_fun33981_ip) {
                            case 0:
                                var2 = arg0;
                                if (!var2) {
                                    _fun33981_ip = 20;
                                    continue _fun33981
                                }
                            case 6:
                                var1 = _closure3_slot0;
                                var0 = arg1;
                                var1[var0] = var2;
                            case 20:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot1 = var15;
                    var6 = var1.durationV;
                    var14 = var1.easingV;
                    var5 = var1.rotateV;
                    var2 = var1.type;
                    if (var2) {
                        _fun33980_ip = 72;
                        continue _fun33980
                    }
                case 40:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.withTiming;
                    _fun33980_ip = 77;
                    continue _fun33980;
                case 72:
                    var2 = var1.type;
                case 77:
                    var4 = var1.dampingV;
                    var12 = var1.dampingRatioV;
                    var11 = var1.massV;
                    var10 = var1.stiffnessV;
                    var9 = var1.overshootClampingV;
                    var8 = var1.restDisplacementThresholdV;
                    var7 = var1.restSpeedThresholdV;
                    var1 = {};
                    var _closure3_slot0 = var1;
                    var16 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var3 = 5;
                    var3 = var13[var3];
                    var13 = undefined;
                    var3 = var16.bind(var13)(var3);
                    var3 = var3.withTiming;
                    if (!(var2 === var3)) {
                        _fun33980_ip = 169;
                        continue _fun33980
                    }
                case 159:
                    var3 = 'easing';
                    var3 = var15.bind(var13)(var14, var3);
                case 169:
                    var3 = {};
                    var13 = 'damping';
                    var3.variableName = var13;
                    var3.value = var4;
                    var4 = new Array(9);
                    var4[0] = var3;
                    var3 = {};
                    var13 = 'dampingRatio';
                    var3.variableName = var13;
                    var3.value = var12;
                    var4[1] = var3;
                    var3 = {};
                    var12 = 'mass';
                    var3.variableName = var12;
                    var3.value = var11;
                    var4[2] = var3;
                    var3 = {};
                    var11 = 'stiffness';
                    var3.variableName = var11;
                    var3.value = var10;
                    var4[3] = var3;
                    var3 = {};
                    var10 = 'overshootClamping';
                    var3.variableName = var10;
                    var3.value = var9;
                    var4[4] = var3;
                    var3 = {};
                    var9 = 'restDisplacementThreshold';
                    var3.variableName = var9;
                    var3.value = var8;
                    var4[5] = var3;
                    var3 = {};
                    var8 = 'restSpeedThreshold';
                    var3.variableName = var8;
                    var3.value = var7;
                    var4[6] = var3;
                    var3 = {};
                    var7 = 'duration';
                    var3.variableName = var7;
                    var3.value = var6;
                    var4[7] = var3;
                    var3 = {};
                    var6 = 'rotate';
                    var3.variableName = var6;
                    var3.value = var5;
                    var4[8] = var3;
                    var3 = var4.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var3 = _closure3_slot1;
                        var2 = var0.value;
                        var1 = var0.variableName;
                        var0 = undefined;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0 = var3.bind(var4)(var0);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var5.value = var17;
        var1[11] = var5;
        var5 = {};
        var5.key = var0;
        var0 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.easing;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var0;
        var0 = new Array(11);
        var0[0] = var5;
        var5 = {};
        var5.key = var16;
        var16 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.rotate;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var16;
        var0[1] = var5;
        var5 = {};
        var5.key = var15;
        var15 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.springify;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var15;
        var0[2] = var5;
        var5 = {};
        var5.key = var14;
        var14 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.dampingRatio;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var14;
        var0[3] = var5;
        var5 = {};
        var5.key = var13;
        var13 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.damping;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var13;
        var0[4] = var5;
        var5 = {};
        var5.key = var12;
        var12 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.mass;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var12;
        var0[5] = var5;
        var5 = {};
        var5.key = var11;
        var11 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.stiffness;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var11;
        var0[6] = var5;
        var5 = {};
        var5.key = var10;
        var10 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.overshootClamping;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var10;
        var0[7] = var5;
        var5 = {};
        var5.key = var9;
        var9 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.restDisplacementThreshold;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var9;
        var0[8] = var5;
        var5 = {};
        var5.key = var8;
        var8 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.restSpeedThreshold;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var8;
        var0[9] = var5;
        var5 = {};
        var5.key = var7;
        var6 = function arg0() {
            var1 = this;
            var0 = var1.createInstance;
            var2 = var0.bind(var1)();
            var1 = var2.withInitialValues;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var6;
        var0[10] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.ComplexAnimationBuilder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3793, 3792]);