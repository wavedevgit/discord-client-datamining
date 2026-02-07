// modules/popout-window/PopoutWindowStore.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun63639: for (var _fun63639_ip = 0;;) switch (_fun63639_ip) {
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
                _fun63639_ip = 74;
                continue _fun63639;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var5 = var4[var0];
    var0 = undefined;
    var5 = var3.bind(var0)(var5);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = {};
    var _closure1_slot5 = var5;
    var5 = 5;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var5 = var5.PersistedStore;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun63643: for (var _fun63643_ip = 0;;) switch (_fun63643_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun63643_ip = 69;
                        continue _fun63643
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun63643_ip = 105;
                    continue _fun63643;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun63644: for (var _fun63644_ip = 0;;) switch (_fun63644_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun63644_ip = 11;
                        continue _fun63644
                    }
                case 9:
                    var1 = {};
                case 11:
                    _closure1_slot5 = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(12);
        var0[0] = var4;
        var4 = {};
        var6 = 'getWindow';
        var4.key = var6;
        var6 = function() {
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getWindowState';
        var4.key = var6;
        var6 = function() {
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getWindowKeys';
        var4.key = var6;
        var6 = function() {
            var0 = new Array(0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getWindowOpen';
        var4.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getIsAlwaysOnTop';
        var4.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getWindowFocused';
        var4.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getWindowVisible';
        var4.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot5;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'isWindowFullyInitialized';
        var4.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'isWindowFullScreen';
        var4.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'unmountWindow';
        var4.key = var6;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[11] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var5);
    var1 = 'PopoutWindowStore';
    var6.displayName = var1;
    var1 = 'PopoutWindowStoreIOS';
    var6.persistKey = var1;
    var1 = 6;
    var1 = var4[var1];
    var10 = var3.bind(var0)(var1);
    var1 = var6.prototype;
    var3 = Object.create(var1, {
        constructor: {
            value: var6
        }
    });
    var9 = {};
    var11 = var3;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/popout-window/PopoutWindowStore.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);