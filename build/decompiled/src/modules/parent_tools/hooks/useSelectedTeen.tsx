// modules/parent_tools/hooks/useSelectedTeen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/hooks/useSelectedTeen.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Environment: var1
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 2;
        var6 = var5[var2];
        var3 = undefined;
        var9 = var4.bind(var3)(var6);
        var8 = var9.useStateFromStores;
        var6 = _closure1_slot3;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() { // Environment: var0
            var1 = _closure1_slot3;
            var0 = var1.getSelectedTeenId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var6 = var8.bind(var9)(var7, var6);
        var _closure2_slot0 = var6;
        var2 = var5[var2];
        var3 = var4.bind(var3)(var2);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun53797: for (var _fun53797_ip = 0;;) switch (_fun53797_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var0 = undefined;
                    if (!(var2 !== var3)) {
                        _fun53797_ip = 37;
                        continue _fun53797
                    }
                case 15:
                    var3 = _closure1_slot2;
                    var2 = var3.getUser;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 37:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useSelectedTeen = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot3;
            var0 = var1.getSelectedTeenId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useSelectedTeenId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 4556, 632, 2]);