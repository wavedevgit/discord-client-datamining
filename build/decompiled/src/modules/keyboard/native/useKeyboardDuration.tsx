// modules/keyboard/native/useKeyboardDuration.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/keyboard/native/useKeyboardDuration.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun44494: for (var _fun44494_ip = 0;;) switch (_fun44494_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 0;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.isAndroid;
                var2 = var0.bind(var2)();
                var0 = 300;
                if (var2) {
                    _fun44494_ip = 79;
                    continue _fun44494
                }
            case 43:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 1;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var0 = var1.keyboardDuration;
            case 79:
                return var0;
        }
    };
    var2.getKeyboardDuration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [478, 1467, 2]);