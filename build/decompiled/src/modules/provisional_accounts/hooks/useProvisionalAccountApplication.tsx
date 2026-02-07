// modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 1;
        var5 = var4[var1];
        var1 = undefined;
        var6 = var3.bind(var1)(var5);
        var5 = var6.useStateFromStores;
        var7 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var7;
        var0 = function() { // Environment: var0
            _fun91392: for (var _fun91392_ip = 0;;) switch (_fun91392_ip) {
                case 0:
                    var2 = _closure1_slot2;
                    var1 = var2.getGameRelationshipsForUser;
                    var0 = _closure2_slot0;
                    var1 = var1.bind(var2)(var0);
                    var2 = var1.length;
                    var0 = 0;
                    if (!(var0 === var2)) {
                        _fun91392_ip = 40;
                        continue _fun91392
                    }
                case 36:
                    var2 = undefined;
                    return var2;
                case 40:
                    var0 = var1[var0];
                    var0 = var0.applicationId;
                    return var0;
            }
        };
        var2 = var5.bind(var6)(var2, var0);
        var0 = 2;
        var0 = var4[var0];
        var1 = var3.bind(var1)(var0);
        var0 = var1.useGetOrFetchApplication;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11411, 566, 6953, 2]);