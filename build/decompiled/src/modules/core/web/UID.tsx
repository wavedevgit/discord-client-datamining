// modules/core/web/UID.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var4 = function() {
        _fun44641: for (var _fun44641_ip = 0;;) switch (_fun44641_ip) {
            case 0:
                var2 = arguments[0];
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun44641_ip = 15;
                    continue _fun44641
                }
            case 9:
                var2 = 'uid_';
            case 15:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var0 = var3.bind(var1)(var0);
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot2 = var4;
    var3 = function() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = function() { // Environment: var0
            var1 = _closure1_slot2;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot3 = var3;
    var0 = 2;
    var6 = var5[var0];
    var5 = arg1;
    var0 = undefined;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/core/web/UID.tsx';
    var5 = var6.bind(var7)(var5);
    var2.uid = var4;
    var2.useUID = var3;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = var0.children;
        var0 = _closure1_slot3;
        var1 = undefined;
        var0 = var0.bind(var1)();
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.UID = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4562, 4928, 2]);