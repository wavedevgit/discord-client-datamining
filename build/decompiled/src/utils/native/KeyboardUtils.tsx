// utils/native/KeyboardUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Keyboard;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/native/KeyboardUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun74070: for (var _fun74070_ip = 0;;) switch (_fun74070_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun74070_ip = 11;
                    continue _fun74070
                }
            case 9:
                var1 = true;
            case 11:
                if (var1) {
                    _fun74070_ip = 31;
                    continue _fun74070
                }
            case 14:
                var2 = _closure1_slot0;
                var1 = var2.dismiss;
                var1 = var1.bind(var2)();
            case 31:
                return var0;
        }
    };
    var2.dismissKeyboard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 2]);