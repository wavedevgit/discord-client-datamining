// modules/self_mod/SelfModUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/SelfModUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        _fun39041: for (var _fun39041_ip = 0;;) switch (_fun39041_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = var1.getCurrentUser;
                var0 = var0.bind(var1)();
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun39041_ip = 33;
                    continue _fun39041
                }
            case 27:
                var1 = var0.nsfwAllowed;
            case 33:
                var0 = false;
                var0 = var0 === var1;
                return var0;
        }
    };
    var2.isCurrentUserTeen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 2]);