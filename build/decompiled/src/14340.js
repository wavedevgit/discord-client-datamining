// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun111911: for (var _fun111911_ip = 0;;) switch (_fun111911_ip) {
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
            case 72: // try_end0
                _fun111911_ip = 76;
                continue _fun111911;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = ['fill', 'prefill'];
    var _closure1_slot0 = var0;
    var4 = global;
    var6 = var4.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var10[var0];
    var0 = undefined;
    var3 = var9.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 1;
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var10[var3];
    var5 = var9.bind(var0)(var3);
    var3 = 7;
    var3 = var10[var3];
    var3 = var7.bind(var0)(var3);
    var11 = var3.Animated;
    var _closure1_slot7 = var11;
    var6 = var3.Easing;
    var3 = 8;
    var3 = var10[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var8 = var11.createAnimatedComponent;
    var3 = 9;
    var7 = var10[var3];
    var7 = var9.bind(var0)(var7);
    var7 = var8.bind(var11)(var7);
    var _closure1_slot9 = var7;
    var5 = var5.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: AnimatedCircularProgress, environment: var5
            _fun111915: for (var _fun111915_ip = 0;;) switch (_fun111915_ip) {
                case 0:
                    var2 = arg0;
                    var6 = this;
                    var _closure3_slot0 = var2;
                    var0 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var6, var3);
                    var11 = new Array(1);
                    var11[0] = var2;
                    var0 = _closure1_slot5;
                    var10 = var0.bind(var5)(var3);
                    var3 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun111915_ip = 79;
                        continue _fun111915
                    }
                case 66:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var6, var11);
                    _fun111915_ip = 113;
                    continue _fun111915;
                case 79:
                    var7 = global;
                    var9 = var7.Reflect;
                    var8 = var9.construct;
                    var7 = _closure1_slot5;
                    var7 = var7.bind(var5)(var6);
                    var7 = var7.constructor;
                    var0 = var8.bind(var9)(var10, var11, var7);
                case 113:
                    var0 = var3.bind(var5)(var6, var0);
                    var3 = {};
                    var4 = _closure1_slot7;
                    var6 = var4.Value;
                    var14 = var2.prefill;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var15 = var5;
                    var4 = new var15[var6](var14, var13);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var3.fillAnimation = var4;
                    var0.state = var3;
                    var2 = var2.onFillChange;
                    if (!var2) {
                        _fun111915_ip = 206;
                        continue _fun111915
                    }
                case 177:
                    var2 = var0.state;
                    var3 = var2.fillAnimation;
                    var2 = var3.addListener;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var2 = var0.value;
                        var1 = _closure3_slot0;
                        var0 = var1.onFillChange;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                case 206:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() { // Original name: componentDidMount, environment: var5
            var1 = this;
            var0 = var1.animate;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: componentDidUpdate, environment: var5
            _fun111918: for (var _fun111918_ip = 0;;) switch (_fun111918_ip) {
                case 0:
                    var1 = this;
                    var0 = arg0;
                    var2 = var0.fill;
                    var0 = var1.props;
                    var0 = var0.fill;
                    if (!(var2 !== var0)) {
                        _fun111918_ip = 37;
                        continue _fun111918
                    }
                case 27:
                    var0 = var1.animate;
                    var0 = var0.bind(var1)();
                case 37:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'reAnimate';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: reAnimate, environment: var5
            var3 = this;
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var1 = arg3;
            var _closure3_slot2 = var1;
            var _closure3_slot3 = var3;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure1_slot7;
            var6 = var4.Value;
            var4 = var6.prototype;
            var5 = Object.create(var4, {
                constructor: {
                    value: var6
                }
            });
            var8 = arg0;
            var9 = var5;
            var4 = new var9[var6](var8, var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var1.fillAnimation = var4;
            var0 = function() { // Environment: var0
                var4 = _closure3_slot3;
                var3 = var4.animate;
                var2 = _closure3_slot0;
                var1 = _closure3_slot1;
                var0 = _closure3_slot2;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'animate';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: animate, environment: var5
            _fun111921: for (var _fun111921_ip = 0;;) switch (_fun111921_ip) {
                case 0:
                    var8 = arg0;
                    var6 = arg1;
                    var7 = arg2;
                    var1 = this;
                    var0 = 0;
                    if (!(!(var8 >= var0))) {
                        _fun111921_ip = 29;
                        continue _fun111921
                    }
                case 18:
                    var0 = var1.props;
                    var8 = var0.fill;
                case 29:
                    if (var6) {
                        _fun111921_ip = 42;
                        continue _fun111921
                    }
                case 32:
                    var0 = var1.props;
                    var6 = var0.duration;
                case 42:
                    if (var7) {
                        _fun111921_ip = 56;
                        continue _fun111921
                    }
                case 45:
                    var0 = var1.props;
                    var7 = var0.easing;
                case 56:
                    var0 = var1.props;
                    var9 = var0.useNativeDriver;
                    var0 = var1.props;
                    var5 = var0.delay;
                    var4 = _closure1_slot7;
                    var3 = var4.timing;
                    var0 = var1.state;
                    var2 = var0.fillAnimation;
                    var0 = {};
                    var0.useNativeDriver = var9;
                    var0.toValue = var8;
                    var0.easing = var7;
                    var0.duration = var6;
                    var0.delay = var5;
                    var0 = var3.bind(var4)(var2, var0);
                    var2 = var0.start;
                    var1 = var1.props;
                    var1 = var1.onAnimationComplete;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'animateColor';
        var4.key = var6;
        var6 = function() { // Original name: animateColor, environment: var5
            _fun111922: for (var _fun111922_ip = 0;;) switch (_fun111922_ip) {
                case 0:
                    var5 = this;
                    var0 = var5.props;
                    var0 = var0.tintColorSecondary;
                    if (var0) {
                        _fun111922_ip = 30;
                        continue _fun111922
                    }
                case 17:
                    var0 = var5.props;
                    var0 = var0.tintColor;
                    _fun111922_ip = 108;
                    continue _fun111922;
                case 30:
                    var1 = var5.state;
                    var3 = var1.fillAnimation;
                    var2 = var3.interpolate;
                    var1 = {};
                    var4 = [0, 100];
                    var1.inputRange = var4;
                    var4 = var5.props;
                    var6 = var4.tintColor;
                    var4 = new Array(2);
                    var4[0] = var6;
                    var5 = var5.props;
                    var5 = var5.tintColorSecondary;
                    var4[1] = var5;
                    var1.outputRange = var4;
                    var0 = var2.bind(var3)(var1);
                case 108:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: render, environment: var5
            var8 = this;
            var4 = var8.props;
            var0 = var4.fill;
            var0 = var4.prefill;
            var2 = _closure1_slot1;
            var1 = _closure1_slot0;
            var3 = undefined;
            var7 = var2.bind(var3)(var4, var1);
            var2 = _closure1_slot8;
            var1 = _closure1_slot9;
            var0 = global;
            var6 = var0.Object;
            var5 = var6.assign;
            var4 = {};
            var0 = var8.state;
            var0 = var0.fillAnimation;
            var4.fill = var0;
            var0 = var8.animateColor;
            var0 = var0.bind(var8)();
            var4.tintColor = var0;
            var0 = {};
            var0 = var5.bind(var6)(var0, var7, var4);
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var5);
    var8 = var4.Object;
    var7 = var8.assign;
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var5 = var3.propTypes;
    var4 = {};
    var3 = 10;
    var11 = var10[var3];
    var11 = var9.bind(var0)(var11);
    var11 = var11.number;
    var4.prefill = var11;
    var11 = var10[var3];
    var11 = var9.bind(var0)(var11);
    var11 = var11.number;
    var4.duration = var11;
    var11 = var10[var3];
    var11 = var9.bind(var0)(var11);
    var11 = var11.func;
    var4.easing = var11;
    var11 = var10[var3];
    var11 = var9.bind(var0)(var11);
    var11 = var11.func;
    var4.onAnimationComplete = var11;
    var11 = var10[var3];
    var11 = var9.bind(var0)(var11);
    var11 = var11.bool;
    var4.useNativeDriver = var11;
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var3 = var3.number;
    var4.delay = var3;
    var3 = {};
    var3 = var7.bind(var8)(var3, var5, var4);
    var1.propTypes = var3;
    var3 = {
        'duration': 500,
        'easing': null,
        'prefill': 0,
        'useNativeDriver': false,
        'delay': 0
    };
    var5 = var6.out;
    var4 = var6.ease;
    var4 = var5.bind(var6)(var4);
    var3.easing = var4;
    var1.defaultProps = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 31, 27, 33, 14339, 5105]);