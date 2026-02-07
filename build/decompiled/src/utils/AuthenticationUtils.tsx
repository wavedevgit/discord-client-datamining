// utils/AuthenticationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var4;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getToken;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot3 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 2;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/AuthenticationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getToken = var3;
    var3 = function() {
        var1 = _closure1_slot3;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var2.isAuthenticated = var3;
    var1 = function(arg0) { // Environment: var1
        _fun27762: for (var _fun27762_ip = 0;;) switch (_fun27762_ip) {
            case 0:
                var4 = arg0;
                var2 = null;
                var1 = var2 != var4;
                var0 = null;
                if (!var1) {
                    _fun27762_ip = 68;
                    continue _fun27762
                }
            case 14:
                var3 = /^\\/developers / ;
                var1 = var3.test;
                var1 = var1.bind(var3)(var4);
                var0 = null;
                if (!var1) {
                    _fun27762_ip = 68;
                    continue _fun27762
                }
            case 43:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 68:
                return var0;
        }
    };
    var2.getArtForPath = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [804, 3205, 2]);