// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun97675: for (var _fun97675_ip = 0;;) switch (_fun97675_ip) {
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
                _fun97675_ip = 76;
                continue _fun97675;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var4);
    var2.default = var0;
    var3 = 5;
    var3 = var6[var3];
    var4 = var5.bind(var0)(var3);
    var3 = function(arg0, arg1) { // Original name: _interopRequireWildcard, environment: var1
        _fun97678: for (var _fun97678_ip = 0;;) switch (_fun97678_ip) {
            case 0:
                var3 = arg0;
                var13 = global;
                var0 = var13.WeakMap;
                var12 = undefined;
                var4 = 'function';
                var0 = typeof var0;
                var2 = undefined;
                if (!(var4 === var0)) {
                    _fun97678_ip = 71;
                    continue _fun97678
                }
            case 26:
                var0 = var13.WeakMap;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var22 = var1;
                var0 = new var22[var0](var21);
                var2 = var0 instanceof Object ? var0 : var1;
                var5 = var13.WeakMap;
                var1 = var5.prototype;
                var22 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var1 = new var22[var5](var21);
            case 71:
                if (!var3) {
                    _fun97678_ip = 89;
                    continue _fun97678
                }
            case 74:
                var1 = var3.__esModule;
                var0 = var3;
                if (var1) {
                    _fun97678_ip = 330;
                    continue _fun97678
                }
            case 89:
                var1 = null;
                var11 = Object.create(var1);
                var11.default = var3;
                var0 = var11;
                if (!(var1 !== var3)) {
                    _fun97678_ip = 330;
                    continue _fun97678
                }
            case 108:
                var1 = typeof var3;
                var5 = 'object';
                if (!(var5 !== var1)) {
                    _fun97678_ip = 129;
                    continue _fun97678
                }
            case 119:
                var0 = var11;
                if (!(var4 === var1)) {
                    _fun97678_ip = 330;
                    continue _fun97678
                }
            case 129:
                if (!var2) {
                    _fun97678_ip = 159;
                    continue _fun97678
                }
            case 132:
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun97678_ip = 320;
                    continue _fun97678
                }
            case 148:
                var1 = var2.set;
                var1 = var1.bind(var2)(var3, var11);
            case 159:
                var9 = var3;
                var5 = 'default';
                var4 = var2;
                var1 = undefined;
                var0 = var11;
                for (var6 in var9)
                    case 185: {
                        var0 = var11;
                        case 200: var16 = var6;
                        var14 = var5 !== var16;
                        if (!var14) {
                            _fun97678_ip = 229;
                            continue _fun97678
                        }
                        case 210: var15 = {};
                        var17 = var15.hasOwnProperty;
                        var15 = var17.call;
                        var14 = var15.bind(var17)(var3, var16);
                        case 229: if (!var14) {
                            _fun97678_ip = 185;
                            continue _fun97678
                        }
                        case 232: var14 = var13.Object;
                        var15 = var14.defineProperty;
                        var14 = var15;
                        if (!var14) {
                            _fun97678_ip = 267;
                            continue _fun97678
                        }
                        case 249: var18 = var13.Object;
                        var17 = var18.getOwnPropertyDescriptor;
                        var14 = var17.bind(var18)(var3, var16);
                        case 267: if (!var14) {
                            _fun97678_ip = 286;
                            continue _fun97678
                        }
                        case 270: var17 = var14.get;
                        if (var17) {
                            _fun97678_ip = 302;
                            continue _fun97678
                        }
                        case 278: var17 = var14.set;
                        if (var17) {
                            _fun97678_ip = 302;
                            continue _fun97678
                        }
                        case 286: var17 = var3[var16];
                        var11[var16] = var17;
                        var4 = var15;
                        var1 = var14;
                        _fun97678_ip = 185;
                        continue _fun97678;
                        case 302: var16 = var15.bind(var12)(var11, var16, var14);
                        var4 = var15;
                        var1 = var14;
                        _fun97678_ip = 185;
                        continue _fun97678;
                        case 320: var1 = var2.get;
                        var0 = var1.bind(var2)(var3);
                    }
            case 330:
                return var0;
        }
    };
    var3 = var3.bind(var0)(var4);
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var3 = var3.Component;
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: StorybookSwitcher, environment: var0
            _fun97680: for (var _fun97680_ip = 0;;) switch (_fun97680_ip) {
                case 0:
                    var2 = arg0;
                    var5 = this;
                    var0 = _closure1_slot0;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var5, var3);
                    var10 = new Array(1);
                    var10[0] = var2;
                    var0 = _closure1_slot3;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot2;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun97680_ip = 75;
                        continue _fun97680
                    }
                case 62:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun97680_ip = 109;
                    continue _fun97680;
                case 75:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot3;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 109:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = {};
                    var4 = false;
                    var3.showStorybook = var4;
                    var0.state = var3;
                    var4 = var2.emitter;
                    var3 = var4.on;
                    var2 = 'storybook';
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {};
                        var3 = arg0;
                        var0.showStorybook = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot1;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() { // Original name: render, environment: var0
            _fun97682: for (var _fun97682_ip = 0;;) switch (_fun97682_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.state;
                    var5 = var1.showStorybook;
                    var0 = var0.props;
                    var7 = var0.storybookUi;
                    var0 = var0.children;
                    var1 = _closure1_slot6;
                    var3 = var1.jsx;
                    var1 = _closure1_slot5;
                    var2 = var1.View;
                    var1 = {};
                    var6 = {};
                    var8 = 1;
                    var6.flex = var8;
                    var1.style = var6;
                    if (!var5) {
                        _fun97682_ip = 88;
                        continue _fun97682
                    }
                case 69:
                    var4 = _closure1_slot6;
                    var6 = var4.jsx;
                    var5 = undefined;
                    var4 = {};
                    var0 = var6.bind(var5)(var7, var4);
                case 88:
                    var1.children = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 33]);