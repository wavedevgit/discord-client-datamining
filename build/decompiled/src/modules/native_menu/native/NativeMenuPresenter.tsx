// modules/native_menu/native/NativeMenuPresenter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/native_menu/native/NativeMenuPresenter.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun110196: for (var _fun110196_ip = 0;;) switch (_fun110196_ip) {
            case 0:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 2;
                var0 = var6[var0];
                var4 = undefined;
                var8 = var1.bind(var4)(var0);
                var7 = var8.useStateFromStoresObject;
                var0 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var0;
                var1 = function() { // Environment: var3
                    var0 = {};
                    var2 = _closure1_slot4;
                    var1 = var2.getKey;
                    var1 = var1.bind(var2)();
                    var0.key = var1;
                    var1 = var2.getMenu;
                    var1 = var1.bind(var2)();
                    var0.menu = var1;
                    return var0;
                };
                var0 = new Array(0);
                var1 = var7.bind(var8)(var5, var1, var0);
                var0 = var1.key;
                var _closure2_slot0 = var0;
                var1 = var1.menu;
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var5 = new Array(1);
                var5[0] = var0;
                var3 = function() { // Environment: var3
                    _fun110198: for (var _fun110198_ip = 0;;) switch (_fun110198_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun110198_ip = 56;
                                continue _fun110198
                            }
                        case 16:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 3;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.hideNativeMenu;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                        case 56:
                            return var0;
                    }
                };
                var3 = var7.bind(var8)(var3, var5);
                var5 = _closure1_slot1;
                var2 = 4;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.bind(var4)(var3);
                var3 = null;
                var2 = var3 != var0;
                var0 = null;
                if (!var2) {
                    _fun110196_ip = 152;
                    continue _fun110196
                }
            case 140:
                var2 = var3 != var1;
                var0 = null;
                if (!var2) {
                    _fun110196_ip = 152;
                    continue _fun110196
                }
            case 149:
                var0 = var1;
            case 152:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8693, 566, 4931, 4079, 2]);