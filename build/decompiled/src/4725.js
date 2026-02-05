// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var0 = function() {
        _fun43701: for (var _fun43701_ip = 0;;) switch (_fun43701_ip) {
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
                _fun43701_ip = 74;
                continue _fun43701;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = ['maskElement', 'children'];
    var _closure1_slot0 = var0;
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
    var _closure1_slot1 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var4 = var7[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot7 = var3;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var5 = var4.View;
    var _closure1_slot8 = var5;
    var5 = var4.StyleSheet;
    var _closure1_slot9 = var5;
    var5 = var4.requireNativeComponent;
    var4 = 8;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var6 = var4.jsx;
    var _closure1_slot10 = var6;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 'RNCMaskedView';
    var4 = var5.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var3 = var3.Component;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun43705: for (var _fun43705_ip = 0;;) switch (_fun43705_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var8 = undefined;
                    var5 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var2)(var3, var1);
                    var5 = arguments.length;
                    var6 = global;
                    var1 = var6.Array;
                    var7 = var1.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var1
                        }
                    });
                    var13 = var7;
                    var12 = var5;
                    var1 = new var13[var1](var12, var11);
                    var7 = var1 instanceof Object ? var1 : var7;
                    var1 = 0;
                    var9 = var1 < var5;
                    if (!var9) {
                        _fun43705_ip = 85;
                        continue _fun43705
                    }
                case 70:
                    var9 = arguments[var1];
                    var7[var1] = var9;
                    var1 = var1 + 1;
                    if (var1 < var5) {
                        _fun43705_ip = 70;
                        continue _fun43705
                    }
                case 85:
                    var1 = _closure2_slot0;
                    var5 = new Array(0);
                    var0 = var5.concat;
                    var5 = var0.bind(var5)(var7);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun43705_ip = 140;
                        continue _fun43705
                    }
                case 127:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var5);
                    _fun43705_ip = 179;
                    continue _fun43705;
                case 140:
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    if (var5) {
                        _fun43705_ip = 158;
                        continue _fun43705
                    }
                case 154:
                    var5 = new Array(0);
                case 158:
                    var4 = _closure1_slot5;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var6.bind(var7)(var8, var5, var4);
                case 179:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = false;
                    var0._hasWarnedInvalidRenderMask = var1;
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
            _fun43706: for (var _fun43706_ip = 0;;) switch (_fun43706_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.props;
                    var12 = var3.maskElement;
                    var9 = var3.children;
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot0;
                    var4 = undefined;
                    var8 = var2.bind(var4)(var3, var0);
                    var2 = _closure1_slot7;
                    var0 = var2.isValidElement;
                    var0 = var0.bind(var2)(var12);
                    if (var0) {
                        _fun43706_ip = 141;
                        continue _fun43706
                    }
                case 56:
                    var0 = var1._hasWarnedInvalidRenderMask;
                    if (var0) {
                        _fun43706_ip = 97;
                        continue _fun43706
                    }
                case 65:
                    var0 = global;
                    var3 = var0.console;
                    var2 = var3.warn;
                    var0 = 'MaskedView: Invalid `maskElement` prop was passed to MaskedView. Expected a React Element. No mask will render.';
                    var0 = var2.bind(var3)(var0);
                    var0 = true;
                    var1._hasWarnedInvalidRenderMask = var0;
                case 97:
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot8;
                    var0 = global;
                    var6 = var0.Object;
                    var5 = var6.assign;
                    var3 = {};
                    var3.children = var9;
                    var0 = {};
                    var0 = var5.bind(var6)(var0, var8, var3);
                    var0 = var2.bind(var4)(var1, var0);
                    _fun43706_ip = 238;
                    continue _fun43706;
                case 141:
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot12;
                    var1 = global;
                    var7 = var1.Object;
                    var6 = var7.assign;
                    var5 = {};
                    var11 = _closure1_slot10;
                    var10 = _closure1_slot8;
                    var1 = {};
                    var14 = 'none';
                    var1.pointerEvents = var14;
                    var13 = _closure1_slot9;
                    var13 = var13.absoluteFill;
                    var1.style = var13;
                    var1.children = var12;
                    var10 = var11.bind(var4)(var10, var1);
                    var1 = new Array(2);
                    var1[0] = var10;
                    var1[1] = var9;
                    var5.children = var1;
                    var1 = {};
                    var1 = var6.bind(var7)(var1, var8, var5);
                    var0 = var3.bind(var4)(var2, var1);
                case 238:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 31, 27, 33]);