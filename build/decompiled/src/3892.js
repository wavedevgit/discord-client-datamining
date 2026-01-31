// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var4 = 1;
    var3 = var6[var4];
    var8 = var5.bind(var0)(var3);
    var3 = var8.memo;
    var8 = var8.useReducer;
    var _closure1_slot3 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var5 = var4.jsx;
    var _closure1_slot4 = var5;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var1 = function(arg0) { // Original name: PortalProviderComponent, environment: var1
        _fun35273: for (var _fun35273_ip = 0;;) switch (_fun35273_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.rootHostName;
                var12 = 'root';
                var3 = undefined;
                if (!(var3 !== var1)) {
                    _fun35273_ip = 22;
                    continue _fun35273
                }
            case 19:
                var12 = var1;
            case 22:
                var1 = var0.shouldAddRootHost;
                var8 = var3 === var1;
                if (var8) {
                    _fun35273_ip = 40;
                    continue _fun35273
                }
            case 37:
                var8 = var1;
            case 40:
                var10 = var0.children;
                var2 = _closure1_slot3;
                var5 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = 3;
                var0 = var11[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.reducer;
                var0 = 4;
                var0 = var11[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.INITIAL_STATE;
                var2 = var2.bind(var3)(var1, var0);
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var7 = var1[var0];
                var0 = 1;
                var6 = var1[var0];
                var2 = _closure1_slot4;
                var4 = 5;
                var0 = var11[var4];
                var0 = var5.bind(var3)(var0);
                var0 = var0.PortalDispatchContext;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var6;
                var6 = _closure1_slot5;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.PortalStateContext;
                var5 = var4.Provider;
                var4 = {};
                var4.value = var7;
                var7 = new Array(2);
                var7[0] = var10;
                if (!var8) {
                    _fun35273_ip = 246;
                    continue _fun35273
                }
            case 204:
                var11 = _closure1_slot4;
                var10 = _closure1_slot0;
                var13 = _closure1_slot1;
                var9 = 6;
                var9 = var13[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.PortalHost;
                var9 = {};
                var9.name = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 246:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var0)(var1);
    var3 = 'PortalProvider';
    var1.displayName = var3;
    var2.PortalProvider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 3893, 3889, 3888, 3890]);