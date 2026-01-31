// modules/self_mod/hooks/useUserIsTeen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/hooks/useUserIsTeen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useUserIsTeen, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            _fun53774: for (var _fun53774_ip = 0;;) switch (_fun53774_ip) {
                case 0:
                    var1 = _closure1_slot2;
                    var0 = var1.getCurrentUser;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun53774_ip = 33;
                        continue _fun53774
                    }
                case 27:
                    var0 = var1.nsfwAllowed;
                case 33:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1, var0);
        var0 = false;
        var0 = var0 === var1;
        return var0;
    };
    var2.useUserIsTeen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 566, 2]);