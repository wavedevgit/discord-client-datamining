// modules/auth/RedirectUnauthenticated.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function() {
        _fun107098: for (var _fun107098_ip = 0;;) switch (_fun107098_ip) {
            case 0:
                var0 = global;
                var1 = var0.location;
                var1 = var1.pathname;
                var0 = var0.location;
                var0 = var0.search;
                var4 = var1 + var0;
                var0 = _closure1_slot3;
                if (var0) {
                    _fun107098_ip = 78;
                    continue _fun107098
                }
            case 40:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getLoginPath;
                var0 = false;
                var0 = var2.bind(var3)(var4, var0);
                _fun107098_ip = 88;
                continue _fun107098;
            case 78:
                var1 = _closure1_slot2;
                var0 = var1.REGISTER;
            case 88:
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Routes;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.CONFERENCE_MODE_ENABLED;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/RedirectUnauthenticated.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        var3 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 5;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Redirect;
        var0 = {};
        var4 = _closure1_slot5;
        var4 = var4.bind(var2)();
        var0.to = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.getRedirectPath = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 662, 33, 485, 3177, 2]);