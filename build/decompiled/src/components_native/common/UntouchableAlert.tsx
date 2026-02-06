// components_native/common/UntouchableAlert.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun84823: for (var _fun84823_ip = 0;;) switch (_fun84823_ip) {
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
                _fun84823_ip = 76;
                continue _fun84823;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.View;
    var _closure1_slot7 = var7;
    var7 = var6.ActivityIndicator;
    var _closure1_slot8 = var7;
    var8 = var6.StyleSheet;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot9 = var6;
    var7 = var8.create;
    var6 = {};
    var9 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var6.container = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot10 = var6;
    var3 = var3.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun84827: for (var _fun84827_ip = 0;;) switch (_fun84827_ip) {
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
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun84827_ip = 69;
                        continue _fun84827
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun84827_ip = 105;
                    continue _fun84827;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() {
            _fun84828: for (var _fun84828_ip = 0;;) switch (_fun84828_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.props;
                    var0 = var0.loading;
                    if (var0) {
                        _fun84828_ip = 27;
                        continue _fun84828
                    }
                case 17:
                    var0 = var1.closeAlert;
                    var0 = var0.bind(var1)();
                case 27:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function arg0() {
            _fun84829: for (var _fun84829_ip = 0;;) switch (_fun84829_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.props;
                    var2 = var0.loading;
                    var0 = arg0;
                    var0 = var0.loading;
                    var0 = var0 === var2;
                    if (var0) {
                        _fun84829_ip = 33;
                        continue _fun84829
                    }
                case 30:
                    var0 = var2;
                case 33:
                    if (var0) {
                        _fun84829_ip = 46;
                        continue _fun84829
                    }
                case 36:
                    var0 = var1.closeAlert;
                    var0 = var0.bind(var1)();
                case 46:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'closeAlert';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var _closure3_slot0 = var0;
            var0 = global;
            var2 = var0.setImmediate;
            var0 = undefined;
            var1 = function() { // Environment: var1
                var0 = _closure3_slot0;
                var1 = var0.props;
                var0 = var1.onClose;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun84832: for (var _fun84832_ip = 0;;) switch (_fun84832_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var1 = var0.loading;
                    var0 = null;
                    if (!var1) {
                        _fun84832_ip = 118;
                        continue _fun84832
                    }
                case 19:
                    var4 = _closure1_slot9;
                    var3 = _closure1_slot7;
                    var2 = {};
                    var5 = _closure1_slot10;
                    var5 = var5.container;
                    var2.style = var5;
                    var6 = _closure1_slot8;
                    var5 = {
                        'animating': true,
                        'color': null,
                        'size': 'large'
                    };
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 8;
                    var7 = var7[var1];
                    var1 = undefined;
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.unsafe_rawColors;
                    var7 = var7.BRAND_500;
                    var5.color = var7;
                    var5 = var4.bind(var1)(var6, var5);
                    var2.children = var5;
                    var0 = var4.bind(var1)(var3, var2);
                case 118:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/UntouchableAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 33, 671, 2]);