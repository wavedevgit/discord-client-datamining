// modules/themes/native/updateTheme.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = var3.NativeModules;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/themes/native/updateTheme.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun109817: for (var _fun109817_ip = 0;;) switch (_fun109817_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 1;
                var0 = var4[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun109817_ip = 64;
                    continue _fun109817
                }
            case 41:
                var0 = _closure1_slot3;
                var2 = var0.DCDTheme;
                var0 = var2.updateTheme;
                var0 = var0.bind(var2)(var3);
                _fun109817_ip = 95;
                continue _fun109817;
            case 64:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.updateTheme;
                var0 = var1.bind(var2)(var3);
            case 95:
                return var0;
        }
    };
    var2.updateTheme = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 12762, 2]);