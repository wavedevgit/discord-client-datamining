// modules/profile_customization/useNicknames.tsx
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
    var3 = 'modules/profile_customization/useNicknames.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useNicknames, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun87815: for (var _fun87815_ip = 0;;) switch (_fun87815_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var2 = var0 == var2;
                    var0 = '';
                    if (var2) {
                        _fun87815_ip = 58;
                        continue _fun87815
                    }
                case 20:
                    var3 = _closure1_slot2;
                    var2 = var3.getNicknames;
                    var1 = _closure2_slot0;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.join;
                    var1 = ', ';
                    var0 = var2.bind(var3)(var1);
                case 58:
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var2, var0, var1);
        var0 = {};
        var0.nicknames = var2;
        var1 = var2.trim;
        var2 = var1.bind(var2)();
        var1 = '';
        var1 = var1 !== var2;
        var0.canShowNicknames = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1672, 566, 2]);