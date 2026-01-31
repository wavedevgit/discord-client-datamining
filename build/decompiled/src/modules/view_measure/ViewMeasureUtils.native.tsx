// modules/view_measure/ViewMeasureUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure2_slot0;
            var1 = var2.measure;
            var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = {};
                var0 = arg0;
                var1.x = var0;
                var0 = arg1;
                var1.y = var0;
                var0 = arg2;
                var1.width = var0;
                var0 = arg3;
                var1.height = var0;
                var0 = arg4;
                var1.pageX = var0;
                var0 = arg5;
                var1.pageY = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot0 = var5;
    var4 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure2_slot0;
            var1 = var2.measureInWindow;
            var0 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = {};
                var0 = arg0;
                var1.x = var0;
                var0 = arg1;
                var1.y = var0;
                var0 = arg2;
                var1.width = var0;
                var0 = arg3;
                var1.height = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot1 = var4;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var4 = _closure2_slot0;
            var3 = var4.measureLayout;
            var2 = _closure2_slot1;
            var1 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = {};
                var0 = arg0;
                var1.x = var0;
                var0 = arg1;
                var1.y = var0;
                var0 = arg2;
                var1.width = var0;
                var0 = arg3;
                var1.height = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var0 = undefined;
                var1 = var1.bind(var0)(var0);
                return var0;
            };
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot2 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var6 = arg6;
    var0 = 0;
    var7 = var6[var0];
    var6 = arg1;
    var0 = undefined;
    var8 = var6.bind(var0)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/view_measure/ViewMeasureUtils.native.tsx';
    var6 = var7.bind(var8)(var6);
    var2.measureView = var5;
    var5 = function arg0() {
        _fun75655: for (var _fun75655_ip = 0;;) switch (_fun75655_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.current;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun75655_ip = 30;
                    continue _fun75655
                }
            case 14:
                var1 = _closure1_slot0;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                _fun75655_ip = 51;
                continue _fun75655;
            case 30:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.resolve;
                var1 = undefined;
                var0 = var2.bind(var3)(var1);
            case 51:
                return var0;
        }
    };
    var2.measureViewRef = var5;
    var2.measureViewInWindow = var4;
    var4 = function arg0() {
        _fun75656: for (var _fun75656_ip = 0;;) switch (_fun75656_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.current;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun75656_ip = 30;
                    continue _fun75656
                }
            case 14:
                var1 = _closure1_slot1;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                _fun75656_ip = 51;
                continue _fun75656;
            case 30:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.resolve;
                var1 = undefined;
                var0 = var2.bind(var3)(var1);
            case 51:
                return var0;
        }
    };
    var2.measureViewRefInWindow = var4;
    var2.measureViewInView = var3;
    var1 = function arg0, arg1() {
        _fun75657: for (var _fun75657_ip = 0;;) switch (_fun75657_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.current;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun75657_ip = 34;
                    continue _fun75657
                }
            case 14:
                var2 = _closure1_slot2;
                var1 = undefined;
                var0 = arg1;
                var0 = var2.bind(var1)(var3, var0);
                _fun75657_ip = 55;
                continue _fun75657;
            case 34:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.resolve;
                var1 = undefined;
                var0 = var2.bind(var3)(var1);
            case 55:
                return var0;
        }
    };
    var2.measureViewRefInView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);