// modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107969: for (var _fun107969_ip = 0;;) switch (_fun107969_ip) {
            case 0:
                var2 = arg0;
                var9 = var2.context;
                var1 = var2.commands;
                var _closure2_slot0 = var1;
                var4 = var2.limit;
                var7 = undefined;
                if (!(var4 === var7)) {
                    _fun107969_ip = 36;
                    continue _fun107969
                }
            case 31:
                var4 = var1.length;
            case 36:
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var7;
                var _closure2_slot3 = var7;
                var _closure2_slot4 = var7;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 2;
                var3 = var8[var3];
                var5 = var6.bind(var7)(var3);
                var3 = var5.useCommandContext;
                var5 = var3.bind(var5)(var9);
                _closure2_slot2 = var5;
                var3 = 3;
                var3 = var8[var3];
                var6 = var6.bind(var7)(var3);
                var3 = var6.useTopCommands;
                var7 = var3.bind(var6)(var5);
                _closure2_slot3 = var7;
                var3 = _closure1_slot2;
                var6 = var3.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure2_slot0;
                    var2 = var3.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        var0 = arg0;
                        var2 = arg1;
                        var1 = var2.id;
                        var0[var1] = var2;
                        return var0;
                    };
                    var0 = {};
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6 = var6.bind(var3)(var1, var2);
                _closure2_slot4 = var6;
                var2 = var3.useMemo;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var0 = function() { // Environment: var0
                    var4 = _closure2_slot3;
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var1
                        var1 = _closure2_slot4;
                        var0 = arg0;
                        var0 = var1[var0];
                        return var0;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.filter;
                    var2 = function(arg0) { // Environment: var1
                        var1 = null;
                        var0 = arg0;
                        var0 = var1 != var0;
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.sort;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var4 = _closure1_slot3;
                        var3 = var4.getScoreWithoutLoadingLatest;
                        var2 = _closure2_slot2;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var2, var1);
                        var3 = var4.getScoreWithoutLoadingLatest;
                        var2 = _closure2_slot2;
                        var0 = arg1;
                        var0 = var3.bind(var4)(var2, var0);
                        var0 = var0 - var1;
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.slice;
                    var1 = _closure2_slot1;
                    var0 = 0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4639, 11600, 12147, 2]);