// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var3 = 0;
    var7 = var6[var3];
    var4 = metroImportAll;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.createContext;
    var7 = var3.useContext;
    var _closure1_slot0 = var7;
    var3 = var3.useMemo;
    var _closure1_slot1 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = null;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var2.VirtualizedListContext = var3;
    var3 = function(arg0) { // Original name: VirtualizedListContextResetter, environment: var1
        var0 = arg0;
        var0 = var0.children;
        var3 = _closure1_slot2;
        var1 = _closure1_slot3;
        var2 = var1.Provider;
        var1 = {};
        var4 = null;
        var1.value = var4;
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.VirtualizedListContextResetter = var3;
    var3 = function(arg0) { // Original name: VirtualizedListContextProvider, environment: var1
        var0 = arg0;
        var4 = var0.children;
        var3 = var0.value;
        var _closure2_slot0 = var3;
        var5 = _closure1_slot1;
        var6 = var3.getScrollMetrics;
        var2 = new Array(5);
        var2[0] = var6;
        var6 = var3.horizontal;
        var2[1] = var6;
        var6 = var3.getOutermostParentListRef;
        var2[2] = var6;
        var6 = var3.registerAsNestedChild;
        var2[3] = var6;
        var3 = var3.unregisterAsNestedChild;
        var2[4] = var3;
        var3 = undefined;
        var1 = function() { // Environment: var1
            var0 = {};
            var1 = null;
            var0.cellKey = var1;
            var1 = _closure2_slot0;
            var2 = var1.getScrollMetrics;
            var0.getScrollMetrics = var2;
            var2 = var1.horizontal;
            var0.horizontal = var2;
            var2 = var1.getOutermostParentListRef;
            var0.getOutermostParentListRef = var2;
            var2 = var1.registerAsNestedChild;
            var0.registerAsNestedChild = var2;
            var1 = var1.unregisterAsNestedChild;
            var0.unregisterAsNestedChild = var1;
            return var0;
        };
        var5 = var5.bind(var3)(var1, var2);
        var2 = _closure1_slot2;
        var0 = _closure1_slot3;
        var1 = var0.Provider;
        var0 = {};
        var0.value = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.VirtualizedListContextProvider = var3;
    var1 = function(arg0) { // Original name: VirtualizedListCellContextProvider, environment: var1
        var0 = arg0;
        var7 = var0.cellKey;
        var _closure2_slot0 = var7;
        var4 = var0.children;
        var5 = _closure1_slot0;
        var0 = _closure1_slot3;
        var3 = undefined;
        var8 = var5.bind(var3)(var0);
        var _closure2_slot1 = var8;
        var6 = _closure1_slot1;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var7;
        var2 = function() { // Environment: var2
            _fun4794: for (var _fun4794_ip = 0;;) switch (_fun4794_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    var2 = var0 == var2;
                    if (var2) {
                        _fun4794_ip = 53;
                        continue _fun4794
                    }
                case 16:
                    var2 = global;
                    var5 = var2.Object;
                    var4 = var5.assign;
                    var3 = _closure2_slot1;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.cellKey = var1;
                    var1 = {};
                    var0 = var4.bind(var5)(var1, var3, var2);
                case 53:
                    return var0;
            }
        };
        var5 = var6.bind(var3)(var2, var5);
        var2 = _closure1_slot2;
        var1 = var0.Provider;
        var0 = {};
        var0.value = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.VirtualizedListCellContextProvider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33]);