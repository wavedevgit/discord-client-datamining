// ../discord_common/js/packages/design/components/ManaContext/ManaContext.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot0 = var7;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot1 = var3;
    var4 = {};
    var _closure1_slot2 = var4;
    var3 = var7.createContext;
    var3 = var3.bind(var7)(var4);
    var _closure1_slot3 = var3;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/design/components/ManaContext/ManaContext.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ManaContext = var3;
    var3 = function() { // Environment: var1
        var2 = _closure1_slot0;
        var1 = var2.useContext;
        var0 = _closure1_slot3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useManaContext = var3;
    var1 = function(arg0) { // Environment: var1
        _fun27615: for (var _fun27615_ip = 0;;) switch (_fun27615_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.children;
                var4 = var1.value;
                var3 = _closure1_slot1;
                var1 = _closure1_slot3;
                var2 = var1.Provider;
                var1 = {};
                var6 = null;
                if (!(var6 == var4)) {
                    _fun27615_ip = 42;
                    continue _fun27615
                }
            case 38:
                var4 = _closure1_slot2;
            case 42:
                var1.value = var4;
                var1.children = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.ManaContextProvider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 2]);