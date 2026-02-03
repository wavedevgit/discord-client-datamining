// components_native/common/LottieAnimationView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun54601: for (var _fun54601_ip = 0;;) switch (_fun54601_ip) {
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
                _fun54601_ip = 74;
                continue _fun54601;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var0 = ['source', 'style', 'collapsable'];
    var _closure1_slot2 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.View;
    var _closure1_slot9 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun54605: for (var _fun54605_ip = 0;;) switch (_fun54605_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot6;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun54605_ip = 86;
                        continue _fun54605
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun54605_ip = 120;
                    continue _fun54605;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = null;
                    var0.animation = var2;
                    var1 = function(arg0) { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1.animation = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0.setRef = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'play';
        var4.key = var0;
        var0 = function() {
            _fun54607: for (var _fun54607_ip = 0;;) switch (_fun54607_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.animation;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun54607_ip = 31;
                        continue _fun54607
                    }
                case 15:
                    var1 = var0.animation;
                    var0 = var1.play;
                    var0 = var0.bind(var1)();
                case 31:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'reset';
        var4.key = var6;
        var6 = function() {
            _fun54608: for (var _fun54608_ip = 0;;) switch (_fun54608_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.animation;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun54608_ip = 31;
                        continue _fun54608
                    }
                case 15:
                    var1 = var0.animation;
                    var0 = var1.reset;
                    var0 = var0.bind(var1)();
                case 31:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'pause';
        var4.key = var6;
        var6 = function() {
            _fun54609: for (var _fun54609_ip = 0;;) switch (_fun54609_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.animation;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun54609_ip = 31;
                        continue _fun54609
                    }
                case 15:
                    var1 = var0.animation;
                    var0 = var1.pause;
                    var0 = var0.bind(var1)();
                case 31:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'resume';
        var4.key = var6;
        var6 = function() {
            _fun54610: for (var _fun54610_ip = 0;;) switch (_fun54610_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.animation;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun54610_ip = 31;
                        continue _fun54610
                    }
                case 15:
                    var1 = var0.animation;
                    var0 = var1.resume;
                    var0 = var0.bind(var1)();
                case 31:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun54611: for (var _fun54611_ip = 0;;) switch (_fun54611_ip) {
                case 0:
                    var10 = this;
                    var2 = var10.props;
                    var7 = var2.source;
                    var8 = var2.style;
                    var5 = var2.collapsable;
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot2;
                    var3 = undefined;
                    var6 = var1.bind(var3)(var2, var0);
                    var2 = 'object';
                    var1 = typeof var7;
                    var0 = undefined;
                    if (!(var2 === var1)) {
                        _fun54611_ip = 85;
                        continue _fun54611
                    }
                case 56:
                    var1 = var7.uri;
                    var0 = undefined;
                    if (var1) {
                        _fun54611_ip = 85;
                        continue _fun54611
                    }
                case 66:
                    var1 = global;
                    var2 = var1.JSON;
                    var1 = var2.stringify;
                    var0 = var1.bind(var2)(var7);
                case 85:
                    var9 = undefined;
                    if (!(var9 !== var0)) {
                        _fun54611_ip = 115;
                        continue _fun54611
                    }
                case 91:
                    var0 = {};
                    var2 = var7.w;
                    var1 = var7.h;
                    var1 = var2 / var1;
                    var0.aspectRatio = var1;
                    var9 = var0;
                case 115:
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot9;
                    var0 = {};
                    var11 = new Array(2);
                    var11[0] = var9;
                    var11[1] = var8;
                    var0.style = var11;
                    var0.collapsable = var5;
                    var5 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var4 = 9;
                    var4 = var11[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = {};
                    var10 = var10.setRef;
                    var4.ref = var10;
                    var4.source = var7;
                    var7 = new Array(2);
                    var7[0] = var9;
                    var7[1] = var8;
                    var4.style = var7;
                    var14 = var4;
                    var13 = var6;
                    var6 = copyDataProperties(var14, var13);
                    var4 = var2.bind(var3)(var5, var4);
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = {
        'autoPlay': true,
        'loop': true,
        'collapsable': false
    };
    var1.defaultProps = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/LottieAnimationView.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 31, 27, 33, 6595, 2]);