// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun45052: for (var _fun45052_ip = 0;;) switch (_fun45052_ip) {
        case 0:
            var6 = require;
            var4 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var7;
            var0 = function() {
                _fun45053: for (var _fun45053_ip = 0;;) switch (_fun45053_ip) {
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
                        _fun45053_ip = 74;
                        continue _fun45053;
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
            var0 = global;
            var8 = var0.Object;
            var5 = var8.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var8)(var2, var0, var3);
            var0 = 0;
            var3 = var7[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var _closure1_slot2 = var3;
            var3 = 1;
            var3 = var7[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 2;
            var3 = var7[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 3;
            var3 = var7[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 4;
            var3 = var7[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 5;
            var3 = var7[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = var3.Component;
            var1 = function(arg0) { // Environment: var1
                var3 = function() {
                    _fun45057: for (var _fun45057_ip = 0;;) switch (_fun45057_ip) {
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
                            var0 = _closure1_slot8;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun45057_ip = 69;
                                continue _fun45057
                            }
                        case 51:
                            var6 = var8.apply;
                            var4 = arguments;
                            var0 = var4;
                            var0 = var6.bind(var8)(var3, var0);
                            _fun45057_ip = 105;
                            continue _fun45057;
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
                var _closure2_slot0 = var3;
                var5 = _closure1_slot6;
                var2 = undefined;
                var4 = arg0;
                var4 = var5.bind(var2)(var3, var4);
                var1 = _closure1_slot3;
                var4 = {};
                var5 = 'render';
                var4.key = var5;
                var0 = function() {
                    _fun45058: for (var _fun45058_ip = 0;;) switch (_fun45058_ip) {
                        case 0: // try_start_0
                            var4 = _closure1_slot7;
                            var2 = var4.Children;
                            var1 = var2.only;
                            var0 = this;
                            var0 = var0.props;
                            var0 = var0.children;
                            var3 = var1.bind(var2)(var0);
                            var2 = var4.cloneElement;
                            var1 = {};
                            var0 = false;
                            var1.collapsable = var0;
                            var0 = var3.props;
                            var0 = var0.children;
                            var0 = var2.bind(var4)(var3, var1, var0);
                        case 69: // try_end0
                            return var0;
                        case 71: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var0 = global;
                            var2 = var0.Error;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.tagMessage;
                            var0 = 'GestureDetector got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view.';
                            var7 = var1.bind(var3)(var0);
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var8 = var1;
                            var0 = new var8[var2](var7, var6);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var4.value = var0;
                var0 = new Array(1);
                var0[0] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var3 = var1.bind(var0)(var3);
            var1 = 7;
            var4 = var7[var1];
            var4 = var6.bind(var0)(var4);
            var4 = var4.Reanimated;
            var5 = null;
            var8 = var5 == var4;
            var4 = undefined;
            if (var8) {
                _fun45052_ip = 245;
                continue _fun45052
            }
        case 205:
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.Reanimated;
            var6 = var1.default;
            var1 = var5 == var6;
            var4 = undefined;
            if (var1) {
                _fun45052_ip = 245;
                continue _fun45052
            }
        case 234:
            var1 = var6.createAnimatedComponent;
            var4 = var1.bind(var6)(var3);
        case 245:
            var1 = var3;
            if (!(var5 != var4)) {
                _fun45052_ip = 255;
                continue _fun45052
            }
        case 252:
            var1 = var4;
        case 255:
            var2.Wrap = var3;
            var2.AnimatedWrap = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 4967, 4970]);