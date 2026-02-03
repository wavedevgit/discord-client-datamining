// modules/navbars/native/NavigationPathUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var3 = function arg0() {
        _fun91372: for (var _fun91372_ip = 0;;) switch (_fun91372_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.pathname;
                var1 = _closure1_slot2;
                var1 = var1.FRIENDS;
                if (!(var2 !== var1)) {
                    _fun91372_ip = 30;
                    continue _fun91372
                }
            case 26:
                var1 = undefined;
                return var1;
            case 30:
                var0 = _closure1_slot3;
                var0 = var0.FRIENDS;
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var4);
    var8 = 0;
    var4 = var7[var8];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var4 = var4.Routes;
    var _closure1_slot2 = var4;
    var4 = {};
    var4.FRIENDS = var8;
    var5 = 'FRIENDS';
    var4[var8] = var5;
    var _closure1_slot3 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/navbars/native/NavigationPathUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.SpecialNavigationPath = var4;
    var2.getSelectedSpecialNavigationPath = var3;
    var1 = function() {
        var2 = _closure1_slot4;
        var3 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var0 = var1[var0];
        var1 = undefined;
        var3 = var3.bind(var1)(var0);
        var0 = var3.useLocation;
        var0 = var0.bind(var3)();
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useSelectedSpecialNavigationPath = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3209, 2]);