// modules/guilds_bar/usePendingFolderGuildIds.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function() { // Original name: getPendingFolderGuildIds, environment: var3
        _fun59783: for (var _fun59783_ip = 0;;) switch (_fun59783_ip) {
            case 0:
                var2 = arguments[0];
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun59783_ip = 37;
                    continue _fun59783
                }
            case 11:
                var5 = _closure1_slot2;
                var3 = new Array(2);
                var3[0] = var5;
                var4 = _closure1_slot3;
                var3[1] = var4;
                var2 = var3;
            case 37:
                var6 = var2;
                var4 = var6[Symbol.iterator];
                var6 = var4().next;
                var3 = var6().value;
                var2 = var4;
                var5 = var2 === var1;
                var2 = undefined;
                if (var5) {
                    _fun59783_ip = 62;
                    continue _fun59783
                }
            case 59:
                var2 = var3;
            case 62:
                var3 = undefined;
                if (var5) {
                    _fun59783_ip = 92;
                    continue _fun59783
                }
            case 67:
                var7 = var6().value;
                var6 = var4;
                var6 = var6 === var1;
                var3 = undefined;
                var5 = var6;
                if (var6) {
                    _fun59783_ip = 92;
                    continue _fun59783
                }
            case 86:
                var3 = var7;
                var5 = var6;
            case 92:
                if (var5) {
                    _fun59783_ip = 98;
                    continue _fun59783
                }
            case 95:
                var4.return();
            case 98:
                var _closure2_slot0 = var1;
                var1 = var2.computeGuildIds;
                var2 = var1.bind(var2)();
                var1 = var3.getGuilds;
                var1 = var1.bind(var3)();
                _closure2_slot0 = var1;
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 == var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/usePendingFolderGuildIds.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() { // Original name: usePendingFolderGuildIds, environment: var3
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStoresArray;
        var4 = _closure1_slot2;
        var1 = new Array(2);
        var1[0] = var4;
        var0 = _closure1_slot3;
        var1[1] = var0;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var3 = _closure1_slot2;
            var1 = new Array(2);
            var1[0] = var3;
            var0 = _closure1_slot3;
            var1[1] = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.getPendingFolderGuildIds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3173, 1410, 566, 2]);