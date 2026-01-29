// uikit-native/ProgressCircle.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun80022: for (var _fun80022_ip = 0;;) switch (_fun80022_ip) {
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
                _fun80022_ip = 76;
                continue _fun80022;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.View;
    var _closure1_slot8 = var8;
    var9 = var6.StyleSheet;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.jsx;
    var _closure1_slot9 = var8;
    var6 = var6.jsxs;
    var _closure1_slot10 = var6;
    var8 = var9.create;
    var6 = {};
    var10 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var6.progressCircle = var10;
    var10 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%'
    };
    var6.circle = var10;
    var10 = {
        'position': 'relative',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var6.circleOverlay = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot11 = var6;
    var3 = var3.Component;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: ProgressCircle, environment: var5
            _fun80026: for (var _fun80026_ip = 0;;) switch (_fun80026_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun80026_ip = 69;
                        continue _fun80026
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun80026_ip = 105;
                    continue _fun80026;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'renderCircle';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = this;
            var0 = var0.props;
            var5 = var0.percent;
            var6 = var0.color;
            var12 = var0.size;
            var13 = var0.strokeWidth;
            var10 = global;
            var2 = var10.Math;
            var1 = var2.min;
            var4 = var10.Math;
            var3 = var4.max;
            var0 = 0;
            var0 = var3.bind(var4)(var5, var0);
            var9 = 100;
            var7 = var1.bind(var2)(var0, var9);
            var0 = var12 - var13;
            var11 = 2;
            var14 = var0 / var11;
            var0 = var10.Math;
            var0 = var0.PI;
            var0 = var14 * var0;
            var8 = var0 * var11;
            var3 = _closure1_slot9;
            var1 = _closure1_slot1;
            var16 = _closure1_slot2;
            var4 = 8;
            var0 = var16[var4];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var15 = var10.HermesInternal;
            var18 = var15.concat;
            var17 = '0 0 ';
            var15 = ' ';
            var17 = var18.bind(var17)(var12, var15, var12);
            var0.viewBox = var17;
            var17 = _closure1_slot11;
            var17 = var17.circle;
            var0.style = var17;
            var5 = _closure1_slot0;
            var4 = var16[var4];
            var4 = var5.bind(var2)(var4);
            var5 = var4.Circle;
            var4 = {};
            var16 = 'none';
            var4.fill = var16;
            var16 = var12 / var11;
            var4.cx = var16;
            var16 = var12 / var11;
            var4.cy = var16;
            var4.r = var14;
            var4.strokeWidth = var13;
            var13 = 'round';
            var4.strokeLinecap = var13;
            var22 = var12 / var11;
            var20 = var12 / var11;
            var10 = var10.HermesInternal;
            var12 = var10.concat;
            var23 = 'rotate(-90 ';
            var19 = ')';
            var21 = var15;
            var10 = var23[var12](var22, var21, var20, var19, var18);
            var4.transform = var10;
            var4.stroke = var6;
            var6 = {};
            var6.strokeDasharray = var8;
            var9 = var7 / var9;
            var7 = 1;
            var7 = var7 - var9;
            var7 = var7 * var8;
            var6.strokeDashoffset = var7;
            var4.style = var6;
            var4 = var3.bind(var2)(var5, var4);
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun80028: for (var _fun80028_ip = 0;;) switch (_fun80028_ip) {
                case 0:
                    var4 = this;
                    var0 = var4.props;
                    var6 = var0.style;
                    var5 = var0.children;
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var0 = _closure1_slot11;
                    var7 = var0.progressCircle;
                    var0 = new Array(2);
                    var0[0] = var7;
                    var0[1] = var6;
                    var1.style = var0;
                    var0 = var4.renderCircle;
                    var4 = var0.bind(var4)();
                    var0 = new Array(2);
                    var0[0] = var4;
                    var4 = null;
                    var6 = var4 != var5;
                    if (!var6) {
                        _fun80028_ip = 122;
                        continue _fun80028
                    }
                case 86:
                    var8 = _closure1_slot9;
                    var7 = _closure1_slot8;
                    var6 = {};
                    var9 = _closure1_slot11;
                    var9 = var9.circleOverlay;
                    var6.style = var9;
                    var6.children = var5;
                    var5 = undefined;
                    var4 = var8.bind(var5)(var7, var6);
                case 122:
                    var0[1] = var4;
                    var1.children = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = {
        'size': 20,
        'strokeWidth': 0.9
    };
    var6 = 9;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.unsafe_rawColors;
    var6 = var6.GUILD_BOOSTING_PINK;
    var3.color = var6;
    var1.defaultProps = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/ProgressCircle.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 33, 5417, 671, 2]);