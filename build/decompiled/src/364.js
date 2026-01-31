// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun5376: for (var _fun5376_ip = 0;;) switch (_fun5376_ip) {
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
                _fun5376_ip = 74;
                continue _fun5376;
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
    var0 = function arg0, arg1, arg2, arg3() {
        _fun5379: for (var _fun5379_ip = 0;;) switch (_fun5379_ip) {
            case 0:
                var4 = arg0;
                var6 = arg2;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot6;
                var3 = _closure1_slot5;
                var0 = 1;
                var2 = 3;
                var7 = var0 & var2;
                var0 = var4;
                if (!var7) {
                    _fun5379_ip = 44;
                    continue _fun5379
                }
            case 39:
                var0 = var4.prototype;
            case 44:
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = arg1;
                var4 = var5.bind(var4)(var3, var0, var6);
                var _closure2_slot1 = var4;
                var0 = 2;
                var2 = var0 & var2;
                var0 = var4;
                if (!var2) {
                    _fun5379_ip = 97;
                    continue _fun5379
                }
            case 78:
                var3 = 'function';
                var2 = typeof var4;
                var0 = var4;
                if (!(var3 === var2)) {
                    _fun5379_ip = 97;
                    continue _fun5379
                }
            case 92:
                var0 = function(arg0) { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3.apply;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
            case 97:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0, arg1, arg2() {
            _fun5382: for (var _fun5382_ip = 0;;) switch (_fun5382_ip) {
                case 0:
                    var8 = arg0;
                    var4 = arg1;
                    var3 = this;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var3, var1);
                    var11 = new Array(1);
                    var0 = arg2;
                    var11[0] = var0;
                    var0 = _closure1_slot5;
                    var10 = var0.bind(var5)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun5382_ip = 79;
                        continue _fun5382
                    }
                case 66:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var3, var11);
                    _fun5382_ip = 113;
                    continue _fun5382;
                case 79:
                    var6 = global;
                    var9 = var6.Reflect;
                    var7 = var9.construct;
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var5)(var3);
                    var6 = var6.constructor;
                    var0 = var7.bind(var9)(var10, var11, var6);
                case 113:
                    var0 = var1.bind(var5)(var3, var0);
                    var1 = false;
                    var0._warnedAboutDivideByZero = var1;
                    var7 = 0;
                    var1 = var7 === var4;
                    if (var1) {
                        _fun5382_ip = 180;
                        continue _fun5382
                    }
                case 136:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var3 = 6;
                    var3 = var9[var3];
                    var3 = var6.bind(var5)(var3);
                    var3 = var4 instanceof var3;
                    if (!var3) {
                        _fun5382_ip = 177;
                        continue _fun5382
                    }
                case 163:
                    var6 = var4.__getValue;
                    var6 = var6.bind(var4)();
                    var3 = var7 === var6;
                case 177:
                    var1 = var3;
                case 180:
                    if (!var1) {
                        _fun5382_ip = 207;
                        continue _fun5382
                    }
                case 183:
                    var1 = global;
                    var6 = var1.console;
                    var3 = var6.error;
                    var1 = 'Detected potential division by zero in AnimatedDivision';
                    var1 = var3.bind(var6)(var1);
                case 207:
                    var6 = 'number';
                    var3 = typeof var8;
                    var1 = var8;
                    if (!(var6 === var3)) {
                        _fun5382_ip = 264;
                        continue _fun5382
                    }
                case 221:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var3 = 7;
                    var3 = var9[var3];
                    var3 = var7.bind(var5)(var3);
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var15 = var7;
                    var14 = var8;
                    var3 = new var15[var3](var14, var13);
                    var1 = var3 instanceof Object ? var3 : var7;
                case 264:
                    var0._a = var1;
                    var3 = typeof var4;
                    var1 = var4;
                    if (!(var6 === var3)) {
                        _fun5382_ip = 323;
                        continue _fun5382
                    }
                case 280:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 7;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var15 = var3;
                    var14 = var4;
                    var2 = new var15[var2](var14, var13);
                    var1 = var2 instanceof Object ? var2 : var3;
                case 323:
                    var0._b = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = '__makeNative';
        var4.key = var0;
        var0 = function arg0() {
            var3 = arg0;
            var6 = this;
            var1 = var6._a;
            var0 = var1.__makeNative;
            var0 = var0.bind(var1)(var3);
            var1 = var6._b;
            var0 = var1.__makeNative;
            var0 = var0.bind(var1)(var3);
            var5 = _closure1_slot9;
            var10 = _closure2_slot0;
            var0 = undefined;
            var9 = '__makeNative';
            var7 = 3;
            var11 = undefined;
            var8 = var6;
            var2 = var11[var5](var10, var9, var8, var7, var6);
            var1 = new Array(1);
            var1[0] = var3;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = '__getValue';
        var4.key = var6;
        var6 = function() {
            _fun5384: for (var _fun5384_ip = 0;;) switch (_fun5384_ip) {
                case 0:
                    var3 = this;
                    var1 = var3._a;
                    var0 = var1.__getValue;
                    var2 = var0.bind(var1)();
                    var1 = var3._b;
                    var0 = var1.__getValue;
                    var0 = var0.bind(var1)();
                    var1 = 0;
                    if (!(var1 !== var0)) {
                        _fun5384_ip = 55;
                        continue _fun5384
                    }
                case 41:
                    var4 = false;
                    var3._warnedAboutDivideByZero = var4;
                    var0 = var2 / var0;
                    _fun5384_ip = 100;
                    continue _fun5384;
                case 55:
                    var2 = var3._warnedAboutDivideByZero;
                    var0 = 0;
                    if (var2) {
                        _fun5384_ip = 100;
                        continue _fun5384
                    }
                case 66:
                    var2 = global;
                    var5 = var2.console;
                    var4 = var5.error;
                    var2 = 'Detected division by zero in AnimatedDivision';
                    var2 = var4.bind(var5)(var2);
                    var2 = true;
                    var3._warnedAboutDivideByZero = var2;
                    var0 = 0;
                case 100:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'interpolate';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var0 = var3.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var3
                }
            });
            var5 = this;
            var4 = arg0;
            var6 = var1;
            var0 = new var6[var3](var5, var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = '__attach';
        var4.key = var6;
        var6 = function() {
            var5 = this;
            var1 = var5._a;
            var0 = var1.__addChild;
            var0 = var0.bind(var1)(var5);
            var1 = var5._b;
            var0 = var1.__addChild;
            var0 = var0.bind(var1)(var5);
            var4 = _closure1_slot9;
            var9 = _closure2_slot0;
            var0 = undefined;
            var8 = '__attach';
            var6 = 3;
            var10 = undefined;
            var7 = var5;
            var2 = var10[var4](var9, var8, var7, var6, var5);
            var1 = new Array(0);
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = '__detach';
        var4.key = var6;
        var6 = function() {
            var5 = this;
            var1 = var5._a;
            var0 = var1.__removeChild;
            var0 = var0.bind(var1)(var5);
            var1 = var5._b;
            var0 = var1.__removeChild;
            var0 = var0.bind(var1)(var5);
            var4 = _closure1_slot9;
            var9 = _closure2_slot0;
            var0 = undefined;
            var8 = '__detach';
            var6 = 3;
            var10 = undefined;
            var7 = var5;
            var2 = var10[var4](var9, var8, var7, var6, var5);
            var1 = new Array(0);
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = '__getNativeConfig';
        var4.key = var6;
        var5 = function() {
            var2 = this;
            var0 = {};
            var1 = 'division';
            var0.type = var1;
            var3 = var2._a;
            var1 = var3.__getNativeTag;
            var3 = var1.bind(var3)();
            var1 = new Array(2);
            var1[0] = var3;
            var4 = var2._b;
            var3 = var4.__getNativeTag;
            var3 = var3.bind(var4)();
            var1[1] = var3;
            var0.input = var1;
            var1 = var2.__getDebugID;
            var1 = var1.bind(var2)();
            var0.debugID = var1;
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 359, 348, 355, 358]);