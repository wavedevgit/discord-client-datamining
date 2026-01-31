// modules/native_menu/native/NativeMenuStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun68667: for (var _fun68667_ip = 0;;) switch (_fun68667_ip) {
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
                _fun68667_ip = 76;
                continue _fun68667;
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
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = null;
    var _closure1_slot5 = var1;
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function(arg0) { // Original name: NativeMenuStore, environment: var0
            _fun68671: for (var _fun68671_ip = 0;;) switch (_fun68671_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun68671_ip = 86;
                        continue _fun68671
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun68671_ip = 120;
                    continue _fun68671;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = function() { // Environment: var1
                        var0 = _closure1_slot5;
                        return var0;
                    };
                    var0.getMenu = var2;
                    var2 = function() { // Environment: var1
                        var1 = _closure1_slot5;
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var0.isOpen = var2;
                    var1 = function() { // Environment: var1
                        var0 = _closure1_slot6;
                        return var0;
                    };
                    var0.getKey = var1;
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
        var5 = 'initialize';
        var4.key = var5;
        var0 = function() { // Original name: value, environment: var0
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'NativeMenuStore';
    var6.displayName = var1;
    var1 = 6;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function(arg0) { // Original name: handleShowNativeMenu, environment: var3
        var0 = arg0;
        var2 = var0.menu;
        _closure1_slot5 = var2;
        var0 = var0.key;
        _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var1.SHOW_NATIVE_MENU = var7;
    var3 = function(arg0) { // Original name: handleHideNativeMenu, environment: var3
        _fun68677: for (var _fun68677_ip = 0;;) switch (_fun68677_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.key;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun68677_ip = 25;
                    continue _fun68677
                }
            case 14:
                var0 = _closure1_slot6;
                if (!(var2 === var0)) {
                    _fun68677_ip = 40;
                    continue _fun68677
                }
            case 25:
                _closure1_slot5 = var1;
                _closure1_slot6 = var1;
                var0 = undefined;
                return var0;
            case 40:
                var0 = false;
                return var0;
        }
    };
    var1.HIDE_NATIVE_MENU = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/native_menu/native/NativeMenuStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);